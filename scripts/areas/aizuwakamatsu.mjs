export default {
  slug: 'aizuwakamatsu',
  station_order: 611,
  station: '会津若松駅',
  line: 'JR磐越西線・只見線',
  area_name: '会津若松・七日町通りと鶴ヶ城',
  prefecture: '福島県',
  municipality: '会津若松市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['福島県', '会津若松市', '会津若松駅', '七日町通り', '鶴ヶ城'],
  style_genre: 'nihonga_mineral_gold',
  title: '会津若松・七日町通りの蔵と鶴ヶ城を歩く',
  description:
    '会津若松駅から蔵や洋館が並ぶ七日町通りに入り、老舗菓房と会津漆器の店、囲炉裏で焼くみそ田楽の名店を巡り、野口英世ゆかりの洋館喫茶を経て赤瓦の天守がそびえる鶴ヶ城へと至る、城下町の誇りと手仕事を辿る散策路。',
  eyecatch_prompt:
    'Nihonga mineral pigment and gold leaf style illustration of Tsuruga Castle with distinctive red roof tiles and stone walls in Aizuwakamatsu Fukushima, historic Nanokamachi storehouse street, wooden lacquerware shop and distant misty Bandai mountain, no text, no people.',
  question:
    '蔵の街並みと城下町の面影が残る会津若松を歩いたあと、いちずに思い出す景色はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 3,
      text: '「満田屋」の囲炉裏端で、香ばしい味噌ダレを塗って焼くみそ田楽を味わった瞬間',
      subtext:
        '歴史ある味噌蔵の中で炭火を囲んでいただく郷土の味が、会津の暮らしを教えてくれた。',
      badge: {
        code: 'aizu_mitsutaya',
        name_ja: '満田屋・囲炉裏の田楽を味わいし者',
        subtitle_en: 'Taster of Aizu Miso Dengaku',
        description:
          '満田屋を訪ね、歴史ある味噌蔵の囲炉裏で炭火焼きのみそ田楽を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting skewered konjac, rice cakes and taro coated in glistening roasted miso glaze over glowing charcoal hearth, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 5,
      text: '「鶴ヶ城（若松城）」の赤瓦の天守と、石垣越しに広がる会津盆地を仰いだ瞬間',
      subtext:
        '幾多の歴史を見守り続けてきた名城の凛とした佇まいに、城下町の誇りが重なった。',
      badge: {
        code: 'aizu_tsurugajo',
        name_ja: '鶴ヶ城・赤瓦の城址を仰ぐ者',
        subtitle_en: 'Watcher of Tsuruga Castle',
        description:
          '鶴ヶ城（若松城）を訪ね、国内唯一の赤瓦の天守と美しい石垣の城址を歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a white Japanese castle keep with distinctive reddish-brown roof tiles rising above tall stone walls and pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '「白木屋漆器店」の洋館風土蔵造りの店内で、艶やかな会津漆器を見つめた瞬間',
      subtext:
        '三百年以上受け継がれてきた職人技の深みと、歴史的建造物の重厚な空間に惹かれた。',
      badge: {
        code: 'aizu_shirokiya',
        name_ja: '会津塗り・三百年の技を知る者',
        subtitle_en: 'Admirer of Aizu Lacquerware',
        description:
          '白木屋漆器店を訪ね、歴史ある洋館風土蔵の店内で伝統の会津漆器に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing glossy vermilion and black Japanese lacquerware bowls with delicate gold leaf maki-e floral patterns, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「會津壹番館」のクラシカルな木造洋館で、野口英世ゆかりの空気と珈琲を味わった瞬間',
      subtext:
        '若き日の医学者が過ごした蔵造りの洋館で、時の流れを感じる穏やかな一服を楽しんだ。',
      badge: {
        code: 'aizu_ichibankan',
        name_ja: '會津壹番館・青春の洋館を旅する者',
        subtitle_en: 'Traveler of Aizu Retro Cafe',
        description:
          '會津壹番館を訪ね、野口英世ゆかりの蔵造り洋館で自家焙煎珈琲の時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting an antique dark wood coffee cup and slice of classic cake beside an arched historic window frame, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'aizuwakamatsu_complete',
    name_ja: '会津若松・七日町と鶴ヶ城を歩みし者',
    subtitle_en: 'Walker of Aizu Castle Town',
    description:
      '太郎庵から白木屋漆器店、満田屋、會津壹番館、鶴ヶ城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the red-tiled Tsuruga Castle keep, a glossy lacquer bowl, and a glowing charcoal hearth, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '太郎庵 七日町菓房',
      spot_type: '買い物',
      description:
        '会津を代表する菓子舗の七日町通り沿い店舗。名物の会津の天神さまをはじめ、会津ゆかりの和洋菓子を揃える。営業時間9:30〜17:00、元日休。',
      address: '福島県会津若松市七日町3-35',
      prefecture: '福島県',
      city: '会津若松市',
      lat: 37.500399,
      lng: 139.920697,
      clue: '会津若松駅から蔵や洋館が連なる七日町通りへ入り、まずは白壁と蔵造りが目を引く「太郎庵 七日町菓房」を訪ねよう（9:30〜17:00、元日休）。会津の人々に親しまれてきた菓子舗では、チーズ風味のブッセ「会津の天神さま」をはじめ、会津の風土や民話を映したお菓子がずらりと並んでいる。通りを歩く序章に、お気に入りの銘菓をひとつ手に取って城下町の豊かな空気をゆったりと味わおう。',
      surprise:
        '城下町の景観に溶け込む蔵造りの店構えの中には、会津の歴史や文化をモチーフにしたお菓子が豊富に揃う。土地への愛着が詰まった丁寧な品揃えを眺めているだけで、これから歩く七日町通りの楽しみがいっそう大きく、そしてどこまでも豊かに膨らんでいくはずだ。',
      hook: '太郎庵を出たら、東南東へ徒歩9分の白木屋漆器店へ向かおう。',
      f7_fragment: '七日町通りの入口で出会う、会津の風土を豊かに映す老舗の菓子舗。',
      f7_full: '七日町通りの「太郎庵 七日町菓房」を訪ね、会津の風土や物語を映した郷土菓子の豊かな品揃えにじっくりと深く触れた。',
      image_prompt:
        'Traditional Japanese confectionery shop exterior with white plaster storehouse walls and wooden lattice windows on a historic castle town street, no text, no people.',
    },
    {
      name: '白木屋漆器店',
      spot_type: '見どころ',
      description:
        '三百年以上の歴史を誇る会津漆器の老舗。ルネッサンス様式の洋館風土蔵造りの店舗は市の歴史的景観指定建造物に指定されている。営業時間9:30〜17:30、水曜定休。',
      address: '福島県会津若松市大町1-2-10',
      prefecture: '福島県',
      city: '会津若松市',
      lat: 37.49903,
      lng: 139.926528,
      clue: '太郎庵から東南東へ徒歩9分、重厚な洋館風の土蔵造りがひときわ目を引く「白木屋漆器店」に着く（9:30〜17:30、水曜定休）。三百年以上続く会津漆器の老舗で、百年以上前に建てられた店舗は市の歴史的景観指定建造物にも選ばれた名建築だ。店内には伝統的な椀や重箱から現代の食卓になじむ器まで艶やかな漆器がずらりと並び、蒔絵の繊細な輝きに思わず時間を忘れて見入ってしまうほど美しい。',
      surprise:
        '洋風の外観と伝統的な土蔵造りが見事に融合した店舗そのものが、時代を越えて新しい美を取り入れてきた会津商人の気概を物語る。手のひらにすっと馴染む漆器の軽さと温もりに、受け継がれる手仕事の確かな技を心地よく、そして深く感じ取れるのが実に嬉しい。',
      hook: '漆器店の美しさを味わったら、西へ徒歩2分の満田屋でみそ田楽をいただこう。',
      f7_fragment: '洋館風土蔵造りの店内に輝く、三百年続く会津漆器の艶やかな技。',
      f7_full: '「白木屋漆器店」の洋館風土蔵造りの店内を巡り、三百年以上受け継がれてきた会津漆器の優美な手仕事にじっくり触れた。',
      image_prompt:
        'Historic Japanese lacquerware gallery inside a classic timber-and-plaster merchant building displaying glossy red and black maki-e bowls, no text, no people.',
    },
    {
      name: '満田屋',
      spot_type: '食事',
      description:
        '天保年間創業の味噌専門店が営む、味噌蔵を改装した郷土料理店。囲炉裏の炭火で香ばしく焼く名物「みそ田楽」が人気。食事10:30〜16:30（L.O.16:20）、水曜定休。',
      address: '福島県会津若松市大町1-1-25',
      prefecture: '福島県',
      city: '会津若松市',
      lat: 37.498896,
      lng: 139.925147,
      clue: '白木屋漆器店から西へ徒歩2分、香ばしい味噌の匂いが漂う蔵造りの「満田屋」で昼食にしよう（食事10:30〜16:30、水曜定休）。囲炉裏の炭火で焼き上げる伝統のみそ田楽を味わいたい。',
      surprise:
        '太い梁が走る歴史ある味噌蔵の中で、こんにゃくや豆腐、餅、身欠きニシンに特製味噌を塗ってじっくり焼く光景は五感を心地よく刺激する。秘伝のゆずみそや山椒みその香ばしさが口いっぱいに広がり、会津の冬の保存食の知恵が身体に深く染み渡っていくのがわかる。',
      hook: '満田屋でお腹を満たしたら、南東へ徒歩4分の會津壹番館で珈琲を一服しよう。',
      f7_fragment: '味噌蔵の囲炉裏で香ばしく焼き上げる、会津伝統の素朴なみそ田楽。',
      f7_full: '老舗味噌蔵を改装した「満田屋」の囲炉裏端で、香ばしい炭火焼きの会津みそ田楽を心ゆくまでゆったりじっくり堪能した。',
      image_prompt:
        'Traditional Japanese miso storehouse dining room with skewers of konjac and rice cake roasting around a glowing charcoal hearth, no text, no people.',
    },
    {
      name: '會津壹番館',
      spot_type: '休憩',
      description:
        '野口英世が手術を受け青春時代を過ごした旧会陽医院の蔵造り洋館を利用したレトロ喫茶。2階は野口英世青春館となっている。営業時間8:00〜20:00、1月1日休。',
      address: '福島県会津若松市中町4-18',
      prefecture: '福島県',
      city: '会津若松市',
      lat: 37.497653,
      lng: 139.927245,
      clue: '満田屋から南東へ徒歩4分、中町の角に凛と建つ蔵造り洋館の喫茶店「會津壹番館」でひと休みしよう（8:00〜20:00、元日休）。ここは若き日の野口英世が左手のやけどの手術を受け、書生として学んだ旧会陽医院の建物を活かした歴史ある場所だ。重厚な木の柱とクラシックな調度に囲まれた一階で自家焙煎珈琲や手作りケーキを味わいながら、二階の野口英世青春館へも思いをめぐらせてみたい。',
      surprise:
        '白壁と黒漆喰の洋風建築の中に差し込む午後の光と、ネルドリップ珈琲の深い香りが、時代をさかのぼったかのような落ち着いた時間を生み出している。若き志の記憶が息づく空間で過ごす一服は、城へ向かう歩みに静かな余韻を添えてくれるのが実に嬉しいところだ。',
      hook: '珈琲で一息ついたら、南へ徒歩18分の鶴ヶ城（若松城）へ登城しよう。',
      f7_fragment: '野口英世ゆかりの蔵造り洋館で味わう、香り高い自家焙煎の珈琲。',
      f7_full: '旧会陽医院の洋館を活かした「會津壹番館」で自家焙煎珈琲を味わい、若き日の野口英世が過ごした空間にじっくり触れた。',
      image_prompt:
        'Classic retro Japanese wooden cafe interior inside a historic merchant clinic with dark timber beams, coffee cup and cake by arched window, no text, no people.',
    },
    {
      name: '鶴ヶ城（若松城）',
      spot_type: '見どころ',
      description:
        '会津若松の象徴であり、国内唯一の赤瓦をまとった美しい天守閣を持つ名城跡。迫力ある石垣や本丸公園の四季折々の景観を楽しめる。開館8:30〜17:00（最終入城16:30）、無休。',
      address: '福島県会津若松市追手町1-1',
      prefecture: '福島県',
      city: '会津若松市',
      lat: 37.48782,
      lng: 139.929666,
      clue: '會津壹番館から南へ徒歩18分、堀と堂々たる石垣に囲まれた「鶴ヶ城（若松城）」の本丸へ踏み入ろう（8:30〜17:00、無休）。白壁に国内唯一の赤瓦が映える五層の天守閣は、難攻不落の名城として名高く、どの角度から見上げても凛とした気品を放っている。天守内の展示で城下町の歴史をじっくり辿り、最上層から会津盆地と磐梯山の雄大な山並みを望んで、城下町歩きの美しい結びとしよう。',
      surprise:
        '冬の厳しい凍結に耐えるために選ばれたという赤瓦の輝きは、青い空にも木々の緑にも鮮やかに映える。職人の蔵から名城の天守までを自らの足で繋いだ先に広がる会津盆地の眺めが、城下町の物語を静かに、そして見事に完成させてくれるに違いないところといえる。',
      hook: '',
      f7_fragment: '国内唯一の赤瓦をまとってそびえる、会津城下町の誇り高き天守閣。',
      f7_full: '赤瓦の天守閣が美しい「鶴ヶ城（若松城）」に登城し、城下町の誇りと会津盆地の眺めの中で散策を静かに締めくくった。',
      image_prompt:
        'Majestic Tsuruga Castle keep with white walls and distinctive reddish-brown roof tiles rising above massive stone walls and green pine trees, no text, no people.',
    },
  ],
};
