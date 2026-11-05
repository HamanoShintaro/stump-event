export default {
  slug: "koriyama",
  line: "東北新幹線",
  station: "郡山駅",
  station_order: 143,
  area_name: "郡山・楽都の緑の扉と薄皮饅頭とクリームボックスの道",
  title: "緑の扉の駅前から薄皮饅頭と総鎮守と老舗パンへ",
  description: "猪苗代湖の水を引いた明治の「安積疏水」によって原野から東北有数の商都へと飛躍し、「楽都」としても知られる福島県・郡山駅。西口広場のGReeeeN記念モニュメント「緑の扉」を起点に、嘉永5年（1852年）創業・日本三大まんじゅうの柏屋本店、安積の総鎮守・安積国造神社、重要文化財の銅造観音像を伝える大同2年（807年）開基の如宝寺、そして大正13年（1924年）創業の大友パン店が焼く郡山ソウルフード「クリームボックス」へと巡るルートです。",
  category: "街歩き・名店",
  prefecture: "福島県",
  budget_tier: 1,
  tags: ["郡山", "東北新幹線", "薄皮饅頭", "安積国造神社", "クリームボックス"],
  eyecatch_prompt: "A warm transparent watercolor and fountain pen sketchbook illustration of Koriyama, Fukushima, featuring a green symbolic door monument and water cascade at the station plaza, leading past a traditional Edo-period wagashi shop noren, a historic shrine gate, and a nostalgic bakery tray with thick white milk-cream toast (Cream Box). Soft afternoon light, Washi paper margins, no text, no people.",
  completion_badge: {
    name_ja: "安積野の祈りと二大銘菓を味わう楽都の旅人",
    subtitle_en: "Wayfarer of Asaka Heritage and Koriyama Confections",
    description: "JR郡山駅から柏屋 本店、安積国造神社、高岳山 如宝寺、大友パン店までを巡り歩いた証"
  },
  question: "江戸の薄皮饅頭と大正創業のパン屋が焼くクリームボックス、そして安積の古社寺が並ぶ郡山の街で、季節を変えてまた訪ねたい場所はどこですか？",
  choices: [
    {
      key: "A",
      text: "安積疏水の滝モニュメントの傍らに立つ、楽都・郡山の象徴『JR郡山駅「緑の扉」』",
      description: "郡山で結成された音楽グループゆかりの扉と手形が、開拓の水音とともに旅人を迎える駅前広場",
      badge: {
        code: "shuin_koriyama_green_door_plaza",
        name_ja: "楽都の緑の扉と疏水の調べを聴く旅人",
        subtitle_en: "Listener of the Green Door and Canal Cascade",
        description: "JR郡山駅西口広場で緑の扉と滝のモニュメントに触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "嘉永五年創業の『柏屋 本店』に漂う、日本三大まんじゅう「薄皮饅頭」の黒糖と小豆の香り",
      description: "奥州街道・郡山宿の茶屋から始まり、鉄道開業とともに全国へ名を広めた老舗総本店の暖簾と萬寿石",
      badge: {
        code: "shuin_koriyama_kashiwaya_usukawa",
        name_ja: "百七十余年の薄皮饅頭を愛でる粋人",
        subtitle_en: "Connoisseur of Edo-Born Usukawa Manju",
        description: "柏屋 本店で日本三大まんじゅうの伝統と歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "儒学者・安積艮斎が巣立った『安積国造神社』の杜と、鎌倉期の石造笠塔婆が佇む『高岳山 如宝寺』",
      description: "清水台の地名を生んだ総鎮守の参道から、大同二年開基の名刹の庭園へと続く千二百年の歴史回廊",
      badge: {
        code: "shuin_koriyama_asaka_shrine_nyohoji",
        name_ja: "安積総鎮守と大同開基の古刹を識る探訪者",
        subtitle_en: "Seeker of Asaka Shrine and Ancient Nyohoji",
        description: "安積国造神社と高岳山 如宝寺で郡山の精神文化の礎に触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "大正十三年創業の『大友パン店』の棚に並ぶ、真っ白なミルククリームが艶めく「クリームボックス」",
      description: "小ぶりの厚切り食パンに自家製ミルククリームをぽってり塗った、郡山市民のソウルフードとの出会い",
      badge: {
        code: "shuin_koriyama_otomo_cream_box",
        name_ja: "百年パン屋のクリームボックスを味わう探求者",
        subtitle_en: "Taster of Taisho Bakery Cream Box",
        description: "大友パン店で郡山名物クリームボックスと百年ベーカリーの技に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "JR郡山駅（GReeeeNモニュメント「緑の扉」・滝のモニュメント）",
      spot_type: "見どころ",
      description: "福島県最大の鉄道結節点であるJR郡山駅の西口広場。郡山で結成された音楽グループ・GReeeeN（現GRe4N BOYZ）ゆかりのモニュメント「緑の扉」や手形ベンチと、明治の安積疏水を象徴する滝のモニュメントが設置されている。",
      address: "福島県郡山市燧田195",
      prefecture: "福島県",
      city: "郡山市",
      lat: 37.398557,
      lng: 140.388402,
      clue: "東北新幹線を降りて『JR郡山駅』の西口駅前広場へ出ると、涼やかな水音を響かせる滝のモニュメントの傍らに、鮮やかなグリーンの枠が印象的な「緑の扉」と足跡・手形のモニュメントが立っている。明治時代に猪苗代湖から水を引いた「安積疏水」によって発展した開拓の記憶と、市民音楽が盛んな「楽都・郡山」で結成された音楽グループゆかりの記念碑が並ぶ広場で、商都の玄関口の空気に触れよう。",
      surprise: "戦後の荒廃のなかで音楽によって市民の心をひとつにしようと交響楽団や合唱運動が盛り上がり、ウィーンになぞらえて「楽都・郡山」と呼ばれるようになった。",
      hook: "緑の扉と水のモニュメントを見届けたら西南西へ徒歩5分。日本三大まんじゅうの老舗『柏屋 本店』へ向かおう。",
      image_prompt: "Soft watercolor and ink architectural sketch of a bright station plaza in Koriyama showing a symbolic vivid green freestanding door monument beside a stone water fountain cascade, with soft sunlight reflecting on the pavement. Poetic travel journal style, no text."
    },
    {
      name: "柏屋 本店",
      spot_type: "買い物",
      description: "嘉永5年（1852年）に奥州街道・郡山宿で創業した老舗和菓子店の総本店。黒糖風味の薄皮に自家製あんを包んだ看板銘菓「柏屋薄皮饅頭」は、東京の志ほせ饅頭・岡山の大手まんぢゅうと並び日本三大まんじゅうに数えられる（10:00〜19:00営業）。",
      address: "福島県郡山市中町11-8",
      prefecture: "福島県",
      city: "郡山市",
      lat: 37.397972,
      lng: 140.384987,
      clue: "西口広場から駅前大通りを西南西へ進み、旧奥州街道が通る中町の交差点に至ると、嘉永五年創業の『柏屋 本店』が風格ある暖簾を掲げている。初代・本名善兵衛が「病に薬がいるように、健やかな者に心のなごみがいる」との想いから考案した薄皮饅頭は、ほんのり黒糖が香る薄い皮に口どけのよいこしあんや粒あんがぎっしり詰まった日本三大まんじゅうの一つだ。店頭の萬寿石を撫で、百七十余年愛される銘菓を手にとってみよう。",
      surprise: "明治二十年に東北本線の郡山駅が開業した際、いち早く駅ホームでの立ち売りを始めたことで「東北の名物に柏屋の薄皮饅頭あり」と全国にその名が広まった。",
      hook: "老舗の薄皮饅頭を手に入れたら西北西へ徒歩4分。清水台の坂の上に鎮座する郡山総鎮守『安積国造神社』へ進もう。",
      image_prompt: "Warm gouache and colored pencil close-up illustration of traditional dark brown Usukawa Manju (thin-skinned sweet bean buns) arranged on a ceramic plate beside a cup of green tea and a classic indigo shop noren curtain. Rich appetizing textures, no text."
    },
    {
      name: "安積国造神社",
      spot_type: "見どころ",
      description: "成務天皇の御代に初代安積国造となった比止禰命と八幡大神などを祀る郡山の総鎮守。宮司の三男として生まれ、吉田松陰や高杉晋作らを育てた幕末の儒学者・安積艮斎ゆかりの神社としても知られる。",
      address: "福島県郡山市清水台1丁目6-23",
      prefecture: "福島県",
      city: "郡山市",
      lat: 37.398602,
      lng: 140.382075,
      clue: "柏屋本店から西北西へ緩やかな坂を上ると、郡山の総鎮守『安積国造神社』の大鳥居がそびえる。幕末の大儒学者・安積艮斎が生まれ育った杜で、二千年の歴史を刻む社殿に参拝しよう。",
      surprise: "安積艮斎が江戸へ旅立つ前に身を清めた湧水「産清水（うぶしみず）」が神社の北側にあったことから、この一帯が「清水台」と名づけられた。",
      hook: "総鎮守の杜を参拝したら南西へ徒歩6分。大同二年開基の古刹『高岳山 如宝寺』の庭園と石塔を訪ねよう。",
      image_prompt: "Transparent watercolor and fountain pen illustration of a dignified Shinto shrine worship hall in Koriyama framed by ancient keyaki trees, stone lanterns, and a scholarly stone monument in dappled sunlight. Serene, classical brushwork, no text."
    },
    {
      name: "高岳山 如宝寺",
      spot_type: "見どころ",
      description: "大同2年（807年）開基と伝わる真言宗豊山派の名刹。国指定重要文化財の「銅造観音菩薩立像」や鎌倉時代・弘安6年（1283年）銘の重要文化財「石造笠塔婆」を伝え、正月6〜7日の「七日堂まいり」で賑わう。",
      address: "福島県郡山市堂前町4-24",
      prefecture: "福島県",
      city: "郡山市",
      lat: 37.395898,
      lng: 140.379209,
      clue: "安積国造神社から南西へ歩みを進めると、堂前町の落ち着いた通りに『高岳山 如宝寺』の重厚な山門と朱塗りの観音堂が見えてくる。平安初期の大同二年に平城天皇の勅願で創建されたと伝わる古刹で、白鳳から天平の面影を伝える重要文化財「銅造観音菩薩立像」や、鎌倉時代の弘安六年の銘が刻まれた重要文化財「石造笠塔婆」を今に守り伝えている。池泉庭園の静けさのなかで、中世安積郡の中心寺院だった歳月に触れよう。",
      surprise: "明治初期の安積開拓の際にはこの如宝寺に開拓掛の仮役所や学校が置かれ、近代郡山の街づくりがまさしくこの境内から動き出した。",
      hook: "古刹の石塔と庭園を巡ったら北北西へ徒歩6分。大正十三年創業の老舗『大友パン店』でクリームボックスに出会い散策を結ぼう。",
      image_prompt: "Sumi-ink and mineral watercolor wash illustration of a tranquil temple garden at Nyohoji in Koriyama, featuring an ancient Kamakura-period stone stupa (Kasatoba), a wooden bell tower, and pine trees reflected in a quiet pond. Atmospheric, no text."
    },
    {
      name: "大友パン店",
      spot_type: "買い物",
      description: "大正13年（1924年）創業、虎丸町のさくら通り沿いに店を構える老舗ベーカリー。小ぶりの厚切り食パンに自家製ミルククリームをたっぷり塗った郡山のご当地パン「クリームボックス」や「カフェオレボックス」の代表的名店（7:30〜18:50営業、日曜は17:50まで）。",
      address: "福島県郡山市虎丸町24-9",
      prefecture: "福島県",
      city: "郡山市",
      lat: 37.399293,
      lng: 140.378233,
      clue: "如宝寺から北北西へ進み、さくら通り沿いの虎丸町へ出ると、大正十三年創業の老舗ベーカリー『大友パン店』の赤い看板が出迎えてくれる。店内の棚にずらりと並ぶ看板商品は、手のひらサイズの分厚い食パンの上に真っ白な自家製ミルククリームをこぼれそうなほど塗った郡山のご当地パン「クリームボックス」だ。福島名物の酪王カフェオレを使ったカフェオレボックスとともに、百年のパン屋が焼く優しい甘さで郡山の歩みを結ぼう。",
      surprise: "昭和五十一年に郡山で生まれたクリームボックスは学校の購買部や街のパン屋を通じて市民の日常に定着し、大友パン店では毎朝職人が手作業で何百枚ものパンにクリームを塗り上げている。",
      hook: "",
      image_prompt: "Pastel gouache and colored pencil close-up illustration of Koriyama’s famous Cream Box: a cute square thick-sliced white bread topped generously with glossy snow-white milk cream and a coffee-flavored version beside it on a wooden bakery tray. Warm, nostalgic bakery vibe, no text."
    }
  ]
};
