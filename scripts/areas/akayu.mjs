export default {
  slug: 'akayu',
  station_order: 605,
  station: '赤湯駅',
  line: 'JR奥羽本線・山形新幹線',
  area_name: '赤湯・いで湯と桜丘の街',
  prefecture: '山形県',
  municipality: '南陽市',
  category: '歴史・文化',
  budget_tier: 2,
  tags: ['山形県', '南陽市', '赤湯駅', '赤湯温泉', '烏帽子山八幡宮'],
  style_genre: 'pictorial_isometric_map',
  title: '赤湯の湯煙と桜丘・南陽の暮らしを歩く',
  description:
    '山形新幹線も停まる赤湯駅から、全国に知られる赤湯からみそラーメン発祥の麺処や郷土の偉人を伝える記念館を巡り、温泉街の老舗あんびん餅と路地の喫茶を経て、継ぎ目なしの大石鳥居が立つ烏帽子山八幡宮へと至る、南陽の湯の町を辿る散策路。',
  eyecatch_prompt:
    'Elevated isometric pictorial travel map illustration of Akayu Onsen town in Yamagata, featuring the monumental stone torii gate of Eboshiyama Hachimangu on a cherry blossom hill, steaming red-miso ramen shop, traditional mochi storehouse, and quiet museum garden on natural textured cream paper, no text, no people.',
  question:
    '湯煙と桜丘が寄り添う赤湯の町で、あなたが旅の土産話に最初へ添えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 5,
      text: '「烏帽子山八幡宮」の継ぎ目なし大石鳥居をくぐり、赤湯の町並みを見渡した瞬間',
      subtext:
        '地域の誇りを映す堂々たる鳥居と桜丘の広がりに、温泉街を見守り続ける社の気配を感じた。',
      badge: {
        code: 'akayu_eboshiyama',
        name_ja: '烏帽子山・桜丘の見守り人',
        subtitle_en: 'Watcher of Eboshiyama Hill',
        description:
          '烏帽子山八幡宮を訪ね、大石鳥居と桜の名所として親しまれる赤湯の高台を歩いた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a grand stone torii gate framed by soft pink cherry blossom branches overlooking rooftops, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 1,
      text: '「龍上海 赤湯本店」で、赤い辛味噌が溶け出す濃厚な一杯を味わった瞬間',
      subtext:
        '魚介の旨みと青海苔の香りが立ち昇る老舗の味に、東北の旅ならではの温もりを得た。',
      badge: {
        code: 'akayu_ryushanhai',
        name_ja: '赤湯・辛味噌の一杯を味わいし者',
        subtitle_en: 'Taster of Akayu Karami-Miso',
        description:
          '龍上海 赤湯本店を訪ね、南陽で生まれ愛され続けてきたご当地麺の原点に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem featuring a steaming ceramic bowl of red-miso ramen topped with spicy red miso paste and green nori flakes, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 2,
      text: '「南陽市立結城豊太郎記念館」の蔵造り風展示室で、郷土の先人の足跡に触れた瞬間',
      subtext:
        '温泉地としての顔だけでなく、金融や商業で時代を支えた南陽の知的な側面に驚かされた。',
      badge: {
        code: 'akayu_yuki_kinenkan',
        name_ja: '置賜の先人・学びの記憶を継ぐ者',
        subtitle_en: 'Keeper of Akayu Heritage',
        description:
          '南陽市立結城豊太郎記念館を訪ね、郷土の偉人の足跡と蔵の街の記憶に触れた証。',
        rarity: 2,
        image_prompt:
          'A circular emblem showing a traditional white-plastered Japanese storehouse museum roof and green garden pine tree, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 3,
      text: '「田中屋あんびんや」で、湯の町の朝を告げるつきたてのあんびん餅を手にした瞬間',
      subtext:
        '素朴な甘さと柔らかな餅のぬくもりに、温泉街の穏やかな日常がそのまま息づいていた。',
      badge: {
        code: 'akayu_anbinya',
        name_ja: 'いで湯の朝・あんびん餅の旅人',
        subtitle_en: 'Traveler of Akayu Morning Sweets',
        description:
          '田中屋あんびんやを訪ね、赤湯温泉に根付く老舗餅菓子の味わいと朝の風景に触れた証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting two freshly dusted white daifuku mochi cakes on a warm wooden tray beside a ceramic teacup, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'akayu_complete',
    name_ja: '赤湯・いで湯と桜丘の物語を歩みし者',
    subtitle_en: 'Walker of Akayu Onsen Town',
    description:
      '龍上海 赤湯本店から結城豊太郎記念館、田中屋あんびんや、きなりcafe、烏帽子山八幡宮までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a stone torii gate, a steaming ramen bowl, and cherry blossom petals over hills, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '龍上海 赤湯本店',
      spot_type: '食事',
      description:
        '赤湯からみそラーメン発祥として全国に知られる老舗麺処。魚介と動物系が調和したスープに赤い辛味噌を溶かしながら味わう。営業時間11:30〜19:00、水曜定休。',
      address: '山形県南陽市二色根6-18',
      prefecture: '山形県',
      city: '南陽市',
      lat: 38.050382,
      lng: 140.163212,
      clue: '赤湯駅から東へ歩き、湯の町の入口にあたる二色根の「龍上海 赤湯本店」を訪ねよう（11:30〜19:00、水曜定休）。全国に名を知られる赤湯からみそラーメン発祥の本店だ。魚介の風味とコク深い味噌スープの中央に赤い辛味噌が乗り、太めの縮れ麺に少しずつ溶かしながら味わうのが定番。青海苔の爽やかな香りが鼻を抜け、食べ終える頃には体の芯からぽかぽかと温まり、南陽のまち歩きへ弾みがつく。',
      surprise:
        'もともと醤油味のラーメンを賄いで味噌仕立てに工夫したことから始まったという歴史が、寒冷な土地の食の知恵を物語る。赤い辛味噌が少しずつスープへ溶け出し、旨みと刺激が幾重にも広がっていく瞬間の迫力と余韻は、やはり本店ならではの臨場感に満ち渡る。',
      hook: '龍上海で体が温まったら、南東へ徒歩4分の南陽市立結城豊太郎記念館へ向かおう。',
      f7_fragment: '湯気の向こうで赤く溶け出す、南陽が誇る辛味噌と青海苔の香ばしい原点。',
      f7_full: '二色根の老舗「龍上海 赤湯本店」で青海苔香る辛味噌の一杯を味わい、南陽・赤湯のまち歩きを温かな余韻とともに始めた。',
      image_prompt:
        'Interior counter view of a traditional Japanese noodle shop with a steaming bowl of red-miso ramen topped with spicy red miso paste and nori flakes, no text, no people.',
    },
    {
      name: '南陽市立結城豊太郎記念館',
      spot_type: '見どころ',
      description:
        '赤湯出身で日銀総裁などを歴任した結城豊太郎の功績と郷土資料を伝える記念館。蔵造り風の落ち着いた館内と庭園を見学できる。開館9:00〜16:30（入館16:00まで）、月曜休館・入館無料。',
      address: '山形県南陽市赤湯362',
      prefecture: '山形県',
      city: '南陽市',
      lat: 38.048428,
      lng: 140.165042,
      clue: '龍上海から南東へ徒歩4分、白壁と蔵造りの面影を残す「南陽市立結城豊太郎記念館」へ足を向けよう（9:00〜16:30、月曜休館・無料）。赤湯生まれで日銀総裁などを務めた結城豊太郎の足跡を伝え、ゆかりの品々や郷土の書物を静かに展示する。敷地内の落ち着いた庭園を眺めながら歩けば、温泉地としての顔だけではない置賜の知的な一面が立ち現れてくる。無料で気軽に立ち寄れるのも旅人には嬉しい。',
      surprise:
        '日本の金融の中枢を担った人物が赤湯の出身だったと知ると、静かな温泉街の風景に重厚な歴史の奥行きが加わる。蔵風の資料室に差し込む柔らかな自然光の中で、ふるさと南陽の文化や暮らしを思い続けた生涯の軌跡にじっくりと触れられ、旅の視点がいっそう深まる。',
      hook: '記念館を出たら、北北東へ徒歩3分の田中屋あんびんやを訪ねよう。',
      f7_fragment: '白壁と黒瓦の蔵に静かに息づく、置賜の先人が残した学びと文化の記憶。',
      f7_full: '「南陽市立結城豊太郎記念館」で郷土の先人が歩んだ足跡と貴重な資料に触れ、温泉街の奥にある置賜の歴史を丁寧に辿った。',
      image_prompt:
        'Quiet traditional Japanese memorial museum exterior with white plaster walls, black tile roof and green garden trees in Akayu Yamagata, no text, no people.',
    },
    {
      name: '田中屋あんびんや',
      spot_type: '買い物',
      description:
        '赤湯温泉街で早朝から営業する老舗の餅菓子店。この地域で大福を意味する名物「あんびん」が評判で、午前中に売り切れることも多い。営業時間7:00〜売り切れ次第終了、第1・第3水曜定休。',
      address: '山形県南陽市赤湯851-1',
      prefecture: '山形県',
      city: '南陽市',
      lat: 38.049923,
      lng: 140.165681,
      clue: '記念館から北北東へ徒歩3分、温泉街の路地に構える老舗「田中屋あんびんや」へ（7:00〜売り切れ次第終了、第1・第3水曜定休）。つきたて柔らかな赤湯名物のあんびん餅を求めよう。',
      surprise:
        'この辺りでは大福を親しみを込めて「あんびん」と呼び、湯治客や地元の人々が朝一番に買い求める姿が日常の風景になっている。つきたての餅がなくなり次第、売り切れ御免で暖簾を下ろす潔さもまた、昔ながらの温泉街らしい風情として長く愛され続ける理由だ。',
      hook: 'あんびんやの次は、すぐ近くのきなりcafeで珈琲を一服しよう。',
      f7_fragment: 'いで湯の町の朝を静かに告げる、つきたてのあんびん餅の優しいぬくもり。',
      f7_full: '温泉街の老舗「田中屋あんびんや」を訪ね、湯の町の暮らしに深く根付いた素朴なあんびん餅の優しい味わいに出会った。',
      image_prompt:
        'Traditional Japanese mochi sweet shop wooden counter with fresh white daifuku rice cakes dusted with flour on wooden trays in soft morning light, no text, no people.',
    },
    {
      name: 'きなりcafe',
      spot_type: '休憩',
      description:
        '赤湯温泉の静かな通り沿いに佇む落ち着いたカフェ。木の温もりを生かした店内で珈琲や季節のスイーツを楽しめる。営業時間10:30〜16:00、水・木・日曜定休。',
      address: '山形県南陽市赤湯853-4',
      prefecture: '山形県',
      city: '南陽市',
      lat: 38.050144,
      lng: 140.165243,
      clue: 'あんびんやから北西へ徒歩1分、赤湯温泉の静かな通り沿いに佇む「きなりcafe」でひと息つこう（10:30〜16:00、水・木・日曜定休）。木の温もりを生かした穏やかな店内では、丁寧に淹れられた珈琲や季節のスイーツが楽しめる。温泉街の賑わいから一歩引いた空間は、丘の上の神社へ向かう前の小休止にちょうどいい。窓から差し込む柔らかな光を受けながら、まち歩きの余白をゆっくり味わおう。',
      surprise:
        '老舗の和菓子屋や共同浴場が並ぶ歴史ある通りの中に、肩の力を抜いて過ごせる優しい空間が自然と溶け込んでいる。古い湯の町と新しい感性が無理なく寄り添い合う赤湯の懐の深さを、丁寧に淹れられた一杯のカップからじんわりと感じ取れるのが旅には心から嬉しい。',
      hook: 'カフェで寛いだら、北東へ徒歩3分の烏帽子山八幡宮へ登ろう。',
      f7_fragment: '温泉街の静かな路地に寄り添う、木の香りと丁寧な珈琲のひととき。',
      f7_full: '赤湯温泉の「きなりcafe」で木の温もりに包まれながら香り高い珈琲を味わい、丘の上の神社へ向かう前の心と足を整えた。',
      image_prompt:
        'Cozy small Japanese wooden cafe interior with a ceramic coffee cup and slice of handmade cake on a natural wood table near a window, no text, no people.',
    },
    {
      name: '烏帽子山八幡宮',
      spot_type: '見どころ',
      description:
        '赤湯温泉街の背後にそびえる烏帽子山公園の頂に鎮座する古社。継ぎ目のない石造りの大鳥居と千本桜の名所として知られる。境内参拝自由・無休。',
      address: '山形県南陽市赤湯1415',
      prefecture: '山形県',
      city: '南陽市',
      lat: 38.051274,
      lng: 140.167226,
      clue: 'カフェを出て北東へ徒歩3分、緩やかな坂を登った先に赤湯のまちを見守る「烏帽子山八幡宮」が鎮座する（境内自由・無休）。参道にそびえる巨大な石鳥居は、継ぎ目のない石造りとして日本有数の規模を誇り、見上げると思わず背筋が伸びる迫力だ。境内一帯は桜の名所としても知られ、春にはおよそ千本の桜が丘を淡い紅色に染め上げる。拝殿で手を合わせたあとは、赤湯の街並みを望んで旅を締めくくろう。',
      surprise:
        '千本もの桜が植えられた丘と圧巻の大石鳥居は、かつて地域の有志がまちの未来を願って築き上げた結晶だという。温泉の恵みとともに世代を超えて大切に受け継がれてきた誇りが、丘の上の澄んだ空気の中にいつまでも静かに満ち渡り、歩く者の胸を深く打ち続ける。',
      hook: '',
      f7_fragment: '継ぎ目なき大鳥居の先に堂々と広がる、桜丘と赤湯の町並みの記憶。',
      f7_full: '赤湯の町を見下ろす「烏帽子山八幡宮」に詣で、日本有数の大石鳥居と桜丘の美しい風景の中で南陽の旅を締めくくった。',
      image_prompt:
        'Monumental stone torii gate and wooden Shinto shrine on a hillside park surrounded by cherry trees overlooking Akayu town in Yamagata, no text, no people.',
    },
  ],
};
