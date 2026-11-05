export default {
  slug: "miraidaira",
  line: "つくばエクスプレス線",
  station: "みらい平駅",
  station_order: 142,
  area_name: "みらい平・掘割の鉄路と小張松下流綱火の道",
  title: "掘割を走る未来の鉄路から小張綱火と善空寺へ",
  description: "平成17年（2005年）のつくばエクスプレス開業とともに誕生した新しい街・みらい平。しかし駅から陽光台の緑道を南へわずか十数分歩けば、そこには徳川家康側近・松下重綱が立藩した「小張（おばり）藩」の城下台地と、空中に張った綱の上で花火とからくり人形が舞う国指定重要無形民俗文化財「小張松下流綱火」の里が広がっています。焼きたてパンが香る駅前から、四百年の火術と南北朝期の阿弥陀仏が眠る古刹へと時代を遡るルートです。",
  category: "歴史・文化",
  prefecture: "茨城県",
  budget_tier: 1,
  tags: ["みらい平", "つくばエクスプレス", "小張松下流綱火", "小張愛宕神社", "善空寺"],
  eyecatch_prompt: "A warm transparent watercolor and fountain pen sketchbook illustration contrasting a modern sunken railway station plaza with young street trees in the foreground, and an ancient cedar shrine grove on a southern plateau in Ibaraki where traditional hanging sparkler puppet strings (Tsunabi) glimmer softly against an evening sky. Unpainted Washi paper margins, no text, no people.",
  completion_badge: {
    name_ja: "陽光台の風と小張綱火の伝統を継ぐ旅人",
    subtitle_en: "Wayfarer of Miraidaira and Obari Tsunabi Fire Puppetry",
    description: "CRAFT BAKERYからみらい平駅、陽光台3丁目公園、小張愛宕神社、無量山 善空寺までを巡り歩いた証"
  },
  question: "平成に生まれた陽光台から江戸初期の小張藩の台地へと時代が切り替わる瞬間、ふと足が止まった場所はどこですか？",
  choices: [
    {
      key: "A",
      text: "陽光台の朝を彩る『CRAFT BAKERY』の焼きたてパンの香りと、半地下の掘割を列車が駆ける『みらい平駅』",
      description: "つくばエクスプレスとともに生まれた新しい街のベーカリーと、台地を掘り下げた開放的な駅舎を眺める時間",
      badge: {
        code: "shuin_miraidaira_bakery_sunken_station",
        name_ja: "新都市の麦香と掘割の鉄路を愛でる旅人",
        subtitle_en: "Explorer of Sunny Plateau Bakery and Sunken Rail",
        description: "CRAFT BAKERYとみらい平駅で陽光台の街並みと鉄道建築に触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "巨石がサークル状に並ぶ『陽光台3丁目公園（石の公園）』から、小張の古い農村台地へと景色が切り替わる瞬間",
      description: "平成のニュータウンの南端で自然石の造形に触れ、江戸・戦国の記憶が残る旧道へと坂を下るひと時",
      badge: {
        code: "shuin_miraidaira_stone_park_border",
        name_ja: "石の広場と時代境の坂道を歩む探訪者",
        subtitle_en: "Walker of the Stone Park and Time Horizon",
        description: "陽光台3丁目公園で新旧の街が交差する台地の地形に触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "四百年続く火からくり「小張松下流綱火」が夜空を焦がす『小張愛宕神社』の深い杉木立",
      description: "初代小張藩主・松下石見守重綱の火薬術に起源を持つ国指定重要無形民俗文化財の舞台に立つ瞬間",
      badge: {
        code: "shuin_miraidaira_obari_atago_tsunabi",
        name_ja: "四百年の火術・小張松下流綱火を識る粋人",
        subtitle_en: "Connoisseur of Obari Matsushita-ryu Tsunabi",
        description: "小張愛宕神社で国指定重要無形民俗文化財・綱火の歴史に触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "南北朝時代の貞和二年に造立された阿弥陀如来立像を守り伝える、小張城下の古刹『無量山 善空寺』",
      description: "かつての小張城跡の台地東縁で、六百八十年の歳月を刻む仏像と静かな境内の風に包まれる時間",
      badge: {
        code: "shuin_miraidaira_zenkuji_obari_castle",
        name_ja: "小張城下の古刹と南北朝の仏を敬う参拝者",
        subtitle_en: "Pilgrim of Obari Castle Town and Nanbokucho Buddha",
        description: "無量山 善空寺で小張藩の歴史と県指定文化財の阿弥陀如来像に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "CRAFT BAKERY（クラフトベーカリー）",
      spot_type: "買い物",
      description: "みらい平駅の西側すぐ、陽光台1丁目に店を構える地域密着のベーカリー。毎朝焼き上げる香ばしいバゲットやクロワッサン、季節の惣菜パンや菓子パンが地元客に親しまれている（月曜・第3日曜定休）。",
      address: "茨城県つくばみらい市陽光台1丁目7-4",
      prefecture: "茨城県",
      city: "つくばみらい市",
      lat: 35.994224,
      lng: 140.037855,
      clue: "つくばエクスプレス・みらい平駅の西側へ出ると、陽光台一丁目の角から香ばしい小麦の匂いを漂わせる『CRAFT BAKERY（クラフトベーカリー）』が見えてくる。職人が毎朝早くから窯で焼き上げるバゲットやクロワッサン、彩り豊かな惣菜パンや甘いデニッシュが木の棚に並び、新しく生まれた街の朝の風景を温かく彩っている。これから始まる小張の古道歩きの供に、焼きたてのパンをひとつ選んでみよう。",
      surprise: "つくばエクスプレス開業前は静かな山林と畑が広がっていた台地が「陽光台」として開発され、若い世代が集うパン激戦区・つくばエリアの新しい一角を担っている。",
      hook: "焼きたてのパンを手に入れたら北東へ徒歩1分。地面を掘り下げた独特の構造を持つ『つくばエクスプレス みらい平駅』へ向かおう。",
      image_prompt: "Soft gouache and colored pencil partial illustration of a cozy neighborhood artisan bakery window in Ibaraki, showing golden-brown crusty baguettes, croissants, and braided loaves arranged on wooden trays bathed in morning sunlight. Warm inviting textures, no text."
    },
    {
      name: "つくばエクスプレス みらい平駅（半地下掘割ホーム・駅前広場）",
      spot_type: "見どころ",
      description: "平成17年（2005年）8月に開業したつくばエクスプレスの駅。高低差のある台地を掘り下げた「掘割（半地下）構造」のホームを持ち、地上の改札コンコースや橋上から行き交う列車を見下ろすことができる。",
      address: "茨城県つくばみらい市陽光台1丁目5-4",
      prefecture: "茨城県",
      city: "つくばみらい市",
      lat: 35.994505,
      lng: 140.038283,
      clue: "ベーカリーから北東へ進むと、優美な曲線を描く白い屋根の『つくばエクスプレス みらい平駅』の駅前広場に出る。平成十七年八月の開業とともに誕生したこの駅は、前後の区間がトンネルや高架橋で結ばれるなか、伊奈台地の地面を深く掘り下げた「掘割（半地下）構造」になっているのが特徴だ。街の東西の視界を遮らない開放的な広場から、掘割の底を時速百キロ超で駆け抜ける列車の響きを感じてみよう。",
      surprise: "駅のすぐ北側で丘陵の下をトンネルでくぐり、南側では小貝川低地を渡る高架橋へと一気に駆け上がるため、台地の断面を活かした半地下ホームが採用された。",
      hook: "掘割を走る鉄路を眺めたら南南東へ徒歩5分。巨石が並ぶ街区公園『陽光台3丁目公園（石の公園）』へ進もう。",
      image_prompt: "Architectural watercolor and ink sketch of a modern curved glass-and-steel station roof overlooking a sunken open-cut railway track in a sunny suburban plaza, with crisp blue sky and young zelkova trees. Clean, airy composition, no text."
    },
    {
      name: "陽光台3丁目公園（石の公園）",
      spot_type: "見どころ",
      description: "陽光台の住宅街南端近くに位置し、地元で「石の公園」の愛称で親しまれる公園。芝生広場や遊歩道に沿って大小の自然石がサークル状・階段状に配され、新市街地から南の小張地区へと移り変わる境界のランドマークとなっている。",
      address: "茨城県つくばみらい市陽光台3丁目20",
      prefecture: "茨城県",
      city: "つくばみらい市",
      lat: 35.99232,
      lng: 140.040219,
      clue: "みらい平駅から南南東へ歩くと、大きな自然石がいくつも配された『陽光台3丁目公園（石の公園）』に至る。新しい住宅街の南端で、これから向かう小張の古い台地へと景色が切り替わる境界を確かめよう。",
      surprise: "単調になりがちな造成地の公園に筑波山系の自然石を大胆に据えることで、大地とのつながりを感じさせる造形広場として設計された。",
      hook: "石の公園から台地の坂を南南東へ徒歩11分。四百年続く火からくりの舞台『小張愛宕神社』を訪ねよう。",
      image_prompt: "Pastel watercolor and colored pencil illustration of a sunlit neighborhood park featuring sculpted natural boulders arranged on a green lawn with a winding stone path leading toward an old cedar forest on the horizon. Peaceful atmosphere, no text."
    },
    {
      name: "小張愛宕神社（小張松下流綱火）",
      spot_type: "見どころ",
      description: "火具土命を祀る小張地区の鎮守社。慶長8年（1603年）に小張藩主となった松下石見守重綱が創始したと伝わる国指定重要無形民俗文化財「小張松下流綱火」が毎年8月24日の例祭で奉納される。",
      address: "茨城県つくばみらい市小張3235",
      prefecture: "茨城県",
      city: "つくばみらい市",
      lat: 35.987365,
      lng: 140.044096,
      clue: "石の公園から南南東へ坂を下りて小張の集落へ入ると、深い杉木立に囲まれた『小張愛宕神社』の鳥居が見えてくる。ここは国の重要無形民俗文化財「小張松下流綱火（おばりまつしたりゅうつなび）」が四百年以上にわたり奉納されてきた舞台だ。関ヶ原の戦いの後、小張藩一万六千石の藩主となった徳川家康側近・松下石見守重綱が火薬術を応用して考案したと伝わる、空中の綱と仕掛け花火・あやつり人形が織りなす伝統芸能の社に手を合わせよう。",
      surprise: "毎年八月二十四日の夜には境内の高みに何本もの綱が張り巡らされ、お囃子に合わせて火花を噴き上げる船や人形が夜空を走る幻想的な光景が繰り広げられる。",
      hook: "火からくりの古社に参拝したら南へ徒歩8分。小張城下の歴史と南北朝期の阿弥陀仏を伝える『無量山 善空寺』で散策を結ぼう。",
      image_prompt: "Cinematic watercolor and sumi-ink illustration of a historic wooden shrine pavilion surrounded by tall cedar trees in Ibaraki, with a subtle dreamlike overlay of golden traditional firework sparks and silken puppet lines stretched between bamboo poles in the twilight air. No text."
    },
    {
      name: "無量山 善空寺（木造阿弥陀如来立像・小張城下の古刹）",
      spot_type: "見どころ",
      description: "文明3年（1471年）頃の創建と伝わる浄土宗の古刹。戦国時代の只越善久や江戸初期の小張藩主・松下重綱が拠った小張城跡の台地東縁に位置し、茨城県指定有形文化財「木造阿弥陀如来立像」（南北朝時代・貞和2年銘）を本尊とする。",
      address: "茨城県つくばみらい市小張2623",
      prefecture: "茨城県",
      city: "つくばみらい市",
      lat: 35.983111,
      lng: 140.043371,
      clue: "小張愛宕神社から旧道を南へ進むと、戦国時代から江戸初期にかけて栄えた小張城跡の台地東縁に佇む浄土宗の古刹『無量山 善空寺』の山門に行き着く。室町時代の文明三年頃の開創と伝わり、本尊として祀られる「木造阿弥陀如来立像」は、南北朝時代の貞和二年に造立されたことが胎内銘から判明している茨城県指定有形文化財の名宝だ。最先端の高速鉄道が走る駅から歩いてたどり着いた中世・近世の城下台地で、静かに歩みを結ぼう。",
      surprise: "本尊の阿弥陀如来立像はかつて結城の弘経寺からこの小張の地へ迎えられたと伝わり、茨城県内でも数少ない南北朝時代の在銘仏像として極めて高い価値を持つ。",
      hook: "",
      image_prompt: "Serene transparent watercolor and fountain pen illustration of a peaceful historic Buddhist temple roof and stone lantern framed by blooming trees and bamboo on a quiet plateau in Ibaraki, bathed in warm late-afternoon light. Poetic unpainted margins, no text."
    }
  ]
};
