import { createClient } from '@supabase/supabase-js';
import ws from 'ws';
import iwatsukiArea from './areas/iwatsuki.mjs';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

// ==========================================
// 1. 自由が丘ルート
// ==========================================
const JIYUGAOKA_ROUTE_ID = 'a4b1c2d3-e4f5-5a6b-7c8d-9e0f1a2b3c4d';
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
    description: "駅南口からのびる石畳 of 散歩道。かつて流れていた九品仏川を1974年に暗渠化（地下化）してできた道。春は桜のトンネルになる。",
    image_url: "/images/jiyugaoka/spot5.png",
    address: "東京都目黒区自由が丘1丁目",
    location: "POINT(139.668630 35.606353)",
    radius_meters: 50,
    order_index: 5
  }
];

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

jiyugaokaBadges[0].route_id = JIYUGAOKA_ROUTE_ID;

// ==========================================
// 2. 与野ルート (食事・買い物入り)
// ==========================================
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
    name: "旅のしるべ（針ヶ谷西公園）",
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

// ==========================================
// 3. 岩槻ルート (動的インポート)
// ==========================================
const IWATSUKI_ROUTE_ID = 'd3b1c2d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d';

const iwatsukiRoute = {
  id: IWATSUKI_ROUTE_ID,
  title: iwatsukiArea.title,
  description: iwatsukiArea.description,
  category: iwatsukiArea.category,
  prefecture: iwatsukiArea.prefecture,
  budget_tier: iwatsukiArea.budget_tier,
  is_published: true,
  thumbnail_url: `/images/iwatsuki/route-eyecatch.png`,
  completion_ceremony_type: "quiz_4choice",
  completion_quiz_data: {
    question: iwatsukiArea.question,
    choices: iwatsukiArea.choices.map(c => ({
      key: c.key,
      text: c.text,
      description: c.description,
      badge_code: c.badge.code
    }))
  }
};

const iwatsukiSpots = iwatsukiArea.spots.map((s, i) => ({
  id: `d1111111-1111-1111-1111-11111111111${i}`,
  route_id: IWATSUKI_ROUTE_ID,
  name: s.name,
  description: s.description,
  image_url: `/images/iwatsuki/spot${i + 1}.png`,
  address: s.address,
  location: `POINT(${s.lng} ${s.lat})`,
  radius_meters: s.radius_meters || 50,
  order_index: i + 1
}));

const iwatsukiBadges = [
  {
    code: `trailblazer_of_${IWATSUKI_ROUTE_ID}`,
    category: "route",
    name_ja: iwatsukiArea.completion_badge.name_ja,
    subtitle_en: iwatsukiArea.completion_badge.subtitle_en,
    rarity: 2,
    description: iwatsukiArea.completion_badge.description,
    condition_type: "route_complete",
    condition_params: { route_id: IWATSUKI_ROUTE_ID },
    route_id: IWATSUKI_ROUTE_ID,
    is_active: true
  },
  ...iwatsukiArea.choices.map(c => ({
    code: c.badge.code,
    category: "quiz",
    name_ja: c.badge.name_ja,
    subtitle_en: c.badge.subtitle_en,
    rarity: c.badge.rarity || 3,
    description: c.badge.description,
    condition_type: "quiz_choice",
    condition_params: { route_id: IWATSUKI_ROUTE_ID, choice: c.key },
    route_id: IWATSUKI_ROUTE_ID,
    is_active: true
  }))
];

// ==========================================
// 2.7. 北浦和ルート (芸術と静寂)
// ==========================================
const KITAURAWA_ROUTE_ID = 'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c66';
const kitaurawaRoute = {
  id: KITAURAWA_ROUTE_ID,
  title: "芸術と静寂が交差する街——北浦和をめぐる",
  description: "文教都市としての落ち着きと、美しい公園、近代美術が融合した北浦和。音と水が舞い踊る噴水から、黒川紀章設計の美術館、歴史ある古刹、そして昭和の空気感を今に残す喫茶店まで。静寂と芸術が交差する街角を歩き、新たな「しるし」を刻むフィールドワークのためのルートです。所要45〜60分・全行程徒歩。",
  category: "地域を感じたい",
  prefecture: "埼玉県",
  budget_tier: 1,
  is_published: true,
  thumbnail_url: "/images/kitaurawa/route-eyecatch.png",
  completion_ceremony_type: "quiz_4choice",
  completion_quiz_data: {
    question: '北浦和公園のシンボルであり、クラシック音楽に合わせて水が舞う施設はどれ？',
    choices: [
      { key: "A", text: "音楽噴水", description: "定時にクラシック音楽と連動して水が噴出する噴水", badge_code: "shuin_kitaurawa_fountain" },
      { key: "B", text: "近代美術館", description: "彫刻の並ぶガラス張りの美術館", badge_code: "shuin_kitaurawa_museum" },
      { key: "C", text: "双鶖庵 (そうしゅうあん)", description: "公園内の伝統的なお茶室", badge_code: "shuin_kitaurawa_tea" },
      { key: "D", text: "昭和レトロ街灯", description: "西口広場に立つアンティークな街灯", badge_code: "shuin_kitaurawa_lamp" }
    ]
  }
};

const kitaurawaSpots = [
  {
    id: 'd2222222-2222-2222-2222-222222222220',
    route_id: KITAURAWA_ROUTE_ID,
    name: "始まりの街灯（北浦和駅西口広場）",
    description: "北浦和駅の西口広場。レトロなデザインの街頭が優しく佇み、ここから広大な北浦和公園へと続く静かな散策の旅が始まります。",
    image_url: "/images/kitaurawa/spot1.png",
    address: "埼玉県さいたま市浦和区北浦和4-1",
    location: "POINT(139.646500 35.871800)",
    radius_meters: 50,
    order_index: 1
  },
  {
    id: 'd2222222-2222-2222-2222-222222222221',
    route_id: KITAURAWA_ROUTE_ID,
    name: "音と水の舞踏（北浦和公園 音楽噴水）",
    description: "北浦和公園の中央に位置する美しい大噴水。定時になると、クラシック音楽の旋律と連動してダイナミックに水柱が躍る優雅なアートスポットです。",
    image_url: "/images/kitaurawa/spot2.png",
    address: "埼玉県さいたま市浦和区常盤9-30",
    location: "POINT(139.645200 35.872200)",
    radius_meters: 50,
    order_index: 2
  },
  {
    id: 'd2222222-2222-2222-2222-222222222222',
    route_id: KITAURAWA_ROUTE_ID,
    name: "グリッドの美学（埼玉県立近代美術館 MOMAS）",
    description: "世界的建築家・黒川紀章の初期の代表作。格子状 of グリッドフレームが美しい建物で、公園の緑とモダンアートが静かに調和しています。",
    image_url: "/images/kitaurawa/spot3.png",
    address: "埼玉県さいたま市浦和区常盤9-30-1",
    location: "POINT(139.644500 35.872500)",
    radius_meters: 50,
    order_index: 3
  },
  {
    id: 'd2222222-2222-2222-2222-222222222223',
    route_id: KITAURAWA_ROUTE_ID,
    name: "静寂の山門（廓信寺）",
    description: "江戸時代初期の慶長年間に建立された浄土宗の古刹。文教都市の喧騒から切り離されたかのような、厳かな松林と静寂に包まれた境内が広がります。",
    image_url: "/images/kitaurawa/spot4.png",
    address: "埼玉県さいたま市浦和区北浦和3-15-22",
    location: "POINT(139.649200 35.874100)",
    radius_meters: 50,
    order_index: 4
  },
  {
    id: 'd2222222-2222-2222-2222-222222222224',
    route_id: KITAURAWA_ROUTE_ID,
    name: "昭和の余白（純喫茶ひだまり）",
    description: "北浦和の路地裏に佇む昭和レトロな純喫茶。温かい木のカウンターと名物の自家製プリン、サイフォンで淹れる薫り高い珈琲で旅のしるしを締めくくります。",
    image_url: "/images/kitaurawa/spot5.png",
    address: "埼玉県さいたま市浦和区北浦和3-8-1",
    location: "POINT(139.648000 35.873200)",
    radius_meters: 50,
    order_index: 5
  }
];

const kitaurawaBadges = [
  {
    code: `trailblazer_of_${KITAURAWA_ROUTE_ID}`,
    category: "route",
    name_ja: "北浦和の巡礼者",
    subtitle_en: "Pilgrim of Kita-Urawa",
    rarity: 2,
    description: "北浦和の芸術と歴史をめぐるすべてのスポットを訪れ、しるしを刻み終えた証",
    condition_type: "route_complete",
    condition_params: { route_id: KITAURAWA_ROUTE_ID },
    route_id: KITAURAWA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_kitaurawa_fountain",
    category: "quiz",
    name_ja: "◇泉の音楽家",
    subtitle_en: "Fountain Musician",
    rarity: 3,
    description: "北浦和公園の象徴を「音楽噴水」と正しく答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: KITAURAWA_ROUTE_ID, choice: "A" },
    route_id: KITAURAWA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_kitaurawa_museum",
    category: "quiz",
    name_ja: "◇審美眼の持ち主",
    subtitle_en: "The Aesthetic Eye",
    rarity: 3,
    description: "北浦和公園の象徴を「近代美術館」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: KITAURAWA_ROUTE_ID, choice: "B" },
    route_id: KITAURAWA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_kitaurawa_tea",
    category: "quiz",
    name_ja: "◇数寄屋の風流人",
    subtitle_en: "The Tea Master",
    rarity: 3,
    description: "北浦和公園の象徴を「双鶖庵」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: KITAURAWA_ROUTE_ID, choice: "C" },
    route_id: KITAURAWA_ROUTE_ID,
    is_active: true
  },
  {
    code: "shuin_kitaurawa_lamp",
    category: "quiz",
    name_ja: "◇ともしびの案内人",
    subtitle_en: "The Lantern Guide",
    rarity: 3,
    description: "北浦和公園の象徴を「昭和レトロ街灯」と答えた証",
    condition_type: "quiz_choice",
    condition_params: { route_id: KITAURAWA_ROUTE_ID, choice: "D" },
    route_id: KITAURAWA_ROUTE_ID,
    is_active: true
  }
];

// ==========================================
// 4. 埼玉・大宮周辺の5つのルート
// ==========================================
const SAITAMA_ROUTE_IDS = [
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c61',
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c62',
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c63',
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c64',
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c65'
];

const saitamaRallies = [
  {
    id: SAITAMA_ROUTE_IDS[0],
    title: "蓮田・大宮周辺のラーメン食べ歩き",
    description: "埼玉の美味しいラーメンを巡るルート。豚骨から醤油まで幅広く！所要60〜90分。",
    category: "食べたい",
    prefecture: "埼玉県",
    budget_tier: 2,
    is_published: true
  },
  {
    id: SAITAMA_ROUTE_IDS[1],
    title: "さいたま市自然満気ルート",
    description: "見沼田んぼや大宮公園など、豊かな自然を感じられるスポットを巡ります。所要90〜120分。",
    category: "癒されたい",
    prefecture: "埼玉県",
    budget_tier: 1,
    is_published: true
  },
  {
    id: SAITAMA_ROUTE_IDS[2],
    title: "埼玉の歴史・神社仏閣巡り",
    description: "武蔵一宮氷川神社をはじめとする、歴史ある建造物を訪れる散策ルート。所要60〜90分。",
    category: "地域を感じたい",
    prefecture: "埼玉県",
    budget_tier: 1,
    is_published: true
  },
  {
    id: SAITAMA_ROUTE_IDS[3],
    title: "ご当地B級グルメ探索ルート",
    description: "さいたま周辺の隠れたB級グルメスポットを食べ尽くす！所要60〜90分。",
    category: "食べたい",
    prefecture: "埼玉県",
    budget_tier: 1,
    is_published: true
  },
  {
    id: SAITAMA_ROUTE_IDS[4],
    title: "鉄道博物館と周辺アクティビティ",
    description: "鉄道博物館を起点に、大宮盆栽美術館など周辺施設を回る親子向けルート。所要120〜180分。",
    category: "体験したい",
    prefecture: "埼玉県",
    budget_tier: 2,
    is_published: true
  }
];

const getSaitamaSpotDetails = (rallyIndex, i) => {
  const details = [
    [
      { name: "麺処 蓮", desc: "あっさり醤油ラーメンが人気。", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80", addr: "埼玉県蓮田市本町" },
      { name: "大宮家系 豚骨", desc: "濃厚な家系ラーメン。", img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&q=80", addr: "埼玉県さいたま市大宮区大門町" },
      { name: "つけ麺 さいたま", desc: "極太麺が特徴のつけ麺。", img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=600&q=80", addr: "埼玉県さいたま市大宮区桜木町" },
      { name: "中華そば 昭和", desc: "昔ながらの中華そば。", img: "https://images.unsplash.com/photo-1548003666-4e50cd84a229?w=600&q=80", addr: "埼玉県さいたま市大宮区" }
    ],
    [
      { name: "大宮公園", desc: "広大な敷地と桜が有名。", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80", addr: "埼玉県さいたま市大宮区高鼻町" },
      { name: "見沼田んぼ", desc: "豊かな自然が残る田園風景。", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", addr: "埼玉県さいたま市緑区" },
      { name: "市民の森", desc: "リスの家などがあり家族連れに人気。", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", addr: "埼玉県さいたま市北区" },
      { name: "秋ヶ瀬公園", desc: "バーベキューなども楽しめる広大な公園。", img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80", addr: "埼玉県さいたま市桜区" },
      { name: "別所沼公園", desc: "メタセコイア並木が美しい。", img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&q=80", addr: "埼玉県さいたま市南区" }
    ],
    [
      { name: "武蔵一宮氷川神社", desc: "武蔵国の一宮。長い参道が特徴。", img: "https://picsum.photos/seed/shrine1/600/400", addr: "埼玉県さいたま市大宮区高鼻町1-407" },
      { name: "調神社", desc: "ウサギが神使の珍しい神社。", img: "https://picsum.photos/seed/shrine2/600/400", addr: "埼玉県さいたま市浦和区岸町3-17-25" },
      { name: "久伊豆神社", desc: "越谷の総鎮守。", img: "https://picsum.photos/seed/shrine3/600/400", addr: "埼玉県越谷市宮前町17" },
      { name: "川越氷川神社", desc: "縁結びの神様として有名。", img: "https://picsum.photos/seed/shrine4/600/400", addr: "埼玉県川越市宮下町2-11-3" }
    ],
    [
      { name: "行田ゼリーフライ店", desc: "おからのコロッケのようなご当地グルメ。", img: "https://picsum.photos/seed/food1/600/400", addr: "埼玉県行田市" },
      { name: "大宮ナポリタン", desc: "大宮発祥のナポリタンを提供するお店。", img: "https://picsum.photos/seed/food2/600/400", addr: "埼玉県さいたま市大宮区" },
      { name: "武蔵野うどん", desc: "コシの強い肉汁うどん。", img: "https://picsum.photos/seed/food3/600/400", addr: "埼玉県さいたま市" },
      { name: "川幅うどん", desc: "日本一太いうどん。", img: "https://picsum.photos/seed/food4/600/400", addr: "埼玉県鴻巣市" },
      { name: "フライ屋", desc: "埼玉北部名物のフライ。", img: "https://picsum.photos/seed/food5/600/400", addr: "埼玉県行田市周辺" }
    ],
    [
      { name: "鉄道博物館", desc: "日本最大級の鉄道博物館。", img: "https://picsum.photos/seed/train1/600/400", addr: "埼玉県さいたま市大宮区大成町3-47" },
      { name: "大宮盆栽美術館", desc: "世界初の公立の盆栽美術館。", img: "https://picsum.photos/seed/train2/600/400", addr: "埼玉県さいたま市北区土手町2-24-3" },
      { name: "造幣さいたま博物館", desc: "硬貨の製造工程を見学できる。", img: "https://picsum.photos/seed/train3/600/400", addr: "埼玉県さいたま市大宮区三橋" },
      { name: "岩槻人形博物館", desc: "人形の街・岩槻の歴史を学べる。", img: "https://picsum.photos/seed/train4/600/400", addr: "埼玉県さいたま市岩槻区本町6-1-1" }
    ]
  ];
  return details[rallyIndex][i] || { name: `スポット ${i + 1}`, desc: "詳細不明のスポットです。", img: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80", addr: "埼玉県" };
};

const generateSaitamaSpots = (routeId, rallyIndex) => {
  const USER_LAT = 35.9522665;
  const USER_LON = 139.6833445;
  const spots = [];
  const count = (rallyIndex === 1 || rallyIndex === 3) ? 5 : 4;
  for (let i = 0; i < count; i++) {
    const latOffset = (Math.random() - 0.5) * 0.08;
    const lonOffset = (Math.random() - 0.5) * 0.08;
    const lat = USER_LAT + latOffset;
    const lon = USER_LON + lonOffset;
    
    const spotDetail = getSaitamaSpotDetails(rallyIndex, i);
    
    spots.push({
      id: `f${rallyIndex + 1}111111-1111-1111-1111-11111111111${i}`,
      route_id: routeId,
      name: spotDetail.name,
      description: spotDetail.desc,
      image_url: spotDetail.img,
      address: spotDetail.addr,
      location: `POINT(${lon} ${lat})`,
      radius_meters: 50,
      order_index: i + 1
    });
  }
  return spots;
};

// ==========================================
// シード処理実行
// ==========================================
async function seed() {
  console.log("Cleaning up previous seeded data...");

  // 全ての既存ルートをクリーンアップ
  const routeIds = [
    JIYUGAOKA_ROUTE_ID,
    YONO_ROUTE_ID,
    IWATSUKI_ROUTE_ID,
    KITAURAWA_ROUTE_ID,
    ...SAITAMA_ROUTE_IDS
  ];

  await supabase.from('routes').delete().in('id', routeIds);
  console.log("Cleared routes.");

  // 全ての既存バッジをクリーンアップ
  const badgeCodes = [
    ...jiyugaokaBadges.map(b => b.code),
    ...yonoBadges.map(b => b.code),
    ...iwatsukiBadges.map(b => b.code),
    ...kitaurawaBadges.map(b => b.code)
  ];
  await supabase.from('badges').delete().in('code', badgeCodes);
  console.log("Cleared badges.");

  // 1. 自由が丘ルート登録
  console.log("Inserting Jiyugaoka...");
  await supabase.from('routes').insert([jiyugaokaRoute]);
  await supabase.from('spots').insert(jiyugaokaSpots);
  await supabase.from('badges').insert(jiyugaokaBadges);

  // 2. 与野ルート登録
  console.log("Inserting Yono...");
  await supabase.from('routes').insert([yonoRoute]);
  await supabase.from('spots').insert(yonoSpots);
  await supabase.from('badges').insert(yonoBadges);

  // 3. 岩槻ルート登録
  console.log("Inserting Iwatsuki...");
  await supabase.from('routes').insert([iwatsukiRoute]);
  await supabase.from('spots').insert(iwatsukiSpots);
  await supabase.from('badges').insert(iwatsukiBadges);

  // 3.5. 北浦和ルート登録
  console.log("Inserting Kitaurawa...");
  await supabase.from('routes').insert([kitaurawaRoute]);
  await supabase.from('spots').insert(kitaurawaSpots);
  await supabase.from('badges').insert(kitaurawaBadges);

  // 4. 埼玉・大宮周辺5ルート登録
  console.log("Inserting Saitama/Omiya routes...");
  for (let i = 0; i < saitamaRallies.length; i++) {
    const route = saitamaRallies[i];
    const spots = generateSaitamaSpots(route.id, i);
    await supabase.from('routes').insert([route]);
    await supabase.from('spots').insert(spots);
    console.log(`Inserted Omiya route: ${route.title}`);
  }

  console.log("Seeding complete successfully!");
}

seed();
