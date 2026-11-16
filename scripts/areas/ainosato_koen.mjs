export default {
  slug: 'ainosato_koen',
  station_order: 912,
  station: 'あいの里公園',
  line: 'JR札沼線',
  area_name: 'あいの里公園・緑の街区と温泉',
  prefecture: '北海道',
  municipality: '札幌市北区',
  category: 'ニュータウン散歩と温泉',
  budget_tier: 2,
  tags: ['北海道', '札幌市北区', 'あいの里公園駅', 'モール泉', 'あいの里温泉'],
  style_genre: 'ink_and_watercolor',
  title: 'あいの里公園・緑の街区からモール泉へ',
  description:
    '札幌市最北端の鉄道駅「JRあいの里公園駅」から、駅徒歩一分の健康カフェ「バロンドールカフェ」、緑豊かな「あいの里東公園」、「南あいの里公園」、モール泉の天然温泉「札幌あいの里温泉 なごみ」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Ainosato Koen Sapporo from northernmost suburban railway station and healthy cafe lunch plate to lush green neighborhood parks with gazebos and steaming amber moor-spring hot spring bathhouse, full bleed, no text, no letters.',
  question: '札幌市最北端の鉄道駅・あいの里公園駅から健康志向のカフェや緑の住宅街公園を経てモール泉へと巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '札幌市最北端の鉄道駅で旧名・釜谷臼駅だった「JRあいの里公園駅」',
      subtext: '昭和三十三年開業の歴史と、ニュータウン造成による移転・改称の歩みを知った。',
      badge: {
        code: 'ainosato_koen_station',
        name_ja: 'あいの里・最北駅の旅人',
        subtitle_en: 'Northernmost Sapporo Station Walker',
        description: '札幌市最北端の鉄道駅「JRあいの里公園駅」から歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a clean suburban railway station platform beneath wide northern sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '高野豆腐入り煮込みハンバーグが人気の「バロンドールカフェ」',
      subtext: '十品目以上の美健ランチや雑穀米など体に優しい料理に元気が湧いた。',
      badge: {
        code: 'ainosato_koen_ballondor',
        name_ja: 'あいの里・美健カフェの昼',
        subtitle_en: 'Ballon dOr Healthy Cafe Diner',
        description: 'バロンドールカフェで体想いのおいしいランチを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a wholesome Japanese lunch plate with simmered hamburger steak and colorful garden vegetables, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '小高い築山と東屋が親しまれる「あいの里東公園」',
      subtext: 'あいの里の街区に広がる開放的な芝生と緑の散歩道に癒やされた。',
      badge: {
        code: 'ainosato_koen_eastpark',
        name_ja: 'あいの里・緑街区の散策者',
        subtitle_en: 'Ainosato Green Park Stroller',
        description: 'あいの里東公園の緑豊かな街区公園を散策した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a grassy hilltop park mound and wooden gazebo framed by birch trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '茶褐色のモール泉系の湯で温まる「札幌あいの里温泉 なごみ」',
      subtext: '地域に親しまれる天然温泉と露天風呂に浸かり、散策の疲れがすっきり流れた。',
      badge: {
        code: 'ainosato_koen_nagomi',
        name_ja: 'あいの里・モール泉の湯浴み',
        subtitle_en: 'Ainosato Nagomi Onsen Bather',
        description: '札幌あいの里温泉 なごみの茶褐色モール泉に浸かった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an outdoor stone hot spring bath filled with warm amber moor water and rising steam, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'ainosato_koen_master',
    name_ja: 'あいの里・南街区と湯の旅人',
    subtitle_en: 'Ainosato South & Onsen Walker',
    description: 'JRあいの里公園駅からバロンドールカフェ、あいの里東公園、南あいの里公園、札幌あいの里温泉 なごみまでを巡った証',
    image_prompt:
      'A circular emblem combining northern suburban station, wholesome vegetable lunch plate, park gazebo and steaming amber moor-spring bath, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JRあいの里公園駅',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1958年（昭和33年）7月1日「釜谷臼駅」として開業、1986年ニュータウン造成時に現在地へ約600m移転、1995年現駅名へ改称（終日利用可・無料）。札幌市最北端の鉄道駅。',
      address: '北海道札幌市北区あいの里2条8-1',
      lat: 43.161246,
      lng: 141.41333,
      clue:
        '昭和三十三年七月に「釜谷臼駅」として開業し、昭和六十一年のニュータウン造成に伴い現在地へ移された札幌市最北端の鉄道駅「JRあいの里公園駅」から町歩きと散策を始めよう（終日利用可）。計画的に整えられた美しい並木と街並みを感じながら静かなホームを後にしたら、まずは歩いてわずか一分の距離にある健康志向の人気店「バロンドールカフェ」を目指して元気に楽しく笑顔で外へ歩き出そう。',
      surprise: '札幌市最北端の鉄道駅という肩書きと、旧名「釜谷臼駅」からニュータウンとともに歩んだ歴史が面白かった。',
      hook: 'JRあいの里公園駅を出たら、徒歩約一分の「バロンドールカフェ」へ向かおう。',
      f7_fragment: '昭和三十三年「釜谷臼駅」として開業した札幌市最北端の鉄道駅。',
      f7_full: '「JRあいの里公園駅」に降り立ち、緑豊かな南街区とモール泉を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Ainosato Koen Station bright modern suburban railway station framed by clean new-town street trees, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'バロンドールカフェ',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        'JRあいの里公園駅から徒歩約1分のスポーツクラブ1階にあるカフェ（10:00〜16:00・L.O.15:30、日月祝休）。高野豆腐入り煮込みハンバーグや約10品目が摂れる「美健ランチ」が評判。',
      address: '北海道札幌市北区あいの里2条8-2-2',
      lat: 43.161157,
      lng: 141.412575,
      clue:
        '駅徒歩一分の「バロンドールカフェ」へ入ろう（10:00〜16:00、日月祝休）。高野豆腐入りの煮込みハンバーグや美健ランチが評判だ。次は「あいの里東公園」へ。',
      surprise: '駅前すぐの場所で、高野豆腐入りの煮込みハンバーグや雑穀米など体に優しい美健ランチを味わえて嬉しかった。',
      hook: 'バロンドールカフェで食事を終えたら、南西側の「あいの里東公園」へ向かおう。',
      f7_fragment: '駅徒歩一分、高野豆腐入り煮込みハンバーグや美健ランチが人気のカフェ。',
      f7_full: '「バロンドールカフェ」で体に優しい美健ランチをいただき、散策の元気を満たした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Ballon dOr Cafe bright sunlit cafe table serving healthy simmered hamburger steak with colorful seasonal vegetables, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: 'あいの里東公園',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        'あいの里2条の住宅街にある近隣公園（終日開放・無料）。野球場やテニスコート、大型複合遊具のほか、小高い築山や東屋があり街歩きの穏やかな立ち寄り先として親しまれている。',
      address: '北海道札幌市北区あいの里2条7-12',
      lat: 43.15836,
      lng: 141.408502,
      clue:
        'あいの里2条の整然とした街並みの中に広がる地域の憩い「あいの里東公園」をゆっくりと楽しく歩いてみよう（終日開放・無料）。野球場やテニスコート、大型複合遊具が揃う伸びやかな園内には小高い築山や風情ある東屋も設けられており、木陰でひと息つきながらニュータウンの穏やかな日常の空気を味わうのにぴったりだ。緑豊かな景色に癒やされたら、南西の「南あいの里公園」へと歩いて向かおう。',
      surprise: '整ったニュータウンの街区の中に築山や東屋を備えた開放的な公園があり、散歩がとても心地よかった。',
      hook: 'あいの里東公園を抜けたら、南あいの里地区の「南あいの里公園」へ向かおう。',
      f7_fragment: '小高い築山や東屋、スポーツ施設が揃うあいの里2条の憩いの近隣公園。',
      f7_full: '「あいの里東公園」の緑と築山の景色を楽しみ、ニュータウンの穏やかさを感じた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Ainosato Higashi Park sunlit green lawn with gentle grassy mound and wooden resting gazebo, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '南あいの里公園',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '南あいの里の閑静な住宅街に整備された緑豊かな公園（終日開放・無料）。広々とした芝生と遊歩道が続き、地域の穏やかな風景を楽しみながら歩くことができる。',
      address: '北海道札幌市北区南あいの里7-17-10',
      lat: 43.152291,
      lng: 141.405232,
      clue:
        '閑静な住宅街が続く南あいの里エリアへと歩みを進め、緑豊かな「南あいの里公園」の遊歩道をのんびりと楽しく通ってみよう（終日開放・無料）。視界を遮るものの少ない伸びやかな芝生と丁寧に整えられた木々の緑が心地よく、北の空の広さを実感しながら爽快な気分で足を運ぶことができる。気持ちよく体を動かして汗をかいたら、締めくくりに「札幌あいの里温泉 なごみ」へと元気に歩いて向かおう。',
      surprise: '南あいの里の閑静な住宅街に寄り添うように広がる、広々とした芝生と遊歩道の開放感が心地よかった。',
      hook: '南あいの里公園を抜けたら、天然温泉の「札幌あいの里温泉 なごみ」へ向かおう。',
      f7_fragment: '南あいの里の閑静な住宅街に芝生と遊歩道が広がる緑豊かな公園。',
      f7_full: '「南あいの里公園」の爽やかな遊歩道を歩き、温泉への期待を高めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Minami Ainosato Park wide manicured green lawn with curving stone walking path under crisp blue sky, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '札幌あいの里温泉 なごみ',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '南あいの里にある地域密着の日帰り天然温泉（10:00〜23:00・最終受付22:30、年中無休・メンテ休あり、2026年10月改定で大人550円・小学生150円・幼児80円）。茶褐色のモール泉系の湯と露天風呂が評判。',
      address: '北海道札幌市北区南あいの里5-1-20',
      lat: 43.152472,
      lng: 141.398558,
      clue:
        '旅の締めくくりは、南あいの里の住宅街で地元民から深く愛されている日帰り天然温泉「札幌あいの里温泉 なごみ」でゆったり温まろう（10:00〜23:00、大人550円）。植物由来の成分を含む茶褐色のモール泉系の滑らかなお湯と心地よい露天風呂に浸かれば、歩いた疲れも体の芯からじんわりと優しくほどけていく。湯上がりの爽快な気分で、あいの里公園の充実した旅を心地よく晴れやかに結ぼう。',
      surprise: '住宅街の身近な場所に本格的な茶褐色のモール泉系天然温泉と露天風呂があり、旅の最高の癒やしになった。',
      hook: '',
      f7_fragment: '茶褐色のモール泉系の湯と露天風呂で温まれる地域密着の天然温泉。',
      f7_full: '「札幌あいの里温泉 なごみ」のモール泉にゆったり浸かり、あいの里の散歩を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Sapporo Ainosato Onsen Nagomi cozy neighborhood bathhouse outdoor rock pool with steaming amber moor water, no text, no letters.',
    },
  ],
};
