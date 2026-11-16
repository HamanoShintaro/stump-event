export default {
  slug: 'iyomishima',
  station_order: 623,
  station: '伊予三島',
  line: 'JR予讃線',
  area_name: '伊予三島・紙のまちと三島神社',
  prefecture: '愛媛県',
  municipality: '四国中央市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['愛媛県', '四国中央市', '伊予三島駅', '紙のまち', '三島神社'],
  style_genre: 'pictorial_isometric_map',
  title: '日本一の紙のまち・伊予三島の味と古社を歩く',
  description:
    'JR伊予三島駅から地元で愛される老舗和菓子店「菓舗 丸亀屋」に立ち寄り、本場仕込みの讃岐うどん店とアートな古民家カフェを経て、三重塔が佇む古刹「興願寺」と紙産業の守護神「三島神社」へと至る散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Iyo-Mishima in Ehime showing a railway station, traditional wagashi sweet shop, udon noodle diner, artistic cafe, Buddhist temple with three-story pagoda and ancient Shinto shrine, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '日本一の紙のまちとして栄える伊予三島を歩いたあと、最初に誰かに語りたくなる景色はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「菓舗 丸亀屋」で、全国菓子大博覧会受賞の銘菓ひうち焼と街の温もりに触れた瞬間',
      subtext:
        '三島中央の通りで親しまれてきた老舗の優しい甘味が、四国の旅の始まりを彩ってくれた。',
      badge: {
        code: 'iyomishima_marugameya',
        name_ja: '伊予三島・ひうち焼の銘菓を知る者',
        subtitle_en: 'Taster of Iyo-Mishima Sweets',
        description:
          '菓舗 丸亀屋を訪ね、名誉総裁賞受賞の銘菓ひうち焼など老舗の和菓子に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting neatly wrapped baked Japanese wagashi confections and green tea on a cedar tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「ぴっぴや」で、コシの強い本格さぬきうどんと瀬戸内の出汁を勢いよく啜った瞬間',
      subtext:
        '香川と隣り合う土地ならではの本格的な麺のコシといりこ出汁に、心から満たされた。',
      badge: {
        code: 'iyomishima_pippiya',
        name_ja: '伊予三島・さぬきうどんを味わいし者',
        subtitle_en: 'Lover of Mishima Udon',
        description:
          'ぴっぴやを訪ね、強いコシと旨み深い出汁の本格讃岐うどんを堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming bowl of glossy thick sanuki udon noodles with crispy tempura and green scallions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「興願寺」の境内にそびえる、県指定文化財の優雅な三重塔を見上げた瞬間',
      subtext:
        '重厚な仁王門の先に佇む木造の三重塔が、静かな時の流れを優雅に伝えていた。',
      badge: {
        code: 'iyomishima_koganji',
        name_ja: '伊予三島・興願寺の三重塔を仰ぎし者',
        subtitle_en: 'Viewer of Koganji Pagoda',
        description:
          '興願寺を訪ね、県指定文化財の三重塔と歴史ある仁王門の美しい伽藍に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting an elegant three-story wooden Buddhist pagoda rising beside pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「三島神社」の境内で、古代の磐座と紙産業のお宮が放つ静謐な空気に包まれた瞬間',
      subtext:
        'ものづくりのまちを千年以上見守り続けてきた聖域で、紙のまちの誇りを感じた。',
      badge: {
        code: 'iyomishima_mishima_jinja',
        name_ja: '紙のまち・三島神社を拝みし者',
        subtitle_en: 'Visitor of Mishima Shrine',
        description:
          '三島神社を訪ね、紙産業のお宮としての信仰と古代の磐座に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a grand Shinto shrine hall, sacred ancient rock formation and folded white washi paper, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'iyomishima_complete',
    name_ja: '日本一の紙のまち・伊予三島と古社の旅人',
    subtitle_en: 'Walker of Iyo-Mishima Paper Town',
    description:
      '菓舗 丸亀屋からぴっぴや、くう食堂、興願寺、三島神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a traditional Japanese three-story pagoda, folded sheets of handcrafted washi paper and a steaming bowl of udon, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '菓舗 丸亀屋',
      spot_type: '買い物',
      description:
        '三島中央で長く愛される老舗和菓子店。全国菓子大博覧会で名誉総裁賞を受賞した手作りの銘菓「ひうち焼」をはじめ季節の和菓子が人気。営業時間8:30〜19:30、木曜定休。',
      address: '愛媛県四国中央市三島中央2-13-11',
      prefecture: '愛媛県',
      municipality: '四国中央市',
      lat: 33.983938,
      lng: 133.544206,
      clue: 'JR予讃線の伊予三島駅から北東方面へ歩き、まずは三島中央の老舗和菓子店「菓舗 丸亀屋」を訪ねよう（8:30〜19:30、木曜定休）。店内には全国菓子大博覧会で名誉総裁賞に輝いた手づくりの看板銘菓「ひうち焼」をはじめ、素朴で温かな和菓子が品よく並んでいる。日本一の紙のまちとして栄えてきた伊予三島の街角で、古くから地元の人々に愛されてきた甘い手土産を見つけて旅を始めよう。',
      surprise:
        '駅前の商店街から少し入った通りにありながら、昔から地域の贈答や日常のおやつとして大切にされてきた老舗の気品が漂う。香ばしく焼き上げられた「ひうち焼」を手に取ると、燧灘の海を臨むこの土地の穏やかな風土まで伝わってくるような素敵な老舗和菓子店だ。',
      hook: '和菓子を選んだら、東へ徒歩12分のさぬきうどん ぴっぴやで昼食にしよう。',
      f7_fragment: '燧灘ゆかりの銘菓「ひうち焼」が名物、三島中央の老舗和菓子舗。',
      f7_full: '三島中央の「菓舗 丸亀屋」を訪ね、名誉総裁賞受賞の銘菓ひうち焼など地元で親しまれる丁寧な和菓子の魅力に触れた。',
      image_prompt:
        'Traditional Japanese wagashi sweet shop wooden counter displaying neatly wrapped baked confections and gift boxes in Ehime, no text, no people.',
    },
    {
      name: 'ぴっぴや',
      spot_type: '食事',
      description:
        '香川県出身の店主が打つ本格讃岐うどんの人気店。強いコシの麺と風味豊かな出汁、揚げたて天ぷらが地元客で賑わう。営業時間10:30〜14:00、日祝休（土曜隔週等あり）。',
      address: '愛媛県四国中央市三島宮川4-8-42',
      prefecture: '愛媛県',
      municipality: '四国中央市',
      lat: 33.980629,
      lng: 133.551007,
      clue: '丸亀屋から東へ徒歩12分、香川との県境にも近い三島宮川の本格さぬきうどん店「ぴっぴや」で昼食にしよう（10:30〜14:00、日祝休）。香川出身の店主が毎日丁寧に打つ麺はしっかりとしたコシと滑らかな喉越しが自慢で、いりこの旨みが効いた澄んだ出汁との相性も抜群だ。揚げたての天ぷらやおにぎりを添えて本場さながらの讃岐うどんを味わえば、午後の街歩きへの活力がみるみる湧いてくる。',
      surprise:
        '愛媛県でありながら香川県の文化圏と隣り合う四国中央市ならではの、レベルの高いうどん文化を間近に体感できる一軒だ。昼時には地元の常連客で活気に満ちており、飾らない店内の雰囲気ごと美味しく味わえるのがなんとも嬉しい名店と誰もがきっと感じるだろう。',
      hook: 'うどんで満たされたら、北へ徒歩9分のくう食堂でカフェタイムを楽しもう。',
      f7_fragment: '県境の街で出会う、強いコシと旨み深い出汁の本格さぬきうどん。',
      f7_full: '三島宮川の「ぴっぴや」でコシのある本格讃岐うどんといりこ出汁の旨みを堪能し、四国ならではの豊かな麺文化に触れた。',
      image_prompt:
        'Bustling Japanese sanuki udon diner table with a bowl of thick glossy udon noodles in clear broth topped with tempura and green scallions, no text, no people.',
    },
    {
      name: 'くう食堂',
      spot_type: '休憩',
      description:
        '三島宮川にあるアートで個性的なリノベーション空間が人気のカフェ。手作りスイーツや珈琲、焼き立てパンでほっと一息つける。営業時間11:00〜夕方、不定休。',
      address: '愛媛県四国中央市三島宮川2-2-33',
      prefecture: '愛媛県',
      municipality: '四国中央市',
      lat: 33.985371,
      lng: 133.550593,
      clue: 'ぴっぴやから北へ徒歩9分、温かなアート空間が迎える「くう食堂」で一息つこう（11:00〜夕方、不定休）。手作りの優しいおやつや珈琲を味わいながら午後の散策に備えたい。',
      surprise:
        '扉を開けると木の温もりと遊び心あるアートな内装が広がり、思わず笑顔がこぼれる居心地の良さがある。丁寧に作られたスイーツと香り高い珈琲を味わいながら過ごす時間は、伝統ある商店街の散策に心地よいリズムを添えてくれる素敵な休憩カフェの場所といえる。',
      hook: 'カフェを出たら、西南西へ徒歩5分の興願寺へお参りしよう。',
      f7_fragment: '遊び心ある空間と手作りおやつが迎える、三島宮川の寛ぎカフェ。',
      f7_full: '三島宮川の「くう食堂」で温かな空間と珈琲・スイーツを楽しみ、寺社巡りへ向かう午後の穏やかなひとときを過ごした。',
      image_prompt:
        'Artistic renovated Japanese cafe interior with warm wood tables, handmade ceramic coffee mug, pastry and creative wall art, no text, no people.',
    },
    {
      name: '興願寺',
      spot_type: '見どころ',
      description:
        '愛媛県内でも数少ない貴重な三重塔（県指定文化財）や享和元年建立の仁王門を有する真言宗の古刹。静かな境内に美しい伽藍が佇む。参拝自由。',
      address: '愛媛県四国中央市三島宮川3-19-16',
      prefecture: '愛媛県',
      municipality: '四国中央市',
      lat: 33.984107,
      lng: 133.547256,
      clue: 'くう食堂から西南西へ徒歩5分、歴史ある仁王門をくぐって古刹「興願寺」の境内へ足を踏み入れよう（参拝自由）。四国中央市の有形文化財に指定される貫禄ある仁王門の先には、愛媛県内でも数少ない貴重な三重塔（県指定文化財）が凛とした姿でそびえ立っている。木組みの軒先が織りなす優美な曲線を見上げながら、古くから地域の信仰を集めてきた寺院の静謐な空気を心からずっと胸いっぱいに感じたい。',
      surprise:
        '住宅街のすぐそばにこれほど整った古刹と三重塔が静かに守られていることに深い感動を覚える。軒の反りや彫刻の細部まで美しく保たれた塔を眺めていると、街の喧騒から離れた穏やかな時間がゆったりと心の中に流れていくに違いない。実に素晴らしい古刹といえる。',
      hook: '興願寺を後にしたら、西へ徒歩4分の三島神社に詣でて旅を結ぼう。',
      f7_fragment: '貴重な三重塔と仁王門が静かな威容を誇る、三島宮川の真言宗の古刹。',
      f7_full: '「興願寺」の仁王門をくぐり県指定文化財の優雅な三重塔を仰いで、歴史深い伊予三島の静謐な祈りの空間に深く触れた。',
      image_prompt:
        'Serene ancient Buddhist temple of Koganji in Ehime featuring an elegant three-story wooden pagoda rising above stone lanterns and green pines, no text, no people.',
    },
    {
      name: '三島神社',
      spot_type: '見どころ',
      description:
        '奈良時代初期の創建と伝わり、製紙業の繁栄を支える「紙産業のお宮」としても篤く信仰される古社。境内の旧本殿や古代祭祀遺跡の磐座が印象的。参拝自由。',
      address: '愛媛県四国中央市三島宮川1-1-53',
      prefecture: '愛媛県',
      municipality: '四国中央市',
      lat: 33.985209,
      lng: 133.545145,
      clue: '興願寺から西へ徒歩4分、伊予三島の地名の由来ともなった古社「三島神社」で旅を締めくくろう（参拝自由）。大三島の大山祇神社から神霊を勧請して創建されたと伝わる歴史深いお宮で、現在は日本一の製紙のまちを見守る「紙産業のお宮」としても篤く崇敬されている。市指定文化財の旧本殿や古代祭祀の遺跡である大きな磐座に触れ、紙のまち・伊予三島の深い誇りをこれからも忘れることなく心に刻み込もう。',
      surprise:
        '鳥居をくぐって鎮守の杜に踏み入ると、製紙工場の煙突を望む現代の産業都市の傍らで、古代から続く磐座の神秘がそのまま息づいていることに圧倒される。地域の発展と千年以上もの信仰がひとつに結びついた、伊予三島ならではの聖地と誰もが心から思うだろう。',
      hook: '',
      f7_fragment: '古代の磐座を残し「紙産業のお宮」として崇敬される、伊予三島の古社。',
      f7_full: '紙産業の守護神「三島神社」で古代の磐座と荘厳な社殿に手を合わせ、ものづくりのまち・伊予三島の散策を清らかに結んだ。',
      image_prompt:
        'Ancient Shinto shrine of Mishima Jinja in Ehime with a stately wooden sanctuary, sacred giant rock formation and lush green forest, no text, no people.',
    },
  ],
};
