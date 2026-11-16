export default {
  slug: 'komagatake',
  station_order: 996,
  station: '駒ヶ岳',
  line: 'JR函館本線',
  area_name: '駒ヶ岳麓・森町',
  prefecture: '北海道',
  municipality: '森町',
  category: 'グルメ・自然',
  budget_tier: 2,
  tags: ['函館本線', '駒ヶ岳', '古民家パン', '雫bakery', '駒ヶ岳神社'],
  style_genre: 'ink_and_watercolor',
  title: '駒ヶ岳の裾野に佇む古民家パンと神社巡り',
  description:
    'JR駒ヶ岳駅から駅前の駒ケ岳郵便局、週末限定の古民家ビレッジベーカリー駒ヶ岳、雫bakeryを経て駒ヶ岳神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Komagatake Station beneath volcanic Mount Komagatake, crusty artisan sourdough bread in a 70-year-old farmhouse bakery, wheat pastries, and a quiet timber Shinto shrine, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び駒ヶ岳を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅前通りに佇む 駒ケ岳郵便局',
      subtext: '山麓の集落を見守り続ける素朴な局舎の前で旅の空気を感じた',
      badge: {
        code: 'komagatake_post',
        name_ja: '山麓駅前の郵便局',
        subtitle_en: 'Komagatake Post Office',
        description:
          '駒ケ岳郵便局の前を訪れ、駒ヶ岳の裾野に暮らす人々の穏やかな日常に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a vintage red Japanese postbox standing beside a quiet mountain-foot station road on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '築70年超の古民家 ビレッジベーカリー駒ヶ岳',
      subtext: '羊やポニーのいる牧歌的な風景の中で週末限定のパンに出会った',
      badge: {
        code: 'komagatake_village_bakery',
        name_ja: '古民家の週末パン',
        subtitle_en: 'Village Bakery Komagatake',
        description:
          'ビレッジベーカリー駒ヶ岳を訪れ、古民家の風情と香り高いハード系パンを楽しんだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of crusty rustic sourdough loaves and a savory quiche inside a 70-year-old wooden farmhouse on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '道産小麦の香り豊かな 雫bakery',
      subtext: '駒ヶ岳茶房と同じ敷地でこだわりのパンと寛ぎの時間を過ごした',
      badge: {
        code: 'komagatake_shizuku',
        name_ja: '茶房と小麦の雫',
        subtitle_en: 'Shizuku Bakery',
        description:
          '雫bakery（駒ヶ岳茶房敷地内）を訪れ、北海道産小麦の温かなパンを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden wheat-flour buns beside a warm teacup in a tranquil mountain garden on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '集落を見守る鎮守 駒ヶ岳神社',
      subtext: '駅西方の静かな境内で北海道駒ヶ岳の麓の旅を締めくくった',
      badge: {
        code: 'komagatake_shrine',
        name_ja: '駒ヶ岳集落の鎮守',
        subtitle_en: 'Komagatake Shrine',
        description:
          '駒ヶ岳神社に参拝し、静謐な境内で北海道駒ヶ岳の山麓散歩を結んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a peaceful Shinto shrine torii gate set beneath the twin jagged peaks of Mount Komagatake on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'komagatake_complete',
    name_ja: '駒ヶ岳・古民家と山麓の旅人',
    subtitle_en: 'Explorer of Komagatake Foot',
    description:
      'JR駒ヶ岳駅から駒ケ岳郵便局、ビレッジベーカリー駒ヶ岳、雫bakery、駒ヶ岳神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting Mount Komagatake peaks, artisan bread, and a quiet Shinto torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR駒ヶ岳駅',
      lat: 42.038228,
      lng: 140.610838,
      address: '北海道茅部郡森町字駒ヶ岳',
      description:
        '標高1,131mの北海道駒ヶ岳の麓に位置する木造風駅舎の無人駅（24時間利用可）。駅前通りから雄大な山の気配を感じられ、山麓のベーカリーや神社を巡る散策の起点となっている。',
      clue:
        '標高千百三十一メートルの北海道駒ヶ岳の雄大な麓に佇む木造風駅舎の無人駅「JR駒ヶ岳駅」から、香り高いパンと鎮守を巡る山麓散歩を始めよう（終日開放）。ホームや駅前通りから迫りくる山の気配と爽やかな高原の風を間近に感じたら、まずは駅を出てすぐ目の前の通りに立つ「駒ケ岳郵便局」を目指し、清々しい山麓の空気を胸いっぱいに吸い込みながら軽やかな足取りで元気よく一歩を踏み出そう。',
      hook: '駅前から東方向へ徒歩約1分',
      f7_fragment: '北海道駒ヶ岳の麓に佇み、木造風駅舎と山の気配が魅力の無人駅。',
      f7_full: '「JR駒ヶ岳駅」を後にし、山麓に点在するこだわりのパン店と神社を巡り始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '駒ケ岳郵便局',
      lat: 42.037837,
      lng: 140.611778,
      address: '北海道茅部郡森町字駒ヶ岳482',
      description:
        'JR駒ヶ岳駅の目の前に佇む地域の郵便局（窓口平日9:00〜17:00、土日祝休、外観・ポストは終日）。旅の便りを出す拠点や山麓集落の目印として親しまれている。',
      clue:
        'JR駒ヶ岳駅の目の前に佇む「駒ケ岳郵便局」の前で山麓の暮らしを感じよう（平日9:00〜17:00）。次は南東の「ビレッジベーカリー駒ヶ岳」へ向かおう。',
      hook: '南東方向へ徒歩約8分',
      f7_fragment: 'JR駒ヶ岳駅前に立ち、旅の便りや地域の暮らしを支える素朴な郵便局。',
      f7_full: '「駒ケ岳郵便局」の前を通り過ぎ、緑豊かな山麓のパン屋へと歩を進めた。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'ビレッジベーカリー駒ヶ岳',
      lat: 42.033334,
      lng: 140.615029,
      address: '北海道茅部郡森町字駒ヶ岳452',
      description:
        '築70年以上の古民家を改装した週末限定の人気ベーカリー（土日10:00〜16:00・売切次第終了、月〜金休）。ハード系パンやキッシュが評判で、周囲の羊やポニーの風景も魅力。',
      clue:
        '築七十年以上の古民家を温かく改装した週末限定の人気ベーカリー「ビレッジベーカリー駒ヶ岳」へ立ち寄ってみよう（土日10:00〜16:00・売切終了、月〜金休）。香ばしく焼き上げられたハード系パンやキッシュが評判で、周囲に羊やポニーがのんびり暮らす牧歌的な風景にも心が和む。古民家の温もりと山麓の空気を満喫したら、東〜南東方向の「雫bakery（駒ヶ岳茶房敷地内）」へと歩いて向かおう。',
      hook: '東〜南東方向へ徒歩約18分',
      f7_fragment: '築70年超の古民家を改装し、ハード系パンやキッシュが人気の週末限定店。',
      f7_full: '「ビレッジベーカリー駒ヶ岳」で牧歌的な風景と古民家パンの魅力に触れた。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '雫bakery（駒ヶ岳茶房敷地内）',
      lat: 42.029495,
      lng: 140.630044,
      address: '北海道茅部郡森町字駒ヶ岳345-3',
      description:
        '2023年オープンの北海道産小麦のパン店（11:00〜16:00、水・木曜休、同敷地内の駒ヶ岳茶房は主に金〜日10:00〜17:00）。緑に囲まれた敷地で買い物や休憩を楽しめる。',
      clue:
        '北海道産小麦の美味しさを大切にする「雫bakery（駒ヶ岳茶房敷地内）」でほっと一息つこう（11:00〜16:00、水・木曜休、駒ヶ岳茶房は主に金〜日営業）。静かな緑に囲まれた敷地内で焼き立てパンの香りに癒やされながらゆっくり寛ぐ時間は、山麓散策ならではの贅沢なひとときだ。心温まる休憩の時間を十分に満喫したら、西〜北西方向の集落に鎮座する「駒ヶ岳神社」へと歩を進めよう。',
      hook: '西〜北西方向へ徒歩約33分',
      f7_fragment: '駒ヶ岳茶房と同じ緑豊かな敷地に立つ、北海道産小麦のパン店。',
      f7_full: '「雫bakery」で北海道産小麦の優しい香りに癒やされ、最後の鎮守へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '駒ヶ岳神社',
      lat: 42.037518,
      lng: 140.601356,
      address: '北海道茅部郡森町字駒ヶ岳232',
      description:
        '駒ヶ岳駅の西〜南西の集落に鎮座する地域の神社（参拝自由・無休）。大沼湖畔の「大沼駒ヶ岳神社」とは別の由緒ある鎮守で、静かな境内で旅の安全を祈願できる。',
      clue:
        '旅の締めくくりは、駒ヶ岳駅西方の静かな集落に鎮座する地域の鎮守「駒ヶ岳神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。大沼湖畔の大沼駒ヶ岳神社とは別の、この地の暮らしを長年にわたり見守り続けてきた由緒あるお社で、木々に囲まれた境内には清々しい静謐さが漂っている。雄大な北海道駒ヶ岳の恵みと地域の祈りに静かに手を合わせて、山麓の散歩を晴れやかに明るく締めくくろう。',
      hook: '',
      f7_fragment: '駒ヶ岳駅西方の集落に鎮座し、静かな境内で地域を見守る鎮守社。',
      f7_full: '「駒ヶ岳神社」の静謐な境内で旅の無事を感謝し、駒ヶ岳の散歩を終えた。',
    },
  ],
};
