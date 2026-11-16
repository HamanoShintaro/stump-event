export default {
  slug: 'kamioboro',
  station_order: 962,
  station: '上尾幌',
  line: 'JR根室本線',
  area_name: '上尾幌',
  prefecture: '北海道',
  municipality: '厚岸町',
  category: '歴史・自然',
  budget_tier: 1,
  tags: ['根室本線', '花咲線', '木造駅舎', '上尾幌炭鉱', '上尾幌神社'],
  style_genre: 'ink_and_watercolor',
  title: '木造駅舎と炭鉱の歴史香る上尾幌道',
  description:
    '昭和初期の木造モルタル駅舎が現存するJR上尾幌駅から上尾幌郵便局、ふれあい体験農園、学び山公園、上尾幌神社へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Kami-Oboro Station in Akkeshi with its preserved early Showa wooden mortar station building, quiet mountain valley meadows, and a rural Shinto shrine, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び上尾幌を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '山あいの暮らしを支える上尾幌郵便局',
      subtext: '木造駅舎のすぐそばで静かな集落の温かい日常を感じた',
      badge: {
        code: 'kamioboro_post',
        name_ja: '山里の通信窓口',
        subtitle_en: 'Mountain Post Office',
        description:
          '上尾幌郵便局の前を訪れ、山あいの静かな集落の暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a cozy wooden mountain post office entrance surrounded by autumn larch leaves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '里山の自然を活かすふれあい体験農園',
      subtext: '地域に開かれた貸し農園で北の大地と農業の息吹を感じた',
      badge: {
        code: 'kamioboro_farm',
        name_ja: '里山の体験農園',
        subtitle_en: 'Valley Farmstead',
        description:
          '厚岸町上尾幌ふれあい体験農園を訪れ、のどかな里山の自然を味わったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of neatly tilled garden rows and a rustic watering can beneath northern hills on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '緑の芝生が心地よい学び山公園',
      subtext: '周囲の木々に囲まれた開放的な芝生広場で一息ついた',
      badge: {
        code: 'kamioboro_park',
        name_ja: '学び山の緑地',
        subtitle_en: 'Manabiyama Lawn',
        description:
          '上尾幌学び山公園パークゴルフ場の爽やかな芝生風景に癒やされたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of rolling green park turf framed by tall northern spruce trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '炭鉱時代から土地を見守る上尾幌神社',
      subtext: '集落のはずれに佇む静かな鎮守に手を合わせて旅を結んだ',
      badge: {
        code: 'kamioboro_shrine',
        name_ja: '上尾幌の鎮守',
        subtitle_en: 'Sanctuary of Kami-Oboro',
        description:
          '上尾幌神社に参拝し、炭鉱の歴史を見守り続けた杜で旅を結んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a weathered wooden Shinto torii gate framed by mountain mist on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kamioboro_complete',
    name_ja: '上尾幌・木造駅舎の旅人',
    subtitle_en: 'Walker of Kami-Oboro Station',
    description:
      'JR上尾幌駅から郵便局、ふれあい体験農園、学び山公園、上尾幌神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting an early Showa wooden station building, green valley lawn, and mountain torii gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR上尾幌駅',
      lat: 43.032914,
      lng: 144.612874,
      address: '北海道厚岸郡厚岸町上尾幌1',
      description:
        '大正6年（1917年）12月1日開業の無人駅（終日利用可）。かつて上尾幌炭鉱の石炭や木材の積み出しで賑わい、昭和初期からの味わい深い木造モルタル駅舎が現存する。',
      clue:
        '大正六年十二月に開業し、かつて上尾幌炭鉱の石炭や木材の積み出しで賑わった歴史を持つ「JR上尾幌駅」から楽しい町歩きと散策を始めよう（終日利用可）。昭和初期からの趣深い木造モルタル駅舎の面影をしっかり胸に刻んで集落の道へと外へ踏み出したら、まずは駅前に静かに佇む「上尾幌郵便局」を目指して、澄んだ里山の心地よい空気を感じながらのんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅前から集落道へ徒歩約1分',
      f7_fragment: '大正六年開業、昭和初期からの木造モルタル駅舎が現存する炭鉱ゆかりの駅。',
      f7_full: '「JR上尾幌駅」の古い木造駅舎を後にし、山あいの炭鉱の記憶を辿る散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '上尾幌郵便局',
      lat: 43.03226,
      lng: 144.612951,
      address: '北海道厚岸郡厚岸町上尾幌52',
      description:
        '駅前に佇む山間集落の郵便局（郵便窓口平日9:00〜17:00、日祝休）。郵便・貯金のほか住民票等の証明書交付事務も担い、静かな上尾幌の暮らしを支えている。',
      clue:
        '駅前に佇む山間集落の要「上尾幌郵便局」の前を歩き、静かな暮らしの温もりを感じよう（平日9:00〜17:00）。次は東の「厚岸町上尾幌ふれあい体験農園」へ向かおう。',
      hook: '東方向（集落沿い）へ徒歩約10分',
      f7_fragment: 'JR上尾幌駅前に佇み、証明書交付など山間集落の暮らしを支える郵便局。',
      f7_full: '「上尾幌郵便局」の前を通り、山あいの集落で受け継がれる穏やかな暮らしに触れた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '厚岸町上尾幌ふれあい体験農園',
      lat: 43.033467,
      lng: 144.621856,
      address: '北海道厚岸郡厚岸町上尾幌7',
      description:
        '上尾幌地区の豊かな自然環境を活かした町営の貸し農園・体験施設（日中利用可・冬季閉鎖あり）。地域の農業振興と交流の場として大切に整備されている。',
      clue:
        '上尾幌地区の豊かな自然環境を活かして整備された町営の施設「厚岸町上尾幌ふれあい体験農園」の風景をゆっくり楽しく眺めてみよう（日中利用可・冬季閉鎖あり）。のどかな山あいの畑と澄んだ青い空が織りなす美しい風景を眺めながら一歩ずつ歩いていくと、北の大地で営まれる素朴な暮らしの豊かさが静かに伝わってくる。爽やかな里山の風をたっぷり感じたら、「上尾幌学び山公園パークゴルフ場」へ向かおう。',
      hook: '集落沿いへ徒歩約4分',
      f7_fragment: '上尾幌の自然環境を活かし、農業振興と地域交流のために整備された町営農園。',
      f7_full: '「厚岸町上尾幌ふれあい体験農園」ののどかな風景に、里山の豊かさを感じた。',
    },
    {
      spot_order: 4,
      spot_type: '休憩',
      name: '上尾幌学び山公園パークゴルフ場',
      lat: 43.030427,
      lng: 144.617251,
      address: '北海道厚岸郡厚岸町上尾幌9',
      description:
        '9ホール・364mのコースを備える町営パークゴルフ場（日の出〜日没、5月上旬〜11月上旬開放、無料）。緑豊かな芝生と木々に囲まれ、のどかな里山風景の中で休憩できる。',
      clue:
        '緑豊かな芝生と周囲の優しい木々に囲まれた町営の憩い空間「上尾幌学び山公園パークゴルフ場」で心地よく一息つこう（5月上旬〜11月上旬開放、無料）。丁寧に手入れされた芝生のコースやのどかな里山の美しい風景を眺めながら胸いっぱい深呼吸すれば、日常の喧騒をすっかり忘れて心がすっと軽くなっていく。十分にリフレッシュできたら、道道1128号方面へと進んで鎮守の「上尾幌神社」へと向かおう。',
      hook: '道道1128号方面へ徒歩約6分',
      f7_fragment: '緑豊かな芝生と木々に囲まれ、のどかな里山風景の中で憩える町営公園。',
      f7_full: '「上尾幌学び山公園パークゴルフ場」の爽やかな緑の中で、里山の風に癒やされた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '上尾幌神社',
      lat: 43.030992,
      lng: 144.611925,
      address: '北海道厚岸郡厚岸町上尾幌183',
      description:
        '道道1128号線と221号線の交差付近、集落のはずれに鎮座する地域の鎮守社（境内参拝自由・無休）。炭鉱で栄えた時代から現在まで上尾幌の歩みを見守り続けている。',
      clue:
        '旅の締めくくりは、道道1128号線と221号線の交差付近の静かな集落のはずれに鎮座する「上尾幌神社」へ丁寧に心を込めて参拝しよう（境内自由）。かつて上尾幌炭鉱で栄えた時代から現代に至るまで、この山あいの集落と人々の暮らしをずっと見守り続けてきた社殿の前で静かに手を合わせれば、深い安らぎが胸いっぱいに広がっていく。木造駅舎と炭鉱の記憶に出会う上尾幌の旅を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: '道道交差付近に鎮座し、炭鉱時代から上尾幌の歩みを見守り続ける地域の鎮守。',
      f7_full: '「上尾幌神社」の静かな杜に手を合わせ、上尾幌の温かい歴史の散歩を終えた。',
    },
  ],
};
