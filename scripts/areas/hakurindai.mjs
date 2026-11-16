export default {
  slug: 'hakurindai',
  station_order: 942,
  station: '柏林台',
  line: 'JR根室本線',
  area_name: '柏林台・西19条',
  prefecture: '北海道',
  municipality: '帯広市',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['根室本線', '柳月', 'パンケーキ', '十勝産小麦', 'ベーカリー'],
  style_genre: 'ink_and_watercolor',
  title: '十勝の麦と甘味に親しむ柏林台さんぽ',
  description:
    'JR柏林台駅から十勝銘菓の柳月、緑豊かな柏林台公園、高倉町珈琲、十勝産小麦100%のはるこまベーカリーを巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Hakurindai in Obihiro, Hokkaido, featuring a neighborhood park lined with oak trees, a warm bakery displaying crusty loaves made from Tokachi wheat, and a cozy coffee house patio, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び柏林台を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '三方六など十勝銘菓を手に取った買い物',
      subtext: '十勝生まれの菓子舗で旅のお供にぴったりの銘菓を選んだ',
      badge: {
        code: 'hakurindai_ryugetsu',
        name_ja: '柏林台の甘味',
        subtitle_en: 'Sweet Souvenir',
        description:
          '柳月 ぴあざフクハラ西18条店で、十勝発祥の伝統銘菓を手に入れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a striped white birch-bark baumkuchen pastry slice on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '緑の木陰と広い芝生を通り抜けた公園の風',
      subtext: '地域の暮らしが息づく公園の木陰を歩き、爽やかな風を感じた',
      badge: {
        code: 'hakurindai_park',
        name_ja: '柏林の木陰',
        subtitle_en: 'Grove Walk',
        description:
          '柏林台公園の開放的な野球場や木陰の歩道を巡り、穏やかな空気を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of spreading oak leaves and a sunlit wooden park bench on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '自家焙煎の香りに包まれる珈琲休憩',
      subtext: '地元に愛される喫茶店で香り高い珈琲とケーキに癒やされた',
      badge: {
        code: 'hakurindai_yoshida_coffee',
        name_ja: '珈琲の余韻',
        subtitle_en: 'Roasted Break',
        description:
          '珈琲専科ヨシダ いっきゅう店で、自家焙煎の香り高い珈琲を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hand-drip coffee pot and steaming ceramic cup with roasted coffee beans on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '十勝産小麦100%の香ばしいパンとの出会い',
      subtext: '風味豊かな日常食のパンを焼く名店の味に心が満たされた',
      badge: {
        code: 'hakurindai_harukoma',
        name_ja: '麦香る街角',
        subtitle_en: 'Wheat Craft',
        description:
          'はるこまベーカリーで、十勝産小麦100%にこだわった焼き立てパンに出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden artisan wheat bread loaves tied with rustic linen on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'hakurindai_complete',
    name_ja: '柏林台・麦と甘味の散歩者',
    subtitle_en: 'Walker of Hakurindai Wheat and Sweets',
    description:
      'JR柏林台駅から柳月、柏林台公園、珈琲専科ヨシダ いっきゅう店、はるこまベーカリーまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting oak leaves, a baumkuchen slice, and golden wheat bread loaves on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR柏林台駅',
      lat: 42.928874,
      lng: 143.164441,
      address: '北海道帯広市西17条南1-1',
      description:
        '昭和61年（1986年）11月1日に臨時乗降場として開業、翌年に駅へ昇格した高架駅（終日利用可）。帯広市西部の住宅街と十勝の味覚をつなぐ駅。',
      clue:
        '昭和六十一年十一月に臨時乗降場として開業し、翌年の春に駅へと昇格した高架駅「JR柏林台駅」から楽しい街歩きと散策を始めよう（終日利用可）。帯広市西部の爽やかな青い空を仰ぎながら改札をゆっくり抜けて北西方向へ歩き出したら、まずは十勝が誇る老舗菓子舗の店舗「柳月 ぴあざフクハラ西18条店」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に楽しく外へ歩き出そう。',
      hook: '駅を出て北西方向へ徒歩約4分',
      f7_fragment: '昭和六十一年開業、帯広西部の住宅街と十勝の甘味を結ぶ高架駅。',
      f7_full: '「JR柏林台駅」を後にし、十勝の麦と甘味に出会う柏林台の散策を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '柳月 ぴあざフクハラ西18条店',
      lat: 42.931217,
      lng: 143.161702,
      address: '北海道帯広市西18条北1-30',
      description:
        '「三方六」や「あんバタサン」で知られる十勝発祥の菓子舗・柳月の店舗（10:00〜20:00、施設に準ずる休）。旅のお供やお土産選びに最適。',
      clue:
        '十勝発祥の菓子舗「柳月 ぴあざフクハラ西18条店」で名物の三方六やあんバタサンを選ぼう（10:00〜20:00）。お土産を手にしたら南東の「柏林台公園」へ向かおう。',
      hook: '西18条から南東方向へ徒歩約14〜15分',
      f7_fragment: '三方六やあんバタサンで親しまれる十勝発祥の老舗菓子舗の店舗。',
      f7_full: '「柳月 ぴあざフクハラ西18条店」で十勝自慢の銘菓を選び、心弾む買物をした。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '柏林台公園',
      lat: 42.922416,
      lng: 143.167747,
      address: '北海道帯広市柏林台中町5-1',
      description:
        '野球場やパークゴルフ場、遊具などが整備された地域住民の憩いの公園（終日開放）。柏の木立と広い芝生が心地よい散策空間を作り出している。',
      clue:
        '地域住民の温かい憩いの場として親しまれている緑豊かな「柏林台公園」をゆっくり楽しく爽やかに元気に明るくのんびりと散策しよう（終日開放）。園内には野球場やパークゴルフ場、遊具などが綺麗に整備されており、緑の木陰と広い芝生を通り抜ける爽やかな十勝の風が旅の歩みを心地よく軽くしてくれる。澄んだ空気をたっぷり味わったら、南西へ歩いて「珈琲専科ヨシダ いっきゅう店」でゆっくり休憩しよう。',
      hook: '柏林台中町から南西方向へ徒歩約15分',
      f7_fragment: '野球場やパークゴルフ場を備え、緑の木陰が心地よい地域の憩いの公園。',
      f7_full: '「柏林台公園」の広々とした木陰を歩き、爽やかな帯広の風に癒やされた。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '珈琲専科ヨシダ いっきゅう店',
      lat: 42.918722,
      lng: 143.151806,
      address: '北海道帯広市西19条南2-30-5',
      description:
        '昭和54年（1979年）創業の帯広老舗ロースタリー「珈琲専科ヨシダ」のフクハラいっきゅう店内店舗（10:00〜19:00、フクハラいっきゅう店に準ずる不定休）。香り高い自家焙煎珈琲で寛げる。',
      clue:
        '昭和五十四年創業の帯広老舗ロースタリーが手がける「珈琲専科ヨシダ いっきゅう店」で至福の休憩時間をゆっくり楽しく笑顔で過ごそう（10:00〜19:00、不定休）。丁寧に自家焙煎された香り高い珈琲とケーキや軽食を落ち着いた店内の空間で心ゆくまでゆったり味わえば、歩き疲れた体も心もみるみる癒やされていく。十分に寛いで旅の英気を養ったら、南の「はるこまベーカリー」へと向かおう。',
      hook: '西19条を南方向へ徒歩約15分',
      f7_fragment: '帯広の老舗自家焙煎珈琲店による、香り高い一杯を楽しめる喫茶スポット。',
      f7_full: '「珈琲専科ヨシダ いっきゅう店」で自家焙煎珈琲を味わい、ほっと寛いだ。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'はるこまベーカリー',
      lat: 42.906006,
      lng: 143.153088,
      address: '北海道帯広市西19条南5-43-11',
      description:
        '平成11年（1999年）創業（平成22年に現在地へ移転）、十勝産小麦100%にこだわり日常食としてのパンを焼き上げる人気ベーカリー（10:00〜19:00、日曜・月曜休）。カフェスペースも併設。',
      clue:
        '旅の締めくくりは、平成十一年創業、十勝産小麦百パーセントにこだわり続ける人気店「はるこまベーカリー」へ楽しく元気に笑顔で立ち寄ろう（10:00〜19:00、日月休）。毎日の食卓に寄り添う誠実で香り豊かな焼き立てパンがずらりと並び、併設のカフェスペースからもほっこり温かな雰囲気が伝わってくる。とっておきの十勝の麦の味を手に入れて、柏林台の街歩きを晴れやかに笑顔で結ぼう。',
      hook: '',
      f7_fragment: '十勝産小麦100%にこだわり、香り豊かな日常食のパンを焼き上げる人気店。',
      f7_full: '「はるこまベーカリー」で十勝産小麦の香り高いパンに出会い、柏林台の旅を終えた。',
    },
  ],
};
