export default {
  slug: 'shinkawa_sapporo',
  station_order: 906,
  station: '新川',
  line: 'JR札沼線',
  area_name: '新川・皇大神社と大型書店の喫茶',
  prefecture: '北海道',
  municipality: '札幌市北区',
  category: '開拓の社と文化の散歩',
  budget_tier: 2,
  tags: ['北海道', '札幌市北区', '新川駅', '新川皇大神社', 'コーチャンフォー'],
  style_genre: 'ink_and_watercolor',
  title: '新川・開拓の社と緑の公園から大型書店の喫茶へ',
  description:
    '「JR新川駅」から、ジャズが流れる実力派「らーめん 影虎」、道内唯一「皇大」を冠する「新川皇大神社」、開基百年記念碑が立つ「新川中央公園」、大型書店併設「カフェ＆レストラン インターリュード」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Shinkawa Sapporo from elevated commuter station and rich ramen shop to Shinto shrine with seasonal flower water basin, century pioneer monument park and European-style bookstore cafe, full bleed, no text, no letters.',
  question: '新川の駅から実力派のラーメン店や北海道唯一の「皇大」を冠する神社、大型書店の喫茶を巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: 'ジャズが流れる空間で味わう実力派「らーめん 影虎」',
      subtext: '名店の流れをくむ魚介醤油つけ麺や背脂醤油らーめんの奥深い旨みに唸った。',
      badge: {
        code: 'shinkawa_kagetora',
        name_ja: '新川・影虎の味わい',
        subtitle_en: 'Ramen Connoisseur of Kagetora',
        description: 'らーめん 影虎でこだわりのつけ麺やラーメンを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of rich soy-broth ramen beside jazz musical notes, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '北海道で唯一「皇大」の名を冠する「新川皇大神社」',
      subtext: '明治四十一年創祀の歴史と美しい季節の花手水、馬頭大神への信仰に触れた。',
      badge: {
        code: 'shinkawa_kotaijingu',
        name_ja: '新川・皇大神社と花詣',
        subtitle_en: 'Shinkawa Kotai Shrine Visitor',
        description: '北海道で唯一「皇大」を冠する新川皇大神社に参拝した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a wooden Shinto torii gate and a stone water basin floating with colorful seasonal blossoms, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「不撓不屈」の開基百年記念碑が立つ「新川中央公園」',
      subtext: '明治二十二年からの開拓と水害克服の歩みを刻む記念碑の前で歴史に思いを馳せた。',
      badge: {
        code: 'shinkawa_park',
        name_ja: '新川・不撓不屈の公園散歩',
        subtitle_en: 'Shinkawa Pioneer Park Walker',
        description: '開基百年記念碑が立つ新川中央公園を散策した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a carved stone pioneer monument beneath flowering purple lilac and wisteria trellises, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '大型書店併設のヨーロッパ調「カフェ＆レストラン インターリュード」',
      subtext: '日本最大級の複合書店コーチャンフォー内で優雅なスイーツと休憩時間を楽しめた。',
      badge: {
        code: 'shinkawa_interlude',
        name_ja: '新川・書店街の喫茶時間',
        subtitle_en: 'Interlude Bookstore Cafe Guest',
        description: 'コーチャンフォー新川通り店内のインターリュードで寛いだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a European-style cafe pastry plate and coffee cup beside stacked hardcover books, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'shinkawa_sapporo_master',
    name_ja: '新川・皇大神社と緑の散策者',
    subtitle_en: 'Shinkawa Shrine & Park Walker',
    description: 'JR新川駅かららーめん 影虎、新川皇大神社、新川中央公園、インターリュードまでを巡った証',
    image_prompt:
      'A circular emblem combining steaming ramen bowl, blossom-filled shrine basin, stone pioneer monument and bookstore coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新川駅',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '1986年11月1日に新川臨時乗降場として開業し、1987年4月1日に駅へ昇格、2000年に複線高架駅化（終日利用可・無料）。新川通沿いの住宅街の玄関口。',
      address: '北海道札幌市北区新川4条1-3',
      lat: 43.098499,
      lng: 141.324006,
      clue:
        '昭和六十一年十一月に新川臨時乗降場として誕生し、翌年の国鉄分割民営化とともに駅へ昇格した「JR新川駅」から街歩きと散策を始めよう（終日利用可）。平成十二年に複線高架化され、札幌北部の暮らしを軽やかに支え続けるすっきりとした高架駅を出たら、まずは新川通のほど近くにあるジャズが心地よく流れる実力派ラーメン店「らーめん 影虎」を目指してのんびり楽しく元気に笑顔で歩き出そう。',
      surprise: '臨時乗降場から複線高架駅へと発展した駅の歴史に、札幌北部エリアの目覚ましい成長を感じた。',
      hook: 'JR新川駅を出たら、新川3条にある人気ラーメン店「らーめん 影虎」へ向かおう。',
      f7_fragment: '昭和六十一年臨時乗降場として開業し、複線高架化で街を支える駅。',
      f7_full: '「JR新川駅」に降り立ち、開拓の神社と緑の公園、書店の喫茶を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinkawa Station sleek elevated city train station beside tree-lined Sapporo avenue, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'らーめん 影虎',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '名店「麺屋 菜々兵衛」等の流れをくむ実力派ラーメン店（平日11:00〜15:00・17:00〜20:30頃・土日祝11:00〜20:00、不定休）。「魚介醤油つけ麺」や「背脂醤油らーめん」が人気。',
      address: '北海道札幌市北区新川3条5-3-12',
      lat: 43.102098,
      lng: 141.315018,
      clue:
        'ジャズが流れる実力派「らーめん 影虎」へ入ろう（11:00〜20:00頃、不定休）。名店の流れをくむ魚介醤油つけ麺や背脂醤油らーめんが絶品だ。次は「新川皇大神社」へ。',
      surprise: 'ジャズが流れる落ち着いた空間で味わう魚介醤油つけ麺と背脂醤油らーめんの洗練された旨さに唸った。',
      hook: 'らーめん 影虎で食事を終えたら、北西の「新川皇大神社」へ向かおう。',
      f7_fragment: 'ジャズが流れる落ち着いた空間で魚介醤油つけ麺などを味わえる実力派。',
      f7_full: '「らーめん 影虎」で丁寧に仕上げられた一杯を味わい、心もお腹も満たされた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Ramen Kagetora stylish quiet noodle counter serving gleaming seafood-soy dipping tsukemen and chashu bowl, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '新川皇大神社',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '明治37年石標建立・明治41年創祀（参拝自由・無料、授与所9:00〜17:00）。伊勢神宮と同じ神々を祀り北海道で唯一「皇大」を冠するほか、季節の花手水やペット守護の馬頭大神でも人気。',
      address: '北海道札幌市北区新川3条13-3-12',
      lat: 43.108901,
      lng: 141.301206,
      clue:
        '明治四十一年創祀の歴史を持ち、伊勢神宮と同じ神々をお祀りして北海道で唯一「皇大」の名を冠する格式高い「新川皇大神社」へ丁寧に参拝しよう（参拝自由・無料）。境内ではペット守護の馬頭大神が温かく迎えてくれるほか、色鮮やかな季節の花手水や工夫を凝らした御朱印も多くの参拝者に愛されている。清らかな杜の中で旅の安全を心から深く祈ったら、すぐ北側の「新川中央公園」へと歩いて向かおう。',
      surprise: '北海道で唯一「皇大」を冠する歴史ある神社でありながら、美しい花手水やペット守護で親しまれる姿が素敵だった。',
      hook: '新川皇大神社に参拝したら、すぐ北側の「新川中央公園」へ向かおう。',
      f7_fragment: '明治四十一年創祀、北海道で唯一「皇大」を冠し花手水でも人気の神社。',
      f7_full: '「新川皇大神社」の美しい花手水と静かな拝殿に触れ、開拓の祈りに手を合わせた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinkawa Kotai Shrine wooden torii gate and stone water basin filled with floating seasonal flowers, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '新川中央公園',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '自然林を残し野球場や藤棚・ライラックを備えた地域の公園（常時開放・無料）。園内には明治22年からの開拓と水害克服の歴史を伝え「不撓不屈」と刻まれた「新川『開基百年記念』碑」が立つ。',
      address: '北海道札幌市北区新川4条14-5',
      lat: 43.112036,
      lng: 141.300261,
      clue:
        '自然林を大切に残し、春から初夏にかけて藤棚やライラックの花々が美しく彩る「新川中央公園」をのんびり歩こう（常時開放・無料）。園内の一角には明治二十二年からの開拓と幾度もの水害を乗り越えた歴史を伝える「新川『開基百年記念』碑」が立ち、元札幌市長の書による「不撓不屈」の力強い文字が胸を打つ。地域の歴史に深く触れたら、最後は「カフェ＆レストラン インターリュード」へ向かおう。',
      surprise: '穏やかな公園の中に「不撓不屈」と刻まれた開基百年記念碑が立ち、水害と闘った新川の歩みに胸を打たれた。',
      hook: '新川中央公園を歩いたら、大型書店内の「カフェ＆レストラン インターリュード」へ向かおう。',
      f7_fragment: '藤棚やライラックが彩り、「不撓不屈」の開基百年記念碑が立つ公園。',
      f7_full: '「新川中央公園」の開基百年記念碑の前に立ち、新川の不撓不屈の歴史を偲んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Shinkawa Central Park shady green path with blooming purple wisteria pergola and carved stone pioneer monument, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'カフェ＆レストラン インターリュード（コーチャンフォー新川通り店）',
      prefecture: '北海道',
      city: '札幌市北区',
      description:
        '日本最大級の複合大型書店「コーチャンフォー新川通り店」併設のヨーロッパ調カフェ＆レストラン（10:00〜21:00・L.O.20:30、元日休等）。スイーツやドリンクで優雅に休憩できる。',
      address: '北海道札幌市北区新川3条18-1-1',
      lat: 43.114675,
      lng: 141.292061,
      clue:
        '旅の締めくくりは、日本最大級の複合大型書店「コーチャンフォー新川通り店」に併設された「カフェ＆レストラン インターリュード」でゆったりと休もう（10:00〜21:00）。開放的なヨーロッパ調の店内では、香り高い珈琲や彩り豊かなスイーツを味わいながら、本に囲まれた街ならではの知的な寛ぎの時間をたっぷり楽しめる。旅の思い出を静かに振り返り、新川の散策を心地よく晴れやかに結ぼう。',
      surprise: '日本最大級の複合大型書店の中に、ヨーロッパ調の落ち着いたカフェ空間が広がっていて贅沢な気分になれた。',
      hook: '',
      f7_fragment: '大型書店コーチャンフォー併設、スイーツや珈琲で寛げるヨーロッパ調カフェ。',
      f7_full: '「カフェ＆レストラン インターリュード」で甘いスイーツと珈琲を味わい、旅を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Interlude Cafe elegant European-style dining corner inside a grand Sapporo bookstore serving cake and coffee, no text, no letters.',
    },
  ],
};
