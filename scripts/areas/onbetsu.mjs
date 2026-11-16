export default {
  slug: 'onbetsu',
  station_order: 952,
  station: '音別',
  line: 'JR根室本線',
  area_name: '釧路音別・本町',
  prefecture: '北海道',
  municipality: '釧路市',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['根室本線', 'おんぽーと', 'しいカツバーガー', '音別神社', '音別の丘'],
  style_genre: 'ink_and_watercolor',
  title: '音別川の風と高台の眺望に出会う小さな旅路',
  description:
    '国鉄時代からの駅舎が残るJR音別駅から、おんぽーと、昭和54年創業の味閣、音別神社、新音別八景の音別の丘を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Onbetsu in Kushiro, Hokkaido, featuring a classic retro railway station, a gentle coastal river winding toward the Pacific Ocean, a hilltop Shinto shrine, and a panoramic grassy lookout hill, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び音別を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: 'ご当地バーガーや焼き菓子に出会える交流拠点',
      subtext: 'ルート38音別館おんぽーとで地元の特産品や軽食に触れた',
      badge: {
        code: 'onbetsu_onport',
        name_ja: '音別館の旅案内',
        subtitle_en: 'Guest of Onport',
        description:
          'ルート38音別館 おんぽーとで、名物「しいカツバーガー」や地域の特産品に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm artisan burger and golden wheat buns on a wooden counter on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '金魚の泳ぐ池を眺めながら味わう老舗食堂',
      subtext: '昭和54年創業の和風レストラン味閣でまちの味を楽しんだ',
      badge: {
        code: 'onbetsu_mikaku',
        name_ja: '味閣の昼餉びと',
        subtitle_en: 'Diner of Mikaku',
        description:
          '昭和54年創業の和風レストラン 味閣で、心温まる食事と店の風情を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of graceful red goldfish swimming in a stone indoor pond beside a steaming meal tray on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '相馬ゆかりの神々を祀る音別川ほとりの社',
      subtext: '明治39年創祀の音別神社で地域の開拓の歴史に触れた',
      badge: {
        code: 'onbetsu_shrine',
        name_ja: '音別社の参詣者',
        subtitle_en: 'Pilgrim of Onbetsu Shrine',
        description:
          '明治39年創祀、相馬太田神社ゆかりの音別神社で地域の歴史に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hilltop wooden Shinto shrine gate overlooking a winding river valley on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '河口と鉄路と大海原を見渡す新音別八景の高台',
      subtext: '音別の丘から太平洋と音別川河口の絶景を望んだ',
      badge: {
        code: 'onbetsu_hill',
        name_ja: '八景の展望者',
        subtitle_en: 'Observer of Onbetsu Hill',
        description:
          '新音別八景に選ばれた音別の丘を訪れ、太平洋と根室本線の絶景を一望したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sweeping coastal hill outlook viewing a river mouth, railway curve, and vast ocean on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'onbetsu_complete',
    name_ja: '音別・川と八景の散歩者',
    subtitle_en: 'Walker of Onbetsu Hill and River',
    description:
      'JR音別駅からルート38音別館おんぽーと、和風レストラン味閣、音別神社、音別の丘まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a classic railway station, goldfish pond, and panoramic ocean bluff on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR音別駅',
      lat: 42.889078,
      lng: 143.931771,
      address: '北海道釧路市音別町本町1-139',
      description:
        '明治36年（1903年）3月1日に開業したJR根室本線の駅（終日開放）。国鉄時代からの趣ある駅舎が残り、かつては貨物輸送の拠点としても栄えた。',
      clue:
        '明治三十六年三月に開業し、国鉄時代からの趣ある駅舎が今も旅人を温かく迎える「JR音別駅」から楽しい町歩きと散策を始めよう（終日開放）。太平洋に近い道東の清々しい空気を胸いっぱい吸い込んで駅前を外へ出たら、まずは北西から北へ歩いて地域交流拠点「ルート38音別館 おんぽーと」を目指して、晴れやかな気持ちでのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に外へ歩き出そう。',
      hook: '駅から北西〜北方向へ徒歩約5分',
      f7_fragment: '明治三十六年開業、国鉄時代からの趣ある駅舎が残る音別の玄関口。',
      f7_full: '「JR音別駅」の懐かしい駅舎を後にし、音別のまちと高台の眺望を目指す旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'ルート38音別館 おんぽーと',
      lat: 42.8897,
      lng: 143.931299,
      address: '北海道釧路市音別町本町1-51',
      description:
        '音別地域の交流拠点施設（平日8:45〜17:00・土日祝9:00〜、年末年始休、物販10:00〜16:00）。特産品物販コーナーでは地元名物「しいカツバーガー」や焼き菓子が人気。',
      clue:
        '地域の交流拠点「ルート38音別館 おんぽーと」で名物しいカツバーガーや特産品を見よう（物販10:00〜16:00）。次は東の「和風レストラン 味閣」へ向かおう。',
      hook: '東方向へ徒歩約2〜3分',
      f7_fragment: '地元名物「しいカツバーガー」や焼き菓子が並ぶ音別の交流・特産品拠点。',
      f7_full: '「ルート38音別館 おんぽーと」で音別ならではの味と温かな案内に出会った。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '和風レストラン 味閣',
      lat: 42.890024,
      lng: 143.933033,
      address: '北海道釧路市音別町本町1-5',
      description:
        '昭和54年（1979年）創業の老舗食堂（11:00〜19:00、不定休）。国道38号沿いにあり、ラーメンや定食・丼物で親しまれるほか店内に金魚の泳ぐ池があることでも知られる。',
      clue:
        '昭和五十四年創業、国道38号線沿いで地元の人々に長く愛されている老舗食堂「和風レストラン 味閣」で温かい食事をゆっくり味わおう（11:00〜19:00、不定休）。美味しいラーメンや定食、丼物をいただきながら、店内で優雅に泳ぐ金魚の池を眺める時間は何とも心和む贅沢で穏やかなひとときだ。お腹が幸せにしっかり満たされたら、音別川を渡った南西側の高台に鎮座する「音別神社」へと向かおう。',
      hook: '本町から南西方向へ徒歩約14〜15分',
      f7_fragment: '昭和五十四年創業、金魚の泳ぐ池があることでも知られる国道沿いの老舗食堂。',
      f7_full: '「和風レストラン 味閣」で心温まるランチを味わい、旅の元気を養った。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '音別神社',
      lat: 42.883932,
      lng: 143.922339,
      address: '北海道釧路市音別町尺別9',
      description:
        '明治39年（1906年）4月15日創祀（境内参拝自由・無休）。福島県の相馬太田神社の御分霊を奉戴したことに始まり、音別川右岸の高台からまちを見守り続けている。',
      clue:
        '明治三十九年四月に福島県の相馬太田神社の御分霊を奉戴して創祀された歴史あるお社「音別神社」へ丁寧に心を込めて参拝しよう（境内自由）。音別川右岸の落ち着いた高台に鎮座する清らかな境内で静かに手を合わせれば、遠い福島から北海道へ渡った人々の開拓への熱い思いが静かに胸の奥に深く伝わってくる。旅の心を穏やかに整えたら、南に広がる展望地「音別の丘」へと元気に楽しく歩いて向かおう。',
      hook: '尺別から南方向へ徒歩約3〜4分',
      f7_fragment: '明治三十九年創祀、相馬太田神社の御分霊を祀る音別川右岸の高台の社。',
      f7_full: '「音別神社」の高台の杜に参拝し、相馬ゆかりの開拓の歴史に思いを馳せた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '音別の丘',
      lat: 42.882012,
      lng: 143.923269,
      address: '北海道釧路市音別町音別1',
      description:
        '新音別八景に選定されている見晴らしの良い展望地（終日開放）。音別川の河口や雄大な太平洋、大地を走る根室本線の鉄路を一望できる絶景スポット。',
      clue:
        '旅の締めくくりは、新音別八景にも選ばれている絶好の展望スポット「音別の丘」へ元気に上がってみよう（終日開放）。高台から見下ろせば、穏やかに海へと注ぐ音別川の河口やどこまでも青い太平洋の大海原、そして広大な風景の中を駆け抜ける根室本線の鉄路が一望のもとに美しく広がっている。道東ならではの清々しい大パノラマを胸いっぱいに焼き付けて、音別の楽しい旅を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '新音別八景に選ばれ、音別川河口と太平洋・根室本線を一望できる展望地。',
      f7_full: '「音別の丘」から太平洋と鉄路の大パノラマを望み、音別の旅を爽やかに終えた。',
    },
  ],
};
