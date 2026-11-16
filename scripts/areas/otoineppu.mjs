// scripts/areas/otoineppu.mjs
// station_order: 885

export default {
  slug: 'otoineppu',
  station_order: 885,
  station: '音威子府',
  line: 'JR宗谷本線',
  area_name: '音威子府・黒いそばと木遊館、道の駅',
  prefecture: '北海道',
  municipality: '音威子府村',
  category: '黒いそばと森の匠',
  budget_tier: 2,
  tags: ['北海道', '音威子府村', '音威子府駅', '黒いそば', '木遊館'],
  style_genre: 'ink_and_watercolor',
  title: '音威子府・名物黒いそばと木遊館に石段神社へ',
  description:
    '天北線資料室と駅そばを擁する「JR音威子府駅」から、地元農園が黒いそばを出す「お食事処うさぎ」、木工体験の「山村・都市交流センター 木遊館」、2026年刷新の「道の駅おといねっぷ」、134段の石段が続く「音威子府八幡神社」を巡る徒歩ルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Otoineppu transit terminal station, steaming bowl of dark black buckwheat soba noodles, timber woodworking workshop hall, roadside market station, and forested stone shrine staircase, full bleed, no text, no letters.',
  question: '森と匠の里・音威子府の駅から名物の黒いそばや木遊館、八幡神社を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '天北線資料室や有志により復活した駅そばも抱く「JR音威子府駅」',
      subtext: 'かつて天北線が分岐した鉄道の記憶と、復活した駅そばの温かさに胸が熱くなった。',
      badge: {
        code: 'otoineppu_station',
        name_ja: '音威子府・天北分岐の駅人',
        subtitle_en: 'Railway Heritage of Otoineppu',
        description: '天北線資料室と駅そばを擁するJR音威子府駅を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic northern railway station platform with a steaming bowl of dark soba noodles, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '地元・立川農園が営み黒い「おといねっぷ蕎麦」を届ける「お食事処うさぎ」',
      subtext: '濃い色合いと豊かなそばの香りが際立つ黒いおといねっぷ蕎麦が絶品だった。',
      badge: {
        code: 'otoineppu_usagi',
        name_ja: '音威子府・黒そばの名人',
        subtitle_en: 'Black Soba Lover of Usagi',
        description: 'お食事処うさぎで黒い「おといねっぷ蕎麦」を堪能した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a ceramic bowl of rich dark black buckwheat soba noodles topped with crispy tempura, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「森と匠の村」の豊かな木工文化に触れる「山村・都市交流センター 木遊館」',
      subtext: '北の木材の香りあふれる空間で、音威子府のクラフト精神を感じられた。',
      badge: {
        code: 'otoineppu_mokuyukan',
        name_ja: '音威子府・森と匠の木遊館',
        subtitle_en: 'Woodcraft Visitor of Mokuyukan',
        description: '山村・都市交流センター 木遊館で森と匠の文化に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting hand-carved Hokkaido wooden toys and carpenter chisels on a warm cedar workbench, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '百三十四段の石段の上に鎮座し村を見守る「音威子府八幡神社」',
      subtext: '明治四十二年創建の社へと続く石段を登り切り、村の静かな展望に心洗われた。',
      badge: {
        code: 'otoineppu_shrine',
        name_ja: '音威子府・百段の杜参拝',
        subtitle_en: 'Hilltop Shrine Climber',
        description: '134段の石段を登り音威子府八幡神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a long stone shrine staircase ascending through tall green northern forest trees toward a wooden torii gate, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'otoineppu_master',
    name_ja: '音威子府・黒そばと森の匠巡り',
    subtitle_en: 'Otoineppu Soba & Woodcraft Master',
    description: 'JR音威子府駅からお食事処うさぎ、木遊館、道の駅おといねっぷ、音威子府八幡神社までを巡った証',
    image_prompt:
      'A circular emblem combining dark black soba noodles, timber station terminal, woodcraft plane and stone shrine steps, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR音威子府駅（交通ターミナル）',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '1912年11月5日開業、かつて天北線が分岐した鉄道要衝（駅舎終日開放・無料）。館内に「天北線資料室」（日中開放・時期により変動）や、2025年7月に復活した「駅そば音威子府」（11:00〜14:00、水曜休等）がある。',
      address: '北海道中川郡音威子府村字音威子府509',
      lat: 44.729039,
      lng: 142.259908,
      clue:
        '大正元年に開業し、かつて天北線が分岐して大いに賑わった道北鉄道の要衝「JR音威子府駅（音威子府交通ターミナル）」から街歩きを始めよう（駅舎終日利用可）。駅舎内の天北線資料室で往時の鉄路の記憶にじっくり触れ、有志により復活した駅そばの温かな佇まいを眺めて外へ出たら、まずは歩いて五分ほど、地元農園が自慢の香り高い黒いそばを出す「お食事処うさぎ」へとゆっくり歩いて向かおう。',
      surprise: '天北線資料室に残る鉄道の記憶と、有志の手で蘇った駅そばの温もりに音威子府への深い愛を感じた。',
      hook: 'JR音威子府駅を出たら、徒歩約五分の「お食事処うさぎ（立川農園）」へ向かおう。',
      f7_fragment: 'かつて天北線が分岐した要衝で、天北線資料室と復活した駅そばを抱く駅。',
      f7_full: '「JR音威子府駅」に降り立ち、黒いそばと森と匠の村を巡る街歩きを始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Otoineppu Station transit terminal building with snow-free summer platform and timber facade, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'お食事処うさぎ（立川農園）',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '地元・立川農園が営む人気食事処。11:00〜14:30（L.O.14:00）・17:00〜19:00（L.O.18:30）、不定休。名物の黒い「おといねっぷ蕎麦」（かけ・ざる800円、とり天1,000円）やカレーを提供。',
      address: '北海道中川郡音威子府村字音威子府384',
      lat: 44.727791,
      lng: 142.259988,
      clue:
        '地元農園が営む「お食事処うさぎ」へ入ろう（11:00〜14:30・17:00〜19:00、不定休）。名物の黒い「おといねっぷ蕎麦」は香り豊かだ。次は「木遊館」へ。',
      surprise: '甘皮まで挽き込んだ濃い黒色と、一口ごとに広がるそばの力強い香りにすっかり魅了された。',
      hook: 'お食事処うさぎで黒いそばを味わったら、「山村・都市交流センター 木遊館」へ向かおう。',
      f7_fragment: '地元・立川農園が営み、香り高い黒い「おといねっぷ蕎麦」を届ける店。',
      f7_full: '「お食事処うさぎ」で香り高い黒いおといねっぷ蕎麦を味わい、大地の恵みに満たされた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a cozy village diner table with a steaming bowl of dark black buckwheat soba noodles and crispy tempura, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '山村・都市交流センター 木遊館',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '「森と匠の村」を体感できる木工体験・展示施設。9:00〜16:30、月曜・火曜・祝日休館。入館料大人220円（冬期330円）・中学生以下無料（木工体験は別途材料費）。専門スタッフ常駐。',
      address: '北海道中川郡音威子府村字音威子府179-1',
      lat: 44.728244,
      lng: 142.263821,
      clue:
        '「森と匠の村」を掲げる音威子府村ならではの文化拠点「山村・都市交流センター 木遊館」へ足を運ぼう（9:00〜16:30、月火祝休、大人220円）。木の温もりと清々しい芳香に包まれた館内では、北の木材を使った多彩なクラフト作品に触れたり、専門スタッフの丁寧な案内で気軽に木工体験を楽しむこともできる。木の豊かな文化に癒されたら、歩いてすぐの「道の駅おといねっぷ」へ向かおう。',
      surprise: '森林に囲まれた村ならではの木工文化の豊かさと、館内に満ちる心地よい木の香りに癒された。',
      hook: '木遊館で森の匠に触れたら、すぐ近くの「道の駅おといねっぷ」へ向かおう。',
      f7_fragment: '「森と匠の村」を体感できる木工展示・体験の交流拠点施設。',
      f7_full: '「山村・都市交流センター 木遊館」で木の香りと匠の技に触れ、村の個性を知った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Mokuyukan timber craft workshop hall displaying warm wooden sculptures and handcrafted furniture, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '道の駅おといねっぷ',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '国道275号・40号分岐点に立つ村の拠点（6:00〜22:00、無休、入館無料）。2026年3月にセイコーマートが指定管理者・テナントとして入り刷新オープン。特産品や2階展示室を備える。',
      address: '北海道中川郡音威子府村字音威子府155',
      lat: 44.729063,
      lng: 142.257975,
      clue:
        '国道275号と40号の分岐点に立つ「道の駅おといねっぷ」へ立ち寄ろう（6:00〜22:00、無休）。2026年3月にセイコーマートの参画でリニューアルオープンしたばかりの明るく便利な館内では、村の特産品や旅のお土産、焼き立てパンや日用品まで幅広く揃い、2階展示室も見どころだ。お気に入りのお土産をしっかり手に入れたら、旅の締めくくりに高台の「音威子府八幡神社」へ向かおう。',
      surprise: '道北の国道分岐点という立地と、地域に寄り添って刷新された明るく便利な道の駅の姿が心強かった。',
      hook: '道の駅おといねっぷで買い物を楽しんだら、高台の「音威子府八幡神社」へ向かおう。',
      f7_fragment: '国道分岐点に立ち、2026年に刷新された村の特産と旅の拠点。',
      f7_full: '「道の駅おといねっぷ」で特産品を選び、道北の拠点の活気を実感した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Roadside Station Otoineppu neat timber-accented market building at northern highway junction, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '音威子府八幡神社',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '明治42年（1909年）創建、昭和27年に現在地の高台へ遷座、昭和43年拝殿改築の村の総鎮守（終日参拝自由・無料）。一の鳥居から約134段の石段が森の中へ続く。',
      address: '北海道中川郡音威子府村字音威子府1',
      lat: 44.728563,
      lng: 142.272835,
      clue:
        '旅の締めくくりは、駅東方の高台に鎮座する村の総鎮守「音威子府八幡神社」へゆっくりと参拝しよう（終日自由・無料）。明治四十二年に切割山で創建され、渡船場付近などを経て昭和二十七年にこの緑豊かな高台へと遷座された静かな境内には、一の鳥居から約百三十四段もの石段が森の中へと続いている。一段ずつ丁寧に登り切った拝殿で手を合わせ、音威子府の豊かな旅を清々しく心穏やかに締めくくろう。',
      surprise: '森の中を真っすぐ登る約百三十四段の石段と、高台から村を見守る八幡神社の凛とした空気に心洗われた。',
      hook: '',
      f7_fragment: '明治四十二年創建、約134段の石段の先に佇む村の総鎮守。',
      f7_full: '「音威子府八幡神社」の石段を登り切って参拝し、静かな達成感とともに旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Otoineppu Hachiman Shrine long stone staircase climbing through tall northern evergreens toward wooden torii, no text, no letters.',
    },
  ],
};
