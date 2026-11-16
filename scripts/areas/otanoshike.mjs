export default {
  slug: 'otanoshike',
  station_order: 956,
  station: '大楽毛',
  line: 'JR根室本線',
  area_name: '大楽毛',
  prefecture: '北海道',
  municipality: '釧路市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '大楽毛馬市', '神馬事記念館', '大楽毛神社', 'ぶた福'],
  style_genre: 'ink_and_watercolor',
  title: '日本一の馬産地の記憶を巡る大楽毛散歩',
  description:
    '日本釧路種の馬像が立つJR大楽毛駅から大楽毛馬市場跡の神馬事記念館、大楽毛神社、炭火豚丼のぶた福を巡るルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Otanoshike Station in Kushiro with a bronze statue of a sturdy Hokkaido Kushiro horse in the station square, a quiet Shinto shrine, and a charcoal-grilled pork rice bowl, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び大楽毛を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '大楽毛馬市跡に建つ神馬事記念館',
      subtext: '日本一の馬産地として栄えた歴史の記念碑と銅像に見入った',
      badge: {
        code: 'otanoshike_jin_baji',
        name_ja: '馬市の記憶',
        subtitle_en: 'Horse Fair Heritage',
        description:
          '神馬事記念館（大楽毛馬市場跡）を訪れ、釧路馬産の偉大な歴史に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a commemorative stone stele and a silhouette of a sturdy horse on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '馬にゆかりの深い大楽毛神社',
      subtext: '相馬妙見大神を祀る由緒ある境内で静かに手を合わせた',
      badge: {
        code: 'otanoshike_shrine',
        name_ja: '妙見と駿馬の社',
        subtitle_en: 'Sanctuary of Steeds',
        description:
          '明治三十一年創祀の大楽毛神社に参拝し、馬産地の信仰を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a Shinto shrine ema votive plaque painted with a horse silhouette on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '炭火香る豚丼の人気店・ぶた福',
      subtext: '香ばしく焼き上げた自慢の豚丼で旅のお腹が満たされた',
      badge: {
        code: 'otanoshike_butafuku',
        name_ja: '炭火豚丼の味わい',
        subtitle_en: 'Charcoal Pork Bowl',
        description:
          'ぶた福で炭火で香ばしく焼き上げた名物の豚丼を堪能したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a lacquered donburi bowl topped with glossy charcoal-grilled pork slices and rising steam on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '西エリアの拠点・セブン-イレブン',
      subtext: '大楽毛西の国道沿いで飲み物や旅のお供を気軽に調達した',
      badge: {
        code: 'otanoshike_seven',
        name_ja: '国道沿いの休息',
        subtitle_en: 'Roadside Stop',
        description:
          'セブン-イレブン 釧路大楽毛店で散策のお供を調達して歩き終えたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm coffee cup and wrapped rice ball beside a roadside signpost on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'otanoshike_complete',
    name_ja: '大楽毛・駿馬の歴史を辿る者',
    subtitle_en: 'Explorer of Otanoshike Horse Heritage',
    description:
      'JR大楽毛駅から神馬事記念館、大楽毛神社、ぶた福まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a bronze horse statue, Shinto torii gate, and Hokkaido landscape on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR大楽毛駅',
      lat: 43.00932,
      lng: 144.272657,
      address: '北海道釧路市大楽毛5-1',
      description:
        '明治34年（1901年）7月20日に開業したJR根室本線の駅（終日利用可）。駅前ロータリーにはかつての名馬産地を象徴する「日本釧路種」の馬の銅像が立つ。',
      clue:
        '明治三十四年七月に開業し、かつて日本一の馬産地として全国に名を馳せた歴史を伝える「JR大楽毛駅」から楽しい町歩きと散策を始めよう（終日利用可）。駅前ロータリーに堂々と立つ「日本釧路種」の立派な馬の銅像を見上げて往時の繁栄に思いを馳せたら、まずは駅のすぐ北側に位置するかつての大楽毛馬市場跡「神馬事記念館」を目指して、爽やかな風の中をのんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅前から北方向へ徒歩約3分',
      f7_fragment: '明治三十四年開業、駅前に「日本釧路種」の馬像が立つ大楽毛の玄関口。',
      f7_full: '「JR大楽毛駅」の馬像に歴史を感じつつ、馬産地の記憶を巡る大楽毛の旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '神馬事記念館（大楽毛馬市場跡）',
      lat: 43.0112,
      lng: 144.272587,
      address: '北海道釧路市大楽毛5-9',
      description:
        '明治44年（1911年）開設の「大楽毛馬市」跡地に建つ記念館（屋外碑終日可、館内は平日10:00〜15:00要予約）。大楽毛家畜市場沿革碑や神八三郎翁の銅像が立つ。',
      clue:
        '「大楽毛馬市」跡地に建つ「神馬事記念館（大楽毛馬市場跡）」で屋外の沿革碑や銅像をじっくり見学しよう（屋外終日可）。次は北東の「大楽毛神社」へ向かおう。',
      hook: '北東方向へ徒歩約4分',
      f7_fragment: '明治四十四年開設の「大楽毛馬市」跡地に建ち、馬産の歴史を伝える記念館。',
      f7_full: '「神馬事記念館（大楽毛馬市場跡）」の沿革碑を眺め、日本一の馬市に思いを馳せた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '大楽毛神社',
      lat: 43.012273,
      lng: 144.275465,
      address: '北海道釧路市大楽毛4-11-10',
      description:
        '明治31年（1898年）に福島県の相馬妙見大神を勧請したのが始まりと伝えられる神社（終日参拝可・無休）。馬産地として栄えた土地柄から馬にゆかりの深い社として親しまれる。',
      clue:
        '明治三十一年に福島県の相馬妙見大神を勧請したことに始まると伝えられ、馬産地として栄えた土地柄から馬にゆかりの深いお社として地域に親しまれている「大楽毛神社」へ丁寧に参拝しよう（終日可）。静かな木立に守られた境内でそっと深く手を合わせれば、馬とともに大地を開拓してきた先人たちの熱い思いと祈りが胸に伝わってくる。清らかな心を整えたら、西の美味しい人気店「ぶた福」へ向かおう。',
      hook: '大楽毛4丁目から西方向へ徒歩約12〜14分',
      f7_fragment: '明治三十一年創祀、相馬妙見大神を祀る馬産地・大楽毛ゆかりの神社。',
      f7_full: '「大楽毛神社」の清らかな杜に参拝し、馬と歩んだ開拓の歴史に手を合わせた。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'ぶた福',
      lat: 43.013261,
      lng: 144.265096,
      address: '北海道釧路市大楽毛西1-15-8',
      description:
        '炭火で香ばしく焼き上げる豚丼や豚料理が評判の地元人気店（11:00〜14:30・17:00〜20:00、火曜休）。道東散策の途中にしっかりとした旨味を味わえる。',
      clue:
        '炭火で香ばしく焼き上げる絶品の豚丼や丁寧な豚料理が地元で高い評判を呼んでいる人気店「ぶた福」で至福のランチやディナーを楽しもう（11:00〜14:30等、火曜休）。立ち上る炭火の香ばしい風味と甘辛い秘伝のタレが絡んだ柔らかな豚肉は、思わず笑顔がこぼれるほど箸が進む絶品の美味しさだ。お腹も心も大満足に満たされたら、すぐ南側の「セブン-イレブン 釧路大楽毛店」へ向かおう。',
      hook: '大楽毛西1丁目から南方向へ徒歩約2分',
      f7_fragment: '炭火で香ばしく焼き上げる絶品の豚丼や豚料理が評判の地元人気店。',
      f7_full: '「ぶた福」で炭火の香り豊かな絶品豚丼を堪能し、お腹も心も満たされた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'セブン-イレブン 釧路大楽毛店',
      lat: 43.012216,
      lng: 144.264984,
      address: '北海道釧路市大楽毛西2-1-33',
      description:
        '大楽毛西エリアの国道沿いに位置する便利なコンビニ（4:00〜24:00、無休）。散策途中の温かい飲み物や軽食、おやつなどの調達に最適。',
      clue:
        '旅の締めくくりは、大楽毛西エリアの国道沿いにあり地域の暮らしやドライバーを支え続けている「セブン-イレブン 釧路大楽毛店」へ気軽に立ち寄ろう（4:00〜24:00）。食後の温かいコーヒーや冷たいお茶、ちょっとしたスイーツや軽食を手に入れて一息つけば、道東ならではの爽やかな散策の余韻が心地よく広がっていく。馬産地の歴史と美食に出会う大楽毛の旅を、晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '大楽毛西エリアの国道沿いで飲み物や軽食の調達に便利な買い物拠点。',
      f7_full: '「セブン-イレブン 釧路大楽毛店」で旅のお供を手に入れ、大楽毛の散歩を終えた。',
    },
  ],
};
