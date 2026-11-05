export default {
  slug: "suetsune",
  line: "JR山陰本線",
  station: "末恒駅",
  station_order: 126,
  area_name: "末恒・伏野砂丘と日本海の潮風",
  title: "因幡の潮風と白兎の丘に発酵の香りを訪ねる",
  description: "鳥取砂丘と白兎海岸のあいだ、日本海の潮風が吹き抜けるJR山陰本線・末恒駅周辺を南の美萩野の丘から北の伏野海岸へとたどるルートです。自家製自然発酵種で焼き上げる住宅街の小さなパン工房から、約3,000株の紫陽花がすり鉢状の斜面を彩る公園、跨線橋より日本海の水平線を望む末恒駅、飛砂を防ぐ黒松の社叢に守られた伏野神社を経て、白兎海岸の海原を一望する高台のカフェレストランへと向かいます。",
  category: "自然・海辺",
  prefecture: "鳥取県",
  budget_tier: 2,
  tags: ["末恒", "鳥取", "山陰本線", "日本海", "白兎海岸"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of the coastal sand-dune hills around Suetsune Station in Tottori, Japan. A quiet railway overpass looking toward the deep cobalt Sea of Japan, black pine trees swaying in the sea breeze along Fushino, and a warm wooden seaside cafe window reflecting the horizon. Loose ink linework, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "因幡の潮風と砂丘の松林を歩む旅人",
    subtitle_en: "Wayfarer of Inaba Sea Breeze and Pine Dunes",
    description: "天然酵母パン nichiから美萩野あじさい公園、JR山陰本線 末恒駅、伏野神社、カフェレスト サブレまでを巡り歩いた証"
  },
  question: "美萩野の丘から伏野の海辺まで五つの風景を巡り終えて、手元の手帳に書き留めておきたい情景はどれですか？",
  choices: [
    {
      key: "A",
      text: "『天然酵母パン nichi』の小さな工房に満ちる、りんごや人参の自然発酵種が醸す小麦の香り",
      description: "美萩野の丘の住宅街で、果物や野菜から育てた自家製酵母で丁寧に焼き上げるパンに触れる時間",
      badge: {
        code: "shuin_suetsune_nichi_natural_yeast",
        name_ja: "自然発酵のパンと丘の風を愛でる人",
        subtitle_en: "Admirer of Natural Yeast Bread",
        description: "天然酵母パン nichiで自家製酵母の手仕事に触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『美萩野あじさい公園』のすり鉢状の斜面を揺らす潮風と、『JR山陰本線 末恒駅』の跨線橋から望む海",
      description: "約三千株の紫陽花が植えられた緑地を抜けて、単線駅の跨線橋から日本海の水平線を見晴らす体験",
      badge: {
        code: "shuin_suetsune_hydrangea_overpass_sea",
        name_ja: "紫陽花の谷と跨線橋の水平線を識る旅人",
        subtitle_en: "Seeker of Hydrangea Hills and Sea Horizon",
        description: "美萩野あじさい公園と末恒駅で海辺の丘陵風景を歩いた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "日本海の飛砂から集落を守り続けてきた、『伏野神社』の深い黒松の社叢と苔むした石灯籠",
      description: "冬の北西風と砂を受け止める防風林の奥で、海辺の村の祈りを伝える古社に佇むひと時",
      badge: {
        code: "shuin_suetsune_fushino_black_pine",
        name_ja: "飛砂を防ぐ黒松の杜と古社を敬う参拝者",
        subtitle_en: "Pilgrim of the Coastal Black Pine Shrine",
        description: "伏野神社で砂丘地の社叢と信仰の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "『カフェレスト サブレ』の窓辺いっぱいに広がる因幡の海原と、珈琲の香りに重なる白い波頭",
      description: "白兎海岸へと続くコバルトブルーの日本海を見下ろす高台の席で、潮騒とともに珈琲を味わう瞬間",
      badge: {
        code: "shuin_suetsune_sable_ocean_window",
        name_ja: "白兎の海原と海辺の珈琲を嗜む粋人",
        subtitle_en: "Connoisseur of Seaside Window Horizons",
        description: "カフェレスト サブレで日本海の絶景と珈琲を堪能した証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "天然酵母パン nichi",
      spot_type: "買い物",
      description: "美萩野の住宅街に佇む小さな天然酵母パン工房。りんご・人参・長芋・米などを培地にした自家製自然発酵種（楽健寺酵母）で風味豊かなパンを焼き上げる。",
      address: "鳥取県鳥取市美萩野4丁目1001-2",
      prefecture: "鳥取県",
      city: "鳥取市",
      lat: 35.518949,
      lng: 134.13332,
      clue: "日本海を見下ろす美萩野四丁目の穏やかな坂道から歩みを始めると、住宅街の一角に小さなパン工房『天然酵母パン nichi（ニチ）』が佇んでいる。りんごや人参、鳥取特産の長芋、ごはんなどを培地にしてじっくり育てた自家製自然発酵種（楽健寺酵母）を使い、国産小麦の甘みと芳醇な香りを引き出したパンを一つずつ丁寧に焼き上げている。噛みしめるほどに滋味が増す素朴なパンを手に取り、潮風薫る丘の散策へ踏み出そう。",
      surprise: "楽健寺酵母は野菜や果物をすりおろして発酵させる独自の自然酵母で、一般的なイーストに比べて熟成に何倍もの時間がかかる分、しっとりともちもちした独特の食感と深い余韻が生まれる。",
      hook: "自然発酵のパンを手に入れたら東北東へ徒歩5分。約三千株の紫陽花が斜面を包む『美萩野あじさい公園』へ向かおう。",
      image_prompt: "Gouache and colored pencil food illustration on textured cream paper. Rustic natural-yeast country loaves and round buns arranged in a woven basket beside a small glass jar of fruit-and-vegetable starter in a sunlit home bakery in Tottori. Partial framing, no people, no text."
    },
    {
      name: "美萩野あじさい公園",
      spot_type: "見どころ",
      description: "末恒駅の南側に広がるすり鉢状の地形を活かした緑地公園。住民の手で約3,000株もの紫陽花が植えられ、四季を通じて日本海からの涼風が木立を抜ける。",
      address: "鳥取県鳥取市美萩野3丁目100",
      prefecture: "鳥取県",
      city: "鳥取市",
      lat: 35.520006,
      lng: 134.136536,
      clue: "東北東へ歩くと、すり鉢状の谷間に約三千株の紫陽花が植えられた『美萩野あじさい公園』が広がる。住民の手で育てられた斜面の花株が日本海からの涼風にそよぎ、丘陵の緑陰が心地よい。",
      surprise: "もともとは住宅団地造成時に残されたすり鉢状の公共空地だったが、地域住民が長い年月をかけて紫陽花を挿し木して育て上げ、初夏には谷全体が青や紫に染まる名所となった。",
      hook: "緑陰の階段を抜けたら北へ徒歩7分。跨線橋から日本海を望む『JR山陰本線 末恒駅』へ進もう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of a terraced hillside park filled with lush hydrangea bushes and stone steps in Mihagino, Tottori. Soft dappled sunlight filtering through coastal trees, gentle sea breeze, unpainted paper edges, no people, no text."
    },
    {
      name: "JR山陰本線 末恒駅",
      spot_type: "見どころ",
      description: "昭和3年（1928年）に開業した、湖山池と白兎海岸のあいだに位置する山陰本線の駅。ホームを結ぶ跨線橋からは防風林の向こうに日本海の水平線を望める。",
      address: "鳥取県鳥取市伏野304",
      prefecture: "鳥取県",
      city: "鳥取市",
      lat: 35.524019,
      lng: 134.135875,
      clue: "美萩野の緑深い丘を下りきると、砂丘地を一直線に貫く山陰本線の鉄路の上に『JR山陰本線 末恒駅』が現れる。昭和三年に開業したこの駅は、日本最大の池とされる湖山池と神話の舞台・白兎海岸のちょうど中間に位置している。上下線のホームを結ぶ古い跨線橋の階段を上り、小さな窓から北側を見晴らせば、黒松の防風林の向こうに深いコバルトブルーを湛えた日本海の水平線が鮮やかに浮かび上がってくる。",
      surprise: "駅名の「末恒（すえつね）」は明治二十二年の町村制施行時に周辺の伏野・三津・美萩野などの村々が合併して誕生した旧・気高郡末恒村に由来し、中世の荘園名や武士の名を今に伝えている。",
      hook: "跨線橋から水平線を眺めたら西へ徒歩14分。飛砂を防ぐ黒松の杜に鎮座する『伏野神社』を訪ねよう。",
      image_prompt: "Cinematic watercolor background art of a quiet local railway station platform and footbridge on the Sanin Main Line in Tottori. Through the footbridge window, dark green coastal pine trees and a glimpse of the distant blue Sea of Japan horizon. Hand-painted brush texture, no people, no text."
    },
    {
      name: "伏野神社",
      spot_type: "見どころ",
      description: "伏野砂丘の松林の懐に鎮座する村の鎮守社。日本海から吹きつける北西風と飛砂から集落を守ってきた黒松の社叢に抱かれ、海辺の暮らしの祈りを伝える。",
      address: "鳥取県鳥取市伏野2255",
      prefecture: "鳥取県",
      city: "鳥取市",
      lat: 35.525296,
      lng: 134.12639,
      clue: "末恒駅から西へ、潮の香りを頼りに伏野の集落を進むと、こんもりとした黒松の森に抱かれた『伏野神社』の石鳥居が見えてくる。冬場に日本海から吹きつける烈風と飛砂を受け止めるように太い幹をくねらせた黒松の社叢が境内を幾重にも守り、参道に足を踏み入れると外海の波音がすっと遠のいていく。砂地に根を張る松の葉陰と苔むした石灯籠のたたずまいから、厳しい海辺の自然とともに生きてきた人々の祈りを感じよう。",
      surprise: "伏野から白兎にかけての海岸砂丘地では、江戸時代から飛砂による農地埋没を防ぐため藩を挙げて黒松の植林が行われ、神社の社叢はその防砂林の核として大切に守られてきた。",
      hook: "黒松の杜を抜けたらすぐ北北西へ徒歩2分。日本海を一望する高台の『カフェレスト サブレ』へ向かおう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of a coastal Shinto shrine nestled among twisted black pine trees on sandy soil in Tottori. Weathered stone lantern and torii gate shadow, dappled afternoon light, atmospheric negative space, no people, no text."
    },
    {
      name: "カフェレスト サブレ",
      spot_type: "休憩",
      description: "伏野海岸から神話の舞台・白兎海岸へと続く海岸線を見晴らす高台のカフェレストラン。大きな窓いっぱいに広がる日本海のコバルトブルーを眺めながら珈琲や軽食を楽しめる。",
      address: "鳥取県鳥取市伏野1160",
      prefecture: "鳥取県",
      city: "鳥取市",
      lat: 35.526345,
      lng: 134.125976,
      clue: "伏野神社の杜を抜けて北北西へ国道を渡ると、海岸段丘の縁に建つペンション併設の『カフェレスト サブレ』が迎えてくれる。店内の海側に設けられた大きな窓の前に座れば、眼下の伏野海岸から神話「因幡の白うさぎ」の舞台である白兎海岸の気多ノ前（けたのさき）まで、弧を描く砂浜と白い波頭がパノラマで広がる。熱い珈琲の湯気の向こうで刻々と表情を変える日本海の碧さを眺めながら、潮風の道のりをゆっくりと振り返ろう。",
      surprise: "店名の「サブレ（Sable）」はフランス語で「砂」を意味しており、鳥取砂丘から白兎海岸へと連なる因幡の白砂の浜辺に寄り添う海辺の止まり木として名付けられた。",
      hook: "",
      image_prompt: "Transparent watercolor and fountain pen illustration of a cozy seaside cafe table by a large window overlooking the cobalt blue Sea of Japan and white surf along the Tottori coast. A porcelain cup of hot coffee and toasted sandwich on the table, warm indoor light contrasting with the vast ocean horizon, no people, no text."
    }
  ]
};
