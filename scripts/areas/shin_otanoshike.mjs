export default {
  slug: 'shin_otanoshike',
  station_order: 957,
  station: '新大楽毛',
  line: 'JR根室本線',
  area_name: '新大楽毛・星が浦',
  prefecture: '北海道',
  municipality: '釧路市',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['根室本線', 'デシベル', 'ROUTE38', '星が浦', 'コープさっぽろ'],
  style_genre: 'ink_and_watercolor',
  title: 'レトロ喫茶から星が浦大通へ続く街歩き',
  description:
    'JR新大楽毛駅から大楽毛1号公園、レトロな老舗喫茶デシベル、星が浦大通のハンバーガー店ROUTE 38やコープさっぽろへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Shin-Otanoshike Station in Kushiro, a leafy neighborhood park, a cozy retro coffee shop with warm glowing lamps, and a broad avenue leading toward Hoshigaura, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び新大楽毛を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅至近で憩える大楽毛1号公園',
      subtext: '緑の広がる近隣公園のベンチで澄んだ空気を味わった',
      badge: {
        code: 'shin_otanoshike_park',
        name_ja: '緑の玄関広場',
        subtitle_en: 'Station Meadow',
        description:
          '大楽毛1号公園のベンチで一息つき、道東の澄んだ風を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sunlit park bench under northern birch trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'レトロな老舗喫茶デシベルの空間',
      subtext: '個性的な照明が彩る店内で香り高い珈琲と名物を味わった',
      badge: {
        code: 'shin_otanoshike_decibel',
        name_ja: '灯火のレトロ喫茶',
        subtitle_en: 'Vintage Cafe Glow',
        description:
          'コーヒーショップ デシベルでレトロな照明に包まれ珈琲と名物を堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an amber retro pendant lamp illuminating a porcelain coffee cup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '星が浦大通のハンバーガー ROUTE 38',
      subtext: 'アメリカンテイストの空間でこだわりのグルメバーガーを頬張った',
      badge: {
        code: 'shin_otanoshike_route38',
        name_ja: '国道38号の味覚',
        subtitle_en: 'Route 38 Burger',
        description:
          'ROUTE 38でこだわりたっぷりのグルメバーガーを味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tall artisan gourmet burger beside a stylized highway 38 marker on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '地元に愛されるコープさっぽろ 星が浦店',
      subtext: '北海道ならではの食材や店内ベーカリーのパンを選んだ',
      badge: {
        code: 'shin_otanoshike_coop',
        name_ja: '星が浦の恵み',
        subtitle_en: 'Hoshigaura Market',
        description:
          'コープさっぽろ 星が浦店で焼きたてパンや道産食材を選んだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of fresh crusty bakery loaves in a woven market basket on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shin_otanoshike_complete',
    name_ja: '新大楽毛・大通を歩む旅人',
    subtitle_en: 'Walker of Shin-Otanoshike Avenue',
    description:
      'JR新大楽毛駅からデシベル、ROUTE 38、コープさっぽろ 星が浦店まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a retro cafe lamp, highway signpost, and bakery wheat on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新大楽毛駅',
      lat: 43.009673,
      lng: 144.294264,
      address: '北海道釧路市大楽毛南1',
      description:
        '昭和63年（1988年）11月3日に開業したJR根室本線の無人駅（終日利用可）。釧路西部の工業・商業エリア「星が浦」の西の玄関口となっている。',
      clue:
        '昭和六十三年十一月に開業し、釧路西部の工業・商業エリアとして発展してきた星が浦地域の西の玄関口となっている「JR新大楽毛駅」から楽しい町歩きと散策を始めよう（終日利用可）。大きく広がる釧路の澄んだ青い空の下、静かな駅のホームから北東方向へと外へ踏み出したら、まずは駅至近の緑地「大楽毛1号公園」を目指して、爽やかな風を感じながらのんびり楽しく元気に笑顔で力強く歩き出そう。',
      hook: '駅から北東方向へ徒歩約2分',
      f7_fragment: '昭和六十三年開業、星が浦エリアの西の玄関口となるJR根室本線の無人駅。',
      f7_full: '「JR新大楽毛駅」を後にし、レトロ喫茶から星が浦大通へと続く街歩きを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '大楽毛1号公園',
      lat: 43.009984,
      lng: 144.295032,
      address: '北海道釧路市大楽毛1-4',
      description:
        '駅至近に広がる約1.3ヘクタールの近隣公園（終日開放）。野球場や遊具、トイレ・ベンチが整備されており、散策の始まりに心地よく一息つくことができる。',
      clue:
        '駅至近に広がる「大楽毛1号公園」のベンチで深呼吸して道東の清々しい空気をじっくり味わおう（終日開放）。次は北東の「コーヒーショップ デシベル」へ向かおう。',
      hook: '北東方向へ徒歩約3分',
      f7_fragment: '野球場やベンチが整備された、JR新大楽毛駅至近の広々とした近隣公園。',
      f7_full: '「大楽毛1号公園」の爽やかな緑の中で深呼吸し、穏やかな散歩の始まりを楽しんだ。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'コーヒーショップ デシベル（DECIBEL）',
      lat: 43.010974,
      lng: 144.295713,
      address: '北海道釧路市大楽毛1-9-22',
      description:
        '個性的な照明やストーブが温かく彩るレトロな老舗喫茶店（10:00〜21:30、水曜・第3木曜休）。香り高い珈琲や名物のピラフグラタン等でくつろげる。',
      clue:
        '個性的な照明やストーブがノスタルジックな空気を醸し出すレトロな老舗喫茶店「コーヒーショップ デシベル（DECIBEL）」でゆったりとした休憩時間を過ごそう（水曜・第3木曜休）。丁寧に淹れられた香り高い珈琲や、熱々で人気のピラフグラタンなどを囲みながら寛ぐ時間は何とも贅沢なひとときだ。心まで温まる珈琲タイムを終えたら、星が浦大通を東へ進み「ROUTE 38」へ向かおう。',
      hook: '星が浦大通を東方向へ徒歩約20分',
      f7_fragment: '個性的な照明とストーブが彩る、名物ピラフグラタンも人気のレトロ喫茶。',
      f7_full: '「コーヒーショップ デシベル（DECIBEL）」のレトロな空間で珈琲を味わい、心が和んだ。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'ROUTE 38（ルートサンジュウハチ）',
      lat: 43.013583,
      lng: 144.310051,
      address: '北海道釧路市星が浦大通4-4-17',
      description:
        '国道38号沿いの星が浦エリアにあるアメリカンテイストのハンバーガーショップ・カフェ（11:00〜18:00・水〜15:00、火曜休）。こだわりのグルメバーガーが味わえる。',
      clue:
        '国道38号線沿いの星が浦エリアに佇むアメリカンテイストのお洒落なハンバーガーショップ「ROUTE 38（ルートサンジュウハチ）」で自慢の一品を味わおう（火曜休）。ジューシーなパティとこだわりバンズが織りなす本格的なグルメバーガーをほおばれば、ここまでの歩みの疲れも吹き飛ぶ美味しさだ。お腹が幸せにしっかり満たされたら、星が浦大通をさらに東へ進み「コープさっぽろ 星が浦店」へ向かおう。',
      hook: '星が浦大通を東方向へ徒歩約6分',
      f7_fragment: '国道38号沿いに佇み、こだわりのグルメバーガーが味わえるお洒落なカフェ。',
      f7_full: '「ROUTE 38（ルートサンジュウハチ）」で本格グルメバーガーを頬張り、笑顔になった。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'コープさっぽろ 星が浦店',
      lat: 43.014919,
      lng: 144.31658,
      address: '北海道釧路市星が浦大通3-5-13',
      description:
        '星が浦エリアの暮らしを支える地域スーパー（9:00〜20:00、無休・元日等除く）。北海道ならではの食材や、店内ベーカリー「レフボン」の焼きたてパンが揃う。',
      clue:
        '旅の締めくくりは、星が浦エリアの暮らしを温かく支える地域密着のスーパー「コープさっぽろ 星が浦店」へ楽しく立ち寄ってみよう（9:00〜20:00）。広い店内には北海道ならではの地元食材やお惣菜がずらりと並び、店内ベーカリー「レフボン 星が浦店」から届く焼きたてパンの香ばしい香りも旅心をくすぐってくれる。素敵な道産グルメのお土産を手に入れて、新大楽毛の街歩きを笑顔で結ぼう。',
      hook: '',
      f7_fragment: '道産食材や店内ベーカリー「レフボン」の焼きたてパンが揃う星が浦の拠点。',
      f7_full: '「コープさっぽろ 星が浦店」で道産のお土産を選び、新大楽毛の散歩を締めくくった。',
    },
  ],
};
