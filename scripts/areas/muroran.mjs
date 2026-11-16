export default {
  slug: 'muroran',
  station_order: 903,
  station: '室蘭',
  line: 'JR室蘭支線',
  area_name: '室蘭・旧駅舎と測量山展望',
  prefecture: '北海道',
  municipality: '室蘭市',
  category: '最古の木造駅舎と夜景',
  budget_tier: 2,
  tags: ['北海道', '室蘭市', '室蘭駅', '旧室蘭駅舎', '測量山'],
  style_genre: 'ink_and_watercolor',
  title: '室蘭・最古の木造駅舎と測量山夜景',
  description:
    'JR室蘭支線の終着駅「JR室蘭駅」から、ジャズが流れる老舗レトロ喫茶「カフェ英国館」、明治四十五年築の国登録有形文化財「旧室蘭駅舎」、鯨八幡の通称で親しまれる「室蘭八幡宮」、日本夜景遺産の「測量山展望台」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Muroran port town from modern terminal railway station and cozy brick jazz coffeehouse to 1912 mansard-roofed historic wooden station, hillside shrine torii and panoramic Mount Sokuryo overlook gazing over Hakucho Bridge, full bleed, no text, no letters.',
  question: '北海道最古の木造駅舎や老舗喫茶、鯨八幡の社を経て日本夜景遺産の測量山へと至る室蘭の街歩きで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '煉瓦造りの外観とジャズが流れる老舗レトロ喫茶「カフェ英国館」',
      subtext: 'ドラマや映画のロケ地としても知られ、落ち着いた空間で珈琲と洋食を楽しめた。',
      badge: {
        code: 'muroran_eikokukan',
        name_ja: '室蘭・煉瓦喫茶の寛ぎ',
        subtitle_en: 'Brick Jazz Cafe Guest',
        description: '老舗レトロ喫茶「カフェ英国館」で寛いだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a classic brick coffeehouse window with a warm porcelain coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治四十五年築・道内現存最古の木造駅舎「旧室蘭駅舎」',
      subtext: '特徴的なマンサード屋根と鉄道資料が、北海道鉄道史の重みを伝えてくれた。',
      badge: {
        code: 'muroran_old_station',
        name_ja: '室蘭・最古木造駅舎の旅人',
        subtitle_en: '1912 Historic Station Visitor',
        description: '国登録有形文化財「旧室蘭駅舎」を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a 1912 mansard-roofed wooden Japanese railway station building, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '漂着クジラ売却益で造営され「鯨八幡」と親しまれる「室蘭八幡宮」',
      subtext: '明治二年創祀の長い歴史と海辺の港町ならではのユニークな由来に感心した。',
      badge: {
        code: 'muroran_hachimangu',
        name_ja: '室蘭・鯨八幡の鎮守参拝',
        subtitle_en: 'Whale Shrine Visitor of Muroran',
        description: '「鯨八幡」の通称で知られる室蘭八幡宮に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a wooden shrine torii gate with a subtle carved whale motif emblem, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '白鳥大橋や室蘭港を一望する日本夜景遺産「測量山展望台」',
      subtext: '明治五年の見当山に始まり、室蘭港と白鳥大橋を見渡す大パノラマに感動した。',
      badge: {
        code: 'muroran_sokuryozan',
        name_ja: '室蘭・測量山の大展望',
        subtitle_en: 'Mt. Sokuryo Panorama Explorer',
        description: '測量山展望台から室蘭港と白鳥大橋を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a suspension bridge spanning a glowing port bay seen from a hilltop overlook, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'muroran_master',
    name_ja: '室蘭・旧駅舎と測量山巡り',
    subtitle_en: 'Muroran Historic Station & Mt. Sokuryo Master',
    description: 'JR室蘭駅からカフェ英国館、旧室蘭駅舎、室蘭八幡宮、測量山展望台までを巡った証',
    image_prompt:
      'A circular emblem combining 1912 mansard wooden station, brick coffee cup, whale shrine torii and suspension bridge bay panorama, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR室蘭駅',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        'JR室蘭支線の終着駅（終日利用可・無料、1997年現在地へ移転開業、2024年10月無人駅化）。1892年の北海道炭礦鉄道開通から続く鉄路の終点として港町を見守る。',
      address: '北海道室蘭市中央町4-5-1',
      lat: 42.31802,
      lng: 140.974382,
      clue:
        '明治二十五年の北海道炭礦鉄道開通から続く鉄路の終点であり、平成九年に現在地へ移されたJR室蘭支線の終着駅「JR室蘭駅」から町歩きと散策を始めよう（終日利用可）。海風をほのかに感じる終着駅の落ち着いた静かなホームをゆっくり後にしたら、まずは幕西町にある煉瓦造りの外観とジャズが心地よく流れる老舗レトロ喫茶「カフェ英国館」を目指してのんびり楽しく元気に笑顔で歩いて向かおう。',
      surprise: '明治から続く室蘭支線の終着駅に降り立つと、港町ならではの落ち着いた歴史の重みが伝わってきた。',
      hook: 'JR室蘭駅を出たら、幕西町の老舗喫茶「カフェ英国館」へ向かおう。',
      f7_fragment: '明治二十五年から続く鉄路の終点、JR室蘭支線の終着駅。',
      f7_full: '「JR室蘭駅」に降り立ち、道内最古の木造駅舎と測量山を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Muroran Station modern curved terminal railway building beside quiet port street, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'カフェ英国館',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '煉瓦造りの外観とジャズが流れる老舗レトロ喫茶（8:30〜20:00、モーニング〜10:00・ランチ11:30〜14:00、日曜休）。ドラマや映画のロケ地としても親しまれている。',
      address: '北海道室蘭市幕西町1-1',
      lat: 42.320002,
      lng: 140.970435,
      clue:
        '煉瓦造りのレトロ喫茶「カフェ英国館」で一息つこう（8:30〜20:00、日曜休）。ジャズが流れる店内で珈琲や洋食を味わえる名店だ。次は「旧室蘭駅舎」へ。',
      surprise: '煉瓦の外観とジャズが流れるクラシカルな店内の空気感が、ドラマのワンシーンのように素敵だった。',
      hook: 'カフェ英国館で寛いだら、国登録有形文化財の「旧室蘭駅舎」へ向かおう。',
      f7_fragment: '煉瓦造りの外観とジャズが流れ、ロケ地としても親しまれる老舗喫茶。',
      f7_full: '「カフェ英国館」の落ち着いた空間で珈琲をいただき、港町のレトロな雰囲気に浸った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cafe Eikokukan vintage brick coffeehouse interior with warm amber lamps and classic wooden tables, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '旧室蘭駅舎',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1912年（明治45年）築の北海道内現存最古の木造駅舎（国登録有形文化財、4〜10月8:00〜19:00・11〜3月〜17:00、1/1休、入館無料）。特徴的なマンサード屋根を持ち、室蘭観光協会・案内所として鉄道資料等を展示。',
      address: '北海道室蘭市海岸町1-5-1',
      lat: 42.322082,
      lng: 140.970236,
      clue:
        '明治四十五年築という北海道内に現存する最古の木造駅舎「旧室蘭駅舎」を訪ねよう（8:00〜19:00等、元日休、無料）。優雅なマンサード屋根が目を引く国登録有形文化財の歴史的建物は、現在も室蘭観光協会の案内所として大切に活用され、館内では貴重な鉄道資料の数々をじっくり丁寧に見学できる。往時の旅情にたっぷりと触れたら、続いて歴史ある「室蘭八幡宮」へと元気に楽しく歩いて向かおう。',
      surprise: '明治四十五年築のマンサード屋根の木造駅舎が、道内現存最古の姿のまま今も現役で迎えてくれた。',
      hook: '旧室蘭駅舎を見学したら、「鯨八幡」の通称で知られる「室蘭八幡宮」へ向かおう。',
      f7_fragment: '明治四十五年築、マンサード屋根が特徴の道内現存最古の木造駅舎。',
      f7_full: '「旧室蘭駅舎」の美しい木造建築と鉄道資料を見学し、明治の面影に感動した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Former Muroran Station 1912 pale wooden heritage building with distinctive mansard roof, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '室蘭八幡宮',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '1869年（明治2年）創祀、1875年に現在地へ遷座（終日参拝自由・無料）。漂着クジラ売却益で造営されたことから「鯨八幡」の通称で親しまれている室蘭の古社。',
      address: '北海道室蘭市海岸町2-9-3',
      lat: 42.321171,
      lng: 140.968446,
      clue:
        '明治二年に創祀され、明治八年に現在の高台へと遷座した室蘭の古社「室蘭八幡宮」へ丁寧に参拝しよう（終日自由・無料）。かつて浜に漂着したクジラを売却した利益で社殿が造営されたという港町ならではの珍しい逸話から、地元では親しみを込めて「鯨八幡」とも呼ばれている。清らかな境内で旅の無事を心から深く祈ったら、最後は絶景を望む「測量山展望台」へと元気に楽しく笑顔で歩いて向かおう。',
      surprise: '漂着クジラの売却益で造営されたという「鯨八幡」の由来に、海の街・室蘭ならではの歴史を感じた。',
      hook: '室蘭八幡宮に参拝したら、日本夜景遺産の「測量山展望台」へ向かおう。',
      f7_fragment: '明治二年創祀、漂着クジラの逸話から「鯨八幡」と呼ばれる古社。',
      f7_full: '「室蘭八幡宮」の静かな境内に参拝し、港町ならではの鯨八幡の歴史に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Muroran Hachimangu Shrine hillside stone steps and wooden torii gate framed by lush northern trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '測量山展望台',
      prefecture: '北海道',
      city: '室蘭市',
      description:
        '標高199.6m、1872年に札幌本道計画の視察で登られ「見当山」と呼ばれたのが始まり（終日開放・無料）。室蘭八景・日本夜景遺産に選定され、白鳥大橋や室蘭港を一望できる。',
      address: '北海道室蘭市清水町1-1',
      lat: 42.321012,
      lng: 140.956991,
      clue:
        '旅の締めくくりは、標高約二百メートルの頂から室蘭の街と海を一望する室蘭八景「測量山展望台」へ上がってみよう（終日開放・無料）。明治五年に札幌本道計画の視察で登られた歴史を持ち、今は日本夜景遺産にも輝く山頂からは、優雅な白鳥大橋と室蘭港の大パノラマが目の前に大きく広がる。海と山と鉄の街が織りなす壮大な絶景を胸に深く刻み、室蘭の豊かな旅を心地よく晴れやかに笑顔で心から結ぼう。',
      surprise: '測量山展望台から望む白鳥大橋と室蘭港の大パノラマが、街歩きのフィナーレにふさわしい圧巻の景色だった。',
      hook: '',
      f7_fragment: '室蘭八景・日本夜景遺産に選定され白鳥大橋と室蘭港を一望する展望台。',
      f7_full: '「測量山展望台」から白鳥大橋と室蘭港の雄大な風景を望み、室蘭の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Mount Sokuryo Observatory looking across Muroran harbor and graceful Hakucho suspension bridge at golden dusk, no text, no letters.',
    },
  ],
};
