export default {
  slug: 'shinsapporo',
  station_order: 927,
  station: '新札幌',
  line: 'JR千歳線',
  area_name: '新札幌・厚別中央',
  prefecture: '北海道',
  municipality: '札幌市厚別区',
  category: '文化・グルメ',
  budget_tier: 2,
  tags: ['千歳線', '水族館', '科学館', 'チキンペッカー', '副都心'],
  style_genre: 'ink_and_watercolor',
  title: '科学と海の知に出会う新札幌のまち歩き',
  description:
    'JR新札幌駅から老舗のサンピアザ水族館、刷新された札幌市青少年科学館、名物チキンペッカー、厚別中央公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Shin-Sapporo in Atsubetsu, Sapporo, featuring an urban planetarium dome, swimming penguins in a gentle blue tint, warm charcoal-grilled chicken shop facade, and a leafy green city park, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '知的好奇心と街の味が詰まった新札幌で、どの体験に惹かれましたか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '街ナカの水槽で出会った海の生きものたち',
      subtext: '1981年から愛されるサンピアザ水族館で、水中の世界に癒やされた',
      badge: {
        code: 'shinsapporo_aquarium',
        name_ja: '副都心の海の案内人',
        subtitle_en: 'Urban Aquarium Explorer',
        description:
          '1981年開館の新さっぽろサンピアザ水族館を訪れ、ゴマフアザラシやペンギンに出会ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a playful penguin and rippled turquoise water bubbles on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '生まれ変わった展示室と星空のプラネタリウム',
      subtext: '2024年刷新の青少年科学館で、科学の驚きと星空に触れた',
      badge: {
        code: 'shinsapporo_science',
        name_ja: '星と科学の探求者',
        subtitle_en: 'Science & Cosmos Seeker',
        description:
          '2024年に展示室がリニューアルされた札幌市青少年科学館で、宇宙と科学の魅力に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a starry planetarium dome and brass astrolabe on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '中札内産若鶏の炭火焼きが香る地元グルメ',
      subtext: '1991年創業のチキンペッカーで、新札幌の定番の味を堪能した',
      badge: {
        code: 'shinsapporo_pecker',
        name_ja: '炭火香る名店の通',
        subtitle_en: 'Charcoal Chicken Lover',
        description:
          'チキンペッカー（本店）で中札内産若鶏を使った名物炭火焼きや唐揚げを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of savory charcoal-grilled chicken and glowing embers on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '副都心のすぐそばに広がる穏やかな芝生広場',
      subtext: '厚別中央公園の開放的な緑の中で、穏やかに歩みを終えた',
      badge: {
        code: 'shinsapporo_park',
        name_ja: '緑陰の散策者',
        subtitle_en: 'Lawn Park Walker',
        description:
          '厚別中央公園の広々とした芝生広場で深呼吸し、副都心の緑を満喫したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wide green park lawn bordered by summer elm leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shinsapporo_complete',
    name_ja: '新札幌・海と星の探究者',
    subtitle_en: 'Explorer of Shin-Sapporo Ocean and Stars',
    description:
      'JR新札幌駅からサンピアザ水族館、青少年科学館、チキンペッカー本店、厚別中央公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a planetarium dome, swimming fish, and green park leaves on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新札幌駅',
      lat: 43.038224,
      lng: 141.473006,
      address: '北海道札幌市厚別区厚別中央2条5-6-1',
      description:
        '昭和48年（1973年）9月9日に千歳線新線切替とともに開業した駅（終日利用可・無料）。地下鉄東西線と結節する札幌東部副都心の中心拠点。',
      clue:
        '昭和四十八年九月に千歳線の新線切替に合わせて開業し、地下鉄と結節する札幌東部副都心の中心として賑わう「JR新札幌駅」から楽しい街歩きと散策を始めよう（終日利用可）。活気あふれるコンコースをゆっくり西方向へ歩いて改札を外に出たら、まずは昭和五十六年開館の老舗都市型水族館「新さっぽろサンピアザ水族館」を目指してのんびり楽しく元気に笑顔で外へと爽やかに力強く歩みを踏み出そう。',
      hook: '西方向へ徒歩約3分',
      f7_fragment: '昭和四十八年開業、地下鉄とも直結する札幌東部副都心の玄関口。',
      f7_full: '「JR新札幌駅」の賑わいを抜け、知とグルメが詰まった副都心の散策へ踏み出した。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '新さっぽろサンピアザ水族館',
      lat: 43.03684,
      lng: 141.471711,
      address: '北海道札幌市厚別区厚別中央2条5-7-5',
      description:
        '昭和56年（1981年）開館の都市型水族館（10:00〜17:00、年中無休）。珍しい淡水魚や海水魚、ゴマフアザラシやペンギンたちの愛らしい姿を間近に観察できる。',
      clue:
        '昭和五十六年から愛される「新さっぽろサンピアザ水族館」でペンギンやアザラシに出会い癒やされよう（10:00〜17:00、年中無休）。鑑賞後は南の「札幌市青少年科学館」へ向かおう。',
      hook: '南方向へ徒歩約3分',
      f7_fragment: '昭和五十六年開館、ペンギンやアザラシに間近で会える老舗の都市型水族館。',
      f7_full: '「新さっぽろサンピアザ水族館」で海の生きものたちの愛らしい姿に心が和んだ。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '札幌市青少年科学館',
      lat: 43.036111,
      lng: 141.472222,
      address: '北海道札幌市厚別区厚別中央1条5-2-20',
      description:
        '昭和56年（1981年）開館、令和6年（2024年）4月に展示室全体が大規模リニューアルされた体験型科学館（5〜9月9:00〜17:00・10〜4月9:30〜16:30、月曜等休）。プラネタリウムも併設。',
      clue:
        '令和六年四月に展示室全体が大規模リニューアルされ、魅力がさらに高まった「札幌市青少年科学館」をじっくり楽しく元気に訪ねよう（月曜等休）。科学の不思議に楽しく触れられる多彩な体験展示や美しいプラネタリウムの満天の星空は、大人も子どもも思わず夢中になって時間を忘れる面白さだ。知的好奇心をしっかり満たしたら、すぐ西へ歩いて地元名店の「チキンペッカー（本店）」でお腹を満たそう。',
      hook: '西方向へ徒歩約4分',
      f7_fragment: '令和六年に展示室が全面刷新されプラネタリウムも楽しめる体験型科学館。',
      f7_full: '「札幌市青少年科学館」の新しい体験展示と星空に魅了され、科学の楽しさを味わった。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'チキンペッカー（本店）',
      lat: 43.036085,
      lng: 141.469867,
      address: '北海道札幌市厚別区厚別中央2条4-11-39',
      description:
        '平成3年（1991年）創業の鶏料理専門店（10:00〜19:30、元日のみ休）。十勝・中札内村の契約農場から仕入れる新鮮な若鶏の炭火焼きや唐揚げが名物。「鳥せい」の姉妹店。',
      clue:
        '平成三年創業の地元で愛される鶏料理の名店「チキンペッカー（本店）」で自慢の美味しい食事をゆっくり楽しく味わおう（10:00〜19:30、元日のみ休）。十勝・中札内村の契約農場から届く新鮮な若鶏を香ばしく焼き上げた炭火焼きやジューシーで柔らかな唐揚げは、一度食べたら忘れられない格別の美味しさだ。大満足でお腹をしっかり満たしたら、北西の「厚別中央公園」へと歩いて向かおう。',
      hook: '住宅街を北西方向へ徒歩約8分',
      f7_fragment: '平成三年創業、十勝・中札内産若鶏の炭火焼きや唐揚げが名物の専門店。',
      f7_full: '「チキンペッカー（本店）」で炭火香る名物チキンを味わい、新札幌の味を満喫した。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '厚別中央公園',
      lat: 43.039039,
      lng: 141.463877,
      address: '北海道札幌市厚別区厚別中央3条3-13',
      description:
        '副都心の商業エリアから少し離れた住宅地に広がる公園（終日開放・無料）。広々とした芝生広場と緑の木陰があり、散策の最後に心地よく深呼吸できる。',
      clue:
        '旅の締めくくりは、新札幌の商業エリアから少し離れた落ち着いた住宅地に広がる「厚別中央公園」で穏やかな時間をゆったりと楽しく明るく心地よく過ごそう（終日開放・無料）。広々とした芝生広場と爽やかな木立の緑に包まれながら大きく深呼吸すれば、今日巡った海と星と美味しい鶏料理の余韻が心地よく胸に沁みていく。副都心の知と癒やしを存分に満喫して、充実した新札幌の街歩きを晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '副都心のそばに広々とした芝生広場を備える緑豊かな住宅地の公園。',
      f7_full: '「厚別中央公園」の爽やかな緑の中で深呼吸し、新札幌のまち歩きを終えた。',
    },
  ],
};
