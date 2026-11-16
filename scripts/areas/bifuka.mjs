// scripts/areas/bifuka.mjs
// station_order: 882

export default {
  slug: 'bifuka',
  station_order: 882,
  station: '美深',
  line: 'JR宗谷本線',
  area_name: '美深・赤レンガ醸造所と松浦武四郎の郷土館',
  prefecture: '北海道',
  municipality: '美深町',
  category: 'クラフトビールと郷土史',
  budget_tier: 3,
  tags: ['北海道', '美深町', '美深駅', '美深白樺ブルワリー', 'ピウカ・ボッチャ'],
  style_genre: 'ink_and_watercolor',
  title: '美深・白樺樹液ビールと赤レンガに名物菓子へ',
  description:
    '旧美幸線も分岐した「JR美深駅」から、町内焙煎珈琲の「kusuda design and cafe」、松浦武四郎の探検資料が残る「美深町文化会館COM100 郷土資料室」、築90年赤レンガ倉庫の「Restaurant BSB」、かぼちゃ銘菓の老舗「菓子司 すぎむら」を巡る徒歩ルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Bifuka brick transit terminal station, minimalist designer coffee shop, local history museum gallery, 90-year-old red-brick craft brewery restaurant, and traditional pastry shop with golden pumpkin sweets, full bleed, no text, no letters.',
  question: 'かつて美幸線が分岐した美深の駅からデザインカフェ、郷土資料室、日本最北の赤レンガブルワリーを巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '町内焙煎の珈琲とデザイン雑貨が駅前で迎える「kusuda design and cafe」',
      subtext: '駅を出てすぐの洗練された空間でいただく丁寧に淹れられた珈琲が格別だった。',
      badge: {
        code: 'bifuka_kusuda',
        name_ja: '美深・白樺薫る珈琲客',
        subtitle_en: 'Design Cafe Guest of Kusuda',
        description: 'kusuda design and cafeで町内焙煎のコーヒーを楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a sleek ceramic pour-over coffee cup beside minimalist Nordic-Japanese wooden craft objects, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '松浦武四郎の探検資料や開拓史を無料で学べる「美深町文化会館COM100 郷土資料室」',
      subtext: '幕末の探検家・松浦武四郎の足跡と厳しい林業開拓の道具に深く見入った。',
      badge: {
        code: 'bifuka_com100',
        name_ja: '美深・武四郎探検の学徒',
        subtitle_en: 'Heritage Scholar of Bifuka COM100',
        description: '美深町文化会館COM100郷土資料室で松浦武四郎と開拓史に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an antique Japanese explorer compass, rolled survey map, and historic pioneer forestry tools, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '築90年の赤レンガ倉庫で白樺ビールとホゲット肉を味わう「Restaurant BSB」',
      subtext: '日本最北のクラフトビール醸造所と希少な松山農場ホゲット肉に感動した。',
      badge: {
        code: 'bifuka_bsb',
        name_ja: '美深・最北赤レンガ醸造所',
        subtitle_en: 'Craft Brewery Diner of BSB',
        description: 'Restaurant BSBで美深白樺ブルワリーのビールやホゲット料理を堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a historic red-brick brewery facade with a tall glass of golden craft beer and birch leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '美深産かぼちゃの銘菓「ピウカ・ボッチャ」が並ぶ老舗「菓子司 すぎむら」',
      subtext: 'アイヌ語「石の多い場所」にちなんだ銘菓の優しい甘さに、町への愛を感じた。',
      badge: {
        code: 'bifuka_sugimura',
        name_ja: '美深・ピウカ銘菓の旅人',
        subtitle_en: 'Confectionery Lover of Sugimura',
        description: '菓子司 すぎむらで名物ピウカ・ボッチャやかぼちゃパイを求めた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting golden baked pumpkin pies and delicate wrapped Japanese confections on a cedar tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'bifuka_master',
    name_ja: '美深・最北醸造所と武四郎巡り',
    subtitle_en: 'Bifuka Brewery & Heritage Master',
    description: 'JR美深駅からkusuda cafe、COM100郷土資料室、Restaurant BSB、菓子司すぎむらまでを巡った証',
    image_prompt:
      'A circular emblem combining 90-year red-brick brewery, explorer compass, pour-over coffee and golden pumpkin pastry, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR美深駅（美深町交通ターミナル）',
      prefecture: '北海道',
      city: '美深町',
      description:
        '1911年（明治44年）11月3日開業、かつて国鉄美幸線が分岐した拠点。現駅舎は1987年落成の「美深町交通ターミナル」で、観光案内所・売店「びーす」を併設（入場無料、売店等元日休）。',
      address: '北海道中川郡美深町字開運町1-1',
      lat: 44.482954,
      lng: 142.350372,
      clue:
        '明治四十四年に開業し、かつては国鉄美幸線も分岐した道北の交通拠点「JR美深駅（美深町交通ターミナル）」から街歩きを始めよう（入場無料）。全スポットが徒歩十分圏内にまとまるコンパクトな市街地の心地よい空気を胸いっぱいに感じて駅舎を後にしたら、まずは歩いて三分ほどの駅前に建つ洗練された雰囲気の一軒「kusuda design and cafe」へと、のんびりゆっくり向かおう。',
      surprise: '昭和六十二年落成の交通ターミナル駅舎と、今も残るかつての美幸線分岐の記憶に旅情をそそられた。',
      hook: 'JR美深駅を出たら、徒歩約三分の「kusuda design and cafe」へ向かおう。',
      f7_fragment: 'かつて国鉄美幸線も分岐した歴史を持ち、観光案内所を併設する交通拠点。',
      f7_full: '「JR美深駅」に降り立ち、最北のクラフトビールと郷土史を巡る街歩きを始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Bifuka Station classic brick-and-timber transit terminal building under bright northern sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'kusuda design and cafe',
      prefecture: '北海道',
      city: '美深町',
      description:
        '町内焙煎の香り高いコーヒーとデザイン雑貨を扱う駅近の洗練されたカフェ。平日10:00〜18:00頃・土日祝10:00〜17:00、水曜＋不定休。コーヒー約500円〜。',
      address: '北海道中川郡美深町東2条南1丁目13',
      lat: 44.481837,
      lng: 142.348358,
      clue:
        '駅東の「kusuda design and cafe」へ入ろう（10:00〜、水曜休）。町内焙煎珈琲と雑貨が心地よい駅近カフェだ。一服したら西の「美深町文化会館COM100」へ。',
      surprise: '美深の駅前にこれほど洗練された空間と町内焙煎の本格珈琲があることに嬉しい驚きを覚えた。',
      hook: 'kusuda design and cafeで一息ついたら、西へ歩いて「美深町文化会館COM100 郷土資料室」へ向かおう。',
      f7_fragment: '町内焙煎の香り高いコーヒーとデザイン雑貨が楽しめる駅近カフェ。',
      f7_full: '「kusuda design and cafe」で町内焙煎の珈琲を味わい、旅の始まりを彩った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a minimalist Japanese-Nordic designer cafe counter with freshly brewed pour-over coffee and wooden crafts, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '美深町文化会館COM100 郷土資料室',
      prefecture: '北海道',
      city: '美深町',
      description:
        '幕末の探検家・松浦武四郎の資料や明治期以降の開拓生活用具、農林業資料、自然標本を展示する資料室。10:00〜17:00、年末年始（12/30〜1/5）休、入館無料。',
      address: '北海道中川郡美深町字西町22',
      lat: 44.480989,
      lng: 142.34028,
      clue:
        '「美深町文化会館COM100 郷土資料室」へ立ち寄り、町の歩みを学んでみよう（10:00〜17:00、年末年始休、無料）。幕末に蝦夷地を歩いた松浦武四郎の探検資料をはじめ、厳しい北の大地を切り拓いた明治以降の生活用具や農林業の道具、自然標本が充実しており大変見応えがある。貴重な郷土史にじっくり触れたら、築九十年赤レンガ倉庫の「Restaurant BSB」へ向かおう。',
      surprise: '松浦武四郎の探検記録から開拓期の林業・生活史まで無料でじっくり学べる展示の充実度に感心した。',
      hook: 'COM100 郷土資料室を見学したら、赤レンガ倉庫の「Restaurant BSB」へ向かおう。',
      f7_fragment: '松浦武四郎の探検資料や明治開拓期の生活・農林業資料を伝える無料資料室。',
      f7_full: '「美深町文化会館COM100 郷土資料室」で松浦武四郎の足跡と開拓史に深く見入った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Bifuka COM100 local history room displaying antique explorer maps and pioneer forestry tools in warm light, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'Restaurant BSB（美深白樺ブルワリー併設）',
      prefecture: '北海道',
      city: '美深町',
      description:
        '築90年の赤レンガ倉庫を改装した日本最北のクラフトビール醸造所併設レストラン。11:30〜21:30（L.O.21:00）、年中無休（不定休あり）。松山農場の希少なホゲット肉ジンギスカンや白樺樹液使用ビールが名物。',
      address: '北海道中川郡美深町大通北4丁目9-5-2',
      lat: 44.485379,
      lng: 142.344535,
      clue:
        '築九十年の歴史ある赤レンガ倉庫を改装した「Restaurant BSB（美深白樺ブルワリー併設）」で特別な食事を楽しもう（11:30〜21:30）。日本最北のクラフトビール醸造所が生み出す白樺樹液を使った個性豊かなビールとともに、地元・松山農場の希少なホゲット肉ジンギスカンなどを味わえる贅沢な拠点だ。美深の底力を堪能したら、すぐ近くの老舗「菓子司 すぎむら」へ向かおう。',
      surprise: '築九十年の重厚な赤レンガ倉庫の空間と、白樺樹液ビール・希少なホゲット肉という唯一無二の魅力に酔いしれた。',
      hook: 'Restaurant BSBで美深の味を満喫したら、すぐ近くの「菓子司 すぎむら」へ向かおう。',
      f7_fragment: '築90年の赤レンガ倉庫に佇む、日本最北のクラフトビール醸造所併設レストラン。',
      f7_full: '「Restaurant BSB」の赤レンガ空間で白樺ブルワリーと地元食材の饗宴を味わった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Restaurant BSB converted 1930s red-brick warehouse dining room with craft beer flight and sizzling lamb grill, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '菓子司 すぎむら',
      prefecture: '北海道',
      city: '美深町',
      description:
        '国道40号沿いで長年親しまれる老舗菓子店。8:00〜18:30、不定休。アイヌ語「ピウカ（石の多い場所）」にちなむ銘菓「ピウカ・ボッチャ」や美深産かぼちゃパイ（200〜300円前後）が人気。',
      address: '北海道中川郡美深町大通北4丁目1',
      lat: 44.485095,
      lng: 142.345044,
      clue:
        '旅の締めくくりは、国道40号沿いで長年愛され続ける老舗「菓子司 すぎむら」へ立ち寄ろう（8:00〜18:30、不定休）。美深の名の由来であるアイヌ語「ピウカ（石の多い場所）」にちなんだ名物銘菓「ピウカ・ボッチャ」や、美深産カボチャをたっぷり使った焼きたてのかぼちゃパイは、お土産にもぴったりの優しい味わいだ。甘い幸せな余韻を胸にしっかりと刻み、美深の街歩きを締めくくろう。',
      surprise: '町名の由来であるアイヌ語「ピウカ」を冠した銘菓「ピウカ・ボッチャ」とかぼちゃパイの素朴な美味しさに和んだ。',
      hook: '',
      f7_fragment: 'アイヌ語「ピウカ」にちなむ銘菓や美深産かぼちゃパイが人気の老舗菓子店。',
      f7_full: '「菓子司 すぎむら」で銘菓ピウカ・ボッチャを求め、温かな甘さとともに旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Confectionery Sugimura warm traditional sweet shop counter displaying golden pumpkin pies and wrapped gift boxes, no text, no letters.',
    },
  ],
};
