export default {
  slug: 'shin_chitose_airport',
  station_order: 929,
  station: '新千歳空港',
  line: 'JR千歳線',
  area_name: '新千歳空港ターミナル',
  prefecture: '北海道',
  municipality: '千歳市',
  category: 'グルメ・体験',
  budget_tier: 2,
  tags: ['千歳線', '空港', 'チョコレート工場', 'ラーメン道場', '天然温泉'],
  style_genre: 'ink_and_watercolor',
  title: '空の玄関口で味わう北海道の魅力と湯浴み',
  description:
    'JR新千歳空港駅から大空ミュージアム、国内初の空港内チョコ工場、北海道ラーメン道場、天然温泉まで屋内で巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of New Chitose Airport in Hokkaido, featuring an expansive glass terminal looking out onto a misty runway, chocolate sweets, steaming ramen bowls, and a tranquil rooftop onsen mist, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び新千歳空港を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '飛行機の歴史と空への憧れに触れたミュージアム',
      subtext: '大空ミュージアムで北海道の航空史と空のロマンに触れた',
      badge: {
        code: 'newchitose_ozora',
        name_ja: '大空の旅人',
        subtitle_en: 'Sky Museum Explorer',
        description:
          '大空ミュージアムを訪れ、北海道の航空史や飛行機の仕組みに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a vintage propeller airplane wing and drifting clouds on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '甘い香りに包まれた空港内のチョコレート工場',
      subtext: '国内初の空港内チョコ工場で、製造風景と限定スイーツを楽しんだ',
      badge: {
        code: 'newchitose_royce',
        name_ja: '甘い旅路の職人見習い',
        subtitle_en: 'Airport Chocolatier',
        description:
          '2011年開業のロイズ チョコレートワールドで、製造工程の見学と甘い恵みを味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of delicate dark chocolate squares and cacao pods on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '北海道各地の麺が競演する熱気あふれる一杯',
      subtext: '北海道ラーメン道場で道内自慢の味を存分に堪能した',
      badge: {
        code: 'newchitose_ramen',
        name_ja: '北の麺道場の食通',
        subtitle_en: 'Hokkaido Ramen Master',
        description:
          '北海道ラーメン道場を訪れ、北海道各地の名店の熱々の一杯を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming ceramic ramen bowl with chopsticks and golden noodles on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '滑走路の気配を感じながら浸かった空港の天然温泉',
      subtext: '新千歳空港温泉「熱の湯」で旅の疲れを心地よく癒やした',
      badge: {
        code: 'newchitose_onsen',
        name_ja: '空港湯浴みの達人',
        subtitle_en: 'Terminal Onsen Connoisseur',
        description:
          '2011年開業の新千歳空港温泉で、保温効果の高いナトリウム塩化物泉に癒やされたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of rising hot spring steam and a wooden bath bucket beside a distant airplane silhouette on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shin_chitose_airport_complete',
    name_ja: '新千歳・空と食と湯の旅人',
    subtitle_en: 'Traveler of New Chitose Sky and Onsen',
    description:
      'JR新千歳空港駅から大空ミュージアム、チョコ工場、北海道ラーメン道場、新千歳空港温泉まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a soaring airplane, steaming ramen bowl, and hot spring emblem on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR新千歳空港駅',
      lat: 42.787648,
      lng: 141.681135,
      address: '北海道千歳市美々1292-33',
      description:
        '平成4年（1992年）7月1日に新千歳空港ターミナルビル直下に開業した千歳線支線の終着駅（終日利用可・無料）。北海道の空の玄関口へ直結する。',
      clue:
        '平成四年七月にターミナルビル直下に開業し、北海道の空の玄関口として世界中の旅人を迎え入れてきた「JR新千歳空港駅」から楽しい屋内散策を始めよう（終日利用可）。活気ある改札を抜けてエレベーターやエスカレーターで国内線ターミナル三階へ上がったら、まずは航空史や飛行機の魅力に楽しく触れられる「大空ミュージアム」を目指してのんびり楽しく元気に笑顔で力強く爽やかに歩みを進めよう。',
      hook: '地下駅から国内線ターミナル3Fへ徒歩約5分',
      f7_fragment: '平成四年開業、北海道の空の玄関口直下に位置する千歳線支線の終着駅。',
      f7_full: '「JR新千歳空港駅」からターミナル内へ上がり、北海道の魅力が詰まった巡りを始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '大空ミュージアム',
      lat: 42.788205,
      lng: 141.681793,
      address: '北海道千歳市美々987-22',
      description:
        '新千歳空港国内線ターミナルビル3Fにある体験型航空ミュージアム（10:00〜18:00、年中無休、入場無料）。航空機や空港の歴史展示、フライトシミュレーター体験が楽しめる。',
      clue:
        '国内線3Fの「大空ミュージアム」で北海道の航空史や飛行機の仕組みに触れよう（10:00〜18:00、無料）。鑑賞後は連絡施設3Fの「ロイズ チョコレートワールド」へ向かおう。',
      hook: '連絡施設3Fへ西向きに徒歩約6分',
      f7_fragment: '空港と航空機の歴史やフライトシミュレーターに触れられる体験型博物館。',
      f7_full: '「大空ミュージアム」で空への憧れと北海道の航空史を楽しく学んだ。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: 'ロイズ チョコレートワールド',
      lat: 42.787444,
      lng: 141.679061,
      address: '北海道千歳市美々987-22',
      description:
        '2011年7月15日にオープンした国内初の空港内チョコレート工場（8:00〜19:00等、年中無休）。ガラス越しに製造工程を見学でき、限定商品や併設ベーカリーのパンも人気。',
      clue:
        '平成二十三年七月に国内初の空港内チョコレート工場として誕生した「ロイズ チョコレートワールド」へゆっくり楽しく元気に立ち寄ろう（8:00〜19:00等、無休）。ガラス越しにチョコレートが次々と出来上がる様子を楽しく眺めたり、限定スイーツや併設ベーカリーの生チョコクロワッサンを手に取ったりできる甘い空間だ。素敵なお土産を選んだら、国内線3Fの「北海道ラーメン道場」へ戻ろう。',
      hook: '国内線3Fへ東向きに徒歩約7分',
      f7_fragment: 'ガラス越しに製造工程を見学できる国内初の空港内チョコレート工場。',
      f7_full: '「ロイズ チョコレートワールド」の甘い香りと製造風景に胸が躍った。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: '北海道ラーメン道場',
      lat: 42.787969,
      lng: 141.680236,
      address: '北海道千歳市美々987-22',
      description:
        '北海道各地を代表する有名ラーメン店が一堂に会する人気グルメエリア（9:00または10:00〜21:00・店舗により変動、年中無休）。札幌・旭川・函館など道内の味を食べ比べできる。',
      clue:
        '国内線三階に広がる熱気あふれるグルメエリア「北海道ラーメン道場」で各地の自慢の一杯をゆっくり美味しく楽しく味わおう（10:00〜21:00頃、無休）。札幌の濃厚味噌や旭川の醤油、函館の塩など北海道各地の名店がずらりと軒を連ねており、香ばしい湯気と旨みが食欲を力強く刺激する。美味しいラーメンでお腹がしっかり満たされたら、四階の「新千歳空港温泉」で極上の湯浴みを満喫しよう。',
      hook: '国内線4Fへ上階移動で徒歩約5分',
      f7_fragment: '札幌・旭川・函館など北海道各地の名店が集う空港内のグルメエリア。',
      f7_full: '「北海道ラーメン道場」で湯気立つ北の麺を堪能し、深い満足に浸った。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '新千歳空港温泉',
      lat: 42.788,
      lng: 141.680405,
      address: '北海道千歳市美々987-22',
      description:
        '2011年7月15日開業の天然温泉施設（10:00〜翌9:00・深夜清掃あり、年中無休）。保温効果が高く「熱の湯」と呼ばれるナトリウム－塩化物泉で、露天風呂やリラックスルームを備える。',
      clue:
        '旅の締めくくりは、国内線四階に広がる癒やしの温浴空間「新千歳空港温泉」でゆったりと極上の天然温泉と湯浴みを満喫しよう（10:00〜翌9:00、無休）。平成二十三年開業の本格天然温泉は「熱の湯」と呼ばれる保温性の高い塩化物泉で、開放的な露天風呂やリラックスルームで心地よく汗を流せば旅の疲れがみるみるほどけていく。空の玄関口の魅力を余すところなく味わい、旅を笑顔で結ぼう。',
      hook: '',
      f7_fragment: '「熱の湯」と呼ばれる塩化物泉の露天風呂を備えた空港内の天然温泉。',
      f7_full: '「新千歳空港温泉」の温かな湯に浸かり、新千歳空港の散策を至福のうちに終えた。',
    },
  ],
};
