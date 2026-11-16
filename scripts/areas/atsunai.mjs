export default {
  slug: 'atsunai',
  station_order: 951,
  station: '厚内',
  line: 'JR根室本線',
  area_name: '浦幌・厚内漁港',
  prefecture: '北海道',
  municipality: '浦幌町',
  category: '自然・グルメ',
  budget_tier: 1,
  tags: ['根室本線', '太平洋', '鮭とば', '厚内神社', '厚内漁港'],
  style_genre: 'ink_and_watercolor',
  title: '太平洋を望む鉄路と鮭とば香る厚内の港町',
  description:
    '根室本線で初めて太平洋を望めるJR厚内駅から、自家製鮭とばの山本商店、厚内郵便局、船神輿の厚内神社、厚内漁港を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Atsunai in Urahoro, Hokkaido, featuring a small coastal train station overlooking the vast blue Pacific Ocean, wooden racks drying salmon jerky in sea breezes, and a quiet fishing harbor beneath crisp clouds, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び厚内を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '潮風香る自家製鮭とばが並ぶ駅前のよろずや',
      subtext: '山本商店で手作りの鮭とばや海の珍味に出会った',
      badge: {
        code: 'atsunai_yamamoto',
        name_ja: '鮭とばの目利き人',
        subtitle_en: 'Picker of Atsunai Toba',
        description:
          '山本商店（フードインやまもと）で、無添加の自家製鮭とばや海の珍味に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of strips of cured salmon jerky tied with hemp cord beside coastal waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '浜の暮らしを見守り続ける昔ながらの郵便局',
      subtext: '厚内郵便局が佇む漁港集落の穏やかな日常を歩いた',
      badge: {
        code: 'atsunai_post',
        name_ja: '浜辺の便りびと',
        subtitle_en: 'Messenger of Atsunai',
        description:
          '旧来の町並みの中に佇む厚内郵便局を訪ね、港町の温かな暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a coastal village postbox beside weathered wooden fishing boats on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '川を渡った先に鎮座する船神輿ゆかりの社',
      subtext: '昭和30年遷座の厚内神社で漁業の町の信仰に触れた',
      badge: {
        code: 'atsunai_shrine',
        name_ja: '船神輿の参拝者',
        subtitle_en: 'Worshipper of Atsunai Shrine',
        description:
          '例祭で船神輿が練り歩く厚内神社を訪れ、海の安全への祈りに手を合わせたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a traditional wooden fishing boat festival float and Shinto torii gate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '太平洋の水平線と潮騒が広がる厚内の海辺',
      subtext: '厚内漁港から雄大な太平洋の海原を望み、深呼吸した',
      badge: {
        code: 'atsunai_port',
        name_ja: '太平洋の潮見人',
        subtitle_en: 'Watcher of the Pacific',
        description:
          '厚内川河口の厚内漁港を訪れ、広大な太平洋の水平線と海岸線を望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of gentle Pacific Ocean swells meeting a quiet lighthouse jetty under morning light on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'atsunai_complete',
    name_ja: '厚内・太平洋と潮風の旅人',
    subtitle_en: 'Traveler of Atsunai Coast',
    description:
      'JR厚内駅から山本商店、厚内郵便局、厚内神社、厚内漁港まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a coastal train station, salmon toba, and Pacific horizon waves on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR厚内駅',
      lat: 42.809364,
      lng: 143.814779,
      address: '北海道十勝郡浦幌町字厚内215-1',
      description:
        '明治36年（1903年）12月25日に開業した無人駅（終日開放）。帯広方面から根室本線の下り列車に乗って、車窓から初めて太平洋を望める駅として鉄道旅人に知られる。',
      clue:
        '明治三十六年十二月に開業し、帯広方面から根室本線を東へ進む列車で初めて太平洋を望める駅として知られる「JR厚内駅」から楽しい港町散策を始めよう（終日開放）。爽やかな潮風の気配を感じながら静かな無人駅のホームを外へ踏み出したら、まずはすぐ南西の駅前に佇む地元の老舗「山本商店（フードインやまもと）」を目指して、澄んだ海の空気の中をのんびり楽しく元気に笑顔で力強く歩き出そう。',
      hook: '駅前から南西方向へ徒歩約1〜2分',
      f7_fragment: '明治三十六年開業、根室本線の下り列車で初めて太平洋を望める港町の駅。',
      f7_full: '「JR厚内駅」を後にし、潮風と鮭とばが香る厚内の港町歩きを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '山本商店（フードインやまもと）',
      lat: 42.809103,
      lng: 143.814427,
      address: '北海道十勝郡浦幌町字厚内215-21',
      description:
        '駅前で食料品や雑貨を扱う地域密着の商店（8:00〜17:00、不定休）。前浜の秋鮭を使い保存料・着色料不使用で仕上げる自家製の「鮭とば」やたこ燻製が全国から注目される名物。',
      clue:
        '駅前の老舗「山本商店（フードインやまもと）」で無添加の自家製鮭とばなど海の珍味を選ぼう（8:00〜17:00）。お土産を手にしたら南東の「厚内郵便局」へ向かおう。',
      hook: '駅前通りを南東方向へ徒歩約3分',
      f7_fragment: '前浜の秋鮭を使った無添加の自家製「鮭とば」が名物の駅前商店。',
      f7_full: '「山本商店（フードインやまもと）」で潮風香る名物の鮭とばに出会い、笑顔になった。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '厚内郵便局',
      lat: 42.808027,
      lng: 143.816359,
      address: '北海道十勝郡浦幌町厚内二条通2-11-13',
      description:
        '漁港集落の暮らしを支え続ける郵便局（郵便窓口平日9:00〜17:00、土日祝休）。駅前通りから続く旧来の落ち着いた町並みの中に佇んでいる。',
      clue:
        '駅前通りから続く旧来の落ち着いた町並みの中に佇み、漁港集落の暮らしを支え続けている「厚内郵便局」の前をゆっくり歩いてみよう（平日9:00〜17:00、土日祝休）。海辺の小さな街ならではの素朴で温かな日常の空気を感じながら一歩ずつ静かにゆっくりと歩みを進めると、旅の心がじんわり優しく和らいでいく。爽やかな潮の香りを感じつつ、南へ厚内橋を渡って鎮座する「厚内神社」へと向かおう。',
      hook: '南方向へ厚内橋を渡り徒歩約6分',
      f7_fragment: '厚内二条通の旧来の町並みで漁港集落の暮らしを支える郵便局。',
      f7_full: '「厚内郵便局」の佇まいを眺め、海辺の集落の穏やかな暮らしに触れた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '厚内神社',
      lat: 42.806115,
      lng: 143.812096,
      address: '北海道十勝郡浦幌町字厚内チブネオコッペ1',
      description:
        '天照皇大神と稲荷大明神を祀る地域の鎮守（境内自由・無休）。昭和18年の合祀を経て昭和30年に現在地へ遷座し、例祭では勇壮な船神輿が練り歩く。',
      clue:
        '明治・大正期のお社が昭和十八年に合祀され、昭和三十年には現在地へ遷座した漁師町の鎮守「厚内神社」へ丁寧に心を込めて参拝しよう（境内自由）。例祭の日には勇壮な船神輿が街を練り歩くという海に根付いた神社で静かに手を合わせれば、大漁と航海の安全を祈る地元の人々の熱い思いが胸の奥に深く伝わってくる。参拝を無事に終えたら、北東〜東の海辺に広がる「厚内漁港」へと爽やかに向かおう。',
      hook: '北東〜東方向へ徒歩約9〜10分',
      f7_fragment: '例祭で船神輿が練り歩き、海の安全と町の暮らしを見守り続ける鎮守。',
      f7_full: '「厚内神社」の境内に参拝し、海に生きる町の信仰と誇りに触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '厚内漁港',
      lat: 42.807174,
      lng: 143.820424,
      address: '北海道十勝郡浦幌町字厚内1',
      description:
        '厚内川河口付近に広がる太平洋に面した漁港（終日開放・漁業作業エリア立入注意）。秋には鮭漁などで活気を見せ、雄大な太平洋の水平線と海岸線を望むことができる。',
      clue:
        '旅の締めくくりは、厚内川の河口付近から雄大な太平洋に面して広がる「厚内漁港」の海辺へゆっくり歩いてみよう（開放・作業エリア立入注意）。秋には鮭漁などで活気づく港の向こうにどこまでも真っ直ぐ伸びる太平洋の青い水平線を眺めながら爽やかな潮風を胸いっぱい深呼吸すれば、日常を忘れる心地よい爽快感が心の奥まで広がっていく。鉄路と海の恵みに出会う厚内の旅を、晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '太平洋に面し、雄大な水平線と秋鮭漁の活気を感じられる厚内の漁港。',
      f7_full: '「厚内漁港」から広がる太平洋の水平線を望み、厚内の潮風散歩を終えた。',
    },
  ],
};
