export default {
  slug: "hiregasaki",
  line: "流鉄流山線",
  station: "鰭ヶ崎駅",
  station_order: 129,
  area_name: "鰭ヶ崎・千仏の古刹と流山みりん菓子の単線軌道",
  title: "弘法大師ゆかりの朱門から単線木造駅と蕎麦へ",
  description: "都心からほど近い千葉県流山市にありながら、総武流山電鉄時代からの懐かしい単線電車が走る流鉄流山線・鰭ヶ崎駅周辺を西から東へ歩くルートです。弘仁5年創建と伝わる守龍山東福寺の朱塗りの仁王門から、注文焙煎の珈琲豆店、大正5年開業の木造駅舎、流山名産の本みりんを使った銘菓の和菓子舗を経て、坂川近くに佇む石臼挽き手打ち蕎麦処へと向かいます。",
  category: "歴史・文化・グルメ",
  prefecture: "千葉県",
  budget_tier: 2,
  tags: ["鰭ヶ崎", "流山", "流鉄流山線", "東福寺", "手打ち蕎麦"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of Hiregasaki in Nagareyama, Chiba. A vermilion Nio gate atop stone steps at Tofuku-ji Temple, a retro two-car local train passing a wooden station building on the Ryutetsu Line, and a ceramic plate of handmade soba noodles. Loose ink lines, granulation watercolor wash, wide unpainted Washi margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "鰭ヶ崎の朱塗山門と単線軌道をめぐる旅人",
    subtitle_en: "Wayfarer of Hiregasaki Vermilion Gate and Single Track",
    description: "守龍山 東福寺から南流山こーひー焙煎、流鉄流山線 鰭ヶ崎駅、菓匠 美しまや、手打ちそば 東吾までを巡り歩いた証"
  },
  question: "台地の古刹から単線の木造駅、坂川沿いの蕎麦処まで歩みを進めるなか、もう一度立ち止まって味わいたいのはどのひとときですか？",
  choices: [
    {
      key: "A",
      text: "『守龍山 東福寺』の百八段の石段を見下ろす朱塗りの仁王門と、千仏堂に満ちる静寂",
      description: "弘仁五年創建と伝わる台地の上の真言宗古刹で、鮮やかな朱門と歴史ある堂宇を仰ぎ見る時間",
      badge: {
        code: "shuin_hiregasaki_tofukuji_niomon",
        name_ja: "百八段の石段と朱塗仁王門を仰ぐ参拝者",
        subtitle_en: "Pilgrim of the Vermilion Nio Gate",
        description: "守龍山 東福寺で平安初期からの古刹の祈りに触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『南流山こーひー焙煎』の店先へ漂う、生豆から煎り上げる香ばしいローストのアロマ",
      description: "注文を受けてから小型焙煎機で丁寧に焼き上げる珈琲豆専門店で、煎りたての香りに包まれる体験",
      badge: {
        code: "shuin_hiregasaki_roast_coffee_aroma",
        name_ja: "煎りたての珈琲豆と街角の香りを愛でる人",
        subtitle_en: "Connoisseur of Freshly Roasted Beans",
        description: "南流山こーひー焙煎で自家焙煎の技と香りに触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "大正期からの歴史を刻む『流鉄流山線 鰭ヶ崎駅』と、白みりんの風味が生きる『菓匠 美しまや』",
      description: "切符で乗降する単線の木造駅舎から、流山名産の本みりんを使った銘菓「一茶の宿」の老舗へ辿るひと時",
      badge: {
        code: "shuin_hiregasaki_ryutetsu_mirin_sweets",
        name_ja: "単線木造駅と流山みりん銘菓を識る旅人",
        subtitle_en: "Seeker of Single-Track Rails and Mirin Sweets",
        description: "鰭ヶ崎駅と菓匠 美しまやで流山の鉄道と和菓子文化に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "『手打ちそば 東吾』で手繰る、石臼挽きの香り高い細打ちせいろと出汁の効いた辛汁",
      description: "店主が石臼で自家製粉した瑞々しい手打ち蕎麦を、坂川近くの静かな店内でゆっくりと味わう瞬間",
      badge: {
        code: "shuin_hiregasaki_togo_stone_soba",
        name_ja: "石臼挽きの細打ちせいろを嗜む蕎麦通",
        subtitle_en: "Gourmet of Stone-Milled Handmade Soba",
        description: "手打ちそば 東吾で自家製粉の手打ち蕎麦を堪能した証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "守龍山 東福寺",
      spot_type: "見どころ",
      description: "弘仁5年（814年）に弘法大師・空海によって創建されたと伝わる真言宗豊山派の古刹。百八段の石段と朱塗りの仁王門、千体仏を祀る千仏堂を有する。",
      address: "千葉県流山市鰭ケ崎1033",
      prefecture: "千葉県",
      city: "流山市",
      lat: 35.841797,
      lng: 139.908073,
      clue: "鰭ヶ崎の台地の西端から歩き始めると、緑深い木立のなかに百八段の石段と鮮やかな朱塗りの仁王門を構える『守龍山 東福寺』が聳えている。平安初期の弘仁五年に弘法大師・空海が創建したと伝わる真言宗豊山派の名刹で、石段を上りきった境内には千体もの小仏像を安置する千仏堂や鐘楼堂が静かに佇む。高台の境内から下総の空を見渡し、千二百年の祈りが息づく寺域の空気を胸いっぱいに吸い込もう。",
      surprise: "山号の「守龍山」は、かつてこの地の沼に棲んでいた龍が仏法に帰依して寺院の守護神となったという鰭ヶ崎の地名由来伝説（「背びれ」が突出した岬＝鰭ヶ崎）と深く結びついている。",
      hook: "朱塗りの仁王門をくぐり石段を下りたら南東へ徒歩4分。煎りたての香りが漂う『南流山こーひー焙煎』へ向かおう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of the vermilion Nio Gate and stone steps of Tofuku-ji Temple in Hiregasaki, Nagareyama. Dappled sunlight through ancient cedar and ginkgo trees, partial upward framing, unpainted paper margins, no people, no text."
    },
    {
      name: "南流山こーひー焙煎",
      spot_type: "休憩",
      description: "東福寺の台地を下りた通り沿いに店を構える自家焙煎珈琲専門店。注文を受けてから生豆を小型焙煎機で丁寧にローストし、淹れたての珈琲も楽しめる。",
      address: "千葉県流山市鰭ケ崎8-3",
      prefecture: "千葉県",
      city: "流山市",
      lat: 35.840303,
      lng: 139.909633,
      clue: "東福寺の石段から南東へ歩くと、香ばしいロースト香が漂う『南流山こーひー焙煎』がある。注文ごとに生豆を小型焙煎機で煎り上げる専門店で、爆ぜる豆の音と芳醇な香りに包まれながらひと息つける。",
      surprise: "店頭に並ぶ世界の生豆は欠点豆を一粒ずつ手作業で取り除くハンドピックを経てから焙煎されるため、雑味のない澄んだ後味に仕上がる。",
      hook: "煎りたての珈琲の香りに触れたら北東へ徒歩2分。単線電車が走る『流鉄流山線 鰭ヶ崎駅』へ歩みを進めよう。",
      image_prompt: "Gouache and colored pencil illustration of freshly roasted coffee beans cooling in a wooden tray beside a small craft coffee roaster and a steaming drip coffee cup. Warm amber tones, partial close-up composition, textured paper grain, no people, no text."
    },
    {
      name: "流鉄流山線 鰭ヶ崎駅",
      spot_type: "見どころ",
      description: "大正5年（1916年）開業の流鉄流山線の単線駅。交通系ICカードを使わず切符で乗降する改札や木造駅舎の趣が残り、2両編成のカラフルな電車が行き交う。",
      address: "千葉県流山市鰭ケ崎1436-1",
      prefecture: "千葉県",
      city: "流山市",
      lat: 35.841009,
      lng: 139.910907,
      clue: "ゆるやかな坂を上ると、大正五年に町民出資の流山軽便鉄道として開業して以来の歴史を刻む『流鉄流山線 鰭ヶ崎駅』の木造駅舎が現れる。首都圏にありながら交通系ICカードを導入せず、昔ながらの紙の切符と駅員の手仕事が生きる改札口には、昭和の私鉄の時間がそのまま流れている。住宅街のカーブを抜けて「さくら」や「流星」など愛称付きの2両編成の電車がコトコトと滑り込む光景を眺めよう。",
      surprise: "流鉄流山線は全長わずか5.7キロの単線路線で、江戸川の水運で栄えたみりん醸造の町・流山と常磐線馬橋駅を結ぶため、地元の醸造家や住民たちが資金を出し合って敷設した「町民鉄道」がルーツである。",
      hook: "単線の木造駅舎を見送ったら北東へ徒歩2分。流山みりんの銘菓を作る老舗『菓匠 美しまや』へ立ち寄ろう。",
      image_prompt: "Cinematic watercolor background art of the retro wooden station entrance and single-track platform of Hiregasaki Station on the Ryutetsu Nagareyama Line. A nostalgic two-car painted train railcar in soft afternoon light, visible brush strokes, no people, no text."
    },
    {
      name: "菓匠 美しまや",
      spot_type: "買い物",
      description: "鰭ヶ崎駅近くの旧道沿いに暖簾を掲げる昭和53年（1978年）創業の老舗和菓子店。流山名産の白みりんを使った銘菓「一茶の宿」や「七福神もなか」が人気。",
      address: "千葉県流山市鰭ケ崎1452-3",
      prefecture: "千葉県",
      city: "流山市",
      lat: 35.841675,
      lng: 139.912012,
      clue: "鰭ヶ崎駅前の旧道を少し東へ歩くと、昭和五十三年創業の老舗和菓子店『菓匠 美しまや』の暖簾が見えてくる。店内には、流山が発祥の地として知られる「白みりん」を生地に練り込んでしっとりと焼き上げた代表銘菓「一茶の宿」や、香ばしい最中種に自家製餡を詰めた「七福神もなか」、朝つきの団子などが並ぶ。俳人・小林一茶が幾度も訪れた流山の歴史に思いを馳せながら、優しい甘みの和菓子をお土産に選ぼう。",
      surprise: "流山の白みりんは江戸後期に掘り抜かれた万上味淋や天晴味淋をルーツとし、砂糖とは異なる上品な照りと深いコクを生むため、現代では和洋菓子の隠し味としても重宝されている。",
      hook: "みりん銘菓を手に入れたら南東へ徒歩4分。石臼挽きの香り高い手打ち蕎麦処『手打ちそば 東吾』へ向かおう。",
      image_prompt: "Pastel gouache and watercolor illustration of traditional Japanese wagashi sweets—monaka wafers and mirin-glazed baked confections—arranged on a wooden tray with washi wrapping paper at a neighborhood confectionery shop. Soft warm lighting, no people, no text."
    },
    {
      name: "手打ちそば 東吾",
      spot_type: "食事",
      description: "鰭ヶ崎の坂川近くに佇む石臼挽き手打ち蕎麦の名店。店主が石臼で自家製粉した蕎麦粉で打つ瑞々しい細打ち蕎麦と、本枯節の出汁が効いたつゆを堪能できる。",
      address: "千葉県流山市鰭ケ崎1471-1",
      prefecture: "千葉県",
      city: "流山市",
      lat: 35.8398,
      lng: 139.913937,
      clue: "旧道から南東へ進み、坂川に近い静かな通りへ出ると、控えめな木の看板を掲げた『手打ちそば 東吾（とうご）』が迎えてくれる。店主がその日に打つ分だけを石臼でゆっくりと自家製粉し、熱を持たせずに挽き上げた蕎麦粉で打つせいろは、淡い緑がかった色合いと穀物の瑞々しい香りが際立つ。本枯節から丁寧に引いた芳醇な辛汁に細打ちの蕎麦を少しだけ浸して手繰り、とろりとした蕎麦湯で鰭ヶ崎の散策を締めくくろう。",
      surprise: "石臼を低速で回して挽く自家製粉は、摩擦熱で蕎麦本来の繊細な香気成分が飛ぶのを防ぐとともに、粒子に微細な凹凸が生まれることで水回しと喉ごしが格段に良くなる。",
      hook: "",
      image_prompt: "Transparent watercolor and fountain pen food illustration of handmade stone-milled zaru soba noodles on a bamboo mat with a porcelain soba-choko dipping cup and wooden soba-yu pot on a dark wood table. Crisp ink details, soft watercolor washes, no people, no text."
    }
  ]
};
