export default {
  slug: 'iwaki',
  station_order: 675,
  station: 'いわき',
  line: 'JR常磐線',
  area_name: 'いわき・国宝阿弥陀堂と太平洋の灯台',
  prefecture: '福島県',
  municipality: 'いわき市',
  category: '歴史と海景色',
  budget_tier: 2,
  tags: ['福島県', 'いわき市', 'いわき駅', '国宝', '灯台'],
  style_genre: 'editorial_clean_ink',
  title: 'いわき・駅前の老舗喫茶から国宝阿弥陀堂へ',
  description:
    'JRいわき駅から、厚切りグリルサンドで親しまれる老舗「ブレイク 平本店」、浄土庭園に浮かぶ福島県唯一の国宝「白水阿弥陀堂」、常磐炭田と化石を学ぶ「いわき市石炭・化石館 ほるる」、海の幸が集う「道の駅 いわき・ら・ら・ミュウ」、白亜の「塩屋埼灯台」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Iwaki City showing the serene Heian-era Shiramizu Amidado hall reflected in its lotus pond garden, the white Shioyazaki Lighthouse standing above rugged Pacific Ocean cliffs, a museum fossil hall silhouette, and a warm classic cafe grill sandwich, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '炭鉱と恐竜の記憶、平安の国宝阿弥陀堂と太平洋の潮風を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「ブレイク 平本店」で、名物の分厚いグリルサンドと香り高い珈琲を味わった瞬間',
      subtext:
        '駅前からすぐの老舗喫茶に漂う温かな空気が、いわき巡りの始まりを元気に彩ってくれた。',
      badge: {
        code: 'iwaki_break',
        name_ja: 'いわき・名物グリルサンドを味わいし者',
        subtitle_en: 'Guest of Cafe Break Taira',
        description:
          'ブレイク 平本店を訪ね、地元で愛される老舗喫茶店の名物グリルサンドを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a thick golden toasted sandwich cut diagonally beside a steaming coffee cup on a wooden cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「白水阿弥陀堂」の浄土庭園に立ち、池に映る平安末期の国宝建築を眺めた瞬間',
      subtext:
        '緩やかな曲線を描く屋根と蓮池の静けさに、みちのくの地に咲いた極楽浄土の世界を見た。',
      badge: {
        code: 'iwaki_shiramizu',
        name_ja: 'いわき・国宝白水阿弥陀堂を拝観せし者',
        subtitle_en: 'Visitor of Shiramizu Amidado',
        description:
          '白水阿弥陀堂を訪ね、福島県唯一の国宝建造物と美しい浄土庭園を拝観した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the graceful curved shingle roof of Shiramizu Amidado hall reflected in a tranquil lotus pond garden, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「いわき市石炭・化石館 ほるる」で、フタバスズキリュウと炭鉱の歴史に触れた瞬間',
      subtext:
        '太古の海と近代のエネルギーを支えた常磐炭田の記憶が、いわきの土地の深さを教えてくれた。',
      badge: {
        code: 'iwaki_horuru',
        name_ja: 'いわき・石炭と太古の化石に触れし者',
        subtitle_en: 'Visitor of Iwaki Coal & Fossil Museum',
        description:
          'いわき市石炭・化石館 ほるるを訪ね、化石標本と常磐炭田の歴史を学んだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a graceful plesiosaur fossil silhouette and a vintage brass miner safety lamp, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「塩屋埼灯台」の白亜の塔に登り、太平洋の水平線と潮風を一望した瞬間',
      subtext:
        '大海原を見渡す断崖の上の清々しい風が、いわきの旅の締めくくりを爽やかに満たしてくれた。',
      badge: {
        code: 'iwaki_shioyazaki',
        name_ja: 'いわき・白亜の灯台から海を望みし者',
        subtitle_en: 'Climber of Shioyazaki Lighthouse',
        description:
          '塩屋埼灯台を訪ね、のぼれる灯台から太平洋の雄大な水平線を一望した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the tall white Shioyazaki Lighthouse perched on rocky coastal cliffs overlooking deep blue Pacific waves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'iwaki_complete',
    name_ja: 'いわき・国宝と太平洋の灯台を巡る旅人',
    subtitle_en: 'Walker of Iwaki',
    description:
      'ブレイク 平本店から白水阿弥陀堂、ほるる、ら・ら・ミュウ、塩屋埼灯台までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the Shiramizu Amidado hall, a white coastal lighthouse, and a plesiosaur silhouette, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'ブレイク 平本店',
      spot_type: '休憩',
      description:
        'JRいわき駅から徒歩約3分、地元で長く愛される老舗喫茶店。ボリューム満点の分厚いグリルサンドやパフェ、こだわりの珈琲が楽しめる。8:00〜19:00、元日休。',
      address: '福島県いわき市平字田町68-1',
      prefecture: '福島県',
      municipality: 'いわき市',
      lat: 37.056921,
      lng: 140.891223,
      clue: 'JRいわき駅から歩いてすぐの老舗喫茶「ブレイク 平本店」から、浜通りの旅を始めよう（8:00〜19:00・元日休）。長年地元の人々に愛されてきたレトロな空間で、香ばしく焼き上げられた分厚い名物「グリルサンド」や淹れたての珈琲が旅人を温かく迎えてくれる。お腹も心も心地よくたっぷりと満たしながら、国宝と太平洋を巡るいわきの散策へこれからも元気よく笑顔で楽しく元気に踏み出したい。',
      surprise:
        'ミックスグリルサンドのボリュームは名物として知られ、朝の時間帯から地元の常連客や旅人で賑わう温かい雰囲気が魅力です。',
      hook: '老舗喫茶で力を蓄えたら、南西の内郷エリアにある国宝・白水阿弥陀堂へ向かおう。',
      f7_fragment: 'いわき駅前の老舗喫茶店、分厚い名物グリルサンドと珈琲が人気。',
      f7_full:
        '「ブレイク 平本店」で名物の分厚いグリルサンドと珈琲を味わい、旅を始めた。',
      image_prompt:
        'Warm nostalgic Showa kissaten cafe illustration of Break Taira in Iwaki, wooden booth seating, steaming coffee cup and thick toasted grill sandwich on a ceramic plate, morning light, no text, no letters.',
    },
    {
      name: '白水阿弥陀堂',
      spot_type: '見どころ',
      description:
        '永暦元年（1160年）に徳姫が夫・岩城則道の供養のために建立した福島県唯一の国宝建造物。優美な浄土庭園に囲まれる。9:00〜16:15（1〜3月〜15:45）、第4水曜休、大人500円。',
      address: '福島県いわき市内郷白水町広畑221',
      prefecture: '福島県',
      municipality: 'いわき市',
      lat: 37.036516,
      lng: 140.837321,
      clue: '平安時代末期の永暦元年に建立され、福島県唯一の国宝建造物に指定されている「白水阿弥陀堂」を訪ねよう（9:00〜16:15・冬期〜15:45、第4水曜休、大人500円）。奥州藤原氏ゆかりの徳姫が夫の供養のために建てたお堂は、緩やかな曲線を描くこけら葺きの屋根と極楽浄土を表した美しい池泉庭園が調和している。静かな水面に映る古刹の姿を、これからも深く静かに大切に仰ぎ見たい。',
      surprise:
        '堂内には国の重要文化財である阿弥陀三尊像が安置されており、秋には境内の大イチョウが黄金色に色づいて庭園を華やかに彩ります。',
      hook: '浄土の静寂を味わったら、南東の湯本エリアにあるいわき市石炭・化石館 ほるるへ向かおう。',
      f7_fragment: '平安末期建立の福島県唯一の国宝建造物、池泉の浄土庭園が美しい。',
      f7_full:
        '「白水阿弥陀堂」の浄土庭園に立ち、池に映る平安末期の国宝建築を拝観した。',
      image_prompt:
        'Serene Japanese Buddhist hall illustration of Shiramizu Amidado in Iwaki, graceful curved shingled roof mirrored in a calm lotus pond garden with autumn ginkgo trees, soft daylight, no text, no letters.',
    },
    {
      name: 'いわき市石炭・化石館 ほるる',
      spot_type: '見どころ',
      description:
        'いわき市で発掘されたフタバスズキリュウなどの貴重な化石標本と、近代日本の発展を支えた常磐炭田の歴史を体感できる博物館。9:00〜17:00、第3火曜休、大人660円。',
      address: '福島県いわき市常磐湯本町向田3-1',
      prefecture: '福島県',
      municipality: 'いわき市',
      lat: 37.012617,
      lng: 140.848492,
      clue: '太古の化石と常磐炭田の歴史を伝える「いわき市石炭・化石館 ほるる」を訪ねよう（9:00〜17:00・第3火曜休、大人660円）。迫力ある恐竜化石やリアルな模擬坑道から、いわきの大地の記憶をたどりたい。',
      surprise:
        '昭和43年にいわき市の高校生によって発見された首長竜「フタバスズキリュウ」の産出地であり、館内の大きな骨格標本が見応え抜群です。',
      hook: '太古と近代の記憶を学んだら、南東の小名浜港にあるら・ら・ミュウへ向かおう。',
      f7_fragment: 'フタバスズキリュウの化石と常磐炭田の模擬坑道を体感できる博物館。',
      f7_full:
        '「いわき市石炭・化石館 ほるる」で恐竜の化石と常磐炭田の模擬坑道に触れた。',
      image_prompt:
        'Natural history and heritage museum illustration of Iwaki Horuru, dramatic dome hall displaying a soaring plesiosaur skeleton fossil and warm-lit coal mining heritage diorama, no text, no letters.',
    },
    {
      name: '道の駅 いわき・ら・ら・ミュウ',
      spot_type: '買い物',
      description:
        '小名浜港のウォーターフロントに立つ大型観光物産センター（道の駅）。新鮮な常磐ものの魚介市場やグルメ通り、土産店が揃う。9:00〜18:00（飲食10:00〜）、不定休。',
      address: '福島県いわき市小名浜辰巳町43-1',
      prefecture: '福島県',
      municipality: 'いわき市',
      lat: 36.944506,
      lng: 140.905627,
      clue: '小名浜港のウォーターフロントに広がる「道の駅 いわき・ら・ら・ミュウ」で、海の恵みと賑わいに触れよう（物販9:00〜18:00・飲食10:00〜）。館内の海鮮市場通りには「常磐もの」と呼ばれる新鮮な魚介や干物、いわきの銘菓がずらりと並び、港町の活気が満ちている。潮風を感じながら地元の味や土産物をゆっくりと選び、浜通りの豊かな海の暮らしをこれからも身近にじっくりと感じたい。',
      surprise:
        'すぐ目の前の小名浜港からは観光遊覧船も発着しており、かもめが舞う海と港の景色を間近に楽しむことができます。',
      hook: '港町の活気を楽しんだら、北東の岬に立つ白亜の塩屋埼灯台で旅を結ぼう。',
      f7_fragment: '小名浜港の観光物産センター、新鮮な「常磐もの」の魚介とグルメが集う。',
      f7_full:
        '「道の駅 いわき・ら・ら・ミュウ」で小名浜港の活気と豊かな海の幸に触れた。',
      image_prompt:
        'Lively coastal harbor market illustration of Iwaki Lalamew in Onahama, bright waterfront building beside fishing boats and seagulls with fresh seafood stalls inside, sunny sea sky, no text, no letters.',
    },
    {
      name: '塩屋埼灯台',
      spot_type: '見どころ',
      description:
        '明治32年（1899年）初点灯、全国に16基しかない「のぼれる灯台」のひとつ。白亜の塔上から太平洋の大パノラマを一望できる。9:00〜16:00（12〜13時昼休）、参観寄付金300円。',
      address: '福島県いわき市平薄磯宿崎34',
      prefecture: '福島県',
      municipality: 'いわき市',
      lat: 36.995228,
      lng: 140.981929,
      clue: '明治32年に初点灯し、海抜73メートルの断崖から太平洋を照らし続けてきた白亜の「塩屋埼灯台」で旅を締めくくろう（9:00〜16:00・12〜13時休、300円）。全国でも数少ない「のぼれる灯台」のひとつで、らせん階段を登りきると青い海と水平線がどこまでも広がる大パノラマが待っている。爽やかな潮風に吹かれながら、いわきの深い余韻をこれからも胸の奥に刻んで美しく結びたい。',
      surprise:
        '灯台のふもとには美空ひばりさんの名曲「みだれ髪」の歌碑が立つ「雲雀乃苑」があり、近づくと歌声が流れる仕掛けになっています。',
      hook: '',
      f7_fragment: '太平洋の断崖に立つ白亜の「のぼれる灯台」、海と空の大パノラマが圧巻。',
      f7_full:
        '「塩屋埼灯台」の白亜の塔に登り、太平洋の水平線と爽やかな潮風を一望して旅を結んだ。',
      image_prompt:
        'Scenic coastal illustration of Shioyazaki Lighthouse in Iwaki, gleaming white lighthouse tower rising on forested sea cliffs above deep blue Pacific waves in golden late afternoon light, no text, no letters.',
    },
  ],
};
