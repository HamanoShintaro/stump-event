export default {
  slug: 'yufuin',
  station_order: 614,
  station: '由布院駅',
  line: 'JR久大本線',
  area_name: '由布院・湯の坪街道と金鱗湖',
  prefecture: '大分県',
  municipality: '由布市',
  category: '自然・温泉',
  budget_tier: 2,
  tags: ['大分県', '由布市', '由布院駅', '湯の坪街道', '金鱗湖'],
  style_genre: 'pastel_chalk_morning',
  title: '由布院・湯の坪街道と朝霧の金鱗湖を歩く',
  description:
    '由布岳を仰ぐJR由布院駅からメインストリートを東へ進み、名物ロールケーキのB-speakや焼きチーズケーキの由布院ミルヒ、古民家風の鞠智を経て、湖畔のベーカリーカフェと温泉が湧く金鱗湖へと至る、湯布院の王道散策路。',
  eyecatch_prompt:
    'Soft pastel chalk morning illustration of Yufuin hot spring valley in Oita, calm Kinrin Lake shrouded in gentle morning mist with autumn leaves and wooden boathouse, majestic twin-peaked Mount Yufu in distance, warm sunrise light, artistic chalk texture, no text, no people.',
  question:
    '由布岳を仰ぎながら湯の坪街道から金鱗湖まで歩いたあと、いちずに思い出す景色はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '「金鱗湖」の澄んだ水面に立つ朝霧と、魚が泳ぐ静かな湖畔の佇まい',
      subtext:
        '温泉と清水が混ざり合う不思議な湖の神秘的な光景が、由布院の旅の記憶を彩った。',
      badge: {
        code: 'yufuin_kinrin_lake',
        name_ja: '金鱗湖・朝霧の湖畔を見守る者',
        subtitle_en: 'Watcher of Kinrin Lake',
        description:
          '金鱗湖を訪ね、温泉と清水が湧き出る神秘的な湖畔の風景を歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting calm misty Kinrin Lake framed by weeping willow branches and distant twin mountain peaks at sunrise, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 1,
      text: '「B-speak」の木漏れ日差す店先で、ふわふわのPロールを手に入れた瞬間',
      subtext:
        '素朴な素材の味わいにこだわった山荘無量塔の名物菓子に、湯布院らしい品格を感じた。',
      badge: {
        code: 'yufuin_bspeak',
        name_ja: 'B-speak・湯布院の朝菓を携える者',
        subtitle_en: 'Traveler of Yufuin P-Roll',
        description:
          'B-speakを訪ね、湯布院の名物として親しまれる素朴で上品なロールケーキに触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a slice of golden sponge roll cake filled with fresh cream beside a delicate ceramic tea cup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「由布院 鞠智（くくち）」の古民家風空間で、手焼きどら焼きや大分の味を楽しんだ瞬間',
      subtext:
        '大分産の食材にこだわった丁寧な甘味と食事が、湯の坪街道歩きの楽しい節目になった。',
      badge: {
        code: 'yufuin_cucuchi',
        name_ja: '鞠智・湯の坪の甘味を味わいし者',
        subtitle_en: 'Taster of Yufuin Cucuchi',
        description:
          '由布院 鞠智を訪ね、古民家風の落ち着いた空間で手焼きのどら焼きや食事を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting handmade golden dorayaki pancake cakes filled with sweet red bean paste on a rustic wooden tray, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '「CAFE LA RUCHE」の湖畔テラスで、金鱗湖を眺めながら焼きたてパンを味わった瞬間',
      subtext:
        '水面を渡る心地よい風と自家焙煎珈琲の香りに、時間を忘れてゆったりと身を委ねた。',
      badge: {
        code: 'yufuin_laruche',
        name_ja: '湖畔のテラス・珈琲時間を愛でる者',
        subtitle_en: 'Guest of Kinrin Lakeside Cafe',
        description:
          'CAFE LA RUCHEを訪ね、金鱗湖のほとりで焼きたてパンと珈琲の贅沢な時間を過ごした証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a croissant and steaming coffee cup on a wooden lakeside terrace overlooking calm water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'yufuin_complete',
    name_ja: '由布院・湯の坪街道と金鱗湖を歩みし者',
    subtitle_en: 'Walker of Yufuin & Kinrin Lake',
    description:
      'B-speakから由布院ミルヒ、由布院 鞠智、CAFE LA RUCHE、金鱗湖までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining misty Kinrin Lake, twin peaks of Mount Yufu, and a golden roll cake slice, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: 'B-speak',
      spot_type: '買い物',
      description:
        '山荘無量塔がプロデュースするロールケーキ専門店。卵と小麦粉、砂糖の素朴な美味しさを引き出した「Pロール」が全国的に人気。営業時間10:00〜17:00、不定休（年2回）。',
      address: '大分県由布市湯布院町川上3040-2',
      prefecture: '大分県',
      city: '由布市',
      lat: 33.265385,
      lng: 131.359384,
      clue: '由布院駅から由布岳を仰ぎ見ながら由布見通りを東へ歩き、湯の坪街道の入口に佇む名店「B-speak」を訪ねよう（10:00〜17:00、不定休）。由布院の洗練された宿文化を象徴する山荘無量塔が手がけ、名物「Pロール」は早々に売り切れることもある人気ぶりだ。シンプルな素材だけでふんわり焼き上げた上品な味わいを確かめて、これから賑やかな街道へと楽しい一歩を軽やかに踏み出そう。',
      surprise:
        '観光地のど真ん中にありながら、落ち着いた木造の店構えと控えめな看板が湯布院らしい品格を漂わせている。華美な装飾に頼らず素材の美味しさだけで長く支持され続ける姿に、この土地が大切にしてきた豊かな美意識がよく見えてくるに違いないところといえる。',
      hook: 'B-speakを出たら、東北東へ徒歩4分の由布院ミルヒ 本店へ向かおう。',
      f7_fragment: '湯の坪街道の入口に佇む、素朴で気品ある名物ロールケーキの店。',
      f7_full: '湯の坪街道の入口にある「B-speak」を訪ね、素材の味を大切にした湯布院名物の素朴で上品な菓子にじっくり触れた。',
      image_prompt:
        'Refined minimalist wooden Japanese pastry shop exterior shaded by green maple trees with display of golden sponge roll cake, no text, no people.',
    },
    {
      name: '由布院ミルヒ 本店',
      spot_type: '買い物',
      description:
        '湯布院産の牛乳を100％使った焼きたて「ケーゼクーヘン」や「ミルヒプリン」が人気の洋菓子店。営業時間10:30〜17:30（時期により変更あり）、不定休。',
      address: '大分県由布市湯布院町川上3015-1',
      prefecture: '大分県',
      city: '由布市',
      lat: 33.26623,
      lng: 131.361593,
      clue: 'B-speakから東北東へ徒歩4分、湯の坪街道を進むと焼きたての甘い香りが漂う「由布院ミルヒ 本店」が現れる（10:30〜17:30・不定休）。湯布院産牛乳を贅沢に使った温かい焼きチーズケーキを味わおう。',
      surprise:
        '小さな木枠に入った焼き立てのケーゼクーヘンは、スプーンを入れると中から濃厚でとろりとしたチーズが溢れ出す。山間の盆地が育んだ新鮮なミルクのコクが、散策途中の旅人の心を優しく、そして贅沢にしっかりと満たしてくれるのが実に嬉しいところといえる。',
      hook: '甘い香りを満喫したら、東へ徒歩1分の由布院 鞠智（くくち）で食事にしよう。',
      f7_fragment: '湯布院産牛乳のコクがとろける、湯の坪街道の焼きたてチーズ菓子。',
      f7_full: '「由布院ミルヒ 本店」で湯布院産牛乳を贅沢に使った温かいケーゼクーヘンを味わい、街道歩きの楽しさをぐっと深めた。',
      image_prompt:
        'Warm baked Japanese mini cheesecake in a small wooden cup with creamy melted center on a rustic counter, no text, no people.',
    },
    {
      name: '由布院 鞠智（くくち）',
      spot_type: '食事',
      description:
        '手焼きのどら焼きや果物のコンフィチュール、大分名物のとり天や豊後牛の食事などが楽しめる古民家風の和洋菓子舗・カフェ。平日10:00〜17:00・土日祝10:00〜17:30、不定休。',
      address: '大分県由布市湯布院町川上3001-1',
      prefecture: '大分県',
      city: '由布市',
      lat: 33.266253,
      lng: 131.361945,
      clue: 'ミルヒから東へ徒歩1分、木々の緑に囲まれた古民家風の「由布院 鞠智（くくち）」でランチと甘味を楽しもう（10:00〜17:00・土日祝17:30）。大分名物のとり天や豊後牛を使った食事に加え、職人が銅板で一枚ずつ焼き上げるどら焼きや季節のスイーツも評判だ。落ち着いた和の空間で湯の坪街道の賑わいを眺めながら、大分の豊かな食材でお腹をしっかりと心地よく、そして楽しく満たしておきたい。',
      surprise:
        'スイーツの食べ歩きで知られる街道にありながら、本格的な大分の郷土の味と丁寧な手焼き菓子の両方を一軒で味わえるのが嬉しい。広い庭の木漏れ日の中で過ごすひとときが、旅の歩みに心地よいリズムと彩りを豊かに与えてくれるに違いないところといえるだろう。',
      hook: '鞠智を出たら、東へ徒歩11分のCAFE LA RUCHEで湖畔の珈琲を味わおう。',
      f7_fragment: '古民家の庭を眺めながら大分の味と手焼きどら焼きを楽しむ食卓。',
      f7_full: '「由布院 鞠智（くくち）」で大分の豊かな食材を活かした食事と手焼き菓子を味わい、街道歩きの活力をしっかり養った。',
      image_prompt:
        'Traditional Japanese kominka cafe wooden table with crispy Oita toriten tempura lunch set and handmade dorayaki sweets beside garden view, no text, no people.',
    },
    {
      name: 'CAFE LA RUCHE',
      spot_type: '休憩',
      description:
        '金鱗湖の湖畔に佇む人気ベーカリーカフェ。美しい水面を望むウッドテラスで自家焙煎珈琲や焼きたてパンを楽しめる。営業時間9:00〜16:30頃、水曜定休。',
      address: '大分県由布市湯布院町川上1592-1',
      prefecture: '大分県',
      city: '由布市',
      lat: 33.267373,
      lng: 131.368847,
      clue: '鞠智から東へ徒歩11分、大分川沿いの小道を抜けて金鱗湖のほとりに出ると、水辺に面した「CAFE LA RUCHE」が迎えてくれる（9:00〜16:30頃、水曜定休）。自家焙煎の香ばしい珈琲と焼きたてのクロワッサンを手にウッドテラスへ出れば、目の前に静かな湖面と木々の緑が広がる。散策の締めくくりを前に、湖畔を渡る涼やかな風を感じながらゆったりと深呼吸をして寛いでいこう。',
      surprise:
        '湯の坪街道の活気ある通りを抜けた先に、これほど静かで絵になる湖畔のテラスが待っているコントラストが素晴らしい。水面に映る空の青さと焼きたてパンや珈琲の香りが溶け合い、いつまでも座っていたくなるような心地よさに包まれるに違いないところといえる。',
      hook: '湖畔のテラスを出たら、南南東へ徒歩1分の金鱗湖のほとりを歩いて旅を結ぼう。',
      f7_fragment: '金鱗湖の静かな水面を目の前に味わう、焼きたてパンと珈琲時間。',
      f7_full: '湖畔の「CAFE LA RUCHE」のテラスで焼きたてパンと珈琲を味わい、金鱗湖の穏やかな水辺の風景に癒やされた。',
      image_prompt:
        'Wooden lakeside cafe terrace overlooking misty Kinrin Lake with a fresh croissant and steaming coffee cup in soft morning light, no text, no people.',
    },
    {
      name: '金鱗湖',
      spot_type: '見どころ',
      description:
        '湖底から温泉と清水が同時に湧き出る由布院を代表する名勝。水温が高いため秋から冬の朝には幻想的な朝霧が立ち込める。終日散策自由・無料。',
      address: '大分県由布市湯布院町川上1561-1',
      prefecture: '大分県',
      city: '由布市',
      lat: 33.266664,
      lng: 131.369027,
      clue: 'カフェから南南東へ徒歩1分、いよいよ由布院散策の終着点「金鱗湖」の遊歩道へ踏み入ろう（終日開放・無料）。湖底から清水だけでなく温泉も湧き出ているため一年を通じて水温が高く、気温が下がる朝方には湖面からふわりと朝霧が立ち昇る幻想的な姿を見せる。夕陽に照らされた魚の鱗が金色に輝いたことから名付けられた澄んだ湖面を見つめ、湯の町・由布院の豊かな歩みを静かに、そして穏やかに締めくくろう。',
      surprise:
        '街中の商店街を歩いて辿り着いた先に、これほど神秘的な湧水と温泉の湖が息づいていることに湯布院の自然の豊かさを感じる。水鳥がゆったりと泳ぐ波紋と由布岳の気配が、心に残る美しい結びの風景を静かに、そして鮮やかに描き出しているところといえるだろう。',
      hook: '',
      f7_fragment: '温泉と清水が湧き出し朝霧が立ち昇る、由布院を象徴する神秘の湖。',
      f7_full: '温泉と清水が湧く「金鱗湖」の澄んだ湖畔を歩き、湯の坪街道から辿ってきた由布院の旅を清らかに、そして静かに締めくくった。',
      image_prompt:
        'Serene Kinrin Lake in Yufuin Oita surrounded by gentle morning mist, weeping willow trees and clear water reflecting green mountain peaks, no text, no people.',
    },
  ],
};
