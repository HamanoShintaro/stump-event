export default {
  slug: "tsuji_tokushima",
  line: "JR徳島線",
  station: "辻駅",
  station_order: 137,
  area_name: "井川町辻・鮎焼きと阿波別街道の酒蔵",
  title: "吉野川と井川の辻町で鮎焼きと銘酒『芳水』をたどる",
  description: "吉野川本流と支流・井川（いかわ）が交わり、阿波別街道（伊予街道）の宿場・舟運の河岸として栄えたJR徳島線・辻駅から、歴史ある商家町を西から東へと歩くルートです。大正3年開業の辻駅から、八十余年にわたり手焼きされる銘菓・鮎焼きの御菓子司 朝日屋、国の登録有形文化財の社殿を擁する今宮神社、丸太組みの温もりに包まれるカフェレスト イスバを経て、大正2年創業の酒蔵・芳水酒造へと向かいます。",
  category: "歴史・文化",
  prefecture: "徳島県",
  budget_tier: 2,
  tags: ["辻駅", "JR徳島線", "三好市井川町", "鮎焼き", "芳水酒造"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of the historic merchant town of Tsuji along the Yoshino River in Miyoshi, Tokushima. A classic wooden railway station, sweetfish-shaped ayu-yaki wagashi pastries, a registered tangible cultural property Shinto shrine gate, and a white-walled sake brewery with a cedar sugidama ball against the Shikoku Mountains. Loose ink lines, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "井川辻町の街道菓と芳水の蔵を巡る旅人",
    subtitle_en: "Wayfarer of Tsuji Merchant Town and Housui Brewery",
    description: "JR徳島線 辻駅から御菓子司 朝日屋、今宮神社、カフェレスト イスバ、芳水酒造までを巡り歩いた証"
  },
  question: "吉野川と井川が交わる辻の商家町に刻まれた歴史と味わいのうち、あなたの旅情を深く揺さぶったのはどの風景ですか？",
  choices: [
    {
      key: "A",
      text: "大正三年の開業から剣山系の山並みと井川の町を見守ってきた『JR徳島線 辻駅』のホーム",
      description: "かつての舟運と街道が交差した要衝の駅に降り立ち、吉野川を渡る風を感じる時間",
      badge: {
        code: "shuin_tsuji_tokushima_station_platform",
        name_ja: "阿波池田へ続く鉄路と辻の風を聴く旅人",
        subtitle_en: "Listener of Tsuji Station along the Yoshino River",
        description: "JR徳島線 辻駅で大正期から続く鉄路の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "『御菓子司 朝日屋』の専用金型で一匹ずつ手焼きされる、自家製こし餡入りの銘菓『鮎焼き』",
      description: "吉野川の若鮎をかたどったカステラ生地の甘い香りに包まれる、老舗和菓子店の店頭",
      badge: {
        code: "shuin_tsuji_tokushima_asahiya_ayuyaki",
        name_ja: "吉野川の若鮎を映す手焼き銘菓を愛でる粋人",
        subtitle_en: "Connoisseur of Handmade Ayu-Yaki Sweetfish Pastry",
        description: "御菓子司 朝日屋で八十余年受け継がれる鮎焼きの技に触れた証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "国の登録有形文化財に名を連ねる『今宮神社』の随神門と、丸太造りの『カフェレスト イスバ』の珈琲",
      description: "精緻な彫刻を伝える辻町の鎮守に参拝し、木の温もりあふれるログハウスでひと息つくひと時",
      badge: {
        code: "shuin_tsuji_tokushima_imamiya_isba",
        name_ja: "文化財の随神門と丸太小屋の珈琲を愉しむ探訪者",
        subtitle_en: "Explorer of Imamiya Shrine and Log-Cabin Cafe",
        description: "今宮神社とカフェレスト イスバで辻町の信仰と憩いに触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "大正二年創業の『芳水酒造』の白壁と、四国山地の伏流水が醸す銘酒『芳水』の香り",
      description: "旧伊予街道沿いに連なる酒蔵の杉玉を見上げ、清冽な水と米が織りなす地酒を手にする瞬間",
      badge: {
        code: "shuin_tsuji_tokushima_housui_brewery",
        name_ja: "阿波別街道の白壁蔵と芳水を識る利き酒人",
        subtitle_en: "Appreciator of Housui Sake Brewery on the Old Kaido",
        description: "芳水酒造で井川町辻の酒造りと水脈の歴史に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "JR徳島線 辻駅",
      spot_type: "見どころ",
      description: "大正3年（1914年）に徳島本線の駅として開業した、三好市井川町辻の玄関口。吉野川本流と支流・井川が合流し、阿波と伊予・讃岐を結ぶ街道が交差した「辻」の町並みへ続く起点となっている。",
      address: "徳島県三好市井川町辻73-2",
      prefecture: "徳島県",
      city: "三好市",
      lat: 34.028973,
      lng: 133.873264,
      clue: "吉野川の豊かな流れに沿って走るJR徳島線の列車を降りると、四国山地の雄大な稜線を背にした『JR徳島線 辻駅』のホームに立つ。大正三年三月に川田駅から阿波池田駅まで鉄路が延伸した際に開業したこの駅は、かつて吉野川の平田舟による舟運と、阿波別街道の陸路が交差する「辻」として栄えた商都の玄関口だ。爽やかな川風が吹き抜ける駅前通りから、東へと続く旧街道の歴史ある町並みへ歩み出そう。",
      surprise: "「辻」という地名は、吉野川の水運と四国各地へ向かう街道が文字通り十字に交わる交通・商業の要衝であったことに由来し、江戸から明治にかけては刻み煙草や酒造で大きく繁栄した。",
      hook: "駅舎を出たら旧街道筋を東南東へ徒歩10分。吉野川の清流を泳ぐ鮎をかたどった銘菓『御菓子司 朝日屋』へ向かおう。",
      image_prompt: "Cinematic watercolor background art of JR Tsuji Station on the Tokushima Line in Miyoshi, Tokushima. A quiet local train platform with forested Shikoku mountains rising in the background and soft morning sunlight filtering onto the tracks, wide unpainted paper margins, no people, no text."
    },
    {
      name: "御菓子司 朝日屋",
      spot_type: "買い物",
      description: "井川町辻の旧街道沿いで80年以上にわたり暖簾を守る老舗和菓子店。専用の鮎型金型で一匹ずつ手焼きするモチモチとした生地で上品な自家製こし餡を包んだ名物「鮎焼き」で知られる。",
      address: "徳島県三好市井川町辻338",
      prefecture: "徳島県",
      city: "三好市",
      lat: 34.027562,
      lng: 133.879775,
      clue: "辻駅から旧街道の落ち着いた家並みを東南東へ歩くと、甘い卵と蜜の香ばしい匂いが漂う『御菓子司 朝日屋』の店先に着く。八十余年にわたり一子相伝で焼き上げられる看板銘菓「鮎焼き」は、専用の鮎型金型に生地を流し込んで一匹ずつ手焼きするモチモチと厚みのある皮のなかに、すっきりとした甘さの自家製こし餡をたっぷり包んだ素朴にして上品な味わいだ。吉野川の若鮎を写し取った伝統の銘菓を、売り切れる前に買い求めよう。",
      surprise: "京阪の一般的な鮎菓子が求肥餅を包むのに対し、朝日屋の鮎焼きは創業以来、専用の鉄型で焼き上げるモチモチの生地で自家製こし餡を包む独自の製法を貫いており、午前中に完売することも珍しくない。",
      hook: "焼きたての鮎焼きを手に入れたら東へ徒歩1分。国の登録有形文化財の社殿が並ぶ『今宮神社』へ参拝しよう。",
      image_prompt: "Gouache and colored pencil food and architecture illustration on cream paper. Golden-brown sweetfish-shaped ayu-yaki castella pastries baked in a traditional fish-shaped iron mold, revealing smooth sweet red adzuki bean paste (koshian) inside, arranged on a wooden tray at a traditional wagashi shop in Tokushima. Partial framing, no people, no text."
    },
    {
      name: "今宮神社",
      spot_type: "見どころ",
      description: "井川町辻の産土神として鎮座する古社。江戸後期から明治・昭和初期にかけて整えられた本殿・幣殿・拝殿・随神門の4棟が国の登録有形文化財（建造物）に登録されている。",
      address: "徳島県三好市井川町辻316-1",
      prefecture: "徳島県",
      city: "三好市",
      lat: 34.027589,
      lng: 133.880561,
      clue: "朝日屋のすぐ東隣に随神門を構えるのが辻町の鎮守『今宮神社』だ。嘉永六年建立の随神門から拝殿・幣殿・本殿まで四棟すべてが国の登録有形文化財に名を連ねる。",
      surprise: "江戸後期から昭和初期までの異なる時代の社寺建築が一つの境内に揃って保存されており、ケヤキ材の龍や唐獅子の彫刻に往時の辻商人の経済力と信仰の深さが刻まれている。",
      hook: "文化財の社殿を巡ったら北北東へ徒歩5分。太い丸太を組んだログハウスの『カフェレスト イスバ』でひと息つこう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of the historic Zuijinmon gate and wooden worship hall of Imamiya Shrine in Miyoshi, Tokushima. Intricate wood carvings under the eaves, stone lanterns, and tall shrine trees, wide unpainted paper margins, no people, no text."
    },
    {
      name: "カフェレスト イスバ",
      spot_type: "食事",
      description: "井川町辻にある本格ログハウス造りのカフェレストラン。店名の「イスバ（IZBA）」はロシア語で丸太小屋を意味し、木の香りに包まれた店内でモーニングやパスタ・ピッツァのランチ、自家製スイーツを提供している。",
      address: "徳島県三好市井川町辻201-1",
      prefecture: "徳島県",
      city: "三好市",
      lat: 34.030247,
      lng: 133.881454,
      clue: "今宮神社から井川のせせらぎを渡って北北東へ歩くと、太い丸太を井桁に組み上げた三角屋根のログハウス『カフェレスト イスバ』が現れる。ロシア語で「丸太小屋」を意味する店名の通り、一歩店内へ入れば飴色に艶めく木材の香りと高い吹き抜けの開放感が迎えてくれる。昼は焼きたてのピッツァやパスタのランチ、午後は挽きたての芳醇な珈琲と自家製ケーキを味わいながら、旅の足をゆったりと休めよう。",
      surprise: "山あいの町にありながら、昼は地元客が集う喫茶・洋食ランチの場として、夜は阿波の鹿肉などのジビエや石窯ピッツァを供する本格イタリアンとして二面性の魅力を持っている。",
      hook: "丸太小屋のカフェで寛いだら東南東へ徒歩2分。大正二年創業の白壁の酒蔵『芳水酒造』で散策を結ぼう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of a warm wooden log-cabin cafe interior in Tokushima. A cup of freshly brewed coffee and a plate of pasta on a thick timber table beside a sunlit window framed by stacked pine logs, unpainted margins, no people, no text."
    },
    {
      name: "芳水酒造",
      spot_type: "買い物",
      description: "大正2年（1913年）創業、阿波別街道（旧伊予街道）沿いに白壁の土蔵を連ねる老舗酒造。四国山地から湧き出る井川の水と厳選した酒米で醸す代表銘柄「芳水（ほうすい）」の直売を行っている。",
      address: "徳島県三好市井川町辻231-2",
      prefecture: "徳島県",
      city: "三好市",
      lat: 34.030046,
      lng: 133.882454,
      clue: "イスバから東南東へ少し歩けば、旧伊予街道に面して重厚な白壁の土蔵と赤煉瓦の煙突がそびえる『芳水酒造』にたどり着く。大正二年の創業以来、四国山地の深い森が育んだ井川の清冽な伏流水を仕込み水に用い、「芳醇な水」に由来する銘酒『芳水』を実直に醸し続けてきた。軒先に吊るされた大きな杉玉を見上げ、全国新酒鑑評会でも幾度となく金賞に輝いた芳醇な阿波の地酒を旅のしるしに求めて歩みを結ぼう。",
      surprise: "井川町辻は背後の四国山地から良質な伏流水が豊富に湧き出ることから「水の町」とも呼ばれ、最盛期には町内に複数の造り酒屋が軒を連ねて阿波屈指の酒処を形づくっていた。",
      hook: "",
      image_prompt: "Transparent watercolor and fountain pen architectural illustration of Housui Sake Brewery along the old Iyo Kaido road in Miyoshi, Tokushima. Traditional white plaster storehouses (kura), dark wooden lattice walls, a green cedar sugidama ball hanging under the eaves, and a red brick chimney against blue mountains. Wide unpainted Washi paper margins, no people, no text."
    }
  ]
};
