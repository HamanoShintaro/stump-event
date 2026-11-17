export default {
  slug: 'mena',
  station_order: 1008,
  station: '目名',
  line: 'JR函館本線',
  area_name: '目名・相生',
  prefecture: '北海道',
  municipality: '蘭越町',
  category: '自然・歴史',
  budget_tier: 2,
  tags: ['函館本線', '目名', '目名八幡神社', 'らんこし米', 'ふるさとの丘'],
  style_genre: 'ink_and_watercolor',
  title: '目名の杜と実りの丘をめぐるのどかな道',
  description:
    '町民サロン併設のJR目名駅から目名郵便局、原生林に抱かれた目名八幡神社を経て道の駅らんこし・ふるさとの丘とキャンプ場へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Mena Station beside country roads, a forest-wrapped Shinto shrine torii gate, a sunny countryside farmers market with local rice bags and ice cream, and a tranquil woodland campground, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び目名を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅前市街の面影を残す 目名郵便局',
      subtext: 'かつての中目名市街の気配を伝える街角を静かに歩いた',
      badge: {
        code: 'mena_post',
        name_ja: '目名駅前の郵便局',
        subtitle_en: 'Mena Post Corner',
        description:
          '目名郵便局の前を訪れ、昔ながらの目名市街の穏やかな日常に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet rural postbox beside a timber station road in Hokkaido on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '原生林に抱かれた 目名八幡神社',
      subtext: '明治三十九年創立の旧村社で清々しい杜の空気を感じた',
      badge: {
        code: 'mena_hachiman_shrine',
        name_ja: '原生林の目名八幡神社',
        subtitle_en: 'Mena Hachiman Shrine',
        description:
          '目名八幡神社に参拝し、原生林の杜に守られた静謐な境内で旅の無事を祈ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a dignified Shinto shrine torii gate nestled beneath dense primeval Hokkaido forest trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'らんこし米の直売 道の駅「らんこし・ふるさとの丘」',
      subtext: '特産のらんこし米や地元野菜・手作りアイスクリームに出合った',
      badge: {
        code: 'mena_michinoeki',
        name_ja: '実りのふるさとの丘',
        subtitle_en: 'Rankoshi Furusato Market',
        description:
          '道の駅「らんこし・ふるさとの丘」を訪れ、らんこし米と手作りアイスの魅力に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden rice sheaves beside a wooden scoop of creamy homemade Hokkaido ice cream on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '森に囲まれた ふるさとの丘キャンプ場',
      subtext: '道の駅裏手の静かな森で北海道らしい開放的な自然に癒やされた',
      badge: {
        code: 'mena_campground',
        name_ja: 'ふるさとの森の広場',
        subtitle_en: 'Furusato Hill Campground',
        description:
          'ふるさとの丘キャンプ場を訪れ、森に囲まれた開放的な空間と自然の風を感じたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of sunny green meadow grass and birch woodland trails on a quiet Hokkaido hillside on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'mena_complete',
    name_ja: '目名・杜と実りの丘の旅人',
    subtitle_en: 'Explorer of Mena',
    description:
      'JR目名駅から目名郵便局、目名八幡神社、道の駅らんこし・ふるさとの丘、キャンプ場まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a country railway station, a primeval forest shrine torii, and golden Rankoshi rice harvests on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR目名駅',
      lat: 42.761365,
      lng: 140.465352,
      address: '北海道磯谷郡蘭越町目名町1',
      description:
        '明治37年（1904年）「磯谷駅」として開業、翌年に「目名駅」へ改称した無人駅（終日開放・町民サロン併設）。平成12年の有珠山噴火による迂回輸送でも重要な役割を担った。',
      clue:
        '明治三十七年に「磯谷駅」として開業し、翌年に現在の駅名へと改称された歴史ある無人駅「JR目名駅」から、のどかな杜と実りの丘を巡る散歩を始めよう（終日開放）。町民サロンを併設する素朴な駅舎を後に、北西方向へと外へ踏み出したら、まずはすぐ駅前の「目名郵便局」を目指して、昔ながらの目名市街の穏やかな空気を胸いっぱいに感じながら軽やかな足取りで明るく爽やかに元気よく歩き出そう。',
      hook: '駅から北西方向へ徒歩約1分',
      f7_fragment: '明治三十七年開業、町民サロンを併設し目名市街の玄関口となる無人駅。',
      f7_full: '「JR目名駅」を後にし、原生林の杜と実りの丘を巡る穏やかな散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '目名郵便局',
      lat: 42.761668,
      lng: 140.465292,
      address: '北海道磯谷郡蘭越町目名町694',
      description:
        'JR目名駅前に佇む地域の生活拠点（窓口平日9:00〜17:00、土日祝休）。昔ながらの目名市街（旧・中目名）の落ち着いた街並みの面影を今に伝えている。',
      clue:
        '駅前に佇む「目名郵便局」の前をゆっくり歩き、かつての中目名市街の穏やかな面影を感じよう（平日9:00〜17:00）。次は西の「目名八幡神社」へ向かおう。',
      hook: '西方向へ徒歩約10分',
      f7_fragment: 'JR目名駅前に佇み、昔ながらの目名市街の面影を残す生活拠点。',
      f7_full: '「目名郵便局」の前を通り過ぎ、すぐ北西の高台に鎮座する杜の古社へ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '目名八幡神社（八幡神社）',
      lat: 42.762428,
      lng: 140.456914,
      address: '北海道磯谷郡蘭越町目名町527',
      description:
        '明治39年（1906年）創立の旧村社（参拝自由・無休）。駅北西の高台で原生林に囲まれて鎮座し、9月15日の例祭では伝統の神楽も奉納される由緒ある鎮守。',
      clue:
        '明治三十九年創立の旧村社であり、駅北西の高台で豊かな原生林に囲まれて鎮座する「目名八幡神社（八幡神社）」へ丁寧に心を込めて参拝しよう（参拝自由）。九月の例祭では神楽も奉納される地域の誇り高いお社で、木漏れ日差し込む境内の空気は凛として清々しい。穏やかな杜の中で旅の無事を静かに祈願したら、東方向の「道の駅 らんこし・ふるさとの丘」へとゆっくり軽やかに楽しく歩を進めよう。',
      hook: '東方向へ徒歩約24分',
      f7_fragment: '明治三十九年創立の旧村社で、原生林に囲まれた高台に鎮座する鎮守社。',
      f7_full: '「目名八幡神社」の原生林の杜で手を合わせ、実り豊かな道の駅へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '道の駅「らんこし・ふるさとの丘」',
      lat: 42.761977,
      lng: 140.479303,
      address: '北海道磯谷郡蘭越町字相生969',
      description:
        '平成15年開業の直売センター（9:00〜17:00・11〜3月〜16:00、11〜3月火曜休）。名高い特産「らんこし米」や新鮮な地元野菜、隣接工場の手作りアイスクリームが人気。',
      clue:
        '蘭越町の豊かな恵みがぎゅっと詰まった「道の駅 らんこし・ふるさとの丘」へ立ち寄ってみよう（9:00〜17:00・冬期〜16:00・火曜休あり）。全国的にも評価の高い特産「らんこし米」や採れたての地元野菜、さらに隣接工場で作られる濃厚な手作りアイスクリームは散策のご褒美にぴったりだ。大地の恵みを存分に満喫したら、すぐ北西の「ふるさとの丘キャンプ場」へとゆっくり向かおう。',
      hook: '北西方向へ徒歩約6分',
      f7_fragment: '特産「らんこし米」や地元野菜、手作りアイスクリームが人気の道の駅。',
      f7_full: '「道の駅 らんこし・ふるさとの丘」でらんこし米と甘いアイスに笑顔になった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: 'ふるさとの丘キャンプ場',
      lat: 42.764942,
      lng: 140.474768,
      address: '北海道磯谷郡蘭越町字相生969',
      description:
        '道の駅裏手の森に囲まれた静かなキャンプ場（5月上旬〜10月中旬営業・期間中無休、冬期閉鎖、受付は道の駅）。近年ドッグランも整備され、季節の自然拠点として親しまれる。',
      clue:
        '旅の締めくくりは、道の駅の裏手に広がる豊かな森に抱かれた「ふるさとの丘キャンプ場」の爽やかな緑を眺めて締めくくろう（5月上旬〜10月中旬営業）。近年はドッグランも整備され、澄んだ空気と野鳥のさえずりに包まれながら北海道らしい開放的な自然を肌で感じられる心地よい空間だ。目名の杜と実りの風景を胸いっぱいに刻んで、のどかな散歩を晴れやかに明るく楽しく笑顔で元気に締めくくろう。',
      hook: '',
      f7_fragment: '道の駅裏手の森に囲まれ、ドッグランも備えた開放的な自然拠点。',
      f7_full: '「ふるさとの丘キャンプ場」の爽やかな森の風を感じ、目名の散歩を終えた。',
    },
  ],
};
