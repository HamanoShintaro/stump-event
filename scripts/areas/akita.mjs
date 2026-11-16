export default {
  slug: 'akita',
  station_order: 650,
  station: '秋田',
  line: 'JR奥羽本線',
  area_name: '秋田・千秋公園と竿燈の城下町',
  prefecture: '秋田県',
  municipality: '秋田市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['秋田県', '秋田市', '秋田駅', '稲庭うどん', '千秋公園'],
  style_genre: 'woodblock_ukiyoe_travel',
  title: '秋田・稲庭うどんと久保田城跡を歩く',
  description:
    'JR秋田駅から、市民の台所「秋田市民市場」と万延元年創業の稲庭うどん「八代目 佐藤養助 秋田店」、佐竹氏の居城跡「千秋公園（久保田城跡）」、秋田竿燈まつりを伝える「秋田市民俗芸能伝承館（ねぶり流し館）」、歴史ある「旧金子家住宅」を巡る散策路。',
  eyecatch_prompt:
    'Japanese woodblock travel print style illustration of Akita castle town showing the white-walled corner turret of Senshu Park Kubota Castle surrounded by lotus moats, glowing bamboo Kanto festival lanterns, bustling local market and traditional wooden merchant house, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '日本海の幸と手延べのうどん、佐竹氏の城跡と竿燈の熱気が繋がる秋田を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「秋田市民市場」の活気ある通路を歩き、日本海の新鮮な魚介や山の幸を眺めた瞬間',
      subtext:
        '朝から地元の人々で賑わう秋田の台所に、北国の豊かな暮らしの息遣いが感じられた。',
      badge: {
        code: 'akita_ichiba',
        name_ja: '秋田・市民市場の活気に触れし者',
        subtitle_en: 'Visitor of Akita Market',
        description:
          '秋田市民市場を訪ね、日本海の魚介と秋田の旬が集う市民の台所を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a lively Japanese fish and produce market stall with fresh red sea bream and wooden crates, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「八代目 佐藤養助 秋田店」で、透き通るような艶のある稲庭うどんを味わった瞬間',
      subtext:
        '万延元年創業の伝統の手延べ技が生み出す滑らかな喉越しに、秋田の食文化の奥深さを知った。',
      badge: {
        code: 'akita_yosuke',
        name_ja: '秋田・伝統の稲庭うどんを嗜みし者',
        subtitle_en: 'Taster of Inaniwa Udon',
        description:
          '八代目 佐藤養助 秋田店を訪ね、つややかでコシのある本場の稲庭うどんを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing silky glossy white Inaniwa udon noodles neatly coiled on a bamboo sieve with dipping sauce and ginger, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「千秋公園（久保田城跡）」の広大な水堀と復元された御隅櫓を見上げた瞬間',
      subtext:
        '佐竹二十万石の居城跡を包む木々と蓮の堀が、城下町・秋田の誇り高い歴史を物語っていた。',
      badge: {
        code: 'akita_senshu',
        name_ja: '秋田・佐竹氏の久保田城跡を巡りし者',
        subtitle_en: 'Walker of Senshu Park',
        description:
          '千秋公園（久保田城跡）を訪ね、水堀と復元御隅櫓が美しい歴史公園を散策した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a white Japanese castle corner turret rising behind green earthen ramparts and a lotus-filled moat, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「ねぶり流し館」に並ぶ勇壮な秋田竿燈の提灯を見上げ、夏祭りの熱気を感じた瞬間',
      subtext:
        '高さ十二メートルもの竿に連なる提灯の輝きが、みちのくの伝統芸能の力強さを伝えてくれた。',
      badge: {
        code: 'akita_kanto',
        name_ja: '秋田・竿燈まつりの熱気に触れし者',
        subtitle_en: 'Admirer of Akita Kanto',
        description:
          '秋田市民俗芸能伝承館（ねぶり流し館）を訪ね、国重要無形民俗文化財の竿燈文化に触れた証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing glowing golden paper lanterns arranged on a tall bamboo Kanto pole against a night blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'akita_complete',
    name_ja: '秋田・久保田城と竿燈文化を巡る旅人',
    subtitle_en: 'Walker of Akita',
    description:
      '秋田市民市場から佐藤養助、千秋公園、ねぶり流し館、旧金子家住宅までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a castle corner turret, glowing Kanto festival lanterns and silky Inaniwa udon noodles, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '秋田市民市場',
      spot_type: '買い物',
      description:
        'JR秋田駅から徒歩約4分、日本海の新鮮な魚介や山菜、きりたんぽなどの地元食材が揃う市民の台所。5:00〜18:00（店舗により異なる）、日曜定休。',
      address: '秋田県秋田市中通4-7-35',
      prefecture: '秋田県',
      municipality: '秋田市',
      lat: 39.714787,
      lng: 140.125768,
      clue: 'JR秋田駅の西口から南西へ歩いて約4分、秋田の食の台所「秋田市民市場」から街歩きを始めよう（5:00〜18:00・店舗により異なる、日曜休）。ずらりと並ぶ鮮魚店や青果店には、ハタハタや男鹿の海の幸、きりたんぽやいぶりがっこなど秋田ならではの味覚が所狭しと並んでいる。威勢のよい掛け声が飛び交う市場の通路を歩き、北国の豊かな暮らしの息遣いをこれからもずっと身近に感じたい。',
      surprise:
        '市場内には購入した刺身を好みのネタでのせて食べられる「のっけ丼」や寿司処もあり、朝から旅人と地元客で賑わっている。',
      hook: '市場の活気に触れたら、北北東へ歩いて稲庭うどんの名店・八代目 佐藤養助 秋田店へ向かおう。',
      f7_fragment: '秋田駅から徒歩数分、日本海の幸と地元食材が集う市民の台所。',
      f7_full:
        '「秋田市民市場」の活気ある通路を歩き、日本海の魚介や山の幸が集う秋田の豊かな食文化に触れた。',
      image_prompt:
        'Lively indoor Japanese local fish and produce market aisle in Akita with fresh seafood displays and warm wooden stalls in Japanese woodblock print style, no text, no letters.',
    },
    {
      name: '八代目 佐藤養助 秋田店',
      spot_type: '食事',
      description:
        '万延元年（1860年）創業、日本三大うどんの一つ・稲庭うどんの老舗直営店。西武秋田店地下1階にあり、つややかでコシのあるうどんが味わえる。11:00〜20:00（L.O.19:30）、無休（施設に準ずる）。',
      address: '秋田県秋田市中通2-6-1 西武秋田店B1F',
      prefecture: '秋田県',
      municipality: '秋田市',
      lat: 39.716997,
      lng: 140.127015,
      clue: '市民市場から駅前の大通り方面へ歩き、万延元年創業の老舗直営「八代目 佐藤養助 秋田店」で稲庭うどんを味わおう（11:00〜20:00、西武秋田店休館日休）。一子相伝の伝統的な手延べ製法で仕上げられた麺は、乳白色の美しい艶と驚くほど滑らかな喉越しが自慢だ。醤油と胡麻味噌の二種つゆで味わうせいろや名物の比内地鶏メニューを堪能し、次の城跡散歩へこれからもずっと元気に備えたい。',
      surprise:
        '稲庭うどんは江戸時代に秋田藩の御用達として献上されていた歴史を持ち、手綯（てない）と呼ばれる熟練の技で細く平たく仕上げられる。',
      hook: '稲庭うどんを堪能したら、北西へ歩いて佐竹氏の居城跡・千秋公園（久保田城跡）へ向かおう。',
      f7_fragment: '万延元年創業、一子相伝の手延べ技を守る本場稲庭うどんの老舗。',
      f7_full:
        '「八代目 佐藤養助 秋田店」で艶やかな本場稲庭うどんを味わい、秋田藩御用達から続く手延べの味を堪能した。',
      image_prompt:
        'Refined Japanese noodle dining counter serving glossy white Inaniwa udon noodles on bamboo tray with two dipping sauces in Japanese woodblock print style, no text, no letters.',
    },
    {
      name: '千秋公園（久保田城跡）',
      spot_type: '見どころ',
      description:
        '関ヶ原の戦いの後に秋田へ移封された佐竹氏の居城「久保田城」跡を整備した歴史公園。復元された表門や御隅櫓、美しい水堀が見どころ。散策自由・無休。',
      address: '秋田県秋田市千秋公園1-1',
      prefecture: '秋田県',
      municipality: '秋田市',
      lat: 39.720849,
      lng: 140.121871,
      clue: '駅前から北西へ歩き、「千秋公園（久保田城跡）」へ登ろう（散策自由・無休）。佐竹二十万石の居城跡を包む美しい水堀と復元御隅櫓の風景をこれからもじっくり楽しみたい。',
      surprise:
        '明治期に造園の巨匠・長岡安平によって公園として整備され、日本さくら名所100選や日本の歴史公園100選にも選ばれている。',
      hook: '城跡の緑を歩いたら、西へ歩いて秋田竿燈まつりを伝えるねぶり流し館へ向かおう。',
      f7_fragment: '佐竹二十万石の久保田城跡を整備した、水堀と櫓が美しい歴史公園。',
      f7_full:
        '「千秋公園（久保田城跡）」の水堀と復元御隅櫓を歩き、佐竹氏が治めた秋田の城下町の歴史に触れた。',
      image_prompt:
        'Restored wooden gate and white-walled corner turret of Kubota Castle in Senshu Park framed by green pine trees and lotus moat in Japanese woodblock print style, no text, no letters.',
    },
    {
      name: '秋田市民俗芸能伝承館（ねぶり流し館）',
      spot_type: '見どころ',
      description:
        '国重要無形民俗文化財「秋田竿燈まつり」の本物の竿燈を展示し、伝統芸能の歴史を伝える伝承館。隣接する旧金子家住宅も見学できる。9:30〜16:30（入館16:15まで）、年末年始休、一般130円。',
      address: '秋田県秋田市大町1-3-30',
      prefecture: '秋田県',
      municipality: '秋田市',
      lat: 39.72036,
      lng: 140.117008,
      clue: '千秋公園から西の大町エリアへ歩き、秋田の夏を彩る「秋田市民俗芸能伝承館（ねぶり流し館）」を訪ねよう（9:30〜16:30、年末年始休、一般130円）。館内には高さ約十二メートル、重さ約五十キログラムにもなる本物の大若竿燈が迫力満点に展示され、祭りのお囃子や提灯の仕組みを間近に見学できる。竿燈を操る妙技の展示を眺め、みちのくの熱い祭り文化にこれからもずっと深く親しみたい。',
      surprise:
        '「ねぶり流し」とは睡魔や厄災を川へ流す七夕の行事に由来する秋田竿燈まつりの古い呼び名で、今も夏の夜空を焦がす大祭として受け継がれている。',
      hook: '竿燈の熱気に触れたら、すぐ隣に保存された明治の商家・旧金子家住宅で旅を結ぼう。',
      f7_fragment: '高さ十二メートルの本物の竿燈を間近に望む、秋田の祭り伝承館。',
      f7_full:
        '「ねぶり流し館」で勇壮な本物の秋田竿燈を見上げ、みちのくに受け継がれる夏の伝統芸能の迫力に触れた。',
      image_prompt:
        'Museum hall displaying towering bamboo Kanto poles hung with dozens of glowing paper lanterns and festive drums in Japanese woodblock print style, no text, no letters.',
    },
    {
      name: '旧金子家住宅',
      spot_type: '見どころ',
      description:
        'ねぶり流し館に隣接して保存されている、江戸後期から明治期の秋田の商家建築。なまこ壁の土蔵や重厚な格子戸が往時の大町の繁栄を伝える。9:30〜16:30（共通観覧券一般130円）、年末年始休。',
      address: '秋田県秋田市大町1-3-31',
      prefecture: '秋田県',
      municipality: '秋田市',
      lat: 39.720219,
      lng: 140.117175,
      clue: 'ねぶり流し館のすぐ隣に保存された「旧金子家住宅」へ足を踏み入れ、秋田の旅を締めくくろう（9:30〜16:30、年末年始休）。江戸時代末期に建てられた質屋兼古着商の町家で、なまこ壁の土蔵と重厚な木の格子戸、通り土間が城下町大町の商家の暮らしを今に伝えている。歴史ある梁や囲炉裏の空間を見渡せば、市場と稲庭うどんと城跡を巡った秋田の散策がこれからもずっと深く豊かに心に刻まれる。',
      surprise:
        '明治十九年の大火で周囲が焼失した際も、旧金子家住宅は土蔵と主屋が奇跡的に残り、当時の秋田商人の建築技術を伝える貴重な文化遺産となっている。',
      hook: '',
      f7_fragment: 'なまこ壁の土蔵と重厚な格子戸が往時の繁栄を伝える、大町の古商家。',
      f7_full:
        '明治の商家の姿を残す「旧金子家住宅」を巡り、市場と稲庭うどんと城跡を歩いた秋田の旅を温かく結んだ。',
      image_prompt:
        'Historic Edo-Meiji Japanese merchant townhouse with dark timber lattice windows and black-and-white namako-wall storehouse in Akita in Japanese woodblock print style, no text, no letters.',
    },
  ],
};
