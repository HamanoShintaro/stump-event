export default {
  slug: 'tokachishimizu',
  station_order: 937,
  station: '十勝清水',
  line: 'JR根室本線',
  area_name: '十勝清水・本通',
  prefecture: '北海道',
  municipality: '清水町',
  category: 'グルメ・街歩き',
  budget_tier: 2,
  tags: ['根室本線', '牛玉ステーキ丼', '十勝そば', '老舗洋菓子', '第九のまち'],
  style_genre: 'ink_and_watercolor',
  title: '清流の恵みと甘い香りに誘われる清水',
  description:
    'JR十勝清水駅から第九のまち銘菓の静月、名物そばと牛トロの三品、清水公園、明治創祀の清水神社を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Tokachi-Shimizu in Hokkaido, featuring a small northern train station, a charming patisserie window with freshly baked waffles, green riverside park trees, and a peaceful Shinto shrine beneath the Hidaka mountains, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び十勝清水を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '第九のまちの老舗洋菓子店が焼く甘いワッフル',
      subtext: '1969年創業の静月で、清水町の歴史ある銘菓に出合った',
      badge: {
        code: 'tokachishimizu_seigetsu',
        name_ja: '第九のまちの甘味通',
        subtitle_en: 'Sweet Tooth of Shimizu',
        description:
          '昭和44年創業の銘菓と洋菓子 静月で、看板商品のワッフルや郷土銘菓を手に入れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a golden waffle pastry and musical treble clef motif on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '十勝産そばとご当地牛肉グルメの贅沢な一膳',
      subtext: 'そば処 三品で地元ならではの豊かな味覚を堪能した',
      badge: {
        code: 'tokachishimizu_mishina',
        name_ja: '十勝そばと牛トロの食通',
        subtitle_en: 'Soba & Gyutoro Gourmet',
        description:
          'そば処 三品で十勝産そばや清水町名物の牛玉ステーキ丼・牛トロ丼の味覚を味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of handmade soba noodles in a lacquerware bowl beside savory beef cuts on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '十勝の爽やかな風が通り抜ける清水公園の緑',
      subtext: '町民の憩いの場で自然の息吹を感じながら一息ついた',
      badge: {
        code: 'tokachishimizu_park',
        name_ja: '緑陰の散策者',
        subtitle_en: 'Stroller of Shimizu Park',
        description:
          '豊かな緑に包まれた清水公園を歩き、十勝清水の穏やかな空気を満喫したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of sunlit birch trees and a gentle park pathway on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'ペケレペッの清流の記憶を伝える清水神社',
      subtext: '明治33年創祀の歴史ある杜で静かに手を合わせた',
      badge: {
        code: 'tokachishimizu_shrine',
        name_ja: '清澄の社の参拝者',
        subtitle_en: 'Worshipper of Pure River',
        description:
          '明治33年創祀の清水神社を訪れ、町名の由来となった清らかな大地の恵みに感謝したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden Shinto shrine torii above crystal-clear rippling river water on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'tokachishimizu_complete',
    name_ja: '十勝清水・清流と美味の旅人',
    subtitle_en: 'Traveler of Tokachi-Shimizu',
    description:
      'JR十勝清水駅から銘菓と洋菓子 静月、そば処 三品、清水公園、清水神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a golden waffle, steaming soba bowl, and clear river ripples on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR十勝清水駅',
      lat: 43.013786,
      lng: 142.879795,
      address: '北海道上川郡清水町本通1-1-1',
      description:
        '明治40年（1907年）9月8日に「清水駅」として開業、昭和9年に現駅名へ改称（終日利用可）。町名はアイヌ語「ペケレペッ（水が清澄な川）」の意訳に由来する。',
      clue:
        '明治四十年九月に開業し、アイヌ語「ペケレペッ（水が清澄な川）」に町名を由来する十勝西部の玄関口「JR十勝清水駅」から楽しい街歩きと散策を始めよう（終日利用可）。清らかな十勝の空気を胸いっぱいに吸い込んで駅舎を外へ出たら、まずは北東へ歩いて約三分の場所にある昭和四十四年創業の老舗「銘菓と洋菓子 静月」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に歩き出そう。',
      hook: '駅から北東方向へ徒歩約3分',
      f7_fragment: '明治四十年開業、アイヌ語「ペケレペッ」に由来する清流の町の玄関口。',
      f7_full: '「JR十勝清水駅」を後にし、清らかな町の美味と歴史を訪ねる散策へ踏み出した。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '銘菓と洋菓子 静月',
      lat: 43.014157,
      lng: 142.880634,
      address: '北海道上川郡清水町本通2-7',
      description:
        '昭和44年（1969年）創業の老舗洋菓子・銘菓店（月〜土9:00〜19:00・日〜17:00、不定休）。看板商品のふわふわワッフルや「第九のまちしみず」にちなんだ郷土銘菓が人気。',
      clue:
        '昭和四十四年創業の「銘菓と洋菓子 静月」で名物ワッフルや郷土銘菓を選ぼう（月〜土9:00〜19:00等）。買物後は南の「そば処 三品（みしな）」へ向かおう。',
      hook: '本通から南方向へ徒歩約5分',
      f7_fragment: '昭和四十四年創業、看板のワッフルや第九のまちの郷土銘菓が人気の老舗店。',
      f7_full: '「銘菓と洋菓子 静月」で懐かしい甘さの銘菓に出会い、心がほっこり温まった。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'そば処 三品（みしな）',
      lat: 43.013384,
      lng: 142.883004,
      address: '北海道上川郡清水町南2条3-2',
      description:
        '十勝産そばを使った「ごぼう天蕎麦」や、清水町ご当地グルメ「十勝清水牛玉ステーキ丼」・牛トロ丼とのセットで知られる人気店（11:30〜14:00売切終了、木・金曜休）。',
      clue:
        '清水町が誇るご当地の味をゆっくり楽しめる人気店「そば処 三品（みしな）」で絶品の温かい美味しいランチを味わおう（11:30〜14:00売切終了、木金休）。香り高い十勝産そばを使ったごぼう天蕎麦や、地元ブランドの牛トロ丼・十勝清水牛玉ステーキ丼など魅力的な味わいが旅のお腹を幸せにしっかり満たしてくれる。十分に英気を養ったら、西から南西の「清水公園」へと楽しく歩いて向かおう。',
      hook: '南2条から西〜南西方向へ徒歩約15分',
      f7_fragment: '十勝産そばや清水町名物の牛玉ステーキ丼・牛トロ丼が味わえる人気店。',
      f7_full: '「そば処 三品（みしな）」で十勝ならではのそばと牛肉の味覚を心ゆくまで堪能した。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '清水公園',
      lat: 43.004807,
      lng: 142.874837,
      address: '北海道上川郡清水町字清水第3線56-1',
      description:
        '豊かな緑に囲まれた町民の憩いの公園（終日開放）。十勝の爽やかな自然と季節の木立を感じながらゆったりと散策を楽しめる。',
      clue:
        '豊かな木立と美しい芝生が広がる町民の憩いの場「清水公園」をゆっくり楽しく元気に爽やかに散策しよう（終日開放）。十勝平野の西端に位置するこの公園には季節ごとの爽やかな風が吹き抜け、木漏れ日と小鳥のさえずりを感じながら穏やかで心地よい休日気分をゆったりと味わえる。日高山脈の雄大な気配を感じる自然の中で心地よくリフレッシュしたら、北に鎮座する「清水神社」へと歩いて向かおう。',
      hook: '公園から北方向へ徒歩約15分',
      f7_fragment: '豊かな緑と爽やかな風に包まれ、自然の息吹を感じられる町民の憩いの公園。',
      f7_full: '「清水公園」の爽やかな緑の中で深呼吸し、十勝清水の穏やかな時間を満喫した。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '清水神社',
      lat: 43.015632,
      lng: 142.874175,
      address: '北海道上川郡清水町北3条西2-2',
      description:
        '明治33年（1900年）に字ペケレベツで天照皇大神を遙拝したことに始まる清水町の総鎮守（参拝自由）。開拓の時代から町の発展を見守り続けている。',
      clue:
        '旅の締めくくりは、明治三十三年につどった先人たちが字ペケレベツで天照皇大神を遙拝したことに始まる由緒ある鎮守「清水神社」へ丁寧に心を込めてゆっくりと爽やかに参拝しよう（参拝自由）。静謐な木立に守られた立派な社殿の前で深く手を合わせれば、清流の恵みとともに歩んできた町の誇りが静かに胸へ響いてくる。美味しい味覚と祈りに満たされて、十勝清水の散歩を晴れやかに笑顔で心地よく結ぼう。',
      hook: '',
      f7_fragment: '明治三十三年の天照皇大神遙拝に始まり、清流の町を見守り続ける鎮守。',
      f7_full: '「清水神社」の清らかな杜に参拝し、十勝清水の散策を晴れやかに締めくくった。',
    },
  ],
};
