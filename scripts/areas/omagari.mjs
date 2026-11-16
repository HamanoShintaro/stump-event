export default {
  slug: 'omagari',
  station_order: 615,
  station: '大曲駅',
  line: 'JR奥羽本線・田沢湖線・秋田新幹線',
  area_name: '大曲・花火の街と中通商店街',
  prefecture: '秋田県',
  municipality: '大仙市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['秋田県', '大仙市', '大曲駅', '大曲の花火', 'はなび・アム'],
  style_genre: 'pictorial_isometric_map',
  title: '花火の街・大曲の商店街と伝統文化を歩く',
  description:
    '秋田新幹線も発着するJR大曲駅を起点に、駅構内のカフェや濃厚煮干しの人気ラーメン店を経て、江戸末期から続く中通の老舗和菓子店や秋田銘菓の店舗を巡り、大曲の花火を伝える資料館「はなび・アム」へと至る、大仙の暮らしと文化を辿る散策路。',
  eyecatch_prompt:
    'Elevated isometric pictorial travel map illustration of Omagari town in Akita, featuring colorful night fireworks blooming above the fireworks museum building, classic train terminal, traditional Japanese confectionery shop and cozy ramen diner on natural textured cream paper, no text, no people.',
  question:
    '花火の伝統と商店街の暮らしが息づく大曲の街で、あなたが最初に誰かへ伝えたい風景はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '「花火伝統文化継承資料館（はなび・アム）」で、大曲の花火の歴史と迫力の映像に触れた瞬間',
      subtext:
        '職人たちが技を競い続けてきた全国花火競技大会の誇りが、展示の一つひとつから伝わった。',
      badge: {
        code: 'omagari_hanabiam',
        name_ja: '大曲・花火の伝統を継ぐ者',
        subtitle_en: 'Keeper of Omagari Fireworks',
        description:
          '花火伝統文化継承資料館（はなび・アム）を訪ね、大曲の花火の技と歴史に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting vibrant gold and crimson chrysanthemum fireworks blooming in a night sky above a calm river, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「菓子司 つじや 中通本店」で、名物のとうふかまぼこや三杯もちを手に取った瞬間',
      subtext:
        '百五十余年受け継がれてきた素朴で優しい郷土菓子の味わいに、大曲の暮らしの温もりを見た。',
      badge: {
        code: 'omagari_tsujiya',
        name_ja: '中通・老舗和菓子の旅人',
        subtitle_en: 'Traveler of Omagari Sweets',
        description:
          '菓子司 つじや 中通本店を訪ね、大曲で長く愛されてきた伝統の郷土菓子に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting traditional Japanese tofu-castella and soft mochi confections arranged on a cedar tray beside green tea, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '「麺屋 にぼすけ 大曲駅前店」で、旨みあふれる濃厚煮干しの一杯を味わった瞬間',
      subtext:
        '駅前の活気ある店内でいただく香り高い煮干しスープが、東北の街歩きに力をくれた。',
      badge: {
        code: 'omagari_nibosuke',
        name_ja: '大曲駅前・煮干しの一杯を味わいし者',
        subtitle_en: 'Taster of Omagari Ramen',
        description:
          '麺屋 にぼすけ 大曲駅前店を訪ね、地元の人々にも愛される濃厚煮干しラーメンを堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming ceramic bowl of rich Japanese niboshi ramen with sliced chashu pork and chopped onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 1,
      text: '「PLUS CAFE 大曲駅店」の落ち着いた空間で、淹れたての珈琲を味わいながら出発した瞬間',
      subtext:
        '駅の一階に広がる心地よい空間で一息つき、大仙の街へ歩き出す穏やかな気持ちを整えた。',
      badge: {
        code: 'omagari_plus_cafe',
        name_ja: '大曲駅・珈琲の序章を知る者',
        subtitle_en: 'Guest of Omagari Station Cafe',
        description:
          'PLUS CAFE 大曲駅店を訪ね、スペシャルティコーヒーとともに大曲の街歩きを始めた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a specialty latte coffee cup and slice of cheesecake on a warm oak cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'omagari_complete',
    name_ja: '大曲・花火の街と商店街を歩みし者',
    subtitle_en: 'Walker of Omagari Town',
    description:
      'PLUS CAFEから麺屋 にぼすけ、菓子司 つじや、お菓子のくらた、はなび・アムまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining blooming festival fireworks, a classic railway arch, and traditional local sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'PLUS CAFE 大曲駅店',
      spot_type: '休憩',
      description:
        'JR大曲駅1階にあるカフェ。バリスタが淹れるスペシャルティコーヒーやスイーツ、地元酒造の地酒まで楽しめる。平日9:00〜17:00・土曜10:30〜17:00、日曜・祝日定休。',
      address: '秋田県大仙市大曲通町6-1',
      prefecture: '秋田県',
      city: '大仙市',
      lat: 39.465335,
      lng: 140.479661,
      clue: '秋田新幹線も停車するJR大曲駅に着いたら、まず駅一階の「PLUS CAFE 大曲駅店」で足を整えよう（平日9:00〜17:00・土曜10:30〜17:00、日祝休）。バリスタが丁寧に淹れるスペシャルティコーヒーの香りが心地よく、焼き菓子や軽食とともに穏やかな朝の時間を過ごせる。駅のすぐ外に広がる大曲の商店街と花火の街の輪郭を思い描きながら、心地よい街歩きの序章を始めたい。',
      surprise:
        '駅の改札を出てすぐの場所で本格的なスペシャルティコーヒーの香りに出会えるのが嬉しい。地元の人たちも気軽に立ち寄る明るい雰囲気に包まれて、これから歩く大仙の商店街や花火の文化への期待感が自然と心地よく高まっていくに違いない。旅の始まりにふさわしい一軒だ。',
      hook: '珈琲で一息ついたら、南南東へ徒歩2分の麺屋 にぼすけ 大曲駅前店へ向かおう。',
      f7_fragment: '大曲駅の一階に広がる、香り高いスペシャルティコーヒーの空間。',
      f7_full: '駅構内の「PLUS CAFE 大曲駅店」で香り高い珈琲を味わい、花火の街・大曲の散策を心地よくゆったり始めた。',
      image_prompt:
        'Modern cozy Japanese station-side cafe interior with specialty pour-over coffee cup and pastry plate on a warm wooden counter, no text, no people.',
    },
    {
      name: '麺屋 にぼすけ 大曲駅前店',
      spot_type: '食事',
      description:
        '濃厚な煮干し系ラーメンで知られる県内有数の人気店。香り高い魚介スープと食べ応えのある麺が評判。月・火・木17:00〜24:00、金17:00〜翌2:00、土11:00〜翌2:00、日11:00〜22:00、水曜定休。',
      address: '秋田県大仙市大曲通町4-1',
      prefecture: '秋田県',
      city: '大仙市',
      lat: 39.464172,
      lng: 140.480549,
      clue: 'PLUS CAFEから南南東へ徒歩2分、通町の通りに煮干しの芳醇な香りが漂う「麺屋 にぼすけ 大曲駅前店」へ足を運ぼう（土日11:00〜・平日17:00〜、水曜定休）。週末の昼や平日の夜に賑わう人気店で、煮干しの旨みを極限まで引き出した濃厚なスープとコシのある中太麺が見事に調和している。シャキシャキの刻み玉ねぎがスープのコクを引き立て、東北のまち歩きに向けた活力をしっかり養ってくれる一杯だ。',
      surprise:
        '秋田を代表する煮干しラーメンの名店の味を駅すぐそばで味わえ、湯気の立つ丼を前にすると自然と顔がほころぶ。煮干しの力強い風味の奥に丁寧な仕事が感じられ、地元客が足繁く通い続ける理由がひと口でよくわかるに違いない。今日も活気が店内に満ちている。',
      hook: 'ラーメンを味わったら、南西へ徒歩5分の菓子司 つじや 中通本店へ向かおう。',
      f7_fragment: '大曲駅前で愛され続ける、煮干しの旨みが凝縮された濃厚な一杯。',
      f7_full: '通町の「麺屋 にぼすけ 大曲駅前店」で香り豊かな濃厚煮干しラーメンを味わい、大曲の活気ある食文化に深く触れた。',
      image_prompt:
        'Steaming ceramic bowl of rich Japanese niboshi fish-broth ramen topped with sliced chashu pork and diced white onion on a wooden counter, no text, no people.',
    },
    {
      name: '菓子司 つじや 中通本店',
      spot_type: '買い物',
      description:
        '百五十余年続く中通町の老舗和菓子店。豆腐と白身魚のすり身を合わせた名物「とうふかまぼこ」や「三杯もち」が定番土産として親しまれる。営業時間9:30〜18:00（日祝17:00まで）、第1・第3水曜定休。',
      address: '秋田県大仙市大曲中通町1-20',
      prefecture: '秋田県',
      city: '大仙市',
      lat: 39.461946,
      lng: 140.478143,
      clue: 'にぼすけから南西へ徒歩5分、老舗の風情を残す「菓子司 つじや 中通本店」に立ち寄ろう（9:30〜18:00、第1・第3水曜休）。大曲名物のとうふかまぼこや三杯もちを手に入れたい。',
      surprise:
        'カステラのように甘くしっとりとした食感の「とうふかまぼこ」や、もち米と小豆が絶妙な「三杯もち」など、この土地ならではの珍しい郷土菓子が並ぶ。百五十余年受け継がれてきた優しい甘みに、秋田の豊かな食の知恵が今も変わらず息づき、思わず笑顔になる名店だ。',
      hook: 'つじやを出たら、南東へ徒歩1分のお菓子のくらた 大曲店を訪ねよう。',
      f7_fragment: '中通町の老舗で出会う、とうふかまぼこと三杯もちの伝統の味わい。',
      f7_full: '老舗「菓子司 つじや 中通本店」を訪ね、大曲で長く愛されてきたとうふかまぼこや三杯もちの優しい味わいに触れた。',
      image_prompt:
        'Traditional Japanese confectionery shop wooden counter displaying golden tofu castella loaves and neatly wrapped mochi sweets, no text, no people.',
    },
    {
      name: 'お菓子のくらた 大曲店',
      spot_type: '買い物',
      description:
        '秋田を代表する菓子舗の大曲店舗。角館ゆかりの醤油バウムクーヘンや季節の和洋菓子など、贈り物にも喜ばれる品が豊富に揃う。不定休。',
      address: '秋田県大仙市大曲中通町3-5',
      prefecture: '秋田県',
      city: '大仙市',
      lat: 39.461526,
      lng: 140.478934,
      clue: 'つじやから南東へ徒歩1分、中通町の商店街をさらに進むと、秋田を代表する菓子舗「お菓子のくらた 大曲店」が見えてくる（不定休）。醤油の香り豊かな「醤油バウム」をはじめ、秋田県産の米や素材を活かした和洋菓子が色とりどりに彩り豊かに並んでいる。つじやの伝統菓子と食べ比べながら、地元で長年親しまれてきたお菓子の数々をこれから先の旅のお土産に心を込めてじっくりと選んでおきたいところだ。',
      surprise:
        '醤油という和の調味料を洋菓子のバウムクーヘンに合わせる独創的な発想と、それを見事に上品な味わいへ仕上げた職人技に思わず驚かされる。明るく開かれた店舗の佇まいが、中通商店街の穏やかな日常に彩りを豊かに添えてくれる、立ち寄るのが楽しい素敵な一軒だ。',
      hook: 'お土産を選んだら、南南東へ徒歩4分の花火伝統文化継承資料館（はなび・アム）へ向かおう。',
      f7_fragment: '秋田の素材と技が光る、中通商店街の彩り豊かな創作銘菓の数々。',
      f7_full: '「お菓子のくらた 大曲店」で醤油バウムなど秋田ならではの創作菓子を眺め、商店街の豊かな魅力を楽しくたっぷり満喫した。',
      image_prompt:
        'Bright Japanese pastry shop interior displaying layered golden baumkuchen cakes and gift boxes on warm oak shelves, no text, no people.',
    },
    {
      name: '花火伝統文化継承資料館（はなび・アム）',
      spot_type: '見どころ',
      description:
        '日本三大花火大会の一つ「大曲の花火」の歴史と技術、文化を体感できる無料ミュージアム。4面シアターの迫力ある映像や花火玉の模型展示が人気。開館9:00〜17:00、月曜休（祝日の場合は翌平日休）・入館無料。',
      address: '秋田県大仙市大曲大町7-19',
      prefecture: '秋田県',
      city: '大仙市',
      lat: 39.459617,
      lng: 140.480321,
      clue: 'お菓子のくらたから南南東へ徒歩4分、大町に建つ「花火伝統文化継承資料館（はなび・アム）」で歩みを締めくくろう（9:00〜17:00、月曜休・無料）。日本最高峰の競技大会「大曲の花火」の歴史を伝える博物館で、四面マルチスクリーンの大迫力シアターや花火玉の構造模型を通して花火師たちの技の粋に触れられる。商店街から辿ってきた大曲の誇りを胸に、いつまでも忘れず深く刻み込もう。',
      surprise:
        '夜空を彩る一瞬の芸術の背後に、どれほど緻密な火薬の調合と職人の熱い情熱が込められているのかを間近で知ることができる。大曲の街を歩いた最後にこの資料館を訪れることで、まち全体に根付く花火への深い誇りがより鮮やかに心に浮かび上がってくるはずだ。',
      hook: '',
      f7_fragment: '大曲の花火の技と誇りを伝える、大町の体験型花火ミュージアム。',
      f7_full: '「花火伝統文化継承資料館（はなび・アム）」を訪ね、大曲の花火の歴史と花火師の技に触れて散策を静かに締めくくった。',
      image_prompt:
        'Modern cultural museum gallery exhibiting colorful large-scale Japanese fireworks shell cross-sections and glowing night firework projection walls, no text, no people.',
    },
  ],
};
