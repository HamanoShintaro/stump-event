export default {
  slug: 'nagoya',
  station_order: 667,
  station: '名古屋',
  line: 'JR中央本線',
  area_name: '名古屋・四間道と金の鯱の城下',
  prefecture: '愛知県',
  municipality: '名古屋市',
  category: '歴史と街歩き',
  budget_tier: 2,
  tags: ['愛知県', '名古屋市', '名古屋駅', '喫茶店', '名古屋城'],
  style_genre: 'editorial_clean_ink',
  title: '名古屋・老舗喫茶から四間道と名古屋城へ',
  description:
    'JR名古屋駅から、名物エビフライサンドが人気の老舗「コンパル サンロード店」、赤レンガ工場が並ぶ「ノリタケの森」、土蔵と屋根神様が残る「四間道」、下町の風情あふれる「円頓寺商店街」、金の鯱が輝く「名古屋城」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Nagoya City showing the towering golden-shachihoko roofed Nagoya Castle keep above massive stone walls, historic red-brick pottery factory buildings at Noritake Garden, narrow Edo-period earthen storehouse lane of Shikemichi, and a classic Showa kissaten coffee cup, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '名古屋喫茶の一杯と赤レンガの庭、土蔵の路地から名城までを巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「コンパル サンロード店」で、香り高い珈琲と名物エビフライサンドを味わった瞬間',
      subtext:
        '昭和から続く名古屋喫茶の活気と丁寧な味わいが、尾張の旅の始まりを力強く満たしてくれた。',
      badge: {
        code: 'nagoya_konparu',
        name_ja: '名古屋・老舗喫茶の名物を味わいし者',
        subtitle_en: 'Guest of Konparu Sunroad',
        description:
          'コンパル サンロード店を訪ね、名古屋を代表する老舗喫茶店の味を愉しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a classic Japanese kissaten iced coffee glass with a small cream pitcher beside a toasted crispy shrimp cutlet sandwich, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「ノリタケの森」で、明治の赤レンガ工場と緑豊かな芝生の広場を歩いた瞬間',
      subtext:
        '近代日本の陶磁器産業を牽引した歴史と、都心の開放的な緑の調和が心地よかった。',
      badge: {
        code: 'nagoya_noritake',
        name_ja: '名古屋・赤レンガの陶磁の杜を歩きし者',
        subtitle_en: 'Walker of Noritake Garden',
        description:
          'ノリタケの森を訪ね、赤レンガ建築と近代陶磁器の歴史に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting historic Meiji-era red-brick factory walls and tall kiln chimneys framed by green trees and a fine white porcelain teacup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「四間道」の白壁の土蔵が続く石畳を歩き、屋根の上の小さな祠を見つけた瞬間',
      subtext:
        '大通りから一歩入った静かな路地に、江戸時代の商人の町並みが色濃く息づいていた。',
      badge: {
        code: 'nagoya_shikemichi',
        name_ja: '名古屋・四間道の土蔵の路地を巡りし者',
        subtitle_en: 'Walker of Shikemichi',
        description:
          '四間道を訪ね、江戸の面影を残す白壁の土蔵と屋根神様の町並みを歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a quiet Edo-period narrow lane lined with white-plastered wooden storehouses and tiled roofs beneath clear sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「名古屋城」の広大な本丸に入り、金色に輝く鯱と絢爛な本丸御殿を仰いだ瞬間',
      subtext:
        '徳川御三家筆頭の威光を示す壮大な石垣と御殿の美しさに、尾張名古屋の底力を感じた。',
      badge: {
        code: 'nagoya_castle',
        name_ja: '名古屋・金の鯱の名城を仰ぎ見し者',
        subtitle_en: 'Visitor of Nagoya Castle',
        description:
          '名古屋城を訪ね、壮麗な天守と復元された本丸御殿の歴史を堪能した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the white-and-green tiered Nagoya Castle keep crowned with golden shachihoko ornaments above massive stone walls, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nagoya_complete',
    name_ja: '名古屋・四間道と名城を巡る旅人',
    subtitle_en: 'Walker of Nagoya',
    description:
      'コンパル サンロード店からノリタケの森、四間道、円頓寺商店街、名古屋城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the golden-roofed Nagoya Castle keep, red-brick Noritake factory chimneys, and a classic coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'コンパル サンロード店',
      spot_type: '休憩',
      description:
        '昭和22年創業、名古屋を代表する老舗喫茶店の名駅地下街店舗。濃いめの珈琲と熱々のエビフライサンドが名物。8:00〜21:00、無休（元日休）。',
      address: '愛知県名古屋市中村区名駅4-7-25先 名古屋地下街サンロード',
      prefecture: '愛知県',
      municipality: '名古屋市',
      lat: 35.169718,
      lng: 136.884547,
      clue: '昭和22年創業、名古屋の喫茶文化を代表する老舗「コンパル サンロード店」から街歩きを始めよう（8:00〜21:00・元日休）。メイチカ店が一時閉鎖となった今も、名駅直結の地下街サンロードで変わらぬ味を届けている。濃く淹れたホット珈琲を氷入りグラスへ注ぐ独自のアイスコーヒーや、揚げたての海老が詰まった名物エビフライサンドを味わい、尾張の散策へこれからも元気に出発したい。',
      surprise:
        '朝の8時から11時まではドリンク料金にプラスして楽しめるお得なモーニングセットもあり、名古屋の朝の活気を間近に体感できます。',
      hook: '名古屋喫茶を味わったら、北へ歩いて赤レンガのノリタケの森へ向かおう。',
      f7_fragment: '昭和22年創業の名古屋老舗喫茶、名物エビフライサンドが人気。',
      f7_full:
        '「コンパル サンロード店」で珈琲とエビフライサンドを味わい、名古屋の旅を始めた。',
      image_prompt:
        'Warm nostalgic Showa kissaten illustration of Konparu in Nagoya, velvet booth seating, polished counter, steaming dark coffee cup and golden crispy shrimp sandwich on a plate, no text, no letters.',
    },
    {
      name: 'ノリタケの森',
      spot_type: '見どころ',
      description:
        '洋食器メーカー・ノリタケの本社敷地内に広がる複合施設。明治期の赤レンガ工場建築や窯の煙突、緑豊かな広場が調和する。10:00〜18:00（施設により異なる）、月曜休。',
      address: '愛知県名古屋市西区則武新町3-1-36',
      prefecture: '愛知県',
      municipality: '名古屋市',
      lat: 35.179115,
      lng: 136.881218,
      clue: '世界的洋食器メーカー・ノリタケが創立百周年を記念して開いた複合施設「ノリタケの森」を訪ねよう（10:00〜18:00・月曜休、入園無料）。広大な芝生と木々の向こうに明治期の赤レンガ工場建築や6本の煙突モニュメントがそびえ、近代日本の産業を支えたものづくりの記憶を伝えている。ミュージアムやショップを巡り、白く美しい洋食器の確かな輝きをこれからも身近にじっくりと感じたい。',
      surprise:
        '敷地内のウェルカムセンターやクラフトセンターでは、絵付け体験や明治から昭和にかけて製作された貴重なオールドノリタケの名品に出会えます。',
      hook: '赤レンガの杜を歩いたら、南東の城下町・四間道の土蔵の路地へ向かおう。',
      f7_fragment: '明治の赤レンガ工場と緑の芝生が調和する、陶磁器の文化拠点。',
      f7_full:
        '「ノリタケの森」で明治の赤レンガ工場と緑豊かな広場を歩き、ものづくりの歴史に触れた。',
      image_prompt:
        'Scenic urban garden illustration of Noritake Garden in Nagoya, historic red-brick Meiji factory building and tall brick kiln chimneys rising behind bright green lawns and shade trees, clear morning sky, no text, no letters.',
    },
    {
      name: '四間道',
      spot_type: '見どころ',
      description:
        '元禄13年（1700年）の大火後に防火のため道幅を四間（約7m）に広げたことに由来する歴史的町並み。白壁の土蔵と町家が並ぶ。散策自由、無料。',
      address: '愛知県名古屋市西区那古野1-36',
      prefecture: '愛知県',
      municipality: '名古屋市',
      lat: 35.174947,
      lng: 136.892625,
      clue: '堀川沿いに江戸時代の面影を残す「四間道」の路地を歩こう（散策自由・無料）。白壁の土蔵や町家の屋根に祀られた小さな屋根神様を眺めながら城下町の風情を味わいたい。',
      surprise:
        '名古屋ならではの民間信仰である「屋根神様」は、一階の庇や屋根の上に小さな祠を設けて津島神社や秋葉神社などを祀る風習で、今も点在しています。',
      hook: '土蔵の路地を抜けたら、すぐ北の円頓寺商店街を歩いて下町の活気に触れよう。',
      f7_fragment: '江戸の大火後に築かれた白壁の土蔵と屋根神様が残る歴史的町並み。',
      f7_full:
        '「四間道」の白壁の土蔵が続く静かな路地を歩き、屋根神様が残る城下町の風情に触れた。',
      image_prompt:
        'Quiet historic Edo-period lane illustration of Shikemichi in Nagoya, white plaster-walled storehouses on stone foundations, dark wooden lattice townhouses and tiny rooftop shrine beneath clear sky, no text, no letters.',
    },
    {
      name: '円頓寺商店街',
      spot_type: '買い物',
      description:
        '名古屋駅と名古屋城の中間に位置する、明治時代からの歴史を持つアーケード商店街。老舗の和菓子屋や個性的なカフェが軒を連ねる。店舗により営業時間・定休日は異なる。',
      address: '愛知県名古屋市西区那古野1-10',
      prefecture: '愛知県',
      municipality: '名古屋市',
      lat: 35.176896,
      lng: 136.891083,
      clue: '名古屋駅と名古屋城のほぼ中間に位置し、明治時代から下町の暮らしを支えてきた「円頓寺商店街」を歩こう（散策自由・営業時間は店舗により異なる）。アーケードの下には創業百年を超える老舗の和菓子店や履物店、古民家を活かした個性的なカフェや書店が並び、どこか懐かしい空気が流れている。新旧の店が心地よく混じり合う商店街の温かな活気を、これからもゆっくりと笑顔で楽しみながら歩きたい。',
      surprise:
        '商店街の一角にある「金刀比羅神社」は名古屋弁のおみくじで知られ、地元の人々や散策客に笑顔を届ける名物スポットとなっています。',
      hook: '下町の空気を楽しんだら、北東へ進んで金の鯱が輝く名古屋城で旅を結ぼう。',
      f7_fragment: '明治から続く下町のアーケード商店街、老舗と新店が心地よく共存する。',
      f7_full:
        '「円頓寺商店街」のアーケードを歩き、老舗と新しい店が交わる下町の温もりに触れた。',
      image_prompt:
        'Warm Japanese covered arcade shopping street illustration of Endoji Shotengai in Nagoya, traditional wooden storefronts, wagashi sweet shop and cozy cafe signs under sunlit glass arcade roof, no text, no letters.',
    },
    {
      name: '名古屋城',
      spot_type: '見どころ',
      description:
        '慶長15年（1610年）に徳川家康公の命で築城された日本三名城のひとつ。金の鯱を戴く天守外観と忠実に復元された豪華な本丸御殿が見事。9:00〜16:30（入場16:00迄）、大人1000円。',
      address: '愛知県名古屋市中区本丸1-1',
      prefecture: '愛知県',
      municipality: '名古屋市',
      lat: 35.18475,
      lng: 136.899688,
      clue: '慶長15年に徳川家康公の命によって築かれた天下の名城「名古屋城」で旅を締めくくろう（9:00〜16:30・最終入場16:00、大人1000円）。大天守の屋根で金色に輝く鯱や壮大な石垣に加え、書院造の最高傑作として忠実に復元された本丸御殿の障壁画と彫刻は息を呑む美しさだ。尾張徳川家の栄華を伝える壮麗な城郭を仰ぎ見ながら、名古屋の歴史散歩をこれからも誇らしく美しく結びたい。',
      surprise:
        '天守閣は現在木造復元に向けた整備のため内部公開を休止していますが、本丸御殿や西之丸御蔵城宝館、広大な二の丸庭園の見学が充実しています。',
      hook: '',
      f7_fragment: '金の鯱が輝く徳川御三家筆頭の名城、復元された本丸御殿が壮麗。',
      f7_full:
        '「名古屋城」で金の鯱と豪華な本丸御殿を仰ぎ見ながら、尾張名古屋の旅を締めくくった。',
      image_prompt:
        'Majestic Japanese castle illustration of Nagoya Castle, grand five-tiered white and copper-green castle keep crowned with golden shachihoko dolphins atop massive stone walls and moat, golden afternoon light, no text, no letters.',
    },
  ],
};
