export default {
  slug: 'kunnui',
  station_order: 1005,
  station: '国縫',
  line: 'JR函館本線',
  area_name: '国縫・中ノ沢',
  prefecture: '北海道',
  municipality: '長万部町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['函館本線', '国縫', '国縫漁港', 'シャクシャイン', 'はっぴーディアーズ'],
  style_genre: 'ink_and_watercolor',
  title: '噴火湾の潮風と国縫の記憶をめぐる旅路',
  description:
    '木造駅舎のJR国縫駅から日本初の島式漁港に隣接する国縫漁港海浜公園、国縫神社、シャクシャイン古戦場跡碑を経てはっぴーディアーズへ巡るルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of wooden JR Kunnui Station, an island-style coastal fishing harbor park on Uchiura Bay, a quiet Meiji-era Shinto shrine, a stone memorial monument, and a converted red-brick schoolhouse confectionery shop, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び国縫を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '島式漁港を望む 国縫漁港海浜公園',
      subtext: '日本初の島式漁港に隣接する公園で噴火湾の潮風に吹かれた',
      badge: {
        code: 'kunnui_harbor_park',
        name_ja: '島式漁港の海浜公園',
        subtitle_en: 'Kunnui Seaside Park',
        description:
          '国縫漁港海浜公園を訪れ、日本初の島式漁港と噴火湾の穏やかな海を望んだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an island-style breakwater harbor and gentle blue waves of Uchiura Bay on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '明治二十八年創建の 国縫神社',
      subtext: '函館八幡宮より御分霊を勧請した地域の鎮守で静かに手を合わせた',
      badge: {
        code: 'kunnui_shrine',
        name_ja: '国縫の鎮守社',
        subtitle_en: 'Kunnui Shrine',
        description:
          '国縫神社に参拝し、明治二十八年創建の落ち着いた境内で旅の安全を祈願したしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a historic timber Shinto shrine torii gate framed by coastal pines on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '寛文九年の記憶 シャクシャイン古戦場跡碑',
      subtext: 'クンヌイ古戦場の慰霊碑の前に立ち道南の歴史の重みを感じた',
      badge: {
        code: 'kunnui_battlefield',
        name_ja: 'クンヌイ古戦場の碑',
        subtitle_en: 'Kunnui Battlefield Monument',
        description:
          'シャクシャイン古戦場跡碑を訪れ、寛文九年の歴史と平和への祈りに触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a dignified carved stone memorial stele standing amid tranquil green meadow grass on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '旧校舎の菓子店 はっぴーディアーズ',
      subtext: '廃校を改装した明るい空間で名物雪花青とソフトクリームを楽しんだ',
      badge: {
        code: 'kunnui_happydeers',
        name_ja: '学び舎のお菓子王国',
        subtitle_en: 'Happy Deers Confectionery',
        description:
          'お菓子の王国 はっぴーディアーズを訪れ、旧校舎の温もりと名物菓子を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of delicate white snow-cookie confections and a soft-serve ice cream cone beside a nostalgic schoolhouse window on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kunnui_complete',
    name_ja: '国縫・海と歴史と菓子の旅人',
    subtitle_en: 'Explorer of Kunnui',
    description:
      'JR国縫駅から国縫漁港海浜公園、国縫神社、シャクシャイン古戦場跡碑、はっぴーディアーズまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a wooden station, an island harbor, a stone historical monument, and sweet confections on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR国縫駅',
      lat: 42.438578,
      lng: 140.320633,
      address: '北海道山越郡長万部町字国縫1',
      description:
        '明治36年（1903年）開業、昭和14年改築の木造駅舎が残るJR函館本線の無人駅（終日開放）。かつては国鉄瀬棚線が分岐していた道南交通の要衝として知られる。',
      clue:
        '明治三十六年に開業し、かつて国鉄瀬棚線が分岐していた道南交通の要衝「JR国縫駅」から、歴史と潮風を辿る旅を始めよう（終日開放）。昭和十四年改築の趣ある木造駅舎を背にして東方向へと外へ踏み出したら、まずは日本初の島式漁港に隣接して整備された開放的な「国縫漁港海浜公園」を目指して、噴火湾から届く爽やかな潮風と空の広がりを感じながら軽やかな足取りで明るく元気よく歩き出そう。',
      hook: '駅から東方向へ徒歩約8分',
      f7_fragment: '昭和十四年改築の木造駅舎が残り、かつて国鉄瀬棚線が分岐した要衝の駅。',
      f7_full: '「JR国縫駅」の木造駅舎を後にし、海浜公園と道南史の舞台を巡り始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '国縫漁港海浜公園',
      lat: 42.439522,
      lng: 140.328818,
      address: '北海道山越郡長万部町字国縫165-1',
      description:
        '平成6年（1994年）に開設された噴火湾沿いの海浜公園（常時開放・無休）。隣接する国縫漁港は全国でも先駆けとなる「日本初の島式漁港」として広く知られている。',
      clue:
        '日本初の島式漁港に隣接する「国縫漁港海浜公園」で噴火湾の潮風と広い海をゆっくり楽しく元気に眺めよう（常時開放）。次は西の鎮守「国縫神社」へと向かおう。',
      hook: '西方向へ徒歩約8分',
      f7_fragment: '日本初の島式漁港に隣接して整備され、噴火湾を一望できる海浜公園。',
      f7_full: '「国縫漁港海浜公園」で噴火湾の潮風に吹かれ、国縫の鎮守へ向かった。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '国縫神社',
      lat: 42.439122,
      lng: 140.323157,
      address: '北海道山越郡長万部町字国縫171-40',
      description:
        '明治28年（1895年）に函館八幡宮より御分霊を勧請して創建された地域の鎮守（参拝自由・無人）。応神天皇を祀り、海辺の集落の暮らしを長年にわたり見守り続けている。',
      clue:
        '明治二十八年に函館八幡宮より御分霊を勧請して創建された歴史ある地域の鎮守「国縫神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。潮風と豊かな緑に包まれた静かな境内には、開拓期からこの地を見守り続けてきた穏やかな空気が流れている。歴史ある社殿の前で道南の旅の安全を静かに祈願したら、南西方向に位置する「シャクシャイン古戦場跡碑」へと楽しくゆっくり軽やかに歩を進めよう。',
      hook: '南西方向へ徒歩約8分',
      f7_fragment: '明治二十八年に函館八幡宮より御分霊を勧請して創建された地域の鎮守社。',
      f7_full: '「国縫神社」の静かな境内で旅の安全を祈願し、歴史ある古戦場跡へ向かった。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: 'シャクシャイン古戦場跡碑',
      lat: 42.4352,
      lng: 140.319069,
      address: '北海道山越郡長万部町字国縫30',
      description:
        '寛文9年（1669年）のシャクシャインの戦いでアイヌ軍と松前藩が激突した「クンヌイ古戦場」を伝える慰霊碑（常時見学可、平成28年建立）。旧国縫小学校グラウンド一角に立つ。',
      clue:
        '寛文九年のシャクシャインの戦いにおいてアイヌ軍と松前藩が激突したクンヌイ古戦場を伝える「シャクシャイン古戦場跡碑」を静かに訪ねよう（常時見学可）。平成二十八年に旧国縫小学校グラウンドの一角へ建立された慰霊碑の前に立つと、北海道史の大きな転換点となった往時の歴史に深く心が動かされる。歴史の記憶を胸に刻んだら、北東の「お菓子の王国 はっぴーディアーズ」へとゆっくり向かおう。',
      hook: '北東方向へ車・バス約8分（徒歩約72分）',
      f7_fragment: '寛文九年のシャクシャインの戦いの激戦地・クンヌイ古戦場を伝える慰霊碑。',
      f7_full: '「シャクシャイン古戦場跡碑」の前に立ち、北海道史の記憶に深く思いを馳せた。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: 'お菓子の王国 はっぴーディアーズ',
      lat: 42.474203,
      lng: 140.345336,
      address: '北海道山越郡長万部町字中ノ沢13-2',
      description:
        '廃校になった旧中ノ沢小学校を改装した青華堂の直営店（8:00〜18:00、無休・季節変動あり）。名物クッキー「雪花青」やソフトクリームが人気で休憩スペースもある。',
      clue:
        '旅の締めくくりは、廃校となった旧中ノ沢小学校を明るく改装した青華堂の直営店「お菓子の王国 はっぴーディアーズ」へ足を運ぼう（8:00〜18:00、無休）。懐かしい学び舎の温もりがそのまま残る店内には、名物「雪花青」をはじめとするスイーツや濃厚なソフトクリームが並び、ゆったりと休憩することもできる。優しい甘さに癒やされて、国縫の旅を晴れやかな気持ちで明るく締めくくろう。',
      hook: '',
      f7_fragment: '旧中ノ沢小学校を改装した直営菓子店で、名物「雪花青」やソフトが人気。',
      f7_full: '「お菓子の王国 はっぴーディアーズ」で名物菓子を楽しみ、国縫の旅を終えた。',
    },
  ],
};
