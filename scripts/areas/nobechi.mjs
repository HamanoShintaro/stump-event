export default {
  slug: 'nobechi',
  station_order: 620,
  station: '野辺地',
  line: '青い森鉄道・JR大湊線',
  area_name: '野辺地・北前船の港町',
  prefecture: '青森県',
  municipality: '上北郡野辺地町',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['青森県', '野辺地町', '野辺地駅', '北前船', '常夜燈'],
  style_genre: 'pictorial_isometric_map',
  title: '北前船の常夜燈と野辺地の歴史を歩く',
  description:
    'JR大湊線と青い森鉄道の分岐駅・野辺地から観光物産PRセンターに立ち寄り、町中心部の歴史民俗資料館や野辺地八幡宮、ケツメイ茶スイーツが人気のカフェを経て、陸奥湾を望む常夜燈公園へと至る港町散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Noheji port town in Aomori showing a railway station, historic wooden shrine, cozy cafe with waffles, town museum and stone coastal lantern park facing Mutsu Bay, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '北前船が往来した歴史と陸奥湾の風が息づく野辺地を歩いたあと、誰かに伝えたい景色はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 3,
      text: '「野辺地町歴史民俗資料館」で、北前船交易と縄文文化が物語る豊かな歴史に触れた瞬間',
      subtext:
        '国の重要文化財の土偶や北前船の資料が、陸奥湾の港町が辿ってきた深い歴史を伝えていた。',
      badge: {
        code: 'nobechi_museum',
        name_ja: '野辺地・北前船と縄文の記憶を知る者',
        subtitle_en: 'Explorer of Noheji History',
        description:
          '野辺地町歴史民俗資料館を訪ね、北前船交易と貴重な考古資料に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a traditional wooden Kitamae sailing ship model and an ancient clay figurine, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 4,
      text: '「GARDEN CAFE」で、野辺地特産のケツメイ茶を使った香り高いワッフルを味わった瞬間',
      subtext:
        '泉山会館の明るい空間でいただいた特産茶のスイーツが、北国の旅に優しい彩りをくれた。',
      badge: {
        code: 'nobechi_garden_cafe',
        name_ja: '野辺地・ケツメイ茶の茶房を知る者',
        subtitle_en: 'Guest of Noheji Cafe',
        description:
          'GARDEN CAFEを訪ね、特産のケツメイ茶を使ったワッフルと寛ぎの時間を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing freshly baked herbal-tea waffles and a ceramic cup of roasted tea, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 5,
      text: '「常夜燈公園」の日本最古級の常夜燈と陸奥湾の潮風を目の前にして立ち尽くした瞬間',
      subtext:
        'かつての北前船を照らし続けた石の常夜燈と青い陸奥湾の水平線が、旅の終わりを飾った。',
      badge: {
        code: 'nobechi_joyato',
        name_ja: '陸奥湾・常夜燈の潮風を仰ぎし者',
        subtitle_en: 'Watcher of Noheji Joyato',
        description:
          '常夜燈公園を訪ね、往時の北前船を見守った石の常夜燈と陸奥湾の景色に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a weathered stone coastal lighthouse lantern facing calm blue Mutsu Bay waves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 2,
      text: '「野辺地八幡宮」の静かな杜の中で、歴史ある本殿と木漏れ日の美しさに心を委ねた瞬間',
      subtext:
        '町の総鎮守として海と暮らしを守り続けてきた木造の本殿に、穏やかな祈りが宿っていた。',
      badge: {
        code: 'nobechi_hachimangu',
        name_ja: '野辺地・八幡宮の杜を拝みし者',
        subtitle_en: 'Visitor of Noheji Shrine',
        description:
          '野辺地八幡宮を訪ね、県重宝に指定された由緒ある社殿と静かな杜に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a historic wooden Shinto shrine sanctuary framed by tall northern cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nobechi_complete',
    name_ja: '陸奥湾の常夜燈と北前船ロマンを巡る旅人',
    subtitle_en: 'Walker of Noheji Port Town',
    description:
      '野辺地町観光物産PRセンターから野辺地八幡宮、歴史民俗資料館、GARDEN CAFE、常夜燈公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a traditional stone coastal lantern, a wooden Kitamae sailing ship silhouette and Mutsu Bay waves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '野辺地町観光物産PRセンター',
      spot_type: '買い物',
      description:
        '青い森鉄道・JR野辺地駅に隣接する町の玄関口。陸奥湾のホタテ加工品や特産のケツメイ茶、ご当地菓子などの物産が揃う。開館9:00〜19:30（売店9:00〜17:00）、年末年始休。',
      address: '青森県上北郡野辺地町字中小中野17-17',
      prefecture: '青森県',
      municipality: '上北郡野辺地町',
      lat: 40.855987,
      lng: 141.119108,
      clue: '青い森鉄道とJR大湊線が交わる野辺地駅に降り立ったら、まずは駅に隣接する「野辺地町観光物産PRセンター」へ足を踏み入れよう（9:00〜19:30・売店17:00まで）。館内には陸奥湾で育まれた肉厚なホタテの加工品や、野辺地特産の薬草「かわらけつめい（ケツメイ茶）」の商品、観光パンフレットなどが豊富に揃う。これから陸奥湾の潮風薫る歴史のまちへ歩き出す前に、土地の恵みをじっくり確かめておきたい。',
      surprise:
        '駅を出てすぐの場所に地域の特産品と観光案内が心地よくまとめられており、初めての旅人でも町の輪郭をすっと掴むことができる。棚に並ぶホタテやケツメイ茶を眺めていると、野辺地ならではの暮らしへの興味がいっそう膨らんでいくに違いない。旅の始まりに嬉しい施設だ。',
      hook: '物産館を後にしたら、北北東へ徒歩20分の野辺地八幡宮へ向かおう。',
      f7_fragment: '野辺地駅に寄り添う、陸奥湾の恵みと特産ケツメイ茶が揃う玄関口。',
      f7_full: '駅隣接の「野辺地町観光物産PRセンター」を訪ね、ホタテやケツメイ茶など野辺地ならではの豊かな特産品に触れて旅を始めた。',
      image_prompt:
        'Bright Japanese station-side tourist craft and food shop displaying dried scallops, roasted herbal tea tins and local pamphlets, no text, no people.',
    },
    {
      name: '野辺地八幡宮',
      spot_type: '見どころ',
      description:
        '慶長3年（1598年）創建と伝わる野辺地の総鎮守。本殿と末社金刀比羅宮本殿は青森県の県重宝に指定される由緒ある古社。参拝自由。',
      address: '青森県上北郡野辺地町字笹館12',
      prefecture: '青森県',
      municipality: '上北郡野辺地町',
      lat: 40.86705,
      lng: 141.121369,
      clue: '物産センターから北北東へ徒歩20分、落ち着いた木立に囲まれた「野辺地八幡宮」を訪ねよう（参拝自由）。慶長三年の創建と伝わる町の総鎮守で、青森県の県重宝に指定された本殿や金刀比羅宮本殿が静かな気品を漂わせている。北前船の船乗りたちも航海の安全を祈願したという古い社殿に深々と手を合わせ、港町として栄えた野辺地の悠久の歴史に心静かに、そしてどこまでもゆっくりと思いを馳せてみよう。',
      surprise:
        '町中の賑わいから少し離れた高台の境内に立つと、立派な木々に包まれた静謐な空気が心地よく迎えてくれる。古くから海の安全を見守り続けてきた金刀比羅宮の佇まいには、北の海と寄り添って生きてきた人々の深い祈りが今も静かに息づいているようだ。実に清々しい古社だ。',
      hook: '八幡宮を参拝したら、南東へ徒歩6分の野辺地町歴史民俗資料館へ向かおう。',
      f7_fragment: '県の重宝に指定された本殿と金刀比羅宮を擁する、港町・野辺地の鎮守。',
      f7_full: '静かな木立に抱かれた「野辺地八幡宮」に参拝し、往時の航海の安全を見守り続けた由緒ある社殿の気品に心静かに触れた。',
      image_prompt:
        'Serene historic Shinto shrine of Noheji Hachimangu with weathered wooden main hall framed by tall northern cedar trees, no text, no people.',
    },
    {
      name: '野辺地町歴史民俗資料館',
      spot_type: '見どころ',
      description:
        '国指定重要文化財の自立する土偶「縄文くらら」や漆塗木鉢、北前船や幕末の歴史資料を展示する資料館。開館9:00〜16:00、月・祝日休、観覧料210円。',
      address: '青森県上北郡野辺地町字野辺地1-3',
      prefecture: '青森県',
      municipality: '上北郡野辺地町',
      lat: 40.864786,
      lng: 141.124266,
      clue: '野辺地八幡宮から南東へ徒歩6分、町の中心部に建つ「野辺地町歴史民俗資料館」へ入ろう（9:00〜16:00、月曜・祝日休・210円）。国指定重要文化財の自立する土偶や北前船交易の貴重な資料が展示されている。',
      surprise:
        '小さな町の資料館でありながら、国指定重要文化財の土偶や日本最古級の螺鈿細工の痕跡を残す木鉢など、驚くほど密度の濃い展示品に出会える。北前船の寄港地として文化が花開いた野辺地の奥深い歴史が、展示を通して鮮やかに浮かび上がってくる見事な施設だ。',
      hook: '資料館を見学したら、東へ徒歩7分のGARDEN CAFEでひと休みしよう。',
      f7_fragment: '国重文の土偶と北前船の記憶を今に伝える、野辺地町の歴史の宝庫。',
      f7_full: '「野辺地町歴史民俗資料館」で貴重な縄文遺物や北前船交易の資料を見学し、野辺地の町が歩んできた深い歴史にじっくり触れた。',
      image_prompt:
        'Small Japanese regional history museum gallery displaying a traditional wooden sailing ship model and illuminated Jomon clay figurine in glass case, no text, no people.',
    },
    {
      name: 'GARDEN CAFE',
      spot_type: '休憩',
      description:
        '泉山会館1階にある人気のカフェ。野辺地特産のケツメイ茶を使ったワッフルや、地元食材を活かしたパスタ・ランチを味わえる。営業時間11:00〜16:00（L.O.15:30）、日・月曜定休。',
      address: '青森県上北郡野辺地町字野辺地162-1',
      prefecture: '青森県',
      municipality: '上北郡野辺地町',
      lat: 40.865422,
      lng: 141.129147,
      clue: '資料館から東へ徒歩7分、泉山会館の一階に入る「GARDEN CAFE」でひと息つこう（11:00〜16:00、日・月曜休）。看板メニューは野辺地特産の「かわらけつめい（ケツメイ茶）」を生地やクリームに活かした焼きたてのワッフルや、地元食材を使った温かいランチだ。香り高いお茶の風味と優しい甘さをゆっくり味わって、このあと海辺の常夜燈公園へと向かう午後の散策にしっかり備えたい。',
      surprise:
        '駅前の物産館でも見かけた名産のケツメイ茶が、ここでは香ばしいカフェスイーツへと見事に生まれ変わっているのが楽しい。明るく居心地の良い空間で味わう温かいお茶とワッフルが、北国の旅の疲れをふわりと優しく解きほぐしてくれる、何度でも通いたくなる一軒だ。',
      hook: 'カフェで満たされたら、北西へ徒歩18分の常夜燈公園へ向かい旅を結ぼう。',
      f7_fragment: '特産ケツメイ茶の香ばしいワッフルが迎える、泉山会館内の寛ぎカフェ。',
      f7_full: '泉山会館の「GARDEN CAFE」で特産ケツメイ茶を使った香り豊かなワッフルを味わい、午後の散策へ向けた心地よい休息をとった。',
      image_prompt:
        'Cozy sunlit Japanese cafe table with freshly baked golden herbal-tea waffles topped with cream and a warm cup of roasted tea, no text, no people.',
    },
    {
      name: '常夜燈公園',
      spot_type: '見どころ',
      description:
        '往時の北前船交易で海上安全を照らした常夜燈が立つ海辺の公園。復元された北前型弁才船「みちのく丸」展示や陸奥湾の眺めが印象的。終日開放・入園無料。',
      address: '青森県上北郡野辺地町字野辺地568',
      prefecture: '青森県',
      municipality: '上北郡野辺地町',
      lat: 40.871906,
      lng: 141.118777,
      clue: 'カフェから北西へ徒歩18分、潮の香りが近づく海岸沿いの「常夜燈公園」で散策を締めくくろう（終日開放・無料）。かつて南部藩の重要な港として栄えた野辺地で、北前船の往来を見守り続けた歴史ある常夜燈が今も陸奥湾を背に静かに佇んでいる。復元された弁才船「みちのく丸」や穏やかに広がる青い海を眺めながら、港町・野辺地の遠い記憶に心を委ねて、旅の余韻を心ゆくまでゆっくり味わいたい。',
      surprise:
        '海風を受けながらどっしりと立つ常夜燈の石組を見上げていると、かつてこの浜辺に多くの北前船が帆を下ろして賑わっていた時代の気配がすぐそばに蘇ってくるようだ。陸奥湾の澄んだ水平線が、野辺地歩きの最後を清々しく飾ってくれる素晴らしい名所といえる。',
      hook: '',
      f7_fragment: '北前船の航路を照らし続けた石の常夜燈が立つ、陸奥湾沿いの海辺公園。',
      f7_full: '陸奥湾に面した「常夜燈公園」で往時の常夜燈と弁才船を仰ぎ、北前船の面影残る野辺地の散策を晴れやかに締めくくった。',
      image_prompt:
        'Historic weathered stone coastal lighthouse lantern of Joyato Park standing beside calm blue Mutsu Bay with a traditional wooden sailing ship model in distance, no text, no people.',
    },
  ],
};
