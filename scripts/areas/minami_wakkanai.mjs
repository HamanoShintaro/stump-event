export default {
  slug: 'minami_wakkanai',
  station_order: 896,
  station: '南稚内',
  line: 'JR宗谷本線',
  area_name: '南稚内・大黒の老舗菓子と潮見',
  prefecture: '北海道',
  municipality: '稚内市',
  category: '街歩きと老舗菓子',
  budget_tier: 2,
  tags: ['北海道', '稚内市', '南稚内駅', '老舗菓子', 'しじみラーメン'],
  style_genre: 'ink_and_watercolor',
  title: '南稚内・大黒の老舗菓子と潮見の珈琲巡り',
  description:
    'かつて初代稚内駅として栄えた「JR南稚内駅」から、創業六十余年の「菓子夢工房くどう」、しじみラーメンが評判の「はるき茶屋」、住宅街の鎮守「大黒南神社」、潮見地区の「森のコーヒー ケープサイド」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Minami-Wakkanai railway town streets with nostalgic confectionery shop, steaming shijimi clam ramen bowl, quiet neighborhood shrine torii and cozy coffeehouse under crisp northern sky, full bleed, no text, no letters.',
  question: '南稚内の駅から大黒通りの老舗菓子や人気食堂を巡り潮見の喫茶店へ歩く道すがら、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: 'かつて初代稚内駅・天北線分岐駅として栄えた「JR南稚内駅」',
      subtext: '大正十一年開業の歴史を持ち、長らく道北の鉄道交通の要衝として街を支えてきた。',
      badge: {
        code: 'minami_wakkanai_station',
        name_ja: '南稚内・天北分岐の記憶',
        subtitle_en: 'Railway Hub Visitor',
        description: 'JR南稚内駅から大黒と潮見の街歩きを始めた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a tidy northern town railway station under crisp sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '豊富産牛乳や宗谷の塩を使った創業六十余年の「菓子夢工房くどう」',
      subtext: 'シュークリーム「シェフの帽子」や「里におりたタヌキ」など愛らしい名物に心が躍った。',
      badge: {
        code: 'minami_wakkanai_kudo',
        name_ja: '南稚内・老舗菓子の甘い記憶',
        subtitle_en: 'Artisan Sweet Lover of Kudo',
        description: '創業六十余年の老舗「菓子夢工房くどう」を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a playful chocolate tanuki cake and golden cream puff pastry, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: 'カツオ・昆布・しじみの旨みが重なる「はるき茶屋」のしじみラーメン',
      subtext: '大黒地区で地元客に愛される、深い旨みのスープが体に染み渡った。',
      badge: {
        code: 'minami_wakkanai_haruki',
        name_ja: '南稚内・しじみ麺の味人',
        subtitle_en: 'Shijimi Ramen Taster of Haruki',
        description: 'はるき茶屋でしじみラーメンを堪能した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of golden shijimi clam ramen, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '挽きたての香り高い一杯とスイーツが寛げる「森のコーヒー ケープサイド」',
      subtext: '潮見地区の住宅街に佇み、香り豊かな珈琲とともに穏やかな時間を過ごせた。',
      badge: {
        code: 'minami_wakkanai_capeside',
        name_ja: '南稚内・潮見の珈琲時間',
        subtitle_en: 'Capeside Coffee Guest',
        description: '森のコーヒー ケープサイドで穏やかな珈琲時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a warm pour-over coffee cup and slice of cake on timber table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'minami_wakkanai_complete',
    name_ja: '南稚内・大黒と潮見の街角を歩みし者',
    subtitle_en: 'Walker of Minami-Wakkanai',
    description: 'JR南稚内駅から菓子夢工房くどう、はるき茶屋、大黒南神社、森のコーヒー ケープサイドまでを巡った証',
    image_prompt:
      'A circular emblem combining northern railway station, whimsical tanuki cream pastry, steaming ramen bowl and aromatic coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR南稚内駅',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '1922年（大正11年）11月1日、初代「稚内駅」として開業、1939年現名称へ改称、1952年現在地へ移転（終日利用可・みどりの窓口あり）。1989年までは天北線の分岐駅として栄えた。',
      address: '北海道稚内市大黒1丁目8-1',
      lat: 45.398194,
      lng: 141.683,
      clue:
        '大正十一年十一月に初代「稚内駅」として開業し、昭和三十年代以降も天北線の分岐駅として道北の鉄道史を華やかに彩ってきた「JR南稚内駅」から街歩きを始めよう（終日利用可）。稚内市街の南の玄関口として今も多くの市民や旅人が行き交う、みどりの窓口のある頼もしい駅舎を後にしたら、まずはオレンジ通り方面へ徒歩四〜五分の老舗和洋菓子店「菓子夢工房くどう」へとのんびり楽しく向かおう。',
      surprise: '最北端の隣の駅ながら、かつての天北線分岐駅としての歴史を宿す市街地の玄関口らしい風格があった。',
      hook: 'JR南稚内駅を出たら、オレンジ通り方面へ徒歩約五分の「菓子夢工房くどう」へ向かおう。',
      f7_fragment: '大正十一年初代稚内駅として開業し、天北線の分岐駅も担った交通の要衝。',
      f7_full: '「JR南稚内駅」に降り立ち、大黒と潮見の暮らしが息づく街歩きを始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Minami-Wakkanai Station neat northern Japanese town railway terminal with clear crisp morning sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '菓子夢工房くどう',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '創業60余年の老舗和洋菓子店（平日土9:30〜19:00・日祝〜18:30、水曜・第1第3木曜休）。豊富町産牛乳や宗谷の塩を使い、シュークリーム「シェフの帽子」やたぬきケーキ「里におりたタヌキ」が名物。',
      address: '北海道稚内市大黒2丁目7-30',
      lat: 45.397562,
      lng: 141.6866,
      clue:
        '創業六十余年の老舗「菓子夢工房くどう」へ入ろう（9:30〜19:00頃、水曜等休）。道北素材を使ったシュークリームやたぬきケーキが絶品だ。次は「はるき茶屋」へ。',
      surprise: '道北産の牛乳や宗谷の塩を活かしたスイーツやレトロ愛らしい「里におりたタヌキ」に心が弾んだ。',
      hook: '菓子夢工房くどうでお菓子を選んだら、徒歩約三分の「はるき茶屋」へ向かおう。',
      f7_fragment: '豊富産牛乳や宗谷の塩で作るシュークリームとたぬきケーキが名物の老舗店。',
      f7_full: '「菓子夢工房くどう」で愛らしい名物菓子に出会い、南稚内の甘い魅力に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kashi Yumekobo Kudo inviting bakery pastry display with cream puffs and nostalgic chocolate tanuki cakes, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'はるき茶屋',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '大黒地区で評判のラーメン・和食食堂（11:30〜14:00・17:00〜21:30頃、不定休）。カツオ・昆布・しじみの旨みを重ねた「しじみラーメン」や豊富な定食メニューが人気。',
      address: '北海道稚内市大黒3丁目3-23',
      lat: 45.397463,
      lng: 141.688703,
      clue:
        '大黒の商店街で地元客から厚い支持を集める人気の食事処「はるき茶屋」で温かいお昼にしよう（11:30〜14:00・17:00〜21:30頃、不定休）。カツオと昆布、そしてしじみの豊かな旨みを丁寧に重ねた透き通るスープが自慢の「しじみラーメン」は、北国の冷えた体を芯からじんわり温めてくれる極上の一杯だ。お腹も心もしっかり満たされたら、緑地区の鎮守「大黒南神社」へと歩いて向かおう。',
      surprise: 'しじみ・昆布・カツオが織りなす奥深いスープの旨みと、気さくな食堂の温かさにすっかり満たされた。',
      hook: 'はるき茶屋で温かい食事を味わったら、西側の「大黒南神社（南神社）」へ向かおう。',
      f7_fragment: 'カツオ・昆布・しじみの旨みが重なるしじみラーメンが評判の地元食堂。',
      f7_full: '「はるき茶屋」で滋味深いしじみラーメンを啜り、道北の食の温かさを堪能した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Haruki Chaya cozy local Japanese diner table with a steaming bowl of golden shijimi clam ramen, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '大黒南神社（南神社）',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '大黒・緑地区の住宅街に鎮座し、地元住民に「南神社」の名で親しまれている地域密着型の神社（終日参拝自由・無料）。街歩きの途中に静かな祈りの時間を届けてくれる。',
      address: '北海道稚内市緑1丁目2-18',
      lat: 45.396324,
      lng: 141.684299,
      clue:
        '大黒から緑の住宅街へと歩みを進め、地元の人々に「南神社」の名で親しまれている地域の鎮守「大黒南神社」へゆっくり参拝しよう（終日自由・無料）。北国の穏やかな街並みにそっと寄り添うように建つ素朴な鳥居をくぐると、賑やかな大通りから一歩離れた静かな空気が心を優しく包み込んでくれる。旅の安全に手を合わせたら、締めくくりに潮見地区の喫茶店「森のコーヒー ケープサイド」へ向かおう。',
      surprise: '住宅街の中に溶け込むように佇む「南神社」の落ち着いた空気に、地域の暮らしとの深い結びつきを感じた。',
      hook: '大黒南神社に参拝したら、東側の潮見地区にある「森のコーヒー ケープサイド」へ向かおう。',
      f7_fragment: '大黒・緑の住宅街で「南神社」として親しまれる地域密着の鎮守社。',
      f7_full: '「大黒南神社」の穏やかな境内で手を合わせ、南稚内の暮らしの安寧を感じた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Daikoku Minami Shrine quiet neighborhood wooden torii gate framed by tidy northern residential trees, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '森のコーヒー ケープサイド',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '潮見地区に佇む落ち着いた雰囲気の喫茶店・カフェ（9:30〜16:00、月曜・第3日曜休）。挽きたての「森のコーヒー」やスイーツ、モーニングやランチ（スープカレー等）を楽しめる。',
      address: '北海道稚内市潮見3丁目5-32',
      lat: 45.395101,
      lng: 141.703609,
      clue:
        '旅の締めくくりは、潮見地区の落ち着いた街並みに佇む喫茶店「森のコーヒー ケープサイド」でゆったり寛ごう（9:30〜16:00、月曜・第3日曜休）。店内に漂う挽きたての「森のコーヒー」の芳醇な香りに包まれながら、温かい一杯と丁寧に作られたスイーツをゆっくり味わえば、歩いてきた道程の風景が心地よく蘇ってくる。穏やかな北の喫茶時間で、南稚内の楽しい街歩きを心豊かに締めくくろう。',
      surprise: '最北の住宅街に佇む温かな喫茶店でいただく挽きたての珈琲の香りが、旅の余韻を優しく包み込んでくれた。',
      hook: '',
      f7_fragment: '潮見地区で挽きたての「森のコーヒー」とスイーツを楽しめる落ち着いた喫茶店。',
      f7_full: '「森のコーヒー ケープサイド」で芳醇な珈琲を味わい、南稚内の街歩きを終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Mori no Coffee Capeside warm timber cafe interior with pour-over coffee cup and slice of cake on wooden table, no text, no letters.',
    },
  ],
};
