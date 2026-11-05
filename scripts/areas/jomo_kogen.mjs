export default {
  slug: "jomo_kogen",
  line: "上越新幹線",
  station: "上毛高原駅",
  station_order: 140,
  area_name: "月夜野・日本百名月の古刹と縄文の里",
  title: "名月の嶽林寺から上毛高原の蕎麦と矢瀬遺跡へ",
  description: "平安時代の歌人・源順（みなもとのしたごう）が「よき月よのう」と讃えたことに由来するみなかみ町月夜野で、上越新幹線・上毛高原駅周辺を西から東へとたどるルートです。永正2年開山の「日本百名月」の古刹・嶽林寺から、谷川連峰のイヌワシをモチーフにした上毛高原駅のイヌワシストア、駅構内の上毛高原そば、石臼挽きの手打ちそば 天丸を経て、縄文時代後期の国指定史跡・矢瀬遺跡と直売所が並ぶ道の駅 月夜野矢瀬親水公園へと向かいます。",
  category: "自然・緑道",
  prefecture: "群馬県",
  budget_tier: 2,
  tags: ["上毛高原", "上越新幹線", "月夜野", "嶽林寺", "矢瀬遺跡"],
  eyecatch_prompt: "Transparent watercolor and fountain pen travel sketchbook illustration of Tsukiyono and Jomo-Kogen in Minakami, Gunma. A Zen temple bell tower overlooking the Three Peaks of Mt. Mitsumine under a pale moon, a golden-eagle-shaped sable cookie with coffee, freshly cut buckwheat soba noodles, and reconstructed Jomon-period thatched pit dwellings beside the Tone River. Loose ink lines, granulation watercolor wash, wide unpainted white Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "月夜野の名月と縄文の水辺を歩む旅人",
    subtitle_en: "Wayfarer of Tsukiyono Moonlit Temple and Jomon Waterside",
    description: "嶽林寺からイヌワシストア、上毛高原そば、手打ちそば 天丸、道の駅 月夜野矢瀬親水公園までを巡り歩いた証"
  },
  question: "「よき月よのう」と詠まれた月夜野の台地と河岸段丘を巡り終えて、記憶の奥に留めておきたい情景はどれですか？",
  choices: [
    {
      key: "A",
      text: "「日本百名月」に選ばれた古刹『嶽林寺』の境内から仰ぐ、三峰山の稜線とお駒堂の佇まい",
      description: "永正二年開山の禅寺で、源順が讃えた月夜野の空と人形浄瑠璃ゆかりのお駒堂を見つめる時間",
      badge: {
        code: "shuin_jomo_kogen_gakurinji_moon",
        name_ja: "指月会の古刹と三峰の月を仰ぐ参拝者",
        subtitle_en: "Beholder of Gakurinji Temple and Tsukiyono Moon",
        description: "嶽林寺で月夜野の地名伝承と日本百名月の景勝に触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『イヌワシストア』の香ばしいイヌワシサブレと、赤谷の森を舞うイヌワシの物語",
      description: "上毛高原駅のコーヒースタンドで、翼を広げた手焼きサブレとオリジナルブレンドを味わうひと時",
      badge: {
        code: "shuin_jomo_kogen_inuwashi_store_sable",
        name_ja: "谷川連峰のイヌワシサブレと珈琲を愛でる粋人",
        subtitle_en: "Connoisseur of Golden Eagle Sable and Mountain Coffee",
        description: "イヌワシストアでみなかみの自然保護と新しい銘菓に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "駅ナカの『上毛高原そば』と、石臼挽き・手打ちの『天丸』で味わう奥利根の蕎麦の食べ比べ",
      description: "新幹線の改札脇に漂う舞茸天そばのつゆの香りから、駅前の老舗で打つ風味豊かな二八蕎麦へ続く体験",
      badge: {
        code: "shuin_jomo_kogen_tenmaru_soba_craft",
        name_ja: "奥利根の挽きたて蕎麦と舞茸天を極める食通",
        subtitle_en: "Gourmet of Okutone Stone-Milled Soba and Maitake",
        description: "上毛高原そばと手打ちそば 天丸で月夜野の蕎麦文化に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "『道の駅 月夜野矢瀬親水公園』に復元された国指定史跡『矢瀬遺跡』の縄文集落と、利根川の清流",
      description: "三千五百年前の竪穴建物と四本柱の祭祀遺構が利根川の河岸段丘に広がる、太古の風景に立つ瞬間",
      badge: {
        code: "shuin_jomo_kogen_yaze_jomon_ruins",
        name_ja: "利根川河岸の縄文集落と親水公園を識る探訪者",
        subtitle_en: "Explorer of Yaze Jomon Ruins along the Tone River",
        description: "道の駅 月夜野矢瀬親水公園で縄文時代の水辺の営みに触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "曹洞宗 大峰山 嶽林寺",
      spot_type: "見どころ",
      description: "永正2年（1505年）に沼田氏の帰依により開山した曹洞宗の古刹。三峰山に昇る月を愛でる観月会「指月会（しげつえ）」の舞台として「日本百名月」に認定されており、境内には白子屋お駒を祀るお駒堂や風外慧薫ゆかりの文化財が伝わる。",
      address: "群馬県利根郡みなかみ町月夜野1697",
      prefecture: "群馬県",
      city: "利根郡みなかみ町",
      lat: 36.69404,
      lng: 138.974344,
      clue: "上毛高原駅の西側、緑深い高台に永正二年開山の古刹『曹洞宗 大峰山 嶽林寺（がくりんじ）』が鎮座している。平安時代の歌人・源順（みなもとのしたごう）が東国へ下った折、正面の三峰山に昇る月を見て「よき月よのう」と感嘆したことが「月夜野」の地名の起こりと伝わる。安永三年再建の本堂や、江戸の人形浄瑠璃『恋娘昔八丈』のヒロイン・白子屋お駒の遺髪を納めた「お駒堂」を巡り、日本百名月に選ばれた名月の寺から歩みを始めよう。",
      surprise: "毎年中秋の名月の夜には、境内の照明を落としてろうそくの灯りと尺八・琴の音色のなかで三峰山から昇る満月を仰ぐ観月会「指月会」が営まれている。",
      hook: "名月の古刹を参拝したら東南東へ徒歩5分。上毛高原駅の改札外に店を構える『イヌワシストア』へ向かおう。",
      image_prompt: "Sumi-ink outline and mineral pigment wash (tansai) illustration of Gakurinji Zen Temple in Tsukiyono, Gunma. A historic wooden main hall and small Okoma-do shrine pavilion framed by autumn maples, with the silhouette of Mt. Mitsumine in the distance. Wide unpainted paper margins, no people, no text."
    },
    {
      name: "イヌワシストア",
      spot_type: "買い物",
      description: "2024年4月に上越新幹線・上毛高原駅の1階コンコースにオープンしたコーヒースタンド＆スーベニアショップ。みなかみ町の象徴である絶滅危惧種・イヌワシが翼を広げた姿を模した「イヌワシサブレ」やスペシャルティコーヒーが名物。",
      address: "群馬県利根郡みなかみ町月夜野1756",
      prefecture: "群馬県",
      city: "利根郡みなかみ町",
      lat: 36.693126,
      lng: 138.977621,
      clue: "嶽林寺から東南東へ坂を下って上越新幹線・上毛高原駅のコンコースへ入ると、洗練された木のカウンターが目を引く『イヌワシストア』がある。みなかみ町の赤谷の森に生息する国の天然記念物・イヌワシをシンボルに掲げ、令和六年春に誕生した駅ナカの拠点だ。大きく翼を広げたイヌワシの形に焼き上げた香ばしい「イヌワシサブレ」や、月夜野のガラス工芸品、香り高いハンドドリップコーヒーを手に入れよう。",
      surprise: "看板商品の「イヌワシサブレ」は群馬県産小麦と発酵バターを使って一枚ずつ焼き上げられており、売上の一部はみなかみ町の豊かな生態系や自然環境を伝える活動にも役立てられている。",
      hook: "イヌワシサブレと珈琲を手に入れたら同じ駅構内を東南東へ徒歩1分。出汁の香りが漂う『上毛高原そば』へ立ち寄ろう。",
      image_prompt: "Gouache and colored pencil illustration on textured cream paper. A large golden-brown sable cookie shaped like a soaring golden eagle alongside a cup of specialty coffee and local Tsukiyono hand-blown glass cups on a wooden counter at Jomo-Kogen Station. Partial close-up framing, no people, no text."
    },
    {
      name: "上毛高原そば",
      spot_type: "休憩",
      description: "上毛高原駅の1階待合室横に暖簾を掲げる駅そば処。濃口醤油と鰹出汁が香る関東風の熱々のつゆに、みなかみ名物の肉厚な舞茸天ぷらや山菜をのせたそば・うどんが旅人や地元客に愛されている。",
      address: "群馬県利根郡みなかみ町月夜野1756",
      prefecture: "群馬県",
      city: "利根郡みなかみ町",
      lat: 36.693061,
      lng: 138.977776,
      clue: "イヌワシストアから東南東すぐの並び、待合室の一角から鰹出汁の香りを漂わせるのが『上毛高原そば』だ。注文からすぐに供される熱々の「舞茸天そば」で、奥利根の旅情を感じながら温まろう。",
      surprise: "上越新幹線が昭和五十七年十一月に大宮〜新潟間で開業して以来、奥利根・みなかみ温泉郷へ降り立つ旅人が最初に味わう「駅の香り」として記憶されてきた。",
      hook: "駅の待合室を出たら東口の駅前へ東南東に徒歩2分。石臼挽きの本格手打ち蕎麦を供する『手打ちそば 天丸』へ向かおう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of a classic Japanese station soba counter. A steaming ceramic bowl of buckwheat soba topped with crispy maitake mushroom tempura and chopped green onions, set on a wooden counter beside a red noren curtain, unpainted margins, no people, no text."
    },
    {
      name: "手打ちそば 天丸",
      spot_type: "食事",
      description: "上毛高原駅の東口すぐの場所に店を構える手打ち蕎麦の名店。厳選した玄蕎麦を店内の石臼で丁寧に挽き、「挽きたて・打ちたて・茹でたて」で提供する二八蕎麦や舞茸天ぷら、ソースカツ丼とのセットが人気。",
      address: "群馬県利根郡みなかみ町月夜野1146-2",
      prefecture: "群馬県",
      city: "利根郡みなかみ町",
      lat: 36.692759,
      lng: 138.979225,
      clue: "上毛高原駅の東口ロータリーを東南東へ抜けてすぐの角に、落ち着いた和風の佇まいを見せる『手打ちそば 天丸（てんまる）』がある。店内の石臼でゆっくりと熱を持たせずに挽いた蕎麦粉を使い、「挽きたて・打ちたて・茹でたて」の三たてで供される手打ち蕎麦は、瑞々しい艶と強いコシが持ち味だ。地元産の肉厚な舞茸をカラッと揚げた天ざるそばや、群馬名物のヒレソースカツ丼とのセットをじっくり味わおう。",
      surprise: "長年地域に愛されてきた老舗の味を絶やさぬよう、若手世代へと事業承継が行われ、先代直伝の手打ち技術とつゆの味が今も変わらず守り継がれている。",
      hook: "挽きたての手打ち蕎麦を堪能したら北北東へ徒歩9分。縄文時代の集落跡と直売所が広がる『道の駅 月夜野矢瀬親水公園』で散策を結ぼう。",
      image_prompt: "Transparent watercolor and fountain pen food illustration of a handmade soba restaurant in Minakami, Gunma. Freshly cut stone-milled soba noodles on a square bamboo seiro tray with golden maitake tempura and dipping sauce on a dark wooden table. Loose ink lines, wide unpainted Washi paper margins, no people, no text."
    },
    {
      name: "道の駅 月夜野矢瀬親水公園（矢瀬遺跡・月夜野はーべすと）",
      spot_type: "見どころ",
      description: "利根川の河岸段丘に広がる道の駅。敷地内には約3,500〜2,300年前（縄文時代後期〜晩期）の国指定史跡「矢瀬遺跡」の竪穴建物や四本柱構造物が復元され、農産物直売所「月夜野はーべすと」では地元産大豆100%の「つきよの納豆」などを販売している。",
      address: "群馬県利根郡みなかみ町月夜野2936",
      prefecture: "群馬県",
      city: "利根郡みなかみ町",
      lat: 36.697636,
      lng: 138.981245,
      clue: "天丸から利根川の支流・政所川に沿って北北東へ歩くと、三峰山と利根川の清流を望む河岸段丘に『道の駅 月夜野矢瀬親水公園』が開ける。芝生広場のなかに茅葺き屋根の竪穴建物や巨大な四本柱の木柱が立ち並ぶ光景は、約三千五百年前の縄文時代後期の集落を今に伝える国指定史跡「矢瀬遺跡」だ。古代の湧水遺構や祭祀場を巡ったあとは、併設の直売所「月夜野はーべすと」で地元産大豆百パーセントの「つきよの納豆」や旬の果実を手に取り、月夜野の歩みを結ぼう。",
      surprise: "平成四年の親水公園造成に伴う発掘調査で、縄文時代の水場遺構や石敷きの祭祀場、直径八十センチ近いクリの巨木を立てた四本柱跡がほぼ完全な配置で発見され、平成九年に国の史跡に指定された。",
      hook: "",
      image_prompt: "Cinematic watercolor background art of Yaze Ruins at Michi-no-Eki Tsukiyono Yaze Shinsui Park in Minakami, Gunma. Reconstructed thatched-roof Jomon pit dwellings and four towering wooden ritual pillars standing on a green river terrace beside the clear Tone River, with Mt. Mitsumine rising against a soft sky. Wide unpainted paper margins, no people, no text."
    }
  ]
};
