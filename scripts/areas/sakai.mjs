export default {
  slug: 'sakai',
  station_order: 593,
  station: '堺駅',
  line: '南海本線',
  area_name: '堺・商都の茶の湯と宿院の老舗',
  prefecture: '大阪府',
  municipality: '堺市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['大阪府', '堺市', '堺駅', '千利休', '芥子餅'],
  style_genre: 'risograph_vintage_poster',
  title: '千利休の井戸と芥子餅・堺の商都を訪ねる',
  description:
    '中世に自由都市として栄え、南蛮貿易と茶の湯の文化が花開いた大阪府堺市。宣教師の名を冠した緑豊かな公園から、熱々のせいろそばが名物の老舗、千利休が茶を点てた屋敷跡、立礼呈茶で一服できる文化施設を経て、室町創業の芥子餅本舗まで、千年の商都の粋を辿る。',
  eyecatch_prompt:
    'Crisp mid-century risograph vintage travel poster illustration with low-angle dynamic composition of historic Sakai town in Osaka, a stone tea-ceremony well, traditional merchant machiya lattice eaves, and an azure-blue sky with retro tram tracks in the distance, vibrant cobalt-blue and emerald tones, no text, no people.',
  question:
    '茶の湯の心と商都の気風を受け継ぐ堺の街で、あなたの歩みを止めたのはどの情景だろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '南蛮貿易の歴史を伝える「ザビエル公園」の並木道を歩いたとき',
      subtext:
        'かつて濠に囲まれた自由都市・堺に世界の文物が集まった時代を、爽やかな緑陰から思い描いた。',
      badge: {
        code: 'sakai_xavier_park',
        name_ja: '南蛮文化・ザビエル公園を歩みし者',
        subtitle_en: 'Walker of Xavier Park',
        description:
          'ザビエル公園を訪ね、中世の自由都市・堺と南蛮貿易の記憶に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a stone commemorative monument framed by green camphor tree leaves and old sea-port compass lines, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '三百年以上続く老舗「ちく満」で、生卵に絡めて熱々のせいろそばを味わったとき',
      subtext:
        '江戸元禄の頃から変わらぬ柔らかな蒸しそばと、濃いめの熱い出汁の組み合わせに商都の食文化を見た。',
      badge: {
        code: 'sakai_chikuma_soba',
        name_ja: '宿院・元禄そばの粋を味わいし者',
        subtitle_en: 'Taster of Chikuma Seiro Soba',
        description:
          '堺の老舗・ちく満を訪ね、名物の温かいせいろそばを堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a square wooden bamboo steamer filled with steamed soba noodles beside a small ceramic bowl of golden broth, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「さかい利晶の杜」の立礼呈茶で、堺ゆかりの茶の湯文化とお抹茶をいただいたとき',
      subtext:
        '千利休と与謝野晶子を生んだ土地の文化的豊かさを、椅子席で気軽に味わう一服から実感した。',
      badge: {
        code: 'sakai_risho_tea',
        name_ja: '利晶の杜・茶の湯の心を汲みし者',
        subtitle_en: 'Guest of Sakai Risho Tea Room',
        description:
          'さかい利晶の杜を訪ね、堺が育んだ茶の湯の精神と一服の和みを体験した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a black Raku chawan tea bowl filled with frothy green matcha beside a bamboo whisk, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '室町創業の「本家小嶋」で、香ばしい芥子の実をまとった伝統の「芥子餅」を手にしたとき',
      subtext:
        '千利休も愛したと伝わる素朴で奥深い味わいに、五百年近く続く堺の菓子づくりの底力を感じた。',
      badge: {
        code: 'sakai_keshimochi',
        name_ja: '室町創業・本家小嶋の芥子餅を極めし者',
        subtitle_en: 'Patron of Honke Kojima Keshimochi',
        description:
          '本家小嶋を訪ね、堺の伝統銘菓「芥子餅」と五百年の歴史に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring round soft mochi rice cakes coated with tiny golden-brown poppy seeds on a ceramic dish, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sakai_complete',
    name_ja: '堺・自由都市と茶の湯の継承者',
    subtitle_en: 'Heir of Sakai Merchant Tea Culture',
    description:
      'ザビエル公園からちく満、千利休屋敷跡、さかい利晶の杜、本家小嶋までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a stone tea well, a black matcha bowl, and poppy-seed mochi cakes, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'ザビエル公園',
      spot_type: '見どころ',
      description:
        'フランシスコ・ザビエルが堺を訪れた際にもてなした豪商・日比屋了慶の屋敷跡に近い公園（正式名称：戎公園）。終日散策自由。',
      address: '大阪府堺市堺区櫛屋町西1丁',
      prefecture: '大阪府',
      city: '堺市',
      lat: 34.581473,
      lng: 135.475424,
      clue: '南海堺駅を出て東へ歩くと、かつての環濠都市の面影を伝える緑地「ザビエル公園」に着く（終日散策自由）。戦国時代、宣教師フランシスコ・ザビエルを歓待した堺の豪商・日比屋了慶の屋敷跡にほど近く、園内には南蛮貿易で栄えた国際都市の記憶を記す記念碑が静かに立つ。木立の隙間から差し込む爽やかな朝の光を浴びて、海の向こうと結ばれていた自由都市の活気と面影をじっくり辿り歩いてみよう。',
      surprise:
        '中世の堺は周囲を深い濠で囲み、会合衆と呼ばれる豪商たちが自治を担った日本有数の自由都市だった。ザビエルが訪れた際に見た堺の豊かな町並みと秩序ある暮らしは、当時のヨーロッパ人宣教師の日記にも驚きをもって記された。',
      hook: 'ザビエル公園を後にしたら、南南西へ徒歩13分のちく満へ向かおう。',
      f7_fragment: '自由都市・堺の記憶を伝える緑の木立と、南蛮渡来の歴史を刻む碑。',
      f7_full: '豪商たちが自治を築いた街のザビエル公園を訪ね、海の向こうの世界と繋がっていた堺の原点に触れた。',
      image_prompt:
        'Wide morning view of a tranquil green city park in Sakai with tall camphor trees, stone memorial monument, and clean gravel paths under crisp morning sunlight, no text, no people.',
    },
    {
      name: 'ちく満',
      spot_type: '食事',
      description:
        '元禄八年創業の堺を代表する老舗そば店。せいろで蒸した柔らかなそばを、生卵を溶いた熱い出汁につけて味わう名物スタイル。営業時間10:30〜20:30、月曜定休。',
      address: '大阪府堺市堺区宿院町西1-1-16',
      prefecture: '大阪府',
      city: '堺市',
      lat: 34.575389,
      lng: 135.470586,
      clue: 'ザビエル公園から南南西へ徒歩13分、宿院の老舗「ちく満」で昼食にしよう（10:30〜20:30、月曜定休・祝日の場合は翌日休）。蒸したてのせいろそばと熱々のつゆを味わい、ひと息つこう。',
      surprise:
        '三百余年前の元禄年間に創業した当初は堺の薬種問屋街に近く、つるりとした喉越しの良い温かい蒸しそばが忙しい商人たちに愛されたという。冷たいざるそばとは異なる、ふっくらとした食感と生卵のまろやかさが唯一無二の伝統を今も築く。',
      hook: 'ちく満で温まったら、北へ徒歩1分の千利休屋敷跡へ立ち寄ろう。',
      f7_fragment: '湯気を立てる木のせいろと、生卵を溶いた熱々の蕎麦つゆの香り。',
      f7_full: '江戸元禄から三百年以上続く老舗ちく満を訪ね、忙しい堺の商人が愛した温かいせいろそばを味わった。',
      image_prompt:
        'Medium-wide interior view of a traditional Osaka soba shop table with a square wooden bamboo steamer of soft soba noodles and a small dipping bowl with golden broth, no text, no people.',
    },
    {
      name: '千利休屋敷跡',
      spot_type: '見どころ',
      description:
        '茶の湯を大成した千利休が青年期まで過ごした今市町の屋敷跡。境内には大徳寺山門の古い部材を用いた「椿の井戸」が残る。終日見学自由。',
      address: '大阪府堺市堺区宿院町西1-17-1',
      prefecture: '大阪府',
      city: '堺市',
      lat: 34.575845,
      lng: 135.470691,
      clue: 'ちく満から北へ徒歩1分、表通りのすぐそばに静かに佇む「千利休屋敷跡」を訪ねよう（終日見学自由）。利休がこの地で生まれ育ち、茶の湯の道を歩み始めた場所には、現在も「椿の井戸」と呼ばれる由緒ある井戸や石碑が大切に整備されている。周囲の都市の賑わいから一歩入った静かな一画で、わび茶の美意識が芽生えた土地の凛とした空気を胸いっぱいに吸い込みながらゆっくりと静かに佇んでみよう。',
      surprise:
        '敷地内に据えられた「椿の井戸」の屋形は、かつて京都・大徳寺の山門改築に際して譲られた古い部材を用いて造られたと伝わる。織田信長や豊臣秀吉に仕えた天下の茶匠の原点が、堺の町家の一角に今も静かに息づいている。',
      hook: '利休屋敷跡を巡ったら、西北西へ徒歩1分のさかい利晶の杜で一服しよう。',
      f7_fragment: '静かな一画に残る「椿の井戸」と、わび茶の祖が生まれ育った屋敷跡。',
      f7_full: '千利休屋敷跡に残る「椿の井戸」を前に、堺の町衆の暮らしから生まれた茶の湯の精神を感じ取った。',
      image_prompt:
        'Top-down flatlay detail of a historic moss-lined stone well cover, fallen red camellia blossoms, and raked white gravel in a small Japanese heritage courtyard, no text, no kanji, no people.',
    },
    {
      name: 'さかい利晶の杜',
      spot_type: '休憩',
      description:
        '千利休と与謝野晶子の生涯を伝える文化施設。茶の湯体験施設では椅子席で抹茶と堺の和菓子を味わう立礼呈茶が楽しめる。営業時間9:00〜18:00（茶の湯体験10:00〜17:00）、第3火曜休。',
      address: '大阪府堺市堺区宿院町西2-1-1',
      prefecture: '大阪府',
      city: '堺市',
      lat: 34.576015,
      lng: 135.470286,
      clue: '屋敷跡から西北西へ徒歩1分、「さかい利晶の杜」で一服しよう（9:00〜18:00・茶の湯体験10:00〜17:00、第3火曜休）。館内には千利休が手がけた国宝茶室「待庵」の復元模型や与謝野晶子の展示が充実しており、茶の湯体験施設では作法を気にせず椅子席でいただく立礼呈茶を楽しめる。抹茶のほろ苦さと季節の和菓子の優しい甘みで、ここまでの歩き疲れをゆっくりと心地よく癒やそう。',
      surprise:
        '千利休と歌人・与謝野晶子という異なる時代を生きた堺の二人の巨星を同じ屋根の下で顕彰する施設として誕生した。立礼呈茶で供される和菓子には、堺の老舗和菓子店が手がける季節の生菓子などが日替わりで丁寧に用意される。',
      hook: 'お茶で一息ついたら、北東へ徒歩3分の本家小嶋でお土産を選ぼう。',
      f7_fragment: '椅子席で気軽に味わう一服のお抹茶と、堺の老舗和菓子の優しい甘み。',
      f7_full: 'さかい利晶の杜の立礼呈茶で一服し、千利休と与謝野晶子という二人の巨星を生んだ堺の風土に触れた。',
      image_prompt:
        'Low-angle interior view of a modern serene Japanese tea room with dark timber beams, soft shoji screen light, and a ceramic bowl of green matcha tea on a wooden table, no text, no people.',
    },
    {
      name: '本家小嶋',
      spot_type: '買い物',
      description:
        '室町時代の天文元年創業、千利休も茶菓子として愛したとされる堺銘菓「芥子餅」の老舗。営業時間9:00〜17:00（売切次第終了）、月曜定休。',
      address: '大阪府堺市堺区大町西1-2-21',
      prefecture: '大阪府',
      city: '堺市',
      lat: 34.577053,
      lng: 135.471468,
      clue: 'さかい利晶の杜から北東へ徒歩3分、大町西に暖簾を掲げる「本家小嶋」へ足を運ぼう（9:00〜17:00・売切次第終了、月曜定休・祝日の場合は翌日休）。室町時代の創業以来、一子相伝で作り続けられる名物「芥子餅」は、滑らかなこしあんを包んだ柔らかい餅に香ばしい芥子の実をまぶした素朴な逸品だ。五百年の時を越えて受け継がれる伝統の銘菓を、旅の記念や大切な人への土産に持ち帰ろう。',
      surprise:
        '堺は古くから南蛮貿易の玄関口であり、南蛮船によってもたらされた希少な芥子の実を和菓子に取り入れたのが「芥子餅」の始まりと伝わる。千利休の茶会でも供されたという逸話が、今もこの古い暖簾の確かな重みを物語る。',
      hook: '',
      f7_fragment: '黄金色の芥子の実が香ばしく香る柔らかな餅と、五百年続く老舗の木箱。',
      f7_full: '室町創業の本家小嶋で伝統の芥子餅を手に取り、千年の商都・堺が守り抜く五百年の歴史を結んだ。',
      image_prompt:
        'Golden-hour view of a traditional Japanese confectionery wooden counter displaying soft white mochi cakes generously coated with toasted golden-brown poppy seeds in a plain wooden box, no text, no kanji, no people.',
    },
  ],
};
