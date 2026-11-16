export default {
  slug: 'bizen_katakami',
  station_order: 604,
  station: '備前片上駅',
  line: 'JR赤穂線',
  area_name: '備前片上・港町と備前焼狛犬の街',
  prefecture: '岡山県',
  municipality: '備前市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['岡山県', '備前市', '備前片上駅', '宇佐八幡宮', '備前焼'],
  style_genre: 'pastel_chalk_morning',
  title: '片上の港町と備前焼の狛犬に出会う旅',
  description:
    '瀬戸内海の片上湾の奥に開け、古くから西国街道の宿場および海上交通の要衝として栄えた岡山県備前市片上。明治期の備前焼宮獅子が守る古社から、地元で評判の定食食堂、急な石段と備前焼狛犬の八幡宮、木の温もりあふれる隠れ家カフェを経て、レトロな地域の和菓子・駄菓子処までを巡る。',
  eyecatch_prompt:
    'Poetic morning-mist soft pastel and colored pencil illustration of Bizen-Katakami historic coastal town in Okayama, featuring steep stone shrine steps flanked by rustic brown Bizen-ware guardian dog statues beneath pines, traditional tiled merchant houses, and calm harbor light on natural textured cream paper, no text, no people.',
  question:
    '片上の港町と備前焼の狛犬を巡り、あなたの五感を優しく満たしたのはどれ？',
  choices: [
    {
      key: 'A',
      spot_index: 3,
      text: '「宇佐八幡宮」の急な石段を上り、県下有数の大きさを誇る備前焼狛犬を見上げたとき',
      subtext:
        '焼き物の里・備前ならではの土の温もりと力強さを宿した狛犬の佇まいに、思わず見入ってしまった。',
      badge: {
        code: 'bizen_katakami_usa_hachimangu',
        name_ja: '宇佐八幡宮・備前焼狛犬を仰ぎし者',
        subtitle_en: 'Admirer of Bizen-ware Guardian Lions',
        description:
          '宇佐八幡宮を参拝し、市指定文化財の備前焼狛犬と片上の歴史に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting rustic brown ceramic Bizen-ware guardian lion statues beside steep stone shrine steps and spring blossoms, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '西片上の「ともみ食堂」で、バランスの良い手作りの定食ランチを味わったとき',
      subtext:
        '地域の人々に親しまれるアットホームな食堂で、ほっと心が和む家庭的な味わいに癒やされた。',
      badge: {
        code: 'bizen_katakami_tomomi',
        name_ja: '西片上・ともみ食堂の昼餉を味わいし者',
        subtitle_en: 'Guest of Tomomi Shokudo',
        description:
          'ともみ食堂を訪ね、西片上のまちに根づく温かな定食の味を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring a warm wooden Japanese lunch tray with grilled fish, steamed rice, miso soup, and small seasonal side dishes, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '隠れ家のような「カフェ ランバー」で、木の温もりに包まれて珈琲を飲んだとき',
      subtext:
        '木漏れ日のような柔らかな空気の中で、丁寧な珈琲とケーキを楽しむ穏やかな午後に癒やされた。',
      badge: {
        code: 'bizen_katakami_cafe_lumber',
        name_ja: '片上・カフェ ランバーの寛ぎ人',
        subtitle_en: 'Guest of Cafe Lumber Katakami',
        description:
          'カフェ ランバーを訪ね、木のぬくもりあふれる空間でゆったりと一息ついた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a warm wooden table with a ceramic coffee cup and a slice of homemade sponge cake in soft morning light, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 1,
      text: '「恵比須宮」の境内で、海の安全を守り続けてきた精悍な備前焼の宮獅子に出合ったとき',
      subtext:
        'かつて港町として賑わった片上の暮らしと、焼き物文化が祈りと結びつく土地柄を実感した。',
      badge: {
        code: 'bizen_katakami_ebisumiya',
        name_ja: '片上港・恵比須宮の祈りを知る者',
        subtitle_en: 'Pilgrim of Katakami Ebisumiya',
        description:
          '恵比須宮を参拝し、往時の備前焼宮獅子と港町の海上安全の祈りに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a weathered stone shrine torii beside calm harbor waters and a brown ceramic guardian lion, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'bizen_katakami_complete',
    name_ja: '備前片上・港町と備前焼の祈りを巡りし者',
    subtitle_en: 'Walker of Bizen-Katakami Port',
    description:
      '恵比須宮からともみ食堂、宇佐八幡宮、カフェ ランバー、かたかみ夢袋までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a rustic brown ceramic guardian lion, steep stone shrine steps, and traditional nostalgic sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '恵比須宮',
      spot_type: '見どころ',
      description:
        '海上安全や福徳の神として片上の港町で信仰を集めてきた古社。百余年前に造られた精悍な「備前焼の宮獅子（狛犬）」が境内入口を守る。境内参拝自由。',
      address: '岡山県備前市西片上1891-1',
      prefecture: '岡山県',
      city: '備前市',
      lat: 34.739983,
      lng: 134.17915,
      clue: 'JR赤穂線の備前片上駅を出て西片上方面へ歩くと、片上の港町の暮らしを見守ってきた「恵比須宮」に着く（境内参拝自由）。鳥居の前に立つと、百余年前に地元の焼き物技術で造られた精悍な「備前焼の宮獅子」が出迎えてくれる。石造とは異なる赤褐色の土肌と凛々しい造形は、まさに備前ならではの地域文化財だ。港の安全を祈り続けてきた古社の静寂に耳を澄ませ、最初のしるしをここで力強く刻み出そう。',
      surprise:
        '日本六古窯の一つに数えられる備前焼の産地であることから、この地域の神社には奉納された見事な備前焼の狛犬が多く残されている。潮風を受ける港町の信仰と、千年の窯業文化が一つに溶け合う風景がここに広がり今も変わらず生き生きと力強くずっと息づき続ける。',
      hook: '恵比須宮を参拝したら、北東へ徒歩8分のともみ食堂へ向かおう。',
      f7_fragment: '赤褐色の土肌が凛々しい備前焼の宮獅子、片上の海を見守る恵比須宮。',
      f7_full: '港町の祈りを伝える恵比須宮に参拝し、往時の備前焼宮獅子が守る静かな境内で焼き物と海の文化にじっくり深く触れた。',
      image_prompt:
        'Wide morning view of a tranquil Shinto shrine entrance near Katakami port with weathered stone torii and rustic brown Bizen-ware guardian lion statues, no text, no people.',
    },
    {
      name: 'ともみ食堂',
      spot_type: '食事',
      description:
        '西片上エリアで人気のアットホームな食堂。品数豊かでバランスの良い手作りの日替り定食などが味わえる。営業時間11:00〜14:00、日・月・水曜等不定休。',
      address: '岡山県備前市西片上1297-19',
      prefecture: '岡山県',
      city: '備前市',
      lat: 34.743065,
      lng: 134.183183,
      clue: '恵比須宮から北東へ徒歩8分、西片上の「ともみ食堂」で昼食にしよう（11:00〜14:00、日・月・水曜等不定休）。手作りの日替り定食を味わい、ほっとひと息つこう。',
      surprise:
        'かつての宿場町・西片上の生活道路沿いに佇み、地元の常連客からも厚い信頼を寄せられる食事処だ。季節の食材を取り入れた家庭的で優しい味わいの日替り定食が、旅人の心と体を穏やかに温かく芯からじっくり満たしてくれると多くの人々から高く好評で評判だ。',
      hook: 'ともみ食堂で満たされたら、北東へ徒歩6分の宇佐八幡宮を訪ねよう。',
      f7_fragment: '西片上の生活通りに漂う温かな出汁の香り、家庭的で優しい昼の定食。',
      f7_full: '西片上の「ともみ食堂」でバランスの良い手作り定食を味わい、片上の穏やかな日常の温もりにじっくり心から安らいだ。',
      image_prompt:
        'Medium-wide interior view of a cozy local Japanese neighborhood eatery table with a home-style lunch tray of grilled fish, steamed rice, miso soup, and small dishes, no text, no people.',
    },
    {
      name: '宇佐八幡宮',
      spot_type: '見どころ',
      description:
        '南北朝期に足利尊氏が豊前宇佐八幡宮を勧請して創建したと伝わる古社。市指定文化財の巨大な備前焼狛犬や、早春の「備前片上ひなめぐり」の石段が名高い。境内参拝自由。',
      address: '岡山県備前市西片上1',
      prefecture: '岡山県',
      city: '備前市',
      lat: 34.745443,
      lng: 134.185933,
      clue: 'ともみ食堂から北東へ徒歩6分、町の背後に緑を背負って鎮座する「宇佐八幡宮」の石段を上ろう（境内参拝自由）。南北朝時代に足利尊氏が九州平定の勝願として勧請したと伝わる由緒ある古社で、境内には県下有数の大きさを誇る「備前焼狛犬（市指定文化財）」が堂々と鎮座している。六十二段もの急な石段の上から片上の町並みを一望しながら、このまちの歴史の重みをここでじっくり感じ取ってみよう。',
      surprise:
        '毎年春先に行われる「備前片上ひなめぐり」の期間には、この六十二段の急な石段いっぱいに約三百体もの雛人形が飾られ、町一番の華やかな見どころとなる。焼き物の狛犬と歴史ある社殿が、今も地域の誇りとしてずっと変わらず大切に長く守り継がれ続けていく。',
      hook: '宇佐八幡宮を参拝したら、南東へ徒歩4分のカフェ ランバーで珈琲を一服しよう。',
      f7_fragment: '六十二段の石段の上に鎮座する巨大な備前焼狛犬、片上の歴史を伝える古社。',
      f7_full: '市指定文化財の備前焼狛犬を擁する宇佐八幡宮を参拝し、急な石段の先に広がる片上の歴史と街並みをじっくりと仰いだ。',
      image_prompt:
        'Top-down flatlay detail of rustic unglazed brown Bizen pottery texture, pine needles, and dappled sunlight on ancient shrine stone steps, no text, no people.',
    },
    {
      name: 'カフェ ランバー',
      spot_type: '休憩',
      description:
        '東片上の住宅街に佇む木の温もりあふれる隠れ家カフェ。香り高い珈琲と手作りケーキで穏やかな時間を過ごせる。営業時間9:00〜17:00、日曜・祝日定休。',
      address: '岡山県備前市東片上43',
      prefecture: '岡山県',
      city: '備前市',
      lat: 34.743735,
      lng: 134.187051,
      clue: '宇佐八幡宮から南東へ徒歩4分、木の温もりが心地よい「カフェ ランバー」で足を休めよう（9:00〜17:00、日・祝日定休）。備前市役所や旧西国街道の道筋にもほど近い隠れ家的な喫茶室で、穏やかな陽射しが差し込む木の空間が旅の疲れを優しく解きほぐしてくれる。丁寧に淹れられた珈琲と手作りスイーツを楽しみながら、ここまでの街歩きの余韻にここでじっくりと心ゆくまでゆったり浸ろう。',
      surprise:
        '木材をふんだんに用いた落ち着いた内装が店名の通り温もりを感じさせ、地元の常連客が静かに語らう憩いの場となっている。喧騒から離れた穏やかな空気の中で、片上湾の街歩きにぴったりの安らぎのひとときが今も毎日ゆったり静かに心地よく穏やかに流れ続けていく。',
      hook: 'カフェ ランバーで寛いだら、西へ徒歩6分のかたかみ夢袋でお土産を選ぼう。',
      f7_fragment: '木のぬくもりに包まれる隠れ家カフェ、珈琲の香りと穏やかな昼下がり。',
      f7_full: '東片上の「カフェ ランバー」で香り高い珈琲と手作りケーキを味わい、木の温もりあふれる空間でゆったり一息ついた。',
      image_prompt:
        'Low-angle interior view of a cozy wood-paneled Japanese cafe table with a steaming ceramic coffee cup, homemade cake slice, and soft sunlight through timber slats, no text, no people.',
    },
    {
      name: 'かたかみ夢袋',
      spot_type: '買い物',
      description:
        '西片上エリアで地域の人々に親しまれる、レトロな雰囲気の和菓子・駄菓子と手作り雑貨のコミュニティ拠点。営業時間や定休日は時期により変動あり。',
      address: '岡山県備前市西片上1255',
      prefecture: '岡山県',
      city: '備前市',
      lat: 34.743809,
      lng: 134.18318,
      clue: 'カフェ ランバーから西へ徒歩6分、昔ながらの西国街道の風情が残る通りに佇む「かたかみ夢袋」へ立ち寄ろう（不定休）。一歩入ればどこか懐かしい駄菓子や和菓子、地域の人々が丹精込めて作った手作り雑貨が温かく出迎えてくれる。ひなめぐりの時期をはじめ片上のまちづくりの拠点としても愛されるこの場所で、素朴で心温まるお土産をここでゆっくりと選び取って思い出の旅を美しく締めくくろう。',
      surprise:
        '西片上駅のほど近くにあり、子どもからお年寄りまで気軽に立ち寄れる街の縁側のような存在だ。大きな観光商業施設とは一味違う、備前片上の等身大の暮らしと人情に直に触れられる心地よい結びの場として地域の人から今もずっと変わらず深く親しまれ愛され続ける。',
      hook: '',
      f7_fragment: '西国街道の面影を残す懐かしい店先、地域の温もりが詰まった夢袋。',
      f7_full: '西片上の「かたかみ夢袋」で懐かしいお菓子や雑貨を手に取り、港町と備前焼の祈りを巡る旅を美しく心から締めくくった。',
      image_prompt:
        'Golden-hour view of a nostalgic wooden Japanese neighborhood sweet and craft shop counter displaying colorful paper-wrapped traditional candies and handmade cloth pouches, no text, no people.',
    },
  ],
};
