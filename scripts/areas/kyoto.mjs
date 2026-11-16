export default {
  slug: 'kyoto',
  station_order: 668,
  station: '京都',
  line: '東海道新幹線',
  area_name: '京都・駅南東の大伽藍と庭園',
  prefecture: '京都府',
  municipality: '京都市',
  category: '歴史と寺社',
  budget_tier: 3,
  tags: ['京都府', '京都市', '京都駅', '五重塔', '世界遺産'],
  style_genre: 'ukiyo_e_modern',
  title: '京都・東寺の五重塔から本願寺と渉成園へ',
  description:
    'JR京都駅から、駅構内で創業の味を楽しめる「イノダコーヒ 八条口支店」、日本一高い木造五重塔がそびえる世界遺産「東寺（教王護国寺）」、唐門や御影堂が壮麗な「西本願寺」、世界最大級の木造伽藍「東本願寺」、名勝池泉庭園「渉成園」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Kyoto around Kyoto Station showing the towering five-story wooden pagoda of To-ji Temple reflected in a lotus pond, the monumental tiled roofs of Higashi and Nishi Hongan-ji temples, a tranquil garden pavilion with stone bridge at Shosei-en, and a classic coffee cup, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '京都駅を起点に千年の大伽藍と名勝庭園、老舗の珈琲を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「イノダコーヒ 八条口支店」で、創業以来の深い香りの珈琲を味わった瞬間',
      subtext:
        '旅の出発点・京都駅でいただくクラシックな一杯が、千年の都への歩みを優雅に整えてくれた。',
      badge: {
        code: 'kyoto_inoda',
        name_ja: '京都・老舗珈琲の香りで旅立ちし者',
        subtitle_en: 'Guest of Inoda Coffee Hachijoguchi',
        description:
          'イノダコーヒ 八条口支店を訪ね、京都の老舗珈琲文化の味わいで旅を始めた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a classic white porcelain coffee cup and saucer beside a silver creamer and toasted sandwich on a red tablecloth, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「東寺（教王護国寺）」の境内で、日本一高い木造の五重塔を仰ぎ見た瞬間',
      subtext:
        '平安京の時代から京都の玄関口を見守り続ける塔の威容に、思わず息を呑んだ。',
      badge: {
        code: 'kyoto_toji',
        name_ja: '京都・東寺の五重塔を仰ぎ見し者',
        subtitle_en: 'Visitor of To-ji Temple',
        description:
          '東寺（教王護国寺）を訪ね、日本一高い木造建築・五重塔を拝観した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the towering five-story wooden pagoda of To-ji rising above green pine trees and calm pond water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「西本願寺」の広大な境内に立ち、国宝の御影堂と阿弥陀堂の壮麗さに触れた瞬間',
      subtext:
        '桃山文化の粋を今に伝える大伽藍の静けさが、街の賑わいを忘れさせてくれた。',
      badge: {
        code: 'kyoto_nishihonganji',
        name_ja: '京都・西本願寺の大伽藍を訪ねし者',
        subtitle_en: 'Visitor of Nishi Hongan-ji Temple',
        description:
          '西本願寺を訪ね、世界遺産に登録された桃山文化の大伽藍を参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the sweeping dark tiled roofs of Nishi Hongan-ji Temple and a golden ginkgo tree in the courtyard, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「渉成園」の印月池のほとりを歩き、都心とは思えない静かな庭園を眺めた瞬間',
      subtext:
        '木々の向こうに京都タワーが顔を覗かせる借景の美しさに、新旧が調和する京都を感じた。',
      badge: {
        code: 'kyoto_shoseien',
        name_ja: '京都・渉成園の池泉を愛でし者',
        subtitle_en: 'Walker of Shosei-en Garden',
        description:
          '渉成園を訪ね、国指定名勝の池泉庭園で静かな散策を締めくくった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a tranquil Kyoto pond garden with an arched wooden bridge, stone lantern, and lotus leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kyoto_complete',
    name_ja: '京都・大伽藍と名勝庭園を巡る旅人',
    subtitle_en: 'Walker of Kyoto Station Area',
    description:
      'イノダコーヒ 八条口支店から東寺、西本願寺、東本願寺、渉成園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the five-story pagoda of To-ji, the grand temple roof of Hongan-ji, and a serene garden bridge, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'イノダコーヒ 八条口支店',
      spot_type: '休憩',
      description:
        '昭和15年創業の京都を代表する老舗珈琲店の駅構内店舗。看板メニュー「アラビアの真珠」やモーニングを旅の始まりに楽しめる。8:00〜20:00（L.O.19:30）、無休。',
      address: '京都府京都市下京区東塩小路高倉町8-3 JR京都駅八条口1F',
      prefecture: '京都府',
      municipality: '京都市',
      lat: 34.984569,
      lng: 135.759335,
      clue: '昭和15年創業、京都の朝を支え続けてきた老舗喫茶「イノダコーヒ 八条口支店」から千年の都の散策を始めよう（8:00〜20:00・年中無休）。JR京都駅構内にありながらクラシックな趣を大切にしており、深煎りで香り豊かな看板ブレンド「アラビアの真珠」や伝統のモーニングを味わえる。京都らしい落ち着きに満ちた一杯で心を優しく整え、これから巡る大伽藍への旅を軽やかに踏み出したい。',
      surprise:
        'イノダコーヒでは創業当初からコーヒーに砂糖とミルクをあらかじめ入れて提供するスタイルが伝統となっており、注文時に好みを伝えることができます。',
      hook: '老舗の一杯で目覚めたら、西南西へ歩いて世界遺産の東寺へ向かおう。',
      f7_fragment: '京都駅構内で昭和15年創業の味わいを楽しめる老舗珈琲店。',
      f7_full:
        '「イノダコーヒ 八条口支店」で伝統の珈琲を味わい、京都の旅を優雅に始めた。',
      image_prompt:
        'Classic Kyoto kissaten cafe interior illustration of Inoda Coffee, red velvet seating, brass lamps, white porcelain coffee cup and silver milk pitcher on crisp white linen, warm morning light, no text, no letters.',
    },
    {
      name: '東寺（教王護国寺）',
      spot_type: '見どころ',
      description:
        '平安京遷都とともに創建された真言宗の総本山で世界遺産。高さ約55mの日本一高い木造五重塔が京都の象徴としてそびえる。境内5:00〜17:00（金堂・講堂8:00〜17:00、大人800円）。',
      address: '京都府京都市南区九条町1',
      prefecture: '京都府',
      municipality: '京都市',
      lat: 34.980339,
      lng: 135.747693,
      clue: '平安京遷都とともに創建され、のちに弘法大師空海へ託された真言宗の総本山「東寺（教王護国寺）」を訪ねよう（金堂・講堂8:00〜17:00、大人800円）。境内にそびえる高さ約55メートルの国宝・五重塔は木造建築として日本一の高さを誇り、講堂では立体曼荼羅の仏像群を拝観できる。千二百年の祈りが息づく世界遺産の壮麗な威容を、これからも歴史の重みとともにしっかりと深く仰ぎ見たい。',
      surprise:
        '毎月21日には弘法大師の命日にちなんだ縁日「弘法市」が開かれ、境内いっぱいに骨董品や古着、植木などの露店が並びます。',
      hook: '五重塔を仰いだら、北北東へ歩いて世界遺産の西本願寺へ向かおう。',
      f7_fragment: '高さ約55mの日本一高い木造五重塔がそびえる、真言宗総本山の世界遺産。',
      f7_full:
        '「東寺（教王護国寺）」の境内で日本一高い五重塔を仰ぎ見、平安京からの歴史に触れた。',
      image_prompt:
        'Iconic Kyoto temple illustration of To-ji Five-Story Pagoda, soaring wooden pagoda reflected in a tranquil garden pond framed by pine branches and autumn maples, soft morning sky, no text, no letters.',
    },
    {
      name: '西本願寺',
      spot_type: '見どころ',
      description:
        '浄土真宗本願寺派の本山で世界遺産。国宝の御影堂・阿弥陀堂や豪華な唐門など桃山文化の粋を伝える。5:30〜17:00、境内参拝無料。',
      address: '京都府京都市下京区堀川通花屋町下る本願寺門前町60',
      prefecture: '京都府',
      municipality: '京都市',
      lat: 34.992012,
      lng: 135.754363,
      clue: '浄土真宗本願寺派の本山「西本願寺」を参拝しよう（5:30〜17:00・境内無料）。世界遺産の御影堂や阿弥陀堂、桃山文化を伝える唐門の壮麗さに心を澄ませたい。',
      surprise:
        '御影堂の前に立つ樹齢約400年の大イチョウは「水吹き銀杏」と呼ばれ、火災の際に水を噴き出して本堂を守ったという伝説が残っています。',
      hook: '桃山の大伽藍を拝観したら、東へ歩いてもうひとつの本山・東本願寺へ向かおう。',
      f7_fragment: '国宝の御影堂と阿弥陀堂がそびえ、桃山文化を今に伝える世界遺産。',
      f7_full:
        '「西本願寺」の広大な境内で国宝の御影堂と唐門を拝観し、壮麗な伽藍の静けさに触れた。',
      image_prompt:
        'Grand Japanese Buddhist temple illustration of Nishi Hongan-ji in Kyoto, monumental dark tiled roofs of Goeido Hall rising above a wide white gravel courtyard beside an ancient golden ginkgo tree, no text, no letters.',
    },
    {
      name: '東本願寺',
      spot_type: '見どころ',
      description:
        '烏丸通に面してそびえる真宗大谷派の本山（真宗本廟）。世界最大級の木造建築である御影堂が旅人を迎える。3〜10月5:50〜17:30（11〜2月6:20〜16:30）、参拝無料。',
      address: '京都府京都市下京区烏丸通七条上る常葉町754',
      prefecture: '京都府',
      municipality: '京都市',
      lat: 34.990446,
      lng: 135.75956,
      clue: '烏丸通に面して堂々と姿を現す真宗大谷派の本山「東本願寺（真宗本廟）」を訪ねよう（3〜10月5:50〜17:30・冬期6:20〜16:30、参拝無料）。明治時代に再建された御影堂は世界最大級の木造建築として知られ、広大な畳敷きの堂内に座ると木の香りと静謐な空気に包まれる。御影堂門の荘厳な佇まいを仰ぎ見ながら、人々の祈りが支えた歴史の厚みをこれからも静かにしっかりと深く感じたい。',
      surprise:
        '御影堂の再建時に巨大な木材を引き上げるために使われた、全国から寄進された「毛綱」が現在も堂内の廊下に展示されています。',
      hook: '広大な御影堂を後にしたら、東へすぐの飛地境内・渉成園で旅を結ぼう。',
      f7_fragment: '世界最大級の木造建築・御影堂が烏丸通にそびえる真宗大谷派の本山。',
      f7_full:
        '「東本願寺」の広大な御影堂に座り、木の香りと静謐な空気に包まれるひとときを過ごした。',
      image_prompt:
        'Imposing Kyoto temple gate and hall illustration of Higashi Hongan-ji, massive carved wooden Goeido-mon Gate and sweeping temple roof overlooking stone moat along Karasuma street, clear afternoon light, no text, no letters.',
    },
    {
      name: '渉成園',
      spot_type: '見どころ',
      description:
        '東本願寺の飛地境内にある国指定名勝の池泉庭園（枳殻邸）。印月池の周囲に書院や茶室、侵雪橋などが配される。3〜10月9:00〜17:00（11〜2月〜16:00）、参拝寄付金700円以上。',
      address: '京都府京都市下京区下珠数屋町通間之町東入東玉水町1',
      prefecture: '京都府',
      municipality: '京都市',
      lat: 34.991319,
      lng: 135.762883,
      clue: '東本願寺のすぐ近くに位置する飛地境内「渉成園（枳殻邸）」で旅を締めくくろう（3〜10月9:00〜17:00・冬期〜16:00、参拝寄付金700円以上）。周囲に生垣としてカラタチが植えられていたことから枳殻邸とも呼ばれ、広大な印月池を中心に茶室や木造の侵雪橋が美しく配された国指定名勝の池泉庭園だ。都心とは思えない静寂の中で、千年の都を巡った余韻をこれからも上品に結びたい。',
      surprise:
        '庭園の池越しに京都タワーを望むこともでき、江戸時代の石川丈山による作庭と現代の京都の風景がひとつの景色に溶け合っています。',
      hook: '',
      f7_fragment: '東本願寺の飛地境内に広がる国指定名勝の池泉庭園、四季の風情が豊か。',
      f7_full:
        '「渉成園」の印月池のほとりを歩き、都心の静寂に包まれて京都の散策を締めくくった。',
      image_prompt:
        'Serene Kyoto pond garden illustration of Shosei-en, curved wooden Shinsetsu Bridge crossing tranquil Ingetsu Pond lined with lotus, weeping willows and a thatched tea pavilion, warm late afternoon light, no text, no letters.',
    },
  ],
};
