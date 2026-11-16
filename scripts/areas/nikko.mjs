export default {
  slug: 'nikko',
  station_order: 666,
  station: '日光',
  line: 'JR日光線',
  area_name: '日光・世界遺産の社寺と杉並木',
  prefecture: '栃木県',
  municipality: '日光市',
  category: '歴史と寺社',
  budget_tier: 3,
  tags: ['栃木県', '日光市', '日光駅', '世界遺産', '東照宮'],
  style_genre: 'ukiyo_e_modern',
  title: '日光・朱塗りの神橋から東照宮と二荒山へ',
  description:
    'JR日光駅から、大谷川に架かる美しい朱塗りの「神橋」、天台宗の古刹「日光山 輪王寺」、徳川家康公を祀る豪華絢爛な「日光東照宮」、日光の総鎮守「日光二荒山神社」、古民家で味わう「日光珈琲 御用邸通」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Nikko showing the curved vermilion Shinkyo Bridge arching over clear blue mountain river water, the ornate gold and lacquer Yomeimon Gate of Toshogu Shrine nestled among towering ancient cedar trees, and a warm wooden machiya cafe along Goyotei street, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '清流に架かる朱塗りの橋と杉木立の世界遺産、御用邸通の珈琲を巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「神橋」の鮮やかな朱塗りの欄干と、大谷川の清流が織りなす風景を望んだ瞬間',
      subtext:
        '日光山内への入り口を告げる美しい橋の姿に、これから始まる聖域の旅へ背筋が伸びた。',
      badge: {
        code: 'nikko_shinkyo',
        name_ja: '日光・朱塗りの神橋を望みし者',
        subtitle_en: 'Viewer of Shinkyo Bridge',
        description:
          '神橋を訪ね、大谷川に架かる世界遺産の朱塗りの木造橋を望んだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting the graceful arched vermilion wooden Shinkyo Bridge spanning rushing turquoise mountain river water beneath green maple leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「日光山 輪王寺」の壮大な三佛堂で、金色の御本尊に静かに向き合った瞬間',
      subtext:
        '奈良時代に開かれた日光山信仰の原点に触れ、歴史の重みと静謐な空気に包まれた。',
      badge: {
        code: 'nikko_rinnoji',
        name_ja: '日光・輪王寺の古刹に祈りし者',
        subtitle_en: 'Visitor of Rinno-ji Temple',
        description:
          '日光山 輪王寺を訪ね、日光開山の歴史を伝える壮麗な三佛堂を拝観した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting the grand dark-timbered and vermilion roof of Rinno-ji Sanbutsudo Hall framed by tall cedar trunks, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「日光東照宮」の陽明門の前に立ち、精緻を極めた極彩色の彫刻に見入った瞬間',
      subtext:
        '江戸時代初期の職人の技と美意識が結晶した門の輝きに、思わず時間を忘れた。',
      badge: {
        code: 'nikko_toshogu',
        name_ja: '日光・東照宮の陽明門を仰ぎし者',
        subtitle_en: 'Visitor of Nikko Toshogu Shrine',
        description:
          '日光東照宮を訪ね、極彩色の陽明門をはじめとする世界遺産の社殿群を拝観した証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the ornate gold, white, and black lacquered Yomeimon Gate with intricate carvings nestled among deep green cedars, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「日光珈琲 御用邸通」で、古民家の温もりに包まれながら珈琲を味わった瞬間',
      subtext:
        '杉並木の余韻を感じながらいただく自家焙煎の一杯が、日光の旅を心地よく結んでくれた。',
      badge: {
        code: 'nikko_coffee',
        name_ja: '日光・御用邸通の珈琲を味わいし者',
        subtitle_en: 'Guest of Nikko Coffee Goyotei-dori',
        description:
          '日光珈琲 御用邸通を訪ね、歴史ある古民家の空間で自家焙煎珈琲を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a warm porcelain coffee cup on a weathered wooden machiya table beside a paper lantern and garden view, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'nikko_complete',
    name_ja: '日光・世界遺産の社寺を巡る旅人',
    subtitle_en: 'Walker of Nikko',
    description:
      '神橋から日光山 輪王寺、日光東照宮、日光二荒山神社、日光珈琲 御用邸通までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the arched vermilion Shinkyo Bridge, the ornate Yomeimon Gate, and towering cedar trees, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '神橋',
      spot_type: '見どころ',
      description:
        '日光山内の入り口、大谷川の清流に架かる朱塗りの木造橋で世界遺産。奈良時代に勝道上人が山を開いた際の伝説に由来する。4〜10月8:30〜16:00（11〜3月9:30〜15:00）、渡橋料大人300円。',
      address: '栃木県日光市上鉢石町1300',
      prefecture: '栃木県',
      municipality: '日光市',
      lat: 36.75268,
      lng: 139.601345,
      clue: '日光山内の入り口、大谷川の清流に美しい弧を描く「神橋」から世界遺産の旅を始めよう（4〜10月8:30〜16:00・冬期9:30〜15:00、渡橋料大人300円）。奈良時代に勝道上人が日光を開いた際の伝説に由来し、日本三大奇橋のひとつにも数えられる朱塗りの木造橋だ。深い緑と清らかな川面に鮮やかに映えるその姿を眺めながら、千年の聖域への歩みをこれからも清々しく踏み出したい。',
      surprise:
        '橋脚は石造りの鳥居のような構造になっており、朱塗りの欄干と擬宝珠、そして渓谷の四季が織りなす風景は日光の玄関口を象徴しています。',
      hook: '神橋の眺めを心に刻んだら、北西の長坂を上り日光山 輪王寺へ参拝しよう。',
      f7_fragment: '大谷川に架かる朱塗りの木造橋、日光山内の入り口を告げる世界遺産。',
      f7_full:
        '「神橋」の鮮やかな朱塗りの欄干と大谷川の清流を望み、日光の聖域へ足を踏み入れた。',
      image_prompt:
        'Scenic modern ukiyo-e illustration of Shinkyo Bridge in Nikko, graceful curved vermilion wooden bridge spanning rushing turquoise Daiya River between mossy rocky banks and forest trees, morning light, no text, no letters.',
    },
    {
      name: '日光山 輪王寺',
      spot_type: '見どころ',
      description:
        '天平神護2年（766年）に勝道上人によって開かれた日光山信仰の総本山。三体の大仏を祀る三佛堂や大猷院などが世界遺産に登録。8:00〜17:00（11〜3月〜16:00）、三佛堂400円。',
      address: '栃木県日光市山内2300',
      prefecture: '栃木県',
      municipality: '日光市',
      lat: 36.756384,
      lng: 139.598257,
      clue: '奈良時代に勝道上人が開いた日光山信仰の原点「日光山 輪王寺」へ参拝しよう（8:00〜17:00・冬期〜16:00、三佛堂大人400円・小中学生200円）。世界遺産に登録された境内には日光山最大の木造建築・三佛堂がそびえ、堂内には千手観音・阿弥陀如来・馬頭観音の三体の大仏が静かに鎮座する。杉木立の厳かな空気に包まれながら、千二百年を超える祈りの歴史をこれからも深く仰ぎ見たい。',
      surprise:
        '三佛堂の前面には樹齢約500年とされる国の天然記念物「金剛桜」が立ち、春の遅い日光の山内に気品ある白い花を咲かせます。',
      hook: '古刹の祈りに触れたら、東北東の表参道を進み日光東照宮へ向かおう。',
      f7_fragment: '奈良時代開山の日光山総本山、三体の大仏を祀る壮大な三佛堂が名高い。',
      f7_full:
        '「日光山 輪王寺」の壮大な三佛堂で金色の御本尊に向き合い、日光山信仰の原点に触れた。',
      image_prompt:
        'Dignified Japanese Buddhist temple illustration of Nikkozan Rinno-ji Sanbutsudo Hall, massive dark wood and vermilion hall framed by towering cedar trees and stone steps, tranquil morning atmosphere, no text, no letters.',
    },
    {
      name: '日光東照宮',
      spot_type: '見どころ',
      description:
        '江戸幕府初代将軍・徳川家康公を祀る世界遺産の神社。陽明門や眠り猫、三猿など江戸初期の豪華絢爛な彫刻が杉木立に輝く。9:00〜17:00（11〜3月〜16:00）、大人1600円。',
      address: '栃木県日光市山内2301',
      prefecture: '栃木県',
      municipality: '日光市',
      lat: 36.757037,
      lng: 139.599736,
      clue: '徳川家康公を祀る「日光東照宮」へ参拝しよう（9:00〜17:00・冬期〜16:00、大人1600円）。陽明門の極彩色の彫刻と杉木立が織りなす荘厳な美しさを堪能したい。',
      surprise:
        '陽明門の柱のうち一本だけは「魔除けの逆柱」としてあえて彫刻の文様が逆さまに彫られており、建物の完成を祝うと同時に永続を願う知恵が込められています。',
      hook: '陽明門の輝きを仰いだら、西へすぐの上新道を通って日光二荒山神社へ向かおう。',
      f7_fragment: '徳川家康公を祀る世界遺産、陽明門や三猿など極彩色の彫刻が圧巻。',
      f7_full:
        '「日光東照宮」の陽明門の前に立ち、江戸初期の粋を集めた極彩色の彫刻に見入った。',
      image_prompt:
        'Ornate Japanese shrine illustration of Yomeimon Gate at Nikko Toshogu, dazzling white, gold, and black lacquer gate adorned with intricate dragon and floral carvings nestled beneath giant ancient cedar trees, no text, no letters.',
    },
    {
      name: '日光二荒山神社',
      spot_type: '見どころ',
      description:
        '男体山を御神体山と仰ぎ、日光開山以来の厚い信仰を集める下野国一之宮で世界遺産。縁結びや開運の社として親しまれる。8:00〜17:00（11〜3月9:00〜16:00）、境内無料（神苑500円）。',
      address: '栃木県日光市山内2307',
      prefecture: '栃木県',
      municipality: '日光市',
      lat: 36.758487,
      lng: 139.596984,
      clue: '霊峰・男体山を御神体山と仰ぐ下野国一之宮「日光二荒山神社」を訪ねよう（8:00〜17:00・冬期〜16:00、境内無料・神苑大人500円）。日光東照宮よりはるかに古い奈良時代の創建と伝わり、世界遺産の日光の社寺の中核をなす古社だ。朱塗りの拝殿や樹齢数百年の御神木が静かに息づく神苑を歩きながら、日光の雄大な自然そのものを敬う悠久の信仰をこれからも胸の奥にたっぷりと深く刻みたい。',
      surprise:
        '境内の一角にある「二荒霊泉」は知恵の水・若水・酒の泉からなり、日光の清らかな山の恵みを今に伝える霊水として親しまれています。',
      hook: '古社の静寂に包まれたら、南南西の御用邸通へ下り日光珈琲でひと息つこう。',
      f7_fragment: '男体山を御神体と仰ぐ下野国一之宮、御神木と霊泉が息づく世界遺産。',
      f7_full:
        '「日光二荒山神社」の朱塗りの社殿と御神木を拝観し、日光開山からの自然信仰に触れた。',
      image_prompt:
        'Sacred Japanese shrine illustration of Nikko Futarasan Shrine, vermilion wooden main hall beneath towering ancient cedar trees, mossy stone lanterns and serene mountain forest air, no text, no letters.',
    },
    {
      name: '日光珈琲 御用邸通',
      spot_type: '休憩',
      description:
        '日光田母沢御用邸記念公園へ向かう歴史ある通りに佇む古民家カフェ。築80年以上の商家を改装した空間で自家焙煎珈琲やガレットを味わえる。10:00〜18:00（L.O.17:00）、月曜・第1・3火曜休。',
      address: '栃木県日光市本町3-13',
      prefecture: '栃木県',
      municipality: '日光市',
      lat: 36.753193,
      lng: 139.595298,
      clue: '社寺の杜から御用邸通へ抜け、築八十年以上の古民家を改装した「日光珈琲 御用邸通」で旅を締めくくろう（10:00〜18:00・月曜、第1・3火曜休）。木の温もりあふれる落ち着いた店内では、こだわりの自家焙煎珈琲や地元食材を使ったガレット、通年味わえる日光の天然氷かき氷が楽しめる。世界遺産を巡ったあとの心地よい疲れを優しく癒やしながら、日光の余韻をこれからも大切に結びたい。',
      surprise:
        '日光の冬の厳しい寒さが育む天然氷を使ったかき氷や、鹿沼・今市エリアに広がる日光珈琲ならではの穏やかなもてなしが旅人に人気です。',
      hook: '',
      f7_fragment: '御用邸通の古民家カフェ、自家焙煎珈琲や天然氷のかき氷が味わえる。',
      f7_full:
        '「日光珈琲 御用邸通」の古民家で自家焙煎珈琲を味わい、世界遺産散策の余韻を結んだ。',
      image_prompt:
        'Warm nostalgic machiya cafe illustration of Nikko Coffee Goyotei-dori, dark wooden lattice townhouse interior with warm amber lights, ceramic pour-over coffee cup and quiet view of a mossy garden, no text, no letters.',
    },
  ],
};
