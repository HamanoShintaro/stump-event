export default {
  slug: 'yamasaki_hokkaido',
  station_order: 1003,
  station: '山崎',
  line: 'JR函館本線',
  area_name: '山崎海岸・八雲町',
  prefecture: '北海道',
  municipality: '八雲町',
  category: '自然・歴史',
  budget_tier: 1,
  tags: ['函館本線', '山崎', '山崎浜公園', '山崎浜神社', '噴火湾'],
  style_genre: 'ink_and_watercolor',
  title: '噴火湾の潮風と山崎の浜辺を巡る静かな旅',
  description:
    '国道5号と噴火湾に挟まれたJR山崎駅から地域の安井商店、旧山崎小学校前、海辺の山崎浜公園を経て海岸沿いの山崎浜神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of quiet JR Yamasaki Station beside coastal Uchiura Bay, a nostalgic rural country shop, a seaside park overlooking calm waves, and a small red Shinto torii gate facing the ocean, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び山崎を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '国道沿いの地域商店 安井商店',
      subtext: '駅近くの食料品や日用品を扱う昔ながらの商店の佇まいを感じた',
      badge: {
        code: 'yamasaki_yasui_shop',
        name_ja: '山崎の街角商店',
        subtitle_en: 'Yasui Country Store',
        description:
          '安井商店の前を訪れ、山崎集落の穏やかな日常を支える個人商店の風景に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tidy rural roadside general store storefront with warm wooden signage on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '地域の記憶を残す 旧山崎小学校',
      subtext: 'のどかな農村風景に調和する学び舎跡を公道から眺めて集落の歩みを感じた',
      badge: {
        code: 'yamasaki_school',
        name_ja: '山崎集落の旧校舎',
        subtitle_en: 'Former Yamasaki School',
        description:
          '旧山崎小学校の前を歩き、2021年閉校まで地域を見守り続けた学び舎の風景に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a rural Hokkaido schoolhouse framed by green countryside hills and open sky on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '噴火湾に面した 山崎浜公園',
      subtext: '潮風を感じながら対岸まで広がる海の景色をゆったりと眺めた',
      badge: {
        code: 'yamasaki_hama_park',
        name_ja: '潮風薫る山崎浜公園',
        subtitle_en: 'Yamasakihama Seaside Park',
        description:
          '山崎浜公園を訪れ、噴火湾の潮風と美しい海辺の眺望を満喫したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of grassy coastal park dunes overlooking gentle blue waves of Uchiura Bay on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '海を望む赤い鳥居 山崎浜神社',
      subtext: '漁業と集落の安全を見守り続けてきた海辺の社で静かに手を合わせた',
      badge: {
        code: 'yamasaki_hama_shrine',
        name_ja: '海辺の赤い鳥居',
        subtitle_en: 'Yamasakihama Shrine',
        description:
          '山崎浜神社に参拝し、海を背景に佇む赤い鳥居の前で旅の無事を祈ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a vibrant vermilion Shinto torii gate standing beside crashing coastal waves and distant mountains on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'yamasaki_hokkaido_complete',
    name_ja: '山崎・噴火湾と浜辺の旅人',
    subtitle_en: 'Explorer of Yamasaki Coast',
    description:
      'JR山崎駅から安井商店、旧山崎小学校、山崎浜公園、山崎浜神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a quiet seaside train station, coastal park waves, and a vermilion beachside torii gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR山崎駅',
      lat: 42.31433,
      lng: 140.274357,
      address: '北海道二海郡八雲町山崎1',
      description:
        '国道5号と噴火湾に挟まれた静かな無人駅（常時開放）。かつて山崎地区の生活・物流を支えてきた素朴な佇まいを今に残し、海辺の集落散歩の穏やかな起点となっている。',
      clue:
        '国道5号と噴火湾の美しい海に挟まれた静かな無人駅「JR山崎駅」から、潮風薫る海辺の集落散歩を始めよう（終日開放）。かつて山崎地区の生活と物流を支えてきた素朴な佇まいの駅舎を後に、北方向へと外へ踏み出したら、まずは国道沿いに建つ地域密着の個人商店「安井商店」を目指して、心地よい潮の香りと長閑な田園の気配を胸いっぱいに感じながら軽やかな足取りで晴れやかに元気よく歩き出そう。',
      hook: '駅から北方向へ徒歩約2分',
      f7_fragment: '国道5号と噴火湾に挟まれ、素朴な佇まいを残す海辺の無人駅。',
      f7_full: '「JR山崎駅」を後にし、集落の街並みから噴火湾の浜辺を巡る散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '安井商店',
      lat: 42.315634,
      lng: 140.273721,
      address: '北海道二海郡八雲町山崎142',
      description:
        'JR山崎駅から徒歩約2分の国道沿いに建つ、地域に根差した食料品・日用品の個人商店（営業時間は要現地確認）。小さな集落の暮らしを支えてきた昔ながらの店構えが残る。',
      clue:
        '国道沿いに建つ地域密着の個人商店「安井商店」の前をゆっくり歩き、山崎集落の穏やかな暮らしを感じよう（営業時間要確認）。次は北西の「山崎小学校」前へ向かおう。',
      hook: '北西方向へ徒歩約4分',
      f7_fragment: '山崎駅から徒歩約2分の国道沿いに建ち、地域の暮らしを支える個人商店。',
      f7_full: '「安井商店」の前を通り過ぎ、山崎の集落を見守る学び舎へと歩を進めた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '旧山崎小学校',
      lat: 42.317545,
      lng: 140.27256,
      address: '北海道二海郡八雲町山崎375',
      description:
        '令和3年（2021年）3月末をもって閉校し、八雲小学校へ統合された地域の学び舎跡（敷地外からの外観見学のみ）。周囲ののどかな農村風景と調和した落ち着いた佇まいが印象的。',
      clue:
        '令和三年三月の閉校まで山崎集落の中心を長年にわたり見守り続けてきた「旧山崎小学校」の前を、公道から静かに歩いて通り過ぎよう（敷地外見学のみ）。周囲に広がる長閑な農村風景と穏やかに調和した校舎の佇まいを眺めていると、北海道の海辺の集落に根付いてきた温かな暮らしの記憶が静かに伝わってくる。集落の美しい風景を心に留めたら、南方向の海辺に広がる「山崎浜公園」へと歩を進めよう。',
      hook: '南方向へ徒歩約12分',
      f7_fragment: '2021年閉校まで山崎集落の中心を見守り続けた地域の学び舎跡。',
      f7_full: '「旧山崎小学校」の前から長閑な風景を眺め、噴火湾の潮風が待つ海辺へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '山崎浜公園',
      lat: 42.310765,
      lng: 140.27513,
      address: '北海道二海郡八雲町山崎61-1',
      description:
        '駅から南へ徒歩約5〜6分、噴火湾の海辺に面して整備された海浜公園（常時開放・無休）。心地よい潮風を感じながら、水平線の向こうに対岸の景色をゆったりと望める。',
      clue:
        '噴火湾の穏やかな海辺に面して整備された「山崎浜公園」で心地よい潮風に吹かれながら一息つこう（常時開放）。目の前に大きく広がる内浦湾の青い水面と、晴れた日には対岸まで見渡せる雄大な眺望は、海沿いの小さな駅旅ならではの爽やかなご褒美だ。寄せては返す波の音に耳を傾けて心をすっかりリフレッシュしたら、北の海岸沿いに佇む地域の鎮守「山崎浜神社」へと海を見ながら軽やかに歩を進めよう。',
      hook: '北方向へ徒歩約14分',
      f7_fragment: '噴火湾の海辺に面し、潮風を感じながら対岸の景色を望める海浜公園。',
      f7_full: '「山崎浜公園」で噴火湾の波音と潮風に癒やされ、最後の海辺の社へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '山崎浜神社',
      lat: 42.320126,
      lng: 140.276095,
      address: '北海道二海郡八雲町山崎2',
      description:
        '海を背景に赤い鳥居と社殿が佇む、山崎地区の漁業と暮らしを見守ってきた鎮守の社（参拝自由・無人社）。海岸線と線路の近くにあり、道南の漁村ならではの風情を湛える。',
      clue:
        '旅の締めくくりは、青い海を背景に鮮やかな赤い鳥居と社殿が佇む地域の鎮守「山崎浜神社」へ静かに手を合わせてゆっくり参拝しよう（参拝自由）。山崎地区の漁業の安全と人々の暮らしを長年にわたり見守り続けてきた海辺のお社は、波音と潮風に包まれた道南ならではの趣あふれる聖域だ。海と集落の穏やかな祈りを胸いっぱいに刻んで、山崎の静かな海辺散歩を晴れやかな気持ちで明るく締めくくろう。',
      hook: '',
      f7_fragment: '海を背景に赤い鳥居が佇み、山崎の漁業と暮らしを見守る海辺の鎮守社。',
      f7_full: '「山崎浜神社」の海を望む赤い鳥居の前で旅の無事を祈り、山崎の旅を終えた。',
    },
  ],
};
