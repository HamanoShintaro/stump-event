export default {
  slug: 'noshiro',
  station_order: 600,
  station: '能代駅',
  line: 'JR五能線',
  area_name: '能代・木都の秋田杉と銘菓の街',
  prefecture: '秋田県',
  municipality: '能代市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['秋田県', '能代市', '能代駅', '旧料亭金勇', '翁飴'],
  style_genre: 'pictorial_isometric_map',
  title: '天然秋田杉が香る木都・能代のまちへ',
  description:
    '米代川の河口に開け、天然秋田杉の集散地「木都（もくと）」として栄えた秋田県能代市。狛猿が迎える総鎮守から、中心街の洋食ランチ、国登録有形文化財の旧料亭、リノベビルの駅前カフェを経て、四百余年続く伝統銘菓の老舗までを巡る。',
  eyecatch_prompt:
    'Elevated isometric pictorial travel map illustration of Noshiro timber town in Akita, featuring a grand traditional cedar wooden ryotei building with tiled roof, stone shrine torii beneath tall Japanese cedars, and quiet merchant streets on natural textured cream paper, no text, no people.',
  question:
    '木都・能代の杉の香りとまちの記憶を巡るなかで、誰かへ語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 3,
      text: '国登録有形文化財「旧料亭金勇」で、天然秋田杉を尽くした百十畳の大広間を仰いだとき',
      subtext:
        '一枚板の天井や緻密な組子細工など、かつて「東洋一の木都」と呼ばれた能代の誇りと職人技に圧倒された。',
      badge: {
        code: 'noshiro_kaneyu',
        name_ja: '旧料亭金勇・木都の匠を仰ぎし者',
        subtitle_en: 'Admirer of Former Ryotei Kaneyu',
        description:
          '能代市旧料亭金勇を訪ね、天然秋田杉を贅沢に用いた大広間と木都の建築文化に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a grand traditional Japanese cedar timber hall interior with wide tatami mats and wooden lattice transoms, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 1,
      text: '能代の総鎮守「日吉神社」の参道で、可愛らしい狛猿の石像に出迎えてもらったとき',
      subtext:
        '境内を包む神聖な杉木立と、災いを「去る」と親しまれる狛猿の佇まいに旅の心が和んだ。',
      badge: {
        code: 'noshiro_hiyoshi_shrine',
        name_ja: '能代総鎮守・日吉神社の参拝者',
        subtitle_en: 'Pilgrim of Noshiro Hiyoshi Shrine',
        description:
          '日吉神社を参拝し、狛猿が守る能代の総鎮守の杜と歴史に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a stone shrine torii gate flanked by carved guardian monkey statues beneath green cedar boughs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「cafe & asobiba 4-6」で、リノベーションビルの温かな空間と特製スイーツを味わったとき',
      subtext:
        '歴史ある材木商の街に新しい風を吹き込む駅前の拠点で、地元食材の魅力と居心地の良さを実感した。',
      badge: {
        code: 'noshiro_yonnoroku',
        name_ja: '能代駅前・4-6カフェの寛ぎ人',
        subtitle_en: 'Guest of Cafe 4-6 Noshiro',
        description:
          'マルヒコビルヂング内のcafe & asobiba 4-6を訪ね、能代の新たな賑わいと寛ぎに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a classic ceramic coffee cup and caramel custard pudding on a warm wooden cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '四百余年続く「翁飴本舗・桔梗屋」で、琥珀色に透き通る伝統銘菓・翁飴を選んだとき',
      subtext:
        '麦芽糖の優しい甘みと木都の歴史とともに受け継がれてきた老舗の暖簾に、能代の奥深さを感じた。',
      badge: {
        code: 'noshiro_kikyouya',
        name_ja: '翁飴本舗・桔梗屋の旅人',
        subtitle_en: 'Patron of Kikyouya Okina-ame',
        description:
          '文禄年間創業の翁飴本舗・桔梗屋を訪ね、伝統製法の翁飴を手土産にした証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting translucent golden-amber traditional rice-malt candies arranged on a cedar wood tray beside green tea, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'noshiro_complete',
    name_ja: '能代・木都と秋田杉の物語を巡りし者',
    subtitle_en: 'Walker of Noshiro Timber Town',
    description:
      '日吉神社からキッチンターブル、旧料亭金勇、cafe & asobiba 4-6、翁飴本舗・桔梗屋までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a traditional cedar ryotei roof, stone guardian monkey silhouette, and golden amber sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '日吉神社',
      spot_type: '見どころ',
      description:
        '能代の総鎮守として知られる古社。狛犬の代わりに愛らしい狛猿が参道を守り、春の「嫁見まつり」の舞台ともなる。境内参拝自由。',
      address: '秋田県能代市御指南町3-24',
      prefecture: '秋田県',
      city: '能代市',
      lat: 40.211612,
      lng: 140.036534,
      clue: 'JR五能線の能代駅を出て北西の市街地へ歩くと、鬱蒼とした杉木立に包まれた能代の総鎮守「日吉神社」に着く（境内参拝自由）。鳥居をくぐって参道を進むと、珍しい「狛猿」の石像が旅人を温かく迎えてくれる。古くから米代川の水運と林業で栄えた能代の人々が、商売繁盛や家内安全を祈り続けてきた信仰の中心地だ。清々しい木の香りに包まれながら、木都を辿る最初のしるしをここで力強く刻み出そう。',
      surprise:
        '日吉神社の神使である猿は「魔が去る」に通じる縁起物として親しまれ、境内のあちこちに表情豊かな狛猿が鎮座している。毎年春に行われる「嫁見まつり」も、花嫁たちが良縁を感謝して参拝する能代ならではの美しい伝統行事として長く大切に受け継がれ続ける。',
      hook: '日吉神社を参拝したら、西南西へ徒歩12分のキッチンターブルへ向かおう。',
      f7_fragment: '木立に守られた総鎮守の参道と、旅人を迎える愛らしい狛猿の姿。',
      f7_full: '能代の総鎮守・日吉神社に参拝し、木都の暮らしを見守り続けてきた信仰の歴史と穏やかな杜の空気にじっくり深く触れた。',
      image_prompt:
        'Wide morning view of a peaceful Japanese Shinto shrine courtyard in Noshiro with stone torii gate, carved stone monkey statues, and tall cedar trees, no text, no people.',
    },
    {
      name: 'キッチンターブル',
      spot_type: '食事',
      description:
        '畠町通り周辺で親しまれる洋食レストラン。ハンバーグやパスタ、地元食材を活かしたランチが人気。ランチ11:00〜14:00・ディナー17:00〜21:00、火曜等不定休。',
      address: '秋田県能代市畠町8-38',
      prefecture: '秋田県',
      city: '能代市',
      lat: 40.209822,
      lng: 140.028394,
      clue: '日吉神社から西南西へ徒歩12分、畠町の「キッチンターブル」で昼食にしよう（11:00〜14:00、火曜等不定休）。丁寧な洋食ランチを味わい、ひと息つこう。',
      surprise:
        'かつて能代の中心商店街として多くの木材商や市民で賑わった畠町通りに軒を連ねる一軒だ。昔ながらの街の温もりと気軽な洋食の味わいが調和し、地元の人々にとっても旅人にとってもホッと肩の力を抜ける食事処として世代を問わず広くずっと長く深く愛される。',
      hook: 'キッチンターブルで満たされたら、西南西へ徒歩4分の旧料亭金勇を訪ねよう。',
      f7_fragment: '畠町の通りに漂う洋食の香ばしい香り、心温まる午後の美味しいランチ。',
      f7_full: '畠町の洋食店「キッチンターブル」を訪ね、能代の中心街の賑わいを感じながら丁寧な昼食の時間を心から存分に味わった。',
      image_prompt:
        'Medium-wide interior view of a cozy wooden Japanese-Western bistro table with a steaming hamburger steak plate, rice, and warm sunlight through window curtains, no text, no people.',
    },
    {
      name: '旧料亭金勇',
      spot_type: '見どころ',
      description:
        '「木都・能代」を象徴する国登録有形文化財の老舗料亭建築。天然秋田杉の銘木を贅沢に用いた110畳の大広間や中庭を公開。開館9:30〜16:30（無料）、年末年始休。',
      address: '秋田県能代市柳町13-8',
      prefecture: '秋田県',
      city: '能代市',
      lat: 40.208888,
      lng: 140.025715,
      clue: 'キッチンターブルから西南西へ徒歩4分、堂々たる和風建築「能代市旧料亭金勇（かねゆう）」の玄関をくぐろう（9:30〜16:30、年末年始休・入館無料）。かつて「東洋一の木都」と謳われた能代の迎賓館として栄えた国登録有形文化財で、館内の随所に天然秋田杉の一枚板や見事な組子細工が使われている。二階に広がる百十畳もの大広間や美しい中庭をゆっくりと巡り、木都の粋を心ゆくまで体感しよう。',
      surprise:
        '大広間の天井には樹齢数百年クラスの天然秋田杉の柾目板が惜しげもなく張られ、柱や欄間にも職人の妙技が凝縮される。往時は全国の政財界人や木材関係者がこの座敷に集い、秋田杉の文化とともに華やかな宴を幾度となく繰り広げたと今も鮮やかに語り継がれる。',
      hook: '旧料亭金勇を見学したら、東南東へ徒歩7分のcafe & asobiba 4-6で一服しよう。',
      f7_fragment: '天然秋田杉が艶やかに光る百十畳の大広間、木都が誇る匠の空間。',
      f7_full: '国登録有形文化財の旧料亭金勇を訪ね、天然秋田杉を贅沢に用いた大広間と往時の迎賓文化の粋にじっくり心から触れた。',
      image_prompt:
        'Top-down flatlay detail of aged polished Japanese cedar floorboards, delicate wooden kumiko lattice shadow patterns, and a ceramic teacup on a low table, no text, no people.',
    },
    {
      name: 'cafe & asobiba 4-6',
      spot_type: '休憩',
      description:
        '能代駅近くの複合施設「マルヒコビルヂング」内の人気カフェ。地元食材を使ったスイーツやプリン、珈琲を楽しめる。営業時間11:00〜18:00、日・月曜定休。',
      address: '秋田県能代市元町4-6',
      prefecture: '秋田県',
      city: '能代市',
      lat: 40.207436,
      lng: 140.030549,
      clue: '旧料亭金勇から東南東へ徒歩7分、能代駅のほど近くに建つリノベーションビル内の「cafe & asobiba 4-6（よんのろく）」で足を休めよう（11:00〜18:00、日・月曜定休）。木の温もりと現代的な遊び心が調和した空間では、香り高い珈琲や濃厚なプリンなどの手作りスイーツが旅人の疲れを優しく癒やしてくれる。能代の新しいまちづくりの熱気を感じながら、午後の穏やかな寛ぎの時間をゆったり楽しもう。',
      surprise:
        '戦後に建てられた商社ビルを再生した「マルヒコビルヂング」の一角にあり、まちの活性化と若者の交流拠点として親しまれる。伝統の木材文化を守りながらも新しい感性を柔軟に取り入れる、今の能代の生き生きとした魅力がここに力強く明るく今も息づき続ける。',
      hook: '4-6で寛いだら、北北西へ徒歩5分の翁飴本舗・桔梗屋でお土産を選ぼう。',
      f7_fragment: '再生ビルの柔らかな照明と、濃厚プリンの甘い誘いに癒やされる午後。',
      f7_full: '能代駅近くの「cafe & asobiba 4-6」で珈琲とスイーツを楽しみ、新しいまちの温もりに包まれて一息ついた。',
      image_prompt:
        'Low-angle interior view of a bright renovated wooden cafe counter with a ceramic cup of coffee and a classic caramel custard pudding on a saucer, no text, no people.',
    },
    {
      name: '翁飴本舗・桔梗屋',
      spot_type: '買い物',
      description:
        '安土桃山時代の文禄元年創業と伝わる老舗和菓子店。もち米と麦芽糖だけで作る琥珀色の銘菓「翁飴」が名物。営業時間9:00〜18:30、木曜・第1・3日曜定休。',
      address: '秋田県能代市畠町6-8',
      prefecture: '秋田県',
      city: '能代市',
      lat: 40.210375,
      lng: 140.029527,
      clue: '4-6から北北西へ徒歩5分、歴史ある暖簾を掲げる老舗「翁飴本舗・桔梗屋」で旅を締めくくろう（9:00〜18:30、木曜・第1・3日曜定休）。安土桃山時代の創業から四百年以上受け継がれてきた看板銘菓「翁飴」は、良質なもち米と麦芽糖をじっくり煮詰めて作る、透き通る琥珀色の優しい甘みが特徴だ。能代の人々が大切に守り続けてきた素朴で上品な味わいを、大切な旅の手土産にここで選び取ろう。',
      surprise:
        'かつて日持ちのする栄養食や茶菓子として全国へ運ばれ、多くの文化人や旅人にも愛された能代屈指の伝統銘菓だ。添加物を一切使わず職人の勘と手間だけで丁寧に仕上げられるその味わいに、四百余年変わらぬ誠実な手仕事が今も力強く確かに深く込められ続ける。',
      hook: '',
      f7_fragment: '透き通る琥珀色の優しい甘み、四百余年の歴史が息づく伝統の翁飴。',
      f7_full: '老舗「翁飴本舗・桔梗屋」で伝統銘菓の翁飴を手に取り、天然秋田杉と歴史が香る木都・能代の旅を美しく締めくくった。',
      image_prompt:
        'Golden-hour view of a traditional Japanese confectionery wooden display counter with translucent golden-amber rice-malt candies in simple plain wooden boxes, no text, no people.',
    },
  ],
};
