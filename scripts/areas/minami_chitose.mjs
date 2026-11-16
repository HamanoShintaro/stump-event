export default {
  slug: 'minami_chitose',
  station_order: 918,
  station: '南千歳',
  line: 'JR千歳線',
  area_name: '南千歳・大空の記憶と石臼挽き蕎麦',
  prefecture: '北海道',
  municipality: '千歳市',
  category: '空の玄関と石臼蕎麦',
  budget_tier: 2,
  tags: ['北海道', '千歳市', '南千歳駅', '駒そば亭', 'ドレモルタオ'],
  style_genre: 'ink_and_watercolor',
  title: '南千歳・大空の記憶と石臼挽き蕎麦の丘',
  description:
    '「JR南千歳駅」から、北海1号機のモニュメントが立つ「空港公園」、石臼挽き手打ちの「駒そば亭」、庭園併設スイーツの「ドレモルタオ」、道産豚を炭火で焼く「豚丼 とんすけ」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Minami-Chitose Hokkaido from railway junction station and aviation memorial park beneath ascending jetliner to stone-milled soba noodle house, garden patisserie cafe and charcoal-grilled pork rice bowl diner, full bleed, no text, no letters.',
  question: '北海道の空と鉄路の要衝・南千歳駅から大空の記念公園や石臼挽きの蕎麦、甘い丘のスイーツを巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '複葉機「北海1号機」のモニュメントが立つ「空港公園」',
      subtext: '大正十五年の千歳初飛来を刻む記念碑と、すぐ近くを飛ぶ飛行機の迫力に胸が躍った。',
      badge: {
        code: 'minami_chitose_park',
        name_ja: '南千歳・大空の記憶者',
        subtitle_en: 'Hokkai No.1 Aviation Park Visitor',
        description: '北海1号機モニュメントが立つ空港公園を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a vintage biplane monument beside a runway-patterned green lawn under crisp blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '千歳駒そばを店内の石臼で挽いて打つ「駒そば亭」',
      subtext: '地元・駒里地区産そば粉100%を毎日石臼挽きする手打ち蕎麦の香りに唸った。',
      badge: {
        code: 'minami_chitose_komasoba',
        name_ja: '南千歳・石臼挽き蕎麦の匠',
        subtitle_en: 'Stone-Milled Soba Diner',
        description: '駒そば亭で千歳駒そば100%の手打ち蕎麦を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting handmade buckwheat soba noodles on a bamboo tray beside a granite stone mill, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '小樽ルタオの庭園併設カフェ「ドレモルタオ（Doremo LeTAO）」',
      subtext: '白樺の庭を眺めながら味わうふわふわのリコッタパンケーキと限定スイーツが絶品だった。',
      badge: {
        code: 'minami_chitose_doremo',
        name_ja: '南千歳・甘い丘のパンケーキ',
        subtitle_en: 'Doremo LeTAO Garden Guest',
        description: 'ドレモルタオでふわふわパンケーキとスイーツを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting cloud-soft ricotta pancakes with fresh berries in a sunlit garden cafe, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '北海道産豚肉を炭火で焼き上げる「豚丼 とんすけ」',
      subtext: '白美豚や四元豚など厳選豚肉に香ばしい炭火の香りが絡む一杯に大満足した。',
      badge: {
        code: 'minami_chitose_tonsuke',
        name_ja: '南千歳・炭火豚丼の味人',
        subtitle_en: 'Charcoal Pork Bowl Lover',
        description: '豚丼 とんすけで香ばしい道産豚の豚丼を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a glazed charcoal-grilled Hokkaido pork donburi bowl with rising savory steam, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'minami_chitose_complete',
    name_ja: '南千歳・翼と甘味の旅人',
    subtitle_en: 'Traveler of Minami-Chitose Skies',
    description: 'JR南千歳駅から空港公園、駒そば亭、ドレモルタオ、豚丼 とんすけまでを巡った証',
    image_prompt:
      'A circular emblem combining vintage biplane monument, stone-milled soba, fluffy pancakes and charcoal pork bowl, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR南千歳駅',
      prefecture: '北海道',
      city: '千歳市',
      description:
        '1980年10月1日「千歳空港駅」として開業、1992年7月1日「南千歳駅」へ改称（終日利用可・無料）。新千歳空港と札幌・道東・道南を結ぶ北海道の鉄道交通の要衝。',
      address: '北海道千歳市平和1388-2',
      lat: 42.80826,
      lng: 141.675283,
      clue:
        '昭和五十五年十月に「千歳空港駅」として開業し、平成四年七月に現在の駅名へ改められた北海道の鉄路の要衝「JR南千歳駅」から町歩きと散策を始めよう（終日利用可）。新千歳空港と札幌や道東・道南を結ぶ活気あふれるホームをゆっくり降りて外へ出たら、まずは徒歩五分ほどの場所にある、千歳と空の歴史を刻む緑豊かで広々とした「空港公園」を目指してのんびり楽しく元気に笑顔で外へと歩き出そう。',
      surprise: '道内各地からの列車が行き交う要衝から一歩外へ出ると、空の玄関口らしい開放的な公園がすぐ傍にあった。',
      hook: 'JR南千歳駅を出たら、徒歩約五分の「空港公園」へ向かおう。',
      f7_fragment: '昭和五十五年「千歳空港駅」として開業した北海道鉄道交通の要衝。',
      f7_full: '「JR南千歳駅」に降り立ち、大空の記憶と石臼挽き蕎麦、甘い丘を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Minami-Chitose Station bustling northern transit railway terminal beneath expansive blue Hokkaido sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '空港公園',
      prefecture: '北海道',
      city: '千歳市',
      description:
        'JR南千歳駅から徒歩約5分の公園（終日開放・無料）。大正15年に千歳村へ初飛来した複葉機「北海1号機」のモニュメントや滑走路を模した広場があり、離発着する飛行機を間近に望める。',
      address: '北海道千歳市柏台南1-5',
      lat: 42.812063,
      lng: 141.678106,
      clue:
        '駅徒歩五分の「空港公園」を歩こう（終日開放）。大正十五年飛来の複葉機「北海1号機」のモニュメントが立つ空の記念公園だ。次はすぐ隣の「駒そば亭」へ寄ろう。',
      surprise: '大正十五年に千歳へ初飛来した「北海1号機」のモニュメントと、頭上を飛ぶ現代の飛行機の対比が胸に響いた。',
      hook: '空港公園で空の歴史に触れたら、すぐ隣の「駒そば亭」へ向かおう。',
      f7_fragment: '大正十五年飛来の「北海1号機」モニュメントが立つ滑走路風の公園。',
      f7_full: '「空港公園」で北海1号機の記念碑を眺め、千歳と大空の長い歴史に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Chitose Airport Park vintage biplane monument standing on runway-patterned green lawn with airplane in distant sky, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '駒そば亭',
      prefecture: '北海道',
      city: '千歳市',
      description:
        'JR南千歳駅南口から徒歩約10分・空港公園すぐ隣（平日11:00〜15:30・土日祝〜17:00、月曜休）。千歳市駒里地区産「千歳駒そば」100%を毎日店内の石臼で挽いて手打ちする人気そば店。',
      address: '北海道千歳市柏台南1-5-2',
      lat: 42.813673,
      lng: 141.678951,
      clue:
        '空港公園のすぐ隣に佇む手打ち蕎麦の人気店「駒そば亭」で香り豊かな昼食をゆっくりと味わおう（11:00〜15:30頃、月曜休）。地元・千歳市駒里地区で育った「千歳駒そば」を100%使用し、毎日店内の石臼で丁寧に挽いて打ち上げる蕎麦は、喉ごしも風味も格別の美味しさだ。大地の恵みをしっかり堪能したら、北西の「ドレモルタオ（Doremo LeTAO）」へと楽しく歩いて向かおう。',
      surprise: '地元・駒里地区産の蕎麦を毎日店内の石臼で挽いて打ち上げるというこだわりの香りと喉ごしに唸った。',
      hook: '駒そば亭で手打ち蕎麦を味わったら、北西の「ドレモルタオ（Doremo LeTAO）」へ向かおう。',
      f7_fragment: '千歳市駒里地区産「千歳駒そば」を毎日店内の石臼で挽き手打ちする人気店。',
      f7_full: '「駒そば亭」で石臼挽きの香り高い千歳駒そばを堪能し、地元の恵みに満たされた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Komasobatei timber noodle dining room serving freshly handmade buckwheat soba on bamboo tray beside stone mill, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'ドレモルタオ（Doremo LeTAO）',
      prefecture: '北海道',
      city: '千歳市',
      description:
        '小樽の洋菓子舗ルタオが展開する庭園併設の大型路面店（ショップ10:00〜17:00・カフェ11:00〜17:00、年中無休）。ふわふわのリコッタパンケーキや限定スイーツを楽しめる。',
      address: '北海道千歳市朝日町6-1-1',
      lat: 42.820694,
      lng: 141.655858,
      clue:
        '白樺の美しい庭園を併設する小樽ルタオの大型路面店「ドレモルタオ（Doremo LeTAO）」で甘いカフェタイムをゆったり楽しもう（カフェ11:00〜17:00、年中無休）。注文ごとに丁寧に焼き上げるふわふわ食感のリコッタパンケーキやここだけの限定スイーツは、口に入れた瞬間にとろける至福の味わいだ。優雅なひとときを過ごしたら、最後は人気店「豚丼 とんすけ」へと向かおう。',
      surprise: '開放的な白樺の庭園を眺めながら味わう、焼きたてふわふわのリコッタパンケーキの極上の口どけに感動した。',
      hook: 'ドレモルタオで甘い時間を過ごしたら、北側の「豚丼 とんすけ」へ向かおう。',
      f7_fragment: '美しい庭園を併設し、ふわふわのリコッタパンケーキや限定スイーツが人気の店。',
      f7_full: '「ドレモルタオ」のカフェでふわふわのパンケーキを味わい、甘い幸せに包まれた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Doremo LeTAO sunlit garden cafe pavilion serving cloud-soft ricotta pancakes topped with cream and berries, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: '豚丼 とんすけ',
      prefecture: '北海道',
      city: '千歳市',
      description:
        '厳選された北海道産豚肉（白美豚・四元豚など）を炭火で香ばしく焼き上げるこだわりの豚丼店（11:30〜15:00・17:00〜22:00、月曜休・祝日の場合翌平日）。',
      address: '北海道千歳市東郊2-1-4',
      lat: 42.835618,
      lng: 141.66343,
      clue:
        '旅の締めくくりは、厳選された北海道産豚肉を炭火で香ばしく焼き上げる人気店「豚丼 とんすけ」で満足感たっぷりの一杯をゆっくり味わおう（11:30〜15:00等、月曜休）。白美豚や四元豚などの上質な豚肉に秘伝のたれがじゅわっと絡み、炭火ならではの芳ばしい香りが食欲をどこまでもそそる。北海道の豊かな食を存分に満喫して、南千歳の充実した楽しい旅を心地よく晴れやかに笑顔で結ぼう。',
      surprise: '白美豚や四元豚など厳選された道産豚肉を炭火で丁寧に焼き上げた豚丼の香ばしさと柔らかさに大満足だった。',
      hook: '',
      f7_fragment: '厳選された北海道産豚肉を炭火で香ばしく焼き上げるこだわりの豚丼店。',
      f7_full: '「豚丼 とんすけ」で炭火の香り豊かな道産豚の豚丼を味わい、旅を締めくくった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Butadon Tonsuke warm wooden diner counter serving a generous bowl of charcoal-grilled glazed Hokkaido pork donburi, no text, no letters.',
    },
  ],
};
