export default {
  slug: 'kashiwa',
  station_order: 634,
  station: '柏',
  line: 'JR常磐線・東武アーバンパークライン',
  area_name: '柏・スパイスと喫茶が香る路地裏の街',
  prefecture: '千葉県',
  municipality: '柏市',
  category: 'グルメと喫茶',
  budget_tier: 2,
  tags: ['千葉県', '柏市', '柏駅', '柏神社', 'カレーの店 ボンベイ'],
  style_genre: 'editorial_ligne_claire',
  title: '柏・路地裏の名店カレーと老舗喫茶を歩く',
  description:
    'JR常磐線・東武線が交差する柏駅から、街の鎮守「柏神社」とアンティークなカフェ「kikkake」、柏が誇る伝説のカレー名店「カレーの店 ボンベイ 本店」、天然氷のかき氷「三日月氷菓店」、老舗純喫茶「コーヒープラザ壹番館」を巡る散策路。',
  eyecatch_prompt:
    'Editorial ligne claire illustration of Kashiwa city showing a quiet urban Shinto shrine, vintage brick alley cafe, iconic spiced curry shop, shaved ice parlor and classic department-store coffee house, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '賑やかな駅前の路地裏に名店と鎮守が寄り添う柏を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「柏神社」の綺麗に整えられた境内で、都会の喧騒を忘れ手を合わせた瞬間',
      subtext:
        '東口から数分の賑わいのそばに佇む街の鎮守が、柏散策の心を穏やかに整えてくれた。',
      badge: {
        code: 'kashiwa_jinja',
        name_ja: '柏・鎮守の柏神社を拝みし者',
        subtitle_en: 'Visitor of Kashiwa Shrine',
        description:
          '柏神社を訪ね、賑やかな駅前のすぐそばで街を見守る鎮守の社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a clean urban Japanese Shinto shrine torii gate and wooden hall framed by green camellia trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「カレーの店 ボンベイ 本店」で、刺激的で奥深い名物カシミールカレーを味わった瞬間',
      subtext:
        '昭和四十三年から柏で受け継がれてきた秘伝のスパイスの余韻が、記憶に深く刻まれた。',
      badge: {
        code: 'kashiwa_bombay',
        name_ja: '柏・伝説のボンベイを味わいし者',
        subtitle_en: 'Taster of Kashiwa Bombay',
        description:
          'カレーの店 ボンベイ 本店を訪ね、柏が誇る名物の本格インドカレーを堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring a rich dark aromatic Japanese-Indian Kashmir curry in a white porcelain gravy boat beside steamed rice and pickled onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「三日月氷菓店」で、ふわっと溶ける天然氷と自家製シロップのかき氷に出会った瞬間',
      subtext:
        'スパイスの余韻を優しく包む繊細な氷の口どけが、柏の街歩きを至福の時間に変えた。',
      badge: {
        code: 'kashiwa_mikazuki',
        name_ja: '柏・三日月氷菓店の天然氷を嗜みし者',
        subtitle_en: 'Guest of Mikazuki Hyoka',
        description:
          '三日月氷菓店を訪ね、天然氷と自家製シロップが織りなす繊細なかき氷を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a tall delicate bowl of Japanese shaved ice topped with vibrant natural fruit syrup and condensed milk, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「コーヒープラザ壹番館」のクラシカルな空間で、サイフォン珈琲を味わい旅を結んだ瞬間',
      subtext:
        '柏髙島屋の中で半世紀近く愛される純喫茶の気品が、一日の締めくくりにふさわしかった。',
      badge: {
        code: 'kashiwa_ichibankan',
        name_ja: '柏駅西口・老舗壹番館に寛ぎし者',
        subtitle_en: 'Patron of Cafe Ichibankan',
        description:
          'コーヒープラザ壹番館を訪ね、クラシカルな老舗純喫茶で上質な珈琲の時間を過ごした証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a classic retro coffee siphon and vintage porcelain cup on a crisp linen cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kashiwa_complete',
    name_ja: '柏・路地裏の名店と老舗喫茶を巡る旅人',
    subtitle_en: 'Walker of Kashiwa Town',
    description:
      '柏神社からkikkake、カレーの店 ボンベイ 本店、三日月氷菓店、コーヒープラザ壹番館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a Shinto shrine torii, a bowl of spiced curry and a vintage coffee siphon, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '柏神社',
      spot_type: '見どころ',
      description:
        'JR柏駅東口から徒歩約5分に位置し、柏の鎮守として親しまれる由緒ある神社。月替わりの御朱印や綺麗に整えられた境内が多くの参拝者に愛される。社務所10:00〜16:00（土日祝9:30〜16:30・不定休）。',
      address: '千葉県柏市柏3-2-2',
      prefecture: '千葉県',
      municipality: '柏市',
      lat: 35.859876,
      lng: 139.973795,
      clue: 'JR常磐線と東武線が交わる柏駅の東口を出たら、まずは賑やかな通りを抜けて街の鎮守「柏神社」へお参りしよう（社務所平日10:00〜16:00・土日祝9:30〜16:30）。商業施設が立ち並ぶ中心街のすぐそばにありながら、一歩足を踏み入れると綺麗に清められた静かな境内が広がり、柏の暮らしを見守り続けてきたお宮の温もりに包まれる。心を穏やかに整えて、路地裏の名店巡りへと踏み出したい。',
      surprise:
        '駅周辺の活気ある繁華街から数分歩いただけで、これほど清々しく整えられた神社の空気に出会えることに驚かされる。季節ごとの彩りや丁寧な手水舎の設えにも街の人々の愛情が感じられ、柏の街歩きの出発点として実に心地よい場所だ。',
      hook: '参拝を終えたら、南東へ徒歩2分の路地にあるカフェ・kikkakeで一息つこう。',
      f7_fragment: '柏駅東口近くの賑わいのそばで街を見守り続ける、清らかな鎮守の社。',
      f7_full: '駅東口近くの「柏神社」で静かな境内に参拝し、賑やかな街並みと穏やかな祈りが同居する柏の散策を心地よく始めた。',
      image_prompt:
        'Clean urban Japanese Shinto shrine of Kashiwa Jinja with stone torii gate, wooden worship hall and lush green trees under morning sky, no text, no people.',
    },
    {
      name: 'kikkake',
      spot_type: '休憩',
      description:
        '柏神社のすぐ近くにあるアメリカンビンテージ風の落ち着いたカフェ。手作りの豆乳シフォンケーキやこだわりの珈琲、スパイス料理が人気。営業時間11:00〜21:30頃（日により〜22:00）、日曜定休（祝前変更あり）。',
      address: '千葉県柏市柏3-3-17',
      prefecture: '千葉県',
      municipality: '柏市',
      lat: 35.858987,
      lng: 139.975037,
      clue: '柏神社から南東へ徒歩2分、ビルの二階に隠れ家のように構えるカフェ「kikkake」へ立ち寄ろう（11:00〜21:30頃、日曜休）。アメリカンビンテージの温かな家具が並ぶ落ち着いた店内では、ふんわり焼き上げた豆乳シフォンケーキや香り高い珈琲が訪れる人を優しく迎えてくれる。柏の路地裏文化を象徴する心地よい空間で、午後のランチへ向かう前のほっとする休息時間をゆったり味わいたい。',
      surprise:
        '賑やかな「ウラカシ」エリアの一角、二階への階段を上った先にこんなにも居心地の良いレトロな空間が隠れているのが柏らしい。丁寧な手づくりのスイーツと気さくな空気感に包まれて、思わず地元に帰ってきたかのような安心感を覚えるカフェだ。',
      hook: '甘い休息を楽しんだら、北北西へ徒歩2分の伝説の名店・カレーの店 ボンベイ 本店へ向かおう。',
      f7_fragment: '柏神社そばの二階に佇む、ビンテージ家具とシフォンケーキの隠れ家カフェ。',
      f7_full: '柏神社近くの「kikkake」で温かなビンテージ空間と優しい珈琲の時間を楽しみ、柏の奥深い路地裏の魅力に触れた。',
      image_prompt:
        'Warm American-vintage style Japanese second-floor cafe interior with wooden tables, soft lighting, coffee cup and fluffy chiffon cake slice, no text, no people.',
    },
    {
      name: 'カレーの店 ボンベイ 本店',
      spot_type: '食事',
      description:
        '昭和43年（1968年）創業、柏が全国に誇る伝説的なインドカレーの名店。爽快な辛さと奥深い旨みの「カシミールカレー」や「インドカレー」が不動の人気。11:30〜21:30、不定休。',
      address: '千葉県柏市柏3-6-16',
      prefecture: '千葉県',
      municipality: '柏市',
      lat: 35.860191,
      lng: 139.974228,
      clue: 'kikkakeから北北西へ徒歩2分、「カレーの店 ボンベイ 本店」へ入ろう（11:30〜21:30、不定休）。柏が誇る名物カシミールカレーで刺激的な一皿を堪能したい。',
      surprise:
        'さらりとした見た目からは想像もつかないほど複雑なスパイスの香りと、突き抜ける辛さの奥に広がる深い旨みに思わず虜になる。食後にそっと出されるデミタス珈琲とチョコレートの一粒まで含め、半世紀以上柏で愛され続ける理由が心から腑に落ちる名店だ。',
      hook: 'スパイスの余韻に浸ったら、西北西へ徒歩2分の三日月氷菓店で涼やかな甘味を楽しもう。',
      f7_fragment: '昭和四十三年から柏で受け継がれる、名物カシミールカレーの伝説的名店。',
      f7_full: '「カレーの店 ボンベイ 本店」で奥深いスパイスの名物カシミールカレーを味わい、柏が誇る半世紀の食文化に感動した。',
      image_prompt:
        'Iconic Japanese-Indian curry restaurant counter serving dark aromatic Kashmir curry in a silver gravy boat with steamed rice and pickled onions, no text, no people.',
    },
    {
      name: '三日月氷菓店',
      spot_type: '休憩',
      description:
        '日光の天然氷と無添加の自家製生シロップにこだわったかき氷の名店。苺や宇治金時など一年中楽しめる繊細な一杯が人気。11:00〜18:00、火曜休（10〜5月は火・水曜休）。',
      address: '千葉県柏市柏1-5-5',
      prefecture: '千葉県',
      municipality: '柏市',
      lat: 35.860592,
      lng: 139.972744,
      clue: 'ボンベイから西北西へ徒歩2分、天然氷のかき氷で全国からファンが訪れる「三日月氷菓店」で口直ししよう（11:00〜18:00、火曜休・冬期火水休）。日光の蔵元から届く天然氷を薄く丁寧に削り、果実本来の色と香りを活かした自家製シロップを重ねたかき氷は、驚くほど軽やかな口どけだ。先ほどのスパイシーなカレーの後にいただく繊細で涼やかな甘味は、柏散策ならではの黄金の組み合わせだ。',
      surprise:
        '氷を削る音の柔らかさそのままに、口へ運んだ瞬間にふわっと雪のように消えていく食感には思わず笑みがこぼれる。甘さ控えめで果実のフレッシュさが際立つシロップはどれも誠実な味わいで、カレーの街・柏に欠かせない至福の甘味処といえる。',
      hook: '天然氷で涼んだら、柏駅の西口側へ抜け北北西へ徒歩6分のコーヒープラザ壹番館で旅を結ぼう。',
      f7_fragment: '日光の天然氷と自家製生シロップが雪のように溶ける、柏のかき氷の名店。',
      f7_full: '「三日月氷菓店」で天然氷と自家製シロップの繊細なかき氷を味わい、スパイスの余韻に寄り添う至福の甘味を堪能した。',
      image_prompt:
        'Bright minimalist Japanese shaved ice parlor table with a tall fluffy bowl of natural-ice kakigori topped with rich strawberry syrup and condensed milk, no text, no people.',
    },
    {
      name: 'コーヒープラザ壹番館（柏髙島屋店）',
      spot_type: '休憩',
      description:
        '柏駅西口直結の柏髙島屋内で長年親しまれるクラシカルな老舗純喫茶。サイフォンで淹れる珈琲や季節のスイーツが人気。営業時間10:30〜17:30（L.O.16:30）、休館日準拠。',
      address: '千葉県柏市末広町3-16',
      prefecture: '千葉県',
      municipality: '柏市',
      lat: 35.863494,
      lng: 139.970761,
      clue: '三日月氷菓店から駅の西口側へ抜け、北北西へ徒歩6分の柏髙島屋の中に佇む老舗純喫茶「コーヒープラザ壹番館」で旅を締めくくろう（10:30〜17:30、L.O.16:30）。半世紀近く柏の街で愛され続けてきた重厚でクラシカルな空間で、サイフォンで丁寧に抽出される香り高い珈琲を味わえる。東口の路地裏グルメから西口の百貨店文化まで巡った柏の街歩きを振り返り、落ち着いた大人の余韻に浸りたい。',
      surprise:
        '駅直結の百貨店の中にあって、扉をくぐった瞬間に昭和の気品あるサロンのような空気に包まれるのがなんとも心地よい。輝くカップと丁寧な接客に身を委ねていると、都心近郊のベッドタウンとして発展してきた柏の街の豊かさが静かに胸に染みていく。',
      hook: '',
      f7_fragment: '柏髙島屋の中で半世紀近く愛される、サイフォン珈琲のクラシカルな純喫茶。',
      f7_full: '柏髙島屋の老舗「コーヒープラザ壹番館」でサイフォン珈琲を味わい、路地裏と文化が交差する柏の散策を穏やかに結んだ。',
      image_prompt:
        'Classic retro upscale Japanese department-store kissaten interior with glowing glass coffee siphons, crisp white tablecloths and porcelain coffee cup, no text, no people.',
    },
  ],
};
