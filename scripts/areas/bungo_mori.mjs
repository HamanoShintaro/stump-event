export default {
  slug: 'bungo_mori',
  station_order: 608,
  station: '豊後森駅',
  line: 'JR久大本線',
  area_name: '豊後森・機関庫と玖珠の街',
  prefecture: '大分県',
  municipality: '玖珠町',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['大分県', '玖珠町', '豊後森駅', '豊後森機関庫', '道の駅童話の里くす'],
  style_genre: 'oil_palette_impasto',
  title: '豊後森・機関庫の記憶と玖珠の街を歩く',
  description:
    'JR久大本線の豊後森駅を起点に、塚脇の手づくり製餡所や駅前のカフェ、伐株山を望むベーカリーレストランを巡り、九州唯一の扇形機関庫が残る公園を経て、道の駅童話の里くすへ至る、玖珠の暮らしと鉄路を辿る散策路。',
  eyecatch_prompt:
    'Thick oil palette knife impasto painting of Bungo-Mori Roundhouse locomotive depot and steel turntable in Oita, classic black steam locomotive on green grass, flat-topped mesa mountain Kirikabu in background, warm golden afternoon light, no text, no people.',
  question:
    '鉄路の遺産と平頂の山が寄り添う玖珠の町で、あなたが旅の終わりに思い返す光景はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 4,
      text: '「豊後森機関庫公園」で、扇形の機関庫と転車台が凛と残る芝生広場を見渡した瞬間',
      subtext:
        'かつて久大本線の難所を越える列車を支えた鉄道拠点の迫力に、往時の息吹を感じた。',
      badge: {
        code: 'bungo_mori_roundhouse',
        name_ja: '豊後森・機関庫の記憶を見守る者',
        subtitle_en: 'Keeper of Bungo-Mori Roundhouse',
        description:
          '豊後森機関庫公園を訪ね、九州に現存する唯一の扇形機関庫と転車台の姿に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a classic black steam locomotive in front of a concrete fan-shaped railway roundhouse and turntable, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 1,
      text: '「岩下製餡所（あんこ菓子いわした）」で、炊きたての小豆が香る和菓子に出会った瞬間',
      subtext:
        '製餡所ならではの瑞々しい餡子の味わいに、町の暮らしを支えてきた手仕事の誇りを見た。',
      badge: {
        code: 'bungo_mori_iwashita',
        name_ja: '塚脇・手づくり餡子の味わいを知る者',
        subtitle_en: 'Taster of Kusu Handmade Anko',
        description:
          '岩下製餡所を訪ね、小豆本来の風味を活かした手づくりのあんこ菓子を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring freshly made Japanese red bean ohagi and dorayaki sweets on a warm wooden tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「森のクレヨン」の大きな窓越しに、線路と伐株山の雄大な姿を見上げた瞬間',
      subtext:
        'テーブル状の山容と焼きたてパンの香りが、玖珠ならではの穏やかな時間を刻んでくれた。',
      badge: {
        code: 'bungo_mori_crayon',
        name_ja: '伐株山を望む・森の食卓の旅人',
        subtitle_en: 'Traveler of Kusu Tableland View',
        description:
          '森のクレヨンを訪ね、玖珠のシンボル・伐株山を眺めながら焼きたてパンと食事を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing fresh artisan bread loaves beside a bright window framing a flat-topped green mesa mountain, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「道の駅 童話の里くす」で、玖珠盆地の特産品や童話にまつわる品々を手にした瞬間',
      subtext:
        '地域の恵みが一堂に集まる拠点で、町の人々の温かな暮らしぶりに改めて触れた。',
      badge: {
        code: 'bungo_mori_michinoeki',
        name_ja: '童話の里くす・盆地の恵みを知る者',
        subtitle_en: 'Explorer of Kusu Country Hub',
        description:
          '道の駅 童話の里くすを訪ね、玖珠盆地の農産物や童話の里ならではの文化に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting woven baskets of local Oita vegetables, rice, and a wooden storybook motif, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'bungo_mori_complete',
    name_ja: '豊後森・機関庫と玖珠の街を歩みし者',
    subtitle_en: 'Walker of Bungo-Mori Heritage',
    description:
      '岩下製餡所からHounds Cafe Leon、森のクレヨン、豊後森機関庫公園、道の駅 童話の里くすまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a railway roundhouse silhouette, a flat-topped mountain, and handmade sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '岩下製餡所（あんこ菓子いわした）',
      spot_type: '買い物',
      description:
        '塚脇で長年親しまれる製餡所が営むあんこ菓子店。粒あんやこしあんを使ったおはぎ、どら焼き、まんじゅうなどが並ぶ。営業時間8:00〜17:30（火曜は15:00まで）、水曜定休。',
      address: '大分県玖珠郡玖珠町大字塚脇370',
      prefecture: '大分県',
      city: '玖珠町',
      lat: 33.277338,
      lng: 131.153275,
      clue: '豊後森駅を出たら、すぐ近くの塚脇で甘い小豆の香りが漂う「岩下製餡所（あんこ菓子いわした）」へ立ち寄ろう（8:00〜17:30、水曜定休）。長年地域に親しまれてきた製餡所が営む店先では、職人が丁寧に炊き上げた粒あんやこしあんを使ったおはぎやどら焼きが並ぶ。口に含むと小豆本来の風味がまっすぐに広がり、後味はすっきり。昔ながらの町の暮らしを支えてきた手仕事の甘味で、旅の朝にやさしい活力を得よう。',
      surprise:
        '製餡所そのものが直売する和菓子だからこそ、あんこの瑞々しさと小豆一粒一粒の輪郭がくっきりと際立っている。地元のお客さんが気軽に立ち寄って会話を楽しむ様子にも、玖珠の町の穏やかな体温が宿り、旅人の心を優しく心地よく温かく和ませてくれるのが嬉しい。',
      hook: '甘味を手に入れたら、北北東へ徒歩11分のHounds Cafe Leonでひと息つこう。',
      f7_fragment: '小豆の香りに誘われて立ち寄る、塚脇の老舗が手づくりする餡子店。',
      f7_full: '駅近くの「岩下製餡所」で小豆本来の風味が際立つ手づくりあんこ菓子を味わい、玖珠の暮らしの温もりにじっくり触れた。',
      image_prompt:
        'Cozy traditional Japanese sweet shop wooden counter with trays of freshly made red bean paste ohagi and dorayaki sweets, no text, no people.',
    },
    {
      name: 'Hounds Cafe Leon',
      spot_type: '休憩',
      description:
        '帆足エリアの静かな街並みにある落ち着いたカフェ。森のクレヨンや機関庫へ向かう道中のひと休みに心地よい空間で珈琲やスイーツを味わえる。営業時間10:00〜17:00、火曜定休。',
      address: '大分県玖珠郡玖珠町大字帆足244-2',
      prefecture: '大分県',
      city: '玖珠町',
      lat: 33.283267,
      lng: 131.155154,
      clue: '岩下製餡所から北北東へ徒歩9分、帆足の通り沿いにある「Hounds Cafe Leon」で小休止しよう（10:00〜17:00、火曜定休）。街歩きの足を休めて珈琲を一服したい。',
      surprise:
        '町歩きの途中に肩の力を抜いて過ごせる柔らかな空間があり、丁寧な一杯の香りに思わず長居したくなる。外の田園風景と穏やかな空気が、玖珠盆地の昼下がりを心地よく彩り、これから向かう食事と散策への足取りをぐっと軽やかに、そして楽しく整えてくれる。',
      hook: 'カフェを出たら、東南東へ徒歩5分の森のクレヨンでランチにしよう。',
      f7_fragment: '帆足の街並みにそっと寄り添う、香ばしい珈琲と温かな休息時間。',
      f7_full: '帆足の「Hounds Cafe Leon」で淹れたての珈琲を味わい、玖珠の街歩きの合間に穏やかな休息をとった。',
      image_prompt:
        'Warm rustic Japanese cafe corner with a steaming cup of coffee and slice of homemade cake on a dark wooden table, no text, no people.',
    },
    {
      name: '森のクレヨン',
      spot_type: '食事',
      description:
        '玖珠のシンボルである伐株山や線路を大きな窓から望めるベーカリー＆カフェレストラン。焼きたてパンや地元食材を使った食事が人気。営業時間10:00〜17:00（カフェ11:00〜16:00）、月・火曜定休。',
      address: '大分県玖珠郡玖珠町大字帆足449-1',
      prefecture: '大分県',
      city: '玖珠町',
      lat: 33.28187,
      lng: 131.158212,
      clue: 'Hounds Cafe Leonから東南東へ徒歩5分、線路や伐株山を望む「森のクレヨン」で食事を楽しもう（10:00〜17:00、月・火曜定休）。大きな窓の外に平らな山頂が特徴的な伐株山の雄姿が広がり、焼きたてのパンや地元食材を取り入れた料理がテーブルを彩る。障がいのある人も地域とともに働く温かな空間で、玖珠盆地の豊かな景色を眺めながらお腹を満たせば、午後からの散策に向けた活力も湧いてくる。',
      surprise:
        '店内から望むテーブル状の伐株山と、時折線路を走り抜ける列車の風景が、そのまま玖珠の原風景を描き出す。焼きたてパンの香ばしい匂いに包まれながら味わう一皿に、地域の温かな人と土地の優しさがぎゅっと凝縮されて心が深く満たされるのが実によくわかる。',
      hook: 'お腹が満たされたら、南西へ徒歩1分の豊後森機関庫公園へ向かおう。',
      f7_fragment: '伐株山と線路を窓辺に望み、焼きたてパンを味わう森の温かな食卓。',
      f7_full: '「森のクレヨン」で伐株山の雄大な風景を眺めながら焼きたてのパンと食事を楽しみ、玖珠の昼下がりを心ゆくまで満喫した。',
      image_prompt:
        'Bright airy Japanese bakery cafe interior with wooden tables, fresh crusty bread loaves and large window framing a flat-topped green mountain, no text, no people.',
    },
    {
      name: '豊後森機関庫公園',
      spot_type: '見どころ',
      description:
        '九州に現存する唯一の扇形機関庫と転車台を保存する公園。敷地内の蒸気機関車や併設ミュージアムで久大本線の歴史に触れられる。公園終日開放（ミュージアム10:00〜16:00・月曜休）。',
      address: '大分県玖珠郡玖珠町大字岩室36-15',
      prefecture: '大分県',
      city: '玖珠町',
      lat: 33.281386,
      lng: 131.157642,
      clue: '森のクレヨンから南西へ徒歩1分、九州に現存する唯一の扇形機関庫と転車台が残る「豊後森機関庫公園」が姿を現す（公園終日開放・ミュージアム月曜休）。コンクリート造りの壁面には当時の煤や風雪の跡が刻まれ、前庭には黒光りする蒸気機関車が静かに佇んでいる。かつて山あいの鉄路を行き交う列車を支えた拠点の空気を感じながら、併設の資料館を眺めれば、交通の要衝として賑わった往時の息吹が伝わってくる。',
      surprise:
        '荒廃しかけていた機関庫を地域の熱意で保存・再生した経緯が、広場に漂う清々しい手入れの跡からも感じられる。すぐ脇の線路を走る列車の音と山並みの緑が重なり、鉄道好きでなくとも胸が熱くなる貴重な空間が地域の人々の手で今日まで大切に守られ続けてきた。',
      hook: '機関庫公園を見学したら、北へ徒歩15分の道の駅 童話の里くすで旅を結ぼう。',
      f7_fragment: '九州唯一の扇形庫と転車台が伝える、山あいの鉄路の確かな誇り。',
      f7_full: '「豊後森機関庫公園」を訪ね、九州唯一の扇形機関庫と転車台の前に立って久大本線の長い歴史にじっくりと思いを馳せた。',
      image_prompt:
        'Historic concrete fan-shaped railway roundhouse and steel turntable with a black steam locomotive on green grass in Bungo-Mori Oita, no text, no people.',
    },
    {
      name: '道の駅 童話の里くす',
      spot_type: '買い物',
      description:
        '玖珠町の特産品や新鮮な農産物、童話の里にちなんだお土産が揃う地域の交流拠点。営業時間9:00〜18:00（冬季17:00まで）、年末年始休。',
      address: '大分県玖珠郡玖珠町大字帆足2121',
      prefecture: '大分県',
      city: '玖珠町',
      lat: 33.289496,
      lng: 131.157297,
      clue: '機関庫公園から北へ徒歩15分、国道沿いに開けた「道の駅 童話の里くす」で旅の締めくくりを迎えよう（9:00〜18:00、年末年始休）。物産館には玖珠盆地の寒暖差が育てたお米や季節の野菜、地元の加工品が瑞々しく並び、口演童話で知られるこの町ならではの絵本や雑貨も目を引く。駅前の商店街から機関庫の鉄路を経て辿り着いた盆地の拠点で、玖珠の恵みと物語の余韻をゆっくり持ち帰ろう。',
      surprise:
        '「童話の里」という名に込められた地域の誇りが、建物の細部や特産品のパッケージにも温かく息づいている。広々とした敷地の向こうに山々を仰ぎ見れば、豊後森の町歩きが穏やかな満足感と豊かな余韻とともに心地よく結ばれていくのがはっきりと感じられるはずだ。',
      hook: '',
      f7_fragment: '玖珠盆地の恵みと物語の余韻が揃う、童話の里の豊かな交流拠点。',
      f7_full: '「道の駅 童話の里くす」で玖珠盆地の特産品と町の温もりに触れ、豊後森の街歩きを穏やかに、そして美しく締めくくった。',
      image_prompt:
        'Welcoming Japanese countryside roadside station market displaying fresh rice bags, local vegetables and wooden crafts under warm afternoon light, no text, no people.',
    },
  ],
};
