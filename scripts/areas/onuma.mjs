export default {
  slug: 'onuma',
  station_order: 644,
  station: '大沼',
  line: 'JR函館本線',
  area_name: '大沼・駒ヶ岳と湖畔の名物だんご',
  prefecture: '北海道',
  municipality: '七飯町',
  category: '自然とグルメ',
  budget_tier: 2,
  tags: ['北海道', '七飯町', '大沼駅', '大沼国定公園', '大沼だんご'],
  style_genre: 'pastel_chalk_morning',
  title: '大沼・秀峰駒ヶ岳と湖畔の名物だんごを歩く',
  description:
    'JR函館本線大沼駅から、濃厚なジャージー牛乳ソフトが人気の「山川牧場ミルクプラント」と森の隠れ家「caf\'e DIANE」、明治38年創業の元祖大沼だんご「沼の家」、湖畔の憩いの場「ポロト館 大沼公園店」、絶景の「大沼国定公園（大沼公園広場）」を巡る散策路。',
  eyecatch_prompt:
    'Morning pastel chalk and colored pencil illustration of Onuma Quasi-National Park in Hokkaido showing majestic jagged Mount Komagatake rising behind serene blue lakes dotted with small wooded islands and arched bridges, rustic dairy farm shop, cozy forest cafe and historic lakeside dango shop, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '秀峰駒ヶ岳を映す湖と明治から続く大沼だんごが繋がる大沼を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「山川牧場ミルクプラント」で、絞りたての特濃ソフトクリームを味わった瞬間',
      subtext:
        '大沼の豊かな牧草地が育むジャージー牛とホルスタイン牛のミルクのコクが、旅の始まりを彩った。',
      badge: {
        code: 'onuma_yamakawa',
        name_ja: '大沼・山川牧場の濃厚ミルクを嗜みし者',
        subtitle_en: 'Taster of Yamakawa Dairy',
        description:
          '山川牧場ミルクプラントを訪ね、大沼の自然が育んだ濃厚な牛乳とソフトクリームを味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a glass bottle of rich fresh milk and a tall creamy soft-serve ice cream cone against green pasture hills, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「沼の家」の折箱を開け、大沼の島々に見立てた一口サイズの元祖大沼だんごを見た瞬間',
      subtext:
        '明治三十八年創業の老舗が守り続ける素朴な正油と餡の味わいに、百二十年の歴史を感じた。',
      badge: {
        code: 'onuma_numanoya',
        name_ja: '大沼・明治創業の元祖大沼だんごを買いし者',
        subtitle_en: 'Taster of Onuma Dango',
        description:
          '沼の家を訪ね、大沼・小沼の島々を折箱に映した名物・元祖大沼だんごを味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a traditional wooden box filled with bite-sized Japanese mochi dumplings coated in sweet soy glaze and dark red bean paste, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「ポロト館 大沼公園店」で手作り体験や道南の食事を楽しみ、湖畔の賑わいに触れた瞬間',
      subtext:
        '大沼公園の散策拠点で味わう地元の恵みが、北海道の自然旅をいっそう豊かにしてくれた。',
      badge: {
        code: 'onuma_poroto',
        name_ja: '大沼湖畔・ポロト館で道南の味に触れし者',
        subtitle_en: 'Guest of Poroto Kan',
        description:
          'ポロト館 大沼公園店を訪ね、大沼湖畔の拠点で地元の食事や体験を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a cozy Hokkaido wooden lodge shop with handmade fresh caramel sweets and a warm bowl of local ramen near a forested lakeside, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「大沼国定公園」の小島を結ぶ橋を渡り、湖の向こうにそびえる駒ヶ岳を仰いだ瞬間',
      subtext:
        '新日本三景にも選ばれた雄大な山容と湖面のきらめきが、大沼歩きの最後を美しく飾った。',
      badge: {
        code: 'onuma_park',
        name_ja: '新日本三景・大沼国定公園を巡りし者',
        subtitle_en: 'Explorer of Onuma Park',
        description:
          '大沼国定公園を訪ね、小島を巡る橋の上から秀峰・北海道駒ヶ岳の絶景を仰ぎ見た証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting an arched red-tinted bridge connecting lush green lake islands with majestic peaked Mount Komagatake rising beyond, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'onuma_complete',
    name_ja: '大沼・秀峰駒ヶ岳と湖畔の名物を巡る旅人',
    subtitle_en: 'Walker of Onuma Lake',
    description:
      '山川牧場ミルクプラントからcaf\'e DIANE、沼の家、ポロト館 大沼公園店、大沼国定公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining peaked Mount Komagatake, a box of Onuma dango dumplings and a creamy dairy ice cream cone, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '山川牧場ミルクプラント',
      spot_type: '休憩',
      description:
        '大沼駅から北東へ延びる道沿いに構える牧場直営ショップ。自家牧場の特濃牛乳や濃厚なソフトクリーム、ローストビーフサンドが人気。4〜10月10:00〜17:00（11〜3月10:00〜16:00）、木曜定休。',
      address: '北海道亀田郡七飯町字大沼町628',
      prefecture: '北海道',
      municipality: '七飯町',
      lat: 41.971796,
      lng: 140.677624,
      clue: 'JR函館本線の大沼駅を出たら、道南の澄んだ空気を吸い込みながら牧場直営の「山川牧場ミルクプラント」へ足を運ぼう（4〜10月10:00〜17:00・冬期10:00〜16:00、木曜休）。ジャージー牛やホルスタイン牛の特濃ミルクを使った濃厚なソフトクリームや瓶入り牛乳が旅人を迎えてくれる。北海道らしい牧歌的な美味しさで喉を潤し、湖と山が織りなす大沼散策をこれからも心地よく始めたい。',
      surprise:
        '一口食べた瞬間に広がるフレッシュで濃厚なミルクのコクと、それでいて後味がすっと爽やかな甘さに思わず笑顔がこぼれる。広大な大沼の大地と牧場の空気を感じながら味わうソフトクリームは、都会では決して出会えない道南旅ならではの贅沢だ。',
      hook: '牧場の味を堪能したら、西へ徒歩9分の森のカフェ・caf\'e DIANEへ向かおう。',
      f7_fragment: '自家牧場の特濃ジャージー牛乳とソフトクリームが人気の、直営ショップ。',
      f7_full: '「山川牧場ミルクプラント」で絞りたての濃厚なソフトクリームを味わい、道南・大沼の豊かな散策を爽やかに始めた。',
      image_prompt:
        'Charming Hokkaido countryside dairy farm shop counter with a glass bottle of rich white milk and a swirling creamy soft-serve ice cream cone, no text, no people.',
    },
    {
      name: 'caf\'e DIANE（カフェ・ダイアン）',
      spot_type: '食事',
      description:
        '大沼の穏やかな森のそばに佇むアットホームなカフェレストラン。地元ブランド豚「ひこま豚」のトンテキや大沼牛のカレー、自家製スイーツが味わえる。10:00〜20:00、木曜定休。',
      address: '北海道亀田郡七飯町字大沼町501-54',
      prefecture: '北海道',
      municipality: '七飯町',
      lat: 41.974578,
      lng: 140.671853,
      clue: 'ミルクプラントから西へ徒歩9分、木立に囲まれたアットホームな「caf\'e DIANE」で昼食にしよう（10:00〜20:00、木曜休）。地元ブランド豚「ひこま豚」のジューシーなトンテキや大沼牛を使ったカレーなど、道南の恵みをふんだんに活かした丁寧な洋食が楽しめる。木の温もりが心地よい店内でしっかりお腹を満たし、いよいよ大沼湖畔の名所へと歩みをこれからも力強く進めたい。',
      surprise:
        '別荘地のような静かなロケーションにありながら、気さくで温かい雰囲気と食べ応えのある本格的な地元グルメに出会えるのが嬉しい。地元の「ひこま豚」の柔らかな肉質と旨みが旅の疲れを癒やし、湖畔散策へ向かう活力をしっかり与えてくれる。',
      hook: 'お腹が満たされたら、北へ徒歩13分の大沼公園駅前・元祖大沼だんご 沼の家へ向かおう。',
      f7_fragment: 'ひこま豚や大沼牛など道南の恵みを味わえる、森のそばの温かいカフェ。',
      f7_full: '大沼の「caf\'e DIANE」で地元ブランド豚や大沼牛の温かい食事を味わい、道南の大地が育む豊かな恵みに触れた。',
      image_prompt:
        'Cozy forest-side Hokkaido wooden cafe restaurant table serving a sizzling pork steak platter with fresh local vegetables and hot coffee, no text, no people.',
    },
    {
      name: '沼の家（元祖大沼だんご）',
      spot_type: '買い物',
      description:
        '明治38年（1905年）創業、大沼名物「大沼だんご」の元祖として親しまれる老舗和菓子店。大沼・小沼に浮かぶ島々を表現したひと口サイズのお団子が名物。8:30〜18:00（売切終了）、無休。',
      address: '北海道亀田郡七飯町字大沼町145',
      prefecture: '北海道',
      municipality: '七飯町',
      lat: 41.981612,
      lng: 140.670648,
      clue: 'DIANEから北へ徒歩13分、明治三十八年創業の「沼の家」へ立ち寄ろう（8:30〜18:00）。大沼の島々を折箱に映した元祖大沼だんごを手土産に選びたい。',
      surprise:
        '串に刺さっていない柔らかな一口大のお団子が、折箱の中で湖面に見立てた正油たれと島に見立てた餡・胡麻に寄り添う姿が実に風流だ。保存料を使わず毎朝練り上げられる素朴で優しい味わいに、明治の開拓期から旅人に愛されてきた歴史の温もりを感じる。',
      hook: 'だんごを手にしたら、大沼公園広場そばのポロト館 大沼公園店へ向かおう。',
      f7_fragment: '明治三十八年創業、大沼の島々を折箱に映した元祖大沼だんごの老舗。',
      f7_full: '明治創業の老舗「沼の家」で大沼の島々に見立てた元祖大沼だんごを手に取り、湖畔の伝統ある味わいに触れた。',
      image_prompt:
        'Traditional Japanese confectionery shop wooden counter displaying an open wood-shaving box of glossy soy-glazed and red-bean bite-sized Onuma dango, no text, no people.',
    },
    {
      name: 'ポロト館 大沼公園店',
      spot_type: '休憩',
      description:
        '大沼国定公園の広場すぐそばに構える食事・体験・お土産の観光拠点。自家製アイスクリームや生キャラメルなどの乳製品スイーツ、地元食材の食事が楽しめる。9:00〜15:00頃（季節変動あり）、無休。',
      address: '北海道亀田郡七飯町大沼町1023-19',
      prefecture: '北海道',
      municipality: '七飯町',
      lat: 41.983191,
      lng: 140.672839,
      clue: '沼の家から大沼公園方面へ歩いて数分、湖畔の広場すぐそばに佇む「ポロト館 大沼公園店」でひと息つこう（9:00〜15:00頃・季節変動あり）。自家製アイスクリームや生キャラメル、道南の恵みを活かした軽食が楽しめる大沼散策の心強い拠点だ。木のぬくもりある空間で甘味や温かい一杯を味わいながら、目の前に広がる大沼国定公園の絶景散歩へこれからもずっと楽しく豊かに心地よく備えたい。',
      surprise:
        '「ポロト」はアイヌ語で「大きな湖」を意味し、その名の通り大沼の自然とともに歩んできた体験・食の拠点として観光客や地元の家族連れに親しまれている。',
      hook: 'ポロト館で一息ついたら、すぐそばの大沼国定公園（大沼公園広場）を歩いて旅を結ぼう。',
      f7_fragment: '大沼公園広場のすぐそばで、道南の味覚と体験を楽しめる湖畔の拠点。',
      f7_full: '大沼公園そばの「ポロト館 大沼公園店」で道南の味覚に触れ、湖畔散策の楽しいひとときを過ごした。',
      image_prompt:
        'Cozy wooden Hokkaido lakeside lodge cafe in Onuma Park serving handmade ice cream and fresh local treats overlooking forested shore, no text, no people.',
    },
    {
      name: '大沼国定公園（大沼公園広場）',
      spot_type: '見どころ',
      description:
        '活火山・北海道駒ヶ岳の噴火によって生まれた大小の湖と126もの小島が織りなす新日本三景の一つ。湖上の小島を橋で結びながら散策でき、四季折々の雄大な絶景が広がる。散策自由・無料。',
      address: '北海道亀田郡七飯町字大沼町1023-1',
      prefecture: '北海道',
      municipality: '七飯町',
      lat: 41.985602,
      lng: 140.671056,
      clue: 'ポロト館からすぐ北側に広がる新日本三景「大沼国定公園（大沼公園広場）」を歩いて旅を締めくくろう（散策自由・無料）。駒ヶ岳の噴火が生んだ湖に百二十六もの小島が浮かび、それらを可愛らしい橋で結びながら巡る遊歩道が整備されている。澄んだ湖面に逆さに映る秀峰・駒ヶ岳の優美な姿を仰ぎ見ながら、牧場と名物だんごと自然を巡った大沼の旅をこれからもずっと心温かく清々しく美しく結びたい。',
      surprise:
        '橋を一つ渡るごとに小島の木々の間から駒ヶ岳の角度が少しずつ変わり、まるで日本画の巻物の中を歩いているような美しさに心を奪われる。朝の牧場から名物だんご、そしてこの雄大な湖の絶景へと繋がる道南の魅力がすべて凝縮された場所といえる。',
      hook: '',
      f7_fragment: '秀峰・駒ヶ岳と百二十六の小島を橋で結ぶ、新日本三景の大沼国定公園。',
      f7_full: '「大沼国定公園」の小島を結ぶ橋を渡って駒ヶ岳の絶景を仰ぎ、道南の自然と名物を巡った大沼の旅を清らかに結んだ。',
      image_prompt:
        'Breathtaking scenic view of Onuma Quasi-National Park with arched wooden bridges connecting small tree-covered islands and snow-dusted peaked Mount Komagatake across calm lake, no text, no people.',
    },
  ],
};
