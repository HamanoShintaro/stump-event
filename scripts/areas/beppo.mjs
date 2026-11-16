export default {
  slug: 'beppo',
  station_order: 961,
  station: '別保',
  line: 'JR根室本線',
  area_name: '別保・別保原野',
  prefecture: '北海道',
  municipality: '釧路町',
  category: '歴史・自然',
  budget_tier: 2,
  tags: ['根室本線', '別保公園', 'エゾヤマザクラ', '別保神社', 'ネーベンフルス'],
  style_genre: 'ink_and_watercolor',
  title: '炭鉱の記憶と桜公園をめぐる別保道',
  description:
    '別保炭鉱の積出拠点だったJR別保駅から日本一遅い桜の別保公園、高台の別保神社、郵便局、老舗洋食ネーベン・フルスへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Beppo Station in Kushiro Town, blooming late spring Ezoyamazakura cherry blossoms across Beppo Park, a hilltop Shinto shrine, and a cozy European-style restaurant, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び別保を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '日本一遅い桜が咲く別保公園とロ・バザール',
      subtext: '600本以上の桜並木と道東の特産品が並ぶ拠点で一息ついた',
      badge: {
        code: 'beppo_park',
        name_ja: '遅咲き桜の公園',
        subtitle_en: 'Late Cherry Blossom Park',
        description:
          '別保公園（地産地消センター ロ・バザール）で北海道の広大な自然と地元の恵みを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of pale pink Ezoyamazakura cherry blossoms over rolling green parkland on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '駅を見下ろす高台の鎮守・別保神社',
      subtext: '京都・賀茂別雷神社の御分霊を祀る由緒ある社に参拝した',
      badge: {
        code: 'beppo_shrine',
        name_ja: '別保高台の社',
        subtitle_en: 'Hilltop Beppo Shrine',
        description:
          '大正七年創建の別保神社に参拝し、高台から別保のまちを眺めたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a stone Shinto torii gate on a green ridge overlooking a quiet valley on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '町の暮らしを見守り続ける別保郵便局',
      subtext: '釧路町役場近くの落ち着いた街並みで地域の日常に触れた',
      badge: {
        code: 'beppo_post',
        name_ja: '別保の日常窓口',
        subtitle_en: 'Beppo Post Office',
        description:
          '別保郵便局の前を歩き、別保市街地の穏やかな歴史と日常に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic Japanese postbox and sealed travel postcard on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '30年以上続く老舗洋食・ネーベン・フルス',
      subtext: 'ジューシーなハンバーグなど本格洋食で旅を締めくくった',
      badge: {
        code: 'beppo_nebenfluss',
        name_ja: '支流の洋食店',
        subtitle_en: 'Beside the Stream',
        description:
          'ネーベン・フルスで30年以上愛される老舗の本格洋食を味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sizzling hamburger steak plate with rich demi-glace sauce and silver fork on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'beppo_complete',
    name_ja: '別保・桜と炭鉱史の旅人',
    subtitle_en: 'Walker of Beppo Blossoms',
    description:
      'JR別保駅から別保公園、別保神社、別保郵便局、ネーベン・フルスまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting late pink cherry blossoms, a hilltop torii gate, and a classic diner plate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR別保駅',
      lat: 42.994384,
      lng: 144.469596,
      address: '北海道釧路郡釧路町別保4-40-1',
      description:
        '大正6年（1917年）12月1日に「上別保駅」として開業、昭和27年に現駅名へ改称（終日利用可）。昭和戦前期には別保炭鉱の石炭や木材の積出拠点として専用線が敷かれていた。',
      clue:
        '大正六年十二月に「上別保駅」として開業し、かつて別保炭鉱の石炭や木材の積み出し拠点として専用線が延びていた「JR別保駅」から楽しい町歩きを始めよう（終日利用可）。炭鉱の記憶を秘めた静かな無人駅のホームを西方向へと踏み出したら、まずは六百本以上のエゾヤマザクラが植えられた「別保公園（地産地消センター ロ・バザール）」を目指してのんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から西方向へ徒歩約10分',
      f7_fragment: '大正六年「上別保駅」として開業、かつて別保炭鉱の積出拠点だった無人駅。',
      f7_full: '「JR別保駅」を後にし、日本一遅い桜と炭鉱の記憶を巡る別保の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '別保公園（地産地消センター ロ・バザール）',
      lat: 42.994454,
      lng: 144.460083,
      address: '北海道釧路郡釧路町字別保原野南24線78-6',
      description:
        '600本以上のエゾヤマザクラが植えられ「日本一遅い桜まつり」会場として知られる総合公園（公園終日開放、ロ・バザール9:00〜18:00、月曜休）。仙鳳趾産カキ等の特産品も扱う。',
      clue:
        '六百本以上の桜が咲く「別保公園（地産地消センター ロ・バザール）」で広い緑を眺めてゆっくり一息つこう（公園終日開放）。次は北東の「別保神社」へ向かおう。',
      hook: '北東方向へ徒歩約25〜27分',
      f7_fragment: '600本超のエゾヤマザクラと特産品拠点「ロ・バザール」を擁する総合公園。',
      f7_full: '「別保公園（地産地消センター ロ・バザール）」で道東の爽やかな自然に触れた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '別保神社',
      lat: 43.006035,
      lng: 144.47319,
      address: '北海道釧路郡釧路町別保3-30',
      description:
        '大正7年（1918年）、別保市街の発展と産業繁栄を祈願して京都・賀茂別雷神社より御分霊を勧請し創建された鎮守社（境内参拝自由・無休）。駅を見下ろす高台に鎮座する。',
      clue:
        '大正七年に別保市街の発展と産業繁栄を祈願して京都・賀茂別雷神社から御分霊を勧請し創建された歴史ある鎮守社「別保神社」へ丁寧に心を込めて参拝しよう（境内自由）。別保駅周辺を見下ろす静かな高台に鎮座する清らかな境内で静かに手を合わせれば、百年以上前からこのまちを見守り続けてきた神社の温かな気配が胸いっぱいに満ちていく。参拝を終えたら、南南西方向へ坂を下り「別保郵便局」へ向かおう。',
      hook: '高台から南南西方向へ徒歩約21分',
      f7_fragment: '大正七年創建、京都・賀茂別雷神社の御分霊を祀る別保の高台の鎮守社。',
      f7_full: '「別保神社」の高台に参拝し、別保のまちの百年を見守る杜に手を合わせた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '別保郵便局',
      lat: 42.994843,
      lng: 144.468093,
      address: '北海道釧路郡釧路町別保2-6-7',
      description:
        '釧路町役場ほど近くに建つ地域の生活拠点（郵便窓口平日9:00〜17:00、土日祝休）。別保市街地の変遷を郵便・金融面から支え続けてきた。',
      clue:
        '釧路町役場のほど近くに佇み、別保市街地の変遷と人々の暮らしを郵便と金融の面から支え続けてきた「別保郵便局」の前をゆっくり歩いてみよう（平日9:00〜17:00、土日祝休）。落ち着いた街並みの中に溶け込む地域の生活拠点を眺めながら一歩ずつ歩みを進めると、道東の穏やかな日常の温もりがじんわり胸に伝わってくる。街の息吹を感じたら、西へ歩いて老舗洋食「ネーベン・フルス」へと向かおう。',
      hook: '別保2丁目から西方向へ徒歩約5分',
      f7_fragment: '釧路町役場ほど近くで別保市街地の暮らしを支え続けてきた地域の郵便局。',
      f7_full: '「別保郵便局」の前を歩き、別保市街地の穏やかで温かな日常に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'ネーベン・フルス',
      lat: 42.995284,
      lng: 144.465327,
      address: '北海道釧路郡釧路町別保1-8',
      description:
        '釧路町役場近くで30年以上続く老舗洋食レストラン（11:30〜15:00・17:00〜20:00、木曜・第3水曜休）。ドイツ語で「支流」を意味し、ジューシーなハンバーグ等が人気。',
      clue:
        '旅の締めくくりは、釧路町役場の近くで三十年以上も愛され続けている老舗洋食レストラン「ネーベン・フルス」で美味しい食事をゆっくり楽しく味わおう（木曜・第3水曜休）。ドイツ語で「支流」を意味する素敵な店名の通り落ち着いた雰囲気の店内で、ジューシーなハンバーグや丁寧な洋食をいただけば幸せな笑顔が自然と広がっていく。歴史と桜の記憶を胸に抱いて、別保の散歩を晴れやかに明るく結ぼう。',
      hook: '',
      f7_fragment: '釧路町役場近くで30年以上続く、本格ハンバーグが人気の老舗洋食レストラン。',
      f7_full: '「ネーベン・フルス」で老舗の本格洋食を堪能し、別保の散策を締めくくった。',
    },
  ],
};
