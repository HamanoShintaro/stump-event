export default {
  slug: 'osatsu',
  station_order: 920,
  station: '長都',
  line: 'JR千歳線',
  area_name: '長都・勇舞',
  prefecture: '北海道',
  municipality: '千歳市',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['千歳線', '麦の香り', '公園散歩', 'カフェ', 'もりもと'],
  style_genre: 'ink_and_watercolor',
  title: '長都・麦の香り湧く千歳の街と公園散歩',
  description:
    'JR長都駅から麦香るキリンビール工場と住宅街の温かなカフェ、緑の勇舞公園、千歳の名店もりもとを巡る散策ルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Osatsu area in Chitose, Hokkaido, featuring a small red-brick train station, lush green brewery garden trees, a cozy neighborhood cafe, and sunlit park paths, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '長都の街歩きで、どの風景に惹かれましたか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '麦汁の香りと一番搾りの秘密に出会う工場見学',
      subtext: '麦芽の豊かな香りが広がる工場で、ものづくりの情熱に触れた',
      badge: {
        code: 'osatsu_malt_seeker',
        name_ja: '麦香の探求者',
        subtitle_en: 'Seeker of Golden Malt',
        description:
          'JR長都駅から西へ歩き、キリンビール北海道千歳工場で麦とホップが織りなす芳香に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden barley ears and a copper brewing kettle on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '自家栽培野菜の恵みを味わう隠れ家カフェのひととき',
      subtext: '彩り豊かな旬野菜の料理に、旅の歩みも思わずゆるんだ',
      badge: {
        code: 'osatsu_harvest_table',
        name_ja: '旬菜食卓の旅人',
        subtitle_en: 'Guest of Harvest Table',
        description:
          'JR長都駅の東側にあるDining Cafe OPAで、自家栽培の新鮮野菜を活かした一皿を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of fresh colorful garden vegetables and a ceramic pasta plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '展望の小山と木陰の遊歩道が続く勇舞公園の風',
      subtext: '住宅街に抱かれた緑の丘で、千歳の澄んだ空気を深呼吸した',
      badge: {
        code: 'osatsu_yuumai_breeze',
        name_ja: '勇舞の風の散歩者',
        subtitle_en: 'Walker of Yuumai Breeze',
        description:
          '勇舞公園の遊歩道と芝生広場を歩き、穏やかな住宅街の緑と青空に心を癒やされたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a gentle green park hill with birch trees and drifting clouds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '千歳生まれの名店の和洋菓子と焼きたてパンを選ぶ楽しさ',
      subtext: '地元の人々で賑わう名店で、ハスカップの銘菓やパンを手に入れた',
      badge: {
        code: 'osatsu_morimoto',
        name_ja: '千歳銘菓の収集家',
        subtitle_en: 'Collector of Chitose Sweets',
        description:
          'ちとせモール内の「もりもと ちとせモール店」で、千歳発祥の銘菓や焼き立てパンを選んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a delicate purple haskap berry tart and artisan bread roll on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'osatsu_complete',
    name_ja: '長都・麦香と公園の散歩者',
    subtitle_en: 'Walker of Osatsu Malt and Parks',
    description:
      'JR長都駅を起点に、麦芽香るビール工場から野菜のカフェ、勇舞公園、もりもと ちとせモール店まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem combining barley, green park hills, and a small train platform on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR長都駅',
      lat: 42.852144,
      lng: 141.623159,
      address: '北海道千歳市上長都922',
      description:
        '昭和33年（1958年）3月に仮乗降場として設置され、同年7月1日に駅として開業したJR千歳線の無人駅（終日利用可・無料）。工場エリアと住宅街を結ぶ玄関口。',
      clue:
        '昭和三十三年七月に駅として開業し、千歳市北部の工場地帯と穏やかな住宅街を結び続けてきた「JR長都駅」から楽しい街歩きと散策を始めよう（終日利用可）。澄み渡る北海道の爽やかな空気を胸いっぱいに吸い込んで西口側へゆっくり外へ出たら、まずは駅前から線路沿いを南西へ歩いて約七〜十分の場所に広がる「キリンビール北海道千歳工場」を目指してのんびり楽しく元気に笑顔で外へと歩き出そう。',
      hook: '西口側へ出て南西方向へ徒歩約7〜10分',
      f7_fragment: '昭和三十三年開業、千歳北部の工場地帯と住宅街を結ぶJR千歳線の玄関口。',
      f7_full: '「JR長都駅」の静かなホームを後にし、麦の香りが漂う千歳北部の街歩きを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: 'キリンビール北海道千歳工場',
      lat: 42.845767,
      lng: 141.61893,
      address: '北海道千歳市上長都949-1',
      description:
        '麦汁の飲み比べや試飲が楽しめる見学ツアー（要予約、20歳以上500円・20歳未満無料、月・火曜休）を実施。ショップ（9:45〜16:30）や併設レストラン「ハウベ」（11:30〜21:00・第4月曜休）も備える。',
      clue:
        '広大な敷地に建つ「キリンビール北海道千歳工場」で麦の香りと一番搾り製法の魅力に触れよう（ショップ9:45〜16:30等）。見学後は東口方面へ戻り、「Dining Cafe OPA」へ向かおう。',
      hook: '駅の東口側へ抜けて北東方向へ徒歩約22〜25分',
      f7_fragment: '麦汁の飲み比べや見学ツアーでビールづくりの技に触れられる工場。',
      f7_full: '「キリンビール北海道千歳工場」で麦芽の豊かな香りと醸造の技に魅了された。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'Dining Cafe OPA',
      lat: 42.858318,
      lng: 141.628063,
      address: '北海道千歳市長都駅前5-5-1',
      description:
        '自家栽培の新鮮野菜を使ったパスタやオムライス、ピザが人気の隠れ家的カフェレストラン（11:30〜15:30・土日祝11:00〜／17:30〜21:30、水曜・第1木曜休）。',
      clue:
        '駅東側の落ち着いた住宅街に佇むお洒落な「Dining Cafe OPA」で温かいランチや珈琲の時間をゆっくり味わおう（11:30〜15:30等、水曜等休）。自家栽培の新鮮な野菜をふんだんに使った彩り豊かなパスタやオムライス、焼きたてピザは、ひと口ごとに素材の優しさが広がり心まで満たされる。お腹がしっかり満たされたら、すぐ南東側に広がる緑豊かな「勇舞公園」へと歩いて向かおう。',
      hook: '住宅街を南東方向へ徒歩約5分',
      f7_fragment: '自家栽培の新鮮野菜を使ったパスタやオムライスが評判の隠れ家カフェ。',
      f7_full: '「Dining Cafe OPA」で旬の野菜の優しい味わいを堪能し、ほっと一息ついた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '勇舞公園',
      lat: 42.856436,
      lng: 141.631707,
      address: '北海道千歳市勇舞6-9-1',
      description:
        '勇舞エリアの住宅街に広がる広々とした都市公園（終日開放・入園無料）。整った遊歩道や展望の小山、芝生広場、遊具が揃い、四季の自然を感じながらのびやかに散策できる。',
      clue:
        '勇舞の街並みに寄り添うように広がる開放的な憩いの空間「勇舞公園」をゆっくり楽しく元気に明るく爽やかに散策しよう（終日開放・無料）。美しい芝生広場や丁寧に整備された遊歩道をたどって展望の小山へ登れば、千歳の大きな青い空と四季折々の木々が心地よい風とともに迎えてくれる。澄んだ自然の空気を胸いっぱいに吸い込んだら、ちとせモール内にある老舗「もりもと ちとせモール店」へ向かおう。',
      hook: '公園を西南西へ抜けて徒歩約5分',
      f7_fragment: '芝生広場や展望の小山、遊歩道が整い四季の自然を味わえる勇舞の公園。',
      f7_full: '「勇舞公園」の展望の小山から広い空を仰ぎ、千歳の爽やかな風を感じた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'もりもと ちとせモール店',
      lat: 42.854208,
      lng: 141.626576,
      address: '北海道千歳市勇舞8-1-1',
      description:
        '千歳発祥の老舗和洋菓子・パン店「もりもと」のちとせモール内店舗（9:00〜21:00、無休・施設に準ずる）。名物「ハスカップジュエリー」や焼きたてのパン・量り売りパンが人気。',
      clue:
        '旅の締めくくりは、千歳市に本店を構える北海道の老舗和洋菓子・パン店「もりもと ちとせモール店」へ楽しく元気に笑顔で立ち寄ろう（9:00〜21:00）。店内には北海道特産のハスカップを使った銘菓「ハスカップジュエリー」や焼きたての美味しいパンなど心ときめく素敵な品々がずらりと並んでいる。とっておきのお土産を大切に手に抱えて、長都の温かな街歩きを晴れやかに明るく笑顔で結ぼう。',
      hook: '',
      f7_fragment: '千歳発祥の老舗菓子・パン店。ハスカップジュエリーや焼きたてパンが人気。',
      f7_full: '「もりもと ちとせモール店」で千歳自慢の銘菓を選び、長都の旅を締めくくった。',
    },
  ],
};
