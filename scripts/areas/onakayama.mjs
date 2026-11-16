export default {
  slug: 'onakayama',
  station_order: 992,
  station: '大中山',
  line: 'JR函館本線',
  area_name: '大中山・大川',
  prefecture: '北海道',
  municipality: '七飯町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '大中山', '古民家そば', 'ジャンボソフト', 'あかまつ公園'],
  style_genre: 'ink_and_watercolor',
  title: '大中山の古社と明治の古民家そばを味わう散歩',
  description:
    'JR大中山駅から築130年超の古民家そば店・序葉久、名物ソフトの野澤商店、大中山神社を経て函館山を望む七飯総合公園へ巡るルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Onakayama Station, a Meiji-era timber farmhouse serving handmade soba noodles on a wooden board, a nostalgic country shop ice cream cone, and a hillside park overlooking Mount Hakodate and the bay, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び大中山を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '築130年超の古民家 板そば 池田や 序葉久',
      subtext: '明治の梁を仰ぎ見ながら山形流の十割板そばを堪能した',
      badge: {
        code: 'onakayama_johakyu',
        name_ja: '明治古民家の板そば',
        subtitle_en: 'Farmhouse Soba Johakyu',
        description:
          '板そば 池田や 序葉久で明治期の古民家空間と香り高い十割板そばを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of handmade soba noodles served on a traditional wooden ita-soba tray inside a Meiji-era timber beam house on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'ジャンボソフトが名物の 野澤商店',
      subtext: '昔ながらの商店の店先で大きなソフトクリームを頬張った',
      badge: {
        code: 'onakayama_nozawa',
        name_ja: '大川のジャンボソフト',
        subtitle_en: 'Nozawa Shop Ice Cream',
        description:
          '野澤商店を訪れ、地元で長年親しまれる名物ジャンボソフトクリームを味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tall swirl soft-serve ice cream cone in front of a nostalgic rural storefront on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '立派なイチョウが見守る 大中山神社',
      subtext: '静かな境内に立つ大木と社殿の前で穏やかに手を合わせた',
      badge: {
        code: 'onakayama_shrine',
        name_ja: '大イチョウの鎮守',
        subtitle_en: 'Onakayama Shrine',
        description:
          '大中山神社に参拝し、立派なイチョウの木が彩る静謐な境内の空気に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a towering golden ginkgo tree beside a quiet wooden Shinto shrine torii on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '函館山を一望する 七飯総合公園',
      subtext: '丘陵の上から函館港まで広がる雄大な景色に深呼吸した',
      badge: {
        code: 'onakayama_park',
        name_ja: '函館望むあかまつ公園',
        subtitle_en: 'Nanae Akamatsu Park',
        description:
          '七飯総合公園（あかまつ公園）を訪れ、高台から函館山と海の大パノラマを望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of red pine trees framing a sweeping distant view of Mount Hakodate and the sparkling bay on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'onakayama_complete',
    name_ja: '大中山・古民家と高台の旅人',
    subtitle_en: 'Explorer of Onakayama',
    description:
      'JR大中山駅から序葉久、野澤商店、大中山神社、七飯総合公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a Meiji farmhouse soba tray, a golden ginkgo leaf, and a hillside view of Mount Hakodate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR大中山駅',
      lat: 41.864624,
      lng: 140.71382,
      address: '北海道亀田郡七飯町大中山1-2',
      description:
        '昭和25年（1950年）開業の七飯町南部の玄関口（終日利用可・無人駅）。近くを歴史ある赤松街道が通り、かつての農村集落と新しい街並みが調和した落ち着いた駅。',
      clue:
        '昭和二十五年に開業し、七飯町南部の玄関口として親しまれてきた「JR大中山駅」から歴史とグルメの散歩を始めよう（始発〜終電）。駅の近くには明治時代から続く赤松街道が通り、古くからの農村の温もりと穏やかな暮らしが息づいている。駅を出て南東方向へと外へ踏み出したら、まずは築百三十年を超える明治の古民家で絶品そばが味わえる「板そば 池田や 序葉久」を目指して軽やかに歩き出そう。',
      hook: '駅から南東方向へ徒歩約6分',
      f7_fragment: '赤松街道の近くに佇み、七飯町南部の玄関口として親しまれる無人駅。',
      f7_full: '「JR大中山駅」を後にし、明治の古民家そばから高台の公園を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: '板そば 池田や 序葉久（じょはきゅう）',
      lat: 41.861743,
      lng: 140.716905,
      address: '北海道亀田郡七飯町大川1-10-4',
      description:
        '築130年超の明治期の古民家（旧池田家）を改装した山形流十割板そばの名店（11:30〜15:00、金土日祝17:00〜20:00も営業、月曜等不定休）。太めの田舎そばと趣ある空間が魅力。',
      clue:
        '築百三十年超の明治古民家で味わう山形流十割そばの名店「板そば 池田や 序葉久」で昼食を楽しもう（不定休）。お腹を満たしたら東北東の「野澤商店」へ向かおう。',
      hook: '東北東方向へ徒歩約10分',
      f7_fragment: '築130年超の明治期古民家を改装した、香り高い山形流十割板そばの名店。',
      f7_full: '「板そば 池田や 序葉久」の重厚な梁の下で手打ち板そばを味わい、心が満たされた。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '野澤商店',
      lat: 41.864558,
      lng: 140.723861,
      address: '北海道亀田郡七飯町大川5-42-18',
      description:
        '昔ながらの商店・酒屋の店先で味わえる名物のジャンボソフトクリームが大人気の店（4〜10月10:30〜18:00・ソフト11:00〜16:00、11〜3月11:00〜16:00、月・火曜休）。',
      clue:
        '昔ながらの懐かしい商店の佇まいを残しながら、店先で買える名物のジャンボソフトクリームで道南中のファンを魅了している「野澤商店」へ立ち寄ってみよう（月・火曜休）。濃厚なバニラやモカの大きなソフトクリームを片手に味わう時間は、街歩きならではの素朴で格別な楽しみだ。甘いひとときで元気をしっかりチャージしたら、北西方向に鎮座する地域の守り神「大中山神社」へとゆっくり歩を進めよう。',
      hook: '北西方向へ徒歩約12分',
      f7_fragment: '昔ながらの商店の店先で味わえる名物ジャンボソフトクリームが人気の店。',
      f7_full: '「野澤商店」の大きなソフトクリームを手にして、昔ながらの温もりに笑顔になった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '大中山神社',
      lat: 41.868372,
      lng: 140.714376,
      address: '北海道亀田郡七飯町大中山2-5-5',
      description:
        '大中山地区の暮らしを見守り続けてきた地域の鎮守社（参拝自由・無休）。境内にそびえる立派なイチョウの大木と静かな社殿が、歴史ある土地の穏やかな気配を伝えている。',
      clue:
        '大中山地区の暮らしを長年にわたり静かに見守り続けてきた鎮守「大中山神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。鳥居をくぐると空に向かって枝を広げる立派なイチョウの大木と素朴な社殿が迎えてくれ、大川・大中山の豊かな歴史が自然と胸に迫ってくる。清らかな境内で旅の安全を祈願したら、北北西の丘陵地に広がる絶景の「七飯総合公園（あかまつ公園）」へと軽やかに歩を進めよう。',
      hook: '北北西方向へ徒歩約20分',
      f7_fragment: '立派なイチョウの大木と静かな社殿が印象的な大中山地区の鎮守社。',
      f7_full: '「大中山神社」のイチョウの大木の下で手を合わせ、丘の上の公園を目指した。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '七飯総合公園（あかまつ公園）',
      lat: 41.878358,
      lng: 140.706829,
      address: '北海道亀田郡七飯町大中山5-122-1',
      description:
        '大中山の丘陵地に整備された総合公園（園内常時開放・管理棟8:00〜19:00、冬季〜17:00、無休）。高台からは函館山や函館港までを一望する抜群の眺望が開けている。',
      clue:
        '旅の締めくくりは、大中山の丘陵地に広がる「七飯総合公園（あかまつ公園）」の高台から美しい絶景を眺めて締めくくろう（園内常時開放）。赤松の緑が心地よい園内を登っていくと、目の前には函館山から函館港までを見渡す雄大な大パノラマが広がり、これまでの歩みの疲れも爽やかに吹き飛んでいく。道南の豊かな自然と歴史を胸いっぱいに刻んで、大中山の充実した散歩を晴れやかに明るく笑顔で結ぼう。',
      hook: '',
      f7_fragment: '赤松の緑に包まれた丘陵地から函館山や函館港を一望できる総合公園。',
      f7_full: '「七飯総合公園」の高台から函館山を望み、大中山の豊かな散歩を終えた。',
    },
  ],
};
