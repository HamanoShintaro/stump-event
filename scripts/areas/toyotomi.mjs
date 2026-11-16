// scripts/areas/toyotomi.mjs
// station_order: 893

export default {
  slug: 'toyotomi',
  station_order: 893,
  station: '豊富',
  line: 'JR宗谷本線',
  area_name: '豊富・酪農の街並みと石油香る豊富温泉',
  prefecture: '北海道',
  municipality: '豊富町',
  category: '酪農と石油成分の湯',
  budget_tier: 2,
  tags: ['北海道', '豊富町', '豊富駅', '豊富温泉', '丸勝亭'],
  style_genre: 'ink_and_watercolor',
  title: '豊富・酪農の街の老舗食堂と石油成分の名湯へ',
  description:
    '観光情報センター併設の「JR豊富駅」から、かつ丼や手打ち蕎麦で愛される老舗「丸勝亭」、街を見守る「豊富八幡神社」、開拓と酪農を伝える「豊富町郷土資料室」、世界でも珍しい石油成分を含む温泉「豊富温泉ふれあいセンター」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Toyotomi Station, welcoming town restaurant serving crisp katsudon bowl, wooded Hachiman Shrine torii, rural dairy heritage display, and relaxing wooden hot spring lodge in rolling pastureland, full bleed, no text, no letters.',
  question: 'サロベツの酪農の拠点・豊富の駅から老舗食堂や郷土資料室、世界でも珍しい豊富温泉を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: 'かつ丼や手打ち蕎麦で町民や旅人に長年親しまれる「丸勝亭」',
      subtext: '駅からも歩ける老舗食堂のボリュームあるかつ丼と手打ち蕎麦が絶品だった。',
      badge: {
        code: 'toyotomi_marukatsu',
        name_ja: '豊富・丸勝亭の満腹旅',
        subtitle_en: 'Hearty Diner Guest of Marukatsu',
        description: '豊富の老舗食堂・丸勝亭でかつ丼や手打ち蕎麦を堪能した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of crispy pork katsudon and handmade soba noodles on a classic wooden diner table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '市街地を静かに見守り続ける町の鎮守「豊富八幡神社」',
      subtext: '酪農の町の穏やかな風景の中で、地域の安寧を願う静謐な社に出会えた。',
      badge: {
        code: 'toyotomi_shrine',
        name_ja: '豊富・酪農の町の鎮守',
        subtitle_en: 'Sanctuary Visitor of Toyotomi',
        description: '豊富町の鎮守・豊富八幡神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a dignified wooden Japanese shrine gate framed by northern birch trees under clear sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '豊富町の開拓史や酪農の歩みを展示する「豊富町郷土資料室」',
      subtext: '厳しい自然を乗り越えて日本有数の酪農郷を築いた先人の資料に見入った。',
      badge: {
        code: 'toyotomi_museum',
        name_ja: '豊富・酪農開拓の学徒',
        subtitle_en: 'Dairy Heritage Explorer of Toyotomi',
        description: '豊富町郷土資料室で町の開拓と酪農の歴史を学んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting antique Hokkaido dairy milk cans, pioneer farm tools, and historic black-and-white settlement photographs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '大正の石油試掘で湧出した世界でも珍しい湯「豊富温泉ふれあいセンター」',
      subtext: '石油成分が浮かぶ独特の湯の温もりと、全国から湯治客が集う魅力を体感した。',
      badge: {
        code: 'toyotomi_onsen',
        name_ja: '豊富・石油香る名湯客',
        subtitle_en: 'Toyotomi Mineral Oil Spa Guest',
        description: '世界でも珍しい石油成分を含む豊富温泉ふれあいセンターに入浴した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting warm amber-tinted hot spring bathwater with rising steam overlooking gentle green northern pasture hills, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'toyotomi_master',
    name_ja: '豊富・酪農の街と名湯巡り',
    subtitle_en: 'Toyotomi Dairy & Hot Spring Master',
    description: 'JR豊富駅から丸勝亭、豊富八幡神社、豊富町郷土資料室、豊富温泉ふれあいセンターまでを巡った証',
    image_prompt:
      'A circular emblem combining town railway station, crisp katsudon bowl, antique dairy milk can and steaming amber hot spring bath, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR豊富駅（豊富町観光情報センター）',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '1926年（大正15年）9月25日開業の特急停車駅（駅は終日開放・無料）。隣接する豊富町観光情報センター（4〜11月9:00〜17:00・冬〜15:00、年末年始休）では特産品販売やレンタサイクルも利用できる。',
      address: '北海道天塩郡豊富町西3条7丁目1',
      lat: 45.104569,
      lng: 141.772491,
      clue:
        '大正十五年九月に天塩線の駅として開業し、今も宗谷本線の特急列車が停車するサロベツ酪農の玄関口「JR豊富駅」から町歩きと散策を始めよう（駅終日利用可）。隣接する豊富町観光情報センターで町の特産品や観光案内を丁寧に確かめてから駅前へ出たら、まずは市街地の大通にある、かつ丼や手打ち蕎麦で地元から愛される人気の老舗食堂「丸勝亭」を目指してのんびり楽しく元気に外へと歩き出そう。',
      surprise: '特急が停まる酪農の町の駅らしく、観光情報センターに特産品やレンタサイクルが揃い活気があった。',
      hook: 'JR豊富駅を出たら、徒歩圏の老舗食堂「丸勝亭」へ向かおう。',
      f7_fragment: '大正十五年開業、観光情報センターを併設するサロベツ酪農の玄関口。',
      f7_full: '「JR豊富駅」に降り立ち、酪農の町の老舗の味と豊富温泉を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toyotomi Station tidy northern Japanese town railway terminal under clear blue sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '丸勝亭',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '豊富大通にある人気の老舗食堂。11:00〜15:00（売切次第終了）、日曜休（不定休あり）。かつ丼（1,400円前後）やラーメン、手打ち蕎麦などが地元客と旅人の双方に愛されている。',
      address: '北海道天塩郡豊富町豊富大通4丁目1',
      lat: 45.100546,
      lng: 141.777041,
      clue:
        '豊富大通の老舗「丸勝亭」へ入ろう（11:00〜15:00、日曜休）。ボリューム満点のかつ丼や手打ち蕎麦が絶品だ。食後は町の鎮守「豊富八幡神社」へ向かおう。',
      surprise: '老舗食堂ならではの落ち着いた雰囲気と、食べ応え抜群のかつ丼・手打ち蕎麦の美味しさに満足した。',
      hook: '丸勝亭で食事を楽しんだら、徒歩約六分の「豊富八幡神社」へ向かおう。',
      f7_fragment: '豊富大通でボリューム満点のかつ丼や手打ち蕎麦が愛される老舗食堂。',
      f7_full: '「丸勝亭」で名物のかつ丼を味わい、豊富町の温かい食文化に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Marukatsutei classic neighborhood diner table with a generous bowl of crispy katsudon and handmade soba noodles, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '豊富八幡神社',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '豊富町の市街地を静かに見守り続けてきた地域の鎮守社（終日参拝自由・無料）。木立に包まれた境内が、酪農と開拓の歩みを今に伝えている。',
      address: '北海道天塩郡豊富町字上サロベツ1596-2',
      lat: 45.108086,
      lng: 141.77601,
      clue:
        '豊富の市街地を静かに見守り続けてきた町の総鎮守「豊富八幡神社」へと足を運んでみよう（終日参拝自由・無料）。北国の豊かな木立に囲まれた清らかな境内に立ち、厳しい寒さや風雪に耐えながらこの地に豊かな酪農郷を築き上げた先人たちの深い祈りに思いを馳せると自然と背筋が凛と伸びる。旅の無事を心から深く祈ったら、すぐ近くの「豊富町郷土資料室」へとゆっくり笑顔で楽しく歩いて向かおう。',
      surprise: '市街地に近いながらも静謐な木立に包まれた境内の空気が、旅の心を穏やかに整えてくれた。',
      hook: '豊富八幡神社に参拝したら、「豊富町郷土資料室（豊富町民センター内）」へ向かおう。',
      f7_fragment: '市街地の木立に包まれ、豊富町の開拓と暮らしを見守り続ける鎮守社。',
      f7_full: '「豊富八幡神社」の静かな境内で手を合わせ、地域の安寧と開拓の歴史に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toyotomi Hachiman Shrine wooden torii gate and sanctuary surrounded by quiet northern birch trees, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '豊富町郷土資料室（豊富町民センター内）',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '豊富町民センター内に設けられた資料室（9:00〜16:00、月曜・年末年始休、入館無料）。豊富町の開拓史や酪農の歩み、暮らしの道具などを無料で学べる。',
      address: '北海道天塩郡豊富町字上サロベツ2010',
      lat: 45.105008,
      lng: 141.768635,
      clue:
        '豊富町民センター内にある「豊富町郷土資料室」へ立ち寄り、町の歩みを詳しく学んでみよう（9:00〜16:00、月曜・年末年始休、入館無料）。館内には厳しい北の原野を開墾した開拓期の生活用具や、日本有数の酪農のまちへと発展してきた貴重な歴史資料の数々が実に丁寧にわかりやすく展示されている。町の歩みを深く知ったら、締めくくりにバスで名湯「豊富温泉ふれあいセンター」へと向かおう。',
      surprise: '無料でこれほど丁寧に豊富町の開拓と酪農の歴史を学べる資料室があることに感心した。',
      hook: '豊富町郷土資料室で町の歴史に触れたら、沿岸バス等で「豊富温泉ふれあいセンター」へ向かおう。',
      f7_fragment: '豊富町民センター内で町の開拓史や酪農の歩みを紹介する無料資料室。',
      f7_full: '「豊富町郷土資料室」で開拓期の道具や酪農の記録を見学し、町への理解を深めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toyotomi Local History Room displaying vintage metal dairy cans and pioneer farming implements in warm light, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '豊富温泉ふれあいセンター',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '大正時代の石油試掘で天然ガスとともに湧出した世界でも珍しい石油成分を含む温泉施設。10:00〜21:00（受付20:30）、隔週木曜・元日等休。日帰り入浴大人510円・小学生250円・65歳以上300円。食堂「味彩」併設。',
      address: '北海道天塩郡豊富町字温泉1',
      lat: 45.073701,
      lng: 141.840284,
      clue:
        '旅の締めくくりは、豊富駅からバスで約十〜十五分の場所にある世界でも珍しい名湯「豊富温泉ふれあいセンター」でゆったり温まろう（10:00〜21:00、隔週木曜等休、大人510円）。大正時代の石油試掘で天然ガスとともに湧き出した石油成分を含むお湯は、全国の湯治客から厚く支持される唯一無二の泉質だ。極上の温泉にゆったり浸かって日頃の疲れを流し、豊富の旅を心から癒やして結ぼう。',
      surprise: '大正の石油試掘で湧出したという独特の石油香る湯の温もりと、全国から湯治客が集う空気に感動した。',
      hook: '',
      f7_fragment: '大正の石油試掘で湧出した、世界でも珍しい石油成分を含む湯治の名湯。',
      f7_full: '「豊富温泉ふれあいセンター」の個性豊かな名湯に浸かり、豊富の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toyotomi Onsen Fureai Center serene timber hot spring lodge nestled amidst green rolling northern hills at dusk, no text, no letters.',
    },
  ],
};
