export default {
  slug: 'goryokaku',
  station_order: 990,
  station: '五稜郭',
  line: 'JR函館本線',
  area_name: '亀田本町・八幡町',
  prefecture: '北海道',
  municipality: '函館市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '五稜郭', '亀田八幡宮', 'キングベーク', '箱館戦争'],
  style_genre: 'ink_and_watercolor',
  title: '亀田本町から亀田八幡宮へ幕末の降伏の地を巡る',
  description:
    '星型意匠のJR五稜郭駅から老舗キングベーク本店、隠れ家洋食ラ・ターチ、大川公園を経て箱館戦争降伏の地・亀田八幡宮へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Goryokaku Station with subtle star motifs, freshly baked golden bread from a historic bakery, green park trees, and the historic Kameda Hachimangu Shrine torii gate, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び五稜郭駅周辺を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '昭和四年創業の老舗 キングベーク 本店',
      subtext: '焼きたてパンとカレーや珈琲を広々としたイートインで味わった',
      badge: {
        code: 'goryokaku_kingbake',
        name_ja: '亀田本町の老舗パン',
        subtitle_en: 'King Bake Heritage',
        description:
          'キングベーク 本店を訪れ、昭和四年創業の伝統ある焼きたてパンと珈琲を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of crusty golden loaves and a steaming coffee cup in a classic Japanese bakery on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '八幡通りの隠れ家 Restaurant La tachi',
      subtext: '道南の豊かな食材を活かした丁寧な洋食・フレンチに舌鼓を打った',
      badge: {
        code: 'goryokaku_latachi',
        name_ja: '八幡通りの洋食',
        subtitle_en: 'Bistro La tachi',
        description:
          'Restaurant La tachiを訪れ、道南食材を使った温かな洋食料理を堪能したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an artisanal ceramic dinner plate with herb-garnished roast and a folded linen napkin on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '亀田川そばの憩い 大川公園',
      subtext: 'タイヤ公園の愛称で親しまれる緑の広場で街歩きの合間に一息ついた',
      badge: {
        code: 'goryokaku_okawa_park',
        name_ja: '大川町の緑陰広場',
        subtitle_en: 'Okawa Park Rest',
        description:
          '大川公園を訪れ、亀田川近くの穏やかな街の風景と木々の緑に癒やされたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of leafy neighborhood park trees beside a gentle stone path and a wooden bench on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '箱館戦争降伏の地 亀田八幡宮',
      subtext: '旧拝殿に残る弾痕を仰ぎ見て幕末最後の歴史に深く思いを馳せた',
      badge: {
        code: 'goryokaku_hachimangu',
        name_ja: '幕末降伏の古社',
        subtitle_en: 'Kameda Hachimangu',
        description:
          '亀田八幡宮に参拝し、箱館戦争降伏式之地としての深い歴史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a dignified timber Shinto shrine hall and stone torii gate framed by ancient pines on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'goryokaku_complete',
    name_ja: '五稜郭・亀田本町と古社の旅人',
    subtitle_en: 'Explorer of Kameda Hachimangu',
    description:
      'JR五稜郭駅からキングベーク本店、ラ・ターチ、大川公園、亀田八幡宮まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a five-pointed star motif, artisan bread, and a historic Shinto shrine torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR五稜郭駅',
      lat: 41.803464,
      lng: 140.733931,
      address: '北海道函館市亀田本町64-16',
      description:
        '明治44年（1911年）開業のJR函館本線の駅（始発〜終電、みどりの窓口あり）。五稜郭を模した星型意匠の駅舎が特徴で、旧亀田市の中心・亀田本町の玄関口となっている。',
      clue:
        '明治四十四年に開業し、五稜郭を模した星型の意匠が駅舎に施された「JR五稜郭駅」から亀田本町の歴史散歩を始めよう（始発〜終電）。実は史跡五稜郭公園からは約三キロ離れており、駅周辺はかつての旧亀田市の中心地として賑わってきた街だ。星型モチーフに見送られて東方向へと外へ踏み出したら、まずは昭和四年創業の老舗「キングベーク 本店」を目指して、港町の潮風を感じながら軽やかに歩き出そう。',
      hook: '駅から東方向へ徒歩約6分',
      f7_fragment: '星型意匠の駅舎を持ち、旧亀田市の中心・亀田本町の玄関口となる駅。',
      f7_full: '「JR五稜郭駅」を後にし、亀田本町の老舗グルメと幕末の古社を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'キングベーク 本店',
      lat: 41.802932,
      lng: 140.739265,
      address: '北海道函館市亀田本町7-8',
      description:
        '昭和4年（1929年）創業の函館を代表する老舗ベーカリー＆カフェ（7:00〜19:00・L.O.18:00、無休）。焼きたてパンや名物ラスク、函館カレーを広いイートインで楽しめる。',
      clue:
        '昭和四年創業の老舗「キングベーク 本店」で焼きたてパンやラスク、香り高い珈琲を楽しもう（7:00〜19:00）。準備ができたら南の「Restaurant La tachi」へ向かおう。',
      hook: '南方向へ徒歩約3分',
      f7_fragment: '昭和四年創業で、焼きたてパンや名物ラスク・カレーが人気の老舗ベーカリー。',
      f7_full: '「キングベーク 本店」の香ばしいパンの香りに包まれ、街歩きの活力を得た。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'Restaurant La tachi（ラ・ターチ）',
      lat: 41.800823,
      lng: 140.739024,
      address: '北海道函館市亀田本町3-24',
      description:
        '八幡通り沿いに佇む隠れ家フレンチ・洋食店（11:30〜14:30・18:00〜21:00、火曜夜・日曜昼・第1・第3水曜休）。道南の豊かな旬の食材を活かした丁寧で温かみのある料理が地元の人々にも評判。',
      clue:
        '亀田本町の八幡通り沿いに佇む隠れ家フレンチ・洋食の名店「Restaurant La tachi（ラ・ターチ）」へ立ち寄ってみよう（第1・第3水曜休）。道南の豊かな海と大地の恵みを活かして一皿ずつ丁寧に仕上げられる料理は、街歩きの記憶をいっそう豊かに彩ってくれる。落ち着いた店の空気と美味しい洋食の魅力を心に留めたら、南東方向に広がる緑の広場「大川公園」へとゆっくり歩いて向かおう。',
      hook: '南東方向へ徒歩約4分',
      f7_fragment: '八幡通り沿いにあり、道南食材を活かした丁寧な料理が評判の隠れ家洋食店。',
      f7_full: '「Restaurant La tachi」の前で道南の食文化の奥深さに触れ、散策を続けた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '大川公園',
      lat: 41.798456,
      lng: 140.7411,
      address: '北海道函館市大川町11',
      description:
        '亀田川のほど近くにあり、タイヤ遊具から地元で「タイヤ公園」の愛称で親しまれる街区公園（常時開放・無休）。住宅街の穏やかな暮らしと緑を感じられる散策の中継地点。',
      clue:
        '亀田川のすぐそばに位置し、昔からタイヤ遊具が並ぶ風景から地元の人々に「タイヤ公園」の愛称で親しまれてきた「大川公園」をゆっくり歩いてみよう（常時開放）。歴史ある亀田エリアの住宅街に溶け込む緑の木々と穏やかな空気に触れていると、観光地とは一味違う函館の日常の温もりが伝わってくる。清々しい緑の風を胸いっぱいに吸い込んだら、南南西に鎮座する古社「亀田八幡宮」へと歩を進めよう。',
      hook: '南南西方向へ徒歩約11分',
      f7_fragment: '亀田川近くにあり、「タイヤ公園」の愛称で地域に親しまれる緑の街区公園。',
      f7_full: '「大川公園」の穏やかな緑の中を抜け、いよいよ幕末ゆかりの古社へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '亀田八幡宮',
      lat: 41.791556,
      lng: 140.736556,
      address: '北海道函館市八幡町3-2',
      description:
        '明徳元年（1390年）勧請と伝わる古社（参拝自由・社務所8:30〜17:00、無休）。明治2年（1869年）5月に榎本武揚ら旧幕府軍が降伏を誓約した「箱館戦争降伏式之地」として知られる。',
      clue:
        '旅の締めくくりは、明徳元年の勧請と伝わる道南屈指の古社「亀田八幡宮」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由、社務所8:30〜17:00）。ここは明治二年五月に榎本武揚ら旧幕府軍が新政府軍への降伏を誓約した「箱館戦争降伏式之地」であり、旧拝殿には今も当時の激しい弾痕が生々しく残されている。幕末最後の歴史を静かに胸に刻んで、五稜郭駅からの散歩を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: '1390年勧請の古社で、箱館戦争降伏誓約の場となり弾痕も残る史跡。',
      f7_full: '「亀田八幡宮」の境内に立ち、箱館戦争終結の歴史を偲んで旅を締めくくった。',
    },
  ],
};
