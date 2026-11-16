export default {
  slug: 'ashibetsu',
  station_order: 934,
  station: '芦別',
  line: 'JR根室本線',
  area_name: '芦別・星の降る里',
  prefecture: '北海道',
  municipality: '芦別市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '木造駅舎', 'ガタタン', '蘆別神社', '道の駅'],
  style_genre: 'ink_and_watercolor',
  title: '星の降る里の歴史と名物に触れる芦別路',
  description:
    'レトロな木造駅舎が残るJR芦別駅から山小屋風喫茶、蘆別神社、名物ガタタンの道の駅、空知川を渡る旭ヶ丘公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Ashibetsu in Hokkaido, featuring a charming 1947 wooden train station, an ancient yew tree at a Shinto shrine, a steaming bowl of gatatan noodle soup, and a bridge crossing the Sorachi River toward lush green hills, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び芦別を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '山小屋風の老舗喫茶で味わったレトロなひととき',
      subtext: '駅前の山小屋風喫茶で、レトロな空気と温かな一皿を楽しんだ',
      badge: {
        code: 'ashibetsu_yufure',
        name_ja: '友歩嶺の喫茶旅人',
        subtitle_en: 'Lodge Cafe Traveler',
        description:
          'JR芦別駅至近の山小屋風老舗喫茶・友歩嶺で、懐かしい空気と料理を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a rustic timber lodge window and a warm curry plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '樹齢百年のイチイが見守る蘆別神社での参拝',
      subtext: '境内でまちの歴史を見つめ続けてきたイチイの古木に出会った',
      badge: {
        code: 'ashibetsu_shrine',
        name_ja: '古木を仰ぐ参拝者',
        subtitle_en: 'Visitor of the Ancient Yew',
        description:
          '芦別市の総鎮守・蘆別神社を参拝し、樹齢百年近いイチイの古木に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a venerable Japanese yew tree and vermilion-tinted shrine eaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '道の駅で出会った名物ガタタンと星の里の恵み',
      subtext: '道の駅スタープラザ芦別で名物ガタタンや特産品に触れた',
      badge: {
        code: 'ashibetsu_gatatan',
        name_ja: '星の里の美食家',
        subtitle_en: 'Starry Town Gourmet',
        description:
          '道の駅スタープラザ芦別で芦別名物「ガタタン」や星の降る里の特産品を味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a generous porcelain bowl of savory gatatan soup under twinkling stars on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '空知川を渡った先に広がる旭ヶ丘の自然風景',
      subtext: '星の降る里大橋を渡り、自然豊かな公園の空気を満喫した',
      badge: {
        code: 'ashibetsu_asahigaoka',
        name_ja: '旭ヶ丘の展望者',
        subtitle_en: 'Gazer of Asahigaoka',
        description:
          '空知川に架かる橋を渡り、自然豊かな旭ヶ丘公園から芦別の街と空を望んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a graceful river bridge leading to green forested hills on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'ashibetsu_complete',
    name_ja: '芦別・星の降る里の探訪者',
    subtitle_en: 'Explorer of Ashibetsu Starry Town',
    description:
      'JR芦別駅から喫茶友歩嶺、蘆別神社、道の駅スタープラザ芦別、旭ヶ丘公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a 1947 wooden station, ancient yew tree, and starry night sky over Sorachi River on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR芦別駅',
      lat: 43.516636,
      lng: 142.184543,
      address: '北海道芦別市本町1018-2',
      description:
        '大正2年（1913年）11月10日に「下芦別駅」として開業、昭和21年に現駅名へ改称（駅舎開放時間利用可）。昭和22年頃建造のレトロな木造駅舎が今も現役で使われている。',
      clue:
        '大正二年十一月に開業し、昭和二十二年頃建造の温もりある木造駅舎が今も現役で旅人を迎える「JR芦別駅」から楽しい街歩きと散策を始めよう（駅舎開放時間利用可）。かつて三井芦別鉄道も乗り入れた歴史ある駅舎をゆっくり後にして外へ出たら、まずは駅から東へ歩いて約二分の山小屋風老舗「喫茶 友歩嶺（ゆうふれ）」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に歩き出そう。',
      hook: '駅前から東方向へ徒歩約2分',
      f7_fragment: '昭和二十二年頃建造のレトロな木造駅舎が今も現役で残る星の降る里の玄関口。',
      f7_full: '「JR芦別駅」の懐かしい木造駅舎を後にし、星の降る里の街歩きを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '喫茶 友歩嶺（ゆうふれ）',
      lat: 43.516739,
      lng: 142.185657,
      address: '北海道芦別市北1条西1-2-2',
      description:
        'JR芦別駅至近の山小屋風レトロな老舗喫茶店（11:00〜20:00頃、不定休）。スパイスカレーや手作りピザ、オムライスなどが地元の人々にも愛されている。',
      clue:
        '駅至近の山小屋風レトロ喫茶「喫茶 友歩嶺（ゆうふれ）」で落ち着いた時間を過ごそう（11:00〜20:00頃）。一息ついたら北の「蘆別神社（芦別神社）」へ向かおう。',
      hook: '北1条西から北方向へ徒歩約10分',
      f7_fragment: 'JR芦別駅近くでレトロな山小屋風の佇まいを残す老舗喫茶店。',
      f7_full: '「喫茶 友歩嶺（ゆうふれ）」の温かい山小屋空間で寛ぎ、散策の元気を養った。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '蘆別神社（芦別神社）',
      lat: 43.523137,
      lng: 142.184586,
      address: '北海道芦別市北3条西1-6-10',
      description:
        '芦別市中心部に鎮座する歴史ある地域の総鎮守（参拝自由）。境内にはまちの歴史を見守り続けてきた樹齢100年近いイチイの古木が立っている。',
      clue:
        '芦別市中心部に鎮座する歴史ある総鎮守「蘆別神社（芦別神社）」へ丁寧に心を込めてゆっくりと爽やかに参拝しよう（参拝自由）。澄んだ空気に包まれた静かな境内には樹齢百年近い見事なイチイの古木が堂々と立っており、炭鉱と林業で栄えた時代の移り変わりを静かに見守り続けてきた風格をたっぷりと感じさせる。古木に手を合わせて心を整えたら、北東の「道の駅スタープラザ芦別」へと楽しく向かおう。',
      hook: '北3条西から北東方向へ徒歩約8分',
      f7_fragment: '樹齢百年近いイチイの古木が境内に立つ芦別市中心部の総鎮守。',
      f7_full: '「蘆別神社（芦別神社）」の樹齢百年近いイチイを仰ぎ、清らかな気持ちで参拝した。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '道の駅スタープラザ芦別',
      lat: 43.524804,
      lng: 142.18932,
      address: '北海道芦別市北4条東1-1',
      description:
        '特産品売店や観光案内所が入る道の駅（売店9:00〜・2Fレストラン11:00〜、年末年始休）。芦別名物の具だくさんあんかけ麺「ガタタン」が味わえ、隣接の百年記念館も人気。',
      clue:
        '地域の特産品やお土産が勢揃いする人気拠点「道の駅スタープラザ芦別」へ楽しく元気に笑顔で立ち寄ろう（売店9:00〜・レストラン11:00〜、年末年始休）。二階の展望レストラン「ラ・フルール」では芦別名物の具だくさんあんかけ麺「ガタタン」を味わえ、すぐ隣には炭鉱の歴史や美しい星空展示が楽しめる百年記念館もある。星の里の恵みを満喫したら、南東の「旭ヶ丘公園」へと楽しく向かおう。',
      hook: '星の降る里大橋を渡り南東方向へ徒歩約16分',
      f7_fragment: '芦別名物のあんかけ麺「ガタタン」や星の降る里の特産品が揃う道の駅。',
      f7_full: '「道の駅スタープラザ芦別」で名物ガタタンと特産品に出会い、大満足の時間を過ごした。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '旭ヶ丘公園',
      lat: 43.519092,
      lng: 142.202331,
      address: '北海道芦別市旭町641',
      description:
        '空知川に架かる「星の降る里大橋」を渡った先に広がる自然豊かな総合公園（4/15〜10/31開園・冬期休園）。展望台や動物の飼育エリアを備え、芦別の自然と街並みを一望できる。',
      clue:
        '旅の締めくくりは、空知川に架かる「星の降る里大橋」を渡った先に広がる自然豊かな総合公園「旭ヶ丘公園」をゆっくり楽しく爽やかに歩こう（散策自由）。園内の見晴らしの良い高台にある展望台からは芦別の街並みと豊かな山々をぐるりと一望でき、四季折々の爽やかな風が心地よく頬を撫でていく。歴史ある木造駅舎から星の里の恵みまで巡った充実の一日を、晴れやかな笑顔で心地よく締めくくろう。',
      hook: '',
      f7_fragment: '空知川を渡った先に広がり、展望台から芦別の街と山々を望む総合公園。',
      f7_full: '「旭ヶ丘公園」の爽やかな風の中で街並みを一望し、芦別の旅を心地よく終えた。',
    },
  ],
};
