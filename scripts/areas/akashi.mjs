export default {
  slug: 'akashi',
  station_order: 627,
  station: '明石',
  line: 'JR神戸線（山陽本線）・山陽電鉄本線',
  area_name: '明石・魚の棚と明石城',
  prefecture: '兵庫県',
  municipality: '明石市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['兵庫県', '明石市', '明石駅', '魚の棚商店街', '明石焼'],
  style_genre: 'pictorial_isometric_map',
  title: '明石・魚の棚の玉子焼と明石城の櫓を歩く',
  description:
    'JR・山陽明石駅から四百年の歴史を誇る「魚の棚商店街」へ入り、名物・明石焼（玉子焼）の名店「たこ磯」と「よし川」周辺を味わい尽くしたあと、緑豊かな明石公園内の「TTT」で寛ぎ、国の重要文化財の二重の櫓が並ぶ「明石城」へと至る散策路。',
  eyecatch_prompt:
    'Isometric pictorial map illustration of Akashi city in Hyogo showing Akashi railway station, bustling covered Uonotana fish market arcade, traditional Akashiyaki omelette shop, bright park terrace cafe and twin white turrets of Akashi Castle atop stone walls, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '海産物の活気と名物・玉子焼の香り、そして白い櫓が輝く明石を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「魚の棚商店街」のアーケードで、明石ダコや鯛が並ぶ四百年の活気に触れた瞬間',
      subtext:
        '威勢の良い声と明石海峡の恵みがずらりと並ぶ通りを歩くだけで、港町の元気をもらえた。',
      badge: {
        code: 'akashi_uonotana',
        name_ja: '明石・魚の棚商店街を巡りし者',
        subtitle_en: 'Explorer of Uonotana Arcade',
        description:
          '魚の棚商店街を訪ね、四百年続く明石の台所の活気と瀬戸内の海の幸に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a lively Japanese covered seafood market street with fresh octopus, sea bream and warm hanging banners, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「たこ磯」で、温かい出汁につけて頬張るふわとろの明石焼（玉子焼）を味わった瞬間',
      subtext:
        '口の中でとろける玉子生地とぷりぷりの明石ダコ、優しい出汁の組み合わせが忘れられない。',
      badge: {
        code: 'akashi_takoiso',
        name_ja: '魚の棚・本場の玉子焼を味わいし者',
        subtitle_en: 'Taster of Akashiyaki',
        description:
          'たこ磯を訪ね、明石名物の玉子焼（明石焼）を温かいお出汁とともに堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring golden round Akashiyaki egg dumplings arranged on a wooden board beside a small bowl of clear dashi broth, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「food & drinks TTT」の明るい空間から、明石公園の緑と城の石垣を眺めた瞬間',
      subtext:
        '歴史ある城郭公園のすぐそばで過ごす開放的なカフェ時間が、旅の午後を豊かにした。',
      badge: {
        code: 'akashi_ttt',
        name_ja: '明石公園・城を望む茶房を知る者',
        subtitle_en: 'Guest of Akashi Park Cafe',
        description:
          'food & drinks TTTを訪ね、明石公園の緑と城を眺めながら寛ぎの時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing an iced coffee glass and dessert plate on a sunlit park terrace overlooking green pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「明石城（明石公園）」の広大な石垣の上に並ぶ、巽櫓と坤櫓の美しい姿を見上げた瞬間',
      subtext:
        '国指定重要文化財の二つの三重櫓が青空に映える城址で、明石の誇りを感じた。',
      badge: {
        code: 'akashi_castle',
        name_ja: '明石城・二つの三重櫓を仰ぎし者',
        subtitle_en: 'Admirer of Akashi Castle',
        description:
          '明石城（明石公園）を訪ね、国の重要文化財である巽櫓と坤櫓の雄大な姿に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting twin white three-story castle turrets standing atop high stone walls framed by green park pines, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'akashi_complete',
    name_ja: '魚の棚の玉子焼と明石城を巡る旅人',
    subtitle_en: 'Walker of Akashi Castle Town',
    description:
      '魚の棚商店街からたこ磯、よし川、food & drinks TTT、明石城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining twin white castle turrets, golden Akashiyaki dumplings and coastal market waves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '魚の棚商店街',
      spot_type: '買い物',
      description:
        '明石の台所として約400年の歴史を持つ全長約350mのアーケード商店街。明石ダイや明石ダコなど鮮魚店や練り物店が軒を連ねる。営業時間8:00〜18:00頃（店舗により異なる・木曜休多し）。',
      address: '兵庫県明石市本町1-1-16',
      prefecture: '兵庫県',
      municipality: '明石市',
      lat: 34.647014,
      lng: 134.992652,
      clue: 'JR・山陽明石駅の南口を出て大通りを渡ると、約四百年の歴史を誇る「魚の棚商店街」の賑やかなアーケードが待っている（8:00〜18:00頃・店舗により異なる）。全長約三百五十メートルの通りには明石海峡の荒波で育った明石ダコや明石ダイ、香ばしい焼穴子や練り物店が所狭しと並び、威勢の良い声が響き渡る。地元では「うおんたな」と親しまれる明石の台所をまずは心ゆくまでじっくり歩こう。',
      surprise:
        'アーケードに一歩足を踏み入れた瞬間から、潮の香りと焼き魚の香ばしい匂いが立ち込め、五感すべてで港町の活気を感じられる。観光名所でありながら地元の人々の普段の買い物の場でもあり、飾らない明石の日常にそのまま触れられるのがなんとも楽しい。',
      hook: '商店街を進んだら、南南東へ徒歩1分のたこ磯（本店）で明石焼を味わおう。',
      f7_fragment: '四百年の歴史と明石海峡の恵みが詰まった、活気あふれる「うおんたな」。',
      f7_full: '明石の台所「魚の棚商店街」を歩き、明石ダコや鯛が並ぶ活気ある通りで四百年続く港町の暮らしにじっくり深く触れた。',
      image_prompt:
        'Bustling covered Japanese seafood market arcade of Uonotana in Akashi with fresh octopus, sea bream displays and hanging shop banners, no text, no people.',
    },
    {
      name: 'たこ磯（本店）',
      spot_type: '食事',
      description:
        '魚の棚商店街の中に構える明石焼（玉子焼）の代表的名店。明石ダコや穴子入りのふんわりとした玉子焼を特製のお出汁で味わえる。営業時間10:00〜19:00、無休。',
      address: '兵庫県明石市本町1-1-11',
      prefecture: '兵庫県',
      municipality: '明石市',
      lat: 34.646678,
      lng: 134.992816,
      clue: '商店街の東寄りから南南東へ徒歩1分、香ばしい出汁の香りが漂う明石焼の名店「たこ磯（本店）」で昼食にしよう（10:00〜19:00、無休）。地元で「玉子焼」と呼ばれる明石のソウルフードで、銅板でふんわりと焼き上げられた熱々の玉子生地の中にはぷりぷりの明石ダコが隠れている。三つ葉を浮かべた澄んだお出汁にたっぷりとくぐらせて、とろけるような優しい食感を心ゆくまで堪能しよう。',
      surprise:
        'ソースで食べるたこ焼きとはまったく異なる、上品な出汁の旨みと玉子生地の繊細な口どけに思わず笑顔がほころぶ。目の前の銅板で熟練の焼き手がリズミカルにひっくり返す光景も心地よく、明石に来た喜びをひと口で実感させてくれる素敵な一軒だ。',
      hook: '玉子焼を堪能したら、西へ徒歩3分のよし川周辺で食べ歩きも覗いてみよう。',
      f7_fragment: 'ふんわり玉子生地とぷりぷりの明石ダコを出汁で味わう、玉子焼の名店。',
      f7_full: '魚の棚の「たこ磯（本店）」で本場の玉子焼（明石焼）を温かいお出汁で味わい、明石が誇る食文化の魅力を深く堪能した。',
      image_prompt:
        'Traditional Japanese Akashiyaki restaurant wooden board serving fifteen golden fluffy egg-batter octopus dumplings with a ceramic bowl of clear dashi broth, no text, no people.',
    },
    {
      name: 'よし川',
      spot_type: '食事',
      description:
        '魚の棚商店街に店を構える玉子焼の老舗人気店。長年受け継継がれてきた優しい出汁とふんわり食感の玉子焼が親しまれる。平日10:00〜18:00・土日祝10:00〜19:00（売切次第終了）、木曜定休。',
      address: '兵庫県明石市本町1-2-16',
      prefecture: '兵庫県',
      municipality: '明石市',
      lat: 34.647201,
      lng: 134.991055,
      clue: 'たこ磯から商店街をさらに西へ徒歩3分、もうひとつの人気老舗「よし川」の前に立ってみよう（10:00〜18:00頃、木曜休）。店ごとに異なるお出汁や焼き加減の個性が明石の奥深さを物語る。',
      surprise:
        '同じ商店街の中に複数の玉子焼の名店が並び、それぞれの店が独自の出汁や生地の配合を守り続けているのが明石の面白いところだ。軒先から漂う香ばしい香りを感じながら商店街の西端まで歩けば、玉子焼へのこだわりがいっそう鮮やかに伝わってくるはずだ。',
      hook: '魚の棚商店街を抜けたら、北へ徒歩6分のfood & drinks TTTでひと休みしよう。',
      f7_fragment: '店ごとの出汁と焼き加減の違いを伝える、魚の棚の老舗玉子焼店。',
      f7_full: '商店街の老舗「よし川」周辺を歩いて明石焼の奥深い個性と地元の愛着に触れ、魚の棚の豊かな食文化をしっかり確かめた。',
      image_prompt:
        'Charming traditional wooden shopfront of a Japanese Akashiyaki eatery in a lively covered market lane with warm noren curtains, no text, no people.',
    },
    {
      name: 'food & drinks TTT',
      spot_type: '休憩',
      description:
        '明石公園の緑に囲まれた開放的な人気カフェ。テラス席から明石城の景色を眺めながら、珈琲やスイーツ、軽食を楽しめる。営業時間11:00〜21:00（17:00以降は予約制）。',
      address: '兵庫県明石市明石公園1-27',
      prefecture: '兵庫県',
      municipality: '明石市',
      lat: 34.650519,
      lng: 134.992127,
      clue: '商店街から明石駅の北側へ抜け、北へ徒歩6分の明石公園内にある「food & drinks TTT」で一息つこう（11:00〜21:00）。広大な県立公園の緑に寄り添うように建つ開放的なカフェで、テラスや大きな窓から明石城の石垣と木々を眺めながら香り高い珈琲やスイーツを楽しめる。賑やかな魚の棚の空気から一転、城郭公園の穏やかな緑に包まれて午後の散策へ心を心地よく整えたい。',
      surprise:
        '駅前すぐの場所にこれほど広く開放的な公園と、風景に溶け込む心地よいカフェが整っていることに驚かされる。爽やかな風を感じながら珈琲を味わっていると、歴史ある城下町・明石の洗練された日常を垣間見たような嬉しい気持ちになる素敵な一軒だ。',
      hook: 'カフェを出たら、北へ徒歩7分の明石城（明石公園）の本丸石垣へ登ろう。',
      f7_fragment: '明石公園の緑と城の景色を望みながら寛ぐ、開放的なテラスカフェ。',
      f7_full: '明石公園内の「food & drinks TTT」で緑と石垣を眺めながら珈琲を味わい、午後の城址歩きへ向けた穏やかな休息をとった。',
      image_prompt:
        'Airy modern park-side cafe interior and sunlit wooden terrace overlooking green lawn and distant castle stone walls, coffee cup on table, no text, no people.',
    },
    {
      name: '明石城（明石公園）',
      spot_type: '見どころ',
      description:
        '1619年に徳川秀忠の命で小笠原忠政が築いた名城の跡地。全国に12基しか現存しない三重櫓のうち「巽櫓」と「坤櫓」の2基が並び立つ国の重要文化財。公園終日開放・入園無料。',
      address: '兵庫県明石市明石公園1-27',
      prefecture: '兵庫県',
      municipality: '明石市',
      lat: 34.654383,
      lng: 134.99283,
      clue: 'カフェから北へ徒歩7分、壮大な石垣が連なる「明石城（明石公園）」の本丸跡へ登って旅を締めくくろう（終日開放・無料）。築城の名手・小笠原忠政が徳川秀忠の命で築いた名城であり、天守台に天守は築かれなかったものの、両端に建つ「巽櫓」と「坤櫓」はともに国の重要文化財に指定されている。青空に映える真っ白な二重の三重櫓を仰ぎ、海と城が育んだ明石の歴史をこれからも心に深く刻みたい。',
      surprise:
        '横幅の広い見事な石垣の上に二つの白亜の三重櫓が左右対称に並ぶ姿は、他の城にはない独特の美しさと気品を備えている。本丸跡から明石海峡方面を望む心地よい風に吹かれながら、魚の棚から続いた充実の散策を晴れやかに締めくくれる素晴らしい名城だ。',
      hook: '',
      f7_fragment: '国重要文化財の巽櫓と坤櫓が左右に並び立つ、白亜の石垣が美しい名城。',
      f7_full: '「明石城（明石公園）」の壮大な石垣と二つの三重櫓を仰ぎ、瀬戸内の風を感じながら明石の散策を清々しく締めくくった。',
      image_prompt:
        'Majestic Akashi Castle ruins featuring massive stone walls topped by two white three-story wooden turrets framed by green pine trees and blue sky, no text, no people.',
    },
  ],
};
