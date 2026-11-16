// scripts/areas/nukanan.mjs
// station_order: 890

export default {
  slug: 'nukanan',
  station_order: 890,
  station: '糠南',
  line: 'JR宗谷本線',
  area_name: '糠南・物置駅舎と簡易軌道遺構、原野の宿',
  prefecture: '北海道',
  municipality: '幌延町',
  category: '秘境物置駅と簡易軌道',
  budget_tier: 1,
  tags: ['北海道', '幌延町', '糠南駅', '秘境駅', '簡易軌道'],
  style_genre: 'ink_and_watercolor',
  title: '糠南・愛される物置駅と簡易軌道の遺構巡りへ',
  description:
    'ヨドコウ物置の待合室で有名な秘境「JR糠南駅」から、牧草地と川面が広がる「問寒別川（糠南の原野）」、古民家旅人宿「ウタラといかん」、町営軌道の起点を示す「問寒別簡易軌道 始点跡」、コンクリート橋脚が残る「問寒別簡易軌道 橋台遺構」を巡る徒歩ルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor illustration of Nukanan tiny wooden-plank railway stop with compact metal storage shed waiting hut amidst vast northern pasture, winding river bridge, cozy old timber guesthouse, and weathered concrete light-railway bridge piers, full bleed, no text, no letters.',
  question: '物置の待合室で知られる秘境・糠南駅から牧草地の川辺や簡易軌道の遺構を巡るなかで誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: 'ヨドコウ製物置「あぜくら」を待合室に転用した1両未満ホームの「JR糠南駅」',
      subtext: '小さな物置の待合室と板張りホームが、全国から鉄道ファンを惹きつける魅力を実感した。',
      badge: {
        code: 'nukanan_station',
        name_ja: '糠南・物置秘境駅の旅人',
        subtitle_en: 'Nukanan Secret Station Traveler',
        description: '物置待合室で有名な日本屈指の秘境駅・JR糠南駅に降り立った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a compact metal garden-shed waiting hut beside a short wooden plank railway platform amidst northern wild grasses, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: 'かつて渡船場が置かれた牧草地と清流の風景「問寒別川（糠南の原野）」',
      subtext: '広々とした牧草地と静かな川の眺めを歩きながら、道北の原野の大きさに感動した。',
      badge: {
        code: 'nukanan_river',
        name_ja: '糠南・原野と川の歩行者',
        subtitle_en: 'Meadow & River Walker of Nukanan',
        description: '問寒別川と糠南の牧草地が広がる原野の道を歩いた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a calm winding northern river passing through wide green pastureland beneath bright clouds, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '築古民家を改装し鉄道ファンや地元農家が語らう「ウタラといかん」',
      subtext: '素朴な古民家ゲストハウスの温かい佇まいに、旅人同士の交流の温もりを感じた。',
      badge: {
        code: 'nukanan_utara',
        name_ja: '糠南・古民家宿の旅人',
        subtitle_en: 'Guesthouse Traveler of Utara',
        description: '古民家宿「日本一しょぼいゲストハウス ウタラといかん」を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a weathered rustic wooden Hokkaido farmhouse guesthouse with warm glowing porch lantern, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '昭和四十六年廃止の殖民軌道が川を渡った「問寒別簡易軌道 橋台遺構」',
      subtext: '道道沿いに残るコンクリート橋脚に、かつて開拓の物資を運んだ小軌道の記憶を見た。',
      badge: {
        code: 'nukanan_bridge_ruin',
        name_ja: '糠南・簡易軌道の遺構守',
        subtitle_en: 'Light Railway Relic Witness',
        description: '問寒別簡易軌道の始点跡とコンクリート橋台遺構を巡った証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting moss-covered concrete railway bridge piers standing beside a quiet northern river bank, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nukanan_master',
    name_ja: '糠南・物置秘境駅と軌道遺構巡り',
    subtitle_en: 'Nukanan Secret Station & Relic Master',
    description: 'JR糠南駅から問寒別川、ウタラといかん、問寒別簡易軌道始点跡・橋台遺構までを巡った証',
    image_prompt:
      'A circular emblem combining compact shed railway stop, wide pasture river, rustic guesthouse and concrete bridge pier ruins, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR糠南駅',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '1955年12月2日「糠南仮乗降場」として開業、1987年4月1日駅昇格（終日開放・無料）。ヨドコウ製物置「あぜくら」を転用した待合室と1両未満の板張りホームが特徴の日本屈指の秘境駅。',
      address: '北海道天塩郡幌延町字問寒別746-3',
      lat: 44.920753,
      lng: 142.000692,
      clue:
        '昭和三十年十二月に仮乗降場として生まれ、ヨドコウ製物置「あぜくら」を転用した待合室と1両にも満たない板張りホームで全国に知られる日本屈指の秘境駅「JR糠南駅」から旅を始めよう（終日利用可）。周囲に広がる豊かな牧草地と澄み切った北の風を胸いっぱいに吸い込みながら小さな駅舎をそっと後にしたら、まずは牧草地の向こうをゆったりと流れる「問寒別川」方面を目指してのんびり歩き出そう。',
      surprise: '本当に小さな物置がそのまま待合室として置かれたホームの愛らしさと、原野の開放感に胸が躍った。',
      hook: '駅を出たら、牧草地が広がる「問寒別川」方面へ向かおう。',
      f7_fragment: 'ヨドコウ製物置の待合室と板張りホームが愛される日本屈指の秘境駅。',
      f7_full: '「JR糠南駅」の物置待合室に降り立ち、道北の原野と簡易軌道遺構の旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Nukanan Station tiny wooden railway platform with compact metal storage-shed waiting room amidst open Hokkaido grassland, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '問寒別川（糠南の原野）',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '天塩川水系の問寒別川と広大な牧草地が広がる秘境駅間の徒歩ルート（終日開放・無料）。かつて渡船場が置かれ、問寒別橋架設以前からの地域の交通の要衝として歴史を刻んできた。',
      address: '北海道天塩郡幌延町字問寒別1',
      lat: 44.920753,
      lng: 142.000692,
      clue:
        '「問寒別川（糠南の原野）」の道を歩こう（終日開放）。牧草地と清流が広がり、かつて渡船場もあった道北原野の雄大な風景だ。続いて古民家宿「ウタラといかん」へ。',
      surprise: '遮るもののない牧草地と静かに蛇行する問寒別川の風景が、秘境駅歩きの贅沢さを教えてくれた。',
      hook: '問寒別川の原野を抜けて、「日本一しょぼいゲストハウス ウタラといかん」へ向かおう。',
      f7_fragment: '牧草地の中を問寒別川が流れ、道北の原野の広がりを体感できる徒歩道。',
      f7_full: '「問寒別川（糠南の原野）」の雄大な牧草地を歩き、道北の空の広さに深呼吸した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Toikanbetsu River winding through lush green Nukanan pastureland with wooden railway bridge in distance, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '休憩',
      name: '日本一しょぼいゲストハウス ウタラといかん',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '築古民家を改装した旅人宿兼バーチャルオフィス（宿泊チェックイン制・要事前確認、時期により休業中の場合あり、素泊まり4,000円〜）。鉄道ファンやライダー、地元農家が交流するユニークな拠点。',
      address: '北海道天塩郡幌延町字問寒別127-11',
      lat: 44.91467,
      lng: 142.023831,
      clue:
        'ユニークな名で旅人に親しまれる古民家宿「日本一しょぼいゲストハウス ウタラといかん」に立ち寄って心地よく一息つこう（宿泊要予約・不定休）。築古民家を改装した素朴な旅人宿には、秘境駅を巡る鉄道ファンやツーリングのライダー、そして地元の農家たちが集い語らう温かな空気が流れている。集落の人の温もりと旅の楽しい語らいを感じたら、次は駅近くの「問寒別簡易軌道 始点跡」へと足を運ぼう。',
      surprise: '自虐的でありながら愛嬌のある宿名と、鉄道旅人や地域の人々をつなぐ古民家の温かさに和んだ。',
      hook: 'ウタラといかんを後にしたら、駅近くの「問寒別簡易軌道 始点跡」へ向かおう。',
      f7_fragment: '築古民家を改装し、鉄道ファンや旅人、地元農家が交流するユニークな宿。',
      f7_full: '「ウタラといかん」の素朴な古民家の佇まいに触れ、北の旅人宿の温もりを感じた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a charming weathered wooden Hokkaido farmhouse guesthouse with warm evening windows and bicycle parked outside, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '問寒別簡易軌道 始点跡（史跡標柱）',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '1929年（昭和4年）着工・1930年（昭和5年）開通の殖民軌道問寒別線（のち幌延町営軌道、1971年廃止）の起点・機関庫跡地に幌延町教育委員会が設置した史跡標柱（終日見学自由・無料）。',
      address: '北海道天塩郡幌延町字問寒別3',
      lat: 44.912446,
      lng: 142.027196,
      clue:
        '昭和五年に開通し、のちに幌延町営軌道として昭和四十六年まで地域の牛乳や農産物を運び続けた殖民軌道の記憶を伝える「問寒別簡易軌道 始点跡」を訪ねよう（見学自由・無料）。かつて起点や機関庫が置かれた場所には幌延町教育委員会による史跡標柱が今も静かに立ち、往時の鉄路の営みを大切に伝えている。開拓の歴史を胸に深く刻んだら、最後は道道沿いの「問寒別簡易軌道 橋台遺構」へ向かおう。',
      surprise: 'かつて問寒別駅から奥地へと小さな簡易軌道が延びていた歴史を、史跡標柱を通じて初めて知った。',
      hook: '問寒別簡易軌道 始点跡を見学したら、道道沿いの「問寒別簡易軌道 橋台遺構」へ向かおう。',
      f7_fragment: '昭和五年から四十六年まで活躍した町営簡易軌道の起点・機関庫跡を示す標柱。',
      f7_full: '「問寒別簡易軌道 始点跡」の標柱の前に立ち、開拓を支えた小軌道の記憶を辿った。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of a wooden heritage marker post standing beside quiet northern town square recalling bygone light-railway days, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '問寒別簡易軌道 橋台遺構',
      prefecture: '北海道',
      city: '幌延町',
      description:
        '道道583号上問寒問寒別停車場線沿い・問寒別川周辺に現存するコンクリート製の橋台・橋脚遺構（終日見学自由・無料）。かつて簡易軌道が川を渡っていた姿を静かに今へ残している。',
      address: '北海道天塩郡幌延町字問寒別583',
      lat: 44.912457,
      lng: 142.026336,
      clue:
        '旅の締めくくりは、道道583号沿いの問寒別川周辺にひっそりと残る「問寒別簡易軌道 橋台遺構」を見に行こう（見学自由・無料）。昭和四十六年の廃止から半世紀以上が過ぎた今も、簡易軌道が川を渡っていたコンクリート製の橋台や橋脚が豊かな草木の中に凛と佇み、開拓の物資や人々の夢を乗せて走った小さな軌道の記憶を力強く伝えている。北国の歴史の余韻を胸に刻み、糠南の旅を静かに結ぼう。',
      surprise: '半世紀以上前に廃止された簡易軌道のコンクリート橋台が今も原野に残り、開拓の息吹を伝えていた。',
      hook: '',
      f7_fragment: '廃止から半世紀を経て今も残る、問寒別簡易軌道のコンクリート橋台遺構。',
      f7_full: '「問寒別簡易軌道 橋台遺構」を見学し、北の鉄路と開拓の記憶を胸に旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of weathered concrete light-railway bridge abutments standing quietly amidst wild riverside grasses in northern Hokkaido, no text, no letters.',
    },
  ],
};
