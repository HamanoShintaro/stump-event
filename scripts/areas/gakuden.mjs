export default {
  slug: 'gakuden',
  station_order: 989,
  station: '学田',
  line: 'JR富良野線',
  area_name: '学田・清水山',
  prefecture: '北海道',
  municipality: '富良野市',
  category: 'グルメ・絶景',
  budget_tier: 2,
  tags: ['富良野線', 'カンパーナ六花亭', 'ぶどう果汁工場', 'haluCAFE', '清水山'],
  style_genre: 'ink_and_watercolor',
  title: '学田の丘とぶどう畑を巡る富良野散歩',
  description:
    '札幌農学校ゆかりのJR学田駅から学田二区神社、丘の上のhalu CAFE、ふらのぶどう果汁工場を経てカンパーナ六花亭へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Gakuden Station in Furano surrounded by fields, a rustic hillside shrine, a renovated warehouse cafe, purple vineyard rows on Shimizuyama hill, and a glass-walled sweet pavilion overlooking Tokachidake peaks, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び学田を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '地域を見守り続ける学田二区神社',
      subtext: '開拓期からの暮らしを伝える素朴な境内で手を合わせた',
      badge: {
        code: 'gakuden_shrine',
        name_ja: '学田開拓の鎮守',
        subtitle_en: 'Gakuden Shrine',
        description:
          '学田二区神社を訪れ、札幌農学校ゆかりの開拓地を見守る境内に手を合わせたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a simple wooden Shinto shrine sanctuary framed by autumn farm trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '富良野市街を見渡す halu CAFE',
      subtext: '倉庫をリノベした丘の上のカフェでパンケーキと珈琲に寛いだ',
      badge: {
        code: 'gakuden_halucafe',
        name_ja: '丘の倉庫カフェ',
        subtitle_en: 'Halu Cafe Pancakes',
        description:
          'halu CAFEで富良野市街を見渡しながら富良野産食材のパンケーキを楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of fluffy golden pancakes drizzled with syrup beside a rustic window view of valley fields on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '濃厚な恵み・ふらのぶどう果汁工場',
      subtext: '富良野産ぶどう100%の試飲と限定ジュース選びを楽しんだ',
      badge: {
        code: 'gakuden_grapejuice',
        name_ja: '富良野葡萄の雫',
        subtitle_en: 'Furano Grape Juice',
        description:
          'ふらのぶどう果汁工場で富良野産ぶどう100%の濃厚な試飲と買い物を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of deep purple Furano grape clusters beside a glass bottle of rich grape juice on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'ぶどう畑の カンパーナ六花亭',
      subtext: 'ガラス張りの空間から十勝岳連峰を望み限定ふらの餅を味わった',
      badge: {
        code: 'gakuden_rokkatei',
        name_ja: '清水山の六花亭',
        subtitle_en: 'Campana Rokkatei',
        description:
          'カンパーナ六花亭で十勝岳連峰の大パノラマと限定銘菓「ふらの餅」を堪能したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of sweet red-bean mochi cakes on a white porcelain plate framed by vineyard rows and mountain peaks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'gakuden_complete',
    name_ja: '学田・葡萄畑と丘の旅人',
    subtitle_en: 'Explorer of Gakuden Hills',
    description:
      'JR学田駅から学田二区神社、halu CAFE、ぶどう果汁工場、カンパーナ六花亭まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting purple grape clusters, a hillside cafe cup, and Tokachidake peaks through glass windows on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR学田駅',
      lat: 43.366286,
      lng: 142.386206,
      address: '北海道富良野市西学田2区',
      description:
        '昭和33年（1958年）3月25日開業の無人駅（終日開放）。明治29年頃に札幌農学校（現・北海道大学）の演習田畑「学田」があったことに由来する静かな駅となっている。',
      clue:
        '昭和三十三年三月に開業し、明治二十九年頃に札幌農学校の演習田畑「学田」があったことに駅名を由来する「JR学田駅」から丘の散策を始めよう（終日開放）。富良野盆地の広々とした空の下、静かな無人駅を南西方向へと外へ踏み出したら、まずは開拓期から地域の暮らしを見守り続けてきた鎮守「学田二区神社」を目指して、田園を吹き抜ける爽やかな風を感じながら軽やかな足取りで元気に歩き出そう。',
      hook: '駅から南西方向へ徒歩約11分',
      f7_fragment: '札幌農学校の演習田畑「学田」に由来する、静かな田園地帯の無人駅。',
      f7_full: '「JR学田駅」を後にし、ぶどう畑と十勝岳を望む清水山の丘を目指す旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '学田二区神社',
      lat: 43.362696,
      lng: 142.379202,
      address: '北海道富良野市西学田2区',
      description:
        '西学田二区会館の隣に鎮座する地域の鎮守社（参拝自由・無休）。開拓期からこの地の暮らしと農の営みを見守り続けてきた素朴で穏やかな境内が広がる。',
      clue:
        '西学田二区会館の隣に鎮座する「学田二区神社」へ静かに参拝し、開拓の記憶に丁寧に手を合わせよう（参拝自由）。次は北の丘に立つ「halu CAFE」へ向かおう。',
      hook: '北方向へ徒歩約12分',
      f7_fragment: '開拓期から西学田地区の暮らしと農の営みを見守り続ける地域の鎮守社。',
      f7_full: '「学田二区神社」の素朴な境内で手を合わせ、丘の上のカフェへと歩を進めた。',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: 'halu CAFE（ハルカフェ）',
      lat: 43.36961,
      lng: 142.377716,
      address: '北海道富良野市西学田2区',
      description:
        '富良野市街を見渡す丘の上の倉庫をリノベーションしたカフェ（木〜日11:00〜17:00・L.O.16:00、月〜水曜休・季節変動あり）。富良野産食材のパンケーキや珈琲でくつろげる。',
      clue:
        '富良野市街を一望する丘の上の倉庫をお洒落にリノベーションした空間が魅力の「halu CAFE（ハルカフェ）」でゆったりと休憩しよう（木〜日11:00〜17:00、月〜水曜休）。富良野産の豊かな食材を活かしたふわふわのパンケーキと香り高い珈琲をいただけば、旅の疲れも心地よく癒やされていく。絶景カフェで寛いだら、表側の別棟「ふらのぶどう果汁工場」へと元気に楽しく向かおう。',
      hook: '表側の別棟へ徒歩約2分',
      f7_fragment: '富良野市街を見渡す丘の上の倉庫をリノベした、パンケーキが人気のカフェ。',
      f7_full: '「halu CAFE」で富良野市街を眺めながらパンケーキを味わい、心が和んだ。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: 'ふらのぶどう果汁工場',
      lat: 43.368621,
      lng: 142.379198,
      address: '北海道富良野市西学田2区',
      description:
        '富良野産ぶどう100%の濃厚なぶどう果汁の製造見学と試飲、限定ジュースの購入ができる直売スポット（10:00〜16:00、6月頃〜10月上旬無休・冬期休業）。',
      clue:
        '富良野産ぶどう百パーセントにこだわった濃厚な味わいが自慢の「ふらのぶどう果汁工場」へ楽しく立ち寄ってみよう（6月〜10月上旬10:00〜16:00、冬期休業）。ここではぶどう果汁の製造見学や嬉しい試飲をたっぷり楽しめるほか、ここでしか手に入らない限定ジュースをお土産に選ぶこともできる。芳醇なぶどうの恵みを感じたら、南方向へ歩いて「カンパーナ六花亭」へと楽しく笑顔で向かおう。',
      hook: '南方向へ徒歩約9分',
      f7_fragment: '富良野産ぶどう100%の果汁製造見学や試飲、限定ジュース購入ができる工場。',
      f7_full: '「ふらのぶどう果汁工場」で濃厚なぶどうの恵みを試飲し、笑顔がほころんだ。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'カンパーナ六花亭',
      lat: 43.364477,
      lng: 142.377213,
      address: '北海道富良野市清水山1161',
      description:
        '広大なぶどう畑に建つ六花亭の直営店（10:00〜16:00または17:00・喫茶10:00〜16:00、冬期休業あり）。ガラス張りの店内から十勝岳連峰を一望し限定「ふらの餅」を味わえる。',
      clue:
        '旅の締めくくりは、広大なぶどう畑の真っ只中に建つ人気店「カンパーナ六花亭」で至福の甘味と絶景をゆっくり味わおう（季節営業・冬期休業あり）。開放的なガラス張りの店内からは十勝岳連峰の雄大な山並みを一望でき、喫茶スペースでは店舗限定の銘菓「ふらの餅」や季節のスイーツを楽しめる。富良野のぶどう畑と美しい山の風景を胸いっぱいに抱いて、学田の散歩を晴れやかに明るく元気に結ぼう。',
      hook: '',
      f7_fragment: 'ぶどう畑の中に建ち、十勝岳連峰を一望しながら限定「ふらの餅」を味わえる直営店。',
      f7_full: '「カンパーナ六花亭」で十勝岳連峰を望みつつふらの餅を味わい、旅を終えた。',
    },
  ],
};
