export default {
  slug: 'nodaoi',
  station_order: 999,
  station: '野田生',
  line: 'JR函館本線',
  area_name: '野田生・八雲町',
  prefecture: '北海道',
  municipality: '八雲町',
  category: '自然・歴史',
  budget_tier: 2,
  tags: ['函館本線', '野田生', '野田生神社', '野田生公園', '幸村農園'],
  style_genre: 'ink_and_watercolor',
  title: '野田生の鎮守と里山の直売所を巡る道',
  description:
    'JR野田生駅から野田生郵便局、開拓者ゆかりの野田生神社、スイレンの池が美しい野田生公園を経て幸村農園直売所へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nodaoi Station amid tranquil rural meadows, a pioneering settler Shinto shrine torii, water lilies blooming on a countryside park pond, and fresh green leeks at a farm stand, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び野田生を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '集落中心部の 野田生郵便局',
      subtext: 'かつて駅前商店が並んだ地域の暮らしと道道沿いの風景を感じた',
      badge: {
        code: 'nodaoi_post',
        name_ja: '野田生集落の窓口',
        subtitle_en: 'Nodaoi Post Office',
        description:
          '野田生郵便局の前を訪れ、のどかな道道沿いに息づく地域の暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet rural roadside postbox framed by green Hokkaido meadows on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '開拓者の祈りを継ぐ 野田生神社',
      subtext: '明治の入植者が故郷から御神体を奉遷した歴史ある社で手を合わせた',
      badge: {
        code: 'nodaoi_shrine',
        name_ja: '開拓奉遷の野田生神社',
        subtitle_en: 'Nodaoi Shrine',
        description:
          '野田生神社に参拝し、明治期の開拓者たちが築いた信仰の絆に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a historic timber Shinto torii gate surrounded by tall pioneer-era trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'スイレンが咲く池の 野田生公園',
      subtext: '自然の地形を活かした緑豊かな農村公園で穏やかな風を感じた',
      badge: {
        code: 'nodaoi_park',
        name_ja: 'スイレン池の農村公園',
        subtitle_en: 'Nodaoi Park Pond',
        description:
          '野田生公園を訪れ、スイレンが咲く大きな池と里山の静かな風景に癒やされたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of delicate pink and white water lilies floating on a tranquil countryside park pond on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '特産ながねぎが並ぶ 幸村農園 直売所',
      subtext: '朝採りの新鮮な地元野菜に出会い八雲の豊かな大地の恵みを感じた',
      badge: {
        code: 'nodaoi_yukimura',
        name_ja: '野田生の朝採り野菜',
        subtitle_en: 'Yukimura Farm Stand',
        description:
          '幸村農園 直売所を訪れ、特産のながねぎや朝採り野菜の瑞々しさに触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of crisp fresh green leeks and seasonal harvest vegetables in a rustic farm stand crate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nodaoi_complete',
    name_ja: '野田生・開拓と里山の旅人',
    subtitle_en: 'Explorer of Nodaoi Village',
    description:
      'JR野田生駅から野田生郵便局、野田生神社、野田生公園、幸村農園直売所まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a pioneer shrine torii, blooming water lilies on a pond, and fresh farm leeks on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR野田生駅',
      lat: 42.216958,
      lng: 140.376263,
      address: '北海道二海郡八雲町野田生1',
      description:
        'かつて機関庫が置かれた歴史を持つJR函館本線の無人駅（24時間利用可）。周囲の丘陵には縄文時代の遺跡も分布し、のどかな田園風景に囲まれた静かな旅の起点。',
      clue:
        'かつて機関庫が置かれた歴史を持ち、周囲の丘陵には縄文時代の遺跡も分布する「JR野田生駅」から、のどかな里山と開拓の歴史を巡る散歩を始めよう（終日開放）。広々とした田園風景に抱かれた素朴な無人駅を出て北東方向へと外へ踏み出したら、まずはかつて駅前商店が並んでいた集落の中心部に位置する「野田生郵便局」を目指して、澄んだ空気と爽やかな風を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から北東方向へ徒歩約5分',
      f7_fragment: 'かつて機関庫が置かれ、周囲に縄文遺跡も分布するのどかな田園の無人駅。',
      f7_full: '「JR野田生駅」を後にし、開拓の社と里山の公園を巡る穏やかな散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '野田生郵便局',
      lat: 42.218428,
      lng: 140.378879,
      address: '北海道二海郡八雲町野田生251',
      description:
        '野田生駅から徒歩約5分、道道沿いの集落中心部に位置する郵便局（窓口平日9:00〜17:00、土日祝休）。地域の暮らしを長年にわたり支え続けてきた素朴な拠点。',
      clue:
        '道道沿いの集落中心部に立つ「野田生郵便局」の前を歩き、かつての駅前商店の面影と地域の暮らしを感じよう（平日9:00〜17:00）。次は東の「野田生神社」へ向かおう。',
      hook: '東方向へ徒歩約2分',
      f7_fragment: '道道沿いの野田生集落中心部に位置し、地域の暮らしを支える郵便局。',
      f7_full: '「野田生郵便局」の前を通り過ぎ、ほど近い開拓の鎮守社へと歩みを進めた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '野田生神社',
      lat: 42.217905,
      lng: 140.379236,
      address: '北海道二海郡八雲町野田生206',
      description:
        '明治期に入植した開拓者たちが故郷から御神体を奉遷して創建した歴史ある鎮守社（参拝自由・無休）。厳しい北の大地を開いた先人たちの信仰と誇りを静かに物語る。',
      clue:
        '明治期に入植した開拓者たちが遠く故郷から御神体を奉遷して創建した歴史ある鎮守「野田生神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。豊かな木立に守られた静かな境内には、厳しい北の大地を力を合わせて切り拓いた先人たちの強い思いが今も静かに息づいている。清らかな空気の中で旅の無事を祈願したら、南西方向に広がる緑豊かな「野田生公園」へと軽やかに楽しく歩いて向かおう。',
      hook: '南西方向へ徒歩約16分',
      f7_fragment: '明治の開拓者が故郷から御神体を奉遷して創建した歴史ある鎮守社。',
      f7_full: '「野田生神社」の境内で明治の開拓者に手を合わせ、緑の農村公園へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '野田生公園',
      lat: 42.208121,
      lng: 140.372413,
      address: '北海道二海郡八雲町野田生674-2',
      description:
        '自然の地形を活かして整備された緑豊かな農村公園（入園自由・パークゴルフ場等は季節営業）。園内にはスイレンが咲く大きな池があり、里山の穏やかな時間を過ごせる。',
      clue:
        '自然の地形を巧みに活かして整備された緑豊かな農村公園「野田生公園」をゆっくりと歩いて散策しよう（入園自由）。園内には初夏から夏にかけてスイレンの花が美しく咲く大きな池があり、穏やかな水面に映る青い空と周囲の深い緑が旅人の心を優しく解きほぐしてくれる。里山ならではののどかな景色と涼やかな風に心まで癒やされたら、北東方向の「幸村農園 直売所」へとゆっくりと軽やかに足を延ばそう。',
      hook: '北東方向へ徒歩約14分',
      f7_fragment: 'スイレンが咲く大きな池と緑の芝生が広がり、里山の自然を楽しめる農村公園。',
      f7_full: '「野田生公園」のスイレン池のほとりで寛ぎ、大地の恵みが待つ直売所へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '幸村農園 直売所',
      lat: 42.216386,
      lng: 140.379008,
      address: '北海道二海郡八雲町野田生161-1',
      description:
        '野田生地区で採れた朝採りの新鮮野菜が並ぶ直売所（9:00頃〜17:00頃・品切れ次第終了、収穫期の季節営業）。特産の「ながねぎ」など地元ならではの旬の恵みが購入できる。',
      clue:
        '旅の締めくくりは、野田生地区で採れた朝採りの新鮮野菜が並ぶ「幸村農園 直売所」へ立ち寄ってみよう（収穫期9:00頃〜17:00頃・品切れ次第終了、午前中推奨）。特産の瑞々しい「ながねぎ」をはじめ、八雲の豊かな大地が育てた旬の恵みに出会える直売所は、里山歩きの最後を飾る嬉しい立ち寄り処だ。大地の恵みと開拓の記憶を胸いっぱいに抱いて、野田生の散歩を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: '特産の「ながねぎ」など野田生地区の朝採り新鮮野菜が並ぶ季節営業の直売所。',
      f7_full: '「幸村農園 直売所」で野田生の大地の恵みに触れ、里山の散歩を終えた。',
    },
  ],
};
