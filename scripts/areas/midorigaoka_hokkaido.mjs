export default {
  slug: 'midorigaoka_hokkaido',
  station_order: 976,
  station: '緑が丘（北海道）',
  line: 'JR富良野線',
  area_name: '神楽岡・緑が丘',
  prefecture: '北海道',
  municipality: '旭川市',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['富良野線', '西御料地神社', 'いちりん庵', '神陵公園', '旭川市'],
  style_genre: 'ink_and_watercolor',
  title: '緑が丘の小さな社と隠れ家カフェを巡る道',
  description:
    'JR緑が丘駅から駅裏手の西御料地神社、発酵玄米のいちりん庵、台湾カフェ阿里山STAND.を経て市民の憩いの場・神陵公園へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Midorigaoka Station in Asahikawa with its warm timber shelter, a tiny hillside Shinto shrine tucked in a park corner, a cozy home-style eatery, and sprawling green lawns at Shinryo Park, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び緑が丘を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '御料地の名を留める小さな西御料地神社',
      subtext: '駅裏の公園の一角に鎮座する静かなお社で旅の安全を祈った',
      badge: {
        code: 'midorigaoka_nishigoryochi',
        name_ja: '御料地の小さな社',
        subtitle_en: 'Parkside Shrine',
        description:
          '西御料地神社を訪れ、御料地開拓時代の名残を伝える小さな杜に手を合わせたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a small wooden Shinto shrine nestled beside neighborhood park trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '発酵玄米が自慢の食べ処 いちりん庵',
      subtext: '住宅街の一軒家食堂で体想いの小鉢ランチを味わった',
      badge: {
        code: 'midorigaoka_ichirinan',
        name_ja: '発酵玄米の食卓',
        subtitle_en: 'Sprouted Rice Lunch',
        description:
          '食べ処 いちりん庵でもっちりした発酵玄米と日替わり小鉢ランチを堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a ceramic bowl of wholesome brown rice surrounded by seasonal vegetable side dishes on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '台湾カステラが人気の阿里山STAND.',
      subtext: '洗練された隠れ家カフェ空間で甘いスイーツとともに寛いだ',
      badge: {
        code: 'midorigaoka_alishan',
        name_ja: '阿里山のカフェ時間',
        subtitle_en: 'Taiwanese Castella Break',
        description:
          'Cafe and Bar 阿里山STAND.で洗練された空間と台湾スイーツを楽しんだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a fluffy golden Taiwanese castella cake and fragrant oolong tea cup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '広い芝生が広がる市民の憩い・神陵公園',
      subtext: '緑が丘を代表する大きな公園のベンチで心地よく一息ついた',
      badge: {
        code: 'midorigaoka_shinryo_park',
        name_ja: '神陵の緑陰',
        subtitle_en: 'Shinryo Park Lawn',
        description:
          '神陵公園を訪れ、緑豊かな芝生広場とベンチで穏やかな散策を結んだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sunlit wooden park bench beneath leafy green birch branches on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'midorigaoka_hokkaido_complete',
    name_ja: '緑が丘・社と隠れ家の旅人',
    subtitle_en: 'Walker of Midorigaoka Hills',
    description:
      'JR緑が丘駅から西御料地神社、いちりん庵、阿里山STAND.、神陵公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a timber station shelter, small neighborhood shrine, and fluffy cafe castella on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR緑が丘駅',
      lat: 43.730798,
      lng: 142.364057,
      address: '北海道旭川市神楽岡13条9',
      description:
        '平成8年（1996年）9月1日開業、木目調の待合室が特徴のJR富良野線の無人駅（終日利用可）。旭川医科大学や高校が近く、学生や住民の足となっている。',
      clue:
        '平成八年九月に開業し、木目調の温かな待合室が特徴的なJR富良野線の無人駅「JR緑が丘駅」から楽しい町歩きと散策を始めよう（終日利用可）。文教と住宅の落ち着いた空気に包まれた駅前を外へ出てすぐ北東方向へと踏み出したら、まずは駅裏手の神楽岡ありんこ公園の一角にひっそりと鎮座する「西御料地神社」を目指して、爽やかな風の中をのんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '駅から北東方向へ徒歩約3分',
      f7_fragment: '平成八年開業、木目調の待合室が特徴的な文教・住宅エリアの無人駅。',
      f7_full: '「JR緑が丘駅」を後にし、小さな社と隠れ家カフェを巡る散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '西御料地神社',
      lat: 43.731575,
      lng: 142.36609,
      address: '北海道旭川市神楽岡13条9-1-15',
      description:
        'JR緑が丘駅の裏手、神楽岡ありんこ公園の一角に鎮座する地域の小さな社（終日参拝可・無休）。かつての御料地開拓時代の名残を社名に留めている。',
      clue:
        '駅裏の公園の一角に鎮座する「西御料地神社」に静かに参拝し、開拓時代の名残にゆっくり手を合わせよう（終日参拝可）。次は北西の「食べ処 いちりん庵」へ向かおう。',
      hook: '北西方向へ徒歩約16分',
      f7_fragment: '緑が丘駅裏手に鎮座し、御料地開拓時代の名残を社名に留める小さな社。',
      f7_full: '「西御料地神社」の穏やかな境内で手を合わせ、土地の歴史に思いを馳せた。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '食べ処 いちりん庵',
      lat: 43.740499,
      lng: 142.359315,
      address: '北海道旭川市神楽岡14条4-2-18',
      description:
        '住宅街に佇む一軒家食堂（11:30〜16:00・18:00〜20:00、日・月曜休）。長岡式ジャーで4日間寝かせたもっちり食感の「発酵玄米ごはん」や野菜中心の日替わり小鉢ランチが評判。',
      clue:
        '住宅街の中に静かに佇む一軒家食堂「食べ処 いちりん庵」で体想いの美味しいランチを味わおう（日・月曜休）。長岡式ジャーで四日間丁寧に寝かせたもっちり食感の「発酵玄米ごはん」と、彩り豊かな野菜中心の日替わり小鉢は心までほぐれる優しい美味しさだ。お腹も心も健やかに満たされたら、すぐ南西方向へゆっくり歩いてお洒落な台湾カフェ「Cafe and Bar 阿里山STAND.」へ向かおう。',
      hook: '南西方向へ徒歩約4分',
      f7_fragment: '4日間寝かせた「発酵玄米ごはん」と野菜中心の小鉢ランチが評判の一軒家食堂。',
      f7_full: '「食べ処 いちりん庵」で体想いの発酵玄米ランチを堪能し、活力を養った。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: 'Cafe and Bar 阿里山STAND.（アリサンスタンド）',
      lat: 43.739106,
      lng: 142.357287,
      address: '北海道旭川市神楽岡16条4-2-8',
      description:
        '注文住宅工務店が手掛ける洗練された台湾カフェ・ダイニング（11:00〜17:00・ランチL.O.14:00、月曜休）。台湾カステラプレートやパフェなどで一息つける。',
      clue:
        '注文住宅工務店が手掛ける洗練された佇まいが魅力の台湾カフェ・ダイニング「Cafe and Bar 阿里山STAND.（アリサンスタンド）」で優雅な休憩時間を過ごそう（11:00〜17:00、月曜休）。ふんわりと焼き上げられた名物の台湾カステラプレートや季節のパフェをいただけば、街歩きの気分がぐっと華やいでいく。甘く心地よい時間を満喫したら、東側の「神陵公園」へと向かおう。',
      hook: '東方向へ徒歩約26分',
      f7_fragment: '工務店が手掛ける洗練された空間で、台湾カステラやパフェを楽しめるカフェ。',
      f7_full: '「Cafe and Bar 阿里山STAND.」の洗練された空間で台湾スイーツに癒やされた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '神陵公園',
      lat: 43.73352,
      lng: 142.378792,
      address: '北海道旭川市緑が丘3条3',
      description:
        '緑が丘地区を代表する大きな地域公園（終日開放・無休）。野球場や広々とした芝生広場・ベンチを備え、散策の終着点としてゆっくり腰を下ろせる市民の憩いの場。',
      clue:
        '旅の締めくくりは、緑が丘地区を代表する市民の憩いの場として親しまれている広大な「神陵公園」のベンチでゆったりと休憩しよう（終日開放）。園内に整備された美しい芝生広場と緑の木立に優しく包まれながら、澄み切った旭川の美味しい空気を胸いっぱい深呼吸すれば、心地よい達成感が心の奥までじんわり広がっていく。歴史の社と隠れ家カフェに出会う緑が丘の散歩を、晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '野球場や広い芝生広場・ベンチを備え、緑が丘を代表する市民の憩いの公園。',
      f7_full: '「神陵公園」の広々とした芝生と木陰で寛ぎ、緑が丘の街歩きを締めくくった。',
    },
  ],
};
