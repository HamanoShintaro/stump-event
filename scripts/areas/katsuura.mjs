export default {
  slug: 'katsuura',
  station_order: 626,
  station: '勝浦',
  line: 'JR外房線',
  area_name: '勝浦・日本三大朝市と港町',
  prefecture: '千葉県',
  municipality: '勝浦市',
  category: '海とグルメ',
  budget_tier: 2,
  tags: ['千葉県', '勝浦市', '勝浦駅', '勝浦朝市', '勝浦タンタンメン'],
  style_genre: 'pictorial_isometric_map',
  title: '勝浦朝市と遠見岬神社を巡る外房の港町さんぽ',
  description:
    'JR勝浦駅から南国風カフェ「cafe vinrose」とご当地グルメ・勝浦タンタンメンの一杯を経て、四百三十年以上の歴史を誇る日本三大朝市「勝浦朝市」と六十段の石段が印象的な「遠見岬神社」へと至る外房の港町散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Katsuura port town in Chiba showing Katsuura railway station, sunny coastal cafe, spicy tantanmen ramen diner, vibrant morning street market stalls and steep stone steps of Tomisaki Shrine overlooking the Pacific harbor, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '四百年続く朝市の活気と外房の潮風が心地よい勝浦を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「Ocean 勝浦駅前店」で、ラー油と刻み玉ねぎが効いた勝浦タンタンメンを味わった瞬間',
      subtext:
        '海で冷えた漁師の身体を温めてきた真っ赤な一杯の旨辛さに、港町の底力を感じた。',
      badge: {
        code: 'katsuura_tantanmen',
        name_ja: '勝浦・旨辛タンタンメンを味わいし者',
        subtitle_en: 'Taster of Katsuura Tantanmen',
        description:
          'Ocean 勝浦駅前店を訪ね、ご当地グルメ・勝浦タンタンメンの旨辛な一杯を堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming bowl of vibrant red chili-oil ramen topped with minced pork and diced sweet onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「港町ベヰカリ」で、朝市通りの風景に溶け込む焼きたてパンの香りに包まれた瞬間',
      subtext:
        '朝の港町に似合う素朴で温かなパン屋さんの佇まいが、海辺の旅を一層楽しくしてくれた。',
      badge: {
        code: 'katsuura_bakery',
        name_ja: '勝浦・港町ベヰカリの朝を知る者',
        subtitle_en: 'Guest of Katsuura Bakery',
        description:
          '港町ベヰカリを訪ね、潮風香る朝の通りで焼きたてパンの魅力に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing freshly baked golden crusty loaves and sweet pastries on a wooden bakery tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「勝浦朝市」の通りで、地元の人々の温かな声と海の幸・山の幸に出会った瞬間',
      subtext:
        '四百三十年以上受け継がれてきた日本三大朝市の賑わいが、港町の暮らしを伝えていた。',
      badge: {
        code: 'katsuura_asaichi',
        name_ja: '日本三大朝市・勝浦朝市を巡りし者',
        subtitle_en: 'Explorer of Katsuura Market',
        description:
          '勝浦朝市を訪ね、四百三十年続く港町の朝市通りの活気と温かな人情に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting colorful morning street market umbrellas with baskets of fresh coastal fish, dried bonito and seasonal vegetables, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「遠見岬神社」の石段を登り、外房の青い海と勝浦の街並みを見渡した瞬間',
      subtext:
        '街を見守るように鎮座する社殿と爽やかな潮風が、外房の散策を清らかに結んでくれた。',
      badge: {
        code: 'katsuura_tomisaki',
        name_ja: '勝浦・遠見岬神社の石段を登りし者',
        subtitle_en: 'Visitor of Tomisaki Shrine',
        description:
          '遠見岬神社を訪ね、六十段の石段の上から勝浦の港町を見渡して参拝した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a grand red torii gate atop steep stone steps overlooking a sparkling blue coastal bay, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'katsuura_complete',
    name_ja: '勝浦朝市と遠見岬神社を巡る外房の旅人',
    subtitle_en: 'Walker of Katsuura Port Town',
    description:
      'cafe vinroseからOcean 勝浦駅前店、港町ベヰカリ、勝浦朝市、遠見岬神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining morning market stalls, a red torii gate atop stone steps and Pacific Ocean waves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'cafe vinrose',
      spot_type: '休憩',
      description:
        'JR勝浦駅のすぐ近くにある南国風の明るいカフェ。淹れたての珈琲や軽食で、外房の街歩き前のひとときをゆっくり過ごせる。営業時間10:00〜16:00、月・水曜定休（他不定休）。',
      address: '千葉県勝浦市墨名258-4',
      prefecture: '千葉県',
      municipality: '勝浦市',
      lat: 35.152277,
      lng: 140.313108,
      clue: 'JR外房線の勝浦駅に降り立ったら、まずは駅から歩いてすぐの南国風カフェ「cafe vinrose」で一息つこう（10:00〜16:00、月・水曜休）。椰子の木や明るい陽射しが似合う開放的な雰囲気の店内で、淹れたての珈琲や軽食を味わいながら港町散策の計画をゆっくり立てられる。海の気配が漂う勝浦のまちへ踏み出す前に、穏やかな空気とともに心と足を心地よく整えて、楽しい一日をここから始めたい。',
      surprise:
        '駅を出てすぐの場所に南国の風が吹き抜けるような心地よいカフェがあるのは、外房の港町の旅にとって実に心強い。明るい陽射しが差し込む席で珈琲を味わっていると、海辺の街ならではの開放的な空気に自然と気持ちがほぐれていく素敵な一軒と誰もが思うだろう。',
      hook: '珈琲で目覚めたら、南西へ徒歩4分のOcean 勝浦駅前店で勝浦タンタンメンを味わおう。',
      f7_fragment: '勝浦駅近くで旅人を迎えてくれる、南国風の明るい喫茶店だ。',
      f7_full: '駅近くの「cafe vinrose」で朝の珈琲を味わい、外房の潮風薫る勝浦の街歩きを心地よくとても軽やかに始めた。',
      image_prompt:
        'Bright coastal Japanese cafe interior near train station with potted palm plant, wooden table, hot coffee cup and breakfast toast, no text, no people.',
    },
    {
      name: 'Ocean 勝浦駅前店',
      spot_type: '食事',
      description:
        '勝浦タンタンメン企業組合が運営する駅前の名店。醤油ベースのスープにたっぷりのラー油、刻み玉ねぎと挽き肉が入った元祖の味わいが楽しめる。昼11:00〜15:00・夜17:00〜22:00。',
      address: '千葉県勝浦市墨名707',
      prefecture: '千葉県',
      municipality: '勝浦市',
      lat: 35.150805,
      lng: 140.311555,
      clue: 'cafe vinroseから南西へ徒歩4分、勝浦タンタンメンを味わえる「Ocean 勝浦駅前店」へ立ち寄ろう（11:00〜15:00・17:00〜22:00）。元々は海女さんや漁師さんが冷えた身体を温めるために生まれたご当地麺で、醤油スープにたっぷりの自家製ラー油、甘みのある刻み玉ねぎと挽き肉が絡み合う。真っ赤な見た目の中に広がる旨みと爽やかな辛さをしっかり堪能しよう。',
      surprise:
        'ただ辛いだけでなく、じっくり炒められた玉ねぎの甘みと醤油スープのコクがラー油と見事に調和しており、思わず最後の一滴まで飲み干したくなる美味しさだ。港町で働く人々の暮らしから生まれた熱い一杯の物語に、心までぽかぽかと温まっていく名店だ。',
      hook: 'タンタンメンを堪能したら、南南東へ徒歩9分の港町ベヰカリへ向かおう。',
      f7_fragment: 'ラー油と刻み玉ねぎが旨みを引き立てる、駅前で味わう勝浦タンタンメン。',
      f7_full: '「Ocean 勝浦駅前店」でラー油と玉ねぎが効いた勝浦タンタンメンを味わい、港町ならではの熱い麺文化に触れた。',
      image_prompt:
        'Steaming ceramic bowl of bright red Katsuura tantanmen ramen filled with chili oil, minced pork and finely chopped onions on wooden table, no text, no people.',
    },
    {
      name: '港町ベヰカリ',
      spot_type: '買い物',
      description:
        '朝市通り周辺・浜勝浦に佇む素朴で人気のベーカリー。早朝から焼き上がる香ばしいパンは、地元の人々や朝市帰りの客に親しまれる。営業時間7:00〜11:00、水曜等不定休。',
      address: '千葉県勝浦市浜勝浦69',
      prefecture: '千葉県',
      municipality: '勝浦市',
      lat: 35.146306,
      lng: 140.314325,
      clue: 'Oceanから南南東へ徒歩9分、朝市通りにほど近い「港町ベヰカリ」へ立ち寄ろう（7:00〜11:00、水曜等休）。早朝から焼き上がる素朴で香ばしいパンが旅の楽しみを広げてくれる。',
      surprise:
        '港町の古い街並みにしっくり溶け込む店構えと、毎日丁寧に焼き上げられる温かなパンの香りが朝の空気に実によく似合う。素朴ながらも素材の良さが感じられる品々を手に取ると、海辺の町の穏やかな日常にお邪魔しているような幸せな気分になる素敵な店だ。',
      hook: 'パン屋を出たら、北北東へ徒歩5分の勝浦朝市（下本町・仲本町朝市通り）を歩こう。',
      f7_fragment: '朝市通り近くで早朝から焼きたてが並ぶ、港町の素朴なパン屋さん。',
      f7_full: '浜勝浦の「港町ベヰカリ」を訪ね、朝の港町に溶け込む素朴な店構えと焼きたてのパンの温かな魅力にじっくり触れた。',
      image_prompt:
        'Cozy coastal Japanese small bakery display with rustic crusty bread loaves and sweet buns on wooden shelves in morning light, no text, no people.',
    },
    {
      name: '勝浦朝市',
      spot_type: '買い物',
      description:
        '四百三十年以上の歴史を誇り日本三大朝市の一つに数えられる名物市。1〜15日は下本町通り、16〜月末は仲本町通りで開かれ、干物や野菜、総菜が並ぶ。6:30頃〜11:00頃、水曜・元旦休。',
      address: '千葉県勝浦市勝浦175-2',
      prefecture: '千葉県',
      municipality: '勝浦市',
      lat: 35.148732,
      lng: 140.315282,
      clue: '港町ベヰカリから北北東へ徒歩5分、四百三十年以上続く日本三大朝市のひとつ「勝浦朝市」の通りへ踏み入ろう（6:30頃〜11:00頃、水曜休）。月の前半は下本町、後半は仲本町へと場所を移しながら開かれる名物市で、通りの露店には勝浦港で揚がった旬の干物や新鮮な地元野菜、手作りの漬物や惣菜がずらりと並ぶ。店先の人々との気さくな会話を楽しみながら、活気あふれる港町の朝をじっくり歩こう。',
      surprise:
        '大きな商業施設ではなく、昔ながらの商店街の路上に地元のお母さんたちが並べる露店の数々が、時代を越えて変わらない温もりを伝えている。すすめられるままに旬の味や干物を眺めていると、勝浦という町の人情の深さに自然と笑顔がこぼれる素敵な場所だ。',
      hook: '朝市通りを歩いたら、南へ徒歩4分の遠見岬神社へお参りして旅を結ぼう。',
      f7_fragment: '四百三十年続く日本三大朝市、港町の人情と旬の恵みが並ぶ路上の市。',
      f7_full: '歴史ある「勝浦朝市」の通りを歩き、干物や旬の野菜を並べる露店の活気と勝浦の人々の温かな人情にたっぷり触れた。',
      image_prompt:
        'Vibrant morning street market of Katsuura Asaichi with colorful stall umbrellas, baskets of dried coastal fish and fresh local vegetables, no text, no people.',
    },
    {
      name: '遠見岬神社',
      spot_type: '見どころ',
      description:
        '房総開拓の神・天冨命を祀る古社。急勾配の六十段の石段はひな祭りの飾り付けでも知られ、上からは勝浦の街並みと海を一望できる。参拝自由（社務所9:00〜17:00頃・不定休）。',
      address: '千葉県勝浦市浜勝浦1',
      prefecture: '千葉県',
      municipality: '勝浦市',
      lat: 35.146786,
      lng: 140.315437,
      clue: '朝市通りから南へ徒歩4分、街の正面にそびえる急な石段が目印の「遠見岬神社」で散策を締めくくろう（参拝自由・社務所9:00〜17:00頃）。房総の開拓神・天冨命を祀る由緒ある古社であり、六十段の石段を一歩ずつ登りきって振り返れば、勝浦の瓦屋根の街並みと青い太平洋の気配が広がる。外房の潮風を受けながら静かに手を合わせ、港町の朝と味覚を巡った旅を清々しく、そして心静かに結びたい。',
      surprise:
        '朝市の賑わいのすぐ背後に、これほど見晴らしの良い急な石段と荘厳な社殿が控えている風景が実に勝浦らしい。石段の上から海側を見下ろす爽快な風は、港町の人々が古来より海を敬いながら暮らしてきた時間の厚みを静かに伝えてくれる名社といえる。',
      hook: '',
      f7_fragment: '六十段の石段の上から勝浦の港町と海を見守る、房総開拓の古社。',
      f7_full: '「遠見岬神社」の六十段の石段を登りきって勝浦の街と海を望み、外房の朝市と港町の散策を晴れやかに締めくくった。',
      image_prompt:
        'Steep stone staircase and vermilion torii gate of Tomisaki Shrine looking back over coastal town rooftops toward sparkling blue Pacific Ocean, no text, no people.',
    },
  ],
};
