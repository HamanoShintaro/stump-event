export default {
  slug: 'nakafurano',
  station_order: 987,
  station: '中富良野',
  line: 'JR富良野線',
  area_name: '中富良野本町・宮町',
  prefecture: '北海道',
  municipality: '中富良野町',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['富良野線', '北星山', 'フラワーパーク', '中富良野神社', '駅前BASE33'],
  style_genre: 'ink_and_watercolor',
  title: '中富良野のまちなかから北星山花巡り',
  description:
    'JR中富良野駅からカフェモトマチデリ、なかふらのフラワーパーク、町営の北星山ラベンダー園を経て中腹の中富良野神社へ登るルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nakafurano Station, a cozy highway cafe-deli, colorful floral gardens at the foot of Mount Hokusei, a summer ski-lift rising over purple lavender slopes, and Nakafurano Shrine overlooking the valley, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び中富良野を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '国道沿いのカフェ モトマチデリ',
      subtext: 'セレクト古着併設のお洒落な空間で温かい日替わり定食を味わった',
      badge: {
        code: 'nakafurano_motomachideli',
        name_ja: '本町の美味しい空間',
        subtitle_en: 'Motomachi Deli Lunch',
        description:
          'カフェモトマチデリで国道沿いのお洒落なランチと街歩きを楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm daily deli lunch plate beside folded vintage denim on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '北星山麓のなかふらのフラワーパーク',
      subtext: '色とりどりの花壇を眺めながら芝生とベンチで一息ついた',
      badge: {
        code: 'nakafurano_flowerpark',
        name_ja: '山麓の花公園',
        subtitle_en: 'Flower Park Bench',
        description:
          'なかふらのフラワーパークで季節の花々と芝生広場の開放感に癒やされたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden garden bench surrounded by blooming marigolds, salvia, and green lawn on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '町営の絶景 北星山ラベンダー園',
      subtext: '一人乗りリフトで望む十勝岳連峰と紫の斜面に感動した',
      badge: {
        code: 'nakafurano_hokuseiyama',
        name_ja: '北星山の紫絨毯',
        subtitle_en: 'Hokusei Lavender Lift',
        description:
          '北星山ラベンダー園を訪れ、町のシンボル斜面に広がるラベンダーと眺望を満喫したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a single-seat mountain chairlift gliding above purple lavender slopes toward snow-capped peaks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '北星山中腹に鎮座する中富良野神社',
      subtext: '高台の静かな境内から中富良野の豊かな田園風景を見渡した',
      badge: {
        code: 'nakafurano_shrine',
        name_ja: '北星山の鎮守社',
        subtitle_en: 'Nakafurano Shrine',
        description:
          '中富良野神社に参拝し、高台の杜から富良野盆地の田園風景を望んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hillside Shinto torii gate looking out over patchwork green valley fields on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nakafurano_complete',
    name_ja: '中富良野・北星山花巡りの旅人',
    subtitle_en: 'Explorer of Nakafurano Hokuseiyama',
    description:
      'JR中富良野駅からモトマチデリ、フラワーパーク、北星山ラベンダー園、中富良野神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a mountain chairlift over lavender, a hillside Shinto torii gate, and Tokachidake peaks on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR中富良野駅',
      lat: 43.405804,
      lng: 142.421066,
      address: '北海道空知郡中富良野町南町1-24',
      description:
        '中富良野町の中心駅（終日利用可）。すぐ隣に観光案内・交流拠点「駅前BASE33（なかふらの観光協会、9:00〜18:00等）」があり、町歩きの頼もしい起点となっている。',
      clue:
        '観光案内・交流拠点「駅前BASE33」を隣に備えた中富良野町の玄関口「JR中富良野駅」から町歩きと花巡りの散歩を始めよう（駅終日利用可）。町のシンボル北星山の気配を感じながら北東方向へと外へ踏み出したら、まずは国道沿いに立つカフェとセレクト古着の複合ショップ「カフェモトマチデリ」を目指して、澄んだ富良野の空気と町の息吹を味わいながら軽やかな足取りで爽やかに歩き出そう。',
      hook: '駅から北東方向へ徒歩約5分',
      f7_fragment: '観光拠点「駅前BASE33」が隣接し、中富良野の町歩きの起点となる中心駅。',
      f7_full: '「JR中富良野駅」を後にし、まちなか食堂から北星山の花畑を目指す散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'カフェモトマチデリ',
      lat: 43.407169,
      lng: 142.424319,
      address: '北海道空知郡中富良野町本町7-1',
      description:
        '国道沿いに立つカフェとセレクト古着の複合ショップ（11:00〜18:00、水・木曜定休）。温かい日替わり定食やランチメニューが観光客にも地元の方にも好評。',
      clue:
        '国道沿いの「カフェモトマチデリ」で温かい日替わり定食やランチを味わおう（11:00〜18:00、水・木曜休）。お腹を満たしたら北の「なかふらのフラワーパーク」へ向かおう。',
      hook: '北方向へ徒歩約10分',
      f7_fragment: '国道沿いのセレクト古着併設カフェで、温かい日替わり定食が好評の人気店。',
      f7_full: '「カフェモトマチデリ」で温かな食事を楽しみ、北星山の花畑へと歩き出した。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'なかふらのフラワーパーク',
      lat: 43.412061,
      lng: 142.422592,
      address: '北海道空知郡中富良野町宮町2-1',
      description:
        '北星山の麓に整備された町民・旅人に親しまれる花公園（5月1日〜10月31日開放・散策自由）。ベンチや芝生があり、美しい花壇を眺めながら座って休憩できる。',
      clue:
        '北星山の麓に綺麗に整備された憩いの花公園「なかふらのフラワーパーク」のベンチに座って爽やかに一息つこう（5月〜10月開放）。色とりどりの季節の花壇と広々とした緑の芝生をゆっくり眺めながら深呼吸すれば、これまでの旅の疲れもすっと軽くなっていく。心地よい休息の時間を存分に楽しんだら、すぐ西側の斜面に広がる町のシンボル「北星山ラベンダー園」へと足を踏み入れて絶景を堪能しよう。',
      hook: '西方向へ徒歩約3分',
      f7_fragment: '北星山の麓に整備され、花壇を眺めながら芝生やベンチで憩える花公園。',
      f7_full: '「なかふらのフラワーパーク」の花壇とベンチで一息つき、爽やかな風を感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '北星山ラベンダー園',
      lat: 43.411586,
      lng: 142.42025,
      address: '北海道空知郡中富良野町宮町1-41',
      description:
        '町のシンボル北星山の斜面に広がる町営ラベンダー園（散策自由、観光リフト6月中旬〜8月下旬9:00〜17:00・冬期は北星スキー場）。山頂から十勝岳連峰を一望できる。',
      clue:
        '町のシンボルである北星山の斜面に広がる町営「北星山ラベンダー園」の壮大な風景を心ゆくまでゆったりと満喫しよう（散策自由、夏期リフト営業）。紫のラベンダーや彩り豊かな花々が斜面を染め上げる夏はもちろん、冬にはスキー場として親しまれるこの場所からは雄大な十勝岳連峰を一望できる。絶景に深く感動したら、北東の中腹に続く参道を上って「中富良野神社」へとゆっくり楽しく足を延ばそう。',
      hook: '北東方向へ徒歩約4分',
      f7_fragment: '北星山の斜面に広がり、夏はリフトで山頂から十勝岳連峰を一望できる園。',
      f7_full: '「北星山ラベンダー園」の斜面から望む十勝岳連峰の雄大さに心を奪われた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '中富良野神社',
      lat: 43.413721,
      lng: 142.42235,
      address: '北海道空知郡中富良野町宮町2-13',
      description:
        '北星山の中腹に鎮座する町の鎮守社（参拝自由・無休）。昭和37年に西中神社などを合祀した歴史を持ち、高台の静かな境内から豊かな田園風景を見渡すことができる。',
      clue:
        '旅の締めくくりは、北星山の中腹の静かな森に鎮座する町の鎮守社「中富良野神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。昭和三十七年に西中神社などを合祀した深い歴史を刻む境内で手を合わせた後は、高台から見下ろす中富良野の美しい田園風景と雄大な山並みに思わず見入ってしまう。花と歴史に彩られた中富良野の充実した散歩を、晴れやかな笑顔で明るく楽しく元気に締めくくろう。',
      hook: '',
      f7_fragment: '北星山の中腹に鎮座し、高台の境内から田園風景を見渡せる町の鎮守社。',
      f7_full: '「中富良野神社」の高台の杜に参拝し、中富良野の素晴らしい花巡りを終えた。',
    },
  ],
};
