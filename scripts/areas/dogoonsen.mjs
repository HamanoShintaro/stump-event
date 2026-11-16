export default {
  slug: 'dogoonsen',
  station_order: 678,
  station: '道後温泉',
  line: '伊予鉄城南線',
  area_name: '道後温泉・神の湯と湯築城の杜',
  prefecture: '愛媛県',
  municipality: '松山市',
  category: '温泉と自然',
  budget_tier: 3,
  tags: ['愛媛県', '松山市', '道後温泉駅', '温泉', '日本三古湯'],
  style_genre: 'ukiyo_e_modern',
  title: '道後温泉・本館と飛鳥乃湯泉から湯築城跡へ',
  description:
    '伊予鉄道・道後温泉駅から、坊っちゃんカラクリ時計が迎える「道後温泉駅」、2024年7月に全館営業再開した重要文化財「道後温泉本館」、飛鳥様式の「道後温泉別館 飛鳥乃湯泉」、八幡造の国宝級古社「伊佐爾波神社」、日本100名城「湯築城跡（道後公園）」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Dogo Onsen showing the ornate three-story wooden Dogo Onsen Honkan bathhouse with its heron-crowned Shinrokaku rooftop tower and rising steam, the retro Meiji-style Dogo Onsen tram station, vermilion hillside Isaniwa Shrine steps, and green moat and earthen ramparts of Yuzuki Castle Park, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '三千年の湯けむりと蘇った明治の木造湯屋、道後の歴史を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「道後温泉本館」の重厚な木造三層楼の前に立ち、振鷺閣の白鷺を見上げた瞬間',
      subtext:
        '約5年半の保存修理を終えて全館再開した威容に、日本最古の温泉地の誇りを感じた。',
      badge: {
        code: 'dogoonsen_honkan',
        name_ja: '道後温泉・蘇りし本館を仰ぎ見し者',
        subtitle_en: 'Visitor of Dogo Onsen Honkan',
        description:
          '道後温泉本館を訪ね、2024年7月に全館営業再開した重要文化財の湯屋を仰ぎ見た証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the ornate three-story wooden Dogo Onsen Honkan bathhouse with its rooftop drum tower and white heron finial, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「飛鳥乃湯泉」の中庭に立ち、愛媛の伝統工芸と飛鳥様式の湯屋を眺めた瞬間',
      subtext:
        '古代のロマンと現代の職人の技が溶け合う優美な空間が、道後の新しい魅力を教えてくれた。',
      badge: {
        code: 'dogoonsen_asuka',
        name_ja: '道後温泉・飛鳥の湯屋を訪ねし者',
        subtitle_en: 'Visitor of Asuka-no-Yu',
        description:
          '道後温泉別館 飛鳥乃湯泉を訪ね、飛鳥建築様式と愛媛の伝統工芸に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an elegant Asuka-period style curved tile roof pavilion and warm glowing paper lanterns beside a courtyard camellia tree, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「伊佐爾波神社」の百三十五段の石段を登り、朱塗りの社殿から街を見下ろした瞬間',
      subtext:
        '全国でも珍しい八幡造の重要文化財社殿と、高台からの爽やかな眺めが心地よかった。',
      badge: {
        code: 'dogoonsen_isaniwa',
        name_ja: '道後温泉・伊佐爾波の石段を登りし者',
        subtitle_en: 'Worshipper at Isaniwa Shrine',
        description:
          '伊佐爾波神社を訪ね、国の重要文化財である朱塗りの八幡造社殿へ参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting steep stone shrine steps leading up to a vibrant vermilion Hachiman-zukuri shrine gate beneath pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「湯築城跡（道後公園）」の内堀と復元武家屋敷を歩き、伊予の中世史に触れた瞬間',
      subtext:
        '温泉街のすぐそばに広がる緑豊かな史跡公園が、道後の旅を静かに締めくくってくれた。',
      badge: {
        code: 'dogoonsen_yuzuki',
        name_ja: '道後温泉・湯築城跡の杜を歩きし者',
        subtitle_en: 'Walker of Yuzuki Castle Ruins',
        description:
          '湯築城跡（道後公園）を訪ね、中世河野氏の居城跡と復元武家屋敷を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting restored wooden samurai residences behind green earthen ramparts and calm moat water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'dogoonsen_complete',
    name_ja: '道後温泉・神の湯と城跡を巡る旅人',
    subtitle_en: 'Walker of Dogo Onsen',
    description:
      '道後温泉駅から道後温泉本館、飛鳥乃湯泉、伊佐爾波神社、湯築城跡までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining Dogo Onsen Honkan rooftop tower, a classic retro tram, and vermilion shrine eaves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '道後温泉駅',
      spot_type: '見どころ',
      description:
        '明治44年（1911年）建築の旧駅舎を復元した洋風駅舎がシンボルの玄関口。駅前の放生園には「坊っちゃんカラクリ時計」と無料の足湯がある。利用自由。',
      address: '愛媛県松山市道後町1-10-12',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.850405,
      lng: 132.785049,
      clue: '明治期の洋風駅舎を復元したレトロな佇まいが迎えてくれる「道後温泉駅」から、湯の街の散策を始めよう（駅周辺見学自由）。駅前の放生園には小説『坊っちゃん』の登場人物が定時に顔を覗かせる「坊っちゃんカラクリ時計」や無料の足湯があり、観光客の笑顔が絶えない。ハイカラ通りと呼ばれる商店街の入口をくぐり、三千年の歴史を誇る温泉街へこれからも心弾ませて元気に笑顔で軽やかに踏み出したい。',
      surprise:
        '駅前広場には伊予鉄道のシンボル「坊っちゃん列車」が発着する線路が敷かれており、汽笛とレトロな車体が旅情を一層盛り上げます。',
      hook: '駅前から商店街を抜け、北東にそびえる道後温泉本館の威容を仰ぎに行こう。',
      f7_fragment: 'レトロな洋風駅舎が迎える玄関口、坊っちゃんカラクリ時計と足湯が人気。',
      f7_full:
        '「道後温泉駅」のレトロな駅舎と放生園のカラクリ時計に出合い、湯の街の旅を始めた。',
      image_prompt:
        'Charming Meiji-era western-style wooden train station illustration of Dogo Onsen Station in Matsuyama, green gable roofs, vintage tram on cobblestone plaza and warm lantern light, no text, no letters.',
    },
    {
      name: '道後温泉本館',
      spot_type: '見どころ',
      description:
        '明治27年（1894年）建築の木造三層楼、公衆浴場として日本初の国の重要文化財。約5年半の保存修理工事を終え2024年7月11日に全館営業再開した。6:00〜23:00、神の湯階下700円〜。',
      address: '愛媛県松山市道後湯之町5-6',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.852075,
      lng: 132.78641,
      clue: '明治27年建築の木造三層楼で、公衆浴場として初めて国の重要文化財に指定された「道後温泉本館」を訪ねよう（6:00〜23:00・神の湯700円〜）。約5年半の大規模な保存修理工事を終えて2024年7月に全館営業を再開し、白鷺を戴く振鷺閣や重厚な湯屋の姿が再び街を見守っている。夏目漱石も愛した三千年の名湯の佇まいを、これからも日本の誇る湯文化として深く大切に心に仰ぎ見たい。',
      surprise:
        '本館の東側には皇室専用の浴槽「又新殿（ゆうしんでん）」が設けられており、見学コースで明治時代の洗練された意匠を鑑賞できます。',
      hook: '本館の威容に見入ったら、西へすぐの飛鳥乃湯泉で伝統工芸の美に触れよう。',
      f7_fragment: '2024年7月に全館営業再開した重要文化財の木造三層楼、道後のシンボル。',
      f7_full:
        '「道後温泉本館」の蘇った木造三層楼と振鷺閣の白鷺を見上げ、古湯の誇りを感じた。',
      image_prompt:
        'Iconic modern ukiyo-e illustration of Dogo Onsen Honkan bathhouse in Matsuyama, ornate three-story dark timber building topped by the Shinrokaku pavilion and white heron finial amidst rising bathhouse steam, no text, no letters.',
    },
    {
      name: '道後温泉別館 飛鳥乃湯泉',
      spot_type: '休憩',
      description:
        '聖徳太子の来浴伝説にちなみ飛鳥時代の建築様式を取り入れた外湯。中庭の椿の森や館内の砥部焼・今治タオルなどの伝統工芸アートが見事。6:00〜23:00、1階浴室大人610円。',
      address: '愛媛県松山市道後湯之町19-22',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.852401,
      lng: 132.784651,
      clue: '聖徳太子の来浴伝説にちなんだ飛鳥様式の外湯「道後温泉別館 飛鳥乃湯泉」へ立ち寄ろう（6:00〜23:00・1階610円）。中庭の椿の森と愛媛の伝統工芸が彩る空間を味わいたい。',
      surprise:
        '中庭には約30種類の椿が植えられた「ハダカノモリ」があり、足元を彩る伝統の玉石敷きとともに優雅な湯上がりの空間を演出しています。',
      hook: '飛鳥の美に触れたら、東の高台にある伊佐爾波神社の石段を登ろう。',
      f7_fragment: '飛鳥時代の建築様式を取り入れた外湯、愛媛の伝統工芸アートが彩る。',
      f7_full:
        '「飛鳥乃湯泉」の中庭に立ち、飛鳥様式の屋根と愛媛の伝統工芸が織りなす美に触れた。',
      image_prompt:
        'Elegant Japanese bathhouse pavilion illustration of Asuka-no-Yu in Dogo, graceful wide curved tiled roof, warm wooden pillars and glowing courtyard camellia trees at twilight, no text, no letters.',
    },
    {
      name: '伊佐爾波神社',
      spot_type: '見どころ',
      description:
        '道後温泉街を見下ろす高台に鎮座する古社。全国に3例しか残らない「八幡造」の社殿は国の重要文化財に指定されている。境内参拝自由（授与所9:00〜17:00）、無料。',
      address: '愛媛県松山市桜谷町173',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.850729,
      lng: 132.788794,
      clue: '道後温泉街の東側の高台に鎮座する「伊佐爾波神社」へ参拝しよう（境内自由・授与所9:00〜17:00、無料）。百三十五段の真っ直ぐな石段を登りきると、鮮やかな朱塗りが目を引く楼門と全国でも数例しか現存しない「八幡造」の社殿が迎えてくれる。国の重要文化財に指定された優美な建築を仰ぎ見ながら、温泉街を見下ろす爽やかな眺望をこれからも心穏やかにたっぷりとじっくりと味わいたい。',
      surprise:
        '境内には和算の問題を記して奉納された「算額」が数多く残されており、江戸時代の伊予における学問の盛んな様子を伝えています。',
      hook: '高台の社を参拝したら、南西へ下って緑豊かな湯築城跡（道後公園）で旅を結ぼう。',
      f7_fragment: '百三十五段の石段の上に立つ朱塗りの古社、重要文化財の八幡造社殿。',
      f7_full:
        '「伊佐爾波神社」の石段を登り、朱塗りの八幡造社殿と高台からの眺めを堪能した。',
      image_prompt:
        'Dignified Japanese shrine illustration of Isaniwa Shrine in Dogo, steep straight stone stairway ascending toward a vibrant vermilion tower gate surrounded by pine and cedar trees, no text, no letters.',
    },
    {
      name: '湯築城跡（道後公園）',
      spot_type: '見どころ',
      description:
        '中世に伊予を治めた河野氏の居城跡で、日本100名城に選ばれた史跡公園。二重の堀と土塁の中に復元された武家屋敷や湯築城資料館がある。公園常時開園（資料館9:00〜17:00・月曜休）、無料。',
      address: '愛媛県松山市道後公園1-1',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.847961,
      lng: 132.786691,
      clue: '中世に伊予国を治めた豪族・河野氏の居城跡を整備した「湯築城跡（道後公園）」で旅を締めくくろう（公園常時開放・資料館9:00〜17:00、月曜休、無料）。二重の堀と土塁に守られた広大な園内には発掘調査をもとに復元された武家屋敷や資料館があり、中世城郭の暮らしを間近に体感できる。緑豊かな史跡公園の中で、道後の湯と歴史を巡った余韻をこれからも静かに大切にずっと美しく結びたい。',
      surprise:
        '園内の丘の上にある展望台からは道後温泉の街並みや松山城の天守を遠く望むことができ、春の桜の名所としても市民に愛されています。',
      hook: '',
      f7_fragment: '河野氏の居城跡を整備した日本100名城、復元武家屋敷と二重の堀が残る。',
      f7_full:
        '「湯築城跡（道後公園）」の内堀と復元武家屋敷を歩き、道後の歴史散歩を締めくくった。',
      image_prompt:
        'Peaceful historic castle park illustration of Yuzuki Castle Ruins in Dogo Park, restored wooden samurai houses behind green earthen ramparts and calm moat water shaded by cherry and pine trees, no text, no letters.',
    },
  ],
};
