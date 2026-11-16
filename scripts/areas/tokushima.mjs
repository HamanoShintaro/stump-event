export default {
  slug: 'tokushima',
  station_order: 642,
  station: '徳島',
  line: 'JR高徳線・牟岐線・徳島線',
  area_name: '徳島・阿波おどりと眉山の街',
  prefecture: '徳島県',
  municipality: '徳島市',
  category: '文化とグルメ',
  budget_tier: 2,
  tags: ['徳島県', '徳島市', '徳島駅', '阿波おどり会館', '徳島ラーメン'],
  style_genre: 'fountain_pen_sketchbook',
  title: '徳島・城跡の堀と阿波おどりの街を歩く',
  description:
    'JR徳島駅から、蜂須賀家ゆかりの「徳島城跡（徳島中央公園）」と天然酵母パンが人気の「O-ba\'sh cafe.」、一年中阿波おどりが体感できる「阿波おどり会館」、市街を一望する「眉山ロープウェイ」、名店の「徳島ラーメン いのたに 本店」を巡る散策路。',
  eyecatch_prompt:
    'Fountain pen sketchbook and transparent watercolor illustration of Tokushima city showing the stone moat and Washinomon gate of Tokushima Castle Park, cozy riverside bakery cafe, Awa Odori dance hall, aerial ropeway ascending green Mount Bizan and steaming Tokushima ramen shop, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '蜂須賀家の城跡と阿波おどりの熱気、そして徳島ラーメンが繋がる徳島を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「徳島城跡（徳島中央公園）」の緑豊かな水堀と復元された鷲の門を歩いた瞬間',
      subtext:
        '駅北側のすぐそばに広がる阿波二十五万石の居城跡が、旅の始まりを穏やかに包んでくれた。',
      badge: {
        code: 'tokushima_castle',
        name_ja: '徳島城跡・蜂須賀家の堀を巡りし者',
        subtitle_en: 'Explorer of Tokushima Castle',
        description:
          '徳島城跡（徳島中央公園）を訪ね、阿波二十五万石の石垣と復元鷲の門の風情に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a reconstructed wooden Japanese castle gate beside green stone ramparts and a calm water moat, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「阿波おどり会館」で、本場徳島の鳴り物と踊りの熱気を間近に体感した瞬間',
      subtext:
        '四百年の伝統を誇る阿波おどりの躍動感と歴史に触れ、心まで軽やかに弾み出した。',
      badge: {
        code: 'tokushima_awaodori',
        name_ja: '阿波おどり会館・踊りの粋に触れし者',
        subtitle_en: 'Guest of Awa Odori Hall',
        description:
          '阿波おどり会館を訪ね、四百年の歴史を持つ阿波おどりの魅力と文化に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing traditional woven amigasa straw dance hats, taiko drum and paper lanterns in a festive cultural hall, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「眉山ロープウェイ」で山頂へ上り、吉野川と徳島の街並みを一望した瞬間',
      subtext:
        'どの方向から眺めても眉の形に見える徳島のシンボルから、海と川が織りなす絶景を望んだ。',
      badge: {
        code: 'tokushima_bizan',
        name_ja: '眉山山頂・吉野川と街を望みし者',
        subtitle_en: 'Admirer of Mount Bizan',
        description:
          '眉山ロープウェイに乗り、徳島のシンボル・眉山山頂から吉野川と市街のパノラマを望んだ証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a scenic cable-car gondola gliding above green mountain forest overlooking a wide river delta and coastal city, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「徳島ラーメン いのたに 本店」で、甘辛い豚肉と生卵が絡む一杯を啜った瞬間',
      subtext:
        '昭和の老舗が守り続ける濃厚な豚骨醤油のコクと優しい旨みが、旅の最後を満たしてくれた。',
      badge: {
        code: 'tokushima_inotani',
        name_ja: '徳島・名店いのたにの一杯を啜りし者',
        subtitle_en: 'Taster of Tokushima Ramen',
        description:
          '徳島ラーメン いのたに 本店を訪ね、甘辛い豚バラ肉と生卵が絡むご当地の味を堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring a ceramic bowl of rich brown Tokushima ramen topped with simmered pork belly slices, raw egg yolk and green onions, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'tokushima_complete',
    name_ja: '徳島・城跡と阿波おどりの街を巡る旅人',
    subtitle_en: 'Walker of Tokushima Town',
    description:
      '徳島城跡からO-ba\'sh cafe.、阿波おどり会館、眉山ロープウェイ、徳島ラーメン いのたに 本店までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a castle moat gate, a woven Awa Odori hat and a steaming bowl of Tokushima ramen, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '徳島城跡（徳島中央公園）',
      spot_type: '見どころ',
      description:
        '蜂須賀家政が築いた阿波25万石の徳島城跡を整備した公園。復元された「鷲の門」や阿波青石を用いた見事な石垣、美しい水堀がJR徳島駅のすぐそばに広がる。入園自由・無料。',
      address: '徳島県徳島市徳島町城内1',
      prefecture: '徳島県',
      municipality: '徳島市',
      lat: 34.075239,
      lng: 134.554436,
      clue: 'JR徳島駅の北側に広がる緑豊かな「徳島城跡（徳島中央公園）」から散策を始めよう（入園自由・無料）。戦国から江戸にかけて阿波二十五万石を治めた蜂須賀家の居城跡で、重厚な木造の「鷲の門」や、徳島特産の美しい青石を積み上げた石垣が往時の面影を今に伝えている。街の中心にありながら穏やかな水堀と木々に包まれた城址公園をゆっくり歩き、徳島の歴史の旅をこれからもずっと心地よく開きたい。',
      surprise:
        '駅のすぐ裏手に、阿波青石と呼ばれる緑がかった美しい石材で組まれた石垣と静かな水堀が広がっている景観に思わず見惚れる。市民の憩いの場として親しまれる開放的な雰囲気の中で、阿波藩の豊かな歴史の厚みを身近に感じられる名園といえる。',
      hook: '鷲の門を後にしたら、新町川を渡り南西へ徒歩12分のO-ba\'sh cafe.で一息つこう。',
      f7_fragment: '蜂須賀家ゆかりの阿波青石の石垣と鷲の門が残る、駅そばの城址公園。',
      f7_full: '「徳島城跡（徳島中央公園）」の阿波青石の石垣と水堀を歩き、駅そばに広がる阿波二十五万石の歴史に触れた。',
      image_prompt:
        'Historic Tokushima Castle Park showing the reconstructed wooden Washinomon gate, green-tinted Awa blue-stone ramparts and calm moat, no text, no people.',
    },
    {
      name: 'O-ba\'sh cafe.（オーバッシュ カフェ）',
      spot_type: '休憩',
      description:
        '新町川沿いの東船場エリアに佇む人気のナチュラルカフェ。自家製の天然酵母パンや地元の旬の野菜を使った料理、香り高い珈琲が楽しめる。7:30〜17:00（L.O.16:30）、月曜定休。',
      address: '徳島県徳島市東船場町1-26',
      prefecture: '徳島県',
      municipality: '徳島市',
      lat: 34.070763,
      lng: 134.548113,
      clue: '徳島中央公園から新町川を渡って南西へ徒歩12分、川辺の風情が心地よい東船場の「O-ba\'sh cafe.」へ立ち寄ろう（7:30〜17:00、月曜休）。自家製の天然酵母パンとこだわりの珈琲が評判のカフェで、木の温もりあふれる空間が旅人を優しく迎えてくれる。香ばしい焼き立てパンの匂いに包まれながら、この先の阿波おどりと眉山の旅へ心をこれからもずっと穏やかにゆっくり整えたい。',
      surprise:
        'ひょうたん島と呼ばれる川に囲まれた徳島中心部の街並みに、こんなに温かく洗練された天然酵母パンのカフェが溶け込んでいるのが嬉しい。地元食材への愛情が伝わる丁寧なメニューと穏やかな接客に、徳島の街の暮らしの豊かさが感じられる。',
      hook: '珈琲で寛いだら、南西へ徒歩5分の阿波おどり会館へ向かおう。',
      f7_fragment: '新町川近くで自家製天然酵母パンと珈琲を味わう、東船場の人気カフェ。',
      f7_full: '東船場の「O-ba\'sh cafe.」で天然酵母パンと珈琲の温かな時間を過ごし、川に囲まれた徳島の街の魅力に触れた。',
      image_prompt:
        'Warm natural Japanese riverside bakery cafe interior with rustic wooden tables, crusty sourdough bread loaves and a ceramic cup of pour-over coffee, no text, no people.',
    },
    {
      name: '阿波おどり会館',
      spot_type: '見どころ',
      description:
        '400年以上の歴史を持つ「阿波おどり」を一年中体感できる徳島観光の拠点。昼夜の公演ホールや歴史展示、特産品館「あるでよ徳島」が揃う。9:00〜20:00（展示は17:00まで）、年4回休館。',
      address: '徳島県徳島市新町橋2-20',
      prefecture: '徳島県',
      municipality: '徳島市',
      lat: 34.070164,
      lng: 134.54499,
      clue: 'O-ba\'sh cafe.から南西へ徒歩5分、「阿波おどり会館」へ足を運ぼう（9:00〜17:00）。四百年の歴史を誇る徳島の伝統芸能と特産品の世界に触れたい。',
      surprise:
        'お盆の時期だけでなく一年を通して阿波おどりの軽快なお囃子や衣装、歴代の連の歴史に出会えるのが旅人にとって何よりありがたい。一階「あるでよ徳島」には鳴門金時やすだち、藍染など徳島ならではの逸品も並び、地域の文化を丸ごと体感できる。',
      hook: '会館を見学したら、そのまま5階の山麓駅から眉山ロープウェイで山頂へ上ろう。',
      f7_fragment: '四百年の歴史を誇る阿波おどりを一年中体感できる、徳島文化の拠点。',
      f7_full: '「阿波おどり会館」で徳島の伝統芸能・阿波おどりの歴史と魅力に触れ、地域に息づく熱い文化を体感した。',
      image_prompt:
        'Vibrant Japanese cultural hall showcase featuring woven amigasa dance hats, traditional drums and indigo-dyed textiles inside Awa Odori Kaikan, no text, no people.',
    },
    {
      name: '眉山ロープウェイ（あわぎん眉山ロープウェイ）',
      spot_type: '見どころ',
      description:
        '阿波おどり会館5階から徳島のシンボル「眉山」の山頂まで約6分で結ぶロープウェイ。山頂展望台からは徳島市街や吉野川河口、晴天時には淡路島まで一望できる。9:00〜17:30（4〜10月は21:00まで）。',
      address: '徳島県徳島市新町橋2-20',
      prefecture: '徳島県',
      municipality: '徳島市',
      lat: 34.070089,
      lng: 134.544938,
      clue: '阿波おどり会館の五階から「眉山ロープウェイ」に乗り、徳島のシンボル・眉山山頂の展望台へ上ろう（9:00〜17:30・夏季夜間運行あり）。約六分の空中散歩の末に山頂へ降り立つと、眼下には無数の川が流れる徳島の街並みと雄大な吉野川、遠く紀伊水道まで見渡す壮大なパノラマが広がる。万葉集にも詠まれた美しい山の風を受けながら、徳島の雄大な自然をこれからもずっと心深く胸に刻みたい。',
      surprise:
        '市街地の中心から直結するロープウェイでわずか数分上るだけで、これほど開放的な空と海の絶景に出会える都市は全国でも珍しい。街を囲む幾筋もの川が光を反射して輝く眺めを前にすると、徳島が水の都であることを実感させられる。',
      hook: '山頂から戻ったら、北北西へ徒歩8分の徳島ラーメン いのたに 本店で旅を結ぼう。',
      f7_fragment: '市街から約六分で山頂へ、吉野川と海を一望する徳島の絶景ロープウェイ。',
      f7_full: '「眉山ロープウェイ」で山頂へ上り、吉野川と徳島の街並みを見渡す壮大な風景に包まれて感動を味わった。',
      image_prompt:
        'Scenic aerial ropeway gondola ascending lush green Mount Bizan with sweeping panoramic view of Tokushima city rivers and distant blue sea, no text, no people.',
    },
    {
      name: '徳島ラーメン いのたに 本店',
      spot_type: '食事',
      description:
        '徳島ラーメンの名を全国に広めた昭和41年（1966年）創業の老舗。コクがありつつ後味の良い豚骨醤油スープに、甘辛く煮た豚バラ肉と生卵が相性抜群。10:30〜17:00（売切終了）、月曜休。',
      address: '徳島県徳島市西大工町4-25',
      prefecture: '徳島県',
      municipality: '徳島市',
      lat: 34.074448,
      lng: 134.54305,
      clue: '山麓へ下りて北北西へ徒歩8分、全国にその名を轟かせる「徳島ラーメン いのたに 本店」で旅を締めくくろう（10:30〜17:00、月曜休）。中太の麺に濃厚でまろやかな茶系の豚骨醤油スープ、甘辛く炊き上げた豚バラ肉を乗せ、お好みで生卵を落とすのが本場の流儀だ。地元客と旅人が交わる活気ある暖簾をくぐり、徳島の旅の締めくくりにふさわしい忘れがたい一杯をこれからもじっくり堪能したい。',
      surprise:
        '見た目ほど塩辛さや重たさはなく、豚バラ肉の甘辛い旨みと生卵のまろやかさが豚骨醤油スープと見事に溶け合って、ついご飯まで欲しくなる美味しさだ。気取らない老舗の雰囲気の中で味わう本場の一杯が、徳島散策の思い出を力強く結んでくれる。',
      hook: '',
      f7_fragment: '甘辛い豚バラ肉と生卵が豚骨醤油スープに絡む、徳島ラーメンの老舗名店。',
      f7_full: '老舗「徳島ラーメン いのたに 本店」で本場の一杯を味わい、城と踊りと眉山を巡った徳島の旅を力強く結んだ。',
      image_prompt:
        'Classic Japanese ramen counter serving a ceramic bowl of rich brown Tokushima ramen with sweet simmered pork belly, raw egg yolk and scallions, no text, no people.',
    },
  ],
};
