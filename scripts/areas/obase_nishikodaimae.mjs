export default {
  slug: "obase_nishikodaimae",
  line: "JR日豊本線",
  station: "小波瀬西工大前駅",
  station_order: 135,
  area_name: "小波瀬・豊国の古社と尾倉の手打ちうどん",
  title: "豊国の古社から日豊の鉄路と直火焙煎の町へ",
  description: "周防灘に近い福岡県京都郡苅田町の南端、JR日豊本線・小波瀬西工大前駅周辺を南の新津から北の尾倉へとたどるルートです。豊国造の祖・大原足尼命を祀り千七百年の歴史を誇る大原八幡神社から、昭和19年の信号場開設を起源とする小波瀬西工大前駅、豊前うどんの伝統を受け継ぐ手打の味 小泉 苅田店、直火式ロースターで豆を煎り上げる直火自家焙煎珈琲 煎を経て、早朝から焼きたての香りが漂うパン工房 小麦へと向かいます。",
  category: "日常・ご褒美",
  prefecture: "福岡県",
  budget_tier: 2,
  tags: ["小波瀬西工大前", "苅田町", "日豊本線", "豊前うどん", "自家焙煎珈琲"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of the townscape around Obase-Nishikodaimae Station in Kanda, Fukuoka. A mossy stone torii and camphor grove of Ohara Hachiman Shrine, a commuter train on the Nippo Main Line, a steaming bowl of glossy hand-cut Buzen udon, and a vintage direct-flame coffee roaster. Loose ink linework, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "豊国の古社と尾倉の香りを巡る旅人",
    subtitle_en: "Wayfarer of Toyokuni Shrine and Ogura Craft",
    description: "大原八幡神社からJR日豊本線 小波瀬西工大前駅、手打の味 小泉 苅田店、直火自家焙煎珈琲 煎、パン工房 小麦までを巡り歩いた証"
  },
  question: "千七百年の鎮守の杜から尾倉の手仕事の店々へと続く道の途上で、思わず足が止まった苅田の情景はどれですか？",
  choices: [
    {
      key: "A",
      text: "千七百年の時を刻む『大原八幡神社』の深い楠の杜と、豊国造の祖を祀る静謐な社殿",
      description: "旧仲津郡の総社として崇敬を集めてきた古社の参道を歩き、古代豊国の歴史に触れる時間",
      badge: {
        code: "shuin_obase_ohara_hachiman_ancient",
        name_ja: "豊国造の古社と千年樟の杜を敬う参拝者",
        subtitle_en: "Pilgrim of Ancient Ohara Hachiman Shrine",
        description: "大原八幡神社で古代からの祈りと豊かな社叢に触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "戦時下の信号場から学園の玄関口へと歩んだ、『JR日豊本線 小波瀬西工大前駅』の橋上駅舎",
      description: "小波瀬駅から現在の駅名へと改称された歴史をたどり、日豊本線の列車を見送るひと時",
      badge: {
        code: "shuin_obase_nippo_line_station",
        name_ja: "小波瀬の信号場と学園駅の歩みを識る旅人",
        subtitle_en: "Seeker of Obase Railway History",
        description: "JR日豊本線 小波瀬西工大前駅で鉄路の変遷に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "『手打の味 小泉 苅田店』の透き通るような手打ち麺と、揚げたてのごぼう天が浸る黄金の出汁",
      description: "注文を受けてから茹で上げる艶やかなうどんと、香り高い出汁の旨みを堪能する体験",
      badge: {
        code: "shuin_obase_koizumi_handcut_udon",
        name_ja: "艶やかな手打ちうどんと黄金出汁を愛する食通",
        subtitle_en: "Gourmet of Hand-Cut Buzen Udon",
        description: "手打の味 小泉 苅田店で職人の手打ちうどんを味わった証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "『直火自家焙煎珈琲 煎』の香ばしい直火焙煎の余韻と、『パン工房 小麦』の柔らかな焼きたてパン",
      description: "直火ならではの力強いコクを宿した一杯から、町の朝を支えるパン工房へと巡る瞬間",
      badge: {
        code: "shuin_obase_sen_roastery_komugi",
        name_ja: "直火焙煎の珈琲と街角の麦香を嗜む粋人",
        subtitle_en: "Connoisseur of Direct-Flame Coffee & Bread",
        description: "直火自家焙煎珈琲 煎とパン工房 小麦で尾倉の香りを堪能した証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "大原八幡神社",
      spot_type: "見どころ",
      description: "苅田町新津の杜に鎮座する古社。成務天皇の御代に豊国造の祖・大原足尼命（おおはらのすくねのみこと）を祀ったのが創始と伝わり、旧仲津郡北部の総社として崇敬を集めてきた。",
      address: "福岡県京都郡苅田町新津1427",
      prefecture: "福岡県",
      city: "京都郡苅田町",
      lat: 33.752726,
      lng: 130.969827,
      clue: "周防灘へ注ぐ小波瀬川の北側、新津の穏やかな住宅街の中にこんもりとした常緑樹の森が広がる『大原八幡神社』から歩みを始めよう。社伝によれば千七百年以上前、豊国造の祖である大原足尼命を祀ったことに始まり、天平年間には宇佐神宮から八幡神が勧請されて旧仲津郡十八か村の総社として尊ばれてきた。樹齢を重ねた楠の葉陰が落とす涼やかな参道を歩き、古代の豊前国を治めた豪族の記憶に静かに手を合わせよう。",
      surprise: "毎年秋の神幸祭（新津大原神社神幸祭）では華やかな山車や神輿が繰り出し、かつての仲津郡の総社としての格式と地域の結束を今に伝えている。",
      hook: "千七百年の杜を抜けたら東へ徒歩3分。地域の玄関口である『JR日豊本線 小波瀬西工大前駅』へ向かおう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of the stone torii gate and ancient camphor trees at Ohara Hachiman Shrine in Kanda, Fukuoka. Dappled sunlight on stone steps, mossy lanterns, wide unpainted white paper margins, no people, no text."
    },
    {
      name: "JR日豊本線 小波瀬西工大前駅",
      spot_type: "見どころ",
      description: "昭和19年（1944年）に小波瀬信号場として開設され、昭和23年（1948年）に小波瀬駅へと昇格した日豊本線の駅。平成4年（1992年）に近隣の西日本工業大学にちなんで現駅名に改称された。",
      address: "福岡県京都郡苅田町新津1626-2",
      prefecture: "福岡県",
      city: "京都郡苅田町",
      lat: 33.752905,
      lng: 130.97203,
      clue: "東へ歩くと、日豊本線の線路をまたぐ『JR日豊本線 小波瀬西工大前駅』の駅舎が現れる。戦時下の小波瀬信号場から小波瀬駅を経て大学の最寄り駅へと歩んできた歴史が、行き交う列車とともに息づいている。",
      surprise: "開設当初は苅田港や周辺工場への輸送力増強に伴う信号場として誕生したが、戦後に地元住民の請願によって旅客駅へと昇格し、平成四年に現在の長い駅名へと改められた。",
      hook: "駅前広場から北へ徒歩10分。熟練の手打ち麺が待つ老舗『手打の味 小泉 苅田店』へ足を運ぼう。",
      image_prompt: "Cinematic watercolor background art of the elevated station building and railway tracks of Obase-Nishikodaimae Station on the Nippo Main Line in Fukuoka. Silver commuter train with red accents, open blue sky over Buzen plain, hand-painted brush texture, no people, no text."
    },
    {
      name: "手打の味 小泉 苅田店",
      spot_type: "食事",
      description: "苅田町尾倉の旧国道沿いで長年暖簾を掲げる手打ちうどんの老舗。透き通るような艶とほどよい弾力を持つ自家製手打ち麺と、鰹・昆布の旨みが澄み渡る黄金色の出汁で愛される。",
      address: "福岡県京都郡苅田町尾倉4058-1",
      prefecture: "福岡県",
      city: "京都郡苅田町",
      lat: 33.758629,
      lng: 130.970875,
      clue: "駅から北へ尾倉の町並みを進むと、白地に力強い文字が染め抜かれた暖簾が揺れる『手打の味 小泉 苅田店』が見えてくる。店内の麺打ち場で打たれるうどんは、光を通すような美しい透明感と滑らかな喉ごし、そして噛みしめたときのもちりとした弾力が特徴だ。器から立ち上る鰹と昆布の芳醇な出汁の湯気とともに、香ばしく揚げられたごぼう天や甘辛く煮込まれた肉を絡め、豊前ならではのうどん文化の真髄を堪能しよう。",
      surprise: "北九州から京築（苅田・行橋）にかけての豊前地方は独自のうどん文化が根付く激戦区であり、その中でも手打ちならではの不揃いな麺の口当たりと澄んだ出汁を守り続ける名店として知られる。",
      hook: "手打ちうどんで温まったら東北東へ徒歩8分。直火焙煎の香りが漂う『直火自家焙煎珈琲 煎』へ向かおう。",
      image_prompt: "Gouache and colored pencil food illustration on textured cream paper. A ceramic bowl of translucent glossy hand-cut udon noodles in clear golden dashi broth topped with crispy burdock root tempura (goboten) and green onions in a traditional noodle shop in Kanda, Fukuoka. Partial framing, no people, no text."
    },
    {
      name: "直火自家焙煎珈琲 煎",
      spot_type: "休憩",
      description: "苅田町尾倉3丁目の静かな通りに佇む自家焙煎珈琲専門店。熱風や半熱風ではなく、生豆に直接炎の熱を届ける希少な「直火式焙煎機」を用い、奥行きのある香りとコクを引き出す。",
      address: "福岡県京都郡苅田町尾倉3-14-23",
      prefecture: "福岡県",
      city: "京都郡苅田町",
      lat: 33.759761,
      lng: 130.975864,
      clue: "うどん店から東北東へ尾倉の住宅街へと歩みを進めると、香ばしい珈琲豆のロースト香が風に乗って漂ってくる『直火自家焙煎珈琲 煎（せん）』に到着する。店名の通り、ここでは現在では希少となった直火式の焙煎機を使い、職人が炎の揺らぎと豆の爆ぜる音を見極めながら少量ずつ丁寧に煎り上げている。直火焙煎ならではの立体的な香ばしさと、冷めるにつれて甘みが際立つ珠玉の一杯を静かな店内でゆっくりと味わおう。",
      surprise: "穴の開いたドラム越しに生豆へ直接ガス火を当てる直火焙煎は、火加減が難しく高度な技術を要する一方、豆の芯まで力強い香味とクリーンな後味を宿すことができる伝統的な手法だ。",
      hook: "直火焙煎の余韻を楽しんだら北西へ徒歩7分。焼きたてのパンが並ぶ街のベーカリー『パン工房 小麦』を訪ねよう。",
      image_prompt: "Transparent watercolor and fountain pen illustration of a vintage direct-flame coffee roaster drum and a porcelain cup of dark-roast coffee on a polished wooden counter in a quiet roastery cafe in Kanda, Fukuoka. Loose ink lines, warm amber tones, no people, no text."
    },
    {
      name: "パン工房 小麦",
      spot_type: "買い物",
      description: "苅田町尾倉で早朝から営業する地域密着の手作りパン工房。耳まで柔らかい食パンや、自家製カスタードのクリームパン、昔ながらの調理パンなど毎日食べたくなるパンが揃う。",
      address: "福岡県京都郡苅田町尾倉3415-1",
      prefecture: "福岡県",
      city: "京都郡苅田町",
      lat: 33.762394,
      lng: 130.97285,
      clue: "直火自家焙煎珈琲の店から北西へ歩くと、赤いひさしと温かな木の看板が目印の『パン工房 小麦』が迎えてくれる。まだ町が動き出す前の早朝からオーブンに火が入り、焼き上がったばかりの食パンやロールパン、具材がぎっしり詰まったサンドイッチや惣菜パンが次々と棚を埋めていく。奇をてらわない丁寧な生地づくりから生まれるふんわりと優しい口当たりのパンを手に取り、小波瀬から尾倉へと歩いた小さな旅を締めくくろう。",
      surprise: "地元の学生や工場へ向かう人々、近隣の家族連れがそれぞれの時間帯に立ち寄る町のパン屋として親しまれ、素朴で飽きのこない味わいが長年地域の日常を支えている。",
      hook: "",
      image_prompt: "Pastel gouache and botanical watercolor illustration of soft golden milk loaves, cream buns, and savory sandwiches lined up on wooden shelves in a cozy morning neighborhood bakery in Kanda, Fukuoka. Soft morning light, unpainted white paper margins, no people, no text."
    }
  ]
};
