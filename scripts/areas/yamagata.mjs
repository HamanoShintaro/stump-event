export default {
  slug: 'yamagata',
  station_order: 640,
  station: '山形',
  line: '山形新幹線・JR奥羽本線',
  area_name: '山形・霞城と大正ロマンの街',
  prefecture: '山形県',
  municipality: '山形市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['山形県', '山形市', '山形駅', '文翔館', '冷しらーめん'],
  style_genre: 'ukiyoe_woodblock',
  title: '山形・霞城の堀と冷しらーめんの街を歩く',
  description:
    'JR山形駅から、桜と石垣が美しい「霞城公園（山形城跡）」と「最上義光歴史館」、元祖冷しらーめんの「栄屋本店」、老舗和菓子店「乃し梅本舗 佐藤屋 七日町店」、国重要文化財の大正建築「文翔館（山形県郷土館）」を巡る散策路。',
  eyecatch_prompt:
    'Modern shin-hanga woodblock print illustration of Yamagata city showing the stone moat and east gate of Kajo Castle Park, Samurai history hall, famous chilled ramen diner, traditional plum-sweet wagashi shop and grand Taisho-era red-brick Bunshokan palace, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '戦国の城跡と名物冷しらーめん、そして大正ロマン建築が繋がる山形を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「霞城公園（山形城跡）」の広大な水堀と復元された東大手門を仰いだ瞬間',
      subtext:
        '五十七万石を誇った最上家の居城の規模と、穏やかな水面に映る石垣の美しさに息を呑んだ。',
      badge: {
        code: 'yamagata_kajo',
        name_ja: '霞城公園・最上氏の城跡を巡りし者',
        subtitle_en: 'Explorer of Kajo Castle',
        description:
          '霞城公園（山形城跡）を訪ね、日本百名城の広大な水堀と復元東大手門の威容に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a grand wooden castle gate and weathered stone ramparts reflected in a calm castle moat with cherry blossoms, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「栄屋本店」で、氷が浮かぶ元祖・冷しらーめんの澄んだスープを味わった瞬間',
      subtext:
        '昭和二十七年に山形で生まれたひんやりコクのある一杯が、街歩きの身体を爽やかに癒やした。',
      badge: {
        code: 'yamagata_sakaeya',
        name_ja: '山形本町・元祖冷しらーめんを啜りし者',
        subtitle_en: 'Taster of Chilled Ramen',
        description:
          '栄屋本店を訪ね、日本で初めて考案された元祖・冷しらーめんの奥深い味わいを堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring a ceramic bowl of chilled Japanese soy-sauce ramen with clear broth, ice cubes, beef slices and fresh cucumber strips, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「乃し梅本舗 佐藤屋 七日町店」で、江戸から続く琥珀色の銘菓・乃し梅に出会った瞬間',
      subtext:
        '完熟梅の爽やかな酸味と竹皮に包まれた老舗の佇まいが、城下町の粋な手土産を教えてくれた。',
      badge: {
        code: 'yamagata_satoya',
        name_ja: '山形七日町・佐藤屋の銘菓を買いし者',
        subtitle_en: 'Taster of Yamagata Wagashi',
        description:
          '乃し梅本舗 佐藤屋 七日町店を訪ね、文政四年創業の伝統を受け継ぐ銘菓・乃し梅に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing translucent amber Japanese plum-agar sweets wrapped in bamboo leaves beside a ceramic teacup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「文翔館（山形県郷土館）」の重厚な煉瓦建築と優雅な大正ロマンの階段を仰いだ瞬間',
      subtext:
        '英国近世復興様式の旧県庁舎の気品あふれる空間が、山形散策のフィナーレを美しく飾った。',
      badge: {
        code: 'yamagata_bunshokan',
        name_ja: '山形旅篭町・文翔館を仰ぎし者',
        subtitle_en: 'Admirer of Bunshokan Hall',
        description:
          '文翔館（山形県郷土館）を訪ね、国指定重要文化財の大正期煉瓦建築の美しさに触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the grand Taisho-era brick and white stone Bunshokan clocktower facade with arched windows, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'yamagata_complete',
    name_ja: '山形・霞城と大正ロマンの街を巡る旅人',
    subtitle_en: 'Walker of Yamagata Town',
    description:
      '霞城公園から最上義光歴史館、栄屋本店、乃し梅本舗 佐藤屋 七日町店、文翔館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the wooden gate of Kajo Castle, a bowl of chilled ramen and the Taisho-era clocktower of Bunshokan, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '霞城公園（山形城跡）',
      spot_type: '見どころ',
      description:
        '出羽山形藩57万石の城主・最上義光が整備した輪郭式の平城跡で日本100名城の一つ。広大な水堀と復元された東大手門、重要文化財の旧済生館本館などが公園内に点在する。入園自由・無料。',
      address: '山形県山形市霞城町1',
      prefecture: '山形県',
      municipality: '山形市',
      lat: 38.254736,
      lng: 140.328237,
      clue: 'JR山形駅の西口を出て線路沿いを北へ進み、出羽五十七万石の面影を伝える「霞城公園（山形城跡）」へ足を踏み入れよう（入園自由・無料）。日本百名城に数えられる広大な平城跡で、堂々と復元された東大手門や水を湛えた美しい水堀が戦国から江戸の風格を今に伝えている。緑の木々と石垣が織りなす開放的な園内をゆっくり歩き、城下町・山形の歴史の旅をこれからもずっと清々しく美しく始めたい。',
      surprise:
        '新幹線の駅からわずか十分ほど歩いただけで、これほど広大な水堀と雄大な城門の風景に出会えることに圧倒される。堀沿いを渡る爽やかな風と堂々たる石垣の佇まいが、かつて東北有数の大大名・最上家が治めた城下町のスケールの大きさを物語っている。',
      hook: '東大手門をくぐったら、すぐ東側にある最上義光歴史館で山形の礎を学ぼう。',
      f7_fragment: '最上義光ゆかりの日本百名城、広大な水堀と東大手門が残る山形城跡。',
      f7_full: '「霞城公園（山形城跡）」の広大な水堀と復元東大手門を歩き、出羽五十七万石の風格を感じて山形の旅を始めた。',
      image_prompt:
        'Majestic wooden East Otemon gate and weathered stone ramparts of Kajo Castle Park reflected in a wide calm moat framed by green trees, no text, no people.',
    },
    {
      name: '最上義光歴史館',
      spot_type: '見どころ',
      description:
        '霞城公園の東大手門のすぐ向かいに建つ歴史資料館。山形発展の礎を築いた戦国武将・最上義光ゆかりの甲冑や書状、山形城の復元模型を無料で観覧できる。9:00〜17:00、月曜休館。',
      address: '山形県山形市大手町1-53',
      prefecture: '山形県',
      municipality: '山形市',
      lat: 38.255094,
      lng: 140.333436,
      clue: '霞城公園の東大手門から道路を挟んですぐの「最上義光歴史館」へ入ろう（9:00〜17:00、月曜休・無料）。山形の街並みの基礎を築いた名将・最上義光公の生涯を伝える資料館で、愛用した鉄製指揮棒や合戦屏風、往時の山形城の精巧な復元模型を間近に鑑賞できる。先ほど歩いた水堀と城門の成り立ちを頭の中で結び合わせながら、山形の歴史の深い物語にこれからもずっと心静かにじっくりと浸りたい。',
      surprise:
        'これほど充実した戦国大名の資料と山形城の精密な展示が無料で公開されていることに驚く。単なる戦国武将としてだけでなく、治水や城下町の整備に力を注いだ義光公の素顔に触れることで、これから歩く山形の街並みが一層味わい深く見えてくる。',
      hook: '歴史館を出たら、東南東へ徒歩11分の元祖冷しらーめん・栄屋本店で昼食にしよう。',
      f7_fragment: '霞城公園そばで名将・最上義光の生涯と山形城の歴史を伝える無料資料館。',
      f7_full: '「最上義光歴史館」で城下町の礎を築いた名将の足跡と資料を学び、山形の歴史の奥深さに親しんだ。',
      image_prompt:
        'Quiet traditional Japanese local history museum gallery interior displaying antique samurai armor, folded screen and detailed wooden castle model, no text, no people.',
    },
    {
      name: '栄屋本店',
      spot_type: '食事',
      description:
        '昭和27年（1952年）に日本で初めて「冷しらーめん」を考案したとされる山形の老舗麺処。牛骨ベースの澄んだ冷製スープとコシのある中太麺、氷の涼やかな見た目が名物。夏期11:30〜20:15・冬期11:30〜19:30、水曜休。',
      address: '山形県山形市本町2-3-21',
      prefecture: '山形県',
      municipality: '山形市',
      lat: 38.251381,
      lng: 140.33993,
      clue: '歴史館から東南東へ徒歩11分、山形麺文化の金字塔「栄屋本店」へ入ろう（11:30〜19:30／夏期〜20:15、水曜休）。氷の浮かぶ名物の元祖・冷しらーめんをぜひ味わいたい。',
      surprise:
        '冷たいスープなのに旨みやコクがしっかりと感じられ、もやしやきゅうり、牛肉チャーシューの食感と見事に調和しているのが実に新鮮だ。ラーメン消費量日本一とも称される山形県民の麺への深い愛情と創意工夫を、最初の一口から実感できる名店といえる。',
      hook: '冷しらーめんを味わったら、北西へ徒歩3分の乃し梅本舗 佐藤屋 七日町店へ向かおう。',
      f7_fragment: '昭和二十七年に「冷しらーめん」を生んだ、山形麺文化を象徴する老舗。',
      f7_full: '老舗「栄屋本店」で氷が浮かぶ元祖・冷しらーめんを堪能し、山形ならではの独創的な麺文化の美味しさに感動した。',
      image_prompt:
        'Clean classic Japanese ramen shop table with a ceramic bowl of chilled clear amber soy ramen topped with ice cubes, cucumber strips and beef slices, no text, no people.',
    },
    {
      name: '乃し梅本舗 佐藤屋 七日町店',
      spot_type: '買い物',
      description:
        '文政4年（1821年）創業の山形を代表する老舗和菓子舗の七日町店。山形産完熟梅を寒天で固めて竹皮で挟んだ名物「乃し梅」や、創作和菓子が人気。営業時間9:30〜18:00、日・祝休。',
      address: '山形県山形市七日町1-2-35',
      prefecture: '山形県',
      municipality: '山形市',
      lat: 38.252267,
      lng: 140.338381,
      clue: '栄屋本店から北西へ徒歩3分、文政四年創業の老舗「乃し梅本舗 佐藤屋 七日町店」へ立ち寄ろう（9:30〜18:00、日・祝休）。山形産完熟梅を寒天で固め、竹皮に挟んで仕上げる伝統銘菓「乃し梅」をはじめ、梅の爽やかな酸味を活かした創作菓子が美しくずらりと並んでいる。二百年以上受け継がれる老舗の手仕事に触れながら、山形らしい粋な手土産をこれからもずっとゆっくりじっくり選びたい。',
      surprise:
        '二百年以上の伝統を誇る老舗でありながら、梅の甘酸っぱさを活かしたチョコレート菓子など現代の感性に響く品々も並んでいるのが素敵だ。竹の香りがほのかに移った透き通る琥珀色の乃し梅を手に取ると、山形の四季の恵みと職人の粋が伝わってくる。',
      hook: '銘菓を選んだら、北北東へ徒歩9分の国重要文化財・文翔館へ向かい旅を結ぼう。',
      f7_fragment: '文政四年創業、完熟梅と竹皮が香る山形銘菓「乃し梅」の老舗店舗。',
      f7_full: '老舗「乃し梅本舗 佐藤屋 七日町店」を訪ね、江戸から受け継がれる銘菓・乃し梅と粋な和菓子の世界に触れた。',
      image_prompt:
        'Refined traditional Japanese wagashi shop wooden counter displaying translucent amber noshi-ume plum sweets wrapped in bamboo leaves and tea boxes, no text, no people.',
    },
    {
      name: '文翔館（山形県郷土館）',
      spot_type: '見どころ',
      description:
        '大正5年（1916年）に建てられた旧山形県庁舎・県会議事堂で、国の重要文化財。英国近世復興様式の優美な煉瓦造りと壮麗な正庁・大時計塔が見どころ。9:00〜16:30、第1・3月曜休、無料。',
      address: '山形県山形市旅篭町3-4-51',
      prefecture: '山形県',
      municipality: '山形市',
      lat: 38.256637,
      lng: 140.341187,
      clue: '佐藤屋から北北東へ徒歩9分、旅篭町の大通りの先に堂々とそびえる「文翔館（山形県郷土館）」で散策を締めくくろう（9:00〜16:30、第1・3月曜休・無料）。大正五年に英国近世復興様式で建てられた旧県庁舎と県会議事堂であり、国の重要文化財に指定された美しい煉瓦と花崗岩の建築群が圧巻だ。優雅な中央階段や中庭の緑を巡り、城と麺と近代建築が響き合う山形の旅をこれからも温かく結びたい。',
      surprise:
        '大通りの突き当たりに時計塔を戴く壮麗な洋風宮殿が現れる景観は、まるでヨーロッパの街角のような気品に満ちている。館内の漆喰天井の細やかな装飾や旧知事室の重厚な雰囲気まで無料で公開されており、大正ロマンの粋を心ゆくまで味わえる名建築だ。',
      hook: '',
      f7_fragment: '英国近世復興様式の旧県庁舎を伝える、国重文の大正ロマン煉瓦建築。',
      f7_full: '国重要文化財「文翔館」の壮麗な大正煉瓦建築と優美な館内を歩き、歴史と麺文化が響く山形の散策を結んだ。',
      image_prompt:
        'Grand Taisho-era brick and white stone palace facade of Bunshokan in Yamagata with central clock tower, arched windows and landscaped front plaza, no text, no people.',
    },
  ],
};
