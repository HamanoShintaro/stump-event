export default {
  slug: 'nanae',
  station_order: 993,
  station: '七飯',
  line: 'JR函館本線',
  area_name: '七飯本町・赤松街道',
  prefecture: '北海道',
  municipality: '七飯町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '七飯', '赤松街道', '三嶋神社', '七飯町歴史館'],
  style_genre: 'ink_and_watercolor',
  title: '赤松街道と七飯最古の三嶋神社を巡る歴史旅',
  description:
    '西洋農業発祥の地・JR七飯駅からななえ駅前珈琲店、喫茶くつろ木を経て永正元年創建の三嶋神社と七飯町歴史館へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nanae Station, a cozy roasted coffee cup, the historic red pine avenue of Akamatsu Kaido, the ancient Mishima Shrine torii gate, and the Nanae Historical Museum, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び七飯を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '自家焙煎の香りが広がる ななえ駅前珈琲店',
      subtext: '駅前の穏やかな空間で香り高い珈琲とスイーツに癒やされた',
      badge: {
        code: 'nanae_coffee',
        name_ja: '七飯駅前の珈琲香',
        subtitle_en: 'Nanae Station Coffee',
        description:
          'ななえ駅前珈琲店を訪れ、自家焙煎豆の豊かな香りと寛ぎの時間を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hand-drip coffee pot and freshly roasted beans beside a warm cup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '線路沿いの隠れ家 喫茶くつろ木',
      subtext: '自家製パンや手作りランチで温かな休憩時間を過ごした',
      badge: {
        code: 'nanae_kutsurogi',
        name_ja: '線路沿いの喫茶時間',
        subtitle_en: 'Cafe Kutsurogi',
        description:
          '喫茶くつろ木を訪れ、自家製パンと心のこもった手作りランチを楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of warm homemade bread rolls, a wooden lunch plate, and a tea cup beside railway pines on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '永正元年創建の古社 三嶋神社',
      subtext: '赤松街道沿いに鎮座する七飯最古の社で歴史の重みに触れた',
      badge: {
        code: 'nanae_mishima_shrine',
        name_ja: '五百年の三嶋神社',
        subtitle_en: 'Mishima Shrine 1504',
        description:
          '三嶋神社に参拝し、1504年創建と伝わる七飯町最古の社の静謐な空気を感じたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a venerable Shinto shrine torii gate beneath towering Japanese red pines along an old highway on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '西洋農業の歩みを伝える 七飯町歴史館',
      subtext: '赤松街道や開墾の歴史展示を通じて七飯の誇りを知った',
      badge: {
        code: 'nanae_museum',
        name_ja: '赤松と開墾の記憶',
        subtitle_en: 'Nanae History Museum',
        description:
          '七飯町歴史館を訪れ、西洋農業発祥と赤松街道の歩みを深く学んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of antique farming tools, a crisp red apple, and an archival scroll on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nanae_complete',
    name_ja: '七飯・赤松街道と歴史の旅人',
    subtitle_en: 'Explorer of Nanae Heritage',
    description:
      'JR七飯駅からななえ駅前珈琲店、喫茶くつろ木、三嶋神社、七飯町歴史館まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an avenue of red pines, a roasted coffee cup, and a historic shrine torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR七飯駅',
      lat: 41.887716,
      lng: 140.688178,
      address: '北海道亀田郡七飯町本町1-1-1',
      description:
        '明治35年（1902年）開業のJR函館本線の駅（始発〜終電、話せる券売機6:30〜17:00）。西洋りんご栽培など西洋農業発祥の地として知られる七飯町本町の中心駅となっている。',
      clue:
        '明治三十五年に開業し、日本の西洋農業発祥の地として知られる七飯町本町の中心駅「JR七飯駅」から歴史と香り豊かな散歩を始めよう（始発〜終電）。駅前には穏やかな街並みが広がり、少し北へ歩けば日本の道百選に選ばれた歴史ある赤松街道へと続いている。改札を出て北東方向へと外へ踏み出したら、まずは駅そばに佇む自家焙煎の「ななえ駅前珈琲店」を目指して爽やかな風の中を軽やかな足取りで歩き出そう。',
      hook: '駅から北東方向へ徒歩約2分',
      f7_fragment: '明治三十五年開業、西洋農業発祥の地・七飯町本町の中心となる駅。',
      f7_full: '「JR七飯駅」を後にし、駅前の珈琲店から赤松街道と古社を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'ななえ駅前珈琲店',
      lat: 41.888221,
      lng: 140.689223,
      address: '北海道亀田郡七飯町本町3-18-32',
      description:
        'JR七飯駅からすぐの自家焙煎珈琲店（9:30〜16:30・L.O.16:00、月曜休）。店内で焙煎された香り高いコーヒーやカレーパスタ、季節のパフェなどでゆったりと一息つける。',
      clue:
        '駅近くの「ななえ駅前珈琲店」で自家焙煎の香り高い珈琲やパフェをゆっくり味わおう（9:30〜16:30、月曜休）。寛いだら北西の「喫茶くつろ木」へ向かおう。',
      hook: '北西方向へ徒歩約4分',
      f7_fragment: '七飯駅すぐそばで自家焙煎珈琲やパフェを楽しめる温かな珈琲店。',
      f7_full: '「ななえ駅前珈琲店」で香り高い自家焙煎の一杯を味わい、旅の心が弾んだ。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '喫茶くつろ木',
      lat: 41.88978,
      lng: 140.686257,
      address: '北海道亀田郡七飯町本町1-5-15',
      description:
        '線路沿いに佇む隠れ家的な喫茶店（10:30〜17:00、火・水曜休）。丁寧に焼かれた自家製パンやハーブチキンプレートなどの手作りランチが地元でも高い人気を集めている。',
      clue:
        '線路沿いの静かな一角に佇む隠れ家的な喫茶店「喫茶くつろ木」へ立ち寄ってみよう（10:30〜17:00、火・水曜休）。手作りの自家製パンやハーブチキンプレートなど心のこもった美味しいランチは、ほっと心が解きほぐれる優しい味わいだ。お腹と心を温かく満たしたら、北東方向へ続く日本の道百選・赤松街道の美しい並木道をゆっくり歩きながら、七飯最古の古社「三嶋神社」へと歩を進めよう。',
      hook: '北東方向へ徒歩約14分',
      f7_fragment: '線路沿いに佇み、自家製パンや手作りランチが人気の隠れ家喫茶。',
      f7_full: '「喫茶くつろ木」で温かな手作りランチを堪能し、赤松街道へと歩き出した。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '三嶋神社',
      lat: 41.895499,
      lng: 140.693345,
      address: '北海道亀田郡七飯町本町6-2-3',
      description:
        '永正元年（1504年）創建と伝わる七飯町最古の神社（参拝自由・無休）。日本の道100選「赤松街道」沿いに鎮座し、500年を超える悠久の歴史と静謐な気配を湛えている。',
      clue:
        '永正元年の創建と伝わり、七飯町最古の神社として五百年以上にわたりこの地を見守り続けてきた「三嶋神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。明治初期に植樹された赤松並木が美しい「赤松街道」沿いに鎮座する境内は、背筋がすっと伸びるような清々しい空気に満ちている。道南の深い歴史と祈りに静かに手を合わせたら、北東すぐ近くの「七飯町歴史館」へとゆっくり足を延ばそう。',
      hook: '北東方向へ徒歩約4分',
      f7_fragment: '1504年創建と伝わり、赤松街道沿いに鎮座する七飯町最古の神社。',
      f7_full: '「三嶋神社」で五百年を超える歴史に手を合わせ、すぐ隣の歴史館へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '七飯町歴史館',
      lat: 41.8972,
      lng: 140.695218,
      address: '北海道亀田郡七飯町本町6-1-3',
      description:
        '七飯開墾の歴史や西洋農業発祥、赤松街道の歩みを伝える町立資料館（9:00〜17:00、月曜・祝日の場合翌平日・年末年始休）。豊富な資料展示を通じて道南近代化の原点を学べる。',
      clue:
        '旅の締めくくりは、七飯の豊かな開墾史と西洋農業の歩みを伝える「七飯町歴史館」を訪れて知見を深めよう（9:00〜17:00、月曜等休）。明治初期に植えられた赤松街道の物語や、日本で初めて西洋りんごや西洋農法が根付いた開拓のドラマを豊富な展示でたどると、歩いた道の風景がいっそう鮮やかに蘇ってくる。学びと発見に満ちた七飯本町の歴史散歩を、晴れやかな笑顔で明るく締めくくろう。',
      hook: '',
      f7_fragment: '西洋農業発祥や赤松街道の歩みなど七飯開墾の歴史を伝える町立資料館。',
      f7_full: '「七飯町歴史館」で西洋農業と赤松街道の歴史に触れ、七飯の旅を終えた。',
    },
  ],
};
