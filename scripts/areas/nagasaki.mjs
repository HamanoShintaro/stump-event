export default {
  slug: 'nagasaki',
  station_order: 659,
  station: '長崎',
  line: 'JR西九州新幹線',
  area_name: '長崎・出島と南山手の異国情緒',
  prefecture: '長崎県',
  municipality: '長崎市',
  category: '歴史とグルメ',
  budget_tier: 3,
  tags: ['長崎県', '長崎市', '長崎駅', '出島', 'グラバー園'],
  style_genre: 'retro_sepia_ink',
  title: '長崎・出島と南山手の洋館を歩く',
  description:
    'JR長崎駅から、中島川に架かる日本最古のアーチ石橋「眼鏡橋」とカステラの老舗「文明堂総本店」、鎖国期の貿易窓口「出島（出島和蘭商館跡）」、現存最古の国宝教会「大浦天主堂」、長崎港を一望する「グラバー園」を巡る散策路。',
  eyecatch_prompt:
    'Retro sepia ink and watercolor illustration of Nagasaki harbor town showing the historic Western wooden veranda of Glover Garden overlooking Nagasaki Bay, Gothic spire of Oura Cathedral, arched stone Megane-bashi Spectacles Bridge over the Nakashima River, and restored Dutch trading post of Dejima, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '中島川の石橋と甘いカステラ、和蘭商館から南山手の丘へと続く長崎を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「眼鏡橋」の川面に映る二つのアーチを眺め、護岸の石積みからハートストーンを探した瞬間',
      subtext:
        '江戸時代から中島川に架かり続ける石橋の優美な姿に、長崎の和華蘭文化の始まりを見た。',
      badge: {
        code: 'nagasaki_meganebashi',
        name_ja: '長崎・中島川の眼鏡橋を渡りし者',
        subtitle_en: 'Walker of Meganebashi',
        description:
          '中島川に架かる日本最古のアーチ型石橋「眼鏡橋」を訪ね、石造りの美を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an ancient twin-arched stone bridge reflected cleanly as spectacles in calm river water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「文明堂総本店」の重厚な店構えをくぐり、ザラメが香る伝統のカステラを手にした瞬間',
      subtext:
        '明治三十三年創業の老舗が守り続ける黄金色の焼き上がりが、異国情緒の旅を甘く彩った。',
      badge: {
        code: 'nagasaki_bunmeido',
        name_ja: '長崎・老舗文明堂のカステラを嗜みし者',
        subtitle_en: 'Taster of Nagasaki Castella',
        description:
          '江戸町の文明堂総本店を訪ね、南蛮渡来の伝統を受け継ぐ長崎カステラを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing thick golden slices of sponge Castella cake with caramelized crust on a porcelain plate, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「出島」の和洋折衷の商館跡を歩き、鎖国時代に唯一西欧へ開かれた窓を体感した瞬間',
      subtext:
        '復元されたカピタン部屋や畳とシャンデリアが調和する空間が、歴史の教科書を生き生きとさせた。',
      badge: {
        code: 'nagasaki_dejima',
        name_ja: '長崎・鎖国の窓口出島を巡りし者',
        subtitle_en: 'Explorer of Dejima',
        description:
          '出島和蘭商館跡を訪ね、江戸時代に西洋文化が日本へ伝わった歴史の舞台を歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting historic Dutch trading post wooden warehouses with fan-shaped cobblestone lanes and palm trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「グラバー園」の旧グラバー住宅のベランダから、夕暮れ近い長崎港と稲佐山を一望した瞬間',
      subtext:
        '幕末から明治の洋館群と花々が彩る南山手の丘の眺望が、長崎の旅を美しく結んでくれた。',
      badge: {
        code: 'nagasaki_glover',
        name_ja: '長崎・南山手のグラバー園を望みし者',
        subtitle_en: 'Visitor of Glover Garden',
        description:
          '南山手の丘に広がるグラバー園を訪ね、国重要文化財の洋館と長崎港の絶景を仰いだ証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing a white wooden colonial-style bungalow veranda framed by garden flowers overlooking Nagasaki Harbor, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nagasaki_complete',
    name_ja: '長崎・出島と南山手の丘を巡る旅人',
    subtitle_en: 'Walker of Nagasaki',
    description:
      '眼鏡橋から文明堂総本店、出島、大浦天主堂、グラバー園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a twin-arched stone bridge, a Gothic cathedral spire and a colonial wooden veranda overlooking a harbor, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '眼鏡橋',
      spot_type: '見どころ',
      description:
        '寛永11年（1634年）に興福寺の黙子如定禅師が架けた日本現存最古のアーチ型石橋。川面に映る影が眼鏡に見えることで親しまれ、護岸のハートストーンも人気。散策自由・無休。',
      address: '長崎県長崎市魚の町3-1',
      prefecture: '長崎県',
      municipality: '長崎市',
      lat: 32.747251,
      lng: 129.880247,
      clue: 'JR長崎駅から中島川方面へ歩き（または路面電車で市役所電停へ）、日本現存最古のアーチ型石橋「眼鏡橋」から旅を始めよう（散策自由・無休）。寛永十一年に興福寺の黙子如定禅師が架けた二連の石橋は、穏やかな川面に映る影と合わさって見事な眼鏡の形を描く。石垣に隠れた「ハートストーン」を探しながら川辺を歩き、和華蘭の街・長崎の散策をこれからもずっと楽しく晴れやかに明るく開きたい。',
      surprise:
        '東京の日本橋、山口の錦帯橋と並んで日本三名橋に数えられることもあり、昭和五十七年の長崎大水害を乗り越えて修復された強固な石積みも見事だ。',
      hook: '眼鏡橋を後にしたら、西南西へ歩いて大波止そばの老舗・文明堂総本店へ向かおう。',
      f7_fragment: '寛永十一年架橋、川面に眼鏡の影を映す日本最古のアーチ石橋。',
      f7_full:
        '中島川の「眼鏡橋」で川面に映る二連のアーチを眺め、江戸から続く長崎の美しい石造り文化に触れた。',
      image_prompt:
        'Historic twin-arched stone Meganebashi bridge spanning the Nakashima River in Nagasaki with clear reflection in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: '文明堂総本店',
      spot_type: '買い物',
      description:
        '明治33年（1900年）創業の長崎カステラの老舗総本店。伝統製法で焼き上げるカステラや三笠山が旅人から愛される。9:00〜18:00、元日休。',
      address: '長崎県長崎市江戸町1-1',
      prefecture: '長崎県',
      municipality: '長崎市',
      lat: 32.74552,
      lng: 129.872378,
      clue: '中島川から西南西の大波止エリアへ歩き、明治三十三年創業の老舗「文明堂総本店」へ立ち寄ろう（9:00〜18:00、元日休）。南蛮渡来の製法を受け継ぎ、熟練の職人が丹念に焼き上げる黄金色のカステラは、底に敷かれたザラメ糖の食感としっとりとした口当たりが格別だ。重厚な店構えの中で自分へのご褒美や大切な人への手土産を選び、この先の歴史歩きへこれからもずっと楽しく心弾ませて向かおう。',
      surprise:
        '総本店の建物は歴史ある角地に立ち、路面電車が行き交う大波止の風景とともに長崎の街の顔として長年親しまれている。',
      hook: '甘いカステラを手にしたら、すぐ南南西の出島和蘭商館跡へ向かおう。',
      f7_fragment: '明治三十三年創業、ザラメの食感が香る長崎カステラの老舗総本店。',
      f7_full:
        '「文明堂総本店」で職人の技が息づく長崎カステラに出会い、南蛮渡来の甘い歴史を手土産に収めた。',
      image_prompt:
        'Classic historic facade of Bunmeido main Castella cake shop in Nagasaki displaying golden sponge cakes in wooden boxes in retro sepia ink style, no text, no letters.',
    },
    {
      name: '出島（出島和蘭商館跡）',
      spot_type: '見どころ',
      description:
        '江戸時代の鎖国期に西欧へ開かれた唯一の貿易窓口。明治以降の姿や江戸期の商館群が忠実に復元されている。8:00〜21:00（最終入場20:40）、年中無休、大人1100円。',
      address: '長崎県長崎市出島町6-1',
      prefecture: '長崎県',
      municipality: '長崎市',
      lat: 32.742995,
      lng: 129.871164,
      clue: '江戸町からすぐ南南西の「出島（出島和蘭商館跡）」へ入ろう（8:00〜21:00、大人1100円）。鎖国時代に西洋へ開かれた歴史の窓をゆっくりじっくり歩きたい。',
      surprise:
        'かつて長崎港に突き出た扇形の人工島だった面影を残すため、当時の石垣やミニ出島模型、畳と洋風壁紙が調和したカピタン部屋が復元されている。',
      hook: '出島の歴史を体感したら、南へ進んで南山手の国宝・大浦天主堂へ向かおう。',
      f7_fragment: '鎖国時代に唯一西洋へ開かれていた、和洋折衷の出島和蘭商館跡。',
      f7_full:
        '「出島（出島和蘭商館跡）」の復元された商館や石畳を歩き、江戸時代に西洋文化が伝わった窓口を体感した。',
      image_prompt:
        'Restored Edo-era Dutch trading warehouses and stone lanes of Dejima in Nagasaki with palm trees in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: '大浦天主堂',
      spot_type: '見どころ',
      description:
        '元治元年（1864年）に建立された日本現存最古のキリスト教建築物で国宝。ステンドグラスが輝くゴシック様式の聖堂が南山手の丘に立つ。8:30〜17:30（3〜10月〜18:00・最終受付30分前）、大人1000円。',
      address: '長崎県長崎市南山手町5-3',
      prefecture: '長崎県',
      municipality: '長崎市',
      lat: 32.734494,
      lng: 129.870026,
      clue: '出島から南へ進み（または路面電車で大浦天主堂電停へ）、南山手の祈りの坂を登って国宝「大浦天主堂」を拝観しよう（8:30〜17:30、大人1000円）。幕末の元治元年に建てられた日本現存最古のキリスト教建築で、優美なゴシック様式の尖塔と百数十年前のステンドグラスが柔らかな光を投げかけている。信徒発見の歴史を伝える静かな聖堂に佇み、祈りの物語にこれからもずっと深く触れたい。',
      surprise:
        '開堂の翌年に浦上の潜伏キリシタンたちが訪れて信仰を告白した「信徒発見」の舞台であり、世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の構成資産でもある。',
      hook: '大浦天主堂を拝観したら、すぐ西隣の斜面に広がるグラバー園で旅を結ぼう。',
      f7_fragment: '幕末に建立された日本現存最古のキリスト教建築、国宝の大浦天主堂。',
      f7_full:
        '国宝の「大浦天主堂」で優美なゴシック建築とステンドグラスを仰ぎ、長崎に受け継がれる祈りの歴史に触れた。',
      image_prompt:
        'White Gothic facade and spire of Oura Cathedral atop a stone staircase in Nagasaki framed by green trees in retro sepia ink and watercolor style, no text, no letters.',
    },
    {
      name: 'グラバー園',
      spot_type: '見どころ',
      description:
        '幕末から明治にかけて長崎に暮らした外国人居留地の洋館群を移築・保存した丘の上の庭園。国重要文化財の旧グラバー住宅と長崎港の眺望が絶景。8:00〜18:00（季節夜間延長あり）、無休、大人1300円。',
      address: '長崎県長崎市南山手町8-1',
      prefecture: '長崎県',
      municipality: '長崎市',
      lat: 32.734331,
      lng: 129.869189,
      clue: '大浦天主堂のすぐ西隣に広がる丘の上の庭園「グラバー園」で旅を締めくくろう（8:00〜18:00・季節延長あり、無休、大人1300円）。日本最古の木造洋風建築である世界遺産・旧グラバー住宅をはじめ、幕末明治の洋館群と色とりどりの花々が南山手の斜面を彩っている。開放的なベランダから長崎港と稲佐山を見渡せば、異国情緒あふれる長崎の散策がこれからもずっと美しく豊かに胸に結ばれる。',
      surprise:
        '園内の石畳にはここにもハート型の敷石が隠されており、旧グラバー住宅は日本の近代産業の発展を支えたスコットランド商人・トーマス・グラバーの邸宅だった。',
      hook: '',
      f7_fragment: '世界遺産の旧グラバー住宅と長崎港の絶景が広がる、南山手の丘。',
      f7_full:
        '南山手の「グラバー園」で旧グラバー住宅と長崎港の絶景を眺め、出島と天主堂を巡った長崎の旅を美しく結んだ。',
      image_prompt:
        'Historic wooden colonial veranda of Former Glover House surrounded by blooming garden flowers overlooking Nagasaki Bay at dusk in retro sepia ink style, no text, no letters.',
    },
  ],
};
