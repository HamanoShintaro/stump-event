export default {
  slug: 'miyajimaguchi',
  station_order: 673,
  station: '宮島口',
  line: 'JR山陽本線',
  area_name: '宮島・海上の大鳥居と神の島',
  prefecture: '広島県',
  municipality: '廿日市市',
  category: '歴史と寺社',
  budget_tier: 3,
  tags: ['広島県', '廿日市市', '宮島口駅', '厳島神社', '世界遺産'],
  style_genre: 'ukiyo_e_modern',
  title: '宮島口・海を渡り厳島神社から大聖院へ',
  description:
    'JR宮島口駅からフェリーで神の島へ渡り、もみじ饅頭や牡蠣が並ぶ「宮島表参道商店街」、朱塗りの海上の社殿「厳島神社」、未完の大経堂「豊国神社（千畳閣）」、弥山麓の古刹「大聖院」、緑とモミジの「紅葉谷公園」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Miyajima seen across the Seto Inland Sea from Miyajimaguchi showing the iconic vermilion O-Torii gate standing in calm blue tidewater before the floating corridors of Itsukushima Shrine, the wooden Senjokaku pavilion on the hill, and gentle wild deer along maple-shaded paths, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '瀬戸内の海を渡って厳島神社の社殿と神の島を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「宮島表参道商店街」を歩き、焼きたてのもみじ饅頭や島の賑わいに触れた瞬間',
      subtext:
        'フェリーを降りてすぐの参道に漂う甘い香りと活気が、神の島への期待を高めてくれた。',
      badge: {
        code: 'miyajimaguchi_omotesando',
        name_ja: '宮島・参道の甘い香りを味わいし者',
        subtitle_en: 'Walker of Miyajima Omotesando',
        description:
          '宮島表参道商店街を訪ね、焼きたてのもみじ饅頭など島の名物に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting warm golden maple-leaf shaped momiji manju cakes arranged on a wooden tray beside a ceramic teacup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「厳島神社」の海に浮かぶ朱塗りの回廊を歩き、沖の大鳥居を正面に望んだ瞬間',
      subtext:
        '満ち引きする潮と弥山の緑に調和する平安の建築美に、世界遺産の圧倒的な神聖さを感じた。',
      badge: {
        code: 'miyajimaguchi_itsukushima',
        name_ja: '宮島・海上の厳島神社に参拝せし者',
        subtitle_en: 'Worshipper at Itsukushima Shrine',
        description:
          '厳島神社を訪ね、瀬戸内の海に浮かぶ朱塗りの社殿と大鳥居を拝観した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the vermilion O-Torii gate rising from gentle blue sea waves before the floating shrine corridors, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「豊国神社（千畳閣）」の吹き抜けの板の間に座り、海と五重塔を見渡した瞬間',
      subtext:
        '豊臣秀吉公が建てた大経堂を吹き抜ける瀬戸内の潮風が、旅の途中に心地よい解放感をくれた。',
      badge: {
        code: 'miyajimaguchi_senjokaku',
        name_ja: '宮島・千畳閣の潮風を感じし者',
        subtitle_en: 'Visitor of Senjokaku Pavilion',
        description:
          '豊国神社（千畳閣）を訪ね、巨大な木造大経堂から島の景色を一望した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting massive wooden pillars and open timber floor framing a view of a vermilion five-story pagoda and distant sea, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「大聖院」の石段を登り、五百羅漢や厳かな堂宇が連なる弥山麓の杜を歩いた瞬間',
      subtext:
        '宮島最古の歴史を誇る真言宗の霊場に満ちる深い祈りの空気が、心を静かに満たしてくれた。',
      badge: {
        code: 'miyajimaguchi_daishoin',
        name_ja: '宮島・弥山麓の大聖院に祈りし者',
        subtitle_en: 'Visitor of Daisho-in Temple',
        description:
          '大聖院を訪ね、宮島最古の寺院として伝わる弥山麓の霊場を参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting stone temple steps lined with tiny moss-covered statues and spinning prayer wheels beneath maple leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'miyajimaguchi_complete',
    name_ja: '宮島・海上の社殿と神の島を巡る旅人',
    subtitle_en: 'Walker of Miyajima',
    description:
      '宮島表参道商店街から厳島神社、千畳閣、大聖院、紅葉谷公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the vermilion sea O-Torii gate, the five-story pagoda, and bright maple leaves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '宮島表参道商店街',
      spot_type: '買い物',
      description:
        '宮島桟橋から厳島神社へと続く約350mの商店街（清盛通り）。焼きたてのもみじ饅頭や焼き牡蠣、杓子などの土産物店が軒を連ねる。9:00〜18:00頃（店舗により異なる）。',
      address: '広島県廿日市市宮島町536-1',
      prefecture: '広島県',
      municipality: '廿日市市',
      lat: 34.299036,
      lng: 132.321761,
      clue: 'JR宮島口駅からフェリーで海を渡り、宮島桟橋から厳島神社へと続く「宮島表参道商店街」から島の散策を始めよう（9:00〜18:00頃）。約350メートルの通りには焼きたてのもみじ饅頭や香ばしい焼き牡蠣、伝統工芸の宮島杓子など島ならではの店が並んでいる。瀬戸内の穏やかな潮風と参道の活気ある賑わいを楽しみながら、神の島への歩みをこれからも心弾ませて笑顔で軽やかに踏み出したい。',
      surprise:
        '商店街の近くにあるetto宮島交流館には長さ約7.7m・重さ約2.5トンにもおよぶ世界一大きな木製杓子「大杓子」が展示されており、島の象徴となっています。',
      hook: '参道の活気に触れたら、南西へ歩いて海上の世界遺産・厳島神社へ向かおう。',
      f7_fragment: '宮島桟橋から厳島神社へ続くメイン参道、もみじ饅頭や焼き牡蠣が並ぶ。',
      f7_full:
        '「宮島表参道商店街」を歩き、焼きたてのもみじ饅頭と神の島の活気に出合った。',
      image_prompt:
        'Lively Japanese island shopping street illustration of Miyajima Omotesando, traditional wooden awnings, freshly baked maple-leaf manju cakes, hanging lanterns and gentle deer strolling nearby, no text, no letters.',
    },
    {
      name: '厳島神社',
      spot_type: '見どころ',
      description:
        '推古天皇元年（593年）創建と伝わり、平清盛によって現在の海上社殿の規模に造営された世界遺産。潮の満ち引きにより表情を変える大鳥居と回廊が圧巻。6:30〜18:00（季節変動あり）、大人300円。',
      address: '広島県廿日市市宮島町1-1',
      prefecture: '広島県',
      municipality: '廿日市市',
      lat: 34.29599,
      lng: 132.319828,
      clue: '平清盛によって現在の荘厳な海上社殿へと造営され、世界遺産に登録されている「厳島神社」へ参拝しよう（6:30〜18:00・季節変動あり、昇殿料大人300円）。海上に張り巡らされた朱塗りの回廊を歩くと、満潮時には社殿が海に浮かび、干潮時には大鳥居の足元まで歩いて近づくことができる。瀬戸内の海と弥山を背景にした平安の優美な建築美を、これからも深く静かにしっかりと心に刻みたい。',
      surprise:
        '社殿の板の間にはあえて隙間が設けられており、台風などの高潮が来た際に下から突き上げる波の力を逃がす先人の知恵が活かされています。',
      hook: '海上の社殿を参拝したら、北東の高台にある千畳閣へ登ろう。',
      f7_fragment: '平清盛造営の海上社殿と大鳥居が潮の満ち引きに映える世界遺産。',
      f7_full:
        '「厳島神社」の朱塗りの回廊を歩き、潮の満ち引きと調和する平安の建築美に見入った。',
      image_prompt:
        'Iconic modern ukiyo-e illustration of Itsukushima Shrine in Miyajima, vermilion wooden corridors hovering over calm high-tide sea water facing the towering O-Torii gate and forested mountains, no text, no letters.',
    },
    {
      name: '豊国神社（千畳閣）',
      spot_type: '見どころ',
      description:
        '天正15年（1587年）に豊臣秀吉が建立を命じた大経堂で、畳857枚分の広さから「千畳閣」と呼ばれる国の重要文化財。未完のまま壁がなく開放的。8:30〜16:30、大人100円。',
      address: '広島県廿日市市宮島町1-1',
      prefecture: '広島県',
      municipality: '廿日市市',
      lat: 34.297321,
      lng: 132.320279,
      clue: '豊臣秀吉が建立を命じた未完の大経堂「豊国神社（千畳閣）」へ上がろう（8:30〜16:30・大人100円）。壁のない開放的な板の間で潮風を受けながら五重塔と海を眺めたい。',
      surprise:
        '秀吉の死去により工事が中断されたため天井の板張りや壁がありませんが、かえって太い柱と梁の木組みや五重塔との美しい対比が際立っています。',
      hook: '千畳閣の涼風を受けたら、南西の弥山麓にある古刹・大聖院へ向かおう。',
      f7_fragment: '豊臣秀吉建立の未完の大経堂、開放的な板の間から五重塔と海を望む。',
      f7_full:
        '「豊国神社（千畳閣）」の板の間に座り、瀬戸内の潮風と五重塔の眺めを堪能した。',
      image_prompt:
        'Atmospheric Japanese wooden pavilion illustration of Senjokaku in Miyajima, massive dark cypress pillars and polished wood floor open to sea breeze framing a nearby vermilion five-story pagoda, no text, no letters.',
    },
    {
      name: '大聖院',
      spot_type: '見どころ',
      description:
        '大同元年（806年）に弘法大師空海によって開かれたと伝わる宮島最古の寺院。石段の摩尼車や五百羅漢庭園、数多くの仏像が見どころ。8:00〜17:00、境内拝観無料。',
      address: '広島県廿日市市宮島町210',
      prefecture: '広島県',
      municipality: '廿日市市',
      lat: 34.292046,
      lng: 132.318493,
      clue: '弘法大師空海が弥山で修行された際に開創したと伝わる、宮島最古の寺院「大聖院」へ参拝しよう（8:00〜17:00・境内無料）。石段の手すりに並んだ摩尼車を回しながら仁王門をくぐると、広大な境内に本堂や観音堂、表情豊かな五百羅漢像が静かに佇んでいる。明治天皇行幸の際の御在所ともなった由緒ある霊場で、弥山麓の深い静寂と清らかな祈りの空気をこれからも静かにたっぷりと深く感じたい。',
      surprise:
        '境内の一角にある「遍照窟」には、四国八十八ヶ所の本尊が祀られており、足元に敷かれた砂を踏むことでお遍路と同じ功徳が得られると伝わります。',
      hook: '古刹の祈りに触れたら、東の谷あいにある紅葉谷公園で旅を結ぼう。',
      f7_fragment: '弘法大師開創と伝わる宮島最古の寺院、五百羅漢と摩尼車の石段が印象的。',
      f7_full:
        '「大聖院」の石段を登り、弥山麓の杜に抱かれた厳かな堂宇と五百羅漢に手を合わせた。',
      image_prompt:
        'Sacred Japanese mountain temple illustration of Daisho-in in Miyajima, stone stairway lined with spinning bronze prayer wheels and moss-covered small statues beneath maple canopies, soft afternoon light, no text, no letters.',
    },
    {
      name: '紅葉谷公園',
      spot_type: '見どころ',
      description:
        '弥山の麓、紅葉谷川に沿って広がる約700本のモミジが美しい自然公園。新緑や紅葉の季節はもちろん、清流と野生の鹿に出会える癒やしの散策路。常時開放、無料。',
      address: '広島県廿日市市宮島町紅葉谷1',
      prefecture: '広島県',
      municipality: '廿日市市',
      lat: 34.292215,
      lng: 132.324518,
      clue: '弥山の麓、清らかな紅葉谷川に沿って広がる自然公園「紅葉谷公園」で旅を締めくくろう（常時開放・入園無料）。約700本のイロハモミジやヤマモミジが谷を覆い、春から夏は眩しい新緑、秋には鮮やかな錦織りなす景色が散策客を優しく包んでくれる。朱塗りのもみじ橋を渡りながら野生の鹿と出会う穏やかな時間の中で、宮島の深い余韻をこれからも大切に深く胸の奥へとずっと留めて美しく結びたい。',
      surprise:
        '公園のさらに奥には弥山山頂へ向かう宮島ロープウエーの乗り場もあり、瀬戸内海の多島美を望む大パノラマへも繋がっています。',
      hook: '',
      f7_fragment: '約700本のモミジと清流が美しい弥山麓の公園、新緑と紅葉の名所。',
      f7_full:
        '「紅葉谷公園」の清流ともみじ橋のほとりを歩き、神の島・宮島の旅を締めくくった。',
      image_prompt:
        'Peaceful nature illustration of Momijidani Park in Miyajima, small arched vermilion bridge crossing a clear mountain stream shaded by lush maple trees with gentle wild deer resting by mossy rocks, no text, no letters.',
    },
  ],
};
