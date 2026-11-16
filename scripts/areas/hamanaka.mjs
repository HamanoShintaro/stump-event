export default {
  slug: 'hamanaka',
  station_order: 967,
  station: '浜中',
  line: 'JR根室本線',
  area_name: '浜中桜',
  prefecture: '北海道',
  municipality: '浜中町',
  category: '自然・街歩き',
  budget_tier: 1,
  tags: ['根室本線', '浜中桜公園', 'ルパン三世', '浜中神社', '桜並木'],
  style_genre: 'ink_and_watercolor',
  title: '桜並木と開拓の記憶に触れる浜中駅南散歩',
  description:
    'ルパン三世の装飾が迎えるJR浜中駅からコープはまなか桜店、浜中郵便局、浜中神社を経て1,200本の桜の名所・浜中桜公園へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Hamanaka Station in Hokkaido, quiet rural town streets, a hilltop Shinto shrine opposite a schoolyard, and a blooming cherry blossom park with a wooden suspension bridge, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び浜中を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '暮らしを支えるコープはまなか 桜店',
      subtext: '駅近くの小規模店舗で浜中の日常と温かい雰囲気に触れた',
      badge: {
        code: 'hamanaka_coop_sakura',
        name_ja: '桜北の立ち寄り処',
        subtitle_en: 'Sakura Neighborhood Shop',
        description:
          'コープはまなか 桜店を訪れ、浜中駅周辺の穏やかな暮らしの温もりに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a small countryside grocery basket filled with fresh northern snacks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '市街地に佇む浜中郵便局の風景',
      subtext: '駅西側の静かな街区で旅の便りに思いを馳せながら歩いた',
      badge: {
        code: 'hamanaka_post',
        name_ja: '桜西の郵便窓口',
        subtitle_en: 'Hamanaka Post Office',
        description:
          '浜中郵便局の前を歩き、浜中桜地区の静かな街並みと日常を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a rustic postbox framed by delicate cherry petals on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '地域の開拓を見守り続ける浜中神社',
      subtext: '桜南の穏やかな木立に包まれた社殿で静かに手を合わせた',
      badge: {
        code: 'hamanaka_shrine',
        name_ja: '桜南の鎮守',
        subtitle_en: 'Hamanaka Sanctuary',
        description:
          '浜中神社に参拝し、地域の開拓と歩みを見守り続ける杜に祈りを捧げたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden Shinto torii gate surrounded by spring cherry branches on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '約1,200本の桜と吊り橋の浜中桜公園',
      subtext: '住民が植えた桜の名所と夢・さくら橋の爽やかな景色に癒やされた',
      badge: {
        code: 'hamanaka_sakura_park',
        name_ja: '千二百本の桜郷',
        subtitle_en: 'Sakura Park Bridge',
        description:
          '浜中桜公園を訪れ、住民の手で植えられた桜並木と夢・さくら橋の風景を楽しんだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a graceful pedestrian suspension bridge framed by blooming Hokkaido cherry blossoms on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'hamanaka_complete',
    name_ja: '浜中・桜並木と開拓の旅人',
    subtitle_en: 'Walker of Hamanaka Sakura Park',
    description:
      'JR浜中駅からコープ桜店、浜中郵便局、浜中神社、浜中桜公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a railway platform, a Shinto torii gate, and a cherry blossom suspension bridge on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR浜中駅',
      lat: 43.157559,
      lng: 145.099794,
      address: '北海道厚岸郡浜中町浜中桜北5',
      description:
        '大正8年（1919年）11月25日開業の無人駅（終日利用可）。構内には浜中町出身の漫画家モンキー・パンチ氏にちなみ『ルパン三世』のキャラクターパネルや装飾が施されている。',
      clue:
        '大正八年十一月に開業し、構内にモンキー・パンチ氏ゆかりの『ルパン三世』のキャラクターパネルや楽しい装飾が施されている「JR浜中駅」から町歩きを始めよう（終日利用可）。酪農地帯に広がる澄んだ青い空の下、駅舎を出て東方向へと外へ踏み出したら、まずはすぐ近くで地域の暮らしを支えている「コープはまなか 桜店」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '駅から東方向へ徒歩約3分',
      f7_fragment: '構内に『ルパン三世』のキャラクター装飾が施された酪農地帯の無人駅。',
      f7_full: '「JR浜中駅」の楽しい装飾を後にし、千二百本の桜名所を目指す南散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'コープはまなか 桜店',
      lat: 43.156894,
      lng: 145.10248,
      address: '北海道厚岸郡浜中町浜中桜北125',
      description:
        '浜中駅近くの地域住民の暮らしを支える小規模商店（営業時間・定休日は店舗規定に準ずる）。散策の始まりに飲み物やちょっとしたおやつを調達できる便利な拠点。',
      clue:
        '浜中駅近くの「コープはまなか 桜店」で散策のお供の冷たい飲み物や美味しい軽食を楽しく選ぼう（店舗規定休）。準備ができたら南西の「浜中郵便局」へと向かおう。',
      hook: '南西方向へ徒歩約2分',
      f7_fragment: '浜中駅近くの浜中桜北地区で住民の日常を支える地域密着の小規模商店。',
      f7_full: '「コープはまなか 桜店」で旅のお供を調達し、穏やかな駅前の街並みを感じた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '浜中郵便局',
      lat: 43.15667,
      lng: 145.101889,
      address: '北海道厚岸郡浜中町浜中桜西55',
      description:
        '浜中駅西側の市街地に佇む地域の郵便局（郵便窓口平日9:00〜17:00、土日祝休）。静かな酪農のまちの暮らしと通信を長年支え続けている。',
      clue:
        '浜中駅西側の落ち着いた市街地に佇み、地域の暮らしと通信を長年にわたって支え続けている「浜中郵便局」の前をゆっくり歩いてみよう（平日9:00〜17:00、土日祝休）。素朴で整った街並みと北海道らしい広々とした空の広がりを感じながら一歩ずつ静かに歩みを進めると、旅の心がじんわり優しく和らいでいく。街の温もりに触れたら、南東方向へ歩いて鎮守の「浜中神社」へと楽しく元気に歩こう。',
      hook: '南東方向へ徒歩約2〜3分',
      f7_fragment: '浜中桜西の落ち着いた市街地に佇み、地域の暮らしを支え続ける郵便局。',
      f7_full: '「浜中郵便局」の前を歩き、浜中桜地区の穏やかで温かい暮らしの気配を感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '浜中神社',
      lat: 43.155251,
      lng: 145.103023,
      address: '北海道厚岸郡浜中町浜中桜南63',
      description:
        '浜中小学校の向かいに鎮座し、地域の開拓と暮らしを静かに見守り続けてきた神社（常時参拝可・無休）。穏やかな境内で旅の無事を祈ることができる。',
      clue:
        '浜中小学校の向かいに静かに鎮座し、明治・大正の時代からこの地域の開拓と人々の暮らしを優しく見守り続けてきた「浜中神社」へ丁寧に心を込めて参拝しよう（常時参拝可）。清らかな木立に包まれた境内でそっと深く手を合わせれば、遠く道東の地で受け継がれてきた人々の熱い祈りが胸いっぱいに静かに響いていく。参拝を終えたら、いよいよ東に広がる桜の名所「浜中桜公園」へと爽やかに向かおう。',
      hook: '東方向へ徒歩約3分',
      f7_fragment: '浜中小学校向かいに鎮座し、地域の開拓と暮らしを見守り続ける神社。',
      f7_full: '「浜中神社」の静かな杜に手を合わせ、浜中の開拓の歴史に思いを馳せた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '浜中桜公園',
      lat: 43.154972,
      lng: 145.105656,
      address: '北海道厚岸郡浜中町浜中桜南1',
      description:
        'ボランティアや住民の手により約1,200本の桜が植樹された浜中の桜名所（常時開放・無休）。園内には「夢・さくら橋（吊り橋）」が架かり、自然の中で寛げる。',
      clue:
        '旅の締めくくりは、ボランティアや地域住民の温かい手によって約千二百本もの桜が植樹された浜中の名所「浜中桜公園」でゆったり心地よく休憩しよう（常時開放）。広々とした園内には「夢・さくら橋」と名付けられた可愛らしい吊り橋も架かっており、春の美しい桜はもちろん季節ごとの豊かな緑や爽やかな道東の風を満喫できる。素敵な自然の癒やしに包まれて、浜中の楽しい旅を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '住民の手で約1,200本の桜が植えられ、「夢・さくら橋」も架かる桜の名所公園。',
      f7_full: '「浜中桜公園」の夢・さくら橋と広々とした緑に癒やされ、浜中の散歩を終えた。',
    },
  ],
};
