// Spot 1: 藤枝駅 (195 chars)
const s1_clue =
  'JR東海道本線の「藤枝（ふじえだ）駅」から、茶業の歴史が生んだご当地文化「朝ラー」と旧東海道二十二番目の宿場町・藤枝宿の記憶、そしてサッカーの街の活気が息づく静岡県藤枝市の旅を始めよう（改札・自由通路は始発〜終電）。南北を結ぶ開放的な自由通路や駅前のペデストリアンデッキには、日本有数のサッカーのまちを象徴する藤色のフラッグやモニュメントが街並みに爽やかな彩りを添えている。';
const s1_surprise =
  '古くは徳川家康公ゆかりの田中城下や東海道藤枝宿として栄え、近代以降は志太茶の集散地および「サッカーのまち」として独自の発展を遂げた街だ。爽やかな朝の風が吹き抜ける駅前から、茶業の早朝文化が育んだ朝ラーメンの名店と旧東海道の名刹を巡る散策へ出発しよう。';
const s1_hook =
  '次は藤枝駅から北へ約665m（徒歩11分）、ケヤキ並木と芝生広場が広がる「青木中央公園」へ。';

// Spot 2: 青木中央公園 (Breath spot: 95 chars)
const s2_clue =
  '藤枝駅からケヤキ並木の通りを北へ徒歩11分、緑豊かな芝生広場が広がる「青木中央公園」へ立ち寄ろう（入園自由）。木陰のベンチや遊歩道が整備された開放的な広場で、朝の街歩きの足をひと休めしよう。';
const s2_surprise =
  '駅北エリアの区画整理とともに整備された市民の憩いの公園で、四季折々の木々が彩る芝生広場では地元の人々が朝の散歩や語らいを楽しんでいる。穏やかな日差しと爽やかな風を感じながら、旧東海道・志太エリアへと続く道のりへ向けてゆっくりと深呼吸しよう。';
const s2_hook =
  '次は青木中央公園から北北西へ約1.0km（徒歩16分）、大正八年創業の藤枝朝ラー発祥の店「マルナカ」へ。';

// Spot 3: マルナカ (198 chars)
const s3_clue =
  '青木中央公園から北北西へ徒歩16分、大正八年（一九一九年）創業の藤枝「朝ラー（朝ラーメン）」発祥の老舗として知られる「マルナカ」を訪ねよう（8:30〜13:20頃営業、日曜・祝日・第2第4土曜休、売り切れ次第終了）。早朝から働く茶業関係者が仕事終わりに立ち寄ったことから生まれた藤枝独自の食文化で、鰹出汁が香るすっきりとした醤油スープの「温」と甘みのある「冷」の二杯を味わうのが伝統のスタイルだ。';
const s3_surprise =
  '油分を抑えた鰹節ベースの和風出汁に自家製の中太麺と脂身の少ないチャーシューが合い、朝からでもスルスルと食べられる優しい味わいが百年以上にわたり地元の人々に愛されてきた。茶処・志太ならではの歴史が詰まった伝統の一杯で、藤枝の朝の活気を体感しよう。';
const s3_hook =
  '次はマルナカから北北東へ約740m（徒歩12分）、旧東海道藤枝宿の老舗和菓子処「紅家 紅粉屋九右衛門」へ。';

// Spot 4: 紅家 紅粉屋九右衛門 (192 chars)
const s4_clue =
  'マルナカから北北東へ徒歩12分、旧東海道・藤枝宿の通り沿いに暖簾を掲げる江戸時代創業の老舗和菓子処、「紅家 紅粉屋九右衛門（べにやきゅうえもん）」へ足を運ぼう（8:30〜18:00営業、水曜休）。かつて紅（べに）や白粉を商った歴史を屋号に伝え、徳川家康公が田中城を訪れた際の逸話にちなんだ干し柿と白餡の銘菓「長寿柿」や、北海道産小豆を手練りしたどら焼きなど、宿場町の伝統を受け継ぐ和菓子が並んでいる。';
const s4_surprise =
  '藤枝宿の商家として江戸時代から代々受け継がれてきた老舗で、厳選した素材と丁寧な手仕事による四季の上生菓子や焼き菓子はお茶処・藤枝の香り高い煎茶とも相性抜群だ。旧東海道の面影が残る落ち着いた店先で、宿場町の歴史が育んだ上品な甘みを手に取ってみよう。';
const s4_hook =
  '次は紅家 紅粉屋九右衛門から東へ約140m（徒歩2分）、樹齢七百五十年の名松が枝を広げる「大慶寺」へ。';

// Spot 5: 大慶寺 (203 chars)
const s5_clue =
  '紅家から東へ徒歩2分、鎌倉時代に日蓮聖人が比叡山遊学の途中に立ち寄った縁で開かれた日蓮宗の古刹、「円妙山 大慶寺（だいけいじ）」で旅を締めくくろう（境内参拝自由）。田中城の祈願寺として「さむらい寺」とも呼ばれた境内には、日蓮聖人が久遠の仏道繁栄を祈って手植えしたと伝わる樹齢約七百五十年のクロマツ「久遠（くおん）の松」が聳え、静岡県指定天然記念物および「日本の名松百選」として圧巻の枝ぶりを見せている。';
const s5_surprise =
  '高さ約二十五メートル・枝張り約三十メートルにおよぶ久遠の松は、江戸時代には旧東海道・藤枝宿を往来する旅人の目印としても親しまれた名木だ。朝ラーの活気から老舗の銘菓、そして七百五十年を超えて宿場町を見守る名松までを巡った藤枝の旅を、清々しい松風とともに締めくくろう。';
const s5_hook = '';

export default {
  slug: 'fujieda',
  station_order: 512,
  station: '藤枝駅',
  line: 'JR東海道本線',
  area_name: '朝ラーの街と旧東海道藤枝宿（藤枝市）',
  prefecture: '静岡県',
  category: '歴史・グルメ',
  budget_tier: 1,
  title: '朝ラーとサッカーの熱気が息づく街・藤枝へ',
  description:
    '茶処の早朝文化が生んだ「朝ラー」と旧東海道藤枝宿の歴史、そしてサッカーの街の活気が息づく静岡県藤枝市。JR藤枝駅から、緑豊かな青木中央公園、大正八年創業の朝ラー発祥店・マルナカ、江戸時代から続く老舗和菓子処の紅家 紅粉屋九右衛門、樹齢七百五十年の「久遠の松」が聳える大慶寺までを巡る。',
  tags: ['静岡県', '藤枝市', '藤枝駅', '朝ラー', '大慶寺'],
  style_genre: 'pastel_chalk_morning',
  eyecatch_prompt:
    'The magnificent 750-year-old Kuon-no-Matsu black pine tree spreading its wide branches in front of the wooden main hall of Daikeiji Temple in morning sunlight in Fujieda, Shizuoka, no text, no people.',
  question:
    '鰹出汁香る朝ラーと旧藤枝宿の銘菓、樹齢七百五十年の名松が息づく藤枝で、あなたが深く惹かれたのはどの風景ですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '日蓮聖人お手植えと伝わる樹齢約七百五十年の「久遠の松」が枝を広げる「大慶寺」',
      subtext:
        '旧東海道藤枝宿の旅人の目印となってきた名松を仰ぎ、七世紀半を超えて受け継がれる生命力に圧倒された。',
      badge: {
        code: 'fujieda_daikeiji_kuon_pine',
        name_ja: '久遠の松を仰ぎし者',
        subtitle_en: 'Admirer of Kuon-no-Matsu Pine',
        description:
          '大慶寺を訪ね、静岡県指定天然記念物であり日本の名松百選に選ばれた「久遠の松」に触れた証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem featuring a grand ancient Japanese black pine tree with wide spreading branches in front of a wooden temple roof, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '大正八年創業、鰹出汁香る「温」と「冷」の朝ラーメン文化を生んだ老舗「マルナカ」',
      subtext:
        '茶業の早朝文化から誕生した藤枝ならではの朝ラーを味わい、百年を超えて愛される和風出汁の滋養に満たされた。',
      badge: {
        code: 'fujieda_marunaka_asara',
        name_ja: '志太の朝ラーを極めし者',
        subtitle_en: 'Connoisseur of Fujieda Morning Ramen',
        description:
          'マルナカを訪ね、大正八年から続く藤枝発祥の朝ラーメン文化を体験した証。',
        rarity: 4,
        visual_Prompt:
          'A circular emblem depicting two ceramic bowls of clear soy-sauce dashi ramen—one steaming hot and one chilled with red pickled ginger—with morning sunlight, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '旧東海道藤枝宿で江戸時代から暖簾を守り、銘菓「長寿柿」を伝える「紅家 紅粉屋九右衛門」',
      subtext:
        '宿場町の歴史を屋号に刻む老舗和菓子処を訪ね、家康公ゆかりの逸話と手練り餡の優しい甘みに心が和んだ。',
      badge: {
        code: 'fujieda_beniya_wagashi',
        name_ja: '藤枝宿の銘菓を愛でる者',
        subtitle_en: 'Taster of Fujieda-juku Sweets',
        description:
          '紅家 紅粉屋九右衛門を訪ね、旧東海道藤枝宿に受け継がれる伝統の和菓子に触れた証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem showing traditional Japanese persimmon confections and dorayaki alongside a cup of green sencha tea, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 2,
      text: 'サッカーの街の活気あふれる「藤枝駅」から歩き、ケヤキ並木と芝生が広がる「青木中央公園」で過ごす時間',
      subtext:
        '藤色のフラッグが揺れる駅前から緑豊かな公園のベンチへ歩き、朝の穏やかな空気の中で街の日常に溶け込んだ。',
      badge: {
        code: 'fujieda_station_aoki_park',
        name_ja: '藤の街の朝風を歩む者',
        subtitle_en: 'Walker of Fujieda Morning Breeze',
        description:
          '藤枝駅から青木中央公園を巡り、サッカーと茶の街の爽やかな朝の風景に触れた証。',
        rarity: 2,
        visual_Prompt:
          'A circular emblem featuring a tree-lined park walkway and wisteria blossoms under a bright morning sky, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'fujieda_complete',
    name_ja: '藤枝の朝ラーと久遠の松を結ぶ者',
    subtitle_en: 'Master of Fujieda Heritage',
    description:
      '藤枝の5つのスポットを巡り、茶処が育んだ朝ラー文化と旧東海道藤枝宿の歴史・名松を深く体験した証。',
    rarity: 5,
    visual_Prompt:
      'A grand circular emblem framed by wisteria flowers and tea leaves, featuring the ancient Kuon-no-Matsu pine tree and a steaming bowl of morning ramen, no text, no letters.',
  },
  spots: [
    {
      order: 1,
      name: '藤枝駅',
      spot_type: '見どころ',
      address: '静岡県藤枝市前島1-1-1',
      lat: 34.849182,
      lng: 138.252038,
      radius: 40,
      description:
        'JR東海道本線の駅であり、「サッカーのまち」と「朝ラーのまち」として知られる藤枝市の玄関口（自由通路は始発〜終電）。南北自由通路や駅前広場が整備されている。',
      f7_fragment:
        'サッカーと茶の街・藤枝の活気を伝え、旧東海道藤枝宿へと旅人を誘う玄関口。',
      f7_full:
        '「藤枝駅」の藤色に彩られた開放的なデッキと爽やかな朝の空気が、朝ラーと宿場町の歴史を巡る旅の始まりを迎えてくれる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      image_prompt:
        'Wide shot of Fujieda Station north plaza and pedestrian deck adorned with wisteria-purple banners under a clear morning sky in Shizuoka, no text, no people.',
    },
    {
      order: 2,
      name: '青木中央公園',
      spot_type: '休憩',
      address: '静岡県藤枝市青木3-8-1',
      lat: 34.855125,
      lng: 138.252829,
      radius: 35,
      description:
        '藤枝駅北側の青木地区に広がる緑豊かな近隣公園（入園自由）。広々とした芝生広場や木陰のベンチが整備され、旧東海道エリアへ向かう途中の休憩に最適。',
      f7_fragment:
        'ケヤキ並木の先に緑の芝生広場と木陰のベンチが広がる、市民の憩いの公園。',
      f7_full:
        '「青木中央公園」の瑞々しい木々と開放的な芝生広場が、駅前から旧藤枝宿へと向かう散策の足取りを心地よく整えてくれる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      image_prompt:
        'Clean landscape view of the green lawn, zelkova trees, and wooden benches at Aoki Central Park in morning sunlight in Fujieda, Shizuoka, no text, no people.',
    },
    {
      order: 3,
      name: 'マルナカ',
      spot_type: '食事',
      address: '静岡県藤枝市志太3-1-24',
      lat: 34.863662,
      lng: 138.249325,
      radius: 30,
      description:
        '大正八年創業、藤枝「朝ラー」発祥の店として知られる老舗中華そば店（8:30〜13:20頃営業、日祝・第2第4土曜休）。鰹出汁香る「温」と「冷」のラーメンで名高い。',
      f7_fragment:
        '大正八年の創業以来、鰹出汁の「温」と「冷」で知られる藤枝朝ラーの老舗。',
      f7_full:
        '「マルナカ」の香り高い鰹出汁スープと凛とした佇まいが、茶処・藤枝の早朝文化が育んだ百年の味わいを届けてくれる。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      image_prompt:
        'Top-down 90-degree flat-lay of two bowls of Fujieda morning ramen—one hot soy-sauce dashi noodle bowl and one chilled ramen topped with red pickled ginger and roast pork—on a counter, no text, no people.',
    },
    {
      order: 4,
      name: '紅家 紅粉屋九右衛門',
      spot_type: '買い物',
      address: '静岡県藤枝市藤枝4-1-9',
      lat: 34.869778,
      lng: 138.252482,
      radius: 30,
      description:
        '旧東海道・藤枝宿に暖簾を掲げる江戸時代創業の老舗和菓子店（8:30〜18:00営業、水曜休）。徳川家康公ゆかりの銘菓「長寿柿」や手練り餡のどら焼きを商う。',
      f7_fragment:
        '旧東海道藤枝宿で江戸時代から暖簾を守る、銘菓「長寿柿」の老舗和菓子処。',
      f7_full:
        '「紅家 紅粉屋九右衛門」の伝統の暖簾と上品な和菓子が、旧東海道藤枝宿に息づくおもてなしの心と甘みを伝えてくれる。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      image_prompt:
        'Top-down 90-degree flat-lay of traditional Japanese Choju-gaki persimmon sweets and golden dorayaki on a ceramic plate alongside a cup of Shizuoka green tea, no text, no people.',
    },
    {
      order: 5,
      name: '大慶寺',
      spot_type: '見どころ',
      address: '静岡県藤枝市藤枝4-2-7',
      lat: 34.869909,
      lng: 138.254017,
      radius: 35,
      description:
        '鎌倉時代に日蓮聖人の縁で開かれた日蓮宗の古刹（境内参拝自由）。聖人手植えと伝わる樹齢約七百五十年の静岡県指定天然記念物「久遠の松」や相良城移築の客殿で知られる。',
      f7_fragment:
        '日蓮聖人お手植えと伝わる樹齢約七百五十年の名松「久遠の松」が聳える古刹。',
      f7_full:
        '「大慶寺」の四方に枝を広げる雄大な久遠の松と静謐な伽藍が、旧東海道藤枝宿を巡った旅を清らかな余韻で締めくくってくれる。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      image_prompt:
        'Golden hour view of the ancient Kuon-no-Matsu black pine tree with wide horizontal branches supported by wooden props in front of Daikeiji Temple in Fujieda, Shizuoka, no text, no people.',
    },
  ],
};
