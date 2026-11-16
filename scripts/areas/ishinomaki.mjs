export default {
  slug: 'ishinomaki',
  station_order: 595,
  station: '石巻駅',
  line: 'JR仙石線・石巻線',
  area_name: '石巻・旧北上川の港町と復興の街',
  prefecture: '宮城県',
  municipality: '石巻市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['宮城県', '石巻市', '石巻駅', '旧観慶丸商店', '海鮮'],
  style_genre: 'pictorial_isometric_map',
  title: '旧北上川の潮風と復興の街・石巻を歩く',
  description:
    'かつて仙台藩の米の積出港として栄え、近代以降は水産業と文化の拠点として歩んできた宮城県石巻市。駅近くの稲荷社から、新鮮な地魚が味わえる食事処、蘇った老舗喫茶、戦前の百貨店建築、そして川沿いの市場まで、港町の誇りと再生の息づかいを辿る。',
  eyecatch_prompt:
    'Elevated isometric pictorial travel map illustration of Ishinomaki port town along the Old Kitakami River in Miyagi, featuring the white-tiled retro facade of Former Kankeimaru store, riverside market stalls, harbor boats, and green hills on natural textured cream paper, no text, no people.',
  question:
    '港町の歴史と再生の歩みが重なり合う石巻で、あなたが最初に誰かへ伝えたいのはどの場面ですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '駅前の街なかに鎮座する「豊川稲荷」の静かな境内で、旅の無事を祈った瞬間',
      subtext:
        '賑やかな商店街のすぐ傍らに、地域の商売繁盛を見守り続けてきた信仰の場があることに安らぎを覚えた。',
      badge: {
        code: 'ishinomaki_toyokawa_inari',
        name_ja: '石巻・豊川稲荷の参拝者',
        subtitle_en: 'Visitor of Ishinomaki Toyokawa Inari',
        description:
          '豊川稲荷を訪ね、石巻の街なかで商人の祈りを見守ってきた静かな境内に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting vermilion torii gates and stone fox guardian statues framed by green pine branches, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 4,
      text: '石巻初の百貨店として建てられた「旧観慶丸商店」のタイル張り外観を見上げた瞬間',
      subtext:
        '震災を乗り越えて修復された往時の洋風建築に、かつて「北上川河口の大商港」と謳われた石巻の誇りを見た。',
      badge: {
        code: 'ishinomaki_kankeimaru',
        name_ja: '旧観慶丸商店・港町の記憶を継ぐ者',
        subtitle_en: 'Keeper of Former Kankeimaru',
        description:
          '石巻市指定有形文化財の旧観慶丸商店を訪ね、戦前の百貨店建築と復興の歩みに触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a classic early-Showa Western-style tiled corner building with arched windows and ornate parapet, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '「食事処 海船」で、石巻港に揚がった新鮮な魚介の定食を味わった瞬間',
      subtext:
        '金華山沖の豊かな漁場に恵まれた港町ならではの鮮度と、大将の丁寧な仕事に心が満たされた。',
      badge: {
        code: 'ishinomaki_umifune',
        name_ja: '石巻港・旬の浜料理を味わいし者',
        subtitle_en: 'Taster of Ishinomaki Port Cuisine',
        description:
          '食事処 海船を訪ね、世界三大漁場に近い石巻ならではの新鮮な魚介料理を堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a Japanese lacquer tray with sliced fresh sashimi fish, rice bowl, and miso soup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '旧北上川沿いの「いしのまき元気いちば」で、三陸の海の幸を手に入れた瞬間',
      subtext:
        '復興の象徴として賑わう市場の活気と、川面を渡る爽やかな潮風に石巻の明るい未来を感じた。',
      badge: {
        code: 'ishinomaki_genki_ichiba',
        name_ja: '石巻・元気いちばの旅人',
        subtitle_en: 'Traveler of Ishinomaki Genki Market',
        description:
          'いしのまき元気いちばを訪ね、三陸の豊かな海産物と復興の賑わいに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting wooden harbor market crates filled with fresh coastal seafood and dried kelp beside a riverfront promenade, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'ishinomaki_complete',
    name_ja: '石巻・旧北上川と港の物語を歩みし者',
    subtitle_en: 'Walker of Ishinomaki Port Heritage',
    description:
      '豊川稲荷から食事処 海船、加非館、旧観慶丸商店、いしのまき元気いちばまでを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a tiled retro merchant building, a port fish market silhouette, and calm river waves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '豊川稲荷',
      spot_type: '見どころ',
      description:
        '石巻駅南側の立町商店街近くに鎮座する寺院。商売繁盛や家内安全の信仰を集め、街なかに静かな祈りの空間を保つ。境内参拝自由。',
      address: '宮城県石巻市立町2-7',
      prefecture: '宮城県',
      city: '石巻市',
      lat: 38.433292,
      lng: 141.304993,
      clue: '石巻駅を出て南へ歩くと、立町の商店街のすぐ傍らに朱の気配を漂わせる「豊川稲荷」に着く（境内参拝自由）。古くから北上川の水運と漁業で栄えた石巻において、町衆や商人たちが商売繁盛と航海の無事を祈り続けてきた街なかの信仰拠点だ。駅前の賑わいから一歩入った静かな境内で、木立を抜ける潮風の音と鳥居の佇まいにゆっくりと心を澄ませながら、最初のしるしをここで丁寧に力強く刻み出そう。',
      surprise:
        '石巻は江戸時代に伊達政宗公が川村孫兵衛に命じて北上川の流れを改修させたことで、奥州一の米の積出港として飛躍的に発展した歴史を持つ。街なかに点在する社寺や石碑の数々は、かつての廻船問屋の繁栄と人々の篤い信仰を今も静かに未来へと伝え続けている。',
      hook: '豊川稲荷を後にしたら、南南東へ徒歩6分の食事処 海船へ向かおう。',
      f7_fragment: '商店街の傍らに佇む朱の鳥居と、港町の商いを守り続ける静かな境内。',
      f7_full: '石巻駅近くの立町にある豊川稲荷を訪ね、北上川の水運と漁業で栄えた港町の静かな信仰と祈りの歴史にじっくり深く触れた。',
      image_prompt:
        'Wide morning view of a quiet urban Japanese Buddhist shrine courtyard in Ishinomaki with vermilion torii gates and stone lanterns shaded by green trees, no text, no people.',
    },
    {
      name: '食事処 海船',
      spot_type: '食事',
      description:
        '石巻中央の老舗魚介料理店。地元の新鮮な刺身や浜料理の定食、鯨の竜田揚げなどが味わえる。営業時間11:00〜14:00・17:00〜22:00（土曜は夜のみ）、日曜定休。',
      address: '宮城県石巻市中央2-1-23',
      prefecture: '宮城県',
      city: '石巻市',
      lat: 38.430439,
      lng: 141.307027,
      clue: '豊川稲荷から南南東へ徒歩6分、中央の「食事処 海船」で昼食にしよう（11:00〜14:00・17:00〜22:00、土曜は夜のみ・日曜定休）。石巻港の浜料理を味わい、ひと息つこう。',
      surprise:
        '黒潮と親潮がぶつかる金華山沖を控えた石巻港は、年間を通じて多種多様な魚介が水揚げされる日本有数の漁港だ。店内のいけすから引き揚げたばかりの新鮮な魚や伝統の鯨料理の一皿一皿に、三陸の海の豊かな恵みと長年磨かれた料理人の確かな技が見事に凝縮される。',
      hook: '海船で海の幸を味わったら、東北東へ徒歩1分の加非館で珈琲を一服しよう。',
      f7_fragment: '港町ならではの鮮魚が並ぶ定食と、大将の包丁が光る浜の味わい。',
      f7_full: '石巻中央の「食事処 海船」を訪ね、世界三大漁場・金華山沖の豊かな恵みと職人技が光る旬の昼食を心から存分に楽しんだ。',
      image_prompt:
        'Medium-wide interior view of a warm wooden Japanese seafood diner counter with a fresh sashimi set meal, grilled fish, and miso soup under soft window light, no text, no people.',
    },
    {
      name: '加非館',
      spot_type: '休憩',
      description:
        '石巻市民に長年愛され、一度の閉店を経て新オーナーのもとで復活を遂げた老舗喫茶店。香り高い珈琲とホットケーキが人気。営業時間10:00〜17:00、火・水曜定休。',
      address: '宮城県石巻市中央2-2-13',
      prefecture: '宮城県',
      city: '石巻市',
      lat: 38.430653,
      lng: 141.307833,
      clue: '海船から東北東へ徒歩1分、ビルの二階に温かい灯りを灯す喫茶店「加非館（かひかん）」へ足を運ぼう（10:00〜17:00、火・水曜定休）。往時の面影を残す落ち着いた店内では、丁寧に淹れられた珈琲とふっくら焼き上げたホットケーキが旅人を優しく迎えてくれる。一度は幕を閉じながらも市民の熱い想いを受けて新たに息を吹き返した街の喫茶室で、穏やかな午後のひとときをゆっくり過ごそう。',
      surprise:
        '長年石巻の街角を見守り続けた名物喫茶が閉店の危機を迎えた際、その文化を絶やすまいと立ち上がった新たな店主によって見事に受け継がれたという。レトロなカップや店内の調度品とともに、街の人々が大切にしてきた記憶と温もりが今も変わらず大切に息づく。',
      hook: '加非館で寛いだら、北東へ徒歩3分の旧観慶丸商店を訪ねよう。',
      f7_fragment: '老舗の記憶を受け継ぐ珈琲の香りと、焼き立てホットケーキの甘み。',
      f7_full: '市民の熱い想いで復活を遂げた老舗喫茶「加非館」で香り高い珈琲と甘味を味わい、石巻の温かな日常の空気に優しく触れた。',
      image_prompt:
        'Top-down flatlay detail of a classic dark ceramic coffee cup filled with rich black coffee, a golden baked thick pancake with butter pat on a wooden cafe table, no text, no people.',
    },
    {
      name: '旧観慶丸商店',
      spot_type: '見どころ',
      description:
        '昭和初期に石巻初の百貨店として建てられた石巻市指定有形文化財。白いタイル張りの洋風建築が復興の象徴として保存・公開されている。開館9:00〜17:00、火曜休。',
      address: '宮城県石巻市中央3-6-9',
      prefecture: '宮城県',
      city: '石巻市',
      lat: 38.43209,
      lng: 141.309422,
      clue: '加非館から北東へ徒歩3分、角地に堂々と佇む白い洋風建築「旧観慶丸商店」を訪ねよう（9:00〜17:00、火曜休）。かつて石巻で最初の百貨店として建てられたこの建物は、「東洋一の陶磁器店」とも称された豪商の気概を伝える石巻市指定有形文化財だ。細やかなタイル装飾とアーチ窓が織りなす気品あるファサードをゆっくりと見上げながら、往時の港町の繁栄にここでじっくり思いをはせてみよう。',
      surprise:
        '東日本大震災の津波による浸水被害を受けながらも堅牢な鉄筋コンクリート構造が倒壊を免れ、その後、丁寧な修復工事を経て石巻の文化発信拠点として見事に蘇った。港町の過去と未来を繋ぐ希望のランドマークとして、今も多くの市民や旅人に親しまれ愛され続ける。',
      hook: '旧観慶丸商店を見学したら、南へ徒歩4分のいしのまき元気いちばでお土産を選ぼう。',
      f7_fragment: '白いタイルとアーチ窓が映える往時の百貨店、復興を見守る洋風建築。',
      f7_full: '石巻市指定有形文化財の旧観慶丸商店を仰ぎ、震災の困難を越えて蘇った港町の気品ある建築美と確かな誇りを胸に刻んだ。',
      image_prompt:
        'Low-angle architectural view of a historic early-Showa white-tiled Western corner building with arched windows and ornate roofline against a clear afternoon sky, no text, no people.',
    },
    {
      name: 'いしのまき元気いちば',
      spot_type: '買い物',
      description:
        '旧北上川のほとりに建つ石巻の食と物産の拠点。三陸の新鮮な魚介や水産加工品、地酒、銘菓などが豊富に揃う。営業時間9:00〜19:00、年中無休。',
      address: '宮城県石巻市中央2-11-11',
      prefecture: '宮城県',
      city: '石巻市',
      lat: 38.430105,
      lng: 141.30937,
      clue: '旧観慶丸商店から南へ徒歩4分、旧北上川の開放的な川辺に建つ「いしのまき元気いちば」へ足を運ぼう（9:00〜19:00、年中無休）。広々とした一階の物産フロアには、石巻漁港で水揚げされた魚介の干物や名物の笹かまぼこ、地酒や三陸の銘菓まで地元の豊かな味覚が所狭しと並ぶ。川面を渡る爽やかな潮風と市場の活気を全身に感じながら、石巻ならではの海の恵みを旅の土産に選び取って旅を締めくくろう。',
      surprise:
        '東日本大震災からの復興のシンボルとして、旧北上川沿いの堤防整備と一体となって造られた賑わい拠点だ。かつて東北各地から舟運の荷が運び込まれた歴史ある川岸に、再び人々の明るい笑顔と港町ならではの活気ある暮らしが街全体に力強く戻ってきたと伝わる。',
      hook: '',
      f7_fragment: '旧北上川沿いに広がる賑わいの市場と、三陸の海の幸が並ぶ充実の棚。',
      f7_full: '旧北上川のほとりに建つ「いしのまき元気いちば」で三陸の土産を手に取り、力強く再生する港町・石巻の旅を締めくくった。',
      image_prompt:
        'Golden-hour riverside view of a lively wooden harbor market building beside the calm Old Kitakami River with warm interior lights glowing and fishing boats moored nearby, no text, no people.',
    },
  ],
};
