export default {
  slug: 'tamatsukuri_onsen',
  station_order: 607,
  station: '玉造温泉駅',
  line: 'JR山陰本線',
  area_name: '玉造温泉・玉湯川と美肌の湯',
  prefecture: '島根県',
  municipality: '松江市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['島根県', '松江市', '玉造温泉駅', '玉作湯神社', '出雲そば'],
  style_genre: 'fountain_pen_sketchbook',
  title: '玉造温泉・湯の川と願い石の社を歩く',
  description:
    '玉造温泉駅から玉湯川に沿って南へ進み、川沿いのカフェや美肌の湯にちなんだスキンケア本店、香り高い出雲そばの老舗を経て、おしろい地蔵の清巌寺と願い石で名高い玉作湯神社へと至る、神話と湯けむりの温泉街を巡る散策路。',
  eyecatch_prompt:
    'Fountain pen and light watercolor sketchbook illustration of Tamatsukuri Onsen river walk in Shimane, arched red bridges over calm Tamayu river, willow trees, stone lantern and lush green forest shrine torii gate, crisp ink lines and gentle warm washes, no text, no people.',
  question:
    '玉湯川のせせらぎとともに玉造温泉街を歩いたあと、最初に誰かへ伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '「玉作湯神社」の緑濃い杜の奥で、丸い願い石にそっと触れて祈った瞬間',
      subtext:
        '勾玉の里として受け継がれてきた神聖な空気と、木漏れ日の清々しさが胸に残った。',
      badge: {
        code: 'tamatsukuri_tamatsukuriyu',
        name_ja: '玉作湯神社・願い石の参拝者',
        subtitle_en: 'Visitor of Tamatsukuriyu Shrine',
        description:
          '玉作湯神社を訪ね、勾玉づくりの神と温泉の恵みに感謝して願い石の前で手を合わせた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a mossy round wishing stone beside a wooden Shinto shrine hall and lush green cedar leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「出雲手打ちそば そば富」で、朱塗りの器に盛られた割子そばを味わった瞬間',
      subtext:
        '鬼皮ごと挽いた黒いそばの力強い香りとつゆの旨みが、出雲の旅情を深めてくれた。',
      badge: {
        code: 'tamatsukuri_sobatomi',
        name_ja: '出雲割子そばを味わいし者',
        subtitle_en: 'Taster of Izumo Warigo Soba',
        description:
          '出雲手打ちそば そば富を訪ね、温泉街のほとりで香り高い伝統の割子そばを楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring three stacked red lacquerware bowls of dark Izumo soba noodles with grated radish and nori, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「清巌寺」のお堂で、白粉を塗って祈りを捧げるおしろい地蔵に出会った瞬間',
      subtext:
        '美肌の湯の里ならではの愛らしく優しい信仰の姿に、思わず頬が緩む思いがした。',
      badge: {
        code: 'tamatsukuri_seiganji',
        name_ja: '清巌寺・おしろい地蔵の旅人',
        subtitle_en: 'Traveler of Seiganji Temple',
        description:
          '清巌寺を訪ね、湯の町に根付く「おしろい地蔵」の素朴で温かな祈りの文化に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a gentle stone Jizo statue in a wooden temple pavilion framed by green moss and soft morning light, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 2,
      text: '「玉造温泉美肌研究所 姫ラボ 玉造本店」で、温泉水配合の石鹸や化粧水を手に取った瞬間',
      subtext:
        '美肌の湯として親しまれる玉造の源泉を活かした品々に、土地の恵みと優しさを感じた。',
      badge: {
        code: 'tamatsukuri_himelabo',
        name_ja: '玉造美肌・姫ラボの旅人',
        subtitle_en: 'Traveler of Tamatsukuri Himelabo',
        description:
          '玉造温泉美肌研究所 姫ラボ 玉造本店を訪ね、美肌の湯の源泉を活かした手仕事に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting handmade pastel facial soap bars, natural glass lotion bottles, and camellia flowers on a wooden shelf, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'tamatsukuri_onsen_complete',
    name_ja: '玉造温泉・湯の川と神話の物語を歩みし者',
    subtitle_en: 'Walker of Tamatsukuri Onsen',
    description:
      'mame cafeから姫ラボ 玉造本店、そば富、清巌寺、玉作湯神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining an arched red hot-spring bridge over a river, a round wishing stone, and a stone lantern, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'mame cafe',
      spot_type: '休憩',
      description:
        '玉造アートボックスの2階にある川沿いのカフェ。玉湯川を眺めながら淹れたての珈琲や季節のスイーツで寛げる。営業時間10:00〜17:00、木曜定休。',
      address: '島根県松江市玉湯町玉造1241 玉造アートボックス2F',
      prefecture: '島根県',
      city: '松江市',
      lat: 35.419351,
      lng: 133.008868,
      clue: '玉造温泉駅から玉湯川に沿って南へ歩き、温泉街の入口に建つ玉造アートボックス二階の「mame cafe」へ立ち寄ろう（10:00〜17:00、木曜定休）。川面を見下ろす明るい窓辺の席では、丁寧に淹れられた珈琲や季節のスイーツが旅人を優しく迎えてくれる。これから温泉街の老舗や古社を巡る前に、穏やかな川風を感じながら足をそっと休めて、心地よい一日の散策リズムをゆっくり整えておきたい。',
      surprise:
        '大きな窓越しに見渡す玉湯川の四季と、浴衣姿の旅人が行き交う温泉街の風景が、まるで一幅の絵のように切り取られる。気負わずに過ごせる柔らかな空間と淹れたて珈琲の香りが、これから始まる玉造の温泉旅を心地よく豊かに彩ってくれるのがとても嬉しいところだ。',
      hook: 'カフェを出て玉湯川沿いに南へ徒歩5分の姫ラボ 玉造本店へ向かおう。',
      f7_fragment: '玉湯川を見下ろす二階の窓辺で過ごす、穏やかで香ばしい珈琲時間。',
      f7_full: '玉造温泉街の「mame cafe」で玉湯川を眺めながら淹れたての珈琲を味わい、温泉街歩きの序章をゆったりと始めた。',
      image_prompt:
        'Sunlit second-floor cafe window overlooking a willow-lined Japanese hot spring river with a coffee cup and cake on a wooden table, no text, no people.',
    },
    {
      name: '玉造温泉美肌研究所 姫ラボ 玉造本店',
      spot_type: '買い物',
      description:
        '美肌の湯として知られる玉造温泉の源泉を配合した石鹸や化粧水などを扱うスキンケア専門店。営業時間9:00〜18:00、年中無休。',
      address: '島根県松江市玉湯町玉造1213',
      prefecture: '島根県',
      city: '松江市',
      lat: 35.416728,
      lng: 133.009303,
      clue: 'mame cafeから南へ徒歩5分、玉湯川沿いに佇む「玉造温泉美肌研究所 姫ラボ 玉造本店」へ（9:00〜18:00、年中無休）。玉造の源泉を配合した石鹸や化粧水に触れよう。',
      surprise:
        '古くから美肌の湯として親しまれてきた玉造温泉の源泉そのものをスキンケアに活かす発想がユニークで興味深い。店内では石鹸のきめ細かな泡立ちを実際に試せる手洗い場もあり、温泉街ならではの恵みを五感で体感できるのが実に大きな魅力といえる。',
      hook: '姫ラボの次は、南南西へ徒歩2分の出雲手打ちそば そば富へ向かおう。',
      f7_fragment: '美肌の湯の恵みを暮らしへ持ち帰る、玉造温泉街の本店ショップ。',
      f7_full: '「玉造温泉美肌研究所 姫ラボ 玉造本店」を訪ね、美肌の湯の温泉水を活かした石鹸や化粧水の優しさにじっくり触れた。',
      image_prompt:
        'Warm Japanese hot-spring skincare boutique counter displaying pastel handmade soap bars, natural lotion bottles and soft towels, no text, no people.',
    },
    {
      name: '出雲手打ちそば そば富',
      spot_type: '食事',
      description:
        '鬼皮ごと挽いたそば粉を手打ちする出雲そばの名店。三段の朱塗り器で味わう割子そばが人気。営業時間11:00〜14:00・17:00〜22:00（L.O.21:30）、火曜・第1・3月曜定休。',
      address: '島根県松江市玉湯町玉造1197-7',
      prefecture: '島根県',
      city: '松江市',
      lat: 35.415812,
      lng: 133.008842,
      clue: '姫ラボから川沿いの遊歩道をさらに南南西へ徒歩2分、温泉旅館が並ぶ通りの一角に「出雲手打ちそば そば富」が見えてくる（11:00〜14:00・17:00〜22:00、火曜・第1・3月曜定休）。鬼皮ごと挽いたそば粉を手打ちする名物「割子そば」は、朱塗りの丸い器に盛られた三段のそばへ、薬味と濃いめのつゆを直接かけて味わう出雲ならではの流儀だ。黒っぽい麺から立ち昇る力強い穀物の香りが、出雲へ来た実感を教えてくれる。',
      surprise:
        '三段の器に残ったつゆを次の段へ移しながら食べ進める割子の作法には、無駄を出さない暮らしの知恵が息づく。玉湯川のせせらぎを耳にしながら味わう香り高い手打ちそばが、出雲の旅情と土地への愛着をいっそう深く、そして心地よく育んでくれるに違いないはずだ。',
      hook: 'そば富でお腹を満たしたら、南南東へ徒歩7分の清巌寺を訪ねよう。',
      f7_fragment: '朱塗りの三段器で味わう、香り豊かな出雲伝統の割子そばの逸品。',
      f7_full: '「出雲手打ちそば そば富」で香り高い伝統の割子そばを味わい、出雲に根付く食文化の奥深さに心からゆったり触れた。',
      image_prompt:
        'Three-tiered red lacquerware bowls of dark Izumo warigo soba noodles with grated radish, green onion and dipping sauce on a wooden table, no text, no people.',
    },
    {
      name: '清巌寺',
      spot_type: '見どころ',
      description:
        '美肌にご利益があると親しまれる「おしろい地蔵」を祀る寺院。参拝者がお地蔵様に白粉を塗って祈願する風習が伝わる。参拝時間夜明け〜日没、無休。',
      address: '島根県松江市玉湯町玉造530',
      prefecture: '島根県',
      city: '松江市',
      lat: 35.412651,
      lng: 133.011245,
      clue: 'そば富から南南東へ徒歩7分、温泉街の静かな路地を入った先に、優しい表情の石仏が迎えてくれる「清巌寺」がある（夜明け〜日没、無休）。境内のお堂に祀られているのは、美肌にご利益があると親しまれる「おしろい地蔵」だ。参拝者はお札に願い事を記し、お地蔵様の顔や気になる箇所と同じ部分に白粉をそっと塗って祈りを捧げる。古くから美肌の湯として知られてきた玉造ならではの風習に触れてみよう。',
      surprise:
        '温泉の湯に浸かるだけでなく、お地蔵様にも白粉を差し上げて美しさを願うという発想がなんとも微笑ましい。境内に満ちる穏やかな空気に触れると、外見だけでなく心まで澄んでいくような清らかな気持ちに自然と包まれていくのが誰の目にもはっきりとよくわかる。',
      hook: '清巌寺を出たら、北北東へ徒歩2分の玉作湯神社で旅を結ぼう。',
      f7_fragment: '美肌の湯の里で素朴な祈りを託す、おしろい地蔵の優しき面持ち。',
      f7_full: '「清巌寺」を訪ね、美肌の湯の里ならではの「おしろい地蔵」に白粉を添える温かな祈りの文化に心から深く静かに触れた。',
      image_prompt:
        'Quiet Japanese temple courtyard with a gentle stone Jizo statue inside a small wooden pavilion, soft morning light and mossy stones, no text, no people.',
    },
    {
      name: '玉作湯神社',
      spot_type: '見どころ',
      description:
        '勾玉づくりの神と温泉の神を祀る古社。本殿裏手に鎮まる丸い「願い石」に「叶い石」を当てて祈る風習で知られる。境内自由（社務所は平日9:00〜12:00・13:00〜17:00、土日祝8:30〜17:00）、無休。',
      address: '島根県松江市玉湯町玉造508',
      prefecture: '島根県',
      city: '松江市',
      lat: 35.413682,
      lng: 133.011666,
      clue: '清巌寺から北北東へ徒歩2分、青々とした木々に包まれた石段の先には、勾玉と温泉の神を祀る「玉作湯神社」が鎮座している（境内自由・無休）。手水舎で清めて拝殿の奥へ進むと、触れて祈ると願いが叶うと言い伝えられてきた丸い「願い石」が静かに佇む。社務所で授かる「叶い石」を願い石にそっと当ててお祈りし、お守り袋へ収める体験は忘れがたい儀式だ。緑の杜の深呼吸とともに、玉造の旅を結ぼう。',
      surprise:
        '古くから勾玉の産地として栄えた花仙山の麓で、石と湯を敬い続けてきた人々の精神性がそのまま境内に息づいている。木漏れ日の下で静かに耳を澄ませば、玉湯川のせせらぎと木々のそよぎが遠く優しく響き、歩く者の心がすっと清らかにどこまでも澄み渡っていく。',
      hook: '',
      f7_fragment: '勾玉の杜に静かに鎮まる願い石、出雲の旅を結ぶ清らかな祈りの場。',
      f7_full: '「玉作湯神社」の静かな杜に詣で、願い石の前で手を合わせて玉造温泉の旅を清らかに、そして美しく堂々と締めくくった。',
      image_prompt:
        'Sacred Shinto shrine nestled in lush green forest with moss-covered stone steps, torii gate and round wishing stone beside a wooden hall, no text, no people.',
    },
  ],
};
