export default {
  slug: 'kita_biei',
  station_order: 982,
  station: '北美瑛',
  line: 'JR富良野線',
  area_name: '下宇莫別・大久保',
  prefecture: '北海道',
  municipality: '美瑛町',
  category: '絶景・自然',
  budget_tier: 2,
  tags: ['富良野線', 'ケンとメリーの木', '北西の丘', '美瑛軟石', '美瑛町'],
  style_genre: 'ink_and_watercolor',
  title: '北美瑛の里山と大久保の丘を巡る道',
  description:
    '下宇莫別の無人駅・JR北美瑛駅から下宇莫別神社、ケンとメリーの木、360度展望の北西の丘展望公園、きっちん・ひとさじへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Kita-Biei Station with its timber shelter in quiet farmlands, a lone tall poplar tree on a rolling hill, and a stone pyramid observatory overlooking patchwork fields toward Mount Daisetsu, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び北美瑛を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '美瑛軟石風本殿の下宇莫別神社',
      subtext: '昭和五年建立の狛犬や旧奉安殿と伝わる社殿に参拝した',
      badge: {
        code: 'kita_biei_shrine',
        name_ja: '沢の村の鎮守',
        subtitle_en: 'Shimoubakubetsu Shrine',
        description:
          '下宇莫別神社を訪れ、美瑛軟石風の社殿と昭和五年の狛犬に手を合わせたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a Biei volcanic stone shrine sanctuary beside a weathered stone guardian dog on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '美瑛の丘の象徴 ケンとメリーの木',
      subtext: '昭和四十七年のCMで有名になった高さ約30mのポプラを見上げた',
      badge: {
        code: 'kita_biei_kenmary',
        name_ja: '丘のポプラ大樹',
        subtitle_en: 'Ken and Mary Tree',
        description:
          'ケンとメリーの木を訪れ、美瑛の丘陵風景にそびえるポプラの大木を望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tall solitary Lombardy poplar tree standing proudly on a rolling emerald hill on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'ピラミッド型の北西の丘展望公園',
      subtext: 'パッチワークの路と十勝岳連峰を360度の大パノラマで望んだ',
      badge: {
        code: 'kita_biei_hokusei',
        name_ja: '北西の丘360度',
        subtitle_en: 'Hokusei Hill Panorama',
        description:
          '北西の丘展望公園のピラミッド展望台から、美瑛の丘と大雪山系を一望したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a geometric stone pyramid observation tower overlooking quilted farmland hills on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '小麦畑に佇む きっちん・ひとさじ',
      subtext: '自家産小麦のパンと温かいランチを丘の風景とともに味わった',
      badge: {
        code: 'kita_biei_hitosaji',
        name_ja: '麦畑の食卓',
        subtitle_en: 'Wheatfield Kitchen',
        description:
          'きっちん・ひとさじで自家産小麦のパンと美瑛の丘を望むランチを楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of crusty farm-grown wheat bread and a wooden spoon beside golden wheat ears on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kita_biei_complete',
    name_ja: '北美瑛・丘と里山の旅人',
    subtitle_en: 'Explorer of Kita-Biei Hills',
    description:
      'JR北美瑛駅から下宇莫別神社、ケンとメリーの木、北西の丘展望公園、きっちん・ひとさじまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a tall hilltop poplar, a stone pyramid outlook, and golden wheat bread on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR北美瑛駅',
      lat: 43.617756,
      lng: 142.479736,
      address: '北海道上川郡美瑛町字下宇莫別5',
      description:
        '「沢の村」とも呼ばれる下宇莫別地区に佇む、こぢんまりとした木造風待合室のある無人駅（終日開放・無休）。周囲に静かな里山の原風景が広がっている。',
      clue:
        '「沢の村」とも呼ばれる下宇莫別地区に佇み、こぢんまりとした木造風待合室が温かく迎えてくれる「JR北美瑛駅」から里山と丘の散策を始めよう（終日開放）。賑やかな観光エリアを少し離れた素朴な駅前から南方向へと外へ踏み出したら、まずは昭和初期の狛犬や美瑛軟石風の社殿が残る無人の鎮守「下宇莫別神社」を目指して、里山の澄んだ空気と田園の心地よい風を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から南方向へ徒歩約4分',
      f7_fragment: '「沢の村」下宇莫別地区に佇む木造風待合室のある静かな里山の無人駅。',
      f7_full: '「JR北美瑛駅」の素朴な駅舎を後にし、里山から大久保の丘を目指す旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '下宇莫別神社',
      lat: 43.614951,
      lng: 142.480123,
      address: '北海道上川郡美瑛町字下宇莫別第3',
      description:
        '昭和5年（1930年）建立の狛犬や馬頭観世音碑、地神塔が残る無人の社（参拝自由・無休）。本殿は旧学校の「奉安殿」を移築したと伝わる美瑛軟石造り風の建物。',
      clue:
        '昭和五年建立の狛犬や美瑛軟石風の社殿が静かに残る「下宇莫別神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。次は南西の「ケンとメリーの木」へ向かおう。',
      hook: '南西方向へ徒歩約30分',
      f7_fragment: '昭和五年建立の狛犬と旧奉安殿移築と伝わる美瑛軟石風の本殿を持つ神社。',
      f7_full: '「下宇莫別神社」の美瑛軟石風の社殿に手を合わせ、丘の風景へと歩き出した。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: 'ケンとメリーの木',
      lat: 43.609183,
      lng: 142.464196,
      address: '北海道上川郡美瑛町字大久保協生1',
      description:
        '昭和47年（1972年）の自動車CMのロケ地として一躍有名になった高さ約30mのポプラの大木（道路より見学自由・私有地立入禁止）。美瑛の丘陵風景を象徴する名所。',
      clue:
        '昭和四十七年の自動車CMのロケ地として一躍全国に名を馳せた高さ約三十メートルのポプラの大木「ケンとメリーの木」を公道から仰ぎ見よう（私有地立入禁止）。なだらかに波打つ緑や黄金色の美しい丘陵の真ん中に一本すっくと立つ姿は、まさに美瑛の原風景を象徴する堂々とした美しさだ。雄大な丘の景色に心を洗われたら、南西〜西側の高台にそびえる「北西の丘展望公園」へとゆっくり歩を進めよう。',
      hook: '南西〜西方向へ徒歩約12分',
      f7_fragment: '昭和四十七年のCMで全国に知られた、美瑛の丘にそびえる高さ約30mのポプラ。',
      f7_full: '「ケンとメリーの木」の凛とした佇まいを仰ぎ見、美瑛の丘の広大さを実感した。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '北西の丘展望公園',
      lat: 43.605879,
      lng: 142.45733,
      address: '北海道上川郡美瑛町大村大久保協生2',
      description:
        'ピラミッド型の展望台が特徴の美瑛屈指の展望公園（終日開放・売店等季節営業）。パッチワークの路のなだらかな丘と十勝岳連峰・大雪山系を360度見渡せる。',
      clue:
        '特徴的なピラミッド型の展望台が目印の美瑛屈指の名所「北西の丘展望公園」へ楽しく上がってみよう（終日開放）。展望台の上からぐるりと見渡せば、パッチワークの路と呼ばれる色とりどりの畑が織りなす美しい丘陵地帯と、その奥に連なる十勝岳連峰・大雪山系の雄大な稜線が360度の大パノラマで広がっている。絶景をたっぷり満喫したら、道路を挟んで向かいの「きっちん・ひとさじ」へ向かおう。',
      hook: '道路を挟み徒歩約2分',
      f7_fragment: 'ピラミッド型展望台からパッチワークの路と十勝岳連峰を360度望む公園。',
      f7_full: '「北西の丘展望公園」の展望台に立ち、美瑛の丘と山々の大パノラマに感動した。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'きっちん・ひとさじ',
      lat: 43.606454,
      lng: 142.456116,
      address: '北海道上川郡美瑛町大村大久保協生3',
      description:
        '北西の丘展望公園のすぐ向かい、小麦畑のまん中に佇む自家産小麦パンとカフェのお店（11:00〜15:00・売切次第終了、火〜木曜休・冬季休業あり）。',
      clue:
        '旅の締めくくりは、北西の丘展望公園のすぐ向かいで小麦畑のまん中に佇む自家産小麦パンとカフェ「きっちん・ひとさじ」で美味しい食事を味わおう（11:00〜15:00、火〜木曜休）。丘の恵みから生まれた香ばしい自家製パンや季節の丁寧な料理を美瑛の素晴らしい風景とともにいただけば、幸せな余韻が心の奥まで満ちていく。里山から絶景の丘へと続いた北美瑛の散歩を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '北西の丘の向かい、小麦畑の中に佇む自家産小麦パンとカフェの人気店。',
      f7_full: '「きっちん・ひとさじ」で小麦の香り豊かな食事を味わい、北美瑛の旅を終えた。',
    },
  ],
};
