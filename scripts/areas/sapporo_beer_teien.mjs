export default {
  slug: 'sapporo_beer_teien',
  station_order: 921,
  station: 'サッポロビール庭園',
  line: 'JR千歳線',
  area_name: '戸磯・えこりん村',
  prefecture: '北海道',
  municipality: '恵庭市',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['千歳線', 'ビール庭園', '彫刻公園', 'カフェ', 'えこりん村'],
  style_genre: 'ink_and_watercolor',
  title: 'サッポロビール庭園・潤いの森と牧場の恵み',
  description:
    '工場の緑豊かな庭園から川辺の彫刻公園とカフェ、さらに自然体験のえこりん村へと続く恵庭の散策ルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Sapporo Beer Teien area in Eniwa, Hokkaido, featuring a small train station, red-brick brewery chimneys amidst lush green trees, a peaceful riverside sculpture path, and a wooden eco-farm greenhouse, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '恵庭の自然と恵みを巡る道で、どの場所に心惹かれましたか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '緑の庭園と赤れんがの雰囲気漂うビール工場',
      subtext: '工場直送の鮮度と、美しい庭園の散策に心が躍った',
      badge: {
        code: 'beer_teien_star',
        name_ja: '北星庭園の鑑賞者',
        subtitle_en: 'Admirer of Northern Star Garden',
        description:
          'サッポロビール北海道工場の緑豊かな庭園を歩き、伝統の醸造文化に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a golden five-pointed star and green hop vines on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '川辺の森のそばで淹れたて珈琲を味わうカフェ時間',
      subtext: '優しいランチと香ばしい珈琲に、歩みの疲れがほどけた',
      badge: {
        code: 'beer_teien_fukuza',
        name_ja: '川辺喫茶の休息者',
        subtitle_en: 'Guest of Riverside Cafe',
        description:
          'ユカンボシ川沿いに佇むcafe福座で、こだわりの珈琲と優しい食事を楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hand-crafted coffee cup beside gentle river reeds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '清流のせせらぎと屋外彫刻が調和する河畔公園',
      subtext: '水辺の緑とアートが溶け合う静かな散歩道に癒やされた',
      badge: {
        code: 'beer_teien_yukanboshi',
        name_ja: '清流彫刻の散歩者',
        subtitle_en: 'Stroller of River Sculptures',
        description:
          'ユカンボシ川河畔公園の遊歩道を巡り、清流と屋外彫刻が織りなす景観を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an abstract stone sculpture beside a flowing stream and willow leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'とまとの森の生命力に出会う自然豊かなえこりん村',
      subtext: '枝を広げる巨木トマトと豊かな自然の恵みに驚かされた',
      badge: {
        code: 'beer_teien_ecorinvillage',
        name_ja: '恵庭緑園の体験者',
        subtitle_en: 'Explorer of Eco Village',
        description:
          'えこりん村を訪れ、とまとの森や自然と共生する空間の豊かさに触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a giant tomato vine canopy filled with bright red fruits on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'sapporo_beer_teien_complete',
    name_ja: 'ビール庭園・森と牧場の旅人',
    subtitle_en: 'Traveler of Beer Garden and Eco Village',
    description:
      'JRサッポロビール庭園駅から工場庭園、川辺のカフェと彫刻公園、えこりん村まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting hop leaves, a flowing stream, and rich red harvest on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JRサッポロビール庭園駅',
      lat: 42.8675,
      lng: 141.6048,
      address: '北海道恵庭市戸磯593-4',
      description:
        '平成2年（1990年）7月1日、サッポロビール北海道工場の開業に合わせて新設されたJR千歳線の駅（終日利用可・無料）。広大な緑地帯の玄関口となっている。',
      clue:
        '平成二年七月に工場の開業に合わせて誕生した個性的な駅名の玄関口「JRサッポロビール庭園駅」から楽しい街歩きと散策を始めよう（終日利用可）。緑豊かな道央の爽やかな風とどこまでも広い青空を感じながらホームをゆっくり降りて西側の出口へと外に出たら、まずは駅のすぐ南西に広大な敷地を構える「サッポロビール北海道工場」を目指してのんびり楽しく元気に笑顔で外へと力強く爽やかに歩き出そう。',
      hook: '西側出口から南西方向へ徒歩約7〜10分',
      f7_fragment: '平成二年、工場の開業に合わせて誕生したユニークな駅名のJR千歳線の駅。',
      f7_full: '「JRサッポロビール庭園駅」を後にし、緑と恵みあふれる恵庭の散策へ踏み出した。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: 'サッポロビール北海道工場',
      lat: 42.861804,
      lng: 141.602999,
      address: '北海道恵庭市戸磯542-1',
      description:
        'ガイド付き「サッポロ クラシック☆ツアー」（要予約、大人1,000円等、月・火曜休）で工場直送の生ビール試飲が楽しめるほか、美しい庭園やレストラン「ヴァルハラ」（火曜休）を併設。',
      clue:
        '緑の庭園が広がる「サッポロビール北海道工場」で伝統の醸造文化と北の大地の恵みに触れよう（見学は月火休等）。見学後は北西の川辺にある「cafe福座」へと向かおう。',
      hook: '戸磯から北西の恵南エリアへ徒歩約20分',
      f7_fragment: 'クラシックの工場見学や美しい庭園、レストランを備える恵庭の名所。',
      f7_full: '「サッポロビール北海道工場」の広大な庭園を歩き、北のビール造りの歴史に触れた。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'cafe福座',
      lat: 42.869011,
      lng: 141.585884,
      address: '北海道恵庭市恵南6-12',
      description:
        'ユカンボシ川河畔公園のすぐそばに佇む人気カフェ（10:00〜17:00・ランチ11:00〜15:00、第1月曜ほか不定休）。こだわりの焙煎珈琲や体に優しい食事、手作りスイーツが味わえる。',
      clue:
        '緑豊かな川辺のすぐそばに佇む落ち着いた雰囲気の「cafe福座」でほっと一息つく心地よい休憩時間を過ごそう（10:00〜17:00、第1月曜等休）。丁寧に淹れられた香り高いこだわりの珈琲や体に優しい手作りのランチやスイーツが、ここまで歩いてきた歩みの疲れを優しく癒やしてくれる。心身ともにリフレッシュできたら、すぐ北西隣に広がる「ユカンボシ川河畔公園」へと楽しく歩き出そう。',
      hook: 'すぐ北西隣へ徒歩約2分',
      f7_fragment: '川のせせらぎそばでこだわりの珈琲と優しい食事を味わえる人気カフェ。',
      f7_full: '「cafe福座」で香り高い珈琲とともに穏やかな時間を過ごし、旅の元気を養った。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'ユカンボシ川河畔公園',
      lat: 42.869736,
      lng: 141.585263,
      address: '北海道恵庭市駒場町5-657-1',
      description:
        '別名「ユカンボシ河畔彫刻広場」とも呼ばれる緑豊かな公園（終日開放・入園無料）。清らかな川の流れに沿って遊歩道が整備され、点在する彫刻作品を眺めながら散策できる。',
      clue:
        '別名「ユカンボシ河畔彫刻広場」として地域の市民に親しまれる「ユカンボシ川河畔公園」をゆっくり楽しく散策して歩いてみよう（終日開放・無料）。澄んだ川の流れに沿った美しい遊歩道には個性豊かな屋外彫刻作品が点在し、四季の木々の鮮やかな彩りや野鳥のさえずりとアートが心地よく調和している。水辺の清涼な風を胸いっぱいに味わったら、さらに西側に広がる人気施設「えこりん村」へ向かおう。',
      hook: '川沿いから西の牧場エリアへ徒歩約40分（またはタクシー等利用可）',
      f7_fragment: '清流沿いの遊歩道に屋外彫刻が点在する緑豊かな河畔公園。',
      f7_full: '「ユカンボシ川河畔公園」で清流のせせらぎと屋外彫刻が織りなす風景を満喫した。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: 'えこりん村',
      lat: 42.87059,
      lng: 141.55217,
      address: '北海道恵庭市牧場277-4',
      description:
        '自然と共生するエコロジーテーマ施設（入場無料・体験飲食別、年末年始休）。ウェルカムセンター（4〜10月9:30〜17:00等）や「とまとの森」（4月中旬〜10月中旬10:00〜16:00）、レストラン「らくだ軒」がある。',
      clue:
        '旅の締めくくりは、豊かな自然とSDGsの学びや食の魅力がぎゅっと詰まった「えこりん村」をゆっくり訪ねよう（4〜10月9:30〜17:00等、年末年始休）。「とまとの森」では一粒の種から大きく枝を広げたトマトの圧倒的な生命力に驚き、「らくだ軒」やウェルカムセンターでは道産食材や可愛い雑貨に出会える。恵庭の豊かな自然の恵みを存分に満喫して、素晴らしい散策の一日を笑顔で結ぼう。',
      hook: '',
      f7_fragment: '巨大なトマトの木がある「とまとの森」やレストランを備える自然体験拠点。',
      f7_full: '「えこりん村」で生命力あふれる自然の恵みに触れ、恵庭の旅を華やかに締めくくった。',
    },
  ],
};
