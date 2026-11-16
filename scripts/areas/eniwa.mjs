export default {
  slug: 'eniwa',
  station_order: 922,
  station: '恵庭',
  line: 'JR千歳線',
  area_name: '恵庭中心部・黄金',
  prefecture: '北海道',
  municipality: '恵庭市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['千歳線', '神社', '釜めし', '縄文遺跡', 'ジェラート'],
  style_genre: 'ink_and_watercolor',
  title: '恵庭・古社の祈りと縄文の記憶に触れる旅',
  description:
    '花のまち恵庭の玄関口から明治創祀の豊栄神社と釜めしの名店、国指定史跡カリンバ遺跡、ジェラート店を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Eniwa, Hokkaido, featuring a modern station plaza with flowers, a quiet wooden Shinto shrine amidst tall trees, traditional clay kama-meshi pots, and a sunlit Jomon archaeological park, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '恵庭の古社と縄文の歴史を辿る道で、どの場面が印象的でしたか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '明治七年の開拓移住者が祀った豊栄神社の静寂',
      subtext: '歴史を刻む社殿の杜で、先人の祈りにそっと手を合わせた',
      badge: {
        code: 'eniwa_toyosaka_shrine',
        name_ja: '豊栄の祈りの参拝者',
        subtitle_en: 'Pilgrim of Toyosaka Shrine',
        description:
          '明治7年（1874年）創祀の豊栄神社を訪れ、恵庭の開拓の歴史に思いを馳せたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden Shinto torii gate framed by evergreen cedar branches on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '道産食材の出汁が香る名店いちえの熱々釜めし',
      subtext: '蓋を開けた瞬間の湯気と海の幸の旨みに笑顔がこぼれた',
      badge: {
        code: 'eniwa_ichie_kamameshi',
        name_ja: '恵庭釜めしの美食家',
        subtitle_en: 'Connoisseur of Eniwa Kamameshi',
        description:
          '旬のお料理・釜めし いちえで、北海道産の豊かな食材を炊き込んだ名物釜めしを堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an iron kamameshi pot with rising steam and wooden lid on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '漆塗り装身具が出土した縄文の聖地カリンバ遺跡',
      subtext: '数千年の時を超えた縄文の人々の暮らしにロマンを感じた',
      badge: {
        code: 'eniwa_karinba_jomon',
        name_ja: '縄文漆器の探究者',
        subtitle_en: 'Seeker of Karinba Jomon',
        description:
          '国指定史跡カリンバ遺跡を訪ね、縄文時代の高度な文化と祈りの痕跡に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an ancient Jomon lacquer comb pattern and green marshland leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '道産ミルクが溶け合う本格ジェラート店の甘い余韻',
      subtext: '散策の終わりに味わう爽やかなジェラートが格別だった',
      badge: {
        code: 'eniwa_gigi_gelato',
        name_ja: '恵庭氷菓の愛好家',
        subtitle_en: 'Lover of Eniwa Gelato',
        description:
          'Gelateria e Bar Gigiで道産ミルクの濃厚なジェラートを味わい、散策を締めくくったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a pastel two-scoop gelato cup with a crisp wafer on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'eniwa_complete',
    name_ja: '恵庭・古社と縄文の探訪者',
    subtitle_en: 'Explorer of Eniwa Shrine and Jomon Heritage',
    description:
      'JR恵庭駅を起点に、明治創祀の豊栄神社、釜めしの名店、カリンバ遺跡、ジェラート店まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem combining a Shinto torii, ancient Jomon motif, and blooming Eniwa flowers on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR恵庭駅',
      lat: 42.882728,
      lng: 141.586811,
      address: '北海道恵庭市相生町1-1',
      description:
        '大正15年（1926年）8月21日に開業した「花のまち恵庭」の玄関口（終日利用可・無料）。快速エアポートも停車し、四季を通じて美しい花壇が訪れる人を迎える。',
      clue:
        '大正十五年八月に開業し、「花のまち恵庭」の玄関口として多くの旅人を温かく迎えてきた「JR恵庭駅」から楽しい町歩きと散策を始めよう（終日利用可）。色とりどりの季節の花々に彩られた駅前広場をゆっくり後にして西口側へ外へ出たら、まずは市街地の西側をまっすぐ進んだ先に鎮座する明治七年創祀の古社「豊栄神社」を目指してのんびり楽しく元気に笑顔で外へと力強く爽やかに元気に歩き出そう。',
      hook: '西口側へ出て西方向へ徒歩約20分',
      f7_fragment: '大正十五年開業、花壇が彩る「花のまち恵庭」の玄関口。',
      f7_full: '「JR恵庭駅」から花のまちの爽やかな風に吹かれながら、恵庭巡りの旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '豊栄神社',
      lat: 42.885461,
      lng: 141.568436,
      address: '北海道恵庭市大町3-6-5',
      description:
        '明治7年（1874年）6月15日に移住者たちが稲荷大神を奉斎した小祠に始まる歴史ある神社（終日参拝可・無料）。恵庭の開拓と発展を静かに見守り続けている。',
      clue:
        '明治七年六月に移住者たちが小祠に稲荷大神を祀ったことに始まる「豊栄神社」へ丁寧に参拝しよう（終日参拝可）。静かな杜で手を合わせたら、北方向にある名店「旬のお料理・釜めし いちえ」へ向かおう。',
      hook: '大町から北方向の柏木町へ徒歩約12分',
      f7_fragment: '明治七年に移住者が稲荷大神を祀ったことに始まる恵庭の古社。',
      f7_full: '「豊栄神社」の清らかな社殿に参拝し、開拓期から続く恵庭の歴史に想いを馳せた。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '旬のお料理・釜めし いちえ',
      lat: 42.894217,
      lng: 141.565607,
      address: '北海道恵庭市柏木町3-3-2',
      description:
        'ウニやイクラなど北海道産の豊かな食材を炊き上げる釜めしと旬の和食で知られる名店（11:00〜15:00／水〜日17:00〜21:00・土曜〜22:00、火曜・月曜夜休）。',
      clue:
        '地元のみならず道内外から多くの食通が足を運ぶ名店「旬のお料理・釜めし いちえ」で温かい自慢の食事をゆっくり味わおう（11:00〜15:00等、火曜休）。道産米にウニやイクラ、季節の幸の旨みがたっぷり染み込んだ熱々の釜めしは、蓋を開けた瞬間の芳醇な湯気から格別の美味しさだ。お腹が幸せにしっかり満たされたら、東の黄金中央エリアにある国指定史跡「カリンバ遺跡」へと向かおう。',
      hook: '柏木町から東へ線路を越えて徒歩約32分（またはバス・タクシー利用可）',
      f7_fragment: '道産食材をふっくら炊き上げる名物釜めしと旬の和食が人気の名店。',
      f7_full: '「旬のお料理・釜めし いちえ」で湯気香る絶品釜めしを味わい、深い満足に浸った。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'カリンバ遺跡',
      lat: 42.888186,
      lng: 141.593468,
      address: '北海道恵庭市黄金中央5-216-7',
      description:
        '縄文時代後期〜晩期の墓壙群から色鮮やかな漆塗り装身具などが多数出土した国指定史跡（日中自由見学・無料）。隣接するカリンバ自然公園はミズバショウの群生地としても親しまれる。',
      clue:
        '縄文時代後期から晩期の墓壙群から精巧な漆塗り装身具が数多く出土した国指定史跡「カリンバ遺跡」をじっくり訪ねよう（日中見学自由・無料）。緑に覆われた広々とした史跡公園の中に立てば、数千年前にこの地で豊かな精神文化を育んだ縄文の人々の息吹が静かに胸へと伝わってくる。太古のロマンをたっぷり感じたら、南へ歩いて人気ジェラート店「Gelateria e Bar Gigi」へ向かおう。',
      hook: '黄金中央から南方向へ徒歩約4〜5分',
      f7_fragment: '縄文時代の漆塗り装身具が多数出土した国指定史跡の公園。',
      f7_full: '「カリンバ遺跡」の広々とした緑の地に立ち、はるかな縄文の記憶に触れた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'Gelateria e Bar Gigi',
      lat: 42.885987,
      lng: 141.592339,
      address: '北海道恵庭市黄金南2-19-8',
      description:
        '恵庭駅東口から徒歩約7〜8分の人気店（11:00〜17:30等、月曜・第2火曜休）。北海道産ミルクや旬の果実を活かした濃厚イタリアンジェラートやパンケーキが楽しめる。',
      clue:
        '旅の締めくくりは、恵庭駅東口近くのお洒落な一軒「Gelateria e Bar Gigi」で甘い休憩時間をゆっくり楽しもう（11:00〜17:30等、月曜等休）。北海道産ミルクの濃厚なコクと旬の果実や素材のみずみずしさが溶け合う本格イタリアンジェラートは、歩き疲れた体にすっと染み渡る。とびきりの一皿をゆっくり堪能して、歴史と美味に満ちた恵庭の街歩きを晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '道産ミルクや旬の果実の本格イタリアンジェラートが評判の人気店。',
      f7_full: '「Gelateria e Bar Gigi」の爽やかなジェラートで寛ぎ、恵庭の街歩きを締めくくった。',
    },
  ],
};
