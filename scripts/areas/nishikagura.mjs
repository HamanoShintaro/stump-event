export default {
  slug: 'nishikagura',
  station_order: 979,
  station: '西神楽',
  line: 'JR富良野線',
  area_name: '西神楽南・北',
  prefecture: '北海道',
  municipality: '旭川市',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['富良野線', '西神楽公園', 'ホタルの里', 'つかもと食堂', '神楽神社'],
  style_genre: 'ink_and_watercolor',
  title: '西神楽のホタルの里と長い参道を巡る散歩',
  description:
    'JR西神楽駅からふくろうcafeウラル、ホタルの里として知られる西神楽公園、老舗食堂の喰処 つかもとを経て神楽神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nishi-Kagura Station in Asahikawa, a cozy owl cafe interior, fireflies glowing over a stream in a lush green park, a nostalgic country ramen diner, and a long tree-lined Shinto shrine path, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び西神楽を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: 'フクロウと寛げる ふくろうcafeウラル',
      subtext: '穏やかなフクロウたちを眺めながらドリンクを楽しんだ',
      badge: {
        code: 'nishikagura_ural',
        name_ja: '森の梟カフェ',
        subtitle_en: 'Owl Cafe Ural',
        description:
          'ふくろうcafeウラルを訪れ、愛らしいフクロウたちと癒やしの時間を過ごしたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a gentle horned owl perched beside a steaming teacup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'ホタルの里・西神楽公園のせせらぎ',
      subtext: '美しい水路と芝生が広がる公園のベンチで一息ついた',
      badge: {
        code: 'nishikagura_park',
        name_ja: 'ホタルの里公園',
        subtitle_en: 'Firefly Stream Park',
        description:
          '西神楽公園を訪れ、地元が守り育てるホタルの里のせせらぎに癒やされたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a clear park brook with soft glowing summer fireflies and green reeds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '駅前の老舗・喰処 つかもとの味',
      subtext: '国道沿いの温かな食堂で昔ながらのラーメンや定食を楽しんだ',
      badge: {
        code: 'nishikagura_tsukamoto',
        name_ja: '駅前食堂の一杯',
        subtitle_en: 'Tsukamoto Country Diner',
        description:
          '喰処 つかもと（つかもと食堂）で昔ながらの温かい料理を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic soy-sauce ramen bowl and crispy pork cutlet tray on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '約260mの参道が続く歴史ある神楽神社',
      subtext: '静寂に包まれた森の参道を進み厳かな社殿で旅を結んだ',
      badge: {
        code: 'nishikagura_kagura_shrine',
        name_ja: '神楽の杜の参道',
        subtitle_en: 'Kagura Shrine Woods',
        description:
          '神楽神社に参拝し、約260m続く静寂の参道で西神楽の旅を結んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tall wooden Shinto torii gate framed by a 260-meter avenue of northern cedars on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishikagura_complete',
    name_ja: '西神楽・ホタルと神社の旅人',
    subtitle_en: 'Walker of Nishi-Kagura',
    description:
      'JR西神楽駅からふくろうcafeウラル、西神楽公園、つかもと食堂、神楽神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a gentle owl, glowing stream fireflies, and a forest Shinto shrine path on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西神楽駅',
      lat: 43.683387,
      lng: 142.39203,
      address: '北海道旭川市西神楽南1条1',
      description:
        '旭川市中心部と美瑛町のほぼ中間に位置するJR富良野線の駅（終日利用可）。西神楽市街地の玄関口として、周辺の自然やグルメ散策の起点となっている。',
      clue:
        '旭川市中心部と美瑛町のほぼ中間に位置し、西神楽市街地の玄関口として親しまれているJR富良野線の「JR西神楽駅」から楽しい町歩きを始めよう（終日利用可）。美瑛川流域のおおらかな空気を感じながら西の方向へと外へ踏み出したら、まずは旭川唯一のフクロウカフェとして注目される癒やしの空間「ふくろうcafeウラル」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '駅から西方向へ徒歩約4〜5分',
      f7_fragment: '旭川市中心部と美瑛町の中間に位置し、西神楽市街地の玄関口となる駅。',
      f7_full: '「JR西神楽駅」を後にし、ホタルの里と長い参道を巡る西神楽の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'ふくろうcafeウラル',
      lat: 43.683862,
      lng: 142.389107,
      address: '北海道旭川市西神楽北1条3-231-31',
      description:
        '旭川唯一のフクロウカフェ（平日12:00〜18:00・土日祝10:00〜18:00、月曜休・不定休あり）。穏やかなフクロウたちと触れ合いながらドリンクを楽しめる。',
      clue:
        '旭川唯一の「ふくろうcafeウラル」で穏やかなフクロウと癒やしのカフェ時間をゆったり楽しく過ごそう（月曜休）。一息ついたら東側の「西神楽公園」へ向かおう。',
      hook: '東方向へ徒歩約7〜8分',
      f7_fragment: '穏やかなフクロウたちと触れ合いながらドリンクを楽しめる旭川唯一のカフェ。',
      f7_full: '「ふくろうcafeウラル」の愛らしいフクロウたちに癒やされ、心がほっと和んだ。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: '西神楽公園',
      lat: 43.684156,
      lng: 142.39499,
      address: '北海道旭川市西神楽南1条1',
      description:
        '地元中学校の活動を機に始まった「ホタルの里」として知られる3.69haの自然公園（終日開放・キャンプ場夏季のみ）。せせらぎ水路やベンチが整備されている。',
      clue:
        '地元の中学校の活動をきっかけに始まった「ホタルの里」として親しまれている自然豊かな「西神楽公園」のベンチで爽やかに心地よく休憩しよう（終日開放）。綺麗に整備されたせせらぎ水路や木立の間を吹き抜ける涼やかな風を感じながら一息つけば、地域の自然保護への温かい思いが胸いっぱいに伝わってくる。十分にリフレッシュできたら、南西の国道237号沿いにある老舗「喰処 つかもと」へ向かおう。',
      hook: '南西方向へ徒歩約5分',
      f7_fragment: '地元の中学校の活動に始まる「ホタルの里」として知られる3.69haの自然公園。',
      f7_full: '「西神楽公園」のせせらぎ水路と緑の中で寛ぎ、ホタルが棲む自然の豊かさを感じた。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: '喰処 つかもと（つかもと食堂）',
      lat: 43.681997,
      lng: 142.393086,
      address: '北海道旭川市西神楽南1条2-662-1',
      description:
        '西神楽駅近くの国道237号沿いに佇む老舗食堂（11:00〜20:00頃・早仕舞いあり、日・祝日休）。ラーメン、定食、丼もの、カレーなど昔ながらの味がリーズナブル。',
      clue:
        '西神楽の国道237号線沿いに佇み、長年にわたり地元の人々に愛され続けている老舗食堂「喰処 つかもと（つかもと食堂）」で温かい食事をゆっくり味わおう（日・祝日休）。昔ながらの優しいラーメンや食べ応えある丁寧な定食、ボリューム満点の丼ものやカレーをいただけば、旅のお腹も心も大満足に満たされていく。しっかりと活力を養ったら、南東に鎮座する「神楽神社」へと元気に歩いて向かおう。',
      hook: '南東方向へ徒歩約9〜10分',
      f7_fragment: '国道237号沿いでラーメンや定食、丼ものが親しまれる西神楽の老舗食堂。',
      f7_full: '「喰処 つかもと（つかもと食堂）」で昔ながらの温かい食事を味わい、元気を得た。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '神楽神社',
      lat: 43.679848,
      lng: 142.399357,
      address: '北海道旭川市西神楽2線15-273-1',
      description:
        '明治期創祀の西神楽の鎮守（終日参拝可・無休）。約260m続くまっすぐな森の参道は深い静寂に包まれ、散策の結びの参拝にふさわしい厳かな空間となっている。',
      clue:
        '旅の締めくくりは、明治期からこの地を見守り続けてきた西神楽の鎮守「神楽神社」へ丁寧に心を込めてゆっくりと参拝しよう（終日参拝可）。社殿へとまっすぐに伸びる約二百六十メートルもの森の参道を歩けば、頭上を覆う木々のざわめきと澄み切った北国の空気が旅の疲れを優しく洗い流してくれる。厳かな境内で旅の無事を心から感謝して深く手を合わせ、西神楽の素敵な散歩を晴れやかに明るく結ぼう。',
      hook: '',
      f7_fragment: '約260m続くまっすぐな森の参道が深い静寂をたたえる、明治期創祀の鎮守。',
      f7_full: '「神楽神社」の長い森の参道を進んで手を合わせ、西神楽の散歩を締めくくった。',
    },
  ],
};
