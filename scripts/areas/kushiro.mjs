export default {
  slug: 'kushiro',
  station_order: 590,
  station: '釧路駅',
  line: 'JR根室本線・釧網本線',
  area_name: '釧路・海霧の街と幣舞橋の夕景',
  prefecture: '北海道',
  municipality: '釧路市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['北海道', '釧路市', '釧路駅', '幣舞橋', 'スパカツ'],
  style_genre: 'shin_hanga_twilight',
  title: '海霧と夕映えが染める釧路川辺を歩く',
  description:
    '太平洋から流れ込む海霧と、世界三大夕日に数えられる茜色の空が出会う北の港町・釧路。戦災の記憶を刻む街なかの公園から、鉄板の上でソースが弾ける元祖洋食、四季の像が立つ名橋、港の市場と赤煉瓦の復元社屋まで、潮風とともに道東の息づかいを味わう徒歩の旅。',
  eyecatch_prompt:
    'Serene winter twilight shin-hanga woodblock style scene of Nusamai Bridge over the Kushiro River in Hokkaido, glowing warm amber streetlamps reflected on dark indigo water, light sea mist drifting past bronze statues and distant harbor silhouettes, no text, no people.',
  question:
    '海霧と鉄板の香りが交差する釧路の街で、あなたが最初に誰かへ語りたいのはどの場面ですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「レストラン泉屋 総本店」で熱々の鉄板に載った名物スパカツを頬張った瞬間',
      subtext:
        '寒冷な道東の暮らしが生んだボリューム満点の洋食文化と、半世紀以上守られるミートソースのコクが記憶に残った。',
      badge: {
        code: 'kushiro_izumiya_spakatsu',
        name_ja: '釧路洋食・鉄板スパカツの語り部',
        subtitle_en: 'Chronicler of Kushiro Spakatsu',
        description:
          'レストラン泉屋 総本店を訪ね、釧路の市民に愛され続ける鉄板スパカツの歴史を味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a sizzling cast-iron skillet holding golden breaded pork cutlet over spaghetti with rich tomato meat sauce, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 1,
      text: '市街地の緑陰に佇む「栄町平和公園」で、道東最初の戦災と復興の碑を見上げた瞬間',
      subtext:
        '賑やかな中心街のすぐ傍らに、釧路空襲の記憶と市民の平和への願いを静かに伝える場があることに胸を打たれた。',
      badge: {
        code: 'kushiro_heiwa_park',
        name_ja: '釧路・栄町平和公園の記録者',
        subtitle_en: 'Observer of Sakaemachi Peace Park',
        description:
          '栄町平和公園を訪ね、釧路の戦災と戦後復興の歩みに静かに思いを馳せた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a bronze peace memorial monument and an old stone fountain framed by northern birch trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「幣舞橋」の欄干に立つ四季の像越しに、釧路川の河口と港の空を眺めた瞬間',
      subtext:
        '五代にわたって架け替えられてきた名橋の上で、道東の厳しい季節と海風が織りなす雄大な景色を体感した。',
      badge: {
        code: 'kushiro_nusamai_bridge',
        name_ja: '海霧の幣舞橋を渡りし者',
        subtitle_en: 'Crosser of Nusamai Bridge',
        description:
          '釧路川の河口に架かる幣舞橋を渡り、四季の像と港町の風景を目に焼き付けた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a graceful bronze statue on a stone bridge balustrade overlooking a northern harbor river at dusk, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '赤煉瓦の洋館「港文館」の窓辺で、石川啄木が過ごした北の新聞社時代に触れた瞬間',
      subtext:
        'わずか七十六日間の滞在ながら多くの歌を残した若き歌人の足跡を、珈琲の香りとともに辿ることができた。',
      badge: {
        code: 'kushiro_kobunkan',
        name_ja: '港文館・北の文豪の足跡を辿りし者',
        subtitle_en: 'Visitor of Kobunkan Heritage Hall',
        description:
          '旧釧路新聞社を復元した港文館を訪ね、釧路の近代史と文学の香りに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a historic red-brick Western-style newspaper building with arched windows beside a northern port, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kushiro_complete',
    name_ja: '釧路・海霧と夕映えの証',
    subtitle_en: 'Witness of Kushiro Mist and Dusk',
    description:
      '栄町平和公園からレストラン泉屋 総本店、幣舞橋、釧路フィッシャーマンズワーフMOO、港文館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a red-brick harbor building, a graceful bridge over sea mist, and northern pine silhouettes, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '栄町平和公園',
      spot_type: '見どころ',
      description:
        '釧路市中心部に位置し、市内で最初に設置された噴水や釧路空襲の戦災記念碑が立つ歴史ある公園。終日散策自由。',
      address: '北海道釧路市栄町6-9',
      prefecture: '北海道',
      city: '釧路市',
      lat: 42.985597,
      lng: 144.387007,
      clue: '釧路駅を出て北大通を南下し、少し東へ入ると街の喧騒が和らぐ木立の広場「栄町平和公園」に着く（終日散策自由）。道東の拠点港として栄えた釧路は、終戦間際の空襲で市街地の多くを失いながらも力強く復興を遂げた歴史を持つ。緑豊かな園内に据えられた戦災記念碑と、釧路市内で最初に設けられた噴水跡を前に、北の港町が歩んだ再生の道のりと平和への願いへ静かに視線を向けよう。ここで最初のしるしを刻む。',
      surprise:
        'かつて市民の憩いの場として親しまれた園内には、釧路市で初めて造られた噴水と、昭和二十年七月の釧路空襲を語り継ぐ平和の碑が並んでいる。焼け野原から道東最大の拠点都市へと見事な再生を遂げた市民たちの記憶と祈りが、市街中心部の緑地に今も静かに刻まれた。',
      hook: '栄町平和公園を後にしたら、南へ徒歩5分のレストラン泉屋 総本店へ向かおう。',
      f7_fragment: '木立の奥に佇む戦災記念碑と、市民の復興を見守った噴水の記憶。',
      f7_full: '釧路市内で最初に造られた噴水と戦災記念碑が並ぶ栄町平和公園を訪ね、北の港町が歩んだ再生の軌跡に触れた。',
      image_prompt:
        'A quiet northern city park in Hokkaido with a stone peace memorial monument, historic circular fountain basin, and tall birch trees under crisp morning light, no text, no people.',
    },
    {
      name: 'レストラン泉屋 総本店',
      spot_type: '食事',
      description:
        '末広町に店を構える釧路の老舗洋食店。熱々の鉄板にミートソーススパゲッティと豚カツを載せた名物「スパカツ」の元祖。営業時間11:00〜20:30、月1回火曜不定休。',
      address: '北海道釧路市末広町2-28',
      prefecture: '北海道',
      city: '釧路市',
      lat: 42.982673,
      lng: 144.386835,
      clue: '栄町平和公園から南へ徒歩4分、末広町の「レストラン泉屋 総本店」へ立ち寄ろう（11:00〜20:30、月1回火曜不定休）。熱々の鉄板で運ばれる元祖スパカツの香ばしさを味わい、ひと息つこう。',
      surprise:
        '冬の厳しい寒さの中でも料理が最後まで冷めないようにと、先代がステーキ用の厚手鉄板にスパゲッティと豚カツを載せたのがスパカツの始まりと伝わる。濃厚なミートソースが熱々の鉄板の端で香ばしく焦げる音までが、釧路の冬を彩るご当地グルメの風物詩だ。',
      hook: '泉屋で心身を温めたら、南南西へ徒歩3分の幣舞橋へ歩き出そう。',
      f7_fragment: '湯気とソースの香りが立ち上る鉄板、道東の寒さを忘れる洋食の熱気。',
      f7_full: '冬の寒さでも料理が冷めぬよう厚手の鉄板に盛られた元祖スパカツを味わい、北国の暮らしから生まれた知恵を感じた。',
      image_prompt:
        'Close-up interior dining table scene with a sizzling black cast-iron plate of golden pork cutlet over spaghetti and rich meat sauce rising with warm steam, warm wooden diner atmosphere, no text, no people.',
    },
    {
      name: '幣舞橋',
      spot_type: '見どころ',
      description:
        '釧路川河口に架かる北海道三大名橋の一つ。欄干の四隅に「春夏秋冬」を表現したブロンズ像が立ち、夕日の名所として知られる。終日通行可能。',
      address: '北海道釧路市北大通1丁目',
      prefecture: '北海道',
      city: '釧路市',
      lat: 42.981007,
      lng: 144.385564,
      clue: 'レストラン泉屋から南南西へ徒歩3分、釧路川の河口に堂々と架かる「幣舞橋」を渡ろう（終日通行可能）。欄干の四隅には日本の具象彫刻界を代表する四人の作家が手がけた「春・夏・秋・冬」のブロンズ像が立ち、冷涼な潮風と海霧を受けて港の空を見つめている。川面をゆっくりと往来する漁船のシルエットと太平洋へと開けた河口の雄大な広がりに、北の港町ならではのスケールと深い旅情を実感する。',
      surprise:
        '現在の橋は五代目にあたり、日本で初めて橋の欄干に本格的な裸婦ブロンズ像を据えた「彫刻の橋」として整備された。橋名の由来はアイヌ語の「ヌサ・オ・マイ（幣場のある所）」にあり、古来より漁業と交易の要衝として栄えた歴史を物語る。',
      hook: '幣舞橋を渡りきったら、西北西へ徒歩3分の釧路フィッシャーマンズワーフMOOへ立ち寄ろう。',
      f7_fragment: '釧路川の河口を見守る四季のブロンズ像と、港から吹き抜ける潮風。',
      f7_full: '五代にわたり街を繋いできた幣舞橋を歩き、海霧と四季のブロンズ彫刻が織りなす北の港町の景観を望んだ。',
      image_prompt:
        'Architectural view of Nusamai Bridge spanning the wide Kushiro River mouth with a sculpted bronze figure on the stone parapet and distant fishing boats in soft mist, no text, no people.',
    },
    {
      name: '釧路フィッシャーマンズワーフMOO',
      spot_type: '買い物',
      description:
        '幣舞橋のたもとに建つ港の複合施設。海産物や道東銘菓、地元工芸品などが揃うショッピングゾーンを備える。営業時間10:00〜19:00（11〜4月は18:00まで）、1月1日休。',
      address: '北海道釧路市錦町2-4',
      prefecture: '北海道',
      city: '釧路市',
      lat: 42.981763,
      lng: 144.38334,
      clue: '幣舞橋のたもとから西北西へ徒歩3分、釧路川沿いに建つ「釧路フィッシャーマンズワーフMOO」を訪ねよう（10:00〜19:00、11〜4月は18:00まで、1月1日休）。館内の市場エリアには、昆布や鮭トバといった海の幸から、道東の豊かな酪農が生んだ焼き菓子や銘菓までずらりと並ぶ。旅の思い出を分かち合う土産を選びながら、港町ならではの活気ある賑わいに身を委ね、道東の豊かな恵みを感じよう。',
      surprise:
        '釧路出身の建築家・毛綱毅曠が設計を手がけた建物は、かつての漁港倉庫や港の景観を現代的に再解釈した独創的な造形を持つ。施設名の「MOO」には「Marine Our Oasis（海は私たちのオアシス）」という海への深い想いと願いが込められた。',
      hook: 'お土産を選んだら、南南西へ徒歩3分の港文館で旅の余韻を味わおう。',
      f7_fragment: '海産物や道東銘菓が賑やかに並ぶ港の館、旅の記憶を包む潮の香り。',
      f7_full: '釧路川のほとりに建つ港の複合施設MOOを訪ね、北の海の豊かな恵みと道東ならではの土産を手に取った。',
      image_prompt:
        'Indoor harbor market stall display with neatly packed kelp bundles, dried salmon strips, and wrapped regional butter sweets on wooden counters under warm lights, no text, no kanji, no people.',
    },
    {
      name: '港文館',
      spot_type: '休憩',
      description:
        '明治期に石川啄木が記者として勤めた旧釧路新聞社屋を復元した赤煉瓦の洋館。1階はカフェ、2階は石川啄木資料館。営業時間10:00〜18:00（11〜4月は17:00まで）、年末年始休。',
      address: '北海道釧路市大町2-1-12',
      prefecture: '北海道',
      city: '釧路市',
      lat: 42.980176,
      lng: 144.382261,
      clue: 'MOOから南南西へ徒歩3分、大町に佇む赤煉瓦の洋館「港文館」へ足を運ぼう（10:00〜18:00、11〜4月は17:00まで、年末年始休）。二階には若き日の石川啄木が筆を執った旧釧路新聞社の時代を伝える資料が並び、一階の喫茶コーナーでは釧路川を眺めながら淹れたての珈琲を味わえる。海霧に煙る港の風景を窓越しに見つめながら、北の街に流れる静かな時間の中で旅の余韻をゆっくりと楽しもう。',
      surprise:
        '明治四十一年の厳冬期に釧路へ赴任した啄木は、わずか七十六日間の滞在中に百数十首もの短歌の題材をこの街で得たという。赤煉瓦の復元社屋は、当時の洋風木骨煉瓦造りの意匠を忠実に受け継ぎながら港の文学的記憶を今も静かに伝えている。',
      hook: '',
      f7_fragment: '赤煉瓦の洋館に漂う珈琲の香りと、明治の新聞社へ続く木の階段。',
      f7_full: '石川啄木ゆかりの復元社屋・港文館の窓辺で珈琲を傾け、海霧の港町に流れる静かな時間をゆっくり味わった。',
      image_prompt:
        'Dusk harbor view of a two-story red-brick Western-style heritage building with glowing warm windows beside calm dark river water under an indigo twilight sky, no text, no people.',
    },
  ],
};
