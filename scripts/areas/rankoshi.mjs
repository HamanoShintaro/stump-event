export default {
  slug: 'rankoshi',
  station_order: 1009,
  station: '蘭越',
  line: 'JR函館本線',
  area_name: '蘭越中心街',
  prefecture: '北海道',
  municipality: '蘭越町',
  category: 'グルメ・歴史',
  budget_tier: 2,
  tags: ['函館本線', '蘭越', 'らんこし米', 'おかしのほりかわ', '蘭越八幡神社'],
  style_genre: 'ink_and_watercolor',
  title: 'らんこし米の香りと尻別の街並みを歩く',
  description:
    '簡易委託駅のJR蘭越駅から大正元年創業のおかしのほりかわ、らんこし米が味わえるレストランぼん田、蘭越八幡神社を経て花一会図書館へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Rankoshi Station, a Meiji-born Japanese confectionery shop with rice-flour cakes, steaming local rice balls at a cozy town restaurant, a historic pioneer Shinto shrine torii, and a sunlit community library, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び蘭越を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '大正元年創業の老舗 おかしのほりかわ',
      subtext: 'ニセコ雪饅や蘭越米の米粉を使ったロールケーキを味わった',
      badge: {
        code: 'rankoshi_horikawa',
        name_ja: '蘭越の老舗菓子匠',
        subtitle_en: 'Okashi no Horikawa',
        description:
          'おかしのほりかわを訪れ、大正元年創業の伝統銘菓と蘭越米粉スイーツを楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of snowy white sweet manju buns and a delicate rice-flour roll cake on a ceramic plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '釜焚きらんこし米の レストランぼん田',
      subtext: '街の茶屋で艶やかならんこし米のおにぎりや釜飯を堪能した',
      badge: {
        code: 'rankoshi_bonta',
        name_ja: '釜焚きらんこし米',
        subtitle_en: 'Restaurant Bonta',
        description:
          '街の茶屋 レストランぼん田を訪れ、自慢のらんこし米の美味しさを満喫したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a traditional iron kama pot brimming with glistening white Rankoshi rice and handmade onigiri rice balls on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '石川開拓民ゆかりの 蘭越八幡神社',
      subtext: '明治三十一年に佐奇神社より分霊された歴史ある社に参拝した',
      badge: {
        code: 'rankoshi_shrine',
        name_ja: '佐奇分霊の八幡社',
        subtitle_en: 'Rankoshi Hachiman Shrine',
        description:
          '蘭越八幡神社に参拝し、石川県からの開拓民が築いた信仰の絆に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a stately Shinto shrine torii gate framed by katsura trees in autumn light on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '静かな学びの拠点 蘭越町花一会図書館',
      subtext: '街歩きの締めくくりに温かな文化施設でゆったりと一息ついた',
      badge: {
        code: 'rankoshi_library',
        name_ja: '花一会の静かな書架',
        subtitle_en: 'Rankoshi Library',
        description:
          '蘭越町花一会図書館を訪れ、町の文化拠点で穏やかな休憩時間を過ごしたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of open hardcover books beside a sunlit wooden reading desk and a small flower vase on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'rankoshi_complete',
    name_ja: '蘭越・名米と街並みの旅人',
    subtitle_en: 'Explorer of Rankoshi',
    description:
      'JR蘭越駅からおかしのほりかわ、レストランぼん田、蘭越八幡神社、花一会図書館まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting glistening white rice grains, a traditional confectionery sweet, and a pioneer shrine torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR蘭越駅',
      lat: 42.804549,
      lng: 140.528668,
      address: '北海道磯谷郡蘭越町蘭越町1',
      description:
        '明治37年（1904年）開業の簡易委託駅（日中窓口営業あり）。かつて急行「ニセコ」が停車し、現在は快速「ニセコライナー」の始発駅としても知られる尻別川流域の玄関口。',
      clue:
        '明治三十七年に開業し、アイヌ語で「カツラの木が多いところ」に町名を由来する尻別川流域の玄関口「JR蘭越駅」から、名米と街並みを味わう散歩を始めよう（日中窓口あり）。かつて急行ニセコも停車した歴史ある駅の周辺には、昔ながらの老舗菓子店や観光拠点が徒歩圏内に揃っている。改札を出て北西方向へと外へ踏み出したら、まずは駅すぐそばの老舗「おかしのほりかわ」を目指して軽やかに歩き出そう。',
      hook: '駅から北西方向へ徒歩約1分',
      f7_fragment: '明治三十七年開業、快速ニセコライナーの始発駅ともなる蘭越町の玄関口。',
      f7_full: '「JR蘭越駅」を後にし、大正創業の老舗菓子店とらんこし米を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'おかしのほりかわ',
      lat: 42.805095,
      lng: 140.527888,
      address: '北海道磯谷郡蘭越町蘭越町135',
      description:
        '大正元年（1912年）創業の老舗和洋菓子店（月〜土8:30〜19:00、日9:30〜18:00、不定休）。全国菓子大博覧会受賞の「ニセコ雪饅」や蘭越米の米粉スイーツが名物。',
      clue:
        '大正元年創業の老舗「おかしのほりかわ」で、ニセコ雪饅や蘭越米粉スイーツをゆっくり選ぼう（不定休）。次は北西の「街の茶屋 レストランぼん田」へ向かおう。',
      hook: '北西方向へ徒歩約2分',
      f7_fragment: '大正元年創業で、銘菓「ニセコ雪饅」や蘭越米粉スイーツが人気の菓子店。',
      f7_full: '「おかしのほりかわ」で蘭越米の優しい甘みに出会い、笑顔がほころんだ。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '街の茶屋 レストランぼん田',
      lat: 42.805655,
      lng: 140.527348,
      address: '北海道磯谷郡蘭越町蘭越町130',
      description:
        '蘭越町観光物産協会が入る「街の茶屋」内のレストラン（物販9:00〜17:00、レストラン11:00〜14:00頃）。ブランド米「らんこし米」の釜焚きおにぎりや釜飯・定食が人気。',
      clue:
        '蘭越町観光物産協会が入る「街の茶屋 レストランぼん田」で、自慢の名米をゆっくり味わおう（レストラン11:00〜14:00頃・物販9:00〜17:00）。釜でふっくらと焚き上げられたブランド米「らんこし米」のおにぎりや釜飯、定食は、お米本来の甘みと艶が際立つ忘れられない美味しさだ。大地の恵みにお腹も心も満たされたら、北方向に鎮座する「蘭越八幡神社」へと軽やかに歩を進めよう。',
      hook: '北方向へ徒歩約6分',
      f7_fragment: '街の茶屋内にあり、釜焚き「らんこし米」のおにぎりや釜飯が味わえる店。',
      f7_full: '「レストランぼん田」で艶やかならんこし米を味わい、町の鎮守へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '蘭越八幡神社',
      lat: 42.8091,
      lng: 140.529143,
      address: '北海道磯谷郡蘭越町蘭越町258-7',
      description:
        '明治31年（1898年）、石川県からの開拓民が故郷の佐奇神社から分霊を受け創建した鎮守（参拝自由・無人）。昭和59年に現在地へ移転し、神功皇后を祀っている。',
      clue:
        '明治三十一年に石川県からの開拓民が故郷の佐奇神社より分霊を受けて創建し、昭和五十九年に現在地へ移転した「蘭越八幡神社」へ丁寧に心を込めて参拝しよう（参拝自由）。遠く北陸から渡った先人たちがこの地に築いた歴史と信仰の絆が、木立に囲まれた静かな境内から穏やかに伝わってくる。清々しい境内で旅の無事を祈願したら、南方向の「蘭越町花一会図書館」へと楽しく軽やかに元気に歩を進めよう。',
      hook: '南方向へ徒歩約9分',
      f7_fragment: '石川県からの開拓民が佐奇神社より分霊を受け創建した蘭越の鎮守社。',
      f7_full: '「蘭越八幡神社」の境内で開拓民の歴史に手を合わせ、図書館へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '蘭越町花一会図書館',
      lat: 42.803854,
      lng: 140.527559,
      address: '北海道磯谷郡蘭越町蘭越町880-9',
      description:
        'コミュニティプラザ花一会内にある町立図書館（10:00〜18:00・水曜〜20:00、月曜・祝日・第4金曜・年末年始休）。散策の合間に立ち寄れる静かで温かな文化・休憩拠点。',
      clue:
        '旅の締めくくりは、コミュニティプラザ花一会の中にある「蘭越町花一会図書館」で静かに一息つこう（10:00〜18:00・水曜〜20:00、月曜・祝日等休）。木の温もりを感じる落ち着いた空間は、地域の文化に触れながら旅の余韻を味わうのにぴったりで、JR蘭越駅からも東へ徒歩約二分とアクセスも実に良い。名米と歴史に彩られた蘭越の散歩を、晴れやかな気持ちで明るく楽しく締めくくろう。',
      hook: '',
      f7_fragment: 'コミュニティプラザ花一会内にあり、駅からも近い静かな文化・休憩拠点。',
      f7_full: '「蘭越町花一会図書館」で静かな余韻を味わい、蘭越の散歩を終えた。',
    },
  ],
};
