export default {
  slug: 'heiwa',
  station_order: 928,
  station: '平和',
  line: 'JR千歳線',
  area_name: '平和・北郷・白石',
  prefecture: '北海道',
  municipality: '札幌市白石区',
  category: 'グルメ・歴史',
  budget_tier: 1,
  tags: ['千歳線', '窯焼ポテト', 'カフェ', '白石神社', '下町散歩'],
  style_genre: 'ink_and_watercolor',
  title: '甘い香りと開拓の社を訪ねる平和の午後',
  description:
    'JR平和駅から窯焼ポテトのかわいや工場売店、北郷とちの木公園、自家焙煎カフェ、開拓ゆかりの白石神社を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Heiwa and Shiroishi in Sapporo, featuring a pedestrian railway overpass, warm golden sweet potato pastries, a quiet residential coffee shop, and a dignified wooden Shinto shrine amidst lush trees, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '甘味と静かな祈りが息づく平和の街で、どの場面が印象的でしたか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '工場直売所で出会った窯焼ポテトのやさしい甘み',
      subtext: '1976年創業のかわいや本社売店で、伝統の窯焼ポテトを手にした',
      badge: {
        code: 'heiwa_kawaiya',
        name_ja: 'お菓子の里の目利き',
        subtitle_en: 'Sweet Potato Connoisseur',
        description:
          '昭和51年創業のかわいや 本社・工場売店で、名物「窯焼ポテト」を手に入れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a golden baked sweet potato pastry wrapped in rustic parchment on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '線路を越えた住宅街の穏やかな公園の空気',
      subtext: 'とちの木公園の静かな木陰で、白石の暮らしの息遣いを感じた',
      badge: {
        code: 'heiwa_tochinoki',
        name_ja: '北郷の小道歩き',
        subtitle_en: 'Kitago Neighborhood Walker',
        description:
          '北郷とちの木公園の穏やかな木陰を歩き、線路北側の住宅街の風景に癒やされたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of horse-chestnut leaves and a quiet neighborhood park path on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '自家焙煎コーヒーと手作り焼菓子に満たされた時間',
      subtext: 'BELONGの落ち着いた空間で、丁寧な一杯とともに歩みを休めた',
      badge: {
        code: 'heiwa_belong',
        name_ja: '焙煎香るカフェの常連',
        subtitle_en: 'Roastery Treat Lover',
        description:
          'COFFEE&TREAT BELONGで自家焙煎ハンドドリップと手作り焼菓子を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a pour-over coffee carafe beside a glazed doughnut on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '明治の開拓を伝える社と神寄谷の静謐な湧水',
      subtext: '明治5年ゆかりの白石神社を訪れ、土地の歴史に深く敬意を払った',
      badge: {
        code: 'heiwa_shiroishi_shrine',
        name_ja: '白石開拓の参拝者',
        subtitle_en: 'Shiroishi Shrine Pilgrim',
        description:
          '明治5年創祀の遥拝所に始まる白石神社を参拝し、仙台藩白石ゆかりの開拓史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a stately Shinto shrine roof and clear spring water flowing through mossy stones on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'heiwa_complete',
    name_ja: '平和・甘味と古社の散策者',
    subtitle_en: 'Walker of Heiwa Sweets and Shiroishi Shrine',
    description:
      'JR平和駅からかわいや本社・工場売店、北郷とちの木公園、BELONG、白石神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a golden sweet potato treat, coffee cup, and Shinto torii gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR平和駅',
      lat: 43.046866,
      lng: 141.43864,
      address: '北海道札幌市白石区平和通16丁目北10',
      description:
        '昭和61年（1986年）11月1日に臨時乗降場として開業し、翌年に駅へ昇格したJR千歳線の駅（終日利用可・無料）。南北を跨線人道橋で結び地域をつなぐ。',
      clue:
        '昭和六十一年十一月に開業し、南北の住宅街を長い跨線人道橋で結ぶ地域密着の駅「JR平和駅」から楽しい町歩きと散策を始めよう（終日利用可）。心地よい札幌の下町の空気を味わいながら南の平和通側へゆっくり外へ降り立ったら、まずは駅から南へ歩いて約八分の場所にある名菓の直売所「かわいや 本社・工場売店」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に外へ歩き出そう。',
      hook: '平和通側へ出て南方向へ徒歩約8分',
      f7_fragment: '昭和六十一年開業、長い人道橋が南北の街を結ぶJR千歳線の駅。',
      f7_full: '「JR平和駅」から下町の風を感じつつ、甘い香りと開拓の歴史を辿る散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'かわいや 本社・工場売店',
      lat: 43.041809,
      lng: 141.439504,
      address: '北海道札幌市白石区平和通17丁目北11-11',
      description:
        '昭和51年（1976年）4月創業の菓子メーカーの本社直売店（9:00〜17:00、土日祝休）。サツマイモの皮を器に使い新聞紙風の包み紙で有名な「窯焼ポテト」や「ポテトアップルパイ」が看板。',
      clue:
        '昭和五十一年創業の菓子店「かわいや 本社・工場売店」で名物の窯焼ポテトを手に入れよう（9:00〜17:00、土日祝休）。お土産を選んだら北北東の「北郷とちの木公園」へ向かおう。',
      hook: '人道橋を渡り北北東の北郷側へ徒歩約6分',
      f7_fragment: '昭和五十一年創業、新聞紙風の包み紙が目印の「窯焼ポテト」本社直売店。',
      f7_full: '「かわいや 本社・工場売店」で伝統の窯焼ポテトに出会い、甘い香りに包まれた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '北郷とちの木公園',
      lat: 43.047606,
      lng: 141.441502,
      address: '北海道札幌市白石区北郷2条14-1',
      description:
        '平和駅の北郷側に位置する落ち着いた住宅街の公園（終日開放・無料）。線路を越えた先の穏やかな街並みに溶け込む地域の憩いの場。',
      clue:
        '人道橋を渡った北郷エリアの静かな住宅街に佇む緑豊かな「北郷とちの木公園」をのんびり楽しく歩いて散策してみよう（終日開放・無料）。穏やかな木陰と地域の暮らしが温かく感じられる周囲の風景は、少し歩くだけで心がふっと落ち着いていく心地よさだ。のどかな下町の空気を胸いっぱいに吸い込んだら、西方向へ歩いて隠れ家カフェ「COFFEE&TREAT BELONG」へと楽しく向かおう。',
      hook: '北郷の街並みを西方向へ徒歩約5分',
      f7_fragment: 'JR平和駅の北郷側に広がる穏やかな住宅街の憩いの公園。',
      f7_full: '「北郷とちの木公園」の木陰で一息つき、白石の穏やかな暮らしの空気に癒やされた。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'COFFEE&TREAT BELONG',
      lat: 43.049677,
      lng: 141.437919,
      address: '北海道札幌市白石区北郷2条12-6-8',
      description:
        '自家焙煎のハンドドリップコーヒーと手作りドーナツやマフィン、スコーンなどが味わえる温かみのあるカフェ（12:00〜19:00売切終了、火曜・不定休）。',
      clue:
        '北郷の通り沿いに佇むお洒落で温かなカフェ「COFFEE&TREAT BELONG」で美味しい休憩時間をゆっくり楽しく元気に過ごそう（12:00〜19:00、火曜等休）。丁寧に淹れられる自家焙煎ハンドドリップコーヒーと手作りのドーナツやマフィン、スコーンの甘い香りに包まれれば、散策の疲れもすっかり癒やされる。元気を取り戻したら、南西に鎮座する古社「白石神社」へと向かおう。',
      hook: '線路を越えて南西方向へ徒歩約18分',
      f7_fragment: '自家焙煎ハンドドリップ珈琲と手作りドーナツや焼菓子が人気のカフェ。',
      f7_full: '「COFFEE&TREAT BELONG」で丁寧な珈琲と焼菓子を楽しみ、心地よく足を休めた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '白石神社',
      lat: 43.040228,
      lng: 141.428297,
      address: '北海道札幌市白石区本通14丁目北1-12',
      description:
        '明治4年（1871年）の旧仙台藩白石城主・片倉家家臣らの入植を背景に、翌明治5年に札幌神社の旧社殿を移築した遥拝所をルーツとする古社（授与所9:00〜16:00、無休）。右奥に湧水と末社が集う神寄谷がある。',
      clue:
        '旅の締めくくりは、明治四年に入植した旧仙台藩白石城主・片倉家家臣らの歴史を今に伝える古社「白石神社」へ丁寧に優しく心を込めて参拝しよう（授与所9:00〜16:00、無休）。明治五年建立の遥拝所に始まる由緒ある社殿に静かに深く手を合わせ、社殿右奥の湧水と末社が集う静謐な神寄谷（冬季通行止の場合あり）を眺めれば深い敬意が湧いてくる。開拓の祈りに包まれて、平和の街歩きを結ぼう。',
      hook: '',
      f7_fragment: '明治五年創祀の遥拝所に始まり、旧仙台藩白石家の開拓史を伝える古社。',
      f7_full: '「白石神社」の清らかな杜に参拝し、開拓の歴史と静かな祈りに包まれて旅を終えた。',
    },
  ],
};
