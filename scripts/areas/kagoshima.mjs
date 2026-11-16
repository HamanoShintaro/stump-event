export default {
  slug: 'kagoshima',
  station_order: 674,
  station: '鹿児島',
  line: 'JR日豊本線',
  area_name: '鹿児島・鶴丸城跡と桜島の絶景',
  prefecture: '鹿児島県',
  municipality: '鹿児島市',
  category: '歴史と街歩き',
  budget_tier: 3,
  tags: ['鹿児島県', '鹿児島市', '鹿児島駅', '桜島', '仙巌園'],
  style_genre: 'ghibli_impasto_gouache',
  title: '鹿児島・鶴丸城跡から城山と名勝仙巌園へ',
  description:
    'JR鹿児島駅から、薩摩の歴史を伝える焙煎珈琲「Blue Beans Roastery」、国内最大級の城門「鶴丸城跡（御楼門）」、仁王立ちの「西郷隆盛銅像」、桜島を一望する「城山展望台」、錦江湾を借景とする大名庭園「仙巌園」を巡る散策路。',
  eyecatch_prompt:
    'Lush painterly impasto gouache landscape illustration of Kagoshima City showing the majestic smoking Sakurajima volcano rising across bright blue Kinko Bay seen from the landscaped gardens of Sengan-en Villa, the massive reconstructed wooden Goromon Gate of Tsurumaru Castle with stone walls, and the green forested hill of Shiroyama, warm southern sunlight, no text, no letters, no numbers, no labels.',
  question: '薩摩の歴史が息づく城跡と城山、桜島を借景とする仙巌園を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「鶴丸城跡（御楼門）」の前に立ち、国内最大級の城門と石垣を仰ぎ見た瞬間',
      subtext:
        '約147年ぶりに蘇った堂々たる御楼門の姿に、薩摩藩七十七万石の気概を感じた。',
      badge: {
        code: 'kagoshima_tsurumaru',
        name_ja: '鹿児島・鶴丸城御楼門を仰ぎ見し者',
        subtitle_en: 'Visitor of Tsurumaru Castle Goromon',
        description:
          '鶴丸城跡（御楼門）を訪ね、復元された日本最大級の城門と石垣を仰ぎ見た証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting the grand reconstructed wooden Goromon castle gate flanked by massive volcanic stone walls and calm moat water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「西郷隆盛銅像」を見上げ、城山を背に仁王立ちする凛々しい姿に対面した瞬間',
      subtext:
        '故郷・鹿児島を見守り続ける郷土の英雄の眼差しに、幕末維新の志が重なった。',
      badge: {
        code: 'kagoshima_saigo',
        name_ja: '鹿児島・西郷どんの銅像に対面せし者',
        subtitle_en: 'Viewer of Saigo Takamori Statue',
        description:
          '西郷隆盛銅像を訪ね、城山を背景に立つ薩摩の英雄の凛々しい姿を見上げた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a dignified bronze statue standing on a stone pedestal framed by lush green southern trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「城山展望台」に立ち、錦江湾の向こうに噴煙を上げる桜島を一望した瞬間',
      subtext:
        '眼下に広がる鹿児島市街と雄大な桜島のパノラマが、旅の高揚感を一気に満たしてくれた。',
      badge: {
        code: 'kagoshima_shiroyama',
        name_ja: '鹿児島・城山から桜島を望みし者',
        subtitle_en: 'Viewer from Shiroyama Observatory',
        description:
          '城山展望台を訪ね、錦江湾に浮かぶ雄大な桜島と鹿児島市街を一望した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the conical smoking Sakurajima volcano rising across sparkling blue Kinko Bay framed by green camphor branches, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「仙巌園」の池泉庭園を歩き、桜島と錦江湾を丸ごと借景にした絶景に息を呑んだ瞬間',
      subtext:
        '島津家の美意識と近代化遺産の重厚さが溶け合う大名庭園が、鹿児島の旅を最高に飾ってくれた。',
      badge: {
        code: 'kagoshima_senganen',
        name_ja: '鹿児島・名勝仙巌園の絶景を愛でし者',
        subtitle_en: 'Visitor of Sengan-en Garden',
        description:
          '仙巌園を訪ね、桜島を借景とする島津家別邸の名勝庭園を散策した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting a traditional stone lantern and sculpted pine tree framing the distant smoking Sakurajima volcano across calm bay water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kagoshima_complete',
    name_ja: '鹿児島・薩摩の歴史と桜島を巡る旅人',
    subtitle_en: 'Walker of Kagoshima',
    description:
      'Blue Beans Roasteryから鶴丸城跡、西郷隆盛銅像、城山展望台、仙巌園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the Goromon Castle Gate, the bronze hero statue, and the smoking Sakurajima volcano across Kinko Bay, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'Blue Beans Roastery',
      spot_type: '休憩',
      description:
        'JR鹿児島駅から徒歩圏内の上竜尾町に佇む自家焙煎スペシャルティコーヒー店。丁寧なハンドドリップ珈琲と季節のスイーツが人気。9:00〜19:00（不定休あり）。',
      address: '鹿児島県鹿児島市上竜尾町4-21',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.605755,
      lng: 130.560726,
      clue: 'JR鹿児島駅から歩いてほど近い上竜尾町の「Blue Beans Roastery」で、まずは自家焙煎珈琲の一杯から旅を始めよう（9:00〜19:00・不定休）。住宅街に佇む温かな雰囲気のロースタリーで、厳選されたスペシャルティコーヒーや手作りのスイーツが旅人を優しく迎えてくれる。香り高い珈琲で朝の心をゆっくり整え、薩摩の歴史と桜島を巡る一日へこれからも軽やかに踏み出したい。',
      surprise:
        '店内で焙煎された豆の豊かな香りと落ち着いた空間は、城山や鶴丸城跡へ向かう前の穏やかなスタート地点として地元でも親しまれています。',
      hook: '珈琲で目覚めたら、南西の城山麓にある鶴丸城跡（御楼門）へ向かおう。',
      f7_fragment: '鹿児島駅近くの自家焙煎コーヒー店、香り高い一杯とスイーツが人気。',
      f7_full:
        '「Blue Beans Roastery」で香り高いスペシャルティ珈琲を味わい、鹿児島の旅を始めた。',
      image_prompt:
        'Warm inviting specialty coffee roastery illustration of Blue Beans Roastery in Kagoshima, sunlit wooden counter, pour-over coffee carafe, ceramic cup and sweet pastry in cozy neighborhood setting, no text, no letters.',
    },
    {
      name: '鶴丸城跡（御楼門）',
      spot_type: '見どころ',
      description:
        '島津家代々の居城であった鹿児島城（鶴丸城）跡。2020年に国内最大級の城門として約147年ぶりに復元された御楼門と石垣が圧巻。城跡・御楼門常時見学可（ライトアップ日没〜22:00）、無料。',
      address: '鹿児島県鹿児島市城山町7-2',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.59861,
      lng: 130.555204,
      clue: '島津家代々の居城であった鹿児島城の本丸跡「鶴丸城跡（御楼門）」を訪ねよう（城跡見学自由・無料）。明治の火災で失われたのち、2020年に国内最大級の城門として約147年ぶりに復元された高さ約20メートルの御楼門が堂々とそびえている。本丸跡の黎明館へ続く石橋と蓮が浮かぶ美しいお堀をゆっくり眺めながら、薩摩七十七万石の誇り高い気概をこれからも静かにしっかりと深く仰ぎ見たい。',
      surprise:
        '城の石垣のあちこちには幕末の西南戦争の弾痕が今も生々しく残されており、激動の明治維新の記憶を現代に伝えています。',
      hook: '御楼門を仰いだら、南南西へ歩いて西郷隆盛銅像に対面しよう。',
      f7_fragment: '2020年に復元された国内最大級の城門「御楼門」がそびえる島津家の居城跡。',
      f7_full:
        '「鶴丸城跡（御楼門）」の前に立ち、復元された国内最大級の城門と石垣の威容を仰いだ。',
      image_prompt:
        'Majestic Japanese castle gate illustration of Tsurumaru Castle Goromon in Kagoshima, massive dark timbered two-story gate atop volcanic stone walls beside a calm lotus moat, clear southern light, no text, no letters.',
    },
    {
      name: '西郷隆盛銅像',
      spot_type: '見どころ',
      description:
        '城山を背に、軍服姿で仁王立ちする高さ約8mの堂々たる銅像。鹿児島出身の彫刻家・安藤照によって昭和12年（1937年）に制作された。見学自由、無料。',
      address: '鹿児島県鹿児島市城山町4-36',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.595268,
      lng: 130.553522,
      clue: '城山を背にして仁王立ちする、高さ約8メートルの「西郷隆盛銅像」を見上げよう（見学自由・無料）。昭和12年に鹿児島出身の彫刻家・安藤照が手掛けた凛々しい姿が印象的だ。',
      surprise:
        '渋谷の忠犬ハチ公像を手掛けたことでも知られる安藤照が制作し、愛犬を連れた上野の像とは異なる陸軍大将の正装姿で街を見守っています。',
      hook: '西郷どんに挨拶したら、北西の遊歩道を登って城山展望台へ上がろう。',
      f7_fragment: '城山を背景に仁王立ちする高さ約8mの銅像、薩摩の英雄の象徴。',
      f7_full:
        '「西郷隆盛銅像」を見上げ、城山を背に立つ郷土の英雄の凛々しい姿に対面した。',
      image_prompt:
        'Dignified civic landmark illustration of the bronze Saigo Takamori statue in Kagoshima standing tall on a stone pedestal framed by lush green southern trees against forested Shiroyama hill, no text, no letters.',
    },
    {
      name: '城山展望台',
      spot_type: '見どころ',
      description:
        '標高107mの小高い山「城山」の山頂にある鹿児島屈指の展望スポット。眼下に鹿児島市街、錦江湾、そして雄大な桜島を一望できる。終日開放、無料。',
      address: '鹿児島県鹿児島市城山町22-13',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.596242,
      lng: 130.550046,
      clue: '標高107メートルの自然豊かな丘の頂に位置する「城山展望台」へ登ろう（終日開放・入場無料）。視界が開けた展望デッキからは、眼下に広がる鹿児島市街地と波静かな錦江湾、そしてその向こうに噴煙を上げる雄大な桜島を一望できる。西郷隆盛終焉の地として歴史にも名を残す森の静けさの中で、南国ならではの圧倒的な美しいパノラマをこれからも胸の奥にたっぷりとしっかりと深く心に焼き付けたい。',
      surprise:
        '城山には約600種もの亜熱帯性植物が自生しており、市街地のすぐそばでありながら都会の雑踏を忘れる自然遊歩道が整備されています。',
      hook: '桜島の大絶景を望んだら、北東の海沿いにある名勝・仙巌園で旅を結ぼう。',
      f7_fragment: '標高107mから鹿児島市街と錦江湾、雄大な桜島を一望できる絶景スポット。',
      f7_full:
        '「城山展望台」に立ち、錦江湾の向こうに噴煙を上げる雄大な桜島を一望した。',
      image_prompt:
        'Panoramic gouache landscape illustration from Shiroyama Observatory in Kagoshima, sweeping view over city rooftops and bright blue Kinko Bay toward the smoking conical Sakurajima volcano under sunlit clouds, no text, no letters.',
    },
    {
      name: '仙巌園',
      spot_type: '見どころ',
      description:
        '万治元年（1658年）に島津家19代・島津光久によって築かれた別邸と庭園。桜島を築山、錦江湾を池に見立てた雄大な借景庭園と世界文化遺産の反射炉跡がある。9:00〜17:00、大人1600円。',
      address: '鹿児島県鹿児島市吉野町9700-1',
      prefecture: '鹿児島県',
      municipality: '鹿児島市',
      lat: 31.617415,
      lng: 130.577197,
      clue: '万治元年に島津光久によって築かれた島津家別邸「仙巌園」で旅を締めくくろう（9:00〜17:00・大人1600円）。桜島を築山、錦江湾を池に見立てたスケールの大きな借景庭園は国の名勝に指定され、園内には日本の近代化を牽引した世界文化遺産の反射炉跡や薩摩切子の工房も並んでいる。雄大な自然美と薩摩の歴史が溶け合う庭園で、旅の余韻をこれからも誇らしく美しくしっかりと結びたい。',
      surprise:
        '園内の御殿では歴代藩主が暮らした部屋を見学でき、お庭を眺めながら名物の「両棒餅（ぢゃんぼもち）」を味わうのも定番の楽しみです。',
      hook: '',
      f7_fragment: '桜島と錦江湾を借景にした島津家別邸の名勝庭園、世界遺産エリアも併設。',
      f7_full:
        '「仙巌園」の庭園を歩き、桜島と錦江湾を借景にした雄大な絶景の中で旅を結んだ。',
      image_prompt:
        'Grand Japanese daimyo garden illustration of Sengan-en in Kagoshima, sculpted pine trees and stone lanterns framing calm bay water and the smoking Sakurajima volcano bathed in golden late afternoon sun, no text, no letters.',
    },
  ],
};
