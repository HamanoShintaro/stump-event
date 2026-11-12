// Spot 1: 福井駅 (203 chars)
const s1_clue =
  '北陸新幹線・ハピラインふくい線・えちぜん鉄道・福井鉄道が乗り入れる福井県の玄関口、「福井（ふくい）駅」から、戦国の名将・柴田勝家公が築いた北ノ庄城と徳川家康公の次男・結城秀康公が開いた越前松平家六十八万石の城下町・福井市の旅を始めよう（改札・コンコースは始発〜終電）。恐竜王国・福井を象徴する西口「恐竜広場」の動く恐竜モニュメントを眺めたら、歴史が重なる城下町へと歩き出そう。';
const s1_surprise =
  '日本屈指の恐竜化石産出地である福井ならではの西口広場には、実物大のフクイラプトルやフクイサウルス、フクイティタンのモニュメントが並び、迫力ある動きと鳴き声で旅人を迎えてくれる。活気あふれる駅前から柴田勝家公ゆかりの北ノ庄城址の杜へと一歩踏み出そう。';
const s1_hook =
  '次は福井駅から西南西へ約440m（徒歩6分）、北ノ庄城址に鎮座する「柴田神社」へ。';

// Spot 2: 柴田神社 (204 chars)
const s2_clue =
  '福井駅西口から西南西へ徒歩6分、天正三年（一五七五年）に柴田勝家公が築いた「北ノ庄城」の本丸跡に鎮座する古社、「柴田神社（北ノ庄城址）」を訪ねよう（境内参拝自由、社務所は9:00〜17:00）。天正十一年の北ノ庄城落城のおりに運命をともにした柴田勝家公と、織田信長公の妹・お市の方を主祭神として祀り、境内にはお市の方の三人の娘（茶々・初・江）を祀る「三姉妹神社」や発掘された北ノ庄城の石垣が静かに佇んでいる。';
const s2_surprise =
  '宣教師ルイス・フロイスが「九層の天守」や笏谷石（しゃくだにいし）の瓦の美しさを讃えた北ノ庄城の歴史を今に伝え、境内には日本最古級の半石半木橋だった「九十九（つくも）橋」の礎石も保存されている。戦国を生き抜いた武将と姫君の記憶に手を合わせよう。';
const s2_hook =
  '次は柴田神社から北西へ約790m（徒歩10分）、ソースカツ丼発祥の老舗「ヨーロッパ軒 総本店」へ。';

// Spot 3: ヨーロッパ軒 総本店 (Breath spot: 95 chars)
const s3_clue =
  '柴田神社から北西へ徒歩10分、大正二年創業の洋食店「ヨーロッパ軒 総本店」へ立ち寄ろう（11:00〜19:50営業、月曜・火曜休）。福井名物「ソースカツ丼」の香ばしい香りにひと息つこう。';
const s3_surprise =
  'ベルリンで料理修行を積んだ初代・高畠増太郎氏が、ドイツのウスターソースを日本人の味覚に合わせて改良し創り上げた「ソースカツ丼」発祥の名店だ。きめ細かい特製パン粉で薄くカラッと揚げた熱々のカツと、酸味と甘みが調和した秘伝のウスターソースが炊きたてのご飯に絶妙に絡み合う。';
const s3_hook =
  '次はヨーロッパ軒 総本店から北東へ約510m（徒歩6分）、お堀端の老舗和菓子処「森八大名閣 本店」へ。';

// Spot 4: 森八大名閣 本店 (202 chars)
const s4_clue =
  'ヨーロッパ軒 総本店から北東へ徒歩6分、福井城址のお堀端に端正な店構えを見せる昭和八年（一九三三年）創業の老舗和菓子処、「森八大名閣（もりはちだいみょうかく）本店」を訪ねよう（9:00〜18:00営業、月曜定休）。福井藩主・松平家の御用菓子司の流れを汲み、甘露煮の赤梅と白餡を羽二重餅で包んだ代表銘菓「越の雪中梅（せっちゅうばい）」や「御挟餅（おばさもち）」、季節の上生菓子が美しく並んでいる。';
const s4_surprise =
  '福井城の内堀に面した本店は、伝統の和菓子づくりとともに現代の感性を取り入れた菓子も手がけ、城下町・福井の茶の湯文化と贈答の心を今に伝えている。笏谷石の石垣とお堀の水面を望むお堀端の通りで、越前福井ならではの気品ある甘味を手に入れよう。';
const s4_hook =
  '次は森八大名閣 本店から東南東へ約350m（徒歩4分）、越前松平家の居城「福井城址」へ。';

// Spot 5: 福井城址 (204 chars)
const s5_clue =
  '森八大名閣 本店から御廊下橋を渡り東南東へ徒歩4分、慶長十一年（一六〇六年）に初代福井藩主・結城秀康公が築いた六十八万石の居城跡、「福井城址」で旅を締めくくろう（本丸跡・石垣見学は終日自由）。青みがかった福井特産の凝灰岩「笏谷石（しゃくだにいし）」を精緻に積み上げた重厚な内堀の石垣と天守台が当時のまま残り、屋根付きの「御廊下橋」と復元された山里口御門が近世城郭の威容を今に伝えている。';
const s5_surprise =
  '天守台のすぐ脇には、「福井」という地名の由来となったと伝わる名水井戸「福の井（ふくのい）」の石組みが今も大切に保存されている。雨に濡れるとひときわ深い青緑色に輝く笏谷石の石垣と水堀の景観を眺めながら、二つの城の歴史を辿った福井の旅を穏やかに締めくくろう。';
const s5_hook = '';

export default {
  slug: 'fukui',
  station_order: 481,
  station: '福井駅',
  line: '北陸新幹線・ハピラインふくい線・えちぜん鉄道・福井鉄道',
  area_name: '福井城址と北ノ庄城・順化（福井市）',
  prefecture: '福井県',
  category: '歴史・文化',
  budget_tier: 2,
  title: '笏谷石の福井城址と北ノ庄の記憶・福井を辿る',
  description:
    '柴田勝家公の北ノ庄城と結城秀康公の福井城、二つの城の記憶と独自の食文化が息づく福井県福井市。恐竜モニュメントが迎える福井駅から、お市の方ゆかりの柴田神社、ソースカツ丼発祥のヨーロッパ軒 総本店、お堀端の森八大名閣 本店、「福の井」が残る福井城址までを辿る。',
  tags: ['福井県', '福井市', '福井駅', '福井城址', '柴田神社'],
  style_genre: 'ukiyo_e_woodblock',
  eyecatch_prompt:
    'The wooden roofed Oroka-bashi bridge and blue-green Shakudani stone walls of Fukui Castle reflected in the wide water moat under a clear sky in Fukui, no text, no people.',
  question:
    '北ノ庄城址の柴田神社と笏谷石の福井城址、元祖ソースカツ丼が息づく福井で、あなたの旅のしるしはどこにある？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '青緑色の笏谷石の石垣と御廊下橋、「福の井」が残る六十八万石の「福井城址」',
      subtext:
        '結城秀康公が築いた壮大な天守台と水堀を渡る御廊下橋を歩き、福井の地名の由来となった古井戸の歴史に触れた。',
      badge: {
        code: 'fukui_castle_shakudani_stone_walls',
        name_ja: '笏谷石の福井城を仰ぐ者',
        subtitle_en: 'Admirer of Fukui Castle Ruins',
        description:
          '福井城址を訪ね、笏谷石の石垣と御廊下橋、名水「福の井」の歴史に触れた証。',
        rarity: 4,
        visual_Prompt:
          'A circular emblem featuring a traditional roofed wooden castle bridge spanning a moat beside blue-green stone walls and an ancient stone well, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '柴田勝家公とお市の方、浅井三姉妹を祀る北ノ庄城本丸跡の「柴田神社」',
      subtext:
        '発掘された北ノ庄城の石垣と九十九橋の礎石を前に、戦国の世を気高く生き抜いた武将と姫君の絆に思いを馳せた。',
      badge: {
        code: 'fukui_shibata_shrine_kitanosho',
        name_ja: '北ノ庄の記憶を偲ぶ者',
        subtitle_en: 'Pilgrim of Kitanosho & Shibata Shrine',
        description:
          '北ノ庄城址・柴田神社を参拝し、柴田勝家公とお市の方、三姉妹ゆかりの歴史に触れた証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem depicting a wooden Shinto shrine sanctuary, historic castle foundation stones, and twin wild goose crests, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '恐竜が迎える「福井駅」と、大正二年創業「ヨーロッパ軒 総本店」の元祖「ソースカツ丼」',
      subtext:
        '恐竜王国の玄関口から街へ繰り出し、きめ細かな衣に秘伝のウスターソースが染みた伝統のカツ丼に舌鼓を打った。',
      badge: {
        code: 'fukui_europaken_sauce_katsudon',
        name_ja: '元祖ソースカツ丼を味わう者',
        subtitle_en: 'Taster of Fukui Sauce Katsudon',
        description:
          '福井駅と大正二年創業のヨーロッパ軒 総本店を巡り、福井名物「ソースカツ丼」を堪能した証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem showing thinly sliced golden pork cutlets dipped in savory brown sauce over steamed rice in a lidded bowl, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '福井城のお堀端に佇む昭和八年創業「森八大名閣 本店」の格調高い伝統銘菓',
      subtext:
        '松平家御用達の技を受け継ぐ老舗で、城下の茶の湯文化が息づく上品な和菓子と凛とした佇まいに心和んだ。',
      badge: {
        code: 'fukui_morihachi_daimyokaku_sweets',
        name_ja: 'お堀端の大名菓を愛でる者',
        subtitle_en: 'Connoisseur of Morihachi Sweets',
        description:
          '福井城お堀端の森八大名閣 本店を訪ね、越前福井の伝統和菓子文化に触れた証。',
        rarity: 3,
        visual_Prompt:
          'A circular emblem featuring seasonal Japanese confections and winter mizu-yokan arranged on lacquerware with golden iris motifs, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'fukui_complete',
    name_ja: '福井・二つの城址と伝統味の旅人',
    subtitle_en: 'Traveler of Fukui Castles & Heritage',
    description:
      '福井駅から柴田神社、ヨーロッパ軒 総本店、森八大名閣 本店、福井城址まで、福井の5つの地点をすべて巡り歩いた証。',
    rarity: 5,
    visual_Prompt:
      'Master emblem combining the roofed bridge and stone walls of Fukui Castle, the sanctuary of Shibata Shrine, a bowl of Sauce Katsudon, and traditional Japanese sweets framed in gold, no text, no letters.',
  },
  spots: [
    {
      order: 1,
      name: '福井駅',
      spot_type: '見どころ',
      address: '福井県福井市中央1丁目1-1',
      lat: 36.061914,
      lng: 136.222854,
      radius: 50,
      description:
        '北陸新幹線やハピラインふくい線などが集まる福井県の中心駅（改札は始発〜終電）。西口「恐竜広場」には実物大の動く恐竜モニュメントが並び、城下町散策の起点となっている。',
      f7_fragment:
        '西口広場に実物大の恐竜モニュメントが並び、城下町・福井へと誘う拠点駅。',
      f7_full:
        '「福井駅」の迫力ある恐竜広場と城下へと伸びる通りが、北ノ庄城と福井城の歴史を巡る旅の始まりを楽しく迎えてくれる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      image_prompt:
        'Wide shot of Fukui Station west plaza featuring life-size dinosaur sculptures against the modern station facade under a blue sky in Fukui, no text, no people.',
    },
    {
      order: 2,
      name: '柴田神社',
      spot_type: '見どころ',
      address: '福井県福井市中央1丁目21-17',
      lat: 36.06027,
      lng: 136.219659,
      radius: 35,
      description:
        '柴田勝家公が築いた北ノ庄城の本丸跡に鎮座する神社（境内参拝自由、社務所は9:00〜17:00）。勝家公とお市の方、浅井三姉妹を祀り、発掘された北ノ庄城の石垣や九十九橋の礎石が残る。',
      f7_fragment:
        '北ノ庄城の本丸跡に鎮座し、柴田勝家公とお市の方、浅井三姉妹を祀る古社。',
      f7_full:
        '「柴田神社」の静かな社殿と発掘された北ノ庄城の石垣が、戦国の世を駆け抜けた柴田勝家公とお市の方の誇り高い記憶を伝えてくれる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      image_prompt:
        'Wooden worship hall and excavated stone castle walls of Shibata Shrine at Kitanosho Castle Ruins in Fukui, no text, no people.',
    },
    {
      order: 3,
      name: 'ヨーロッパ軒 総本店',
      spot_type: '食事',
      address: '福井県福井市順化1丁目7-4',
      lat: 36.064073,
      lng: 136.214781,
      radius: 30,
      description:
        '片町・順化エリアに本店を構える大正二年創業の老舗洋食店（11:00〜19:50営業、月曜・火曜休）。薄く揚げたトンカツに秘伝のウスターソースを絡めた福井名物「ソースカツ丼」発祥の店。',
      f7_fragment:
        '大正二年の創業以来、秘伝ソースの福井名物「ソースカツ丼」を供する総本店。',
      f7_full:
        '「ヨーロッパ軒 総本店」のレトロな洋館建築と香ばしいソースカツ丼が、百年以上にわたり福井市民に愛され続けるソウルフードの味わいを届けてくれる。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      image_prompt:
        'A bowl of Fukui Sauce Katsudon with thinly sliced golden pork cutlets glazed in savory brown sauce on a wooden table in Fukui, no text, no people.',
    },
    {
      order: 4,
      name: '森八大名閣 本店',
      spot_type: '買い物',
      address: '福井県福井市大手3丁目15-9',
      lat: 36.066442,
      lng: 136.218063,
      radius: 30,
      description:
        '福井城址のお堀端に本店を構える昭和八年創業の老舗和菓子店（9:00〜18:00営業、月曜定休）。福井藩御用菓子司の流れを汲み、代表銘菓「越の雪中梅」や「御挟餅」、季節の上生菓子が揃う。',
      f7_fragment:
        '福井城のお堀端に佇み、松平家御用達の伝統を継ぐ銘菓を商う昭和八年創業の老舗。',
      f7_full:
        '「森八大名閣 本店」の端正な店構えと繊細な季節の和菓子が、越前松平家の城下町に育まれた格調高い茶の湯の文化を教えてくれる。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      image_prompt:
        'Refined storefront of Morihachi Daimyokaku facing the castle moat and an assortment of traditional Japanese confections in Fukui, no text, no people.',
    },
    {
      order: 5,
      name: '福井城址',
      spot_type: '見どころ',
      address: '福井県福井市大手3丁目17-1',
      lat: 36.065565,
      lng: 136.220879,
      radius: 45,
      description:
        '結城秀康公が築いた福井藩六十八万石の居城跡（終日散策自由）。福井特産の笏谷石で築かれた壮大な天守台と内堀、復元された屋根付きの「御廊下橋」と山里口御門、名水井戸「福の井」が残る。',
      f7_fragment:
        '笏谷石の石垣と御廊下橋、福井の地名の由来となった「福の井」が残る城址。',
      f7_full:
        '「福井城址」の内堀に映る笏谷石の石垣と優美な御廊下橋が、二つの城の歴史と食文化を巡り歩いた福井の旅を凛とした余韻で締めくくってくれる。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      image_prompt:
        'The wooden roofed Oroka-bashi bridge, reconstructed gate, and blue-green Shakudani stone walls reflected in the moat of Fukui Castle Ruins in Fukui, no text, no people.',
    },
  ],
};
