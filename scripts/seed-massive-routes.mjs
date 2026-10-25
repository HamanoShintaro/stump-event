import { createClient } from '@supabase/supabase-js';
import ws from 'ws';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');

const routesConfig = [
  {
    id: '4b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d61',
    slug: 'toyoko-north-history',
    title: '東横北部・歴史と社寺をめぐる物語',
    description: '渋谷から田園調布までの北部区間を走り、古社や歴史ある邸宅を巡るルート。時を超えて受け継がれる街のルーツとしるしを刻みます。所要約120〜150分・電車移動推奨。',
    category: '地域を感じたい',
    prefecture: '東京都',
    budget_tier: 1,
    tags: ['歴史', '神社', '寺院', '古道', '散策'],
    question: '金王八幡宮が建つ地は、かつて何の城の砦があった場所と伝えられているでしょう？',
    choices: [
      { key: 'A', text: '渋谷城', description: '渋谷氏が平安時代末期から戦国時代まで本拠地とした城です。', badge_code: 'shuin_toyoko_nh_shibuya' },
      { key: 'B', text: '世田谷城', description: '吉良氏が本拠地とした城で、現在は城址公園となっています。', badge_code: 'shuin_toyoko_nh_setagaya' },
      { key: 'C', text: '品川城', description: '品川氏が東京湾を臨む位置に築いたとされる城です。', badge_code: 'shuin_toyoko_nh_shinagawa' },
      { key: 'D', text: '江戸城', description: '太田道灌や徳川家康が築いた、日本を代表する巨大な城郭です。', badge_code: 'shuin_toyoko_nh_edo' }
    ],
    completion_badge: {
      name_ja: '東横北部歴史の巡礼者',
      subtitle_en: 'Pilgrim of Northern Toyoko History',
      description: '東横線北部区間の歴史ある神社仏閣や旧邸宅をめぐり、しるしを刻み終えた証'
    },
    spotMatcher: (stationName, spots) => {
      if (stationName === '渋谷') return spots.find(s => s.name.includes('金王八幡宮')) || spots[0];
      if (stationName === '代官山') return spots.find(s => s.name.includes('旧朝倉家住宅')) || spots[0];
      if (stationName === '中目黒') return spots.find(s => s.name.includes('目黒川')) || spots[0];
      if (stationName === '祐天寺') return spots.find(s => s.name.includes('祐天寺')) || spots[0];
      if (stationName === '学芸大学') return spots.find(s => s.name.includes('碑文谷公園')) || spots[0];
      if (stationName === '都立大学') return spots.find(s => s.name.includes('八雲氷川神社')) || spots[0];
      if (stationName === '自由が丘') return spots.find(s => s.name.includes('熊野神社')) || spots[0];
      if (stationName === '田園調布') return spots.find(s => s.name.includes('旧田園調布駅舎')) || spots[0];
      return null;
    }
  },
  {
    id: '4b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d62',
    slug: 'toyoko-north-lifestyle',
    title: '東横北部・洗練のモダンライフとカフェ巡り',
    description: '代官山や中目黒、自由が丘など、洗練されたモダンなカフェや雑貨ショップをめぐるライフスタイルに特化したルート。所要約100〜120分。',
    category: '体験したい',
    prefecture: '東京都',
    budget_tier: 2,
    tags: ['カフェ', 'セレクトショップ', '洋菓子', 'モダン', '暮らし'],
    question: '学芸大学にある1952年創業の名門洋菓子店「マッターホーン」の包装紙のイラストを手掛けた画家は誰？',
    choices: [
      { key: 'A', text: '鈴木信太郎', description: '温かみのあるタッチで愛らしい洋菓子の缶や包装紙を描きました。', badge_code: 'shuin_toyoko_nl_shin太郎' },
      { key: 'B', text: '東郷青児', description: '女性像で知られる画家で、多くの洋菓子店や喫茶店の包装紙を手掛けました。', badge_code: 'shuin_toyoko_nl_seiji' },
      { key: 'C', text: '中原淳一', description: '昭和期の少女漫画やライフスタイル提案で逆風を起こした画家です。', badge_code: 'shuin_toyoko_nl_junichi' },
      { key: 'D', text: '竹久夢二', description: '大正ロマンを代表する画家で、美人画や詩作で知られます。', badge_code: 'shuin_toyoko_nl_yumeji' }
    ],
    completion_badge: {
      name_ja: '東横北部モダンライフ巡礼者',
      subtitle_en: 'Pilgrim of Northern Toyoko Modern Life',
      description: '東横線北部区間の洗練されたカフェやモダンなショップをめぐり、しるしを刻み終えた証'
    },
    spotMatcher: (stationName, spots) => {
      if (stationName === '渋谷') return spots.find(s => s.name.includes('茶亭')) || spots[2];
      if (stationName === '代官山') return spots.find(s => s.name.includes('IVY')) || spots[1];
      if (stationName === '中目黒') return spots.find(s => s.name.includes('ONIBUS') || s.name.includes('トラベラーズ')) || spots[2];
      if (stationName === '祐天寺') return spots.find(s => s.name.includes('ブルーボトル')) || spots[1];
      if (stationName === '学芸大学') return spots.find(s => s.name.includes('マッターホーン') || s.name.includes('Aworks')) || spots[2];
      if (stationName === '都立大学') return spots.find(s => s.name.includes('トラスパレンテ')) || spots[1];
      if (stationName === '自由が丘') return spots.find(s => s.name.includes('TODAY') || s.name.includes('ラ・ヴィータ')) || spots[2];
      if (stationName === '田園調布') return spots.find(s => s.name.includes('ペリカン')) || spots[1];
      return null;
    }
  },
  {
    id: '4b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d63',
    slug: 'toyoko-south-retro',
    title: '東横南部・下町の味とレトロ商店街をめぐる',
    description: '新丸子や元住吉、白楽などの活気ある下町商店街や、大正から昭和にかけて愛されてきた老舗・和菓子店を巡るルート。所要約120分。',
    category: '食べたい',
    prefecture: '神奈川県',
    budget_tier: 1,
    tags: ['商店街', '老舗', '煎餅', '和菓子', '純喫茶'],
    question: '白楽にある「六角橋商店街」のように、戦後の何の名残を色濃く伝える商店街と言われているでしょう？',
    choices: [
      { key: 'A', text: '闇市', description: '戦後の混乱期に自然発生的にできた闇市が起源とされています。', badge_code: 'shuin_toyoko_sr_yamiichi' },
      { key: 'B', text: '問屋街', description: '繊維や金物を専門に扱う卸売業者が集まったエリアです。', badge_code: 'shuin_toyoko_sr_tonya' },
      { key: 'C', text: '宿場町', description: '街道沿いに旅人のための宿泊施設が集まってできた町です。', badge_code: 'shuin_toyoko_sr_shukuba' },
      { key: 'D', text: '門前町', description: '大きな寺社の鳥居前や山門前に発達した町割です。', badge_code: 'shuin_toyoko_sr_monzen' }
    ],
    completion_badge: {
      name_ja: '東横南部レトロ商店街巡礼者',
      subtitle_en: 'Pilgrim of Southern Toyoko Retro',
      description: '東横線南部区間のレトロな商店街や老舗の甘味処をめぐり、しるしを刻み終えた証'
    },
    spotMatcher: (stationName, spots) => {
      const targetStations = ['多摩川', '新丸子', '武蔵小杉', '元住吉', '日吉', '綱島', '大倉山', '菊名', '妙蓮寺', '白楽', '反町', '横浜'];
      if (!targetStations.includes(stationName)) return null;
      if (stationName === '多摩川') return spots.find(s => s.name.includes('大黒堂')) || spots[2];
      if (stationName === '新丸子') return spots.find(s => s.name.includes('安藤製菓') || s.name.includes('まりも')) || spots[2];
      if (stationName === '武蔵小杉') return spots.find(s => s.name.includes('グランツリー')) || spots[2];
      if (stationName === '元住吉') return spots.find(s => s.name.includes('イクミママ')) || spots[2];
      if (stationName === '日吉') return spots.find(s => s.name.includes('たかせ') || s.name.includes('シャルル')) || spots[2];
      if (stationName === '綱島') return spots.find(s => s.name.includes('ピーチの木') || s.name.includes('サガン')) || spots[2];
      if (stationName === '大倉山') return spots.find(s => s.name.includes('栗山')) || spots[2];
      if (stationName === '菊名') return spots.find(s => s.name.includes('菓子の家') || s.name.includes('ころん')) || spots[2];
      if (stationName === '妙蓮寺') return spots.find(s => s.name.includes('肉のキザキ')) || spots[2];
      if (stationName === '白楽') return spots.find(s => s.name.includes('六角橋商店街') || s.name.includes('ベーグル')) || spots[0];
      if (stationName === '反町') return spots.find(s => s.name.includes('中山肉店') || s.name.includes('ソネット')) || spots[2];
      if (stationName === '横浜') return spots.find(s => s.name.includes('崎陽軒') || s.name.includes('マウンテン')) || spots[2];
      return null;
    }
  },
  {
    id: '4b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d64',
    slug: 'toyoko-south-scenic',
    title: '東横南部・水辺の絶景と近代の軌跡',
    description: '多摩川のパノラマビューから、等々力緑地、綱島古墳、および横浜開港の歴史が息づく寺院や鉄道遺構を訪ねる絶景散策ルート。所要約120〜150分。',
    category: '癒されたい',
    prefecture: '神奈川県',
    budget_tier: 1,
    tags: ['絶景', '多摩川', '歴史', '公園', '鉄道遺構'],
    question: '反町近くにある「本覚寺」は、幕末の横浜開港時にどこの国の領事館として使われた？',
    choices: [
      { key: 'A', text: 'アメリカ合衆国', description: 'ハリス領事の要請により、本覚寺が初のアメリカ領事館となりました。', badge_code: 'shuin_toyoko_ss_america' },
      { key: 'B', text: 'イギリス', description: 'イギリス領事館は西区の浄瀧寺などに置かれました。', badge_code: 'shuin_toyoko_ss_unitedkingdom' },
      { key: 'C', text: 'フランス', description: 'フランス領事館は中区の慶興寺などに置かれました。', badge_code: 'shuin_toyoko_ss_france' },
      { key: 'D', text: 'オランダ', description: 'オランダ領事館は神奈川区の長延寺などに置かれました。', badge_code: 'shuin_toyoko_ss_netherlands' }
    ],
    completion_badge: {
      name_ja: '東横南部絶景巡礼者',
      subtitle_en: 'Pilgrim of Southern Toyoko Scenic',
      description: '東横線南部区間の美しい自然、歴史的な景観、開港の史跡をめぐり、しるしを刻み終えた証'
    },
    spotMatcher: (stationName, spots) => {
      const targetStations = ['多摩川', '新丸子', '武蔵小杉', '元住吉', '日吉', '綱島', '大倉山', '菊名', '妙蓮寺', '白楽', '反町', '横浜'];
      if (!targetStations.includes(stationName)) return null;
      if (stationName === '多摩川') return spots.find(s => s.name.includes('浅間神社')) || spots[0];
      if (stationName === '新丸子') return spots.find(s => s.name.includes('伏見稲荷')) || spots[0];
      if (stationName === '武蔵小杉') return spots.find(s => s.name.includes('等々力緑地')) || spots[0];
      if (stationName === '元住吉') return spots.find(s => s.name.includes('渋川')) || spots[0];
      if (stationName === '日吉') return spots.find(s => s.name.includes('イチョウ並木')) || spots[0];
      if (stationName === '綱島') return spots.find(s => s.name.includes('綱島公園')) || spots[0];
      if (stationName === '大倉山') return spots.find(s => s.name.includes('記念館')) || spots[0];
      if (stationName === '菊名') return spots.find(s => s.name.includes('菊名神社')) || spots[0];
      if (stationName === '妙蓮寺') return spots.find(s => s.name.includes('妙蓮寺')) || spots[0];
      if (stationName === '白楽') return spots.find(s => s.name.includes('六角橋商店街')) || spots[0];
      if (stationName === '反町') return spots.find(s => s.name.includes('本覚寺')) || spots[0];
      if (stationName === '横浜') return spots.find(s => s.name.includes('鉄道遺構')) || spots[0];
      return null;
    }
  },
  {
    id: '4b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d65',
    slug: 'noda-history',
    title: '東武野田線・大宮盆栽と歴史の薫りを辿る',
    description: '大宮の総鎮守・氷川神社から、世界に誇る大宮盆栽村、江戸時代の豪農古民家、および山城岩槻の時の鐘を経て、春日部の地下神殿に至る歴史と文化の本格ルート。所要約120〜150分。',
    category: '地域を感じたい',
    prefecture: '埼玉県',
    budget_tier: 2,
    tags: ['歴史', '盆栽', '古民家', '時の鐘', '神社'],
    question: '岩槻にある「時の鐘」は、江戸時代初期の寛文11年（1671年）に誰によって最初に鋳造されたと言われている？',
    choices: [
      { key: 'A', text: '岩槻城主・阿部正春', description: '時の城主であった阿部正春が、城下町の人々に正確な時間を知らせるために設置しました。', badge_code: 'shuin_noda_hi_abemasaharu' },
      { key: 'B', text: '太田道灌', description: '室町時代に岩槻城を築城した武将として有名ですが、時の鐘の設置より古い時代です。', badge_code: 'shuin_noda_hi_otadokan' },
      { key: 'C', text: '徳川家康', description: '日光社参の折に岩槻を訪れ、宿場町として整備するよう命じました。', badge_code: 'shuin_noda_hi_tokugawaieyasu' },
      { key: 'D', text: '伊達政宗', description: '戦国・江戸初期の大名で、大宮周辺や岩槻の社寺にも寄進を行っています。', badge_code: 'shuin_noda_hi_datemasamune' }
    ],
    completion_badge: {
      name_ja: '野田線歴史の巡礼者',
      subtitle_en: 'Pilgrim of Noda Line History',
      description: '東武野田線沿線の大宮氷川参道、盆栽文化、城下町岩槻、および地下放水路をめぐり、しるしを刻み終えた証'
    },
    spotMatcher: (stationName, spots) => {
      const targetStations = ['大宮', '北大宮', '大宮公園', '大和田', '七里', '岩槻', '東岩槻', '豊春', '八木崎', '春日部'];
      if (!targetStations.includes(stationName)) return null;
      if (stationName === '大宮') return spots.find(s => s.name.includes('氷川神社')) || spots[0];
      if (stationName === '北大宮') return spots.find(s => s.name.includes('博物館')) || spots[0];
      if (stationName === '大宮公園') return spots.find(s => s.name.includes('盆栽美術館')) || spots[0];
      if (stationName === '大和田') return spots.find(s => s.name.includes('見沼くらしっく館')) || spots[0];
      if (stationName === '七里') return spots.find(s => s.name.includes('風渡野氷川神社')) || spots[0];
      if (stationName === '岩槻') return spots.find(s => s.name.includes('時の鐘')) || spots[0];
      if (stationName === '東岩槻') return spots.find(s => s.name.includes('玄奘塔')) || spots[0];
      if (stationName === '豊春') return spots.find(s => s.name.includes('内牧公園')) || spots[0];
      if (stationName === '八木崎') return spots.find(s => s.name.includes('春日部八幡')) || spots[0];
      if (stationName === '春日部') return spots.find(s => s.name.includes('放水路') || s.name.includes('龍Q館')) || spots[0];
      return null;
    }
  },
  {
    id: '4b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d66',
    slug: 'noda-gourmet',
    title: '東武野田線・街道のローカルグルメと隠れ家カフェ巡り',
    description: '大宮名物の焼きだんごから、盆栽村の伝統茶室、見沼のイチゴ直売所、岩槻の老舗和菓子、および春日部の森のパティスリーまで、美味しい出会いを繋ぐグルメ旅。所要約100〜120分。',
    category: '食べたい',
    prefecture: '埼玉県',
    budget_tier: 1,
    tags: ['だんご', 'パン屋', 'いちご', 'パティスリー', '隠れ家カフェ'],
    question: '春日部市（八木崎駅）にある絵本のような洋館カフェ「菓子工房オークウッド」の横山シェフは、どこの一流ホテルのチーフパティシエを歴任した？',
    choices: [
      { key: 'A', text: 'ホテルオークラ東京', description: '日本の伝統的な名門ホテルで、洋食やパティスリーでも非常に名高いです。', badge_code: 'shuin_noda_go_okurahotel' },
      { key: 'B', text: 'ザ・ペニンシュラ東京', description: '有楽町・日比谷エリアに建つ、香港発祥のラグジュアリーホテルです。', badge_code: 'shuin_noda_go_peninsula' },
      { key: 'C', text: 'グランドハイアット東京', description: '六本木ヒルズ内にある、モダンで国際的な評価の高い一流ホテルです。', badge_code: 'shuin_noda_go_grandhyatt' },
      { key: 'D', text: 'パークハイアット東京', description: '新宿のランドマークであり、横山氏はここの初代製菓長を務めました。', badge_code: 'shuin_noda_go_parkhyatt' }
    ],
    completion_badge: {
      name_ja: '野田線グルメ巡礼者',
      subtitle_en: 'Pilgrim of Noda Line Gourmet',
      description: '東武野田線沿線のだんご店、隠れ家カフェ、老舗の和洋菓子店をめぐり、しるしを刻み終えた証'
    },
    spotMatcher: (stationName, spots) => {
      const targetStations = ['大宮', '北大宮', '大宮公園', '大和田', '七里', '岩槻', '東岩槻', '豊春', '八木崎', '春日部'];
      if (!targetStations.includes(stationName)) return null;
      if (stationName === '大宮') return spots.find(s => s.name.includes('だんご')) || spots[1];
      if (stationName === '北大宮') return spots.find(s => s.name.includes('参道珈琲') || s.name.includes('土手町')) || spots[2];
      if (stationName === '大宮公園') return spots.find(s => s.name.includes('四季の家') || s.name.includes('清香園')) || spots[1];
      if (stationName === '大和田') return spots.find(s => s.name.includes('ルポ') || s.name.includes('シャンドール')) || spots[2];
      if (stationName === '七里') return spots.find(s => s.name.includes('ベーカリー') || s.name.includes('ファーム')) || spots[1];
      if (stationName === '岩槻') return spots.find(s => s.name.includes('栄月堂')) || spots[1];
      if (stationName === '東岩槻') return spots.find(s => s.name.includes('豆の木') || s.name.includes('茶るん')) || spots[2];
      if (stationName === '豊春') return spots.find(s => s.name.includes('珈琲館') || s.name.includes('最中')) || spots[1];
      if (stationName === '八木崎') return spots.find(s => s.name.includes('オークウッド') || s.name.includes('ぷらっと')) || spots[1];
      if (stationName === '春日部') return spots.find(s => s.name.includes('ちぐさ') || s.name.includes('ヤマヤ')) || spots[1];
      return null;
    }
  }
];

const pad = (num, length) => String(num).padStart(length, '0');

async function run() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft spots file not found at: ${draftPath}`);
    process.exit(1);
  }

  const rawSpots = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  
  const routesToUpsert = [];
  const spotsToUpsert = [];
  const badgesToUpsert = [];

  console.log("Compiling themed routes from 300 spots...");

  routesConfig.forEach((routeConf, routeIdx) => {
    // 1. Compile Route
    routesToUpsert.push({
      id: routeConf.id,
      title: routeConf.title,
      description: routeConf.description,
      category: routeConf.category,
      prefecture: routeConf.prefecture,
      budget_tier: routeConf.budget_tier,
      is_published: true,
      thumbnail_url: `/images/${routeConf.slug}/route-eyecatch.png`,
      completion_ceremony_type: "quiz_4choice",
      completion_quiz_data: {
        question: routeConf.question,
        choices: routeConf.choices.map(c => ({
          key: c.key,
          text: c.text,
          description: c.description,
          badge_code: c.badge_code
        }))
      }
    });

    // 2. Select and Construct Spots for this Route
    let spotOrder = 1;
    rawSpots.forEach((stationObj) => {
      const selectedSpot = routeConf.spotMatcher(stationObj.station, stationObj.spots);
      if (selectedSpot) {
        // Construct unique stable 8-4-4-4-12 UUID for this spot in this route
        const prefix = routeConf.slug.includes('toyoko') ? 'f' : 'd';
        const spotId = `${prefix}${routeIdx}111111-1111-1111-1111-11111111${pad(spotOrder, 4)}`;
        
        spotsToUpsert.push({
          id: spotId,
          route_id: routeConf.id,
          name: selectedSpot.name,
          description: selectedSpot.description,
          image_url: `/images/${routeConf.slug}/spot${spotOrder}.png`,
          address: selectedSpot.address,
          location: `POINT(${selectedSpot.lng} ${selectedSpot.lat})`,
          radius_meters: 50,
          order_index: spotOrder
        });
        
        spotOrder++;
      }
    });

    // 3. Compile Badges for this Route
    // Completion Badge (8-4-4-4-12)
    badgesToUpsert.push({
      id: `bc${routeIdx}00000-0000-0000-0000-000000000000`,
      code: `trailblazer_of_${routeConf.id}`,
      category: "route",
      name_ja: routeConf.completion_badge.name_ja,
      subtitle_en: routeConf.completion_badge.subtitle_en,
      rarity: 2,
      description: routeConf.completion_badge.description,
      condition_type: "route_complete",
      condition_params: { route_id: routeConf.id },
      route_id: routeConf.id,
      is_active: true
    });

    // Choice Badges (8-4-4-4-12)
    routeConf.choices.forEach((c, choiceIdx) => {
      badgesToUpsert.push({
        id: `bc${routeIdx}00000-0000-0000-0000-0000000000${pad(choiceIdx + 1, 2)}`,
        code: c.badge_code,
        category: "quiz",
        name_ja: c.text,
        subtitle_en: `Choice ${c.key} of ${routeConf.slug}`,
        rarity: 3,
        description: c.description,
        condition_type: "quiz_choice",
        condition_params: { route_id: routeConf.id, choice: c.key },
        route_id: routeConf.id,
        is_active: true
      });
    });
  });

  console.log(`Seeding ${routesToUpsert.length} routes, ${spotsToUpsert.length} spots, and ${badgesToUpsert.length} badges...`);

  try {
    console.log("Upserting routes...");
    const { error: routeError } = await supabase.from('routes').upsert(routesToUpsert);
    if (routeError) throw routeError;
    console.log("Routes successfully seeded.");

    console.log("Upserting spots...");
    const { error: spotError } = await supabase.from('spots').upsert(spotsToUpsert);
    if (spotError) throw spotError;
    console.log("Spots successfully seeded.");

    console.log("Upserting badges...");
    const { error: badgeError } = await supabase.from('badges').upsert(badgesToUpsert);
    if (badgeError) throw badgeError;
    console.log("Badges successfully seeded.");

    console.log("Database seeded successfully with massive routes non-destructively!");
  } catch (err) {
    console.error("Failed to seed database:", err);
    process.exit(1);
  }
}

run();
