const s1_clue =
  'JRきのくに線の黒江駅から古い町並みが残る黒江エリアへ歩き、風情ある古民家カフェ「べっちんさん」から紀州漆器のまちの散策を始めよう（11:00〜17:00営業、火曜・水曜定休、休業時は周辺の喫茶処も利用可）。塗師の町家の面影を残す落ち着いた和の空間で、香り高い有機栽培珈琲や自家製ケーキなどの甘味を味わいながら、四百年の歴史を紡ぐ黒江の路地歩きの始まりに心地よくひと息つこう。';
const s1_surprise =
  '日本三大漆器のひとつ「紀州漆器（黒江塗）」の産地として栄えてきた黒江には、歴史ある町家を活かした温かな喫茶処が点在している。木の温もりに包まれた座敷やテーブル席で、手作りの甘味とともに穏やかな時間を過ごせる。';
const s1_hook =
  '古民家カフェでひと息ついたら、南西へ徒歩2分の塗師町家・黒江ぬりもの館で黒江カレーを味わおう。';

const s2_clue =
  'べっちんさんから連子格子の町家が並ぶ川端通り方面へ南西へ徒歩2分、江戸後期の塗師（ぬし）町家を改修した「黒江ぬりもの館」へ足を運ぼう（11:00〜17:00営業、火曜・水曜定休、満席・休業時は周辺の食事処も利用可）。艶やかな紀州漆器の膳や器に盛り付けられた、地元特産のぶどう山椒と竹炭が香る名物「黒江カレー」や気まま定食を味わい、築百六十年の町家の趣とともに漆器の里ならではの昼食を堪能しよう。';
const s2_surprise =
  '黒江の町家は、道路に対して建物が斜めに張り出す「のこぎり歯状の町並み」を成していることで知られる。漆器の作業場兼住居として建てられた奥深い町家の中で、実際に漆器を使って食事をすることで、その軽さと口当たりの良さを体感できる。';
const s2_hook =
  '漆器の器でランチを堪能したら、西南西へ徒歩1分の老舗・池庄漆器店で紀州漆器のお土産を選ぼう。';

const s3_clue =
  '黒江ぬりもの館から西南西へ徒歩1分、塗師屋建築の老舗「池庄漆器店」へ立ち寄ろう（9:00〜17:00営業、日祝定休）。朱と黒の根来塗の椀や盆、漆器の箸など紀州漆器のお土産を選ぼう。';
const s3_surprise =
  '室町時代に紀伊国の根来寺で作られた根来塗の技法を礎とし、紀州徳川家の保護のもとで発展した黒江の漆器は、丈夫で実用的な日用漆器として全国に広まった。黒板塀と連子格子が続く店の佇まいそのものが、漆器の町の生きた文化財となっている。';
const s3_hook =
  '艶やかな紀州漆器を手に入れたら、北北東へ徒歩5分の名水が湧く中言神社を参拝しよう。';

const s4_clue =
  '池庄漆器店から北北東へ徒歩5分、黒江の町並みの奥に鎮座する古社「中言神社」を参拝しよう（境内参拝自由）。万葉集にも詠まれた「黒牛潟（くろうしがた）」の伝承を受け継ぎ、「名水百選」の流れを汲む清らかな湧水「黒牛の水」がこんこんと湧き出る手水舎で両手を清め、適度な湿度と良質な水を必要とする黒江の漆器づくりと人々の暮らしを古くから支えてきた氏神の社殿に静かに手を合わせよう。';
const s4_surprise =
  'かつて黒江一帯が入り江であった頃、黒い牛の形をした岩があったことから「黒牛潟」と呼ばれ、それが「黒江」の地名の由来になったと伝わる。境内に湧く清冽な「黒牛の水」は、今も茶の湯や地域の暮らしを潤す名水として大切に守られている。';
const s4_hook =
  '黒牛の名水に触れたら、南西へ徒歩3分の高台に佇む古刹・浄国寺の石段を訪ねよう。';

const s5_clue =
  '中言神社から趣ある路地を南西へ徒歩3分歩くと、黒江の町を見守る高台に立つ浄土宗の古刹「浄国寺」に到着する（境内参拝自由）。見事な石垣と石段の上に構える本堂に参拝し、大坂夏の陣にまつわる「抜け馬の絵馬」の伝承や、幕末の勤王僧・月性（げっしょう）ゆかりの史跡に触れながら、黒板塀と連子格子の瓦屋根が幾重にも連なる塗師の町並みを高台の境内から見渡して紀州黒江の旅を締めくくろう。';
const s5_surprise =
  '安土桃山時代に創建された浄国寺には、奉納された絵馬から毎夜馬が抜け出して田畑を荒らしたため、画工が綱を描き足して鎮めたという「抜け馬の絵馬」の物語が伝わる。高台の石段からは、かつて入り江だった黒江の密集した町家の屋根並みが一望できる。';
const s5_hook = '';

export const area = {
  slug: 'kuroe',
  station_order: 375,
  line: 'JRきのくに線',
  station: '黒江',
  area_name: '黒江駅・のこぎり歯の町並みと紀州漆器の塗師屋・黒牛の名水を辿る道',
  prefecture: '和歌山県',
  Stop_name: '黒江駅',
  title: '紀州漆器の町家と黒牛の名水・黒江を辿る',
  description:
    '日本三大漆器「紀州漆器（黒江塗）」の伝統と、のこぎり歯状に連なる連子格子の町並みが残る和歌山県海南市黒江。古民家カフェのべっちんさんから、江戸期の塗師町家を活かした黒江ぬりもの館、老舗の池庄漆器店、名水が湧く中言神社、高台の古刹・浄国寺までを歩く。',
  category: 'べっちんさん・黒江ぬりもの館・池庄漆器店・中言神社と浄国寺',
  budget_tier: 2,
  subtitle: 'べっちんさんと黒江ぬりもの館、池庄漆器店から中言神社と浄国寺へ',
  area_tag: '和歌山県海南市',
  time_minutes: 35,
  distance_km: 1.0,
  duration_min: 35,
  tags: ['べっちんさん', '黒江ぬりもの館', '池庄漆器店', '中言神社', '浄国寺'],
  eyecatch_prompt:
    'Daylight architectural watercolor and ink illustration of the historic Kuroe lacquerware district in Kainan featuring saw-tooth angled wooden townhouses with dark plank walls, fine wooden lattices, stone-paved lanes, and glossy vermilion and black Negoro lacquerware bowls under a clear sky, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 52% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
  completion_badge: {
    code: 'KUROE_CORE',
    name_ja: '根来塗の艶とのこぎり歯の路地・黒江のしるし',
    subtitle_en: 'Explorer of Kuroe Lacquerware Lanes and Spring Water',
    description:
      'べっちんさんから黒江ぬりもの館、池庄漆器店、中言神社、浄国寺までを巡り歩いた証。',
    image_prompt:
      'Watercolor crest of a glossy vermilion and black Negoro lacquerware bowl, a dark wooden lattice facade, and clear spring water on cream washi paper. No text.',
  },
  question:
    'のこぎり歯状に連なる塗師の町家と艶やかな紀州漆器、万葉の記憶を宿す名水と古刹が重なる黒江を訪ねて、旅の余韻として持ち帰りたい出会いはどれですか？',
  choices: [
    {
      key: 'A',
      text: '「べっちんさん」の珈琲時間と、「黒江ぬりもの館」で味わうぶどう山椒の黒江カレー',
      description: '古民家カフェで自家製ケーキと珈琲に寛ぎ、築百六十年の塗師町家で黒江カレーを紀州漆器の器とともに堪能した。',
      badge: {
        code: 'KUROE_A',
        name_ja: '塗師町家の黒江カレーと古民家茶房を味わう食通',
        subtitle_en: 'Gourmet of Kuroe Curry in a Lacquerware Townhouse',
        description: 'べっちんさんと黒江ぬりもの館を訪ね、黒江の食と古民家喫茶を楽しんだ者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Watercolor emblem of rich dark curry served in a vermilion lacquerware bowl beside a cup of coffee. No text.',
      },
    },
    {
      key: 'B',
      text: 'のこぎり歯の路地に佇む老舗「池庄漆器店」で選ぶ、根来塗と紀州漆器の器',
      description: '連子格子と黒板塀の風格ある店で、使うほどに味わいを増す朱と黒の根来塗の器をお土産に手に入れた。',
      badge: {
        code: 'KUROE_B',
        name_ja: '四百年の紀州漆器と根来塗の技を愛でる目利き',
        subtitle_en: 'Connoisseur of Kishu and Negoro Lacquerware in Kuroe',
        description: '池庄漆器店を訪ね、日本三大漆器・紀州漆器の伝統美と職人の手仕事に触れた者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Watercolor emblem of glossy vermilion and black Negoro-nuri lacquerware bowls and a lacquered tray. No text.',
      },
    },
    {
      key: 'C',
      text: '万葉の黒牛潟の伝承を伝え、清冽な「黒牛の水」が湧き出る「中言神社」',
      description: '漆器の町の路地奥に湧く名水で手を清め、黒江の地名の由来となった古社の静謐な空気に心が澄み渡った。',
      badge: {
        code: 'KUROE_C',
        name_ja: '万葉の黒牛の名水と中言神社を歩む風流人',
        subtitle_en: 'Pilgrim of Nakakoto Shrine and Kuroushi Sacred Spring',
        description: '中言神社を訪ね、名水「黒牛の水」と黒江の地名伝承に触れた者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Watercolor emblem of clear spring water flowing from a stone basin beside a wooden shrine hall and green trees. No text.',
      },
    },
    {
      key: 'D',
      text: '抜け馬の絵馬の物語を伝え、石段の上から塗師の町並みを見守る古刹「浄国寺」',
      description: '見事な石垣と石段を登り、黒板塀と瓦屋根が幾重にも連なる黒江ならではの歴史景観に深く胸を打たれた。',
      badge: {
        code: 'KUROE_D',
        name_ja: '黒江の塗師町を見渡す浄国寺の石段を辿る探究者',
        subtitle_en: 'Seeker of Jokokuji Temple and Kuroe Historic Roofs',
        description: '浄国寺を訪ね、大坂夏の陣ゆかりの絵馬伝承と黒江の町並み景観に触れた者に贈られる称号。',
        rarity: 4,
        image_prompt:
          'Watercolor emblem of stone temple steps and a tiled wooden hall overlooking dark-walled traditional townhouses. No text.',
      },
    },
  ],
  spots: [
    {
      name: 'べっちんさん',
      spot_type: '休憩',
      address: '和歌山県海南市黒江659',
      lat: 34.162346,
      lng: 135.205849,
      radius_m: 50,
      order: 1,
      description:
        '黒江の古い町並みに佇む古民家風カフェ（11:00〜17:00営業、火曜・水曜定休）。有機栽培珈琲や手作りケーキなどの甘味、和歌山の早なれ寿司などを味わえる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      f7_fragment: '黒江の町並みに佇む古民家空間で、香り高い有機珈琲と自家製ケーキを味わう茶房。',
      f7_full:
        '「べっちんさん」の温もりある木の空間と一杯の珈琲が、歴史ある塗師の町・黒江を巡る足取りを軽やかにする。',
      image_prompt:
        'Daylight watercolor and ink illustration of a cup of freshly brewed coffee and a slice of homemade cake served on a warm wooden cafe table beside a sunlit window, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '黒江ぬりもの館',
      spot_type: '食事',
      address: '和歌山県海南市黒江680',
      lat: 34.161606,
      lng: 135.204931,
      radius_m: 50,
      order: 2,
      description:
        '江戸後期の塗師町家を改修した食事・喫茶処（11:00〜16:00営業、火曜・水曜定休）。紀州漆器の器で供される名物「黒江カレー」や地元食材の定食を味わえる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      f7_fragment: '築百六十年の塗師町家で、艶やかな紀州漆器の器とともに味わうぶどう山椒香る黒江カレー。',
      f7_full:
        '「黒江ぬりもの館」の漆器の膳と芳醇なスパイスの香りが、四百年の歴史を紡ぐ漆器の里の暮らしを五感で伝えてくれる。',
      image_prompt:
        'Daylight culinary watercolor and ink illustration of rich dark Japanese curry and rice served in a glossy vermilion and black Kishu lacquerware bowl on a lacquered tray with small side dishes inside a traditional wooden townhouse, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '池庄漆器店',
      spot_type: '買い物',
      address: '和歌山県海南市黒江692',
      lat: 34.161465,
      lng: 135.204623,
      radius_m: 50,
      order: 3,
      description:
        'のこぎり歯状の町並みが残る川端通りエリアの老舗漆器店（9:00〜17:00営業、日曜・祝日定休）。伝統の根来塗や紀州漆器の椀・盆・弁当箱などをお土産に購入できる。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      f7_fragment: 'のこぎり歯状に連なる塗師屋建築の店内で、朱と黒が織りなす根来塗と紀州漆器を選ぶ老舗。',
      f7_full:
        '「池庄漆器店」に並ぶ艶やかな漆器の器が、紀州徳川家の時代から磨き上げられてきた黒江の塗師たちの誇りを宿す。',
      image_prompt:
        'Daylight watercolor and ink illustration of glossy vermilion and black Negoro-nuri lacquerware soup bowls, wooden bento boxes, and lacquered trays displayed on a dark wooden tatami platform in a historic merchant house, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '中言神社',
      spot_type: '見どころ',
      address: '和歌山県海南市黒江933',
      lat: 34.164293,
      lng: 135.205934,
      radius_m: 50,
      order: 4,
      description:
        '黒江の町並みの奥に鎮座する古社（境内参拝自由）。万葉の「黒牛潟」ゆかりの地にあり、境内には清冽な名水「黒牛の水」が湧き出ている。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      f7_fragment: '万葉集の「黒牛潟」の記憶をとどめ、清らかな名水「黒牛の水」が湧き出る黒江の鎮守。',
      f7_full:
        '「中言神社」の手水鉢を満たす透明な湧水の音が、漆器の町・黒江の暮らしと手仕事を潤してきた自然の恵みを伝える。',
      image_prompt:
        'Daylight architectural watercolor and ink illustration of Nakakoto Shrine in Kuroe featuring clear spring water flowing into a mossy stone basin under a wooden pavilion beside a serene shrine hall and old trees, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '浄国寺',
      spot_type: '見どころ',
      address: '和歌山県海南市黒江976',
      lat: 34.163389,
      lng: 135.204263,
      radius_m: 50,
      order: 5,
      description:
        '黒江を見下ろす高台に佇む浄土宗の寺院（境内参拝自由）。大坂夏の陣ゆかりの「抜け馬の絵馬」の伝承で知られ、石段の上から黒江の瓦屋根の町並みを眺められる。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      f7_fragment: '抜け馬の絵馬の物語を伝え、高台の石段から塗師の町の瓦屋根を見渡す古刹。',
      f7_full:
        '「浄国寺」の石段から見下ろす黒板塀と連子格子の町並みが、紀州漆器の里・黒江を辿った旅を静かに締めくくる。',
      image_prompt:
        'Daylight architectural watercolor and ink illustration of Jokokuji Temple in Kuroe featuring broad stone steps, historic stone walls, and a tiled wooden temple gate overlooking the tightly packed tiled roofs of the lacquerware town below, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
  ],
};
