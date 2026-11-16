export default {
  slug: 'isesaki',
  station_order: 601,
  station: '伊勢崎駅',
  line: 'JR両毛線・東武伊勢崎線',
  area_name: '伊勢崎・銘仙と歴史建築の街',
  prefecture: '群馬県',
  municipality: '伊勢崎市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['群馬県', '伊勢崎市', '伊勢崎駅', 'いせさき明治館', '伊勢崎銘仙'],
  style_genre: 'nihonga_mineral_gold',
  title: '銘仙が彩る絹の街・伊勢崎の記憶を辿る',
  description:
    '古くから養蚕と織物で栄え、戦前には全国を席巻した絹織物「伊勢崎銘仙」の産地として知られる群馬県伊勢崎市。銘仙柄の御朱印でも親しまれる総鎮守から、本町通りの和食ランチ、名主屋敷の考古館、県内最古級の木造洋風医院建築を経て、百年続く駅前老舗和菓子店までを巡る。',
  eyecatch_prompt:
    'Tranquil modern Nihonga mineral-pigment and subtle gold-leaf painting of Isesaki historic silk-weaving town in Gunma, showing a graceful early-20th-century wooden Western clinic facade beside stone shrine lanterns and flowering silk-tree branches in soft morning light, no text, no people.',
  question:
    '絹のまち伊勢崎の面影に触れて、あなたの旅を象徴する一幕はどれでしょうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '総鎮守「伊勢崎神社」の境内で、精密な本殿の彫刻と銘仙ゆかりの祈りに触れたとき',
      subtext:
        'かつて織物業で栄えた地域の暮らしを見守り続けてきた古社の静かな佇まいに、心がすっと整った。',
      badge: {
        code: 'isesaki_shrine',
        name_ja: '伊勢崎神社・絹の街の総鎮守を詣でし者',
        subtitle_en: 'Pilgrim of Isesaki Shrine',
        description:
          '伊勢崎神社を参拝し、織物文化とまちの暮らしを見守り続けてきた総鎮守の歴史に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a carved timber Shinto shrine sanctuary roof with stone lanterns and green zelkova leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 4,
      text: '「いせさき明治館」で、県内最古級の木造洋風建築と色鮮やかな伊勢崎銘仙を仰いだとき',
      subtext:
        '百十余年前のハイカラな医院建築の中で出会う大胆な銘仙の美しさに、往時の女性の憧れを思い描いた。',
      badge: {
        code: 'isesaki_meijikan',
        name_ja: 'いせさき明治館・銘仙の美を仰ぎし者',
        subtitle_en: 'Admirer of Isesaki Meijikan & Meisen Silk',
        description:
          'いせさき明治館を訪ね、県内最古級の木造洋風建築と伝統的工芸品・伊勢崎銘仙の粋に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing an early-20th-century pale-blue wooden Western clinic building facade framed by vibrant geometric silk kimono fabric motifs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「相川考古館」の静かな名主屋敷と茶室で、国重要文化財の埴輪に向き合ったとき',
      subtext:
        'かつてから続く豪商の座敷と古代の埴輪が同じ空間に息づく不思議な時間の深さに魅了された。',
      badge: {
        code: 'isesaki_aikawa_museum',
        name_ja: '相川考古館・上州の古と茶の心を知る者',
        subtitle_en: 'Visitor of Aikawa Archaeological Museum',
        description:
          '相川考古館を訪ね、旧名主屋敷の空間と国重要文化財の埴輪・茶室文化に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an ancient terracotta haniwa warrior figure beside a traditional Japanese tea room window, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '創業約百年の老舗「親玉商店」で、伝統の和まんじゅうを土産に選び取ったとき',
      subtext:
        '駅前の移り変わりを見つめ続けてきた老舗の手作り和菓子に、伊勢崎の日常の温もりを感じた。',
      badge: {
        code: 'isesaki_oyadama',
        name_ja: '伊勢崎駅前・親玉商店の旅人',
        subtitle_en: 'Patron of Oyadama Confectionery',
        description:
          '創業約百年の親玉商店を訪ね、伊勢崎名物の手作り和まんじゅうを手土産にした証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring freshly steamed round Japanese manju buns with subtle brown glaze on a bamboo plate beside a teacup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'isesaki_complete',
    name_ja: '伊勢崎・銘仙と上州の記憶を歩みし者',
    subtitle_en: 'Explorer of Isesaki Heritage',
    description:
      '伊勢崎神社から山海酒房 あかね屋、相川考古館、いせさき明治館、親玉商店までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a historic wooden Western building, an ancient terracotta haniwa figure, and traditional steamed manju buns, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '伊勢崎神社',
      spot_type: '見どころ',
      description:
        '鎌倉時代創建と伝わる伊勢崎の総鎮守。精密な本殿彫刻や中島飛行機ゆかりのプロペラ奉納品、伊勢崎銘仙柄の御朱印帳でも知られる。境内参拝自由。',
      address: '群馬県伊勢崎市本町21-1',
      prefecture: '群馬県',
      city: '伊勢崎市',
      lat: 36.319658,
      lng: 139.193374,
      clue: 'JR・東武の伊勢崎駅南口を出て本町方面へ歩くと、けやきの緑が迎える伊勢崎の総鎮守「伊勢崎神社」に着く（境内参拝自由）。古くから続く由緒ある古社で、社殿に施された見事な彫刻や航空産業ゆかりの奉納品など、この街が歩んできた多彩な歴史が境内に息づいている。伊勢崎銘仙の美しい柄をあしらった授与品でも知られ、旅の安全を静かに祈りながら、最初のしるしをここでゆっくり力強く刻み出そう。',
      surprise:
        'かつてこの地域で養蚕と織物が盛んだった歴史を背景に、現在も伊勢崎銘仙の生地やデザインを取り入れた華やかな御朱印帳などが人気を集める。まちの総鎮守として、古の時代から近代産業の時代まで地域の人々を温かくずっと変わらず見守り守り続けてきている。',
      hook: '伊勢崎神社を参拝したら、東へ徒歩4分の山海酒房 あかね屋へ向かおう。',
      f7_fragment: '本町の杜に佇む総鎮守の社殿と、絹のまちを見守る穏やかな境内。',
      f7_full: '伊勢崎の総鎮守・伊勢崎神社に参拝し、地域の産業と暮らしを守り続けてきた古社の静かな祈りにじっくりと深く触れた。',
      image_prompt:
        'Wide morning view of a tranquil Shinto shrine courtyard in Isesaki with carved wooden sanctuary eaves, stone lanterns, and tall green zelkova trees, no text, no people.',
    },
    {
      name: '山海酒房 あかね屋',
      spot_type: '食事',
      description:
        '本町通りに構える地元で評判の和食ダイニング。新鮮な魚介や地物野菜を使った旬の昼定食や御膳を味わえる。営業時間11:00〜14:30・17:00〜24:00、年中無休。',
      address: '群馬県伊勢崎市本町14-1',
      prefecture: '群馬県',
      city: '伊勢崎市',
      lat: 36.31972,
      lng: 139.196195,
      clue: '伊勢崎神社から東へ徒歩4分、本町の「山海酒房 あかね屋」で昼食にしよう（11:00〜14:30・17:00〜24:00、年中無休）。旬の和食ランチを味わい、ひと息つこう。',
      surprise:
        'かつて織物の集散地として栄えた本町通りにあり、季節の魚介や上州の豊かな野菜を活かした丁寧な和食が地元客に親しまれている。落ち着いた和の空間でいただく温かい昼餉が、午後の街歩きへ向けた心地よい活力となって心と体を穏やかに満たしてくれる。',
      hook: 'あかね屋で昼食を済ませたら、西南西へ徒歩7分の相川考古館を訪ねよう。',
      f7_fragment: '本町通りの暖簾の奥で味わう、旬の魚介と地物野菜の丁寧な昼膳。',
      f7_full: '本町の「山海酒房 あかね屋」で旬の素材を活かした和食ランチを味わい、伊勢崎の豊かな日常の温もりにじっくり触れた。',
      image_prompt:
        'Medium-wide interior view of a warm wooden Japanese dining room table with a seasonal sashimi and grilled fish lunch tray, steamed rice, and miso soup, no text, no people.',
    },
    {
      name: '相川考古館',
      spot_type: '見どころ',
      description:
        'かつての名主・脇本陣を務めた相川家の屋敷と土蔵を活用した博物館。国重要文化財の埴輪や県指定重要文化財の茶室「觴華庵」を擁する。開館9:30〜16:30（月曜休・入館料あり）。',
      address: '群馬県伊勢崎市三光町6-10',
      prefecture: '群馬県',
      city: '伊勢崎市',
      lat: 36.318556,
      lng: 139.191505,
      clue: 'あかね屋から西南西へ徒歩7分、重厚な長屋門が迎える「相川考古館」へ足を踏み入れよう（9:30〜16:30、月曜休・入館料あり）。ここはかつて名主や脇本陣を務めた旧家の屋敷と土蔵をそのまま活かした私立博物館だ。展示室には国重要文化財に指定された貴重な埴輪の数々が並び、庭園の一画には趣深い茶室「觴華庵」も佇む。古の造形の美と旧家の静寂に、ここでじっくりと心を澄ませてみよう。',
      surprise:
        '展示される「埴輪 武装男子像」や「埴輪 弾琴男子像」は、古の文化が花開いた上州・群馬の歴史を語る上で欠かせない名品として広く知られる。希望すれば屋敷の縁側で庭園を眺めながらお抹茶を味わうこともでき、贅沢な時が今も静かに心地よくずっと流れ続ける。',
      hook: '相川考古館を見学したら、北北東へ徒歩5分のいせさき明治館へ歩こう。',
      f7_fragment: '旧名主屋敷の静かな土蔵に並ぶ国重文の埴輪、上州が伝える古の造形美。',
      f7_full: '旧名主屋敷を活かした相川考古館を訪ね、国重要文化財の埴輪と茶室が織りなす深い歴史の空間に心からゆっくり浸った。',
      image_prompt:
        'Top-down flatlay detail of aged dark wooden veranda floorboards, a classic ceramic matcha tea bowl, and dappled garden leaf shadows inside a historic Japanese merchant residence, no text, no people.',
    },
    {
      name: 'いせさき明治館',
      spot_type: '休憩',
      description:
        '百十余年前に建てられた県内最古級の木造洋風医院建築（市指定重要文化財）。館内では伝統的工芸品「伊勢崎銘仙」を常時展示し、小憩にも最適。開館10:00〜17:00（無料）、月・火曜休。',
      address: '群馬県伊勢崎市曲輪町31-4',
      prefecture: '群馬県',
      city: '伊勢崎市',
      lat: 36.32131,
      lng: 139.19267,
      clue: '相川考古館から北北東へ徒歩5分、淡い水色の下見板張りが目を引く「いせさき明治館（旧黒羽根内科医院旧館）」を訪ねよう（10:00〜17:00、月・火曜休・入館無料）。百十余年前に建てられた群馬県内最古級の木造洋風医院建築で、和洋折衷の優美な意匠が訪れる人を魅了する。館内では戦前から全国の大衆を彩った絹織物「伊勢崎銘仙」の鮮やかな着物展示を眺めながら、ゆったりと歩き疲れを癒やそう。',
      surprise:
        '伊勢崎銘仙は先染めの絹糸を巧みに織り合わせ、大胆でモダンな幾何学模様や鮮やかな色彩を生み出したことで、当時の女性たちにとって憧れの普段着として大流行した。ハイカラな洋館と銘仙の調和が、往時の伊勢崎の華やぎを鮮やかに静かに今も語りかけると伝わる。',
      hook: 'いせさき明治館を後にしたら、北北東へ徒歩8分の親玉商店でお土産を選ぼう。',
      f7_fragment: '水色の下見板張りが映える木造洋館、館内に華やぐ伊勢崎銘仙の色彩。',
      f7_full: '市指定重要文化財のいせさき明治館を訪ね、木造洋風建築の佇まいと華やかな伊勢崎銘仙の美にじっくりと心から安らいだ。',
      image_prompt:
        'Low-angle architectural view of a charming pale-blue early-20th-century wooden Western-style clinic building with tall sash windows and traditional tiled roof under afternoon light, no text, no people.',
    },
    {
      name: '親玉商店',
      spot_type: '買い物',
      description:
        '伊勢崎駅前で創業約百年を誇る老舗和菓子店。手づくりの「親玉まんじゅう」や「みそまんじゅう」、季節の和菓子が人気。営業時間9:30〜18:00、月曜定休。',
      address: '群馬県伊勢崎市大手町2-1',
      prefecture: '群馬県',
      city: '伊勢崎市',
      lat: 36.325265,
      lng: 139.194771,
      clue: 'いせさき明治館から北北東へ徒歩8分、伊勢崎駅南口のほど近くに構える老舗「親玉商店（伊勢崎駅前店）」で旅を締めくくろう（9:30〜18:00、月曜定休）。創業約百年を数える街の和菓子屋で、店頭には看板の「親玉まんじゅう」や群馬らしい「みそまんじゅう」、季節ごとの素朴な和菓子が並ぶ。併設の喫茶室の香りを感じつつ、百年変わらぬ優しい甘みを、ここで大切な旅の手土産に選び取ろう。',
      surprise:
        '世代を超えて伊勢崎市民のおやつや贈答品として長く親しまれてきた老舗であり、店内には甘味や軽食を楽しめる喫茶スペース「コーヒールーム花」も併設される。絹の街の玄関口で、変わらぬ手仕事の味を今も守り続けてきた温かな市民の大切な心の拠り所と言える。',
      hook: '',
      f7_fragment: '駅前に漂う甘い餡の香りと、百年愛され続ける手づくりの和まんじゅう。',
      f7_full: '伊勢崎駅前の老舗・親玉商店で名物の和まんじゅうを手に取り、銘仙と歴史が息づく絹の街の旅を美しく見事に締めくくった。',
      image_prompt:
        'Golden-hour view of a traditional Japanese confectionery counter with freshly steamed round brown and white manju buns on woven bamboo trays under warm interior lights, no text, no people.',
    },
  ],
};
