export default {
  slug: 'tateyama',
  station_order: 612,
  station: '館山駅',
  line: 'JR内房線',
  area_name: '館山・鏡ヶ浦の海と城山',
  prefecture: '千葉県',
  municipality: '館山市',
  category: '自然・海',
  budget_tier: 2,
  tags: ['千葉県', '館山市', '館山駅', '館山城', '北条海岸'],
  style_genre: 'fountain_pen_sketchbook',
  title: '館山・鏡ヶ浦の潮風と里見の城山を歩く',
  description:
    'JR館山駅から百年続く老舗パン屋に立ち寄り、鏡ヶ浦とも呼ばれる北条海岸と海辺のカフェ、渚の駅たてやまの海の食堂を経て、南総里見八犬伝の舞台・館山城が建つ城山公園へと至る、南房総の海と歴史を辿る散策路。',
  eyecatch_prompt:
    'Fountain pen and light watercolor sketchbook illustration of Tateyama coastal town in Chiba, palm-lined Hojo Beach overlooking calm mirror-like Tateyama Bay and distant Mount Fuji silhouette, seaside wooden pier and hilltop Japanese castle keep on green hill, crisp ink lines and warm washes, no text, no people.',
  question:
    '鏡ヶ浦の穏やかな海と城山が寄り添う館山を歩いたあと、最初に誰かへ伝えたい風景はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「北条海岸」のヤシの木並木越しに、鏡のように穏やかな館山湾を見渡した瞬間',
      subtext:
        '駅を出てすぐの海辺に広がる開放的な水平線と南国のような空気に、房総の風を感じた。',
      badge: {
        code: 'tateyama_hojo_beach',
        name_ja: '鏡ヶ浦・北条海岸の潮風を聴く者',
        subtitle_en: 'Listener of Hojo Beach',
        description:
          '北条海岸を訪ね、鏡ヶ浦と呼ばれる穏やかな館山湾とヤシの木並木の海辺を歩いた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting coastal palm trees framing calm sparkling blue ocean waves and a distant mountain silhouette, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 4,
      text: '「館山なぎさ食堂（渚の駅たてやま）」で、海を眺めながら南房総の海鮮を味わった瞬間',
      subtext:
        '館山湾に面した明るい席で味わう地魚の鮮度が、港町・館山ならではの贅沢を教えてくれた。',
      badge: {
        code: 'tateyama_nagisa_shokudo',
        name_ja: '渚の駅・南房総の海の幸を味わいし者',
        subtitle_en: 'Taster of Tateyama Bay Seafood',
        description:
          '館山なぎさ食堂を訪ね、海を望むロケーションで南房総の新鮮な海の幸を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a colorful Japanese seafood rice bowl with fresh coastal sashimi beside an ocean view window, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 5,
      text: '「館山城（城山公園）」の山頂の天守から、鏡ヶ浦の湾と館山の町並みを一望した瞬間',
      subtext:
        '八犬伝の物語が息づく城跡の高台から見下ろす海の青さに、南房総の旅が胸に刻まれた。',
      badge: {
        code: 'tateyama_castle',
        name_ja: '里見の城山・八犬伝の物語を望む者',
        subtitle_en: 'Watcher of Tateyama Castle',
        description:
          '館山城（城山公園）を訪ね、南総里見八犬伝ゆかりの城山山頂から館山湾を一望した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a white hilltop Japanese castle keep surrounded by green trees overlooking a curved ocean bay, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 2,
      text: '「館山中村屋 館山駅前本店」で、長年愛されるレトロなクリームパンを手にした瞬間',
      subtext:
        '地元の人に「なかぱん」と親しまれる老舗の温かな香りに、街の変わらぬ暮らしを感じた。',
      badge: {
        code: 'tateyama_nakamuraya',
        name_ja: 'なかぱん・老舗の朝を味わう者',
        subtitle_en: 'Traveler of Tateyama Bakery',
        description:
          '館山中村屋 館山駅前本店を訪ね、大正の世から親しまれてきた老舗のパンを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting golden baked Japanese cream buns and classic coffee in a warm vintage bakery display, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'tateyama_complete',
    name_ja: '館山・鏡ヶ浦と城山の物語を歩みし者',
    subtitle_en: 'Walker of Tateyama Bay & Castle',
    description:
      '館山中村屋から北条海岸、CAFE DEL MAR、館山なぎさ食堂、館山城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a hilltop castle silhouette, palm trees along calm bay waves, and a golden cream bun, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '北条海岸',
      spot_type: '見どころ',
      description:
        '「鏡ヶ浦」とも称される波穏やかな館山湾に面した海岸。ヤシの木の並木が続く開放的なプロムナードで、晴れた日には富士山のシルエットも望める。終日開放・無料。',
      address: '千葉県館山市北条2307-46地先',
      prefecture: '千葉県',
      city: '館山市',
      lat: 34.999729,
      lng: 139.858396,
      clue: '館山駅の西口を出て海側へ数分歩くと視界がパッと開け、ヤシの木並木が続く「北条海岸」に出る（終日開放・無料）。内湾のため波がたいへん穏やかなことから古くより「鏡ヶ浦」と呼ばれ、晴れた日には海の向こうに富士山の姿まで望める絶景の海辺だ。浜辺沿いの遊歩道を歩きながら、静かな潮騒の音と爽やかな潮風を胸いっぱいに吸い込めば、南房総ならではの開放感に心が心地よくやさしくほどけていく。',
      surprise:
        '駅のすぐ近くでありながらリゾート地のようなヤシの木並木と静かな波打ち際が続く光景に思わず驚かされる。鏡のように光を映す穏やかな水面を眺めながら歩く時間は、日常の慌ただしさを忘れさせてくれる深い心地よさに満ち溢れているのが実に魅力的といえる。',
      hook: '北条海岸の潮風を感じたら、南東へ徒歩9分の館山中村屋 館山駅前本店へ向かおう。',
      f7_fragment: 'ヤシの木並木越しに望む、鏡のように穏やかな館山湾の青い水平線。',
      f7_full: '「北条海岸」の海辺の遊歩道を歩き、鏡ヶ浦と呼ばれる館山湾の穏やかな波音と開放的な景色に心から深く静かに癒やされた。',
      image_prompt:
        'Calm mirror-like bay shoreline of Hojo Beach in Tateyama lined with palm trees and distant mountain silhouette under clear morning sky, no text, no people.',
    },
    {
      name: '館山中村屋 館山駅前本店',
      spot_type: '買い物',
      description:
        '大正8年創業、地元で「なかぱん」の名で親しまれる老舗ベーカリー＆喫茶。名物のクリームパンやレトロな菓子パンが並ぶ。営業時間8:00〜16:30、木曜定休。',
      address: '千葉県館山市北条1882',
      prefecture: '千葉県',
      city: '館山市',
      lat: 34.996349,
      lng: 139.863086,
      clue: '北条海岸から南東へ徒歩9分、館山駅東口の目の前にある老舗「館山中村屋 館山駅前本店」を訪ねよう（8:00〜16:30、木曜定休）。地元で「なかぱん」の名で親しまれ百年以上の歴史を誇る名店で、ふんわりとした生地に優しい甘さのカスタードが詰まった名物クリームパンは朝一番から地元客で賑わう定番だ。海岸の潮風を感じたあと、南房総の暮らしに根付く老舗の香りを嬉しく楽しく手に取ろう。',
      surprise:
        '昔ながらの看板や店内のショーケースに漂う穏やかな空気は、変わらない町の記憶そのものといえる。世代を超えて受け継がれてきた素朴なパンの味わいが、これから歩く南房総の海辺のまち歩きを優しく、そしてどこまでも温かく応援してくれるに違いないはずだ。',
      hook: 'パンを手に入れたら、西へ徒歩4分のCAFE DEL MARで一息つこう。',
      f7_fragment: '館山駅前で百年愛され続けてきた、老舗なかぱんの優しいパンの香り。',
      f7_full: '駅前の老舗「館山中村屋 館山駅前本店」を訪ね、名物のクリームパンとともに南房総の暮らしの温もりにじっくり触れた。',
      image_prompt:
        'Classic Japanese neighborhood bakery storefront and wooden shelves lined with golden baked cream buns in morning light, no text, no people.',
    },
    {
      name: 'CAFE DEL MAR',
      spot_type: '休憩',
      description:
        '北条海岸の近くに佇む海辺のカフェ。海風を感じながら手作りスイーツや珈琲でゆったり過ごせる。営業時間11:30〜17:00頃、水曜・木曜定休等（※夏季7〜9月頃はカフェ休業や変則営業の場合あり、要事前確認）。',
      address: '千葉県館山市北条2806',
      prefecture: '千葉県',
      city: '館山市',
      lat: 34.996149,
      lng: 139.86018,
      clue: 'なかぱんから西へ徒歩4分、海風に寄り添うように佇む「CAFE DEL MAR」でひと休みしよう（11:30〜17:00頃、水・木曜休、夏季休業の場合あり）。珈琲と甘味で歩みの余白を楽しみたい。',
      surprise:
        '海辺の街のゆったりとした時間の流れがそのまま店内の心地よさに繋がっていて、肩の力を抜いて寛げる。爽やかな潮風を感じたあとでいただく珈琲の一口は、これから向かう食事と城山登城への気分を軽やかに、そして楽しく整えてくれるところといえるだろうね。',
      hook: 'カフェを出たら、南西へ徒歩15分の館山なぎさ食堂（渚の駅たてやま）へ向かおう。',
      f7_fragment: '海辺の通りの穏やかな空気に包まれる、潮風香るカフェの休息時間。',
      f7_full: '北条海岸近くの「CAFE DEL MAR」で海風を感じながら珈琲を味わい、南房総の穏やかな昼のひとときを過ごした。',
      image_prompt:
        'Relaxed coastal Japanese cafe corner with natural wood table, iced coffee, and homemade waffle beside bright seaside window, no text, no people.',
    },
    {
      name: '館山なぎさ食堂（渚の駅たてやま）',
      spot_type: '食事',
      description:
        '海の交流拠点「渚の駅たてやま」の2階にあるシーフードレストラン。館山湾を一望する席で地元で水揚げされた新鮮な海鮮丼や魚介料理を味わえる。ランチ11:00〜15:00（L.O.14:30）、無休。',
      address: '千葉県館山市館山1564-1',
      prefecture: '千葉県',
      city: '館山市',
      lat: 34.989483,
      lng: 139.854404,
      clue: 'さらに海沿いを南西へ徒歩15分、館山夕日桟橋の付け根に建つ渚の駅たてやま二階の「館山なぎさ食堂」で昼食にしよう（ランチ11:00〜15:00、無休）。窓の外に美しいオーシャンビューが広がる明るい店内で、館山湾や南房総の沖合で揚がった旬の魚介を使った海鮮丼や定食をいただける。食後は一階の博物館や海辺の広場も気軽に覗いて、海の町の豊かな魅力と潮の香りを丸ごとしっかり体感したい。',
      surprise:
        '目の前に伸びる日本一長い桟橋式の「館山夕日桟橋」と海の色を眺めながら味わう地魚は、港町ならではの鮮度と甘みに溢れている。海と人の暮らしがすぐ隣り合わせにある館山の豊かさが、お膳の上にそのまま表現されているように強く感じるに違いないはずだろう。',
      hook: '海の幸でお腹を満たしたら、南へ徒歩15分の館山城（城山公園）へ登ろう。',
      f7_fragment: '館山湾を一望する窓辺で味わう、南房総の旬を盛り込んだ海鮮膳。',
      f7_full: '渚の駅たてやまの「館山なぎさ食堂」で館山湾を眺めながら旬の魚介を味わい、海の町の豊かな恵みにしっかり満たされた。',
      image_prompt:
        'Bright ocean-view dining table inside a coastal restaurant featuring a fresh sashimi seafood bowl and grilled fish set overlooking calm sea bay, no text, no people.',
    },
    {
      name: '館山城（城山公園）',
      spot_type: '見どころ',
      description:
        '戦国期の里見氏の居城跡に整備された城山公園の山頂に建つ三層四階の天守。館内は全国唯一の八犬伝博物館となっており、館山湾のパノラマも圧巻。開館9:00〜16:45、月曜休（祝日の場合は翌平日休）。',
      address: '千葉県館山市館山362',
      prefecture: '千葉県',
      city: '館山市',
      lat: 34.981506,
      lng: 139.855761,
      clue: 'なぎさ食堂から南へ徒歩15分、緑濃い坂道を登りきった城山公園の頂に「館山城」がそびえる（9:00〜16:45、月曜休）。かつて房総を治めた里見氏の居城跡に建てられた天守は「館山八犬伝博物館」になっており、名作『南総里見八犬伝』の多彩な資料が並ぶ。天守の最上階からは、先ほど歩いてきた北条海岸や鏡ヶ浦の青い湾が一望でき、海と山を結ぶ散策の終わりにこれ以上ない景色が広がる。',
      surprise:
        '海辺の桟橋から見上げていた緑の丘の上に立ち、今度は自分が歩いた海岸線を空から俯瞰できる快感がたまらない。物語のロマンと南房総の雄大な海景色がひとつに溶け合い、館山の歩みを清々しく、そして見事に締めくくってくれるに違いないところといえるだろう。',
      hook: '',
      f7_fragment: '八犬伝の物語が息づく城山の頂から、鏡ヶ浦の青い湾を一望する。',
      f7_full: '八犬伝の舞台・城山公園の「館山城」へ登城し、館山湾のパノラマを望んで南房総の海と歴史の散策を静かに締めくくった。',
      image_prompt:
        'White hilltop Japanese castle keep of Tateyama Castle framed by lush green trees overlooking the calm blue curve of Tateyama Bay, no text, no people.',
    },
  ],
};
