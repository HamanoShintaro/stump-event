export default {
  slug: 'shoro',
  station_order: 955,
  station: '庶路',
  line: 'JR根室本線',
  area_name: '庶路・西庶路',
  prefecture: '北海道',
  municipality: '白糠町',
  category: '歴史・街歩き',
  budget_tier: 2,
  tags: ['根室本線', '庶路八幡神社', 'ふれあい公園', 'ドライブイン紀文', '白糠町'],
  style_genre: 'ink_and_watercolor',
  title: '庶路の鎮守と西庶路の風をめぐる街歩き',
  description:
    'JR庶路駅から高台の庶路八幡神社、西庶路の商店やふれあい公園、老舗ドライブイン紀文へと歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Shoro Station in eastern Hokkaido with a hillside Shinto torii gate, coastal breeze over green parkland, and a warm countryside diner, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び庶路を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '高台に鎮座する庶路八幡神社の静けさ',
      subtext: '緑豊かな丘の上で潮風を感じながら穏やかに手を合わせた',
      badge: {
        code: 'shoro_hachiman',
        name_ja: '高台の鎮守',
        subtitle_en: 'Hillside Sanctuary',
        description:
          '庶路八幡神社を訪れ、高台から地域の暮らしを見守る静かな杜に参拝したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden Shinto torii gate atop a breezy green hill on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '北海道の味に出会うセイコーマート',
      subtext: '地元密着の店内で温かいお弁当や北海道グルメを選んだ',
      badge: {
        code: 'shoro_seicomart',
        name_ja: '道東の立ち寄り処',
        subtitle_en: 'Local Provision',
        description:
          'セイコーマート 西庶路店で北海道ならではの温かい惣菜や飲み物を手にしたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm bento box and hot tea flask on a rustic wooden tray on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '白いドームが映える庶路ふれあい公園',
      subtext: '道東の広い空の下で心地よい芝生と遊歩道に癒やされた',
      badge: {
        code: 'shoro_fureai_park',
        name_ja: '道東の憩い広場',
        subtitle_en: 'Meadow Breeze',
        description:
          '庶路ふれあい公園のベンチで寛ぎ、広い芝生と道東の青空を満喫したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a white curved park dome and green lawn beneath sweeping eastern Hokkaido clouds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '国道沿いの老舗・ドライブイン 紀文',
      subtext: '長く親しまれる和食中心の温かい食卓でお腹が満たされた',
      badge: {
        code: 'shoro_kibun',
        name_ja: '街道の温もり',
        subtitle_en: 'Highway Hearth',
        description:
          'ドライブイン 紀文で国道沿いの老舗ならではの温かい食事を味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming Japanese teishoku meal bowl and chopsticks beside a noren curtain on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shoro_complete',
    name_ja: '庶路・潮風と公園の旅人',
    subtitle_en: 'Walker of Shoro Breeze and Parklands',
    description:
      'JR庶路駅から庶路八幡神社、ふれあい公園、ドライブイン 紀文まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a coastal railway sign, hillside torii gate, and white park dome on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR庶路駅',
      lat: 42.983416,
      lng: 144.149863,
      address: '北海道白糠郡白糠町庶路1',
      description:
        '明治34年（1901年）7月20日に開業したJR根室本線の無人駅（終日利用可）。地名はアイヌ語の「ソ・オロ（滝のところ）」に由来すると伝えられている。',
      clue:
        '明治三十四年七月に開業し、アイヌ語で「滝のところ」を意味する「ソ・オロ」に地名を由来するJR根室本線の静かな無人駅「JR庶路駅」から楽しい町歩きと散策を始めよう（終日利用可）。太平洋に近い道東ならではの清々しく開放的な空気を胸いっぱいに吸い込みながら駅のホームを北の方向へと踏み出したら、まずは地域を見守る高台の鎮守「庶路八幡神社」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅を出て北方向へ徒歩約9分',
      f7_fragment: '明治三十四年開業、アイヌ語「ソ・オロ」に地名を由来する静かな無人駅。',
      f7_full: '「JR庶路駅」の静かなホームを後にし、庶路から西庶路へ続く爽やかな散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '庶路八幡神社',
      lat: 42.989102,
      lng: 144.149017,
      address: '北海道白糠郡白糠町庶路宮下5-3-2',
      description:
        '庶路地区の北側高台に鎮座する地域の鎮守（終日参拝可・無休）。町のコミュニティバス停留所にも名を連ねる、地域に根付いた歴史ある神社。',
      clue:
        '庶路地区の北側高台に鎮座する地域の鎮守「庶路八幡神社」へ静かに参拝し手を合わせよう（終日可）。旅の無事を祈ったら南西の「セイコーマート 西庶路店」へ向かおう。',
      hook: '宮下から南西方向へ徒歩約22〜23分',
      f7_fragment: '庶路地区の北側高台に鎮座し、地域の暮らしを見守り続ける歴史ある鎮守。',
      f7_full: '「庶路八幡神社」の高台の杜で静かに手を合わせ、清々しい旅の始まりを迎えた。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'セイコーマート 西庶路店',
      lat: 42.97994,
      lng: 144.135675,
      address: '北海道白糠郡白糠町西庶路東3条南2-1-3',
      description:
        '北海道民の日常に寄り添うローカルコンビニ（6:00〜24:00、無休）。店内調理「ホットシェフ」の温かい弁当や惣菜、北海道産食材を使った人気商品を揃える。',
      clue:
        '北海道民の暮らしに寄り添う道産子お馴染みのローカルコンビニ「セイコーマート 西庶路店」へ楽しく気軽に立ち寄ってみよう（6:00〜24:00）。店内調理「ホットシェフ」の作りたてで温かいお弁当やおにぎり、北海道産ミルクや素材を使ったこだわりの商品を選べば、散策の途中の心強い味方になってくれる。美味しい飲み物やおやつを手にしたら、北西の広々とした「庶路ふれあい公園」へと歩いて向かおう。',
      hook: '東3条から北西方向へ徒歩約5分',
      f7_fragment: '店内調理ホットシェフや道産食材の商品が揃う北海道民お馴染みのコンビニ。',
      f7_full: '「セイコーマート 西庶路店」で北海道らしい飲み物とおやつを選び、笑顔になった。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '庶路ふれあい公園（西庶路ふれあい公園）',
      lat: 42.983305,
      lng: 144.130867,
      address: '北海道白糠郡白糠町西庶路東2条北2-2',
      description:
        '白いトランポリン遊具「ふわふわドーム」やウォーキングコース、健康遊具が整備された広大な公園（終日開放）。ベンチや休憩スペースでゆっくり休める。',
      clue:
        '釧路管内唯一の「ふわふわドーム」やウォーキングコース、健康遊具などが綺麗に整備された地域の広大な憩いの空間「庶路ふれあい公園（西庶路ふれあい公園）」のベンチでゆったりと休憩しよう（終日開放）。広々とした芝生と道東の大きな青い空を眺めながら心地よい風に吹かれて一息つけば、ここまでの長い歩みの疲れもすっと軽くなっていく。十分にリフレッシュできたら、南方面の「ドライブイン 紀文」へ向かおう。',
      hook: '東2条から南方向へ徒歩約14分',
      f7_fragment: 'ふわふわドームや芝生広場、ベンチが整備され道東の空の下で寛げる公園。',
      f7_full: '「庶路ふれあい公園（西庶路ふれあい公園）」のベンチで寛ぎ、道東の風を満喫した。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'ドライブイン 紀文',
      lat: 42.974753,
      lng: 144.129499,
      address: '北海道白糠郡白糠町西庶路西1条南3-2-3',
      description:
        '国道38号沿いで長く親しまれる和食中心のドライブイン（11:00〜19:00、不定休）。JR西庶路駅からも徒歩約3分の場所にあり、温かい食事で旅を締めくくれる。',
      clue:
        '旅の締めくくりは、国道38号線沿いで地域の暮らしや旅人の胃袋を長く支え続けている和食中心の老舗「ドライブイン 紀文」で温かい食事をゆっくり味わおう（11:00〜19:00、不定休）。ほっと心が和む昔ながらの店内でいただく丁寧な定食や温かい麺類は、散策の終わりにぴったりの優しい美味しさだ。帰路はすぐ近くのJR西庶路駅も利用できる安心感とともに、庶路から西庶路への町歩きを笑顔で結ぼう。',
      hook: '',
      f7_fragment: '国道38号沿いで長く親しまれる和食中心の温かい老舗ドライブイン。',
      f7_full: '「ドライブイン 紀文」で温かい食事を堪能し、庶路の豊かな町歩きを締めくくった。',
    },
  ],
};
