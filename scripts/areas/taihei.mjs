export default {
  slug: 'taihei',
  station_order: 908,
  station: '太平',
  line: 'JR札沼線',
  area_name: '太平・味覚と開基百年公園',
  prefecture: '北海道',
  municipality: '札幌市北区',
  category: '地元グルメと公園散歩',
  budget_tier: 2,
  tags: ['北海道', '札幌市北区', '太平駅', 'ラーメン', '太平公園'],
  style_genre: 'ink_and_watercolor',
  title: '太平・名店らーめんと手作り菓子から百年碑公園へ',
  description:
    '「JR太平駅」から、個性派スイーツ「そふと工房プラス 太平本店」、鶏塩白湯が人気の名店「麺や けせらせら」、隠れ家洋菓子店「moco.sweet」、開基百年碑が立つ「太平公園」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Taihei Sapporo from cozy commuter station and swirled soft-serve ice cream stand to creamy chicken ramen shop, pastel bake-shop tart counter and leafy neighborhood park with pioneer monument, full bleed, no text, no letters.',
  question: '平坦で平和な願いが込められた太平の駅から人気スイーツや名店ラーメン、開基百年碑の公園を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '多彩なトッピングが楽しめる「そふと工房プラス 太平本店」',
      subtext: '季節限定メニューやボリューム満点のソフトクリームが散策の楽しい寄り道になった。',
      badge: {
        code: 'taihei_softcream',
        name_ja: '太平・ソフトの甘い寄り道',
        subtitle_en: 'Soft Serve Lover of Taihei',
        description: 'そふと工房プラス 太平本店で個性派ソフトを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a tall swirled soft-serve ice cream cone with colorful berry toppings, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'クリーミーな鶏塩白湯が名物の「麺や けせらせら」',
      subtext: 'コク深くまろやかな鶏塩白湯ラーメンの一杯に、太平エリアの名店の実力を感じた。',
      badge: {
        code: 'taihei_queserasera',
        name_ja: '太平・鶏塩白湯の名店人',
        subtitle_en: 'Chicken Paitan Ramen Taster',
        description: '麺や けせらせらで名物の鶏塩白湯ラーメンを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of rich creamy white chicken paitan ramen, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '隠れ家風の手作り洋菓子＆雑貨店「moco.sweet」',
      subtext: '可愛らしい店内に並ぶ名物mocoレモンやタルトの優しい味わいにほっこりした。',
      badge: {
        code: 'taihei_mocosweet',
        name_ja: '太平・隠れ家菓子の時間',
        subtitle_en: 'Baked Sweets Visitor of Moco',
        description: 'moco.sweetで手作り洋菓子や焼き菓子に出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting glazed lemon cakes and delicate fruit tarts on a cozy wooden tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '開拓百年の記念碑が立つ北区有数の広さの「太平公園」',
      subtext: '昭和六十三年建立の太平開基百年碑やタコのすべり台が地域の歩みを伝えていた。',
      badge: {
        code: 'taihei_park',
        name_ja: '太平・開基百年公園散歩',
        subtitle_en: 'Taihei Centennial Park Walker',
        description: '太平開基百年碑が立つ太平公園を散策した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a carved stone centennial monument beneath shady green park trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'taihei_master',
    name_ja: '太平・味覚と開基百年公園の旅人',
    subtitle_en: 'Taihei Gourmet & Park Walker',
    description: 'JR太平駅からそふと工房プラス、麺や けせらせら、moco.sweet、太平公園までを巡った証',
    image_prompt:
      'A circular emblem combining swirled soft-serve cone, creamy chicken ramen bowl, glazed lemon cake and stone centennial monument, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR太平駅',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1986年11月1日太平臨時乗降場として開業し1987年駅昇格（終日利用可・無料）。地名「太平」は平坦な地形と「太く大きく平和に発展するように」との願いから1937年に命名された。',
      address: '北海道札幌市北区太平2条5丁目1',
      lat: 43.124143,
      lng: 141.349951,
      clue:
        '昭和六十一年十一月に臨時乗降場として開業し、翌年四月に駅へ昇格した「JR太平駅」から街歩きと散策を始めよう（終日利用可）。「太平」という地名は、旧・烈々布地区の平坦な地形と「太く大きく平和に発展するように」との温かい願いを込めて昭和十二年に名付けられたという。落ち着いた住宅街の駅を出たら、まずは人気店「そふと工房プラス 太平本店」を目指して元気に楽しく笑顔で歩き出そう。',
      surprise: '「太平」という地名に「太く大きく平和に発展するように」という昭和十二年の願いが込められていたと知った。',
      hook: 'JR太平駅を出たら、北側の「そふと工房プラス 太平本店」へ向かおう。',
      f7_fragment: '昭和六十一年開業、平和な発展の願いを込めた地名を冠する住宅街の駅。',
      f7_full: '「JR太平駅」に降り立ち、名店グルメと手作り菓子、開基百年碑の公園を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Taihei Station neat northern suburban railway stop framed by quiet Sapporo neighborhood streets, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'そふと工房プラス 太平本店',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '多彩なトッピングや季節限定メニュー、ボリューム満点のソフトクリームで知られる太平の人気スイーツ店（11:30〜19:00頃、不定休）。',
      address: '北海道札幌市北区太平4条3-4-1',
      lat: 43.128971,
      lng: 141.349157,
      clue:
        '個性派スイーツ店「そふと工房プラス 太平本店」へ寄ろう（11:30〜19:00頃、不定休）。多彩なトッピングのソフトクリームが評判だ。次は「麺や けせらせら」へ。',
      surprise: '豊富なトッピングと季節限定のバリエーションが楽しく、北海道ならではの濃厚ソフトに思わず笑顔になった。',
      hook: 'そふと工房プラスで甘い寄り道をしたら、名店「麺や けせらせら」へ向かおう。',
      f7_fragment: '多彩なトッピングと季節限定ソフトクリームが楽しめる太平の人気店。',
      f7_full: '「そふと工房プラス 太平本店」で冷たく美味しいソフトクリームを味わい、心が弾んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Soft Kobo Plus cheerful neighborhood dessert counter serving tall swirled soft-serve ice cream with berry toppings, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '麺や けせらせら',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '太平エリアを代表する人気ラーメン店（11:30〜15:00・17:00〜20:00頃、木曜・第3水曜休）。クリーミーでコク深い「鶏塩白湯ラーメン」や「塩らぁめん」が名物。',
      address: '北海道札幌市北区太平7条5-2-5',
      lat: 43.130619,
      lng: 141.354999,
      clue:
        '太平エリアを代表する実力派の人気ラーメン店「麺や けせらせら」で絶品のお昼にしよう（11:30〜15:00・17:00〜20:00頃、木曜等休）。看板メニューの「鶏塩白湯ラーメン」は、鶏の旨みをじっくり引き出したクリーミーでコク深いスープがもちもちの麺に絡み合い、最後の一滴まで飲み干したくなる美味しさだ。お腹がしっかり満たされたら、次は隠れ家菓子店「moco.sweet」へ向かおう。',
      surprise: 'クリーミーでありながら後味のすっきりした「鶏塩白湯ラーメン」の完成度の高さに思わず唸った。',
      hook: '麺や けせらせらで食事を楽しんだら、隠れ家洋菓子店「moco.sweet」へ向かおう。',
      f7_fragment: 'クリーミーでコク深い「鶏塩白湯ラーメン」が名物の太平の名店。',
      f7_full: '「麺や けせらせら」で名物の鶏塩白湯ラーメンを堪能し、評判通りの美味しさに感動した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Menya Queserasera cozy Japanese ramen counter with a steaming bowl of rich creamy white chicken paitan ramen, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: 'moco.sweet',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '住宅街に佇む隠れ家風の手作り洋菓子＆雑貨店（10:00〜16:00売切次第終了、不定休・要SNS確認）。可愛らしい店内でケーキやタルト、名物「mocoレモン」等の焼き菓子を販売。',
      address: '北海道札幌市北区太平8条4-2-8',
      lat: 43.132865,
      lng: 141.353557,
      clue:
        '住宅街の中にそっと佇む隠れ家風の手作り洋菓子と雑貨のお店「moco.sweet」を覗いてみよう（10:00〜16:00頃、不定休）。温かみのある可愛らしい店内には、季節のフルーツを使ったタルトやケーキ、爽やかな風味でファンが多い名物の焼き菓子「mocoレモン」などが丁寧に並べられ、お土産選びにぴったりだ。甘いお土産を手にしたら、最後は緑豊かな「太平公園」へと向かおう。',
      surprise: '住宅街の隠れ家のような店内に並ぶ手作りケーキや「mocoレモン」の温かみと可愛らしさに癒やされた。',
      hook: 'moco.sweetでお菓子を選んだら、北側の総合公園「太平公園」へ向かおう。',
      f7_fragment: '住宅街に佇み、ケーキや名物「mocoレモン」が並ぶ隠れ家洋菓子店。',
      f7_full: '「moco.sweet」で可愛らしい手作り焼き菓子に出会い、太平の温かい魅力に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Moco Sweet charming pastel bakery corner displaying glazed lemon cakes, fruit tarts and handmade crafts, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '太平公園',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '北区有数の広さを誇る総合公園（常時開放・無料）。タコのすべり台や野球場、夏季の遊水プールを備え、公園南端には明治22年からの開拓100年を記念して1988年に建てられた「太平開基百年碑」がある。',
      address: '北海道札幌市北区太平12条3-1',
      lat: 43.138385,
      lng: 141.353746,
      clue:
        '旅の締めくくりは、北区有数の広さを誇り地域の憩いの場として長く親しまれている「太平公園」をゆっくりと歩こう（常時開放・無料）。ユニークなタコのすべり台や広々とした芝生が広がる園内の南端には、明治二十二年からの開拓百年を記念して昭和六十三年に建立された「太平開基百年碑」が静かに立っている。街の歩みに深く思いを馳せながら爽やかに深呼吸し、太平の楽しい散歩を心地よく晴れやかに結ぼう。',
      surprise: 'のびやかな園内にユニークなタコのすべり台と歴史を刻む「太平開基百年碑」が並び、地域の歩みを感じた。',
      hook: '',
      f7_fragment: 'タコのすべり台や昭和六十三年建立の「太平開基百年碑」がある総合公園。',
      f7_full: '「太平公園」の開基百年碑と緑の広場を歩き、太平の暮らしと歴史を巡る旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Taihei Park expansive sunny lawn with carved stone centennial monument and cheerful playground trees, no text, no letters.',
    },
  ],
};
