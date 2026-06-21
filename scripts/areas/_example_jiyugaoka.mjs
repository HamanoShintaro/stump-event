// 記入済みエリア定義の実例（自由が丘）。コピーして新エリアを作る。
export default {
  slug: "jiyugaoka",
  line: "東急東横線・大井町線",
  station: "自由が丘",
  station_order: 1,
  area_name: "自由が丘",
  title: '自由が丘で、"自由"の正体を探す',
  description: "写真映えのヴェネツィア、暮らしの雑貨、桜の緑道。おしゃれな街として知られる自由が丘。でも、この街はなぜ\"自由\"を名乗るのか？ 5つのスポットには答えではなく、食い違う\"手がかり\"だけが置かれている。所要60〜90分・全行程徒歩。",
  category: "地域を感じたい",
  prefecture: "東京都",
  budget_tier: 1,
  tags: ["水", "暗渠", "神社", "再開発", "名前の街"],
  completion_badge: { name_ja: "自由が丘の巡礼者", subtitle_en: "Pilgrim of Jiyugaoka", description: "自由が丘の街に秘められたすべての手がかりをめぐり、しるしを刻み終えた証" },
  question: '自由が丘の"自由"は、何から生まれたか？',
  choices: [
    { key: "A", text: "名乗ること", description: "谷畑が学校の名を借り自由が丘と名乗った", badge: { code: "shuin_jiyugaoka_sokyu", name_ja: "蒼穹", subtitle_en: "The Azure Sky", description: "自由とは自らの意志で名を名乗り理想を描くことと答えた証" } },
    { key: "B", text: "手放すこと", description: "本物の川を地下に隠し湿地を捨てて理想を描いた", badge: { code: "shuin_jiyugaoka_ankyo", name_ja: "暗渠を見た者", subtitle_en: "The Culvert Witness", description: "自由とは不都合な過去を覆い隠し手放すことと答えた証" } },
    { key: "C", text: "選び直し続けること", description: "教育→暮らし→再開発と意味を更新し続ける", badge: { code: "shuin_jiyugaoka_koshin", name_ja: "更新する街の住人", subtitle_en: "The Regenerator", description: "自由とは意味を選び直し続けることと答えた証" } },
    { key: "D", text: "借り物かもしれない", description: "運河も学校名も外から借りた", badge: { code: "shuin_jiyugaoka_inyo", name_ja: "引用者", subtitle_en: "The Quoter", description: "自由とは他所の名や概念を借りて自己を語ることと答えた証" } }
  ],
  spots: [
    { name: "谷畑の権現さま（自由が丘熊野神社）", spot_type: "見どころ", description: "自由が丘の総鎮守。御朱印（来訪証明）の本家であり、あなたが集める押印の原点。", address: "東京都目黒区自由が丘1-24-12", lat: 35.609138, lng: 139.669865,
      clue: 'この街が"自由が丘"と名乗る前、ここは"谷畑（やばた）"という谷あいの土地だった。神様は今も"谷畑の権現さま"。"自由"は最初からここにあった名前ではない。',
      surprise: '授与所の本物の御朱印。「集めるSHUINの"原本"がここにある」',
      hook: "次は水もないのに運河がある。なぜ人はないものを描く？" },
    { name: "水のない街の運河（La Vita／ラ・ヴィータ）", description: "ヴェネツィアの街並みを再現した、自由が丘で最も写真に撮られる一角。", address: "東京都目黒区自由が丘2-8-3", lat: 35.611115, lng: 139.667597,
      clue: '水のない街が運河を描き、"ヴェネツィア"という他人の名を名乗る。なぜ人は、自分のものでない名前で自分を語る？',
      surprise: "運河の水の行き先を目で追う（循環でどこにも流れない）。",
      hook: '次は"自由"を売る店。街の名のもとの自由とは別物の自由を。' },
    { name: "暮らしをDIYする店（TODAY'S SPECIAL Jiyugaoka）", spot_type: "買い物", description: "「食とくらしのDIY」がテーマの旗艦店。", address: "東京都目黒区自由が丘2-17-8", lat: 35.608933, lng: 139.666144,
      clue: '街の名は昭和2年"自由ヶ丘学園"＝教育の自由。今この店が売るのは"暮らしの自由"。同じ言葉で中身が入れ替わっている。',
      surprise: "面する道「学園通り」の標識（消えた学校名の名残）を見つける。",
      hook: "次は時間が止まったビル。隣に新しい塔が建つのに、なぜ残る？" },
    { name: "昭和の密度が残るビル（自由が丘デパート）", description: "駅前にそびえる昭和から続く象徴的な商業ビル。", address: "東京都目黒区自由が丘1-28-8", lat: 35.607908, lng: 139.668500,
      clue: '隣で再開発の塔が建つ。このビルだけ昭和の密度のまま。"自由"とは新しくなり続けることか、残すと決めることか。',
      surprise: "迷路の奥の、更新されていない昭和の一軒・手書き看板を見つける。",
      hook: "最後に気づく。さっきからずっと、隠されたものの上を歩いていた。" },
    { name: "川の上を歩いていた（九品仏川緑道／グリーンストリート）", spot_type: "休憩", description: "駅南口からのびる石畳の散歩道。九品仏川を1974年に暗渠化してできた道。", address: "東京都目黒区自由が丘1丁目", lat: 35.606353, lng: 139.668630,
      clue: "あなたはさっきから川の上を歩いている。九品仏川は地下に隠された。見えない川の上に、おしゃれな街は立っている。さあ、あなたの番だ。",
      surprise: "橋名遺構「鶯谷橋」「城向橋」／川の蛇行カーブを自力で見つける。",
      hook: "" }
  ]
};
