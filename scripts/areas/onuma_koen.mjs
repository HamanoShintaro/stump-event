export default {
  slug: 'onuma_koen',
  station_order: 1000,
  station: '大沼公園',
  line: 'JR函館本線',
  area_name: '大沼公園・湖畔',
  prefecture: '北海道',
  municipality: '七飯町',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '大沼公園', 'レストラン梓', '大沼駒ヶ岳神社', 'セミナーハウス'],
  style_genre: 'ink_and_watercolor',
  title: '大沼湖畔の洋食と森の学び舎を巡る散策路',
  description:
    '丸太小屋風のJR大沼公園駅から大沼郵便局、レストラン梓、大沼駒ヶ岳神社を経て大沼国際セミナーハウスへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of log-cabin JR Onuma-Koen Station overlooking Mount Komagatake across calm Onuma Lake, a lakeside restaurant, a tranquil forest Shinto shrine torii, and a woodland seminar house among birches, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び大沼公園を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '風景印も親しまれる 大沼郵便局',
      subtext: '湖畔エリア入口の街角で駒ヶ岳の麓に暮らす日常を感じた',
      badge: {
        code: 'onuma_koen_post',
        name_ja: '大沼湖畔の郵便局',
        subtitle_en: 'Onuma Post Corner',
        description:
          '大沼郵便局の前を訪れ、駒ヶ岳と大沼を描いた風景印でも知られる湖畔の入口を歩いたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a lakeside postbox framed by birch trees and distant Mount Komagatake on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '名物あんかけ焼きそばの レストラン梓',
      subtext: '地元で愛される洋食・中華の老舗で大沼牛ハンバーグを味わった',
      badge: {
        code: 'onuma_koen_azusa',
        name_ja: '大沼の名物洋食店',
        subtitle_en: 'Restaurant Azusa',
        description:
          'レストラン梓を訪れ、大沼名物のあんかけ焼きそばや大沼牛ハンバーグの魅力に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming plate of savory ankake yakisoba noodles beside a wooden spoon on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '大岩が鎮座する 大沼駒ヶ岳神社',
      subtext: '駒ヶ岳を仰ぐ森の境内で開拓の歴史と霊峰への祈りに触れた',
      badge: {
        code: 'onuma_koen_komagatake_shrine',
        name_ja: '大沼の霊峰鎮守',
        subtitle_en: 'Onuma Komagatake Shrine',
        description:
          '大沼駒ヶ岳神社に参拝し、霊峰・北海道駒ヶ岳を祀る静謐な境内の空気に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a forest Shinto shrine torii gate and a moss-covered sacred boulder beneath twin mountain peaks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '森と湖に抱かれた 大沼国際セミナーハウス',
      subtext: '静かな森林公園の入口で爽やかな木漏れ日と深呼吸を楽しんだ',
      badge: {
        code: 'onuma_koen_seminar',
        name_ja: '大沼森林の学び舎',
        subtitle_en: 'Onuma Seminar House',
        description:
          '大沼国際セミナーハウスを訪れ、森と湖に囲まれた落ち着いた空間に癒やされたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a modern timber woodland hall surrounded by tall Hokkaido forest trees beside a tranquil lake on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'onuma_koen_complete',
    name_ja: '大沼公園・湖畔と森の旅人',
    subtitle_en: 'Explorer of Onuma Koen',
    description:
      'JR大沼公園駅から大沼郵便局、レストラン梓、大沼駒ヶ岳神社、大沼国際セミナーハウスまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a log-cabin station, Mount Komagatake reflected in Lake Onuma, and sunlit forest trees on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR大沼公園駅',
      lat: 41.981031,
      lng: 140.669745,
      address: '北海道亀田郡七飯町字大沼町85-8',
      description:
        '大沼国定公園の玄関口となる丸太小屋風の駅舎（始発〜終電）。JR函館本線の本線と砂原支線が分岐する交通の要衝でもあり、湖畔エリアの散策の起点として親しまれている。',
      clue:
        '大沼国定公園の玄関口として親しまれ、温かみのある丸太小屋風の駅舎が旅人を迎える「JR大沼公園駅」から湖畔の散歩を始めよう（始発〜終電）。函館本線の本線と砂原支線が分岐する要衝でもあり、駅前からすぐそこには雄大な駒ヶ岳と湖の気配が広がっている。改札を出て東方向へと外へ踏み出したら、まずは湖畔エリア入口の「大沼郵便局」を目指して、爽やかな風を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から東方向へ徒歩約6分',
      f7_fragment: '丸太小屋風の駅舎を持ち、大沼国定公園の玄関口として親しまれる駅。',
      f7_full: '「JR大沼公園駅」を後にし、湖畔の洋食店と森の学び舎を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '大沼郵便局',
      lat: 41.980969,
      lng: 140.674426,
      address: '北海道亀田郡七飯町字大沼町301-9',
      description:
        '駅東側の湖畔エリア入口に位置する郵便局（郵便窓口平日9:00〜17:00・昼休業の場合あり、土日祝休）。駒ヶ岳と大沼を描いた風景印でも知られる旅の立ち寄り処。',
      clue:
        '湖畔エリアの入口に立つ「大沼郵便局」の前をゆっくり歩き、駒ヶ岳の麓の街角を感じよう（平日9:00〜17:00）。次は北の老舗「レストラン梓」へ向かおう。',
      hook: '北方向へ徒歩約2分',
      f7_fragment: '湖畔エリア入口にあり、駒ヶ岳と大沼の風景印でも知られる郵便局。',
      f7_full: '「大沼郵便局」の前を通り過ぎ、地元の人々に愛される洋食店へ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'レストラン梓',
      lat: 41.982208,
      lng: 140.675064,
      address: '北海道亀田郡七飯町字大沼町324-9',
      description:
        '地元で長年親しまれる洋食・中華レストラン（11:00〜19:00頃・季節変動あり、水曜休）。大沼名物のあんかけ焼きそばや大沼牛ハンバーグが観光客にも人気。',
      clue:
        '大沼の街で長年にわたり地元の方や旅人に愛され続けてきた名店「レストラン梓」へ立ち寄ってみよう（11:00〜19:00頃・季節変動、水曜休）。大沼名物として知られる熱々のあんかけ焼きそばや、地元の恵みを活かしたジューシーな大沼牛ハンバーグなど魅力的なメニューが勢揃いしている。温かな味わいに心もお腹も満たされたら、北方向の森に鎮座する「大沼駒ヶ岳神社」へと軽やかに歩を進めよう。',
      hook: '北方向へ徒歩約11分',
      f7_fragment: '大沼名物のあんかけ焼きそばや大沼牛ハンバーグが人気の老舗レストラン。',
      f7_full: '「レストラン梓」で名物グルメの魅力に触れ、霊峰を祀る森の古社へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '大沼駒ヶ岳神社',
      lat: 42.007265,
      lng: 140.699397,
      address: '北海道亀田郡七飯町字大沼町85',
      description:
        '霊峰・北海道駒ヶ岳を祀り、登山安全や開運の社として親しまれる大沼の鎮守（参拝自由・無休）。境内の巨大な割石は登山安全のパワースポットとして知られている。',
      clue:
        '大沼湖畔の豊かな森に抱かれた「大沼駒ヶ岳神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。霊峰・北海道駒ヶ岳の安全とこの地の開拓を見守り続けてきた由緒あるお社で、境内には登山安全の象徴として知られる迫力ある大岩も祀られている。木立の清々しい空気の中で旅の無事を深く祈願したら、北西方向の「大沼国際セミナーハウス」へと美しい森の景色を楽しみながら軽やかに歩を進めよう。',
      hook: '北西方向へ徒歩約18分',
      f7_fragment: '霊峰・北海道駒ヶ岳を祀り、境内の大岩でも知られる大沼湖畔の鎮守社。',
      f7_full: '「大沼駒ヶ岳神社」の静謐な森で旅の無事を祈り、学び舎へと歩を進めた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '大沼国際セミナーハウス',
      lat: 41.999124,
      lng: 140.665342,
      address: '北海道亀田郡七飯町字大沼町127-1',
      description:
        '森と湖に囲まれたコンベンション施設（8:30〜17:00、年末年始休）。エントランスにコワーキングスペースを備え、裏手には自然豊かな大沼森林公園が広がっている。',
      clue:
        '旅の締めくくりは、豊かな森と湖に抱かれた静かな空間「大沼国際セミナーハウス」へと足を運んでみよう（8:30〜17:00、年末年始休）。木々の温もりを感じる建物のエントランスには落ち着いた休憩・交流スペースがあり、裏手には野鳥の声が響く美しい大沼森林公園の森が広がっている。清々しい森林の空気と湖畔の景色を胸いっぱいに吸い込んで、大沼公園の散歩を晴れやかに明るく締めくくろう。',
      hook: '',
      f7_fragment: '森と湖に囲まれ、コワーキングスペースや森林公園が隣接する静かな施設。',
      f7_full: '「大沼国際セミナーハウス」の豊かな森の空気に癒やされ、大沼公園の旅を終えた。',
    },
  ],
};
