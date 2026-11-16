export default {
  slug: 'royce_town',
  station_order: 913,
  station: 'ロイズタウン',
  line: 'JR札沼線',
  area_name: 'ロイズタウン・甘い香りの旅',
  prefecture: '北海道',
  municipality: '当別町',
  category: 'カカオ工場と北欧道の駅',
  budget_tier: 2,
  tags: ['北海道', '当別町', 'ロイズタウン駅', 'ロイズ', '道の駅とうべつ'],
  style_genre: 'ink_and_watercolor',
  title: 'ロイズタウン・カカオの香りと北欧の道の駅',
  description:
    '令和四年開業の新駅「JRロイズタウン駅」から、「ロイズ ローズガーデン」、体験型施設「ロイズカカオ＆チョコレートタウン」、「ロイズタウン工場直売店」、「北欧の風 道の駅とうべつ」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Royce Town Tobetsu from modern chocolate-accented railway station and blooming rose garden to grand cacao factory tour hall, bakery shop counter and Nordic timber roadside station, full bleed, no text, no letters.',
  question: '令和四年開業のロイズタウン駅からバラの庭や体験型チョコ工場、北欧風の道の駅を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: 'JR北海道在来線二十年ぶりの新駅「JRロイズタウン駅」',
      subtext: '当別町とロイズコンフェクトが連携して設置した請願駅から甘い旅が始まった。',
      badge: {
        code: 'royce_town_station',
        name_ja: 'ロイズタウン・新駅の旅人',
        subtitle_en: 'Royce Town New Station Visitor',
        description: '令和四年開業のJRロイズタウン駅に降り立った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a sleek modern chocolate-brown and cream railway station building, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'カカオとチョコの魅力を学ぶ「ロイズカカオ＆チョコレートタウン」',
      subtext: 'ゲームや展示、工場ライン見学を通じてカカオからチョコができるまでを楽しく学べた。',
      badge: {
        code: 'royce_town_museum',
        name_ja: 'ロイズタウン・カカオの探求者',
        subtitle_en: 'Cacao & Chocolate Explorer',
        description: 'ロイズカカオ＆チョコレートタウンで工場見学を体験した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting cacao pods, glossy chocolate bars and conveyor gear motifs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '限定パンやソフトが揃う「ロイズタウン工場直売店」',
      subtext: 'ジャンボメロンパンや限定ピザ、駅モチーフ限定グッズなどワクワクが止まらなかった。',
      badge: {
        code: 'royce_town_shop',
        name_ja: 'ロイズタウン・工場直売の甘味',
        subtitle_en: 'Royce Factory Shop Lover',
        description: 'ロイズタウン工場直売店で限定パンやチョコに出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an oversized golden melonpan pastry and dark chocolate soft-serve cone, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'スウェーデン姉妹都市にちなむ「北欧の風 道の駅とうべつ」',
      subtext: '北欧風の洗練された建物で地元食材イタリアンや農産物直売所を楽しめた。',
      badge: {
        code: 'royce_town_michinoeki',
        name_ja: 'ロイズタウン・北欧道の駅',
        subtitle_en: 'Nordic Tobetsu Michinoeki Visitor',
        description: '北欧の風 道の駅とうべつで当別の食と文化に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a red-and-timber Swedish-style roadside hall with Dala horse motif, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'royce_town_master',
    name_ja: 'ロイズタウン・甘い香りの旅人',
    subtitle_en: 'Royce Town Chocolate & Nordic Explorer',
    description: 'JRロイズタウン駅からローズガーデン、チョコレートタウン、工場直売店、道の駅とうべつまでを巡った証',
    image_prompt:
      'A circular emblem combining sleek chocolate station, cacao pods, blooming roses and Nordic timber hall, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JRロイズタウン駅',
      prefecture: '北海道',
      city: '当別町',
      description:
        '2022年（令和4年）3月12日開業、当別町とロイズコンフェクトが連携して設置した請願駅（終日利用可・無料）。JR北海道在来線では20年ぶりの新駅として注目された。',
      address: '北海道石狩郡当別町当別太1225-9',
      lat: 43.180011,
      lng: 141.436508,
      clue:
        '令和四年三月にJR北海道の在来線では二十年ぶりの新駅として華々しく誕生した「JRロイズタウン駅」から甘い香りの散策旅を始めよう（終日利用可）。当別町とロイズコンフェクトが連携して設置した請願駅らしいお洒落で清潔なホームをゆっくり後にしたら、まずは徒歩約七分ほどの工場前に美しく広がる「ロイズ ローズガーデン」を目指してのんびり楽しく元気に笑顔で外へと爽やかに歩いて出掛けよう。',
      surprise: 'JR北海道在来線で二十年ぶりの新駅という話題性と、駅を出た瞬間から漂う甘い期待感に胸が躍った。',
      hook: 'JRロイズタウン駅を出たら、徒歩約七分の「ロイズ ローズガーデン」へ向かおう。',
      f7_fragment: '令和四年開業、当別町とロイズが連携して設けた在来線二十年ぶりの新駅。',
      f7_full: '「JRロイズタウン駅」に降り立ち、カカオの香りと北欧の道の駅を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Royce Town Station sleek contemporary chocolate-and-cream railway platform amidst open Tobetsu countryside, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: 'ロイズ ローズガーデン（ロイズタウン工場）',
      prefecture: '北海道',
      city: '当別町',
      description:
        'ロイズタウン工場の店舗前に広がる無料ガーデン（冬季は積雪期）。初夏から夏にかけて100種以上のバラや宿根草が咲き誇り、工場散策のフォトスポットとして親しまれている。',
      address: '北海道石狩郡当別町ロイズタウン1-1',
      lat: 43.182723,
      lng: 141.432232,
      clue:
        '工場前の「ロイズ ローズガーデン」を歩こう（見学無料）。初夏から夏に百種以上のバラや宿根草が咲き誇る華やかな庭だ。次は「ロイズカカオ＆チョコレートタウン」へ。',
      surprise: 'チョコレート工場の目の前に百種以上ものバラや宿根草が咲き誇る美しい庭園が広がっていて驚いた。',
      hook: 'ローズガーデンを歩いたら、体験施設「ロイズカカオ＆チョコレートタウン」へ向かおう。',
      f7_fragment: '工場の店舗前に広がり、初夏〜夏に百種以上のバラが咲く無料庭園。',
      f7_full: '「ロイズ ローズガーデン」の鮮やかな花々を眺め、工場体験への期待が膨らんだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Royce Rose Garden vibrant flowerbeds of blooming pink and cream roses in front of the chocolate factory, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: 'ロイズカカオ＆チョコレートタウン',
      prefecture: '北海道',
      city: '当別町',
      description:
        '2023年8月グランドオープンの体験型施設（10:00〜17:00・最終入場15:00、不定休、大人1,200円・こども500円・3歳以下無料）。カカオ栽培からチョコレート製造までを展示や工場ライン見学で楽しく学べる。',
      address: '北海道石狩郡当別町ロイズタウン1-1',
      lat: 43.182772,
      lng: 141.432117,
      clue:
        '令和五年八月にグランドオープンした体験型施設「ロイズカカオ＆チョコレートタウン」へさっそく入ってみよう（10:00〜17:00、大人1,200円）。カカオの栽培から美味しいチョコレートが出来上がるまでの物語を、楽しいゲームや迫力満点の工場ライン見学を通じて五感いっぱいに学べるのが実に魅力的だ。カカオの奥深さに感動したら、1階の「ロイズタウン工場直売店」へと楽しく向かおう。',
      surprise: 'ゲーム感覚の展示と大迫力の工場ライン見学で、カカオがチョコレートになる工程を大人も夢中で楽しめた。',
      hook: '体験展示を満喫したら、1階の「ロイズタウン工場直売店」へ向かおう。',
      f7_fragment: 'カカオ栽培から製造までを展示と工場ライン見学で学べる体験型施設。',
      f7_full: '「ロイズカカオ＆チョコレートタウン」で甘い香りと迫力の製造工程を体感した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Royce Cacao and Chocolate Town bright modern interactive chocolate exhibition hall and cacao tree display, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: 'ロイズタウン工場直売店',
      prefecture: '北海道',
      city: '当別町',
      description:
        '工場1階の無料入場エリアにある直売店（9:00〜18:00、無休）。200種以上のチョコ・焼き菓子に加え、直売所限定の「ジャンボメロンパン」や「ロイズタウンピザ」、駅モチーフ限定グッズも揃う。',
      address: '北海道石狩郡当別町ロイズタウン1-1',
      lat: 43.182723,
      lng: 141.432232,
      clue:
        '無料エリアの1階に広がる「ロイズタウン工場直売店」でお土産選びを存分に楽しもう（9:00〜18:00、無休）。二百種類以上の定番チョコや焼き菓子はもちろん、通常の約四倍サイズの「ジャンボメロンパン」や限定の「ロイズタウンピザ」、ファームトゥーバーチョコのソフトクリーム、駅限定グッズまでずらりと並ぶ。甘い幸せを抱えたら、東の「北欧の風 道の駅とうべつ」へと楽しく向かおう。',
      surprise: '二百種以上の品揃えに加え、直売所限定のジャンボメロンパンや駅グッズなどここでしか出会えない魅力が満載だった。',
      hook: '工場直売店で甘いお土産を選んだら、東へ進む「北欧の風 道の駅とうべつ」へ向かおう。',
      f7_fragment: '二百種以上の菓子や限定ジャンボメロンパンが揃う工場1階の直売店。',
      f7_full: '「ロイズタウン工場直売店」で限定パンとスイーツを手に入れ、大満足の買い物となった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Royce Town Factory Direct Shop bustling bakery counter with jumbo melonpan and glossy chocolate gift boxes, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: '北欧の風 道の駅とうべつ',
      prefecture: '北海道',
      city: '当別町',
      description:
        '国道337号沿いの北欧風道の駅（3〜11月9:00〜17:00・無休、12〜2月10:00〜16:00・水曜休等）。姉妹都市スウェーデン・レクサンドにちなみ、「カフェ テルツィーナ」の地元食材イタリアンや農産物直売所を備える。',
      address: '北海道石狩郡当別町当別太774-11',
      lat: 43.177209,
      lng: 141.448056,
      clue:
        '旅の締めくくりは、ロイズタウン駅から東へ国道337号沿いに立つ「北欧の風 道の駅とうべつ」で美味しい食事を楽しもう（3〜11月9:00〜17:00等）。姉妹都市スウェーデン・レクサンドにちなんだ北欧風の美しい建物内では、「カフェ テルツィーナ」による地元食材を活かした本格イタリアンや農産物直売所が温かく迎えてくれる。当別ならではの豊かな恵みを味わって、旅を心地よく結ぼう。',
      surprise: '姉妹都市スウェーデンにちなんだ北欧風の建物の洗練された雰囲気と、地元食材イタリアンの美味しさが素敵だった。',
      hook: '',
      f7_fragment: 'スウェーデン姉妹都市にちなみ地元食材イタリアンも味わえる北欧風道の駅。',
      f7_full: '「北欧の風 道の駅とうべつ」で当別の食の恵みを堪能し、甘い旅を締めくくった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Michi no Eki Tobetsu Nordic-inspired timber building serving fresh Hokkaido Italian lunch beside open fields, no text, no letters.',
    },
  ],
};
