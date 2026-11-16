export default {
  slug: 'shinshirakawa',
  station_order: 636,
  station: '新白河',
  line: '東北新幹線・JR東北本線',
  area_name: '新白河・手打ラーメンと銘菓の玄関口',
  prefecture: '福島県',
  municipality: '白河市・西郷村',
  category: 'グルメと歴史',
  budget_tier: 2,
  tags: ['福島県', '西郷村', '白河市', '新白河駅', '白河ラーメン'],
  style_genre: 'editorial_ligne_claire',
  title: '新白河・名物手打ラーメンとだるま菓子の街を歩く',
  description:
    'みちのくの玄関口・JR新白河駅から、駅前の落ち着いた喫茶店「ティールーム高山」と開墾の歴史を伝える「大山祇神社」、王道の「白河手打ラーメン かづ枝食堂」、明治40年創業の老舗「白河菓匠 大黒屋 新白河店」、手作り洋食の「Coffee House らたん」を巡る散策路。',
  eyecatch_prompt:
    'Editorial ligne claire illustration of Shin-Shirakawa town in Fukushima showing a cozy station-front tea room, quiet forested Shinto shrine, traditional Shirakawa hand-pulled ramen shop, historic daruma wagashi sweet shop and warm neighborhood coffee house, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: 'みちのくの玄関口で王道の白河ラーメンとだるま銘菓が繋がる新白河を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「ティールーム高山」の落ち着いた店内で、旅の始まりに穏やかな紅茶や珈琲を味わった瞬間',
      subtext:
        '新白河駅東口すぐの温かい喫茶空間と併設ショップの雑貨が、みちのく旅の心を和ませた。',
      badge: {
        code: 'shinshirakawa_takayama',
        name_ja: '新白河駅前・高山に寛ぎし者',
        subtitle_en: 'Guest of Tearoom Takayama',
        description:
          'ティールーム高山を訪ね、新白河駅前の落ち着いた喫茶空間で穏やかなひとときを過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a warm porcelain teacup and saucer beside classic Japanese cafe toast on a wooden table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「白河手打ラーメン かづ枝食堂」で、手打ちちぢれ麺と澄んだ醤油スープを啜った瞬間',
      subtext:
        '新白河駅近くで味わう王道の白河ラーメンの優しいコクが、旅人の身体を芯から温めた。',
      badge: {
        code: 'shinshirakawa_kadue',
        name_ja: '新白河・白河手打ラーメンを味わいし者',
        subtitle_en: 'Taster of Shirakawa Ramen',
        description:
          '白河手打ラーメン かづ枝食堂を訪ね、伝統の醤油スープと手打ちちぢれ麺を堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring a classic ceramic bowl of clear amber Shirakawa soy-sauce ramen with curly hand-pulled noodles, roast pork and green spinach, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「白河菓匠 大黒屋 新白河店」で、愛らしい白河だるま最中や老舗の銘菓を選んだ瞬間',
      subtext:
        '明治四十年創業の老舗が守り続ける縁起の良いだるま菓子が、福島の温かな手土産になった。',
      badge: {
        code: 'shinshirakawa_daikokuya',
        name_ja: '白河菓匠・だるま最中を買いし者',
        subtitle_en: 'Collector of Daruma Sweets',
        description:
          '白河菓匠 大黒屋 新白河店を訪ね、白河だるまにちなんだ明治創業の老舗銘菓を手にした証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing traditional Japanese daruma-shaped crisp monaka wafers filled with sweet red bean paste, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「Coffee House らたん」のアットホームな店内で、名物の煮込みスパゲティを味わった瞬間',
      subtext:
        '新白河の住宅街で長く親しまれる洋食喫茶の優しい味が、駅周辺の散策を豊かに結んだ。',
      badge: {
        code: 'shinshirakawa_ratan',
        name_ja: '新白河・喫茶らたんの洋食を嗜みし者',
        subtitle_en: 'Patron of Coffee House Ratan',
        description:
          'Coffee House らたんを訪ね、地元で愛される手作り洋食と珈琲の温もりに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a hearty Japanese cafe plate of simmering tomato spaghetti and a warm glass siphon coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'shinshirakawa_complete',
    name_ja: '新白河・手打ラーメンとだるま菓子の街を巡る旅人',
    subtitle_en: 'Walker of Shin-Shirakawa',
    description:
      'ティールーム高山から大山祇神社、かづ枝食堂、大黒屋 新白河店、Coffee House らたんまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a bowl of Shirakawa hand-pulled ramen, a red daruma monaka sweet and a classic coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'ティールーム高山',
      spot_type: '休憩',
      description:
        'JR新白河駅東口すぐそばに構える落ち着いた雰囲気の喫茶店。セレクトショップも併設し、香り高い珈琲や紅茶でゆっくり過ごせる。営業時間10:00〜17:00（L.O.16:30）、月曜定休。',
      address: '福島県西白河郡西郷村前山東13',
      prefecture: '福島県',
      municipality: '西郷村',
      lat: 37.121497,
      lng: 140.188482,
      clue: '東北新幹線が停まるJR新白河駅の東口を出たら、まずは駅からほど近い「ティールーム高山」で旅の序章を開こう（10:00〜17:00、月曜休）。木と光が調和する落ち着いた喫茶空間で、丁寧に淹れられた紅茶や香り高い珈琲を味わいながら新白河の街歩きに思いを馳せられる。セレクト雑貨も並ぶ温かな店内でゆっくり一息つき、白河ラーメンや開墾の歴史を巡る心地よい徒歩旅を軽やかに始めたい。',
      surprise:
        '新幹線の駅からすぐの場所にありながら、旅の慌ただしさを忘れさせてくれる穏やかな空気が流れているのが嬉しい。併設されたショップの丁寧な品選びにも店主のセンスが感じられ、福島の玄関口でほっと肩の力を抜ける素敵な一軒だ。',
      hook: 'お茶で寛いだら、南南東へ徒歩6分の新白河駅東口側・大山祇神社へお参りしよう。',
      f7_fragment: '新白河駅東口そばで旅人を迎える、雑貨も楽しい落ち着いた喫茶店。',
      f7_full: '駅東口近くの「ティールーム高山」で穏やかな紅茶の時間を過ごし、みちのくの玄関口・新白河の散策を心地よく始めた。',
      image_prompt:
        'Calm Japanese station-front tearoom interior with wooden tables, warm pendant lights, ceramic teapot and curated craft goods shelf, no text, no people.',
    },
    {
      name: '大山祇神社（新白河）',
      spot_type: '見どころ',
      description:
        '新白河駅の東口側に鎮座し、江戸時代後期の文化年間に越後からの移住者が開墾の守護として祀ったのが始まりと伝えられるお社。地域の静かな歴史を見守っている。参拝自由。',
      address: '福島県白河市新白河4-81',
      prefecture: '福島県',
      municipality: '白河市',
      lat: 37.118399,
      lng: 140.190066,
      clue: 'ティールーム高山から駅東口側の通りを進み、南南東へ徒歩6分の住宅街に鎮座する「大山祇神社」へ立ち寄ろう（参拝自由）。江戸時代後期の文化年間に、越後からこの地へ移住して新田開発に挑んだ先人たちが開墾の守護神として祀ったのが始まりと伝えられる歴史あるお社だ。近代的な新幹線駅のすぐそばに今も息づく開拓の記憶に静かに手を合わせ、この土地に根付く深い歴史をこれからも胸に刻みたい。',
      surprise:
        '新幹線が発着する新しい街並みのように見える新白河駅のすぐそばに、江戸時代の開墾の歴史を今に伝える静かな鎮守の社が残されていることに驚かされる。木立に包まれた素朴な鳥居と拝殿が、この土地を拓いた先人たちの静かな誇りを伝えている。',
      hook: '参拝を終えたら、北北西へ徒歩10分の白河手打ラーメン かづ枝食堂で昼食にしよう。',
      f7_fragment: '江戸後期の開墾の歴史を伝える、新白河駅そばの静かな鎮守の社。',
      f7_full: '駅東口側の「大山祇神社」に参拝し、新幹線の玄関口のそばに息づく江戸時代の開墾の歴史に静かに触れた。',
      image_prompt:
        'Quiet neighborhood Japanese Shinto shrine of Oyamazumi Jinja with weathered stone torii gate, cedar trees and modest wooden sanctuary, no text, no people.',
    },
    {
      name: '白河手打ラーメン かづ枝食堂',
      spot_type: '食事',
      description:
        '新白河駅から歩いてすぐの場所にある王道の白河ラーメン人気店。澄んだ醤油スープとコシのある手打ちちぢれ麺、香ばしい焼豚が親しまれる。11:00〜14:00・16:30〜19:30頃、月曜休。',
      address: '福島県西白河郡西郷村字道南西89',
      prefecture: '福島県',
      municipality: '西郷村',
      lat: 37.12376,
      lng: 140.187553,
      clue: '大山祇神社から北北西へ徒歩10分、「白河手打ラーメン かづ枝食堂」へ入ろう（11:00〜14:00・16:30〜19:30頃、月曜休）。手打ちちぢれ麺の王道白河ラーメンを堪能したい。',
      surprise:
        '駅からすぐの好立地にありながら、観光向けではない昔ながらの食堂らしい気さくな雰囲気と本格的な白河ラーメンの味わいが守られている。すっきり澄んだ醤油スープがもちもちの手打ちちぢれ麺によく絡み、旅の昼食にこれ以上ない満足感を与えてくれる。',
      hook: 'ラーメンでお腹を満たしたら、北北西へ徒歩4分の白河菓匠 大黒屋 新白河店へ向かおう。',
      f7_fragment: '澄んだ醤油スープと手打ちちぢれ麺が自慢の、新白河駅そばの王道麺処。',
      f7_full: '「白河手打ラーメン かづ枝食堂」で手打ちちぢれ麺と醤油スープを堪能し、本場・白河のラーメン文化を満喫した。',
      image_prompt:
        'Authentic Shirakawa ramen ceramic bowl on wooden diner table with clear amber soy broth, curly hand-pulled noodles, pink-edged char siu pork and spinach, no text, no people.',
    },
    {
      name: '白河菓匠 大黒屋 新白河店',
      spot_type: '買い物',
      description:
        '明治40年（1907年）創業の白河を代表する老舗和菓子店。縁起の良い「白河だるま最中」や柔らかな「カフェオレ大福」、季節の和菓子が人気。営業時間9:00〜18:00、火曜・隔週水曜休。',
      address: '福島県西白河郡西郷村豊作東11',
      prefecture: '福島県',
      municipality: '西郷村',
      lat: 37.125789,
      lng: 140.18677,
      clue: 'かづ枝食堂から北北西へ徒歩4分、白河銘菓の老舗「白河菓匠 大黒屋 新白河店」へ立ち寄ろう（9:00〜18:00、火曜・隔週水曜休）。明治四十年創業の老舗が手がける人気店であり、白河のシンボルを愛らしくかたどった「白河だるま最中」をはじめ、和と洋が調和する「カフェオレ大福」や四季の生菓子が美しくずらりと並んでいる。縁起の良いお土産を選びながら、白河の粋な菓子文化にしっかり触れたい。',
      surprise:
        '伝統の和菓子の技を大切に守りつつ、カフェオレ大福のような遊び心ある創作スイーツも愛されているのが白河の老舗らしい柔軟さだ。ころんと愛らしいだるま最中を手に取ると、旅の思い出を誰かにお裾分けしたくなる優しい気持ちになる。',
      hook: 'お土産を選んだら、東南東へ徒歩13分のCoffee House らたんで旅を結ぼう。',
      f7_fragment: '明治四十年創業、愛らしい「白河だるま最中」が人気の老舗和菓子舗。',
      f7_full: '「白河菓匠 大黒屋 新白河店」で愛らしい白河だるま最中に出会い、明治創業の老舗が守る福島の菓子文化に触れた。',
      image_prompt:
        'Bright Japanese wagashi shop counter displaying daruma-shaped monaka wafers and neat boxes of traditional sweets, no text, no people.',
    },
    {
      name: 'Coffee House らたん',
      spot_type: '休憩',
      description:
        '新白河の街角で長く親しまれるアットホームな洋食喫茶店。こだわりの手作り煮込みスパゲティや香り高い珈琲が地元客に愛される。営業時間10:00〜19:00、日曜・祝日定休。',
      address: '福島県白河市新白河1-157',
      prefecture: '福島県',
      municipality: '白河市',
      lat: 37.123945,
      lng: 140.195277,
      clue: '大黒屋から東南東へ徒歩13分、新白河の街並みに溶け込む「Coffee House らたん」で散策を締めくくろう（10:00〜19:00、日・祝休）。地元で長く愛され続けてきた家庭的な洋食喫茶で、時間をかけてじっくり煮込んだスパゲティや香り豊かな珈琲、スイーツが訪れる人を優しく迎えてくれる。駅と史跡とグルメを巡った新白河の街歩きを振り返り、温かな喫茶店で心地よく旅を結びたい。',
      surprise:
        '初めて訪れてもどこか懐かしい気持ちにさせてくれるアットホームな店構えと、丁寧な手作りの温もりが感じられるメニューが魅力的だ。地域の常連客に交じってゆったりと珈琲を味わう時間が、新白河という街の暮らしの豊かさを静かに伝えてくれる。',
      hook: '',
      f7_fragment: '手作り煮込みスパゲティと珈琲で地元に愛される、新白河の温かい喫茶店。',
      f7_full: '「Coffee House らたん」でアットホームな喫茶の時間を過ごし、ラーメンとだるま菓子の街・新白河の散策を結んだ。',
      image_prompt:
        'Cozy Japanese neighborhood coffee house interior with warm wooden booths, steaming plate of simmering tomato spaghetti and porcelain coffee cup, no text, no people.',
    },
  ],
};
