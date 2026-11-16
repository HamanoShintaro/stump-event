// scripts/areas/chiebun.mjs
// station_order: 880

export default {
  slug: 'chiebun',
  station_order: 880,
  station: '智恵文',
  line: 'JR宗谷本線',
  area_name: '智恵文・ひまわり発祥の里と原生林の神社',
  prefecture: '北海道',
  municipality: '名寄市',
  category: 'ひまわり発祥と直売所',
  budget_tier: 2,
  tags: ['北海道', '名寄市', '智恵文駅', 'ひまわり発祥', 'パンのいしだ'],
  style_genre: 'ink_and_watercolor',
  title: '智恵文・ひまわり発祥の里と原生林神社にパンへ',
  description:
    '明治四十四年開業の「JR智恵文駅」から、原生林が残る「智恵文神社」、名寄のひまわり栽培発祥地「智恵文のひまわり畑」、夏季の朝採り直売所「ちえぶん旬菜」、ハスカップ酵母パンが人気の名寄老舗「パンのいしだ」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Chiebun tiny rural railway station, mossy woodland shrine amidst old-growth forest, sweeping field of golden sunflowers, rustic farm vegetable stand, and bakery loaves with wild berries, full bleed, no text, no letters.',
  question: '名寄「ひまわりのまち」発祥の地・智恵文の駅や原生林の神社、直売所、老舗パン屋を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '明治の開拓期から原生林を残し「智恵文村歌碑」が立つ「智恵文神社」',
      subtext: '大正五年竣工の社殿を囲む原生林の深い静けさに、開拓の記憶が宿っていた。',
      badge: {
        code: 'chiebun_shrine',
        name_ja: '智恵文・原生林の社守',
        subtitle_en: 'Old-Growth Shrine Visitor of Chiebun',
        description: '原生林と智恵文村歌碑が残る智恵文神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a quiet wooden shrine torii framed by dense untouched northern primeval forest trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治三十年栽培開始、名寄ひまわり発祥を伝える「智恵文のひまわり畑」',
      subtext: '一面の黄色い花畑が名寄の夏を象徴する文化の原点だったと知り感動した。',
      badge: {
        code: 'chiebun_sunflower',
        name_ja: '智恵文・ひまわり発祥の地',
        subtitle_en: 'Sunflower Origin Explorer',
        description: '名寄のひまわり栽培発祥の地・智恵文のひまわり畑を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting bright golden sunflowers blooming across rolling northern farmland beneath clear blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '地元の生産者有志が朝採り野菜を届ける「ちえぶん旬菜」',
      subtext: 'みずみずしい地場野菜と生産者たちの温かい手仕事に、農村の豊かさを感じた。',
      badge: {
        code: 'chiebun_shunsai',
        name_ja: '智恵文・朝採り旬菜の恵み',
        subtitle_en: 'Farm Market Guest of Chiebun',
        description: 'ちえぶん旬菜で地元生産者の朝採り野菜に出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a rustic wooden crate brimming with fresh-picked Hokkaido corn, tomatoes, and leafy greens, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '道産小麦と名寄産ハスカップの自家製酵母が香る「パンのいしだ」',
      subtext: 'ハスカップ酵母の風味豊かなパンの美味しさに、旅の疲れも吹き飛んだ。',
      badge: {
        code: 'chiebun_ishida',
        name_ja: '智恵文・ハスカップ酵母パン',
        subtitle_en: 'Artisan Bakery Lover of Ishida',
        description: '老舗ベーカリー パンのいしだで道産小麦と天然酵母のパンを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting crusty golden artisan sourdough loaves beside dark purple Hokkaido haskap berries on a baker board, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'chiebun_master',
    name_ja: '智恵文・ひまわり発祥と天然酵母巡り',
    subtitle_en: 'Chiebun Sunflower & Bakery Master',
    description: 'JR智恵文駅から智恵文神社、ひまわり畑、ちえぶん旬菜、パンのいしだまでを巡った証',
    image_prompt:
      'A circular emblem combining blooming sunflowers, primeval forest shrine, fresh farm vegetables and golden artisan bread, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR智恵文駅',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '1911年（明治44年）11月3日開業（終日開放・無料）。駅名はアイヌ語「チェプ・ウン・トウ（魚のいる沼）」に由来し、かつての智恵文村の玄関口として親しまれてきた無人駅。',
      address: '北海道名寄市字智恵文11線',
      lat: 44.455483,
      lng: 142.414718,
      clue:
        '明治四十四年に開業し、アイヌ語で「魚のいる沼」を意味する地名に由来する旧智恵文村の玄関口「JR智恵文駅」から散策を始めよう（終日利用可）。のどかな田園地帯に佇む素朴な無人駅の爽やかな空気を胸いっぱいに吸い込んで小さな木造風のホームを後にしたら、まずは南南西へ徒歩約二十五分ほどの場所に鎮座し、原生林の豊かな緑が今も大切に守られてきた古い鎮守「智恵文神社」へとゆっくり向かおう。',
      surprise: 'アイヌ語由来の美しい駅名と、旧智恵文村の歴史を今に伝える静かな無人駅の佇まいが印象的だった。',
      hook: 'JR智恵文駅を出たら、開拓の緑が残る「智恵文神社」へ向かおう。',
      f7_fragment: '明治四十四年開業、アイヌ語「魚のいる沼」に由来する無人駅。',
      f7_full: '「JR智恵文駅」に降り立ち、ひまわり発祥の里と原生林の社を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Chiebun Station quiet northern countryside wooden railway stop under wide blue sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '智恵文神社',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '明治33年入植の開拓に端を発し大正5年に社殿竣工（常時参拝可・無料）。境内に原生林が残り「智恵文村歌碑」「御創祀百年記念碑」が立つ。',
      address: '北海道名寄市字智恵文11線北3',
      lat: 44.438907,
      lng: 142.403055,
      clue:
        '原生林に抱かれた「智恵文神社」へ参拝しよう（参拝自由）。大正五年竣工の社殿や「智恵文村歌碑」が村の歴史を静かに伝えている。次は「智恵文のひまわり畑」へ。',
      surprise: '大正五年の社殿を囲む手つかずの原生林と「智恵文村歌碑」に、開拓以来の地域の誇りを感じた。',
      hook: '智恵文神社に参拝したら、名寄ひまわり発祥の「智恵文のひまわり畑」へ向かおう。',
      f7_fragment: '原生林の中に大正五年竣工の社殿と「智恵文村歌碑」が佇む鎮守社。',
      f7_full: '「智恵文神社」の深い原生林の中で手を合わせ、村の開拓史に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Chiebun Shrine wooden sanctuary surrounded by towering ancient northern forest trees and stone monument, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '智恵文のひまわり畑（名寄研究農場周辺）',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '明治30年に智恵文地区でひまわり栽培が始まったことが名寄市「ひまわりに包まれるまち」の発祥とされる（散策自由・無料、見頃は7月下旬〜8月中旬）。',
      address: '北海道名寄市字智恵文7線北2',
      lat: 44.431933,
      lng: 142.430114,
      clue:
        '名寄市が「ひまわりに包まれるまち」と呼ばれる原点となった「智恵文のひまわり畑」周辺をゆっくりと歩いてみよう（散策自由・無料、見頃7月下旬〜8月中旬）。明治三十年にこの智恵文地区でひまわり栽培が始まったことが地域の豊かな農業文化を育ててきたのだと思うと、目の前に広がる農村の風景がいっそう輝いて見える。爽やかな北国の風を感じたら、駅南側の直売所「ちえぶん旬菜」へ向かおう。',
      surprise: '明治三十年という早い時期から智恵文でひまわり栽培が始まっていたという発祥の歴史に驚いた。',
      hook: '智恵文のひまわり畑を眺めたら、直売所「ちえぶん旬菜」へ向かおう。',
      f7_fragment: '明治三十年栽培開始、名寄市「ひまわりに包まれるまち」発祥の農園風景。',
      f7_full: '「智恵文のひまわり畑」周辺を歩き、名寄のシンボルが生まれた大地の広がりに感動した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Chiebun Sunflower Fields vast golden blossoms stretching across rolling Hokkaido farmland under summer sky, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: 'ちえぶん旬菜',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '智恵文の生産者有志による朝採り野菜の地産地消直売所。夏季の土日中心に営業（9:00〜16:00頃目安、季節・天候により変動のため要事前確認）。朝採り野菜等100円〜500円前後。',
      address: '北海道名寄市字智恵文11線南2',
      lat: 44.431876,
      lng: 142.402084,
      clue:
        '地元の生産者有志が愛情を込めて育てた朝採り野菜を持ち寄る直売所「ちえぶん旬菜」へぜひ立ち寄ってみよう（夏季土日中心9:00〜16:00頃、季節変動あり）。素朴な直売所には季節ごとの瑞々しい野菜がずらりと並び、北の大地の豊かな恵みを身近に感じられる。豊かな農村の温かな空気を胸に深く刻んだら、智恵文11線から名士バスに乗り名寄市街の老舗ベーカリー「パンのいしだ」へ向かおう。',
      surprise: '生産者有志が支える素朴な直売所と、朝採り野菜のみずみずしさに農村の温かさを感じた。',
      hook: 'ちえぶん旬菜に立ち寄ったら、名士バスで名寄市街の「パンのいしだ」へ向かおう。',
      f7_fragment: '智恵文の生産者有志が夏季を中心に朝採り野菜を届ける地産地消直売所。',
      f7_full: '「ちえぶん旬菜」の素朴な直売所で、智恵文の豊かな大地の恵みに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a charming rural farmers stand displaying baskets of fresh summer Hokkaido vegetables and corn, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'パンのいしだ（ベーカリーイシダ）',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '北海道産小麦と名寄産ハスカップの自家製天然酵母パンが人気の老舗ベーカリー。8:00〜18:00（売切次第終了）、火曜休（臨時休業あり）。パン各種180〜450円前後。',
      address: '北海道名寄市西4条南2丁目10-1',
      lat: 44.354125,
      lng: 142.457433,
      clue:
        '旅の締めくくりは、智恵文からバスで名寄市街へ出て老舗ベーカリー「パンのいしだ（ベーカリーイシダ）」へ足を運ぼう（8:00〜18:00、火曜休）。北海道産小麦の豊かな風味と、名寄特産ハスカップから起こした自家製天然酵母が織りなす香り高いパンは、一度食べたら忘れられない実に深く優しい味わいだ。焼きたての幸せな香りにたっぷりと包まれて、智恵文の楽しい一日を心から穏やかに結ぼう。',
      surprise: '名寄産ハスカップの自家製天然酵母を使ったパンの奥深い香りと、老舗ならではの優しい食感に魅了された。',
      hook: '',
      f7_fragment: '北海道産小麦と名寄産ハスカップの自家製天然酵母パンが人気の老舗店。',
      f7_full: '「パンのいしだ」でハスカップ酵母の香り高いパンを味わい、智恵文の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Bakery Ishida cozy wooden bakery shelves overflowing with crusty sourdough loaves and sweet berry pastries, no text, no letters.',
    },
  ],
};
