export default {
  slug: 'osaka',
  station_order: 670,
  station: '大阪',
  line: 'JR京都線',
  area_name: '大阪・中之島の近代建築と大阪城',
  prefecture: '大阪府',
  municipality: '大阪市',
  category: '歴史と街歩き',
  budget_tier: 3,
  tags: ['大阪府', '大阪市', '大阪駅', '中之島', '大阪城'],
  style_genre: 'editorial_clean_ink',
  title: '大阪・純喫茶から中之島と大阪城の天守へ',
  description:
    'JR大阪駅から、手焼きホットケーキで愛される老舗「喫茶サンシャイン」、学問の神様「大阪天満宮」、水辺の緑豊かな「中之島公園」、国の重要文化財「大阪市中央公会堂」、豊臣の石垣と天守がそびえる「大阪城」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Osaka City showing the grand white-and-gold Osaka Castle keep rising above massive stone walls and moat, the red-brick Neo-Renaissance Osaka City Central Public Hall beside the Dojima River, lush green rose garden paths of Nakanoshima Park, and a warm Showa kissaten coffee cup with thick pancakes, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '昭和香る純喫茶の一皿と水辺の中之島、天下の名城・大阪城を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「喫茶サンシャイン」で、香り高い珈琲と名物の手焼きホットケーキを味わった瞬間',
      subtext:
        '昭和48年創業の老舗純喫茶が届ける温かな一皿に、大阪の元気な朝の始まりを感じた。',
      badge: {
        code: 'osaka_sunshine',
        name_ja: '大阪・純喫茶の名物ホットケーキを味わいし者',
        subtitle_en: 'Guest of Kissa Sunshine',
        description:
          '喫茶サンシャインを訪ね、昭和48年創業の老舗純喫茶で手焼きホットケーキを味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting golden thick hand-baked pancakes topped with melting butter and syrup beside a classic coffee cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「大阪天満宮」の堂々たる門をくぐり、天神さんとして親しまれる境内へ参拝した瞬間',
      subtext:
        '商都大阪の人々から千年近く敬われてきた社の活気と静けさが、街歩きの背筋を伸ばしてくれた。',
      badge: {
        code: 'osaka_tenmangu',
        name_ja: '大阪・天神さんの社に参拝せし者',
        subtitle_en: 'Worshipper at Osaka Tenmangu',
        description:
          '大阪天満宮を訪ね、学問の神様・菅原道真公を祀る浪速の古社に参拝した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an ornate carved wooden shrine gate framed by blooming plum blossoms, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「大阪市中央公会堂」の赤煉瓦と青銅のドームが水面に映える姿を見上げた瞬間',
      subtext:
        '大正時代の市民の志によって建てられたネオ・ルネサンス様式の美しさに、中之島の品格を見た。',
      badge: {
        code: 'osaka_kokaido',
        name_ja: '大阪・中之島の赤煉瓦建築を仰ぎ見し者',
        subtitle_en: 'Visitor of Osaka City Central Public Hall',
        description:
          '大阪市中央公会堂を訪ね、国の重要文化財である中之島の赤煉瓦建築を仰ぎ見た証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the red-brick Neo-Renaissance facade and arched gable of Osaka City Central Public Hall beside calm river water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「大阪城」の巨大な石垣を越えて本丸に立ち、金色に輝く天守閣を見上げた瞬間',
      subtext:
        '幾多の歴史を見届けてきた城郭の圧倒的なスケールに、浪速の都の底力を実感した。',
      badge: {
        code: 'osaka_castle',
        name_ja: '大阪・天下の名城を仰ぎ見し者',
        subtitle_en: 'Visitor of Osaka Castle',
        description:
          '大阪城を訪ね、壮大な石垣と天守閣から大阪の歴史と街並みを望んだ証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the white-walled Osaka Castle keep adorned with golden roof tigers rising above massive stone walls and cherry blossoms, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'osaka_complete',
    name_ja: '大阪・中之島と名城を巡る旅人',
    subtitle_en: 'Walker of Osaka',
    description:
      '喫茶サンシャインから大阪天満宮、中之島公園、大阪市中央公会堂、大阪城までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the Osaka Castle keep, the red-brick Central Public Hall, and golden pancakes, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '喫茶サンシャイン',
      spot_type: '休憩',
      description:
        '1973年創業、大阪駅前第3ビル地下2階へ移転し営業を続ける老舗純喫茶。自家焙煎珈琲と注文後に焼き上げる名物ホットケーキが人気。平日7:30〜19:45・土日祝8:00〜18:30、不定休。',
      address: '大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル B2F',
      prefecture: '大阪府',
      municipality: '大阪市',
      lat: 34.699138,
      lng: 135.499839,
      clue: '昭和48年創業、梅田のビジネス街で長年愛されてきた老舗純喫茶「喫茶サンシャイン」から大阪の旅を始めよう（平日7:30〜19:45・土日祝8:00〜18:30）。大阪駅前第3ビル地下2階へ移転した今も、自家焙煎珈琲や注文ごとに焼き上げるふんわり厚切りの手焼きホットケーキは変わらぬ人気だ。温かな一皿で朝の活力をたっぷりと満たし、水都大阪の街歩きへこれからも元気に踏み出したい。',
      surprise:
        'ビル建て替えに伴い旧店舗から移転しましたが、創業以来のこだわりのレシピと純喫茶らしい温かなもてなしはそのまま受け継がれています。',
      hook: '純喫茶の味で満たされたら、東南東へ歩いて浪速の古社・大阪天満宮へ向かおう。',
      f7_fragment: '1973年創業の老舗純喫茶、自家焙煎珈琲と手焼きホットケーキが名物。',
      f7_full:
        '「喫茶サンシャイン」で香り高い珈琲と名物の手焼きホットケーキを味わい、旅を始めた。',
      image_prompt:
        'Warm nostalgic Showa kissaten cafe illustration of Kissa Sunshine in Osaka, retro leather booth, steaming coffee cup and thick golden hand-baked pancakes with butter and syrup, no text, no letters.',
    },
    {
      name: '大阪天満宮',
      spot_type: '見どころ',
      description:
        '天暦3年（949年）創建、学問の神様・菅原道真公を祀り「天満の天神さん」として親しまれる古社。日本三大祭のひとつ天神祭の舞台。5:30〜18:30頃（季節変動あり）、参拝無料。',
      address: '大阪府大阪市北区天神橋2-1-8',
      prefecture: '大阪府',
      municipality: '大阪市',
      lat: 34.696058,
      lng: 135.512656,
      clue: '平安時代の天暦3年に創建され、「天満の天神さん」として大阪市民に親しまれる「大阪天満宮」へ参拝しよう（5:30〜18:30頃・参拝無料）。学問の神様・菅原道真公を祀り、日本三大祭のひとつ「天神祭」の舞台としても全国に広く知られる古社だ。表大門の天井に掲げられた十二支の方位盤をゆっくりと仰ぎ見ながら、千年以上続く浪速の信仰と商人の街の活気をこれからも身近に深く感じたい。',
      surprise:
        '隣接する日本一長いアーケード「天神橋筋商店街」は大阪天満宮の門前町として発展し、参拝帰りの人々で今も賑わっています。',
      hook: '天神さんへ参拝したら、南西へ歩いて水辺のオアシス・中之島公園へ向かおう。',
      f7_fragment: '「天満の天神さん」として親しまれる古社、日本三大祭・天神祭の舞台。',
      f7_full:
        '「大阪天満宮」の門をくぐって参拝し、千年近く敬われてきた浪速の信仰に触れた。',
      image_prompt:
        'Dignified Japanese shrine illustration of Osaka Tenmangu, ornate wooden gate and tiled shrine hall framed by green trees and plum branches, soft morning daylight, no text, no letters.',
    },
    {
      name: '中之島公園',
      spot_type: '見どころ',
      description:
        '明治24年（1891年）に大阪市で初めて誕生した都市公園。堂島川と土佐堀川に挟まれた緑豊かな水辺空間で、春・秋のバラ園が名高い。常時開放、無料。',
      address: '大阪府大阪市北区中之島1-1',
      prefecture: '大阪府',
      municipality: '大阪市',
      lat: 34.692982,
      lng: 135.505917,
      clue: '堂島川と土佐堀川に挟まれた大阪最古の都市公園「中之島公園」を歩こう（常時開放・無料）。水辺の緑と四季の花々に囲まれ、水都大阪の爽やかな川風を味わいたい。',
      surprise:
        '公園東側のバラ園には約310品種・3,700株ものバラが植えられており、5月と10月の見頃には華やかな香りに包まれます。',
      hook: '水辺の緑を歩いたら、西へすぐの大阪市中央公会堂の赤煉瓦建築を仰ごう。',
      f7_fragment: '堂島川と土佐堀川に挟まれた大阪初の公園、バラ園と水辺の緑が魅力。',
      f7_full:
        '「中之島公園」の川辺の並木道を歩き、水都大阪ならではの爽やかな川風を感じた。',
      image_prompt:
        'Scenic urban riverfront park illustration of Nakanoshima Park in Osaka, lush green lawns and blooming rose gardens flanked by calm river water and classic stone bridges, clear daylight, no text, no letters.',
    },
    {
      name: '大阪市中央公会堂',
      spot_type: '見どころ',
      description:
        '大正7年（1918年）に市民・岩本栄之助氏の寄付により完成した国の重要文化財。赤煉瓦と花崗岩のネオ・ルネサンス様式が中之島の風景を彩る。9:30〜21:30、第4火曜休、展示室無料。',
      address: '大阪府大阪市北区中之島1-1-27',
      prefecture: '大阪府',
      municipality: '大阪市',
      lat: 34.693548,
      lng: 135.503912,
      clue: '大正7年に市民の篤志によって建てられ、国の重要文化財に指定されている「大阪市中央公会堂」を訪ねよう（9:30〜21:30・第4火曜休、展示室無料）。赤煉瓦と白い花崗岩が織りなすネオ・ルネサンス様式の外観と青銅のドームは、水都・中之島のシンボルとして街を美しく彩り続けている。地下の展示室や自由見学エリアを巡りながら、大阪の近代文化が育んだ気品をこれからも深く仰ぎ見たい。',
      surprise:
        '建設資金百万円を寄付した相場師・岩本栄之助氏は完成を見ることなく亡くなりましたが、その志は今も大阪の象徴として生き続けています。',
      hook: '中之島の建築美を堪能したら、南東へ歩いて大阪城の天守で旅を結ぼう。',
      f7_fragment: '大正7年完成の国の重要文化財、赤煉瓦と青銅のドームが中之島に映える。',
      f7_full:
        '「大阪市中央公会堂」の赤煉瓦とネオ・ルネサンス様式の外観を仰ぎ、中之島の品格に触れた。',
      image_prompt:
        'Architectural illustration of Osaka City Central Public Hall, grand red-brick and white granite Neo-Renaissance facade with green copper dome beside calm Nakanoshima riverfront, warm afternoon light, no text, no letters.',
    },
    {
      name: '大阪城',
      spot_type: '見どころ',
      description:
        '豊臣秀吉が築き、徳川幕府により再建された天下の名城。大天守や「大阪城 豊臣石垣館」で歴史を体感できる。9:00〜18:00（最終入館17:30）、12/28〜1/1休、大人1200円（中学生以下無料）。',
      address: '大阪府大阪市中央区大阪城1-1',
      prefecture: '大阪府',
      municipality: '大阪市',
      lat: 34.685214,
      lng: 135.525754,
      clue: '豊臣秀吉が築き、のちに徳川幕府の手で巨石を積んだ壮大な城郭へと再建された「大阪城」で旅を締めくくろう（9:00〜18:00・最終入館17:30、大人1200円）。天守閣の展望台からは大阪平野を一望でき、公開中の豊臣石垣館とともに幾重にも重なる城の深い歴史を体感できる。水堀と桜や木々に彩られた本丸の堂々たる姿をじっくりと仰ぎ見ながら、浪速の旅をこれからも誇らしく美しく結びたい。',
      surprise:
        '2025年春に公開された「大阪城 豊臣石垣館」では、地中に眠っていた豊臣秀吉時代の本物の石垣を間近に見学することができます。',
      hook: '',
      f7_fragment: '巨大な石垣と金の装飾が輝く天守閣がそびえる、浪速の象徴・特別史跡。',
      f7_full:
        '「大阪城」の巨大な石垣と天守閣を仰ぎ見ながら、浪速の都の歴史散歩を締めくくった。',
      image_prompt:
        'Majestic Japanese castle illustration of Osaka Castle, towering white and gold-trimmed keep rising above massive granite stone walls and wide moat framed by lush green park trees, golden late afternoon light, no text, no letters.',
    },
  ],
};
