export default {
  slug: 'monshizu',
  station_order: 964,
  station: '門静',
  line: 'JR根室本線',
  area_name: '門静・厚岸湾',
  prefecture: '北海道',
  municipality: '厚岸町',
  category: '絶景・街歩き',
  budget_tier: 1,
  tags: ['根室本線', '花咲線', '厚岸湾', 'あっけし望洋台', '昆布漁'],
  style_genre: 'ink_and_watercolor',
  title: '漁港の潮風と望洋台をめぐる門静道',
  description:
    '厚岸湾を望む無人駅・JR門静駅から昆布漁の厚岸漁港、門静簡易郵便局、集会所を経て絶景高台のあっけし望洋台へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Monshizu Station beside calm Akkeshi Bay, traditional kelp drying along the fishing port, and a sweeping scenic overlook at Akkeshi Boyodai viewing the red Akkeshi Bridge, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び門静を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '昆布漁の活気が息づく厚岸漁港（門静地区）',
      subtext: '潮風を感じながら厚岸湾の豊かな漁村の営みに触れた',
      badge: {
        code: 'monshizu_port',
        name_ja: '昆布漁港の潮風',
        subtitle_en: 'Kelp Harbor Breeze',
        description:
          '厚岸漁港（門静地区）を訪れ、厚岸湾の潮風と昆布漁の風景に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of wooden fishing boats moored beside drying dark Hokkaido kelp along a calm bay on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '漁村の日常を支える門静簡易郵便局',
      subtext: '門静2丁目の集落中心部で地域の温かい生活に触れた',
      badge: {
        code: 'monshizu_post',
        name_ja: '入江の小さな窓口',
        subtitle_en: 'Coastal Post Office',
        description:
          '門静簡易郵便局の前を歩き、漁村集落の穏やかな日常を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a small coastal post office sign and sea breeze waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '住民が集う厚岸町門静地区集会所',
      subtext: '海辺の街区から高台へと続く道のりで地域の絆を感じた',
      badge: {
        code: 'monshizu_hall',
        name_ja: '門静の集い処',
        subtitle_en: 'Village Gathering Hall',
        description:
          '厚岸町門静地区集会所の前を通り、海辺の集落の温かい絆に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a neat timber community hall beside a coastal road on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '厚岸湾と大橋を一望するあっけし望洋台',
      subtext: '厚岸観光十景の高台から海と岬の大パノラマを満喫した',
      badge: {
        code: 'monshizu_boyodai',
        name_ja: '望洋台の絶景',
        subtitle_en: 'Akkeshi Bay Panorama',
        description:
          'あっけし望洋台を訪れ、厚岸湾と厚岸大橋・愛冠岬の雄大な絶景を望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a coastal viewpoint bench overlooking a sweeping red bay bridge and distant cape on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'monshizu_complete',
    name_ja: '門静・厚岸湾と望洋台の旅人',
    subtitle_en: 'Explorer of Monshizu and Boyodai',
    description:
      'JR門静駅から厚岸漁港、門静簡易郵便局、望洋台まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a coastal train platform, drying kelp harbor, and the scenic Akkeshi Bay bridge panorama on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR門静駅',
      lat: 43.057866,
      lng: 144.781887,
      address: '北海道厚岸郡厚岸町門静3-1',
      description:
        '大正6年（1917年）12月1日開業の無人駅（終日利用可）。駅名はアイヌ語で「入り江の根もと」を意味する「モイスッ」に由来し、すぐ目の前に厚岸湾を望む。',
      clue:
        '大正六年十二月に開業し、アイヌ語で「入り江の根もと」を意味する「モイスッ」に駅名を由来する「JR門静駅」から楽しい町歩きと散策を始めよう（終日利用可）。すぐ目の前に広がる厚岸湾の青い海と爽やかな潮の香りを胸いっぱいに吸い込んで南の海側へと外へ踏み出したら、まずは漁村の活気が息づく「厚岸漁港（門静地区）」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '駅から南（海側）へ徒歩約8〜9分',
      f7_fragment: 'アイヌ語「モイスッ（入り江の根もと）」に由来し厚岸湾を望む無人駅。',
      f7_full: '「JR門静駅」で潮の香りを胸に吸い込み、漁港と望洋台を目指す散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '厚岸漁港（門静地区）',
      lat: 43.051865,
      lng: 144.78166,
      address: '北海道厚岸郡厚岸町門静3',
      description:
        '第3種漁港・厚岸漁港の一角をなす沿岸漁業の拠点（見学自由・作業エリア立入注意）。夏場には特産の昆布漁や昆布干しの風景が見られ、潮風を感じながら歩ける。',
      clue:
        '沿岸漁業の拠点「厚岸漁港（門静地区）」で爽やかな潮風と昆布漁の漁村風景をのんびり眺めよう（作業エリア立入注意）。次は北東の「門静簡易郵便局」へ向かおう。',
      hook: '北東方向（国道44号沿い）へ徒歩約10分',
      f7_fragment: '夏には特産の昆布漁や昆布干しの風景が見られる沿岸漁業の漁港拠点。',
      f7_full: '「厚岸漁港（門静地区）」の海辺で潮風を感じ、厚岸の豊かな海の営みに触れた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '門静簡易郵便局',
      lat: 43.057097,
      lng: 144.788843,
      address: '北海道厚岸郡厚岸町門静2-62',
      description:
        '門静2丁目の集落中心部に位置する地域密着型の簡易郵便局（平日9:00〜16:00頃、土日祝休）。漁村の日常を支える生活インフラとして機能している。',
      clue:
        '門静2丁目の集落中心部に佇み、海辺に暮らす人々の日常を温かく支え続けている地域密着の窓口「門静簡易郵便局」の前をゆっくり歩いてみよう（平日9:00〜16:00頃、土日祝休）。穏やかな海の気配と素朴な漁村の街並みを感じながら一歩ずつ静かに歩みを進めると、旅の心がじんわり優しく和らいでいく。集落の温もりに触れたら、さらに北の「厚岸町門静地区集会所」へと元気に歩いて向かおう。',
      hook: '門静2丁目を北方向へ徒歩約5〜6分',
      f7_fragment: '門静2丁目の集落中心部で漁村の日常を支え続ける地域密着の簡易郵便局。',
      f7_full: '「門静簡易郵便局」の周辺を歩き、漁村集落の穏やかで温かい空気を感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '厚岸町門静地区集会所',
      lat: 43.06094,
      lng: 144.788223,
      address: '北海道厚岸郡厚岸町門静2-1',
      description:
        '門静地区の住民が集うコミュニティ拠点（施設利用時開館・外観見学自由）。門静2丁目から1丁目の高台へ向かう国道沿いの動線上に位置している。',
      clue:
        '門静地区の住民たちが季節の集いや語らいの場として大切にしているコミュニティ拠点「厚岸町門静地区集会所」の前をゆっくり楽しく歩いてみよう（外観見学自由）。海辺の2丁目から景勝地のある1丁目の高台へと少しずつ上っていく国道沿いの道のりは、次第に視界が大きく開けていくワクワク感に満ちている。地域の温かな絆を胸に感じたら、いよいよ南東の高台「あっけし望洋台」へと元気に歩いて向かおう。',
      hook: '南東方向（高台方面）へ徒歩約7分',
      f7_fragment: '門静2丁目から高台へ向かう途上に立ち、地域の絆をつなぐコミュニティ拠点。',
      f7_full: '「厚岸町門静地区集会所」を通り過ぎ、高台の絶景への期待に胸を膨らませた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'あっけし望洋台（厚岸望洋台）',
      lat: 43.058605,
      lng: 144.794337,
      address: '北海道厚岸郡厚岸町門静1-1',
      description:
        '厚岸観光十景の一つに数えられる国道44号沿いの展望パーキング・景勝地（終日開放・無休）。高台のベンチや展望スペースから、厚岸湾や厚岸大橋、愛冠岬を一望できる。',
      clue:
        '旅の締めくくりは、厚岸観光十景の一つにも数えられる国道44号線沿いの絶景スポット「あっけし望洋台（厚岸望洋台）」の高台ベンチでゆったりと休憩しよう（終日開放）。目の前には青く輝く厚岸湾と赤い厚岸大橋、さらに遠くの愛冠岬まで一望する大パノラマが広がり、爽やかな潮風とともに旅の疲れが心地よく溶けていく。素晴らしい海の絶景を胸いっぱいに焼き付けて、門静の旅を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '厚岸観光十景に数えられ、厚岸湾と厚岸大橋、愛冠岬を一望できる展望地。',
      f7_full: '「あっけし望洋台（厚岸望洋台）」から厚岸湾の大パノラマを望み、門静の旅を終えた。',
    },
  ],
};
