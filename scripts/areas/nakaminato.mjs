export default {
  slug: 'nakaminato',
  station_order: 596,
  station: '那珂湊駅',
  line: 'ひたちなか海浜鉄道湊線',
  area_name: '那珂湊・水戸藩の湊町と漁港の活気',
  prefecture: '茨城県',
  municipality: 'ひたちなか市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['茨城県', 'ひたちなか市', '那珂湊駅', '那珂湊おさかな市場', '那珂湊焼きそば'],
  style_genre: 'nihonga_mineral_gold',
  title: '水戸藩の湊町と漁港の活気・那珂湊へ',
  description:
    '那珂川の河口に開け、藩政期には東北諸藩の廻船が寄港する水戸藩最大の港町として栄えた茨城県ひたちなか市那珂湊。古くから続く高台の古社から、手延べせいろ蒸し麺の元祖焼きそば、水戸黄門ゆかりの別邸跡公園、海を望むカフェを経て、活気あふれるおさかな市場までを辿る。',
  eyecatch_prompt:
    'Tranquil modern Nihonga mineral-pigment and subtle gold-leaf painting of Nakaminato coastal town in Ibaraki, weathered black pine trees on a bluff overlooking calm deep-blue Pacific harbor waters, fishing boats, and a stone shrine torii in soft morning light, no text, no people.',
  question:
    '水戸藩の湊町の歴史と潮の香りが溶け合う那珂湊で、次の旅人へ何を最初に教えますか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「那珂湊天満宮」の高台から港の町並みを見下ろし、海へ神輿が入る祭りの話を聞いたとき',
      subtext:
        '古くから海とともに暮らしてきた湊町の人々の信仰と、力強い海の祭礼の伝統に胸を打たれた。',
      badge: {
        code: 'nakaminato_tenmangu',
        name_ja: '那珂湊天満宮・湊の祈りを仰ぎし者',
        subtitle_en: 'Pilgrim of Nakaminato Tenmangu',
        description:
          '那珂湊天満宮を参拝し、中世から続く湊町の海と暮らしの信仰に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a stone torii gate framed by crooked coastal black pine branches overlooking blue sea waves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「喰い道楽 すみよし」で、もちもちの蒸し麺を使った元祖・那珂湊焼きそばを味わったとき',
      subtext:
        '地元の製麺所が守る手延べせいろ蒸し麺ならではの食感と、港町で親しまれてきた素朴な旨みに唸った。',
      badge: {
        code: 'nakaminato_yakisoba',
        name_ja: '那珂湊焼きそば・蒸し麺の粋を味わいし者',
        subtitle_en: 'Taster of Nakaminato Yakisoba',
        description:
          '喰い道楽 すみよしを訪ね、手延べせいろ蒸し麺を使った名物・那珂湊焼きそばを堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a sizzling plate of glossy sauce-coated thick yakisoba noodles with cabbage and pork slices, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '水戸光圀公の別邸跡「湊公園」に立ち、潮風に揺れるクロマツ越しに太平洋を望んだとき',
      subtext:
        'かつて水戸黄門が海と川の景色を愛でた同じ高台から、変わらない海の広がりを見渡す贅沢を味わった。',
      badge: {
        code: 'nakaminato_minato_park',
        name_ja: '湊公園・水戸光圀の絶景を望みし者',
        subtitle_en: 'Viewer of Minato Park Bluff',
        description:
          '水戸光圀公の別邸「い賓閣」跡の湊公園を訪ね、太平洋と那珂川河口を一望した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing an ancient twisted coastal pine tree on a grassy bluff overlooking a wide river mouth and harbor lighthouse, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「那珂湊おさかな市場」の活気ある通りで、威勢のよい掛け声とともに海の幸を選んだとき',
      subtext:
        '漁港直結ならではの鮮度と賑わいに触れ、北関東を代表する港町のエネルギーを五感で受け取った。',
      badge: {
        code: 'nakaminato_fish_market',
        name_ja: '那珂湊おさかな市場・海の恵みの案内人',
        subtitle_en: 'Explorer of Nakaminato Fish Market',
        description:
          '那珂湊おさかな市場を訪ね、漁港直結の活気と豊かな茨城の海の幸に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting wooden ice-filled market trays holding fresh red sea bream and shellfish under warm market eaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nakaminato_complete',
    name_ja: '那珂湊・水戸藩の港と海の恵みを巡りし者',
    subtitle_en: 'Traveler of Nakaminato Port',
    description:
      '那珂湊天満宮から喰い道楽 すみよし、湊公園、夢海カフェ、那珂湊おさかな市場までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a coastal black pine on a bluff, a steam-noodle yakisoba plate, and Pacific Ocean harbor waves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '那珂湊天満宮',
      spot_type: '見どころ',
      description:
        '中世に創建されたと伝わる湊町の古社。毎年八月に神輿が海へ入る「湊八朔祭り」の舞台として知られる。境内参拝自由。',
      address: '茨城県ひたちなか市釈迦町11-1',
      prefecture: '茨城県',
      city: 'ひたちなか市',
      lat: 36.341433,
      lng: 140.588657,
      clue: 'ひたちなか海浜鉄道の那珂湊駅を出て西へ歩くと、湊町の暮らしを古くから見守る「那珂湊天満宮」の鳥居が迎えてくれる（境内参拝自由）。鎌倉時代に創建されたと伝わる由緒ある古社で、境内には海辺の街らしい潮の気配と穏やかな静寂が漂っている。海の安全と大漁を願う祭礼が受け継がれてきたこの歴史ある社殿に静かに手を合わせ、水戸藩の湊町の歩みを辿る最初のしるしをここで力強く刻み出そう。',
      surprise:
        '毎年八月に行われる「湊八朔祭り」では、華やかな山車や神輿が湊の町を練り歩き、クライマックスには神輿がそのまま海へと入って清める勇壮な神事が行われる。海と人との深い結びつきを今に伝える、茨城の誇る伝統行事として地域の誇りとともに大切に受け継がれてきた。',
      hook: '那珂湊天満宮を参拝したら、東へ徒歩3分の喰い道楽 すみよしへ向かおう。',
      f7_fragment: '潮風が渡る古社の鳥居と、鎌倉時代から湊町を見守る静かな社殿。',
      f7_full: '鎌倉時代の創建と伝わる高台の古社・那珂湊天満宮に参拝し、海と深く結びついた湊町の伝統的な信仰と祈りにじっくり触れた。',
      image_prompt:
        'Wide morning view of a tranquil historic Shinto shrine courtyard in Nakaminato with stone torii gate, weathered timber sanctuary, and coastal black pine trees, no text, no people.',
    },
    {
      name: '喰い道楽 すみよし',
      spot_type: '食事',
      description:
        '地元名物「那珂湊焼きそば」の元祖として知られる人気食堂。手延べせいろ蒸し麺を使ったもちもちの焼きそばや海の幸が楽しめる。営業時間11:00〜14:00・17:00〜22:00、不定休。',
      address: '茨城県ひたちなか市湊中央1-5-12',
      prefecture: '茨城県',
      city: 'ひたちなか市',
      lat: 36.34125,
      lng: 140.590983,
      clue: '天満宮から東へ徒歩3分、湊中央の「喰い道楽 すみよし」で昼食にしよう（11:00〜14:00・17:00〜22:00、不定休）。名物の那珂湊焼きそばを味わい、ひと息つこう。',
      surprise:
        '那珂湊焼きそば最大の特徴は、地元の老舗製麺所が作る「手延べせいろ蒸し麺」を使うことにある。麺をせいろでじっくり蒸し上げて余分な水分を飛ばすため、ソースや醤油がよく絡み、ほかにはないもっちりとした独特の弾力と豊かな香ばしさが熱々の一皿に生まれる。',
      hook: 'すみよしで満たされたら、南西へ徒歩2分の湊公園へ足を運ぼう。',
      f7_fragment: '鉄板から立つソースの香ばしい湯気、もちもち食感の手延べ蒸し麺。',
      f7_full: '那珂湊焼きそばの元祖として知られる「喰い道楽 すみよし」を訪ね、地元製麺所の技が光る香ばしい一皿を存分に味わった。',
      image_prompt:
        'Medium-wide interior view of a cozy local Japanese diner table with a plate of steaming glossy brown yakisoba noodles topped with cabbage and pickled red ginger, no text, no people.',
    },
    {
      name: '湊公園',
      spot_type: '見どころ',
      description:
        '水戸藩二代藩主・徳川光圀公の別邸「い賓閣」が建っていた高台の公園。那珂川河口と太平洋、大洗の海岸線まで一望できる。終日散策自由。',
      address: '茨城県ひたちなか市湊中央1-1',
      prefecture: '茨城県',
      city: 'ひたちなか市',
      lat: 36.340346,
      lng: 140.589766,
      clue: 'すみよしから南西へ徒歩2分、小高い丘の上に広がる「湊公園」へ上がってみよう（終日散策自由）。ここはかつて水戸藩二代藩主・徳川光圀公（水戸黄門）が海と川の景勝を愛でて別邸「い賓閣」を構えた歴史的な場所だ。園内に枝を伸ばす立派なクロマツ越しに那珂川の河口と雄大な太平洋の海原を一望すれば、かつて殿様がこの高台の美しい風景を愛した理由が目の前に広がって一目で自然と伝わってくる。',
      surprise:
        '水戸藩時代、那珂川の河口に位置するこの一帯は東北諸藩の廻船が江戸へ向かう途中に寄港する海運の要衝だった。光圀公もたびたびこの別邸を訪れては、往来する千石船や潮風そよぐ海の風景を眺めながら味わい深い詩歌をいくつも詠んだと今に長く語り継がれる。',
      hook: '湊公園の絶景を望んだら、東南東へ徒歩7分の夢海カフェで一服しよう。',
      f7_fragment: '潮風に耐えるクロマツの枝ぶりと、高台から見渡す那珂川河口の絶景。',
      f7_full: '水戸藩主・徳川光圀公の別邸跡に造られた湊公園の高台に立ち、水戸藩の海の玄関口と雄大な太平洋の大海原を一望した。',
      image_prompt:
        'Top-down flatlay detail of weathered pine needles, smooth coastal pebbles, and dappled sunlight on a historic stone terrace overlooking blue harbor waters, no text, no people.',
    },
    {
      name: '夢海カフェ',
      spot_type: '休憩',
      description:
        '那珂湊漁港近くの海門町にあるカフェ。茨城県産の紅はるかを使った濃厚な焼き芋シェイクやいちごシェイクなど地元スイーツが人気。営業時間10:00〜17:00、水曜定休。',
      address: '茨城県ひたちなか市海門町1-17-14',
      prefecture: '茨城県',
      city: 'ひたちなか市',
      lat: 36.339062,
      lng: 140.594065,
      clue: '湊公園から東南東へ徒歩7分、海門橋や漁港の気配がすぐそばに迫る「夢海カフェ」で足を休めよう（10:00〜17:00、水曜定休）。茨城が全国に誇るさつまいもや旬の果実を使った濃厚なシェイクや手作りスイーツが評判で、海辺の散策の合間にぴったりの甘いご褒美が味わえる。心地よい潮風を感じながら冷たいドリンクを片手に、港町の穏やかな昼下がりの時間を思いのままにゆっくりと楽しもう。',
      surprise:
        'ひたちなか市は全国屈指の「ほしいも」生産地であり、冬の海風と太陽の恵みを受けて甘みを蓄えたさつまいも文化が街のスイーツにも息づく。漁港の活気と茨城の大地の豊かな恵みが、この海辺の港町の一帯で季節の彩りとともに見事に交差して心地よく調和している。',
      hook: '夢海カフェで一息ついたら、北北東へ徒歩1分の那珂湊おさかな市場へ歩こう。',
      f7_fragment: '茨城の甘い芋スイーツと、海の玄関口・海門町に吹く爽やかな潮風。',
      f7_full: '海門町の「夢海カフェ」で茨城特産の甘い芋スイーツを味わい、海辺の港町散策の合間に潮風を感じながら心地よく一息ついた。',
      image_prompt:
        'Low-angle view of a bright coastal cafe terrace table with a glass of creamy sweet-potato shake and fresh fruit pastry against a sunlit harbor street, no text, no people.',
    },
    {
      name: '那珂湊おさかな市場',
      spot_type: '買い物',
      description:
        '那珂湊漁港に隣接する関東有数の海鮮市場。鮮魚店や水産加工品店が軒を連ね、水揚げされたばかりの海の幸が並ぶ。営業時間8:00〜17:00（店舗により異なる）、水曜休が多い。',
      address: '茨城県ひたちなか市湊本町19-8',
      prefecture: '茨城県',
      city: 'ひたちなか市',
      lat: 36.339773,
      lng: 140.594556,
      clue: '夢海カフェから北北東へ徒歩1分、港町のフィナーレを飾る「那珂湊おさかな市場」を訪ねよう（8:00〜17:00、水曜休の店舗あり）。漁港に直結した通りには鮮魚店や干物店がずらりと並び、威勢の良い掛け声とともに旬の魚介や特産の海産加工品が色とりどりに店頭を彩る。潮の香りと市場ならではの活気を胸いっぱいに吸い込みながら、旅の記念となる茨城の豊かな海の幸をゆっくりと選び取ろう。',
      surprise:
        '親潮と黒潮が交わる茨城沖は豊富なプランクトンに恵まれ、季節ごとにカツオやヒラメ、アンコウなど多彩な魚種が水揚げされる。市場に並ぶ干物や明太子などの加工品も、湊町の伝統的な保存の知恵から脈々と発展してきた港町ならではの誇り高き名物と味わいだ。',
      hook: '',
      f7_fragment: '威勢の良い声が響く鮮魚店の通りと、氷の上に輝く旬の魚介の数々。',
      f7_full: '漁港直結の那珂湊おさかな市場で活気ある港の空気を全身に体感し、茨城ならではの豊かな海の幸を大切な旅の土産に選んだ。',
      image_prompt:
        'Golden-hour coastal market promenade with wooden crates of fresh fish on crushed ice under warm glowing market awnings and distant harbor trawlers at sunset, no text, no people.',
    },
  ],
};
