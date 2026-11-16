export default {
  slug: 'shikauchi',
  station_order: 988,
  station: '鹿討',
  line: 'JR富良野線',
  area_name: '鹿討農場・東1線',
  prefecture: '北海道',
  municipality: '中富良野町',
  category: 'グルメ・自然',
  budget_tier: 2,
  tags: ['富良野線', 'ドメーヌレゾン', '寺坂農園', 'ワイナリー', '鹿討農場'],
  style_genre: 'ink_and_watercolor',
  title: '鹿討農場の原風景とワイナリーを訪ねて',
  description:
    '尖り屋根待合室のJR鹿討駅から高台のラ・コリーナ、納屋カフェ・Cafe てくり、ヤギのいるドメーヌレゾン、寺坂農園へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Shikauchi Station with its pointed roof shelter in wide meadows, a hillside Italian-style farmhouse restaurant, friendly goats grazing in a sunny vineyard, and sweet Furano melons, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び鹿討を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '鹿討農場の高台の店 ラ・コリーナ',
      subtext: '大きな窓から山々を望みふらの和牛の煮込みパスタを味わった',
      badge: {
        code: 'shikauchi_lacollina',
        name_ja: '丘の上の洋食店',
        subtitle_en: 'La Collina Bistro',
        description:
          'ペンション＆レストラン ラ・コリーナでふらの和牛パスタと山の眺めを堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming plate of braised beef pasta beside a sunlit picture window overlooking mountains on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '納屋を改装した石窯ピザの Cafe てくり',
      subtext: '田園の中に佇む温かなカフェで天然酵母ピザと珈琲を楽しんだ',
      badge: {
        code: 'shikauchi_tekuri',
        name_ja: '田園の石窯納屋カフェ',
        subtitle_en: 'Barn Cafe Tekuri',
        description:
          'Cafe てくりで田園風景を眺めながら石窯焼きの天然酵母ピザや珈琲を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a rustic wooden barn cafe beside a wood-fired stone pizza oven and steaming coffee mug on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'ヤギが暮らす ドメーヌレゾン',
      subtext: 'ぶどう畑に囲まれたワイナリーでヤギやソフトクリームに癒やされた',
      badge: {
        code: 'shikauchi_domaineraison',
        name_ja: 'ぶどう畑とヤギ',
        subtitle_en: 'Vineyard and Goats',
        description:
          'Domaine Raison（ドメーヌレゾン）で美しいぶどう畑と可愛いヤギたちに出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a cheerful white goat standing among lush vineyard rows with purple grape clusters on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '朝もぎ野菜が自慢の 寺坂農園',
      subtext: '富良野メロンやとうもろこしなど感動の農産物に出会った',
      badge: {
        code: 'shikauchi_terasaka',
        name_ja: '感動野菜の直売所',
        subtitle_en: 'Terasaka Farm Stand',
        description:
          '感動野菜産直農家 寺坂農園で富良野メロンや朝もぎとうもろこしに出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden harvest box brimming with sweet Furano melons and golden corn on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shikauchi_complete',
    name_ja: '鹿討・農場とワインの旅人',
    subtitle_en: 'Explorer of Shikauchi Vineyards',
    description:
      'JR鹿討駅からラ・コリーナ、Cafe てくり、ドメーヌレゾン、寺坂農園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a pointed-roof train station, vineyard grape clusters, and a cheerful pasture goat on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR鹿討駅',
      lat: 43.387187,
      lng: 142.404541,
      address: '北海道空知郡中富良野町字中富良野鹿討農場1',
      description:
        '昭和33年（1958年）3月25日開業の無人駅（終日開放）。明治30年に札幌農学校講師・鹿討豊太郎が開いた鹿討農場に由来し、平成11年改築の尖り屋根の待合室が特徴。',
      clue:
        '昭和三十三年三月に開業し、札幌農学校講師・鹿討豊太郎が開いた農場に由来する「JR鹿討駅」から田園散策を始めよう（終日開放）。尖り屋根が特徴的な可愛らしい待合室を後にして北西方向へと外へ踏み出したら、まずは鹿討農場の高台に建つ人気店「ペンション＆レストラン ラ・コリーナ」を目指して、富良野盆地の澄んだ空気と広がる牧草地の風を感じながら軽やかな足取りで爽やかに歩き出そう。',
      hook: '駅から北西方向へ徒歩約25分',
      f7_fragment: '明治の鹿討農場に由来し、尖り屋根の可愛らしい待合室が特徴の無人駅。',
      f7_full: '「JR鹿討駅」の尖り屋根を後にし、農場とワイナリーを巡る散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'ペンション＆レストラン ラ・コリーナ',
      lat: 43.395098,
      lng: 142.387944,
      address: '北海道空知郡中富良野町字中富良野鹿討農場2',
      description:
        '鹿討農場の高台に建つレストラン（ランチ11:30〜15:00、火・水曜休・ディナー完全予約制）。大きな窓から山々を望み、ふらの和牛の煮込みパスタなど地元食材の洋食を楽しめる。',
      clue:
        '高台の「ペンション＆レストラン ラ・コリーナ」で山並みを望みつつ地元食材のランチをゆっくり楽しもう（火・水曜休）。次は南東の「Cafe てくり」へ向かおう。',
      hook: '南東方向へ徒歩約30分',
      f7_fragment: '鹿討農場の高台に建ち、大きな窓から山々を望みながら地元洋食を楽しめる店。',
      f7_full: '「ペンション＆レストラン ラ・コリーナ」で山々を望む美味しいランチを堪能した。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'Cafe てくり',
      lat: 43.395394,
      lng: 142.449314,
      address: '北海道空知郡中富良野町東5線北13',
      description:
        'のどかな田園風景の中に佇むセルフリノベーションの納屋カフェ（11:00〜16:00・L.O.15:30、日曜・月曜休）。手作りの石窯で焼く天然酵母ピザや珈琲でゆったり休憩できる。',
      clue:
        'のどかな田園風景の中に佇むセルフリノベーションの納屋カフェ「Cafe てくり」でほっと一息つこう（11:00〜16:00、日・月曜休）。手作りの石窯で焼き上げる香ばしい天然酵母ピザや近隣農家の新鮮野菜を使ったメニュー、香り高い珈琲に癒やされれば、旅の疲れも心地よく溶けていく。穏やかな休憩時間を満喫したら、南西方向の美しいぶどう畑の「Domaine Raison（ドメーヌレゾン）」へ向かおう。',
      hook: '南西方向へ徒歩約30分',
      f7_fragment: '田園に佇む納屋を改装し、手作り石窯の天然酵母ピザや珈琲を楽しめるカフェ。',
      f7_full: '「Cafe てくり」の温かな納屋カフェで石窯ピザと珈琲をいただき、旅の疲れを癒やした。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'Domaine Raison（ドメーヌレゾン）',
      lat: 43.371508,
      lng: 142.393229,
      address: '北海道空知郡中富良野町東1線北4',
      description:
        '十勝岳連峰を望むぶどう畑のワイナリー（10:00〜17:00・カフェ11:00〜16:00、不定休・冬期月〜水休あり）。ヤギの放牧・エサやり体験やワイン試飲、ヤギミルクソフトが人気。',
      clue:
        '十勝岳連峰を背景に美しいぶどう畑が広がるワイナリー「Domaine Raison（ドメーヌレゾン）」へ楽しく立ち寄ってみよう（10:00〜17:00、不定休）。敷地内では可愛いヤギたちが元気に放牧されており、エサやり体験やワイン試飲、濃厚なヤギミルクソフトクリームなど楽しみが満載だ。心和むワイナリーの風景を満喫したら、南東方向の「感動野菜産直農家 寺坂農園」へと向かおう。',
      hook: '南東方向へ徒歩約35分',
      f7_fragment: '十勝岳連峰を望むぶどう畑でヤギの放牧やワイン試飲を楽しめるワイナリー。',
      f7_full: '「Domaine Raison（ドメーヌレゾン）」のぶどう畑とヤギたちに癒やされた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '感動野菜産直農家 寺坂農園',
      lat: 43.357294,
      lng: 142.417795,
      address: '北海道空知郡中富良野町東5線北4',
      description:
        '富良野メロンや朝もぎとうもろこし、アスパラなど旬の農産物を産地直送・直売する人気農園（8:30〜17:00、6月上旬〜10月中旬無休、冬期休業）。',
      clue:
        '旅の締めくくりは、情熱あふれる農業で知られる人気直売スポット「感動野菜産直農家 寺坂農園」へ楽しく立ち寄ってみよう（6月上旬〜10月中旬8:30〜17:00、冬期休業）。甘みたっぷりの富良野メロンや朝もぎのとうもろこし、アスパラなど北の大地が育てた極上の恵みにたっぷり出会える。鹿討農場の歴史とワイン・野菜の魅力を胸いっぱいに抱いて、楽しい散歩を晴れやかに明るく結ぼう。',
      hook: '',
      f7_fragment: '富良野メロンや朝もぎとうもろこしなど旬の農産物を直売する人気農園。',
      f7_full: '「感動野菜産直農家 寺坂農園」で極上の富良野メロンに出会い、鹿討の旅を終えた。',
    },
  ],
};
