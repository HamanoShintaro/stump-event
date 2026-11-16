export default {
  slug: 'ishikura',
  station_order: 997,
  station: '石倉',
  line: 'JR函館本線',
  area_name: '石倉海岸・濁川温泉',
  prefecture: '北海道',
  municipality: '森町',
  category: '自然・歴史',
  budget_tier: 2,
  tags: ['函館本線', '石倉', '海が見える駅', '茅部の鯡供養塔', '濁川温泉'],
  style_genre: 'ink_and_watercolor',
  title: '噴火湾の漁港とカルデラの秘湯を巡る旅',
  description:
    '海が見えるJR石倉駅から石倉漁港、道指定有形文化財の茅部の鯡供養塔を経てカルデラ盆地の濁川温泉中央荘と元湯神泉館へ巡るルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Ishikura Station overlooking sparkling Uchiura Bay, fishing boats in a quiet harbor, a historic stone herring memorial monument, and steaming caldera hot spring inns in Nigorikawa Valley, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び石倉を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '内浦湾に面した第1種漁港 石倉漁港',
      subtext: '穏やかな波と漁船が並ぶ風景の向こうに対岸の山並みを望んだ',
      badge: {
        code: 'ishikura_port',
        name_ja: '噴火湾の石倉漁港',
        subtitle_en: 'Ishikura Fishing Port',
        description:
          '石倉漁港を訪れ、内浦湾の穏やかな潮風と道南の漁村風景を満喫したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of wooden fishing boats moored in a calm northern bay with distant mountains across the water on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '道内唯一の文化財 茅部の鯡供養塔',
      subtext: '江戸中期建立の石塔の前でかつてのニシン漁の繁栄を偲んだ',
      badge: {
        code: 'ishikura_herring_tower',
        name_ja: '茅部場所の鯡供養塔',
        subtitle_en: 'Kayabe Herring Monument',
        description:
          '茅部の鯡供養塔を訪れ、1757年建立の北海道指定有形文化財の歴史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a weathered 18th-century stone memorial stele set beside coastal waves and silver herring motifs on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'カルデラ盆地の名湯 濁川温泉 中央荘',
      subtext: '源泉かけ流しの湯と名物の鳥鍋や地元トマトの味わいに癒やされた',
      badge: {
        code: 'ishikura_chuoso',
        name_ja: '濁川カルデラの湯宿',
        subtitle_en: 'Nigorikawa Chuoso',
        description:
          '濁川温泉 中央荘を訪れ、カルデラ盆地の源泉かけ流し温泉で温まったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming wooden hot spring bathhouse in a sheltered valley beside ripe red tomatoes on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '歴史ある湯治場 元湯神泉館 にこりの湯',
      subtext: '濁川温泉発祥の地碑とともに江戸から続く名湯の風情を味わった',
      badge: {
        code: 'ishikura_nikorinoyu',
        name_ja: '濁川温泉発祥の地',
        subtitle_en: 'Nikori-no-Yu Onsen',
        description:
          '元湯神泉館 にこりの湯を訪れ、濁川温泉発祥の地の碑と秘湯の風情に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of rising mineral hot spring steam beside a stone origin monument in a quiet valley on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'ishikura_complete',
    name_ja: '石倉・海とカルデラ秘湯の旅人',
    subtitle_en: 'Explorer of Ishikura & Nigorikawa',
    description:
      'JR石倉駅から石倉漁港、茅部の鯡供養塔、濁川温泉中央荘、にこりの湯まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting coastal waves by a seaside railway, a stone memorial stele, and rising hot spring steam on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR石倉駅',
      lat: 42.17352,
      lng: 140.458405,
      address: '北海道茅部郡森町石倉町1',
      description:
        '明治36年（1903年）開業のJR函館本線の無人駅（24時間利用可）。ホームのすぐ先に内浦湾（噴火湾）の青い海が広がる「海が見える無人駅」として鉄道ファンに広く親しまれている。',
      clue:
        '明治三十六年に開業し、ホームのすぐ目の前に内浦湾の青い海が広がる「海が見える無人駅」として鉄道ファンに愛される「JR石倉駅」から道南の旅を始めよう（終日開放）。頬をなでる潮風を感じながら海岸線沿いの南東方向へと外へ踏み出したら、まずは噴火湾に面して色とりどりの漁船が並ぶ「石倉漁港」を目指して、穏やかな漁村の風景と広い水平線を眺めながら軽やかな足取りで元気に歩き出そう。',
      hook: '駅から南東方向へ徒歩約32分',
      f7_fragment: 'ホームのすぐ先に噴火湾の海が広がる、道南屈指の海が見える無人駅。',
      f7_full: '「JR石倉駅」から噴火湾の絶景を望み、漁村史跡と秘湯を目指す旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '石倉漁港',
      lat: 42.15756,
      lng: 140.479547,
      address: '北海道茅部郡森町字石倉町1',
      description:
        '内浦湾（噴火湾）に面した第1種漁港（見学自由・24時間）。穏やかな波と漁船が並ぶ道南ならではの漁村風景や、晴れた日には対岸の室蘭方面まで望む眺望を楽しめる。',
      clue:
        '噴火湾に面した第1種漁港「石倉漁港」で漁船が並ぶ穏やかな漁村風景と対岸の眺望を楽しもう（見学自由）。潮風を感じたら南東の「茅部の鯡供養塔」へ向かおう。',
      hook: '南東方向へ徒歩約43分（車約6分）',
      f7_fragment: '内浦湾に面し、漁船が並ぶ漁村風景と対岸の室蘭方面の眺望が魅力の漁港。',
      f7_full: '「石倉漁港」の穏やかな波音を聞き、かつてニシン漁で栄えた海岸を歩いた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '茅部の鯡供養塔',
      lat: 42.135518,
      lng: 140.507211,
      address: '北海道茅部郡森町字本茅部町126',
      description:
        '宝暦7年（1757年）に大豊漁のニシンを供養するため建立された北海道指定有形文化財（見学自由・24時間）。かつて「茅部場所」として栄えた歴史を伝える道内唯一の供養塔。',
      clue:
        '江戸時代の宝暦七年に大豊漁のニシンを供養するために建立された北海道指定有形文化財「茅部の鯡供養塔」を訪ねよう（見学自由）。かつて「茅部場所」として賑わった道南漁業の往時の繁栄を今に伝える道内唯一の貴重な石塔は、長い歴史の重みを静かに語りかけてくれる。海辺の貴重な史跡を心に深く刻んだら、南西方向の内陸に広がるカルデラ盆地の秘湯「濁川温泉 中央荘」へとゆっくり歩を進めよう。',
      hook: '南西方向へ車約9分（徒歩約60分）',
      f7_fragment: '1757年にニシンの大豊漁を供養して建てられた北海道指定有形文化財。',
      f7_full: '「茅部の鯡供養塔」の前で江戸時代の道南漁業の歴史に思いを馳せた。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: '濁川温泉 中央荘',
      lat: 42.125008,
      lng: 140.447391,
      address: '北海道茅部郡森町字濁川75-8',
      description:
        '濁川カルデラ盆地に湧く源泉かけ流しの温泉宿（日帰り入浴12:00〜21:00、無休）。名湯に加え、名物の鳥鍋や濁川産トマトピューレを使ったピザ（要前日予約）などの食事も魅力。',
      clue:
        '山あいの濁川カルデラ盆地に抱かれた源泉かけ流しの宿「濁川温泉 中央荘」で心身をじっくりと温めよう（日帰り入浴12:00〜21:00、無休）。豊かな湯量と柔らかなお湯に癒やされるのはもちろん、名物の鳥鍋や地熱で育った濁川産トマトを使った料理など、この土地ならではの食の楽しみも待っている。秘湯の豊かな恵みを存分に満喫したら、東の「元湯神泉館 にこりの湯」へと歩を進めよう。',
      hook: '東方向へ徒歩約8分',
      f7_fragment: '濁川カルデラ盆地に湧く源泉かけ流しの湯と地元食材の料理が魅力の温泉宿。',
      f7_full: '「濁川温泉 中央荘」の源泉かけ流しの湯と温かなもてなしに癒やされた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '元湯神泉館 にこりの湯（濁川温泉発祥の地碑）',
      lat: 42.125122,
      lng: 140.454941,
      address: '北海道茅部郡森町字濁川85-1',
      description:
        '江戸時代から続く濁川温泉郷の代表的な日帰り温泉施設（9:00〜21:00・最終受付20:30、不定休）。敷地内・裏手に「濁川温泉発祥の地」の記念碑が建ち湯治場の風情が漂う。',
      clue:
        '旅の締めくくりは、江戸時代から続く湯治場の面影を今に残す日帰り温泉施設「元湯神泉館 にこりの湯（濁川温泉発祥の地碑）」でゆったりと休憩しよう（9:00〜21:00、不定休）。敷地内や裏手には「濁川温泉発祥の地」の記念碑が建ち、カルデラの大地から湧き出る名湯の悠久の歴史を伝えている。湯気立つ盆地の温もりに心まで包まれて、石倉の海と秘湯の旅を晴れやかに明るく締めくくろう。',
      hook: '',
      f7_fragment: '江戸から続く濁川温泉郷の日帰り湯で、「濁川温泉発祥の地」の碑も建つ。',
      f7_full: '「元湯神泉館 にこりの湯」で発祥の地碑と秘湯の風情を味わい、旅を終えた。',
    },
  ],
};
