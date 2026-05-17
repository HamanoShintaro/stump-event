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

const rallies = [
  {
    title: "蓮田・大宮周辺のラーメン食べ歩き",
    description: "埼玉の美味しいラーメンを巡るスタンプラリー。豚骨から醤油まで幅広く！",
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
    description: "氷川神社をはじめとする、歴史ある建造物を訪れるスタンプラリー。",
    thumbnail_url: "https://picsum.photos/seed/shrine/600/400",
    category: "地域を感じたい",
    prefecture: "埼玉県",
    budget_tier: 1,
    is_published: true,
    participants_count: 56,
    favorites_count: 22
  },
  {
    title: "ご当地B級グルメ探索ラリー",
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
      { name: "鉄道博物館", desc: "日本最大級の鉄道博物館。", img: "https://picsum.photos/seed/train1/600/400" },
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
      rally_id: rallyId,
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

async function seed() {
  console.log("Cleaning up previous seeded data...");
  // Clear previous rallies created by this script (we'll just delete them all since it's dev environment)
  const { error: delError } = await supabase.from('rallies').delete().neq('title', '');
  if (delError) {
    console.log("Cleanup issue (maybe RLS?):", delError.message);
  } else {
    console.log("Cleared old data.");
  }

  console.log("Seeding data around: ", USER_LAT, USER_LON);
  for (let i = 0; i < rallies.length; i++) {
    const { data: rallyData, error: rallyError } = await supabase
      .from('rallies')
      .insert([rallies[i]])
      .select('id')
      .single();

    if (rallyError) {
      console.error(`Error inserting rally ${i}:`, rallyError);
      continue;
    }
    
    const rallyId = rallyData.id;
    const spots = generateSpots(rallyId, i);
    
    const { error: spotsError } = await supabase
      .from('spots')
      .insert(spots);
      
    if (spotsError) {
      console.error(`Error inserting spots for rally ${rallyId}:`, spotsError);
    } else {
      console.log(`Inserted rally "${rallies[i].title}" with ${spots.length} spots (with images).`);
    }
  }
  console.log("Seeding complete!");
}

seed();
