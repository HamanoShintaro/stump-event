export default {
  slug: 'nagaoka',
  station_order: 592,
  station: '長岡駅',
  line: 'JR上越新幹線・信越本線・上越線',
  area_name: '長岡・雁木通りと銘菓の城下町',
  prefecture: '新潟県',
  municipality: '長岡市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['新潟県', '長岡市', '長岡駅', 'へぎそば', '越乃雪'],
  style_genre: 'katazome_chigirie_folk',
  title: '雪国の知恵と老舗の甘味を巡る長岡',
  description:
    '越後長岡藩の城下町として栄え、豪雪と戦災を乗り越えて力強く復興を遂げてきた新潟県長岡市。木組みの大屋根が市民を迎える交流拠点から、布海苔つなぎのへぎそば、市民の守護神と称えられる古社、二百年続く名物饅頭、そして日本三大銘菓の茶房まで、雪国の暮らしと美意識に出会う。',
  eyecatch_prompt:
    'Rich decorative katazome stencil-dyed and torn washi paper folk-art illustration of Nagaoka traditional sweets, delicate white sugar-pressed squares, woven wooden soba hegi tray, and warm lantern-lit snow-country wooden eaves in vibrant vermilion red, deep indigo, and warm gold leaf tones, no text, no people.',
  question:
    '雪国の知恵と伝統の味覚が息づく長岡で、大切な人に持ち帰りたい記憶はどれだろう？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「アオーレ長岡」の開放的な屋根付き広場「ナカドマ」を見上げた瞬間',
      subtext:
        '市役所とアリーナを融合させ、雪国の雁木文化を現代建築へ昇華させた独創的な空間に驚かされた。',
      badge: {
        code: 'nagaoka_aore',
        name_ja: 'ナカドマの屋根を仰ぎし者',
        subtitle_en: 'Admirer of Aore Nagaoka',
        description:
          'アオーレ長岡を訪ね、雪国の雁木を受け継ぐ現代の木組み空間を体感した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting geometric timber lattice ceiling beams above an open civic plaza, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「越後長岡小嶋屋 殿町本店」で、翡翠色のへぎそばを手繰り上げた瞬間',
      subtext:
        '布海苔をつなぎに使った独特のコシと喉越しに、織物の産地として栄えた越後の風土を感じた。',
      badge: {
        code: 'nagaoka_hegisoba',
        name_ja: '越後のへぎそばを味わいし者',
        subtitle_en: 'Connoisseur of Echigo Hegisoba',
        description:
          '越後長岡小嶋屋 殿町本店を訪ね、布海苔つなぎの伝統的なへぎそばを堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing neatly coiled emerald-tinted soba noodles arranged in small bundles inside a rectangular wooden hegi tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 5,
      text: '「越乃雪本舗大和屋」の茶房で、口の中で淡雪のように溶ける日本三大銘菓を味わったとき',
      subtext:
        '二百年以上も受け継がれてきたもち米と和三盆の繊細な口どけに、長岡藩の雅な茶の湯文化が重なった。',
      badge: {
        code: 'nagaoka_koshinoyuki',
        name_ja: '日本三大銘菓・越乃雪を極めし者',
        subtitle_en: 'Master of Koshinoyuki Confection',
        description:
          '越乃雪本舗大和屋を訪ね、長岡が誇る日本三大銘菓「越乃雪」の口どけに触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring delicate white square pressed-sugar confections arranged on a dark lacquer plate beside a ceramic matcha bowl, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「御菓子司 紅屋重正」で、素朴で力強い甘みの名物「大手饅頭」を手にしたとき',
      subtext:
        '薄皮に包まれたたっぷりのあんこと、長岡の城下で二百年以上愛され続ける職人の誇りが伝わってきた。',
      badge: {
        code: 'nagaoka_beniya',
        name_ja: '長岡城下・紅屋重正の銘菓を求めし者',
        subtitle_en: 'Patron of Beniya Shigemasa',
        description:
          '御菓子司 紅屋重正を訪ね、創業二百年超の伝統を受け継ぐ和菓子の味を持ち帰った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting two round thin-skinned steamed manju buns with dark red bean paste peeking through, resting on a bamboo leaf, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nagaoka_complete',
    name_ja: '長岡・雁木と銘菓の案内人',
    subtitle_en: 'Guide of Nagaoka Craft and Heritage',
    description:
      'アオーレ長岡から越後長岡小嶋屋 殿町本店、平潟神社、御菓子司 紅屋重正、越乃雪本舗大和屋までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining timber lattice eaves, coiled soba noodles, and snow-white pressed sugar squares, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'アオーレ長岡',
      spot_type: '見どころ',
      description:
        '建築家・隈研吾氏が設計した長岡市役所と市民交流空間の複合施設。全天候型広場「ナカドマ」は8:00〜22:00開放。',
      address: '新潟県長岡市大手通1-4-10',
      prefecture: '新潟県',
      city: '長岡市',
      lat: 37.446145,
      lng: 138.851233,
      clue: '長岡駅の西口から大手通の屋根付きデッキを歩くと、木の香り漂う壮大な交流拠点「アオーレ長岡」へと直結する（ナカドマ8:00〜22:00開放）。雪国の軒先を繋ぐ伝統的な「雁木（がんぎ）」の知恵を現代建築へ取り入れた大屋根の下には、市庁舎とアリーナ、屋根付き広場「ナカドマ」が一体となって広がる。冬の深い雪を凌ぎながら市民が心地よく集う、長岡ならではの街の玄関口を見上げよう。',
      surprise:
        'かつてこの場所は長岡城の本丸跡に近く、近代以降は長岡の商業の中心地として栄えた一帯にあたる。市役所を郊外へ移さずあえて中心街のど真ん中に置いた設計は、雪国の自治体再生の先駆的モデルとして全国から注目された。',
      hook: 'アオーレ長岡を抜けたら、西南西へ徒歩2分の越後長岡小嶋屋 殿町本店へ向かおう。',
      f7_fragment: '木組みの大屋根が雪国の街を包むナカドマ、現代に蘇る雁木の広場。',
      f7_full: '隈研吾氏が設計を手がけたアオーレ長岡を訪ね、雪国の伝統的な雁木の知恵を活かした開放的な木造空間を仰いだ。',
      image_prompt:
        'Wide architectural view of a bright wooden-lattice covered civic plaza with warm cedar ceiling beams and open timber walkways under crisp morning light, no text, no people.',
    },
    {
      name: '越後長岡小嶋屋 殿町本店',
      spot_type: '食事',
      description:
        '昭和三十年代に創業した長岡を代表するへぎそばの名店。布海苔をつなぎにした弾力ある蕎麦を木箱「へぎ」に盛る。営業時間11:00〜22:00（L.O. 21:00）、水曜定休（祝日の場合は営業）。',
      address: '新潟県長岡市殿町2-2-9',
      prefecture: '新潟県',
      city: '長岡市',
      lat: 37.445645,
      lng: 138.849953,
      clue: 'アオーレ長岡から西南西へ徒歩2分、「越後長岡小嶋屋 殿町本店」で昼食にしよう（11:00〜22:00、水曜定休・祝日の場合は営業）。名物のへぎそばを味わい、ひと息つこう。',
      surprise:
        '蕎麦のつなぎに海藻の「布海苔（ふのり）」を使うのは、かつて越後地方の特産だった麻織物・小千谷縮の糸の糊付けに布海苔を用いていた技術が転用されたためと伝わる。一口大に美しく丸めた「手振り」の盛り付けにも越後ならではの美意識が光る。',
      hook: '小嶋屋で喉を潤したら、西北西へ徒歩7分の平潟神社を目指そう。',
      f7_fragment: '木箱に一口ずつ並んだ翡翠色のへぎそば、布海苔が織りなす滑らかなコシ。',
      f7_full: '越後の麻織物文化にルーツを持つ布海苔つなぎのへぎそばを、昭和三十年代創業の殿町の本店でじっくり味わった。',
      image_prompt:
        'Medium-wide dining table scene inside a warm Japanese soba restaurant with neatly coiled emerald-tinted noodles on a wooden hegi tray and dipping cup, no text, no people.',
    },
    {
      name: '平潟神社',
      spot_type: '見どころ',
      description:
        '長岡市民から「智慶様」と親しまれる表町の古社。長岡市戦災殉難者慰霊塔が隣接し、城下町の鎮守として信仰を集める。境内参拝自由。',
      address: '新潟県長岡市表町1-6-1',
      prefecture: '新潟県',
      city: '長岡市',
      lat: 37.446992,
      lng: 138.845479,
      clue: '小嶋屋から西北西へ徒歩7分、表町の落ち着いた街並みに鎮座する「平潟神社」を訪ねよう（境内参拝自由）。古くから長岡の守護神として市民に「智慶様（ちけんさま）」の名で親しまれ、手入れされた境内の奥には静かな緑陰が広がっている。隣接する公園には長岡空襲の慰霊塔も立ち、雪国の厳しい自然や歴史の荒波を越えて今に続く、城下町の祈りの風景をこの静かな境内でじっくりと感じ取ることができる。',
      surprise:
        '社伝では天平の頃に僧・行基が創建したと伝わり、長岡藩の歴代藩主からも篤い崇敬を受けた古社として知られる。毎年八月の長岡まつりでは、空襲からの復興と鎮魂の祈りを込めた厳粛な神事の舞台として多くの市民が集う。',
      hook: '平潟神社を参拝したら、北東へ徒歩3分の御菓子司 紅屋重正へ立ち寄ろう。',
      f7_fragment: '表町の街なかに息づく鎮守の杜と、市民が「智慶様」と慕う社殿。',
      f7_full: '長岡の守護神として親しまれる平潟神社に手を合わせ、城下町の祈りと戦災復興の歴史に深く思いを馳せた。',
      image_prompt:
        'Detailed close-up of weathered cedar temple carvings, stone torii pillar texture, and green moss in a quiet historic shrine courtyard, no text, no kanji, no people.',
    },
    {
      name: '御菓子司 紅屋重正',
      spot_type: '買い物',
      description:
        '文化年間に創業した二百年以上の歴史を誇る老舗和菓子店。薄皮でたっぷりあんを包んだ「大手饅頭」や「越後長岡藩」が銘菓。営業時間9:00〜17:00、火曜定休。',
      address: '新潟県長岡市表町1-10-35',
      prefecture: '新潟県',
      city: '長岡市',
      lat: 37.448413,
      lng: 138.846801,
      clue: '平潟神社から北東へ徒歩3分、表町に暖簾を構える「御菓子司 紅屋重正」へ足を運ぼう（9:00〜17:00、火曜定休）。二百年以上前から城下町で親しまれてきた銘菓「大手饅頭」は、麹の香りほのかな薄皮から透けるほどのあんこがぎっしり詰まった伝統の味わい。店先に並ぶ素朴で上品な和菓子の数々をゆっくり眺めながら、長岡の城下町文化を今に伝える旅の手土産をここでじっくり選び取ろう。',
      surprise:
        '看板銘菓「大手饅頭」の名は、かつて長岡城の大手門近くに店を構えていたことに由来するという。甘酒を仕込んで生地を発酵させる昔ながらの伝統製法が、度重なる戦災や時代の変化を越えて今も職人の手で守り抜かれてきた。',
      hook: 'お土産を手に入れたら、南西へ徒歩5分の越乃雪本舗大和屋で一服しよう。',
      f7_fragment: 'あんこが透けるほど薄い酒種皮、二百年続く城下町の看板饅頭。',
      f7_full: '長岡城大手門の記憶を名に留める二百年続く老舗で、伝統の「大手饅頭」を旅の手土産として持ち帰った。',
      image_prompt:
        'Low-angle view of a traditional Japanese confectionery wooden storefront with warm paper lanterns (no text) and steamed thin-skinned manju buns neatly boxed inside, no text, no people.',
    },
    {
      name: '越乃雪本舗大和屋',
      spot_type: '休憩',
      description:
        '安永七年創業、日本三大銘菓の一つ「越乃雪」を製造販売する老舗。本店には茶房が併設され、和菓子と抹茶などを味わえる。販売9:00〜17:30・茶房10:00〜16:00（L.O. 15:00）、日曜・水曜不定休。',
      address: '新潟県長岡市柳原町3-3',
      prefecture: '新潟県',
      city: '長岡市',
      lat: 37.44624,
      lng: 138.844136,
      clue: '紅屋重正から南西へ徒歩5分、柳原町に佇む「越乃雪本舗大和屋」の本店茶房で旅を締めくくろう（販売9:00〜17:30・茶房10:00〜16:00、日曜・水曜不定休）。越後のもち米と四国産の和三盆糖を合わせた日本三大銘菓「越乃雪」は、舌に乗せた瞬間にほろりと溶ける淡雪のような口どけが持ち味だ。歴史ある街並みに溶け込む新装の落ち着いた茶房で温かいお茶を傾け、長岡の余韻に浸ろう。',
      surprise:
        '長岡藩九代藩主・牧野忠精公が病床にあった際、初代が献上した菓子を召し上がって快癒したことから「越乃雪」の名を賜ったと伝わる。加賀の「長生殿」、松江の「山川」と並び称される日本三大銘菓が今も変わらぬ製法でここで作られる。',
      hook: '',
      f7_fragment: '舌の上で淡雪のようにほどける白き銘菓と、茶房に広がる抹茶の香り。',
      f7_full: '日本三大銘菓「越乃雪」の本店茶房で温かいお茶とともに一服し、長岡藩ゆかりの雅な茶の湯文化に触れた。',
      image_prompt:
        'Golden-hour interior view of an elegant Japanese wagashi tea salon with a lacquered plate of snow-white square pressed confections and a warm bowl of whisked green matcha tea, no text, no people.',
    },
  ],
};
