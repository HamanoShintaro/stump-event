export default {
  slug: 'hokkaido_iryodaigaku',
  station_order: 916,
  station: '北海道医療大学',
  line: 'JR札沼線',
  area_name: '北海道医療大学・終着駅と金沢',
  prefecture: '北海道',
  municipality: '当別町',
  category: '終着駅の珈琲と薪窯パン',
  budget_tier: 2,
  tags: ['北海道', '当別町', '北海道医療大学駅', '薪窯パン', 'モール泉'],
  style_genre: 'ink_and_watercolor',
  title: '学園都市線の終着駅からパンと湯の金沢散歩',
  description:
    'JR札沼線の終着駅「JR北海道医療大学駅」から、10階からの眺望が魅力の「渋谷ダブルトールカフェ」、薪窯ハード系パンの「パン屋 きみかげ」、「金澤神社」、「北海道ふくろう乃湯リゾート」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Hokkaido Iryodaigaku terminal station and tenth-floor university sky cafe overlooking snowy fields to wood-fired artisan bakery, quiet Kanazawa shrine torii and moor-spring resort bath, full bleed, no text, no letters.',
  question: '学園都市線の終着・北海道医療大学駅から地上十階のカフェや薪窯パン、金沢の温泉を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '令和二年よりJR札沼線の終着駅となった「JR北海道医療大学駅」',
      subtext: '昭和五十六年に仮乗降場として始まり、学園都市線の終点を担う駅の風景が印象的だった。',
      badge: {
        code: 'hokkaido_iryodaigaku_station',
        name_ja: '札沼終着・医療大の駅人',
        subtitle_en: 'Sassho Line Terminus Visitor',
        description: 'JR札沼線（学園都市線）の終着駅「JR北海道医療大学駅」に降り立った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a university railway terminus platform looking toward open northern plains, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '中央講義棟10階から絶景を望む「渋谷ダブルトールカフェ」',
      subtext: '駅直結の大学棟10階で、一般利用者も本格シアトル系エスプレッソと眺望を楽しめた。',
      badge: {
        code: 'hokkaido_iryodaigaku_cafe',
        name_ja: '札沼終着・十階天空の珈琲',
        subtitle_en: '10th Floor Espresso Guest',
        description: '渋谷ダブルトールカフェ 北海道医療大学店で眺望と珈琲を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a latte-art espresso cup beside a tall window overlooking distant rolling hills, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '薪窯で焼き上げるハード系が人気の「パン屋 きみかげ」',
      subtext: '遠方からもファンが通う香り高い薪窯パンの深い味わいにすっかり魅了された。',
      badge: {
        code: 'hokkaido_iryodaigaku_kimikage',
        name_ja: '札沼終着・薪窯パンの恵み',
        subtitle_en: 'Kimikage Wood-Fired Bakery Lover',
        description: 'パン屋 きみかげの薪窯焼きハード系パンに出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting crusty wood-fired sourdough loaves glowing beside warm oven embers, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '源泉かけ流しモール泉の「北海道ふくろう乃湯リゾート」',
      subtext: '金沢地区の豊かな自然の中で、美肌の湯と親しまれるモール泉に癒やされた。',
      badge: {
        code: 'hokkaido_iryodaigaku_onsen',
        name_ja: '札沼終着・金沢のモール泉',
        subtitle_en: 'Fukurou no Yu Resort Bather',
        description: '北海道ふくろう乃湯リゾートのモール泉で温まった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming timber hot spring bath nestled beside an owl motif and woodland pines, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'hokkaido_iryodaigaku_complete',
    name_ja: '札沼線終点・金沢の旅人',
    subtitle_en: 'Walker of Kanazawa and University Town',
    description: 'JR北海道医療大学駅から渋谷ダブルトールカフェ、パン屋 きみかげ、金澤神社、北海道ふくろう乃湯リゾートまでを巡った証',
    image_prompt:
      'A circular emblem combining railway terminus, latte-art cup, wood-fired bread loaf and steaming moor-spring bath, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR北海道医療大学駅',
      prefecture: '北海道',
      city: '当別町',
      description:
        '1981年12月1日「大学前仮乗降場」として開業、1982年駅昇格、2020年5月の一部廃止以降JR札沼線（学園都市線）の終着駅となっている（終日利用可・無料）。',
      address: '北海道石狩郡当別町字金沢1757',
      lat: 43.246895,
      lng: 141.561859,
      clue:
        '昭和五十六年に仮乗降場として開業し、令和二年五月からはJR札沼線（学園都市線）の終着駅を担っている「JR北海道医療大学駅」から町歩きと散策を始めよう（終日利用可）。広い空と豊かな緑に囲まれた学園の街の終着駅を出たら、まずは駅直結の大学キャンパス中央講義棟10階にある一般利用も可能な人気カフェ「渋谷ダブルトールカフェ 北海道医療大学店」を目指してさっそく元気に歩き出そう。',
      surprise: '学園都市線の終着駅に降り立つと、広々としたキャンパスと周囲に広がる石狩金沢の自然が迎えてくれた。',
      hook: 'JR北海道医療大学駅を出たら、キャンパス中央講義棟10階の「渋谷ダブルトールカフェ」へ向かおう。',
      f7_fragment: '昭和五十六年開業、令和二年よりJR札沼線の終着駅を担う学園の駅。',
      f7_full: '「JR北海道医療大学駅」に降り立ち、終着駅の絶景カフェと金沢の温泉を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hokkaido Iryodaigaku Station clean terminal railway platform beside modern university campus trees, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '渋谷ダブルトールカフェ 北海道医療大学店',
      prefecture: '北海道',
      city: '当別町',
      description:
        '駅直結の大学キャンパス中央講義棟10階に位置し一般利用可能（月〜金10:00〜17:00、土日祝休・大学スケジュール準拠）。10階からの眺望とともに本格シアトル系エスプレッソやラテアートを楽しめる。',
      address: '北海道石狩郡当別町金沢1757',
      lat: 43.246895,
      lng: 141.561859,
      clue:
        '中央講義棟10階の「渋谷ダブルトールカフェ」へ寄ろう（平日10:00〜17:00）。絶景を望みながら本格エスプレッソを味わえる。次は「パン屋 きみかげ」へ。',
      surprise: '駅直結の大学10階という開放的なロケーションで、一般客も気軽に本格シアトル系珈琲を味わえて驚いた。',
      hook: '渋谷ダブルトールカフェで寛いだら、南西の「パン屋 きみかげ」へ向かおう。',
      f7_fragment: '中央講義棟10階から眺望を楽しみつつ本格エスプレッソを味わえるカフェ。',
      f7_full: '「渋谷ダブルトールカフェ」の10階からの眺めと香り高い珈琲に心が弾んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shibuya Double Tall Cafe 10th-floor window counter with latte-art espresso cup gazing across wide green Hokkaido fields, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'パン屋 きみかげ',
      prefecture: '北海道',
      city: '当別町',
      description:
        'JR北海道医療大学駅から南西へ約2.5km（徒歩約30〜35分）の人気ベーカリー（10:30〜16:30売切次第終了、日月休）。薪窯で焼き上げる香り高いハード系パンが遠方からも多くのファンを集めている。',
      address: '北海道石狩郡当別町東裏1756-18',
      lat: 43.227168,
      lng: 141.547685,
      clue:
        '駅から南西へ約二・五キロ、遠方からも多くのパン好きが足を運んで訪れるという人気店「パン屋 きみかげ」へ立ち寄ろう（10:30〜16:30、日月休）。薪窯を使って丁寧に焼き上げられる香り高いハード系パンは、パリッと香ばしい皮と噛むほどに広がる小麦の旨みが実に格別で、ついお土産にいくつも選びたくなる。香ばしいパンを抱えたら、北東の金沢地区に鎮座する「金澤神社」へと元気に楽しく向かおう。',
      surprise: 'のどかな田園エリアに本格的な薪窯のハード系パン屋があり、香ばしい焼きたてパンの美味しさに感動した。',
      hook: 'パン屋 きみかげでパンを選んだら、北東の金沢地区にある「金澤神社」へ向かおう。',
      f7_fragment: '薪窯で焼き上げる香り高いハード系パンが遠方からも愛されるベーカリー。',
      f7_full: '「パン屋 きみかげ」で薪窯焼きの香り高いパンを手に入れ、幸せな気分になった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Bakery Kimikage rustic country bakery shelf displaying crusty wood-fired sourdough and walnut loaves, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '金澤神社',
      prefecture: '北海道',
      city: '当別町',
      description:
        '駅東南東の金沢地区（旧・石狩金沢エリア）に鎮座する地域の神社（境内終日開放・無料）。旧岩出山藩（宮城県）の「金澤の荘」ゆかりの移住者らが関わった開拓の歴史を見守り続け、現在は当別神社が管理している。',
      address: '北海道石狩郡当別町金沢187',
      lat: 43.245853,
      lng: 141.565999,
      clue:
        '旧・石狩金沢エリアの静かな里に鎮座し、かつて旧岩出山藩の「金澤の荘」ゆかりの移住者らが携わった開拓の歴史を温かく見守り続けてきた「金澤神社」へ丁寧に参拝しよう（参拝自由・無料）。豊かな北の木立に寄り添う素朴な社殿の前に立てば、遠い故郷の名をこの地に刻んだ先人たちの深い想いが静かに胸に伝わってくる。旅の安全に手を合わせたら、すぐ北隣の「北海道ふくろう乃湯リゾート」へ向かおう。',
      surprise: '石狩金沢の地名と旧岩出山藩「金澤の荘」ゆかりの移住者たちの開拓の記憶を今に伝える、静かな鎮守の佇まいに胸が温かくなった。',
      hook: '金澤神社に参拝したら、すぐ北隣の「北海道ふくろう乃湯リゾート」へ向かおう。',
      f7_fragment: '旧・石狩金沢エリアで「金澤の荘」ゆかりの移住者らの開拓を見守り続けてきた地域の鎮守。',
      f7_full: '「金澤神社」の静かな境内に参拝し、石狩金沢の開拓の記憶に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kanazawa Shrine Tobetsu quiet wooden torii gate framed by tall northern woodland trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '北海道ふくろう乃湯リゾート',
      prefecture: '北海道',
      city: '当別町',
      description:
        '金澤神社のすぐ北隣、旧「開拓ふくろふの湯」が2021年にキャンプ場併設リゾートとして刷新（通年営業、管理棟9:00〜16:00頃、日帰り入浴は土日祝・ハイシーズン中心で土曜13:00〜、日祝10:00〜、入浴券購入17:00まで）。源泉かけ流し（加温）モール泉。',
      address: '北海道石狩郡当別町字金沢157-8',
      lat: 43.246936,
      lng: 141.566605,
      clue:
        '旅の締めくくりは、金澤神社のすぐ北隣に広がる「北海道ふくろう乃湯リゾート」で天然の恵みにゆったり癒やされよう（デイ利用10:30〜17:00、土日祝中心に入浴可）。令和三年にキャンプ場併設のリゾート施設として新しく生まれ変わった敷地内では、美肌の湯として親しまれるモール泉が旅の疲れを優しく洗い流してくれる。森の清らかな空気に包まれて、終着駅の旅を心地よく晴れやかに結ぼう。',
      surprise: '金澤神社のすぐ隣に美肌の湯のモール泉とキャンプ場を兼ね備えたリゾートが広がり、自然の癒やしを満喫できた。',
      hook: '',
      f7_fragment: 'キャンプ場併設のリゾート内で美肌の湯のモール泉を楽しめる癒やし拠点。',
      f7_full: '「北海道ふくろう乃湯リゾート」の豊かな自然と温泉の恵みに触れ、旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hokkaido Fukurou no Yu Resort cozy timber hot spring bathhouse amidst peaceful pine forest campsite, no text, no letters.',
    },
  ],
};
