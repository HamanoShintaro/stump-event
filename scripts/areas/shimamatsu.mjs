export default {
  slug: 'shimamatsu',
  station_order: 924,
  station: '島松',
  line: 'JR千歳線',
  area_name: '島松・旧駅逓所',
  prefecture: '北海道',
  municipality: '恵庭市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['千歳線', '島松軟石', '旧島松駅逓所', 'クラーク博士', '農家カフェ'],
  style_genre: 'ink_and_watercolor',
  title: '島松・軟石の蔵と大志の記憶を巡る一日',
  description:
    '島松駅から軟石倉庫の夢創館、老舗洋食店、クラーク博士の言葉を生んだ旧島松駅逓所、石蔵カフェ蔵楽を辿る歴史ルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Shimamatsu in Eniwa and Kitahiroshima, Hokkaido, featuring a historic stone storehouse, a classic wooden post station house surrounded by birch trees, and golden rice fields in the distance, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '島松の開拓史と軟石建築を巡る道で、どの場面に惹かれましたか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '昭和十二年築の軟石倉庫でジャズを聴く夢創館',
      subtext: '歴史を刻む石造りの空間で、穏やかな文化の息吹に触れた',
      badge: {
        code: 'shimamatsu_musokan',
        name_ja: '軟石蔵の文化人',
        subtitle_en: 'Guest of Stone Warehouse',
        description:
          '昭和12年（1937年）築の島松軟石倉庫を活かした夢創館で、静かな交流と喫茶の時間を過ごしたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a textured volcanic tuff stone warehouse and vinyl record motif on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '駅前で長く愛される老舗喫茶レストランの温かい味',
      subtext: '地元に根付いた一皿に、旅の歩みも心地よく満たされた',
      badge: {
        code: 'shimamatsu_greenspot',
        name_ja: '駅前老舗の常連',
        subtitle_en: 'Patron of Station Diner',
        description:
          '島松駅前で長年親しまれるグリーンスポットで、心温まる洋食と喫茶の時間を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic retro coffee pot and savory plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '大志の言葉と寒地稲作の歴史が宿る旧島松駅逓所',
      subtext: '道内最古級の駅逓建築に立ち、北海道開拓の熱意に胸を打たれた',
      badge: {
        code: 'shimamatsu_ekiteisho',
        name_ja: '大志の記憶の継承者',
        subtitle_en: 'Keeper of Ambitious Spirit',
        description:
          '国指定史跡・旧島松駅逓所を訪れ、クラーク博士と中山久蔵ゆかりの歴史に深く触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a historic wooden Hokkaido post station and golden rice panicles on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '農園の石蔵で味わう地元野菜と肉の優しいランチ',
      subtext: '島松軟石の温もりある蔵の中で、土地の恵みに癒やされた',
      badge: {
        code: 'shimamatsu_kurara',
        name_ja: '石蔵農園の旅人',
        subtitle_en: 'Traveler of Stone Barn Cafe',
        description:
          '昭和30年頃の軟石の石蔵を活かした農家カフェ蔵楽（KURARA）で、恵みの一皿を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an old stone barn surrounded by fresh farm greens on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shimamatsu_complete',
    name_ja: '島松・軟石蔵と大志の旅人',
    subtitle_en: 'Traveler of Shimamatsu Stone Storehouses',
    description:
      'JR島松駅から軟石倉庫・夢創館、老舗洋食店、国指定史跡・旧島松駅逓所、農家カフェ蔵楽まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a stone storehouse, historic wooden post station, and golden rice ears on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR島松駅',
      lat: 42.921809,
      lng: 141.573557,
      address: '北海道恵庭市島松仲町1-1-1',
      description:
        '大正15年（1926年）8月21日に開業した恵庭市北部の歴史ある駅（終日利用可・無料）。島松軟石の蔵や開拓史跡への旅の起点。',
      clue:
        '大正十五年八月に開業し、恵庭市北部の歴史ある街並みの玄関口として長く親しまれてきた「JR島松駅」から楽しい街歩きと散策を始めよう（終日利用可）。どこか懐かしい風情をたたえた静かな駅舎をゆっくり後にして外へ出たら、まずは駅から南方向へ歩いてわずか一分ほどの場所に立つ島松軟石造りの文化施設「夢創館」を目指してのんびり楽しく元気に笑顔で外へと力強く爽やかに元気に歩き出そう。',
      hook: '駅前から南方向へ徒歩約1分',
      f7_fragment: '大正十五年開業、軟石建築と開拓史跡が息づく恵庭北部の歴史ある駅。',
      f7_full: '「JR島松駅」から一歩を踏み出し、軟石の蔵と開拓の記憶を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '夢創館',
      lat: 42.920804,
      lng: 141.574003,
      address: '北海道恵庭市島松仲町1-2-20',
      description:
        '昭和12年（1937年）に島松軟石で建てられた旧米穀倉庫を平成11年に改修した文化交流施設（入館無料、併設喫茶コーナーは10:00〜17:00、年末年始休）。ジャズが流れる落ち着いた空間。',
      clue:
        '昭和十二年築の旧米穀倉庫を改修した「夢創館」でジャズの音色とともに一息つこう（喫茶10:00〜17:00、年末年始休）。軟石の温もりを感じたら、南東の「グリーンスポット」へ向かおう。',
      hook: '駅前通りを南東方向へ徒歩約3分',
      f7_fragment: '昭和十二年築の島松軟石の旧米穀倉庫を活かしたジャズ流れる文化交流施設。',
      f7_full: '「夢創館」の軟石の蔵の中でジャズの音色に耳を傾け、穏やかな休憩を過ごした。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'グリーンスポット',
      lat: 42.918812,
      lng: 141.575227,
      address: '北海道恵庭市島松仲町2-9-20',
      description:
        '島松駅前で長年愛され続けるアットホームな老舗レストラン・喫茶（11:00〜14:00頃・夜17:00〜20:00、日曜休）。ステーキや生姜焼き定食、カレーなどが親しまれている。',
      clue:
        '島松仲町の通り沿いで地元の方々に長年愛され続ける温かい老舗レストラン・喫茶「グリーンスポット」で美味しい食事をゆっくり楽しく味わおう（11:00〜14:00等、日曜休）。丁寧に仕上げられた生姜焼き定食や香り豊かな特製カレー、ジューシーなステーキなど家庭的でほっとする味わいが旅の活力になる。しっかりお腹を満たしたら、西側の北広島市域に建つ国指定史跡「旧島松駅逓所」へと向かおう。',
      hook: '仲町から西の北広島市域へ徒歩約45分（または路線バス等利用可）',
      f7_fragment: '島松で長年親しまれるアットホームな老舗レストラン・喫茶。',
      f7_full: '「グリーンスポット」で昔ながらの温かい料理を味わい、旅の元気を取り戻した。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '旧島松駅逓所',
      lat: 42.924028,
      lng: 141.53778,
      address: '北海道北広島市島松1-1',
      description:
        '道内最古級の駅逓建築にして国指定史跡（4/28〜11/3開館・10:00〜17:00、月曜・祝翌日休、大人200円・小中学生100円）。クラーク博士の名言「Boys, be ambitious」や寒地稲作の祖・中山久蔵ゆかりの地。',
      clue:
        '道内最古級の駅逓建築であり国指定史跡に守られる「旧島松駅逓所」をじっくり訪ねよう（4/28〜11/3・10:00〜17:00、月曜等休）。ここはクラーク博士が「Boys, be ambitious」の名言を残した地であり、寒地稲作の祖・中山久蔵翁が赤毛種の稲作を成功させた歴史の舞台でもある。開拓の情熱を胸に刻んだら、さらに西の「農家カフェ 蔵楽（KURARA）」へ向かおう。',
      hook: '駅逓所から西の三島エリアへ徒歩約35〜40分（またはバス・タクシー利用可）',
      f7_fragment: 'クラーク博士の言葉と中山久蔵の寒地稲作ゆかりの国指定史跡。',
      f7_full: '「旧島松駅逓所」の重厚な木造建築に立ち、北海道開拓の大志と歴史に感動した。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '農家カフェ 蔵楽（KURARA）',
      lat: 42.920587,
      lng: 141.507105,
      address: '北海道北広島市三島119-1',
      description:
        '昭和30年頃の島松軟石の石蔵を活かした野菜農園Mina Farm直営のカフェ（夏期10:00〜17:00・冬期〜16:00、水曜休・季節により長期休業あり）。地元食材の料理やスイーツを楽しめる。',
      clue:
        '旅の締めくくりは、昭和三十年頃の島松軟石の石蔵を改装した温もりあふれる空間「農家カフェ 蔵楽（KURARA）」で寛ぎの時間を過ごそう（10:00〜17:00等、水曜休）。直営農園の新鮮な野菜や地元食材をふんだんに活かしたランチや手作りスイーツを味わいながら石蔵の落ち着いた店内を見渡せば、心がじんわり満たされる。島松の豊かな歴史と味覚を抱いて、旅の余韻を心地よく結ぼう。',
      hook: '',
      f7_fragment: '昭和三十年頃の島松軟石の石蔵を活かした野菜農園直営のカフェ。',
      f7_full: '「農家カフェ 蔵楽（KURARA）」の石蔵で土地の恵みを味わい、島松の旅を終えた。',
    },
  ],
};
