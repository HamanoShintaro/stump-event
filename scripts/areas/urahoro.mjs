export default {
  slug: 'urahoro',
  station_order: 950,
  station: '浦幌',
  line: 'JR根室本線',
  area_name: '浦幌・桜町・東山',
  prefecture: '北海道',
  municipality: '浦幌町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', 'ランプ小屋', 'K/Pg境界', '乳神神社', '道の駅うらほろ'],
  style_genre: 'ink_and_watercolor',
  title: '十勝最古の駅と森の社が織りなす浦幌の記憶',
  description:
    '十勝管内最古の歴史を誇るJR浦幌駅から、K/Pg境界を収蔵する町立博物館、森の浦幌神社、老舗喫茶、道の駅を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Urahoro in Tokachi, Hokkaido, featuring a historic 1903 train station with a weathered red-brick oil lamp shed, a quiet forest Shinto shrine, and sunlit northern hills, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び浦幌を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '億年の地層と十勝の営みに触れた知の展示室',
      subtext: '浦幌町立博物館でK/Pg境界の地層標本と郷土の歴史に触れた',
      badge: {
        code: 'urahoro_museum',
        name_ja: '十勝地層の見聞者',
        subtitle_en: 'Keeper of Tokachi Strata',
        description:
          '浦幌町立博物館でK/Pg境界の地層標本やアイヌ文化・郷土の歴史に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of layered geological rock strata and an ancient ammonite fossil on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '森の静寂に包まれた歴史ある社と祈りの境内',
      subtext: '明治29年創祀の浦幌神社で木立の参道と乳神神社を巡った',
      badge: {
        code: 'urahoro_shrine',
        name_ja: '東山社の参詣人',
        subtitle_en: 'Pilgrim of Higashiyama Shrine',
        description:
          '明治29年創祀の浦幌神社（乳神神社）を訪れ、森の静寂に手を合わせたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a quiet forest Shinto torii gate surrounded by tall oak trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '駅近のまち角で湯気と珈琲に一息ついた喫茶店',
      subtext: '老舗の軽食喫茶カナリアで手打ちそばや珈琲の温もりを味わった',
      badge: {
        code: 'urahoro_canaria',
        name_ja: '幸町喫茶の常連客',
        subtitle_en: 'Patron of Saiwaicho Cafe',
        description:
          '軽食喫茶 カナリアで、手打ちそばや昔ながらの喫茶メニューに癒やされたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm ceramic coffee cup and handmade soba noodles on a cafe table on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '国道沿いに地域の恵みが集う旅の直売所',
      subtext: '道の駅うらほろで十勝・浦幌ならではの特産品に出会った',
      badge: {
        code: 'urahoro_michinoeki',
        name_ja: '北町市場の目利き',
        subtitle_en: 'Connoisseur of Urahoro Market',
        description:
          '国道38号沿いの道の駅うらほろで、豊かな浦幌町の農林水産特産品に出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a wooden market crate filled with northern root vegetables and pine cones on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'urahoro_complete',
    name_ja: '浦幌・最古の駅と森社の旅人',
    subtitle_en: 'Traveler of Urahoro Heritage',
    description:
      'JR浦幌駅から浦幌町立博物館、浦幌神社（乳神神社）、軽食喫茶カナリア、道の駅うらほろまで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a 1907 red-brick railway lamp shed, geological strata, and forest shrine torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR浦幌駅',
      lat: 42.810642,
      lng: 143.651599,
      address: '北海道十勝郡浦幌町字本町1',
      description:
        '明治36年（1903年）12月25日開業、十勝管内で最も歴史ある駅（終日開放）。ホーム側には明治40年建造のレンガ造り「危険品庫（ランプ小屋）」が今も残る。',
      clue:
        '明治三十六年十二月に開業した十勝管内で最も歴史ある駅であり、ホームに明治四十年建造のレンガ造りランプ小屋が残る「JR浦幌駅」から楽しい町歩きと散策を始めよう（終日開放）。歴史の重みを感じながら東方向へ外へ踏み出したら、まずは教育文化センターらぽろ21内の「浦幌町立博物館」を目指して、十勝の心地よい風を感じながらのんびり楽しく元気に笑顔で力強く爽やかに明るく歩き出そう。',
      hook: '駅を出て東方向へ徒歩約7分',
      f7_fragment: '明治三十六年開業、明治期のレンガ造りランプ小屋が残る十勝最古の駅。',
      f7_full: '「JR浦幌駅」のレンガ小屋に歴史を感じつつ、森の社を巡る浦幌の旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '浦幌町立博物館',
      lat: 42.809827,
      lng: 143.657907,
      address: '北海道十勝郡浦幌町字桜町16-1',
      description:
        '浦幌町の自然・歴史・アイヌ文化・生活資料を展示する博物館（10:00〜18:00、月曜・祝翌日・年末年始等休館、入館無料）。恐竜絶滅期の「K/Pg境界」地層標本を収蔵する。',
      clue:
        '教育文化センターらぽろ21内の「浦幌町立博物館」でK/Pg境界の地層標本や郷土史に触れよう（10:00〜18:00、無料）。次は東〜南東の「浦幌神社（乳神神社）」へ向かおう。',
      hook: '桜町から東〜南東方向へ徒歩約8分',
      f7_fragment: '恐竜絶滅期のK/Pg境界地層標本や浦幌の自然・歴史を伝える無料の博物館。',
      f7_full: '「浦幌町立博物館」で億年の地層標本に出会い、地球と地域の歴史に感動した。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '浦幌神社（乳神神社）',
      lat: 42.809135,
      lng: 143.662961,
      address: '北海道十勝郡浦幌町字東山町18-1',
      description:
        '明治29年（1896年）創祀の浦幌町の総鎮守（境内参拝自由、社務所9:00〜18:00）。境内の「乳神神社」は安産・病気平癒の信仰のほか、バイク交通安全祈願の参拝者でも知られる。',
      clue:
        '明治二十九年創祀の総鎮守であり、子宝や安産、病気平癒の信仰を集める「乳神神社」やバイク交通安全祈願でも全国から参拝者が訪れる「浦幌神社（乳神神社）」へ丁寧に参拝しよう（境内自由）。豊かな東山の森に包まれた清らかな境内で静かに手を合わせれば、穏やかな祈りの空気が胸いっぱいに優しくじんわりと満ちていく。参拝を終えたら、西〜北西の市街地にある「軽食喫茶 カナリア」へ向かおう。',
      hook: '東山町から西〜北西方向へ徒歩約9分',
      f7_fragment: '明治二十九年創祀の総鎮守。乳神神社や交通安全祈願でも広く知られる森の社。',
      f7_full: '「浦幌神社（乳神神社）」の静かな森の中で手を合わせ、清々しい気持ちになった。',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: '軽食喫茶 カナリア',
      lat: 42.810333,
      lng: 143.657354,
      address: '北海道十勝郡浦幌町字幸町48-1',
      description:
        '駅周辺の市街地に佇む老舗の軽食喫茶（11:00〜22:00、不定休）。温かな手打ちそばやパスタ、香り高い喫茶メニューでほっと一息つける。',
      clue:
        '幸町の街角に佇み、地元の人々に長年親しまれている老舗「軽食喫茶 カナリア」で温かい食事と珈琲の時間をゆっくり楽しもう（11:00〜22:00、不定休）。パスタや手打ちそば、昔ながらの喫茶メニューなどほっとする優しい味わいに包まれれば、歩き疲れた体も心も芯からじんわり癒やされていく。お腹が幸せに満たされたら、線路を越えて北側の国道沿いにある「道の駅うらほろ」へ向かおう。',
      hook: '幸町から線路を越えて北東方向へ徒歩約10〜13分',
      f7_fragment: '幸町の街角で手打ちそばやパスタ、喫茶メニューを味わえる老舗の喫茶店。',
      f7_full: '「軽食喫茶 カナリア」で温かい手打ちそばと珈琲を楽しみ、旅の元気を養った。',
    },
    {
      spot_order: 5,
      spot_type: '買い物',
      name: '道の駅うらほろ',
      lat: 42.813897,
      lng: 143.663681,
      address: '北海道十勝郡浦幌町字北町16-3',
      description:
        '国道38号沿いに位置する道の駅（9:00〜17:00・夏季18:00、年末年始休）。浦幌町の豊かな特産品が並ぶ直売所や地元グルメを楽しめるレストランを併設する。',
      clue:
        '旅の締めくくりは、国道38号線沿いで浦幌町の豊かな恵みが一堂に集まる「道の駅うらほろ」へ楽しく元気に立ち寄ろう（9:00〜17:00、年末年始休）。直売所には十勝・浦幌ならではの新鮮な農産物や海の幸、こだわりの手作りの加工品がずらりと並び、眺めているだけで旅の思い出が色鮮やかに深まっていく。素敵な特産品を手に入れて、歴史と森の香りが満ちた浦幌の散歩を晴れやかに結ぼう。',
      hook: '',
      f7_fragment: '国道38号沿いに立ち、浦幌町の特産品直売所やレストランを備えた道の駅。',
      f7_full: '「道の駅うらほろ」で浦幌ならではの特産品に出会い、楽しい旅を締めくくった。',
    },
  ],
};
