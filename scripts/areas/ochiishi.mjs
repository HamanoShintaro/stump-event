export default {
  slug: 'ochiishi',
  station_order: 971,
  station: '落石',
  line: 'JR根室本線',
  area_name: '落石東・落石西',
  prefecture: '北海道',
  municipality: '根室市',
  category: '歴史・海辺',
  budget_tier: 1,
  tags: ['根室本線', '花咲線', '落石漁港', '落石金刀比羅神社', 'おちいし岬パス'],
  style_genre: 'ink_and_watercolor',
  title: '落石の坂を下り神社と漁港を巡る道',
  description:
    '高台の無人駅・JR落石駅から坂を下り、落石ふるさと館、落石郵便局、落石金刀比羅神社を経て第3種漁港の落石漁港へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Ochiishi Station perched on a coastal bluff in Nemuro, a winding road descending past a seaside village shrine to the sheltered Ochiishi fishing harbor, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び落石を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '高台集落の拠点・根室市落石ふるさと館',
      subtext: '落石会館と保育所が一体となった地域の温かな空間で休んだ',
      badge: {
        code: 'ochiishi_furusatokan',
        name_ja: '落石高台の拠点',
        subtitle_en: 'Ochiishi Community Hall',
        description:
          '根室市落石ふるさと館を訪れ、高台の集落の温かな日常に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a welcoming coastal community hall perched on a grassy bluff on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '漁村の中心に佇む落石郵便局',
      subtext: '記念切手やご当地はがきを求めながら港町の通りを歩いた',
      badge: {
        code: 'ochiishi_post',
        name_ja: '港町の便り処',
        subtitle_en: 'Ochiishi Post Office',
        description:
          '落石郵便局を訪れ、漁師町の暮らしを支える中心通りを歩いたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a coastal post office window with sea-themed postage stamps on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '大漁と安全を祈る落石金刀比羅神社',
      subtext: '明治四十四年創立の社で漁師町の深い信仰に触れた',
      badge: {
        code: 'ochiishi_kotohira',
        name_ja: '落石の金刀比羅宮',
        subtitle_en: 'Harbor Guardian Shrine',
        description:
          '明治四十四年創立の落石金刀比羅神社に参拝し、海の安全を祈ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden Shinto torii gate framing a distant fishing boat on Pacific waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '北洋漁業の碑が残る落石漁港',
      subtext: '自然の湾を活かした活気ある港で海と魚介の恵みを感じた',
      badge: {
        code: 'ochiishi_port',
        name_ja: '落石漁港の潮風',
        subtitle_en: 'Ochiishi Fishing Port',
        description:
          '落石漁港を訪れ、北洋漁業の歴史を伝える石碑と港の活気に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sheltered Pacific harbor pier with fishing boats and distant sea cliffs on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'ochiishi_complete',
    name_ja: '落石・岬と漁港の旅人',
    subtitle_en: 'Walker of Ochiishi Harbor',
    description:
      'JR落石駅から落石ふるさと館、落石郵便局、落石金刀比羅神社、落石漁港まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a blufftop railway station, harbor Shinto torii gate, and fishing port boats on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR落石駅',
      lat: 43.198609,
      lng: 145.51969,
      address: '北海道根室市落石東296',
      description:
        '大正9年（1920年）11月10日開業の花咲線の無人駅（終日開放・無休）。落石の街並みを見下ろす高台に位置し、おちいし岬パスの玄関口にもなっている。',
      clue:
        '大正九年十一月に開業し、落石の街並みを一望する高台に立つ花咲線の無人駅「JR落石駅」から楽しい港町散策を始めよう（終日開放）。おちいし岬パスの玄関口でもある静かな駅舎を出て、北太平洋から届く爽やかな潮風を感じながら南東方向へと歩き出したら、まずは高台の集落エリアにある複合交流施設「根室市落石ふるさと館」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '駅から南東方向へ徒歩約4〜5分',
      f7_fragment: '大正九年開業、落石の街並みを見下ろす高台に位置する花咲線の無人駅。',
      f7_full: '「JR落石駅」の高台を後にし、坂を下って落石の漁港を目指す散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '根室市落石ふるさと館',
      lat: 43.196635,
      lng: 145.521291,
      address: '北海道根室市落石東133-3',
      description:
        '落石会館と保育所を一体化した地域の複合交流施設（9:00〜22:00、利用状況により変動）。高台の集落エリアにあり、散策途中の小休止ができる。',
      clue:
        '高台の集落エリアにある地域の複合交流施設「根室市落石ふるさと館」の館内や周辺で一息つこう（9:00〜22:00）。次は道道沿いを南西の「落石郵便局」へ向かおう。',
      hook: '道道1123号沿いを南西方向へ徒歩約25〜30分',
      f7_fragment: '落石会館と保育所を一体化した、高台の集落にある地域の複合交流施設。',
      f7_full: '「根室市落石ふるさと館」のそばで一息つき、高台の穏やかな空気を味わった。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '落石郵便局',
      lat: 43.185564,
      lng: 145.504761,
      address: '北海道根室市落石東273-1',
      description:
        '落石地区の中心にある郵便局（郵便窓口平日9:00〜17:00、土日祝・年末年始休）。記念切手やご当地はがきの購入ができ、旅の便りを出す拠点にもなる。',
      clue:
        '坂を下った落石地区の中心部に佇み、漁師町の暮らしを長く支え続けている「落石郵便局」の前へゆっくり楽しく足を運んでみよう（平日9:00〜17:00、土日祝休）。平日の窓口が開いている時間帯なら旅の思い出に記念切手やご当地はがきを求めて、大切な人へ道東の温かな便りを出すのも素敵な楽しみだ。港町の日常に優しく触れたら、すぐ北側に鎮座する「落石金刀比羅神社」へと歩いて向かおう。',
      hook: '北方向へ徒歩約3分',
      f7_fragment: '落石地区の中心に位置し、記念切手やご当地はがきも求められる郵便局。',
      f7_full: '「落石郵便局」の前で旅の便りに思いを馳せ、すぐ南の鎮守へと歩みを進めた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '落石金刀比羅神社（落石神社）',
      lat: 43.187472,
      lng: 145.505438,
      address: '北海道根室市落石東287-5',
      description:
        '明治44年（1911年）創立の鎮守（参拝自由・無休）。海上安全と大漁を祈願する、漁師町ならではの深い信仰を集め続けている。',
      clue:
        '明治四十四年創立の歴史を持ち、海の安全と大漁を祈願する漁師町ならではの深い信仰を集め続けている「落石金刀比羅神社（落石神社）」へ丁寧に心を込めて参拝しよう（参拝自由）。潮の香りがほのかに漂う静かな境内でそっと深く手を合わせれば、厳しい北の海へ挑む漁師たちの熱い祈りが胸に深く響いてくる。清々しい気持ちに整ったら、南へ坂を下り「落石漁港」へと爽やかに元気に歩いて向かおう。',
      hook: '坂を下り南方向へ徒歩約12〜14分',
      f7_fragment: '明治四十四年創立、海上安全と大漁を祈願する漁師町・落石の鎮守。',
      f7_full: '「落石金刀比羅神社（落石神社）」で海の安全を祈り、漁師町の魂に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '落石漁港（落石漁業協同組合周辺）',
      lat: 43.179401,
      lng: 145.507832,
      address: '北海道根室市落石西395-2',
      description:
        '自然の湾を活かした第3種漁港（周辺散策自由・業務の妨げにならない範囲で見学）。サケ・タコ・コンブ・ウニなどが水揚げされ、構内には北洋漁業の表功碑も残る。',
      clue:
        '旅の締めくくりは、自然の湾を活かした第3種漁港として栄える「落石漁港（落石漁業協同組合周辺）」の海辺へ楽しく足を運んでみよう（周辺散策自由）。サケやタコ、コンブ、ウニなど豊かな海の幸が水揚げされる港の一角には、北洋漁業の歴史を伝える表功碑などの石碑も静かに残されている。ユルリ・モユルリ島沖を望む爽やかな海風を胸いっぱいに吸い込んで、落石の旅を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '自然の湾を活かした第3種漁港で、北洋漁業の歴史を伝える石碑も残る港。',
      f7_full: '「落石漁港（落石漁業協同組合周辺）」の潮風に吹かれ、落石の散歩を終えた。',
    },
  ],
};
