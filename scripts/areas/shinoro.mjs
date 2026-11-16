export default {
  slug: 'shinoro',
  station_order: 910,
  station: '篠路',
  line: 'JR札沼線',
  area_name: '篠路・開拓の古社とアオサギの森',
  prefecture: '北海道',
  municipality: '札幌市北区',
  category: '開拓史跡と野鳥の森',
  budget_tier: 2,
  tags: ['北海道', '札幌市北区', '篠路駅', '篠路神社', 'アオサギ'],
  style_genre: 'ink_and_watercolor',
  title: '篠路・開拓の古社とアオサギの森を巡る散歩',
  description:
    '昭和九年開業の「JR篠路駅」から、安政二年創祀の札幌最古級「篠路神社」、荒井金助らの墓や記念保護樹木が残る「龍雲寺」、アオサギの集団営巣地「篠路五ノ戸の森緑地」、人気ベーカリー「DAD\'S BAKE」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Shinoro Sapporo from historic commuter railway station and 1855 Shinto shrine with weeping willow to historic temple ginkgo tree, lush heron-colony woodland park and inviting American-style neighborhood bakery, full bleed, no text, no letters.',
  question: '安政二年の古社や明治の寺院、アオサギが棲む森を巡る篠路の街歩きで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '安政二年創祀・札幌最古級の古社「篠路神社」',
      subtext: '荒井金助らが祀った長い歴史と、市指定無形文化財の篠路獅子舞の伝統に触れた。',
      badge: {
        code: 'shinoro_shrine',
        name_ja: '篠路・安政古社の参拝',
        subtitle_en: 'Shinoro 1855 Shrine Visitor',
        description: '安政二年創祀の札幌最古級「篠路神社」に参拝した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a historic wooden Shinto torii gate beside a graceful 150-year-old weeping willow tree, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '荒井金助の墓と樹齢百年超イチョウが残る「龍雲寺」',
      subtext: '明治五年創建の浄土宗寺院で、開拓功労者の墓碑と巨木イチョウに歴史を感じた。',
      badge: {
        code: 'shinoro_ryuunji',
        name_ja: '篠路・龍雲寺の開拓史',
        subtitle_en: 'Ryuunji Heritage Temple Visitor',
        description: '龍雲寺で開拓の記憶と樹齢百年超のイチョウに触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a tranquil wooden temple roof beneath a towering golden ginkgo tree, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '国内有数のアオサギ集団営巣地「篠路五ノ戸の森緑地」',
      subtext: '住宅街の中に約二百種の植物とアオサギのコロニーが息づく自然の豊かさに驚いた。',
      badge: {
        code: 'shinoro_heron',
        name_ja: '篠路・アオサギの森の散策',
        subtitle_en: 'Heron Colony Forest Walker',
        description: '篠路五ノ戸の森緑地でアオサギの棲む屋敷林を歩いた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting graceful grey herons perched among tall leafy northern woodland trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '素材の味わいを活かした地域人気ベーカリー「DAD\'S BAKE」',
      subtext: 'ショコラブレッドやねぎ味噌フォカッチャなど、こだわりパンの香りに癒やされた。',
      badge: {
        code: 'shinoro_dadsbake',
        name_ja: '篠路・アメリカンパンの恵み',
        subtitle_en: 'Dads Bake Bread Lover',
        description: 'DAD\'S BAKEで素材にこだわった焼きたてパンに出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting artisan chocolate bread loaves and herb focaccia on a rustic bakery shelf, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'shinoro_master',
    name_ja: '篠路・開拓史と森の散歩者',
    subtitle_en: 'Shinoro Heritage & Heron Forest Walker',
    description: 'JR篠路駅から篠路神社、龍雲寺、篠路五ノ戸の森緑地、DAD\'S BAKEまでを巡った証',
    image_prompt:
      'A circular emblem combining 1855 weeping-willow shrine, golden ginkgo temple, graceful grey heron and artisan bread loaf, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR篠路駅',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1934年（昭和9年）11月20日、札沼南線開通に伴い請願駅として開業（終日利用可・無料）。かつて農産物や茨戸油田の石油積み出し拠点として栄え、東口側には開拓期からの街並みが残る。',
      address: '北海道札幌市北区篠路4条7-2',
      lat: 43.14584,
      lng: 141.365202,
      clue:
        '昭和九年十一月の札沼南線開通に伴い請願駅として開業し、かつては農産物や茨戸油田の石油積み出し拠点としても栄えた「JR篠路駅」から町歩きと散策を始めよう（終日利用可）。開拓期からの歴史ある街並みが広がる東口側へと歩みを踏み出したら、まずは駅から歩いてわずか三分ほどの場所に静かに鎮座する札幌最古級の古社「篠路神社」を目指してのんびり楽しく元気に笑顔で外へと歩いて出掛けよう。',
      surprise: '農産物や茨戸油田の石油積み出しを担ったという駅の歴史が、札幌北部の知られざる姿を教えてくれた。',
      hook: 'JR篠路駅を出たら、徒歩約三分の「篠路神社」へ向かおう。',
      f7_fragment: '昭和九年請願駅として開業、開拓期からの街並みが東口に残る駅。',
      f7_full: '「JR篠路駅」に降り立ち、安政の古社とアオサギの森を巡る街歩きを始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinoro Station quiet northern suburban railway station with historic east-side town streets, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '篠路神社',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '安政2年（1855年）に荒井金助らが「若宮八幡」として創祀した札幌最古級の神社（境内自由・無料）。市指定無形文化財「篠路獅子舞」やペルシュロン種の記念碑、樹齢150年超のしだれ柳がある。',
      address: '北海道札幌市北区篠路4条7-2-33',
      lat: 43.146111,
      lng: 141.364917,
      clue:
        '安政二年創祀の札幌最古級「篠路神社」へ参拝しよう（境内自由）。市指定文化財の獅子舞や樹齢百五十年超のしだれ柳が今も歴史を伝えている。次は「龍雲寺」へ。',
      surprise: '安政二年という札幌でも極めて古い創祀の歴史と、樹齢百五十年超のしだれ柳の優雅な姿に感動した。',
      hook: '篠路神社に参拝したら、東側にある由緒ある寺院「龍雲寺」へ向かおう。',
      f7_fragment: '安政二年創祀、札幌最古級の古社でしだれ柳と獅子舞の伝統を伝える社。',
      f7_full: '「篠路神社」の静かな境内で手を合わせ、安政期から続く篠路の祈りに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinoro Shrine historic wooden torii gate framed by a sweeping 150-year-old weeping willow tree, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '龍雲寺',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1872年（明治5年）に荒井好太郎の妻ナツが開拓使から資金を借りて創建した浄土宗寺院（参拝自由・無料）。旧本堂は北海道開拓の村へ移築現存し、境内に荒井金助と早山清太郎の墓や樹齢100年超イチョウがある。',
      address: '北海道札幌市北区篠路5条10-10-21',
      lat: 43.149974,
      lng: 141.372167,
      clue:
        '明治五年に開拓使からの借入金を礎に創建され、かつての旧本堂が北海道開拓の村へ移築されている由緒ある浄土宗寺院「龍雲寺」を訪ねよう（参拝自由・無料）。境内には篠路開拓の恩人・荒井金助と早山清太郎の墓碑や、札幌市記念保護樹木に指定された樹齢百年超の立派なイチョウが静かに佇み、深い歴史の重みを今に伝えている。お参りを終えたら、「篠路五ノ戸の森緑地」へと楽しく歩いて向かおう。',
      surprise: '旧本堂が北海道開拓の村へ移築されていることと、樹齢百年超のイチョウや開拓功労者の墓碑に歴史の深みを感じた。',
      hook: '龍雲寺を見学したら、南側の自然豊かな「篠路五ノ戸の森緑地」へ向かおう。',
      f7_fragment: '明治五年創建、開拓功労者の墓や樹齢百年超のイチョウが残る浄土宗寺院。',
      f7_full: '「龍雲寺」の記念保護樹木のイチョウを見上げ、開拓の恩人たちの足跡に触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Ryuunji Temple peaceful grounds with traditional timber roof and towering century-old ginkgo tree, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '篠路五ノ戸の森緑地',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '明治〜大正期の開拓農家の屋敷林をルーツとする都市緑地（終日開放・無料、2024年市「活用促進景観資源」登録）。約200種の植物が自生し、国内有数のアオサギの集団営巣地（コロニー）として知られる。',
      address: '北海道札幌市北区篠路3条10-4',
      lat: 43.143015,
      lng: 141.374479,
      clue:
        '明治から大正期の開拓農家の屋敷林をルーツとし、住宅街にありながら約二百種もの植物が自生する「篠路五ノ戸の森緑地」をのんびり楽しく歩こう（終日開放・無料）。ここは国内でも有数のアオサギの集団営巣地として全国的に知られ、季節には木々の梢に佇む優美なアオサギたちの姿や鳴き声に出会える貴重な自然空間だ。森の豊かな息吹に癒やされたら、最後は「DAD\'S BAKE」へと向かおう。',
      surprise: '住宅街のど真ん中に開拓期の屋敷林が残り、国内有数のアオサギの集団営巣地になっていることに驚いた。',
      hook: '篠路五ノ戸の森緑地を抜けたら、人気ベーカリー「DAD\'S BAKE」へ向かおう。',
      f7_fragment: '開拓農家の屋敷林をルーツとし、国内有数のアオサギ営巣地として知られる森。',
      f7_full: '「篠路五ノ戸の森緑地」の木立の中を歩き、アオサギが棲む街中の森に感動した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinoro Gonohe Forest Park tall woodland grove with graceful grey herons resting in sunlit treetops, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: "DAD'S BAKE",
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        'アメリカンな外観の地域人気ベーカリー（水〜金9:00〜19:00・土日祝8:00〜18:00売切次第終了、月火休）。マーガリンや余計な添加物に頼らず素材の味を活かした「ショコラブレッド」や「ねぎ味噌フォカッチャ」が評判。',
      address: '北海道札幌市北区篠路1条9-1-6',
      lat: 43.13847,
      lng: 141.36905,
      clue:
        '旅の締めくくりは、アメリカンな外観が目印の地域人気ベーカリー「DAD\'S BAKE」で焼きたてパンを楽しく選ぼう（水〜金9:00〜19:00等、月火休）。マーガリンや余計な添加物に頼らず素材本来の旨みを活かしたパン作りが評判で、濃厚な「ショコラブレッド」や和洋折衷の「ねぎ味噌フォカッチャ」など魅力的な品がずらりと並ぶ。香ばしいパンをお土産に、篠路の楽しい散歩を心地よく結ぼう。',
      surprise: 'アメリカンなお洒落な店内で出会った「ねぎ味噌フォカッチャ」や「ショコラブレッド」の優しい美味しさが嬉しかった。',
      hook: '',
      f7_fragment: '素材の味を活かしたショコラブレッドやねぎ味噌フォカッチャが評判のパン店。',
      f7_full: '「DAD\'S BAKE」で香り高いこだわりパンを手に入れ、篠路の街歩きを締めくくった。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Dads Bake cheerful American-style neighborhood bakery counter filled with chocolate bread and focaccia, no text, no letters.',
    },
  ],
};
