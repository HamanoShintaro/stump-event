export default {
  slug: 'shimonoseki',
  station_order: 638,
  station: '下関',
  line: 'JR山陽本線・山陰本線',
  area_name: '下関・関門海峡と唐戸の港町',
  prefecture: '山口県',
  municipality: '下関市',
  category: '海峡と歴史',
  budget_tier: 2,
  tags: ['山口県', '下関市', '下関駅', '唐戸市場', '赤間神宮'],
  style_genre: 'retro_woodblock_poster',
  title: '下関・関門海峡の歴史洋館と唐戸を歩く',
  description:
    '関門海峡を望む下関の観光中心地・唐戸エリアで、現存日本最古の領事館建築「旧下関英国領事館」と2階の「tearoom Liz」、海の幸が並ぶ「唐戸市場」、海上安全の古社「亀山八幡宮」、竜宮城のような朱色の社殿が映える「赤間神宮」を巡る散策路。',
  eyecatch_prompt:
    'Retro Japanese woodblock poster illustration of Shimonoseki Karato waterfront showing the historic red-brick Former British Consulate, bustling Karato fish market hall, coastal Kameyama shrine and vermilion Dragon-Palace gate of Akama Shrine overlooking Kanmon Strait, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '関門海峡の潮風と近代洋館、そして平家物語の社が繋がる下関を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「旧下関英国領事館」の赤レンガ洋館で、明治の国際港・下関の記憶に触れた瞬間',
      subtext:
        '国重要文化財の重厚な窓辺と暖炉が、関門海峡を行き交った外国船の時代を伝えていた。',
      badge: {
        code: 'shimonoseki_consulate',
        name_ja: '唐戸・旧英国領事館を巡りし者',
        subtitle_en: 'Explorer of Old Consulate',
        description:
          '旧下関英国領事館を訪ね、現存日本最古の領事館建築と関門の近代史に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting the historic red-brick Meiji-era British Consulate building with arched porch and white stone trim, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「tearoom Liz」の洋館二階で、香り高い紅茶と焼き立てのスコーンを味わった瞬間',
      subtext:
        '明治の領事館のクラシカルな空間でいただく英国流のティータイムが、海辺の旅を彩った。',
      badge: {
        code: 'shimonoseki_liz',
        name_ja: '下関・英国領事館の茶房に寛ぎし者',
        subtitle_en: 'Guest of Tearoom Liz',
        description:
          '旧下関英国領事館内のtearoom Lizを訪ね、歴史ある洋館で紅茶と菓子を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a porcelain teacup, teapot and freshly baked scones with clotted cream on a lace-trimmed vintage table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「唐戸市場」の賑わう市場内で、関門のふぐや新鮮な海の幸に出会った瞬間',
      subtext:
        '潮の香りが満ちる下関の台所で、海峡が育む豊かな魚介の活気に心を躍らせた。',
      badge: {
        code: 'shimonoseki_karato',
        name_ja: '下関・唐戸市場の活気を味わいし者',
        subtitle_en: 'Taster of Karato Market',
        description:
          '唐戸市場を訪ね、関門海峡の豊かな海の幸が並ぶ港町下関の台所を満喫した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a vibrant platter of assorted fresh nigiri sushi and sea bream sashimi beside harbor waves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「赤間神宮」の鮮やかな水天門を仰ぎ、壇ノ浦の記憶と平家物語に想いを馳せた瞬間',
      subtext:
        '関門海峡の青い海を背に立つ朱色の竜宮造りの社殿が、安徳天皇の鎮魂の祈りを伝えていた。',
      badge: {
        code: 'shimonoseki_akama',
        name_ja: '壇ノ浦・赤間神宮の水天門を拝みし者',
        subtitle_en: 'Visitor of Akama Shrine',
        description:
          '赤間神宮を訪ね、壇ノ浦を望む朱色の水天門と平家物語ゆかりの聖地に参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the vivid vermilion and white Dragon-Palace Suitenmon gate of Akama Shrine framed against blue Kanmon Strait waters, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'shimonoseki_complete',
    name_ja: '下関・関門海峡と唐戸の港町を巡る旅人',
    subtitle_en: 'Walker of Shimonoseki Strait',
    description:
      '旧下関英国領事館からtearoom Liz、唐戸市場、亀山八幡宮、赤間神宮までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a red-brick Meiji consulate, fresh harbor sushi and the vermilion Suitenmon gate of Akama Shrine, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '旧下関英国領事館',
      spot_type: '見どころ',
      description:
        '明治39年（1906年）に建てられた現存日本最古の領事館建築で、国の重要文化財。赤レンガと白い花崗岩が織りなす優美な洋館内で、国際港・下関の近代史を紹介する。9:00〜17:00、火曜休、入館無料。',
      address: '山口県下関市唐戸町4-11',
      prefecture: '山口県',
      municipality: '下関市',
      lat: 33.956943,
      lng: 130.943208,
      clue: 'JR下関駅から唐戸方面のバスで約7分、関門の近代史を象徴する赤レンガの洋館「旧下関英国領事館」から散策を始めよう（9:00〜17:00、火曜休・無料）。明治三十九年建築の現存日本最古の領事館であり、国重要文化財に指定された美しいアーチや暖炉が往時の国際交流を今に伝えている。まずは館内の展示で国際港町・下関の豊かな歩みをじっくり辿り、海峡の歴史旅をこれからも心地よく開きたい。',
      surprise:
        '海風を受けて佇む鮮やかな赤レンガと白い石材のコントラストが実に美しく、館内に入ると明治期の重厚な木製階段や暖炉がそのまま保存されている。入館無料でこれほど保存状態の良い国重文の洋館をじっくり見学できるのは、下関ならではの贅沢といえる。',
      hook: '一階の展示を巡ったら、同じ館内の二階にあるtearoom Lizで英国流の紅茶を楽しもう。',
      f7_fragment: '明治三十九年築の現存日本最古の領事館建築、国重文の赤レンガ洋館。',
      f7_full: '国重要文化財「旧下関英国領事館」で明治の赤レンガ建築と国際港の記憶に触れ、関門海峡の旅を心地よく始めた。',
      image_prompt:
        'Historic Meiji-era red-brick Former British Consulate in Shimonoseki with white granite arches, slate roof and neatly trimmed courtyard, no text, no people.',
    },
    {
      name: 'tearoom Liz（旧下関英国領事館2F）',
      spot_type: '休憩',
      description:
        '旧下関英国領事館の2階に併設されたクラシカルなティールーム。明治の洋館の趣ある空間で、本格的な紅茶や焼き立てスコーン、アフタヌーンティーを楽しめる。10:00〜17:00、火曜休。',
      address: '山口県下関市唐戸町4-11',
      prefecture: '山口県',
      municipality: '下関市',
      lat: 33.956978,
      lng: 130.943206,
      clue: 'そのまま館内の階段を上がり、二階の「tearoom Liz」で海辺のティータイムを楽しもう（10:00〜17:00、火曜休）。かつて領事の公邸だったクラシカルな部屋で、香り高い紅茶や自家製スコーンをじっくり味わう時間はまさに格別だ。大きな窓から差し込む関門海峡の柔らかな光を浴びながら、これから巡る唐戸市場や赤間神宮への散策に向けてこれからもずっと優雅に心と身体を整えたい。',
      surprise:
        '文化財の建物の中でありながら堅苦しさがなく、柔らかな調度品と紅茶の香りに包まれてゆったり寛げるのが魅力だ。焼き立てのスコーンにクロテッドクリームを添えて味わっていると、まるで明治の港町にタイムスリップしたような心地よい気分になる。',
      hook: '紅茶で寛いだら、東へ徒歩4分の海辺に広がる唐戸市場へ向かおう。',
      f7_fragment: '旧英国領事館の二階で紅茶とスコーンを味わう、優雅な洋館カフェ。',
      f7_full: '洋館二階の「tearoom Liz」で香り高い紅茶とスコーンを味わい、明治の港町らしい優雅な休息を楽しんだ。',
      image_prompt:
        'Elegant historic tearoom interior inside Meiji brick consulate with tall sash windows, vintage tablecloth, porcelain teapot and freshly baked scones, no text, no people.',
    },
    {
      name: '唐戸市場',
      spot_type: '食事',
      description:
        '関門海峡に面して建つ下関の台所。名物のふぐをはじめ新鮮な海の幸が集まり、金〜日曜・祝日には握り寿司や海鮮丼をその場で楽しめる「活きいき馬関街」が開かれる。平日5:00〜15:00・日祝7:00〜15:00。',
      address: '山口県下関市唐戸町5-50',
      prefecture: '山口県',
      municipality: '下関市',
      lat: 33.956609,
      lng: 130.945824,
      clue: '洋館を出て東へ徒歩4分、関門海峡の潮風が吹き抜ける「唐戸市場」へ踏み入ろう（平日5:00〜・日祝7:00〜15:00）。下関名物のふぐや海峡の旬の魚介を存分に味わいたい。',
      surprise:
        '天井の高い開放的な市場内に並ぶ魚介の種類の豊富さと、威勢の良い掛け声の活気はまさに港町・下関の象徴だ。週末の馬関街の賑わいはもちろん、平日の午前中に市場の空気を眺めながら二階の食堂で海の幸を味わうのも通ならではの楽しみ方といえる。',
      hook: '海の幸を味わったら、北西へ徒歩2分の高台に鎮座する亀山八幡宮へ向かおう。',
      f7_fragment: '関門海峡を望む下関の台所、ふぐや旬の魚介の活気が満ちる名物市場。',
      f7_full: '海峡沿いの「唐戸市場」で下関ならではの活気と新鮮な海の幸に触れ、港町の豊かな食の恵みを満喫した。',
      image_prompt:
        'Lively Japanese coastal fish market hall of Karato Ichiba displaying colorful trays of fresh nigiri sushi, fugu sashimi and sea bream on ice, no text, no people.',
    },
    {
      name: '亀山八幡宮',
      spot_type: '見どころ',
      description:
        '貞観元年（859年）創建、関門海峡を見下ろす亀山に鎮座する下関の古社。海上交通の守護神として崇敬され、境内には世界一とも称される大きな「ふく（ふぐ）の像」がある。参拝自由・無休。',
      address: '山口県下関市中之町1-1',
      prefecture: '山口県',
      municipality: '下関市',
      lat: 33.957423,
      lng: 130.944986,
      clue: '唐戸市場から北西へ徒歩2分、海峡を見晴らす亀山の高台に鎮座する「亀山八幡宮」へ石段を登ろう（参拝自由・無休）。貞観元年の創建と伝わる由緒ある古社で、古くから関門海峡を行き交う船の守護神として地域の人々から厚い信仰を集めてきた。境内から一望する対岸・門司の風景と、下関らしいユーモラスな「世界一のふくの像」をじっくり眺めながら、港町の歴史と祈りにこれからもずっと深く触れたい。',
      surprise:
        '歴史ある厳かな拝殿のすぐそばに、下関の誇りであるふぐ（ふく）の堂々とした銅像が鎮座している取り合わせが実に楽しい。高台の境内から関門海峡を行き交う大小の船を眺めていると、古来よりこの海峡がいかに重要な海の道であったかが実感できる。',
      hook: '海峡を見晴らしたら、東北東へ徒歩7分の鮮やかな赤間神宮へ向かい旅を結ぼう。',
      f7_fragment: '貞観元年創建、関門海峡を見守る高台の古社と名物・ふくの像。',
      f7_full: '高台の古社「亀山八幡宮」に参拝して関門海峡を望み、下関の海上交通の歴史と「ふく」の街の遊び心に触れた。',
      image_prompt:
        'Historic hillside Shinto shrine of Kameyama Hachimangu with stone torii gate, wooden sanctuary and view over sparkling blue Kanmon Strait, no text, no people.',
    },
    {
      name: '赤間神宮',
      spot_type: '見どころ',
      description:
        '壇ノ浦の戦いで幼くして入水された安徳天皇を祀る神社。竜宮城を模した鮮やかな朱と白の「水天門」が海峡に映え、境内には平家一門の墓や「耳なし芳一堂」がある。境内参拝自由（社務所9:00〜17:00）。',
      address: '山口県下関市阿弥陀寺町4-1',
      prefecture: '山口県',
      municipality: '下関市',
      lat: 33.959367,
      lng: 130.948778,
      clue: '亀山八幡宮から東北東へ徒歩7分、壇ノ浦の記憶を伝える「赤間神宮」で散策を締めくくろう（参拝自由・社務所9:00〜17:00）。源平合戦の壇ノ浦で入水された安徳天皇を祀るため、「海の底にも都はある」という二位尼の言葉にちなみ竜宮城を模した鮮やかな水天門が建てられている。平家一門の七盛塚や耳なし芳一堂を静かに巡り、関門海峡の深い歴史に包まれて旅をこれからもずっと温かく心静かに結びたい。',
      surprise:
        '目の前に関門海峡の青い海が広がる場所に、真っ白な壁と朱塗りが際立つ竜宮造りの水天門がそびえる姿は息を呑むほど美しい。華やかな社殿の裏手に佇む平家一門の墓を前にすると、八百余年前の悲話が波音とともに静かに胸に迫ってくる。',
      hook: '',
      f7_fragment: '竜宮城を模した朱色の水天門が海辺に映える、壇ノ浦ゆかりの赤間神宮。',
      f7_full: '「赤間神宮」の鮮やかな水天門を仰いで参拝し、平家物語の記憶と関門海峡の潮風が織りなす下関の散策を結んだ。',
      image_prompt:
        'Iconic vivid vermilion and white Dragon-Palace Suitenmon gate of Akama Shrine standing beside blue Kanmon Strait waters under late afternoon sky, no text, no people.',
    },
  ],
};
