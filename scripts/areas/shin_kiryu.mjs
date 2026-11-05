// 新桐生エリア定義（東武新桐生駅から正礼山 普門院、ベーカリー Hitosio、日本料理 うおせん、根岸屋へ編）
// 出典:
// - 東武新桐生駅（群馬県桐生市広沢町2-2986-2）: 昭和7年（1932年）開業、「関東の駅百選」に選定された三角屋根の洋風木造駅舎。
// - 正礼山 普門院（群馬県桐生市広沢町2-3118-1）: 文禄年間（1592〜1596年）開創の高野山真言宗寺院。東武桐生線のすぐ西隣に境内を構える。
// - ベーカリー Hitosio（群馬県桐生市広沢町1-2807-1）: 低温長時間発酵のバゲットや幾重にも層を重ねたクロワッサンが人気のベーカリー。
// - 日本料理 うおせん（群馬県桐生市広沢町1-2689）: 広沢町1丁目で長く愛される日本料理店。目利きの本マグロ刺身や天ぷら御膳などの昼食を提供。
// - 根岸屋（群馬県桐生市広沢町1-2912）: 桐生伝統の焼き菓子「花ぱん」や朝つきの豆大福・だんごで知られる広沢町の老舗和菓子店。
export default {
  slug: "shin_kiryu",
  line: "東武桐生線",
  station: "新桐生",
  station_order: 1,
  area_name: "新桐生",
  title: "三角屋根の洋風駅舎と白蜜が香る花ぱんの街",
  description: "特急りょうもう号が発着する東武桐生線の新桐生駅周辺には、渡良瀬川の南岸に広がる広沢町の穏やかな暮らしと歴史が息づいている。昭和七年開業の洋風三角屋根が映える『東武新桐生駅』から歩き始め、線路のすぐ裏手に佇む文禄年間開創の古刹『正礼山 普門院』、低温長時間発酵の『ベーカリー Hitosio』、鮮魚と出汁が自慢の『日本料理 うおせん』を経て、桐生銘菓の花ぱんを守る『根岸屋』へと続く1.7キロの道のり。",
  category: "街歩き",
  prefecture: "群馬県",
  budget_tier: 2,
  tags: ["新桐生", "東武桐生線", "駅百選", "花ぱん", "ベーカリー"],
  eyecatch_prompt: "Cinematic watercolor background art of the historic 1932 Western-style steep triangular gable roof entrance of Shin-Kiryu Station in Gunma under a clear sky, warm wooden eaves casting soft shadows on the pavement, traditional white sugar-glazed Hanapan biscuits and a flaky croissant in the foreground corner, no people, no text, 16:9 aspect ratio",
  completion_badge: {
    name_ja: "広沢の洋風駅舎と路地をめぐる旅人",
    subtitle_en: "Wayfarer of Hirosawa Gable Station and Alleys",
    description: "東武新桐生駅から正礼山 普門院、ベーカリー Hitosio、日本料理 うおせん、根岸屋までを巡り歩いた証"
  },
  question: "織都・桐生の南玄関から広沢町の路地をめぐる道中で、あなたの記憶に温かく残った風景や味わいはどれですか？",
  choices: [
    {
      key: "A",
      text: "昭和七年の開業時から旅人を迎え続ける『東武新桐生駅』の急勾配な三角屋根",
      description: "関東の駅百選に選ばれた洋風木造駅舎の車寄せと、織物の買継商たちが往来した時代の面影を見上げる瞬間",
      badge: {
        code: "shuin_shin_kiryu_hitosio_croissant",
        name_ja: "昭和の三角屋根駅舎を仰ぐ旅人",
        subtitle_en: "Admirer of the 1932 Gable Roof Station",
        description: "東武新桐生駅の洋風木造駅舎を訪ねた証",
        rarity: 4
      }
    },
    {
      key: "B",
      text: "『正礼山 普門院』の静かな石仏のすぐ裏手を駆け抜ける、東武桐生線の列車の音",
      description: "文禄年間開創の古刹の境内とローカル線の築堤が隣り合う、広沢町ならではの穏やかな日常に触れる体験",
      badge: {
        code: "shuin_shin_kiryu_artisan_baguette",
        name_ja: "線路脇の古刹と石仏に憩う散策者",
        subtitle_en: "Listener to Temple Bells and Passing Trains",
        description: "正礼山 普門院で四百年の祈りと鉄道風景に触れた証",
        rarity: 4
      }
    },
    {
      key: "C",
      text: "『ベーカリー Hitosio』の低温発酵パンと、『日本料理 うおせん』の本マグロ昼膳",
      description: "麦処・群馬の香ばしいクロワッサンと、買継商の街が育んだ本格割烹の味わいを楽しむ時間",
      badge: {
        code: "shuin_shin_kiryu_seasonal_tartine",
        name_ja: "広沢の麦香と割烹の粋を嗜む食通",
        subtitle_en: "Gourmet of Bakery Breads and Washoku",
        description: "ベーカリー Hitosioと日本料理 うおせんを巡った証",
        rarity: 3
      }
    },
    {
      key: "D",
      text: "老舗和菓子司『根岸屋』のガラスケースに並ぶ、白蜜がけの桐生銘菓「花ぱん」",
      description: "梅鉢紋を模した焼き菓子に白い砂糖蜜をまとわせた、桐生伝統の茶菓子を手土産に選ぶひと時",
      badge: {
        code: "shuin_shin_kiryu_sweet_pastries",
        name_ja: "白蜜の花ぱんと菓匠を愛でる粋人",
        subtitle_en: "Connoisseur of Traditional Hanapan Sweets",
        description: "根岸屋で桐生銘菓の花ぱんを手にした証",
        rarity: 3
      }
    }
  ],
  spots: [
    {
      name: "東武新桐生駅",
      spot_type: "見どころ",
      description: "昭和7年（1932年）開業の東武桐生線の主要駅。開業当時の姿を留める急勾配の三角屋根の洋風木造駅舎は「関東の駅百選」に選定されている。",
      address: "群馬県桐生市広沢町2-2986-2",
      prefecture: "群馬県",
      city: "桐生市",
      lat: 36.395102,
      lng: 139.32025,
      clue: "駅前広場に立つと、急勾配の三角屋根が青空に映える『東武新桐生駅』の正面が旅人を迎えてくれる。昭和七年の開業時に建てられた洋風木造駅舎は「関東の駅百選」にも選ばれた名建築で、丸窓を配した車寄せや縦長の窓枠が昭和初期のモダンな気風を今に色濃く伝えている。かつて織物の買継商や職人たちが浅草行きの列車へと乗り込んだ織都・桐生の南玄関の佇まいを、ロータリーからじっくりと見上げてみよう。",
      surprise: "渡良瀬川の南岸に位置するこの駅は、旧桐生市街の南側に新しい玄関口を設けようと昭和七年に東武桐生線が延伸した際に終着駅として開業し、今も特急列車の停車駅として賑わっている。",
      hook: "洋風駅舎の三角屋根を見上げたら南南西へ徒歩8分。線路脇の古刹『正礼山 普門院』へ向かおう。",
      image_prompt: "Architectural watercolor and ink sketch focusing on the steep triangular gable roof and geometric window frame of a 1930s wooden station building, warm ochre and slate tones, generous sky negative space, no people, no text"
    },
    {
      name: "正礼山 普門院",
      spot_type: "見どころ",
      description: "桐生市広沢町2丁目にある高野山真言宗の寺院。安土桃山時代の文禄年間（1592〜1596年）に宥尊法印が草庵を結んだことに始まる古刹。",
      address: "群馬県桐生市広沢町2-3118-1",
      prefecture: "群馬県",
      city: "桐生市",
      lat: 36.391096,
      lng: 139.318226,
      clue: "新桐生駅の駅前広場から線路沿いの道を南南西へ歩くと、築堤の西脇に高野山真言宗『正礼山 普門院』の境内が現れる。文禄年間に草庵が結ばれた古刹で、静かな庭に穏やかな石仏が並んでいる。",
      surprise: "境内のすぐ東側を東武桐生線の線路が通っており、静寂に包まれた寺院の屋根越しに特急りょうもう号やローカル電車が走る、鉄道と古刹が隣り合う独特の景観を形づくっている。",
      hook: "線路脇の古刹に参拝したら東北東へ徒歩12分。青いひさしが目印の『ベーカリー Hitosio』を訪ねよう。",
      image_prompt: "Transparent watercolor and fountain-pen line illustration of a quiet temple stone statue and moss-covered lantern beside seasonal foliage, with a subtle hint of a railway fence behind the temple trees, soft morning light, no people, no text"
    },
    {
      name: "ベーカリー Hitosio",
      spot_type: "買い物",
      description: "桐生市広沢町1丁目の住宅街にあるベーカリー。低温長時間発酵で小麦の旨みを引き出したバゲットやクロワッサン、季節のタルティーヌが人気。",
      address: "群馬県桐生市広沢町1-2807-1",
      prefecture: "群馬県",
      city: "桐生市",
      lat: 36.394194,
      lng: 139.325732,
      clue: "普門院から東北東へ歩き、広沢町一丁目の住宅街へ入ると、青いひさしと木の扉から香ばしい小麦の香りが漂う『ベーカリー Hitosio（ひとしお）』に到着する。「ひとしお（一塩・一入）」の名が示す通り、粉の甘みを際立たせる塩加減と低温長時間発酵にこだわり、幾重にも層が重なる黄金色のクロワッサンやパリッとしたクラストのバゲット、季節の具材をのせたタルティーヌが棚を彩る。お気に入りの焼き立てパンをトングで選んでみよう。",
      surprise: "群馬県は二毛作による小麦栽培が盛んな全国屈指の「麦処」であり、地元の人々にとってうどんや焼きまんじゅうと並んでこだわりのパン屋巡りも日常の楽しみとなっている。",
      hook: "焼き立てのパンを手に入れたら北へ徒歩6分。広沢町の割烹『日本料理 うおせん』で昼食にしよう。",
      image_prompt: "Pastel gouache and ink illustration of flaky golden croissants and crusty rustic baguettes resting on a woven cooling rack beside a wooden bread tong, warm bakery glow, no people, no text"
    },
    {
      name: "日本料理 うおせん",
      spot_type: "食事",
      description: "桐生市広沢町1丁目にある日本料理・割烹。店主が目利きした本マグロの刺身や海鮮丼、揚げたての天ぷらを盛り込んだランチ御膳が評判。",
      address: "群馬県桐生市広沢町1-2689",
      prefecture: "群馬県",
      city: "桐生市",
      lat: 36.397345,
      lng: 139.325272,
      clue: "ベーカリーから北へ歩いて通りへ出ると、落ち着いた和の店構えを見せる『日本料理 うおせん』が暖簾を掲げている。海なし県である群馬にありながら、市場から厳選して仕入れる艶やかな本マグロの刺身や海鮮丼、衣を薄くカラリと揚げた季節の天ぷらを盛り込んだ御膳が昼の名物となっている。丁寧に引いた一番出汁の香る椀物とともに、職人の確かな包丁仕事が光る和食の昼膳を落ち着いた座敷でゆっくりと味わおう。",
      surprise: "織物産業で栄えた桐生では古くから全国より買継商が集まったため、内陸でありながら鮮度の高いマグロや本格的な割烹料理でもてなす食文化が発達した歴史がある。",
      hook: "滋味豊かな和食膳を堪能したら西南西へ徒歩1分。桐生銘菓を守る『根岸屋』へ立ち寄ろう。",
      image_prompt: "Delicate watercolor illustration of a lacquered lunch tray featuring glistening slices of tuna sashimi, crisp golden tempura, and a steaming bowl of miso soup on a tatami-room table, warm ambient lighting, no people, no text"
    },
    {
      name: "根岸屋",
      spot_type: "買い物",
      description: "桐生市広沢町1丁目にある老舗和菓子店。桐生の伝統菓子「花ぱん」や、朝つきの餅で作る豆大福、焼きだんごなどが地元で親しまれている。",
      address: "群馬県桐生市広沢町1-2912",
      prefecture: "群馬県",
      city: "桐生市",
      lat: 36.397128,
      lng: 139.324453,
      clue: "うおせんの店先から西南西へすぐの場所に、昔ながらの暖簾を掲げる老舗の和菓子司『根岸屋』が佇んでいる。ガラスケースの中には、桐生を代表する伝統の焼き菓子「花ぱん」をはじめ、毎朝つきあげる柔らかな餅で粒あんを包んだ豆大福や香ばしい焼きだんごが並んでいる。白い砂糖蜜が結晶のように輝く素朴な花ぱんを旅の土産に買い求め、織都・桐生の南玄関をめぐる穏やかな路地歩きを締めくくろう。",
      surprise: "桐生銘菓の「花ぱん」は、桐生天満宮の梅鉢紋を模した花形の生地を香ばしく焼き上げ、表面に白い砂糖蜜をすり鉢ですりながらまとわせる、織物の街ならではの茶菓子として受け継がれてきた。",
      hook: "",
      image_prompt: "Warm gouache and colored pencil illustration of traditional white sugar-glazed flower-shaped baked confections (Hanapan) and red-bean mochi arranged on a wooden tray wrapped in Japanese paper, soft indoor light, no people, no text"
    }
  ]
};
