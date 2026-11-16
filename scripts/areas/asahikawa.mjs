export default {
  slug: 'asahikawa',
  station_order: 645,
  station: '旭川',
  line: 'JR函館本線',
  area_name: '旭川・買物公園と石狩川の旭橋',
  prefecture: '北海道',
  municipality: '旭川市',
  category: '街歩きとグルメ',
  budget_tier: 2,
  tags: ['北海道', '旭川市', '旭川駅', '旭川ラーメン', '旭橋'],
  style_genre: 'woodblock_ukiyoe_travel',
  title: '旭川・旭川ラーメンと石狩川に架かる旭橋を歩く',
  description:
    'JR旭川駅から、昭和44年創業の「梅光軒 旭川本店」と歴史的建造物を活かした「福吉カフェ 旭橋本店」、常磐公園の「上川神社頓宮」と「常磐公園」、北海道遺産に選ばれる石狩川の鉄橋「旭橋」を巡る散策路。',
  eyecatch_prompt:
    'Japanese woodblock travel print style illustration of Asahikawa in Hokkaido showing the iconic pale green steel arch of Asahibashi Bridge spanning the wide Ishikari River, snow-dusted Daisetsuzan mountains on the horizon, verdant Tokiwa Park shrines, historic red-brick cafe and warm ramen street, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '北海道第二の都市の食と水辺のシンボルが繋がる旭川を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「梅光軒 旭川本店」で、豚骨と魚介のダブルスープに極太メンマがのる旭川ラーメンを味わった瞬間',
      subtext:
        '昭和四十四年創業の老舗が守り続ける醤油のコクが、北の大地の街歩きを温かく支えてくれた。',
      badge: {
        code: 'asahikawa_baikoken',
        name_ja: '旭川・老舗のダブルスープを嗜みし者',
        subtitle_en: 'Taster of Baikoken Ramen',
        description:
          '梅光軒 旭川本店を訪ね、豚骨と魚介が調和する旭川ラーメンの伝統を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of Asahikawa soy sauce ramen topped with thick bamboo shoots and chashu pork, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「福吉カフェ 旭橋本店」のレトロな空間で、和の素材を使ったときわ焼きと焙煎珈琲を味わった瞬間',
      subtext:
        '大正時代の旧製粉所を活かした温かな店内で、旭橋のたもとの穏やかな時間に癒やされた。',
      badge: {
        code: 'asahikawa_fukuyoshi',
        name_ja: '旭川・旭橋たもとの古建築茶房を訪ねし者',
        subtitle_en: 'Visitor of Fukuyoshi Cafe',
        description:
          '福吉カフェ 旭橋本店を訪ね、歴史ある建物で名物のときわ焼きと珈琲を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a golden diamond-shaped Japanese pastry and a ceramic coffee cup inside a retro wooden mill house, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「上川神社頓宮」の木立に包まれた社殿へ参拝し、旭川開拓の総鎮守に旅の無事を祈った瞬間',
      subtext:
        '千鳥ヶ池のほとりに鎮まる厳かな境内が、都市の真ん中にある静けさを教えてくれた。',
      badge: {
        code: 'asahikawa_kamikawa',
        name_ja: '旭川・常磐公園の杜に鎮まる頓宮を詣でし者',
        subtitle_en: 'Worshipper of Kamikawa Tongu',
        description:
          '上川神社頓宮を訪ね、旭川最古の公園の杜で静かに手を合わせた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a solemn wooden Shinto shrine sanctuary framed by tall northern pine and birch trees beside a calm pond, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「旭橋」の優美な曲線を描く鋼鉄アーチの歩道を渡り、雄大な石狩川の流れを望んだ瞬間',
      subtext:
        '昭和七年架橋の北海道遺産越しに見る大雪山の山並みが、旭川の旅を誇らしく締めくくった。',
      badge: {
        code: 'asahikawa_asahibashi',
        name_ja: '旭川・北海道遺産の旭橋を渡りし者',
        subtitle_en: 'Crosser of Asahibashi Bridge',
        description:
          '昭和七年架橋の名橋・旭橋を渡り、石狩川と大雪連峰を望んだ証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing a graceful steel arch bridge crossing a wide northern river with distant snow-capped mountain peaks, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'asahikawa_complete',
    name_ja: '旭川・買物公園と旭橋を巡る旅人',
    subtitle_en: 'Walker of Asahikawa',
    description:
      '梅光軒 旭川本店から福吉カフェ 旭橋本店、上川神社頓宮、常磐公園、旭橋までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a pale green steel arch bridge over a northern river, a steaming bowl of Asahikawa ramen and pine trees, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '梅光軒 旭川本店',
      spot_type: '食事',
      description:
        '昭和44年（1969年）創業、動物系と魚介系のダブルスープに極太メンマを合わせた旭川ラーメンの老舗本店。11:00〜15:30・17:00〜21:00（日祝〜20:30）、不定休。',
      address: '北海道旭川市2条通8丁目 買物公園ピアザビル B1F',
      prefecture: '北海道',
      municipality: '旭川市',
      lat: 43.766158,
      lng: 142.359704,
      clue: '旭川駅から日本初の恒久的歩行者天国「平和通買物公園」を北へ歩き、2条通の老舗「梅光軒 旭川本店」を訪ねよう（11:00〜15:30・17:00〜21:00／日祝〜20:30）。昭和四十四年の創業以来、豚骨や鶏ガラの動物系と煮干しや昆布の魚介系を合わせたダブルスープで愛される名店。縮れ麺に絡む香り高い醤油スープを一口すすれば、北の城下町の力強い日常がこれからも鮮やかに立ち上がる。',
      surprise:
        '旭川ラーメンのスープにラードの膜が浮かぶのは、厳しい冬の寒さでも最後の一口まで熱々を保つための雪国の知恵から生まれた工夫。',
      hook: '老舗ラーメンを堪能したら、北へ歩いて旭橋たもとの福吉カフェ 旭橋本店へ向かおう。',
      f7_fragment: '昭和四十四年創業、豚骨と魚介のダブルスープを守る旭川ラーメンの名店。',
      f7_full:
        '旭川の「梅光軒 旭川本店」で豚骨と魚介が調和する老舗の醤油ラーメンを味わい、北の街歩きの活力を得た。',
      image_prompt:
        'Warm exterior entrance and inviting interior stairs of a historic Asahikawa ramen shop along Heiwa-dori Shopping Park in Japanese woodblock print style, steaming bowls inside, no text, no letters.',
    },
    {
      name: '福吉カフェ 旭橋本店',
      spot_type: '休憩',
      description:
        '大正14年建築の旧北島製粉所を再生したレトロな古建築カフェ。旭橋のトラスをイメージした名物「ときわ焼き」や和ドリンクが人気。10:00〜19:00（季節により変動あり）、年中無休。',
      address: '北海道旭川市常盤通2丁目1970-1',
      prefecture: '北海道',
      municipality: '旭川市',
      lat: 43.775554,
      lng: 142.362207,
      clue: '買物公園の賑わいを抜けて北へ進み、旭橋のたもとに佇む古建築カフェ「福吉カフェ 旭橋本店」でひと息つこう（10:00〜19:00・季節変動あり、年中無休）。大正十四年建築の旧北島製粉所を再生したレトロな空間では、名物「ときわ焼き」や北海道産小豆と抹茶の和ドリンクが味わえる。木のぬくもりに包まれながら、川辺と公園の散策へこれからもずっと心穏やかに心地よく豊かに明るく備えたい。',
      surprise:
        '店先で焼き上げられる「ときわ焼き」は、旭橋のトラス構造やトキワの森をイメージした菱形の形をしており、手土産としても人気が高い。',
      hook: '和モダン茶房で一息ついたら、西の常磐公園内にある上川神社頓宮へ参拝しよう。',
      f7_fragment: '大正時代の旧製粉所を再生した、旭橋たもとの和モダン茶房。',
      f7_full:
        '旭川の「福吉カフェ 旭橋本店」で大正建築のぬくもりに触れながら名物ときわ焼きを味わい、川辺への歩みを進めた。',
      image_prompt:
        'Historic Taisho-era wooden flour mill building converted into a cozy cafe near Asahibashi Bridge in Japanese woodblock print style, warm light glowing inside, no text, no letters.',
    },
    {
      name: '上川神社頓宮',
      spot_type: '見どころ',
      description:
        '神楽岡に本宮を構える上川神社の街中の拠点として、常磐公園の千鳥ヶ池ほとりに鎮座する古社。開拓の祖神・天照皇大神などを祀る。境内自由・社務所9:00〜17:00、無休。',
      address: '北海道旭川市常磐公園1971-34',
      prefecture: '北海道',
      municipality: '旭川市',
      lat: 43.775179,
      lng: 142.359106,
      clue: '福吉カフェからすぐの常磐公園内へ入り、「上川神社頓宮」へ参拝しよう（社務所9:00〜17:00）。千鳥ヶ池のほとりに鎮座する街の杜に静かに手を合わせたい。',
      surprise:
        '「頓宮（とんぐう）」とは祭礼の際に神輿が一時的に滞在する仮の宮のことで、上川神社の例大祭ではこの地と本宮を繋ぐ神事が受け継がれている。',
      hook: 'お参りを終えたら、すぐ北西に広がる常磐公園の池畔をゆっくり歩こう。',
      f7_fragment: '千鳥ヶ池のほとりに鎮座し、市民の祈りを受け止める上川神社の街の杜。',
      f7_full:
        '常磐公園内の「上川神社頓宮」に参拝し、木立と池に囲まれた静謐な境内で旭川の開拓の歴史に思いを馳せた。',
      image_prompt:
        'Serene Shinto shrine sanctuary in Tokiwa Park framed by tall birch and pine trees beside Chidorigaike Pond in Japanese woodblock print style, no text, no letters.',
    },
    {
      name: '常磐公園',
      spot_type: '見どころ',
      description:
        '日本の都市公園100選にも選ばれた旭川最古の総合公園。石狩川の旧流路を活かした千鳥ヶ池や白鳥池、豊かな緑と文化施設が調和する。入園自由・無休。',
      address: '北海道旭川市常磐公園1',
      prefecture: '北海道',
      municipality: '旭川市',
      lat: 43.775929,
      lng: 142.357704,
      clue: '頓宮の周りに広がる「常磐公園」の園路をゆっくりと散策しよう（入園自由・無休）。日本の都市公園百選にも選ばれた旭川最古の総合公園で、春は桜やエゾヤマザクラ、夏は緑陰、秋は紅葉、冬は雪景色と四季折々の美しい表情を見せてくれる。千鳥ヶ池と白鳥池の木陰や彫像を眺めながら歩けば、美術館や図書館も寄り添う文化の杜の豊かさがこれからもずっと心豊かに穏やかに温かく確かに深く感じられる。',
      surprise:
        '明治四十三年開設の歴史を持ち、石狩川の旧流路を活かして造られた千鳥ヶ池と白鳥池が公園の風光明媚な骨格をつくっている。',
      hook: '緑の園路を抜けたら、北北東に架かる北海道遺産・旭橋を渡って旅を結ぼう。',
      f7_fragment: '日本の都市公園百選に選ばれる、石狩川沿いの緑豊かな旭川最古の公園。',
      f7_full:
        '四季の表情豊かな「常磐公園」の池畔を歩き、文化施設と自然が寄り添う旭川の穏やかな時間を感じた。',
      image_prompt:
        'Lush historic urban park with calm ponds, arched wooden walkways, weeping willows and distant museum buildings in Japanese woodblock print style, no text, no letters.',
    },
    {
      name: '旭橋',
      spot_type: '見どころ',
      description:
        '昭和7年（1932年）に完成した全長225mの優美な鋼鉄アーチ橋で、北海道遺産に選定されている旭川のシンボル。石狩川と遠く大雪連峰を一望できる。通行自由・終日開放。',
      address: '北海道旭川市常盤通3丁目',
      prefecture: '北海道',
      municipality: '旭川市',
      lat: 43.778511,
      lng: 142.360179,
      clue: '常磐公園の北側へ抜け、北海道遺産に選定されている名橋「旭橋」を歩いて旅を締めくくろう（通行自由・終日開放）。昭和七年に完成した全長二百二十五メートルの優美な曲弦ブレースドリブ鋼アーチ橋で、旧陸軍第七師団と市街地を結ぶ大動脈として建てられた誇りある歴史を持つ。欄干から石狩川の雄大な流れと遠く大雪連峰の山並みを仰げば、旭川の魅力がこれからもずっと誇らしく胸いっぱいに広がる。',
      surprise:
        '橋長225mもの規模を持つ鋼鉄アーチ橋でありながら、建設当時は戦時中の金属供出を免れ、現在まで架け替えられることなく現役で走り続けている。',
      hook: '',
      f7_fragment: '昭和七年架橋、石狩川に優雅なアーチを描く北海道遺産のシンボル橋。',
      f7_full:
        '北海道遺産の「旭橋」から石狩川と大雪連峰を望み、ラーメンと古建築と水辺の杜を巡った旭川の旅を誇らしく結んだ。',
      image_prompt:
        'Iconic pale-green steel arch of Asahibashi Bridge spanning the wide Ishikari River at golden dusk with distant snow-capped Daisetsuzan peaks in Japanese woodblock print style, no text, no letters.',
    },
  ],
};
