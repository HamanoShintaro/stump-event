export default {
  slug: 'kawagoe',
  station_order: 671,
  station: '川越',
  line: 'JR川越線',
  area_name: '川越・小江戸の蔵造りと時の鐘',
  prefecture: '埼玉県',
  municipality: '川越市',
  category: '歴史と街歩き',
  budget_tier: 2,
  tags: ['埼玉県', '川越市', '川越駅', '小江戸', '蔵造り'],
  style_genre: 'ukiyo_e_modern',
  title: '川越・小江戸の蔵造りから時の鐘と氷川神社へ',
  description:
    'JR川越駅から、徳川家ゆかりの古刹「喜多院」、川越のシンボルが響く「時の鐘」、ノスタルジックな「菓子屋横丁」、黒漆喰の蔵並みが続く「蔵造りの町並み」、縁結びの風鈴で知られる「川越氷川神社」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Kawagoe Little Edo showing the wooden Toki-no-Kane bell tower rising above black-plastered Edo merchant kura storehouses, cobblestone Kashiya Yokocho alley with glass candy jars, and colorful glass wind chimes at Kawagoe Hikawa Shrine, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '小江戸の蔵造りと時の鐘の響き、縁結びの杜を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「喜多院」の静かな境内を歩き、五百羅漢の豊かな表情に見入った瞬間',
      subtext:
        '江戸城から移築された客殿や歴史ある伽藍の佇まいに、川越が「小江戸」と呼ばれる所以を感じた。',
      badge: {
        code: 'kawagoe_kitain',
        name_ja: '川越・喜多院の五百羅漢に出会ひし者',
        subtitle_en: 'Visitor of Kitain Temple',
        description:
          '喜多院を訪ね、徳川家ゆかりの古刹と五百羅漢の石仏群を拝観した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting serene moss-touched stone rakan statues nestled beneath maple leaves beside a dark timbered temple eaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「時の鐘」の木造の櫓を見上げ、蔵の町に響く澄んだ鐘の音に耳を澄ませた瞬間',
      subtext:
        '江戸時代から暮らしに時を告げてきた鐘の余韻が、小江戸の町並みを優しく包んでいた。',
      badge: {
        code: 'kawagoe_tokinokane',
        name_ja: '川越・時の鐘の響きを聴きし者',
        subtitle_en: 'Listener of Toki-no-Kane',
        description:
          '時の鐘を訪ね、小江戸川越のシンボルである木造の鐘楼を仰ぎ見た証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the tall dark wooden Toki-no-Kane bell tower rising against a warm sunset sky above tiled merchant roofs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「菓子屋横丁」の石畳を歩き、懐かしい駄菓子や飴の甘い香りに包まれた瞬間',
      subtext:
        '色とりどりのガラス瓶が並ぶ店先の賑わいが、子どもの頃の記憶を楽しく呼び覚ましてくれた。',
      badge: {
        code: 'kawagoe_kashiya',
        name_ja: '川越・菓子屋横丁の甘味を巡りし者',
        subtitle_en: 'Walker of Kashiya Yokocho',
        description:
          '菓子屋横丁を訪ね、昔ながらの駄菓子と職人の手仕事が息づく路地を歩いた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting colorful traditional Japanese striped candies and sweet potato confections inside glass jars on a wooden shop counter, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「川越氷川神社」の大鳥居をくぐり、千五百年の歴史を刻む縁結びの杜へ祈った瞬間',
      subtext:
        '大欅の木陰に満ちる清らかな空気が、小江戸川越の一日の散策を穏やかに結んでくれた。',
      badge: {
        code: 'kawagoe_hikawa',
        name_ja: '川越・氷川神社の杜に祈りし者',
        subtitle_en: 'Worshipper at Kawagoe Hikawa Shrine',
        description:
          '川越氷川神社を訪ね、古からの縁結びの社で心を整えて参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting delicate painted glass wind chimes swaying beneath a wooden shrine pavilion framed by deep green zelkova leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kawagoe_complete',
    name_ja: '川越・小江戸の蔵造りを巡る旅人',
    subtitle_en: 'Walker of Kawagoe',
    description:
      '喜多院から時の鐘、菓子屋横丁、蔵造りの町並み、川越氷川神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the Toki-no-Kane bell tower, black-plastered kura storehouses, and colorful shrine wind chimes, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '喜多院',
      spot_type: '見どころ',
      description:
        '天長7年（830年）創建、天海僧正ゆかりの天台宗の古刹。江戸城から移築された「家光誕生の間」や五百羅漢が知られる。8:50〜16:30（冬期〜16:00、日祝は延長）、行事休止日あり。',
      address: '埼玉県川越市小仙波町1-20-1',
      prefecture: '埼玉県',
      municipality: '川越市',
      lat: 35.917677,
      lng: 139.489535,
      clue: '平安時代の天長7年に創建され、徳川家ゆかりの古刹として知られる「喜多院」から小江戸の旅を始めよう（8:50〜16:30・冬期〜16:00）。江戸城から移築された格式高い客殿「家光誕生の間」や、一体ずつ表情が異なる五百羅漢の石仏群が見どころだ。歴史ある堂々たる伽藍と静かな境内の緑に心をゆっくりと澄ませながら、川越に息づく江戸の記憶をこれからも深く静かに大切にたどり続けたい。',
      surprise:
        '五百羅漢には全部で538体の石仏が並んでおり、深夜に頭をなでると一つだけ温かい像があり、それが亡き親に似ているという言い伝えが残っています。',
      hook: '古刹の境内を後にしたら、北北西へ歩いて小江戸のシンボル・時の鐘へ向かおう。',
      f7_fragment: '徳川家ゆかりの古刹、江戸城移築の客殿と五百羅漢が名高い。',
      f7_full:
        '「喜多院」の静かな境内で五百羅漢の豊かな表情に見入り、川越散策を始めた。',
      image_prompt:
        'Dignified Japanese temple illustration of Kitain in Kawagoe, traditional dark wooden temple hall and moss-covered stone rakan statues shaded by maple trees, soft morning light, no text, no letters.',
    },
    {
      name: '時の鐘',
      spot_type: '見どころ',
      description:
        '江戸時代初期に川越藩主・酒井忠勝によって建てられたと伝わる木造3層の鐘楼。現在も1日4回（6時・12時・15時・18時）に澄んだ音色を響かせる。外観見学自由、無料。',
      address: '埼玉県川越市幸町15-7',
      prefecture: '埼玉県',
      municipality: '川越市',
      lat: 35.923476,
      lng: 139.483335,
      clue: '江戸時代初期から川越の城下に時を告げ続けてきた木造3層の鐘楼「時の鐘」を見上げよう（外観見学自由・無料）。明治の大火の直後に再建された現在の櫓は高さ約16メートルにおよび、今も1日4回（6時・12時・15時・18時）に澄んだ音色を響かせている。蔵造りの屋根越しにそびえる小江戸の象徴をゆっくりと仰ぎ見ながら、時を重ねた町の温もりをこれからも身近にたっぷりとじっくり感じたい。',
      surprise:
        '時の鐘のすぐ奥には薬師神社が鎮座しており、鐘楼の真下をくぐり抜けるようにして静かな境内へ参拝することができます。',
      hook: '鐘の余韻を味わったら、北西へ歩いて懐かしの駄菓子が並ぶ菓子屋横丁へ向かおう。',
      f7_fragment: '江戸から時を告げ続ける木造鐘楼、1日4回響く音色が小江戸の象徴。',
      f7_full:
        '「時の鐘」の木造の櫓を見上げ、蔵の町に響き渡る歴史の音色に耳を澄ませた。',
      image_prompt:
        'Iconic Kawagoe landmark illustration of Toki-no-Kane bell tower, tall dark timber three-story tower rising above traditional black-tiled merchant buildings along a cobblestone lane, no text, no letters.',
    },
    {
      name: '菓子屋横丁',
      spot_type: '買い物',
      description:
        '明治時代初期から飴や駄菓子を作り続けてきた菓子店が軒を連ねる石畳の路地。さつまいも菓子や手作り飴の甘い香りが漂う。9:00〜17:00頃（店舗により異なる・月曜休多し）。',
      address: '埼玉県川越市元町2-7',
      prefecture: '埼玉県',
      municipality: '川越市',
      lat: 35.924953,
      lng: 139.481083,
      clue: '石畳の路地に昔ながらの駄菓子や手作り飴の甘い香りが漂う「菓子屋横丁」を歩こう（9:00〜17:00頃）。ガラス瓶に並ぶ色とりどりの菓子を眺めながら、懐かしく温かな下町の風情を味わいたい。',
      surprise:
        '環境省の「かおり風景100選」にも選ばれており、ハッカ飴や醤油煎餅、川越名物のさつまいも菓子など手仕事の味が今も息づいています。',
      hook: '甘い香りに癒やされたら、南東へ戻って黒漆喰の蔵造りの町並みを歩こう。',
      f7_fragment: '手作り飴やさつまいも菓子の甘い香りが漂う、石畳の駄菓子屋通り。',
      f7_full:
        '「菓子屋横丁」の石畳を歩き、ガラス瓶に並ぶ懐かしい駄菓子と甘い香りに出合った。',
      image_prompt:
        'Charming retro Japanese alley illustration of Kashiya Yokocho in Kawagoe, narrow cobblestone lane lined with wooden sweet shops displaying colorful glass candy jars and warm lanterns, no text, no letters.',
    },
    {
      name: '蔵造りの町並み',
      spot_type: '見どころ',
      description:
        '一番街通りを中心に、明治の大火後に防火のために建てられた重厚な黒漆喰の蔵造り商家が立ち並ぶ小江戸川越のメインストリート。散策自由（各店舗の営業時間は異なる）。',
      address: '埼玉県川越市幸町7-1',
      prefecture: '埼玉県',
      municipality: '川越市',
      lat: 35.923527,
      lng: 139.482933,
      clue: '一番街通りに沿って、黒漆喰の重厚な商家が立ち並ぶ「蔵造りの町並み」を歩こう（散策自由・無料）。明治26年の川越大火を教訓に、類焼を防ぐ耐火建築として建てられた店蔵が今も多く残り、国の重要伝統的建造物群保存地区に選定されている。大きな鬼瓦と観音開きの土蔵造りが織りなす堂々たる景観を心ゆくまでじっくりと眺めながら、小江戸の誇りをこれからもゆっくりと丁寧に深く噛み締めたい。',
      surprise:
        '通りの東側には蔵造り資料館や大正浪漫夢通りへと続く風情ある横丁も点在しており、明治・大正・昭和の建築が一度に楽しめます。',
      hook: '蔵並みを堪能したら、北東へ進んで縁結びの古社・川越氷川神社で旅を結ぼう。',
      f7_fragment: '黒漆喰の重厚な商家が軒を連ねる、小江戸川越の重要伝統的建造物群。',
      f7_full:
        '「蔵造りの町並み」を歩き、黒漆喰の店蔵と鬼瓦が連なる小江戸の景観を堪能した。',
      image_prompt:
        'Historic Japanese merchant street illustration of Kawagoe Kurazukuri street, imposing black-plastered Edo-style storehouses with thick tiled roofs and ornamental demon tiles under warm afternoon sky, no text, no letters.',
    },
    {
      name: '川越氷川神社',
      spot_type: '見どころ',
      description:
        '欽明天皇の御代に創建されたと伝わる古社で、夫婦円満・縁結びの神様として信仰される。夏の「縁むすび風鈴」や鯛みくじも人気。境内終日参拝可（授与所8:00〜16:30）、無休。',
      address: '埼玉県川越市宮下町2-11-3',
      prefecture: '埼玉県',
      municipality: '川越市',
      lat: 35.927553,
      lng: 139.488688,
      clue: '約千五百年前の古墳時代に創建されたと伝わり、川越総鎮守として崇敬を集める「川越氷川神社」で旅を締めくくろう（境内終日参拝可・授与所8:00〜16:30）。ご祭神に二組の夫婦神を祀ることから縁結びの神様として親しまれ、樹齢数百年の大欅が鎮座する境内には清らかな空気が満ちている。小江戸川越の深い余韻を胸の奥に大切に抱き、穏やかな祈りとともにこれからも旅を綺麗に美しく結びたい。',
      surprise:
        '釣り竿を使って自分で釣り上げる可愛らしい「あい鯛みくじ」や、本殿裏手に並ぶ二十数社の末社めぐりも参拝者の楽しみとなっています。',
      hook: '',
      f7_fragment: '千五百年の歴史を誇る縁結びの古社、大欅の木陰と鯛みくじが親しまれる。',
      f7_full:
        '「川越氷川神社」の大鳥居をくぐり、大欅が鎮座する縁結びの杜で川越散策を結んだ。',
      image_prompt:
        'Peaceful Japanese shrine illustration of Kawagoe Hikawa Shrine, towering wooden torii gate and carved shrine hall shaded by ancient zelkova trees with delicate glass wind chimes glowing in late afternoon sun, no text, no letters.',
    },
  ],
};
