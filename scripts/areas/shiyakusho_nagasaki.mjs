// 市役所（長崎）エリア定義（松翁軒 本店から眼鏡橋、東明山 興福寺、岩永梅寿軒、ツル茶んへ編）
// 出典:
// - 松翁軒 本店（長崎県長崎市魚の町3-19）: 天和元年（1681年）創業のカステラ本舗。明治期に考案された「チョコラーテ」発祥の店であり、2階に「喫茶セヴィリヤ」を併設。
// - 眼鏡橋（長崎県長崎市魚の町1-1）: 寛永11年（1634年）に興福寺の黙子如定禅師が架設した日本最古のアーチ型石橋（国指定重要文化財）。
// - 東明山 興福寺（長崎県長崎市寺町4-32）: 元和6年（1620年）創建の日本最古の黄檗宗寺院（通称・あか寺）。大雄宝殿など国指定重要文化財を有する。
// - 岩永梅寿軒（長崎県長崎市諏訪町7-1）: 天保元年（1830年）創業、中通り商店街の老舗御菓子司。長崎カステラや伝統銘菓「寒菊」で知られる。
// - ツル茶ん（長崎県長崎市油屋町2-47）: 大正14年（1925年）創業の九州最古の喫茶店。長崎名物「トルコライス」と「元祖長崎風ミルクセーキ」を提供。
export default {
  slug: "shiyakusho_nagasaki",
  line: "長崎電軌桜町支線",
  station: "市役所",
  station_order: 1,
  area_name: "市役所",
  title: "中島川の眼鏡橋と三百年のカステラが香る寺町",
  description: "長崎電気軌道の市役所停留場を降りると、すぐそばを中島川の澄んだ流れと石橋群が横切り、その奥には江戸初期の寺院が連なる寺町通りと商家の街・中通り商店街が広がっている。天和元年創業のカステラ本舗『松翁軒 本店』から歩き始め、寛永十一年架橋の『眼鏡橋』、その架橋を指導した禅師の寺『東明山 興福寺』、天保元年創業の御菓子司『岩永梅寿軒』を経て、九州最古の喫茶店『ツル茶ん』へと至る1.2キロの道のり。",
  category: "歴史・文化",
  prefecture: "長崎県",
  budget_tier: 2,
  tags: ["市役所", "長崎電軌桜町支線", "眼鏡橋", "興福寺", "カステラ"],
  eyecatch_prompt: "Transparent watercolor and fountain-pen line illustration of Nakashima River in Nagasaki, the double stone arches of Spectacles Bridge (Meganebashi) reflecting complete circles in the clear stream, mossy stone embankments, a vermilion Chinese-style temple gate roof in the distance and golden Castella cake with an icy goblet of milk shake in the foreground corner, no people, no text, 16:9 aspect ratio",
  completion_badge: {
    name_ja: "中島川の石橋と和華蘭の粋をめぐる旅人",
    subtitle_en: "Wayfarer of Nakashima Stone Bridges and Wakaran Lore",
    description: "松翁軒 本店から眼鏡橋、東明山 興福寺、岩永梅寿軒、ツル茶んまでを巡り歩いた証"
  },
  question: "中島川の石橋から寺町と中通りを抜ける和華蘭の道で、あなたの心をとらえた長崎の伝統はどれですか？",
  choices: [
    {
      key: "A",
      text: "天和元年創業『松翁軒 本店』の2階喫茶で味わう、カステラと元祖「チョコラーテ」",
      description: "江戸初期から続くカステラ本舗のサロン「セヴィリヤ」で、明治期考案のチョコレートカステラを味わう時間",
      badge: {
        code: "shuin_shiyakusho_tsuruchan_milkshake",
        name_ja: "三百年のカステラとチョコラーテを識る粋人",
        subtitle_en: "Connoisseur of Heritage Castella and Chocolate",
        description: "松翁軒 本店で伝統のカステラ文化に触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "中島川の水面に双円を描く『眼鏡橋』と、その架橋を伝えた『東明山 興福寺』の朱塗山門",
      description: "寛永十一年に黙子如定禅師が架けた日本最古のアーチ石橋から、禅師が住持を務めた黄檗寺院へと辿る体験",
      badge: {
        code: "shuin_shiyakusho_turkish_rice_feast",
        name_ja: "眼鏡橋の双円と黄檗の古刹を辿る識者",
        subtitle_en: "Seeker of Meganebashi and Obaku Temple Lore",
        description: "眼鏡橋と東明山 興福寺の歴史的な繋がりを歩いた証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "中通り商店街の黒塗り町家『岩永梅寿軒』に並ぶ、菊の花びらを象った銘菓「寒菊」",
      description: "天保元年創業の御菓子司で、茶人に愛される繊細な干菓子と一晩寝かせたカステラの技に触れるひと時",
      badge: {
        code: "shuin_shiyakusho_taisho_salon_memory",
        name_ja: "古町の黒塗り町家と銘菓を愛でる茶人",
        subtitle_en: "Admirer of Nakadori Traditional Confections",
        description: "岩永梅寿軒で江戸後期から続く菓匠の技に触れた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "大正十四年創業『ツル茶ん』のトルコライスと、スプーンで食べる「長崎風ミルクセーキ」",
      description: "九州最古の喫茶店のレトロなテーブル席で、百年にわたり愛される二大名物を堪能する瞬間",
      badge: {
        code: "shuin_shiyakusho_retro_stained_glass",
        name_ja: "九州最古の喫茶とミルクセーキを嗜む食通",
        subtitle_en: "Gourmet of Taisho Coffeehouse Classics",
        description: "ツル茶んでトルコライスと長崎風ミルクセーキを味わった証",
        rarity: 3
      }
    }
  ],
  spots: [
    {
      name: "松翁軒 本店",
      spot_type: "休憩",
      description: "天和元年（1681年）創業の長崎カステラの老舗本店。伝統のカステラと明治期考案の「チョコラーテ」で知られ、2階に「喫茶セヴィリヤ」を併設。",
      address: "長崎県長崎市魚の町3-19",
      prefecture: "長崎県",
      city: "長崎市",
      lat: 32.748822,
      lng: 129.880022,
      clue: "市役所停留場の電車通りを渡ると、江戸初期の天和元年に創業したカステラ本舗『松翁軒（しょうおうけん）本店』の格調高い建物が迎えてくれる。熟練の職人が一つの窯を受け持って焼き上げる黄金色の長崎カステラに加え、明治期にオランダ商館ゆかりのチョコレートを取り入れて考案した「チョコラーテ」発祥の店として名高い。二階の喫茶室「セヴィリヤ」で、底に残るザラメの結晶がカリッと響く伝統の一切れを味わおう。",
      surprise: "明治時代に輸入されたばかりのチョコレートは当時まだ液体や粉末の薬用・飲料として扱われていたため、カステラ生地に練り込んで焼き上げた松翁軒の「チョコラーテ」は日本で最も古いチョコレート菓子のひとつとされている。",
      hook: "老舗のカステラを味わったら南へ徒歩3分。中島川に架かる日本最古のアーチ石橋『眼鏡橋』へ向かおう。",
      image_prompt: "Warm gouache and colored pencil illustration of two slices of golden Nagasaki Castella and dark chocolate Castella served on a blue-and-white porcelain plate beside a cup of coffee on a classic wooden cafe table, no people, no text"
    },
    {
      name: "眼鏡橋",
      spot_type: "見どころ",
      description: "寛永11年（1634年）に興福寺の黙子如定禅師が架設した日本最古のアーチ型石橋。川面に映る双円が眼鏡のように見える国指定重要文化財。",
      address: "長崎県長崎市魚の町1-1",
      prefecture: "長崎県",
      city: "長崎市",
      lat: 32.747324,
      lng: 129.880355,
      clue: "松翁軒から南へすぐの中島川河畔へ出ると、優美な二つの石造アーチを連ねた国指定重要文化財『眼鏡橋』が澄んだ川面に影を落としている。寛永十一年に興福寺の二代住持・黙子如定（もくすにょじょう）禅師が中国の石橋技術を伝えて架けさせた、日本最古の本格的なアーチ型石橋だ。川岸の飛び石へ降りて水面に映り込む二つの丸い輪郭を眺め、護岸の石垣に埋め込まれたハートストーンを探してみよう。",
      surprise: "昭和五十七年（1982年）の長崎大水害では中島川の石橋群の多くが濁流で損壊したが、流出を免れた元の石材を一石ずつ番号を振って回収・再利用し、江戸時代の姿そのままに精密に復元された。",
      hook: "川面に映る双円を眺めたら東へ徒歩5分。眼鏡橋を架けた禅師の寺『東明山 興福寺』を訪ねよう。",
      image_prompt: "Poetic transparent watercolor illustration of a single stone arch section of an ancient double-arch bridge reflecting a complete circle in clear shallow river water beside mossy stone embankment blocks, no people, no text"
    },
    {
      name: "東明山 興福寺",
      spot_type: "見どころ",
      description: "元和6年（1620年）創建の日本最古の黄檗宗寺院（通称・あか寺）。眼鏡橋を架けた黙子如定禅師が住持を務め、国重文の大雄宝殿を有する。",
      address: "長崎県長崎市寺町4-32",
      prefecture: "長崎県",
      city: "長崎市",
      lat: 32.747886,
      lng: 129.88384,
      clue: "眼鏡橋から東へ進み、寺院が連なる寺町通りへ出ると朱塗りの山門が目を引く『東明山 興福寺』に到着する。元和六年創建の日本最古の黄檗宗寺院で、眼鏡橋を架けた黙子如定禅師が住持を務めた。",
      surprise: "国指定重要文化財の本堂「大雄宝殿（だいおうほうでん）」は中国・明朝末期の建築様式を純粋に伝える木造建築であり、内部には航海の安全を守る媽祖（まそ）像も祀られている。",
      hook: "黄檗建築の粋に触れたら西南西へ徒歩5分。中通り商店街の老舗御菓子司『岩永梅寿軒』へ向かおう。",
      image_prompt: "Atmospheric sumi-ink and vermilion pigment wash illustration of the curved Chinese Ming-style roof eaves and hanging lantern of Kofukuji Temple framed by lush green trees, quiet historical depth, no people, no text"
    },
    {
      name: "岩永梅寿軒",
      spot_type: "買い物",
      description: "天保元年（1830年）創業、中通り商店街に店を構える老舗和菓子店。一晩寝かせて仕上げる「長崎カステラ」や伝統の干菓子「寒菊」で名高い。",
      address: "長崎県長崎市諏訪町7-1",
      prefecture: "長崎県",
      city: "長崎市",
      lat: 32.746667,
      lng: 129.880997,
      clue: "興福寺の門前から西南西へ石畳の坂を下り、長崎で最も古い商店街とされる中通りへ入ると、黒塗りの重厚な町家構えの『岩永梅寿軒（いわながばいじゅけん）』が現れる。江戸後期の天保元年の創業以来、厳選した卵と糖蜜で焼き上げて一晩じっくり寝かせることで、しっとりとした口当たりとザラメの調和を生み出すカステラや、菊の花びらを象った琥珀糖のような銘菓「寒菊（かんぎく）」など、茶人にも愛される和菓子を作り続けている。",
      surprise: "岩永梅寿軒のカステラは職人が手作業で少量を丁寧に焼き上げて一晩休ませる製法を守るため一日の製造数が限られており、地元でも朝早くに売り切れることが多い幻の逸品として知られる。",
      hook: "黒塗りの老舗の技に触れたら中通りを南へ徒歩6分。九州最古の喫茶店『ツル茶ん』へ足を運ぼう。",
      image_prompt: "Delicate watercolor and ink illustration of translucent pastel-tinted chrysanthemum-shaped sugar confections (Kangiku) arranged on a black lacquer tray inside a traditional merchant shop, no people, no text"
    },
    {
      name: "ツル茶ん",
      spot_type: "食事",
      description: "大正14年（1925年）創業の九州最古の喫茶店。ピラフ・ナポリタン・カツを一皿にした「トルコライス」と、スプーンで食べる「長崎風ミルクセーキ」の名店。",
      address: "長崎県長崎市油屋町2-47",
      prefecture: "長崎県",
      city: "長崎市",
      lat: 32.743139,
      lng: 129.880679,
      clue: "賑やかな中通り商店街を南へ抜け、思案橋近くの路地へ入ると、大正十四年創業の九州最古の喫茶店『ツル茶ん』のレトロな看板が見えてくる。店内では、バター香るピラフとナポリタンの上に揚げたてのとんかつを乗せてデミグラスソースをかけた長崎名物「トルコライス」と、練乳と卵の氷をスプーンでシャリシャリとすくって食べる「元祖長崎風ミルクセーキ」が二大看板として愛されている。百年の歴史が息づく席で和華蘭の街歩きを味わおう。",
      surprise: "長崎のミルクセーキが飲み物ではなくスプーンで食べるシャーベット状になったのは、蒸し暑い長崎の夏に涼をとれるよう初代店主が考案したレシピが街じゅうに広まったためだと伝えられている。",
      hook: "",
      image_prompt: "Nostalgic gouache illustration of a footed glass goblet filled with mounded icy Nagasaki-style milk shake topped with a red cherry and a metal spoon, beside a plate of Turkish rice on a retro cafe table, no people, no text"
    }
  ]
};
