export default {
  slug: 'kuromatsunai',
  station_order: 1006,
  station: '黒松内',
  line: 'JR函館本線',
  area_name: '黒松内・歌才ブナ林',
  prefecture: '北海道',
  municipality: '黒松内町',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '黒松内', '北限のブナ林', 'ぶなの森', 'ブナセンター'],
  style_genre: 'ink_and_watercolor',
  title: '北限のブナ林と黒松内の恵みを巡る小径',
  description:
    'JR黒松内駅から街中カフェKumagera Kitchen 樻里花、大鳥神社、日帰り名湯の黒松内温泉ぶなの森を経て黒松内町ブナセンターへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Kuromatsunai Station, a cozy town cafe plate, a hillside Shinto shrine torii, steaming outdoor hot spring baths surrounded by northern beech forest, and a sunlit woodland nature center, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び黒松内を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: 'にぎわい拠点 Kumagera Kitchen 樻里花',
      subtext: '地元食材メニューや本格タイ料理を味わい街歩きの活力を得た',
      badge: {
        code: 'kuromatsunai_kirika',
        name_ja: '黒松内の街中食堂',
        subtitle_en: 'Kumagera Kitchen Kirika',
        description:
          'Kumagera Kitchen 樻里花を訪れ、黒松内の街中にぎわい拠点で温かな食事を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a colorful local lunch plate beside a steaming coffee cup in a cozy northern wood cafe on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治遷座の高台社 大鳥神社',
      subtext: '日本武尊を祀る歴史ある鎮守の境内で町の安寧を祈った',
      badge: {
        code: 'kuromatsunai_otori_shrine',
        name_ja: '高台の大鳥神社',
        subtitle_en: 'Otori Shrine Kuromatsunai',
        description:
          '大鳥神社に参拝し、明治四十五年に高台へ遷座した由緒ある鎮守に手を合わせたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hillside Shinto shrine torii gate framed by tall beech trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'ブナ林の湯 黒松内温泉 ぶなの森',
      subtext: '露天風呂やサウナで温まり名物の手打ちそばに癒やされた',
      badge: {
        code: 'kuromatsunai_bunanomori',
        name_ja: 'ぶなの森の名湯',
        subtitle_en: 'Buna-no-Mori Onsen',
        description:
          '黒松内温泉 ぶなの森を訪れ、ナトリウム・塩化物泉の柔らかな湯と寛ぎを満喫したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming natural stone hot spring bath surrounded by green beech leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '北限の自然を伝える 黒松内町ブナセンター',
      subtext: '国の天然記念物・歌才ブナ林の入口で豊かな森の生態に触れた',
      badge: {
        code: 'kuromatsunai_bunacenter',
        name_ja: '北限ブナ林の案内所',
        subtitle_en: 'Kuromatsunai Beech Center',
        description:
          '黒松内町ブナセンターを訪れ、北限のブナ林が育む豊かな自然と歴史を学んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of sunlit silver-barked Japanese beech trees beside a black woodpecker silhouette on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kuromatsunai_complete',
    name_ja: '黒松内・北限ブナ林と湯の旅人',
    subtitle_en: 'Explorer of Kuromatsunai Beech',
    description:
      'JR黒松内駅からKumagera Kitchen 樻里花、大鳥神社、黒松内温泉ぶなの森、ブナセンターまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting silver beech forest trees, rising hot spring steam, and a historic shrine torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR黒松内駅',
      lat: 42.66964,
      lng: 140.305849,
      address: '北海道寿都郡黒松内町字黒松内1',
      description:
        '明治36年（1903年）開業のJR函館本線の駅（無人駅・終日開放、臨時特急ニセコ停車駅）。かつて寿都鉄道が分岐し機関庫も置かれた要衝で、ブナ北限の里の玄関口となっている。',
      clue:
        'かつて寿都鉄道が分岐し機関庫も置かれた歴史を持つ、北限のブナの里の玄関口「JR黒松内駅」から森と湯を巡る散歩を始めよう（終日開放）。アイヌ語に由来する美しい地名を持つこの街には、美味しい食や名湯、豊かな自然が徒歩圏内に広がっている。改札を出て南東方向へと外へ踏み出したら、まずは街中のにぎわい拠点「Kumagera Kitchen 樻里花」を目指して軽やかに歩き出そう。',
      hook: '駅から南東方向へ徒歩約4分',
      f7_fragment: 'かつて寿都鉄道が分岐した要衝で、ブナ北限の里・黒松内の玄関口。',
      f7_full: '「JR黒松内駅」を後にし、街中の食と温泉、北限のブナ林を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'Kumagera Kitchen 樻里花（クマゲラキッチン キリカ）',
      lat: 42.668959,
      lng: 140.307418,
      address: '北海道寿都郡黒松内町字黒松内257-1',
      description:
        '令和7年（2025年）3月末に街中でリニューアルオープンしたにぎわい拠点（11:00〜15:00・17:00〜21:00、木曜休）。黒松内産の地元食材メニューや本格タイ料理が味わえる。',
      clue:
        '街中の「Kumagera Kitchen 樻里花」で黒松内産食材のランチや喫茶をゆっくり楽しもう（木曜休）。お腹を満たしたら南の「大鳥神社」へ向かおう。',
      hook: '南方向へ徒歩約11分',
      f7_fragment: '黒松内町役場横に立つにぎわい拠点で、地元食材料理や本格タイ料理が人気。',
      f7_full: '「Kumagera Kitchen 樻里花」で温かな料理を味わい、高台の古社へ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '大鳥神社',
      lat: 42.662177,
      lng: 140.306029,
      address: '北海道寿都郡黒松内町字黒松内463',
      description:
        '花岡利右衛門の邸内小祠を起源とし、明治9年に村社へ列格、明治45年に現在地の高台へ遷座した神社（参拝自由・無休）。日本武尊を祀り町の歩みを静かに見守っている。',
      clue:
        '明治九年に村社へ列格し、明治四十五年に現在地の高台へ遷座した由緒ある地域の鎮守「大鳥神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。日本武尊を祀る静かな境内には、開拓期から黒松内の街並みを温かく見守り続けてきた凛とした空気が満ちている。清々しい高台で旅の安全を深く祈願したら、南方向に湧く日帰り名湯「黒松内温泉 ぶなの森」へと爽やかに軽やかに元気に歩を進めよう。',
      hook: '南方向へ徒歩約14分',
      f7_fragment: '明治四十五年に現在地の高台へ遷座し、日本武尊を祀る黒松内の鎮守社。',
      f7_full: '「大鳥神社」の高台から町の安寧を祈り、森に抱かれた名湯へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '黒松内温泉 ぶなの森',
      lat: 42.657132,
      lng: 140.309196,
      address: '北海道寿都郡黒松内町字黒松内545',
      description:
        'ナトリウム・塩化物泉の日帰り温泉施設（4〜10月11:00〜21:30・第1水曜休、11〜3月11:00〜21:00・第1・3水曜休）。露天風呂やサウナ、そば処ぶなの森を併設し観光協会も入居。',
      clue:
        '森の豊かな緑に抱かれた日帰り名湯「黒松内温泉 ぶなの森」でゆったりと休憩しよう（11:00〜21:00、水曜休あり）。ナトリウム・塩化物泉の柔らかなお湯と心地よい露天風呂やサウナでこれまでの疲れを癒やしたら、館内のそば処や観光案内で一息つくのも楽しみのひとつだ。心も体もぽかぽかに温まったら、南方の「黒松内町ブナセンター」を目指して明るく軽やかに楽しく元気に歩を進めよう。',
      hook: '南方向へ徒歩約11分',
      f7_fragment: '露天風呂やサウナ、そば処を備え観光協会も入居する日帰り名湯。',
      f7_full: '「黒松内温泉 ぶなの森」の柔らかな湯に癒やされ、ブナ林の拠点へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '黒松内町ブナセンター',
      lat: 42.651027,
      lng: 140.306411,
      address: '北海道寿都郡黒松内町字黒松内512-1',
      description:
        '国の天然記念物「歌才ブナ林」の入口に位置する自然博物館・体験拠点（9:30〜17:00・木曜夜間開館あり、観覧無料、月・火曜休）。ブナ北限の豊かな生態や町の歴史を紹介。',
      clue:
        '旅の締めくくりは、国の天然記念物「歌才ブナ林」の入口に建つ「黒松内町ブナセンター」を訪れて北限の森の魅力にじっくり触れよう（9:30〜17:00・観覧無料、月・火曜休）。なぜ黒松内がブナの自生北限なのかを伝える分かりやすい展示や、森の生き物たちの息吹を感じられる空間は学びと発見がいっぱいだ。豊かな緑の記憶を胸に刻んで、黒松内の散歩を晴れやかな気持ちで明るく締めくくろう。',
      hook: '',
      f7_fragment: '国の天然記念物「歌才ブナ林」の入口にあり、ブナ北限の自然を伝える施設。',
      f7_full: '「黒松内町ブナセンター」で北限ブナ林の奥深さに触れ、黒松内の旅を終えた。',
    },
  ],
};
