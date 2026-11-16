export default {
  slug: 'nishiobihiro',
  station_order: 941,
  station: '西帯広',
  line: 'JR根室本線',
  area_name: '西帯広・西22条',
  prefecture: '北海道',
  municipality: '帯広市',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['根室本線', 'ジンギスカン', '六花亭', 'インデアンカレー', '西帯広公園'],
  style_genre: 'ink_and_watercolor',
  title: '十勝名物と緑の園をめぐる西帯広の休日',
  description:
    'JR西帯広駅から名物ホルジンの有楽町、緑の三角屋根の六花亭ガーデン、インデアンカレー、修景水路の西帯広公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Nishi-Obihiro in Hokkaido, featuring a charming green triangular-roofed garden cafe nestled under a grand elm tree, steaming spicy curry, and a tranquil park stream bordered by summer trees, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び西帯広を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅近くの暖簾で味わう名物ホルモンとジンギスカン',
      subtext: '鉄板を囲み、香ばしいホルモンと締めのうどんを堪能した',
      badge: {
        code: 'nishiobihiro_yurakucho',
        name_ja: '西帯広の煙',
        subtitle_en: 'Iron Plate Spirit',
        description:
          '駅至近のジンギスカン 有楽町で、名物のホルモンとジンギスカン・締めうどんを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sizzling iron grill pan with savory herbs and noodles on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '緑の三角屋根の下で過ごす喫茶室のひととき',
      subtext: 'ニレの木に寄り添う六花亭ガーデンで帯広の甘味を楽しんだ',
      badge: {
        code: 'nishiobihiro_rokkatei',
        name_ja: 'ニレの木陰',
        subtitle_en: 'Garden Teatime',
        description:
          '六花亭ガーデン（西帯広店）の落ち着いた喫茶室で、帯広ならではの甘味と寛ぎに触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a green-roofed gable cottage beneath a spreading elm tree beside wildflower blossoms on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '十勝の日常に根づく濃厚なインデアンカレーの一皿',
      subtext: '地元の人々とともに愛されるご当地カレーのコクを味わった',
      badge: {
        code: 'nishiobihiro_indian',
        name_ja: '十勝の薫香',
        subtitle_en: 'Tokachi Spice',
        description:
          'カレーショップ インデアン 西21条店で、十勝のソウルフードを味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a gleaming silver curry sauce boat and rich spiced curry plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '修景水路のせせらぎと広い芝生を眺めた時間',
      subtext: '約3.7ヘクタールの西帯広公園で爽やかな風に癒やされた',
      badge: {
        code: 'nishiobihiro_park',
        name_ja: '水路のほとり',
        subtitle_en: 'Park Stream',
        description:
          '修景水路や芝生広場が整備された西帯広公園を歩き、穏やかな帯広の空気を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a clear curving park stream bordered by lush green grass on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishiobihiro_complete',
    name_ja: '西帯広・十勝名物と庭園の旅人',
    subtitle_en: 'Traveler of Nishi-Obihiro',
    description:
      'JR西帯広駅からジンギスカン有楽町、六花亭ガーデン、インデアン西21条店、西帯広公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a green garden gable roof, spiced curry plate, and clear park stream on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西帯広駅',
      lat: 42.924083,
      lng: 143.125437,
      address: '北海道帯広市西23条南1-1',
      description:
        '明治40年（1907年）9月8日に「伏古駅」として開業し、昭和29年（1954年）に現駅名へ改称されたJR根室本線の駅（終日利用可）。十勝のローカルグルメ巡りの玄関口。',
      clue:
        '明治四十年九月に「伏古駅」として開業し、昭和二十九年に現在の駅名へ改称された「JR西帯広駅」から楽しい街歩きと散策を始めよう（終日利用可）。十勝らしい広々とした空気に包まれた駅前をゆっくり後にして北口を出て西方向へと歩き出したら、すぐ目の前にある名店「ジンギスカン 有楽町」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく元気に楽しく笑顔で力強く外へ歩き出そう。',
      hook: '北口を出て西方向へ徒歩約2分',
      f7_fragment: '明治四十年「伏古駅」として開業、十勝グルメ巡りの起点となる駅。',
      f7_full: '「JR西帯広駅」を後にし、十勝名物と緑豊かな公園を巡る休日の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'ジンギスカン 有楽町',
      lat: 42.924309,
      lng: 143.124085,
      address: '北海道帯広市西23条南1-39',
      description:
        '地元で長年親しまれるジンギスカン・ホルモンの名店（水〜金11:00〜20:00・土日祝13:00〜20:00、月・火曜休）。鉄板で焼くホルモンと締めのうどん（「ホルジン」）が名物。',
      clue:
        '地元の老舗「ジンギスカン 有楽町」で名物ホルモンと締めのうどんをじっくり美味しく味わおう（月火休）。食後は南東の「六花亭ガーデン（西帯広店）」へ向かおう。',
      hook: '西22条方面へ南東へ徒歩約16〜20分',
      f7_fragment: '鉄板で焼く名物ホルモンと締めのうどんが地元で長年愛される老舗店。',
      f7_full: '「ジンギスカン 有楽町」で鉄板の香ばしさと伝統のホルジンを堪能し、活力を得た。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: '六花亭ガーデン（西帯広店）',
      lat: 42.91742,
      lng: 143.1367,
      address: '北海道帯広市西22条南2-21-9',
      description:
        '緑の三角屋根と大きなニレの木が目印の六花亭直営店（店舗9:00〜17:30等・喫茶9:00〜16:00・モーニング〜11:00、無休）。帯広市内の六花亭喫茶室で唯一モーニングサービスを実施している。',
      clue:
        '緑の三角屋根と大きなニレの木が優しく迎える「六花亭ガーデン（西帯広店）」で優雅な休憩時間をゆったり楽しく過ごそう（店舗9:00〜17:30等、無休）。お馴染みの銘菓が並ぶ明るい店内のほか、帯広市内の六花亭喫茶室で唯一モーニングも行う落ち着いた喫茶室でスイーツや珈琲をじっくり楽しめる。甘い幸せで心が満たされたら、東側の「カレーショップ インデアン 西21条店」へ向かおう。',
      hook: '西21条方面へ東へ徒歩約6分',
      f7_fragment: '緑の三角屋根とニレの木が目印、帯広市内で唯一モーニングも行う六花亭直営店。',
      f7_full: '「六花亭ガーデン（西帯広店）」のニレの木陰で寛ぎ、至福の甘味を楽しんだ。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'カレーショップ インデアン 西21条店',
      lat: 42.917661,
      lng: 143.141143,
      address: '北海道帯広市西21条南2-6-152',
      description:
        '十勝のソウルフードとして圧倒的な人気を誇るご当地カレー店（11:00〜21:00・L.O.20:45、水曜休）。数十種類のスパイスと旨みが溶け込んだ濃厚なルーが愛されている。',
      clue:
        '十勝のソウルフードとして住民に深く愛され続ける人気店「カレーショップ インデアン 西21条店」へ楽しく元気に笑顔で爽やかに立ち寄ろう（11:00〜21:00、水曜休）。鍋を持参して持ち帰る地元客の姿も見られるほど日常に根付いたこのお店では、数十種類のスパイスと旨みが溶け合う濃厚な一皿がたっぷりと堪能できる。豊かな薫香とコクを味わったら、南西の「西帯広公園」へと向かおう。',
      hook: '南西方向へ徒歩約9分',
      f7_fragment: '十勝のソウルフードとして地元の日常に深く根付くご当地カレーの名店。',
      f7_full: '「カレーショップ インデアン 西21条店」で濃厚な十勝の一皿に出会い、笑顔になった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '西帯広公園',
      lat: 42.913455,
      lng: 143.13718,
      address: '北海道帯広市西22条南3-4',
      description:
        '約3.7ヘクタールの敷地に修景水路や芝生広場、パークゴルフ場（18ホール）などが整備された近隣公園（終日開放）。十勝らしい広い空の下で心地よく散策できる。',
      clue:
        '旅の締めくくりは、約三・七ヘクタールの広々とした敷地を誇る「西帯広公園」で爽やかな自然の風に吹かれながら楽しく元気に明るく散策しよう（終日開放）。涼やかな修景水路のせせらぎと手入れの行き届いた芝生広場、パークゴルフ場などが広がる美しい園内をゆっくり歩けば、食の感動も心地よく落ち着いていく。十勝名物と豊かな緑を満喫した西帯広の休日を、晴れやかな笑顔で心地よく締めくくろう。',
      hook: '',
      f7_fragment: '約3.7haの敷地に修景水路や芝生広場、パークゴルフ場が整う近隣公園。',
      f7_full: '「西帯広公園」の修景水路と芝生広場を歩き、西帯広の休日を爽やかに終えた。',
    },
  ],
};
