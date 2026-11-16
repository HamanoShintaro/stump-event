export default {
  slug: 'sakaide',
  station_order: 628,
  station: '坂出',
  line: 'JR予讃線・瀬戸大橋線',
  area_name: '坂出・塩と醤油と讃岐うどん',
  prefecture: '香川県',
  municipality: '坂出市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['香川県', '坂出市', '坂出駅', '讃岐うどん', '鎌田醤油'],
  style_genre: 'pictorial_isometric_map',
  title: '塩のまち坂出・讃岐うどんと名園を歩く',
  description:
    '瀬戸大橋の玄関口・JR坂出駅から日本庭園「香風園」と登録有形文化財の「鎌田共済会郷土博物館」を経て、老舗「鎌田醤油」直営のカフェと本場の讃岐うどん店、そして戦後建築の傑作「坂出人工土地」を巡る散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Sakaide city in Kagawa showing Sakaide railway station, serene Japanese garden pond with pines, historic 1920s concrete museum, soy sauce brewery cafe, bustling Sanuki udon shop and modernist elevated concrete plaza architecture, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '塩田の歴史と醤油の香り、そして名園と讃岐うどんが繋がる坂出を歩いたあと、誰かに話したい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「香風園」の池泉庭園で、讃岐富士を望む緑と静かな池を眺めた瞬間',
      subtext:
        '駅からすぐの街中に広がる歴史ある日本庭園の静けさに、旅の始まりから癒やされた。',
      badge: {
        code: 'sakaide_kofuen',
        name_ja: '坂出・香風園の池畔を歩みし者',
        subtitle_en: 'Stroller of Kofuen Garden',
        description:
          '香風園を訪ね、池泉式日本庭園と緑豊かな芝生広場を散策した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a tranquil Japanese garden pond with stone lantern, arched bridge and pruned pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「鎌田共済会郷土博物館」のレトロな建物で、坂出の塩田開発の歴史を知った瞬間',
      subtext:
        '国の登録有形文化財の建築と貴重な資料が、塩のまち・坂出の歩みを物語っていた。',
      badge: {
        code: 'sakaide_museum',
        name_ja: '塩のまち・鎌田郷土博物館を知る者',
        subtitle_en: 'Explorer of Sakaide History',
        description:
          '鎌田共済会郷土博物館を訪ね、国の登録有形文化財の建物と塩田の歴史に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an arched vintage 1920s stone and concrete museum facade framed by green trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「本町一丁目カフェ（鎌田醤油直営）」で、だし醤油スイーツや玉子かけご飯を味わった瞬間',
      subtext:
        '寛政創業の醤油蔵が提案する新しい食の楽しみと保護猫たちの空間に心が和んだ。',
      badge: {
        code: 'sakaide_kamada_cafe',
        name_ja: '坂出・だし醤油の茶房を知る者',
        subtitle_en: 'Guest of Kamada Soy Cafe',
        description:
          '本町一丁目カフェを訪ね、老舗・鎌田醤油のだし醤油を使ったメニューを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a bowl of fluffy golden tamago-kake-gohan rice beside a small ceramic soy sauce pourer, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「讃岐うどん 桃山亭 坂出店」で、コシのある麺と出汁の旨みを存分に味わった瞬間',
      subtext:
        '本場・香川ならではの活気あるセルフうどんの美味しさに、お腹も心も満たされた。',
      badge: {
        code: 'sakaide_momoyamatei',
        name_ja: '坂出・本場の讃岐うどんを味わいし者',
        subtitle_en: 'Taster of Sakaide Udon',
        description:
          '讃岐うどん 桃山亭 坂出店を訪ね、本場・香川の讃岐うどんの旨みを堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming ceramic bowl of thick glossy Sanuki udon noodles with tempura and chopped green onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sakaide_complete',
    name_ja: '塩のまち坂出・名園と讃岐うどんを巡る旅人',
    subtitle_en: 'Walker of Sakaide Town',
    description:
      '香風園から鎌田共済会郷土博物館、本町一丁目カフェ、桃山亭 坂出店、坂出人工土地までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a tranquil Japanese garden pond, a steaming bowl of Sanuki udon and a traditional soy sauce bottle, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '香風園',
      spot_type: '見どころ',
      description:
        'JR坂出駅近くに広がる歴史ある庭園。池泉式の日本庭園と、緑の芝生が広がる洋風庭園が調和し、四季折々の自然を楽しめる。8:30〜18:00（7〜8月は20:00まで）、庭園は無休（園内施設は月・祝翌日休）、無料。',
      address: '香川県坂出市本町1-3489-2',
      prefecture: '香川県',
      municipality: '坂出市',
      lat: 34.313381,
      lng: 133.852647,
      clue: '瀬戸大橋を渡ってJR坂出駅に降り立ったら、まずは駅から西へ歩いてすぐの「香風園」へ足を踏み入れよう（8:30〜18:00・夏季20:00まで、月曜休・無料）。かつて地元実業家の別邸だった敷地を活かした歴史ある公園で、池の周りを巡る日本庭園と開放的な芝生の洋風庭園が見事に調和している。清々しい緑と池の水面を眺めながら、塩のまち・坂出の穏やかな歩みをここから元気に始めたい。',
      surprise:
        '市街地のすぐそばにありながら、一歩園内に入ると手入れの行き届いた松や池の静けさに包まれ、まるで別世界に迷い込んだような心地よさがある。季節ごとに表情を変える木々と穏やかな水鏡が、旅の始まりを贅沢に演出してくれる素敵な名園だ。',
      hook: '庭園を散策したら、西へ徒歩1分の鎌田共済会郷土博物館へ向かおう。',
      f7_fragment: '和と洋の庭園が調和し四季の自然が息づく、坂出駅そばの素敵な名園。',
      f7_full: '駅近くの「香風園」で池泉式の日本庭園と緑の芝生を歩き、穏やかな自然の中で坂出の散策を心地よくゆっくり始めた。',
      image_prompt:
        'Tranquil Japanese landscape garden of Kofuen in Kagawa with sculpted pine trees, calm reflective pond, stone lantern and sunlit green lawn, no text, no people.',
    },
    {
      name: '鎌田共済会郷土博物館',
      spot_type: '見どころ',
      description:
        '百余年前（1922年）建築のレトロな鉄筋コンクリート造で国の登録有形文化財に指定される博物館。坂出の塩田開発の歴史や重要文化財の資料を無料で展示。9:30〜16:30、月・祝休、無料。',
      address: '香川県坂出市本町1-1-24',
      prefecture: '香川県',
      municipality: '坂出市',
      lat: 34.313339,
      lng: 133.851996,
      clue: '香風園から西へ徒歩1分、重厚で優美な洋風建築が目を引く「鎌田共済会郷土博物館」へ入ろう（9:30〜16:30、月・祝休・無料）。百余年前の大正時代に建てられた国の登録有形文化財で、内部には日本一の塩田のまちとして栄えた坂出の製塩史や郷土の偉人・久米通賢に関する貴重な資料が展示されている。レトロな館内の空気を味わいながら、この土地の豊かな産業と文化の礎をじっくりと深く学びたい。',
      surprise:
        '百年以上も前に建てられた鉄筋コンクリート建築の趣ある意匠そのものが見応え抜群で、無料で公開されていることに驚かされる。かつて海を埋め立てて塩田を拓いた先人たちの情熱に触れることで、これから歩く坂出の街並みが一層立体的に見えてくる。',
      hook: '博物館を出たら、東へ徒歩2分の本町一丁目カフェ（鎌田醤油直営）へ向かおう。',
      f7_fragment: '登録有形文化財の洋風建物で塩田の歴史を伝える、無料の郷土館。',
      f7_full: '登録有形文化財「鎌田共済会郷土博物館」でレトロな建築美と坂出の塩田開発の歴史に触れ、土地の歩みをより深く学んだ。',
      image_prompt:
        'Historic 1920s neoclassical concrete museum building of Kamada Kyosaikai Museum with arched windows and green trees in Sakaide, no text, no people.',
    },
    {
      name: '本町一丁目カフェ（鎌田醤油直営）',
      spot_type: '休憩',
      description:
        '寛政元年（1789年）創業の老舗・鎌田醤油が営む直営カフェ。だし醤油を使った玉子かけご飯や醤油スイーツが人気で、ガラス越しに保護猫を眺められる。11:00〜16:00、日・月・祝休（キャッシュレス決済のみ）。',
      address: '香川県坂出市本町1-6-35',
      prefecture: '香川県',
      municipality: '坂出市',
      lat: 34.313929,
      lng: 133.853069,
      clue: '博物館から東へ徒歩2分、老舗「鎌田醤油」の敷地内にある「本町一丁目カフェ」でひと息つこう（11:00〜16:00、日・月・祝休）。看板のだし醤油を使ったスイーツや玉子かけご飯で温かな時間を過ごしたい。',
      surprise:
        '全国の食卓で愛されるだし醤油の老舗が、本社の隣でこんなに洗練された明るいカフェを開いているのが楽しい。醤油を使ったムースやアイスなどの意外な美味しさに感心しつつ、併設の保護猫スペースを眺めていると心までほっこりと癒やされる素敵な場所だ。',
      hook: 'カフェを後にしたら、北北西へ徒歩8分の讃岐うどん 桃山亭 坂出店で本場のうどんを味わおう。',
      f7_fragment: '寛政創業の鎌田醤油が営む、だし醤油グルメと保護猫に出会うカフェ。',
      f7_full: '老舗・鎌田醤油直営の「本町一丁目カフェ」でだし醤油の風味豊かなメニューを味わい、坂出ならではの寛ぎの時間を楽しんだ。',
      image_prompt:
        'Bright modern Japanese soy-sauce brewery cafe interior with wooden table, fluffy golden egg rice bowl, soy sauce bottle and ice cream dessert, no text, no people.',
    },
    {
      name: '讃岐うどん 桃山亭 坂出店',
      spot_type: '食事',
      description:
        '坂出駅から徒歩圏内で本場・香川の味を手軽に楽しめる人気のセルフ讃岐うどん店。コシのある麺と旨み豊かな出汁、揚げたて天ぷらが地元客にも親しまれる。営業時間11:00〜21:00、年中無休。',
      address: '香川県坂出市本町3-5-16',
      prefecture: '香川県',
      municipality: '坂出市',
      lat: 34.317894,
      lng: 133.850825,
      clue: 'カフェから北北西へ徒歩8分、本町の通りに佇む「讃岐うどん 桃山亭 坂出店」で本場のうどんを味わおう（11:00〜21:00、年中無休）。香川県ならではのセルフスタイルの店内で、弾力のあるもちもちの麺と風味豊かな出汁、お好みの揚げたての旬の天ぷらを自分で選ぶ時間が楽しい。温かなかけうどんでも冷たいぶっかけうどんでも、一口啜ればうどん県・香川に来た喜びが身体じゅうに心から広がる。',
      surprise:
        '観光仕様ではない普段着の讃岐うどん店の活気と、それでいて妥協のない麺のコシと出汁の美味しさに心から満たされる。地元のお客さんと肩を並べて手早く美味しくいただくひとときは、香川の街歩きに欠かせない最高のご馳走と誰もがきっと感じるだろう。',
      hook: 'うどんで満たされたら、東南東へ徒歩9分の坂出人工土地を見上げて旅を結ぼう。',
      f7_fragment: '本町の通りで地元客とともに味わう、コシと出汁自慢の讃岐うどん。',
      f7_full: '「讃岐うどん 桃山亭 坂出店」でコシのある麺と香り豊かな出汁を味わい、うどん県・坂出の豊かな日常の食に触れた。',
      image_prompt:
        'Lively Japanese self-service Sanuki udon diner table with a steaming ceramic bowl of thick glossy udon noodles, crispy vegetable tempura and green scallions, no text, no people.',
    },
    {
      name: '坂出人工土地',
      spot_type: '見どころ',
      description:
        '建築家・大高正人氏の設計により建設された日本を代表するメタボリズム建築群（市営京町団地）。一階の商店街の上に人工地盤が広がる空中都市の構造が特徴。屋外空間のみ散策可（居住者への配慮要）。',
      address: '香川県坂出市京町2-1',
      prefecture: '香川県',
      municipality: '坂出市',
      lat: 34.315822,
      lng: 133.856514,
      clue: '桃山亭から東南東へ徒歩9分、建築好きなら一度は訪れたい戦後日本の名建築「坂出人工土地」を歩いて旅を結ぼう（屋外空間のみ静かに見学可）。建築家・大高正人氏が手がけたメタボリズム建築の象徴で、一階に商店や通路を収め、その頭上の巨大な人工地盤の上に市民の住宅と広場を築いた先駆的な立体都市だ。今も暮らしが息づくこの街のユニークな風景を静かに見上げ、坂出の歩みをこれからも結びたい。',
      surprise:
        '歴史ある日本庭園や洋風博物館から、戦後の大胆な空中都市計画までが駅前の徒歩圏内にぎゅっと共存している坂出の街の面白さに驚かされる。半世紀以上前に描かれた未来の暮らしの風景が、今も日常の街角として息づいている姿がなんとも印象的な街並みだ。',
      hook: '',
      f7_fragment: '人工地盤の上に暮らしと広場を築いた、日本建築史に残る空中都市。',
      f7_full: '名建築「坂出人工土地」の独創的な立体空間を静かに見上げ、歴史と建築とうどんが交差する坂出の散策を締めくくった。',
      image_prompt:
        'Iconic modernist Japanese elevated concrete plaza architecture of Sakaide Artificial Ground with geometric columns, stairways and green trees under blue sky, no text, no people.',
    },
  ],
};
