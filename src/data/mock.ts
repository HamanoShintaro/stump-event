import { Route } from '@/types';

export const mockRallies: Route[] = [
  {
    id: "a4b1c2d3-e4f5-5a6b-7c8d-9e0f1a2b3c4d",
    title: "自由が丘で、\"自由\"の正体を探す",
    name: "自由が丘で、\"自由\"の正体を探す",
    description: "写真映えのヴェネツィア、暮らしの雑貨、桜の緑道。おしゃれな街として知られる自由が丘。でも、この街はなぜ\"自由\"を名乗るのか？ 5つのスポットには答えではなく、食い違う\"手がかり\"だけが置かれている。歩き終えたとき、あなた自身の答えを選ぶ。選んだ答えで、授かる称号が変わる。所要60〜90分・全行程徒歩。",
    region: "自由が丘",
    area_name: "自由が丘",
    cover_image_url: "/images/jiyugaoka/route-eyecatch.jpg",
    imageUrl: "/images/jiyugaoka/route-eyecatch.jpg",
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
        prefecture: "東京都",
        city: "目黒区",
        lat: 35.609138,
        lng: 139.669865,
        qr_token: "shuin-jiyugaoka-kumano",
        cover_image_url: "/images/jiyugaoka/spot1.jpg",
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
        prefecture: "東京都",
        city: "目黒区",
        lat: 35.611115,
        lng: 139.667597,
        qr_token: "shuin-jiyugaoka-lavita",
        cover_image_url: "/images/jiyugaoka/spot2.jpg",
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
        prefecture: "東京都",
        city: "目黒区",
        lat: 35.608933,
        lng: 139.666144,
        qr_token: "shuin-jiyugaoka-todays",
        cover_image_url: "/images/jiyugaoka/spot3.jpg",
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
        prefecture: "東京都",
        city: "目黒区",
        lat: 35.607908,
        lng: 139.668500,
        qr_token: "shuin-jiyugaoka-department",
        cover_image_url: "/images/jiyugaoka/spot4.jpg",
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
        prefecture: "東京都",
        city: "目黒区",
        lat: 35.606353,
        lng: 139.668630,
        qr_token: "shuin-jiyugaoka-greenway",
        cover_image_url: "/images/jiyugaoka/spot5.jpg",
        f7_fragment: "見えない川の上に、おしゃれな街は立っています。さあ、あなたの番です。",
        f7_full: "あなたはさっきから川の上を歩いている。九品仏川は地下に隠された。見えない川の上に、おしゃれな街は立っている。さあ、あなたの番だ。\n\n橋名遺構「鶯谷橋」「城向橋」／川の蛇行カーブを自力で見つける。",
        is_final: true
      }
    ]
  },
  {
    id: "e3b1c2d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
    title: "三蔵法師が辿り着いた丘——東岩槻、千年の縁をめぐる",
    name: "三蔵法師が辿り着いた丘——東岩槻、千年の縁をめぐる",
    description: "整然とした街並みが広がる東岩槻駅の北口から一歩奥へ踏み出すと、のどかな水辺と田園の先に、平安時代から続く古刹・慈恩寺が現れる。なぜ『西遊記』で知られる玄奘三蔵法師の霊骨が、遠く長安から海を渡り、この東岩槻の静かな丘に眠っているのか。街の甘味とカフェで息をつきながら、1200年の時を超えた「縁」のしるしを5つ刻む。所要90〜120分・全行程徒歩。",
    region: "東岩槻",
    area_name: "東岩槻",
    cover_image_url: "/images/higashi-iwatsuki/route-eyecatch.png",
    imageUrl: "/images/higashi-iwatsuki/route-eyecatch.png",
    category: "地域を感じたい",
    route_type: "platform",
    display_terminology: "shuin",
    rarity_estimated_min: 100,
    is_published: true,
    completion_ceremony_type: "quiz_4choice",
    completion_quiz_data: {
      question: "なぜ天竺を旅した三蔵法師は、1300年の時を超えてこの東岩槻の丘に辿り着いたのか？",
      choices: [
        {
          key: "A",
          text: "名が結んだ縁",
          description: "円仁が長安「大慈恩寺」の名をこの地に刻んでいたから",
          badge_code: "shuin_higashi_iwatsuki_en"
        },
        {
          key: "B",
          text: "戦火を避ける静寂",
          description: "空襲から霊骨を守る、武蔵野の深い森と水があったから",
          badge_code: "shuin_higashi_iwatsuki_seijaku"
        },
        {
          key: "C",
          text: "祈りを繋いだ里人",
          description: "坂東札所として1200年、地域の暮らしと祈りが絶えなかったから",
          badge_code: "shuin_higashi_iwatsuki_sato"
        },
        {
          key: "D",
          text: "旅はまだ続いている",
          description: "三蔵法師の旅は今も終わらず、今日訪れたあなたへ繋がっているから",
          badge_code: "shuin_higashi_iwatsuki_tabi"
        }
      ]
    },
    spots: [
      {
        id: "e3111111-1111-1111-1111-111111111110",
        name: "遥かな旅路の甘味（カステラ文）",
        description: "東岩槻駅北口の静かな住宅街に佇む、手作りカステラの名店。卵と砂糖の風味が活きたしっとりとしたカステラが地域で愛されている。",
        address: "埼玉県さいたま市岩槻区東岩槻3-5-3",
        prefecture: "埼玉県",
        city: "さいたま市",
        lat: 35.962116,
        lng: 139.708069,
        qr_token: "shuin-higashi-iwatsuki-1",
        cover_image_url: "/images/higashi-iwatsuki/spot1.png",
        f7_fragment: "東岩槻の静かな住宅街に佇む、手作りカステラの名店。",
        f7_full: "東岩槻の静かな住宅街に佇む、手作りカステラの名店。卵と砂糖の素朴で深い甘みは、かつて海を渡って日本へ伝来した南蛮菓子の記憶を宿す。これから始まる「遥かなる旅人」を訪ねる歩みの前に、最初のしるしを刻む。\n\n丁寧に焼き上げられたカステラの黄金色の断面と、甘い香りに包まれる店頭。\n\n次は、北へ少し歩いた場所にある温かなカフェで、旅の足取りを整えよう。",
        is_final: false,
        next_spot_id: "e3111111-1111-1111-1111-111111111111",
        next_spot_name: "日常のぬくもり（CAFE picnic）"
      },
      {
        id: "e3111111-1111-1111-1111-111111111111",
        name: "日常のぬくもり（CAFE picnic）",
        description: "注文を受けてから握るおむすびや野菜たっぷりのサンドイッチ、米粉のシフォンケーキが味わえるアットホームなカフェ。",
        address: "埼玉県さいたま市岩槻区東岩槻2-5-27",
        prefecture: "埼玉県",
        city: "さいたま市",
        lat: 35.965439,
        lng: 139.708054,
        qr_token: "shuin-higashi-iwatsuki-2",
        cover_image_url: "/images/higashi-iwatsuki/spot2.png",
        f7_fragment: "おむすびやサンドイッチ、米粉のシフォンケーキで迎えてくれる街のカフェ。",
        f7_full: "おむすびやサンドイッチ、米粉のシフォンケーキで迎えてくれる街のカフェ。どれほど壮大な歴史の旅も、いつの時代も「今日の一食」と「穏やかな休息」の積み重ねでできている。ここで一息つき、北に広がる古の里山へ。\n\nガラス越しに差し込む柔らかな陽光と、丁寧に作られた手料理の温もり。\n\n住宅街を抜け、田園の先に広がる静かな水辺を目指そう。",
        is_final: false,
        next_spot_id: "e3111111-1111-1111-1111-111111111112",
        next_spot_name: "時代を映す水面（慈恩寺親水公園）"
      },
      {
        id: "e3111111-1111-1111-1111-111111111112",
        name: "時代を映す水面（慈恩寺親水公園）",
        description: "慈恩寺の東側に広がる、大きな池を中心とした自然豊かな親水公園。水辺の遊歩道や東屋が整備され、四季の風を感じられる。",
        address: "埼玉県さいたま市岩槻区小溝465",
        prefecture: "埼玉県",
        city: "さいたま市",
        lat: 35.980015,
        lng: 139.716522,
        qr_token: "shuin-higashi-iwatsuki-3",
        cover_image_url: "/images/higashi-iwatsuki/spot3.png",
        f7_fragment: "整然とした街並みを抜けると、田園と広い水面が現れる。",
        f7_full: "整然とした街並みを抜けると、田園と広い水面が現れる。ここはかつて都の喧騒や戦火から遠く離れた、水と緑の緩衝地帯だった。穏やかな水面を渡る風が、訪れる者の歩調をゆっくりと千年前へ戻していく。\n\n空を映す広い池の水面と、水辺を渡る鳥たちの静かな羽音。\n\n水辺を抜けたら、いよいよ1200年の歴史を刻む古刹の本堂へ。",
        is_final: false,
        next_spot_id: "e3111111-1111-1111-1111-111111111113",
        next_spot_name: "長安の名を継ぐ古刹（華林山 慈恩寺）"
      },
      {
        id: "e3111111-1111-1111-1111-111111111113",
        name: "長安の名を継ぐ古刹（華林山 慈恩寺）",
        description: "天長元年（824年）に慈覚大師・円仁が開いた天台宗の古刹。坂東三十三観音霊場の第12番札所として古くから信仰を集める。",
        address: "埼玉県さいたま市岩槻区慈恩寺139",
        prefecture: "埼玉県",
        city: "さいたま市",
        lat: 35.979440,
        lng: 139.710778,
        qr_token: "shuin-higashi-iwatsuki-4",
        cover_image_url: "/images/higashi-iwatsuki/spot4.png",
        f7_fragment: "824年、慈覚大師・円仁が開いた古刹。",
        f7_full: "824年、慈覚大師・円仁が開いた古刹。のちに唐の都・長安へ渡った円仁は、かつて三蔵法師が経典を訳した「大慈恩寺」で学び、その名をこの東岩槻の寺に授けた。1200年前に刻まれた「同じ寺名」という種が、昭和の戦乱の中で奇跡を呼び起こす。\n\n坂東札所の風格を漂わせる本堂と、境内に響く静謐な空気。\n\n最後は、本堂から少し離れた雑木林の丘へ。遥かなる旅人が眠る十三重の石塔が待っている。",
        is_final: false,
        next_spot_id: "e3111111-1111-1111-1111-111111111114",
        next_spot_name: "三蔵法師が眠る丘（慈恩寺 玄奘塔）"
      },
      {
        id: "e3111111-1111-1111-1111-111111111114",
        name: "三蔵法師が眠る丘（慈恩寺 玄奘塔）",
        description: "『西遊記』で知られる玄奘三蔵法師の霊骨が実際に奉安されている、高さ約15メートルの十三重の花崗岩石塔。",
        address: "埼玉県さいたま市岩槻区表慈恩寺463",
        prefecture: "埼玉県",
        city: "さいたま市",
        lat: 35.976100,
        lng: 139.711700,
        qr_token: "shuin-higashi-iwatsuki-5",
        cover_image_url: "/images/higashi-iwatsuki/spot5.png",
        f7_fragment: "雑木林を抜けた静かな丘にそびえる、十三重の石塔。",
        f7_full: "雑木林を抜けた静かな丘にそびえる、十三重の石塔。1942年に南京で発見され日本へ分骨された玄奘三蔵の霊骨は、東京大空襲の戦火を逃れるため、長安と同じ名を持つこの慈恩寺へと疎開し、今もここに眠っている。天竺を目指した旅人が最後にこの丘に辿り着いた理由——その答えを、あなたが選ぶ。\n\n木漏れ日の差す静かな境内に、白く凛とそびえ立つ十三重の花崗岩の塔。",
        is_final: true
      }
    ]
  }
];
