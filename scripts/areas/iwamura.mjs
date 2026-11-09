const s1_clue =
  '明知鉄道の岩村駅から本町通りを東南東へ徒歩10分、城下町の入り口近くに暖簾を掲げる「五平餅のみはら」から歩き始めよう（10:00〜17:00営業、木曜定休、休業時は近隣のあまから岩村店等も利用可）。東濃ならではの団子状に丸めた地元米の串に、くるみ・胡麻・落花生を贅沢にすり合わせた秘伝の醤油だれを塗り、注文を受けてから炭火で香ばしく焼き上げる名物の五平餅と温かなうどんのセットランチを味わい、山城の城下町に受け継がれる素朴な郷土の味を堪能しよう。';
const s1_surprise =
  '木曽や飛騨に近く山の恵みが豊かな東濃地方では、新米の収穫祝いや祭礼のご馳走として五平餅が古くから作られてきた。三種の木の実と胡麻を合わせた濃厚なだれが炭火で焦げる芳しい香りが本町通りに漂い、旅人の歩みを誘う。';
const s1_hook =
  '炭火焼きの五平餅でお腹を満たしたら、東南東へ徒歩2分の老舗カステラ店へ向かおう。';

const s2_clue =
  '五平餅のみはらから東南東へ徒歩2分、古い町家が並ぶ本町通り沿いの「かめや菓子舗（カステラcafeカメヤ）」へ立ち寄ろう（9:00〜18:00・カフェ10:00〜17:00営業、火曜定休、休業時は近隣の松浦軒本店等も利用可）。江戸後期に岩村藩の蘭学医が長崎から伝えた製法にならい、卵・小麦粉・砂糖・蜂蜜のみで素朴に焼き上げた「岩村カステラ」を古民家カフェの落ち着いた座敷で香り高い珈琲とともに味わい、お土産にも選ぼう。';
const s2_surprise =
  '山深い城下町でありながら江戸期には藩校「知新館」を中心に学問や蘭学が盛んで、御殿医・神谷雲沢が長崎留学から持ち帰った南蛮菓子の製法が城下の菓子職人に受け継がれた。ざっくりとした生地の食感と優しい甘みが親しまれている。';
const s2_hook =
  '古法カステラと珈琲の一服を楽しんだら、南東へ徒歩1分の江戸商家を訪ねよう。';

const s3_clue =
  'かめや菓子舗から南東へ徒歩1分、黒塗りの格子戸が並ぶ「勝川家」を訪ねよう（9:00〜17:00開館、年末年始休）。軒下の忍び返しと吹き抜けの太い梁組を見上げ、江戸商家の格式に触れよう。';
const s3_surprise =
  '江戸後期に「江戸屋」の屋号で藩の御用達も務めた豪商の屋敷で、重要伝統的建造物群保存地区の核をなす建物として知られる。表の重厚な格子戸から奥の書院座敷、蔵へと続く屋敷構えが、城下町商人の繁栄ぶりをそのまま残している。';
const s3_hook =
  '江戸商家の豪壮な梁組を見学したら、東南東へ徒歩2分の藩主ゆかりの屋敷へ向かおう。';

const s4_clue =
  '勝川家から東南東へ徒歩2分、白と黒のなまこ壁が美しい「木村邸」を訪ねよう（9:00〜17:00開館、年末年始休、休館日もなまこ壁の外観見学可）。江戸中期から末期にかけて問屋を営み、岩村藩の財政を支えた功績から藩主が直接立ち寄ることを許された格式高い屋敷で、藩主専用の玄関や上段の間、茶室を見学し、防火と生活用水のために引かれた「天正疎水」が中庭を清らかに流れる城下町の水利の知恵を間近に確かめよう。';
const s4_surprise =
  '戦国末期に城下町の整備とともに築かれた「天正疎水」は、今も本町通りの家々の床下や中庭を縫いながら流れ続けている。木村邸の奥深い座敷となまこ壁の土蔵、そして水音が響く庭が、山城と共に生きた町人の知恵を伝えている。';
const s4_hook =
  '藩主を迎えた屋敷と天正疎水を見学したら、東南東へ徒歩2分の老舗酒蔵へ立ち寄ろう。';

const s5_clue =
  '木村邸から東南東へ徒歩2分歩くと、大きな杉玉が軒先に揺れる「岩村醸造」に到着する（9:30〜16:30営業、不定休）。天明年間創業、三百余年の歴史を持つ銘酒「女城主」の蔵元で、玄関の土間から百メートル以上奥の仕込み蔵まで伸びるレトロなトロッコ軌道と床下の石造り水路を見学しながら、花崗岩層の湧水で醸した芳醇な地酒や甘酒の試飲・お土産選びを楽しみ、本町通りの緩やかな坂を下って岩村駅へ戻ろう。';
const s5_surprise =
  '戦国期に岩村城を治めたおつやの方に敬意を表して名付けられた代表銘柄「女城主」で知られる老舗酒蔵。標高五百メートルの寒冷な気候と清冽な軟水、そして百年以上使われるトロッコ軌道が、山城の麓ならではの酒造りを支えている。';
const s5_hook = '';

export const area = {
  slug: 'iwamura',
  station_order: 343,
  line: '明知鉄道明知線',
  station: '岩村',
  area_name: '岩村駅・女城主の城下町とカステラ・酒蔵の本町通りを歩く道',
  prefecture: '岐阜県',
  Stop_name: '岩村駅',
  title: '女城主の城下町とカステラが息づく岩村を辿る',
  description:
    '日本三大山城の一つ・岩村城の麓に広がり、重要伝統的建造物群保存地区の商家町並みが残る岐阜県恵那市岩村町。炭火焼きの五平餅のみはらから、かめや菓子舗のカステラ、旧商家の勝川家と木村邸、銘酒「女城主」の岩村醸造までを辿る。',
  category: '五平餅のみはら・かめや菓子舗・勝川家・木村邸と岩村醸造',
  budget_tier: 2,
  subtitle: '五平餅のみはらとかめや菓子舗、勝川家から木村邸と岩村醸造へ',
  area_tag: '岐阜県恵那市',
  time_minutes: 50,
  distance_km: 1.5,
  duration_min: 50,
  tags: ['五平餅のみはら', 'かめや菓子舗', '勝川家', '木村邸', '岩村醸造'],
  eyecatch_prompt:
    'Warm golden-hour diagonal street-perspective watercolor and ink illustration of historic dark-timbered merchant houses with namako-kabe plaster walls, wooden lattice facades, and stone-lined water channels along Iwamura castle-town street, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 52% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
  completion_badge: {
    code: 'IWAMURA_CORE',
    name_ja: '女城主の城下町と古法カステラの記憶・岩村のしるし',
    subtitle_en: 'Explorer of Iwamura Castle Town and Castella Heritage',
    description:
      '五平餅のみはらからかめや菓子舗、勝川家、木村邸、岩村醸造までを巡り歩いた証。',
    image_prompt:
      'Watercolor crest of a namako-kabe diamond plaster wall, golden slices of castella cake, and a cedar sugidama ball on cream washi paper. No text.',
  },
  question:
    '女城主の城下町・岩村を辿り終えて、旅の余韻として持ち帰りたい出会いはどれですか？',
  choices: [
    {
      key: 'A',
      text: '「五平餅のみはら」で味わった、くるみと胡麻の秘伝だれが香る炭火焼き五平餅',
      description: '団子状に丸めた地元米に濃厚な木の実だれが絡む、東濃ならではの香ばしい五平餅に心満たされた。',
      badge: {
        code: 'IWAMURA_A',
        name_ja: 'くるみ胡麻だれの炭火五平餅を味わう食客',
        subtitle_en: 'Gourmet of Mihara Charcoal-Grilled Goheimochi',
        description: '五平餅のみはらを訪ね、東濃伝統の団子型五平餅を堪能した者に贈られる称号。',
        rarity: 2,
        image_prompt:
          'Watercolor emblem of two skewered dango-style goheimochi rice cakes glazed with glossy walnut-sesame sauce. No text.',
      },
    },
    {
      key: 'B',
      text: '「かめや菓子舗」の町家カフェで楽しんだ、江戸伝来の素朴な「岩村カステラ」',
      description: '長崎から伝わった古法を受け継ぐカステラのざっくりとした食感と、古い町家で味わう珈琲のひとときに癒やされた。',
      badge: {
        code: 'IWAMURA_B',
        name_ja: '蘭学医が伝えた古法カステラを愛でる茶人',
        subtitle_en: 'Connoisseur of Iwamura Traditional Castella',
        description: 'かめや菓子舗を訪ね、江戸後期から受け継がれる岩村カステラを味わった者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Watercolor emblem of golden rectangular slices of traditional castella sponge cake on a ceramic plate with coffee. No text.',
      },
    },
    {
      key: 'C',
      text: '「勝川家」と「木村邸」のなまこ壁・吹き抜けと、屋敷を潤す「天正疎水」',
      description: '藩主を迎えた上段の間や忍び返し、床下を流れる清らかな疎水に城下町商人の誇りと知恵を感じた。',
      badge: {
        code: 'IWAMURA_C',
        name_ja: 'なまこ壁の商家と天正疎水を巡る町人',
        subtitle_en: 'Explorer of Katsukawa and Kimura Merchant Houses',
        description: '勝川家と木村邸を巡り、重伝建・岩村の商家建築と水利の歴史に触れた者に贈られる称号。',
        rarity: 3,
        image_prompt:
          'Watercolor emblem of a black-and-white namako-kabe diamond plaster wall beside a clear stone water channel. No text.',
      },
    },
    {
      key: 'D',
      text: '「岩村醸造」の土間を貫くトロッコ軌道と、湧水が醸す銘酒「女城主」の酒蔵',
      description: '百メートル続く奥深い酒蔵の軌道と、戦国の女城主の名を受け継ぐ酒造りの歴史に深く感銘を受けた。',
      badge: {
        code: 'IWAMURA_D',
        name_ja: 'トロッコ軌道の酒蔵と女城主の銘酒を識る記録者',
        subtitle_en: 'Chronicler of Iwamura Brewery and Lady Castle Lord Sake',
        description: '岩村醸造を訪ね、三百余年の歴史を刻む酒蔵の軌道と醸造文化に触れた者に贈られる称号。',
        rarity: 4,
        image_prompt:
          'Watercolor emblem of a cedar sugidama ball over a wooden sake barrel and narrow iron cart rails. No text.',
      },
    },
  ],
  spots: [
    {
      name: '五平餅のみはら',
      spot_type: '食事',
      address: '岐阜県恵那市岩村町799-1',
      lat: 35.366203,
      lng: 137.440025,
      radius_m: 50,
      order: 1,
      description:
        '岩村本町通りにある五平餅と麺類の食事処（10:00〜17:00営業、木曜定休）。くるみ・胡麻・落花生の秘伝だれで炭火焼きにする団子型五平餅とセットランチが人気。',
      clue: s1_clue,
      surprise: s1_surprise,
      hook: s1_hook,
      f7_fragment: 'くるみ・胡麻・落花生をすり合わせた秘伝だれを塗り、炭火で香ばしく焼き上げる団子型五平餅。',
      f7_full:
        '本町通りの「五平餅のみはら」で味わう焼きたての五平餅とうどんの昼食が、山城の城下町・岩村を辿る旅を香ばしく幕開ける。',
      image_prompt:
        'Daylight traditional lunch watercolor and ink illustration of skewered round goheimochi rice cakes glazed with glossy roasted walnut-sesame sauce on a ceramic plate beside a bowl of udon noodles and green tea on a wooden table, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: 'かめや菓子舗（カステラcafeカメヤ）',
      spot_type: '休憩',
      address: '岐阜県恵那市岩村町291',
      lat: 35.365771,
      lng: 137.441025,
      radius_m: 50,
      order: 2,
      description:
        '江戸伝来の岩村カステラを商う老舗菓子店・古民家カフェ（9:00〜18:00・カフェ10:00〜17:00営業、火曜定休）。素朴なカステラと珈琲のセットやお土産購入を楽しめる。',
      clue: s2_clue,
      surprise: s2_surprise,
      hook: s2_hook,
      f7_fragment: '江戸後期に藩医が長崎から伝えた製法を守り、素朴な甘みに焼き上げる「岩村カステラ」。',
      f7_full:
        '「かめや菓子舗」の町家カフェでいただく黄金色のカステラと珈琲が、蘭学と茶の湯が栄えた城下町のハイカラな記憶を伝える。',
      image_prompt:
        'Warm cafe still-life watercolor and ink illustration of golden slices of traditional Japanese castella cake on a ceramic plate alongside a cup of black coffee and a small brass fork on a dark wooden table, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '勝川家',
      spot_type: '見どころ',
      address: '岐阜県恵那市岩村町317',
      lat: 35.365547,
      lng: 137.441246,
      radius_m: 50,
      order: 3,
      description:
        '江戸後期に材木や米穀を商った豪商「江戸屋」の屋敷（9:00〜17:00開館、年末年始休）。軒下の忍び返しや吹き抜けの梁組、奥座敷や土蔵が公開されている。',
      clue: s3_clue,
      surprise: s3_surprise,
      hook: s3_hook,
      f7_fragment: '黒塗りの格子戸と軒下の忍び返し、土間から見上げる豪壮な吹き抜けの梁組。',
      f7_full:
        '本町通りに面した「勝川家」の力強い町家建築が、岩村藩の経済を支えた江戸期商人の格式と暮らしぶりを今に映し出す。',
      image_prompt:
        'Morning architectural watercolor and ink illustration of the dark timber lattice facade and interior earthen-floor atrium with massive wooden roof beams of the historic Katsukawa Merchant House, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '木村邸',
      spot_type: '見どころ',
      address: '岐阜県恵那市岩村町329-1',
      lat: 35.365121,
      lng: 137.442307,
      radius_m: 50,
      order: 4,
      description:
        '江戸中期から末期に栄えた問屋・木村家の屋敷（9:00〜17:00開館、年末年始休）。藩主が立ち寄った上段の間や黒漆喰の土蔵、天正疎水が流れる中庭が残る。',
      clue: s4_clue,
      surprise: s4_surprise,
      hook: s4_hook,
      f7_fragment: '白と黒のなまこ壁が映える土蔵と、藩主を迎えた座敷の傍らを流れる「天正疎水」。',
      f7_full:
        '「木村邸」の格式高い上段の間と清らかな疎水の水音が、城と町人が一体となって守り抜いた山城の町の歳月を物語る。',
      image_prompt:
        'Serene daylight watercolor and ink illustration of a traditional courtyard garden inside Kimura Residence featuring a black-and-white namako-kabe storehouse wall, stepping stones, and a clear stone-lined water channel, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
    {
      name: '岩村醸造',
      spot_type: '買い物',
      address: '岐阜県恵那市岩村町342',
      lat: 35.364696,
      lng: 137.443291,
      radius_m: 50,
      order: 5,
      description:
        '天明年間創業の老舗酒蔵（9:30〜16:30営業、不定休）。代表銘柄「女城主」で知られ、土間を貫くトロッコ軌道や水路を見学しながら地酒や甘酒を購入できる。',
      clue: s5_clue,
      surprise: s5_surprise,
      hook: s5_hook,
      f7_fragment: '玄関土間から奥の仕込み蔵へ伸びるトロッコ軌道と、花崗岩の湧水で醸す銘酒「女城主」。',
      f7_full:
        '三百余年の歴史を刻む「岩村醸造」の酒蔵と芳醇な地酒の香りが、重伝建の本町通りを一筋に辿った旅を風雅に締めくくる。',
      image_prompt:
        'Atmospheric interior watercolor and ink illustration of an antique sake brewery earthen corridor with narrow iron cart tracks leading past wooden sake barrels, white plaster walls, and a hanging cedar sugidama ball, painted in the center of a single uniform cream Washi paper canvas (#F7F2E6) occupying only the central 42% of the image with all outer edges dissolving softly and organically into wide 24-percent unpainted cream-white Washi paper margins around all four edges, strictly NO text, NO kanji, NO letters, NO numbers, NO signage, NO rectangular border frame, no people.',
    },
  ],
};

export default area;
