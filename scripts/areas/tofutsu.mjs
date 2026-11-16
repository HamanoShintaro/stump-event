export default {
  slug: 'tofutsu',
  station_order: 947,
  station: '十弗',
  line: 'JR根室本線',
  area_name: '十弗宝町・北栄',
  prefecture: '北海道',
  municipality: '豊頃町',
  category: '自然・街歩き',
  budget_tier: 1,
  tags: ['根室本線', '10ドル駅', '簡易郵便局', '治水', '十弗西神社'],
  style_genre: 'ink_and_watercolor',
  title: '十ドル看板が迎える北の農村と祈りの小径',
  description:
    '10ドル駅の愛称で親しまれるJR十弗駅から十弗簡易郵便局、十弗農業センター、十弗ポンプ場、牧草地の十弗西神社を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Tofutsu in Toyokoro, Hokkaido, featuring a small weathered wooden train station with a 10-dollar station sign, vast emerald dairy pastures stretching under crisp northern skies, and a tiny peaceful Shinto shrine nestled in the meadow, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び十弗を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '宝町の駅前に佇む小さな簡易郵便局',
      subtext: '地域の暮らしを支える素朴な窓口の温もりに触れた',
      badge: {
        code: 'tofutsu_post',
        name_ja: '宝町の小さな窓口',
        subtitle_en: 'Tofutsu Post Office Visitor',
        description:
          '十弗宝町の駅前に佇む十弗簡易郵便局を訪れ、地域の暮らしの温もりに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a small wooden country post office sign and an envelope on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '十弗地区の人々が集う農業センター',
      subtext: '開拓から続く農村の営みと地域の絆に思いを馳せた',
      badge: {
        code: 'tofutsu_center',
        name_ja: '農村の集いを知る者',
        subtitle_en: 'Heart of Tofutsu Village',
        description:
          '駅前の十弗農業センターを訪れ、十弗地区の暮らしと生涯学習の拠点に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a modest rural community hall surrounded by golden wheat sheaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '十勝川水系の農地を守る十弗ポンプ場',
      subtext: '低平地の水害を防ぐ北の大地の治水の知恵を知った',
      badge: {
        code: 'tofutsu_pump',
        name_ja: '大河の治水を見守る者',
        subtitle_en: 'Watcher of the River Basin',
        description:
          '豊頃町役場 十弗ポンプ場の前に立ち、十勝川流域の治水と暮らしの知恵を学んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a brick riverside pumping house beside calm wide river currents on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '牧草地帯の先に鎮座する十弗西神社',
      subtext: '広大な牧草地の先で、地域の開拓を見守る社に参拝した',
      badge: {
        code: 'tofutsu_west_shrine',
        name_ja: '牧草地の社を詣でる者',
        subtitle_en: 'Shrine in the Pasture',
        description:
          '十弗西部の北栄エリアに鎮座する十弗西神社まで足を延ばし、静かな祈りを捧げたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a lonely wooden torii gate framed by vast green pastures and distant mountains on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'tofutsu_complete',
    name_ja: '十弗・十ドル駅と牧草地の旅人',
    subtitle_en: 'Traveler of Tofutsu Pastures',
    description:
      'JR十弗駅から十弗簡易郵便局、十弗農業センター、十弗ポンプ場、十弗西神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a wooden station bench, wide green pastures, and a quiet Shinto torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR十弗駅',
      lat: 42.855775,
      lng: 143.500972,
      address: '北海道中川郡豊頃町十弗宝町1',
      description:
        '明治44年（1911年）12月15日開業の無人駅（終日利用可）。アイヌ語「ト・プッ（沼の口）」が由来。「弗」が「$」に似ることから「10ドル駅」と呼ばれ「10$メモリアルボード」も立つ。',
      clue:
        '明治四十四年十二月に開業し、漢字の「弗」がドル記号に似ていることから「十ドル（10$）駅」の愛称で親しまれる「JR十弗駅」から楽しい散策を始めよう（終日利用可）。ホームに立つ十ドルメモリアルボードや木造待合室の趣を味わって外へ出たら、まずは駅前の通りにある「十弗簡易郵便局」を目指して、のどかな十勝の美しい田園風景を感じながらのんびり楽しく元気に笑顔で力強く歩き出そう。',
      hook: '駅前から駅前通りへ徒歩約1分',
      f7_fragment: '「十ドル駅」の愛称と10$メモリアルボードで知られるJR根室本線の無人駅。',
      f7_full: '「JR十弗駅」のユニークな木造駅舎を後にし、のどかな北の農村散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '十弗簡易郵便局',
      lat: 42.855873,
      lng: 143.501664,
      address: '北海道中川郡豊頃町十弗宝町39',
      description:
        '元Aコープの建物を移転利用した地域密着の簡易郵便局（平日9:00〜16:00、土日祝・年末年始等休）。切手や郵便窓口など十弗の暮らしを支えている。',
      clue:
        '駅前で地域の暮らしを支える「十弗簡易郵便局」に立ち寄り、十ドルの町ならではの旅の便りに思いをはせよう（平日9:00〜16:00）。次は「十弗農業センター」へ向かおう。',
      hook: '宝町通りを徒歩約2分',
      f7_fragment: '元Aコープの建物を活かして十弗宝町の駅前に佇む地域密着の簡易郵便局。',
      f7_full: '「十弗簡易郵便局」の前を歩き、小さな集落の温かな日常の営みに触れた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '十弗農業センター',
      lat: 42.856534,
      lng: 143.500783,
      address: '北海道中川郡豊頃町十弗宝町107-2',
      description:
        '十弗駅前に位置する地域の拠点施設（行事等の利用時間に準ずる、指定避難所）。十弗地区の会合や生涯学習の場として住民に親しまれている。',
      clue:
        '十弗宝町の駅近くに位置し、地域の方々の会合や生涯学習の場として大切に活用されている「十弗農業センター」の前をゆっくり楽しく元気に笑顔で訪ねよう（外観見学自由）。広大な十勝の農村地帯の中で人と人とを結び、いざという時には指定避難所としての役割も担うこの建物の前に立てば、地域の強い絆が伝わってくる。開拓の歩みを感じたら、北方向の「豊頃町役場 十弗ポンプ場」へと歩いて向かおう。',
      hook: '宝町から北方向へ徒歩約24〜28分',
      f7_fragment: '十弗地区の会合や生涯学習の場として親しまれる地域密着の拠点施設。',
      f7_full: '「十弗農業センター」を訪ね、十勝の農村集落を支える人々のつながりを感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '豊頃町役場 十弗ポンプ場',
      lat: 42.873751,
      lng: 143.499851,
      address: '北海道中川郡豊頃町十弗75',
      description:
        '十勝川水系の低平地が広がる十弗地区の治水・排水を支える地域の重要インフラ施設（外観見学自由・施設内立入不可）。大河とともに生きる北の大地の知恵を伝える。',
      clue:
        '十勝川水系の広大な低平地が広がる十弗地区の排水と治水を静かに支え続けている「豊頃町役場 十弗ポンプ場」の外観をじっくり楽しく笑顔で見学しよう（外観自由・立入不可）。豊かな恵みをもたらす大河と寄り添いながら大切な農地や暮らしを水害から守り抜いてきたこの施設を眺めれば、北の大地で生きる人々の知恵と工夫が実感できる。大地の営みを感じたら、南方向の「十弗西神社」へと向かおう。',
      hook: '南方向の牧草地帯へ徒歩約38〜45分',
      f7_fragment: '十勝川水系の低平地が広がる十弗地区の排水・治水を支えるインフラ施設。',
      f7_full: '「豊頃町役場 十弗ポンプ場」を眺め、大河とともに生きる土地の知恵に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '十弗西神社',
      lat: 42.846866,
      lng: 143.497755,
      address: '北海道中川郡豊頃町北栄1',
      description:
        '十弗地区西側の北栄エリアの牧草地帯に静かに鎮座し、地域の開拓と暮らしを見守り続ける神社（参拝自由・無休）。どこまでも広い十勝の空が美しい。',
      clue:
        '旅の締めくくりは、十弗西部の北栄エリアに広がる牧草地帯の中に静かに鎮座する「十弗西神社」へ丁寧に心を込めてゆっくりと明るく爽やかに参拝しよう（参拝自由）。見渡す限りの緑の牧草地と大きな十勝の青空に抱かれた素朴なお社でそっと深く手を合わせれば、都会の喧騒を離れた穏やかな静寂が心いっぱいに広がっていく。十ドルの看板から始まったのどかな農村の散策を、晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '北栄エリアの広大な牧草地帯の中に鎮座し、地域の暮らしを見守る神社。',
      f7_full: '「十弗西神社」の広大な牧草地と静かな杜に参拝し、十弗の旅を締めくくった。',
    },
  ],
};
