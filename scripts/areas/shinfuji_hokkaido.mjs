export default {
  slug: 'shinfuji_hokkaido',
  station_order: 958,
  station: '新富士（北海道）',
  line: 'JR根室本線',
  area_name: '新富士・鳥取大通',
  prefecture: '北海道',
  municipality: '釧路市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '鳥取神社', '鳥取百年館', 'カフェレスト63', '釧路市'],
  style_genre: 'ink_and_watercolor',
  title: '鳥取開拓の誇りと洋食カフェを巡る道',
  description:
    'JR新富士駅から鳥取7号公園、鳥取城を模した百年館が建つ鳥取神社、洋食のカフェレスト63、雑貨カフェRHYTHMを巡るルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Shinfuji Station in Kushiro, Tottori Shrine with its castle-style Tottori Centennial Hall, and a cozy wooden cafe along Tottori Boulevard, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び新富士を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '屋根付きベンチがある鳥取7号公園',
      subtext: '住宅街の静かな公園でひと休みして鳥取開拓の街を感じた',
      badge: {
        code: 'shinfuji_tottori_park',
        name_ja: '鳥取南の休息処',
        subtitle_en: 'Tottori Park Shelter',
        description:
          '鳥取7号公園の屋根付きベンチで一息つき、静かな街並みを感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sheltered wooden park bench beside green shrubs on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '鳥取神社と鳥取城風の鳥取百年館',
      subtext: '旧鳥取藩士族の開拓の歴史を伝える美しい建物に見入った',
      badge: {
        code: 'shinfuji_tottori_shrine',
        name_ja: '因幡開拓の誇り',
        subtitle_en: 'Tottori Pioneer Hall',
        description:
          '鳥取神社（鳥取百年館）を訪れ、鳥取県士族による開拓の歴史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a Shinto torii gate beside a white-walled Japanese castle turret memorial hall on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '釧路洋食が人気のカフェレスト63',
      subtext: '名物スパカツやスペシャルライスで元気いっぱいになった',
      badge: {
        code: 'shinfuji_caferest63',
        name_ja: '釧路洋食の満腹',
        subtitle_en: 'Kushiro Diner Plate',
        description:
          'カフェレスト63でボリュームたっぷりの釧路洋食を堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sizzling cast-iron plate of spaghetti with crispy pork cutlet on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '雑貨とカフェの店 RHYTHM',
      subtext: '木の温もりあふれる空間で暮らしを彩る雑貨選びを楽しんだ',
      badge: {
        code: 'shinfuji_rhythm',
        name_ja: '木漏れ日の雑貨店',
        subtitle_en: 'Wooden Craft Shop',
        description:
          'shop&cafe RHYTHMで木の温もりに包まれながら素敵な雑貨に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of handmade ceramic mugs and dried botanicals on a warm wooden shelf on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shinfuji_hokkaido_complete',
    name_ja: '新富士・鳥取開拓の旅人',
    subtitle_en: 'Explorer of Shinfuji Tottori Heritage',
    description:
      'JR新富士駅から鳥取神社（百年館）、カフェレスト63、RHYTHMまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a castle-style memorial hall, Shinto torii gate, and wooden craft cup on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新富士駅',
      lat: 43.001785,
      lng: 144.349835,
      address: '北海道釧路市新富士町3-1',
      description:
        '大正12年（1923年）12月25日に開業したJR根室本線の駅（終日利用可）。隣接する釧路貨物駅とともに長く道東の物流を支え続けてきた。',
      clue:
        '大正十二年十二月に開業し、隣接する釧路貨物駅とともに長く道東の物流と産業を支え続けてきた歴史ある玄関口「JR新富士駅」から楽しい町歩きと散策を始めよう（終日利用可）。港と工場のまちの活気と、どこか懐かしさを感じる駅前を外へ出て北西方向へと歩き出したら、まずは鳥取南の落ち着いた住宅街にある「鳥取7号公園」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく外へ歩き出そう。',
      hook: '駅から北西方向へ徒歩約14分',
      f7_fragment: '大正十二年開業、釧路貨物駅に隣接し道東の物流を支えてきた歴史ある駅。',
      f7_full: '「JR新富士駅」を後にし、鳥取県士族の開拓史と洋食カフェを巡る散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '鳥取7号公園',
      lat: 43.008579,
      lng: 144.342057,
      address: '北海道釧路市鳥取南5-13',
      description:
        '鳥取南の落ち着いた住宅街に佇む地域公園（終日開放）。屋根付きの休憩ベンチが設けられており、散策途中に腰を下ろしてゆっくり一息つくことができる。',
      clue:
        '鳥取南の住宅街に佇む「鳥取7号公園」の屋根付きベンチに腰掛けて心地よく一息つこう（終日開放）。休憩を終えたら北東の「鳥取神社（鳥取百年館）」へと向かおう。',
      hook: '北東方向へ徒歩約14分',
      f7_fragment: '鳥取南の落ち着いた住宅街にあり、屋根付きベンチで一息つける地域公園。',
      f7_full: '「鳥取7号公園」のベンチで呼吸を整え、鳥取地区の穏やかな街並みを感じた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '鳥取神社（鳥取百年館）',
      lat: 43.012686,
      lng: 144.352752,
      address: '北海道釧路市鳥取大通4-2-18',
      description:
        '明治17〜18年に鳥取県から移住した旧鳥取藩士族らが創祀した神社（参拝無休・百年館9:00〜16:00）。境内には鳥取城を模した「鳥取百年館」が建つ。',
      clue:
        '明治十七〜十八年に遠い鳥取県から海を渡って移住した旧鳥取藩士族らが創祀した由緒ある神社「鳥取神社（鳥取百年館）」へ丁寧に参拝しよう（百年館9:00〜16:00）。境内には故郷の鳥取城を模して建てられた印象的な「鳥取百年館」がそびえ、厳しい大地を切り拓いた先人たちの不屈の物語を今に伝えている。歴史の重みに深く感動したら、鳥取大通を北西へ進み「カフェレスト63」へ向かおう。',
      hook: '鳥取大通を北西方向へ徒歩約13分',
      f7_fragment: '旧鳥取藩士族が創祀し、境内に鳥取城風の百年館が建つ歴史ある神社。',
      f7_full: '「鳥取神社（鳥取百年館）」で鳥取県士族の誇りある開拓史に触れ、胸を打たれた。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'カフェレスト63',
      lat: 43.016744,
      lng: 144.342854,
      address: '北海道釧路市鳥取大通6-5-6',
      description:
        'スパカツや名物「スペシャルライス」など、釧路らしいボリューム満点の洋食メニューが人気のレストラン（11:00〜15:00・17:00〜20:00、水・木曜休）。',
      clue:
        '名物スパカツや看板メニュー「スペシャルライス」など、釧路らしいボリューム満点の洋食が地元で長く愛されている人気店「カフェレスト63」で美味しい食事を堪能しよう（水・木曜休）。アツアツの鉄板から漂う香ばしいソースの香りと食べ応え抜群の一皿は、歩き疲れた体に元気をたっぷり届けてくれる。お腹が幸せに満たされたら、鳥取大通をさらに西へ「shop&cafe RHYTHM」へ向かおう。',
      hook: '鳥取大通を西方向へ徒歩約7分',
      f7_fragment: 'スパカツや名物スペシャルライスなど釧路洋食が人気のアットホームな名店。',
      f7_full: '「カフェレスト63」でボリューム満点の釧路洋食を味わい、元気を取り戻した。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'shop&cafe RHYTHM（リズム）',
      lat: 43.017048,
      lng: 144.335334,
      address: '北海道釧路市鳥取大通8-7-27',
      description:
        '木の温もりあふれる空間の1階が雑貨店、2階がカフェになっている人気スポット（10:30〜17:00、水曜休）。暮らしを彩る丁寧な雑貨選びを楽しめる。',
      clue:
        '旅の締めくくりは、木の温もりあふれる心地よい空間の1階がセンス溢れる雑貨店、2階が落ち着いたカフェになっている「shop&cafe RHYTHM（リズム）」へ楽しく立ち寄ろう（10:30〜17:00、水曜休）。丁寧に選び抜かれた器や布小物、暮らしを優しく彩る雑貨たちを眺めていると、日常が少し特別に輝き始める。素敵な記念の一品を手に入れて、新富士の旅を晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '木の温もりあふれる空間の1階で素敵な雑貨選びを楽しめる人気ショップ＆カフェ。',
      f7_full: '「shop&cafe RHYTHM（リズム）」でお気に入りの雑貨に出会い、新富士の旅を終えた。',
    },
  ],
};
