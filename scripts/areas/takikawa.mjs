export default {
  slug: 'takikawa',
  station_order: 930,
  station: '滝川',
  line: 'JR根室本線',
  area_name: '滝川・明神・一の坂',
  prefecture: '北海道',
  municipality: '滝川市',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', 'ジンギスカン', '化石', '屯田兵', '老舗喫茶'],
  style_genre: 'ink_and_watercolor',
  title: '空知の分岐点と美食めぐる滝川の記憶',
  description:
    '函館本線と根室本線の分岐点・JR滝川駅から駅前喫茶、松尾ジンギスカン本店、美術自然史館、滝川神社を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Takikawa in Sorachi, Hokkaido, featuring a classic concrete railway junction station, a sizzling iron jingisukan dome, an ancient sea cow fossil display, and a historic Shinto shrine torii under wide northern skies, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び滝川を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '駅前の老舗喫茶で味わった穏やかな時間の香り',
      subtext: '旅の始まりに駅前の珈琲店で静かなひとときを過ごした',
      badge: {
        code: 'takikawa_seika',
        name_ja: '駅前喫茶の旅人',
        subtitle_en: 'Stationfront Coffee Wanderer',
        description:
          'JR滝川駅至近のCOFFEE HOUSE Seikaで、落ち着いた朝や午後のひとときを過ごしたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a vintage porcelain coffee cup and brass spoon on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '本店で堪能した秘伝のタレ香る滝川名物の味',
      subtext: '昭和31年創業の本店で味付けジンギスカンの歴史に触れた',
      badge: {
        code: 'takikawa_matsuo',
        name_ja: '北のジンギスカン通',
        subtitle_en: 'Takikawa Jingisukan Connoisseur',
        description:
          '昭和31年創業の松尾ジンギスカン 滝川本店で、秘伝のタレが香る伝統の味を堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a domed cast-iron jingisukan grill with rising savory steam on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '500万年前の海を伝えるカイギュウ化石との出会い',
      subtext: '空知川から蘇ったタキカワカイギュウの標本に驚いた',
      badge: {
        code: 'takikawa_kaigyu',
        name_ja: '太古の海の目撃者',
        subtitle_en: 'Witness of the Ancient Sea',
        description:
          '滝川市美術自然史館でタキカワカイギュウの骨格標本と地域の芸術に出会ったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a fossilized sea cow skeleton outline and gentle ocean waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '屯田兵の開拓を見守り続けてきた厳かな社での参拝',
      subtext: '明治23年の入植期から続く滝川神社でまちの原点に触れた',
      badge: {
        code: 'takikawa_shrine',
        name_ja: '開拓の社を巡る者',
        subtitle_en: 'Visitor of the Pioneer Shrine',
        description:
          '明治23年創祀に始まる滝川神社を参拝し、屯田兵が開いた空知の歴史に思いを馳せたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a dignified Shinto torii gate framed by northern birch branches on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'takikawa_complete',
    name_ja: '滝川・分岐点と開拓の旅人',
    subtitle_en: 'Traveler of Takikawa Junction and Heritage',
    description:
      'JR滝川駅から駅前喫茶、松尾ジンギスカン本店、美術自然史館、滝川神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting converging railway lines, a sea cow fossil, and a Shinto torii on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR滝川駅',
      lat: 43.555171,
      lng: 141.901263,
      address: '北海道滝川市栄町4-9-15',
      description:
        '明治31年（1898年）7月16日開業、大正2年に下富良野線（現・根室本線）が分岐した空知の要衝（終日利用可）。昭和37年建造の駅舎が旅人を迎える。',
      clue:
        '明治三十一年七月に開業し、大正二年には根室本線へと続く鉄路が分岐した中空知の要衝「JR滝川駅」から楽しい街歩きと散策を始めよう（終日利用可）。昭和三十七年築の趣ある駅舎をゆっくり後にして賑やかな駅前広場へ外へ出たら、まずは駅から北東へ歩いて約四分の場所にある老舗喫茶「COFFEE HOUSE Seika」を目指してのんびり楽しく元気に笑顔で力強く爽やかに歩みを踏み出そう。',
      hook: '駅前から北東方向へ徒歩約4分',
      f7_fragment: '明治三十一年開業、函館本線と根室本線が分岐する空知の鉄道の要衝。',
      f7_full: '「JR滝川駅」の昭和薫る駅舎を後にし、名物グルメと開拓史を巡る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '休憩',
      name: 'COFFEE HOUSE Seika',
      lat: 43.557293,
      lng: 141.902763,
      address: '北海道滝川市栄町4-7-3',
      description:
        '滝川駅至近で長年親しまれる老舗喫茶店（10:00〜20:00、日曜・祝日休）。散策前後のひと息に心地よい落ち着いた空間が広がる。',
      clue:
        '駅至近の老舗「COFFEE HOUSE Seika」で落ち着いた珈琲のひとときを過ごそう（10:00〜20:00、日祝休）。一息ついたら南東の「松尾ジンギスカン 滝川本店」へ向かおう。',
      hook: '栄町から南東方向へ徒歩約13分',
      f7_fragment: 'JR滝川駅すぐそばで親しまれる落ち着いた雰囲気の老舗喫茶店。',
      f7_full: '「COFFEE HOUSE Seika」で香り高い珈琲を味わい、旅の歩みを心地よく整えた。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '松尾ジンギスカン 滝川本店',
      lat: 43.554726,
      lng: 141.911909,
      address: '北海道滝川市明神町3-5-12',
      description:
        '昭和31年（1956年）創業の味付けジンギスカン発祥の本店（11:00〜22:00、年末年始休）。秘伝のタレに漬け込んだ柔らかな羊肉が全国的に知られる滝川名物の拠点。',
      clue:
        '昭和三十一年創業、北海道が誇る味付けジンギスカンの名店「松尾ジンギスカン 滝川本店」で自慢の美味しい食事をゆっくり楽しく味わおう（11:00〜22:00、年末年始休）。リンゴや玉ねぎなどの甘みと醤油が織りなす秘伝のタレにじっくり漬け込まれた柔らかな羊肉は、焼くほどに芳ばしい香りが広がり格別の美味しさだ。お腹が幸せに満たされたら、南東の「滝川市美術自然史館」へ向かおう。',
      hook: '明神町から南東方向へ徒歩約5〜6分',
      f7_fragment: '昭和三十一年創業、秘伝のタレに漬け込む味付けジンギスカン発祥の本店。',
      f7_full: '「松尾ジンギスカン 滝川本店」で伝統の味を堪能し、滝川の食文化に触れた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '滝川市美術自然史館',
      lat: 43.552071,
      lng: 141.914467,
      address: '北海道滝川市新町2-5-30',
      description:
        '昭和61年（1986年）開館の文化施設（10:00〜17:00、月曜・祝翌日・12〜2月冬期休館）。空知川河床で発見された約500万年前の新種化石「タキカワカイギュウ」骨格標本などを展示。',
      clue:
        '昭和六十一年開館の「滝川市美術自然史館」をじっくり楽しく元気に訪ねて太古の地球の営みと芸術に触れよう（10:00〜17:00、月曜・冬期休）。昭和五十五年に空知川の河床から発見された約五百万年前の新種化石「タキカワカイギュウ」の貴重な骨格標本や、郷土ゆかりの日本画家・岩橋英遠の作品は必見の見応えだ。太古と美の世界を満喫したら、北に鎮座する古社「滝川神社」へと向かおう。',
      hook: '新町から北方向へ徒歩約20分',
      f7_fragment: '約500万年前の化石「タキカワカイギュウ」や岩橋英遠作品を展示する文化館。',
      f7_full: '「滝川市美術自然史館」で五百万年前の海の化石と芸術に出会い、深い感銘を受けた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '滝川神社',
      lat: 43.564068,
      lng: 141.913269,
      address: '北海道滝川市一の坂町東1-1-12',
      description:
        '明治23年（1890年）7月、屯田兵440戸の移住に伴い設けられた神霊遥拝所をルーツとする地域の鎮守（参拝自由）。明治36年に現在地へ社殿を建立し、昭和11年に県社へ昇格した。',
      clue:
        '旅の締めくくりは、明治二十三年七月に屯田兵四百四十戸の移住に伴って設けられた遥拝所を原点とする「滝川神社」へ丁寧に心を込めてゆっくり参拝しよう（参拝自由）。明治三十六年に現在地へ立派な社殿が建てられ、地域の人々の心の拠り所として長く受け継がれてきた静かな杜で深く手を合わせれば、空知開拓の誇りが胸に静かに響いてくる。感謝を胸に、滝川の充実した街歩きを晴れやかに笑顔で結ぼう。',
      hook: '',
      f7_fragment: '明治二十三年の屯田兵移住に伴い創祀された遥拝所に始まる滝川の総鎮守。',
      f7_full: '「滝川神社」の清らかな杜に参拝し、開拓の歴史に思いを馳せて旅を締めくくった。',
    },
  ],
};
