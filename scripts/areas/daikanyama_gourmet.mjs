// 代官山エリア定義②（路地裏ベーカリー・カフェ・クラフト体験編：ログロード・イルプルー・ハリウッドランチマーケット・松之助N.Y.・ミケランジェロ）
export default {
  slug: "daikanyama-gourmet",
  line: "東急東横線",
  station: "代官山",
  station_order: 2,
  area_name: "代官山",
  title: "坂の上の焼きたてパンと珈琲の香り——線路跡と路地裏のクラフト美食散歩",
  description: "かつて東横線の電車が地上を走っていた線路跡の遊歩道から、猿楽町の穏やかな坂道へ。代官山の朝と午後は、天然酵母のサワードウや伝統的なフランス菓子、ニューイングランド伝来のアップルパイ、そして大けやきの木陰で味わうエスプレッソの香りに満ちている。職人の手仕事（クラフト）が息づく5つの名店をめぐり、五感で味わう休日のしるしを刻む。所要90〜120分・全行程徒歩。",
  category: "食べたい",
  prefecture: "東京都",
  budget_tier: 2,
  tags: ["ベーカリー", "カフェ", "ログロード代官山", "パティスリー", "代官山"],
  eyecatch_prompt: "Warm artisanal food and lifestyle gouache illustration of a sunny morning terrace table in Daikanyama with crusty sourdough bread, flaky croissants, and pour-over specialty coffee surrounded by potted olive trees, Popeye / Paris cafe guidebook aesthetic, creamy amber and terracotta palette.",
  completion_badge: {
    name_ja: "代官山の美食散策者",
    subtitle_en: "Artisan Gourmet of Daikanyama",
    description: "代官山の線路跡と路地裏に息づくパン・菓子・珈琲の名店をめぐり、すべてのしるしを刻み終えた証"
  },
  question: "代官山のベーカリーやカフェが、流行を超えて人々を惹きつけ続ける魅力の核心はどこにあるだろうか？",
  choices: [
    {
      key: "A",
      text: "妥協なき職人の手仕事",
      description: "小麦やバター、果実など素材の力を引き出す真っ直ぐな製法にあるから",
      badge: {
        code: "shuin_daikanyama_gourmet_craft",
        name_ja: "手仕事の目利き",
        subtitle_en: "Connoisseur of Craftsmanship",
        description: "代官山の名店に宿る妥協なき職人の技と味を見出した証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "風と光が通るテラス",
      description: "線路跡の緑道や大けやきの木陰など、街の自然と食卓がひと続きだから",
      badge: {
        code: "shuin_daikanyama_gourmet_terrace",
        name_ja: "木漏れ日の美食家",
        subtitle_en: "Gourmet in Dappled Sunlight",
        description: "心地よいオープンエアの空間と食が溶け合う時間を味わった証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "異国文化への深い敬意",
      description: "パリやニューヨーク、イタリアの日常文化を本物のまま根づかせたから",
      badge: {
        code: "shuin_daikanyama_gourmet_voyage",
        name_ja: "異国趣味の旅人",
        subtitle_en: "Traveler of Global Flavors",
        description: "海を越えて代官山に根づいた世界の食文化と美意識に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "日常を祝う豊かな時間",
      description: "焼きたてのパンと一杯の珈琲が、何気ない一日を特別に変えてくれるから",
      badge: {
        code: "shuin_daikanyama_gourmet_life",
        name_ja: "休日の祝祭者",
        subtitle_en: "Celebrant of Everyday Joy",
        description: "代官山の豊かな日常と美食の物語を自らの感性で結んだ証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "線路跡に吹く焼きたてパンの風（GARDEN HOUSE CRAFTS 代官山）",
      spot_type: "食事",
      description: "東急東横線の地下化によって生まれた線路跡地『LOG ROAD DAIKANYAMA』の5号棟にあるベーカリーカフェ。厳選した小麦と自家製酵母で焼き上げるカンパーニュやクロワッサンが人気。",
      address: "東京都渋谷区代官山町13-1",
      prefecture: "東京都",
      city: "渋谷区",
      lat: 35.651296,
      lng: 139.705725,
      clue: "かつて東横線の電車が地上を駆け抜けていた全長約220メートルの線路跡。四季の草花が揺れる遊歩道の奥で、石臼挽き全粒粉のカンパーニュや焼きたてパンの香ばしい湯気が迎えてくれる。鉄路の記憶が眠るウッドデッキで、最初のしるしを刻む。",
      surprise: "細長く伸びる線路跡のランドスケープと、店頭に並ぶ丸く大きなカンパーニュ。",
      hook: "緑道を抜けて猿楽町の路地へ。フランス菓子の真髄を追求し続ける名店を訪ねよう。"
    },
    {
      name: "仏蘭西菓子界に革新を起こした名店（イル・プルー・シュル・ラ・セーヌ）",
      spot_type: "買い物",
      description: "弓田亨氏が1993年に代官山で創業したフランス菓子の名店。厳選された素材と独自の技術による生菓子や焼き菓子、ショコラが多くの菓子職人や愛好家を魅了している。",
      address: "東京都渋谷区猿楽町17-16",
      prefecture: "東京都",
      city: "渋谷区",
      lat: 35.649535,
      lng: 139.698756,
      clue: "「セーヌ河に雨が降る」という詩的な名を冠し、日本のフランス菓子界に大きな影響を与えたパティスリー。素材の香りと味わいを極限まで引き出した焼き菓子やガトーは、一口ごとに鮮烈な驚きをもたらす。静かな建物の2階へと足を運んでみよう。",
      surprise: "気品ある店内に整然と並ぶ美しいフランス菓子と、洋酒やアーモンドの芳醇な香り。",
      hook: "次は旧山手通り方向へ歩みを進め、1970年代から代官山のライフスタイルを牽引してきた聖地へ。"
    },
    {
      name: "代官山カルチャーを牽引した聖地（ハリウッド ランチ マーケット）",
      spot_type: "買い物",
      description: "1972年に千駄ヶ谷で創業し、1979年に代官山へ移転したカジュアルファッション・ライフスタイルショップの先駆け。デニムやバンダナ、雑貨を通じて独自のアメリカンカルチャーを発信し続けている。",
      address: "東京都渋谷区猿楽町28-17",
      prefecture: "東京都",
      city: "渋谷区",
      lat: 35.648163,
      lng: 139.700877,
      clue: "1979年にこの地へ移転して以来、代官山が「感性の街」と呼ばれる原動力となった伝説のショップ。ウッディな外観と四季折々のウィンドウディスプレイは、世代を超えて街行く人々の目を楽しませてきた。クラフトと日常着の温もりに触れてみよう。",
      surprise: "木の温もりあふれるエントランスと、遊び心に満ちた季節のウィンドウ装飾。",
      hook: "旧山手通り沿いを少し北へ。素朴で力強いアメリカンベーキングの香りが待っている。"
    },
    {
      name: "伝統レシピを受け継ぐアップルパイ（松之助 N.Y. 東京・代官山店）",
      spot_type: "休憩",
      description: "料理研究家・平野顕子氏が、アメリカ・ニューイングランド地方の伝統的な家庭菓子の師シャロル・ジーン氏の味を受け継いで開いたアップルパイとスイーツの専門店。",
      address: "東京都渋谷区猿楽町29-9",
      prefecture: "東京都",
      city: "渋谷区",
      lat: 35.648209,
      lng: 139.700278,
      clue: "生のりんごをパイ生地に直接詰めてじっくり焼き上げる、アメリカ東海岸の伝統製法。サクサクのパイクラストと甘酸っぱいりんごの凝縮した旨みは、師から弟子へと海を越えて手渡された温かな家庭の記憶そのものだ。",
      surprise: "ガラス張りの明るい店内に並ぶ大ぶりのアップルパイと、シナモンが香る焼き菓子の数々。",
      hook: "最後はすぐ隣の樹齢数百年の大けやきの下へ。ヨーロッパの街角のようなカフェで旅を締めくくろう。"
    },
    {
      name: "大けやきが見守る古き良きカフェ（カフェ・ミケランジェロ）",
      spot_type: "休憩",
      description: "1997年のオープン以来、代官山のランドマークとして愛されるイタリアンカフェ。樹齢約300年ともいわれる大きなけやきの木がそびえる中庭と、ヨーロッパの街角を再現したテラコッタの空間が特徴。",
      address: "東京都渋谷区猿楽町29-3",
      prefecture: "東京都",
      city: "渋谷区",
      lat: 35.648588,
      lng: 139.699426,
      clue: "歩道に面したテラスの奥、中庭の真ん中にそびえる大きなけやきの木。18世紀イタリアのカフェにならい、誰もが思い思いの時間を過ごせる場所として作られた。木漏れ日に揺れるカップを見つめながら、代官山の美食散歩の答えを選ぼう。",
      surprise: "中庭の空を覆う大けやきの枝ぶりと、テラコッタの床に響く穏やかな話し声。",
      hook: ""
    }
  ]
};
