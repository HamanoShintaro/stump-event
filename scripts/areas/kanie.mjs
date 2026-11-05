// 蟹江エリア定義（UN kanyeから祭人、冨吉建速神社・八劔社、龍照院、香風園 須成店へ編）
// 出典:
// - UN kanye（愛知県海部郡蟹江町今市之坪26-1）: JR蟹江駅北口近くのカフェ＆パティスリー。無添加の仏蘭西菓子「カニアンヌ」や地元野菜ランチを提供。
// - 蟹江町観光交流センター 祭人（愛知県海部郡蟹江町須成川西上371-1）: ユネスコ無形文化遺産「須成祭」の巻藁船展示と水郷文化を伝える拠点施設。
// - 冨吉建速神社・八劔社（須成神社）（愛知県海部郡蟹江町須成門屋敷上1363）: 室町期・永享10年（1438年）再建の国指定重要文化財本殿を有し、須成祭の舞台となる古社。
// - 蟹江山 常楽寺 龍照院（愛知県海部郡蟹江町須成門屋敷上1364）: 須成神社と隣接する真言宗智山派寺院。国重文「木造十一面観音立像」と豊臣秀吉お手植えの大イチョウで知られる。
// - 香風園 須成店（愛知県海部郡蟹江町須成上惣作2225-3）: 明治期創業の老舗茶舗「香風園」が営む日本茶専門店・甘味処。西尾産抹茶スイーツや深蒸し煎茶を提供。
export default {
  slug: "kanie",
  line: "JR関西本線",
  station: "蟹江",
  station_order: 1,
  area_name: "蟹江",
  title: "水郷を彩る須成祭の巻藁船と西尾抹茶が香る茶舗",
  description: "JR関西本線の蟹江駅北口を降りると、蟹江川や日光川など幾筋もの川が網の目のように流れる尾張西部の水郷地帯が広がっている。無添加のあんバター仏蘭西菓子が香る駅前の『UN kanye』から川沿いを北へ歩き、ユネスコ無形文化遺産「須成祭」の巻藁船を展示する『蟹江町観光交流センター 祭人』、室町期の本殿と秀吉お手植えの大イチョウが隣り合う『冨吉建速神社・八劔社』と『龍照院』を経て、老舗茶舗『香風園 須成店』の抹茶甘味へと至る1.2キロの道のり。",
  category: "歴史・文化",
  prefecture: "愛知県",
  budget_tier: 2,
  tags: ["蟹江", "JR関西本線", "須成祭", "水郷", "日本茶"],
  eyecatch_prompt: "Transparent watercolor and delicate fountain-pen line illustration of Kanie River in Aichi at dusk, a quiet wooden dock along the calm canal reflecting paper lanterns of a traditional Makiwarabune festival boat, weeping willow branches swaying in the breeze, old black-tiled roofs in the distance, warm Washi paper texture, no people, no text, 16:9 aspect ratio",
  completion_badge: {
    name_ja: "須成の水郷と祭礼をめぐる旅人",
    subtitle_en: "Wayfarer of Sunari Water Town and Festival Lore",
    description: "UN kanyeから祭人、冨吉建速神社・八劔社、龍照院、香風園 須成店までを巡り歩いた証"
  },
  question: "蟹江川の水辺から須成の社寺と茶舗へと続く水郷の道で、あなたの五感に深く刻まれた情景はどれですか？",
  choices: [
    {
      key: "A",
      text: "『UN kanye』で出会った、発酵バターと十勝粒あんが重なる仏蘭西菓子「カニアンヌ」",
      description: "蟹江駅北口のカフェで、保存料を使わず焼き上げられたあんバター菓子の香ばしさに触れるひと時",
      badge: {
        code: "shuin_kanie_kofuen_sencha",
        name_ja: "あんバター仏蘭西菓子を愛でる粋人",
        subtitle_en: "Connoisseur of Kanianne Butter Pastry",
        description: "UN kanyeで看板菓子の香ばしさに触れた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『蟹江町観光交流センター 祭人』で見上げた、三百六十五個の提灯が輝く巻藁船の威容",
      description: "ユネスコ無形文化遺産「須成祭」の宵祭で蟹江川を彩る巻藁船の提灯飾りに対面する時間",
      badge: {
        code: "shuin_kanie_nishio_matcha_sweets",
        name_ja: "須成祭の巻藁船と提灯を仰ぐ旅人",
        subtitle_en: "Admirer of Makiwarabune Lantern Boat",
        description: "祭人で須成祭の巻藁船展示を体感した証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "室町期の本殿が鎮座する『冨吉建速神社・八劔社』と、隣り合う『龍照院』の大イチョウ",
      description: "神仏習合の記憶を今に伝える須成の社寺を並び訪ね、秀吉お手植えと伝わる大樹を見上げる体験",
      badge: {
        code: "shuin_kanie_tea_leaf_selector",
        name_ja: "須成の神仏と四百年の銀杏を識る識者",
        subtitle_en: "Seeker of Sunari Shrine and Temple Lore",
        description: "須成神社と龍照院の連なる境内を歩いた証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "老舗茶舗『香風園 須成店』で味わう、西尾産石臼挽き抹茶の甘味と深蒸し煎茶の香り",
      description: "明治期創業の茶舗で淹れたての日本茶と濃厚な抹茶スイーツを堪能し、水郷歩きの余韻に浸るひと時",
      badge: {
        code: "shuin_kanie_teapot_craft",
        name_ja: "西尾抹茶の翠と深蒸し茶を嗜む茶人",
        subtitle_en: "Taster of Nishio Matcha and Sencha",
        description: "香風園 須成店で日本茶と甘味を味わった証",
        rarity: 3
      }
    }
  ],
  spots: [
    {
      name: "UN kanye（アン カニエ）",
      spot_type: "食事",
      description: "JR蟹江駅北口から徒歩3分の場所にあるカフェ＆パティスリー。地元野菜を使ったランチプレートや、無添加あんバター仏蘭西菓子「カニアンヌ」が人気。",
      address: "愛知県海部郡蟹江町今市之坪26-1",
      prefecture: "愛知県",
      city: "海部郡蟹江町",
      lat: 35.141758,
      lng: 136.790541,
      clue: "JR蟹江駅の北口を出て静かな通りを西へ少し歩くと、白壁に木の扉が映える『UN kanye（アン カニエ）』が見えてくる。店内では彩り豊かな野菜を盛り込んだプレートランチのほか、北海道産発酵バターと十勝産小豆の粒あんを香ばしいフィナンシェ生地で挟んだ仏蘭西菓子「カニアンヌ」が看板の品として親しまれている。保存料を使わず丁寧に焼き上げられた温かな甘味と珈琲で、水郷の町へ踏み出す前のひと時を過ごそう。",
      surprise: "看板菓子の「カニアンヌ」は、蟹江町の名をフランス菓子風に読み替えた造語であり、和の粒あんと洋の発酵バターを掛け合わせた新しい町の手土産として考案された。",
      hook: "香ばしい焼き菓子を味わったら北北西へ徒歩11分。蟹江川のほとりに建つ『蟹江町観光交流センター 祭人』へ向かおう。",
      image_prompt: "Soft gouache and colored pencil illustration of a wooden plate holding an artisanal red-bean and butter financier pastry beside a ceramic cup of black coffee on a sunlit cafe table, warm natural wood grain, no people, no text"
    },
    {
      name: "蟹江町観光交流センター 祭人（sai-to）",
      spot_type: "見どころ",
      description: "蟹江川の須成橋たもとにある観光交流施設。ユネスコ無形文化遺産に登録された「須成祭」の巻藁船展示やVR映像、特産品ショップ・カフェを備える。",
      address: "愛知県海部郡蟹江町須成川西上371-1",
      prefecture: "愛知県",
      city: "海部郡蟹江町",
      lat: 35.146834,
      lng: 136.786914,
      clue: "蟹江川に沿って北北西へ歩き、須成橋のたもとへ出ると『蟹江町観光交流センター 祭人（サイト）』のモダンな木造建築が現れる。館内の中央には、ユネスコ無形文化遺産に登録された「須成祭」の宵祭で川面を彩る巻藁船（まきわらぶね）が実物大で据えられている。一年間の日数になぞらえた三百六十五個の提灯が半球状に組まれた華やかな船姿を見上げ、二階の展望デッキから穏やかな蟹江川の水面をゆっくり見渡してみよう。",
      surprise: "須成祭は毎年八月の第一土曜日・日曜日にクライマックスを迎えるが、前後の神事を含めると約百日間にもわたって続くことから「百日祭」の異名をもっている。",
      hook: "巻藁船の迫力を体感したら北東へ徒歩1分。須成祭の舞台となる『冨吉建速神社・八劔社』へ参道を進もう。",
      image_prompt: "Atmospheric transparent watercolor illustration of a partial view of glowing white and red paper lanterns arranged in a dome shape on a traditional wooden festival boat indoors, warm ambient light, no people, no text"
    },
    {
      name: "冨吉建速神社・八劔社（須成神社）",
      spot_type: "見どころ",
      description: "天平5年（733年）創建と伝わる須成地区の氏神。永享10年（1438年）再建の本殿は国の重要文化財に指定されており、ユネスコ無形文化遺産「須成祭」が奉納される。",
      address: "愛知県海部郡蟹江町須成門屋敷上1363",
      prefecture: "愛知県",
      city: "海部郡蟹江町",
      lat: 35.147378,
      lng: 136.787406,
      clue: "須成橋を渡って木立の参道へ入ると、須成祭の舞台となる『冨吉建速神社・八劔社（須成神社）』の拝殿が鎮座している。室町期の永享十年に再建された桧皮葺の本殿は国の重要文化財に指定されている。",
      surprise: "一社でありながら二つの社名をもつのは、素盞嗚尊を祀る冨吉建速神社と、草薙剣を神体とする八劔社が古くから同じ社殿に相殿として祀られてきた歴史による。",
      hook: "室町期の本殿に手を合わせたら東北東へ徒歩1分。神仏習合の歴史を伝える『蟹江山 常楽寺 龍照院』を訪ねよう。",
      image_prompt: "Poetic sumi-ink and mineral pigment wash illustration of the curved cypress-bark roof edge of a Muromachi-period shrine pavilion seen through ancient cedar branches, dappled sunlight on stone steps, no people, no text"
    },
    {
      name: "蟹江山 常楽寺 龍照院",
      spot_type: "見どころ",
      description: "須成神社の東隣にある真言宗智山派の寺院。平安時代後期の国指定重要文化財「木造十一面観音立像」を祀り、境内には豊臣秀吉お手植えと伝わる大イチョウが立つ。",
      address: "愛知県海部郡蟹江町須成門屋敷上1364",
      prefecture: "愛知県",
      city: "海部郡蟹江町",
      lat: 35.147484,
      lng: 136.787647,
      clue: "須成神社の境内から塀ひとつ隔てた東北東隣へ歩を進めると、真言宗智山派の古刹『蟹江山 常楽寺 龍照院（りゅうしょういん）』の本堂が姿を現す。明治の神仏分離以前は須成神社の神宮寺（別当寺）として一体の境内をなし、現在も須成祭では稚児が神社と龍照院の双方を参拝する習わしが大切に守られている。境内にそびえる樹齢四百年超の大イチョウを見上げ、神と仏が寄り添ってきた水郷の祈りに静かに触れよう。",
      surprise: "境内の大イチョウは、天正十二年（1584年）の蟹江合戦の折に豊臣秀吉が戦勝を祈願して手植えしたものと伝えられ、町の天然記念物に指定されている。",
      hook: "秀吉ゆかりの大イチョウを見上げたら東へ徒歩7分。老舗茶舗が営む『香風園 須成店』へ足を運ぼう。",
      image_prompt: "Delicate botanical watercolor and ink illustration of the massive gnarled trunk and golden-green leaves of a four-hundred-year-old ginkgo tree beside a temple bell tower roof corner, soft light filtering through foliage, no people, no text"
    },
    {
      name: "香風園 須成店",
      spot_type: "休憩",
      description: "蟹江町須成にある老舗日本茶専門店・甘味処。こだわりの深蒸し煎茶や、愛知県西尾産の抹茶を使った抹茶パフェ・ぜんざいなどの和スイーツが楽しめる。",
      address: "愛知県海部郡蟹江町須成上惣作2225-3",
      prefecture: "愛知県",
      city: "海部郡蟹江町",
      lat: 35.146815,
      lng: 136.791975,
      clue: "龍照院から東へ静かな住宅街を歩くと、清々しい茶葉の香りが漂う『香風園 須成店』の暖簾が見えてくる。明治期から続く茶舗が営む店内には、全国から厳選した煎茶や自家焙煎のほうじ茶、茶器がずらりと並び、奥の喫茶席では愛知県西尾産の石臼挽き抹茶を贅沢に使った抹茶パフェや白玉ぜんざいを味わうことができる。急須で丁寧に淹れた日本茶の深い旨みを喉に落とし、須成の里歩きの余韻に浸ろう。",
      surprise: "愛知県は全国有数の抹茶（碾茶）の産地であり、ここで供される抹茶甘味にも地元・三河の西尾地域で育まれた香り高い一番茶の石臼挽き抹茶が惜しみなく使われている。",
      hook: "",
      image_prompt: "Warm pastel gouache illustration of a Kyusu clay teapot pouring bright green sencha tea into a ceramic cup alongside a bowl of matcha sweets with red beans and shiratama on a dark wooden tray, soft steam rising, no people, no text"
    }
  ]
};
