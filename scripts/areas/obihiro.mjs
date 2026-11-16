export default {
  slug: 'obihiro',
  station_order: 635,
  station: '帯広',
  line: 'JR根室本線',
  area_name: '帯広・十勝の豚丼と六花亭の街',
  prefecture: '北海道',
  municipality: '帯広市',
  category: 'グルメとスイーツ',
  budget_tier: 2,
  tags: ['北海道', '帯広市', '帯広駅', '六花亭', '豚丼'],
  style_genre: 'pastel_chalk_morning',
  title: '帯広・十勝の元祖豚丼と名菓の本店を歩く',
  description:
    'JR根室本線帯広駅から、昭和8年創業の元祖豚丼店「元祖ぶた丼ぱんちょう」と帯広のソウルフード「カレーショップ インデアン まちなか店」、十勝の食が集う「北の屋台」、銘菓の本山「六花亭 帯広本店」、大判焼きの名店「高橋まんじゅう屋」を巡る散策路。',
  eyecatch_prompt:
    'Morning pastel chalk and colored pencil illustration of Obihiro town in Tokachi Hokkaido showing a classic charcoal-grilled pork rice bowl diner, local curry shop, lively wooden yatai food alley, flagship confectionery store Rokkatei and steaming oyaki sweet shop, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '十勝の大地が育む濃厚なグルメと名菓の本店が繋がる帯広を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「元祖ぶた丼ぱんちょう」で、炭火の香り豊かな肉厚の豚丼を頬張った瞬間',
      subtext:
        '昭和八年から続く秘伝の甘辛いタレと柔らかな十勝産豚肉が、旅の始まりを力強く満たした。',
      badge: {
        code: 'obihiro_pancho',
        name_ja: '帯広・元祖豚丼ぱんちょうを味わいし者',
        subtitle_en: 'Taster of Obihiro Butadon',
        description:
          '元祖ぶた丼ぱんちょうを訪ね、昭和八年創業の炭火焼き豚丼を堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a lacquered Japanese donburi bowl brimming with glossy charcoal-grilled pork slices and green peas, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「カレーショップ インデアン まちなか店」で、十勝っ子が愛する濃厚カレーを味わった瞬間',
      subtext:
        '鍋を持参して買いに来る地元の人々とともに、帯広に根付いた日常のソウルフードに出会った。',
      badge: {
        code: 'obihiro_indian',
        name_ja: '帯広・インデアンカレーを嗜みし者',
        subtitle_en: 'Patron of Indian Curry',
        description:
          'カレーショップ インデアン まちなか店を訪ね、帯広市民に愛される名物カレーを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a stainless steel platter of thick rich Japanese curry with pickled ginger beside it, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「六花亭 帯広本店」の二階喫茶室で、本店限定のサクサクパイや珈琲を味わった瞬間',
      subtext:
        '花柄の包装紙で知られる名店の原点で、十勝の乳製品を使った極上のスイーツに出会った。',
      badge: {
        code: 'obihiro_rokkatei',
        name_ja: '帯広・六花亭本店で寛ぎし者',
        subtitle_en: 'Guest of Rokkatei Flagship',
        description:
          '六花亭 帯広本店を訪ね、十勝の恵みを活かした本店限定の菓子と喫茶の空間を楽しんだ証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a flaky cylindrical cream-filled pastry and butter sandwich biscuit beside a delicate wildflower ceramic coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「高橋まんじゅう屋」の店先で、湯気の立つアツアツの大判焼きと肉まんに出会った瞬間',
      subtext:
        'たかまんの愛称で親しまれる老舗の素朴な美味しさが、帯広の街歩きの最後を温めた。',
      badge: {
        code: 'obihiro_takaman',
        name_ja: '帯広・たかまんの大判焼きを買いし者',
        subtitle_en: 'Visitor of Takaman Shop',
        description:
          '高橋まんじゅう屋を訪ね、市民に親しまれる熱々の大判焼きや蒸しパンの温もりに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting golden-brown round Japanese obanyaki cakes filled with sweet red bean paste and melted cheese on parchment paper, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'obihiro_complete',
    name_ja: '帯広・十勝の名物グルメと名菓を巡る旅人',
    subtitle_en: 'Explorer of Obihiro Town',
    description:
      '元祖ぶた丼ぱんちょうからインデアン、北の屋台、六花亭 帯広本店、高橋まんじゅう屋までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a charcoal-grilled pork bowl, a delicate cream pastry and golden obanyaki cakes, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '元祖ぶた丼ぱんちょう',
      spot_type: '食事',
      description:
        '昭和8年（1933年）創業、帯広名物「豚丼」の発祥として知られる老舗名店。炭火で香ばしく焼き上げた豚ロースと秘伝の甘辛いタレが絶品。11:00〜19:00、月曜・第1・3火曜休。',
      address: '北海道帯広市西1条南11丁目19',
      prefecture: '北海道',
      municipality: '帯広市',
      lat: 42.919252,
      lng: 143.203466,
      clue: 'JR根室本線の帯広駅北口を出たら、まずは駅前からすぐの老舗「元祖ぶた丼ぱんちょう」へ足を運ぼう（11:00〜19:00、月曜・第1・3火曜休）。昭和八年創業、帯広名物「豚丼」の生みの親として全国に名を馳せる名店で、炭火で丁寧に焼き上げた柔らかな豚ロースに秘伝の甘辛いタレを絡めた一杯が味わえる。香ばしい炭の香りに包まれながら、十勝・帯広の食の魅力を巡る散策を力強く始めたい。',
      surprise:
        '丼の蓋を開けた瞬間に立ち上る炭火の香ばしさと、脂の甘みが溶け合う柔らかな豚肉の美味しさに思わず唸る。メニューが松・竹・梅・華と豚肉の枚数だけで選ばれる潔さも老舗ならではの風格で、帯広の食文化の原点に出会えた喜びが胸に広がる。',
      hook: '豚丼を堪能したら、北北西へ徒歩4分のカレーショップ インデアン まちなか店を覗こう。',
      f7_fragment: '昭和八年創業、炭火焼きの香ばしさが際立つ帯広豚丼の元祖名店。',
      f7_full: '駅前の老舗「元祖ぶた丼ぱんちょう」で炭火香る元祖豚丼を味わい、十勝・帯広の力強い食文化の原点に触れた。',
      image_prompt:
        'Traditional Japanese diner counter serving a lacquered bowl of charcoal-grilled Obihiro pork slices glistening with sweet soy glaze over steamed rice, no text, no people.',
    },
    {
      name: 'カレーショップ インデアン まちなか店',
      spot_type: '食事',
      description:
        '帯広・十勝の人々に熱愛されるご当地カレーチェーンの中心街店。じっくり煮込んだ濃厚なルーとリーズナブルな価格で鍋持参の地元客も多い。11:00〜21:00、年末年始休。',
      address: '北海道帯広市西2条南10丁目1-1',
      prefecture: '北海道',
      municipality: '帯広市',
      lat: 42.921203,
      lng: 143.202073,
      clue: 'ぱんちょうから北北西へ徒歩4分、帯広市民のソウルフード「カレーショップ インデアン まちなか店」へ立ち寄ろう（11:00〜21:00）。十勝エリアのみに展開し、地元の人々が鍋を持参してルーを買いに訪れるほど日々の暮らしに深く根付いた名店だ。牛肉の旨みが溶け込んだ濃厚なインデアンルーの香りに触れ、この街ならではの飾らない食の活気を肌でこれからもじっくりしっかりと感じたい。',
      surprise:
        '北海道の他の都市にはほとんど出店せず、十勝の人々の暮らしとともにある特別感がこの店の最大の魅力といえる。目の前で手際よく盛り付けられる濃厚なカレーの香ばしさと活気あるカウンターの空気は、帯広という街の温かさをそのまま映している。',
      hook: 'カレーの香りを感じたら、東へ徒歩2分の北の屋台の通りを歩いてみよう。',
      f7_fragment: '十勝っ子が愛してやまない、濃厚な味わいの帯広ご当地カレーの名店。',
      f7_full: '「カレーショップ インデアン まちなか店」で市民に愛されるソウルフードの香りと活気に触れ、帯広の日常を体感した。',
      image_prompt:
        'Cozy retro Japanese curry shop counter with a gleaming stainless steel oval plate of rich dark beef curry and rice, no text, no people.',
    },
    {
      name: '北の屋台',
      spot_type: '見どころ',
      description:
        '十勝の豊かな食材を活かした個性豊かな約20軒の屋台が軒を連ねる帯広名物の屋台村。昼間は静かな路地の佇まいも楽しい。夜17:00〜24:00頃営業（店舗・日曜定休等異なる）。',
      address: '北海道帯広市西1条南10丁目7',
      prefecture: '北海道',
      municipality: '帯広市',
      lat: 42.921033,
      lng: 143.203417,
      clue: 'インデアンから東へ徒歩2分、木造の屋台が並ぶ「北の屋台」の通りを抜けてみよう（夜17:00〜営業）。十勝の食と人情が集まる名物路地の雰囲気を味わいたい。',
      surprise:
        '整然とした碁盤目状の帯広の市街地の中に、木の温もりと赤提灯が並ぶ親密な路地空間が息づいているのが素敵だ。十勝産のジビエやチーズ、旬の野菜を扱う多彩な屋台が肩を並べる光景に、夜にもう一度訪れたくなる旅心がくすぐられる。',
      hook: '屋台村を抜けたら、北北西へ徒歩3分の六花亭 帯広本店で銘菓と喫茶を楽しもう。',
      f7_fragment: '十勝の旬と温かな人情が約二十軒の屋台に集う、帯広の名物路地。',
      f7_full: '「北の屋台」の木造屋台が並ぶ路地を歩き、十勝の豊かな食材と人が集う帯広の温かな夜の気配に触れた。',
      image_prompt:
        'Charming Japanese wooden yatai food-stall alley of Kita no Yatai with warm paper lanterns, timber facades and cobblestone lane, no text, no people.',
    },
    {
      name: '六花亭 帯広本店',
      spot_type: '休憩',
      description:
        '北海道を代表する銘菓「マルセイバターサンド」の本店。1階のショップに加え、2階喫茶室では本店・一部店舗限定の「サクサクパイ」などを味わえる。店舗10:00〜18:00、喫茶11:00〜16:30（水曜休）。',
      address: '北海道帯広市西2条南9丁目6',
      prefecture: '北海道',
      municipality: '帯広市',
      lat: 42.922278,
      lng: 143.202506,
      clue: '屋台の通りから北北西へ徒歩3分、北海道銘菓の殿堂「六花亭 帯広本店」へ入ろう（店舗10:00〜18:00・喫茶11:00〜16:30・水曜休）。一階には十勝産バターを使った定番の「マルセイバターサンド」や季節の和洋菓子が美しく並び、二階の喫茶室では賞味期限わずか三時間とも謳われる名物「サクサクパイ」や珈琲が楽しめる。名菓のふるさと帯広ならではの贅沢な甘い休息をぜひ味わいたい。',
      surprise:
        '全国に知られる名菓の本店でありながら、地元のお客さんが日常のおやつに一個からお菓子を買い求める気取らなさに好感が持てる。二階喫茶室でいただくサクサクパイの軽やかな食感と十勝産生クリームの清らかな美味しさは、本店まで足を運んだ旅人だけの特権だ。',
      hook: '銘菓と珈琲で寛いだら、北北東へ徒歩9分の高橋まんじゅう屋へ向かい旅を結ぼう。',
      f7_fragment: 'マルセイバターサンドの原点、本店限定の喫茶と十勝菓子が揃う殿堂。',
      f7_full: '「六花亭 帯広本店」の喫茶室で本店限定のサクサクパイと珈琲を味わい、十勝の乳製品と菓子文化の粋を堪能した。',
      image_prompt:
        'Bright elegant Japanese confectionery cafe table in Rokkatei Obihiro displaying crispy cream-filled cylindrical pie pastry and floral porcelain coffee cup, no text, no people.',
    },
    {
      name: '高橋まんじゅう屋',
      spot_type: '買い物',
      description:
        '「たかまん」の愛称で帯広市民に半世紀以上親しまれる老舗のおやき（大判焼き）・肉まん店。あんやチーズの大判焼き、蒸しパン、ソフトクリームが人気。9:00〜18:00、水曜・第2・3火曜休。',
      address: '北海道帯広市東1条南5丁目19-4',
      prefecture: '北海道',
      municipality: '帯広市',
      lat: 42.926468,
      lng: 143.20604,
      clue: '六花亭から北北東へ徒歩9分、地元の人々が「たかまん」と呼んで親しむ「高橋まんじゅう屋」で旅を締めくくろう（9:00〜18:00、水曜・第2・3火曜休）。昭和二十九年創業の老舗で、銅板で香ばしく焼き上げる大判焼き（あん・チーズ）やふっくらした肉まん、素朴な蒸しパンが絶え間なく買い求められている。十勝の豊かな食と菓子を巡った帯広散策を、湯気立つ優しい甘味で温かく結びたい。',
      surprise:
        'ひっきりなしに地元の人々が訪れて十個二十個とまとめて買っていく活気ある光景に、帯広の暮らしに欠かせない名店であることを実感する。とろりと塩気のあるチーズや十勝産小豆のあんが詰まった焼きたての大判焼きを頬張れば、旅の疲れもすっと溶けていく。',
      hook: '',
      f7_fragment: '「たかまん」の名で愛され続ける、焼きたて大判焼きと肉まんの帯広老舗。',
      f7_full: '市民に愛される老舗「高橋まんじゅう屋」で熱々の大判焼きに出会い、十勝の食と甘味が溢れる帯広の散策を結んだ。',
      image_prompt:
        'Warm nostalgic Japanese street-corner oyaki sweet shop counter with golden-brown round obanyaki cakes and rising steam from bamboo steamer, no text, no people.',
    },
  ],
};
