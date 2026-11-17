export default {
  slug: 'yamakoshi',
  station_order: 1001,
  station: '山越',
  line: 'JR函館本線',
  area_name: '山越・浜松',
  prefecture: '北海道',
  municipality: '八雲町',
  category: '歴史・自然',
  budget_tier: 2,
  tags: ['函館本線', '山越', '山越内関所跡', 'ハーベスター八雲', 'パノラマパーク'],
  style_genre: 'ink_and_watercolor',
  title: '日本最北の関所跡と噴火湾の丘を巡る旅',
  description:
    '関所風駅舎のJR山越駅から日本最北の関所・山越内関所跡、山越諏訪神社を経て高台のハーベスター八雲と噴火湾パノラマパークへ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of checkpoint-style JR Yamakoshi Station by Uchiura Bay, a historic Edo-period northern barrier monument, a seaside shrine, golden herb fried chicken on a hilltop terrace, and panoramic bay views, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び山越を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '享和元年設置の史跡 山越内関所跡',
      subtext: '和人地と蝦夷地の境界として往来を見守った日本最北の関所跡に立った',
      badge: {
        code: 'yamakoshi_sekisho',
        name_ja: '日本最北の関所跡',
        subtitle_en: 'Yamakoshinai Barrier',
        description:
          '山越内関所跡を訪れ、江戸幕府が設置した日本最北端の関所の歴史に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an Edo-period wooden barrier gate and inscribed stone marker beside northern sea waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '会所の井戸も伝わる 山越諏訪神社',
      subtext: '海を望む関所跡近くの古社で道南と蝦夷地の歴史に手を合わせた',
      badge: {
        code: 'yamakoshi_suwa_shrine',
        name_ja: '山越関所そばの古社',
        subtitle_en: 'Yamakoshi Suwa Shrine',
        description:
          '山越諏訪神社に参拝し、会所の歴史的遺構が残る海辺の鎮守に祈ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a coastal Shinto shrine torii gate overlooking calm Uchiura Bay waters on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '高台の名店 ハーベスター八雲',
      subtext: '噴火湾を見晴らす丘で国産ハーブ鶏のチキンや石窯ピザを味わった',
      badge: {
        code: 'yamakoshi_harvester',
        name_ja: '噴火湾望むハーブ鶏',
        subtitle_en: 'Harvester Yakumo',
        description:
          'ハーベスター八雲を訪れ、噴火湾を一望する高台でチキンと石窯ピザを楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of crispy golden herb chicken and a wood-fired pizza slice overlooking a wide blue bay on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '絶景の丘 噴火湾パノラマパーク',
      subtext: 'パノラマ館の展望ラウンジから噴火湾の大パノラマを一望した',
      badge: {
        code: 'yamakoshi_panorama',
        name_ja: '噴火湾の大パノラマ',
        subtitle_en: 'Funkawan Panorama Park',
        description:
          '噴火湾パノラマパークを訪れ、雄大な海と丘陵が織りなす大パノラマを満喫したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of rolling green hilltop meadows sweeping toward the vast blue crescent of Uchiura Bay on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'yamakoshi_complete',
    name_ja: '山越・最北関所と丘の旅人',
    subtitle_en: 'Explorer of Yamakoshi',
    description:
      'JR山越駅から山越内関所跡、山越諏訪神社、ハーベスター八雲、噴火湾パノラマパークまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an Edo checkpoint wooden gate, a coastal shrine torii, and a hilltop bay panorama on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR山越駅',
      lat: 42.231121,
      lng: 140.326924,
      address: '北海道二海郡八雲町山越898-19',
      description:
        '平成元年（1989年）改築の無人駅（常時開放）。江戸時代にこの地に置かれた山越内関所・会所を模した和風デザインの駅舎が特徴的な、海沿いの歴史薫る旅の起点。',
      clue:
        '江戸時代の山越内関所・会所を模した風格ある和風デザインの駅舎が特徴的な海沿いの無人駅「JR山越駅」から、歴史と絶景を巡る散歩を始めよう（終日開放）。改札を抜ければ、すぐ目の前にはかつて和人地と蝦夷地の境界として重要な役割を担った史跡が待っている。駅を出て南東方向へと外へ踏み出したら、まずは日本最北端の関所として知られる「山越内関所跡」を目指して軽やかな足取りで歩き出そう。',
      hook: '駅から南東方向へ徒歩約3分',
      f7_fragment: '山越内関所・会所を模した和風デザインの駅舎が印象的な海沿いの無人駅。',
      f7_full: '「JR山越駅」を後にし、日本最北の関所跡から噴火湾を望む丘を巡り始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '山越内関所跡',
      lat: 42.230267,
      lng: 140.329524,
      address: '北海道二海郡八雲町山越206',
      description:
        '享和元年（1801年）に江戸幕府が設置した日本最北端の関所跡（常時開放・屋外史跡）。和人地と蝦夷地の境界として往来を取り締まった、北海道史における重要な舞台。',
      clue:
        '日本最北端の関所跡「山越内関所跡」に立ち、かつて和人地と蝦夷地の境界だった往時の歴史を静かに偲ぼう（見学自由）。次は南西の「山越諏訪神社」へ向かおう。',
      hook: '南西方向へ徒歩約3分',
      f7_fragment: '1801年に江戸幕府が設置した、和人地と蝦夷地の境界・日本最北端の関所跡。',
      f7_full: '「山越内関所跡」の前に立ち、江戸時代の北の境界線に思いを馳せた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '山越諏訪神社',
      lat: 42.229485,
      lng: 140.328687,
      address: '北海道二海郡八雲町山越201-1',
      description:
        '山越内関所跡近くの海を望む地に鎮座する古社（参拝自由・無休）。境内周辺にはかつての会所の井戸などの歴史的遺構が残り、往時の面影を静かに今に伝えている。',
      clue:
        '関所跡近くの海を望む穏やかな地に鎮座する古社「山越諏訪神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。境内周辺にはかつての会所の井戸などの歴史的遺構も今なお残されており、江戸時代の北の要衝として賑わった山越内の面影が静かに息づいている。爽やかな潮風を感じながら旅の無事を祈願したら、西方向の高台に建つ絶景レストラン「ハーベスター八雲」へと軽やかに楽しく歩を進めよう。',
      hook: '西方向へ徒歩約17分',
      f7_fragment: '関所跡近くに位置し、会所の井戸などの遺構も周辺に残る海辺の古社。',
      f7_full: '「山越諏訪神社」で往時の歴史に手を合わせ、噴火湾を見晴らす高台を目指した。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'ハーベスター八雲',
      lat: 42.22759,
      lng: 140.316696,
      address: '北海道二海郡八雲町浜松365',
      description:
        'KFCの実験農場発祥の地に建つ丘の上のレストラン（季節・曜日変動あり、平日11:00〜等・夏期や土日祝10:30〜19:00、3〜11月無休・12〜2月月曜休）。噴火湾を見晴らしながら国産ハーブ鶏や石窯ピザを味わえる。',
      clue:
        'かつてKFCの実験農場が置かれた由緒ある高台に建つ人気レストラン「ハーベスター八雲」で絶景ランチをゆっくり味わおう（3〜11月無休、12〜2月月曜休）。目の前に広がる雄大な噴火湾を見晴らしながらいただく国産ハーブ鶏のフライドチキンや香ばしい石窯ピザは、旅の記憶に残る至福の美味しさだ。お腹も心も温かく満たされたら、すぐ西隣の「噴火湾パノラマパーク（パノラマ館）」へ向かおう。',
      hook: '西方向へ徒歩約5分',
      f7_fragment: '噴火湾を見晴らす高台に建ち、国産ハーブ鶏や石窯ピザが人気のレストラン。',
      f7_full: '「ハーベスター八雲」で噴火湾を望みつつハーブ鶏と石窯ピザを堪能した。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '噴火湾パノラマパーク（パノラマ館）',
      lat: 42.227138,
      lng: 140.313895,
      address: '北海道二海郡八雲町浜松368-8',
      description:
        '噴火湾を一望する広大な丘陵公園の拠点施設（パノラマ館10:00〜18:00、季節・施設により変動あり）。館内には軽食コーナーや展望ラウンジ、キッズアリーナを備えている。',
      clue:
        '旅の締めくくりは、噴火湾を一望する広大な丘陵公園の拠点「噴火湾パノラマパーク（パノラマ館）」の展望ラウンジでゆったりと休憩しよう（10:00〜18:00）。大きなガラス越しに広がる青い海と緑の牧草地の大パノラマを眺めながら軽食や飲み物を味わえば、日常を忘れる爽快な開放感が体いっぱいに満ちていく。最北の関所と海の大絶景を胸に刻んで、山越の散歩を晴れやかに明るく締めくくろう。',
      hook: '',
      f7_fragment: '噴火湾を一望する広大な丘陵公園にあり、展望ラウンジや軽食を備えた施設。',
      f7_full: '「噴火湾パノラマパーク」から海の大パノラマを望み、山越の旅を終えた。',
    },
  ],
};
