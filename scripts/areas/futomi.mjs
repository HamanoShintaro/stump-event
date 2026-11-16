export default {
  slug: 'futomi',
  station_order: 914,
  station: '太美',
  line: 'JR札沼線',
  area_name: '太美・北欧駅と老舗の味',
  prefecture: '北海道',
  municipality: '当別町',
  category: '北欧駅舎と名湯散歩',
  budget_tier: 2,
  tags: ['北海道', '当別町', '太美駅', 'テールラーメン', 'ふとみ銘泉'],
  style_genre: 'ink_and_watercolor',
  title: '太美・北欧風の駅舎から老舗の味と温泉へ',
  description:
    'スウェーデンヒルズに合わせて改築された北欧風駅舎の「JR太美駅」から、元祖テールラーメン発祥の「本家なかむら 本店」、農園レストラン「ぺこぺこのはたけ」、「西当別神社」、美肌の湯「ふとみ銘泉 万葉の湯」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Futomi Tobetsu from Nordic-gabled wooden railway station and classic beef-tail ramen shop to community farm garden cafe, quiet local shrine torii and steaming natural hot spring bathhouse, full bleed, no text, no letters.',
  question: '北欧風の駅舎が迎える太美駅から元祖テールラーメンの老舗や農園カフェ、美肌の湯を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: 'スウェーデンヒルズに合わせ改築された北欧風駅舎「JR太美駅」',
      subtext: '旧・石狩太美駅の歴史と、令和四年の駅名改称を経て親しまれる愛らしい駅舎に和んだ。',
      badge: {
        code: 'futomi_station',
        name_ja: '太美・北欧風駅舎の旅人',
        subtitle_en: 'Futomi Nordic Station Visitor',
        description: '北欧風の駅舎が美しいJR太美駅に降り立った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a charming Nordic-style gabled railway station house, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '元祖テールラーメン発祥の老舗「本家なかむら 本店」',
      subtext: '駅近くで長く愛される濃厚な牛テールスープのラーメンに思わず唸った。',
      badge: {
        code: 'futomi_nakamura',
        name_ja: '太美・元祖テール麺の味わ人',
        subtitle_en: 'Tail Ramen Connoisseur of Nakamura',
        description: '本家なかむら 本店で元祖テールラーメンを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of rich golden oxtail ramen with thick chashu slice, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '共生型コミュニティ農園の「Restaurant＆Cafe ぺこぺこのはたけ」',
      subtext: '当別町や道産の新鮮野菜を使った彩り豊かな小鉢御膳に心が温まった。',
      badge: {
        code: 'futomi_pekopeko',
        name_ja: '太美・農園カフェの恵み',
        subtitle_en: 'Farm Garden Diner of Pekopeko',
        description: 'ぺこぺこのはたけで新鮮野菜の小鉢御膳や喫茶を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a wooden tray of colorful farm-fresh seasonal small-bowl dishes and herbal tea, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '弱アルカリ性「美肌の湯」が自慢の「ふとみ銘泉 万葉の湯」',
      subtext: '駅から徒歩圏の大型天然温泉で露天風呂に浸かり、極上の湯浴みを満喫できた。',
      badge: {
        code: 'futomi_manyo',
        name_ja: '太美・美肌の湯めぐり',
        subtitle_en: 'Futomi Manyo Onsen Bather',
        description: 'ふとみ銘泉 万葉の湯の弱アルカリ性温泉に浸かった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an open-air stone hot spring bath surrounded by northern garden pines, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'futomi_master',
    name_ja: '太美・北欧駅と銘泉の旅人',
    subtitle_en: 'Futomi Nordic Station & Onsen Walker',
    description: 'JR太美駅から本家なかむら 本店、ぺこぺこのはたけ、西当別神社、ふとみ銘泉 万葉の湯までを巡った証',
    image_prompt:
      'A circular emblem combining Nordic gabled station, oxtail ramen bowl, farm vegetable tray and steaming stone hot spring, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR太美駅',
      prefecture: '北海道',
      city: '当別町',
      description:
        '1934年（昭和9年）11月20日「石狩太美駅」として開業、1990年近隣「スウェーデンヒルズ」に合わせ北欧風駅舎に改築、2022年3月「太美駅」へ改称（終日利用可・無料）。',
      address: '北海道石狩郡当別町太美町1499',
      lat: 43.189671,
      lng: 141.448476,
      clue:
        '昭和九年十一月に「石狩太美駅」として開業し、平成二年に近隣の住宅地スウェーデンヒルズに合わせて北欧風の可愛らしい駅舎へと生まれ変わった「JR太美駅」から町歩きと散策を始めよう（終日利用可）。令和四年三月の駅名改称を経てなお地域に親しまれる異国情緒あふれる駅舎をゆっくり後にしたら、まずは歩いて一〜二分の老舗「本家なかむら 本店」を目指して元気に楽しく笑顔で外へと歩き出そう。',
      surprise: 'スウェーデンヒルズに合わせて改築された北欧風の駅舎が、のどかな当別の風景に見事に溶け込んでいた。',
      hook: 'JR太美駅を出たら、徒歩約二分の「本家なかむら 本店」へ向かおう。',
      f7_fragment: 'スウェーデンヒルズに合わせて改築された北欧風駅舎が迎える駅。',
      f7_full: '「JR太美駅」の北欧風駅舎に降り立ち、老舗のラーメンと美肌の湯を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Futomi Station charming Nordic-style gabled railway building under clear northern sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '本家なかむら 本店',
      prefecture: '北海道',
      city: '当別町',
      description:
        'JR太美駅から徒歩約1〜2分の老舗ラーメン＆焼肉店（11:00〜14:30等・17:00〜20:00、月火休）。「元祖テールラーメン発祥の店」として知られ、牛テールスープや大きなチャーシュー麺が人気。',
      address: '北海道石狩郡当別町太美町1499-47',
      lat: 43.190398,
      lng: 141.447976,
      clue:
        '駅徒歩二分の老舗「本家なかむら 本店」へ入ろう（11:00〜14:30等、月火休）。元祖テールラーメン発祥の店として評判の一軒だ。次は「ぺこぺこのはたけ」へ。',
      surprise: '元祖テールラーメン発祥の店という貫禄と、牛テールの旨みが溶け込んだ滋味深いスープに感激した。',
      hook: '本家なかむら 本店で食事を終えたら、「Restaurant＆Cafe ぺこぺこのはたけ」へ向かおう。',
      f7_fragment: '駅徒歩二分、「元祖テールラーメン発祥の店」として知られる老舗。',
      f7_full: '「本家なかむら 本店」で元祖テールラーメンを味わい、太美の看板グルメに唸った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Honke Nakamura cozy classic diner counter serving a steaming bowl of rich oxtail ramen with chashu, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'Restaurant＆Cafe ぺこぺこのはたけ',
      prefecture: '北海道',
      city: '当別町',
      description:
        '共生型コミュニティ農園が手掛けるレストラン＆カフェ（ランチ11:30〜13:30・喫茶11:00〜16:00、土日祝休・第2第4土曜営業）。当別町や道産の新鮮野菜を使った小鉢御膳やスイーツを楽しめる。',
      address: '北海道石狩郡当別町太美町1481-6',
      lat: 43.191199,
      lng: 141.444587,
      clue:
        '共生型コミュニティ農園が手掛ける温かな雰囲気の「Restaurant＆Cafe ぺこぺこのはたけ」でほっと心地よく一息つこう（11:00〜16:00、土日祝休・第2第4土曜営業）。当別町や北海道産の新鮮な野菜をたっぷり使った彩り豊かな小鉢御膳や、優しい甘さの喫茶スイーツが心と体を満たしてくれる。温かな空間でゆったりと寛いだら、南西の「西当別神社」へと楽しく歩いて向かおう。',
      surprise: 'コミュニティ農園ならではの採れたて野菜の豊かな味わいと、明るく温かなカフェの空気に心が和んだ。',
      hook: 'ぺこぺこのはたけで一息ついたら、南西側の「西当別神社」へ向かおう。',
      f7_fragment: '共生型コミュニティ農園が手掛け、地元野菜の御膳や喫茶を楽しめる店。',
      f7_full: '「ぺこぺこのはたけ」で採れたて野菜とスイーツに触れ、当別の大地の温もりを感じた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Pekopeko no Hatake bright garden-view cafe table with colorful vegetable small-bowl dishes and tea, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '西当別神社',
      prefecture: '北海道',
      city: '当別町',
      description:
        '1893年建立の宇佐八幡小祠と出雲大社分霊を1902年に合祀して「太美神社」を新設、1909年「西当別神社」へ改称、1934年札沼線開通に伴い現在地へ移転した地域の鎮守（参拝自由・無料）。',
      address: '北海道石狩郡当別町字当別太612',
      lat: 43.185696,
      lng: 141.439913,
      clue:
        '明治二十六年建立の小祠と出雲大社分霊を明治三十五年合祀して誕生し、昭和九年の札沼線開通に伴い現在地へ移された地域の鎮守「西当別神社」へ丁寧に参拝しよう（参拝自由・無料）。鉄道の敷設とともに街の中心に寄り添い、開拓と暮らしの歴史を静かに見守り続けてきた境内の清らかな空気に触れると心がすっと整う。旅の安全を心から深く祈ったら、最後は「ふとみ銘泉 万葉の湯」へと歩いて向かおう。',
      surprise: '札沼線の開通に合わせて現在地へ移転したという「西当別神社」の歴史に、鉄道と地域の深い結びつきを見た。',
      hook: '西当別神社に参拝したら、東側の「ふとみ銘泉 万葉の湯」へ向かおう。',
      f7_fragment: '明治期の合祀に始まり昭和九年の札沼線開通に伴い現在地へ移った鎮守。',
      f7_full: '「西当別神社」の静かな社殿に手を合わせ、鉄道と歩んだ地域の歴史に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Nishi-Tobetsu Shrine quiet wooden torii gate framed by tall northern pines beneath crisp blue sky, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'ふとみ銘泉 万葉の湯',
      prefecture: '北海道',
      city: '当別町',
      description:
        'JR太美駅から徒歩約5分の大型天然温泉施設（10:00〜翌9:00・大浴場10:00〜24:00等、年中無休、日帰り大人1,800円・小学生700円・幼児300円）。弱アルカリ性の「美肌の湯」と露天風呂が自慢。',
      address: '北海道石狩郡当別町太美町1695',
      lat: 43.188244,
      lng: 141.444879,
      clue:
        '旅の締めくくりは、太美駅から徒歩五分の好立地にある大型天然温泉「ふとみ銘泉 万葉の湯」で極上の湯浴みをゆったり楽しもう（10:00〜24:00等、大人1,800円）。弱アルカリ性の「美肌の湯」として親しまれる良質なお湯を大浴場や開放的な露天風呂でじっくり堪能すれば、街歩きの疲れもすっかり溶けていく。湯上がりの爽やかな気分で、太美の豊かな旅を心地よく晴れやかに笑顔で結ぼう。',
      surprise: '駅から歩いて五分の場所にこれほど充実した露天風呂と「美肌の湯」の大型温泉施設があるとは贅沢だった。',
      hook: '',
      f7_fragment: '駅徒歩五分、弱アルカリ性の「美肌の湯」と露天風呂を備えた天然温泉。',
      f7_full: '「ふとみ銘泉 万葉の湯」の美肌の湯にゆっくり浸かり、太美の旅を締めくくった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Futomi Meisen Manyo no Yu welcoming hot spring lodge with steaming outdoor rock bath and pines, no text, no letters.',
    },
  ],
};
