export default {
  slug: 'kaguraoka',
  station_order: 975,
  station: '神楽岡',
  line: 'JR富良野線',
  area_name: '神楽岡',
  prefecture: '北海道',
  municipality: '旭川市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['富良野線', '上川神社', 'TheSun蔵人', 'プラタナス並木', '旭川市'],
  style_genre: 'ink_and_watercolor',
  title: '神楽岡の鎮守と銘菓を巡るプラタナス散歩',
  description:
    'JR神楽岡駅からプラタナス並木沿いのThe Sun蔵人 本店、旭川総鎮守の上川神社、老舗Cafe Sebastian、米粉パンのsora no kujiraへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Kaguraoka Station in Asahikawa, the stone warehouse sweet shop along the plane-tree avenue, Kamikawa Shrine nestled in forested hills, and warm baked goods at a sunlit cafe, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び神楽岡を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '美瑛軟石造りの名店 The Sun蔵人 本店',
      subtext: 'プラタナス並木沿いで旭川銘菓「蔵生」や焼き菓子を選んだ',
      badge: {
        code: 'kaguraoka_sun_kurodo',
        name_ja: '軟石蔵の銘菓',
        subtitle_en: 'Stone Granary Sweets',
        description:
          'The Sun蔵人 本店を訪れ、旭川ロマンチック街道で名菓「蔵生」を手にしたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a soft-baked sable cookie beside a Biei stone warehouse facade on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '上川開拓の総鎮守・上川神社の森',
      subtext: '明治二十六年創祀の厳かな境内で旅の安全を祈願した',
      badge: {
        code: 'kaguraoka_kamikawa_shrine',
        name_ja: '上川総鎮守の杜',
        subtitle_en: 'Kamikawa Shrine',
        description:
          '上川神社に参拝し、神楽岡の丘に息づく上川開拓の歴史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a grand wooden Shinto torii gate surrounded by tall northern oak trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '昭和五十七年創業のCafe Sebastian',
      subtext: '自家焙煎珈琲と手作りメニューが人気の老舗喫茶で寛いだ',
      badge: {
        code: 'kaguraoka_sebastian',
        name_ja: '老舗喫茶の珈琲',
        subtitle_en: 'Cafe Sebastian Roast',
        description:
          'Cafe Sebastianで1982年創業以来愛される自家焙煎珈琲と料理を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a golden baked cheesecake slice and steaming pour-over coffee cup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '米粉パンが並ぶ sora no kujira',
      subtext: '北海道産米粉を使った優しいパンやマフィンを手に取った',
      badge: {
        code: 'kaguraoka_soranokujira',
        name_ja: '米粉パンの優しい香',
        subtitle_en: 'Rice Flour Bakery',
        description:
          'sora no kujiraで北海道産米粉にこだわったグルテンフリーのパンを選んだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of fluffy rice-flour muffins and a smiling whale motif on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kaguraoka_complete',
    name_ja: '神楽岡・鎮守と銘菓の旅人',
    subtitle_en: 'Walker of Kaguraoka Boulevard',
    description:
      'JR神楽岡駅からThe Sun蔵人、上川神社、Cafe Sebastian、sora no kujiraまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a stone sweet granary, Shinto torii gate, and golden autumn plane-tree leaves on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR神楽岡駅',
      lat: 43.745886,
      lng: 142.358378,
      address: '北海道旭川市神楽4条14',
      description:
        'JR富良野線の無人駅（終日利用可）。駅名は近隣の神楽岡公園・上川神社に由来し、美瑛川を渡れば神楽岡の文教・住宅エリアとプラタナス並木へと続く。',
      clue:
        '近隣の神楽岡公園や上川神社に駅名を由来し、美瑛川を越えて文教・住宅エリアへと続く「JR神楽岡駅」から楽しい町歩きと散策を始めよう（終日利用可）。清々しい北国の空気を胸いっぱいに吸い込んで北東方向へと外へ踏み出したら、まずはプラタナス並木の「旭川ロマンチック街道」沿いに建つ美瑛軟石造りの人気菓子工房「The Sun蔵人 本店」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から北東方向へ徒歩約6〜7分',
      f7_fragment: '神楽岡公園や上川神社に由来し、プラタナス並木の街区へと続く無人駅。',
      f7_full: '「JR神楽岡駅」を後にし、上川総鎮守と旭川銘菓を巡るプラタナス散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'The Sun蔵人 本店',
      lat: 43.748914,
      lng: 142.361383,
      address: '北海道旭川市神楽岡8条1-1-9',
      description:
        'プラタナス並木「旭川ロマンチック街道」沿いに建つ美瑛軟石造りの蔵風菓子工房（9:00〜18:00、無休）。しっとりとした食感の旭川銘菓「蔵生」が全国的に人気。',
      clue:
        '美瑛軟石造りの「The Sun蔵人 本店」で旭川銘菓・蔵生や焼き菓子を選ぼう（9:00〜18:00）。お土産を手にしたら北東の「上川神社」へ向かおう。',
      hook: '北東方向へ徒歩約5分',
      f7_fragment: '旭川ロマンチック街道沿いに建つ、銘菓「蔵生」が人気の軟石造りの菓子工房。',
      f7_full: '「The Sun蔵人 本店」で名物の蔵生を選び、プラタナス並木の優雅さを味わった。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '上川神社',
      lat: 43.752788,
      lng: 142.364829,
      address: '北海道旭川市神楽岡公園2-1',
      description:
        '明治26年（1893年）創祀、大正13年に現在地へ遷座した上川地方開拓の守護神・旭川総鎮守（参拝終日可、社務所3〜10月9:00〜17:00・11〜2月〜16:30）。',
      clue:
        '明治二十六年創祀、大正十三年に現在地へ遷座した上川地方開拓の守護神・旭川総鎮守「上川神社」へ丁寧に心を込めて参拝しよう（境内終日可）。かつて明治期に上川離宮や北海道首都計画が立てられた由緒ある丘の森に抱かれた境内で静かに手を合わせれば、厳かな歴史の空気が胸に沁みていく。清々しい気持ちに整えたら、南東の住宅街にある老舗「Cafe Sebastian」へと歩いて向かおう。',
      hook: '南東方向へ徒歩約18分',
      f7_fragment: '明治二十六年創祀、歴史ある神楽岡の丘に鎮座する旭川総鎮守の神社。',
      f7_full: '「上川神社」の厳かな森で手を合わせ、上川開拓の深い歴史に思いを馳せた。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'Cafe Sebastian（カフェ セバスチャン）',
      lat: 43.739848,
      lng: 142.37037,
      address: '北海道旭川市神楽岡8条6-1-2',
      description:
        '昭和57年（1982年）創業の老舗自家焙煎カフェ（11:00〜18:00・木曜〜15:00、年末年始休）。オムライスやパスタ、濃厚なベイクドチーズケーキなど手作りメニューが人気。',
      clue:
        '昭和五十七年創業、地元旭川の人々に長く愛され続けている老舗自家焙煎カフェ「Cafe Sebastian（カフェ セバスチャン）」で美味しい食事や珈琲を味わおう（木曜〜15:00、年末年始休）。丁寧に作られるオムライスやパスタ、濃厚なベイクドチーズケーキをいただけば、歩き疲れた体も心もじんわり癒やされていく。お腹が幸せに満たされたら、西の米粉パン店「sora no kujira」へ向かおう。',
      hook: '西方向へ徒歩約10分',
      f7_fragment: '昭和五十七年創業、オムライスやチーズケーキが人気の老舗自家焙煎カフェ。',
      f7_full: '「Cafe Sebastian」で老舗の自家焙煎珈琲と手作りメニューを味わい、心が和んだ。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'sora no kujira（そらのくじら）',
      lat: 43.740171,
      lng: 142.362454,
      address: '北海道旭川市神楽岡12条5-4-21',
      description:
        '富良野から神楽岡へ移転オープンしたグルテンフリーの米粉パン・焼き菓子専門店（11:00〜18:00・売切次第終了、不定休）。北海道産米粉の食パンやマフィンが人気。',
      clue:
        '旅の締めくくりは、富良野から神楽岡の閑静な街角へ移転オープンしたグルテンフリーの米粉パン・焼き菓子専門店「sora no kujira（そらのくじら）」でほっと一息つこう（11:00〜18:00、不定休）。北海道産米粉を贅沢に使ったもちもちの食パンや優しい甘さのマフィンは、見ているだけでも笑顔になる美味しさだ。神楽岡の素敵なグルメと森の香りを胸に抱いて、散歩を晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '北海道産米粉を使ったグルテンフリーの食パンやマフィンが人気の専門店。',
      f7_full: '「sora no kujira」で優しい米粉の焼き菓子に出会い、神楽岡の旅を締めくくった。',
    },
  ],
};
