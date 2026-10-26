#!/usr/bin/env node
/**
 * SHUIN ルート画像生成スクリプト（OpenAI Images API 版）
 * デフォルトではコスト最適化のため「ルートのアイキャッチ画像（route-eyecatch.png）1枚のみ」をOpenAIで生成します。
 * （スポット5枚は Antigravity 内蔵の image-generator サブエージェントで生成するハイブリッド運用）
 *
 * 使い方:
 *   node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs [--model gpt-image-1|gpt-image-1-mini] [--force] [--include-spots]
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

async function generateOpenAIImage(apiKey, prompt, model = 'gpt-image-1', size = '1024x1024') {
  const body = {
    model,
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
    // gpt-image-1 で組織認証エラー等の場合は gpt-image-1-mini にフォールバック（残高不足時は即エラー）
    if (model === 'gpt-image-1' && !errText.includes('credit_balance_exhausted') && !errText.includes('insufficient_quota')) {
      console.warn(`  ⚠️ ${model} 呼び出し失敗のため gpt-image-1-mini にフォールバックします...`);
      return generateOpenAIImage(apiKey, prompt, 'gpt-image-1-mini', size);
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

function buildEyecatchPrompt(area) {
  return [
    `A refined, atmospheric editorial illustration of a cultural walking route in ${area.area_name} (${area.prefecture}, Japan).`,
    `Theme: "${area.title}".`,
    `Story context: ${area.description}`,
    `Visual style: Warm Japanese Washi paper texture, modern editorial travel magazine illustration, subtle vermilion (Shu-iro) and gold accents, rich architectural and natural details specific to ${area.area_name}, soft natural lighting, no text or letters in the image.`,
  ].join(' ');
}

function buildSpotPrompt(area, spot, idx) {
  const moodMap = {
    見どころ: 'serene historical & scenic perspective, architectural detail and seasonal atmosphere',
    買い物: 'warm inviting storefront and artisanal craft or local specialty detail',
    休憩: 'cozy café or resting space with warm sunlight, gentle atmosphere',
    食事: 'appetizing local culinary specialty in a welcoming traditional or neighborhood setting',
  };
  const angleByIndex = [
    'Morning clear light, approaching perspective at eye level, fresh watercolor and gouache editorial illustration.',
    'Intimate close-up / macro-focused editorial illustration highlighting craftsmanship, texture, and warm ambient light.',
    'Wide scenic composition with deep perspective or water/sky reflection, vibrant cinematic illustration style.',
    'Dramatic afternoon sunlight filtering through trees (komorebi) with rich architectural shadows, expressive ink and wash illustration.',
    'Golden hour / twilight serene atmosphere, looking up at a symbolic landmark, evocative painterly illustration.',
  ];
  const mood = moodMap[spot.spot_type] || moodMap['見どころ'];
  const angleStyle = angleByIndex[(idx - 1) % angleByIndex.length];
  return [
    `An atmospheric Japanese travel magazine illustration of "${spot.name}" in ${area.area_name} (${area.prefecture}, Japan).`,
    `Scene description: ${spot.description}`,
    `Key visual discovery on site: ${spot.surprise || spot.clue}`,
    `Category mood: ${mood}.`,
    `Camera angle, lighting & medium: ${angleStyle}`,
    `Strict rule: No text, no signage letters, no characters, no watermarks.`,
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
  const preferredModel = modelFlagIdx !== -1 && args[modelFlagIdx + 1] ? args[modelFlagIdx + 1] : 'gpt-image-1';

  if (!targetArg) {
    console.error('使い方: node .agents/skills/create-route/scripts/generate-images-openai.mjs scripts/areas/<slug>.mjs [--model gpt-image-1|gpt-image-1-mini] [--force] [--include-spots]');
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

  // 1. アイキャッチ画像（デフォルトはこれ1枚のみ生成）
  const eyecatchPath = path.join(outDir, 'route-eyecatch.png');
  if (fs.existsSync(eyecatchPath) && !force) {
    console.log(`  ⏭️  route-eyecatch.png は既に存在するためスキップ（上書きする場合は --force）`);
  } else {
    console.log(`  🖼️  生成中: route-eyecatch.png ...`);
    const buf = await generateOpenAIImage(apiKey, buildEyecatchPrompt(area), preferredModel, '1024x1024');
    fs.writeFileSync(eyecatchPath, buf);
    optimizePng(eyecatchPath, 800);
    console.log(`  ✅ 保存完了: public/images/${area.slug}/route-eyecatch.png`);
  }

  // 2. 各スポット画像（--include-spots 指定時のみOpenAIで生成。通常はAntigravity内蔵 image-generator を使用）
  if (includeSpots) {
    for (let i = 0; i < (area.spots || []).length; i++) {
      const spot = area.spots[i];
      const spotFile = `spot${i + 1}.png`;
      const spotPath = path.join(outDir, spotFile);

      if (fs.existsSync(spotPath) && !force) {
        console.log(`  ⏭️  ${spotFile} は既に存在するためスキップ（上書きする場合は --force）`);
        continue;
      }

      console.log(`  🖼️  生成中: ${spotFile} (${spot.name}) ...`);
      const buf = await generateOpenAIImage(apiKey, buildSpotPrompt(area, spot, i + 1), preferredModel, '1024x1024');
      fs.writeFileSync(spotPath, buf);
      optimizePng(spotPath, 560);
      console.log(`  ✅ 保存完了: public/images/${area.slug}/${spotFile}`);
    }
  } else {
    console.log(`  ℹ️  スポット画像（spot1〜spot5.png）はコスト節約のため Antigravity 内蔵の image-generator サブエージェントで生成します。`);
  }

  console.log(`\n🎉 OpenAI アイキャッチ画像の生成・最適化が完了しました！`);
}

main();
