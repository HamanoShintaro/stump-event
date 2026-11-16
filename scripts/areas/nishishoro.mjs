export default {
  slug: 'nishishoro',
  station_order: 954,
  station: '西庶路',
  line: 'JR根室本線',
  area_name: '白糠・西庶路',
  prefecture: '北海道',
  municipality: '白糠町',
  category: '歴史・グルメ',
  budget_tier: 1,
  tags: ['根室本線', '庶路炭鉱', '西庶路神社', 'ふれあい公園', '洋食'],
  style_genre: 'ink_and_watercolor',
  title: '炭鉱の記憶と日常のぬくもりが息づく西庶路',
  description:
    '明治鉱業庶路炭鉱の専用線接続点に始まるJR西庶路駅から、西庶路神社、西庶路郵便局、ふれあい公園、洋食店を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Nishishoro in Shiranuka, Hokkaido, featuring a quiet northern train station surrounded by residential streets, a warm village Shinto shrine, a sunny neighborhood park, and a cozy roadside diner, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び西庶路を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '夏祭りや冬灯りが地域をつなぐ静かな鎮守の森',
      subtext: '西庶路神社で地域行事が息づく穏やかな境内に触れた',
      badge: {
        code: 'nishishoro_shrine',
        name_ja: '西庶路社の参詣人',
        subtitle_en: 'Visitor of Nishishoro Shrine',
        description:
          '西庶路錦公園隣の西庶路神社を訪れ、季節の行事が息づく穏やかな境内に手を合わせたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet wooden torii gate lit by warm winter Swedish torch lanterns on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '旧炭鉱の記憶が残る街並みを見守る日常の窓口',
      subtext: '西庶路郵便局周辺の昔ながらの街区を歩き抜けた',
      badge: {
        code: 'nishishoro_post',
        name_ja: '庶路街区の散策者',
        subtitle_en: 'Walker of Nishishoro',
        description:
          '旧炭鉱町の面影が残る街区に佇む西庶路郵便局周辺を歩き、暮らしの温もりに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a neighborhood post office sign along a tidy northern town street on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '芝生と遊具が広がり子どもたちの声が響く憩いの広場',
      subtext: '西庶路ふれあい公園で街の開放的な空気に触れ一息ついた',
      badge: {
        code: 'nishishoro_park',
        name_ja: 'ふれあい公園の旅人',
        subtitle_en: 'Rester of Fureai Park',
        description:
          'パークゴルフ場やふわふわドームがある西庶路ふれあい公園のベンチで寛いだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a white puffy dome trampoline and wooden park bench on green turf on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '国道沿いの赤い三角屋根・ドライブイン 紀文',
      subtext: '昭和47年開業の老舗で温かい定食や名物豚丼を味わった',
      badge: {
        code: 'nishishoro_kibun',
        name_ja: '紀文の食卓',
        subtitle_en: 'Diner of Kibun',
        description:
          'ドライブイン 紀文で、昭和47年開業の老舗ならではの温かい食事を堪能したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a red triangular-roofed countryside diner beside a steaming pork bowl on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishishoro_complete',
    name_ja: '西庶路・炭鉱跡とぬくもりの旅人',
    subtitle_en: 'Traveler of Nishishoro',
    description:
      'JR西庶路駅から西庶路神社、西庶路郵便局、西庶路ふれあい公園、ドライブイン 紀文まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a winter torch-lit shrine, green park dome, and red-roofed diner on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西庶路駅',
      lat: 43.006803,
      lng: 144.109103,
      address: '北海道白糠郡白糠町西庶路西1条南3-1',
      description:
        '昭和16年（1941年）3月28日に明治鉱業庶路炭鉱の専用線接続点として開設、昭和27年に駅へ昇格した無人駅（終日開放）。炭鉱閉山後も地域の玄関口として残る。',
      clue:
        '昭和十六年三月に明治鉱業庶路炭鉱の専用線接続点として開設され、昭和二十七年に駅へと昇格した「JR西庶路駅」から楽しい町歩きと散策を始めよう（終日開放）。かつて炭鉱町として栄えた歴史の面影を感じながら静かな無人駅のホームを北西方向へと踏み出したら、まずは地域の鎮守「西庶路神社」を目指して、爽やかな風を感じながらのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に歩き出そう。',
      hook: '駅を出て北西方向へ徒歩約6分',
      f7_fragment: '昭和十六年開設の庶路炭鉱専用線接続点に始まり、地域を見守る無人駅。',
      f7_full: '「JR西庶路駅」を後にし、炭鉱の記憶と日常の温もりが息づく町歩きを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '西庶路神社',
      lat: 42.979228,
      lng: 144.125747,
      address: '北海道白糠郡白糠町西庶路西1条北1-3',
      description:
        '西庶路錦公園に隣接する地域の鎮守（境内自由・無休）。7月中旬の例大祭では西庶路音頭のパレードや神輿渡御で賑わい、年末年始には参道にスウェーデントーチが灯される。',
      clue:
        '西庶路錦公園に隣接し、夏祭りや冬のスウェーデントーチが地域を温かくつなぐ「西庶路神社」へ参拝しよう（境内自由）。参拝後は北東〜東の「西庶路郵便局」へ向かおう。',
      hook: '北東〜東方向へ徒歩約4〜5分',
      f7_fragment: '夏の西庶路音頭パレードや冬のスウェーデントーチで地域を結ぶ鎮守。',
      f7_full: '「西庶路神社」の穏やかな境内に参拝し、地域に息づく季節の行事に思いを馳せた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '西庶路郵便局',
      lat: 42.980698,
      lng: 144.126718,
      address: '北海道白糠郡白糠町西庶路東1条北2-1-33',
      description:
        '西庶路の住宅街・市街地の暮らしを支える拠点（郵便窓口平日9:00〜17:00、土日祝休）。かつて炭鉱町として栄えた街の記憶を今に伝える街区に位置している。',
      clue:
        'かつて炭鉱町として栄えた歴史を静かに伝える市街地の一角に佇み、地域の日常を支え続けている「西庶路郵便局」の前をゆっくり歩いてみよう（平日9:00〜17:00、土日祝休）。整然と区画された街並みと穏やかな暮らしの気配を感じながら一歩ずつ歩みを進めると、町が積み重ねてきた長い時間の温もりが静かに胸に伝わってくる。通りを抜けて東の緑豊かな「西庶路ふれあい公園」へと向かおう。',
      hook: '東1条から東方向へ徒歩約3分',
      f7_fragment: '旧炭鉱町の面影が残る市街地の一角で、日々の暮らしを支える郵便局。',
      f7_full: '「西庶路郵便局」の周辺を歩き、炭鉱時代から続く街並みの記憶を感じた。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '西庶路ふれあい公園',
      lat: 42.983149,
      lng: 144.130406,
      address: '北海道白糠郡白糠町西庶路東2条北2-2',
      description:
        'パークゴルフ場や健康遊具、トランポリン遊具「ふわふわドーム」などが整備された地域の憩いの場（終日開放）。木陰やベンチで心地よく一息つくことができる。',
      clue:
        'パークゴルフ場や健康遊具、子どもたちに人気の「ふわふわドーム」などが綺麗に整備された地域の憩いの場「西庶路ふれあい公園」のベンチでゆったり休憩しよう（終日開放）。広い芝生と道東の大きな青い空を眺めながらひと息つけば、ここまでの歩みの疲れもすっと心地よく軽くなっていく。十分にリフレッシュできたら、南西へ歩いて国道38号沿いの老舗「ドライブイン 紀文」へと楽しく向かおう。',
      hook: '南西方向へ徒歩約10〜12分',
      f7_fragment: '芝生やふわふわドームを備え、ベンチで憩える地域密着の公園。',
      f7_full: '「西庶路ふれあい公園」の爽やかな風の中で一息つき、街の開放感を味わった。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'ドライブイン 紀文',
      lat: 42.974753,
      lng: 144.129499,
      address: '北海道白糠郡白糠町西庶路西1条南3-2-3',
      description:
        '昭和47年（1972年）開業、赤い三角屋根と時計が目印の老舗ドライブイン（11:00〜19:00、不定休）。ボリュームのある豚丼や定食で旅を締めくくれる。',
      clue:
        '旅の締めくくりは、昭和四十七年開業、赤い三角屋根と時計が目印として国道38号線沿いで長く愛されている老舗「ドライブイン 紀文」で美味しい食事をゆっくり味わおう（11:00〜19:00、不定休）。温かな店内でいただくボリュームたっぷりの豚丼や定食は、街歩きの終わりにぴったりの優しい美味しさだ。西庶路の暮らしのぬくもりを胸いっぱいに抱いて、心温まる楽しい旅を晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '昭和四十七年開業、赤い三角屋根が目印の国道沿いの老舗ドライブイン。',
      f7_full: '「ドライブイン 紀文」で温かな名物豚丼を堪能し、西庶路の旅を終えた。',
    },
  ],
};
