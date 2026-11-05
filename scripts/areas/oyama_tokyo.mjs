export default {
  slug: "oyama_tokyo",
  line: "東武東上本線",
  station: "大山駅",
  station_order: 136,
  area_name: "大山・ハッピーロードと川越街道お福地蔵の道",
  title: "アーケードの甘味から川越街道のお福地蔵と轡神社へ",
  description: "相模国の霊峰・大山阿夫利神社を遥拝した富士山大山道にその名を負う東武東上線・大山駅から、アーケードの賑わいと旧川越街道の信仰の記憶をたどるルートです。改札すぐのハッピーロード大山商店街で昭和7年創業の和菓子店・岡田屋や名物大学いもの松屋甘味店、北海道産そば粉の蕎麦 大山庵に立ち寄り、江戸時代の女性行者・お福さんの徳を伝える大山福地蔵尊を経て、源義経と徳川家康の馬の轡伝説が息づく轡神社へと向かいます。",
  category: "下町・商店街",
  prefecture: "東京都",
  budget_tier: 2,
  tags: ["大山", "東武東上線", "ハッピーロード大山", "川越街道", "お福地蔵"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of Oyama in Itabashi, Tokyo. A lively retro covered shopping arcade entrance leading toward a quiet stone Jizo shrine with red bibs and a historic Shinto shrine with a horse-bit crest under ginkgo trees. Loose expressive ink linework, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "大山道の商いと古道の祈りを継ぐ旅人",
    subtitle_en: "Wayfarer of Oyama Arcade and Ancient Kaido Faith",
    description: "御菓子処 岡田屋から松屋甘味店、蕎麦 大山庵、大山福地蔵尊、轡神社までを巡り歩いた証"
  },
  question: "大山のアーケードの甘味と旧街道の社をたどる歩みのなかで、あなたの記憶の奥に鮮やかに刻まれた場面はどれですか？",
  choices: [
    {
      key: "A",
      text: "昭和七年創業の『御菓子処 岡田屋』に並ぶ、湯気立つ山菜おこわと手作りの豆大福",
      description: "踏切脇のアーケード入口で九十余年続く老舗和菓子店のガラスケースを覗き込む時間",
      badge: {
        code: "shuin_oyama_tokyo_okadaya_wagashi",
        name_ja: "九十余年の餅菓子とおこわを愛でる粋人",
        subtitle_en: "Connoisseur of Showa Wagashi and Okowa",
        description: "御菓子処 岡田屋でハッピーロード大山の老舗の和菓子に触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "『松屋甘味店』の艶やかな蜜をまとった大学いもと、昭和の面影を残す甘味処の佇まい",
      description: "お芋一筋六十余年の技が光る大学いもと、あんみつやみつ豆が並ぶ店頭の温かな空気",
      badge: {
        code: "shuin_oyama_tokyo_matsuya_daigakuimo",
        name_ja: "琥珀色の蜜芋と下町甘味を味わう旅人",
        subtitle_en: "Taster of Glazed Sweet Potato and Retro Kanmi",
        description: "松屋甘味店で商店街名物の大学いもと甘味文化に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "『蕎麦 大山庵』の湯気と出汁の香りから、旅人と馬を救った『大山福地蔵尊』の赤い前垂れへ続く道",
      description: "町の蕎麦屋で北海道産そば粉の一杯を味わい、川越街道の辻でお福さんと身洗い地蔵に手を合わせるひと時",
      badge: {
        code: "shuin_oyama_tokyo_ofukujizo_kaido",
        name_ja: "街道の蕎麦香とお福地蔵の慈悲を識る探訪者",
        subtitle_en: "Seeker of Kaido Soba and Ofuku Jizo Compassion",
        description: "蕎麦 大山庵と大山福地蔵尊で大山町の暮らしと街道信仰に触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "源義経と徳川家康の馬の轡伝説を秘め、小さな絵馬と鉄の轡が奉納される『轡神社』の杜",
      description: "旧中丸村の鎮守の森で、名馬の口輪に由来する社号と百日咳平癒の民間信仰に出会う瞬間",
      badge: {
        code: "shuin_oyama_tokyo_kutsuwa_shrine_lore",
        name_ja: "名馬の轡伝説と鎮守の杜を敬う参拝者",
        subtitle_en: "Pilgrim of the Horse-Bit Shrine Legend",
        description: "轡神社で源義経・徳川家康ゆかりの伝承と古社の歴史に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "御菓子処 岡田屋",
      spot_type: "買い物",
      description: "昭和7年（1932年）創業、大山駅南口すぐのハッピーロード大山商店街で90年以上にわたり営業する老舗和菓子店。自家製の豆大福や団子、どら焼きのほか、店頭に並ぶ山菜おこわや赤飯が地元客に親しまれている。",
      address: "東京都板橋区大山町6-1",
      prefecture: "東京都",
      city: "板橋区",
      lat: 35.748828,
      lng: 139.701611,
      clue: "東武東上線・大山駅の南口を出てハッピーロード大山商店街のアーケードへ踏み出すと、すぐ左手に昭和七年創業の『御菓子処 岡田屋』が暖簾を掲げている。ガラスケースには朝つきの餅で包む豆大福や焼き団子、栗どら焼きが並び、その隣ではせいろで蒸し上げた山菜おこわや赤飯が湯気と醤油の香ばしい匂いを漂わせる。相模の大山詣でへと向かう古道から名づけられたこの街で、九十余年にわたり人々の暮らしの節目を彩ってきた老舗の店頭を覗いてみよう。",
      surprise: "昭和六年に東武東上線の大山駅が開業した翌年に創業しており、ハッピーロードのアーケードが整備されるはるか以前から駅前の移り変わりを見守り続けてきた。",
      hook: "老舗の和菓子とおこわを手に入れたら西へ徒歩1分。同じアーケード内で名物の大学いもを商う『松屋甘味店』へ向かおう。",
      image_prompt: "Gouache and colored pencil architectural illustration on textured cream paper. Partial close-up of a traditional Japanese wagashi shop counter inside a retro shopping arcade in Oyama, Tokyo, displaying wooden trays of mame-daifuku, dango skewers, and steamed mountain-vegetable okowa rice. Warm nostalgic lighting, unpainted margins, no people, no text."
    },
    {
      name: "松屋甘味店",
      spot_type: "休憩",
      description: "ハッピーロード大山商店街で65年以上にわたり親しまれる甘味処。秘伝の蜜をたっぷり絡めた看板商品の「大学いも」をはじめ、あんみつ、みつ豆、ところてんなどを店頭販売と店内喫茶で提供している。",
      address: "東京都板橋区大山町6-8",
      prefecture: "東京都",
      city: "板橋区",
      lat: 35.748876,
      lng: 139.701033,
      clue: "岡田屋からアーケードを西へわずか数十メートル進むと、甘い蜜の香りとともに『松屋甘味店』の赤い看板が見えてくる。店頭の大皿に盛られた名物の大学いもは、厳選したさつま芋をじっくり揚げて琥珀色の蜜をまとわせた一品で、外はカリッと中はホクホクとした食感が六十余年にわたり愛されてきた。奥の喫茶席で寒天から手作りのあんみつやみつ豆を味わうもよく、包み紙に詰めてもらった大学いもを街歩きの供にするのも楽しい。",
      surprise: "「お芋一筋」を掲げる大学いもは季節ごとに最も蜜と相性のよい産地のさつま芋を選りすぐっており、冷めても蜜が固まりにくく芋本来の甘みが引き立つよう仕上げられている。",
      hook: "琥珀色の大学いもと甘味を楽しんだら西北西へ徒歩1分。出汁の香りが漂う町の蕎麦処『蕎麦 大山庵』へ進もう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of a nostalgic Tokyo kanmi-dokoro sweet shop showcase. Glossy amber-glazed daigaku-imo sweet potatoes piled on a ceramic platter alongside glass bowls of anmitsu with red bean paste and agar cubes. Soft warm tones, wide unpainted paper margins, no people, no text."
    },
    {
      name: "蕎麦 大山庵",
      spot_type: "食事",
      description: "ハッピーロード大山商店街の中ほどに店を構える老舗の蕎麦処。北海道産のそば粉を用いた喉ごしのよい蕎麦と、鰹出汁の効いた鴨南蛮・カレー南蛮や丼物とのセットが地元の常連客に支持されている。",
      address: "東京都板橋区大山町36-11",
      prefecture: "東京都",
      city: "板橋区",
      lat: 35.74918,
      lng: 139.700137,
      clue: "松屋甘味店から西北西へ進むと、白暖簾の『蕎麦 大山庵』から鰹出汁のふくよかな香りが漂う。北海道産そば粉で打つ喉ごしのよい蕎麦や鴨南蛮で、下町の昼を味わおう。",
      surprise: "活気あるハッピーロードの真ん中にありながら昼時には地元の買い物客や商店主が次々と暖簾をくぐり、蕎麦が売り切れ次第暖簾を仕舞う実直な商いを続けている。",
      hook: "香り高い蕎麦でお腹を満たしたら西北西へ徒歩5分。アーケードを抜けて川越街道沿いに佇む『大山福地蔵尊（お福地蔵）』を訪ねよう。",
      image_prompt: "Transparent watercolor and fountain pen illustration of a classic neighborhood soba shop in Tokyo. A wooden tray with freshly boiled buckwheat soba noodles on a bamboo zaru mat, crispy shrimp tempura, and a ceramic soba-choko dipping cup beside a white cloth noren curtain. Loose ink lines, unpainted Washi paper borders, no people, no text."
    },
    {
      name: "大山福地蔵尊（お福地蔵）",
      spot_type: "見どころ",
      description: "川越街道の旧道と鎌倉街道が交わる大山町交差点近くに祀られる地蔵堂。江戸時代に行き倒れの旅人や傷ついた馬を介抱した女性行者「お福さん」の遺徳を伝える福地蔵と、お身洗い地蔵尊が並んで鎮座する。",
      address: "東京都板橋区大山町54-1",
      prefecture: "東京都",
      city: "板橋区",
      lat: 35.749626,
      lng: 139.696995,
      clue: "ハッピーロードのアーケードを西北西へ抜けて川越街道へと出ると、大通りの一角に赤い幟と香煙が揺れる『大山福地蔵尊（お福地蔵）』の堂宇が建つ。江戸時代、川越街道と鎌倉街道が交差するこの地に移り住んだ「お福さん」という女性行者は、街道で行き倒れた旅人を看病し、荷運びで倒れた馬まで懇ろに葬ったと伝わる。その慈悲を慕う村人たちが建立したお福地蔵と、自分の患部と同じ箇所を洗って平癒を願う「お身洗い地蔵尊」に静かに手を合わせよう。",
      surprise: "かつてこの辻には旅人や馬が喉を潤す湧き水があり、お福さんはその清らかな水と祈祷で多くの人々の病苦を救ったことから、没後に「生き地蔵」として祀られるようになった。",
      hook: "街道の旅人を救ったお地蔵様に参拝したら北北西へ徒歩5分。名馬の口輪にまつわる伝承を残す『轡神社』で散策を結ぼう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of a small roadside Jizo pavilion along the historic Kawagoe Kaido in Tokyo. Two weathered stone Jizo statues wearing red cloth bibs beside a water basin and red prayer banners, soft afternoon light, wide unpainted paper margins, no people, no text."
    },
    {
      name: "轡神社",
      spot_type: "見どころ",
      description: "旧中丸村の鎮守として祀られる古社（旧称・轡権現社）。源義経の愛馬、あるいは徳川家康が鷹狩りの折に休ませた馬の「轡（くつわ）」を祀ったことに由来すると伝わり、小児の百日咳平癒の信仰を集めてきた。",
      address: "東京都板橋区仲町46-3",
      prefecture: "東京都",
      city: "板橋区",
      lat: 35.752484,
      lng: 139.696124,
      clue: "大山福地蔵尊から川越街道を渡り、静かな住宅街を北北西へ抜けると、豊かな木立に守られた『轡神社（くつわじんじゃ）』の石鳥居に行き着く。全国的にも珍しい「馬の轡（口輪）」を社名とするこの古社は、かつて轡権現社と呼ばれ、源義経が奥州へ向かう途上に残した馬の轡、あるいは徳川家康が鷹狩りの際に外した名馬の轡を村人が祀ったのが起こりと伝わる。境内に吹く穏やかな風に耳を澄ませながら、武蔵野の古道を見守ってきた鎮守の社で歩みを結ぼう。",
      surprise: "江戸時代から明治・大正にかけて「子どもの百日咳（ひゃくにちぜき）」にご利益があるとして広く信仰され、全快したお礼に小さな鉄製の轡や馬の絵馬を奉納する風習が受け継がれてきた。",
      hook: "",
      image_prompt: "Cinematic watercolor background art of Kutsuwa Shrine in Itabashi, Tokyo. A stone torii gate and wooden haiden worship hall shaded by tall zelkovas and ginkgo trees, with a traditional votive wooden ema plaque depicting a horse bit hanging in the foreground. Soft dappled sunlight, unpainted paper edges, no people, no text."
    }
  ]
};
