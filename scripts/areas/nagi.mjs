export default {
  slug: "nagi",
  line: "JR因美線",
  station: "那岐駅",
  station_order: 141,
  area_name: "那岐・診療所駅舎と線路が横切る社とかんがえ地蔵の道",
  title: "診療所のある木造駅舎から線路が横切る社と極楽寺へ",
  description: "鳥取・岡山県境の物見峠を越えた山あいに佇むJR因美線・那岐駅。待合室の隣に町立診療所が同居する昭和7年（1932年）築の木造駅舎を起点に、智頭杉の薪ボイラーが香る旧那岐小学校の湯処・ナギノ森ノ宿、土師川のせせらぎに沿う旧那岐保育園の木造学び舎跡、拝殿と本殿のあいだを鉄道が横切る那岐神社、そして山門前で百五十年ものあいだ頬杖をつく「かんがえ地蔵」の極楽寺へと、大背（おおせ）集落を東から西へ一直線に巡るルートです。",
  category: "自然・郊外",
  prefecture: "鳥取県",
  budget_tier: 1,
  tags: ["那岐", "JR因美線", "智頭町", "那岐神社", "かんがえ地蔵"],
  eyecatch_prompt: "A warm transparent watercolor and fountain pen travel sketchbook illustration of a small retro wooden country railway station in a misty cedar valley in Chizu, Tottori, with a warm glowing clinic window beside the waiting room, a gentle mountain stream, and a single-car local train track curving toward an ancient shrine cedar forest in the distance. Soft morning light, unpainted Washi paper margins, no text, no people.",
  completion_badge: {
    name_ja: "那岐山麓の鉄路と頬杖の地蔵を訪ねし旅人",
    subtitle_en: "Wayfarer of Nagi Valley Rail and Contemplative Jizo",
    description: "JR因美線 那岐駅からナギノ森ノ宿、旧那岐保育園舎、那岐神社、高貴山 極楽寺までを巡り歩いた証"
  },
  question: "山あいの木造建築と鉄路の気配が溶け合う大背の集落で、誰かに手紙で伝えたくなった光景はどれですか？",
  choices: [
    {
      key: "A",
      text: "昭和七年築の『那岐駅』で、列車の待合室のすぐ隣に町立診療所の窓口が並ぶ温かな光景",
      description: "県境の難所・物見峠越えの要衝だった広い木造駅舎が、今も地域の医療と暮らしを支えている空間",
      badge: {
        code: "shuin_nagi_station_clinic_wooden",
        name_ja: "診療所と歩む木造駅舎の記憶を刻む旅人",
        subtitle_en: "Keeper of the Wooden Station Clinic Memory",
        description: "JR因美線 那岐駅で昭和七年築の木造駅舎と那岐診療所の営みに触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "旧那岐小学校の木造校舎を活かした『ナギノ森ノ宿』に漂う、智頭杉の薪ボイラーの香り",
      description: "閉校した学び舎と旧保育園舎が並ぶ土師川河畔で、森の恵みを循環させる湯処と売店に立ち寄るひと時",
      badge: {
        code: "shuin_nagi_naginomori_cedar_bath",
        name_ja: "木造校舎の湯煙と智頭杉の薫りを愛でる粋人",
        subtitle_en: "Lover of Cedar-Fired Bath and Wooden Schoolhouse",
        description: "ナギノ森ノ宿と旧那岐保育園舎で大背集落の学び舎再生の歩みに触れた証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "拝殿と本殿のあいだを因美線の単線レールが横切り、若草色の麒麟獅子舞を伝える『那岐神社』の杜",
      description: "秀峰・那岐山を御神体と仰ぐ巨杉の参道で、神域と鉄路が交差する稀有な風景に出会う瞬間",
      badge: {
        code: "shuin_nagi_shrine_rail_kirinshishi",
        name_ja: "本殿裏を駆ける鉄路と若草の獅子を識る探訪者",
        subtitle_en: "Explorer of the Shrine Crossing Rail and Green Kirin Lion",
        description: "那岐神社で境内を横切る因美線と若草色の麒麟獅子舞の伝承に触れた証",
        rarity: 4
      }
    },
    {
      key: "D",
      text: "『高貴山 極楽寺』の山門前で、百五十年ものあいだ右手を頬に添えて思索する「かんがえ地蔵」の横顔",
      description: "法道仙人開基と伝わる古刹の門前で、苔むした知恵のお地蔵様と並んで静かに耳を澄ます時間",
      badge: {
        code: "shuin_nagi_gokurakuji_kangae_jizo",
        name_ja: "百五十年の頬杖と知恵の地蔵に寄り添う参拝者",
        subtitle_en: "Pilgrim of the Contemplative Thinking Jizo",
        description: "高貴山 極楽寺でかんがえ地蔵と法道仙人開基の歴史に触れた証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "JR因美線 那岐駅（智頭町那岐診療所併設駅舎）",
      spot_type: "見どころ",
      description: "昭和7年（1932年）の因美線全通とともに建てられた木造平屋建ての駅舎。かつての広い駅事務室部分を活かし、現在は駅舎内に「智頭町那岐診療所」と地域サロン「元気な亭」が併設されている。",
      address: "鳥取県八頭郡智頭町大背116-2",
      prefecture: "鳥取県",
      city: "八頭郡智頭町",
      lat: 35.213651,
      lng: 134.210466,
      clue: "JR因美線の気動車を降りて『那岐駅』の木造駅舎へ入ると、使い込まれた木のベンチが並ぶ待合室のすぐ隣に「智頭町那岐診療所」の受付窓口が設けられている。昭和七年の開業当時、岡山県境の難所・物見峠を越える蒸気機関車の基地として多くの駅員が働いていた広い駅舎は、無人化後も取り壊されることなく地域の医療拠点として生まれ変わった。山あいの鉄路と人々の暮らしが一つの屋根の下で寄り添う温かな構内を見渡してみよう。",
      surprise: "かつては構内に給水塔や転車台も備えた峠越えの重要拠点であり、今も長いホームと広い構内敷地に蒸気機関車時代の面影が色濃く残っている。",
      hook: "診療所のある木造駅舎を出たら西南西へ徒歩9分。旧那岐小学校の木造校舎を活かした『ナギノ森ノ宿』へ向かおう。",
      image_prompt: "Soft gouache and colored pencil architectural partial sketch of the interior corner of a 1932 wooden country train station waiting room in Tottori, showing weathered wooden benches, retro wooden window frames overlooking mountain cedars, and a small warm frosted-glass clinic reception window next to the ticket wicket. Warm nostalgic lighting, no text."
    },
    {
      name: "ナギノ森ノ宿（神楽の湯・ナギノ森ノ店）",
      spot_type: "休憩",
      description: "閉校した旧・那岐小学校の木造校舎と敷地をリノベーションした複合交流施設。智頭杉の薪ボイラーで沸かす温浴施設「神楽の湯」や地元産品を扱う「ナギノ森ノ店」、那岐地区公民館（いざなぎ交流館）を備える（水曜定休、校舎外観・敷地は散策可）。",
      address: "鳥取県八頭郡智頭町大背205",
      prefecture: "鳥取県",
      city: "八頭郡智頭町",
      lat: 35.211944,
      lng: 134.205051,
      clue: "那岐駅から大背集落の道を西南西へ進むと、土師川のせせらぎの向こうに旧・那岐小学校の懐かしい木造校舎を活かした『ナギノ森ノ宿（神楽の湯・ナギノ森ノ店）』が現れる。智頭杉の間伐材チップを薪ボイラーで焚き上げるお風呂「神楽の湯」の煙突からはほのかに木の香りが漂い、校舎内の「ナギノ森ノ店」には地元の加工品や飲み物が並ぶ。地域の人々が集う公民館も兼ねた学び舎の軒先で、山里の穏やかな空気に触れよう。",
      surprise: "町の面積の九割以上を森林が占める智頭町ならではの取り組みとして、地元で伐採された杉材を燃料にお湯を沸かす地域循環型のボイラーが導入されている。",
      hook: "木造校舎の温もりに触れたら西北西へ徒歩4分。土師川沿いに佇む平屋建ての『那岐保育園（旧那岐保育園舎）』へ進もう。",
      image_prompt: "Cinematic watercolor illustration of the wooden entrance porch of a renovated retro elementary school in a mountain village, featuring warm cedar siding, a small bathhouse noren curtain fluttering in the breeze, and stacked local cedar firewood logs under the eaves. Soft dappled sunlight, no text."
    },
    {
      name: "那岐保育園（旧那岐保育園舎・大背の学び舎跡）",
      spot_type: "見どころ",
      description: "土師川河畔に残る旧・那岐保育園の平屋木造園舎（外観見学）。平成15年（2003年）の閉園後、平成27年（2015年）に野生菌によるパンとクラフトビールの醸造拠点として改修・活用され、那岐地区の遊休施設再生の先駆けとなった建物（現在店舗機能は智頭宿へ移転）。",
      address: "鳥取県八頭郡智頭町大背214",
      prefecture: "鳥取県",
      city: "八頭郡智頭町",
      lat: 35.212769,
      lng: 134.202414,
      clue: "ナギノ森ノ宿から土師川沿いを西北西へ進むと、平屋建ての『那岐保育園（旧那岐保育園舎）』が見える。閉園後に野生酵母のパンと麦酒の工房として再生された木造園舎の佇まいを眺めよう。",
      surprise: "小学校と保育園の木造建築が並んで残る大背の風景は、かつて林業と鉄道で賑わった山村の記憶と、古い学び舎を大切に使い継ぐ気風を今に伝えている。",
      hook: "旧園舎の前から谷あいの道を西へ徒歩12分。拝殿と本殿のあいだを因美線の線路が横切る『那岐神社』を訪ねよう。",
      image_prompt: "Pastel gouache and botanical watercolor illustration of a nostalgic single-story wooden former nursery school building nestled beside a clear mountain stream and wild ferns in Tottori, showing retro wooden eaves, a small chimney, and cedar-covered hills in the background. Gentle atmospheric style, no text."
    },
    {
      name: "那岐神社",
      spot_type: "見どころ",
      description: "伊邪那岐命・伊邪那美命を主祭神とし、背後の那岐山を御神体として祀る古社。石段上の拝殿と本殿のあいだをJR因美線の線路が横切る珍しい構造を持ち、秋の例大祭では若草色の頭を持つ麒麟獅子舞が奉納される。",
      address: "鳥取県八頭郡智頭町大背708",
      prefecture: "鳥取県",
      city: "八頭郡智頭町",
      lat: 35.213563,
      lng: 134.194362,
      clue: "旧園舎から大背の集落を西へ抜けると、鬱蒼とした巨杉の杜に守られた『那岐神社』の石鳥居が見えてくる。国生みの神である伊邪那岐命・伊邪那美命を祀り、南にそびえる秀峰・那岐山そのものを神体山と仰いできた古社だが、石段を上った先の拝殿と本殿のすぐ背後のあいだをJR因美線の単線レールが横切っていることに驚かされる。神域の静寂と鉄路が交差する全国でも稀有な社殿の前に立ち、千年の山の信仰に思いを馳せよう。",
      surprise: "因幡地方に伝わる麒麟獅子舞の獅子頭は通常鮮やかな朱色だが、那岐神社に伝わる麒麟獅子は山の若葉を思わせる珍しい「若草色（緑色）」をしている。",
      hook: "線路が横切る古社に参拝したら南南西へ徒歩3分。山門の前で小さなお地蔵様が頬杖をつく『高貴山 極楽寺』で散策を結ぼう。",
      image_prompt: "Sumi-ink and mineral pigment wash (tansai) illustration of an ancient mossy stone torii and cedar-lined shrine approach in Tottori, where a single rusted railway track quietly crosses through the dappled forest light just behind the wooden worship hall. Mystical, serene atmosphere, no text."
    },
    {
      name: "高貴山 極楽寺（かんがえ地蔵）",
      spot_type: "見どころ",
      description: "大化2年（646年）に法道仙人が開基し、貞観年間に弘法大師の法弟・真雅僧正が逗留したと伝わる高野山真言宗の古刹（因幡薬師霊場第20番札所）。山門前に約150年前から鎮座する「かんがえ地蔵」で知られる。",
      address: "鳥取県八頭郡智頭町大背860",
      prefecture: "鳥取県",
      city: "八頭郡智頭町",
      lat: 35.211927,
      lng: 134.193551,
      clue: "那岐神社の鳥居から南南西へ少し歩くと、大化二年に法道仙人が開いたと伝わる古刹『高貴山 極楽寺』の山門に行き着く。その門前で旅人を迎えてくれるのが、台座の上で右手をそっと頬に当て、静かに思索にふける石仏「かんがえ地蔵」だ。江戸末期から百五十年ものあいだ、村人の悩みや願いに耳を傾ける「知恵のお地蔵さん」として愛されてきた穏やかな表情と向き合いながら、那岐山麓の集落をたどった歩みを静かに結ぼう。",
      surprise: "思惟（しい）像の系譜をひく如意輪観音石仏が地元で「かんがえ地蔵さん」と呼び親しまれるようになったもので、境内裏手には法道仙人を偲ぶ開基塚も残されている。",
      hook: "",
      image_prompt: "Delicate transparent watercolor and ink sketch of a moss-dappled stone Jizo statue resting its cheek thoughtfully on one hand (thinking pose) beside a weathered wooden temple gate in a quiet mountain village, surrounded by autumn leaves and soft mountain mist. Poetic margin space, no text."
    }
  ]
};
