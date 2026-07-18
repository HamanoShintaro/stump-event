import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

// （埼玉ダミーデータ・ヘルパーは自由が丘一本化に伴い削除）

// 与野のルート・スポット固定データ
const YONO_ROUTE_ID = 'e2b1c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d';

const yonoRoute = {
  id: YONO_ROUTE_ID,
  title: "与野の記憶を辿り、境界を歩く",
  description: "さいたま市の中心にありながら、かつての浦和・大宮・与野の「境界」に位置する与野駅。新緑が美しい遊歩道や、大正から昭和の雰囲気を残す街角、そして静かに佇むお社。この地が繋いできた歴史と境界を巡り、あなただけの「与野の記憶」を刻むフィールドワーク用のルートです。所要40〜60分・全行程徒歩。",
  category: "地域を感じたい",
  prefecture: "埼玉県",
  budget_tier: 1,
  is_published: true,
  thumbnail_url: "/images/yono/route-eyecatch.png",
  completion_ceremony_type: "quiz_4choice",
  completion_quiz_data: {
    question: '与野駅周辺の境界は、かつて何の境界だった？',
    choices: [
      { key: "A", text: "浦和宿と大宮宿", description: "中山道の2つの宿場の境界付近に位置していた", badge_code: "shuin_yono_shukuba" },
      { key: "B", text: "武蔵国と下総国", description: "かつての旧国名の境界だった", badge_code: "shuin_yono_kuni" },
      { key: "C", text: "台地と低地", description: "大宮台地と芝川低地の境界に位置する", badge_code: "shuin_yono_daichi" },
      { key: "D", text: "幕府領と旗本領", description: "江戸時代の領地区分の境界線だった", badge_code: "shuin_yono_ryochi" }
    ]
  }
};

const yonoSpots = [
  {
    id: 'c1111111-1111-1111-1111-111111111111',
    route_id: YONO_ROUTE_ID,
    name: "大正浪漫香る駅前（与野駅東口広場）",
    description: "大正元年に開業した与野駅。東口周辺には大正から昭和にかけての風情を残す古いレンガ調の建物や街並みが広がり、かつての面影を残しています。",
    image_url: "/images/yono/spot1.png",
    address: "埼玉県さいたま市浦和区上木崎1丁目",
    location: "POINT(139.639818 35.879712)",
    radius_meters: 50,
    order_index: 1
  },
  {
    id: 'c2222222-2222-2222-2222-222222222222',
    route_id: YONO_ROUTE_ID,
    name: "自家焙煎珈琲と洋食の香り（カフェ・ド・コバ）",
    description: "与野駅東口すぐの場所で長年愛される自家焙煎珈琲のお店。どこか懐かしい昭和レトロな空間で、名物のナポリタンや香り豊かな珈琲を味わいながらひと息つきましょう。",
    image_url: "/images/yono/spot2.png",
    address: "埼玉県さいたま市浦和区上木崎1丁目10-1",
    location: "POINT(139.640200 35.879500)",
    radius_meters: 50,
    order_index: 2
  },
  {
    id: 'c3333333-3333-3333-3333-333333333333',
    route_id: YONO_ROUTE_ID,
    name: "針ヶ谷の総鎮守（針ヶ谷氷川神社）",
    description: "与野駅近くの針ヶ谷地区に静かに佇むお社。鳥居をくぐると厳かな空気が漂い、旅の安全としるしの獲得を見守ってくれます。",
    image_url: "/images/yono/spot3.png",
    address: "埼玉県さいたま市浦和区針ヶ谷4-1-2",
    location: "POINT(139.635812 35.877202)",
    radius_meters: 50,
    order_index: 3
  },
  {
    id: 'c4444444-4444-4444-4444-444444444444',
    route_id: YONO_ROUTE_ID,
    name: "老舗和菓子店で甘味選び（大こくや）",
    description: "明治創業の歴史を持つ、与野駅西口からほど近い老舗和菓子店。名物の大福や季節の団子など、伝統の製法で丁寧に作られる甘味をお土産に買い求めましょう。",
    image_url: "/images/yono/spot4.png",
    address: "埼玉県さいたま市中央区下落合1010",
    location: "POINT(139.637500 35.878800)",
    radius_meters: 50,
    order_index: 4
  },
  {
    id: 'c5555555-5555-5555-5555-555555555555',
    route_id: YONO_ROUTE_ID,
    name: "旅のしるべ（針ヶ谷中公園）",
    description: "散策の最後に訪れる、市民の憩いの公園。木陰のベンチで風を感じながら、今日のフィールドワークで巡った与野の街の記憶を振り返り、最後の押印を完了します。",
    image_url: "/images/yono/spot5.png",
    address: "埼玉県さいたま市浦和区針ヶ谷3丁目",
    location: "POINT(139.633500 35.875800)",
    radius_meters: 50,
    order_index: 5
  }
];

const yonoBadges = [
  {
    code: `trailblazer_of_${YONO_ROUTE_ID}`,
    category: "route",
    name_ja: "与野の巡礼者",
    subtitle_en: "Pilgrim of Yono",
    rarity: 2,
    description: "与野駅の境界と歴史をめぐるすべてのスポットを訪れ、しるしを刻み終えた証",
    condition_type: "route_complete",
    condition_params: { route_id: YONO_ROUTE_ID },
    route_id: YONO_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_yono_shukuba",
    category: "quiz",
    name_ja: "◇歴史の辻に立つ者",
    subtitle_en: "The Crossroads Historian",
    rarity: 3,
    description: "与野の境界を「中山道の浦和宿と大宮宿の境界」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: YONO_ROUTE_ID, choice: "A" },
    route_id: YONO_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_yono_kuni",
    category: "quiz",
    name_ja: "◇国境の目撃者",
    subtitle_en: "The Border Witness",
    rarity: 3,
    description: "与野の境界を「武蔵国と下総国の境界」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: YONO_ROUTE_ID, choice: "B" },
    route_id: YONO_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_yono_daichi",
    category: "quiz",
    name_ja: "◇地形の鑑定士",
    subtitle_en: "The Topographer",
    rarity: 3,
    description: "与野の境界を「台地と低地の境界」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: YONO_ROUTE_ID, choice: "C" },
    route_id: YONO_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_yono_ryochi",
    category: "quiz",
    name_ja: "◇封建の領民",
    subtitle_en: "The Feudal Citizen",
    rarity: 3,
    description: "与野の境界を「幕府領と旗本領の境界」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: YONO_ROUTE_ID, choice: "D" },
    route_id: YONO_ROUTE_ID,
    is_active: true
  }
];

// 自由が丘のルート・スポット固定データ
const JIYUGAOKA_ROUTE_ID = 'a4b1c2d3-e4f5-5a6b-7c8d-9e0f1a2b3c4d';

// DBのスキーマカラムに厳格に合わせたルートオブジェクト
const jiyugaokaRoute = {
  id: JIYUGAOKA_ROUTE_ID,
  title: "自由が丘で、\"自由\"の正体を探す",
  description: "写真映えのヴェネツィア、暮らしの雑貨、桜の緑道。おしゃれな街として知られる自由が丘。でも、この街はなぜ\"自由\"を名乗るのか？ 5つのスポットには答えではなく、食い違う\"手がかり\"だけが置かれている。歩き終えたとき、あなた自身の答えを選ぶ。選んだ答えで、授かる称号が変わる。所要60〜90分・全行程徒歩。",
  category: "地域を感じたい",
  prefecture: "東京都",
  budget_tier: 1,
  is_published: true,
  thumbnail_url: "/images/jiyugaoka/route-eyecatch.png",
  completion_ceremony_type: "quiz_4choice",
  completion_quiz_data: {
    question: '自由が丘の"自由"は、何から生まれたか？',
    choices: [
      { key: "A", text: "名乗ること", description: "谷畑が学校の名を借り自由が丘と名乗った", badge_code: "shuin_jiyugaoka_sokyu" },
      { key: "B", text: "手放すこと", description: "本物の川を地下に隠し湿地を捨てて理想を描いた", badge_code: "shuin_jiyugaoka_ankyo" },
      { key: "C", text: "選び直し続けること", description: "教育→暮らし→再開発と意味を更新し続ける", badge_code: "shuin_jiyugaoka_koshin" },
      { key: "D", text: "借り物かもしれない", description: "運河も学校名も外から借りた", badge_code: "shuin_jiyugaoka_inyo" }
    ]
  }
};

// DBのスキーマカラムに厳格に合わせたスポットオブジェクト
const jiyugaokaSpots = [
  {
    id: 'b1111111-1111-1111-1111-111111111111',
    route_id: JIYUGAOKA_ROUTE_ID,
    name: "谷畑の権現さま（自由が丘熊野神社）",
    description: "自由が丘の総鎮守。御朱印（来訪証明）の本家であり、あなたが集める押印の原点。まずここで街の一番古い記憶に触れてから歩き出す。",
    image_url: "/images/jiyugaoka/spot1.png",
    address: "東京都目黒区自由が丘1-24-12",
    location: "POINT(139.669865 35.609138)",
    radius_meters: 50,
    order_index: 1
  },
  {
    id: 'b2222222-2222-2222-2222-222222222222',
    route_id: JIYUGAOKA_ROUTE_ID,
    name: "水のない街の運河（La Vita／ラ・ヴィータ）",
    description: "ヴェネツィアの街並みを再現した、自由が丘で最も写真に撮られる一角。運河・橋・ゴンドラが小さな広場に凝縮されている。",
    image_url: "/images/jiyugaoka/spot2.png",
    address: "東京都目黒区自由が丘2-8-3",
    location: "POINT(139.667597 35.611115)",
    radius_meters: 50,
    order_index: 2
  },
  {
    id: 'b3333333-3333-3333-3333-333333333333',
    route_id: JIYUGAOKA_ROUTE_ID,
    name: "暮らしをDIYする店（TODAY'S SPECIAL Jiyugaoka）",
    description: "「食とくらしのDIY」がテーマの旗艦店。器・植物・本・服が一棟に詰まり、\"自分で選ぶ暮らし\"の象徴。",
    image_url: "/images/jiyugaoka/spot3.png",
    address: "東京都目黒区自由が丘2-17-8",
    location: "POINT(139.666144 35.608933)",
    radius_meters: 50,
    order_index: 3
  },
  {
    id: 'b4444444-4444-4444-4444-444444444444',
    route_id: JIYUGAOKA_ROUTE_ID,
    name: "昭和の密度が残るビル（自由が丘デパート）",
    description: "駅前にそびえる昭和から続く象徴的な商業ビル。約100の小さな店が迷路状に詰まり、再開発が進む今も\"古い自由が丘\"の密度を残す。",
    image_url: "/images/jiyugaoka/spot4.png",
    address: "東京都目黒区自由が丘1-28-8",
    location: "POINT(139.668500 35.607908)",
    radius_meters: 50,
    order_index: 4
  },
  {
    id: 'b5555555-5555-5555-5555-555555555555',
    route_id: JIYUGAOKA_ROUTE_ID,
    name: "川の上を歩いていた（九品仏川緑道／グリーンストリート）",
    description: "駅南口からのびる石畳の散歩道。かつて流れていた九品仏川を1974年に暗渠化（地下化）してできた道。春は桜のトンネルになる。",
    image_url: "/images/jiyugaoka/spot5.png",
    address: "東京都目黒区自由が丘1丁目",
    location: "POINT(139.668630 35.606353)",
    radius_meters: 50,
    order_index: 5
  }
];

// バッジ（称号）データ
const jiyugaokaBadges = [
  {
    code: `trailblazer_of_${JIYUGAOKA_ROUTE_ID}`,
    category: "route",
    name_ja: "自由が丘の巡礼者",
    subtitle_en: "Pilgrim of Jiyugaoka",
    rarity: 2,
    description: "自由が丘の街に秘められたすべての手がかりをめぐり、しるしを刻み終えた証",
    condition_type: "route_complete",
    condition_params: { route_id: JIYUGAOKA_ROUTE_ID },
    route_id: JIYUGAOKA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_jiyugaoka_sokyu",
    category: "quiz",
    name_ja: "◇蒼穹（あおぞら）",
    subtitle_en: "The Azure Sky",
    rarity: 3,
    description: "自由とは「自らの意志で名前を名乗り、理想を描くこと」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: JIYUGAOKA_ROUTE_ID, choice: "A" },
    route_id: JIYUGAOKA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_jiyugaoka_ankyo",
    category: "quiz",
    name_ja: "◇暗渠を見た者",
    subtitle_en: "The Culvert Witness",
    rarity: 3,
    description: "自由とは「本質的な川（現実）を覆い隠し、不都合な過去を手放すこと」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: JIYUGAOKA_ROUTE_ID, choice: "B" },
    route_id: JIYUGAOKA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_jiyugaoka_koshin",
    category: "quiz",
    name_ja: "◇更新する街の住人",
    subtitle_en: "The Regenerator",
    rarity: 3,
    description: "自由とは「教育から暮らし、再開発へと常に意味を選び直し続けること」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: JIYUGAOKA_ROUTE_ID, choice: "C" },
    route_id: JIYUGAOKA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_jiyugaoka_inyo",
    category: "quiz",
    name_ja: "◇引用者",
    subtitle_en: "The Quoter",
    rarity: 3,
    description: "自由とは「他所の名前や概念を借り受けて、新しい自己を語ること」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: JIYUGAOKA_ROUTE_ID, choice: "D" },
    route_id: JIYUGAOKA_ROUTE_ID,
    is_active: true
  }
];

async function seed() {
  console.log("Cleaning up previous seeded data...");
  // Clear previous routes created by this script (we'll delete by ID or title)
  const { error: delError } = await supabase.from('routes').delete().neq('title', '');
  if (delError) {
    console.log("Cleanup issue (maybe RLS?):", delError.message);
  } else {
    console.log("Cleared old routes data.");
  }

  // 自由が丘の削除
  const { error: delJiyugaokaError } = await supabase.from('routes').delete().eq('id', JIYUGAOKA_ROUTE_ID);
  if (delJiyugaokaError) {
    console.log("Cleanup issue Jiyugaoka:", delJiyugaokaError.message);
  } else {
    console.log("Cleared old Jiyugaoka route data.");
  }

  // 与野の削除
  const { error: delYonoError } = await supabase.from('routes').delete().eq('id', YONO_ROUTE_ID);
  if (delYonoError) {
    console.log("Cleanup issue Yono:", delYonoError.message);
  } else {
    console.log("Cleared old Yono route data.");
  }

  // バッジ定義のクリーンアップ（自由が丘のバッジを削除）
  const badgeCodes = jiyugaokaBadges.map(b => b.code);
  const { error: delBadgeError } = await supabase.from('badges').delete().in('code', badgeCodes);
  if (delBadgeError) {
    console.log("Cleanup issue badges:", delBadgeError.message);
  } else {
    console.log("Cleared Jiyugaoka badges.");
  }

  // 与野のバッジを削除
  const yonoBadgeCodes = yonoBadges.map(b => b.code);
  const { error: delYonoBadgeError } = await supabase.from('badges').delete().in('code', yonoBadgeCodes);
  if (delYonoBadgeError) {
    console.log("Cleanup issue Yono badges:", delYonoBadgeError.message);
  } else {
    console.log("Cleared Yono badges.");
  }

  // 2. 自由が丘のデータをインサート
  console.log("Inserting Jiyugaoka route...");
  
  const { error: jRouteError } = await supabase
    .from('routes')
    .insert([jiyugaokaRoute]);

  if (jRouteError) {
    console.error("Error inserting Jiyugaoka route:", jRouteError);
    return;
  }
  
  console.log("Inserted Jiyugaoka route successfully.");
  
  // スポットをインサート
  const { error: jSpotsError } = await supabase
    .from('spots')
    .insert(jiyugaokaSpots);

  if (jSpotsError) {
    console.error("Error inserting Jiyugaoka spots:", jSpotsError);
  } else {
    console.log(`Inserted ${jiyugaokaSpots.length} Jiyugaoka spots.`);
  }

  // 3. バッジ定義をインサート
  console.log("Inserting Jiyugaoka badges...");
  const { error: jBadgesError } = await supabase
    .from('badges')
    .insert(jiyugaokaBadges);

  if (jBadgesError) {
    console.error("Error inserting Jiyugaoka badges:", jBadgesError);
  } else {
    console.log(`Inserted ${jiyugaokaBadges.length} badges successfully.`);
  }

  // 4. 与野のデータをインサート
  console.log("Inserting Yono route...");
  const { error: yRouteError } = await supabase
    .from('routes')
    .insert([yonoRoute]);

  if (yRouteError) {
    console.error("Error inserting Yono route:", yRouteError);
    return;
  }
  console.log("Inserted Yono route successfully.");

  // 与野スポットをインサート
  const { error: ySpotsError } = await supabase
    .from('spots')
    .insert(yonoSpots);

  if (ySpotsError) {
    console.error("Error inserting Yono spots:", ySpotsError);
  } else {
    console.log(`Inserted ${yonoSpots.length} Yono spots.`);
  }

  // 与野バッジをインサート
  const { error: yBadgesError } = await supabase
    .from('badges')
    .insert(yonoBadges);

  if (yBadgesError) {
    console.error("Error inserting Yono badges:", yBadgesError);
  } else {
    console.log(`Inserted ${yonoBadges.length} Yono badges successfully.`);
  }

  console.log("Seeding complete!");
}

seed();
