export default {
  slug: 'shin_hakodate_hokuto',
  station_order: 994,
  station: '新函館北斗',
  line: 'JR函館本線',
  area_name: '新函館北斗・市渡',
  prefecture: '北海道',
  municipality: '北斗市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '北海道新幹線', '新函館北斗', 'ほっくる', '市渡稲荷神社'],
  style_genre: 'ink_and_watercolor',
  title: '新幹線の玄関口から箱館戦争ゆかりの社寺へ',
  description:
    '北海道新幹線のJR新函館北斗駅から駅直結ほっくる、BENTO CAFE 41°GARDENを経て旧幕府軍本陣跡の市渡稲荷神社と古刹・正法山円通寺へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of Shin-Hakodate-Hokuto Shinkansen station plaza, local gourmet market stalls, a warm sunlit cafe, an 1859 granite torii gate at Ichiwatari Inari Shrine, and a quiet historic temple roof, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び新函館北斗を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '道南の逸品が集う ほっくる',
      subtext: '駅直結の賑わいの中で地元の特産品や地酒・グルメを楽しんだ',
      badge: {
        code: 'shinhakodate_hokkuru',
        name_ja: '南北海道の宝箱',
        subtitle_en: 'Hokkuru Market Hall',
        description:
          '北斗市観光交流センター別館「ほっくる」で道南の豊かな特産品とグルメに出会ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of local Hokkaido farm produce, a bottle of regional wine, and gourmet snacks in a wooden basket on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '駅ナカの寛ぎ処 BENTO CAFE 41°GARDEN',
      subtext: '道南食材の特製弁当や香り高い珈琲を明るい駅ナカ空間で味わった',
      badge: {
        code: 'shinhakodate_bentocafe',
        name_ja: '北緯41度の駅カフェ',
        subtitle_en: 'BENTO CAFE 41 Garden',
        description:
          'BENTO CAFE 41°GARDENを訪れ、地元食材のお弁当とほっとする珈琲の時間を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a neatly arranged local Hokkaido wooden bento box beside a warm coffee mug near a sunlit station window on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '箱館戦争本陣の跡 市渡稲荷神社',
      subtext: '安政六年奉納の花崗岩鳥居を仰ぎ見て旧幕府軍の足跡を辿った',
      badge: {
        code: 'shinhakodate_inari',
        name_ja: '旧幕府軍本陣の鳥居',
        subtitle_en: 'Ichiwatari Inari Shrine',
        description:
          '市渡稲荷神社に参拝し、箱館戦争時に旧幕府軍が作戦本部を置いた歴史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an 1859 carved granite Shinto torii gate beside twin stone foxes on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '江戸期からの古刹 正法山 円通寺',
      subtext: '寛文十年に始まり延享二年に再建された市渡の古刹で静かに手を合わせた',
      badge: {
        code: 'shinhakodate_entsuji',
        name_ja: '市渡の歴史見守る古刹',
        subtitle_en: 'Shobozan Entsuji Temple',
        description:
          '正法山 円通寺を訪れ、江戸時代から市渡の暮らしを見守り続ける曹洞宗の古刹の空気に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a traditional Japanese temple bell and sweeping tiled roof beneath calm pine branches on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shin_hakodate_hokuto_complete',
    name_ja: '新函館北斗・道南玄関口の旅人',
    subtitle_en: 'Explorer of Shin-Hakodate-Hokuto',
    description:
      'JR新函館北斗駅からほっくる、BENTO CAFE 41°GARDEN、市渡稲荷神社、正法山 円通寺まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a sleek bullet train silhouette, an 1859 granite torii gate, and a peaceful temple roof on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新函館北斗駅',
      lat: 41.904658,
      lng: 140.64836,
      address: '北海道北斗市市渡1-1-1',
      description:
        '平成28年（2016年）開業の北海道新幹線の玄関口（5:40〜23:50、みどりの窓口6:00〜19:00）。構内には観光案内所や北斗市公式キャラクターのモニュメントがある。',
      clue:
        '平成二十八年開業の北海道新幹線の玄関口「JR新函館北斗駅」から、道南の玄関口・市渡の歴史とグルメを巡る散歩を始めよう（5:40〜23:50）。真新しいモダンな駅舎の奥には古くからの田園と幕末史の舞台が広がっており、新旧の魅力が心地よく交差している。駅を出て南東方向へと外へ踏み出したら、まずは駅直結の観光交流施設「ほっくる」を目指して、爽やかな風を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から南東方向へ徒歩約1分',
      f7_fragment: '北海道新幹線の玄関口で、道南の旅の拠点として賑わうモダンな駅。',
      f7_full: '「JR新函館北斗駅」を後にし、駅前の賑わいから幕末ゆかりの社寺を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '北斗市観光交流センター別館「ほっくる」',
      lat: 41.903879,
      lng: 140.648766,
      address: '北海道北斗市市渡1-1-7',
      description:
        '道南の特産品や地酒・ワイン、地元グルメが集結する駅直結施設（9:00〜20:00、無休・店舗により異なる）。無料の休憩・ワークスペースも備え旅人に親しまれている。',
      clue:
        '駅直結の「北斗市観光交流センター別館 ほっくる」で道南の特産品やグルメを巡ろう（9:00〜20:00）。準備ができたら北西の「BENTO CAFE 41°GARDEN」へ向かおう。',
      hook: '北西方向へ徒歩約2分',
      f7_fragment: '道南の特産品や地酒・グルメが集まり、無料休憩所も備えた駅直結施設。',
      f7_full: '「ほっくる」で南北海道の多彩な特産品を眺め、旅の気分がいっそう高まった。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'BENTO CAFE 41°GARDEN',
      lat: 41.904352,
      lng: 140.648659,
      address: '北海道北斗市市渡1-1-1',
      description:
        'JR新函館北斗駅構内にあるカフェ＆ショップ（9:00〜17:00、無休）。道南の旬の食材を活かした特製お弁当やスイーツ、香り高い珈琲を楽しみながらゆったりと休憩できる。',
      clue:
        'JR新函館北斗駅構内に佇む明るく開放的な「BENTO CAFE 41°GARDEN」でゆったりと休憩しよう（9:00〜17:00、無休）。道南の豊かな食材を取り入れた特製のお弁当や、こだわりのスイーツ、香り高い珈琲を味わえば、これからの街歩きに向けて元気も湧いてくる。心地よいカフェ時間を満喫したら、西南西に鎮座する幕末ゆかりの「市渡稲荷神社」へと軽やかに歩を進めよう。',
      hook: '西南西方向へ徒歩約16分',
      f7_fragment: '新函館北斗駅構内にあり、道南食材のお弁当や珈琲で寛げるカフェ。',
      f7_full: '「BENTO CAFE 41°GARDEN」で一息つき、いよいよ幕末ゆかりの古社へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '市渡稲荷神社（市渡稲荷神社・川濯神社）',
      lat: 41.897368,
      lng: 140.635629,
      address: '北海道北斗市市渡159-1',
      description:
        '箱館戦争時に榎本武揚率いる旧幕府軍が作戦本部を置いた歴史を持つ古社（参拝自由・無休）。安政6年（1859年）に北前船で運ばれた花崗岩の大鳥居が今も境内に現存する。',
      clue:
        '箱館戦争の際に榎本武揚率いる旧幕府軍が作戦本部を置いたことで知られる古社「市渡稲荷神社（市渡稲荷神社・川濯神社）」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。境内には安政六年に北前船で運ばれて奉納された花崗岩の大鳥居が今も堂々と立ち、幕末の激動の歴史を静かに物語っている。往時のドラマに深く思いを馳せたら、北東に佇む歴史ある古刹「正法山 円通寺」へと歩を進めよう。',
      hook: '北東方向へ徒歩約3分',
      f7_fragment: '箱館戦争で旧幕府軍の本陣が置かれ、1859年奉納の花崗岩鳥居が現存する古社。',
      f7_full: '「市渡稲荷神社」で安政六年の大鳥居を仰ぎ見て、幕末の足跡を実感した。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '正法山 円通寺',
      lat: 41.898491,
      lng: 140.637316,
      address: '北海道北斗市市渡173',
      description:
        '寛文10年（1670年）に円空作の観世音木像を本尊として始まり、延享2年（1745年）に再建された曹洞宗の古刹（参拝自由・無休）。江戸期より市渡の暮らしを見守り続ける。',
      clue:
        '旅の締めくくりは、寛文十年に円空作の観世音木像を本尊として始まり、延享二年に再建された曹洞宗の古刹「正法山 円通寺」へ静かに手を合わせて参拝しよう（参拝自由）。江戸時代から長きにわたり市渡の移り変わりを見守り続けてきた境内は、新幹線の駅前の喧騒から一歩離れた穏やかな静寂に包まれている。悠久の時を刻む道南の歴史を胸いっぱいに抱いて、新函館北斗の散歩を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: '1670年に始まり1745年に再建された、市渡を見守り続ける曹洞宗の古刹。',
      f7_full: '「正法山 円通寺」の静謐な境内で手を合わせ、新函館北斗の旅を締めくくった。',
    },
  ],
};
