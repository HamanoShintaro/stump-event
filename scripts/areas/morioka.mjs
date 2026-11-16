export default {
  slug: 'morioka',
  station_order: 646,
  station: '盛岡',
  line: 'JR東北新幹線',
  area_name: '盛岡・賢治の足跡と赤レンガの城下町',
  prefecture: '岩手県',
  municipality: '盛岡市',
  category: '歴史とグルメ',
  budget_tier: 3,
  tags: ['岩手県', '盛岡市', '盛岡駅', '光原社', 'わんこそば'],
  style_genre: 'retro_sepia_ink',
  title: '盛岡・賢治の民藝と赤レンガの城下町を歩く',
  description:
    'JR盛岡駅から、宮沢賢治『注文の多い料理店』を出版した「光原社 可否館」と南部藩総鎮守「櫻山神社」、石垣美しい「盛岡城跡公園」、明治の洋館「岩手銀行赤レンガ館」、明治40年創業「東家 本店」を巡る散策路。',
  eyecatch_prompt:
    'Retro sepia ink and watercolor illustration of Morioka castle town in Iwate showing the red brick dome of Iwate Bank Red Brick Building, stone castle walls of Morioka Castle Park with autumn foliage, cozy folk craft courtyard of Kogensha, and traditional wanko soba shop, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '文学と民藝、明治の洋風建築と伝統の食が響き合う盛岡を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「光原社 可否館」の中庭へ続く小径を抜け、重厚な木造喫茶室で珈琲を味わった瞬間',
      subtext:
        '宮沢賢治の童話集を世に出した老舗の空気と、南部鉄器や漆器の温もりが旅の序章を彩った。',
      badge: {
        code: 'morioka_kogensha',
        name_ja: '盛岡・賢治ゆかりの光原社で珈琲を嗜みし者',
        subtitle_en: 'Guest of Kogensha Coffee',
        description:
          '光原社 可否館を訪ね、宮沢賢治ゆかりの民藝と静かな珈琲の時間を味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a classic dark wooden coffee table with a white porcelain cup beside a folk craft courtyard lantern, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「盛岡城跡公園」の幾重にも積まれた花崗岩の石垣の上に立ち、城下町を見渡した瞬間',
      subtext:
        '北上川と中津川に抱かれた不来方城の石垣が、四百年続く盛岡の品格を物語っていた。',
      badge: {
        code: 'morioka_castle',
        name_ja: '盛岡・不来方城の優美な石垣を仰ぎし者',
        subtitle_en: 'Walker of Morioka Castle',
        description:
          '盛岡城跡公園を訪ね、東北三大城跡の一つに数えられる美しい石垣を巡った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing grand stacked granite castle stone walls surrounded by maple and cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「岩手銀行赤レンガ館」の辰野式赤レンガと白い花崗岩のコントラストを見上げた瞬間',
      subtext:
        '東京駅と同じ辰野金吾が手掛けた明治の洋館が、中津川のたもとで今も街を照らしていた。',
      badge: {
        code: 'morioka_akarenga',
        name_ja: '盛岡・明治の名建築赤レンガ館を巡りし者',
        subtitle_en: 'Admirer of Red Brick Bank',
        description:
          '岩手銀行赤レンガ館を訪ね、辰野金吾設計の国の重要文化財を鑑賞した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a classic Meiji-era red brick building with white granite stripes and a green copper dome roof, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「東家 本店」の座敷で、威勢のよい掛け声とともに名物・わんこそばを味わった瞬間',
      subtext:
        '明治四十年創業の老舗のおもてなしと薬味の彩りが、盛岡の旅の締めくくりを笑顔にした。',
      badge: {
        code: 'morioka_azumaya',
        name_ja: '盛岡・老舗東家でわんこそばを味わいし者',
        subtitle_en: 'Taster of Azumaya Wanko Soba',
        description:
          '明治創業の老舗・東家 本店を訪ね、盛岡伝統のわんこそばのおもてなしに触れた証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing stacked black and vermilion lacquer soba bowls with small dishes of traditional condiments, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'morioka_complete',
    name_ja: '盛岡・賢治の足跡と赤レンガを巡る旅人',
    subtitle_en: 'Walker of Morioka',
    description:
      '光原社 可否館から櫻山神社、盛岡城跡公園、岩手銀行赤レンガ館、東家 本店までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a red brick copper-domed Meiji building, stacked lacquer wanko soba bowls and castle granite stone walls, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '光原社 可否館',
      spot_type: '休憩',
      description:
        '大正13年創業、宮沢賢治の童話集『注文の多い料理店』を出版した民藝の老舗に併設された喫茶室。深煎り珈琲とくるみクッキーが人気。10:00〜17:00、毎月15日休（土日祝は翌平日振替）。',
      address: '岩手県盛岡市材木町2-18',
      prefecture: '岩手県',
      municipality: '盛岡市',
      lat: 39.705982,
      lng: 141.138004,
      clue: '盛岡駅から北上川に架かる開運橋を渡り、材木町に佇む民藝と珈琲の名所「光原社 可否館」を訪ねよう（10:00〜17:00、毎月15日休）。大正十三年に創業し、宮沢賢治の童話集『注文の多い料理店』を刊行したことで知られる文化の発信地だ。中庭へ続く石畳を歩き、深煎り珈琲とくるみクッキーを味わえば、盛岡らしい静かで知的な旅がこれからもずっと心地よく豊かに穏やかに美しく始まる。',
      surprise:
        '店名の「光原社」は宮沢賢治自身が名付けたもので、敷地内には賢治の石碑や木彫りの看板など当時の面影が大切に守られている。',
      hook: '珈琲で目覚めたら、東へ歩いて盛岡城跡懐の櫻山神社へ参拝しよう。',
      f7_fragment: '宮沢賢治の童話集を刊行した老舗民藝店に佇む、静謐な珈琲室。',
      f7_full:
        '盛岡の「光原社 可否館」で民藝の美と深煎り珈琲に触れ、宮沢賢治の息吹が残る城下町歩きを始めた。',
      image_prompt:
        'Traditional wooden folk craft shop courtyard and classic coffee house Kogensha in Morioka with stone pathway and lantern in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: '櫻山神社',
      spot_type: '見どころ',
      description:
        '盛岡城跡の懐に鎮座する南部藩総鎮守。南部藩初代藩主・南部信直公などを祀り、社殿背後には高さ約6mの巨岩「烏帽子岩」がそびえる。参拝24時間（社務所9:00〜17:00）、無休。',
      address: '岩手県盛岡市内丸1-42',
      prefecture: '岩手県',
      municipality: '盛岡市',
      lat: 39.701448,
      lng: 141.151904,
      clue: '材木町から東へ進み、盛岡城跡の懐に鎮座する南部藩総鎮守「櫻山神社」へお参りしよう（社務所9:00〜17:00、無休）。南部藩初代藩主・南部信直公などを祀り、今も市民から「桜山さん」と親しまれている由緒ある古社だ。拝殿の背後には高さ約六メートルの巨岩「烏帽子岩」がそびえ、古くから盛岡の安泰を守り続けてきた尊い霊験がこれからもずっと心静かに深く清らかに感謝とともに肌で感じられる。',
      surprise:
        '境内の奥にそびえる「烏帽子岩」は、盛岡城の築城工事中に地中から掘り出された巨大な花崗岩で、吉兆のシンボルとして今も厚く信仰されている。',
      hook: 'お参りを終えたら、石段を登ってすぐ隣の盛岡城跡公園を歩こう。',
      f7_fragment: '巨大な烏帽子岩が鎮座する、南部藩総鎮守「桜山さん」。',
      f7_full:
        '南部藩総鎮守の「櫻山神社」に参拝し、ご神体の巨岩「烏帽子岩」と城下町の祈りの歴史に触れた。',
      image_prompt:
        'Historic Shinto shrine Sakurayama-jinja nestled beside towering castle granite stones and pine trees in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: '盛岡城跡公園',
      spot_type: '見どころ',
      description:
        '北上川と中津川の合流点に築かれた不来方城跡の史跡公園。地元産の花崗岩を精巧に積み上げた石垣は東北三大城跡の一つに数えられる美しさを誇る。散策自由・無休。',
      address: '岩手県盛岡市内丸1-37',
      prefecture: '岩手県',
      municipality: '盛岡市',
      lat: 39.7003,
      lng: 141.151079,
      clue: '櫻山神社から石段を登り、国指定史跡「盛岡城跡公園」を巡ろう（散策自由・無休）。花崗岩の石垣の上から啄木や賢治も愛した城下町の眺めをゆっくり楽しみたい。',
      surprise:
        '盛岡城の石垣の多くは、石の面を削らず自然なままに巧みに噛み合わせる「野面積み」や「打ち込み接ぎ」で造られ、四百年の時を経ても美しい姿をとどめている。',
      hook: '城跡を降りたら、東の中津川を渡って岩手銀行赤レンガ館を訪ねよう。',
      f7_fragment: '精巧な花崗岩の石垣が残る、石川啄木や宮沢賢治も愛した不来方城跡。',
      f7_full:
        '「盛岡城跡公園」の美しい花崗岩の石垣を歩き、啄木や賢治が青春時代に眺めた盛岡の風景を重ねた。',
      image_prompt:
        'Majestic granite stone walls and terraced walkways of Morioka Castle Park framed by pine and maple trees in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: '岩手銀行赤レンガ館',
      spot_type: '見どころ',
      description:
        '東京駅を手掛けた辰野金吾と盛岡出身の葛西萬司の設計により、明治44年（1911年）に建てられた国重要文化財の洋館。10:00〜17:00（最終入館16:30）、火曜休、岩手銀行ゾーン無料（盛岡銀行ゾーン300円）。',
      address: '岩手県盛岡市中ノ橋通1-2-20',
      prefecture: '岩手県',
      municipality: '盛岡市',
      lat: 39.700519,
      lng: 141.155215,
      clue: '城跡公園から中津川を渡り、明治四十四年建築の国重要文化財「岩手銀行赤レンガ館」を訪ねよう（10:00〜17:00、火曜休、一部有料300円）。東京駅を手掛けた辰野金吾と葛西萬司の設計によるルネサンス様式の洋館で、赤レンガと白い花崗岩の帯、緑青のドームが実に美しい。吹き抜けホールや金庫室を見学し、明治の近代化をこれからもずっと心ゆくまでじっくりと楽しく深く豊かに体感しよう。',
      surprise:
        '設計者の葛西萬司は盛岡出身の建築家で、師である辰野金吾と共同で東京駅だけでなくふるさと盛岡にもこの傑作を残した。',
      hook: '赤レンガ館を出たら、中ノ橋通を東へ歩いて2分の東家 本店でわんこそばを味わおう。',
      f7_fragment: '辰野金吾と葛西萬司が手掛けた、明治四十四年建築の国重要文化財。',
      f7_full:
        '「岩手銀行赤レンガ館」の重厚な赤レンガと白い花崗岩の造形を仰ぎ、明治の盛岡の近代建築美を堪能した。',
      image_prompt:
        'Grand Meiji-era Iwate Bank Red Brick Building with white granite bands and green copper turret domes beside Nakanohashi Bridge in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: '東家 本店',
      spot_type: '食事',
      description:
        '明治40年（1907年）創業、盛岡名物「わんこそば」の老舗本店。給仕の掛け声とともに温かいひと口そばを味わえるほか、特製かつ丼なども人気。11:00〜15:00・17:00〜19:00 L.O.（わんこそば18:30 L.O.）、第1水曜休。',
      address: '岩手県盛岡市中ノ橋通1-8-3',
      prefecture: '岩手県',
      municipality: '盛岡市',
      lat: 39.700486,
      lng: 141.156575,
      clue: '赤レンガ館から中ノ橋通を東へ歩いて2分、明治四十年創業の老舗そば処「東家 本店」で旅を締めくくろう（11:00〜15:00・17:00〜19:00 L.O.、第1水曜休）。盛岡名物「わんこそば」の殿堂として知られ、給仕さんの「はい、じゃんじゃん」の掛け声とともに温かいひと口そばが次々と椀に注がれる。特製のかつ丼や南部そばも絶品で、盛岡の旅を明るく心温かく笑顔で結べる。',
      surprise:
        'わんこそばでお腹いっぱいになって終わる合図は「お椀に蓋を閉めること」で、蓋を閉める前に給仕さんが次のそばを入れてくる駆け引きも楽しみの一つ。',
      hook: '',
      f7_fragment: '明治四十年創業、お給仕のおもてなしが名物のわんこそばの老舗本店。',
      f7_full:
        '明治創業の「東家 本店」で伝統のわんこそばのおもてなしを味わい、文学と建築と食の盛岡旅を笑顔で結んだ。',
      image_prompt:
        'Historic wooden facade of Azumaya main soba restaurant in Morioka with warm noren entrance and lacquerware bowls inside in retro sepia ink and watercolor style, no text, no letters.',
    },
  ],
};
