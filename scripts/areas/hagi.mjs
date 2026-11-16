export default {
  slug: 'hagi',
  station_order: 618,
  station: '萩駅',
  line: 'JR山陰本線',
  area_name: '萩・往時の駅舎と城下町の暮らし',
  prefecture: '山口県',
  municipality: '萩市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['山口県', '萩市', '萩駅', '萩焼', 'どんどん'],
  style_genre: 'oil_palette_impasto',
  title: 'レトロな萩駅舎と城下町の日常を歩く',
  description:
    '国の登録有形文化財に指定される洋風木造のJR萩駅舎を起点に、山口県民のソウルフードである釜揚げうどんの名店や唐樋町の和菓子店、菊屋横丁近くの喫茶店を経て、南古萩町の萩焼と地酒の店へと至る、萩の素顔を辿る散策路。',
  eyecatch_prompt:
    'Thick oil palette knife impasto painting of historic Hagi wooden railway station building in Yamaguchi, charming vintage western timber architecture, warm Japanese castle town plaster walls, ceramic Hagi pottery shop and steaming udon bowl, warm afternoon light, textured brushstrokes, no text, no people.',
  question:
    'レトロな駅舎から城下町の通りへと歩いた萩の旅で、最初に誰かへ伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「旧萩駅舎（萩市鉄道資料館）」の洋風木造建築と、往時の面影を残す美しい待合室',
      subtext:
        '駅に降り立った瞬間から旅情を誘う登録有形文化財の佇まいに、萩の町の誇りを感じた。',
      badge: {
        code: 'hagi_station_building',
        name_ja: '旧萩駅舎・レトロ建築の旅人',
        subtitle_en: 'Traveler of Historic Hagi Station',
        description:
          '旧萩駅舎（萩市鉄道資料館）を訪ね、国の登録有形文化財に指定された木造洋風駅舎に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a charming vintage Japanese timber railway station facade with arched gable roof and warm lamps, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「手打ちうどん どんどん 唐樋店」で、山盛りのネギと甘めの出汁のうどんを啜った瞬間',
      subtext:
        '萩で生まれ山口県全土へ広がったソウルフードの優しい味わいに、地元の活気を感じた。',
      badge: {
        code: 'hagi_dondon',
        name_ja: 'どんどん唐樋店・萩のうどんを味わいし者',
        subtitle_en: 'Taster of Hagi Dondon Udon',
        description:
          '手打ちうどん どんどん 唐樋店を訪ね、萩が誇る釜揚げうどんとソウルフードの味わいに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a classic ceramic bowl of Japanese beef udon noodles topped with vibrant chopped green scallions and kelp rice ball, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「かふぇ古萩」の落ち着いた店内で、優しい米粉スイーツと珈琲を味わった瞬間',
      subtext:
        '菊屋横丁のすぐ傍らに溶け込む穏やかな喫茶空間が、城下町歩きの足を優しく休めてくれた。',
      badge: {
        code: 'hagi_kohagi',
        name_ja: '南古萩・古萩の茶房を知る者',
        subtitle_en: 'Guest of Hagi Town Cafe',
        description:
          'かふぇ古萩を訪ね、城下町の菊屋横丁近くで米粉スイーツと珈琲を楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a dark coffee cup and delicate rice-flour sweet beside a wooden window overlooking a historic castle town lane, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「あらせ ～Hagind」で、素朴で温かな萩焼の器と萩の地酒に出会った瞬間',
      subtext:
        '城下町の通り沿いで、伝統の焼き物と地酒が現代の感性で息づく空間に心地よく惹かれた。',
      badge: {
        code: 'hagi_arase',
        name_ja: '南古萩・萩焼と地酒を知る者',
        subtitle_en: 'Admirer of Hagi Ware & Sake',
        description:
          'あらせ ～Hagindを訪ね、城下町の風情の中で伝統の萩焼と地元酒蔵の味わいに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting handcrafted beige Hagi-yaki ceramic sake cups and traditional pottery bowls on a cedar shelf, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'hagi_complete',
    name_ja: '萩・レトロ駅舎と城下町の日常を歩みし者',
    subtitle_en: 'Walker of Hagi Castle Town',
    description:
      '旧萩駅舎からどんどん 唐樋店、花ぐるま、かふぇ古萩、あらせ ～Hagindまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a vintage wooden station gable, a handcrafted ceramic Hagi bowl, and castle town white walls, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '旧萩駅舎（萩市鉄道資料館）',
      spot_type: '見どころ',
      description:
        '百年ほど前に建てられた洋風木造駅舎で、国の登録有形文化財に指定される萩の玄関口。館内の旧貴賓室や「萩市自然と歴史の展示館（鉄道資料館）」を見学でき、レトロな空気を満喫できる。見学自由・無料。',
      address: '山口県萩市大字椿3537-3',
      prefecture: '山口県',
      city: '萩市',
      lat: 34.393898,
      lng: 131.399915,
      clue: 'JR山陰本線の萩駅に降り立ったら、まずは改札を抜けて駅舎そのもの「旧萩駅舎（萩市鉄道資料館）」をじっくり眺めよう（見学自由・無料）。国の登録有形文化財に指定されている洋風木造建築で、白い漆喰の壁と急勾配の三角屋根、そして旧貴賓室や鉄道資料室が往時の優雅なロマンを今に伝えている。時代を越えた美しい木造の建築美にゆっくりと触れてから、いざ城下町方面へと元気に歩き出したい。',
      surprise:
        '現代でも現役の駅舎として使われながら、一歩中に入ると百年前と変わらぬ木の温もりと気品ある洋風の意匠がそのままに残る。列車を降りた直後から萩という町の歴史の厚みに包まれる、なんとも贅沢で印象深い旅の玄関口と心からいえるだろうね。実に美しい駅だ。',
      hook: '駅舎をじっくり眺めたら、北北東へ徒歩29分の手打ちうどん どんどん 唐樋店へ向かおう。',
      f7_fragment: '登録有形文化財の木造洋風建築、往時のロマン薫る萩の素敵な玄関口。',
      f7_full: '国の登録有形文化財「旧萩駅舎」の洋風木造建築と鉄道資料を見学し、往時のロマンの薫りの中で散策をゆったり始めた。',
      image_prompt:
        'Historic western-style wooden railway station building of Hagi Station with white plaster facade and steep gabled roof, no text, no people.',
    },
    {
      name: '手打ちうどん どんどん 唐樋店',
      spot_type: '食事',
      description:
        '山口県民のソウルフードとして親しまれる「どんどん」の発祥店。茹でたての柔らかな麺と少し甘めの出汁、卓上の入れ放題の刻みネギ、わかめむすびが名物。営業時間9:00〜20:00（L.O.19:30）、無休。',
      address: '山口県萩市唐樋町30-1',
      prefecture: '山口県',
      city: '萩市',
      lat: 34.40971,
      lng: 131.403157,
      clue: '萩駅から橋本川を渡って北北東へ徒歩29分、唐樋町の商店街の一角にある「手打ちうどん どんどん 唐樋店」で昼食にしよう（9:00〜20:00、無休）。山口県全土で愛されるうどんチェーン発祥の店であり、注文から驚くほど早く届く釜揚げの麺と少し甘めの澄んだ出汁、さらに卓上の山盛りネギをたっぷりかけていただくのが流儀だ。名物のわかめむすびとともに萩の活気あふれる味わいを堪能しよう。',
      surprise:
        '老若男女の地元の人々が次々と訪れ、和やかにうどんを啜る光景そのものが萩の温かい日常を映し出している。もちもちと柔らかな麺に染み込んだ優しい出汁の旨みが、川を渡って歩いてきた旅人の疲れを芯から心地よく癒してくれるに違いない。ずっと通いたくなる店だ。',
      hook: 'うどんでお腹を満たしたら、北北西へ徒歩3分の花ぐるまへ向かおう。',
      f7_fragment: '山盛りネギと甘めの出汁が名物、萩発祥のソウルフードの手打ちうどん。',
      f7_full: '萩発祥の「手打ちうどん どんどん 唐樋店」で釜揚げうどんとわかめむすびを味わい、地元の活気ある食文化に触れた。',
      image_prompt:
        'Lively Japanese udon diner table with a steaming bowl of beef udon topped with generous green scallions and a kelp rice ball, no text, no people.',
    },
    {
      name: '花ぐるま',
      spot_type: '買い物',
      description:
        '唐樋町で季節の和菓子や萩ならではの銘菓を扱う和菓子店。夏みかんを使ったお菓子や愛らしい干菓子、大福などが散策のお供や土産に人気。営業時間10:00〜18:00、不定休。',
      address: '山口県萩市唐樋町90-1',
      prefecture: '山口県',
      city: '萩市',
      lat: 34.410979,
      lng: 131.402349,
      clue: 'どんどんから北北西へ徒歩3分、街角に優しい和の彩りを添える和菓子店「花ぐるま」に立ち寄ろう（10:00〜18:00、不定休）。季節の生菓子や萩の特産・夏みかんを活かしたお菓子が丁寧に並ぶ。',
      surprise:
        'ひとつひとつの菓子に季節の花や萩の豊かな自然が表現されており、眺めているだけで自然と心が和んでくる。城下町の散策途中に手軽に楽しめる上品な甘味は、昔ながらの商店街を歩く醍醐味を改めて優しく教えてくれる、なんとも素敵で温かい老舗和菓子店といえる。',
      hook: 'お菓子を手に入れたら、西へ徒歩14分のかふぇ古萩で一息つこう。',
      f7_fragment: '夏みかんや季節の彩りが並ぶ、唐樋町の温かな手づくり和菓子店。',
      f7_full: '唐樋町の和菓子店「花ぐるま」を訪ね、萩ならではの夏みかん菓子や季節の和菓子の繊細な美しさにじっくり深く触れた。',
      image_prompt:
        'Charming Japanese wagashi shop display featuring colorful seasonal sugar sweets, citrus confections and daifuku cakes on wooden trays, no text, no people.',
    },
    {
      name: 'かふぇ古萩',
      spot_type: '休憩',
      description:
        '城下町の観光名所・菊屋横丁のすぐ近くにある落ち着いたカフェ。身体に優しい米粉スイーツやこだわりの珈琲で散策途中の足を休められる。営業時間11:00〜17:00、月〜水曜定休。',
      address: '山口県萩市南古萩町20-2',
      prefecture: '山口県',
      city: '萩市',
      lat: 34.412464,
      lng: 131.393193,
      clue: '花ぐるまから西へ徒歩14分、歴史的な白壁の菊屋横丁にもほど近い南古萩町の「かふぇ古萩」でひと息つこう（11:00〜17:00、月〜水曜休）。城下町の穏やかな空気の中で、身体に優しい米粉を使ったスイーツや丁寧に淹れた珈琲を味わえば、歩き疲れた足も自然と軽やかになる。伝統的な武家屋敷や町家が連なる界隈の気配を感じながら、静かな午後の豊かな余白を心ゆくまでゆっくり楽しみたい。',
      surprise:
        '重厚な歴史的景観が続く城下町のすぐ傍らに、旅人が肩の力を抜いて気軽に立ち寄れる温かなカフェが寄り添うのが嬉しい。優しい米粉のお菓子と珈琲の温もりが、城下町歩きの心地よい節目を作ってくれる大切な憩いの場所だ。いつまでも長居したくなるね。本当に。',
      hook: 'カフェを出たら、南東へ徒歩3分のあらせ ～Hagindで旅を結ぼう。',
      f7_fragment: '菊屋横丁のすぐ近くで過ごす、米粉スイーツと珈琲の城下町カフェ時間。',
      f7_full: '南古萩町の「かふぇ古萩」で優しい米粉スイーツと珈琲を楽しみ、城下町歩きの穏やかな休息を心からゆったりたっぷりとった。',
      image_prompt:
        'Cozy small Japanese castle-town cafe interior with wooden table, delicate rice-flour cake and coffee cup near sunlit window, no text, no people.',
    },
    {
      name: 'あらせ ～Hagind',
      spot_type: '買い物',
      description:
        '南古萩町の城下町エリアにある萩焼と地酒の専門店。店内には萩焼の器で萩の地酒を味わえる角打ちスペースも備え、伝統と今を心地よく結ぶ。営業時間9:00〜17:00、年中無休。',
      address: '山口県萩市南古萩町35-8',
      prefecture: '山口県',
      city: '萩市',
      lat: 34.410614,
      lng: 131.393802,
      clue: 'かふぇ古萩から南東へ徒歩3分、白壁と夏みかんの垣根が残る南古萩町の通り沿いに佇む「あらせ ～Hagind」で散策を締めくくろう（9:00〜17:00、年中無休）。ここは伝統的な萩焼の器と萩の酒蔵の地酒を揃える専門店で、店内では萩焼の盃で地酒を少し味わえる空間も用意される。素朴で使うほどに味わい深い風合いが育つ「萩の七化け」の器をじっくり手に取って、萩の歩みを美しく結びたい。',
      surprise:
        '伝統工芸としての萩焼を飾るだけでなく、地酒とともに日常の中で楽しむ提案がなんとも粋で心地よい。古い城下町の景観の中で新しい風を取り入れながら文化を受け継ぐ店の姿勢に、萩という街の揺るぎない魅力をきっと誰もが深く感じるに違いない。実にいい店だ。',
      hook: '',
      f7_fragment: '白壁の城下町で出会う、素朴な萩焼の器と萩の地酒が息づく空間。',
      f7_full: '南古萩町の「あらせ ～Hagind」で萩焼の器と地酒の魅力に深く触れ、駅舎から続いた萩の散策を味わい深く結んだ。',
      image_prompt:
        'Warm Japanese pottery and local sake shop in Hagi castle town displaying handcrafted beige Hagi-yaki bowls and sake bottles on timber shelves, no text, no people.',
    },
  ],
};
