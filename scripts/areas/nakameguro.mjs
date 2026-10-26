// 中目黒エリア定義①（目黒川の水辺・ロースタリー・高架下カルチャー編）
export default {
  slug: "nakameguro",
  line: "東急東横線",
  station: "中目黒",
  station_order: 3,
  area_name: "中目黒",
  title: "桜の川辺で焙煎香とアートに出会う——目黒川クリエイティブ散歩",
  description: "春の桜だけでなく、新緑や秋風、冬の澄んだ光まで、四季折々の表情を見せる目黒川。かつて工場や倉庫が並んでいたこの水辺は今、世界中からクリエイターや旅人が集う感性の交差点へと進化した。電車の音が響く高架下の書店から、現代日本画の美術館、路地裏の文具店、Bean to Barのショコラトリー、そして隈研吾が設計を手がけた巨大ロースタリーへ。水辺の風と焙煎香に誘われて5つのしるしを刻む。所要90〜120分・全行程徒歩。",
  category: "体験したい",
  prefecture: "東京都",
  budget_tier: 2,
  tags: ["目黒川", "ロースタリー", "中目黒高架下", "アート", "中目黒"],
  eyecatch_prompt: "Vibrant cinematic watercolor and ink illustration of the Meguro River in Nakameguro with green cherry tree canopy reflecting on the water, a red pedestrian bridge, and a grand copper-accented coffee roastery building in warm afternoon light, Makoto Shinkai inspired atmospheric background art.",
  completion_badge: {
    name_ja: "目黒川の創造探訪者",
    subtitle_en: "Creative Explorer of Meguro River",
    description: "目黒川沿いに息づく焙煎香とアートの物語をめぐり、すべてのしるしを刻み終えた証"
  },
  question: "目黒川沿いの街並みが、ただのお花見名所を超えて「創造の街」へと進化したのはなぜだろうか？",
  choices: [
    {
      key: "A",
      text: "水辺の開放的な余白",
      description: "川沿いの遊歩道と桜並木が、人の感性を解き放つ舞台になっているから",
      badge: {
        code: "shuin_nakameguro_river",
        name_ja: "水辺の感性家",
        subtitle_en: "Aesthete of the Riverside",
        description: "目黒川の水面と木漏れ日が育む創造的な空気を感じ取った証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "工房と店舗の一体感",
      description: "焙煎機やカカオ工房など、ものづくりの鼓動を間近に体験できるから",
      badge: {
        code: "shuin_nakameguro_roast",
        name_ja: "芳醇なる焙煎の証人",
        subtitle_en: "Witness of Artisan Roasting",
        description: "豆から一杯・一枚へと昇華するクラフトの現場に立ち会った証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "古い建物の再生力",
      description: "高架下や路地裏の古民家を、新しい発想で文化の拠点に変えてきたから",
      badge: {
        code: "shuin_nakameguro_renovation",
        name_ja: "都市再生の目撃者",
        subtitle_en: "Beholder of Urban Renewal",
        description: "高架下や古い木造建築に吹き込まれた新しい命を見出した証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "日常を旅に変える視点",
      description: "一冊のノートや一杯の珈琲から、自分の物語を始める人々が集うから",
      badge: {
        code: "shuin_nakameguro_traveler",
        name_ja: "目黒川の表現者",
        subtitle_en: "Creator of Nakameguro",
        description: "目黒川のカルチャーと自らの感性を重ね合わせて歩み終えた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "高架下に生まれた知の交差点（中目黒 蔦屋書店／中目黒高架下）",
      spot_type: "見どころ",
      description: "2016年に開業した『中目黒高架下』の玄関口に位置するブック＆カフェ。頭上を東横線・日比谷線の電車が走るダイナミックな空間を『Meet』『Talk』『Work』『Share』の4ゾーンで構成している。",
      address: "東京都目黒区上目黒1-22-10",
      prefecture: "東京都",
      city: "目黒区",
      lat: 35.644621,
      lng: 139.6993,
      clue: "改札を出た瞬間、頭上を走る電車の振動とともに現れる全長約700メートルの『中目黒高架下』。かつては暗く閉ざされがちだった鉄道高架の下が、本と珈琲、語らいが交差する街のリビングへと生まれ変わった。ここから創造の散歩を始めよう。",
      surprise: "高架の太いコンクリート柱をそのまま活かした書棚と、温かな照明が灯る店内。",
      hook: "高架下から目黒川の方へ歩き、季節を問わず満開の桜に出会える美術館を訪ねよう。"
    },
    {
      name: "桜並木に寄り添う現代日本画の殿堂（郷さくら美術館）",
      spot_type: "見どころ",
      description: "2012年に中目黒で開館した現代日本画の専門美術館。昭和生まれの日本画家による大作を中心に収蔵し、常設展示室『百花繚乱』では一年中、名画の桜を鑑賞できる。",
      address: "東京都目黒区上目黒1-7-13",
      prefecture: "東京都",
      city: "目黒区",
      lat: 35.64571,
      lng: 139.699975,
      clue: "目黒川の桜並木からすぐの場所に佇む、現代日本画の専門美術館。市松模様のモダンな外観の奥には、顔料（岩絵具）の粒子が輝く大作と、一年中満開の桜を描いた展示室が広がっている。水辺の風景と響き合う芸術のしるしを刻もう。",
      surprise: "自然光の揺らぎをモチーフにした外観ファサードと、静謐な館内に広がる日本画の色彩。",
      hook: "美術館を出たら駅の西側・細い路地裏へ。旅人の心をくすぐる隠れ家が待っている。"
    },
    {
      name: "旅するように日常を綴る秘密基地（トラベラーズファクトリー 中目黒）",
      spot_type: "買い物",
      description: "2011年に中目黒の路地裏にある古い建物を改装してオープンした『トラベラーズノート』のフラッグシップストア。革カバーやブラス（真鍮）文具、世界中の旅雑貨が並ぶ。",
      address: "東京都目黒区上目黒3-13-10",
      prefecture: "東京都",
      city: "目黒区",
      lat: 35.644745,
      lng: 139.697233,
      clue: "賑やかな通りから一歩入った狭い路地裏。築年数を重ねた小さな建物の扉を開けると、革と紙の匂いに包まれた「旅人のアトリエ」が現れる。使い込むほどに味わいを増す革のノートは、今日この街を歩いた記憶を留めるのにふさわしい。",
      surprise: "古い階段を上った2階にある、旅の本やコーヒーとともにノートをカスタマイズできる空間。",
      hook: "再び目黒川沿いへ戻り、上流に向かって歩こう。ガラス越しの工房から甘いカカオの香りが漂ってくる。"
    },
    {
      name: "カカオ豆から板チョコまでの手仕事（green bean to bar CHOCOLATE 中目黒本店）",
      spot_type: "買い物",
      description: "2015年に目黒川沿いにオープンしたBean to Bar（ビーン・トゥ・バー）チョコレート専門店。カカオ豆の選別・焙煎から成形・包装まで全工程を店内工房の手作業で行っている。",
      address: "東京都目黒区青葉台2-16-11",
      prefecture: "東京都",
      city: "目黒区",
      lat: 35.64889,
      lng: 139.694069,
      clue: "目黒川のせせらぎと桜の枝葉を望む川沿いの一角。ガラス張りのファクトリーでは、世界中から届いたカカオ豆を焙煎し、石臼で何日間もかけて滑らかに挽き上げる工程が目の前で進んでいる。産地ごとに異なるカカオの香りを体感しよう。",
      surprise: "和紙を使った美しいパッケージのタブレットと、ガラス越しに回る石臼メランジャー。",
      hook: "目黒川沿いをさらに少し上流へ。銅の輝きと珈琲の香りに満ちた圧巻の建築が待っている。"
    },
    {
      name: "銅のキャスクが輝く珈琲の殿堂（スターバックス リザーブ ロースタリー 東京）",
      spot_type: "休憩",
      description: "2019年2月に目黒川沿いに開業した、世界で5番目の焙煎工場併設フラッグシップストア。外観デザインは建築家・隈研吾氏が手がけ、4階建ての吹き抜けを貫く高さ約17メートルの銅製キャスクが圧巻。",
      address: "東京都目黒区青葉台2-19-23",
      prefecture: "東京都",
      city: "目黒区",
      lat: 35.649264,
      lng: 139.692591,
      clue: "建築家・隈研吾が日本の木組みと折り紙の美意識を取り入れて設計した4階建ての空間。扉を開けた瞬間、1階から4階までを貫く巨大な銅のキャスク（貯蔵庫）と、折り紙天井、無数の銅板で作られた桜の花びらが目に飛び込んでくる。目黒川を見下ろすテラスで、この街が創造を刺激する理由に答えを出そう。",
      surprise: "高さ約17メートルの銅製キャスクの周囲を舞う約2100枚の銅の桜と、焙煎された豆が管を通る音。",
      hook: ""
    }
  ]
};
