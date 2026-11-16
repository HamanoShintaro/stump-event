export default {
  slug: 'bibaushi',
  station_order: 983,
  station: '美馬牛',
  line: 'JR富良野線',
  area_name: '美馬牛・新栄',
  prefecture: '北海道',
  municipality: '美瑛町',
  category: '絶景・グルメ',
  budget_tier: 2,
  tags: ['富良野線', '美馬牛小学校', '新栄の丘', '天然酵母パン', '美瑛町'],
  style_genre: 'ink_and_watercolor',
  title: '美馬牛の赤い屋根と丘の風景を巡る',
  description:
    '赤い三角屋根のJR美馬牛駅からブックカフェ絵葉描館、天然酵母のLIKKA LOKKA、とんがり屋根の美馬牛小学校、新栄の丘展望公園へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Bibaushi Station with its iconic red triangular roof, a quiet hilltop schoolhouse with a pointed bell tower, artisan bagels, and sweeping sunset hills at Shinei-no-oka, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び美馬牛を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '静かなブックカフェ 絵葉描館',
      subtext: '美瑛の風景写真やポストカードを眺めながらお茶で一息ついた',
      badge: {
        code: 'bibaushi_ehagakikan',
        name_ja: '丘の写真茶房',
        subtitle_en: 'Postcard Book Cafe',
        description:
          'ポストカードギャラリー＆ブックカフェ 絵葉描館で美しい写真とお茶を楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of scenic Hokkaido postcards resting beside an open book and teacup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '小さなパン店 LIKKA LOKKA',
      subtext: '美瑛産小麦と天然酵母のもちもちベーグルを手に取った',
      badge: {
        code: 'bibaushi_likkalokka',
        name_ja: '美瑛麦のベーグル',
        subtitle_en: 'Biei Wheat Bagel',
        description:
          '小さなパン店 LIKKA LOKKAで美瑛産小麦と天然酵母の絶品ベーグルを手にしたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of glossy baked artisan bagels and golden wheat stalks in a linen cloth on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'とんがり屋根の美瑛町立美馬牛小学校',
      subtext: '前田真三氏の写真にも映る丘のランドマークを仰ぎ見た',
      badge: {
        code: 'bibaushi_school',
        name_ja: 'とんがり屋根の鐘楼',
        subtitle_en: 'Pointed Bell Tower',
        description:
          '美瑛町立美馬牛小学校を訪れ、丘の風景に映えるとんがり屋根の鐘楼を望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tall pointed wooden school bell tower rising above rolling green pasture hills on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '360度展望の新栄の丘展望公園',
      subtext: '十勝岳連峰の稜線と美瑛の波打つ丘をベンチで満喫した',
      badge: {
        code: 'bibaushi_shineinooka',
        name_ja: '新栄の丘の夕景',
        subtitle_en: 'Shinei Hill Panorama',
        description:
          '新栄の丘展望公園を訪れ、十勝岳連峰と美瑛の丘の360度大パノラマに浸ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of sunlit wave-like hills beneath glowing crimson sunset clouds and distant mountains on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'bibaushi_complete',
    name_ja: '美馬牛・丘と鐘楼の旅人',
    subtitle_en: 'Explorer of Bibaushi Hills',
    description:
      'JR美馬牛駅から絵葉描館、LIKKA LOKKA、美馬牛小学校、新栄の丘展望公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a red-roofed rural station, a pointed school bell tower, and sweeping sunset hills on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR美馬牛駅',
      lat: 43.537544,
      lng: 142.446992,
      address: '北海道上川郡美瑛町美馬牛北1-3-1',
      description:
        '赤い三角屋根が印象的なJR富良野線の小さな無人駅（終日開放・無休）。ホーム越しに望む田園風景と列車の姿は、美瑛・富良野線沿線を代表する旅の風景となっている。',
      clue:
        '赤い三角屋根が印象的なJR富良野線の小さな無人駅「JR美馬牛駅」から丘の散策を始めよう（終日開放）。ホーム越しに望む美瑛の豊かな田園風景と線路の先に続く美しい景色に心躍らせながら東方向へと外へ踏み出したら、まずは駅近くの静かな「ポストカードギャラリー＆ブックカフェ 絵葉描館」を目指して、澄み切った北国の爽やかな風を頬に感じながら丘の散歩道を軽やかな足取りで歩き出そう。',
      hook: '駅から東方向へ徒歩約2分',
      f7_fragment: '赤い三角屋根とホーム越しの田園風景が愛される、美瑛南部の無人駅。',
      f7_full: '「JR美馬牛駅」の赤い三角屋根を後にし、丘と鐘楼を巡る美馬牛の旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'ポストカードギャラリー＆ブックカフェ 絵葉描館',
      lat: 43.537493,
      lng: 142.448054,
      address: '北海道上川郡美瑛町美馬牛南1-1-26',
      description:
        '美馬牛リバティユースホステル内の静かなギャラリー＆ブックカフェ（12:00〜17:00・季節変動あり、不定休・冬季長期休館）。写真やポストカードを眺めお茶で休める。',
      clue:
        '美馬牛の静かな「ポストカードギャラリー＆ブックカフェ 絵葉描館」で写真とお茶に一息つこう（冬季休館あり）。次は南の「小さなパン店 LIKKA LOKKA」へ向かおう。',
      hook: '南方向へ徒歩約4分',
      f7_fragment: '美瑛の美しい写真やポストカードを眺めながらお茶を楽しめる静かなカフェ。',
      f7_full: '「絵葉描館」の静かな空間で美しい写真とお茶を楽しみ、旅の心が和んだ。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '小さなパン店 LIKKA LOKKA',
      lat: 43.536092,
      lng: 142.44727,
      address: '北海道上川郡美瑛町美馬牛南1-5-50',
      description:
        '美瑛産小麦と天然酵母にこだわった、もちもち食感のベーグルやパンが評判の小さなベーカリー（10:00〜15:00・売切次第終了、日・月曜休・冬季火曜も休）。',
      clue:
        '美瑛産小麦と天然酵母にこだわって焼き上げる、もちもち食感のベーグルやパンが評判の「小さなパン店 LIKKA LOKKA」へ立ち寄ろう（10:00〜15:00、日月休）。扉を開けると香ばしい小麦の香りがふわっと広がり、散策のお供にもぴったりの美味しい焼き立てパンが並んでいる。素敵なパンを大切に手に取ったら、東の丘の上に建つ「美瑛町立美馬牛小学校」へとゆっくり歩いて向かおう。',
      hook: '東方向へ徒歩約10分',
      f7_fragment: '美瑛産小麦と天然酵母のもちもち食感のベーグルが人気の小さなパン店。',
      f7_full: '「小さなパン店 LIKKA LOKKA」で香ばしい天然酵母パンを手に入れ、笑顔になった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '美瑛町立美馬牛小学校',
      lat: 43.536563,
      lng: 142.456227,
      address: '北海道上川郡美瑛町美馬牛南2-2-58',
      description:
        '風景写真家・前田真三氏の作品にも度々登場した「とんがり屋根」の鐘楼を持つ木造風校舎（校地内立入不可・公道からの外観見学のみ）。丘の風景に映えるランドマーク。',
      clue:
        '風景写真家・前田真三氏の作品にも度々登場した、印象的な「とんがり屋根」の鐘楼を持つ「美瑛町立美馬牛小学校」の美しい校舎を公道から仰ぎ見よう（校地内立入不可）。美瑛の緩やかな丘陵と青い空を背景にすっと伸びる三角の屋根は、まるでおとぎ話の一場面のように美しく、美馬牛を象徴する名景だ。素敵な景色を胸いっぱいに刻んだら、北に広がる絶景の「新栄の丘展望公園」へと軽やかに歩を進めよう。',
      hook: '北方向へ徒歩約35分',
      f7_fragment: '風景写真にも度々登場した「とんがり屋根」の鐘楼を持つ美馬牛の象徴的校舎。',
      f7_full: '「美瑛町立美馬牛小学校」のとんがり屋根を公道から眺め、美瑛らしい風景に浸った。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '新栄の丘展望公園',
      lat: 43.55774,
      lng: 142.459241,
      address: '北海道上川郡美瑛町美馬牛新栄1',
      description:
        'パノラマロード沿いにあり、十勝岳連峰の雄大な稜線と美瑛の波打つ丘を360度一望できる展望公園（終日開放・売店季節営業）。ベンチもあり夕日の名所として知られる。',
      clue:
        '旅の締めくくりは、パノラマロード沿いに位置し十勝岳連峰の雄大な稜線と美瑛の波打つ丘を360度一望できる「新栄の丘展望公園」のベンチでゆったりと休憩しよう（終日開放）。夕日の名所としても名高いこの丘からは、どこまでも続く畑と雄大な山々のコントラストが息をのむほど美しく広がっている。美瑛の大パノラマを胸いっぱいに焼き付けて、美馬牛の素敵な旅を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '十勝岳連峰の稜線と美瑛の波打つ丘を360度一望できるパノラマロードの展望公園。',
      f7_full: '「新栄の丘展望公園」のベンチから360度の丘陵絶景を望み、美馬牛の旅を終えた。',
    },
  ],
};
