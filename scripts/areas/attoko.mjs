export default {
  slug: 'attoko',
  station_order: 969,
  station: '厚床',
  line: 'JR根室本線',
  area_name: '厚床',
  prefecture: '北海道',
  municipality: '根室市',
  category: '歴史・街歩き',
  budget_tier: 2,
  tags: ['根室本線', '旧標津線', '根室フットパス', '厚床蒼前神社', '東光園'],
  style_genre: 'ink_and_watercolor',
  title: '旧標津線分岐の記憶と北の宿場町を巡る厚床散歩',
  description:
    'かつてJR標津線が分岐した要衝・JR厚床駅から人気食堂の東光園、厚床郵便局、セイコーマート、厚床蒼前神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Attoko Station in Nemuro where the old Shibetsu Line once branched off, a cozy country diner along the northern highway, and Attoko Sozen Shrine surrounded by autumn grass, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び厚床を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅近くで定食や焼肉が人気の東光園',
      subtext: '厚床の街角で温かいラーメンや定食を味わい活力を得た',
      badge: {
        code: 'attoko_tokoen',
        name_ja: '厚床の駅前食堂',
        subtitle_en: 'Attoko Diner',
        description:
          '東光園で厚床駅近くの地元に愛される温かい定食やラーメンを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming ramen bowl and grilled meat plate on a wooden diner counter on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '市街地中心部に佇む厚床郵便局',
      subtext: 'かつて宿場町として栄えた厚床の穏やかな街並みを感じた',
      badge: {
        code: 'attoko_post',
        name_ja: '北の宿場の窓口',
        subtitle_en: 'Attoko Post Office',
        description:
          '厚床郵便局の前を歩き、かつての交通の要衝・厚床市街の暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a northern town postbox beside a wooden railway milestone on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '国道沿いのセイコーマート 根室厚床店',
      subtext: '日本最東端の街の入口で温かい飲み物や北海道グルメを選んだ',
      badge: {
        code: 'attoko_seicomart',
        name_ja: '根室路の補給処',
        subtitle_en: 'Nemuro Highway Stop',
        description:
          'セイコーマート 根室厚床店で北海道定番の温かい飲み物やおやつを手にしたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming coffee cup and fresh rice ball beside a milestone pointing east on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '大正八年創祀の鎮守・厚床蒼前神社',
      subtext: '例大祭の山車や獅子舞の伝統を受け継ぐ社に手を合わせた',
      badge: {
        code: 'attoko_sozen_shrine',
        name_ja: '蒼前神社の祈り',
        subtitle_en: 'Attoko Sozen Shrine',
        description:
          '大正八年創祀の厚床蒼前神社に参拝し、地域の伝統と歴史に手を合わせたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a stone Shinto torii gate and traditional lion dance motif on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'attoko_complete',
    name_ja: '厚床・分岐駅と宿場町の旅人',
    subtitle_en: 'Explorer of Attoko Junction',
    description:
      'JR厚床駅から東光園、厚床郵便局、セイコーマート、厚床蒼前神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an old railway junction sign, a steaming diner bowl, and a Shinto torii gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR厚床駅',
      lat: 43.228363,
      lng: 145.252379,
      address: '北海道根室市厚床1-211',
      description:
        '大正8年（1919年）11月25日開業、かつてJR標津線が分岐していた交通の要衝（終日利用可）。現在は根室フットパス（厚床パス）の発着点としても親しまれている。',
      clue:
        '大正八年十一月に開業し、かつてJR標津線が分岐していた交通の要衝であり、現在は根室フットパス（厚床パス）の発着点としても親しまれる「JR厚床駅」から楽しい散策を始めよう（終日利用可）。道東の広い空と鉄道の記憶に思いを馳せながら北の方向へと外へ踏み出したら、まずは駅近くで人気の地元食堂「東光園」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく元気に外へ歩き出そう。',
      hook: '駅から北方向へ徒歩約1〜2分',
      f7_fragment: 'かつてJR標津線が分岐し、今は根室フットパスの発着点にもなっている駅。',
      f7_full: '「JR厚床駅」を後にし、旧標津線分岐の記憶と北の宿場町を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '東光園',
      lat: 43.229384,
      lng: 145.252064,
      address: '北海道根室市厚床1-7',
      description:
        '厚床駅近くで定食やラーメン、焼肉を提供する地元で人気の食堂（12:00〜14:00・18:00〜翌2:00、日曜休）。温かい手料理が道東を旅する人々を迎えてくれる。',
      clue:
        '厚床駅近くの人気食堂「東光園」で温かいラーメンやボリュームたっぷりの美味しい定食を楽しく味わおう（日曜休）。お腹を満たしたら北東の「厚床郵便局」へ向かおう。',
      hook: '北東方向へ徒歩約1〜2分',
      f7_fragment: '厚床駅近くで定食やラーメン、焼肉が味わえる地元に愛される人気の食堂。',
      f7_full: '「東光園」の温かい食事で元気をもらい、厚床市街地の東へと歩き出した。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '厚床郵便局',
      lat: 43.230129,
      lng: 145.252488,
      address: '北海道根室市厚床1-16-3',
      description:
        '厚床市街地の中心部に位置する郵便局（郵便窓口平日9:00〜17:00、土日祝休）。かつて宿場町・鉄道分岐点として栄えた厚床の日常を今に伝えている。',
      clue:
        'かつて鉄道の分岐点および北の宿場町として賑わった厚床市街地の中心部に佇む「厚床郵便局」の前をゆっくり楽しく歩いてみよう（平日9:00〜17:00、土日祝休）。道東の澄んだ空気と素朴な街並みを感じながら一歩ずつ静かに歩みを進めると、遠く根室管内の玄関口で営まれてきた暮らしの温もりがじんわり伝わってくる。街の日常に触れたら、東方向へ進み「セイコーマート 根室厚床店」へ向かおう。',
      hook: '東方向へ徒歩約6〜7分',
      f7_fragment: '宿場町・鉄道分岐点として栄えた厚床市街地の中心部で暮らしを支える郵便局。',
      f7_full: '「厚床郵便局」の前を歩き、かつての交通の要衝・厚床の穏やかな街並みを感じた。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: 'セイコーマート 根室厚床店',
      lat: 43.231541,
      lng: 145.259583,
      address: '北海道根室市厚床1-219-14',
      description:
        '国道沿いに位置し、地域の生活と旅人の補給を支える北海道定番のコンビニエンスストア（7:00〜20:00、年中無休・元日等変更の場合あり）。',
      clue:
        '国道沿いに立ち、地域住民の暮らしと根室方面へ向かう旅人の心強い補給拠点となっている「セイコーマート 根室厚床店」へ気軽に楽しく立ち寄ってみよう（7:00〜20:00）。店内には北海道ならではの飲み物やお菓子、ホットシェフの温かい美味しい品々が並び、冷えた体や小腹を優しく満たしてくれる。温かいコーヒーや旅のお供を手にしたら、西の方向へ進んで「厚床蒼前神社」へと向かおう。',
      hook: '西方向へ徒歩約7分',
      f7_fragment: '国道沿いで根室路の旅人と地域の暮らしを支える北海道定番のコンビニ。',
      f7_full: '「セイコーマート 根室厚床店」で温かい飲み物を手に入れ、厚床の鎮守へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '厚床蒼前神社',
      lat: 43.231177,
      lng: 145.25286,
      address: '北海道根室市厚床1-70',
      description:
        '大正8年（1919年）創祀の地域の鎮守（常時参拝可・無休）。毎年9月上旬の例大祭では山車や獅子舞が地区内を練り歩く伝統が大切に受け継がれている。',
      clue:
        '旅の締めくくりは、大正八年に創祀され毎年九月上旬の例大祭では山車や獅子舞が地区内を練り歩く伝統を受け継ぐ「厚床蒼前神社」へ丁寧に心を込めて参拝しよう（常時参拝可）。静かな木立に守られた境内でそっと深く手を合わせれば、百年以上にわたって厚床の人々と鉄道の歩みを見守り続けてきた神社の厳かな空気が胸いっぱいに沁みていく。清々しい祈りとともに、厚床の街歩きを晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '大正八年創祀、九月の例大祭で山車や獅子舞が受け継がれる厚床の鎮守。',
      f7_full: '「厚床蒼前神社」の静かな杜に手を合わせ、北の宿場町・厚床の旅を終えた。',
    },
  ],
};
