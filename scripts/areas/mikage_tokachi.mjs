export default {
  slug: 'mikage_tokachi',
  station_order: 938,
  station: '御影',
  line: 'JR根室本線',
  area_name: '十勝御影・御影本通',
  prefecture: '北海道',
  municipality: '清水町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '御影石', '古民家カフェ', '御影神社', 'とんかつ'],
  style_genre: 'ink_and_watercolor',
  title: '石の里の神社と古民家を巡る御影散歩',
  description:
    '御影石の産出にちなむJR御影駅から旧佐念頃神社の御影神社、昭和古民家カフェ、御影公園、名物とんかつのみしなを巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Mikage in Tokachi-Shimizu, Hokkaido, featuring a small northern train station, granite stone shrine lanterns, a nostalgic early-Showa timber house cafe, and windbreak pine rows bordering Tokachi farmlands, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び十勝・御影を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '佐念頃神社から受け継がれる御影神社の静寂',
      subtext: '明治41年創祀の歴史ある境内で、石の里の歩みに手を合わせた',
      badge: {
        code: 'mikage_tokachi_shrine',
        name_ja: '佐念頃の社の参拝者',
        subtitle_en: 'Keeper of Sanenkoro',
        description:
          '明治41年創祀、旧名・佐念頃神社から続く御影神社を参拝し、土地の記憶に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a carved granite torii gate and weathered stone lantern on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '昭和初期の建物で寛ぐ古民家カフェの時間',
      subtext: 'ふるカフェ カマクラヤで温かいランチとスイーツに癒やされた',
      badge: {
        code: 'mikage_tokachi_kamakuraya',
        name_ja: '昭和古民家の旅人',
        subtitle_en: 'Guest of Kamakuraya',
        description:
          '昭和初期の建物をリノベーションした「ふるカフェ カマクラヤ」で寛ぎの時間を過ごしたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm wooden vintage cafe window with a steaming ceramic teacup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '十勝の畑作と防風林が望める御影公園の風',
      subtext: '街の東側に広がる公園で、北海道らしい穏やかな空を感じた',
      badge: {
        code: 'mikage_tokachi_park',
        name_ja: '御影の広場の散策者',
        subtitle_en: 'Walker of Mikage Park',
        description:
          '防風林と畑作地帯の気配が心地よい御影公園（御影公園多目的広場）を歩いたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a row of Tokachi windbreak larch trees beside an open park green on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '国道沿いの名店・とんかつのみしなの満足の一皿',
      subtext: '地元と旅人に長く愛される老舗の味わいに心まで満たされた',
      badge: {
        code: 'mikage_tokachi_mishina',
        name_ja: '御影の老舗の食通',
        subtitle_en: 'Mikage Tonkatsu Lover',
        description:
          '国道38号沿いの名店・とんかつのみしなで、十勝の美味しいとんかつを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden crispy tonkatsu cuts arranged on a white ceramic platter with shredded cabbage on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'mikage_tokachi_complete',
    name_ja: '十勝御影・石の里と古民家の旅人',
    subtitle_en: 'Traveler of Tokachi Mikage',
    description:
      'JR御影駅から御影神社、ふるカフェ カマクラヤ、御影公園、とんかつのみしなまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a granite shrine lantern, vintage wooden cafe eaves, and golden tonkatsu on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR御影駅',
      lat: 42.942993,
      lng: 142.93628,
      address: '北海道上川郡清水町御影本通1-1',
      description:
        '明治40年（1907年）9月8日に「佐念頃（さねんころ）駅」として開業（終日利用可）。良質な花崗岩（御影石）の産出にちなみ大正11年（1922年）に現駅名へ改称された。',
      clue:
        '明治四十年九月に「佐念頃駅」として開業し、良質な御影石の産出にちなみ大正十一年に改称された十勝の玄関口「JR御影駅」から楽しい街歩きと散策を始めよう（終日利用可）。のどかな田園の空気が漂う静かな無人駅をゆっくり後にして外へ踏み出したら、まずは駅から北西へ歩いて約四分の場所に鎮座する「御影神社」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に楽しく歩き出そう。',
      hook: '駅を出て北〜北北西方向へ徒歩約4分',
      f7_fragment: '旧名・佐念頃駅として明治四十年開業、御影石の産出に名を由来する駅。',
      f7_full: '「JR御影駅」の静かなホームを後にし、石の里と古民家を巡る御影の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '御影神社',
      lat: 42.945646,
      lng: 142.934941,
      address: '北海道上川郡清水町字御影西2条2-11',
      description:
        '明治41年（1908年）に小祠を建立して「佐念頃神社」として創祀され、のちに改称された地域の鎮守（参拝自由）。天照大神を祭神とし、静かな杜に抱かれている。',
      clue:
        '明治四十一年創祀・旧名「佐念頃神社」から続く「御影神社」へ丁寧に参拝しよう（参拝自由）。参拝後は駅方面を通り東の「ふるカフェ カマクラヤ」へ向かおう。',
      hook: '駅方面を通り東方向へ徒歩約8分',
      f7_fragment: '明治四十一年創祀、旧名「佐念頃神社」の名を伝える御影の鎮守。',
      f7_full: '「御影神社」の静謐な境内で手を合わせ、開拓と石の里の歴史に思いを馳せた。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'ふるカフェ カマクラヤ',
      lat: 42.943149,
      lng: 142.938724,
      address: '北海道上川郡清水町御影東1条2-17',
      description:
        '昭和初期の建築物をリノベーションした温もりあふれる古民家カフェ（11:00〜15:00頃、月・日曜休・不定休あり）。優しい味わいのランチや手作りスイーツを楽しめる。',
      clue:
        '昭和初期の建物を丁寧にリノベーションした趣深い古民家カフェ「ふるカフェ カマクラヤ」でほっと一息つく心地よい素敵な休憩時間をゆっくり過ごそう（11:00〜15:00頃、日月休）。木の香りと懐かしい調度品に囲まれながら手作りスイーツや温かい飲み物を味わえば、旅の疲れもすっと和らいでいく。心まで穏やかに満たされたら、さらに東へ歩いて「御影公園（御影公園多目的広場）」へ向かおう。',
      hook: '東1条を東方向へ徒歩約4分',
      f7_fragment: '昭和初期の建物を活かした懐かしい空気あふれる御影の古民家カフェ。',
      f7_full: '「ふるカフェ カマクラヤ」の昭和薫る空間で寛ぎ、穏やかな午後のひとときを過ごした。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '御影公園（御影公園多目的広場）',
      lat: 42.944809,
      lng: 142.940935,
      address: '北海道上川郡清水町御影東1条4-1',
      description:
        '御影市街地の東側に広がる町民の憩いの場（終日開放）。周囲の防風林や広大な十勝の畑作地帯の空気を感じられ、冬期は地域のイルミネーション会場としても親しまれる。',
      clue:
        '御影市街地の東側にゆったりと広がる地域の温かい憩いの場「御影公園（御影公園多目的広場）」をゆっくり楽しく歩いて元気に散策してみよう（終日開放）。十勝らしい広大な畑作地帯と防風林の気配を身近に感じながら大きな青空の下で大きく深く深呼吸すれば、心がすっきりと晴れ渡っていく。爽やかな北の風をたっぷり味わったら、東側の国道38号線沿いにある名店「とんかつのみしな」へ向かおう。',
      hook: '公園から東の国道38号線沿いへ徒歩約13分',
      f7_fragment: '御影市街東側に広がり、防風林と十勝の空を身近に感じる憩いの公園。',
      f7_full: '「御影公園（御影公園多目的広場）」の開放的な空の下で、十勝の爽やかな風を感じた。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'とんかつのみしな',
      lat: 42.943747,
      lng: 142.948545,
      address: '北海道上川郡清水町御影字御影南1線57-43',
      description:
        '国道38号線沿いに構える十勝・御影の名物とんかつ店（11:00〜21:00・L.O.20:00頃、基本無休・臨時休業あり）。地元の人々や旅人に長年愛される老舗食堂。',
      clue:
        '旅の締めくくりは、国道38号線沿いで地元の方々や多くの旅人に長く愛され続ける老舗の名店「とんかつのみしな」で自慢の一皿をゆっくり美味しく味わおう（11:00〜21:00頃）。サクッと軽やかな衣に包まれたジューシーで柔らかなお肉は、ひと口ごとに十勝の豊かさが広がる老舗ならではの美味しさだ。お腹も心も大満足に満たされて、石の里・御影の楽しい散策を晴れやかに明るく笑顔で結ぼう。',
      hook: '',
      f7_fragment: '国道38号沿いで地元の人々や旅人に長く愛される十勝・御影の名物とんかつ店。',
      f7_full: '「とんかつのみしな」でサクサクのとんかつを堪能し、十勝御影の旅を締めくくった。',
    },
  ],
};
