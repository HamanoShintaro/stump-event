import { createClient } from '@supabase/supabase-js';
import ws from 'ws';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');

const pad = (num, length) => String(num).padStart(length, '0');

const getPrefecture = (line, station) => {
  if (line === "東武野田線") return "埼玉県";
  const tokyoStations = ["渋谷", "代官山", "中目黒", "祐天寺", "学芸大学", "都立大学", "自由が丘", "田園調布", "多摩川"];
  if (tokyoStations.includes(station)) return "東京都";
  return "神奈川県";
};

async function run() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft spots file not found at: ${draftPath}`);
    process.exit(1);
  }

  const rawStations = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  
  const routesToUpsert = [];
  const spotsToUpsert = [];
  const badgesToUpsert = [];

  console.log(`Compiling ${rawStations.length * 2} routes (2 routes per station) from ${rawStations.length * 10} spots...`);

  rawStations.forEach((stationObj, sIdx) => {
    const stationName = stationObj.station;
    const lineName = stationObj.line;
    const spots = stationObj.spots;
    const pref = getPrefecture(lineName, stationName);

    // Ensure we have exactly 10 spots for this station
    if (spots.length < 10) {
      console.warn(`Station ${stationName} has only ${spots.length} spots. Skipping or might fail.`);
    }

    // Route 1: History, Landmarks, Scenic Walk
    const route1Id = `c0000000-0000-0000-0000-${pad(sIdx, 12)}`;
    const r1Spots = [spots[0], spots[2], spots[4], spots[6], spots[8]].filter(Boolean);
    
    // Route 1 Choices & Badges
    const r1Choices = [
      { key: 'A', text: r1Spots[0]?.name.replace(/（.*）$/, "") || `${stationName}の歴史碑`, desc: '歴史的な佇まいに深く感銘を受けた証', code: `shuin_${sIdx}_r1_a`, name_ja: `◇${stationName}の発見者`, sub: `Discoverer of ${stationName}` },
      { key: 'B', text: r1Spots[1]?.name.replace(/（.*）$/, "") || `${stationName}の神社`, desc: '静謐な祈りの社で土地の息吹を感じた証', code: `shuin_${sIdx}_r1_b`, name_ja: `◇${stationName}の参拝者`, sub: `Pilgrim of ${stationName}` },
      { key: 'C', text: r1Spots[2]?.name.replace(/（.*）$/, "") || `${stationName}の古民家`, desc: '伝統的な建物や暮らしの知恵を学んだ証', code: `shuin_${sIdx}_r1_c`, name_ja: `◇${stationName}の探究者`, sub: `Scholar of ${stationName}` },
      { key: 'D', text: r1Spots[3]?.name.replace(/（.*）$/, "") || `${stationName}の散策路`, desc: '美しい緑道や風景を歩み、しるしを刻んだ証', code: `shuin_${sIdx}_r1_d`, name_ja: `◇${stationName}の風流人`, sub: `Aesthete of ${stationName}` },
    ];

    routesToUpsert.push({
      id: route1Id,
      title: `${stationName}の風情と歴史を辿る散策ルート`,
      description: `${stationName}駅周辺の歴史的なスポットや心洗われる名所を訪ねる散策ルートです。街の古い息遣いを感じながら、あなただけのしるしを刻みましょう。所要約45〜60分・全行程徒歩。`,
      category: '地域を感じたい',
      prefecture: pref,
      budget_tier: 1,
      is_published: true,
      thumbnail_url: `/images/stations/${sIdx}_r1-eyecatch.jpg`,
      completion_ceremony_type: "quiz_4choice",
      completion_quiz_data: {
        question: `${stationName}の散策中に訪れた、一番印象的だった名所はどれでしょう？`,
        choices: r1Choices.map(c => ({
          key: c.key,
          text: c.text,
          description: c.desc,
          badge_code: c.code
        }))
      }
    });

    r1Spots.forEach((spot, idx) => {
      const spotId = `c0000000-0000-0000-0000-${pad(sIdx, 6)}${pad(idx + 1, 6)}`;
      spotsToUpsert.push({
        id: spotId,
        route_id: route1Id,
        name: spot.name,
        description: spot.description,
        image_url: `/images/stations/${sIdx}_r1_spot${idx + 1}.jpg`,
        address: spot.address,
        location: `POINT(${spot.lng} ${spot.lat})`,
        radius_meters: 50,
        order_index: idx + 1
      });
    });

    // Seed Badges for Route 1
    // Completion (cba prefix)
    badgesToUpsert.push({
      id: `cba00000-0000-0000-0000-${pad(sIdx, 12)}`,
      code: `trailblazer_of_${route1Id}`,
      category: "route",
      name_ja: `${stationName}歴史散策の修了者`,
      subtitle_en: `Historian of ${stationName}`,
      rarity: 2,
      description: `${stationName}駅周辺の風情ある名所や歴史的スポットを巡り終えた証`,
      condition_type: "route_complete",
      condition_params: { route_id: route1Id },
      route_id: route1Id,
      is_active: true
    });
    // Choices (cbb prefix)
    r1Choices.forEach((c, cIdx) => {
      badgesToUpsert.push({
        id: `cbb00000-0000-0000-0000-${pad(sIdx, 8)}${pad(cIdx + 1, 4)}`,
        code: c.code,
        category: "quiz",
        name_ja: c.name_ja,
        subtitle_en: c.sub,
        rarity: 3,
        description: c.desc,
        condition_type: "quiz_choice",
        condition_params: { route_id: route1Id, choice: c.key },
        route_id: route1Id,
        is_active: true
      });
    });


    // Route 2: Cafes, Sweets, Shopping
    const route2Id = `c0000000-0000-0000-0001-${pad(sIdx, 12)}`;
    const r2Spots = [spots[1], spots[3], spots[5], spots[7], spots[9]].filter(Boolean);

    // Route 2 Choices & Badges
    const r2Choices = [
      { key: 'A', text: r2Spots[0]?.name.replace(/（.*）$/, "") || `${stationName}のカフェ`, desc: 'こだわりの珈琲や軽食で素敵な時間を過ごした証', code: `shuin_${sIdx}_r2_a`, name_ja: `◇${stationName}の珈琲愛好家`, sub: `Coffee Lover of ${stationName}` },
      { key: 'B', text: r2Spots[1]?.name.replace(/（.*）$/, "") || `${stationName}の洋菓子`, desc: '地元の美味しいお土産や甘味に出会った証', code: `shuin_${sIdx}_r2_b`, name_ja: `◇${stationName}の甘党`, sub: `Sweet Tooth of ${stationName}` },
      { key: 'C', text: r2Spots[2]?.name.replace(/（.*）$/, "") || `${stationName}のセレクトショップ`, desc: 'お気に入りのお買い物スポットを見つけた証', code: `shuin_${sIdx}_r2_c`, name_ja: `◇${stationName}の買い物上手`, sub: `Smart Shopper of ${stationName}` },
      { key: 'D', text: r2Spots[3]?.name.replace(/（.*）$/, "") || `${stationName}の食堂`, desc: '土地の恵みを取り入れた美味しい味覚を愉しんだ証', code: `shuin_${sIdx}_r2_d`, name_ja: `◇${stationName}の食通`, sub: `Gourmet of ${stationName}` },
    ];

    routesToUpsert.push({
      id: route2Id,
      title: `${stationName}の日常と憩いのカフェ巡り`,
      description: `${stationName}駅周辺のこだわりのベーカリー、人気のカフェ、および素敵なお買い物スポットを訪ねるルートです。美味しい香りと共に優雅な散策を愉しみましょう。所要約45〜60分・全行程徒歩。`,
      category: '食べたい',
      prefecture: pref,
      budget_tier: 1,
      is_published: true,
      thumbnail_url: `/images/stations/${sIdx}_r2-eyecatch.jpg`,
      completion_ceremony_type: "quiz_4choice",
      completion_quiz_data: {
        question: `${stationName}の散策中に訪れた、一番お気に入りだった憩いの場所はどれでしょう？`,
        choices: r2Choices.map(c => ({
          key: c.key,
          text: c.text,
          description: c.desc,
          badge_code: c.code
        }))
      }
    });

    r2Spots.forEach((spot, idx) => {
      const spotId = `c0000000-0000-0000-0001-${pad(sIdx, 6)}${pad(idx + 1, 6)}`;
      spotsToUpsert.push({
        id: spotId,
        route_id: route2Id,
        name: spot.name,
        description: spot.description,
        image_url: `/images/stations/${sIdx}_r2_spot${idx + 1}.jpg`,
        address: spot.address,
        location: `POINT(${spot.lng} ${spot.lat})`,
        radius_meters: 50,
        order_index: idx + 1
      });
    });

    // Seed Badges for Route 2
    // Completion (cba prefix)
    badgesToUpsert.push({
      id: `cba00000-0000-0000-0001-${pad(sIdx, 12)}`,
      code: `trailblazer_of_${route2Id}`,
      category: "route",
      name_ja: `${stationName}カフェ巡りの修了者`,
      subtitle_en: `Cafe Explorer of ${stationName}`,
      rarity: 2,
      description: `${stationName}駅周辺の素敵なカフェや甘味処を巡り終えた証`,
      condition_type: "route_complete",
      condition_params: { route_id: route2Id },
      route_id: route2Id,
      is_active: true
    });
    // Choices (cbb prefix)
    r2Choices.forEach((c, cIdx) => {
      badgesToUpsert.push({
        id: `cbb00000-0000-0000-0001-${pad(sIdx, 8)}${pad(cIdx + 1, 4)}`,
        code: c.code,
        category: "quiz",
        name_ja: c.name_ja,
        subtitle_en: c.sub,
        rarity: 3,
        description: c.desc,
        condition_type: "quiz_choice",
        condition_params: { route_id: route2Id, choice: c.key },
        route_id: route2Id,
        is_active: true
      });
    });
  });

  console.log(`Seeding ${routesToUpsert.length} routes, ${spotsToUpsert.length} spots, and ${badgesToUpsert.length} badges...`);

  try {
    console.log("Upserting routes...");
    const { error: routeError } = await supabase.from('routes').upsert(routesToUpsert);
    if (routeError) throw routeError;
    console.log("Routes successfully seeded.");

    console.log("Upserting spots...");
    const { error: spotError } = await supabase.from('spots').upsert(spotsToUpsert);
    if (spotError) throw spotError;
    console.log("Spots successfully seeded.");

    console.log("Upserting badges...");
    const { error: badgeError } = await supabase.from('badges').upsert(badgesToUpsert);
    if (badgeError) throw badgeError;
    console.log("Badges successfully seeded.");

    console.log(`Database seeded successfully with ${routesToUpsert.length} neighborhood routes non-destructively!`);
  } catch (err) {
    console.error("Failed to seed database:", err);
    process.exit(1);
  }
}

run();
