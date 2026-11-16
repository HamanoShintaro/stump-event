export default {
  slug: 'bokoi',
  station_order: 902,
  station: '母恋',
  line: 'JR室蘭支線',
  area_name: '母恋・地球岬と断崖海岸',
  prefecture: '北海道',
  municipality: '室蘭市',
  category: '名物駅弁と絶景断崖',
  budget_tier: 2,
  tags: ['北海道', '室蘭市', '母恋駅', '地球岬', '室蘭八景'],
  style_genre: 'ink_and_watercolor',
  title: '母恋・断崖絶壁の地球岬と潮風散歩',
  description:
    '昭和十五年築の木造駅舎と名物駅弁で知られる「JR母恋駅」から、創業五十年以上の老舗「浜勝」、奇岩を望む「チャラツナイ展望台」、室蘭随一の名勝「地球岬」、室蘭八景「トッカリショ展望台」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Bokoi Muroran from 1940 wooden railway station and classic yakitori diner to towering Pacific sea cliffs, white Cape Chikyu lighthouse and dramatic Tokkarisho coastal overlook, full bleed, no text, no letters.',
  question: '昭和の木造駅舎が残る母恋駅から老舗の室蘭やきとりや地球岬、トッカリショの断崖絶壁を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '昭和十五年築の木造駅舎と名物駅弁「母恋めし」の「JR母恋駅」',
      subtext: 'アイヌ語「ポクセイ・オ・イ」に由来する優しい駅名とレトロな木造駅舎に旅情を感じた。',
      badge: {
        code: 'bokoi_station',
        name_ja: '母恋・木造駅舎と駅弁',
        subtitle_en: 'Wooden Station Visitor of Bokoi',
        description: '昭和十五年築の木造駅舎が残るJR母恋駅を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a 1940 wooden railway station and traditional wrapped ekiben bento, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '創業五十年以上の老舗で味わう「浜勝」の室蘭やきとりとラーメン',
      subtext: '国産豚肩ロースの室蘭やきとりやみそカレーラーメンの深い味わいに満たされた。',
      badge: {
        code: 'bokoi_hamakatsu',
        name_ja: '母恋・浜勝のやきとり味人',
        subtitle_en: 'Muroran Yakitori Diner of Hamakatsu',
        description: '創業五十年以上の老舗「浜勝」で名物を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting charcoal-grilled pork and onion yakitori skewers beside a steaming ramen bowl, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '高さ百メートルの断崖に白亜の灯台が立つ室蘭随一の名勝「地球岬」',
      subtext: '太平洋の大海原を見下ろす断崖と白亜のチキウ岬灯台の圧倒的な絶景に息を呑んだ。',
      badge: {
        code: 'bokoi_chikyumisaki',
        name_ja: '母恋・地球岬の大展望',
        subtitle_en: 'Cape Chikyu Cliff Explorer',
        description: '白亜のチキウ岬灯台が立つ地球岬の絶景を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a crisp white coastal lighthouse perched atop steep hundred-meter ocean cliffs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '灰色の断崖と緑のクマザサが映える室蘭八景「トッカリショ展望台」',
      subtext: '「アザラシの岩」に由来する絶壁と青い海の鮮やかな対比が心に焼き付いた。',
      badge: {
        code: 'bokoi_tokkarisho',
        name_ja: '母恋・トッカリショ絶壁',
        subtitle_en: 'Tokkarisho Cliff Overlook Walker',
        description: '室蘭八景「トッカリショ展望台」の断崖絶壁を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting dramatic grey coastal cliffs topped with green bamboo grass above deep blue Pacific waves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'bokoi_master',
    name_ja: '母恋・地球岬と断崖海岸巡り',
    subtitle_en: 'Bokoi Cape Chikyu & Coast Master',
    description: 'JR母恋駅から浜勝、チャラツナイ展望台、地球岬、トッカリショ展望台までを巡った証',
    image_prompt:
      'A circular emblem combining 1940 wooden station, white cliffside lighthouse, grilled yakitori skewers and dramatic ocean cliffs, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR母恋駅',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1935年開業、1940年築のレトロな木造駅舎が残る駅（終日利用可）。駅名はアイヌ語「ポクセイ・オ・イ（ホッキ貝が群生する場所）」に由来し、構内売店で名物駅弁「母恋めし」（9:30〜13:00頃売切次第終了、木曜休）を販売。',
      address: '北海道室蘭市母恋北町1-1-1',
      lat: 42.317205,
      lng: 140.989511,
      clue:
        '昭和十五年築のレトロな木造駅舎が今も旅人を温かく迎える「JR母恋駅」から町歩きと散策を始めよう（駅終日利用可）。アイヌ語でホッキ貝が群生する場所を意味する言葉に由来する優しい駅名や、構内売店の名物駅弁「母恋めし」など鉄道旅ならではの魅力が尽きない。木の温もりあふれる素朴な駅舎をゆっくり後にしたら、まずは創業五十年以上の老舗食堂「浜勝」を目指してのんびり歩いて向かおう。',
      surprise: '昭和十五年築の素朴な木造駅舎と「母恋めし」の優しい響きが、鉄道旅ならではの温かい空気を運んでくれた。',
      hook: 'JR母恋駅を出たら、徒歩約二分の老舗食堂「浜勝」へ向かおう。',
      f7_fragment: '昭和十五年築の木造駅舎が残り、名物駅弁「母恋めし」でも知られる駅。',
      f7_full: '「JR母恋駅」のレトロな木造駅舎に降り立ち、地球岬と断崖海岸を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Bokoi Station 1940 dark timber railway station building beneath bright coastal sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '浜勝',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '創業50年以上の老舗食堂・居酒屋（11:30〜14:00・16:30〜23:00、日曜・年末年始休）。国産豚肩ロースの「室蘭やきとり」「やきとり丼」や「みそカレーラーメン」が名物。',
      address: '北海道室蘭市母恋北町2-9-4',
      lat: 42.315284,
      lng: 140.989234,
      clue:
        '創業五十年以上の老舗「浜勝」へ入ろう（11:30〜14:00等、日曜休）。国産豚の「室蘭やきとり」やみそカレーラーメンが名物だ。食後は「チャラツナイ展望台」へ。',
      surprise: '半世紀以上続く老舗の気さくな雰囲気と、国産豚肩ロースを使った本場「室蘭やきとり」の旨さに感激した。',
      hook: '浜勝でお腹を満たしたら、海岸線沿いの「チャラツナイ展望台」へ向かおう。',
      f7_fragment: '創業五十年以上、国産豚の「室蘭やきとり」やみそカレーラーメンが名物の老舗。',
      f7_full: '「浜勝」で本場の室蘭やきとりを味わい、母恋の街の温かな味覚に満たされた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hamakatsu cozy historic Japanese diner serving glazed pork-and-onion Muroran yakitori skewers and steaming miso curry ramen, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: 'チャラツナイ展望台',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '室蘭八景「金屏風・銀屏風」やマサカリ岩・蓬莱門などの奇岩と太平洋を望む景勝地（終日開放・無料）。名称はアイヌ語で「滝のようにサラサラ流れる小川」に由来する。',
      address: '北海道室蘭市母恋南町1-1',
      lat: 42.312301,
      lng: 140.991649,
      clue:
        '太平洋の荒波が削り出した雄大な海岸美を望む「チャラツナイ展望台」へ足を運んでみよう（終日開放・無料）。ここからは室蘭八景に数えられる「金屏風・銀屏風」の切り立った断崖や、マサカリ岩・蓬莱門といった迫力満点の奇岩群をすぐ間近に一望でき、自然の力強い造形美に思わず息を呑む。アイヌ語由来の美しい名を持つ絶景を心ゆくまで堪能したら、室蘭随一の名勝「地球岬」へとゆっくり向かおう。',
      surprise: '荒波に削られた「金屏風・銀屏風」やマサカリ岩のダイナミックな奇岩景観が圧巻だった。',
      hook: 'チャラツナイ展望台で奇岩を望んだら、室蘭随一の名勝「地球岬」へ向かおう。',
      f7_fragment: '室蘭八景「金屏風・銀屏風」や蓬莱門などの奇岩を一望する景勝地。',
      f7_full: '「チャラツナイ展望台」から太平洋の荒波と奇岩群を眺め、地球岬への期待が高まった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Charatsunai Overlook viewing dramatic golden sea cliffs and arched stone sea stack above foaming Pacific surf, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '地球岬',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '高さ100m超の断崖に白亜のチキウ岬灯台が立つ室蘭随一の名勝（終日開放・見学無料、2026年4月より緑地駐車場のみ有料）。水平線が丸く見えるほど雄大なパノラマが広がる。',
      address: '北海道室蘭市母恋南町4-77',
      lat: 42.301821,
      lng: 141.001849,
      clue:
        '高さ百メートルを超える断崖絶壁の先に白亜のチキウ岬灯台が凛と立つ室蘭随一の名勝「地球岬」へ到達しよう（終日開放・見学無料）。展望台から果てしない太平洋の大海原を見渡せば、地球の丸さを実感できるかのような雄大な水平線が目の前に大きく広がり、思わず深呼吸したくなる爽快さだ。絶景を心にしっかり深く焼き付けたら、最後は室蘭八景の「トッカリショ展望台」へとのんびり歩いて向かおう。',
      surprise: '百メートル超の断崖と白亜の灯台、果てしなく広がる太平洋の水平線が描き出す絶景に圧倒された。',
      hook: '地球岬の大パノラマを満喫したら、室蘭八景の「トッカリショ展望台」へ向かおう。',
      f7_fragment: '高さ百メートル超の断崖に白亜のチキウ岬灯台が立つ室蘭随一の名勝。',
      f7_full: '「地球岬」から果てしない太平洋の水平線と白亜の灯台を望み、自然の雄大さに感動した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cape Chikyu crisp white lighthouse standing high atop sheer dramatic ocean cliffs overlooking sweeping Pacific horizon, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: 'トッカリショ展望台',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '室蘭八景の一つ（終日開放・無料）。アイヌ語「トカル・イショ（アザラシの岩）」に由来し、灰色の断崖と斜面の緑のクマザサ、青い海の鮮やかな対比が美しい絶景スポット。',
      address: '北海道室蘭市母恋南町3-1',
      lat: 42.310757,
      lng: 140.997818,
      clue:
        '旅の締めくくりは、アイヌ語で「アザラシの岩」を意味する名を持つ室蘭八景「トッカリショ展望台」へ立ち寄ろう（終日開放・無料）。灰色の切り立った断崖絶壁と、その急斜面を覆う生き生きとした緑のクマザサ、そして眼下に広がる深い青い海が織りなす鮮やかな色彩のコントラストは息を呑むほどの美しさだ。太平洋の心地よい潮風を全身に感じて、母恋の絶景の旅を心地よく晴れやかに締めくくろう。',
      surprise: '灰色の断崖と緑のクマザサ、青い海の鮮やかなコントラストが絵画のように美しく、忘れられない眺めになった。',
      hook: '',
      f7_fragment: '灰色の断崖と緑のクマザサ、青い海の対比が美しい室蘭八景の絶景地。',
      f7_full: '「トッカリショ展望台」の断崖絶壁と海の美しい色彩を目に焼き付け、母恋の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tokkarisho Overlook rugged grey coastal cliffs blanketed in emerald bamboo grass plunging into deep blue sea, no text, no letters.',
    },
  ],
};
