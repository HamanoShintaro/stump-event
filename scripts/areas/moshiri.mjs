export default {
  slug: 'moshiri',
  station_order: 932,
  station: '茂尻',
  line: 'JR根室本線',
  area_name: '茂尻・百戸',
  prefecture: '北海道',
  municipality: '赤平市',
  category: '歴史・グルメ',
  budget_tier: 1,
  tags: ['根室本線', '炭鉱の駅', '老舗食堂', 'あかびら発祥', 'ジンギスカン'],
  style_genre: 'ink_and_watercolor',
  title: '炭山の面影と開拓の碑を巡る茂尻散歩',
  description:
    '河岸段丘の高台に立つJR茂尻駅から老舗の柳屋食堂、茂尻出雲神社、あかびら発祥の地記念碑、老舗精肉店を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Moshiri in Akabira, Hokkaido, featuring a small elevated hillside train platform with stone steps, a classic wooden shrine flanked by stone komainu, and a tranquil park pond with pioneer monument, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び茂尻を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅前の老舗食堂で味わった温かな一皿',
      subtext: '炭鉱の面影が残る駅前の食堂で、地元に愛される味を堪能した',
      badge: {
        code: 'moshiri_yanagiya',
        name_ja: '茂尻食堂の常連風',
        subtitle_en: 'Moshiri Diner Patron',
        description:
          'JR茂尻駅近くの柳屋食堂で、赤平名物カツラーメンや家庭的な定食を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm ceramic noodle bowl and wooden chopsticks on a diner counter on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '参道の先に佇む出雲神社の静かな空気',
      subtext: '長い参道と狛犬が迎える茂尻出雲神社で、静かな祈りを捧げた',
      badge: {
        code: 'moshiri_izumo',
        name_ja: '出雲の社の参拝者',
        subtitle_en: 'Visitor of Izumo Shrine',
        description:
          '空知川左岸の出雲公園隣に鎮座する茂尻出雲神社で、穏やかな祈りの時間を過ごしたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of weathered stone guardian komainu and mossy shrine steps on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '明治の開拓を伝えるあかびら発祥の地の碑',
      subtext: '翠光苑に立つ記念碑の前で、明治23年からの歩みに触れた',
      badge: {
        code: 'moshiri_suikoen',
        name_ja: '赤平発祥の地を巡る者',
        subtitle_en: 'Finder of Akabira Origin',
        description:
          '翠光苑の「あかびら発祥の地記念碑」を訪れ、明治23年開墾入植の歴史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a carved stone pioneer monument beside calm reflective park waters on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '昭和27年創業の老舗肉店に香る伝統のたれ',
      subtext: '地域に受け継がれるジンギスカンの文化に出会った',
      badge: {
        code: 'moshiri_takimoto',
        name_ja: '茂尻精肉の名店通',
        subtitle_en: 'Moshiri Butcher Connoisseur',
        description:
          '昭和27年創業の焼肉の滝本（滝本商店）で、伝統の味付けジンギスカンやホルモンを選んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a traditional glass spice jar and butcher block on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'moshiri_complete',
    name_ja: '茂尻・炭山と発祥の地の散歩者',
    subtitle_en: 'Walker of Moshiri Heritage',
    description:
      'JR茂尻駅から柳屋食堂、茂尻出雲神社、翠光苑（あかびら発祥の地記念碑）、焼肉の滝本まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an elevated station staircase, a pioneer stone stele, and riverside pines on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR茂尻駅',
      lat: 43.53731,
      lng: 142.082215,
      address: '北海道赤平市茂尻元町南2-1',
      description:
        '大正7年（1918年）12月28日に茂尻炭鉱の石炭積出用貨物駅として開業、大正15年に旅客営業を開始（終日利用可）。空知川の河岸段丘上に立つ無人駅。',
      clue:
        '大正七年十二月に茂尻炭鉱の石炭積み出し駅として誕生し、空知川の河岸段丘上にホームを構える「JR茂尻駅」から楽しい町歩きと散策を始めよう（終日利用可）。趣ある階段をゆっくり下って茂尻の穏やかな街並みへと降り立ったら、まずは駅から北へ歩いて約三分の場所にある地元で長年愛される大衆食堂「柳屋食堂」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に外へと歩き出そう。',
      hook: '駅を出て北方向へ徒歩約3分',
      f7_fragment: '大正七年に石炭積出駅として開業した河岸段丘上のレトロな無人駅。',
      f7_full: '「JR茂尻駅」の高台から階段を下り、炭山と開拓の歴史が息づく茂尻の町へ出た。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '柳屋食堂',
      lat: 43.539129,
      lng: 142.083045,
      address: '北海道赤平市茂尻元町北1-4',
      description:
        '茂尻駅近くで長年親しまれる大衆食堂（月〜金11:00〜18:00・土曜〜15:00、日曜休）。赤平名物カツラーメンや各種ラーメン、家庭的な定食が味わえる。',
      clue:
        '茂尻駅前で長年親しまれる「柳屋食堂」で温かなランチやカツラーメンを味わおう（月〜金11:00〜18:00等、日曜休）。食後は北西の「茂尻出雲神社」へ向かおう。',
      hook: '北西方向へ徒歩約4分',
      f7_fragment: '茂尻駅近くで赤平名物カツラーメンや定食を届ける老舗の大衆食堂。',
      f7_full: '「柳屋食堂」で昔ながらの温かい料理を味わい、茂尻の人情と活力を感じた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '茂尻出雲神社',
      lat: 43.540084,
      lng: 142.082515,
      address: '北海道赤平市茂尻元町北1-21',
      description:
        '空知川左岸の出雲公園に隣接して鎮座する神社（参拝自由）。長い参道と複数の狛犬が迎える、地域に根ざした歴史あるお社。',
      clue:
        '空知川のほど近く、緑豊かな出雲公園に隣接して静かに鎮座する「茂尻出雲神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。すっと真っ直ぐ伸びる長い参道と表情豊かな複数の狛犬たちに迎えられて拝殿の前で静かに手を合わせれば、炭鉱の時代からこの町を見守り続けてきた神社の静謐な空気が胸にじんわり沁みていく。参拝を終えたら、北の「翠光苑（あかびら発祥の地記念碑）」へ向かおう。',
      hook: '空知川沿いから北方向へ徒歩約10分',
      f7_fragment: '空知川左岸の出雲公園隣に鎮座し、長い参道と狛犬が迎える古社。',
      f7_full: '「茂尻出雲神社」の長い参道と静かな社殿に参拝し、穏やかな祈りの時を過ごした。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '翠光苑（あかびら発祥の地記念碑）',
      lat: 43.545475,
      lng: 142.080266,
      address: '北海道赤平市百戸町西1-6',
      description:
        '大きな池や水辺、広場を備えた公園（散策自由）。敷地内に立つ「あかびら発祥の地記念碑」は、明治23年（1890年）の開墾入植に始まる赤平の歴史を伝えている。',
      clue:
        '水辺の風景が美しい百戸エリアの公園「翠光苑（あかびら発祥の地記念碑）」をゆっくり楽しく元気に明るく訪ねよう（散策自由）。大きな池のほとりに広がる緑豊かな美しい敷地内には「あかびら発祥の地記念碑」が堂々と立っており、明治二十三年の開墾入植から始まった赤平の輝かしい原点に静かに触れることができる。開拓の歩みを胸にしっかり刻んだら、南の老舗「焼肉の滝本（滝本商店）」へ向かおう。',
      hook: '百戸町から南方向へ徒歩約11分',
      f7_fragment: '美しい池とともに明治二十三年入植を伝える「あかびら発祥の地記念碑」がある公園。',
      f7_full: '「翠光苑（あかびら発祥の地記念碑）」で水辺を歩き、赤平開拓の原点に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '焼肉の滝本（滝本商店）',
      lat: 43.538103,
      lng: 142.084114,
      address: '北海道赤平市茂尻中央町南1-7',
      description:
        '昭和27年（1952年）創業の老舗精肉店・焼肉店（精肉10:00〜22:00・焼肉17:00〜22:00、火曜休）。名物の味付けジンギスカンやホルモンが地元で長く愛されている。',
      clue:
        '旅の締めくくりは、昭和二十七年創業の老舗精肉店「焼肉の滝本（滝本商店）」へ楽しく元気に立ち寄ろう（精肉10:00〜22:00、火曜休）。日中は精肉店として伝統の味付けジンギスカンやホルモンを気軽にお土産に求めることができ、夕方からは焼肉店としても賑わう地域の名店だ。茂尻の暮らしに息づく美味しい文化を手に取って、炭山と開拓の記憶を巡る旅を晴れやかに心地よく笑顔で結ぼう。',
      hook: '',
      f7_fragment: '昭和二十七年創業、名物の味付けジンギスカンやホルモンが人気の老舗精肉店。',
      f7_full: '「焼肉の滝本（滝本商店）」で伝統の味に出会い、茂尻の旅を心地よく締めくくった。',
    },
  ],
};
