export default {
  slug: 'matsuyama',
  station_order: 648,
  station: '松山',
  line: 'JR予讃線',
  area_name: '松山・現存十二天守と大正洋館の城下町',
  prefecture: '愛媛県',
  municipality: '松山市',
  category: '歴史とグルメ',
  budget_tier: 3,
  tags: ['愛媛県', '松山市', '松山駅', '松山城', '鍋焼きうどん'],
  style_genre: 'ukiyoe_nishikie_vivid',
  title: '松山・鍋焼きうどんと松山城を歩く',
  description:
    'JR松山駅から市内電車も活用しつつ中心街へ入り、昭和24年創業の鍋焼きうどん「ことり」と安藤忠雄設計「坂の上の雲ミュージアム」、大正のフランス風洋館「萬翠荘」、「松山城二之丸史跡庭園」、現存十二天守「松山城」を巡る散策路。',
  eyecatch_prompt:
    'Vivid Ukiyo-e Nishiki-e style illustration of Matsuyama castle town in Ehime showing the majestic Matsuyama Castle keep atop green Mount Katsuyama, the French-style Mansuiso Western mansion, quiet garden pond of Ninomaru Historical Garden, and steaming aluminum pot of sweet nabeyaki udon, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '甘めの鍋焼きうどんから大正ロマン、そして現存十二天守へと登る松山を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「ことり」のレトロな店内で、アルミ鍋に入った甘めのお出汁の鍋焼きうどんを味わった瞬間',
      subtext:
        '昭和二十四年創業から変わらぬ素朴な味わいが、松山の旅の始まりを優しく温めてくれた。',
      badge: {
        code: 'matsuyama_kotori',
        name_ja: '松山・昭和創業の鍋焼きうどんを嗜みし者',
        subtitle_en: 'Taster of Matsuyama Udon',
        description:
          '鍋焼きうどん「ことり」を訪ね、アルミ鍋で供される松山のソウルフードを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic retro aluminum pot brimming with soft udon noodles, sweet beef, egg and green onion, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「坂の上の雲ミュージアム」の三角形の吹き抜け空間を歩き、明治の青春に思いを馳せた瞬間',
      subtext:
        '安藤忠雄氏の建築美と正岡子規・秋山兄弟の物語が、城下町の空気に重なり合った。',
      badge: {
        code: 'matsuyama_sakanoue',
        name_ja: '松山・坂の上の雲ミュージアムを巡りし者',
        subtitle_en: 'Visitor of Saka no Ue Museum',
        description:
          '坂の上の雲ミュージアムを訪ね、松山の偉人たちの足跡と現代建築に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a sleek triangular concrete and glass museum facade framed by lush green camphor trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「萬翠荘」のステンドグラスがきらめくフランス風洋館の階段を見上げた瞬間',
      subtext:
        '大正十一年に旧松山藩主の別邸として建てられた優美な館に、大正ロマンの気品が息づいていた。',
      badge: {
        code: 'matsuyama_bansuiso',
        name_ja: '松山・大正ロマンの洋館萬翠荘を訪ねし者',
        subtitle_en: 'Admirer of Bansuiso',
        description:
          '国重要文化財の洋館「萬翠荘」を訪ね、大正時代の優美なフランス風建築を鑑賞した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting an elegant Taisho-era French-style Western mansion facade with arched windows and stained glass glow, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「松山城」の標高132メートルの本丸天守から、瀬戸内海と松山市街を一望した瞬間',
      subtext:
        '全国に十二しか残らない現存天守の威容と城下町の眺望が、伊予の旅を誇らしく結んでくれた。',
      badge: {
        code: 'matsuyama_castle',
        name_ja: '松山・現存十二天守の松山城を登りし者',
        subtitle_en: 'Climber of Matsuyama Castle',
        description:
          '現存十二天守の一つ「松山城」の本丸天守へ登り、瀬戸内と城下の絶景を仰いだ証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing the black-and-white multi-tiered keep of Matsuyama Castle crowning steep stone ramparts against the Seto Inland Sea, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'matsuyama_complete',
    name_ja: '松山・現存天守と大正ロマンを巡る旅人',
    subtitle_en: 'Walker of Matsuyama',
    description:
      '鍋焼きうどん ことりから坂の上の雲ミュージアム、萬翠荘、二之丸史跡庭園、松山城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the black-and-white keep of Matsuyama Castle, a French-style Taisho mansion and a steaming aluminum pot of udon, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '鍋焼きうどん ことり',
      spot_type: '食事',
      description:
        '昭和24年（1949年）創業の松山名物・鍋焼きうどんの名店。メニューは鍋焼きうどんといなりすしのみ。アルミ鍋で供される甘めのお出汁と柔らかい麺が特徴。10:00〜14:00（売切終了）、水曜休。',
      address: '愛媛県松山市湊町3-7-2',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.836126,
      lng: 132.769614,
      clue: 'JR松山駅から大街道・銀天街方面へ向かい、昭和二十四年創業の鍋焼きうどんの名店「ことり」で旅を始めよう（10:00〜14:00・売切終了、水曜休）。メニューは「鍋焼きうどん」と「いなりすし」の二品のみという潔さで、年季の入ったアルミ鍋にイリコ出汁の甘みと柔らかいうどん、甘辛く炊いた牛肉が詰まっている。一口すすれば、松山っ子の心がほどける優しい味わいにこれからも温かく包まれる。',
      surprise:
        '松山の鍋焼きうどんは瀬戸内海産のいりこ出汁をベースに甘めに仕上げるのが伝統で、割れないアルミ鍋で熱々のまま運ばれるのが定番スタイル。',
      hook: '鍋焼きうどんで温まったら、北へ歩いて安藤忠雄氏設計の坂の上の雲ミュージアムへ向かおう。',
      f7_fragment: '昭和二十四年創業、アルミ鍋と甘い出汁を守る鍋焼きうどんの名店。',
      f7_full:
        '松山の「ことり」でアルミ鍋に入った伝統の甘めな鍋焼きうどんを味わい、伊予の城下町歩きを温かく始めた。',
      image_prompt:
        'Retro narrow alleyway and welcoming wooden entrance of a traditional nabeyaki udon shop in Matsuyama in vivid Ukiyo-e Nishiki-e style, warm lantern light, no text, no letters.',
    },
    {
      name: '坂の上の雲ミュージアム',
      spot_type: '見どころ',
      description:
        '司馬遼太郎『坂の上の雲』をテーマに、松山出身の秋山兄弟と正岡子規の足跡を紹介する安藤忠雄設計の文化施設。9:00〜18:30（入館18:00まで）、月曜休、一般500円。',
      address: '愛媛県松山市一番町3-20',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.841529,
      lng: 132.769094,
      clue: '湊町の商店街から北へ歩いて一番町へ抜け、建築家・安藤忠雄氏設計の「坂の上の雲ミュージアム」を訪ねよう（9:00〜18:30、月曜休、一般500円）。司馬遼太郎の小説『坂の上の雲』をテーマに、松山出身の秋山好古・真之兄弟と正岡子規の歩みを紹介する文化施設だ。柱のない空中階段が巡る三角平面の館内で、明治を見つめた青年たちの熱い志と気概にこれからもずっと心を重ねて触れたい。',
      surprise:
        '建物自体が城山の自然林を損なわないよう三角形に設計されており、全面ガラス張りのラウンジからはすぐ後ろの萬翠荘の木立を望むことができる。',
      hook: 'ミュージアムを出たら、すぐ北側の坂を上がって大正の洋館・萬翠荘を訪ねよう。',
      f7_fragment: '安藤忠雄設計の空間で、秋山兄弟と正岡子規の明治の物語に出会う館。',
      f7_full:
        '「坂の上の雲ミュージアム」の美しい吹き抜け空間を歩き、松山が生んだ明治の青年たちの情熱に触れた。',
      image_prompt:
        'Modern triangular concrete and glass museum building set among lush green camphor trees in Matsuyama in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '萬翠荘',
      spot_type: '見どころ',
      description:
        '大正11年（1922年）に旧松山藩主・久松定謨伯爵の別邸として建てられた純フランス風の洋館で国重要文化財。9:00〜18:00、月曜休、大人400円・小中高200円。',
      address: '愛媛県松山市一番町3-3-7',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.842439,
      lng: 132.768189,
      clue: 'ミュージアムのすぐ北側の坂を上がり、大正十一年建築の国重要文化財「萬翠荘」を訪ねよう（9:00〜18:00、月曜休）。純フランス風洋館の優美な空間を鑑賞したい。',
      surprise:
        '戦災を奇跡的に免れたため建築当時のシャンデリアや暖炉がそのまま残り、皇族方も訪れた大正時代の社交場の面影を今に伝えている。',
      hook: '大正ロマンに触れたら、城山南麓を西へ歩いて松山城二之丸史跡庭園へ向かおう。',
      f7_fragment: '旧松山藩主の別邸として建てられた、大正ロマン薫る国重文の洋館。',
      f7_full:
        '国重要文化財の「萬翠荘」でフランス風洋館の優美なステンドグラスを見上げ、大正ロマンの薫りに浸った。',
      image_prompt:
        'Elegant Taisho-era French-style Western mansion Bansuiso framed by hillside green trees and stone steps in Matsuyama in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '松山城二之丸史跡庭園',
      spot_type: '見どころ',
      description:
        'かつて藩主の御殿が建っていた敷地を整備した庭園。奥御殿の間取りを流水や柑橘の植栽で立体的に表現する。9:00〜17:00（8月〜17:30、12〜1月〜16:30）、12月第3水曜休、大人200円。',
      address: '愛媛県松山市丸之内5',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.842943,
      lng: 132.764381,
      clue: '城山の南麓に沿って西へ進み、かつて藩主の御殿が建っていた「松山城二之丸史跡庭園」へ立ち寄ろう（9:00〜17:00、12月第3水曜休、大人200円）。奥御殿の間取りを流水や柑橘の植栽で立体的に表現したユニークな庭園で、背後にそびえる松山城の石垣と四季の花々が美しく調和している。静かな水辺で、山頂の天守へ向けてこれからもずっと心地よく豊かに清々しく楽しくひと息整えよう。',
      surprise:
        '庭園の池はかつての大奥の部屋割りをそのまま模して造られており、発掘調査で見つかった大きな「大井戸」も当時の位置に復元されている。',
      hook: '二之丸庭園を巡ったら、勝山山頂の本丸天守・松山城へ登って旅を結ぼう。',
      f7_fragment: '藩主御殿の間取りを水と柑橘で表現した、城山麓の優美な史跡庭園。',
      f7_full:
        '「松山城二之丸史跡庭園」で御殿の間取りを模した美しい水辺を巡り、城山山頂の天守へ向けて歩みを高めた。',
      image_prompt:
        'Tranquil historical garden pond and manicured citrus trees below tall castle stone walls of Matsuyama Castle Ninomaru in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
    {
      name: '松山城（本丸・天守）',
      spot_type: '見どころ',
      description:
        '標高132mの勝山山頂にそびえる日本に12しかない現存天守の一つ。加藤嘉明が築いた連立式天守と高石垣が圧巻。9:00〜17:00（8月〜17:30、12〜1月〜16:30）、12月第3水曜休、大人520円。',
      address: '愛媛県松山市丸之内1',
      prefecture: '愛媛県',
      municipality: '松山市',
      lat: 33.845577,
      lng: 132.765535,
      clue: '二之丸から登城道（または東雲口からのロープウェイ）で標高百三十二メートルの勝山山頂へ登り、現存十二天守の一つ「松山城」で旅を締めくくろう（9:00〜17:00・季節変動あり、12月第3水曜休、大人520円）。加藤嘉明が築いた連立式天守と高石垣が圧巻で、最上階からは瀬戸内海と松山市街の絶景が三百六十度に広がる伊予の誇りだ。城下町の風景を胸にこれからも旅を清々しく結びたい。',
      surprise:
        '本丸へ通じる門や塀が幾重にも折れ曲がる「登り石垣」が全国でも珍しく現存しており、鉄壁の防御を誇った名城の知恵を間近に見られる。',
      hook: '',
      f7_fragment: '標高百三十二メートルの山頂にそびえる、日本に十二のみの現存天守。',
      f7_full:
        '現存十二天守の「松山城」本丸天守から瀬戸内海と城下町を一望し、うどんに大正洋館を巡った松山の旅を誇らしく結んだ。',
      image_prompt:
        'Majestic Matsuyama Castle multi-tiered keep atop towering stone ramparts overlooking the Seto Inland Sea at sunset in vivid Ukiyo-e Nishiki-e style, no text, no letters.',
    },
  ],
};
