import { Route } from '@/types';

export const mockRallies: Route[] = [
  {
    id: "rally-saitama-01",
    title: "食べログ 食堂百名店2026 最新の名店を巡る週末",
    region: "埼玉県大宮エリア",
    description: "埼玉県が誇る飲食店を巡ろう。2026年の食べログ 食堂百名店に選ばれし名店を巡る町歩き。お店の予約は忘れないでね！！",
    imageUrl: "/saitama_eye_catch.png",
    illustrationMapUrl: "/saitama-map.jpg", // ※ここに画像を配置してください
    hidePinsOnMap: true,
    spots: [
      {
        id: "spot-6",
        name: "キセキ食堂 上尾店",
        description: "予約TEL：070-3529-8553\n営業時間 平日：10:00 - 14:30（土・日お休み）\n住所: 埼玉県上尾市本町3-11-13 (上尾駅より徒歩15分)",
        lat: 35.975,
        lng: 139.595,
        qr_token: "kiseki-ageo",
        mapX: 40,
        mapY: 28,
        cover_image_url: "/ralleies/saitama/stamp-1.png"
      },
      {
        id: "spot-7",
        name: "こもれび食堂+",
        description: "予約TEL：048-789-6834\n営業時間: 水～土 昼/夜、火は夜のみ (月・日定休)\n住所: さいたま市浦和区仲町2-16-15 (浦和駅西口より徒歩10分)",
        lat: 35.858,
        lng: 139.656,
        qr_token: "komorebi-urawa",
        mapX: 66,
        mapY: 68,
        cover_image_url: "/ralleies/saitama/stamp-2.png"
      },
      {
        id: "spot-8",
        name: "食事処 たらふく",
        description: "予約TEL：048-711-8064\n営業時間: [月火木-土]11:30~14:00/17:45~21:30 [日祝水]夜のみ\n住所: さいたま市中央区桜丘2-3-6 (与野本町駅より徒歩19分)",
        lat: 35.882,
        lng: 139.626,
        qr_token: "tarafuku-yono",
        mapX: 38,
        mapY: 68,
        cover_image_url: "/ralleies/saitama/stamp-3.png"
      }
    ]
  },
  {
    id: "rally-tokyo-01",
    title: "東京下町レトロ散歩",
    region: "東京都 台東区・墨田区",
    description: "浅草からスカイツリーまで、昔ながらの風景と新しい東京が交差するエリアを巡るナラティブ。各チェックポイントで下町の味を堪能しよう。",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    illustrationMapUrl: "https://images.unsplash.com/photo-1578305828882-9659b8cb831b?auto=format&fit=crop&w=1200", 
    spots: [
      {
        id: "spot-1",
        name: "浅草寺 雷門",
        description: "東京のシンボル。巨大な提灯の前で写真を撮ろう。周辺の人形焼もおすすめ。",
        lat: 35.7111,
        lng: 139.7963,
        qr_token: "asakusa-kaminarimon",
        mapX: 30,
        mapY: 60
      },
      {
        id: "spot-2",
        name: "仲見世商店街",
        description: "日本最古の商店街の一つ。お土産や食べ歩きを楽しめる。",
        lat: 35.7126,
        lng: 139.7963,
        qr_token: "nakamise",
        mapX: 35,
        mapY: 45
      },
      {
        id: "spot-3",
        name: "東京スカイツリー",
        description: "高さ634mの電波塔。展望台からの景色は圧巻。",
        lat: 35.7100,
        lng: 139.8107,
        qr_token: "skytree",
        mapX: 80,
        mapY: 30
      }
    ]
  },
  {
    id: "rally-kyoto-01",
    title: "京都 幕末歴史探訪",
    region: "京都府 中京区・東山区",
    description: "新選組や坂本龍馬など、幕末の志士たちが駆け抜けた京都の街を巡る。歴史の息吹を感じられるスポットを集めました。",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    illustrationMapUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200",
    spots: [
      {
        id: "spot-4",
        name: "池田屋跡",
        description: "新選組が尊皇攘夷派を襲撃した「池田屋事件」の舞台。現在は居酒屋になっています。",
        lat: 35.0084,
        lng: 135.7690,
        qr_token: "ikedaya",
        mapX: 45,
        mapY: 30
      },
      {
        id: "spot-5",
        name: "寺田屋跡",
        description: "坂本龍馬が伏見奉行所の役人に襲撃された「寺田屋事件」の舞台。",
        lat: 34.9295,
        lng: 135.7612,
        qr_token: "teradaya",
        mapX: 60,
        mapY: 70
      }
    ]
  },
  {
    id: "route-nakameguro-01",
    title: "目黒川、昭和の痕跡をたどる物語",
    name: "目黒川、昭和の痕跡をたどる物語",
    region: "中目黒",
    area_name: "中目黒",
    description: "染物職人たちが行き交い、洗い場として栄えた目黒川。史実に基づいた昭和 of the river 痕跡をめぐり、街のしるしを刻む物語。",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    category: "discover",
    route_type: "platform",
    display_terminology: "shuin",
    rarity_estimated_min: 45,
    is_published: true,
    spots: [
      {
        id: "spot-nakameguro-1",
        name: "中目黒橋（染物職人の洗い場跡）",
        description: "昭和30年代まで、目黒川では友禅染などの染物職人が川の流れで生地を洗っていました。中目黒橋は職人たちの行き交う中心地でした。",
        address: "東京都目黒区上目黒1-22",
        lat: 35.6441,
        lng: 139.6988,
        qr_token: "shuin-nakameguro-hashi",
        mapX: 30,
        mapY: 40,
        cover_image_url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600",
        f7_fragment: "かつて中目黒の川辺は、染物職人たちの洗い場でした。",
        f7_full: "昭和30年代まで、目黒川では友禅染などの染物職人が川の流れで生地を洗っていました。中目黒橋は職人たちの行き交う中心地でしたが、東京五輪を前に川の水質保全が進み、職人たちは川を離れていきました。しかし橋の下の石積みは、当時のものが今も使われています。次の場所に、彼らが最後に集まった路地の記録があります。",
        is_final: false,
        next_spot_id: "spot-nakameguro-2",
        next_spot_name: "別所橋"
      },
      {
        id: "spot-nakameguro-2",
        name: "別所橋",
        description: "別所橋の周辺は、かつて多くの町工場や職人の長屋が並んでいた下町情緒あふれる地域でした。",
        address: "東京都目黒区上目黒1-12",
        lat: 35.6457,
        lng: 139.6975,
        qr_token: "shuin-besshobashi",
        mapX: 50,
        mapY: 55,
        cover_image_url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600",
        f7_fragment: "別所橋の周辺は、町工場と職人の長屋街でした。",
        f7_full: "別所橋の周辺は、かつて多くの町工場や職人の長屋が並んでいた下町情緒あふれる地域でした。町工場の機械音と染物職人の声が響き渡る日常がそこにはありました。現在、長屋は消えましたが、路地の幅や建物の区割りに当時の面影がひっそりと息づいています。次の場所に、彼らの手仕事の頑強な証拠が遺されています。",
        is_final: false,
        next_spot_id: "spot-nakameguro-3",
        next_spot_name: "目黒川遊歩道の護岸"
      },
      {
        id: "spot-nakameguro-3",
        name: "目黒川遊歩道の護岸（昭和の石積跡）",
        description: "近代的な護岸工事が進む中、遊歩道の基礎には今も昭和の職人たちが手作業で積み上げた頑強な石積みの痕跡が遺されています。",
        address: "東京都目黒区青葉台1-15",
        lat: 35.6473,
        lng: 139.6961,
        qr_token: "shuin-gogan",
        mapX: 70,
        mapY: 70,
        cover_image_url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600",
        f7_fragment: "遊歩道の下には、昭和の職人の頑強な石積みがあります。",
        f7_full: "近代的な護岸工事が進む中、目黒川遊歩道の基礎部分には、今も昭和 of the workers が手作業で積み上げた頑強な石積みの痕跡が美しく遺されています。職人たちはこの地域から消えましたが、彼らが残したしるしは今も街の土台として人々を支え、中目黒の歴史の物語を完結させます。",
        is_final: true
      }
    ]
  },
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
        f7_full: "水のない街が運河を描き、\"ヴェネツィア\"という他人の名を名乗る。なぜ人は、自分のものでない名前で自分を語る？\n\n運河 of water の行き先を目で追う（循環でどこにも流れない）。\n\n次は\"自由\"を売る店。街の名のもとの自由とは別物の自由を。",
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
