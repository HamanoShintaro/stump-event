// scripts/areas/teshiogawa_onsen.mjs
// station_order: 883

export default {
  slug: 'teshiogawa_onsen',
  station_order: 883,
  station: '天塩川温泉',
  line: 'JR宗谷本線',
  area_name: '天塩川温泉・板張り駅と掛け流し温泉、森の巨樹',
  prefecture: '北海道',
  municipality: '音威子府村',
  category: '秘境温泉と森の巨樹',
  budget_tier: 2,
  tags: ['北海道', '音威子府村', '天塩川温泉駅', '常盤鉱泉', '天仰の松'],
  style_genre: 'ink_and_watercolor',
  title: '天塩川温泉・板張り駅と掛け流し名湯に巨樹へ',
  description:
    '木造板張りホームが旅情を誘う「JR天塩川温泉駅」から、天塩川を渡る「止若内橋」、大正発見の冷鉱泉を源泉とする「住民保養センター 天塩川温泉」、「天塩川リバーサイドパークキャンプ場（澱粉工場発祥之碑）」、森の巨人たち百選「天仰の松」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Teshiogawa-Onsen wooden plank railway platform, scenic bridge spanning wide Teshio River, rustic hot spring lodge surrounded by northern woods, riverside monument, and ancient towering yew tree, full bleed, no text, no letters.',
  question: '宗谷本線の秘境駅から天塩川を渡り、掛け流し温泉や森の巨樹を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「南咲来仮乗降場」から昇格した木造板張りホームの「JR天塩川温泉駅」',
      subtext: '短い板張りホームに降り立つ瞬間から、道北の秘境温泉旅への期待が高まった。',
      badge: {
        code: 'teshiogawa_onsen_station',
        name_ja: '天塩川温泉・板張り駅旅人',
        subtitle_en: 'Plank Platform Traveler',
        description: '木造板張りホームの秘境駅・JR天塩川温泉駅に降り立った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a short weathered wooden plank railway platform surrounded by tall wild summer grasses, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '渡船や吊り橋から永久橋へと継がれた天塩川の架け橋「止若内橋」',
      subtext: '大河・天塩川の雄大な流れを見下ろしながら歩く橋上の風景が清々しかった。',
      badge: {
        code: 'teshiogawa_onsen_bridge',
        name_ja: '天塩川温泉・大河の渡橋',
        subtitle_en: 'Teshio River Bridge Crosser',
        description: '渡船から永久橋へと続く止若内橋で天塩川を渡った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steel truss bridge stretching across the wide sparkling Teshio River framed by forested hills, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '大正初期発見の「常盤鉱泉」を源泉とする「住民保養センター 天塩川温泉」',
      subtext: '源泉100%掛け流しの湯と名物・源泉ラーメンや音威子府そばに心身が潤った。',
      badge: {
        code: 'teshiogawa_onsen_yudokoro',
        name_ja: '天塩川温泉・常盤鉱泉の湯',
        subtitle_en: 'Spring Guest of Teshiogawa',
        description: '住民保養センター 天塩川温泉で掛け流しの湯と食事を満喫した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming open-air stone hot spring bath overlooking forest trees beside a bowl of dark soba noodles, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '道有林の深い森にそびえ立つイチイ（オンコ）の古木「天仰の松」',
      subtext: '道有林の奥に静かに佇む巨大なオンコ（イチイ）の生命力に息を呑んだ。',
      badge: {
        code: 'teshiogawa_onsen_matsu',
        name_ja: '天塩川温泉・天仰の巨樹守',
        subtitle_en: 'Forest Giant Admirer of Tengyo',
        description: '道有林に佇むイチイの巨樹・天仰の松を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an ancient gnarled Japanese yew tree towering deep inside a sunlit northern forest, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'teshiogawa_onsen_master',
    name_ja: '天塩川温泉・秘境の湯と巨樹巡り',
    subtitle_en: 'Teshiogawa Onsen & Forest Giant Master',
    description: 'JR天塩川温泉駅から止若内橋、天塩川温泉、リバーサイドパーク、天仰の松までを巡った証',
    image_prompt:
      'A circular emblem combining wooden plank railway stop, river bridge, steaming mineral bath and ancient giant yew tree, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR天塩川温泉駅',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '1956年「南咲来仮乗降場」として開業、1981年「天塩川温泉仮乗降場」へ改称、1987年JR駅へ昇格した無人駅（終日開放・無料）。木造板張りホームが秘境駅らしい風情を醸し出す。',
      address: '北海道中川郡音威子府村字咲来1',
      lat: 44.664691,
      lng: 142.25861,
      clue:
        '昭和三十一年に南咲来仮乗降場として開業し、のちに温泉の名を冠して旅客駅へと昇格した北海道の秘境駅「JR天塩川温泉駅」から散策を始めよう（終日利用可）。深い緑に包まれた木造板張りの小さなホームに降り立ち、道北の清らかな空気を胸いっぱいに吸い込んで駅舎を後にしたら、まずは天塩川の雄大な流れに架かる美しい「止若内橋」を目指して一本道をのんびりとまっすぐ楽しく歩いて出掛けよう。',
      surprise: '短い木造板張りのホームと周囲の豊かな森が織りなす、秘境駅ならではの旅情に心が高鳴った。',
      hook: 'JR天塩川温泉駅を出たら、徒歩約五分の「止若内橋」へ向かおう。',
      f7_fragment: '昭和三十一年仮乗降場として開業した、木造板張りホームの秘境温泉駅。',
      f7_full: '「JR天塩川温泉駅」の板張りホームに降り立ち、大河と秘湯の旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Teshiogawa-Onsen Station short weathered timber-plank platform amidst tall northern summer grasses, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '止若内橋（天塩川河川景観）',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '駅から天塩川温泉へ向かう一本道で天塩川を渡る橋（通行自由・無料）。かつての渡船や吊り橋から永久橋へと移り変わった道北の交通史と、雄大な河川景観を伝える。',
      address: '北海道中川郡音威子府村字咲来919',
      lat: 44.660405,
      lng: 142.254483,
      clue:
        '「止若内橋」から天塩川の流れを眺めよう（通行自由）。かつての渡船や吊り橋から永久橋へ継がれた道北交通の要衝だ。渡った先の「住民保養センター 天塩川温泉」へ。',
      surprise: '渡船から吊り橋、そして永久橋へと姿を変えながら人々を運び続けた大河の架け橋に歴史を感じた。',
      hook: '止若内橋を渡って、すぐ先の「住民保養センター 天塩川温泉」へ向かおう。',
      f7_fragment: '渡船や吊り橋から永久橋へと継がれ、大河・天塩川の雄姿を見渡す橋。',
      f7_full: '「止若内橋」の上から悠々たる天塩川の流れを眺め、温泉郷への期待を膨らませた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Yameruwakkanai Bridge spanning wide tranquil Teshio River flanked by dense northern hills, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: '住民保養センター 天塩川温泉',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '大正初期発見の冷鉱泉「常盤鉱泉」を源泉とする100%掛け流し（加温）温泉。入浴10:00〜21:00（大人500円）、レストラン11:00〜14:00・17:00〜19:30（源泉ラーメン・音威子府そば等）、不定休。',
      address: '北海道中川郡音威子府村字咲来919',
      lat: 44.660483,
      lng: 142.254355,
      clue:
        '大正初期に発見された常盤鉱泉を源泉とする一軒宿「住民保養センター 天塩川温泉」でゆったりと温まろう（入浴10:00〜21:00・大人500円、食堂あり、不定休）。源泉100%掛け流しの柔らかな湯にじっくり浸かり、食堂で名物の源泉ラーメンや音威子府そばを味わえばまさに極上の心地よさだ。湯上がりにはすぐ裏手の「天塩川リバーサイドパークキャンプ場」方面をゆっくりと散策しよう。',
      surprise: '源泉掛け流しの優しい湯ざわりと、館内レストランの源泉ラーメン・音威子府そばに身も心も温まった。',
      hook: '天塩川温泉で湯と食を満喫したら、裏手の「天塩川リバーサイドパークキャンプ場」へ向かおう。',
      f7_fragment: '大正初期発見の常盤鉱泉を引く100%掛け流しの湯と食堂が人気の温泉拠点。',
      f7_full: '「住民保養センター 天塩川温泉」で掛け流しの名湯に浸かり、極上の休息を味わった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Teshiogawa Onsen rustic mountain lodge bathhouse surrounded by lush northern forest beside river, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '天塩川リバーサイドパークキャンプ場',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '天塩川河畔に広がる自然豊かなキャンプ場（5月中旬〜10月下旬、周辺散策自由・無料）。温泉裏手周辺には大正期以降に盛んだった馬鈴薯澱粉製造を伝える「音威子府村澱粉工場発祥之碑」が建つ。',
      address: '北海道中川郡音威子府村字咲来919',
      lat: 44.660452,
      lng: 142.252713,
      clue:
        '温泉の裏手に広がる自然豊かな「天塩川リバーサイドパークキャンプ場」周辺をのんびりと歩いてみよう（キャンプ5〜10月・散策自由・無料）。静かな天塩川の爽やかな川風を感じながら周囲を眺めると、大正期以降にこの地で盛んだった馬鈴薯澱粉製造の歴史を今に伝える「音威子府村澱粉工場発祥之碑」に出会える。地域の貴重な産業史にじっくり触れたら、最後は林道奥の巨樹「天仰の松」へと向かおう。',
      surprise: '美しい天塩川河畔の風景の中に「澱粉工場発祥之碑」が残されており、開拓産業の意外な歴史を知れた。',
      hook: 'リバーサイドパークから物満内林道方面へ進み、森の巨樹「天仰の松」へ向かおう。',
      f7_fragment: '天塩川河畔に広がり、地域の澱粉産業史を伝える記念碑も佇む自然空間。',
      f7_full: '「天塩川リバーサイドパークキャンプ場」周辺を歩き、川辺の自然と開拓史に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Teshiogawa Riverside Park tranquil grassy riverside clearing with distant monument and birch trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '天仰の松',
      prefecture: '北海道',
      city: '音威子府村',
      description:
        '北海道の名木として親しまれる巨大なイチイ（オンコ）の古木（見学自由・無料、冬季積雪期や林道状況に注意・夏季熊鈴推奨）。止若内橋先の三叉路から物満内林道へ約2〜3km。',
      address: '北海道中川郡音威子府村物満内224林班',
      lat: 44.640684,
      lng: 142.24674,
      clue:
        '旅の締めくくりは、道有林の深い森の中で天を仰ぐようにそびえる道北の名木「天仰の松」をじっくり仰ぎ見よう（見学自由・無料、積雪・林道状況注意）。松の名を持ちながらも樹種は北海道でオンコと呼ばれるイチイの巨樹で、太い幹と堂々と枝を広げる立派な樹姿はまさに圧巻の迫力だ。太古の森の豊かな生命力に深い感動を覚え、天塩川温泉の豊かな旅をいつまでも静かに、そして心穏やかに豊かに結ぼう。',
      surprise: '「天仰の松」の名で親しまれる巨大なイチイの古木が放つ神秘的な生命力に、思わず息を呑んだ。',
      hook: '',
      f7_fragment: '道有林の深い森に佇み、天を仰ぐように枝を広げるイチイの巨木。',
      f7_full: '「天仰の松」の堂々たる樹姿を仰ぎ見、音威子府の深い森の記憶とともに旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tengyo-no-Matsu ancient towering yew tree in deep Hokkaido woodland bathed in sunbeams, no text, no letters.',
    },
  ],
};
