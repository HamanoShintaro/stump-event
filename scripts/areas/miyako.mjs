export default {
  slug: 'miyako',
  station_order: 625,
  station: '宮古',
  line: 'JR山田線・三陸鉄道リアス線',
  area_name: '宮古・魚菜市場と三陸の玄関口',
  prefecture: '岩手県',
  municipality: '宮古市',
  category: '海とグルメ',
  budget_tier: 2,
  tags: ['岩手県', '宮古市', '宮古駅', '魚菜市場', '瓶ドン'],
  style_genre: 'pictorial_isometric_map',
  title: '三陸・宮古の市場と海の恵みを歩く',
  description:
    '三陸鉄道リアス線とJR山田線が結ぶ宮古駅から、市民の台所「宮古市魚菜市場」と老舗「小林餅店」、希少なヤギミルクスイーツの人気洋菓子店を経て、駅前の老舗寿司店「蛇の目本店」と高台の古社「横山八幡宮」へと至る港町散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Miyako port town in Iwate showing Miyako train station, lively covered fish and vegetable market, historic mochi shop, charming pastry shop, traditional seafood sushi shop and hillside Shinto shrine overlooking Sanriku Bay, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '三陸の海の恵みと市民の台所、そして高台の社が繋がる宮古を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「宮古市魚菜市場」の賑わう通りで、三陸の魚介と地元野菜の活気に触れた瞬間',
      subtext:
        '朝から開かれる市民の台所で交わされる威勢の良い声と季節の魚介に心が躍った。',
      badge: {
        code: 'miyako_gyosai',
        name_ja: '三陸の台所・宮古魚菜市場を巡りし者',
        subtitle_en: 'Explorer of Miyako Market',
        description:
          '宮古市魚菜市場を訪ね、三陸の魚介や地元産品が並ぶ市民の台所の活気に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a vibrant covered coastal market stall with fresh silver fish, sea urchins and wooden crates, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「パティスリー レ・ド・シェーブル」で、珍しいヤギミルクのスイーツに出会った瞬間',
      subtext:
        '三陸の自然が育む優しいミルクの風味と可愛らしい焼き菓子が、街歩きに彩りを添えた。',
      badge: {
        code: 'miyako_chevre',
        name_ja: '宮古・ヤギミルクの洋菓子を知る者',
        subtitle_en: 'Guest of Miyako Patisserie',
        description:
          'パティスリー レ・ド・シェーブルを訪ね、希少なヤギミルクのスイーツを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a creamy white soft-serve ice cream cone and artisan tin cookies, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「蛇の目本店」で、三陸の旬を詰めた名物・瓶ドンや握り寿司を味わった瞬間',
      subtext:
        '駅を出てすぐの老舗でいただいた海の幸の鮮度と彩りに、三陸の豊かさを実感した。',
      badge: {
        code: 'miyako_janome',
        name_ja: '宮古駅前・三陸の旬を味わいし者',
        subtitle_en: 'Taster of Miyako Seafood',
        description:
          '蛇の目本店を訪ね、宮古駅前の老舗で三陸の新鮮な海の幸を堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a colorful Japanese seafood rice bowl served in a small glass jar beside nigiri sushi, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「横山八幡宮」の高台の境内から、宮古の街並みと海の気配を静かに見渡した瞬間',
      subtext:
        '長い石段を登った先にある町の総鎮守で、海とともに歩む宮古の静かな祈りに触れた。',
      badge: {
        code: 'miyako_yokoyama',
        name_ja: '宮古・横山八幡宮の高台を拝みし者',
        subtitle_en: 'Visitor of Yokoyama Shrine',
        description:
          '横山八幡宮を訪ね、宮古の街を見守る高台の由緒ある社殿に参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a wooden Shinto shrine sanctuary atop stone steps overlooking a coastal harbor town, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'miyako_complete',
    name_ja: '三陸・宮古の魚菜市場と海の恵みを巡る旅人',
    subtitle_en: 'Walker of Miyako Port Town',
    description:
      '宮古市魚菜市場から小林餅店、レ・ド・シェーブル、蛇の目本店、横山八幡宮までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining fresh Sanriku ocean waves, a coastal market lantern and a hillside Shinto torii gate, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '宮古市魚菜市場',
      spot_type: '買い物',
      description:
        '宮古市民の台所として親しまれる活気あふれる市場。三陸の新鮮な魚介や干物、地元農家の採れたて野菜、総菜などが並ぶ。営業時間6:30〜17:30、水曜定休。',
      address: '岩手県宮古市五月町1-1',
      prefecture: '岩手県',
      municipality: '宮古市',
      lat: 39.646362,
      lng: 141.945953,
      clue: 'JR・三陸鉄道の宮古駅から北へ歩き、大きな屋根の下に活気が満ちる「宮古市魚菜市場」へ踏み入ろう（6:30〜17:30、水曜定休）。宮古の台所として地元の人々が日常的に足を運ぶ市場で、三陸沿岸で水揚げされた新鮮な魚介類や香り高い海藻、季節の野菜や手づくりのお惣菜まで所狭しと並ぶ。威勢の良い挨拶が飛び交う通路を歩きながら、三陸の暮らしに根付いた豊かな食の風景をまずはじっくり眺めたい。',
      surprise:
        '観光客向けの華やかな土産物市場とはひと味違い、地元の人々の日々の食卓を支える生活感と温かな人情がそのまま息づいている。季節ごとの魚や珍しい海藻を眺めながら歩くだけで、三陸の豊かな自然のサイクルが肌で感じられる魅力的な市場といえる。',
      hook: '市場を後にしたら、南南東へ徒歩13分の小林餅店へ向かおう。',
      f7_fragment: '三陸の旬の魚介と山の恵みが揃う、宮古市民に愛される活気ある市場。',
      f7_full: '「宮古市魚菜市場」の賑わう通路を巡り、三陸の海の幸と地元の暮らしが息づく温かな台所の風景にじっくり深く触れた。',
      image_prompt:
        'Bustling Japanese coastal indoor market of Miyako Gyosai Ichiba displaying fresh silver fish on ice, kelp bundles and seasonal mountain vegetables, no text, no people.',
    },
    {
      name: '小林餅店',
      spot_type: '買い物',
      description:
        '大通に店を構え早朝から営業する昔ながらの餅・和菓子店。つきたての柔らかな大福や赤飯、素朴な餅菓子が地元の人々に愛される。営業時間4:30〜14:00、日曜定休（不定休あり）。',
      address: '岩手県宮古市大通3-5-4',
      prefecture: '岩手県',
      municipality: '宮古市',
      lat: 39.639627,
      lng: 141.949897,
      clue: '魚菜市場から南南東へ徒歩13分、大通の商店街に暖簾を掲げる老舗「小林餅店」に立ち寄ろう（4:30〜14:00、日曜定休）。早朝から地元の暮らしに寄り添う餅と和菓子の名店で、昔ながらの製法で仕上げるつきたての柔らかな大福や、あんこ・胡麻を合わせた素朴なお餅が毎朝店頭に並ぶ。余計なものを加えない誠実な味わいを確かめながら、町の歴史とともに歩んできた商店街の穏やかな空気を味わいたい。',
      surprise:
        '朝の早い時間から地元の人々が日常のおやつや手土産を求めて訪れる光景に、町に深く根付いた老舗の信頼が表れている。手に持っただけで伝わるお餅の柔らかさと優しい甘みが、港町歩きの途中にほっとする安心感を与えてくれる素敵な老舗の餅店だ。',
      hook: '餅店を出たら、西北西へ徒歩5分のパティスリー レ・ド・シェーブルへ向かおう。',
      f7_fragment: '早朝からつきたての大福や餅菓子が並ぶ、大通の素朴で温かな老舗餅店。',
      f7_full: '大通の老舗「小林餅店」を訪ね、昔ながらの製法で守られてきた手づくり大福と餅菓子の優しい魅力に深く触れた。',
      image_prompt:
        'Traditional Japanese mochi confectionery shop wooden tray displaying fresh daifuku mochi, sesame rice cakes and red bean sweets, no text, no people.',
    },
    {
      name: 'パティスリー レ・ド・シェーブル',
      spot_type: '休憩',
      description:
        '宮古市のしあわせ乳業による希少な「ヤギミルク」を使った洋菓子専門店。さっぱりとコクのあるソフトクリームやクッキー缶が人気。営業時間10:30〜19:00（売切次第終了）、不定休。',
      address: '岩手県宮古市大通4-5-10',
      prefecture: '岩手県',
      municipality: '宮古市',
      lat: 39.641087,
      lng: 141.947039,
      clue: '小林餅店から西北西へ徒歩5分、「パティスリー レ・ド・シェーブル」へ立ち寄ろう（10:30〜19:00、不定休）。希少な国産ヤギミルクの洋菓子で一息つきたい。',
      surprise:
        'ヤギミルクと聞くとクセがあるように想像しがちだが、丁寧に育てられた牧場のミルクは驚くほど後味がすっきりとして上品なコクがある。爽やかなスイーツで口の中を整えながら、駅前の老舗へ向かう街歩きの楽しさが心地よく膨らんでいく素敵な一軒だ。',
      hook: '甘い余韻を楽しんだら、西南西へ徒歩1分の蛇の目本店で三陸の海の幸を味わおう。',
      f7_fragment: '宮古生まれの希少なヤギミルクを使った、優しく上品な洋菓子専門店。',
      f7_full: '「パティスリー レ・ド・シェーブル」で希少なヤギミルクのスイーツを味わい、宮古の新たな特産品の魅力に出会った。',
      image_prompt:
        'Charming boutique Japanese patisserie counter displaying pastel goat-milk cookie tins, creamy white soft-serve ice cream and delicate pastries, no text, no people.',
    },
    {
      name: '蛇の目本店',
      spot_type: '食事',
      description:
        'JR・三陸鉄道宮古駅の目の前に構える老舗の寿司・海鮮料理店。三陸の旬の魚介を牛乳瓶に詰めたご当地グルメ「瓶ドン」や寿司が人気。営業時間10:00〜20:00、水曜定休。',
      address: '岩手県宮古市栄町2-8',
      prefecture: '岩手県',
      municipality: '宮古市',
      lat: 39.640908,
      lng: 141.946611,
      clue: '洋菓子店から西南西へ徒歩1分、JR・三陸鉄道の駅前に構える老舗「蛇の目本店」で三陸の旬を味わおう（10:00〜20:00、水曜休）。名物は、牛乳瓶に新鮮なウニやイクラ、メカブや旬の刺身を彩りよく贅沢に詰め込んだ宮古ならではの「瓶ドン」や職人の握り寿司だ。炊きたてのご飯の上へ自分好みに盛り付けて頬張れば、三陸の海の豊かさが口いっぱいに広がり、旅の幸福感がぐっと深まるだろう。',
      surprise:
        '駅を降りてすぐの場所で、これほど新鮮で遊び心あふれるご当地海鮮に出会えるのが宮古の旅の醍醐味といえる。小瓶からとろりと溢れる魚介の輝きと丁寧な仕事ぶりに、三陸の豊かな海の底力を存分に感じさせてくれる素晴らしい一軒だ。',
      hook: '海の幸でお腹を満たしたら、南西へ徒歩6分の横山八幡宮へ登り旅を結ぼう。',
      f7_fragment: '宮古駅目の前で三陸の旬と名物「瓶ドン」を味わう、老舗の海鮮寿司処。',
      f7_full: '駅前の老舗「蛇の目本店」で三陸の旬が詰まった名物・瓶ドンを堪能し、港町・宮古ならではの海の恵みを満喫した。',
      image_prompt:
        'Inviting Japanese sushi counter serving a glass milk bottle filled with colorful fresh sea urchin, salmon roe and sashimi beside a steaming bowl of rice, no text, no people.',
    },
    {
      name: '横山八幡宮',
      spot_type: '見どころ',
      description:
        '宮古市街を一望する高台に鎮座し、源義経ゆかりの北行伝承も持つ宮古の古社。長い石段の上には荘厳な社殿が佇む。参拝自由・無休。',
      address: '岩手県宮古市宮町2-5-1',
      prefecture: '岩手県',
      municipality: '宮古市',
      lat: 39.638062,
      lng: 141.943816,
      clue: '蛇の目本店から南西へ徒歩6分、街を見守るようにそびえる高台の「横山八幡宮」で散策を締めくくろう（参拝自由・無休）。古くから宮古の総鎮守として崇敬を集めてきた由緒ある古社で、緑の木立に囲まれた長い石段を登りきると、落ち着いた拝殿とともに宮古の街並みと海の気配を見晴らすことができる。市場や商店街、海の幸を巡ってきた三陸の旅の余韻を胸に、静かに手を合わせて歩みをこれからも結びたい。',
      surprise:
        '市街地のすぐそばにありながら、石段を登るにつれて街の音が遠のき、海からの爽やかな風と樹木の香りに包まれる感覚が心地よい。高台から宮古のまちを見下ろしていると、この地の人々が海とともに歩み続けてきた力強さと優しさが胸に迫ってくる古社だ。',
      hook: '',
      f7_fragment: '宮古の街並みと海を高台から見守り続ける、由緒ある鎮守の八幡宮。',
      f7_full: '高台に鎮座する「横山八幡宮」の石段を登って参拝し、宮古の街と三陸の気配を見渡しながら港町の散策を清らかに結んだ。',
      image_prompt:
        'Serene hilltop Shinto shrine of Yokoyama Hachimangu with stone staircase, weathered wooden sanctuary and view toward Miyako harbor town, no text, no people.',
    },
  ],
};
