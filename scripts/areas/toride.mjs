export default {
  slug: 'toride',
  station_order: 633,
  station: '取手',
  line: 'JR常磐線・関東鉄道常総線',
  area_name: '取手・水戸街道の本陣と利根川の街',
  prefecture: '茨城県',
  municipality: '取手市',
  category: '歴史と街道',
  budget_tier: 2,
  tags: ['茨城県', '取手市', '取手駅', '旧取手宿本陣', '取手八坂神社'],
  style_genre: 'ukiyoe_woodblock',
  title: '取手・水戸街道の本陣と利根の社を歩く',
  description:
    '利根川を望む茨城の玄関口・JR取手駅から、明治元年創業の奈良漬舗「新六本店」と風情あるそば処「伊勢利」、茨城県指定有形文化財「旧取手宿本陣染野家住宅」、精巧な彫刻が美しい「取手八坂神社」、隠れ家「Atelier + café ju-tou」を巡る散策路。',
  eyecatch_prompt:
    'Modern shin-hanga woodblock print illustration of Toride town showing an Edo-period thatched-roof honjin inn, traditional pickling shop on old Mito highway, cozy soba noodle house, intricately carved Shinto shrine and hilltop sunlit atelier cafe near Tone River, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '水戸街道の宿場町の記憶と利根川畔の文化が息づく取手を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「新六本店」の旧水戸街道沿いの店構えで、明治元年創業の奈良漬に出会った瞬間',
      subtext:
        '酒粕の芳醇な香りと百五十年以上の伝統が、宿場町・取手の豊かな食文化を伝えていた。',
      badge: {
        code: 'toride_shinroku',
        name_ja: '取手宿・新六の奈良漬を買いし者',
        subtitle_en: 'Taster of Toride Pickles',
        description:
          '新六本店を訪ね、明治元年創業から続く伝統の奈良漬と旧水戸街道の面影に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting traditional Japanese wooden barrels and glazed ceramic jars of amber narazuke pickles, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「旧取手宿本陣染野家住宅」の茅葺屋根を仰ぎ、水戸徳川家の旅路を想った瞬間',
      subtext:
        '寛政七年建築の重厚な本陣建物が、参勤交代や水戸藩ゆかりの往来を静かに物語っていた。',
      badge: {
        code: 'toride_honjin',
        name_ja: '水戸街道・旧取手宿本陣を巡りし者',
        subtitle_en: 'Explorer of Toride Honjin',
        description:
          '旧取手宿本陣染野家住宅を訪ね、寛政期の大名宿の重厚な茅葺建築に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a grand Edo-period thatched-roof honjin inn gate and wooden tatami verandah, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「取手八坂神社」の拝殿と本殿に施された、息を呑むほど精巧な木彫を眺めた瞬間',
      subtext:
        '江戸初期から取手を見守ってきた総鎮守の社殿に、職人の技と地域の誇りが刻まれていた。',
      badge: {
        code: 'toride_yasaka',
        name_ja: '取手総鎮守・八坂神社の彫刻を拝みし者',
        subtitle_en: 'Visitor of Toride Yasaka Shrine',
        description:
          '取手八坂神社を訪ね、取手総鎮守の荘厳な社殿と精巧な伝統木彫に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring an ornate traditional wooden Shinto shrine sanctuary with intricate carvings and stone lanterns, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「Atelier + café ju-tou」の静かな空間で、こだわりの珈琲と手作り菓子を味わった瞬間',
      subtext:
        'アンティーク家具が配された隠れ家カフェで、取手散策の午後に穏やかな余韻を添えた。',
      badge: {
        code: 'toride_jutou',
        name_ja: '取手・アトリエカフェに寛ぎし者',
        subtitle_en: 'Guest of Cafe Ju-tou',
        description:
          'Atelier + café ju-touを訪ね、アトリエ併設の温かな空間で優しい珈琲と菓子を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing an antique wooden cafe table with organic coffee, handmade rice-flour cake and dried botanicals, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'toride_complete',
    name_ja: '取手・水戸街道の本陣と社を巡る旅人',
    subtitle_en: 'Walker of Toride Highway',
    description:
      '新六本店から伊勢利、旧取手宿本陣染野家住宅、取手八坂神社、Atelier + café ju-touまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining an Edo-period thatched honjin roof, intricate shrine wood carvings and a cozy ceramic coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '新六本店',
      spot_type: '買い物',
      description:
        '明治元年（1868年）創業、旧水戸街道沿いに店を構える奈良漬の老舗専門店。大吟醸の酒粕などで漬け込んだ伝統の奈良漬が人気。営業時間9:00〜18:00、月曜定休。',
      address: '茨城県取手市取手2-13-36',
      prefecture: '茨城県',
      municipality: '取手市',
      lat: 35.893689,
      lng: 140.063439,
      clue: 'JR常磐線の取手駅東口を出て、かつての水戸街道の面影を残す通りを南東へ歩き、明治元年創業の老舗「新六本店」へ立ち寄ろう（9:00〜18:00、月曜休）。百五十年以上にわたって酒粕でじっくり漬け込む伝統の「奈良漬」を守り続ける名店で、店頭には瓜や守口大根、生姜など香り高い漬物がずらりと並ぶ。宿場町として栄えた取手の暮らしの味に触れながら、歴史ある街道の散策を心地よく始めたい。',
      surprise:
        '駅東口から数分歩いただけで、昔ながらの重厚な商家の風格を備えた老舗に出会えるのが旧街道沿いならではの醍醐味だ。熟成された酒粕のまろやかで奥深い香りからは、利根川の水運と水戸街道の往来に育まれた取手の豊かな食文化がまっすぐ伝わってくる。',
      hook: '街道の香りに触れたら、南へ徒歩2分のそば処・伊勢利で昼食にしよう。',
      f7_fragment: '明治元年創業、旧水戸街道沿いで伝統の奈良漬を守る取手の老舗。',
      f7_full: '旧水戸街道沿いの老舗「新六本店」を訪ね、明治から受け継がれる伝統の奈良漬と宿場町の面影に心地よく触れた。',
      image_prompt:
        'Historic Japanese pickle shop interior of Shinroku Honten displaying wooden cedar barrels and neatly packed amber narazuke pickles, no text, no people.',
    },
    {
      name: '伊勢利',
      spot_type: '食事',
      description:
        '取手駅東口からほど近い旧市街に佇む、地元で長年愛される手打ちそば・うどんの店。風情ある空間で香り高い蕎麦を味わえる。営業時間11:00〜14:00・16:00〜20:00、月曜定休。',
      address: '茨城県取手市取手2-6-15',
      prefecture: '茨城県',
      municipality: '取手市',
      lat: 35.892786,
      lng: 140.063454,
      clue: '新六本店から南へ徒歩2分、落ち着いた街並みに佇むそば処「伊勢利」で食事をとろう（11:00〜14:00・16:00〜20:00、月曜休）。昔から地域の人々に親しまれてきた風情あるお店で、喉越しの良い手打ちのお蕎麦や温かなうどん、昔ながらの丼ものなどほっとする味わいが楽しめる。この先の旧本陣や古社をめぐる前に、素朴で温かな下町の食事処でゆっくりお腹を満たして、午後の英気をしっかり養いたい。',
      surprise:
        '観光地化された大きなお蕎麦屋さんとは違う、地元の常連客に愛され続けてきた飾らない居心地の良さが心に残る。丁寧にとられた出汁の香りとお蕎麦の優しい風味が、これから歩く水戸街道の史跡めぐりへ向かう気持ちをおだやかに整えてくれる一軒だ。',
      hook: 'お腹が満たされたら、南東へ徒歩4分の旧取手宿本陣染野家住宅へ向かおう。',
      f7_fragment: '取手駅東口近くの旧市街で愛される、風情ある地元の手打ちそば処。',
      f7_full: '旧市街のそば処「伊勢利」で香り豊かなお蕎麦を味わい、地元に根付いた取手の素朴で温かな日常の食に触れた。',
      image_prompt:
        'Cozy traditional Japanese neighborhood soba shop table with handmade soba noodles on a bamboo zaru mat, dipping sauce cup and warm tea, no text, no people.',
    },
    {
      name: '旧取手宿本陣染野家住宅',
      spot_type: '見どころ',
      description:
        '寛政7年（1795年）に建てられた水戸街道・取手宿の本陣建築で、茨城県指定有形文化財。重厚な茅葺屋根の主屋と表門が往時を伝える。公開金〜日・祝10:00〜16:00、無料。',
      address: '茨城県取手市取手2-16-41',
      prefecture: '茨城県',
      municipality: '取手市',
      lat: 35.891583,
      lng: 140.065668,
      clue: '伊勢利から東へ徒歩3分、茨城県指定有形文化財「旧取手宿本陣染野家住宅」を訪ねよう（金〜日・祝10:00〜16:00、無料）。寛政七年築の重厚な茅葺き主屋で水戸街道の歴史を辿りたい。',
      surprise:
        '水戸街道に残るわずか三棟の本陣の中でも特に古く規模の大きい主屋と表門が、市街地の中に堂々と守られていることに驚かされる。上段の間の荘厳な設えや裏山の斉昭公歌碑を眺めていると、かつて大名行列が行き交った宿場町の息遣いが蘇ってくる。',
      hook: '本陣を後にしたら、南南東へ徒歩3分の取手八坂神社へお参りしよう。',
      f7_fragment: '寛政七年築の茅葺屋根を今に伝える、水戸街道・取手宿の本陣遺構。',
      f7_full: '茨城県有形文化財「旧取手宿本陣染野家住宅」で茅葺屋根の主屋を見学し、水戸街道の往時の歴史に深く触れた。',
      image_prompt:
        'Historic Edo-period Japanese honjin inn of Someno House with thick thatched roof, wooden gate and quiet courtyard garden, no text, no people.',
    },
    {
      name: '取手八坂神社',
      spot_type: '見どころ',
      description:
        '江戸時代初期の寛永年間から取手の総鎮守として崇敬される古社。明治期に再建された社殿には精巧で躍動感あふれる彫刻が施されている。参拝自由（社務所9:00〜16:30・年中無休）。',
      address: '茨城県取手市東1-2-9',
      prefecture: '茨城県',
      municipality: '取手市',
      lat: 35.889831,
      lng: 140.066294,
      clue: '旧本陣から南南東へ徒歩3分、取手総鎮守として地域を見守り続ける「取手八坂神社」へ足を運ぼう（社務所9:00〜16:30・無休）。江戸時代初期に創建された由緒あるお宮で、明治期に再建された本殿や拝殿の全面を彩る立体的な木彫の美しさはまさに圧巻だ。夏の例大祭の荒みこしでも知られる勇壮な社に静かに手を合わせ、利根川の恵みとともに歩んできた取手の人々の祈りに深く思いを馳せたい。',
      surprise:
        '鳥居をくぐって拝殿に近づくにつれ、屋根の下や壁面にびっしりと彫り込まれた龍や霊鳥などの細やかな彫刻の迫力に思わず見入ってしまう。静かな境内に立ち尽くしていると、時代を超えて受け継がれてきた土地の気概と職人の魂が胸に迫ってくる。',
      hook: 'お参りを終えたら、北北東へ徒歩19分のAtelier + café ju-touで旅を結ぼう。',
      f7_fragment: '精巧な彫刻が社殿を彩る、江戸初期創建の取手総鎮守・八坂神社。',
      f7_full: '取手総鎮守「取手八坂神社」の精巧な木彫が美しい社殿に参拝し、利根川畔の宿場町に息づく祈りの歴史に触れた。',
      image_prompt:
        'Historic Toride Yasaka Shrine wooden sanctuary showing intricate traditional wood carvings under sweeping eaves and stone lanterns, no text, no people.',
    },
    {
      name: 'Atelier + café ju-tou',
      spot_type: '休憩',
      description:
        '元・産婦人科医院のビル3階にあるアトリエ併設の隠れ家カフェ。動物性食材を使わない優しい菓子やオーガニック珈琲が楽しめる。営業時間12:00〜17:00、月数日の不定期営業・予約制中心（営業日要確認）。',
      address: '茨城県取手市井野1-7-10',
      prefecture: '茨城県',
      municipality: '取手市',
      lat: 35.899588,
      lng: 140.070423,
      clue: '八坂神社から北北東へ徒歩19分、元医院のビル三階にひっそりと佇む隠れ家「Atelier + café ju-tou」で旅を締めくくろう（12:00〜17:00、不定期営業・要確認）。アンティーク家具とアート作品が調和する心地よい空間で、米粉のケーキなど体に優しい手作り菓子と香り高い珈琲を味わえる。街道の歴史を巡った取手の旅の終わりに、柔らかな光の中で心ほどけるひとときを過ごしたい。',
      surprise:
        'レトロな建物の階段を上った先に、まるで秘密のアトリエのようなセンスあふれる癒やしの空間が広がっているのが嬉しい。素材にこだわった優しい甘さのスイーツと静かな時間に包まれながら、取手という街が持つアートと日常の奥深さを改めて実感する。',
      hook: '',
      f7_fragment: '元医院の三階に広がるアンティークと手作り菓子の隠れ家アトリエカフェ。',
      f7_full: '隠れ家「Atelier + café ju-tou」で優しい珈琲と菓子を味わい、水戸街道の歴史とアートが息づく取手の旅を結んだ。',
      image_prompt:
        'Serene Japanese third-floor atelier cafe interior with vintage wooden table, handmade rice-flour cake, organic coffee cup and dried flowers in soft window light, no text, no people.',
    },
  ],
};
