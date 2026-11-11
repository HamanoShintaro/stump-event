#!/usr/bin/env node
/**
 * SHUIN ジャンル別ビジュアル生成 ＆ マルチモーダル自己改善エンジン
 *
 * 特徴:
 * 1. API課金ゼロ対応 ＆ 止まらない一括生成:
 *    - ローカルの Codex CLI（ChatGPT.app 同梱 / ChatGPTサブスク認証）を自動検出し、API従量課金ゼロで内蔵 `image_gen`（gpt-image-2）を実行
 *    - OpenAI API（gpt-image-1.5 -> gpt-image-1 -> gpt-image-1-mini）や Gemini API（GEMINI_API_KEY設定時）とのマルチプロバイダ自動切替にも対応
 *    - Codex 生成時の一時ファイル（~/.codex/generated_images/<thread_id>）も最適化保存直後に自動クリーンアップしディスク圧迫を防止
 * 2. 脱・金太郎飴（画風×構図×時間帯の機械的分離）:
 *    - ルートごとに `style-genres.json` の10ジャンルを衝突なしで自動割当（または --genre 指定）
 *    - 既存 .mjs 内の "Daylight watercolor and ink..." や "24% Washi margin" 定型句を自動クレンジング
 *    - 同一ルート内の Spot 1〜5 に「5つの排他的なカメラ距離・アングル・時間帯」を強制ロック
 * 3. ジャンル別の自己改善ループ（Genre-Segmented Self-Improvement）:
 *    - 生成画像を Vision AI（Codex CLI `-i` / OpenAI / Gemini）が「そのジャンル固有の採点基準（rubric）」で10点満点採点
 *    - 基準未満（水彩への退化・白い楕円余白・偽文字・構図かぶり）はその場で自動リテイク
 *    - 得られた改善知見（learned_boosters / learned_avoid）を該当ジャンル枠のみに蓄積・更新
 *
 * 使い方:
 *   # 標準実行（Codex CLI サブスク枠または有効なAPIキーでアイキャッチ＋スポット5枚を一括生成＆自己改善）
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs [--force]
 *
 *   # プロバイダ明示指定（codex | openai | gemini | auto）
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs --provider codex --force
 *
 *   # ジャンル明示指定 / アイキャッチのみ / 採点スキップ
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs --genre shin_hanga_twilight --force
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs --eyecatch-only
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs --no-critic
 *
 *   # ジャンル一覧・自己改善スコア確認
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs --list-genres
 *
 *   # 人間のフィードバックで特定ジャンルだけを進化させる（Codex サブスク枠でもAPI課金ゼロで実行可）
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs --evolve-genre risograph_vintage_poster --feedback "網点の粒状感とティール×朱色のコントラストをもっと強く"
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync, spawn, spawnSync } from 'child_process';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GENRES_FILE = path.resolve(__dirname, '../references/style-genres.json');

const OPENAI_IMAGE_MODEL_CHAIN = ['gpt-image-1.5', 'gpt-image-1', 'gpt-image-1-mini'];
const OPENAI_VISION_MODELS = ['gpt-4o-mini', 'gpt-4.1-mini'];

// OpenAI APIキーが残高切れ(insufficient_quota)だった場合、後続タスクで無駄な通信を繰り返さないサーキットブレーカー
let openaiKeyExhausted = false;

function buildCodexEnv() {
  const env = { ...process.env };
  // 残高切れの OPENAI_API_KEY が環境にあると Codex の ChatGPT サブスク認証に干渉するため必ず除外する
  delete env.OPENAI_API_KEY;
  return env;
}

function detectCodexCli() {
  const candidates = [
    process.env.CODEX_BIN,
    '/Applications/ChatGPT.app/Contents/Resources/codex-cli/bin/codex',
    '/Applications/Codex.app/Contents/Resources/codex-cli/bin/codex',
  ].filter(Boolean);

  try {
    const whichOut = execSync('which codex', { env: buildCodexEnv(), stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    if (whichOut) candidates.push(whichOut);
  } catch {
    // ignore if not in PATH
  }

  for (const bin of candidates) {
    if (!bin || !fs.existsSync(bin)) continue;
    try {
      const res = spawnSync(bin, ['login', 'status'], {
        env: buildCodexEnv(),
        encoding: 'utf-8',
        timeout: 8000,
      });
      const statusOut = `${res.stdout || ''}\n${res.stderr || ''}`.trim();
      if (res.status === 0 && /logged in/i.test(statusOut)) {
        const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), '.codex');
        return { available: true, binPath: bin, status: statusOut, codexHome };
      }
    } catch {
      // try next candidate
    }
  }
  return { available: false, binPath: null, status: '', codexHome: path.join(os.homedir(), '.codex') };
}

// 同一ルート内の5スポットで「器のアップ4連発」等を防ぐ5段階カメラ＆ライティング設計
const SPOT_SHOT_DIRECTIVES = [
  {
    slot: 1,
    id: 'wide_establishing_approach',
    label_ja: '広角アプローチ遠景（街並み・外観の導入）',
    directive:
      'MANDATORY CAMERA & LIGHTING (Shot 1/5 — Wide Establishing View): Wide-angle environmental and architectural approach shot (camera 8–15 meters back) harmonized with the genre’s signature sky and lighting. Capture the welcoming building facade, street context, roofline, and sky together. Do NOT zoom in on a single tabletop vessel or dish; if crafts or wares are featured, show them naturally within the wider storefront or gallery hall architecture.',
  },
  {
    slot: 2,
    id: 'spatial_chiaroscuro_midwide',
    label_ja: '建築空間と光影のミディアムワイド（窓辺・回廊の斜光）',
    directive:
      'MANDATORY CAMERA & LIGHTING (Shot 2/5 — Spatial Depth & Light Shafts): Medium-wide interior or courtyard architectural view emphasizing spatial depth, timber beams, alcoves, lattice windows, or garden framing, with dramatic directional shafts of natural light and long atmospheric shadows. Any featured artwork or object must occupy less than 25% of the frame inside a rich architectural space.',
  },
  {
    slot: 3,
    id: 'overhead_flatlay_graphic',
    label_ja: '真上90度俯瞰フラットレイ／極端な質感マクロ',
    directive:
      'MANDATORY CAMERA & LIGHTING (Shot 3/5 — 90-Degree Top-Down Overhead Flat-Lay): Camera positioned vertically straight above looking 90 degrees straight down onto the table, craft workbench, or garden water basin. Create a bold, graphic overhead flat-lay composition showcasing tactile textures, rising steam, handcrafted vessels, pastries/tea, and contrasting wood/linen/stone surfaces. Strictly 90-degree vertical top-down view (NOT a 45-degree oblique angle).',
  },
  {
    slot: 4,
    id: 'low_angle_diagonal_depth',
    label_ja: 'ローアングル仰角／対角線奥行き構図（午後の深い陰影）',
    directive:
      'MANDATORY CAMERA & LIGHTING (Shot 4/5 — Dynamic Low-Angle & Diagonal Depth): Place camera low with a strong diagonal leading line from foreground to deep background in rich warm afternoon light. Highlight historic eaves, heavy timber rafters, stone walls, or layered culinary ambiance where the traditional room architecture and warm interior glow frame the local meal.',
  },
  {
    slot: 5,
    id: 'golden_twilight_finale',
    label_ja: '夕景・マジックアワーの象徴的フィナーレ（余韻の引き）',
    directive:
      'MANDATORY CAMERA & LIGHTING (Shot 5/5 — Golden-Hour / Early Twilight Finale): Evocative wide upward or scenic view bathed in warm amber-gold sunset rays or serene early twilight dusk. Capture the shrine gate, temple roof, stone path, trees, or riverside horizon glowing with lingering end-of-journey atmosphere.',
  },
];

function loadEnvKey(keyName) {
  if (process.env[keyName]) return process.env[keyName];
  const envFiles = [
    path.join(process.cwd(), '.env.local'),
    path.join(process.cwd(), '.env'),
    path.join(os.homedir(), '.env'),
  ];
  for (const file of envFiles) {
    if (!fs.existsSync(file)) continue;
    const lines = fs.readFileSync(file, 'utf-8').split(/\r?\n/);
    let found = null;
    for (const line of lines) {
      const m = line.match(new RegExp(`^\\s*${keyName}\\s*=\\s*(.+?)\\s*$`));
      if (m) {
        const val = m[1].replace(/^["']|["']$/g, '').trim();
        if (val) found = val; // 同一ファイル内に複数行ある場合は末尾の有効値（最新追記）を採用
      }
    }
    if (found) return found;
  }
  return null;
}

function loadGenresRegistry() {
  return JSON.parse(fs.readFileSync(GENRES_FILE, 'utf-8'));
}

function saveGenresRegistry(registry) {
  fs.writeFileSync(GENRES_FILE, JSON.stringify(registry, null, 2) + '\n', 'utf-8');
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 既存 .mjs にハードコードされた「Daylight watercolor and ink...」や「24% Washi margin...」を除去し、
 * その土地固有の純粋な被写体情報（モチーフ・建築・料理・風景）だけを抽出する。
 */
function extractPureSubject(rawPrompt) {
  if (!rawPrompt) return '';
  let s = String(rawPrompt).trim();

  // 末尾の和紙余白・中央42%/52%・禁止事項ボイラープレートを除去
  s = s.replace(
    /[,.;]?\s*(?:painted|rendered|drawn|set|centered)\s+(?:in\s+the\s+center\s+of\s+|on\s+)(?:a\s+single\s+uniform\s+)?(?:warm\s+|soft\s+)?cream(?:-white)?\s+Washi\s+paper[\s\S]*$/i,
    ''
  );
  s = s.replace(/[,.;]?\s*occupying\s+only\s+the\s+central\s+\d+%[\s\S]*$/i, '');
  s = s.replace(/[,.;]?\s*with\s+all\s+outer\s+edges\s+dissolving[\s\S]*$/i, '');
  s = s.replace(/[,.;]?\s*strictly\s+NO\s+text[\s\S]*$/i, '');
  s = s.replace(/[,.;]?\s*no\s+text,\s*no\s+(?:letters|people)[\s\S]*$/i, '');

  // 先頭の「Daylight architectural watercolor and ink illustration of ...」等の画材・昼間固定プレフィックスを除去
  s = s.replace(
    /^(?:Clear\s+|Warm\s+|Crisp\s+|Serene\s+|Rich\s+|Atmospheric\s+|Hand-drawn\s+|Traditional\s+|Refined\s+|Soft\s+)*(?:daylight\s+|morning\s+|afternoon\s+)?(?:architectural\s+|culinary\s+|editorial\s+|historic\s+|panoramic\s+)?(?:watercolor(?:\s+and\s+ink)?|ink\s+and\s+wash|pen\s+and\s+(?:ink|watercolor)|gouache)\s+(?:illustration|emblem|crest|sketch|vignette|scene|painting)\s+(?:of\s+|depicting\s+|showing\s+)?/i,
    ''
  );

  // 夕景・宵景・朝霧ジャンルと衝突する「under a clear (blue) sky」を中和
  s = s.replace(/\s+under\s+a\s+clear(?:\s+blue)?\s+sky\b/gi, '');

  return s.trim().replace(/[,.;]+$/, '');
}

function ensureSelfImprovement(genre) {
  if (!genre.self_improvement || typeof genre.self_improvement !== 'object') {
    genre.self_improvement = {};
  }
  const si = genre.self_improvement;
  if (!Number.isFinite(Number(si.version))) si.version = 1;
  if (!Number.isFinite(Number(si.runs))) si.runs = 0;
  if (si.avg_score === undefined) si.avg_score = null;
  if (!Array.isArray(si.learned_boosters)) si.learned_boosters = [];
  if (!Array.isArray(si.learned_avoid)) si.learned_avoid = [];
  if (!Array.isArray(si.history)) si.history = [];
  return si;
}

function selectGenreForArea(registry, area, explicitGenreId) {
  const genres = registry.genres;
  if (explicitGenreId) {
    if (!genres[explicitGenreId]) {
      throw new Error(
        `指定されたジャンル "${explicitGenreId}" は存在しません。有効値: ${Object.keys(genres).join(', ')}`
      );
    }
    return genres[explicitGenreId];
  }
  if (area.style_genre && genres[area.style_genre]) {
    return genres[area.style_genre];
  }
  const perm = registry.permutation_by_order_mod_10 || Object.keys(genres);
  const hasOrder =
    area.station_order != null &&
    area.station_order !== '' &&
    Number.isFinite(Number(area.station_order));
  const orderNum = hasOrder
    ? Math.abs(Math.trunc(Number(area.station_order)))
    : [...String(area.slug || area.title || 'shuin')].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const pickedId = perm[orderNum % perm.length];
  return genres[pickedId] || Object.values(genres)[0];
}

function buildFramingInstruction(framingMode) {
  if (framingMode === 'natural_paper') {
    return 'CANVAS & FRAMING (Full-Sheet Tinted Paper): Render across the entire 3:2 horizontal tinted artist paper surface, letting the artwork, washes, and strokes span generously across 85–95% of the frame with natural organic breathing room. STRICTLY FORBIDDEN: tiny cramped central oval cutouts, stark white 25% empty borders, rectangular frame lines, or split-screen inset boxes.';
  }
  return 'CANVAS & FRAMING (100% Full-Bleed Edge-to-Edge): Paint sky, lighting, background environment, and rich color continuously all the way to every outer pixel of all four edges (100% full-bleed 3:2 rectangle). STRICTLY FORBIDDEN: white or cream vignette margins, unpainted paper borders, oval fade-outs, picture frame lines, or split-screen collage boxes.';
}

function buildGenreBoostersText(genre) {
  const si = ensureSelfImprovement(genre);
  const parts = [];
  if (si.learned_boosters.length > 0) {
    parts.push(`Genre quality boosters: ${si.learned_boosters.join('; ')}.`);
  }
  if (si.learned_avoid.length > 0) {
    parts.push(`Strictly avoid in this genre: ${si.learned_avoid.join('; ')}.`);
  }
  return parts.join(' ');
}

function buildEyecatchPrompt(area, genre, retakeHint = '') {
  const pureSubject = extractPureSubject(area.eyecatch_prompt || area.image_prompt);
  const subjectText = pureSubject
    ? pureSubject
    : `Distinctive scenery and signature motifs of ${area.slug} in Japan: ${area.description || ''}`;

  return [
    retakeHint ? `CRITICAL RETAKE ADJUSTMENT: ${retakeHint}` : '',
    `PRIMARY ARTISTIC GENRE (${genre.id}): ${genre.style_directive}`,
    buildGenreBoostersText(genre),
    `HERO COMPOSITION: ${genre.eyecatch_composition}`,
    buildFramingInstruction(genre.framing_mode),
    `SUBJECT & PLACE MOTIFS: ${subjectText}.`,
    `STRICT GLOBAL RULES: Single unified continuous scene ONLY (NO split-screen collage, NO floating inset boxes). Strictly NO text, NO kanji, NO Japanese/English letters, NO numbers, NO shop-sign characters, NO artist seals/watermarks, NO human faces/crowds.`,
  ]
    .filter(Boolean)
    .join('\n');
}

function buildSpotPrompt(area, spot, spotIndex1Based, genre, retakeHint = '') {
  const shot = SPOT_SHOT_DIRECTIVES[(spotIndex1Based - 1) % SPOT_SHOT_DIRECTIVES.length];
  const pureSpotSubject = extractPureSubject(spot.image_prompt);

  // pureSpotSubject が英語で記述されている場合は日本語混入（偽漢字誘発）を避けるため英語のまま使用する
  const contextLine = pureSpotSubject
    ? pureSpotSubject
    : `Landmark spot #${spotIndex1Based} in ${area.slug}, Japan: ${spot.description || ''} ${spot.surprise || ''}`;

  // 鳥瞰絵地図ジャンルで Spot 3 の場合は斜め上空からのミニチュア断面・中庭俯瞰も許容して世界観を保つ
  const adaptedShotDirective =
    genre.id === 'pictorial_isometric_map' && shot.slot === 3
      ? 'MANDATORY CAMERA & LIGHTING (Shot 3/5 — High-Angle Overhead Table & Craft View): Steep overhead bird’s-eye view looking down at the signature local specialty, vessels, and tabletop craftsmanship with charming pictorial detail.'
      : shot.directive;

  return [
    retakeHint ? `CRITICAL RETAKE ADJUSTMENT: ${retakeHint}` : '',
    `PRIMARY ARTISTIC GENRE (${genre.id}): ${genre.style_directive}`,
    buildGenreBoostersText(genre),
    adaptedShotDirective,
    buildFramingInstruction(genre.framing_mode),
    `SPOT SUBJECT: ${contextLine}.`,
    `IMAGINATION PRINCIPLE: Evoke atmosphere, light, craft texture, and architectural mood rather than a literal tourist snapshot. Single unified scene ONLY. Strictly NO text, NO kanji, NO letters, NO numbers, NO signage characters (render any noren curtains, lanterns, plaques, or wooden tags as plain uninscribed geometric patterns/woodgrain without characters), NO people.`,
  ]
    .filter(Boolean)
    .join('\n');
}

async function generateWithOpenAI(apiKey, prompt, preferredModel, size = '1536x1024') {
  const normalizedStart = preferredModel === 'gpt-image-1' ? 'gpt-image-1' : preferredModel;
  const chain = [
    normalizedStart,
    ...OPENAI_IMAGE_MODEL_CHAIN.filter((m) => m !== normalizedStart),
  ];

  let lastErr = null;
  for (const model of chain) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            prompt,
            n: 1,
            size,
            quality: 'medium',
          }),
        });

        if (res.ok) {
          const json = await res.json();
          const item = json.data?.[0];
          if (item?.b64_json) return { buffer: Buffer.from(item.b64_json, 'base64'), provider: `openai:${model}` };
          if (item?.url) {
            const imgRes = await fetch(item.url);
            return { buffer: Buffer.from(await imgRes.arrayBuffer()), provider: `openai:${model}` };
          }
          throw new Error('OpenAIレスポンスに画像データがありません');
        }

        const errText = await res.text();
        lastErr = new Error(`OpenAI (${model}) HTTP ${res.status}: ${errText.slice(0, 300)}`);

        // クレジット枯渇はサーキットブレーカーをONにして別プロバイダ（Codex CLI等）へ即フォールバック
        if (errText.includes('credit_balance_exhausted') || errText.includes('insufficient_quota')) {
          openaiKeyExhausted = true;
          throw lastErr;
        }

        // 429 レート制限 または 5xx 一時障害は指数バックオフで待機してリトライ
        if ((res.status === 429 || res.status >= 500) && attempt < 2) {
          const retryHeader = Number(res.headers.get('retry-after'));
          const waitMs = Number.isFinite(retryHeader) && retryHeader > 0 ? retryHeader * 1000 : (attempt + 1) * 6000;
          console.warn(`    ⏳ ${model} HTTP ${res.status} のため ${Math.round(waitMs / 1000)}秒待機して再試行...`);
          await sleep(waitMs);
          continue;
        }

        // モデル非対応(400/403/404)等は次のモデルへ
        console.warn(`    ⚠️ ${model} 失敗(${res.status}) -> 次モデルへフォールバック`);
        break;
      } catch (err) {
        lastErr = err;
        if (String(err.message).includes('credit_balance_exhausted') || String(err.message).includes('insufficient_quota')) {
          openaiKeyExhausted = true;
          throw err;
        }
        if (attempt < 2 && /fetch failed|ECONNRESET|ETIMEDOUT/i.test(String(err.message))) {
          await sleep(4000);
          continue;
        }
        break;
      }
    }
  }
  throw lastErr || new Error('OpenAI全モデルでの画像生成に失敗しました');
}

function runCodexExec(codexCli, args, timeoutMs = 240000) {
  return new Promise((resolve, reject) => {
    const child = spawn(codexCli.binPath, args, {
      env: buildCodexEnv(),
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';
    let settled = false;

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      child.kill('SIGTERM');
      reject(new Error(`Codex CLI タイムアウト (${Math.round(timeoutMs / 1000)}秒)`));
    }, timeoutMs);

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    child.on('error', (err) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(err);
    });
    child.on('close', (code) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (code !== 0) {
        reject(new Error(`Codex CLI exited ${code}: ${(stderr || stdout).slice(0, 300)}`));
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

/**
 * ローカル Codex CLI（ChatGPTサブスク枠 / API課金ゼロ）の内蔵 `image_gen`（gpt-image-2）で生成し、
 * 読み取り直後に `~/.codex/generated_images/<thread_id>` の生PNG一時ディレクトリを自動削除する。
 */
async function generateWithCodexCli(codexCli, prompt, size = '1536x1024') {
  const instruction = [
    `Call the built-in image_gen tool exactly once (do NOT run shell scripts or fallback CLI) to generate a ${size} (3:2 horizontal landscape) raster illustration following the exact specification below, then reply ONLY with the saved file path and nothing else.`,
    '',
    prompt,
  ].join('\n');

  let lastErr = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    let threadId = null;
    try {
      const { stdout } = await runCodexExec(
        codexCli,
        [
          'exec',
          '--json',
          '--ephemeral',
          '--skip-git-repo-check',
          '-s',
          'read-only',
          '-c',
          'model_reasoning_effort="low"',
          instruction,
        ],
        240000
      );

      let mentionedPath = null;
      for (const rawLine of stdout.split(/\r?\n/)) {
        const line = rawLine.trim();
        if (!line.startsWith('{')) continue;
        try {
          const ev = JSON.parse(line);
          if (ev.type === 'thread.started' && ev.thread_id) {
            threadId = ev.thread_id;
          }
          const txt = ev.item?.text || '';
          const m = txt.match(/(\/[^\s"'`]+\.png)/i);
          if (m && fs.existsSync(m[1])) {
            mentionedPath = m[1];
          }
        } catch {
          // ignore non-JSON lines
        }
      }

      let resolvedPngPath = mentionedPath;
      if (!resolvedPngPath && threadId) {
        const threadDir = path.join(codexCli.codexHome, 'generated_images', threadId);
        if (fs.existsSync(threadDir)) {
          const pngs = fs
            .readdirSync(threadDir)
            .filter((f) => f.toLowerCase().endsWith('.png'))
            .map((f) => {
              const full = path.join(threadDir, f);
              return { full, mtime: fs.statSync(full).mtimeMs };
            })
            .sort((a, b) => b.mtime - a.mtime);
          if (pngs.length > 0) resolvedPngPath = pngs[0].full;
        }
      }

      if (!resolvedPngPath || !fs.existsSync(resolvedPngPath)) {
        throw new Error('Codex CLI が画像ファイルを出力しませんでした（プラン制限またはツール未呼出）');
      }

      const buffer = fs.readFileSync(resolvedPngPath);

      // ディスク圧迫防止：このスレッド専用の一時ディレクトリ（約3MB/枚）を即座にクリーンアップ
      if (threadId && /^[0-9a-f-]{20,}$/i.test(threadId)) {
        const threadDir = path.join(codexCli.codexHome, 'generated_images', threadId);
        try {
          if (fs.existsSync(threadDir)) {
            fs.rmSync(threadDir, { recursive: true, force: true });
          }
        } catch {
          // ignore cleanup failure
        }
      }

      return { buffer, provider: 'codex-sub:gpt-image-2' };
    } catch (err) {
      lastErr = err;
      if (threadId && /^[0-9a-f-]{20,}$/i.test(threadId)) {
        const threadDir = path.join(codexCli.codexHome, 'generated_images', threadId);
        try {
          if (fs.existsSync(threadDir)) fs.rmSync(threadDir, { recursive: true, force: true });
        } catch {
          // ignore cleanup failure
        }
      }
      if (attempt < 1) {
        console.warn(`    ⏳ Codex image_gen 再試行します (${err.message.slice(0, 100)})...`);
        await sleep(3000);
      }
    }
  }
  throw lastErr || new Error('Codex CLI での画像生成に失敗しました');
}

function extractDeepBase64Image(obj) {
  if (!obj || typeof obj !== 'object') return null;
  if (obj.output_image?.data) return obj.output_image.data;
  if (obj.inlineData?.data) return obj.inlineData.data;
  if (obj.bytesBase64Encoded) return obj.bytesBase64Encoded;
  if (obj.type === 'image' && typeof obj.data === 'string' && obj.data.length > 200) return obj.data;
  for (const val of Object.values(obj)) {
    if (Array.isArray(val)) {
      for (const item of val) {
        const found = extractDeepBase64Image(item);
        if (found) return found;
      }
    } else if (val && typeof val === 'object') {
      const found = extractDeepBase64Image(val);
      if (found) return found;
    }
  }
  return null;
}

async function generateWithGeminiFallback(geminiKey, prompt) {
  const endpoints = [
    {
      model: 'gemini-nano-banana-2.1',
      url: 'https://generativelanguage.googleapis.com/v1beta/interactions',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': geminiKey,
        'Api-Revision': '2026-05-20',
      },
      body: {
        model: 'gemini-nano-banana-2.1',
        input: prompt,
        response_format: { type: 'image', aspect_ratio: '3:2', image_size: '1K' },
      },
    },
    {
      model: 'gemini-3.1-flash-image',
      url: 'https://generativelanguage.googleapis.com/v1beta/interactions',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': geminiKey,
        'Api-Revision': '2026-05-20',
      },
      body: {
        model: 'gemini-3.1-flash-image',
        input: prompt,
        response_format: { type: 'image', aspect_ratio: '3:2', image_size: '1K' },
      },
    },
    {
      model: 'gemini-2.5-flash-image',
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${geminiKey}`,
      headers: { 'Content-Type': 'application/json' },
      body: {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['IMAGE'] },
      },
    },
  ];

  let lastErr = null;
  for (const ep of endpoints) {
    try {
      const res = await fetch(ep.url, {
        method: 'POST',
        headers: ep.headers,
        body: JSON.stringify(ep.body),
      });
      if (!res.ok) {
        lastErr = new Error(`Gemini (${ep.model}) HTTP ${res.status}: ${(await res.text()).slice(0, 240)}`);
        continue;
      }
      const json = await res.json();
      const b64 = extractDeepBase64Image(json);
      if (b64) {
        return { buffer: Buffer.from(b64, 'base64'), provider: `gemini:${ep.model}` };
      }
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('Gemini画像生成フォールバックに失敗しました');
}

async function generateResilientImage({
  providerMode = 'auto',
  codexCli,
  openaiKey,
  geminiKey,
  prompt,
  preferredModel,
  size,
}) {
  if (providerMode === 'codex') {
    if (!codexCli?.available) throw new Error('Codex CLI が未検出または ChatGPT 未ログインです');
    return await generateWithCodexCli(codexCli, prompt, size);
  }
  if (providerMode === 'openai') {
    if (!openaiKey) throw new Error('OPENAI_API_KEY が設定されていません');
    return await generateWithOpenAI(openaiKey, prompt, preferredModel, size);
  }
  if (providerMode === 'gemini') {
    if (!geminiKey) throw new Error('GEMINI_API_KEY が設定されていません');
    return await generateWithGeminiFallback(geminiKey, prompt);
  }

  // auto モード: 有効な OpenAI API -> ローカル Codex CLI (ChatGPTサブスク枠) -> Gemini API の順で自動リレー
  if (openaiKey && !openaiKeyExhausted) {
    try {
      return await generateWithOpenAI(openaiKey, prompt, preferredModel, size);
    } catch (err) {
      if (codexCli?.available) {
        console.warn(`    🔄 OpenAI API 未使用/残高切れ -> ローカル Codex (ChatGPTサブスク枠) へ自動切替します...`);
        return await generateWithCodexCli(codexCli, prompt, size);
      }
      if (geminiKey) {
        console.warn(`    🔄 OpenAI失敗 (${err.message.slice(0, 120)}) -> Gemini API へ自動フォールバックします...`);
        return await generateWithGeminiFallback(geminiKey, prompt);
      }
      throw err;
    }
  }

  if (codexCli?.available) {
    try {
      return await generateWithCodexCli(codexCli, prompt, size);
    } catch (err) {
      if (geminiKey) {
        console.warn(`    🔄 Codex失敗 (${err.message.slice(0, 120)}) -> Gemini API へ自動フォールバックします...`);
        return await generateWithGeminiFallback(geminiKey, prompt);
      }
      throw err;
    }
  }

  if (geminiKey) {
    return await generateWithGeminiFallback(geminiKey, prompt);
  }

  throw new Error(
    '利用可能な画像生成プロバイダがありません（ChatGPT/Codex アプリでのログイン、または OPENAI_API_KEY / GEMINI_API_KEY を確認してください）。'
  );
}

async function resizeAndOptimizePng(rawBuffer, outPath, targetWidth, targetHeight, framingMode = 'full_bleed') {
  try {
    const sharpMod = await import('sharp');
    const sharp = sharpMod.default || sharpMod;
    let pipeline = sharp(rawBuffer);

    // full_bleed ジャンルで版画やポスター特有の「均一な外周紙マージン＋細い黒枠線」が出た場合のみ精密除去する
    // （※夜空の群青や暗い梁、クリーム色の雲など絵柄そのものを誤って削らないよう「ライン内の色均一性」と「黒枠1.5%上限」で厳密判定）
    if (framingMode === 'full_bleed') {
      const { data, info } = await sharp(rawBuffer).raw().toBuffer({ resolveWithObject: true });
      const { width: W, height: H, channels: C } = info;

      const evalPaperSpan = (getPixel, start, end) => {
        const count = end - start;
        if (count <= 0) return { isPaper: false, isUniform: false };
        let sumR = 0,
          sumG = 0,
          sumB = 0,
          paperHits = 0;
        for (let i = start; i < end; i++) {
          const [r, g, b] = getPixel(i);
          sumR += r;
          sumG += g;
          sumB += b;
          const mx = Math.max(r, g, b);
          const mn = Math.min(r, g, b);
          if (r > 195 && g > 185 && b > 160 && mx - mn < 58) paperHits++;
        }
        const isPaper = paperHits / count >= 0.9;
        if (!isPaper) return { isPaper: false, isUniform: false };
        const meanR = sumR / count,
          meanG = sumG / count,
          meanB = sumB / count;
        let uniform = 0;
        for (let i = start; i < end; i++) {
          const [r, g, b] = getPixel(i);
          if (Math.abs(r - meanR) + Math.abs(g - meanG) + Math.abs(b - meanB) < 34) uniform++;
        }
        return { isPaper: true, isUniform: uniform / count >= 0.88 };
      };

      const scanPaperDepth = (maxDepth, getLineSpan) => {
        let confirmed = 0;
        let shadowGap = 0;
        for (let d = 0; d < maxDepth; d++) {
          const { isPaper, isUniform } = getLineSpan(d);
          if (!isPaper) {
            shadowGap++;
            if (shadowGap > 4) break;
            continue;
          }
          shadowGap = 0;
          if (isUniform) confirmed = d + 1;
        }
        return confirmed;
      };

      const isThinBlackKeyblockSpan = (getPixel, start, end) => {
        const count = end - start;
        if (count <= 0) return false;
        let blackHits = 0;
        for (let i = start; i < end; i++) {
          const [r, g, b] = getPixel(i);
          const mx = Math.max(r, g, b);
          const mn = Math.min(r, g, b);
          if (mx < 55 && mx - mn < 24) blackHits++;
        }
        return blackHits / count >= 0.82;
      };

      const rowPix = (y) => (x) => {
        const idx = (y * W + x) * C;
        return [data[idx], data[idx + 1], data[idx + 2]];
      };
      const colPix = (x) => (y) => {
        const idx = (y * W + x) * C;
        return [data[idx], data[idx + 1], data[idx + 2]];
      };

      const x0 = Math.floor(W * 0.12),
        x1 = Math.floor(W * 0.88);
      const y0 = Math.floor(H * 0.12),
        y1 = Math.floor(H * 0.88);
      const maxPaperY = Math.floor(H * 0.11),
        maxPaperX = Math.floor(W * 0.11);
      const maxKeyY = Math.max(6, Math.round(H * 0.015)),
        maxKeyX = Math.max(6, Math.round(W * 0.015));

      let top = scanPaperDepth(maxPaperY, (d) => evalPaperSpan(rowPix(d), x0, x1));
      let keyTop = 0;
      while (keyTop < maxKeyY && isThinBlackKeyblockSpan(rowPix(top + keyTop), x0, x1)) keyTop++;
      top += keyTop;

      const botDepth = scanPaperDepth(maxPaperY, (d) => evalPaperSpan(rowPix(H - 1 - d), x0, x1));
      let bottom = H - 1 - botDepth;
      let keyBot = 0;
      while (keyBot < maxKeyY && isThinBlackKeyblockSpan(rowPix(bottom - keyBot), x0, x1)) keyBot++;
      bottom -= keyBot;

      let left = scanPaperDepth(maxPaperX, (d) => evalPaperSpan(colPix(d), y0, y1));
      let keyLeft = 0;
      while (keyLeft < maxKeyX && isThinBlackKeyblockSpan(colPix(left + keyLeft), y0, y1)) keyLeft++;
      left += keyLeft;

      const rightDepth = scanPaperDepth(maxPaperX, (d) => evalPaperSpan(colPix(W - 1 - d), y0, y1));
      let right = W - 1 - rightDepth;
      let keyRight = 0;
      while (keyRight < maxKeyX && isThinBlackKeyblockSpan(colPix(right - keyRight), y0, y1)) keyRight++;
      right -= keyRight;

      if (top > 2) top += 3;
      if (bottom < H - 3) bottom -= 3;
      if (left > 2) left += 3;
      if (right < W - 3) right -= 3;

      if (top > 0 || left > 0 || bottom < H - 1 || right < W - 1) {
        pipeline = sharp(rawBuffer).extract({
          left,
          top,
          width: Math.max(100, right - left + 1),
          height: Math.max(100, bottom - top + 1),
        });
      }
    }

    await pipeline
      .resize(targetWidth, targetHeight, { fit: 'cover', position: 'centre' })
      .png({ compressionLevel: 9, palette: true, quality: 90, effort: 8 })
      .toFile(outPath);
    return;
  } catch {
    fs.writeFileSync(outPath, rawBuffer);
    try {
      execSync(`sips --resampleWidth ${targetWidth} "${outPath}" --out "${outPath}"`, { stdio: 'ignore' });
    } catch {
      // ignore fallback error
    }
  }
}

async function makeCriticThumbnailBase64(rawBuffer) {
  try {
    const sharpMod = await import('sharp');
    const sharp = sharpMod.default || sharpMod;
    const thumb = await sharp(rawBuffer)
      .resize(540, 360, { fit: 'inside' })
      .jpeg({ quality: 78 })
      .toBuffer();
    return { mime: 'image/jpeg', b64: thumb.toString('base64') };
  } catch {
    return { mime: 'image/png', b64: rawBuffer.toString('base64') };
  }
}

const CRITIC_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: [
    'genre_fidelity',
    'framing_and_shot',
    'cleanliness',
    'visual_impact',
    'overall_score',
    'critique_ja',
    'retake_prompt_fix',
    'reusable_genre_booster',
    'reusable_genre_avoid',
  ],
  properties: {
    genre_fidelity: { type: 'number' },
    framing_and_shot: { type: 'number' },
    cleanliness: { type: 'number' },
    visual_impact: { type: 'number' },
    overall_score: { type: 'number' },
    critique_ja: { type: 'string' },
    retake_prompt_fix: { type: 'string' },
    reusable_genre_booster: { type: 'string' },
    reusable_genre_avoid: { type: 'string' },
  },
};

const EVOLVE_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['new_booster', 'new_avoid', 'summary_ja'],
  properties: {
    new_booster: { type: 'string' },
    new_avoid: { type: 'string' },
    summary_ja: { type: 'string' },
  },
};

async function evaluateImageWithCodexCli(codexCli, thumb, systemPrompt, userText) {
  const uid = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const ext = thumb.mime === 'image/png' ? 'png' : 'jpg';
  const imgFile = path.join(os.tmpdir(), `shuin-critic-${uid}.${ext}`);
  const schemaFile = path.join(os.tmpdir(), `shuin-critic-schema-${uid}.json`);
  const outFile = path.join(os.tmpdir(), `shuin-critic-out-${uid}.json`);

  try {
    fs.writeFileSync(imgFile, Buffer.from(thumb.b64, 'base64'));
    fs.writeFileSync(schemaFile, JSON.stringify(CRITIC_JSON_SCHEMA));
    await runCodexExec(
      codexCli,
      [
        'exec',
        '--ephemeral',
        '--skip-git-repo-check',
        '-s',
        'read-only',
        '-c',
        'model_reasoning_effort="low"',
        '-i',
        imgFile,
        '--output-schema',
        schemaFile,
        '-o',
        outFile,
        `${systemPrompt}\n\n${userText}\n\nInspect the attached image directly (do NOT invoke shell commands) and output the evaluation JSON.`,
      ],
      120000
    );
    if (fs.existsSync(outFile)) {
      const text = fs.readFileSync(outFile, 'utf-8').trim();
      if (text) return JSON.parse(text);
    }
    return null;
  } catch {
    return null;
  } finally {
    for (const f of [imgFile, schemaFile, outFile]) {
      try {
        if (fs.existsSync(f)) fs.unlinkSync(f);
      } catch {
        // ignore cleanup failure
      }
    }
  }
}

/**
 * マルチモーダル Vision 審査員:
 * そのジャンル固有のルーブリック（must_have / anti_patterns）＋カメラ距離要件で 1〜10 採点し、
 * 改善点と「そのジャンル全体に再利用できる学習ブースター」を JSON で返す。
 */
async function evaluateImageForGenre({
  providerMode = 'auto',
  codexCli,
  openaiKey,
  geminiKey,
  imageBuffer,
  genre,
  roleDescription,
}) {
  const hasOpenai = Boolean(openaiKey && !openaiKeyExhausted && providerMode !== 'codex' && providerMode !== 'gemini');
  const hasCodex = Boolean(codexCli?.available && providerMode !== 'openai' && providerMode !== 'gemini');
  const hasGemini = Boolean(geminiKey && providerMode !== 'codex' && providerMode !== 'openai');
  if (!hasOpenai && !hasCodex && !hasGemini) return null;

  const thumb = await makeCriticThumbnailBase64(imageBuffer);

  const systemPrompt = `You are the Art Director & Genre Quality Critic for SHUIN, a Japanese cultural walking guide.
Evaluate the generated illustration strictly against its ASSIGNED VISUAL GENRE rubric (do NOT judge all genres by the same style — celebrate bold genre distinctiveness!).
Return JSON ONLY with these keys:
- genre_fidelity (number 1-10): Does it unmistakably embody "${genre.label_ja}" (${genre.rubric.must_have}) and avoid (${genre.rubric.anti_patterns})? Penalize heavily (<6) if it regressed into generic pale brown-pen textbook watercolor when another genre was requested.
- framing_and_shot (number 1-10): Does it match framing_mode="${genre.framing_mode}" (full_bleed MUST have 0% white borders/margins on all 4 sides; natural_paper must span generously without a tiny oval cutout) AND match the required camera shot (${roleDescription})?
- cleanliness (number 1-10): Are there ZERO gibberish kanji/text/letters/signs and ZERO split-screen inset boxes? (Penalize <6 if readable or fake text appears).
- visual_impact (number 1-10): Color richness, contrast, and eye-catching appeal in a card list.
- overall_score (number 1-10, one decimal): Weighted average.
- critique_ja (string, concise 1 sentence in Japanese): What worked and any flaw.
- retake_prompt_fix (string in English, <=35 words, or "" if overall_score >= 8.0): Concrete visual adjustment if regenerated now.
- reusable_genre_booster (string in English, <=18 words, or ""): Only if you spot a concise general technique rule that will make future "${genre.id}" images even stronger; leave "" unless genuinely high-signal.
- reusable_genre_avoid (string in English, <=10 words, or ""): Only if a genre-specific pitfall appeared that "${genre.id}" should permanently avoid; else "".`;

  const userText = `Genre: ${genre.id} (${genre.label_ja})\nFraming mode: ${genre.framing_mode}\nRequired role & shot: ${roleDescription}`;

  if (hasOpenai) {
    for (const visionModel of OPENAI_VISION_MODELS) {
      try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: visionModel,
            temperature: 0.2,
            response_format: { type: 'json_object' },
            messages: [
              { role: 'system', content: systemPrompt },
              {
                role: 'user',
                content: [
                  { type: 'text', text: userText },
                  {
                    type: 'image_url',
                    image_url: { url: `data:${thumb.mime};base64,${thumb.b64}`, detail: 'low' },
                  },
                ],
              },
            ],
          }),
        });
        if (!res.ok) {
          const errTxt = await res.text();
          if (errTxt.includes('insufficient_quota') || errTxt.includes('credit_balance_exhausted')) {
            openaiKeyExhausted = true;
            break;
          }
          continue;
        }
        const json = await res.json();
        const content = json.choices?.[0]?.message?.content;
        if (!content) continue;
        return JSON.parse(content);
      } catch {
        // Vision審査エラー時はフォールバックへ
      }
    }
  }

  if (hasCodex) {
    const codexEval = await evaluateImageWithCodexCli(codexCli, thumb, systemPrompt, userText);
    if (codexEval) return codexEval;
  }

  if (hasGemini) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [
              {
                parts: [
                  { text: userText },
                  { inlineData: { mimeType: thumb.mime, data: thumb.b64 } },
                ],
              },
            ],
            generationConfig: { responseMimeType: 'application/json', temperature: 0.2 },
          }),
        }
      );
      if (res.ok) {
        const json = await res.json();
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return JSON.parse(text);
      }
    } catch {
      // ignore fallback error
    }
  }
  return null;
}

function recordGenreSelfImprovement(registry, genreId, slug, targetName, evaluation, improvedByRetake) {
  if (!evaluation) return false;
  const genre = registry.genres[genreId];
  if (!genre) return false;

  const si = ensureSelfImprovement(genre);

  const score = Number(evaluation.overall_score) || 0;
  const prevRuns = Number(si.runs) || 0;
  const prevAvg = si.avg_score != null && Number.isFinite(Number(si.avg_score)) ? Number(si.avg_score) : score;
  si.runs = prevRuns + 1;
  si.avg_score = Number(((prevAvg * prevRuns + score) / si.runs).toFixed(2));

  let mutatedRules = false;
  const normalizeItem = (str) => String(str || '').trim().replace(/\.$/, '');

  // リテイクで改善された知見、または低スコア要因・高スコア要因として抽出されたルールをジャンル専用メモリに統合（最大5件に厳選）
  const booster = normalizeItem(evaluation.reusable_genre_booster);
  if (booster && booster.length >= 12 && (improvedByRetake || score < 7.8 || score >= 9.0)) {
    const exists = si.learned_boosters.some(
      (b) => b.toLowerCase().slice(0, 28) === booster.toLowerCase().slice(0, 28)
    );
    if (!exists) {
      si.learned_boosters.push(booster);
      if (si.learned_boosters.length > 5) si.learned_boosters = si.learned_boosters.slice(-5);
      mutatedRules = true;
    }
  }

  const avoid = normalizeItem(evaluation.reusable_genre_avoid);
  if (avoid && avoid.length >= 6 && (improvedByRetake || score < 8.0)) {
    const exists = si.learned_avoid.some(
      (a) => a.toLowerCase().slice(0, 20) === avoid.toLowerCase().slice(0, 20)
    );
    if (!exists) {
      si.learned_avoid.push(avoid);
      if (si.learned_avoid.length > 6) si.learned_avoid = si.learned_avoid.slice(-6);
      mutatedRules = true;
    }
  }

  if (mutatedRules) {
    si.version = (Number(si.version) || 1) + 1;
  }

  si.history = [
    ...si.history.slice(-14),
    {
      at: new Date().toISOString().slice(0, 19),
      slug,
      target: targetName,
      score,
      genre_fidelity: evaluation.genre_fidelity,
      framing_and_shot: evaluation.framing_and_shot,
      cleanliness: evaluation.cleanliness,
      retake_improved: Boolean(improvedByRetake),
      note: evaluation.critique_ja || '',
    },
  ];

  return mutatedRules;
}

async function evolveGenreFromHumanFeedback({ codexCli, openaiKey, geminiKey }, genreId, feedbackJa) {
  const registry = loadGenresRegistry();
  const genre = registry.genres[genreId];
  if (!genre) {
    console.error(`❌ ジャンル "${genreId}" が見つかりません。--list-genres で確認してください。`);
    process.exit(1);
  }
  if (!codexCli?.available && !openaiKey && !geminiKey) {
    console.error('❌ 利用可能なプロバイダがありません（ChatGPT/Codex ログイン、OPENAI_API_KEY、または GEMINI_API_KEY）。');
    process.exit(1);
  }

  const si = ensureSelfImprovement(genre);
  const sysText =
    'Convert user Japanese art-direction feedback for ONE specific illustration genre into concise English prompt rules without affecting any other genre. Return JSON: { "new_booster": "concise English positive instruction <=22 words", "new_avoid": "concise English negative guard <=12 words or empty string", "summary_ja": "1-sentence Japanese confirmation" }';
  const usrText = `Genre: ${genre.id} (${genre.label_ja})\nCurrent style: ${genre.style_directive}\nCurrent boosters: ${si.learned_boosters.join('; ')}\nUser feedback: ${feedbackJa}`;

  let parsed = null;
  let lastErr = null;

  if (openaiKey && !openaiKeyExhausted) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          temperature: 0.2,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: sysText },
            { role: 'user', content: usrText },
          ],
        }),
      });
      if (res.ok) {
        parsed = JSON.parse((await res.json()).choices[0].message.content);
      } else {
        const errTxt = await res.text();
        if (errTxt.includes('insufficient_quota') || errTxt.includes('credit_balance_exhausted')) {
          openaiKeyExhausted = true;
        }
        lastErr = new Error(`OpenAI HTTP ${res.status}: ${errTxt.slice(0, 200)}`);
      }
    } catch (e) {
      lastErr = e;
    }
  }

  if (!parsed && codexCli?.available) {
    const uid = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const schemaFile = path.join(os.tmpdir(), `shuin-evolve-schema-${uid}.json`);
    const outFile = path.join(os.tmpdir(), `shuin-evolve-out-${uid}.json`);
    try {
      fs.writeFileSync(schemaFile, JSON.stringify(EVOLVE_JSON_SCHEMA));
      await runCodexExec(
        codexCli,
        [
          'exec',
          '--ephemeral',
          '--skip-git-repo-check',
          '-s',
          'read-only',
          '-c',
          'model_reasoning_effort="low"',
          '--output-schema',
          schemaFile,
          '-o',
          outFile,
          `${sysText}\n\n${usrText}`,
        ],
        90000
      );
      if (fs.existsSync(outFile)) {
        parsed = JSON.parse(fs.readFileSync(outFile, 'utf-8').trim());
      }
    } catch (e) {
      lastErr = e;
    } finally {
      for (const f of [schemaFile, outFile]) {
        try {
          if (fs.existsSync(f)) fs.unlinkSync(f);
        } catch {
          // ignore cleanup failure
        }
      }
    }
  }

  if (!parsed && geminiKey) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: sysText }] },
            contents: [{ parts: [{ text: usrText }] }],
            generationConfig: { responseMimeType: 'application/json', temperature: 0.2 },
          }),
        }
      );
      if (res.ok) {
        const json = await res.json();
        parsed = JSON.parse(json.candidates[0].content.parts[0].text);
      } else {
        lastErr = new Error(`Gemini HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
      }
    } catch (e) {
      lastErr = e;
    }
  }

  if (!parsed) {
    throw lastErr || new Error('ジャンル改善API呼び出しに失敗しました');
  }

  if (parsed.new_booster) {
    si.learned_boosters = [...si.learned_boosters, parsed.new_booster].slice(-6);
  }
  if (parsed.new_avoid) {
    si.learned_avoid = [...si.learned_avoid, parsed.new_avoid].slice(-6);
  }
  si.version = (Number(si.version) || 1) + 1;
  si.history = [
    ...si.history.slice(-14),
    {
      at: new Date().toISOString().slice(0, 19),
      slug: 'manual-feedback',
      target: 'genre-evolution',
      score: null,
      note: `[手動改善] ${feedbackJa} -> ${parsed.summary_ja}`,
    },
  ];
  saveGenresRegistry(registry);
  console.log(`✅ ジャンル [${genre.id}] (${genre.label_ja}) を v${si.version} に進化させました！`);
  console.log(`   📝 反映内容: ${parsed.summary_ja}`);
  console.log(`   ✨ 追加ブースター: ${parsed.new_booster}`);
  if (parsed.new_avoid) console.log(`   🚫 追加NGガード: ${parsed.new_avoid}`);
}

function printGenresSummary() {
  const registry = loadGenresRegistry();
  console.log(`\n🎨 SHUIN ビジュアルジャンル一覧（全 ${Object.keys(registry.genres).length} ジャンル）:\n`);
  for (const g of Object.values(registry.genres)) {
    const si = ensureSelfImprovement(g);
    const avg = si.avg_score != null ? `${si.avg_score}/10` : '未計測';
    console.log(`  • ${g.id.padEnd(26)} | ${g.label_ja}`);
    console.log(
      `    枠: ${g.framing_mode.padEnd(13)} | v${si.version} | 累計採点: ${si.runs}枚 (平均 ${avg}) | 学習則: ${si.learned_boosters.length}件`
    );
  }
  console.log('');
}

async function processSingleTask({
  task,
  providerMode,
  codexCli,
  openaiKey,
  geminiKey,
  genre,
  enableCritic,
  maxRetries,
  registry,
  areaSlug,
}) {
  let bestCandidate = null;
  let retakeHint = '';
  let improvedByRetake = false;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const prompt = task.buildPrompt(retakeHint);
    const labelPrefix = attempt === 0 ? '🖼️  生成中' : `🔄 自動リテイク(${attempt}/${maxRetries})`;
    console.log(`  ${labelPrefix}: ${task.filename} [${task.shotLabel}] ...`);

    const { buffer, provider } = await generateResilientImage({
      providerMode,
      codexCli,
      openaiKey,
      geminiKey,
      prompt,
      preferredModel: task.preferredModel,
      size: '1536x1024',
    });

    if (!enableCritic || (!codexCli?.available && !openaiKey && !geminiKey)) {
      bestCandidate = { buffer, provider, evalResult: null, score: 0 };
      break;
    }

    const evalResult = await evaluateImageForGenre({
      providerMode,
      codexCli,
      openaiKey,
      geminiKey,
      imageBuffer: buffer,
      genre,
      roleDescription: task.roleDescription,
    });

    if (!evalResult) {
      console.log(`    ⚠️ Vision審査スキップ（審査応答なし）: ${task.filename}`);
      if (!bestCandidate) {
        bestCandidate = { buffer, provider, evalResult: null, score: 0 };
      }
      break;
    }

    const score = Number(evalResult.overall_score) || 0;
    const gScore = Number(evalResult.genre_fidelity) || 0;
    const fScore = Number(evalResult.framing_and_shot) || 0;
    const cScore = Number(evalResult.cleanliness) || 0;

    console.log(
      `    📊 審査 [${genre.id}] ${task.filename}: 総合 ${score}/10 (画風:${gScore} 構図:${fScore} 無文字:${cScore}) — ${evalResult.critique_ja || 'OK'}`
    );

    if (!bestCandidate || score > bestCandidate.score) {
      if (attempt > 0 && bestCandidate && score > bestCandidate.score) {
        improvedByRetake = true;
      }
      bestCandidate = { buffer, provider, evalResult, score };
    }

    const passed = score >= 7.6 && gScore >= 7 && fScore >= 7 && cScore >= 7;
    if (passed || attempt >= maxRetries) {
      break;
    }

    retakeHint =
      evalResult.retake_prompt_fix ||
      `Strengthen authentic ${genre.id} medium texture, strictly obey ${genre.framing_mode} framing and camera shot, and remove any text-like marks.`;
    console.log(`    💡 改善指示を注入して再生成します: "${retakeHint}"`);
  }

  await resizeAndOptimizePng(
    bestCandidate.buffer,
    task.outPath,
    task.targetWidth,
    task.targetHeight,
    genre.framing_mode
  );
  const mutated = recordGenreSelfImprovement(
    registry,
    genre.id,
    areaSlug,
    task.filename,
    bestCandidate.evalResult,
    improvedByRetake
  );

  const kb = Math.round(fs.statSync(task.outPath).size / 1024);
  console.log(
    `  ✅ 保存完了: public/images/${areaSlug}/${task.filename} (${task.targetWidth}x${task.targetHeight}, ${kb}KB, via ${bestCandidate.provider})${
      mutated ? ` [🧬 ${genre.id} 学習ルール更新!]` : ''
    }`
  );
}

async function runWithConcurrency(items, concurrency, workerFn) {
  let cursor = 0;
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const idx = cursor++;
      await workerFn(items[idx], idx);
    }
  });
  await Promise.all(workers);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--list-genres')) {
    printGenresSummary();
    return;
  }

  const openaiKey = loadEnvKey('OPENAI_API_KEY');
  const geminiKey = loadEnvKey('GEMINI_API_KEY') || loadEnvKey('GOOGLE_API_KEY');
  const codexCli = detectCodexCli();

  const evolveIdx = args.indexOf('--evolve-genre');
  if (evolveIdx !== -1) {
    const genreId = args[evolveIdx + 1];
    const fbIdx = args.indexOf('--feedback');
    const feedback = fbIdx !== -1 ? args[fbIdx + 1] : '';
    if (!genreId || !feedback) {
      console.error('使い方: --evolve-genre <genre_id> --feedback "<日本語の改善指示>"');
      process.exit(1);
    }
    await evolveGenreFromHumanFeedback({ codexCli, openaiKey, geminiKey }, genreId, feedback);
    return;
  }

  const flagArgsWithValues = new Set([
    '--provider',
    '--genre',
    '--model',
    '--spot-model',
    '--max-retries',
    '--concurrency',
  ]);
  const targetArg = args.find((a, idx) => {
    if (a.startsWith('--')) return false;
    if (idx > 0 && flagArgsWithValues.has(args[idx - 1])) return false;
    return true;
  });

  if (!targetArg) {
    console.error(
      '使い方: node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs [--force] [--provider auto|codex|openai|gemini] [--genre <id>] [--eyecatch-only] [--no-critic]'
    );
    process.exit(1);
  }

  const force = args.includes('--force');
  const eyecatchOnly = args.includes('--eyecatch-only');
  const enableCritic = !args.includes('--no-critic');

  const getFlagVal = (flag, fallback) => {
    const i = args.indexOf(flag);
    return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
  };

  const providerMode = getFlagVal('--provider', 'auto');
  if (!['auto', 'codex', 'openai', 'gemini'].includes(providerMode)) {
    throw new Error(`不正な --provider 指定です: ${providerMode} (auto | codex | openai | gemini)`);
  }
  const explicitGenre = getFlagVal('--genre', null);
  const preferredEyecatchModel = getFlagVal('--model', 'gpt-image-1.5');
  const preferredSpotModelOverride = getFlagVal('--spot-model', null);
  const maxRetries = Math.max(0, Number(getFlagVal('--max-retries', '1')) || 0);
  const concurrency = Math.max(1, Math.min(3, Number(getFlagVal('--concurrency', '2')) || 2));

  const absPath = path.resolve(targetArg);
  const mod = await import(`${pathToFileURL(absPath).href}?t=${Date.now()}`);
  const area = mod.default || mod.area;
  if (!area || !area.slug) {
    throw new Error(`エリア定義または slug が見つかりません: ${absPath}`);
  }

  const registry = loadGenresRegistry();
  const genre = selectGenreForArea(registry, area, explicitGenre);
  const si = ensureSelfImprovement(genre);

  const outDir = path.join(process.cwd(), 'public', 'images', area.slug);
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`\n🎨 ルート [${area.slug}]（${area.title || area.slug}）`);
  console.log(`   割当ジャンル: ${genre.id} — ${genre.label_ja} [枠:${genre.framing_mode} / 辞書v${si.version}]`);
  console.log(
    `   プロバイダ構成: mode=${providerMode} | Codexサブスク=${codexCli.available ? '有効 (gpt-image-2)' : '未検出'} | OpenAI_KEY=${
      openaiKey ? '設定あり' : 'なし'
    } | Gemini_KEY=${geminiKey ? '設定あり' : 'なし'}`
  );

  const tasks = [];

  const eyecatchPath = path.join(outDir, 'route-eyecatch.png');
  if (!fs.existsSync(eyecatchPath) || force) {
    tasks.push({
      filename: 'route-eyecatch.png',
      outPath: eyecatchPath,
      shotLabel: 'Hero Eyecatch',
      preferredModel: preferredEyecatchModel,
      targetWidth: 1200,
      targetHeight: 800,
      roleDescription: `Route Hero Card Eyecatch: ${genre.eyecatch_composition}`,
      buildPrompt: (retakeHint) => buildEyecatchPrompt(area, genre, retakeHint),
    });
  } else {
    console.log(`  ⏭️  route-eyecatch.png は既に存在するためスキップ（上書きは --force）`);
  }

  if (!eyecatchOnly) {
    const spotModels = preferredSpotModelOverride
      ? [preferredSpotModelOverride]
      : ['gpt-image-1.5', 'gpt-image-1-mini'];
    const spots = area.spots || [];
    for (let i = 0; i < spots.length; i++) {
      const spot = spots[i];
      const filename = `spot${i + 1}.png`;
      const spotPath = path.join(outDir, filename);
      if (fs.existsSync(spotPath) && !force) {
        console.log(`  ⏭️  ${filename} は既に存在するためスキップ（上書きは --force）`);
        continue;
      }
      const shot = SPOT_SHOT_DIRECTIVES[i % SPOT_SHOT_DIRECTIVES.length];
      tasks.push({
        filename,
        outPath: spotPath,
        shotLabel: `Spot ${i + 1}: ${shot.label_ja}`,
        preferredModel: spotModels[i % spotModels.length],
        targetWidth: 900,
        targetHeight: 600,
        roleDescription: `Spot ${i + 1} (${spot.name}) — ${shot.directive}`,
        buildPrompt: (retakeHint) => buildSpotPrompt(area, spot, i + 1, genre, retakeHint),
      });
    }
  }

  if (args.includes('--print-prompts')) {
    console.log(
      JSON.stringify(
        {
          slug: area.slug,
          genre_id: genre.id,
          genre_label: genre.label_ja,
          framing_mode: genre.framing_mode,
          tasks: tasks.map((t) => ({
            filename: t.filename,
            outPath: t.outPath,
            shotLabel: t.shotLabel,
            targetWidth: t.targetWidth,
            targetHeight: t.targetHeight,
            roleDescription: t.roleDescription,
            prompt: t.buildPrompt(''),
          })),
        },
        null,
        2
      )
    );
    return;
  }

  if (tasks.length === 0) {
    console.log(`✨ すべての画像が生成済みです（再生成する場合は --force を指定してください）。`);
    return;
  }

  await runWithConcurrency(tasks, concurrency, async (task) => {
    await processSingleTask({
      task,
      providerMode,
      codexCli,
      openaiKey,
      geminiKey,
      genre,
      enableCritic,
      maxRetries,
      registry,
      areaSlug: area.slug,
    });
  });

  if (enableCritic) {
    saveGenresRegistry(registry);
    const updatedSi = ensureSelfImprovement(registry.genres[genre.id]);
    const avgLabel = updatedSi.avg_score != null ? `${updatedSi.avg_score}/10` : '未計測';
    console.log(
      `\n🧬 ジャンル自己改善ログ保存完了 [${genre.id} v${updatedSi.version}]: 累計 ${updatedSi.runs}枚 / 平均スコア ${avgLabel}`
    );
  }
  console.log(`🎉 [${area.slug}] 全 ${tasks.length} 枚の画像生成・最適化が完了しました！\n`);
}

main().catch((err) => {
  console.error(`\n❌ エラーが発生しました: ${err.message}`);
  process.exit(1);
});
