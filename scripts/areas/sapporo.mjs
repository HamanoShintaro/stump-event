export default {
  slug: 'sapporo',
  station_order: 665,
  station: '札幌',
  line: 'JR函館本線',
  area_name: '札幌・赤れんがと時計台の街',
  prefecture: '北海道',
  municipality: '札幌市',
  category: '歴史と街歩き',
  budget_tier: 2,
  tags: ['北海道', '札幌市', '札幌駅', '時計台', '赤れんが'],
  style_genre: 'editorial_clean_ink',
  title: '札幌・赤れんが庁舎から時計台と大通へ',
  description:
    'JR札幌駅から、2025年7月に改修を終え再開した「北海道庁旧本庁舎（赤れんが庁舎）」、開拓の鐘が響く「札幌市時計台」、開放的な「MORIHICO. 藝術劇場」、札幌の中心を東西に貫く「大通公園」、街を一望する「さっぽろテレビ塔」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Sapporo City showing the red-brick Meiji-era Former Hokkaido Government Office framed by birch and elm trees, the white wooden Sapporo Clock Tower, vibrant green flowerbeds of Odori Park, and the red lattice Sapporo TV Tower against a crisp northern sky, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '北国の開拓史を伝える赤れんがと時計台、緑豊かな大通を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「北海道庁旧本庁舎（赤れんが庁舎）」の重厚な煉瓦と緑の庭を眺めた瞬間',
      subtext:
        '保存修理を終えて蘇った明治の洋館が、札幌の開拓の歴史を力強く物語っていた。',
      badge: {
        code: 'sapporo_akarenga',
        name_ja: '札幌・蘇りし赤れんがを訪ねし者',
        subtitle_en: 'Visitor of Former Hokkaido Government Office',
        description:
          '北海道庁旧本庁舎（赤れんが庁舎）を訪ね、北国の開拓史を伝える明治の洋館に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic red-brick Meiji-era government building with an octagonal green dome framed by golden autumn ginkgo leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「札幌市時計台」の白い木造建築を見上げ、澄んだ鐘の音に耳を澄ませた瞬間',
      subtext:
        'ビル街の中で時を刻み続ける時計台の姿に、北海道開拓への清らかな志を感じた。',
      badge: {
        code: 'sapporo_tokeidai',
        name_ja: '札幌・開拓の時計台を仰ぎ見し者',
        subtitle_en: 'Visitor of Sapporo Clock Tower',
        description:
          '札幌市時計台を訪ね、明治から時を刻み続ける白い木造建築を見上げた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting the white wooden Sapporo Clock Tower with its red roof and classic clock face beneath a crisp northern blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「MORIHICO. 藝術劇場」で、開放的な空間に広がる自家焙煎珈琲を味わった瞬間',
      subtext:
        '北海道発の珈琲文化に触れるひとときが、北の都の散策に心地よい余白をくれた。',
      badge: {
        code: 'sapporo_morihico',
        name_ja: '札幌・北の珈琲文化を味わいし者',
        subtitle_en: 'Guest of MORIHICO. Art Theater',
        description:
          'MORIHICO. 藝術劇場を訪ね、開放的な空間で香り高い一杯を愉しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming dark ceramic coffee cup and pour-over kettle beside tall modern glass windows, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「さっぽろテレビ塔」の展望台から、真っ直ぐに伸びる大通公園を一望した瞬間',
      subtext:
        '碁盤の目の街並みと緑の帯が織りなすパノラマに、札幌という街の雄大さを実感した。',
      badge: {
        code: 'sapporo_tvtower',
        name_ja: '札幌・大通とテレビ塔を望みし者',
        subtitle_en: 'Visitor of Sapporo TV Tower',
        description:
          'さっぽろテレビ塔を訪ね、大通公園と札幌市街の雄大なパノラマを一望した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the red steel lattice Sapporo TV Tower rising above green lawns and flowerbeds of Odori Park, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sapporo_complete',
    name_ja: '札幌・赤れんがと時計台を巡る旅人',
    subtitle_en: 'Walker of Sapporo',
    description:
      '北海道庁旧本庁舎から札幌市時計台、MORIHICO. 藝術劇場、大通公園、さっぽろテレビ塔までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the red-brick Akarenga facade, the white Sapporo Clock Tower, and the red lattice TV Tower, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '北海道庁旧本庁舎（赤れんが庁舎）',
      spot_type: '見どころ',
      description:
        '明治21年（1888年）に建てられたアメリカン・ネオバロック様式の煉瓦造洋館。大規模改修を経て2025年7月にリニューアルオープンした。8:45〜21:00、一般300円。',
      address: '北海道札幌市中央区北3条西6丁目1',
      prefecture: '北海道',
      municipality: '札幌市',
      lat: 43.064111,
      lng: 141.34742,
      clue: 'JR札幌駅南口から歩いてほど近い「北海道庁旧本庁舎（赤れんが庁舎）」から、北の都の散策を始めよう（8:45〜21:00・2025年7月リニューアルオープン）。明治時代に建てられたアメリカン・ネオバロック様式の重厚な赤煉瓦建築で、約5年半の保存修理を経て新たな展示とともに公開された。緑豊かな前庭の池や木々と調和する美しい洋館を眺めながら、北海道の歩みをこれからも身近に感じたい。',
      surprise:
        '建物に使われている赤煉瓦は約250万個にもおよび、白石村や豊平村など地元で焼かれた煉瓦が北海道の開拓を支えました。',
      hook: '赤れんがの歴史に触れたら、東南東へ歩いて白い木造の札幌市時計台へ向かおう。',
      f7_fragment: '明治の面影を残す赤煉瓦の洋館、2025年7月に改修を終えリニューアル。',
      f7_full:
        '「北海道庁旧本庁舎（赤れんが庁舎）」の重厚な煉瓦と緑の庭を眺め、札幌の歩みに触れた。',
      image_prompt:
        'Editorial clean ink illustration of the Former Hokkaido Government Office Akarenga in Sapporo, grand red-brick Meiji-era facade with green octagonal dome, tree-lined pond garden and crisp morning sky, no text, no letters.',
    },
    {
      name: '札幌市時計台',
      spot_type: '見どころ',
      description:
        '旧札幌農学校の演武場として明治11年（1878年）に建てられた国の重要文化財。毎正時に澄んだ鐘の音が響く。8:45〜17:10、年始休、大人350円（高校生以下無料）。',
      address: '北海道札幌市中央区北1条西2丁目',
      prefecture: '北海道',
      municipality: '札幌市',
      lat: 43.062886,
      lng: 141.353487,
      clue: '明治11年に旧札幌農学校演武場として建てられた「札幌市時計台」を仰ぎ見よう（8:45〜17:10、大人350円）。ビル街の中で毎正時に響く澄んだ鐘の音に開拓の志を感じたい。',
      surprise:
        '時計台の塔時計はアメリカのハワード社製で、現在も電力を一切使わず、おもりを利用した振り子式で正確に時を刻み続けています。',
      hook: '鐘の音を聴いたら、東へすぐのMORIHICO. 藝術劇場で珈琲を楽しもう。',
      f7_fragment: '旧札幌農学校の演武場として建てられた国の重要文化財、澄んだ鐘が響く。',
      f7_full:
        '「札幌市時計台」の白い木造建築を見上げ、明治から時を刻む鐘の音に耳を澄ませた。',
      image_prompt:
        'Iconic Japanese landmark illustration of Sapporo Clock Tower, crisp white wooden American-style building with red roof and clock tower surrounded by green trees against modern city backdrop, clear daylight, no text, no letters.',
    },
    {
      name: 'MORIHICO. 藝術劇場',
      spot_type: '休憩',
      description:
        '札幌市民交流プラザ1階にある人気コーヒーブランド「森彦」の開放的な店舗。高い天井の下で自家焙煎珈琲とスイーツを味わえる。9:00〜19:00（L.O.18:30）。',
      address: '北海道札幌市中央区北1条西1丁目 札幌市民交流プラザ1F',
      prefecture: '北海道',
      municipality: '札幌市',
      lat: 43.062966,
      lng: 141.356206,
      clue: '札幌発祥の人気コーヒーブランド「森彦」が手掛ける「MORIHICO. 藝術劇場」へ立ち寄ろう（札幌市民交流プラザ1階・9:00〜19:00）。大きなガラス窓から光が差し込む開放的な空間は、隣接する図書・情報館とゆるやかに繋がり、文化の香りが漂っている。丁寧に焙煎された香り高い珈琲と焼き菓子を味わいながら、街歩きの合間に肩の力を抜いて、これからも心地よい余白の時間を愉しみたい。',
      surprise:
        '札幌市円山の古民家から始まった「森彦」は、北海道の気候や水に寄り添った独自の焙煎で、札幌のカフェ文化を牽引してきました。',
      hook: '珈琲で一息ついたら、南西へ歩いて緑豊かな大通公園を散策しよう。',
      f7_fragment: '札幌市民交流プラザ1階、高い天井の下で森彦の自家焙煎珈琲が味わえる。',
      f7_full:
        '「MORIHICO. 藝術劇場」の開放的な空間で自家焙煎珈琲を味わい、北のカフェ文化に触れた。',
      image_prompt:
        'Warm contemporary cafe interior illustration of MORIHICO Art Theater in Sapporo, soaring high ceilings, large glass windows letting in soft northern daylight, wooden counter and steaming ceramic coffee cup, no text, no letters.',
    },
    {
      name: '大通公園',
      spot_type: '見どころ',
      description:
        '札幌市の中心部を東西約1.5kmにわたって貫く都市公園。花壇や噴水、彫刻が配され、四季折々のイベントの舞台となる。常時開放、入園無料。',
      address: '北海道札幌市中央区大通西3丁目',
      prefecture: '北海道',
      municipality: '札幌市',
      lat: 43.060781,
      lng: 141.354132,
      clue: '札幌の中心部を東西約1.5kmにわたって貫く都市公園「大通公園」を歩こう（常時開放・入園無料）。明治時代に火防線として造られたのが始まりで、現在は色とりどりの花壇や涼やかな噴水、彫刻が並ぶ市民の憩いの場となっている。四季折々の木々が風に揺れる開放的な緑の帯を歩きながら、碁盤の目に整えられた北の都の伸びやかな美しい都市景観をこれからも五感いっぱいにじっくりと味わいたい。',
      surprise:
        '初夏から秋にかけて公園内に登場する名物「とうきびワゴン」の香ばしい焼きとうもろこしは、札幌市民に長く愛される季節の風物詩です。',
      hook: '公園の緑を歩いたら、東端のさっぽろテレビ塔から街を一望して結ぼう。',
      f7_fragment: '札幌中心部を東西に貫く緑の帯、花壇と噴水が彩る市民の憩いの場。',
      f7_full:
        '「大通公園」の開放的な花壇と並木道を歩き、札幌の伸びやかな街並みを体感した。',
      image_prompt:
        'Vibrant scenic illustration of Odori Park in Sapporo, wide green lawns, colorful flowerbeds, a sparkling fountain and elm trees lining a grand urban boulevard under bright sky, no text, no letters.',
    },
    {
      name: 'さっぽろテレビ塔',
      spot_type: '見どころ',
      description:
        '大通公園の東端に立つ札幌のランドマーク。地上約90mの展望台から大通公園や石狩平野、日本海まで360度の景色を楽しめる。9:00〜22:00（最終入場21:50）、不定休。',
      address: '北海道札幌市中央区大通西1丁目',
      prefecture: '北海道',
      municipality: '札幌市',
      lat: 43.06109,
      lng: 141.35643,
      clue: '大通公園の東端にそびえ、街のランドマークとして親しまれる「さっぽろテレビ塔」で旅を締めくくろう（9:00〜22:00・最終入場21:50、不定休）。地上約90メートルの展望台からは、真っ直ぐに伸びる大通公園の緑と碁盤の目の市街地、遠く手稲山や石狩平野まで一望できる。赤れんがと時計台から始まった札幌散策の記憶を、雄大なパノラマとともにこれからも胸の奥に深く刻んで結びたい。',
      surprise:
        '東京タワーと同じく建築家・内藤多仲氏の設計によって昭和32年に完成し、街のシンボルとして半世紀以上親しまれています。',
      hook: '',
      f7_fragment: '大通公園東端に立つランドマーク、展望台から札幌市街を一望できる。',
      f7_full:
        '「さっぽろテレビ塔」の展望台から真っ直ぐ伸びる大通公園を一望し、札幌の旅を結んだ。',
      image_prompt:
        'Iconic red steel lattice Sapporo TV Tower rising above green Odori Park in late afternoon golden light, crisp northern skyline and distant mountains, no text, no letters.',
    },
  ],
};
