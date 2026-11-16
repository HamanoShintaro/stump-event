export default {
  slug: 'anebetsu',
  station_order: 968,
  station: '姉別',
  line: 'JR根室本線',
  area_name: '姉別',
  prefecture: '北海道',
  municipality: '浜中町',
  category: '自然・街歩き',
  budget_tier: 1,
  tags: ['根室本線', '花咲線', '姉別郵便局', '丸子小西商店', '酪農地帯'],
  style_genre: 'ink_and_watercolor',
  title: '牧草地とルパンの里の暮らしに触れる姉別散歩',
  description:
    '牧草地に囲まれた無人駅・JR姉別駅から姉別農村環境改善センター、ホクレン姉別SS、風景印のある姉別郵便局、丸子小西商店へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Anebetsu Station surrounded by vast emerald dairy pastures in Hamanaka, a rural community hall, a village post office with cattle-themed postmarks, and a warmly lit local general store, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び姉別を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '集落の拠点・姉別農村環境改善センター',
      subtext: '広大な酪農地帯の中で地域コミュニティの役割を感じた',
      badge: {
        code: 'anebetsu_center',
        name_ja: '姉別の交流拠点',
        subtitle_en: 'Anebetsu Village Hall',
        description:
          '浜中町姉別農村環境改善センターを訪れ、酪農集落の暮らしの拠点に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tidy rural community hall framed by green dairy meadows on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '酪農と生活を支えるホクレン 姉別SS',
      subtext: 'JA浜中町の姉別事業所で北海道らしい産業の現場を見た',
      badge: {
        code: 'anebetsu_hokuren',
        name_ja: '牧郷の支え処',
        subtitle_en: 'Dairy Cooperative Hub',
        description:
          'ホクレン 姉別SS（JA浜中町 姉別事業所）の前を歩き、酪農インフラの力強さを感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a red barn silo and agricultural cooperative emblem beneath northern clouds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'ウシとエゾシカの風景印がある姉別郵便局',
      subtext: '酪農の里ならではの絵柄が刻まれた郵便局に立ち寄った',
      badge: {
        code: 'anebetsu_post',
        name_ja: '牧草地の風景印',
        subtitle_en: 'Anebetsu Postmark',
        description:
          '姉別郵便局の前を訪れ、ウシ・サイロ・エゾシカを描く風景印の里に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic Japanese postcard stamped with a dairy cow, silo, and Hokkaido sika deer motif on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'ルパン三世グッズも扱う丸子小西商店',
      subtext: '地域の物資を支える温かな商店で浜中町らしいお土産を見た',
      badge: {
        code: 'anebetsu_konishi',
        name_ja: '姉別のよろず屋',
        subtitle_en: 'Konishi General Store',
        description:
          '有限会社丸子小西商店を訪れ、地域の暮らしを支える商店で素敵な品々に出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a welcoming rural general store counter stocked with colorful Hokkaido souvenirs and warm lanterns on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'anebetsu_complete',
    name_ja: '姉別・牧草の里の旅人',
    subtitle_en: 'Walker of Anebetsu Dairy Village',
    description:
      'JR姉別駅から農村環境改善センター、ホクレン姉別SS、姉別郵便局、丸子小西商店まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a dairy farm silo, a rural station sign, and a village general store on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR姉別駅',
      lat: 43.196218,
      lng: 145.194636,
      address: '北海道厚岸郡浜中町姉別3-50',
      description:
        '大正8年（1919年）11月25日開業の無人駅（終日利用可）。周囲に広大な牧草地と北海道らしいのどかな農村風景が広がる花咲線の駅となっている。',
      clue:
        '大正八年十一月に開業し、周囲を広大な牧草地と北海道らしいのどかな農村風景に囲まれた花咲線の無人駅「JR姉別駅」から楽しい町歩きを始めよう（終日利用可）。澄み切った道東の空気を胸いっぱいに吸い込んで北西方向へと外へ踏み出したら、まずは姉別地区のコミュニティ拠点である「浜中町姉別農村環境改善センター」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく外へ歩き出そう。',
      hook: '駅から北西方向へ徒歩約5分',
      f7_fragment: '広大な牧草地と北海道らしいのどかな農村風景が広がる花咲線の無人駅。',
      f7_full: '「JR姉別駅」を後にし、牧草地と集落の温かな暮らしを辿る姉別の散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '浜中町姉別農村環境改善センター',
      lat: 43.198662,
      lng: 145.191316,
      address: '北海道厚岸郡浜中町姉別3-41',
      description:
        '姉別地区のコミュニティ・農村振興の拠点施設（施設利用は予約・開館時間に準ずる・外観見学可）。広大な酪農地帯の地域住民が集う大切な施設。',
      clue:
        '姉別地区のコミュニティ拠点「浜中町姉別農村環境改善センター」の前を歩き集落の空気を感じよう（外観見学可）。次は南東の「ホクレン 姉別SS」へ向かおう。',
      hook: '南東方向へ徒歩約5分',
      f7_fragment: '姉別地区のコミュニティ活動や農村振興を支える地域密着の拠点施設。',
      f7_full: '「浜中町姉別農村環境改善センター」の前を通り、酪農集落のまとまりを感じた。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'ホクレン 姉別SS（JA浜中町 姉別事業所）',
      lat: 43.196767,
      lng: 145.195153,
      address: '北海道厚岸郡浜中町姉別3-12',
      description:
        'JA浜中町の姉別拠点として地域の酪農・生活インフラを支える給油・事業所（営業時間・定休日は店舗規定に準ずる）。牧郷の日常になくてはならない存在。',
      clue:
        'JA浜中町の姉別拠点として、地域の大切な酪農と生活のインフラを日々支え続けている「ホクレン 姉別SS（JA浜中町 姉別事業所）」の前をゆっくり歩いてみよう（営業時間店舗規定）。広々とした北海道の集落の中で力強く働く農協施設の姿を見ていると、私たちが普段口にする美味しい乳製品を支える人々の温かい営みが伝わってくる。街の力強さを感じたら、続いて南西の「姉別郵便局」へと向かおう。',
      hook: '南西方向へ徒歩約3分',
      f7_fragment: 'JA浜中町の姉別拠点として、地域の酪農と生活インフラを支える事業所。',
      f7_full: '「ホクレン 姉別SS（JA浜中町 姉別事業所）」を眺め、酪農の里の力強さを感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '姉別郵便局',
      lat: 43.194767,
      lng: 145.193842,
      address: '北海道厚岸郡浜中町姉別1-45',
      description:
        '酪農の里らしく「ウシ・サイロ・エゾシカ」を描いた風景印がある郵便局（郵便窓口平日9:00〜17:00、土日祝休）。旅の便りを出したくなる温かな窓口。',
      clue:
        '酪農の里らしく「ウシ・サイロ・エゾシカ」を描いた素敵な風景印が用意されていることで知られる「姉別郵便局」の前をゆっくり訪ねてみよう（平日9:00〜17:00、土日祝休）。平日の開局時間帯なら旅の記念に風景印をもらってはがきを出す楽しみもあり、集落の穏やかな空気に心がほっと優しく和らいでいく。牧郷の温もりに触れたら、北東側の「有限会社丸子小西商店」へと楽しく歩いて向かおう。',
      hook: '北東方向へ徒歩約1分',
      f7_fragment: '「ウシ・サイロ・エゾシカ」を描いた風景印がある酪農の里の郵便局。',
      f7_full: '「姉別郵便局」の風景印のモチーフに心和みつつ、旅の最終目的地へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '有限会社丸子小西商店',
      lat: 43.195079,
      lng: 145.19413,
      address: '北海道厚岸郡浜中町姉別1-32',
      description:
        '地域の物資を支える地元商店であり、浜中町の「ルパン三世」オリジナルグッズ取扱店にもなっている人気店（9:00〜20:00、不定休）。',
      clue:
        '旅の締めくくりは、姉別地域の暮らしと物資を温かく支え続け、浜中町の「ルパン三世」オリジナルグッズの取扱店としても知られる「有限会社丸子小西商店」へ楽しく立ち寄ろう（9:00〜20:00、不定休）。昔ながらの地元商店ならではの温もりある店内で飲み物やおやつ、浜中町ならではの素敵な記念グッズを手に取れば、旅の思い出が一層色鮮やかに輝く。姉別の優しい街歩きを晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '地域の暮らしを支え、浜中町の「ルパン三世」オリジナルグッズも扱う地元商店。',
      f7_full: '「有限会社丸子小西商店」で温かい商店の空気とグッズに出会い、姉別の旅を終えた。',
    },
  ],
};
