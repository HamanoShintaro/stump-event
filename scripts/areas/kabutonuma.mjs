// scripts/areas/kabutonuma.mjs
// station_order: 894

export default {
  slug: 'kabutonuma',
  station_order: 894,
  station: '兜沼',
  line: 'JR宗谷本線',
  area_name: '兜沼・木造旧郵便局舎と湖畔公園、熊霊堂',
  prefecture: '北海道',
  municipality: '豊富町',
  category: '湖畔の遺産と神社',
  budget_tier: 1,
  tags: ['北海道', '豊富町', '兜沼駅', '旧兜沼郵便局舎', '音吉神社'],
  style_genre: 'ink_and_watercolor',
  title: '兜沼・昭和の木造郵便局舎と湖畔公園の小祠へ',
  description:
    '兜の鍬形に似た沼の名を持つ「JR兜沼駅」から、明治四十二年創立の「兜沼神社」、昭和九年建築の「旧兜沼郵便局舎（郷土資料室）」、売店や休憩室を備える「兜沼公園キャンプ場 インフォメーションセンター」、開拓史を伝える「音吉神社（熊霊堂）」を巡る徒歩ルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Kabutonuma rural railway station, hilltop wooden shrine overlooking marsh lake, preserved 1934 wooden post office building, lakeside park cabin with snacks, and small historic woodland shrine, full bleed, no text, no letters.',
  question: '兜の鍬形に似た沼の名を持つ兜沼駅から高台の神社や昭和の木造郵便局舎、湖畔公園を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '明治四十二年創立、湖畔の歌舞登神社と合祀し高台へ移った「兜沼神社」',
      subtext: '集落の北方高台から兜沼を見渡す社の静けさに、明治からの開拓の記憶を感じた。',
      badge: {
        code: 'kabutonuma_shrine',
        name_ja: '兜沼・高台合祀の鎮守',
        subtitle_en: 'Hilltop Sanctuary of Kabutonuma',
        description: '明治四十二年創立の歴史を継ぐ兜沼神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a tranquil wooden Japanese shrine gate atop a grassy hill overlooking a calm northern lake, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '昭和九年建築、町内最古級の木造局舎を保存公開する「旧兜沼郵便局舎」',
      subtext: '昭和初期のモダンで温かな木造郵便局舎が公園内にそのまま残る姿に感動した。',
      badge: {
        code: 'kabutonuma_post',
        name_ja: '兜沼・昭和木造局舎の守',
        subtitle_en: 'Historic Post Office Admirer',
        description: '昭和九年建築の旧兜沼郵便局舎（豊富町郷土資料室）を見学した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a charming 1934 pale-painted wooden rural Japanese post office building with sash windows, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '売店や軽食・休憩室で公園来訪者を迎える「兜沼公園 インフォメーションセンター」',
      subtext: '緑豊かな湖畔公園の拠点で、軽食や冷たい飲み物とともにほっと一息つけた。',
      badge: {
        code: 'kabutonuma_park',
        name_ja: '兜沼・湖畔公園の憩い',
        subtitle_en: 'Lakeside Park Guest of Kabutonuma',
        description: '兜沼公園キャンプ場 インフォメーションセンターで休憩した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a welcoming timber park lodge beside tranquil lake waters and birch trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '開拓期の功労者・梅村庄次郎がアイヌの音吉のため建てた「音吉神社（熊霊堂）」',
      subtext: '開拓者とアイヌの人々との絆を伝える小さな祠に、深い歴史の物語を感じた。',
      badge: {
        code: 'kabutonuma_otokichi',
        name_ja: '兜沼・音吉小祠の証人',
        subtitle_en: 'Otokichi Shrine Heritage Witness',
        description: '兜沼公園の奥に佇む歴史的小祠・音吉神社（熊霊堂）に手を合わせた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a small modest wooden memorial shrine nestled quietly beneath tall northern forest trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kabutonuma_master',
    name_ja: '兜沼・昭和局舎と湖畔の絆巡り',
    subtitle_en: 'Kabutonuma Lake & Heritage Master',
    description: 'JR兜沼駅から兜沼神社、旧兜沼郵便局舎、兜沼公園管理棟、音吉神社までを巡った証',
    image_prompt:
      'A circular emblem combining 1934 wooden post office, calm helmet-shaped lake, hilltop shrine and woodland memorial shrine, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR兜沼駅',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '1924年（大正13年）6月25日、天塩北線開業時に開設された無人駅（終日開放・無料、1988年現駅舎建替）。兜の鍬形に似た沼の形が駅名の由来となっている。',
      address: '北海道天塩郡豊富町字上サロベツ619',
      lat: 45.22025,
      lng: 141.69722,
      clue:
        '大正十三年六月に天塩北線の開業とともに開設され、兜の鍬形に似た美しい沼の形から名付けられた「JR兜沼駅」から町歩きと散策を始めよう（終日利用可）。昭和六十三年建替えの清潔な無人駅のホームをゆっくり後にしたら、まずは集落北方の小高い丘の上にあり、かつての湖畔の歌舞登神社と合祀して現在地へ移された歴史ある社「兜沼神社」を目指してのんびりゆっくりと楽しく元気に外へと歩き出そう。',
      surprise: '「兜の鍬形に似た沼の形」に由来するロマンある駅名と、のどかな湖畔集落の佇まいが印象的だった。',
      hook: 'JR兜沼駅を出たら、高台の「兜沼神社」へ向かおう。',
      f7_fragment: '大正十三年開業、兜の鍬形に似た沼の形から名付けられた無人駅。',
      f7_full: '「JR兜沼駅」に降り立ち、昭和の木造郵便局舎と湖畔公園を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kabutonuma Station quiet small northern railway building beneath bright open sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '兜沼神社',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '1909年（明治42年）創立（終日参拝自由・無料）。1930年（昭和5年）に鉄道用地となった湖畔の歌舞登神社と合祀し現在地へ移転造営された。例祭日は7月25日。',
      address: '北海道天塩郡豊富町字上サロベツ317',
      lat: 45.227333,
      lng: 141.698097,
      clue:
        '明治四十二年創立の「兜沼神社」へ参拝しよう（終日自由）。昭和五年に鉄道用地となった湖畔の歌舞登神社と合祀し現在の高台へ移った。次は「旧兜沼郵便局舎」へ。',
      surprise: '鉄道の敷設に伴って湖畔の神社と合祀され高台へ移されたという歴史に、鉄道と地域の密接な繋がりを見た。',
      hook: '兜沼神社に参拝したら、兜沼公園内の「旧兜沼郵便局舎」へ向かおう。',
      f7_fragment: '明治四十二年創立、昭和五年に湖畔の歌舞登神社と合祀し移転した高台の社。',
      f7_full: '「兜沼神社」の高台の境内で手を合わせ、鉄道と開拓が交わる歴史に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kabutonuma Shrine wooden torii gate perched on a quiet grassy hill overlooking northern trees, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '旧兜沼郵便局舎（豊富町郷土資料室 兜沼資料室）',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '1934年（昭和9年）建築の町内最古級の木造郵便局舎を兜沼公園内に保存公開（5月上旬〜10月上旬の土日9:00〜16:00、平日は教育委員会要連絡、無料）。昭和初期の貴重な洋風木造建築。',
      address: '北海道天塩郡豊富町字上サロベツ3863',
      lat: 45.217568,
      lng: 141.698031,
      clue:
        '兜沼公園の一角に大切に保存されている「旧兜沼郵便局舎（豊富町郷土資料室 兜沼資料室）」を訪ねよう（5〜10月土日9:00〜16:00、無料）。昭和九年に建てられた豊富町内最古級の木造郵便局舎は、上げ下げ窓や温かな木造りの洋風外観が実に味わい深く、当時の郵便局の賑わいを今に生き生きと伝えている。歴史的建築を見学したら、「兜沼公園 インフォメーションセンター」で一息つこう。',
      surprise: '昭和九年建築の町内最古級の木造郵便局舎が、湖畔公園の中にこれほど美しい姿で残っていたとは驚いた。',
      hook: '旧兜沼郵便局舎を見学したら、「兜沼公園 インフォメーションセンター」へ向かおう。',
      f7_fragment: '昭和九年建築の町内最古級の木造郵便局舎を保存公開する歴史資料室。',
      f7_full: '「旧兜沼郵便局舎」のレトロな木造建築を眺め、昭和初期の暮らしに思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Former Kabutonuma Post Office preserved 1934 pale timber building with vintage sash windows in parkland, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: '兜沼公園 インフォメーションセンター',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '兜沼公園キャンプ場の管理棟。5/1〜9/30管理人駐在（9:00〜18:00、7〜8月〜20:00、公園は通年開放・無料）。一般来訪者も利用可能な売店（食料品・飲料）・軽食・休憩室を備える。',
      address: '北海道天塩郡豊富町字上サロベツ3863',
      lat: 45.2171,
      lng: 141.6975,
      clue:
        '緑豊かな湖畔に佇む「兜沼公園 インフォメーションセンター」で休憩しよう（5〜9月管理人駐在9:00〜18:00等、公園通年開放）。キャンプ利用者だけでなく一般の散策者も気軽に利用できる売店や軽食、清潔な休憩室がしっかり揃っており、湖畔の爽やかな風を感じながら冷たい飲み物や軽食で楽しくリフレッシュできる。十分に休んだら、公園の奥にある「音吉神社（熊霊堂）」へと向かおう。',
      surprise: 'キャンプ場管理棟ながら一般客も気軽に売店や休憩室を使える温かさと、湖畔の爽やかな空気が心地よかった。',
      hook: 'インフォメーションセンターで一息ついたら、公園の奥の「音吉神社（熊霊堂）」へ向かおう。',
      f7_fragment: '一般客も利用できる売店・軽食・休憩室を備えた兜沼湖畔の拠点。',
      f7_full: '「兜沼公園 インフォメーションセンター」で湖畔の風を感じながら心地よく休憩した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kabutonuma Park Information Center cozy timber lakeside lodge with resting travelers and tall birches, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '音吉神社（熊霊堂）',
      prefecture: '北海道',
      city: '豊富町',
      description:
        '兜沼公園の奥に静かに佇む歴史的小祠（終日参拝自由・無料）。明治期の開拓の功労者・梅村庄次郎が、親交のあったアイヌの音吉のために建てたと伝わる。',
      address: '北海道天塩郡豊富町字上サロベツ3863',
      lat: 45.2165,
      lng: 141.699,
      clue:
        '旅の締めくくりは、兜沼公園の奥の木立の中にひっそりと佇む歴史的小祠「音吉神社（熊霊堂）」に静かに手を合わせよう（終日参拝可・無料）。明治の開拓期に地域の功労者である梅村庄次郎氏が、親交の深かったアイヌの音吉を深く偲んで建てたと伝わる小さな祠は、北の大地で共に生きた人々の温かな絆を今も静かに物語っている。深い歴史の余韻を胸に深く刻み、兜沼の旅を穏やかに優しく心から結ぼう。',
      surprise: '開拓功労者の梅村庄次郎がアイヌの音吉のために建てた小祠の物語に触れ、胸がじんわりと温かくなった。',
      hook: '',
      f7_fragment: '開拓期の功労者・梅村庄次郎がアイヌの音吉のため建てたと伝わる歴史的小祠。',
      f7_full: '「音吉神社（熊霊堂）」の静かな小祠に手を合わせ、兜沼の絆の歴史とともに旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Otokichi Shrine tiny modest wooden memorial shrine nestled quietly beneath tall forest trees by Kabutonuma Lake, no text, no letters.',
    },
  ],
};
