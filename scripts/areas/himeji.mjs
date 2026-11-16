export default {
  slug: 'himeji',
  station_order: 637,
  station: '姫路',
  line: '山陽新幹線・JR山陽本線',
  area_name: '姫路・白鷺の城と城下町',
  prefecture: '兵庫県',
  municipality: '姫路市',
  category: '世界遺産と城下町',
  budget_tier: 2,
  tags: ['兵庫県', '姫路市', '姫路駅', '姫路城', '好古園'],
  style_genre: 'ukiyoe_woodblock',
  title: '姫路・白鷺の城と城下町の老舗を歩く',
  description:
    '世界文化遺産・姫路城への表玄関であるJR姫路駅から、姫路名物・回転焼きの「御座候 山陽店」と老舗「はまもとコーヒー」、池泉庭園が美しい「好古園」、白亜の国宝天守がそびえる「姫路城」、古民家カフェ「パンとエスプレッソと姫路城」を巡る散策路。',
  eyecatch_prompt:
    'Modern shin-hanga woodblock print illustration of Himeji castle town showing the gleaming white Himeji Castle keep soaring above pine trees, tranquil Koko-en Japanese garden pond, traditional imagawayaki sweet stall, classic kissaten coffee house and timber machiya bakery cafe, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '白亜の国宝天守と城下町の温かな名物が繋がる姫路を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「はまもとコーヒー」のカウンターで、姫路名物アーモンドトーストと珈琲を味わった瞬間',
      subtext:
        'みゆき通り商店街に佇む昭和の老舗喫茶で、香ばしいアーモンドバターの香りに包まれた。',
      badge: {
        code: 'himeji_hamamoto',
        name_ja: '姫路みゆき通り・はまもと珈琲を嗜みし者',
        subtitle_en: 'Guest of Hamamoto Coffee',
        description:
          'はまもとコーヒーを訪ね、サイフォン珈琲と姫路名物アーモンドトーストを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting thick golden Japanese toast spread with roasted almond butter beside a classic siphon coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「好古園」の御屋敷の庭で、姫路城を借景にした九つの日本庭園を歩いた瞬間',
      subtext:
        '築地塀と清らかな池泉が織りなす江戸の風情が、城下町散策の心を静かに整えてくれた。',
      badge: {
        code: 'himeji_kokoen',
        name_ja: '姫路・好古園の九つの庭を巡りし者',
        subtitle_en: 'Walker of Koko-en Garden',
        description:
          '好古園を訪ね、姫路城西御屋敷跡に広がる九つの趣異なる日本庭園を散策した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a serene Japanese garden pond with stepping stones, red maple leaves and an earthen plaster wall, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「姫路城」の大手門をくぐり、青空に羽ばたくような白亜の大天守を見上げた瞬間',
      subtext:
        '四百年以上戦火を免れて現存する白鷺城の威容と木組みの美しさに、胸が震えた。',
      badge: {
        code: 'himeji_castle',
        name_ja: '白鷺城・国宝姫路城を仰ぎし者',
        subtitle_en: 'Admirer of Himeji Castle',
        description:
          '世界文化遺産・国宝「姫路城」を訪ね、優美な白亜の連立式天守を仰ぎ見た証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the soaring white-plastered multi-tiered keep of Himeji Castle framed by pine boughs and blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「パンとエスプレッソと姫路城」の古民家で、城下町の余韻に浸り珈琲を飲んだ瞬間',
      subtext:
        '築百年を超える町家の温もりと焼きたてパンの香りが、充実の一日を優しく結んだ。',
      badge: {
        code: 'himeji_espresso',
        name_ja: '姫路城北・古民家カフェに寛ぎし者',
        subtitle_en: 'Patron of Himeji Bakery Cafe',
        description:
          'パンとエスプレッソと姫路城を訪ね、城下町の古民家空間で焼きたてパンと珈琲を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a crusty golden cube loaf of bread beside an espresso latte cup on an aged timber machiya table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'himeji_complete',
    name_ja: '姫路・白鷺の城と城下町を巡る旅人',
    subtitle_en: 'Explorer of Himeji Town',
    description:
      '御座候 山陽店からはまもとコーヒー、好古園、姫路城、パンとエスプレッソと姫路城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the white keep of Himeji Castle, a traditional almond toast breakfast and a serene garden bridge, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '御座候 山陽店',
      spot_type: '買い物',
      description:
        '姫路発祥の名物回転焼き（今川焼）「御座候」の駅前店舗。職人が手早く焼き上げる赤あん・白あんの焼き立てが地元の人々にも愛される。営業時間10:00〜19:30（山陽百貨店準拠）。',
      address: '兵庫県姫路市南町1',
      prefecture: '兵庫県',
      municipality: '姫路市',
      lat: 34.82828,
      lng: 134.690019,
      clue: 'JR姫路駅の中央口を出たら、まずは駅前に建つ山陽百貨店地下の「御座候 山陽店」へ立ち寄ろう（10:00〜19:30）。姫路が誇る名物・回転焼きの「御座候」を職人が見事な手さばきで次々と焼き上げる名店で、北海道十勝産小豆を使った「赤あん」と上品な甘さの「白あん」が長年大人気だ。焼き立てのほのかな温もりを手にしながら、白鷺城へと続く姫路の街歩きをこれからも軽やかに始めたい。',
      surprise:
        '目の前の銅板の上で職人がリズミカルに生地を返し、あっという間にきつね色の御座候を仕上げていく光景は見飽きることがない。姫路の人々にとって日常のおやつであり誇りでもある素朴な甘味に触れることで、城下町への親しみが一気に深まる。',
      hook: '駅前の甘味に触れたら、みゆき通り商店街を北北東へ徒歩7分のはまもとコーヒーへ向かおう。',
      f7_fragment: '姫路発祥の名物・回転焼きを職人が手早く焼き上げる、駅前の定番名店。',
      f7_full: '駅前の「御座候 山陽店」で姫路発祥の回転焼きの香ばしさに触れ、城下町の活気ある散策を心地よく始めた。',
      image_prompt:
        'Traditional Japanese sweets counter displaying golden round gozasoro imagawayaki cakes baking on a hot copper griddle, no text, no people.',
    },
    {
      name: 'はまもとコーヒー',
      spot_type: '休憩',
      description:
        'みゆき通り商店街で長く愛されるサイフォン珈琲の老舗喫茶店。姫路名物の「アーモンドトースト」や季節のコーヒーが評判。営業時間7:00〜17:00、木曜定休。',
      address: '兵庫県姫路市二階町49',
      prefecture: '兵庫県',
      municipality: '姫路市',
      lat: 34.831434,
      lng: 134.692468,
      clue: '御座候からみゆき通り商店街を北北東へ徒歩7分、香ばしい珈琲の香りが漂う「はまもとコーヒー」へ入ろう（7:00〜17:00、木曜休）。昭和の面影を色濃く残す落ち着いた店内で、姫路の喫茶文化を象徴する名物「アーモンドトースト」と丁寧に淹れたサイフォン珈琲を味わえる。城へ向かう賑やかな商店街の途中で、香ばしいアーモンドバターの風味に癒やされながら午後の計画をじっくり整えたい。',
      surprise:
        '厚切りの食パンにたっぷりと塗られたアーモンドバターがこんがり焼かれ、香ばしい粒の食感と優しい甘みがサイフォン珈琲と見事に調和している。長年通う地元の常連客と旅人が肩を並べて寛ぐ空間に、姫路ならではの豊かな喫茶文化の厚みを感じる。',
      hook: '珈琲で整えたら、北北西へ徒歩11分の姫路城西御屋敷跡庭園 好古園へ向かおう。',
      f7_fragment: 'みゆき通り商店街で名物アーモンドトーストを味わう、老舗純喫茶。',
      f7_full: '商店街の老舗「はまもとコーヒー」で名物アーモンドトーストと珈琲を味わい、姫路の奥深い喫茶文化に触れた。',
      image_prompt:
        'Classic Japanese Showa-era coffee shop counter with glowing glass siphons, dark wood trim, thick toasted almond-butter bread and porcelain coffee cup, no text, no people.',
    },
    {
      name: '好古園（姫路城西御屋敷跡庭園）',
      spot_type: '見どころ',
      description:
        '姫路城西御屋敷跡の発掘調査をもとに造営された池泉式の日本庭園群。趣の異なる9つの庭園が連なり、四季折々の花木や茶室「双樹庵」が楽しめる。9:00〜17:00（入園16:30まで、12/29・30休）、大人310円。',
      address: '兵庫県姫路市本町68',
      prefecture: '兵庫県',
      municipality: '姫路市',
      lat: 34.837086,
      lng: 134.690402,
      clue: 'はまもとコーヒーから北北西へ徒歩11分、「好古園」へ足を踏み入れよう（9:00〜17:00、310円）。姫路城を借景にした九つの日本庭園で四季の美に触れたい。',
      surprise:
        '江戸時代の屋敷割りを活かした築地塀や渡り廊下を歩くたびに、滝の流れる御屋敷の庭や竹林の庭など異なる景色が次々と現れるのが楽しい。都会の喧騒を忘れさせてくれる清らかな水音と鮮やかな緑が、この後に控える姫路城への期待を一層高めてくれる。',
      hook: '名園を出たら、北東へ徒歩5分の国宝・姫路城の大手門へ向かおう。',
      f7_fragment: '姫路城を借景に九つの庭園が連なる、西御屋敷跡の優美な日本庭園。',
      f7_full: '「好古園」の築地塀と清らかな池泉庭園を歩き、姫路城を借景にした四季の美と静謐な空間を堪能した。',
      image_prompt:
        'Serene Japanese landscape garden of Koko-en with earthen plaster wall, clear koi pond, arched wooden bridge and maple trees, no text, no people.',
    },
    {
      name: '姫路城',
      spot_type: '見どころ',
      description:
        '1993年に日本初の世界文化遺産に登録された国宝の城郭。慶長14年（1609年）築造の白亜の連立式天守が現存し、優美な姿から「白鷺城」と呼ばれる。9:00〜17:00（入城16:00まで）、一般2500円（市民1000円）。',
      address: '兵庫県姫路市本町68',
      prefecture: '兵庫県',
      municipality: '姫路市',
      lat: 34.839168,
      lng: 134.692974,
      clue: '好古園から北東へ徒歩5分、世界文化遺産・国宝「姫路城」の堂々たる大手門をくぐろう（9:00〜17:00・入城16:00まで、一般2500円）。シラサギが羽を広げたような優美な白亜の連立式天守は、四百年以上の時を経てなお当時の木造建築の姿をそのまま留めている。幾重にも巡らされた防御の仕掛けや、最上階から見渡す城下町の眺望を全身で味わい、日本の名城の粋にこれからも深く触れたい。',
      surprise:
        '三の丸広場から仰ぎ見る白漆喰の輝きと、天守内部に一歩足を踏み入れた瞬間に広がる巨大な東大柱・西大柱の迫力には何度訪れても圧倒される。美しさと堅固さを極めた城郭の造形美が、江戸から現代へと続く日本の建築技術の頂点を静かに物語っている。',
      hook: '天守の余韻を胸に、西へ徒歩6分のパンとエスプレッソと姫路城で旅を結ぼう。',
      f7_fragment: '白鷺城の名で親しまれる日本初の世界文化遺産、白亜の国宝連立式天守。',
      f7_full: '国宝「姫路城」の白亜の大天守を仰ぎ、四百年の歴史を刻む城郭の優美さと迫力を全身で体感した。',
      image_prompt:
        'Majestic white-plastered multi-tiered Himeji Castle keep soaring above stone ramparts and green pine trees under clear blue sky, no text, no people.',
    },
    {
      name: 'パンとエスプレッソと姫路城',
      spot_type: '休憩',
      description:
        '姫路城の北西エリアに佇む築100年超の古民家を再生したベーカリーカフェ。看板の食パン「ムー」や城下町らしい和洋の軽食、エスプレッソを楽しめる。8:00〜18:00、不定休。',
      address: '兵庫県姫路市材木町65',
      prefecture: '兵庫県',
      municipality: '姫路市',
      lat: 34.838776,
      lng: 134.688854,
      clue: '姫路城から西へ徒歩6分、城下町の風情が残る材木町の「パンとエスプレッソと姫路城」で散策を締めくくろう（8:00〜18:00、不定休）。築百年を超える古民家の梁や土間を活かした温もりある落ち着いた空間で、人気の食パン「ムー」をはじめとした焼きたてパンと香り高いエスプレッソを楽しめる。名城と名園を巡った充実の一日を、焼きたての香りに包まれながらこれからも穏やかに結びたい。',
      surprise:
        '姫路城の表通りから少し離れた静かな町家エリアに、歴史ある古民家とモダンなベーカリーが見事に溶け込んでいるのが素敵だ。古い木組みの天井の下で味わうこだわりの珈琲とパンが、城下町・姫路の新しい魅力と心地よい余韻をそっと届けてくれる。',
      hook: '',
      f7_fragment: '姫路城北西の築百年超の古民家で焼きたてパンを味わう、城下町のカフェ。',
      f7_full: '古民家カフェ「パンとエスプレッソと姫路城」で焼きたての香りと珈琲を味わい、白鷺の城を巡る姫路の旅を結んだ。',
      image_prompt:
        'Charming renovated century-old Japanese timber machiya bakery cafe interior with exposed wooden beams, fresh golden cube bread loaf and espresso latte cup, no text, no people.',
    },
  ],
};
