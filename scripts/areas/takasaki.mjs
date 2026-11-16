export default {
  slug: 'takasaki',
  station_order: 647,
  station: '高崎',
  line: 'JR高崎線',
  area_name: '高崎・旧邸宅の美とレトロ純喫茶の城下町',
  prefecture: '群馬県',
  municipality: '高崎市',
  category: '街歩きとアート',
  budget_tier: 2,
  tags: ['群馬県', '高崎市', '高崎駅', '純喫茶', '高崎城址'],
  style_genre: 'editorial_clean_ink',
  title: '高崎・名建築と純喫茶の城下町を歩く',
  description:
    'JR高崎駅から、アントニン・レーモンドの建築思想を継ぐ「高崎市美術館・旧井上房一郎邸」と鞘町の音楽と珈琲の隠れ家「SLOW TIME cafe」、白壁の乾櫓が残る「高崎城址公園」、源頼政公ゆかりの「頼政神社」、高崎総鎮守「高崎神社」を巡る散策路。',
  eyecatch_prompt:
    'Editorial clean ink and warm watercolor illustration of Takasaki castle town in Gunma showing the white-walled castle turret and moat of Takasaki Castle Park, modernist wooden residence of Inoue Fusaichiro, cozy Showa retro coffee house, and historic stone torii gate of Takasaki Shrine, warm Washi paper palette with vermilion accents, no text, no letters, no numbers, no labels.',
  question: '建築と純喫茶、城跡と古社が駅近くに凝縮する高崎を歩いたあと、誰かに伝えたい場面はどれですか？',
  choices: [
    {
      key: 'A',
      spot_index: 1,
      text: '「高崎市美術館・旧井上房一郎邸」で、戦後の高崎文化を支えたモダニズムの平屋と庭を眺めた瞬間',
      subtext:
        '建築家アントニン・レーモンドの自宅兼事務所を移築したような清々しい木造空間が印象に残った。',
      badge: {
        code: 'takasaki_inouetei',
        name_ja: '高崎・旧井上房一郎邸のモダニズムを仰ぎし者',
        subtitle_en: 'Admirer of Inoue Residence',
        description:
          '高崎市美術館・旧井上房一郎邸を訪ね、高崎の文化振興を支えた名建築に触れた証。',
        rarity: 4,
        image_prompt:
          'A circular emblem depicting a clean modernist wooden Japanese house with deep eaves and a tranquil moss garden, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'B',
      spot_index: 2,
      text: '「SLOW TIME cafe」の音楽とアートブックに囲まれた空間で、こだわりの珈琲を味わった瞬間',
      subtext:
        '鞘町のビル二階に広がる心地よい隠れ家カフェの時間が、街歩きの足を優しく休ませてくれた。',
      badge: {
        code: 'takasaki_slowtime',
        name_ja: '高崎・鞘町のSLOW TIME cafeで寛ぎし者',
        subtitle_en: 'Guest of SLOW TIME cafe',
        description:
          'SLOW TIME cafeを訪ね、音楽とアートブックに囲まれた鞘町の空間で珈琲を味わった証。',
        rarity: 3,
        image_prompt:
          'A circular emblem showing a warm ceramic coffee cup beside art books and vinyl records on a wooden cafe table, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'C',
      spot_index: 3,
      text: '「高崎城址公園」のお堀端に立ち、移築復元された白壁の乾櫓と東門を見上げた瞬間',
      subtext:
        '井伊直政が築いた高崎城の面影が、水面に映る松並木とともに静かに息づいていた。',
      badge: {
        code: 'takasaki_castle',
        name_ja: '高崎・井伊直政ゆかりの高崎城址を巡りし者',
        subtitle_en: 'Walker of Takasaki Castle',
        description:
          '高崎城址公園を訪ね、白壁の乾櫓と東門が残る城跡のお堀端を散策した証。',
        rarity: 3,
        image_prompt:
          'A circular emblem depicting a white-plastered Japanese castle turret and wooden gate reflected in a calm stone moat with pine trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '「高崎神社」の厳かな参道を歩き、高崎の総鎮守の社殿前で旅の締めくくりに手を合わせた瞬間',
      subtext:
        '鎌倉時代から続く城下町の守り神が、赤坂の杜の中で今も穏やかに街を見守っていた。',
      badge: {
        code: 'takasaki_shrine',
        name_ja: '高崎・総鎮守の高崎神社を詣でし者',
        subtitle_en: 'Worshipper of Takasaki Shrine',
        description:
          '高崎総鎮守の高崎神社を訪ね、鎌倉時代から続く歴史ある社殿へ参拝した証。',
        rarity: 4,
        image_prompt:
          'A circular emblem showing a solemn wooden Shinto shrine pavilion and stone torii gate surrounded by ancient sacred trees, soft cream Washi paper margin around edges, no text, no letters.',
      },
    },
  ],
  completion_badge: {
    code: 'takasaki_complete',
    name_ja: '高崎・名建築とレトロ純喫茶を巡る旅人',
    subtitle_en: 'Walker of Takasaki',
    description:
      '高崎市美術館・旧井上房一郎邸からSLOW TIME cafe、高崎城址公園、頼政神社、高崎神社までを巡り歩いた証',
    image_prompt:
      'A circular emblem combining a white castle turret by a stone moat, a modernist wooden house and a retro pudding parfait glass, soft cream Washi paper margin around edges, no text, no letters.',
  },
  spots: [
    {
      name: '高崎市美術館・旧井上房一郎邸',
      spot_type: '見どころ',
      description:
        '高崎駅西口徒歩3分の美術館と、アントニン・レーモンドの自邸を模して建てられた和モダン住宅の複合施設。10:00〜18:00（金曜〜20:00）、月曜・祝翌日休（企画展により観覧料設定あり）。',
      address: '群馬県高崎市八島町110-27',
      prefecture: '群馬県',
      municipality: '高崎市',
      lat: 36.320717,
      lng: 139.010104,
      clue: '高崎駅西口から北へ歩いてわずか3分、現代美術と名建築に出会える「高崎市美術館・旧井上房一郎邸」から旅を始めよう（10:00〜18:00・金曜〜20:00、月曜休）。隣接する旧井上房一郎邸は、高崎の文化振興を牽引した実業家・井上房一郎が建築家アントニン・レーモンドの自邸を模して建てた和モダン住宅で、開放的な庭と木組みの美しさにこれからもずっと心深く温かく奪われそうになる。',
      surprise:
        '井上房一郎は戦後の高崎で群馬交響楽団や群馬音楽センターの誕生に尽力し、「文化都市・高崎」の礎を築いた人物として知られる。',
      hook: '名建築を堪能したら、慈光通り方面へ西進し鞘町のSLOW TIME cafeで一息つこう。',
      f7_fragment: 'レーモンド建築の思想を継ぐ名邸を併設した、駅近のアート拠点。',
      f7_full:
        '「高崎市美術館・旧井上房一郎邸」で清々しい木造モダニズム建築に触れ、文化都市・高崎の散策を始めた。',
      image_prompt:
        'Modernist wooden residence of Former Inoue Fusaichiro House and contemporary art museum courtyard with stone garden in editorial clean ink style, no text, no letters.',
    },
    {
      name: 'SLOW TIME cafe（スロウタイム カフェ）',
      spot_type: '休憩',
      description:
        '高崎市鞘町のビル2階に佇む、音楽とアートブックに囲まれた心地よいカフェ。自家焙煎の珈琲やスイーツをゆったりと味わえる。12:00〜19:00（金土〜20:00）、月・火曜休（祝日の場合営業）。',
      address: '群馬県高崎市鞘町82-2 2F',
      prefecture: '群馬県',
      municipality: '高崎市',
      lat: 36.324673,
      lng: 139.005687,
      clue: '美術館から西の慈光通り・鞘町方面へ歩き、ビル二階に佇む隠れ家「SLOW TIME cafe」へ立ち寄ろう（12:00〜19:00・金土〜20:00、月火休・祝営業）。音楽とアートブックに囲まれた温かな空間で、丁寧なハンドドリップ珈琲や自家製スイーツを味わえば街歩きの疲れがすっとほどけていく。街なかの創造的な空気に触れながら、城跡散策へこれからもずっと心地よく豊かに備えよう。',
      surprise:
        'オーナーが厳選したレコードやアート関連の書籍が店内に並び、高崎のカルチャー好きが集う街なかの文化サロンとしても親しまれている。',
      hook: 'カフェで一息ついたら、南へ歩いて井伊直政ゆかりの高崎城址公園へ向かおう。',
      f7_fragment: '音楽とアートブックに囲まれ、丁寧な珈琲を味わう鞘町の隠れ家カフェ。',
      f7_full:
        '鞘町の「SLOW TIME cafe」で音楽と珈琲の豊かな時間を過ごし、高崎の街なかのカルチャーに触れた。',
      image_prompt:
        'Cozy second-floor cafe interior in Takasaki with warm wood shelves of art books, vinyl records and porcelain coffee cup in editorial clean ink style, no text, no letters.',
    },
    {
      name: '高崎城址公園',
      spot_type: '見どころ',
      description:
        '慶長3年（1598年）に井伊直政が築いた高崎城の跡地。水堀と土塁がよく残り、移築復元された白壁の乾櫓と東門が往時の風格を伝える。散策自由・無休。',
      address: '群馬県高崎市高松町35',
      prefecture: '群馬県',
      municipality: '高崎市',
      lat: 36.321812,
      lng: 139.004377,
      clue: '鞘町から南へ歩き、井伊直政が慶長三年に築いた「高崎城址公園」のお堀端を歩こう（散策自由・無休）。水堀と土塁、移築復元された白壁の乾櫓と東門が往時の風格を伝えている。',
      surprise:
        '「高崎」という地名は、もともと和田城と呼ばれていたこの地へ入った井伊直政が、縁起の良い名として「松ヶ崎」から転じて命名したとされる。',
      hook: 'お堀端を巡ったら、北西側の高崎公園に寄り添う頼政神社へ参拝しよう。',
      f7_fragment: '井伊直政が築いた城跡に、白壁の乾櫓と水堀が美しく残る公園。',
      f7_full:
        '「高崎城址公園」のお堀端を歩き、移築復元された白壁の乾櫓と東門から井伊直政の城づくりの面影を感じた。',
      image_prompt:
        'White-walled Inui turret and Eastern Gate beside the stone moat of Takasaki Castle Park with pine trees in editorial clean ink style, no text, no letters.',
    },
    {
      name: '頼政神社',
      spot_type: '見どころ',
      description:
        '平安時代末期の武将・歌人である源頼政公を祀る古社。高崎公園に隣接し、江戸時代には藩主・大河内松平家の崇敬を受けて城内へ遷された歴史を持つ。常時開放・無休。',
      address: '群馬県高崎市宮元町143',
      prefecture: '群馬県',
      municipality: '高崎市',
      lat: 36.319522,
      lng: 139.002575,
      clue: '高崎城址の北西側、高崎公園の緑に寄り添うように鎮座する「頼政神社」へ参拝しよう（参拝自由・常時開放）。平安時代末期の武将で、優れた歌人としても知られる源頼政公を祀る古社だ。江戸時代には時の高崎藩主・大河内松平家の崇敬を受けて城内へ遷され、今も静かな境内の奥で城下町の深い歴史と武将たちの誇りをこれからもずっと穏やかに温かく力強く丁寧に感謝とともに心静かに伝え続けている。',
      surprise:
        '社殿の由緒には源頼政公の武勇と和歌の才にちなむ伝承が残り、高崎城の鬼門を守る大切な神社として藩主一族から厚く敬われていた。',
      hook: '頼政神社を後にしたら、北へ歩いて高崎総鎮守・高崎神社で旅を結ぼう。',
      f7_fragment: '平安の武将・源頼政公を祀り、高崎城の鬼門を守った静かな古社。',
      f7_full:
        '城址の緑に寄り添う「頼政神社」に参拝し、武将であり歌人でもあった源頼政公ゆかりの歴史を辿った。',
      image_prompt:
        'Quiet historic wooden Shinto shrine Yorimasa-jinja nestled beside tall trees and castle earthen embankment in editorial clean ink style, no text, no letters.',
    },
    {
      name: '高崎神社',
      spot_type: '見どころ',
      description:
        '寛元元年（1243年）に和田小太郎正信が熊野権現を勧請したことに始まる高崎総鎮守。境内には「和田の立石」などの史跡も残る。参拝常時（社務所9:00〜16:00頃）、無休。',
      address: '群馬県高崎市赤坂町94',
      prefecture: '群馬県',
      municipality: '高崎市',
      lat: 36.329597,
      lng: 139.000417,
      clue: '高崎公園からさらに北へ歩いて赤坂町の杜へ入り、高崎総鎮守「高崎神社」へ参拝して旅を締めくくろう（社務所9:00〜16:00頃、無休）。鎌倉時代の寛元元年に和田正信が熊野権現を勧請したことに始まり、明治期に現在の社号へ改められた由緒ある古社だ。立派な木造の社殿と緑深い境内に手を合わせれば、建築とカフェと城下町を巡った高崎の旅がこれからもずっと清々しく美しく誇らしく結ばれる。',
      surprise:
        '境内には高崎城築城以前の地名「和田」の名を今に伝える「和田の立石」などの史跡が残り、千年近い地域の歴史を物語っている。',
      hook: '',
      f7_fragment: '鎌倉時代から続く高崎の総鎮守、歴史の深い赤坂町の杜。',
      f7_full:
        '高崎総鎮守の「高崎神社」に参拝し、モダニズム建築と鞘町のカフェと城址を巡った高崎の旅を清らかに結んだ。',
      image_prompt:
        'Grand wooden sanctuary and stone torii gate of Takasaki Shrine bathed in soft late-afternoon light amid sacred trees in editorial clean ink style, no text, no letters.',
    },
  ],
};
