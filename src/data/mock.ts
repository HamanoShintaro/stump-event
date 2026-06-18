import { Route } from '@/types';

export const mockRallies: Route[] = [
  {
    id: "a4b1c2d3-e4f5-5a6b-7c8d-9e0f1a2b3c4d",
    title: "自由が丘で、\"自由\"の正体を探す",
    name: "自由が丘で、\"自由\"の正体を探す",
    description: "写真映えのヴェネツィア、暮らしの雑貨、桜の緑道。おしゃれな街として知られる自由が丘。でも、この街はなぜ\"自由\"を名乗るのか？ 5つのスポットには答えではなく、食い違う\"手がかり\"だけが置かれている。歩き終えたとき、あなた自身の答えを選ぶ。選んだ答えで、授かる称号が変わる。所要60〜90分・全行程徒歩。",
    region: "自由が丘",
    area_name: "自由が丘",
    cover_image_url: "/images/jiyugaoka/route-eyecatch.png",
    imageUrl: "/images/jiyugaoka/route-eyecatch.png",
    category: "地域を感じたい",
    route_type: "platform",
    display_terminology: "shuin",
    rarity_estimated_min: 75,
    is_published: true,
    completion_ceremony_type: "quiz_4choice",
    completion_quiz_data: {
      question: "自由が丘の\"自由\"は、何から生まれたか？",
      choices: [
        {
          key: "A",
          text: "名乗ること",
          description: "谷畑が学校の名を借り自由が丘と名乗った",
          badge_code: "shuin_jiyugaoka_sokyu"
        },
        {
          key: "B",
          text: "手放すこと",
          description: "本物の川を地下に隠し湿地を捨てて理想を描いた",
          badge_code: "shuin_jiyugaoka_ankyo"
        },
        {
          key: "C",
          text: "選び直し続けること",
          description: "教育→暮らし→再開発と意味を更新し続ける",
          badge_code: "shuin_jiyugaoka_koshin"
        },
        {
          key: "D",
          text: "借り物かもしれない",
          description: "運河も学校名も外から借りた",
          badge_code: "shuin_jiyugaoka_inyo"
        }
      ]
    },
    spots: [
      {
        id: "b1111111-1111-1111-1111-111111111111",
        name: "谷畑の権現さま（自由が丘熊野神社）",
        description: "自由が丘の総鎮守。御朱印（来訪証明）の本家であり、あなたが集める押印の原点。まずここで街の一番古い記憶に触れてから歩き出す。",
        address: "東京都目黒区自由が丘1-24-12",
        lat: 35.609138,
        lng: 139.669865,
        qr_token: "shuin-jiyugaoka-kumano",
        cover_image_url: "/images/jiyugaoka/spot1.png",
        f7_fragment: "この街が\"自由が丘\"と名乗る前、ここは谷畑という谷あいの土地でした。",
        f7_full: "この街が\"自由が丘\"と名乗る前、ここは\"谷畑(やばた)\"という谷あいの土地だった。神様は今も\"谷畑の権現さま\"。\"自由\"は最初からここにあった名前ではない。\n\n授与所の本物の御朱印。「集めるSHUINの\"原本\"がここにある」\n\n次は水もないのに運河がある。なぜ人はないものを描く？",
        is_final: false,
        next_spot_id: "b2222222-2222-2222-2222-222222222222",
        next_spot_name: "水のない街の運河（La Vita）"
      },
      {
        id: "b2222222-2222-2222-2222-222222222222",
        name: "水のない街の運河（La Vita／ラ・ヴィータ）",
        description: "ヴェネツィアの街並みを再現した、自由が丘で最も写真に撮られる一角。運河・橋・ゴンドラが小さな広場に凝縮されている。",
        address: "東京都目黒区自由が丘2-8-3",
        lat: 35.611115,
        lng: 139.667597,
        qr_token: "shuin-jiyugaoka-lavita",
        cover_image_url: "/images/jiyugaoka/spot2.png",
        f7_fragment: "水のない街が運河を描き、他人の名を名乗る。なぜ自分以外の名前で語る？",
        f7_full: "水のない街が運河を描き、\"ヴェネツィア\"という他人の名を名乗る。なぜ人は、自分のものでない名前で自分を語る？\n\n運河の水の行き先を目で追う（循環でどこにも流れない）。\n\n次は\"自由\"を売る店。街の名のもとの自由とは別物の自由を。",
        is_final: false,
        next_spot_id: "b3333333-3333-3333-3333-333333333333",
        next_spot_name: "暮らしをDIYする店（TODAY'S SPECIAL Jiyugaoka）"
      },
      {
        id: "b3333333-3333-3333-3333-333333333333",
        name: "暮らしをDIYする店（TODAY'S SPECIAL Jiyugaoka）",
        description: "「食とくらしのDIY」がテーマの旗艦店。器・植物・本・服が一棟に詰まり、\"自分で選ぶ暮らし\"の象徴。",
        address: "東京都目黒区自由が丘2-17-8",
        lat: 35.608933,
        lng: 139.666144,
        qr_token: "shuin-jiyugaoka-todays",
        cover_image_url: "/images/jiyugaoka/spot3.png",
        f7_fragment: "かつては教育の自由、今は暮らしの自由。同じ言葉で中身が入れ替わりました。",
        f7_full: "街の名は昭和2年\"自由ヶ丘学園\"＝教育の自由。今この店が売るのは\"暮らしの自由\"。同じ言葉で中身が入れ替わっている。\n\n面する道「学園通り」の標識（消えた学校名の名残）を見つける。\n\n次は時間が止まったビル。隣に新しい塔が建つのに、なぜ残る？",
        is_final: false,
        next_spot_id: "b4444444-4444-4444-4444-444444444444",
        next_spot_name: "昭和の密度が残るビル（自由が丘デパート）"
      },
      {
        id: "b4444444-4444-4444-4444-444444444444",
        name: "昭和の密度が残るビル（自由が丘デパート）",
        description: "駅前にそびえる昭和から続く象徴的な商業ビル。約100の小さな店が迷路状に詰まり、再開発が進む今も\"古い自由が丘\"の密度を残す。",
        address: "東京都目黒区自由が丘1-28-8",
        lat: 35.607908,
        lng: 139.668500,
        qr_token: "shuin-jiyugaoka-department",
        cover_image_url: "/images/jiyugaoka/spot4.png",
        f7_fragment: "隣で再開発の塔が建つ中、このビルだけ昭和の密度のまま残っています。",
        f7_full: "隣で再開発の塔が建つ。このビルだけ昭和の密度のまま。\"自由\"とは新しくなり続けることか、残すと決めることか。\n\n迷路の奥の、更新されていない昭和の一軒・手書き看板を見つける。\n\n最後に気づく。さっきからずっと、隠されたものの上を歩いていた。",
        is_final: false,
        next_spot_id: "b5555555-5555-5555-5555-555555555555",
        next_spot_name: "川の上を歩いていた（九品仏川緑道）"
      },
      {
        id: "b5555555-5555-5555-5555-555555555555",
        name: "川の上を歩いていた（九品仏川緑道／グリーンストリート）",
        description: "駅南口からのびる石畳の散歩道。かつて流れていた九品仏川を1974年に暗渠化（地下化）してできた道。春は桜のトンネルになる。",
        address: "東京都目黒区自由が丘1丁目",
        lat: 35.606353,
        lng: 139.668630,
        qr_token: "shuin-jiyugaoka-greenway",
        cover_image_url: "/images/jiyugaoka/spot5.png",
        f7_fragment: "見えない川の上に、おしゃれな街は立っています。さあ、あなたの番です。",
        f7_full: "あなたはさっきから川の上を歩いている。九品仏川は地下に隠された。見えない川の上に、おしゃれな街は立っている。さあ、あなたの番だ。\n\n橋名遺構「鶯谷橋」「城向橋」／川の蛇行カーブを自力で見つける。",
        is_final: true
      }
    ]
  }
];
