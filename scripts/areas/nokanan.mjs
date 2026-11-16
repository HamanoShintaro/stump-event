export default {
  slug: 'nokanan',
  station_order: 936,
  station: '野花南',
  line: 'JR根室本線',
  area_name: '野花南・空知川',
  prefecture: '北海道',
  municipality: '芦別市',
  category: '歴史・自然',
  budget_tier: 1,
  tags: ['根室本線', '縄文遺跡', '周堤墓', '空知川', '喫茶'],
  style_genre: 'ink_and_watercolor',
  title: '縄文の墓と空知川が息づく野花南散歩',
  description:
    '国鉄開通記念碑が立つJR野花南駅から国道沿いのキタキツネ、野花南大橋、道指定史跡の周堤墓群、野花南神社を巡るルート。',
  eyecatch_prompt:
    'A serene Japanese ink and watercolor landscape illustration of Nokanan in Ashibetsu, Hokkaido, featuring a small rural wooden train station with a stone railway monument, a wide river bridge spanning the Sorachi River, and an ancient circular Jomon earthwork site amidst forested hills, warm washi paper texture, vertical 9:16 composition, no text.',
  question: '次の旅で再び野花南を訪れるとしたら、どの場所に足を運びますか？',
  choices: [
    {
      key: 'A',
      spot_index: 2,
      text: '季節限定で開く国道沿いの温かい食堂喫茶',
      subtext: '透き通ったスープのラーメンや手作りカレーに癒やされた',
      badge: {
        code: 'nokanan_kitakitsune',
        name_ja: '国道38号の旅人',
        subtitle_en: 'Traveler of Route 38',
        description:
          '季節営業のカフェレスト キタキツネに立ち寄り、野花南の素朴で温かい味を堪能したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a warm bowl of clear broth ramen beside a roadside milepost on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'B',
      spot_index: 3,
      text: '空知川の清流を一望する野花南大橋の眺め',
      subtext: '雄大な川の流れと河岸段丘の風景に心が広がった',
      badge: {
        code: 'nokanan_bridge',
        name_ja: '空知川を渡る者',
        subtitle_en: 'Crosser of Sorachi River',
        description:
          '国道38号の野花南大橋を渡り、空知川と河岸段丘が織りなす雄大な自然を望んだしるし。',
        rarity: 1,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a long river bridge arching over turquoise mountain river currents on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'C',
      spot_index: 4,
      text: '三千年の祈りを今に伝える野花南周堤墓群',
      subtext: '縄文時代後期のドーナツ状共同墓地跡に太古の記憶を感じた',
      badge: {
        code: 'nokanan_jomon',
        name_ja: '三千年の祈り手',
        subtitle_en: 'Witness of Jomon Circle',
        description:
          '北海道指定史跡の野花南周堤墓群を訪れ、約三千年前の縄文人の祈りの跡に触れたしるし。',
        rarity: 5,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of an ancient circular earthen Jomon ring surrounded by quiet forest ferns on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
    {
      key: 'D',
      spot_index: 5,
      text: '高知からの入植者が祀った野花南神社の木陰',
      subtext: '開拓期の祈りを受け継ぐ静かな杜で旅の安全を祈った',
      badge: {
        code: 'nokanan_shrine',
        name_ja: '開拓の杜の参拝者',
        subtitle_en: 'Pioneer Shrine Visitor',
        description:
          '高知からの入植者が故郷の神霊を祀ったと伝わる野花南神社を訪れ、参拝したしるし。',
        rarity: 3,
        image_prompt:
          'Minimalist Japanese ink and watercolor emblem of a weathered wooden torii gate nestled in lush birch woods on warm washi paper, subtle shu-iro vermilion stamp accent, no text.',
      },
    },
  ],
  completion_badge: {
    code: 'nokanan_complete',
    name_ja: '野花南・縄文と開拓の探訪者',
    subtitle_en: 'Explorer of Nokanan Jomon and River',
    description:
      'JR野花南駅からカフェレスト キタキツネ、野花南大橋、野花南周堤墓群、野花南神社まで巡り終えたしるし。',
    rarity: 5,
    image_prompt:
      'Minimalist Japanese ink and watercolor circular emblem uniting a stone railway stele, Sorachi River bridge, and circular Jomon earthwork on warm washi paper, gold and vermilion accents, no text.',
  },
  spots: [
    {
      spot_order: 1,
      spot_type: '見どころ',
      name: 'JR野花南駅（国鉄開通記念碑）',
      lat: 43.474264,
      lng: 142.261909,
      address: '北海道芦別市野花南町100',
      description:
        '大正2年（1913年）11月10日開業のJR根室本線の無人駅（終日利用可）。駅前右手には大正2年の鉄道開通を記念して建てられた自然石の「国鉄開通記念碑」が立つ。',
      clue:
        '大正二年十一月の鉄道開通を伝える自然石の「国鉄開通記念碑」が駅前に堂々と立つ「JR野花南駅（国鉄開通記念碑）」から楽しい町歩きと散策を始めよう（終日利用可）。静かな無人駅のホームから一歩外へ踏み出したら、まずは国道38号線方面へ歩いてアットホームな食堂喫茶「カフェレスト キタキツネ」を目指してのんびり楽しく元気に笑顔で力強く爽やかに明るく元気に楽しく爽やかに歩き出そう。',
      hook: '駅を出て国道38号線方面へ徒歩約5分',
      f7_fragment: '大正二年開業、駅前に自然石の「国鉄開通記念碑」が立つ根室本線の無人駅。',
      f7_full: '「JR野花南駅（国鉄開通記念碑）」を出発し、縄文と開拓の記憶を辿る旅を始めた。',
    },
    {
      spot_order: 2,
      spot_type: '食事',
      name: 'カフェレスト キタキツネ',
      lat: 43.472057,
      lng: 142.258382,
      address: '北海道芦別市野花南町977',
      description:
        '国道38号線沿いの野花南バス停近くに佇む食堂・喫茶店（6〜11月下旬頃の11:00〜14:00、火曜・冬期休）。透き通ったスープのラーメンや手作りカレーが人気。',
      clue:
        '国道沿いの「カフェレスト キタキツネ」で優しいラーメンや手作りカレーを味わおう（夏秋11:00〜14:00、火曜・冬期休）。食後は東の「野花南大橋」へ向かおう。',
      hook: '国道38号線を東方向へ徒歩約1分',
      f7_fragment: '国道38号線沿いで季節営業し、ラーメンや手作りカレーが親しまれる食堂。',
      f7_full: '「カフェレスト キタキツネ」で温かい食事を楽しみ、旅の元気をたっぷり養った。',
    },
    {
      spot_order: 3,
      spot_type: '見どころ',
      name: '野花南大橋',
      lat: 43.472311,
      lng: 142.259232,
      address: '北海道芦別市野花南町977-1',
      description:
        '空知川に架かる国道38号線の橋梁（終日通行可）。アイヌ語「ノカンナイ（小さい川）」などに由来する地名のとおり、周辺には美しい河岸段丘と豊かな川の流れが広がる。',
      clue:
        '空知川の雄大な流れに架かる国道38号の橋「野花南大橋」をゆっくり楽しく笑顔で歩いて渡ってみよう（終日通行可）。アイヌ語「ノカンナイ（小さい川）」などに由来する地名を持つこの一帯には美しい河岸段丘と澄んだ川の景色が広がり、季節ごとの山の彩りが水面に映えて実に美しい。空知川の爽やかな風を胸いっぱいに感じたら、南東方向の農道を辿って北海道指定史跡「野花南周堤墓群」へ向かおう。',
      hook: '南東方向の農道・踏切を経て徒歩約20分',
      f7_fragment: '空知川に架かり、河岸段丘と豊かな山川の風景を一望できる国道38号の橋。',
      f7_full: '「野花南大橋」から空知川の清らかな流れを眺め、北海道の大きな自然を感じた。',
    },
    {
      spot_order: 4,
      spot_type: '見どころ',
      name: '野花南周堤墓群',
      lat: 43.459701,
      lng: 142.272682,
      address: '北海道芦別市野花南町3250',
      description:
        '昭和28年（1953年）発見、平成12年（2000年）に北海道指定史跡となった縄文時代後期（約3,000年前）の共同墓地跡（終日見学可、農道通行注意）。ドーナツ状の周堤が特徴。',
      clue:
        '昭和二十八年に発見され、平成十二年に北海道指定史跡となった貴重な縄文時代後期（約三千年前）の遺跡「野花南周堤墓群」をじっくり丁寧に楽しく訪ねよう（見学自由・農道注意）。土をドーナツ状に盛り上げた周堤の中に共同墓地が築かれたこの静かな地に立てば、太古の人々が抱いた祈りと命への想いが胸に静かに響いてくる。三千年の記憶に深く触れたら、北北西の「野花南神社」へと楽しく向かおう。',
      hook: '北〜北西方向へ戻り徒歩約45分',
      f7_fragment: '約三千年前の縄文時代後期のドーナツ状共同墓地跡として道指定史跡の遺跡。',
      f7_full: '「野花南周堤墓群」の静かな森の跡に立ち、三千年の時を超えた祈りに触れた。',
    },
    {
      spot_order: 5,
      spot_type: '見どころ',
      name: '野花南神社',
      lat: 43.479744,
      lng: 142.242843,
      address: '北海道芦別市野花南町674',
      description:
        '開拓期に高知県から入植した人々が故郷の神社の分霊を祀ったと伝わる野花南の静かな鎮守（参拝自由）。地域の歴史と開拓の祈りを今に伝えている。',
      clue:
        '旅の締めくくりは、開拓期に高知県から入植した人々が遠い故郷の神社の分霊を祀ったと伝えられる「野花南神社」へ丁寧に心を込めてゆっくりと明るく楽しく参拝しよう（参拝自由）。木立に抱かれた静かな境内でそっと深く手を合わせれば、厳しい自然の中で新しい大地を切り拓いた先人たちの強い思いが温かく胸に伝わってくる。太古と開拓の歴史が響き合う野花南の旅を、穏やかな明るい笑顔で結ぼう。',
      hook: '',
      f7_fragment: '開拓期に高知からの入植者が故郷の神霊を祀ったと伝わる野花南の鎮守。',
      f7_full: '「野花南神社」の静かな杜で手を合わせ、野花南の縄文と開拓の旅を締めくくった。',
    },
  ],
};
