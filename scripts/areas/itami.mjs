export default {
  slug: 'itami',
  station_order: 622,
  station: '伊丹',
  line: 'JR宝塚線（福知山線）',
  area_name: '伊丹・清酒発祥の城下町',
  prefecture: '兵庫県',
  municipality: '伊丹市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['兵庫県', '伊丹市', '伊丹駅', '有岡城跡', '清酒発祥'],
  style_genre: 'pictorial_isometric_map',
  title: '清酒発祥の伊丹・酒蔵と有岡城跡を歩く',
  description:
    'JR伊丹駅前の国指定史跡・有岡城跡から、白壁の酒蔵が残る「白雪ブルワリービレッジ長寿蔵」で酒蔵ランチや地酒を楽しみ、自家焙煎珈琲店を経て、国重文の旧岡田家酒蔵を擁する市立伊丹ミュージアムと猪名野神社へと至る散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Itami city in Hyogo showing a train station next to stone castle ruins, historic white-walled sake brewery restaurant, cozy art cafe, cultural museum with old sake warehouse and serene Shinto shrine, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '往時の城跡と清酒発祥の酒蔵通りが溶け合う伊丹を歩いたあと、誰かに話したい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「有岡城跡史跡公園」の駅前に広がる石垣に立ち、惣構えの城の面影を感じた瞬間',
      subtext:
        '駅舎を出てすぐ目の前に保存された往時の石垣が、伊丹の町の歴史の厚みを語っていた。',
      badge: {
        code: 'itami_arioka_castle',
        name_ja: '伊丹・有岡城跡の石垣を仰ぎし者',
        subtitle_en: 'Explorer of Arioka Castle',
        description:
          '有岡城跡史跡公園を訪ね、駅前に残る戦国の惣構えの石垣と史跡に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting historic stone castle walls and an ancient stone well framed by pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「白雪ブルワリービレッジ長寿蔵」の古い酒蔵で、伊丹の酒文化と食事を味わった瞬間',
      subtext:
        '二百余年の歴史を刻む酒蔵の太い梁の下でいただく料理と地酒が、旅を豊かに彩った。',
      badge: {
        code: 'itami_chojugura',
        name_ja: '伊丹・長寿蔵の酒文化を味わいし者',
        subtitle_en: 'Guest of Itami Sake Brewery',
        description:
          '白雪ブルワリービレッジ長寿蔵を訪ね、歴史ある酒蔵で食と酒文化に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a traditional white-walled sake brewery gable and ceramic sake cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「市立伊丹ミュージアム」で、国指定重要文化財の旧岡田家住宅・酒蔵を見上げた瞬間',
      subtext:
        '日本最古級の現存酒蔵と町家の佇まいが、清酒発祥の都・伊丹の誇りを伝えていた。',
      badge: {
        code: 'itami_museum',
        name_ja: '伊丹・旧岡田家酒蔵を知る者',
        subtitle_en: 'Admirer of Itami Museum',
        description:
          '市立伊丹ミュージアムを訪ね、国指定重要文化財の旧岡田家住宅と酒蔵に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a historic Edo-era tiled-roof sake warehouse and garden lantern, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「猪名野神社」の静かな境内で、伊丹の氏神様と大きなムクロジの木に出会った瞬間',
      subtext:
        '有岡城の北の砦跡にも重なる清らかな社叢で、伊丹の旅を穏やかに締めくくった。',
      badge: {
        code: 'itami_inano_jinja',
        name_ja: '伊丹・猪名野神社の杜を拝みし者',
        subtitle_en: 'Visitor of Inano Shrine',
        description:
          '猪名野神社を訪ね、伊丹の氏神様と大きなムクロジの木が見守る境内に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a serene Shinto sanctuary beneath a grand spreading sacred tree, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'itami_complete',
    name_ja: '有岡城跡と清酒の都・伊丹を巡る旅人',
    subtitle_en: 'Walker of Itami Sake Town',
    description:
      '有岡城跡史跡公園から白雪ブルワリービレッジ長寿蔵、ヒロコーヒー 伊丹中央店、市立伊丹ミュージアム、猪名野神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining white-walled sake brewery gables, stone castle walls, and a ceramic sake cup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '有岡城跡史跡公園',
      spot_type: '見どころ',
      description:
        'JR伊丹駅前に整備された名城・有岡城の史跡公園。荒木村重が築き黒田官兵衛が幽閉された城として知られ、石垣や井戸跡を見学できる。終日開放・無料。',
      address: '兵庫県伊丹市伊丹1-14',
      prefecture: '兵庫県',
      municipality: '伊丹市',
      lat: 34.782325,
      lng: 135.421251,
      clue: 'JR伊丹駅の改札を出て西側へ出ると、なんと駅舎のすぐ目の前に国指定史跡「有岡城跡史跡公園」の石垣が広がっている（終日開放・無料）。ここは往時の武将・荒木村重が城下町ごと城郭で囲う「惣構え」を築き、のちに黒田官兵衛が幽閉された歴史の舞台だ。保存された石垣や井戸跡を隅々までじっくりと眺めて、城下町の記憶が今に息づく伊丹の散策をここから心静かに力強く、そして前向きに凛と始めよう。',
      surprise:
        '現代的な駅前ロータリーのすぐ隣にこれほど立派な石垣と史跡公園が保存されている光景は全国でも珍しく、思わず足が止まる。駅を降りて一分で往時のドラマに飛び込めるような、伊丹という町の歴史の深さを最初の一歩で鮮やかに伝えてくれる素晴らしい場所だ。',
      hook: '石垣を後にしたら、西へ徒歩6分の白雪ブルワリービレッジ長寿蔵へ向かおう。',
      f7_fragment: 'JR伊丹駅の目の前に石垣と井戸跡が残る、往時の惣構えの城跡。',
      f7_full: '駅前の「有岡城跡史跡公園」で保存された石垣や史跡を見学し、往時の記憶が息づく伊丹の街歩きを力強く心地よく始めた。',
      image_prompt:
        'Historic stone castle ruins and ancient stone well inside Arioka Castle Ruins Park framed by green pine trees beside a clean urban plaza, no text, no people.',
    },
    {
      name: '白雪ブルワリービレッジ長寿蔵',
      spot_type: '食事',
      description:
        '清酒「白雪」で知られる小西酒造の築220年以上の酒蔵を活かしたレストラン＆ミュージアム。酒蔵料理やクラフトビール・日本酒を楽しめる。レストラン11:30〜21:00（ショップ10:00〜19:00・ミュージアム11:30〜17:00）、火曜定休。',
      address: '兵庫県伊丹市中央3-4-15',
      prefecture: '兵庫県',
      municipality: '伊丹市',
      lat: 34.781119,
      lng: 135.417198,
      clue: '有岡城跡から西へ徒歩6分、白壁が連なる「白雪ブルワリービレッジ長寿蔵」で昼食にしよう（レストラン11:30〜21:00・ショップ10:00〜19:00、火曜休）。清酒「白雪」の老舗・小西酒造が二百二十年以上前の酒蔵を改装した空間で、太い梁を見上げながら味わう酒蔵ランチやクラフトビール、日本酒は格別だ。二階のブルワリーミュージアムにも立ち寄り、清酒発祥の地・伊丹の酒造りの歴史にじっくり触れよう。',
      surprise:
        '高い天井に組まれた重厚な木組みと歴史ある酒蔵の佇まいがそのままレストランに活かされており、食事をするだけで伊丹の酒文化の粋を体感できる。二階に並ぶ古い酒造りの道具も展示されており、食と学びが心地よく調和した見事な人気スポットと誰もが思うはずだ。',
      hook: '長寿蔵を出たら、西へ徒歩6分のヒロコーヒー 伊丹中央店で一服しよう。',
      f7_fragment: '築二百余年の白雪の酒蔵を活かした、伊丹の食と清酒の文化拠点。',
      f7_full: '歴史ある「白雪ブルワリービレッジ長寿蔵」で酒蔵の空間と食事を楽しみ、清酒発祥の地・伊丹ならではの文化に触れた。',
      image_prompt:
        'Atmospheric Japanese sake brewery restaurant interior with massive dark timber beams, white plaster walls and neat wooden dining tables, no text, no people.',
    },
    {
      name: 'ヒロコーヒー 伊丹中央店',
      spot_type: '休憩',
      description:
        '北摂・阪神間で親しまれる自家焙煎珈琲専門店の中央店。落ち着いた空間でサイフォンやドリップの珈琲、特製ケーキやサンドイッチを味わえる。営業時間9:00〜19:00、無休。',
      address: '兵庫県伊丹市中央1-2-23',
      prefecture: '兵庫県',
      municipality: '伊丹市',
      lat: 34.781251,
      lng: 135.413279,
      clue: '長寿蔵から西へ徒歩6分、香ばしい焙煎香が漂う「ヒロコーヒー 伊丹中央店」で一服しよう（9:00〜19:00、無休）。落ち着いた空間で香り高い自家焙煎珈琲を味わいたい。',
      surprise:
        '歴史ある酒蔵通りのすぐそばで、こだわりの自家焙煎珈琲と丁寧に作られたケーキを楽しめる温かな空気感がとても心地よい。香り豊かな珈琲を味わいながら、次のミュージアムへ向けた静かな気持ちを整えるのにぴったりの素敵な休憩場所といえるだろう。',
      hook: 'カフェを出たら、東北東へ徒歩7分の市立伊丹ミュージアムへ向かおう。',
      f7_fragment: '香り高い自家焙煎珈琲とケーキが寄り添う、街角の落ち着いた喫茶店。',
      f7_full: '「ヒロコーヒー 伊丹中央店」で自家焙煎珈琲に癒やされる穏やかな休息をとり、酒蔵通り歩きの心地よい節目をゆっくり楽しんだ。',
      image_prompt:
        'Warm classic Japanese specialty coffee shop interior with dark wooden table, pour-over coffee cup and slice of cake in soft light, no text, no people.',
    },
    {
      name: '市立伊丹ミュージアム（旧岡田家住宅・酒蔵）',
      spot_type: '見どころ',
      description:
        '酒と文化をテーマにした総合文化施設。敷地内には国指定重要文化財「旧岡田家住宅・酒蔵」や旧石橋家住宅が保存・公開されている。開館10:00〜18:00、月曜休（祝日の場合は翌平日休）。',
      address: '兵庫県伊丹市宮ノ前2-5-20',
      prefecture: '兵庫県',
      municipality: '伊丹市',
      lat: 34.782506,
      lng: 135.417384,
      clue: 'カフェから東北東へ徒歩7分、美しい日本庭園と歴史建築が並ぶ「市立伊丹ミュージアム」へ足を踏み入れよう（10:00〜18:00、月曜休）。最大の見どころは敷地内に保存される国指定重要文化財の「旧岡田家住宅・酒蔵」で、延宝二年建築の町家と、日本最古級の現存酒蔵を無料で間近に見学できる。土間の竈や巨大な酒造道具を見上げれば、清酒発祥の都・伊丹の繁栄が目の前にぐっと鮮やかに蘇る。',
      surprise:
        '現代的な美術館建築のすぐ隣に、三百五十年近く前の町家と本物の酒蔵がそのままの姿で息づいている対比が実に美しい。ひんやりとした土間の空気と古い柱の手触りに触れるたび、伊丹の人々が受け継いできた酒造りの誇りが深く胸に伝わってくる素晴らしい施設だ。',
      hook: 'ミュージアムを出たら、北西へ徒歩5分の猪名野神社に詣でて旅を結ぼう。',
      f7_fragment: '国重文の旧岡田家住宅と日本最古級の酒蔵を伝える、酒と文化の殿堂。',
      f7_full: '「市立伊丹ミュージアム」で国指定重要文化財の旧岡田家住宅と酒蔵を見学し、伊丹が誇る酒造りの歴史にじっくり触れた。',
      image_prompt:
        'Historic Japanese cultural museum courtyard featuring the preserved white-walled Edo-era Okada-ke sake brewery and tiled roof garden, no text, no people.',
    },
    {
      name: '猪名野神社',
      spot_type: '見どころ',
      description:
        '伊丹の氏神様として信仰される古社。境内は有岡城の北の砦「岸の砦」が置かれた国史跡でもあり、大きなムクロジの木が佇む。参拝自由・無休。',
      address: '兵庫県伊丹市宮ノ前3-6-1',
      prefecture: '兵庫県',
      municipality: '伊丹市',
      lat: 34.784444,
      lng: 135.415206,
      clue: 'ミュージアムから北西へ徒歩5分、緑豊かな参道が続く伊丹の氏神様「猪名野神社」で散策を締めくくろう（終日開放・無料）。古くから町の暮らしを見守ってきた古社であり、往時には有岡城の重要な北の防備「岸の砦」が置かれた国の史跡でもある。樹齢を重ねた大きなムクロジの木が枝を広げる静かな境内で深く手を合わせ、有岡城跡から酒蔵通りへと続いた伊丹の旅をこれからもずっと心穏やかに結びたい。',
      surprise:
        '駅前の有岡城跡から始まった旅が、最後に同じ城の北端を守る砦跡でもあったこの神社へ繋がる構成に思わず膝を打つ。静かな境内に立つと、往時の記憶と清酒の文化が同じひとつの街の上で今も美しく重なり合っていることを実感できる、なんとも素敵な古社といえる。',
      hook: '',
      f7_fragment: '有岡城の岸の砦跡にも重なる、大きなムクロジが見守る伊丹の氏神様。',
      f7_full: '伊丹の氏神様「猪名野神社」の清らかな境内で手を合わせ、有岡城跡と酒蔵の記憶が息づく伊丹の散策を穏やかに結んだ。',
      image_prompt:
        'Tranquil ancient Shinto shrine of Inano Jinja with a grand wooden worship hall, stone lanterns and a huge spreading sacred tree, no text, no people.',
    },
  ],
};
