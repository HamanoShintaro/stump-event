#!/usr/bin/env node
/**
 * SHUIN ルート一括反映スクリプト（Supabase非破壊UPSERT ＋ src/data/mock.ts 反映）
 * 使い方:
 *   node .agents/skills/create-route/scripts/deploy-route.mjs scripts/areas/<slug>.mjs [--dry-run]
 *
 * 特徴:
 * - slug から決定論的UUIDを生成（または既存 mock.ts 内の同一 title/area_name のIDを継承）するため、何度実行してもIDが変わらず安全にUPSERT可能
 * - .agents/AGENTS.md の「既存データの非破壊原則」を厳守（DELETE一切なし、routes/spots/badges すべて upsert）
 * - src/data/mock.ts の mockRallies にオーバーレイ情報（f7_fragment, f7_full, next_spot_id 等）を自動追加・更新
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { pathToFileURL } from 'url';
import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';

function deterministicUuid(seedStr) {
  const hash = crypto.createHash('sha256').update(seedStr).digest('hex');
  return [
    hash.slice(0, 8),
    hash.slice(8, 12),
    '4' + hash.slice(13, 16),
    '8' + hash.slice(17, 20),
    hash.slice(20, 32),
  ].join('-');
}

const fragment = (clue) => {
  if (!clue) return '';
  const first = String(clue).split('。')[0];
  return first ? first + '。' : String(clue).slice(0, 40);
};
const full = (clue, surprise, hook) => [clue, surprise, hook].filter(Boolean).join('\n\n');

function resolveImageUrl(slug, filename) {
  const pubDir = path.join(process.cwd(), 'public', 'images', slug);
  const jpgPath = path.join(pubDir, `${filename}.jpg`);
  if (fs.existsSync(jpgPath)) return `/images/${slug}/${filename}.jpg`;
  return `/images/${slug}/${filename}.png`;
}

async function main() {
  const args = process.argv.slice(2);
  const targetArg = args.find((a) => !a.startsWith('--'));
  const dryRun = args.includes('--dry-run');

  if (!targetArg) {
    console.error('使い方: node .agents/skills/create-route/scripts/deploy-route.mjs scripts/areas/<slug>.mjs [--dry-run]');
    process.exit(1);
  }

  const absPath = path.resolve(targetArg);
  const mod = await import(`${pathToFileURL(absPath).href}?t=${Date.now()}`);
  const area = mod.default || mod.area;

  const routeId = area.id || deterministicUuid(`shuin-route-${area.slug}`);
  const eyecatchUrl = area.thumbnail_url || resolveImageUrl(area.slug, 'route-eyecatch');

  const quizData = area.choices
    ? {
        question: area.question,
        choices: area.choices.map((c) => ({
          key: c.key,
          text: c.text,
          description: c.description,
          badge_code: c.badge?.code,
        })),
      }
    : null;

  const dbRoute = {
    id: routeId,
    title: area.title,
    description: area.description || '',
    category: area.category || '地域を感じたい',
    prefecture: area.prefecture || '',
    budget_tier: area.budget_tier || 1,
    is_published: true,
    thumbnail_url: eyecatchUrl,
    completion_ceremony_type: quizData ? 'quiz_4choice' : 'simple',
    completion_quiz_data: quizData,
  };

  const spotIds = (area.spots || []).map(
    (s, i) => s.id || deterministicUuid(`shuin-spot-${area.slug}-${i + 1}`)
  );

  const dbSpots = (area.spots || []).map((s, i) => ({
    id: spotIds[i],
    route_id: routeId,
    name: s.name,
    description: s.description || '',
    image_url: s.image_url || resolveImageUrl(area.slug, `spot${i + 1}`),
    address: s.address || '',
    location: `POINT(${s.lng} ${s.lat})`,
    radius_meters: s.radius_meters || 50,
    order_index: i + 1,
    qr_token: s.qr_token || `shuin-${area.slug}-${i + 1}`,
  }));

  const overlaySpots = (area.spots || []).map((s, i, arr) => {
    const item = {
      id: spotIds[i],
      name: s.name,
      description: s.description || '',
      address: s.address || '',
      prefecture: s.prefecture || area.prefecture || '',
      city: s.city || '',
      lat: s.lat,
      lng: s.lng,
      qr_token: s.qr_token || `shuin-${area.slug}-${i + 1}`,
      cover_image_url: s.image_url || resolveImageUrl(area.slug, `spot${i + 1}`),
      f7_fragment: s.f7_fragment || fragment(s.clue),
      f7_full: s.f7_full || full(s.clue, s.surprise, s.hook),
      is_final: i === arr.length - 1,
    };
    if (i < arr.length - 1) {
      item.next_spot_id = spotIds[i + 1];
      item.next_spot_name = arr[i + 1].name;
    }
    return item;
  });

  const mockRouteEntry = {
    id: routeId,
    title: area.title,
    name: area.title,
    description: area.description || '',
    region: area.area_name,
    area_name: area.area_name,
    cover_image_url: eyecatchUrl,
    imageUrl: eyecatchUrl,
    category: area.category || '地域を感じたい',
    route_type: 'platform',
    display_terminology: 'shuin',
    rarity_estimated_min: 90,
    is_published: true,
    completion_ceremony_type: quizData ? 'quiz_4choice' : 'simple',
    completion_quiz_data: quizData,
    spots: overlaySpots,
  };

  const dbBadges = [
    {
      code: `trailblazer_of_${routeId}`,
      category: 'route',
      name_ja: area.completion_badge.name_ja,
      subtitle_en: area.completion_badge.subtitle_en,
      rarity: 2,
      description: area.completion_badge.description || '',
      condition_type: 'route_complete',
      condition_params: { route_id: routeId },
      route_id: routeId,
      is_active: true,
    },
    ...(area.choices || []).map((c) => ({
      code: c.badge.code,
      category: 'quiz',
      name_ja: c.badge.name_ja,
      subtitle_en: c.badge.subtitle_en,
      rarity: c.badge.rarity || 3,
      description: c.badge.description || '',
      condition_type: 'quiz_choice',
      condition_params: { route_id: routeId, choice: c.key },
      route_id: routeId,
      is_active: true,
    })),
  ];

  if (dryRun) {
    console.log('--- [DRY RUN] 生成データ確認 ---');
    console.log('Route ID:', routeId);
    console.log('Spots count:', dbSpots.length);
    console.log('Badges count:', dbBadges.length);
    return;
  }

  // 1. Supabase UPSERT
  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
    realtime: { transport: ws },
  });

  console.log(`🚀 Supabase へ非破壊UPSERTを実行中 (Route ID: ${routeId})...`);
  const { error: rErr } = await supabase.from('routes').upsert([dbRoute], { onConflict: 'id' });
  if (rErr) {
    console.error('❌ routes UPSERT 失敗:', rErr);
    process.exit(1);
  }

  const { error: sErr } = await supabase.from('spots').upsert(dbSpots, { onConflict: 'id' });
  if (sErr) {
    console.error('❌ spots UPSERT 失敗:', sErr);
    process.exit(1);
  }

  const { error: bErr } = await supabase.from('badges').upsert(dbBadges, { onConflict: 'code' });
  if (bErr) {
    console.error('❌ badges UPSERT 失敗:', bErr);
    process.exit(1);
  }
  console.log(`✅ Supabase (routes / spots / badges) UPSERT 完了`);

  // 2. src/data/mock.ts への反映
  const mockPath = path.join(process.cwd(), 'src', 'data', 'mock.ts');
  if (fs.existsSync(mockPath)) {
    const mockContent = fs.readFileSync(mockPath, 'utf-8');
    if (mockContent.includes(`id: "${routeId}"`)) {
      console.log(`ℹ️  src/data/mock.ts には既に id="${routeId}" が存在します。内容を更新する場合は手動またはエディタで対象ブロックを置換してください。`);
    } else {
      const serialized = JSON.stringify(mockRouteEntry, null, 2)
        .split('\n')
        .map((line) => '  ' + line)
        .join('\n');
      const updated = mockContent.replace(/\n\];\s*$/, `,\n${serialized}\n];\n`);
      fs.writeFileSync(mockPath, updated, 'utf-8');
      console.log(`✅ src/data/mock.ts の mockRallies にルートを追加しました`);
    }
  }
}

main();
