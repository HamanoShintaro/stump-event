export default {
  slug: 'kamiashibetsu',
  station_order: 935,
  station: '上芦別',
  line: 'JR根室本線',
  area_name: '上芦別・野花南湖',
  prefecture: '北海道',
  municipality: '芦別市',
  category: '歴史・自然',
  budget_tier: 1,
  tags: ['根室本線', '炭鉱遺産', 'ガタタン', '上芦別神社', '野花南湖'],
  style_genre: 'ink_and_watercolor',
  title: '炭鉱の記憶とダム湖を巡る上芦別の旅',
  description:
    'JR上芦別駅から山神を祀る上芦別神社、名物ガタタンの新宝来軒、明治鉱業記念碑、野花南湖畔の上芦別公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Kami-Ashibetsu in Hokkaido, featuring a small rural train station, a mossy hillside Shinto shrine, a suspension bridge stretching over calm emerald dam waters of Lake Nokananko, and autumn-tinted mountain ridges, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び上芦別を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '炭鉱の山神と地域の暮らしを見守る上芦別神社',
      subtext: '明治末期からの歴史を刻む静かな社殿に手を合わせた',
      badge: {
        code: 'kamiashibetsu_shrine',
        name_ja: '山神の杜の参拝者',
        subtitle_en: 'Shrine of Mountain Spirit',
        description:
          '炭鉱の安全と地域の暮らしを見守り続けてきた上芦別神社を訪れ、静かに参拝したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet mountain shrine torii gate amidst tall cedar trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '復活した老舗の味・芦別名物ガタタンの温もり',
      subtext: '新宝来軒で具だくさんの熱々とろみスープを堪能した',
      badge: {
        code: 'kamiashibetsu_gatatan',
        name_ja: 'ガタタン継承者',
        subtitle_en: 'Keeper of Gatatan',
        description:
          '2016年に老舗の味を継いで復活した新宝来軒で、芦別名物ガタタンを味わったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming ceramic bowl of thick savory gatatan soup with wooden ladle on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: 'かつての炭鉱街を伝える明治鉱業の記念碑',
      subtext: '約4千人が暮らした明治地区の歴史に静かに思いを馳せた',
      badge: {
        code: 'kamiashibetsu_meiji_monument',
        name_ja: '五山の記憶を継ぐ者',
        subtitle_en: 'Memory of the Coal Mine',
        description:
          '明治児童公園に立つ明治鉱業上芦別鉱業所記念碑を訪れ、炭鉱の歩みに触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a weathered stone monument carved with historical reliefs beside wild grasses on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '野花南湖のつり橋と空知川の豊かな水辺の風',
      subtext: '大正期建造のダム湖畔で、清々しい自然の風景に出合った',
      badge: {
        code: 'kamiashibetsu_nokananko',
        name_ja: '野花南湖の風見',
        subtitle_en: 'Breeze of Lake Nokananko',
        description:
          '野花南湖畔の上芦別公園を訪れ、つり橋と静かな湖面の風景を満喫したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a graceful suspension bridge spanning calm emerald dam waters on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kamiashibetsu_complete',
    name_ja: '上芦別・炭山とダム湖の旅人',
    subtitle_en: 'Traveler of Kami-Ashibetsu Heritage',
    description:
      'JR上芦別駅から上芦別神社、新宝来軒、明治児童公園、野花南湖畔の上芦別公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a mountain shrine torii, suspension bridge, and emerald dam lake on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR上芦別駅',
      lat: 43.488861,
      lng: 142.211065,
      address: '北海道芦別市上芦別町411-2',
      description:
        '大正9年（1920年）1月16日に開業したJR根室本線の無人駅（終日利用可）。かつて三菱鉱業や明治鉱業の炭鉱・森林鉄道の石炭積み出し拠点として栄えた。',
      clue:
        '大正九年一月に開業し、かつては三菱鉱業や明治鉱業の石炭や木材の積み出し拠点として大きな賑わいを見せた「JR上芦別駅」から楽しい町歩きと散策を始めよう（終日利用可）。山あいの静かな無人駅のホームをゆっくり後にして外へ踏み出したら、まずは北西方向へ歩いて炭鉱の山神も祀られてきた由緒ある「上芦別神社」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に歩き出そう。',
      hook: '駅前から北西方向へ徒歩約5分',
      f7_fragment: '大正九年開業、かつて炭鉱と森林鉄道の積み出し拠点として栄えた駅。',
      f7_full: '「JR上芦別駅」の静かなホームを後にし、炭山の記憶と湖を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '上芦別神社',
      lat: 43.492498,
      lng: 142.20556,
      address: '北海道芦別市上芦別町173',
      description:
        '明治末期の京都殖民協会入植時の奉斎に始まり、大正2年に三菱鉱業の「山神」としても祀られた神社（参拝自由）。昭和45年に現在地へ新社殿が建立された。',
      clue:
        '明治末期の入植から炭鉱の「山神」としても地域の信仰を集めた「上芦別神社」へ丁寧に参拝しよう（参拝自由）。静かな杜で手を合わせたら北西の「新宝来軒」へ向かおう。',
      hook: '神社から北西方向へ徒歩約10分',
      f7_fragment: '明治末期の入植に始まり、炭鉱の山神としても地域の暮らしを守った神社。',
      f7_full: '「上芦別神社」の静かな杜に参拝し、炭山とともに歩んだ地域の祈りに触れた。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '新宝来軒',
      lat: 43.497775,
      lng: 142.199809,
      address: '北海道芦別市上芦別町38-83',
      description:
        '2015年に閉店した老舗「宝来軒」の味を継ぎ、2016年に復活・創業した中華食堂（11:00〜15:00・17:00〜19:30頃、火曜休）。名物「ガタタン」やガタタンラーメンが人気。',
      clue:
        '平成二十八年に老舗の味を受け継いで見事に復活を遂げた人気の中華食堂「新宝来軒」で温かい名物料理をゆっくり美味しく楽しく味わおう（11:00〜15:00等、火曜休）。芦別ならではの具だくさんなとろみスープ料理「ガタタン」や熱々のガタタンラーメンは、体の芯からじんわり温まる忘れられない美味しさだ。お腹が幸せにしっかり満たされたら、東の緑豊かな「明治児童公園」へと歩いて向かおう。',
      hook: '泰山橋を渡り東方向へ徒歩約20分',
      f7_fragment: '老舗の味を継ぎ復活した中華食堂。芦別名物ガタタンが自慢の人気店。',
      f7_full: '「新宝来軒」で受け継がれる名物ガタタンを堪能し、旅の活力をしっかり養った。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '明治児童公園（明治鉱業上芦別鉱業所記念碑）',
      lat: 43.493413,
      lng: 142.21785,
      address: '北海道芦別市上芦別町350',
      description:
        'かつて「芦別五山」の一つ・明治鉱業上芦別鉱業所が置かれ約4,000人が暮らした明治地区の跡地にある公園（終日開放）。昭和55年に炭鉱関係者が建立した記念碑が立つ。',
      clue:
        'かつて「芦別五山」の一つである明治鉱業上芦別鉱業所が置かれ、約四千人もの人々が暮らした明治地区の跡地「明治児童公園（明治鉱業上芦別鉱業所記念碑）」をじっくり楽しく元気に訪ねよう（終日開放）。昭和五十五年に当時の炭鉱関係者によって建立された立派な記念碑の前に静かに立てば、往時の街の熱気と誇りが胸へ伝わってくる。歴史を胸に刻んだら、南東の「上芦別公園（野花南湖）」へ向かおう。',
      hook: '明治地区から南東方向へ徒歩約15分',
      f7_fragment: '約四千人が暮らした炭鉱街跡地に昭和五十五年建立の記念碑が立つ公園。',
      f7_full: '「明治児童公園（明治鉱業上芦別鉱業所記念碑）」で炭鉱街の記憶に静かに触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '上芦別公園（野花南湖）',
      lat: 43.484543,
      lng: 142.224234,
      address: '北海道芦別市上芦別町201',
      description:
        '大正7年（1918年）に初代ダムが建設された人造湖・野花南湖のほとりに広がる自然公園（4月中下旬〜10月末開園、冬期閉鎖）。湖に架かるつり橋や野鳥の飛来地として親しまれる。',
      clue:
        '旅の締めくくりは、大正七年に初代ダムが造られた野花南湖のほとりに広がる自然豊かな「上芦別公園（野花南湖）」をゆっくり楽しく爽やかに明るく歩こう（4月下旬〜10月末頃開園）。穏やかな湖面に架かる美しいつり橋を慎重に渡りながら、空知川の豊かな水辺と山々の風景を眺めて大きく深呼吸すれば、心が洗われていく心地よさだ。炭鉱の歴史と自然が調和する上芦別の旅を、晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '大正期建造の野花南湖畔に広がり、つり橋や野鳥の風景を楽しめる自然公園。',
      f7_full: '「上芦別公園（野花南湖）」のつり橋から静かな湖面を眺め、上芦別の旅を終えた。',
    },
  ],
};
