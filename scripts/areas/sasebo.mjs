export default {
  slug: 'sasebo',
  station_order: 643,
  station: '佐世保',
  line: 'JR佐世保線・松浦鉄道西九州線',
  area_name: '佐世保・港と教会の街',
  prefecture: '長崎県',
  municipality: '佐世保市',
  category: '港町とグルメ',
  budget_tier: 2,
  tags: ['長崎県', '佐世保市', '佐世保駅', '佐世保バーガー', '四ヶ町商店街'],
  style_genre: 'retro_woodblock_poster',
  title: '佐世保・港の教会と元祖バーガーの街を歩く',
  description:
    '日本最西端のJR駅・佐世保駅から、駅構内の「ログキット 佐世保駅店」と高台にそびえるゴシック様式の「カトリック三浦町教会」、海辺の「させぼ五番街」、昭和26年創業の老舗「ハンバーガーショップ ヒカリ させぼ五番街店」、活気ある「四ヶ町商店街」を巡る散策路。',
  eyecatch_prompt:
    'Retro Japanese woodblock poster illustration of Sasebo port town showing the red-brick Gothic Miuramachi Catholic Church atop a hill, sunlit Sasebo Gobangai waterfront promenade overlooking blue harbor, American-style Sasebo burger diner and bustling covered Yonka-cho shopping arcade, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '港町の異国情緒と本場佐世保バーガーの活気が繋がる佐世保を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「ログキット 佐世保駅店」で、ボリューム満点のアメリカンスタイルバーガーに出会った瞬間',
      subtext:
        '駅に降り立った瞬間から漂うジューシーな香りに、海軍ゆかりの佐世保の食文化を実感した。',
      badge: {
        code: 'sasebo_logkit',
        name_ja: '佐世保駅前・ログキットを味わいし者',
        subtitle_en: 'Taster of Logkit Burger',
        description:
          'ログキット 佐世保駅店を訪ね、本場仕込みのボリュームある佐世保バーガーに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a hearty layered American-style Japanese burger with crispy bacon, fried egg and fresh lettuce, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「カトリック三浦町教会」の高台を見上げ、白と赤煉瓦の尖塔が青空に映える姿を見た瞬間',
      subtext:
        '戦火を耐え抜いた昭和初期のゴシック教会が、港町・佐世保の静かな祈りを伝えていた。',
      badge: {
        code: 'sasebo_church',
        name_ja: '佐世保・三浦町教会の尖塔を仰ぎし者',
        subtitle_en: 'Visitor of Miuramachi Church',
        description:
          'カトリック三浦町教会を訪ね、港を見下ろす高台に建つ歴史あるゴシック教会を仰ぎ見た証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing the twin Gothic spires and rose window of Miuramachi Catholic Church framed against blue harbor sky, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「ハンバーガーショップ ヒカリ させぼ五番街店」で、創業半世紀超の老舗の味を頬張った瞬間',
      subtext:
        '海風を感じながら味わう特製マヨネーズと肉汁のハーモニーが、佐世保の旅を特別なものにした。',
      badge: {
        code: 'sasebo_hikari',
        name_ja: '佐世保港・老舗ヒカリのバーガーを嗜みし者',
        subtitle_en: 'Patron of Hikari Burger',
        description:
          'ハンバーガーショップ ヒカリ させぼ五番街店を訪ね、昭和二十六年創業の伝統の味を堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring a classic Sasebo burger wrapped in paper beside crisp harbor waves and lighthouse silhouette, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「四ヶ町商店街」の一直線に伸びるアーケードを歩き、港町の賑わいと人情に触れた瞬間',
      subtext:
        '三ヶ町と繋がり日本一の長さを誇る一直線の商店街に、市民の暮らしが息づいていた。',
      badge: {
        code: 'sasebo_yonkacho',
        name_ja: '佐世保・日本一長い商店街を歩みし者',
        subtitle_en: 'Walker of Yonkacho Arcade',
        description:
          '四ヶ町商店街を訪ね、一直線に続く活気あふれるアーケードの街歩きを楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a bright long straight covered Japanese shopping arcade with warm lanterns and retro storefronts, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'sasebo_complete',
    name_ja: '佐世保・港の教会と元祖バーガーを巡る旅人',
    subtitle_en: 'Explorer of Sasebo Port',
    description:
      'ログキット 佐世保駅店からカトリック三浦町教会、させぼ五番街、ヒカリ させぼ五番街店、四ヶ町商店街までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the Gothic spires of Miuramachi Church, a Sasebo burger and a bustling harbor arcade, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'ログキット 佐世保駅店',
      spot_type: '食事',
      description:
        '米海軍基地の街・佐世保で本場アメリカの味を伝える老舗「ログキット」の駅構内店。注文を受けてから焼き上げるジューシーなパティと自家製マヨネーズが人気。10:00〜19:00頃、木曜休。',
      address: '長崎県佐世保市三浦町21-2',
      prefecture: '長崎県',
      municipality: '佐世保市',
      lat: 33.163789,
      lng: 129.726111,
      clue: '日本最西端のJR駅・佐世保駅に降り立ったら、まずは駅構内の「ログキット 佐世保駅店」で佐世保バーガーの洗礼を受けよう（10:00〜19:00頃、木曜休）。昭和の時代からアメリカ海軍の文化が息づく街で、本場仕込みの大きなサイズと肉厚パティを守り続ける名店の味が駅で気軽に味わえる。注文ごとに香ばしく焼き上がる薫りに胸を躍らせながら、港町散策をこれからも軽やかに始めたい。',
      surprise:
        '駅を出る前から、本格的なアメリカンダイナー仕込みの佐世保バーガーに出会えるのがこの街ならではの楽しさだ。シャキシャキのレタスと甘い特製マヨネーズ、ジューシーなパティの一体感を味わうことで、佐世保の異国情緒あふれる旅の気分が一気に高まる。',
      hook: '駅を出たら、東側の高台へ北へ徒歩4分のカトリック三浦町教会へ向かおう。',
      f7_fragment: 'JR佐世保駅構内で本場アメリカ仕込みの味が楽しめる、老舗バーガー店。',
      f7_full: '駅構内の「ログキット 佐世保駅店」で本場仕込みの佐世保バーガーに触れ、異国情緒ある港町の旅を始めた。',
      image_prompt:
        'Cozy American-Japanese station diner counter with a hearty handmade Sasebo burger featuring thick beef patty, bacon, egg and fresh lettuce, no text, no people.',
    },
    {
      name: 'カトリック三浦町教会',
      spot_type: '見どころ',
      description:
        '昭和6年（1931年）に献堂された佐世保のシンボル的教会。駅のすぐ目の前の高台にそびえるゴシック様式の白と赤煉瓦の尖塔は、空襲を免れて港を見守り続けている。外観自由（堂内10:00〜14:00頃）。',
      address: '長崎県佐世保市三浦町4-25',
      prefecture: '長崎県',
      municipality: '佐世保市',
      lat: 33.16607,
      lng: 129.726101,
      clue: '佐世保駅前から東側の坂道を北へ徒歩4分、街を見守るようにそびえる「カトリック三浦町教会」へ足を運ぼう（堂内10:00〜14:00頃・行事時不可）。昭和六年献堂の優美なゴシック様式の聖堂で、戦時中は空襲の標的を避けるため黒く塗られて難を逃れたという歴史も持つ。静かな祈りの空間に敬意を払いつつ、長崎のキリスト教文化が息づく美しい尖塔をこれからもずっと仰ぎ見たい。',
      surprise:
        'JRの駅を出た瞬間に正面の高台にゴシック教会の尖塔が見える風景は、日本中を見渡しても佐世保ならではの唯一無二の眺めだ。静謐な聖堂の佇まいと戦火を乗り越えた物語に触れることで、港町の奥深い歴史が静かに胸に響いてくる。',
      hook: '高台を下りたら、みなと口側へ抜けて南西へ徒歩5分のさせぼ五番街を歩こう。',
      f7_fragment: '佐世保駅前の高台にそびえ戦火を耐え抜いた、優美なゴシック教会。',
      f7_full: '駅前の高台に立つ「カトリック三浦町教会」の優美な尖塔を仰ぎ、佐世保の祈りと異国情緒の歴史に触れた。',
      image_prompt:
        'Historic Gothic Catholic church of Miuramachi in Sasebo with twin spires, arched windows and stone steps rising above the port city, no text, no people.',
    },
    {
      name: 'させぼ五番街',
      spot_type: '見どころ',
      description:
        'JR佐世保駅みなと口からすぐ、佐世保港に面して広がる海辺のオープンモール。青い港と停泊する艦船、九十九島方面の海風を感じながら買い物や散策が楽しめる。10:00〜21:00頃（店舗により異なる）。',
      address: '長崎県佐世保市新港町2-1',
      prefecture: '長崎県',
      municipality: '佐世保市',
      lat: 33.165304,
      lng: 129.722956,
      clue: '教会から駅みなと口側へ抜け、南西へ徒歩5分の海辺に広がる「させぼ五番街」へ出よう（10:00〜21:00頃）。佐世保港の潮風と青い海の景色を全身で感じたい。',
      surprise:
        '駅のすぐ裏手がそのまま佐世保港のウォーターフロントになっており、遊歩道から青い海と停泊する船のシルエットを間近に眺められる開放感が素晴らしい。潮風を受けながら港のテラスを歩くだけで、軍港・商港として栄えた佐世保の爽やかな魅力が伝わってくる。',
      hook: '海辺のテラスを抜けたら、敷地内南東へ徒歩3分のヒカリ させぼ五番街店で本場の味を堪能しよう。',
      f7_fragment: '佐世保駅みなと口すぐの海辺に広がる、潮風心地よい港のプロムナード。',
      f7_full: '佐世保港沿いの「させぼ五番街」で青い海と潮風を感じながら歩き、港町ならではの開放的な風景を満喫した。',
      image_prompt:
        'Sunny waterfront promenade of Sasebo Gobangai overlooking deep blue harbor waters, distant green islands and white seaside terrace, no text, no people.',
    },
    {
      name: 'ハンバーガーショップ ヒカリ させぼ五番街店',
      spot_type: '食事',
      description:
        '昭和26年（1951年）創業、佐世保バーガーの草分けとして愛される老舗「ヒカリ」の海辺の店舗。甘めの特製マヨネーズと香ばしいバンズが自慢のスペシャルバーガーが人気。10:00〜21:00、無休。',
      address: '長崎県佐世保市新港町3-1',
      prefecture: '長崎県',
      municipality: '佐世保市',
      lat: 33.164229,
      lng: 129.724031,
      clue: '五番街の海沿いを南東へ徒歩3分、昭和二十六年創業の草分け「ハンバーガーショップ ヒカリ させぼ五番街店」へ入ろう（10:00〜21:00）。佐世保バーガーの伝統を受け継ぐ老舗の支店であり、こんがり焼いたバンズに、少し甘めの特製マヨネーズ、卵やチーズ、ベーコンを挟んだ名物スペシャルバーガーが味わえる。青い港を眺めながら、佐世保が育んだご当地グルメの真髄をこれからも堪能しよう。',
      surprise:
        'お店ごとに全く異なる個性を持つ佐世保バーガーの中で、ヒカリの少し甘くコクのあるマヨネーズとふんわり香ばしいバンズは半世紀以上愛され続ける王道の美味しさだ。海風を感じながら頬張るアツアツのバーガーは、港町旅の最高のご馳走といえる。',
      hook: '海の幸ならぬ海のバーガーを味わったら、北北西へ徒歩11分の四ヶ町商店街を歩いて旅を結ぼう。',
      f7_fragment: '昭和二十六年創業、佐世保バーガーの草分け「ヒカリ」を味わう海辺の店。',
      f7_full: '老舗「ヒカリ させぼ五番街店」で伝統の特製マヨネーズが効いた佐世保バーガーを味わい、港町の食の粋を堪能した。',
      image_prompt:
        'Inviting seaside burger shop wooden table serving a freshly grilled classic Sasebo burger in wax paper with golden fries overlooking harbor water, no text, no people.',
    },
    {
      name: '四ヶ町商店街',
      spot_type: '買い物',
      description:
        '隣接する三ヶ町商店街と合わせて直線約960mという日本一の長さを誇る全蓋式アーケード商店街。老舗の和洋菓子店や飲食店、雑貨店が軒を連ねて賑わう。各店舗10:00〜20:00頃中心。',
      address: '長崎県佐世保市本島町4-1',
      prefecture: '長崎県',
      municipality: '佐世保市',
      lat: 33.170053,
      lng: 129.722107,
      clue: '五番街から北北西へ徒歩11分、佐世保市民の暮らしの中心「四ヶ町商店街」を歩いて旅を締めくくろう（各店10:00〜20:00頃）。三ヶ町商店街と一直線に繋がり、直線アーケードとして日本一の長さを誇る名物通りだ。老舗のカステラや蜂の家、地元の商店街ならではの温かい店先をゆっくり眺めながら、港と教会とグルメを巡った佐世保の街歩きをこれからも心地よい賑わいの中で結びたい。',
      surprise:
        '端から端まで見渡しても先が見えないほどまっすぐ伸びるアーケードのスケール感と、昼間から多くの買い物客が行き交う活気に圧倒される。海と教会が織りなす異国情緒と、昔ながらの商店街の人情が一つに溶け合う佐世保の奥深さを実感する。',
      hook: '',
      f7_fragment: '三ヶ町と繋がり日本一の直線アーケードを誇る、佐世保の活気ある商店街。',
      f7_full: '一直線に伸びる「四ヶ町商店街」のアーケードを歩き、港町の賑わいと人情に包まれて佐世保の旅を結んだ。',
      image_prompt:
        'Bustling straight covered Japanese shopping arcade of Sasebo Yonkacho stretching into the distance with warm shop lanterns and traditional storefronts, no text, no people.',
    },
  ],
};
