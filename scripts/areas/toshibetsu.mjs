export default {
  slug: 'toshibetsu',
  station_order: 945,
  station: '利別',
  line: 'JR根室本線',
  area_name: '利別・池田',
  prefecture: '北海道',
  municipality: '池田町',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['根室本線', '山幸ぶどう', '古民家カフェ', '利別神社', '郵便局'],
  style_genre: 'ink_and_watercolor',
  title: '利別川のほとり菓子と古民家をめぐる旅',
  description:
    'JR利別駅から地元人気の洋菓子店おかしの小松、利別神社、利別郵便局、古民家カフェCafe&Life akaoを巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Toshibetsu in Ikeda, Hokkaido, featuring a quiet rural train station near the Toshibetsu River, a cozy patisserie window with purple grape sweets, a tranquil village shrine, and a renovated wooden farmhouse cafe, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び利別を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '山幸ぶどうのシロップと洋菓子が待つ菓子店',
      subtext: '池田町特産のぶどう品種「山幸」の甘い魅力に出合った',
      badge: {
        code: 'toshibetsu_komatsu',
        name_ja: '山幸甘味の目利き',
        subtitle_en: 'Sweet Connoisseur of Yamasachi',
        description:
          '地元の人気菓子店・おかしの小松で、池田町特産ぶどう「山幸」の洋菓子に出会ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of deep purple yamasachi grapes and a delicate fruit tart on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '利別本町の静かな境内で手を合わせた神社',
      subtext: '地域を見守り続ける利別神社で旅の安寧を祈った',
      badge: {
        code: 'toshibetsu_shrine',
        name_ja: '利別本町の静寂を敬う者',
        subtitle_en: 'Guardian of Toshibetsu Shrine',
        description:
          '利別本町に鎮座する利別神社の静かな境内で、地域の安寧を祈ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet wooden Shinto torii gate and autumn maple leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '町の暮らしを支える利別本町の郵便局',
      subtext: '旅の便りを思わせる地域密着の風景に触れた',
      badge: {
        code: 'toshibetsu_post',
        name_ja: '町角の便りを届ける旅人',
        subtitle_en: 'Messenger of Toshibetsu',
        description:
          '利別本町の中心にある利別郵便局に立ち寄り、町の暮らしの温もりに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic red postbox and a stamped travel postcard on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '古民家カフェで味わうスパイスカレーと珈琲',
      subtext: 'Cafe&Life akaoの落ち着いた空間で心から寛いだ',
      badge: {
        code: 'toshibetsu_akao',
        name_ja: '古民家珈琲の安らぎ人',
        subtitle_en: 'Old-House Cafe Wanderer',
        description:
          '利別本町の古民家カフェ・Cafe&Life akaoで、スパイスカレーと珈琲を味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming ceramic curry bowl and pour-over coffee on an aged timber table on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'toshibetsu_complete',
    name_ja: '利別・川辺と古民家の旅人',
    subtitle_en: 'Traveler of Toshibetsu',
    description:
      'JR利別駅からおかしの小松、利別神社、利別郵便局、Cafe&Life akaoまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting purple yamasachi grapes, a vintage postbox, and a warm farmhouse roof on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR利別駅',
      lat: 42.934636,
      lng: 143.424331,
      address: '北海道中川郡池田町字利別西町1',
      description:
        '明治37年（1904年）12月15日に開業したJR根室本線の無人駅（終日利用可）。近くを利別川が流れ、駅周辺には穏やかな街並みが広がる。',
      clue:
        '明治三十七年十二月に開業し、近くを流れる利別川の豊かな潤いに寄り添うJR根室本線の玄関口「JR利別駅」から楽しい町歩きと散策を始めよう（終日利用可）。静かな無人駅のホームをゆっくり後にして南〜南南東の国道242号方面へ踏み出したら、まずは地元の人気洋菓子店「おかしの小松」を目指して、十勝の爽やかな秋や春の心地よい風を感じながらのんびり楽しく元気に笑顔で力強く歩き出そう。',
      hook: '駅から南〜南南東方向（国道242号方面）へ徒歩約10分',
      f7_fragment: '明治三十七年開業、利別川のほど近くに佇む静かな無人駅。',
      f7_full: '「JR利別駅」の素朴なホームを後にし、菓子と古民家を巡る利別の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'おかしの小松',
      lat: 42.928024,
      lng: 143.426773,
      address: '北海道中川郡池田町字利別西町23-28',
      description:
        '行列ができることもある地元の人気洋菓子店（平日10:00〜18:00・土日祝9:00〜17:00、火曜・第4水曜休）。十勝ワイン独自のぶどう品種「山幸」を使ったスイーツが評判。',
      clue:
        '地元の人気洋菓子店「おかしの小松」で池田町特産ぶどう「山幸」の絶品お菓子をゆっくり楽しく選ぼう（火曜・第4水曜休）。買物後は東の「利別神社」へ向かおう。',
      hook: '利別本町方面へ東北東（東）方向へ徒歩約5〜7分',
      f7_fragment: '十勝ワイン独自のぶどう品種「山幸」のシロップや洋菓子が評判の人気店。',
      f7_full: '「おかしの小松」で山幸ぶどうの豊かな甘さに出会い、心が弾む買物をした。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '利別神社',
      lat: 42.928987,
      lng: 143.431189,
      address: '北海道中川郡池田町字利別本町14-9',
      description:
        '利別本町エリアに静かに鎮座し、地域の暮らしと歴史を見守り続ける神社（参拝自由・無休）。落ち着いた木立に囲まれた清らかな境内が迎えてくれる。',
      clue:
        '利別本町の穏やかな街並みの中に静かに鎮座する歴史あるお社「利別神社」へ丁寧に心を込めてゆっくりと爽やかに明るく楽しく参拝しよう（参拝自由）。地域の暮らしと開拓の歩みを静かに見守り続けてきた清らかな境内で深く手を合わせれば、素朴で温かな町の空気が胸にじんわり沁みていく。旅の安全と安寧を心から祈ったら、すぐ南側に位置する「利別郵便局」へと歩いて楽しく元気に明るく向かおう。',
      hook: 'すぐ南方向へ徒歩約1分',
      f7_fragment: '利別本町に静かに鎮座し、地域の暮らしを見守り続ける歴史ある神社。',
      f7_full: '「利別神社」の清らかな境内で手を合わせ、利別本町の穏やかな歴史に触れた。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '利別郵便局',
      lat: 42.928355,
      lng: 143.432092,
      address: '北海道中川郡池田町字利別本町15-1',
      description:
        '利別本町の中心部に位置する地域密着の郵便局（窓口平日9:00〜17:00、土日祝休）。旅の記念に切手やご当地ポストカードなどを購入して便りを出す楽しみもある。',
      clue:
        '利別本町の中心部に佇み、地域の暮らしを長年支え続けている温かな「利別郵便局」へ気軽に立ち寄ってみよう（郵便窓口平日9:00〜17:00、土日祝休）。旅の途中で記念の切手やご当地ポストカードを買い求めれば、今日歩いた利別の風景を大切な誰かに届けたくなるような素敵な楽しみが広がっていく。町の日常に触れたら、すぐ近くの古民家カフェ「Cafe&Life akao」へ向かおう。',
      hook: '本町通りを東北東（東）方向へ徒歩約1〜2分',
      f7_fragment: '利別本町の暮らしを支え、旅の便りや記念切手も求められる地域密着の郵便局。',
      f7_full: '「利別郵便局」の前で町の暮らしの温もりに触れ、旅の便りに思いを馳せた。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'Cafe&Life akao',
      lat: 42.928495,
      lng: 143.432804,
      address: '北海道中川郡池田町字利別本町15-21',
      description:
        '古民家を丁寧に改装した一軒家カフェ（12:00〜・季節変動あり、月曜・火曜休）。手作りのスパイスカレーや挽きたてコーヒーを落ち着いた空間で味わえる。',
      clue:
        '旅の締めくくりは、古民家を丁寧に改装した趣あふれる一軒家カフェ「Cafe&Life akao」で美味しい食事と寛ぎの時間をゆっくり楽しく過ごそう（12:00〜、月火休）。木の温もりを感じる落ち着いた空間で、香り豊かな手作りスパイスカレーや丁寧なコーヒーを味わえば、歩き疲れた体も心もじんわり満たされていく。利別の温かな魅力に包まれて、素敵な旅を晴れやかな明るい笑顔で結ぼう。',
      hook: '',
      f7_fragment: '古民家を改装した空間で手作りスパイスカレーと珈琲を味わえる一軒家カフェ。',
      f7_full: '「Cafe&Life akao」で香り高いカレーと珈琲を堪能し、利別の旅を締めくくった。',
    },
  ],
};
