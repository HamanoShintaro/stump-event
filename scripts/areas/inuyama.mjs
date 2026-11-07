const s1_clue =
  '名鉄犬山駅西口から本町通りを抜け、北北西へ徒歩15分、木曽川南岸の断崖の上に白漆喰の「犬山城」天守がそびえる（9:00〜17:00開城、12/29〜31のみ休館）。自然石を積み上げた野面積みの石垣と急勾配の木階段を一歩ずつ登り、最上階の廻縁へ出てみよう。心地よい川風に吹かれながら、眼下にうねる木曽川の碧い流れと、城山から南へ真っ直ぐ延びる城下町の本町通りを一望できる。';
const s1_surprise =
  '天文六年に織田信長の叔父・織田信康が築き、成瀬正成公以来九代が城主を務めた現存最古級の国宝天守だ。断崖絶壁を背にした「後堅固（うしろけんご）の城」であり、荻生徂徠が李白の詩になぞらえて「白帝城」と讃えた風光が今も変わらない。';
const s1_hook =
  '天守最上階から木曽川と城下町を見渡したら、南へ徒歩9分の古民家で尾張の発酵料理を味わおう。';

const s2_clue =
  '犬山城から本町通りを南へ徒歩9分、通りの西側に重厚な黒格子と白暖簾を構えた「香味茶寮 壽俵屋 犬山井上邸」が現れる（10:00〜16:30営業、無休）。築百四十余年の商家建築へ入り、熟成酒粕に漬け込んだ銀だらや鮭の粕漬け御膳、店頭の炭火で香ばしく炙る名物「醤油おこげ串（守口漬添え）」を注文しよう。太い梁が渡る落ち着いた座敷で、芳醇な酒粕と焦がし醤油の香りをゆっくり堪能したい。';
const s2_surprise =
  '木曽川流域の砂地で育つ細長い守口大根を、酒粕と味醂粕で二年半以上漬け込む愛知の伝統名産「守口漬」の老舗が営む茶寮だ。長い歳月をかけて発酵・熟成させる醸造の知恵が、魚や米の旨味を奥深く引き出している。';
const s2_hook =
  '粕漬け御膳と醤油おこげ串で昼食を楽しんだら、南へ徒歩1分の町家茶寮でひと休みしよう。';

const s3_clue =
  '壽俵屋 犬山井上邸から南へ徒歩1分、黒塗りの格子戸の奥に「本町茶寮」がある（11:00〜17:00営業、木曜定休）。苔むした坪庭を望む座敷で、七色の味噌だれが彩る豆腐田楽と温かな日本茶を味わおう。';
const s3_surprise =
  '間口が狭く奥へ細長い「うなぎの寝床」と呼ばれる城下町の町家構造をそのまま活かした一軒だ。赤味噌だけでなく、ゆず味噌や山椒味噌、抹茶など七種の彩りだれが、通りの喧騒を忘れる静かな座敷の時間を彩ってくれる。';
const s3_hook =
  '坪庭を眺めながら田楽と日本茶でひと息ついたら、南へ徒歩4分の展示館で犬山祭の車山を見上げよう。';

const s4_clue =
  '本町茶寮から本町通りを南へ徒歩4分、白壁と黒板塀の大きな町家風建築「どんでん館」に到着する（9:00〜17:00開館、水曜定休）。吹き抜けの展示ホールへ入り、黒漆と金箔が輝く高さ八メートルの三層構造の車山（やま）四基と、上層に乗る精巧なからくり人形を間近に見上げよう。夜間巡行さながらに百八個もの提灯が華やかに灯る演出のなかで、祭礼の熱気と職人の彫金技を細部まで確かめられる。';
const s4_surprise =
  '寛永十二年から続く犬山祭で曳き回される本物の車山を展示する施設だ。重さ数トンの車山の一方を担ぎ上げて直角に方向転換する豪快な「どんでん」と、糸だけで複雑な所作を演じるからくり人形に、城下町の町人文化の粋が宿る。';
const s4_hook =
  '三層の車山とからくり人形の技を体感したら、東北東へ徒歩2分の老舗菓子舗へ立ち寄ろう。';

const s5_clue =
  'どんでん館から東北東へ徒歩2分、駅へ続く通り沿いに明治期創業の「藤澤製菓」が店を構える（9:00〜18:00営業、不定休）。昔ながらのガラスケースに並ぶ犬山銘菓「げんこつ飴」を手に取り、きな粉と黒砂糖、ニッキや黒ごまを練り込んだ素朴な箱詰めを見比べてみよう。城下町の老舗が代々守り続けてきた手づくりの香ばしい飴菓子を旅の土産に選び、そのまま東へ歩いて名鉄犬山駅へ心地よく戻ろう。';
const s5_surprise =
  '初代犬山城主・成瀬正成公の陣中食に由来すると伝わる犬山伝統の飴菓子だ。黒砂糖と水あめを煮詰めた生地に香ばしいきな粉を練り込み、職人が手作業で素朴なげんこつの形に切り分ける昔ながらの製法が今も息づく。';
const s5_hook = '';

export const area = {
  slug: 'inuyama',
  station_order: 253,
  line: '名鉄犬山線',
  station: '犬山',
  area_name: '犬山城・本町通り',
  prefecture: '愛知県',
  Stop_name: '犬山駅',
  title: '断崖の国宝天守から木曽川の城下町を歩く',
  description:
    '木曽川の断崖に立つ国宝・犬山城から黒塗りの町家が連なる本町通りへ。天守の眺望から守口漬の発酵料理、坪庭の町家茶寮、三層の車山が並ぶどんでん館、老舗のげんこつ飴まで城下町を縦断するルート。',
  category: '国宝天守・城下町・からくり文化',
  budget_tier: 2,
  subtitle: '白帝城の断崖から本町通りへ、発酵料理と車山・げんこつ飴をたどる',
  area_tag: '愛知県犬山市',
  time_minutes: 95,
  distance_km: 1.2,
  duration_min: 95,
  tags: ['犬山城', '城下町', '守口漬', '犬山祭', 'げんこつ飴'],
  eyecatch_prompt:
    'An atmospheric street-level view of Inuyama Honmachi-dori lined with dark wooden latticework machiya townhouses, clay-tiled roofs with ornamental end-tiles, and stone-paved street stretching into the distance under warm sunlight, rendered in Owari Karakuri Woodblock and Kiso-gawa Indigo-Ochre style. Soft organic vignette edges on cream Washi paper (#F7F2E6). No castle keep, no festival float, no people, no text, no letters, no numbers, no borders.',
  completion_badge: {
    code: 'INUYAMA_CORE',
    name_ja: '白帝城の断崖と本町通りのしるし',
    subtitle_en: 'Walker of Castle Cliff and Machiya Street',
    description:
      '犬山城から壽俵屋 犬山井上邸、本町茶寮、どんでん館、藤澤製菓まで、天守と城下町の町人文化をたどった証。',
    image_prompt:
      'Woodblock crest of a white castle keep on a river cliff, dark machiya latticework, and golden lanterns on cream washi paper. No text.',
  },
  question:
    '断崖の国宝天守から古い町家の発酵料理、祭りの三層車山まで、あなたの五感を強く惹きつけるのはどの体験だろうか？',
  choices: [
    {
      key: 'A',
      text: '急な木階段を登り切った国宝天守の廻縁から、眼下の木曽川と本町通りを見渡した瞬間',
      description: '現存最古級の天守・犬山城が持つ実戦的な構造と、圧倒的な眺望に心を奪われた。',
      badge: {
        code: 'INUYAMA_A',
        name_ja: '白帝城の風を聴く登城者',
        subtitle_en: 'Climber of the White Emperor Keep',
        description: '国宝犬山城の廻縁から木曽川と城下町の縄張りを見渡した者に贈られる称号。',
        rarity: 4,
        image_prompt:
          'Woodblock emblem of a white castle keep atop a cliff above deep blue river waves. No text.',
      },
    },
    {
      key: 'B',
      text: '築百年を超える町家の座敷で、酒粕が香る守口漬や彩り豊かな七種田楽を味わった時間',
      description: '壽俵屋 犬山井上邸や本町茶寮で、尾張の醸造・発酵文化の奥深さに触れた。',
      badge: {
        code: 'INUYAMA_B',
        name_ja: '尾張の醸造香を味わう食客',
        subtitle_en: 'Taster of Owari Fermented Delicacies',
        description: '守口漬の粕漬け料理と七種味噌田楽に城下町の食の知恵を見いだした者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Woodblock emblem of grilled rice skewers on a charcoal brazier and colorful miso dengaku sticks. No text.',
      },
    },
    {
      key: 'C',
      text: '黒漆と金箔が輝く高さ八メートルの三層車山と、精巧なからくり人形の技を見上げた場面',
      description: 'どんでん館で、町人たちが誇りを懸けて磨き上げた犬山祭の造形美に惹かれた。',
      badge: {
        code: 'INUYAMA_C',
        name_ja: '三層車山の彫金を仰ぐ旅人',
        subtitle_en: 'Admirer of Three-Tiered Festival Floats',
        description: '犬山祭の車山とからくり人形に宿る町人文化の粋に触れた者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Woodblock emblem of a three-tiered festival float with gold carvings and white paper lanterns. No text.',
      },
    },
    {
      key: 'D',
      text: 'きな粉と黒糖を練り上げた素朴な「げんこつ飴」を手に、城下町の老舗の伝統に触れたとき',
      description: '藤澤製菓が守り続ける陣中食ゆかりの銘菓に、素朴で温かな城下町の記憶を重ねた。',
      badge: {
        code: 'INUYAMA_D',
        name_ja: '陣中銘菓の素朴さを愛する人',
        subtitle_en: 'Lover of Traditional Genkotsu Candy',
        description: '明治期から受け継がれる手づくりのげんこつ飴の味わいを持ち帰った者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Woodblock emblem of golden kinako-dusted candy cubes in a wooden tray with wrapped boxes. No text.',
      },
    },
  ],
  spots: [
    {
      name: '犬山城',
      spot_type: '見どころ',
      address: '愛知県犬山市犬山北古券65-2',
      lat: 35.38836,
      lng: 136.939177,
      radius_m: 50,
      order: 1,
      description:
        '木曽川南岸の断崖にそびえる現存最古級の国宝天守（9:00〜17:00開城、最終入場16:30、12/29〜31休館）。三層四階地下二階の望楼型天守の最上階廻縁から、木曽川と城下町を一望できる。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      f7_fragment: '木曽川の断崖に白漆喰の破風を重ねる、現存最古級の国宝天守。',
      f7_full:
        '最上階の廻縁を吹き抜ける川風のなかで、城山の足元から真っ直ぐ南へ延びる城下町の骨格が浮かび上がる。',
      image_prompt:
        'The National Treasure Inuyama Castle keep with its white plaster walls and curved gables perched atop a sheer rocky cliff above the deep blue Kiso River surrounded by pine trees, Owari Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '香味茶寮 壽俵屋 犬山井上邸',
      spot_type: '食事',
      address: '愛知県犬山市犬山西古券6',
      lat: 35.383617,
      lng: 136.939371,
      radius_m: 50,
      order: 2,
      description:
        '守口漬・奈良漬の老舗「壽俵屋」が築百四十余年の古民家で営むお食事処（10:00〜16:30営業、無休）。熟成酒粕に漬けた魚の粕漬け御膳や、炭火で焼く名物「醤油おこげ串」を味わえる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      f7_fragment: '築百四十余年の商家に漂う、熟成酒粕と焦がし醤油おこげの香り。',
      f7_full:
        '二年半以上熟成させた守口漬と香ばしい粕漬けの魚が、木曽川流域の豊かな醸造文化を伝えてくれる。',
      image_prompt:
        'Three skewers of round golden-brown grilled rice balls glazed with soy sauce and topped with slices of amber pickled radish over a glowing charcoal shichirin brazier on a dark wooden counter, Owari Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '本町茶寮',
      spot_type: '休憩',
      address: '愛知県犬山市犬山東古券673',
      lat: 35.383088,
      lng: 136.939473,
      radius_m: 50,
      order: 3,
      description:
        '本町通りの中央に佇む築百年の古民家茶寮（11:00〜17:00営業、木曜定休）。奥行きのある町家の座敷から苔むした坪庭を眺めつつ、七種の味噌だれで彩られた豆腐田楽や和甘味を楽しめる。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      f7_fragment: '青竹と石灯籠の坪庭を望む座敷で味わう、七色の彩り豆腐田楽。',
      f7_full:
        'うなぎの寝床の奥座敷に座り、色とりどりの味噌田楽と温かなお茶で城下町歩きの足を休める。',
      image_prompt:
        'A lacquered tray holding colorful miso-glazed tofu dengaku skewers, small condiment bowls, and a ceramic teacup beside an open shoji window overlooking a mossy bamboo courtyard garden with a stone lantern, Owari Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: 'どんでん館',
      spot_type: '見どころ',
      address: '愛知県犬山市犬山東古券62',
      lat: 35.381141,
      lng: 136.939559,
      radius_m: 50,
      order: 4,
      description:
        '国の重要無形民俗文化財「犬山祭」で曳かれる高さ約8mの三層車山（やま）4基を常設展示する施設（9:00〜17:00開館、水曜定休）。金箔と黒漆の豪華な装飾や精巧なからくり人形を間近に見学できる。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      f7_fragment: '吹き抜けの空間にそびえる、黒漆と金箔が輝く高さ八メートルの三層車山。',
      f7_full:
        '城下町の町人たちが誇りを懸けた車山の彫金とからくり人形の技が、祭りの熱気を今に伝える。',
      image_prompt:
        'A magnificent three-tiered wooden festival float (Yama) adorned with gold-leaf carvings, vermilion lacquer railings, and white paper lanterns inside a high-ceilinged timber hall, Owari Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No people, no text, no borders.',
    },
    {
      name: '藤澤製菓',
      spot_type: '買い物',
      address: '愛知県犬山市犬山東古券161',
      lat: 35.38152,
      lng: 136.940609,
      radius_m: 50,
      order: 5,
      description:
        '明治期から犬山銘菓「げんこつ飴」を手作りで製造・直売する老舗和菓子店（9:00〜18:00営業、不定休）。黒砂糖と水あめに香ばしいきな粉やニッキを練り込んだ伝統のげんこつ飴をお土産に購入できる。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      f7_fragment: 'きな粉と黒糖、ニッキの香りが広がる、明治期創業のげんこつ飴本店。',
      f7_full:
        '初代城主の陣中食に由来する素朴な飴菓子を箱詰めで手に取り、城下町を歩いた温かな記憶を持ち帰る。',
      image_prompt:
        'Rustic hand-cut cubes of Inuyama Genkotsu-ame candy dusted with golden roasted soybean flour and black sesame seeds arranged in a wooden tray alongside neatly wrapped Japanese paper souvenir boxes, Owari Woodblock style, soft organic vignette on cream Washi paper (#F7F2E6). No castle in background, no people, no text, no borders.',
    },
  ],
};

export default area;
