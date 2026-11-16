export default {
  slug: 'soen',
  station_order: 904,
  station: '桑園',
  line: 'JR札沼線',
  area_name: '桑園・市場の朝と北大植物園',
  prefecture: '北海道',
  municipality: '札幌市中央区',
  category: '市場グルメと洋館カフェ',
  budget_tier: 2,
  tags: ['北海道', '札幌市', '桑園駅', '場外市場', '北海道大学植物園'],
  style_genre: 'ink_and_watercolor',
  title: '桑園・場外市場の朝と北大植物園',
  description:
    '明治八年の桑畑開拓に由来する「JR桑園駅」から、約六十店舗が連なる札幌の台所「札幌市中央卸売市場 場外市場」、桑園公園向かいの「椿サロン 本店」、築百年超の洋館「Cafe BEAN\'s」、「北海道大学植物園」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Soen Sapporo from elevated city railway station and bustling seafood market stalls to designer pancake cafe, century-old western-style wooden house cafe and lush historic botanical garden greenhouse, full bleed, no text, no letters.',
  question: '桑園の駅から場外市場の活気や個性豊かなカフェ、明治十九年開園の北大植物園を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '約六十店舗が連なる札幌の台所「札幌市中央卸売市場 場外市場」',
      subtext: '新鮮な海鮮丼や旬の青果・海産物がずらりと並び、北海道の食の豊かさに胸が躍った。',
      badge: {
        code: 'soen_market',
        name_ja: '桑園・場外市場の朝人',
        subtitle_en: 'Sapporo Outer Market Visitor',
        description: '札幌市中央卸売市場 場外市場で北海道の食の魅力に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a colorful fresh Hokkaido seafood kaisendon bowl beside market crates, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '桑園公園向かいの名物ほっとけーき「椿サロン 本店」',
      subtext: '北海道産素材にこだわったふわふわのほっとけーきと洗練された空間に癒やされた。',
      badge: {
        code: 'soen_tsubaki',
        name_ja: '桑園・椿サロンの一服',
        subtitle_en: 'Tsubaki Salon Cafe Guest',
        description: '椿サロン 本店でこだわりのほっとけーきと珈琲を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting thick fluffy golden hotcakes beside a ceramic coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '築百年超の歴史的洋館を活かした「Cafe BEAN\'s」',
      subtext: '北大名誉教授の書庫だった洋館で、自家焙煎珈琲の豊かな香りに包まれた。',
      badge: {
        code: 'soen_beans',
        name_ja: '桑園・洋館書庫の珈琲時間',
        subtitle_en: 'Historic Mansion Cafe Guest',
        description: '築百年超の洋館「Cafe BEAN\'s」で自家焙煎珈琲を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a century-old western-style timber house window beside roasted coffee beans, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '明治十九年開園・日本で二番目に古い「北海道大学植物園」',
      subtext: '札幌の都心に広がる豊かな原生林と歴史的温室の緑に深く癒やされた。',
      badge: {
        code: 'soen_botanical',
        name_ja: '桑園・北大植物園の散策者',
        subtitle_en: 'Hokkaido Univ. Botanical Walker',
        description: '明治十九年開園の北海道大学植物園を散策した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic glass botanical conservatory framed by lush northern elm trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'soen_master',
    name_ja: '桑園・市場と北大植物園巡り',
    subtitle_en: 'Soen Market & Botanical Garden Master',
    description: 'JR桑園駅から場外市場、椿サロン 本店、Cafe BEAN\'s、北海道大学植物園までを巡った証',
    image_prompt:
      'A circular emblem combining fresh seafood bowl, fluffy hotcakes, century-old mansion cafe and historic botanical glasshouse, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR桑園駅',
      prefecture: '北海道',
      city: '札幌市中央区',
      description:
        '1924年（大正13年）6月1日開業（2024年に100周年）、1988年高架化（終日利用可・無料）。地名は1875年に開拓使が桑畑を造り養蚕を奨励したことに由来する。',
      address: '北海道札幌市中央区北11条西15丁目1-1',
      lat: 43.07129,
      lng: 141.332162,
      clue:
        '大正十三年六月に開業し、令和六年に記念すべき百周年を迎えた「JR桑園駅」から札幌の街歩きと散策を始めよう（終日利用可）。その地名は明治八年に開拓使がここに広大な桑畑を造り、養蚕を奨励したことに由来するという。高架化された明るく清潔な駅舎を出たら、まずは西へ徒歩十分ほど、北海道の美味しいものが集まる札幌の台所「札幌市中央卸売市場 場外市場」を目指して楽しく元気に歩き出そう。',
      surprise: '都会的な桑園の駅名が、明治八年に開拓使が養蚕を奨励して桑畑を造った歴史に由来すると知り驚いた。',
      hook: 'JR桑園駅を出たら、西へ徒歩約十分の「札幌市中央卸売市場 場外市場」へ向かおう。',
      f7_fragment: '大正十三年開業、明治八年の桑畑開拓に由来する名を持つ高架駅。',
      f7_full: '「JR桑園駅」に降り立ち、札幌の市場グルメと洋館カフェ、植物園を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Soen Station clean modern elevated city railway station in Sapporo under bright morning sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '札幌市中央卸売市場 場外市場',
      prefecture: '北海道',
      city: '札幌市中央区',
      description:
        '約60店舗が連なる札幌の台所（6:00〜15:00頃・大型店〜17:00、無休・店舗により異なる）。JR桑園駅から西へ徒歩約10分で、新鮮な海鮮丼や旬の青果・海産物を楽しめる。',
      address: '北海道札幌市中央区北11条西21丁目2-3',
      lat: 43.071767,
      lng: 141.321439,
      clue:
        '約六十店舗が連なる札幌の台所「札幌市中央卸売市場 場外市場」へ入ろう（6:00〜15:00頃、無休）。新鮮な海鮮丼や旬の味覚が絶品だ。次は「椿サロン 本店」へ。',
      surprise: '朝から威勢の良い声が飛び交う場外市場の活気と、色鮮やかな海鮮丼・旬の青果の豊かさに圧倒された。',
      hook: '場外市場で北海道の味覚を満喫したら、桑園公園向かいの「椿サロン 本店」へ向かおう。',
      f7_fragment: '約六十店舗が連なり、新鮮な海鮮丼や旬の味覚が楽しめる札幌の台所。',
      f7_full: '「札幌市中央卸売市場 場外市場」で活気と海の幸を堪能し、札幌の朝を満喫した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Sapporo Central Wholesale Outer Market lively covered stalls with fresh crabs, melons and steaming kaisendon bowl, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: '椿サロン 本店',
      prefecture: '北海道',
      city: '札幌市中央区',
      description:
        '桑園公園向かいの洗練されたデザイナーズカフェ（月〜木日祝11:00〜18:00・金土〜22:00、無休）。北海道産素材にこだわった「ほっとけーき」や珈琲が名物。',
      address: '北海道札幌市中央区北7条西19丁目1-2',
      lat: 43.066729,
      lng: 141.326079,
      clue:
        '桑園公園の向かいに佇む洗練されたデザイナーズカフェ「椿サロン 本店」で心地よいひとときを過ごそう（11:00〜18:00頃、無休）。北海道産の厳選素材に徹底してこだわった名物「ほっとけーき」と香り高い珈琲の相性は抜群で、市場の活気あふれる賑わいから一転して穏やかな空気を楽しめる。十分に寛いだら、東へ進んで築百年超の歴史的洋館カフェ「Cafe BEAN\'s」へと向かおう。',
      surprise: '北海道産素材で焼き上げたふわふわの「ほっとけーき」と、洗練された居心地の良い空間にすっかり魅了された。',
      hook: '椿サロン 本店で甘い時間を過ごしたら、築百年超の洋館「Cafe BEAN\'s」へ向かおう。',
      f7_fragment: '北海道産素材にこだわった名物「ほっとけーき」が味わえるデザイナーズカフェ。',
      f7_full: '「椿サロン 本店」でふわふわのほっとけーきと珈琲を味わい、贅沢なカフェ時間を過ごした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tsubaki Salon Sapporo stylish minimalist timber cafe serving thick fluffy Hokkaido hotcakes and pour-over coffee, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: "Cafe BEAN's",
      prefecture: '北海道',
      city: '札幌市中央区',
      description:
        '北大名誉教授の書庫だった築100年超の歴史的洋館を活かしたカフェ（11:30〜20:00・L.O.19:00、水曜休）。自家焙煎珈琲と手作りスイーツが静かな時間を届けてくれる。',
      address: '北海道札幌市中央区北6条西12丁目8-4',
      lat: 43.06702,
      lng: 141.336468,
      clue:
        '北海道大学名誉教授の書庫だったという築百年超の歴史的洋館を活かした喫茶「Cafe BEAN\'s」へ立ち寄ろう（11:30〜20:00、水曜休）。長い時代を刻んだ木の温もりが残る静かな空間でいただく自家焙煎珈琲と手作りスイーツは、知的な札幌の面影を感じさせてくれる特別な味わい。歴史的洋館の空気を心ゆくまで満喫したら、最後は日本有数の「北海道大学植物園」へと歩いて向かおう。',
      surprise: '北大名誉教授の書庫だった築百年超の洋館という背景と、自家焙煎珈琲の深い香りが心に沁みた。',
      hook: 'Cafe BEAN\'sで洋館の雰囲気を味わったら、南東の「北海道大学植物園」へ向かおう。',
      f7_fragment: '北大名誉教授の書庫だった築百年超の洋館で自家焙煎珈琲を味わえるカフェ。',
      f7_full: '「Cafe BEAN\'s」の重厚な洋館で自家焙煎珈琲を飲み、札幌の歴史に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cafe Beans century-old wooden western-style house interior with dark bookshelves and steaming roasted coffee cup, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '北海道大学植物園',
      prefecture: '北海道',
      city: '札幌市中央区',
      description:
        '明治19年（1886年）開園、日本で2番目に古い植物園（夏期4/29〜11/3 9:00〜16:30等・月曜休、一般420円・小中学生300円／冬期温室のみ平日10:00〜15:30等、日祝休、7歳以上120円）。',
      address: '北海道札幌市中央区北3条西8丁目1',
      lat: 43.064106,
      lng: 141.344371,
      clue:
        '旅の締めくくりは、明治十九年開園という日本で二番目に古い歴史を誇る「北海道大学植物園」の豊かな緑の中を歩こう（夏期9:00〜16:30等・月曜休、一般420円）。札幌の都心部にありながら往時の原生林の面影を色濃く残す広大な園内や歴史ある温室を巡れば、開拓以前の北海道の大自然に触れるような清々しい感動がある。緑の余韻を抱いて、桑園の街歩きを心地よく晴れやかに笑顔で結ぼう。',
      surprise: '札幌中心部のすぐそばに、明治十九年開園の広大な原生林の面影を残す植物園が広がっていたとは感動だった。',
      hook: '',
      f7_fragment: '明治十九年開園、日本で二番目に古い歴史と原生林の緑を伝える植物園。',
      f7_full: '「北海道大学植物園」の豊かな緑と歴史的空間を歩き、桑園の街歩きを締めくくった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hokkaido University Botanical Garden towering northern elm trees and classic glass conservatory in sunlit parkland, no text, no letters.',
    },
  ],
};
