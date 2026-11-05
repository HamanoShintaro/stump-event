export default {
  slug: "asato",
  line: "沖縄ゆいレール",
  station: "安里駅",
  station_order: 132,
  area_name: "安里・栄町市場の路地と壺屋やちむん通り",
  title: "栄町市場の珈琲香から琉球王府の登り窯へ",
  description: "沖縄都市モノレール（ゆいレール）・安里駅のすぐ東に広がる戦後復興期の迷宮・栄町市場から、琉球王府が300年以上前に陶工たちを集めた壺屋やちむん通りへと北東から南西へたどるルートです。市場の細いアーケードに漂うスペシャルティコーヒーの香りから、澄んだ鰹出汁の沖縄そば、国の重要文化財に指定された新垣家住宅の登り窯、三百年続く育陶園の唐草模様の器を経て、17世紀の荒焼窯・南窯（フェーヌカマ）へと向かいます。",
  category: "歴史・文化",
  prefecture: "沖縄県",
  budget_tier: 2,
  tags: ["安里", "那覇", "栄町市場", "壺屋やちむん通り", "ゆいレール"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of Asato and Tsuboya in Naha, Okinawa. A nostalgic covered market alley with a small coffee roastery counter, Ryukyu limestone stone walls with red-tiled roofs and shisa lions, and a centuries-old climbing pottery kiln under banyan trees. Loose ink linework, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "安里の市場路地と壺屋の炎を巡る旅人",
    subtitle_en: "Wayfarer of Asato Market Alleys and Tsuboya Kilns",
    description: "COFFEE potohotoからそば処 玉家 栄町店、新垣家住宅、育陶園 本店、南窯（フェーヌカマ）までを巡り歩いた証"
  },
  question: "戦後の迷宮を残す栄町市場の路地と琉球王府の窯場が続く壺屋の坂道で、あなたの五感を強く揺さぶったのはどの瞬間ですか？",
  choices: [
    {
      key: "A",
      text: "昭和の面影を残す栄町市場の路地に漂う、『COFFEE potohoto』の深く澄んだ焙煎香",
      description: "青果店や精肉店が軒を連ねる細いアーケードの真ん中で、丁寧なハンドドリップを味わう時間",
      badge: {
        code: "shuin_asato_potohoto_market_coffee",
        name_ja: "栄町市場の路地で琥珀の珈琲を嗜む粋人",
        subtitle_en: "Connoisseur of Sakaemachi Market Coffee",
        description: "COFFEE potohotoで市場の日常に溶け込む一杯に触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『そば処 玉家 栄町店』の黄金色に澄んだ鰹出汁と、ほろりとほどけるソーキの旨み",
      description: "市場の活気を感じながら、亀浜製麺の細平麺と澄み切ったスープの沖縄そばをすするひと時",
      badge: {
        code: "shuin_asato_tamaya_okinawa_soba",
        name_ja: "栄町の澄んだ鰹出汁と沖縄そばを愛する食通",
        subtitle_en: "Gourmet of Clear Bonito Broth Okinawa Soba",
        description: "そば処 玉家 栄町店で伝統の沖縄そばを味わった証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "『新垣家住宅』の赤瓦の母屋から斜面へと連なる、琉球石灰岩の石垣と登り窯の威容",
      description: "壺屋やちむん通りの中ほどで、琉球王府時代から受け継がれた陶工の屋敷構えを見上げる体験",
      badge: {
        code: "shuin_asato_aragaki_climbing_kiln",
        name_ja: "赤瓦の陶工屋敷と東ヌ窯を見上げる探訪者",
        subtitle_en: "Explorer of the Historic Potter's Residence",
        description: "新垣家住宅で重要文化財の屋敷と登り窯の歴史に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "三百年続く『育陶園 本店』の躍動する線彫唐草と、十七世紀の記憶を宿す『南窯』の黒ずんだ窯壁",
      description: "壺屋の土と釉薬が生み出す力強いやちむんの手仕事と、王府時代の荒焼窯の迫力に圧倒される瞬間",
      badge: {
        code: "shuin_asato_ikutouen_feenukama_craft",
        name_ja: "三百年の線彫唐草と南窯の炎を識る旅人",
        subtitle_en: "Seeker of Tsuboya Pottery and Ancient Kilns",
        description: "育陶園 本店と南窯で琉球陶芸の粋と原点に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "COFFEE potohoto",
      spot_type: "休憩",
      description: "安里駅近くの栄町市場アーケード内で平成18年（2006年）に創業したスペシャルティコーヒー専門店。戦後復興期の空気を残す細い市場路地で自家焙煎のエスプレッソやドリップを提供する。",
      address: "沖縄県那覇市安里388-1",
      prefecture: "沖縄県",
      city: "那覇市",
      lat: 26.217351,
      lng: 127.696918,
      clue: "ゆいレール安里駅の階段を下りて東へ歩くと、昭和三十年の誕生以来の細い路地が網の目のように入り組む栄町市場のアーケードに行き着く。惣菜店や青果店の呼び声が響く路地の一角で、芳醇な焙煎香を漂わせているのがスペシャルティコーヒー専門店『COFFEE potohoto（コーヒー ポトホト）』だ。小さなカウンター越しに淹れられる鮮やかな酸味と甘みの一杯を手に、市場の日常のざわめきに耳を傾けよう。",
      surprise: "かつてシャッターが目立ち始めていた栄町市場の空き店舗に平成十八年に店を開き、沖縄におけるスペシャルティコーヒー文化と市場再生の先駆けとなった一軒として知られる。",
      hook: "市場の珈琲で喉を潤したら南へ徒歩1分。同じ栄町市場の路地に暖簾を掲げる『そば処 玉家 栄町店』へ向かおう。",
      image_prompt: "Gouache and colored pencil illustration on textured cream paper. A tiny open-air specialty coffee stand tucked inside the retro covered alleyway of Sakaemachi Market in Naha, Okinawa. A ceramic cup of pour-over coffee on a worn wooden counter under warm market bulbs, partial framing, no people, no text."
    },
    {
      name: "そば処 玉家 栄町店",
      spot_type: "食事",
      description: "栄町市場の南口近くに店を構える沖縄そばの人気店。雑味のない澄み切った豚骨・鰹節スープとコシのある細平麺、じっくり煮込まれた柔らかなソーキや三枚肉で親しまれる。",
      address: "沖縄県那覇市安里388-67",
      prefecture: "沖縄県",
      city: "那覇市",
      lat: 26.216848,
      lng: 127.696814,
      clue: "市場の路地を南へ抜けると、鰹出汁の豊かな香りが漂う『そば処 玉家 栄町店』が現れる。黄金色に澄み切ったスープにコシのある細平麺が絡み、ほろりと崩れるソーキや三枚肉の優しい甘みが口いっぱいに広がる。",
      surprise: "沖縄本島南部・南城市の大里で創業した老舗「玉家」の味を栄町市場の路地で気軽に味わえる一軒で、朝の早い時間帯から地元の常連客や市場で働く人々の胃袋を支えている。",
      hook: "澄んだ鰹出汁の余韻を胸に南西へ徒歩10分。琉球石灰岩の石畳が続く『新垣家住宅』へ足を延ばそう。",
      image_prompt: "Transparent watercolor and fountain pen food illustration of a steaming bowl of Okinawa soba in clear golden bonito broth topped with tender stewed pork ribs, kamaboko fish cake, and chopped green onions, served with a small bottle of koregusu chili awamori. Loose ink lines, no people, no text."
    },
    {
      name: "新垣家住宅",
      spot_type: "見どころ",
      description: "壺屋やちむん通りに面して建つ、国の重要文化財に指定された陶工の屋敷と登り窯（東ヌ窯）。琉球王府時代から受け継がれた主屋・作業場・石垣・登り窯が一体となって残る。",
      address: "沖縄県那覇市壺屋1-28-32",
      prefecture: "沖縄県",
      city: "那覇市",
      lat: 26.21253,
      lng: 127.692892,
      clue: "栄町から南西へ緩やかな丘を上ると、琉球石灰岩の石畳と石垣がうねる壺屋やちむん通りに入る。通りの中ほどでひときわ重厚な赤瓦の佇まいを見せているのが、国の重要文化財『新垣家住宅（あらがきけじゅうたく）』だ。明治期に整えられた主屋と細工場（作業場）の奥には、緩やかな傾斜地を活かして築かれた上焼用の登り窯「東ヌ窯（アガリヌカマ）」が連なり、住居と工房、窯場が一体となった壺屋の伝統的な屋敷構えを今に伝えている。",
      surprise: "新垣家は十七世紀後半に琉球王府が各地の窯場を壺屋へ統合した際に招聘された陶工の旧家で、長年にわたり王府御用の器やシーサーの名品を生み出してきた名門として知られる。",
      hook: "赤瓦の屋敷と登り窯を眺めたら西へ徒歩1分。三百年以上の歴史を誇る窯元『育陶園 本店』を訪ねよう。",
      image_prompt: "Cinematic watercolor background art of a traditional Okinawan potter's house with red clay roof tiles, coral-limestone walls, and a tiered brick climbing kiln rising up a green slope on Tsuboya Yachimun Street in Naha. Hand-painted brush texture, no people, no text."
    },
    {
      name: "育陶園 本店",
      spot_type: "買い物",
      description: "康熙21年（1682年）の壺屋開窯以来、300年以上にわたり壺屋焼（やちむん）の技を受け継ぐ老舗窯元の本店。職人が小刀で彫り上げる躍動感あふれる線彫唐草や魚紋の器が並ぶ。",
      address: "沖縄県那覇市壺屋1-22-33",
      prefecture: "沖縄県",
      city: "那覇市",
      lat: 26.21253,
      lng: 127.692445,
      clue: "新垣家住宅から石畳の通りを西へ数歩進むと、ガジュマルの緑と赤瓦が迎えてくれる老舗窯元『育陶園（いくとうえん） 本店』がある。十七世紀の琉球王府による壺屋統合の時代から三百年以上、高江洲家が代々受け継いできた窯元だ。店内に足を踏み入れると、生乾きの赤土に白化粧を施して熟練の職人が釘や小刀で一気に彫り上げる「線彫（せんぼり）唐草」の皿やマカイ（碗）、深い飴釉と呉須のコバルトが輝く器が所狭しと並んでいる。",
      surprise: "育陶園の先祖は康熙二十一年に知花・宝口・湧田の三つの窯が壺屋へ統合された際に王府から招かれた陶工の一人で、戦後は途絶えかけていた古典技法と現代の食卓に馴染む器づくりを両立させてきた。",
      hook: "手仕事の器を選んだら西北西へ徒歩3分。琉球王府時代の荒焼窯として唯一現存する『南窯（フェーヌカマ）』へ向かおう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of handmade Okinawan Tsuboya-yaki pottery bowls and plates decorated with carved arabesque (karakusa) patterns in amber and cobalt blue glazes, displayed on a wooden shelf beside a sunlit limestone wall. Unpainted paper margins, no people, no text."
    },
    {
      name: "南窯（フェーヌカマ）",
      spot_type: "見どころ",
      description: "壺屋やちむん通りの西端近く、小高い丘の斜面に残る17世紀築窯の登り窯（沖縄県指定有形民俗文化財）。釉薬をかけない「荒焼（アラヤチ）」専用の窯として唯一現存する。",
      address: "沖縄県那覇市壺屋1-22-32",
      prefecture: "沖縄県",
      city: "那覇市",
      lat: 26.213315,
      lng: 127.690924,
      clue: "やちむん通りの石畳を西北西へ抜けた小高い斜面に、黒ずんだ日干し煉瓦と赤瓦の屋根が重なる巨大な登り窯『南窯（フェーヌカマ）』が横たわっている。康熙二十一年の壺屋開窯当時に築かれたと伝わるこの窯は、釉薬を使わずに高温で焼き締める酒甕や水甕などの「荒焼（アラヤチ）」専用の共同窯として、三百年以上にわたり炎を灯し続けてきた。ガジュマルの気根が絡みつく無骨な窯壁の前に立ち、土と炎が刻んだ琉球の歳月を見届けよう。",
      surprise: "かつて壺屋には荒焼の登り窯が複数あったが、太平洋戦争の戦火と都市化を生き延びて現存するのはこの南窯ただ一つだけで、市街地での薪焚きが難しくなった平成初期まで実際に火が入れられていた。",
      hook: "",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of the ancient 17th-century Feenukama climbing kiln built into a hillside under twisting banyan tree roots in Tsuboya, Naha. Soot-darkened clay bricks, red roof tiles, atmospheric negative space, no people, no text."
    }
  ]
};
