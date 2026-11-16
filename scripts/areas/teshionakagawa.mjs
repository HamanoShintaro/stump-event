// scripts/areas/teshionakagawa.mjs
// station_order: 888

export default {
  slug: 'teshionakagawa',
  station_order: 888,
  station: '天塩中川',
  line: 'JR宗谷本線',
  area_name: '天塩中川・木造駅舎と名物豚丼、町営温泉',
  prefecture: '北海道',
  municipality: '中川町',
  category: '昭和駅舎と豚丼温泉',
  budget_tier: 2,
  tags: ['北海道', '中川町', '天塩中川駅', '豚丼', 'ポンピラ'],
  style_genre: 'ink_and_watercolor',
  title: '天塩中川・昭和の駅舎と名物豚丼に町営温泉へ',
  description:
    '昭和の佇まいを残す「JR天塩中川駅」から、地元密着の「Qマート 中川店」、昭和五十二年創業の豚丼名店「居酒屋 十一（とういち）」、温泉とアンモナイト型プールを備える「ポンピラ アクア リズイング」、誉地区の「中川神社」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Teshio-Nakagawa classic wooden railway station, welcoming local market street, savory grilled pork rice bowl on wood counter, relaxing town hot spring lodge, and forest-framed Nakagawa Shrine torii, full bleed, no text, no letters.',
  question: 'かつて「誉平駅」と呼ばれた天塩中川の駅から地元の買い物拠点や豚丼の名店、町営温泉を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '大正十一年に「誉平（ぽんぴら）駅」として開業した昭和佇まいの「JR天塩中川駅」',
      subtext: '中川町交流プラザを兼ねた味わい深い駅舎に、道北の暮らしの温もりを感じた。',
      badge: {
        code: 'teshionakagawa_station',
        name_ja: '天塩中川・誉平の駅旅人',
        subtitle_en: 'Teshio-Nakagawa Station Walker',
        description: '旧名「誉平駅」の歴史を持つJR天塩中川駅を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a nostalgic northern wooden railway station building under crisp sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '昭和五十二年創業、手作りのたれが自慢の豚丼を味わう「居酒屋 十一」',
      subtext: '香ばしく焼き上げた豚肉と秘伝のたれが絡む豚丼の旨さに疲れが吹き飛んだ。',
      badge: {
        code: 'teshionakagawa_toichi',
        name_ja: '天塩中川・秘伝たれの豚丼',
        subtitle_en: 'Butadon Diner Guest of Toichi',
        description: '昭和五十二年創業の居酒屋 十一で名物豚丼を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of glazed charcoal-grilled pork rice bowl topped with green onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '塩化物泉の湯とアンモナイト型プールを備える「ポンピラ アクア リズイング」',
      subtext: '中川町らしいアンモナイト型の造りと、優しい町営温泉の湯に癒された。',
      badge: {
        code: 'teshionakagawa_pompira',
        name_ja: '天塩中川・ポンピラ名湯客',
        subtitle_en: 'Pompira Onsen Guest',
        description: 'ポンピラ アクア リズイングの天然温泉で疲れを癒やした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting warm rising steam over a calm stone hot spring bath beside an ammonite fossil motif, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '国道40号沿いの誉地区に鎮座し町を見守る「中川神社」',
      subtext: '地域の歴史を見守り続けてきた静かな社の佇まいに、旅の心が落ち着いた。',
      badge: {
        code: 'teshionakagawa_shrine',
        name_ja: '天塩中川・誉の杜参拝',
        subtitle_en: 'Sanctuary Visitor of Nakagawa',
        description: '中川町の鎮守・中川神社に参拝して旅の安全を祈った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a dignified wooden Japanese shrine gate framed by tall northern pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'teshionakagawa_master',
    name_ja: '天塩中川・秘伝豚丼と温泉巡り',
    subtitle_en: 'Teshio-Nakagawa Diner & Onsen Master',
    description: 'JR天塩中川駅からQマート中川店、居酒屋十一、ポンピラアクアリズイング、中川神社までを巡った証',
    image_prompt:
      'A circular emblem combining classic wooden railway station, glazed pork rice bowl, steaming hot spring and shrine torii, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR天塩中川駅（中川町交流プラザ）',
      prefecture: '北海道',
      city: '中川町',
      description:
        '1922年（大正11年）11月8日「誉平（ぽんぴら）駅」として開業、1951年現駅名に改称（終日開放・無料、特急一部停車）。昭和の佇まいを残す木造風の駅舎。',
      address: '北海道中川郡中川町字中川537-1',
      lat: 44.811957,
      lng: 142.075068,
      clue:
        '大正十一年に「誉平（ぽんぴら）駅」として開業し、昭和二十六年に現在の駅名へ改められた「JR天塩中川駅（中川町交流プラザ）」から街歩きを始めよう（終日利用可）。今も一部の特急列車が停車し、昭和の懐かしい佇まいを残す温もりあふれる木造風の駅舎をじっくり眺めて後にしたら、まずは歩いて一〜二分の中心街にある地域密着店「Qマート 中川店」を目指してのんびり楽しく歩いてすぐに出掛けよう。',
      surprise: '旧名「誉平駅」の響きと、昭和の面影を色濃く残す駅舎の落ち着いた佇まいが旅情を誘った。',
      hook: 'JR天塩中川駅を出たら、徒歩約二分の「Qマート 中川店」へ向かおう。',
      f7_fragment: '大正十一年「誉平駅」として開業した、昭和の佇まいを残す駅舎。',
      f7_full: '「JR天塩中川駅」に降り立ち、地元の食と町営温泉を巡る街歩きを始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Teshio-Nakagawa Station nostalgic wooden country railway building beneath northern sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'Qマート 中川店',
      prefecture: '北海道',
      city: '中川町',
      description:
        'JR天塩中川駅から徒歩約1〜2分の距離にある西條グループの地域密着型スーパー。9:00〜19:00（日曜は17:00閉店の場合あり）。中川町中心部の暮らしと買出しを支えている。',
      address: '北海道中川郡中川町字中川308',
      lat: 44.81177,
      lng: 142.074047,
      clue:
        '駅近くの「Qマート 中川店」へ寄ろう（9:00〜19:00頃）。地元の暮らしを支える地域密着スーパーで飲み物やおやつを調達したら、名物豚丼の「居酒屋 十一」へ。',
      surprise: '駅から歩いてすぐの商店街に地域の暮らしを支えるスーパーがあり、町の温かな日常を感じられた。',
      hook: 'Qマート 中川店で買い物をしたら、名物豚丼の「居酒屋 十一（とういち）」へ向かおう。',
      f7_fragment: '駅から徒歩二分で町の暮らしと買出しを支える地域密着スーパー。',
      f7_full: '「Qマート 中川店」に立ち寄り、中川町の穏やかな日常の空気に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a friendly small northern town grocery store storefront with fresh local goods and bicycle parked outside, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '居酒屋 十一（とういち）',
      prefecture: '北海道',
      city: '中川町',
      description:
        '昭和52年（1977年）創業の地元密着店。18:00〜23:00（L.O.22:30）、日曜休。半世紀近く継ぎ足され守られてきた手作りのたれが自慢の「豚丼」が町民や旅人に愛される名物。',
      address: '北海道中川郡中川町字中川357-1',
      lat: 44.810995,
      lng: 142.073209,
      clue:
        '昭和五十二年創業、半世紀近く地元で愛され続けてきた「居酒屋 十一（とういち）」で自慢の名物の味に出会おう（18:00〜23:00、日曜休）。店自慢の「豚丼」は、香ばしく焼き上げたジューシーな豚肉に手作りの秘伝たれがたっぷりと絡み、一度味わえば忘れられない極上の絶品だ。お腹も心もすっかり満たされたら、町営の癒し拠点「ポンピラ アクア リズイング」へとゆっくり歩いて向かおう。',
      surprise: '昭和五十二年から続く老舗の気さくな雰囲気と、手作りのたれが香る名物豚丼の美味しさに感激した。',
      hook: '居酒屋 十一で豚丼を堪能したら、温泉施設「ポンピラ アクア リズイング」へ向かおう。',
      f7_fragment: '昭和五十二年創業、手作りのたれが自慢の「豚丼」が名物の地元密着店。',
      f7_full: '「居酒屋 十一」で秘伝のたれが香る名物豚丼を味わい、中川の食の豊かさに唸った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toichi cozy Japanese izakaya counter with a steaming bowl of glazed charcoal-grilled pork donburi, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'ポンピラ アクア リズイング',
      prefecture: '北海道',
      city: '中川町',
      description:
        '塩化物泉の温泉・薬湯やアンモナイト型プールを備える町営温泉施設。日帰り入浴11:00〜20:00受付（21:00閉館）、大人400円・小人200円。館内「レストラン ウェルビー」で発芽蕎麦粉メニューも提供。',
      address: '北海道中川郡中川町字中川439-1',
      lat: 44.801341,
      lng: 142.075525,
      clue:
        '中川町の自慢の町営温泉施設「ポンピラ アクア リズイング」でゆったりと極上の湯浴みを楽しもう（11:00〜20:00受付、大人400円）。ナトリウム-カルシウム塩化物泉の温かな温泉や薬湯に加え、アンモナイトの里ならではのユニークなアンモナイト型プールまで備わるのが実に楽しい。湯上がりで心身ともにすっかりさっぱりと心地よく整ったら、旅の締めくくりに地域の鎮守「中川神社」へ向かおう。',
      surprise: '大人400円で楽しめる塩化物泉の心地よい湯と、アンモナイト型プールという発想のユニークさに和んだ。',
      hook: 'ポンピラ アクア リズイングで疲れを癒したら、誉地区の「中川神社」へ向かおう。',
      f7_fragment: '塩化物泉の湯やアンモナイト型プールを備え、発芽蕎麦も楽しめる町営温泉。',
      f7_full: '「ポンピラ アクア リズイング」の温かい塩化物泉に浸かり、旅の疲れを癒やした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Pompira Aqua Rizing cheerful northern community hot spring spa with rising steam and forested hills, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '中川神社',
      prefecture: '北海道',
      city: '中川町',
      description:
        '国道40号沿いの誉地区に鎮座し、中川町の開拓と暮らしを静かに見守り続けてきた地域の鎮守（終日参拝自由・無料）。清らかな木立に包まれた境内が旅の心を整えてくれる。',
      address: '北海道中川郡中川町字誉67',
      lat: 44.816526,
      lng: 142.058169,
      clue:
        '旅の締めくくりは、国道40号沿いの誉地区に静かに鎮座し、中川町の開拓と暮らしを長年見守り続けてきた地域の総鎮守「中川神社」へゆっくりと参拝しよう（終日自由・無料）。豊かな北国の木立に囲まれた清らかな境内にそっと足を踏み入れれば、先人たちの祈りの歴史が胸に深く響いてくる。静かに手を合わせて旅の無事を心から深く感謝し、天塩中川の穏やかで美しい一日を笑顔で温かく締めくくろう。',
      surprise: '国道40号のほど近くに静かな杜を湛える中川神社の凛とした空気に、旅の終わりが心地よく整った。',
      hook: '',
      f7_fragment: '国道40号沿いの誉地区に鎮座し、中川町の暮らしを見守り続ける鎮守社。',
      f7_full: '「中川神社」の静かな境内で手を合わせ、道北の穏やかな旅を締めくくった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Nakagawa Shrine dignified wooden torii gate and sanctuary nestled in quiet northern trees, no text, no letters.',
    },
  ],
};
