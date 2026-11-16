export default {
  slug: 'megumino',
  station_order: 923,
  station: '恵み野',
  line: 'JR千歳線',
  area_name: '恵み野・南島松',
  prefecture: '北海道',
  municipality: '恵庭市',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['千歳線', 'ガーデニング', 'ベーグル', '自家焙煎珈琲', '道の駅'],
  style_genre: 'ink_and_watercolor',
  title: '恵み野・花咲く街並みと焙煎珈琲の散歩道',
  description:
    '美しいまちなみ大賞受賞の恵み野駅から手作りベーグルと自家焙煎珈琲、中央公園、はなふるが彩る道の駅まで巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Megumino in Eniwa, Hokkaido, featuring flower-lined residential garden paths, a cozy bagel bakery, a wooden coffee roastery, and colorful blooming gardens at a roadside station, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '花と香りに包まれた恵み野の道で、どの場面が印象的でしたか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '道産小麦がもちもち香るカラフルな手作りベーグル',
      subtext: '焼きたてのベーグルを手に取り、恵み野散歩の元気をもらった',
      badge: {
        code: 'megumino_tomoe_bagel',
        name_ja: '恵み野ベーグルの旅人',
        subtitle_en: 'Traveler of Megumino Bagels',
        description:
          'トモヱベーグルで北海道産小麦を使ったモチモチ食感の手作りベーグルを味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of two golden-brown artisan bagels tied with twine on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '名店の焙煎珈琲の香りに包まれる癒やしのひととき',
      subtext: '丁寧に煎られた珈琲の一杯が、散歩の時間を豊かに彩った',
      badge: {
        code: 'megumino_carrot_roast',
        name_ja: '自家焙煎珈琲の鑑賞者',
        subtitle_en: 'Admirer of Specialty Roast',
        description:
          '珈琲きゃろっとで香り高いスペシャルティコーヒーと出会い、心地よい余韻を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of freshly roasted coffee beans and a wooden pour-over dripper on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '日本庭園と緑の遊歩道が広がる恵み野中央公園',
      subtext: '花と緑が息づく公園の散歩道で、街の美しさを実感した',
      badge: {
        code: 'megumino_central_park',
        name_ja: '花街緑園の散歩者',
        subtitle_en: 'Walker of Garden Park',
        description:
          '約11ヘクタールの恵み野中央公園を歩き、日本庭園や緑豊かな遊歩道を満喫したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet Japanese garden stone lantern and blooming iris beside a pond on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '色とりどりのテーマガーデンが迎える道の駅とはなふる',
      subtext: '花々に囲まれた道の駅で、恵庭の美味しい恵みに出会った',
      badge: {
        code: 'megumino_hanaful_garden',
        name_ja: '花拠点の巡礼者',
        subtitle_en: 'Visitor of Hanaful Gardens',
        description:
          '道の駅 花ロードえにわ（花の拠点 はなふる）で華やかな花壇と恵庭の味覚を満喫したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of seven vibrant garden blossoms arranged in a crescent wreath on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'megumino_complete',
    name_ja: '恵み野・花街と珈琲の散歩者',
    subtitle_en: 'Stroller of Megumino Gardens and Coffee',
    description:
      'JR恵み野駅から手作りベーグル、自家焙煎珈琲、中央公園、花の拠点はなふるまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting blooming garden flowers, a coffee cup, and a curved tree-lined walkway on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR恵み野駅',
      lat: 42.902437,
      lng: 141.574465,
      address: '北海道恵庭市恵み野西1-1-1',
      description:
        '昭和57年（1982年）3月1日に開業したJR千歳線の駅（終日利用可・無料）。「美しいまちなみ大賞」を受賞したガーデニングの街・恵み野の玄関口。',
      clue:
        '昭和五十七年三月に開業し、「美しいまちなみ大賞」を受賞したガーデニング住宅街の玄関口「JR恵み野駅」から楽しい街歩きと散策を始めよう（終日利用可）。住民の手によって丁寧に手入れされた四季折々の花と緑の気配をたっぷり感じながら東口側へ外に出たら、まずは駅から東へ歩いて約三〜四分の場所にある人気店「トモヱベーグル」を目指してのんびり楽しく元気に笑顔で外へと力強く歩き出そう。',
      hook: '東口側へ出て東方向へ徒歩約3〜4分',
      f7_fragment: '昭和五十七年開業、ガーデニングの街として知られる恵み野の玄関口。',
      f7_full: '「JR恵み野駅」のホームを後にし、花と香りに包まれた恵み野の散歩へ踏み出した。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'トモヱベーグル',
      lat: 42.902437,
      lng: 141.577248,
      address: '北海道恵庭市恵み野西2-2-12',
      description:
        '北海道産小麦を使った色鮮やかでモチモチ食感の手作りベーグル専門店（11:00〜17:00・ランチ11:00〜14:00、年末年始等除き無休）。豊富なフレーバーが揃う。',
      clue:
        '北海道産小麦のもちもち食感が自慢の「トモヱベーグル」で彩り豊かな手作りベーグルを味わおう（11:00〜17:00）。食事や買物を満喫したら、北東の「珈琲きゃろっと」へと向かおう。',
      hook: '北東方向へ徒歩約3分',
      f7_fragment: '北海道産小麦を使った色鮮やかでモチモチ食感の手作りベーグル専門店。',
      f7_full: '「トモヱベーグル」で焼き立てのもちもちベーグルを味わい、笑顔がほころんだ。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '珈琲きゃろっと',
      lat: 42.903928,
      lng: 141.580179,
      address: '北海道恵庭市恵み野西1-25-2',
      description:
        '全国から注文が集まる自家焙煎スペシャルティコーヒー専門店（10:00〜17:00、水曜・日曜休）。豆や焼き菓子の購入のほか、屋外ブレイクステーションでテイクアウト珈琲も楽しめる。',
      clue:
        '全国に多くの熱心なファンを持つ自家焙煎スペシャルティコーヒーの名店「珈琲きゃろっと」へゆっくり立ち寄ろう（10:00〜17:00、水日休）。店内に満ちる芳醇な焙煎の香りに包まれながら選りすぐりの豆や美味しい焼き菓子を手に取ったり、屋外のブレイクステーションで淹れたての温かい一杯を楽しんだりできる。香り高い余韻を胸に、さらに北東方向へ歩いて「恵み野中央公園」へと向かおう。',
      hook: '緑道を北東方向へ徒歩約12分',
      f7_fragment: '全国から注文が集まる自家焙煎スペシャルティコーヒーの名店。',
      f7_full: '「珈琲きゃろっと」で香り豊かなスペシャルティコーヒーと出会い、至福のひとときを過ごした。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '恵み野中央公園',
      lat: 42.905127,
      lng: 141.585471,
      address: '北海道恵庭市恵み野北3-9-2',
      description:
        '約11ヘクタールの広大な敷地に日本庭園・野外音楽堂・冒険広場の3エリアを備えた街のシンボル公園（終日開放・入園無料）。遊歩道トンネルで安全に往来できる設計が特徴。',
      clue:
        '約十一ヘクタールの広大な敷地を誇る恵み野のシンボル「恵み野中央公園」をゆっくり楽しく散策しよう（終日開放・無料）。落ち着いた趣の日本庭園や開放的な野外音楽堂、緑あふれる木立の遊歩道が車道を渡らずに安全に巡れるよう工夫されており、季節の花や木漏れ日を心ゆくまで味わえる。街の豊かな緑をたっぷり満喫したら、南方向の「道の駅 花ロードえにわ（花の拠点 はなふる）」へ向かおう。',
      hook: '南方向へ徒歩約12〜15分',
      f7_fragment: '日本庭園や野外音楽堂などを約11haの敷地に備える恵み野のシンボル公園。',
      f7_full: '「恵み野中央公園」の日本庭園と緑の木立を巡り、街の穏やかな美しさに癒やされた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '道の駅 花ロードえにわ（花の拠点 はなふる）',
      lat: 42.897278,
      lng: 141.584789,
      address: '北海道恵庭市南島松817-18',
      description:
        '焼き立てパン「えにパン」や恵庭産放牧豚カレー、直売所「かのな」、7つのテーマガーデンが広がる複合拠点（4〜10月9:00〜18:00・11〜3月〜17:00、年末年始休）。',
      clue:
        '旅の締めくくりは、色とりどりの美しい花々が彩る「道の駅 花ロードえにわ（花の拠点 はなふる）」へ楽しく訪れよう（4〜10月9:00〜18:00等、年末年始休）。七つのテーマガーデンが連なる鮮やかな庭園の散策はもちろん、焼きたてパンの「えにパン」や新鮮野菜の直売所「かのな」、恵庭産放牧豚グルメなど魅力的なお土産が揃う。花と食の恵みを抱えて、恵み野の街歩きを心地よく結ぼう。',
      hook: '',
      f7_fragment: '七つのテーマガーデンと焼き立てパンや農産物直売所が一体となった花の拠点。',
      f7_full: '「道の駅 花ロードえにわ（花の拠点 はなふる）」で花々と恵庭の美味を満喫し、旅を終えた。',
    },
  ],
};
