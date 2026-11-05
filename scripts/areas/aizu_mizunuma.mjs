// 会津水沼エリア定義（JR会津水沼駅から水沼橋、高林寺、第四只見川橋梁、水沼の道祖神へ編）
// 出典:
// - JR会津水沼駅（福島県大沼郡金山町水沼桑畑）: 昭和31年（1956年）開業のJR只見線の無人駅。只見川の北岸に寄り添う。
// - 水沼橋（福島県大沼郡金山町水沼桑畑）: 只見川に架かる国道252号の橋梁。上流の「第四只見川橋梁」と水鏡を望む展望スポット。
// - 高林寺（福島県大沼郡金山町水沼沢西972）: 水沼橋の西詰・沢西地区の山裾に佇む曹洞宗の寺院。
// - 第四只見川橋梁（水沼沢西河畔）（福島県大沼郡金山町水沼沢西）: 只見線を象徴する下路曲弦ワーレントラス橋を間近に見上げる河畔。
// - 水沼の道祖神（水沼僧形道祖神群）（福島県大沼郡金山町水沼赤沢582-1）: 江戸中期（1705〜1722年）造立の金山町指定有形民俗文化財。「耳の神様」として穴あき小石が奉納される。
export default {
  slug: "aizu_mizunuma",
  line: "JR只見線",
  station: "会津水沼",
  station_order: 1,
  area_name: "会津水沼",
  title: "川霧の只見川鉄橋と穴あき小石に祈る水沼の里",
  description: "日本屈指の秘境路線として知られるJR只見線の『会津水沼駅』を降りると、エメラルドグリーンの水を湛えた只見川がすぐ足元をゆったりと流れている。山肌と川面に挟まれた無人駅のホームから出発し、水鏡に映る鉄橋を一望する『水沼橋』、西詰の集落を見守る曹洞宗の古刹『高林寺』、鋼のトラスが迫る『第四只見川橋梁』の河畔を経て、江戸中期から「耳の神様」として穴あき小石が奉納されてきた『水沼の道祖神』へと歩く1.1キロの道のり。",
  category: "自然・景観",
  prefecture: "福島県",
  budget_tier: 1,
  tags: ["会津水沼", "JR只見線", "第四只見川橋梁", "道祖神", "奥会津"],
  eyecatch_prompt: "Cinematic watercolor background art of the Tadami River in Okuaizu Fukushima, emerald-green calm water reflecting a red-and-green steel truss railway bridge and mist-shrouded mountains, small river pebbles with natural holes resting on a mossy stone ledge in the foreground corner, no people, no text, 16:9 aspect ratio",
  completion_badge: {
    name_ja: "奥会津の水鏡と小石の祈りをめぐる旅人",
    subtitle_en: "Wayfarer of Tadami River Mirror and Pebble Shrines",
    description: "JR会津水沼駅から水沼橋、高林寺、第四只見川橋梁、水沼の道祖神までを巡り歩いた証"
  },
  question: "エメラルドグリーンの只見川と水沼集落をめぐる道中で、あなたの胸に深く刻まれた光景はどれですか？",
  choices: [
    {
      key: "A",
      text: "『JR会津水沼駅』の単式ホームから見下ろす只見川のせせらぎと、待合室の駅ノート",
      description: "山肌と川岸のわずかな平地に寄り添う無人駅で、全国から訪れた旅人の言葉に触れるひと時",
      badge: {
        code: "shuin_aizu_mizunuma_pebble_prayer",
        name_ja: "秘境駅のホームと水音に憩う旅人",
        subtitle_en: "Wayfarer of the Quiet Riverside Platform",
        description: "JR会津水沼駅のホームと待合室を訪ねた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『水沼橋』の歩道から望む、鏡のような川面に映り込む第四只見川橋梁の水鏡",
      description: "風が止んだ只見川のエメラルドグリーンの水面に、トラス鉄橋と山影が上下対称に浮かぶ瞬間",
      badge: {
        code: "shuin_aizu_mizunuma_monk_dosojin",
        name_ja: "只見川の水鏡と川霧を仰ぐ識者",
        subtitle_en: "Beholder of the Tadami River Mirror",
        description: "水沼橋から第四只見川橋梁の水鏡を眺めた証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "沢西の山裾に建つ『高林寺』の急勾配な屋根と、河畔から見上げる『第四只見川橋梁』の鋼材",
      description: "豪雪と大水害を乗り越えてきた集落の菩提寺と、不屈の鉄路を支えるトラス橋を間近に仰ぐ体験",
      badge: {
        code: "shuin_aizu_mizunuma_edo_stone_lore",
        name_ja: "不屈の鉄橋と雪国の古刹を辿る粋人",
        subtitle_en: "Walker beneath the Resilient Steel Truss",
        description: "高林寺と第四只見川橋梁の河畔を歩いた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "旧道口の『水沼の道祖神』の足元に供えられた、無数の「穴あき小石」と僧形の石仏",
      description: "江戸中期の宝永・享保年間から続く「耳の神様」への素朴な祈りと小石の奉納を静かに見つめる時間",
      badge: {
        code: "shuin_aizu_mizunuma_old_road_breeze",
        name_ja: "穴あき小石の祈りに耳を澄ます散策者",
        subtitle_en: "Listener to the Pierced River Pebbles",
        description: "水沼の道祖神に込められた民間信仰に触れた証",
        rarity: 3
      }
    }
  ],
  spots: [
    {
      name: "JR会津水沼駅",
      spot_type: "休憩",
      description: "昭和31年（1956年）開業のJR只見線の無人駅。只見川の北岸と急峻な山肌のわずかな平地にホームと待合室が設けられている。",
      address: "福島県大沼郡金山町水沼桑畑",
      prefecture: "福島県",
      city: "大沼郡金山町",
      lat: 37.483135,
      lng: 139.561092,
      clue: "気動車の扉が開いて『JR会津水沼駅』の単式ホームに降り立つと、すぐ眼下にエメラルドグリーンの只見川が静かに広がっている。昭和三十一年に開業したこの無人駅は、切り立った山肌と川岸のわずかな隙間に寄り添うように造られており、ホームを渡る風には清らかな水と草木の匂いが混じる。小さな待合室のベンチでひと息つきながら駅ノートを開き、全国から只見線を訪ねてきた旅人たちの言葉に目を留めてみよう。",
      surprise: "只見川沿いの集落を結ぶこの駅は、かつてダム建設と電源開発に沸いた昭和三十年代に開業し、今も地域の暮らしと鉄道写真愛好家を静かに迎え入れている。",
      hook: "無人駅のホームから川面を眺めたら東南東へ徒歩1分。鉄橋を一望する『水沼橋』へ歩を進めよう。",
      image_prompt: "Transparent watercolor and fountain-pen line illustration of a single-platform rural railway station bench overlooking an emerald river and misty green mountains, wildflowers along the platform edge, no people, no text"
    },
    {
      name: "水沼橋",
      spot_type: "見どころ",
      description: "会津水沼駅のすぐ南で只見川に架かる国道252号の橋。上流側の「第四只見川橋梁」が水面に映り込む絶好の展望スポットとして知られる。",
      address: "福島県大沼郡金山町水沼桑畑",
      prefecture: "福島県",
      city: "大沼郡金山町",
      lat: 37.482793,
      lng: 139.561745,
      clue: "駅から東南東へ坂を下って『水沼橋』の歩道へ出ると、視界が一気に開けて大河のような只見川の渓谷が目の前に現れる。上流側を見渡せば、深い緑の山々を背景に「第四只見川橋梁」の優美な曲弦トラスが川面をまたいでいる。風が止んだ日にはエメラルドグリーンの水面が鏡となって鉄橋と周囲の山影をくっきりと映し出し、夏から秋の朝夕には白い川霧が立ち昇る奥会津随一の水鏡の絶景を心ゆくまで堪能できる。",
      surprise: "只見川で夏場にも幻想的な川霧が頻繁に発生するのは、上流の奥只見ダムなどの底から流れ出る冷たい雪解け水と、夏の暖かい空気との温度差によって水蒸気が凝結するためだ。",
      hook: "水鏡の絶景を目に焼き付けたら橋を渡って南西へ徒歩7分。山裾の古刹『高林寺』を訪ねよう。",
      image_prompt: "Atmospheric watercolor illustration of the view from a bridge handrail looking toward a distant truss railway bridge reflected in a glassy emerald river with wisps of morning river mist, generous negative space, no people, no text"
    },
    {
      name: "高林寺",
      spot_type: "見どころ",
      description: "金山町水沼字沢西にある曹洞宗の寺院。水沼橋の西詰に位置し、豪雪地帯ならではの急勾配の屋根をもつ本堂が集落を見守る。",
      address: "福島県大沼郡金山町水沼沢西972",
      prefecture: "福島県",
      city: "大沼郡金山町",
      lat: 37.480137,
      lng: 139.558664,
      clue: "水沼橋を渡り終えて西詰の沢西地区へ入ると、山裾の木立の中に曹洞宗『高林寺』の本堂が静かに佇んでいる。豪雪に耐える急勾配の屋根と端正な木組みが、水沼集落の歴史を今に伝えている。",
      surprise: "水沼橋の東岸（桑畑）と西岸（沢西）に分かれた水沼の集落において、高林寺は古くから川の両岸に暮らす人々の菩提寺として心のよりどころとなってきた。",
      hook: "山裾の古刹に手を合わせたら西北西へ徒歩8分。『第四只見川橋梁』を間近に見上げる河畔へ向かおう。",
      image_prompt: "Poetic sumi-ink and mineral wash illustration of a steep snow-country temple roof and weathered wooden pillars framed by cedar trees on a quiet hillside in Okuaizu, soft diffused light, no people, no text"
    },
    {
      name: "第四只見川橋梁（水沼沢西河畔）",
      spot_type: "見どころ",
      description: "只見川に架かるJR只見線の代表的なトラス鉄橋。沢西地区の河畔道路から、リベット打ちの鋼材が交差する巨大な橋梁を間近に見上げることができる。",
      address: "福島県大沼郡金山町水沼沢西",
      prefecture: "福島県",
      city: "大沼郡金山町",
      lat: 37.482502,
      lng: 139.554157,
      clue: "高林寺から只見川の南岸に沿って西北西へ歩くと、先ほど水沼橋から遠望した『第四只見川橋梁』のたもとへ近づく。遠くからは風景の一部のように見えた鉄橋も、河畔から見上げるとリベット打ちの鋼材が幾重にも組み合わさった力強い構造美となって頭上に迫る。平成二十三年の新潟・福島豪雨による十一年に及ぶ長期不通期間を乗り越え、再び列車を通すようになった不屈の鉄路の姿を間近に仰ぎ見よう。",
      surprise: "平成二十三年の豪雨災害では只見川の増水により下流の第五・第六・第七只見川橋梁が流失する甚大な被害を受けたが、この第四只見川橋梁は濁流に耐え抜き、令和四年の全線再開を支えた。",
      hook: "鉄橋の迫力を体感したら西へ徒歩3分。旧道口に祀られた『水沼の道祖神』で旅を結ぼう。",
      image_prompt: "Architectural watercolor and ink sketch looking up at the geometric steel truss beams and stone bridge pier of a railway bridge spanning a deep green mountain river, dramatic perspective, no people, no text"
    },
    {
      name: "水沼の道祖神（水沼僧形道祖神群）",
      spot_type: "見どころ",
      description: "金山町水沼字赤沢の旧道口にある江戸中期（1705〜1722年）造立の石仏群。金山町指定有形民俗文化財であり、「耳の神様」として穴あき小石が奉納される。",
      address: "福島県大沼郡金山町水沼赤沢582-1",
      prefecture: "福島県",
      city: "大沼郡金山町",
      lat: 37.482418,
      lng: 139.552207,
      clue: "鉄橋の近くから上田方面へと向かう旧道の下り口へ入ると、小さな祠の中に金山町指定文化財『水沼の道祖神（水沼僧形道祖神群）』がひっそりと並んでいる。江戸中期の宝永二年から享保七年にかけて造られた珍しい僧形の道祖神で、古くから「耳の病気を治す神様」として信仰を集めてきた。石像の足元に目を凝らし、願掛けのために川原で拾い集められた無数の「穴あき小石」に込められた素朴な祈りに触れよう。",
      surprise: "なぜ小石に穴が開いたものを供えるのかといえば、「詰まった耳の通りが小石の穴のようにすっきりと通るように」という切実な願いが込められているためであり、今も新しい小石が静かに添えられている。",
      hook: "",
      image_prompt: "Delicate watercolor and colored pencil close-up illustration of weathered moss-flecked Edo-period stone deity statues with dozens of small river pebbles with natural holes stacked reverently at their base, dappled forest light, no people, no text"
    }
  ]
};
