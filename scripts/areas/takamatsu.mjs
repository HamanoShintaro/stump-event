export default {
  slug: 'takamatsu',
  station_order: 658,
  station: '高松',
  line: 'JR予讃線',
  area_name: '高松・玉藻城と栗林公園の讃岐路',
  prefecture: '香川県',
  municipality: '高松市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['香川県', '高松市', '高松駅', '讃岐うどん', '栗林公園'],
  style_genre: 'pastel_chalk_morning',
  title: '高松・玉藻公園と栗林公園の讃岐を歩く',
  description:
    'JR高松駅から、駅前の人気セルフうどん「めりけんや 高松駅前店」と日本三大水城の史跡「高松城跡・玉藻公園」、海沿いのリノベーション倉庫街「北浜alley」、名物釜バターうどんの「手打十段うどんバカ一代」、ミシュラン三ツ星の特別名勝「栗林公園」を巡る散策路。',
  eyecatch_prompt:
    'Morning pastel chalk and colored pencil illustration of Takamatsu in Kagawa showing the iconic Engetsu-kyo curved wooden bridge over South Lake in Ritsurin Garden backed by Mount Shiun, saltwater castle walls of Tamamo Park overlooking the Seto Inland Sea, stylish red-brick waterfront warehouses, and steaming bowl of Sanuki udon, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '瀬戸内の海水を引き込んだ水城から讃岐うどんの湯気、天下の名園へと続く高松を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「高松城跡・玉藻公園」の海水のお堀を覗き込み、タイが泳ぐ日本三大水城の石垣を歩いた瞬間',
      subtext:
        '高松駅のすぐ隣に広がる瀬戸内海と一体化したお城の造りが、海の玄関口ならではだった。',
      badge: {
        code: 'takamatsu_tamamo',
        name_ja: '高松・三大水城の玉藻公園を巡りし者',
        subtitle_en: 'Walker of Tamamo Castle',
        description:
          '高松城跡・玉藻公園を訪ね、海水を引き込んだお堀と披雲閣が残る日本三大水城を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting white castle stone walls and a traditional wooden turret beside shimmering sea-blue moat water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「北浜alley」の古い港湾倉庫を活かした海辺の空間で、瀬戸内の潮風を感じた瞬間',
      subtext:
        '昭和の穀物倉庫を再生した洗練された街並みに、現代の高松の心地よい感性が光っていた。',
      badge: {
        code: 'takamatsu_kitahama',
        name_ja: '高松・潮風薫る北浜alleyを歩きし者',
        subtitle_en: 'Visitor of Kitahama Alley',
        description:
          '高松港そばの北浜alleyを訪ね、海辺のレトロな倉庫街とカフェの空気を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing charming renovated harbor brick-and-tin warehouses with cafe umbrellas beside calm blue sea water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「手打十段うどんバカ一代」で、熱々の麺にバターと黒胡椒が絡む名物釜バターうどんを味わった瞬間',
      subtext:
        '讃岐うどんの王道でありながら独創的な一杯の力強いコシに、うどん県の実力を実感した。',
      badge: {
        code: 'takamatsu_udon',
        name_ja: '高松・讃岐うどんの熱気を味わいし者',
        subtitle_en: 'Taster of Sanuki Udon',
        description:
          '手打十段うどんバカ一代を訪ね、コシのある本場讃岐うどんと名物釜バターを味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a ceramic bowl of thick glossy Sanuki udon noodles topped with melting golden butter, soft egg and crushed black pepper, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「栗林公園」の飛来峰から偃月橋と南湖を見下ろし、紫雲山を借景にした名園を仰いだ瞬間',
      subtext:
        'ミシュラン三ツ星にも輝く一歩一景の大名庭園の美しさが、讃岐の旅を忘れがたいものにした。',
      badge: {
        code: 'takamatsu_ritsurin',
        name_ja: '高松・一歩一景の栗林公園を巡りし者',
        subtitle_en: 'Explorer of Ritsurin Garden',
        description:
          '国の特別名勝・栗林公園を訪ね、紫雲山を背景にした千本の松と南湖の名景を鑑賞した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing the curved wooden Engetsu-kyo bridge spanning an emerald pond framed by sculpted pine trees and a green mountain ridge, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'takamatsu_complete',
    name_ja: '高松・水城とうどん、栗林公園を巡る旅人',
    subtitle_en: 'Walker of Takamatsu',
    description:
      'めりけんや 高松駅前店から玉藻公園、北浜alley、うどんバカ一代、栗林公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the curved wooden bridge of Ritsurin Garden, saltwater castle walls and a steaming bowl of Sanuki udon, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'めりけんや 高松駅前店',
      spot_type: '食事',
      description:
        'JR高松駅から徒歩約2分、朝7時から営業する人気のセルフ讃岐うどん店。もっちりとした太麺と香り高い出汁、豊富な天ぷらで地元客と旅人に愛される。7:00〜20:00、無休（元日除く）。',
      address: '香川県高松市西の丸町6-20',
      prefecture: '香川県',
      municipality: '高松市',
      lat: 34.349763,
      lng: 134.047279,
      clue: 'JR高松駅を出たら、まずは駅すぐそばの老舗セルフうどん店「めりけんや 高松駅前店」で讃岐の朝を始めよう（7:00〜20:00、元日休）。湯気を立てる釜の前で好みのうどんを注文し、瀬戸内の風味豊かな出汁を注いで熱々をすすれば、四国へ渡った実感が一気に湧き上がる。素朴で気取らないうどん県の日常を最初の一杯で体感し、水城と名園の旅へこれからもずっと元気に明るく踏み出したい。',
      surprise:
        '高松駅から歩いてすぐという立地から、早朝のフェリーや列車を利用する地元の人々やうどん巡りを楽しむ旅人にとって心強い玄関口となっている。',
      hook: '讃岐うどんで温まったら、東へ歩いて日本三大水城・高松城跡の玉藻公園へ向かおう。',
      f7_fragment: '高松駅すぐそばで朝七時から香り高い出汁が迎える、人気セルフうどん店。',
      f7_full:
        '高松駅そばの「めりけんや 高松駅前店」で本場のセルフ讃岐うどんを味わい、うどん県の街歩きを爽やかに始めた。',
      image_prompt:
        'Warm nostalgic Sanuki udon counter in Takamatsu serving a steaming bowl of thick wheat noodles in clear anchovy broth in morning pastel chalk style, no text, no letters.',
    },
    {
      name: '高松城跡・玉藻公園',
      spot_type: '見どころ',
      description:
        '生駒親正が築き、のち松平家の居城となった日本三大水城の一つ。海水を引き込んだお堀にタイが泳ぎ、国重要文化財の披雲閣や艮櫓が残る。開園時間は季節変動あり（5:30〜19:00〜7:00〜17:00頃）、12月29〜31日休、一般300円。',
      address: '香川県高松市玉藻町2-1',
      prefecture: '香川県',
      municipality: '高松市',
      lat: 34.350316,
      lng: 134.051619,
      clue: 'めりけんやから東へ歩いてすぐ、高松駅の隣に広がる日本三大水城「高松城跡・玉藻公園」へ入ろう（開園時間は季節変動あり、年末休、一般300円）。瀬戸内海の海水を直接引き込んだ珍しいお堀にはマダイやクロダイがゆうゆうと泳ぎ、復元された天守台からは高松港の海景色を一望できる。国重要文化財の披雲閣や美しい松並木を歩き、海の城ならではの開放感をこれからもずっと心深く楽しく味わいたい。',
      surprise:
        'お堀に海水が満ち引きする水門の仕組みが残っており、園内では海のお堀に棲む鯛へのエサやり体験も人気を集めている。',
      hook: '水城の潮風を感じたら、東の海沿いに並ぶレトロ倉庫街・北浜alleyへ向かおう。',
      f7_fragment: '海水のお堀に鯛が泳ぐ、瀬戸内海に面した日本三大水城跡。',
      f7_full:
        '「高松城跡・玉藻公園」で海水のお堀と天守台からの瀬戸内の景色を眺め、日本三大水城の魅力に触れた。',
      image_prompt:
        'Saltwater moat walls and historic wooden turret of Takamatsu Castle Tamamo Park overlooking the shimmering Seto Inland Sea in morning pastel chalk style, no text, no letters.',
    },
    {
      name: '北浜alley（キタハマアリー）',
      spot_type: '休憩',
      description:
        '高松港そばの古い港湾倉庫をリノベーションした海辺の複合商業エリア。瀬戸内海を望むおしゃれなカフェや雑貨店が並び、潮風を感じながら寛げる。店舗により異なる（概ね11:00〜18:00頃）。',
      address: '香川県高松市北浜町4-14',
      prefecture: '香川県',
      municipality: '高松市',
      lat: 34.351007,
      lng: 134.056653,
      clue: '玉藻公園から東の港沿いを歩き、古い倉庫を再生した「北浜alley」へ立ち寄ろう（店舗により営業時間変動）。潮風を感じる海辺の素敵なカフェでゆっくりひと息つきたい。',
      surprise:
        '昭和初期に建てられたJAの農業倉庫を解体せずに活かした空間で、瀬戸内国際芸術祭の玄関口である高松港周辺のにぎわいを象徴している。',
      hook: '海辺の倉庫街を出たら、南へ進み名物釜バターのうどんバカ一代へ向かおう。',
      f7_fragment: '昭和の港湾倉庫を再生した、瀬戸内海を望むおしゃれな海辺の街区。',
      f7_full:
        '高松港そばの「北浜alley」でレトロな倉庫群と海辺のカフェを楽しみ、瀬戸内の穏やかな潮風に癒やされた。',
      image_prompt:
        'Renovated vintage harbor warehouses converted into warm seaside cafes and boutiques along Takamatsu waterfront in morning pastel chalk style, no text, no letters.',
    },
    {
      name: '手打十段うどんバカ一代',
      spot_type: '食事',
      description:
        '高松を代表する超人気讃岐うどん店。打ち立ての麺にバター・生卵・黒胡椒を絡める名物「釜バターうどん」で全国からファンが訪れる。6:00〜18:00、年中無休（元日除く）。',
      address: '香川県高松市多賀町1-6-7',
      prefecture: '香川県',
      municipality: '高松市',
      lat: 34.336742,
      lng: 134.058538,
      clue: '市街地を南へ進み（ことでん花園駅近く）、高松を代表する超人気店「手打十段うどんバカ一代」で絶品うどんを味わおう（6:00〜18:00、元日休）。一番人気は茹でたて熱々の麺にバターと黒胡椒、生卵と特製醤油を絡めていただく名物「釜バターうどん」で、和風カルボナーラのようなコクともちもちのコシが絶品だ。うどん県の創意工夫が生んだ力強い一杯を、これからもずっと笑顔で堪能したい。',
      surprise:
        '朝6時の開店直後から行列ができることもある名店で、店内には全国から訪れた多くの旅人や著名人のサイン色紙がずらりと並んでいる。',
      hook: '名物うどんで力を得たら、南西の特別名勝・栗林公園へ向かい旅を結ぼう。',
      f7_fragment: '名物「釜バターうどん」で全国から行列ができる、讃岐うどんの超人気店。',
      f7_full:
        '「手打十段うどんバカ一代」で熱々の釜バターうどんを味わい、力強いコシと独創的な讃岐の味を堪能した。',
      image_prompt:
        'Lively authentic Sanuki udon shop table serving hot kama-butter udon noodles with melting butter, golden yolk and black pepper in pastel chalk style, no text, no letters.',
    },
    {
      name: '栗林公園',
      spot_type: '見どころ',
      description:
        '国の特別名勝に指定された江戸初期の大名庭園。紫雲山を借景に六つの池と千本の松が織りなす「一歩一景」の美しさはミシュラン三ツ星にも輝く。日の出〜日没（概ね5:30〜17:00〜18:30）、年中無休、大人500円。',
      address: '香川県高松市栗林町1-20-16',
      prefecture: '香川県',
      municipality: '高松市',
      lat: 34.328655,
      lng: 134.041946,
      clue: '多賀町から南西へ進み、ミシュラン三ツ星にも輝く国の特別名勝「栗林公園」を歩いて旅を締めくくろう（日の出〜日没、年中無休、大人500円）。紫雲山の緑を借景に、六つの池と十三の築山、手入れの行き届いた約千本の箱松が「一歩一景」の美しい眺めをつくり出している。飛来峰から偃月橋と南湖を見渡す名景を胸に刻み、水城とうどんを巡った高松の旅をこれからもずっと誇らしく美しく結びたい。',
      surprise:
        '江戸時代に高松藩主・生駒家と松平家が百年以上の歳月をかけて完成させた庭園で、南湖に浮かぶ和船「千秋丸」の乗船体験も人気が高い。',
      hook: '',
      f7_fragment: '紫雲山を借景に千本の松と池が輝く、ミシュラン三ツ星の特別名勝庭園。',
      f7_full:
        '特別名勝「栗林公園」の飛来峰から偃月橋と南湖を仰ぎ、水城とうどんを巡った高松の旅を優雅に結んだ。',
      image_prompt:
        'Breathtaking Ritsurin Garden view from Hiraiho hill overlooking the curved wooden Engetsu-kyo bridge and emerald South Lake backed by Mount Shiun in pastel chalk style, no text, no letters.',
    },
  ],
};
