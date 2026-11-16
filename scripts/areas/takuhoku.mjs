export default {
  slug: 'takuhoku',
  station_order: 911,
  station: '拓北',
  line: 'JR札沼線',
  area_name: '拓北・天然酵母パンと公園並木',
  prefecture: '北海道',
  municipality: '札幌市北区',
  category: 'ベーカリーとトレインビュー',
  budget_tier: 2,
  tags: ['北海道', '札幌市北区', '拓北駅', '天然酵母パン', '拓北公園'],
  style_genre: 'ink_and_watercolor',
  title: '拓北・天然酵母パンと公園の並木をめぐる旅',
  description:
    'ひまわり団地造成に伴い誕生した「JR拓北駅」から、手作りスイーツ「スイーツピース」、一軒家カフェ「cafe olive」、人気店「天然酵母パン 伊久里」、列車を望む「拓北公園」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Takuhoku Sapporo from suburban railway station and cozy patisserie counter to charming one-house Italian cafe, rustic natural-yeast bakery and expansive green park with train passing beside trees, full bleed, no text, no letters.',
  question: '団地とともに発展した拓北の駅から駅近スイーツや一軒家カフェ、天然酵母パン、拓北公園を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「幸せカタラーナ」など手作りスイーツの「スイーツピース」',
      subtext: '駅から歩いてすぐの場所で、温かい想いが込められた焼き菓子やスイーツに出会えた。',
      badge: {
        code: 'takuhoku_sweetspiece',
        name_ja: '拓北・幸せスイーツの恵み',
        subtitle_en: 'Sweets Piece Visitor',
        description: 'スイーツピースで幸せカタラーナなどの手作り菓子に出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting caramelized custard catalana and lemon glaze cakes on a warm wooden tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '本格パスタと自家製ジェラートの一軒家「cafe olive」',
      subtext: '落ち着いた一軒家の空間で味わう前菜付きランチと自家焙煎珈琲が贅沢だった。',
      badge: {
        code: 'takuhoku_olive',
        name_ja: '拓北・一軒家カフェのランチ',
        subtitle_en: 'Cafe Olive Diner',
        description: 'cafe oliveで本格パスタランチやジェラートを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a plate of fresh Italian pasta beside a cup of espresso and gelato scoop, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '道産小麦と天然酵母のクロワッサン「天然酵母パン 伊久里」',
      subtext: '朝から焼きたての香りが漂う人気店で、カリッと香ばしいパンに感動した。',
      badge: {
        code: 'takuhoku_ikuri',
        name_ja: '拓北・天然酵母パンの香り',
        subtitle_en: 'Ikuri Natural Bakery Lover',
        description: '天然酵母パン 伊久里で道産小麦のクロワッサンを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting crisp flaky croissants and rustic sourdough loaves in a woven basket, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'JR学園都市線の列車を望む約4haの「拓北公園」',
      subtext: '広々とした芝生と緑の向こうを走る列車を眺め、爽やかな休日気分を味わえた。',
      badge: {
        code: 'takuhoku_park',
        name_ja: '拓北・列車を望む公園散歩',
        subtitle_en: 'Takuhoku Park Train Watcher',
        description: 'トレインビューも楽しめる広大な拓北公園を散策した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a passenger train gliding past a sunny green park meadow and tall trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'takuhoku_master',
    name_ja: '拓北・酵母と緑の街歩き',
    subtitle_en: 'Takuhoku Bakery & Park Stroller',
    description: 'JR拓北駅からスイーツピース、cafe olive、天然酵母パン 伊久里、拓北公園までを巡った証',
    image_prompt:
      'A circular emblem combining caramelized catalana, Italian pasta plate, flaky croissant and commuter train beside green park trees, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR拓北駅',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1967年（昭和42年）12月15日、ひまわり団地造成に伴い請願駅「東篠路駅」として開業、1995年現駅名へ改称・複線化（終日利用可・無料）。住宅街の暮らしを支える駅。',
      address: '北海道札幌市北区拓北6条3-9-1',
      lat: 43.155589,
      lng: 141.381069,
      clue:
        '昭和四十二年十二月に「ひまわり団地」の造成に伴い請願駅「東篠路駅」として開業し、平成七年に現在の駅名へ改称・複線化された「JR拓北駅」から町歩きと散策を始めよう（終日利用可）。暮らしの温もりを感じる静かな住宅街の駅舎をゆっくり後にしたら、まずは歩いて一〜二分の場所にある手作りスイーツ専門店「スイーツピース」を目指してのんびり楽しく元気に笑顔で外へと爽やかに歩いて出掛けよう。',
      surprise: '団地の誕生とともに請願駅「東篠路駅」として生まれ、複線化を経て街とともに育ってきた駅の姿が温かかった。',
      hook: 'JR拓北駅を出たら、徒歩約二分の「スイーツピース」へ向かおう。',
      f7_fragment: '昭和四十二年ひまわり団地造成に伴い「東篠路駅」として開業した駅。',
      f7_full: '「JR拓北駅」に降り立ち、天然酵母パンと一軒家カフェ、緑の公園を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Takuhoku Station clean suburban railway station beside peaceful Sapporo residential streets, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'スイーツピース',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        'JR拓北駅から徒歩約1〜2分の手作りスイーツ専門店（10:00〜17:00、日祝・お盆・年末年始休）。「幸せカタラーナ」「幸せレモンケーキ」「幸せカシュカシュ」などが人気。',
      address: '北海道札幌市北区拓北6条2-7-14',
      lat: 43.155715,
      lng: 141.380115,
      clue:
        '駅徒歩二分の「スイーツピース」へ寄ろう（10:00〜17:00、日祝休）。「幸せカタラーナ」やレモンケーキなど手作りスイーツが人気だ。次は「cafe olive」へ。',
      surprise: '駅からすぐの温かいお店に「幸せカタラーナ」など心のこもった手作り菓子が並び、優しい気持ちになれた。',
      hook: 'スイーツピースでお菓子を見たら、北西の一軒家「cafe olive」へ向かおう。',
      f7_fragment: '「幸せカタラーナ」やレモンケーキを手作りで届ける駅近スイーツ専門店。',
      f7_full: '「スイーツピース」で優しさの詰まった手作りスイーツに出会い、心がほっこりした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Sweets Piece warm neighborhood patisserie display with caramelized catalana tarts and glazed lemon cakes, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'cafe olive',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        'JR拓北駅から徒歩約7分の落ち着いた一軒家カフェ（11:00〜16:00・L.O.15:00、日月休・月曜以外の祝日営業）。本格パスタ・ピッツァ・ニョッキのランチセットや自家製ジェラートが人気。',
      address: '北海道札幌市北区拓北7条2-1-3',
      lat: 43.15752,
      lng: 141.37679,
      clue:
        '落ち着いた住宅街に佇む一軒家カフェ「cafe olive」でゆっくりと美味しいランチを楽しもう（11:00〜16:00、日月休）。本格的なパスタやピッツァ、ニョッキに前菜とデザートが付く満足感たっぷりのランチセットや、自家製ジェラートと自家焙煎珈琲はどれも実に丁寧な味わいで、つい長居したくなる居心地の良さだ。お腹をしっかり満たしたら、「天然酵母パン 伊久里」へ向かおう。',
      surprise: '住宅街の一軒家カフェで、本格的なパスタランチと自家製ジェラート・自家焙煎珈琲まで味わえて大満足だった。',
      hook: 'cafe oliveで食事を楽しんだら、東側の「天然酵母パン 伊久里」へ向かおう。',
      f7_fragment: '本格パスタ・ピッツァや自家製ジェラートが人気の落ち着いた一軒家カフェ。',
      f7_full: '「cafe olive」の心地よい空間で本格パスタと珈琲を堪能し、豊かな時間を過ごした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cafe Olive charming residential house cafe dining table with freshly plated Italian pasta and espresso, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '天然酵母パン 伊久里',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        'JR拓北駅北口から徒歩約5分の人気ベーカリー（7:00〜17:00売切次第終了、火曜休・祝日の場合営業）。北海道産小麦と天然酵母を使ったパンやカリッとした食感のクロワッサンが評判。',
      address: '北海道札幌市北区拓北8条3-1-6',
      lat: 43.15888,
      lng: 141.381015,
      clue:
        '北海道産小麦と天然酵母を使ったパン作りで多くの地元ファンを魅了する人気ベーカリー「天然酵母パン 伊久里」へ立ち寄ろう（7:00〜17:00、火曜休）。朝早くから次々と焼き上げられる風味豊かなパンの数々はどれも実に滋味深く、なかでも外はカリッと中はもっちり香ばしいクロワッサンは一度食べたら忘れられない絶品だ。お気に入りのパンを手に入れたら、最後は広大な「拓北公園」へと向かおう。',
      surprise: '北海道産小麦と天然酵母で焼き上げられたクロワッサンの香ばしさと噛むほどに広がる甘みが素晴らしかった。',
      hook: '天然酵母パン 伊久里でパンを選んだら、南東の「拓北公園」へ向かおう。',
      f7_fragment: '北海道産小麦と天然酵母のパンや香ばしいクロワッサンが評判のベーカリー。',
      f7_full: '「天然酵母パン 伊久里」で香り豊かな焼き立てパンを選び、嬉しいお土産になった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Natural Yeast Bakery Ikuri warm wooden counter lined with crisp golden croissants and rustic country loaves, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '拓北公園',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '敷地面積約4ヘクタールの広大な地区公園（終日開放・無料）。大型遊具や芝生の多目的広場、無料パークゴルフ場を備え、すぐそばをJR学園都市線の列車が走るトレインビュースポットとしても親しまれる。',
      address: '北海道札幌市北区拓北5条5-1',
      lat: 43.154238,
      lng: 141.386935,
      clue:
        '旅の締めくくりは、敷地面積約四ヘクタールもの開放的な緑がたっぷりと広がる「拓北公園」でのんびり楽しく散歩しよう（終日開放・無料）。広々とした芝生の多目的広場やパークゴルフ場が市民の笑顔で賑わうほか、園のすぐそばをJR学園都市線の列車が軽快に走り抜けるトレインビュースポットとしても親しまれている。心地よい北の風を胸いっぱいに感じながら、拓北の楽しい街歩きを晴れやかに結ぼう。',
      surprise: '広大な緑の公園のすぐそばを学園都市線の列車が走り抜けるトレインビューの開放感が気持ちよかった。',
      hook: '',
      f7_fragment: '約4haの広大な敷地のそばをJR列車が走るトレインビューの地区公園。',
      f7_full: '「拓北公園」の芝生広場から走り抜ける列車を眺め、拓北の街歩きを爽やかに終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Takuhoku Park wide sunny green meadow with a silver commuter train passing along tree-lined tracks, no text, no letters.',
    },
  ],
};
