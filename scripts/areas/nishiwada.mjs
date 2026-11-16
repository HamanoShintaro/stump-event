export default {
  slug: 'nishiwada',
  station_order: 973,
  station: '西和田',
  line: 'JR根室本線',
  area_name: '西和田・東和田',
  prefecture: '北海道',
  municipality: '根室市',
  category: '歴史・街歩き',
  budget_tier: 1,
  tags: ['根室本線', '花咲線', '和田屯田兵村', '有形文化財', 'ダルマ駅'],
  style_genre: 'ink_and_watercolor',
  title: '明治の屯田兵村と開拓の記憶を巡る',
  description:
    '車掌車改造のダルマ駅・JR西和田駅から北海道指定有形文化財の和田屯田記念館、和田簡易郵便局、和田神社、屯田兵碑へ歩くルート。',
  eyecatch_prompt:
    'Japanese ink and watercolor editorial illustration of JR Nishi-Wada Station with its converted railway caboose waiting room, the 1885 wooden balloon-frame Wada Tonden Memorial Hall, and historic pioneer stone monuments beside Wada Shrine in Nemuro, warm washi paper background, shu-iro vermilion and gold accents, no text.',
  question: '次の旅で再び西和田を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '明治十八年築の有形文化財・和田屯田記念館',
      subtext: '木造バルーンフレーム構造の旧被服庫に開拓の息吹を感じた',
      badge: {
        code: 'nishiwada_tonden_hall',
        name_ja: '屯田兵村の被服庫',
        subtitle_en: 'Tonden Memorial Hall',
        description:
          '和田屯田記念館（和田屯田兵村の被服庫）を訪れ、北海道指定有形文化財に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a historic Meiji-era timber balloon-frame storehouse in misty Hokkaido meadows on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '西和田駅前に佇む和田簡易郵便局',
      subtext: '開拓集落の日常を支え続ける静かな郵便局に立ち寄った',
      badge: {
        code: 'nishiwada_post',
        name_ja: '和田集落の窓口',
        subtitle_en: 'Wada Post Office',
        description:
          '和田簡易郵便局の前を訪れ、開拓の歴史が息づく集落の暮らしに触れたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a cozy rural postal sign and vintage postage stamps on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '明治十九年創立の歴史ある和田神社',
      subtext: '和田屯田兵村創設時の旧大隊本部跡近くで静かに参拝した',
      badge: {
        code: 'nishiwada_shrine',
        name_ja: '屯田兵村の鎮守',
        subtitle_en: 'Wada Tonden Shrine',
        description:
          '明治十九年創立の和田神社に参拝し、厳寒の地を開いた先人に手を合わせたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic wooden Shinto torii gate framed by northern birch trees on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '指定文化財の和田屯田兵碑と記念碑',
      subtext: '境内奥に立つ石碑の前で屯田兵たちの不屈の志を偲んだ',
      badge: {
        code: 'nishiwada_monument',
        name_ja: '屯田兵顕彰の碑',
        subtitle_en: 'Tonden Pioneer Stele',
        description:
          '和田屯田兵碑・和田開基100年記念碑を訪れ、根室市指定文化財に刻まれた志に触れたしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an engraved granite pioneer memorial stele beneath crisp autumn skies on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nishiwada_complete',
    name_ja: '西和田・屯田開拓の旅人',
    subtitle_en: 'Explorer of Wada Tonden Heritage',
    description:
      'JR西和田駅から和田屯田記念館、和田簡易郵便局、和田神社、屯田兵碑まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a Meiji-era wooden storehouse, Shinto torii gate, and pioneer stone stele on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR西和田駅',
      lat: 43.268014,
      lng: 145.542228,
      address: '北海道根室市西和田810',
      description:
        '大正9年（1920年）11月10日開業の無人駅（終日開放・無休）。車掌車を改装した通称「ダルマ駅」の待合室が残り、明治期に士族屯田兵が入植した和田地区の玄関口。',
      clue:
        '大正九年十一月に開業し、車掌車を改装した通称「ダルマ駅」の待合室が今も残る花咲線の無人駅「JR西和田駅」から歴史散歩を始めよう（終日開放）。かつて明治期に士族屯田兵が入植して厳寒の大地を開いた和田地区の空気を感じながら北〜北北西方向へと外へ踏み出したら、まずは北海道指定有形文化財「和田屯田記念館（和田屯田兵村の被服庫）」を目指して、のんびり楽しく元気に笑顔で力強く爽やかに歩き出そう。',
      hook: '駅から北方向（北北西）へ徒歩約5分',
      f7_fragment: '車掌車改造のダルマ駅舎が残り、明治期の和田屯田兵村への玄関口となる駅。',
      f7_full: '「JR西和田駅」を後にし、明治の屯田兵村の開拓遺産を巡る歴史散歩を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '和田屯田記念館（和田屯田兵村の被服庫）',
      lat: 43.270912,
      lng: 145.540684,
      address: '北海道根室市西和田568-2',
      description:
        '明治18年（1885年）建築の北海道指定有形文化財（外観見学自由・館内は要事前確認）。木造バルーンフレーム構造の被服庫が当時の姿のまま大切に保存されている。',
      clue:
        '明治十八年築の北海道指定有形文化財「和田屯田記念館（和田屯田兵村の被服庫）」の貴重な木造建築を見学しよう（外観自由）。次は南の「和田簡易郵便局」へ向かおう。',
      hook: '南方向へ徒歩約4〜5分',
      f7_fragment: '明治十八年建築、木造バルーンフレーム構造が残る北海道指定有形文化財。',
      f7_full: '「和田屯田記念館（和田屯田兵村の被服庫）」の前に立ち、明治の開拓建築に見入った。',
    },
    {
      spot_order: 3,
      spot_type: '買い物',
      name: '和田簡易郵便局',
      lat: 43.268455,
      lng: 145.541012,
      address: '北海道根室市西和田815',
      description:
        '西和田駅前に佇む簡易郵便局（郵便・貯金・保険窓口平日9:00〜16:00、土日祝・年末年始休）。切手・はがき等の購入ができ、開拓集落の生活拠点として機能している。',
      clue:
        'JR西和田駅のほど近くに佇み、開拓集落の穏やかな日常を支え続けている「和田簡易郵便局」の前へゆっくり楽しく足を運んでみよう（平日9:00〜16:00、土日祝休）。平日の開局時間には記念切手やはがきを買い求めることもでき、静かな根室の集落で営まれてきた素朴な暮らしの温もりが心に伝わってくる。駅周辺の空気を味わったら、北方向へ進んで歴史ある「和田神社」へと歩いて向かおう。',
      hook: '北方向へ徒歩約20〜22分',
      f7_fragment: '西和田駅前に佇み、切手やはがきの購入もできる開拓集落の簡易郵便局。',
      f7_full: '「和田簡易郵便局」の前を歩き、和田地区の穏やかな暮らしと歴史のつながりを感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '和田神社',
      lat: 43.280921,
      lng: 145.543933,
      address: '北海道根室市東和田977-1',
      description:
        '明治19年（1886年）の和田屯田兵村創設時に建立された旧大隊本部跡近くの神社（参拝自由・無休）。開拓の先人たちが心の拠り所として大切に守り継いできた。',
      clue:
        '明治十九年の和田屯田兵村創設時に建立され、旧大隊本部跡の近くに鎮座する歴史あるお社「和田神社」へ丁寧に心を込めて参拝しよう（参拝自由）。澄み切った道東の空気と静かな木立に守られた境内で深く手を合わせれば、遠い本州から海を渡り根室の大地を開いた屯田兵たちの気高い志が胸に深く響いていく。参拝を終えたら、南東の境内奥に立つ「和田屯田兵碑・和田開基100年記念碑」へと向かおう。',
      hook: '境内を南東へ徒歩約1分',
      f7_fragment: '明治十九年の屯田兵村創設時に建立され、旧大隊本部跡近くに鎮座する神社。',
      f7_full: '「和田神社」の静かな杜に参拝し、開拓の先人たちの不屈の祈りに手を合わせた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '和田屯田兵碑・和田開基100年記念碑',
      lat: 43.280619,
      lng: 145.544541,
      address: '北海道根室市東和田977-1',
      description:
        '和田神社境内奥に立つ根室市指定文化財の「和田屯田兵碑」と「和田開基100年記念碑」（見学自由・無休）。屯田兵たちの厳寒の地での開拓史を今に伝えている。',
      clue:
        '旅の締めくくりは、和田神社の境内奥に静かに並び立つ根室市指定文化財「和田屯田兵碑・和田開基100年記念碑」の前をゆっくり楽しく訪ねてみよう（見学自由）。明治の昔、家族とともに厳しい北辺の原野へ挑み、今日の豊かな酪農と暮らしの礎を築いた屯田兵たちの熱い開拓史が石碑の言葉に深く刻まれている。歴史の重みを静かに心に噛み締めながら、西和田の尊い旅を晴れやかな笑顔で明るく結ぼう。',
      hook: '',
      f7_fragment: '和田神社境内奥に立ち、屯田兵の開拓史を刻む根室市指定文化財の石碑。',
      f7_full: '「和田屯田兵碑・和田開基100年記念碑」の前に立ち、西和田の開拓史を締めくくった。',
    },
  ],
};
