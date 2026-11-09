const s1_clue =
  'JR山陰本線の安来駅に降り立ち、奥出雲の鉄の積み出し港として栄えた町の玄関口「JR安来駅」の観光交流プラザから歩き始めよう（9:00〜18:00営業、年中無休、売店コーナー併設）。総ヒノキ造りの温もりある木造風駅舎を見上げ、館内の売店で民謡・安来節にちなんだ「どじょう掬いまんじゅう」や地元蔵元の地酒、刃物の町・安来の工芸品をお土産に選んで、湊町散策の第一歩を踏み出そう。';
const s1_surprise =
  '古くから伯耆と出雲の境に位置する交通の要衝であった安来は、中国山地のたたら製鉄で生み出された玉鋼や銑鉄を全国へと送り出す北前船の湊として繁栄した。木造の架構が美しい駅舎には、鉄と民謡の里ならではの品々が揃っている。';
const s1_hook =
  '木の香り漂う駅舎で銘菓を手に入れたら、北北東へ徒歩2分の老舗料亭で昼食にしよう。';

const s2_clue =
  'JR安来駅から北北東へ徒歩2分、旧街道筋に風格ある和風建築を構える明治創業の「料亭 ひさご家」へ立ち寄ろう（11:30〜14:00・17:00〜21:00営業、不定休、満席・予約制時間帯は駅周辺の食事処も利用可）。北前船の寄港地として培われた安来の繊細な和食の技を受け継ぐ空間で、中海や日本海の旬の魚介を用いた彩り豊かな御膳や名物の鰻・どじょう料理を味わい、湊町の豊かな食文化を堪能しよう。';
const s2_surprise =
  '明治三十二年の創業以来、政財界の賓客や文人墨客をもてなしてきたひさご家は、数寄屋造りの座敷と手入れの行き届いた庭園で知られる老舗料亭として親しまれている。汽水湖である中海と日本海の双方の恵みが集まる安来ならではの滋味深い料理が楽しめる。';
const s2_hook =
  '老舗料亭の昼食を堪能したら、西へ徒歩6分の鉄師ゆかりの商家建築を訪ねよう。';

const s3_clue =
  '料亭 ひさご家から西へ徒歩6分、古い商家が並ぶ本町通りの「並河家住宅」を訪ねよう（外観見学自由、10:00〜16:00）。中海の舟運と商いで栄えた江戸後期の重厚な切妻町家の佇まいを鑑賞しよう。';
const s3_surprise =
  '安来港に近く、飯梨川や伯太川を通じて運ばれた鉄や米の取引で賑わった旧町人町には、白漆喰の虫籠窓や格子戸を備えた伝統的な町家が今も点在する。国の登録有形文化財に指定されている並河家住宅は、湊町の豪商の格式を今に伝えている。';
const s3_hook =
  '江戸後期の豪商の町家を眺めたら、北へ徒歩12分のたたら製鉄と日本刀の博物館へ向かおう。';

const s4_clue =
  '並河家住宅から北へ徒歩12分、安来港のほとりに建つ「和鋼博物館」へ足を運ぼう（9:00〜17:00開館、水曜休館）。日本刀の原料となる最高品質の鉄「玉鋼」を生み出した日本独自の「たたら製鉄」の工程や、地下構造まで再現された巨大な「高殿」の模型、そして重要文化財を含む名刀の数々をじっくりと見学し、砂鉄と木炭から強靭な鋼を鍛え上げた先人たちの知恵と技の結晶に深く触れよう。';
const s4_surprise =
  '中国山地の良質な真砂砂鉄と豊かな森林資源を背景に発展した出雲地方のたたら製鉄は、近世日本の鉄生産の大部分を支えた。その伝統技術を受け継ぐ現代の特殊鋼産業にいたるまで、安来が「鉄のまち」として歩み続ける理由がここに凝縮されている。';
const s4_hook =
  'たたら製鉄と玉鋼の歴史に触れたら、東へ徒歩13分の十神山を望む海辺の公園で一息つこう。';

const s5_clue =
  '和鋼博物館から東へ徒歩13分歩くと、穏やかな安来港の入り江に面した「十神山なぎさ公園」に到着する（終日開放、入園無料、荒天時は園内の東屋や休憩ベンチも利用可）。かつて北前船が帆を休めた入り江の向こうに浮かぶ緑豊かな十神山と亀島の美しい稜線を眺めながら、潮風が渡る芝生広場や水辺のベンチでさきほど求めた安来銘菓を味わい、鉄と湊の物語を巡った安来の旅を穏やかに締めくくろう。';
const s5_surprise =
  '海辺に丸みを帯びた美しい姿を見せる十神山は、古くから安来港に出入りする船の目印となってきた湊の象徴として愛されている。波静かな中海の水面に映る山影を見つめていると、千石船が行き交い安来節の唄声が響いた往時の港町の情景が静かに浮かび上がる。';
const s5_hook = '';

export const area = {
  slug: 'yasugi',
  station_order: 359,
  line: 'JR山陰本線',
  station: '安来',
  area_name: '安来駅・たたら製鉄の記憶を伝える和鋼博物館と安来港の町並みを巡る道',
  prefecture: '島根県',
  Stop_name: '安来駅',
  title: 'たたら製鉄の湊と十神山の潮風・安来を巡る',
  description:
    '奥出雲のたたら製鉄で生まれた鉄の積み出し港として栄えた島根県安来市。総ヒノキ造りのJR安来駅から、明治創業の料亭 ひさご家、登録有形文化財の並河家住宅、玉鋼の歴史を伝える和鋼博物館、十神山なぎさ公園までを巡る。',
  category: 'JR安来駅・料亭ひさご家・並河家住宅・和鋼博物館と十神山なぎさ公園',
  budget_tier: 2,
  subtitle: 'JR安来駅と料亭ひさご家、並河家住宅から和鋼博物館と十神山なぎさ公園へ',
  area_tag: '島根県安来市',
  time_minutes: 55,
  distance_km: 2.6,
  duration_min: 55,
  tags: ['JR安来駅', '料亭 ひさご家', '並河家住宅', '和鋼博物館', '十神山なぎさ公園'],
  eyecatch_prompt:
    'Serene late-afternoon coastal townscape watercolor and ink illustration of Yasugi Port featuring traditional wooden merchant houses with white plaster walls along the harbor, calm blue waters of Nakaumi lagoon reflecting the rounded green silhouette of Mount Tokamiyama, and warm glowing lanterns, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 52% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
  completion_badge: {
    code: 'YASUGI_CORE',
    name_ja: '玉鋼の湊と十神山の凪・安来のしるし',
    subtitle_en: 'Explorer of Yasugi Tatara Iron Port and Nakaumi Bay',
    description:
      'JR安来駅から料亭 ひさご家、並河家住宅、和鋼博物館、十神山なぎさ公園までを巡り歩いた証。',
    image_prompt:
      'Watercolor crest of glowing tatara furnace embers, a gleaming Japanese sword blade tip, and calm bay waves before a green coastal mountain on cream washi paper. No text.',
  },
  question:
    'たたら製鉄の積み出し港として栄えた商家街と中海の穏やかな海景が重なる安来を訪ねて、旅の余韻として持ち帰りたい出会いはどれですか？',
  choices: [
    {
      key: 'A',
      text: 'ヒノキ香る「JR安来駅」で出会った、民謡・安来節ゆかりの銘菓と鉄のまちの工芸',
      description: '美しい木造風の駅舎に並ぶどじょう掬いモチーフの銘菓や刃物工芸に触れ、愛嬌と技が共存する町の気風に惹かれた。',
      badge: {
        code: 'YASUGI_A',
        name_ja: 'ヒノキ駅舎と安来節の里の銘菓を愛でる旅人',
        subtitle_en: 'Admirer of Yasugi Station and Folk Crafts',
        description: 'JR安来駅を訪ね、木造風駅舎の佇まいと安来節ゆかりの銘菓・工芸品に触れた者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Watercolor emblem of a traditional bamboo basket and playful folk sweet buns on a warm cypress wood tray. No text.',
      },
    },
    {
      key: 'B',
      text: '明治創業の「料亭 ひさご家」で味わう、北前船の湊町が育んだ旬の和食御膳',
      description: '数寄屋造りの落ち着いた空間で中海と日本海の海の幸を味わい、湊町の奥深いもてなしの文化に満たされた。',
      badge: {
        code: 'YASUGI_B',
        name_ja: '北前船の湊が育んだ老舗料亭の滋味を識る食通',
        subtitle_en: 'Gourmet of Hisagoya Ryotei in Yasugi',
        description: '料亭 ひさご家を訪ね、明治から続く和食の技と山陰の海の幸を堪能した者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Watercolor emblem of a lacquered bento tier with grilled eel, sashimi, and seasonal garnishes beside a porcelain sake cup. No text.',
      },
    },
    {
      key: 'C',
      text: '「並河家住宅」の白漆喰と格子戸の町並みと、安来港の向こうに浮かぶ「十神山」の海景',
      description: '鉄や米の商いで栄えた江戸後期の商家の面影と、北前船の目印となった十神山を望む穏やかな水辺の風景に癒やされた。',
      badge: {
        code: 'YASUGI_C',
        name_ja: '湊町の古商家と十神山の夕凪を歩む散策者',
        subtitle_en: 'Walker of Namikawa Residence and Tokamiyama Coast',
        description: '並河家住宅と十神山なぎさ公園を巡り、安来の商家建築と港の風景を楽しんだ者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Watercolor emblem of a white-plastered merchant house facade overlooking a calm harbor and a green island mountain. No text.',
      },
    },
    {
      key: 'D',
      text: '砂鉄と炎から日本刀の魂「玉鋼」を生み出した、千年の技を伝える「和鋼博物館」',
      description: 'たたら製鉄の高殿の構造と銀色に輝く玉鋼、そして鍛え上げられた名刀の美しさに、出雲の鉄文化の真髄を見た。',
      badge: {
        code: 'YASUGI_D',
        name_ja: 'たたらの炎と玉鋼の輝きを見つめる鉄の守り手',
        subtitle_en: 'Guardian of Wakou Museum and Tatara Steel',
        description: '和鋼博物館を訪ね、日本独自のたたら製鉄の歴史と玉鋼・日本刀の美に触れた者に贈られる称号。',
        rarity: 4,
        image_prompt:
          'Watercolor emblem of a silvery lump of tamahagane steel and warm golden furnace embers beside a traditional clay furnace. No text.',
      },
    },
  ],
  spots: [
    {
      name: 'JR安来駅',
      spot_type: '買い物',
      address: '島根県安来市安来町2093-3',
      lat: 35.428212,
      lng: 133.259238,
      radius_m: 50,
      order: 1,
      description:
        '島根県産のヒノキをふんだんに用いた木造風駅舎と観光交流プラザを備える駅（売店9:00〜18:00）。安来節ゆかりの銘菓や地酒、安来鋼の刃物などの買い物を楽しめる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      f7_fragment: '島根県産ヒノキの架構が香る木造風駅舎に、どじょう掬い銘菓と鉄のまちの工芸品が揃う玄関口。',
      f7_full:
        '「JR安来駅」の温かな木の空間で手にする銘菓と工芸品が、たたらの湊町・安来をめぐる旅の幕を開ける。',
      image_prompt:
        'Warm architectural and still-life watercolor and ink illustration of the cypress-wood interior of Yasugi Station featuring natural timber beams and a display table of cute polka-dot headscarf-shaped sweet manju buns and a woven bamboo basket, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '料亭 ひさご家',
      spot_type: '食事',
      address: '島根県安来市安来町1891',
      lat: 35.429106,
      lng: 133.259478,
      radius_m: 50,
      order: 2,
      description:
        '明治三十二年創業の歴史を誇る安来の老舗料亭（11:30〜14:00・17:00〜21:00営業、不定休）。中海と日本海の海の幸を活かした季節の和食御膳や鰻料理を味わえる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      f7_fragment: '明治創業の数寄屋造りの老舗で味わう、中海と日本海の恵みを盛り込んだ彩り豊かな和食御膳。',
      f7_full:
        '「料亭 ひさご家」の繊細な包丁技と滋味深い料理が、北前船の寄港地として栄えた安来の粋を今に伝える。',
      image_prompt:
        'Appetizing food watercolor and ink illustration of an elegant Japanese kaiseki lunch set served in lacquered boxes on a wooden table, showing glazed broiled eel over rice, fresh seasonal sashimi, simmered vegetables, and a clear soup bowl beside a ceramic tea cup, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '並河家住宅',
      spot_type: '見どころ',
      address: '島根県安来市安来町1955',
      lat: 35.429017,
      lng: 133.255109,
      radius_m: 50,
      order: 3,
      description:
        '旧街道・本町通りに面して建つ江戸後期の商家建築で、国の登録有形文化財（10:00〜16:00、外観見学自由）。白漆喰の虫籠窓や格子戸が湊町の豪商の面影を伝える。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      f7_fragment: '鉄と米の舟運で栄えた本町通りに佇む、白漆喰の虫籠窓と格子戸が美しい江戸後期の商家建築。',
      f7_full:
        '国の登録有形文化財「並河家住宅」の端正な切妻屋根と格子構えが、千石船で賑わった湊町の記憶を静かに映し出す。',
      image_prompt:
        'Daylight architectural watercolor and ink illustration of the historic Edo-period Namikawa Residence merchant house in Yasugi featuring a dark tiled gable roof, white plaster second-story walls with mushiko-mado lattice windows, and finely crafted wooden street-level lattice doors, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '和鋼博物館',
      spot_type: '見どころ',
      address: '島根県安来市安来町1058',
      lat: 35.435353,
      lng: 133.253619,
      radius_m: 50,
      order: 4,
      description:
        '日本独自の製鉄法「たたら」と日本刀の原料「玉鋼」の歴史・科学を体系的に紹介する博物館（9:00〜17:00開館、水曜休館）。高殿の地下構造再現や重要文化財の刀剣展示が見どころ。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      f7_fragment: '砂鉄と木炭から日本刀の魂「玉鋼」を生み出した、たたら製鉄の技と名刀の輝きに迫る博物館。',
      f7_full:
        '「和鋼博物館」に展示される銀色の玉鋼と名刀の澄んだ刃文が、鉄のまち・安来が誇る千年のものづくり精神を物語る。',
      image_prompt:
        'Atmospheric museum display watercolor and ink illustration of a gleaming silvery-gray raw tamahagane steel bloom and a polished Japanese katana blade resting on a wooden stand beside a traditional clay tatara smelting furnace cross-section model, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '十神山なぎさ公園',
      spot_type: '休憩',
      address: '島根県安来市安来町895-1',
      lat: 35.434742,
      lng: 133.262228,
      radius_m: 50,
      order: 5,
      description:
        '安来港の入り江と中海に面した緑豊かな海浜公園（終日開放、入園無料）。北前船の目印であった十神山と穏やかな水面を眺めながら水辺のベンチや東屋で休憩できる。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      f7_fragment: '北前船が帆を休めた安来港の入り江越しに、緑の十神山と亀島を望む穏やかな水辺の公園。',
      f7_full:
        '「十神山なぎさ公園」の潮風に吹かれながら眺める中海の夕凪が、鉄と湊の歴史を巡った安来の旅を静かに結ぶ。',
      image_prompt:
        'Tranquil waterfront landscape watercolor and ink illustration of Tokamiyama Nagisa Park showing a wooden waterside bench and pine trees along a stone promenade overlooking the calm blue inlet of Yasugi Port and the rounded green silhouette of Mount Tokamiyama under soft afternoon clouds, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
  ],
};

export default area;
