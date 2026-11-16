export default {
  slug: 'kashiharajingumae',
  station_order: 617,
  station: '橿原神宮前駅',
  line: '近鉄南大阪線・橿原線・吉野線',
  area_name: '橿原神宮前・久米の杜と古刹',
  prefecture: '奈良県',
  municipality: '橿原市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['奈良県', '橿原市', '橿原神宮前駅', '橿原神宮', '久米寺'],
  style_genre: 'fountain_pen_sketchbook',
  title: '橿原神宮の杜と久米の古刹・大和を歩く',
  description:
    '近鉄橿原神宮前駅から久米町の老舗和菓子店に立ち寄り、久米仙人伝説が伝わる古刹・久米寺と石川町の洗練されたカフェを巡り、橿原神宮境内のカフェ橿乃杜を経て広大な橿原神宮へと至る、神話と祈りの大和路を辿る散策路。',
  eyecatch_prompt:
    'Fountain pen and light watercolor sketchbook illustration of Kashihara Jingu Shrine in Nara, towering hinoki cypress wooden torii gate, wide gravel approach, lush sacred forest of Mount Unebi in background and serene historic pagoda of Kume-dera temple, crisp ink lines and warm washes, no text, no people.',
  question:
    '大和三山の畝傍山を仰ぐ橿原神宮の杜を歩いたあと、いちずに思い出す景色はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '「橿原神宮」の広大な玉砂利の参道と、畝傍山を背に佇む荘厳な外拝殿',
      subtext:
        '一歩踏み入れた瞬間に広がる澄んだ森の気配と、日本書紀ゆかりの空間の大きさに息をのんだ。',
      badge: {
        code: 'kashihara_jingu',
        name_ja: '橿原神宮・畝傍の杜の参拝者',
        subtitle_en: 'Visitor of Kashihara Jingu',
        description:
          '橿原神宮を訪ね、畝傍山の麓に広がる広大な神域と荘厳な社殿の前に立った証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a massive hinoki wood torii gate before Kashihara Jingu shrine roof and Mount Unebi cedar forest, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「久米寺」の静かな境内にそびえる多宝塔と、久米仙人ゆかりの穏やかな空気',
      subtext:
        '橿原神宮のすぐ傍らに千年以上続く古刹が佇み、大和の歴史の重層さを伝えていた。',
      badge: {
        code: 'kashihara_kumedera',
        name_ja: '久米寺・古刹の塔を仰ぐ者',
        subtitle_en: 'Admirer of Kume-dera Temple',
        description:
          '久米寺を訪ね、来目皇子創建と伝わる大和の古刹と優雅な多宝塔の佇まいに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing the elegant two-story Tahoto pagoda of Kume-dera temple framed by green pine branches, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「cafe 想奈」で、奈良県産食材のスーププレートや焼きたてフィナンシェを味わった瞬間',
      subtext:
        '久米・石川エリアの落ち着いた空間でいただく丁寧な一皿が、大和路の散策を豊かにした。',
      badge: {
        code: 'kashihara_souna',
        name_ja: '大和の恵み・想奈の食卓を知る者',
        subtitle_en: 'Guest of Cafe Souna',
        description:
          'cafe 想奈を訪ね、奈良県産の食材を活かしたランチと自家製焼き菓子の味わいに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a warm wooden tray with fresh seasonal soup bowl, artisan bread and golden financier pastry beside specialty coffee, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 1,
      text: '「菓匠苑 梅ぞの 橿原店」で、大和の四季を映した上品な和菓子を選んだ瞬間',
      subtext:
        '門前町の駅近くに根付く和菓子店の丁寧な手仕事に、奈良ならではの風雅を感じた。',
      badge: {
        code: 'kashihara_umezono',
        name_ja: '久米町・大和の和菓子を愛でる者',
        subtitle_en: 'Traveler of Kashihara Wagashi',
        description:
          '菓匠苑 梅ぞの 橿原店を訪ね、参拝前の駅近くで奈良の四季を映す和菓子に出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting delicate handmade Japanese wagashi seasonal sweets and matcha tea bowl on a lacquer tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kashiharajingumae_complete',
    name_ja: '橿原神宮・久米の杜と古刹を歩みし者',
    subtitle_en: 'Walker of Kashihara & Kume',
    description:
      '菓匠苑 梅ぞのから久米寺、cafe 想奈、Café 橿乃杜、橿原神宮までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a grand wooden shrine torii gate, a Buddhist temple pagoda, and green Mount Unebi silhouette, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '菓匠苑 梅ぞの 橿原店',
      spot_type: '買い物',
      description:
        '橿原神宮前駅から徒歩圏内に構える人気の和菓子店。大和の四季を感じさせる季節の和菓子や最中などが揃う。営業時間9:00〜17:00、火曜定休。',
      address: '奈良県橿原市久米町533-1',
      prefecture: '奈良県',
      city: '橿原市',
      lat: 34.482214,
      lng: 135.791509,
      clue: '近鉄橿原神宮前駅から久米町方面へ歩き、まずは地元で親しまれる和菓子店「菓匠苑 梅ぞの 橿原店」に立ち寄ろう（9:00〜17:00、火曜定休）。大和の四季を映した季節の和菓子や香ばしい最中、手土産にぴったりな銘菓が店先に品よく並んでいる。神域の杜や古刹を巡る散策の前に、この土地の暮らしに息づく和の甘味にじっくりと触れて、穏やかな大和路の楽しい歩みをここから元気に始めたい。',
      surprise:
        '参拝客だけでなく地元の人々も日常的に買い求める店先には、華美すぎない古都らしい上品な佇まいが感じられる。ひとつずつ丁寧に包まれた和菓子を手にすると、これから訪れる長い歴史の舞台へ向けて心が自然と整っていくように感じる素敵な老舗和菓子店といえる。',
      hook: '和菓子を選んだら、北北西へ徒歩5分の久米寺へお参りしよう。',
      f7_fragment: '橿原神宮前駅の傍らで出会う、大和の四季を映す上品な和菓子舗。',
      f7_full: '久米町の「菓匠苑 梅ぞの 橿原店」を訪ね、大和の風雅を伝える丁寧な和菓子の魅力にじっくり触れて散策を穏やかに始めた。',
      image_prompt:
        'Refined Japanese wagashi sweet shop wooden counter displaying delicate seasonal sweets and crisp monaka wafers in Nara, no text, no people.',
    },
    {
      name: '久米寺',
      spot_type: '見どころ',
      description:
        '聖徳太子の弟・来目皇子の創建と伝わる古刹。空海が修行した地や久米仙人の伝説でも知られ、重要文化財の多宝塔が静かな境内に佇む。参拝9:00〜17:00（境内自由・本堂拝観等大人400円）。',
      address: '奈良県橿原市久米町502',
      prefecture: '奈良県',
      city: '橿原市',
      lat: 34.484564,
      lng: 135.790034,
      clue: '梅ぞのから北北西へ徒歩5分、住宅街の中に古い築地塀と山門が現れる「久米寺」を訪ねよう（9:00〜17:00・大人400円）。聖徳太子の弟・来目皇子の創建と伝わり、空海が大日経を感得したゆかりの地や、有名な久米仙人伝説の舞台としても知られる由緒ある古刹だ。重要文化財に指定された優美な多宝塔を見上げながら、橿原神宮のすぐ隣に息づく深い仏教の歴史と静かな時の流れを心ゆくまでずっとゆっくりと感じたい。',
      surprise:
        '壮大な橿原神宮のすぐ目と鼻の先に、古代の昔から続くこれほど静謐で奥深い古寺が佇んでいることに大和の奥行きを思い知る。風になびく木々の音と端正な多宝塔のシルエットが、歩く者の時間をゆったりと心地よく解きほぐしてくれるはずだ。その静けさが心に沁みる。',
      hook: '久米寺を出たら、東北東へ徒歩10分のcafe 想奈でランチにしよう。',
      f7_fragment: '来目皇子と久米仙人の伝承が息づく、重要文化財の多宝塔を擁する古刹。',
      f7_full: '古都ゆかりの古刹「久米寺」に詣で、優雅な多宝塔と静かな境内に流れる大和の長い歴史にじっくりと深く、心静かに触れた。',
      image_prompt:
        'Serene ancient Buddhist temple courtyard of Kume-dera in Nara featuring an elegant wooden Tahoto pagoda framed by mature pine trees, no text, no people.',
    },
    {
      name: 'cafe 想奈',
      spot_type: '食事',
      description:
        '奈良県産食材を使った季節のスーププレートや毎朝焼き上げるフィナンシェ、スペシャルティコーヒーが人気のカフェ。営業時間11:00〜18:00（ランチ11:30〜14:00）、月・火曜定休。',
      address: '奈良県橿原市石川町4-1-202',
      prefecture: '奈良県',
      city: '橿原市',
      lat: 34.486479,
      lng: 135.796542,
      clue: '久米寺から東北東へ徒歩10分、石川町にある落ち着いた空間「cafe 想奈」でランチにしよう（11:00〜18:00、月・火曜定休）。地元産の旬の野菜をふんだんに使った季節のスーププレートや、毎朝店内で焼き上げる香り豊かなフィナンシェが評判だ。洗練された心地よい席で身体に優しい大和の恵みをゆっくりと味わえば、午後の神域散策に向けた英気も体の芯から自然と満たされていくはず。',
      surprise:
        '歴史ある社寺の街に溶け込みながら、現代の感性で地元の食材の美味しさを引き出している姿がとても新鮮といえる。一口ごとに素材の甘みが広がるスープと焼き菓子の香ばしさに、思わず時間を忘れてゆっくりと味わいたくなるに違いない。心まで温まる素敵な食卓だ。',
      hook: 'お腹が満たされたら、西へ徒歩8分のCafé 橿乃杜でひと休みしよう。',
      f7_fragment: '奈良県産の旬の恵みと焼きたてフィナンシェが迎える、石川町の食卓。',
      f7_full: '石川町の「cafe 想奈」で地元産食材の温かいスーププレートと焼き菓子を味わい、午後からの英気をしっかり養った。',
      image_prompt:
        'Bright minimalist Japanese cafe wooden table set with seasonal vegetable soup plate, artisan bread and golden financier pastry, no text, no people.',
    },
    {
      name: 'Café 橿乃杜',
      spot_type: '休憩',
      description:
        '橿原神宮の境内・養正殿内にあるガラス張りの明るいカフェ。参拝の合間に昔ながらの固めプリンや珈琲を楽しめる。営業時間10:30〜17:00（L.O.16:30）、火曜定休（祝日の場合は営業）。',
      address: '奈良県橿原市久米町934 橿原神宮養正殿内',
      prefecture: '奈良県',
      city: '橿原市',
      lat: 34.48595,
      lng: 135.791116,
      clue: 'cafe 想奈から西へ徒歩8分、橿原神宮の杜の入口に建つ養正殿内の「Café 橿乃杜」で一服しよう（10:30〜17:00、火曜休）。緑を望むガラス張りの明るい空間で名物の固めプリンを味わいたい。',
      surprise:
        '神域のすぐそばにありながら開放的な窓越しに境内の緑を眺められ、参拝の前後にほっと息をつける特別な空間になっている。ほどよい固さのクラシックなプリンを味わいながら、いよいよ向かう本殿への気持ちを静かに整えていける素敵な場所だ。一息つくのにちょうどよい。',
      hook: 'カフェを出たら、西北西へ徒歩8分の橿原神宮の本殿へ参拝しよう。',
      f7_fragment: '神域の緑をガラス越しに望みながら味わう、橿乃杜の珈琲とプリン。',
      f7_full: '橿原神宮養正殿内の「Café 橿乃杜」で境内の緑を眺めながら珈琲とプリンを味わい、心穏やかな休息をたっぷりとった。',
      image_prompt:
        'Sunlit glass-walled cafe inside a serene shrine precinct overlooking lush forest trees, classic firm custard pudding and coffee on table, no text, no people.',
    },
    {
      name: '橿原神宮',
      spot_type: '見どころ',
      description:
        '大和三山の一つ・畝傍山の東麓に鎮座し、初代天皇・神武天皇を祀る広大な神域。高さ約10メートルの檜の大鳥居と広大な玉砂利の参道、荘厳な社殿が圧倒的。開門6:00〜18:00頃（季節変動）、無休。',
      address: '奈良県橿原市久米町934',
      prefecture: '奈良県',
      city: '橿原市',
      lat: 34.488326,
      lng: 135.786448,
      clue: 'Café 橿乃杜から西北西へ徒歩8分、広大な玉砂利の参道を踏みしめて「橿原神宮」の中心へと進もう（6:00〜18:00頃・季節変動）。背後にそびえる畝傍山の深い緑を借景に、巨大な檜の鳥居と荘厳な外拝殿が凛と佇む姿はまさに圧巻のひと言。日本書紀に記された建国の地と伝わる神聖な空気を胸いっぱいに吸い込み、深々と手を合わせて大和路の旅を清らかに、そして心静かに締めくくろう。',
      surprise:
        '広大な境内に一歩足を踏み入れると、街の喧騒がすっと遠のき、玉砂利を踏む音と木々のざわめきだけが響く清らかな別世界が広がる。畝傍山と社殿が織りなす雄大な景観に、日本の原風景を見出したような静かな感動が胸に深く込み上げるに違いない。ずっと記憶に残る杜だ。',
      hook: '',
      f7_fragment: '畝傍山の深い緑を背に凛と佇む、広大な玉砂利と檜鳥居の神域の杜。',
      f7_full: '畝傍山の麓に広がる「橿原神宮」の広大な神域に詣で、澄んだ杜の空気の中で大和路の散策を心から清らかに締めくくった。',
      image_prompt:
        'Monumental hinoki cypress wooden torii gate and wide white gravel approach leading to Kashihara Jingu shrine with green Mount Unebi behind, no text, no people.',
    },
  ],
};
