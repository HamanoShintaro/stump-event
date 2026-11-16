export default {
  slug: 'shinyoshino_hokkaido',
  station_order: 949,
  station: '新吉野',
  line: 'JR根室本線',
  area_name: '浦幌・新吉野・平和',
  prefecture: '北海道',
  municipality: '浦幌町',
  category: '歴史・自然',
  budget_tier: 1,
  tags: ['根室本線', '山桜', '吉野神社', '浦幌町発祥の地', '開拓の碑'],
  style_genre: 'ink_and_watercolor',
  title: '山桜の記憶と浦幌開拓の原点をめぐる小径',
  description:
    'かつての山桜の群生に駅名を由来するJR新吉野駅から、吉野郵便局、吉野公民館、吉野神社、浦幌開拓の碑を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Shin-Yoshino in Urahoro, Hokkaido, featuring a small peaceful train station framed by delicate mountain cherry blossoms, a quiet village shrine, and a weathered stone pioneer monument standing amidst lush green grasslands, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び新吉野を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '山桜の里の集落に根ざした吉野郵便局',
      subtext: '新吉野駅近くの素朴な集落の暮らしの温もりに触れた',
      badge: {
        code: 'shinyoshino_post',
        name_ja: '山桜の里の通信手',
        subtitle_en: 'Yoshino Post Traveler',
        description:
          '新吉野駅近くの吉野郵便局を訪れ、静かな集落の暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a rural post office mailbox framed by delicate wild cherry petals on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '住民の学びと集いを支える浦幌町吉野公民館',
      subtext: '地域の活動拠点の前に立ち、人々のつながりを感じた',
      badge: {
        code: 'shinyoshino_hall',
        name_ja: '吉野の学び舎を知る者',
        subtitle_en: 'Keeper of Yoshino Hall',
        description:
          '国道38号沿いの浦幌町吉野公民館を訪ね、地域の生涯学習と絆に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a modest wooden community hall and open book beside cherry leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '集落と線路を見守り続ける平和地区の吉野神社',
      subtext: '静かな境内で手を合わせ、穏やかな時の流れを味わった',
      badge: {
        code: 'shinyoshino_shrine',
        name_ja: '平和の杜の参拝者',
        subtitle_en: 'Pilgrim of Yoshino Shrine',
        description:
          '線路と集落を見守る吉野神社へ参拝し、浦幌・吉野地区の穏やかな空気に癒やされたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet wooden torii gate standing beside subtle railway tracks and pine trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'かつて生剛村が栄えた浦幌開拓の碑',
      subtext: '「浦幌町発祥の地」に立ち、先人たちの開拓の歴史を偲んだ',
      badge: {
        code: 'shinyoshino_pioneer',
        name_ja: '浦幌発祥の地を刻む者',
        subtitle_en: 'Pioneer of Urahoro Origin',
        description:
          'かつて生剛村の役場が置かれた浦幌開拓の碑（浦幌町発祥の地）を訪れ、歴史を刻んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a solemn stone pioneer monument surrounded by northern meadow grasses on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shinyoshino_hokkaido_complete',
    name_ja: '新吉野・山桜と発祥の地の旅人',
    subtitle_en: 'Traveler of Shin-Yoshino',
    description:
      'JR新吉野駅から吉野郵便局、浦幌町吉野公民館、吉野神社、浦幌開拓の碑まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting mountain cherry blossoms, a wooden shrine torii, and a pioneer stone stele on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新吉野駅',
      lat: 42.778288,
      lng: 143.607994,
      address: '北海道十勝郡浦幌町字吉野1',
      description:
        '明治43年（1910年）1月7日に「下頃部駅」として開業、昭和17年に付近の山桜群生地にちなみ現駅名へ改称（終日利用可）。待合室を備えた静かな無人駅。',
      clue:
        '明治四十三年一月に「下頃部駅」として開業し、昭和十七年に付近の山桜の群生地にちなんで改称された「JR新吉野駅」から楽しい町歩きと散策を始めよう（終日利用可）。山桜の記憶を宿す静かな無人駅の待合室をゆっくり後にして南〜南南西方向へ外へ踏み出したら、まずは徒歩約三〜四分の「吉野郵便局」を目指して、澄んだ道東の爽やかな美しい空気の中をのんびり楽しく元気に笑顔で力強く歩き出そう。',
      hook: '駅前から南〜南南西方向へ徒歩約3〜4分',
      f7_fragment: 'かつての山桜群生地に駅名を由来する、浦幌町吉野の静かな無人駅。',
      f7_full: '「JR新吉野駅」の静かな待合室を後にし、山桜と浦幌開拓の原点を辿る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '吉野郵便局',
      lat: 42.776528,
      lng: 143.607384,
      address: '北海道十勝郡浦幌町字吉野119',
      description:
        '吉野地区の集落に根ざした郵便局（郵便窓口平日9:00〜17:00、土日祝休）。旅の記念に切手やはがきを求めることもでき、集落の温かい日常を感じられる。',
      clue:
        '吉野地区の集落に寄り添う「吉野郵便局」の前を訪ね、記念切手や旅の便りに思いをはせよう（平日9:00〜17:00）。次は国道38号沿いの「浦幌町吉野公民館」へ向かおう。',
      hook: '国道38号線沿いへ東方向へ徒歩約1〜2分',
      f7_fragment: '吉野地区の静かな集落に根ざし、旅の記念切手も求められる郵便局。',
      f7_full: '「吉野郵便局」の前を歩き、山桜の里の穏やかな暮らしの風景に触れた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '浦幌町吉野公民館',
      lat: 42.776496,
      lng: 143.608947,
      address: '北海道十勝郡浦幌町字吉野111',
      description:
        '大研修室や図書室などを備えた地域住民の生涯学習・活動の拠点施設（9:00〜22:00、土日休）。国道38号線沿いに立ち、地域の人々の絆を伝えている。',
      clue:
        '国道38号線沿いに立ち、大研修室や図書室を備えて地域住民の学びと集いを支え続けている「浦幌町吉野公民館」の前をゆっくり楽しく笑顔で元気に訪ねてみよう（9:00〜22:00、土日休）。素朴ながらも大切に保たれた施設の佇まいを眺めていると、この吉野地区で長く培われてきた温かい地域のつながりが静かに感じられる。集落の息吹を味わったら、北東〜東に鎮座する「吉野神社」へと向かおう。',
      hook: '北東〜東方向へ徒歩約4〜5分',
      f7_fragment: '大研修室や図書室を備え、吉野地区の人々の生涯学習と交流を支える公民館。',
      f7_full: '「浦幌町吉野公民館」の前に立ち、集落で受け継がれる人々の絆に思いを馳せた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '吉野神社',
      lat: 42.777659,
      lng: 143.611288,
      address: '北海道十勝郡浦幌町平和1',
      description:
        '新吉野駅周辺・平和地区の静かな集落を見守り続ける地域の鎮守（参拝自由・無休）。穏やかな木立に包まれ、旅の無事を静かに祈ることができる。',
      clue:
        '新吉野駅周辺と平和地区の穏やかな集落を静かに見守り続けている地域の鎮守「吉野神社」へ丁寧に心を込めてゆっくりと爽やかに参拝しよう（参拝自由）。澄み切った北海道の空の下、静かな木立に抱かれた素朴な社殿の前でそっと深く手を合わせれば、心がすっと清められていく心地よさだ。旅の無事を祈ったら、東方面へ進み「浦幌開拓の碑（浦幌町発祥の地）」へと楽しく元気に明るく爽やかに向かおう。',
      hook: '東方向（生剛・平和方面）へ約7km（車・タクシー等推奨、徒歩約90分）',
      f7_fragment: '新吉野駅周辺と平和地区の静かな集落を見守り続ける地域の鎮守。',
      f7_full: '「吉野神社」の静かな杜で手を合わせ、穏やかな時の流れを味わった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '浦幌開拓の碑（浦幌町発祥の地）',
      lat: 42.772405,
      lng: 143.695173,
      address: '北海道十勝郡浦幌町字平和10',
      description:
        'かつて生剛（せいごう）村の役場や市街地が置かれた「浦幌町発祥の地」に建立された歴史的記念碑（見学自由・無休）。町の原点となった開拓の歴史を今に伝えている。',
      clue:
        '旅の締めくくりは、かつて生剛村の役場や市街地が置かれて栄えた場所に立つ歴史的な記念碑「浦幌開拓の碑（浦幌町発祥の地）」をじっくり楽しく笑顔で訪ねよう（見学自由）。「浦幌町発祥の地」と刻まれた石碑を前にして広大な十勝の大地を見渡せば、厳しい自然と向き合いながらこの地を切り拓いた先人たちの強い志が胸に迫ってくる。町の原点に触れた充実の散策を、晴れやかな笑顔で心地よく結ぼう。',
      hook: '',
      f7_fragment: 'かつて生剛村の役場が置かれた「浦幌町発祥の地」に立つ歴史的な開拓の碑。',
      f7_full: '「浦幌開拓の碑（浦幌町発祥の地）」の前に立ち、町の原点と先人の志に触れた。',
    },
  ],
};
