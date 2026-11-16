export default {
  slug: 'miyazaki',
  station_order: 669,
  station: '宮崎',
  line: 'JR日豊本線',
  area_name: '宮崎・楠並木と神話の杜',
  prefecture: '宮崎県',
  municipality: '宮崎市',
  category: '歴史と街歩き',
  budget_tier: 2,
  tags: ['宮崎県', '宮崎市', '宮崎駅', '宮崎神宮', '神話'],
  style_genre: 'editorial_clean_ink',
  title: '宮崎・橘通の老舗喫茶から県庁と宮崎神宮へ',
  description:
    'JR宮崎駅から、昭和の空気を残す老舗「珈琲専門店 ウルワシ 橘通本店」、楠並木が美しい近代ゴシック様式の「宮崎県庁本館」、大淀川沿いの南国風景「橘公園」、緑豊かな文化の森「宮崎県総合文化公園」、神武天皇を祀る「宮崎神宮」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Miyazaki City showing the historic Miyazaki Prefectural Government Building framed by lush green camphor trees along Kusunoki-namiki street, palm-lined Oyodo River at Tachibana Park, and the towering cedar-lined approach to Miyazaki Jingu Shrine, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '南国の明るい陽射しと楠並木、神話の杜が連なる宮崎を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「珈琲専門店 ウルワシ 橘通本店」で、昭和香る落ち着いた空間と深煎り珈琲を味わった瞬間',
      subtext:
        '地元の人々に長く愛される老舗喫茶の温もりが、南国の旅の始まりを心地よく整えてくれた。',
      badge: {
        code: 'miyazaki_uruwashi',
        name_ja: '宮崎・橘通の老舗喫茶を味わいし者',
        subtitle_en: 'Guest of Coffee Uruwashi',
        description:
          '珈琲専門店 ウルワシ 橘通本店を訪ね、宮崎を代表する老舗喫茶店の一杯を愉しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a classic dark roasted coffee cup on a saucer beside a vintage brass coffee siphon on a wooden table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「宮崎県庁本館」前の楠並木通りを歩き、重厚な近代建築の佇まいを見上げた瞬間',
      subtext:
        '九州現存最古の県庁舎と力強い楠の緑が、宮崎の街の品格と歴史を物語っていた。',
      badge: {
        code: 'miyazaki_kencho',
        name_ja: '宮崎・楠並木と県庁舎を仰ぎ見し者',
        subtitle_en: 'Visitor of Miyazaki Prefectural Office',
        description:
          '宮崎県庁本館を訪ね、九州最古の県庁舎と楠並木通りの美しい景観を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting the historic Gothic-style Miyazaki Prefectural Office tower framed by lush green camphor tree canopies, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「橘公園」の大淀川畔に立ち、ワシントニアパームの並木と川風を感じた瞬間',
      subtext:
        '雄大な川の流れと南国ならではのヤシ並木が、宮崎へ来たことを爽やかに実感させてくれた。',
      badge: {
        code: 'miyazaki_tachibana',
        name_ja: '宮崎・大淀川畔のヤシ並木を歩きし者',
        subtitle_en: 'Walker of Tachibana Park',
        description:
          '橘公園を訪ね、大淀川沿いの南国情緒あふれる川辺の風景を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting tall Washingtonia palm trees lining a bright river embankment beside calm blue water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「宮崎神宮」の長い杉木立の参道を歩き、神武天皇を祀る杜の静寂に触れた瞬間',
      subtext:
        '狭野杉がそびえる厳かな境内に満ちる清らかな空気が、旅の締めくくりを凛と結んでくれた。',
      badge: {
        code: 'miyazaki_jingu',
        name_ja: '宮崎・神話の杜に参拝せし者',
        subtitle_en: 'Worshipper at Miyazaki Jingu',
        description:
          '宮崎神宮を訪ね、狭野杉が茂る厳かな参道と神武天皇を祀る社殿に参拝した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting a dignified wooden torii gate and cypress-shingled shrine roof framed by towering ancient cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'miyazaki_complete',
    name_ja: '宮崎・楠並木と神話の杜を巡る旅人',
    subtitle_en: 'Walker of Miyazaki',
    description:
      '珈琲専門店 ウルワシから宮崎県庁本館、橘公園、宮崎県総合文化公園、宮崎神宮までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the historic Miyazaki Prefectural Office facade, tall coastal palm trees, and the cedar-lined shrine approach of Miyazaki Jingu, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '珈琲専門店 ウルワシ 橘通本店',
      spot_type: '休憩',
      description:
        '昭和の雰囲気を色濃く残す宮崎の老舗喫茶店。クラシカルな店内で深煎りの本格珈琲やトースト、パスタなどが楽しめる。10:00〜22:00（L.O.21:20）、年始休（1/1・1/2）。',
      address: '宮崎県宮崎市橘通西3-10-36 原ビル2F',
      prefecture: '宮崎県',
      municipality: '宮崎市',
      lat: 31.915609,
      lng: 131.422869,
      clue: 'JR宮崎駅から歩いて向かえる、昭和の面影を色濃く残す老舗「珈琲専門店 ウルワシ 橘通本店」から旅を始めよう（10:00〜22:00・年始休）。地元で長く愛されてきたクラシカルな空間では、深煎りでコクのある本格珈琲やボリュームたっぷりのトーストが味わえる。落ち着いた木のぬくもりに包まれて一杯の余韻をゆっくり楽しみ、南国の城下・宮崎の散策へこれからも軽やかに踏み出したい。',
      surprise:
        '県庁前や橘通周辺は古くからの商店街と新しい店が共存しており、朝の時間帯から地元の常連客で賑わう温かな街角の風景に出会えます。',
      hook: '珈琲で目覚めたら、南の楠並木通りに立つ宮崎県庁本館へ向かおう。',
      f7_fragment: '昭和の面影を残す宮崎の老舗喫茶店、深煎りの本格珈琲が味わえる。',
      f7_full:
        '「珈琲専門店 ウルワシ 橘通本店」の落ち着いた空間で深煎り珈琲を味わい、旅を始めた。',
      image_prompt:
        'Warm nostalgic Showa kissaten cafe illustration of Coffee Uruwashi in Miyazaki, dark mahogany booth seating, brass lamps, steaming dark roasted coffee cup and toast on wooden table, morning light, no text, no letters.',
    },
    {
      name: '宮崎県庁本館',
      spot_type: '見どころ',
      description:
        '昭和7年（1932年）竣工、九州現存最古の県庁舎であり国の登録有形文化財。近世ゴシック様式の重厚な外観と前の楠並木通りが美しい。外観常時見学可（庁舎開放は平日日中）。',
      address: '宮崎県宮崎市橘通東2-10-1',
      prefecture: '宮崎県',
      municipality: '宮崎市',
      lat: 31.910908,
      lng: 131.423898,
      clue: '九州で現存最古の県庁舎として国の登録有形文化財に指定される「宮崎県庁本館」を訪ねよう（外観常時見学可・開庁平日日中）。昭和初期に建てられた近世ゴシック様式の重厚な建物は、前面に広がる「楠並木通り」の力強い緑と美しく調和し、宮崎のシンボルとなっている。木漏れ日が揺れる石畳をゆっくりと歩きながら、南国の明るい陽射しに映える美しい歴史建築をこれからも誇らしく大切に仰ぎ見たい。',
      surprise:
        '庁舎前庭には宮崎県のシンボルツリーであるフェニックスやクスノキが植えられ、日曜日の朝には通りで「楠並木朝市」が開かれることもあります。',
      hook: '楠並木を歩いたら、南へ進んで大淀川沿いの橘公園へ向かおう。',
      f7_fragment: '昭和初期竣工の九州最古の県庁舎、楠並木通りの緑と調和する名建築。',
      f7_full:
        '「宮崎県庁本館」の重厚な建築と楠並木通りの緑を歩き、宮崎の品格に触れた。',
      image_prompt:
        'Dignified historic civic building illustration of Miyazaki Prefectural Government Office, Gothic-inspired cream stone facade with central tower framed by towering green camphor trees along a sunny boulevard, no text, no letters.',
    },
    {
      name: '橘公園',
      spot_type: '見どころ',
      description:
        '大淀川の河畔に広がる南国情緒あふれる都市公園。ワシントニアパームの並木と雄大な川の流れが宮崎らしい開放感を演出する。常時開放、無料。',
      address: '宮崎県宮崎市松山1-1',
      prefecture: '宮崎県',
      municipality: '宮崎市',
      lat: 31.905106,
      lng: 131.427055,
      clue: '大淀川の河畔に広がる「橘公園」を歩こう（常時開放・無料）。川沿いに並ぶワシントニアパームのシルエットと爽やかな川風に、南国・宮崎ならではの開放感を満喫したい。',
      surprise:
        '大淀川に架かる橘橋のたもとからは、晴れた日の夕方に川面が黄金色に染まる美しい光景を望むことができ、市民の散歩コースになっています。',
      hook: '川風を感じたら、北北西へ進んで緑豊かな宮崎県総合文化公園へ向かおう。',
      f7_fragment: '大淀川畔にワシントニアパームが並ぶ、南国情緒豊かな川辺の公園。',
      f7_full:
        '「橘公園」の大淀川畔でヤシ並木と爽やかな川風を感じ、南国・宮崎を実感した。',
      image_prompt:
        'Bright scenic riverfront park illustration of Tachibana Park in Miyazaki, tall Washingtonia palm trees lining a grassy riverside promenade beside the wide blue Oyodo River under clear sky, no text, no letters.',
    },
    {
      name: '宮崎県総合文化公園',
      spot_type: '見どころ',
      description:
        '県立図書館・美術館・芸術劇場が集まる緑豊かな文化公園。広大な芝生と噴水、彫刻が点在し、ゆったりと散策できる。公園常時開放、無料。',
      address: '宮崎県宮崎市船塚3-210',
      prefecture: '宮崎県',
      municipality: '宮崎市',
      lat: 31.934107,
      lng: 131.418624,
      clue: '県立図書館や美術館、芸術劇場が集う「宮崎県総合文化公園」の緑の中を歩こう（公園常時開放・入園無料）。かつての宮崎大学農学部跡地を活かした広大な敷地には芝生広場や噴水、屋外彫刻が配され、木陰の遊歩道が市民に親しまれている。文化と自然が穏やかに溶け合う空間でひと呼吸おき、北側に隣接する神話の聖地・宮崎神宮へと向かう穏やかな心をこれからも静かにたっぷりとじっくりと整えたい。',
      surprise:
        '園内の県民広場には多様な樹木が植えられており、季節の花々や木漏れ日を楽しみながら隣の宮崎神宮エリアへそのまま歩いて行けます。',
      hook: '文化の森を抜けたら、北東に鎮座する宮崎神宮へ参拝して旅を結ぼう。',
      f7_fragment: '図書館や美術館が集う文化の森、広大な芝生と木陰が心地よい公園。',
      f7_full:
        '「宮崎県総合文化公園」の緑豊かな芝生と並木道を歩き、文化と自然の調和を味わった。',
      image_prompt:
        'Peaceful cultural park illustration of Miyazaki Prefectural Cultural Park, wide green lawns, modern art museum pavilion, tall camphor trees and sunlit walking paths, soft afternoon light, no text, no letters.',
    },
    {
      name: '宮崎神宮',
      spot_type: '見どころ',
      description:
        '初代天皇・神武天皇を主祭神として祀る由緒ある神宮。樹齢を重ねた狭野杉がそびえる厳かな参道と、狭野杉造りの社殿が神話の杜の空気を伝える。開門6:00〜17:30頃、無料。',
      address: '宮崎県宮崎市神宮2-4-1',
      prefecture: '宮崎県',
      municipality: '宮崎市',
      lat: 31.937675,
      lng: 131.423995,
      clue: '初代天皇・神武天皇を祀り、日向神話の息吹を今に伝える「宮崎神宮」で旅を締めくくろう（開門6:00〜17:30頃・参拝無料）。一の鳥居から本殿へと続く長い参道は樹齢を重ねた狭野杉の巨木に覆われ、歩みを進めるほどに街の喧騒が遠ざかり清らかな空気に包まれる。狭野杉造りの気品ある社殿へ静かに手を合わせながら、南国の歴史と杜の静寂をこれからも大切に深く胸の奥へと刻み込んで結びたい。',
      surprise:
        '境内には樹齢約400年を誇る国指定天然記念物のオオシラフジ（白藤）があり、春になると見事な白い花房を垂らして参拝者を魅了します。',
      hook: '',
      f7_fragment: '神武天皇を祀る由緒ある神宮、狭野杉が茂る厳かな参道が神話の杜を伝える。',
      f7_full:
        '「宮崎神宮」の長い杉木立の参道を歩き、神武天皇を祀る杜の静寂に包まれて旅を結んだ。',
      image_prompt:
        'Sacred Japanese shrine illustration of Miyazaki Jingu, dignified unpainted hinoki cypress torii gate and shrine hall surrounded by towering ancient cedar trees and dappled late afternoon light, no text, no letters.',
    },
  ],
};
