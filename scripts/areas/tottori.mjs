export default {
  slug: 'tottori',
  station_order: 663,
  station: '鳥取',
  line: 'JR山陰本線',
  area_name: '鳥取・民藝の里と城下町の庭',
  prefecture: '鳥取県',
  municipality: '鳥取市',
  category: '歴史と街歩き',
  budget_tier: 2,
  tags: ['鳥取県', '鳥取市', '鳥取駅', '民藝', '城跡'],
  style_genre: 'editorial_clean_ink',
  title: '鳥取・すなば珈琲から民藝と城下町の庭へ',
  description:
    'JR鳥取駅から、ご当地喫茶の代名詞「すなば珈琲 新鳥取駅前店」、吉田璋也が築いた「鳥取民藝美術館」、童謡と玩具の「わらべ館」、久松山に抱かれた「鳥取城跡（久松公園）」、池泉庭園を眺めながら一服できる「観音院」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Tottori City showing a warm local coffee shop cup, folk craft pottery and bamboo works of Tottori Folk Crafts Museum, retro wooden schoolhouse facade of Warabekan, stone ramparts of Tottori Castle on Mount Kyusho, and tranquil moss pond garden of Kannon-in Temple, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '鳥取ならではのご当地珈琲と民藝の温もり、城下町の面影を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「すなば珈琲 新鳥取駅前店」で、砂焼き珈琲の香りと鳥取らしいおもてなしに触れた瞬間',
      subtext:
        'ユーモアから生まれたご当地喫茶の温かい一杯が、鳥取城下町歩きの始まりを楽しく彩った。',
      badge: {
        code: 'tottori_sunaba',
        name_ja: '鳥取・砂焼き珈琲の香りを味わいし者',
        subtitle_en: 'Guest of Sunaba Coffee',
        description:
          'すなば珈琲 新鳥取駅前店を訪ね、鳥取名物の珈琲で旅の一歩を始めた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming dark roasted coffee cup on a saucer beside a small sand hourglass and warm toast, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「鳥取民藝美術館」で、暮らしの中に息づく用の美と手仕事の温もりに見入った瞬間',
      subtext:
        '飾らず力強い民藝の器や染織の佇まいが、日々の暮らしを豊かにする美意識を教えてくれた。',
      badge: {
        code: 'tottori_mingei',
        name_ja: '鳥取・民藝の用の美に触れし者',
        subtitle_en: 'Visitor of Tottori Folk Crafts Museum',
        description:
          '鳥取民藝美術館を訪ね、吉田璋也が集めた民藝の器と手仕事の美しさに触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting glazed Japanese folk craft ceramic bowls and a woven bamboo basket arranged on a dark wooden shelf, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「鳥取城跡（久松公園）」で、山裾に築かれた重厚な石垣と堀の風景を仰ぎ見た瞬間',
      subtext:
        '戦国から江戸へと続く城郭の遺構が、久松山の緑の中で静かに歴史を語りかけてきた。',
      badge: {
        code: 'tottori_castle',
        name_ja: '鳥取・久松山の石垣を歩みし者',
        subtitle_en: 'Walker of Tottori Castle Ruins',
        description:
          '鳥取城跡（久松公園）を訪ね、歴史を刻む石垣と城下町の風景を望んだ証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting sturdy curved stone castle ramparts rising beside a calm moat framed by cherry and pine branches, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「観音院」の書院から、緑深い池泉庭園を眺めながら一服の抹茶をいただいた瞬間',
      subtext:
        '城下の喧騒を離れた静かな庭と抹茶の余韻が、鳥取の旅を上品に締めくくってくれた。',
      badge: {
        code: 'tottori_kannonin',
        name_ja: '鳥取・名勝庭園で一服を味わいし者',
        subtitle_en: 'Guest of Kannon-in Temple Garden',
        description:
          '観音院を訪ね、国指定名勝の池泉庭園を望みながら抹茶の一服を愉しんだ証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a whisked green matcha tea bowl beside a serene mossy pond garden with stepping stones and stone lantern, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'tottori_complete',
    name_ja: '鳥取・民藝と城下町の庭を巡る旅人',
    subtitle_en: 'Walker of Tottori',
    description:
      'すなば珈琲から鳥取民藝美術館、わらべ館、鳥取城跡、観音院までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining folk craft ceramic pottery, stone ramparts of Tottori Castle, and a serene green tea bowl, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'すなば珈琲 新鳥取駅前店',
      spot_type: '休憩',
      description:
        'JR鳥取駅北口から徒歩約2分、鳥取名物のご当地喫茶。砂丘の砂で焙煎した「砂焼き珈琲」やモーニングが楽しめる。平日8:00〜16:00・土日祝8:00〜18:00頃、火曜休。',
      address: '鳥取県鳥取市栄町706 B1F',
      prefecture: '鳥取県',
      municipality: '鳥取市',
      lat: 35.495062,
      lng: 134.227188,
      clue: 'JR鳥取駅北口からすぐの「すなば珈琲 新鳥取駅前店」で、まずは温かい一杯から始めよう（平日8:00〜16:00・土日祝8:00〜18:00頃、火曜休）。「スタバはないけど日本一のスナバはある」という名言から誕生したご当地喫茶で、鳥取砂丘の砂で焙煎したこだわりの「砂焼き珈琲」やモーニングが揃っている。地元に愛されるユーモアと温かなおもてなしを、これからも心地よく味わいたい。',
      surprise:
        '駅前すぐの地下に位置しながら朝早くから開いており、観光の出発前に鳥取ならではの温かいおもてなしを気軽に味わえます。',
      hook: '珈琲で目覚めたら、北へすぐ歩いて鳥取民藝美術館を訪ねよう。',
      f7_fragment: '鳥取駅北口すぐのご当地喫茶、砂焼き珈琲とモーニングが名物。',
      f7_full:
        '「すなば珈琲 新鳥取駅前店」で砂焼き珈琲を味わい、鳥取らしい温かいおもてなしに触れた。',
      image_prompt:
        'Warm inviting cafe illustration of Sunaba Coffee in Tottori, cozy wooden interior with dark roasted coffee cups, morning toast set and friendly neighborhood cafe atmosphere, no text, no letters.',
    },
    {
      name: '鳥取民藝美術館',
      spot_type: '見どころ',
      description:
        '民藝運動を牽引した医師・吉田璋也が創設した美術館。牛ノ戸焼や因州中井窯など手仕事の器や染織に出会える。10:00〜17:00、水曜休、大人500円。',
      address: '鳥取県鳥取市栄町651',
      prefecture: '鳥取県',
      municipality: '鳥取市',
      lat: 35.496155,
      lng: 134.227133,
      clue: '鳥取の医師であり民藝運動家でもあった吉田璋也が創設した「鳥取民藝美術館」へ足を踏み入れよう（10:00〜17:00・最終入館16:30、水曜休、大人500円）。日本各地や海外の生活用具、とりわけ牛ノ戸焼や因州中井窯などの陶磁器や染織、木工品が並び、日常に宿る「用の美」に触れられる。隣接するたくみ工芸店やたくみ割烹店とともに息づく手仕事の温もりを、これからも身近に感じたい。',
      surprise:
        '美術館の蔵造りの建物自体も吉田璋也の構想によるもので、素朴な手仕事の器が最も美しく映える空間として設計されています。',
      hook: '民藝の美しさに触れたら、北北東へ歩いて旧城下町のわらべ館へ向かおう。',
      f7_fragment: '吉田璋也が創設した蔵造りの美術館、民藝の器と手仕事が並ぶ。',
      f7_full:
        '「鳥取民藝美術館」で暮らしに根付く用の美と手仕事の温もりに見入った。',
      image_prompt:
        'Dignified traditional museum illustration of Tottori Folk Crafts Museum, white-walled plaster storehouse facade with dark wooden trim, ceramic vessels and indigo textiles inside warm gallery light, no text, no letters.',
    },
    {
      name: 'わらべ館',
      spot_type: '見どころ',
      description:
        '昭和の旧鳥取県立図書館の外観を復元した童謡・唱歌とおもちゃのミュージアム。約二千点の玩具と名曲の展示が楽しめる。9:00〜17:00、第3水曜休（8月無休）、大人500円。',
      address: '鳥取県鳥取市西町3-202',
      prefecture: '鳥取県',
      municipality: '鳥取市',
      lat: 35.504336,
      lng: 134.233419,
      clue: '昭和の旧図書館を復元したレトロな「わらべ館」へ立ち寄ろう（9:00〜17:00・第3水曜休、大人500円）。鳥取ゆかりの童謡や懐かしい玩具に童心へ帰るひとときを愉しみたい。',
      surprise:
        '鳥取県は日本の学校唱歌や童謡を数多く生み出した作曲家たちのゆかりの地でもあり、館内では美しい旋律とともにその背景も学べます。',
      hook: '童謡の記憶をたどったら、北東の久松山麓にある鳥取城跡へ向かおう。',
      f7_fragment: 'レトロな旧図書館を復元した童謡・唱歌とおもちゃのミュージアム。',
      f7_full:
        '「わらべ館」で懐かしい童謡の旋律と日本の伝統玩具に出会い、心が柔らかくなった。',
      image_prompt:
        'Charming retro architecture illustration of Warabekan in Tottori, nostalgic wooden schoolhouse-style facade with dormer windows, warm courtyard and whimsical traditional Japanese toys displayed inside, no text, no letters.',
    },
    {
      name: '鳥取城跡（久松公園）',
      spot_type: '見どころ',
      description:
        '戦国の兵糧攻めの舞台となり、江戸期には池田氏三十二万石の居城として栄えた城跡。重厚な石垣と復元された擬宝珠橋が見事。公園常時開放（展示館9:00〜17:00・月曜休）、無料。',
      address: '鳥取県鳥取市東町2',
      prefecture: '鳥取県',
      municipality: '鳥取市',
      lat: 35.508108,
      lng: 134.238997,
      clue: '戦国時代に羽柴秀吉の兵糧攻めの舞台となり、江戸時代には池田氏三十二万石の居城として栄えた「鳥取城跡（久松公園）」を歩こう（常時開放・展示館9:00〜17:00、月曜休、無料）。久松山の山裾から山頂へと続く重厚な石垣と復元された擬宝珠橋が見事で、敷地内の展示館では鳥取城の悠久の歴史も学べる。歴史を静かに語りかける石垣と緑の風景を、これからも心穏やかにたっぷりと仰ぎ見たい。',
      surprise:
        '園内に立つ洋館「仁風閣」は現在長期の保存修理工事中で内部には入れませんが、後庭の宝隆院庭園や雄大な石垣群は引き続き散策できます。',
      hook: '石垣の余韻を胸に、南の上町へ下って名勝庭園の観音院で旅を結ぼう。',
      f7_fragment: '久松山の麓に重厚な石垣と擬宝珠橋が残る、池田氏三十二万石の城跡。',
      f7_full:
        '「鳥取城跡（久松公園）」で山裾に築かれた石垣と堀を歩き、城下町の歴史に触れた。',
      image_prompt:
        'Historic Japanese castle ruins illustration of Tottori Castle in Kyusho Park, dramatic layered stone walls climbing forested Mount Kyusho above an outer moat and wooden bridge, serene afternoon light, no text, no letters.',
    },
    {
      name: '観音院',
      spot_type: '見どころ',
      description:
        '鳥取藩初代藩主・池田光仲公創建の天台宗寺院。書院から国指定名勝の池泉鑑賞式庭園を望みながら抹茶をいただける。9:00〜17:00、無休、拝観料750円（抹茶・菓子付）。',
      address: '鳥取県鳥取市上町162',
      prefecture: '鳥取県',
      municipality: '鳥取市',
      lat: 35.496103,
      lng: 134.241547,
      clue: '鳥取藩初代藩主・池田光仲公によって創建された天台宗の古刹「観音院」で旅を締めくくろう（9:00〜17:00・無休、拝観料750円・抹茶菓子付）。本堂脇の書院からは国指定名勝の池泉鑑賞式庭園を一望でき、緑深い木々と穏やかな池を眺めながらお抹茶とお菓子をいただくひとときは格別だ。別名「出世観音」とも呼ばれる静かな境内で、城下町散策の余韻をこれからも末永く豊かに上品に結びたい。',
      surprise:
        '京都の作庭家によって江戸初期に築かれたとされる庭園は、裏山の緑を借景に取り入れた美しい構図で、季節ごとに趣を変えます。',
      hook: '',
      f7_fragment: '国指定名勝の池泉庭園を書院から望み、抹茶の一服を愉しめる古刹。',
      f7_full:
        '「観音院」の書院から名勝庭園を眺めながら一服の抹茶をいただき、鳥取の旅を結んだ。',
      image_prompt:
        'Tranquil Japanese temple garden illustration of Kannon-in in Tottori, open tatami shoin veranda overlooking a lush mossy pond garden with carp, stepping stones and sculpted pine trees, soft late afternoon light, no text, no letters.',
    },
  ],
};
