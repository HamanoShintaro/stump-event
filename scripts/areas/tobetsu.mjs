export default {
  slug: 'tobetsu',
  station_order: 915,
  station: '当別',
  line: 'JR札沼線',
  area_name: '当別・伊達開拓史と赤れんが',
  prefecture: '北海道',
  municipality: '当別町',
  category: '開拓史跡と赤れんが倉庫',
  budget_tier: 2,
  tags: ['北海道', '当別町', '当別駅', '伊達邦直', '赤れんが'],
  style_genre: 'ink_and_watercolor',
  title: '伊達の開拓史と赤れんがの街を巡る当別散歩',
  description:
    '「JR当別駅」から、昭和十六年築の「ふれあい倉庫（当別赤れんが6号）」、西海岸風の「Cafe & Kitchen Offshore」、明治十三年築の「伊達邸別館・当別伊達記念館」、伊達邦直公を祀る「当別神社」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Tobetsu Hokkaido town from modern railway station and 1941 red-brick agricultural warehouse to stylish cafe burger diner, 1880 historic Date residence hall and forested hilltop Tobetsu Shrine, full bleed, no text, no letters.',
  question: '伊達邦直公の開拓史が息づく当別の駅から赤れんが倉庫や人気カフェ、記念館、当別神社を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '昭和十六年築の旧農協倉庫を活かした「ふれあい倉庫（当別赤れんが6号）」',
      subtext: '駅南口すぐの赤れんが倉庫に朝採れ野菜や当別の特産品が並び、街の温もりを感じた。',
      badge: {
        code: 'tobetsu_warehouse',
        name_ja: '当別・赤れんが倉庫の旅人',
        subtitle_en: 'Tobetsu Red Brick Warehouse Visitor',
        description: '昭和十六年築のふれあい倉庫（当別赤れんが6号）を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a 1941 weathered red-brick agricultural warehouse filled with fresh harvest crates, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '西海岸風の空間で地元食材を味わう「Cafe & Kitchen Offshore」',
      subtext: '地元食材のハンバーガーやパスタ、ご当地パフェの美味しさに思わず笑顔になった。',
      badge: {
        code: 'tobetsu_offshore',
        name_ja: '当別・オフショアの美味',
        subtitle_en: 'Cafe Offshore Diner',
        description: 'Cafe & Kitchen Offshoreで地元食材のランチを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a gourmet craft burger and berry parfait in a sunlit coastal-inspired cafe, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '明治十三年築の歴史的建造物「伊達邸別館・当別伊達記念館」',
      subtext: '仙台藩岩出山領主・伊達邦直公ゆかりの品々から当別開拓の気迫が伝わってきた。',
      badge: {
        code: 'tobetsu_date_museum',
        name_ja: '当別・伊達開拓史の記録',
        subtitle_en: 'Date Pioneer Memorial Historian',
        description: '伊達邸別館・当別伊達記念館で伊達邦直公の足跡に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an 1880 historic Japanese-western timber residence beside an antique samurai crest scroll, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '伊達邦直公を御祭神として祀る当別町の総鎮守「当別神社」',
      subtext: '阿蘇公園に隣接する静かな杜で、開拓の祖を祀る社に手を合わせ心が整った。',
      badge: {
        code: 'tobetsu_shrine',
        name_ja: '当別・伊達総鎮守の参拝',
        subtitle_en: 'Tobetsu Shrine Pilgrim',
        description: '伊達邦直公を御祭神とする当別神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a grand wooden Shinto torii gate surrounded by lush hillside pines, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'tobetsu_complete',
    name_ja: '当別・伊達開拓史の巡礼者',
    subtitle_en: 'Explorer of Historic Tobetsu',
    description: 'JR当別駅からふれあい倉庫、Cafe & Kitchen Offshore、当別伊達記念館、当別神社までを巡った証',
    image_prompt:
      'A circular emblem combining 1941 red-brick warehouse, 1880 Date residence, gourmet burger and Shinto torii gate, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR当別駅',
      prefecture: '北海道',
      city: '当別町',
      description:
        '1934年（昭和9年）11月20日「石狩当別駅」として開業、2022年3月12日「当別駅」へ改称（終日利用可・無料）。札幌近郊と当別市街を結ぶJR札沼線の拠点駅。',
      address: '北海道石狩郡当別町錦町55-9',
      lat: 43.222328,
      lng: 141.514551,
      clue:
        '昭和九年十一月に「石狩当別駅」として開業し、令和四年三月に現在の駅名へと改称されたJR札沼線の拠点駅「JR当別駅」から街歩きと散策を始めよう（終日利用可）。仙台藩の伊達邦直公が開拓した歴史ある町の空気を胸いっぱいに吸い込んで静かな南口へゆっくり出たら、まずは駅前から徒歩わずか一分の場所に立つ「ふれあい倉庫（当別赤れんが6号）」を目指して元気に楽しく笑顔で外へと歩き出そう。',
      surprise: '「石狩当別駅」から「当別駅」への改称の歴史と、駅を出た瞬間に広がる赤れんがの風景が素敵だった。',
      hook: 'JR当別駅を出たら、徒歩約一分の「ふれあい倉庫（当別赤れんが6号）」へ向かおう。',
      f7_fragment: '昭和九年開業、令和四年に「石狩当別」から改称された札沼線の拠点駅。',
      f7_full: '「JR当別駅」に降り立ち、伊達邦直公の開拓史と赤れんがの街を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tobetsu Station tidy northern town railway terminal under clear crisp sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'ふれあい倉庫（当別赤れんが6号）',
      prefecture: '北海道',
      city: '当別町',
      description:
        'JR当別駅南口から徒歩約1分、1941年築の旧農協レンガ倉庫を再利用した地域交流・物販施設（4〜10月9:00〜18:00・11〜3月〜16:00、月曜休、入場無料）。朝採れ野菜や当別特産品を販売。',
      address: '北海道石狩郡当別町錦町294-4',
      lat: 43.221639,
      lng: 141.513858,
      clue:
        '昭和十六年築の旧農協倉庫を活かした「ふれあい倉庫」へ寄ろう（9:00〜18:00等、月曜休）。朝採れ野菜や当別特産品が揃う。次は「Cafe & Kitchen Offshore」へ。',
      surprise: '駅前すぐの場所に昭和十六年築の赤れんが倉庫が大切に再利用され、新鮮な特産品が並んでいたのが嬉しかった。',
      hook: 'ふれあい倉庫で特産品を見たら、「Cafe & Kitchen Offshore」へ向かおう。',
      f7_fragment: '駅南口徒歩一分、昭和十六年築の旧農協レンガ倉庫を活かした物販施設。',
      f7_full: '「ふれあい倉庫」の温かな赤れんが空間で当別の特産品に触れ、心が弾んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Fureai Soko 1941 red-brick agricultural warehouse storefront displaying fresh local produce and crafts, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'Cafe & Kitchen Offshore（カフェ＆キッチン オフショア）',
      prefecture: '北海道',
      city: '当別町',
      description:
        'JR当別駅から徒歩約5分（11:30〜21:00・L.O.20:30・17:00以降は5名以上予約制、月曜・第2第4火曜休）。西海岸風の店内で地元食材を使ったハンバーガーやパスタ、ご当地パフェを提供。',
      address: '北海道石狩郡当別町弥生51-26',
      lat: 43.219152,
      lng: 141.515897,
      clue:
        '駅から歩いて五分ほどの場所にあるお洒落な人気店「Cafe & Kitchen Offshore（カフェ＆キッチン オフショア）」で美味しい食事にしよう（11:30〜21:00、月曜等休）。西海岸風の明るく開放的な店内では、地元当別産の食材を贅沢に使ったボリューム満点のハンバーガーやパスタ、ご当地パフェまで幅広く味わえる。お腹を満たしたら、「伊達邸別館・当別伊達記念館」へ向かおう。',
      surprise: '開拓の町・当別の街角で出会う西海岸風カフェの洗練された雰囲気と、地元食材ハンバーガーの旨さに驚いた。',
      hook: 'オフショアで食事を終えたら、東側の「伊達邸別館・当別伊達記念館」へ向かおう。',
      f7_fragment: '西海岸風の店内で地元食材のハンバーガーやパスタ、パフェが味わえる店。',
      f7_full: '「Cafe & Kitchen Offshore」で地元食材たっぷりのランチを堪能し、活力を得た。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cafe and Kitchen Offshore airy west-coast style cafe serving a hearty craft burger and pasta plate, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '伊達邸別館・当別伊達記念館',
      prefecture: '北海道',
      city: '当別町',
      description:
        '明治13年（1880年）築の歴史的建造物「伊達邸別館」と、仙台藩岩出山領主・伊達邦直公ゆかりの品や開拓資料を展示する記念館（10:00〜16:30、月曜休・11/1〜4/30冬季休館、入館無料）。',
      address: '北海道石狩郡当別町元町105',
      lat: 43.219506,
      lng: 141.518944,
      clue:
        '明治十三年築の歴史的建造物「伊達邸別館」と隣り合う「当別伊達記念館」を訪ね、町の原点にじっくりと触れてみよう（5〜10月10:00〜16:30、月曜休、入館無料）。館内では、明治初期に数々の困難を乗り越えて当別の地を切り拓いた仙台藩岩出山領主・伊達邦直公ゆかりの貴重な遺品や開拓資料を間近に見学できる。先人の気概に感動したら、最後は総鎮守の「当別神社」へと楽しく向かおう。',
      surprise: '明治十三年築の伊達邸別館が今も残り、仙台藩岩出山領主・伊達邦直公の壮大な開拓史を学べて感動した。',
      hook: '伊達記念館で開拓史を学んだら、南東の「当別神社」へ向かおう。',
      f7_fragment: '明治十三年築の伊達邸別館とともに伊達邦直公ゆかりの資料を展示する施設。',
      f7_full: '「伊達邸別館・当別伊達記念館」で当別開拓の歩みを学び、深い感銘を受けた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tobetsu Date Memorial Museum 1880 historic timber annex house framed by lush green heritage garden trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '当別神社',
      prefecture: '北海道',
      city: '当別町',
      description:
        'JR当別駅から南東へ徒歩約8〜12分、阿蘇公園に隣接して鎮座し伊達邦直公を御祭神とする当別町の総鎮守（境内終日開放・参拝無料、社務所9:00〜17:00）。月替わりの御朱印でも親しまれる。',
      address: '北海道石狩郡当別町元町51-12',
      lat: 43.218222,
      lng: 141.520605,
      clue:
        '旅の締めくくりは、阿蘇公園に隣接する緑豊かな杜に静かに鎮座し、開拓の祖・伊達邦直公を御祭神として祀る当別町の総鎮守「当別神社」へ丁寧に参拝しよう（参拝自由・無料）。清らかな空気が満ちる立派な社殿の前で静かに深く手を合わせれば、明治の開拓から現代へと受け継がれる町の誇りが胸にじんわり響いてくる。穏やかな祈りの時間で、歴史と味わいに満ちた当別の楽しい街歩きを心地よく結ぼう。',
      surprise: '開拓の祖・伊達邦直公を御祭神として祀る総鎮守の厳かな空気と、美しい月替わりの御朱印が印象的だった。',
      hook: '',
      f7_fragment: '伊達邦直公を御祭神として祀り、阿蘇公園に隣接する当別町の総鎮守。',
      f7_full: '「当別神社」の静かな杜で手を合わせ、伊達開拓史を巡る当別の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tobetsu Shrine dignified wooden torii gate and peaceful sanctuary backed by tall hillside pines, no text, no letters.',
    },
  ],
};
