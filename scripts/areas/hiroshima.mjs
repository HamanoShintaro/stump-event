export default {
  slug: 'hiroshima',
  station_order: 664,
  station: '広島',
  line: '山陽新幹線',
  area_name: '広島・大名庭園と平和の杜',
  prefecture: '広島県',
  municipality: '広島市',
  category: '歴史と街歩き',
  budget_tier: 2,
  tags: ['広島県', '広島市', '広島駅', '庭園', '世界遺産'],
  style_genre: 'editorial_clean_ink',
  title: '広島・縮景園の緑から平和記念公園へ',
  description:
    'JR広島駅から、浅野藩主ゆかりの大名庭園「縮景園」、太田川河畔に佇む鯉城「広島城」、本通の老舗ベーカリーカフェ「広島アンデルセン」、世界遺産「原爆ドーム」、未来への祈りを伝える「広島平和記念資料館」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Hiroshima City showing the arched stone drum bridge across the pond of Shukkeien Garden, the historic five-tiered Hiroshima Castle keep rising behind stone ramparts and moat, a classic brick-and-stone European-style bakery facade on Hondori, and the Atomic Bomb Dome along the calm Motoyasu River, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '大名庭園と城跡の緑、本通の温かなパンの香り、平和への祈りが連なる広島を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「縮景園」の跨虹橋を渡り、水面に映る松や茶室の風情に心を澄ませた瞬間',
      subtext:
        '都心のすぐそばに広がる静かな大名庭園が、広島の長い歴史の入り口を優雅に開いてくれた。',
      badge: {
        code: 'hiroshima_shukkeien',
        name_ja: '広島・縮景園の風雅を巡りし者',
        subtitle_en: 'Walker of Shukkeien Garden',
        description:
          '縮景園を訪ね、歴代藩主が愛した池泉庭園の四季の風景を散策した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an arched stone bridge spanning a serene Japanese garden pond framed by sculpted pine branches and wooden tea house eaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「広島アンデルセン」で、焼き立てパンの香りにつつまれながら一息ついた瞬間',
      subtext:
        '被爆建物を継承した歴史ある空間で味わう温かい食卓に、街のたくましい再生力を感じた。',
      badge: {
        code: 'hiroshima_andersen',
        name_ja: '広島・本通のパンの香りを味わいし者',
        subtitle_en: 'Guest of Hiroshima Andersen',
        description:
          '広島アンデルセンを訪ね、本通の老舗ベーカリーで豊かな食のひとときを愉しんだ証。',
        rarity: 2,
        image_prompt:
          'A circular emblem depicting golden freshly baked artisan bread loaves and a warm cup of coffee on a wooden bakery table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「原爆ドーム」の前に立ち、元安川の穏やかな流れとともに平和の尊さを想った瞬間',
      subtext:
        '静かに佇む世界遺産の姿が、過去から未来へと語り継ぐべきメッセージを深く胸に刻んだ。',
      badge: {
        code: 'hiroshima_dome',
        name_ja: '広島・元安川畔で平和を想いし者',
        subtitle_en: 'Visitor of the Atomic Bomb Dome',
        description:
          '原爆ドームを訪ね、元安川のほとりで世界遺産と向き合い平和への想いを深めた証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting the historic domed brick silhouette of the Hiroshima Peace Memorial framed by willow leaves beside calm river water, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「広島平和記念資料館」を巡り、慰霊碑の向こうに続く平和の灯を見つめた瞬間',
      subtext:
        '一つひとつの記録と向き合ったあとの緑豊かな公園の静けさが、旅の締めくくりに重みを添えた。',
      badge: {
        code: 'hiroshima_peace_museum',
        name_ja: '広島・平和の祈りを胸に刻みし者',
        subtitle_en: 'Visitor of Hiroshima Peace Memorial Museum',
        description:
          '広島平和記念資料館を訪ね、歴史の記憶を受け止め平和への願いを新たにした証。',
        rarity: 5,
        image_prompt:
          'A circular emblem depicting a tranquil green park vista with white doves soaring above a gentle memorial flame and stone arch, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'hiroshima_complete',
    name_ja: '広島・縮景園と平和の杜を巡る旅人',
    subtitle_en: 'Walker of Hiroshima',
    description:
      '縮景園から広島城、広島アンデルセン、原爆ドーム、広島平和記念資料館までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining the arched stone bridge of Shukkeien Garden, the Atomic Bomb Dome silhouette, and a peaceful olive dove, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '縮景園',
      spot_type: '見どころ',
      description:
        '元和6年（1620年）に広島藩主・浅野長晟の別邸として築かれた大名庭園。跨虹橋や茶室が池の周囲に配される。9:00〜18:00（冬期〜17:00）、12/29〜31休、一般350円。',
      address: '広島県広島市中区上幟町2-11',
      prefecture: '広島県',
      municipality: '広島市',
      lat: 34.400483,
      lng: 132.467721,
      clue: '元和6年に広島藩主・浅野長晟の別邸の庭として築かれた「縮景園」から、広島の散策を始めよう（9:00〜18:00・冬期〜17:00、12/29〜31休、一般350円）。中国・西湖を模したとも伝わる池には大小の島々が浮かび、中央に架かる跨虹橋や茶室、梅林や竹林が四季折々の表情を見せる。都心のすぐそばにありながら静寂が保たれた名園で、広島の豊かな歴史をこれからも優雅に味わいたい。',
      surprise:
        '園内の「清風館」や茶室は歴史の変遷の中で再建され、現在も春の桜や秋の紅葉など季節の風物詩として市民に親しまれています。',
      hook: '庭園の緑を楽しんだら、西北西へ歩いて鯉城とも呼ばれる広島城へ向かおう。',
      f7_fragment: '広島藩主・浅野家ゆかりの大名庭園、跨虹橋と四季の池泉が美しい。',
      f7_full:
        '「縮景園」の跨虹橋を渡り、水面に映る松や茶室の風情に心を澄ませて旅を始めた。',
      image_prompt:
        'Serene Japanese daimyo garden illustration of Shukkeien in Hiroshima, graceful arched stone drum bridge Kokohkyo crossing a tranquil pond dotted with small islands, pine trees and wooden tea pavilion, soft morning light, no text, no letters.',
    },
    {
      name: '広島城',
      spot_type: '見どころ',
      description:
        '毛利輝元が築城した平城で、別名「鯉城」。広大な水堀と石垣、二の丸復元建物が見事（天守は2026年3月閉城し外観公開のみ）。城跡無料。',
      address: '広島県広島市中区基町21-1',
      prefecture: '広島県',
      municipality: '広島市',
      lat: 34.402746,
      lng: 132.459105,
      clue: '安土桃山時代に毛利輝元が築城し、広島の街づくりの原点となった「広島城」を訪ねよう（城跡入場無料・天守は外観公開のみ）。別名「鯉城」とも呼ばれ、広大な水堀と立派な石垣、復元された二の丸の表御門や平櫓が往時の城郭の構えを今に伝えている。お堀越しに仰ぐ黒と白の威容ある美しい佇まいをゆっくりと眺めながら、城下町として歩み始めた広島の原点をこれからも静かにしっかりとたどり続けたい。',
      surprise:
        '天守は老朽化などに伴い2026年3月に内部公開を終えましたが、二の丸の復元建物や本丸跡の護国神社周辺の散策は引き続き楽しめます。',
      hook: '城跡を後にしたら、南の本通商店街へ歩いて広島アンデルセンで一息つこう。',
      f7_fragment: '毛利輝元が築いた「鯉城」、水堀と石垣越しに仰ぐ天守の外観が壮麗。',
      f7_full:
        '「広島城」の石垣と水堀を歩き、広島の街の原点となった鯉城の威容を仰ぎ見た。',
      image_prompt:
        'Historic Japanese castle illustration of Hiroshima Castle, iconic black-and-white five-tiered castle keep standing atop moss-touched stone walls behind wide moat water and pine trees, clear daylight, no text, no letters.',
    },
    {
      name: '広島アンデルセン',
      spot_type: '休憩',
      description:
        '本通商店街の中心に佇む老舗ベーカリー＆レストラン。1階マーケットやサンドイッチスタンドで気軽に休憩できる。10:00〜19:30（施設により異なる）、不定休。',
      address: '広島県広島市中区本通7-1',
      prefecture: '広島県',
      municipality: '広島市',
      lat: 34.393017,
      lng: 132.458349,
      clue: '本通商店街の中心に佇む老舗ベーカリー「広島アンデルセン」でひと息つこう（10:00〜19:30・不定休）。焼きたてパンや珈琲の温かい香りに包まれながら街歩きの休憩を愉しみたい。',
      surprise:
        'もとは大正時代の銀行建築であり、被爆の記憶を乗り越えて建て替えられた現在の建物にも、街とともに歩んだ歴史が受け継がれています。',
      hook: '焼きたての香りで満たされたら、西北西の元安川畔にある原爆ドームへ向かおう。',
      f7_fragment: '本通商店街の老舗ベーカリー、焼きたてパンと珈琲でひと息つける名店。',
      f7_full:
        '「広島アンデルセン」で焼きたてパンの香りに包まれながら、本通の温かい食卓を味わった。',
      image_prompt:
        'Warm European-inspired brick and stone bakery facade illustration of Hiroshima Andersen on Hondori street, glowing warm interior windows displaying artisan loaves and pastries, sunlit pedestrian arcade, no text, no letters.',
    },
    {
      name: '原爆ドーム',
      spot_type: '見どころ',
      description:
        '大正時代に広島県物産陳列館として建てられ、被爆の惨禍を今に伝える負の世界遺産。元安川畔から常時見学可能、無料。',
      address: '広島県広島市中区大手町1-10',
      prefecture: '広島県',
      municipality: '広島市',
      lat: 34.39548,
      lng: 132.45359,
      clue: '大正時代に広島県物産陳列館として建てられ、被爆の惨禍を今に伝える世界遺産「原爆ドーム」の前に立とう（屋外常時見学可・料金無料）。元安川の穏やかな流れと緑の木々に囲まれながら、当時の姿のまま保存された煉瓦と鉄骨のドームが、核兵器の廃絶と恒久平和の大切さを無言で訴えかけている。川岸から静かに歩み寄り、平和への祈りと深い誓いをこれからも胸の奥に大切にしっかりと刻み続けたい。',
      surprise:
        '建築当初はチェコの建築家ヤン・レツルが設計したモダンな洋風建築であり、今も元安川の川面にその象徴的な輪郭を映し出しています。',
      hook: '元安橋を渡ったら、南の平和記念公園奥にある広島平和記念資料館で旅を結ぼう。',
      f7_fragment: '元安川のほとりに静かに佇み、恒久平和の大切さを訴える世界遺産。',
      f7_full:
        '「原爆ドーム」の前に立ち、元安川の穏やかな流れとともに平和の尊さを静かに想った。',
      image_prompt:
        'Respectful scenic illustration of the Atomic Bomb Dome in Hiroshima, the preserved brick and iron-framed dome standing beside the calm blue Motoyasu River lined with weeping willows and stone embankments, clear peaceful sky, no text, no letters.',
    },
    {
      name: '広島平和記念資料館',
      spot_type: '見どころ',
      description:
        '平和記念公園の南側に建つ丹下健三氏設計の資料館。被爆資料や遺品を通じて歴史の記憶を伝える。7:30〜19:00（季節変動あり）、12/30〜31・2月中旬休、大人200円。',
      address: '広島県広島市中区中島町1-2',
      prefecture: '広島県',
      municipality: '広島市',
      lat: 34.391503,
      lng: 132.453158,
      clue: '平和記念公園の南側に建つ、建築家・丹下健三氏の設計による「広島平和記念資料館」で旅を締めくくろう（7:30〜19:00・季節変動あり、大人200円・高校生100円）。被爆資料や遺品、写真や証言を通じてあの日何が起きたのかを克明に伝え、訪れる人々に平和の意味を問いかけている。展示を見終えたあと、慰霊碑や平和の灯を巡りながら歩く余韻を、これからも深く心に留めて静かに結びたい。',
      surprise:
        '本館の一階が吹き抜けのピロティ構造になっているのは、資料館越しに慰霊碑と原爆ドームが一直線に結ばれるように設計されたためです。',
      hook: '',
      f7_fragment: '丹下健三氏設計の本館で被爆資料と証言を伝える、平和記念公園の中核施設。',
      f7_full:
        '「広島平和記念資料館」で歴史の記憶と向き合い、緑豊かな平和記念公園で旅を締めくくった。',
      image_prompt:
        'Dignified architectural illustration of Hiroshima Peace Memorial Museum inside lush green Peace Memorial Park, modernist piloti-raised concrete building looking toward the central cenotaph and calm tree-lined avenues, soft afternoon light, no text, no letters.',
    },
  ],
};
