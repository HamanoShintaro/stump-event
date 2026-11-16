export default {
  slug: 'konbumori',
  station_order: 972,
  station: '昆布盛',
  line: 'JR根室本線',
  area_name: '昆布盛',
  prefecture: '北海道',
  municipality: '根室市',
  category: '自然・海辺',
  budget_tier: 1,
  tags: ['根室本線', '花咲線', '昆布盛漁港', '風力発電', 'ユルリ島'],
  style_genre: 'ink_and_watercolor',
  title: '森の駅から昆布の浜と風車を望む道',
  description:
    '林の中に佇む無人駅・JR昆布盛駅から華盛稲荷神社、昆布盛漁港、旧昆布盛小学校跡を経て昆布盛ウインドファーム周辺へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Konbumori Station tucked in coastal woods in Nemuro, a red torii gate descending to a kelp-drying shoreline overlooking offshore islands, and white wind turbines turning on a grassy sea terrace, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び昆布盛を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '漁村を見守る無人の華盛稲荷神社',
      subtext: '駅から海側へ下る道沿いの鳥居をくぐり旅の安全を祈った',
      badge: {
        code: 'konbumori_inari',
        name_ja: '浜道のお稲荷様',
        subtitle_en: 'Coastal Inari Torii',
        description:
          '華盛稲荷神社を訪れ、昆布盛の漁業集落を見守る鳥居に手を合わせたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a vermilion Inari torii gate framed by coastal spruce trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'ユルリ島を望む昆布盛漁港の浜',
      subtext: '太平洋の潮風と長昆布の天日干しが見られる漁港を歩いた',
      badge: {
        code: 'konbumori_port',
        name_ja: '長昆布の海辺',
        subtitle_en: 'Kelp Drying Shore',
        description:
          '昆布盛漁港を訪れ、ユルリ島・モユルリ島を望む太平洋の海辺を歩いたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of long dark Hokkaido kombu kelp drying beside calm Pacific surf and distant flat islands on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '高台に残る旧昆布盛小学校跡',
      subtext: '80年の歴史を刻んだ学び舎を海を臨む高台で仰ぎ見た',
      badge: {
        code: 'konbumori_school',
        name_ja: '海辺の学び舎跡',
        subtitle_en: 'Old School on the Bluff',
        description:
          '旧昆布盛小学校跡を訪れ、80年にわたり地域の子どもたちを育んだ高台を歩いたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a nostalgic hilltop schoolhouse clock overlooking the distant blue ocean on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '白い風車が回る昆布盛ウインドファーム',
      subtext: '海岸段丘の強い海風を受けるダイナミックな風景に見入った',
      badge: {
        code: 'konbumori_windfarm',
        name_ja: '海岸段丘の風車',
        subtitle_en: 'Coastal Wind Turbines',
        description:
          '昆布盛ウインドファーム周辺を訪れ、海風を受けて回る壮大な風車群を望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of tall slender wind turbines turning gracefully along a coastal meadow cliff on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'konbumori_complete',
    name_ja: '昆布盛・海と風車の旅人',
    subtitle_en: 'Walker of Konbumori Coast',
    description:
      'JR昆布盛駅から華盛稲荷神社、昆布盛漁港、旧小学校跡、ウインドファームまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a forest railway stop, drying ocean kelp, and coastal wind turbines on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR昆布盛駅',
      lat: 43.228458,
      lng: 145.542807,
      address: '北海道根室市昆布盛93-5',
      description:
        '昭和36年（1961年）2月1日開業、林の中に佇む静かな無人駅（終日開放・無休）。かつて周辺の漁村の生活を支えた駅で、坂を下ると太平洋側の集落へと抜ける。',
      clue:
        '昭和三十六年二月に開業し、静かな林の中にひっそりと佇む花咲線の無人駅「JR昆布盛駅」から楽しい海辺の散策を始めよう（終日開放）。木々のざわめきと遠くから届く太平洋の潮騒を感じながら東〜南東の坂道へと外へ踏み出したら、まずは海側へ下る道沿いに鳥居を構える「華盛稲荷神社」を目指して、爽やかな風の中をのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に楽しく外へ歩き出そう。',
      hook: '駅から東〜南東方向へ徒歩約3分',
      f7_fragment: '静かな林の中に佇み、坂を下ると太平洋の漁村へと抜ける花咲線の無人駅。',
      f7_full: '「JR昆布盛駅」の森の木立を抜け、昆布の浜と風車を目指す散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '華盛稲荷神社',
      lat: 43.227067,
      lng: 145.545211,
      address: '北海道根室市昆布盛93',
      description:
        '昆布盛の漁業集落を見守る無人の鎮守（参拝自由・無休）。駅から海側へ下る道道142号から漁港方面沿いに鳥居を構えている。',
      clue:
        '昆布盛の漁業集落を見守る無人の鎮守「華盛稲荷神社」で旅の安全を静かに優しく楽しく笑顔で心を込めて祈願しよう（参拝自由）。次は南東の「昆布盛漁港」へと向かおう。',
      hook: '南東方向へ徒歩約10〜12分',
      f7_fragment: '駅から海側へ下る道沿いに鳥居を構え、昆布盛の漁業集落を見守る鎮守。',
      f7_full: '「華盛稲荷神社」の鳥居に手を合わせ、すぐ先に広がる太平洋の海辺へ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '昆布盛漁港（落石漁港 昆布盛地区）',
      lat: 43.221816,
      lng: 145.551492,
      address: '北海道根室市昆布盛68',
      description:
        '太平洋に面し、沖合にユルリ島・モユルリ島を望む漁港（周辺散策自由・無休）。夏には海岸の干し場で名産の長昆布を天日干しする風物詩が見られる。',
      clue:
        '太平洋に面し、沖合には自然豊かなユルリ島・モユルリ島を望む「昆布盛漁港（落石漁港 昆布盛地区）」の海辺をゆっくり楽しく歩いてみよう（散策自由）。夏場には海岸の広い干し場で名産の長昆布を天日干しする道東ならではの風物詩も見られ、地名の通り昆布の恵みとともに生きてきた集落の風景が広がる。爽やかな潮風をたっぷり味わったら、西側の高台にある「旧昆布盛小学校跡」へと楽しく向かおう。',
      hook: '西方向へ徒歩約4〜5分',
      f7_fragment: 'ユルリ島・モユルリ島を望み、夏には長昆布の天日干しが見られる漁港。',
      f7_full: '「昆布盛漁港（落石漁港 昆布盛地区）」で潮風と沖合の島々の眺めを満喫した。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '旧昆布盛小学校跡',
      lat: 43.221292,
      lng: 145.548378,
      address: '北海道根室市昆布盛168-8',
      description:
        '80年の歴史を刻み平成27年（2015年）3月に閉校した旧小学校（外観・敷地外周見学自由、地域避難所等）。海を臨む高台に校舎と広場が残り、一息つくことができる。',
      clue:
        '八十年にわたる長い歴史を刻み、平成二十七年三月に惜しまれつつ閉校した「旧昆布盛小学校跡」の高台へ足を運んでゆっくり一息つこう（敷地外周見学自由）。太平洋の青い海を臨む高台に今も残る校舎の佇まいと広い校庭を眺めながら深呼吸すれば、かつてこの海辺のまちで多くの子どもたちが学び遊んだ温かい記憶が蘇ってくる。郷愁の風景で心を休めたら、南の「昆布盛ウインドファーム周辺」へ向かおう。',
      hook: '南方向へ徒歩約12〜13分',
      f7_fragment: '80年の歴史を刻み海を臨む高台に校舎が残る、地域の記憶を伝える旧小学校跡。',
      f7_full: '「旧昆布盛小学校跡」の高台を仰ぎ見て、海辺の集落が刻んだ歳月を感じた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '昆布盛ウインドファーム周辺（CEF株式会社付近）',
      lat: 43.214009,
      lng: 145.54501,
      address: '北海道根室市昆布盛149-12',
      description:
        '海岸段丘の強い風を活かした風力発電の風車群が立ち並ぶエリア（周辺道路より景観見学自由・無休）。11月下旬には「根室昆布盛大花火大会」の会場周辺にもなる。',
      clue:
        '旅の締めくくりは、海岸段丘を吹き抜ける強い海風を活かして白い風力発電の風車群が立ち並ぶ「昆布盛ウインドファーム周辺（CEF株式会社付近）」の景色を仰ぎ見よう（周辺道路見学自由）。広い空に向かって力強く回る風車の姿は道東ならではのダイナミックな絶景で、秋には大花火大会の舞台にもなる。森と海と風の美しいコントラストを胸に抱いて、昆布盛の旅を晴れやかな笑顔で明るく楽しく結ぼう。',
      hook: '',
      f7_fragment: '海岸段丘の海風を受けて白い風車群が立ち並ぶ、ダイナミックな景観エリア。',
      f7_full: '「昆布盛ウインドファーム周辺」で回る白い風車を眺め、昆布盛の散歩を終えた。',
    },
  ],
};
