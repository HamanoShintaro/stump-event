export default {
  slug: "senzai",
  line: "近鉄天理線",
  station: "前栽駅",
  station_order: 133,
  area_name: "前栽・天理軽便鉄道の記憶と雨読の珈琲",
  title: "大和盆地の風渡る前栽の杜と雨読の珈琲香",
  description: "奈良盆地の東縁、大和青垣の山並みを遠くに望む近鉄天理線・前栽駅から、古い集落の鎮守社と穏やかな暮らしの店々を西から東へとたどるルートです。大正4年に天理軽便鉄道の駅として開業した前栽駅から、大坂東横堀の石工が刻んだ江戸期の狛犬が守る御霊神社、晴耕雨読にちなんだ自家焙煎の珈琲雨読、地元の人々に愛される定食処・気まぐれ家を経て、一口サイズのミニクロワッサンが焼けるパン工房 OTOへと向かいます。",
  category: "日常・ご褒美",
  prefecture: "奈良県",
  budget_tier: 2,
  tags: ["前栽", "天理", "近鉄天理線", "自家焙煎珈琲", "奈良盆地"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of the quiet townscape around Senzai Station in Tenri, Nara. A maroon commuter train on the Kintetsu Tenri Line, an ancient village shrine shaded by camphor trees, a peaceful coffee roastery window with an open book, and a basket of golden mini croissants. Loose ink linework, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "前栽の鎮守と雨読の珈琲を巡る旅人",
    subtitle_en: "Wayfarer of Senzai Shrine and Rainy-Day Coffee",
    description: "近鉄天理線 前栽駅から御霊神社、珈琲雨読、気まぐれ家、パン工房 OTOまでを巡り歩いた証"
  },
  question: "軽便鉄道の記憶が息づく前栽から川原城町への道のりで、手元のしおりにそっと挟んでおきたい風景はどれですか？",
  choices: [
    {
      key: "A",
      text: "大正の軽便鉄道の歴史を今に伝える、『近鉄天理線 前栽駅』の地下改札と島式ホームを吹き抜ける風",
      description: "平端と天理を結ぶ支線の途中駅で、大和盆地を行き交う電車の響きに耳を澄ます時間",
      badge: {
        code: "shuin_senzai_light_railway_station",
        name_ja: "軽便鉄道の記憶を宿す単線駅を識る旅人",
        subtitle_en: "Seeker of the Historic Tenri Branch Station",
        description: "近鉄天理線 前栽駅で百余年の鉄路の歩みに触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "『御霊神社』の静かな社叢と、文政年間に大坂東横堀の石工が彫り上げた浪速狛犬の表情",
      description: "前栽町の環濠集落の歴史を見守ってきた古社で、江戸後期の石造美術と向き合うひと時",
      badge: {
        code: "shuin_senzai_goryo_shrine_komainu",
        name_ja: "前栽の鎮守と江戸の石工の技を敬う参拝者",
        subtitle_en: "Pilgrim of Goryo Shrine and Edo Stone Guardian",
        description: "御霊神社で地域の信仰と浪速狛犬の歴史に触れた証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "「晴耕雨読」の言葉のように静かな時間が流れる、『珈琲雨読』の自家焙煎珈琲とページの音",
      description: "田井庄町の住宅街に佇む小さな珈琲店で、丁寧に焙煎された豆の香りに包まれる体験",
      badge: {
        code: "shuin_senzai_udoku_roastery_book",
        name_ja: "雨読の静寂と深煎りの香りを嗜む粋人",
        subtitle_en: "Connoisseur of Rainy-Day Reading Coffee",
        description: "珈琲雨読で読書と調和する自家焙煎の一杯を味わった証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "『気まぐれ家』の手作り定食の温もりと、『パン工房 OTO』の香ばしく焼き上がったミニクロワッサン",
      description: "地元の常連客に親しまれる食堂の昼餉から、焼きたてのパンが並ぶ街角の工房へと歩く瞬間",
      badge: {
        code: "shuin_senzai_kimagure_oto_bakery",
        name_ja: "町の食堂の温もりと焼きたての麦香を愛でる人",
        subtitle_en: "Admirer of Local Dining and Fresh Croissants",
        description: "気まぐれ家とパン工房 OTOで天理の日常の滋味を堪能した証",
        rarity: 3
      }
    }
  ],
  spots: [
    {
      name: "近鉄天理線 前栽駅",
      spot_type: "見どころ",
      description: "大正4年（1915年）に天理軽便鉄道の駅として開業した近鉄天理線の途中駅。1面2線の島式ホームと地下改札を備え、平端駅と終点・天理駅のあいだで地域の通勤・通学を支える。",
      address: "奈良県天理市杉本町282-2",
      prefecture: "奈良県",
      city: "天理市",
      lat: 34.600988,
      lng: 135.816476,
      clue: "大和盆地の中央を走る近鉄橿原線の平端駅から分岐し、東の山の辺へと向かう天理線の電車が最初の停車駅『近鉄天理線 前栽駅（せんざいえき）』に滑り込む。大正四年に軌間七百六十二ミリの天理軽便鉄道の駅として開業して以来、百十年以上にわたりこの町の暮らしを見守ってきた。地下の改札を抜けて地上のロータリーへ出ると、遠くに大和青垣の穏やかな稜線が浮かび、盆地ならではの広い空が頭上に広がっている。",
      surprise: "天理軽便鉄道は開業からわずか六年後の大正十年に大阪電気軌道（現在の近鉄の前身）に買収されて標準軌へと改軌・電化され、宗教都市・天理と大阪・京都を結ぶ大動脈へと姿を変えた。",
      hook: "地下改札から地上へ出たら東北東へ徒歩7分。前栽町の集落を守ってきた古社『御霊神社』へ向かおう。",
      image_prompt: "Cinematic watercolor background art of a quiet suburban railway station with an island platform on the Kintetsu Tenri Line in Nara Basin. Distant gentle blue-green mountains of Yamato-Aogaki under a wide sky, soft morning sunlight, hand-painted brush texture, no people, no text."
    },
    {
      name: "御霊神社",
      spot_type: "見どころ",
      description: "天理市前栽町の集落の鎮守として崇敬を集める古社。境内には文政10年（1827年）に大坂東横堀の石工・河内屋吉兵衛が刻んだ銘を持つ石造狛犬や石燈籠が残されている。",
      address: "奈良県天理市前栽町230-1",
      prefecture: "奈良県",
      city: "天理市",
      lat: 34.602363,
      lng: 135.820554,
      clue: "前栽駅から東北東へ、古い白壁や瓦屋根が残る前栽町の路地へ分け入ると、豊かな木立に囲まれた『御霊神社（ごりょうじんじゃ）』の鳥居が現れる。静まり返った境内の参道を進み、拝殿前の石造狛犬の台座に目を凝らせば、文政十年に大坂東横堀の石工・河内屋吉兵衛が彫り上げた銘が刻まれているのに気づくだろう。江戸時代の大和と大坂を結んだ舟運や街道の豊かな経済力を物語る石の造形を間近に眺めよう。",
      surprise: "大和盆地の農村では江戸時代後期に木綿や菜種の栽培で蓄えた富によって大坂の一流石工に狛犬や燈籠を発注する流行があり、この御霊神社の狛犬もその歴史を伝える貴重な遺品となっている。",
      hook: "鎮守の森を参拝したら南東へ徒歩7分。本と珈琲の時間が流れる自家焙煎店『珈琲雨読』へ進もう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of an Edo-period stone guardian lion-dog (komainu) and stone lantern shaded by tall trees at Goryo Shrine in Tenri, Nara. Dappled light on gravel path, wide unpainted paper margins, no people, no text."
    },
    {
      name: "珈琲雨読",
      spot_type: "休憩",
      description: "田井庄町の穏やかな通りに佇む自家焙煎のスペシャルティコーヒー専門店。「晴耕雨読」の言葉にちなみ、雨の日に読書をするような静かで落ち着いた珈琲時間を提供する。",
      address: "奈良県天理市田井庄町126-7",
      prefecture: "奈良県",
      city: "天理市",
      lat: 34.599777,
      lng: 135.82384,
      clue: "御霊神社から南東へ歩くと、控えめな佇まいの自家焙煎店『珈琲雨読（うどく）』が見えてくる。雨の日に静かに本を開くような穏やかな空気のなか、丁寧に焙煎された豆から淹れる香り高い一杯が心を解きほぐしてくれる。",
      surprise: "店名の「雨読」は故事成語の「晴耕雨読」から名付けられており、日常の喧騒から少し離れて一杯の珈琲と向き合う静かな余白を大切にしたいという店主の想いが込められている。",
      hook: "深煎りの香りでひと息ついたら東南東へ徒歩4分。地元の人々に親しまれる食事処『気まぐれ家』へ向かおう。",
      image_prompt: "Transparent watercolor and fountain pen illustration of a quiet specialty coffee shop table with a dark ceramic cup of hand-dripped coffee, an open paperback book, and a small glass vase by a sunlit window in Tenri, Nara. Loose ink lines, no people, no text."
    },
    {
      name: "気まぐれ家",
      spot_type: "食事",
      description: "天理市田井庄町で地元の常連客に愛されるアットホームな定食・食事処。旬の食材や家庭的な惣菜を組み合わせた日替わりの昼定食や揚げたてのフライ、小鉢料理を味わえる。",
      address: "奈良県天理市田井庄町713",
      prefecture: "奈良県",
      city: "天理市",
      lat: 34.599124,
      lng: 135.826143,
      clue: "珈琲雨読から東南東へ田井庄町の通りを進むと、温かみのある暖簾を掲げた食事処『気まぐれ家』が現れる。地元の常連客が昼どきになると次々に暖簾をくぐるこの店では、季節の野菜をたっぷり使った小鉢や揚げたてのフライ、丁寧に引いた出汁の味噌汁が揃う手作りの定食が振る舞われている。気取らない町の食堂ならではの湯気と香ばしい匂いに包まれながら、大和の日常に寄り添う温かい昼餉をじっくり味わおう。",
      surprise: "観光向けの華美なメニューではなく、毎日通っても飽きないようにその日の仕入れで主菜や副菜を少しずつ変える工夫が続けられており、地域の暮らしを支える台所のような存在となっている。",
      hook: "手作りの昼餉でお腹を満たしたら東北東へ徒歩5分。焼きたてのパンが並ぶ『パン工房 OTO』へ歩みを進めよう。",
      image_prompt: "Gouache and colored pencil food illustration on textured cream paper. A warm wooden tray of Japanese home-style teishoku lunch with crispy golden fried dishes, seasonal vegetable side bowls, steamed rice, and miso soup in a cozy local diner in Tenri, Nara. Partial framing, no people, no text."
    },
    {
      name: "パン工房 OTO",
      spot_type: "買い物",
      description: "天理市川原城町の通りに面した地域密着のベーカリー。量り売りでも親しまれるサクサクのミニクロワッサンをはじめ、ふんわりとした食パンや具材たっぷりの惣菜パン・菓子パンが並ぶ。",
      address: "奈良県天理市川原城町867",
      prefecture: "奈良県",
      city: "天理市",
      lat: 34.600002,
      lng: 135.82918,
      clue: "気まぐれ家から東北東へ川原城町の通りへと抜けると、甘いバターと焼けた小麦の香りが通りにまで溢れ出す『パン工房 OTO（オト）』に到着する。ガラス戸を開けると、木のトレイの上に黄金色の層を重ねた一口サイズのミニクロワッサンや、自家製カスタードが詰まったクリームパン、季節の素材を織り込んだ調理パンがずらりと並んでいる。帰りの電車で味わいたくなる焼きたてのパンを紙袋に詰め、前栽の散策を締めくくろう。",
      surprise: "看板商品のミニクロワッサンは外側のパリッとした香ばしさと内側のしっとりした口どけのバランスに定評があり、焼き上がりの時間に合わせて訪れる地元の家族連れが絶えない。",
      hook: "",
      image_prompt: "Pastel gouache and botanical watercolor illustration of freshly baked golden mini croissants and rustic brioche buns arranged on wooden trays in a bright neighborhood bakery in Tenri, Nara. Warm butter tones, unpainted white paper margins, no people, no text."
    }
  ]
};
