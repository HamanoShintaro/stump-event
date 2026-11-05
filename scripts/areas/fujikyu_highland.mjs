export default {
  slug: "fujikyu_highland",
  line: "富士急行線",
  station: "富士急ハイランド駅",
  station_order: 128,
  area_name: "新西原・霊峰富士の裾野と郡内シルクの湯けむり",
  title: "霊峰の裾野に絹の麺と飛騨木組みの湯を訪ねる",
  description: "標高約830メートル、富士山の広大な裾野に広がる富士吉田市新西原から富士急ハイランド駅へと南から北へ歩くルートです。昭和の香り漂う地元の手造りパン店から、郡内織物の絹粉を練り込んだ「ほうとう・吉田のうどん」の食事処、飛騨の匠が伝統工法で組み上げた純和風木造温泉、そして様々な画家が描いた富士山の名画を集めた美術館を経て、霊峰を仰ぐ高原の駅へと至ります。",
  category: "自然・文化・グルメ",
  prefecture: "山梨県",
  budget_tier: 2,
  tags: ["富士急ハイランド駅", "富士吉田", "富士山", "ほうとう", "温泉"],
  eyecatch_prompt: "Cinematic watercolor background art of the highland neighborhood of Shin-Nishihara in Fujiyoshida at the foot of Mount Fuji. A nostalgic local bakery awning, a traditional timber-framed bathhouse roof with rising steam, and the snow-crowned silhouette of Mount Fuji soaring into a crisp cobalt sky. Visible brush textures, soft Washi paper margins, no photorealism, no text, no people.",
  completion_badge: {
    name_ja: "富士北麓の絹麺と木組みの湯を巡る旅人",
    subtitle_en: "Wayfarer of Highland Silk Noodles and Timber Springs",
    description: "アマノベーカリーからほうとう うどん あまの、ふじやま温泉、フジヤマミュージアム、富士急ハイランド駅までを巡り歩いた証"
  },
  question: "富士北麓の暮らしと美意識が交差する新西原の道をたどり、あなたの心に深く残った場面はどれですか？",
  choices: [
    {
      key: "A",
      text: "『アマノベーカリー』の棚に並ぶ、高原の朝の空気によく似合う素朴な手造りパンの焼き色",
      description: "富士北稜高校近くの老舗パン店で、長年地元の暮らしを支えるコッペパンや惣菜パンに触れる時間",
      badge: {
        code: "shuin_fujikyu_amano_bakery_morning",
        name_ja: "高原の朝に焼き上がる小麦の香りを識る人",
        subtitle_en: "Keeper of Highland Bakery Warmth",
        description: "アマノベーカリーで富士吉田の日常のパン文化に触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "『ほうとう うどん あまの』で味わう、富士の伏流水とシルクパウダーが醸す麺のコシ",
      description: "郡内織物の里ならではの絹粉を練り込んだ自家製麺で、鉄鍋のほうとうや吉田のうどんを味わう体験",
      badge: {
        code: "shuin_fujikyu_silk_hoto_kettle",
        name_ja: "甲斐絹の知恵が宿る鉄鍋ほうとうを嗜む食通",
        subtitle_en: "Gourmet of Silk-Kneaded Hoto Noodles",
        description: "ほうとう うどん あまので絹粉入りの麺を堪能した証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "釘を使わずに組み上げられた『ふじやま温泉』の巨大な木造梁と、湯上がりの高原の風",
      description: "飛騨高山の匠が伝統工法で築いた高さ12メートルの純和風木造浴室で、富士北麓の湯に浸かるひと時",
      badge: {
        code: "shuin_fujikyu_fujiyama_timber_onsen",
        name_ja: "飛騨木組みの湯屋と美肌の湯を愛でる湯客",
        subtitle_en: "Connoisseur of Traditional Timber Hot Springs",
        description: "ふじやま温泉で伝統木造建築と源泉の恵みに触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "『フジヤマミュージアム』の回廊で出会った多彩な富士の色彩と、『富士急ハイランド駅』に迫る稜線",
      description: "近現代の画家たちが描いた富士山の名画を巡ったのち、高原のホームから本物の霊峰を仰ぎ見る瞬間",
      badge: {
        code: "shuin_fujikyu_museum_horizon_gaze",
        name_ja: "画布の富士と高原の鉄路を重ね見る審美家",
        subtitle_en: "Esthete of Painted Peaks and Highland Rails",
        description: "フジヤマミュージアムと富士急ハイランド駅で霊峰の姿を刻んだ証",
        rarity: 3
      }
    }
  ],
  spots: [
    {
      name: "アマノベーカリー",
      spot_type: "買い物",
      description: "富士北稜高校近くの通りで長年地域の人々に親しまれている、昭和の面影を残す手造りパンの老舗。朝早くから焼き上がる優しい甘みの菓子パンや惣菜パンが並ぶ。",
      address: "山梨県富士吉田市新西原1-22-5",
      prefecture: "山梨県",
      city: "富士吉田市",
      lat: 35.480726,
      lng: 138.790301,
      clue: "富士北麓の冷涼な風が吹く新西原一丁目の通りから散策を始めると、昭和の面影を色濃く残す手造りパンの老舗『アマノベーカリー』の看板が見えてくる。扉を開ければ、ガラス棚や木のトレイの上にきつね色に焼き上がったコッペパンや惣菜パン、あんぱんが端正に並び、甘く香ばしい小麦の香りが頬を包む。観光地の喧騒から一歩離れた富士吉田の住宅街で、地元の学生や常連客の暮らしを支えてきた素朴なパンを手に取ろう。",
      surprise: "標高800メートル近い富士吉田は冬の冷え込みが厳しく気圧も低いため、季節ごとの気温と湿度に合わせて発酵時間を細やかに調整する職人技が、変わらぬふんわりとした食感を生んでいる。",
      hook: "焼きたてのパンを手に取ったら西へ徒歩11分。郡内織物の絹粉を練り込んだ麺処『ほうとう うどん あまの』へ向かおう。",
      image_prompt: "Gouache and colored pencil illustration of freshly baked retro Japanese bread rolls and koppepan on wooden trays inside a nostalgic neighborhood bakery in Fujiyoshida. Warm interior lighting, partial close-up composition, textured paper grain, no people, no text."
    },
    {
      name: "ほうとう うどん あまの",
      spot_type: "食事",
      description: "富士山の天然水と郡内織物の里ならではのシルクパウダーを練り込んだ自家製麺が自慢の食事処。なめらかな喉ごしの吉田のうどんや鉄鍋のほうとうを味わえる。",
      address: "山梨県富士吉田市新西原4-11-8",
      prefecture: "山梨県",
      city: "富士吉田市",
      lat: 35.48146,
      lng: 138.782903,
      clue: "新西原四丁目へ西に歩みを進めると、富士山の清冽な伏流水とシルクパウダーを練り込んだ自家製麺を供する『ほうとう うどん あまの』が暖簾を掲げている。古くから甲斐絹（郡内織物）の産地として栄えた富士吉田ならではの知恵を生かした麺は、吉田のうどん特有の力強いコシとともに驚くほどつるりとした喉ごしを備えている。かぼちゃや季節の根菜が溶け込んだ熱々の鉄鍋ほうとうで、高原の昼餉をじっくり味わおう。",
      surprise: "麺に練り込まれたシルクパウダー（絹たんぱく）は生地の保水性を高めて表面をなめらかにする働きがあり、硬さで知られる富士吉田の麺文化に独自の優美な食感をもたらしている。",
      hook: "絹粉入りの麺でお腹を満たしたら西北西へ徒歩7分。飛騨の匠が組み上げた純和風木造浴室の『ふじやま温泉』へ進もう。",
      image_prompt: "Transparent watercolor and fountain pen food illustration of a cast-iron pot (tetsunabe) of steaming Yamanashi Hoto noodles with golden pumpkin and vegetables on a wooden trivet. Loose expressive ink lines, rich warm watercolor washes, unpainted paper margins, no people, no text."
    },
    {
      name: "ふじやま温泉",
      spot_type: "休憩",
      description: "飛騨高山の熟練大工が釘を使わない伝統工法で組み上げた、日本最大級の純和風木造浴室を持つ日帰り温泉。地下1,500メートルから湧出する美肌の湯を楽しめる。",
      address: "山梨県富士吉田市新西原4-17-1",
      prefecture: "山梨県",
      city: "富士吉田市",
      lat: 35.483458,
      lng: 138.779214,
      clue: "西北西へ歩くと、飛騨高山の匠が伝統工法で築いた日帰り温浴施設『ふじやま温泉』が現れる。高さ十二メートルの木組み天井を見上げながら、富士北麓の地下深くから湧く天然温泉でひと息つこう。",
      surprise: "百坪を超える大浴室は湿気による鉄釘の腐食を防ぐため、古来の町家造りと同じく木と木をほぞ穴で噛み合わせる伝統木組み工法で建てられている。",
      hook: "木組みの湯で温まったら北北東へ徒歩2分。富士山の名画を集めた『フジヤマミュージアム』を訪ねよう。",
      image_prompt: "Sumi-ink and mineral pigment wash (tansai) architectural illustration looking up at massive interlocking wooden beams (kigumi joinery) of a traditional Japanese bathhouse ceiling veiled in soft rising steam. Warm cypress wood tones, atmospheric negative space, no people, no text."
    },
    {
      name: "フジヤマミュージアム",
      spot_type: "見どころ",
      description: "近現代の著名な画家たちが描いた「富士山」の絵画コレクションを専門に展示する美術館。スロープ状の回廊を歩きながら多彩な富士の絵画を鑑賞できる。",
      address: "山梨県富士吉田市新西原5-6-1",
      prefecture: "山梨県",
      city: "富士吉田市",
      lat: 35.484498,
      lng: 138.779487,
      clue: "ふじやま温泉のすぐ北北東隣、緑の木立に囲まれた『フジヤマミュージアム』は、近現代の日本画家や洋画家たちが描いた「富士山」の絵画ばかりを収蔵・展示するユニークな美術館だ。館内は階段のない緩やかなスロープ状の回廊になっており、横山大観や片岡球子、棟方志功など巨匠たちがそれぞれの色彩と筆致で挑んだ富士の姿を辿ることができる。ガラス窓の向こうに浮かぶ実物の富士山と画布の富士とを見比べながら歩こう。",
      surprise: "館内の展示室は車椅子やベビーカーでも一筆書きで巡れるよう、中央の吹き抜けを囲むらせん状のスロープ構造として設計されており、歩く高さによって絵画の見え方が少しずつ変化する。",
      hook: "多彩な富士の絵肌に触れたら北北東へ徒歩10分。霊峰を真正面に仰ぐ『富士急行線 富士急ハイランド駅』へ向かおう。",
      image_prompt: "Pastel gouache and watercolor illustration of a quiet spiral gallery corridor with warm wooden floors and soft spotlights illuminating abstract colorful paintings of Mount Fuji on the wall. Partial framing, artistic quietude, no people, no text."
    },
    {
      name: "富士急行線 富士急ハイランド駅",
      spot_type: "見どころ",
      description: "富士吉田市と富士河口湖町の境界に位置する標高約830メートルの富士急行線の駅。ホームからは南側の空いっぱいに裾野を広げる富士山の雄姿を望める。",
      address: "山梨県南都留郡富士河口湖町船津6663-11",
      prefecture: "山梨県",
      city: "南都留郡富士河口湖町",
      lat: 35.489356,
      lng: 138.781953,
      clue: "美術館から北北東へ歩を進めると、富士吉田市と富士河口湖町の境界に佇む『富士急行線 富士急ハイランド駅』に到着する。標高約830メートルの高原を走る単線のホームに立つと、振り返った南の空いっぱいに山頂から広大な裾野までを一望する富士山の雄姿が立ち現れる。手造りのパンと絹粉の麺、飛騨木組みの湯、そして画家たちの富士を巡ってきた道のりを振り返りながら、夕暮れの山気と単線電車の警笛に耳を澄ませよう。",
      surprise: "昭和三十六年に「ハイランド駅」として開業したこの駅は、ちょうど富士吉田市新西原と富士河口湖町船津の市町境が敷地付近を横切る高原の分水嶺のような場所に位置している。",
      hook: "",
      image_prompt: "Transparent watercolor and fountain pen travel sketch of a highland railway platform on the Fujikyuko Line with single tracks leading toward the towering silhouette of Mount Fuji in the late afternoon sky. Loose ink linework, granulation sky wash, no people, no text."
    }
  ]
};
