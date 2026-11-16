// scripts/areas/shimonuma.mjs
// station_order: 892

export default {
  slug: 'shimonuma',
  station_order: 892,
  station: '下沼',
  line: 'JR宗谷本線',
  area_name: '下沼・ダルマ駅とサロベツ原野、パンケ沼',
  prefecture: '北海道',
  municipality: '幌延町',
  category: 'ダルマ駅とサロベツ原野',
  budget_tier: 1,
  tags: ['北海道', '幌延町', '下沼駅', 'サロベツ原野', 'パンケ沼'],
  style_genre: 'ink_and_watercolor',
  title: '下沼・ぬまひきょんの駅とサロベツ原野の沼へ',
  description:
    '車掌車ダルマ駅舎に「ぬまひきょん」が描かれた「JR下沼駅」から、開拓者の名を冠した「湧水サロベツ権左衛門」、利尻富士を望む「名山台展望公園」、原野を学ぶ「幌延ビジターセンター」、木道が続く「パンケ沼園地」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Shimonuma colorful painted caboose station hut, crystal-clear natural roadside spring fountain, panoramic viewpoint over Sarobetsu wetland toward Mount Rishiri, wooden visitor hall, and wetland boardwalk to Lake Panke, full bleed, no text, no letters.',
  question: '秘境駅「JR下沼駅」からサロベツ原野の展望台やビジターセンター、パンケ沼を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '車掌車ダルマ駅舎に秘境駅キャラ「ぬまひきょん」が描かれた「JR下沼駅」',
      subtext: '大正十五年開業の歴史と、可愛らしいイラストで歓迎してくれる駅舎に和んだ。',
      badge: {
        code: 'shimonuma_station',
        name_ja: '下沼・ぬまひきょん駅旅人',
        subtitle_en: 'Shimonuma Daruma Station Walker',
        description: '車掌車ダルマ駅舎のJR下沼駅に降り立った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a colorful converted railway caboose station hut surrounded by green Hokkaido wetland grasses, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '開拓者の名に由来するまろやかな軟水の湧き水「湧水サロベツ権左衛門」',
      subtext: '駅から徒歩一分の場所で、サロベツの大地が磨いた清らかな水に出会えた。',
      badge: {
        code: 'shimonuma_gonzaemon',
        name_ja: '下沼・権左衛門の名水',
        subtitle_en: 'Spring Water Traveler of Shimonuma',
        description: 'JR下沼駅近くの湧水サロベツ権左衛門で清らかな水を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting crystal-clear natural spring water flowing from a wooden spout into a stone basin amidst northern ferns, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: 'サロベツ原野と海上の利尻富士を一望する高台の「名山台展望公園」',
      subtext: '広大な湿原の向こうに浮かぶ利尻富士の雄大なシルエットに息を呑んだ。',
      badge: {
        code: 'shimonuma_meizandai',
        name_ja: '下沼・利尻富士の展望台',
        subtitle_en: 'Sarobetsu & Rishiri Viewer',
        description: '名山台展望公園からサロベツ原野と利尻富士を一望した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a panoramic wetland horizon with a symmetrical volcanic island mountain rising over the sea at sunset, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '周囲約8kmの汽水湖と木道散策路が広がる「パンケ沼園地（サロベツ国立公園）」',
      subtext: '静かな湿原の木道を歩きながら、サロベツ原野の貴重な自然を肌で感じた。',
      badge: {
        code: 'shimonuma_panke',
        name_ja: '下沼・パンケ沼の木道守',
        subtitle_en: 'Panke Marsh Boardwalk Walker',
        description: '幌延ビジターセンターからパンケ沼園地の木道を散策した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a tranquil wooden boardwalk winding across wild wetland grasses toward calm Lake Panke, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'shimonuma_master',
    name_ja: '下沼・サロベツ原野とパンケ沼巡り',
    subtitle_en: 'Shimonuma & Sarobetsu Master',
    description: 'JR下沼駅から湧水サロベツ権左衛門、名山台展望公園、幌延ビジターセンター、パンケ沼園地までを巡った証',
    image_prompt:
      'A circular emblem combining painted caboose station, fresh spring spout, distant Mount Rishiri and wetland boardwalk, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR下沼駅',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '1926年9月25日開業、1985年にヨ3500形車掌車改造のダルマ駅舎へ改築された無人駅（終日開放・無料）。2017年に外壁へご当地秘境駅キャラ「ぬまひきょん」が描かれ親しまれている。',
      address: '北海道天塩郡幌延町字下沼595-7',
      lat: 45.037119,
      lng: 141.758138,
      clue:
        '大正十五年九月に開業し、昭和六十年に車掌車を改造したダルマ駅舎へと生まれ変わった「JR下沼駅」から町歩きと散策を始めよう（終日利用可）。外壁に描かれたご当地秘境駅キャラクター「ぬまひきょん」の愛らしい姿に思わず笑顔になりながら静かなホームを後にしたら、まずは駅から歩いてわずか一分、まろやかな天然水がこんこんと湧き出る「湧水サロベツ権左衛門」へとゆっくり歩いて向かおう。',
      surprise: '「ぬまひきょん」が描かれた愛嬌あるダルマ駅舎と、静かな集落の穏やかな空気に癒された。',
      hook: 'JR下沼駅を出たら、徒歩約一分の「湧水サロベツ権左衛門」へ向かおう。',
      f7_fragment: '車掌車ダルマ駅舎にご当地キャラ「ぬまひきょん」が描かれた無人駅。',
      f7_full: '「JR下沼駅」に降り立ち、サロベツ原野の大自然を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shimonuma Station colorful painted railway caboose hut amidst tranquil northern marshland, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '湧水サロベツ権左衛門',
      prefecture: '北海道',
      city: '幌延町',
      description:
        'JR下沼駅から徒歩約1分の場所にある天然湧水スポット（終日利用可・無料、冬季は除雪なしのため春〜秋推奨）。開拓者の名に由来するまろやかな軟水がこんこんと湧き出ている。',
      address: '北海道天塩郡幌延町字下沼71-6',
      lat: 45.036949,
      lng: 141.756701,
      clue:
        '駅徒歩一分の「湧水サロベツ権左衛門」へ寄ろう（終日利用可・無料）。開拓者の名を冠したまろやかな軟水の天然湧水だ。冷たい水で喉を潤したら「名山台展望公園」へ。',
      surprise: '駅から徒歩一分という身近な場所で、開拓者の名を受け継ぐ冷たくまろやかな湧水に出会えた。',
      hook: '湧水サロベツ権左衛門で喉を潤したら、国道沿いの「名山台展望公園」へ向かおう。',
      f7_fragment: 'JR下沼駅徒歩一分、開拓者の名に由来するまろやかな軟水の湧水地。',
      f7_full: '「湧水サロベツ権左衛門」でサロベツの大地が育んだ清らかな湧水に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a neat roadside natural spring water fountain pouring clear cold water beside wild northern greenery, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '名山台展望公園',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '国道40号沿いの高台にある展望公園（終日開放・無料※併設売店等は閉業済みで展望台のみ利用可）。広大なサロベツ原野と海上に浮かぶ利尻富士を一望する絶景スポット。',
      address: '北海道天塩郡幌延町字下沼485',
      lat: 45.042006,
      lng: 141.756831,
      clue:
        '国道40号沿いの小高い丘に広がる「名山台展望公園」の展望台へとゆっくり上がってみよう（終日開放・無料）。目の前には果てしなく続くサロベツ原野の大湿原がどこまでも広がり、晴れた日にはそのはるか先の海上に利尻富士の美しい独立峰がくっきりと浮かび上がる圧巻の絶景を楽しめる。雄大な道北の大パノラマを心ゆくまで満喫したら、原野の自然を学べる「幌延ビジターセンター」へと向かおう。',
      surprise: 'サロベツの大湿原の先に端正なシルエットを見せる利尻富士の展望が、言葉を失うほど美しかった。',
      hook: '名山台展望公園で絶景を眺めたら、「幌延ビジターセンター」へ向かおう。',
      f7_fragment: '果てしないサロベツ原野と海上の利尻富士を一望する高台の展望公園。',
      f7_full: '「名山台展望公園」からサロベツ原野と利尻富士の壮大なパノラマを見渡した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Meizandai Observatory overlook gazing across vast golden-green Sarobetsu marsh toward distant Mount Rishiri silhouette, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '幌延ビジターセンター',
      prefecture: '北海道',
      city: '幌延町',
      description:
        'サロベツ原野の自然や生態系を紹介する施設。5〜10月開館（9:00〜17:00・無休、11〜4月冬期休館）、入館無料。2階にガラス張りの展望休憩室があり、原野や長沼を望みながら休憩できる。',
      address: '北海道天塩郡幌延町字下沼2077',
      lat: 45.010111,
      lng: 141.730901,
      clue:
        'サロベツ国立公園の豊かな自然をわかりやすく丁寧に紹介する拠点「幌延ビジターセンター」へ立ち寄ろう（5〜10月9:00〜17:00・無休、無料）。館内で湿原の生き物や四季の移ろいをじっくり学んだ後は、2階にある大きなガラス張りの展望休憩室で長沼と原野の風景を眺めながらほっと一息つくのが実に心地よい。十分に休んだら、最後は木道で結ばれた「パンケ沼園地」へゆっくり出かけよう。',
      surprise: '2階のガラス張り展望休憩室から静かに見渡す長沼とサロベツ原野の広がりに、心がすっかり和んだ。',
      hook: '幌延ビジターセンターで一息ついたら、木道で繋がる「パンケ沼園地」へ向かおう。',
      f7_fragment: '2階のガラス張り展望休憩室から原野と長沼を一望できる無料の自然拠点。',
      f7_full: '「幌延ビジターセンター」の展望休憩室で原野を眺めながら穏やかに休憩した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Horonobe Visitor Center modern timber nature hall with tall glass windows overlooking peaceful marshland pond, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: 'パンケ沼園地（サロベツ国立公園）',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '幌延ビジターセンターから木道散策路で結ばれた周囲約8kmの汽水湖・パンケ沼の園地（終日散策自由・無料、積雪期注意）。湿原植物や野鳥を観察しながら展望デッキへ歩ける。',
      address: '北海道天塩郡幌延町字下沼2078',
      lat: 45.03374,
      lng: 141.734454,
      clue:
        '旅の締めくくりは、ビジターセンターから木道散策路で結ばれたサロベツ原野最大の汽水湖「パンケ沼園地」をのんびり歩こう（散策自由・無料、積雪期注意）。周囲約8キロに及ぶ静かな湖面に向かって真っすぐ延びる木道を踏みしめれば、湿原の可憐な草花や野鳥たちの息遣いがすぐ傍に生き生きと感じられる。展望デッキから北国の原野の美しい広がりを胸に深く刻み、下沼の旅を静かに心地よく結ぼう。',
      surprise: '湿原の中に延びる木道の先に広がる静かなパンケ沼と、手つかずの自然の息吹に深い感動を覚えた。',
      hook: '',
      f7_fragment: 'サロベツ原野最大の汽水湖・パンケ沼を木道と展望デッキから望む自然園地。',
      f7_full: '「パンケ沼園地」の湿原の木道を歩き、サロベツの雄大な自然とともに旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Panke Marsh Park timber boardwalk stretching across wild cotton-grass wetland toward calm Lake Panke and Mount Rishiri, no text, no letters.',
    },
  ],
};
