export default {
  slug: 'niigata',
  station_order: 660,
  station: '新潟',
  line: 'JR信越本線',
  area_name: '新潟・信濃川の萬代橋と豪商の庭',
  prefecture: '新潟県',
  municipality: '新潟市',
  category: '歴史と街歩き',
  budget_tier: 2,
  tags: ['新潟県', '新潟市', '新潟駅', '萬代橋', '酒蔵'],
  style_genre: 'ukiyo_e_modern',
  title: '新潟・今代司酒造と萬代橋から豪商の庭へ',
  description:
    'JR新潟駅から、新潟駅最寄りの老舗蔵元「今代司酒造」、信濃川に架かる国の重要文化財「萬代橋」、昭和香る自家焙煎喫茶「シャモニー 古町店」、砂丘地形を活かした国指定名勝「旧齋藤家別邸」、千有余年の歴史を誇る新潟総鎮守「白山神社」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Niigata City showing the six-arch stone Bandai Bridge spanning the wide Shinano River, a traditional wooden sake brewery with cedar ball, a serene Meiji-Taisho merchant villa garden with pine trees, and a vermilion shrine gate, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '信濃川の雄大な川風と酒蔵の香り、豪商が愛した庭園の静寂を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「今代司酒造」で、新潟駅から歩いて行ける木造蔵の空気と酒造りの技に触れた瞬間',
      subtext:
        '全量純米造りにこだわる蔵元の歴史と醸造の香りに、越後の米と水の豊かさを実感した。',
      badge: {
        code: 'niigata_imayotsukasa',
        name_ja: '新潟・老舗酒蔵の香りを訪ねし者',
        subtitle_en: 'Visitor of Imayotsukasa Sake Brewery',
        description:
          '今代司酒造を訪ね、新潟の風土が育んだ純米造りの酒蔵の空気を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a traditional round cedar sugidama ball hanging beneath wooden brewery eaves beside a ceramic sake flask, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「シャモニー 古町店」で、サイフォン珈琲の香りに包まれながら一息ついた瞬間',
      subtext:
        '古町の老舗喫茶店に漂う昭和の落ち着きが、旅の歩みを心地よく整えてくれた。',
      badge: {
        code: 'niigata_chamonix',
        name_ja: '新潟・古町の老舗喫茶を味わいし者',
        subtitle_en: 'Guest of Chamonix Furumachi',
        description:
          'シャモニー 古町店を訪ね、サイフォンで淹れた自家焙煎珈琲の時間を愉しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a glass siphon coffee brewer glowing warmly beside a classic ceramic coffee cup on a dark wooden table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「旧齋藤家別邸」の座敷から、砂丘の斜面を活かした庭園の緑を眺めた瞬間',
      subtext:
        '開放的な和風建築の建具越しに切り取られた松と滝の景観が、一幅の絵画のように美しかった。',
      badge: {
        code: 'niigata_saitouke',
        name_ja: '新潟・豪商別邸の庭を愛でし者',
        subtitle_en: 'Admirer of Former Saito Villa',
        description:
          '旧齋藤家別邸を訪ね、国指定名勝の日本庭園と近代和風建築を堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a tranquil Japanese garden with sculpted pine trees, stepping stones, and a small waterfall framed by dark wooden veranda pillars, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「白山神社」の赤い鳥居をくぐり、千年の森に抱かれた本殿へ手を合わせた瞬間',
      subtext:
        '新潟総鎮守として人々の祈りを受け止めてきた境内の静けさに、旅の締めくくりが澄み渡った。',
      badge: {
        code: 'niigata_hakusan',
        name_ja: '新潟・総鎮守の杜に祈りし者',
        subtitle_en: 'Worshipper at Hakusan Shrine',
        description:
          '白山神社を訪ね、千有余年の歴史を刻む新潟総鎮守の境内に参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a vermilion torii gate and carved wooden shrine roof surrounded by deep green cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'niigata_complete',
    name_ja: '新潟・萬代橋と豪商の庭を巡る旅人',
    subtitle_en: 'Walker of Niigata',
    description:
      '今代司酒造から萬代橋、シャモニー 古町店、旧齋藤家別邸、白山神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the six stone arches of Bandai Bridge, a traditional sake brewery cedar ball, and sculpted pine trees, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '今代司酒造',
      spot_type: '買い物',
      description:
        'JR新潟駅から徒歩約15分、沼垂エリアに構える全量純米造りの老舗酒蔵。酒蔵見学や直売店で越後の日本酒文化に触れられる。9:00〜17:00、年末年始休。',
      address: '新潟県新潟市中央区鏡が岡1-1',
      prefecture: '新潟県',
      municipality: '新潟市',
      lat: 37.915962,
      lng: 139.071874,
      clue: 'JR新潟駅から歩いて向かえる鏡が岡の「今代司酒造」から、新潟の街歩きを始めよう（9:00〜17:00・年末年始休）。かつて米と水運で栄えた沼垂の町並みに木造の酒蔵を構え、醸造用アルコールを一切使わない全量純米造りに徹してきた老舗蔵元だ。酒蔵見学や直売店では、越後の豊かな米と清らかな水、そして職人の技が織りなす芳醇な日本酒の文化をこれからも身近にたっぷりとじっくり味わいたい。',
      surprise:
        '酒蔵の敷地内では、新潟の米どころ・酒どころとしての歴史を物語る仕込みの風景や、鯉をモチーフにした意匠など、蔵元ならではの遊び心にも出会えます。',
      hook: '酒蔵の香りを胸に刻んだら、西北西の信濃川へ歩いて萬代橋を渡ろう。',
      f7_fragment: '新潟駅最寄りの全量純米造りの老舗蔵元、木造蔵の見学も人気。',
      f7_full:
        '「今代司酒造」で木造蔵の空気と純米造りの酒造りに触れ、越後の風土の豊かさを感じた。',
      image_prompt:
        'Editorial Japanese travel illustration of Imayotsukasa Sake Brewery in Niigata, dark timbered storehouse walls with a fresh green cedar sugidama ball under the eaves and stone entrance path, warm morning light, no text, no letters.',
    },
    {
      name: '萬代橋',
      spot_type: '見どころ',
      description:
        '信濃川に架かる新潟市のシンボルで、国の重要文化財に指定された六連コンクリートアーチ橋。昭和4年竣工。常時通行可能、無料。',
      address: '新潟県新潟市中央区万代1-1',
      prefecture: '新潟県',
      municipality: '新潟市',
      lat: 37.916611,
      lng: 139.057602,
      clue: '昭和4年に架けられた三代目の「萬代橋」を渡ろう（常時通行可・無料）。御影石をまとった優美な六連アーチと信濃川の雄大な水面が織りなす新潟の象徴を味わいたい。',
      surprise:
        '初代の萬代橋は明治時代に木造で架けられ、火災で焼失した歴史を持ちます。現在の橋には幅広の歩道と照明灯が備わり、新潟市民の暮らしに溶け込んでいます。',
      hook: '橋を渡ったら、西の古町通りへ進んで老舗喫茶シャモニーでひと息つこう。',
      f7_fragment: '信濃川に架かる国の重要文化財、御影石の六連アーチが美しい新潟の象徴。',
      f7_full:
        '「萬代橋」の緩やかな六連アーチを歩き、信濃川の広やかな川面と街並みを眺めた。',
      image_prompt:
        'Architectural scenic illustration of Bandai Bridge in Niigata, six graceful concrete arches clad in warm granite spanning the wide blue Shinano River with willow trees along the embankment, clear daylight, no text, no letters.',
    },
    {
      name: 'シャモニー 古町店',
      spot_type: '休憩',
      description:
        '古町通五番町で長く愛される自家焙煎の老舗喫茶店。階段を上った先の落ち着いた空間でサイフォン珈琲を味わえる。8:00〜18:00、木曜休（当面の間、月曜も定休）。',
      address: '新潟県新潟市中央区古町通5番町591 2F',
      prefecture: '新潟県',
      municipality: '新潟市',
      lat: 37.919299,
      lng: 139.043905,
      clue: '古い花街と商店街の歴史を今に伝える古町通五番町で、長年地元の人々に愛されてきた自家焙煎の老舗「シャモニー 古町店」へ立ち寄ろう（8:00〜18:00・木曜休、祝日営業）。階段を上った先の落ち着いた昭和の空間では、サイフォンで一杯ずつ丁寧に淹れる香り高い珈琲や昔ながらのトーストを味わえる。古町の歴史に想いを馳せながら街歩きの合間に肩の力を抜いて、ほっと静かに一息つきたい。',
      surprise:
        'カップに注がれるサイフォン珈琲の澄んだ口当たりと静かな店内は、かつて湊町として賑わった古町の記憶を今にそっと伝えています。',
      hook: '珈琲で一息ついたら、北北西の西大畑町へ上り旧齋藤家別邸の庭園を訪ねよう。',
      f7_fragment: '古町通で親しまれる自家焙煎の老舗喫茶、サイフォン珈琲が魅力。',
      f7_full:
        '「シャモニー 古町店」でサイフォン珈琲の香りに包まれながら、古町の落ち着いた時間を愉しんだ。',
      image_prompt:
        'Warm nostalgic Japanese cafe interior illustration of Chamonix Furumachi in Niigata, polished wooden counter, glowing glass siphon coffee makers, vintage leather seating and morning window light, no text, no letters.',
    },
    {
      name: '旧齋藤家別邸',
      spot_type: '見どころ',
      description:
        '大正時代に新潟の豪商・齋藤家が建てた別荘。砂丘の斜面を活かした国指定名勝の庭園と近代和風建築が残る。9:30〜18:00（10〜3月は〜17:00）、月曜休、一般300円。',
      address: '新潟県新潟市中央区西大畑町576',
      prefecture: '新潟県',
      municipality: '新潟市',
      lat: 37.925934,
      lng: 139.040435,
      clue: '大正時代に新潟の三大財閥のひとつに数えられた豪商・齋藤家の別荘「旧齋藤家別邸」を訪ねよう（9:30〜18:00・冬期〜17:00、月曜休、一般300円）。国指定名勝の庭園と近代和風建築が一体となって残され、砂丘の斜面を巧みに活かした四季折々の風景は一階の座敷から見上げ、二階から見下ろすことで多彩な表情を見せる。豪商が愛した松と滝の静寂をこれからも心ゆくまで深く味わいたい。',
      surprise:
        '北前船交易などで財を成した齋藤喜十郎の美意識が息づく館内では、当時の洗練された欄間や建具の細工を間近に鑑賞できます。',
      hook: '豪商の庭を堪能したら、南へ下って新潟総鎮守の白山神社で旅を結ぼう。',
      f7_fragment: '砂丘地形を活かした国指定名勝の庭園と近代和風建築が残る豪商の別邸。',
      f7_full:
        '「旧齋藤家別邸」の座敷から砂丘の斜面を活かした庭園を眺め、近代和風建築の美しさを堪能した。',
      image_prompt:
        'Serene architectural illustration of Former Saito Villa in Niigata, traditional dark wood tatami veranda opening onto a lush sloped sand-dune Japanese garden with black pines, moss, and stone lanterns, no text, no letters.',
    },
    {
      name: '白山神社',
      spot_type: '見どころ',
      description:
        '千有余年の歴史を誇り、新潟総鎮守として厚く信仰される古社。縁結びの神様・菊理媛大神を祀る。参拝6:00〜19:00（社務所7:00〜19:00）、無休。',
      address: '新潟県新潟市中央区一番堀通町1-1',
      prefecture: '新潟県',
      municipality: '新潟市',
      lat: 37.91499,
      lng: 139.038358,
      clue: '千有余年の歴史を誇り、新潟総鎮守として厚く信仰されてきた「白山神社」で旅を締めくくろう（参拝6:00〜19:00・社務所7:00〜19:00、無休）。縁結びの神様として知られる菊理媛大神を祀り、木々に囲まれた境内には街の中心とは思えない厳かな空気が満ちている。隣接する白山公園の緑とともに市民に親しまれる杜の中で、信濃川と古町を巡った旅の余韻をこれからも大切に結びたい。',
      surprise:
        '江戸時代後期の棟梁が手掛けた本殿の精緻な彫刻や、境内に点在する末社めぐりも楽しみのひとつで、季節ごとの風情が参拝者を迎えてくれます。',
      hook: '',
      f7_fragment: '千有余年の歴史を誇る新潟総鎮守、緑豊かな白山公園に隣接する古社。',
      f7_full:
        '「白山神社」の赤い鳥居をくぐり、千年の森に抱かれた本殿へ参拝して新潟の街歩きを結んだ。',
      image_prompt:
        'Dignified Japanese shrine illustration of Hakusan Shrine in Niigata, vermilion torii gate, stone-paved approach shaded by ancient green trees and traditional wooden main hall, peaceful atmosphere, no text, no letters.',
    },
  ],
};
