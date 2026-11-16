export default {
  slug: 'takatsuki',
  station_order: 603,
  station: '高月駅',
  line: 'JR北陸本線',
  area_name: '高月・湖北観音の里と田園の街',
  prefecture: '滋賀県',
  municipality: '長浜市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['滋賀県', '長浜市', '高月駅', '渡岸寺観音堂', '観音の里'],
  style_genre: 'oil_palette_impasto',
  title: '湖北・観音の里 高月の祈りと田園を巡る',
  description:
    '伊吹山系の清らかな水と広い田園風景が広がり、古来より多くの観音像が地域の人々の手で守り伝えられてきた「観音の里」滋賀県長浜市高月町。国宝・十一面観音立像を祀る古刹から、駅前の十割蕎麦、観音文化を紐解く資料館、地元農園のカフェを経て、駅近くの老舗和菓子舗までを巡る。',
  eyecatch_prompt:
    'Rich oil palette-knife impasto landscape painting of Takatsuki Kannon village in Kohoku, Shiga, featuring a traditional tiled temple hall framed by green cedar trees, quiet rural stone lanes, and distant misty rice fields under warm late-afternoon amber light, no text, no people.',
  question:
    '観音の里・高月の静かな祈りに寄り添い、ふと立ち止まりたくなるのはどこだろう？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「渡岸寺観音堂（向源寺）」で、国宝・十一面観音立像の優美な佇まいに向き合ったとき',
      subtext:
        '戦火の折にも村人たちが土に埋めて守り抜いたという千年の祈りの歴史に、深い感動を覚えた。',
      badge: {
        code: 'takatsuki_kogenji',
        name_ja: '渡岸寺・国宝十一面観音を仰ぎし者',
        subtitle_en: 'Pilgrim of Dogenji Kannon',
        description:
          '渡岸寺観音堂（向源寺）を拝観し、村人が守り抜いた国宝・十一面観音立像の慈悲に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a serene tiled Buddhist temple hall roof shaded by ancient pine branches and stone lanterns, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「十割蕎麦 坊主bar 一休」で、香り高い本格的な十割蕎麦の昼食を味わったとき',
      subtext:
        'お坊さんが営む木の温もりあふれる空間で、丁寧に打たれた蕎麦の風味に旅の心が満たされた。',
      badge: {
        code: 'takatsuki_ikkyu_soba',
        name_ja: '高月・十割蕎麦 一休の風味を味わいし者',
        subtitle_en: 'Taster of Ikkyu Juwari Soba',
        description:
          '十割蕎麦 坊主bar 一休を訪ね、高月駅前で香り高い本格十割蕎麦を堪能した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring a bamboo tray of hand-cut dark soba noodles beside a ceramic dipping cup and green scallions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「高月観音の里歴史民俗資料館」で、地域に受け継がれる観音文化の奥深さを知ったとき',
      subtext:
        '寺と住民が一体となって仏像を守ってきた湖北の暮らしの精神性に、静かな敬意が湧いた。',
      badge: {
        code: 'takatsuki_kannon_museum',
        name_ja: '高月・観音の里の伝承を学ぶ者',
        subtitle_en: 'Scholar of Takatsuki Kannon Heritage',
        description:
          '高月観音の里歴史民俗資料館を訪ね、湖北の観音信仰と地域史の奥深さに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a traditional white-walled museum entrance beside stone garden lanterns and lotus flower motifs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '地元農園が営む「Farm cafe Lian」で、田園の風を感じながらスイーツを味わったとき',
      subtext:
        '歴史ある観音の里の風景と、採れたて果実を活かした温かなカフェの時間が心地よく重なった。',
      badge: {
        code: 'takatsuki_farm_cafe_lian',
        name_ja: '高月田園・Farm cafe Lianの寛ぎ人',
        subtitle_en: 'Guest of Farm Cafe Lian',
        description:
          'ヨコタ農園が営むFarm cafe Lianを訪ね、湖北の田園風景の中で豊かなひとときを過ごした証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a glass of iced berry parfait and a ceramic coffee cup on a bright wooden farm-cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'takatsuki_complete',
    name_ja: '高月・観音の里と湖北の恵みを巡りし者',
    subtitle_en: 'Walker of Takatsuki Kannon Village',
    description:
      '渡岸寺観音堂から十割蕎麦 坊主bar 一休、高月観音の里歴史民俗資料館、Farm cafe Lian、御菓子処 居川屋までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a traditional temple hall roof, a lotus flower motif, and chestnut-filled steamed yokan sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '渡岸寺観音堂（向源寺）',
      spot_type: '見どころ',
      description:
        '国宝の十一面観音立像を祀る「観音の里・高月」を象徴する古刹。平安期の優美な仏像を村人たちが守り伝えてきた。拝観9:00〜17:00（冬期16:00まで・拝観料あり）、無休。',
      address: '滋賀県長浜市高月町渡岸寺50',
      prefecture: '滋賀県',
      city: '長浜市',
      lat: 35.475925,
      lng: 136.239293,
      clue: 'JR北陸本線の高月駅東口を出て田園と集落の道を東へ歩くと、静かな木立に包まれた「渡岸寺観音堂（向源寺）」に着く（9:00〜17:00・冬期16:00まで、無休・拝観料あり）。ここには日本に七体しかない国宝の木彫十一面観音立像の中でも、最も美しいと称えられる一躯が安置されている。幾度の戦火を村人たちの手で守り抜かれてきた穏やかなお姿に合掌し、旅の最初のしるしをここで刻み出そう。',
      surprise:
        '天正年間の兵火が迫った際、当時の住職と村人たちが観音像を守るために境内の土中へ一時埋めて隠し、後に掘り出して安置したという伝承が今も語り継がれる。千年を超えて地域の暮らしと共にある信仰の深さに強く胸を打たれる思いが今もずっと大きく広がっていく。',
      hook: '渡岸寺観音堂を参拝したら、南南西へ徒歩8分の十割蕎麦 坊主bar 一休へ向かおう。',
      f7_fragment: '静かな集落に守られてきた国宝・十一面観音、千年の祈りが息づくお堂。',
      f7_full: '渡岸寺観音堂（向源寺）を拝観し、村人たちが守り抜いた国宝・十一面観音立像の気高い祈りにじっくりと深く心から触れた。',
      image_prompt:
        'Wide morning view of a tranquil historic Japanese Buddhist temple hall in Takatsuki shaded by ancient pine and cedar trees beside stone lanterns, no text, no people.',
    },
    {
      name: '十割蕎麦 坊主bar 一休',
      spot_type: '食事',
      description:
        '高月駅東口目の前に建つログハウス調の蕎麦処。お坊さんでもある店主が打つ香り高い十割蕎麦を味わえる。営業時間11:30〜15:00・17:00〜21:00、火曜定休。',
      address: '滋賀県長浜市高月町落川54-1',
      prefecture: '滋賀県',
      city: '長浜市',
      lat: 35.471966,
      lng: 136.237741,
      clue: '観音堂から南南西へ徒歩8分、高月駅東口前の「十割蕎麦 坊主bar 一休」で昼食にしよう（11:30〜15:00、火曜定休）。香り高い十割蕎麦を味わい、ほっとひと息つこう。',
      surprise:
        'お坊さんが店主を務めるというユニークな経歴と、つなぎを一切使わない本格的な十割蕎麦の美味しさが評判を呼び、遠方からも多くの蕎麦好きが足を運ぶ名店だ。ログハウスの温かな空間でいただく打ち立ての蕎麦が旅の疲れを優しく心地よく癒やしてくれている。',
      hook: '一休で昼食を済ませたら、北東へ徒歩7分の高月観音の里歴史民俗資料館を訪ねよう。',
      f7_fragment: 'ログハウスに香る挽きたての十割蕎麦、駅前の温かな昼の食事処。',
      f7_full: '高月駅東口の「十割蕎麦 坊主bar 一休」を訪ね、香り高い本格十割蕎麦と温かな空間の心地よさを存分に堪能した。',
      image_prompt:
        'Medium-wide interior view of a warm log-cabin Japanese soba dining table with a bamboo tray of hand-cut dark soba noodles, dipping sauce cup, and tempura, no text, no people.',
    },
    {
      name: '高月観音の里歴史民俗資料館',
      spot_type: '見どころ',
      description:
        '湖北地域の仏教文化財や観音信仰の歴史、江戸期の儒学者・雨森芳洲に関する資料を展示する市立資料館。開館9:00〜17:00（入館料あり）、火曜休（祝日翌日休）。',
      address: '滋賀県長浜市高月町渡岸寺229',
      prefecture: '滋賀県',
      city: '長浜市',
      lat: 35.475345,
      lng: 136.240463,
      clue: '一休から北東へ徒歩7分に建つ「高月観音の里歴史民俗資料館」へ立ち寄ろう（9:00〜17:00、火曜休・入館料あり）。高月町内各地の小さな村堂に今も守られている観音像の文化や、郷土が生んだ江戸期の思想家・雨森芳洲の功績を丁寧に紹介している。観音堂での感動を歴史的背景からさらに深めながら、この土地に根づく「まごころの文化」の深い歩みにここでじっくりと心を込めて触れてみよう。',
      surprise:
        '高月町には大小数十もの仏像や観音堂が点在し、大きな寺院だけでなく集落の住民自身が当番制でお堂の掃除や法要を受け継いできた。資料館では、こうした湖北特有の「民衆が守る仏教文化」の歩みを分かりやすく丁寧に辿り学びじっくり深く感じ取ることができる。',
      hook: '資料館を見学したら、東南東へ徒歩13分のFarm cafe Lianで一服しよう。',
      f7_fragment: '湖北の観音文化と雨森芳洲の精神を伝える、静かで知的な資料館。',
      f7_full: '高月観音の里歴史民俗資料館を訪ね、村人が仏像を守り継いできた湖北ならではの豊かな精神史にじっくりと深く触れた。',
      image_prompt:
        'Top-down flatlay detail of an open linen-bound museum booklet, delicate lotus-petal bookmark, and a ceramic teacup on a dark cedar study table, no text, no letters, no people.',
    },
    {
      name: 'Farm cafe Lian',
      spot_type: '休憩',
      description:
        'ヨコタ農園が営む開放的な農園カフェ。地元産の新鮮野菜やいちごを使った季節のスイーツ、珈琲が楽しめる。営業時間11:00〜16:00、火・水曜定休。',
      address: '滋賀県長浜市高月町馬上2291-4',
      prefecture: '滋賀県',
      city: '長浜市',
      lat: 35.471851,
      lng: 136.248467,
      clue: '資料館から東南東へ徒歩13分、ヨコタ農園が営む「Farm cafe Lian（リアン）」で足を休めよう（11:00〜16:00、火・水曜定休）。広々とした明るい店内では、自家農園で大切に育てられたいちごや旬の果実を使ったスイーツ、香り高い珈琲をゆったりと味わえる。伊吹山系の雄大な山並みを遠くに望みながら、湖北の自然の豊かな恵みを感じてここで心地よく心ゆくまで一息つこう。',
      surprise:
        '長年にわたり高月で農業を営む農園が、自分たちの手で育てた作物の美味しさを直接届けたいとの思いから開いたカフェだ。歴史ある観音の里の風土に寄り添いながら、新しい世代の豊かな暮らしの彩りと笑顔をそっと温かく毎日楽しげに届けて添え続けてくれる。',
      hook: 'Farm cafe Lianで寛いだら、西南西へ徒歩22分の御菓子処 居川屋でお土産を選ぼう。',
      f7_fragment: '田園の風が吹き抜ける農園カフェと、採れたて果実の甘いスイーツ。',
      f7_full: 'ヨコタ農園の「Farm cafe Lian」で旬のスイーツと珈琲を味わい、湖北の穏やかな田園風景の中で一息ついた。',
      image_prompt:
        'Low-angle interior view of a sunlit rural farm-cafe wooden table with a glass of fresh strawberry dessert parfait and a warm coffee cup overlooking green fields, no text, no people.',
    },
    {
      name: '御菓子処 居川屋',
      spot_type: '買い物',
      description:
        '高月駅近くで長年親しまれる老舗和菓子店。大粒の栗を包んだ蒸し羊羹「賤の恋」や「ゆずまん」、羽衣カステラなどが人気。営業時間9:00〜19:00、木曜定休。',
      address: '滋賀県長浜市高月町高月1182',
      prefecture: '滋賀県',
      city: '長浜市',
      lat: 35.467913,
      lng: 136.234162,
      clue: 'Farm cafe Lianから西南西へ徒歩22分、高月駅のほど近くに構える老舗「御菓子処 居川屋（いかわや）」で旅を締めくくろう（9:00〜19:00、木曜定休）。素材にこだわった和菓子が並び、大粒の栗を上品な甘さの蒸し羊羹で包んだ「賤の恋」や柚子香る「ゆずまん」、羽衣カステラなど湖北ならではの銘菓が揃う。観音の里を歩いた思い出を、優しい甘みとともにここで持ち帰ろう。',
      surprise:
        '地元の人々のお茶請けや贈り物として親しまれ続けてきた街の菓子舗で、季節ごとの草もちや田舎饅頭も評判を呼ぶ。駅からのアクセスも良く、電車を待つ間に高月ならではの素朴で誠実な手作りの和菓子をゆっくり落ち着いてじっくり楽しく買い選ぶことができる。',
      hook: '',
      f7_fragment: '栗と柚子が香る高月の銘菓と、駅近くに寄り添う老舗和菓子店の暖簾。',
      f7_full: '高月駅近くの「御菓子処 居川屋」で湖北の和菓子を手に取り、観音の里の祈りと田園を巡る旅を美しく心から締めくくった。',
      image_prompt:
        'Golden-hour view of a traditional Japanese confectionery wooden counter displaying sliced chestnut steamed yokan cakes and round yuzu manju buns on woven bamboo plates, no text, no people.',
    },
  ],
};
