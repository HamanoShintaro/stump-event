export default {
  slug: 'hachiken',
  station_order: 905,
  station: '八軒',
  line: 'JR札沼線',
  area_name: '八軒・路地裏のパンと農試公園',
  prefecture: '北海道',
  municipality: '札幌市西区',
  category: '街歩きと地元グルメ',
  budget_tier: 2,
  tags: ['北海道', '札幌市西区', '八軒駅', 'スープカレー', '農試公園'],
  style_genre: 'ink_and_watercolor',
  title: '八軒・路地裏のパンとカレーから農試公園へ',
  description:
    '明治初期の八戸入植に由来する「JR八軒駅」から、「八軒中央公園」、素材にこだわるベーカリー「Kawakami Bakery ろっぱや」、老舗「スープカレー専門店 エスパーイトウ 八軒総本店」、緑豊かな「農試公園」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Hachiken Sapporo neighborhood from elevated railway station and leafy playground park to cozy artisan bakery display, steaming spiced soup curry bowl and poplar-lined riverfront park, full bleed, no text, no letters.',
  question: '明治初期の開拓に由来する八軒の駅から路地裏のパンやスープカレー、ポプラ並木の農試公園を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '明治初期の八戸の入植に地名が由来する「JR八軒駅」',
      subtext: '札沼線で唯一札幌市西区に位置し、開拓の記憶を駅名に刻む高架駅だった。',
      badge: {
        code: 'hachiken_station',
        name_ja: '八軒・開拓八戸の駅人',
        subtitle_en: 'Hachiken Station Walker',
        description: '明治初期の開拓に由来するJR八軒駅から街歩きを始めた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a clean elevated neighborhood railway station beside leafy street trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '約五十種類のパンが並ぶ「Kawakami Bakery ろっぱや」',
      subtext: 'マーガリンやショートニングを使わず焼き上げたクリームパンやクロワッサンが絶品だった。',
      badge: {
        code: 'hachiken_roppaya',
        name_ja: '八軒・こだわりパンの恵み',
        subtitle_en: 'Artisan Bakery Lover of Roppaya',
        description: 'Kawakami Bakery ろっぱやで素材こだわりのパンを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting golden croissants and soft custard cream buns on a wooden bakery tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '十六種類のスパイスが香る「スープカレー専門店 エスパーイトウ 八軒総本店」',
      subtext: '二〇〇八年創業の老舗で、名物パリチキと豊かなスパイスの旨みに体が温まった。',
      badge: {
        code: 'hachiken_esper',
        name_ja: '八軒・スパイスカレーの味人',
        subtitle_en: 'Soup Curry Lover of Esper Ito',
        description: 'スープカレー専門店 エスパーイトウ 八軒総本店を堪能した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of colorful Hokkaido vegetable and crispy chicken soup curry, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '北海道農業試験場跡地のポプラ並木が美しい「農試公園」',
      subtext: '屋内運動場ツインキャップや川沿いのポプラ並木を歩き、地域の憩いに癒やされた。',
      badge: {
        code: 'hachiken_noushi',
        name_ja: '八軒・農試公園の並木散歩',
        subtitle_en: 'Noushi Park Poplar Walker',
        description: '北海道農業試験場跡地に整備された農試公園を散策した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting tall poplar trees lining a peaceful riverside park pathway, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'hachiken_master',
    name_ja: '八軒・パンと農試公園の散策者',
    subtitle_en: 'Hachiken Bakery & Park Walker',
    description: 'JR八軒駅から八軒中央公園、ろっぱや、エスパーイトウ 八軒総本店、農試公園までを巡った証',
    image_prompt:
      'A circular emblem combining elevated station, golden croissant, steaming soup curry bowl and riverside poplar trees, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR八軒駅',
      prefecture: '北海道',
      city: '札幌市西区',
      description:
        '1988年11月3日開業、1996年高架化（終日利用可・無料）。札沼線で唯一札幌市西区に位置し、地名は明治初期に本願寺道路建設等に際して入植した農民が8戸だったことに由来する。',
      address: '北海道札幌市西区八軒6条東2-1',
      lat: 43.085661,
      lng: 141.318983,
      clue:
        '昭和六十三年十一月に開業し、札沼線で唯一札幌市西区に位置する「JR八軒駅」から街歩きを始めよう（終日利用可）。その地名は明治初期に本願寺道路建設などに際して入植した農民が八戸だったことに由来するという。平成八年に高架化された明るく清潔な駅舎を出たら、まずは北西すぐの琴似栄町通沿いに広がる地域の人々の憩いの拠点「八軒中央公園」を目指してのんびりと元気に楽しく歩き出そう。',
      surprise: '「八軒」という地名が明治初期に入植した八戸の農民に由来すると知り、街の歴史への興味が湧いた。',
      hook: 'JR八軒駅を出たら、すぐ北西にある「八軒中央公園」へ向かおう。',
      f7_fragment: '昭和六十三年開業、明治初期の八戸の入植に由来する名を持つ高架駅。',
      f7_full: '「JR八軒駅」に降り立ち、路地裏のパンとカレー、緑の農試公園を巡る街歩きを始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hachiken Station clean elevated neighborhood railway station framed by green Sapporo street trees, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '八軒中央公園',
      prefecture: '北海道',
      city: '札幌市西区',
      description:
        'JR八軒駅から北西すぐの琴似栄町通沿いに位置し、八軒児童会館に隣接する地域の拠点公園（常時開放・無料）。童話プリントのベンチや大型遊具を備え、夏の納涼まつり会場にもなる。',
      address: '北海道札幌市西区八軒7条東1-1',
      lat: 43.087752,
      lng: 141.316585,
      clue:
        '駅北西の「八軒中央公園」を歩こう（常時開放）。童話が描かれたベンチや大型遊具が並び、地域の温かな空気に包まれている。次は「Kawakami Bakery ろっぱや」へ。',
      surprise: '童話がプリントされたユニークなベンチと、地域の子どもたちの声が響く穏やかな公園の雰囲気が素敵だった。',
      hook: '八軒中央公園を抜けたら、琴似栄町通沿いの「Kawakami Bakery ろっぱや」へ向かおう。',
      f7_fragment: '八軒児童会館に隣接し、童話ベンチや大型遊具が親しまれる拠点公園。',
      f7_full: '「八軒中央公園」の穏やかな緑の中を歩き、八軒の暮らしの温もりに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hachiken Central Park sunny green lawn with charming illustrated storybook benches and leafy trees, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'Kawakami Bakery ろっぱや',
      prefecture: '北海道',
      city: '札幌市西区',
      description:
        '琴似栄町通沿いの地域密着ベーカリー（9:00〜18:30売切次第終了、月火休）。マーガリンやショートニングを使わず素材にこだわった約50種類以上のパンが並び、クリームパンやクロワッサンが人気。',
      address: '北海道札幌市西区八軒3条東1-3-8',
      lat: 43.084178,
      lng: 141.312288,
      clue:
        '琴似栄町通沿いに佇む地域密着の人気ベーカリー「Kawakami Bakery ろっぱや」へ立ち寄ろう（9:00〜18:30、月火休）。マーガリンやショートニングを使わず丁寧に素材を厳選して焼き上げるパンはなんと約五十種類以上も揃い、看板のクリームパンや香ばしいクロワッサンは思わず目移りする美味しさだ。焼きたてパンを味わったら、「スープカレー専門店 エスパーイトウ 八軒総本店」へ向かおう。',
      surprise: 'マーガリンやショートニング不使用の優しい味わいと、五十種類以上が並ぶ圧巻のパンの品揃えに心が躍った。',
      hook: 'ろっぱやでパンを選んだら、「スープカレー専門店 エスパーイトウ 八軒総本店」へ向かおう。',
      f7_fragment: '素材にこだわり五十種類以上を焼き上げる地域密着の人気ベーカリー。',
      f7_full: '「Kawakami Bakery ろっぱや」で焼きたてパンの豊かな香りに包まれた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kawakami Bakery Roppaya cozy wooden bakery counter filled with golden croissants and cream buns, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'スープカレー専門店 エスパーイトウ 八軒総本店',
      prefecture: '北海道',
      city: '札幌市西区',
      description:
        '2008年創業の老舗スープカレー専門店（11:00〜15:00・17:00〜21:30頃、不定休）。クミンやカルダモンなど16種類のスパイスを使ったスープに名物「パリチキ」や彩り豊かな野菜が人気。',
      address: '北海道札幌市西区八軒5条西1-2-32',
      lat: 43.087342,
      lng: 141.314224,
      clue:
        '平成二十年創業の札幌スープカレーの老舗「スープカレー専門店 エスパーイトウ 八軒総本店」で温かい昼食を堪能しよう（11:00〜21:30頃、不定休）。クミンやカルダモンなど十六種類ものスパイスが織りなす奥深いスープと、皮目が香ばしくジューシーな名物「パリチキ」の組み合わせは一度食べたら忘れられない至福の味わいだ。お腹も心もしっかり満たされたら、最後は緑豊かな「農試公園」へ向かおう。',
      surprise: '十六種類のスパイスが豊かに香る奥深いスープと、香ばしい名物「パリチキ」の相性に思わず唸った。',
      hook: 'エスパーイトウでスープカレーを味わったら、西側の「農試公園」へ向かおう。',
      f7_fragment: '平成二十年創業、十六種類のスパイスと名物パリチキが人気の総本店。',
      f7_full: '「エスパーイトウ 八軒総本店」で香り高いスープカレーを味わい、大満足の一杯となった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Esper Ito Sapporo soup curry cafe table with a steaming bowl of crisp chicken leg and colorful vegetables, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '農試公園',
      prefecture: '北海道',
      city: '札幌市西区',
      description:
        '農林省北海道農業試験場跡地を整備した運動公園（屋外常時開放・無料、屋内施設8:30〜21:00）。屋内運動場ツインキャップや交通コーナー、琴似発寒川沿いの美しいポプラ並木を備える。',
      address: '北海道札幌市西区八軒5条西6-95-21',
      lat: 43.089717,
      lng: 141.303565,
      clue:
        '旅の締めくくりは、かつての農林省北海道農業試験場の跡地を整備して生まれた広大な「農試公園」をゆっくり歩こう（屋外開放・無料）。シンボル的な屋内運動場「ツインキャップ」や懐かしい交通コーナーなど見どころも多く、中でも琴似発寒川沿いに真っすぐ延びる美しいポプラ並木は北海道らしい開放感に満ちている。心地よい木陰の風に吹かれて、八軒の楽しい街歩きを爽やかに晴れやかに締めくくろう。',
      surprise: '北海道農業試験場の跡地に整備された広大な園内と、琴似発寒川沿いのポプラ並木の美しさに心が洗われた。',
      hook: '',
      f7_fragment: '北海道農業試験場跡地に整備され、川沿いのポプラ並木が美しい運動公園。',
      f7_full: '「農試公園」のポプラ並木を歩き、歴史と緑が調和する八軒の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Noushi Park tall golden-green poplar avenue beside clear Kotoni-Hassamu River under blue sky, no text, no letters.',
    },
  ],
};
