#!/usr/bin/env node
/**
 * SHUIN ルート画像生成スクリプト（OpenAI Images API 版）
 * デフォルトではコスト最適化のため「ルートのアイキャッチ画像（route-eyecatch.png）1枚のみ」をOpenAIで生成します。
 * （スポット5枚は Antigravity 内蔵の image-generator サブエージェントで生成するハイブリッド運用）
 *
 * 使い方:
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs [--model gpt-image-2|gpt-image-1.5|gpt-image-1-mini] [--spot-model gpt-image-1.5|gpt-image-1-mini] [--force] [--include-spots]
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { pathToFileURL } from 'url';

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
    for (const line of lines) {
      const m = line.match(new RegExp(`^\\s*${keyName}\\s*=\\s*(.+?)\\s*$`));
      if (m) {
        return m[1].replace(/^["']|["']$/g, '');
      }
    }
  }
  return null;
}

const MODEL_FALLBACK_CHAIN = ['gpt-image-2', 'gpt-image-1.5', 'gpt-image-1-mini'];

async function generateOpenAIImage(apiKey, prompt, model = 'gpt-image-1.5', size = '1024x1024') {
  const normalizedModel = model === 'gpt-image-1' ? 'gpt-image-1.5' : model;
  const body = {
    model: normalizedModel,
    prompt,
    n: 1,
    size,
    quality: 'medium',
  };

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    // 残高切れ以外のエラー（モデル制限・429レート上限等）は次のモデルへ自動フォールバック
    if (!errText.includes('credit_balance_exhausted') && !errText.includes('insufficient_quota')) {
      const idx = MODEL_FALLBACK_CHAIN.indexOf(normalizedModel);
      const nextModel = idx !== -1 && idx + 1 < MODEL_FALLBACK_CHAIN.length
        ? MODEL_FALLBACK_CHAIN[idx + 1]
        : (normalizedModel !== 'gpt-image-1-mini' ? 'gpt-image-1-mini' : null);
      if (nextModel) {
        console.warn(`  ⚠️ ${normalizedModel} 呼び出し失敗(${res.status})のため ${nextModel} にフォールバックします...`);
        return generateOpenAIImage(apiKey, prompt, nextModel, size);
      }
    }
    throw new Error(`OpenAI API Error (${res.status}): ${errText}`);
  }

  const json = await res.json();
  const item = json.data?.[0];
  if (item?.b64_json) {
    return Buffer.from(item.b64_json, 'base64');
  }
  if (item?.url) {
    const imgRes = await fetch(item.url);
    return Buffer.from(await imgRes.arrayBuffer());
  }
  throw new Error('OpenAI APIレスポンスに画像データが含まれていません');
}

const EYECATCH_STYLE_PRESETS = [
  {
    name: 'Kawase Hasui Shin-Hanga Woodblock (Twilight Indigo & Amber)',
    style:
      'Kawase Hasui and Hiroshi Yoshida inspired modern Shin-Hanga woodblock print aesthetic, rich bokashi color gradation, deep indigo twilight sky with warm amber lantern glow, crisp carved woodblock outlines and visible woodgrain pigment texture.',
  },
  {
    name: 'Mid-Century Silkscreen & Risograph Poster (Teal, Terracotta & Mustard)',
    style:
      'Stylish mid-century modern silkscreen and risograph travel poster art, bold graphic shapes, striking teal, terracotta vermilion, mustard gold, and cream palette, flat halftone grain texture, vintage railway poster composition.',
  },
  {
    name: 'Architectural Fountain-Pen & Luminous Wash (Cobalt Sky & Emerald)',
    style:
      'Expressive architectural fountain-pen linework in sepia ink with luminous transparent watercolor washes, bright cobalt sky blue and sunlit emerald greens, dynamic diagonal street-level perspective, Monocle / Casa Brutus editorial illustration.',
  },
  {
    name: 'Impasto Opaque Gouache & Poster Color (Golden Hour Sunset)',
    style:
      'Rich opaque gouache and poster-color landscape painting inspired by Kazuo Oga and Studio Ghibli background art, warm golden-hour sunset casting long dramatic shadows, tactile brush strokes, glowing clouds and rich foliage.',
  },
  {
    name: 'Chigiri-e Washi Collage & Stencil Art (Mineral Vermilion & Moss Green)',
    style:
      'Traditional Japanese Chigiri-e torn mulberry paper collage combined with Katazome stencil dyeing art, layered textured hand-dyed paper fibers, bold mineral vermilion, moss green, and ochre palette, folk-art warmth.',
  },
  {
    name: 'Aerial Isometric Bird-Eye Pictorial Map (Warm Sepia & Aquamarine)',
    style:
      'Charming bird-eye isometric pictorial map illustration looking down at a 45-degree angle over the winding town streets, river, railway tracks, and tiled roofs, warm antique sepia ink with aquamarine and coral accents.',
  },
  {
    name: 'Soft Pastel & Colored Pencil Sketchbook (Morning Mist & Lavender)',
    style:
      'Delicate chalk pastel and colored pencil travel sketchbook illustration, misty morning light with soft lavender, sage green, and warm rose-beige tones, gentle paper tooth texture.',
  },
  {
    name: 'Sumi-e Ink Wash & Gold Leaf Nihonga (Dramatic Monochrome & Gold)',
    style:
      'Atmospheric sumi-e black ink wash combined with mineral Nihonga pigments (malachite green, azurite blue, and subtle gold leaf accents), dramatic mist and negative space.',
  },
];

function buildEyecatchPrompt(area) {
  const idx = Number.isFinite(Number(area.station_order))
    ? Number(area.station_order)
    : [...String(area.slug || area.title)].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const preset = EYECATCH_STYLE_PRESETS[idx % EYECATCH_STYLE_PRESETS.length];
  const customPrompt = area.eyecatch_prompt || area.image_prompt;
  if (customPrompt) {
    return `${customPrompt} Artistic medium & color palette (${preset.name}): ${preset.style} Rendered on a single uniform cream Washi paper canvas (#F7F2E6) with wide 22-percent unpainted cream Washi paper margins around all four edges and soft organic vignette brush fades (strictly NO rectangular print block border, NO hard-edged square frame, NO matte framing box; the outer edges of the artwork must dissolve softly and organically into the surrounding unpainted cream Washi paper). Single unified continuous scene ONLY (NO floating inset vignettes, NO Picture-in-Picture boxes, NO split-screen collage, NO row of floating food dishes lined up in front of buildings). Strict rule: NO people, NO human figures, NO text, NO typography, NO letters, NO signage characters, NO watermarks in the image.`;
  }
  return [
    `An original, highly distinctive illustration of "${area.area_name}" (${area.prefecture}, Japan) capturing the theme: "${area.title}".`,
    `Scene & key motifs: ${area.description}`,
    `Artistic medium & palette (${preset.name}): ${preset.style}`,
    `Composition: Single unified continuous vignette scene rendered in the center of a single uniform cream Washi paper canvas (#F7F2E6) with wide 22-percent unpainted white/cream margins around all four edges (strictly NO rectangular print block border, NO hard-edged square frame, NO matte framing box, NO floating inset vignettes, NO Picture-in-Picture boxes, NO split-screen collage, NO row of floating food dishes lined up in front of buildings; the outer edges must dissolve softly and organically into the bare Washi paper).`,
    `Strict rule: NO people, NO human figures, NO text, NO letters, NO Japanese/English characters, NO watermarks in the image.`,
  ].join(' ');
}

function buildSpotPrompt(area, spot, idx) {
  if (spot.image_prompt) {
    return `${spot.image_prompt} Rendered in the center of a single uniform cream Washi paper canvas (#F7F2E6) with wide 24-percent unpainted cream Washi paper margins around all four edges and soft organic vignette fades (strictly NO rectangular box border, NO hard straight cut edges, NO cropped plates, bowls, cup handles, or tray corners). Single unified continuous scene ONLY (NO floating inset vignettes, NO Picture-in-Picture boxes, NO split-screen collage). Strict rule: No people, no text, no signage letters, no characters, no watermarks.`;
  }
  const moodMap = {
    見どころ: 'serene historical & scenic perspective, architectural detail and seasonal atmosphere',
    買い物: 'warm inviting storefront and artisanal craft or local specialty detail',
    休憩: 'cozy café or resting space with warm sunlight, gentle atmosphere',
    食事: 'appetizing local culinary specialty in a welcoming traditional or neighborhood setting',
  };
  const angleByIndex = [
    'Morning clear light, approaching perspective at eye level, fresh watercolor and gouache editorial illustration on cream Washi paper with visible unpainted white margins.',
    'Intimate close-up / macro-focused editorial illustration highlighting craftsmanship, texture, and warm ambient light on cream Washi paper with visible unpainted white margins.',
    'Wide scenic composition with deep perspective or water/sky reflection, vibrant cinematic illustration style on cream Washi paper with visible unpainted white margins.',
    'Dramatic afternoon sunlight filtering through trees (komorebi) with rich architectural shadows, expressive ink and wash illustration on cream Washi paper with visible unpainted white margins.',
    'Golden hour / twilight serene atmosphere, looking up at a symbolic landmark, evocative painterly illustration on cream Washi paper with visible unpainted white margins.',
  ];
  const mood = moodMap[spot.spot_type] || moodMap['見どころ'];
  const angleStyle = angleByIndex[(idx - 1) % angleByIndex.length];
  return [
    `An atmospheric Japanese travel magazine illustration of "${spot.name}" in ${area.area_name} (${area.prefecture}, Japan).`,
    `Scene description: ${spot.description}`,
    `Key visual discovery on site: ${spot.surprise || spot.clue}`,
    `Category mood: ${mood}.`,
    `Camera angle, lighting & medium: ${angleStyle} Single unified continuous composition with unpainted Washi paper margins around the edges (NO inset frames, NO Picture-in-Picture boxes). Focus on partial framing, close-up textures, light, steam, or shadows rather than a full literal architectural photo spoiler, leaving room for the visitor's imagination.`,
    `Strict rule: No people, no text, no signage letters, no characters, no watermarks.`,
  ].join(' ');
}

function optimizePng(filePath, targetWidth) {
  try {
    execSync(`sips --resampleWidth ${targetWidth} "${filePath}" --out "${filePath}"`, { stdio: 'ignore' });
  } catch (e) {
    // ignore sips error if non-macOS
  }
}

async function main() {
  const args = process.argv.slice(2);
  const targetArg = args.find((a) => !a.startsWith('--'));
  const force = args.includes('--force');
  const includeSpots = args.includes('--include-spots');
  const modelFlagIdx = args.indexOf('--model');
  const preferredModel = modelFlagIdx !== -1 && args[modelFlagIdx + 1] ? args[modelFlagIdx + 1] : 'gpt-image-2';
  const spotModelFlagIdx = args.indexOf('--spot-model');
  const preferredSpotModel = spotModelFlagIdx !== -1 && args[spotModelFlagIdx + 1] ? args[spotModelFlagIdx + 1] : null;

  if (!targetArg) {
    console.error('使い方: node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs [--model gpt-image-2|gpt-image-1.5|gpt-image-1-mini] [--spot-model gpt-image-1.5|gpt-image-1-mini] [--force] [--include-spots]');
    process.exit(1);
  }

  const apiKey = loadEnvKey('OPENAI_API_KEY');
  if (!apiKey) {
    console.error('❌ OPENAI_API_KEY が ~/.env または .env.local に見つかりません。');
    process.exit(1);
  }

  const absPath = path.resolve(targetArg);
  const mod = await import(`${pathToFileURL(absPath).href}?t=${Date.now()}`);
  const area = mod.default || mod.area;

  const outDir = path.join(process.cwd(), 'public', 'images', area.slug);
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`🎨 OpenAI (${preferredModel}) でアイキャッチ画像を生成します: public/images/${area.slug}/route-eyecatch.png`);

  // 1. アイキャッチ画像（デフォルトはこれ1枚のみ生成、1536x1024の横長比率で生成）
  const eyecatchPath = path.join(outDir, 'route-eyecatch.png');
  if (fs.existsSync(eyecatchPath) && !force) {
    console.log(`  ⏭️  route-eyecatch.png は既に存在するためスキップ（上書きする場合は --force）`);
  } else {
    console.log(`  🖼️  生成中: route-eyecatch.png (${preferredModel}) ...`);
    const buf = await generateOpenAIImage(apiKey, buildEyecatchPrompt(area), preferredModel, '1536x1024');
    fs.writeFileSync(eyecatchPath, buf);
    optimizePng(eyecatchPath, 800);
    console.log(`  ✅ 保存完了: public/images/${area.slug}/route-eyecatch.png`);
  }

  // 2. 各スポット画像（--include-spots 指定時のみOpenAIで生成。gpt-image-1.5 と gpt-image-1-mini に交互分散）
  if (includeSpots) {
    const spotModels = preferredSpotModel ? [preferredSpotModel] : ['gpt-image-1.5', 'gpt-image-1-mini'];
    for (let i = 0; i < (area.spots || []).length; i++) {
      const spot = area.spots[i];
      const spotFile = `spot${i + 1}.png`;
      const spotPath = path.join(outDir, spotFile);

      if (fs.existsSync(spotPath) && !force) {
        console.log(`  ⏭️  ${spotFile} は既に存在するためスキップ（上書きする場合は --force）`);
        continue;
      }

      const spotModel = spotModels[i % spotModels.length];
      console.log(`  🖼️  生成中: ${spotFile} (${spot.name}) [${spotModel}] ...`);
      const buf = await generateOpenAIImage(apiKey, buildSpotPrompt(area, spot, i + 1), spotModel, '1024x1024');
      fs.writeFileSync(spotPath, buf);
      optimizePng(spotPath, 560);
      console.log(`  ✅ 保存完了: public/images/${area.slug}/${spotFile}`);
    }
  } else {
    console.log(`  ℹ️  スポット画像（spot1〜spot5.png）はコスト節約のため Antigravity 内蔵の image-generator サブエージェントで生成します（429上限時は --include-spots で OpenAI 分散フォールバック可能）。`);
  }

  console.log(`\n🎉 OpenAI アイキャッチ画像の生成・最適化が完了しました！`);
}

main();
