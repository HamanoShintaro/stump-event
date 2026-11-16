// scripts/areas/chihoku.mjs
// station_order: 881

export default {
  slug: 'chihoku',
  station_order: 881,
  station: '智北',
  line: 'JR宗谷本線',
  area_name: '智北・三日月湖のヒブナと天塩川治水史',
  prefecture: '北海道',
  municipality: '名寄市',
  category: '河跡湖と天塩川史跡',
  budget_tier: 2,
  tags: ['北海道', '名寄市', '智北駅', '智恵文沼', 'ドミール302'],
  style_genre: 'ink_and_watercolor',
  title: '智北・三日月湖の智恵文沼と天塩川難所の碑へ',
  description:
    '昭和三十四年仮乗降場として生まれた「JR智北駅」から、昭和十四年治水工事で生まれた河跡湖「智恵文沼」、大河を望む「天智橋」、天塩川最大の難所を伝える「スーポロ・川舟安全祈願碑」、名寄市街の老舗洋食喫茶「ドミール302」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Chihoku rural railway stop, crescent-shaped oxbow lake reflecting northern sky, steel bridge over wide Teshio River, stone river safety memorial, and classic Japanese kissaten cafe plate, full bleed, no text, no letters.',
  question: '天塩川の治水と舟運の歴史が息づく智北の駅から智恵文沼や難所の碑、老舗洋食喫茶を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '昭和十四年の天塩川流路切替工事で生まれた三日月湖「智恵文沼」',
      subtext: 'アイヌ語「魚の入る沼」に由来し、ヒブナが棲む静かな湖面に心が和んだ。',
      badge: {
        code: 'chihoku_numa',
        name_ja: '智北・ヒブナ棲む三日月湖',
        subtitle_en: 'Oxbow Lake Viewer of Chiebun',
        description: '天塩川の流路切替で生まれた河跡湖・智恵文沼を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a serene crescent-shaped oxbow lake bordered by green reeds and distant birch trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '天塩川と智恵文の頭文字を合わせ、大河の治水を見渡す「天智橋」',
      subtext: '北海道を北へ流れる大河・天塩川の雄大な水面に、開拓の労苦を思った。',
      badge: {
        code: 'chihoku_tenchibashi',
        name_ja: '智北・天塩大河の橋守',
        subtitle_en: 'Teshio River Bridge Walker',
        description: '天塩川と智恵文の名を冠した天智橋から大河を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a scenic bridge arching over a wide calm northern river reflecting drifting clouds, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '激流の難所で舟運安全と慰霊を祈り明治建立された「スーポロ・川舟安全祈願碑」',
      subtext: '川舟で物資を運んだ明治の激流の歴史を刻む碑の前に立ち、深く頭が下がった。',
      badge: {
        code: 'chihoku_suporo',
        name_ja: '智北・激流スーポロの証',
        subtitle_en: 'River Safety Witness of Suporo',
        description: '明治四十三年建立のスーポロ・川舟安全祈願碑を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a weathered stone river-navigation safety monument standing above swirling river currents, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '三百種以上のメニューと満腹定食で愛される名寄の老舗「ドミール302」',
      subtext: '昭和の喫茶文化を感じる豊富なメニューと温かい洋食に、お腹も心も満たされた。',
      badge: {
        code: 'chihoku_domiru',
        name_ja: '智北・三百選の洋食喫茶',
        subtitle_en: 'Classic Diner Guest of Domiru 302',
        description: '名寄市街の老舗洋食喫茶 ドミール302で温かい食事を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a classic Japanese yoshoku cafe plate with golden omelette, crispy shrimp fry, and hot coffee, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'chihoku_master',
    name_ja: '智北・天塩川治水と洋食喫茶巡り',
    subtitle_en: 'Chihoku River History & Cafe Master',
    description: 'JR智北駅から智恵文沼、天智橋、スーポロ川舟安全祈願碑、ドミール302までを巡った証',
    image_prompt:
      'A circular emblem combining crescent oxbow lake, steel river bridge, carved stone monument and classic yoshoku cafe plate, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR智北駅',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '1959年（昭和34年）11月、住民要望と智恵文沼の観光開発を見込んで「智北仮乗降場」として開設（終日開放・無料）。1987年旅客駅昇格、1991年道道拡幅に伴い約120m移設。',
      address: '北海道名寄市字智恵文智北1',
      lat: 44.461307,
      lng: 142.395561,
      clue:
        '昭和三十四年、地域の熱い要望と智恵文沼の観光開発への期待を込めて仮乗降場として開設された「JR智北駅」から散策を始めよう（終日利用可）。平成三年に道路拡幅のため約百二十メートル移設された素朴な無人駅の小さな木造風ホームを後にしたら、まずは歩いて三十五分ほど、美しい三日月湖の穏やかな水面が待っている美しい景勝地「智恵文沼（ちえぶん沼パーク）」を目指してのんびりと歩き出そう。',
      surprise: '智恵文沼の観光開発を願って住民要望で誕生したという駅の歴史が、小さなホームを特別に見せてくれた。',
      hook: 'JR智北駅を出たら、三日月湖の「智恵文沼（ひぶなの里 ちえぶん沼パーク）」へ向かおう。',
      f7_fragment: '昭和三十四年開設、智恵文沼への玄関口として住民要望で生まれた無人駅。',
      f7_full: '「JR智北駅」に降り立ち、三日月湖と天塩川舟運の歴史を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Chihoku Station modest wooden rural railway stop nestled beside northern meadowland, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '智恵文沼（ひぶなの里 ちえぶん沼パーク）',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '1939年（昭和14年）の天塩川流路切替工事で生まれた半月形の河跡湖（終日散策自由・無料）。アイヌ語「チェプ・ウン・トウ（魚の入る沼）」に由来し、ヒブナが生息する。',
      address: '北海道名寄市字智恵文11線',
      lat: 44.436948,
      lng: 142.403592,
      clue:
        '「智恵文沼」の湖畔を歩こう（終日開放）。昭和十四年の天塩川切替工事で生まれた河跡湖で、アイヌ語の「魚の入る沼」が由来だ。続いて大河を望む「天智橋」へ。',
      surprise: '昭和十四年の天塩川治水工事によって誕生した三日月湖の穏やかな水面に、時を超えた自然の調和を感じた。',
      hook: '智恵文沼の湖畔を歩いたら、天塩川に架かる「天智橋」へ向かおう。',
      f7_fragment: '昭和十四年の天塩川流路切替工事で生まれ、ヒブナが棲む半月形の河跡湖。',
      f7_full: '「智恵文沼」の静かな湖畔に立ち、治水工事とアイヌ語地名が伝える歴史に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Chiebun Oxbow Lake calm reflective water framed by lush green shoreline grasses and white birches, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '天智橋（天塩川河川景観）',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '「天塩川」と「智恵文」の頭文字を合わせて名付けられた道道252号の橋（通行自由・無料）。治水と開拓の歴史を刻む大河・天塩川の雄大な河川景観を一望できる。',
      address: '北海道名寄市字智恵文252',
      lat: 44.449035,
      lng: 142.408984,
      clue:
        '天塩川と智恵文の頭文字を合わせて名付けられた「天智橋」の上から、北海道を北へと流れる大河・天塩川の雄大な河川景観を一望しよう（通行自由・無料）。かつて開拓物資を載せた川舟が行き交い、先人たちが洪水との闘いを重ねて治水を成し遂げてきた大河の悠々たる流れは実に堂々としている。大河の大きな力を肌でしっかり感じたら、智東エリアの「スーポロ・川舟安全祈願碑」へとゆっくり向かおう。',
      surprise: '天塩川と智恵文の名を冠した橋の上から見渡す大河のスケールに、道北の自然の大きさを実感した。',
      hook: '天智橋を渡ったら、天塩川沿いの「スーポロ・川舟安全祈願碑」へ向かおう。',
      f7_fragment: '天塩川と智恵文の名を冠し、治水と舟運の大河を一望する景勝の橋。',
      f7_full: '「天智橋」から大河・天塩川の流れを望み、開拓を支えた川の大きさに圧倒された。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tenchibashi Bridge spanning wide serene Teshio River surrounded by lush northern floodplains, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'スーポロ・川舟安全祈願碑',
      prefecture: '北海道',
      city: '名寄市',
      description:
        'アイヌ語で「スーポロ（激流の所）」と呼ばれた天塩川最大の難所で、水難事故の犠牲者慰霊と舟運安全を祈願して明治43年（1910年）に建立された金毘羅大権現の碑（見学自由・無料）。',
      address: '北海道名寄市字智恵文智東1',
      lat: 44.357599,
      lng: 142.443947,
      clue:
        'かつてアイヌ語で「スーポロ（激流の所）」と呼ばれた天塩川最大の難所に立つ「スーポロ・川舟安全祈願碑」を訪ねよう（見学自由・無料）。鉄道開通前の時代、川舟で命がけの物資輸送を担った人々を慰霊し航行安全を祈って明治四十三年に建立された金毘羅大権現の碑が、今も歴史を静かに物語っている。静かに手を合わせて感謝を捧げたら、名寄市街の老舗洋食喫茶「ドミール302」へとゆっくり向かおう。',
      surprise: '激流「スーポロ」を越えて物資を運んだ明治の川舟の記憶が、百年以上前の石碑にしっかりと息づいていた。',
      hook: 'スーポロ・川舟安全祈願碑を見学したら、名寄市街の老舗「ドミール302」へ向かおう。',
      f7_fragment: '天塩川最大の難所「スーポロ」で舟運安全を祈り明治四十三年に建立された碑。',
      f7_full: '「スーポロ・川舟安全祈願碑」の前に立ち、天塩川舟運に命を懸けた先人を偲んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Suporo River Safety Monument stone stele perched along forested bluffs above swift Teshio River bends, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'ドミール302',
      prefecture: '北海道',
      city: '名寄市',
      description:
        '300種以上の豊富なメニューとボリューム満点の定食で長年愛される名寄市街の老舗喫茶・食事処。10:00〜21:30（食事は11:30〜）、水曜・木曜休（不定休あり要確認）。定食・洋食800〜1,300円前後。',
      address: '北海道名寄市西3条南2丁目17-2',
      lat: 44.354368,
      lng: 142.458233,
      clue:
        '旅の締めくくりは、列車やバスで名寄市街へ移動し、名寄駅から徒歩五分の老舗喫茶・食事処「ドミール302」でほっと一息ついて寛ごう（10:00〜21:30、水木休）。三百種類を超える驚きのメニューと、ボリューム満点の定食や懐かしい洋食が昭和の喫茶文化を今に伝え、旅人の胃袋を温かく満たしてくれる。心ゆくまで名物の一皿をじっくりと味わい、智北の楽しい旅を穏やかに締めくくろう。',
      surprise: '三百種以上という圧巻のメニュー数と、老舗喫茶ならではの温かくボリュームある一皿に大満足だった。',
      hook: '',
      f7_fragment: '三百種以上のメニューと満腹定食で長年親しまれる名寄市街の老舗喫茶。',
      f7_full: '「ドミール302」で懐かしい洋食と昭和喫茶の温もりを味わい、智北の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Domiru 302 retro Japanese kissaten diner table with hearty yoshoku cutlet platter and steaming coffee, no text, no letters.',
    },
  ],
};
