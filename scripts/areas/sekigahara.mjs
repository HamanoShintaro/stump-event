export default {
  slug: 'sekigahara',
  station_order: 602,
  station: '関ヶ原駅',
  line: 'JR東海道本線',
  area_name: '関ケ原・天下分け目の古戦場と山あいの史跡',
  prefecture: '岐阜県',
  municipality: '関ケ原町',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['岐阜県', '関ケ原町', '関ヶ原駅', '岐阜関ケ原古戦場記念館', '笹尾山'],
  style_genre: 'fountain_pen_sketchbook',
  title: '天下分け目の山あい・関ケ原の陣跡を歩く',
  description:
    '伊吹山と鈴鹿山脈に抱かれ、日本の歴史を大きく動かした関ケ原の合戦の舞台となった岐阜県不破郡関ケ原町。徳川家康最後陣地から、「伊吹庵」の合戦ランチ、古戦場記念館での体感展示、ふれあいセンター内の喫茶での小憩を経て、駅前の観光交流館でのお土産選びまでを巡る。',
  eyecatch_prompt:
    'Fountain pen ink and transparent watercolor architectural travel sketch of Sekigahara historic battlefield valley in Gifu, showing traditional wooden camp palisades on grassy hillside beneath misty Mount Ibuki, stone monuments, and quiet mountain lanes on natural textured cream paper, no text, no people.',
  question:
    '天下分け目の山あいを歩いたあと、最初に誰かへ伝えたいのはどの瞬間ですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「徳川家康最後陣地（床几場）」の木陰に立ち、勝敗が決した盆地の広がりを見渡した瞬間',
      subtext:
        '今は穏やかな公園となったこの地で、かつて東西十数万の兵が対峙した緊張感に思いを馳せた。',
      badge: {
        code: 'sekigahara_ieyasu_camp',
        name_ja: '関ケ原・家康最後陣地の旅人',
        subtitle_en: 'Visitor of Ieyasu Final Camp',
        description:
          '徳川家康最後陣地（床几場）を訪ね、天下分け目の決戦を指揮した歴史の舞台に立った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a quiet historic stone monument framed by pine branches and mountain valley hills in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「岐阜関ケ原古戦場記念館」の展望室から、実際の陣跡と合戦場の地形を一望した瞬間',
      subtext:
        '体験型の展示と五階展望室からのパノラマが結びつき、山あいの要衝たる地形の妙が腑に落ちた。',
      badge: {
        code: 'sekigahara_memorial_museum',
        name_ja: '関ケ原古戦場記念館・合戦の知を読む者',
        subtitle_en: 'Observer of Sekigahara Memorial Museum',
        description:
          '岐阜関ケ原古戦場記念館を訪ね、関ケ原合戦の全貌と盆地の地形を体感した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a sleek modern museum glass pavilion overlooking distant mountain ridges and autumn trees in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '関ケ原ふれあいセンター内の「喫茶 ふうせん」で、穏やかな午後の珈琲を味わった瞬間',
      subtext:
        '地元の人々や旅人が気軽に集う温かい喫茶室で、歴史散策の余韻に浸りながら心地よく一息ついた。',
      badge: {
        code: 'sekigahara_fusen_cafe',
        name_ja: '関ケ原・喫茶 ふうせんの寛ぎ人',
        subtitle_en: 'Guest of Cafe Fusen Sekigahara',
        description:
          '関ケ原ふれあいセンター内の喫茶 ふうせんを訪ね、散策の合間に穏やかな時間を楽しんだ証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring a ceramic coffee cup and toasted golden sandwich beside mountain ridge silhouettes in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '関ヶ原駅前の「観光交流館 いざ！関ケ原」で、美濃の名産やオリジナルグッズを選んだ瞬間',
      subtext:
        '歩くことで深まった歴史への親しみを胸に、関ケ原ならではの記念品を旅の思い出に持ち帰った。',
      badge: {
        code: 'sekigahara_iza_station',
        name_ja: 'いざ！関ケ原・古戦場旅の案内人',
        subtitle_en: 'Traveler of Iza Sekigahara',
        description:
          '関ケ原駅前観光交流館を訪ね、古戦場の歴史を辿る旅の記念品を手に入れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting handcrafted folding fans and traditional Mino-washi paper keepsakes arranged on a wooden counter in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sekigahara_complete',
    name_ja: '関ケ原・天下分け目の史跡を歩みし者',
    subtitle_en: 'Walker of Sekigahara Battlefield',
    description:
      '徳川家康最後陣地から伊吹庵、岐阜関ケ原古戦場記念館、喫茶 ふうせん、関ケ原駅前観光交流館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining Mount Ibuki ridge, wooden battlefield palisades, and traditional folded paper keepsakes in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '徳川家康最後陣地',
      spot_type: '見どころ',
      description:
        '慶長五年九月の関ケ原合戦において、徳川家康が本陣を移し全軍を指揮した「床几場」の史跡。現在は陣場野公園として整備されている。終日散策自由。',
      address: '岐阜県不破郡関ケ原町関ケ原959-2',
      prefecture: '岐阜県',
      city: '関ケ原町',
      lat: 35.365584,
      lng: 136.465167,
      clue: 'JR東海道本線の関ヶ原駅を出て北西へ歩くと、静かな木立に囲まれた「徳川家康最後陣地（陣場野公園）」に着く（終日散策自由）。関ケ原の合戦において、家康が桃配山から本陣を前線へと進め、東西の勝敗が決した歴史的瞬間に指揮を執った「床几場」と伝わる場所だ。今では鳥の声が響く穏やかな公園の石碑の前に立ち、往時の大一番にじっくり思いを馳せながら、ここで最初のしるしを力強く刻み出そう。',
      surprise:
        '合戦終結後、家康はこの床几場にて諸将から首実検を受けたと伝えられる。今は街なかの穏やかな一画でありながら、すぐ先に古戦場記念館や決戦地が広がり、歩くほどに関ケ原の合戦の息づかいと歴史の重みが立体的に鮮やかに浮かび上がってくるような心地がする。',
      hook: '家康最後陣地を後にしたら、東南東へ徒歩2分のレストラン伊吹庵へ向かおう。',
      f7_fragment: '陣場野の木立に佇む歴史の石碑と、勝敗を見届けた静かな盆地の涼風。',
      f7_full: '徳川家康最後陣地（床几場）を訪ね、天下分け目の合戦を決した歴史の舞台の穏やかな現在にじっくりと深く触れられた。',
      image_prompt:
        'Wide morning view of a peaceful Japanese historic park in Sekigahara with a weathered stone monument shaded by pine trees and distant misty mountains, no text, no people.',
    },
    {
      name: '伊吹庵',
      spot_type: '食事',
      description:
        '岐阜関ケ原古戦場記念館別館内のレストラン＆カフェ。東西の味を盛り込んだ「関ケ原合戦定食」や武将パフェが楽しめる。営業時間9:30〜17:00（ランチ11:00〜15:00）、月曜休。',
      address: '岐阜県不破郡関ケ原町関ケ原894-92',
      prefecture: '岐阜県',
      city: '関ケ原町',
      lat: 35.36529,
      lng: 136.466244,
      clue: '家康最後陣地から東南東へ徒歩2分、記念館別館の「伊吹庵（いぶきあん）」で昼食にしよう（ランチ11:00〜15:00、月曜休）。東西の味を詰め込んだ合戦定食を堪能しよう。',
      surprise:
        '東軍・西軍の食文化をイメージして、赤味噌と白味噌、角餅と丸餅など東西の味を一つの膳で楽しめるユニークなメニューが旅人に大人気だ。食の面からも関ケ原の「東西の交わり」を楽しく実感できる食事処として多くの人々から広くずっと長く愛され親しまれる。',
      hook: '伊吹庵で力を蓄えたら、すぐ北の岐阜関ケ原古戦場記念館へ入館しよう。',
      f7_fragment: '東西の味覚が一つに並ぶ合戦定食、往時のロマンを味わう昼の膳。',
      f7_full: '古戦場記念館別館の「伊吹庵」で東西の味を盛り込んだ名物ランチを味わい、歴史散策の英気をしっかり心から養い満たした。',
      image_prompt:
        'Medium-wide interior view of a bright modern Japanese restaurant dining table with a lacquer bento lunch set featuring grilled meat, miso soup, and rice balls, no text, no people.',
    },
    {
      name: '岐阜関ケ原古戦場記念館',
      spot_type: '見どころ',
      description:
        '関ケ原合戦を最新の映像と資料で体感できる県立記念館。五階の展望室からは古戦場の全貌と周囲の山並みを360度一望できる。開館9:30〜17:00（月曜休・入館料あり）。',
      address: '岐阜県不破郡関ケ原町関ケ原894-92',
      prefecture: '岐阜県',
      city: '関ケ原町',
      lat: 35.365486,
      lng: 136.466164,
      clue: '伊吹庵のすぐ北隣にそびえる「岐阜関ケ原古戦場記念館」を見学しよう（9:30〜17:00、月曜休・入館料あり）。一階の大型スクリーンや床面シアターで合戦の推移を臨場感たっぷりに学んだら、最上階の展望室へ上がってみよう。四方を山に囲まれた関ケ原の盆地と、先ほどまで歩いてきた史跡の位置関係が360度のパノラマで一望でき、なぜここが歴史の舞台となったかが目の前に鮮やかに見えてくる。',
      surprise:
        '総ガラス張りの展望室からは伊吹山や南宮山、さらには石田三成が布陣した笹尾山まで一望のもとに見渡せる。事前予約制のシアター映像と実景の照合によって、初めて関ケ原を訪れた人でも合戦の構図が手に取るように理解できるよう細やかに工夫が丁寧に凝らされた。',
      hook: '記念館を堪能したら、北東へ徒歩2分の喫茶 ふうせんで珈琲を一服しよう。',
      f7_fragment: '五階展望室から360度に広がる盆地の絶景、古戦場を見渡す特等席。',
      f7_full: '岐阜関ケ原古戦場記念館を訪ね、臨場感ある展示と展望室からのパノラマで天下分け目の地形の妙をじっくり深く体感した。',
      image_prompt:
        'Top-down flatlay detail of an illustrated battlefield terrain map sheet, brass compass, and a ceramic teacup on a dark oak tabletop inside a modern study, no text, no letters, no people.',
    },
    {
      name: '喫茶 ふうせん',
      spot_type: '休憩',
      description:
        '関ケ原ふれあいセンター内にある、地域の人々や旅人に親しまれるアットホームな喫茶室。丁寧な珈琲やモーニング、軽食を楽しめる。営業時間8:00〜17:00、月曜定休。',
      address: '岐阜県不破郡関ケ原町関ケ原894-29',
      prefecture: '岐阜県',
      city: '関ケ原町',
      lat: 35.366329,
      lng: 136.467021,
      clue: '記念館から北東へ徒歩2分に建つ関ケ原ふれあいセンター内の「喫茶 ふうせん」で足を休めよう（8:00〜17:00、月曜定休）。地元の方や歴史散策の旅人に愛される温かい喫茶室で、淹れたての珈琲や甘いトースト、季節の軽食をゆったり味わうことができる。古戦場記念館での感動を振り返りながら、穏やかな山里の空気に包まれてここまでの歩き疲れをここでじっくりと心から心地よく癒やそう。',
      surprise:
        '関ケ原のまちの中心にありながら落ち着いて一息つける憩いの場として、長年地域に根づいてきた喫茶室だ。観光の合間に地元ならではの温かな雰囲気に触れられるため、史跡巡りの途中の休息地として多くの人々から今もずっと変わらず親しまれ愛されている。',
      hook: '喫茶 ふうせんで寛いだら、南東へ徒歩7分の関ケ原駅前観光交流館へ戻ろう。',
      f7_fragment: 'ふれあいセンターに漂う珈琲の香りと、旅の疲れを癒やす温かい喫茶室。',
      f7_full: '関ケ原ふれあいセンター内の「喫茶 ふうせん」で珈琲を味わい、歴史散策の合間に穏やかな寛ぎの時間を心から過ごした。',
      image_prompt:
        'Low-angle interior view of a warm local Japanese kissaten cafe table with a ceramic cup of dark roasted coffee and toasted bread beside a sunlit window, no text, no people.',
    },
    {
      name: '関ケ原駅前観光交流館',
      spot_type: '買い物',
      description:
        'JR関ヶ原駅目の前にある愛称「いざ！関ケ原」の観光拠点。関ケ原オリジナルの戦国グッズや美濃の地場産品が豊富に揃う。営業時間9:00〜17:00（冬期16:30まで）、火曜休。',
      address: '岐阜県不破郡関ケ原町関ケ原598-4',
      prefecture: '岐阜県',
      city: '関ケ原町',
      lat: 35.363384,
      lng: 136.470595,
      clue: '喫茶 ふうせんから南東へ徒歩7分、JR関ヶ原駅のすぐ目の前に建つ「関ケ原駅前観光交流館（いざ！関ケ原）」で旅を締めくくろう（9:00〜17:00・12〜2月は16:30まで、火曜休）。館内には武将にちなんだオリジナルグッズや関ケ原銘菓、美濃和紙や関の刃物といった岐阜の誇る名産品がずらりと並ぶ。山あいの陣跡を巡った思い出を胸に、お気に入りの一品を大切な旅の土産に選び取ろう。',
      surprise:
        '鉄道で関ケ原を訪れた旅人の玄関口として、観光情報の案内からレンタサイクル、土産物の販売までを一手に担う便利な拠点だ。駅に直結した立地のため、電車の発車時刻までゆったりと地元の特産品や伝統工芸品の数々を落ち着いてじっくり楽しく選ぶことができる。',
      hook: '',
      f7_fragment: '関ヶ原駅前に並ぶ美濃の名産と戦国グッズ、旅の余韻を包む交流館。',
      f7_full: '関ケ原駅前観光交流館で岐阜の名産と旅の記念品を手に取り、天下分け目の史跡を巡り歩いた旅を美しく心から締めくくった。',
      image_prompt:
        'Golden-hour view of a bright wooden station-front souvenir shop counter displaying traditional folded paper fans, Mino-washi crafts, and boxed local sweets under warm lamps, no text, no people.',
    },
  ],
};
