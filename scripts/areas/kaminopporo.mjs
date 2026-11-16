export default {
  slug: 'kaminopporo',
  station_order: 926,
  station: '上野幌',
  line: 'JR千歳線',
  area_name: '上野幌・厚別南',
  prefecture: '北海道',
  municipality: '札幌市厚別区',
  category: '歴史・自然',
  budget_tier: 1,
  tags: ['千歳線', '旧駅跡', '自然林', '公園散歩', '喫茶'],
  style_genre: 'ink_and_watercolor',
  title: '旧駅舎の面影と緑豊かな丘を歩く上野幌',
  description:
    'JR上野幌駅から旧上野幌小学校跡の厚別南緑地、上野幌公園、旧上野幌駅跡の厚別南公園、珈琲店を巡る歴史散歩ルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Kaminopporo in Atsubetsu, Sapporo, featuring a quiet hilltop park with an old yew tree marking a former railway station, woodland trails, and a warm wooden coffee house, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '緑と線路の記憶が重なる上野幌で、心が動かされた場所はどこ？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '旧校舎跡の静かな森と炭窯の記憶',
      subtext: '旧上野幌小学校跡の厚別南緑地で、豊かな自然林に触れた',
      badge: {
        code: 'kaminopporo_greenbelt',
        name_ja: '森の学び舎の記憶守',
        subtitle_en: 'Woodland Remnant',
        description:
          '旧上野幌小学校跡地などを活かした厚別南緑地で、自然林と往時の炭窯の複製に出会ったしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of tall forest trees and a traditional stone charcoal kiln on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '地域の笑顔が集う開放的な公園の風景',
      subtext: '上野幌公園の穏やかな空気の中、街の日常に寄り添って歩いた',
      badge: {
        code: 'kaminopporo_park',
        name_ja: '丘の風の散歩人',
        subtitle_en: 'Parkside Stroller',
        description:
          '芝生広場が広がる上野幌公園を歩き、丘の住宅街に流れる穏やかな風を感じたしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a sunlit grassy hillside park and wooden bench on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '旧駅舎のイチイの木が語る鉄道の歴史',
      subtext: '旧上野幌駅跡地の小高い丘に立ち、半世紀前の鉄路に思いを馳せた',
      badge: {
        code: 'kaminopporo_oldstation',
        name_ja: '旧鉄路の語り部',
        subtitle_en: 'Old Track Chronicler',
        description:
          '旧上野幌駅跡地に整備された厚別南公園で、往時のシンボルであるイチイの木に出会ったしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an ancient yew tree beside subtle faded railway sleepers on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '珈琲の香りに包まれて一息ついた午後',
      subtext: '旧駅跡の散策の終わりに、温かい珈琲で心をほどいた',
      badge: {
        code: 'kaminopporo_coffee',
        name_ja: '厚別南の珈琲通',
        subtitle_en: 'Quiet Cafe Guest',
        description:
          '厚別南の星乃珈琲店 札幌厚別店で、香り豊かなハンドドリップ珈琲を味わったしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a classic porcelain coffee cup with rising steam and a warm pancake on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'kaminopporo_complete',
    name_ja: '上野幌・旧駅と丘の散歩者',
    subtitle_en: 'Walker of Kaminopporo Hills and Old Tracks',
    description:
      'JR上野幌駅から厚別南緑地、上野幌公園、旧駅跡の厚別南公園、珈琲店まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a hillside yew tree, forest path, and coffee cup on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR上野幌駅',
      lat: 43.016714,
      lng: 141.487027,
      address: '北海道札幌市厚別区厚別町上野幌686-16',
      description:
        '大正15年（1926年）8月21日に開業し、昭和48年（1973年）の千歳線新線切替に伴い現在地へ移転した駅（終日利用可・無料）。札幌市内の千歳線最南端・最東端の駅。',
      clue:
        '大正十五年八月に開業し、昭和四十八年の新線切替で現在地へと移った札幌市内の千歳線最南端・最東端「JR上野幌駅」から楽しい街歩きと散策を始めよう（終日利用可）。丘の爽やかな風が吹き抜ける静かな駅前をゆっくり後にして北西方向へと歩き出したら、まずは旧上野幌小学校跡地などを活かした自然豊かな「厚別南緑地」を目指してのんびり楽しく元気に笑顔で外へと爽やかに楽しく歩みを進めよう。',
      hook: '駅前から北西方向へ徒歩約10分',
      f7_fragment: '昭和四十八年の新線切替で現在地へ移った札幌市の千歳線最南端の駅。',
      f7_full: '「JR上野幌駅」を後にし、かつての学び舎と旧鉄路の面影を辿る散策へ出発した。',
    },
    {
      spot_order: 2,
      spot_type: '見どころ',
      name: '厚別南緑地',
      lat: 43.020772,
      lng: 141.482806,
      address: '北海道札幌市厚別区厚別南7-26',
      description:
        '明治期開校の「旧上野幌小学校」跡地などを整備した都市緑地（終日開放・無料）。自然林の中にエゾリスや野鳥の姿が見られ、往時の暮らしを伝える炭窯の複製も設けられている。',
      clue:
        '明治期開校の旧上野幌小学校跡地などを活かした「厚別南緑地」の木立を歩こう（終日開放・無料）。自然林と炭窯の複製に触れたら、北西の「上野幌公園」へと向かおう。',
      hook: '緑地を抜けて北西方向へ徒歩約13分',
      f7_fragment: '旧上野幌小学校跡地を整備し、自然林や炭窯の複製が残る都市緑地。',
      f7_full: '「厚別南緑地」の静かな木立の中を歩き、往時の学び舎と自然の息吹に触れた。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '上野幌公園',
      lat: 43.026426,
      lng: 141.473232,
      address: '北海道札幌市厚別区厚別南5-4',
      description:
        '広々とした芝生広場や多目的広場を備えた地域の憩いの公園（終日開放・無料）。個性的なベンチが並び、冬には雪遊びの舞台としても親しまれている。',
      clue:
        '緑豊かな住宅街に開かれた地域の温かい憩いの場「上野幌公園」をゆったり楽しく歩いてのんびり元気に明るく爽やかに散策してみよう（終日開放・無料）。広々とした芝生広場や多目的広場には季節ごとの心地よい風が吹き抜け、厚別の穏やかな暮らしの空気を肌でたっぷりと感じられる。のんびりと大きな青い空を仰いで歩みを進めたら、南東側に位置し旧鉄路の記憶を伝える歴史ある「厚別南公園」へ向かおう。',
      hook: '公園から南東方向へ徒歩約6分',
      f7_fragment: '広々とした芝生広場が広がり、丘の住宅街に寄り添う憩いの公園。',
      f7_full: '「上野幌公園」の開放的な芝生広場を歩き、丘の街の穏やかな日常に触れた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '厚別南公園',
      lat: 43.02512,
      lng: 141.476716,
      address: '北海道札幌市厚別区厚別南5-8',
      description:
        '平成3年（1991年）に旧国鉄千歳線「旧上野幌駅」の跡地へ整備された公園（終日開放・無料）。旧駅舎があった小高い丘にはシンボルだったイチイの木が残り、歴史を伝える説明板が立つ。',
      clue:
        '平成三年に旧国鉄千歳線「旧上野幌駅」の跡地へ整備された歴史ある公園「厚別南公園」をじっくり楽しく元気に明るく訪ねよう（終日開放・無料）。旧駅舎が立っていた小高い丘には当時のシンボルだったイチイの木が今も豊かな緑をたたえ、説明板が半世紀前の鉄路の記憶を静かに優しく語りかけてくれる。鉄道の歴史に深く思いを馳せたら、南西の「星乃珈琲店 札幌厚別店」でゆっくりひと休みしよう。',
      hook: '旧駅跡の丘から南西方向へ徒歩約7分',
      f7_fragment: '旧国鉄「旧上野幌駅」跡地に整備され、往時のイチイの木が残る公園。',
      f7_full: '「厚別南公園」の丘で旧駅舎のイチイの木に出会い、半世紀前の鉄路を偲んだ。',
    },
    {
      spot_order: 5,
      spot_type: '休憩',
      name: '星乃珈琲店 札幌厚別店',
      lat: 43.022932,
      lng: 141.471469,
      address: '北海道札幌市厚別区厚別南4-25-13',
      description:
        '落ち着いた木調の店内でハンドドリップ珈琲や窯焼きスフレパンケーキを味わえる喫茶店（8:00〜20:00、不定休）。旧駅跡の散策後にゆっくり座って休憩できる。',
      clue:
        '旅の締めくくりは、落ち着いた木調の雰囲気が心地よい「星乃珈琲店 札幌厚別店」でゆったりと寛ぎの休憩時間を過ごそう（8:00〜20:00、不定休）。丁寧に淹れられた香り高いハンドドリップ珈琲や名物のふわふわな窯焼きスフレパンケーキをじっくり味わいながら今日歩いた緑地や旧駅跡を思い返せば、旅の余韻が優しく広がっていく。豊かな歴史の余白を抱えて、上野幌の街歩きを心地よく結ぼう。',
      hook: '',
      f7_fragment: 'ハンドドリップ珈琲や窯焼きスフレパンケーキで寛げる落ち着いた喫茶店。',
      f7_full: '「星乃珈琲店 札幌厚別店」で温かい珈琲を味わい、上野幌の旅を穏やかに結んだ。',
    },
  ],
};
