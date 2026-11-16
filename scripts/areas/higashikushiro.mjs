export default {
  slug: 'higashikushiro',
  station_order: 959,
  station: '東釧路',
  line: 'JR根室本線',
  area_name: '貝塚・材木町',
  prefecture: '北海道',
  municipality: '釧路市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '釧網本線', '東釧路貝塚', '虎吉', '泰心寺'],
  style_genre: 'ink_and_watercolor',
  title: '縄文の貝塚と材木町の高台をめぐる旅',
  description:
    'JR東釧路駅から貝塚エリアの買い物・つけ麺虎吉、北海道最大規模の国指定史跡・東釧路貝塚公園、材木町の泰心寺へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Higashi-Kushiro Station where two railway lines meet, a grassy hilltop park preserving the Jomon shell mound ruins, and a quiet temple in Zaimokucho, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び東釧路を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '貝塚の暮らしを支えるコープさっぽろ',
      subtext: '地元に密着したお店で北海道らしい食品や旅のお供を選んだ',
      badge: {
        code: 'higashikushiro_coop',
        name_ja: '貝塚の買い物処',
        subtitle_en: 'Kaizuka Market',
        description:
          'コープさっぽろ 貝塚店で北海道の食材や旅のお供を調達したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of fresh Hokkaido dairy milk and baked goods in a shopping basket on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '濃厚な一杯が評判のつけ麺・拉麺 虎吉',
      subtext: '地元屈指の人気店でこだわり抜いた熱い麺に舌鼓を打った',
      badge: {
        code: 'higashikushiro_torakichi',
        name_ja: '濃厚麺の活力',
        subtitle_en: 'Rich Tsukemen Bowl',
        description:
          'つけ麺・拉麺 虎吉で地元屈指の人気を誇る濃厚な一杯を堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of ceramic bowls of rich tsukemen dipping broth and thick noodles on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '北海道最大の国指定史跡・東釧路貝塚',
      subtext: '縄文前期の祭祀跡や高台の展望から悠久の時に思いを馳せた',
      badge: {
        code: 'higashikushiro_kaizuka',
        name_ja: '縄文貝塚の記憶',
        subtitle_en: 'Jomon Shell Mound',
        description:
          '国指定史跡・東釧路貝塚公園を訪れ、縄文時代の壮大な営みに触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of spiral sea shells and a grassy Jomon hilltop shrine pavilion on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '材木町の高台に佇む静かな泰心寺',
      subtext: '穏やかな境内で歴史ある釧路の散策を静かに締めくくった',
      badge: {
        code: 'higashikushiro_taishinji',
        name_ja: '高台古刹の静寂',
        subtitle_en: 'Hilltop Temple Calm',
        description:
          '泰心寺を訪れ、材木町の高台で穏やかな祈りとともに散策を結んだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet Japanese temple tiled roof framed by pine branches on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'higashikushiro_complete',
    name_ja: '東釧路・縄文と鉄道の旅人',
    subtitle_en: 'Explorer of Higashi-Kushiro Jomon Ruins',
    description:
      'JR東釧路駅から虎吉、国指定史跡東釧路貝塚公園、泰心寺まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a railway junction, Jomon sea shells, and a quiet temple roof on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR東釧路駅',
      lat: 42.995452,
      lng: 144.411544,
      address: '北海道釧路市貝塚2-23',
      description:
        '大正14年（1925年）3月16日に信号場として開業し昭和3年に駅へ昇格（終日利用可）。根室本線と釧網本線が分岐する交通の要衝となっている。',
      clue:
        '大正十四年三月に信号場として開業し、今は根室本線と釧網本線が分岐する鉄道の要衝となっている「JR東釧路駅」から楽しい町歩きと散策を始めよう（終日利用可）。網走方面と根室方面へ鉄路が分かれる旅情あふれる無人駅を北西方向へと外へ踏み出したら、まずは貝塚エリアの買い物拠点「コープさっぽろ 貝塚店」を目指して、道東の風を感じながらのんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から北西方向へ徒歩約2分',
      f7_fragment: '根室本線と釧網本線が分岐する、旅情あふれる貝塚地区の鉄道の要衝。',
      f7_full: '「JR東釧路駅」の分岐点に旅情を感じつつ、縄文の貝塚を巡る東釧路の旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'コープさっぽろ 貝塚店',
      lat: 42.996247,
      lng: 144.410474,
      address: '北海道釧路市貝塚3-2-28',
      description:
        '貝塚エリアの住民の日常を支えるスーパーマーケット（9:00〜21:00、無休・元日等除く）。北海道ならではの食品や飲み物、日用品が幅広く揃う。',
      clue:
        '貝塚エリアの買い物を支える「コープさっぽろ 貝塚店」で飲み物や北海道らしいお土産を選ぼう（9:00〜21:00）。次はすぐ北の「つけ麺・拉麺 虎吉」へと向かおう。',
      hook: '北方向へ徒歩約2分',
      f7_fragment: '北海道ならではの食品や飲み物が幅広く揃う、貝塚エリアの買い物拠点。',
      f7_full: '「コープさっぽろ 貝塚店」で飲み物や地元のおやつを選び、次のグルメへ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'つけ麺・拉麺 虎吉',
      lat: 42.99726,
      lng: 144.410214,
      address: '北海道釧路市貝塚3-4-20',
      description:
        '濃厚なつけ麺やラーメンで知られる地元屈指の人気店（11:30〜20:00・平日昼のみ営業の場合あり、月曜・第3火曜休）。こだわりのスープが旅のお腹を満たす。',
      clue:
        '魚介と動物系の旨味が凝縮された濃厚なつけ麺やラーメンで釧路屈指の人気を誇る名店「つけ麺・拉麺 虎吉」で至福の一杯をゆっくり美味しく味わおう（月曜・第3火曜休）。もちもちの太麺に絡む濃厚スープと丁寧に仕込まれたチャーシューは、一口目から深い感動が広がる絶品の美味しさだ。お腹も心も力強く満たされたら、南東側に広がる国指定史跡「東釧路貝塚公園」へと爽やかに元気に歩いて向かおう。',
      hook: '貝塚3丁目から南東方向へ徒歩約6分',
      f7_fragment: '濃厚なつけ麺とラーメンで高い人気を誇る、貝塚エリア屈指の名店。',
      f7_full: '「つけ麺・拉麺 虎吉」で濃厚な旨味の一杯を堪能し、縄文史跡へ向かう活力を得た。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '東釧路貝塚公園（史跡 東釧路貝塚）',
      lat: 42.994109,
      lng: 144.412291,
      address: '北海道釧路市貝塚1-11-1',
      description:
        '縄文時代前期を中心とする北海道最大規模の国指定史跡（終日開放）。イルカの頭骨を放射状に並べた祭祀跡が出土し、高台にはあずまやや展望台も設けられている。',
      clue:
        '縄文時代前期を中心とする北海道最大規模の国指定史跡を保存した「東釧路貝塚公園（史跡 東釧路貝塚）」をゆっくり楽しく訪ねてみよう（終日開放）。この地からはイルカの頭骨を放射状に並べた珍しい祭祀跡などが出土しており、約六千年前の縄文人が豊かな海と深く結びついて暮らしていた壮大なロマンが胸いっぱいに感じられる。高台の風景に心を洗われたら、西の材木町にある「泰心寺」へと元気に歩こう。',
      hook: '貝塚1丁目から西方向へ徒歩約8分',
      f7_fragment: 'イルカの祭祀跡が出土した、北海道最大規模の国指定史跡を伝える公園。',
      f7_full: '「東釧路貝塚公園（史跡 東釧路貝塚）」の高台に立ち、六千年前の縄文ロマンに浸った。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '泰心寺',
      lat: 42.994662,
      lng: 144.405751,
      address: '北海道釧路市材木町21-35',
      description:
        '貝塚から材木町方面へ抜ける高台エリアに佇む地域ゆかりの寺院（日中参拝可・無休）。落ち着いた境内の中で、東釧路の歴史散策を穏やかに締めくくれる。',
      clue:
        '旅の締めくくりは、貝塚から材木町方面へと抜ける静かな高台エリアに佇む地域ゆかりの寺院「泰心寺」へ穏やかに足を運んでみよう（日中参拝可）。街の賑わいから少し離れた落ち着いた境内を歩けば、縄文の太古から近現代の鉄路まで続く東釧路の重層的な歴史が静かに心の中でひとつに結ばれていく。穏やかな祈りとともに深い旅の余韻を胸に抱いて、東釧路の素敵な散歩を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '貝塚から材木町へ抜ける高台に佇み、静かな祈りで散策を結べる寺院。',
      f7_full: '「泰心寺」の穏やかな境内に手を合わせ、縄文と鉄道が交わる東釧路の旅を終えた。',
    },
  ],
};
