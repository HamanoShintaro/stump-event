export default {
  slug: 'mukawa',
  station_order: 899,
  station: '鵡川',
  line: 'JR日高本線',
  area_name: '鵡川・本場ししゃもの商店街',
  prefecture: '北海道',
  municipality: 'むかわ町',
  category: 'ししゃも名店と温泉道の駅',
  budget_tier: 2,
  tags: ['北海道', 'むかわ町', '鵡川駅', 'ししゃも', '道の駅'],
  style_genre: 'ink_and_watercolor',
  title: '鵡川・本場ししゃもの老舗と四季の湯巡り',
  description:
    '現在のJR日高本線の終着駅「JR鵡川駅」から、昭和五十年創業の「ケーキショップ おのでら」、ホッキカレーとししゃも料理が評判の「自然喰処 灯泉房」、老舗「カネダイ大野商店」、「道の駅 むかわ四季の館」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Mukawa Hokkaido town from cozy railway terminal and bright yellow patisserie shop to sun-dried shishamo smelt curtains, steaming curry diner and natural hot spring roadside station, full bleed, no text, no letters.',
  question: '日高本線の終着・JR鵡川駅から商店街の老舗菓子や本場ししゃもの名店、温泉道の駅を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: 'かつて富内線も分岐し現在は日高本線の終着を担う「JR鵡川駅」',
      subtext: '大正二年開業の歴史を持ち、むかわ交通ターミナルを併設する町の玄関口から旅が始まった。',
      badge: {
        code: 'mukawa_station',
        name_ja: '鵡川・日高終着の駅人',
        subtitle_en: 'Hidaka Terminal Visitor',
        description: 'JR日高本線の終着駅「JR鵡川駅」から街歩きを始めた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a tidy northern town railway terminal beside a bus plaza, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: 'ししゃもを象った「柳葉魚最中」が名物の老舗「ケーキショップ おのでら」',
      subtext: '昭和五十年創業、黄色い建物が目印の店内で愛らしい柳葉魚最中に微笑んだ。',
      badge: {
        code: 'mukawa_onodera',
        name_ja: '鵡川・柳葉魚最中の銘菓',
        subtitle_en: 'Shishamo Sweet Lover',
        description: 'ケーキショップ おのでらで名物の柳葉魚最中に出会った証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a traditional fish-shaped sweet monaka beside a strawberry shortcake, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: 'ホッキカレーや旬のししゃも料理を堪能できる「自然喰処 灯泉房」',
      subtext: '通年のホッキカレーをはじめ、むかわの海の幸が詰まった一皿に唸った。',
      badge: {
        code: 'mukawa_tosenbo',
        name_ja: '鵡川・灯泉房の海味覚',
        subtitle_en: 'Hokki Curry Diner of Tosenbo',
        description: '自然喰処 灯泉房でむかわの海産料理を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a rich Hokki surf-clam curry rice plate on a warm wooden counter, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '創業百年超、すだれ干しと店内焼きが名物の「カネダイ大野商店」',
      subtext: '店頭のすだれ干しと店内で焼いて味わう本場生干しししゃもの香ばしさに感激した。',
      badge: {
        code: 'mukawa_kanedai',
        name_ja: '鵡川・本場ししゃもの匠',
        subtitle_en: 'Authentic Shishamo Taster',
        description: 'カネダイ大野商店で本場のすだれ干しししゃもを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting rows of silver shishamo smelt drying on wooden racks, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'mukawa_complete',
    name_ja: '鵡川・ししゃもの恵みと四季を歩みし者',
    subtitle_en: 'Walker of Mukawa Shishamo Town',
    description: 'JR鵡川駅からケーキショップ おのでら、自然喰処 灯泉房、カネダイ大野商店、道の駅 むかわ四季の館までを巡った証',
    image_prompt:
      'A circular emblem combining railway terminal, traditional shishamo-shaped sweet monaka, wooden drying rack of silver shishamo smelt and steaming hot spring bath, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR鵡川駅',
      prefecture: '北海道',
      city: 'むかわ町',
      description:
        '1913年（大正2年）10月1日、苫小牧軽便鉄道の駅として開業（終日開放・無料）。かつては国鉄富内線の分岐駅でもあり、2021年4月の鵡川〜様似間廃止に伴い現在のJR日高本線の終着駅となった。',
      address: '北海道勇払郡むかわ町末広2-1',
      lat: 42.578824,
      lng: 141.923678,
      clue:
        '大正二年十月に苫小牧軽便鉄道の駅として開業し、かつては国鉄富内線も分岐した現在のJR日高本線の終着駅「JR鵡川駅」から街歩きを始めよう（終日利用可）。むかわ交通ターミナルを併設する落ち着いた駅舎を出たら、すべて歩いて巡れる魅力いっぱいのししゃもの町の散策へさっそく元気に楽しく出発だ。まずは西側の国道沿いへ徒歩三分の老舗和洋菓子店「ケーキショップ おのでら」へと向かおう。',
      surprise: 'かつて富内線も分岐していた日高本線の終着駅が、今も町の商店街と直結して温かい玄関口になっていた。',
      hook: 'JR鵡川駅を出たら、西側の国道沿いへ徒歩約三分の「ケーキショップ おのでら」へ向かおう。',
      f7_fragment: '大正二年開業、現在はJR日高本線の終着駅を担うむかわ町の玄関口。',
      f7_full: '「JR鵡川駅」に降り立ち、本場ししゃもの老舗と天然温泉を巡る街歩きを始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Mukawa Station tidy northern town railway terminal beside bus terminal plaza, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'ケーキショップ おのでら',
      prefecture: '北海道',
      city: 'むかわ町',
      description:
        '1975年（昭和50年）創業の老舗和洋菓子店（8:30〜19:00、日曜休）。黄色い建物が目印で、鵡川名物のししゃもをかたどった「柳葉魚最中」や「たぬきケーキ」、ショートケーキが名物。',
      address: '北海道勇払郡むかわ町末広1-71-2',
      lat: 42.578527,
      lng: 141.920904,
      clue:
        '黄色い建物が目印の昭和五十年創業の老舗「ケーキショップ おのでら」へ寄ろう（8:30〜19:00、日曜休）。名物の「柳葉魚最中」やたぬきケーキが人気だ。次は「自然喰処 灯泉房」へ。',
      surprise: 'ししゃもの形を忠実に模した「柳葉魚最中」と昔ながらのケーキが並ぶ店内の温かい雰囲気に思わず微笑んだ。',
      hook: 'ケーキショップ おのでらで甘いお土産を見たら、すぐ隣の「自然喰処 灯泉房」へ向かおう。',
      f7_fragment: '昭和五十年創業、ししゃも型の「柳葉魚最中」とケーキが名物の老舗店。',
      f7_full: '「ケーキショップ おのでら」で可愛い「柳葉魚最中」に出会い、町の銘菓に和んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Cake Shop Onodera cheerful yellow storefront window displaying fish-shaped monaka sweets and strawberry shortcakes, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '自然喰処 灯泉房',
      prefecture: '北海道',
      city: 'むかわ町',
      description:
        '地元で人気の食事処（11:00〜14:00・17:00〜22:00、水曜休・不定休あり）。通年で評判の「ホッキカレー」をはじめ、例年10〜11月中旬のししゃも漁期には限定のししゃも御膳やししゃも寿司も提供。',
      address: '北海道勇払郡むかわ町末広1-70-2',
      lat: 42.578461,
      lng: 141.921067,
      clue:
        '地元で厚い支持を集める人気の食事処「自然喰処 灯泉房」でむかわならではの豊かな味覚を堪能しよう（11:00〜14:00・17:00〜22:00、水曜等休）。通年でファンが多い名物「ホッキカレー」の奥深い貝の旨みはもちろん、例年十月から十一月中旬の漁期には限定のししゃも御膳やししゃも寿司に出会えるのも大きな魅力だ。お腹が満たされたら、老舗「カネダイ大野商店」へと向かおう。',
      surprise: 'ぷりっとしたホッキ貝の旨みが溶け込んだカレーと、旬のししゃも文化を大切にする店の心意気に感動した。',
      hook: '自然喰処 灯泉房で食事を楽しんだら、南東側の「カネダイ大野商店」へ向かおう。',
      f7_fragment: '通年人気のホッキカレーや秋漁期限定のししゃも料理を味わえる食事処。',
      f7_full: '「自然喰処 灯泉房」で海の幸が詰まった料理を味わい、むかわの食の豊かさを実感した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tosenbo warm Japanese diner counter serving rich Hokki surf-clam curry rice plate, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '買い物',
      name: 'カネダイ大野商店',
      prefecture: '北海道',
      city: 'むかわ町',
      description:
        '創業100年を超える老舗の鵡川ししゃも専門店（1〜9月10:00〜17:00・日曜休、10〜12月9:00〜17:00・無休）。店頭の「すだれ干し」が名物で、生干しししゃもを店内のホットプレートで焼いてその場で味わえる。',
      address: '北海道勇払郡むかわ町美幸2-42',
      lat: 42.576479,
      lng: 141.926608,
      clue:
        '創業百年を超える本場・鵡川ししゃもの老舗専門店「カネダイ大野商店」を訪ねよう（1〜9月10:00〜17:00・日曜休、10〜12月9:00〜17:00・無休）。店頭にずらりと並ぶ名物の「すだれ干し」を眺めるだけで本場に来た実感が湧き上がり、購入した生干しししゃもを店内のホットプレートで焼いてその場で熱々を頬張ることもできる。最後は「道の駅 むかわ四季の館」へ向かおう。',
      surprise: '店頭の圧巻のすだれ干しと、店内のホットプレートで焼いていただく本場生干しししゃもの香ばしさが忘れられない。',
      hook: 'カネダイ大野商店で本場ししゃもを味わったら、南側の「道の駅 むかわ四季の館」へ向かおう。',
      f7_fragment: '創業百年超、店頭のすだれ干しと店内焼きが名物の鵡川ししゃも専門店。',
      f7_full: '「カネダイ大野商店」ですだれ干しのししゃもを味わい、本場ならではの味に唸った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kanedai Ono Shoten traditional Hokkaido seafood shop with rows of silver shishamo smelt drying on wooden racks, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '道の駅 むかわ四季の館',
      prefecture: '北海道',
      city: 'むかわ町',
      description:
        '物産館・お食事処「たんぽぽ」・天然温泉「四季の湯」（ナトリウム-塩化物強塩泉、10:00〜22:00、大人520円等）を備えた複合道の駅（道の駅全体8:00〜22:00、無料休憩所24時間、年中無休・点検休あり）。',
      address: '北海道勇払郡むかわ町美幸3-3-1',
      lat: 42.574337,
      lng: 141.926036,
      clue:
        '旅の締めくくりは、カネダイ大野商店から南へ徒歩約四分の複合拠点「道の駅 むかわ四季の館」でゆったりくつろごう（道の駅8:00〜22:00・温泉10:00〜22:00、大人520円）。物産館でむかわ町の特産品を眺めた後は、良質なナトリウム-塩化物強塩泉の天然温泉「四季の湯」でじんわり温まったり無料休憩所で一息ついたりと楽しみが尽きない。心地よい湯上がりで鵡川の旅を結ぼう。',
      surprise: '駅から徒歩圏内にこれほど立派な物産館と天然温泉「四季の湯」を備えた道の駅があることに驚いた。',
      hook: '',
      f7_fragment: '物産館と良質な天然温泉「四季の湯」を備え、街歩きの疲れを癒やせる道の駅。',
      f7_full: '「道の駅 むかわ四季の館」で特産品と天然温泉を楽しみ、鵡川の街歩きを終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Michi no Eki Mukawa Shiki no Yakata welcoming brick-and-timber roadside spa complex with rising hot spring steam, no text, no letters.',
    },
  ],
};
