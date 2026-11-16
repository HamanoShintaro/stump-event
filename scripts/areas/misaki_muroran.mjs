export default {
  slug: 'misaki_muroran',
  station_order: 901,
  station: '御崎',
  line: 'JR室蘭支線',
  area_name: '御崎・室蘭線発祥と御前水',
  prefecture: '北海道',
  municipality: '室蘭市',
  category: '鉄道発祥と明治の史跡',
  budget_tier: 2,
  tags: ['北海道', '室蘭市', '御崎駅', '室蘭線発祥', '御前水'],
  style_genre: 'ink_and_watercolor',
  title: '御崎・室蘭線発祥の地と御前水の社',
  description:
    '構内に「室蘭線発祥の地」碑が立つ「JR御崎駅」から、天然酵母の「リアン」、明治天皇ゆかりの「天澤泉」碑を伝える「御傘山神社」、老舗洋菓子店「菓子工房 モンパリ」、室蘭港を望む「御前水公園」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Misaki Muroran from historic railway origin monument station and warm steamed-bread bakery to hilltop Mikasayama Shrine, patisserie shop and Meiji memorial overlook gazing over Muroran harbor, full bleed, no text, no letters.',
  question: '室蘭線発祥の地・御崎駅から明治の御巡幸ゆかりの社や老舗洋菓子店、御前水公園を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '構内に「室蘭線発祥の地」記念碑が立つ「JR御崎駅」',
      subtext: '明治二十五年の貨物取扱所から始まり、室蘭線の歴史の原点に触れることができた。',
      badge: {
        code: 'misaki_muroran_station',
        name_ja: '御崎・室蘭線発祥の旅人',
        subtitle_en: 'Muroran Line Origin Visitor',
        description: '室蘭線発祥の地記念碑が立つJR御崎駅を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a stone railway origin monument beside a quiet coastal train platform, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '道産小麦と天然酵母のもっちり専門店「天然酵母の蒸しパン屋 リアン」',
      subtext: '長時間低温発酵で仕上げた優しい甘みの蒸しパンに心がほっこり温まった。',
      badge: {
        code: 'misaki_muroran_liens',
        name_ja: '御崎・天然酵母蒸しパン',
        subtitle_en: 'Steamed Bread Lover of Lien',
        description: '天然酵母の蒸しパン屋 リアンを訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting fluffy artisan steamed bread buns resting in a bamboo steamer, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '御前水町の地名由来「天澤泉」碑が伝わる「御傘山神社」',
      subtext: '明治四十一年創建の社で、明治天皇御巡幸の清水の物語に触れ背筋が伸びた。',
      badge: {
        code: 'misaki_muroran_mikasayama',
        name_ja: '御崎・天澤泉と御傘山参拝',
        subtitle_en: 'Mikasayama Shrine Visitor',
        description: '天澤泉碑が残る御傘山神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an ancient stone water-spring monument beside a hillside wooden shrine torii, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '明治天皇御野立所蹟碑が立つ高台の「御前水公園」',
      subtext: '明治十四年御巡幸の際と同じく室蘭港を見渡す高台の風景に歴史を感じた。',
      badge: {
        code: 'misaki_muroran_gozensui',
        name_ja: '御崎・御前水高台展望',
        subtitle_en: 'Gozensui Park Overlook Walker',
        description: '御前水公園で明治天皇御野立所蹟と室蘭港を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a historic stone monument on a leafy hilltop park overlooking calm Muroran bay, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'misaki_muroran_master',
    name_ja: '御崎・室蘭線発祥と御前水巡り',
    subtitle_en: 'Misaki Railway Origin & Shrine Master',
    description: 'JR御崎駅からリアン、御傘山神社、菓子工房 モンパリ、御前水公園までを巡った証',
    image_prompt:
      'A circular emblem combining railway origin stone monument, steamed bread, hillside shrine torii and crisp pastry pie, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR御崎駅',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1892年に貨物取扱所が置かれ、1905年6月21日に正式開業した駅（終日開放・無料、1986年無人化）。構内には1958年建立の「室蘭線発祥の地」記念碑が立っている。',
      address: '北海道室蘭市御崎町2-1',
      lat: 42.329178,
      lng: 140.993867,
      clue:
        '明治二十五年に貨物取扱所が置かれた歴史を持ち、構内に昭和三十三年建立の「室蘭線発祥の地」記念碑が静かに立つ「JR御崎駅」から町歩きと散策を始めよう（終日利用可）。北海道の産業と人々の暮らしを支えた鉄道の原点に思いを馳せながら静かな無人駅のホームを後にしたら、まずは港南町にある天然酵母の人気店「天然酵母の蒸しパン屋 リアン」を目指してのんびり楽しく元気に外へ歩き出そう。',
      surprise: '静かな無人駅の構内に「室蘭線発祥の地」記念碑が立ち、北海道鉄道史の重みを肌で感じられた。',
      hook: 'JR御崎駅を出たら、港南町の「天然酵母の蒸しパン屋 リアン」へ向かおう。',
      f7_fragment: '明治二十五年起源、構内に「室蘭線発祥の地」記念碑が立つ歴史ある駅。',
      f7_full: '「JR御崎駅」の室蘭線発祥の地記念碑から、御前水の歴史と菓子を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Misaki Station quiet railway platform with stone Muroran Line origin monument beside tracks, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '天然酵母の蒸しパン屋 リアン',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '道産小麦・てん菜糖・天然酵母で長時間低温発酵させたもっちり蒸しパン専門店（11:30〜17:00、月火休・日曜等不定休あり）。優しい味わいが人気。',
      address: '北海道室蘭市港南町1-19-7',
      lat: 42.334201,
      lng: 140.955783,
      clue:
        '道産小麦と天然酵母で仕上げる「天然酵母の蒸しパン屋 リアン」へ寄ろう（11:30〜17:00、月火休）。もっちり優しい甘さが人気だ。次は「御傘山神社」へ。',
      surprise: '長時間低温発酵の天然酵母で蒸し上げられた、もっちり優しく香ばしい蒸しパンの味わいに癒やされた。',
      hook: 'リアンで蒸しパンを選んだら、御前水町の「御傘山神社」へ向かおう。',
      f7_fragment: '道産小麦と天然酵母の長時間低温発酵で作るもっちり蒸しパン専門店。',
      f7_full: '「天然酵母の蒸しパン屋 リアン」で優しい香りの蒸しパンに出会い、心が和んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Lien cozy neighborhood bakery counter displaying bamboo baskets of fluffy artisan steamed buns, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '御傘山神社',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1908年（明治41年）に日本製鋼所の守り神として創建（終日参拝自由・無料）。境内に1881年明治天皇御巡幸の清水に由来する「天澤泉」碑があり、御前水町の地名の由来となった。',
      address: '北海道室蘭市御前水町1-12-3',
      lat: 42.323422,
      lng: 140.998972,
      clue:
        '明治四十一年に日本製鋼所の守り神として創建され、御前水町の鎮守として長く地域の人々に親しまれてきた「御傘山神社」へ丁寧に参拝しよう（終日自由・無料）。境内には明治十四年の明治天皇御巡幸の際に献じられた清水に由来する「天澤泉」の碑が静かに立ち、御前水という美しい地名のルーツを今に伝えている。歴史に静かに手を合わせたら、すぐ近くの洋菓子店「菓子工房 モンパリ」へと向かおう。',
      surprise: '「御前水」という優雅な地名が明治天皇御巡幸の清水に由来し、その「天澤泉」碑が境内に残っていた。',
      hook: '御傘山神社に参拝したら、すぐ近くの洋菓子店「菓子工房 モンパリ」へ向かおう。',
      f7_fragment: '明治四十一年創建、御前水の地名由来「天澤泉」碑が境内に残る鎮守。',
      f7_full: '「御傘山神社」の天澤泉碑を訪ね、御前水の地名に込められた明治の記憶に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Mikasayama Shrine hillside wooden torii gate and carved Ten-takusen spring monument under evergreen trees, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '菓子工房 モンパリ',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '道産素材のケーキや銘菓「げんこつパイ」で知られる老舗洋菓子店（平日10:00〜18:00・土日祝〜17:30、火曜休・月1回月火連休、テイクアウト営業）。',
      address: '北海道室蘭市御前水町1-13-22',
      lat: 42.322786,
      lng: 140.997089,
      clue:
        '御傘山神社のほど近くで長く愛され続けている地元の老舗洋菓子店「菓子工房 モンパリ」へ立ち寄ろう（10:00〜18:00頃、火曜等休）。北海道産の豊かな素材を活かした彩り美しいケーキとともに、香ばしくサクサクの食感で多くのファンに親しまれる名物銘菓「げんこつパイ」はお土産にもぴったりだ。甘いお菓子の香りに包まれたら、旅の締めくくりに高台の「御前水公園」へとゆっくり歩こう。',
      surprise: '地元で長く親しまれる洋菓子店に並ぶ名物「げんこつパイ」の香ばしさと温かな接客が嬉しかった。',
      hook: '菓子工房 モンパリでお菓子を選んだら、高台の「御前水公園」へ向かおう。',
      f7_fragment: '道産素材のケーキとサクサクの名物銘菓「げんこつパイ」が人気の洋菓子店。',
      f7_full: '「菓子工房 モンパリ」で銘菓げんこつパイを手に入れ、甘い余韻に包まれた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Patisserie Monpari charming local cake shop window displaying crisp golden puff pastries and seasonal fruit tarts, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '御前水公園',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '高台に位置する地域の公園（終日開放・無料）。1881年9月4日に明治天皇が北海道御巡幸の際に休憩し室蘭港を展望されたことを記念する「明治天皇御野立所蹟」碑が立つ。',
      address: '北海道室蘭市御前水町2-2',
      lat: 42.322336,
      lng: 140.998448,
      clue:
        '旅の締めくくりは、御前水町の高台に静かに広がる「御前水公園」へとゆっくり上がってみよう（終日開放・無料）。ここには明治十四年九月に明治天皇が北海道御巡幸の途上で休憩され、美しい室蘭港の風景を展望されたことを伝える「明治天皇御野立所蹟」の碑が今も大切に守られている。往時の歴史を静かに偲びながら穏やかな港の眺めを胸に深く刻み、御崎の歴史散歩を静かに心豊かに晴れやかに結ぼう。',
      surprise: '明治天皇が室蘭港を望まれた「明治天皇御野立所蹟」碑が、地域の静かな高台公園に今も残されていた。',
      hook: '',
      f7_fragment: '明治十四年の明治天皇御巡幸を記念する「御野立所蹟」碑が立つ高台公園。',
      f7_full: '「御前水公園」の記念碑の前から室蘭港を望み、明治の足跡を辿る旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Gozensui Park quiet hillside memorial stone overlooking calm blue Muroran harbor under soft afternoon clouds, no text, no letters.',
    },
  ],
};
