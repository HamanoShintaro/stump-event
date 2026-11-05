export default {
  slug: "takachaya",
  line: "JR紀勢本線",
  station: "高茶屋駅",
  station_order: 139,
  area_name: "高茶屋・伊勢街道の茶屋町と炭火うなぎ",
  title: "参宮鉄道の木造駅から高茶屋の社と炭火うなぎへ",
  description: "江戸時代にお伊勢参りの旅人が高台の茶屋で足を休めたことからその名がついたJR紀勢本線・高茶屋駅周辺を、南西から北東へと歩くルートです。明治26年の参宮鉄道開業の歴史を継ぐ高茶屋駅と、注文ごとに焼き上げるみたらし団子・葛プリンの御菓子司 正和堂から、伊勢街道の面影を残す高茶屋神社（粟嶋さん）、和食・洋食の定食が揃う津高茶屋食堂を経て、津の炭火焼きうなぎの名店・うなぎ のぐちへと向かいます。",
  category: "歴史・文化",
  prefecture: "三重県",
  budget_tier: 2,
  tags: ["高茶屋", "JR紀勢本線", "伊勢街道", "津のうなぎ", "みたらし団子"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of Takachaya along the old Ise Kaido in Tsu, Mie. A historic wooden railway station, freshly grilled mitarashi dango skewers brushed with tamari soy glaze, a hillside Shinto shrine under pine trees, and charcoal-grilled Tsu unagi eel. Loose expressive ink linework, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "高茶屋の伊勢街道と炭火の香をたどる旅人",
    subtitle_en: "Wayfarer of Takachaya Ise Kaido and Charcoal Unagi",
    description: "御菓子司 正和堂からJR紀勢本線 高茶屋駅、高茶屋神社、まいどおおきに食堂 津高茶屋食堂、うなぎ のぐちまでを巡り歩いた証"
  },
  question: "お伊勢参りの旅人が息をついた高茶屋の台地で、あなたの五感に心地よく響いたのはどのひと時ですか？",
  choices: [
    {
      key: "A",
      text: "『御菓子司 正和堂』で注文後に焼き上げられる、生引たまり醤油のみたらし団子と吉野本葛の葛プリン",
      description: "高茶屋駅前の小さな和菓子店で、香ばしく焦げた醤油ダレの匂いに包まれながら焼き上がりを待つ時間",
      badge: {
        code: "shuin_takachaya_showado_mitarashi",
        name_ja: "たまり醤油の焼団子と葛プリンを愛でる粋人",
        subtitle_en: "Connoisseur of Tamari Mitarashi Dango and Kuzu Pudding",
        description: "御菓子司 正和堂で高茶屋の手作り和菓子を味わった証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "明治二十六年開業の『JR紀勢本線 高茶屋駅』に残る、瓦屋根の木造駅舎と広い構内の記憶",
      description: "参宮鉄道の歴史と、かつての専用線や貨物輸送の面影をとどめる広いホームを眺めるひと時",
      badge: {
        code: "shuin_takachaya_sangu_railway_station",
        name_ja: "参宮鉄道の木造駅舎と鉄路の記憶を識る旅人",
        subtitle_en: "Chronicler of the 1893 Sangu Railway Wooden Station",
        description: "JR紀勢本線 高茶屋駅で明治期から続く鉄路の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "地元で「たかぢゃや」と呼び慣わされる台地に鎮座する、『高茶屋神社（粟嶋さん）』の静かな社叢",
      description: "伊勢街道の茶屋町の記憶を守り継ぐ境内で、粟島信仰と村の歴史に触れる穏やかな時間",
      badge: {
        code: "shuin_takachaya_shrine_awashima",
        name_ja: "伊勢街道の茶屋台地と粟嶋さんを敬う参拝者",
        subtitle_en: "Pilgrim of Takachaya Shrine on the Ise Kaido Plateau",
        description: "高茶屋神社で伊勢街道と高茶屋台地の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "『津高茶屋食堂』の気取らない一膳から、炭火で香ばしく焼き上げる『うなぎ のぐち』のうな丼へ続く道",
      description: "日本有数のうなぎ消費地・津市ならではのパリッと香ばしい炭火焼きうなぎを堪能する瞬間",
      badge: {
        code: "shuin_takachaya_noguchi_tsu_unagi",
        name_ja: "津の炭火地焼きうなぎを極める美食家",
        subtitle_en: "Gourmet of Tsu's Crisp Charcoal-Grilled Unagi",
        description: "うなぎ のぐちで津市伝統のうなぎ文化に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "御菓子司 正和堂",
      spot_type: "買い物",
      description: "JR高茶屋駅からすぐの場所に暖簾を掲げる和洋菓子店。注文を受けてから焼き上げる伊勢・糀屋の生引たまり醤油を使った「みたらしだんご」や、吉野本葛を用いた「葛プリン」「珈琲わらび」で知られる。",
      address: "三重県津市高茶屋1丁目6-5",
      prefecture: "三重県",
      city: "津市",
      lat: 34.666881,
      lng: 136.511913,
      clue: "JR高茶屋駅のすぐ西側、住宅街の角に甘い香りと香ばしい醤油の匂いを漂わせるのが『御菓子司 正和堂（しょうわどう）』だ。名物の「みたらしだんご」は注文を受けてから一本ずつ丁寧に焼き上げ、伊勢の老舗・糀屋の生引（きびき）たまり醤油を使ったコク深い甘辛ダレをたっぷりと絡めてくれる。吉野本葛と牛乳・卵でなめらかに仕立てた「葛プリン」や季節の和菓子とともに、伊勢街道の茶屋町らしい一服を手に入れよう。",
      surprise: "みたらし団子のタレには一般的な濃口醤油ではなく、伊勢地方のたまり醤油の中でも加熱殺菌前の旨味が濃い「生引たまり」が使われており、香ばしい焦げ目と深いコクが際立つ。",
      hook: "焼きたてのみたらし団子と葛プリンを手に入れたら北東へ徒歩1分。明治二十六年開業の歴史を刻む『JR紀勢本線 高茶屋駅』へ向かおう。",
      image_prompt: "Gouache and colored pencil food illustration on cream paper. Freshly grilled mitarashi dango rice-dumpling skewers coated in glossy dark tamari soy glaze alongside a glass cup of smooth white kuzu pudding on a wooden counter at a local wagashi shop in Mie. Partial framing, no people, no text."
    },
    {
      name: "JR紀勢本線 高茶屋駅",
      spot_type: "見どころ",
      description: "明治26年（1893年）12月31日に参宮鉄道の駅として開業した歴史ある駅。風格ある瓦葺きの木造駅舎と広い2面3線の構内が、かつてのお伊勢参り鉄道と戦時・戦後の貨物輸送の歴史を今に伝えている。",
      address: "三重県津市高茶屋1丁目8",
      prefecture: "三重県",
      city: "津市",
      lat: 34.667271,
      lng: 136.512583,
      clue: "正和堂からすぐ北東に出ると、端正な瓦屋根を頂いた木造駅舎が印象的な『JR紀勢本線 高茶屋駅』の前に立つ。明治二十六年の大晦日、お伊勢参りの旅客を運ぶ参宮鉄道が津から宮川まで延伸した際に開業した、百三十年を超える歴史を持つ駅だ。無人駅となった今もゆったりと広がる二面三線の構内と跨線橋を眺めながら、数えきれない参宮客と時代のうねりを見送ってきた古い木造駅舎の佇まいを味わおう。",
      surprise: "駅名は清音の「たかちゃや」と読むが、地元の町名や旧・安濃郡高茶屋村の伝統的な呼び名は濁音の「たかぢゃや」であり、江戸時代に伊勢街道の高台に旅人向けの茶屋が並んでいたことに由来する。",
      hook: "明治期からの歴史を継ぐ木造駅舎を見上げたら北北西へ徒歩9分。茶屋台地の鎮守『高茶屋神社』へ参拝しよう。",
      image_prompt: "Cinematic watercolor background art of JR Takachaya Station on the Kisei Main Line in Tsu, Mie. A classic tiled-roof wooden station building with a vintage station nameplate, wide railway tracks, and an overpass bridge under a clear sky, wide unpainted paper margins, no people, no text."
    },
    {
      name: "高茶屋神社",
      spot_type: "見どころ",
      description: "高茶屋1丁目の高台に鎮座する地域の氏神。明治末期に村内の諸社と粟島社を合祀して「高茶屋神社」と改称され、地元では今も「粟嶋（あわしま）さん」の愛称で親しまれている。",
      address: "三重県津市高茶屋1丁目29-27",
      prefecture: "三重県",
      city: "津市",
      lat: 34.671982,
      lng: 136.510382,
      clue: "高茶屋駅から北北西へなだらかな台地の道を歩いていくと、高茶屋小学校の隣に鎮守の杜を抱く『高茶屋神社』の石鳥居が現れる。明治四十一年に地域の神々と粟島社を合祀して現在の社名となったこの神社は、地元の人々から今も親しみを込めて「粟嶋（あわしま）さん」と呼ばれ深く慕われている。かつてお伊勢参りの旅人が行き交った高茶屋台地の風に吹かれながら、清らかな参道を進んで手を合わせよう。",
      surprise: "合祀される以前からこの地で篤く信仰されていた少彦名命（粟島神）の記憶が色濃く残っており、婦人病平癒や安産・子育ての神様として遠方からも参拝者が訪れた歴史を持つ。",
      hook: "高茶屋台地の鎮守に参拝したら東北東へ徒歩10分。釜炊きごはんと手作りおかずが並ぶ『まいどおおきに食堂 津高茶屋食堂』へ進もう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of Takachaya Shrine on a quiet plateau in Tsu, Mie. A stone torii gate, granite lanterns, and a wooden worship hall shaded by pine and camphor trees, soft dappled light, wide unpainted paper margins, no people, no text."
    },
    {
      name: "まいどおおきに食堂 津高茶屋食堂",
      spot_type: "休憩",
      description: "高茶屋小森町の国道165号近くに店を構える大衆食堂。店内の羽釜で炊き上げるごはんと、注文ごとに巻き上げる玉子焼きや炭火焼きの魚など、素朴な家庭の味を一皿ずつ選べる。",
      address: "三重県津市高茶屋小森町412-2",
      prefecture: "三重県",
      city: "津市",
      lat: 34.674502,
      lng: 136.516196,
      clue: "高茶屋神社から東北東へ進むと『まいどおおきに食堂 津高茶屋食堂』に出る。おくどさんの羽釜ごはんと焼き立ての出汁巻き玉子の香りに包まれながら、温かいお茶でひと息つこう。",
      surprise: "高茶屋周辺は明治期から井村屋グループの創業拠点や工場群が集まる職住近接の街として発展し、朝から夜まで働く人々を支える食堂文化が根づいている。",
      hook: "温かいお茶と玉子焼きでひと息ついたら東へ徒歩4分。津市ならではの炭火焼きうなぎを供する『うなぎ のぐち』で散策を結ぼう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of a warm Japanese teishoku dining counter. A freshly rolled golden dashimaki tamago omelet on a ceramic plate, a steaming iron hagama rice pot in the background, and a cup of green tea, unpainted margins, no people, no text."
    },
    {
      name: "うなぎ のぐち",
      spot_type: "食事",
      description: "高茶屋小森町に暖簾を掲げるうなぎ料理専門店。人口あたりのうなぎ料理店数が日本有数の「うなぎの街・津市」において、厳選したうなぎを備長炭で皮目までパリッと香ばしく焼き上げるうな丼やひつまぶしが評判。",
      address: "三重県津市高茶屋小森町433-6",
      prefecture: "三重県",
      city: "津市",
      lat: 34.674291,
      lng: 136.518737,
      clue: "津高茶屋食堂から東へ少し歩くと、落ち着いた和モダンの外観から炭火の香ばしい匂いが立ち上る『うなぎ のぐち』に到着する。実は三重県津市は、市民一人あたりのうなぎ消費量・店舗密度で全国屈指を誇る「うなぎの聖地」だ。蒸さずに備長炭の強い火力で一気に焼き上げることで、表面はサクッと香ばしく中はふっくらジューシーに仕上げられた津のうな丼やひつまぶしを味わい、高茶屋台地の歩みを結ぼう。",
      surprise: "津市のうなぎ文化は明治時代から日常のスタミナ食として市民に深く浸透しており、うなぎの枚数（切れ数）によって「並・中・上」を選ぶ独自の注文スタイルが街じゅうの専門店で受け継がれている。",
      hook: "",
      image_prompt: "Transparent watercolor and fountain pen food and architecture illustration of an unagi specialty restaurant in Tsu, Mie. A generous porcelain bowl of Tsu-style charcoal-grilled unagi rice bowl (unadon) with glossy tare sauce, pickles, and kimosui clear soup on a wooden table beside a stylish noren curtain. Wide unpainted Washi paper margins, no people, no text."
    }
  ]
};
