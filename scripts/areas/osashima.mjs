// scripts/areas/osashima.mjs
// station_order: 886

export default {
  slug: 'osashima',
  station_order: 886,
  station: '筬島',
  line: 'JR宗谷本線',
  area_name: '筬島・砂澤ビッキのアトリエと北海道命名の地',
  prefecture: '北海道',
  municipality: '音威子府村',
  category: '彫刻と北海道命名の地',
  budget_tier: 2,
  tags: ['北海道', '音威子府村', '筬島駅', '砂澤ビッキ', '北海道命名之地'],
  style_genre: 'ink_and_watercolor',
  title: '筬島・砂澤ビッキの美術館と北海道命名の地へ',
  description:
    '車掌車改造のダルマ駅舎が迎える「JR筬島駅」から、旧筬島小学校活用の「エコミュージアムおさしまセンター BIKKYアトリエ3モア」、館内の喫茶「いないいないばぁー」、天塩川の「筬島大橋」、松浦武四郎ゆかりの「北海道命名之地碑」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Osashima small repurposed caboose railway station, preserved wooden schoolhouse art museum displaying monumental timber sculptures, cozy retro tea room, river bridge, and riverside stone monument, full bleed, no text, no letters.',
  question: '宗谷本線の無人駅・筬島から彫刻家・砂澤ビッキのアトリエや北海道命名の地の碑を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '車掌車改造のダルマ駅舎を村が守り続ける「JR筬島駅」',
      subtext: '住民や村に愛される「みんなの駅」の温かい佇まいに旅の心が躍った。',
      badge: {
        code: 'osashima_station',
        name_ja: '筬島・みんなのダルマ駅',
        subtitle_en: 'Caboose Station Traveler of Osashima',
        description: '村が維持管理するダルマ駅舎のJR筬島駅を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a charming repurposed railway caboose station hut amidst lush green northern hills, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '旧筬島小学校の木造校舎に残る「エコミュージアムおさしまセンター BIKKYアトリエ3モア」',
      subtext: '廃校の木造校舎に息づく砂澤ビッキの力強い木彫作品群に圧倒された。',
      badge: {
        code: 'osashima_bikky',
        name_ja: '筬島・ビッキ木彫の聖地',
        subtitle_en: 'Bikky Atelier Admirer',
        description: '砂澤ビッキの晩年のアトリエ・BIKKYアトリエ3モアを訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a warm wooden schoolhouse gallery featuring an expressive carved northern timber sculpture, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: 'かつて札幌・すすきのにあったバーを館内に再現した喫茶「いないいないばぁー」',
      subtext: '美術館の木造校舎の一室に再現された不思議な喫茶空間でほっと一息つけた。',
      badge: {
        code: 'osashima_cafe',
        name_ja: '筬島・アトリエの珈琲時間',
        subtitle_en: 'Atelier Tearoom Guest',
        description: 'BIKKYアトリエ3モア館内の喫茶「いないいないばぁー」で寛いだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming cup of roasted soba tea and coffee on a dark polished wooden bar counter inside a historic timber room, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '松浦武四郎が「北加伊道」から命名の発想を得た「北海道命名之地碑」',
      subtext: '幕末にアイヌの古老との対話から「北海道」の名が生まれた地に立ち感動した。',
      badge: {
        code: 'osashima_naming',
        name_ja: '筬島・北海道命名の証人',
        subtitle_en: 'Hokkaido Naming Site Witness',
        description: '松浦武四郎ゆかりの「北海道命名之地」碑を天塩川畔に訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a grand carved stone monument beside the flowing Teshio River surrounded by lush northern woodland, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'osashima_master',
    name_ja: '筬島・ビッキの森と命名の地巡り',
    subtitle_en: 'Osashima Art & Origin Master',
    description: 'JR筬島駅からBIKKYアトリエ3モア、いないいないばぁー、筬島大橋、北海道命名之地碑までを巡った証',
    image_prompt:
      'A circular emblem combining caboose station, wooden sculpture, river bridge and Hokkaido Naming monument, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR筬島駅',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '1922年11月8日開業（終日開放・無料）。1984年の無人化後に車掌車改造のダルマ駅舎となり、現在は音威子府村が「みんなの駅」として大切に維持管理している。',
      address: '北海道中川郡音威子府村字物満内176-38',
      lat: 44.738856,
      lng: 142.197767,
      clue:
        '大正十一年に国鉄天塩線の駅として開業し、今は車掌車を改造した可愛らしいダルマ駅舎が音威子府村によって「みんなの駅」として大切に守られている「JR筬島駅」から散策を始めよう（終日利用可）。深い山あいの清らかな空気を胸いっぱいに吸い込んで小さな無人ホームを後にしたら、まずは歩いてわずか一〜二分の距離にある旧木造校舎「BIKKYアトリエ3モア」を目指してのんびりと歩いて向かおう。',
      surprise: '車掌車を改造した味わい深いダルマ駅舎が、地域に大切に守られている姿に温かな気持ちになった。',
      hook: 'JR筬島駅を出たら、徒歩約二分の「BIKKYアトリエ3モア（砂澤ビッキ記念館）」へ向かおう。',
      f7_fragment: '車掌車改造のダルマ駅舎を村が「みんなの駅」として守り続ける無人駅。',
      f7_full: '「JR筬島駅」のダルマ駅舎に降り立ち、芸術と歴史の地を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Osashima Station charming repurposed caboose hut depot surrounded by deep northern forest hills, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: 'BIKKYアトリエ3モア（砂澤ビッキ記念館）',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '1978年廃校の旧筬島小学校木造校舎を活用した記念館。4月下旬〜10月31日開館（9:30〜16:30、月曜休※祝翌日、冬期休館）、高校生以上300円・中学生以下無料。彫刻家・砂澤ビッキ晩年のアトリエ。',
      address: '北海道中川郡音威子府村字物満内55',
      lat: 44.737454,
      lng: 142.196219,
      clue:
        '旧筬島小学校の木造校舎を残す「BIKKYアトリエ3モア」へ入ろう（4〜10月9:30〜16:30、月曜休、300円）。彫刻家・砂澤ビッキ晩年の力強い木彫が並ぶ。館内喫茶へ。',
      surprise: '廃校の木造校舎という温かな空間の中で、砂澤ビッキの生命力あふれる木彫作品に向き合えた。',
      hook: 'アトリエで木彫作品を鑑賞したら、館内の喫茶「いないいないばぁー」で一息つこう。',
      f7_fragment: '旧筬島小学校の木造校舎に、彫刻家・砂澤ビッキの晩年の作品を残す記念館。',
      f7_full: '「BIKKYアトリエ3モア」の木造校舎で、砂澤ビッキの迫力ある木彫作品に感動した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of BIKKY Atelier 3 More nostalgic wooden rural schoolhouse gallery filled with tall carved timber sculptures, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: '喫茶「いないいないばぁー」',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        'BIKKYアトリエ3モア館内にある喫茶スペース。4月下旬〜10月31日営業（9:30〜16:30、月曜休※施設に準ずる）。札幌・すすきのにあった同名のバーを再現し、珈琲や地元そば茶を提供（喫茶のみ入館無料）。',
      address: '北海道中川郡音威子府村字物満内55',
      lat: 44.737564,
      lng: 142.196148,
      clue:
        'アトリエ館内に佇む個性的な喫茶「いないいないばぁー」でほっと一息つこう（4〜10月9:30〜16:30、月曜休）。実はかつて札幌・すすきのにあった同名のバーを木造校舎の一室に見事に再現した空間で、香り高い珈琲や地元産のそば茶を味わいながら静かな芸術の余韻にゆったり浸れるのがとても素敵だ。心温まる休息を終えたら、外へ出て天塩川に架かる「筬島大橋」へとゆっくり歩いて向かおう。',
      surprise: '廃校の木造美術館の中にすすきののバーを再現した喫茶があるという、遊び心と居心地の良さに和んだ。',
      hook: 'いないいないばぁーで寛いだら、天塩川に架かる「筬島大橋」へ向かおう。',
      f7_fragment: 'すすきのにあったバーを木造校舎に再現したアトリエ内の喫茶スペース。',
      f7_full: '喫茶「いないいないばぁー」で珈琲とそば茶をいただき、芸術の余韻を味わった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a cozy artistic wooden bar-cafe corner inside an old schoolhouse serving hot coffee and soba tea, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '筬島大橋',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '天塩川（音威子府渓谷）に架かり、筬島集落・駅側と国道40号側を結ぶ橋（終日通行可・無料）。四季折々の山々と大河・天塩川の渓谷美を橋上から望める。',
      address: '北海道中川郡音威子府村字物満内1',
      lat: 44.733903,
      lng: 142.197031,
      clue:
        '天塩川の音威子府渓谷に架かり、筬島の集落と国道40号とを結んでいる「筬島大橋」をのんびり歩いて渡ってみよう（通行自由・無料）。橋の上からは深い山々の豊かな緑を映して悠々と流れる天塩川の清らかな渓谷美を一望でき、季節ごとに鮮やかに表情を変える北の大自然のスケールに思わず見惚れてしまう。渓谷の爽やかな風を肌にしっかり感じたら、最後は川沿いの「北海道命名之地」碑へと向かおう。',
      surprise: '音威子府渓谷の深い緑と大河・天塩川が織りなす橋上の眺めが、実に雄大で清々しかった。',
      hook: '筬島大橋を渡って国道側へ出たら、松浦武四郎「北海道命名之地」碑へ向かおう。',
      f7_fragment: '音威子府渓谷の天塩川に架かり、筬島集落と国道40号を結ぶ景勝の大橋。',
      f7_full: '「筬島大橋」の上から音威子府渓谷と天塩川の雄大な流れを眺め、深呼吸した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Osashima Ohashi bridge arching across the scenic Teshio River gorge framed by steep forested slopes, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '松浦武四郎「北海道命名之地」碑',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '幕末の探検家・松浦武四郎が天塩川調査の際、この地でアイヌの古老から「カイナー」の意味を教わり「北加伊道」→「北海道」命名の発想を得た由来を伝える碑（見学自由・無料、冬期積雪時は入口通行止め）。',
      address: '北海道中川郡音威子府村字物満内2',
      lat: 44.741111,
      lng: 142.183571,
      clue:
        '旅の締めくくりは、天塩川河畔に佇む歴史的な「北海道命名之地」碑をじっくり訪ねよう（見学自由・無料、冬期積雪注意）。幕末の探検家・松浦武四郎がこの地を調査した際、アイヌの古老から土地の人を指す「カイナー」の意味を教わり、そこから「北加伊道」ひいては「北海道」という名の着想を得た貴重な由来を今も伝えている。名誕生の原点に立ち、筬島の深い旅をいつでも心に深く刻み静かに結ぼう。',
      surprise: '現在の「北海道」という名前が、この筬島での松浦武四郎とアイヌの古老の対話から生まれたと知り感動した。',
      hook: '',
      f7_fragment: '松浦武四郎がアイヌの古老との対話から「北海道」命名の着想を得た史跡碑。',
      f7_full: '「北海道命名之地」碑の前に立ち、北海道という名が生まれた歴史の瞬間に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hokkaido Naming Monument stone stele standing in a quiet green clearing beside the flowing Teshio River, no text, no letters.',
    },
  ],
};
