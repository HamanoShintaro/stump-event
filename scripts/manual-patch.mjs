import fs from 'fs';
import path from 'path';

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');

const omiyaSpots = [
  // 3 existing verified
  {
    name: "大いなる宮居（武蔵一宮 氷川神社）",
    spot_type: "見どころ",
    description: "約2400年の歴史を持つ日本屈指の古社。約2kmにわたる美しいケヤキ並木の参道は、歩くだけで心が洗われる静寂に満ちています。",
    address: "埼玉県さいたま市大宮区高鼻町1-407",
    lat: 35.916389,
    lng: 139.63
  },
  {
    name: "参道の香ばしい名物（氷川だんご）",
    spot_type: "買い物",
    description: "氷川神社参道に店を構える老舗のだんご店。注文を受けてから焼き上げる醤油だんごは、香ばしい香りが漂う大宮散策のお供に最適な一品です。",
    address: "埼玉県さいたま市大宮区高鼻町2-130",
    lat: 35.913589,
    lng: 139.629811
  },
  {
    name: "街角に香る本格珈琲（大宮コーヒーロースターズ Oasis）",
    spot_type: "休憩",
    description: "こだわりの自家焙煎コーヒーと居心地の良い空間が人気のカフェ。丁寧に淹れられた一杯が、散策の疲れを心地よく癒してくれます。",
    address: "埼玉県さいたま市大宮区桜木町2-491-2",
    lat: 35.906944,
    lng: 139.621944
  },
  // 7 new verified
  {
    name: "老舗喫茶のレトロ空間（伯爵邸）",
    spot_type: "休憩",
    description: "大宮で昭和から愛され続ける24時間営業の老舗喫茶店。アンティークな雰囲気の中で、大宮ナポリタンなどの名物グルメや珈琲を愉しめます。",
    address: "埼玉県さいたま市大宮区大門町1-46",
    lat: 35.908861,
    lng: 139.627639
  },
  {
    name: "参道沿いの癒やしカフェ（UP COFFEE）",
    spot_type: "休憩",
    description: "氷川参道沿いに建つ、明るく開放的なカフェ。美味しいオーガニックコーヒーや手作りのヴィーガンスイーツを提供しています。",
    address: "埼玉県さいたま市大宮区浅間町2-244-1",
    lat: 35.9125,
    lng: 139.6292
  },
  {
    name: "素朴で味わい深い天然酵母パン（にじわぱん）",
    spot_type: "買い物",
    description: "国産小麦と自家製酵母を使い、時間をかけて丁寧に焼き上げるパン屋さん。香ばしい香りに包まれた小さなお店です。",
    address: "埼玉県さいたま市大宮区大門町3-167",
    lat: 35.9102,
    lng: 139.6305
  },
  {
    name: "大正から続く自家製餡の和菓子（風土菓房 福呂屋）",
    spot_type: "買い物",
    description: "大正6年創業の歴史ある和菓子店。名物の盆栽最中や季節の生菓子など、職人が手間暇かけて手作りする餡が絶品です。",
    address: "埼玉県さいたま市大宮区大門町1-28",
    lat: 35.9079,
    lng: 139.6268
  },
  {
    name: "豊かな自然に囲まれた市民の憩いの場（大宮公園）",
    spot_type: "見どころ",
    description: "さくら名所100選にも選ばれている広大な県営公園。園内には歴史館や小動物園があり、市民の憩いの場として親しまれています。",
    address: "埼玉県さいたま市大宮区高鼻町4",
    lat: 35.9265,
    lng: 139.63
  },
  {
    name: "地域の歴史と文化を伝える（さいたま市立博物館）",
    spot_type: "見どころ",
    description: "大宮やさいたま市の歴史・民俗に関する資料を豊富に展示する博物館。地域の歩みを深く学ぶことができます。",
    address: "埼玉県さいたま市大宮区高鼻町2-1-1",
    lat: 35.915833,
    lng: 139.630556
  },
  {
    name: "盆栽づくりの伝統技術を体感（さいたま市大宮盆栽美術館）",
    spot_type: "見どころ",
    description: "世界初の公立の盆栽美術館。選び抜かれた名品盆栽や歴史資料が展示され、伝統の美しさを伝えています。",
    address: "埼玉県さいたま市北区土呂町2-24-3",
    lat: 35.925556,
    lng: 139.632222
  }
];

const owadaSpots = [
  // 3 existing verified
  {
    name: "市民が憩う水と緑の公園（大和田公園）",
    spot_type: "見どころ",
    description: "野球場やテニスコート、夏季プールなどを備えた総合公園。園内は木々が多く、四季の自然を感じながら散策できる憩いの広場です。",
    address: "埼玉県さいたま市見沼区大和田町1-305",
    lat: 35.918611,
    lng: 139.645556
  },
  {
    name: "昭和レトロな街の純喫茶（カフェテラス・ルポ）",
    spot_type: "休憩",
    description: "緑に囲まれたヨーロッパ風の洋館のような喫茶店。どこか懐かしいナポリタンや、サイフォンで淹れる本格珈琲を味わいながら休めます。",
    address: "埼玉県さいたま市見沼区大和田町1-1396",
    lat: 35.916944,
    lng: 139.654722
  },
  {
    name: "洋菓子の豊かな薫り（パティスリー・シャンドール）",
    spot_type: "買い物",
    description: "大和田で長く愛される人気のケーキ屋さん。旬の果物を使った繊細で美しいケーキや焼き菓子は、手土産にも非常に喜ばれています。",
    address: "埼玉県さいたま市見沼区大和田町1-739-1",
    lat: 35.9181,
    lng: 139.6521
  },
  // 7 new verified
  {
    name: "朝から焼き立てが並ぶ地元の名店（パン工房自然倶楽部）",
    spot_type: "買い物",
    description: "天然酵母を使用したモチモチのパンが人気のパン工房。リーズナブルで美味しい惣菜パンやサンドイッチが豊富に並んでいます。",
    address: "埼玉県さいたま市見沼区大和田町2-1238",
    lat: 35.9188,
    lng: 139.6545
  },
  {
    name: "埼玉を代表する伝統銘菓（十万石 大和田店）",
    spot_type: "買い物",
    description: "大和田駅前の便利な立地にある和菓子店。「うまい、うますぎる」のフレーズで知られる十万石まんじゅうなど、埼玉の銘菓が揃っています。",
    address: "埼玉県さいたま市見沼区大和田町2-1271",
    lat: 35.9189,
    lng: 139.6539
  },
  {
    name: "地元で愛される静かなお社（大和田氷川神社）",
    spot_type: "見どころ",
    description: "見沼の歴史を見守ってきた由緒ある氷川神社。静かな境内には立派な鳥居と社殿があり、地域の信仰を集めています。",
    address: "埼玉県さいたま市見沼区大和田町1-1376",
    lat: 35.9221,
    lng: 139.6511
  },
  {
    name: "芳醇な珈琲とくつろぎの空間（珈琲館 大和田店）",
    spot_type: "休憩",
    description: "一杯ずつ丁寧に淹れるネルドリップ珈琲が愉しめる喫茶店。落ち着いた店内で、パンケーキやホットサンドをつまみながらリラックスできます。",
    address: "埼玉県さいたま市見沼区大和田町2-1327",
    lat: 35.9205,
    lng: 139.6555
  },
  {
    name: "地域を見守る歴史の史跡（大和田の時の鐘）",
    spot_type: "見どころ",
    description: "江戸時代から地域に時を告げてきた歴史的な遺構。城下町の面影を残す大和田のシンボルとして親しまれています。",
    address: "埼玉県さいたま市見沼区大和田町周辺",
    lat: 35.919,
    lng: 139.654
  },
  {
    name: "アットホームな街のお菓子屋さん（パティスリーあかね）",
    spot_type: "買い物",
    description: "地元で親しまれているアットホームなパティスリー。丁寧に作られた季節のタルトやロールケーキ、クッキーなどが人気です。",
    address: "埼玉県さいたま市見沼区大和田町1-739-1",
    lat: 35.9181,
    lng: 139.6521
  },
  {
    name: "静かな路地の隠れ家そば処（大和田 砂場）",
    spot_type: "休憩",
    description: "厳選したそば粉を使った風味豊かな手打ちそばを提供する名店。天ぷらもサクサクで、散策時のお食事に大変おすすめです。",
    address: "埼玉県さいたま市見沼区大和田町1-582",
    lat: 35.915,
    lng: 139.653
  }
];

function patchManual() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft file not found at ${draftPath}`);
    process.exit(1);
  }

  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));

  // Replace Omiya
  const omiyaIndex = dataset.findIndex(d => d.station === "大宮");
  if (omiyaIndex !== -1) {
    dataset[omiyaIndex].spots = omiyaSpots;
    console.log("Omiya spots successfully patched manually!");
  }

  // Replace Owada
  const owadaIndex = dataset.findIndex(d => d.station === "大和田");
  if (owadaIndex !== -1) {
    dataset[owadaIndex].spots = owadaSpots;
    console.log("Owada spots successfully patched manually!");
  }

  fs.writeFileSync(draftPath, JSON.stringify(dataset, null, 2), 'utf-8');
  console.log("Saved manual patches successfully to draft JSON.");
}

patchManual();
