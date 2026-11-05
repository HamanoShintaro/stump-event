export default {
  slug: "kizu",
  line: "JR大和路線",
  station: "木津駅",
  station_order: 144,
  area_name: "木津・機関車が眠るパン工房と十三重石塔と橋柱文殊の道",
  title: "機関車が眠るパン工房から木津駅と橋柱文殊の寺へ",
  description: "平城京・東大寺造営の木材が陸揚げされた古代の港「木津（こづ）」をルーツに持ち、現在も大和路線・奈良線・学研都市線の三路線が結節する京都府最南端の要衝・木津駅。実物のブルートレイン牽引機（EF66形電気機関車）の先頭部が店内に鎮座する天然酵母ベーカリーから、木津川の流れをモチーフにした橋上駅舎、天平の国分尼寺鎮守に始まる木津御霊神社、平重衡の最期を悼む安福寺の十三重石塔、そして古橋の柱から刻まれた文殊菩薩を伝える大智寺へと巡るルートです。",
  category: "歴史・文化",
  prefecture: "京都府",
  budget_tier: 1,
  tags: ["木津", "JR大和路線", "パン・オ・セーグル", "安福寺", "大智寺"],
  eyecatch_prompt: "A warm transparent watercolor and fountain pen sketchbook illustration of Kizu, Kyoto, showing a nostalgic blue electric locomotive nose peeking from a warm artisan bakery window, a modern wave-roofed station bridge in the middle distance, and an ancient thirteen-story stone pagoda and temple roof beside the Kizugawa river embankment. Soft afternoon light, Washi paper margins, no text, no people.",
  completion_badge: {
    name_ja: "木津湊の鉄路と橋柱文殊の祈りを識る旅人",
    subtitle_en: "Wayfarer of Kizu Rail Junction and Bridge-Pillar Monju",
    description: "パン・オ・セーグルからJR木津駅、木津御霊神社、安福寺、大智寺までを巡り歩いた証"
  },
  question: "近代の鉄路と古代・中世の木津川水運の記憶が交差するこの街で、あなたがとりわけ強く惹かれた物語はどれですか？",
  choices: [
    {
      key: "A",
      text: "実物のブルートレイン牽引機「EF66形電気機関車」の先頭車両が店内に鎮座する『パン・オ・セーグル』",
      description: "青い電気機関車の運転台のすぐ横で、天然酵母100%のライ麦パンやバゲットが香ばしく焼き上がる空間",
      badge: {
        code: "shuin_kizu_pain_au_seigle_ef66",
        name_ja: "機関車と眠る天然酵母パンを愛でる粋人",
        subtitle_en: "Lover of Blue Train Locomotive and Rye Bread",
        description: "パン・オ・セーグルでEF66形電気機関車と天然酵母パンに触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "木津川の水紋と木の温もりを大屋根に映す、南山城の鉄道ジャンクション『JR大和路線 木津駅』",
      description: "大和路線・奈良線・学研都市線の三路線が交差し、かつての木津機関区の広い構内を今に伝える橋上駅舎",
      badge: {
        code: "shuin_kizu_station_three_lines",
        name_ja: "三路線が交わる木津湊の鉄路を見つめる旅人",
        subtitle_en: "Watcher of the Three-Line Kizu Junction",
        description: "JR大和路線 木津駅で流麗な橋上駅舎と鉄道要衝の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "天平の国分尼寺鎮守に始まる『木津御霊神社』と、平重衡の最期を悼む『安福寺（哀堂）』の十三重石塔",
      description: "宮ノ裏の静かな路地で産土神の社に参拝し、隣り合う哀堂の鎌倉期の石塔に源平の哀話を聴くひと時",
      badge: {
        code: "shuin_kizu_goryo_anpukuji_pagoda",
        name_ja: "天平の産土神と平重衡の哀堂を巡る探訪者",
        subtitle_en: "Seeker of Goryo Shrine and Taira no Shigehira Pagoda",
        description: "木津御霊神社と安福寺で木津郷の信仰と十三重石塔に触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "行基が架けた泉大橋の古い橋柱を引き揚げ、文殊菩薩を刻んだと伝わる『大智寺』の山門",
      description: "木津川の堤防近くで、奈良時代の古橋の柱が鎌倉時代に知恵の仏へと生まれ変わった奇跡の物語に出会う時間",
      badge: {
        code: "shuin_kizu_daichiji_bridge_monju",
        name_ja: "古橋の柱に宿る文殊の知恵を敬う参拝者",
        subtitle_en: "Pilgrim of the Ancient Bridge-Pillar Monju",
        description: "大智寺で泉橋寺の起源と橋柱文殊菩薩の伝承に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "パン・オ・セーグル",
      spot_type: "買い物",
      description: "JR木津駅西口から南西へ徒歩3分、国道24号沿いに佇む天然酵母100%のベーカリー。店内に実物の国鉄EF66形電気機関車（EF66-49号機）の先頭部分（カットボディ）が展示されており、機関車の傍らにハード系パンや菓子パンが並ぶ（日曜・月曜定休）。",
      address: "京都府木津川市木津川原田35-7",
      prefecture: "京都府",
      city: "木津川市",
      lat: 34.734276,
      lng: 135.822626,
      clue: "JR木津駅の西口から南西へ少し歩くと、木津川原田の通り沿いに天然酵母ベーカリー『パン・オ・セーグル』の建物が見えてくる。扉を開けて店内へ足を踏み入れると、かつて寝台特急ブルートレイン「はやぶさ」などを牽引して疾走した実物の国鉄EF66形電気機関車の巨大な先頭車両が目の前に迫り、誰もが息をのむ。重厚な青い機関車のすぐ隣に並ぶ香ばしいライ麦パンやバゲットを手にとり、鉄道の街ならではの情熱に触れよう。",
      surprise: "鉄道をこよなく愛する店主が廃車解体寸前だったEF66-49号機の運転台部分を譲り受け、クレーンで据え付けた後にその周囲を囲むように店舗を建築した。",
      hook: "機関車が眠るパン屋を出たら北東へ徒歩5分。木津川のせせらぎを大屋根に映す『JR大和路線 木津駅』へ向かおう。",
      image_prompt: "Warm gouache and colored pencil partial illustration inside a charming artisan bakery in Kizu, where rows of rustic rye loaves and crusty baguettes on wooden shelves stand right beside the nostalgic deep-blue and cream metal nose and headlamp of a vintage EF66 electric locomotive. No text."
    },
    {
      name: "JR大和路線 木津駅（三路線結節点・旧木津機関区の記憶）",
      spot_type: "見どころ",
      description: "明治29年（1896年）開業、大和路線（関西本線）・奈良線・学研都市線（片町線）の三路線が交わる鉄道の要衝。平成19年（2007年）完成の橋上駅舎は、建築家・中筋修の設計により木津川の流れと木の温もりを波型の屋根で表現している。",
      address: "京都府木津川市木津池田14",
      prefecture: "京都府",
      city: "木津川市",
      lat: 34.735977,
      lng: 135.824927,
      clue: "パン・オ・セーグルから北東へ進むと、大きく波打つ流麗な屋根が印象的な『JR大和路線 木津駅』の前に出る。古代から平城京や東大寺を造営する木材の陸揚げ港「木津（こづ）」として栄え、明治二十九年の鉄道開業以降は京都・奈良・大阪・伊賀の四方向を結ぶ大ジャンクションとして発展してきた駅だ。木津川の水紋と木材の記憶を織り込んだ橋上駅舎から、三路線の列車が行き交う広い構内を眺めてみよう。",
      surprise: "蒸気機関車の時代には構内に「木津機関区」が置かれ、転車台や給炭設備が並ぶ南山城最大の鉄道基地として昼夜を問わず賑わっていた。",
      hook: "三路線が交わる駅舎を見上げたら北北東へ徒歩9分。天平の国分尼寺の鎮守に始まる『木津御霊神社』を訪ねよう。",
      image_prompt: "Architectural watercolor and fountain pen sketch of Kizu Station in Kyoto, showcasing its distinctive sweeping wave-like roof inspired by river currents and warm timber accents against a clear sky. Clean, poetic composition, no text."
    },
    {
      name: "木津御霊神社",
      spot_type: "見どころ",
      description: "天平年間に東大寺大仏殿建立の余材で建てられた国分尼寺（誓願寺）の鎮守社として左大臣・橘諸兄が創建したと伝わる古社。天乃穂日命などを祀り、秋の木津祭では布団太鼓台が巡行する木津郷の産土神。",
      address: "京都府木津川市木津宮ノ裏285",
      prefecture: "京都府",
      city: "木津川市",
      lat: 34.741068,
      lng: 135.826304,
      clue: "木津駅から旧街道の町並みを北北東へ歩くと、宮ノ裏の静かな一角に鎮座する『木津御霊神社』の石鳥居に至る。天平年間に橘諸兄が国分尼寺の鎮守として創建したと伝わる木津郷の産土神に静かに手を合わせよう。",
      surprise: "当初は白玉神社と称されたが、平安初期の貞観十八年に疫病退散を祈って神々が勧請され、江戸中期の木津川大洪水からの再建を経て御霊神社と呼ばれるようになった。",
      hook: "産土神の社に参拝したら西南西へ徒歩2分。すぐ隣に鎌倉時代の十三重石塔が立つ『安福寺（哀堂）』へ進もう。",
      image_prompt: "Transparent watercolor and ink illustration of a quiet historic Shinto shrine precinct in Kizu, Kyoto, featuring a stone torii gate, moss-covered lanterns, and ancient trees filtering the afternoon light. Serene atmosphere, no text."
    },
    {
      name: "安福寺（哀堂・平重衡十三重石塔）",
      spot_type: "見どころ",
      description: "文治元年（1185年）に木津川畔で処刑された平清盛の五男・平重衡の菩提を弔うため、土地の人々がその最期を哀れんで建立した寺院（別名・哀堂）。境内に鎌倉時代後期の端正な「平重衡供養十三重石塔」が立つ（境内散策自由）。",
      address: "京都府木津川市木津宮ノ裏37",
      prefecture: "京都府",
      city: "木津川市",
      lat: 34.740685,
      lng: 135.825293,
      clue: "木津御霊神社から西南西へわずか数十メートル歩くと、白壁の塀越しに端正な石塔がそびえる『安福寺（哀堂・平重衡十三重石塔）』の門前に出る。治承四年の南都焼討の大将として東大寺などを焼き、源平合戦の末に捕らえられてこの木津川畔で斬首された平清盛の五男・平重衡の最期を、土地の人々が深く哀れんで建てたことから「哀堂（あいどう）」と呼ばれてきた。鎌倉時代後期の美しい十三重石塔を見上げ、八百余年前の祈りに耳を澄まそう。",
      surprise: "『平家物語』には、重衡が処刑の直前にこの地の阿弥陀如来像の御手に五色の糸を結び、その糸を握りしめて念仏を唱えながら潔く最期を遂げたと記されている。",
      hook: "哀堂の十三重石塔に手を合わせたら西へ徒歩5分。古代の橋柱から刻まれた文殊菩薩を伝える『大智寺』で散策を結ぼう。",
      image_prompt: "Sumi-ink and delicate mineral wash (tansai) illustration of a weathered Kamakura-period thirteen-story stone pagoda standing quietly inside the small courtyard of Anpukuji Temple in Kizu, surrounded by white plaster walls and autumn foliage. Poetic and contemplative, no text."
    },
    {
      name: "大智寺（橋柱文殊菩薩・泉橋寺の記憶）",
      spot_type: "見どころ",
      description: "天平12年（740年）に行基が木津川に架けた「泉大橋」と「泉橋寺」を起源とする真言律宗の古刹。鎌倉時代に西大寺・叡尊の弟子である慈真和尚が、川底から引き揚げた泉大橋の古い橋柱から本尊「文殊菩薩坐像（重要文化財）」を刻んで再興した（堂内拝観は要予約、山門・境内参拝可）。",
      address: "京都府木津川市木津雲村41-1",
      prefecture: "京都府",
      city: "木津川市",
      lat: 34.740803,
      lng: 135.822018,
      clue: "安福寺から西へ進み、木津川の堤防が近づく雲村の路地へ入ると、天平十二年に行基菩薩が木津川に架けた「泉大橋」の守護寺院・泉橋寺をルーツに持つ古刹『大智寺』の山門に行き着く。鎌倉時代、西大寺の興正菩薩叡尊の弟子・慈真和尚が、洪水で流されて川底に眠っていた泉大橋の古い橋柱（橋脚の柱）を引き揚げ、その霊木から重要文化財の「文殊菩薩坐像」を彫り出したと伝わる。千三百年の水運と旅路を見守ってきた山門の前で歩みを結ぼう。",
      surprise: "奈良時代に都と平城京を結んだ日本最古級の橋脚が数百年の時を経て川底から蘇り、人々を導く知恵の仏へと姿を変えたことから古くは「橋柱寺」とも呼ばれた。",
      hook: "",
      image_prompt: "Serene transparent watercolor and fountain pen illustration of the historic wooden gate and tiled roof of Daichiji Temple in Kizu near the river embankment, with a subtle artistic motif of ancient river timber and flowing water currents in the foreground. Unpainted Washi margins, no text."
    }
  ]
};
