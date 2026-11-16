export default {
  slug: 'hiragishi_akabira',
  station_order: 933,
  station: '平岸',
  line: 'JR根室本線',
  area_name: '赤平・平岸仲町',
  prefecture: '北海道',
  municipality: '赤平市',
  category: '歴史・グルメ',
  budget_tier: 1,
  tags: ['根室本線', '平岸', 'ラーメン', '開拓神社', '寺院'],
  style_genre: 'ink_and_watercolor',
  title: '平岸の祈りと石炭の余韻に触れる散歩道',
  description:
    '石炭積み出しで栄えた赤平市・JR平岸駅から、道産特注麺のラーメンふたご屋、平岸神社、本恵寺、平岸中央公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Hiragishi in Akabira, Hokkaido, featuring a small rural train station surrounded by quiet residential lanes, a modest wooden shrine beneath northern pines, a peaceful temple roof, and green park grounds, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び赤平・平岸を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '道産麺とボリュームに満たされた至福の一杯',
      subtext: '北海道産特注麺が自慢の店で、平岸の温かい一皿を味わった',
      badge: {
        code: 'hiragishi_akabira_futagoya',
        name_ja: '平岸ラーメンの旅人',
        subtitle_en: 'Hiragishi Ramen Traveler',
        description:
          'ラーメン ふたご屋で、北海道産100%特注麺を使った人気の一杯を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hot ramen bowl with rich broth and crisp toppings on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治の開拓期からまちを見守る平岸神社の静寂',
      subtext: '明治の入植と炭鉱の時代を見つめ続けてきた神社に参拝した',
      badge: {
        code: 'hiragishi_akabira_shrine',
        name_ja: '平岸開拓の祈り手',
        subtitle_en: 'Hiragishi Shrine Pilgrim',
        description:
          '明治28年頃の入植から続く地域の歩みを見守る平岸神社へ参拝したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet wooden torii gate and evergreen pine boughs on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '仲町の住宅街に佇む歴史ある寺院の穏やかな佇まい',
      subtext: '本恵寺の静かな境内で、地域に根付く暮らしの歴史に触れた',
      badge: {
        code: 'hiragishi_akabira_temple',
        name_ja: '仲町の寺を巡る者',
        subtitle_en: 'Visitor of Nakamachi Temple',
        description:
          '平岸仲町に佇む浄土真宗本願寺派の本恵寺を訪れ、穏やかな時の流れを感じたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a traditional temple bell and curved tiled eaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '緑と広場が広がる市民の憩いの公園での風景',
      subtext: '平岸中央公園の開放的な景色の中、まちの日常を歩いた',
      badge: {
        code: 'hiragishi_akabira_park',
        name_ja: '平岸公園の散策者',
        subtitle_en: 'Stroller of Hiragishi Park',
        description:
          '平岸中央公園の広々とした空間を歩き、赤平・平岸の穏やかな日常を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of sunlit green park lawns and distant mountain ridges on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'hiragishi_akabira_complete',
    name_ja: '赤平平岸・祈りと記憶の旅人',
    subtitle_en: 'Traveler of Akabira Hiragishi Heritage',
    description:
      'JR平岸駅（赤平市）からラーメンふたご屋、平岸神社、本恵寺、平岸中央公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a quiet rural station, wooden shrine gate, and serene park trees on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR平岸駅',
      lat: 43.541401,
      lng: 142.123872,
      address: '北海道赤平市平岸仲町1-1',
      description:
        '大正2年（1913年）11月10日開業のJR根室本線の駅（終日利用可）。かつて周囲の炭鉱からの石炭積出拠点として栄え、昭和57年に無人化・駅舎改築された。',
      clue:
        '大正二年十一月に国有鉄道下富良野線の駅として開業し、かつて周辺の炭鉱からの石炭積み出しで賑わった赤平市の「JR平岸駅」から楽しい町歩きと散策を始めよう（終日利用可）。昭和五十七年改築の静かな無人駅をゆっくり後にして外へ出たら、まずは西へ歩いて北海道産特注麺が自慢の人気店「ラーメン ふたご屋」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に歩みを踏み出そう。',
      hook: '駅を出て西方向へ徒歩約8〜9分',
      f7_fragment: '大正二年開業、かつて石炭積出の拠点として栄えた赤平市平岸の無人駅。',
      f7_full: '「JR平岸駅」の静かなホームを後にし、赤平・平岸の歴史と味を訪ねる旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'ラーメン ふたご屋',
      lat: 43.541698,
      lng: 142.116133,
      address: '北海道赤平市平岸新光町5-9',
      description:
        '北海道産100%の特注麺を使用する人気ラーメン店（11:00〜19:00、月曜休の場合あり）。赤平名物のカツラーメンや辛味噌ラーメンなどが味わえる。',
      clue:
        '北海道産百パーセントの特注麺が自慢の「ラーメン ふたご屋」で熱々の一杯を味わおう（11:00〜19:00）。お腹を満たしたら北東の「平岸神社」へ向かおう。',
      hook: '新光町から北東方向へ徒歩約5分',
      f7_fragment: '北海道産100%の特注麺でカツラーメンや辛味噌を届ける平岸の人気ラーメン店。',
      f7_full: '「ラーメン ふたご屋」でコシのある道産麺と温かいスープを堪能し、活力を得た。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '平岸神社',
      lat: 43.543017,
      lng: 142.119788,
      address: '北海道赤平市平岸仲町2-1',
      description:
        '天照皇大神を御祭神として祀る地域の神社（参拝自由）。明治28年（1895年）頃の三重団体等の入植から始まった平岸地区の歩みとともに鎮座し続けている。',
      clue:
        '明治二十八年頃の三重団体などの入植に始まる平岸地区の歩みを静かに見守り続けてきた由緒ある「平岸神社」へ丁寧に心を込めてゆっくりと参拝しよう（参拝自由）。天照皇大神を御祭神に祀る緑豊かな落ち着いた境内で静かに深く手を合わせれば、開拓と炭鉱の時代を生きた人々の暮らしへの想いが胸に浮かんでくる。旅の安全を心から祈ったら、すぐ南東に佇む「本恵寺」へと歩いて楽しく元気に向かおう。',
      hook: 'すぐ南東方向へ徒歩約2〜3分',
      f7_fragment: '明治二十八年頃の入植期から平岸地区の歩みを見守り続ける地域の神社。',
      f7_full: '「平岸神社」の静謐な境内で手を合わせ、土地の開拓の歴史に思いを馳せた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '本恵寺',
      lat: 43.542173,
      lng: 142.121558,
      address: '北海道赤平市平岸仲町2-6',
      description:
        '平岸仲町の住宅街に佇む浄土真宗本願寺派の寺院（境内参拝可）。炭鉱の隆盛や時代の移り変わりの中で地域住民の心の拠り所として受け継がれてきた。',
      clue:
        '平岸仲町の穏やかな住宅街の中に静かに佇む浄土真宗本願寺派の由緒あるお寺「本恵寺」をゆっくり丁寧に楽しく訪ねよう（境内参拝可）。長い歴史を刻む落ち着いた境内の佇まいには、かつて石炭輸送で賑わった時代から現代までこの地で暮らしてきた人々の安らぎと祈りが息づいている。静かな時の流れをゆっくりと感じたら、南方向に広がる市民の憩いの場「平岸中央公園」へと歩いて楽しく元気に向かおう。',
      hook: '仲町を南方向へ徒歩約7分',
      f7_fragment: '平岸仲町の住宅街で地域の人々の心の拠り所として受け継がれる寺院。',
      f7_full: '「本恵寺」の落ち着いた境内を歩き、地域に根付く静かな祈りの空気に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '平岸中央公園',
      lat: 43.538091,
      lng: 142.123372,
      address: '北海道赤平市平岸仲町5-32-3',
      description:
        'ドーム施設や遊具、水遊び場、各種スポーツコートなどを備えた平岸地区の中心的な総合公園（散策自由）。市民の憩いとふれあいの場として親しまれる。',
      clue:
        '旅の締めくくりは、ドーム施設や広々としたグラウンドが地域の憩いの場となっている「平岸中央公園」をゆっくり楽しく爽やかに元気に明るく散策しよう（散策自由）。開放的な空の下で大きく深呼吸しながら今日巡った神社やお寺、美味しいラーメンの記憶をゆっくり振り返れば、素朴で温かなこの街の魅力がじんわりと心に沁みていく。平岸の穏やかな余韻を抱いて、散策の旅を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: 'ドーム施設や広場を備え、平岸地区の日常の憩いを支える総合公園。',
      f7_full: '「平岸中央公園」の開放的な空間で深呼吸し、赤平・平岸の散歩を心地よく終えた。',
    },
  ],
};
