export default {
  slug: 'hizen_kashima',
  station_order: 599,
  station: '肥前鹿島駅',
  line: 'JR長崎本線',
  area_name: '肥前鹿島・城下町と発酵文化の街',
  prefecture: '佐賀県',
  municipality: '鹿島市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['佐賀県', '鹿島市', '肥前鹿島駅', '松蔭神社', '丸房露'],
  style_genre: 'pastel_chalk_morning',
  title: '鹿島城下の杜と発酵銘菓の香りを巡る',
  description:
    '多良岳山系から湧き出る豊かな伏流水に恵まれ、鹿島藩二万石の城下町および酒蔵と発酵のまちとして栄えてきた佐賀県鹿島市。旧城内の鎮守から、大正創業の老舗割烹の昼食、歴史ある寺院、白壁カフェの寛ぎを経て、醤油麹やみりんを活かした老舗の郷土銘菓までを巡る。',
  eyecatch_prompt:
    'Poetic morning-mist soft pastel and colored pencil illustration of Hizen-Kashima historic castle town in Saga, vermilion shrine torii beneath ancient pines, traditional white-walled merchant eaves, and soft golden dawn light on natural textured cream paper, no text, no people.',
  question:
    '豊かな水と城下の歴史が息づく肥前鹿島で、あなたの五感を優しく満たしたのはどれでしょうか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '鹿島城跡の一角に鎮座する「松蔭神社」の静かな杜を歩いたとき',
      subtext:
        '歴代鹿島藩主を祀る歴史の重みと、旭ヶ岡の緑深い静寂に心がすっと整うのを感じた。',
      badge: {
        code: 'hizen_kashima_shoin_shrine',
        name_ja: '鹿島城跡・松蔭神社の参拝者',
        subtitle_en: 'Pilgrim of Kashima Shoin Shrine',
        description:
          '鹿島藩主を祀る松蔭神社を参拝し、旭ヶ岡の城下町の歴史に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a vermilion shrine torii gate framed by cherry blossom branches and pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 5,
      text: '老舗「赤門堂」で、醤油麹やみりんを隠し味に使った名物「兄弟ぼうろ」を手にしたとき',
      subtext:
        '酒どころ・発酵のまち鹿島ならではの伝統が、素朴な焼き菓子の奥深い風味に活かされていて驚いた。',
      badge: {
        code: 'hizen_kashima_akamondo',
        name_ja: '赤門堂・鹿島発酵銘菓の語り部',
        subtitle_en: 'Patron of Akamondo Sweets',
        description:
          '老舗和菓子店・赤門堂を訪ね、鹿島の発酵文化が息づく伝統銘菓を味わった証。',
        rarity: 4,
        image_prompt:
          'A circular emblem featuring round golden-brown baked marubolo biscuits arranged on a woven bamboo plate beside a teacup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '百余年続く老舗「割烹 清川」で、地元の旬を活かした昼定食を味わったとき',
      subtext:
        '有明海や多良岳の恵みを取り入れた丁寧な料理と、百余年続く割烹の落ち着いた空気に満たされた。',
      badge: {
        code: 'hizen_kashima_kiyokawa',
        name_ja: '肥前鹿島・老舗割烹の味を嗜みし者',
        subtitle_en: 'Guest of Kappo Kiyokawa',
        description:
          '百余年続く割烹 清川を訪ね、鹿島の地元食材を活かした丁寧な和の昼食を堪能した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a warm wooden Japanese lunch tray with grilled seasonal fish, rice bowl, and small side dishes, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 4,
      text: '白い壁が印象的な「Rana Cafe」で、こだわりの珈琲とスイーツで一息ついたとき',
      subtext:
        '城下町の歴史を歩いたあとに、洗練されたカフェ空間で味わう穏やかな時間が心地よかった。',
      badge: {
        code: 'hizen_kashima_rana_cafe',
        name_ja: '肥前鹿島・白壁カフェの寛ぎ人',
        subtitle_en: 'Visitor of Rana Cafe Kashima',
        description:
          'Rana Cafeを訪ね、肥前鹿島の穏やかな空気の中で珈琲とスイーツの休憩を楽しんだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a dark ceramic coffee cup and a slice of rich chocolate gateau on a bright white cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'hizen_kashima_complete',
    name_ja: '肥前鹿島・城下と発酵のまちを歩みし者',
    subtitle_en: 'Walker of Hizen-Kashima Castle Town',
    description:
      '松蔭神社から割烹 清川、浄林寺、Rana Cafe、赤門堂までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a castle shrine torii, a historic temple roof, and golden baked marubolo sweets, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '松蔭神社',
      spot_type: '見どころ',
      description:
        '鹿島城跡（旭ヶ岡公園）の一角に鎮座し、歴代鹿島藩主を祀る神社。桜の名所としても知られ、城下町の歴史を今に伝える。境内参拝自由。',
      address: '佐賀県鹿島市大字高津原460',
      prefecture: '佐賀県',
      city: '鹿島市',
      lat: 33.102838,
      lng: 130.092852,
      clue: 'JR肥前鹿島駅を出て東側の旧城内へと歩を進めると、桜や楠の木立に抱かれた「松蔭神社」の鳥居が見えてくる（境内参拝自由）。かつて鍋島氏支藩・鹿島藩二万石の居城があった鹿島城跡（旭ヶ岡公園）の一角に鎮座し、歴代の藩主たちを祀る由緒ある神社だ。城郭の石垣や堀の名残が周辺に残る静かな杜の中で、城下町の往時にここでじっくりと深く思いをはせながら、旅の最初のしるしを力強く刻み出そう。',
      surprise:
        '鹿島城跡の正門である丹塗りの「赤門」や「大手門」は県の重要文化財に指定されており、明治初期の佐賀の乱で本丸の多くを焼失しながらも、今も城下町の威容を伝える貴重な歴史遺産として地域の人々に代々途切れることなくずっと変わらず大切に守られ続けている。',
      hook: '松蔭神社を参拝したら、北へ徒歩12分の割烹 清川へ向かおう。',
      f7_fragment: '鹿島城跡の緑に包まれた松蔭神社、藩主の記憶を伝える鎮守の杜。',
      f7_full: '鹿島城跡（旭ヶ岡公園）に鎮座する松蔭神社を訪ね、二万石の城下町が歩んだ歴史と静寂の原点にじっくりと深く触れた。',
      image_prompt:
        'Wide morning view of a peaceful Shinto shrine courtyard beside old stone castle ruins, framed by ancient pine trees and soft spring sunlight in Kashima, no text, no people.',
    },
    {
      name: '割烹 清川',
      spot_type: '食事',
      description:
        '百余年の歴史を誇る老舗割烹。館内の「創作料理 樂亭」などで、地元の旬を活かした日替り定食や御膳ランチを味わえる。ランチ11:00〜14:00（月〜土）、不定休。',
      address: '佐賀県鹿島市大字高津原3590',
      prefecture: '佐賀県',
      city: '鹿島市',
      lat: 33.10944,
      lng: 130.093756,
      clue: '松蔭神社から北へ徒歩12分、高津原の「割烹 清川」で昼食にしよう（ランチ11:00〜14:00・月〜土、不定休）。旬の日替り御膳を味わい、ひと息つこう。',
      surprise:
        '多良岳の山々から有明海へと注ぐ肥沃な土地に恵まれた鹿島は、お米や野菜、そして干潟の海の幸まで四季折々の豊かな食材の宝庫だ。百余年にわたり迎賓の場としても親しまれてきた老舗の膳に、豊かな風土の恵みが惜しみなく鮮やかに見事に映し出された。',
      hook: '清川で温かな昼食を済ませたら、西南西へ徒歩3分の浄林寺を訪ねよう。',
      f7_fragment: '百余年続く老舗割烹で味わう、有明海と多良岳の旬を盛り付けた膳。',
      f7_full: '百余年の歴史を誇る老舗「割烹 清川」で鹿島の旬を活かした昼定食を味わい、丁寧な和のもてなしに心から深く触れた。',
      image_prompt:
        'Medium-wide interior view of a refined traditional Japanese restaurant dining room with a seasonal lunch set tray, grilled fish, steamed rice, and small bowls, no text, no people.',
    },
    {
      name: '浄林寺',
      spot_type: '見どころ',
      description:
        '高津原の街なかに佇む歴史ある寺院。落ち着いた瓦屋根の本堂と手入れされた境内が城下町の静寂を伝えている。境内散策自由。',
      address: '佐賀県鹿島市大字高津原862',
      prefecture: '佐賀県',
      city: '鹿島市',
      lat: 33.108808,
      lng: 130.091938,
      clue: '清川から西南西へ徒歩3分、高津原の落ち着いた一画に伽藍を構える「浄林寺」を訪ねよう（境内散策自由）。かつて城下町として整備された町割りのなかにあり、周囲の暮らしに溶け込むように佇む歴史ある寺院だ。重厚な瓦屋根を載せた本堂と、静かに時を刻む境内の木々をじっくりと眺めながら、肥前鹿島の人々が代々大切に守り続けてきた穏やかな祈りの風景にここでそっと静かに心を傾けてみようか。',
      surprise:
        '鹿島市街地は往時に城下町と宿場町、そして長崎街道の脇往還の拠点として発展した歴史を持ち、歴史ある社寺が町並みの節目ごとに大切に配置されている。街歩きの途中に現れる静かな寺院の佇まいが、旅人の歩調を自然と穏やかに緩めてくれると古くから伝わる。',
      hook: '浄林寺を後にしたら、北北西へ徒歩6分のRana Cafeで珈琲を一服しよう。',
      f7_fragment: '高津原の町並みに寄り添う重厚な瓦屋根の本堂と、静謐な境内の木陰。',
      f7_full: '城下町の面影が色濃く残る高津原の浄林寺を訪ね、地域の暮らしと共にある穏やかな祈りの静寂にじっくり心から触れた。',
      image_prompt:
        'Top-down flatlay detail of weathered temple courtyard gravel, moss-edged stepping stones, and fallen green camellia leaves in quiet afternoon light, no text, no people.',
    },
    {
      name: 'Rana Cafe',
      spot_type: '休憩',
      description:
        '白い壁が目を引くスタイリッシュなカフェ。香り高い珈琲や自家製ガトーショコラなどのスイーツが人気。営業時間11:30〜16:00・18:00〜22:00、日曜・第1・3月曜定休。',
      address: '佐賀県鹿島市高津原3751-5',
      prefecture: '佐賀県',
      city: '鹿島市',
      lat: 33.111907,
      lng: 130.090681,
      clue: '浄林寺から北北西へ徒歩6分、真っ白な外壁が爽やかな印象を与える「Rana Cafe（ラーナカフェ）」で足を休めよう（11:30〜16:00・18:00〜22:00、日曜・第1・3月曜定休）。明るく洗練された店内では、丁寧に淹れられた珈琲や濃厚なガトーショコラなどの手作りスイーツをゆっくり味わうことができる。城下町の歴史散策の合間に、心地よい音楽と甘い香りに包まれて一息つこう。',
      surprise:
        '歴史ある酒蔵や老舗が点在する鹿島市において、若い世代や旅人たちが気軽に集える現代的なカフェ空間として幅広く親しまれる。昔ながらの城下町の町並みと新しい感性が心地よく調和する、今の鹿島の穏やかで温かな空気をそのまま間近にじっくり感じられる一軒だ。',
      hook: 'Rana Cafeで寛いだら、東へ徒歩7分の赤門堂でお土産を選ぼう。',
      f7_fragment: '白い壁の空間に広がる珈琲の香りと、手作りガトーショコラの甘み。',
      f7_full: '高津原の「Rana Cafe」で香り高い珈琲と手作りスイーツを楽しみ、城下町歩きの合間に心地よくゆったり一息ついた。',
      image_prompt:
        'Low-angle interior view of a bright white-walled modern Japanese cafe with a ceramic coffee cup and rich chocolate cake slice on a sunlit wooden table, no text, no people.',
    },
    {
      name: '赤門堂',
      spot_type: '買い物',
      description:
        '発酵のまち鹿島ならではの醤油麹やみりんを隠し味に用いた「兄弟ぼうろ」や「丸房露」を手がける老舗和菓子店。営業時間9:00〜18:00、不定休。',
      address: '佐賀県鹿島市高津原4305-6',
      prefecture: '佐賀県',
      city: '鹿島市',
      lat: 33.111693,
      lng: 130.095328,
      clue: 'Rana Cafeから東へ徒歩7分、鹿島城の赤門にちなんだ屋号を持つ老舗「赤門堂」へ足を運ぼう（9:00〜18:00、不定休）。看板銘菓の「兄弟ぼうろ」は、酒や醤油の醸造が盛んな鹿島の発酵文化を受け継ぎ、生地の隠し味に醤油こうじやみりんを練り込んで焼き上げた逸品だ。香ばしく素朴な甘みの焼き菓子や季節の和菓子を手土産に選び取り、肥前鹿島の城下町の旅を美しく締めくくろう。',
      surprise:
        '多良岳の清らかな伏流水に恵まれた鹿島市は、江戸時代から酒造りや味噌・醤油の醸造業が栄えた「発酵のまち」として知られる。その土地ならではの醸造の恵みを菓子づくりへと昇華させたのが、この街の誇りある銘菓として世代を超えて今もずっと愛され続ける。',
      hook: '',
      f7_fragment: '醤油こうじとみりんが香る伝統の丸房露、鹿島の発酵文化が生んだ銘菓。',
      f7_full: '老舗和菓子店・赤門堂で発酵の知恵を活かした郷土銘菓を手に取り、肥前鹿島の城下町を巡る旅を美しく心から締めくくった。',
      image_prompt:
        'Golden-hour view of a traditional Japanese confectionery wooden counter displaying round golden-brown baked marubolo biscuits with NO stamped letters or kanji, no text, no people.',
    },
  ],
};
