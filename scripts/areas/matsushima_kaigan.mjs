const s1_clue =
  '松島海岸駅の改札を出て海岸通りを東北東へ徒歩3分、石段の上に寄棟造の御座の間が海へ張り出す観瀾亭が現れる（8:30〜17:00開館、無休）。雨戸を開け放った座敷へ上がり、極彩色の金碧障壁画と眼下に広がる松島湾の島影を見比べてみよう。外の海面で反射した陽光が床の間の金箔を柔らかく照らし出し、潮風とともに届くさざ波の音が往時の大名たちの舟遊びの風情を今に呼び覚ましてくれる。';
const s1_surprise =
  '豊臣秀吉から拝領した伏見桃山城の茶室を、伊達政宗が江戸藩邸を経て二代忠宗の代にこの海辺へ移築させたと伝わる。「波を観る亭」の名の通り、湾に浮かぶ島々をそのまま座敷の借景として取り込む大胆な意匠に、伊達家の美意識が息づいている。';
const s1_hook =
  '黄金の障壁画と海景が溶け合う座敷を後にしたら、東北東へ徒歩4分の小島に建つ御堂へ歩みを進めよう。';

const s2_clue =
  '観瀾亭から東北東へ徒歩4分、朱塗りの透かし橋が架かる松の小島に宝形造の五大堂が建つ（8:00〜日没開門、拝観自由）。橋板の隙間から青い海面を覗き込みつつ渡り、軒下の十二支彫刻を見上げよう。';
const s2_surprise =
  '大同二年の創建と伝わり、現在の建物は伊達政宗が紀州の名工・鶴衛門家次に命じて再建させた桃山建築だ。島へ渡る「透かし橋」は、参詣者が足元の海を見つめて歩みを整え、心を鎮めてから御堂へ向かうための仕掛けとして設えられた。';
const s2_hook =
  '蟇股の十二支彫刻と潮風を確かめたら、東北東へ徒歩2分の和食処で松島名物のカキ料理を味わおう。';

const s3_clue =
  '五大堂から海岸通りを東北東へ徒歩2分、玉砂利のアプローチの奥に数寄屋風の屋根と格子戸を構えた「さんとり茶屋」がある（11:00〜15:00・17:00〜21:00営業、水曜定休）。木の温もりある店内へ入り、松島湾で育ったカキ丼や香ばしいカキ焼き、海藻のアカモクを添えた海鮮膳を注文しよう。窓越しに松の緑と海風を感じながら、内海が蓄えた濃厚な滋養をゆっくりと噛みしめたい。';
const s3_surprise =
  '二百六十余の島々が外洋の荒波を遮り、周囲の森林から栄養豊富な湧水が注ぎ込む松島湾は、小粒ながら旨味が凝縮したカキやアナゴが育つ天然のゆりかごだ。プリッとした身の甘みと磯の香りが、穏やかな内海の豊かさをまっすぐに伝えてくれる。';
const s3_hook =
  '濃厚なカキと磯の香りを堪能したら、西へ徒歩3分の総本店へ立ち寄り、炭火で笹かまぼこを炙ってみよう。';

const s4_clue =
  'さんとり茶屋から海岸通りを西へ徒歩3分、五大堂参道の向かいに白い外壁の「松島蒲鉾本舗 総本店」が構える（9:30〜17:00営業、無休）。店内の丸い炭火コンロを囲み、竹串に刺した真っ白な笹かまぼこを自分の手でじっくり炙ってみよう。赤く熾った炭の上で少しずつ串を返していくと、表面がぷっくりと膨らんで香ばしいきつね色の焼き目がつき、立ち上る湯気とともに熱々のうちに頬張れる。';
const s4_surprise =
  '三陸沖で水揚げされた白身魚のすり身を、伊達家の家紋「竹に雀」にちなんで笹の葉の形に整えて焼き上げたのが笹かまぼこの始まりだ。炭火の遠赤外線で表面をパリッと焼き上げることで、魚の自然な甘みと弾力が際立つ。';
const s4_hook =
  '焼きたての笹かまぼこでひと息ついたら、北東へ徒歩4分の大きな魚市場へ足を延ばそう。';

const s5_clue =
  '松島蒲鉾本舗から北東へ徒歩4分、観光船発着場の先を北へ入ると切妻屋根の「松島さかな市場」が現れる（9:00〜16:00営業、無休）。気仙沼の遠洋まぐろ船団が開いた活気ある館内をめぐり、松島湾産の焼き海苔や燻製カキの瓶詰め、三陸の乾物などずらりと並ぶ広い売場を見渡してみよう。穏やかな島影の湾が育んだ海産物から旅の土産を手に取り、潮風の余韻とともに海辺の街歩きを締めくくろう。';
const s5_surprise =
  '波穏やかな松島湾が育む海苔やカキと、黒潮と親潮がぶつかる三陸沖の遠洋漁業の恵みが一堂に集まる市場だ。内海の繊細な滋味と外洋の力強い魚食文化の双方を手に取りながら、海辺の街歩きを締めくくることができる。';
const s5_hook = '';

export const area = {
  slug: 'matsushima_kaigan',
  station_order: 251,
  line: 'JR仙石線',
  station: '松島海岸',
  area_name: '松島海岸・五大堂',
  prefecture: '宮城県',
  Stop_name: '松島海岸駅',
  title: '二百六十の島影と伊達の美意識が映る湾',
  description:
    '黒松をいただく二百六十余の島々が浮かぶ松島海岸。伊達家ゆかりの観瀾亭から赤い透かし橋の五大堂、カキ料理の茶屋、笹かまぼこの手焼き体験、魚市場まで海辺の文化をたどるルート。',
  category: '日本三景・桃山建築・海辺の食文化',
  budget_tier: 3,
  subtitle: '金碧の御座の間と赤橋の島堂、内海が育むカキと笹かまぼこをめぐる',
  area_tag: '宮城県宮城郡松島町',
  time_minutes: 90,
  distance_km: 1.0,
  duration_min: 90,
  tags: ['日本三景', '伊達政宗', '桃山建築', '牡蠣', '笹かまぼこ'],
  eyecatch_prompt:
    'A sweeping panoramic view of Matsushima Bay with dozens of pine-covered white tuff rock islands floating across calm indigo waters under soft morning mist and golden light, rendered in Date Momoyama Gold-Leaf Screen and Shiogama Indigo Woodblock style. Soft organic vignette edges blending into a warm cream Washi paper background (#F7F2E6). No red bridge close-up, no people, no text, no letters, no numbers, no borders.',
  completion_badge: {
    code: 'MATSUSHIMA_KAIGAN_CORE',
    name_ja: '松島湾の風光と潮香のしるし',
    subtitle_en: 'Walker of Pine Islands and Golden Screens',
    description:
      '観瀾亭から五大堂、さんとり茶屋、松島蒲鉾本舗、松島さかな市場まで、伊達家の美意識と松島湾の恵みをたどった証。',
    image_prompt:
      'Woodblock crest of pine-covered rock islands floating on indigo waves with gold-leaf clouds on cream washi paper. No text.',
  },
  question:
    '大切な人を誘って松島海岸をめぐるなら、黄金の御座の間や赤橋の御堂、海辺の味わいのどれから案内しますか？',
  choices: [
    {
      key: 'A',
      text: '金箔の障壁画が輝く御座の間から、穏やかな波と島影を見渡した時間',
      description: '観瀾亭の床の間と海景が溶け合う、伊達家の風雅なもてなしの心に惹かれた。',
      badge: {
        code: 'MATSUSHIMA_KAIGAN_A',
        name_ja: '金碧の借景を愛でる旅人',
        subtitle_en: 'Admirer of Golden Bay Screens',
        description: '観瀾亭の金碧障壁画と松島湾の借景に武家の美意識を見いだした者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Woodblock emblem of a gold-leaf folding screen with green pine branches and calm blue bay waves. No text.',
      },
    },
    {
      key: 'B',
      text: '足元に海が透ける赤い橋を一歩ずつ渡り、小島の御堂で十二支彫刻を見上げた瞬間',
      description: '五大堂の透かし橋が演出する緊張感と、桃山建築の力強い意匠に心動かされた。',
      badge: {
        code: 'MATSUSHIMA_KAIGAN_B',
        name_ja: '朱橋と島堂を渡る巡礼者',
        subtitle_en: 'Crosser of the Vermilion Openwork Bridge',
        description: '五大堂の透かし橋を渡り、桃山期の十二支彫刻と潮風に触れた者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Woodblock emblem of a vermilion openwork bridge leading to a wooden temple roof among pine trees. No text.',
      },
    },
    {
      key: 'C',
      text: '炭火の上でぷっくり膨らむ笹かまぼこを返し、焼き目の香ばしさを頬張ったひと休み',
      description: '松島蒲鉾本舗の炉端で、自分の手で焼き上げる魚の旨みと温もりを味わった。',
      badge: {
        code: 'MATSUSHIMA_KAIGAN_C',
        name_ja: '炉端の香ばしさを知る食客',
        subtitle_en: 'Taster of Charcoal-Grilled Fishcakes',
        description: '手焼きの笹かまぼこに宿る三陸の魚食文化と職人の技を味わった者に贈られる称号。',
        rarity: 4,
        image_prompt:
          'Woodblock emblem of bamboo-leaf shaped white fishcakes grilling over glowing red charcoal on a round brazier. No text.',
      },
    },
    {
      key: 'D',
      text: '潮風が届く茶屋と魚市場で、松島のカキや三陸の海の幸が持つ滋養に触れた場面',
      description: 'さんとり茶屋のカキ料理や松島さかな市場の活気ある港の恵みに満たされた。',
      badge: {
        code: 'MATSUSHIMA_KAIGAN_D',
        name_ja: '内海の滋養を味わう目利き',
        subtitle_en: 'Connoisseur of Bay Oysters and Tides',
        description: '島々が守る松島湾のカキと三陸の豊かな海産物の魅力を堪能した者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Woodblock emblem of oyster shells, dried seaweed bundles, and gentle indigo ocean ripples. No text.',
      },
    },
  ],
  spots: [
    {
      name: '観瀾亭',
      spot_type: '見どころ',
      address: '宮城県宮城郡松島町松島字町内56',
      lat: 38.369316,
      lng: 141.061684,
      radius_m: 50,
      order: 1,
      description:
        '伊達政宗が豊臣秀吉から拝領した伏見桃山城の茶室を移築したと伝わる納涼亭（8:30〜17:00開館、無休）。国の重要文化財に指定された御座の間の金碧障壁画と松島湾の眺望を楽しめる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      f7_fragment: '海面の光を映す金碧障壁画と、松島湾を一望する伊達家の御座の間。',
      f7_full:
        '伏見桃山城から移築された茶室の金箔が潮風に揺れる光を受け止め、内海の島々をひとつの庭へと変える。',
      image_prompt:
        'An open tatami pavilion room with luminous gold-leaf sliding screen paintings of pine trees overlooking the calm blue waters and pine islands of Matsushima Bay, Date Momoyama Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '五大堂',
      spot_type: '見どころ',
      address: '宮城県宮城郡松島町松島字町内111',
      lat: 38.369718,
      lng: 141.064207,
      radius_m: 50,
      order: 2,
      description:
        '伊達政宗が再建した東北最古級の桃山建築の仏堂（8:00〜日没開門、拝観自由）。松島湾の小島に架かる朱塗りの透かし橋を渡り、軒下の蟇股に彫られた十二支の彫刻を間近に見学できる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      f7_fragment: '足元に青い海が透ける朱塗りの橋と、岩島に建つ桃山期の御堂。',
      f7_full:
        '透かし橋を一歩ずつ渡り、蟇股に刻まれた十二支の彫刻を見上げると、海と祈りが交差する静けさに包まれる。',
      image_prompt:
        'The weathered wooden Godaido hall with its pyramidal roof and intricate zodiac woodcarvings standing on a pine-covered rocky islet connected by a vermilion openwork bridge, Date Momoyama Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: 'さんとり茶屋',
      spot_type: '食事',
      address: '宮城県宮城郡松島町松島字仙随24-4-1',
      lat: 38.370387,
      lng: 141.065566,
      radius_m: 50,
      order: 3,
      description:
        '五大堂近くの海岸通り沿いに佇む海鮮和食処（11:00〜15:00・17:00〜21:00営業、水曜定休）。松島湾産のカキを使ったカキ丼やカキ焼き、三陸の魚介とアカモクを盛り込んだ定食を味わえる。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      f7_fragment: '二百六十余の島々が守る内海で育った、旨味あふれるカキ料理。',
      f7_full:
        '森の湧水と穏やかな潮流が育てた松島のカキと海藻が、海辺の茶屋で豊かな香りを立ち上らせる。',
      image_prompt:
        'A lacquered wooden tray set with a steaming bowl of plump grilled oysters over rice, miso soup, and small ceramic dishes of coastal delicacies in a warm wooden tearoom, Date Momoyama Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '松島蒲鉾本舗 総本店',
      spot_type: '休憩',
      address: '宮城県宮城郡松島町松島字町内120',
      lat: 38.370402,
      lng: 141.063477,
      radius_m: 50,
      order: 4,
      description:
        '五大堂の参道正面に構える笹かまぼこの老舗総本店（9:30〜17:00営業、無休）。店内の炭火コンロで串付きの笹かまぼこを自分で炙って食べる「笹かま手焼き体験」が楽しめる。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      f7_fragment: '炭火の上できつね色に膨らむ、焼きたての笹かまぼこの香ばしさ。',
      f7_full:
        '伊達家の家紋にちなむ笹の葉形のかまぼこを炉端で炙れば、白身魚の甘い香りとプリッとした弾力が広がる。',
      image_prompt:
        'Bamboo-leaf shaped white fishcakes (Sasa-kamaboko) on wooden skewers grilling to a golden brown over glowing charcoal on a round tabletop brazier, Date Momoyama Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '松島さかな市場',
      spot_type: '買い物',
      address: '宮城県宮城郡松島町松島字普賢堂4-10',
      lat: 38.371949,
      lng: 141.06517,
      radius_m: 50,
      order: 5,
      description:
        '気仙沼の遠洋まぐろ船団が運営する大型海産物市場（9:00〜16:00営業、無休）。松島湾産の焼き海苔やカキの燻製・オイル漬け、三陸の水産加工品や乾物など多彩な海産土産が揃う。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      f7_fragment: '内海の焼き海苔から三陸の海産珍味までが一堂に揃う港の市場。',
      f7_full:
        '松島湾の穏やかな恵みと三陸沖の力強い魚食文化を手に取り、潮風の記憶をそのまま持ち帰る。',
      image_prompt:
        'Wooden market stalls neatly displaying jars of smoked oysters, bundles of dried seaweed, and woven baskets of coastal seafood souvenirs under warm market lights, Date Momoyama Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
  ],
};

export default area;
