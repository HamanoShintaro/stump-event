// scripts/areas/horonobe.mjs
// station_order: 891

export default {
  slug: 'horonobe',
  station_order: 891,
  station: '幌延',
  line: 'JR宗谷本線',
  area_name: '幌延・特急停車の街とトナカイ観光牧場',
  prefecture: '北海道',
  municipality: '幌延町',
  category: '北の鉄道とトナカイ牧場',
  budget_tier: 2,
  tags: ['北海道', '幌延町', '幌延駅', 'トナカイ観光牧場', '名林公園'],
  style_genre: 'ink_and_watercolor',
  title: '幌延・羽幌線分岐の街と日本希少トナカイ牧場へ',
  description:
    'かつて羽幌線が分岐した「JR幌延駅（ホロカル併設）」から、駅前旅館内の人気食堂「喰い処 菜味季」、伊勢の御分霊を祀る「幌延神社」、樹齢300年の天然木が残る「名林公園」、約65頭のトナカイに出会える「幌延町トナカイ観光牧場」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Horonobe Station town terminal, cozy local restaurant serving hearty bowl, dignified Horonobe Shrine torii, ancient trees of Meirin Park, and reindeer herd grazing in northern snow-free pasture, full bleed, no text, no letters.',
  question: 'かつて羽幌線が分岐した幌延の駅から市街地の名林公園、国内でも希少なトナカイ牧場を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: 'かつて羽幌線が分岐し、駅構内に「ホロカル」を併設する「JR幌延駅」',
      subtext: '駅構内のホロカルで秘境駅グッズや特産品を眺めながら、町の魅力を知れた。',
      badge: {
        code: 'horonobe_station',
        name_ja: '幌延・秘境駅玄関口の旅人',
        subtitle_en: 'Horonobe Junction Station Walker',
        description: '移住情報PR支援センター「ホロカル」併設のJR幌延駅を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a tidy northern town railway station facade with a warm coffee cup and secret-station goods motif, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '駅から徒歩二分、定食やラーメンで地元に愛される「喰い処 菜味季」',
      subtext: '駅近くの落ち着いた店内でいただく温かい定食とラーメンが体に染みた。',
      badge: {
        code: 'horonobe_namiki',
        name_ja: '幌延・駅前の温かな食卓',
        subtitle_en: 'Station Diner Guest of Namiki',
        description: 'JR幌延駅近くの喰い処 菜味季で地元の味を堪能した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of northern ramen and hearty set meal on a warm timber counter, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '樹齢百年から三百年の天然木と開拓記念碑が残る「名林公園」',
      subtext: '街なかにありながら三百年もの歴史を刻む巨木群の静かな迫力に圧倒された。',
      badge: {
        code: 'horonobe_meirin',
        name_ja: '幌延・三百年天然木の杜',
        subtitle_en: 'Ancient Forest Walker of Meirin',
        description: '樹齢300年の天然木が残る名林公園を散策した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting towering 300-year-old northern forest trees beside a carved stone pioneer monument, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '約65頭のトナカイを間近に見学・エサやりできる「幌延町トナカイ観光牧場」',
      subtext: '北国・幌延ならではの愛らしいトナカイたちの群れと触れ合えて感動した。',
      badge: {
        code: 'horonobe_reindeer',
        name_ja: '幌延・北のトナカイ仲間',
        subtitle_en: 'Reindeer Friend of Horonobe',
        description: '幌延町トナカイ観光牧場で約65頭のトナカイに出会った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a graceful antlered reindeer standing on northern green pasture beneath crisp blue sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'horonobe_master',
    name_ja: '幌延・秘境駅拠点とトナカイ巡り',
    subtitle_en: 'Horonobe & Reindeer Ranch Master',
    description: 'JR幌延駅から喰い処菜味季、幌延神社、名林公園、幌延町トナカイ観光牧場までを巡った証',
    image_prompt:
      'A circular emblem combining town railway station, antlered reindeer, ancient park trees and steaming ramen bowl, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR幌延駅（ホロカル併設）',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '1925年7月20日開業、かつて国鉄羽幌線も分岐した特急停車駅（終日開放・無料）。駅構内の移住情報PR支援センター「ホロカル」（9:00〜16:00、木曜・年末年始休）では秘境駅グッズや珈琲も提供。',
      address: '北海道天塩郡幌延町1条南1丁目1',
      lat: 45.014556,
      lng: 141.8461,
      clue:
        '大正十四年に開業し、かつて国鉄羽幌線も分岐した宗谷本線の重要な特急停車駅「JR幌延駅」から町歩きと散策を始めよう（終日利用可）。駅構内の移住情報PR支援センター「ホロカル」に並んだ楽しい秘境駅グッズや特産品をじっくり眺めながら旅の気分を高めて駅舎の外へ出たら、まずは歩いて二分ほどのビジネス旅館光栄荘内にある地元の人気食堂「喰い処 菜味季（なみき）」へとさっそく向かおう。',
      surprise: '秘境駅の町として知られる幌延の玄関口で、駅構内のホロカルに秘境駅グッズが揃うのが楽しかった。',
      hook: 'JR幌延駅を出たら、徒歩約二分の「喰い処 菜味季（なみき）」へ向かおう。',
      f7_fragment: 'かつて羽幌線も分岐し、秘境駅グッズの「ホロカル」を併設する特急停車駅。',
      f7_full: '「JR幌延駅」に降り立ち、秘境駅の町の中心街とトナカイ牧場を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Horonobe Station tidy northern Japanese town railway terminal under clear crisp sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '喰い処 菜味季（なみき）',
      prefecture: '北海道',
      city: '幌延町',
      description:
        'JR幌延駅から徒歩約2分、ビジネス旅館光栄荘内で営業する人気の食事処。昼11:30〜13:30・夜17:30〜22:30頃、日曜休（祝不定休）。定食・ラーメン・丼もの（1,000円前後〜）が好評。',
      address: '北海道天塩郡幌延町1条北1丁目9',
      lat: 45.015597,
      lng: 141.846228,
      clue:
        '駅徒歩二分の「喰い処 菜味季」へ入ろう（11:30〜13:30・17:30〜22:30頃、日曜休）。定食やラーメンが評判の人気店だ。食後は町の鎮守「幌延神社」へ。',
      surprise: '駅すぐ近くの気さくな店内で味わう丁寧な定食とラーメンの温かさに、旅の活力が湧いてきた。',
      hook: '菜味季でお腹を満たしたら、町の総鎮守「幌延神社」へ向かおう。',
      f7_fragment: '駅徒歩二分、ビジネス旅館光栄荘内で定食やラーメンを届ける人気食堂。',
      f7_full: '「喰い処 菜味季」で温かい食事をいただき、幌延の街歩きの元気をチャージした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Namiki cozy Japanese town diner interior with a hearty steaming ramen bowl and crispy fried定食 plate, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '幌延神社',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '明治時代に伊勢神宮の御分霊を奉斎して創建された幌延町の鎮守社（終日参拝自由・無料）。毎年7月15日に例祭が行われ、長く町民の信仰を集めてきた。',
      address: '北海道天塩郡幌延町宮園町104',
      lat: 45.019268,
      lng: 141.849932,
      clue:
        '明治時代に伊勢神宮の御分霊を奉斎して創建され、町民の暮らしと開拓の歴史を長く温かく見守り続けてきた鎮守「幌延神社」へ丁寧に参拝しよう（終日自由・無料）。住宅地のほど近くにありながら深い木立に包まれた境内は凛として静かで、北の町の豊かな歩みを穏やかに伝えてくれる。感謝を込めて静かに手を合わせたら、すぐ近くの樹齢三百年を誇る天然木の杜「名林公園」へとのんびり楽しく足を運ぼう。',
      surprise: '明治の開拓期に伊勢神宮の御分霊を祀って始まったという由緒と、清らかな境内の佇まいに心が整った。',
      hook: '幌延神社に参拝したら、天然木の杜「名林公園」へ向かおう。',
      f7_fragment: '明治時代に伊勢神宮の御分霊を奉斎して創建された幌延の鎮守社。',
      f7_full: '「幌延神社」の静かな社殿に手を合わせ、明治から続く町の歩みに思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Horonobe Shrine wooden torii gate and quiet sanctuary framed by tall northern evergreens, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '名林公園',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '樹齢100〜300年の天然木が残る市街地の樹木園（終日開放・無料）。園内には開拓記念碑が立ち、夏には地域の祭り「ほろのべ名林公園まつり」の会場としても賑わう。',
      address: '北海道天塩郡幌延町宮園町9',
      lat: 45.016461,
      lng: 141.851424,
      clue:
        '樹齢百年から三百年もの見事な天然木が今も街なかにそのまま残されている貴重な市街地樹木園「名林公園」をのんびり歩こう（終日開放・無料）。開拓当時の厳しい北国の姿を知りながら空へ枝を伸ばし続ける巨木たちと、園内に静かに佇む開拓記念碑を眺めていると、時を超えた自然の力強さがじんわり心に伝わってくる。森の清らかな空気を満喫したら、最後は「幌延町トナカイ観光牧場」へと向かおう。',
      surprise: '市街地の中に樹齢三百年クラスの天然木が群生し、開拓以前の森の姿を伝えていることに驚いた。',
      hook: '名林公園の巨木に癒されたら、沿岸バス等で「幌延町トナカイ観光牧場」へ向かおう。',
      f7_fragment: '樹齢100〜300年の天然木と開拓記念碑が残る市街地の貴重な樹木園。',
      f7_full: '「名林公園」の三百年を生きる天然木を見上げ、北の大地の生命力に感銘を受けた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Meirin Park sunlit woodland path beneath towering 300-year-old northern trees and carved stone monument, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '幌延町トナカイ観光牧場',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '約65頭のトナカイを飼育する国内でも希少な専門牧場（9:00〜16:30・売店〜17:00、月火・12/31〜1/5休、入場無料・エサやり500円）。JR幌延駅から沿岸バス約5分。',
      address: '北海道天塩郡幌延町字北進398-1',
      lat: 45.040852,
      lng: 141.861187,
      clue:
        '旅の締めくくりは、幌延駅からバスで約五分の場所に広がる日本でも希少な専門牧場「幌延町トナカイ観光牧場」へ足を運ぼう（9:00〜16:30、月火休、入場無料）。広大な牧草地では約六十五頭もの愛らしいトナカイがのびのびと暮らし、エサやり体験やレストランでの温かい食事、記念のお土産選びもたっぷり楽しめる。北国・幌延ならではの特別な出会いに笑顔になり、充実した旅を心地よく結ぼう。',
      surprise: '約六十五頭ものトナカイが間近で暮らす光景と、エサやり体験の愛らしさに思わず童心に返った。',
      hook: '',
      f7_fragment: '約65頭のトナカイを飼育しエサやりも楽しめる日本希少の専門牧場。',
      f7_full: '「幌延町トナカイ観光牧場」で愛らしいトナカイたちと出会い、幌延の旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Horonobe Reindeer Tourist Ranch rolling green pasture with gentle antlered reindeer beneath northern sky, no text, no letters.',
    },
  ],
};
