export default {
  slug: 'kochi',
  station_order: 619,
  station: '高知駅',
  line: 'JR土讃線',
  area_name: '高知・はりまや橋と高知城',
  prefecture: '高知県',
  municipality: '高知市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['高知県', '高知市', '高知駅', 'ひろめ市場', '高知城'],
  style_genre: 'pastel_chalk_morning',
  title: '南国・高知のはりまや橋と高知城を歩く',
  description:
    'JR高知駅から路面電車の走る大通りを南へ進み、よさこい節ゆかりのはりまや橋、土佐茶カフェと老舗喫茶メフィストフェレスが並ぶ帯屋町商店街を経て、土佐の食が集うひろめ市場と現存十二天守の高知城へと至る、土佐の王道散策路。',
  eyecatch_prompt:
    'Soft pastel chalk morning illustration of Kochi castle town in Shikoku, white-walled Kochi Castle keep atop green hill, arched red Harimaya bridge beside willow tree and tramway street, lively market lanterns and warm southern sunshine, artistic chalk texture, no text, no people.',
  question:
    '路面電車が走る高知の街をはしごして歩いたあと、最初に誰かへ伝えたい風景はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '「高知城（高知公園）」の本丸に現存する、木造の天守閣と御殿を見上げた瞬間',
      subtext:
        '全国で唯一、本丸の建物群がそのまま残る名城の凛とした姿に、土佐の歴史の重みを感じた。',
      badge: {
        code: 'kochi_castle',
        name_ja: '高知城・南海の名城を仰ぐ者',
        subtitle_en: 'Watcher of Kochi Castle',
        description:
          '高知城を訪ね、現存十二天守の一つと本丸御殿が残る南海道随一の名城を歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the white-walled wooden Kochi Castle keep rising above stone walls and southern green camphor trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 4,
      text: '「ひろめ市場」の活気あふれる屋台村で、藁焼き鰹のたたきを味わった瞬間',
      subtext:
        '昼間から地元の人と旅人が肩を並べて笑い合う土佐のおきゃく文化に、元気をもらった。',
      badge: {
        code: 'kochi_hirome',
        name_ja: 'ひろめ市場・土佐の豪快を味わう者',
        subtitle_en: 'Taster of Kochi Hirome Market',
        description:
          'ひろめ市場を訪ね、活気あふれる屋台村で本場の藁焼き鰹のたたきなど土佐の味を堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring thick slices of straw-seared bonito tataki with sliced garlic and green onions on a ceramic plate, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '「ひだまり小路 土佐茶カフェ」で、芳醇な土佐茶や和紅茶の香りに出会った瞬間',
      subtext:
        '清流の里で育まれた土佐のお茶の爽やかな旨みに、南国の街歩きの疲れが癒やされた。',
      badge: {
        code: 'kochi_tosacha',
        name_ja: '帯屋町・土佐茶の香りを携える者',
        subtitle_en: 'Keeper of Tosa Tea',
        description:
          'ひだまり小路 土佐茶カフェを訪ね、高知ならではの土佐茶や和紅茶の豊かな風味に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a Japanese teapot pouring golden-green Tosa tea into a handcrafted ceramic cup beside tea leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 3,
      text: '「メフィストフェレス」のレトロで優雅な中庭付き喫茶室で、サイフォン珈琲を飲んだ瞬間',
      subtext:
        '帯屋町商店街の真ん中に広がる非日常の喫茶文化に、高知の街の奥深い魅力を見た。',
      badge: {
        code: 'kochi_mephistopheles',
        name_ja: 'メフィストフェレス・帯屋町の喫茶人',
        subtitle_en: 'Guest of Kochi Retro Cafe',
        description:
          'メフィストフェレスを訪ね、高知市中心部で長く愛されるレトロな老舗喫茶の空気を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a classic glass siphon coffee brewer and porcelain cup on an antique marble cafe table beside courtyard greenery, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kochi_complete',
    name_ja: '高知・はりまや橋と高知城を歩みし者',
    subtitle_en: 'Walker of Kochi Castle Town',
    description:
      'はりまや橋から土佐茶カフェ、メフィストフェレス、ひろめ市場、高知城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining Kochi Castle keep silhouette, an arched red bridge, and a ceramic teacup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'はりまや橋',
      spot_type: '見どころ',
      description:
        'よさこい節の舞台としても全国に知られる高知のシンボル。朱色の欄干を持つ小さな太鼓橋とせせらぎの公園が街の交差点に佇む。終日散策自由・無料。',
      address: '高知県高知市はりまや町1-1',
      prefecture: '高知県',
      city: '高知市',
      lat: 33.559999,
      lng: 133.543266,
      clue: 'JR高知駅から路面電車と並走する大通りを南へ歩き、高知のシンボル「はりまや橋」を訪ねよう（終日開放・無料）。かつて堀川に架かっていた橋の跡に再現された朱色の欄干と柳の木が、よさこい節に歌われた純信とお馬の恋物語を今に伝えている。街の真ん中に整備されたせせらぎのそばで記念の風景をゆっくりと眺めたら、すぐ西側に伸びる賑やかな帯屋町商店街へと心躍らせながら足を踏み入れよう。',
      surprise:
        '日本三大がっかり名所とユーモアを込めて語られることもあるが、実際に目の前に立つと都会の交差点に溶け込む朱色の橋と地下広場やからくり時計の佇まいが実に愛らしい。肩肘張らずに笑って楽しめる高知の気質が表れる楽しい名所だ。旅の門出にぴったりといえる。',
      hook: 'はりまや橋を後にしたら、西へ徒歩9分のひだまり小路 土佐茶カフェへ向かおう。',
      f7_fragment: 'よさこい節の物語が息づく、高知の街角に架かる小さな朱色の橋。',
      f7_full: '高知のシンボル「はりまや橋」を訪ね、よさこい節ゆかりの朱色の欄干と南国の街並みに触れて心地よく歩き始めたところだ。',
      image_prompt:
        'Iconic small arched red wooden bridge of Harimaya-bashi framed by green willow trees along a neat city stream in sunny Kochi, no text, no people.',
    },
    {
      name: 'ひだまり小路 土佐茶カフェ',
      spot_type: '買い物',
      description:
        '高知特産の土佐茶や和紅茶の茶葉・茶器が揃う古民家風カフェ＆ショップ。仁淀川や四万十川流域で育まれた多彩なお茶をお土産に選べる。営業時間11:00〜17:00（L.O.16:30）、水曜定休。',
      address: '高知県高知市帯屋町2-1-31',
      prefecture: '高知県',
      city: '高知市',
      lat: 33.560204,
      lng: 133.53727,
      clue: 'はりまや橋から西へ徒歩9分、帯屋町商店街の一角に佇む「ひだまり小路 土佐茶カフェ」を訪ねよう（11:00〜17:00、水曜定休）。清流の里・高知で育まれた土佐茶や和紅茶の茶葉、茶器が豊富に揃う。',
      surprise:
        '実は知る人ぞ知るお茶の名産地である高知の山々で育った煎茶や和紅茶は、渋みが少なく爽やかで豊かな香りが大きな魅力といえる。可愛らしいパッケージのお茶や焼き菓子を手に取れば、旅のあとも自宅で土佐の風をきっと懐かしく思い出せるに違いない。お土産に最適だ。',
      hook: '土佐茶を選んだら、西南西へ徒歩3分のメフィストフェレスで珈琲を一服しよう。',
      f7_fragment: '清流の里が育んだ土佐茶と和紅茶の香りが満ちる、帯屋町の古民家。',
      f7_full: '帯屋町の「ひだまり小路 土佐茶カフェ」を訪ね、高知ならではの香り高い土佐茶と和紅茶の魅力にじっくりと出会った。',
      image_prompt:
        'Warm Japanese tea shop wooden shelf displaying neatly packaged Tosa green tea canisters and handcrafted ceramic teapots, no text, no people.',
    },
    {
      name: 'メフィストフェレス',
      spot_type: '休憩',
      description:
        '高知を代表する喫茶チェーン・現代企業社が手がける帯屋町のレトロ喫茶。100席を超える中庭付きの非日常空間でサイフォン珈琲やモーニングを楽しめる。平日9:00〜21:00（土日祝8:00〜）、無休。',
      address: '高知県高知市帯屋町2-5-23',
      prefecture: '高知県',
      city: '高知市',
      lat: 33.559473,
      lng: 133.53559,
      clue: '土佐茶カフェから西南西へ徒歩3分、インパクトのある外観が目印の老舗喫茶「メフィストフェレス」へ入ろう（平日9:00〜21:00・土日祝8:00〜、無休）。一歩足を踏み入れると、百席を超える広々としたフロアと緑豊かな中庭が広がり、商店街の喧騒を忘れさせてくれる。丁寧に淹れられたサイフォン珈琲と手作りのスイーツをゆっくりと味わいながら、高知独自の奥深い喫茶文化に浸りたい。',
      surprise:
        '高知は人口あたりの喫茶店数が全国でもトップクラスで、朝から豪華なモーニングを楽しむ文化が根付く。重厚なアンティークの家具と中庭の明るい光が美しく調和した空間は、まさに土佐の喫茶愛を象徴する素晴らしい名店といえるだろう。ずっと過ごしたくなる。',
      hook: '喫茶室で寛いだら、北北東へ徒歩1分のひろめ市場で土佐の味覚を堪能しよう。',
      f7_fragment: '帯屋町の真ん中に広がる、中庭とサイフォン珈琲のレトロな空間。',
      f7_full: '老舗喫茶「メフィストフェレス」の落ち着いた空間でサイフォン珈琲を味わい、高知に根付く豊かな喫茶文化にじっくり触れた。',
      image_prompt:
        'Retro-elegant Japanese kissaten cafe interior with vintage wooden booths, sunlit green courtyard view and glass siphon coffee pot, no text, no people.',
    },
    {
      name: 'ひろめ市場',
      spot_type: '食事',
      description:
        '約60店舗の飲食店や土産店が軒を連ねる高知最大の屋台村風フードコート。本場の藁焼き鰹のたたきや屋台餃子、地酒を地元の人と相席で楽しめる。平日祝10:00〜23:00（日曜9:00〜）、不定休。',
      address: '高知県高知市帯屋町2-3-1',
      prefecture: '高知県',
      city: '高知市',
      lat: 33.560116,
      lng: 133.535937,
      clue: 'メフィストフェレスから北北東へ徒歩1分、食欲をそそる香ばしい煙が漂う「ひろめ市場」へ踏み入ろう（10:00〜23:00・日曜9:00〜）。館内には約六十もの飲食店が集まり、目の前で炎を上げて焼き上げる本場の「藁焼き鰹のたたき」や屋台餃子、あおさのりの天ぷらなど土佐のご当地グルメが勢揃いする。活気あるテーブル席で好きな料理を持ち寄り、高知の陽気な空気をたっぷり味わおう。',
      surprise:
        '昼間から地元の人々と観光客が同じテーブルを囲み、笑顔で語り合う「おきゃく」の精神が市場全体に満ちている。分厚く切られた鰹のたたきに塩とスライスにんにくを添えてほおばる瞬間は、高知へ来た喜びを全身で味わう実に贅沢なひとときと誰もが感じるだろう。',
      hook: '土佐の味覚でお腹を満たしたら、西北西へ徒歩6分の高知城（高知公園）へ登城しよう。',
      f7_fragment: '藁焼き鰹の香ばしい煙と笑い声が満ちる、土佐の食の活気ある殿堂。',
      f7_full: '活気あふれる「ひろめ市場」で本場の藁焼き鰹のたたきを味わい、土佐の陽気なおきゃく文化を全身でたっぷり楽しんだ。',
      image_prompt:
        'Lively Japanese indoor food market stall serving thick slices of straw-seared bonito tataki with sliced garlic and scallions on a plate, no text, no people.',
    },
    {
      name: '高知城（高知公園）',
      spot_type: '見どころ',
      description:
        '山内一豊によって築かれ、全国に12しか現存しない木造古天守の一つを擁する名城。本丸の御殿と天守がともに現存する日本で唯一の城として知られる。天守9:00〜17:00（12/26〜1/1休）、入館500円。',
      address: '高知県高知市丸ノ内1-2-1',
      prefecture: '高知県',
      city: '高知市',
      lat: 33.561352,
      lng: 133.532194,
      clue: 'ひろめ市場から道を渡って西北西へ徒歩6分、堂々たる追手門をくぐり「高知城（高知公園）」の天守を目指そう（9:00〜17:00、500円）。全国に十二しか残らない現存天守の一つであり、さらに本丸の御殿と天守が揃って現存する日本で唯一の名城だ。急な石段を登って最上階の回廊に出れば、南国の明るい光に照らされた高知の街並みと遠くの山並みが一望でき、土佐の散策を晴れやかに結べる。',
      surprise:
        '四百年以上の歳月をくぐり抜けてきた木造の柱や梁が放つ重厚な存在感は、復元天守とはまた違う本物の迫力に満ち溢れる。城下から追手門、そして天守までを一望する開放的な風の心地よさに、いつまでもその場を離れがたくなるに違いない。絶好の締めくくりだ。',
      hook: '',
      f7_fragment: '現存天守と本丸御殿が揃う日本で唯一の名城、南海道の誇り高き城。',
      f7_full: '現存天守と御殿が残る「高知城」へ登城し、南国の光あふれる高知の街並みを一望して散策を清々しく元気に締めくくった。',
      image_prompt:
        'White-walled wooden Kochi Castle keep rising atop ancient stone walls framed by lush green southern trees under bright blue sky, no text, no people.',
    },
  ],
};
