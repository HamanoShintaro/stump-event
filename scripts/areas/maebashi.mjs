export default {
  slug: 'maebashi',
  station_order: 630,
  station: '前橋',
  line: 'JR両毛線',
  area_name: '前橋・水と緑と詩のまち',
  prefecture: '群馬県',
  municipality: '前橋市',
  category: 'アートと歴史',
  budget_tier: 2,
  tags: ['群馬県', '前橋市', '前橋駅', '臨江閣', '白井屋ホテル'],
  style_genre: 'editorial_ligne_claire',
  title: '前橋・詩人の川辺と迎賓館の街を歩く',
  description:
    '「水と緑と詩のまち」として親しまれるJR前橋駅から、現代アートの拠点「アーツ前橋」と建築美が光る「白井屋ホテル」、昭和レトロな洋食店「パーラーレストラン モモヤ」、萩原朔太郎ゆかりの「前橋文学館」、国重要文化財「臨江閣」を巡る散策路。',
  eyecatch_prompt:
    'Editorial ligne claire illustration of Maebashi city showing a contemporary art museum, modernist green-covered hotel tower, retro Japanese parlor cafe, riverside literary museum along tree-lined Hirosegawa river and historic Meiji wooden guesthouse Rinkokaku, warm Japanese Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: 'アートとレトロな洋食、そして詩人の川辺が交差する前橋を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「白井屋ホテル」の吹き抜け空間で、現代アートと緑が彩る建築美を見上げた瞬間',
      subtext:
        '三百年以上の歴史を継ぐ宿が、国内外のアーティストの作品を纏い街の新たな象徴となっていた。',
      badge: {
        code: 'maebashi_shiroiya',
        name_ja: '前橋・白井屋のアートを仰ぎし者',
        subtitle_en: 'Admirer of Shiroiya Art',
        description:
          '白井屋ホテルを訪ね、大胆な吹き抜けと現代アートが響き合う建築空間を体感した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a dramatic sunlit architectural atrium with concrete beams, lush hanging greenery and minimalist stairs, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「パーラーレストラン モモヤ」で、昔ながらのナポリタンやパフェを味わった瞬間',
      subtext:
        '中央通り商店街の一角で半世紀以上愛され続ける昭和レトロな空間が、旅の心を和ませた。',
      badge: {
        code: 'maebashi_momoya',
        name_ja: '前橋中央通り・モモヤの常連客',
        subtitle_en: 'Guest of Parlor Momoya',
        description:
          'パーラーレストラン モモヤを訪ね、昭和レトロな商店街の懐かしい洋食と甘味に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem featuring a classic Japanese retro cafe plate of Napolitan spaghetti and a tall fruit parfait glass, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「前橋文学館」の窓辺から広瀬川の清流を眺め、詩人・萩原朔太郎の言葉に触れた瞬間',
      subtext:
        '川面を渡る風と柳の緑が、近代日本詩の礎を築いた前橋の文学的風土を物語っていた。',
      badge: {
        code: 'maebashi_bungakukan',
        name_ja: '広瀬川・詩のまちを歩みし者',
        subtitle_en: 'Walker of Maebashi Poetry',
        description:
          '前橋文学館を訪ね、広瀬川のせせらぎと萩原朔太郎ら郷土の詩人の足跡に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a riverside modernist literary museum beside willow trees and a flowing clear stream, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「臨江閣」の気品ある木造迎賓館で、明治期の美しい和風建築と庭園を眺めた瞬間',
      subtext:
        '日本の近代化を支えた迎賓の場が、今も静かな池と松の緑とともに前橋公園に佇んでいた。',
      badge: {
        code: 'maebashi_rinkokaku',
        name_ja: '前橋公園・臨江閣を巡りし者',
        subtitle_en: 'Visitor of Rinkokaku Hall',
        description:
          '臨江閣を訪ね、国指定重要文化財の明治木造迎賓館と日本庭園の美しさに触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the historic Meiji-era wooden Rinkokaku guesthouse with tiled gables, red-tinted eaves and pine garden, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'maebashi_complete',
    name_ja: '前橋・詩人の川辺と迎賓館を巡る旅人',
    subtitle_en: 'Explorer of Maebashi Town',
    description:
      'アーツ前橋から白井屋ホテル、パーラーレストラン モモヤ、前橋文学館、臨江閣までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a modern art atrium, willow trees along a river and the Meiji wooden guesthouse Rinkokaku, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'アーツ前橋',
      spot_type: '見どころ',
      description:
        '商業施設を再生して誕生した前橋市の公立美術館。地域や暮らしと結びついた多彩な現代アートの展覧会を開催する。開館10:00〜18:00（入館17:30まで）、水曜休館。',
      address: '群馬県前橋市千代田町5-1-16',
      prefecture: '群馬県',
      municipality: '前橋市',
      lat: 36.39048,
      lng: 139.071215,
      clue: 'JR両毛線の前橋駅北口を出て街路樹の美しい大通りを北へ進み、アートの街の玄関口「アーツ前橋」へ足を運ぼう（10:00〜18:00、水曜休）。かつての商業施設を大胆に再生して生まれた公立美術館で、白を基調とした開放的な空間に国内外の現代アートや地域の記憶を映す多彩な展示がずらりと並ぶ。前橋が育む新しい文化の息吹を肌で感じながら、詩とアートが息づく街歩きを軽やかに始めたい。',
      surprise:
        '元百貨店の建物を活かした親しみやすい館内には街の空気がそのまま流れ込み、美術館というより街の大きな居間のような心地よさがある。通りすがりにふと現代アートと出会える開かれた雰囲気が、前橋という街の懐の深さと先進性を生き生きと伝えている。',
      hook: '美術館を出たら、西南西へ徒歩2分の白井屋ホテルの建築美を見上げに行こう。',
      f7_fragment: '旧商業施設を再生し街とアートを繋ぐ、前橋文化の開放的な発信拠点。',
      f7_full: '街なかの公立美術館「アーツ前橋」で現代アートと再生建築の開放的な空間に触れ、前橋の豊かな文化散歩を始めた。',
      image_prompt:
        'Contemporary urban art museum exterior of Arts Maebashi with clean geometric white panels, glass street-level windows and trees, no text, no people.',
    },
    {
      name: '白井屋ホテル',
      spot_type: '見どころ',
      description:
        '江戸時代創業の老舗旅館を建築家・藤本壮介氏の設計で再生したアートホテル。ロビーの吹き抜けや敷地内のカフェ・ベーカリーが街に開かれている。ロビー・カフェ日中開放。',
      address: '群馬県前橋市本町2-2-15',
      prefecture: '群馬県',
      municipality: '前橋市',
      lat: 36.390172,
      lng: 139.070053,
      clue: 'アーツ前橋から西南西へ徒歩2分、緑の丘のような外観が目を引く「白井屋ホテル」へ立ち寄ろう（日中ロビー・カフェ開放）。三百年以上の歴史を刻んだ老舗旅館を建築家・藤本壮介氏が再生した名建築で、四層分の床を抜いたダイナミックな吹き抜け空間にレアンドロ・エルリッヒの光の作品などが鮮やかに息づく。街に開かれたアートと建築の美しい調和を仰ぎ見ながら、前橋の新たな魅力を体感したい。',
      surprise:
        '宿泊客だけでなく街を歩く人もふらりと立ち寄れる開かれたロビーに一歩入ると、むき出しのコンクリート梁と豊かな緑、現代アートの競演に思わず息を呑む。歴史ある宿の記憶を未来へ繋ぎ直した街づくりの情熱が、空間の隅々から真っすぐに伝わってくる。',
      hook: 'アート空間を満喫したら、北北西へ徒歩3分のパーラーレストラン モモヤで一息つこう。',
      f7_fragment: '老舗旅館を藤本壮介氏が再生した、光とアートが響く前橋の名建築。',
      f7_full: '「白井屋ホテル」の吹き抜けに満ちる光と現代アートの空間を仰ぎ、老舗の記憶を受け継ぐ前橋の新たな街の魅力に触れた。',
      image_prompt:
        'Iconic architectural interior of Shiroiya Hotel atrium with exposed concrete beams, lush indoor greenery and glowing light tube art installation, no text, no people.',
    },
    {
      name: 'パーラーレストラン モモヤ',
      spot_type: '休憩',
      description:
        '前橋中央通り商店街で長く愛される昭和レトロな老舗洋食喫茶。昔ながらのナポリタンやクリームソーダ、特製パフェが人気。営業時間10:00〜19:00、水曜・第3木曜定休。',
      address: '群馬県前橋市千代田町2-12-2',
      prefecture: '群馬県',
      municipality: '前橋市',
      lat: 36.391556,
      lng: 139.069081,
      clue: '白井屋ホテルから北北西へ徒歩3分、中央通り商店街の「パーラーレストラン モモヤ」へ立ち寄ろう（10:00〜19:00、水・第3木休）。レトロな洋食や甘味で一服したい。',
      surprise:
        '先ほどまでの先端アート空間から数分歩いただけで、昭和の温もりがそのまま息づく商店街の老舗パーラーに出会えるのが前橋の面白さだ。艶やかなナポリタンや涼やかなパフェを味わいながら、地元の人々に愛され続ける優しい時間に心がほぐれていく。',
      hook: '懐かしい味で寛いだら、北東へ徒歩6分の広瀬川畔・前橋文学館へ向かおう。',
      f7_fragment: '中央通り商店街で半世紀以上愛される、昭和レトロな洋食と甘味の店。',
      f7_full: '商店街の老舗「パーラーレストラン モモヤ」で懐かしい洋食と甘いひとときを味わい、前橋の温かな日常に癒やされた。',
      image_prompt:
        'Warm nostalgic Japanese Showa-era parlor cafe table with classic Napolitan spaghetti on a silver dish and a colorful fruit parfait, no text, no people.',
    },
    {
      name: '前橋文学館',
      spot_type: '見どころ',
      description:
        '前橋出身の詩人・萩原朔太郎をはじめとする近代文学の資料を展示する文学館。広瀬川の美しい遊歩道に面して建つ。開館9:00〜17:00（入館16:30まで）、水曜定休。',
      address: '群馬県前橋市千代田町3-12-10',
      prefecture: '群馬県',
      municipality: '前橋市',
      lat: 36.393852,
      lng: 139.072178,
      clue: 'モモヤから北東へ徒歩6分、清らかな広瀬川のほとりに佇む「前橋文学館」へ足を運ぼう（9:00〜17:00、水曜休）。『月に吠える』で知られる詩人・萩原朔太郎のふるさと前橋が誇る文学の拠点で、貴重な自筆原稿や初版本、朔太郎の書斎を復元した展示などが静かに並んでいる。川辺の柳が風に揺れる「水と緑と詩のまち」の風景とともに、近代日本詩の豊かな言葉の世界にこれからもじっくり浸りたい。',
      surprise:
        '展示室の充実ぶりはもちろん、館の目の前を流れる広瀬川と川岸の柳並木がそのまま文学のワンシーンのように美しい。街の中心部を流れる穏やかな川のせせらぎに耳を傾けていると、詩人たちがこの水辺から紡ぎ出した言葉の響きが自然と胸に蘇ってくる。',
      hook: '詩の余韻を胸に、西北西へ徒歩15分の前橋公園・臨江閣へ向かい旅を結ぼう。',
      f7_fragment: '広瀬川のほとりで萩原朔太郎と近代詩の世界を伝える、美しい文学館。',
      f7_full: '広瀬川沿いの「前橋文学館」で萩原朔太郎の言葉と川辺の柳の風景に出会い、「水と緑と詩のまち」の風情を味わった。',
      image_prompt:
        'Modernist riverside literary museum of Maebashi Bungakukan seen across gentle willow trees and clear Hirosegawa stream in soft afternoon sun, no text, no people.',
    },
    {
      name: '臨江閣',
      spot_type: '見どころ',
      description:
        '明治17年（1884年）に迎賓館として建てられた国指定重要文化財の木造建築群。数寄屋造りの本館と別館が前橋公園の緑に映える（※2026年6月〜2027年3月末は防火改修工事のため館内休館・公園から外観と庭園を見学可）。',
      address: '群馬県前橋市大手町3-15',
      prefecture: '群馬県',
      municipality: '前橋市',
      lat: 36.39587,
      lng: 139.062239,
      clue: '前橋文学館から西北西へ徒歩15分、利根川を望む前橋公園に建つ国重要文化財「臨江閣」で旅を締めくくろう（2027年3月末まで改修工事中のため外観・庭園散策のみ）。明治十七年に迎賓館として建てられた本館と、明治四十三年の共進会に合わせて造られた壮麗な別館が、整えられた日本庭園とともに往時の気品を伝えている。和と洋が調和する木造建築の美しさを公園から仰ぎ、充実の前橋散策を心穏やかに結びたい。',
      surprise:
        '近代の製糸業で栄えた前橋の誇りを象徴するような堂々たる木造建築でありながら、誰もが無料でその美しい佇まいと庭園に親しめるのが実に贅沢だ。池面に映る端正な屋根と緑の木々を眺めながら歩くと、明治から現代へ続く街の文化の深みに心が満たされる。',
      hook: '',
      f7_fragment: '明治の迎賓館の気品を今に伝える、前橋公園内の国重要文化財の木造建築。',
      f7_full: '国重要文化財「臨江閣」の気品ある木造建築と庭園を歩き、アートと詩と歴史が響き合う前橋の散策を清々しく締めくくった。',
      image_prompt:
        'Historic Meiji-era wooden guesthouse Rinkokaku with graceful tiled roofs, vermilion-trimmed eaves and tranquil Japanese pine garden pond, no text, no people.',
    },
  ],
};
