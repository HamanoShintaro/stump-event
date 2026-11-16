export default {
  slug: 'akabira',
  station_order: 931,
  station: '赤平',
  line: 'JR根室本線',
  area_name: '赤平・ズリ山・炭鉱遺産',
  prefecture: '北海道',
  municipality: '赤平市',
  category: '歴史・グルメ',
  budget_tier: 1,
  tags: ['根室本線', '炭鉱遺産', 'ズリ山階段', 'カツラーメン', '古民家カフェ'],
  style_genre: 'ink_and_watercolor',
  title: '炭鉱の記憶と七七七段を仰ぐ赤平の町',
  description:
    'JR赤平駅から名物カツラーメンの珍来、古民家カフェを経て日本一のズリ山階段と旧住友赤平炭鉱の立坑櫓を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Akabira in Hokkaido, featuring a tall steel coal mine shaft tower standing against crisp blue skies, 777 wooden steps climbing a green slag heap hill, and a cozy wooden cafe, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び赤平を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '炭鉱のまちに受け継がれる熱々の一杯',
      subtext: '赤平名物のカツラーメンを味わい、まちの食文化に触れた',
      badge: {
        code: 'akabira_chinrai',
        name_ja: '炭鉱グルメの探求者',
        subtitle_en: 'Coal Town Gourmet Seeker',
        description:
          '老舗ラーメン店・珍来で、炭鉱マンのスタミナ食に始まる赤平名物カツラーメンを味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming ramen bowl topped with crispy golden pork cutlet on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '古民家の温もりに包まれた穏やかな珈琲時間',
      subtext: '大町の古民家カフェで香り高い一杯とスイーツに癒やされた',
      badge: {
        code: 'akabira_luft',
        name_ja: '古民家カフェの旅人',
        subtitle_en: 'Heritage Cafe Traveler',
        description:
          'Café Luftの落ち着いた古民家空間で、自家焙煎珈琲とパティシエのスイーツを楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm coffee cup and baked fruit tart on an aged timber table on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '日本一の七七七段を仰ぎ見たズリ山の雄姿',
      subtext: '日本一の段数を誇るズリ山階段と赤平の街並みを望んだ',
      badge: {
        code: 'akabira_zuriyama',
        name_ja: '七七七段を仰ぐ者',
        subtitle_en: 'Gazer of the 777 Steps',
        description:
          '日本一の777段を有するズリ山展望広場を訪れ、炭鉱の積み上げた歴史の丘を望んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a long wooden staircase ascending a green hillside against distant clouds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '東洋一と謳われた立坑櫓が語る炭鉱の誇り',
      subtext: '旧住友赤平炭鉱の遺産に触れ、地下に刻まれた歴史を感じ取った',
      badge: {
        code: 'akabira_pithead',
        name_ja: '立坑櫓の記憶を継ぐ者',
        subtitle_en: 'Keeper of the Shaft Tower',
        description:
          '赤平市炭鉱遺産ガイダンス施設で旧住友赤平炭鉱の立坑櫓を間近に見学したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a towering steel mine headframe and winding wheel on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'akabira_complete',
    name_ja: '赤平・炭鉱遺産とズリ山の旅人',
    subtitle_en: 'Traveler of Akabira Coal Heritage',
    description:
      'JR赤平駅から名物カツラーメンの珍来、古民家カフェ、ズリ山展望広場、赤平市炭鉱遺産ガイダンス施設まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a steel mine shaft tower, 777 hillside steps, and a warm coffee cup on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR赤平駅',
      lat: 43.554802,
      lng: 142.048524,
      address: '北海道赤平市泉町1-1',
      description:
        '大正2年（1913年）11月10日に「上赤平駅」として開業、昭和18年に現駅名へ改称（駅舎開放時間利用可）。昭和35年には貨物発送量全国1位を記録した炭鉱の拠点。',
      clue:
        '大正二年十一月に開業し、かつて石炭輸送で貨物発送量全国一位を記録した炭鉱の玄関口「JR赤平駅」から楽しい町歩きと散策を始めよう（駅舎開放時間利用可）。平成十一年改築の交流センター併設の駅舎をゆっくり後にして外へ出たら、まずは東方向へ歩いて名物カツラーメンで知られる老舗ラーメン店「珍来」を目指してのんびり楽しく元気に笑顔で力強く爽やかに元気に明るく楽しく歩みを進めよう。',
      hook: '駅前から東方向へ徒歩約4分',
      f7_fragment: '大正二年開業、かつて貨物発送量全国一位を誇った炭鉱の町の玄関口。',
      f7_full: '「JR赤平駅」を後にし、炭鉱の歴史と名物が息づく赤平の街歩きを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '珍来',
      lat: 43.554718,
      lng: 142.051724,
      address: '北海道赤平市大町1-2',
      description:
        '炭鉱マンのスタミナ食として定着した赤平名物「カツラーメン」や味噌ベースの「がんがんラーメン」で知られる老舗ラーメン店（昼〜18:00、7のつく日休・土日祝営業）。',
      clue:
        '炭鉱マンのスタミナ食から生まれた赤平名物カツラーメンの名店「珍来」で熱々の一杯を味わおう（7のつく日休）。食後は南東の古民家カフェ「Café Luft」へ向かおう。',
      hook: '大町通りを南東方向へ徒歩約5分',
      f7_fragment: '炭鉱マンのスタミナ食に始まる赤平名物カツラーメンが評判の老舗店。',
      f7_full: '「珍来」で熱々の赤平名物カツラーメンを味わい、まちの食文化に触れた。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'Café Luft（カフェ ルフト）',
      lat: 43.552507,
      lng: 142.054909,
      address: '北海道赤平市大町1-6-6',
      description:
        '古民家を改装した落ち着いた雰囲気のカフェ（11:30〜18:00、不定休）。パティシエの店主による手作りタルト等のスイーツやプレッツェル、自家焙煎コーヒーを提供する。',
      clue:
        '大町の通り沿いに佇む古民家改装の落ち着いた素敵なお店「Café Luft（カフェ ルフト）」でほっと一息つく心地よい素敵な休憩時間を過ごそう（11:30〜18:00、不定休）。木の温もりあふれる静かな空間で、パティシエの店主が手掛ける特製タルトや焼き菓子、香り高い自家焙煎コーヒーをゆっくり味わえば心まで温まっていく。元気を養ったら、西へ歩いて「ズリ山展望広場」へ向かおう。',
      hook: '大町から西方向へ徒歩約12〜14分',
      f7_fragment: '古民家を改装した店内で本格スイーツと自家焙煎珈琲を楽しめるカフェ。',
      f7_full: '「Café Luft（カフェ ルフト）」で木の温もりと甘いスイーツに包まれ、足を休めた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'ズリ山展望広場',
      lat: 43.550747,
      lng: 142.043859,
      address: '北海道赤平市字赤平693-1',
      description:
        '炭鉱の捨石（ズリ）が積み上がってできた人工の山に設けられた展望広場（散策自由、冬季閉鎖の場合あり）。頂上へ続く「ズリ山階段」は777段あり日本一の段数を誇る。',
      clue:
        'かつて炭鉱から出たズリ（捨石）が積み上がってできた人工の山「ズリ山展望広場」をじっくり楽しく仰ぎ見て元気に散策しよう（散策自由）。山の斜面を一直線に駆け上がる「ズリ山階段」はなんと七百七十七段もあり、ズリ山階段として日本一の段数を誇っている。力強い歴史のモニュメントと眼下に広がる美しい赤平の街並みをじっくり味わったら、東の「赤平市炭鉱遺産ガイダンス施設」へと楽しく歩こう。',
      hook: 'ズリ山麓から東方向へ徒歩約13〜15分',
      f7_fragment: '日本一の777段のズリ山階段を備え、赤平の街と歴史を望む展望広場。',
      f7_full: '「ズリ山展望広場」で七百七十七段の雄姿を見上げ、炭鉱の歴史の大きさを実感した。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '赤平市炭鉱遺産ガイダンス施設',
      lat: 43.549051,
      lng: 142.055393,
      address: '北海道赤平市字赤平485',
      description:
        '旧住友赤平炭鉱の立坑櫓や自走枠整備工場などを間近に見学できる拠点（9:30〜17:00、月火・年末年始休、常設展示無料）。元炭鉱夫らによる有料ガイド付き内部見学ツアーも実施。',
      clue:
        '旅の締めくくりは、旧住友赤平炭鉱の歴史を今に伝える「赤平市炭鉱遺産ガイダンス施設」をじっくり丁寧に楽しく訪ねよう（9:30〜17:00、月火休、常設無料）。敷地内にそびえ立つ堂々たる立坑櫓を間近に見上げ、充実した展示や当時の貴重な資料の数々に触れれば、日本の近代化を支えた炭鉱の誇りと人々の熱い熱意が胸に深く迫ってくる。歴史の重みを抱いて、赤平の散策を晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '旧住友赤平炭鉱の立坑櫓を間近に見学できる炭鉱遺産の保存・展示拠点。',
      f7_full: '「赤平市炭鉱遺産ガイダンス施設」の立坑櫓を仰ぎ、赤平の誇りある歴史に感動した。',
    },
  ],
};
