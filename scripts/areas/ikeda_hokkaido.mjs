export default {
  slug: 'ikeda_hokkaido',
  station_order: 946,
  station: '池田',
  line: 'JR根室本線',
  area_name: '十勝池田・ワイン城',
  prefecture: '北海道',
  municipality: '池田町',
  category: 'グルメ・歴史',
  budget_tier: 2,
  tags: ['根室本線', 'いけだワイン城', 'いけだ牛', 'エゾヤマザクラ', '池田神社'],
  style_genre: 'ink_and_watercolor',
  title: '十勝ワインの丘と歴史息づく駅前の散策路',
  description:
    'JR池田駅からいけだ牛の名店レストランよねくら、池田神社、丘の上のいけだワイン城、桜の名所・清見ヶ丘公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Ikeda in Tokachi, Hokkaido, featuring a charming European-style stone wine castle perched on a sunlit green hill amidst blooming pink mountain cherry trees, with a classic northern train station below, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び十勝・池田を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅前の老舗で味わう名物いけだ牛の一皿',
      subtext: '柔らかな地元ブランド牛のサーロインステーキを堪能した',
      badge: {
        code: 'ikeda_hokkaido_yonekura',
        name_ja: 'いけだ牛の美食家',
        subtitle_en: 'Ikeda Beef Gourmet',
        description:
          '池田駅前の老舗・レストランよねくらで、名物「いけだ牛」の芳醇な一皿を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sizzling cast-iron steak plate garnished with herbs on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治の開拓期から町を見守る池田神社の杜',
      subtext: '歴史ある社殿の前で静かに手を合わせ、町の歩みに触れた',
      badge: {
        code: 'ikeda_hokkaido_shrine',
        name_ja: '開拓の杜を仰ぐ参拝者',
        subtitle_en: 'Pilgrim of Ikeda Shrine',
        description:
          '明治34年創祀に始まる池田神社の静かな杜で、町の開拓史に思いを馳せたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a dignified Shinto torii gate surrounded by northern evergreens on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '清見の丘にそびえる古城・いけだワイン城',
      subtext: '地下熟成室の香りと十勝ワインの豊かな歴史に触れた',
      badge: {
        code: 'ikeda_hokkaido_winecastle',
        name_ja: '十勝ワインの城主',
        subtitle_en: 'Master of Wine Castle',
        description:
          '昭和49年オープンのいけだワイン城を訪れ、地下熟成室や十勝ワインの魅力に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a stone wine castle turret beside oak wine barrels and grape clusters on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '桜と十勝の風が心地よい高台の清見ヶ丘公園',
      subtext: '約600本のエゾヤマザクラが彩る公園で爽やかな風に吹かれた',
      badge: {
        code: 'ikeda_hokkaido_kiyomigaoka',
        name_ja: '清見ヶ丘の風を聴く者',
        subtitle_en: 'Breeze of Kiyomigaoka',
        description:
          'ワイン城北側の清見ヶ丘公園を訪れ、高台の芝生とベンチで心地よく休息したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of pink cherry blossoms floating over a hilltop wooden bench on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'ikeda_hokkaido_complete',
    name_ja: '十勝池田・ワイン城と美食の旅人',
    subtitle_en: 'Traveler of Tokachi Ikeda',
    description:
      'JR池田駅からレストランよねくら、池田神社、いけだワイン城、清見ヶ丘公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting the stone Wine Castle, cherry blossoms, and a Shinto torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR池田駅',
      lat: 42.920992,
      lng: 143.453239,
      address: '北海道中川郡池田町字東1条32-1',
      description:
        '明治37年（1904年）12月15日に開業した、十勝ワインのふるさと・池田町の玄関口（窓口営業時間あり）。駅前から歴史とグルメの散策が始まる。',
      clue:
        '明治三十七年十二月に開業し、十勝ワインのふるさととして知られる池田町の玄関口「JR池田駅」から楽しい街歩きと散策を始めよう（終日利用可）。丘の上にそびえるワイン城の気配を遠くに感じながら駅前へ外へ出たら、まずはすぐ西側に建ついけだ牛の名店「レストランよねくら」を目指して、澄んだ十勝の美味しい空気と心地よい風を感じながらのんびり楽しく元気に笑顔で力強く爽やかに外へ歩き出そう。',
      hook: '駅前から西方向へ徒歩約1分',
      f7_fragment: '明治三十七年開業、十勝ワインのふるさと・池田町の玄関口。',
      f7_full: '「JR池田駅」を後にし、いけだ牛とワインの丘を巡る池田の散策へ踏み出した。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'レストランよねくら',
      lat: 42.92109,
      lng: 143.452444,
      address: '北海道中川郡池田町字大通1-27',
      description:
        'JR池田駅前の老舗洋食店（9:00〜17:00・L.O.16:00頃、木曜休）。柔らかな地元ブランド牛「いけだ牛」を使ったサーロインステーキ丼やカットステーキが名物。',
      clue:
        '駅前の老舗洋食店「レストランよねくら」で名物いけだ牛の柔らかなステーキを堪能しよう（9:00〜17:00、木曜休）。食後は北東の「池田神社」へ向かおう。',
      hook: '大通から北東方向へ徒歩約8分',
      f7_fragment: '柔らかい地元ブランド牛「いけだ牛」のステーキが名物の駅前老舗洋食店。',
      f7_full: '「レストランよねくら」で芳醇ないけだ牛を味わい、旅の活力をしっかり養った。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '池田神社',
      lat: 42.927016,
      lng: 143.454577,
      address: '北海道中川郡池田町字旭町1-7-5',
      description:
        '明治34年（1901年）8月に社殿が建築され、大正11年（1922年）8月25日に現在地に創立許可された歴史ある神社（参拝自由、御朱印9:00〜17:00）。',
      clue:
        '明治三十四年に社殿が建てられ、大正十一年に現在地へ創立許可された長い歴史を誇る「池田神社」へ丁寧に心を込めてゆっくりと爽やかに参拝しよう（参拝自由、御朱印9:00〜17:00）。凛とした空気が満ちる静かな杜の中で静かに手を合わせれば、池田町の開拓期からの歩みが胸に静かに響いてくる。旅の安全を祈ったら、南〜南南東の丘の上へ歩いて「いけだワイン城」へと楽しく元気に明るく向かおう。',
      hook: '旭町から南〜南南東の丘上へ徒歩約12〜15分',
      f7_fragment: '明治三十四年建築の社殿に始まる歴史を刻み、町の開拓を見守る神社。',
      f7_full: '「池田神社」の静かな杜に参拝し、開拓の記憶に手を合わせて心を整えた。',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: 'いけだワイン城（池田町ブドウ・ブドウ酒研究所）',
      lat: 42.919024,
      lng: 143.457896,
      address: '北海道中川郡池田町字清見83-4',
      description:
        '昭和49年（1974年）オープン、令和2年（2020年）6月に大規模刷新された町のシンボル（9:00〜17:00・レストラン11:00〜、年末年始休）。地下熟成室見学や十勝ワインの試飲・購入が楽しめる。',
      clue:
        '昭和四十九年誕生、令和二年六月にリニューアルされた池田のシンボル「いけだワイン城（池田町ブドウ・ブドウ酒研究所）」をじっくり楽しく元気に笑顔で訪ねよう（9:00〜17:00、年末年始休）。ヨーロッパの古城のような佇まいの館内では、地下熟成室の芳醇な香りに包まれたり限定十勝ワインや特産品を選んだりできる。ワイン文化の魅力を満喫したら、すぐ北側の「清見ヶ丘公園」へと向かおう。',
      hook: 'ワイン城から北〜北北西方向へ徒歩約12分',
      f7_fragment: 'ヨーロッパの古城風の佇まいを持ち、地下熟成室見学やワイン購入を楽しめる名所。',
      f7_full: '「いけだワイン城（池田町ブドウ・ブドウ酒研究所）」で十勝ワインの魅力に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '清見ヶ丘公園',
      lat: 42.927365,
      lng: 143.455551,
      address: '北海道中川郡池田町字清見ヶ丘1',
      description:
        'ワイン城の北側に広がる高台の公園（通年散策可、パークゴルフ場等は5〜10月）。春は約600本のエゾヤマザクラが咲き誇る桜の名所で、ベンチや芝生でひと休みできる。',
      clue:
        '旅の締めくくりは、ワイン城のすぐ北側に広がる見晴らしの良い高台の公園「清見ヶ丘公園」のベンチでゆったりと心地よく楽しく爽やかに休憩しよう（園内通年散策可）。春には約六百本ものエゾヤマザクラが咲き誇る美しい園内で十勝の爽やかな風を感じながら一息つけば、心地よい旅の余韻が広がっていく。ワインの丘と駅前の味覚を巡った池田の散歩を、晴れやかな笑顔で明るく心地よく締めくくろう。',
      hook: '',
      f7_fragment: 'ワイン城の北側に広がり、約600本のエゾヤマザクラが彩る高台の憩いの公園。',
      f7_full: '「清見ヶ丘公園」の高台のベンチで十勝の風を感じ、池田の散策を爽やかに終えた。',
    },
  ],
};
