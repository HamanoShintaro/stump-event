#!/usr/bin/env node
/**
 * SHUIN ルート検証＆ジオコーディング校正スクリプト
 * 使い方:
 *   node .agents/skills/create-route/scripts/verify-and-geocode.mjs scripts/areas/<slug>.mjs [--fix]
 *
 * 機能:
 * 1. 必須項目・4択・回遊ルール（買い物/休憩/食事）・禁止用語（スタンプラリー/ラリー/ナラティブ/スタンプ）の検査
 * 2. 住所の具体性チェック（「周辺」などの曖昧住所・番地欠落の検出）
 * 3. 国土地理院 (GSI) API + OpenStreetMap (Nominatim & Overpass) による実測座標の逆引き・距離ズレ検査
 *    --fix オプション指定時は、検証済み高精度座標で .mjs ファイルの lat/lng を自動補正
 * 4. オーバーレイ（f7_fragment / f7_full）を含む全テキストのファクトチェック用一覧出力
 */

import fs from 'fs';
import os from 'os';
import path from 'path';
import { execSync } from 'child_process';
import { pathToFileURL } from 'url';

const PROHIBITED_TERMS = [
  { term: 'スタンプラリー', reason: '「ルート」または「物語」を使用してください' },
  { term: 'ラリー', reason: '「ルート」を使用してください' },
  { term: 'ナラティブ', reason: 'ユーザー向け文言では「物語」または「ルート」を使用してください' },
  { term: 'スタンプ', reason: '「押印」（行為）または「SHUIN」「しるし」（収集物）を使用してください' },
  { term: '挑戦する', reason: '「めぐる」「巡る」「訪れる」などの風流な表現を使用してください' },
  { term: 'クリアする', reason: '「巡り終える」「しるしを刻み終える」「結ぶ」を使用してください' },
];

// Haversine distance in meters
function calcDistanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function queryGSI(query) {
  const url = `https://msearch.gsi.go.jp/address-search/AddressSearch?q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0 && data[0].geometry?.coordinates) {
      const [lng, lat] = data[0].geometry.coordinates;
      const title = data[0].properties?.title || query;
      const hasBlockNumber = /[0-9０-９一二三四五六七八九十]+(番|丁目|号)/.test(title);
      return {
        lat: Number(lat.toFixed(6)),
        lng: Number(lng.toFixed(6)),
        matchedTitle: title,
        hasBlockNumber,
        source: hasBlockNumber ? 'GSI (国土地理院・街区/番地一致)' : 'GSI (国土地理院・大字代表点)',
      };
    }
  } catch (e) {
    // ignore fetch error
  }
  return null;
}

async function queryOverpassNear(lat, lng, poiKeywords, spotName, radius = 800) {
  if (!poiKeywords || poiKeywords.length === 0) return null;
  const query = `[out:json][timeout:20];(node["name"](around:${radius},${lat},${lng});way["name"](around:${radius},${lat},${lng}););out center;`;
  const tmpFile = path.join(os.tmpdir(), `shuin_overpass_${process.pid}.txt`);
  fs.writeFileSync(tmpFile, query, 'utf-8');
  const endpoints = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
  ];
  for (const endpoint of endpoints) {
    try {
      const cmd = `curl -s --max-time 6 -X POST --data-urlencode "data@${tmpFile}" -H "User-Agent: SHUIN-Route-Verifier/1.0" "${endpoint}"`;
      const out = execSync(cmd, { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });
      if (!out || !out.trim().startsWith('{')) continue;
      const data = JSON.parse(out);
      const elements = data.elements || [];
      if (elements.length === 0) continue;
      const ignoreNoise = ['駐在所', '郵便局', '排水路', '自動車学校', '幼稚園', '保育園', '病院', '小学校', '中学校', '高等学校', '役場跡'];
      // キーワードが長い（より具体的）順にマッチを試みる
      const sortedKws = [...poiKeywords].sort((a, b) => b.length - a.length);
      for (const kw of sortedKws) {
        if (!kw || kw.length < 2) continue;
        const candidates = elements.filter((el) => {
          const n = el.tags?.name;
          if (!n) return false;
          if (ignoreNoise.some((noise) => n.includes(noise) && !spotName.includes(noise))) return false;
          return n.includes(kw) || kw.includes(n);
        });
        if (candidates.length > 0) {
          candidates.sort((a, b) => {
            const aLat = a.lat ?? a.center?.lat ?? 0;
            const aLng = a.lon ?? a.center?.lon ?? 0;
            const bLat = b.lat ?? b.center?.lat ?? 0;
            const bLng = b.lon ?? b.center?.lon ?? 0;
            return calcDistanceMeters(lat, lng, aLat, aLng) - calcDistanceMeters(lat, lng, bLat, bLng);
          });
          const matched = candidates[0];
          const mLat = matched.lat ?? matched.center?.lat;
          const mLng = matched.lon ?? matched.center?.lon;
          if (typeof mLat === 'number' && typeof mLng === 'number') {
            if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
            return {
              lat: Number(mLat.toFixed(6)),
              lng: Number(mLng.toFixed(6)),
              matchedTitle: matched.tags.name,
              hasBlockNumber: true,
              source: 'OSM Overpass (実在POI形状一致)',
            };
          }
        }
      }
    } catch (e) {
      // try next mirror
    }
  }
  if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
  return null;
}

const fragment = (clue) => {
  if (!clue) return '';
  const first = String(clue).split('。')[0];
  return first ? first + '。' : String(clue).slice(0, 40);
};
const full = (clue, surprise, hook) => [clue, surprise, hook].filter(Boolean).join('\n\n');

async function main() {
  const args = process.argv.slice(2);
  const targetArg = args.find((a) => !a.startsWith('--'));
  const shouldFix = args.includes('--fix');

  if (!targetArg) {
    console.error('使い方: node .agents/skills/create-route/scripts/verify-and-geocode.mjs scripts/areas/<slug>.mjs [--fix]');
    process.exit(1);
  }

  const absPath = path.resolve(targetArg);
  if (!fs.existsSync(absPath)) {
    console.error(`❌ ファイルが見つかりません: ${absPath}`);
    process.exit(1);
  }

  const mod = await import(`${pathToFileURL(absPath).href}?t=${Date.now()}`);
  const area = mod.default || mod.area;

  const errors = [];
  const warnings = [];

  console.log(`\n========================================`);
  console.log(`🔍 SHUIN ルート検証: ${area.title || targetArg} (slug: ${area.slug})`);
  console.log(`========================================\n`);

  // 1. 必須フィールド検証
  const requiredFields = [
    'slug', 'line', 'station', 'area_name', 'title', 'description',
    'category', 'prefecture', 'budget_tier', 'tags',
    'completion_badge', 'question', 'choices', 'spots'
  ];
  for (const field of requiredFields) {
    if (area[field] === undefined || area[field] === '') {
      errors.push(`必須フィールド '${field}' が未設定です`);
    }
  }

  // 2. 禁止用語（トンマナ）チェック
  const textTargets = [
    { label: 'route.title', text: area.title },
    { label: 'route.description', text: area.description },
    { label: 'route.question', text: area.question },
    { label: 'completion_badge.name_ja', text: area.completion_badge?.name_ja },
    { label: 'completion_badge.description', text: area.completion_badge?.description },
  ];
  (area.choices || []).forEach((c, i) => {
    textTargets.push({ label: `choices[${i}].text`, text: c.text });
    textTargets.push({ label: `choices[${i}].description`, text: c.description });
    textTargets.push({ label: `choices[${i}].badge.name_ja`, text: c.badge?.name_ja });
    textTargets.push({ label: `choices[${i}].badge.description`, text: c.badge?.description });
  });
  (area.spots || []).forEach((s, i) => {
    const f7Frag = s.f7_fragment || fragment(s.clue);
    const f7Full = s.f7_full || full(s.clue, s.surprise, s.hook);
    textTargets.push({ label: `spots[${i}].name`, text: s.name });
    textTargets.push({ label: `spots[${i}].description`, text: s.description });
    textTargets.push({ label: `spots[${i}].f7_fragment`, text: f7Frag });
    textTargets.push({ label: `spots[${i}].f7_full (clue/surprise/hook)`, text: f7Full });
  });

  for (const item of textTargets) {
    if (!item.text) continue;
    for (const rule of PROHIBITED_TERMS) {
      if (String(item.text).includes(rule.term)) {
        errors.push(`禁止用語検出 [${item.label}]: 「${rule.term}」が含まれています（${rule.reason}）`);
      }
    }
  }

  // 3. 4択 & 回遊ルールチェック
  if (!Array.isArray(area.choices) || area.choices.length !== 4) {
    errors.push(`choices は4択（A, B, C, D）である必要があります（現在: ${area.choices?.length || 0}件）`);
  } else {
    const expectedKeys = ['A', 'B', 'C', 'D'];
    area.choices.forEach((c, idx) => {
      if (c.key !== expectedKeys[idx]) {
        errors.push(`choices[${idx}].key が '${c.key}' です（期待値: '${expectedKeys[idx]}'）`);
      }
      if (!c.badge?.code || !c.badge?.name_ja || !c.badge?.subtitle_en || !c.badge?.description) {
        errors.push(`choices[${idx}] (${c.key}) の badge 定義が不完全です`);
      }
    });
  }

  if (!Array.isArray(area.spots) || area.spots.length < 3) {
    errors.push(`spots は最低3件（原則5件）必要です`);
  } else if (!area.spots.some((s) => ['買い物', '休憩', '食事'].includes(s.spot_type))) {
    errors.push(`回遊ルール違反: 買い物/休憩/食事 のスポットを最低1つ入れてください`);
  }

  // 4. 住所・電話番号・緯度経度のクロスチェック（GSI + OSM Overpass）
  console.log(`📍 スポット住所・緯度経度のジオコーディング照合中...`);
  let fileContent = fs.readFileSync(absPath, 'utf-8');
  let fixedCount = 0;

  for (let i = 0; i < (area.spots || []).length; i++) {
    const spot = area.spots[i];
    const idx = i + 1;
    console.log(`\n  [Spot ${idx}] ${spot.name}`);
    console.log(`    住所: ${spot.address || '(未設定)'}`);
    if (spot.phone || spot.tel) {
      console.log(`    電話: ${spot.phone || spot.tel}`);
    }

    if (!spot.address || spot.address.endsWith('周辺') || !/[0-9０-９一二三四五六七八九十]/.test(spot.address)) {
      errors.push(`Spot ${idx} (${spot.name}): 住所が曖昧か番地が含まれていません ("${spot.address}")`);
    }

    if (typeof spot.lat !== 'number' || typeof spot.lng !== 'number') {
      errors.push(`Spot ${idx} (${spot.name}): lat/lng が数値ではありません`);
      continue;
    }

    // 施設名のキーワード抽出（括弧内の正式名やスペース区切り＋先頭2文字サブストリング）
    const parenMatch = spot.name.match(/（(.+?)）/);
    const rawPoi = parenMatch ? parenMatch[1] : spot.name;
    const words = rawPoi.split(/[\s・／/]+/).filter((w) => w.length >= 2);
    const poiKeywords = [
      rawPoi,
      ...words,
      ...words.filter((w) => w.length >= 3).map((w) => w.slice(0, 2)),
    ];

    const gsi = await queryGSI(spot.address);

    // GSIが番地/街区まで一致していれば国土地理院の座標を権威データとして即採用（0.1秒で完了）
    // 大字代表点のみの場合だけOverpassでPOI形状を検索
    let overpass = null;
    if (!gsi || !gsi.hasBlockNumber) {
      overpass = await queryOverpassNear(
        spot.lat || gsi?.lat,
        spot.lng || gsi?.lng,
        poiKeywords,
        spot.name,
        800
      );
    }

    // 優先順位:
    // 1. Overpassで実在POI名が一致し、かつGSI座標と近い（またはGSIが大字代表点のみ）場合はOverpassまたは近い方を採用
    // 2. GSIが番地/街区まで一致している場合はGSIを採用
    let bestGeo = gsi;
    if (overpass && gsi) {
      const dPoi = calcDistanceMeters(spot.lat, spot.lng, overpass.lat, overpass.lng);
      const dGsi = calcDistanceMeters(spot.lat, spot.lng, gsi.lat, gsi.lng);
      if (!gsi.hasBlockNumber || dPoi < dGsi) {
        bestGeo = overpass;
      }
    } else if (overpass && !gsi) {
      bestGeo = overpass;
    }

    if (!bestGeo) {
      warnings.push(`Spot ${idx} (${spot.name}): 住所 "${spot.address}" から座標を逆引きできませんでした。実在する番地かWeb検索で確認してください。`);
      continue;
    }

    const dist = Math.round(calcDistanceMeters(spot.lat, spot.lng, bestGeo.lat, bestGeo.lng));
    console.log(`    現在座標: lat=${spot.lat}, lng=${spot.lng}`);
    console.log(`    基準座標: lat=${bestGeo.lat}, lng=${bestGeo.lng} [${bestGeo.source}: ${bestGeo.matchedTitle}]`);
    console.log(`    距離誤差: ${dist}m`);

    // 街区/番地またはOSM POI一致時は120m以内、大字代表点のみの場合は800m以内（＋要確認警告）
    const THRESHOLD_METERS = bestGeo.hasBlockNumber ? 120 : 800;
    if (!bestGeo.hasBlockNumber) {
      warnings.push(
        `Spot ${idx} (${spot.name}): 国土地理院APIが大字代表点(${bestGeo.matchedTitle})までの対応のため、施設ピンポイント座標(${spot.lat}, ${spot.lng})をWeb検索/地図で最終確認してください。`
      );
    }
    if (dist > THRESHOLD_METERS || (shouldFix && dist > 10 && bestGeo.hasBlockNumber)) {
      if (shouldFix) {
        const latRegex = new RegExp(`(lat:\\s*)${spot.lat}`);
        const lngRegex = new RegExp(`(lng:\\s*)${spot.lng}`);
        fileContent = fileContent.replace(latRegex, `$1${bestGeo.lat}`);
        fileContent = fileContent.replace(lngRegex, `$1${bestGeo.lng}`);
        spot.lat = bestGeo.lat;
        spot.lng = bestGeo.lng;
        fixedCount++;
        console.log(`    🔧 [--fix] 座標を ${bestGeo.source} の値 (lat: ${bestGeo.lat}, lng: ${bestGeo.lng}) に自動補正しました`);
      } else if (dist > THRESHOLD_METERS) {
        errors.push(
          `Spot ${idx} (${spot.name}): 設定座標と基準座標(${bestGeo.matchedTitle})が ${dist}m ずれています（許容${THRESHOLD_METERS}m以内）。--fix オプションで補正するか、正確な座標を設定してください。`
        );
      }
    } else {
      console.log(`    ✅ 座標チェックOK（誤差 ${dist}m <= ${THRESHOLD_METERS}m）`);
    }
  }

  if (shouldFix && fixedCount > 0) {
    fs.writeFileSync(absPath, fileContent, 'utf-8');
    console.log(`\n💾 ${fixedCount}件のスポット座標を ${targetArg} に保存しました。`);
  }

  // 5. サブエージェント／Web検索用のファクトチェックシート出力
  console.log(`\n========================================`);
  console.log(`📋 ファクトチェック対象一覧（歴史・施設・オーバーレイ文面）`);
  console.log(`========================================`);
  console.log(`以下の項目についてハルシネーションがないか search_web / サブエージェントで検証してください:\n`);
  console.log(`【ルート概要】\n  ${area.title}\n  ${area.description}`);
  console.log(`【核となる問い】\n  Q: ${area.question}`);
  (area.choices || []).forEach((c) => {
    console.log(`  - [${c.key}] ${c.text}: ${c.description}`);
  });
  console.log(`\n【各スポット & mock.ts オーバーレイ (f7_fragment / f7_full)】`);
  (area.spots || []).forEach((s, i) => {
    const f7Frag = s.f7_fragment || fragment(s.clue);
    const f7Full = s.f7_full || full(s.clue, s.surprise, s.hook);
    console.log(`\n  --- Spot ${i + 1}: ${s.name} (${s.spot_type}) ---`);
    console.log(`  住所: ${s.address} (lat: ${s.lat}, lng: ${s.lng})`);
    if (s.phone || s.tel) console.log(`  電話: ${s.phone || s.tel}`);
    console.log(`  説明(DB): ${s.description}`);
    console.log(`  f7_fragment(Overlay): ${f7Frag}`);
    console.log(`  f7_full(Overlay):\n    ${f7Full.replace(/\n/g, '\n    ')}`);
  });

  if (warnings.length > 0) {
    console.warn(`\n⚠️ 警告 (${warnings.length}件):`);
    warnings.forEach((w) => console.warn(`  - ${w}`));
  }

  if (errors.length > 0) {
    console.error(`\n❌ 検証エラー (${errors.length}件):`);
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }

  console.log(`\n✅ すべての自動検証（スキーマ・禁止用語・住所・緯度経度ズレ検査）をパスしました！`);
}

main();
