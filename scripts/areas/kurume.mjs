export default {
  slug: 'kurume',
  station_order: 639,
  station: '久留米',
  line: '九州新幹線・JR鹿児島本線',
  area_name: '久留米・城下町と豚骨ラーメンの街',
  prefecture: '福岡県',
  municipality: '久留米市',
  category: '歴史とグルメ',
  budget_tier: 2,
  tags: ['福岡県', '久留米市', '久留米駅', '久留米城跡', '久留米水天宮'],
  style_genre: 'fountain_pen_sketchbook',
  title: '久留米・筑後の水天宮と城跡を歩く',
  description:
    '九州新幹線が発着するJR久留米駅から、八女茶のスイーツが味わえる「牛島製茶 JR久留米店」と地元で親しまれる「和菓子処 とらや」、全国水天宮の総本宮「久留米水天宮」、筑後川畔の「久留米城跡・篠山神社」と「有馬記念館」を巡る散策路。',
  eyecatch_prompt:
    'Fountain pen sketchbook and transparent watercolor illustration of Kurume city in Fukuoka showing a welcoming Japanese green tea cafe, traditional dango sweet shop, grand riverside Suitengu shrine gate, weathered stone walls of Kurume Castle ruins and Arima historical museum overlooking Chikugo River, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '筑後川の恵みと久留米藩の記憶、そして八女茶の香りが繋がる久留米を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「牛島製茶 JR久留米店」で、老舗茶舗ならではの濃厚な八女茶スイーツを味わった瞬間',
      subtext:
        '駅のすぐそばで味わう深い旨みの八女抹茶が、筑後エリアの旅の幕開けを爽やかに彩った。',
      badge: {
        code: 'kurume_ushijima',
        name_ja: '久留米駅前・八女茶の香りを嗜みし者',
        subtitle_en: 'Guest of Ushijima Tea',
        description:
          '牛島製茶 JR久留米店を訪ね、筑後地方の名産・八女茶と抹茶スイーツを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a ceramic bowl of vibrant green whisked Yame matcha tea beside a layered matcha parfait glass, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「和菓子処 とらや」の店頭で、香ばしいお団子や手づくりの餅菓子に出会った瞬間',
      subtext:
        '駅近くの京町で地元の人々に親しまれる素朴な和菓子が、街歩きの楽しいお供になった。',
      badge: {
        code: 'kurume_toraya',
        name_ja: '久留米城南・とらやの団子を買いし者',
        subtitle_en: 'Taster of Kurume Dango',
        description:
          '和菓子処 とらやを訪ね、地元で親しまれる素朴で多彩なお団子と和菓子を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing skewered Japanese dango rice dumplings glazed with sweet soy and roasted sesame miso on a bamboo tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「久留米水天宮」の筑後川を望む境内で、全国水天宮総本宮の清らかな空気を感じた瞬間',
      subtext:
        '大きな鳥居と雄大な筑後川の流れが、古くから水と暮らしを守ってきた聖地の威厳を伝えていた。',
      badge: {
        code: 'kurume_suitengu',
        name_ja: '筑後川畔・総本宮水天宮を拝みし者',
        subtitle_en: 'Visitor of Kurume Suitengu',
        description:
          '久留米水天宮を訪ね、筑後川のほとりに鎮座する全国水天宮の総本宮に参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a grand Shinto shrine gate and wooden sanctuary overlooking a wide calm river with distant green hills, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「久留米城跡（篠山神社）」の高石垣の上に立ち、筑後川と城下町の風景を見晴らした瞬間',
      subtext:
        '有馬氏二十一万石の居城を伝える見事な石垣と内濠が、二百五十年続いた藩政の記憶を残していた。',
      badge: {
        code: 'kurume_castle',
        name_ja: '久留米城跡・有馬氏の石垣を仰ぎし者',
        subtitle_en: 'Explorer of Kurume Castle',
        description:
          '久留米城跡（篠山神社）を訪ね、見事な本丸石垣と筑後川を望む藩主ゆかりの地を歩いた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing massive weathered stone castle ramparts of Kurume Castle ruins beside a Shinto torii gate and cherry trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'kurume_complete',
    name_ja: '久留米・筑後の水天宮と城跡を巡る旅人',
    subtitle_en: 'Walker of Kurume Town',
    description:
      '牛島製茶 JR久留米店から和菓子処 とらや、久留米水天宮、久留米城跡・篠山神社、有馬記念館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a bowl of Yame green tea, the riverside gate of Suitengu Shrine and the stone ramparts of Kurume Castle, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '牛島製茶 JR久留米店',
      spot_type: '休憩',
      description:
        '八女茶の老舗茶舗がJR久留米駅東口・えきマチ1丁目1階に構える日本茶カフェ＆ショップ。濃厚な八女抹茶パフェや煎茶スイーツ、香り高い茶葉が楽しめる。物販9:30〜18:00・カフェ11:00〜18:30（L.O.17:30）。',
      address: '福岡県久留米市城南町2-34',
      prefecture: '福岡県',
      municipality: '久留米市',
      lat: 33.319987,
      lng: 130.501916,
      clue: '九州新幹線が発着するJR久留米駅に着いたら、まずは駅そばの「牛島製茶 JR久留米店」で筑後名産の八女茶を味わおう（カフェ11:00〜18:30）。八女茶の老舗茶舗が営む温かな日本茶カフェで、旨みの濃い八女抹茶を使ったパフェや淹れたてのお茶が旅人を優しく迎えてくれる。芳醇なお茶の香りでほっと一息つきながら、筑後川のほとりへ向かう久留米の歴史散策をこれからもずっと軽やかに始めたい。',
      surprise:
        '駅に降り立ってすぐの場所で、筑後が誇る高級茶「八女茶」の本格的な味わいに気軽に出会えるのが嬉しい。抹茶の鮮やかな緑とまろやかな甘みに癒やされながら、城下町と川辺の歴史をめぐる旅への期待が心地よく膨らんでいく一軒だ。',
      hook: '八女茶を味わったら、南西へ徒歩4分の地元老舗・和菓子処 とらやへ向かおう。',
      f7_fragment: 'JR久留米駅そばで老舗の八女茶と抹茶スイーツを味わう、日本茶カフェ。',
      f7_full: '駅そばの「牛島製茶 JR久留米店」で香り高い八女茶のスイーツを味わい、筑後・久留米の散策を爽やかに始めた。',
      image_prompt:
        'Bright modern Japanese green tea cafe counter displaying a tall glass Yame matcha parfait and a ceramic teapot with emerald sencha tea, no text, no people.',
    },
    {
      name: '和菓子処 とらや',
      spot_type: '買い物',
      description:
        'JR久留米駅から歩いてすぐの京町に構える昔ながらの和菓子店。ごま味噌やみたらしなど種類豊富なお団子や季節の餅菓子が地元客に親しまれる。営業時間9:00〜18:30、火曜定休。',
      address: '福岡県久留米市京町234-1',
      prefecture: '福岡県',
      municipality: '久留米市',
      lat: 33.318677,
      lng: 130.49986,
      clue: '牛島製茶から駅の南西へ進み、南西へ徒歩4分の「和菓子処 とらや」へ立ち寄ろう（9:00〜18:30、火曜休）。京町の通りに昔から店を構える親しみやすい和菓子舗で、ショーケースには香ばしいみたらしやごま味噌、きなこなど多彩なお団子や柔らかな大福がずらりと並んでいる。川辺の社と城跡を巡る道中の楽しいお供をゆっくり選び、久留米の飾らない日常にこれからもずっとじっくりと触れたい。',
      surprise:
        '気取らない街角のお店でありながら、毎日丁寧につくられるお団子の種類の豊富さと手頃な価格に思わず笑顔がこぼれる。地元の人々が日常のおやつを買いに訪れる穏やかな空気感が、城下町・久留米の暮らしの温もりを真っすぐに伝えている。',
      hook: 'お団子を手にしたら、西北西へ徒歩7分の筑後川畔・久留米水天宮へ向かおう。',
      f7_fragment: '久留米駅近くで多彩なお団子や餅菓子を手づくりする、地元の和菓子舗。',
      f7_full: '京町の「和菓子処 とらや」で素朴で多彩なお団子に出会い、久留米の日常に根付いた温かい甘味に触れた。',
      image_prompt:
        'Cozy neighborhood Japanese wagashi shop wooden counter displaying trays of skewered mitarashi, sesame miso and mugwort dango dumplings, no text, no people.',
    },
    {
      name: '久留米水天宮',
      spot_type: '見どころ',
      description:
        '筑後川のほとりに鎮座する全国水天宮の総本宮。安産・水難除け・開運の神として広く崇敬され、雄大な川の流れを望む境内が清々しい。参拝自由（社務所9:00〜16:30）。',
      address: '福岡県久留米市瀬下町265-1',
      prefecture: '福岡県',
      municipality: '久留米市',
      lat: 33.320391,
      lng: 130.496016,
      clue: 'とらやから西北西へ徒歩7分、筑後川を望む全国総本宮「久留米水天宮」へ詣でよう（社務所9:00〜16:30）。雄大な川の恵みとともに守られてきた聖地の清らかな空気に触れたい。',
      surprise:
        '東京をはじめ全国各地にある水天宮の総本宮が、ここ筑後川のほとりに静かに鎮座していることに深い歴史の重みを感じる。川を渡ってくる爽やかな風と堂々たる拝殿の佇まいに包まれて手を合わせると、旅の心まで清らかに洗われていくようだ。',
      hook: '参拝を終えたら、北東へ徒歩23分の久留米城跡（篠山神社）へ向かおう。',
      f7_fragment: '雄大な筑後川のほとりに鎮座する、全国水天宮の総本宮の古社。',
      f7_full: '筑後川畔に鎮座する全国総本宮「久留米水天宮」に参拝し、川と暮らしを見守り続けてきた聖地の清らかな空気に触れた。',
      image_prompt:
        'Grand Japanese Shinto shrine of Kurume Suitengu with wide timber worship hall and stone lanterns beside the broad Chikugo River, no text, no people.',
    },
    {
      name: '久留米城跡（篠山神社）',
      spot_type: '見どころ',
      description:
        '江戸時代に筑後久留米藩21万石を治めた有馬氏の居城跡。本丸の高石垣や内濠が残り、本丸跡には藩祖・有馬豊氏らを祀る篠山神社が鎮座する。散策自由（社務所日中）。',
      address: '福岡県久留米市篠山町444',
      prefecture: '福岡県',
      municipality: '久留米市',
      lat: 33.328515,
      lng: 130.508025,
      clue: '水天宮から筑後川沿いを北東へ徒歩23分、崖上に築かれた「久留米城跡（篠山神社）」へ登ろう（散策自由）。江戸時代に筑後二十一万石を治めた有馬氏の居城であり、今も本丸を囲む見事な高石垣と水を湛えた内濠が往時の城郭の面影を伝えている。本丸跡に鎮座する篠山神社へ参拝し、石垣の上から雄大な筑後川と久留米の街並みを見晴らして、城下町の深い歴史をこれからもずっとじっくりと体感したい。',
      surprise:
        '天然の要害である筑後川を背後に配した巧みな縄張りと、荒々しくも美しい本丸の高石垣の迫力には目を奪われる。春は桜、夏は緑に彩られる静かな城址公園は市民の憩いの場でもあり、歴史の風格と穏やかな日常が心地よく溶け合っている。',
      hook: '城跡を歩いたら、敷地内すぐそばの有馬記念館で藩の歴史に触れて旅を結ぼう。',
      f7_fragment: '有馬氏二十一万石の居城を伝える、高石垣と篠山神社が残る久留米城跡。',
      f7_full: '「久留米城跡（篠山神社）」の本丸高石垣と筑後川の眺望を巡り、有馬氏二十一万石の城下町の歴史に触れた。',
      image_prompt:
        'Historic stone ramparts and moat of Kurume Castle ruins topped with pine trees and the wooden shrine pavilion of Sasayama Jinja, no text, no people.',
    },
    {
      name: '有馬記念館',
      spot_type: '見どころ',
      description:
        '久留米城跡の本丸内に建ち、旧久留米藩主・有馬家ゆかりの大名道具や古文書、美術工芸品を展示する歴史資料館。10:00〜17:00（入館16:30まで）、火曜休館、一般210円。',
      address: '福岡県久留米市篠山町444',
      prefecture: '福岡県',
      municipality: '久留米市',
      lat: 33.328223,
      lng: 130.507198,
      clue: '同じ久留米城跡の本丸内に佇む「有馬記念館」を訪ねて散策を締めくくろう（10:00〜17:00、火曜休）。歴代久留米藩主・有馬家に伝来した貴重な甲冑や美術工芸品、藩政を物語る古文書などが丁寧に展示され、筑後の地に育まれた武家文化と学芸の深い歩みを知ることができる。筑後川の恵みと城下町の誇りを巡った久留米の一日を、静かな感動とともにこれからもずっと心深く温かくしっかり結びたい。',
      surprise:
        '城跡の石垣や篠山神社を巡ったその足で、実際の藩主ゆかりの品々を間近に鑑賞できる流れが実に自然で分かりやすい。名門・有馬家が育んだ気品ある工芸や資料に触れることで、今日歩いた久留米の街並みがより一層深い物語として胸に刻まれる。',
      hook: '',
      f7_fragment: '久留米城跡本丸に建ち、藩主有馬家ゆかりの名宝と歴史を伝える資料館。',
      f7_full: '久留米城跡内の「有馬記念館」で藩主有馬家ゆかりの美術工芸と歴史を学び、筑後の城下町を巡る旅を締めくくった。',
      image_prompt:
        'Tranquil Japanese regional history museum building of Arima Memorial Hall inside Kurume Castle park framed by green trees and stone walls, no text, no people.',
    },
  ],
};
