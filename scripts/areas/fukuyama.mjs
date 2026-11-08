const s1_clue =
  'JR山陽本線の福山駅から北北西へ徒歩3分、駅前の石段を上って「福山城」の本丸へ向かおう（天守閣9:00〜17:00開館・入館16:30まで、月曜休・祝日の場合は翌日休、12月28日〜12月31日休、公園内は散策自由）。水野勝成公が築いた備後十万石の居城だ。全国唯一とされる「天守北側壁面の鉄板張り」の黒き威容と、京都・伏見城から移築された国重要文化財の伏見櫓・筋鉄御門を見学しよう。';
const s1_surprise =
  '福山城の北側は堀が浅く山陽道に近接していたため、防御力を高める工夫として天守の北面全体に黒い鉄板が張られた。南面から見上げれば優美な白漆喰の五層天守、北側へ回り込めば重厚な黒鉄の要塞という、二つの異なる表情を一つの天守建築で同時に堪能できる。';
const s1_hook =
  '黒鉄と白壁が織りなす名城の姿を仰いだら、西へ徒歩6分の緑豊かなダイニングで石窯ピッツァを味わおう。';

const s2_clue =
  '福山城から西へ徒歩6分、文化ゾーンの緑に寄り添う「ゾーナイタリア福山」へ入ろう（11:00〜15:00・17:00〜22:00営業、火曜定休・祝日は営業）。高温の石窯で焼くピッツァを味わおう。';
const s2_surprise =
  '職人が高温の石窯で一気に焼き上げるナポリピッツァは、縁までふっくらと立ち上がり、外はパリッと香ばしく中はもっちりとした食感が際立つ。福山城公園の西側に連なる美術館や文学館の豊かな木立を眺めながら、焼きたての料理とともに優雅な昼下がりを過ごせる。';
const s2_hook =
  '石窯焼きのピッツァでお腹を満たしたら、北北東へ徒歩4分の白壁の文学館で文豪の足跡に触れよう。';

const s3_clue =
  'ゾーナイタリア福山から北北東へ徒歩4分、城山の北西に佇む「ふくやま文学館」を訪ねよう（9:30〜17:00開館・入館16:30まで、月曜休・祝休日の場合は翌日休、年末年始休）。『山椒魚』や『黒い雨』で知られる福山出身の文豪・井伏鱒二をはじめ、木下夕爾など郷土ゆかりの作家たちを顕彰する文化施設だ。白壁の館内に再現された井伏鱒二の書斎や直筆原稿、愛用の品々をゆっくりと巡ろう。';
const s3_surprise =
  '白壁と石積み、瓦屋根が調和した端正な建物は、井伏鱒二の郷里である加茂地方の民家をモチーフに設計されている。飄々としたユーモアと温かい眼差しで備後の風土や市井の人々を描き続けた文豪の言葉に触れると、城下町の風景がいっそう味わい深く見えてくる。';
const s3_hook =
  '文豪の書斎と直筆の言葉に向き合ったら、東へ徒歩5分の文化財洋館で庭園と天守を眺めながらひと息つこう。';

const s4_clue =
  'ふくやま文学館から東へ徒歩5分歩くと、福山城二の丸近くに建つ国登録有形文化財「福寿会館」に到着する（本館9:00〜17:00開館・月曜休、洋館テラスカフェは平日11:00〜16:00・土日祝10:00〜16:30営業・月曜火曜定休）。かつて「鰹節王」と呼ばれた豪商・安部和助の別邸だ。緑瓦のモダンな洋館カフェに入り、池泉庭園の向こうにそびえる福山城天守を借景に珈琲や甘味を味わおう。';
const s4_surprise =
  '京阪の宮大工を招いて三年がかりで造営された敷地には、数寄屋造りの広大な和館とアール・デコ調の丸窓を持つ洋館が並び立つ。戦災の空襲を免れて残った貴重な近代建築の窓辺から、手入れされた松の緑と黒鉄の天守閣を同時に見上げる贅沢な時間が流れている。';
const s4_hook =
  '借景の庭園と洋館カフェで羽を休めたら、東南東へ徒歩9分の老舗菓子舗で伝統の柚餅をお土産に選ぼう。';

const s5_clue =
  '福寿会館から東南東へ徒歩9分歩くと、宝町の老舗和菓子店「大和屋本店」に到着する（9:00〜17:00営業、日曜定休）。百五十年以上にわたり城下町で親しまれてきた伝統の菓子舗だ。清々しい柚子の香りが広がる福山伝来の看板銘菓「柚餅」や、職人が一枚ずつ手焼きで仕上げるザラメ香る「かすていら」や香ばしい「福山城サブレ」を旅のお土産に選び、西へ徒歩7分のJR山陽本線・福山駅へ戻ろう。';
const s5_surprise =
  '明治初期の創業より百五十年以上続く同店の看板銘菓「柚餅」は、元禄期から福山藩の茶席で愛されてきた伝統を受け継ぐ逸品で、清々しい柚子の香りと上品な甘みが口いっぱいに広がる。底にザラメを敷いてしっとりと焼き上げた手焼きの「かすていら」も根強い人気を誇る。';
const s5_hook = '';

export const area = {
  slug: 'fukuyama',
  station_order: 289,
  line: 'JR山陽本線',
  station: '福山',
  area_name: '福山駅・黒鉄の天守・文化の森と別邸の道',
  prefecture: '広島県',
  Stop_name: '福山駅',
  title: '福山城の黒鉄の天守と洋館に映る備後の面影',
  description:
    '駅のホームのすぐ目の前に、北面を黒鉄で覆った五層天守がそびえる備後十万石の城下町・広島県福山市。城山の緑に抱かれた石窯ピッツァの店や井伏鱒二ゆかりの文学館、天守を借景とする豪商別邸の洋館カフェ、そして宝町の老舗が伝える柚餅の香りを辿る。',
  category: '黒鉄天守の名城・文豪の記憶・文化財洋館カフェと伝統柚餅',
  budget_tier: 2,
  subtitle: '福山城とゾーナイタリア、ふくやま文学館から福寿会館へ',
  area_tag: '広島県福山市',
  time_minutes: 75,
  distance_km: 2.1,
  duration_min: 75,
  tags: ['福山城', 'ゾーナイタリア福山', 'ふくやま文学館', '福寿会館', '大和屋本店'],
  eyecatch_prompt:
    'Mid-century modern Japanese poster-art gouache illustration of the five-tiered keep of Fukuyama Castle showing its distinctive contrast of white plaster walls and matte-black iron-plated northern facade rising above green pine gardens and the green-tiled Western pavilion of Fukuju Kaikan under a bright sky, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 52% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
  completion_badge: {
    code: 'FUKUYAMA_CORE',
    name_ja: '黒鉄の天守と備後文化のしるし',
    subtitle_en: 'Explorer of Fukuyama Iron-Clad Keep and Heritage',
    description:
      '福山城からゾーナイタリア福山、ふくやま文学館、福寿会館、大和屋本店までを巡り歩いた証。',
    image_prompt:
      'Gouache crest of a black-and-white castle keep, a round modernist window above a pine garden, and a yuzu rice confection on cream washi paper. No text.',
  },
  question:
    '黒鉄の天守と文豪の書斎、借景の洋館カフェや石窯ピッツァ、老舗の柚餅の中で、旅の記憶として持ち帰りたいのはどれですか？',
  choices: [
    {
      key: 'A',
      text: '天守の北側一面を黒い鉄板で覆った「福山城」と、伏見城から移築された国重要文化財の伏見櫓',
      description: '白漆喰の南面と漆黒の北面が織りなす唯一無二の造形と、藩政初期から現存する櫓の重厚さに圧倒された。',
      badge: {
        code: 'FUKUYAMA_A',
        name_ja: '黒鉄と白壁の名城を仰ぐ城郭探訪者',
        subtitle_en: 'Admirer of Fukuyama Iron-Plated Keep',
        description: '福山城を訪ね、北面鉄板張りの天守と重要文化財の櫓群を見学した者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Gouache emblem of the five-tiered Fukuyama Castle keep displaying both white plaster and dark iron-plated walls above stone ramparts. No text.',
      },
    },
    {
      key: 'B',
      text: '国登録有形文化財「福寿会館」の洋館カフェから眺めた、日本庭園と福山城天守の優美な借景',
      description: '豪商別邸に設えられた丸窓の洋館で、手入れされた庭園の松越しに天守を見上げる贅沢な時間を過ごした。',
      badge: {
        code: 'FUKUYAMA_B',
        name_ja: '文化財の洋館で借景の城を愛でる人',
        subtitle_en: 'Patron of Fukuju Kaikan Heritage Salon',
        description: '福寿会館を訪ね、和館・洋館の建築美と庭園からの借景を楽しんだ者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Gouache emblem of a green-tiled Art Deco pavilion with a circular window overlooking a pine garden and castle tower. No text.',
      },
    },
    {
      key: 'C',
      text: '「ふくやま文学館」で触れた井伏鱒二の言葉と、文化ゾーンの緑に寄り添う「ゾーナイタリア福山」の昼食',
      description: '郷土を愛した文豪の原稿や書斎に向き合い、焼きたての石窯ピッツァとともに文化の薫る午後を満喫した。',
      badge: {
        code: 'FUKUYAMA_C',
        name_ja: '備後の文学と石窯の薫りを愉しむ旅人',
        subtitle_en: 'Walker of Fukuyama Literary and Culinary Woods',
        description: 'ゾーナイタリア福山とふくやま文学館を巡り、食と文学の彩りに触れた者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Gouache emblem of a fountain pen and manuscript beside a wood-fired Margherita pizza framed by green trees. No text.',
      },
    },
    {
      key: 'D',
      text: '宝町の老舗「大和屋本店」で求めた、福山藩の茶席から伝わる清々しい香りの銘菓「柚餅」',
      description: '百五十年以上続く宝町の老舗で、茶の湯の伝統を受け継ぐ柚餅と手焼きかすていらの味わいに心和んだ。',
      badge: {
        code: 'FUKUYAMA_D',
        name_ja: '城下町に伝わる柚餅と銘菓を識る数寄者',
        subtitle_en: 'Connoisseur of Bingo Yuzumochi Confections',
        description: '大和屋本店を訪ね、伝統銘菓「柚餅」や手焼きかすていらを求めた者に贈られる称号。',
        rarity: 4,
        image_prompt:
          'Gouache emblem of pale amber yuzu rice-cake confections and golden castella slices with a whole yellow yuzu citrus on a ceramic plate. No text.',
      },
    },
  ],
  spots: [
    {
      name: '福山城',
      spot_type: '見どころ',
      address: '広島県福山市丸之内1-8',
      lat: 34.490658,
      lng: 133.361205,
      radius_m: 50,
      order: 1,
      description:
        '水野勝成公が築いた備後十万石の名城（天守閣9:00〜17:00開館・入館16:30まで、月曜休・祝日の場合は翌日休、12月28日〜12月31日休）。全国唯一の天守北側鉄板張りと、国重要文化財の伏見櫓・筋鉄御門を擁する。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      f7_fragment: '白漆喰の南面と黒鉄張りの北面を併せ持つ、備後十万石の五層天守。',
      f7_full:
        '駅前の城山にそびえる福山城の黒鉄と白壁の鮮やかな対比が、備後福山藩の歴史と文化を辿る歩き旅の幕開けを力強く告げる。',
      image_prompt:
        'Morning gouache and watercolor illustration of the five-tiered keep of Fukuyama Castle showcasing its striking contrast between whitewashed plaster walls and matte-black iron-clad northern wall above massive stone ramparts and pine trees, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: 'ゾーナイタリア福山',
      spot_type: '食事',
      address: '広島県福山市西町2-7-1',
      lat: 34.490691,
      lng: 133.357313,
      radius_m: 50,
      order: 2,
      description:
        '文化ゾーンの西側にあるイタリアンレストラン（11:00〜15:00・L.O.14:30、17:00〜22:00・L.O.21:00営業、火曜定休・祝日の場合は営業）。高温の石窯で焼き上げるナポリピッツァや旬のパスタが人気。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      f7_fragment: '文化の森の緑を望む開放的な空間で味わう、焼きたての石窯ピッツァ。',
      f7_full:
        '香ばしく焼き上がった石窯ピッツァと瀬戸内の恵みを活かしたパスタが、城下町の文化エリアを巡る昼下がりを華やかに彩る。',
      image_prompt:
        'Freshly baked wood-fired Margherita pizza with blistered crust, melted mozzarella, and green basil leaves alongside a plate of seafood pasta on a sunlit white-linen table overlooking lush green garden trees, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: 'ふくやま文学館',
      spot_type: '見どころ',
      address: '広島県福山市丸之内1-9-9',
      lat: 34.492476,
      lng: 133.358418,
      radius_m: 50,
      order: 3,
      description:
        '福山出身の文豪・井伏鱒二を中心に郷土ゆかりの文学者を顕彰する文学館（9:30〜17:00開館・入館16:30まで、月曜休・祝休日の場合は翌日休、年末年始休）。再現された書斎や直筆原稿を展示する。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      f7_fragment: '加茂地方の民家を模した白壁と瓦屋根の館に息づく、井伏鱒二の文学世界。',
      f7_full:
        '城山の緑に寄り添う「ふくやま文学館」の書斎展示と原稿資料が、備後の風土を温かく見つめた作家たちのまなざしを伝えてくれる。',
      image_prompt:
        'Tranquil gouache and watercolor illustration of the white-plastered walls, stone masonry base, and traditional tiled roof of Fukuyama Literature Museum surrounded by green trees alongside a serene wooden writer study desk with an antique fountain pen and inkwell (strictly plain uninscribed paper and building walls with NO kanji or letters), painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '福寿会館',
      spot_type: '休憩',
      address: '広島県福山市丸之内1-8-9',
      lat: 34.492029,
      lng: 133.361464,
      radius_m: 50,
      order: 4,
      description:
        '豪商・安部和助の別邸として建てられた国登録有形文化財（本館9:00〜17:00開館・月曜休、洋館テラスカフェは平日11:00〜16:00・土日祝10:00〜16:30営業・月曜火曜定休）。池泉庭園と福山城天守を望む洋館カフェを備える。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      f7_fragment: '福山城天守を借景とする池泉庭園と、緑瓦が映える登録有形文化財の洋館。',
      f7_full:
        '昭和初期の面影をとどめる「福寿会館」の洋館カフェで庭園と天守を眺めながら味わうお茶が、城下町散策に優雅な余白をもたらす。',
      image_prompt:
        'Clear afternoon gouache illustration of the charming retro Western-style pavilion of Fukuju Kaikan with green Spanish roof tiles and a distinctive circular window overlooking a manicured Japanese pine garden with a cup of tea and rose-shaped pastry in the foreground, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '大和屋本店',
      spot_type: '買い物',
      address: '広島県福山市宝町6-8',
      lat: 34.489606,
      lng: 133.366902,
      radius_m: 50,
      order: 5,
      description:
        '宝町で百五十年以上続く老舗和菓子店（9:00〜17:00営業、日曜定休）。福山伝統の銘菓「柚餅」や、職人が手焼きで仕上げるザラメ香る「かすていら」を商う。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      f7_fragment: '清々しい柚子の香りが広がる伝統銘菓「柚餅」と手焼き「かすていら」の老舗。',
      f7_full:
        '宝町の老舗「大和屋本店」が守り継ぐ柚餅と手焼きかすていらが、備後福山の歴史と文化を辿った旅を香り高く締めくくる。',
      image_prompt:
        'Warm golden-hour illustration of translucent amber yuzu-mochi rice confections dusted with fine sugar and thick golden-brown slices of hand-baked castella cake arranged on a ceramic plate beside a whole yellow yuzu fruit and green tea (smooth plain confection surfaces with NO branded stamps or text), painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
  ],
};

export default area;
