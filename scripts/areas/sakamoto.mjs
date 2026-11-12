// Spot 1: 坂本比叡山口駅 (203 chars)
const s1_clue =
  '京阪石山坂本線の終着駅、「坂本比叡山口（さかもとひえいざんぐち）駅」から、比叡山延暦寺と日吉大社の門前町として千二百年の歴史を刻み、自然石を巧みに積み上げた「穴太衆（あのうしゅう）積み」の石垣が続く重要伝統的建造物群保存地区・滋賀県大津市坂本の旅を始めよう（改札・コンコースは始発〜終電）。社寺風の三角屋根の駅舎を出れば、朱塗りの大鳥居が立つ参道がすぐ目の前に広がっている。';
const s1_surprise =
  '織田信長による比叡山焼き討ちの後、豊臣秀吉や徳川幕府の庇護のもとで再興された坂本には、延暦寺の高僧が暮らす「里坊（さとぼう）」と精巧な穴太衆積みの石垣の町並みが今も色濃く残されている。清らかな湧水がせせらぐ門前町の大通りへ、ゆっくりと一歩踏み出そう。';
const s1_hook =
  '次は坂本比叡山口駅から西へ約120m（徒歩2分）、享保元年創業の老舗蕎麦処「本家鶴喜そば」へ。';

// Spot 2: 本家鶴喜そば (Breath spot: 94 chars)
const s2_clue =
  '坂本比叡山口駅から参道を西へ徒歩2分、享保元年創業の老舗「本家鶴喜そば」へ立ち寄ろう（11:00〜16:00営業、最終月曜休）。登録有形文化財の店舗で伝統の手打ちそばにひと息つこう。';
const s2_surprise =
  '享保元年（一七一六年）の創業以来、三百年以上にわたり比叡山での千日回峰行を終えた行者や日吉大社への参拝客に親しまれてきた名店だ。明治期に建てられた入母屋造りの重厚な木造店舗は国の登録有形文化財に指定されており、香り高い手打ちそばと秘伝の出汁が旅の疲れを癒やしてくれる。';
const s2_hook =
  '次は本家鶴喜そばから西南西へ約770m（徒歩10分）、極彩色の権現造社殿「日吉東照宮」へ。';

// Spot 3: 日吉東照宮 (205 chars)
const s3_clue =
  '本家鶴喜そばから門前の坂道を西南西へ徒歩10分、寛永十一年（一六三四年）に徳川家光公と天海僧正によって創建された東照宮、「日吉東照宮（ひよしとうしょうぐう）」を訪ねよう（境内参拝自由、社殿内部拝観は土日祝の10:00〜16:00）。本殿と拝殿を石の間で繋いだ「権現造（ごんげんづくり）」の社殿は、のちに造営された日光東照宮のひな型になったと伝わり、本殿・拝殿・唐門・透塀のすべてが国の重要文化財に指定されている。';
const s3_surprise =
  '黒漆塗りに金箔と極彩色の彫刻が輝く荘厳な社殿は「関西の日光」とも称され、高台の境内からは門前町・坂本の家並みと青い琵琶湖の海原を一望できる。比叡山延暦寺の再興と坂本の町づくりを力強く支えた徳川幕府と天海僧正の深いゆかりに、静かに思いを馳せよう。';
const s3_hook =
  '次は日吉東照宮から北北東へ約500m（徒歩6分）、国指定名勝庭園を擁する里坊「旧竹林院」へ。';

// Spot 4: 旧竹林院 (188 chars)
const s4_clue =
  '日吉東照宮から北北東へ徒歩6分、延暦寺の僧侶が隠居して修行と静養を送った「里坊」の一つ、「旧竹林院（きゅうちくりんいん）」を訪ねよう（9:00〜17:00・入園16:30まで、月曜および祝日の翌日・年末年始休）。八王子山を借景とし、大宮川の清流を引き込んだ約三千三百平方メートルの庭園は国の名勝に指定されており、四季折々の苔と青もみじが美しい緑の陰影を鮮やかに描き出している。';
const s4_surprise =
  '明治期に建てられた二階建ての主屋の周りには、二つの茶室と四阿（あずまや）が巧みに配され、緩やかな地形を活かした滝組と築山が豊かな奥行きを生んでいる。縁側や二階の座敷から瑞々しい苔庭をゆっくり眺め、比叡山の里坊に流れる静謐なひとときを味わおう。';
const s4_hook =
  '次は旧竹林院から西へ約430m（徒歩5分）、全国山王社の総本宮「日吉大社」へ。';

// Spot 5: 日吉大社 (204 chars)
const s5_clue =
  '旧竹林院から参道を西へ徒歩5分、全国約三千八百社におよぶ日吉・日枝・山王神社の総本宮であり、比叡山の地主神として崇敬される古社、「日吉大社（ひよしたいしゃ）」で旅を締めくくろう（9:00〜16:30参拝、無休）。大己貴神（おおなむちのかみ）を祀る西本宮本殿と大山咋神（おおやまくいのかみ）を祀る東本宮本殿はともに国宝に指定されており、独特の「日吉造（聖帝造）」の檜皮葺屋根が深い森に映えている。';
const s5_surprise =
  '境内では神の使いである「神猿（まさる）」が「魔が去る・何事にも勝る」の縁起物として親しまれ、西本宮楼門の軒下では四隅を支える木彫りの棟持猿が参拝者を見守っている。大宮川に架かる重要文化財の日吉三橋と深い社叢を巡り、坂本の旅を荘厳な祈りで締めくくろう。';
const s5_hook = '';

export default {
  slug: 'sakamoto',
  station_order: 508,
  station: '坂本比叡山口駅',
  line: '京阪石山坂本線',
  area_name: '穴太衆積みの里坊と日吉大社（大津市坂本）',
  prefecture: '滋賀県',
  category: '歴史・文化',
  budget_tier: 2,
  title: '穴太衆積みの里坊と山王総本宮・坂本を辿る',
  description:
    '比叡山延暦寺と日吉大社の門前町として栄え、「穴太衆積み」の石垣と里坊が連なる滋賀県大津市坂本。坂本比叡山口駅から、享保元年創業の本家鶴喜そば、重要文化財の権現造社殿・日吉東照宮、国指定名勝庭園の旧竹林院、国宝社殿を擁する日吉大社までを辿る。',
  tags: ['滋賀県', '大津市', '坂本比叡山口駅', '日吉大社', '旧竹林院'],
  style_genre: 'modern_ukiyo_e_flat',
  eyecatch_prompt:
    'Traditional Anoshu dry-stone walls and mossy maple gardens of Kyu-Chikurin-in leading toward the vermilion Romon gate of Hiyoshi Taisha Shrine at the foot of Mount Hiei in Sakamoto, Otsu, Shiga, no text, no people.',
  question:
    '穴太衆積みの石垣が続く里坊の町並みと三百年蕎麦、国宝の日吉大社が息づく坂本で、あなたの旅のしるしはどこにある？',
  choices: [
    {
      key: 'A',
      spot_index: 4,
      text: '八王子山を借景に大宮川の清流が巡る、国指定名勝庭園の里坊「旧竹林院」',
      subtext:
        '瑞々しい苔と青もみじが彩る延暦寺の里坊庭園を眺め、比叡山の麓に息づく静寂と風雅な美意識に心洗われた。',
      badge: {
        code: 'sakamoto_kyu_chikurinin_garden',
        name_ja: '里坊の名勝庭園を愛でる者',
        subtitle_en: 'Admirer of Kyu-Chikurin-in Garden',
        description:
          '旧竹林院を訪ね、国指定名勝の庭園と比叡山里坊の歴史文化に触れた証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem featuring a mossy Japanese garden stream, green maple leaves, and a traditional thatched arbor pavilion, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '日光東照宮のひな型となった極彩色の重要文化財・権現造社殿「日吉東照宮」',
      subtext:
        '黒漆と金箔が輝く荘厳な唐門と社殿を仰ぎ、高台の境内から坂本の街並みと琵琶湖の絶景を一望した。',
      badge: {
        code: 'sakamoto_hiyoshi_toshogu_shrine',
        name_ja: '権現造の日吉東照宮を仰ぐ者',
        subtitle_en: 'Explorer of Hiyoshi Toshogu Shrine',
        description:
          '日吉東照宮を参拝し、国指定重要文化財の権現造社殿と琵琶湖の眺望に触れた証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem depicting an ornate black-lacquered and gold-leafed Gongen-zukuri shrine gate overlooking Lake Biwa, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 5,
      text: '国宝の東西本殿と「神猿」が鎮座する全国三千八百社の山王総本宮「日吉大社」',
      subtext:
        '独特の日吉造の社殿と楼門を支える棟持猿を仰ぎ、比叡山の深い森に宿る千二百年の祈りに胸を打たれた。',
      badge: {
        code: 'sakamoto_hiyoshi_taisha_masaru',
        name_ja: '山王総本宮・日吉大社を参る者',
        subtitle_en: 'Pilgrim of Hiyoshi Taisha Shrine',
        description:
          '日吉大社を参拝し、国宝の本殿と魔除けの象徴「神猿」の歴史に触れた証。',
        rarity: 4,
        visual_Prompt:
          'A circular emblem featuring the vermilion Romon gate and Hiyoshi-zukuri cypress-bark roof of Hiyoshi Taisha with a sacred guardian monkey motif, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 2,
      text: '「坂本比叡山口駅」から参道を歩き、享保元年創業「本家鶴喜そば」で味わう手打ちそば',
      subtext:
        '登録有形文化財の重厚な木造建築で、比叡山の行者や参拝客を三百年癒やしてきた香り高い手打ちそばを堪能した。',
      badge: {
        code: 'sakamoto_honke_tsuruki_soba',
        name_ja: '門前の三百年蕎麦を味わう者',
        subtitle_en: 'Taster of Honke Tsuruki Soba',
        description:
          '坂本比叡山口駅と享保元年創業の本家鶴喜そばを巡り、坂本門前の伝統手打ちそばを堪能した証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem showing handmade buckwheat soba noodles on a bamboo sieve beside a historic wooden storefront gable, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sakamoto_complete',
    name_ja: '坂本・穴太衆の石垣と山王の杜の旅人',
    subtitle_en: 'Traveler of Sakamoto & Hiyoshi Taisha',
    description:
      '坂本比叡山口駅から本家鶴喜そば、日吉東照宮、旧竹林院、日吉大社まで、坂本の5つの地点をすべて巡り歩いた証。',
    rarity: 5,
    visual_Prompt:
      'Master emblem combining the vermilion gate of Hiyoshi Taisha Shrine, the mossy garden of Kyu-Chikurin-in, Anoshu stone walls, and handmade soba noodles framed in gold, no text, no letters.',
  },
  spots: [
    {
      order: 1,
      name: '坂本比叡山口駅',
      spot_type: '見どころ',
      address: '滋賀県大津市坂本4丁目12-35',
      lat: 35.070724,
      lng: 135.871344,
      radius: 50,
      description:
        '京阪石山坂本線の終着駅であり、重伝建地区・坂本と比叡山への玄関口（改札は始発〜終電）。社寺風の三角屋根の駅舎から、穴太衆積みの石垣と日吉大社参道への街歩きが始まる。',
      f7_fragment:
        '社寺風の駅舎が旅人を迎え、穴太衆積みの石垣と比叡山の麓へと誘う玄関口。',
      f7_full:
        '「坂本比叡山口駅」の趣ある木造風駅舎と参道の大鳥居が、里坊の石垣と日吉大社を巡る坂本の旅の始まりを迎えてくれる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      image_prompt:
        'Wide shot of Sakamoto-hieizanguchi Station with its temple-inspired gable roof and the stone-paved approach in Sakamoto, Otsu, Shiga, no text, no people.',
    },
    {
      order: 2,
      name: '本家鶴喜そば',
      spot_type: '食事',
      address: '滋賀県大津市坂本4丁目11-40',
      lat: 35.070614,
      lng: 135.87031,
      radius: 30,
      description:
        '日吉参道に暖簾を掲げる享保元年創業の老舗蕎麦処（11:00〜16:00・L.O.15:30営業、最終月曜休）。国の登録有形文化財に指定された明治期の木造店舗で、伝統の手打ちそばを味わえる。',
      f7_fragment:
        '享保元年の創業以来、登録有形文化財の木造店舗で手打ちそばを供する老舗。',
      f7_full:
        '「本家鶴喜そば」の風格ある入母屋造りの店構えと香り高い手打ちそばが、三百年にわたり門前町で愛されてきた味を届けてくれる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      image_prompt:
        'Freshly made buckwheat soba noodles served on a lacquered tray inside the historic wooden building of Honke Tsuruki Soba in Sakamoto, Otsu, Shiga, no text, no people.',
    },
    {
      order: 3,
      name: '日吉東照宮',
      spot_type: '見どころ',
      address: '滋賀県大津市坂本4丁目2-12',
      lat: 35.068348,
      lng: 135.864386,
      radius: 35,
      description:
        '寛永十一年に徳川家光公が創建した東照宮（境内参拝自由、社殿拝観は土日祝10:00〜16:00）。日光東照宮のひな型となった国指定重要文化財の権現造社殿と琵琶湖の眺望が見どころ。',
      f7_fragment:
        '日光東照宮のひな型と伝わる、国指定重要文化財の権現造社殿が輝く名社だ。',
      f7_full:
        '「日吉東照宮」の黒漆と金箔が輝く権現造の社殿と琵琶湖を望む高台の風景が、比叡山と徳川家の深い歴史を教えてくれる。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      image_prompt:
        'Ornate black-lacquered and gold-decorated Karamon gate and Gongen-zukuri sanctuary of Hiyoshi Toshogu Shrine surrounded by cedar trees in Sakamoto, Otsu, Shiga, no text, no people.',
    },
    {
      order: 4,
      name: '旧竹林院',
      spot_type: '見どころ',
      address: '滋賀県大津市坂本5丁目2-13',
      lat: 35.071625,
      lng: 135.865799,
      radius: 35,
      description:
        '延暦寺の僧侶が隠居した「里坊」の一つであり、国指定名勝の庭園を擁する邸宅（9:00〜17:00開園、月曜休）。八王子山を借景に大宮川の清流を引き込んだ苔と紅葉の庭が広がる。',
      f7_fragment:
        '八王子山を借景に大宮川の清流が巡る、国指定名勝庭園を擁する延暦寺の里坊。',
      f7_full:
        '「旧竹林院」の瑞々しい苔庭と主屋の縁側が、穴太衆積みの石垣に守られた坂本の里坊ならではの静寂と風雅を伝えてくれる。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      image_prompt:
        'Lush green moss garden, maple trees, and wooden veranda of Kyu-Chikurin-in Satobo residence in Sakamoto, Otsu, Shiga, no text, no people.',
    },
    {
      order: 5,
      name: '日吉大社',
      spot_type: '見どころ',
      address: '滋賀県大津市坂本5丁目1-1',
      lat: 35.071644,
      lng: 135.862186,
      radius: 45,
      description:
        '全国約3,800社の日吉・日枝・山王神社の総本宮（9:00〜16:30参拝、無休）。国宝の西本宮・東本宮本殿や重要文化財の楼門・日吉三橋、神の使い「神猿」で名高い。',
      f7_fragment:
        '国宝の東西本殿と魔除けの「神猿」が鎮座する、全国三千八百社の山王総本宮。',
      f7_full:
        '「日吉大社」の朱塗りの楼門と国宝社殿を包む深い社叢が、石垣の門前町・坂本を巡り歩いた旅を荘厳な余韻で締めくくってくれる。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      image_prompt:
        'The vermilion Romon gate and national treasure Hiyoshi-zukuri main sanctuary of Hiyoshi Taisha Shrine surrounded by ancient cedar trees in Sakamoto, Otsu, Shiga, no text, no people.',
    },
  ],
};
