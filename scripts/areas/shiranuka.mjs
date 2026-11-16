export default {
  slug: 'shiranuka',
  station_order: 953,
  station: '白糠',
  line: 'JR根室本線',
  area_name: '白糠・岬・石炭岬',
  prefecture: '北海道',
  municipality: '白糠町',
  category: 'グルメ・絶景',
  budget_tier: 2,
  tags: ['根室本線', '白糠厳島神社', '海中みこし', 'はまなす', '岬の森東山公園'],
  style_genre: 'ink_and_watercolor',
  title: '海の鳥居と美食の街が誘う白糠の潮風散歩',
  description:
    'JR白糠駅から昭和23年創業の郷菓とら信、地元食材のレストランはまなす、白糠厳島神社、太平洋一望の岬の森東山公園を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Shiranuka in Kushiro, Hokkaido, featuring a vermilion Shinto torii gate standing near coastal railway tracks overlooking the Pacific Ocean, a warm seaside bakery and dining room, and a grassy cape lookout cliff, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び白糠を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '昭和23年創業の老舗で出会った駒おどり最中',
      subtext: '郷菓とら信でハミングロードの伝統和菓子に出会った',
      badge: {
        code: 'shiranuka_torashin',
        name_ja: '郷菓の味わい手',
        subtitle_en: 'Taster of Torashin',
        description:
          '昭和23年創業の郷菓 とら信で、銘菓「駒おどり最中」や白糠おはぎを手に入れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of traditional horse-shaped monaka wafers and sweet red bean wagashi on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '白糠の羊とチーズの恵みを堪能した街の名店',
      subtext: 'レストランはまなすで白糠ならではの地元食材を味わった',
      badge: {
        code: 'shiranuka_hamanasu',
        name_ja: '白糠美食の旅人',
        subtitle_en: 'Gourmet of Shiranuka',
        description:
          'レストラン はまなすで、茶路めん羊牧場のラム肉や白糠酪恵舎チーズの料理を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of herb-roasted Hokkaido lamb and artisan cream cheese on a rustic ceramic plate on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '線路が参道を横切り海へ神輿が渡る港の鎮守',
      subtext: '白糠厳島神社で海を見守る鳥居と伝統の歴史に触れた',
      badge: {
        code: 'shiranuka_itsukushima',
        name_ja: '海中渡御の参拝者',
        subtitle_en: 'Pilgrim of Itsukushima',
        description:
          '文化年間勧請の白糠厳島神社を訪れ、海と鉄路に寄り添う社殿に参拝したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a coastal vermilion torii gate beside railway sleepers and breaking ocean waves on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '望洋の碑のもと太平洋を一望した高台の展望地',
      subtext: '岬の森東山公園の展望広場から丸い水平線を望んだ',
      badge: {
        code: 'shiranuka_higashiyama',
        name_ja: '石炭岬の眺望者',
        subtitle_en: 'Lookout of Sekitan Cape',
        description:
          '標高約50mの岬の森東山公園から、白糠漁港と太平洋の大パノラマを望んだしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a grassy coastal headland monument overlooking a sweeping circular Pacific horizon on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'shiranuka_complete',
    name_ja: '白糠・海中神輿と美食の旅人',
    subtitle_en: 'Traveler of Shiranuka',
    description:
      'JR白糠駅から郷菓とら信、レストランはまなす、白糠厳島神社、岬の森東山公園まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a coastal Shinto torii, artisan cheese and lamb, and a cape overlooking the Pacific on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR白糠駅',
      lat: 42.955889,
      lng: 144.076843,
      address: '北海道白糠郡白糠町東1条南1-1',
      description:
        '明治34年（1901年）7月20日開業、かつて国鉄白糠線の起点駅でもあった駅（終日開放）。昭和44年改築の駅舎が海のまち・白糠の玄関口となっている。',
      clue:
        '明治三十四年七月に開業し、かつては国鉄白糠線の起点駅としても賑わった美食と潮風の玄関口「JR白糠駅」から楽しい町歩きと散策を始めよう（終日開放）。昭和四十四年築の駅舎をゆっくり後にして南東方向のハミングロードへと外へ踏み出したら、まずは地元の老舗和洋菓子店「郷菓 とら信」を目指して、心地よい潮風を感じながらのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に歩き出そう。',
      hook: '駅から南東方向（ハミングロード）へ徒歩約3分',
      f7_fragment: '明治三十四年開業、かつて白糠線の起点でもあった美食の町の玄関口。',
      f7_full: '「JR白糠駅」を後にし、白糠の甘い銘菓と海の絶景を巡る潮風散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: '郷菓 とら信',
      lat: 42.954922,
      lng: 144.077974,
      address: '北海道白糠郡白糠町東2条南2-1-8',
      description:
        '昭和23年（1948年）創業の老舗和洋菓子店（月〜土9:00〜17:30頃・日祝〜16:00、不定休）。欧米風デザインのハミングロード沿いで銘菓「駒おどり最中」や白糠おはぎが人気。',
      clue:
        '昭和二十三年創業の「郷菓 とら信」で銘菓の駒おどり最中や白糠おはぎを楽しく選ぼう（不定休）。お土産を手にしたらすぐ南隣の「レストラン はまなす」へ向かおう。',
      hook: 'すぐ南方向へ徒歩約1分',
      f7_fragment: '昭和二十三年創業、銘菓「駒おどり最中」や白糠おはぎが評判の老舗菓子店。',
      f7_full: '「郷菓 とら信」で伝統の駒おどり最中に出会い、町並みの温もりを感じた。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: 'レストラン はまなす',
      lat: 42.954746,
      lng: 144.077938,
      address: '北海道白糠郡白糠町東2条南2-1-26',
      description:
        '茶路めん羊牧場のラム肉や白糠酪恵舎のチーズなど白糠町の極上食材を活かした洋食が味わえる人気レストラン（11:00〜14:30・17:00〜20:00、水曜休）。',
      clue:
        '白糠町が誇る食材の魅力を存分に味わえる人気洋食店「レストラン はまなす」で極上のランチやディナーをゆっくり楽しく味わおう（水曜休・月2回連休あり）。茶路めん羊牧場の柔らかなラム肉や白糠酪恵舎のフレッシュなチーズなど、地元ならではの豊かな恵みを活かした丁寧な一皿はまさにここでしか味わえない至福の美味しさだ。大満足でお腹をしっかり満たしたら、東の「白糠厳島神社」へと向かおう。',
      hook: '東2条から東方向へ徒歩約8分',
      f7_fragment: '茶路めん羊牧場のラム肉や白糠酪恵舎のチーズなど白糠の食材が光る名店。',
      f7_full: '「レストラン はまなす」で白糠自慢の羊とチーズ料理を堪能し、感動に浸った。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '白糠厳島神社',
      lat: 42.95509,
      lng: 144.085075,
      address: '北海道白糠郡白糠町岬1-1-1',
      description:
        '文化年間（1804〜1818年）に安芸国厳島神社から勧請された古社（境内自由・無休）。参道途中に根室本線の線路が横切る風景と7月下旬の例大祭「海中みこし渡御」で知られる。',
      clue:
        '文化年間に安芸国の厳島神社から勧請された由緒ある古社「白糠厳島神社」へ丁寧に心を込めてゆっくりと参拝しよう（境内自由）。参道の途中をJR根室本線の線路が横切る珍しい景観と、七月下旬の例大祭で重さ約四百キロもの神輿が太平洋の荒波へと勇ましく入る伝統の「海中みこし渡御」で知られる港の鎮守だ。海の安全と旅の無事を静かに優しく祈ったら、東の「岬の森東山公園」へと元気に歩こう。',
      hook: '岬から東方向へ遊歩道を上り徒歩約10分',
      f7_fragment: '文化年間勧請、線路が参道を横切り「海中みこし渡御」でも知られる古社。',
      f7_full: '「白糠厳島神社」で海と鉄路が交わる独特の境内を歩き、伝統の祈りに触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '岬の森東山公園',
      lat: 42.954387,
      lng: 144.088795,
      address: '北海道白糠郡白糠町石炭岬17',
      description:
        '標高約50mの展望広場に「望洋の碑」が建つ公園（終日開放）。眼下の白糠漁港や白糠の市街地、そして丸く広がる太平洋の大パノラマを一望できる絶景スポット。',
      clue:
        '旅の締めくくりは、標高約五十メートルの高台に「望洋の碑」が建つ「岬の森東山公園」の展望広場へ元気に登ってみよう（終日開放）。爽やかな潮風を受けながら広大な大海原へと視線を向けると、眼下の白糠漁港と落ち着いた町並み、そしてどこまでも丸く広がる太平洋の雄大な大パノラマに思わず息をのむ。美食と海の祈りに出会う白糠の楽しい散歩を、最高の絶景とともに晴れやかに楽しく笑顔で結ぼう。',
      hook: '',
      f7_fragment: '標高約50mの展望広場に望洋の碑が建ち、白糠市街と太平洋を一望できる公園。',
      f7_full: '「岬の森東山公園」の展望広場から丸い水平線を望み、白糠の散歩を締めくくった。',
    },
  ],
};
