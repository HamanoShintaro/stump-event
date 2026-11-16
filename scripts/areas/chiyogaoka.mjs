export default {
  slug: 'chiyogaoka',
  station_order: 981,
  station: '千代ヶ岡',
  line: 'JR富良野線',
  area_name: '西神楽・千代ヶ岡',
  prefecture: '北海道',
  municipality: '旭川市',
  category: '歴史・街歩き',
  budget_tier: 1,
  tags: ['富良野線', '千代ヶ岡神社', '開基100年', 'セイコーマート', '旭川市'],
  style_genre: 'ink_and_watercolor',
  title: '千代ヶ岡の開拓史と静かな社を巡る',
  description:
    'JR千代ヶ岡駅から国道沿いのセイコーマート、千代ヶ岡郵便局、新旧の狛犬が守る千代ヶ岡神社、旧千代ヶ岡小学校跡へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Chiyogaoka Station in Asahikawa with old shrine grove elm trees behind the platform, a quiet rural post office, two pairs of stone guardian komainu dogs at Chiyogaoka Shrine, and rolling farmland, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び千代ヶ岡を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '国道沿いのセイコーマート 千代ヶ岡店',
      subtext: 'ホットシェフや道産品で田園散策の元気を補給した',
      badge: {
        code: 'chiyogaoka_seicomart',
        name_ja: '富良野国道の拠点',
        subtitle_en: 'Route 237 Provision',
        description:
          'セイコーマート 千代ヶ岡店で温かい飲み物や北海道グルメを調達したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm coffee cup and rice ball beside a northern rural highway on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '田園に溶け込む千代ヶ岡郵便局',
      subtext: '集落の日常を見守り続ける素朴な局舎の前を歩いた',
      badge: {
        code: 'chiyogaoka_post',
        name_ja: '千代ヶ岡の窓口',
        subtitle_en: 'Chiyogaoka Post Office',
        description:
          '千代ヶ岡郵便局の前を歩き、田園集落の穏やかな日常を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic postbox nestled beside golden wheat stalks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '新旧の狛犬が並ぶ千代ヶ岡神社',
      subtext: '開基百年記念事業で遷宮された静かな境内に参拝した',
      badge: {
        code: 'chiyogaoka_shrine',
        name_ja: '開基百年の鎮守',
        subtitle_en: 'Chiyogaoka Shrine',
        description:
          '千代ヶ岡神社に参拝し、明治四十五年創祀から開基百年を継ぐ祈りに触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of two pairs of stone Shinto guardian komainu dogs beside a wooden torii gate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '開拓の記憶を残す旧千代ヶ岡小学校跡',
      subtext: '広大な校地と周辺の畑作地帯から集落の歳月を感じた',
      badge: {
        code: 'chiyogaoka_school',
        name_ja: '学び舎の記憶',
        subtitle_en: 'Old School Grounds',
        description:
          '旧・千代ヶ岡小学校跡を訪れ、畑作地帯に息づく地域の歴史を偲んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a peaceful former schoolyard framed by northern farmland hills on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'chiyogaoka_complete',
    name_ja: '千代ヶ岡・開拓と社の旅人',
    subtitle_en: 'Explorer of Chiyogaoka',
    description:
      'JR千代ヶ岡駅からセイコーマート、郵便局、千代ヶ岡神社、旧小学校跡まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting ancient elm trees, stone komainu guardians, and golden Hokkaido farmland on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR千代ヶ岡駅',
      lat: 43.644258,
      lng: 142.45297,
      address: '北海道旭川市西神楽2線24-464-4',
      description:
        '昭和12年（1937年）開業のJR富良野線の無人駅（終日開放）。駅裏手にはかつてこの地にあった旧千代ヶ岡神社の名残である保存樹木（ヤチダモ・ハルニレ）や碑が残る。',
      clue:
        '昭和十二年に開業し、駅裏手にはかつての旧社地の名残であるヤチダモやハルニレの保存樹木が静かに佇む「JR千代ヶ岡駅」から歴史散歩を始めよう（終日開放）。先人たちの開拓の面影を感じながら国道237号線のある西方向へと外へ踏み出したら、まずは散策の頼もしい味方「セイコーマート 千代ヶ岡店」を目指して、田園地帯を吹き抜ける爽やかな風と空を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から西方向へ徒歩約3分',
      f7_fragment: '昭和十二年開業、駅裏手に旧千代ヶ岡神社の保存樹木が残る無人駅。',
      f7_full: '「JR千代ヶ岡駅」の保存樹木に歴史を感じつつ、千代ヶ岡の開拓史を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'セイコーマート 千代ヶ岡店',
      lat: 43.644086,
      lng: 142.450454,
      address: '北海道旭川市西神楽2線24',
      description:
        '駅を出て国道237号線沿いにすぐの地域密着型コンビニ（6:00〜23:00、無休）。北海道ならではのホットシェフやオリジナル商品で散策前の補給に便利。',
      clue:
        '国道沿いの「セイコーマート 千代ヶ岡店」で温かい飲み物や北海道グルメを補給しよう（6:00〜23:00）。準備ができたら南西の「千代ヶ岡郵便局」へ向かおう。',
      hook: '南西方向へ徒歩約1分',
      f7_fragment: '国道237号沿いに立ち、ホットシェフや道産品で旅人を支えるコンビニ。',
      f7_full: '「セイコーマート 千代ヶ岡店」で旅のお供を調達し、田園集落へと歩き出した。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '千代ヶ岡郵便局',
      lat: 43.643935,
      lng: 142.449996,
      address: '北海道旭川市西神楽1線24-465-24',
      description:
        '千代ヶ岡の集落を見守ってきた地域の郵便局（郵便窓口平日9:00〜17:00、土日祝休）。のどかな田園風景の中に溶け込む素朴な局舎が旅情を誘う。',
      clue:
        '千代ヶ岡の集落を長年にわたって見守り続けてきた「千代ヶ岡郵便局」の前をゆっくりと歩いてみよう（平日9:00〜17:00、土日祝休）。のどかな田園風景と美瑛の丘へと続く大きな広い空の中に溶け込む素朴な局舎を眺めていると、北海道ならではの旅情がじんわりと心に湧いてくる。集落の穏やかで温かな日常の空気を胸に感じたら、東〜東南東方向へ歩いて地域の鎮守「千代ヶ岡神社」へと向かおう。',
      hook: '東〜東南東方向へ徒歩約7分',
      f7_fragment: 'のどかな田園風景の中に溶け込み、千代ヶ岡集落の暮らしを支える郵便局。',
      f7_full: '「千代ヶ岡郵便局」の前を歩き、田園集落に息づく穏やかな日常の空気を感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '千代ヶ岡神社',
      lat: 43.642441,
      lng: 142.45551,
      address: '北海道旭川市西神楽3線25',
      description:
        '明治45年に駅裏で創祀され、平成12年（2000年）の千代ヶ岡開基100年記念事業で現在地へ遷宮・造営された神社（参拝自由・無休）。新旧二対の狛犬が鎮座する。',
      clue:
        '明治四十五年に駅裏で創祀され、平成十二年の開基百年記念事業によって現在地へ遷宮・造営された「千代ヶ岡神社」へ丁寧に心を込めて参拝しよう（参拝自由）。境内には古い時代から社を守ってきた狛犬と新しい狛犬の二対が仲良く並び、地域の人々が百年以上にわたり守り継いできた熱い信仰のバトンが伝わってくる。清らかな気持ちで深く手を合わせたら、西の「旧・千代ヶ岡小学校跡」へと向かおう。',
      hook: '西方向へ徒歩約3分',
      f7_fragment: '明治四十五年創祀、開基百年事業で遷宮され新旧二対の狛犬が守る神社。',
      f7_full: '「千代ヶ岡神社」で新旧二対の狛犬に迎えられ、百年の祈りに手を合わせた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '旧・千代ヶ岡小学校跡',
      lat: 43.642641,
      lng: 142.453295,
      address: '北海道旭川市西神楽3線25-2',
      description:
        '平成31年（2019年）3月末をもって閉校した地域の学び舎跡（敷地外からの外観見学）。広大な校地と周辺の畑作地帯が、かつての開拓集落の営みを今に伝えている。',
      clue:
        '旅の締めくくりは、平成三十一年三月末をもって惜しまれつつ閉校した「旧・千代ヶ岡小学校跡」の前から集落の長い歳月に思いを馳せてみよう（敷地外見学）。広大な校地と、その向こうにどこまでも波打つように広がる美しい畑作地帯の風景を眺めていると、ここで学び巣立っていった人々の温かい記憶が静かに心に蘇る。千代ヶ岡の豊かな開拓史を胸に抱いて、穏やかな散歩を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '平成三十一年閉校、広大な校地と畑作地帯が開拓の営みを伝える学び舎跡。',
      f7_full: '「旧・千代ヶ岡小学校跡」の前で畑作地帯の風景を望み、千代ヶ岡の旅を終えた。',
    },
  ],
};
