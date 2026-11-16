export default {
  slug: 'toyokoro',
  station_order: 948,
  station: '豊頃',
  line: 'JR根室本線',
  area_name: '豊頃・茂岩本町',
  prefecture: '北海道',
  municipality: '豊頃町',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['根室本線', '朝日堂', 'アメリカンドーナツ', '豊頃神社', 'ココロコテラス'],
  style_genre: 'ink_and_watercolor',
  title: '豊頃大橋を越え甘味と町の拠点へ続く道',
  description:
    'JR豊頃駅から豊頃神社、国道沿いの赤胴ラーメン、豊頃大橋を渡った先の朝日堂アメリカンドーナツ、ココロコテラスを巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Toyokoro in Tokachi, Hokkaido, featuring a wide bridge arching over the Tokachi River, a charming old town bakery famous for cream-filled donuts, and a warm wooden community terrace under golden afternoon light, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び豊頃を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '佐々田町の杜に鎮座する豊頃神社の祈り',
      subtext: '駅からほど近い地域の氏神で、旅の安全を静かに祈願した',
      badge: {
        code: 'toyokoro_shrine',
        name_ja: '佐々田町の杜の参拝者',
        subtitle_en: 'Visitor of Toyokoro Shrine',
        description:
          '豊頃駅近くの豊頃神社に立ち寄り、穏やかな境内で旅の安全を祈願したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet Shinto shrine gate framed by northern birch trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '国道38号線沿いの昔ながらの一杯',
      subtext: '地元の人々に親しまれる赤胴ラーメンで体の芯から温まった',
      badge: {
        code: 'toyokoro_akado',
        name_ja: '国道沿いの一杯を味わう者',
        subtitle_en: 'Roadside Ramen Traveler',
        description:
          '国道38号線沿いの赤胴ラーメンで、昔ながらの温かい一杯を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic ceramic ramen bowl with rising steam beside a rural highway milestone on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '全国からファンが集う朝日堂のアメリカンドーナツ',
      subtext: '生クリームやあんこが詰まった名物の優しい甘さに笑顔がこぼれた',
      badge: {
        code: 'toyokoro_asahido',
        name_ja: 'アメリカンドーナツの虜',
        subtitle_en: 'Toyokoro Donut Enthusiast',
        description:
          '豊頃大橋を越えた茂岩の老舗・朝日堂で、名物アメリカンドーナツを手に入れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of two plump golden-brown cream-filled donuts dusted with sugar on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '茂岩の中心で寛ぐ拠点・ココロコテラス',
      subtext: '豊頃町の特産品と観光情報が集まる温かい空間で一息ついた',
      badge: {
        code: 'toyokoro_cocoloco',
        name_ja: '茂岩の街の案内人',
        subtitle_en: 'Cocoloco Terrace Explorer',
        description:
          '2018年開業のココロコテラス（まちなか活性化拠点施設）で、町の特産品と休息を楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm modern timber community terrace and local craft shelf on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'toyokoro_complete',
    name_ja: '豊頃・大河とドーナツの旅人',
    subtitle_en: 'Traveler of Toyokoro',
    description:
      'JR豊頃駅から豊頃神社、赤胴ラーメン、朝日堂、ココロコテラスまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting Toyokoro Grand Bridge over the Tokachi River and a golden donut on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR豊頃駅',
      lat: 42.817404,
      lng: 143.538571,
      address: '北海道中川郡豊頃町豊頃旭町1',
      description:
        '明治37年（1904年）8月12日に開業したJR根室本線の無人駅（終日利用可）。豊頃町の北側玄関口として旅人を迎えている。',
      clue:
        '明治三十七年八月に開業し、豊頃町の北側の玄関口として長い歴史を刻んできた「JR豊頃駅」から楽しい街歩きと散策を始めよう（終日利用可）。十勝川の豊かな恵みを抱くおおらかな空気に包まれながら静かな無人駅を外へ出たら、まずは北西の佐々田町に鎮座する「豊頃神社」を目指して、道東の澄み切った爽やかな春の風を感じながらのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に歩き出そう。',
      hook: '駅から北西方向へ徒歩約4〜8分',
      f7_fragment: '明治三十七年開業、十勝川北岸に佇む豊頃町の北側玄関口。',
      f7_full: '「JR豊頃駅」を後にし、大河を渡って名物ドーナツを目指す豊頃の旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '豊頃神社',
      lat: 42.820692,
      lng: 143.536512,
      address: '北海道中川郡豊頃町豊頃佐々田町105',
      description:
        '駅近くの佐々田町に鎮座する地域の氏神（参拝自由・無休）。落ち着いた木立の境内で、これからの旅の安全を静かに祈願できる。',
      clue:
        '豊頃駅近くの佐々田町に鎮座する地域の氏神「豊頃神社」で旅の安全をゆっくり祈願しよう（参拝自由）。参拝を終えたら南東の国道沿い「赤胴ラーメン」へ向かおう。',
      hook: '南東方向（国道38号沿い）へ徒歩約5分',
      f7_fragment: '豊頃駅近くの佐々田町に鎮座し、旅の始まりを見守る地域の氏神。',
      f7_full: '「豊頃神社」の落ち着いた境内に参拝し、清々しい気持ちで街歩きを続けた。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '赤胴ラーメン',
      lat: 42.81521,
      lng: 143.541093,
      address: '北海道中川郡豊頃町豊頃旭町238',
      description:
        '国道38号線沿いにある地元で長年親しまれる昔ながらのラーメン店（火〜日11:00〜19:30・月11:00〜14:00、不定休）。ほっとする味わいが旅のお腹を満たす。',
      clue:
        '国道38号線沿いで地元の方々に長年親しまれている昔ながらの温かいお店「赤胴ラーメン」で熱々の一杯をゆっくり美味しく楽しく笑顔で味わおう（月11:00〜14:00・火〜日〜19:30）。湯気立つ美味しいラーメンで体の芯からしっかり温まり旅の大切な英気を養ったら、西南西へ進み十勝川に架かる雄大な豊頃大橋を渡って茂岩の名店「朝日堂」へと楽しく元気に明るく元気に笑顔で向かおう。',
      hook: '西南西へ進み豊頃大橋を渡り徒歩約42〜45分（バス等利用可）',
      f7_fragment: '国道38号沿いで地元に親しまれる昔ながらの温かいラーメン店。',
      f7_full: '「赤胴ラーメン」で湯気立つ昔ながらの一杯を味わい、大河越えの活力を得た。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '朝日堂',
      lat: 42.8021,
      lng: 143.506334,
      address: '北海道中川郡豊頃町茂岩本町30',
      description:
        '豊頃町を代表する老舗菓子店（9:00〜20:00、月・火曜休・祝日の場合営業）。ふんわり生地に生クリームやあんこをたっぷり詰めた名物「アメリカンドーナツ」が全国的人気。',
      clue:
        '豊頃大橋を渡った茂岩の街で全国から多くのファンが足を運ぶ老舗菓子店「朝日堂」へ楽しく元気に笑顔で爽やかに立ち寄ろう（9:00〜20:00、月火休）。看板名物の「アメリカンドーナツ」は、ふんわり柔らかな生地の中に特製生クリームやあんこ、カスタードがたっぷり詰まった至福の美味しさだ。甘い笑顔とともにお土産を大切に手にしたら、すぐ西〜西北西の「ココロコテラス」へ楽しく歩こう。',
      hook: '茂岩本町を西〜西北西方向へ徒歩約1〜2分',
      f7_fragment: '名物「アメリカンドーナツ」が全国的な人気を誇る豊頃町茂岩の老舗菓子店。',
      f7_full: '「朝日堂」でふわふわの名物アメリカンドーナツを手に入れ、笑顔がほころんだ。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'ココロコテラス（まちなか活性化拠点施設）',
      lat: 42.802424,
      lng: 143.505186,
      address: '北海道中川郡豊頃町茂岩本町110-1',
      description:
        '平成30年（2018年）3月に開業したまちなか活性化拠点施設（5〜10月9:00〜17:00・11〜4月10:00〜18:00、火曜・年末年始休）。特産品の販売や観光案内、休憩スペースを備える。',
      clue:
        '旅の締めくくりは、平成三十年三月に誕生したまちなか活性化拠点施設「ココロコテラス（まちなか活性化拠点施設）」でゆったりと楽しく心地よく笑顔で休憩しよう（火曜・年末年始休）。木の温もりを感じる明るい館内では豊頃町の豊かな特産品や地域の観光情報をじっくりチェックでき、綺麗な休憩スペースで一息つくこともできる。大河と甘味に満たされた豊頃の楽しい旅を、穏やかな笑顔で晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '平成三十年開業、特産品販売と観光案内・休憩スペースを備えた茂岩の拠点施設。',
      f7_full: '「ココロコテラス（まちなか活性化拠点施設）」で寛ぎ、豊頃の散策を締めくくった。',
    },
  ],
};
