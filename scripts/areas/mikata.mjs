export default {
  slug: "mikata",
  line: "JR小浜線",
  station: "三方駅",
  station_order: 138,
  area_name: "三方・若狭うなぎと片手観音の参道",
  title: "三方五湖の炭火うなぎから弘法大師の片手観音へ",
  description: "7万年分の年縞（ねんこう）を湖底に刻む三方五湖の南畔、JR小浜線・三方駅周辺を南から北へと縦断するルートです。昭和7年創業の老舗・うなぎや 源与門で炭火焼きのうなぎを味わい、三方五湖の玄関口・JR小浜線 三方駅、老舗和食店を孫世代が再生したcafe bambooを経て、延喜式内社の御方神社と弘法大師空海が一夜で彫った花崗岩の磨崖仏・三方石観世音へと向かいます。",
  category: "歴史・文化",
  prefecture: "福井県",
  budget_tier: 3,
  tags: ["三方", "JR小浜線", "三方五湖", "うなぎ", "三方石観世音"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of Mikata near the Mikata Five Lakes in Wakasa, Fukui. Charcoal-grilled unagi eel over rice in a lacquer box, a quiet local railway station, a Zen temple gate, and a mossy mountain pavilion housing a granite cliffside Kannon statue with wooden hand-and-foot votive plaques. Loose ink linework, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "三方の湖風と片手観音の霊水を訪ねる旅人",
    subtitle_en: "Wayfarer of Mikata Unagi and Katate-Kannon",
    description: "うなぎや 源与門からJR小浜線 三方駅、cafe bamboo、御方神社、三方石観世音までを巡り歩いた証"
  },
  question: "三方湖の恵みと観音霊場へ続く参道の風景のなかで、あなたの胸に余韻を残したのはどの情景ですか？",
  choices: [
    {
      key: "A",
      text: "昭和七年創業の『うなぎや 源与門』で立ち上る、備長炭と秘伝ダレの香ばしい煙",
      description: "三方の名水で締められた肉厚のうなぎが、皮はパリッと身はふっくら焼き上がるのを待つ時間",
      badge: {
        code: "shuin_mikata_genyomon_charcoal_unagi",
        name_ja: "若狭三方の炭火うなぎを味わう美食家",
        subtitle_en: "Gourmet of Wakasa Mikata Charcoal-Grilled Unagi",
        description: "うなぎや 源与門で昭和七年から受け継がれるうなぎ料理を堪能した証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "とんがり屋根が旅人を迎える『JR小浜線 三方駅』と、七万年の時を刻む三方五湖・水月湖の記憶",
      description: "大正七年開業の湖畔の駅から、世界標準ものさし「年縞」を生んだ三方五湖の風を感じるひと時",
      badge: {
        code: "shuin_mikata_station_and_garyuin",
        name_ja: "若狭路の鉄路と三方五湖の風を識る旅人",
        subtitle_en: "Traveler of Obama Line and Five Lakes Breeze",
        description: "JR小浜線 三方駅で三方五湖の玄関口の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "老舗和食店『竹の子』の記憶を受け継ぎ、三代目が開いた『cafe bamboo』の香り高い珈琲と甘味",
      description: "祖父母の代から地域に愛された店の面影を残す空間で、手作りのスイーツに心をほどく時間",
      badge: {
        code: "shuin_mikata_cafe_bamboo_heritage",
        name_ja: "竹の子の記憶を継ぐカフェで寛ぐ粋人",
        subtitle_en: "Connoisseur of Cafe Bamboo's Generational Warmth",
        description: "cafe bambooで三方の家族の物語と喫茶の時間に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "延喜式内社『御方神社』の二棟並んだ本殿と、弘法大師が一夜で刻んだ『三方石観世音』の片手観音",
      description: "「三方」の地名を伝える古社を抜け、花崗岩の巨石に彫られた磨崖仏と木製の御手足に祈りを重ねる瞬間",
      badge: {
        code: "shuin_mikata_ishikanzeon_katate_kannon",
        name_ja: "式内社の杜と片手観音の霊水を敬う参拝者",
        subtitle_en: "Pilgrim of Mikata Shrine and Stone Kannon",
        description: "御方神社と三方石観世音で千年を超える信仰に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "うなぎや 源与門",
      spot_type: "食事",
      description: "昭和7年（1932年）創業、三方駅から徒歩圏内に暖簾を掲げるうなぎ料理の老舗。腹開きにしたうなぎを蒸さずに備長炭の強火で地焼きし、創業以来継ぎ足す秘伝のタレで香ばしく仕上げるうな重やせいろ蒸しが名物。",
      address: "福井県三方上中郡若狭町三方52-6",
      prefecture: "福井県",
      city: "三方上中郡若狭町",
      lat: 35.552502,
      lng: 135.910593,
      clue: "三方駅の南、国道沿いに炭火と醤油ダレの芳しい香りを漂わせるのが、昭和七年創業の『うなぎや 源与門（げんよもん）』だ。三方五湖の畔で育まれた三方のうなぎ文化を九十余年にわたり牽引してきたこの老舗では、職人が腹開きにしたうなぎを蒸さずに炭火で一気に焼き上げる関西風の「地焼き」を貫く。パリッと香ばしい皮目と、創業以来の甕（かめ）で継ぎ足されてきた濃厚なタレが絡むうな重で旅の幕を開けよう。",
      surprise: "三方湖は淡水と海水が混じり合う汽水湖群の上流にあたり、古くから口先が細く腹が青みがかった天然の「口細青鰻（くちぼそあおうなぎ）」の銘産地として全国に名を馳せてきた。",
      hook: "炭火焼きのうなぎを堪能したら北北西へ徒歩6分。三方五湖への玄関口『JR小浜線 三方駅』へ向かおう。",
      image_prompt: "Gouache and colored pencil food illustration on textured cream paper. A rectangular black-and-red lacquerware unaju box opened to reveal glossy charcoal-grilled eel fillets over steamed rice, accompanied by a small wooden sansho pepper mill and clear soup. Partial close-up framing, warm lighting, no people, no text."
    },
    {
      name: "JR小浜線 三方駅",
      spot_type: "見どころ",
      description: "大正7年（1918年）に小浜線が十村駅から延伸した際に終着駅として開業した駅。ラムサール条約登録湿地・三方五湖や年縞博物館への玄関口であり、とんがり屋根の駅舎が旅人を迎える。",
      address: "福井県三方上中郡若狭町三方39-5-3",
      prefecture: "福井県",
      city: "三方上中郡若狭町",
      lat: 35.555461,
      lng: 135.909534,
      clue: "源与門から北北西へ歩くと、三角屋根の『JR小浜線 三方駅』の前に出る。大正七年に小浜線の終着駅として開業し、三方五湖と観音霊場の門前町を結ぶ静かな玄関口に立とう。",
      surprise: "駅の西に広がる三方五湖のひとつ・水月湖の湖底堆積物「年縞」は、平成三十年に過去七万年間の年代を測定する世界標準ものさしとして国際的に認定された。",
      hook: "駅舎を見上げたら北北東へ徒歩6分。老舗和食店の記憶を受け継ぐ『cafe bamboo』で食後の珈琲と甘味を味わおう。",
      image_prompt: "Cinematic watercolor background art of JR Mikata Station on the Obama Line in Wakasa, Fukui. A charming triangular-roofed station building with a single-track platform and gentle green hills of Wakasa in the distance, soft daylight, wide unpainted paper margins, no people, no text."
    },
    {
      name: "cafe bamboo",
      spot_type: "休憩",
      description: "三方の旧道沿いで長年親しまれた老舗和食店「竹の子」を、孫の三代目が改装して2022年にオープンしたカフェ。竹にちなんだ店名の通り、落ち着いた空間で自家製スイーツやスペシャルティコーヒーを提供している。",
      address: "福井県三方上中郡若狭町三方31-27",
      prefecture: "福井県",
      city: "三方上中郡若狭町",
      lat: 35.558656,
      lng: 135.910843,
      clue: "三方駅から北北東へ旧街道筋を進むと、落ち着いた家並みのなかに温かな木の扉を備えた『cafe bamboo（カフェ バンブー）』が見えてくる。かつてこの場所で祖父母の代から地域の人々に愛された和食処「竹の子」が暖簾を下ろそうとした際、孫の代がその想いと場所を受け継ぎ、「竹（bamboo）」の名を冠したカフェとして再生させた店だ。丁寧に淹れられた珈琲と季節の焼き菓子で、優しい午後のひと時を過ごそう。",
      surprise: "「竹の子」時代に使われていた器や建具の温もりをさりげなく活かしながら現代的なカフェ空間へと生まれ変わっており、三世代の常連客が交差する町の止まり木となっている。",
      hook: "香り高い珈琲でひと息ついたら北北東へ徒歩6分。「三方」の地名のルーツを伝える式内社『御方神社』へ向かおう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of a cozy renovated Japanese cafe in Wakasa, Fukui. A ceramic mug of hand-dripped coffee and a slice of homemade cake on a wooden table beside a vase of fresh bamboo leaves and warm timber interiors, unpainted paper borders, no people, no text."
    },
    {
      name: "御方神社",
      spot_type: "見どころ",
      description: "平安時代の『延喜式』神名帳に記された若狭国三方郡の式内社。櫛御方命を主祭神とし、「三方（みかた）」という郡名・町名の由来とも深く関わる地域の総鎮守として崇敬されている。",
      address: "福井県三方上中郡若狭町三方21-1",
      prefecture: "福井県",
      city: "三方上中郡若狭町",
      lat: 35.561529,
      lng: 135.912479,
      clue: "cafe bambooから観音川のほとりへと北北東へ歩くと、三方石観世音の参道入口に鎮座する古社『御方神社（みかたじんじゃ）』の鳥居に至る。延長五年成立の『延喜式』神名帳に名を連ねる式内社であり、古くは「郡神明神」とも称された三方郡の総鎮守だ。覆屋（おおいや）の中に二棟の本殿が並んで鎮座する珍しい社殿構成を拝しながら、美しい潟湖「御潟（みかた）」を治めた古代の水神の記憶に思いを馳せよう。",
      surprise: "地名の「三方」は三方湖の古称「御潟（みかた）」に由来するとされ、その地に鎮座する御方神社は湖の恵みと水運を守護する最古級の聖地として千年以上にわたり祀られてきた。",
      hook: "式内社の杜に参拝したら参道を東へ徒歩3分。弘法大師が一夜で彫り上げたと伝わる『三方石観世音』で散策を結ぼう。",
      image_prompt: "Transparent watercolor and fountain pen illustration of Mikata Shrine at the foot of a wooded mountain in Wakasa, Fukui. A weathered stone torii gate, moss-covered guardian komainu dogs, and twin wooden sanctuary roofs sheltered beneath an outer hall, wide unpainted Washi paper margins, no people, no text."
    },
    {
      name: "三方石観世音",
      spot_type: "見どころ",
      description: "北陸三十三観音霊場第7番札所。大同2年（807年）に弘法大師空海が山中の花崗岩（不動岩）に一夜で聖観音像を刻んだ際、鶏鳴により右手首から先を残して下山したという「片手観音」の伝説と、手足の平癒祈願で知られる。",
      address: "福井県三方上中郡若狭町三方22-1",
      prefecture: "福井県",
      city: "三方上中郡若狭町",
      lat: 35.56169,
      lng: 135.914692,
      clue: "御方神社の脇から観音川に沿う参道を東へ進むと、雲谷山の麓に建つ『三方石観世音（みかたいしかんぜおん）』の本堂に到着する。堂内の奥にそびえる巨大な花崗岩には、大同二年に弘法大師空海が一夜で彫り進めたものの、夜明けを告げる鶏の鳴き声で右手首から先を未完のまま残して山を下りたと伝わる「片手観音」が刻まれている。境内に湧く「観音霊水」で喉を潤し、無数の木製の「御手足（おてあし）」が奉納された祈りの空間で歩みを結ぼう。",
      surprise: "手足の病や怪我に悩む参拝者が本堂から木型の手や足（御手足）を一体借りて持ち帰り、それで患部をさすって全快すると新しくもう一体添えて倍返しで奉納する独特の風習が江戸時代から続いている。",
      hook: "",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of Mikata Ishikanzeon temple nestled in a cedar forest in Wakasa, Fukui. A wooden temple hall built directly over a natural granite boulder, a stone basin overflowing with clear spring water, and votive wooden hand plaques hanging on a rack. Wide unpainted paper margins, no people, no text."
    }
  ]
};
