export default {
  slug: 'musa_hokkaido',
  station_order: 960,
  station: '武佐（北海道）',
  line: 'JR根室本線',
  area_name: '武佐',
  prefecture: '北海道',
  municipality: '釧路市',
  category: '自然・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '武佐の森', '八松庵', 'BakeryLABO', '釧路市'],
  style_genre: 'ink_and_watercolor',
  title: '武佐の原生林と人気ベーカリーをめぐる道',
  description:
    'JR武佐駅から樹齢400年超の巨木が残る武佐の森緑地、老舗の八松庵、手作り食堂の遊花、Bakery LABOへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Musa Station in Kushiro, ancient oak trees and wooden boardwalk in Musa Forest Park, a traditional soba shop, and an antique-styled pure coffee house, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び武佐を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '樹齢400年超の巨木が守る武佐の森緑地',
      subtext: '鉄道の防雪林として守られてきた自然林の木道で深呼吸した',
      badge: {
        code: 'musa_forest',
        name_ja: '防雪林の巨木',
        subtitle_en: 'Ancient Oak Grove',
        description:
          '武佐の森緑地を訪れ、樹齢400年を超えるミズナラと自然林の静けさに癒やされたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an ancient oak tree beside a wooden forest boardwalk on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '老舗そば処 八松庵の名物種込そば',
      subtext: 'コシのある更科そばと大ぶり海老天の温かな一杯を味わった',
      badge: {
        code: 'musa_hachishoan',
        name_ja: '更科そばの老舗',
        subtitle_en: 'Sarashina Soba',
        description:
          'そば処 八松庵 武佐店でコシのある更科そばと名物の種込そばを堪能したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a ceramic bowl of white sarashina soba noodles topped with golden shrimp tempura on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '無添加の手作りが光る食事＆喫茶 遊花',
      subtext: '隠れ家的な温かい空間で丁寧な手作り料理をゆっくり楽しんだ',
      badge: {
        code: 'musa_yuka',
        name_ja: '隠れ家の手作り味',
        subtitle_en: 'Handmade Kitchen',
        description:
          '食事＆喫茶 遊花で無添加・手作りの温かなランチを味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a handmade hamburg steak skillet and crusty homemade bread on a wooden table on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '煮玉子パンも人気の Bakery LABO',
      subtext: '緑ケ岡のパン屋さんで独創的な惣菜パンやデニッシュを選んだ',
      badge: {
        code: 'musa_bakery_labo',
        name_ja: '麦香るベーカリー',
        subtitle_en: 'Artisan Bakery Shop',
        description:
          'Bakery LABOで独創的な煮玉子パンや焼きたてのデニッシュを手にしたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden crusty croissants and artisan savory bread on a wooden baker tray on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'musa_hokkaido_complete',
    name_ja: '武佐・原生林と麦香の旅人',
    subtitle_en: 'Walker of Musa Forest and Bakery',
    description:
      'JR武佐駅から武佐の森緑地、八松庵、遊花、Bakery LABOまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an ancient oak tree, soba bowl, and golden bakery loaves on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR武佐駅',
      lat: 42.990605,
      lng: 144.425972,
      address: '北海道釧路市武佐4-56-2',
      description:
        '昭和63年（1988年）3月13日にJR北海道発足後のダイヤ改正で新設された、花咲線（釧路駅以東）で最も新しい無人駅（終日利用可）。駅名はアイヌ語「モサ（イラクサ）」由来。',
      clue:
        '昭和六十三年三月に新設され、花咲線の中で最も新しい歴史を持つ「JR武佐駅」から楽しい町歩きと散策を始めよう（終日利用可）。アイヌ語でイラクサを意味する「モサ」に由来する駅のホームを南東方向へと踏み出したら、まずは鉄道の防雪林として守り継がれてきた自然林「武佐の森緑地」を目指して、道東の爽やかな空気を感じながらのんびり楽しく元気に笑顔で力強く爽やかに明るく外へ歩き出そう。',
      hook: '駅から南東方向へ徒歩約5〜6分',
      f7_fragment: '昭和六十三年新設、花咲線（釧路以東）で最も新しい歴史を持つ無人駅。',
      f7_full: '「JR武佐駅」を後にし、鉄道防雪林の巨木と老舗喫茶を巡る武佐の街歩きを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '武佐の森緑地',
      lat: 42.98919,
      lng: 144.430246,
      address: '北海道釧路市武佐4-49',
      description:
        '鉄道防雪林として守られてきた約10haの自然林を活かした緑地公園（終日開放）。樹齢400年を超えるミズナラやハルニレの巨木、散策路・木製デッキ・ベンチを備える。',
      clue:
        '樹齢四百年を超えるミズナラやハルニレが茂る「武佐の森緑地」のベンチで心地よくゆっくり深呼吸しよう（終日開放）。次は南の「そば処 八松庵 武佐店」へ向かおう。',
      hook: '武佐4丁目から南方向へ徒歩約10分',
      f7_fragment: '鉄道防雪林として守られた樹齢400年超の巨木が茂る約10haの自然林公園。',
      f7_full: '「武佐の森緑地」の木道と巨木の下で深呼吸し、街に息づく森の力に癒やされた。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'そば処 八松庵 武佐店',
      lat: 42.98273,
      lng: 144.427421,
      address: '北海道釧路市武佐3-10-1',
      description:
        '地元で長年親しまれる老舗蕎麦店（11:00〜20:00、木曜休）。コシのある更科そばや、大ぶりの海老天がのる名物「種込そば」、ボリュームある丼ものが人気。',
      clue:
        '地元の方々に長年愛され続けている老舗の蕎麦店「そば処 八松庵 武佐店」で美味しい温かな一杯をゆっくりと味わおう（11:00〜20:00、木曜休）。程よいコシのある更科そばや大ぶりの海老天がのる名物「種込そば」、食べ応え抜群の丼ものはどれも心まで温まる美味しさだ。お腹が幸せにしっかり満たされたら、武佐3丁目から南西方向へ進み隠れ家のような名店「食事＆喫茶 遊花」へと向かおう。',
      hook: '武佐3丁目から南西方向へ徒歩約5〜8分',
      f7_fragment: 'コシのある更科そばや大ぶり海老天の「種込そば」が人気の老舗蕎麦店。',
      f7_full: '「そば処 八松庵 武佐店」で老舗の更科そばを堪能し、お腹も心も温まった。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: '食事＆喫茶 遊花',
      lat: 42.980835,
      lng: 144.423692,
      address: '北海道釧路市武佐2-13-27',
      description:
        '無添加・手作りにこだわる隠れ家的な食堂＆喫茶（11:00〜17:00・18:00以降要予約、日曜休）。日替わりランチや煮込みハンバーグ、自家製パンなどが評判。',
      clue:
        '無添加と手作りに真摯にこだわり続ける隠れ家的な名店「食事＆喫茶 遊花」の温かな雰囲気をゆっくり楽しく味わってみよう（11:00〜17:00、日曜休）。丁寧に仕込まれる日替わりランチや煮込みハンバーグ、香り豊かな自家製パンの評判に触れるだけで、街に暮らす人々の温かい食卓が思い浮かんでくる。穏やかな気持ちで一息ついたら、南側の緑ケ岡にある「Bakery LABO」へと向かおう。',
      hook: '武佐2丁目から南方向へ徒歩約6〜8分',
      f7_fragment: '無添加・手作りのランチや煮込みハンバーグ、自家製パンが評判の隠れ家喫茶。',
      f7_full: '「食事＆喫茶 遊花」の温かな佇まいに触れ、手作りの優しさを感じた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'Bakery LABO',
      lat: 42.985292,
      lng: 144.418897,
      address: '北海道釧路市緑ケ岡6-30-10',
      description:
        '武佐エリアからも近い緑ケ岡の道路沿いにある人気のパン屋さん（8:00〜18:00・売切次第終了、月・火曜休）。名物の煮玉子パンや各種デニッシュ、惣菜パンが揃う。',
      clue:
        '旅の締めくくりは、武佐エリアからもすぐ近くの道路沿いで評判を呼んでいる人気のパン屋さん「Bakery LABO」へ楽しく立ち寄ってみよう（8:00〜18:00、月火休）。天かすと煮玉子・青ネギが入った独創的な「煮玉子パン」をはじめ、香ばしいデニッシュや惣菜パンがずらりと並び旅のワクワク感を盛り上げてくれる。焼きたての幸せを手に入れて、武佐の街歩きを晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '名物の「煮玉子パン」や焼きたてデニッシュが人気の緑ケ岡のベーカリー。',
      f7_full: '「Bakery LABO」で香ばしい焼きたてパンを手に入れ、武佐の散歩を終えた。',
    },
  ],
};
