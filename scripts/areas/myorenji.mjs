// 妙蓮寺エリア定義（駅前に広がる池畔の寺院・古民家ブックカフェと緑の谷戸）
export default {
  slug: "myorenji",
  line: "東急東横線",
  station: "妙蓮寺",
  station_order: 17,
  area_name: "妙蓮寺",
  title: "改札を出れば山門と鳥の声——妙蓮寺、池畔の古刹と本を綴る街をめぐる",
  description: "東急東横線・妙蓮寺駅の改札を出ると、すぐ目の前に緑深い山門が立ち、木々の間から鳥の声が響く。大正末期の鉄道敷設にあたり、お寺が境内を譲り渡して生まれたこの街には、今も竹林の古民家カフェや独立書店、水辺の公園が穏やかに息づいている。静かな読書と散歩のしるしを5つ刻む。所要60〜75分・全行程徒歩。",
  category: "癒されたい",
  prefecture: "神奈川県",
  budget_tier: 2,
  tags: ["妙蓮寺", "本屋・生活綴方", "古民家カフェ", "菊名池公園", "読書散歩"],
  eyecatch_prompt: "Peaceful editorial illustration of Myorenji: a wooden temple gate right across from a small train station, a tranquil pond reflecting green trees, and an indie bookstore with hand-printed zines and coffee, soft watercolor and ink wash style.",
  completion_badge: {
    name_ja: "妙蓮寺の巡礼者",
    subtitle_en: "Pilgrim of Myorenji",
    description: "妙蓮寺の境内と水辺、本とパンが息づく街角をめぐり、すべてのしるしを刻み終えた証"
  },
  question: "お寺が自らの境内を電車に譲って生まれた街・妙蓮寺。改札のすぐ隣に森と水辺、本屋と古民家が残るこの街の豊かさとは何か？",
  choices: [
    {
      key: "A",
      text: "分かち合いから始まった街",
      description: "境内を鉄道へ提供したお寺の寛容さが、今も街全体の穏やかな空気を作っている",
      badge: {
        code: "shuin_myorenji_kanryo",
        name_ja: "山門前の旅人",
        subtitle_en: "Traveler at the Temple Gate",
        description: "寺と駅が一体となって生まれた妙蓮寺の成り立ちに触れた証",
        rarity: 3
      }
    },
    {
      key: "B",
      text: "自分の言葉で暮らしを綴る",
      description: "ただ消費するのではなく、本やZINE、手料理を自らの手で丁寧に編む文化",
      badge: {
        code: "shuin_myorenji_tsuzurikata",
        name_ja: "生活の綴り手",
        subtitle_en: "Writer of Everyday Life",
        description: "妙蓮寺に根づく独立書店と手作りのカルチャーに共鳴した証",
        rarity: 3
      }
    },
    {
      key: "C",
      text: "竹林と縁側が守る余白",
      description: "都市のなかに古民家と緑陰を残し、深呼吸できる時間を手放さないこと",
      badge: {
        code: "shuin_myorenji_engawa",
        name_ja: "縁側の休息者",
        subtitle_en: "Rester on the Veranda",
        description: "竹林の古民家と緑の谷戸で心ほどける時間を過ごした証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "水辺と木漏れ日のリズム",
      description: "焼きたてのパンや一冊の本を携えて、池のほとりをゆっくり歩ける日常",
      badge: {
        code: "shuin_myorenji_mizube",
        name_ja: "水辺の読書家",
        subtitle_en: "Reader by the Waterside",
        description: "池畔の風と本のページが重なる妙蓮寺の休日を味わった証",
        rarity: 4
      }
    }
  ],
  spots: [
    {
      name: "駅に境内を譲った緑の寺院（長光山 妙蓮寺）",
      spot_type: "見どころ",
      description: "妙蓮寺駅の目の前に広がる日蓮宗の寺院。明治41年（1908年）に旧・妙仙寺と旧・蓮光寺が合併して「妙蓮寺」となり、大正15年（1926年）の東横線開通時には境内地を提供して妙蓮寺駅が誕生した。",
      address: "神奈川県横浜市港北区菊名2-1-5",
      prefecture: "神奈川県",
      city: "横浜市",
      lat: 35.498362,
      lng: 139.634368,
      clue: "改札を出ると、ロータリーではなくお寺の山門が目の前に現れる。1926年、東京横浜電鉄（現・東急東横線）の線路が境内を通ることになった際、当時の住職が快く敷地を提供したことで「妙蓮寺駅」が生まれた。鳥の声が響く広い境内で、最初のしるしを刻む。",
      surprise: "駅のホームと山門がすぐ隣り合いながら、一歩入ると別世界のように静まり返る杜。",
      hook: "お寺の北西へ歩き、竹林の小径の奥に隠れた古民家カフェを訪ねよう。"
    },
    {
      name: "竹林の小径を抜ける古民家の縁側（HUG CAFE）",
      spot_type: "食事",
      description: "竹やぶの小道を抜けた先に佇む築古民家を活用したカフェ。縁側のある懐かしい和室で、丁寧に作られた一汁三菜の定食や自家製スイーツが味わえる。",
      address: "神奈川県横浜市港北区菊名2-17-13",
      prefecture: "神奈川県",
      city: "横浜市",
      lat: 35.500035,
      lng: 139.634003,
      clue: "住宅街の入口から竹林の小径を通り抜けると、おばあちゃんの家に帰ってきたような縁側が現れる。古民家を壊さず、地域の食卓や語らいの場として編み直した空間だ。風が揺らす竹の葉音を聞きながら、2つ目のしるしを刻む。",
      surprise: "竹林のアプローチを抜けた瞬間に開ける昭和の和室と、庭を望む縁側。",
      hook: "線路を渡って南東の商店街へ。フランス仕込みの香りが漂うベーカリーに立ち寄ろう。"
    },
    {
      name: "フランス仕込みの香ばしい日常パン（Boulangerie 14区）",
      spot_type: "買い物",
      description: "パリの14区で修業したシェフが営むベーカリー。国産小麦と無添加にこだわったバゲットやクロワッサン、季節のデニッシュが地元で愛されている。",
      address: "神奈川県横浜市港北区菊名1-4-2",
      prefecture: "神奈川県",
      city: "横浜市",
      lat: 35.49825,
      lng: 139.632462,
      clue: "パリ14区のパン屋の空気をそのまま妙蓮寺の街角へ移したようなブーランジェリー。幾重にも折り込まれたクロワッサンや香ばしいハード系パンは、この街の穏やかな朝と散歩の時間を支えている。3つ目のしるしを刻む。",
      surprise: "美しい層を成す黄金色のクロワッサンと、店内に満ちる発酵バターの香り。",
      hook: "パンを携えて少し北へ。街の文化拠点となっている小さな独立書店へ向かおう。"
    },
    {
      name: "本を読み、本を綴る独立書店（本屋・生活綴方）",
      spot_type: "買い物",
      description: "妙蓮寺の老舗「石堂書店」から生まれた、「本を売る、本をつくる」がコンセプトの独立書店。リソグラフ印刷機を備え、詩歌・エッセイ・ZINEなどが並ぶ。",
      address: "神奈川県横浜市港北区菊名1-7-8",
      prefecture: "神奈川県",
      city: "横浜市",
      lat: 35.498491,
      lng: 139.632002,
      clue: "店名の「生活綴方」とは、日々の暮らしをありのまま自分の言葉で綴る教育運動に由来する。棚には詩やエッセイ、作り手の熱がこもったZINEが並び、奥にはリソグラフ印刷機が鎮座する。本を読む人が、いつしか自分の物語を綴りたくなる場所で、4つ目のしるしを刻む。",
      surprise: "リソグラフで刷られた色鮮やかなZINEや、手書きの言葉が添えられた本棚。",
      hook: "最後はすぐ近くの菊名池公園へ。水辺のベンチで今日の歩みを振り返ろう。"
    },
    {
      name: "水鳥が羽を休める谷戸の水辺（菊名池公園）",
      spot_type: "見どころ",
      description: "かつて農業用の溜池だった「菊名池」を中心に整備された親水公園。水辺の遊歩道と柳や桜の木々が四季の風景を映し出す。",
      address: "神奈川県横浜市港北区菊名1-8-1",
      prefecture: "神奈川県",
      city: "横浜市",
      lat: 35.500526,
      lng: 139.632833,
      clue: "お寺の森と連なるように広がる、静かな菊名池の水面。かつて村の田畑を潤した池は、今も水鳥と街の人々が羽を休める水辺として守られている。山門から始まり、縁側と本屋をめぐった妙蓮寺の物語——水面に映る空を見上げながら、最後のしるしを刻もう。",
      surprise: "穏やかな水面に映る木々の緑と、池のほとりをゆっくり歩く人々の姿。",
      hook: ""
    }
  ]
};
