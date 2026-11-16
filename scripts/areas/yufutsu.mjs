export default {
  slug: 'yufutsu',
  station_order: 897,
  station: '勇払',
  line: 'JR日高本線',
  area_name: '勇払・千人同心の記憶と港',
  prefecture: '北海道',
  municipality: '苫小牧市',
  category: '開拓史跡と港湾散歩',
  budget_tier: 2,
  tags: ['北海道', '苫小牧市', '勇払駅', '八王子千人同心', 'マリーナ'],
  style_genre: 'ink_and_watercolor',
  title: '勇払・八王子千人同心の記憶と港を巡る旅',
  description:
    '大正二年開業の歴史を持つ「JR勇払駅」から、市指定文化財を伝える「勇払恵比須神社」、八王子千人同心の歩みを紹介する「勇武津資料館」、地元人気の「麺商 三春商店」、「苫小牧港勇払マリーナ」を巡るルート。',
  eyecatch_prompt:
    'Editorial ink and warm watercolor horizontal panorama of Yufutsu historic Hokkaido coastal town from quiet railway station and Edo-era pioneer memorial museum to steaming ramen bowl and sunlit yacht marina harbor, full bleed, no text, no letters.',
  question: 'JR勇払駅から千人同心の史跡や市指定文化財の神社、港のマリーナへと歩くなかで、誰かに語りたくなるのはどれだろうか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '嘉永三年銘の元弁天社御宮形など市指定文化財を伝える「勇払恵比須神社」',
      subtext: '18世紀中頃の弁天社を前身とし、航海安全と商売繁昌を見守り続けてきた勇払の古社。',
      badge: {
        code: 'yufutsu_ebisu',
        name_ja: '勇払・古社の灯籠参拝',
        subtitle_en: 'Historic Lantern Shrine Visitor',
        description: '市指定文化財の奉納品が伝わる勇払恵比須神社に参拝した証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting weathered Edo-period stone lanterns beside a wooden torii gate, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '寛政十二年に移住した八王子千人同心の足跡を学ぶ「勇武津資料館」',
      subtext: '北方警備と開拓に向かった千人同心の歴史資料や隣接公園の同心像に胸を打たれた。',
      badge: {
        code: 'yufutsu_museum',
        name_ja: '勇払・千人同心の記録',
        subtitle_en: 'Hachioji Pioneer Historian',
        description: '勇武津資料館で八王子千人同心の歴史を学んだ証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a bronze Edo pioneer samurai statue beside a timber local history museum, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '勇払の街でこだわりの一杯を提供する人気店「麺商 三春商店」',
      subtext: '地元客に愛されるラーメン店で、こだわりのスープと麺の美味しさに満たされた。',
      badge: {
        code: 'yufutsu_miharu',
        name_ja: '勇払・三春商店の一杯',
        subtitle_en: 'Ramen Enthusiast of Miharu',
        description: '麺商 三春商店でこだわりの一杯を味わった証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting a steaming ceramic bowl of rich Hokkaido ramen noodles, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: 'ヨットやクルーザーが並ぶ爽やかな「苫小牧港勇払マリーナ」',
      subtext: '勇払地区の南端に広がる公共マリーナ兼「とまこまい海の駅」の港湾景観が爽快だった。',
      badge: {
        code: 'yufutsu_marina',
        name_ja: '勇払・海の駅マリーナ',
        subtitle_en: 'Yufutsu Marina Walker',
        description: '苫小牧港勇払マリーナ（とまこまい海の駅）を訪ねた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting white sailboats moored along sparkling harbor waters, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'yufutsu_complete',
    name_ja: '勇払・千人同心の開拓史を巡りし者',
    subtitle_en: 'Explorer of Historic Yufutsu',
    description: 'JR勇払駅から勇払恵比須神社、勇武津資料館、麺商 三春商店、苫小牧港勇払マリーナまでを巡った証',
    image_prompt:
      'A circular emblem combining coastal railway station, Edo pioneer stone lantern, steaming ramen bowl and white sailboat in marina harbor, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR勇払駅',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '1913年（大正2年）10月1日、苫小牧軽便鉄道の駅として開業、1962年苫小牧西港建設に伴う線路付け替えで現在地へ移転（終日開放・無料）。日高本線の歴史を伝える無人駅。',
      address: '北海道苫小牧市字勇払142-26',
      lat: 42.632093,
      lng: 141.727854,
      clue:
        '大正二年十月に苫小牧軽便鉄道の駅として開業し、昭和三十七年に苫小牧西港の建設に伴う線路付け替えで現在地へ移された「JR勇払駅」から街歩きと散策を始めよう（終日利用可）。海風をほのかに感じる静かな無人駅のホームをゆっくりと後にしたら、まずは駅からすぐ北側へ歩いて向かい、江戸時代から航海安全を見守り続けてきた市指定文化財の古社「勇払恵比須神社」へとさっそく元気に歩いて向かおう。',
      surprise: '港の建設に合わせて路線ごと付け替えられたという勇払駅の歴史に、臨海都市・苫小牧のダイナミズムを感じた。',
      hook: 'JR勇払駅を出たら、すぐ近くの「勇払恵比須神社」へ向かおう。',
      f7_fragment: '大正二年苫小牧軽便鉄道として開業し、西港建設で現在地へ移転した駅。',
      f7_full: '「JR勇払駅」に降り立ち、八王子千人同心の歴史と港を巡る旅を始めた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Yufutsu Station modest coastal railway station building beneath bright Pacific sky, no text, no letters.',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '勇払恵比須神社',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '18世紀中頃の弁天社を前身とし、1952年現社号へ改称（終日参拝自由・無料）。嘉永3年（1850年）銘の元弁天社御宮形や扁額など奉納品21点が苫小牧市指定有形民俗文化財に指定されている。',
      address: '北海道苫小牧市字勇払138-1',
      lat: 42.634718,
      lng: 141.727354,
      clue:
        '十八世紀中頃の弁天社を前身とする「勇払恵比須神社」へ参拝しよう（終日自由）。嘉永三年銘の元弁天社御宮形など奉納品二十一点が市指定文化財に輝く古社だ。次は「勇武津資料館」へ。',
      surprise: '嘉永三年銘の元弁天社御宮形をはじめ江戸期からの奉納品が大切に伝えられており、古くからの海の要衝の重みを実感した。',
      hook: '勇払恵比須神社に参拝したら、勇払開拓史跡公園内の「勇武津資料館」へ向かおう。',
      f7_fragment: '嘉永三年銘の元弁天社御宮形など二十一点の市指定有形民俗文化財を伝える古社。',
      f7_full: '「勇払恵比須神社」の境内に立ち、江戸期から続く海上交易の祈りに触れた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Yufutsu Ebisu Shrine weathered Edo-period stone lanterns beside wooden torii gate, no text, no letters.',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '勇武津資料館',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '1800年（寛政12年）に北方警備と開拓のため移住した「八王子千人同心」の歴史や勇払の歩みを展示（10:00〜17:00、月曜・年末年始休、入館無料）。隣接公園に同心像・墓石群がある。',
      address: '北海道苫小牧市字勇払132-32',
      lat: 42.631049,
      lng: 141.734031,
      clue:
        '勇払開拓史跡公園内に佇む「勇武津資料館」で、この地の知られざる開拓史をじっくり学ぼう（10:00〜17:00、月曜等休、入館無料）。寛政十二年に北方警備と開拓を志して江戸・八王子から遠い北の大地へ移り住んだ「八王子千人同心」の苦難と功績を伝える貴重な展示や、隣接公園の同心像・墓石群には思わず胸が熱くなる。歴史を深く学んだら、人気店「麺商 三春商店」へと歩いて向かおう。',
      surprise: '江戸時代末期に八王子千人同心が遠い北海道の勇払へ渡り、開拓の礎を築いた物語に深く心を揺さぶられた。',
      hook: '勇武津資料館で歴史に触れたら、人気のラーメン店「麺商 三春商店」へ向かおう。',
      f7_fragment: '寛政十二年に移住した八王子千人同心の北方警備と開拓を伝える無料資料館。',
      f7_full: '「勇武津資料館」で八王子千人同心の資料を見学し、北の大地への想いに感銘を受けた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Yufutsu Historical Museum timber building beside bronze pioneer samurai statue in green memorial park, no text, no letters.',
    },
    {
      spot_order: 4,
      spot_type: '食事',
      name: '麺商 三春商店',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '勇払地区で営業中の人気ラーメン店（11:00〜14:00・17:00〜20:00、火曜休）。こだわりのスープと麺が地元客に評判の一軒。',
      address: '北海道苫小牧市勇払5-11',
      lat: 42.626617,
      lng: 141.731714,
      clue:
        '開拓の歴史を辿ってお腹が空いてきたら、勇払の街で地元客から親しまれている人気ラーメン店「麺商 三春商店」で温かい昼食を楽しもう（11:00〜14:00・17:00〜20:00、火曜休）。丹精込めて仕込まれた深いコクのあるスープともちもちの麺が絶妙に絡み合い、海風を受けながら歩いてきた体に染み渡る美味しさだ。すっかり元気を取り戻したら、最後は「苫小牧港勇払マリーナ」へ向かおう。',
      surprise: '海の町の落ち着いた一角で味わうこだわりのラーメンの美味しさが、歴史散策の楽しさをさらに引き立ててくれた。',
      hook: '麺商 三春商店で食事を終えたら、南端の「苫小牧港勇払マリーナ」へ向かおう。',
      f7_fragment: '勇払地区でこだわりのスープと麺が地元客に愛される人気のラーメン店。',
      f7_full: '「麺商 三春商店」で熱々の美味しいラーメンをいただき、午後の元気を満たした。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Miharu Shoten welcoming Japanese ramen shop interior with a steaming richly flavored noodle bowl, no text, no letters.',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '苫小牧港勇払マリーナ（とまこまい海の駅）',
      prefecture: '北海道',
      city: '苫小牧市',
      description:
        '勇払地区の南端に位置する公共マリーナ兼「とまこまい海の駅」（季節により8:00〜17:00等、火曜・年末年始等休、入場無料）。ヨットやクルーザーが並ぶ爽やかな港湾景観を楽しめる。',
      address: '北海道苫小牧市字勇払376',
      lat: 42.622592,
      lng: 141.733805,
      clue:
        '旅の締めくくりは、勇払地区の海辺に広がる公共マリーナ兼「苫小牧港勇払マリーナ（とまこまい海の駅）」で潮風を感じよう（8:00〜17:00等、火曜休、入場無料）。水面にずらりと係留された美しい白いヨットやクルーザーの先に広がる開放的な港湾の景色は、江戸の千人同心が見た荒波の海岸とはまた違う現代の豊かさを感じさせる。爽やかな海辺の潮風を受けて、勇払の豊かな旅を心地よく結ぼう。',
      surprise: '歴史資料館から一転、白いヨットが並ぶ開放的なマリーナの港湾景観が爽快で美しいコントラストを描いていた。',
      hook: '',
      f7_fragment: '白いヨットやクルーザーが並ぶ勇払南端の公共マリーナ兼とまこまい海の駅。',
      f7_full: '「苫小牧港勇払マリーナ」で潮風とヨットの景色を眺め、勇払の歴史散歩を終えた。',
      image_prompt:
        'Editorial ink and warm watercolor illustration of Tomakomai Port Yufutsu Marina with white sailboats moored along sparkling calm harbor waters, no text, no letters.',
    },
  ],
};
