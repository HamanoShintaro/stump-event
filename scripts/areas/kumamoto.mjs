export default {
  slug: 'kumamoto',
  station_order: 654,
  station: '熊本',
  line: 'JR九州新幹線',
  area_name: '熊本・武者の城と城下町の食文化',
  prefecture: '熊本県',
  municipality: '熊本市',
  category: '歴史とグルメ',
  budget_tier: 3,
  tags: ['熊本県', '熊本市', '熊本駅', '熊本城', '熊本ラーメン'],
  style_genre: 'ink_wash_sumi_gold',
  title: '熊本・名城熊本城と城彩苑を歩く',
  description:
    'JR熊本駅から市電等も活用して中心部へ入り、城下町の食と土産が揃う「桜の馬場 城彩苑」、日本三名城の一つ「熊本城（天守閣）」、加藤清正公を祀る「加藤神社」、上通の「熊本市現代美術館」、昭和30年創業「桂花ラーメン 本店」を巡る散策路。',
  eyecatch_prompt:
    'Sumi-e ink wash and gold leaf accent illustration of Kumamoto castle town showing the imposing black-and-white keep of Kumamoto Castle atop dramatic curving stone walls, Edo-style merchant street of Josaien, red torii of Kato Shrine, and steaming bowl of Kumamoto ramen, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '武者返しの高石垣を誇る名城と城下町の賑わい、そして黒マー油香るラーメンが繋がる熊本を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「桜の馬場 城彩苑」の江戸風の街並みを歩き、肥後の美味や名物スイーツを味わった瞬間',
      subtext:
        '熊本城のふもとに再現された活気あふれる城下町が、旅の期待を一気に高めてくれた。',
      badge: {
        code: 'kumamoto_josaien',
        name_ja: '熊本・城彩苑で肥後の美味に出会いし者',
        subtitle_en: 'Visitor of Josaien',
        description:
          '桜の馬場 城彩苑を訪ね、江戸の城下町風の街並みで熊本の食と土産を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting traditional wooden Edo-style merchant eaves with warm lanterns and local Kumamoto treats, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「熊本城」の武者返しの石垣と復興を遂げた天守閣を見上げ、清正公の築城美に圧倒された瞬間',
      subtext:
        '日本三名城の威容と復興へ向かう力強い姿が、熊本の誇りとして胸に深く刻まれた。',
      badge: {
        code: 'kumamoto_castle',
        name_ja: '熊本・日本三名城の熊本城天守を登りし者',
        subtitle_en: 'Climber of Kumamoto Castle',
        description:
          '日本三名城の一つ・熊本城を訪ね、武者返しの石垣と復興した天守閣を仰いだ証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing the stately black-and-white keep of Kumamoto Castle rising above dramatic curving stone ramparts, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「加藤神社」の境内から、大天守と小天守が並ぶ熊本城の姿を間近に仰いだ瞬間',
      subtext:
        '「せいしょこさん」と親しまれる加藤清正公を祀る杜から眺めるお城の姿が忘れられなかった。',
      badge: {
        code: 'kumamoto_kato',
        name_ja: '熊本・せいしょこさんの加藤神社を詣でし者',
        subtitle_en: 'Worshipper of Kato Shrine',
        description:
          '熊本城本丸内に鎮座する加藤神社を訪ね、加藤清正公へ参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a Shinto shrine gate framing a close view of Kumamoto Castle towers and green camphor trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「桂花ラーメン 本店」で、黒マー油の香ばしさと太肉が効いた熊本ラーメンを味わった瞬間',
      subtext:
        '昭和三十年創業の老舗が守り続ける深いコクが、城下町歩きの締めくくりを満足感で満たした。',
      badge: {
        code: 'kumamoto_keika',
        name_ja: '熊本・老舗桂花で黒マー油の一杯を嗜みし者',
        subtitle_en: 'Taster of Keika Ramen',
        description:
          '桂花ラーメン 本店を訪ね、マー油香る本場・熊本ラーメンの伝統を味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a ceramic bowl of Kumamoto tonkotsu ramen topped with dark garlic oil, tender braised pork belly and green cabbage, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kumamoto_complete',
    name_ja: '熊本・名城熊本城と城下町を巡る旅人',
    subtitle_en: 'Walker of Kumamoto',
    description:
      '城彩苑から熊本城、加藤神社、熊本市現代美術館、桂花ラーメン 本店までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the black-and-white keep of Kumamoto Castle, Edo merchant eaves and a steaming bowl of black-garlic tonkotsu ramen, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '桜の馬場 城彩苑',
      spot_type: '買い物',
      description:
        '熊本城の麓に広がる観光交流施設。江戸時代の城下町を再現した「桜の小路」でからし蓮根やいきなり団子などの熊本の美味や土産が楽しめる。桜の小路物販9:00〜18:00（3〜11月〜19:00）、12月29〜31日休。',
      address: '熊本県熊本市中央区二の丸1-1',
      prefecture: '熊本県',
      municipality: '熊本市',
      lat: 32.80355,
      lng: 130.703677,
      clue: 'JR熊本駅から市電などで熊本城の麓へ向かい、城下町の玄関口「桜の馬場 城彩苑」から散策を始めよう（桜の小路物販9:00〜18:00・季節変動あり、年末休）。江戸の町家を再現した街並みに、からし蓮根やいきなり団子、馬肉グルメや阿蘇の乳製品スイーツなど肥後の名物がずらりと並ぶ。活気ある小路で食べ歩きやお土産選びを楽しみ、名城への登城をこれからもずっと明るく元気に始めたい。',
      surprise:
        '敷地内の「わくわく座」ではプロジェクションマッピングや展示で熊本城の築城の歴史や復興の歩みを分かりやすく体感することができる。',
      hook: '城下町の雰囲気を味わったら、北東へ登って日本三名城・熊本城の天守閣へ向かおう。',
      f7_fragment: '熊本城の麓に江戸の城下町を再現した、肥後の美味と土産の拠点。',
      f7_full:
        '「桜の馬場 城彩苑」の城下町風の小路を歩き、肥後ならではの食と土産に触れて熊本散策を始めた。',
      image_prompt:
        'Edo-style wooden merchant street Josaien at the foot of Kumamoto Castle with warm lanterns and local food stalls in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '熊本城（天守閣）',
      spot_type: '見どころ',
      description:
        '加藤清正が築いた日本三名城の一つ。優雅な反りを持つ「武者返し」の高石垣と復興を遂げた天守閣が圧倒的な存在感を放つ。9:00〜17:00（最終入園16:00、7〜8月〜19:00）、12月29〜31日休、高校生以上800円。',
      address: '熊本県熊本市中央区本丸1-1',
      prefecture: '熊本県',
      municipality: '熊本市',
      lat: 32.805827,
      lng: 130.706149,
      clue: '城彩苑から特別見学通路などを歩いて、日本三名城の一つ「熊本城」の天守閣へ登ろう（9:00〜17:00・夏季延長あり、年末休、高校生以上800円）。上へ行くほど反りが急になり敵の侵入を阻む「武者返し」の高石垣と、黒と白の対比が勇壮な大天守・小天守は圧巻の迫力だ。復興を遂げた天守最上階から熊本市街を一望し、清正公の築城美と誇りにこれからもずっと心から深く静かに感動したい。',
      surprise:
        '平成二十八年の熊本地震で大きな被害を受けながらも、一本一本の石垣に番号を振って元に戻す緻密な復旧作業と天守閣の完全復旧が続けられている。',
      hook: '天守閣の迫力を体感したら、すぐ北の加藤神社へ参拝しよう。',
      f7_fragment: '武者返しの高石垣と黒白の天守閣が勇壮な、日本三名城の熊本城。',
      f7_full:
        '日本三名城の「熊本城」で武者返しの石垣と復興した天守閣を仰ぎ、加藤清正が築いた名城の威容に圧倒された。',
      image_prompt:
        'Imposing black-and-white keep of Kumamoto Castle crowning dramatic curving Musha-gaeshi stone ramparts in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '加藤神社',
      spot_type: '見どころ',
      description:
        '熊本城本丸の北側に鎮座し、熊本の礎を築いた加藤清正公を祀る神社。境内から間近に見る熊本城天守閣と宇土櫓の眺めが絶景。参拝自由（社務所8:00〜17:00）、無休。',
      address: '熊本県熊本市中央区本丸2-1',
      prefecture: '熊本県',
      municipality: '熊本市',
      lat: 32.807132,
      lng: 130.705332,
      clue: '天守閣のすぐ北側に鎮座する「加藤神社」へお参りしよう（社務所8:00〜17:00）。熊本の礎を築いた清正公を祀る境内から、天守閣の雄姿を間近に仰ぎたい。',
      surprise:
        '地元では親愛を込めて「せいしょこさん」と呼ばれ、境内には清正公が文禄・慶長の役の際に持ち帰ったとも伝わる旗立石などの史跡も残る。',
      hook: 'お参りを終えたら、南東の上通アーケードへ降りて熊本市現代美術館を訪ねよう。',
      f7_fragment: '熊本城本丸内に鎮座し、清正公「せいしょこさん」を祀る絶景の神社。',
      f7_full:
        '熊本城内の「加藤神社」へ参拝し、清正公への敬意とともに間近に仰ぐ天守閣の絶景を胸に刻んだ。',
      image_prompt:
        'Shinto shrine pavilion and torii gate of Kato Shrine framing close view of Kumamoto Castle towers among lush green trees in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '熊本市現代美術館',
      spot_type: '見どころ',
      description:
        '上通アーケード入口のびぷれす熊日会館3階にある都市型美術館。企画展のほか無料で利用できる美術図書室やアート空間が充実している。10:00〜20:00（展覧会入場19:30まで）、火曜・年末年始休。',
      address: '熊本県熊本市中央区上通町2-3 びぷれす熊日会館3F',
      prefecture: '熊本県',
      municipality: '熊本市',
      lat: 32.803288,
      lng: 130.710991,
      clue: 'お城を降りて上通アーケードの入口にある「熊本市現代美術館」へ立ち寄ろう（10:00〜20:00、火曜休、無料エリアあり）。都市の真ん中で現代アートに出会える文化拠点で、多彩な展覧会はもちろん、数千冊の美術書が並ぶ開放的な図書室「ホーム」やユニークな空間アートを誰でも気軽に楽しめる。お城の歴史散歩から一転して現代の創造性に触れる心地よい時間をこれからもずっと満喫したい。',
      surprise:
        '夜20時まで開館しているため仕事帰りや夕方の散策にも立ち寄りやすく、草間彌生氏やジェームズ・タレルの恒久展示作品も無料で鑑賞できる。',
      hook: '現代アートに触れたら、南西の花畑町にある老舗・桂花ラーメン 本店で旅を結ぼう。',
      f7_fragment: '上通アーケード直結、アート図書室も備えた都市型の現代美術館。',
      f7_full:
        '「熊本市現代美術館」で開放的なアート空間に触れ、歴史ある城下町・熊本に息づく現代の文化を感じた。',
      image_prompt:
        'Sleek contemporary urban art museum lounge in Kumamoto with warm lighting, sculptural bookshelves and minimalist seating in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '桂花ラーメン 本店',
      spot_type: '食事',
      description:
        '昭和30年（1955年）創業、東京にも進出し熊本ラーメンを全国に広めた老舗本店。黒マー油が香る豚骨スープと太肉（角煮）がのる太肉麺が不動の人気。月〜木11:00〜24:00・金土〜25:00・日祝〜16:30、元旦休。',
      address: '熊本県熊本市中央区花畑町11-9 K-1ビル1F',
      prefecture: '熊本県',
      municipality: '熊本市',
      lat: 32.801828,
      lng: 130.707448,
      clue: '美術館から南西へ歩き、昭和三十年創業の老舗「桂花ラーメン 本店」で旅を締めくくろう（月〜土11:00〜24:00・日祝〜16:30、元旦休）。豚骨と鶏ガラに秘伝の香ばしい黒マー油（焦がしニンニク油）を浮かべたスープは、濃厚でありながらキレのある熊本ラーメンの王道だ。じっくり煮込んだ太肉（ターロー）と生キャベツがのる名物・太肉麺を味わえば、熊本の旅がこれからも力強く結ばれる。',
      surprise:
        '桂花の太肉麺にのるシャキシャキの生キャベツは、濃厚な豚骨スープと柔らかな角煮の脂を爽やかに引き立てる絶妙のアクセントとして考案された。',
      hook: '',
      f7_fragment: '昭和三十年創業、香ばしい黒マー油と太肉麺で知られる熊本ラーメン本店。',
      f7_full:
        '老舗の「桂花ラーメン 本店」で黒マー油香る本場の一杯を味わい、名城とアートを巡った熊本の旅を力強く結んだ。',
      image_prompt:
        'Classic Japanese ramen shop counter in Kumamoto serving a steaming bowl of tonkotsu ramen with dark garlic oil and braised pork belly in sumi-e ink wash style, no text, no letters.',
    },
  ],
};
