// scripts/areas/sakkuru.mjs
// station_order: 884

export default {
  slug: 'sakkuru',
  station_order: 884,
  station: '咲来',
  line: 'JR宗谷本線',
  area_name: '咲来・村発祥の神社と白いそば、シフォン喫茶',
  prefecture: '北海道',
  municipality: '音威子府村',
  category: '白いそばと村発祥の地',
  budget_tier: 2,
  tags: ['北海道', '音威子府村', '咲来駅', '咲来そば', 'カフェ咲来'],
  style_genre: 'ink_and_watercolor',
  title: '咲来・村発祥の常盤神社と白いそばに喫茶へ',
  description:
    'アイヌ語「夏の通り道」に由来する音威子府村発祥の地「JR咲来駅」から、白っぽい名物そばの「お食事処 咲来」、開拓の碑が立つ「常盤神社・咲来開拓之碑」、廃校活用の「旧咲来小学校・楢の大樹の碑」、そば粉シフォンの「カフェ咲来」を巡る徒歩ルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Sakkuru rural station, rustic noodle diner serving pale buckwheat Sakkuru soba, hillside Tokiwa Shrine monument, former schoolhouse memorial stone, and cozy cafe with chiffon cake, full bleed, no text, no letters.',
  question: '音威子府村発祥の地・咲来の駅から名物の白いそばや開拓神社、カフェを巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '音威子府産玄そば粉を使いながら白っぽい見た目が特徴の「お食事処 咲来」',
      subtext: '黒い音威子府そばとはまた違う、風味豊かな白い「咲来そば」の美味しさに驚いた。',
      badge: {
        code: 'sakkuru_shokudo',
        name_ja: '咲来・白い咲来そばの通',
        subtitle_en: 'Sakkuru Soba Connoisseur',
        description: 'お食事処 咲来で音威子府産玄そばの「咲来そば」を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of pale delicate buckwheat soba noodles with green onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治三十七年の駅逓所設置や村発祥の記憶を伝える「常盤神社・咲来開拓之碑」',
      subtext: 'かつて「常盤村」役場も置かれた音威子府開基の原点に立ち、歴史の重みを感じた。',
      badge: {
        code: 'sakkuru_tokiwa',
        name_ja: '咲来・常盤村発祥の証',
        subtitle_en: 'Origin Witness of Sakkuru',
        description: '常盤神社・咲来開拓之碑で音威子府村発祥の歴史に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a hilltop wooden shrine torii beside an engraved stone pioneer monument under clear sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '明治三十九年開校の学び舎を継ぐ「旧咲来小学校・楢の大樹の碑」',
      subtext: '公民館として残る校舎と旧校舎跡地の碑に、百年にわたる地域の絆を感じた。',
      badge: {
        code: 'sakkuru_school',
        name_ja: '咲来・楢の大樹の学び舎',
        subtitle_en: 'Old Schoolhouse Walker of Sakkuru',
        description: '旧咲来小学校（咲来公民館）と楢の大樹の碑を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a historic wooden rural schoolhouse facade beside a tall oak tree memorial stone, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'そば粉100%シフォンケーキとエゾシカ料理が人気の「カフェ咲来」',
      subtext: 'ハンターでもある店主の温かいもてなしと、ふわっと香るシフォンに癒された。',
      badge: {
        code: 'sakkuru_cafe',
        name_ja: '咲来・そば粉シフォンの憩い',
        subtitle_en: 'Cafe Guest of Sakkuru',
        description: 'カフェ咲来で地元そば粉100%のシフォンケーキと珈琲を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a fluffy slice of buckwheat chiffon cake beside a steaming cup of coffee on a warm wooden cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sakkuru_master',
    name_ja: '咲来・白いそばと村発祥巡り',
    subtitle_en: 'Sakkuru Origin & Soba Master',
    description: 'JR咲来駅からお食事処咲来、常盤神社、旧咲来小学校、カフェ咲来までを巡った証',
    image_prompt:
      'A circular emblem combining pale buckwheat soba bowl, hillside pioneer stone monument, old schoolhouse and fluffy chiffon cake, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR咲来駅',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '1912年（大正元年）11月5日開業の無人駅（終日開放・無料）。地名はアイヌ語「サク・ル（夏の通り道）」に由来し、音威子府村で最初に開拓が進んだ歴史ある集落の玄関口。',
      address: '北海道中川郡音威子府村字咲来1',
      lat: 44.692461,
      lng: 142.267355,
      clue:
        '大正元年十一月に開業し、アイヌ語で「夏の通り道（サク・ル）」を意味する地名に由来する「JR咲来駅」から散策を始めよう（終日利用可）。ここ咲来は、実は音威子府村で最初に開拓が進められた村発祥の地として知られる歴史ある集落だ。澄んだ北の空気を胸いっぱいに感じながら小さな木造風の無人駅を後にしたら、まずは国道方面へ歩いて六分ほどの名店「お食事処 咲来」を目指して楽しく進もう。',
      surprise: '北海道で最も人口の少ない村・音威子府の中で、ここ咲来が最初の開拓地だったという歴史が興味深かった。',
      hook: 'JR咲来駅を出たら、徒歩約六分の「お食事処 咲来」へ向かおう。',
      f7_fragment: '大正元年開業、アイヌ語「夏の通り道」に由来する音威子府発祥の地。',
      f7_full: '「JR咲来駅」に降り立ち、村発祥の集落と名物の白いそばを巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Sakkuru Station quiet small Hokkaido wooden railway stop framed by green northern hillside, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'お食事処 咲来',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '音威子府産玄そば粉を使いつつ、一般的な黒いそばとは異なる白っぽい「咲来そば」が名物の食堂。11:00〜18:30（火曜〜14:00）、不定休。咲来そば・丼物等700〜1,300円程度。',
      address: '北海道中川郡音威子府村字咲来393-2',
      lat: 44.688443,
      lng: 142.266424,
      clue:
        '国道沿いの「お食事処 咲来」へ入ろう（11:00〜18:30・火〜14:00、不定休）。音威子府産玄そば粉ながら白っぽい見た目の咲来そばが絶品だ。次は「常盤神社」へ。',
      surprise: '音威子府産玄そば粉を使いながらも白っぽく上品な口当たりの「咲来そば」という存在に驚かされた。',
      hook: 'お食事処 咲来でそばを味わったら、高台の「常盤神社・咲来開拓之碑」へ向かおう。',
      f7_fragment: '音威子府産玄そばを使いながら白っぽく仕上げた「咲来そば」が名物の食堂。',
      f7_full: '「お食事処 咲来」で上品な白い咲来そばを堪能し、地元の食文化の奥深さに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a welcoming country diner table with a steaming bowl of pale handmade buckwheat soba noodles and green onions, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '常盤神社・咲来開拓之碑',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '明治37年（1904年）のパンケサックル駅逓所設置や、かつて「常盤村」役場が置かれた音威子府村発祥地の歴史を伝える神社と記念碑（常時参拝・見学可・無料）。',
      address: '北海道中川郡音威子府村字咲来3',
      lat: 44.689626,
      lng: 142.269716,
      clue:
        'お食事処 咲来から歩いて五分ほどの高台に鎮座する「常盤神社・咲来開拓之碑」へゆっくりと参拝しよう（見学自由・無料）。明治三十七年にパンケサックル駅逓所が設けられ、かつては村名である「常盤村」の役場も置かれた音威子府発祥の地の記憶を静かに今に伝えている。開拓の先人たちに深い感謝を込めて静かに手を合わせたら、すぐ近くの「旧咲来小学校・楢の大樹の碑」へとのんびり歩いて向かおう。',
      surprise: 'かつての村名「常盤村」の役場が咲来に置かれていたことや、明治の駅逓所の歴史を現地で実感できた。',
      hook: '常盤神社に参拝したら、徒歩約五分の「旧咲来小学校・楢の大樹の碑」へ向かおう。',
      f7_fragment: '明治の駅逓所設置や旧常盤村役場など、村発祥の記憶を刻む神社と開拓碑。',
      f7_full: '「常盤神社・咲来開拓之碑」を訪れ、明治三十七年から続く村の原点に手を合わせた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tokiwa Shrine hilltop wooden torii and engraved stone pioneer monument overlooking quiet Hokkaido village, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '旧音威子府村立咲来小学校・楢の大樹の碑',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '1906年（明治39年）開校、2007年（平成19年）閉校（外観・記念碑見学自由・無料）。現校舎は「咲来公民館」として活用され、河川改修前の旧校舎跡地には「楢の大樹の碑」が残る。',
      address: '北海道中川郡音威子府村字咲来4',
      lat: 44.694589,
      lng: 142.26423,
      clue:
        '明治三十九年に開校し、平成十九年の閉校まで百年以上にわたり地域の子どもたちを見守り続けた「旧音威子府村立咲来小学校（咲来公民館）」と「楢の大樹の碑」を訪ねよう（見学自由・無料）。現在も公民館として大切に守られる校舎の姿と、河川改修前の旧校舎跡地を示す記念碑が、村人の強い絆の深さを伝えてくれる。歴史の重みをじっくり感じたら、最後は隠れ家「カフェ咲来」へとゆっくり向かおう。',
      surprise: '明治三十九年から百年続いた小学校の記憶が、公民館と「楢の大樹の碑」として大切に受け継がれていた。',
      hook: '旧咲来小学校の記憶を辿ったら、旅の締めくくりに「カフェ咲来（cafe 咲来）」へ向かおう。',
      f7_fragment: '明治三十九年開校の学び舎を継ぐ公民館と、旧校舎跡を示す楢の大樹の碑。',
      f7_full: '「旧音威子府村立咲来小学校・楢の大樹の碑」を巡り、百年続く地域の絆に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of former Sakkuru Elementary School wooden community hall and carved stone monument beside oak trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'カフェ咲来（cafe 咲来）',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        'ハンターでもある店主が営み、新鮮なエゾシカ料理や地元そば粉100%シフォンケーキ、珈琲が味わえる人気カフェ。11:30〜15:00（事前予約で時間外対応可）、不定休。スイーツ・料理500〜1,200円前後。',
      address: '北海道中川郡音威子府村字咲来321-3',
      lat: 44.689537,
      lng: 142.266499,
      clue:
        '旅の締めくくりは、集落の中で温かいもてなしが待っている隠れ家「カフェ咲来（cafe 咲来）」でほっと寛ごう（11:30〜15:00、不定休）。ハンターでもある店主が腕を振るう新鮮なエゾシカ料理や、地元のそば粉を100%使ってふんわり焼き上げた名物シフォンケーキ、香り豊かな珈琲は心まで温まる美味しさだ。北の小さな村の優しい温もりにたっぷりと包まれ、咲来の旅を穏やかに結ぼう。',
      surprise: '地元産そば粉100%のふわふわシフォンケーキと、店主の温かい人柄があふれる居心地の良さに癒された。',
      hook: '',
      f7_fragment: '地元そば粉100%のシフォンケーキやエゾシカ料理が人気の隠れ家カフェ。',
      f7_full: '「カフェ咲来」でそば粉のシフォンケーキと珈琲を味わい、村の温もりとともに旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cafe Sakkuru warm rustic timber interior with a slice of fluffy buckwheat chiffon cake and hot coffee cup, no text, no letters.',
    },
  ],
};
