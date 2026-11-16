export default {
  slug: 'utsunomiya',
  station_order: 641,
  station: '宇都宮',
  line: '東北新幹線・JR宇都宮線',
  area_name: '宇都宮・二荒山と餃子の街',
  prefecture: '栃木県',
  municipality: '宇都宮市',
  category: 'グルメと歴史',
  budget_tier: 2,
  tags: ['栃木県', '宇都宮市', '宇都宮駅', '宇都宮餃子', '宇都宮二荒山神社'],
  style_genre: 'editorial_ligne_claire',
  title: '宇都宮・二荒山の杜と餃子通りの街を歩く',
  description:
    'JR宇都宮駅から、駅前のレトロな「パーラー&喫茶 BC 宇都宮駅前店」と大通り沿いの「fudan cafe」、千六百年の歴史を誇る下野一之宮「宇都宮二荒山神社」、餃子通りの名店「宇都宮みんみん 本店」、関東七名城の一角「宇都宮城址公園」を巡る散策路。',
  eyecatch_prompt:
    'Editorial ligne claire illustration of Utsunomiya city showing a retro station-front parlor cafe, modern street-side coffee house, grand hilltop Futaarayama Shrine torii and steep stone steps, bustling Gyoza-dori dumpling shop and reconstructed wooden castle tower of Utsunomiya Castle Park, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '下野一之宮の社と名物餃子の活気、そして城跡が繋がる宇都宮を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「パーラー&喫茶 BC」のレトロな店内で、昔ながらの喫茶文化に触れた瞬間',
      subtext:
        'JR宇都宮駅から数分の昭和の香り漂う空間が、餃子の街歩きの幕開けを優しく彩った。',
      badge: {
        code: 'utsunomiya_bc',
        name_ja: '宇都宮駅前・純喫茶BCの常連客',
        subtitle_en: 'Guest of Parlor BC',
        description:
          'パーラー&喫茶 BC 宇都宮駅前店を訪ね、昭和レトロな喫茶空間と珈琲を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a classic Japanese retro kissaten coffee cup and tall fruit parfait beside a thick toast plate, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「宇都宮二荒山神社」の急な石段を登り、街を見下ろす千六百年の社に参拝した瞬間',
      subtext:
        '宇都宮の地名の由来とも伝えられる下野一之宮の厳かな杜が、中心街の上に広がっていた。',
      badge: {
        code: 'utsunomiya_futaarayama',
        name_ja: '下野一之宮・二荒山神社を拝みし者',
        subtitle_en: 'Visitor of Futaarayama Shrine',
        description:
          '宇都宮二荒山神社を訪ね、街の中心にそびえる千六百年の歴史ある総鎮守に参拝した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a grand vermilion Shinto shrine torii gate atop a steep stone staircase framed by lush cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「宇都宮みんみん 本店」で、パリッと焼かれた名物の焼き餃子と水餃子を味わった瞬間',
      subtext:
        '昭和三十三年創業の総本山でいただく野菜たっぷりの軽やかな餃子が、街歩きの活力をくれた。',
      badge: {
        code: 'utsunomiya_minmin',
        name_ja: '宇都宮・餃子通りのみんみんを味わいし者',
        subtitle_en: 'Taster of Utsunomiya Gyoza',
        description:
          '宇都宮みんみん 本店を訪ね、昭和三十三年創業の名物焼き餃子と水餃子を堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring a rectangular ceramic plate of crispy golden-brown pan-fried Japanese gyoza dumplings beside a steaming bowl of boiled dumplings, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「宇都宮城址公園」の美しい土塁と復元された清明台櫓を見上げた瞬間',
      subtext:
        '関東七名城に数えられた城の記憶と市民の憩いの広場が、宇都宮散策の結びを飾った。',
      badge: {
        code: 'utsunomiya_castle',
        name_ja: '宇都宮城址・関東七名城を巡りし者',
        subtitle_en: 'Explorer of Utsunomiya Castle',
        description:
          '宇都宮城址公園を訪ね、復元された櫓と土塁が伝える関東七名城の歴史に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a reconstructed traditional white-walled wooden castle watchtower atop a grassy earthen rampart under blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'utsunomiya_complete',
    name_ja: '宇都宮・二荒山と餃子の街を巡る旅人',
    subtitle_en: 'Walker of Utsunomiya Town',
    description:
      'パーラー&喫茶 BCからfudan cafe、宇都宮二荒山神社、宇都宮みんみん 本店、宇都宮城址公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a hilltop Shinto torii gate, crispy pan-fried gyoza dumplings and a white wooden castle tower, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'パーラー&喫茶 BC 宇都宮駅前店',
      spot_type: '休憩',
      description:
        'JR宇都宮駅西口から歩いてすぐの昭和レトロな老舗喫茶店。昔ながらのナポリタンやサンドイッチ、パフェ、香り高い珈琲で地元客にも親しまれる。営業時間7:00〜23:00、無休。',
      address: '栃木県宇都宮市駅前通り1-5-6',
      prefecture: '栃木県',
      municipality: '宇都宮市',
      lat: 36.559566,
      lng: 139.897309,
      clue: 'JR宇都宮駅の西口を出たら、まずは駅からほど近い昭和レトロな「パーラー&喫茶 BC 宇都宮駅前店」で一息つこう（7:00〜23:00、無休）。赤い革張りの椅子や柔らかな照明が昔ながらの喫茶文化を伝える店内で、香り高い珈琲や名物の軽食を楽しみながら街歩きの準備をゆっくり整えられる。新幹線の玄関口から二荒山の杜、そして餃子通りへと向かう宇都宮散策をこれからも心地よく始めたい。',
      surprise:
        '近代的な駅ビルやLRTが走る宇都宮駅前のすぐそばに、昭和の温もりをそのまま残すパーラー喫茶が今も元気に営業しているのが嬉しい。店内に漂う焙煎珈琲の香りと落ち着いた空気に、これから巡る北関東の中核都市への親しみがすっと湧いてくる。',
      hook: '珈琲で目覚めたら、大通りを西北西へ徒歩12分のfudan cafe周辺へ向かおう。',
      f7_fragment: 'JR宇都宮駅西口そばで昭和の温もりを守る、レトロなパーラー喫茶。',
      f7_full: '駅近くの「パーラー&喫茶 BC」で昭和レトロな珈琲の時間を過ごし、餃子の街・宇都宮の散策を心地よく始めた。',
      image_prompt:
        'Nostalgic Japanese Showa-era parlor coffee shop interior with warm lighting, dark wood tables, porcelain coffee cup and fruit parfait, no text, no people.',
    },
    {
      name: 'fudan cafe',
      spot_type: '休憩',
      description:
        '宇都宮中心部の大通り沿いに佇む開放的でスタイリッシュな人気カフェ。自家製スイーツやランチ、スペシャリティコーヒーが気軽に楽しめる。平日8:30〜18:30（土日祝8:00〜18:30）、不定休。',
      address: '栃木県宇都宮市大通り1-1-3',
      prefecture: '栃木県',
      municipality: '宇都宮市',
      lat: 36.561462,
      lng: 139.889377,
      clue: 'パーラー&喫茶 BCから大通りを西北西へ徒歩12分、洗練された空気が心地よい「fudan cafe」へ立ち寄ろう（平日8:30〜18:30・土日祝8:00〜18:30、不定休）。大きなガラス窓から街の風景を望む開放的な人気カフェで、自家製スイーツや丁寧な珈琲が散策の合間に彩りを添えてくれる。レトロな駅前喫茶から現代的な街のカフェへと移ろう宇都宮の多彩な表情を感じながら、二荒山の杜へこれから歩みを進めたい。',
      surprise:
        '「普段の暮らしに寄り添う」という名前の通り、旅人でも地元の人のような気分でふらりと寛げる飾らないセンスの良さが魅力だ。古い商店街や歴史ある神社が集まる中心街の入口で、現代の宇都宮のセンスあふれる日常に出会える素敵な一軒といえる。',
      hook: 'カフェを後にしたら、西へ徒歩5分の宇都宮二荒山神社へ石段を登ろう。',
      f7_fragment: '大通り沿いで宇都宮の洗練された日常に出会う、開放的な人気カフェ。',
      f7_full: '大通り沿いの「fudan cafe」で開放的な空気と珈琲を味わい、歴史と現代が調和する宇都宮の街の表情に触れた。',
      image_prompt:
        'Airy modern Japanese street-side cafe interior with large glass windows, warm wooden tables, latte art cup and homemade cake slice, no text, no people.',
    },
    {
      name: '宇都宮二荒山神社',
      spot_type: '見どころ',
      description:
        '約1600年の歴史を誇り「宇都宮」の地名の由来とも伝えられる下野国一之宮。中心街の小高い明神山に鎮座し、大鳥居と長い石段が街を見守る。参拝6:00〜18:00（社務所9:00〜16:00）、無休。',
      address: '栃木県宇都宮市馬場通り1-1-1',
      prefecture: '栃木県',
      municipality: '宇都宮市',
      lat: 36.561809,
      lng: 139.885725,
      clue: 'fudan cafeから西へ徒歩3分、街の象徴「宇都宮二荒山神社」の石段を登ろう（社務所9:00〜16:00）。千六百年の歴史を誇る下野一之宮の静かな杜に手を合わせたい。',
      surprise:
        '大通りに面した壮麗な大鳥居をくぐり急な石段を登りきると、賑やかな商業地の真上とは思えないほど澄んだ空気に包まれる。社殿に参拝したあと境内から宇都宮の街並みを見下ろしていると、この地が古来より信仰と交通の要衝として栄えてきた歴史が胸に迫る。',
      hook: 'お参りを終えたら、東へ徒歩2分の餃子通り・宇都宮みんみん 本店で昼食にしよう。',
      f7_fragment: '千六百年の歴史を誇り街の中心を見守る、下野一之宮の宇都宮総鎮守。',
      f7_full: '明神山に鎮座する「宇都宮二荒山神社」の石段を登って参拝し、宇都宮の地名ゆかりの千六百年の歴史に触れた。',
      image_prompt:
        'Grand Japanese Shinto shrine of Utsunomiya Futaarayama Jinja atop a steep stone staircase with vermilion torii gate and lush green forest, no text, no people.',
    },
    {
      name: '宇都宮みんみん 本店',
      spot_type: '食事',
      description:
        '昭和33年（1958年）創業、宇都宮餃子を代表する名店が並ぶ「餃子通り」の本店。白菜を中心にした野菜の甘みが際立つ焼餃子・水餃子・揚餃子が不動の人気。11:00〜20:30、不定休。',
      address: '栃木県宇都宮市馬場通り4-2-3',
      prefecture: '栃木県',
      municipality: '宇都宮市',
      lat: 36.561613,
      lng: 139.887368,
      clue: '二荒山神社から東へ徒歩2分、餃子の聖地「餃子通り」に店を構える「宇都宮みんみん 本店」で名物を味わおう（11:00〜20:30、不定休）。昭和三十三年の創業以来、宇都宮餃子の代名詞として愛され続ける老舗本店で、パリッと香ばしい焼き餃子とつるりとした水餃子が定番人気だ。白菜など野菜たっぷりで軽やかな旨みを頬張り、活気あふれる宇都宮の豊かな食文化をこれからもずっと満喫しよう。',
      surprise:
        'ニンニクの主張が強すぎず野菜の甘みと薄皮の香ばしさが際立つため、焼餃子と水餃子を何個でも軽やかに食べられてしまうのがみんみんならではの魅力だ。店の外まで漂う焼きたての香りと餃子通りの楽しげな雰囲気に、旅の気分が一気に高まる。',
      hook: '餃子でお腹を満たしたら、南南西へ徒歩13分の宇都宮城址公園へ向かい旅を結ぼう。',
      f7_fragment: '昭和三十三年創業、餃子通りに佇む宇都宮餃子の王道老舗本店。',
      f7_full: '餃子通りの「宇都宮みんみん 本店」で香ばしい焼餃子と水餃子を味わい、宇都宮が誇る餃子の食文化を堪能した。',
      image_prompt:
        'Lively Japanese gyoza restaurant counter serving a rectangular plate of crispy pan-fried dumplings and a steaming bowl of boiled gyoza soup, no text, no people.',
    },
    {
      name: '宇都宮城址公園',
      spot_type: '見どころ',
      description:
        '関東七名城の一つに数えられた宇都宮城の本丸の一部を復元・整備した歴史公園。伝統工法で復元された清明台櫓や富士見櫓、土塁と展示施設「清明館」が見どころ。公園24時間・清明館9:00〜17:00。',
      address: '栃木県宇都宮市本丸町1-15',
      prefecture: '栃木県',
      municipality: '宇都宮市',
      lat: 36.554659,
      lng: 139.885038,
      clue: 'みんみんから南南西へ徒歩13分、緑の土塁と白壁の櫓が映える「宇都宮城址公園」で散策を締めくくろう（入園無料・清明館9:00〜17:00）。かつて関東七名城の一つに数えられた名城・宇都宮城の本丸跡を整備した公園で、伝統の木造工法で忠実に復元された「清明台櫓」や「富士見櫓」が往時の姿を伝えている。芝生の広場と歴史展示を静かに巡り、宇都宮の街歩きをこれからも晴れやかに結びたい。',
      surprise:
        '宇都宮というと餃子のイメージが強いが、立派な土塁の上に白壁の櫓がそびえる城址公園を歩くと、平安時代から続く由緒ある城下町としての風格が改めて胸に迫る。広々とした公園の空の下で、歴史と食が調和した宇都宮の旅の余韻を心地よく味わえる。',
      hook: '',
      f7_fragment: '関東七名城・宇都宮城の土塁と復元櫓が往時を伝える、街なかの歴史公園。',
      f7_full: '「宇都宮城址公園」の復元された清明台櫓と土塁を歩き、神社と餃子と城が繋がる宇都宮の散策を締めくくった。',
      image_prompt:
        'Reconstructed white-walled wooden castle turret Seimeidai Yagura atop a grassy earthen rampart in Utsunomiya Castle Park under clear sky, no text, no people.',
    },
  ],
};
