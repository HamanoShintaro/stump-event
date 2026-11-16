export default {
  slug: 'akkeshi',
  station_order: 965,
  station: '厚岸',
  line: 'JR根室本線',
  area_name: '厚岸・宮園・港町',
  prefecture: '北海道',
  municipality: '厚岸町',
  category: 'グルメ・歴史',
  budget_tier: 2,
  tags: ['根室本線', '花咲線', '厚岸牡蠣', '氏家かきめし', 'コンキリエ'],
  style_genre: 'ink_and_watercolor',
  title: '牡蠣香る厚岸湾と駅弁の歴史を巡る港町散歩',
  description:
    'JR厚岸駅から高台の道の駅グルメパーク、100年超の老舗駅弁屋・氏家待合所、海事記念館、漁協直売店エーウロコへ巡るルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Akkeshi Station in Hokkaido, the hilltop Conchiglie gourmet park overlooking Akkeshi Bay and Lake Akkeshi, a historic ekiben oyster rice box, and a lively harbor seafood market, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び厚岸を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '厚岸湾を一望する道の駅グルメパーク',
      subtext: '高台の展望室やオイスターバーで厚岸の豊かな海を堪能した',
      badge: {
        code: 'akkeshi_conchiglie',
        name_ja: 'コンキリエの展望',
        subtitle_en: 'Akkeshi Bay Overlook',
        description:
          '道の駅 厚岸グルメパーク（コンキリエ）を訪れ、厚岸湾と厚岸湖の眺望を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hilltop observatory overlooking a calm bay and oyster shells on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '創業百年超の老舗駅弁・氏家待合所',
      subtext: '甘辛く煮た大ぶりの牡蠣が乗る名物かきめしを味わった',
      badge: {
        code: 'akkeshi_ujiie',
        name_ja: '伝統のかきめし',
        subtitle_en: 'Historic Oyster Ekiben',
        description:
          '氏家待合所で創業100年を超える伝統の味・名物「氏家かきめし」に出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a traditional wooden ekiben bento box filled with glazed plump oysters and seasoned rice on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '漁業と海運を伝える厚岸町海事記念館',
      subtext: 'プラネタリウムも備えた施設で厚岸の海の歴史に触れた',
      badge: {
        code: 'akkeshi_maritime',
        name_ja: '厚岸海事の記憶',
        subtitle_en: 'Maritime Heritage',
        description:
          '厚岸町海事記念館を訪れ、厚岸の漁業と海運の歩みを学んだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a brass ship compass and maritime chart beneath northern stars on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '新鮮な牡蠣が並ぶ直売店 エーウロコ',
      subtext: '厚岸港に面した漁協直営店で海の幸の活気を味わった',
      badge: {
        code: 'akkeshi_euroko',
        name_ja: '厚岸港の海の幸',
        subtitle_en: 'Harbor Oyster Market',
        description:
          '厚岸漁業協同組合直売店 エーウロコで新鮮な厚岸産牡蠣や海産物に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of fresh Pacific oysters and a wooden harbor crate beside gentle sea waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'akkeshi_complete',
    name_ja: '厚岸・牡蠣と港町の旅人',
    subtitle_en: 'Explorer of Akkeshi Oyster Harbor',
    description:
      'JR厚岸駅からコンキリエ、氏家待合所、海事記念館、エーウロコまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting plump Akkeshi oysters, a wooden ekiben box, and a coastal harbor view on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR厚岸駅',
      lat: 43.056061,
      lng: 144.841265,
      address: '北海道厚岸郡厚岸町宮園1-6',
      description:
        '大正6年（1917年）12月1日に開業したJR根室本線（花咲線）の主要駅（終日利用可）。日本有数の牡蠣の産地として全国に知られる厚岸町の玄関口となっている。',
      clue:
        '大正六年十二月に開業し、日本有数の牡蠣の産地として全国に名を馳せる厚岸町の玄関口「JR厚岸駅」から楽しい港町散策を始めよう（終日利用可）。潮の香りと牡蠣の町ならではの期待感に胸を膨らませながら跨線橋を渡って北東側の高台へと外へ踏み出したら、まずは「道の駅 厚岸グルメパーク（厚岸味覚ターミナル コンキリエ）」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '跨線橋を渡り北東方向へ徒歩約5〜7分',
      f7_fragment: '大正六年開業、日本有数の牡蠣の産地・厚岸の文化を伝える花咲線の主要駅。',
      f7_full: '「JR厚岸駅」を後にし、名物かきめしと厚岸湾の恵みを巡る港町散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '道の駅 厚岸グルメパーク（厚岸味覚ターミナル コンキリエ）',
      lat: 43.057773,
      lng: 144.843728,
      address: '北海道厚岸郡厚岸町住の江2-2',
      description:
        '駅北側の高台に建つ道の駅（4月9:00〜18:00・5〜9月9:00〜19:00・10〜3月10:00〜18:00、月曜休）。厚岸湾や厚岸湖を一望できる展望室やミニ水族館、オイスターバーを備える。',
      clue:
        '厚岸湾を一望する高台の「道の駅 厚岸グルメパーク（厚岸味覚ターミナル コンキリエ）」でゆったり一息つこう（月曜休）。次は南西の「氏家待合所」へ向かおう。',
      hook: '跨線橋を戻り南西方向へ徒歩約7分',
      f7_fragment: '厚岸湾と厚岸湖を一望する展望室やオイスターバーを備えた高台の道の駅。',
      f7_full: '「道の駅 厚岸グルメパーク（コンキリエ）」から厚岸湾の眺望を楽しみ、寛いだ。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '氏家待合所',
      lat: 43.055639,
      lng: 144.841054,
      address: '北海道厚岸郡厚岸町宮園1-15',
      description:
        '創業100年を超える老舗駅弁屋（4〜11月9:30〜16:00・12〜3月9:30〜15:00、木曜・元日休）。甘辛く煮た大ぶりの牡蠣やツブ貝が乗る名物「氏家かきめし」を販売。',
      clue:
        '創業百年を超える歴史を誇り、鉄道旅人からも絶大な人気を集める老舗駅弁屋「氏家待合所」で伝統の味にゆっくり楽しく出会おう（木曜・元日休）。甘辛くふっくらと煮込まれた大ぶりの牡蠣やツブ貝、ひじきが香ばしい炊き込みご飯の上に乗る名物「氏家かきめし」は、まさに厚岸を訪れたら外せない至福の逸品だ。心もお腹も大満足に満たされたら、南東の「厚岸町海事記念館」へと楽しく元気に歩いて向かおう。',
      hook: '南東方向へ徒歩約9分',
      f7_fragment: '創業100年超、大ぶりの牡蠣が乗る名物駅弁「氏家かきめし」の老舗。',
      f7_full: '「氏家待合所」で名物のかきめしを手に入れ、百年続く厚岸の伝統を味わった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '厚岸町海事記念館',
      lat: 43.051196,
      lng: 144.849127,
      address: '北海道厚岸郡厚岸町真栄3-4',
      description:
        '厚岸の漁業・海運の歴史資料やプラネタリウムを併設する町の文化施設（9:00〜17:00、月曜・年末年始休）。厚岸町役場前に立ち、海とともに歩んだ町の歴史を伝える。',
      clue:
        '厚岸の豊かな漁業や海運の歴史資料を丁寧に展示し、プラネタリウムも併設する町の文化施設「厚岸町海事記念館」を訪ねてみよう（9:00〜17:00、月曜休）。古くから道東の海の要衝として栄えてきた厚岸の歩みや、厳しい北の海で生きてきた先人たちの漁労文化の貴重な資料を眺めていると、街への理解が一層深まっていく。海の歴史に触れたら、南東の港沿いにある直売店「エーウロコ」へ向かおう。',
      hook: '南東方向へ徒歩約5分',
      f7_fragment: '厚岸の漁業・海運の歴史資料やプラネタリウムを備えた町の文化施設。',
      f7_full: '「厚岸町海事記念館」で海とともに歩んできた厚岸の歴史を学び、見識を深めた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '厚岸漁業協同組合直売店 エーウロコ',
      lat: 43.049617,
      lng: 144.853659,
      address: '北海道厚岸郡厚岸町港町5-3',
      description:
        '厚岸港に面した漁協直営の直売店（10:00〜16:00、火曜・1〜11月第1木曜・年末年始休）。水揚げされたばかりの新鮮な厚岸産牡蠣や海産物の購入が楽しめる。',
      clue:
        '旅の締めくくりは、厚岸港の目の前に建つ漁協直営の活気あふれる直売店「厚岸漁業協同組合直売店 エーウロコ」へ楽しく立ち寄ってみよう（10:00〜16:00、火曜等休）。店内には水揚げされたばかりのプリプリとした厚岸産牡蠣をはじめ、道東の豊かな海が育んだ新鮮な海産物や加工品がずらりと並んでいる。潮の香りとお土産へのワクワク感を胸に抱いて、厚岸の港町散歩を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '厚岸港に面し、新鮮な厚岸産牡蠣や海の幸が並ぶ漁協直営の直売店。',
      f7_full: '「厚岸漁業協同組合直売店 エーウロコ」で海の恵みに出会い、厚岸の旅を終えた。',
    },
  ],
};
