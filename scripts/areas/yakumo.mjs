export default {
  slug: 'yakumo',
  station_order: 1002,
  station: '八雲',
  line: 'JR函館本線',
  area_name: '八雲本町・末広町',
  prefecture: '北海道',
  municipality: '八雲町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '八雲', '木彫り熊', 'ホーラク', '八雲神社'],
  style_genre: 'ink_and_watercolor',
  title: '木彫り熊発祥の街と歴史の社を巡る散策路',
  description:
    '尾張徳川家開拓ゆかりのJR八雲駅から老舗喫茶ホーラク、洋菓子のクレールいとう、木彫り熊資料館を経て熱田神宮分社・八雲神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Yakumo Station, vintage Hokkaido hand-carved wooden bears in a cozy retro cafe, delicate French pastries, a folk history museum, and the historic Yakumo Shrine torii gate, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び八雲を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '木彫り熊に囲まれる 軽食＆喫茶 ホーラク',
      subtext: '無数の木彫り熊が並ぶ圧巻の店内で名物チーズ焼きカレーを味わった',
      badge: {
        code: 'yakumo_horaku',
        name_ja: '木彫り熊の駅前喫茶',
        subtitle_en: 'Cafe Horaku Yakumo',
        description:
          '軽食＆喫茶 ホーラクを訪れ、圧巻の木彫り熊コレクションと名物カレーを楽しんだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hand-carved wooden Hokkaido bear beside a steaming baked cheese curry dish on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '本町通りの老舗洋菓子 クレールいとう',
      subtext: '地元で長く愛される焼菓子やスイーツを手土産に選んだ',
      badge: {
        code: 'yakumo_clair_ito',
        name_ja: '八雲本町の洋菓子店',
        subtitle_en: 'Clair Ito Patisserie',
        description:
          'クレールいとうを訪れ、本町通りで愛され続ける洋菓子と温かなおもてなしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden baked madeleine pastries wrapped with a ribbon in a classic hometown patisserie on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '発祥の歴史を学ぶ 木彫り熊資料館',
      subtext: '徳川義親公から始まる北海道の木彫り熊の原点に触れた',
      badge: {
        code: 'yakumo_bear_museum',
        name_ja: '木彫り熊発祥の地',
        subtitle_en: 'Woodcarving Bear Museum',
        description:
          '八雲町郷土資料館・木彫り熊資料館を訪れ、北海道の木彫り熊発祥の歩みを学んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an artisanal carved wooden bear sculpture beside traditional woodcarving chisels on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '熱田神宮唯一の分社 八雲神社',
      subtext: '明治二十年に尾張徳川家の働きかけで創建された社に参拝した',
      badge: {
        code: 'yakumo_shrine',
        name_ja: '熱田神宮唯一の分社',
        subtitle_en: 'Yakumo Atsuta Shrine',
        description:
          '八雲神社に参拝し、尾張徳川家と熱田神宮の深い縁を伝える境内で祈ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a dignified Shinto shrine torii gate and sacred camphor-inspired timber eaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'yakumo_complete',
    name_ja: '八雲・木彫り熊と尾張開拓の旅人',
    subtitle_en: 'Explorer of Yakumo Town',
    description:
      'JR八雲駅からホーラク、クレールいとう、木彫り熊資料館、八雲神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a hand-carved wooden bear, hometown pastries, and a historic Shinto torii gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR八雲駅',
      lat: 42.253771,
      lng: 140.272959,
      address: '北海道二海郡八雲町本町1',
      description:
        '旧尾張徳川家の開拓に始まる八雲町の玄関口（特急停車駅・みどりの窓口あり）。北海道の木彫り熊発祥の地ならではの文化と歴史を感じながら、駅前から町歩きを始められる。',
      clue:
        '旧尾張徳川家による開拓の歴史に始まり、北海道の木彫り熊発祥の地として広く知られる八雲町の玄関口「JR八雲駅」から町歩きを始めよう（駅舎開放・みどりの窓口あり）。駅周辺には昔ながらの商店街や町の歴史を伝える文化施設が徒歩圏内にぎゅっと集まっている。改札を出て東方向へと外へ踏み出したら、まずはすぐ駅前の老舗「軽食＆喫茶 ホーラク」を目指して軽やかな足取りで元気よく歩き出そう。',
      hook: '駅から東方向へ徒歩約1分',
      f7_fragment: '旧尾張徳川家の開拓に始まる八雲町の玄関口で、木彫り熊文化が薫る駅。',
      f7_full: '「JR八雲駅」を後にし、木彫り熊の原点と尾張ゆかりの古社を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '軽食＆喫茶 ホーラク',
      lat: 42.253874,
      lng: 140.273551,
      address: '北海道二海郡八雲町本町145',
      description:
        '駅前の老舗喫茶店（10:00〜15:00・18:00〜23:00、無休）。壁面や棚に無数の木彫り熊が並ぶ圧巻の空間の中で、名物のチーズ焼きカレーなどの温かい軽食を楽しめる。',
      clue:
        '駅前の老舗喫茶「軽食＆喫茶 ホーラク」で、無数の木彫り熊に囲まれながら名物のチーズ焼きカレーを味わおう（無休）。食後は北西の「クレールいとう」へ向かおう。',
      hook: '北西方向へ徒歩約5分',
      f7_fragment: '壁や棚に無数の木彫り熊が並ぶ圧巻の空間とチーズ焼きカレーが名物の喫茶店。',
      f7_full: '「軽食＆喫茶 ホーラク」の木彫り熊と名物カレーに感動し、本町通りを歩いた。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'クレールいとう',
      lat: 42.255915,
      lng: 140.27112,
      address: '北海道二海郡八雲町本町234-4',
      description:
        '本町通りで長く愛される地元の洋菓子店（月〜土9:00〜18:00、日10:00〜18:00、元日休）。八雲にちなんだ焼菓子やケーキなど、街歩きの手土産にぴったりの品が揃う。',
      clue:
        '八雲の本町通りで長年にわたり地域の人々に愛され続けてきた洋菓子店「クレールいとう」へ楽しく立ち寄ってみよう（月〜土9:00〜18:00、日10:00〜18:00、元日休）。ショーケースに並ぶ美しいケーキや八雲にちなんだ焼菓子は、街歩きの楽しいお土産や旅のおやつにもぴったりだ。甘い香りと地元の温もりに触れたら、南西方向の「八雲町郷土資料館・木彫り熊資料館」へと歩を進めよう。',
      hook: '南西方向へ徒歩約5分',
      f7_fragment: '本町通りで長く愛され、八雲にちなんだ焼菓子やスイーツが揃う洋菓子店。',
      f7_full: '「クレールいとう」で温かな街の洋菓子に出会い、木彫り熊の資料館へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '八雲町郷土資料館・木彫り熊資料館',
      lat: 42.254427,
      lng: 140.268266,
      address: '北海道二海郡八雲町末広町154',
      description:
        '北海道の木彫り熊発祥と町の歩みを伝える資料館（9:00〜16:30、入館無料、月曜・祝祭日・年末年始休）。徳川義親がスイスから持ち帰った熊を原点とする貴重な資料を展示。',
      clue:
        '尾張徳川家の徳川義親がスイスから持ち帰った熊を原点とする北海道の木彫り熊発祥の歴史を伝える「八雲町郷土資料館・木彫り熊資料館」を訪ねよう（9:00〜16:30・無料、月曜祝休）。冬の農閑期に農民の副業として広まった芸術性の高い木彫り熊の数々は見応え抜群で、隣接する日本庭園・梅村庭園の静かな佇まいも実に美しい。八雲の誇りに触れたら、南西の「八雲神社」へとゆっくり向かおう。',
      hook: '南西方向へ徒歩約8分',
      f7_fragment: '徳川義親に始まる北海道の木彫り熊発祥の資料を展示する入館無料の資料館。',
      f7_full: '「八雲町郷土資料館・木彫り熊資料館」で北海道工芸の原点に触れ、胸が熱くなった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '八雲神社',
      lat: 42.252175,
      lng: 140.262159,
      address: '北海道二海郡八雲町宮園町56',
      description:
        '明治20年（1887年）に尾張徳川家の働きかけで創建された神社（参拝自由・無休）。愛知県・熱田神宮の全国で唯一の分社として、開拓の歴史と深い信仰を今に伝えている。',
      clue:
        '旅の締めくくりは、明治二十年に尾張徳川家の働きかけによって創建された由緒ある古社「八雲神社」へ丁寧に心を込めて参拝しよう（参拝自由）。なんと愛知県・熱田神宮の全国で唯一の分社という特別な由緒を持ち、遠く離れた尾張と北海道・八雲を結ぶ開拓の深い絆を今も静かに伝えている。木立に囲まれた清々しい境内で旅の無事を感謝して、木彫り熊と歴史薫る八雲の散歩を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: '1887年に尾張徳川家の働きかけで創建された、熱田神宮の全国唯一の分社。',
      f7_full: '「八雲神社」の境内で尾張と北海道の深い縁に手を合わせ、八雲の旅を終えた。',
    },
  ],
};
