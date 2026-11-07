const s1_clue =
  '出雲大社前駅から神門通りを北へ徒歩12分、勢溜の大鳥居をくぐり松並木が続く全国でも珍しい「下り参道」を抜けると「出雲大社」の拝殿と本殿が姿を現す（6:00〜18:00開門、無休）。銅鳥居の先の拝殿と神楽殿に掲げられた巨大な大注連縄の真下へ進み、出雲ならではの「二礼四拍手一礼」の作法で静かに手を合わせよう。八足門の奥にそびえる国宝本殿の千木が、澄んだ朝の空へ力強く伸びている。';
const s1_surprise =
  '参道が鳥居から社殿へ向かって緩やかな下り坂になっているのは、神々の座す聖域へと謙虚に身を低くして進む心を形にしたものと伝わる。高さ約二十四メートルを誇る国宝本殿の千木が、八雲立つ空へ力強く突き抜けている。';
const s1_hook =
  '二礼四拍手一礼の作法で参拝を終えたら、南東へ徒歩7分の博物館で境内から出土した巨大な柱を見に行こう。';

const s2_clue =
  '出雲大社から南東へ徒歩7分、北山山系を映す水盤の先に茶褐色の外壁を持つ「島根県立古代出雲歴史博物館」が建つ（9:00〜17:00開館、第3火曜休館）。展示室の中央へ進み、出雲大社境内から出土した直径約1.3mの杉の巨木を三本束ねた「宇豆柱（うづばしら）」と、三百五十八本の荒神谷銅剣の輝きを間近に見つめよう。十メートルの一/十模型と実物の柱を見比べれば、古代神殿の威容が鮮やかに蘇る。';
const s2_surprise =
  '平安・鎌倉期の文献に「雲に届く十六丈（約48m）の高層神殿」と記されながら長く謎とされてきた伝承が、平成十二年に本殿前からこの実物の巨大宇豆柱が掘り出されたことで現実の歴史として裏付けられた。';
const s2_hook =
  '巨大神殿を支えた宇豆柱と青銅器の迫力を体感したら、南西へ徒歩6分の鳥居前で出雲そばの昼食を味わおう。';

const s3_clue =
  '博物館から南西へ徒歩6分、勢溜の大鳥居前に白い暖簾を掲げた「そば処 田中屋」がある（11:00〜16:00営業、売り切れ次第終了、木曜定休）。店内へ入り、朱塗りの丸い器を三段重ねた名物「三段割子そば」を注文しよう。有田焼の徳利から濃いめのそばつゆを直接回しかけ、とろろや紅葉おろしなど三段ごとに異なる薬味を絡めながら、殻ごと石臼で挽いた黒めの蕎麦の強い香りを堪能したい。';
const s3_surprise =
  'そばの実を甘皮や殻ごと石臼で挽き込む「挽きぐるみ」によって、黒みがかった色合いと強い香りを引き出すのが出雲そばの伝統だ。松江藩の茶人が野外で蕎麦を楽しむために考案した朱塗りの割子器が、門前の昼食を華やかに彩る。';
const s3_hook =
  '香り高い三段割子そばでお腹を満たしたら、南南東へ徒歩3分のぜんざい専門店で食後の甘味を楽しもう。';

const s4_clue =
  'そば処 田中屋から神門通りを南南東へ徒歩3分、白壁の町家が並ぶ通り沿いに「日本ぜんざい学会 壱号店」が現れる（10:00〜17:00営業、不定休）。紅白の白玉が浮かぶ温かな出雲ぜんざいと塩昆布でひと息つこう。';
const s4_surprise =
  '旧暦十月の神在月（かみありづき）に全国の神々が出雲へ集まった際、振る舞われた「神在（じんざい）餅」が出雲弁で訛って「ぜんざい」になったと伝わる発祥の地ならではの甘味だ。';
const s4_hook =
  '紅白白玉のぜんざいで心が温まったら、南南東へ徒歩1分の土産処で勾玉と縁結びの品を選ぼう。';

const s5_clue =
  '日本ぜんざい学会 壱号店から神門通りを南南東へ徒歩1分、出雲大社前駅のすぐ北側に「いずも縁結び本舗 神門通り北店」が構える（9:00〜17:00営業、無休）。木の温もりある店内をめぐり、深緑色の出雲めのうで磨かれた勾玉細工や因幡の白うさぎの工芸品、出雲大納言小豆の和菓子や出雲そばの乾麺を手に取ってみよう。神話の門前町を歩いた余韻を包む旅の土産を選び、そのまま駅へゴールしよう。';
const s5_surprise =
  '出雲地方の花仙山などで採掘されてきた青めのう（碧玉）の勾玉は、古墳時代から祭祀や魔除けの象徴として重宝されてきた。しっとりとした深い翠色の艶に、神話の時代から続く手仕事の技が息づく。';
const s5_hook = '';

export const area = {
  slug: 'izumo_taishamae',
  station_order: 254,
  line: '一畑電車大社線',
  station: '出雲大社前',
  area_name: '出雲大社・神門通り',
  prefecture: '島根県',
  Stop_name: '出雲大社前駅',
  title: '下り参道と大注連縄が結ぶ神話の門前町',
  description:
    '松並木の下り参道が続く出雲大社と門前の神門通り。大注連縄の社殿から巨大宇豆柱を展示する古代出雲歴史博物館、勢溜前の三段割子そば、出雲発祥のぜんざい、勾玉の土産処まで北から南へ駅へとたどるルート。',
  category: '大社造・古代史・門前食文化',
  budget_tier: 2,
  subtitle: '松並木の下り参道と宇豆柱、割子そばと紅白ぜんざいをめぐる',
  area_tag: '島根県出雲市',
  time_minutes: 95,
  distance_km: 1.3,
  duration_min: 95,
  tags: ['出雲大社', '神門通り', '出雲そば', '出雲ぜんざい', '勾玉'],
  eyecatch_prompt:
    'The sacred pine-tree lined stone-paved descending approach (Kudari-sando) of Izumo Taisha Shrine bathed in soft golden morning mist, with ancient twisted pine trees and indigo-and-gold Rimpa clouds drifting gently, rendered in Izumo Rimpa Cloud and Ancient Shrine Woodblock style. Soft organic vignette edges on cream Washi paper (#F7F2E6). No close-up shimenawa rope, no people, no text, no letters, no numbers, no borders.',
  completion_badge: {
    code: 'IZUMO_TAISHAMAE_CORE',
    name_ja: '神門通りと八雲立つ社のしるし',
    subtitle_en: 'Walker of Sacred Pines and Mythic Pillars',
    description:
      '出雲大社から古代出雲歴史博物館、そば処 田中屋、日本ぜんざい学会 壱号店、いずも縁結び本舗まで、神話の杜と門前文化をたどった証。',
    image_prompt:
      'Woodblock crest of ancient pine trees, three bound cedar pillars, and green agate magatama beads with gold clouds on cream washi paper. No text.',
  },
  question:
    '松並木の下り参道や古代の巨大柱、割子そばや勾玉の祈りのなかで、旅の終わりにそっと持ち帰りたいしるしはどれですか？',
  choices: [
    {
      key: 'A',
      text: '松並木の下り参道を進み、大注連縄と高い千木をいただく社殿の前で四拍手を打った瞬間',
      description: '天へそびえる大社造の威容と、出雲大社ならではの厳かな参拝作法に心洗われた。',
      badge: {
        code: 'IZUMO_TAISHAMAE_A',
        name_ja: '下り参道と四拍手の巡礼者',
        subtitle_en: 'Pilgrim of the Descending Pine Approach',
        description: '松並木の下り参道を抜け、大注連縄と大社造の本殿に手を合わせた者に贈られる称号。',
        rarity: 4,
        image_prompt:
          'Woodblock emblem of crossed wooden roof finials (chigi) and a sacred braided straw rope among pine trees. No text.',
      },
    },
    {
      key: 'B',
      text: '三本の巨木を束ねた古代の「宇豆柱」と数百本の青銅剣を前に、神話のスケールを体感した時間',
      description: '島根県立古代出雲歴史博物館で、伝承を裏付ける圧倒的な出土品に胸を打たれた。',
      badge: {
        code: 'IZUMO_TAISHAMAE_B',
        name_ja: '巨大神殿の柱を見つめる旅人',
        subtitle_en: 'Witness of the Ancient Cedar Pillars',
        description: '出土した宇豆柱と荒神谷銅剣に古代出雲の壮大な歴史を見いだした者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Woodblock emblem of three massive bound cedar logs and gleaming ancient bronze swords. No text.',
      },
    },
    {
      key: 'C',
      text: '朱塗りの丸い三段割子に薬味とだしを注ぎ、黒みがかった出雲そばの香りを味わった昼食',
      description: 'そば処 田中屋で、そばの実を殻ごと挽き込む出雲の食文化の力強さに触れた。',
      badge: {
        code: 'IZUMO_TAISHAMAE_C',
        name_ja: '三段割子の香りを楽しむ食客',
        subtitle_en: 'Savorer of Three-Tiered Warigo Soba',
        description: '挽きぐるみの出雲そばと朱塗り割子の伝統を門前で堪能した者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Woodblock emblem of three stacked vermilion lacquer soba bowls and a ceramic dashi pitcher. No text.',
      },
    },
    {
      key: 'D',
      text: '紅白の白玉が浮かぶ温かな出雲ぜんざいと、深い碧色の勾玉に込められた縁結びの祈り',
      description: '日本ぜんざい学会 壱号店といずも縁結び本舗で、門前町の温かなもてなしに触れた。',
      badge: {
        code: 'IZUMO_TAISHAMAE_D',
        name_ja: '神在餅と碧玉を愛でる旅人',
        subtitle_en: 'Keeper of Zenzai Warmth and Agate Beads',
        description: '神在月ゆかりの出雲ぜんざいと出雲めのうの勾玉細工を手にした者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Woodblock emblem of a steaming red-bean soup bowl with red-and-white dumplings and a green agate magatama. No text.',
      },
    },
  ],
  spots: [
    {
      name: '出雲大社',
      spot_type: '見どころ',
      address: '島根県出雲市大社町杵築東195',
      lat: 35.401869,
      lng: 132.685469,
      radius_m: 50,
      order: 1,
      description:
        '大国主大神を祀る縁結びの総本宮（6:00〜18:00開門、無休）。勢溜の大鳥居から松並木の下り参道を進み、大注連縄を掲げた拝殿・神楽殿や高さ約24mの国宝本殿（八足門前）に参拝できる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      f7_fragment: '松並木の下り参道の先にそびえる、大注連縄と高さ二十四メートルの大社造。',
      f7_full:
        '身を低くして下る松の参道を抜け、澄んだ空気のなかで響かせる四拍手が神話の杜に静かに木霊する。',
      image_prompt:
        'The monumental braided straw shimenawa rope hanging beneath deep cypress-bark eaves and soaring crossed wooden roof finials (chigi) surrounded by ancient pine trees, Izumo Rimpa Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '島根県立古代出雲歴史博物館',
      spot_type: '見どころ',
      address: '島根県出雲市大社町杵築東99-4',
      lat: 35.398809,
      lng: 132.688737,
      radius_m: 50,
      order: 2,
      description:
        '出雲大社の東隣に位置する歴史博物館（9:00〜17:00開館、第3火曜休館）。出雲大社境内から出土した鎌倉期の巨大な「宇豆柱」（重要文化財）や、荒神谷遺跡出土の国宝銅剣358本を展示する。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      f7_fragment: '巨木三本を束ねた出土「宇豆柱」と、三百五十八本の青銅剣が放つ威光。',
      f7_full:
        '本殿前から掘り出された実物の巨大杉柱が、雲に届く高層神殿の伝承を揺るぎない現実として語りかけてくる。',
      image_prompt:
        'Three massive ancient cedar pillars bound together (Uzu-bashira) displayed alongside rows of gleaming bronze swords and bells in a serene museum gallery with Rimpa gold-dust accents, Izumo Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: 'そば処 田中屋',
      spot_type: '食事',
      address: '島根県出雲市大社町杵築東364',
      lat: 35.396586,
      lng: 132.685769,
      radius_m: 50,
      order: 3,
      description:
        '出雲大社・勢溜の大鳥居前に店を構える出雲そばの人気店（11:00〜16:00営業、売り切れ次第終了、木曜定休）。殻ごと挽いた香り高い蕎麦を朱塗りの丸い器に盛った「三段割子そば」を味わえる。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      f7_fragment: '朱塗りの丸い三段割子に薬味を添えて味わう、黒みがかった挽きぐるみ蕎麦。',
      f7_full:
        '殻ごと石臼で挽いた力強い蕎麦の香りと有田焼の徳利から注ぐ濃いめのだしが、参拝後の身体を満たす。',
      image_prompt:
        'Three stacked round vermilion-lacquer Warigo soba tiers filled with dark rustic buckwheat noodles, grated yam, and toppings alongside a ceramic dashi pitcher and chopsticks, Izumo Rimpa Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '日本ぜんざい学会 壱号店',
      spot_type: '休憩',
      address: '島根県出雲市大社町杵築南836-2',
      lat: 35.395343,
      lng: 132.686535,
      radius_m: 50,
      order: 4,
      description:
        '神門通りの中ほどに暖簾を掲げる出雲ぜんざいの専門店（10:00〜17:00営業、不定休）。神在月の「神在餅」に由来する大粒小豆のぜんざいに紅白の白玉団子を浮かべた定番甘味を楽しめる。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      f7_fragment: '大粒の出雲大納言小豆に紅白の白玉が浮かぶ、神在月ゆかりの出雲ぜんざい。',
      f7_full:
        '神在餅から名が生まれた温かい小豆汁と塩昆布の取り合わせが、神門通りを歩く足取りをやさしく和ませる。',
      image_prompt:
        'A lacquered bowl of steaming sweet red-bean soup (Izumo Zenzai) with red-and-white mochi dumplings and a small dish of salted kelp on a dark wooden tray, Izumo Rimpa Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: 'いずも縁結び本舗 神門通り北店',
      spot_type: '買い物',
      address: '島根県出雲市大社町杵築南775-1',
      lat: 35.394892,
      lng: 132.686712,
      radius_m: 50,
      order: 5,
      description:
        '一畑電車・出雲大社前駅のすぐ北側に位置する土産処（9:00〜17:00営業、無休）。出雲めのうの勾玉細工や因幡の白うさぎモチーフの和雑貨、出雲そばや地元銘菓など縁結び土産が揃う。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      f7_fragment: '深い翠色の出雲めのうの勾玉と白うさぎの工芸品が並ぶ、駅前の土産処。',
      f7_full:
        '古墳時代から受け継がれる碧玉の勾玉や縁結びの和菓子を手に取り、神話の門前町をめぐった記憶を持ち帰る。',
      image_prompt:
        'A traditional wooden counter displaying polished green and red agate comma-shaped beads (magatama) and small white ceramic rabbit crafts on woven bamboo mats, Izumo Rimpa Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
  ],
};

export default area;
