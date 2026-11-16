export default {
  slug: 'moji',
  station_order: 629,
  station: '門司',
  line: 'JR鹿児島本線・山陽本線',
  area_name: '門司・赤煉瓦と大里の街',
  prefecture: '福岡県',
  municipality: '北九州市門司区',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['福岡県', '北九州市', '門司駅', '門司赤煉瓦プレイス', '豚骨ラーメン'],
  style_genre: 'pictorial_isometric_map',
  title: '門司・赤煉瓦の麦酒蔵と大里の街を歩く',
  description:
    '本州と九州を繋ぐ関門トンネルの九州側玄関・JR門司駅から、歴史ある赤煉瓦建築「門司麦酒煉瓦館」と「BRICK HALL」を経て、駅前の老舗和菓子店「梅園」と昔ながらのラーメン店「笑福亭」、そして古社「戸ノ上神社」を巡る散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Moji Osato town in Kitakyushu showing Moji railway station, historic red-brick beer brewery hall, cozy brick cafe, traditional wagashi sweet shop, retro ramen diner and ancient Shinto shrine nestled against green Mount Tonoe, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '赤煉瓦の麦酒蔵の記憶と地元の老舗の味が息づく門司・大里を歩いたあと、誰かに伝えたいのはどの場面ですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「門司麦酒煉瓦館」の重厚な赤煉瓦建築の中で、九州のビール造りの歴史に触れた瞬間',
      subtext:
        '帝国麦酒から受け継がれた美しい赤煉瓦の空間が、大里の近代史を伝えていた。',
      badge: {
        code: 'moji_rengakan',
        name_ja: '大里・赤煉瓦の麦酒蔵を巡りし者',
        subtitle_en: 'Explorer of Moji Red Brick',
        description:
          '門司麦酒煉瓦館を訪ね、赤煉瓦建築と九州のビール製造の歴史に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a historic red-brick brewery building with arched windows and copper brewing kettle, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「BRICK HALL」の赤煉瓦の温もりある空間で、音楽や珈琲の気配に癒やされた瞬間',
      subtext:
        '歴史あるレンガ倉庫を活かした文化空間が、駅北側の海辺の街歩きを豊かにしてくれた。',
      badge: {
        code: 'moji_brick_hall',
        name_ja: '門司赤煉瓦・ブリックホールの客',
        subtitle_en: 'Guest of Moji Brick Hall',
        description:
          'BRICK HALLを訪ね、赤煉瓦倉庫を活かした温もりあるカフェと文化の空間を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a warm coffee cup and baked curry dish inside a historic red-brick warehouse cafe, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「笑福亭」の昔ながらの店内で、ごま油香る懐かしいラーメンを啜った瞬間',
      subtext:
        '地元で半世紀愛され続けるレトロな中華そばの味わいが、街歩きに活力をくれた。',
      badge: {
        code: 'moji_shofukutei',
        name_ja: '門司柳町・老舗笑福亭を味わいし者',
        subtitle_en: 'Taster of Moji Ramen',
        description:
          '笑福亭を訪ね、半世紀続く懐かしい風味のラーメンと門司の日常に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming ceramic bowl of classic Japanese pork-broth ramen with chashu pork and sesame oil aroma, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「戸ノ上神社」の緑深い境内で、千百年余りの歴史を誇る門司の古社に手を合わせた瞬間',
      subtext:
        '赤煉瓦と街並みを抜けた先にある静かな山の麓の杜で、心穏やかに旅を締めくくった。',
      badge: {
        code: 'moji_tonoe_jinja',
        name_ja: '大里・戸ノ上神社の杜を拝みし者',
        subtitle_en: 'Visitor of Tonoe Shrine',
        description:
          '戸ノ上神社を訪ね、戸ノ上山の麓で千百年余りの歴史を刻む古社に参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting an ancient wooden Shinto sanctuary nestled against lush green mountain trees and stone lanterns, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'moji_complete',
    name_ja: '門司・赤煉瓦の麦酒蔵と大里の街を巡る旅人',
    subtitle_en: 'Walker of Moji Osato Town',
    description:
      '門司麦酒煉瓦館からBRICK HALL、梅園 門司駅前本店、笑福亭、戸ノ上神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a historic red-brick brewery tower, a steaming bowl of ramen and a mountain Shinto torii gate, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '門司麦酒煉瓦館',
      spot_type: '見どころ',
      description:
        '旧サッポロビール九州工場（帝国麦酒）の事務所棟を活かした文化交流拠点。大正期の優美な赤煉瓦建築の中で、喫茶や市民の文化展示などを楽しめる。開館10:00〜20:00（火曜定休）、入館無料。',
      address: '福岡県北九州市門司区大里本町3-6-1',
      prefecture: '福岡県',
      municipality: '北九州市門司区',
      lat: 33.906132,
      lng: 130.931541,
      clue: '本州と九州を結ぶ関門の玄関口・JR門司駅を出たら、海側の北口からすぐの「門司赤煉瓦プレイス」に建つ「門司麦酒煉瓦館」へ足を運ぼう（10:00〜20:00、火曜休・無料）。大正時代に帝国麦酒として建てられた歴史ある赤煉瓦の事務所棟で、重厚な煉瓦壁とアーチ窓が往時の国際貿易港の繁栄を伝えている。現在は文化交流の拠点として開放されており、門司・大里の近代ロマンに触れて旅を始めたい。',
      surprise:
        '門司港レトロの陰に隠れがちだが、JR門司駅のすぐそばにこれほど見事で美しい赤煉瓦建築群が残されていることに思わず感嘆する。手入れされた煉瓦の温かな色合いと市民に開かれた静かな空間が、近代日本のものづくりの歴史を真っすぐに伝えてくれる名建築だ。',
      hook: '煉瓦館を出たら、敷地内すぐ南南東へ徒歩1分のBRICK HALL（ブリックホール）で一息つこう。',
      f7_fragment: '大正期の帝国麦酒事務所棟を伝える、大里海辺の優美な赤煉瓦建築。',
      f7_full: '駅北側の「門司麦酒煉瓦館」で優美な赤煉瓦建築とビール造りの歴史に触れ、門司・大里の旅を凛として心地よく始めた。',
      image_prompt:
        'Historic red-brick brewery building of Moji Beer Rengakan with tall arched windows, tiled roof and neat courtyard garden, no text, no people.',
    },
    {
      name: 'BRICK HALL（ブリックホール）',
      spot_type: '休憩',
      description:
        '門司赤煉瓦プレイス内にあるレンガ造りのカフェ＆イベントスペース。歴史的空間の中で珈琲や焼きカレーなどを味わえる。火〜木11:00〜17:00・金11:00〜22:00（土日祝変動）、月曜定休。',
      address: '福岡県北九州市門司区大里本町3-6-1',
      prefecture: '福岡県',
      municipality: '北九州市門司区',
      lat: 33.905815,
      lng: 130.931664,
      clue: '門司麦酒煉瓦館から南南東へ徒歩1分の「BRICK HALL（ブリックホール）」へ立ち寄ろう（11:00〜17:00・金曜夜営業、月曜休）。赤煉瓦の壁に囲まれた温もりある空間で珈琲を一服したい。',
      surprise:
        '百年以上の時を刻んだ赤煉瓦の壁と高い天井がそのまま活かされており、ただ腰を下ろして珈琲を飲んでいるだけで映画のワンシーンのような気分になる。海辺の煉瓦倉庫が今も地域の音楽や食の拠点として愛され続けている姿がなんとも心地よい。',
      hook: 'ブリックホールを後にしたら、駅南側の柳町へ抜け南東へ徒歩5分の梅園 門司駅前本店へ向かおう。',
      f7_fragment: '赤煉瓦の倉庫を活かした、大里海辺の温もりあるカフェ＆文化空間。',
      f7_full: '赤煉瓦プレイスの「BRICK HALL」で歴史的空間の温もりを感じながら休息をとり、門司の街並みへの期待を高めた。',
      image_prompt:
        'Atmospheric red-brick warehouse cafe interior with exposed brick walls, warm pendant lamps, wooden table and hot coffee cup, no text, no people.',
    },
    {
      name: '梅園 門司駅前本店',
      spot_type: '買い物',
      description:
        '門司駅南口からすぐの柳町に店を構える老舗和菓子店。カリッと香ばしい名物「かりんとう饅頭」やどら焼き、季節の和菓子が手土産に人気。営業時間9:00〜20:00。',
      address: '福岡県北九州市門司区柳町2-2-1',
      prefecture: '福岡県',
      municipality: '北九州市門司区',
      lat: 33.904084,
      lng: 130.934214,
      clue: '赤煉瓦プレイスからJR線の南側へ抜け、南東へ徒歩5分の「梅園 門司駅前本店」へ立ち寄ろう（9:00〜20:00）。門司駅南口からほど近い柳町の商店街に構える老舗の和菓子店で、店頭には黒糖の風味豊かな名物「かりんとう饅頭」やふっくらとしたどら焼き、四季折々の季節の生菓子がずらりと並んでいる。歴史ある港町の日常に寄り添う温かい甘味を手に取って、門司の街歩きの楽しいお土産にしたい。',
      surprise:
        '駅からすぐの商店街で地元の人々が日常的に買い求める店先には、華美すぎない下町らしい親しみやすさがある。外はカリッと香ばしく中はしっとりとしたかりんとう饅頭をはじめ、丁寧な手仕事が光るお菓子の数々に思わず笑顔がこぼれる素敵な和菓子店だ。',
      hook: '和菓子を選んだら、東南東へ徒歩7分の老舗ラーメン・笑福亭で昼食にしよう。',
      f7_fragment: '香ばしい名物・かりんとう饅頭が人気の、門司駅南口の老舗和菓子舗。',
      f7_full: '柳町の「梅園 門司駅前本店」を訪ね、名物のかりんとう饅頭や季節の和菓子など地元で親しまれる優しい甘味に触れた。',
      image_prompt:
        'Traditional Japanese wagashi shop wooden tray displaying crispy dark brown-sugar karinto manju pastries and fluffy dorayaki pancakes, no text, no people.',
    },
    {
      name: '笑福亭',
      spot_type: '食事',
      description:
        '昭和50年創業、柳町の通りに佇むレトロな雰囲気の老舗ラーメン店。ごま油の風味が香る懐かしい豚骨醤油ラーメンや焼飯が地元客に愛される。営業時間11:00〜14:00・17:00〜19:30頃、木曜等不定休。',
      address: '福岡県北九州市門司区柳町3-3-22',
      prefecture: '福岡県',
      municipality: '北九州市門司区',
      lat: 33.902765,
      lng: 130.938622,
      clue: '梅園から東南東へ徒歩7分、昔ながらの柳町の通りに佇む老舗「笑福亭」で昼食にしよう（11:00〜19:30頃）。昭和50年の創業から半世紀にわたって門司の人々に愛され続けてきた中華そば・ラーメンの名店で、ごま油の芳醇な香りがふわりと漂うスープと滑らかな麺、香ばしい焼飯が定番人気だ。飾らない昭和の風情が残る暖簾をくぐり、地元の常連客に交じって門司の懐かしい味をしっかり堪能しよう。',
      surprise:
        'こってり一辺倒ではない、ごま油の香ばしさと優しさが溶け合う昔ながらの一杯に思わずほっと心が和む。半世紀近く変わらない佇まいの中で地元のお客さんと肩を並べて啜るラーメンは、門司という街の温かい日常そのものを映し出している素敵な名店だ。',
      hook: 'ラーメンでお腹を満たしたら、東南東へ徒歩8分の戸ノ上神社へ詣でて旅を結ぼう。',
      f7_fragment: 'ごま油香る懐かしい一杯を半世紀守り続ける、柳町のレトロな老舗麺処。',
      f7_full: '柳町の老舗「笑福亭」でごま油香る懐かしいラーメンを味わい、半世紀続く門司の温かい日常の食文化にじっくり触れた。',
      image_prompt:
        'Retro Japanese neighborhood ramen shop counter with a steaming ceramic bowl of classic pork-broth ramen, sliced chashu pork and fried rice, no text, no people.',
    },
    {
      name: '戸ノ上神社',
      spot_type: '見どころ',
      description:
        '門司区の最高峰・戸ノ上山の麓に鎮座し、千百年余りの歴史を持つ由緒ある古社。緑深い境内に厳かな社殿が佇み、大里の街を静かに見守っている。参拝自由（社務所日中）。',
      address: '福岡県北九州市門司区大里戸ノ上4-4-2',
      prefecture: '福岡県',
      municipality: '北九州市門司区',
      lat: 33.901514,
      lng: 130.944008,
      clue: '笑福亭から東南東へ徒歩8分、戸ノ上山の深い緑が迫る大里の住宅街の先に鎮座する「戸ノ上神社」で散策を締めくくろう（参拝自由・社務所日中）。千百年以上もの長い歴史を誇る由緒ある古社で、古くから大里や門司の街の人々に世代を超えて篤く崇敬され続けてきたお宮だ。豊かな木立に包まれた静かな境内で深く手を合わせ、赤煉瓦の産業遺産から商店街の名物まで巡った門司の街歩きを心穏やかに結びたい。',
      surprise:
        '海辺の近代的な赤煉瓦倉庫群から山裾へ向かって歩いてくると、同じ門司区の中にこれほど緑深く厳かな古社が守られていることに驚かされる。山の澄んだ空気と鳥居越しの木漏れ日が、街歩きの最後を心穏やかに包み込んでくれる素晴らしい聖地だ。',
      hook: '',
      f7_fragment: '戸ノ上山の麓で千百年余りの歴史を刻み大里を見守る、緑深い古社。',
      f7_full: '戸ノ上山の麓に鎮座する「戸ノ上神社」の静かな杜で参拝し、赤煉瓦と麺の街・門司大里の散策を穏やかに締めくくった。',
      image_prompt:
        'Tranquil historic Shinto shrine of Tonoe Jinja nestled against lush green mountain forest with stone torii gate and wooden worship hall, no text, no people.',
    },
  ],
};
