export default {
  slug: 'taisei_memuro',
  station_order: 940,
  station: '大成',
  line: 'JR根室本線',
  area_name: '大成・東めむろ',
  prefecture: '北海道',
  municipality: '芽室町',
  category: 'グルメ・自然',
  budget_tier: 1,
  tags: ['根室本線', 'ラーメン', '農産物直売所', '窯焼きピッツァ', '十勝平野'],
  style_genre: 'ink_and_watercolor',
  title: '十勝の恵みと大成の風を味わう芽室散歩',
  description:
    '通学生の将来の大成を願って名付けられたJR大成駅から、麺屋縁、JAめむろ愛菜屋、めむろ窯、芽室東公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Taisei and Higashi-Memuro in Tokachi, Hokkaido, featuring a small rural platform beside sunlit green farmland, a rustic brick pizza kiln, and an open grassy park under wide blue skies, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び大成・東めむろを訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '東芽室の暖簾をくぐった熱々の一杯',
      subtext: '駅から東へ歩き、東めむろの人気ラーメン店で温まった',
      badge: {
        code: 'taisei_memuro_en',
        name_ja: '大成の麺道',
        subtitle_en: 'Noodle Trail',
        description:
          'JR大成駅から東へ歩き、麺屋 縁で心のこもった一杯を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming porcelain ramen bowl and wooden chopsticks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '朝採り野菜が並ぶ農の直売所での出会い',
      subtext: '農業のまち芽室の直売所で、大地が育んだ旬の味覚に触れた',
      badge: {
        code: 'taisei_memuro_aisaiya',
        name_ja: 'めむろの恵み',
        subtitle_en: 'Memuro Harvest',
        description:
          'JAめむろ ファーマーズマーケット 愛菜屋で、新鮮な十勝の農産物に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a woven harvest basket brimming with golden sweet corn and fresh vegetables on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '十勝産小麦の窯焼きピッツァと焼きたてパン',
      subtext: '地元産の小麦と野菜が香る窯焼きの一品でほっと一息ついた',
      badge: {
        code: 'taisei_memuro_kama',
        name_ja: '窯元の麦香',
        subtitle_en: 'Kiln Bakery',
        description:
          '満寿屋商店が手掛けるめむろ窯で、十勝産小麦の窯焼きピッツァやパンを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wood-fired stone pizza oven and golden wheat ears on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '東めむろの広い空の下で深呼吸した芝生公園',
      subtext: '十勝平野の風を感じながら、穏やかな芝生公園を歩いた',
      badge: {
        code: 'taisei_memuro_park',
        name_ja: '東芽室の風',
        subtitle_en: 'East Memuro Breeze',
        description:
          '東めむろ地区の芽室東公園を訪れ、広い空と爽やかな十勝の風を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a gentle grassy park slope under sweeping Tokachi clouds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'taisei_memuro_complete',
    name_ja: '大成・十勝の麦と大地の旅人',
    subtitle_en: 'Traveler of Taisei and East Memuro',
    description:
      'JR大成駅から麺屋縁、JAめむろ愛菜屋、めむろ窯、芽室東公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting golden wheat stalks, a brick pizza kiln, and sweeping Tokachi fields on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR大成駅',
      lat: 42.916008,
      lng: 143.06984,
      address: '北海道河西郡芽室町東芽室南2線1',
      description:
        '昭和61年（1986年）11月1日に臨時乗降場として開業、翌年に駅へ昇格した無人駅（終日利用可）。芽室高校の通学生の利便性向上のため新設され、生徒の将来の「大成」を願って命名された。',
      clue:
        '昭和六十一年十一月に開業し、芽室高校に通う生徒たちの将来の「大成」を願ってその名が付けられたJR根室本線の無人駅「JR大成駅」から楽しい街歩きと散策を始めよう（終日利用可）。十勝平野の澄み渡る大きな青空を仰ぎながら静かなホームをゆっくり後にして東方向へと外へ踏み出したら、まずは徒歩約十分の人気店「麺屋 縁」を目指してのんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から東方向へ徒歩約10分',
      f7_fragment: '昭和六十一年開業、通学生の将来の「大成」を願って名付けられた無人駅。',
      f7_full: '「JR大成駅」の清々しいホームを後にし、十勝の恵みを味わう東めむろの散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '麺屋 縁',
      lat: 42.910939,
      lng: 143.076908,
      address: '北海道河西郡芽室町東めむろ3条南1-3-1',
      description:
        '東めむろエリアで親しまれている人気のラーメン店（11:00〜14:00・17:30〜20:00、火曜休）。散策の腹ごしらえに温かな一杯を楽しめる。',
      clue:
        '東めむろで親しまれる人気店「麺屋 縁」で温かなラーメンを味わおう（11:00〜14:00等、火曜休）。食後は北の「JAめむろ ファーマーズマーケット 愛菜屋」へ向かおう。',
      hook: '北方向へ徒歩約3分',
      f7_fragment: '東めむろエリアで地元の人々に親しまれている人気のラーメン店。',
      f7_full: '「麺屋 縁」で心のこもった温かなラーメンを味わい、旅の元気をしっかり養った。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'JAめむろ ファーマーズマーケット 愛菜屋',
      lat: 42.912223,
      lng: 143.076157,
      address: '北海道河西郡芽室町東めむろ3条南1-1-1',
      description:
        'スイートコーン生産量日本一など農業のまち・芽室の朝採り新鮮野菜や地元特産品が並ぶJAめむろ直営の直売所（9:00〜17:00等、月・木曜休、11月下旬〜4月末冬季休業）。',
      clue:
        'スイートコーン生産量日本一を誇る農業のまち芽室の直売所「JAめむろ ファーマーズマーケット 愛菜屋」へ楽しく元気に立ち寄ろう（9:00〜17:00等、月木・冬期休）。郷の食産ひろば「めむろ みのり〜む」内にある店内には、みずみずしい朝採り野菜や十勝ならではの特産品がずらりと並び見ているだけで心が弾む。大地の恵みをしっかり感じたら、すぐ西隣の「めむろ窯」へと歩いて向かおう。',
      hook: 'すぐ西隣へ徒歩約1分',
      f7_fragment: '芽室の朝採り新鮮野菜や地元特産品が並ぶJAめむろ直営のファーマーズマーケット。',
      f7_full: '「JAめむろ ファーマーズマーケット 愛菜屋」で十勝の大地が育んだ旬の恵みに出会った。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'めむろ窯',
      lat: 42.912104,
      lng: 143.075819,
      address: '北海道河西郡芽室町東めむろ3条南1-1-1',
      description:
        '帯広の老舗・満寿屋商店（ますやパン）が手掛けるピッツァとパンのお店（9:30〜15:00・ピッツェリア11:00〜14:00、月・木曜休）。十勝産小麦と地元野菜を使った窯焼きメニューを提供する。',
      clue:
        '帯広の老舗・満寿屋商店が手掛ける「めむろ窯」で香り豊かなパンや窯焼きピッツァを囲んでほっと一息つく心地よい素敵な休憩時間を過ごそう（9:30〜15:00、月・木曜休）。十勝産小麦の豊かな風味と地元芽室の新鮮な野菜が溶け合う窯焼きの一品は、焼きたてならではの香ばしさと美味しさがあふれている。心まで温まる美味しい時間を過ごしたら、北方向へ歩いて「芽室東公園」へと爽やかに向かおう。',
      hook: '東めむろを北方向へ徒歩約6分',
      f7_fragment: '満寿屋商店が手掛け、十勝産小麦の窯焼きピッツァとパンを届ける人気店。',
      f7_full: '「めむろ窯」で十勝産小麦が香る焼きたてパンとピッツァを味わい、幸せな休憩を過ごした。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '芽室東公園',
      lat: 42.915684,
      lng: 143.075004,
      address: '北海道河西郡芽室町東めむろ3条北2-1',
      description:
        '東めむろ地区に整備された、芝生と緩やかな傾斜が開放的な地区公園（終日開放）。広大な十勝の空を仰ぎながら穏やかに散策できる。',
      clue:
        '旅の締めくくりは、東めむろ地区の落ち着いた街並みに広がる開放的な「芽室東公園」をゆっくり楽しく爽やかに元気に明るく散策しよう（終日開放）。美しい芝生と緩やかな傾斜が心地よい園内を歩きながら大きく深く深呼吸すれば、十勝平野を渡る爽やかな風が心と体をすっきりとリフレッシュさせてくれる。芽室の豊かな農の恵みと麦の香りに満たされた一日を、晴れやかな笑顔で心地よく楽しく結ぼう。',
      hook: '',
      f7_fragment: '東めむろ地区に整備された芝生と緩やかな傾斜が開放的な地区公園。',
      f7_full: '「芽室東公園」の広い空の下で十勝の風を感じ、大成の散策を爽やかに締めくくった。',
    },
  ],
};
