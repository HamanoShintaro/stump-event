export default {
  slug: 'tamana',
  station_order: 594,
  station: '玉名駅',
  line: 'JR鹿児島本線',
  area_name: '玉名・高瀬裏川と肥後ラーメンの里',
  prefecture: '熊本県',
  municipality: '玉名市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['熊本県', '玉名市', '玉名駅', '玉名ラーメン', '高瀬裏川'],
  style_genre: 'cinematic_golden_hour',
  title: '眼鏡橋と焦がしニンニクの香る玉名へ',
  description:
    '菊池川の水運によって肥後有数の米の積出港として栄えた熊本県玉名市高瀬。駅前の静かな古刹から、焦がしニンニクが香る伝統の玉名ラーメン、千年の歴史を持つ総鎮守、昭和創業の和菓子店を経て、石橋と花しょうぶで知られる高瀬裏川の隠れ家茶房まで、川風が運ぶ城下・商都の面影を辿る。',
  eyecatch_prompt:
    'Dramatic golden-sunset and twilight-purple cinematic landscape of Takase Uragawa riverfront in Tamana, Kumamoto, an ancient arched stone meganebashi bridge reflecting warm sunset gold on calm water beside white-walled storehouses and iris blooms along stone embankments, no text, no people.',
  question:
    '水運の歴史と濃厚な豚骨の香りが調和する玉名の街で、心に響いたのはどれでしょうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '老舗「玉名ラーメン 桃苑」で、焦がしニンニクチップが香る濃厚な一杯を味わった瞬間',
      subtext:
        '熊本ラーメンのルーツともいわれる玉名ならではの香ばしい豚骨スープと、地元に愛される活気に魅了された。',
      badge: {
        code: 'tamana_touen_ramen',
        name_ja: '玉名ラーメン・焦がしニンニクの探求者',
        subtitle_en: 'Seeker of Tamana Tonkotsu Ramen',
        description:
          '玉名ラーメン 桃苑を訪ね、焦がしニンニクチップが香る伝統の玉名ラーメンを味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a ceramic bowl of rich creamy pork-bone ramen topped with roasted golden garlic chips and sliced green onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 1,
      text: '駅前通りに佇む「妙性寺」の境内を歩き、静かな山門と鐘楼を見上げた瞬間',
      subtext:
        '鉄道の玄関口のすぐ近くにありながら、凛とした静寂を保つ日蓮宗の古刹の空気に旅の始まりを感じた。',
      badge: {
        code: 'tamana_myoshoji',
        name_ja: '玉名駅前・妙性寺の静寂に触れし者',
        subtitle_en: 'Visitor of Myoshoji Temple',
        description:
          '妙性寺を訪ね、玉名の街なかに息づく古刹の穏やかな佇まいに触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a traditional wooden temple bell tower and tiled sanctuary roof framed by pine branches, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「繁根木八幡宮」の大楠の樹陰に立ち、地域の総鎮守の厳かな社殿へ拝礼した瞬間',
      subtext:
        '千年以上の歴史を刻む古社の佇まいと、樹齢を重ねた巨木が守る鎮守の杜の力強さに背筋が伸びた。',
      badge: {
        code: 'tamana_hachimangu',
        name_ja: '繁根木八幡宮・千年の杜を詣でし者',
        subtitle_en: 'Pilgrim of Haginegi Hachimangu',
        description:
          '繁根木八幡宮を参拝し、玉名の総鎮守が守る千年の祈りと巨樹の杜に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a vermilion torii gate beneath the sprawling green canopy of an ancient camphor tree, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '高瀬裏川のほとりに佇む「裏乃カフェ」で、石橋と川面を眺めながら一息ついた瞬間',
      subtext:
        '江戸期の船着き場や白壁の土蔵が残る歴史的水辺で、音楽と珈琲とともに流れる穏やかな時間に癒やされた。',
      badge: {
        code: 'tamana_urano_cafe',
        name_ja: '高瀬裏川・水辺の余韻を味わいし者',
        subtitle_en: 'Guest of Takase Uragawa Riverside',
        description:
          '裏乃カフェを訪ね、高瀬裏川の石橋と白壁の町並みを眺めながら寛ぎの時間を過ごした証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a warm coffee cup on a wooden deck overlooking a stone arch bridge and calm willow-lined canal, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'tamana_complete',
    name_ja: '玉名・高瀬水運と銘菓の巡り手',
    subtitle_en: 'Traveler of Tamana Canal and Craft',
    description:
      '妙性寺から玉名ラーメン 桃苑、繁根木八幡宮、菓舗 菊水堂、裏乃カフェまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a stone arched bridge over a canal, a bowl of tonkotsu ramen, and an ancient camphor tree, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '妙性寺',
      spot_type: '見どころ',
      description:
        '玉名駅のすぐ東側に境内を構える日蓮宗の寺院。落ち着いた本堂と鐘楼が街の玄関口に静寂を添える。境内散策自由。',
      address: '熊本県玉名市中1735',
      prefecture: '熊本県',
      city: '玉名市',
      lat: 32.927379,
      lng: 130.54906,
      clue: '玉名駅を出て東側の住宅街へ少し足を踏み入れると、整った瓦屋根と木立が迎えてくれる古刹「妙性寺」に着く（境内散策自由）。駅前の喧騒からすぐの場所にありながら、境内には落ち着いた祈りの空気が漂い、手入れされた庭木と鐘楼が旅人の歩調を自然と整えてくれる。肥後北部の中心地として栄えてきた玉名の穏やかな日常と街並みの表情を感じながら、最初のしるしをここでゆっくりと刻み出してみよう。',
      surprise:
        '明治期に玉名駅が開業して以降、鉄道の玄関口として市街地が広がるなかでも、変わらず地域の法灯を灯し続けてきた日蓮宗の寺院だ。駅至近の静かな空間が、これから東へ続く高瀬の歴史散歩への穏やかな序章として迎えてくれる。',
      hook: '妙性寺を後にしたら、東へ徒歩16分の玉名ラーメン 桃苑へ向かおう。',
      f7_fragment: '駅東の静かな木立に包まれた瓦屋根の本堂と、街を見守る鐘楼の姿。',
      f7_full: '玉名駅近くの古刹・妙性寺を訪ね、街の賑わいのすぐ傍らにある穏やかで落ち着いた静寂に触れた。',
      image_prompt:
        'Morning sunlight filtering through green pine trees onto a tranquil Japanese Buddhist temple courtyard with tiled roofs and a wooden bell pavilion in Tamana, no text, no people.',
    },
    {
      name: '玉名ラーメン 桃苑',
      spot_type: '食事',
      description:
        '玉名ラーメンを代表する老舗名店。濃厚ながら後味の良い豚骨スープに、香ばしい焦がしニンニクチップを振りかけて味わう。営業時間11:00〜22:00、火曜定休。',
      address: '熊本県玉名市繁根木131-2',
      prefecture: '熊本県',
      city: '玉名市',
      lat: 32.928864,
      lng: 130.559748,
      clue: '妙性寺から東へ徒歩16分、玉名ラーメンの名店「桃苑」で昼食にしよう（11:00〜22:00、火曜定休）。焦がしニンニクが香る熱々の一杯を味わい、ひと息つこう。',
      surprise:
        '熊本ラーメンの源流は玉名にあるといわれ、久留米から伝わった豚骨スープに香ばしい揚げニンニク（焦がしニンニクチップ）を加える独自の進化を遂げた。提供直前に「ニンニク入れますか？」と尋ねられるのも玉名ならではの温かい流儀だ。',
      hook: '桃苑で腹ごしらえをしたら、南西へ徒歩3分の繁根木八幡宮へ参拝しよう。',
      f7_fragment: '濃厚な白濁スープに浮かぶ焦がしニンニク、玉名が誇る豚骨の香り。',
      f7_full: '老舗「玉名ラーメン 桃苑」で焦がしニンニク香る熱々の一杯を堪能し、肥後の食文化の奥深さに触れた。',
      image_prompt:
        'Medium-wide interior view of a warm local ramen diner counter with a steaming ceramic bowl of creamy tonkotsu ramen topped with crispy golden garlic chips and chashu pork, no text, no people.',
    },
    {
      name: '繁根木八幡宮',
      spot_type: '見どころ',
      description:
        '平安時代の応和元年に石清水八幡宮の分霊を勧請して創建された玉名の総鎮守。境内には樹齢数百年の楠の大木がそびえる。境内参拝自由。',
      address: '熊本県玉名市繁根木188',
      prefecture: '熊本県',
      city: '玉名市',
      lat: 32.927418,
      lng: 130.55836,
      clue: '桃苑から南西へ徒歩3分、緑深い鎮守の杜に包まれた「繁根木八幡宮」を訪ねよう（境内参拝自由）。平安の昔に石清水八幡宮から御分霊を迎えて創建された玉名地方の総鎮守で、石段と参道を進むと堂々たる社殿と力強く枝を広げる楠の巨木が迎えてくれる。菊池川流域の暮らしを千年近く見守り続けてきた歴史ある古社の境内で、清々しい森の気配に包まれながら静かに手を合わせて深い祈りを捧げよう。',
      surprise:
        'かつて菊池川の水運とともに出荷される肥後米の安全を祈願する場としても崇敬を集め、江戸期には熊本藩主・細川家からも厚く保護された歴史を持つ。秋の例大祭では神楽や奉納行事で賑わう地域の精神的支柱として深く親しまれる。',
      hook: '繁根木八幡宮を後にしたら、東へ徒歩6分の菓舗 菊水堂へ立ち寄ろう。',
      f7_fragment: '千年の歴史を刻む総鎮守の社殿と、境内の空を覆う大楠の深い緑陰。',
      f7_full: '細川家も崇敬した繁根木八幡宮を参拝し、玉名の暮らしを千年見守る森の気配を仰いだ。',
      image_prompt:
        'Top-down flatlay detail of mossy stone shrine steps, fallen green camphor leaves, and dappled golden afternoon sunlight on ancient shrine stone pavement, no text, no kanji, no people.',
    },
    {
      name: '菓舗 菊水堂',
      spot_type: '買い物',
      description:
        '高瀬の町並みに店を構える老舗和菓子店。地域に親しまれる季節の和菓子や焼き菓子が並ぶ。営業時間8:30〜19:00、日曜定休。',
      address: '熊本県玉名市高瀬524-4',
      prefecture: '熊本県',
      city: '玉名市',
      lat: 32.926857,
      lng: 130.562107,
      clue: '繁根木八幡宮から東へ徒歩6分、高瀬の旧市街に暖簾を構える「菓舗 菊水堂」へ立ち寄ろう（8:30〜19:00、日曜定休）。白壁の蔵や商家がかつて軒を連ねた商都・高瀬で長年地域の人々に愛されてきた老舗の店内には、四季の移ろいを映して丁寧に仕上げられた和菓子や焼き菓子が並ぶ。穏やかな店主の気配と甘い香りを感じながら、旅の思い出に添える優しい甘味をここでゆっくりと選び取ろう。',
      surprise:
        '高瀬は江戸時代、肥後藩の年貢米を大阪へ積み出す菊池川水運の拠点として「高瀬千軒」と謳われるほど繁栄した港町だった。茶の湯や客人をもてなす文化が栄えた豊かな土地柄が、街の和菓子づくりの確かな礎を築き上げた。',
      hook: 'お土産を手に入れたら、北東へ徒歩6分の裏乃カフェで旅を締めくくろう。',
      f7_fragment: '高瀬の旧市街に寄り添う老舗の店先と、丁寧に包まれた季節の和菓子。',
      f7_full: '菊池川の水運で栄えた高瀬の老舗・菊水堂を訪ね、地域に根づく和菓子の優しい味を求めた。',
      image_prompt:
        'Low-angle view of a classic Japanese wagashi shop wooden display case holding delicate handmade seasonal sweets and wrapped gift boxes in warm afternoon light, no text, no kanji, no people.',
    },
    {
      name: '裏乃カフェ',
      spot_type: '休憩',
      description:
        '石橋と花しょうぶで知られる高瀬裏川のほとりに佇む隠れ家カフェ。ウッドデッキから歴史的な水路と石垣の景観を望める。土日中心に営業（土曜11:00〜20:00・日曜11:00〜18:00、平日休等の最新営業日は公式SNSで要確認）。',
      address: '熊本県玉名市高瀬160',
      prefecture: '熊本県',
      city: '玉名市',
      lat: 32.929364,
      lng: 130.564643,
      clue: '菊水堂から北東へ徒歩6分、高瀬裏川の水辺に建つ「裏乃カフェ」で足を休めよう（土日中心に営業・土曜11:00〜20:00・日曜11:00〜18:00、最新営業日は要確認）。目の前には江戸から明治にかけて築かれた石積みの護岸や美しいアーチを描く高瀬眼鏡橋が広がり、ウッドデッキからは季節の花々や水面の揺らぎを望める。落ち着いた空間で、高瀬の歴史的な夕景と涼やかな水辺の風をゆっくりと味わおう。',
      surprise:
        '高瀬裏川はかつて菊池川の本流と繋がり、年貢米を積んだ川舟が往来した水路の名残だ。川沿いに残る「高瀬眼鏡橋」などの石橋群は、肥後の石工たちの高度な技術を今に伝える貴重な土木遺産として地域で大切に守られている。',
      hook: '',
      f7_fragment: '石橋と石積みの水路を見渡すウッドデッキ、珈琲に重なる穏やかな川風。',
      f7_full: '高瀬裏川のほとりに建つ裏乃カフェで一息つき、菊池川の水運が育んだ町並みの余韻に浸った。',
      image_prompt:
        'Golden-hour riverside wooden deck cafe overlooking a historic stone arch bridge and calm canal lined with stone embankments and iris foliage in soft sunset light, no text, no people.',
    },
  ],
};
