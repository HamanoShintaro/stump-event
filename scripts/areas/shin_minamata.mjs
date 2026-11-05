export default {
  slug: "shin_minamata",
  line: "九州新幹線",
  station: "新水俣駅",
  station_order: 145,
  area_name: "新水俣・不知火の玄関口と水俣城跡と美貴もなかの道",
  title: "不知火の風が通る新水俣駅から水俣城跡と老舗最中へ",
  description: "九州新幹線と肥薩おれんじ鉄道が交差する熊本県南の玄関口・新水俣駅。水俣の海の幸・山の幸が集まる駅構内の観光物産館を起点に、旧薩摩街道の歴史を伝える古城3丁目の坂道、肥後一宮の分霊を祀る陣内阿蘇神社、相良氏・島津氏・加藤清正が覇を競った中世山城「水俣城跡（城山公園）」、そして昭和8年（1933年）創業の老舗・柳屋本舗が守り続ける銘菓「美貴もなか」へと、東の初野から西の古城・陣内へ一直線に辿るルートです。",
  category: "歴史・文化",
  prefecture: "熊本県",
  budget_tier: 1,
  tags: ["新水俣", "九州新幹線", "肥薩おれんじ鉄道", "水俣城跡", "美貴もなか"],
  eyecatch_prompt: "A warm transparent watercolor and fountain pen sketchbook illustration of Minamata, Kumamoto, showing a sleek high-speed railway viaduct against green hills, a mossy stone wall and plum trees on the historic Minamata Castle hilltop park (Kojo), and a classic hexagonal sweet red-bean monaka wafer beside a teacup. Soft southern Kyushu sunlight, Washi paper margins, no text, no people.",
  completion_badge: {
    name_ja: "不知火の鉄路と水俣古城の記憶を辿る旅人",
    subtitle_en: "Wayfarer of Shin-Minamata Rail and Kojo Castle Heritage",
    description: "新水俣駅から水俣古城簡易郵便局、陣内阿蘇神社、水俣城跡、柳屋本舗 本店までを巡り歩いた証"
  },
  question: "不知火の潮風が通う初野の台地から中世の水俣城跡・陣内へと向かう途上で、あなたが手土産に持ち帰りたくなった水俣の魅力はどれですか？",
  choices: [
    {
      key: "A",
      text: "九州新幹線と肥薩おれんじ鉄道が立体交差し、甘夏や和紅茶が並ぶ『新水俣駅（まつぼっくり）』",
      description: "弥生時代の初野貝塚が眠る台地の上で、不知火海沿岸の特産品と二つの鉄路が旅人を迎える玄関口",
      badge: {
        code: "shuin_shin_minamata_station_matsubokkuri",
        name_ja: "不知火の恵みと交差する鉄路を愛でる旅人",
        subtitle_en: "Explorer of Shiranui Gifts and Crossing Rails",
        description: "新水俣駅の観光物産館まつぼっくりで水俣の地場産品と鉄路に触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "初野の谷から「古城」の丘陵へと地名が切り替わる坂道と、『陣内阿蘇神社』の静かな石鳥居",
      description: "戦国の陣屋跡に由来する陣内と古城の境で、肥後一宮・阿蘇の神々を祀る鎮守の杜に手を合わせるひと時",
      badge: {
        code: "shuin_shin_minamata_kojo_jinnai_aso",
        name_ja: "古城の坂道と陣内阿蘇の杜を歩む探訪者",
        subtitle_en: "Walker of Kojo Slope and Jinnai Aso Shrine",
        description: "水俣古城簡易郵便局前の坂道と陣内阿蘇神社で城下の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "相良氏・島津氏の激戦と加藤清正の石垣の記憶をとどめる『水俣城跡（城山公園・加藤神社）』",
      description: "南北朝時代から肥後最南端の国境を守った山城の丘で、破城を免れた石積みや深い古井戸を覗き込む瞬間",
      badge: {
        code: "shuin_shin_minamata_castle_ruins_kiyomasa",
        name_ja: "国境の山城・水俣城の石垣と古井戸を識る粋人",
        subtitle_en: "Connoisseur of Minamata Castle Stone Walls",
        description: "水俣城跡（城山公園）で相良・島津・加藤清正ゆかりの城郭遺構に触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "昭和八年創業の『柳屋本舗 本店』で、六角形の皮から溢れんばかりに詰まった手練り粒あんの「美貴もなか」",
      description: "城山の北西麓で九十余年暖簾を守る老舗を訪ね、職人が銅釜で炊き上げるずっしり重い最中を味わう時間",
      badge: {
        code: "shuin_shin_minamata_yanagiya_miki_monaka",
        name_ja: "九十余年の手練り餡・美貴もなかを味わう甘味人",
        subtitle_en: "Taster of Hand-Kneaded Miki Monaka",
        description: "柳屋本舗 本店で水俣銘菓・美貴もなかの伝統の技に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "九州新幹線・肥薩おれんじ鉄道 新水俣駅（みなまた観光物産館 まつぼっくり）",
      spot_type: "買い物",
      description: "平成16年（2004年）3月の九州新幹線部分開業とともに誕生した駅。高架の新幹線と地上の肥薩おれんじ鉄道が交差し、1階の「みなまた観光物産館 まつぼっくり（新水俣駅店）」では水俣茶（和紅茶）や甘夏、海産物などの特産品を販売している（9:00〜17:00営業）。",
      address: "熊本県水俣市初野305-1",
      prefecture: "熊本県",
      city: "水俣市",
      lat: 32.211004,
      lng: 130.42906,
      clue: "高架の九州新幹線と地上の肥薩おれんじ鉄道が立体交差する『新水俣駅』の改札を出ると、一階に「みなまた観光物産館 まつぼっくり」が店を構えている。温暖な不知火海の潮風と山霧が育てた水俣の甘夏や、香り高い水俣和紅茶、ちりめんなどの地場産品が所狭しと並び、県南の豊かな風土を伝えてくれる。これから向かう中世の水俣城跡への歩みを前に、水俣ならではの山の幸や海の幸を手にとって眺めてみよう。",
      surprise: "新水俣駅が建つ「初野（はつの）」地区は、すぐ東隣の初野神社境内に弥生時代中・後期の「初野貝塚」が眠る古代からの定住地でもある。",
      hook: "物産館で水俣の恵みに触れたら南西へ徒歩17分。初野から中世の城下へと町名が切り替わる『水俣古城簡易郵便局』前の坂道へ向かおう。",
      image_prompt: "Soft watercolor and ink sketch of the bright concourse entrance of Shin-Minamata Station in Kumamoto, featuring a cozy local specialty corner with crates of golden Amanatsu citrus, Minamata black tea tins, and a glimpse of the elevated railway viaduct outside. No text."
    },
    {
      name: "水俣古城簡易郵便局（古城3丁目の坂道と城下東口）",
      spot_type: "見どころ",
      description: "新水俣駅のある初野地区から、中世・水俣城が築かれた「古城（こじょう）」地区へと入る古城3丁目の坂道に佇む簡易郵便局（外観見学）。水俣川と湯出川に挟まれた河岸段丘の地形と城下東口の面影を伝える。",
      address: "熊本県水俣市古城3丁目419-2",
      prefecture: "熊本県",
      city: "水俣市",
      lat: 32.204921,
      lng: 130.420998,
      clue: "新水俣駅の西口から南西へ進み、水俣川支流の谷を渡って緩やかな坂道へ差し掛かると、町名が初野から「古城（こじょう）」へと変わり『水俣古城簡易郵便局』の小さな看板が見えてくる。この「古城」という町名は、南北朝時代から安土桃山時代にかけてこの先の丘陵にそびえていた肥後最南端の要害・水俣城に由来している。河岸段丘の起伏を肌で感じながら、中世の城下町の外縁へと足を踏み入れよう。",
      surprise: "かつて薩摩街道（出水筋）が通ったこの一帯は、肥後と薩摩の国境を守る最前線として幾度も歴史の表舞台となった土地として知られる。",
      hook: "古城三丁目の坂道を抜けて西北西へ徒歩6分。城山の南東麓を守護する『陣内阿蘇神社』を訪ねよう。",
      image_prompt: "Pastel gouache and colored pencil illustration of a gentle sloping neighborhood street in Kojo, Minamata, showing a retro small community post office sign, stone retaining walls, and green castle hills rising in the background under a warm Kyushu sky. No text."
    },
    {
      name: "陣内阿蘇神社",
      spot_type: "見どころ",
      description: "水俣城跡（城山公園）の南東麓、古城1丁目と陣内の境に鎮座する古社。肥後国一宮・阿蘇神社の主祭神である健磐龍命と阿蘇津姫命を勧請して祀り、地域の鎮守として信仰を集める。",
      address: "熊本県水俣市古城1丁目13-21",
      prefecture: "熊本県",
      city: "水俣市",
      lat: 32.206297,
      lng: 130.417644,
      clue: "古城三丁目から西北西へ進むと、城山の麓の静かな通りに石鳥居を構える『陣内阿蘇神社』が現れる。肥後国一宮・阿蘇神社の神々を勧請した古社で、戦国の陣屋跡に由来する陣内・古城の鎮守に参拝しよう。",
      surprise: "隣接する「陣内（じんない）」という町名は、戦国時代の水俣城攻防戦の際に武将たちの陣営（陣屋）が構えられたことに由来すると伝えられている。",
      hook: "鎮守の社に参拝したら北西へ徒歩6分。相良氏・島津氏・加藤清正の歴史が交錯した『水俣城跡（城山公園）』へ上ろう。",
      image_prompt: "Transparent watercolor and fountain pen sketch of a quiet stone torii and wooden worship hall of Jinnai Aso Shrine at the wooded foot of a castle hill in Minamata, with dappled sunlight on the stone steps. Serene brushwork, no text."
    },
    {
      name: "水俣城跡（城山公園・加藤神社）",
      spot_type: "見どころ",
      description: "南北朝時代の至徳2年（1385年）の文書にも見える中世山城・水俣城の跡を整備した公園。戦国時代に相良氏と島津氏が激戦を繰り広げ、関ヶ原後に加藤清正の支城として整備された。園内に石垣の一部や古井戸、加藤神社が残る。",
      address: "熊本県水俣市古城1丁目353",
      prefecture: "熊本県",
      city: "水俣市",
      lat: 32.208688,
      lng: 130.414703,
      clue: "陣内阿蘇神社から北西へ進み、緑豊かな城山の石段を上ると、南北朝時代から肥後南端の要衝だった『水俣城跡（城山公園・加藤神社）』の本丸広場へ出る。天正九年に薩摩の島津義弘の大軍が包囲して人吉の相良氏と激闘を繰り広げ、関ヶ原の戦いの後には肥後藩主・加藤清正の支城として近世の石垣が築かれた名城だ。園内に残る深い古井戸や石垣の遺構、清正公を祀る加藤神社を巡り、国境の城の歳月を辿ろう。",
      surprise: "慶長十七年の一国一城令で廃城となった後、細川氏によって石垣を崩す「破城（はじょう）」が徹底的に行われたが、今も城山の随所に石積みや曲輪の段差が残っている。",
      hook: "城山の遺構を巡ったら西北西へ徒歩5分。昭和八年創業の老舗『柳屋本舗 本店』で名物の美貴もなかに出会い散策を結ぼう。",
      image_prompt: "Sumi-ink and mineral wash illustration of the mossy stone remnants and ancient stone well on the hilltop of Minamata Castle Ruins (Shiroyama Park), framed by old plum trees and overlooking the town below. Atmospheric and historical, no text."
    },
    {
      name: "柳屋本舗 本店（美貴もなか）",
      spot_type: "買い物",
      description: "昭和8年（1933年）創業、城山公園の北西麓・陣内1丁目に暖簾を掲げる老舗和菓子店。北海道十勝産小豆を毎日手練りで炊き上げた粒あんを六角形の最中皮にたっぷり詰めた看板銘菓「美貴もなか」や羊羹で知られる（8:30〜17:00営業、不定休）。",
      address: "熊本県水俣市陣内1丁目9-27",
      prefecture: "熊本県",
      city: "水俣市",
      lat: 32.209475,
      lng: 130.411461,
      clue: "城山公園から坂を下りて西北西へ進むと、陣内一丁目の通りに昭和八年創業の老舗和菓子店『柳屋本舗 本店（美貴もなか）』が暖簾を掲げている。水俣を代表する銘菓として愛される「美貴もなか」は、北海道十勝産の小豆を熟練の職人が銅釜で丁寧に手練りした艶やかな粒あんを、香ばしい六角形の皮にこれでもかと贅沢に詰めた逸品だ。手に持つとずっしりとした重みが伝わる伝統の最中を味わい、新水俣の歩みを甘く結ぼう。",
      surprise: "割った瞬間に溢れんばかりの手練り粒あんが姿を現す美貴もなかは、創業以来九十余年にわたり地元客だけでなく県外からわざわざ買いに訪れるファンが絶えない。",
      hook: "",
      image_prompt: "Warm gouache and colored pencil close-up illustration of Minamata’s famous Miki Monaka: a crisp golden-brown hexagonal wafer shell split open to reveal glossy, generously packed hand-kneaded sweet red bean paste, served on a ceramic dish beside green tea. Appetizing, no text."
    }
  ]
};
