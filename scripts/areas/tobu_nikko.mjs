export default {
  slug: "tobu_nikko",
  line: "東武日光線",
  station: "東武日光駅",
  station_order: 130,
  area_name: "日光門前・松原町から鉢石宿へ続く湯波と酒饅頭の街道",
  title: "アルペン風の駅舎から門前宿場の湯波と石蔵へ",
  description: "世界遺産の社寺へと続く日光街道の宿場町・鉢石（はついし）の門前通りを、東武日光駅から北西へ緩やかな上り坂に沿って巡るルートです。山小屋風の三角屋根が象徴的な東武日光駅から、天日塩が甘みを引き立てる揚げゆばまんじゅう、日光連山の伏流水で引き上げる老舗の生ゆば工房、源平・幕末の史跡を伝える天台宗の龍蔵寺を経て、文化元年創業の酒饅頭舗が営む大谷石蔵カフェへと歩みます。",
  category: "歴史・文化・グルメ",
  prefecture: "栃木県",
  budget_tier: 2,
  tags: ["東武日光", "日光街道", "日光湯波", "鉢石宿", "石蔵カフェ"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of the historic Nikko Kaido street rising gently from Tobu-Nikko Station toward Hatsuishi-juku. The alpine triangular roof of Tobu-Nikko Station, traditional wooden yuba shop noren curtains, and a renovated Oya stone warehouse cafe against cedar-covered mountains. Loose ink linework, granulation watercolor wash, wide unpainted Washi margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "日光門前と鉢石宿の湯波街道を歩む旅人",
    subtitle_en: "Wayfarer of Nikko Hatsuishi Yuba Kaido",
    description: "東武日光駅から日光さかえや、松葉屋 日光店、天台宗 龍蔵寺、湯沢屋 鉢石カフェまでを巡り歩いた証"
  },
  question: "東武日光駅から下鉢石町まで緩やかな門前坂を上り終えて、日光の街道の記憶として持ち帰りたいものはどれですか？",
  choices: [
    {
      key: "A",
      text: "日光連山の山並みを背に三角屋根を掲げる、『東武日光駅』の山小屋風の駅舎建築",
      description: "昭和四年の開業以来、国際避暑地・日光の玄関口として旅人を迎えてきたアルペン調駅舎を仰ぐ時間",
      badge: {
        code: "shuin_nikko_alpine_station_gable",
        name_ja: "日光連山と三角屋根の駅舎を仰ぐ旅人",
        subtitle_en: "Traveler of the Alpine Station Gate",
        description: "東武日光駅で昭和初期からの山岳玄関口の意匠に触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "『日光さかえや』の店先で頬張る、サクッと揚がった湯波衣と天日塩が絶妙な揚げゆばまんじゅう",
      description: "門前通りの入口で揚げたてを頬張り、豆乳生地の香ばしさと粗塩が引き立てるこし餡を味わう体験",
      badge: {
        code: "shuin_nikko_sakaeya_fried_yuba_bun",
        name_ja: "揚げゆばまんじゅうと天日塩の妙味を識る人",
        subtitle_en: "Taster of Salted Fried Yuba Manju",
        description: "日光さかえやで門前名物の揚げゆばまんじゅうを味わった証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "『松葉屋 日光店』の伏流水が生む二重引きの湯波と、『天台宗 龍蔵寺』の境内に佇む古塔",
      description: "日光特有の厚みある二つ折り湯波の技に触れ、街道裏の古刹で鎌倉から幕末の史跡を辿るひと時",
      badge: {
        code: "shuin_nikko_matsubaya_ryuzoji_lore",
        name_ja: "二重引きの日光湯波と門前古刹を辿る識者",
        subtitle_en: "Seeker of Folded Yuba and Temple Stones",
        description: "松葉屋 日光店と天台宗 龍蔵寺で日光の食と歴史に触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "文化元年創業『湯沢屋』が受け継ぐ酒饅頭の芳醇な麹香と、『鉢石カフェ』の大谷石蔵の陰影",
      description: "明治・大正期の石蔵を改装した和カフェで、宇治抹茶や豆乳水羊羹とともに二百年続く元祖日光酒饅頭を堪能する瞬間",
      badge: {
        code: "shuin_nikko_yuzawaya_stone_cafe",
        name_ja: "鉢石宿の石蔵カフェと元祖酒饅頭を嗜む粋人",
        subtitle_en: "Connoisseur of Stone Warehouse Sake Manju",
        description: "湯沢屋 鉢石カフェで宿場町の伝統菓と石蔵空間を堪能した証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "東武日光駅",
      spot_type: "見どころ",
      description: "昭和4年（1929年）開業、スイスの山小屋（アルペン）を思わせる三角屋根とハーフティンバー調の外観が特徴の東武日光線の終着駅。",
      address: "栃木県日光市松原町4-3",
      prefecture: "栃木県",
      city: "日光市",
      lat: 36.748102,
      lng: 139.619509,
      clue: "標高543メートルの澄んだ山の空気に包まれた『東武日光駅』から、門前宿場・鉢石（はついし）へと続く街道歩きを始めよう。昭和四年の開業以来、国際避暑地・日光の表玄関として親しまれてきた駅舎は、スイスの山小屋（アルペン）を模した急勾配の三角屋根とハーフティンバー調の意匠が目を引く。駅前広場から振り返れば、深い杉木立の向こうに男体山から女峰山へと連なる日光連山の山懐が堂々と迫っている。",
      surprise: "現在のアルペン風二代目駅舎は昭和五十四年の東武日光線開通50周年に合わせて建て替えられたもので、冬場の豪雪を自然に落とす急勾配の屋根構造と洋風山岳リゾートの気品を兼ね備えている。",
      hook: "三角屋根の駅舎を仰いだら門前通りを西南西へ徒歩1分。香ばしい湯気が立つ『日光さかえや 揚げゆばまんじゅう本舗』へ進もう。",
      image_prompt: "Cinematic watercolor background art of the alpine chalet-style triangular roof facade of Tobu-Nikko Station with cedar-forested mountains rising in the background. Soft morning mountain light, hand-painted brush textures, no people, no text."
    },
    {
      name: "日光さかえや 揚げゆばまんじゅう本舗",
      spot_type: "休憩",
      description: "東武日光駅前の門前通り入口で実演販売を行う名店。日光湯波と豆乳を練り込んだ生地でこし餡を包み、カラリと揚げて沖縄産天日塩を振った「揚げゆばまんじゅう」が名物。",
      address: "栃木県日光市松原町10-1",
      prefecture: "栃木県",
      city: "日光市",
      lat: 36.747801,
      lng: 139.618817,
      clue: "駅から西南西へ駅前通りへ出るとすぐ、『日光さかえや 揚げゆばまんじゅう本舗』の店先から香ばしい油の香りが漂ってくる。日光湯波と豆乳を練り込んだ特製生地でなめらかな自家製こし餡を包み、注文ごとにサクッと揚げて仕上げに沖縄産の天日塩をひと振りした一品だ。揚げたての熱い包みをひと口かじれば、カリッとした湯波衣の食感のあとに粗塩が引き立てる上品な甘みが広がり、坂道歩きの足取りを心地よく弾ませてくれる。",
      surprise: "衣のサクサク感を最大限に引き出すため、まんじゅうの皮そのものに豆乳と刻み湯波を配合したうえで、表面にさらに細かな湯波の衣をまとわせて二度重ねにする独自の製法が採られている。",
      hook: "甘じょっぱい揚げたてを味わったら日光街道を西北西へ徒歩4分。手造り湯波の老舗『松葉屋 日光店』を訪ねよう。",
      image_prompt: "Gouache and colored pencil food illustration of a freshly deep-fried golden Nikko age-yuba manju (fried yuba bun) wrapped in white paper with coarse sea salt crystals glinting on top, beside a cup of hot green tea. Partial close-up, warm street-side light, no people, no text."
    },
    {
      name: "松葉屋 日光店",
      spot_type: "買い物",
      description: "日光街道・石屋町に店を構える手造り湯波と豆腐の老舗専門店。膜の中央に串を入れて二つ折りに引き上げる日光特有の厚みある「さしみ湯波」や揚巻湯波が並ぶ。",
      address: "栃木県日光市石屋町413",
      prefecture: "栃木県",
      city: "日光市",
      lat: 36.748575,
      lng: 139.615871,
      clue: "西北西へ石屋町の坂を上ると、手造り湯波と豆腐の老舗『松葉屋 日光店』が暖簾を掲げている。日光連山の伏流水と国産大豆で引き上げる二つ折りの「さしみ湯波」や揚巻湯波に、門前町の伝統の技が光る。",
      surprise: "京都が「湯葉」と書き膜の端から一重で引き上げるのに対し、日光は「湯波」と書き中央から二つ折りで引き上げるため、間に豆乳が閉じ込められて厚みと濃厚な甘みが生まれる。",
      hook: "手造り湯波の技に触れたら北西へ徒歩3分。街道裏に静寂を守る古刹『天台宗 龍蔵寺』へ足を運ぼう。",
      image_prompt: "Pastel gouache and watercolor illustration of delicate ivory-colored folded Nikko yuba (tofu skin) sashimi and rolled agemaki yuba arranged in a cedar wood box at a traditional storefront in Nikko. Soft natural light, unpainted paper margins, no people, no text."
    },
    {
      name: "天台宗 龍蔵寺",
      spot_type: "見どころ",
      description: "建保元年（1213年）創建と伝わる日光山ゆかりの天台宗寺院。鎌倉武将・畠山重忠の末子である重慶阿闍梨の墓塔や、日光市指定文化財「芸州八士の墓」が佇む。",
      address: "栃木県日光市御幸町396",
      prefecture: "栃木県",
      city: "日光市",
      lat: 36.749614,
      lng: 139.614395,
      clue: "北西へ進み、御幸町の通りから一歩路地へ入ると、建保元年創建と伝わる『天台宗 龍蔵寺』の静かな境内が広がる。かつて日光山の別所として栄えた古刹で、境内には鎌倉初期の武将・畠山重忠の末子である重慶（ちょうけい）阿闍梨の供養塔や、幕末の戊辰戦争・日光口の戦いで命を落とした広島藩（芸州藩）兵を弔う日光市指定文化財「芸州八士の墓」が苔むした杉木立の影に並び、門前町がくぐり抜けた歴史を今に伝えている。",
      surprise: "戊辰戦争の際、板垣退助らが率いる新政府軍と旧幕府軍が日光で対峙したが、日光の社寺を戦火から守るため説得が行われ、門前での前哨戦ののちに無血開城へと至った記憶がこの墓碑に刻まれている。",
      hook: "古刹の石塔に手を合わせたら日光街道を西北西へ徒歩8分。文化元年創業の酒饅頭舗が営む『湯沢屋 鉢石カフェ』へ向かおう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of moss-covered historic stone pagodas and temple eaves in the quiet courtyard of Ryuzo-ji Temple in Nikko. Dappled light filtering through tall cedar trees, atmospheric negative space, no people, no text."
    },
    {
      name: "湯沢屋 鉢石カフェ",
      spot_type: "休憩",
      description: "文化元年（1804年）創業の「元祖日光酒饅頭」の老舗・湯沢屋が、隣接する明治・大正期の大谷石蔵を改装して営む和カフェ。酒饅頭や豆乳水羊羹、抹茶の和カフェセットを味わえる。",
      address: "栃木県日光市下鉢石町946",
      prefecture: "栃木県",
      city: "日光市",
      lat: 36.750664,
      lng: 139.608997,
      clue: "西北西へ門前坂を上り詰め、日光街道の宿場町・下鉢石町（しもはついしちょう）へ入ると、文化元年創業の和菓子舗・湯沢屋と、その隣に佇む明治・大正期の大谷石蔵を改装した『湯沢屋 鉢石カフェ』に到着する。重厚な石壁と黒光りする太い梁が交差する静かな空間で、米麹から時間をかけて発酵させた大正天皇献上の「元祖日光酒饅頭」や、老舗・海老屋の豆乳を使ったなめらかな豆乳水羊羹、香り高い宇治抹茶を味わいながら門前坂の道のりを締めくくろう。",
      surprise: "湯沢屋の酒饅頭はイーストや膨張剤を一切使わず、もち米と麹から自家醸造した甘酒の自然発酵力だけで生地を膨らませる江戸時代そのままの製法を二百年以上にわたり守り続けている。",
      hook: "",
      image_prompt: "Transparent watercolor and fountain pen illustration of the interior of a renovated Meiji-era Oya stone warehouse cafe in Nikko. Warm wooden beams, textured stone walls, and a lacquer tray with steamed white sake-manju buns, glossy soy-milk mizuyokan, and a ceramic bowl of frothy green matcha on a wooden table. No people, no text."
    }
  ]
};
