export default {
  slug: 'makubetsu',
  station_order: 944,
  station: '幕別',
  line: 'JR根室本線',
  area_name: '幕別本町・寿町',
  prefecture: '北海道',
  municipality: '幕別町',
  category: '歴史・街歩き',
  budget_tier: 2,
  tags: ['根室本線', 'パークゴルフ発祥', 'ねこの座布団', '幕別神社', '止若'],
  style_genre: 'ink_and_watercolor',
  title: '止若の記憶と発祥の芝生をめぐる幕別散歩',
  description:
    '旧止若駅として開業したJR幕別駅から本町の洋食店、ねこの座布団のTOKACHI BARON、幕別神社、パークゴルフ発祥の地を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Makubetsu in Hokkaido, featuring a small northern train station, a historic Shinto shrine, and sweeping emerald park golf lawns adorned with a spiral wooden environmental sculpture beside the Sarubetsu River, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び幕別を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '本町の2階から街を見下ろす洋食ランチ',
      subtext: '駅近くの本町通りで温かな洋食を味わい、街歩きを始めた',
      badge: {
        code: 'makubetsu_zeropoint',
        name_ja: '本町の食卓',
        subtitle_en: 'Station Diner',
        description:
          'Cafe & Grill ゼロポイントで、本町通りを眺めながら温かな洋食を楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm cast-iron skillet and wooden cafe window overlooking a small town street on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '老舗の味を受け継ぐ銘菓ねこの座布団',
      subtext: '惜しまれつつ閉じた老舗の看板銘菓を継ぐ一軒に出会った',
      badge: {
        code: 'makubetsu_baron',
        name_ja: '銘菓の継承者',
        subtitle_en: 'Sweet Legacy',
        description:
          'TOKACHI BARONを訪れ、杉野菓子店の看板銘菓「ねこの座布団」を受け継ぐ味に出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a cute square cat-shaped cushion pastry wrapped in delicate paper on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '明治の開拓から町を見守り続ける社',
      subtext: '明治33年創祀の幕別神社で、鉄道と歩んだ町の歴史を偲んだ',
      badge: {
        code: 'makubetsu_shrine',
        name_ja: '止若の鎮守',
        subtitle_en: 'Makubetsu Shrine',
        description:
          '明治33年創祀の幕別神社に参拝し、旧止若の開拓と鉄道の歴史に思いを馳せたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a historic wooden Shinto torii and sacred shimenawa rope under blue skies on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'パークゴルフ発祥の芝生とらせん状モニュメント',
      subtext: '1983年誕生の発祥の地で、巨大な環境芸術を仰ぎ見た',
      badge: {
        code: 'makubetsu_parkgolf',
        name_ja: '発祥の芝生',
        subtitle_en: 'Birthplace Green',
        description:
          'パークゴルフ発祥の地である幕別町運動公園で、クロニクル・スパイラルを仰ぎ見たしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a spiraling timber sculpture standing on vibrant green park golf lawns on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'makubetsu_complete',
    name_ja: '幕別・止若と発祥の地の旅人',
    subtitle_en: 'Traveler of Makubetsu Heritage',
    description:
      'JR幕別駅からゼロポイント、TOKACHI BARON、幕別神社、パークゴルフ発祥の幕別町運動公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a spiraling timber sculpture, green golf turf, and a traditional shrine gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR幕別駅',
      lat: 42.907784,
      lng: 143.359117,
      address: '北海道中川郡幕別町錦町141',
      description:
        '明治38年（1905年）10月21日に「止若（やむわっか）駅」として開業、昭和38年に「幕別駅」へ改称（終日利用可）。パークゴルフ発祥の町の玄関口。',
      clue:
        '明治三十八年十月に「止若（やむわっか）駅」として開業し、昭和三十八年に現在の駅名へ改称された歴史ある玄関口「JR幕別駅」から楽しい町歩きと散策を始めよう（終日利用可）。穏やかな十勝の風が吹く駅前をゆっくり後にして北西の本町通りへと踏み出したら、まずは徒歩約三分の「Cafe & Grill ゼロポイント」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '駅を出て北西の本町通りへ徒歩約3分',
      f7_fragment: '明治三十八年「止若駅」として開業、パークゴルフ発祥の町の玄関口。',
      f7_full: '「JR幕別駅」の静かなホームを後にし、止若の記憶と発祥の地を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'Cafe & Grill ゼロポイント',
      lat: 42.908662,
      lng: 143.358357,
      address: '北海道中川郡幕別町本町78-1',
      description:
        '幕別駅近くの本町通り沿い・宮本洋物店2階で、昼は洋食・夜はバーとして親しまれるアットホームな飲食店（11:00〜21:00・ランチ〜14:00、日曜休）。',
      clue:
        '本町通り沿いの2階で洋食が味わえる「Cafe & Grill ゼロポイント」で温かな食事を楽しもう（11:00〜21:00、日曜休）。食後は西の「TOKACHI BARON」へ向かおう。',
      hook: '本町通りを西方向へ徒歩約3分',
      f7_fragment: '本町通りの2階で親しまれるアットホームな洋食・バーの飲食店。',
      f7_full: '「Cafe & Grill ゼロポイント」で温かい洋食を味わい、街歩きの活力を得た。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'TOKACHI BARON',
      lat: 42.908715,
      lng: 143.356963,
      address: '北海道中川郡幕別町本町122',
      description:
        '2022年に閉店した老舗「杉野菓子店」の店舗と看板銘菓「ねこの座布団」などを事業継承したスイーツ発信拠点（10:30〜17:00、水・木曜休、土日祝イートイン可）。',
      clue:
        '惜しまれつつ閉店した老舗「杉野菓子店」の店舗と看板銘菓「ねこの座布団」を受け継いだスイーツ拠点「TOKACHI BARON」へ楽しく元気に笑顔で立ち寄ろう（10:30〜17:00、水木休）。歴史ある商店街の中で大切に守り継がれる愛らしいお菓子やスイーツの数々は、幕別ならではの素敵な宝物だ。甘い笑顔とともにお土産をじっくり選んだら、北西へ歩いてすぐの「幕別神社」へ向かおう。',
      hook: '本町を北西方向へ徒歩約2分',
      f7_fragment: '老舗・杉野菓子店の看板銘菓「ねこの座布団」を受け継ぐスイーツ拠点。',
      f7_full: '「TOKACHI BARON」で受け継がれる銘菓に出会い、地域の温かい絆に触れた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '幕別神社',
      lat: 42.908525,
      lng: 143.354861,
      address: '北海道中川郡幕別町本町148',
      description:
        '明治33年（1900年）9月15日創祀（境内終日参拝可）。旧武山市街への移住者が「八幡様」として祀った小祠に始まり、鉄道開通や市街地の発展に伴い現在地へ遷座した。',
      clue:
        '明治三十三年九月に旧武山市街への移住者たちが「八幡様」として祀った小祠に始まり、鉄道開通と市街地の発展に伴い現在地へ遷座した「幕別神社」へ丁寧に心を込めてゆっくりと参拝しよう（境内終日可）。静謐な木立に抱かれた境内でそっと深く手を合わせれば、明治から令和へと続く町の長い歴史の歩みが胸に深く響いてくる。清らかな心を保ったら、南西の「幕別町運動公園」へと楽しく元気に向かおう。',
      hook: '南西方向へ徒歩約10分',
      f7_fragment: '明治三十三年創祀、鉄道開通と市街地発展とともに受け継がれた鎮守。',
      f7_full: '「幕別神社」の静かな杜に参拝し、旧止若から続く町の歴史に思いを馳せた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '幕別町運動公園（つつじコース・クロニクル・スパイラル）',
      lat: 42.903485,
      lng: 143.349331,
      address: '北海道中川郡幕別町寿町152',
      description:
        '昭和58年（1983年）に幕別町職員らが考案した「パークゴルフ発祥の地（つつじコース）」にして、開基100年記念の巨大環境芸術「クロニクル・スパイラル」が立つ公園（終日開放）。',
      clue:
        '旅の締めくくりは、昭和五十八年に幕別町から世界へと誕生した「パークゴルフ発祥の地」である「幕別町運動公園（つつじコース・クロニクル・スパイラル）」をじっくり楽しく笑顔で訪ねよう（終日開放）。美しい芝生のコースとともに、環境芸術家・国安孝昌氏が町開基百年を記念して手掛けたらせん状の巨大モニュメントが空へとそびえ立つ姿は圧巻だ。発祥の地の爽やかな風を感じて旅を笑顔で結ぼう。',
      hook: '',
      f7_fragment: '1983年誕生のパークゴルフ発祥の地にして巨大モニュメントが立つ運動公園。',
      f7_full: '「幕別町運動公園（つつじコース・クロニクル・スパイラル）」で発祥の地の風を感じた。',
    },
  ],
};
