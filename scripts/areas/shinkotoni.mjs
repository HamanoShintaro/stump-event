export default {
  slug: 'shinkotoni',
  station_order: 907,
  station: '新琴似',
  line: 'JR札沼線',
  area_name: '新琴似・屯田兵と防風林',
  prefecture: '北海道',
  municipality: '札幌市北区',
  category: '屯田兵の史跡と喫茶',
  budget_tier: 2,
  tags: ['北海道', '札幌市北区', '新琴似駅', '屯田兵', '防風林'],
  style_genre: 'ink_and_watercolor',
  title: '新琴似・屯田兵の面影と防風林を巡る北の喫茶路',
  description:
    '新琴似屯田兵村の玄関口「JR新琴似駅」から、明治二十年創祀の「新琴似神社」、明治十九年築の洋風木造建築「新琴似屯田兵中隊本部」、自家焙煎の「JINNO COFFEE」、百年超のポプラが並ぶ「屯田防風林」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Shinkotoni Sapporo from elevated commuter station and dignified Shinto shrine to 1886 western-style wooden Tondenhei headquarters, cozy roasting cafe and century-old poplar windbreak forest path, full bleed, no text, no letters.',
  question: '新琴似の駅から屯田兵の歴史を伝える神社や中隊本部、喫茶店を経て百年超の防風林を歩くなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '明治二十年に屯田兵が開拓守護神として祀った「新琴似神社」',
      subtext: '清らかな境内と季節の花手水が美しく、屯田兵村から続く地域の信仰を感じた。',
      badge: {
        code: 'shinkotoni_shrine',
        name_ja: '新琴似・開拓守護の参拝',
        subtitle_en: 'Shinkotoni Shrine Visitor',
        description: '明治二十年創祀の新琴似神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a majestic Shinto torii gate surrounded by tall northern trees and flower water basin, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治十九年建築の札幌市指定有形文化財「新琴似屯田兵中隊本部」',
      subtext: '新琴似屯田兵村の司令部だった貴重な洋風木造建築が今も美しい姿で残っていた。',
      badge: {
        code: 'shinkotoni_headquarters',
        name_ja: '新琴似・屯田兵中隊の記憶',
        subtitle_en: 'Tondenhei Headquarters Historian',
        description: '明治十九年築の新琴似屯田兵中隊本部を見学した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an 1886 pale clapboard western-style wooden Tondenhei headquarters building, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '自家焙煎珈琲とふわとろパンケーキが人気の「JINNO COFFEE」',
      subtext: '落ち着いた空間で味わう自家焙煎珈琲とパンケーキが散策の疲れを癒やしてくれた。',
      badge: {
        code: 'shinkotoni_jinno',
        name_ja: '新琴似・自家焙煎の喫茶人',
        subtitle_en: 'Jinno Coffee Guest',
        description: 'JINNO COFFEEで自家焙煎珈琲とスイーツを楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting fluffy golden pancakes beside a steaming mug of roasted coffee, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '樹齢百年超のポプラやヤチダモが続く「屯田防風林（ポプラ通中央緑地）」',
      subtext: '屯田兵が農作物を守るため残した延長二キロ超の防風林の木漏れ日が心地よかった。',
      badge: {
        code: 'shinkotoni_windbreak',
        name_ja: '新琴似・防風林の並木者',
        subtitle_en: 'Tonden Windbreak Forest Walker',
        description: '屯田防風林（ポプラ通中央緑地）の緑道を歩いた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting towering century-old poplar and ash trees arching over a wood-chip walking trail, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'shinkotoni_master',
    name_ja: '新琴似・屯田兵と防風林の旅人',
    subtitle_en: 'Shinkotoni Tonden History Walker',
    description: 'JR新琴似駅から新琴似神社、新琴似屯田兵中隊本部、JINNO COFFEE、屯田防風林までを巡った証',
    image_prompt:
      'A circular emblem combining 1886 wooden Tondenhei headquarters, Shinto torii gate, pancake coffee plate and century-old poplar forest path, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新琴似駅',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1934年（昭和9年）11月20日開業、2000年に高架駅化（終日利用可・無料）。かつての新琴似屯田兵村の玄関口で、地下鉄南北線麻生駅にも近い利便性の高い駅。',
      address: '北海道札幌市北区新琴似8条1-4-1',
      lat: 43.113082,
      lng: 141.335295,
      clue:
        '昭和九年十一月に開業し、かつての新琴似屯田兵村の玄関口として街の歩みを見守り続けてきた「JR新琴似駅」から町歩きと散策を始めよう（終日利用可）。平成十二年に美しく高架化された駅舎を出て西側の通りへと歩を進めれば、目の前には明治の開拓期から受け継がれる深い歴史の舞台が広がっていく。まずは徒歩数分の場所にある地域の総鎮守「新琴似神社」を目指してさっそく元気に笑顔で歩き出そう。',
      surprise: '現代的な高架駅からほんの数分歩くだけで、明治の屯田兵村の歴史が色濃く残るエリアに繋がっていた。',
      hook: 'JR新琴似駅を出たら、西へ徒歩約三分の「新琴似神社」へ向かおう。',
      f7_fragment: '昭和九年開業、かつての新琴似屯田兵村の玄関口を担う高架駅。',
      f7_full: '「JR新琴似駅」に降り立ち、屯田兵の史跡と百年超の防風林を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinkotoni Station clean elevated railway station framed by quiet Sapporo residential avenue, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '新琴似神社',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '明治20年（1887年）5月20日創祀（参拝自由・無料、社務所9:00〜17:00頃）。陸軍屯田兵が入植の際に開拓守護神として祀ったのが始まりで、季節の花手水や特別御朱印も人気。',
      address: '北海道札幌市北区新琴似8条3-1-6',
      lat: 43.11365,
      lng: 141.332171,
      clue:
        '明治二十年創祀の「新琴似神社」へ参拝しよう（参拝自由）。屯田兵が開拓守護神として祀った歴史を持ち、季節の花手水も美しい。次は境内の「新琴似屯田兵中隊本部」へ。',
      surprise: '明治二十年に屯田兵が浄泉地に祀った歴史と、現代の美しい花手水が見事に調和していた。',
      hook: '新琴似神社に参拝したら、境内にある「新琴似屯田兵中隊本部」へ向かおう。',
      f7_fragment: '明治二十年に屯田兵が開拓守護神として祀った由緒ある鎮守社。',
      f7_full: '「新琴似神社」の清らかな境内で手を合わせ、屯田兵村の開拓の祈りに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinkotoni Shrine wooden torii gate and blossom-filled chozuya water basin beneath green canopy, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '新琴似屯田兵中隊本部',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '新琴似神社境内に建つ明治19年（1886年）建築の洋風木造建築（札幌市指定有形文化財、外観常時可・館内公開は4〜11月火木土10:00〜16:00、入館無料）。屯田兵村司令部の貴重な遺構。',
      address: '北海道札幌市北区新琴似8条3-1-8',
      lat: 43.1135,
      lng: 141.331765,
      clue:
        '新琴似神社の境内に堂々と建つ明治十九年建築の札幌市指定有形文化財「新琴似屯田兵中隊本部」をじっくり見学しよう（外観常時可・4〜11月火木土館内公開、無料）。白い下見板張りが目を引く端正な洋風木造建築は、新琴似屯田兵村の司令部として使われた貴重な歴史的遺構であり、往時の開拓と防備の気迫を今に伝えている。歴史に触れたら、カフェ「JINNO COFFEE」で心地よく一息つこう。',
      surprise: '明治十九年建築の本格的な洋風木造の中隊本部が、神社の境内にこれほど良好な状態で保存されていたとは驚いた。',
      hook: '新琴似屯田兵中隊本部を見学したら、北側のカフェ「JINNO COFFEE」へ向かおう。',
      f7_fragment: '明治十九年築の洋風木造建築で、屯田兵村司令部だった市指定有形文化財。',
      f7_full: '「新琴似屯田兵中隊本部」の白い洋風木造建築を眺め、明治の屯田兵の暮らしを偲んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinkotoni Tondenhei Company Headquarters 1886 white clapboard western-style wooden heritage building, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'JINNO COFFEE',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '自家焙煎珈琲とふわとろのパンケーキ、鉄板スパゲッティなどが人気のカフェ（10:30〜17:30等、不定休）。旧・神野喫茶店から続く温かな雰囲気でゆったり寛げる。',
      address: '北海道札幌市北区新琴似10条7-1-1',
      lat: 43.118693,
      lng: 141.328732,
      clue:
        '歴史散策の合間に、自家焙煎珈琲とスイーツが評判の人気カフェ「JINNO COFFEE」で心地よくゆったりと休憩しよう（10:30〜17:30等、不定休）。丁寧に淹れられた香り高い自家焙煎珈琲とともに、ふわとろ食感のパンケーキや懐かしい鉄板スパゲッティを味わえば、歩き疲れた体も心もふんわり温まる。十分にリフレッシュしたら、最後は「屯田防風林（ポプラ通中央緑地）」へと向かおう。',
      surprise: '自家焙煎の香り高い珈琲とふわとろパンケーキの優しい甘さに、北の街歩きの幸せを感じた。',
      hook: 'JINNO COFFEEで一息ついたら、東側の「屯田防風林（ポプラ通中央緑地）」へ向かおう。',
      f7_fragment: '自家焙煎珈琲とふわとろパンケーキ、鉄板スパゲッティが人気のカフェ。',
      f7_full: '「JINNO COFFEE」で自家焙煎珈琲とパンケーキを味わい、穏やかな休憩時間を過ごした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Jinno Coffee cozy neighborhood cafe table with fluffy golden pancakes and steaming coffee mug, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '屯田防風林（ポプラ通中央緑地）',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '明治時代に屯田兵が農作物を強風や寒さから守るために残した自然林をルーツとする延長約2.2kmの緑地（常時開放・無料）。「美しい日本の歩きたくなるみち500選」選定。樹齢100年超のポプラが並ぶ。',
      address: '北海道札幌市北区屯田2条4-3',
      lat: 43.122601,
      lng: 141.333674,
      clue:
        '旅の締めくくりは、明治時代に屯田兵が農作物を厳しい強風や寒さから守るために残した自然林をルーツとする「屯田防風林（ポプラ通中央緑地）」を歩こう（常時開放・無料）。延長約二・二キロにわたって続く木陰の散策路には樹齢百年を超えるポプラやヤチダモの巨木が立ち並び、足元のウッドチップの柔らかな感触が心地よい。開拓の恵みの緑を深く感じて、新琴似の豊かな旅を心地よく晴れやかに結ぼう。',
      surprise: '明治の屯田兵が未来の暮らしを守るために残した百年超のポプラ並木とウッドチップの道が、実に爽やかだった。',
      hook: '',
      f7_fragment: '屯田兵が残した自然林に由来し、樹齢百年超のポプラが続く延長2.2kmの緑地。',
      f7_full: '「屯田防風林」の木漏れ日あふれる並木道を歩き、新琴似の歴史散歩を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tonden Windbreak Forest towering century-old poplar and elm trees shading a peaceful wood-chip walkway, no text, no letters.',
    },
  ],
};
