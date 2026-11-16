export default {
  slug: 'yokohama',
  station_order: 676,
  station: '横浜',
  line: 'JR京浜東北線',
  area_name: '横浜・赤レンガと異国情緒の港街',
  prefecture: '神奈川県',
  municipality: '横浜市',
  category: '街歩きと海景色',
  budget_tier: 2,
  tags: ['神奈川県', '横浜市', '横浜駅', '赤レンガ', '中華街'],
  style_genre: 'editorial_clean_ink',
  title: '横浜・開港記念会館から赤レンガと山下公園へ',
  description:
    'JR横浜駅から、みなとみらいの海沿いに続く「臨港パーク」、赤煉瓦と時計塔の「横浜市開港記念会館」、明治・大正の面影を残す「横浜赤レンガ倉庫」、海と氷川丸を望む「山下公園」、活気あふれる「横浜中華街」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Yokohama port city showing the iconic twin red-brick Yokohama Red Brick Warehouses along the harbor, the clock tower of Jack Port Opening Memorial Hall, green seaside lawns of Yamashita Park with a classic ocean liner moored nearby, and an ornate crimson gate of Yokohama Chinatown, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '潮風薫る開港の街と赤煉瓦の歴史建築、活気ある中華街を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「横浜市開港記念会館」の赤煉瓦と時計塔「ジャックの塔」を見上げた瞬間',
      subtext:
        '大正時代に建てられた歴史建築の重厚な佇まいに、開港の街・横浜の誇りを感じた。',
      badge: {
        code: 'yokohama_kaikokinen',
        name_ja: '横浜・ジャックの塔を仰ぎ見し者',
        subtitle_en: 'Visitor of Yokohama Port Opening Memorial Hall',
        description:
          '横浜市開港記念会館を訪ね、横浜三塔のひとつ「ジャックの塔」の建築美を仰ぎ見た証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting the red-brick clock tower Jack with its green octagonal dome framed by ginkgo leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「横浜赤レンガ倉庫」の広場に立ち、明治・大正の煉瓦造りと海景色を眺めた瞬間',
      subtext:
        'かつての保税倉庫が賑わいの場へと生まれ変わった姿に、港町の歴史と今が重なった。',
      badge: {
        code: 'yokohama_akarenga',
        name_ja: '横浜・赤レンガの港景を歩きし者',
        subtitle_en: 'Walker of Yokohama Red Brick Warehouse',
        description:
          '横浜赤レンガ倉庫を訪ね、歴史的煉瓦建築とみなとみらいの港景色を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic long red-brick warehouse facade beside calm blue harbor water and white sailboats, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「山下公園」の海沿いの遊歩道を歩き、潮風とともに横浜港の景色を眺めた瞬間',
      subtext:
        '氷川丸が停泊する穏やかな海辺の風景が、横浜らしい開放感で心を満たしてくれた。',
      badge: {
        code: 'yokohama_yamashita',
        name_ja: '横浜・山下公園の潮風を感じし者',
        subtitle_en: 'Walker of Yamashita Park',
        description:
          '山下公園を訪ね、横浜港の海辺と氷川丸の風景を眺めながら歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a seaside park promenade with blooming roses overlooking a moored classic ocean liner and harbor cranes, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「横浜中華街」の極彩色の牌楼をくぐり、湯気と香辛料の香りが満ちる街を歩いた瞬間',
      subtext:
        '異国情緒と活気に満ちた通りの賑わいが、開港都市・横浜の散策を楽しく結んでくれた。',
      badge: {
        code: 'yokohama_chinatown',
        name_ja: '横浜・中華街の牌楼をくぐりし者',
        subtitle_en: 'Walker of Yokohama Chinatown',
        description:
          '横浜中華街を訪ね、色鮮やかな牌楼と本場の食文化が息づく街並みを歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting an ornate crimson and gold Chinese gate framed by warm paper lanterns and steaming bamboo dim sum baskets, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'yokohama_complete',
    name_ja: '横浜・開港の港街を巡る旅人',
    subtitle_en: 'Walker of Yokohama',
    description:
      '臨港パークから開港記念会館、横浜赤レンガ倉庫、山下公園、横浜中華街までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the Yokohama Red Brick Warehouse, the Jack clock tower, and a moored ocean liner on blue harbor water, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '臨港パーク',
      spot_type: '見どころ',
      description:
        'みなとみらいエリア最大の緑地公園。目の前に横浜港と横浜ベイブリッジが広がり、芝生広場と潮入りの池が心地よい海辺空間をつくる。常時開放、無料。',
      address: '神奈川県横浜市西区みなとみらい1-1',
      prefecture: '神奈川県',
      municipality: '横浜市',
      lat: 35.461884,
      lng: 139.63691,
      clue: 'JR横浜駅からみなとみらいの海辺へ歩を進め、横浜港を大きく望む「臨港パーク」から港街の散策を始めよう（常時開放・無料）。広々とした芝生広場と潮入りの池が整えられた開放的な公園で、目の前には横浜ベイブリッジや行き交う船の姿が美しく広がっている。海から吹く爽やかな風を胸いっぱいに深く吸い込みながら、開港都市・横浜の歴史を巡る一日へこれからも軽やかに元気に笑顔で踏み出したい。',
      surprise:
        '公園内の「フルーツ・ツリー」やアーチ橋などのアート作品を眺めながら、海沿いの遊歩道を通ってそのまま赤レンガ方面へ歩いて行けます。',
      hook: '横浜港の風を感じたら、南へ歩いてジャックの塔・横浜市開港記念会館へ向かおう。',
      f7_fragment: 'みなとみらい最大の海辺公園、芝生広場から横浜港とベイブリッジを望む。',
      f7_full:
        '「臨港パーク」の海辺で横浜港の景色と爽やかな潮風を感じ、港街の散策を始めた。',
      image_prompt:
        'Bright coastal park illustration of Rinko Park in Yokohama, wide green seaside lawns, stone waterfront steps overlooking calm blue harbor water and distant Yokohama Bay Bridge, clear morning light, no text, no letters.',
    },
    {
      name: '横浜市開港記念会館',
      spot_type: '見どころ',
      description:
        '大正6年（1917年）に横浜開港50周年を記念して建てられた国の重要文化財。「ジャックの塔」の愛称で横浜三塔のひとつに数えられる。9:00〜22:00（見学10:00〜16:00）、第2水曜休、無料。',
      address: '神奈川県横浜市中区本町1-6',
      prefecture: '神奈川県',
      municipality: '横浜市',
      lat: 35.44729,
      lng: 139.641276,
      clue: '大正6年に横浜開港50周年を記念して建てられ、国の重要文化財に指定されている「横浜市開港記念会館」を訪ねよう（見学10:00〜16:00・第2水曜休、無料）。赤煉瓦と花崗岩の辰野式フリークラシック様式が美しく、高さ約36メートルの時計塔は「ジャックの塔」の愛称で親しまれている。館内のステンドグラスや重厚な階段を仰ぎ見ながら、開港の街が歩んだ誇りをこれからも静かに感じたい。',
      surprise:
        '「キング（神奈川県庁本庁舎）」「クイーン（横浜税関）」とともに「横浜三塔」と呼ばれ、三つすべてを巡ると願いが叶うという伝説もあります。',
      hook: 'ジャックの塔を仰いだら、北東の海辺へ歩いて横浜赤レンガ倉庫へ向かおう。',
      f7_fragment: '大正6年竣工の国の重要文化財、「ジャックの塔」として親しまれる名建築。',
      f7_full:
        '「横浜市開港記念会館」の赤煉瓦と時計塔を見上げ、開港都市・横浜の品格に触れた。',
      image_prompt:
        'Architectural illustration of Yokohama Port Opening Memorial Hall Jack Tower, red-brick and white granite facade with soaring octagonal green-domed clock tower framed by street trees, no text, no letters.',
    },
    {
      name: '横浜赤レンガ倉庫',
      spot_type: '買い物',
      description:
        '明治末期から大正初期にかけて国の模範倉庫として建てられた歴史的煉瓦建築。現在はショッピングやグルメ、イベントが楽しめる横浜の定番拠点。1号館10:00〜19:00・2号館11:00〜20:00、無休。',
      address: '神奈川県横浜市中区新港1-1',
      prefecture: '神奈川県',
      municipality: '横浜市',
      lat: 35.452608,
      lng: 139.642932,
      clue: '明治末期から大正初期に保税倉庫として建てられた「横浜赤レンガ倉庫」を歩こう（1号館10:00〜19:00・2号館11:00〜20:00）。重厚な煉瓦建築と海辺の賑わいを存分に味わいたい。',
      surprise:
        '関東大震災を乗り越えて残った1号館・2号館の間は広大なイベント広場になっており、海を望むテラスで食事や買い物が楽しめます。',
      hook: '赤レンガの港景を楽しんだら、南東の海沿いに伸びる山下公園へ向かおう。',
      f7_fragment: '明治・大正の保税倉庫を活かした歴史建築、海辺のショップやグルメが並ぶ。',
      f7_full:
        '「横浜赤レンガ倉庫」の広場に立ち、歴史ある煉瓦造りと横浜港の開放的な景色を眺めた。',
      image_prompt:
        'Iconic Yokohama waterfront illustration of Yokohama Red Brick Warehouse, historic long red-brick buildings with iron balconies and arched windows facing a sunlit harbor plaza and sea, no text, no letters.',
    },
    {
      name: '山下公園',
      spot_type: '見どころ',
      description:
        '昭和5年（1930年）に開園した横浜を代表する海辺の公園。氷川丸が係留され、バラ園や「赤い靴はいてた女の子」像など見どころが点在する。常時開放、無料。',
      address: '神奈川県横浜市中区山下町279',
      prefecture: '神奈川県',
      municipality: '横浜市',
      lat: 35.444203,
      lng: 139.648535,
      clue: '関東大震災のがれきを埋め立てて造られ、昭和5年に開園した横浜を代表する海辺の公園「山下公園」を歩こう（常時開放・無料）。約750メートルにわたって続く海沿いの遊歩道からは、横浜港に停泊する「日本郵船氷川丸」や大さん橋、横浜マリンタワーを一望できる。花壇の美しいバラや心地よい潮風に癒やされながら、異国情緒あふれる港街の穏やかな時間をこれからもゆっくりゆったりと味わいたい。',
      surprise:
        '園内の「未来のバラ園」には約160種・1,900株ものバラが植えられており、春と秋には海の青と鮮やかな花色の美しい共演が楽しめます。',
      hook: '海辺の散歩を満喫したら、南西へ歩いて活気あふれる横浜中華街で旅を結ぼう。',
      f7_fragment: '横浜港と氷川丸を望む海辺の名園、バラ園と潮風薫る遊歩道が魅力。',
      f7_full:
        '「山下公園」の海沿いの遊歩道を歩き、氷川丸と横浜港の穏やかな風景を眺めた。',
      image_prompt:
        'Scenic seaside park illustration of Yamashita Park in Yokohama, waterfront promenade lined with blooming roses and shade trees overlooking the moored classic ocean liner Hikawa Maru in blue harbor water, no text, no letters.',
    },
    {
      name: '横浜中華街',
      spot_type: '食事',
      description:
        '東西南北に彩り豊かな牌楼（門）が立ち、数百軒の中華料理店や点心・茶葉・雑貨店が軒を連ねる日本最大級の中華街。店舗により11:00〜22:00頃（物販10:00〜19:00頃）。',
      address: '神奈川県横浜市中区山下町118-2',
      prefecture: '神奈川県',
      municipality: '横浜市',
      lat: 35.442282,
      lng: 139.645158,
      clue: '安政の横浜開港をきっかけに誕生し、今や世界有数の規模を誇る「横浜中華街」で旅を締めくくろう（飲食11:00〜22:00頃・物販10:00〜19:00頃）。極彩色の善隣門や朝陽門をくぐると、湯気を立てる肉まんや小籠包の香り、色鮮やかな提灯の灯りが五感を刺激する。歴史ある関帝廟や媽祖廟の佇まいにも触れながら、国際都市・横浜の活気と温もりをこれからも笑顔で心地よく楽しく結びたい。',
      surprise:
        '街の東西南北などには風水に基づいて建てられた全10基の「牌楼（門）」があり、それぞれ守護神や方角にちなんだ色と意匠が施されています。',
      hook: '',
      f7_fragment: '極彩色の牌楼と本場の中華料理・点心が軒を連ねる日本最大級の中華街。',
      f7_full:
        '「横浜中華街」の牌楼をくぐり、湯気と香辛料が薫る活気ある通りで旅を締めくくった。',
      image_prompt:
        'Vibrant illustration of Yokohama Chinatown, ornate crimson and gold Zenrin-mon gate towering over bustling street stalls with warm red lanterns and steaming bamboo baskets in late afternoon light, no text, no letters.',
    },
  ],
};
