export default {
  slug: 'nishigoryo',
  station_order: 977,
  station: '西御料',
  line: 'JR富良野線',
  area_name: '西御料・緑が丘南',
  prefecture: '北海道',
  municipality: '旭川市',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['富良野線', 'PatisserieEST', 'ツムギ堂', 'パン工房たんと', '旭川市'],
  style_genre: 'ink_and_watercolor',
  title: '西御料の洋菓子と天然酵母パンを訪ねる散歩',
  description:
    'JR西御料駅から駅前の人気洋菓子店Patisserie EST！、makanai cafe ツムギ堂、西御料公園、天然酵母のパン工房たんとへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nishi-Goryo Station in Asahikawa, a charming pastry boutique displaying fresh fruit tarts, a warm wooden neighborhood cafe, a leafy park, and rustic sourdough bread loaves, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び西御料を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅前の名店 Patisserie EST！のタルト',
      subtext: '季節のフルーツを使った美しい洋菓子や焼き菓子に心躍った',
      badge: {
        code: 'nishigoryo_est',
        name_ja: '六本木エストの系譜',
        subtitle_en: 'Fruit Tart Patisserie',
        description:
          'Patisserie EST！を訪れ、季節のフルーツタルトや美しい焼き菓子に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a jewel-like seasonal fruit tart on a delicate porcelain plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '食堂の温かみがある makanai cafe ツムギ堂',
      subtext: '手作りのランチプレートとスイーツで穏やかな時間を過ごした',
      badge: {
        code: 'nishigoryo_tsumugido',
        name_ja: 'ツムギ堂の食卓',
        subtitle_en: 'Tsumugido Cafe Plate',
        description:
          'makanai cafe ツムギ堂で心温まる手作りランチプレートを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm wooden lunch tray with homemade side dishes and a ceramic mug on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '緑に囲まれた広い西御料公園',
      subtext: '住宅街の静かな公園のベンチで澄んだ風を感じて休んだ',
      badge: {
        code: 'nishigoryo_park',
        name_ja: '御料の緑地公園',
        subtitle_en: 'Nishi-Goryo Park',
        description:
          '西御料公園のベンチで一息つき、緑豊かな住宅街の開放感を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of sunlit park trees beside a wooden bench and tennis net on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '自家製天然酵母のパン工房たんと',
      subtext: 'くるみとレーズンのカンパーニュなど滋味深いパンを選んだ',
      badge: {
        code: 'nishigoryo_tanto',
        name_ja: '天然酵母の麦香',
        subtitle_en: 'Sourdough Bakery',
        description:
          'パン工房たんとで自家製天然酵母のカンパーニュや全粒粉食パンを手にしたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a crusty walnut-raisin sourdough boule dusted with flour on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishigoryo_complete',
    name_ja: '西御料・甘味と麦の旅人',
    subtitle_en: 'Walker of Nishi-Goryo',
    description:
      'JR西御料駅からPatisserie EST！、ツムギ堂、西御料公園、パン工房たんとまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a seasonal fruit tart, warm cafe cup, and crusty sourdough bread on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西御料駅',
      lat: 43.721222,
      lng: 142.371375,
      address: '北海道旭川市西御料4条3',
      description:
        'かつてこの一帯が皇室御料地であった歴史を駅名に伝えるJR富良野線の無人駅（終日利用可）。旭川市西御料の落ち着いた住宅街に位置し、美味しい街歩きの起点となる。',
      clue:
        'かつてこの一帯が皇室の御料地であった歴史を駅名に刻むJR富良野線の無人駅「JR西御料駅」から楽しいグルメ散策を始めよう（終日利用可）。住宅街の静かで爽やかな空気を感じながら東の方向へと外へ踏み出したら、まずはすぐ駅前で季節のフルーツタルトや美しい焼き菓子が評判の洋菓子店「Patisserie EST！（パティスリー エスト）」を目指してのんびり楽しく元気に笑顔で力強く歩き出そう。',
      hook: '駅から東方向へ徒歩約1分',
      f7_fragment: '皇室御料地だった歴史を駅名に伝える、西御料の住宅街に佇む無人駅。',
      f7_full: '「JR西御料駅」を後にし、洋菓子と天然酵母パンを巡る西御料の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'Patisserie EST！（パティスリー エスト）',
      lat: 43.721307,
      lng: 142.37176,
      address: '北海道旭川市西御料4条3-1-20',
      description:
        '旭川西武地下で愛された「六本木エスト」が2014年に移転オープンした人気洋菓子店（10:00〜19:00、水曜休）。季節のフルーツを使ったタルトや焼き菓子が豊富。',
      clue:
        '人気洋菓子店「Patisserie EST！」で季節のタルトや焼き菓子を選ぼう（水曜休）。甘いお土産を手にしたら南東の「makanai cafe ツムギ堂」へ向かおう。',
      hook: '南東方向へ徒歩約3分',
      f7_fragment: '旧「六本木エスト」の系譜を継ぎ、季節のフルーツタルトが人気の洋菓子店。',
      f7_full: '「Patisserie EST！」で宝石のようなタルトと焼き菓子に出会い、心躍った。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'makanai cafe ツムギ堂',
      lat: 43.720007,
      lng: 142.373124,
      address: '北海道旭川市西御料3条3-6-17',
      description:
        'アットホームな食堂の温かみとカフェの居心地を兼ね備えた人気店（11:00〜16:00・ランチL.O.14:00、不定休）。手作りのランチプレートやスイーツが味わえる。',
      clue:
        'アットホームな食堂の温かみとカフェの心地よさを兼ね備えた人気店「makanai cafe ツムギ堂」で手作りのランチをゆっくり楽しく味わおう（11:00〜16:00、不定休）。彩りよく丁寧に盛り付けられたランチプレートや優しい味わいの手作りスイーツをいただけば、日常の疲れがすっと溶けていく。お腹も心もほっこり満たされたら、北方向の緑豊かな「西御料公園」へと歩いて向かおう。',
      hook: '北方向へ徒歩約20分',
      f7_fragment: '食堂の温かみとカフェの居心地が調和した、手作りランチが人気の隠れ家店。',
      f7_full: '「makanai cafe ツムギ堂」で心温まるランチプレートを味わい、元気を養った。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '西御料公園',
      lat: 43.731802,
      lng: 142.369587,
      address: '北海道旭川市緑が丘南2条1',
      description:
        '広さ約1.6haの緑豊かな地域公園（終日開放・無休）。テニスコートや遊具、ベンチ・水飲み場が綺麗に整備されており、散策の途中で心地よく一息つくことができる。',
      clue:
        '緑が丘南の住宅街に広がる約1.6ヘクタールの憩いの空間「西御料公園」のベンチで心地よく一息つこう（終日開放）。綺麗に整備されたテニスコートや木立の風景を眺めながら胸いっぱい深呼吸すれば、食後の散策が一層爽やかで心地よく感じられる。澄んだ旭川の爽やかな風で十分にリフレッシュできたら、南側の住宅街の一角に佇む「パン工房たんと」へと焼きたての美味しいパンを求めて楽しく向かおう。',
      hook: '南方向へ徒歩約6分',
      f7_fragment: '約1.6haの広さを持ち、ベンチや水飲み場が整備された緑豊かな地域公園。',
      f7_full: '「西御料公園」の爽やかな緑陰で一息つき、落ち着いた住宅街の風を感じた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'パン工房たんと',
      lat: 43.728389,
      lng: 142.370326,
      address: '北海道旭川市緑が丘南3条2-2-4',
      description:
        '住宅街の一角にある自家製天然酵母の焼き立てパン工房（11:00〜18:00・売切次第終了、日〜水曜休・木〜土・祝中心営業）。カンパーニュや全粒粉入り食パンが評判。',
      clue:
        '旅の締めくくりは、住宅街の一角で自家製天然酵母のパンを丁寧に焼き上げる「パン工房たんと」へ楽しく立ち寄ってみよう（11:00〜18:00、木〜土中心営業）。くるみとレーズンがぎっしり入った香ばしいカンパーニュや風味豊かな全粒粉入り食パンなど、噛むほどに麦の旨味が広がる逸品が並んでいる。素敵な焼き立てパンのお土産を手に入れて、西御料の散歩を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '自家製天然酵母のカンパーニュや全粒粉入り食パンが評判の隠れ家パン工房。',
      f7_full: '「パン工房たんと」で天然酵母の香ばしいパンを手に入れ、西御料の旅を終えた。',
    },
  ],
};
