export default {
  slug: 'mikuniminato',
  station_order: 597,
  station: '三国港駅',
  line: 'えちぜん鉄道三国芦原線',
  area_name: '三国港・北前船の湊と歴史的町家',
  prefecture: '福井県',
  municipality: '坂井市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['福井県', '坂井市', '三国港駅', '旧森田銀行本店', '越前そば'],
  style_genre: 'fountain_pen_sketchbook',
  title: '北前船の記憶と越前そばが香る三国湊',
  description:
    '九頭竜川の河口に開け、江戸から明治にかけて北前船の寄港地として空前の繁栄を極めた福井県坂井市三国湊。国宝を伝える古刹の名園から、かぐら建ての老舗越前そば、提灯屋の蔵カフェ、県内最古の洋風銀行建築を経て、地域に愛される酒饅頭の老舗まで、豪商たちの美意識が息づく湊町を歩く。',
  eyecatch_prompt:
    'Fountain pen ink and transparent watercolor architectural travel sketch of Mikuni Minato historic port town in Fukui, showing the classical Western stone facade of Former Morita Bank beside traditional lattice machiya eaves and willow trees along a quiet street on natural textured cream paper, no text, no people.',
  question:
    '北前船の豪商たちが築いた美意識が残る三国湊で、あなたが記憶に留めておきたいのはどの風景だろう？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '国名勝庭園を擁する古刹「瀧谷寺」の書院から、山の斜面を活かした庭を眺めたとき',
      subtext:
        '古くから続く名刹の重厚な佇まいと、季節の移ろいを映す池泉庭園の静寂に心が洗われた。',
      badge: {
        code: 'mikuniminato_takidanji',
        name_ja: '瀧谷寺・三国最古の名園を仰ぎし者',
        subtitle_en: 'Visitor of Takidanji Temple Garden',
        description:
          '南北朝創建の古刹・瀧谷寺を訪ね、国指定名勝の庭園と歴史の重みに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a tranquil Japanese temple moss garden pond with stone bridge and autumn maple leaves in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '築百三十年超の町家「そば処 盛安」で、香り高い越前おろしそばを味わったとき',
      subtext:
        '三国特有の「かぐら建て」の空間でいただく辛味大根と出汁の風味に、北陸の食文化の深みを感じた。',
      badge: {
        code: 'mikuniminato_moriyasu_soba',
        name_ja: '三国湊・かぐら建ての越前そばを味わいし者',
        subtitle_en: 'Taster of Mikuni Echizen Soba',
        description:
          '創業百三十年を超えるそば処 盛安を訪ね、三国の伝統建築の中で越前おろしそばを堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a ceramic bowl of dark Echizen soba noodles topped with grated white radish and bonito flakes in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '老舗提灯店の土蔵を活かした「Cafe 三國湊・食の蔵 灯」で、和の灯りに包まれて寛いだとき',
      subtext:
        '二百余年続く提灯職人の文化と、土蔵の落ち着いた空間が織りなす心地よい時間に癒やされた。',
      badge: {
        code: 'mikuniminato_akari_cafe',
        name_ja: '三國湊・提灯蔵の灯りに寛ぎし者',
        subtitle_en: 'Guest of Mikuni Lantern Storehouse Cafe',
        description:
          'Cafe 三國湊・食の蔵 灯を訪ね、老舗提灯店の土蔵空間で湊町の穏やかな時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a warm glowing plain paper lantern inside a white-walled kura storehouse cafe in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '国登録有形文化財「旧森田銀行本店」の豪華な漆喰装飾と吹き抜けを見上げたとき',
      subtext:
        '往時の湊町の財力と、地方銀行建築に込められた西欧古典主義の華麗な意匠に圧倒された。',
      badge: {
        code: 'mikuniminato_morita_bank',
        name_ja: '旧森田銀行・北前船の栄華を仰ぎし者',
        subtitle_en: 'Admirer of Former Morita Bank',
        description:
          '旧森田銀行本店を訪ね、北前船の富が生んだ大正期の洋風建築と漆喰装飾を体感した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a classical Western stone bank facade with arched windows and ornate cornice in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'mikuniminato_complete',
    name_ja: '三国湊・北前船の文化を巡りし者',
    subtitle_en: 'Explorer of Mikuni Minato Heritage',
    description:
      '瀧谷寺からそば処 盛安、Cafe 三國湊・食の蔵 灯、旧森田銀行本店、いまで涛花堂までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a classical bank facade, a temple garden stone lantern, and steamed sake manju in fountain pen sketch style, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '瀧谷寺',
      spot_type: '見どころ',
      description:
        '六百余年前に創建された三国最古の真言宗寺院。国宝の宝相華文磬や国の名勝に指定された池泉庭園を有する。拝観8:00〜17:00（11〜2月は16:30まで）、無休。',
      address: '福井県坂井市三国町滝谷1-7-15',
      prefecture: '福井県',
      city: '坂井市',
      lat: 36.221844,
      lng: 136.146061,
      clue: 'えちぜん鉄道の三国港駅から東へ坂道を上ると、森の緑に抱かれた古刹「瀧谷寺（たきだんじ）」の山門が現れる（8:00〜17:00、11〜2月は16:30まで・拝観料あり）。古くに創建された三国最古の真言宗寺院で、境内には国宝をはじめ数多くの文化財が伝わる。書院から望む国指定名勝の池泉庭園は、山の斜面を巧みに活かした静謐な佇まいだ。ここで歴史ある三国湊の最初のしるしを刻もう。',
      surprise:
        '朝倉氏などかつての武将たちからも厚い庇護を受けた名刹であり、往時に築かれた庭園は北陸を代表する名園として広く知られる。湊町の喧騒を離れた高台の静寂と四季折々の木々の彩りが、三国湊の長い歴史と豊かな文化の深さを今も静かに未来へと語り続けている。',
      hook: '瀧谷寺を参拝したら、南へ徒歩11分のそば処 盛安へ向かおう。',
      f7_fragment: '山の緑を借景にした国名勝の池泉庭園と、古刹の重厚な伽藍。',
      f7_full: '三国最古の古刹として知られる瀧谷寺を訪ね、かつての武将も庇護した静謐な名園と歴史ある伽藍の佇まいに深く触れた。',
      image_prompt:
        'Wide morning view of a historic Japanese Buddhist temple sanctuary and tranquil pond garden shaded by maple trees and stone lanterns in Mikuni, no text, no people.',
    },
    {
      name: 'そば処 盛安',
      spot_type: '食事',
      description:
        '創業百三十年を超える三国湊の老舗蕎麦店。三国特有の町家建築「かぐら建て」の店舗で、二八の越前おろしそばを味わえる。営業時間11:00〜14:00（土日祝は夜営業あり）、水曜定休。',
      address: '福井県坂井市三国町北本町3-2-30',
      prefecture: '福井県',
      city: '坂井市',
      lat: 36.215754,
      lng: 136.14682,
      clue: '瀧谷寺から南へ徒歩11分、北本町の「そば処 盛安」で昼食にしよう（11:00〜14:00・土日祝は17:00〜20:00も営業、水曜定休）。名物の越前おろしそばを味わい、ひと息つこう。',
      surprise:
        '築百三十年を超える店舗は、道路側に妻を見せる三国特有の町家様式「かぐら建て」の貴重な建築だ。福井県産の蕎麦粉を二八で打った香り高い蕎麦に、ピリッとした辛味大根おろしと鰹節を合わせた越前おろしそばが多くの人々から古くから長年愛され親しまれる。',
      hook: '盛安で越前そばを堪能したら、南東へ徒歩4分のCafe 三國湊・食の蔵 灯へ立ち寄ろう。',
      f7_fragment: 'かぐら建ての町家に響く蕎麦をすする音、辛味大根が香る越前そば。',
      f7_full: '創業百三十年超の老舗「そば処 盛安」を訪ね、三国特有の伝統町家の中で香り高い越前おろしそばをじっくり味わった。',
      image_prompt:
        'Medium-wide interior view of an aged timber Japanese soba house with a ceramic bowl of cold Echizen soba topped with grated white radish, green onions, and bonito flakes, no text, no people.',
    },
    {
      name: 'Cafe 三國湊・食の蔵 灯',
      spot_type: '休憩',
      description:
        '二百余年の歴史を誇る老舗提灯店が営む、土蔵をリノベーションしたカフェ。落ち着いた蔵空間で自家製ドリンクやスイーツを楽しめる。営業時間11:00〜16:00、火・水曜定休。',
      address: '福井県坂井市三国町北本町4-4-46',
      prefecture: '福井県',
      city: '坂井市',
      lat: 36.214273,
      lng: 136.149196,
      clue: '盛安から南東へ徒歩4分、白壁の土蔵が趣を添える「Cafe 三國湊・食の蔵 灯（あかり）」で一息つこう（11:00〜16:00、火・水曜定休）。二百余年前から続く老舗提灯店の土蔵を改装した店内は、太い梁と温かな照明が心地よい隠れ家空間だ。伝統の提灯づくりを受け継ぐ職人の気配をすぐそばに感じながら、香り高いお茶や和のスイーツでここまでの歩き疲れを思いのままゆったりと癒やそう。',
      surprise:
        '母屋である伊藤提灯店は二百年以上も三国湊の祭りや暮らしを照らす手描き提灯を作り続けてきた名店だ。蔵の二階や隣接地では現代の暮らしに寄り添う和の灯り文化も発信され、古い町並みに新しい賑わいと心地よい温もりを毎日のように静かにそっと添えてくれる。',
      hook: '蔵カフェで寛いだら、南南東へ徒歩1分の旧森田銀行本店を見学しよう。',
      f7_fragment: '白壁の土蔵に灯る柔らかな明かりと、老舗提灯店が営む穏やかな喫茶空間。',
      f7_full: '老舗提灯店が営む土蔵カフェで心地よく一服し、三国湊に息づく伝統の手仕事と暮らしの温もりにじっくりと心を寄せた。',
      image_prompt:
        'Top-down flatlay detail of a wooden cafe table inside a white-walled kura storehouse with a warm cup of roasted tea, handmade wagashi sweet, and woven linen coaster, no text, no people.',
    },
    {
      name: '旧森田銀行本店',
      spot_type: '見どころ',
      description:
        '百余年前に建てられた福井県内最古の鉄筋コンクリート造銀行建築（国登録有形文化財）。豪華な漆喰装飾の吹き抜け営業室を公開。開館9:00〜17:00、月曜休（祝日は開館）。',
      address: '福井県坂井市三国町南本町3-3-26',
      prefecture: '福井県',
      city: '坂井市',
      lat: 36.213598,
      lng: 136.149543,
      clue: '食の蔵 灯から南南東へ徒歩1分、町家通りにひときわ堂々たる洋風建築「旧森田銀行本店」が現れる（9:00〜17:00、月曜休・祝日は開館・入館無料）。北前船の廻船問屋として財を成した森田家が創業した銀行の本店として建てられた、福井県内最古の鉄筋コンクリート造建築だ。館内へゆっくりと足を踏み入れ、吹き抜け天井に施された優美な漆喰彫刻の装飾と高い気品をここで存分に仰ぎ見よう。',
      surprise:
        '外観は重厚な西欧古典主義の石造り風でありながら、内部の営業室にはケヤキ材のカウンターや精巧な幾何学模様の漆喰装飾が配され、往時のロマンの粋を極めた。日本海の海運で栄えた三国湊の経済的スケールを象徴する貴重な歴史的建物として今も美しく堂々と残る。',
      hook: '旧森田銀行を見学したら、東へ徒歩8分のいまで涛花堂でお土産を選ぼう。',
      f7_fragment: '西欧古典主義の重厚な石壁と、吹き抜け天井を彩る豪華な漆喰彫刻。',
      f7_full: '国登録有形文化財の旧森田銀行本店を仰ぎ、北前船の富が築いた往時の華麗な洋風建築と装飾の意匠を深くじっくり体感した。',
      image_prompt:
        'Low-angle architectural view of a grand early-20th-century classical Western stone bank building with tall arched windows and ornate cornice along a historic Japanese port street, no text, no people.',
    },
    {
      name: 'いまで涛花堂',
      spot_type: '買い物',
      description:
        '三国町南本町で長く親しまれる和洋菓子店。三国名物の酒万寿（酒饅頭）やとびつき団子など、地元に根づくお菓子が並ぶ。営業時間8:00〜18:00（日曜17:00まで）、火曜定休。',
      address: '福井県坂井市三国町南本町1-1-48',
      prefecture: '福井県',
      city: '坂井市',
      lat: 36.213129,
      lng: 136.154973,
      clue: '旧森田銀行本店から東へ徒歩8分、南本町の街角に佇む菓子舗「いまで涛花堂（とうかどう）」へ立ち寄ろう（8:00〜18:00・日曜17:00まで、火曜定休）。店頭には湊町・三国で古くから親しまれてきた素朴な酒万寿（酒饅頭）やとびつき団子、地元ならではの焼き菓子が所狭しと並ぶ。歴史深い湊町の散策の締めくくりに、町の温かな人情が伝わる素朴なお菓子を大切な旅の土産に選び取ろう。',
      surprise:
        '北前船の寄港地として多くの船乗りや商人が行き交った三国湊では、船出や祝い事の際に酒麹の香り豊かな酒万寿を贈る風習が根づいたと伝わる。今も地元の子どもたちや住民に寄り添う素朴な和洋菓子が、熟練職人の手で毎日丁寧に大切に心込めて作り続けられた。',
      hook: '',
      f7_fragment: '酒麹の香りがほのかに漂う素朴な酒万寿と、湊町の暮らしに寄り添う菓子舗。',
      f7_full: '南本町の老舗・いまで涛花堂で名物の酒万寿を手に取り、北前船が往来した三国湊の町歩きの旅を美しく見事に締めくくった。',
      image_prompt:
        'Golden-hour view of a warm traditional Japanese confectionery storefront displaying steamed round white sake-manju buns with NO branded stamps or kanji on natural wooden trays, no text, no people.',
    },
  ],
};
