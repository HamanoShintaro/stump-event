export default {
  slug: 'kamifurano',
  station_order: 984,
  station: '上富良野',
  line: 'JR富良野線',
  area_name: '上富良野中町・宮町',
  prefecture: '北海道',
  municipality: '上富良野町',
  category: 'グルメ・絶景',
  budget_tier: 2,
  tags: ['富良野線', 'ラベンダー発祥', '豚サガリ', '日の出公園', '上富良野神社'],
  style_genre: 'ink_and_watercolor',
  title: '上富良野の商店街と日の出の丘を巡る',
  description:
    'JR上富良野駅から老舗の第一食堂、名物豚サガリの多田精肉店、上富良野神社を経てラベンダー香る日の出公園へ登る王道ルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Kamifurano Station overlooking the Tokachidake mountain range, a nostalgic Showa-era pork diner, a local Shinto shrine, and rolling purple lavender hills with a white hilltop bell at Hinode Park, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び上富良野を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '60年以上愛される老舗の第一食堂',
      subtext: '上富良野産ポークを使った名物豚玉丼で元気を養った',
      badge: {
        code: 'kamifurano_daiichi',
        name_ja: '中町の老舗食堂',
        subtitle_en: 'Daiichi Shokudo Bowl',
        description:
          '第一食堂で60年以上愛される上富良野産ポークの豚玉丼や温かい食事を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hearty ceramic bowl of glazed pork and egg donburi beside wooden chopsticks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '上富良野豚サガリの名店 多田精肉店',
      subtext: 'ご当地グルメの味付けサガリや昼限定弁当に心惹かれた',
      badge: {
        code: 'kamifurano_tada',
        name_ja: '名物豚サガリ',
        subtitle_en: 'Kamifurano Butasagari',
        description:
          '多田精肉店を訪れ、上富良野のご当地グルメ・豚サガリの魅力に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of savory seasoned pork cuts and a warm wooden bento box in a traditional butcher shop on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'ホップの神酒を供える上富良野神社',
      subtext: '明治期創祀の町の総鎮守で旅の安全を祈願した',
      badge: {
        code: 'kamifurano_shrine',
        name_ja: 'ホップとサウナの社',
        subtitle_en: 'Kamifurano Shrine',
        description:
          '上富良野神社に参拝し、特産ホップのお神酒など町ならではの信仰に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a Shinto torii gate beside green hop cones and a wooden sacred ladle on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '紫の絨毯と十勝岳を望む日の出公園',
      subtext: 'ラベンダー発祥の地の小高い丘で愛の鐘と絶景に癒やされた',
      badge: {
        code: 'kamifurano_hinode_park',
        name_ja: '日の出のラベンダー',
        subtitle_en: 'Hinode Lavender Hill',
        description:
          '日の出公園（日の出公園ラベンダー園）を訪れ、紫の丘と十勝岳連峰を一望したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of purple lavender rows sweeping up a hill toward a white wedding bell and snow-capped mountains on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kamifurano_complete',
    name_ja: '上富良野・ラベンダーと丘の旅人',
    subtitle_en: 'Explorer of Kamifurano Lavender',
    description:
      'JR上富良野駅から第一食堂、多田精肉店、上富良野神社、日の出公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting blooming purple lavender hills, a steaming pork bowl, and Mount Tokachidake on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR上富良野駅',
      lat: 43.463919,
      lng: 142.469013,
      address: '北海道空知郡上富良野町中町1-1-28',
      description:
        '十勝岳の麓、ラベンダーと豚サガリの町・上富良野の玄関口（駅舎開放は営業時間帯に準ずる）。駅前からは市街地越しに雄大な十勝岳連峰を仰ぎ見ることができる。',
      clue:
        '十勝岳の麓に広がり、日本におけるラベンダー栽培発祥の地・そして豚サガリの町として親しまれる「JR上富良野駅」から商店街＆絶景散策を始めよう（日中開放）。駅前から市街地越しに雄大な十勝岳連峰を仰ぎ見て南西方向へと外へ踏み出したら、まずは地元で六十年以上愛される老舗大衆食堂「第一食堂」を目指して、富良野盆地の爽やかな空気と町の温かな息吹を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から南西方向へ徒歩約2分',
      f7_fragment: 'ラベンダーと豚サガリの町・上富良野の玄関口で、十勝岳連峰を望む駅。',
      f7_full: '「JR上富良野駅」を後にし、商店街の名物グルメと日の出の丘を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '第一食堂',
      lat: 43.463053,
      lng: 142.467682,
      address: '北海道空知郡上富良野町中町1-4-4',
      description:
        '地元で60年以上愛される老舗の大衆食堂（11:00〜19:00、無休・臨時休業の場合あり）。上富良野産ポークを使った名物「豚玉丼」やラーメン、ボリューム満点の定食が人気。',
      clue:
        '老舗大衆食堂「第一食堂」で上富良野産ポークの名物・豚玉丼や温かい食事をゆっくり味わおう（無休）。お腹を満たしたら北西方向にある「多田精肉店」へ向かおう。',
      hook: '北西方向へ徒歩約2分',
      f7_fragment: '60年以上地元で愛され、上富良野産ポークの「豚玉丼」が人気の老舗大衆食堂。',
      f7_full: '「第一食堂」で昭和の温もり感じる名物豚玉丼を味わい、元気いっぱいになった。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '多田精肉店',
      lat: 43.463668,
      lng: 142.466688,
      address: '北海道空知郡上富良野町中町2-4-11',
      description:
        'ご当地グルメ「上富良野豚サガリ」の名店として知られる精肉店（月〜土10:00〜18:00・日〜15:00、無休・元日等除く）。お土産用の味付け肉や昼限定の駅前弁当が人気。',
      clue:
        'ご当地グルメとして全国的にも注目されている「上富良野豚サガリ」の名店「多田精肉店」へ立ち寄ってみよう（10:00〜18:00・日〜15:00、元日等休）。お土産にも嬉しい秘伝ダレの味付けサガリや、お昼時限定のボリューム満点「駅前弁当」など魅力的な品々がずらりと並んでいる。中町の商店街の活気を肌で感じたら、南東方向へ歩いて町の総鎮守「上富良野神社」へとゆっくり歩を進めよう。',
      hook: '南東方向へ徒歩約12分',
      f7_fragment: 'ご当地グルメ「上富良野豚サガリ」の味付け肉や駅前弁当が人気の名店。',
      f7_full: '「多田精肉店」で名物・上富良野豚サガリの賑わいに触れ、お土産選びを楽しんだ。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '上富良野神社',
      lat: 43.457249,
      lng: 142.47423,
      address: '北海道空知郡上富良野町宮町1-4-26',
      description:
        '明治期から続く町の総鎮守（参拝自由・年中無休）。町特産のホップを使ったビールをお神酒として供えるユニークな風習や、サウナにちなんだお守りで知られる。',
      clue:
        '明治期から上富良野の暮らしを見守り続けてきた町の総鎮守「上富良野神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。こちらのお社は町特産のホップを使ったビールをお神酒としてお供えするユニークな風習や、サウナにちなんだお守りでも親しまれている楽しい鎮守だ。清らかな境内で旅の安全を深く祈ったら、東〜北東の小高い丘「日の出公園（日の出公園ラベンダー園）」へと楽しく向かおう。',
      hook: '北東方向へ徒歩約15分',
      f7_fragment: '特産ホップのビールをお神酒として供える風習でも知られる上富良野の総鎮守。',
      f7_full: '「上富良野神社」の境内に参拝し、ホップの里ならではのユニークな信仰に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '日の出公園（日の出公園ラベンダー園）',
      lat: 43.46393,
      lng: 142.481661,
      address: '北海道空知郡上富良野町東1線北27',
      description:
        '日本で最初にラベンダーの本格栽培が始まった歴史ある小高い丘の公園（散策自由・年中無休、管理棟等季節運営）。展望台や「愛の鐘」、ベンチから十勝岳連峰を一望できる。',
      clue:
        '旅の締めくくりは、日本で最初にラベンダーの本格栽培が始まった歴史ある丘「日の出公園（日の出公園ラベンダー園）」のベンチでゆったりと休憩しよう（散策自由）。展望台や白い「愛の鐘」が立つ丘の上からは、夏を彩る紫の絨毯と雄大な十勝岳連峰を一望する圧巻の絶景が目の前に広がっている。爽やかな富良野盆地の風を胸いっぱいに感じて、上富良野の王道散歩を晴れやかな笑顔で明るく楽しく結ぼう。',
      hook: '',
      f7_fragment: '日本初の本格ラベンダー栽培地にあり、愛の鐘と十勝岳連峰を一望する丘の公園。',
      f7_full: '「日の出公園」の丘から十勝岳連峰を望み、上富良野の豊かな散歩を終えた。',
    },
  ],
};
