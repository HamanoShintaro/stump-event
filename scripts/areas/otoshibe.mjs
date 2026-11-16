export default {
  slug: 'otoshibe',
  station_order: 998,
  station: '落部',
  line: 'JR函館本線',
  area_name: '落部港町・国道5号',
  prefecture: '北海道',
  municipality: '八雲町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '落部', '落部八幡宮', 'ドライブインやかた', '八雲町'],
  style_genre: 'ink_and_watercolor',
  title: '落部八幡宮と港町の暮らしを辿る散策路',
  description:
    'JR落部駅から落部郵便局、セイコーマート八雲落部店、宝暦年間創建の落部八幡宮を経て老舗ドライブインやかたへ東へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Otoshibe Station in a coastal Hokkaido town, a quiet street-corner postbox, the historic timber Otoshibe Hachimangu Shrine overlooking the sea, and a hearty plate of pork cutlet rice at a classic highway drive-in, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び落部を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅前通りに寄り添う 落部郵便局',
      subtext: '港町の生活の息遣いが感じられる街角をゆっくり歩いた',
      badge: {
        code: 'otoshibe_post',
        name_ja: '落部駅前の街角',
        subtitle_en: 'Otoshibe Post Corner',
        description:
          '落部郵便局の前を訪れ、港町・落部の穏やかな駅前通りの空気を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a tidy coastal town postbox and wooden eaves along a quiet street on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: 'ホットシェフが頼もしい セイコーマート 八雲落部店',
      subtext: '北海道ならではの温かい惣菜や飲み物を手に入れて街を歩いた',
      badge: {
        code: 'otoshibe_seicomart',
        name_ja: '道南のホットシェフ補給',
        subtitle_en: 'Otoshibe Seicomart',
        description:
          'セイコーマート 八雲落部店に立ち寄り、北海道らしい軽食と旅の活力を得たしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm boxed bento meal and hot tea bottle from a northern neighborhood store on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '宝暦年間創建の古社 落部八幡宮',
      subtext: '江戸時代から海辺の集落を見守り続ける境内で手を合わせた',
      badge: {
        code: 'otoshibe_hachimangu',
        name_ja: '宝暦の落部八幡宮',
        subtitle_en: 'Otoshibe Hachimangu',
        description:
          '落部八幡宮に参拝し、江戸時代から落部の漁村と暮らしを守る古社に祈ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an Edo-period Shinto shrine torii gate framed by coastal pines and gentle sea mist on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '名物カツライスが人気の ドライブインやかた',
      subtext: '国道5号線沿いの老舗でボリューム満点の地元グルメを堪能した',
      badge: {
        code: 'otoshibe_yakata',
        name_ja: 'やかたのカツライス',
        subtitle_en: 'Drive-in Yakata',
        description:
          'ドライブインやかたを訪れ、お皿からあふれそうな名物カツライスを楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a generous crispy pork cutlet over rice with savory sauce on a classic diner plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'otoshibe_complete',
    name_ja: '落部・港町と古社の旅人',
    subtitle_en: 'Explorer of Otoshibe',
    description:
      'JR落部駅から落部郵便局、セイコーマート、落部八幡宮、ドライブインやかたまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a coastal railway station, an Edo-era shrine torii gate, and a classic diner plate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR落部駅',
      lat: 42.187654,
      lng: 140.421211,
      address: '北海道二海郡八雲町落部1',
      description:
        '八雲町落部地区の玄関口となるJR函館本線の無人駅（24時間利用可）。海側の漁村と山側の上の湯温泉郷を結ぶ交通の要衝として、古くから地域の歴史を見守り続けている。',
      clue:
        '八雲町落部地区の玄関口であり、海側の漁村と山側の上の湯温泉郷を結ぶ交通の要衝として歴史を刻んできた「JR落部駅」から街歩きを始めよう（終日開放）。片道徒歩三十分圏内に港町の穏やかな暮らしと歴史の名所がぎゅっと詰まった歩きやすいエリアだ。駅を出て東方向へと外へ踏み出したら、まずは駅前通りからほど近い「落部郵便局」を目指して、潮の香る通りを爽やかに軽やかな足取りで歩き出そう。',
      hook: '駅から東方向へ徒歩約2分',
      f7_fragment: '海側の漁村と山側の温泉郷を結ぶ要衝として親しまれる落部地区の駅。',
      f7_full: '「JR落部駅」を後にし、港町の暮らしと江戸時代からの古社を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '落部郵便局',
      lat: 42.187691,
      lng: 140.422865,
      address: '北海道二海郡八雲町落部552-1',
      description:
        'JR落部駅から徒歩約2分の街角に佇む郵便局（窓口平日9:00〜17:00、土日祝休）。駅前通りの穏やかな生活の息遣いを感じられる、地域に根ざした立ち寄りスポット。',
      clue:
        '駅前通りの街角に佇む「落部郵便局」の前を歩き、港町の日常の息遣いを感じよう（平日9:00〜17:00）。次は東の「セイコーマート 八雲落部店」へ向かおう。',
      hook: '東方向へ徒歩約2分',
      f7_fragment: '落部駅から徒歩約2分の街角に佇み、地域の日常を支える郵便局。',
      f7_full: '「落部郵便局」の前を通り過ぎ、地元に欠かせないコンビニへと歩を進めた。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'セイコーマート 八雲落部店',
      lat: 42.187322,
      lng: 140.423645,
      address: '北海道二海郡八雲町落部549',
      description:
        '北海道民に親しまれる地域密着のコンビニエンスストア（6:00〜24:00、無休）。店内調理の温かい弁当・惣菜「ホットシェフ」を導入しており、散策中の補給に心強い。',
      clue:
        '北海道ならではの品揃えと店内調理「ホットシェフ」が頼もしい地域密着の「セイコーマート 八雲落部店」へ立ち寄ってみよう（6:00〜24:00、無休）。温かいお茶やご当地のおにぎり、お気に入りの北海道限定スイーツや軽食を手に取れば、街歩きの楽しさもいっそう広がっていく。旅の元気をしっかり補給したら、東方向に鎮座する江戸時代からの由緒ある古社「落部八幡宮」へと歩いて向かおう。',
      hook: '東方向へ徒歩約3分',
      f7_fragment: '店内調理の温かい「ホットシェフ」を備え、旅の補給に頼もしい道民の味方。',
      f7_full: '「セイコーマート 八雲落部店」で温かい飲み物を手に入れ、古社へと向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '落部八幡宮',
      lat: 42.188074,
      lng: 140.426759,
      address: '北海道二海郡八雲町落部332',
      description:
        '宝暦年間の創建と伝わる落部地区の由緒ある古社（参拝自由・無休）。海に面した漁村の集落とそこに暮らす人々の営みを、江戸時代から長きにわたり見守り続けている。',
      clue:
        '宝暦年間の創建と伝わる落部地区の由緒ある古社「落部八幡宮」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。海に面した漁村の集落とそこに暮らす人々の営みを江戸時代から長きにわたり見守り続けてきた境内には、潮風とともに穏やかで凛とした空気が流れている。歴史ある社殿の前で旅の安全と地域の安寧に手を合わせたら、南東方向の国道5号線沿いに立つ名店「ドライブインやかた」へ向かおう。',
      hook: '南東方向へ徒歩約23分',
      f7_fragment: '宝暦年間創建と伝わり、海辺の集落を江戸時代から見守り続ける古社。',
      f7_full: '「落部八幡宮」の境内で江戸時代からの歴史に手を合わせ、最後の名店へ向かった。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: 'ドライブインやかた',
      lat: 42.178585,
      lng: 140.443529,
      address: '北海道二海郡八雲町落部484',
      description:
        '国道5号線沿いで長年愛される昔ながらのドライブイン（10:00〜19:00・10:30〜18:00の場合あり、不定休）。お皿からあふれそうなカツライスや定食、ラーメンが名物。',
      clue:
        '旅の締めくくりは、国道5号線沿いで地元の人々や旅人に長年愛され続けてきた老舗「ドライブインやかた」で絶品のご当地グルメをゆっくり味わおう（不定休）。お皿からあふれそうなほど豪快で食べ応え満点の名物カツライスや、昔懐かしい味わいのラーメン、ボリュームたっぷりの定食はどれも心まで温まる美味しさだ。港町の温もりと豊かな味覚を存分に満喫して、落部の散歩を晴れやかに締めくくろう。',
      hook: '',
      f7_fragment: '国道5号線沿いで愛され、豪快な名物カツライスや定食が人気のドライブイン。',
      f7_full: '「ドライブインやかた」で名物グルメを味わい、落部の豊かな散歩を終えた。',
    },
  ],
};
