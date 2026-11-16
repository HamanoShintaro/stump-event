export default {
  slug: 'oiso',
  station_order: 591,
  station: '大磯駅',
  line: 'JR東海道本線',
  area_name: '大磯・湘南発祥の松並木と文豪の街',
  prefecture: '神奈川県',
  municipality: '中郡大磯町',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['神奈川県', '大磯町', '大磯駅', '鴫立庵', '旧東海道'],
  style_genre: 'ghibli_impasto_gouache',
  title: '湘南の潮風と古刹の梅・大磯の旧道を巡る',
  description:
    '古くは東海道八番目の宿場町として栄え、明治期には海浜保養地と政財界人の別荘地として名を馳せた神奈川県大磯町。文豪が眠る古刹の梅林から、築八十年の古民家定食、日本三大俳諧道場の茅葺き庵、創業百四十余年の蒲鉾店を経て、大磯港の複合施設まで、海と歴史が溶け合う小径を歩く。',
  eyecatch_prompt:
    'High-angle panoramic spring gouache illustration of Oiso coastal town in Kanagawa, lush emerald pine groves along the old Tokaido road, a thatched-roof hermitage garden, and shimmering Sagami Bay waters under a clear sky with soft cherry blossoms, no text, no people.',
  question:
    '文豪の記憶と湘南の潮風が息づく大磯で、旅の相棒にどれをおすすめしますか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「地福寺」の梅林に囲まれた木立の中で、島崎藤村夫妻の墓前に手を合わせたとき',
      subtext:
        '『夜明け前』を書き上げた文豪が終の棲家に選んだ大磯の静謐さと、古寺の落ち着いた空気に心が洗われた。',
      badge: {
        code: 'oiso_jifukuji',
        name_ja: '地福寺・文豪の静寂に触れし者',
        subtitle_en: 'Visitor of Jifukuji Temple',
        description:
          '地福寺を訪ね、大磯を愛した島崎藤村の記憶と古刹の静けさに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting blossoming plum branches beside a weathered stone lantern and temple tiled eaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '日本三大俳諧道場「鴫立庵」の茅葺き庵で、湘南発祥の碑と庭の松を眺めたとき',
      subtext:
        '西行法師の歌に由来する名勝の佇まいと、江戸初期に「湘南」の名を刻んだ歴史の重みに深く惹かれた。',
      badge: {
        code: 'oiso_shigitatsuan',
        name_ja: '湘南発祥・鴫立庵の風雅を仰ぎし者',
        subtitle_en: 'Admirer of Shigitatsuan Hermitage',
        description:
          '日本三大俳諧道場の一つ鴫立庵を訪ね、西行ゆかりの歌枕と湘南の原点に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a traditional thatched-roof hermitage nestled among crooked coastal pine trees and stone garden lanterns, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '路地裏の古民家「茶屋町カフェ」で、木の温もりに包まれながら定食を味わったとき',
      subtext:
        '昭和の暮らしを伝える築八十年の建物で、肩の力を抜いて大磯の日常に溶け込む心地よさを実感した。',
      badge: {
        code: 'oiso_chayamachi_cafe',
        name_ja: '大磯古民家・茶屋町の食卓を囲みし者',
        subtitle_en: 'Guest of Chayamachi Cafe',
        description:
          '茶屋町カフェを訪ね、築八十年の古民家で大磯の穏やかな昼食を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring a warm wooden tray with a Japanese home-style set meal and teacup on an aged timber table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「大磯 井上蒲鉾店」で、石臼と伝統の技が守り抜くはんぺんや蒲鉾を求めたとき',
      subtext:
        '明治の創業以来、政財界人にも愛された無添加の手仕事が今も宿場町の一角で息づいていることに感動した。',
      badge: {
        code: 'oiso_inoue_kamaboko',
        name_ja: '大磯宿・石臼蒲鉾の技を称えし者',
        subtitle_en: 'Patron of Inoue Kamaboko',
        description:
          '大磯 井上蒲鉾店を訪ね、百年を超える伝統の練り物文化を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing delicate white steamed kamaboko fishcakes and fluffy hanpen arranged on a bamboo tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'oiso_complete',
    name_ja: '大磯・湘南発祥の小径を歩みし者',
    subtitle_en: 'Walker of Historic Oiso Coast',
    description:
      '地福寺から茶屋町カフェ、鴫立庵、大磯 井上蒲鉾店、OISO CONNECTまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a thatched hermitage roof, coastal pine trees, and gentle blue waves of Sagami Bay, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '地福寺',
      spot_type: '見どころ',
      description:
        '大磯駅近くの真言宗東寺派の古刹。境内の梅林の中に文豪・島崎藤村夫妻の墓所があることで知られる。境内散策自由。',
      address: '神奈川県中郡大磯町大磯1135',
      prefecture: '神奈川県',
      city: '大磯町',
      lat: 35.309496,
      lng: 139.314434,
      clue: '大磯駅を出て線路沿いを東へ進むと、こんもりとした緑に抱かれた古刹「地福寺」の門前に出る（境内散策自由）。かつてこの町で晩年を過ごした文豪・島崎藤村が愛した梅の古木が境内を彩り、苔むした静かな石碑が木漏れ日の下に佇んでいる。明治以降、海辺の別荘地としてだけでなく、多くの文学者たちが心の安らぎを求めて移り住んだ大磯の原風景と静謐な空気を、この寺の境内でじっくりと感じ取ろう。',
      surprise:
        '藤村が昭和十八年に大磯の自宅で亡くなった際、「遺髪と爪を愛した梅の木の下に」という生前の思いからこの寺に葬られたと伝わる。戦前から数多くの文化人が移り住んだ大磯の文芸史を今に伝える、静かな祈りの聖地として市民に親しまれている。',
      hook: '地福寺を後にしたら、西北西へ徒歩4分の茶屋町カフェへ向かおう。',
      f7_fragment: '梅の古木が枝を広げる静かな境内、文豪が愛した大磯の木漏れ日。',
      f7_full: '島崎藤村が終の棲家に選んだ町の古刹・地福寺を訪ね、多くの文化人が慕った梅の木陰と穏やかな静寂に触れた。',
      image_prompt:
        'A peaceful Japanese temple garden in Oiso with ancient gnarled plum trees, moss-covered stone lanterns, and a tiled sanctuary roof under crisp morning sunlight, no text, no people.',
    },
    {
      name: '茶屋町カフェ',
      spot_type: '食事',
      description:
        '大磯駅近くの路地裏に佇む、築80年の古民家を改装したカフェ食堂。手作りの「茶屋町定食」などが人気。営業時間11:00〜21:00（日曜20:00まで）、不定休。',
      address: '神奈川県中郡大磯町大磯1156-10',
      prefecture: '神奈川県',
      city: '大磯町',
      lat: 35.310232,
      lng: 139.312188,
      clue: '地福寺から西北西へ徒歩2分、緑の路地に佇む古民家「茶屋町カフェ」で昼食にしよう（11:00〜21:00・日曜20:00まで、不定休）。名物の茶屋町定食を味わい、ひと息つこう。',
      surprise:
        '築八十年を超える日本家屋の太い梁や建具をそのまま活かした空間は、かつて宿場町の裏通りで暮らした人々の息遣いを残している。大磯産の旬の野菜や相模湾で揚がった魚介を取り入れた手料理が、歩く旅人の足を優しく受け止めてくれる。',
      hook: '茶屋町カフェで満たされたら、南へ徒歩5分の鴫立庵を訪ねよう。',
      f7_fragment: '築八十年の古民家に差し込む柔らかな光と、湯気の立つ定食の温もり。',
      f7_full: '路地裏の古民家「茶屋町カフェ」で手作りの茶屋町定食を味わい、大磯の穏やかな日常の暮らしに溶け込んだ。',
      image_prompt:
        'Warm wooden interior of a renovated 80-year-old Japanese house cafe with a balanced home-style lunch tray, ceramic bowls, and sunlit veranda garden outside, no text, no people.',
    },
    {
      name: '鴫立庵',
      spot_type: '見どころ',
      description:
        '日本三大俳諧道場の一つで、「湘南」発祥の地とされる史跡。西行法師の和歌に由来する名勝。開庵時間9:00〜16:00、月曜休（祝日の場合は開庵）。',
      address: '神奈川県中郡大磯町大磯1289',
      prefecture: '神奈川県',
      city: '大磯町',
      lat: 35.307325,
      lng: 139.311897,
      clue: '茶屋町カフェから南へ徒歩5分、旧東海道沿いに茅葺き屋根が姿を現す「鴫立庵」を訪ねよう（9:00〜16:00、月曜休・祝日は開庵、入庵料あり）。京都の落柿舎、滋賀の無名庵と並ぶ日本三大俳諧道場の一つで、潮騒が聞こえる松林の庭には数多くの句碑が静かに並ぶ。江戸の昔から歌人や俳人が通い続けた風雅な庵の縁側で、松風と波音が織りなす五七五の世界にじっくりと耳を澄ませながら佇もう。',
      surprise:
        '寛文年間にこの庵を結んだ崇雪が建てた石標に「著尽湘南清絶地」と刻まれたことが、「湘南」という地名発祥の有力な由来となった。西行法師が秋夕の歌を詠んだ鴫立沢のほとりで、三百年以上経った今も俳句の会が地域の誇りとして受け継がれる。',
      hook: '鴫立庵を出たら、東へ徒歩2分の大磯 井上蒲鉾店へ立ち寄ろう。',
      f7_fragment: '松林に抱かれた茅葺きの庵と、庭の石碑に刻まれた湘南発祥の原点。',
      f7_full: '日本三大俳諧道場の鴫立庵を訪ね、西行法師ゆかりの歌枕と「湘南」発祥を伝える歴史の記憶を辿った。',
      image_prompt:
        'Top-down flatlay detail of a stone garden path, fallen pine needles, moss-covered stepping stones, and a weathered stone haiku monument in an ancient Japanese hermitage garden, no text, no kanji, no people.',
    },
    {
      name: '大磯 井上蒲鉾店',
      spot_type: '買い物',
      description:
        '明治十一年創業の老舗蒲鉾店。保存料を使わず石臼で練り上げた蒲鉾やはんぺん、さつま揚げが名物。営業時間8:30〜17:00、水曜定休。',
      address: '神奈川県中郡大磯町大磯1306',
      prefecture: '神奈川県',
      city: '大磯町',
      lat: 35.307124,
      lng: 139.313361,
      clue: '鴫立庵から東へ徒歩2分、旧東海道に面して暖簾を掲げる「大磯 井上蒲鉾店」に立ち寄ろう（8:30〜17:00、水曜定休）。相模湾の魚介を石臼で丹念にすり上げ、保存料を加えずに仕上げる真っ白なはんぺんや蒲鉾は、明治の創業以来この町に別荘を構えた歴代の政治家たちにも愛された逸品だ。職人の手仕事が息づく歴史ある店先で、旅の土産にぴったりの伝統の練り物をゆっくりと手に取ってみよう。',
      surprise:
        '店頭に並ぶ名物「梅花はんぺん」は、口に含むとほろりとほどける独特の柔らかさが特徴で、吉田茂元首相もこよなく好んだと伝わる。機械化が進む現代でも、魚のすり身を石臼で練る手間を惜しまず職人が一つずつ丁寧に作り続ける。',
      hook: '老舗の味を選んだら、東へ徒歩6分のOISO CONNECTで海を眺めよう。',
      f7_fragment: '旧東海道の店先に並ぶ真っ白なはんぺんと、石臼が守り抜く老舗の技。',
      f7_full: '明治創業の「大磯 井上蒲鉾店」で昔ながらの石臼製法に触れ、大磯の名産品である練り物を求めた。',
      image_prompt:
        'Low-angle view of a traditional wooden storefront along the old Tokaido road with a plain dark indigo fabric curtain (no text) and bamboo baskets of fresh white fishcakes displayed inside, no text, no people.',
    },
    {
      name: 'OISO CONNECT',
      spot_type: '休憩',
      description:
        '大磯港に建つ賑わい複合施設。1階には地場産品のマルシェ、2階には相模湾を一望できるカフェ＆レストランを備える。1階9:00〜17:00（無休）、2階11:00〜20:00（水曜休）。',
      address: '神奈川県中郡大磯町大磯1398-6',
      prefecture: '神奈川県',
      city: '大磯町',
      lat: 35.307142,
      lng: 139.317489,
      clue: '井上蒲鉾店から東へ徒歩6分、海風が心地よい大磯港の複合施設「OISO CONNECT」で足を休めよう（1階9:00〜17:00・無休、2階11:00〜20:00・水曜休）。二階のテラスからは相模湾の水平線と港に出入りする漁船を一望でき、地元食材を使ったスイーツや飲み物を片手に潮風を感じられる。歴史ある東海道の宿場から現代の海辺へと続く大磯の風景を、ゆっくりと目に焼き付けよう。',
      surprise:
        '大磯港は古くから相模湾の漁業拠点として栄え、施設の名称にも由来する渡り鳥「アオバト」が照ヶ崎海岸の岩礁へ海水を飲みに飛来する光景は県の天然記念物に指定された。歴史ある漁港の風景と豊かな自然が今もこの海辺に息づく。',
      hook: '',
      f7_fragment: '相模湾の水平線を望む港のテラスと、頬をなでる心地よい潮風。',
      f7_full: '大磯港の複合施設テラスで相模湾の青い海を眺めながら一息つき、宿場町と港の歩みを締めくくった。',
      image_prompt:
        'Golden-hour coastal harbor terrace overlooking shimmering Sagami Bay with warm sunset light reflecting on gentle waves and distant fishing boats, no text, no people.',
    },
  ],
};
