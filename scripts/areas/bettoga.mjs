export default {
  slug: 'bettoga',
  station_order: 970,
  station: '別当賀',
  line: 'JR根室本線',
  area_name: '別当賀',
  prefecture: '北海道',
  municipality: '根室市',
  category: '自然・歴史',
  budget_tier: 1,
  tags: ['根室本線', '花咲線', 'ダルマ駅', '別当賀フットパス', 'フレシマ湿原'],
  style_genre: 'ink_and_watercolor',
  title: '原野のダルマ駅と酪農の記憶を辿る',
  description:
    '車掌車改造のダルマ駅・JR別当賀駅から廃校活用の別当賀夢原館、別当賀神社、馬頭観音を経て野鳥観察舎・別当賀泉ハイドへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Bettoga Station in Nemuro with its converted caboose waiting room, a white wooden torii gate in windswept northern pastureland, and a birdwatching hide overlooking coastal wetlands and vintage brick silos, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び別当賀を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '旧小学校を活かした別当賀夢原館',
      subtext: '原野の駅そばにある地域交流拠点で温かく一息ついた',
      badge: {
        code: 'bettoga_yumeharakan',
        name_ja: '原野の学び舎',
        subtitle_en: 'Bettoga School Hall',
        description:
          '別当賀夢原館を訪れ、旧別当賀小学校を活かした地域拠点で寛いだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a timber former schoolhouse doorway surrounded by tall autumn meadow grass on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '白い鳥居が立つ無人の別当賀神社',
      subtext: '明治四十年創祀の社で開拓期から続く信仰に触れた',
      badge: {
        code: 'bettoga_shrine',
        name_ja: '原野の白鳥居',
        subtitle_en: 'Bettoga White Torii',
        description:
          '明治四十年創祀の別当賀神社に参拝し、開拓期からの祈りに触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a crisp white Shinto torii gate standing against misty northern pasture hills on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '牧草地沿いの別当賀フットパス・馬頭観音',
      subtext: '馬産と酪農の歴史を伝える石碑を辿って歩いた',
      badge: {
        code: 'bettoga_batokannon',
        name_ja: '牧野の馬頭観音',
        subtitle_en: 'Pastureland Footpath',
        description:
          '別当賀フットパス・馬頭観音を訪れ、馬産と酪農の歴史を刻む石碑に出会ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a weathered stone monument beside a winding grassy footpath on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '湿原とサイロを望む別当賀泉ハイド',
      subtext: '太平洋とフレシマ湿原を見渡す観察舎で野鳥の気配を感じた',
      badge: {
        code: 'bettoga_izumi_hide',
        name_ja: 'フレシマの野鳥',
        subtitle_en: 'Fureshima Bird Hide',
        description:
          '別当賀泉ハイド（野鳥観察舎）を訪れ、フレシマ湿原と旧牧場サイロの風景を望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden birdwatching hide beside twin vintage concrete farm silos and soaring sea eagles on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'bettoga_complete',
    name_ja: '別当賀・原野と湿原の旅人',
    subtitle_en: 'Explorer of Bettoga Footpath',
    description:
      'JR別当賀駅から夢原館、別当賀神社、馬頭観音、別当賀泉ハイドまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a converted railway caboose, white Shinto torii gate, and coastal wetland sea eagle on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR別当賀駅',
      lat: 43.218481,
      lng: 145.423495,
      address: '北海道根室市別当賀230-10',
      description:
        '大正9年（1920年）11月10日開業の無人駅（終日開放・無休）。国鉄の車掌車（ヨ3500形）を再利用した通称「ダルマ駅」の待合室が原野と牧草地の中に佇む。',
      clue:
        '大正九年十一月に開業し、国鉄の車掌車を再利用した通称「ダルマ駅」の待合室が印象的な「JR別当賀駅」から楽しいフットパス散策を始めよう（終日開放）。周囲一面に広がる根室の原野と爽やかな風を胸いっぱいに吸い込んで北東方向へと外へ踏み出したら、まずは廃校を活用して整備された「別当賀夢原館」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく元気に楽しく外へと歩き出そう。',
      hook: '駅から北東方向へ徒歩約3分',
      f7_fragment: '大正九年開業、車掌車再利用の「ダルマ駅」が原野の中に佇む無人駅。',
      f7_full: '「JR別当賀駅」のダルマ駅舎を後にし、原野と湿原を巡るフットパスの旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '別当賀夢原館',
      lat: 43.21989,
      lng: 145.425357,
      address: '北海道根室市別当賀253',
      description:
        '廃校となった旧別当賀小学校を活用して整備された生涯学習・交流施設（9:00〜17:00、火曜・年末年始休・7〜8月無休）。屋内で休憩やトイレ利用ができる。',
      clue:
        '旧別当賀小学校を活かした「別当賀夢原館」でゆっくり一息つき、集落の交流拠点の温かい雰囲気に優しく触れよう（火曜休）。次は北西の「別当賀神社」へと向かおう。',
      hook: '北西方向へ徒歩約2〜3分',
      f7_fragment: '廃校となった旧別当賀小学校を活用し、休憩もできる地域の交流拠点。',
      f7_full: '「別当賀夢原館」で一息つき、かつての学び舎の温かな雰囲気を感じた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '別当賀神社',
      lat: 43.220574,
      lng: 145.423551,
      address: '北海道根室市別当賀255',
      description:
        '明治40年（1907年）創祀の無人の鎮守（参拝自由・無休）。白い鳥居の奥に三吉大神・大山祇大神・金刀比羅大神など五柱を祀り、開拓期からの信仰を伝えている。',
      clue:
        '明治四十年に創祀され、白い鳥居の奥に五柱の神々を祀る無人の鎮守「別当賀神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。原野と牧草地に抱かれた清らかな境内で静かに手を合わせれば、厳しい根室の大地を開拓してきた先人たちの深い祈りが胸いっぱいに静かに伝わってくる。旅の安全を心から深く祈ったら、道道・フットパス沿いを東方向へ進み「別当賀フットパス・馬頭観音」へと向かおう。',
      hook: '道道・フットパス沿いを東方向へ徒歩約3〜4分',
      f7_fragment: '明治四十年創祀、白い鳥居の奥に五柱を祀り開拓の信仰を伝える無人の鎮守。',
      f7_full: '「別当賀神社」の白い鳥居をくぐり、原野の開拓を見守る杜に手を合わせた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '別当賀フットパス・馬頭観音',
      lat: 43.220111,
      lng: 145.426246,
      address: '北海道根室市別当賀387-1',
      description:
        '別当賀パス沿いに残る歴史的石碑（終日開放・積雪期通行注意）。かつてこの地で盛んだった馬産・酪農の歴史と道中の安全を祈願して建てられたと伝えられる。',
      clue:
        'かつてこの地で盛んだった馬産・酪農の歴史と道中の安全を祈願して建てられた石碑が残る「別当賀フットパス・馬頭観音」をゆっくり楽しく訪ねてみよう（終日開放）。どこまでも広がる牧草地の傍らに静かに佇む石碑の前に立てば、馬とともに原野を切り拓いた遠い時代への深い敬意が自然と湧き上がる。大地の歴史に優しく触れたら、南の海岸・湿原方面の「別当賀泉ハイド（野鳥観察舎）」へと向かおう。',
      hook: 'フットパスを南（海岸・湿原方面）へ徒歩約90分（要事前手配）',
      f7_fragment: '牧草地沿いのフットパスに残り、馬産と酪農の歴史を伝える馬頭観音碑。',
      f7_full: '「別当賀フットパス・馬頭観音」に出会い、大地を支えた馬と人の歩みに触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '別当賀泉ハイド（野鳥観察舎）',
      lat: 43.189478,
      lng: 145.430182,
      address: '北海道根室市別当賀380-2',
      description:
        '太平洋とフレシマ湿原を望む野鳥観察舎（日中推奨・伊藤☆牧場等で事前マップ購入/ゲート鍵借受要）。旧馬場牧場のレンガ・コンクリート造サイロ2棟の遺構も残る。',
      clue:
        '旅の締めくくりは、太平洋とフレシマ湿原を一望する「別当賀泉ハイド（野鳥観察舎）」周辺の豊かな大自然を満喫しよう（要事前手続き・日中推奨）。ここには旧馬場牧場のレンガとコンクリート造のサイロ2棟の遺構が残り、運が良ければオオワシやオジロワシなど雄大な野鳥の姿にも出会える。最果てに近い原野と湿原の壮大な息吹を胸いっぱいに焼き付けて、別当賀の旅を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '太平洋とフレシマ湿原を望み、旧牧場のサイロ2棟の遺構も残る野鳥観察舎。',
      f7_full: '「別当賀泉ハイド（野鳥観察舎）」で湿原とサイロ遺構を望み、別当賀の旅を終えた。',
    },
  ],
};
