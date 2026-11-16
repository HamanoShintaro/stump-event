export default {
  slug: 'uenae',
  station_order: 917,
  station: '植苗',
  line: 'JR千歳線',
  area_name: '植苗・ウトナイ湖とカレー麺',
  prefecture: '北海道',
  municipality: '苫小牧市',
  category: '野鳥の楽園と苫小牧名物',
  budget_tier: 2,
  tags: ['北海道', '苫小牧市', '植苗駅', 'ウトナイ湖', 'カレーラーメン'],
  style_genre: 'ink_and_watercolor',
  title: '植苗・野鳥の楽園ウトナイ湖とカレーラーメン',
  description:
    '大正十五年開業の「JR植苗駅」から、植苗の森の「植苗神社」、苫小牧名物元祖カレーラーメンの「味の大王 総本店」、ラムサール条約登録湿地の「ウトナイ湖野生鳥獣保護センター」、「道の駅 ウトナイ湖」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Uenae Tomakomai from quiet woodland railway stop and forest shrine to steaming curry ramen diner, tranquil Lake Utonai swan sanctuary and lakeside roadside market overlook, full bleed, no text, no letters.',
  question: '植苗の駅から森の鎮守や元祖カレーラーメンの名店、ラムサール条約のウトナイ湖を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '昭和三十年代に地域の社を合祀し再建された「植苗神社」',
      subtext: '植苗の豊かな森の中に静かに佇み、地域の安寧を見守り続ける杜に心が整った。',
      badge: {
        code: 'uenae_shrine',
        name_ja: '植苗・森の鎮守の参拝',
        subtitle_en: 'Uenae Forest Shrine Visitor',
        description: '植苗の森に静かに佇む植苗神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a quiet wooden Shinto torii gate surrounded by tall northern birch forest, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '苫小牧名物・元祖カレーラーメンの「味の大王 総本店」',
      subtext: 'スパイシーでコクのあるカレースープと縮れ麺、エゾシカ餃子の旨さに元気が出た。',
      badge: {
        code: 'uenae_ajino_daio',
        name_ja: '植苗・元祖カレー麺の味人',
        subtitle_en: 'Curry Ramen Connoisseur',
        description: '味の大王 総本店で苫小牧名物・元祖カレーラーメンを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of rich golden Hokkaido curry ramen and crispy gyoza, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'ラムサール条約登録湿地を学ぶ「ウトナイ湖野生鳥獣保護センター」',
      subtext: '日本初の国指定鳥獣保護区・ウトナイ湖の豊かな生態系と野鳥観察を無料で楽しめた。',
      badge: {
        code: 'uenae_wildlife',
        name_ja: '植苗・ウトナイ湖の探鳥家',
        subtitle_en: 'Lake Utonai Sanctuary Watcher',
        description: 'ウトナイ湖野生鳥獣保護センターで野鳥と湿地の生態に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting graceful white swans gliding across calm reed-lined marsh waters, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '360度展望台とB1とんちゃん豚まんが人気の「道の駅 ウトナイ湖」',
      subtext: '湖畔の展望台やホッキ貝グルメ、可愛らしいシマエナガグッズまで魅力満載だった。',
      badge: {
        code: 'uenae_michinoeki',
        name_ja: '植苗・湖畔道の駅の旅人',
        subtitle_en: 'Michi no Eki Utonai Visitor',
        description: '道の駅 ウトナイ湖の展望台とご当地グルメを楽しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a lakeside lookout tower with steamed pork bun and cute snowy long-tailed tit bird motif, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'uenae_complete',
    name_ja: '植苗・ウトナイ湖の探鳥家',
    subtitle_en: 'Watcher of Lake Utonai Sanctuary',
    description: 'JR植苗駅から植苗神社、味の大王 総本店、ウトナイ湖野生鳥獣保護センター、道の駅 ウトナイ湖までを巡った証',
    image_prompt:
      'A circular emblem combining forest shrine torii, steaming curry ramen bowl, graceful white swans and lakeside tower, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR植苗駅',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '1926年（大正15年）8月21日、北海道鉄道の駅として開業したJR千歳線の静かな無人駅（終日利用可・無料）。ウトナイ湖や植苗地区の散策の起点となる。',
      address: '北海道苫小牧市字植苗89',
      lat: 42.713595,
      lng: 141.735126,
      clue:
        '大正十五年八月に北海道鉄道の駅として開業し、今もJR千歳線の静かな無人駅として木立の中に佇む「JR植苗駅」から街歩きと散策を始めよう（終日利用可）。澄み切った森の空気と野鳥たちの爽やかなさえずりに耳を傾けながら小さなホームをゆっくり後にしたら、まずは昭和三十年代に周辺の社を合祀して現在地に再建された地域の鎮守「植苗神社」を目指してのんびり楽しく元気に笑顔で外へと歩き出そう。',
      surprise: '特急列車も走り抜ける千歳線の沿線にありながら、森の静寂に包まれた素朴な無人駅の佇まいが心地よかった。',
      hook: 'JR植苗駅を出たら、森の中に鎮座する「植苗神社」へ向かおう。',
      f7_fragment: '大正十五年北海道鉄道として開業し、植苗の森に佇む千歳線の無人駅。',
      f7_full: '「JR植苗駅」に降り立ち、名物カレーラーメンと野鳥の楽園ウトナイ湖を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Uenae Station quiet woodland railway shelter beside JR Chitose Line tracks, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '植苗神社',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '昭和30年代に周辺の小さな社を合祀して現在地に再建された、植苗の森に静かに佇む地域の鎮守（終日参拝自由・無料）。緑に包まれた静謐な空気を楽しめる。',
      address: '北海道苫小牧市字植苗190-4',
      lat: 42.72231,
      lng: 141.70781,
      clue:
        '昭和三十年代に地域の社を合祀して再建された「植苗神社」へ参拝しよう（終日自由）。森の木立に抱かれた静かな境内に心がすっと整う。次は「味の大王 総本店」へ。',
      surprise: '周辺の小さな社が合祀されて再建された歴史と、植苗の森に溶け込むような静謐な境内の空気に心が和んだ。',
      hook: '植苗神社に参拝したら、名物カレーラーメンの「味の大王 総本店」へ向かおう。',
      f7_fragment: '昭和三十年代に地域の社を合祀して再建された植苗の森の鎮守。',
      f7_full: '「植苗神社」の静かな社殿に手を合わせ、豊かな森と地域の安寧を感じた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Uenae Shrine modest wooden torii gate nestled amidst tranquil northern forest trees, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '味の大王 総本店',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '苫小牧ご当地グルメ「元祖カレーラーメン」の名店（11:00〜20:00・水曜〜15:00、年中無休・年末年始除く）。スパイシーでコクのあるカレースープと縮れ麺、エゾシカ餃子が人気。',
      address: '北海道苫小牧市字植苗138-3',
      lat: 42.71511,
      lng: 141.70703,
      clue:
        '苫小牧が誇るご当地グルメ「元祖カレーラーメン」の本家として親しまれる「味の大王 総本店」で温かい食事をゆっくり味わおう（11:00〜20:00・水曜〜15:00、年中無休）。スパイシーでありながら奥深いコクのある濃厚カレースープがもちもちの縮れ麺にたっぷりと絡み、ジューシーなエゾシカ餃子との相性も実に抜群だ。お腹がしっかり満たされたら、「ウトナイ湖野生鳥獣保護センター」へ向かおう。',
      surprise: '元祖カレーラーメンのスパイシーかつ濃厚なスープと、北海道らしいエゾシカ餃子の美味しさにすっかり虜になった。',
      hook: '味の大王 総本店で食事を終えたら、「ウトナイ湖野生鳥獣保護センター」へ向かおう。',
      f7_fragment: '苫小牧ご当地グルメ「元祖カレーラーメン」やエゾシカ餃子が人気の名店。',
      f7_full: '「味の大王 総本店」で熱々の元祖カレーラーメンを堪能し、苫小牧の味に唸った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Aji no Daio welcoming Hokkaido ramen diner table with a steaming bowl of rich curry ramen and gyoza, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'ウトナイ湖野生鳥獣保護センター',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '日本初の国指定鳥獣保護区・ラムサール条約登録湿地であるウトナイ湖畔の観察施設（9:00〜17:00、月曜・年末年始休、入館無料）。野鳥観察や湿地生態の展示を無料で楽しめる。',
      address: '北海道苫小牧市字植苗156-26',
      lat: 42.700681,
      lng: 141.696248,
      clue:
        '日本初の国指定鳥獣保護区でありラムサール条約登録湿地としても知られるウトナイ湖畔の「ウトナイ湖野生鳥獣保護センター」を訪ねよう（9:00〜17:00、月曜休、入館無料）。館内に備えられた双眼鏡や丁寧な展示を通じて、季節ごとに飛来するハクチョウやガン類など多様な野鳥と湿原の豊かな生態系をじっくり楽しく観察できる。最後はすぐ隣の「道の駅 ウトナイ湖」へとのんびり楽しく歩いて向かおう。',
      surprise: 'ラムサール条約登録湿地の豊かな野鳥の営みを、無料の保護センターから間近に観察できてとても贅沢だった。',
      hook: '保護センターで野鳥観察を楽しんだら、すぐ隣の「道の駅 ウトナイ湖」へ向かおう。',
      f7_fragment: '日本初の国指定鳥獣保護区・ウトナイ湖の野鳥や湿地を学べる無料施設。',
      f7_full: '「ウトナイ湖野生鳥獣保護センター」で野鳥の営みと湿原の豊かさに感動した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Lake Utonai Wildlife Sanctuary Center timber observation windows overlooking calm reed-lined lake with swans, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '道の駅 ウトナイ湖',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '国道36号沿いのウトナイ湖畔に立つ道の駅（3〜10月9:00〜18:00・11〜2月〜17:00、年末年始休）。360度展望台のほか、ホッキ貝グルメや「B1とんちゃん」豚まん、シマエナガグッズが人気。',
      address: '北海道苫小牧市字植苗156-30',
      lat: 42.699939,
      lng: 141.694528,
      clue:
        '旅の締めくくりは、保護センターに隣接する国道36号沿いの人気拠点「道の駅 ウトナイ湖」で買い物と展望を存分に楽しもう（9:00〜18:00等）。360度見渡せる展望台からの雄大な湖畔の景色はもちろん、苫小牧名産のホッキ貝グルメや銘豚「B1とんちゃん」の豚まん、愛らしいシマエナガグッズまでお土産も実に盛りだくさんだ。湖畔の風景を胸に刻み、植苗の豊かな旅を心地よく結ぼう。',
      surprise: '360度展望台から見渡すウトナイ湖の広がりと、B1とんちゃんの豚まん・シマエナガグッズの充実ぶりが楽しかった。',
      hook: '',
      f7_fragment: '360度展望台やホッキ貝グルメ、B1とんちゃん豚まんが人気の湖畔道の駅。',
      f7_full: '「道の駅 ウトナイ湖」で湖畔の展望とご当地の味を満喫し、植苗の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Michi no Eki Utonai lakeside market building and lookout tower overlooking serene reeds and distant hills, no text, no letters.',
    },
  ],
};
