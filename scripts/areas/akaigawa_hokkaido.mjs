export default {
  slug: 'akaigawa_hokkaido',
  station_order: 995,
  station: '赤井川',
  line: 'JR函館本線',
  area_name: '赤井川・国道5号沿線',
  prefecture: '北海道',
  municipality: '森町',
  category: 'グルメ・自然',
  budget_tier: 2,
  tags: ['函館本線', '赤井川', 'レストランケルン', 'ラッキーピエロ', 'ひこま豚'],
  style_genre: 'ink_and_watercolor',
  title: '赤井川の鎮守と街道名物を巡る食散歩',
  description:
    '駒ヶ岳の麓・JR赤井川駅から赤井川神社、老舗洋食レストランケルン、ラッキーピエロ森町赤井川店、ひこま豚食堂へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Akaigawa Station at the foot of Mount Komagatake, a quiet forest shrine torii, a sizzling hamburger steak plate, a rustic log-house burger shop, and tender local pork cutlets, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び赤井川を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '木立に佇む鎮守 赤井川神社',
      subtext: '国道沿いの喧騒から一歩入った静かな境内で旅の安全を祈願した',
      badge: {
        code: 'akaigawa_shrine',
        name_ja: '駒ヶ岳麓の鎮守社',
        subtitle_en: 'Akaigawa Shrine',
        description:
          '赤井川神社に参拝し、木立に包まれた静謐な境内で道南の旅の無事を祈ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a Shinto shrine torii gate nestled in green woodland near Mount Komagatake on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '行列のできる老舗洋食 レストラン ケルン',
      subtext: '道内外のファンに愛されるジューシーなハンバーグを堪能した',
      badge: {
        code: 'akaigawa_kerun',
        name_ja: '街道の老舗ハンバーグ',
        subtitle_en: 'Restaurant Kerun',
        description:
          'レストラン ケルンを訪れ、国道5号線沿いで愛され続ける老舗の洋食を味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sizzling cast-iron skillet with a juicy hamburger steak and rich demi-glace sauce on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'ログハウス風の ラッキーピエロ 森町赤井川店',
      subtext: '初の郊外型店舗でチャイニーズチキンバーガーと土産を楽しんだ',
      badge: {
        code: 'akaigawa_luckypierrot',
        name_ja: '森町のラッピ時間',
        subtitle_en: 'Lucky Pierrot Akaigawa',
        description:
          'ラッキーピエロ 森町赤井川店を訪れ、ログハウス風店舗の賑やかな魅力に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a gourmet fried chicken burger and a rustic log cabin facade on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'SPFブランド豚の直営 ひこま豚食堂',
      subtext: '駒ヶ岳の麓で育ったひこま豚の料理とファーマーズショップを満喫した',
      badge: {
        code: 'akaigawa_hikomabuta',
        name_ja: 'ひこま豚の恵み',
        subtitle_en: 'Hikomabuta Kitchen',
        description:
          'ひこま豚食堂 ＆ ファーマーズショップを訪れ、地元ブランド豚の魅力を満喫したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of golden crispy pork cutlet slices served with shredded cabbage on a ceramic dish on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'akaigawa_hokkaido_complete',
    name_ja: '赤井川・駒ヶ岳と名物街道の旅人',
    subtitle_en: 'Explorer of Akaigawa Route 5',
    description:
      'JR赤井川駅から赤井川神社、レストランケルン、ラッキーピエロ、ひこま豚食堂まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting Mount Komagatake, a Shinto torii gate, and gourmet highway dining on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR赤井川駅',
      lat: 42.003486,
      lng: 140.641409,
      address: '北海道茅部郡森町字赤井川',
      description:
        '駒ヶ岳登山の赤井川コース最寄り駅として知られるJR函館本線の無人駅（24時間利用可）。のどかな牧草地と北海道駒ヶ岳の雄大な裾野に抱かれた道南ローカル線の玄関口。',
      clue:
        '北海道駒ヶ岳の雄大な裾野と牧草地に抱かれたJR函館本線の無人駅「JR赤井川駅」から、道南の食と鎮守を巡る散歩を始めよう（終日開放）。駒ヶ岳登山の赤井川コース最寄り駅としても知られるこの静かな駅から西方向へと外へ踏み出したら、まずは国道5号線沿いの喧騒から一歩入った木立の中に佇む地域の鎮守「赤井川神社」を目指して、爽やかな高原の空気を感じながら軽やかな足取りで歩き出そう。',
      hook: '駅から西方向へ徒歩約9分',
      f7_fragment: '駒ヶ岳の裾野とのどかな牧草地に囲まれた、道南ローカル線の無人駅。',
      f7_full: '「JR赤井川駅」を後にし、鎮守の社と国道5号線沿いの名店を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '赤井川神社（赤井川稲荷神社）',
      lat: 42.004059,
      lng: 140.631115,
      address: '北海道茅部郡森町字赤井川160-14',
      description:
        '赤井川地区の暮らしを見守り続けてきた地域の鎮守社（参拝自由・無休）。国道5号線沿いの賑わいから一歩入った木立の中に鳥居が佇み、穏やかな静けさに包まれている。',
      clue:
        '木立の中に静かに鳥居が佇む「赤井川神社（赤井川稲荷神社）」に参拝し、道南の旅の安全を祈願しよう（参拝自由）。次は東の「レストラン ケルン」へ向かおう。',
      hook: '東方向へ徒歩約3分',
      f7_fragment: '国道5号線から一歩入った木立の中に鳥居が佇む、赤井川地区の鎮守社。',
      f7_full: '「赤井川神社」の静かな木立の中で手を合わせ、名物グルメ街道へ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'レストラン ケルン',
      lat: 42.00408,
      lng: 140.632731,
      address: '北海道茅部郡森町字赤井川106-5',
      description:
        '国道5号線沿いで行列ができる老舗洋食店（火〜金11:30〜18:00L.O.、土日祝11:30〜20:00L.O.19:30、月曜休・祝日の場合翌火曜休）。ジューシーなハンバーグやステーキが道内外で人気。',
      clue:
        '国道5号線沿いで道内外から訪れるファンが絶えない人気の老舗洋食店「レストラン ケルン」へ立ち寄ってみよう（月曜休、祝日の場合翌火曜休）。鉄板の上でジューシーに焼き上げられる名物のハンバーグやステーキ、香り豊かなビーフシチューは旅の疲れを吹き飛ばす至福の美味しさだ。老舗の温かな味に心もお腹も満たされたら、南東方向の「ラッキーピエロ 森町赤井川店」へとゆっくり歩いて向かおう。',
      hook: '南〜南東方向へ徒歩約3分',
      f7_fragment: '国道5号線沿いで行列ができる、ハンバーグやステーキが人気の老舗洋食店。',
      f7_full: '「レストラン ケルン」で道南屈指の老舗洋食の魅力に触れ、大満足になった。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'ラッキーピエロ 森町赤井川店',
      lat: 42.002677,
      lng: 140.634051,
      address: '北海道茅部郡森町字赤井川125',
      description:
        '函館名物のご当地ハンバーガー店初の郊外型・ログハウス風店舗（10:00〜22:00・L.O.21:30、無休）。チャイニーズチキンバーガーやシェイク、オリジナル土産が豊富に揃う。',
      clue:
        '函館エリアを代表するご当地ハンバーガーチェーン初の郊外型・ログハウス風店舗「ラッキーピエロ 森町赤井川店」で楽しく一息つこう（10:00〜22:00、無休）。看板メニューのチャイニーズチキンバーガーや甘いシェイクを楽しみながら、個性あふれる店内の装飾やオリジナルのお土産を眺めるのも旅の醍醐味だ。賑やかな空間で元気をしっかり得たら、南東方向の「ひこま豚食堂」へと向かおう。',
      hook: '南〜南東方向へ徒歩約3分',
      f7_fragment: '初の郊外型・ログハウス風店舗で、ご当地バーガーや土産が揃う人気店。',
      f7_full: '「ラッキーピエロ 森町赤井川店」の賑やかな空間で休憩し、道南気分を満喫した。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'ひこま豚食堂 ＆ ファーマーズショップ',
      lat: 42.001232,
      lng: 140.634717,
      address: '北海道茅部郡森町字赤井川139',
      description:
        '駒ヶ岳の麓で育ったSPFブランド豚「ひこま豚」の直営店（10:00〜19:00・L.O.18:30、火・水曜休・変動あり）。とんかつや豚丼の食事に加え、併設ショップで精肉や加工品も買える。',
      clue:
        '旅の締めくくりは、駒ヶ岳の麓の豊かな自然で育ったSPFブランド豚の直営店「ひこま豚食堂 ＆ ファーマーズショップ」へ足を運ぼう（10:00〜19:00、火・水曜休）。柔らかく甘みのあるひこま豚を使ったとんかつや豚丼が評判の食堂と、精肉やハム・ソーセージなどが並ぶショップは森町ならではの食の宝庫だ。道南の豊かな大地の恵みを味わって、赤井川の散歩を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: '駒ヶ岳の麓で育つSPFブランド豚「ひこま豚」の直営食堂＆ショップ。',
      f7_full: '「ひこま豚食堂 ＆ ファーマーズショップ」で地元の恵みに触れ、旅を終えた。',
    },
  ],
};
