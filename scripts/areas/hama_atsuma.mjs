export default {
  slug: 'hama_atsuma',
  station_order: 898,
  station: '浜厚真',
  line: 'JR日高本線',
  area_name: '浜厚真・太平洋の海岸と農園',
  prefecture: '北海道',
  municipality: '厚真町',
  category: 'サーフ海岸と里山温泉',
  budget_tier: 2,
  tags: ['北海道', '厚真町', '浜厚真駅', 'サーフィン', 'こぶしの湯'],
  style_genre: 'ink_and_watercolor',
  title: '浜厚真・太平洋のサーフ海岸と農園の恵み',
  description:
    '貨車改造の駅舎が迎える厚真町唯一の駅「JR浜厚真駅」から、開拓の記憶を伝える「浜厚真八幡神社」、サーフィンの聖地「浜厚真海浜公園」、平飼い養鶏農家直営の「FORT by THE COAST」、名湯「こぶしの湯あつま」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Hama-Atsuma Pacific coast from little railway boxcar station and coastal pine shrine to wide sandy surfing beach, renovated farm-warehouse diner and soothing hot spring lodge, full bleed, no text, no letters.',
  question: '貨車駅舎の浜厚真駅からサーフィンの海辺や養鶏農家直営ダイナー、温泉へ巡るなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '大正二年開業・厚真町唯一の鉄道駅で貨車駅舎が残る「JR浜厚真駅」',
      subtext: '苫小牧軽便鉄道の厚真駅として開業し、昭和六十二年に貨車改造駅舎へ改築された素朴な姿が印象的だった。',
      badge: {
        code: 'hama_atsuma_station',
        name_ja: '浜厚真・貨車駅の旅人',
        subtitle_en: 'Boxcar Station Visitor',
        description: '厚真町唯一の鉄道駅「JR浜厚真駅」を訪ねた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a painted freight-car railway station hut beside a coastal platform, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '厚真町の開祖・青木与八翁の記念碑が残る「浜厚真八幡神社」',
      subtext: '寛政十二年の南部藩士移住に始まる開拓の歴史を見守り続けてきた海辺の鎮守に手を合わせた。',
      badge: {
        code: 'hama_atsuma_shrine',
        name_ja: '浜厚真・開祖の鎮守参拝',
        subtitle_en: 'Pioneer Shrine Visitor',
        description: '厚真町開祖の碑が残る浜厚真八幡神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a weathered coastal shrine torii gate and carved pioneer stone tablet, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '北海道屈指のサーフィンの聖地として知られる「浜厚真海浜公園」',
      subtext: '広大な砂浜と太平洋の水平線が一望でき、力強い波と海風に心が洗われた。',
      badge: {
        code: 'hama_atsuma_beach',
        name_ja: '浜厚真・太平洋の潮風',
        subtitle_en: 'Pacific Surf Coast Walker',
        description: 'サーフィンの聖地「浜厚真海浜公園」で太平洋を望んだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting rolling white Pacific surf waves along a wide sandy Hokkaido beach, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '平飼い養鶏農家・小林農園直営の海沿いダイナー「FORT by THE COAST」',
      subtext: '農業倉庫をリノベーションした空間で、平飼い卵や親鶏のスパイスカレーを堪能した。',
      badge: {
        code: 'hama_atsuma_fort',
        name_ja: '浜厚真・農園ダイナーの恵み',
        subtitle_en: 'Farm Diner Guest of FORT',
        description: 'FORT by THE COASTで小林農園の恵みを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a golden farm-fresh egg plate and spiced curry in a renovated barn cafe, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'hama_atsuma_complete',
    name_ja: '浜厚真・太平洋の潮風と里山を巡りし者',
    subtitle_en: 'Walker of Hama-Atsuma Coast',
    description: 'JR浜厚真駅から浜厚真八幡神社、浜厚真海浜公園、FORT by THE COAST、こぶしの湯あつままでを巡った証',
    image_prompt:
      'A circular emblem combining boxcar train station, rolling Pacific surf wave, farm-fresh golden egg plate and steaming hot spring tub, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR浜厚真駅',
      prefecture: '北海道',
      city: '厚真町',
      description:
        '1913年（大正2年）10月1日、苫小牧軽便鉄道の「厚真駅」として開業、1925年現名称に改称、1987年貨車改造の「貨車駅舎」へ改築（終日開放・無料）。厚真町唯一の鉄道駅。',
      address: '北海道勇払郡厚真町字浜厚真1',
      lat: 42.60691,
      lng: 141.836991,
      clue:
        '大正二年十月に苫小牧軽便鉄道の厚真駅として開業し、昭和六十二年に貨車を改造した愛らしい駅舎へと生まれ変わった厚真町唯一の鉄道駅「JR浜厚真駅」から町歩きと散策を始めよう（終日利用可）。太平洋の潮騒が遠くに優しく響く静かな無人駅のホームをゆっくり後にしたら、まずは駅からほど近い南側に鎮座し、厚真町の開祖の碑も大切に伝わる「浜厚真八幡神社」を目指してさっそく歩いて足を運ぼう。',
      surprise: '広大な太平洋沿岸の町にポツンと佇む貨車改造駅舎の素朴な姿が、日高本線らしい旅情を演出していた。',
      hook: 'JR浜厚真駅を出たら、すぐ南側にある「浜厚真八幡神社」へ向かおう。',
      f7_fragment: '大正二年開業、貨車改造の駅舎が迎える厚真町唯一の鉄道駅。',
      f7_full: '「JR浜厚真駅」の貨車駅舎に降り立ち、太平洋のサーフ海岸と里山温泉を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hama-Atsuma Station painted freight-car railway hut beside quiet coastal platform, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '浜厚真八幡神社',
      prefecture: '北海道',
      city: '厚真町',
      description:
        '1800年（寛政12年）の南部藩士移住や明治初期の入植に始まる浜厚真の開拓の歴史とともに歩んできた鎮守（終日参拝自由・無料）。厚真町の開祖・青木与八翁の記念碑が残る。',
      address: '北海道勇払郡厚真町字浜厚真2',
      lat: 42.60557,
      lng: 141.837594,
      clue:
        '南部藩士の移住に始まる開拓を見守ってきた「浜厚真八幡神社」へ参拝しよう（終日自由）。厚真町の開祖・青木与八翁の記念碑も残る鎮守だ。次は「浜厚真海浜公園」へ。',
      surprise: '小さな海辺の神社に寛政年間の移住や厚真町開祖の記憶が刻まれていることに、土地の深い歴史を感じた。',
      hook: '浜厚真八幡神社に参拝したら、太平洋に面した「浜厚真海浜公園」へ向かおう。',
      f7_fragment: '南部藩士移住からの開拓を見守り、厚真町の開祖の記念碑も残る鎮守。',
      f7_full: '「浜厚真八幡神社」の静かな境内で手を合わせ、浜厚真の開拓史に思いを馳せた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hama-Atsuma Hachiman Shrine weathered wooden torii gate and memorial stone tablet under coastal pines, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '浜厚真海浜公園',
      prefecture: '北海道',
      city: '厚真町',
      description:
        '北海道屈指のサーフィンの聖地「浜厚真海岸」に面した公園（通年24時間開放・無料）。広大な砂浜と太平洋の雄大な波を一望でき、サーフィン大会の会場としても知られる。',
      address: '北海道勇払郡厚真町浜厚真79-2',
      lat: 42.603874,
      lng: 141.831011,
      clue:
        '北海道屈指のサーフィンの聖地として名高い浜厚真海岸に広がる「浜厚真海浜公園」へ出よう（通年開放・無料）。目の前に大きく広がる青い太平洋の水平線と白い波頭が力強く押し寄せる広大な砂浜は、眺めているだけで胸の奥まで爽快な気分にしてくれる。海辺の澄んだ潮風を思い切り味わったら、海沿いを東へ進み、平飼い養鶏農家直営の人気店「FORT by THE COAST」へと楽しく向かおう。',
      surprise: '果てしなく続く太平洋の砂浜と力強いサーフウェーブの景色が、北国とは思えないほど開放的だった。',
      hook: '浜厚真海浜公園で太平洋を望んだら、海沿いの「FORT by THE COAST」へ向かおう。',
      f7_fragment: '北海道屈指のサーフィンの聖地・浜厚真海岸に面した開放的な海浜公園。',
      f7_full: '「浜厚真海浜公園」で太平洋の力強い波と潮風を感じ、浜辺の風景を満喫した。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Hama-Atsuma Seaside Park wide sandy beach with rolling white Pacific surf waves and distant surfers, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: 'FORT by THE COAST',
      prefecture: '北海道',
      city: '厚真町',
      description:
        '平飼い養鶏農家「小林農園」直営の海沿いファームレストラン＆ダイナー（11:00〜20:00、平日14:30〜16:00は物販のみ、月曜・第2火曜休）。農業倉庫を改装した空間で卵料理やカレー、ピッツァ、スイーツを提供。',
      address: '北海道勇払郡厚真町浜厚真472-7',
      lat: 42.600666,
      lng: 141.862002,
      clue:
        '平飼い養鶏農家・小林農園が農業倉庫をセンス良くリノベーションした海沿いの人気店「FORT by THE COAST」で贅沢なランチにしよう（11:00〜20:00、月曜等休）。ストレスなく育った平飼い卵や親鶏の旨みを活かしたスパイスカレーや焼きたてのピッツァ、濃厚スイーツはどれも格別で、旅の気分が一気に高まる。お腹が満たされたら、締めくくりに「こぶしの湯あつま」へ向かおう。',
      surprise: '農業倉庫を改装した洗練された空間で味わう平飼い卵と親鶏の料理が驚くほど美味しく、思わず笑顔になった。',
      hook: 'FORT by THE COASTで食事を楽しんだら、厚真中心部の「こぶしの湯あつま」へ向かおう。',
      f7_fragment: '農業倉庫を改装した平飼い養鶏農家直営の海沿いレストラン＆ダイナー。',
      f7_full: '「FORT by THE COAST」で平飼い卵と地元食材の恵みを堪能し、心が弾んだ。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of FORT by THE COAST stylishly renovated agricultural barn cafe serving spiced chicken curry and golden farm egg plate, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: 'こぶしの湯あつま',
      prefecture: '北海道',
      city: '厚真町',
      description:
        '厚真町中心部にある温泉・宿泊施設（日帰り入浴10:00〜22:00頃、不定休）。ラドン泉やサウナ、特産品売店を備え、館内レストランでは厚真産米・豚肉を使った「あつま豚丼」やハスカップソフトも味わえる。',
      address: '北海道勇払郡厚真町字本郷229-1',
      lat: 42.734611,
      lng: 141.867157,
      clue:
        '旅の締めくくりは、海沿いから厚真町中心部へ移動して町自慢の温泉施設「こぶしの湯あつま」でゆったり疲れを癒やそう（日帰り入浴10:00〜22:00頃、不定休）。心地よいラドン泉やサウナで体の芯からじんわり温まった後は、特産品売店を覗いたり名物の甘酸っぱいハスカップソフトを味わったりするのも楽しみのひとつだ。湯上がりの爽やかな気分で、浜厚真の豊かな旅を心から心地よく結ぼう。',
      surprise: '海辺の散歩のあとに町中心部の温かなラドン泉でくつろぎ、厚真ならではの特産品にも出会えて大満足だった。',
      hook: '',
      f7_fragment: 'ラドン泉やサウナ、特産品売店を備え名物ハスカップソフトも楽しめる町の温泉。',
      f7_full: '「こぶしの湯あつま」の温かいラドン泉に浸かって旅の疲れを癒やし、一日を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Kobushi no Yu Atsuma warm wooden hot spring bathhouse overlooking forested Hokkaido countryside, no text, no letters.',
    },
  ],
};
