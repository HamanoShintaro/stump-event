export default {
  slug: 'kagoshimachuo',
  station_order: 649,
  station: '鹿児島中央',
  line: 'JR九州新幹線',
  area_name: '鹿児島中央・維新の英傑と南国の城下町',
  prefecture: '鹿児島県',
  municipality: '鹿児島市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['鹿児島県', '鹿児島市', '鹿児島中央駅', '西郷隆盛', '白熊'],
  style_genre: 'ink_wash_sumi_gold',
  title: '鹿児島中央・維新の史跡と白熊を歩く',
  description:
    'JR鹿児島中央駅から、甲突川沿いの「維新ふるさと館」と「大久保利通銅像」、南国の名物かき氷「天文館むじゃき 本店」、島津斉彬公を祀る「照國神社」、城山を背に立つ「西郷隆盛銅像」を巡る散策路。',
  eyecatch_prompt:
    'Sumi-e ink wash and gold leaf accent illustration of Kagoshima castle town showing the bronze statue of Saigo Takamori standing before lush Mount Shiroyama, Sakurajima volcano silhouette across Kinko Bay, Kotsuki River promenade, grand torii of Terukuni Shrine, and classic shaved ice dessert, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '明治維新を動かした英傑たちの足跡と南国の甘い名物が繋がる鹿児島を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「維新ふるさと館」の甲突川沿いの遊歩道を歩き、幕末の薩摩の熱気に触れた瞬間',
      subtext:
        '西郷隆盛や大久保利通が生まれ育った加治屋町の空気が、近代日本の夜明けを身近に感じさせた。',
      badge: {
        code: 'kagoshima_ishin',
        name_ja: '鹿児島・維新ふるさと館で薩摩の志に触れし者',
        subtitle_en: 'Visitor of Ishin Museum',
        description:
          '加治屋町の維新ふるさと館を訪ね、幕末から明治維新へ駆け抜けた薩摩の英傑たちの歴史を辿った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a riverside stone monument and historic Meiji-era lantern beside the Kotsuki River with trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「天文館むじゃき 本店」で、練乳たっぷりのフルーツかき氷「元祖白熊」を味わった瞬間',
      subtext:
        '南国の賑やかなアーケード街で頬張った真っ白な氷の甘さが、歴史歩きの足を軽やかにしてくれた。',
      badge: {
        code: 'kagoshima_mujyaki',
        name_ja: '鹿児島・天文館むじゃきで元祖白熊を嗜みし者',
        subtitle_en: 'Taster of Shirokuma Ice',
        description:
          '天文館むじゃき 本店を訪ね、鹿児島名物の元祖かき氷「白熊」を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a tall fluffy shaved ice dessert topped with colorful fruits, cherries and sweet condensed milk, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「照國神社」の大きな鳥居をくぐり、島津斉彬公を祀る社殿前で手を合わせた瞬間',
      subtext:
        '集成館事業を興して近代化を先導した名君への敬意が、南国の光あふれる境内に満ちていた。',
      badge: {
        code: 'kagoshima_terukuni',
        name_ja: '鹿児島・名君島津斉彬公の照國神社を詣でし者',
        subtitle_en: 'Worshipper of Terukuni Shrine',
        description:
          '照國神社を訪ね、薩摩藩主・島津斉彬公を祀る鹿児島屈指の古社へ参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a grand Japanese Shinto shrine gate and dark wood sanctuary framed by southern camphor trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '城山の緑を背に堂々と立つ「西郷隆盛銅像」を仰ぎ見ながら、鹿児島の旅を結んだ瞬間',
      subtext:
        '高さ約八メートルの威風堂々たる姿が、桜島を望む街の歴史を誇り高く物語っていた。',
      badge: {
        code: 'kagoshima_saigo',
        name_ja: '鹿児島・城山を背に立つ西郷銅像を仰ぎし者',
        subtitle_en: 'Admirer of Saigo Statue',
        description:
          '城山麓の西郷隆盛銅像を訪ね、維新の英雄が眠る鹿児島の旅を締めくくった証。',
        rarity: 5,
        image_prompt:
          'A circular emblem showing the heroic bronze statue of Saigo Takamori standing tall before forested Mount Shiroyama, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kagoshimachuo_complete',
    name_ja: '鹿児島中央・維新の英雄と白熊を巡る旅人',
    subtitle_en: 'Walker of Kagoshima',
    description:
      '維新ふるさと館から大久保利通銅像、天文館むじゃき 本店、照國神社、西郷隆盛銅像までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the bronze statue of Saigo Takamori, a volcanic island silhouette across a bay and a shaved ice dessert bowl, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '維新ふるさと館',
      spot_type: '見どころ',
      description:
        '西郷隆盛や大久保利通らが育った甲突川沿いの加治屋町に建つ歴史博物館。ジオラマや等身大ロボットで明治維新を体感できる。9:00〜17:00（最終入館16:30）、年中無休（※令和8年11月24日〜令和9年1月22日はリニューアル休館）。',
      address: '鹿児島県鹿児島市加治屋町23-1',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.584639,
      lng: 130.547792,
      clue: '鹿児島中央駅から甲突川に向かって東へ徒歩約8分、加治屋町に建つ「維新ふるさと館」から歴史歩きを始めよう（9:00〜17:00、※11/24〜1/22休館）。西郷隆盛や大久保利通、東郷平八郎ら多くの偉人が育った甲突川左岸に位置し、ジオラマや等身大ロボットによる維新体感ホールで薩摩の歴史を臨場感たっぷりに学べる。近代日本の夜明けにこれからもずっと深く静かに熱く豊かに思いを馳せたい。',
      surprise:
        '加治屋町はわずか数百メートル四方の中に西郷家や大久保家などが密集しており、「維新の英傑を生んだ郷中教育」の舞台として今も石碑が点在する。',
      hook: '薩摩の歴史を学んだら、甲突川左岸緑地を北西へ歩いて大久保利通銅像を訪ねよう。',
      f7_fragment: '西郷・大久保らが生まれた加治屋町に建つ、明治維新の体感歴史館。',
      f7_full:
        '甲突川沿いの「維新ふるさと館」で薩摩の英傑たちが育った加治屋町の熱気に触れ、歴史散歩を始めた。',
      image_prompt:
        'Historic museum building along tree-lined Kotsuki River promenade in Kagoshima with stone bridge in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '大久保利通銅像',
      spot_type: '見どころ',
      description:
        '甲突川左岸緑地の高見橋たもとに立つ、明治政府の内務卿・大久保利通の没後百年を記念した銅像（本体約4.3m、台座含め総高約9.7m）。見学自由・無休・無料。',
      address: '鹿児島県鹿児島市西千石町1',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.586563,
      lng: 130.546107,
      clue: '甲突川左岸の緑地を北西へ歩き、高見橋のたもとに立つ「大久保利通銅像」を訪ねよう（見学自由・無料）。西郷隆盛の無二の親友であり、明治新政府の近代化を牽引した内務卿・大久保利通の没後百年に建てられた銅像だ。台座を含め総高さ約九・七メートルの凛々しい立ち姿を見上げれば、激動の時代を冷静に見据えた政治家の熱い覚悟と高い志がこれからもずっと心へ力強く深く豊かに確かに伝わってくる。',
      surprise:
        '制作を手掛けたのは、日本近代彫刻の重鎮として知られる鹿児島ゆかりの彫刻家・中村晋也氏だ。',
      hook: '銅像を仰いだら、東へ歩いて天文館の老舗・天文館むじゃき 本店で白熊を味わおう。',
      f7_fragment: '明治政府の近代化を牽引した、甲突川河畔に立つ大久保利通の銅像。',
      f7_full:
        '甲突川沿いの「大久保利通銅像」を見上げ、幼なじみの西郷とともに近代日本を切り拓いた功績に思いを馳せた。',
      image_prompt:
        'Tall bronze statue of Okubo Toshimichi standing in riverside green park beside Takami Bridge in Kagoshima in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '天文館むじゃき 本店',
      spot_type: '休憩',
      description:
        '鹿児島名物・元祖かき氷「白熊」の本店。ふんわり削った氷に自家製ミルク蜜とフルーツを盛り付けた白熊が人気。11:00〜19:00（白熊L.O.18:30）、不定休。',
      address: '鹿児島県鹿児島市千日町5-8',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.589238,
      lng: 130.555969,
      clue: '甲突川から東へ歩いて天文館へ入り、「天文館むじゃき 本店」に立ち寄ろう（11:00〜19:00）。練乳と色とりどりの果実たっぷりの元祖かき氷・白熊を味わいたい。',
      surprise:
        '考案された当初は白蜜と赤蜜をかけるだけだったが、フルーツの配置が白熊の目・鼻・口に見えたことから「白熊」と名付けられた。',
      hook: '涼やかな甘味で休んだら、北西へ歩いて格式高い照國神社へ参拝しよう。',
      f7_fragment: '秘伝のミルク蜜と色とりどりの果実がのる、元祖かき氷「白熊」の本店。',
      f7_full:
        '「天文館むじゃき 本店」で練乳たっぷりの元祖白熊を味わい、歴史歩きの合間に南国らしい涼やかな甘味を楽しんだ。',
      image_prompt:
        'Bustling Tenmonkan arcade corner and charming retro dessert parlor facade in Kagoshima with shaved ice display in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '照國神社',
      spot_type: '見どころ',
      description:
        '薩摩藩第11代藩主・島津斉彬公を御祭神とする鹿児島屈指の格式ある神社。境内自由・授与所9:00〜17:00、無休。',
      address: '鹿児島県鹿児島市照国町19-35',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.59463,
      lng: 130.550406,
      clue: '天文館のアーケードを北西へ抜け、薩摩藩第11代藩主・島津斉彬公を御祭神とする「照國神社」へ参拝しよう（授与所9:00〜17:00、無休）。集成館事業を興して日本の近代化を先導した名君を祀り、桜島を正面に望む鶴丸城跡のほど近くに鎮座する。大きな鳥居と楠の緑に包まれた厳かな社殿へ進み、南九州随一の格式ある古社でこれからもずっと心静かに深く温かく感謝を込めて手を合わせよう。',
      surprise:
        '社号の「照國」は、明治天皇より島津斉彬公へ贈られた神号「照国大明神」に由来し、境内の木々は島津家の紋所とともに格式を伝えている。',
      hook: 'お参りを終えたら、東へ歩いて城山麓の西郷隆盛銅像で旅を結ぼう。',
      f7_fragment: '名君・島津斉彬公を祀る、鶴丸城跡そばの格式高い照國神社。',
      f7_full:
        '「照國神社」の楠茂る境内へ進み、日本の近代化を先導した名君・島津斉彬公の御前に静かに参拝した。',
      image_prompt:
        'Grand torii gate and stately wooden sanctuary of Terukuni Shrine framed by southern camphor trees in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
    {
      name: '西郷隆盛銅像',
      spot_type: '見どころ',
      description:
        '城山の緑を背に陸軍大将の制服姿で立つ高さ約8mの銅像。忠犬ハチ公像を手掛けた彫刻家・安藤照が昭和12年（1937年）に完成させた。見学自由・無休・無料。',
      address: '鹿児島県鹿児島市城山町4-36',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.595268,
      lng: 130.553522,
      clue: '照國神社から東へ歩いてすぐ、城山の緑を背にして堂々と立つ「西郷隆盛銅像」で旅を締めくくろう（見学自由・無料）。日本初の陸軍大将の制服姿で立つ銅像は台座を含め高さ約八メートルにも及び、渋谷の忠犬ハチ公像を手掛けた彫刻家・安藤照が八年の歳月を費やして昭和十二年に完成させた名作だ。西郷さんの眼差しの先の雄大な桜島を望み、薩摩の旅をこれからも誇らしく美しく温かく確かに結ぼう。',
      surprise:
        '通りを挟んだ向かい側には銅像と並んで記念写真が撮れる撮影スポットが整備されており、市民や旅人から「西郷さん」と親しまれている。',
      hook: '',
      f7_fragment: '城山の緑を背に陸軍大将姿で立つ、高さ約八メートルの西郷さん銅像。',
      f7_full:
        '城山麓の「西郷隆盛銅像」を仰ぎ見ながら、維新の歴史と天文館の白熊を巡った鹿児島中央の旅を誇らしく結んだ。',
      image_prompt:
        'Heroic bronze statue of Saigo Takamori standing tall before lush Mount Shiroyama with golden dusk clouds and distant Sakurajima volcano in sumi-e ink wash and gold leaf style, no text, no letters.',
    },
  ],
};
