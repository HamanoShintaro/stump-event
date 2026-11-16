export default {
  slug: 'fukushima',
  station_order: 651,
  station: '福島',
  line: 'JR東北新幹線',
  area_name: '福島・稲荷の杜と阿武隈川の旧邸宅',
  prefecture: '福島県',
  municipality: '福島市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['福島県', '福島市', '福島駅', '珈琲グルメ', '御倉邸'],
  style_genre: 'editorial_clean_ink',
  title: '福島・稲荷の杜と阿武隈川の御倉邸を歩く',
  description:
    'JR福島駅から、県内の銘品が揃う「福島県観光物産館」とレトロモダンな老舗喫茶「自家焙煎 珈琲グルメ」、平安時代創建の総鎮守「福島稲荷神社」、福島城跡の面影を残す「紅葉山公園（板倉神社）」、昭和2年建築の「御倉邸」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Fukushima city showing the traditional wooden Meiji-Showa era Okuratei residence overlooking the wide Abukuma River, vermilion torii of Fukushima Inari Shrine, autumn maple garden of Momijiyama Park, and cozy retro coffee house, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '街なかのレトロ喫茶から平安の古社、そして阿武隈川の静かな日本庭園へと繋がる福島を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「福島県観光物産館」で、会津・中通り・浜通りの地酒や郷土菓子を眺めた瞬間',
      subtext:
        '福島県全域の魅力が一堂に集まる玄関口で、これから巡る土地の豊かさに胸が高鳴った。',
      badge: {
        code: 'fukushima_bussankan',
        name_ja: '福島・観光物産館で県の銘品に出会いし者',
        subtitle_en: 'Visitor of Fukushima Market',
        description:
          '福島県観光物産館を訪ね、県内各地の地酒や伝統銘菓、工芸品の魅力に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting traditional Japanese wooden crafts, round Akabeko folk toy and wrapped local sweets on a display shelf, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「自家焙煎 珈琲グルメ」の落ち着いた店内で、香り高い珈琲と名物スイーツを味わった瞬間',
      subtext:
        '駅前で半世紀近く愛される純喫茶の温かな空気が、旅の歩みを心地よくほぐしてくれた。',
      badge: {
        code: 'fukushima_coffeegourmet',
        name_ja: '福島・駅前の自家焙煎珈琲を嗜みし者',
        subtitle_en: 'Guest of Coffee Gourmet',
        description:
          '自家焙煎 珈琲グルメを訪ね、レトロモダンな空間で丁寧な珈琲と食事を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a classic porcelain coffee cup with dark roast coffee and a baked gratin dish on a warm wooden cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「福島稲荷神社」の朱の鳥居をくぐり、千年の歴史を持つ総鎮守に手を合わせた瞬間',
      subtext:
        '永延元年に安倍晴明が創建したと伝わる古社が、城下町福島の心を今も静かに守っていた。',
      badge: {
        code: 'fukushima_inari',
        name_ja: '福島・安倍晴明ゆかりの稲荷神社を詣でし者',
        subtitle_en: 'Worshipper of Fukushima Inari',
        description:
          '福島稲荷神社を訪ね、平安時代から続く福島総鎮守の社殿へ参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a vermilion Shinto shrine torii gate and stone fox guardian beneath tall green cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「御倉邸」の和室縁側から、阿武隈川の雄大な流れと日本庭園を眺めた瞬間',
      subtext:
        '昭和二年建築の旧日銀支店長役宅の静けさが、街歩きの終着点を品格ある余韻で包んでくれた。',
      badge: {
        code: 'fukushima_okuratei',
        name_ja: '福島・阿武隈川ほとりの御倉邸に寛ぎし者',
        subtitle_en: 'Visitor of Okuratei Villa',
        description:
          '御倉邸を訪ね、昭和初期の純和風建築と阿武隈川を望む庭園を鑑賞した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing a tranquil wooden Japanese veranda overlooking a manicured pine garden and the wide flowing Abukuma River, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'fukushima_complete',
    name_ja: '福島・稲荷の杜と御倉邸を巡る旅人',
    subtitle_en: 'Walker of Fukushima',
    description:
      '福島県観光物産館から珈琲グルメ、福島稲荷神社、紅葉山公園、御倉邸までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a traditional Japanese villa veranda overlooking a river, a vermilion Inari shrine torii and a porcelain coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '福島県観光物産館（コラッセふくしま）',
      spot_type: '買い物',
      description:
        'JR福島駅西口徒歩3分、コラッセふくしま1階にある県内全域の名産品が集う物産館。地酒や銘菓、伝統工芸品が揃う。9:30〜19:00、年中無休。',
      address: '福島県福島市三河南町1-20',
      prefecture: '福島県',
      municipality: '福島市',
      lat: 37.75682,
      lng: 140.458127,
      clue: 'JR福島駅の西口から歩いてわずか3分、コラッセふくしま1階の「福島県観光物産館」から旅を始めよう（9:30〜19:00、年中無休）。広大な福島県の会津・中通り・浜通り各地から選りすぐりの地酒やくるみゆべし・ままどおるなどの銘菓、赤べこやこけしの工芸品までが一堂に揃う。気になるお土産を下見しながら、城下町・福島の街歩きへこれからもずっと胸を弾ませて元気に楽しく踏み出したい。',
      surprise:
        'コラッセふくしまの12階には無料の展望ラウンジもあり、晴れた日には福島市街や吾妻連峰の雄大な山並みを一望することができる。',
      hook: '県の銘品を眺めたら、東西自由通路を抜けて東口の自家焙煎 珈琲グルメで一息つこう。',
      f7_fragment: '福島駅西口すぐ、県内全域の銘菓と地酒が一堂に揃う玄関口。',
      f7_full:
        '「福島県観光物産館」で県内各地の銘菓や工芸品を眺め、福島の土地が育む豊かな魅力に触れた。',
      image_prompt:
        'Bright inviting Japanese regional craft and sweets shop interior with wooden shelves displaying Akabeko folk toys and gift boxes in editorial clean ink style, no text, no letters.',
    },
    {
      name: '自家焙煎 珈琲グルメ',
      spot_type: '休憩',
      description:
        'JR福島駅東口から徒歩約3分、レトロモダンな空間で自家焙煎コーヒーや名物のドリア、スイーツが楽しめる老舗喫茶。日〜木11:00〜21:00・金土〜22:00、年中無休（元日除く）。',
      address: '福島県福島市栄町7-33 錦ビル2F',
      prefecture: '福島県',
      municipality: '福島市',
      lat: 37.75395,
      lng: 140.462123,
      clue: '駅の東口へ出て駅前通りの「自家焙煎 珈琲グルメ」へ立ち寄ろう（11:00〜21:00／金土〜22:00、元日休）。階段を上がった先には温かな照明と落ち着いた木調の空間が広がり、丁寧にネルドリップされた自家焙煎珈琲や名物の熱々ドリア、季節のパフェが旅人を迎えてくれる。駅前の賑わいから少し離れて深い香りにくつろぎ、神社と庭園の散策へこれからもずっと心地よく豊かに備えよう。',
      surprise:
        '創業以来、地元の人々や出張客の憩いの場として愛され続けており、福島名産の桃を使った季節限定メニューも人気が高い。',
      hook: '珈琲で目覚めたら、東へ歩いて平安創建の総鎮守・福島稲荷神社へ参拝しよう。',
      f7_fragment: '福島駅東口そばで自家焙煎の香りとレトロな空気を守る老舗喫茶。',
      f7_full:
        '「自家焙煎 珈琲グルメ」の落ち着いた空間で香り高い珈琲を味わい、福島の街歩きの心地よい序章を過ごした。',
      image_prompt:
        'Warm retro-modern Japanese coffee house interior in Fukushima with dark wood tables, glowing pendant lamps and porcelain coffee cup in editorial clean ink style, no text, no letters.',
    },
    {
      name: '福島稲荷神社',
      spot_type: '見どころ',
      description:
        '平安時代の永延元年（987年）に陰陽師・安倍晴明によって創建されたと伝わる福島市の総鎮守。境内自由（社務所9:00〜17:00）、無休。',
      address: '福島県福島市宮町1-29',
      prefecture: '福島県',
      municipality: '福島市',
      lat: 37.755677,
      lng: 140.468805,
      clue: '東口から東へ歩き、永延元年に安倍晴明が創建したと伝わる総鎮守「福島稲荷神社」へ参拝しよう（社務所9:00〜17:00）。千年の歴史を誇る杜に静かに手を合わせたい。',
      surprise:
        'かつて境内周辺に福島競馬場ゆかりの信仰があったことから珍しい「競馬勝守り」や、名産の桃をかたどった「桃守り」も授与されている。',
      hook: 'お参りを終えたら、南の福島城跡に広がる紅葉山公園（板倉神社）へ向かおう。',
      f7_fragment: '平安時代に安倍晴明が創建したと伝わる、福島市の千年総鎮守。',
      f7_full:
        '「福島稲荷神社」の朱の鳥居をくぐって参拝し、平安時代から福島の街を見守り続ける千年の歴史に触れた。',
      image_prompt:
        'Vermilion torii gate and stately wooden Shinto shrine pavilion of Fukushima Inari Shrine surrounded by mature cedar trees in editorial clean ink style, no text, no letters.',
    },
    {
      name: '紅葉山公園（板倉神社）',
      spot_type: '見どころ',
      description:
        '江戸時代の福島城二の丸御外庭跡に整備された庭園風の歴史公園。旧福島藩主・板倉家の祖を祀る板倉神社や美しい日本庭園が街なかに静かな彩りを添える。散策自由・無休。',
      address: '福島県福島市杉妻町2-35',
      prefecture: '福島県',
      municipality: '福島市',
      lat: 37.750495,
      lng: 140.468957,
      clue: '稲荷神社から南へ歩いて福島県庁の南側に出ると、かつての福島城二の丸御外庭跡に整備された「紅葉山公園（板倉神社）」が広がっている（散策自由・無休）。旧福島藩主・板倉家の祖先を祀る板倉神社が鎮座し、池や石灯籠、四季折々の紅葉や松が城跡の気品を静かに伝えている。阿武隈川をすぐそこに感じながら、旧城下町の静謐な空気と美しい庭園の風情をこれからもずっと心穏やかに深くじっくり味わいたい。',
      surprise:
        '福島城は明治維新後に取り壊されたが、この紅葉山公園の一角には城内の庭園の面影が大切に受け継がれ、市民の憩いの場となっている。',
      hook: '紅葉山公園を出たら、南西の阿武隈川ほとりに建つ御倉邸を訪ねて旅を結ぼう。',
      f7_fragment: '福島城本丸跡に造られた日本庭園と板倉神社が残る、静かな歴史公園。',
      f7_full:
        '福島城跡の「紅葉山公園（板倉神社）」を歩き、板倉家が治めた城下町の静謐な庭園風景に心を休めた。',
      image_prompt:
        'Serene Japanese castle-site garden Momijiyama Park with stone lanterns, calm pond and red maple trees beside Itakura Shrine in editorial clean ink style, no text, no letters.',
    },
    {
      name: '御倉邸',
      spot_type: '見どころ',
      description:
        '昭和2年（1927年）に建てられた旧日本銀行福島支店長役宅を一般公開している歴史的建造物。阿武隈川を望む純和風建築と庭園が美しい。10:00〜18:00、火曜・年末年始休、無料。',
      address: '福島県福島市御倉町1-78',
      prefecture: '福島県',
      municipality: '福島市',
      lat: 37.747629,
      lng: 140.465972,
      clue: '紅葉山公園から阿武隈川沿いへ歩いて数分、昭和二年建築の旧日本銀行福島支店長役宅「御倉邸」で旅を締めくくろう（10:00〜18:00、火曜休、無料）。趣ある純和風の木造平屋からは手入れの行き届いた日本庭園と雄大な阿武隈川の流れを一望でき、敷地内の「おぐら茶屋」でひと息つくのも心地よい。喫茶と神社と水辺の邸宅を巡った福島の旅を、これからもずっと心静かに美しく上品に結びたい。',
      surprise:
        '江戸時代にはこの辺りに福島藩の米蔵（御蔵）が建ち並んでいたことから「御倉町」という地名が残り、水運で栄えた往時を物語っている。',
      hook: '',
      f7_fragment: '昭和二年建築の旧日銀支店長役宅から阿武隈川を望む、無料の和風邸宅。',
      f7_full:
        '阿武隈川ほとりの「御倉邸」で純和風建築と日本庭園の静けさに浸り、福島の歴史と街を巡る旅を上品に結んだ。',
      image_prompt:
        'Historic Showa-era wooden Japanese residence Okuratei with open tatami veranda overlooking pine garden and wide Abukuma River in editorial clean ink style, no text, no letters.',
    },
  ],
};
