export default {
  slug: 'shinjo',
  station_order: 616,
  station: '新庄駅',
  line: 'JR奥羽本線・山形新幹線・陸羽東線',
  area_name: '新庄・もがみの食と城址の街',
  prefecture: '山形県',
  municipality: '新庄市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['山形県', '新庄市', '新庄駅', 'とりもつラーメン', '最上公園'],
  style_genre: 'nihonga_mineral_gold',
  title: '新庄・とりもつラーメンと城址の街を歩く',
  description:
    '山形新幹線の終着駅であるJR新庄駅から併設のもがみ物産館に立ち寄り、新庄名物とりもつラーメンの人気店と万場町の古民家カフェを巡り、新庄まつりの山車が並ぶふるさと歴史センターと新庄城跡の最上公園へと至る散策路。',
  eyecatch_prompt:
    'Nihonga mineral pigment and gold leaf style illustration of Mogami Park castle ruins moat and stone walls in Shinjo Yamagata, traditional festival float lantern motifs, historic wooden sericulture hall and distant misty mountains, no text, no people.',
  question:
    '最上の恵みと城下町の歴史が息づく新庄の街を歩いたあと、最初に誰かへ語りたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「新旬屋 本店」で、鶏の旨みが凝縮された新庄ならではのラーメンを味わった瞬間',
      subtext:
        '鶏の美味しさを追求した香り高いスープと麺の味わいに、新庄の麺文化の深みを知った。',
      badge: {
        code: 'shinjo_shinsyunya',
        name_ja: '新庄麺・鶏の旨みを味わいし者',
        subtitle_en: 'Taster of Shinjo Chicken Ramen',
        description:
          '新旬屋 本店を訪ね、鶏の旨みを極めた新庄ならではのラーメン文化に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a steaming porcelain bowl of golden chicken broth ramen with tender chicken slices and green scallions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 4,
      text: '「新庄ふるさと歴史センター」で、ユネスコ無形文化遺産・新庄まつりの豪華な山車を見上げた瞬間',
      subtext:
        '江戸から続く豪華絢爛な山車の彫刻と彩りに、雪国・新庄の人々の熱い誇りを見た。',
      badge: {
        code: 'shinjo_rekishi_center',
        name_ja: '新庄まつり・山車の誇りを継ぐ者',
        subtitle_en: 'Keeper of Shinjo Festival Heritage',
        description:
          '新庄ふるさと歴史センターを訪ね、新庄まつりの豪華な山車と最上の歴史文化に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing an ornate traditional Japanese festival float adorned with gold carvings and red lacquer panels, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 5,
      text: '「最上公園（新庄城跡）」のお堀と石垣に沿って、緑豊かな城址を散策した瞬間',
      subtext:
        '新庄藩戸沢家の面影を残す静かな堀端と木立の風に、城下町の穏やかな時間が流れていた。',
      badge: {
        code: 'shinjo_mogami_park',
        name_ja: '最上公園・新庄城址を歩みし者',
        subtitle_en: 'Walker of Shinjo Castle Ruins',
        description:
          '最上公園（新庄城跡）を訪ね、お堀と緑に囲まれた戸沢氏ゆかりの城址を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting calm castle moat waters reflecting stone walls and lush pine and cherry tree branches, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 3,
      text: '「万場町 のくらし」の古民家を活かした落ち着いた空間で、和風クレープを味わった瞬間',
      subtext:
        'お堀のほど近くに佇む趣ある店内でいただく甘味が、城下町歩きの足を優しく休めてくれた。',
      badge: {
        code: 'shinjo_nokurashi',
        name_ja: '万場町・古民家甘味を味わう者',
        subtitle_en: 'Guest of Shinjo Kominka Cafe',
        description:
          '万場町 のくらしを訪ね、新庄城址近くの古民家カフェで和風クレープの時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring a delicate folded matcha crepe with red bean paste and whipped cream beside a warm wooden teacup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'shinjo_complete',
    name_ja: '新庄・もがみの食と城址を歩みし者',
    subtitle_en: 'Walker of Shinjo & Mogami',
    description:
      'もがみ物産館から新旬屋 本店、万場町 のくらし、新庄ふるさと歴史センター、最上公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining castle moat stone walls, an ornate festival float motif, and golden wheat ears, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'もがみ物産館',
      spot_type: '買い物',
      description:
        'JR新庄駅併設の「ゆめりあ」内にある最上地域の総合物産館。最上8市町村の特産品や地酒、伝統工芸品が充実する。営業時間8:30〜18:30、年中無休。',
      address: '山形県新庄市多門町1-2',
      prefecture: '山形県',
      city: '新庄市',
      lat: 38.762836,
      lng: 140.305729,
      clue: '山形新幹線の終着駅・JR新庄駅に降り立ったら、まずは駅に併設された交流施設ゆめりあ内の「もがみ物産館」をじっくり覗いてみよう（8:30〜18:30、年中無休）。最上地方八市町村の特産品や地酒、山菜の加工品、伝統工芸のくじら餅などがずらりと並び、この地域の風土が一目でわかる。これから新庄のまちへ歩き出す前に、土地の暮らしの豊かな恵みをしっかり心に確かめておきたいところだね。',
      surprise:
        '鉄道の終着駅に直結しながら、最上地方全体の魅力がぎゅっと凝縮された品揃えは見応え十分で飽きることがない。季節ごとの山菜や地酒のラベルをゆっくり眺めているだけで、雪深い北国の豊かな食文化への興味がいっそう深まっていくに違いない。旅の始まりに嬉しい施設だ。',
      hook: '物産館を出たら、西南西へ徒歩4分の新旬屋 本店でラーメンを味わおう。',
      f7_fragment: '新庄駅直結の空間に揃う、最上八市町村の豊かな特産品と地酒の蔵。',
      f7_full: '駅併設の「もがみ物産館」を訪ね、最上地域の特産品や伝統菓子など土地ならではの恵みにしっかりと深く触れて旅を始めた。',
      image_prompt:
        'Welcoming Japanese regional craft and food hall inside a train station displaying local sake bottles, mountain vegetables and traditional sweets, no text, no people.',
    },
    {
      name: '新旬屋 本店',
      spot_type: '食事',
      description:
        '鶏の旨みを極めたラーメンで県内外から支持される新庄の名店。金の鶏中華や、曜日限定で提供されるご当地グルメ「新庄とりもつらー麺」も人気。営業時間10:30〜14:30・16:30〜20:30、火曜定休。',
      address: '山形県新庄市沖の町3-20',
      prefecture: '山形県',
      city: '新庄市',
      lat: 38.761939,
      lng: 140.303435,
      clue: 'もがみ物産館から西南西へ徒歩4分、沖の町に構える人気店「新旬屋 本店」で昼食にしよう（10:30〜14:30・16:30〜20:30、火曜定休）。鶏の美味しさを余すところなく引き出した黄金色のスープと自家製麺の相性が抜群で、曜日によっては新庄名物「とりもつ」を取り入れた一杯にも出会える。滋味深い鶏の旨みで身体を芯まで温め、これから続く城下町散策への活力をしっかり養おう。',
      surprise:
        '鶏という身近な食材をここまで奥深く芳醇な一杯へと昇華させる技に思わず唸らされる。澄んだスープをひと口味わうごとに、新庄の土地に根付く鶏食文化の豊かな歴史と料理人の並々ならぬ情熱がまっすぐに胸へ響き、思わず笑顔が自然とこぼれてくる名店といえる。',
      hook: 'ラーメンでお腹を満たしたら、北へ徒歩16分の「万場町 のくらし」へ向かおう。',
      f7_fragment: '鶏の旨みを極めた黄金の一杯、新庄が誇る実力派ラーメンの名店。',
      f7_full: '「新旬屋 本店」で鶏の旨みが澄み渡るこだわりのラーメンを味わい、新庄ならではの豊かな麺文化を心ゆくまで堪能した。',
      image_prompt:
        'Steaming ceramic bowl of golden chicken broth ramen topped with tender sliced chicken and fresh green onions on a wooden counter, no text, no people.',
    },
    {
      name: '万場町 のくらし',
      spot_type: '休憩',
      description:
        '新庄の伝統工芸や暮らしの品々を集めた空間にカフェを併設する施設。地元食材のおやつや珈琲で寛げる。11:00〜16:30（営業日時は不定、水・日等休の場合あり要確認）。',
      address: '山形県新庄市万場町5-16',
      prefecture: '山形県',
      city: '新庄市',
      lat: 38.770765,
      lng: 140.301967,
      clue: '新旬屋から北へ徒歩16分、歴史ある町並みが残る一角の「万場町 のくらし」へ（11:00〜16:30、不定休）。手仕事の作品に囲まれ珈琲とおやつで一息つこう。',
      surprise:
        '雪国・新庄で受け継がれてきた暮らしの道具や柔らかな手仕事が心地よく並び、カフェスペースでは穏やかな時間がゆっくり流れる。温かい珈琲を味わいながら眺める工芸品の数々が、旅の途中に静かな安らぎと温もりをそっともたらしてくれる心地よい空間といえる。',
      hook: 'カフェを後にしたら、南西へ徒歩10分の新庄ふるさと歴史センターへ向かおう。',
      f7_fragment: '新庄の手仕事と暮らしの品々に出会える、万場町の穏やかなカフェ。',
      f7_full: '「万場町 のくらし」で雪国の温かな手仕事に触れながら珈琲で寛ぎ、新庄の穏やかな昼下がりを心からゆったり楽しんだ。',
      image_prompt:
        'Warm Japanese craft and lifestyle shop cafe in a traditional wooden townhouse displaying handmade woven baskets, ceramics and a coffee cup on a timber table, no text, no people.',
    },
    {
      name: '新庄ふるさと歴史センター',
      spot_type: '見どころ',
      description:
        'ユネスコ無形文化遺産「新庄まつり」の山車や、新庄の民俗・歴史資料を展示する文化施設。迫力ある実物の山車展示が圧巻。開館9:00〜16:30（入館16:00まで）、火曜・年末年始休、観覧料300円。',
      address: '山形県新庄市堀端町4-74',
      prefecture: '山形県',
      city: '新庄市',
      lat: 38.767034,
      lng: 140.296506,
      clue: 'カフェから南西へ徒歩10分、お堀の近くに建つ「新庄ふるさと歴史センター」へ足を運ぼう（9:00〜16:30、火曜休・300円）。最大の見どころは、ユネスコ無形文化遺産にも登録された「新庄まつり」の豪華な山車展示だ。歌舞伎や歴史物語を題材に職人たちが精魂込めて作り上げた実物の山車を間近に見上げれば、雪国・新庄の人々が受け継いできた祭りの熱い魂と誇りが今にも目の前に迫ってくる。',
      surprise:
        '屋内に展示された本物の山車は細部の彫刻や彩色までじっくり眺めることができ、写真で見るのとはまったく異なる立体的な迫力に息を呑む。新庄の町の人々が一年かけて準備する祭りの熱気に直に触れられる、実に貴重で見応えのある素晴らしい文化施設といえる。',
      hook: '歴史センターを出たら、西へ徒歩4分の最上公園（新庄城跡）を歩いて旅を結ぼう。',
      f7_fragment: '新庄まつりの豪華な山車を間近に仰ぐ、城下町の誇りを伝える館。',
      f7_full: '「新庄ふるさと歴史センター」で豪華絢爛な新庄まつりの山車を見学し、最上の歴史と祭りの情熱にじっくり深く触れた。',
      image_prompt:
        'Japanese regional history museum atrium displaying an ornate colorful traditional festival float with gold carvings under dramatic spotlight, no text, no people.',
    },
    {
      name: '最上公園（新庄城跡）',
      spot_type: '見どころ',
      description:
        '新庄藩主・戸沢氏の居城であった新庄城跡に整備された公園。お堀や石垣、戸澤神社などが残り、四季折々の自然とともに城下町の風情を味わえる。終日開放・入園無料。',
      address: '山形県新庄市堀端町6-86',
      prefecture: '山形県',
      city: '新庄市',
      lat: 38.767071,
      lng: 140.29381,
      clue: '歴史センターから西へ徒歩4分、水堀と木立に囲まれた「最上公園（新庄城跡）」の本丸跡へ踏み入ろう（終日開放・無料）。かつて新庄藩を治めた戸沢氏の居城があった場所で、今は美しい桜や新緑に彩られる市民の憩いの場となっている。静かな水面に映る石垣や境内の神社をゆっくりと巡りながら、駅から商店街、そして城跡へと辿ってきた新庄の道のりを、心を込めて穏やかに締めくくろう。今日も静かな風が吹く。',
      surprise:
        'かつての城郭の面影を色濃く残す水堀の周りでは、季節ごとの木々の色と澄んだ空気が訪れる者を優しく迎えてくれる。お堀を渡る心地よい風に吹かれながら歩けば、城下町・新庄の落ち着いた気品が静かに、そしていつまでも深く胸に染み渡っていくことだろうね。',
      hook: '',
      f7_fragment: '水堀と石垣が新庄藩の面影を伝える、緑豊かな戸沢氏の城跡公園。',
      f7_full: '戸沢氏ゆかりの「最上公園（新庄城跡）」の堀端を歩き、城下町・新庄の静かな風情の中で散策を穏やかに締めくくった。',
      image_prompt:
        'Peaceful Japanese castle ruins park of Mogami Park in Shinjo with historic stone walls, calm moat water and green pine trees, no text, no people.',
    },
  ],
};
