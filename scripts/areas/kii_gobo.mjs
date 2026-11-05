// 紀伊御坊エリア定義（紀伊御坊駅から画廊喫茶 さぼーる、本願寺日高別院、堀河屋野村、小竹八幡神社へ編）
// 出典:
// - 紀伊御坊駅（和歌山県御坊市薗430-2）: 全長2.7kmの紀州鉄道の中枢駅。構内に1960年製気動車「キハ603」が静態保存されている。
// - 画廊喫茶 さぼーる（和歌山県御坊市薗89-7）: 紀伊御坊駅近くにあるレンガ造りの純喫茶。壁面に絵画が飾られ、サイフォン珈琲や洋食ランチを提供。
// - 本願寺日高別院（日高御坊）（和歌山県御坊市御坊100）: 「御坊市」の地名の由来となった浄土真宗本願寺派の別院。樹齢400年超の大イチョウと大伽藍で知られる。
// - 堀河屋野村（和歌山県御坊市薗743）: 元禄元年（1688年）創業の醤油・味噌蔵元。薪火と杉桶の手麹製法による『三ツ星醤油』と『径山寺味噌』を醸造。
// - 小竹八幡神社（和歌山県御坊市薗646）: 『日本書紀』の小竹宮伝承地とされる日高地方の総鎮守。毎年10月の「御坊祭」の舞台。
export default {
  slug: "kii_gobo",
  line: "紀州鉄道",
  station: "紀伊御坊",
  station_order: 1,
  area_name: "紀伊御坊",
  title: "日本最短級の私鉄と薪火の醤油蔵が香る寺内町",
  description: "営業距離わずか2.7キロという日本最短級のローカル私鉄・紀州鉄道の中枢駅『紀伊御坊駅』を降りると、南へ向かって江戸時代の町割りが残る寺内町（じないまち）の路地が続いている。昭和の気動車が眠る駅舎から、絵画が並ぶ純喫茶『画廊喫茶 さぼーる』、御坊という地名の生みの親である『本願寺日高別院』、元禄元年創業の醤油・味噌蔵元『堀河屋野村』を経て、日高地方総鎮守の『小竹八幡神社』へと歩く1.5キロの道のり。",
  category: "歴史・文化",
  prefecture: "和歌山県",
  budget_tier: 2,
  tags: ["紀伊御坊", "紀州鉄道", "寺内町", "三ツ星醤油", "御坊"],
  eyecatch_prompt: "Transparent watercolor and fountain-pen line illustration of Gobo Jinaimachi in Wakayama, an old black cedar-boarded soy sauce brewery alley with earthen walls and tiled roofs, a vintage cream-and-vermilion diesel railcar glimpsed at the corner, a cedar barrel and amber soy sauce bottle in the foreground, no people, no text, 16:9 aspect ratio",
  completion_badge: {
    name_ja: "日高寺内町と古式醤油蔵をめぐる旅人",
    subtitle_en: "Wayfarer of Hidaka Jinaimachi and Soy Brewery",
    description: "紀伊御坊駅から画廊喫茶 さぼーる、本願寺日高別院、堀河屋野村、小竹八幡神社までを巡り歩いた証"
  },
  question: "ローカル私鉄の駅から四百年の寺内町と醤油蔵を抜ける御坊の道で、あなたの心に深く響いた風景はどれですか？",
  choices: [
    {
      key: "A",
      text: "『紀伊御坊駅』の側線に佇む、1960年製の気動車「キハ603」と硬券の温もり",
      description: "営業距離2.7キロの紀州鉄道の中枢駅で、往年のツートンカラーの気動車と出札窓口を眺める瞬間",
      badge: {
        code: "shuin_kii_gobo_festival_shrine",
        name_ja: "紀州鉄道とキハ603を愛でる鉄路の旅人",
        subtitle_en: "Admirer of Kishu Railway and Kiha 603",
        description: "紀伊御坊駅で静態保存の気動車と出会った証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『画廊喫茶 さぼーる』のレンガ壁に飾られた絵画と、サイフォン珈琲の香り",
      description: "地元の文化サロンとして愛されてきた純喫茶の席で、丁寧な珈琲と洋食を味わうひと時",
      badge: {
        code: "shuin_kii_gobo_shinonomiya_chronicle",
        name_ja: "画廊喫茶の彩りと珈琲に憩う粋人",
        subtitle_en: "Patron of the Brick Gallery Coffeehouse",
        description: "画廊喫茶 さぼーるで絵画と珈琲を楽しんだ証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "御坊の地名の由来となった『本願寺日高別院』の大伽藍と、樹齢四百年の大イチョウ",
      description: "寺内町の中心にそびえる「御坊様」の山門をくぐり、戦国期から続く門前の歴史を仰ぎ見る体験",
      badge: {
        code: "shuin_kii_gobo_lantern_avenue",
        name_ja: "日高御坊の大伽藍と大銀杏を仰ぐ識者",
        subtitle_en: "Seeker of Hidaka Betsuin Temple Lore",
        description: "本願寺日高別院の歴史と大イチョウに触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "元禄創業『堀河屋野村』の三ツ星醤油・径山寺味噌と、『小竹八幡神社』の深い社叢",
      description: "薪火と手麹を守る三百三十年の蔵元から、古代小竹宮の伝承を伝える総鎮守へと歩く時間",
      badge: {
        code: "shuin_kii_gobo_horikawaya_keepsake",
        name_ja: "三ツ星醤油の蔵と小竹の杜を巡る食通",
        subtitle_en: "Keeper of Heritage Soy Sauce and Shrine Grove",
        description: "堀河屋野村と小竹八幡神社を訪ねた証",
        rarity: 3
      }
    }
  ],
  spots: [
    {
      name: "紀伊御坊駅",
      spot_type: "見どころ",
      description: "御坊駅と西御坊駅を結ぶ全長2.7kmの紀州鉄道の中心駅。構内には昭和35年（1960年）製の気動車「キハ603」が静態保存されている。",
      address: "和歌山県御坊市薗275",
      prefecture: "和歌山県",
      city: "御坊市",
      lat: 33.89432,
      lng: 135.154851,
      clue: "一両編成の小さな列車がトコトコと走る紀州鉄道の中心駅『紀伊御坊駅』に降り立つと、構内の側線にクリーム色と朱色のツートンカラーをまとった古い気動車「キハ603」が静かに佇んでいる。昭和三十五年に製造され、大分県の耶馬渓鉄道を経て紀州の街を長らく走り抜いた名車両だ。出札窓口に並ぶ昔ながらの硬券乗車券や、小さな車庫を備えた中枢駅ならではの温かな空気を胸いっぱいに吸い込もう。",
      surprise: "紀州鉄道は営業距離わずか2.7キロという日本最短級の私鉄であり、かつては日高川駅までを結んで地域の木材や特産品の輸送を支えていた。",
      hook: "レトロな気動車を見学したら西南西へ徒歩3分。絵画が飾られた純喫茶『画廊喫茶 さぼーる』へ向かおう。",
      image_prompt: "Nostalgic watercolor and ink illustration of the rounded front headlight and cream-and-red painted nose of a 1960s vintage diesel railcar parked under a wooden station canopy, soft afternoon shadows, no people, no text"
    },
    {
      name: "画廊喫茶 さぼーる",
      spot_type: "休憩",
      description: "御坊市薗にある老舗の画廊喫茶。レンガ調の落ち着いた店内に絵画が展示され、サイフォン珈琲や手作りの洋食ランチが楽しめる。",
      address: "和歌山県御坊市薗89-7",
      prefecture: "和歌山県",
      city: "御坊市",
      lat: 33.893763,
      lng: 135.152907,
      clue: "紀伊御坊駅から西南西へすぐの路地に入ると、レンガ調の外壁が印象的な『画廊喫茶 さぼーる』が現れる。壁面に並ぶ絵画を眺めながら、香り高い珈琲や手作りの洋食ランチでひと息つこう。",
      surprise: "「画廊喫茶」の名前の通り、店内では長年にわたり地元の美術愛好家や画家たちの作品展示が行われ、御坊の文化サロンとして世代を超えて親しまれている。",
      hook: "絵画と珈琲で心を満たしたら南東へ徒歩13分。「御坊」の地名の起源となった『本願寺日高別院』へ歩を進めよう。",
      image_prompt: "Warm gouache and colored pencil illustration of a glass coffee siphon and a vintage porcelain cup on a dark polished wooden counter, with blurred framed paintings on a brick wall in the background, no people, no text"
    },
    {
      name: "本願寺日高別院（日高御坊）",
      spot_type: "見どころ",
      description: "天正年間（1590年頃）に現在地へ建立された浄土真宗本願寺派の別院。地元の人々から「御坊様」と慕われ、御坊市の市名の由来となった名刹。",
      address: "和歌山県御坊市御坊100",
      prefecture: "和歌山県",
      city: "御坊市",
      lat: 33.888139,
      lng: 135.157967,
      clue: "古い町家が連なる寺内町の路地を南東へ進むと、瓦屋根の大伽藍がそびえる『本願寺日高別院（日高御坊）』の山門が立ち現れる。戦国時代の天正年間に湯川氏の吉原御坊を再興して以来、人々から親しみを込めて「御坊様（ごぼうさま）」と呼ばれ、現在の「御坊市」という市名の直接の由来となった古刹だ。文政八年再建の本堂の前に立ち、樹齢四百年を超える大イチョウの堂々たる枝ぶりを見上げてみよう。",
      surprise: "幕末から明治にかけて活躍した紀州藩出身の政治家・陸奥宗光も幼少期にこの界隈で過ごしたゆかりがあり、境内には地域を見守ってきた歴史の碑が残されている。",
      hook: "御坊発祥の大伽藍を参拝したら南西へ徒歩6分。元禄元年創業の蔵元『堀河屋野村』を訪ねよう。",
      image_prompt: "Poetic sumi-ink and watercolor wash illustration of a grand Edo-period temple roof edge and a towering ancient ginkgo tree shedding golden leaves onto stone pavement, quiet reverence, no people, no text"
    },
    {
      name: "堀河屋野村",
      spot_type: "買い物",
      description: "元禄元年（1688年）創業の老舗醤油・味噌蔵元。薪火と杉桶の手麹製法による『三ツ星醤油』と、夏野菜を漬け込む紀州伝統の『径山寺味噌』で知られる。",
      address: "和歌山県御坊市薗743",
      prefecture: "和歌山県",
      city: "御坊市",
      lat: 33.88598,
      lng: 135.154955,
      clue: "日高別院から寺内町の路地を南西へ歩くと、芳醇な醤油もろみと麦麹の香りが漂う『堀河屋野村』の重厚な木造店舗が見えてくる。江戸初期の元禄元年に廻船問屋から醤油・味噌の醸造へと転じて以来、三百三十年以上にわたり伝統の蔵を守り続けてきた名店だ。薪火の平釜で大豆を炊き、職人が手作業で麹を育てて杉桶で熟成させる『三ツ星醤油』と、紀州伝統のなめ味噌『径山寺（きんざんじ）味噌』を手にとってみよう。",
      surprise: "屋号の「堀河屋」は、江戸時代に紀州の産物を江戸の日本橋・堀江町や小網町へと運んだ自前の廻船業に由来しており、現在も当時の手麹製法を一切変えずに醤油を仕込んでいる。",
      hook: "古式醸造の香りに触れたら西南西へ徒歩2分。日高地方の総鎮守『小竹八幡神社』へ参道を進もう。",
      image_prompt: "Atmospheric watercolor and ink illustration of an antique wooden soy sauce cedar barrel (kioke) and a glass bottle of dark amber artisanal soy sauce beside a ceramic dish of Kinzanji miso on a rustic wooden counter, no people, no text"
    },
    {
      name: "小竹八幡神社",
      spot_type: "見どころ",
      description: "御坊市薗に鎮座する旧御坊町の産土神。『日本書紀』に記された神功皇后ゆかりの「小竹宮（しののみや）」伝承地であり、毎年10月の「御坊祭」で賑わう。",
      address: "和歌山県御坊市薗646",
      prefecture: "和歌山県",
      city: "御坊市",
      lat: 33.885291,
      lng: 135.153665,
      clue: "堀河屋野村から西南西へすぐの鳥居をくぐると、地元で「おやっさん」と慕われる日高地方の総鎮守『小竹（しの）八幡神社』の深い社叢が広がる。『日本書紀』に登場する神功皇后ゆかりの「小竹宮」の伝承地とされ、毎年十月の御坊祭では四つ太鼓や屋台が境内を埋め尽くし、紀州随一の熱気に包まれる。大楠が落とす涼やかな木陰の参道を歩いて拝殿に手を合わせ、四百年の寺内町をめぐる道のりを静かに締めくくろう。",
      surprise: "「小竹」と書いて「しの」と読む難読社名は、古代にこの地一帯に篠竹（しのだけ）が群生していたことに由来し、『万葉集』や『日本書紀』にもその名が詠まれている。",
      hook: "",
      image_prompt: "Delicate botanical watercolor illustration of a stone torii gate and moss-covered stone lanterns flanked by ancient camphor trees at Shinohachiman Shrine, soft afternoon light filtering onto the gravel path, no people, no text"
    }
  ]
};
