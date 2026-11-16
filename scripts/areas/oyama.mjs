export default {
  slug: 'oyama',
  station_order: 621,
  station: '小山',
  line: 'JR東北新幹線・宇都宮線・両毛線・水戸線',
  area_name: '小山・城山と宿場町',
  prefecture: '栃木県',
  municipality: '小山市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['栃木県', '小山市', '小山駅', '祇園城跡', '須賀神社'],
  style_genre: 'pictorial_isometric_map',
  title: '小山・祇園城址と思川を巡る城下町さんぽ',
  description:
    'JR小山駅ビル内の老舗和菓子店「蛸屋」から、駅西口で愛される手打ちラーメンの名店と自家焙煎の街中カフェを経て、思川を見下ろす小山氏ゆかりの祇園城跡「城山公園」と小山の総鎮守「須賀神社」を巡る散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Oyama city in Tochigi showing Oyama station, traditional Japanese sweets shop, hand-pulled ramen shop, cozy modern cafe, riverside castle ruins park overlooking Omoi River and historic Suga Shrine, warm Washi paper tones with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '中世の城跡と思川の風景、そして地元の温かい食が息づく小山を歩いたあと、誰かに伝えたいのはどの場面ですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「手打ちラーメン 桂林 小山店」で、手打ちの麺と澄んだスープの一杯を味わった瞬間',
      subtext:
        '駅西口のすぐそばでいただいた手打ち麺の心地よい食感とスープの旨みが旅の活力をくれた。',
      badge: {
        code: 'oyama_keirin',
        name_ja: '小山・手打ち麺の一杯を味わいし者',
        subtitle_en: 'Taster of Oyama Ramen',
        description:
          '手打ちラーメン 桂林 小山店を訪ね、こだわりの手打ち麺と澄んだスープを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming ceramic bowl of clear shoyu ramen with hand-pulled noodles and chashu pork, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「Cafe FUJINUMA」の落ち着いた店内で、自家焙煎の香ばしい珈琲に癒やされた瞬間',
      subtext:
        '中央町の街角で出会った香り豊かなドリップ珈琲が、午後の城址歩きへ心を整えてくれた。',
      badge: {
        code: 'oyama_fujinuma',
        name_ja: '中央町・自家焙煎の珈琲を知る者',
        subtitle_en: 'Guest of Oyama Roastery',
        description:
          'Cafe FUJINUMAを訪ね、自家焙煎スペシャルティコーヒーの深い味わいを楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a specialty pour-over coffee cup and baked pastry on a warm oak cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「城山公園（祇園城跡）」の高台から、思川の流れと城跡の緑をゆったり眺めた瞬間',
      subtext:
        '小山氏ゆかりの中世城郭の土塁と眼下を流れる穏やかな思川が、歴史の重みを伝えていた。',
      badge: {
        code: 'oyama_shiroyama',
        name_ja: '小山・祇園城址と思川を望みし者',
        subtitle_en: 'Watcher of Gion Castle Ruins',
        description:
          '城山公園（祇園城跡）を訪ね、小山氏の歴史を伝える土塁と思川の風景に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a tranquil riverside hilltop park overlooking a gentle river with pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「須賀神社」の長い参道を歩き、小山の総鎮守が放つ凛とした空気に手を合わせた瞬間',
      subtext:
        '千年の歴史を刻む古社の木立に守られた拝殿の前で、旅の最後を清らかに締めくくった。',
      badge: {
        code: 'oyama_suga_jinja',
        name_ja: '小山・須賀神社の杜を拝みし者',
        subtitle_en: 'Visitor of Suga Shrine',
        description:
          '須賀神社を訪ね、小山の総鎮守として千年続く清らかな参道と社殿に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a grand Shinto torii gate and stone lanterns along a serene wooded shrine approach, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'oyama_complete',
    name_ja: '思川を望む祇園城址と小山宿の旅人',
    subtitle_en: 'Walker of Oyama Castle Town',
    description:
      '御菓子司 蛸屋 小山駅ビル店から桂林 小山店、Cafe FUJINUMA、城山公園、須賀神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a tranquil riverside hill with pine trees, a steaming bowl of hand-pulled ramen, and a red Shinto torii gate, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '御菓子司 蛸屋 小山駅ビル店',
      spot_type: '買い物',
      description:
        '栃木県内で長く親しまれる老舗和菓子店の駅ビル店。小山名物の「陣中おやま餅」や「みかもの月」など土産に最適な銘菓が並ぶ。営業時間10:00〜19:00（VAL小山に準ずる）。',
      address: '栃木県小山市城山町3-3-22 VAL小山1F',
      prefecture: '栃木県',
      municipality: '小山市',
      lat: 36.31288,
      lng: 139.806062,
      clue: '新幹線や在来線が集まるJR小山駅に降り立ったら、まずは西口直結の駅ビル1階に入る老舗「御菓子司 蛸屋 小山駅ビル店」へ立ち寄ろう（10:00〜19:00）。栃木県内で広く愛される和菓子屋で、店先には黒蜜ときな粉の風味豊かな「陣中おやま餅」やカスタードを包んだ「みかもの月」などが彩りよく並んでいる。城下町・小山の街へ歩き出す前に、土地の銘菓を確かめて散策のお供を手に入れたい。',
      surprise:
        '交通の要衝として賑わう駅ビルの中にありながら、どこか懐かしく温かな和菓子屋さんの空気感が保たれているのが嬉しい。小山の歴史や名産にちなんだお菓子の数々を見ていると、この街の暮らしへの親しみが自然と深まっていく素敵な名店といえる。お土産に最適だ。',
      hook: '駅ビルを出たら、北へ徒歩3分の手打ちラーメン 桂林 小山店で昼食にしよう。',
      f7_fragment: '陣中おやま餅など栃木の銘菓が並ぶ、小山駅西口直結の老舗和菓子店。',
      f7_full: '駅直結の「御菓子司 蛸屋 小山駅ビル店」を訪ね、陣中おやま餅など小山ゆかりの親しみある和菓子の魅力に触れて歩き始めた。',
      image_prompt:
        'Neat Japanese wagashi confectionery counter inside a station mall displaying neatly boxed mochi sweets and golden steamed cakes, no text, no people.',
    },
    {
      name: '手打ちラーメン 桂林 小山店',
      spot_type: '食事',
      description:
        '足利の名店から暖簾分けされた手打ちラーメンの人気店。青竹打ちのようなコシと滑らかさを持つ手打ち麺と旨み深いスープが自慢。昼11:30〜14:00・夜17:30〜24:00、木曜・第3水曜定休。',
      address: '栃木県小山市城山町3-6-31',
      prefecture: '栃木県',
      municipality: '小山市',
      lat: 36.314359,
      lng: 139.805876,
      clue: '蛸屋から駅西口を出て北へ徒歩3分、路地に構える「手打ちラーメン 桂林 小山店」で昼食にしよう（11:30〜14:00・17:30〜24:00、木曜・第3水曜休）。こだわりの手打ち麺と透き通るスープが人気だ。',
      surprise:
        '駅のすぐそばで本格的な手打ち麺の食感を味わえるのが北関東らしい贅沢といえる。不揃いでもちもちと弾む麺に、丁寧に取られた澄んだスープが心地よく絡み合い、城山や神社を巡る午後の散策に向けた活力をしっかりと満たしてくれる絶品の一杯と誰もが思うだろう。',
      hook: 'ラーメンでお腹を満たしたら、西南西へ徒歩2分のCafe FUJINUMAで珈琲を味わおう。',
      f7_fragment: '小山駅西口すぐで味わう、もちもちの手打ち麺と澄んだスープの一杯。',
      f7_full: '駅西口の「手打ちラーメン 桂林 小山店」でコシのある手打ち麺と旨み豊かなスープを味わい、小山の活気ある麺文化に触れた。',
      image_prompt:
        'Steaming ceramic bowl of clear Japanese shoyu ramen with uneven hand-cut noodles, chashu pork and bamboo shoots on a wooden counter, no text, no people.',
    },
    {
      name: 'Cafe FUJINUMA',
      spot_type: '休憩',
      description:
        '中央町の街中に佇む自家焙煎スペシャルティコーヒーのカフェ。丁寧に淹れられた珈琲とスイーツで落ち着いた時間を過ごせる。営業時間11:00〜17:00、無休。',
      address: '栃木県小山市中央町2-8-16',
      prefecture: '栃木県',
      municipality: '小山市',
      lat: 36.31374,
      lng: 139.804713,
      clue: '桂林から西南西へ徒歩2分、中央町の落ち着いた通りに構える「Cafe FUJINUMA」で一息つこう（11:00〜17:00、無休）。小山を代表する自家焙煎コーヒーの名店として知られ、豆の個性を引き出したドリップコーヒーやラテ、焼き菓子をゆったりと味わえる。食後の余韻を楽しみながら香り高い珈琲で心を整えたら、いよいよ小山氏ゆかりの歴史公園「城山公園」方面へと歩みを進めたい。',
      surprise:
        '駅前の賑わいからほんの数分歩いただけで、これほど洗練された自家焙煎珈琲の空間に出会えることに小山の奥行きを感じる。丁寧に淹れられた一杯の香りに包まれる時間は、城下町の街歩きをぐっと豊かにしてくれる大切なひとときと誰もがきっと心に思うだろう。',
      hook: '珈琲で寛いだら、西北西へ徒歩11分の城山公園（祇園城跡）へ向かおう。',
      f7_fragment: '小山の街中で丁寧に焙煎された豆が香る、洗練された寛ぎの珈琲店。',
      f7_full: '中央町の「Cafe FUJINUMA」で香り豊かな自家焙煎コーヒーを味わい、午後の城址散策へ向けた心地よい休息をとった。',
      image_prompt:
        'Minimalist warm Japanese specialty coffee cafe interior with wooden table, pour-over coffee cup and baked pastry in soft afternoon light, no text, no people.',
    },
    {
      name: '城山公園（祇園城跡）',
      spot_type: '見どころ',
      description:
        '中世の名族・小山氏の居城であった祇園城（小山城）の跡地に整備された公園。土塁や空堀の遺構が残り、思川を見下ろす高台の緑が心地よい。終日開放・入園無料。',
      address: '栃木県小山市城山町1-1',
      prefecture: '栃木県',
      municipality: '小山市',
      lat: 36.318003,
      lng: 139.799471,
      clue: 'Cafe FUJINUMAから西北西へ徒歩11分、思川沿いの高台に広がる「城山公園（祇園城跡）」へ登ってみよう（終日開放・無料）。ここは平安末期から戦国時代にかけて関東に覇を唱えた名族・小山氏の居城があった場所で、園内には往時を偲ばせる土塁や空堀の地形が今も色濃く残されている。木々の間を抜ける爽やかな風と眼下を流れる穏やかな思川の景色を眺め、歴史のロマンにじっくり浸りたい。',
      surprise:
        '市街地のすぐ西側にこれほど見事な中世城郭の地形と緑豊かな公園が残されていることに驚かされる。高台から思川の流れを見下ろしていると、かつて小山氏がこの地の水運と交通の要衝を守り抜いた理由が自然と実感として胸に深く迫ってくるようだ。実に見晴らしが良い。',
      hook: '城山公園を後にしたら、南南東へ徒歩11分の須賀神社を訪ねて旅を結ぼう。',
      f7_fragment: '思川を見下ろす高台に土塁と堀の面影を残す、小山氏ゆかりの城跡。',
      f7_full: '思川沿いの「城山公園（祇園城跡）」を歩き、中世の土塁や豊かな緑の中で小山の長い歴史と美しい川景色に深く触れた。',
      image_prompt:
        'Green Japanese riverside castle-ruin hilltop park of Shiroyama Park overlooking the calm Omoi River beneath mature cherry and pine trees, no text, no people.',
    },
    {
      name: '須賀神社',
      spot_type: '見どころ',
      description:
        '藤原秀郷の創建と伝わる小山地域の総鎮守。徳川家ゆかりの朱神輿や長い参道、厳かな拝殿が親しまれる古社。参拝自由（社務所9:00〜16:00）。',
      address: '栃木県小山市宮本町1-2-4',
      prefecture: '栃木県',
      municipality: '小山市',
      lat: 36.312026,
      lng: 139.798438,
      clue: '城山公園から南南東へ徒歩11分、堂々たる鳥居と長い参道が迎える「須賀神社」で散策を締めくくろう（参拝自由・社務所9:00〜16:00）。藤原秀郷公の創建と伝わり、小山の総鎮守として千年以上の信仰を集めてきた由緒ある古社だ。徳川家康ゆかりの朱神輿が伝わる歴史深い境内で静かに手を合わせ、駅前から麺と珈琲、城跡と辿ってきた小山の街歩きの思い出を清らかに、そして心静かに結びたい。',
      surprise:
        '大通りから一歩参道へ足を踏み入れると、街の喧騒がすっと遠のき、古い木立に守られた神聖な空気に包まれる。城下町・宿場町として発展してきた小山の中心で、今も地域の人々の誇りとして大切に守り継がれている気品がひしひしと伝わってくる素晴らしい古社だ。',
      hook: '',
      f7_fragment: '藤原秀郷創建と伝わり長い参道が清らかな、小山の総鎮守の古社。',
      f7_full: '千年の歴史を伝える「須賀神社」の厳かな参道を歩いて参拝し、小山の城下町と川辺の散策を心から清々しく締めくくった。',
      image_prompt:
        'Dignified approach to Suga Shrine in Oyama with tall stone lanterns, grand torii gate and historic wooden haiden hall shaded by evergreen trees, no text, no people.',
    },
  ],
};
