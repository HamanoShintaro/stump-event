export default {
  slug: 'nagano',
  station_order: 606,
  station: '長野駅',
  line: 'JR信越本線・北陸新幹線',
  area_name: '長野・善光寺表参道と門前町',
  prefecture: '長野県',
  municipality: '長野市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['長野県', '長野市', '長野駅', '善光寺', '門前町'],
  style_genre: 'nihonga_mineral_gold',
  title: '善光寺表参道と門前の香りを辿る',
  description:
    '新幹線も発着する長野駅から中央通りを北へ進み、大門町の老舗そば処や七味唐辛子の本店、仲見世通りの甘味処を経て、天台宗本坊の大勧進と国宝・善光寺本堂へと至る、門前町の営みと千年の祈りを結ぶ王道の散策路。',
  eyecatch_prompt:
    'Nihonga mineral pigment and gold leaf style illustration of Zenkoji Temple main hall in Nagano, stone-paved Omotesando approach lined with historic spice shop, traditional soba house and wooden merchant buildings, misty Shinshu mountains in background, no text, no people.',
  question:
    '石畳の表参道を善光寺へと向かう道中で、あなたが誰かに語りたくなる景色はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '無宗派で参拝者を迎え入れる国宝「善光寺」の荘厳な撞木造りの本堂',
      subtext:
        '長野駅から伸びる一本の参道がすべてこの大伽藍へ繋がっていたと実感する瞬間だった。',
      badge: {
        code: 'nagano_zenkoji',
        name_ja: '善光寺・千年の祈りを結ぶ者',
        subtitle_en: 'Pilgrim of Zenkoji Temple',
        description:
          '国宝・善光寺を訪ね、石畳の表参道を歩ききって大伽藍の前で祈りを捧げた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the sweeping cypress-bark roof of Zenkoji Temple main hall with rising incense smoke, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「根元 八幡屋礒五郎 本店」の店先で出会った、色とりどりの七味唐辛子缶',
      subtext:
        '唐辛子や山椒が織りなす爽やかな芳香に、古くから続く門前商いの誇りが香っていた。',
      badge: {
        code: 'nagano_yawataya',
        name_ja: '大門町・七味の香りを携える者',
        subtitle_en: 'Keeper of Shinshu Seven-Spice',
        description:
          '根元 八幡屋礒五郎 本店を訪ね、信州の食卓を彩る老舗七味唐辛子の芳香に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring classic red tin canisters of Japanese seven-spice chili surrounded by dried red peppers and sansho berries, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 1,
      text: '「門前そば処 藤木庵」の白暖簾をくぐり、信州の手打ちそばを啜ったひととき',
      subtext:
        '二百年近く参拝者の空腹を満たしてきた老舗のつゆとそばの香りが、旅の歩みに力をくれた。',
      badge: {
        code: 'nagano_fujikian',
        name_ja: '門前老舗・手打ちそばを味わいし者',
        subtitle_en: 'Taster of Monzen Soba',
        description:
          '門前そば処 藤木庵を訪ね、善光寺参りの人々に愛されてきた信州そばの味わいに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a bamboo tray of handmade buckwheat soba noodles beside a ceramic dipping cup and green onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「善光寺大勧進」の蓮池のほとりで、参道の賑わいを離れて耳を澄ませた時間',
      subtext:
        '水面に映る屋根の曲線と静かな木立が、本堂参拝を前にした心を穏やかに整えてくれた。',
      badge: {
        code: 'nagano_daikanjin',
        name_ja: '大勧進・蓮池の静寂を知る者',
        subtitle_en: 'Visitor of Zenkoji Daikanjin',
        description:
          '善光寺大勧進を訪ね、天台宗本坊の穏やかな境内と蓮池のほとりで静かな時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting calm green lotus leaves on a temple pond before a traditional stone bridge and tiled roof, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nagano_complete',
    name_ja: '長野・善光寺表参道の物語を歩みし者',
    subtitle_en: 'Walker of Zenkoji Omotesando',
    description:
      '藤木庵から八幡屋礒五郎 本店、甘味処鎌倉、善光寺大勧進、善光寺までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining Zenkoji temple roof silhouette, a red spice tin, and stone-paved approach trees, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '門前そば処 藤木庵',
      spot_type: '食事',
      description:
        '二百年近く続く大門町の老舗そば店。石臼挽きの信州そばと香り豊かなつゆが善光寺参りの人々に親しまれている。営業時間11:00〜15:00、火・木曜定休。',
      address: '長野県長野市大門町67',
      prefecture: '長野県',
      city: '長野市',
      lat: 36.656625,
      lng: 138.187611,
      clue: '長野駅から中央通りを北へ進み、門前町の風情が濃くなる大門町で白暖簾が揺れる「門前そば処 藤木庵」に着く（11:00〜15:00、火・木曜定休）。二百年近く続く老舗は、善光寺参りの人々に長く愛されてきた名店だ。石臼で挽いたそば粉を丁寧に打った麺は喉越しがよく、すするたびに信州そばならではの清らかな香りが広がる。木造の落ち着いた店内で、つゆの旨みとともに門前町の昼下がりを味わいたい。',
      surprise:
        '代々参拝客の空腹を満たし続けてきた老舗だけあり、香り立つ出汁の余韻にも堂々とした風格が漂う。長い石畳の表参道をさらに北へ歩く前に味わう手打ちそばの一口が、旅の身体にすっと染み渡り、これから先の道のりへ確かな力を静かに、そして力強く与えてくれる。',
      hook: '藤木庵でそばを味わったら、北へ徒歩1分の根元 八幡屋礒五郎 本店へ向かおう。',
      f7_fragment: '白暖簾の奥で打ち継がれてきた、門前老舗の香り高き手打ちそば。',
      f7_full: '大門町の老舗「門前そば処 藤木庵」を訪ね、善光寺参りの人々に長く親しまれてきた信州そばの豊かな味わいを堪能した。',
      image_prompt:
        'Traditional Japanese soba restaurant wooden facade with white noren curtain and handmade buckwheat soba noodles on a bamboo tray, no text, no people.',
    },
    {
      name: '根元 八幡屋礒五郎 本店',
      spot_type: '買い物',
      description:
        '古くから善光寺境内で七味唐辛子を売り始めたという老舗の本店。定番の七味缶に加え、好みに合わせたカスタム調合も人気。営業時間9:00〜18:30、無休。',
      address: '長野県長野市大門町83',
      prefecture: '長野県',
      city: '長野市',
      lat: 36.657278,
      lng: 138.187666,
      clue: '藤木庵から石畳の表参道を北へ徒歩1分、大門町の角に鮮やかな赤色の看板を掲げる「根元 八幡屋礒五郎 本店」がある（9:00〜18:30、無休）。古くから善光寺の境内で七味唐辛子を売り始めたという老舗だ。店内へ入ると、唐辛子や陳皮、山椒、麻種などが織りなす爽やかで芳醇な香りが立ち込める。好みに合わせて調合してもらえるカスタム七味は、旅の記憶を食卓へ持ち帰るのにぴったりだ。',
      surprise:
        'お寺のお守りのようにブリキ缶のデザインが親しまれ、信州の暮らしに欠かせぬ存在として長く受け継がれてきた。店頭に並ぶ色とりどりの缶を眺めるだけでも、門前町で培われてきた商いの誇りと粋な遊び心が生き生きと伝わり、思わず温かな笑みがこぼれてくる。',
      hook: '七味の本店を後にしたら、北へ徒歩4分の甘味処鎌倉 善光寺仲見世通り店でひと休みしよう。',
      f7_fragment: '大門町の角にふわりと漂う、信州伝統の七味唐辛子の豊かな芳香。',
      f7_full: '「根元 八幡屋礒五郎 本店」を訪ね、香り豊かな七味唐辛子と門前町で長く受け継がれてきた商いの歴史にじっくり触れた。',
      image_prompt:
        'Historic Japanese spice shop interior displaying colorful red tin cans of seven-spice chili pepper on warm wooden shelves, no text, no people.',
    },
    {
      name: '甘味処鎌倉 善光寺仲見世通り店',
      spot_type: '休憩',
      description:
        '本わらび粉を使った手作りわらび餅とドリンクが人気の和風甘味処。仲見世通りの散策途中に気軽に立ち寄れる。営業時間10:00〜17:00、年中無休。',
      address: '長野県長野市元善町486',
      prefecture: '長野県',
      city: '長野市',
      lat: 36.659398,
      lng: 138.187512,
      clue: '七味本店から仲見世通りを北へ徒歩3分、和の風情漂う「甘味処鎌倉 善光寺仲見世通り店」でひと息つこう（10:00〜17:00、無休）。もっちりとした手作りわらび餅で足を休めたい。',
      surprise:
        '木造の商店が軒を連ねる仲見世通りの活気の中で、とろけるような口当たりのわらび餅と香ばしいきな粉の甘みが心地よい休息をもたらしてくれる。ひと口味わうことで、本堂参拝へ向かう足取りと気分が軽やかに整っていき、門前歩きの楽しさがいっそう豊かに深まる。',
      hook: '甘味処で寛いだら、北北西へ徒歩2分の善光寺大勧進へ向かおう。',
      f7_fragment: '仲見世通りの木造建築に寄り添う、手作りわらび餅の優しい甘み。',
      f7_full: '仲見世通りの「甘味処鎌倉」で香ばしいきな粉のわらび餅を味わい、本堂へ向かう参道歩きの合間に穏やかに一息ついた。',
      image_prompt:
        'Traditional Japanese sweets shop counter on a stone temple approach displaying handmade warabimochi coated with roasted soybean flour and green tea, no text, no people.',
    },
    {
      name: '善光寺大勧進',
      spot_type: '見どころ',
      description:
        '善光寺の天台宗本坊。美しい蓮池と石橋を抱く静かな境内に書院や宝物館が佇む。境内自由（宝物館8:00〜15:00頃・有料）、無休。',
      address: '長野県長野市大字長野元善町492',
      prefecture: '長野県',
      city: '長野市',
      lat: 36.660343,
      lng: 138.186703,
      clue: '仲見世通りの賑わいを抜け、山門の左手前に広がる石橋を渡ると、天台宗の本坊「善光寺大勧進」の静かな門構えが現れる（境内自由・無休）。境内には美しい蓮池や書院が佇み、大通りの活気とは対照的な深い静寂に包まれている。大勧進は善光寺の護持を担う由緒ある寺院であり、池のほとりを歩くだけでも心が洗われる心地になる。季節ごとの草花や木々の緑を眺めながら、本堂参拝へ向けて気持ちを静かに整えよう。',
      surprise:
        '多くの参拝客がまっすぐ山門へ向かうすぐ隣に、これほど穏やかな水辺と庭園の時間が流れていることに驚かされる。蓮の葉が揺れる静かな池の向こうに望む伝統的な屋根の美しい曲線が、信州の澄んだ青空によく映え、歩く者の心を穏やかにやさしく鎮めてくれる。',
      hook: '大勧進の静寂を味わったら、北東へ徒歩3分の善光寺本堂へ詣でよう。',
      f7_fragment: '蓮池のほとりに凛と佇む、天台宗本坊の静かな門前と庭園の気配。',
      f7_full: '「善光寺大勧進」の蓮池のほとりを歩き、表参道の賑わいから一歩入った本坊の静謐な空気に心ゆくまでじっくりと触れた。',
      image_prompt:
        'Serene Buddhist temple precinct of Zenkoji Daikanjin with lotus pond, stone bridge and traditional tiled roofs under gentle light, no text, no people.',
    },
    {
      name: '善光寺',
      spot_type: '見どころ',
      description:
        '特定宗派に属さず誰をも受け入れる信州の古刹。国宝の本堂は東日本最大級の木造建築として知られ、お戒壇巡りなど深い信仰の体験が息づく。境内終日開放、無休。',
      address: '長野県長野市大字長野元善町491',
      prefecture: '長野県',
      city: '長野市',
      lat: 36.661575,
      lng: 138.187703,
      clue: '大勧進を出て再び石畳の参道へ戻れば、国宝「善光寺」本堂の壮大な撞木造りの大屋根が目の前に迫ってくる（境内終日開放・無休）。「遠くとも一度は参れ善光寺」と謳われてきた古刹は、特定の宗派に属さず誰をも受け入れる懐の広さで千四百年ものあいだ人々の祈りを集めてきた。香炉の煙を浴びながら深々と頭を垂れ、長野駅から歩いてきた一本の道がすべてこの場所へ繋がっていたのだと静かに胸に刻もう。',
      surprise:
        '本堂の床下を真っ暗な中で壁伝いに進む「お戒壇巡り」は、視覚を閉ざすことで今この瞬間の感覚を研ぎ澄ませてくれる貴重な体験だ。長い歴史の重みと全国から訪れる人々の温かい祈りが、大伽藍の隅々にまで今なお静かに、そしてどこまでも確かに息づいている。',
      hook: '',
      f7_fragment: '千年の祈りを受け止め続けてきた、信州・善光寺の荘厳な大伽藍。',
      f7_full: '国宝「善光寺」の荘大な本堂に詣で、長野駅から表参道を辿ってきた一本の道の結びを静かに、そして深く心に刻み込んだ。',
      image_prompt:
        'Grand wooden main hall of Zenkoji Temple in Nagano with sweeping cypress-bark roof and bronze incense burner smoking in the stone courtyard, no text, no people.',
    },
  ],
};
