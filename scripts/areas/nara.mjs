export default {
  slug: 'nara',
  station_order: 662,
  station: '奈良',
  line: 'JR奈良線',
  area_name: '奈良・ならまちと天平の杜',
  prefecture: '奈良県',
  municipality: '奈良市',
  category: '歴史と寺社',
  budget_tier: 3,
  tags: ['奈良県', '奈良市', '奈良駅', 'ならまち', '世界遺産'],
  style_genre: 'ukiyo_e_modern',
  title: '奈良・ならまちの格子戸から東大寺の大仏へ',
  description:
    'JR奈良駅から、高速餅つきで名高い「中谷堂」、格子戸の町家が残る「ならまち格子の家」、天平文化を今に伝える世界遺産「興福寺」、朱塗りの回廊と釣燈籠が幻想的な「春日大社」、大仏さまが鎮座する「東大寺」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Nara showing the wooden lattice machiya houses of Naramachi, the majestic Great Buddha Hall of Todai-ji with deer resting on green grass, vermilion corridors of Kasuga Taisha with hanging bronze lanterns, and Kofuku-ji temple roofs, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '町家の暮らしが息づくならまちと千年の社寺を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「中谷堂」で、つきたてのよもぎ餅の香りと柔らかな食感に笑顔になった瞬間',
      subtext:
        '三条通の賑わいの中で手にした温かい餅が、古都・奈良の散策を力強く後押ししてくれた。',
      badge: {
        code: 'nara_nakatanidou',
        name_ja: '奈良・名物よもぎ餅を味わいし者',
        subtitle_en: 'Taster of Nakatanidou Yomogi Mochi',
        description:
          '中谷堂を訪ね、つきたての香り豊かなよもぎ餅を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a freshly pounded deep green mugwort mochi rice cake dusted with golden roasted soybean flour on a wooden tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「興福寺」の広大な境内を歩き、天平の伽藍と中金堂の堂々たる姿を見上げた瞬間',
      subtext:
        '奈良公園の入り口で静かに時を刻む寺の佇まいが、古都の歴史の厚みを教えてくれた。',
      badge: {
        code: 'nara_kofukuji',
        name_ja: '奈良・天平の伽藍を仰ぎ見し者',
        subtitle_en: 'Visitor of Kofuku-ji Temple',
        description:
          '興福寺を訪ね、古都奈良を象徴する壮麗な伽藍の境内を巡った証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the sweeping tiled roof and vermilion pillars of Kofuku-ji Central Golden Hall beneath clear blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「春日大社」の朱塗りの回廊で、数多くの燈籠が織りなす静謐な光景に出会った瞬間',
      subtext:
        '春日山の原生林に包まれた神域の空気に、千年続く祈りの清らかさを感じた。',
      badge: {
        code: 'nara_kasuga',
        name_ja: '奈良・朱塗りの神域に祈りし者',
        subtitle_en: 'Worshipper at Kasuga Taisha',
        description:
          '春日大社を訪ね、朱塗りの回廊と燈籠が連なる千年の神域を参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a vermilion shrine corridor lined with ornate hanging bronze lanterns framed by deep forest greenery, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「東大寺」の大仏殿を仰ぎ見ながら、悠久の時を見守る盧舎那仏と向き合った瞬間',
      subtext:
        '圧倒的なスケールの木造建築と大仏さまの穏やかな眼差しに、旅の締めくくりが満ち足りた。',
      badge: {
        code: 'nara_todaiji',
        name_ja: '奈良・大仏殿の悠久に触れし者',
        subtitle_en: 'Visitor of Todai-ji Great Buddha Hall',
        description:
          '東大寺を訪ね、世界最大級の木造建築・大仏殿と大仏さまの威容に触れた証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the grand curved roof of Todai-ji Great Buddha Hall with golden roof ornaments and a tranquil deer resting nearby, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nara_complete',
    name_ja: '奈良・ならまちと天平の杜を巡る旅人',
    subtitle_en: 'Walker of Nara',
    description:
      '中谷堂からならまち格子の家、興福寺、春日大社、東大寺までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining Todai-ji Great Buddha Hall, vermilion hanging lanterns of Kasuga Taisha, and a gentle Nara deer, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '中谷堂',
      spot_type: '買い物',
      description:
        '三条通にある高速餅つきで有名な和菓子店。国産もち米とよもぎを使ったつきたてのよもぎ餅が名物。10:00〜19:00（売切次第終了）、不定休。',
      address: '奈良県奈良市橋本町29',
      prefecture: '奈良県',
      municipality: '奈良市',
      lat: 34.681943,
      lng: 135.8289,
      clue: 'JR奈良駅から三条通を東へ歩いて、高速餅つきで全国に知られる名店「中谷堂」を訪ねよう（10:00〜19:00・売切次第終了、不定休）。厳選された国産もち米と香り高いよもぎ、北海道十勝産の小豆あんを使い、店頭でつきたての「よもぎ餅」を販売している。きな粉をたっぷりとまとった柔らかな餅の温かさで、千年の古都・奈良の長い歴史散策をこれからも笑顔とともに軽やかに踏み出したい。',
      surprise:
        '店頭で行われる息の合った高速餅つきの実演は、餅にコシと滑らかさを生み出すための伝統の技であり、街角の名物風景となっています。',
      hook: 'よもぎ餅を味わったら、南南東のならまち格子の家へ歩こう。',
      f7_fragment: '三条通の高速餅つきで有名な和菓子店、つきたてのよもぎ餅が名物。',
      f7_full:
        '「中谷堂」でつきたての香り豊かなよもぎ餅を味わい、古都・奈良の旅を爽やかに始めた。',
      image_prompt:
        'Lively Japanese street shop illustration of Nakatanidou in Nara, wooden storefront facing三条通 shopping street, steaming wooden mortar and fresh deep green yomogi mochi rice cakes coated in golden kinako flour, warm morning light, no text, no letters.',
    },
    {
      name: 'ならまち格子の家',
      spot_type: '見どころ',
      description:
        '間口が狭く奥行きが深い伝統的な町家「うなぎの寝床」を再現した無料見学施設。採光や風通しの工夫に触れられる。9:00〜17:00、月曜休（祝日時は翌平日）。',
      address: '奈良県奈良市元興寺町44',
      prefecture: '奈良県',
      municipality: '奈良市',
      lat: 34.675011,
      lng: 135.830736,
      clue: '「ならまち格子の家」で古都の町家を訪ねよう（9:00〜17:00・月曜休、無料）。間口が狭く奥行きが深い伝統的な住まいの採光と風通しの知恵に触れたい。',
      surprise:
        '表通りに面した細かな格子は、外からの視線を遮りつつ室内に柔らかな光を取り込み、家族の暮らしを守る機能も果たしていました。',
      hook: '町家の風情を味わったら、北へ戻って世界遺産の興福寺へ向かおう。',
      f7_fragment: '伝統的な町家「うなぎの寝床」の構造を無料で見学できるならまちの拠点。',
      f7_full:
        '「ならまち格子の家」で細長い町家を抜ける風を感じ、古都の暮らしの知恵に触れた。',
      image_prompt:
        'Quiet traditional Japanese townhouse illustration of Naramachi Koshi-no-Ie in Nara, fine wooden lattice facade, deep tatami rooms leading to a sunlit inner courtyard garden with stone basin, serene daylight, no text, no letters.',
    },
    {
      name: '興福寺',
      spot_type: '見どころ',
      description:
        '平城遷都とともに移された法相宗の大本山で世界遺産。中金堂や国宝館の阿修羅像など天平の名宝を拝観できる。9:00〜17:00（境内自由）、無休、中金堂1000円・国宝館900円。',
      address: '奈良県奈良市登大路町48',
      prefecture: '奈良県',
      municipality: '奈良市',
      lat: 34.682895,
      lng: 135.830964,
      clue: '平城遷都とともに現在地へ移された法相宗の大本山「興福寺」へ参拝しよう（9:00〜17:00・受付終了16:45、境内自由、中金堂1000円・国宝館900円）。世界遺産にも登録された広大な境内には再建された中金堂や国宝の北円堂・東金堂が立ち並び、国宝館では阿修羅像をはじめとする天平の名宝を拝観できる。奈良公園の鹿がのびやかにくつろぐ開放的な境内を、これからもゆっくり歩きたい。',
      surprise:
        '現在、シンボルの五重塔は大規模な保存修理工事中ですが、堂々たる中金堂の姿や国宝館の仏像群から千年の歴史を体感できます。',
      hook: '天平の伽藍を仰いだら、東へ森の参道を進み春日大社へ参拝しよう。',
      f7_fragment: '中金堂や国宝館の阿修羅像が名高い、奈良公園入口の世界遺産寺院。',
      f7_full:
        '「興福寺」の広大な境内を歩き、再建された中金堂と天平文化の厚みに触れた。',
      image_prompt:
        'Majestic Japanese Buddhist temple illustration of Kofuku-ji in Nara, spacious gravel grounds with the rebuilt vermilion Central Golden Hall, stone lanterns and gentle deer grazing under pine trees, no text, no letters.',
    },
    {
      name: '春日大社',
      spot_type: '見どころ',
      description:
        '平城京の守護として創建された世界遺産の古社。御蓋山の麓の深緑に朱塗りの回廊と無数の石燈籠・釣燈籠が映える。6:30〜17:30（冬期7:00〜17:00）、境内無料（特別参拝700円）。',
      address: '奈良県奈良市春日野町160',
      prefecture: '奈良県',
      municipality: '奈良市',
      lat: 34.681545,
      lng: 135.848472,
      clue: '平城京の守護を願って創建された世界遺産の古社「春日大社」を訪ねよう（6:30〜17:30・冬期7:00〜17:00、境内無料・特別参拝700円）。御蓋山の麓に広がる深緑の原生林の中に朱塗りの回廊が鮮やかに映え、参道から境内に並ぶ無数の石燈籠と釣燈籠が荘厳な空気を醸し出している。神の使いとされる鹿に見守られながら、千年続く祈りの清らかさをこれからも静かに深く心に感じたい。',
      surprise:
        '境内の燈籠は平安時代以降に人々から奉納され続けてきたもので、現在も年に二度すべての燈籠に灯がともされる伝統行事が受け継がれています。',
      hook: '朱塗りの神域を参拝したら、北西の東大寺大仏殿で旅を結ぼう。',
      f7_fragment: '深緑の森に朱塗りの回廊と無数の燈籠が映える、世界遺産の古社。',
      f7_full:
        '「春日大社」の朱塗りの回廊と燈籠が織りなす静謐な神域で、千年の祈りに触れた。',
      image_prompt:
        'Sacred Japanese shrine illustration of Kasuga Taisha in Nara, vibrant vermilion corridors lined with patinated bronze hanging lanterns, moss-covered stone lanterns along a cedar forest path, soft dappled light, no text, no letters.',
    },
    {
      name: '東大寺',
      spot_type: '見どころ',
      description:
        '聖武天皇の発願により創建された華厳宗の大本山。金剛力士像が守る南大門の奥に世界最大級の木造建築・大仏殿と大仏さまが鎮座する。7:30〜17:30（冬期8:00〜17:00）、大人800円。',
      address: '奈良県奈良市雑司町406-1',
      prefecture: '奈良県',
      municipality: '奈良市',
      lat: 34.687541,
      lng: 135.840469,
      clue: '聖武天皇の発願により創建された華厳宗の大本山「東大寺」で旅を締めくくろう（7:30〜17:30・冬期8:00〜17:00、大仏殿大人800円・小学生400円）。金剛力士像が守る南大門をくぐると、目の前に世界最大級の木造建築・大仏殿がそびえ、堂内には「奈良の大仏」こと盧舎那仏が穏やかに鎮座する。悠久の時を超えて人々を迎え続ける古都の象徴を、これからも胸に刻んで結びたい。',
      surprise:
        '大仏殿の柱の一本には大仏さまの鼻の穴と同じ大きさの穴が開けられており、くぐり抜けると無病息災のご利益があると言い伝えられています。',
      hook: '',
      f7_fragment: '南大門の奥に大仏殿がそびえ、奈良の大仏が鎮座する世界遺産の総本山。',
      f7_full:
        '「東大寺」の大仏殿を仰ぎ見ながら盧舎那仏と向き合い、古都・奈良の散策を締めくくった。',
      image_prompt:
        'Iconic Japanese temple illustration of Todai-ji Great Buddha Hall in Nara, monumental wooden architecture with soaring tiled roofs and golden shibi finials, wide stone approach framed by green lawns and cedar trees, no text, no letters.',
    },
  ],
};
