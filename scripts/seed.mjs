import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

const USER_LAT = 35.9522665;
const USER_LON = 139.6833445;

// 埼玉のダミールート
const rallies = [
  {
    title: "蓮田・大宮周辺 of the ramen 食べ歩き",
    description: "埼玉の美味しいラーメンを巡るナラティブ。豚骨から醤油まで幅広く！",
    thumbnail_url: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&q=80",
    category: "食べたい",
    prefecture: "埼玉県",
    budget_tier: 2,
    is_published: true,
    participants_count: 120,
    favorites_count: 45
  },
  {
    title: "さいたま市自然満喫ルート",
    description: "見沼田んぼや大宮公園など、自然を感じられるスポットを巡ります。",
    thumbnail_url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80",
    category: "癒されたい",
    prefecture: "埼玉県",
    budget_tier: 1,
    is_published: true,
    participants_count: 310,
    favorites_count: 89
  },
  {
    title: "埼玉の歴史・神社仏閣巡り",
    description: "氷川神社をはじめとする、歴史ある建造物を訪れるナラティブ。",
    thumbnail_url: "https://picsum.photos/seed/shrine/600/400",
    category: "地域を感じたい",
    prefecture: "埼玉県",
    budget_tier: 1,
    is_published: true,
    participants_count: 56,
    favorites_count: 22
  },
  {
    title: "ご当地B級グルメ探索ナラティブ",
    description: "埼玉の隠れたB級グルメスポットを食べ尽くす！",
    thumbnail_url: "https://picsum.photos/seed/food/600/400",
    category: "食べたい",
    prefecture: "埼玉県",
    budget_tier: 1,
    is_published: true,
    participants_count: 512,
    favorites_count: 120
  },
  {
    title: "鉄道博物館と周辺アクティビティ",
    description: "鉄道博物館を起点に、家族で楽しめる周辺施設を回るルートです。",
    thumbnail_url: "https://picsum.photos/seed/train/600/400",
    category: "体験したい",
    prefecture: "埼玉県",
    budget_tier: 2,
    is_published: true,
    participants_count: 840,
    favorites_count: 245
  }
];

const getSpotDetails = (rallyIndex, i) => {
  const details = [
    [ // ラーメン
      { name: "麺処 蓮", desc: "あっさり醤油ラーメンが人気。", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80" },
      { name: "大宮家系 豚骨", desc: "濃厚な家系ラーメン。", img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&q=80" },
      { name: "つけ麺 さいたま", desc: "極太麺が特徴のつけ麺。", img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=600&q=80" },
      { name: "中華そば 昭和", desc: "昔ながらの中華そば。", img: "https://images.unsplash.com/photo-1548003666-4e50cd84a229?w=600&q=80" }
    ],
    [ // 自然
      { name: "大宮公園", desc: "広大な敷地と桜が有名。", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80" },
      { name: "見沼田んぼ", desc: "豊かな自然が残る田園風景。", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80" },
      { name: "市民の森", desc: "リスの家などがあり家族連れに人気。", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80" },
      { name: "秋ヶ瀬公園", desc: "バーベキューなども楽しめる広大な公園。", img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80" },
      { name: "別所沼公園", desc: "メタセコイア並木が美しい。", img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&q=80" }
    ],
    [ // 神社
      { name: "武蔵一宮氷川神社", desc: "武蔵国の一宮。長い参道が特徴。", img: "https://picsum.photos/seed/shrine1/600/400" },
      { name: "調神社", desc: "ウサギが神使の珍しい神社。", img: "https://picsum.photos/seed/shrine2/600/400" },
      { name: "久伊豆神社", desc: "越谷の総鎮守。", img: "https://picsum.photos/seed/shrine3/600/400" },
      { name: "川越氷川神社", desc: "縁結びの神様として有名。", img: "https://picsum.photos/seed/shrine4/600/400" }
    ],
    [ // B級グルメ
      { name: "行田ゼリーフライ店", desc: "おからのコロッケのようなご当地グルメ。", img: "https://picsum.photos/seed/food1/600/400" },
      { name: "大宮ナポリタン", desc: "大宮発祥のナポリタンを提供するお店。", img: "https://picsum.photos/seed/food2/600/400" },
      { name: "武蔵野うどん", desc: "コシの強い肉汁うどん。", img: "https://picsum.photos/seed/food3/600/400" },
      { name: "川幅うどん", desc: "日本一太いうどん。", img: "https://picsum.photos/seed/food4/600/400" },
      { name: "フライ屋", desc: "埼玉北部名物のフライ。", img: "https://picsum.photos/seed/food5/600/400" }
    ],
    [ // 鉄道・体験
      { name: "鉄道博物館", desc: "日本最大級 of the railroad museum。", img: "https://picsum.photos/seed/train1/600/400" },
      { name: "大宮盆栽美術館", desc: "世界初の公立の盆栽美術館。", img: "https://picsum.photos/seed/train2/600/400" },
      { name: "造幣さいたま博物館", desc: "硬貨の製造工程を見学できる。", img: "https://picsum.photos/seed/train3/600/400" },
      { name: "岩槻人形博物館", desc: "人形の街・岩槻の歴史を学べる。", img: "https://picsum.photos/seed/train4/600/400" }
    ]
  ];
  return details[rallyIndex][i] || { name: `スポット ${i + 1}`, desc: "詳細不明のスポットです。", img: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80" };
};

const generateSpots = (rallyId, rallyIndex) => {
  const spots = [];
  const count = (rallyIndex === 1 || rallyIndex === 3) ? 5 : 4;
  for (let i = 0; i < count; i++) {
    const latOffset = (Math.random() - 0.5) * 0.08;
    const lonOffset = (Math.random() - 0.5) * 0.08;
    const lat = USER_LAT + latOffset;
    const lon = USER_LON + lonOffset;
    
    const spotDetail = getSpotDetails(rallyIndex, i);
    
    spots.push({
      route_id: rallyId,
      name: spotDetail.name,
      description: spotDetail.desc,
      image_url: spotDetail.img,
      address: `埼玉県さいたま市周辺 (ダミー住所 ${i+1})`,
      location: `POINT(${lon} ${lat})`,
      radius_meters: 50,
      order_index: i + 1
    });
  }
  return spots;
};

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
  thumbnail_url: "/images/jiyugaoka/route-eyecatch.png"
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
    description: "「食とくらし of DIY」がテーマの旗艦店。器・植物・本・服が一棟に詰まり、\"自分で選ぶ暮らし\"の象徴。",
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
    code: "trailblazer_of_route-jiyugaoka-01",
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

  // バッジ定義のクリーンアップ（自由が丘のバッジを削除）
  const badgeCodes = jiyugaokaBadges.map(b => b.code);
  const { error: delBadgeError } = await supabase.from('badges').delete().in('code', badgeCodes);
  if (delBadgeError) {
    console.log("Cleanup issue badges:", delBadgeError.message);
  } else {
    console.log("Cleared Jiyugaoka badges.");
  }

  // 1. 埼玉のダミーデータをインサート
  console.log("Seeding data around: ", USER_LAT, USER_LON);
  for (let i = 0; i < rallies.length; i++) {
    const { data: rallyData, error: rallyError } = await supabase
      .from('routes')
      .insert([rallies[i]])
      .select('id')
      .single();

    if (rallyError) {
      console.error(`Error inserting route ${i}:`, rallyError);
      continue;
    }
    
    const rallyId = rallyData.id;
    const spots = generateSpots(rallyId, i);
    
    const { error: spotsError } = await supabase
      .from('spots')
      .insert(spots);
      
    if (spotsError) {
      console.error(`Error inserting spots for route ${rallyId}:`, spotsError);
    } else {
      console.log(`Inserted route "${rallies[i].title}" with ${spots.length} spots.`);
    }
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

  console.log("Seeding complete!");
}

seed();
