export default {
  slug: 'nishimizuho',
  station_order: 978,
  station: '西瑞穂',
  line: 'JR富良野線',
  area_name: '西神楽',
  prefecture: '北海道',
  municipality: '旭川市',
  category: '自然・歴史',
  budget_tier: 1,
  tags: ['富良野線', '林産試験場', '神楽神社', '木工', '旭川市'],
  style_genre: 'ink_and_watercolor',
  title: '西瑞穂の田園と木の恵みに触れる北国の道',
  description:
    '田園に佇む無人駅・JR西瑞穂駅から瑞穂会館、林産試験場 木と暮らしの情報館、長い参道の神楽神社、西神楽グリーンツーリズムセンターへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nishi-Mizuho Station with a small wooden platform amid wide Hokkaido rice fields, a modern timber architecture forestry exhibition hall, and a long tree-lined Shinto shrine approach, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び西瑞穂を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '農村集落を支える瑞穂会館',
      subtext: '西神楽瑞穂地区の暮らしと地域のつながりを感じた',
      badge: {
        code: 'nishimizuho_kaikan',
        name_ja: '瑞穂の農村拠点',
        subtitle_en: 'Mizuho Village Hall',
        description:
          '瑞穂会館の前を歩き、開拓から続く農村集落の温かな暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tidy rural community hall surrounded by golden rice paddies on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '道産木材の魅力を伝える木と暮らしの情報館',
      subtext: '林産試験場内の施設で集成材建築や木工の知恵に触れた',
      badge: {
        code: 'nishimizuho_forestry',
        name_ja: '北の木の知恵',
        subtitle_en: 'Hokkaido Timber Hall',
        description:
          '林産試験場 木と暮らしの情報館を訪れ、道産木材の建築と木工文化を学んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of graceful curved laminated timber beams and wooden craft joinery on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '約260mの参道が続く歴史ある神楽神社',
      subtext: '木々に囲まれたまっすぐな参道を進み厳かな社殿に参拝した',
      badge: {
        code: 'nishimizuho_kagura_shrine',
        name_ja: '森の参道の鎮守',
        subtitle_en: 'Kagura Shrine Approach',
        description:
          '神楽神社に参拝し、約260mのまっすぐな森の参道で心を整えたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a long straight forest shrine path leading toward a wooden torii gate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '西神楽グリーンツーリズムセンター',
      subtext: 'ウッドデッキや直売所で地元農産物と甘いお土産に出会った',
      badge: {
        code: 'nishimizuho_greentourism',
        name_ja: '西神楽の恵み',
        subtitle_en: 'Nishi-Kagura Harvest',
        description:
          '西神楽グリーンツーリズムセンターで地元農産物や焼きたてアップルパイに出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a golden flaky apple pie and fresh harvest basket on a timber deck on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishimizuho_complete',
    name_ja: '西瑞穂・田園と木工の旅人',
    subtitle_en: 'Explorer of Nishi-Mizuho',
    description:
      'JR西瑞穂駅から瑞穂会館、木と暮らしの情報館、神楽神社、グリーンツーリズムセンターまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a rural rice-field station, timber craft joinery, and a long forest shrine path on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西瑞穂駅',
      lat: 43.702609,
      lng: 142.381868,
      address: '北海道旭川市西神楽1線9',
      description:
        '広大な田園風景の中に板張りホームと小さな待合室が佇むJR富良野線の無人駅（終日利用可）。国道237号（富良野国道）に並行し、北国の農村の原風景が広がる。',
      clue:
        '広大な田園風景の中に素朴な板張りホームと小さな待合室が佇むJR富良野線の無人駅「JR西瑞穂駅」から楽しい散策を始めよう（終日利用可）。富良野国道に並行して広がる北国の美しい農村の原風景を眺めながら南方向へと外へ踏み出したら、まずは開拓から続く瑞穂地区の暮らしを支えてきた地域の拠点「瑞穂会館」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく元気に外へと歩き出そう。',
      hook: '駅から南方向へ徒歩約4分',
      f7_fragment: '広大な田園風景の中に板張りホームと待合室が佇む北国の無人駅。',
      f7_full: '「JR西瑞穂駅」の板張りホームを後にし、田園と木の恵みに触れる旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '瑞穂会館',
      lat: 43.701055,
      lng: 142.381912,
      address: '北海道旭川市西神楽1線10-174-13',
      description:
        '西神楽の「瑞穂」地区の暮らしと地域コミュニティを支えてきた自治会館（外観見学自由）。開拓時代から続く農村集落のまとまりを伝えている。',
      clue:
        '農村集落のコミュニティ拠点「瑞穂会館」の前をゆっくり歩き、開拓の歩みと暮らしを感じよう（外観見学自由）。次は南の「林産試験場 木と暮らしの情報館」へ向かおう。',
      hook: '南方向へ徒歩約4分',
      f7_fragment: '開拓から続く西神楽「瑞穂」地区の暮らしと絆を支えてきた自治会館。',
      f7_full: '「瑞穂会館」の前を通り、農村集落で大切に受け継がれてきた地域の絆を感じた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '林産試験場 木と暮らしの情報館',
      lat: 43.698522,
      lng: 142.382413,
      address: '北海道旭川市西神楽1線10',
      description:
        '北海道立総合研究機構 森林研究本部 林産試験場内にある展示施設（9:00〜17:00、4月下旬〜10月上旬開館・冬季休館）。道産木材の集成材建築や木工文化を学べる。',
      clue:
        '北海道立総合研究機構 林産試験場内にある展示施設「林産試験場 木と暮らしの情報館」をゆっくり楽しく訪ねてみよう（4月下旬〜10月上旬、冬季休館）。美しい道産木材を活かしたダイナミックな集成材建築や、北国の森と木工の奥深い知恵に触れる素晴らしい展示は大人も子どもも夢中になる魅力に満ちている。木の温もりに深く感動したら、国道237号沿いを南東へ進み「神楽神社」へと元気に歩こう。',
      hook: '国道237号沿いを南東方向へ徒歩約35分',
      f7_fragment: '道産木材の集成材建築や北国の木工・木の文化を学べる林産試験場の展示館。',
      f7_full: '「林産試験場 木と暮らしの情報館」で道産木材の美しい建築と知恵に触れた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '神楽神社',
      lat: 43.679848,
      lng: 142.399357,
      address: '北海道旭川市西神楽2線15-273-1',
      description:
        '明治期から続く西神楽地域の歴史ある村社（終日参拝可・無休）。天照皇大神・八幡大神・春日大神を祀り、約260mもの木々に囲まれたまっすぐな参道が圧巻。',
      clue:
        '明治期から西神楽地域の人々に親しまれてきた歴史ある村社「神楽神社」へ丁寧に心を込めてゆっくりと参拝しよう（終日参拝可）。社殿へと続く約二百六十メートルもの木々に囲まれたまっすぐな参道は息をのむほど厳かで、一歩ずつ進むごとに日常の雑念がすっと心地よく洗われていく。清々しい気持ちで手を合わせたら、南の「西神楽グリーンツーリズムセンター（キャンプゼロ）」へと歩いて向かおう。',
      hook: '南方向へ徒歩約12分',
      f7_fragment: '明治期創祀、約260mもの木々に囲まれたまっすぐな参道が圧巻の歴史ある神社。',
      f7_full: '「神楽神社」の長い森の参道を歩き、厳かな空気の中で旅の無事を祈った。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '西神楽グリーンツーリズムセンター（キャンプゼロ）',
      lat: 43.672382,
      lng: 142.399335,
      address: '北海道旭川市西神楽2線16-278-3',
      description:
        '展望台付きウッドデッキや芝生広場を備えた交流拠点（売店・かぐらじゅ西神楽店等11:00〜16:00、月曜休・季節変動あり）。地元農産物やアップルパイを購入できる。',
      clue:
        '旅の締めくくりは、展望台付きウッドデッキや芝生広場を備えた地域の交流拠点「西神楽グリーンツーリズムセンター（キャンプゼロ）」へ楽しく立ち寄ろう（売店11:00〜16:00、月曜休）。施設内の直売所や人気店では西神楽の豊かな大地で育まれた新鮮な農産物や、甘い香りの焼きたてアップルパイなどのお土産が手に入る。田園と木の恵みに満たされた北国の散歩を、晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: 'ウッドデッキを備え、地元農産物やアップルパイも買える西神楽の交流拠点。',
      f7_full: '「西神楽グリーンツーリズムセンター」で地元のお土産に出会い、旅を終えた。',
    },
  ],
};
