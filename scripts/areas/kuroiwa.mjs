export default {
  slug: 'kuroiwa',
  station_order: 1004,
  station: '黒岩',
  line: 'JR函館本線',
  area_name: '黒岩海岸・八雲町',
  prefecture: '北海道',
  municipality: '八雲町',
  category: '自然・歴史',
  budget_tier: 1,
  tags: ['函館本線', '黒岩', 'シュマカムイ', '黒岩の奇岩', 'レトロ駅舎'],
  style_genre: 'ink_and_watercolor',
  title: '神の石とレトロな駅舎が残る黒岩の海辺旅',
  description:
    'レトロな無人駅・JR黒岩駅から黒岩公園、加藤商店、黒岩郵便局を経てアイヌ語で神の石を意味する海岸の黒岩の奇岩（シュマカムイ）へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of retro wooden JR Kuroiwa Station, a quiet coastal neighborhood park and post corner, and the dramatic sharp black sea stack rock Shuma-Kamui rising from Uchiura Bay shoreline, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び黒岩を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '芝生と園路の憩い 黒岩公園',
      subtext: '駅の北東隣に広がる緑の公園で小さな海辺集落の空気を感じた',
      badge: {
        code: 'kuroiwa_park',
        name_ja: '黒岩駅隣の緑公園',
        subtitle_en: 'Kuroiwa Park',
        description:
          '黒岩公園を訪れ、駅隣の穏やかな芝生と集落の静かな時間に癒やされたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of green park grass and coastal trees beside a quiet northern railway on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '集落の暮らしを支える 加藤商店',
      subtext: '黒岩駅至近の個人商店の前を歩き昔ながらの商店の温もりを感じた',
      badge: {
        code: 'kuroiwa_kato_shop',
        name_ja: '黒岩の老舗商店',
        subtitle_en: 'Kato Local Store',
        description:
          '加藤商店の前を訪れ、海辺の小さな集落の暮らしを支え続ける商店の風景に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a nostalgic village general store corner beside coastal pines on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '集落中心部の 黒岩郵便局',
      subtext: '駅からほど近い郵便局の前で黒岩の穏やかな日常に触れた',
      badge: {
        code: 'kuroiwa_post',
        name_ja: '黒岩の街角郵便局',
        subtitle_en: 'Kuroiwa Post Office',
        description:
          '黒岩郵便局の前を訪れ、噴火湾沿いの集落に息づく日常の風景を感じたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a red Japanese postbox beside a quiet coastal highway in Hokkaido on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '神の石と伝わる 黒岩の奇岩（シュマカムイ）',
      subtext: '海岸線に鋭くそびえる黒い巨岩を仰ぎ見て地名の由来に触れた',
      badge: {
        code: 'kuroiwa_shuma_kamui',
        name_ja: '神の石シュマカムイ',
        subtitle_en: 'Shuma-Kamui Sea Rock',
        description:
          '黒岩の奇岩（シュマカムイ）を訪れ、アイヌ語で神の石と呼ばれる巨岩の迫力に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a dramatic jagged black coastal monolith rock rising beside foaming Uchiura Bay waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kuroiwa_complete',
    name_ja: '黒岩・神の石と海辺の旅人',
    subtitle_en: 'Explorer of Kuroiwa Coast',
    description:
      'JR黒岩駅から黒岩公園、加藤商店、黒岩郵便局、黒岩の奇岩（シュマカムイ）まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a retro wooden station, a village post corner, and the dramatic black sea rock Shuma-Kamui on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR黒岩駅',
      lat: 42.368051,
      lng: 140.288215,
      address: '北海道二海郡八雲町黒岩124',
      description:
        '木造のレトロな趣を残すJR函館本線の無人駅（常時開放）。かつて鉄道ファンにも広く親しまれた、噴火湾沿いの小さな海辺集落・黒岩の玄関口となっている。',
      clue:
        '木造のレトロな趣を色濃く残し、鉄道ファンにも長年親しまれてきた海辺の無人駅「JR黒岩駅」から、神話と潮風薫る散歩を始めよう（終日開放）。小さな集落の温かな気配に包まれた駅舎を後に、北東方向へと外へ踏み出したら、まずはすぐ北東隣に整備された芝生の広場「黒岩公園」を目指して、噴火湾から吹き抜ける爽やかな潮風を頬に感じながら軽やかな足取りで明るく晴れやかに元気よく歩き出そう。',
      hook: '駅から北東方向へ徒歩約2分',
      f7_fragment: '木造のレトロな趣を残し、海辺の小さな集落の玄関口となる無人駅。',
      f7_full: '「JR黒岩駅」のレトロな駅舎を後にし、神の石と伝わる海岸の奇岩を目指した。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '黒岩公園',
      lat: 42.369262,
      lng: 140.288918,
      address: '北海道二海郡八雲町黒岩644-26',
      description:
        'JR黒岩駅のすぐ北東隣に整備された芝生と園路の公園（常時開放・無休）。地域の憩いの場となっており、静かな海辺の集落の穏やかな空気を肌で感じられる。',
      clue:
        '駅のすぐ北東隣に広がる緑豊かな「黒岩公園」の芝生をゆっくり歩き、海辺の集落の穏やかな空気をじっくり味わおう（常時開放）。次は南の「加藤商店」へ向かおう。',
      hook: '南方向へ徒歩約3分',
      f7_fragment: 'JR黒岩駅のすぐ北東隣に整備され、芝生と園路が広がる集落の憩いの公園。',
      f7_full: '「黒岩公園」の穏やかな芝生を抜け、駅前の商店街の面影が残る通りへ出た。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '加藤商店',
      lat: 42.367746,
      lng: 140.288934,
      address: '北海道二海郡八雲町黒岩161',
      description:
        'JR黒岩駅至近で食料品や酒類を扱う地域密着の個人商店（営業時間は要現地確認）。噴火湾沿いの小さな集落の暮らしを長年にわたり支えてきた歴史ある一軒。',
      clue:
        'JR黒岩駅のすぐ近くで食料品や酒類を扱い、小さな集落の暮らしを長年にわたり支え続けてきた地域密着の個人商店「加藤商店」の前をゆっくり通ってみよう（営業時間要確認）。昔ながらの素朴で温かみある佇まいからは、海辺の街で代々受け継がれてきた穏やかな日常が感じられる。黒岩の暮らしの風景に優しく触れたら、すぐ東方向の集落中心部に位置する「黒岩郵便局」へと軽やかに歩みを進めよう。',
      hook: '東方向へ徒歩約1分',
      f7_fragment: '黒岩駅至近で食料品や酒類を扱い、小さな集落の暮らしを支える個人商店。',
      f7_full: '「加藤商店」の前で昔ながらの集落の温もりに触れ、すぐ東の郵便局へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '黒岩郵便局',
      lat: 42.367792,
      lng: 140.289484,
      address: '北海道二海郡八雲町黒岩31-1',
      description:
        '駅から東へ徒歩約2分の集落中心部に位置する郵便局（郵便窓口平日9:00〜17:00・昼休業の場合あり、土日祝休）。道南の海辺集落の日常を見守り続けている。',
      clue:
        '駅から東へすぐの集落中心部に佇む「黒岩郵便局」の前をゆっくりと歩いてみよう（平日9:00〜17:00、土日祝休）。噴火湾の潮風が吹き抜ける国道沿いの風景の中に溶け込む素朴な局舎を眺めていると、ローカル線の旅ならではの静かな情緒がじんわりと心に湧いてくる。集落の穏やかな日常を感じたら、いよいよ南方向の海岸線にそびえる「黒岩の奇岩（シュマカムイ）」へと軽やかに歩を進めよう。',
      hook: '南方向へ徒歩約7分',
      f7_fragment: '黒岩駅から徒歩約2分の集落中心部に位置し、地域の暮らしを支える郵便局。',
      f7_full: '「黒岩郵便局」の前を通り過ぎ、地名の由来となった海岸の巨岩を目指した。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '黒岩の奇岩（シュマカムイ）',
      lat: 42.362798,
      lng: 140.289529,
      address: '北海道二海郡八雲町黒岩142',
      description:
        '国道5号沿いの海岸線にそびえる鋭く尖った黒い巨岩（常時開放・屋外景勝地）。アイヌ語で「神の石」を意味する「シュマカムイ」と呼ばれ、黒岩の地名の由来にも関わる名勝。',
      clue:
        '旅の締めくくりは、国道5号沿いの海岸線に鋭くそびえ立つ黒い巨岩「黒岩の奇岩（シュマカムイ）」をゆっくり仰ぎ見よう（常時開放）。アイヌ語で「神の石」を意味する「シュマカムイ」と呼ばれ、古くから人々の信仰の対象として畏敬されてきたこの岩は、まさに黒岩という地名の由来を物語る圧倒的な景勝地だ。迫力ある自然の造形と海風を胸いっぱいに刻んで、黒岩の散歩を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: 'アイヌ語で「神の石」を意味し、黒岩の地名の由来にも関わる海岸の巨岩。',
      f7_full: '「黒岩の奇岩（シュマカムイ）」の迫力ある姿を仰ぎ見て、黒岩の旅を終えた。',
    },
  ],
};
