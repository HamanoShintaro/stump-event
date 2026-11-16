export default {
  slug: 'hakoneyumoto',
  station_order: 672,
  station: '箱根湯本',
  line: '箱根登山鉄道線',
  area_name: '箱根湯本・早川の湯けむりと古刹',
  prefecture: '神奈川県',
  municipality: '箱根町',
  category: '温泉と自然',
  budget_tier: 3,
  tags: ['神奈川県', '箱根町', '箱根湯本駅', '温泉', '滝'],
  style_genre: 'ghibli_impasto_gouache',
  title: '箱根湯本・早川沿いの湯葉丼から玉簾の瀧へ',
  description:
    '箱根湯本駅から、早川に架かる赤い「あじさい橋」、汲み上げ湯葉が絶品の「「湯葉丼」直吉」、北条五代の菩提寺「早雲寺」、皇女和宮ゆかりの「阿弥陀寺」、境内の庭園に名瀑が落ちる「天成園 玉簾の瀧」を巡る散策路。',
  eyecatch_prompt:
    'Warm painterly impasto gouache illustration of Hakone-Yumoto hot spring valley showing the bright red Ajisai Bridge arching over the rushing clear Hayakawa River framed by forested green mountains, traditional wooden hot spring inns, and the delicate white threads of Tamadare Waterfall plunging beside mossy rocks, rich emerald and cerulean tones, no text, no letters, no numbers, no labels.',
  question: '早川の清流と名物の湯葉、山あいの古刹と名瀑を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「「湯葉丼」直吉」で、箱根の名水で作られた柔らかな湯葉丼を味わった瞬間',
      subtext:
        '早川のせせらぎを聞きながらいただく優しい味わいが、山の散策への力を満たしてくれた。',
      badge: {
        code: 'hakoneyumoto_naokichi',
        name_ja: '箱根湯本・名水仕込みの湯葉丼を味わいし者',
        subtitle_en: 'Guest of Yubadon Naokichi',
        description:
          '「湯葉丼」直吉を訪ね、箱根の名水「姫の水」が育む絶品の湯葉丼を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a ceramic bowl of steaming golden tofu skin yuba over rice in delicate broth beside a wooden spoon, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「早雲寺」の杉木立に囲まれた山門をくぐり、北条五代が眠る墓前に手を合わせた瞬間',
      subtext:
        '戦国時代に関東を治めた北条氏の歴史が、箱根の山あいに静かに息づいていた。',
      badge: {
        code: 'hakoneyumoto_sounji',
        name_ja: '箱根湯本・北条五代の菩提寺を訪ねし者',
        subtitle_en: 'Visitor of Soun-ji Temple',
        description:
          '早雲寺を訪ね、北条五代の菩提寺として歴史を刻む静かな境内を参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a mossy thatched wooden temple gate framed by towering green cedar trunks and mountain mist, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「阿弥陀寺」の山道を登り、塔ノ峰の静寂の中で琵琶の伝説に触れた瞬間',
      subtext:
        '町並みを離れた山中の古刹に満ちる清らかな空気が、旅の歩みを深めてくれた。',
      badge: {
        code: 'hakoneyumoto_amidaji',
        name_ja: '箱根湯本・山あいの古刹に祈りし者',
        subtitle_en: 'Visitor of Amida-ji Temple',
        description:
          '阿弥陀寺を訪ね、塔ノ峰の中腹に佇む歴史ある古刹の境内を参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a quiet mountain temple roof nestled among blooming blue hydrangeas and mossy stone steps, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「玉簾の瀧」の前に立ち、岩肌を滑り落ちる絹糸のような白い水流を見上げた瞬間',
      subtext:
        'マイナスイオンに満ちた庭園の水音と涼風が、箱根湯本散策の疲れを爽やかに癒やしてくれた。',
      badge: {
        code: 'hakoneyumoto_tamadare',
        name_ja: '箱根湯本・玉簾の瀧に涼みし者',
        subtitle_en: 'Viewer of Tamadare Waterfall',
        description:
          '天成園の庭園に佇む名瀑「玉簾の瀧」を訪ね、清らかな水音に癒やされた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting slender white curtain-like waterfall streams cascading down dark mossy volcanic rock into a clear emerald pool, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'hakoneyumoto_complete',
    name_ja: '箱根湯本・湯けむりと古刹を巡る旅人',
    subtitle_en: 'Walker of Hakone-Yumoto',
    description:
      'あじさい橋から「湯葉丼」直吉、早雲寺、阿弥陀寺、玉簾の瀧までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the red Ajisai Bridge, forested mountain temple eaves, and the slender white Tamadare Waterfall, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'あじさい橋',
      spot_type: '見どころ',
      description:
        '箱根湯本駅から温泉街へと渡る、早川に架かる朱色の美しい橋。川面を吹き抜ける山の風と湯けむりの風景が旅人を迎える。常時通行可能、無料。',
      address: '神奈川県足柄下郡箱根町湯本706',
      prefecture: '神奈川県',
      municipality: '箱根町',
      lat: 35.233048,
      lng: 139.103875,
      clue: '箱根の玄関口・箱根湯本駅を出てすぐの「あじさい橋」から、山あいの温泉街歩きを始めよう（常時通行可・無料）。早川の澄んだ清流に架かる鮮やかな朱色の橋で、見上げれば湯坂山や塔ノ峰の豊かな緑が迫り、足元からは川のせせらぎが心地よく響いてくる。これから始まる湯けむりと歴史の豊かな散策へ、山の澄んだ空気を胸いっぱいにたっぷりと深く吸い込みながらこれからも軽やかに笑顔で踏み出したい。',
      surprise:
        '橋のたもとからは早川沿いに建ち並ぶ老舗温泉旅館の風情ある佇まいを望むことができ、季節ごとに表情を変える渓谷美が楽しめます。',
      hook: '橋を渡って温泉街に入ったら、南南西へ歩いて「湯葉丼」直吉で名物を味わおう。',
      f7_fragment: '箱根湯本駅前から早川に架かる朱色の橋、温泉街への入り口を彩る。',
      f7_full:
        '「あじさい橋」から早川の澄んだ清流と山並みを望み、箱根湯本の旅を爽やかに始めた。',
      image_prompt:
        'Lush gouache landscape illustration of Ajisai Bridge in Hakone-Yumoto, bright red bridge crossing rushing clear mountain river Hayakawa surrounded by steep green wooded slopes and traditional inns, morning light, no text, no letters.',
    },
    {
      name: '「湯葉丼」直吉',
      spot_type: '食事',
      description:
        '大平台の名水「姫の水」と良質な豆乳から作る汲み上げ湯葉を、カツオ出汁の玉子とじでいただく名物店。早川の川辺に佇む人気店。11:00〜18:30（売切次第終了）、火曜休（祝営業）。',
      address: '神奈川県足柄下郡箱根町湯本696',
      prefecture: '神奈川県',
      municipality: '箱根町',
      lat: 35.231781,
      lng: 139.102883,
      clue: '早川の川辺に佇む名店「「湯葉丼」直吉」で、箱根ならではの優しい味わいを堪能しよう（11:00〜18:30・火曜休）。箱根・大平台の名水「姫の水」と良質な豆乳で作る汲み上げ湯葉を、カツオ出汁とともに熱々の玉子とじにした看板メニュー「湯葉丼」が人気だ。川のせせらぎを間近に聞きながら、素材本来の旨みが際立つ温かい一杯をこれからもじっくりと心ゆくまで笑顔でゆっくり丁寧に味わいたい。',
      surprise:
        '湯葉豆腐や湯葉刺しなどの一品料理も揃っており、水と大豆の美味しさを活かした丁寧な味わいが国内外の旅人に愛されています。',
      hook: '名物の湯葉丼で満たされたら、南南東の旧街道へ進み北条家ゆかりの早雲寺へ歩こう。',
      f7_fragment: '箱根の名水で作る汲み上げ湯葉の「湯葉丼」が絶品、早川沿いの人気店。',
      f7_full:
        '「「湯葉丼」直吉」で名水仕込みの柔らかな湯葉丼を味わい、箱根の恵みに満たされた。',
      image_prompt:
        'Warm painterly illustration of Yubadon Naokichi dining room beside Hayakawa river, wooden tables, ceramic bowl of steaming golden yuba tofu skin over rice with green scallions and soft river light through windows, no text, no letters.',
    },
    {
      name: '早雲寺',
      spot_type: '見どころ',
      description:
        '大永元年（1521年）に北条氏綱が父・北条早雲の遺命により創建した臨済宗大徳寺派の古刹。境内には北条五代の墓が静かに佇む。9:00〜16:00、無休、境内無料。',
      address: '神奈川県足柄下郡箱根町湯本405',
      prefecture: '神奈川県',
      municipality: '箱根町',
      lat: 35.230191,
      lng: 139.10394,
      clue: '戦国時代に小田原を拠点に関東一円を治めた北条五代の菩提寺「早雲寺」を訪ねよう（9:00〜16:00・境内無料）。大永元年に二代目・北条氏綱が父・早雲の遺命を受けて創建した古刹で、秀吉の小田原攻めによる焼失を経て再建された本堂や鐘楼が、杉木立の深い静寂の中に建っている。境内に並んだ北条五代の墓前に静かに手を合わせ、戦国の歴史の深い重みをこれからも静かにしっかりと仰ぎ見たい。',
      surprise:
        '境内には室町時代の歌人・宗祇の供養塔や枯山水庭園も残されており、戦国の世に文芸を愛した北条氏の気風に触れることができます。',
      hook: '北条氏の歴史に触れたら、北北西の山裾を登り塔ノ峰の阿弥陀寺へ向かおう。',
      f7_fragment: '北条氏綱が父・早雲のために創建した菩提寺、北条五代の墓が佇む古刹。',
      f7_full:
        '「早雲寺」の杉木立に包まれた境内を歩き、北条五代が眠る墓前に静かに手を合わせた。',
      image_prompt:
        'Serene Japanese Buddhist temple illustration of Soun-ji in Hakone, mossy stone steps ascending through tall dark cedar trees toward a thatched wooden temple roof and stone memorials, soft dappled mountain light, no text, no letters.',
    },
    {
      name: '阿弥陀寺',
      spot_type: '見どころ',
      description:
        '慶長10年（1605年）開山、塔ノ峰の中腹に佇む浄土宗の古刹。皇女和宮ゆかりの寺であり、あじさいの名所としても知られる。9:00〜17:00（冬期〜16:00）、無休、無料。',
      address: '神奈川県足柄下郡箱根町塔之沢24',
      prefecture: '神奈川県',
      municipality: '箱根町',
      lat: 35.238204,
      lng: 139.096669,
      clue: '塔ノ峰の中腹、深い森に抱かれて佇む浄土宗の古刹「阿弥陀寺」へ参拝しよう（9:00〜17:00・無休、無料）。皇女和宮ゆかりの品々や、琵琶を愛した僧侶の物語が今に伝わる静かな寺院だ。',
      surprise:
        '梅雨の季節には参道や境内に色とりどりのあじさいが咲き誇ることから「あじさい寺」とも呼ばれ、多くの参拝者を迎えます。',
      hook: '山中の静寂に癒やされたら、西南西の谷へ下り天成園の玉簾の瀧で旅を結ぼう。',
      f7_fragment: '塔ノ峰の中腹に佇む皇女和宮ゆかりの古刹、あじさいの名所としても知られる。',
      f7_full:
        '「阿弥陀寺」の静かな境内で山あいの清らかな空気を吸い、歴史の物語に触れた。',
      image_prompt:
        'Quiet mountain temple illustration of Amida-ji on Mount Tonomine in Hakone, traditional wooden hall framed by blooming blue and violet hydrangeas and lush forest mist, no text, no letters.',
    },
    {
      name: '箱根湯本温泉 天成園（玉簾の瀧）',
      spot_type: '見どころ',
      description:
        '温泉旅館「天成園」の敷地内庭園にあり、宿泊者以外も無料で見学できる名瀑。高さ約8mの岩肌を幾筋もの清流がすだれのように流れ落ちる。庭園開放8:00〜17:00、無料。',
      address: '神奈川県足柄下郡箱根町湯本682',
      prefecture: '神奈川県',
      municipality: '箱根町',
      lat: 35.226902,
      lng: 139.069,
      clue: '箱根湯本の温泉宿「天成園」の敷地内庭園に湧く名瀑「玉簾の瀧」で旅を締めくくろう（庭園開放8:00〜17:00・見学無料）。高さ約8メートルの岩肌を幾筋もの清らかな水がすだれのように滑り落ちる姿から名付けられ、古くから文人墨客にも愛されてきた。庭園の池を泳ぐ錦鯉や木々の豊かな緑、涼やかな水音に優しく包まれながら、箱根の深い余韻をこれからも爽やかにたっぷりと美しく結びたい。',
      surprise:
        '滝のすぐ脇には江戸時代から湧き続ける「延命の水」や、箱根神社の分社である「玉簾神社」も祀られており、あわせて参拝できます。',
      hook: '',
      f7_fragment: '天成園の庭園に落ちる高さ約8mの名瀑、宿泊者以外も無料で見学できる。',
      f7_full:
        '「玉簾の瀧」の前で絹糸のように流れ落ちる水流を眺め、箱根湯本散策を爽やかに結んだ。',
      image_prompt:
        'Lush gouache landscape illustration of Tamadare Waterfall in Hakone-Yumoto, slender white water streams cascading like a beaded curtain down dark mossy cliffs into an emerald koi pond beneath maple trees, no text, no letters.',
    },
  ],
};
