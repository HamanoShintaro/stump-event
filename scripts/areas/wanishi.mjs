export default {
  slug: 'wanishi',
  station_order: 900,
  station: '輪西',
  line: 'JR室蘭支線',
  area_name: '輪西・鉄の街と潮見の丘',
  prefecture: '北海道',
  municipality: '室蘭市',
  category: '製鉄の街とカレー麺',
  budget_tier: 2,
  tags: ['北海道', '室蘭市', '輪西駅', '室蘭カレーラーメン', '商店街'],
  style_genre: 'ink_and_watercolor',
  title: '輪西・鉄の街の商店街と潮見の丘めぐり',
  description:
    '昭和三年開業の木造駅舎が残る「JR輪西駅」から、室蘭カレーラーメンの名店「らーめん ぎょうざ 蘭たん亭」、商店街の核「ぷらっと・てついち」、製鉄所の守護神「輪西神社」、高台の「潮見公園」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Wanishi Muroran steel town from nostalgic wooden railway station and steaming curry ramen shop to lively covered shopping arcade, iron-town shrine torii and hilltop park overlooking Muroran harbor, full bleed, no text, no letters.',
  question: '製鉄所の発展とともに歩んだ輪西の駅から商店街やカレーラーメンの名店、高台の公園を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '昭和三年開業当時からの木造駅舎が今も残る「JR輪西駅」',
      subtext: '製鉄所の発展とともに誕生し、歴史を刻む温かな木造駅舎の佇まいが旅情を誘った。',
      badge: {
        code: 'wanishi_station',
        name_ja: '輪西・木造駅舎の旅人',
        subtitle_en: 'Wooden Station Visitor of Wanishi',
        description: '昭和三年開業の木造駅舎が残るJR輪西駅を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a nostalgic wooden Japanese railway station building beneath clear sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '昭和五十七年創業・室蘭カレーラーメンの人気店「らーめん ぎょうざ 蘭たん亭」',
      subtext: 'スパイシーでコクのある室蘭カレーラーメンと名物ぎょうざの美味しさに唸った。',
      badge: {
        code: 'wanishi_rantantei',
        name_ja: '輪西・カレー麺の味わ人',
        subtitle_en: 'Curry Ramen Lover of Rantantei',
        description: 'らーめん ぎょうざ 蘭たん亭で室蘭カレーラーメンを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of rich golden Muroran curry ramen and pan-fried gyoza, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '製鉄所の守護神の頓宮として建立された「輪西神社」',
      subtext: '大国主神や火・製鉄の神々を祀り、鉄の街の暮らしを静かに見守ってきた歴史に触れた。',
      badge: {
        code: 'wanishi_shrine',
        name_ja: '輪西・鉄の街の鎮守参拝',
        subtitle_en: 'Iron Town Shrine Visitor',
        description: '製鉄所の歴史とともに歩んできた輪西神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a dignified wooden shrine torii gate framed by lush green hillside trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '高台から室蘭港と製鉄所方面を見晴らす「潮見公園」',
      subtext: '鉄の街・輪西の広がりと港の風景を一望でき、爽やかな風を感じられた。',
      badge: {
        code: 'wanishi_shiomi',
        name_ja: '輪西・潮見の丘展望',
        subtitle_en: 'Shiomi Park Overlook Walker',
        description: '高台の潮見公園から室蘭港方面を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a hilltop park overlook gazing toward harbor cranes and sparkling bay waters, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'wanishi_master',
    name_ja: '輪西・鉄の街と潮見の丘巡り',
    subtitle_en: 'Wanishi Iron Town & Park Master',
    description: 'JR輪西駅から蘭たん亭、ぷらっと・てついち、輪西神社、潮見公園までを巡った証',
    image_prompt:
      'A circular emblem combining wooden railway station, steaming curry ramen bowl, shrine torii gate and hilltop harbor lookout, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR輪西駅',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1928年（昭和3年）9月10日開業、製鉄所の発展とともに誕生し開業当時からの木造駅舎が今も残る無人駅（終日開放・無料、1994年完全無人化）。昭和の面影を色濃く伝える。',
      address: '北海道室蘭市仲町12',
      lat: 42.334036,
      lng: 141.007261,
      clue:
        '昭和三年九月に製鉄所の発展とともに誕生し、なんと開業当時からの木造駅舎が今も大切に受け継がれている「JR輪西駅」から街歩きと散策を始めよう（終日利用可）。昭和の面影を色濃く残す温かな木の改札をくぐって駅前の通りへ出たら、まずは歩いて三〜五分ほど、地元で長く愛されている室蘭カレーラーメンの名店「らーめん ぎょうざ 蘭たん亭」を目指してさっそく元気に楽しく笑顔で歩き出そう。',
      surprise: '製鉄所とともに歩んだ昭和三年開業当時の木造駅舎が、今も現役で街の玄関口を守っていた。',
      hook: 'JR輪西駅を出たら、徒歩数分の「らーめん ぎょうざ 蘭たん亭」へ向かおう。',
      f7_fragment: '昭和三年開業、製鉄所の発展とともに歩んだ木造駅舎が残る駅。',
      f7_full: '「JR輪西駅」の木造駅舎に降り立ち、鉄の街・輪西の商店街を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Wanishi Station classic 1928 timber railway station building beneath clear northern sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'らーめん ぎょうざ 蘭たん亭',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1982年創業、JR輪西駅から徒歩約3〜5分の室蘭カレーラーメン人気店（11:00〜15:00・16:50〜20:30、日曜・第1第3月曜休）。コクのあるスープと手作り餃子が評判。',
      address: '北海道室蘭市輪西町1-30-8',
      lat: 42.334463,
      lng: 141.009533,
      clue:
        '昭和五十七年創業の人気店「らーめん ぎょうざ 蘭たん亭」へ入ろう（11:00〜15:00等、日曜休）。室蘭カレーラーメンが絶品だ。食後は「ぷらっと・てついち」へ。',
      surprise: 'スパイシーで奥深い室蘭カレーラーメンとジューシーな餃子の組み合わせに、心もお腹も大満足だった。',
      hook: '蘭たん亭で食事を楽しんだら、商店街の「ぷらっと・てついち」へ向かおう。',
      f7_fragment: '昭和五十七年創業、室蘭カレーラーメンと餃子が地元で評判の人気店。',
      f7_full: '「らーめん ぎょうざ 蘭たん亭」で熱々の室蘭カレーラーメンを味わい、活力を得た。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Rantantei welcoming neighborhood ramen shop counter with a steaming bowl of Muroran curry ramen and golden gyoza, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'ぷらっと・てついち',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '輪西商店街の核となる複合商業施設（室蘭市民会館併設、入場無料）。スーパーのホームストア輪西店（9:00〜21:00、元旦休）や鮮魚・茶舗など多彩な専門店が入居している。',
      address: '北海道室蘭市輪西町2-5-1',
      lat: 42.334217,
      lng: 141.013143,
      clue:
        '輪西商店街の中心で地域の暮らしを長く支え続ける複合商業施設「ぷらっと・てついち」を覗いてみよう（入場無料・専門店10:00頃〜）。室蘭市民会館を併設した活気あふれる館内には、スーパーをはじめ新鮮な鮮魚店やお茶屋さんなど多彩な専門店がずらりと軒を連ね、鉄の街の人々の飾らない日常が伝わってくる。買い物を楽しく満喫したら、次はみゆき町の「輪西神社」へとゆっくり歩いて足を運ぼう。',
      surprise: '鮮魚や茶舗など地元の専門店が集まる活気ある市場の空気に、昔ながらの商店街の底力を感じた。',
      hook: 'ぷらっと・てついちで買い物をしたら、みゆき町の「輪西神社」へ向かおう。',
      f7_fragment: '輪西商店街の核として鮮魚や茶舗など専門店が集う複合商業施設。',
      f7_full: '「ぷらっと・てついち」の賑やかな店内を歩き、輪西の暮らしの温かさに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Puratto Tetsuichi lively local market hall with fresh fish stalls, tea shop and friendly shoppers, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '輪西神社',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1929年（昭和4年）に製鉄所の守護神「御傘山神社」の頓宮として建立、1931年輪西神社と奉称（終日参拝自由・無料）。大国主神や火・製鉄の神々を祀る。',
      address: '北海道室蘭市みゆき町2-17-10',
      lat: 42.333073,
      lng: 141.013934,
      clue:
        '昭和四年に製鉄所の守護神「御傘山神社」の頓宮として建立され、昭和六年に現在の社号となった「輪西神社」へ丁寧に参拝しよう（終日自由・無料）。大国主神とともに火や製鉄にゆかりの神々を祀る境内は、まさに鉄の街・輪西ならではの深い歴史が息づく尊い場所だ。緑豊かな清らかな杜の中で旅の無事を心から深く祈ったら、最後はすぐ近くの高台にある「潮見公園」へと元気に楽しく歩いて向かおう。',
      surprise: '火や製鉄の神々を祀り、製鉄所の守護神の頓宮として生まれたという由来に鉄の街・室蘭らしさを感じた。',
      hook: '輪西神社に参拝したら、高台の展望スポット「潮見公園」へ向かおう。',
      f7_fragment: '昭和四年建立、製鉄所の守護神ゆかりで火と製鉄の神々も祀る輪西の鎮守。',
      f7_full: '「輪西神社」の静かな社殿に手を合わせ、鉄の街を見守り続けた祈りに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Wanishi Shrine dignified wooden torii gate and sanctuary surrounded by quiet hillside trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '潮見公園',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '輪西・みゆき町の高台に位置する展望公園（終日開放・入園無料）。緑に囲まれた高台から室蘭港や製鉄所方面を見晴らすことができ、散策の締めくくりに心地よい風が吹く。',
      address: '北海道室蘭市みゆき町3-289',
      lat: 42.333015,
      lng: 141.019293,
      clue:
        '旅の締めくくりは、輪西・みゆき町の高台に広がる「潮見公園」へ登って爽やかな港町の風景を楽しもう（終日開放・無料）。緑の木々に囲まれた見晴らしの良い高台から望めば、先ほど歩いてきた輪西の街並みとともに室蘭港や製鉄所方面の力強い景色がぐるりと美しく一望できる。港町ならではの潮風を胸いっぱいに吸い込んで、鉄の街・輪西の思い出深い街歩きを心地よく晴れやかに笑顔で締めくくろう。',
      surprise: '高台の公園から見渡す輪西の街並みと室蘭港・製鉄所方面の風景が、歩く旅の締めくくりに最高だった。',
      hook: '',
      f7_fragment: '輪西・みゆき町の高台から室蘭港や製鉄所方面を見晴らす展望公園。',
      f7_full: '「潮見公園」から鉄の街と港の風景を見渡し、輪西の街歩きを爽やかに終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shiomi Park hilltop green lawn overlooking Muroran steelworks harbor and sparkling distant bay, no text, no letters.',
    },
  ],
};
