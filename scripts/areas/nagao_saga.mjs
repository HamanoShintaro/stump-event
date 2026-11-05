export default {
  slug: "nagao_saga",
  line: "JR佐世保線",
  station: "永尾駅",
  station_order: 127,
  area_name: "永尾・黒髪山系の里山と百五十枚の天井絵が眠る鳥海",
  title: "黒髪山を仰ぐ純木造駅から古民家珈琲と天井絵へ",
  description: "奇岩そびえる黒髪山系の懐、佐賀県武雄市山内町のJR佐世保線・永尾駅から鳥海（とのみ）集落へと南東から北西へ歩くルートです。昭和22年築の純木造駅舎が残る永尾駅から、黒髪山系の奇岩を望む犬走の里（永尾公民館）、鳥海川の石積水路が続く里道、築120年の古民家を改装した自家焙煎珈琲店を経て、狩野派絵師・広渡三舟による150枚の極彩色天井絵が奉納された鳥海天満宮へと向かいます。",
  category: "歴史・文化・自然",
  prefecture: "佐賀県",
  budget_tier: 1,
  tags: ["永尾駅", "武雄", "佐世保線", "古民家カフェ", "鳥海天満宮"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of the rural mountain valley of Yamauchi-cho in Takeo, Saga. The 1947 vintage wooden station building of Nagao Station, a 120-year-old kominka coffee roastery with dark timber beams, and vibrant floral ceiling paintings inside Tonomi Tenmangu Shrine with the craggy peaks of Mount Kurokami in the distance. Loose ink linework, granulation watercolor wash, wide unpainted Washi margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "犬走の木造駅と鳥海の百五十枚天井絵を巡る旅人",
    subtitle_en: "Wayfarer of Nagao Wooden Station and Tonomi Ceiling Art",
    description: "JR佐世保線 永尾駅から永尾公民館、鳥海集落の石橋と水路、とのみの HOKAO COFFEE、鳥海天満宮までを巡り歩いた証"
  },
  question: "犬走の純木造駅から鳥海の古民家珈琲、極彩色の天井絵が眠る社まで歩いたなかで、心に残った山内町の風景はどれですか？",
  choices: [
    {
      key: "A",
      text: "昭和二十二年築の『JR佐世保線 永尾駅』に残る、使い込まれた木製ベンチと純木造の駅舎",
      description: "戦後まもなく建てられた木造駅舎の待合室で、単線の列車が山あいを抜ける静かな時間を味わう体験",
      badge: {
        code: "shuin_nagao_wooden_station_bench",
        name_ja: "昭和二十二年築の純木造駅舎を愛でる旅人",
        subtitle_en: "Admirer of Postwar Wooden Station Architecture",
        description: "JR佐世保線 永尾駅で戦後木造駅舎の記憶に触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "犬走の里『永尾公民館』前の辻から見晴らす、田園の向こうに奇岩がそびえる黒髪山系の雄大な稜線",
      description: "鳥海川が流れる山あいの集落から、肥前屈指の霊峰として知られる黒髪山の山容を仰ぎ見るひと時",
      badge: {
        code: "shuin_nagao_kurokami_rail_view",
        name_ja: "黒髪山系の奇岩と犬走の里山を仰ぐ散策者",
        subtitle_en: "Walker of Mount Kurokami Valley",
        description: "犬走の里で黒髪山系と里山の風景に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "築百二十年の古民家『とのみの HOKAO COFFEE』で味わう、自家焙煎珈琲と手作り焼き菓子",
      description: "太い梁と土壁が残る鳥海の古民家で、店内の焙煎機で煎り上げたすっきりとした珈琲を嗜む時間",
      badge: {
        code: "shuin_nagao_hokao_kominka_roast",
        name_ja: "築百二十年の古民家と自家焙煎香を嗜む粋人",
        subtitle_en: "Connoisseur of Kominka Roasted Coffee",
        description: "とのみの HOKAO COFFEEで古民家の焙煎珈琲を味わった証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "『鳥海天満宮』の拝殿を見上げたときに広がる、絵師・広渡三舟が描いた百五十枚の天井絵",
      description: "草木花から蝦・蟹・大根まで色鮮やかに描かれた武雄市重要有形民俗文化財の天井画に出会う瞬間",
      badge: {
        code: "shuin_nagao_tonomi_ceiling_paintings",
        name_ja: "広渡三舟筆の百五十枚天井絵を識る審美家",
        subtitle_en: "Esthete of 150 Shrine Ceiling Paintings",
        description: "鳥海天満宮で狩野派絵師・広渡三舟の天井絵に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "JR佐世保線 永尾駅",
      spot_type: "見どころ",
      description: "昭和22年（1947年）築の純木造駅舎が現役で残るJR佐世保線の無人駅。蓬莱山と黒髪山系に挟まれた山あいの静かな集落に佇む。",
      address: "佐賀県武雄市山内町大字犬走",
      prefecture: "佐賀県",
      city: "武雄市",
      lat: 33.193356,
      lng: 129.980429,
      clue: "武雄温泉駅と有田駅のあいだ、山あいの犬走（いぬばしり）集落にひっそりと佇む『JR佐世保線 永尾（ながお）駅』から散策を始めよう。昭和二十二年の開業時に建てられた純木造の駅舎が今も大切に使われており、木枠の窓や年季の入った木製ベンチに戦後まもない鉄道旅の温もりが静かに息づいている。ホームに立てば蓬莱山の深い緑がすぐ目の前に迫り、単線を走る特急列車が風を切って駆け抜けていく。",
      surprise: "永尾駅は戦時中の昭和十七年に列車行き違いのための「永尾信号場」として開設されたのが始まりで、終戦後の昭和二十二年に地元住民の請願によって旅客駅へと昇格した歴史を持つ。",
      hook: "純木造の駅舎を出たら北北西へ徒歩6分。黒髪山系の山並みを望む『永尾公民館』前の里道へ歩みを進めよう。",
      image_prompt: "Cinematic watercolor background art of the vintage 1947 wooden station house of Nagao Station on the Sasebo Line in Saga. Weathered timber walls, an old wooden bench in the waiting room, and green mountain slopes beyond the platform. Hand-painted brush textures, no people, no text."
    },
    {
      name: "永尾公民館（犬走の里と黒髪山系展望の辻）",
      spot_type: "見どころ",
      description: "永尾駅北側の犬走（いぬばしり）集落の中心にある公民館前の広場。田園の向こうに奇岩そびえる黒髪山系の雄大な山並みを一望できる。",
      address: "佐賀県武雄市山内町大字犬走7381",
      prefecture: "佐賀県",
      city: "武雄市",
      lat: 33.196833,
      lng: 129.979565,
      clue: "鳥海川を渡って北北西へ犬走の集落へ入ると、里道の辻に立つ『永尾公民館』の前に出る。周囲に広がる田園の向こうには、肥前屈指の霊峰として知られる黒髪山系の奇岩と稜線がくっきりと立ち上がっている。",
      surprise: "「犬走（いぬばしり）」や隣の「鳥海（とのみ）」といった山内町の地名は、黒髪山系の険しい渓谷と湧水が織りなす地形に由来し、古くから有田・武雄を結ぶ山あいの街道集落として栄えてきた。",
      hook: "黒髪山の稜線を仰いだら西北西へ徒歩13分。石積みの水路が続く『鳥海集落の石橋と水路』の里道を歩こう。",
      image_prompt: "Transparent watercolor and fountain pen travel sketch of a quiet country crossroads and rural community hall in a rice valley in Saga, with the dramatic rocky peaks of Mount Kurokami rising in the distance. Loose ink lines, soft watercolor washes, no people, no text."
    },
    {
      name: "鳥海集落の石橋と水路",
      spot_type: "見どころ",
      description: "黒髪山系から流れ出る清流・鳥海川と石積みの水路が巡る鳥海集落の里道。古い石垣や切石の小橋が山内町の農村景観を今に伝える。",
      address: "佐賀県武雄市山内町大字鳥海8166-3",
      prefecture: "佐賀県",
      city: "武雄市",
      lat: 33.199395,
      lng: 129.971874,
      clue: "犬走から西北西へ鳥海（とのみ）の集落へ入ると、黒髪山系の山懐から湧き出た清流を引き込む『鳥海集落の石橋と水路』が家々のあいだを縫うように流れている。苔むした野面石の石垣と、水路の上に渡された厚い切石の小橋が幾つも連なり、澄み切った水のせせらぎが静かな集落に心地よく響く。江戸から明治にかけて築かれた石工たちの丁寧な仕事ぶりを足元に確かめながら、古民家が点在する里道へと歩みを進めよう。",
      surprise: "黒髪山系の火山岩（流紋岩や安山岩）は緻密で加工しやすいため、山内町の集落では古くから屋敷周りの石垣や水路の橋板、神社の肥前鳥居に至るまで地元の石材が巧みに用いられてきた。",
      hook: "石積みの水路に沿って西へ徒歩5分。築百二十年の古民家カフェ『とのみの HOKAO COFFEE』を訪ねよう。",
      image_prompt: "Pastel gouache and watercolor illustration of a clear mountain stream running through moss-covered stone walls and a small cut-stone footbridge in a quiet rural village in Saga. Dappled sunlight, wild ferns, unpainted paper margins, no people, no text."
    },
    {
      name: "とのみの HOKAO COFFEE",
      spot_type: "休憩",
      description: "鳥海集落の田園風景のなかに佇む、築120年の古民家を改装した自家焙煎珈琲店。店内の焙煎機で丁寧に煎り上げた珈琲と手作りスイーツを楽しめる。",
      address: "佐賀県武雄市山内町大字鳥海8219",
      prefecture: "佐賀県",
      city: "武雄市",
      lat: 33.198924,
      lng: 129.968825,
      clue: "水路沿いの里道を西へ進むと、のどかな田園風景のなかに築百二十年の古民家をリノベーションした『とのみの HOKAO COFFEE』が見えてくる。明治期からの太い梁や土壁の風合いを生かした店内には焙煎機が据えられ、「胃に負担の少ない、すっきりと飲みやすい珈琲」をモットーに丁寧に煎り上げられた豆の香りが満ちている。窓外の田畑を眺めながら、淹れたてのハンドドリップ珈琲と自家製チーズケーキやスコーンを味わおう。",
      surprise: "店主が一つずつ手作業で欠点豆を取り除いてから浅煎り〜中深煎りに仕上げる珈琲は、冷めても濁りのない澄んだ甘みが続くと評判で、遠方から豆を買いに訪れるファンも多い。",
      hook: "古民家で珈琲を味わったら西北西へ徒歩7分。百五十枚の天井絵が眠る『鳥海天満宮』へ足を運ぼう。",
      image_prompt: "Gouache and colored pencil illustration of a hand-drip coffee cup and a slice of homemade baked cheesecake on a vintage wooden table by a window overlooking green rice paddies inside a 120-year-old Japanese kominka cafe. Warm timber beams, no people, no text."
    },
    {
      name: "鳥海天満宮",
      spot_type: "見どころ",
      description: "鳥海集落の鎮守社。拝殿の天井には武雄領主お抱え絵師の系譜を継ぐ狩野派絵師・広渡三舟が描いた全150枚の彩色天井絵（武雄市重要有形民俗文化財）が奉納されている。",
      address: "佐賀県武雄市山内町大字鳥海8430",
      prefecture: "佐賀県",
      city: "武雄市",
      lat: 33.201034,
      lng: 129.964847,
      clue: "古民家カフェから西北西へ進み、集落の木立に抱かれた『鳥海天満宮』に到着したら、文化十三年の刻銘が残る石鳥居をくぐって拝殿の天井を見上げてみよう。そこには明治三十年代、菅原道真公の没後一千年を記念して拝殿を改築した際に住民たちが奉納した、全百五十枚もの極彩色の「天井絵」（武雄市重要有形民俗文化財）が格子いっぱいに広がっている。四季の草木花から鳥、蝦、蟹、魚、大根に至るまで生き生きと描かれた里山の美意識に圧倒される。",
      surprise: "百五十枚の天井絵を手掛けたのは、武雄領主鍋島家のお抱え絵師・広渡良寛の長男であり狩野派の画技を極めた絵師・広渡三舟（ひろわた さんしゅう）で、花鳥風月だけでなく里の農産物まで題材にした点に鳥海の人々の暮らしへの誇りが表れている。",
      hook: "",
      image_prompt: "Sumi-ink outline and rich mineral pigment wash (tansai) illustration looking up at a wooden coffered shrine ceiling (gottenjo) painted with 150 vibrant botanical flowers, birds, crabs, and radishes at Tonomi Tenmangu Shrine in Takeo, Saga. Atmospheric shrine interior light, no people, no text."
    }
  ]
};
