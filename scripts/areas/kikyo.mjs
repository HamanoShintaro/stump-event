export default {
  slug: 'kikyo',
  station_order: 991,
  station: '桔梗',
  line: 'JR函館本線',
  area_name: '桔梗・赤松街道南端',
  prefecture: '北海道',
  municipality: '函館市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '桔梗', 'ききょう駅前珈琲店', '比遅里神社', '箱館戦争'],
  style_genre: 'ink_and_watercolor',
  title: '桔梗の香る街から箱館戦争の台場伝承地を巡る',
  description:
    '桔梗が群生した地に立つJR桔梗駅からききょう駅前珈琲店、老舗洋菓子パンのラ・ディーク、ききょうの花公園を経て比遅里神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Kikyo Station framed by purple bellflowers, a cozy neighborhood coffee shop cup, classic cream puffs, and an ancient red pine forest shrine linked to Bakumatsu history, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び桔梗を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '自家焙煎の香りが漂う ききょう駅前珈琲店',
      subtext: '丁寧な珈琲と季節のパフェを味わい旅の始まりを穏やかに過ごした',
      badge: {
        code: 'kikyo_coffee',
        name_ja: '桔梗駅前の珈琲時間',
        subtitle_en: 'Kikyo Station Coffee',
        description:
          'ききょう駅前珈琲店を訪れ、自家焙煎豆の香り高い珈琲とスイーツで寛いだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a hand-poured coffee cup beside a blooming purple bellflower on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'シュークリームが名物の ラ・ディーク',
      subtext: '地元の人々で賑わう老舗パン・洋菓子店の温かな味に出会った',
      badge: {
        code: 'kikyo_ladigue',
        name_ja: '桔梗の老舗菓子パン',
        subtitle_en: 'La Digue Bakery',
        description:
          'ラ・ディークを訪れ、名物の大きなシュークリームや惣菜パンの魅力に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a generous golden cream puff and crusty pastry rolls on a ceramic plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '緑豊かな街の憩い ききょうの花公園',
      subtext: '住宅街の中の穏やかな公園を歩きながら古社への道を辿った',
      badge: {
        code: 'kikyo_flower_park',
        name_ja: '花名残の緑道公園',
        subtitle_en: 'Kikyo Flower Park',
        description:
          'ききょうの花公園を訪れ、桔梗の街の静かな緑と暮らしの風景に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of purple kikyo bellflowers blooming beside green park foliage on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '桔梗台場伝承の古社 比遅里神社',
      subtext: '赤松林に抱かれた境内で安政年間と箱館戦争の歴史を偲んだ',
      badge: {
        code: 'kikyo_hijiri_shrine',
        name_ja: '赤松林の比遅里神社',
        subtitle_en: 'Hijiri Shrine Pines',
        description:
          '比遅里神社に参拝し、赤松林と桔梗台場伝承が息づく古社の空気を感じたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a historic Shinto shrine torii gate nestled among tall Japanese red pines on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kikyo_complete',
    name_ja: '桔梗・赤松と台場跡の旅人',
    subtitle_en: 'Explorer of Kikyo History',
    description:
      'JR桔梗駅からききょう駅前珈琲店、ラ・ディーク、ききょうの花公園、比遅里神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting purple bellflowers, a steaming coffee cup, and a red-pine shrine torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR桔梗駅',
      lat: 41.846735,
      lng: 140.723032,
      address: '北海道函館市桔梗3-41-36',
      description:
        '明治35年（1902年）開業のJR函館本線の駅（始発〜終電）。かつてこの地に桔梗が群生していたことに駅名を由来し、旧札幌本道（赤松街道）の南端エリアに隣接する。',
      clue:
        '明治三十五年に開業し、かつて辺り一面に桔梗の花が群生していたことに駅名を由来する「JR桔梗駅」から街と歴史の散歩を始めよう（始発〜終電）。旧札幌本道として知られる赤松街道の南端エリアにも近い駅前には、穏やかな住宅街の暮らしが静かに息づいている。駅を出て東北東方向へと外へ踏み出したら、まずは香り高い自家焙煎の一杯に出会える「ききょう駅前珈琲店」を目指して軽やかに歩き出そう。',
      hook: '駅から東北東方向へ徒歩約5分',
      f7_fragment: 'かつて桔梗が群生していた地に立ち、赤松街道南端にも近い歴史ある駅。',
      f7_full: '「JR桔梗駅」を後にし、駅前の珈琲店から幕末の台場伝承地を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'ききょう駅前珈琲店',
      lat: 41.847672,
      lng: 140.728095,
      address: '北海道函館市桔梗3-23-18',
      description:
        '2023年にオープンした隠れ家カフェ（11:00〜17:00・L.O.16:30、水曜休）。隣駅の「ななえ駅前珈琲店」で焙煎した豆を使う珈琲や季節のパフェ、ランチメニューが人気。',
      clue:
        '自家焙煎豆の香り高い一杯と季節のパフェが人気の「ききょう駅前珈琲店」で一息つこう（11:00〜17:00、水曜休）。寛いだら北北東の「ラ・ディーク」へ向かおう。',
      hook: '北北東方向へ徒歩約6分',
      f7_fragment: '隣駅で焙煎した豆の香り高い珈琲や季節のパフェが楽しめる隠れ家カフェ。',
      f7_full: '「ききょう駅前珈琲店」で淹れたての珈琲を味わい、心がほっと和んだ。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'ラ・ディーク（LA・DIGUE）',
      lat: 41.851462,
      lng: 140.729373,
      address: '北海道函館市桔梗4-26-50',
      description:
        '大きなシュークリームやバナナボート、惣菜パンで長年地域に愛される老舗パン・洋菓子店（9:00〜17:00、木・日曜休、売切次第終了）。素朴で温かみある味わいが魅力。',
      clue:
        'ボリューム満点の大きなシュークリームやバナナボート、焼きたての惣菜パンで長年地元の人々に愛されてきた老舗「ラ・ディーク（LA・DIGUE）」へ立ち寄ってみよう（木・日曜休）。ショーケースに並ぶ素朴で温かなスイーツやパンはどれも目移りする美味しさで、街歩きの楽しいお土産にもぴったりだ。甘い幸せを大切に手にしたら、南方向へ歩いて緑豊かな「ききょうの花公園」へとゆっくり向かおう。',
      hook: '南方向へ徒歩約20分',
      f7_fragment: '大きなシュークリームやバナナボート、惣菜パンが人気の老舗パン・洋菓子店。',
      f7_full: '「ラ・ディーク」で地元に愛される名物スイーツに出会い、笑顔がほころんだ。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'ききょうの花公園（桔梗第2号街区公園）',
      lat: 41.838923,
      lng: 140.728523,
      address: '北海道函館市桔梗2-21',
      description:
        '桔梗の住宅街の中に整備された緑豊かな街区公園（常時開放・無休）。季節の草木やベンチが配され、南方の古社・比遅里神社へと向かう街歩きの爽やかな中継地点となっている。',
      clue:
        '桔梗の住宅街の中に整えられた緑豊かな憩いの場「ききょうの花公園（桔梗第2号街区公園）」をゆっくりと通り抜けてみよう（常時開放）。季節ごとの草花や木々の緑が目に優しく、街に暮らす人々の穏やかな日常がそっと感じられる心地よい公園だ。道南の爽やかな風を感じて気分をすっかりリフレッシュしたら、いよいよ南方向に鎮座する歴史ある古社「比遅里神社」を目指して軽やかに歩みを進めよう。',
      hook: '南方向へ徒歩約20分',
      f7_fragment: '桔梗の住宅街に整備され、古社への道中で季節の緑に触れられる街区公園。',
      f7_full: '「ききょうの花公園」の緑を抜け、赤松林に抱かれた古社へと歩みを進めた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '比遅里神社（ひぢりじんじゃ）',
      lat: 41.827089,
      lng: 140.731626,
      address: '北海道函館市桔梗町201',
      description:
        '安政5年（1858年）に北陸からの移住者らが再建した古社（参拝自由・無休）。境内は箱館戦争時の「桔梗台場（三陵郭）」比定地と伝わり、趣ある赤松林が往時の歴史を今に伝えている。',
      clue:
        '旅の締めくくりは、安政五年に北陸からの移住者らによって再建された古社「比遅里神社（ひぢりじんじゃ）」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。緑深い赤松林に囲まれたこの境内は、箱館戦争時の防衛拠点「桔梗台場（三陵郭）」の比定地とも伝えられており、往時の歴史の重みが静かに息づいている。木漏れ日の社殿に静かに手を合わせて、桔梗の散歩を晴れやかに明るく締めくくろう。',
      hook: '',
      f7_fragment: '1858年再建の古社で、箱館戦争の「桔梗台場」伝承地と赤松林が残る。',
      f7_full: '「比遅里神社」の赤松林の中で幕末の伝承に思いを馳せ、桔梗の旅を終えた。',
    },
  ],
};
