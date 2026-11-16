export default {
  slug: 'memuro',
  station_order: 939,
  station: '芽室',
  line: 'JR根室本線',
  area_name: '芽室本通・芽室公園',
  prefecture: '北海道',
  municipality: '芽室町',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['根室本線', 'カシワ巨木', 'コーン炒飯', '芽室神社', 'まちの駅'],
  style_genre: 'ink_and_watercolor',
  title: '柏の巨木と黄金の恵みを味わう芽室道',
  description:
    'JR芽室駅から本通を北へ進み、めむろまちの駅、明治創祀の芽室神社、樹齢400年超の柏が茂る芽室公園、コーン炒飯の名店を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Memuro in Tokachi, Hokkaido, featuring a straight tree-lined town avenue leading to a dignified Shinto shrine and towering 400-year-old oak trees in a lush park under clear golden skies, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び芽室を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: 'めむろーど1階で出会うスイートコーンの特産品',
      subtext: '駅前の案内拠点で芽室町の魅力と美味しいお土産に触れた',
      badge: {
        code: 'memuro_machinoeki',
        name_ja: '芽室特産の目利き',
        subtitle_en: 'Memuro Local Curator',
        description:
          '駅前「めむろまちの駅」で、芽室町自慢のスイートコーン商品や特産品に出会ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden sweet corn ears with crisp green husks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '本通の先に鎮座する明治創祀の芽室神社',
      subtext: '明治33年創祀の歴史ある杜で静かに手を合わせた',
      badge: {
        code: 'memuro_shrine',
        name_ja: '本通鎮守の参拝者',
        subtitle_en: 'Memuro Shrine Pilgrim',
        description:
          '本通を北へ歩き、明治33年創祀の芽室神社へ参拝して町の歩みに思いを馳せたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a stately wooden Shinto torii at the end of a straight avenue on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '樹齢四百年を超える芽室公園のカシワの巨木群',
      subtext: '芽室遺産に認定された太古からの巨木の下で深呼吸した',
      badge: {
        code: 'memuro_oak_trees',
        name_ja: '四百年柏の守人',
        subtitle_en: 'Guardian of Ancient Oaks',
        description:
          '約20ヘクタールの芽室公園で、樹齢200〜400年超のカシワの巨木群を見上げたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a massive 400-year-old oak tree canopy with wide gnarled branches on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '黄金色のコーンが弾ける名物・十勝芽室コーン炒飯',
      subtext: 'レストランHiroで芽室が誇る新ご当地グルメを堪能した',
      badge: {
        code: 'memuro_corn_rice',
        name_ja: 'コーン炒飯の食通',
        subtitle_en: 'Corn Fried Rice Gourmet',
        description:
          'レストランHiroで芽室町のご当地グルメ「十勝芽室コーン炒飯」を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming ceramic plate of golden sweet corn fried rice on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'memuro_complete',
    name_ja: '芽室・古柏と黄金グルメの旅人',
    subtitle_en: 'Traveler of Memuro Oaks and Corn',
    description:
      'JR芽室駅からめむろまちの駅、芽室神社、芽室公園のカシワ巨木群、レストランHiroまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an ancient oak tree, golden sweet corn, and Shinto torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR芽室駅',
      lat: 42.910016,
      lng: 143.048352,
      address: '北海道河西郡芽室町本通1-1-1',
      description:
        '明治40年（1907年）9月8日に開業し、特急「とかち」も停車する芽室町の玄関口（窓口6:40〜16:45）。駅北側から本通が一直線に延びている。',
      clue:
        '明治四十年九月に開業し、特急「とかち」も停車する十勝・芽室町の玄関口「JR芽室駅」から楽しい街歩きと散策を始めよう（終日利用可）。駅前から北へと一直線に延びる本通の開放的な景色を眺めながらゆっくり外へ踏み出したら、まずは徒歩わずか一分の「めむろまちの駅（めむろーど1階）」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に楽しく元気よく笑顔で外へ歩き出そう。',
      hook: '駅を出て北方向へ徒歩約1分',
      f7_fragment: '明治四十年開業、特急「とかち」も停車し本通が一直線に延びる玄関口。',
      f7_full: '「JR芽室駅」を後にし、柏の巨木と黄金のグルメを巡る芽室の旅へ踏み出した。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'めむろまちの駅（めむろーど1階）',
      lat: 42.910285,
      lng: 143.048719,
      address: '北海道河西郡芽室町本通1-19',
      description:
        '芽室町観光物産協会が運営する観光案内・特産品販売所（10:00〜18:00、水曜休・祝日の場合営業）。スイートコーン関連商品やケンボロー豚などの地元特産品が揃う。',
      clue:
        '駅至近の「めむろまちの駅（めむろーど1階）」でスイートコーン等の特産品や観光情報をチェックしよう（10:00〜18:00、水曜休）。次は本通を北の「芽室神社」へ向かおう。',
      hook: '本通を北方向へ徒歩約10分',
      f7_fragment: 'スイートコーン商品やケンボロー豚など芽室の特産品が揃う駅前案内拠点。',
      f7_full: '「めむろまちの駅（めむろーど1階）」で芽室ならではの豊かな特産品に出会った。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '芽室神社',
      lat: 42.91847,
      lng: 143.045474,
      address: '北海道河西郡芽室町本通8-2',
      description:
        '明治33年（1900年）創祀、天照大御神を祀る芽室町の総鎮守（参拝常時可、社務所9:00〜17:00）。本通の突き当たり付近、緑豊かな芽室公園に隣接して鎮座する。',
      clue:
        '本通をまっすぐ北へ進んだ突き当たり付近、芽室公園に隣接して静かに鎮座する「芽室神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由、社務所9:00〜17:00）。明治三十三年創祀の由緒ある立派な社殿で天照大御神に静かに手を合わせれば、十勝の肥沃な大地を拓いた人々の誇りが胸にじんわり伝わってくる。清らかな祈りの時間を過ごしたら、すぐ隣に広がる「芽室公園」へと歩いて向かおう。',
      hook: 'すぐ北西隣の公園へ徒歩約2分',
      f7_fragment: '明治三十三年創祀、本通の先に鎮座し芽室公園に隣接する町の総鎮守。',
      f7_full: '「芽室神社」の厳かな社殿に参拝し、芽室開拓の歴史に思いを馳せた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '芽室公園',
      lat: 42.919311,
      lng: 143.04508,
      address: '北海道河西郡芽室町本通8-1',
      description:
        '約20ヘクタールの広大な敷地を有し、樹齢200〜400年を超えるカシワの巨木群が「芽室公園と柏の木」として芽室遺産に認定されている公園（終日開放）。',
      clue:
        '約二十ヘクタールもの広大な敷地を誇る芽室のシンボル「芽室公園」をゆっくり楽しく元気に爽やかに明るく散策しよう（終日開放）。園内に堂々とそびえる樹齢二百年から四百年を超えるカシワの巨木群は「芽室公園と柏の木」として芽室遺産にも認定されており、見上げるだけで圧倒的な生命力に胸を打たれる。太古からの森の息吹をたっぷり感じたら、本通を南へ戻り「レストランHiro」へ向かおう。',
      hook: '本通を南方向へ戻り徒歩約12分',
      f7_fragment: '樹齢二百〜四百年超のカシワの巨木群が芽室遺産に認定された広大な公園。',
      f7_full: '「芽室公園」で樹齢数百年を数えるカシワの巨木を見上げ、自然の力に感動した。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'レストランHiro',
      lat: 42.911178,
      lng: 143.047985,
      address: '北海道河西郡芽室町本通2-8-1',
      description:
        '芽室町の新ご当地グルメ「十勝芽室コーン炒飯」や地元食材の洋食メニューが人気の駅前レストラン（11:00〜14:00・17:00〜20:30、日曜休）。',
      clue:
        '旅の締めくくりは、芽室駅前で長く愛される人気洋食店「レストランHiro」で自慢の名物料理をゆっくり美味しく味わおう（11:00〜14:00・17:00〜20:30、日曜休）。日本一の生産量を誇る芽室のスイートコーンをふんだんに使ったご当地グルメ「十勝芽室コーン炒飯」は、甘く弾けるコーンの食感と香ばしい風味が絶品だ。黄金の恵みを存分に堪能して、芽室の旅を晴れやかに笑顔で結ぼう。',
      hook: '',
      f7_fragment: '芽室町の新ご当地グルメ「十勝芽室コーン炒飯」が人気の駅前レストラン。',
      f7_full: '「レストランHiro」で十勝芽室コーン炒飯を堪能し、芽室の街歩きを締めくくった。',
    },
  ],
};
