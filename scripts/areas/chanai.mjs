export default {
  slug: 'chanai',
  station_order: 966,
  station: '茶内',
  line: 'JR根室本線',
  area_name: '茶内',
  prefecture: '北海道',
  municipality: '浜中町',
  category: '歴史・グルメ',
  budget_tier: 2,
  tags: ['根室本線', '茶内駅', 'ヨンゼロソフト', '浜中町営軌道', 'ルパン三世'],
  style_genre: 'ink_and_watercolor',
  title: '酪農の恵みと町営軌道の面影を辿る茶内散歩',
  description:
    'ルパン三世パネルや町営軌道資料が並ぶJR茶内駅から濃厚ソフトのコープはまなか、食堂・北の家、茶内八幡神社、機関車保存広場へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Chanai Station in Hamanaka Hokkaido, a creamy Hokkaido dairy soft-serve ice cream cone, a historic rural Shinto shrine, and a preserved vintage railway locomotive in a green park, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び茶内を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '濃厚牛乳が自慢のコープはまなか',
      subtext: '浜中町産の牛乳を使った名物ヨンゼロソフトと乳製品を味わった',
      badge: {
        code: 'chanai_coop',
        name_ja: 'ヨンゼロの恵み',
        subtitle_en: 'Hamanaka Dairy Treat',
        description:
          'コープはまなかで浜中町産の濃厚な牛乳を使ったヨンゼロソフトや乳製品を楽しんだしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a rich creamy Hokkaido soft-serve ice cream cone and glass milk bottle on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '茶内本町で長く親しまれる食堂 北の家',
      subtext: '駅近くの地域密着の食堂で温かい食事を囲み一息ついた',
      badge: {
        code: 'chanai_kitanoie',
        name_ja: '茶内の温かな食卓',
        subtitle_en: 'Chanai Country Kitchen',
        description:
          '北の家で茶内本町の暮らしに寄り添う温かい食堂の味に出会ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a steaming Japanese lunch set tray and ceramic tea cup on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '大正時代に建立された茶内八幡神社',
      subtext: '琵琶瀬神社の御分霊を祀る地区の氏神へ静かに参拝した',
      badge: {
        code: 'chanai_hachiman',
        name_ja: '茶内地区の氏神',
        subtitle_en: 'Chanai Hachiman Shrine',
        description:
          '大正時代建立の茶内八幡神社に参拝し、茶内開拓の歴史に触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a weathered wooden Shinto torii gate surrounded by northern pines on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '町営軌道機関車が眠る農村運動広場',
      subtext: 'かつて酪農地帯を走った小さな機関車の保存展示を見学した',
      badge: {
        code: 'chanai_tramway',
        name_ja: '町営軌道の記憶',
        subtitle_en: 'Hamanaka Tramway Relic',
        description:
          '浜中町農村運動広場でかつての浜中町営軌道の保存機関車を見学したしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a charming vintage narrow-gauge diesel locomotive resting on grassy rails on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'chanai_complete',
    name_ja: '茶内・酪農と軌道の旅人',
    subtitle_en: 'Explorer of Chanai Dairy and Tramway',
    description:
      'JR茶内駅からコープはまなか、北の家、茶内八幡神社、農村運動広場まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a dairy milk bottle, a vintage narrow-gauge locomotive, and a Shinto torii gate on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR茶内駅',
      lat: 43.129368,
      lng: 145.027984,
      address: '北海道厚岸郡浜中町茶内緑113',
      description:
        '大正8年（1919年）11月25日開業の無人駅（終日利用可）。モンキー・パンチ氏の出身地にちなみルパン三世パネルを設置し、旧駅務室「ふれ茶内館」に浜中町営軌道資料を展示。',
      clue:
        '大正八年十一月に開業し、原作者モンキー・パンチ氏の出身地にちなむルパン三世のパネルや、旧駅務室「ふれ茶内館」に町営軌道の資料を展示する「JR茶内駅」から楽しい散策を始めよう（終日利用可）。酪農のまちの爽やかな空気を胸いっぱい吸い込んで北方向へと外へ踏み出したら、まずは名物「ヨンゼロソフト」が人気の「コープはまなか」を目指してのんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から北方向へ徒歩約3分',
      f7_fragment: 'ルパン三世の展示と旧駅務室「ふれ茶内館」の町営軌道資料がある無人駅。',
      f7_full: '「JR茶内駅」の資料展示を後にし、酪農スイーツと軌道の面影を辿る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '買い物',
      name: 'コープはまなか',
      lat: 43.131274,
      lng: 145.028173,
      address: '北海道厚岸郡浜中町茶内栄65',
      description:
        'JA浜中町運営の地域スーパー（平日9:30〜18:00・土曜〜15:00・日祝10:00〜15:00、無休・年始除く）。浜中町産の濃厚な牛乳を使った「ヨンゼロソフト」や乳製品が名物。',
      clue:
        'JA浜中町運営の「コープはまなか」で濃厚牛乳のヨンゼロソフトや美味しい乳製品をゆったりと味わおう（年始休）。一息ついたら西方向の「北の家」へと向かおう。',
      hook: '西方向へ徒歩約2〜3分',
      f7_fragment: 'JA浜中町が運営し、濃厚な牛乳を使った「ヨンゼロソフト」が名物のスーパー。',
      f7_full: '「コープはまなか」で浜中自慢の乳製品に出会い、濃厚なミルクの恵みを味わった。',
    },
    {
      spot_order: 3,
      spot_type: '食事',
      name: '北の家',
      lat: 43.13124,
      lng: 145.02591,
      address: '北海道厚岸郡浜中町茶内本町16',
      description:
        '茶内本町で長く親しまれている地域の食堂兼民宿（11:00〜13:30・17:00〜23:00、日曜・不定休）。素朴で温かい食事が道東の散策を支えてくれる。',
      clue:
        '茶内本町の通り沿いで地元の人々や旅人に長く親しまれ続けている温かい食堂兼民宿「北の家」の前をゆっくり楽しく訪ねてみよう（日曜・不定休）。お昼時や夜に素朴で心のこもった手料理をいただけば、厳しい北の大地を開拓してきた地域の温かい暮らしの息吹が静かに伝わってくる。茶内の街並みの穏やかな空気をたっぷり味わったら、北西方向へ進んで地域の氏神「茶内八幡神社」へと元気に歩いて向かおう。',
      hook: '北西方向へ徒歩約6分',
      f7_fragment: '茶内本町で地域の暮らしと旅人を支え続けてきた温かい老舗の食堂兼民宿。',
      f7_full: '「北の家」の前で茶内本町の穏やかな街並みに触れ、東の神社へと歩を進めた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '茶内八幡神社',
      lat: 43.134106,
      lng: 145.021678,
      address: '北海道厚岸郡浜中町茶内橋北東1',
      description:
        '大正時代に琵琶瀬神社の御分霊を戴いて建立された茶内地区の氏神（常時参拝可・無休）。静かな木立に囲まれ、地域の歴史を静かに見守り続けている。',
      clue:
        '大正時代に琵琶瀬神社の御分霊を戴いて建立され、以来ずっと茶内地区の暮らしを見守り続けてきた氏神「茶内八幡神社」へ丁寧に心を込めて参拝しよう（常時参拝可）。静かな木立と清浄な空気に包まれた境内でそっと深く手を合わせれば、酪農の里を築き上げた先人たちの熱い思いが胸に深く伝わってくる。旅の安全を静かに祈ったら、さらに北西側の「浜中町農村運動広場」へと爽やかに元気に歩いて向かおう。',
      hook: '北西方向へ徒歩約1〜2分',
      f7_fragment: '大正時代に琵琶瀬神社の御分霊を祀り建立された、茶内地区を見守る氏神。',
      f7_full: '「茶内八幡神社」の静かな境内に手を合わせ、茶内の歴史に思いを馳せた。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '浜中町農村運動広場',
      lat: 43.134533,
      lng: 145.020697,
      address: '北海道厚岸郡浜中町茶内橋北東33',
      description:
        '5月〜10月開放の運動広場（9:00〜19:00、冬季閉鎖）。かつて浜中町内を走った簡易軌道「浜中町営軌道」の機関車保存車が移設・展示されており、広場で一息つける。',
      clue:
        '旅の締めくくりは、緑豊かな広がりの中で心地よく休憩できる「浜中町農村運動広場」へ楽しく足を運んでみよう（5/1〜10/31開放・冬季閉鎖）。ここにはかつて浜中町の酪農地帯を力強く走り抜けて牛乳や人々を運んだ簡易軌道「浜中町営軌道」の貴重な機関車保存車が移設・展示されている。歴史を伝える小さな機関車を眺めながら爽やかな風を感じて、茶内の素敵な散歩を晴れやかな笑顔で結ぼう。',
      hook: '',
      f7_fragment: 'かつて町内を走った「浜中町営軌道」の機関車が保存展示される運動広場。',
      f7_full: '「浜中町農村運動広場」で浜中町営軌道の保存機関車に出会い、茶内の旅を終えた。',
    },
  ],
};
