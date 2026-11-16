export default {
  slug: 'kumagaya',
  station_order: 652,
  station: '熊谷',
  line: 'JR高崎線',
  area_name: '熊谷・総鎮守の杜と湧水庭園の街',
  prefecture: '埼玉県',
  municipality: '熊谷市',
  category: '街歩きとグルメ',
  budget_tier: 2,
  tags: ['埼玉県', '熊谷市', '熊谷駅', '髙城神社', '星溪園'],
  style_genre: 'pastel_chalk_morning',
  title: '熊谷・髙城神社と湧水の星溪園を歩く',
  description:
    'JR熊谷駅から、奈良時代以前からの古社「髙城神社」とかき氷の聖地として知られる「慈げん」、埼玉県初の老舗百貨店「八木橋百貨店」、湧水池が美しい市名勝「星溪園」、桜名所の荒川堤「熊谷桜堤（荒川公園）」を巡る散策路。',
  eyecatch_prompt:
    'Morning pastel chalk and colored pencil illustration of Kumagaya in Saitama showing the tranquil spring-fed pond and traditional wooden teahouse of Seikeien Garden, sacred tall zelkova trees of Takagi Shrine, iconic local department store facade, and snowy shaved ice bowl, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '千年を超える古社の杜から名物かき氷、そして清らかな湧水庭園へと続く熊谷を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「髙城神社」の樹齢数百年のご神木ケヤキを見上げ、熊谷総鎮守の社殿へ参拝した瞬間',
      subtext:
        '奈良時代以前からこの地を見守る古社の静けさが、駅前の賑わいのすぐそばに息づいていた。',
      badge: {
        code: 'kumagaya_takagi',
        name_ja: '熊谷・総鎮守の髙城神社を詣でし者',
        subtitle_en: 'Worshipper of Takagi Shrine',
        description:
          '髙城神社を訪ね、樹齢数百年の大ケヤキが茂る熊谷総鎮守の杜へ参拝した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a grand wooden Shinto shrine pavilion shaded by an ancient towering zelkova tree, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「慈げん」で、雪のようにふわりと削られた独創的なかき氷をひと口味わった瞬間',
      subtext:
        '夏の暑さで名高い熊谷が生んだかき氷の聖地の仕事に、思わず笑顔がこぼれた。',
      badge: {
        code: 'kumagaya_jigen',
        name_ja: '熊谷・かき氷の聖地慈げんを味わいし者',
        subtitle_en: 'Taster of Jigen Shaved Ice',
        description:
          'かき氷の名店「慈げん」を訪ね、雪のように軽やかな熊谷の名物かき氷を味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a tall mound of delicate fluffy shaved ice drizzled with seasonal fruit syrup in a ceramic bowl, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「星溪園」の清らかな湧水池と歴史ある茶室を眺めながら、涼やかな木陰を歩いた瞬間',
      subtext:
        '明治の豪商が造った庭園の澄んだ水辺が、暑さのまちのイメージを爽やかに塗り替えてくれた。',
      badge: {
        code: 'kumagaya_seikeien',
        name_ja: '熊谷・清らかな湧水の星溪園を巡りし者',
        subtitle_en: 'Walker of Seikeien Garden',
        description:
          '星溪園を訪ね、清らかな湧水「玉の池」と歴史的茶室が織りなす名勝庭園を散策した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a tranquil spring-fed pond with stepping stones and a traditional thatched-style Japanese teahouse framed by maple trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「熊谷桜堤（荒川公園）」の広々とした堤防に立ち、荒川の風と並木を仰いだ瞬間',
      subtext:
        '日本さくら名所百選に選ばれる開放的な河畔の風景が、熊谷の旅を清々しく結んでくれた。',
      badge: {
        code: 'kumagaya_sakura',
        name_ja: '熊谷・荒川ほとりの桜堤を歩きし者',
        subtitle_en: 'Walker of Kumagaya Embankment',
        description:
          '熊谷桜堤（荒川公園）を訪ね、日本さくら名所百選に数えられる雄大な河畔を歩いた証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing a sweeping riverside embankment lined with lush green and blossoming cherry trees beside a calm wide river, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kumagaya_complete',
    name_ja: '熊谷・総鎮守と湧水庭園を巡る旅人',
    subtitle_en: 'Walker of Kumagaya',
    description:
      '髙城神社から慈げん、八木橋百貨店、星溪園、熊谷桜堤までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a tranquil spring-fed Japanese garden pond, an ancient shrine zelkova tree and a bowl of fluffy shaved ice, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '髙城神社',
      spot_type: '見どころ',
      description:
        '奈良時代以前からの歴史を誇る熊谷市の総鎮守。縁結びの神・高皇産霊尊を祀り、境内には樹齢数百年の御神木ケヤキがそびえる。社務所平日9:00〜12:00・13:00〜16:00／土日祝9:00〜16:00（仏滅休）。',
      address: '埼玉県熊谷市宮町2-93',
      prefecture: '埼玉県',
      municipality: '熊谷市',
      lat: 36.145484,
      lng: 139.387083,
      clue: 'JR熊谷駅の北口から星川通り方面へ歩いて約10分、熊谷の総鎮守「髙城神社」から旅を始めよう（社務所9:00〜16:00頃・仏滅休）。奈良時代以前からこの地を鎮護する古社で、縁結びの神様・高皇産霊尊をお祀りしている。境内に入ると樹齢数百年の御神木ケヤキが堂々と枝を広げ、街の真ん中でありながら清らかな神気にこれからもずっと心がすっと静かに深く清められ優しく洗われていくようだ。',
      surprise:
        '境内にはかつて熊谷直実公が平家物語の時代に親しんだとも伝わる歴史の息吹が残り、地元では縁結びと厄除けの社として厚く敬われている。',
      hook: '総鎮守へ参拝したら、すぐ南東のかき氷の名店・慈げん周辺へ向かおう。',
      f7_fragment: '樹齢数百年の大ケヤキが枝を広げる、奈良時代以前からの熊谷総鎮守。',
      f7_full:
        '「髙城神社」の御神木ケヤキが茂る境内に参拝し、奈良時代以前から続く熊谷総鎮守の静謐な空気に触れた。',
      image_prompt:
        'Historic Shinto shrine Takagi-jinja shaded by a massive ancient zelkova tree in Kumagaya in morning pastel chalk and colored pencil style, no text, no letters.',
    },
    {
      name: '慈げん',
      spot_type: '休憩',
      description:
        '全国からファンが訪れる「かき氷の聖地」として名高い超人気店。独創的で口溶けのよいかき氷が楽しめる。10:00〜16:00頃（予約制・不定休、公式SNS要確認）。',
      address: '埼玉県熊谷市宮町2-95 間庭ビル1F',
      prefecture: '埼玉県',
      municipality: '熊谷市',
      lat: 36.144985,
      lng: 139.387581,
      clue: '髙城神社のすぐそばに佇むのが、全国のかき氷ファンが憧れる名店「慈げん」だ（10:00〜16:00頃・整理券や予約制あり、不定休のため事前確認推奨）。氷の削り方や温度管理を極めた一杯は、舌の上で雪のようにふわりと消える驚きの口溶けを誇る。季節の果実やミルク、和素材を自在に組み合わせた創意あふれる甘味に、暑い街ならではの豊かな文化をこれからもずっと楽しく心ゆくまで感じてみたい。',
      surprise:
        '気温の高さで全国に知られる熊谷市では、街ぐるみでかき氷文化「雪くま」を盛り上げており、慈げんはその人気を牽引する存在として知られる。',
      hook: '甘味の聖地を後にしたら、西へ歩いて埼玉初の老舗・八木橋百貨店へ向かおう。',
      f7_fragment: '雪のような口溶けの独創的な一杯で知られる、熊谷のかき氷の聖地。',
      f7_full:
        'かき氷の聖地「慈げん」を訪ね、暑い街・熊谷が育んだ独創的で涼やかな甘味文化の奥深さに触れた。',
      image_prompt:
        'Charming small Japanese shaved ice cafe counter in Kumagaya serving a snowy bowl of artisan kakigori topped with fresh strawberry syrup in pastel chalk style, no text, no letters.',
    },
    {
      name: '八木橋百貨店',
      spot_type: '買い物',
      description:
        '明治30年（1897年）創業、埼玉県初の百貨店として親しまれる熊谷のシンボル。正面玄関の大温度計でも有名。10:00〜18:30、不定休。',
      address: '埼玉県熊谷市仲町74',
      prefecture: '埼玉県',
      municipality: '熊谷市',
      lat: 36.146086,
      lng: 139.38188,
      clue: '宮町から西へ歩き、明治三十年創業の老舗「八木橋百貨店」へ立ち寄ろう（10:00〜18:30）。正面玄関の大温度計を眺めつつ熊谷の地元銘菓や手土産をゆっくり選びたい。',
      surprise:
        '夏になるとニュース番組の中継でもお馴染みの正面玄関「大温度計」は、熊谷の街の季節の風物詩として市民に親しまれている。',
      hook: '老舗百貨店を出たら、南へ歩いて湧水庭園の星溪園へ向かおう。',
      f7_fragment: '明治三十年創業、大温度計でも親しまれる埼玉県初の老舗百貨店。',
      f7_full:
        '老舗の「八木橋百貨店」へ立ち寄り、明治から熊谷の暮らしを支え続ける街のシンボルに親しみを感じた。',
      image_prompt:
        'Classic warm brick-and-cream Japanese local department store entrance in Kumagaya with welcoming awnings and street trees in pastel chalk style, no text, no letters.',
    },
    {
      name: '星溪園',
      spot_type: '見どころ',
      description:
        '明治初年に豪商・竹井澹如翁が造った庭園。清らかな湧水が湧く「玉の池」と歴史ある茶室（星溪寮・松風庵・積翠閣）が美しい市指定名勝。9:00〜17:00（11〜2月〜16:00）、月曜・年末年始休、無料。',
      address: '埼玉県熊谷市鎌倉町32',
      prefecture: '埼玉県',
      municipality: '熊谷市',
      lat: 36.144259,
      lng: 139.38132,
      clue: '八木橋百貨店から南へ数分歩くと、明治初年に豪商・竹井澹如翁が造った名勝庭園「星溪園」が静かに迎えてくれる（9:00〜17:00・冬期〜16:00、月曜休、無料）。園の中央には星川の源ともなる清らかな湧水「玉の池」が澄んだ水を湛え、趣深い木造の茶室と松や紅葉の木陰が涼やかな空気を運ぶ。駅近くの賑わいを忘れて、清流と庭園の美にこれからもずっと心穏やかに心地よく委ねていこう。',
      surprise:
        '園内の茶室「星溪寮」や「松風庵」は江戸から明治にかけて建てられた趣ある数寄屋建築で、四季折々の池の眺めとともに無料で散策できる。',
      hook: '清らかな湧水庭園を出たら、さらに南へ歩いて荒川沿いの熊谷桜堤（荒川公園）で旅を結ぼう。',
      f7_fragment: '清らかな湧水「玉の池」と茶室が涼を運ぶ、明治の名勝庭園。',
      f7_full:
        '清らかな湧水が湧く「星溪園」を散策し、玉の池と数寄屋茶室が織りなす熊谷の涼やかな名勝に癒やされた。',
      image_prompt:
        'Tranquil spring-fed pond and traditional wooden teahouse surrounded by lush green maples and stone lanterns in Seikeien Garden in pastel chalk style, no text, no letters.',
    },
    {
      name: '熊谷桜堤（荒川公園）',
      spot_type: '見どころ',
      description:
        '荒川北岸に約2kmにわたって延びる日本さくら名所100選の堤防と公園。江戸時代から続く桜並木と広々とした河川敷が開放的な景色を見せる。散策自由・無休。',
      address: '埼玉県熊谷市河原町2-173',
      prefecture: '埼玉県',
      municipality: '熊谷市',
      lat: 36.135973,
      lng: 139.385927,
      clue: '星溪園から南へ歩き、雄大な荒川の堤防に広がる「熊谷桜堤（荒川公園）」で旅を締めくくろう（散策自由・無休）。江戸時代から受け継がれ日本さくら名所百選にも選ばれた並木道は約二キロメートルにも及び、春は桜と菜の花の絨毯、夏から秋は爽やかな緑と川風が旅人を包んでくれる。広々とした堤防の上から街と山並みを望み、熊谷の豊かな散策をこれからもずっと清々しく心地よく美しく確かに結びたい。',
      surprise:
        '江戸時代の絵図にも描かれた歴史ある桜並木で、河川敷に広がる菜の花の黄色とソメイヨシノの薄紅色の対比は埼玉を代表する春景色として名高い。',
      hook: '',
      f7_fragment: '江戸から続く並木と川風が心地よい、日本さくら名所百選の堤防。',
      f7_full:
        '「熊谷桜堤（荒川公園）」の広々とした河畔に立ち、古社と名物氷と湧水庭園を巡った熊谷の旅を爽やかに結んだ。',
      image_prompt:
        'Expansive riverside embankment of Kumagaya Sakurazutsumi lined with tall trees overlooking the wide Arakawa River under a bright morning sky in pastel chalk style, no text, no letters.',
    },
  ],
};
