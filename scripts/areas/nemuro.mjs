export default {
  slug: 'nemuro',
  station_order: 974,
  station: '根室',
  line: 'JR根室本線',
  area_name: '光和町・松本町・琴平町',
  prefecture: '北海道',
  municipality: '根室市',
  category: 'グルメ・歴史',
  budget_tier: 2,
  tags: ['根室本線', '花咲線', 'エスカロップ', 'チシマザクラ', '金刀比羅神社'],
  style_genre: 'ink_and_watercolor',
  title: '最東端の街で名物と高台の神社を巡る',
  description:
    '日本最東端の有人駅・JR根室駅から元祖エスカロップのニューモンブラン、チシマザクラの清隆寺、端谷菓子店、高台の金刀比羅神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nemuro Station as Japan’s easternmost staffed railway station, a steaming plate of local pork cutlet Escalope over butter rice, blooming pale pink Chishima cherry trees at Seiryuji Temple, and Kotohira Shrine overlooking Nemuro Port, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び根室を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '元祖エスカロップの老舗 ニューモンブラン',
      subtext: 'タケノコ入りバターライスとポークカツの根室名物を味わった',
      badge: {
        code: 'nemuro_escalope',
        name_ja: '元祖エスカロップ',
        subtitle_en: 'Original Nemuro Escalope',
        description:
          'ニューモンブランで根室のご当地グルメ「エスカロップ」の伝統の味を堪能したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a golden crispy pork cutlet resting atop bamboo-shoot butter rice with rich demi-glace sauce on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'チシマザクラが咲く名刹 清隆寺',
      subtext: '国後島から移植された日本一遅咲きの桜の名所で手を合わせた',
      badge: {
        code: 'nemuro_seiryuji',
        name_ja: '千島桜の名刹',
        subtitle_en: 'Chishima Sakura Temple',
        description:
          '清隆寺を訪れ、北海道百年記念銘木に指定されたチシマザクラの古木に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of windswept pale pink Chishima cherry blossoms beside a wooden temple eaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '手焼きオランダせんべいの端谷菓子店',
      subtext: '昭和二十五年創業の老舗でしっとり柔らかな銘菓を手に入れた',
      badge: {
        code: 'nemuro_hashiya',
        name_ja: '元祖オランダせんべい',
        subtitle_en: 'Nemuro Holland Senbei',
        description:
          '端谷菓子店で昭和二十五年創業以来の手焼き銘菓「オランダせんべい」を手にしたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of embossed golden-brown round wafer senbei biscuits tied with twine on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '根室港を一望する高台の金刀比羅神社',
      subtext: '道東屈指の古社からオホーツクの海と港の眺めを満喫した',
      badge: {
        code: 'nemuro_kotohira',
        name_ja: '最東端の金刀比羅宮',
        subtitle_en: 'Kotohira Overlook',
        description:
          '金刀比羅神社に参拝し、根室港とオホーツク海を一望する高台で旅を結んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a Shinto torii gate on a coastal bluff overlooking fishing boats and a lucky saury fish charm on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nemuro_complete',
    name_ja: '根室・最東端の旅人',
    subtitle_en: 'Explorer of Easternmost Nemuro',
    description:
      '日本最東端の有人駅JR根室駅からニューモンブラン、清隆寺、端谷菓子店、金刀比羅神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an easternmost railway signpost, a plate of Escalope, and a hilltop Shinto torii overlooking Nemuro Port on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR根室駅',
      lat: 43.326918,
      lng: 145.582663,
      address: '北海道根室市光和町2-1',
      description:
        '大正10年（1921年）8月5日開業、JR根室本線（花咲線）の終着駅にして日本最東端の有人駅（駅舎開放・みどりの窓口8:10〜16:10・無休）。駅舎前に最東端の駅を示す看板が立つ。',
      clue:
        '大正十年八月に開業し、JR根室本線（花咲線）の終着駅にして日本最東端の有人駅である「JR根室駅」から最果ての町歩きを始めよう（窓口8:10〜16:10）。駅舎前に立つ日本最東端の駅の看板を写真に収めて北方向へと歩き出したら、まずは根室のご当地グルメ・エスカロップの元祖を受け継ぐ老舗洋食店「ニューモンブラン」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から北方向へ徒歩約2分',
      f7_fragment: 'JR花咲線の終着駅にして、駅前に看板も立つ日本最東端の有人駅。',
      f7_full: '「JR根室駅」の最東端の看板を後にし、名物エスカロップと古社を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'ニューモンブラン',
      lat: 43.327844,
      lng: 145.581591,
      address: '北海道根室市光和町1-1',
      description:
        '根室のご当地グルメ「エスカロップ」（タケノコ入りバターライス＋ポークカツ＋デミグラスソース）の元祖の味を受け継ぐ老舗洋食店（10:00〜15:00・17:00〜19:00、不定休）。',
      clue:
        '老舗洋食店「ニューモンブラン」で根室名物・元祖エスカロップを堪能しよう（10:00〜15:00等、不定休）。お腹を満たしたら西方向の「清隆寺」へ向かおう。',
      hook: '西方向へ徒歩約7〜8分',
      f7_fragment: 'タケノコ入りバターライスとポークカツの元祖「エスカロップ」を継ぐ老舗洋食店。',
      f7_full: '「ニューモンブラン」で根室名物エスカロップを味わい、旅のエネルギーを満たした。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '清隆寺',
      lat: 43.328574,
      lng: 145.575681,
      address: '北海道根室市松本町2-2',
      description:
        '国後島から移植された北海道百年記念銘木「チシマザクラ」がある名刹（境内参拝自由・無休）。日本でも最も遅咲きの桜の名所として全国から旅人が訪れる。',
      clue:
        '国後島から移植された北海道百年記念銘木「チシマザクラ」を境内に守る名刹「清隆寺」へ静かに優しく足を運んでみよう（境内参拝自由）。日本でも最も遅咲きの桜の名所として全国から愛されており、五月中旬頃に白や淡いピンクの花を咲かせる古木の姿は深い感動を呼ぶ。静かな境内で心を落ち着けて丁寧に深く手を合わせたら、北東方向の老舗和菓子店「端谷菓子店」へと楽しく元気に歩いて向かおう。',
      hook: '北東方向へ徒歩約22〜25分',
      f7_fragment: '国後島ゆかりの天然記念物「チシマザクラ」が咲く、日本一遅咲きの桜の名刹。',
      f7_full: '「清隆寺」のチシマザクラの古木に手を合わせ、根室に訪れる遅い春に思いを馳せた。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '端谷菓子店',
      lat: 43.338887,
      lng: 145.589128,
      address: '北海道根室市千島町2-11',
      description:
        '昭和25年（1950年）創業の老舗和菓子店（8:00〜17:00、日曜休）。しっとり柔らかな独特の食感が魅力の根室名物・元祖「オランダせんべい」を手焼きで販売している。',
      clue:
        '昭和二十五年創業の老舗和菓子店「端谷菓子店」へ楽しく立ち寄り、根室ならではの甘いお土産を選んでみよう（8:00〜17:00、日曜休）。店内で一枚ずつ丁寧に手焼きされている元祖「オランダせんべい」は、一般的なお煎餅とは一味違うしっとり柔らかな食感とほのかな黒糖の風味が魅力の絶品銘菓だ。素敵な根室の土産を手に入れたら、いよいよ北の高台に鎮座する「金刀比羅神社」へと向かおう。',
      hook: '北方向へ徒歩約8〜10分',
      f7_fragment: '昭和二十五年創業、しっとり柔らかな元祖「オランダせんべい」を手焼きする老舗。',
      f7_full: '「端谷菓子店」で手焼きの元祖オランダせんべいを求め、老舗の技に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '金刀比羅神社',
      lat: 43.343174,
      lng: 145.587967,
      address: '北海道根室市琴平町1-4',
      description:
        '根室港とオホーツク海を一望する高台に鎮座する道東屈指の古社（参拝24時間、社務所9:00〜17:00）。サンマを模した「福ざんまいみくじ（えぞみくじ）」も人気。',
      clue:
        '旅の締めくくりは、根室港とオホーツク海を一望する高台に鎮座する道東屈指の古社「金刀比羅神社」へ丁寧に参拝しよう（社務所9:00〜17:00）。海を見守る清らかな境内で手を合わせた後は、根室名物のサンマを模した可愛らしい「福ざんまいみくじ（えぞみくじ）」を引いてみるのも楽しい思い出になる。最東端の港町の風と絶景を胸いっぱいに焼き付けて、根室の旅を晴れやかに明るく結ぼう。',
      hook: '',
      f7_fragment: '根室港とオホーツク海を一望する高台に鎮座し、福ざんまいみくじも人気の古社。',
      f7_full: '「金刀比羅神社」の高台から根室港と海を望み、日本最東端の町の旅を締めくくった。',
    },
  ],
};
