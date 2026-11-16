export default {
  slug: 'wakayama',
  station_order: 653,
  station: '和歌山',
  line: 'JR阪和線',
  area_name: '和歌山・紀州徳川の城と中華そば',
  prefecture: '和歌山県',
  municipality: '和歌山市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['和歌山県', '和歌山市', '和歌山駅', '和歌山城', '井出商店'],
  style_genre: 'ukiyoe_nishikie_vivid',
  title: '和歌山・紀州和歌山城と井出商店を歩く',
  description:
    'JR和歌山駅から、駅直結の「ホテルズカフェ パスワード」と和歌山ラーメンの元祖的有名店「井出商店」、紀州徳川家55万5千石の居城「和歌山城（天守閣）」、城内の名勝「紅葉渓庭園（西之丸庭園）」、郷土の歴史を伝える「和歌山市立博物館」を巡る散策路。',
  eyecatch_prompt:
    'Vivid Ukiyo-e Nishiki-e style illustration of Wakayama castle town showing the crisp white keep of Wakayama Castle atop wooded Mount Torafusu, red maple leaves and covered wooden bridge of Momijidani Garden, classic Japanese ramen shopfront, and historic city museum, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '紀州ラーメンの濃厚な一杯から徳川御三家の名城、紅葉の庭園へと繋がる和歌山を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「井出商店」のカウンターで、豚骨醤油のコクと早寿司が揃う本場・和歌山ラーメンを味わった瞬間',
      subtext:
        '和歌山中華そばの名を全国へ広めた老舗の味と、テーブルに並ぶ早寿司の風習が印象深かった。',
      badge: {
        code: 'wakayama_ide',
        name_ja: '和歌山・老舗井出商店で中華そばを嗜みし者',
        subtitle_en: 'Taster of Wakayama Ramen',
        description:
          '井出商店を訪ね、濃厚な豚骨醤油スープの和歌山ラーメンと早寿司の文化を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a ceramic bowl of rich Wakayama pork-soy ramen topped with flower-shaped kamaboko and chashu beside a small wrapped sushi parcel, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「和歌山城」の天守閣に登り、紀ノ川と和歌山市街を見渡す大パノラマを望んだ瞬間',
      subtext:
        '徳川御三家・紀州五十五万五千石の居城が誇る白亜の天守と石垣に、城下町の威光を感じた。',
      badge: {
        code: 'wakayama_castle',
        name_ja: '和歌山・紀州五十五万石の天守を仰ぎし者',
        subtitle_en: 'Climber of Wakayama Castle',
        description:
          '紀州徳川家の居城・和歌山城の天守閣へ登り、紀ノ川と城下町の眺望を仰いだ証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing the crisp white multi-tiered keep of Wakayama Castle rising above stone ramparts and pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「紅葉渓庭園」のお堀に架かる御橋廊下を渡り、池に映る木々の彩りを眺めた瞬間',
      subtext:
        '藩主の別邸時代から続く静かな水辺と珍しい屋根付き廊下橋が、城内の隠れ名勝だった。',
      badge: {
        code: 'wakayama_momiji',
        name_ja: '和歌山・紅葉渓庭園と御橋廊下を巡りし者',
        subtitle_en: 'Walker of Momijidani Garden',
        description:
          '紅葉渓庭園（西之丸庭園）を訪ね、江戸時代の大名庭園と斜めに架かる御橋廊下を歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a traditional covered wooden bridge spanning a tranquil castle moat pond framed by red maple leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「和歌山市立博物館」で、紀州徳川家の文化や雑賀衆の歴史資料に触れて旅を結んだ瞬間',
      subtext:
        'お城の余韻そのままに郷土の物語を深め、和歌山の奥行きを最後まで味わうことができた。',
      badge: {
        code: 'wakayama_museum',
        name_ja: '和歌山・紀州の歴史を市立博物館で学びし者',
        subtitle_en: 'Visitor of Wakayama Museum',
        description:
          '和歌山市立博物館を訪ね、紀州の城下町と海の民の歴史資料に触れた証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing an antique samurai helmet, folded historical map scroll and museum lantern, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'wakayama_complete',
    name_ja: '和歌山・紀州の名城と中華そばを巡る旅人',
    subtitle_en: 'Walker of Wakayama',
    description:
      'パスワードから井出商店、和歌山城、紅葉渓庭園、和歌山市立博物館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the white keep of Wakayama Castle, a covered garden bridge and a steaming bowl of Wakayama ramen, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'ホテルズカフェ パスワード',
      spot_type: '休憩',
      description:
        'JR和歌山駅中央口から徒歩約2分、ホテルグランヴィア和歌山1階にある落ち着いたラウンジカフェ。香り高い珈琲やスイーツで旅の支度が整う。10:00〜19:30（L.O.18:30）、無休。',
      address: '和歌山県和歌山市友田町5-18',
      prefecture: '和歌山県',
      municipality: '和歌山市',
      lat: 34.232523,
      lng: 135.190158,
      clue: 'JR和歌山駅の中央口を出たら、まず徒歩約2分のホテルグランヴィア和歌山1階「ホテルズカフェ パスワード」で旅の支度を整えよう（10:00〜19:30、無休）。明るく開放的なラウンジで香り高い珈琲や軽食を味わいながら、紀州の城下町の地図を頭の中に広げられる。これから巡る和歌山ラーメンの名店と白亜の名城へ向けて、心も足取りもこれからもずっと楽しく軽やかに心地よく整えておきたい。',
      surprise:
        '和歌山駅のすぐ目の前という抜群の立地にあり、旅の始まりにも帰りの新幹線を待つひとときにも地元の人や旅人から重宝されている。',
      hook: '珈琲で目覚めたら、南へ歩いて徒歩7分の老舗中華そば・井出商店へ向かおう。',
      f7_fragment: '和歌山駅中央口すぐ、旅の始まりに心地よい珈琲を味わう駅近カフェ。',
      f7_full:
        '駅そばの「ホテルズカフェ パスワード」で香り高い珈琲を味わい、紀州・和歌山の街歩きを心地よく始めた。',
      image_prompt:
        'Elegant bright hotel lounge cafe in Wakayama with warm wooden accents, ceramic coffee cup and pastry plate in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '井出商店',
      spot_type: '食事',
      description:
        '和歌山ラーメン（中華そば）の名を全国に広めた老舗有名店。コクがありつつキレのある豚骨醤油スープと、卓上の「早寿司」「ゆで卵」を一緒に味わうのが和歌山流。11:30〜22:00（L.O.21:30）、木曜定休。',
      address: '和歌山県和歌山市田中町4-84',
      prefecture: '和歌山県',
      municipality: '和歌山市',
      lat: 34.228506,
      lng: 135.189541,
      clue: '駅から南へ歩いて約7分、和歌山中華そばの名を全国区にした老舗「井出商店」で名物の一杯を味わおう（11:30〜22:00、木曜休）。豚骨と鶏ガラをじっくり炊き上げた濃厚ながら後味軽やかな豚骨醤油スープに、しなやかな細麺とかまぼこ、チャーシューが乗る。卓上の「早寿司（鯖の押し寿司）」やゆで卵をつまみながら待つ和歌山ならではの食文化も、これからもずっと楽しく美味しく体験したい。',
      surprise:
        '和歌山のラーメン店ではラーメンが運ばれる前に卓上の「早寿司」を食べ、会計時に食べた個数を自己申告する独特の風習が受け継がれている。',
      hook: '本場の味を堪能したら、西へ（またはバスで）進み紀州徳川家の和歌山城へ向かおう。',
      f7_fragment: '濃厚な豚骨醤油スープと卓上の早寿司が名物の、和歌山ラーメンの老舗。',
      f7_full:
        '老舗「井出商店」で本場の和歌山ラーメンと早寿司を味わい、紀州が誇る中華そばの食文化を堪能した。',
      image_prompt:
        'Bustling traditional Japanese ramen shop counter in Wakayama serving a bowl of rich soy-tonkotsu ramen with flower kamaboko and wrapped sushi in Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '和歌山城（天守閣）',
      spot_type: '見どころ',
      description:
        '天正13年（1585年）に豊臣秀吉の命で築城され、のちに徳川御三家・紀州藩55万5千石の居城となった名城。白亜の天守閣から紀ノ川と市街を一望できる。9:00〜17:30（入場17:00まで）、12月29〜31日休、大人410円。',
      address: '和歌山県和歌山市一番丁3',
      prefecture: '和歌山県',
      municipality: '和歌山市',
      lat: 34.227722,
      lng: 135.172485,
      clue: '城下町の中心・虎伏山にそびえる「和歌山城」の天守閣へ登ろう（9:00〜17:30、大人410円）。徳川御三家・紀州五十五万五千石の威容と市街の大眺望を仰ぎたい。',
      surprise:
        '築城の名手・藤堂高虎が縄張りを手掛け、のちに初代紀州藩主となった徳川頼宣によって大改修された名城で、石垣の石の積み方の違いも見どころ。',
      hook: '天守閣の眺望を味わったら、城内の北西に広がる紅葉渓庭園へ降りよう。',
      f7_fragment: '紀州徳川家五十五万五千石の居城、虎伏山にそびえる白亜の天守閣。',
      f7_full:
        '「和歌山城」の天守閣へ登って紀ノ川と城下町を見渡し、徳川御三家・紀州藩の堂々たる風格を体感した。',
      image_prompt:
        'Crisp white keep of Wakayama Castle atop massive stone ramparts and lush green hillside in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '紅葉渓庭園（西之丸庭園）',
      spot_type: '見どころ',
      description:
        '和歌山城の北西麓、西之丸跡に造られた江戸初期の大名庭園で国指定名勝。池に浮かぶ鳶魚閣や、斜めに架かる珍しい屋根付き橋「御橋廊下」が見どころ。9:00〜17:00（茶室9:00〜16:30）、12月29〜31日休、無料。',
      address: '和歌山県和歌山市一番丁3',
      prefecture: '和歌山県',
      municipality: '和歌山市',
      lat: 34.22871,
      lng: 135.17073,
      clue: '和歌山城の北西麓へ降り、国指定名勝の大名庭園「紅葉渓庭園（西之丸庭園）」を歩こう（9:00〜17:00、無料）。紀州藩初代藩主・徳川頼宣が築いた庭園で、お堀の水面を斜めに渡る珍しい屋根付きの橋「御橋廊下」や、池に浮かぶように建つ釣殿「鳶魚閣」が絵のような美しさだ。城山の緑と紅葉が水面に映る静かな空間で、江戸の風雅にこれからもずっと心静かに深くじっくりと浸り続けていたい。',
      surprise:
        '御橋廊下は藩主やお付きの人々が外から見られないよう壁と屋根を設けた珍しい構造で、全国的にも珍しい斜めに架かる橋となっている。',
      hook: '庭園の余韻を抱いたら、北西へ歩いて和歌山市立博物館で旅を結ぼう。',
      f7_fragment: '斜めに架かる御橋廊下と水面の彩りが美しい、国指定名勝の大名庭園。',
      f7_full:
        '国指定名勝の「紅葉渓庭園」で御橋廊下を渡り、お城の麓に息づく江戸時代の大名庭園の風雅に浸った。',
      image_prompt:
        'Covered wooden Ohashiroka bridge spanning tranquil castle pond surrounded by vibrant autumn maples in Momijidani Garden in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '和歌山市立博物館',
      spot_type: '見どころ',
      description:
        '和歌山城の北西、南海和歌山市駅近くにある歴史博物館。紀州徳川家ゆかりの資料や戦国期の雑賀衆、江戸から近代の和歌山の歩みを紹介している。9:00〜17:00（入館16:30まで）、月曜・祝翌日休、一般100円。',
      address: '和歌山県和歌山市湊本町3-2',
      prefecture: '和歌山県',
      municipality: '和歌山市',
      lat: 34.233214,
      lng: 135.163125,
      clue: '紅葉渓庭園から城の北西へ抜け、湊本町の「和歌山市立博物館」を訪ねて旅を締めくくろう（9:00〜17:00、月曜・祝翌日休）。紀州徳川家の治世や戦国時代に活躍した雑賀衆、北前船も寄港した湊町の歴史まで、和歌山の歩みを物語る貴重な資料が丁寧に展示されている。先ほど仰いだ天守閣と庭園の記憶を知識で裏付けながら、紀州の旅をこれからもずっと心深く豊かに誇らしく美しく温かく結びたい。',
      surprise:
        '和歌山市は万葉の景勝地・和歌浦から紀州徳川家の城下町、そして近代の綿ネル産業まで多彩な歴史を持ち、博物館ではその全体像を一望できる。',
      hook: '',
      f7_fragment: '紀州徳川家や雑賀衆など、和歌山の奥深い歴史を伝える市立博物館。',
      f7_full:
        '「和歌山市立博物館」で紀州の歩みを学び、和歌山ラーメンと名城・庭園を巡った和歌山の旅を豊かに結んだ。',
      image_prompt:
        'Refined Japanese city museum gallery interior displaying antique samurai armor, old castle maps and historical scrolls in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
  ],
};
