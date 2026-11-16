// scripts/areas/toikanbetsu.mjs
// station_order: 889

export default {
  slug: 'toikanbetsu',
  station_order: 889,
  station: '問寒別',
  line: 'JR宗谷本線',
  area_name: '問寒別・ダルマ駅舎と看板猫、最北の研究林',
  prefecture: '北海道',
  municipality: '幌延町',
  category: '秘境ダルマ駅と研究林',
  budget_tier: 1,
  tags: ['北海道', '幌延町', '問寒別駅', 'ダルマ駅', '北大天塩研究林'],
  style_genre: 'ink_and_watercolor',
  title: '問寒別・車掌車ダルマ駅と最北の研究林跡へ',
  description:
    'ヨ3500形車掌車転用のダルマ駅舎が迎える「JR問寒別駅」から、看板猫で知られる「Qマート 問寒別店」、集落中心の「問寒別郵便局」、学校林を望む「問寒別神社」、日本最北の大学研究林と歴史を伝える「北海道大学 天塩研究林（問寒別渡船場跡）」を巡る徒歩ルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Toikanbetsu repurposed railway caboose hut station, friendly country grocery shop with calico cat at entrance, quiet rural post office, hilltop Toikanbetsu Shrine, and northern university research forest by river, full bleed, no text, no letters.',
  question: '車掌車のダルマ駅舎が迎える問寒別の集落から看板猫のスーパー、日本最北の大学研究林を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: 'ヨ3500形車掌車を転用したダルマ駅舎が愛らしい「JR問寒別駅」',
      subtext: 'アイヌ語「土が被さる川」に由来する秘境の駅で、鉄道旅の醍醐味を味わえた。',
      badge: {
        code: 'toikanbetsu_station',
        name_ja: '問寒別・車掌車駅の旅人',
        subtitle_en: 'Daruma Station Traveler of Toikanbetsu',
        description: 'ヨ3500形車掌車転用のダルマ駅舎・JR問寒別駅を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a nostalgic converted railway caboose station hut under vast northern sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '集落の暮らしを支え看板猫でも親しまれる「Qマート 問寒別店」',
      subtext: '小さな集落の頼もしいスーパーで、地元の温かな日常と看板猫に癒された。',
      badge: {
        code: 'toikanbetsu_qmart',
        name_ja: '問寒別・看板猫の商店客',
        subtitle_en: 'Village Market Friend of Toikanbetsu',
        description: 'Qマート 問寒別店で集落の温かい日常に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a friendly country food shop doorway with a cute resting cat beside woven market baskets, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '学校林と遊歩道を望み、夏の例祭が受け継がれる「問寒別神社」',
      subtext: '豊かな学校林の緑に寄り添う静かな境内に、地域コミュニティの強さを感じた。',
      badge: {
        code: 'toikanbetsu_shrine',
        name_ja: '問寒別・学校林の社守',
        subtitle_en: 'Forest Shrine Walker of Toikanbetsu',
        description: '学校林近くの問寒別神社に参拝し、地域の暮らしに触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a quiet wooden shrine torii beside tall northern school-forest evergreens, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '日本最北の大学研究林と渡船場跡が残る「北海道大学 天塩研究林」',
      subtext: '最北の森を守る研究の歴史と、橋が架かる前の渡船場跡の記憶に胸を打たれた。',
      badge: {
        code: 'toikanbetsu_teshio_forest',
        name_ja: '問寒別・最北研究林の探訪者',
        subtitle_en: 'Northern Research Forest Explorer',
        description: '日本最北の大学研究林・北大天塩研究林と渡船場跡周辺を巡った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting towering northern spruce and birch research forest beside a wooden river ferry landmark post, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'toikanbetsu_master',
    name_ja: '問寒別・ダルマ駅と最北の森巡り',
    subtitle_en: 'Toikanbetsu Caboose & Forest Master',
    description: 'JR問寒別駅からQマート問寒別店、問寒別郵便局、問寒別神社、北大天塩研究林周辺までを巡った証',
    image_prompt:
      'A circular emblem combining railway caboose station, cute shop cat, woodland shrine and northern research forest, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR問寒別駅',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '1923年（大正12年）11月10日、天塩線延伸に伴い開業（終日開放・無料）。ヨ3500形車掌車を転用したダルマ駅舎が特徴。地名はアイヌ語「トイ・カム・ペッ（土が被さる川）」に由来。',
      address: '北海道天塩郡幌延町字問寒別1',
      lat: 44.912469,
      lng: 142.025475,
      clue:
        '大正十二年十一月に天塩線の延伸とともに開業し、ヨ3500形車掌車を転用した愛らしいダルマ駅舎が今も旅人を温かく迎える「JR問寒別駅」から散策を始めよう（終日利用可）。アイヌ語で「土が被さる川」を意味する地名に由来する静かなホームと駅舎を後にしたら、まずは歩いて二分ほどの集落中心部にある頼もしい地元スーパー「Qマート 問寒別店」を目指してのんびりと歩いてさっそく出掛けよう。',
      surprise: '車掌車を転用した本格的なダルマ駅舎と、周囲に広がる北の原野の静けさが鉄道旅情をかき立てた。',
      hook: 'JR問寒別駅を出たら、徒歩約二分の「Qマート 問寒別店」へ向かおう。',
      f7_fragment: '大正十二年開業、ヨ3500形車掌車転用のダルマ駅舎が残る無人駅。',
      f7_full: '「JR問寒別駅」のダルマ駅舎に降り立ち、最北の研究林と集落を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toikanbetsu Station repurposed yellow-and-white railway caboose hut station amidst northern meadowland, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'Qマート 問寒別店',
      prefecture: '北海道',
      city: '幌延町',
      description:
        'JR問寒別駅から徒歩約2分の集落を支える小型食品スーパー。9:00〜17:30、日曜・1/1〜1/3休。旧Aコープ跡地に開き、看板猫「テンちゃん」でも旅人に親しまれている。',
      address: '北海道天塩郡幌延町字問寒別52',
      lat: 44.913679,
      lng: 142.025715,
      clue:
        '駅徒歩二分の「Qマート 問寒別店」へ入ろう（9:00〜17:30、日曜休）。看板猫でも親しまれる集落の頼もしいお店で休憩したら、すぐ先の「問寒別郵便局」へ。',
      surprise: '小さな集落の暮らしを支え続けるお店の温かさと、愛らしい看板猫の存在に思わず頬が緩んだ。',
      hook: 'Qマート 問寒別店で一息ついたら、すぐ近くの「問寒別郵便局」へ向かおう。',
      f7_fragment: '集落の暮らしを支え、看板猫でも旅人に親しまれる駅近の小型スーパー。',
      f7_full: '「Qマート 問寒別店」で買い物を楽しみ、北の集落の温かな日常に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a cozy small northern village grocery shop doorway with a friendly resting cat and warm porch light, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '問寒別郵便局',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '問寒別集落の中心部に位置し、地域住民の暮らしを長年支えてきた郵便局（郵便窓口平日9:00〜17:00、土日祝休）。旅人にとっては記念貯金や風景印の立ち寄り先としても知られる。',
      address: '北海道天塩郡幌延町問寒別137-7',
      lat: 44.915424,
      lng: 142.021646,
      clue:
        'Qマートからほど近い集落の中心部に佇む「問寒別郵便局」の前をゆっくりと通ってみよう（窓口平日9:00〜17:00）。北の厳しい冬の季節にも地域の暮らしと温かい便りを結び続けてきた素朴な局舎は、鉄道ファンや郵便局巡りの旅人にとっても大切な立ち寄り先として親しまれている。集落の穏やかな通りをじっくりと味わいながら、さらに奥へと歩いて鎮守の「問寒別神社」へとゆっくり向かおう。',
      surprise: '最北に近い小さな集落の中で、郵便局が今も変わらず地域の暮らしの中心にある姿が頼もしかった。',
      hook: '問寒別郵便局の前の通りを抜け、緑豊かな「問寒別神社」へ向かおう。',
      f7_fragment: '問寒別集落の中心で暮らしと便りを結び続けてきた地域の生活拠点。',
      f7_full: '「問寒別郵便局」の前を歩き、北国の集落の暮らしを支える風景を心に留めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toikanbetsu Post Office neat modest northern village post office facade under crisp sky, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '問寒別神社',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '問寒別小学校・学校林付近に鎮座し、例年7月下旬に「問寒別神社祭」が行われる地域信仰の場（終日参拝自由・無料）。向かいに学校林と遊歩道が広がる。',
      address: '北海道天塩郡幌延町字問寒別2',
      lat: 44.920421,
      lng: 142.012314,
      clue:
        '問寒別小学校の学校林近くに静かに鎮座する「問寒別神社」にゆっくりと参拝しよう（終日自由・無料）。向かいに広がる豊かな学校林と遊歩道の緑に寄り添うように建つ素朴な社では、毎年七月下旬に地域を挙げた伝統の「問寒別神社祭」が今も大切に受け継がれている。静かな杜の中で旅の安全を心から深く祈ったら、最後は日本最北の大学研究林「北海道大学 天塩研究林」の周辺へと歩いて楽しく向かおう。',
      surprise: '向かいの学校林の濃い緑と寄り添うように建つ問寒別神社の佇まいに、地域の絆を感じた。',
      hook: '問寒別神社に参拝したら、「北海道大学 天塩研究林」周辺へ向かおう。',
      f7_fragment: '学校林と遊歩道のそばに鎮座し、夏の例祭が受け継がれる集落の鎮守。',
      f7_full: '「問寒別神社」の静かな杜で手を合わせ、集落の平和と旅の無事を祈った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toikanbetsu Shrine wooden torii gate backed by lush green northern school-forest trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '北海道大学 天塩研究林（事務所周辺）',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '日本最北の大学研究林である北大天塩研究林の拠点（構内立入は規定に準ずる、周辺散策・天塩川沿いの問寒別渡船場跡標柱は見学自由・無料）。林業研究と開拓の歴史が色濃く残る。',
      address: '北海道天塩郡幌延町字問寒別131',
      lat: 44.917384,
      lng: 142.019566,
      clue:
        '旅の締めくくりは、日本最北の大学研究林として全国に広く知られる「北海道大学 天塩研究林（事務所周辺）」の豊かな森と歴史に触れよう（周辺散策自由・構内立入規定あり）。周辺には昭和三十五年の問寒別橋架設まで使われた「問寒別渡船場跡」の標柱も大切に残され、北の林業研究と開拓の記憶を今に伝えている。最北の森の清々しい息吹を胸いっぱいに感じ、問寒別の豊かな一日をいつまでも静かに結ぼう。',
      surprise: '日本最北の大学研究林という学術拠点と、かつての渡船場跡の記憶が同じ集落に息づいていた。',
      hook: '',
      f7_fragment: '日本最北の大学研究林の拠点で、最北の森と渡船場跡の歴史が息づく地。',
      f7_full: '「北海道大学 天塩研究林」周辺の深い森を仰ぎ、最北の学術と開拓史に触れて旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hokkaido University Teshio Research Forest tall spruce and birch research woodland beside Teshio River valley, no text, no letters.',
    },
  ],
};
