export default {
  slug: 'wakkanai',
  station_order: 610,
  station: '稚内駅',
  line: 'JR宗谷本線',
  area_name: '稚内・最北端の港と防波堤',
  prefecture: '北海道',
  municipality: '稚内市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['北海道', '稚内市', '稚内駅', '北防波堤ドーム', '利尻昆布'],
  style_genre: 'pictorial_isometric_map',
  title: '日本最北の駅・稚内と宗谷の潮風を歩く',
  description:
    '日本最北端のJR稚内駅を起点に、駅ビル内の珈琲店から古代ローマ建築を思わせる北防波堤ドーム、最北の老舗菓子舗や利尻昆布だしの塩ラーメンを経て、樺太の記憶を伝える稚内副港市場の記念館へと至る、北の港町を巡る散策路。',
  eyecatch_prompt:
    'Elevated isometric pictorial travel map illustration of Wakkanai port town in northern Hokkaido, featuring the sweeping semi-circular concrete colonnade of North Breakwater Dome beside blue sea waves, railway terminal, cozy ramen shop and harbor market building on natural textured cream paper, no text, no people.',
  question:
    '日本最北の潮風が吹き抜ける稚内の港町を歩いたあと、最初に誰かへ伝えたい光景はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「稚内港北防波堤ドーム」の半アーチ列柱の下を、潮風を受けながら歩いた瞬間',
      subtext:
        'かつて樺太航路の桟橋を守り抜いた壮大なコンクリート造りの曲線に、北の港の歴史を見た。',
      badge: {
        code: 'wakkanai_dome',
        name_ja: '北防波堤ドーム・最北の歩み人',
        subtitle_en: 'Walker of North Breakwater Dome',
        description:
          '稚内港北防波堤ドームを訪ね、北海道遺産に指定された壮麗な半アーチ構造の海辺を歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the curving concrete Roman-style colonnade of Wakkanai North Breakwater Dome beside deep blue ocean waves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 4,
      text: '「ラーメンのたからや」で、透き通る利尻昆布だしの塩ラーメンを味わった瞬間',
      subtext:
        '冷涼な北の港町で身体の芯まで温まる一杯に、道北ならではの海の恵みが詰まっていた。',
      badge: {
        code: 'wakkanai_takaraya',
        name_ja: '最北の塩・昆布だしを味わいし者',
        subtitle_en: 'Taster of Wakkanai Salt Ramen',
        description:
          'ラーメンのたからやを訪ね、利尻昆布の旨みが澄み渡る稚内ならではの塩ラーメンを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming white porcelain bowl of clear golden Hokkaido salt ramen with chashu pork and kelp, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 5,
      text: '「稚内市樺太記念館（稚内副港市場）」で、かつての北方の暮らしと航路を学んだ瞬間',
      subtext:
        '港の市場の二階に広がる静かな展示室で、宗谷海峡を挟んだ人々の記憶に思いを馳せた。',
      badge: {
        code: 'wakkanai_karafuto',
        name_ja: '宗谷海峡・北方の記憶を継ぐ者',
        subtitle_en: 'Keeper of Northern Port History',
        description:
          '稚内市樺太記念館を訪ね、かつての連絡航路と北の暮らしを伝える資料に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a vintage northern steam ferry silhouette and brass ship compass beside harbor warehouses, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 3,
      text: '「御菓子司 小鹿」の店先で、最北の街に根付いた素朴で温かな銘菓を選んだ瞬間',
      subtext:
        '荒波の町で長く親しまれてきた優しい甘さに、北国の暮らしの温もりをそのまま感じた。',
      badge: {
        code: 'wakkanai_oshika',
        name_ja: '最北の甘味・小鹿の旅人',
        subtitle_en: 'Traveler of Northern Confectionery',
        description:
          '御菓子司 小鹿を訪ね、稚内中央の街角で長年親しまれてきた郷土銘菓に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting handmade Japanese baked sweets and red bean confections arranged on a cedar tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'wakkanai_complete',
    name_ja: '稚内・最北端の港と潮風の物語を歩みし者',
    subtitle_en: 'Walker of Wakkanai Port',
    description:
      'モカマタリから北防波堤ドーム、御菓子司 小鹿、たからや、稚内市樺太記念館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the curving breakwater dome, a clear bowl of ramen, and northern sea waves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'セレクトカフェ モカマタリ',
      spot_type: '休憩',
      description:
        'JR稚内駅直結の複合施設「キタカラ」1階にあるカフェ。早朝6時から営業しており、淹れたての珈琲や軽食で最北の旅を整えられる。営業時間6:00〜17:00（L.O.16:30）、不定休。',
      address: '北海道稚内市中央3-6-1 キタカラ1F',
      prefecture: '北海道',
      city: '稚内市',
      lat: 45.41695,
      lng: 141.67686,
      clue: '日本最北端の終着駅・稚内駅に降り立ったら、まず駅直結の複合施設キタカラ一階にある「セレクトカフェ モカマタリ」へ立ち寄ろう（6:00〜17:00・不定休）。早朝から温かな灯りをともす店内では、香り高い珈琲や焼きたての軽食が長旅の疲れを優しく癒してくれる。宗谷本線を北上してきた余韻をカップの一口に溶かし込みながら、これから港へ歩き出す前の心と身体をじっくりと温めておきたい。',
      surprise:
        '最北の終着駅に降り立った直後から温かな珈琲に出会える安心感は、北国の旅ならではの大きな喜びといえる。改札のすぐそばで地元の人と旅人が穏やかに交わる光景が、稚内のまち歩きの始まりを優しく、そしてどこまでも温かく包み込んでくれる素晴らしい場所だ。',
      hook: '珈琲で温まったら、北北東へ徒歩7分の稚内港北防波堤ドームへ向かおう。',
      f7_fragment: '最北の駅舎の傍らで味わう、散策の始まりを温める香ばしい珈琲。',
      f7_full: '稚内駅直結の「セレクトカフェ モカマタリ」で香り高い珈琲を味わい、日本最北の街歩きの序章を心地よくゆったり始めた。',
      image_prompt:
        'Warm cozy station-side coffee shop corner in northern Hokkaido with a steaming cup of drip coffee and toast plate by a sunlit window, no text, no people.',
    },
    {
      name: '稚内港北防波堤ドーム',
      spot_type: '見どころ',
      description:
        '北海道遺産に指定された半アーチ型の巨大防波堤。かつての稚泊航路の桟橋を荒波から守るために築かれた、古代ローマ建築を思わせる景観が圧巻。終日開放・見学無料。',
      address: '北海道稚内市開運1-2-2',
      prefecture: '北海道',
      city: '稚内市',
      lat: 45.42049,
      lng: 141.678267,
      clue: '駅を出て北北東へ徒歩7分、港の岸壁に沿って突如現れるのが「稚内港北防波堤ドーム」だ（終日開放・無料）。高さ約十四メートル、全長四百メートル以上にわたって半円形のコンクリートアーチと七十本の柱が連なる姿は、まるで古代ローマの神殿を思わせる壮麗さ。かつて樺太へ向かう連絡船の乗降客を宗谷海峡の荒波と強風から守った歴史を思い浮かべながら、海風の響く回廊をゆっくり歩いてみよう。',
      surprise:
        '土木構造物でありながら息をのむほどの造形美を備え、柱の間から差し込む北国の光と影が歩むごとに表情を変えていく。押し寄せる潮騒の音を半円形の天井が受け止める独特の反響は、実際に足を踏み入れた人だけが味わえる実に貴重な体験といえるに違いないところだ。',
      hook: '防波堤ドームを後にしたら、西へ徒歩6分の御菓子司 小鹿を訪ねよう。',
      f7_fragment: '北の荒波を受け止め続ける、七十本の柱が連なる壮麗な半アーチ回廊。',
      f7_full: '北海道遺産「稚内港北防波堤ドーム」の壮大な列柱の下を歩き、北の港町が歩んだ連絡航路の記憶にじっくり思いを馳せた。',
      image_prompt:
        'Monumental curving concrete semi-arch colonnade of Wakkanai North Breakwater Dome stretching along blue northern sea under crisp sunlight, no text, no people.',
    },
    {
      name: '御菓子司 小鹿',
      spot_type: '買い物',
      description:
        '稚内市中央で長く親しまれる老舗菓子店。最北の街ならではの銘菓や日常のおやつにぴったりな和洋菓子が揃う。営業時間9:00〜19:00。',
      address: '北海道稚内市中央1-3-35',
      prefecture: '北海道',
      city: '稚内市',
      lat: 45.420349,
      lng: 141.673287,
      clue: '防波堤ドームから西へ徒歩6分、中央の街並みに佇む老舗「御菓子司 小鹿」へ立ち寄ろう（9:00〜19:00）。最北の港町で長く愛されてきた郷土銘菓と素朴な和洋菓子が旅人を優しく迎えてくれる。',
      surprise:
        '厳しい冬と豊かな海を持つ最北の街だからこそ、家族や旅人が囲む甘いお菓子には格別の温もりが込められている。ショーケースに並ぶ手づくりの菓子の一つひとつから、地元の人々に寄り添い続けてきた誠実な商いの歴史が豊かに、そしてとても力強く伝わってくる。',
      hook: 'お菓子を選んだら、南東へ徒歩6分のラーメンのたからやで昼食にしよう。',
      f7_fragment: '最北の街角で長く愛され続けてきた、老舗菓子舗の温かな手仕事。',
      f7_full: '稚内中央の老舗「御菓子司 小鹿」を訪ね、北国の暮らしに寄り添う郷土銘菓と素朴な甘味の魅力にじっくりと深く触れた。',
      image_prompt:
        'Traditional northern Japanese confectionery shop wooden display counter with neatly arranged local pastries and sweet bean cakes, no text, no people.',
    },
    {
      name: 'ラーメンのたからや',
      spot_type: '食事',
      description:
        '透き通るような利尻昆布だしのあっさり塩ラーメンが評判の老舗ラーメン店。スープがなくなり次第終了する人気の一杯を味わえる。営業時間11:00〜18:00、水曜定休（祝日の場合は営業）。',
      address: '北海道稚内市中央2-11-15',
      prefecture: '北海道',
      city: '稚内市',
      lat: 45.417796,
      lng: 141.676688,
      clue: '小鹿から南東へ徒歩6分、昼どきに豊かなだしの香りが漂う「ラーメンのたからや」へ足を運ぼう（11:00〜18:00、水曜定休）。看板の塩ラーメンは、すぐ沖合に浮かぶ利尻島の名産・利尻昆布の旨みを引き出した透き通る黄金色のスープが自慢だ。あっさりとしていながら奥深いコクが口いっぱいに広がり、細めの麺としっとりしたチャーシューが見事に調和する。北の海風に冷えた体を内側から温めよう。',
      surprise:
        'スープをひと口すするだけで、海の恵みそのものをいただいているような清らかな旨みが身体の奥まで染み渡る。飾り気のない実直な一杯でありながら、忘れがたい深い余韻を残す完成度の高さに思わず何度も大きくうなずいてしまうほど味わい深い一杯といえるだろう。',
      hook: 'ラーメンで温まったら、南へ徒歩17分の稚内市樺太記念館（稚内副港市場）へ向かおう。',
      f7_fragment: '利尻昆布の旨みが澄み渡る、最北の港町が誇る黄金の塩ラーメン。',
      f7_full: '老舗「ラーメンのたからや」で透き通る利尻昆布だしの塩ラーメンを味わい、北国の旅の活力をしっかり心地よく満たし終えた。',
      image_prompt:
        'Steaming white porcelain bowl of clear golden Hokkaido salt ramen topped with sliced chashu pork and green scallions on a wooden counter, no text, no people.',
    },
    {
      name: '稚内市樺太記念館（稚内副港市場）',
      spot_type: '見どころ',
      description:
        '稚内副港市場の2階にある無料の歴史展示施設。かつて稚泊航路で結ばれた樺太での人々の暮らしや文化を伝える貴重な資料を閲覧できる。開館10:00〜17:00（11〜3月は月曜休・4〜10月無休）、入館無料。',
      address: '北海道稚内市港1-6-28',
      prefecture: '北海道',
      city: '稚内市',
      lat: 45.408496,
      lng: 141.676659,
      clue: 'たからやから港沿いを南へ徒歩17分、市場と温泉が揃う稚内副港市場の二階にある「稚内市樺太記念館」で旅を締めくくろう（10:00〜17:00、無料）。館内にはかつて宗谷海峡の北側に広がっていた樺太の町並みや暮らし、連絡船の模型、当時の生活道具などが丁寧に保存されている。市場一階の活気ある海産物売り場を眺めたあと、静かな展示室で北の海を渡った人々の歩みにじっくり思いを馳せたい。',
      surprise:
        '最初に歩いた北防波堤ドームからこの記念館へと辿り着くことで、単なる港の景色が一本の歴史の物語として鮮やかに繋がってくる。海峡を挟んで生きた人々の暮らしの記憶が、最北の港町に深い陰影を与えていることに改めて静かに、そして深く気づかされるはずだ。',
      hook: '',
      f7_fragment: '宗谷海峡の北へ思いを馳せる、副港市場二階の静かな歴史展示室。',
      f7_full: '稚内副港市場の「稚内市樺太記念館」を訪ね、北の海と連絡航路が結んだ暮らしの記憶にじっくり深く触れて締めくくった。',
      image_prompt:
        'Quiet northern maritime history museum gallery inside a harbor market building displaying vintage ship models and coastal archive photos under warm lighting, no text, no people.',
    },
  ],
};
