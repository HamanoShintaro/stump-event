export default {
  slug: 'kanazawa',
  station_order: 656,
  station: '金沢',
  line: 'JR北陸新幹線',
  area_name: '金沢・兼六園と茶屋街の城下町',
  prefecture: '石川県',
  municipality: '金沢市',
  category: '歴史とグルメ',
  budget_tier: 3,
  tags: ['石川県', '金沢市', '金沢駅', '兼六園', 'ひがし茶屋街'],
  style_genre: 'ukiyoe_nishikie_vivid',
  title: '金沢・近江町市場と兼六園を歩く',
  description:
    'JR金沢駅から、市民の台所「近江町市場」と浅野川沿いの伝統街並み「ひがし茶屋街」、加賀百万石の居城跡「金沢城公園」、日本三名園の特別名勝「兼六園」、円形ガラス建築の「金沢21世紀美術館」を巡る散策路。',
  eyecatch_prompt:
    'Vivid Ukiyo-e Nishiki-e style illustration of Kanazawa castle town showing the iconic two-legged Kotoji-toro stone lantern beside Kasumi Pond in Kenrokuen Garden, red-lattice wooden teahouses of Higashi Chaya District, white lead-tiled Ishikawa-mon Gate of Kanazawa Castle, and lively seafood market, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '加賀百万石の庭園美と江戸の茶屋街、現代アートが響き合う金沢を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「近江町市場」の賑やかなアーケードを歩き、日本海の鮮魚や加賀野菜を眺めた瞬間',
      subtext:
        '三百年以上続く金沢の台所の活気に、北陸の豊かな海の幸と暮らしの息遣いを感じた。',
      badge: {
        code: 'kanazawa_omicho',
        name_ja: '金沢・近江町市場の旬に出会いし者',
        subtitle_en: 'Visitor of Omicho Market',
        description:
          '近江町市場を訪ね、日本海の魚介や加賀野菜が集まる金沢の台所を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a colorful seafood stall with sweet shrimp, snow crab and fresh local vegetables inside a traditional Japanese market, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「ひがし茶屋街」の紅殻格子の町並みを歩き、江戸の粋が息づく茶屋文化に触れた瞬間',
      subtext:
        '石畳に響く足音と和菓子や金箔の輝きが、タイムスリップしたような風情を運んでくれた。',
      badge: {
        code: 'kanazawa_higashi',
        name_ja: '金沢・ひがし茶屋街の粋を歩きし者',
        subtitle_en: 'Walker of Higashi Chaya',
        description:
          '国重要伝統的建造物群保存地区のひがし茶屋街を訪ね、木虫籠の町並みを散策した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing traditional two-story wooden teahouses with fine wooden lattice windows along a quiet stone-paved street, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「兼六園」の霞ヶ池ほとりに立ち、徽軫灯籠と美しい松の枝ぶりを仰いだ瞬間',
      subtext:
        '歴代加賀藩主が歳月をかけて造り上げた日本三名園の静謐な景色に、心が深く洗われた。',
      badge: {
        code: 'kanazawa_kenrokuen',
        name_ja: '金沢・特別名勝の兼六園を巡りし者',
        subtitle_en: 'Explorer of Kenrokuen',
        description:
          '日本三名園の一つ・兼六園を訪ね、霞ヶ池と徽軫灯籠が織りなす大名庭園を鑑賞した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the iconic two-legged stone lantern Kotoji-toro beside a calm garden pond framed by sculpted pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「金沢21世紀美術館」のガラス張りの円形空間を歩き、現代アートと街の融合を体感した瞬間',
      subtext:
        '伝統の城下町の真ん中に開かれた軽やかな美術館が、金沢の未来への感性を示していた。',
      badge: {
        code: 'kanazawa_21st',
        name_ja: '金沢・21世紀美術館で現代の美に触れし者',
        subtitle_en: 'Visitor of 21st Century Museum',
        description:
          '金沢21世紀美術館を訪ね、街に開かれた円形ガラス建築と現代アートに触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a sleek circular glass modern art museum pavilion set on a bright green lawn, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kanazawa_complete',
    name_ja: '金沢・兼六園と茶屋街を巡る旅人',
    subtitle_en: 'Walker of Kanazawa',
    description:
      '近江町市場からひがし茶屋街、金沢城公園、兼六園、金沢21世紀美術館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the two-legged Kenrokuen lantern, wooden teahouse lattice and a modern circular glass pavilion, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '近江町市場',
      spot_type: '食事',
      description:
        '享保6年（1721年）から続く「金沢市民の台所」。新鮮な日本海の魚介や加賀野菜、海鮮丼や食べ歩きグルメが約170店舗に並ぶ。9:00〜17:00頃（店舗により異なる・水曜休の店多し）、年始休。',
      address: '石川県金沢市上近江町50-1',
      prefecture: '石川県',
      municipality: '金沢市',
      lat: 36.571734,
      lng: 136.655865,
      clue: 'JR金沢駅から東へ歩いて約12分、三百年以上の歴史を誇る金沢市民の台所「近江町市場」から街歩きを始めよう（9:00〜17:00頃・店舗により異なる）。アーケードの中には甘エビやのどぐろなど日本海の鮮魚店や加賀野菜の青果店、人気の海鮮丼や練り物の店がぎっしりと並ぶ。活気ある掛け声に耳を傾けながら旬の味覚を楽しみ、加賀百万石の旅をこれからもずっと元気に明るく楽しく始めたい。',
      surprise:
        '江戸時代の享保六年に金沢城下の魚市や青物市を集めて整備されたのが始まりで、今もプロの料理人から観光客まで幅広く愛されている。',
      hook: '市場の味覚を堪能したら、東北東へ歩いて浅野川向こうのひがし茶屋街へ向かおう。',
      f7_fragment: '享保六年からの歴史を誇る、日本海の幸が集う「金沢市民の台所」。',
      f7_full:
        '「近江町市場」の活気あふれる通りを歩き、日本海の鮮魚や加賀野菜が並ぶ金沢の豊かな食文化に触れた。',
      image_prompt:
        'Bustling covered Japanese seafood market Omicho in Kanazawa with fresh crab, shrimp and colorful vegetable displays in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: 'ひがし茶屋街',
      spot_type: '買い物',
      description:
        '文政3年（1820年）に加賀藩が整備した茶屋街で国重要伝統的建造物群保存地区。木虫籠の美しい町家カフェや和菓子店、金箔工芸の店が並ぶ。散策自由（店舗10:00〜17:00頃）。',
      address: '石川県金沢市東山1-13',
      prefecture: '石川県',
      municipality: '金沢市',
      lat: 36.572694,
      lng: 136.665822,
      clue: '近江町市場から浅野川大橋を渡り、江戸時代の風情をそのまま残す「ひがし茶屋街」へ足を踏み入れよう（散策自由・店舗10:00〜17:00頃）。紅殻色の格子「木虫籠（きむすこ）」が連なる石畳の通りには、昔ながらの和菓子舗や町家カフェ、金沢伝統の金箔工芸ショップが軒を連ねている。三味線の音色が似合う優美な街並みを歩き、加賀の粋な美意識をこれからもずっと心静かに深く味わいたい。',
      surprise:
        '茶屋建築の多くは一階が細かな縦格子、二階がお客様をもてなす座敷となっており、街並み全体が国の重要伝統的建造物群保存地区に選定されている。',
      hook: '茶屋街の余韻を抱いたら、南西へ歩いて加賀前田家の居城・金沢城公園へ向かおう。',
      f7_fragment: '木虫籠の町家が石畳に連なる、江戸の粋を伝える茶屋街。',
      f7_full:
        '「ひがし茶屋街」の紅殻格子の石畳を歩き、江戸時代から受け継がれる金沢の優美な茶屋文化に触れた。',
      image_prompt:
        'Traditional wooden two-story teahouses with fine lattice windows along stone-paved Higashi Chaya street in Kanazawa in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '金沢城公園',
      spot_type: '見どころ',
      description:
        '加賀百万石・前田家の居城跡を整備した公園。鉛瓦の白い屋根が美しい石川門や復元された菱櫓・五十間長屋が見どころ。7:00〜18:00（10/16〜2月末8:00〜17:00）、無休、入園無料（一部施設有料）。',
      address: '石川県金沢市丸の内1-1',
      prefecture: '石川県',
      municipality: '金沢市',
      lat: 36.565946,
      lng: 136.658845,
      clue: '浅野川から南西へ歩き、「金沢城公園」へ入ろう（7:00〜18:00・冬期変動あり）。鉛瓦が白く輝く石川門や堂々たる五十間長屋の石垣をこれからもじっくり仰ぎたい。',
      surprise:
        '金沢城の屋根には非常時に溶かして鉄砲玉にするためとも伝わる白い「鉛瓦」や、海鼠壁、多様な石垣の積み方が見られるのが特徴だ。',
      hook: 'お城の石垣を巡ったら、石川橋を渡ってすぐ南東の日本三名園・兼六園へ向かおう。',
      f7_fragment: '白い鉛瓦の石川門と多様な石垣が残る、加賀百万石の居城跡。',
      f7_full:
        '「金沢城公園」の白い石川門と石垣を歩き、加賀百万石を築いた前田家の威容と城づくりの知恵に触れた。',
      image_prompt:
        'White lead-tiled Ishikawa-mon gate and grand stone walls of Kanazawa Castle surrounded by pine trees in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '兼六園',
      spot_type: '見どころ',
      description:
        '日本三名園の一つに数えられる国の特別名勝。歴代加賀藩主が長い歳月をかけて築いた大名庭園で、霞ヶ池と二本脚の徽軫灯籠が象徴的。7:00〜18:00（10/16〜2月末8:00〜17:00）、年中無休、大人320円。',
      address: '石川県金沢市兼六町1',
      prefecture: '石川県',
      municipality: '金沢市',
      lat: 36.562128,
      lng: 136.662652,
      clue: '金沢城の石川橋を渡り、日本三名園の一つに数えられる国の特別名勝「兼六園」へ入ろう（7:00〜18:00・冬期8:00〜17:00、年中無休、大人320円）。広大な霞ヶ池のほとりに二本脚の「徽軫灯籠（ことじとうろう）」が佇み、日本最古の噴水や四季折々の花木、冬の雪吊りなど六勝を兼ね備えた名園の粋が凝縮されている。水面に映る松の緑を眺めながら、大名庭園の静謐な美にこれからも浸りたい。',
      surprise:
        '「兼六園」の名は宋代の『洛陽名園記』に記された「宏大・幽邃・人力・蒼古・水泉・眺望」の六つの優れた景観を兼ね備えることに由来する。',
      hook: '名園の美を堪能したら、すぐ西隣に建つ金沢21世紀美術館で旅を結ぼう。',
      f7_fragment: '霞ヶ池と徽軫灯籠が象徴的な、日本三名園・国の特別名勝。',
      f7_full:
        '日本三名園の「兼六園」で徽軫灯籠と霞ヶ池の絶景を眺め、歴代加賀藩主が磨いた大名庭園の粋を味わった。',
      image_prompt:
        'Iconic two-legged Kotoji-toro stone lantern beside Kasumi Pond and sculpted pine trees in Kenrokuen Garden in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '金沢21世紀美術館',
      spot_type: '見どころ',
      description:
        '円形の全面ガラス張り建築が特徴の現代美術館。街に開かれた交流ゾーンではユニークな建築やパブリックアートを気軽に楽しめる。展覧会ゾーン10:00〜18:00（金土〜20:00・月曜休）／交流ゾーン9:00〜22:00。',
      address: '石川県金沢市広坂1-2-1',
      prefecture: '石川県',
      municipality: '金沢市',
      lat: 36.560792,
      lng: 136.658825,
      clue: '兼六園の真弓坂口からすぐ西側、円形の全面ガラス建築が目を引く「金沢21世紀美術館」で旅を締めくくろう（展覧会10:00〜18:00・月曜休／交流ゾーン9:00〜22:00）。公園のように四方から出入りできる軽やかな空間には、世界的に人気の「スイミング・プール」や庭の体験型アートが点在している。伝統の茶屋街や大名庭園と現代の創造性が響き合う金沢の奥深さを、これからも心に刻みたい。',
      surprise:
        'SANAA（妹島和世＋西沢立衛）が設計した建物には正面や裏口という概念がなく、どの方向からでも街と人が自然に出会えるよう工夫されている。',
      hook: '',
      f7_fragment: '街に開かれた円形ガラス建築が象徴的な、現代アートの殿堂。',
      f7_full:
        '「金沢21世紀美術館」の開放的な空間で現代アートに出会い、伝統と革新が調和する金沢の旅を結んだ。',
      image_prompt:
        'Sleek circular glass-walled contemporary museum building surrounded by bright green lawn and playful outdoor art sculptures in Kanazawa in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
  ],
};
