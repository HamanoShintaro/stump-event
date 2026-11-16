// scripts/areas/saku_hokkaido.mjs
// station_order: 887

export default {
  slug: 'saku_hokkaido',
  station_order: 887,
  station: '佐久',
  line: 'JR宗谷本線',
  area_name: '佐久・ふるさと伝承館とクビナガリュウの里',
  prefecture: '北海道',
  municipality: '中川町',
  category: '化石と伝承の里',
  budget_tier: 2,
  tags: ['北海道', '中川町', '佐久駅', 'エコミュージアム', '道の駅なかがわ'],
  style_genre: 'ink_and_watercolor',
  title: '佐久・伝承の駅舎と首長竜の館に道の駅へ',
  description:
    '「佐久ふるさと伝承館」を併設する「JR佐久駅」から、北大演習林の丘に創祀された「佐久神社」、天塩川を渡る「佐久橋」、廃校活用でクビナガリュウ骨格を展示する「中川町エコミュージアムセンター」、暖炉とラーメンが人気の「道の駅なかがわ」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Saku rural station, hilltop wooden shrine, Teshio River bridge, converted schoolhouse museum featuring giant plesiosaur skeleton, and cozy roadside station hearth dining hall, full bleed, no text, no letters.',
  question: 'ハッカ蒸留の伝承やクビナガリュウの化石が眠る佐久の駅からエコミュージアム、道の駅を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '木製ハッカ蒸留装置や馬橇を展示する「佐久ふるさと伝承館」併設の「JR佐久駅」',
      subtext: '駅待合室と一体になった伝承館に、かつて北見と並んだハッカ産地の誇りを見た。',
      badge: {
        code: 'saku_hokkaido_station',
        name_ja: '佐久・ハッカ伝承の駅人',
        subtitle_en: 'Heritage Station Visitor of Saku',
        description: '佐久ふるさと伝承館を併設するJR佐久駅を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an antique wooden peppermint oil distiller and vintage horse sleigh inside a quiet northern railway hall, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '大正初めに北大演習林の丘に小祠を建てて創祀された「佐久神社」',
      subtext: '林業と開拓の歴史が息づく高台の静かな社に、地域の長い歩みを感じた。',
      badge: {
        code: 'saku_hokkaido_shrine',
        name_ja: '佐久・演習林の杜守',
        subtitle_en: 'Sanctuary Walker of Saku Shrine',
        description: '北大演習林の丘に創祀された佐久神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a modest wooden Japanese shrine sanctuary nestled among tall northern forest trees on a hill, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '旧佐久中学校を活用し約11mのクビナガリュウ骨格を展示する「中川町エコミュージアムセンター」',
      subtext: '中川町で発掘された巨大なクビナガリュウとアンモナイト化石の迫力に圧倒された。',
      badge: {
        code: 'saku_hokkaido_ecomuseum',
        name_ja: '佐久・太古首長竜の探検者',
        subtitle_en: 'Plesiosaur Explorer of Nakagawa',
        description: '中川町エコミュージアムセンターでクビナガリュウ骨格と化石を見学した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a dramatic fossilized plesiosaur skeleton and spiral ammonite shell inside a bright timber-framed museum hall, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '道内最大級の暖炉と道産小麦麺ラーメンが迎える「道の駅なかがわ」',
      subtext: '大きな暖炉の温もりと、山わさびソフトやボリュームある食事に旅の疲れが癒えた。',
      badge: {
        code: 'saku_hokkaido_michinoeki',
        name_ja: '佐久・大暖炉の道の駅客',
        subtitle_en: 'Hearthside Guest of Nakagawa',
        description: '道の駅なかがわで大きな暖炉と地元グルメを満喫した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a grand stone hearth fireplace and a steaming bowl of golden Hokkaido wheat ramen, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'saku_hokkaido_master',
    name_ja: '佐久・太古の化石と伝承巡り',
    subtitle_en: 'Saku Fossil & Heritage Master',
    description: 'JR佐久駅から佐久神社、佐久橋、中川町エコミュージアムセンター、道の駅なかがわまでを巡った証',
    image_prompt:
      'A circular emblem combining plesiosaur fossil skeleton, wooden mint distiller, river bridge and warm stone hearth, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR佐久駅（佐久ふるさと伝承館）',
      prefecture: '北海道',
      city: '中川町',
      description:
        '1922年（大正11年）11月8日開業の無人駅（終日開放・無料）。駅舎内に「佐久ふるさと伝承館」を併設し、かつて北見と並んだハッカの木製蒸留装置や馬橇、アンモナイト化石を展示。',
      address: '北海道中川郡中川町字佐久1',
      lat: 44.744036,
      lng: 142.048239,
      clue:
        '大正十一年に開業し、駅舎内に「佐久ふるさと伝承館」を併設する大変ユニークな無人駅「JR佐久駅」から散策を始めよう（終日利用可）。待合室に丁寧に展示されたかつてのハッカ木製蒸留装置や馬橇、アンモナイト化石をじっくり眺めてから外へ出たら、まずは大正初めに北大演習林の丘に小さな祠を建てて創祀された地域の鎮守「佐久神社」を目指して、のんびりと楽しく歩いてすぐに向かってみよう。',
      surprise: '駅の待合室そのものが地域の伝承館になっており、ハッカ蒸留器や化石が身近に展示されていて驚いた。',
      hook: 'JR佐久駅を出たら、地域の鎮守「佐久神社」へ向かおう。',
      f7_fragment: '駅舎内にハッカ蒸留装置や馬橇を伝える「佐久ふるさと伝承館」を併設する駅。',
      f7_full: '「JR佐久駅（佐久ふるさと伝承館）」に降り立ち、ハッカと化石の里を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Saku Station tidy rural railway building housing a small heritage display hall under clear northern sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '佐久神社',
      prefecture: '北海道',
      city: '中川町',
      description:
        '大正初めに北大演習林の丘に小祠を建てて創建されたと伝わる地域の神社（終日参拝自由・無料）。静かな森の気配に包まれ、佐久地区の開拓と林業の歴史を今に伝えている。',
      address: '北海道中川郡中川町字佐久2',
      lat: 44.746308,
      lng: 142.04958,
      clue:
        '北大演習林の丘に創祀された「佐久神社」へ参拝しよう（参拝自由）。大正初めから林業と開拓の安全を見守り続ける静かな社だ。次は天塩川に架かる「佐久橋」へ。',
      surprise: '北大演習林のほど近くに佇む静かな社殿に、森とともに歩んできた佐久の開拓史を感じた。',
      hook: '佐久神社に参拝したら、天塩川を渡る「佐久橋」へ向かおう。',
      f7_fragment: '大正初めに北大演習林の丘に小祠を建てて創祀された佐久の鎮守。',
      f7_full: '「佐久神社」の静かな境内で手を合わせ、森とともに歩んだ集落の歴史に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Saku Shrine modest wooden sanctuary framed by tall northern forest trees, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '佐久橋',
      prefecture: '北海道',
      city: '中川町',
      description:
        '道道218号板谷佐久停車場線沿いに天塩川を跨いで架かる橋梁（終日通行可・無料）。雄大な天塩川の流れと佐久地区の豊かな山並みを望むことができる。',
      address: '北海道中川郡中川町字佐久218',
      lat: 44.745303,
      lng: 142.062551,
      clue:
        '天塩川をゆったりと跨いで架かる「佐久橋」の上から、道北の大河が織りなす雄大な風景をじっくりと眺めよう（通行自由・無料）。山並みの深い緑を映しながら北へと流れる広い川面を見渡せば、はるか太古の白亜紀にはこのあたり一帯が海だったという地質の物語にもロマンあふれる想像がどこまでも果てしなく広がる。爽やかな川風を感じたら、歩いて西の「中川町エコミュージアムセンター」へ向かおう。',
      surprise: 'ゆったりと流れる天塩川を見渡す橋の上から、この大地が太古の海だった歴史に思いを馳せられた。',
      hook: '佐久橋で天塩川を望んだら、「中川町エコミュージアムセンター」へ向かおう。',
      f7_fragment: '道道218号沿いに天塩川を跨ぎ、佐久の豊かな山河を見渡す橋梁。',
      f7_full: '「佐久橋」から天塩川のゆったりとした流れを眺め、自然の広がりに深呼吸した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Saku Bridge spanning calm Teshio River surrounded by lush summer valley hills, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '中川町エコミュージアムセンター（エコールなかがわ）',
      prefecture: '北海道',
      city: '中川町',
      description:
        '旧佐久中学校校舎を活用した自然史博物館。9:30〜16:30、月曜（祝翌日）・12/29〜1/7休（11月中旬〜4月中旬は土日祝も休館）、高校生以上200円・中学生以下無料。約11mのクビナガリュウ復元骨格等を展示。',
      address: '北海道中川郡中川町字安川28-9',
      lat: 44.744678,
      lng: 142.035436,
      clue:
        '旧佐久中学校の校舎を活用した自然史博物館「中川町エコミュージアムセンター（エコールなかがわ）」へ入ってみよう（9:30〜16:30、月曜休等、大人200円）。町内で発掘された全長約11メートルの巨大なクビナガリュウ復元骨格や見事なアンモナイト化石の数々は、まさに圧巻の大迫力だ。太古の海の神秘にすっかり心を奪われたら、国道40号沿いに立つ「道の駅なかがわ」へと向かおう。',
      surprise: '廃校となった中学校の中に約11mもの巨大なクビナガリュウの復元骨格が迫る光景に息を呑んだ。',
      hook: 'エコミュージアムで太古の化石に触れたら、北の「道の駅なかがわ」へ向かおう。',
      f7_fragment: '旧佐久中学校を活用し、全長約11mのクビナガリュウ骨格や化石を展示する博物館。',
      f7_full: '「中川町エコミュージアムセンター」で巨大なクビナガリュウ骨格を見上げ、太古のロマンに酔った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Nakagawa Eco Museum converted wooden school gymnasium displaying a giant fossilized plesiosaur skeleton, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: '道の駅なかがわ（レストラン匠舎）',
      prefecture: '北海道',
      city: '中川町',
      description:
        '道内最大級の暖炉を備えた国道40号沿いの拠点。物産9:00〜17:00・レストラン11:00〜13:30頃、12/30〜1/4休。道産小麦100%麺ラーメンや自家製「ロースカツ三兄弟」、ハスカップや山わさびソフトが人気。',
      address: '北海道中川郡中川町字誉498-1',
      lat: 44.801552,
      lng: 142.067063,
      clue:
        '旅の締めくくりは、国道40号沿いに建つ「道の駅なかがわ（レストラン匠舎）」へ足を運ぼう（物産9:00〜17:00・食堂11:00〜13:30頃、年末年始休）。道内最大級の大きな暖炉が温かく迎えてくれる館内では、道産小麦100%麺のラーメンや名物ロースカツ、さらには個性豊かな山わさび・ハスカップソフトまで味わえる。大きな暖炉の優しい温もりに癒され、佐久の楽しい旅を結ぼう。',
      surprise: '館内にそびえる道内最大級の暖炉と、個性的な山わさびソフトや麺類の充実ぶりに思わず笑顔になった。',
      hook: '',
      f7_fragment: '道内最大級の暖炉と道産小麦麺ラーメン、山わさびソフトが人気の道の駅。',
      f7_full: '「道の駅なかがわ」で暖炉の温もりとご当地グルメを楽しみ、佐久の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Roadside Station Nakagawa cozy dining hall with a grand stone hearth fireplace and steaming ramen bowl, no text, no letters.',
    },
  ],
};
