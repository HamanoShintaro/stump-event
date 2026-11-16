export default {
  slug: 'ushiku',
  station_order: 631,
  station: '牛久',
  line: 'JR常磐線',
  area_name: '牛久・赤煉瓦の葡萄酒蔵と城下町',
  prefecture: '茨城県',
  municipality: '牛久市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['茨城県', '牛久市', '牛久駅', '牛久シャトー', '日本遺産'],
  style_genre: 'ukiyoe_woodblock',
  title: '牛久・日本初の葡萄酒蔵と煉瓦の街を歩く',
  description:
    'JR常磐線牛久駅から、日本遺産・国重要文化財に指定される明治の赤煉瓦ワイン醸造場「牛久シャトー」と「牛久シャトーレストラン」、駅東口の芋菓子専門店「芋千」、ジャズ喫茶「サイトウコーヒー」、老舗「伊勢屋餅菓子店」を巡る散策路。',
  eyecatch_prompt:
    'Modern shin-hanga woodblock print illustration of Ushiku town showing historic red-brick winery chateau buildings with arched windows, lush vineyard trees, warm sweet potato snack shop, cozy jazz kissaten cafe and traditional mochi shop, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '日本ワイン発祥の赤煉瓦建築と街角の温かな味が繋がる牛久を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「牛久シャトー」の広大な敷地で、明治期そのままの赤煉瓦醸造場を見上げた瞬間',
      subtext:
        '神谷傳兵衛が築いた日本初の本格ワイン醸造場の重厚な煉瓦壁が、百年以上の時を伝えていた。',
      badge: {
        code: 'ushiku_chateau',
        name_ja: '牛久シャトー・赤煉瓦を仰ぎし者',
        subtitle_en: 'Admirer of Ushiku Chateau',
        description:
          '牛久シャトーを訪ね、日本初の本格ワイン醸造場を伝える国重要文化財の赤煉瓦建築に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a historic Meiji-era red-brick French-style winery chateau with arched doorways and lush green ivy, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「牛久シャトーレストラン」の煉瓦蔵の中で、地元食材の一皿を味わった瞬間',
      subtext:
        '百年を超えるワイン貯蔵庫を活かした高い天井の空間で、優雅な昼食の時間を楽しんだ。',
      badge: {
        code: 'ushiku_chateau_restaurant',
        name_ja: '牛久・赤煉瓦の葡萄酒蔵を味わいし者',
        subtitle_en: 'Diner of Brick Cellar',
        description:
          '牛久シャトーレストランを訪ね、百年以上の歴史を刻む赤煉瓦の貯蔵庫で食事を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a refined restaurant table inside a vaulted red-brick wine cellar with a plate of French-inspired cuisine and grapevine motif, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「芋千」の店頭で、艶やかな茨城産さつまいもの大学芋に出会った瞬間',
      subtext:
        '黄金色に輝く大学芋やスイートポテトの香ばしさが、茨城ならではの豊かな恵みを伝えていた。',
      badge: {
        code: 'ushiku_imosen',
        name_ja: '牛久駅前・芋千の大学芋を買いし者',
        subtitle_en: 'Taster of Ushiku Sweet Potato',
        description:
          '芋千を訪ね、茨城特産さつまいもを使った名物の大学芋や芋菓子の魅力に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring glossy caramelized Japanese sweet potato chunks sprinkled with black sesame seeds on a ceramic dish, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「サイトウコーヒー」のジャズが流れる店内で、ネルドリップ珈琲を味わった瞬間',
      subtext:
        '自家焙煎の深い香りと遊び心あるカッパフェが、牛久の街歩きの午後に彩りを添えた。',
      badge: {
        code: 'ushiku_saitoh_coffee',
        name_ja: '牛久・ジャズ喫茶の珈琲を嗜みし者',
        subtitle_en: 'Guest of Saitoh Coffee',
        description:
          'サイトウコーヒーを訪ね、自家焙煎のネルドリップ珈琲と牛久らしい温かな空間を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a rich dark cup of nel-drip coffee beside a cute green matcha parfait in a cozy jazz cafe setting, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'ushiku_complete',
    name_ja: '牛久・赤煉瓦の葡萄酒蔵と街を巡る旅人',
    subtitle_en: 'Explorer of Ushiku Town',
    description:
      '牛久シャトーから牛久シャトーレストラン、芋千、サイトウコーヒー、伊勢屋餅菓子店までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a historic red-brick wine chateau, caramelized sweet potatoes and a steaming cup of nel-drip coffee, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '牛久シャトー',
      spot_type: '見どころ',
      description:
        '明治36年（1903年）に神谷傳兵衛が築いた日本初の本格的ワイン醸造場。本館や旧醗酵室など赤煉瓦建築群が国重要文化財・日本遺産に認定。見学施設10:00〜16:00（年末年始休）。',
      address: '茨城県牛久市中央3-20-1',
      prefecture: '茨城県',
      municipality: '牛久市',
      lat: 35.977821,
      lng: 140.147367,
      clue: 'JR常磐線の牛久駅東口から緑の並木道を東へ歩き、日本初の本格ワイン醸造場「牛久シャトー」へ足を踏み入れよう（10:00〜16:00）。明治三十六年に神谷傳兵衛がフランスの様式を取り入れて築いた赤煉瓦の建築群は、国の重要文化財かつ日本遺産にも選ばれた名所だ。優美なアーチを描く門や神谷傳兵衛記念館の展示を巡りながら、百余年前の日本の葡萄酒造りの熱い情熱に触れて旅を始めたい。',
      surprise:
        '駅前からわずか十分足らず歩いた先に、まるでヨーロッパの古城のような重厚な赤煉瓦のワイナリー空間が広がっている光景に誰もが驚く。木立に囲まれた広大な敷地は四季折々の表情も美しく、歩くだけで明治の開拓者たちの夢と気概が静かに胸に響いてくる。',
      hook: '赤煉瓦の建物を巡ったら、敷地内の牛久シャトーレストランで特別な昼食を味わおう。',
      f7_fragment: '明治に神谷傳兵衛が築いた日本初の本格ワイン醸造場、国重文の赤煉瓦群。',
      f7_full: '国重要文化財「牛久シャトー」の優美な赤煉瓦建築群を歩き、明治の日本ワイン発祥の歴史と異国情緒を満喫した。',
      image_prompt:
        'Historic Meiji-era red-brick buildings of Ushiku Chateau winery with arched doorways, steep slate roofs and green garden trees, no text, no people.',
    },
    {
      name: '牛久シャトーレストラン',
      spot_type: '食事',
      description:
        '牛久シャトー敷地内の煉瓦造り旧ワイン貯蔵庫を改装したレストラン。高い天井の重厚な空間で、地元食材を活かしたカジュアルフレンチを味わえる。昼11:30〜15:00、月曜定休。',
      address: '茨城県牛久市中央3-20-1',
      prefecture: '茨城県',
      municipality: '牛久市',
      lat: 35.978185,
      lng: 140.147159,
      clue: '同じ牛久シャトー敷地内の旧ワイン貯蔵庫を活かした「牛久シャトーレストラン」で昼食にしよう（11:30〜15:00、月曜休）。百年以上の時を刻んだ赤煉瓦の壁と高い天井が織りなす重厚で開放的な空間で、茨城の旬の食材を取り入れた丁寧なフレンチや名物の料理をこれからもじっくり味わえる。ワイン醸造の歴史が息づく特別な蔵の中で、ゆったりと心満たされる午後のひとときをぜひ楽しみたい。',
      surprise:
        '重厚な煉瓦の貯蔵庫だった空間に柔らかな照明が灯り、気取らない雰囲気の中で本格的な料理とワイン文化に出会えるのが実に心地よい。文化財の空気を肌で感じながら食事をする贅沢は、歴史ある牛久シャトーならではの忘れがたい体験といえる。',
      hook: '優雅なランチを終えたら、西南西へ徒歩10分の芋菓子専門店・芋千へ向かおう。',
      f7_fragment: '百年超の赤煉瓦ワイン貯蔵庫を改装した、趣あふれるシャトーレストラン。',
      f7_full: '「牛久シャトーレストラン」の重厚な赤煉瓦空間で地元食材のランチを味わい、歴史あるワイナリーの豊かさに浸った。',
      image_prompt:
        'Warm atmospheric restaurant interior inside a century-old red-brick wine cellar with high arched windows and nicely plated French lunch, no text, no people.',
    },
    {
      name: '芋千',
      spot_type: '買い物',
      description:
        '牛久駅東口近くにある茨城特産さつまいも菓子の専門店。艶やかな蜜を纏った「大学芋」や「芋すふれ」「芋けんぴ」が人気。営業時間10:00〜19:00（売切終了）、月曜定休。',
      address: '茨城県牛久市中央5-14-25',
      prefecture: '茨城県',
      municipality: '牛久市',
      lat: 35.975359,
      lng: 140.141417,
      clue: 'シャトーから西南西へ徒歩10分、牛久駅東口近くの芋菓子専門店「芋千」へ立ち寄ろう（10:00〜19:00、月曜休）。茨城産さつまいもの大学芋や芋すふれを手土産に選びたい。',
      surprise:
        '日本有数のさつまいも産地・茨城らしく、素材の甘みとしっとりした食感を極めた大学芋の艶やかさには思わず見惚れてしまう。外は香ばしく中はほくほくとした優しい甘さは、散策途中の気分転換にもお土産にもぴったりで、つい笑顔になる名店だ。',
      hook: '甘いお土産を手にしたら、南南東へ徒歩5分のジャズ喫茶・サイトウコーヒーで寛ごう。',
      f7_fragment: '茨城産さつまいもの魅力を引き出す、牛久駅東口近くの芋菓子専門店。',
      f7_full: '牛久駅近くの芋菓子専門店「芋千」を訪ね、艶やかな大学芋や茨城産さつまいもの優しい甘味を手土産に選んだ。',
      image_prompt:
        'Cozy Japanese sweet potato shop counter displaying glossy caramelized daigaku-imo sweet potatoes with sesame seeds and baked potato souffles, no text, no people.',
    },
    {
      name: 'サイトウコーヒー',
      spot_type: '休憩',
      description:
        'ジャズが流れる落ち着いた空間で自家焙煎のネルドリップ珈琲が味わえる牛久の人気喫茶店。牛久ゆかりの「カッパフェ」（15:00〜17:30提供）も名物。営業時間10:00〜18:00、月曜定休。',
      address: '茨城県牛久市南1-3-13',
      prefecture: '茨城県',
      municipality: '牛久市',
      lat: 35.973209,
      lng: 140.143163,
      clue: '芋千から駅の南側へ回り、南南東へ徒歩5分の「サイトウコーヒー」で香り高い一杯を楽しもう（10:00〜18:00、月曜休）。落ち着いたジャズの音色が流れる店内では、手間ひまかけて淹れる自家焙煎のネルドリップ珈琲とともに、小川芋銭の河童にちなんだ可愛らしい「カッパフェ」や手作りスイーツが大人気だ。歩き疲れた足をゆっくり休めながら、牛久ならではの文化の香りにじっくりと浸ろう。',
      surprise:
        '本格的なネルドリップの深みある珈琲と、牛久の象徴である河童をモチーフにした遊び心あふれるパフェが同じ空間で自然に調和しているのが楽しい。マスターの丁寧な仕事ぶりとジャズの温かな響きに包まれ、ついつい長居したくなる居心地の良い喫茶店だ。',
      hook: '珈琲で寛いだら、駅の西側へ抜け北北西へ徒歩11分の伊勢屋餅菓子店へ向かい旅を結ぼう。',
      f7_fragment: 'ジャズとネルドリップ珈琲、可愛いカッパフェに出会う牛久の純喫茶。',
      f7_full: 'ジャズが流れる「サイトウコーヒー」で自家焙煎のネルドリップ珈琲を味わい、牛久の温かな街の空気に心地よく寛いだ。',
      image_prompt:
        'Atmospheric Japanese jazz kissaten cafe table with a rich cup of nel-drip coffee, green matcha kappa-shaped parfait and warm wooden interior, no text, no people.',
    },
    {
      name: '伊勢屋餅菓子店',
      spot_type: '買い物',
      description:
        '牛久駅西口からほど近い田宮町で長年親しまれる昔ながらの和菓子・餅菓子店。お団子や大福、お赤飯、いなり寿司など素朴な手づくりの味が並ぶ。営業時間月〜土9:30〜17:00・日9:30〜16:30、水曜定休。',
      address: '茨城県牛久市田宮町188-2',
      prefecture: '茨城県',
      municipality: '牛久市',
      lat: 35.978378,
      lng: 140.139418,
      clue: 'サイトウコーヒーから駅の西側へ抜け、北北西へ徒歩11分の老舗「伊勢屋餅菓子店」で旅を締めくくろう（月〜土9:30〜17:00・日〜16:30、水曜休）。田宮町の通りに昔から構える地域密着の和菓子店で、毎朝丁寧につくられる柔らかなお団子や大福、お赤飯や巻き寿司がショーケースにずらりと並ぶ。赤煉瓦の近代遺産から街の老舗まで巡った牛久の歩みを胸に、温かなお土産を手に取って旅を静かに結びたい。',
      surprise:
        '明治の壮麗なワインシャトーを歩いたあとに、駅西側の住宅街で昔ながらの伊勢屋の暖簾をくぐると、牛久という街の多層的な魅力がすっと一つに繋がる。飾り気のない素朴なお団子とお店の方の温かな笑顔が、街歩きの最後を優しく包み込んでくれる。',
      hook: '',
      f7_fragment: '田宮町で団子や大福、赤飯を手づくりし続ける、牛久の昔ながらの餅菓子店。',
      f7_full: '駅西側の老舗「伊勢屋餅菓子店」で手づくりの団子や大福に触れ、赤煉瓦のワイナリーと日常が息づく牛久の旅を結んだ。',
      image_prompt:
        'Traditional Japanese neighborhood mochi and wagashi shop counter displaying freshly made mitarashi dango skewers, daifuku mochi and sekihan rice, no text, no people.',
    },
  ],
};
