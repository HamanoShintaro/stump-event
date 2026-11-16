export default {
  slug: 'nachi',
  station_order: 609,
  station: '那智駅',
  line: 'JR紀勢本線',
  area_name: '那智・補陀洛の海と浜ノ宮',
  prefecture: '和歌山県',
  municipality: '那智勝浦町',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['和歌山県', '那智勝浦町', '那智駅', '補陀洛山寺', '熊野古道'],
  style_genre: 'pastel_chalk_morning',
  title: '那智・補陀洛の海と浜ノ宮の祈りを歩く',
  description:
    '太平洋の波音が近いJR那智駅を起点に、南紀の恵みが並ぶ道の駅なち、海へ抜ける那智海水浴場、駅前の洋食ビストロとカフェを経て、世界遺産の補陀洛山寺へと至る、海と信仰が交わる浜ノ宮の散策路。',
  eyecatch_prompt:
    'Soft pastel chalk morning illustration of Nachi coastal village in Wakayama, vermilion Buddhist temple Fudarakusanji beside pine trees, curved sandy Nachi beach overlooking sparkling Pacific ocean waves, gentle sunrise light, no text, no people.',
  question:
    '潮風と古道の気配が重なる那智・浜ノ宮を歩いたあと、いちずに思い浮かぶ景色はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '世界遺産「補陀洛山寺」の朱色の本堂と、海の彼方を目指した渡海船の記憶',
      subtext:
        '目の前の太平洋を見つめたあとで復元船に触れ、千年の祈りの深淵に圧倒された。',
      badge: {
        code: 'nachi_fudarakusanji',
        name_ja: '補陀洛・海への祈りを見つめる者',
        subtitle_en: 'Watcher of Fudarakusanji',
        description:
          '世界遺産の補陀洛山寺を訪ね、那智の浜から観音浄土を目指した渡海信仰の記憶に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a vermilion coastal Buddhist temple roof and a traditional wooden ocean boat beside pine branches, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「那智海水浴場（ブルービーチ那智）」の白い砂浜と、どこまでも続く熊野灘の水平線',
      subtext:
        '駅のすぐ裏手に広がる開放的な浜辺で、潮騒の音と潮風の清々しさを全身に浴びた。',
      badge: {
        code: 'nachi_blue_beach',
        name_ja: '那智の浜・熊野灘の潮風を聴く者',
        subtitle_en: 'Listener of Nachi Beach Waves',
        description:
          '那智海水浴場を訪ね、穏やかな弧を描く砂浜から太平洋の水平線を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing gentle Pacific waves rolling onto a curved sandy beach framed by coastal green pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「ビストロ・ボヌール」で南紀の食材を活かした丁寧な洋食を味わったひととき',
      subtext:
        '静かな海辺の町に根付く温かなビストロの一皿が、古道歩きの合間に心地よい余白をくれた。',
      badge: {
        code: 'nachi_bonheur',
        name_ja: '浜ノ宮・潮風の街角を味わいし者',
        subtitle_en: 'Taster of Nachi Bistro',
        description:
          'ビストロ・ボヌールを訪ね、那智駅前の通りで南紀の恵みを活かした料理を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a warm plated coastal seafood bistro dish with crusty bread beside a window, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 1,
      text: '「道の駅 なち」の直売所で、紀州の柑橘や梅干しなど土地の恵みに触れた瞬間',
      subtext:
        '駅と直結するほどの近さに熊野の案内所と特産品が揃い、旅の期待が一気に膨らんだ。',
      badge: {
        code: 'nachi_michinoeki',
        name_ja: '道の駅なち・熊野の玄関を旅する者',
        subtitle_en: 'Traveler of Nachi Station Hub',
        description:
          '道の駅 なちを訪ね、南紀の温暖な気候が育てた産品と熊野古道の情報に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting woven baskets of bright Wakayama mandarin oranges and local coastal produce, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nachi_complete',
    name_ja: '那智・補陀洛の海と浜ノ宮を歩みし者',
    subtitle_en: 'Walker of Nachi & Hamanomiya',
    description:
      '道の駅 なちから那智海水浴場、smart cafe、ビストロ・ボヌール、補陀洛山寺までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a vermilion coastal temple silhouette, Pacific ocean waves, and mandarin orange leaves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '道の駅 なち',
      spot_type: '買い物',
      description:
        'JR那智駅に隣接する熊野の玄関口。地元農産物直売所や熊野那智世界遺産情報センターを併設する。直売所9:30〜16:00（1/1〜3休）、情報センター9:00〜17:00（月曜休）。',
      address: '和歌山県東牟婁郡那智勝浦町浜ノ宮361-2',
      prefecture: '和歌山県',
      city: '那智勝浦町',
      lat: 33.644465,
      lng: 135.93667,
      clue: 'JR那智駅の改札を抜けると、すぐ隣に熊野の玄関口として親しまれる「道の駅 なち」が建っている（直売所9:30〜16:00・情報センター9:00〜17:00）。館内の農産物直売所には南紀の温暖な気候が育てた柑橘類や梅干し、地元の加工品が瑞々しく並び、情報センターでは熊野古道や那智山の見どころをわかりやすく知ることができる。浜ノ宮の海辺と社寺を巡る前に、まずはこの土地ならではの味覚と輪郭に触れておこう。',
      surprise:
        '駅と直結するほどの近さに道の駅と世界遺産エリアが寄り添っているため、鉄道旅でも驚くほど気軽に巡れるのが大きな魅力だ。潮の香りが漂う駅前の開放感が、南紀の海辺へやって来た高揚感と旅への期待を静かに、そしてどこまでも心地よく高めてくれるのが嬉しい。',
      hook: '道の駅なちを出たら、トンネルを抜けて東側の那智海水浴場へ出てみよう。',
      f7_fragment: '那智駅のすぐ隣に広がる、南紀の恵みと熊野古道の大切な案内所。',
      f7_full: '駅に隣接する「道の駅 なち」を訪ね、紀州の豊かな産品と熊野古道の丁寧な案内で浜ノ宮歩きの準備をしっかりと整えた。',
      image_prompt:
        'Coastal roadside station building near Nachi railway station with wooden baskets of fresh oranges and local Wakayama produce, no text, no people.',
    },
    {
      name: '那智海水浴場（ブルービーチ那智）',
      spot_type: '見どころ',
      description:
        '那智駅のすぐ東側に広がる美しい弧を描いた砂浜。快水浴場百選にも選ばれた透明度の高い海と松林が心地よい。終日開放・入場無料。',
      address: '和歌山県東牟婁郡那智勝浦町浜ノ宮382地先',
      prefecture: '和歌山県',
      city: '那智勝浦町',
      lat: 33.641883,
      lng: 135.936491,
      clue: '道の駅から線路下の歩道トンネルを東へ抜けると、目の前にパッと太平洋と白い砂浜が広がる「那智海水浴場（ブルービーチ那智）」に出る（終日開放・無料）。環境省の快水浴場百選にも選ばれた美しい弧を描く浜辺は、駅前のすぐ裏手とは思えないほど開放的で気持ちがいい。松林の緑と青い熊野灘のコントラストを眺めながら潮騒に耳を傾ければ、古来より海から祈りが寄せられた那智の風土を肌で感じられる。',
      surprise:
        '駅のホームのすぐ向こうにこれほど清らかな白い砂浜と松林が広がっている光景は、紀勢本線ならではの贅沢な眺めだ。波打ち際を渡る爽やかな潮風を全身に浴びるだけで、これまでの長い旅の疲れがすっと洗い流されていくような心地よさに深く静かに包まれていく。',
      hook: '海辺の潮風を味わったら、北へ徒歩4分のsmart cafeでひと息つこう。',
      f7_fragment: '駅のすぐ裏手に開ける、熊野灘の水平線と白い砂浜の爽やかな風景。',
      f7_full: '「那智海水浴場（ブルービーチ那智）」の浜辺に立ち、潮騒の音と太平洋の開放的な水平線を深く胸に収めてゆったり歩いた。',
      image_prompt:
        'Wide morning view of a curved sandy beach with clear turquoise Pacific ocean waves and coastal pine trees at Nachi Wakayama, no text, no people.',
    },
    {
      name: 'smart cafe',
      spot_type: '休憩',
      description:
        '那智海水浴場へと通じる道の手前にある地域密着型のカフェ。ボリュームあるモーニングや淹れたての珈琲で旅人を温かく迎えてくれる。営業時間9:00〜16:00頃、水・木曜定休。',
      address: '和歌山県東牟婁郡那智勝浦町浜ノ宮358',
      prefecture: '和歌山県',
      city: '那智勝浦町',
      lat: 33.643943,
      lng: 135.936162,
      clue: '海辺から北へ徒歩4分、道の駅なちのすぐそばにある「smart cafe」でひと休みしよう（9:00〜16:00頃・水・木曜定休）。海風が渡る浜ノ宮の朝に淹れたての珈琲を味わえば、散策がぐっと心地よくなる。',
      surprise:
        '青い海と砂浜のすぐそばで味わう珈琲の香りは格別だ。地域に寄り添う気さくな空気が心地よく、ゆったりとしたモーニングやひと休みの時間が、これから向かう食事処や古寺への気分を穏やかに、そして軽やかに整えてくれるのが旅には実に嬉しいところといえる。',
      hook: 'カフェを出たら、北へ徒歩2分のビストロ・ボヌールへ向かおう。',
      f7_fragment: '潮風が渡る砂浜の手前でひと息つく、海辺の穏やかなカフェ時間。',
      f7_full: '浜ノ宮の「smart cafe」で淹れたての珈琲を味わいながら一息つき、海辺の朝の穏やかな時間をゆったり楽しんだ。',
      image_prompt:
        'Small seaside cafe terrace near Nachi beach with morning coffee cup and toast plate in soft morning sunlight, no text, no people.',
    },
    {
      name: 'ビストロ・ボヌール',
      spot_type: '食事',
      description:
        'JR那智駅前の通りにある洋食・ビストロ店。那智勝浦の海産物や地元食材を使った丁寧なランチやディナーが人気。営業時間11:00〜14:30・17:00〜21:00、火曜定休。',
      address: '和歌山県東牟婁郡那智勝浦町浜ノ宮392-1',
      prefecture: '和歌山県',
      city: '那智勝浦町',
      lat: 33.644869,
      lng: 135.9359,
      clue: 'smart cafeから北へ徒歩2分、那智駅前の通りに佇む「ビストロ・ボヌール」へ足を運ぼう（11:00〜14:30・17:00〜21:00、火曜定休）。地元那智勝浦の海で揚がった魚介や紀州の食材を取り入れた洋食のランチやディナーは、丁寧な仕込みが伝わる優しい味わいで旅人にも地元の人にも好評だ。古道歩きの合間に、ほっと心がほどける温かい一皿をゆっくり味わえば、午後からの寺社巡りに向けた活力も自然と湧いてくる。',
      surprise:
        '熊野の静かな海辺の町に、本格的でありながら気取らずに入れるビストロが根付いているのが嬉しい。厨房から漂う丁寧に焼かれた料理の芳ばしい香りが、浜ノ宮の穏やかな日常の風景に優しく溶け込み、旅人を温かく迎えてくれるのが実に大きな魅力となっている。',
      hook: 'ビストロでお腹を満たしたら、西へ徒歩2分の補陀洛山寺へ詣でよう。',
      f7_fragment: '那智駅前の通りで出会う、南紀の恵みを味わう温かな小さなビストロ。',
      f7_full: '那智駅前の「ビストロ・ボヌール」で南紀の食材を活かした丁寧な一皿を味わい、午後の旅への活力をしっかりと養った。',
      image_prompt:
        'Cozy small Japanese-French bistro wooden dining table with plated coastal seafood lunch and warm bread under soft light, no text, no people.',
    },
    {
      name: '補陀洛山寺',
      spot_type: '見どころ',
      description:
        '世界遺産「紀伊山地の霊場と参詣道」を構成する古寺。南の海の彼方に観音浄土を求めて小舟で漕ぎ出した「補陀洛渡海」の舞台として知られる。拝観8:30〜16:00、無休。',
      address: '和歌山県東牟婁郡那智勝浦町浜ノ宮348',
      prefecture: '和歌山県',
      city: '那智勝浦町',
      lat: 33.644689,
      lng: 135.934502,
      clue: 'ビストロから西へ徒歩2分、常緑の木立に寄り添う朱色と白壁の本堂が、世界遺産「補陀洛山寺」だ（8:30〜16:00、無休）。南の海の彼方に観音浄土があると信じられた時代、小舟に乗って那智の浜から大海原へと漕ぎ出した「補陀洛渡海」の舞台として知られる。境内には当時の渡海船を復元した模型も安置され、命を懸けて理想郷を目指した人々の深い信仰心に圧倒される。海と山を結ぶ那智の入口で、旅のしるしを静かに刻もう。',
      surprise:
        '先ほど眺めた穏やかな那智湾の水平線を思い出してから復元船の前に立つと、かつて小舟で海へ漕ぎ出していった僧たちの並々ならぬ覚悟が胸に迫ってくる。熊野の旅の深淵に触れるにふさわしく、心に静かな余韻を残す実に忘れがたい旅の結びの場所といえるだろう。',
      hook: '',
      f7_fragment: '南の浄土へ漕ぎ出した渡海船の記憶、世界遺産の海辺に佇む古寺。',
      f7_full: '世界遺産「補陀洛山寺」に詣で、那智の海から浄土を目指した渡海信仰の記憶とともに浜ノ宮の旅を静かに締めくくった。',
      image_prompt:
        'Historic Fudarakusanji Buddhist temple with vermilion wooden hall and restored wooden ocean boat in the courtyard beside coastal pines, no text, no people.',
    },
  ],
};
