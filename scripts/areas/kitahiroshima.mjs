export default {
  slug: 'kitahiroshima',
  station_order: 925,
  station: '北広島',
  line: 'JR千歳線',
  area_name: '北広島・Fビレッジ',
  prefecture: '北海道',
  municipality: '北広島市',
  category: '歴史・街歩き',
  budget_tier: 2,
  tags: ['千歳線', 'エスコンフィールド', '開拓史', 'ジェラート', '商業施設'],
  style_genre: 'ink_and_watercolor',
  title: '白球の聖地と開拓の記憶を巡る北広島散歩',
  description:
    'JR北広島駅から駅直結のトナリエ北広島、廃校活用の知新の駅、窯焼きピッツァ、エスコンフィールドを巡る散策ルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Kitahiroshima, Hokkaido, featuring a modern train station plaza, a historic wooden schoolhouse museum, and the distinctive glass-roofed ballpark silhouette in the distance, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び北広島を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅直結の新しい賑わいに触れた瞬間',
      subtext: '2025年開業の駅前商業空間で、変わりゆく街の息吹を感じた',
      badge: {
        code: 'kitahiroshima_tonarie',
        name_ja: '駅前散策の案内人',
        subtitle_en: 'Stationfront Walker',
        description:
          '2025年開業のトナリエ北広島を訪れ、新しい北広島の賑わいと街並みに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a modern glass stationfront building and bustling promenade on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '廃校舎で土地の歴史と自然に耳を澄ませた時間',
      subtext: '知新の駅で北広島の自然や開拓の記憶に静かに向き合った',
      badge: {
        code: 'kitahiroshima_chishin',
        name_ja: '知新の旅人',
        subtitle_en: 'Keeper of Local Lore',
        description:
          '北広島市エコミュージアムセンター知新の駅で、郷土の自然と開拓の歴史を学んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an open vintage field notebook and wooden schoolhouse bell on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '道産素材のジェラートや窯焼きの香りに癒やされた時間',
      subtext: '北海道素材の恵みを味わい、街歩きの足を心地よく休めた',
      badge: {
        code: 'kitahiroshima_artlacze',
        name_ja: '北国の甘味と窯の通',
        subtitle_en: 'Artisan Flavor Seeker',
        description:
          'ARTLACZÉ Gelato & Pizza 北広島店で、道産素材のジェラートや窯焼きピッツァを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wood-fired pizza slice and twin scoops of artisanal gelato on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '広大な天然芝と白球の聖地を目の前にした高揚感',
      subtext: 'Fビレッジの広大な空間に立ち、新しい北広島の象徴を体感した',
      badge: {
        code: 'kitahiroshima_escon',
        name_ja: '白球の聖地を巡りし者',
        subtitle_en: 'Ballpark Pilgrim',
        description:
          'エスコンフィールドHOKKAIDOを訪れ、開放的な天然芝と白球の聖地を体感したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sleek pitched-roof ballpark silhouette and a stitched white baseball on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kitahiroshima_complete',
    name_ja: '北広島・開拓と白球の散歩者',
    subtitle_en: 'Walker of Kitahiroshima Heritage and Ballpark',
    description:
      'JR北広島駅からトナリエ北広島、知新の駅、美沢のピッツァとジェラート、エスコンフィールドまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem combining a historic school roof, birch trees, and a pitched ballpark facade on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR北広島駅',
      lat: 42.979131,
      lng: 141.563158,
      address: '北海道北広島市中央6-1',
      description:
        '大正15年（1926年）8月21日に開業したJR千歳線の主要駅（終日利用可・無料）。ボールパーク開業に伴い駅直結施設や歩行者動線の整備が進む北広島市の玄関口。',
      clue:
        '大正十五年八月に開業し、近年は北海道ボールパークへの玄関口としても大きな賑わいを見せる「JR北広島駅」から楽しい街歩きと散策を始めよう（終日利用可）。活気あふれるコンコースをゆっくり抜けて西口側へ外へ出たら、まずは駅西口に直結して令和七年三月に誕生した新しい複合商業施設「トナリエ北広島」を目指してのんびり楽しく元気に笑顔で外へと力強く爽やかに明るく元気に楽しく歩き出そう。',
      hook: '西口側へ出て南西方向へ徒歩約1分',
      f7_fragment: '大正十五年開業、新しい商業施設とFビレッジへの玄関口となるJR千歳線の駅。',
      f7_full: '「JR北広島駅」の新しい賑わいを後にし、新旧の魅力が交差する北広島の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'トナリエ北広島',
      lat: 42.978988,
      lng: 141.562043,
      address: '北海道北広島市栄町1-52',
      description:
        '2025年3月15日に開業したJR北広島駅西口直結の複合商業施設（1F 10:00〜20:00・2F〜22:00等）。1〜3階に多彩な店舗やフードホールが並び、4〜14階はホテルとなっている。',
      clue:
        '令和七年三月開業の駅直結施設「トナリエ北広島」で道産食材や新しい街の賑わいに触れよう（1F 10:00〜20:00等）。ショップを見たら、南西の「北広島市エコミュージアムセンター知新の駅」へ向かおう。',
      hook: 'エルフィンロード沿いから南西方向へ徒歩約12分',
      f7_fragment: '令和七年春にJR北広島駅西口直結で誕生した多彩な店舗が揃う複合商業施設。',
      f7_full: '「トナリエ北広島」で新しい駅前の賑わいを体感し、街のこれからに胸を躍らせた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '北広島市エコミュージアムセンター知新の駅',
      lat: 42.975154,
      lng: 141.554252,
      address: '北海道北広島市広葉町3-1',
      description:
        '2014年7月に廃校となった旧小学校校舎を活用して開設された郷土博物館（9:00〜17:00、月曜・年末年始休、入館無料）。北広島の自然・歴史・文化を「屋根のない博物館」として紹介する。',
      clue:
        '廃校となった旧小学校の校舎を活かして誕生した「北広島市エコミュージアムセンター知新の駅」を訪ねよう（9:00〜17:00、月曜休、入館無料）。懐かしさ漂う館内では北広島の豊かな自然や明治の開拓史を分かりやすく学ぶことができ、地域の記憶が鮮やかに蘇る。歴史の重みにじっくり触れたら、北の美沢エリアへ歩いて「ARTLACZÉ Gelato & Pizza 北広島店」へ向かおう。',
      hook: '北方向の美沢エリアへ徒歩約15分',
      f7_fragment: '旧小学校校舎を活用し北広島の自然や開拓史を伝える地域博物館。',
      f7_full: '「北広島市エコミュージアムセンター知新の駅」で、北広島の開拓の歩みを深く学んだ。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'ARTLACZÉ Gelato & Pizza 北広島店',
      lat: 42.983946,
      lng: 141.555788,
      address: '北海道北広島市美沢5-1-1',
      description:
        '北海道産素材にこだわったジェラートと本格窯焼きピッツァを味わえる人気店（10:30〜20:00、11〜3月は月曜休・4〜10月無休）。Fビレッジ近隣の美沢エリアに佇む。',
      clue:
        '北海道産の豊かな素材にこだわった「ARTLACZÉ Gelato & Pizza 北広島店」で美味しいランチや甘いひとときをゆっくり楽しもう（10:30〜20:00、冬季月曜休）。香ばしい窯焼きピッツァやなめらかな自家製ジェラートが、ここまで歩いてきた疲れを心地よく癒やしてくれる。お腹も心も満たされたら、北西へ歩いていよいよ「エスコンフィールドHOKKAIDO」へ向かおう。',
      hook: '美沢から北西のFビレッジへ徒歩約13分',
      f7_fragment: '北海道産素材のジェラートと本格窯焼きピッツァを堪能できる人気店。',
      f7_full: '「ARTLACZÉ Gelato & Pizza 北広島店」で道産素材の絶品ピッツァとジェラートを味わった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: 'エスコンフィールドHOKKAIDO',
      lat: 42.990282,
      lng: 141.549533,
      address: '北海道北広島市Fビレッジ1',
      description:
        '2023年3月30日に公式戦初開催で開業した北海道日本ハムファイターズの本拠地（基本9:30〜21:00・変動あり、無休）。天然芝フィールドを望む開放的な空間で非試合日もグルメや散策を楽しめる。',
      clue:
        '旅の締めくくりは、令和五年三月に誕生した北広島の新しい象徴「エスコンフィールドHOKKAIDO」をじっくり楽しく訪ねよう（基本9:30〜21:00、無休）。圧倒的な開放感を誇る巨大なガラス壁と美しい天然芝のフィールドは非試合日でも自由に見学でき、多彩なグルメや散策の楽しみがどこまでも広がっている。白球の聖地と開拓の記憶が響き合う街歩きを、晴れやかな笑顔で締めくくろう。',
      hook: '',
      f7_fragment: '天然芝フィールドと開放的なガラス壁が印象的な北海道の新しい白球の聖地。',
      f7_full: '「エスコンフィールドHOKKAIDO」の壮大な風景に感動し、北広島の旅を締めくくった。',
    },
  ],
};
