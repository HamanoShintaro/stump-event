export default {
  slug: 'yuchi',
  station_order: 895,
  station: '勇知',
  line: 'JR宗谷本線',
  area_name: '勇知・上勇知の原野と利尻富士',
  prefecture: '北海道',
  municipality: '稚内市',
  category: 'ダルマ駅と海辺の展望',
  budget_tier: 2,
  tags: ['北海道', '稚内市', '勇知駅', '利尻富士', 'オホーツク日本海'],
  style_genre: 'ink_and_watercolor',
  title: '勇知・上勇知の原野と利尻富士を望む海辺',
  description:
    '車掌車改造のダルマ駅舎「JR勇知駅」から、明治四十四年創立の「明治神社」、自然卵養鶏の薪窯パン「埜や（NOYA）」、利尻富士を望む丘の「Café Kira」、日本海を一望する「浜勇知展望休憩施設（こうほねの家）」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Yuchi Station little railway caboose hut in lush northern pastureland looking west toward Sea of Japan and snow-capped Mount Rishiri silhouette on the horizon, warm morning sunlight, full bleed, no text, no letters.',
  question: 'JR勇知駅のダルマ駅舎から上勇知の原野とカフェを巡り日本海の展望地へ出るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '大正十三年開業・車掌車改造のダルマ駅舎が迎える「JR勇知駅」',
      subtext: '宗谷本線の静かな無人駅として愛され、ホームから天候が良ければ利尻富士を望める。',
      badge: {
        code: 'yuchi_station',
        name_ja: '勇知・ダルマ駅の旅人',
        subtitle_en: 'Daruma Station Visitor of Yuchi',
        description: 'JR勇知駅の車掌車改造ダルマ駅舎を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a small painted railway caboose station beside a quiet wooden platform in northern pastureland, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '自然卵養鶏カヤニファームの薪窯焼きパンとタルト「埜や（NOYA）」',
      subtext: '平飼い卵や稚内牛乳を使い、上勇知の原野で土曜中心に焼き上げるこだわりの薪窯の香りに魅了された。',
      badge: {
        code: 'yuchi_noya',
        name_ja: '勇知・薪窯パンの恵み',
        subtitle_en: 'Hearth Bakery Lover of Noya',
        description: '上勇知の薪窯ベーカリー「埜や（NOYA）」を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting crusty hearth-baked artisan bread loaves and golden egg tarts, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '牧草地の丘から利尻富士を望むキャンドル工房併設「Café Kira」',
      subtext: '窓側カウンターから雄大な利尻富士を眺めながら珈琲と手作りケーキを味わい癒やされた。',
      badge: {
        code: 'yuchi_kira',
        name_ja: '勇知・丘のカフェ寛ぎ',
        subtitle_en: 'Hillside Cafe Guest of Kira',
        description: 'Café Kiraで利尻富士を望みながら一息ついた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a glowing artisanal candle beside a warm coffee cup framing distant Mount Rishiri, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '屋上テラスから日本海と利尻富士を一望する「浜勇知展望休憩施設（こうほねの家）」',
      subtext: '利尻礼文サロベツ国立公園内に建ち、日本海と利尻富士の雄大な大パノラマに心洗われた。',
      badge: {
        code: 'yuchi_kouhone',
        name_ja: '勇知・利尻展望の旅人',
        subtitle_en: 'Rishiri Panorama Explorer',
        description: '浜勇知展望休憩施設（こうほねの家）から日本海と利尻富士を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting Mount Rishiri rising across blue sea waves with yellow water lilies in the foreground, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'yuchi_complete',
    name_ja: '勇知・上勇知の丘と利尻富士を望みし者',
    subtitle_en: 'Walker of Yuchi & Rishiri View',
    description: 'JR勇知駅から明治神社、埜や、Café Kira、浜勇知展望休憩施設（こうほねの家）までを巡った証',
    image_prompt:
      'A circular emblem combining painted railway caboose station, hearth-baked golden bread loaf, candle flame coffee cup and silhouette of Mount Rishiri over sea waves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR勇知駅',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '1924年（大正13年）6月25日、鉄道省天塩北線の駅として開業（終日開放・無料）。1984年無人化後に車掌車を改造したダルマ駅舎へ改築され、晴天時には周辺から利尻富士を望める。',
      address: '北海道稚内市大字抜海村字上勇知原野1069-2',
      lat: 45.259336,
      lng: 141.685183,
      clue:
        '大正十三年六月に天塩北線の駅として開業し、昭和六十年代に車掌車を改造した愛らしいダルマ駅舎へと生まれ変わった「JR勇知駅」から散策を始めよう（終日利用可）。晴れた日には静かなホームや駅周辺からも海の向こうに端正な利尻富士を望めるのが旅心をくすぐる。澄み切った道北の爽やかな空気を胸いっぱいに吸い込んで小さな駅舎を後にしたら、まずは徒歩二分の「明治神社」へと楽しく向かおう。',
      surprise: '車掌車を改造した素朴なダルマ駅舎の向こうに広がる上勇知の原野の開放感が、旅の始まりを彩ってくれた。',
      hook: 'JR勇知駅を出たら、集落内にある徒歩約二分の「明治神社」へ向かおう。',
      f7_fragment: '大正十三年開業、車掌車改造のダルマ駅舎が迎える宗谷本線の無人駅。',
      f7_full: '「JR勇知駅」に降り立ち、上勇知の原野と利尻富士を望む海辺の旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Yuchi Station small weathered railway caboose station building beside quiet wooden platform in open northern pastureland, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '明治神社',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '1911年（明治44年）に入植者によって創立された単立神社（終日参拝自由・無料、例祭7月30日）。境内には大正13年建立・昭和41年再建の忠魂碑が残る。',
      address: '北海道稚内市大字抜海村字上勇知1',
      lat: 45.261395,
      lng: 141.685455,
      clue:
        '明治四十四年に入植者たちが創立した「明治神社」へ参拝しよう（終日自由）。境内には大正十三年建立の忠魂碑も残り、開拓の歩みを今に伝えている。次は「埜や（NOYA）」へ。',
      surprise: '明治の開拓期からこの地を見守り続けてきた小さな神社と忠魂碑に、先人たちの力強い歩みを感じた。',
      hook: '明治神社に参拝したら、上勇知原野の薪窯ベーカリー「埜や（NOYA）」へ向かおう。',
      f7_fragment: '明治四十四年に入植者によって創立され、大正期の忠魂碑も残る社。',
      f7_full: '「明治神社」の静かな境内で手を合わせ、上勇知の開拓の歴史に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Meiji Shrine modest wooden torii gate and stone monument nestled under northern birch trees, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '埜や（NOYA）',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '自然卵養鶏「カヤニファーム」が2025年5月に開いた薪窯焼きパン・キッシュ・タルトのテイクアウト店（主に土曜12:00〜15:00、冬季変動あり要SNS確認）。平飼い卵「宗谷のしおかぜたまご」や稚内牛乳を使用。',
      address: '北海道稚内市大字抜海村字上ユーチ原野1099-4',
      lat: 45.283534,
      lng: 141.679773,
      clue:
        '自然卵養鶏カヤニファームの敷地内に令和七年五月にオープンした薪窯焼きパンとタルトのお店「埜や（NOYA）」へ立ち寄ろう（主に土曜12:00〜15:00、要事前確認）。平飼い卵「宗谷のしおかぜたまご」や濃厚な稚内牛乳を贅沢に使った香ばしいパンやキッシュには、上勇知の原野の豊かな恵みがぎゅっと詰まっている。美味しそうな焼き菓子を手に入れたら、牧草地の丘にある「Café Kira」へと向かおう。',
      surprise: '道北の原野で平飼い卵と稚内牛乳を使って薪窯で焼き上げるパンやタルトの豊かな香りに感動した。',
      hook: '埜や（NOYA）で焼き菓子を選んだら、南東側の丘の上にある「Café Kira」へ向かおう。',
      f7_fragment: '自然卵養鶏カヤニファームが平飼い卵と稚内牛乳で作る薪窯パン・タルト店。',
      f7_full: '「埜や（NOYA）」で原野の恵みが詰まった薪窯焼きのパンや焼き菓子に出会った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of NOYA rustic northern farm bakery counter displaying crusty hearth-baked loaves and golden egg tarts, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'Café Kira（カフェ キラ）',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '上勇知の牧草地の小高い丘に建つペルシャン・キャンドル工房併設の隠れ家カフェ（10:00〜19:00、不定休）。窓側カウンターから利尻富士を望みながら珈琲や手作りケーキを楽しめる。',
      address: '北海道稚内市大字抜海村字上勇知949-3',
      lat: 45.252569,
      lng: 141.715929,
      clue:
        '上勇知の牧草地に抱かれた小高い丘に佇む、ペルシャン・キャンドル工房併設の隠れ家「Café Kira（カフェ キラ）」でゆったりと寛ごう（10:00〜19:00、不定休）。窓側のカウンター席からは雄大な牧草地と端正な利尻富士の姿を望むことができ、香り高い珈琲と手作りケーキを味わいながら過ごす時間はまさに至福だ。心がふんわりほどけたら、最後は海沿いの「浜勇知展望休憩施設」へ向かおう。',
      surprise: 'カラフルなキャンドルが彩る温かい空間と、窓越しに広がる利尻富士の絶景に心がすっかり癒やされた。',
      hook: 'Café Kiraでひと息ついたら、西の海岸線にある「浜勇知展望休憩施設（こうほねの家）」へ向かおう。',
      f7_fragment: '牧草地の丘で利尻富士を望みながら珈琲を楽しめるキャンドル工房併設カフェ。',
      f7_full: '「Café Kira」の窓辺から利尻富士を眺めつつ、穏やかなカフェタイムを過ごした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cafe Kira cozy wooden hillside cafe interior with handcrafted glowing candles and a window framing distant Mount Rishiri, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '浜勇知展望休憩施設（こうほねの家）',
      prefecture: '北海道',
      city: '稚内市',
      description:
        '利尻礼文サロベツ国立公園内のオロロンライン沿いに建つ展望施設（4/29〜11/3の9:00〜17:00開館、冬期閉館、入館無料）。屋上展望テラスから日本海と利尻富士を一望でき、初夏には隣接する沼にコウホネが咲く。',
      address: '北海道稚内市大字抜海村字下勇知1',
      lat: 45.265879,
      lng: 141.605103,
      clue:
        '旅の締めくくりは、オロロンライン沿いの利尻礼文サロベツ国立公園内に建つ「浜勇知展望休憩施設（こうほねの家）」へ足を運ぼう（4月末〜11月初旬9:00〜17:00、入館無料）。屋上の展望テラスへ上がれば、青い日本海と堂々たる利尻富士が目の前に広がる圧巻の大パノラマを望める。初夏には隣接する沼に可憐な黄色いコウホネの花も咲き誇り、勇知の豊かな旅を心地よく美しく結んでくれる。',
      surprise: '屋上テラスから望む日本海と利尻富士の圧倒的なスケールと、湿原の沼に寄り添う静けさが忘れられない。',
      hook: '',
      f7_fragment: '日本海と利尻富士を屋上テラスから一望するオロロンライン沿いの無料展望施設。',
      f7_full: '「浜勇知展望休憩施設」の屋上から日本海と利尻富士の大パノラマを望み、旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kouhone no Ie coastal lookout deck overlooking sparkling blue Sea of Japan and majestic Mount Rishiri across coastal marsh, no text, no letters.',
    },
  ],
};
