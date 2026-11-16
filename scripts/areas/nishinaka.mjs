export default {
  slug: 'nishinaka',
  station_order: 985,
  station: '西中',
  line: 'JR富良野線',
  area_name: '西中・中富良野北',
  prefecture: '北海道',
  municipality: '中富良野町',
  category: 'グルメ・自然',
  budget_tier: 2,
  tags: ['富良野線', 'サンタのヒゲ', '開拓記念碑', '風時計', 'メロン'],
  style_genre: 'ink_and_watercolor',
  title: '西中の丘と開拓碑を巡る田園の恵み散歩',
  description:
    'ログハウス風待合室のJR西中駅から富良野盆地開拓記念碑、西中直売本舗、サンタのヒゲ発祥のポプラファーム、風時計へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nishi-Naka Station with its log-cabin shelter overlooking the Tokachidake mountains, a pioneer stone monument in emerald fields, a ripe melon topped with soft-serve ice cream, and a country bakery cafe, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び西中を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '開拓発祥之地の富良野盆地開拓記念碑',
      subtext: '明治期に伊藤喜太郎が入植した歴史の石碑に見入った',
      badge: {
        code: 'nishinaka_pioneer',
        name_ja: '富良野開拓の原点',
        subtitle_en: 'Furano Pioneer Stele',
        description:
          '富良野盆地開拓記念碑を訪れ、明治の入植と開墾の歴史に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an engraved pioneer granite stele framed by distant Tokachidake peaks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '朝採れメロンが並ぶ西中直売本舗',
      subtext: '旬のとうもろこしや岩瀬牧場直送ソフトクリームを味わった',
      badge: {
        code: 'nishinaka_chokubai',
        name_ja: '西中の朝採れ恵み',
        subtitle_en: 'Nishi-Naka Farm Stand',
        description:
          '西中直売本舗で朝採れメロンやとうもろこし、濃厚ソフトクリームを楽しんだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a netted Hokkaido melon and golden sweet corn ears in a harvest basket on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'サンタのヒゲ発祥のポプラファーム',
      subtext: '半切り赤肉メロンにソフトクリームを乗せた贅沢を堪能した',
      badge: {
        code: 'nishinaka_popura',
        name_ja: 'サンタのヒゲ発祥',
        subtitle_en: 'Melon Soft-Serve',
        description:
          'ポプラファーム 中富良野本店で名物スイーツ「サンタのヒゲ」を堪能したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a halved orange-flesh melon crowned with swirling white soft-serve ice cream on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '天然酵母のベーカリー＆カフェ 風時計',
      subtext: '古民家空間で十勝岳連峰を眺めながらパンと珈琲を楽しんだ',
      badge: {
        code: 'nishinaka_kazadokei',
        name_ja: '古民家のパンと風',
        subtitle_en: 'Kazadokei Bakery',
        description:
          'ベーカリー＆カフェ 風時計で天然酵母パンを味わい十勝岳連峰の絶景に癒やされたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of rustic sourdough bread loaves beside a farmhouse window framing mountain peaks on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishinaka_complete',
    name_ja: '西中・メロンと開拓の旅人',
    subtitle_en: 'Explorer of Nishi-Naka',
    description:
      'JR西中駅から開拓記念碑、西中直売本舗、ポプラファーム、風時計まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a log-cabin train stop, a melon soft-serve dessert, and Tokachidake mountain peaks on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西中駅',
      lat: 43.429166,
      lng: 142.441647,
      address: '北海道空知郡中富良野町字中富良野基線北18',
      description:
        '昭和33年（1958年）3月25日開業の無人駅（終日開放）。ログハウス風の木造待合室が特徴で、ホームから十勝岳連峰を一望できる「十勝岳展望区間」に位置する。',
      clue:
        '昭和三十三年三月に開業し、ログハウス風の木造待合室から十勝岳連峰を一望できる「JR西中駅」から田園散策を始めよう（終日開放）。富良野盆地の広々とした空と心地よい爽やかな風を胸いっぱいに感じながら北西方向へと外へ踏み出したら、まずは明治期の入植と開墾の歴史を今に刻む「富良野盆地開拓記念碑」を目指して、雄大な山並みを背に軽やかな足取りで爽やかに明るく楽しく元気に歩き出そう。',
      hook: '駅から北西方向へ徒歩約18分',
      f7_fragment: 'ログハウス風待合室があり、ホームから十勝岳連峰を一望できる無人駅。',
      f7_full: '「JR西中駅」から十勝岳連峰を望み、開拓碑と田園グルメを巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '富良野盆地開拓記念碑',
      lat: 43.436841,
      lng: 142.437728,
      address: '北海道空知郡中富良野町西1線北19',
      description:
        '明治期に伊藤喜太郎が入植・開墾した歴史を伝える石碑（終日見学自由）。「開拓発祥之地」と刻まれ、富良野盆地開拓の原点としての歴史を今に伝えている。',
      clue:
        '「開拓発祥之地」と刻まれた「富良野盆地開拓記念碑」の前に立ち、明治の開墾の深い歴史を静かにゆっくり偲ぼう（見学自由）。次は南東の「西中直売本舗」へ向かおう。',
      hook: '南東方向へ徒歩約20分',
      f7_fragment: '明治の入植と開墾の歴史を伝え、「開拓発祥之地」と刻まれた石碑。',
      f7_full: '「富良野盆地開拓記念碑」の前に立ち、豊かな富良野を築いた先人に敬意を表した。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '西中直売本舗',
      lat: 43.42672,
      lng: 142.445029,
      address: '北海道空知郡中富良野町東1線北18',
      description:
        '西中地区の農家が運営する直売所（9:00〜17:00等、6月中旬〜8月末・木曜休・9月土日祝・冬期休業）。朝採れメロンやとうもろこし、岩瀬牧場直送ソフトクリームが人気。',
      clue:
        '西中地区の農家が心を込めて運営する地域密着の直売所「西中直売本舗」へ楽しく立ち寄ってみよう（夏期営業・木曜休、冬期休業）。朝採れの甘いメロンやみずみずしいとうもろこし、さらに岩瀬牧場直送ミルクを使った濃厚で美味しいソフトクリームまで富良野の旬が勢揃いしている。大地の豊かな恵みを存分に満喫したら、国道237号沿いを南へ進み名店「ポプラファーム 中富良野本店」へ向かおう。',
      hook: '南東方向へ徒歩約2分',
      f7_fragment: '西中の農家が運営し、朝採れメロンや岩瀬牧場直送ソフトが人気の直売所。',
      f7_full: '「西中直売本舗」で朝採れメロンと濃厚ソフトに出会い、大地の恵みに笑顔になった。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'ポプラファーム 中富良野本店',
      lat: 43.425865,
      lng: 142.446086,
      address: '北海道空知郡中富良野町東1線北18-2',
      description:
        '半切り赤肉メロンにソフトクリームを乗せた名物スイーツ「サンタのヒゲ」発祥店（9:00〜17:00、4月中旬〜10月下旬無休、冬期休業）。',
      clue:
        '半切りの赤肉メロンに北海道の濃厚なソフトクリームをたっぷりと乗せた名物スイーツ「サンタのヒゲ」の発祥店「ポプラファーム 中富良野本店」で至福の味わいを笑顔でたっぷり堪能しよう（4月中旬〜10月下旬無休）。芳醇なメロンの果汁と冷たいミルクが口いっぱいに広がる幸せはまさに富良野ならではの贅沢だ。甘く楽しい時間を過ごしたら、南東の「ベーカリー＆カフェ 風時計」へと向かおう。',
      hook: '南東方向へ徒歩約25分',
      f7_fragment: '半切り赤肉メロンにソフトを乗せた名物「サンタのヒゲ」発祥の人気店。',
      f7_full: '「ポプラファーム 中富良野本店」でサンタのヒゲを味わい、至福のひとときを過ごした。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'ベーカリー＆カフェ 風時計',
      lat: 43.413803,
      lng: 142.450209,
      address: '北海道空知郡中富良野町東3線北16',
      description:
        '古民家を改装した天然酵母パンとカフェの店（11:30〜16:00、金〜日のみ営業・祝日休、1〜3月冬期休業）。富良野の天然水で焼いたパンを味わい、十勝岳連峰の景色を楽しめる。',
      clue:
        '旅の締めくくりは、古民家を温かく改装した天然酵母パンとカフェ「ベーカリー＆カフェ 風時計」でゆったりと休憩しよう（金〜日11:30〜16:00、冬期休業）。富良野の美味しい天然水で焼き上げたこだわりのパンと香り高い珈琲を味わいながら、窓越しに広がる十勝岳連峰の雄大な景色を眺めれば、日常を忘れる穏やかな時間が流れていく。西中の恵みと歴史の散歩を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '古民家を改装し、十勝岳連峰を望みながら天然酵母パンを楽しめるカフェ。',
      f7_full: '「ベーカリー＆カフェ 風時計」で山並みを望みつつ寛ぎ、西中の旅を終えた。',
    },
  ],
};
