export default {
  slug: 'kokura',
  station_order: 624,
  station: '小倉',
  line: 'JR山陽新幹線・鹿児島本線・日豊本線',
  area_name: '小倉・市場と城下町',
  prefecture: '福岡県',
  municipality: '北九州市小倉北区',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['福岡県', '北九州市', '小倉駅', '小倉城', '旦過市場'],
  style_genre: 'pictorial_isometric_map',
  title: '北九州の台所・旦過市場と小倉城を歩く',
  description:
    'JR小倉駅から魚町銀天街入口の老舗ベーカリー「シロヤ」と明治創業の銘菓「湖月堂 本店」を経て、市民の台所として親しまれる「旦過市場」で活気を味わい、小倉祇園発祥の「八坂神社」と名城「小倉城」へと至る散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Kokura in Kitakyushu showing Kokura train station, retro bakery shopfront, traditional wagashi tea parlor, bustling covered Tanga Market alley, vermilion Yasaka Shrine and white-walled Kokura Castle, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '商店街の甘い香りと市場の活気、そして荘厳な名城が繋がる小倉を歩いたあと、誰かに話したい瞬間はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「シロヤ 小倉店」の店先で、長年愛され続けるサニーパンやオムレットを手にした瞬間',
      subtext:
        '駅を出てすぐの活気ある店先で手に入れた懐かしい甘さが、小倉の旅を明るく彩った。',
      badge: {
        code: 'kokura_shiroya',
        name_ja: '小倉・サニーパンの甘さを知る者',
        subtitle_en: 'Fan of Kokura Shiroya',
        description:
          'シロヤ 小倉店を訪ね、小倉っ子のソウルフードであるサニーパンとオムレットを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting golden condensed-milk bread rolls and delicate cream-filled sponge omelettes, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「湖月堂 本店（喫茶去）」で、名物・栗饅頭とともに落ち着いた甘味を味わった瞬間',
      subtext:
        '日本初のアーケード街で受け継がれる明治創業の銘菓と甘味に、老舗の風格を感じた。',
      badge: {
        code: 'kokura_kogetsudo',
        name_ja: '魚町・湖月堂の栗饅頭を味わいし者',
        subtitle_en: 'Guest of Kogetsudo Parlor',
        description:
          '湖月堂 本店（喫茶去）を訪ね、小倉銘菓の栗饅頭と上質な甘味処の時間を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a glossy chestnut manju sweet and a cup of green tea on a lacquer tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「旦過市場」の活気あふれる通りで、北九州の台所の温かい人情に触れた瞬間',
      subtext:
        '百年以上続く市場の路地で出会った郷土の味と威勢の良い声が、街の生命力を伝えていた。',
      badge: {
        code: 'kokura_tanga_market',
        name_ja: '北九州の台所・旦過市場を巡りし者',
        subtitle_en: 'Explorer of Tanga Market',
        description:
          '旦過市場を訪ね、ぬかみそ炊きや新鮮な魚介が並ぶ小倉の台所の活気に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a lively traditional market alley with hanging lanterns and fresh local delicacies, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「小倉城」の唐造りの天守を見上げ、城下町の歴史と街並みを一望した瞬間',
      subtext:
        'お堀の先にそびえる珍しい唐造りの天守閣と最上階からの眺めが、小倉の旅を飾った。',
      badge: {
        code: 'kokura_castle',
        name_ja: '唐造りの名城・小倉城を仰ぎし者',
        subtitle_en: 'Watcher of Kokura Castle',
        description:
          '小倉城を訪ね、細川忠興が築いた唐造りの天守と北九州のパノラマを堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the tiered white keep of Kokura Castle rising above massive stone walls and a moat, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kokura_complete',
    name_ja: '旦過市場の活気と名城・小倉城を巡る旅人',
    subtitle_en: 'Walker of Kokura Castle Town',
    description:
      'シロヤ 小倉店から湖月堂 本店、旦過市場、八坂神社、小倉城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the tiered white keep of Kokura Castle, colorful market lanterns and a golden chestnut manju sweet, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'シロヤ 小倉店',
      spot_type: '買い物',
      description:
        '1950年創業、小倉っ子のソウルフードとして愛され続ける老舗ベーカリー。練乳たっぷりの「サニーパン」や小さな「オムレット」が名物。営業時間10:00〜18:00（売切次第終了）、不定休。',
      address: '福岡県北九州市小倉北区京町2-6-14',
      prefecture: '福岡県',
      municipality: '北九州市小倉北区',
      lat: 33.8859,
      lng: 130.881091,
      clue: '新幹線も発着するJR小倉駅の小倉城口を出たら、まずは魚町銀天街の入口すぐにある老舗ベーカリー「シロヤ 小倉店」へ足を運ぼう（10:00〜18:00・売切次第終了）。1950年の創業以来、北九州の人々に愛され続ける名店で、ショーケースには甘く香ばしい練乳入りの「サニーパン」や一口サイズの「オムレット」がずらりと並ぶ。朝から列ができる活気ある店先で、小倉っ子のソウルフードをさっそく手に入れたい。',
      surprise:
        '華やかな繁華街の一角にありながら、昔から変わらない手頃な価格と飾らない佇まいが貫かれているのが実に頼もしい。頬張るとじゅわっと溢れる練乳の優しい甘さが、これから始まる小倉の街歩きを明るく元気に彩ってくれるに違いない。ずっと親しまれる名店だ。',
      hook: 'パンを手に入れたら、南西へ徒歩1分の湖月堂 本店（喫茶去）へ向かおう。',
      f7_fragment: 'サニーパンとオムレットで半世紀以上愛される、小倉駅前の名物パン屋。',
      f7_full: '小倉駅前の「シロヤ 小倉店」で名物のサニーパンやオムレットを求め、地元で長く親しまれる懐かしい甘さに触れ歩き始めた。',
      image_prompt:
        'Charming retro Japanese neighborhood bakery counter window filled with golden condensed-milk bread rolls and delicate cream-filled sponge omelettes, no text, no people.',
    },
    {
      name: '湖月堂 本店（喫茶去）',
      spot_type: '休憩',
      description:
        '百三十年ほど前の創業、日本初のアーケード街「魚町銀天街」に構える小倉の老舗和菓子店。代表銘菓「栗饅頭」や併設の甘味処「喫茶去」が人気。売場9:00〜19:00・喫茶11:00〜20:00、無休。',
      address: '福岡県北九州市小倉北区魚町1-3-11',
      prefecture: '福岡県',
      municipality: '北九州市小倉北区',
      lat: 33.885428,
      lng: 130.880713,
      clue: 'シロヤから魚町銀天街へ入り南西へ徒歩1分、百年以上続く老舗「湖月堂 本店（喫茶去）」へ立ち寄ろう（売場9:00〜19:00・喫茶11:00〜20:00、無休）。艶やかな「栗饅頭」を味わい一息つきたい。',
      surprise:
        '日本初のアーケード商店街として誕生した魚町銀天街の賑わいから一歩店内へ入ると、落ち着いた和の設えと丁寧なおもてなしに心が和む。百三十年近い歴史を誇る小倉銘菓の奥深い味わいが、旅の途中に上質な安らぎを運んでくれる素晴らしい老舗和菓子店といえる。',
      hook: '甘味で寛いだら、南南西へ徒歩8分の旦過市場で北九州の台所を巡ろう。',
      f7_fragment: '日本初のアーケード街に佇む、栗饅頭が名物の百年続く老舗和菓子店。',
      f7_full: '魚町銀天街の「湖月堂 本店（喫茶去）」で歴史ある栗饅頭と落ち着いた甘味を味わい、小倉の老舗の風格にじっくり触れた。',
      image_prompt:
        'Elegant historic Japanese wagashi tea parlor table serving glossy chestnut manju pastries and warm green tea in ceramic cups, no text, no people.',
    },
    {
      name: '旦過市場',
      spot_type: '食事',
      description:
        '大正時代から「北九州の台所」として親しまれる歴史ある市場。新鮮な魚介や惣菜、名物「ぬかみそ炊き」など食べ歩きや地元グルメが楽しめる。営業時間10:00〜18:00（店舗により異なる・日曜休多し）。',
      address: '福岡県北九州市小倉北区魚町4-2-18',
      prefecture: '福岡県',
      municipality: '北九州市小倉北区',
      lat: 33.881311,
      lng: 130.879463,
      clue: '湖月堂からアーケードを南南西へ徒歩8分、香ばしい匂いと威勢の良い声が響く「旦過市場」へ踏み入ろう（10:00〜18:00・店舗により異なる）。百余年の歴史を持つ「北九州の台所」として親しまれ、復興と整備が進む今も新鮮な関門の魚介や色とりどりの惣菜、郷土の味「ぬかみそ炊き」を扱う店が肩を並べる。食べ歩きや市場ならではのランチを楽しみながら、小倉の飾らない人情にたっぷり触れたい。',
      surprise:
        '狭い路地の両脇に所狭しと食材が並び、店主と常連客が楽しげに言葉を交わす光景には、時代を越えて変わらない市場の生命力が溢れている。歩いているだけでお腹が空いてくるような熱気と温かさが、旅人の心まで優しく満たしてくれる、活力あふれる素敵な場所だ。',
      hook: '市場の活気を味わったら、北西へ徒歩11分の八坂神社へ向かおう。',
      f7_fragment: 'ぬかみそ炊きや新鮮な魚介が並ぶ、百年以上続く北九州の賑わう台所。',
      f7_full: '「旦過市場」の賑わう通りを歩いて北九州ならではの味覚と人情に触れ、暮らしが息づく小倉の魅力をたっぷり堪能した。',
      image_prompt:
        'Lively traditional Japanese covered market alley of Tanga Market with fresh seafood displays, warm hanging lanterns and prepared local delicacies, no text, no people.',
    },
    {
      name: '八坂神社（小倉祇園八坂神社）',
      spot_type: '見どころ',
      description:
        '400年以上の歴史を持つ小倉の総鎮守。国の重要無形民俗文化財「小倉祇園太鼓」の発祥地として知られ、朱色の楼門や拝殿が美しい。開門6:00〜17:30（社務所8:30〜17:00）。',
      address: '福岡県北九州市小倉北区城内2-2',
      prefecture: '福岡県',
      municipality: '北九州市小倉北区',
      lat: 33.885157,
      lng: 130.873993,
      clue: '旦過市場から紫川を渡って北西へ徒歩11分、小倉城のすぐ傍らに鎮座する「八坂神社（小倉祇園八坂神社）」へ詣でよう（6:00〜17:30）。四百年以上の歴史を持つ小倉の総鎮守であり、夏に響き渡る「小倉祇園太鼓」の発祥地としても全国に名高い古社だ。鮮やかな朱色の楼門をくぐって静かな拝殿に手を合わせ、祭りの熱い魂を伝える社殿を眺めたら、いよいよお隣の小倉城の本丸へ足を向けよう。',
      surprise:
        '市場の喧騒から紫川の橋を渡ってすぐの場所に、これほど華やかな朱塗りの社殿と緑豊かな境内が広がっている対比が見事といえる。小倉祇園太鼓の記念碑なども見られ、街の人々の心意気と誇りがまっすぐに伝わってくる、実に素晴らしい古社と誰もが感じるだろう。',
      hook: '神社を参拝したら、南東へ徒歩2分の小倉城の天守を仰いで旅を結ぼう。',
      f7_fragment: '小倉祇園太鼓の発祥を伝え朱色の楼門が美しい、四百年の歴史ある総鎮守。',
      f7_full: '小倉の総鎮守「八坂神社」の朱塗りの楼門をくぐって参拝し、小倉祇園太鼓を受け継ぐ誇り高き祭りの歴史に深く触れた。',
      image_prompt:
        'Vibrant vermilion two-story tower gate and wooden sanctuary of Kokura Yasaka Shrine framed by lush green park trees, no text, no people.',
    },
    {
      name: '小倉城',
      spot_type: '見どころ',
      description:
        '細川忠興が築いた北九州のシンボル。最上階が下の階より張り出す珍しい「唐造り」の天守閣と、石垣・お堀の壮麗な景観を堪能できる。9:00〜20:00（11〜3月は19:00まで）、年中無休。',
      address: '福岡県北九州市小倉北区城内2-1',
      prefecture: '福岡県',
      municipality: '北九州市小倉北区',
      lat: 33.884403,
      lng: 130.874771,
      clue: '八坂神社から南東へ徒歩2分、お堀の先に白壁の天守がそびえる「小倉城」で旅を締めくくろう（9:00〜20:00・冬季19:00まで、無休）。細川忠興が築いた北九州のシンボルで、4階より最上階の5階が大きく張り出す全国でも珍しい「唐造り」の天守閣が目を引く。館内の体験型展示を楽しんだあと最上階から小倉の街並みを見渡せば、駅前から市場、城下まで繋いだ散策が晴れやかに結ばれる。',
      surprise:
        '石垣の切り込みや唐造りの大胆なシルエットは下から見上げても実に迫力があり、天守の中から眺める近代的な街と紫川のパノラマは爽快そのもの。歴史の重みと現代の活気がひとつに溶け合う、北九州・小倉の魅力を象徴する素晴らしい名城と誰もがきっと感じるだろう。',
      hook: '',
      f7_fragment: '珍しい唐造りの天守閣とお堀が城下町の誇りを伝える、北九州のシンボル。',
      f7_full: '「小倉城」の唐造りの天守から小倉の街並みと紫川を一望し、市場の活気と歴史が交差する散策を清々しく締めくくった。',
      image_prompt:
        'Majestic white-walled Kokura Castle keep with overhanging top floor rising above massive stone walls and a calm moat under blue sky, no text, no people.',
    },
  ],
};
