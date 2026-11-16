export default {
  slug: 'toyama',
  station_order: 661,
  station: '富山',
  line: '北陸新幹線',
  area_name: '富山・運河のきらめきと薬都の街',
  prefecture: '富山県',
  municipality: '富山市',
  category: '街歩きとアート',
  budget_tier: 2,
  tags: ['富山県', '富山市', '富山駅', 'ガラス', '薬売り'],
  style_genre: 'editorial_clean_ink',
  title: '富山・運河の環水公園からガラスと薬都へ',
  description:
    'JR富山駅から、水辺と天門橋が開放的な「富岩運河環水公園」、昭和の空気を残す老舗「純喫茶ツタヤ」、隈研吾氏設計の「富山市ガラス美術館」、反魂丹を伝える「池田屋安兵衛商店」、石垣と天守が映える「富山城址公園」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Toyama City showing the Fugan Canal Kansui Park with twin Tenmon Bridge towers reflecting on water, the wooden louvered TOYAMA Kirari Glass Art Museum facade, historic medicine shop eaves, and Toyama Castle stone walls, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '運河の開放的な水辺と現代ガラスの輝き、越中売薬の老舗を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「富岩運河環水公園」の天門橋から、穏やかな水面と立山連峰の方向を望んだ瞬間',
      subtext:
        '駅北に広がる開放的な水辺空間が、北陸の玄関口・富山の旅を爽やかに始めてくれた。',
      badge: {
        code: 'toyama_kansui',
        name_ja: '富山・運河の天門橋を渡りし者',
        subtitle_en: 'Walker of Kansui Park',
        description:
          '富岩運河環水公園を訪ね、天門橋から水辺と街の開放的な景色を眺めた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting twin viewing towers connected by a slender footbridge spanning calm canal water under a clear sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「富山市ガラス美術館」で、杉板の木組みと現代ガラスアートの輝きに見入った瞬間',
      subtext:
        '光を受けて表情を変えるガラス作品の美しさが、木の温もりに満ちた建築と響き合っていた。',
      badge: {
        code: 'toyama_glass',
        name_ja: '富山・ガラスの輝きに出会いし者',
        subtitle_en: 'Visitor of Toyama Glass Art Museum',
        description:
          '富山市ガラス美術館を訪ね、木組みの空間と現代ガラス芸術の美しさを堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting translucent blown glass sculptures glowing in jewel tones framed by warm cedar wood louvers, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「池田屋安兵衛商店」で、伝統の和漢薬と丸薬づくりの文化に触れた瞬間',
      subtext:
        '越中富山の薬売りが紡いできた知恵と実直な商いの歴史に、思わず背筋が伸びた。',
      badge: {
        code: 'toyama_ikedaya',
        name_ja: '富山・越中薬売りの知恵に触れし者',
        subtitle_en: 'Visitor of Ikedaya Yasubei Shoten',
        description:
          '池田屋安兵衛商店を訪ね、越中富山の伝統的な製薬文化と和漢薬の歴史に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a traditional wooden apothecary chest with small drawers and a brass mortar for making round herbal pills, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「富山城址公園」で、堀の水面に映る石垣と城の姿を仰ぎ見た瞬間',
      subtext:
        '街の中心にどっしりと構える城郭の風景に、富山が歩んできた城下町の歴史が重なった。',
      badge: {
        code: 'toyama_castle',
        name_ja: '富山・城址の石垣を仰ぎ見し者',
        subtitle_en: 'Walker of Toyama Castle Park',
        description:
          '富山城址公園を訪ね、歴史ある石垣と天守の佇まいを望みながら散策を締めくくった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a white three-tiered Japanese castle keep rising above sturdy stone walls reflected in calm moat water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'toyama_complete',
    name_ja: '富山・運河とガラスの薬都を巡る旅人',
    subtitle_en: 'Walker of Toyama',
    description:
      '富岩運河環水公園から純喫茶ツタヤ、富山市ガラス美術館、池田屋安兵衛商店、富山城址公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the twin Tenmon Bridge towers, jewel-toned blown glass, and Toyama Castle keep, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '富岩運河環水公園',
      spot_type: '見どころ',
      description:
        'JR富山駅北口から徒歩約9分、富岩運河の船溜まりを整備した親水公園。シンボルの天門橋と広々とした芝生が魅力。常時開放、入園無料。',
      address: '富山県富山市湊入船町1',
      prefecture: '富山県',
      municipality: '富山市',
      lat: 36.709377,
      lng: 137.212433,
      clue: 'JR富山駅の北側に広がる「富岩運河環水公園」から、水と緑の散策を始めよう（常時開放・入園無料）。かつて物資を運んだ富岩運河の船溜まりを整備した親水公園で、シンボルの天門橋には両端に展望塔が立ち、穏やかな運河と街並みを一望できる。晴れた日には遠く立山連峰の雄大な稜線まで望める開放的な空間で、北陸の玄関口・富山の清々しい朝の空気をこれからも胸いっぱいにたっぷりと深く吸い込みたい。',
      surprise:
        '天門橋の展望塔同士は「赤い糸電話」で結ばれており、離れていても声が届くユニークな仕掛けが訪れる人々を楽しませています。',
      hook: '運河の景色を眺めたら、南南東の西町方面へ進んで純喫茶ツタヤでひと息つこう。',
      f7_fragment: '富山駅北の親水公園、天門橋の展望塔から運河と立山連峰を望む。',
      f7_full:
        '「富岩運河環水公園」の天門橋から穏やかな水面と開放的な街並みを望み、旅を爽やかに始めた。',
      image_prompt:
        'Editorial clean ink illustration of Fugan Canal Kansui Park in Toyama, peaceful canal water reflecting the iconic twin-towered Tenmon Bridge, grassy lawns and distant mountain silhouette under clear morning sky, no text, no letters.',
    },
    {
      name: '純喫茶ツタヤ',
      spot_type: '休憩',
      description:
        '堤町通りで長年親しまれるレトロな純喫茶。朝から珈琲やトーストを味わえ、路面電車の行き交う街角で落ち着いた時間を過ごせる。7:00〜17:00頃、火・水曜休（不定休あり）。',
      address: '富山県富山市堤町通り1-4-1 セントラルコート西町プレミア1F',
      prefecture: '富山県',
      municipality: '富山市',
      lat: 36.688497,
      lng: 137.21766,
      clue: '堤町通りで長年親しまれる「純喫茶ツタヤ」でひと息つこう（7:00〜17:00頃・不定休あり）。香り高い珈琲と昔ながらの雰囲気で城下町歩きの合間に心を整えたい。',
      surprise:
        '周辺はかつて北陸街道の要衝として栄えた商業エリアで、新旧の商店街と路面電車が行き交う富山らしい街並みを間近に感じられます。',
      hook: '珈琲で一息ついたら、すぐ西にある富山市ガラス美術館へ歩こう。',
      f7_fragment: '西町電停近くの純喫茶、路面電車の街角で昔ながらの珈琲が味わえる。',
      f7_full:
        '「純喫茶ツタヤ」で香り高い珈琲を味わい、富山の街角に息づく穏やかな時間を愉しんだ。',
      image_prompt:
        'Warm nostalgic cafe illustration of Junkissa Tsutaya in Toyama, classic retro coffee counter, warm amber lighting, ceramic cups and quiet streetfront windows along a traditional shopping district, no text, no letters.',
    },
    {
      name: '富山市ガラス美術館',
      spot_type: '見どころ',
      description:
        '隈研吾氏設計の複合施設「TOYAMAキラリ」内にある美術館。県産杉の木組み空間で現代ガラス芸術を鑑賞できる。9:30〜18:00、第1・3水曜休、常設展一般200円。',
      address: '富山県富山市西町5-1',
      prefecture: '富山県',
      municipality: '富山市',
      lat: 36.688416,
      lng: 137.215186,
      clue: '建築家・隈研吾氏が設計した複合施設「TOYAMAキラリ」内の「富山市ガラス美術館」を訪ねよう（9:30〜18:00・第1・3水曜休、常設展一般200円）。富山県産の杉板とガラス、御影石が織りなす開放的な吹き抜け空間に、国内外の現代ガラス芸術作品が展示されている。ガラスの街・富山の豊かな創作文化を、木の温もりと柔らかな光に満ちた建築美とともにこれからも五感で味わいたい。',
      surprise:
        '館内は同じ空間に富山市立図書館も同居しており、柔らかな自然光が差し込む木組みのアトリウムで本とアートが穏やかに共存しています。',
      hook: 'ガラスの輝きに見入ったら、東へ歩いて老舗薬店の池田屋安兵衛商店を訪ねよう。',
      f7_fragment: '隈研吾氏設計の「TOYAMAキラリ」内で現代ガラス芸術に出会う美術館。',
      f7_full:
        '「富山市ガラス美術館」で杉板の木組みと現代ガラスアートの輝きに見入り、建築美を堪能した。',
      image_prompt:
        'Modern architectural illustration of Toyama Glass Art Museum inside TOYAMA Kirari, dramatic diagonal atrium clad in warm local cedar louvers flooded with natural light and colorful glass art displays, no text, no letters.',
    },
    {
      name: '池田屋安兵衛商店',
      spot_type: '買い物',
      description:
        '江戸時代から続く越中富山の売薬文化を伝える老舗和漢薬店。伝統の「越中反魂丹」や丸薬づくり体験ができる。9:00〜18:00、無休（年末年始除く・2階薬都は火水休）。',
      address: '富山県富山市堤町通り1-3-5',
      prefecture: '富山県',
      municipality: '富山市',
      lat: 36.68852,
      lng: 137.21588,
      clue: '江戸時代から続く越中富山の売薬文化を受け継ぐ老舗和漢薬店「池田屋安兵衛商店」を訪ねよう（9:00〜18:00・無休、入場無料）。木造の趣ある店内には伝統的な薬箪笥が並び、富山の代名詞ともいえる胃腸薬「越中反魂丹」をはじめとする多彩な和漢薬が揃う。古くからの製丸機を使った丸薬づくりの実演や体験を通じ、薬都・富山の確かな知恵と誠実な商いの心をこれからも身近に感じ続けたい。',
      surprise:
        '二階では薬膳の知恵を活かした食事処も営まれており、薬を売るだけでなく日々の健康に寄り添ってきた富山の暮らしの知恵に出会えます。',
      hook: '薬都の歴史に触れたら、北西へ歩いて富山城址公園で旅を結ぼう。',
      f7_fragment: '越中反魂丹を伝える老舗和漢薬店、昔ながらの丸薬づくり体験も人気。',
      f7_full:
        '「池田屋安兵衛商店」で伝統の和漢薬と丸薬づくりの文化に触れ、越中薬売りの知恵を感じた。',
      image_prompt:
        'Traditional Japanese apothecary shop illustration of Ikedaya Yasubei Shoten in Toyama, dark wooden lattice facade, rows of vintage medicine drawers and traditional hanging shop curtain, warm daylight, no text, no letters.',
    },
    {
      name: '富山城址公園',
      spot_type: '見どころ',
      description:
        '前田家ゆかりの富山城跡を整備した公園。お堀越しに石垣と天守を望み、天守内の郷土博物館で城の歴史を学べる。公園常時開放（博物館9:00〜17:00、大人210円）。',
      address: '富山県富山市本丸1-62',
      prefecture: '富山県',
      municipality: '富山市',
      lat: 36.693002,
      lng: 137.211259,
      clue: '戦国期から江戸時代にかけて前田家ゆかりの居城として栄えた城跡「富山城址公園」で旅を締めくくろう（公園常時開放・郷土博物館9:00〜17:00、大人210円）。お堀の水面に映える重厚な石垣と天守は富山の歴史を象徴する風景で、天守内の富山市郷土博物館では城と城下町の歩みを紹介している。四季折々の木々が彩る美しい園内で、運河とガラスと薬都を巡った余韻をこれからも静かに結びたい。',
      surprise:
        '園内には明治期の豪商・佐藤家の美術コレクションを収蔵する佐藤記念美術館も建ち、城郭の歴史と芸術の余韻を同時に味わえます。',
      hook: '',
      f7_fragment: '水堀と石垣に囲まれた富山城の跡地、天守内の郷土博物館も併設。',
      f7_full:
        '「富山城址公園」で堀の水面に映る石垣と天守を仰ぎ見ながら、城下町・富山の旅を締めくくった。',
      image_prompt:
        'Scenic Japanese castle illustration of Toyama Castle Park, crisp white three-tiered castle keep perched atop moss-touched stone walls beside a calm moat with pine trees, soft late afternoon light, no text, no letters.',
    },
  ],
};
