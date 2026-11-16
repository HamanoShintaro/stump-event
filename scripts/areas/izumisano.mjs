export default {
  slug: 'izumisano',
  station_order: 598,
  station: '泉佐野駅',
  line: '南海本線・空港線',
  area_name: '泉佐野・さの町場の格子戸と古社',
  prefecture: '大阪府',
  municipality: '泉佐野市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['大阪府', '泉佐野市', '泉佐野駅', 'さの町場', 'むか新'],
  style_genre: 'oil_palette_impasto',
  title: '町家の格子戸と佐野町場の粋を訪ねる',
  description:
    '江戸時代に廻船業と木綿・醤油づくりで栄え、本瓦屋根と格子戸の町並み「さの町場」を今に残す大阪府泉佐野市。北前船の寄港地を見守った総社から、老舗の寿司、醤油業で財を成した有形文化財の町家、町家改装の和カフェを経て、明治創業の銘菓本店まで、泉州の商都を巡る。',
  eyecatch_prompt:
    'Rich oil palette-knife impasto landscape painting of Sano-machiba historic merchant quarter in Izumisano, Osaka, featuring dark tiled traditional machiya roofs, wooden lattice facades, stone shrine lanterns beneath camphor trees, and warm late-afternoon amber light, no text, no people.',
  question:
    '商家の面影と泉州の味が息づく佐野町場で、誰かへ語りたくなるのはどれ？',
  choices: [
    {
      key: 'A',
      spot_index: 3,
      text: '「泉佐野ふるさと町屋館」の土間と帳場で、往時の商人の暮らしぶりに触れたとき',
      subtext:
        '醤油業を営んだ豪商の堂々たる梁や日本画家の襖絵から、当時のさの町場の豊かな文化を実感した。',
      badge: {
        code: 'izumisano_machiyakan',
        name_ja: 'さの町場・豪商の町屋を巡りし者',
        subtitle_en: 'Visitor of Izumisano Machiya',
        description:
          '泉佐野ふるさと町屋館を訪ね、醤油商が暮らした有形文化財の町家に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a traditional wooden merchant machiya facade with lattice windows and heavy tiled roof, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 1,
      text: '「春日神社」の境内で、北前船の時代から商売繁盛を願う石燈籠を見上げたとき',
      subtext:
        'かつて漁業と廻船で栄えた佐野町場の総社に立ち、海と商いを結んだ地域の祈りを感じ取った。',
      badge: {
        code: 'izumisano_kasuga_shrine',
        name_ja: '佐野町場総社・春日神社を詣でし者',
        subtitle_en: 'Pilgrim of Izumisano Kasuga Shrine',
        description:
          '春日神社を参拝し、佐野の廻船業と町場の繁栄を見守り続けた総社の歴史に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a weathered stone shrine lantern and ancient camphor tree foliage beside a wooden sanctuary, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '元酒屋を活かした「甘味茶房 さのまち庵」で、焼き団子と日本茶を味わったとき',
      subtext:
        '古い町家の落ち着いた空気の中で、香ばしく焼いたお団子とともに寛ぐ時間が旅の疲れを癒やしてくれた。',
      badge: {
        code: 'izumisano_sanomachian',
        name_ja: 'さのまち庵・町家茶房の和みを味わいし者',
        subtitle_en: 'Guest of Sanomachian Tea House',
        description:
          '甘味茶房 さのまち庵を訪ね、大正の町家を改装した空間で泉州の和スイーツを楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring skewered toasted round rice dumplings beside a ceramic teapot on a wooden tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '百三十年超続く「むか新 本店」で、泉州銘菓のみたらしだんごや焼き菓子を選んだとき',
      subtext:
        '百三十年以上にわたり泉佐野の玄関口で愛され続ける老舗の温もりと、変わらぬ和洋菓子の魅力に惹かれた。',
      badge: {
        code: 'izumisano_mukashin',
        name_ja: '泉州銘菓・むか新本店の旅人',
        subtitle_en: 'Patron of Mukashin Main Shop',
        description:
          '明治二十五年創業のむか新 本店を訪ね、泉佐野が誇る伝統の菓子文化を手土産にした証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing golden baked sponge cakes and glazed round rice dumplings arranged on a classic Japanese plate, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'izumisano_complete',
    name_ja: '泉佐野・さの町場と古社の巡り手',
    subtitle_en: 'Walker of Izumisano Sano-machiba',
    description:
      '春日神社から松右エ門ずし、泉佐野ふるさと町屋館、甘味茶房 さのまち庵、むか新 本店までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a traditional lattice machiya roof, a stone shrine lantern, and golden baked sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '春日神社',
      spot_type: '見どころ',
      description:
        'かつて漁業と廻船業で栄えた「さの町場」の総社。境内には豪商が奉納した石燈籠や赤手拭稲荷神社が鎮座する。境内参拝自由。',
      address: '大阪府泉佐野市春日町4-12',
      prefecture: '大阪府',
      city: '泉佐野市',
      lat: 34.415188,
      lng: 135.318032,
      clue: '南海本線・泉佐野駅から北へ旧市街の路地を歩くと、廻船業で栄えた「さの町場」の総社「春日神社」に着く（境内参拝自由）。境内にはかつて海運で財を成した佐野の豪商たちが奉納した立派な石燈籠が立ち並び、奥には商売繁盛のご利益で親しまれる赤手拭稲荷神社も祀られている。潮風の名残を感じる静かな鎮守の杜で、泉州の商都を見守ってきた祈りの空間に手を合わせ、最初のしるしをここで刻み出そう。',
      surprise:
        '往時の佐野は「佐野浦」と呼ばれる大阪湾有数の漁業・廻船基地であり、北前船の交易にも携わった豪商・食野家らの活躍で大きく発展した。境内の石造物には、広い海を舞台に活躍した町衆の確かな誇りと厚い信仰の証が今も鮮やかに美しく刻み込まれて残される。',
      hook: '春日神社を参拝したら、西南西へ徒歩3分の松右エ門ずしへ向かおう。',
      f7_fragment: '豪商が奉納した立派な石燈籠が並ぶ境内、廻船の町を見守る総社。',
      f7_full: 'さの町場の総社・春日神社に参拝し、海運と商いで栄えた泉佐野の確かな原点と町衆の祈りの歴史にじっくり深く触れた。',
      image_prompt:
        'Wide morning view of a tranquil Shinto shrine courtyard in Izumisano with weathered stone lanterns, green camphor trees, and a tiled sanctuary roof, no text, no people.',
    },
    {
      name: '松右エ門ずし',
      spot_type: '食事',
      description:
        'さの町場の本町通りに構える老舗の寿司・和食店。泉州の海の幸を使った落ち着いた昼食や和食を味わえる。営業時間11:30〜14:00・17:00〜21:00、水曜定休。',
      address: '大阪府泉佐野市本町4-23',
      prefecture: '大阪府',
      city: '泉佐野市',
      lat: 34.414387,
      lng: 135.316539,
      clue: '春日神社から西南西へ徒歩3分、本町の歴史ある街並みに佇む「松右エ門ずし」で昼食にしよう（11:30〜14:00・17:00〜21:00、水曜定休）。泉州の旬の魚介を味わい、ひと息つこう。',
      surprise:
        '屋号にも残る「松右衛門」の名は、かつて丈夫な帆布を織り出して海運業に革命をもたらした佐野ゆかりの偉人・工楽松右衛門にも通じる土地の記憶だ。大阪湾の豊かな魚種を活かした郷土の味覚が、趣ある町家の落ち着いた空間に今も大切にずっと受け継がれ息づく。',
      hook: '松右エ門ずしで満たされたら、北西へ徒歩1分の泉佐野ふるさと町屋館を訪ねよう。',
      f7_fragment: '歴史ある町家の暖簾の先で味わう、大阪湾の旬の寿司と和の味わい。',
      f7_full: 'さの町場の本町通りに構える老舗「松右エ門ずし」を訪ね、大阪湾と泉州の豊かな海の恵みをじっくり心ゆくまで堪能した。',
      image_prompt:
        'Medium-wide interior view of a traditional wooden Japanese sushi restaurant counter with neatly arranged nigiri sushi on a cypress board and ceramic teacup, no text, no people.',
    },
    {
      name: '泉佐野ふるさと町屋館',
      spot_type: '見どころ',
      description:
        '往時に醤油業を営むために建てられた旧新川家住宅を公開する泉佐野市指定有形文化財。開館9:00〜16:00（入館料200円）、年末年始休。',
      address: '大阪府泉佐野市本町5-29',
      prefecture: '大阪府',
      city: '泉佐野市',
      lat: 34.414724,
      lng: 135.316026,
      clue: '松右エ門ずしから北西へ徒歩1分、重厚な本瓦屋根と格子戸が迎える「泉佐野ふるさと町屋館（旧新川家住宅）」を訪ねよう（9:00〜16:00、年末年始休・入館料あり）。かつて醤油の醸造・販売を営む豪商の住まいとして建てられた市指定有形文化財で、通り土間や帳場、日本画家・日根対山が描いた見事な襖絵が当時のまま保存されている。往時の町家の豊かな暮らしをここでゆっくり体感しよう。',
      surprise:
        '迷路のように入り組んだ「さの町場」の路地は、潮風や盗賊から町を守るための防風・防犯の知恵から生まれた独特の街区構造だ。この新川家住宅もまた、屋敷の奥に蔵や作業場を備えた往時の商家の典型的な姿を今に力強く伝え残し、まちの往来を見守り続けている。',
      hook: '町屋館を見学したら、南南西へ徒歩3分の甘味茶房 さのまち庵で一服しよう。',
      f7_fragment: '通り土間と太い梁が伝える往時の商い、本瓦屋根の豪商の住まい。',
      f7_full: '泉佐野市指定有形文化財のふるさと町屋館を訪ね、醤油商が築いた町家の粋と暮らしの知恵にじっくりと心ゆくまで触れた。',
      image_prompt:
        'Top-down flatlay detail of aged dark wood floorboards, woven tatami border, and a ceramic tea set beside a traditional Japanese merchant ledger book, no text, no kanji, no people.',
    },
    {
      name: '甘味茶房 さのまち庵',
      spot_type: '休憩',
      description:
        '築百年の元酒屋の町家をリノベーションした和カフェ。自分で焼き上げる団子セットや抹茶、和スイーツが楽しめる。営業時間11:00〜17:00、月曜定休（祝日の場合は翌平日休）。',
      address: '大阪府泉佐野市元町1-2',
      prefecture: '大阪府',
      city: '泉佐野市',
      lat: 34.413137,
      lng: 135.315517,
      clue: '町屋館から南南西へ徒歩3分、元町の古民家街に暖簾を掲げる「甘味茶房 さのまち庵」で足を休めよう（11:00〜17:00、月曜定休・祝日の場合は翌平日休）。築百年の元酒屋の趣ある町家を活かした店内では、卓上の七輪で香ばしく焼き上げるお団子セットや香り高い日本茶が人気だ。古い梁と木の温もりに包まれながら、佐野の街歩きの合間に穏やかな甘味を味わってここでゆっくり一息つこう。',
      surprise:
        '空き家となっていた往時の商家を地域の観光拠点として再生させた取り組みから生まれた茶房だ。かつて酒樽が並んでいた空間が、今では和菓子づくりや茶道体験を通じてさの町場の魅力を伝える場として、地元の人々や多くの旅人から今もずっと親しまれ愛され続ける。',
      hook: 'さのまち庵で寛いだら、南東へ徒歩6分のむか新 本店でお土産を選ぼう。',
      f7_fragment: '古い町家に漂う香ばしい焼き団子の香りと、温かい日本茶のぬくもり。',
      f7_full: '元酒屋の町家を再生した「甘味茶房 さのまち庵」で一服し、古き良き町家の寛ぎの時間を心ゆくまでゆっくり味わった。',
      image_prompt:
        'Low-angle interior view of a renovated Taisho-era wooden cafe with a small tabletop brazier holding skewered round rice dumplings and a cup of green tea, no text, no people.',
    },
    {
      name: 'むか新 本店',
      spot_type: '買い物',
      description:
        '百三十年以上の歴史を誇る大阪・泉州を代表する老舗和洋菓子店。元祖大阪みたらしだんごやこがしバターケーキなどが人気。営業時間9:00〜18:00、水曜定休。',
      address: '大阪府泉佐野市上町3-11-4',
      prefecture: '大阪府',
      city: '泉佐野市',
      lat: 34.411259,
      lng: 135.318459,
      clue: 'さのまち庵から南東へ徒歩6分、泉佐野駅のすぐそばに店を構える「むか新（むかしん）本店」で旅を締めくくろう（9:00〜18:00、水曜定休）。創業以来百三十年以上、地元の人々に愛されてきた泉州銘菓の総本山だ。香ばしい焦がしバターの風味豊かなケーキや、醤油だれが中に入った元祖大阪みたらしだんごなど、伝統と新しさが調和した自慢の銘菓を大切な旅の手土産にここでじっくり選び取ろう。',
      surprise:
        '創業者の「向井新与門」が百三十年余前に和菓子店を開いたことが屋号の由来と伝わる。戦前から続く伝統の和菓子づくりをベースにしながら、洋菓子の技法も柔軟に取り入れる進取の気性が、泉州を代表する老舗の菓子舗へと力強く見事に大きく立派に育て上げた。',
      hook: '',
      f7_fragment: '泉佐野駅前に佇む百三十年続く老舗、焦がしバターとみたらしの甘い誘い。',
      f7_full: '百三十年超の歴史を誇る老舗「むか新 本店」で泉州銘菓を手に取り、さの町場の歴史と暮らしを巡る旅を締めくくった。',
      image_prompt:
        'Golden-hour view of an inviting traditional-modern Japanese confectionery shop counter with neatly boxed golden sponge cakes and glazed dumplings under warm lights, no text, no people.',
    },
  ],
};
