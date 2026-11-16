export default {
  slug: 'satsunai',
  station_order: 943,
  station: '札内',
  line: 'JR根室本線',
  area_name: '札内・文京・みずほ',
  prefecture: '北海道',
  municipality: '幕別町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '洋菓子カフェ', '札内神社', '遊水路', '平和園'],
  style_genre: 'ink_and_watercolor',
  title: '駅裏の喫茶と高台の社をめぐる札内散策',
  description:
    'JR札内駅から駅裏の一糸と庭Cafe、明治創祀の札内神社、200mの遊水路が流れるいなほ公園、老舗の平和園札内店を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Satsunai in Makubetsu, Hokkaido, featuring a small wood-accented patisserie cafe behind a railway station, a hilltop Shinto shrine beneath tall pines, and a sunlit park waterway with clear rippling water, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び札内を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅裏の静かな空間で味わった季節のスイーツ',
      subtext: '一糸と庭Cafeの木目調の店内で、美しい洋菓子と珈琲を味わった',
      badge: {
        code: 'satsunai_itotoniwa',
        name_ja: '駅裏の隠れ家',
        subtitle_en: 'Garden Patisserie',
        description:
          'JR札内駅裏手の一糸と庭Cafeで、繊細な洋菓子と穏やかなカフェ時間を過ごしたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a delicate fruit tart on a wooden tray beside green garden leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治の開拓期から続く高台の社での参拝',
      subtext: '明治31年創祀の歴史ある境内で、静かに手を合わせた',
      badge: {
        code: 'satsunai_shrine',
        name_ja: '文京の鎮守',
        subtitle_en: 'Hilltop Shrine',
        description:
          '明治31年創祀の歴史を伝える札内神社へ参拝し、開拓の記憶に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a stately wooden Shinto shrine gate standing on a gentle pine hill on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '長い遊水路と芝生広場が広がる公園の景色',
      subtext: 'いなほ公園で爽やかな水辺と広い空の下を散策した',
      badge: {
        code: 'satsunai_inaho_park',
        name_ja: 'みずほの清流',
        subtitle_en: 'Waterway Park',
        description:
          '総延長200mの遊水路や噴水池が整備されたいなほ公園で、心地よい自然を歩いたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a straight clear park waterway lined with river stones and meadow grass on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '地元で愛される老舗の焼肉とジンギスカン',
      subtext: '十勝の食文化を支える名店の味を堪能し、お腹も心も満たされた',
      badge: {
        code: 'satsunai_heiwaen',
        name_ja: '札内の滋味',
        subtitle_en: 'Tokachi Grill',
        description:
          '十勝の老舗焼肉・ジンギスカン店「平和園 札内店」で、地域に愛される味を堪能したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a traditional tabletop charcoal grill and savory glazed cuts on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'satsunai_complete',
    name_ja: '札内・高台の社と清流の散歩者',
    subtitle_en: 'Walker of Satsunai Shrine and Waterways',
    description:
      'JR札内駅から一糸と庭Cafe、札内神社、いなほ公園、平和園 札内店まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a garden patisserie cake, hilltop shrine torii, and clear park stream on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR札内駅',
      lat: 42.913227,
      lng: 143.255555,
      address: '北海道中川郡幕別町札内中央町638-4',
      description:
        '明治43年（1910年）1月7日に開業したJR根室本線の駅（終日利用可）。地名「札内」はアイヌ語の「サッナイ（乾く川）」に由来する。',
      clue:
        '明治四十三年一月に開業し、アイヌ語「サッナイ（乾く川）」にその地名を由来するJR根室本線の駅「JR札内駅」から楽しい町歩きと散策を始めよう（終日利用可）。帯広の隣町・幕別町札内の落ち着いた空気を味わいながら駅裏の南方向へと歩き出したら、まずは徒歩約三分の人気洋菓子カフェ「一糸と庭Cafe」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に外へ爽やかに歩き出そう。',
      hook: '駅裏手へ出て南方向へ徒歩約3分',
      f7_fragment: '明治四十三年開業、アイヌ語「サッナイ」に名を由来する札内の玄関口。',
      f7_full: '「JR札内駅」を後にし、駅裏のカフェと高台の神社を巡る札内の散策を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: '一糸と庭Cafe',
      lat: 42.911889,
      lng: 143.256912,
      address: '北海道中川郡幕別町札内中央町528-12',
      description:
        '人気洋菓子店「一糸（ito）」と「uraniwa cafe」が統合して誕生した駅裏手のカフェ＆洋菓子店（10:00〜18:00、木曜・第2・第4金曜休）。木目調の落ち着いた店内で季節のスイーツやランチが楽しめる。',
      clue:
        '駅裏手の木目調カフェ「一糸と庭Cafe」で季節のスイーツと穏やかな珈琲時間を楽しもう（10:00〜18:00、木曜等休）。一息ついたら西の「札内神社」へ向かおう。',
      hook: '文京町方面へ西方向へ徒歩約15分',
      f7_fragment: '人気洋菓子店とカフェが統合して誕生した駅裏手の落ち着いた木目調カフェ。',
      f7_full: '「一糸と庭Cafe」で美しい洋菓子と穏やかな空間を味わい、心がほっと和んだ。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '札内神社',
      lat: 42.90945,
      lng: 143.242392,
      address: '北海道中川郡幕別町札内文京町28',
      description:
        '明治31年（1898年）に「別奴神社」として創祀され、大正4年に「札内神社」へ改称、昭和49年に発祥地である現在地へ遷座した鎮守（境内終日参拝可、授与所9:00〜17:00）。',
      clue:
        '明治三十一年創祀の「別奴神社」に始まり、大正四年の改称を経て昭和四十九年に現在地へ遷座した由緒ある鎮守「札内神社」へ丁寧に心を込めてゆっくりと参拝しよう（境内終日可、授与所9:00〜17:00）。高台の静かな木立に囲まれた境内で静かに手を合わせれば、明治の開拓期から町を見守り続けてきた神社の厳かな空気が胸に沁みていく。参拝を終えたら、南の「いなほ公園」へと楽しく向かおう。',
      hook: '文京町から南方向へ徒歩約8分',
      f7_fragment: '明治三十一年創祀の別奴神社を起源とし、文京町の高台に鎮座する鎮守。',
      f7_full: '「札内神社」の清らかな杜に参拝し、明治から続く札内開拓の歴史に触れた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'いなほ公園',
      lat: 42.903681,
      lng: 143.245706,
      address: '北海道中川郡幕別町札内みずほ町160-14',
      description:
        '総延長200mの流れる遊水路や噴水池、広い芝生広場や遊歩道が整備された地区公園（終日開放、水遊び場は4月下旬〜11月上旬）。地域の人々に愛される爽やかな水と緑の空間。',
      clue:
        '総延長二百メートルもの流れる遊水路や噴水池、開放的な広い芝生広場が整備された地区公園「いなほ公園」をゆっくり楽しく元気に爽やかに明るく散策しよう（終日開放）。綺麗に整った遊歩道に沿って爽やかなせせらぎの音を感じながら歩いていくと、札内の穏やかな暮らしの豊かさが心にしみわたっていく。爽やかな公園の空気をたっぷり吸い込んだら、北方向へ歩いて名店「平和園 札内店」へ向かおう。',
      hook: 'みずほ町から北〜北西方向へ徒歩約25〜28分',
      f7_fragment: '総延長200mの遊水路や噴水池、広い芝生広場が整備された爽やかな地区公園。',
      f7_full: '「いなほ公園」の長い遊水路と芝生広場を歩き、みずほの爽やかな風に癒やされた。',
    },
    {
      spot_order: 5,
      spot_type: '食事',
      name: '平和園 札内店',
      lat: 42.920643,
      lng: 143.238057,
      address: '北海道中川郡幕別町札内西町93',
      description:
        '十勝管内で長年親しまれる老舗の焼肉・ジンギスカンチェーンの札内店（11:00〜22:00、火曜休・祝日の場合営業）。香ばしいジンギスカンや焼肉で旅を締めくくれる。',
      clue:
        '旅の締めくくりは、十勝の人々に長年愛され続ける老舗焼肉・ジンギスカン店「平和園 札内店」で至福の美味しい食事をゆっくり笑顔で味わおう（11:00〜22:00、火曜休）。秘伝のタレが揉み込まれた柔らかなお肉やジンギスカンを香ばしく焼き上げれば、ここまで歩いてきた充実感とともに笑顔がこぼれていく。十勝の滋味でお腹も心も大満足に満たして、札内の街歩きを晴れやかに明るく結ぼう。',
      hook: '',
      f7_fragment: '十勝管内で長年親しまれる老舗焼肉・ジンギスカンチェーンの人気店舗。',
      f7_full: '「平和園 札内店」で十勝自慢の焼肉とジンギスカンを堪能し、札内の旅を終えた。',
    },
  ],
};
