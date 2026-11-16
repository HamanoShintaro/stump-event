export default {
  slug: 'sendai',
  station_order: 655,
  station: '仙台',
  line: 'JR東北新幹線',
  area_name: '仙台・伊達政宗の杜と朝市の街',
  prefecture: '宮城県',
  municipality: '仙台市',
  category: '歴史とグルメ',
  budget_tier: 3,
  tags: ['宮城県', '仙台市', '仙台駅', 'ずんだ', '瑞鳳殿'],
  style_genre: 'editorial_clean_ink',
  title: '仙台・ずんだ茶寮と政宗公の瑞鳳殿を歩く',
  description:
    'JR仙台駅から、駅構内の人気スイーツ「ずんだ茶寮 仙台駅ずんだ小径店」と仙台の台所「仙台朝市」、広瀬川ほとりの隠れ家「珈琲まめぼう」、伊達政宗公が眠る豪華絢爛な霊屋「瑞鳳殿」、天守台から街を一望する「青葉城（仙台城跡）」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Sendai castle town showing the ornate Momoyama-style Zuihoden mausoleum framed by towering cedar trees, bronze equestrian statue of Date Masamune overlooking the Hirose River, lively morning market street and cozy riverside cafe, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: 'ずんだの優しい甘さと朝市の活気、伊達政宗公の美意識が繋がる仙台を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「ずんだ茶寮」で、枝豆の豊かな風味が広がるずんだ餅やずんだシェイクを味わった瞬間',
      subtext:
        '鮮やかな若草色の甘味が、杜の都・仙台の旅の始まりを爽やかに彩ってくれた。',
      badge: {
        code: 'sendai_zunda',
        name_ja: '仙台・名物ずんだの甘味を嗜みし者',
        subtitle_en: 'Taster of Sendai Zunda',
        description:
          'ずんだ茶寮を訪ね、仙台伝統の枝豆スイーツ「ずんだ餅」やずんだシェイクを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting soft white mochi dumplings coated in vibrant bright green mashed edamame zunda paste on a lacquer plate, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「仙台朝市」の活気あふれる商店街を歩き、三陸の海の幸や地元食材を眺めた瞬間',
      subtext:
        '駅前からすぐの場所に広がる庶民的な市場に、東北最大の都市の豊かな食の土台を感じた。',
      badge: {
        code: 'sendai_asaichi',
        name_ja: '仙台・朝市の活気に触れし者',
        subtitle_en: 'Visitor of Sendai Market',
        description:
          '仙台朝市を訪ね、新鮮な三陸の魚介や地元グルメが並ぶ「仙台の台所」を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a bustling Japanese morning market stall with fresh Pacific seafood, colorful vegetables and warm wooden awnings, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「瑞鳳殿」の杉木立の石段を登り、極彩色の桃山建築と伊達政宗公の霊屋を仰いだ瞬間',
      subtext:
        '経ヶ峯の静かな森に輝く黒漆と金箔の彫刻に、仙台藩祖・政宗公の美意識が息づいていた。',
      badge: {
        code: 'sendai_zuihoden',
        name_ja: '仙台・豪華絢爛な瑞鳳殿を仰ぎし者',
        subtitle_en: 'Admirer of Zuihoden',
        description:
          '経ヶ峯の瑞鳳殿を訪ね、仙台藩祖・伊達政宗公が眠る桃山文化の霊屋を拝観した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting an ornate black-lacquer and gold-gilded Japanese mausoleum hall framed by towering ancient cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「青葉城（仙台城跡）」の本丸跡に立ち、広瀬川の向こうに仙台市街を一望した瞬間',
      subtext:
        '伊達政宗公騎馬像の視線の先に広がる杜の都のパノラマが、旅を誇らしく結んでくれた。',
      badge: {
        code: 'sendai_aobajo',
        name_ja: '仙台・青葉城跡から杜の都を望みし者',
        subtitle_en: 'Walker of Aoba Castle',
        description:
          '青葉城（仙台城跡）を訪ね、伊達政宗公が築いた城跡から仙台市街を一望した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing the bronze equestrian statue of samurai lord Date Masamune overlooking a wide green river and distant city skyline, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sendai_complete',
    name_ja: '仙台・伊達政宗の杜と朝市を巡る旅人',
    subtitle_en: 'Walker of Sendai',
    description:
      'ずんだ茶寮から仙台朝市、珈琲まめぼう、瑞鳳殿、青葉城跡までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a gilded mausoleum roof, an equestrian samurai statue and green zunda mochi sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'ずんだ茶寮 仙台駅ずんだ小径店',
      spot_type: '休憩',
      description:
        'JR仙台駅3階「ずんだ小径」にある人気店。仙台伝統の枝豆を使った「ずんだ餅」や名物「ずんだシェイク」を気軽に味わえる。物販9:00〜21:00・喫茶10:00〜18:30（L.O.18:00）、無休。',
      address: '宮城県仙台市青葉区中央1-1-1 仙台駅3F',
      prefecture: '宮城県',
      municipality: '仙台市',
      lat: 38.260213,
      lng: 140.881939,
      clue: 'JR仙台駅へ着いたら、まずは駅3階の「ずんだ茶寮 仙台駅ずんだ小径店」で仙台名物に触れよう（物販9:00〜21:00・喫茶10:00〜18:30、無休）。すりつぶした枝豆の豊かな風味と優しい甘みが広がる伝統の「ずんだ餅」や、濃厚なバニラと枝豆が溶け合う人気の「ずんだシェイク」が旅人を明るく迎えてくれる。鮮やかな若草色の甘味で心と舌を満たし、杜の都の散策へこれからも軽やかに踏み出したい。',
      surprise:
        '「ずんだ」という名の由来には、豆を打つ（豆打・ずだ）ことから転じたという説や、伊達政宗公が陣太刀の柄で枝豆を砕いたという伝承など諸説がある。',
      hook: 'ずんだの甘味を味わったら、南西へ歩いて徒歩5分の仙台朝市へ向かおう。',
      f7_fragment: '仙台駅構内で名物ずんだ餅とずんだシェイクを味わう、定番スイーツ店。',
      f7_full:
        '「ずんだ茶寮」で枝豆の香り豊かなずんだ餅とシェイクを味わい、杜の都・仙台の旅を爽やかに始めた。',
      image_prompt:
        'Bright inviting Japanese sweets shop counter in Sendai serving green edamame zunda mochi dumplings and a tall creamy green shake in editorial clean ink style, no text, no letters.',
    },
    {
      name: '仙台朝市',
      spot_type: '買い物',
      description:
        '仙台駅から徒歩約5分、「仙台の台所」として親しまれる活気ある商店街。新鮮な三陸の魚介や野菜、コロッケなどの食べ歩きグルメが並ぶ。8:00〜17:00頃（店舗により異なる）、日曜・祝日休の店舗多数。',
      address: '宮城県仙台市青葉区中央3-8-5',
      prefecture: '宮城県',
      municipality: '仙台市',
      lat: 38.258796,
      lng: 140.878668,
      clue: '仙台駅から南西へ歩いて約5分、戦後の青空市場から続く「仙台朝市」へ足を踏み入れよう（8:00〜17:00頃・日祝休の店舗多し）。約百メートルの通りには三陸の鮮魚や宮城県産の瑞々しい野菜、名物のじゃがじゃがコロッケや海鮮丼の店がぎっしりと軒を連ねている。「仙台の台所」と呼ばれる活気あふれる商店街を歩き、東北最大の都市が育む豊かな食の営みをこれからもずっと身近に感じたい。',
      surprise:
        '「朝市」という名前ながら多くの店舗が夕方17時頃まで営業しており、昼間の街歩きでも気軽に新鮮なグルメや食べ歩きを楽しめる。',
      hook: '朝市の活気に触れたら、西南西へ歩いて広瀬川ほとりの珈琲まめぼうでひと息つこう。',
      f7_fragment: '仙台駅から徒歩5分、三陸の魚介と惣菜が並ぶ活気ある「仙台の台所」。',
      f7_full:
        '「仙台朝市」の賑やかな商店街を歩き、三陸の海の幸や地元の食材が集まる仙台の活気に触れた。',
      image_prompt:
        'Lively Sendai morning market street with fresh seafood crates, red apples and warm local food stalls in editorial clean ink style, no text, no letters.',
    },
    {
      name: '珈琲まめぼう',
      spot_type: '休憩',
      description:
        '広瀬川のほとり、米ヶ袋の緑豊かな環境に佇む隠れ家スペシャルティコーヒー専門店。丁寧なハンドドリップ珈琲が味わえる。12:00〜19:00、木曜休（祝日の場合営業）。',
      address: '宮城県仙台市青葉区米ヶ袋1-1-12',
      prefecture: '宮城県',
      municipality: '仙台市',
      lat: 38.254975,
      lng: 140.869416,
      clue: '広瀬川のほとりに佇む「珈琲まめぼう」でひと息つこう（12:00〜19:00、木曜休）。杜の緑を眺めながら丁寧なスペシャルティ珈琲をゆっくり味わいたい。',
      surprise:
        '店主が世界各国の良質な生豆を厳選し、広瀬川のせせらぎがほど近い静かな住宅街の中で一杯ずつ心を込めて抽出している。',
      hook: '珈琲で心を整えたら、南西の広瀬川を渡って経ヶ峯の瑞鳳殿へ向かおう。',
      f7_fragment: '広瀬川のほとりで丁寧なスペシャルティ珈琲を味わう、米ヶ袋の隠れ家。',
      f7_full:
        '米ヶ袋の「珈琲まめぼう」で豊かな香りの一杯を味わい、広瀬川沿いの静かな杜の都の空気に癒やされた。',
      image_prompt:
        'Quiet riverside specialty coffee cafe in Sendai with large window framing green trees, ceramic pour-over dripper and warm wooden table in editorial clean ink style, no text, no letters.',
    },
    {
      name: '瑞鳳殿',
      spot_type: '見どころ',
      description:
        '寛永14年（1637年）に造営された仙台藩祖・伊達政宗公の霊屋。杉木立の中に黒漆と極彩色の桃山様式建築が輝く。9:00〜16:50（12〜1月〜16:20）、12月31日休、大人570円。',
      address: '宮城県仙台市青葉区霊屋下23-2',
      prefecture: '宮城県',
      municipality: '仙台市',
      lat: 38.251009,
      lng: 140.865775,
      clue: '広瀬川に架かる霊屋橋を渡って経ヶ峯の杉木立へ入り、仙台藩祖・伊達政宗公が眠る「瑞鳳殿」を拝観しよう（9:00〜16:50・冬期〜16:20、12/31休、大人570円）。戦災で焼失したのちに再建された霊屋は、黒漆に金箔や極彩色の彫刻を施した桃山文化の華麗な美しさを今に伝えている。老杉に囲まれた静かな石段を登り、伊達六十二万石の祖が抱いた壮大な美意識をこれからも深く仰ぎ見たい。',
      surprise:
        '敷地内には二代目藩主・忠宗公の感仙殿と三代目・綱宗公の善応殿も並び、発掘調査で出土した副葬品などを展示する資料館も併設されている。',
      hook: '瑞鳳殿を後にしたら、北西の青葉山へ登り青葉城（仙台城跡）で旅を結ぼう。',
      f7_fragment: '黒漆と極彩色の桃山様式が杉木立に輝く、伊達政宗公の豪華な霊屋。',
      f7_full:
        '経ヶ峯の「瑞鳳殿」で黒漆と金箔が輝く極彩色の霊屋を仰ぎ、仙台藩祖・伊達政宗公の美意識に触れた。',
      image_prompt:
        'Ornate black-lacquer and gold-leaf Zuihoden mausoleum surrounded by towering cedar trees and stone steps in Sendai in editorial clean ink style, no text, no letters.',
    },
    {
      name: '青葉城（仙台城跡）',
      spot_type: '見どころ',
      description:
        '伊達政宗公が築いた仙台城の本丸跡。天守台からは広瀬川と仙台市街の大パノラマが広がり、政宗公の騎馬像が街を見守る。散策自由（本丸会館9:00〜17:00・施設により異なる）、無休。',
      address: '宮城県仙台市青葉区川内1',
      prefecture: '宮城県',
      municipality: '仙台市',
      lat: 38.252891,
      lng: 140.856304,
      clue: '経ヶ峯から青葉山の高台へ進み、伊達政宗公が慶長年間に築いた「青葉城（仙台城跡）」で旅を締めくくろう（散策自由・本丸会館9:00〜17:00、無休）。天然の要害である竜ノ口渓谷と広瀬川に守られた本丸跡には勇壮な伊達政宗公騎馬像が立ち、その視線の先には杜の都・仙台の街並みと太平洋までが広がる。朝市と名物ずんだ、伊達の歴史を巡った旅をこれからもずっと誇らしく美しく結びたい。',
      surprise:
        '徳川家康への配慮からあえて天守閣を造らなかったと伝わり、現在も本丸跡の石垣が当時の大城郭の面影を力強く伝えている。',
      hook: '',
      f7_fragment: '伊達政宗公騎馬像が立ち、杜の都・仙台を一望する高台の城跡。',
      f7_full:
        '「青葉城（仙台城跡）」から杜の都のパノラマを一望し、ずんだと朝市と伊達の歴史を巡った仙台の旅を結んだ。',
      image_prompt:
        'Bronze equestrian statue of Date Masamune atop the stone ramparts of Aoba Castle overlooking the Hirose River and Sendai city at golden dusk in editorial clean ink style, no text, no letters.',
    },
  ],
};
