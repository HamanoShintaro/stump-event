export default {
  slug: 'matsudo',
  station_order: 632,
  station: '松戸',
  line: 'JR常磐線・京成松戸線',
  area_name: '松戸・水戸徳川ゆかりの丘と珈琲の街',
  prefecture: '千葉県',
  municipality: '松戸市',
  category: '歴史と喫茶',
  budget_tier: 2,
  tags: ['千葉県', '松戸市', '松戸駅', '戸定邸', '松戸神社'],
  style_genre: 'fountain_pen_sketchbook',
  title: '松戸・水戸徳川ゆかりの丘と純喫茶を歩く',
  description:
    'JR常磐線松戸駅から、昭和の面影を残す「純喫茶 若松」と「松戸神社」、地元に親しまれる「珈琲店 川名」と老舗和菓子店「和菓子 峰月」を経て、水戸藩最後の藩主・徳川昭武が暮らした国重要文化財「戸定邸（戸定が丘歴史公園）」を巡る散策路。',
  eyecatch_prompt:
    'Fountain pen sketchbook and transparent watercolor illustration of Matsudo town showing a nostalgic Showa coffee house, historic Shinto shrine torii gate beside willow stream, traditional wagashi sweet shop and the grand Meiji-era wooden residence Tojo-tei surrounded by green hills, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '昭和の喫茶文化と水戸徳川ゆかりの邸宅が繋がる松戸を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「純喫茶 若松」の階段を上がった空間で、昭和の香り漂う珈琲を味わった瞬間',
      subtext:
        '駅西口の雑居ビルの二階に広がるレトロな時間が、松戸の街歩きの幕開けを優しく彩った。',
      badge: {
        code: 'matsudo_wakamatsu',
        name_ja: '松戸・純喫茶若松の常連客',
        subtitle_en: 'Guest of Cafe Wakamatsu',
        description:
          '純喫茶 若松を訪ね、昭和の面影を残す落ち着いた喫茶空間で珈琲の時間を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a nostalgic Japanese kissaten coffee cup and saucer on a velvet-lined wooden table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「松戸神社」の清らかな境内で、水戸光圀ゆかりの銀杏と鎮守の杜を仰いだ瞬間',
      subtext:
        '坂川のせせらぎのそばに佇む古社で、松戸宿の歴史と人々の祈りに静かに触れた。',
      badge: {
        code: 'matsudo_jinja',
        name_ja: '松戸宿・松戸神社の杜を拝みし者',
        subtitle_en: 'Visitor of Matsudo Shrine',
        description:
          '松戸神社を訪ね、水戸光圀ゆかりの伝説が残る歴史ある鎮守の社に参拝した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a vermilion Shinto shrine torii gate framed by a tall green ginkgo tree and stone lanterns, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「和菓子 峰月」の店先で、矢切の渡しをモチーフにした郷土銘菓に出会った瞬間',
      subtext:
        '戸定の丘へ向かう途中で立ち寄った老舗の手づくり菓子に、松戸の風景が映っていた。',
      badge: {
        code: 'matsudo_hogetsu',
        name_ja: '松戸・峰月の郷土銘菓を買いし者',
        subtitle_en: 'Taster of Matsudo Wagashi',
        description:
          '和菓子 峰月を訪ね、松戸の情景を映した老舗の手づくり和菓子を手土産に選んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring delicate boat-shaped Japanese wagashi sweets on a bamboo leaf beside green tea, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「戸定邸」の長い縁側に座り、徳川昭武が愛した名園と富士山方面の眺めを望んだ瞬間',
      subtext:
        '明治期の姿そのままに残る国重要文化財の邸宅で、水戸徳川家の雅な暮らしを体感した。',
      badge: {
        code: 'matsudo_tojotei',
        name_ja: '戸定が丘・徳川昭武の邸を巡りし者',
        subtitle_en: 'Explorer of Tojo-tei Villa',
        description:
          '戸定邸を訪ね、国指定重要文化財の明治木造邸宅と日本の歴史公園百選の庭園に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a wide polished wooden veranda of Meiji-era Tojo-tei looking out onto a manicured Japanese lawn garden and pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'matsudo_complete',
    name_ja: '松戸・徳川ゆかりの丘と珈琲を巡る旅人',
    subtitle_en: 'Walker of Matsudo Town',
    description:
      '純喫茶 若松から松戸神社、珈琲店 川名、和菓子 峰月、戸定邸までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a classic kissaten coffee cup, a shrine ginkgo tree and the Meiji wooden veranda of Tojo-tei, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '純喫茶 若松',
      spot_type: '休憩',
      description:
        '松戸駅西口からすぐのビル2階に佇む昭和レトロな老舗純喫茶。落ち着いた店内で香り高い珈琲や軽食を味わえる。営業時間10:00〜18:00、不定休。',
      address: '千葉県松戸市本町18-2',
      prefecture: '千葉県',
      municipality: '松戸市',
      lat: 35.78486,
      lng: 139.899047,
      clue: 'JR常磐線の松戸駅西口に出たら、まずは駅のほど近くに佇む昭和レトロな「純喫茶 若松」で一息つこう（10:00〜18:00、不定休）。ビルの二階へ続く階段を上ると、現代の喧騒から切り離されたような落ち着いた喫茶空間が広がり、香り高い珈琲や定番の軽食が旅人を迎えてくれる。古くから珈琲文化が根付く松戸の街らしい朝の時間を楽しみながら、徳川ゆかりの丘を目指す散策をここから始めたい。',
      surprise:
        '駅前の賑やかな通りのすぐそばに、昭和の空気をそのまま閉じ込めたような静かな純喫茶が守られているのが嬉しい。カップを傾けながら窓の外を眺めていると、街の移り変わりを見守り続けてきた老舗ならではの温かな包容力が心地よく伝わってくる。',
      hook: '珈琲で目覚めたら、南南西へ徒歩8分の松戸神社へお参りしよう。',
      f7_fragment: '松戸駅西口そばの二階で昭和の時間を守り続ける、落ち着いた純喫茶。',
      f7_full: '駅西口の「純喫茶 若松」で昭和の趣を残す静かな空間と珈琲を味わい、珈琲の街・松戸の散策を心地よく始めた。',
      image_prompt:
        'Nostalgic Japanese Showa-era kissaten cafe interior with patterned armchairs, dark wood tables and a steaming porcelain cup of coffee, no text, no people.',
    },
    {
      name: '松戸神社',
      spot_type: '見どころ',
      description:
        '江戸時代初期の創建と伝えられ、水戸光圀（水戸黄門）ゆかりの伝説も残る松戸の総鎮守。坂川沿いの緑豊かな境内が親しまれる。参拝自由（社務所8:30〜17:00）。',
      address: '千葉県松戸市松戸1457',
      prefecture: '千葉県',
      municipality: '松戸市',
      lat: 35.780621,
      lng: 139.897766,
      clue: '純喫茶 若松から南南西へ徒歩8分、旧水戸街道と坂川のそばに鎮座する「松戸神社」へ詣でよう（社務所8:30〜17:00）。江戸時代初期から松戸宿の総鎮守として崇敬を集めてきた古社で、水戸光圀公が鷹狩りの際に立ち寄ったという逸話も残る御神木や美しい社殿が境内を彩る。川辺の柔らかな風を感じながら静かに手を合わせ、これから向かう水戸徳川家ゆかりの戸定の丘へと歴史の糸を繋ぎたい。',
      surprise:
        '駅周辺の商業地から数分歩いただけで、坂川のせせらぎと大きな木々に包まれた穏やかな神域に出会えるのが松戸の魅力といえる。水戸街道の要衝として栄えた宿場町の面影と地域の厚い信仰が、端正な鳥居と拝殿の佇まいから静かに伝わってくる。',
      hook: '参拝を終えたら、北東へ徒歩7分の老舗・珈琲店 川名でほっと一息つこう。',
      f7_fragment: '坂川のほとりに鎮座し水戸光圀の逸話も残る、松戸宿の総鎮守。',
      f7_full: '坂川沿いの「松戸神社」で水戸光圀ゆかりの境内を歩き、旧宿場町・松戸の穏やかな祈りと歴史の気配に触れた。',
      image_prompt:
        'Serene Japanese Shinto shrine of Matsudo Jinja beside gentle river with vermilion torii gate, tall ginkgo tree and wooden worship hall, no text, no people.',
    },
    {
      name: '珈琲店 川名',
      spot_type: '休憩',
      description:
        '旧水戸街道沿いに構える松戸の老舗喫茶店。丁寧なハンドドリップ珈琲と落ち着いた雰囲気で地元の人々に親しまれる。営業時間9:00〜20:00頃（平日〜20:30）、日曜定休。',
      address: '千葉県松戸市松戸1230',
      prefecture: '千葉県',
      municipality: '松戸市',
      lat: 35.783583,
      lng: 139.900777,
      clue: '松戸神社から北東へ徒歩7分、旧街道沿いの「珈琲店 川名」へ立ち寄ろう（9:00〜20:30頃、日曜休）。丁寧な一杯で散策の合間にゆっくり一息つきたい。',
      surprise:
        '駅前の喧騒を離れた旧街道の街並みにしっくり溶け込む店構えが、珈琲の街・松戸の奥深さを物語っている。一杯ずつ丁寧に淹れられた珈琲の優しい苦味と香ばしさを味わうと、次の和菓子店や高台の邸宅へ向かう足取りが自然と軽やかになっていく。',
      hook: '珈琲で整えたら、西へ徒歩3分の老舗・和菓子 峰月でお土産を選ぼう。',
      f7_fragment: '旧水戸街道沿いで丁寧な珈琲を淹れ続ける、松戸の落ち着いた老舗喫茶。',
      f7_full: '旧街道沿いの「珈琲店 川名」で丁寧に淹れられた珈琲を味わい、地域に根付く松戸の豊かな喫茶文化に触れた。',
      image_prompt:
        'Cozy classic Japanese neighborhood coffee shop wooden counter with glass siphon brewers, warm lamps and ceramic coffee cup, no text, no people.',
    },
    {
      name: '和菓子 峰月',
      spot_type: '買い物',
      description:
        '松戸の歴史や江戸川の風景を映した和菓子を手づくりする老舗菓子舗。名物「矢切の渡し舟」や季節の上生菓子が人気。営業時間9:00〜19:00、火曜定休。',
      address: '千葉県松戸市松戸1281',
      prefecture: '千葉県',
      municipality: '松戸市',
      lat: 35.78355,
      lng: 139.898545,
      clue: '川名から西へ徒歩3分、老舗の風情が漂う「和菓子 峰月」へ立ち寄ろう（9:00〜19:00、火曜休）。松戸の風景や江戸川にまつわる郷土の物語を映した手づくりの銘菓が評判の店で、特に舟の形を模した「矢切の渡し舟」や四季の移ろいを表現した上生菓子が美しくずらりと並ぶ。丁寧な手仕事が光る上品な和菓子を旅のお土産に選びながら、城下町さながらの落ち着いた街の空気を味わいたい。',
      surprise:
        '店頭に並ぶ和菓子の一つひとつに松戸や江戸川にちなんだ名前と情景が込められており、眺めているだけで地域の文化への愛情が伝わってくる。老舗ならではの確かな技と控えめな甘さが魅力で、戸定邸へ向かう前の楽しい買い物スポットになっている。',
      hook: '和菓子を手にしたら、南へ徒歩11分の戸定が丘・戸定邸へ向かい旅を結ぼう。',
      f7_fragment: '「矢切の渡し舟」など松戸の情景を手づくり菓子に映す、老舗和菓子舗。',
      f7_full: '老舗「和菓子 峰月」を訪ね、江戸川や松戸の情景を映した手づくりの銘菓に触れて旅の楽しい手土産を選んだ。',
      image_prompt:
        'Traditional Japanese wagashi shop wooden display box with seasonal crafted confections and boat-shaped sweet pastries, no text, no people.',
    },
    {
      name: '戸定邸（戸定が丘歴史公園）',
      spot_type: '見どころ',
      description:
        '最後の大名・徳川昭武が明治17年（1884年）に建てた邸宅で国の重要文化財。明治の面影をそのまま残す木造和風建築と日本の歴史公園100選の庭園が広がる。9:30〜17:00、月曜休。',
      address: '千葉県松戸市松戸714-1',
      prefecture: '千葉県',
      municipality: '松戸市',
      lat: 35.777476,
      lng: 139.899189,
      clue: '峰月から南へ徒歩11分、緑の小高い丘に建つ国重要文化財「戸定邸（戸定が丘歴史公園）」で散策を締めくくろう（9:30〜17:00、月曜休）。水戸藩最後の藩主であり、パリ万博にも使節として赴いた徳川昭武が晩年を過ごした明治期の邸宅で、主屋や庭園が往時のまま大切に保存されている。磨き抜かれた長い縁側から美しい芝生庭園を眺め、松戸の品格ある歴史の深い余韻にこれからも浸りたい。',
      surprise:
        '都心からほど近い松戸の丘の上に、これほど格調高く静謐な徳川家の明治邸宅が完全な形で残されていることに深く感動する。畳の部屋と開放的な縁側、洋風のエッセンスを取り入れた庭園が織りなす風景は、歴史好きにも建築好きにも忘れがたい名所といえる。',
      hook: '',
      f7_fragment: '最後の水戸藩主・徳川昭武が暮らした、国重文の明治邸宅と美しい名園。',
      f7_full: '戸定が丘の「戸定邸」で明治期の優雅な木造建築と名園を歩き、珈琲と歴史が息づく松戸の散策を晴れやかに結んだ。',
      image_prompt:
        'Historic Meiji-era wooden residence Tojo-tei with wide polished veranda, tatami rooms and tranquil manicured Japanese lawn garden, no text, no people.',
    },
  ],
};
