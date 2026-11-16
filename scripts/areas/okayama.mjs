export default {
  slug: 'okayama',
  station_order: 657,
  station: '岡山',
  line: 'JR山陽新幹線',
  area_name: '岡山・烏城と後楽園の城下町',
  prefecture: '岡山県',
  municipality: '岡山市',
  category: '歴史とグルメ',
  budget_tier: 3,
  tags: ['岡山県', '岡山市', '岡山駅', '岡山後楽園', '岡山城'],
  style_genre: 'retro_sepia_ink',
  title: '岡山・烏城の岡山城と後楽園を歩く',
  description:
    'JR岡山駅から、オランダ通り近くの老舗純喫茶「ダンケ」と白桃スイーツが人気の「城下カフェ 表町店」、漆黒の天守「岡山城（烏城）」、旭川沿いの「碧水園」、日本三名園「岡山後楽園」を巡る散策路。',
  eyecatch_prompt:
    'Retro sepia ink and watercolor illustration of Okayama castle town showing the striking black-clapboard keep of Okayama Castle across the Asahi River, the sweeping emerald lawns and arched Tsukimi Bridge of Korakuen Garden, riverside tea pavilion, and historic arcade street, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '表町商店街の珈琲とフルーツの香り、漆黒の烏城と広大な後楽園が繋がる岡山を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「ダンケ」の落ち着いた二階の純喫茶空間で、香り高い珈琲を味わった瞬間',
      subtext:
        'オランダ通りそばで長年愛される喫茶店が、晴れの国の街歩きを穏やかに始めてくれた。',
      badge: {
        code: 'okayama_danke',
        name_ja: '岡山・表町の老舗純喫茶ダンケで寛ぎし者',
        subtitle_en: 'Guest of Cafe Danke',
        description:
          '純喫茶「ダンケ」を訪ね、表町エリアで丁寧な珈琲の時間を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic pour-over coffee cup beside a slice of toast on a dark wooden table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「城下カフェ 表町店」で、フルーツ王国・岡山ならではの瑞々しいスイーツを味わった瞬間',
      subtext:
        '城下町散策の途中で出会う甘い果実の彩りが、岡山の旅をいっそう華やかにしてくれた。',
      badge: {
        code: 'okayama_jyokacafe',
        name_ja: '岡山・城下カフェで果実の甘味に出会いし者',
        subtitle_en: 'Taster of Okayama Fruit',
        description:
          '城下カフェ 表町店を訪ね、岡山ならではの季節のフルーツスイーツや珈琲を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a bright glass parfait layered with fresh white peaches, grapes and whipped cream, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「岡山城」の漆黒の下見板張りの天守閣を見上げ、旭川の水面に映る烏城を眺めた瞬間',
      subtext:
        '宇喜多秀家や小早川秀秋らが築いた勇壮な黒いお城が、岡山の空に凛とそびえていた。',
      badge: {
        code: 'okayama_castle',
        name_ja: '岡山・漆黒の烏城岡山城を仰ぎし者',
        subtitle_en: 'Climber of Okayama Castle',
        description:
          '岡山城（烏城）を訪ね、令和の大改修を経た漆黒の天守閣と歴史展示を鑑賞した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the striking black-walled keep of Okayama Castle with golden roof ornaments beside a river, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「岡山後楽園」の広々とした芝生と沢の池を眺め、日本三名園の開放感に包まれた瞬間',
      subtext:
        '旭川の向こうに烏城を借景として取り込む雄大な大名庭園が、旅のフィナーレを飾った。',
      badge: {
        code: 'okayama_korakuen',
        name_ja: '岡山・日本三名園の後楽園を巡りし者',
        subtitle_en: 'Explorer of Korakuen',
        description:
          '日本三名園の一つ・岡山後楽園を訪ね、借景の岡山城と広大な庭園美を堪能した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing lush green lawns, calm garden pond and a distant black castle tower across a wooden bridge, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'okayama_complete',
    name_ja: '岡山・烏城と後楽園を巡る旅人',
    subtitle_en: 'Walker of Okayama',
    description:
      'ダンケから城下カフェ、岡山城、碧水園、岡山後楽園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the black keep of Okayama Castle, green Korakuen lawns and a sweet peach parfait glass, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'ダンケ',
      spot_type: '休憩',
      description:
        'オランダ通り近く、岡山シンフォニーホール脇に佇む長年愛される純喫茶。朝8時から香り高いコーヒーやモーニングで落ち着いた時間を過ごせる。8:00〜18:00、火曜休。',
      address: '岡山県岡山市北区表町1-4-1 表町一丁目第二開発ビル 2F',
      prefecture: '岡山県',
      municipality: '岡山市',
      lat: 34.664734,
      lng: 133.929737,
      clue: 'JR岡山駅から桃太郎大通りを東へ歩き（または路面電車で城下電停へ）、オランダ通り近くに佇む老舗純喫茶「ダンケ」から旅を始めよう（8:00〜18:00、火曜休）。階段を上がった先の落ち着いた空間で、丁寧な珈琲とトーストの香りに包まれれば街歩きの心が自然とほぐれていく。長年地元客に愛される純喫茶の空気に触れ、お城と庭園の旅へこれからもずっと心穏やかに明るく楽しく踏み出したい。',
      surprise:
        '表町・オランダ通り周辺は岡山城の城下町時代から続く商業の中心地で、今も昔ながらの個人店と新しいカフェが心地よく共存している。',
      hook: '珈琲で目覚めたら、北西の表町1丁目・オランダ通りそばの城下カフェ 表町店へ向かおう。',
      f7_fragment: 'オランダ通りそばで朝の珈琲と落ち着いた時間を守る、老舗純喫茶。',
      f7_full:
        '表町の老舗純喫茶「ダンケ」で香り高い珈琲を味わい、城下町・岡山の静かな散策を始めた。',
      image_prompt:
        'Cozy retro coffee shop interior tucked inside historic Omotecho arcade in Okayama with dark wood counter and roasted coffee aroma in retro sepia ink style, no text, no letters.',
    },
    {
      name: '城下カフェ 表町店',
      spot_type: '休憩',
      description:
        '表町のオランダ通りエリアに佇む人気カフェ。フルーツ王国・岡山の新鮮な果実を使ったパフェやスイーツ、ランチが楽しめる。11:00〜18:00（金土〜22:00）、火曜休（※不定期の臨時休業あり）。',
      address: '岡山県岡山市北区表町1-1-8 ライオンズタワー岡山表町1F',
      prefecture: '岡山県',
      municipality: '岡山市',
      lat: 34.665242,
      lng: 133.928887,
      clue: 'ダンケから北西へ歩いてすぐ、オランダ通り近くの「城下カフェ 表町店」へ立ち寄ろう（11:00〜18:00・金土〜22:00、火曜休※不定休あり）。フルーツ王国・岡山ならではの瑞々しい白桃やマスカットを使った季節のパフェや、地元食材のランチが評判の人気店だ。お城と美術館にもほど近い爽やかな空間で岡山の甘い恵みを味わい、いよいよ漆黒の名城へ向けてこれからも楽しく歩みを進めたい。',
      surprise:
        '瀬戸内の温暖な気候で育つ岡山の白桃やマスカットは全国随一の品質を誇り、城下町周辺のカフェでも季節ごとの味わいを楽しめる。',
      hook: 'フルーツの甘味に触れたら、東へ歩いて旭川ほとりの岡山城（烏城）へ向かおう。',
      f7_fragment: 'フルーツ王国・岡山ならではの季節のパフェが人気の、表町のカフェ。',
      f7_full:
        '「城下カフェ 表町店」で岡山ならではの季節のフルーツスイーツに触れ、晴れの国の豊かな恵みを感じた。',
      image_prompt:
        'Bright charming town cafe in Okayama serving a tall glass parfait layered with fresh white peaches and green grapes in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: '岡山城（烏城）',
      spot_type: '見どころ',
      description:
        '宇喜多秀家が築いた名城で、黒塗りの下見板張りから「烏城（うじょう）」と呼ばれる。令和の大改修で展示も一新された。9:00〜17:30（入場17:00まで）、12月29〜31日休、大人500円。',
      address: '岡山県岡山市北区丸の内2-3-1',
      prefecture: '岡山県',
      municipality: '岡山市',
      lat: 34.665613,
      lng: 133.935737,
      clue: '旭川のほとりにそびえる漆黒の名城「岡山城（烏城）」の天守閣へ登ろう（9:00〜17:30、大人500円）。黒塗りの下見板張りの威容と展示を一新した館内をじっくり巡りたい。',
      surprise:
        '安土桃山時代に豊臣政権五大老の宇喜多秀家が築いた天守は、織田信長の安土城を参考にしたとも伝わる不等辺五角形の珍しい平面を持つ。',
      hook: '烏城を仰いだら、北の月見橋手前の旭川沿いに佇む碧水園へ向かおう。',
      f7_fragment: '漆黒の下見板張りから「烏城」と呼ばれる、宇喜多秀家ゆかりの名城。',
      f7_full:
        '漆黒の「岡山城（烏城）」を見上げて天守閣へ登り、宇喜多秀家から続く岡山の城下町の歴史を体感した。',
      image_prompt:
        'Striking black-clapboard keep of Okayama Castle with golden shachihoko roof ornaments rising beside the Asahi River in retro sepia ink style, no text, no letters.',
    },
    {
      name: '碧水園',
      spot_type: '食事',
      description:
        '岡山後楽園と岡山城を結ぶ月見橋のたもと、旭川沿いに佇む歴史ある食事処・カフェ。岡山城を眺めながらカレーやオムライス、甘味を味わえる。10:00〜17:00頃（季節変動あり）、不定休。',
      address: '岡山県岡山市北区後楽園1-6',
      prefecture: '岡山県',
      municipality: '岡山市',
      lat: 34.666726,
      lng: 133.935055,
      clue: '岡山城から月見橋のたもとへ降り、旭川の水面を間近に望む老舗の茶屋・食事処「碧水園」でひと休みしよう（10:00〜17:00頃、不定休）。川の対岸に漆黒の岡山城天守閣を仰ぎ見ながら味わう特製カレーやきびだんご付きのお抹茶は、旅人にとって格別の心地よさがある。お城と日本三名園を繋ぐ水辺の特等席で川風に吹かれ、最後の後楽園散策へこれからもずっとゆったりと豊かに心を整えよう。',
      surprise:
        '旭川ではアヒルボートなどの舟遊びも親しまれており、碧水園の窓辺からは水面に映る岡山城の姿を一日中眺めることができる。',
      hook: '水辺で休んだら、すぐ東北東の月見橋を渡って日本三名園・岡山後楽園で旅を結ぼう。',
      f7_fragment: '旭川のほとりで烏城を望みながら食事や甘味を味わう、水辺の茶屋。',
      f7_full:
        '旭川沿いの「碧水園」で対岸の岡山城を眺めながら寛ぎ、水都・岡山の穏やかな時間の流れを感じた。',
      image_prompt:
        'Riverside teahouse restaurant Hekisuien along the Asahi River framing a view of black Okayama Castle across the water in retro sepia ink style, no text, no letters.',
    },
    {
      name: '岡山後楽園',
      spot_type: '見どころ',
      description:
        '岡山藩主・池田綱政が造らせた日本三名園の一つで国の特別名勝。広大な芝生と沢の池、岡山城を借景にした雄大な景観が広がる。7:30〜18:00（10〜3月8:00〜17:00）、年中無休、大人500円。',
      address: '岡山県岡山市北区後楽園1-5',
      prefecture: '岡山県',
      municipality: '岡山市',
      lat: 34.667334,
      lng: 133.93617,
      clue: '月見橋を渡り、日本三名園の一つに数えられる国の特別名勝「岡山後楽園」を歩いて旅を締めくくろう（7:30〜18:00・冬期8:00〜17:00、年中無休、大人500円）。岡山藩主・池田綱政が家臣に造らせた江戸時代の大名庭園で、日本の庭園では珍しい広大な芝生と清らかな沢の池、そして遠く岡山城を借景とした伸びやかな風景が広がる。晴れの国の豊かな歴史と自然をこれからも胸に刻みたい。',
      surprise:
        '園内には藩主の居間だった延養亭や能舞台、丹頂鶴の飼育舎や茶畑まであり、城下町の迎賓館としての役割を今に伝えている。',
      hook: '',
      f7_fragment: '広大な芝生と烏城の借景が伸びやかな、日本三名園の特別名勝。',
      f7_full:
        '日本三名園の「岡山後楽園」で開放的な芝生と借景の岡山城を仰ぎ、表町と烏城を巡った岡山の旅を結んだ。',
      image_prompt:
        'Expansive emerald lawns, calm garden pond and traditional wooden pavilion of Korakuen Garden with distant black Okayama Castle in retro sepia ink style, no text, no letters.',
    },
  ],
};
