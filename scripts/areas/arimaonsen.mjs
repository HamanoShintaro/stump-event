export default {
  slug: 'arimaonsen',
  station_order: 677,
  station: '有馬温泉',
  line: '神戸電鉄有馬線',
  area_name: '有馬温泉・金泉と太閤の湯煙',
  prefecture: '兵庫県',
  municipality: '神戸市',
  category: '温泉と自然',
  budget_tier: 3,
  tags: ['兵庫県', '神戸市', '有馬温泉駅', '金泉', '日本三古湯'],
  style_genre: 'ukiyo_e_modern',
  title: '有馬温泉・太閤橋から金の湯と炭酸泉源へ',
  description:
    '神戸電鉄有馬温泉駅から、湯けむり広場を見守る「太閤橋」、赤褐色の名湯が湧く「有馬本温泉 金の湯」、からくり玩具の世界「有馬玩具博物館」、行基開創の古刹「温泉寺」、炭酸せんべいの原点を味わう「炭酸泉源公園」を巡る散策路。',
  eyecatch_prompt:
    'Modern ukiyo-e woodblock print inspired illustration of Arima Onsen valley showing wooden lattice bathhouses with rising white hot spring steam, a vermilion arched bridge over the mountain river, historic hillside temple roofs of Onsen-ji framed by autumn maples, and a stone spring pavilion, warm Washi paper palette, no text, no letters, no numbers, no labels.',
  question: '日本三古湯の歴史と湯けむり薫る坂道、金泉・炭酸泉の恵みを巡ったあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '「有馬本温泉 金の湯」の赤褐色の名湯と、玄関横の無料足湯で温まった瞬間',
      subtext:
        '鉄分と塩分を豊富に含んだ黄金色の湯のぬくもりが、六甲の山あいの旅を実感させてくれた。',
      badge: {
        code: 'arimaonsen_kinnoyu',
        name_ja: '有馬温泉・赤褐色の金泉に浸かりし者',
        subtitle_en: 'Bather of Arima Kin-no-Yu',
        description:
          '有馬本温泉 金の湯を訪ね、日本三古湯を代表する赤褐色の名湯を堪能した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a traditional wooden bathhouse tub filled with rich amber-terracotta hot spring water and rising white steam, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '「有馬玩具博物館」で、精巧なからくり人形や木製玩具の温もりに見入った瞬間',
      subtext:
        '大人が思わず夢中になる世界各国の玩具の仕組みに、旅の途中で童心がよみがえった。',
      badge: {
        code: 'arimaonsen_toymuseum',
        name_ja: '有馬温泉・玩具のからくりに魅せられし者',
        subtitle_en: 'Visitor of Arima Toys & Automata Museum',
        description:
          '有馬玩具博物館を訪ね、木工芸品やからくり人形の精巧な世界に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting an intricate wooden automaton toy bird and painted tin spinning top on a dark wooden display, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '「温泉寺」の急な石段を登り、有馬温泉を見守ってきた古刹の静寂に触れた瞬間',
      subtext:
        '奈良時代に行基が開いた歴史と太閤秀吉ゆかりの記憶が、温泉街の高台に息づいていた。',
      badge: {
        code: 'arimaonsen_onsenji',
        name_ja: '有馬温泉・行基開創の古刹に祈りし者',
        subtitle_en: 'Visitor of Onsen-ji Temple',
        description:
          '温泉寺を訪ね、有馬温泉の歴史を見守り続けてきた古刹に参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting stone temple steps ascending toward a wooden Buddhist hall framed by crimson maple leaves, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「炭酸泉源公園」で、冷たい天然の炭酸水を一口味わい名物の原点を体感した瞬間',
      subtext:
        'しゅわっと弾ける自然の恵みに、有馬が誇るもうひとつの泉質「銀泉」の面白さを知った。',
      badge: {
        code: 'arimaonsen_tansan',
        name_ja: '有馬温泉・天然の炭酸泉を味わいし者',
        subtitle_en: 'Taster of Arima Tansan Spring',
        description:
          '炭酸泉源公園を訪ね、有馬名物・炭酸せんべいの原点である天然炭酸泉源に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a stone spring pavilion with cool sparkling mineral water flowing from a bronze spout beside crisp round rice crackers, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'arimaonsen_complete',
    name_ja: '有馬温泉・金泉と古湯の坂を巡る旅人',
    subtitle_en: 'Walker of Arima Onsen',
    description:
      '太閤橋から金の湯、有馬玩具博物館、温泉寺、炭酸泉源公園までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining rising hot spring steam over wooden roofs, a vermilion arched bridge, and crimson maple leaves, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '太閤橋',
      spot_type: '見どころ',
      description:
        '神戸電鉄有馬温泉駅の正面、有馬川に架かる朱色の橋。傍らのゆけむり広場には有馬を愛した豊臣秀吉公の像が立ち、温泉街への玄関口を彩る。常時通行可、無料。',
      address: '兵庫県神戸市北区有馬町字ウツギ谷252-4',
      prefecture: '兵庫県',
      municipality: '神戸市',
      lat: 34.79886,
      lng: 135.246985,
      clue: '神戸電鉄・有馬温泉駅を出てすぐ目の前に架かる朱色の「太閤橋」から、日本三古湯の散策を始めよう（常時通行可・無料）。有馬川の清流を跨ぐ橋の傍らには「ゆけむり広場」が広がり、度々有馬を訪れて湯治を楽しんだ豊臣秀吉公の像が温泉街へと旅人を温かく迎えている。山の澄んだ空気とほのかな湯の香りに胸を弾ませながら、坂の温泉街へこれからも軽やかに元気に笑顔で楽しくずっと踏み出したい。',
      surprise:
        '有馬川の親水公園沿いには季節ごとに桜や紅葉が彩りを添え、駅前から温泉街の中心へと続く風情豊かな散歩道となっています。',
      hook: '太閤橋を渡ったら、南南東の温泉街中心へ歩いて赤褐色の名湯・金の湯へ向かおう。',
      f7_fragment: '有馬温泉駅前に架かる朱色の橋、太閤秀吉像が立つゆけむり広場に隣接。',
      f7_full:
        '「太閤橋」から有馬川とゆけむり広場を望み、日本三古湯の散策を爽やかに始めた。',
      image_prompt:
        'Scenic modern ukiyo-e illustration of Taiko Bridge in Arima Onsen, vermilion bridge over clear mountain stream beside green riverside terraces and warm hot spring town roofs rising up the valley, no text, no letters.',
    },
    {
      name: '有馬本温泉 金の湯',
      spot_type: '休憩',
      description:
        '鉄分と塩分を豊富に含み、空気に触れると赤褐色に染まる有馬の名湯「金泉」を楽しめる外湯。館外に無料の「太閤の足湯」も併設。8:00〜22:00、第2・4火曜休、大人平日650円（土日祝800円）。',
      address: '兵庫県神戸市北区有馬町833',
      prefecture: '兵庫県',
      municipality: '神戸市',
      lat: 34.796797,
      lng: 135.247886,
      clue: '日本三古湯・有馬を代表する赤褐色の名湯「金泉」を気軽に味わえる外湯「有馬本温泉 金の湯」を訪ねよう（8:00〜22:00・第2・4火曜休、大人平日650円・土日祝800円）。鉄分と塩分を豊富に含んだお湯は保湿と保温に優れ、湯上がり後も身体の芯までぽかぽかと温まる。玄関横に併設された無料の足湯「太閤の足湯」でも、名湯の恵みをこれからも気軽にたっぷりと心ゆくまで楽しみたい。',
      surprise:
        'すぐ近くには太閤秀吉の湯殿遺構を見学できる「太閤の湯殿館」もあり、有馬と秀吉の深い結びつきを今に伝えています。',
      hook: '名湯で温まったら、北へすぐの有馬玩具博物館で精巧な玩具の世界に触れよう。',
      f7_fragment: '有馬名物の赤褐色「金泉」に入れる外湯、無料の足湯も併設。',
      f7_full:
        '「有馬本温泉 金の湯」で赤褐色の名湯と足湯に触れ、古湯のぬくもりを実感した。',
      image_prompt:
        'Traditional Japanese hot spring bathhouse illustration of Arima Kin-no-Yu, dark cedar lattice facade with warm glowing paper lanterns and gentle white steam rising into crisp valley air, no text, no letters.',
    },
    {
      name: '有馬玩具博物館',
      spot_type: '見どころ',
      description:
        'ドイツの木工芸品やブリキのおもちゃ、精巧なからくり人形（オートマタ）など約4,000点を展示する博物館。実演やショップも充実。10:00〜17:00、不定休、大人1000円。',
      address: '兵庫県神戸市北区有馬町797',
      prefecture: '兵庫県',
      municipality: '神戸市',
      lat: 34.797065,
      lng: 135.247909,
      clue: 'ドイツの木工芸品や精巧なからくり人形が並ぶ「有馬玩具博物館」へ立ち寄ろう（10:00〜17:00・大人1000円）。大人も夢中になる玩具の仕組みと職人の手仕事をじっくり堪能したい。',
      surprise:
        '館内では係員によるからくり人形の操作実演が行われることもあり、歯車と木組みが生み出す愛らしい動きを間近で楽しめます。',
      hook: '玩具の仕組みに魅せられたら、南の坂を登って行基開創の温泉寺へ向かおう。',
      f7_fragment: 'ドイツの木工玩具や精巧なからくり人形など約4,000点を展示する博物館。',
      f7_full:
        '「有馬玩具博物館」で精巧なからくり人形と木製玩具の温もりに見入り、童心に返った。',
      image_prompt:
        'Charming museum interior illustration of Arima Toys Museum, warm wooden display shelves filled with handcrafted wooden toys, colorful tin trains and whimsical mechanical automata under soft amber gallery lamps, no text, no letters.',
    },
    {
      name: '温泉寺',
      spot_type: '見どころ',
      description:
        '神亀元年（724年）に名僧・行基によって建立されたと伝わる黄檗宗の古刹。有馬温泉の守護寺として親しまれ、紅葉の名所でもある。8:30〜16:30、無休、境内無料（御祖師庵100円）。',
      address: '兵庫県神戸市北区有馬町1643',
      prefecture: '兵庫県',
      municipality: '神戸市',
      lat: 34.795868,
      lng: 135.248186,
      clue: '奈良時代の神亀元年に名僧・行基によって建立されたと伝わる古刹「温泉寺」へ参拝しよう（8:30〜16:30・境内無料）。有馬温泉の守護寺として千三百年近く湯の街を見守り続け、豊臣秀吉の正室・ねねが再建に尽力したゆかりの古刹としても由緒を刻んでいる。石段を登った先にある静かな境内から温泉街の屋根並みをゆっくりと穏やかに見下ろし、古湯に根付いた祈りの歴史をこれからも深く静かに心に感じたい。',
      surprise:
        '温泉寺の向かい側には無色透明のラジウム・炭酸泉を楽しめる公衆浴場「銀の湯」もあり、湯めぐりの拠点となっています。',
      hook: '古刹の静寂を後にしたら、東南東の坂を登り炭酸泉源公園で旅を結ぼう。',
      f7_fragment: '奈良時代に行基が開創した有馬の守護寺、石段の先に静かな境内が広がる。',
      f7_full:
        '「温泉寺」の石段を登って参拝し、有馬温泉を見守り続けてきた古刹の歴史に触れた。',
      image_prompt:
        'Serene hillside Japanese temple illustration of Onsen-ji in Arima, moss-touched stone stairway ascending through bright crimson maple trees toward a dark wooden temple hall overlooking tiled hot spring rooftops, no text, no letters.',
    },
    {
      name: '炭酸泉源公園',
      spot_type: '見どころ',
      description:
        '有馬名物「炭酸せんべい」の原料ともなった天然の炭酸泉が湧き出る泉源を整備した公園。水飲み場では冷たい天然炭酸水を試飲できる。常時開放、無料。',
      address: '兵庫県神戸市北区有馬町1400',
      prefecture: '兵庫県',
      municipality: '神戸市',
      lat: 34.794808,
      lng: 135.250534,
      clue: '有馬温泉の奥座敷に湧く天然の炭酸泉を整備した「炭酸泉源公園」で旅を締めくくろう（常時開放・無料）。石造りの祠の前に設けられた水飲み場からは今も冷たい微炭酸水が湧き出ており、一口含んで大地が育む自然の恵みを体感できる。かつてこの炭酸水に砂糖を混ぜて売られた「鉄砲水」や名物「炭酸せんべい」の物語を思い浮かべながら、有馬の深い余韻をこれからも爽やかにたっぷりと美しく結びたい。',
      surprise:
        '明治時代にはこの炭酸水を瓶詰めにして日本初のサイダーとして売り出した歴史もあり、温泉街のお土産店では今も炭酸せんべいが焼かれています。',
      hook: '',
      f7_fragment: '天然の冷たい炭酸水が湧き出る泉源公園、名物・炭酸せんべいの原点。',
      f7_full:
        '「炭酸泉源公園」で天然の炭酸泉に触れ、有馬の豊かな泉質の物語を味わって旅を結んだ。',
      image_prompt:
        'Tranquil small Japanese stone spring pavilion illustration of Tansan Spring Park in Arima, mossy stone spout pouring clear sparkling spring water beside stone benches shaded by green trees and autumn maples, no text, no letters.',
    },
  ],
};
