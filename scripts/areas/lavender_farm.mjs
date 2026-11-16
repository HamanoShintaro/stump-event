export default {
  slug: 'lavender_farm',
  station_order: 986,
  station: 'ラベンダー畑',
  line: 'JR富良野線',
  area_name: '基線北・宮町',
  prefecture: '北海道',
  municipality: '中富良野町',
  category: '絶景・グルメ',
  budget_tier: 2,
  tags: ['富良野線', 'ファーム富田', 'メロンハウス', 'すぎやま珈琲', 'クラフトビール'],
  style_genre: 'ink_and_watercolor',
  title: '紫の花畑と香りの丘を歩く富良野散歩',
  description:
    '夏季開設の臨時駅・JRラベンダー畑駅から日本最古の観光ラベンダー園ファーム富田、とみたメロンハウス、すぎやま珈琲、THE DAYへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Lavender-Batake temporary wooden platform, sweeping purple lavender hills at Farm Tomita, sweet orange Furano melons, a quiet hillside coffee cabin, and craft beer glasses overlooking Tokachidake peaks, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再びラベンダー畑を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '紫の斜面が広がる ファーム富田',
      subtext: '日本最古の観光ラベンダー園で彩りの畑と香水の舎を歩いた',
      badge: {
        code: 'lavender_farm_tomita',
        name_ja: '紫の丘の散策者',
        subtitle_en: 'Farm Tomita Blossoms',
        description:
          'ファーム富田を訪れ、歴史あるトラディショナルラベンダー畑と彩りの丘を満喫したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of striped rainbow flower rows and blooming purple lavender slopes on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '旬の赤肉が並ぶ とみたメロンハウス',
      subtext: '富良野メロンや焼きたてメロンパン・スムージーを楽しんだ',
      badge: {
        code: 'lavender_farm_melon',
        name_ja: '赤肉メロンの芳醇',
        subtitle_en: 'Furano Melon House',
        description:
          'とみたメロンハウスで甘い富良野メロンやメロンパン・スムージーを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sliced orange Furano melon beside a crusty golden melonpan bun on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '丘の中腹の隠れ家 すぎやま珈琲',
      subtext: '静かな空間で丁寧なハンドドリップ珈琲とスイーツに寛いだ',
      badge: {
        code: 'lavender_farm_sugiyama',
        name_ja: '花丘の珈琲隠れ家',
        subtitle_en: 'Sugiyama Coffee',
        description:
          'すぎやま珈琲で花畑の賑わいを離れた静かなハンドドリップ珈琲を堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a copper gooseneck kettle pouring hot water into a ceramic coffee dripper on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '伏流水のビールが旨い THE DAY',
      subtext: '中富良野産素材のクラフトビールを十勝岳の麓で味わった',
      badge: {
        code: 'lavender_farm_theday',
        name_ja: '伏流水のクラフト',
        subtitle_en: 'Nakafurano Taproom',
        description:
          'NAKAFURANO BREWERY Taproom THE DAYで伏流水と地元素材の地ビールを楽しんだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a frothy amber craft beer pint glass beside fresh hops and mountain peaks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'lavender_farm_complete',
    name_ja: 'ラベンダー畑・香りの旅人',
    subtitle_en: 'Walker of Lavender Fields',
    description:
      'JRラベンダー畑駅からファーム富田、メロンハウス、すぎやま珈琲、THE DAYまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting blooming purple lavender stalks, sliced orange melon, and a craft beer glass on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JRラベンダー畑駅',
      lat: 43.416799,
      lng: 142.43079,
      address: '北海道空知郡中富良野町基線北15',
      description:
        '平成11年（1999年）6月11日開業、例年6月上旬〜9月下旬頃を中心に開設される仮設の臨時駅。「富良野・美瑛ノロッコ号」などで親しまれた花畑の玄関口。',
      clue:
        '平成十一年六月に開業し、花々の季節である六月上旬から九月下旬頃にかけて開設される富良野線の臨時駅「JRラベンダー畑駅」から香り豊かな散策を始めよう（季節開設）。風に乗って届くラベンダーの爽やかな香りに誘われながら北西方向へと外へ踏み出したら、まずは日本で最も歴史ある観光ラベンダー園「ファーム富田」を目指して、紫の花畑へと胸を弾ませながら軽やかな足取りで元気に歩き出そう。',
      hook: '駅から北西方向へ徒歩約7分',
      f7_fragment: '6月〜10月下旬頃のみ開設され、観光ラベンダー園の玄関口となる臨時駅。',
      f7_full: '「JRラベンダー畑駅」の木製ホームを後にし、紫の花畑と香りの丘を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: 'ファーム富田',
      lat: 43.418249,
      lng: 142.428041,
      address: '北海道空知郡中富良野町基線北15-1',
      description:
        '日本で最も歴史ある観光ラベンダー園（9:00〜17:00・7月等8:30〜18:00、入園無料）。斜面のトラディショナルラベンダー畑や「彩りの畑」、香水の舎などが並ぶ。',
      clue:
        '日本最古の観光ラベンダー園「ファーム富田」でトラディショナルラベンダー畑や彩りの畑をのんびり歩こう（入園無料）。次は南西の「とみたメロンハウス」へ向かおう。',
      hook: '南西方向へ徒歩約3分',
      f7_fragment: '斜面のラベンダー畑や「彩りの畑」、香水の舎が並ぶ日本最古の観光農園。',
      f7_full: '「ファーム富田」の紫の斜面と色鮮やかな花々に包まれ、富良野の香りを満喫した。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'とみたメロンハウス',
      lat: 43.417916,
      lng: 142.426522,
      address: '北海道空知郡中富良野町宮町3-32',
      description:
        '旬の赤肉富良野メロンの直売に加え、カットメロンや焼きたてメロンパン、メロンスムージーなどが揃うメロン専門店（9:00〜17:00、6〜9月無休、10〜5月冬期休業）。',
      clue:
        '旬の赤肉富良野メロンの直売をはじめ、冷たいカットメロンや焼きたての美味しいメロンパン、濃厚なメロンスムージーまで勢揃いする人気専門店「とみたメロンハウス」へ楽しく元気に立ち寄ってみよう（6〜9月無休）。甘いメロンの香りに包まれながら富良野ならではの豊かな美味しさを手に入れたら、賑わいを離れて南西の静かな丘の中腹にある「すぎやま珈琲」へと爽やかに歩いてゆっくり向かおう。',
      hook: '南西方向へ徒歩約10分',
      f7_fragment: '赤肉富良野メロンの直売やメロンパン、スムージーが揃う人気のメロン専門店。',
      f7_full: '「とみたメロンハウス」で甘い富良野メロンの恵みを味わい、笑顔がほころんだ。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'すぎやま珈琲',
      lat: 43.415904,
      lng: 142.421919,
      address: '北海道空知郡中富良野町西1線北14',
      description:
        '静かな丘の中腹にある自家焙煎珈琲の隠れ家カフェ（10:00〜18:00、日・月曜休・臨時休業あり）。丁寧なハンドドリップ珈琲と手作りスイーツで一息つける。',
      clue:
        '観光エリアの賑わいから少し離れた静かな丘の中腹に佇む自家焙煎珈琲の隠れ家カフェ「すぎやま珈琲」でゆったりと寛ごう（10:00〜18:00、日・月曜休）。一杯ずつ丁寧に淹れられる香り高いハンドドリップ珈琲と優しいスイーツを味わえば、歩き疲れた体も心もほっと癒やされていく。穏やかな珈琲タイムを満喫したら、南東の「NAKAFURANO BREWERY Taproom THE DAY」へ向かおう。',
      hook: '南東方向へ徒歩約12分',
      f7_fragment: '丘の中腹に佇み、丁寧なハンドドリップ珈琲とスイーツで寛げる隠れ家カフェ。',
      f7_full: '「すぎやま珈琲」の静かな空間で香り高い珈琲をいただき、旅の疲れを癒やした。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'NAKAFURANO BREWERY Taproom THE DAY',
      lat: 43.411913,
      lng: 142.428117,
      address: '北海道空知郡中富良野町北町9-2',
      description:
        '十勝岳連峰の伏流水と中富良野産素材で醸造するクラフトビール併設のタップルーム（6〜9月水〜金17:00〜・土日祝12:00〜、月火休、季節変動あり）。',
      clue:
        '旅の締めくくりは、十勝岳連峰の清らかな伏流水と中富良野産の素材で醸造するクラフトビール併設の「NAKAFURANO BREWERY Taproom THE DAY」へ楽しく足を運ぼう（月火休・季節変動）。こだわりの地ビールや美味しいおつまみを楽しみながら富良野の豊かな自然の恵みに乾杯すれば、最高の一日が完成する。花と香りに満たされた富良野の散歩を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '十勝岳の伏流水と中富良野産素材で醸造するクラフトビールのタップルーム。',
      f7_full: '「NAKAFURANO BREWERY Taproom THE DAY」で地元の味に乾杯し、旅を締めくくった。',
    },
  ],
};
