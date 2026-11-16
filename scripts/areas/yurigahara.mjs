export default {
  slug: 'yurigahara',
  station_order: 909,
  station: '百合が原',
  line: 'JR札沼線',
  area_name: '百合が原・花と名菓の散策',
  prefecture: '北海道',
  municipality: '札幌市北区',
  category: '花と温室と北海道銘菓',
  budget_tier: 2,
  tags: ['北海道', '札幌市北区', '百合が原駅', '百合が原公園', '六花亭'],
  style_genre: 'ink_and_watercolor',
  title: '百合が原・花と温室の公園から名菓の喫茶室へ',
  description:
    '花と緑の博覧会に合わせて開業した「JR百合が原駅」から、パフェが人気の「OWN WAY CAFE」、四季の花々が咲く「百合が原公園」、新交流拠点「LiLiLi」、北海道銘菓の直営店「六花亭 百合が原店」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Yurigahara Sapporo from suburban flower-park railway station and cozy parfait cafe to blooming lily beds, sunlit greenhouse conservatory, modern bakery cafe and classic white-walled Hokkaido confectionery salon, full bleed, no text, no letters.',
  question: '花と緑の博覧会に始まった百合が原駅から隠れ家カフェや広大な花公園、六花亭の喫茶室を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '季節限定パフェと手作りスイーツが評判の「OWN WAY CAFE」',
      subtext: '駅から北へ歩いて出会う隠れ家風カフェで、彩り豊かなパフェと珈琲を楽しめた。',
      badge: {
        code: 'yurigahara_ownway',
        name_ja: '百合が原・パフェの寛ぎ',
        subtitle_en: 'Own Way Cafe Parfait Guest',
        description: 'OWN WAY CAFEで季節のパフェと珈琲を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a tall glass parfait layered with seasonal berries and cream beside a coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '世界各地のユリや四季の花々が咲く約25.4haの「百合が原公園」',
      subtext: '温室「緑のセンター」や園内を巡るリリートレインなど花と緑の楽園に癒やされた。',
      badge: {
        code: 'yurigahara_park',
        name_ja: '百合が原・花と温室の旅人',
        subtitle_en: 'Yurigahara Flower Park Explorer',
        description: '四季の花々が彩る百合が原公園と温室を巡った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting blooming white and orange lilies in front of a sunlit glass botanical conservatory, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '令和七年秋オープンの公園内新交流拠点「LiLiLi」',
      subtext: '人気ベーカリーどんぐり共同開発のフォカッチャサンドと丸美珈琲を公園で味わえた。',
      badge: {
        code: 'yurigahara_lilili',
        name_ja: '百合が原・新拠点のフォカッチャ',
        subtitle_en: 'LiLiLi Park Cafe Guest',
        description: '百合が原公園内の新交流拠点「LiLiLi」で食事を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an artisan focaccia sandwich and specialty coffee cup overlooking park flowerbeds, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '銘菓販売と喫茶室を併設する「六花亭 百合が原店」',
      subtext: 'お馴染みの北海道銘菓とともに、公園の傍らで喫茶室のピザやスイーツを満喫できた。',
      badge: {
        code: 'yurigahara_rokkatei',
        name_ja: '百合が原・六花亭の喫茶時間',
        subtitle_en: 'Rokkatei Salon Visitor',
        description: '六花亭 百合が原店で銘菓選びと喫茶室の時間を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting wildflower-patterned Hokkaido sweet boxes and a warm teacup in a sunlit salon, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'yurigahara_master',
    name_ja: '百合が原・花と名菓の散策者',
    subtitle_en: 'Yurigahara Garden & Sweets Walker',
    description: 'JR百合が原駅からOWN WAY CAFE、百合が原公園、LiLiLi、六花亭 百合が原店までを巡った証',
    image_prompt:
      'A circular emblem combining blooming lily flowers, glass conservatory, focaccia sandwich and wildflower confectionery box, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR百合が原駅',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1986年6月28日、百合が原公園での「\'86さっぽろ花と緑の博覧会」に合わせて臨時乗降場として開業、翌1987年4月1日に駅昇格（終日利用可・無料）。花公園の玄関口。',
      address: '北海道札幌市北区百合が原5-2',
      lat: 43.130898,
      lng: 141.360614,
      clue:
        '昭和六十一年六月に百合が原公園で開催された「\'86さっぽろ花と緑の博覧会」に合わせて誕生し、翌年四月に駅へ昇格した「JR百合が原駅」から町歩きと散策を始めよう（終日利用可）。四季の花々が待つ公園の玄関口らしい爽やかな空気を感じながら静かな駅のホームを出たら、まずは駅から北へ徒歩圏にある隠れ家風の人気カフェ「OWN WAY CAFE」を目指してのんびり楽しく元気に歩き出そう。',
      surprise: '博覧会に合わせて誕生した駅という背景が、花と緑の街・百合が原の入り口にぴったりだった。',
      hook: 'JR百合が原駅を出たら、北側にある人気カフェ「OWN WAY CAFE」へ向かおう。',
      f7_fragment: '昭和六十一年の花と緑の博覧会に合わせて誕生した公園の玄関口駅。',
      f7_full: '「JR百合が原駅」に降り立ち、花と温室の公園と名菓の喫茶室を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Yurigahara Station cheerful suburban railway platform bordered by blooming flowerbeds, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'OWN WAY CAFE',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '駅から北へ徒歩圏の隠れ家風人気カフェ（11:00〜19:00、不定休）。季節限定パフェや手作りスイーツ、ランチ、香り高い珈琲が評判で、ゆったりとした時間を過ごせる。',
      address: '北海道札幌市北区百合が原7-9-25',
      lat: 43.135041,
      lng: 141.36307,
      clue:
        '隠れ家風の人気店「OWN WAY CAFE」で一息つこう（11:00〜19:00、不定休）。季節限定パフェや手作りスイーツ、香り高い珈琲が絶品だ。次は「百合が原公園」へ。',
      surprise: '住宅街の隠れ家のような心地よい空間で味わう、見た目も華やかな季節のパフェと珈琲に癒やされた。',
      hook: 'OWN WAY CAFEで寛いだら、南側の「百合が原公園」へ向かおう。',
      f7_fragment: '季節限定パフェや手作りスイーツ、珈琲が評判の隠れ家風カフェ。',
      f7_full: '「OWN WAY CAFE」で華やかなパフェと珈琲を味わい、散策の楽しさが膨らんだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Own Way Cafe cozy wooden cafe interior with a tall seasonal berry parfait glass and warm coffee cup, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '百合が原公園',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '世界各地のユリやライラック、チューリップ、ダリアなど四季の花々が咲く約25.4haの総合公園（園内24時間開放・無料、緑のセンターや世界の庭園は8:45〜17:15・月曜休、150円等）。',
      address: '北海道札幌市北区百合が原公園210',
      lat: 43.128633,
      lng: 141.364449,
      clue:
        '世界各地のユリをはじめライラックやチューリップ、ダリアなど四季折々の美しい花々が約二十五ヘクタールの広大な敷地に咲き誇る「百合が原公園」を巡ろう（園内開放・無料）。冬でも華やかな温室「百合が原緑のセンター」や趣ある「世界の庭園」、園内を走る「リリートレイン」など見どころが尽きない。花と緑にすっかり癒やされたら、園内の新交流拠点カフェ「LiLiLi」へと楽しく歩いて向かおう。',
      surprise: '約二十五ヘクタールもの広大な園内に咲く世界のユリや四季の花々、充実した温室の美しさに感動した。',
      hook: '百合が原公園で花々を楽しんだら、園内の新交流施設「LiLiLi」へ向かおう。',
      f7_fragment: '世界のユリや四季の花々が約25.4haに咲き誇る温室付き花公園。',
      f7_full: '「百合が原公園」の豊かな花々と温室の緑に包まれ、季節の美しさを満喫した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Yurigahara Park vibrant blooming lily gardens leading toward a sunlit glass botanical conservatory, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'LiLiLi',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '百合が原公園内に2025年10月25日オープンした通年営業の新交流施設・カフェ（9:00〜18:00・フード10:00〜、月曜休）。人気ベーカリーどんぐり共同開発のフォカッチャサンドや丸美珈琲店の珈琲を提供。',
      address: '北海道札幌市北区百合が原公園213-1',
      lat: 43.126661,
      lng: 141.361766,
      clue:
        '令和七年十月に百合が原公園内へ新しく誕生した通年営業の交流カフェ「LiLiLi」で美味しい食事をゆっくりと楽しもう（9:00〜18:00、月曜休）。札幌の人気ベーカリー「どんぐり」と共同開発した特製フォカッチャサンドや「丸美珈琲店」のスペシャルティコーヒー、濃厚ジェラートなど札幌の名店コラボが実に魅力的だ。お腹を満たしたら、最後は南隣の「六花亭 百合が原店」へ向かおう。',
      surprise: '公園内の新しい交流拠点で、札幌の人気店「どんぐり」や「丸美珈琲店」とコラボした味が楽しめて嬉しかった。',
      hook: 'LiLiLiで食事を楽しんだら、公園南側に隣接する「六花亭 百合が原店」へ向かおう。',
      f7_fragment: 'どんぐり共同開発のフォカッチャや丸美珈琲が味わえる公園内新拠点。',
      f7_full: '「LiLiLi」で札幌の人気店が織りなすフォカッチャサンドと珈琲を堪能した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of LiLiLi bright timber park pavilion cafe serving fresh focaccia sandwiches and specialty pour-over coffee, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '六花亭 百合が原店',
      prefecture: '北海道',
      city: '札幌市東区',
      description:
        '百合が原公園南側に隣接する北海道銘菓「六花亭」の直営店舗（店舗10:00〜17:30・喫茶室11:00〜16:30、木曜休）。マルセイバターサンド等の銘菓購入と喫茶室でのピザやスイーツが楽しめる。',
      address: '北海道札幌市東区北50条東15-6-12',
      lat: 43.124173,
      lng: 141.3634,
      clue:
        '旅の締めくくりは、百合が原公園のすぐ南側に隣接する北海道銘菓の直営店「六花亭 百合が原店」へ立ち寄ろう（店舗10:00〜17:30・喫茶室11:00〜16:30、木曜休）。お馴染みのマルセイバターサンドをはじめとした花柄の美しいお土産をじっくり選べるほか、併設の喫茶室で焼きたてピザやスイーツを味わえるのも実に嬉しい。甘い幸せをお土産に、百合が原の優雅な一日を心地よく結ぼう。',
      surprise: '公園のすぐ隣に六花亭の直営店があり、お土産選びと喫茶室での寛ぎの両方を楽しめるのが贅沢だった。',
      hook: '',
      f7_fragment: 'マルセイバターサンド等の銘菓販売と喫茶室を併設する六花亭直営店。',
      f7_full: '「六花亭 百合が原店」で北海道銘菓を手に取り、花と甘味に満たされた旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Rokkatei Yurigahara bright white confectionery shop with floral gift boxes and sunlit salon table, no text, no letters.',
    },
  ],
};
