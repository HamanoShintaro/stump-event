export default {
  slug: 'neppu',
  station_order: 1007,
  station: '熱郛',
  line: 'JR函館本線',
  area_name: '熱郛・白井川',
  prefecture: '北海道',
  municipality: '黒松内町',
  category: 'グルメ・歴史',
  budget_tier: 2,
  tags: ['函館本線', '熱郛', 'そば屋この花', '道の駅くろまつない', 'ピザドゥ'],
  style_genre: 'ink_and_watercolor',
  title: '白井川の風に吹かれ熱郛の味わいを巡る',
  description:
    '町民サロン併設のJR熱郛駅から白光山永昌寺、手打ちそばのこの花、焼きたてパンとピザが人気の道の駅くろまつないを経て熱郛馬頭観世音へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Neppu Station with wooden community hall, a quiet Zen temple roof, handmade buckwheat soba noodles, a wood-fired artisan cheese pizza at a roadside station, and historic pioneer stone monuments, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び熱郛を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '明治開拓の古刹 白光山 永昌寺',
      subtext: '白井川地区に根ざす静かな曹洞宗寺院の佇まいに心洗われた',
      badge: {
        code: 'neppu_eishoji',
        name_ja: '白井川の古刹',
        subtitle_en: 'Eishoji Temple Neppu',
        description:
          '白光山 永昌寺の前を訪れ、明治十年頃の開拓から続く白井川の歴史に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a serene Zen Buddhist temple bell and sweeping wooden eaves amid tall northern trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '奈川在来種が自慢の そば屋 この花',
      subtext: '黒松内産そば粉を使ったコシの強い手打ちそばを堪能した',
      badge: {
        code: 'neppu_konohana_soba',
        name_ja: '白井川の手打ち蕎麦',
        subtitle_en: 'Konohana Handmade Soba',
        description:
          'そば屋 この花を訪れ、黒松内産・奈川在来種の手打ちそばの風味を味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of glossy handmade soba noodles served on a woven bamboo zaru tray with dipping cup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'パンとピザの名所 道の駅くろまつない',
      subtext: 'トワ・ヴェール・ドゥーの焼きたてパンと窯焼きピザに笑顔になった',
      badge: {
        code: 'neppu_michinoeki',
        name_ja: '焼きたてパンとピザ',
        subtitle_en: 'Michi-no-Eki Kuromatsunai',
        description:
          '道の駅くろまつない toit vert Ⅱを訪れ、道産小麦パンと本格窯焼きピザを満喫したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a crisp wood-fired local cheese pizza and golden crusty wheat loaf on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '開拓碑が並ぶ 熱郛馬頭観世音',
      subtext: '旧熱郛村役場跡広場で先人たちの開拓百年の歩みに手を合わせた',
      badge: {
        code: 'neppu_batokannon',
        name_ja: '白井川開拓の碑群',
        subtitle_en: 'Neppu Pioneer Monuments',
        description:
          '熱郛馬頭観世音（旧熱郛村役場跡広場）を訪れ、先人の開拓碑に敬意を表したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of weathered pioneer memorial stones and a tranquil stone Bato Kannon statue set in green grass on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'neppu_complete',
    name_ja: '熱郛・白井川の食と歴史の旅人',
    subtitle_en: 'Explorer of Neppu',
    description:
      'JR熱郛駅から永昌寺、そば屋この花、道の駅くろまつない、熱郛馬頭観世音まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a northern timber station, handmade soba noodles, a wood-fired pizza, and pioneer stone monuments on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR熱郛駅',
      lat: 42.675559,
      lng: 140.374951,
      address: '北海道寿都郡黒松内町字白井川1',
      description:
        '明治36年（1903年）開業、JR北海道函館支社管轄の最北端駅（終日開放・町民サロン「熱郛ホール」併設）。アイヌ語に由来する難読駅名でも知られ、白井川地区の玄関口。',
      clue:
        '明治三十六年に開業し、JR北海道函館支社管轄の最北端駅としても知られる難読駅名の「JR熱郛駅」から、白井川の風を感じる散歩を始めよう（終日開放）。町民サロン「熱郛ホール」を併設する駅舎を出て南東方向へと外へ踏み出したら、まずは明治十年頃から開拓が始まったこの地に根ざす古刹「白光山 永昌寺」を目指して、長閑な道南の空気を胸に感じながら軽やかな足取りで元気よく歩き出そう。',
      hook: '駅から南東方向へ徒歩約4分',
      f7_fragment: 'JR北海道函館支社管轄の最北端駅で、町民サロン「熱郛ホール」を併設。',
      f7_full: '「JR熱郛駅」を後にし、白井川の古刹と名物そば・道の駅の旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '白光山 永昌寺',
      lat: 42.673737,
      lng: 140.379369,
      address: '北海道寿都郡黒松内町字白井川8',
      description:
        '明治10年頃から開拓が始まった白井川地区に根ざす歴史ある曹洞宗の寺院（参拝・外観見学自由）。開拓の時代から地域の心の拠り所として静かな佇まいを保っている。',
      clue:
        '白井川地区の開拓期から地域を見守り続けてきた曹洞宗の古刹「白光山 永昌寺」に静かに心を込めて参拝しよう（参拝自由）。次は南西の「そば屋 この花」へ向かおう。',
      hook: '南西方向へ徒歩約2分',
      f7_fragment: '明治の白井川開拓期から地域の歴史とともに歩んできた曹洞宗の古刹。',
      f7_full: '「白光山 永昌寺」の前で静かな祈りの空気に触れ、評判の手打ちそば店へ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'そば屋 この花',
      lat: 42.673084,
      lng: 140.377012,
      address: '北海道寿都郡黒松内町字白井川8-216',
      description:
        '黒松内産「奈川在来種」を使ったコシの強い手打ちそばが評判の人気店（11:30〜14:45頃・売切次第終了、月・火曜休・変動あり）。素朴な味わいと豊かなそばの香りが旅人を魅了する。',
      clue:
        '黒松内産の希少な「奈川在来種」を使ったコシの強い手打ちそばが評判の名店「そば屋 この花」で絶品そばをゆっくり味わおう（11:30〜14:45頃・売切終了、月・火曜休）。丁寧に打たれた香り高いそばを一口すすれば、黒松内の澄んだ水と大地の恵みが口いっぱいに広がる。美味しい手打ちそばに大満足したら、東の「道の駅くろまつない toit vert Ⅱ」へと軽やかに歩を進めよう。',
      hook: '東方向へ徒歩約4分',
      f7_fragment: '黒松内産「奈川在来種」のコシの強い手打ちそばが評判の人気店。',
      f7_full: '「そば屋 この花」で奈川在来種の香り高い手打ちそばを堪能し、心が満たされた。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '道の駅くろまつない toit vert Ⅱ（トワ・ヴェール・ドゥー）',
      lat: 42.672638,
      lng: 140.379894,
      address: '北海道寿都郡黒松内町字白井川8-10',
      description:
        '道産小麦の焼き立てパンや黒松内産チーズ等を使った本格窯焼きピザ「ピザドゥ」が名物の道の駅（4〜9月9:00〜18:00・10〜3月9:00〜17:00、11〜3月火曜休）。',
      clue:
        '焼きたてパンと本格窯焼きピザで全道から旅人が訪れる人気スポット「道の駅くろまつない toit vert Ⅱ（トワ・ヴェール・ドゥー）」へ立ち寄ろう（4〜10月無休、11〜3月火曜休）。道産小麦の香り豊かなパンや地元の特産品、黒松内産チーズをたっぷり使ったピザをお土産や軽食に選べば自然と笑顔もこぼれる。賑わいを存分に楽しんだら、道路向かいの南西にある「熱郛馬頭観世音」へと向かおう。',
      hook: '南西方向へ徒歩約2分',
      f7_fragment: '道産小麦の焼きたてパンや本格窯焼きピザ「ピザドゥ」が名物の道の駅。',
      f7_full: '「道の駅くろまつない」で焼きたてパンと特産品に出会い、道路向かいの史跡へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '熱郛馬頭観世音（旧熱郛村役場跡広場）',
      lat: 42.672016,
      lng: 140.379326,
      address: '北海道寿都郡黒松内町字白井川9',
      description:
        '旧熱郛村役場跡地に整備された開拓記念の広場（常時見学可）。「白井川開拓百周年記念之碑」「乳牛感謝之碑」「横村儀兵衛之碑」等の石碑群と馬頭観世音が集められている。',
      clue:
        '旅の締めくくりは、道の駅の道路向かいに位置する旧熱郛村役場跡地「熱郛馬頭観世音（旧熱郛村役場跡広場）」で先人の歩みに静かに思いを馳せよう（常時見学可）。「白井川開拓百周年記念之碑」や「乳牛感謝之碑」などの開拓石碑群と馬頭観世音が静かに並び、かつての熱郛村の歴史を今に伝えている。先人と大地への深い感謝を胸いっぱいに刻んで、熱郛の散歩を晴れやかに明るく楽しく締めくくろう。',
      hook: '',
      f7_fragment: '旧熱郛村役場跡地に開拓百周年碑などの石碑群と馬頭観世音が並ぶ広場。',
      f7_full: '「熱郛馬頭観世音」の開拓石碑群の前で手を合わせ、熱郛の旅を終えた。',
    },
  ],
};
