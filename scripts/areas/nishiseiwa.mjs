export default {
  slug: 'nishiseiwa',
  station_order: 980,
  station: '西聖和',
  line: 'JR富良野線',
  area_name: '西神楽・聖和',
  prefecture: '北海道',
  municipality: '旭川市',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['富良野線', '大雪山連峰', '西神楽公園', '神楽神社', '直売所'],
  style_genre: 'ink_and_watercolor',
  title: '西聖和の田園風景と神楽の社を巡る',
  description:
    '大雪山系を望む無人駅・JR西聖和駅から聖和会館、緑豊かな西神楽公園、西本農場直売所、神楽神社へ北上するルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nishi-Seiwa Station amid emerald Hokkaido rice paddies overlooking snow-dusted Daisetsuzan peaks, a quiet riverside green park with tall trees, fresh farm vegetables, and a cedar-lined Shinto shrine path, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び西聖和を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '御料地開拓から続く聖和会館',
      subtext: '田園集落の中心で地域のつながりと開拓の記憶を感じた',
      badge: {
        code: 'nishiseiwa_kaikan',
        name_ja: '聖和の集い処',
        subtitle_en: 'Seiwa Village Hall',
        description:
          '聖和会館の前を訪れ、明治の御料地開拓から続く聖和集落の暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tidy rural community hall set against distant Daisetsuzan mountain peaks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '木立と川のせせらぎが心地よい西神楽公園',
      subtext: '緑豊かな園内を歩きながら西神楽の穏やかな自然に触れた',
      badge: {
        code: 'nishiseiwa_park',
        name_ja: '緑陰の西神楽公園',
        subtitle_en: 'Nishi-Kagura Park',
        description:
          '西神楽公園を訪れ、豊かな木立と爽やかな北国の風を感じたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of tall birch and maple trees beside a gentle clear stream in a peaceful park on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '朝採り野菜が並ぶ西本農場 直売所',
      subtext: 'アスパラやミニトマトなど西神楽の旬の恵みに出会った',
      badge: {
        code: 'nishiseiwa_nishimoto',
        name_ja: '朝採り農家の恵み',
        subtitle_en: 'Nishimoto Farm Stand',
        description:
          '西本農場 直売所で朝採りの新鮮な野菜や西神楽の旬の恵みに出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of fresh green asparagus stalks, bright red strawberries, and cherry tomatoes in a wooden crate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '長い緑の参道が続く神楽神社',
      subtext: '明治三十年創祀の西神楽の氏神で穏やかに手を合わせた',
      badge: {
        code: 'nishiseiwa_kagura_shrine',
        name_ja: '聖和と神楽の社',
        subtitle_en: 'Kagura Shrine Sanctuary',
        description:
          '神楽神社に参拝し、約260mの緑豊かな参道を歩いて西聖和の旅を結んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tall wooden Shinto torii gate along a long straight tree-lined path on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishiseiwa_complete',
    name_ja: '西聖和・田園と山並みの旅人',
    subtitle_en: 'Explorer of Nishi-Seiwa',
    description:
      'JR西聖和駅から聖和会館、西神楽公園、西本農場直売所、神楽神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting Daisetsuzan peaks over rice fields, green park trees, and a Shinto torii gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西聖和駅',
      lat: 43.669162,
      lng: 142.414559,
      address: '北海道旭川市西神楽2線17',
      description:
        '周囲を水田や畑に囲まれたJR富良野線の小さな無人駅（終日開放）。ホームからは十勝岳連峰や大雪山系の雄大な山並みを望むことができる。',
      clue:
        '周囲を広大な水田や畑に囲まれたJR富良野線の小さな無人駅「JR西聖和駅」から爽やかな田園散策を始めよう（終日開放）。ホームから望む十勝岳連峰や大雪山系の雄大な山並みを目に焼き付けて西南西方向へと外へ踏み出したら、まずは明治期の御料地開拓から続く聖和集落の中心地に位置する「聖和会館」を目指して、澄み切った北国の空気と田園の爽やかな風を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から西南西方向へ徒歩約19分',
      f7_fragment: '田園に囲まれ、ホームから大雪山系と十勝岳連峰を望める富良野線の無人駅。',
      f7_full: '「JR西聖和駅」のホームから山並みを仰ぎ見つつ、田園と社の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '聖和会館',
      lat: 43.664845,
      lng: 142.397349,
      address: '北海道旭川市西神楽1線17',
      description:
        '聖和地区の地域活動や福祉拠点として親しまれる地域会館（外観見学常時可）。明治期の御料地開拓から続く聖和集落の中心地に位置している。',
      clue:
        '聖和集落の中心地に立つ「聖和会館」の前を静かに歩き、明治の御料地開拓から続く地域の歩みを感じよう（外観見学可）。次は北に広がる「西神楽公園」へ向かおう。',
      hook: '北方向へ徒歩約25分',
      f7_fragment: '明治の御料地開拓から続く聖和集落の中心に位置する地域活動の拠点。',
      f7_full: '「聖和会館」の前を通り過ぎ、広々とした田園集落の温かい絆を感じた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '西神楽公園',
      lat: 43.684156,
      lng: 142.39499,
      address: '北海道旭川市西神楽南1条1-1',
      description:
        '辺別川沿いの豊かな木立と芝生が広がる自然豊かな公園（終日開放、キャンプ場は夏季営業）。涼やかな木陰と鳥のさえずりが、西神楽の散策に心地よい潤いを与えてくれる。',
      clue:
        '辺別川沿いの豊かな木立と広々とした芝生が心地よい「西神楽公園」へ立ち寄ってみよう（公園散策自由）。背の高い木々が作る涼やかな木陰や野鳥のさえずりに耳を傾けながらゆっくりと歩けば、北海道の豊かな自然が体いっぱいに染み渡っていく。四季折々の彩りを見せる公園の緑と清々しい空気をたっぷりと味わったら、南東方向の国道沿いに佇む農家直営の「西本農場 直売所」へと軽やかに歩みを進めよう。',
      hook: '南東方向へ徒歩約7分',
      f7_fragment: '辺別川沿いに豊かな木立と芝生が広がり、四季の自然に親しめる公園。',
      f7_full: '「西神楽公園」の豊かな木立の中を歩き、西神楽の爽やかな自然を満喫した。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '西本農場 直売所',
      lat: 43.67852,
      lng: 142.398039,
      address: '北海道旭川市西神楽2線15-264-19',
      description:
        '国道237号・神楽神社近くにある農家の直売所（8:30〜12:00・売切次第終了、農産物シーズン不定休）。朝採りのレタスやアスパラ、ミニトマト、お米やイチゴが並ぶ。',
      clue:
        '国道237号線のすぐそば、神楽神社の近くに佇む農家直営の「西本農場 直売所」へ立ち寄ってみよう（8:30〜12:00、シーズン営業・不定休）。朝採りの瑞々しいレタスやアスパラ、甘いミニトマトにイチゴ、お米まで、西神楽の大地が育んだ旬の恵みがずらりと並び思わず目移りしてしまう。北国の豊かな実りをたっぷり感じたら、すぐ北東に鎮座する歴史ある「神楽神社」へと歩いて向かおう。',
      hook: '北東方向へ徒歩約3分',
      f7_fragment: '朝採りのレタスやアスパラ、ミニトマトやイチゴなど旬の恵みが並ぶ直売所。',
      f7_full: '「西本農場 直売所」で北の大地が育てた新鮮な野菜の恵みに笑顔になった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '神楽神社',
      lat: 43.679848,
      lng: 142.399357,
      address: '北海道旭川市西神楽2線15-273-1',
      description:
        '明治30年（1897年）創祀の西神楽一帯の氏神（参拝自由・年中無休）。天照皇大神・八幡大神・春日大神を祀り、約260mの緑豊かな長い参道が静謐な雰囲気を醸す。',
      clue:
        '旅の締めくくりは、明治三十年に創祀され西神楽一帯を守り続けてきた氏神「神楽神社」へ丁寧に心を込めてゆっくりと参拝しよう（参拝自由）。鳥居の先へと続く約二百六十メートルの緑豊かな長い参道は凛とした静謐さに包まれており、一歩ずつ歩くごとに爽やかな達成感が胸いっぱいに満ちていく。大雪山の麓に広がる田園風景と先人の祈りを胸に刻んで、西聖和の充実した旅を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: '明治三十年創祀、約260mの緑豊かな長い参道が静謐な西神楽の氏神。',
      f7_full: '「神楽神社」の長い参道を歩いて参拝し、西聖和の豊かな田園散策を終えた。',
    },
  ],
};
