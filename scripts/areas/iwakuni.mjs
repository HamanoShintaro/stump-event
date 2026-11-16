export default {
  slug: 'iwakuni',
  station_order: 613,
  station: '岩国駅',
  line: 'JR山陽本線・岩徳線',
  area_name: '岩国・麻里布と白蛇の杜',
  prefecture: '山口県',
  municipality: '岩国市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['山口県', '岩国市', '岩国駅', '岩國白蛇神社', '岩国レンコン'],
  style_genre: 'oil_palette_impasto',
  title: '岩国・麻里布の暮らしと白蛇の杜を歩く',
  description:
    'JR岩国駅西口から地元で愛される中華そばの老舗と岩国レンコン入りパンのベーカリーを巡り、ネルドリップ珈琲の喫茶店を経て、天然記念物のシロヘビを祀る岩國白蛇神社と白崎八幡宮へ至る、岩国の日常と信仰を辿る散策路。',
  eyecatch_prompt:
    'Thick oil palette knife impasto painting of Iwakuni town in Yamaguchi, vermilion wooden torii gates and stone lanterns of Shirohebi Shrine nestled under lush green trees, classic ramen shop and cozy brick coffee house in foreground, warm afternoon light, textured brushstrokes, no text, no people.',
  question:
    '麻里布の街並みから今津の古社へと歩いた岩国の旅で、最初に誰かへ語りたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「寿栄広食堂」で、地元客に交じって醤油豚骨の岩国中華そばを啜った瞬間',
      subtext:
        '駅前の老舗に漂う湯気と気さくな活気の中に、岩国の変わらぬ日常の温もりを感じた。',
      badge: {
        code: 'iwakuni_suehiro',
        name_ja: '寿栄広・岩国中華そばを味わいし者',
        subtitle_en: 'Taster of Iwakuni Ramen',
        description:
          '寿栄広食堂を訪ね、駅前で長年愛されてきたご当地の岩国中華そばを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic Japanese ceramic bowl of soy-tonkotsu ramen with sliced pork, scallions and bean sprouts, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「麻里布珈琲 本店」の落ち着いた店内で、ネルドリップ珈琲とカツサンドを味わった瞬間',
      subtext:
        '丁寧に淹れられた自家焙煎の香りとレトロな空間が、街歩きの足をゆったり休めてくれた。',
      badge: {
        code: 'iwakuni_marifu_coffee',
        name_ja: '麻里布珈琲・芳醇な一服を知る者',
        subtitle_en: 'Traveler of Marifu Coffee',
        description:
          '麻里布珈琲 本店を訪ね、ネルドリップで淹れた自家焙煎珈琲と寛ぎの時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring a classic porcelain coffee cup with rich dark roast coffee beside a crispy golden katsu sandwich on a wooden tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '「アンデルセン 岩国店」で、特産の岩国レンコンが入った焼きたてパンを見つけた瞬間',
      subtext:
        'シャキシャキとした蓮根の食感とカレーの風味に、土地ならではの食材の面白さを知った。',
      badge: {
        code: 'iwakuni_andersen_renkon',
        name_ja: '岩国レンコン・街の香りを拾う者',
        subtitle_en: 'Finder of Iwakuni Lotus Bread',
        description:
          'アンデルセン 岩国店を訪ね、特産の岩国レンコンを活かしたご当地パンに出会った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a golden crispy curry bread loaf cut open revealing sliced lotus root and rich curry filling, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「岩國白蛇神社」の清らかな社殿で、国の天然記念物シロヘビへの信仰に触れた瞬間',
      subtext:
        '白蛇モチーフの意匠と境内の清々しい空気に、岩国で大切に守られてきた文化の深みを見た。',
      badge: {
        code: 'iwakuni_shirohebi',
        name_ja: '岩國白蛇神社・清き杜の参拝者',
        subtitle_en: 'Visitor of Iwakuni Shirohebi Shrine',
        description:
          '岩國白蛇神社を訪ね、国の天然記念物シロヘビへの篤い信仰と今津の杜の静寂に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a clean wooden Shinto shrine hall, white stone lantern and green cedar leaves bathed in golden sunlight, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'iwakuni_complete',
    name_ja: '岩国・麻里布と白蛇の杜を歩みし者',
    subtitle_en: 'Walker of Iwakuni Town & Shrines',
    description:
      '寿栄広食堂からアンデルセン 岩国店、麻里布珈琲 本店、岩國白蛇神社、白崎八幡宮までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a Shinto shrine torii gate, a classic ramen bowl, and a lotus root slice motif, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '寿栄広食堂',
      spot_type: '食事',
      description:
        '岩国駅前の商店街で長年愛される老舗食堂。あっさりしつつコクのある醤油豚骨スープの「岩国中華そば」が名物。営業時間10:00〜22:00頃、火・水曜定休。',
      address: '山口県岩国市麻里布町1-2-3',
      prefecture: '山口県',
      city: '岩国市',
      lat: 34.172627,
      lng: 132.225,
      clue: 'JR岩国駅の西口を出たら、すぐそばの麻里布町で長年愛される老舗「寿栄広食堂」の暖簾をくぐろう（10:00〜22:00頃、火・水曜定休）。看板の岩国中華そばは、豚骨の旨みと醤油のキレが調和したどこか懐かしい味わいのスープに、たっぷりの中細麺とチャーシュー、もやしがよく絡む。朝から夜まで地元の人々が入れ替わり立ち替わり訪れる活気の中で、まずは岩国ならではの日常の一杯を味わいたい。',
      surprise:
        '食券を手渡すと手際よく運ばれてくる一杯には、半世紀以上駅前を見守り続けてきた老舗ならではの飾らない温かさがある。旨みの詰まったスープをひと口飲めば、旅人であってもふっとこの町の暮らしに溶け込んだような心地よさをしみじみと覚えるに違いないはずだ。',
      hook: '中華そばを味わったら、南南西へ徒歩2分のアンデルセン 岩国店へ向かおう。',
      f7_fragment: '岩国駅前で長く親しまれてきた、醤油豚骨香る老舗の中華そばの味。',
      f7_full: '駅前の老舗「寿栄広食堂」で岩国中華そばを味わい、麻里布の街に根付く飾らない日常の温もりにじっくりと深く触れた。',
      image_prompt:
        'Retro Japanese neighborhood ramen shop counter with a steaming ceramic bowl of soy-tonkotsu ramen topped with sliced pork and green onions, no text, no people.',
    },
    {
      name: 'アンデルセン 岩国店',
      spot_type: '買い物',
      description:
        '岩国駅近くにある人気ベーカリー。定番パンに加え、特産の岩国レンコンを使ったカレーパンなどご当地パンが揃う。営業時間7:00〜19:00、無休。',
      address: '山口県岩国市麻里布町2-1-18',
      prefecture: '山口県',
      city: '岩国市',
      lat: 34.171735,
      lng: 132.224306,
      clue: '寿栄広食堂から南南西へ徒歩2分、焼きたての香りが漂う「アンデルセン 岩国店」へ立ち寄ろう（7:00〜19:00、無休）。名物の「岩国レンコンが入ったカレーパン」など土地の食材を活かしたパンが魅力的だ。',
      surprise:
        '穴が九つあることで知られる特産の岩国レンコンをパンに取り入れる発想が面白く、シャキシャキとした歯触りがカレーのスパイスと見事に調和している。日常のパン屋さんの棚にもしっかり土地の個性が息づいていることに思わず深く感心させられることだろうね。',
      hook: 'パンを選んだら、西南西へ徒歩10分の麻里布珈琲 本店で一息つこう。',
      f7_fragment: '麻里布の通りに香ばしく広がる、岩国レンコン入りパンの美味しさ。',
      f7_full: '「アンデルセン 岩国店」を訪ね、特産の岩国レンコンを活かしたご当地パンの香ばしさと食感に心地よくたっぷりと出会った。',
      image_prompt:
        'Warm Japanese bakery wooden shelf displaying golden freshly baked curry bread loaves and pastries under soft morning light, no text, no people.',
    },
    {
      name: '麻里布珈琲 本店',
      spot_type: '休憩',
      description:
        '麻里布町6丁目にある自家焙煎珈琲の喫茶店。ネルドリップで丁寧に淹れる珈琲や厚切りカツサンド、プリンが人気。営業時間7:30〜18:00（L.O.17:30）、水曜定休。',
      address: '山口県岩国市麻里布町6-13-5',
      prefecture: '山口県',
      city: '岩国市',
      lat: 34.169642,
      lng: 132.217764,
      clue: 'アンデルセンから西南西へ徒歩10分、麻里布の落ち着いた一角に佇む「麻里布珈琲 本店」でひと息つこう（7:30〜18:00、水曜定休）。ネルドリップで一杯ずつ丁寧に抽出される自家焙煎珈琲は雑味がなくまろやかな口当たりで、レトロなプリンや厚切りカツサンドとの相性も抜群だ。これから今津の古社へ向けて少し歩く前に、心地よい珈琲の香りに包まれながら静かに、そして贅沢に英気を養いたい。',
      surprise:
        '町の名を冠した喫茶店らしく、地域の常連さんから旅人まで自然体でくつろげる懐の深い空気が店内に流れている。深みのあるカップをゆっくり傾けるうちに、駅前の賑わいから少し離れた岩国の穏やかな素顔が見えてくるのがとても嬉しいところといえるだろうね。',
      hook: '珈琲で寛いだら、南西へ徒歩13分の岩國白蛇神社へ向かおう。',
      f7_fragment: '麻里布の街角で味わう、ネルドリップ自家焙煎珈琲の穏やかな一服。',
      f7_full: '「麻里布珈琲 本店」で丁寧に淹れられた自家焙煎珈琲を味わい、今津の古社へ向かう前の穏やかな休息をじっくりとった。',
      image_prompt:
        'Cozy Japanese kissaten coffee shop interior with dark wooden counter, ceramic pour-over coffee cup and classic custard pudding, no text, no people.',
    },
    {
      name: '岩國白蛇神社',
      spot_type: '見どころ',
      description:
        '国の天然記念物「岩国のシロヘビ」の保護と信仰にちなんで創建された神社。社殿の意匠や隣接の観覧所でシロヘビに親しまれる土地の文化に触れられる。参拝終日自由（社務所9:00〜17:00）、無休。',
      address: '山口県岩国市今津町6-4-2',
      prefecture: '山口県',
      city: '岩国市',
      lat: 34.163505,
      lng: 132.212641,
      clue: '麻里布珈琲から南西へ徒歩13分、今津町の住宅街を抜けると清らかな気配を放つ「岩國白蛇神社」の鳥居が現れる（参拝自由・社務所9:00〜17:00）。国の天然記念物「岩国のシロヘビ」は古くから弁財天の使いとして大切に守られてきた存在で、境内の灯籠や手水舎にも白蛇にちなんだ繊細な意匠が施されている。隣接する観覧所で実際の姿を見学しながら、岩国に受け継がれる自然への畏敬に思いを寄せよう。',
      surprise:
        '白い姿をした蛇が突然変異ではなくこの地で代々受け継がれてきたという奇跡と、それを福をもたらす存在として町ぐるみで保護してきた歴史に深い感銘を受ける。明るく清々しい境内に立つだけで、心が洗われるような穏やかな心地になっていくに違いないはずだ。',
      hook: '白蛇神社を後にしたら、南西へ徒歩8分の白崎八幡宮で旅を結ぼう。',
      f7_fragment: '天然記念物シロヘビへの敬愛が息づく、今津町の清らかな社殿の杜。',
      f7_full: '「岩國白蛇神社」に詣で、国の天然記念物シロヘビを大切に守り伝えてきた岩国の信仰と自然への畏敬にじっくり触れた。',
      image_prompt:
        'Clean wooden Shinto shrine courtyard of Iwakuni Shirohebi Shrine with stone torii gate, white stone lanterns and green foliage in afternoon light, no text, no people.',
    },
    {
      name: '白崎八幡宮',
      spot_type: '見どころ',
      description:
        '岩国市今津町に鎮座し、源氏の氏神などを祀る歴史ある八幡宮。地域の暮らしと安全を見守り続ける静かな境内を散策できる。終日参拝自由（社務所9:00〜17:00）、無休。',
      address: '山口県岩国市今津町6-12-23',
      prefecture: '山口県',
      city: '岩国市',
      lat: 34.160431,
      lng: 132.208875,
      clue: '白蛇神社から南西へ徒歩8分、今津の落ち着いた街並みの奥に構える「白崎八幡宮」へ詣でよう（終日参拝可・社務所9:00〜17:00）。古くから地域の守り神として信仰を集めてきた由緒ある八幡宮で、堂々とした拝殿と手入れの行き届いた緑豊かな境内が参拝者を穏やかに迎えてくれる。駅前の食堂から始まった岩国の街歩きを、清らかな古社の杜で手を合わせて静かに、そして心地よく締めくくろう。',
      surprise:
        '賑やかな駅周辺から歩いてわずか十数分の場所に、これほど落ち着いた歴史の杜が並んでいることに岩国の奥深さを感じる。境内を渡る穏やかな風に耳を澄ませば、一日の歩みが確かな余韻とともに心に静かに収まっていくのがよくわかるに違いないところといえる。',
      hook: '',
      f7_fragment: '今津の静かな杜に鎮座する古社、岩国の街歩きを結ぶ祈りの空間。',
      f7_full: '今津町の古社「白崎八幡宮」に詣で、駅前から辿ってきた岩国の暮らしと信仰の道のりを静かに、そして深く締めくくった。',
      image_prompt:
        'Historic Shinto shrine hall of Shirasaki Hachimangu shaded by mature evergreen trees with stone approach path in warm golden afternoon light, no text, no people.',
    },
  ],
};
