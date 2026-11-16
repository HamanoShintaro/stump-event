export default {
  slug: 'oboro',
  station_order: 963,
  station: '尾幌',
  line: 'JR根室本線',
  area_name: '尾幌',
  prefecture: '北海道',
  municipality: '厚岸町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '花咲線', '貨車駅', '尾幌酪農', '太厚食堂'],
  style_genre: 'ink_and_watercolor',
  title: '貨車駅と牧草地の風をめぐる尾幌道',
  description:
    '牛のイラストが描かれた車掌車改造駅・JR尾幌駅から国道沿いの商店、尾幌酪農ふれあい館、郵便局、老舗の太厚食堂へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Oboro Station in Akkeshi featuring its charming converted railway caboose station building painted with dairy cow murals, wide green pastures, and a cozy country diner along Route 44, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び尾幌を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '国道44号沿いのセブン-イレブン 厚岸尾幌店',
      subtext: '広大な酪農地帯の旅の途中で温かい飲み物や軽食を調達した',
      badge: {
        code: 'oboro_seven',
        name_ja: '国道44号の拠点',
        subtitle_en: 'Route 44 Provision',
        description:
          'セブン-イレブン 厚岸尾幌店で旅のお供を調達し、広大な牧草地帯を歩いたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm coffee cup and dairy milk bottle beside a northern highway milestone on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '牧草地に囲まれた尾幌酪農ふれあい館',
      subtext: 'のどかな牧草地の風を感じながら広場とベンチで寛いだ',
      badge: {
        code: 'oboro_rakuno',
        name_ja: '牧草地のふれあい',
        subtitle_en: 'Pasture Breeze',
        description:
          '尾幌酪農ふれあい館を訪れ、厚岸ののどかな酪農風景の中で休憩したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden pasture fence, rolling meadow hills, and a milk can on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '酪農地帯の暮らしを支える尾幌郵便局',
      subtext: '集落中心部に佇む素朴な窓口から地域の営みを感じた',
      badge: {
        code: 'oboro_post',
        name_ja: '牧郷の郵便局',
        subtitle_en: 'Oboro Post Office',
        description:
          '尾幌郵便局の前を歩き、酪農地帯の中心集落の穏やかな暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a rural post office letterbox and clover leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '国道44号沿いの老舗・太厚食堂の温かい一杯',
      subtext: '味噌ラーメンや牡蠣丼など地元に愛される食堂の味に触れた',
      badge: {
        code: 'oboro_taiko',
        name_ja: '老舗食堂の温もり',
        subtitle_en: 'Taiko Country Diner',
        description:
          '太厚食堂で地元住民やドライバーに愛される温かい料理に出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming miso ramen bowl beside plump Akkeshi oysters on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'oboro_complete',
    name_ja: '尾幌・貨車駅と牧草地の旅人',
    subtitle_en: 'Walker of Oboro Caboose Station',
    description:
      'JR尾幌駅から尾幌酪農ふれあい館、尾幌郵便局、太厚食堂まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a converted caboose train station, rolling green dairy pastures, and a steaming ramen bowl on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR尾幌駅',
      lat: 43.018478,
      lng: 144.703862,
      address: '北海道厚岸郡厚岸町尾幌1',
      description:
        '大正6年（1917年）12月1日開業の無人駅（終日利用可）。昭和61年に車掌車を改造した貨車駅（ダルマ駅）へ改築され、外壁の牛などの手描きイラストが名物となっている。',
      clue:
        '大正六年十二月に開業し、昭和六十一年には車掌車を改造した可愛らしい貨車駅（ダルマ駅）へと姿を変えた「JR尾幌駅」から楽しい町歩きを始めよう（終日利用可）。外壁に描かれた牛などの微笑ましい手描きイラストに心和んだら、南東の国道44号線沿いにある「セブン-イレブン 厚岸尾幌店」を目指して、牧草地の澄み切った爽やかな風を感じながらのんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から南東（国道44号沿い）へ徒歩約3分',
      f7_fragment: '車掌車を改造した外壁の牛イラストが親しまれる、花咲線名物の貨車駅。',
      f7_full: '「JR尾幌駅」の愛らしい貨車駅舎を後にし、牧草地と老舗食堂を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'セブン-イレブン 厚岸尾幌店',
      lat: 43.016971,
      lng: 144.704208,
      address: '北海道厚岸郡厚岸町尾幌77-2',
      description:
        '国道44号線沿いに位置し、尾幌集落の玄関口として住民や旅人の買い物を支える24時間営業の店舗（年中無休）。飲み物や軽食の調達に便利。',
      clue:
        '国道44号沿いの「セブン-イレブン 厚岸尾幌店」で旅のお供の飲み物や軽食を調達しよう（24時間営業）。準備ができたら東の「尾幌酪農ふれあい館」へ向かおう。',
      hook: '東方向へ徒歩約4分',
      f7_fragment: '国道44号沿いで尾幌集落や旅人の買い物を24時間支える便利なコンビニ。',
      f7_full: '「セブン-イレブン 厚岸尾幌店」で飲み物を手に入れ、牧草地へと歩き出した。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: '尾幌酪農ふれあい館',
      lat: 43.016277,
      lng: 144.706627,
      address: '北海道厚岸郡厚岸町尾幌124',
      description:
        '広大な牧草地に囲まれた厚岸町の酪農交流・研修施設（9:00〜22:00、月曜・年末年始休）。広場やベンチから牧歌的な酪農風景を眺めてゆっくり休憩できる。',
      clue:
        '広大な牧草地に優しく囲まれた厚岸町の酪農交流・研修施設「尾幌酪農ふれあい館」の広場やベンチで心地よく休憩しよう（9:00〜22:00、月曜休）。のどかな緑の牧草風景と爽やかな道東の空気を感じながら胸いっぱい深呼吸すれば、日常の忙しさをすっかり忘れて心までおおらかになっていく。牧歌的な空気にたっぷり癒やされたら、南西の集落中心部にある「尾幌郵便局」へとゆっくり楽しく歩いて向かおう。',
      hook: '南西方向へ徒歩約6分',
      f7_fragment: '広大な牧草地に囲まれ、のどかな酪農風景を眺めながら憩える交流施設。',
      f7_full: '「尾幌酪農ふれあい館」の広場で深呼吸し、厚岸の豊かな酪農風景に癒やされた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '尾幌郵便局',
      lat: 43.014845,
      lng: 144.703318,
      address: '北海道厚岸郡厚岸町尾幌253',
      description:
        '尾幌の集落中心部に位置する郵便局（郵便窓口平日9:00〜17:00、日祝休）。郵便・貯金・保険の窓口を備え、酪農地帯の暮らしを長年にわたり支えている。',
      clue:
        '尾幌の集落中心部に静かに佇み、酪農地帯の人々の暮らしを長年にわたって支え続けている「尾幌郵便局」の前をゆっくり歩いてみよう（平日9:00〜17:00、日祝休）。広々とした北海道の大自然の中で営まれる素朴で温かな日常の空気を感じながら一歩ずつ歩みを進めると、旅の心がじんわり優しく和らいでいく。集落の温もりに触れたら、北西の国道44号沿いに立つ老舗食堂「太厚食堂」へと向かおう。',
      hook: '北西方向（国道44号沿い）へ徒歩約3分',
      f7_fragment: '尾幌集落の中心部で、酪農地帯の人々の暮らしを長く支え続ける郵便局。',
      f7_full: '「尾幌郵便局」の周辺を歩き、酪農の里の穏やかな暮らしの気配を感じた。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: '太厚食堂',
      lat: 43.015916,
      lng: 144.700972,
      address: '北海道厚岸郡厚岸町尾幌332',
      description:
        '国道44号沿いでドライバーや地元住民に愛される老舗食堂（不定休・要事前確認）。味噌ラーメンやチャーシューメンに加え、甘口タレの親子丼や牡蠣丼などが人気。',
      clue:
        '旅の締めくくりは、国道44号線沿いで長年にわたりドライバーや地元の方々に愛され続けている老舗「太厚食堂」へ楽しく立ち寄ってみよう（不定休・営業時間要確認）。温かい味噌ラーメンやチャーシューメン、さらに厚岸ならではの牡蠣丼や甘口タレの親子丼など、心まで芯から温まる自慢のメニューが旅のお腹を満たしてくれる。貨車駅と牧草地の風に出会う尾幌の散歩を、晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '国道44号沿いで味噌ラーメンや牡蠣丼などが地元で愛される老舗食堂。',
      f7_full: '「太厚食堂」の温かな佇まいと厚岸の味に触れ、尾幌の旅を締めくくった。',
    },
  ],
};
