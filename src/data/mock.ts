import { StampRally } from '@/types';

export const mockRallies: StampRally[] = [
  {
    id: "rally-saitama-01",
    title: "食べログ 食堂百名店2026 最新の名店を巡る週末",
    region: "埼玉県大宮エリア",
    description: "埼玉県が誇る飲食店を巡ろう。2026年の食べログ 食堂百名店に選ばれし名店を巡る町歩き。お店の予約は忘れないでね！！",
    imageUrl: "/saitama_eye_catch.png",
    illustrationMapUrl: "/saitama-map.jpg", // ※ここに画像を配置してください
    hidePinsOnMap: true,
    spots: [
      {
        id: "spot-6",
        name: "キセキ食堂 上尾店",
        description: "予約TEL：070-3529-8553\n営業時間 平日：10:00 - 14:30（土・日お休み）\n住所: 埼玉県上尾市本町3-11-13 (上尾駅より徒歩15分)",
        lat: 35.975,
        lng: 139.595,
        qrHash: "kiseki-ageo",
        mapX: 40,
        mapY: 28,
        stampImageUrl: "/ralleies/saitama/stamp-1.png"
      },
      {
        id: "spot-7",
        name: "こもれび食堂+",
        description: "予約TEL：048-789-6834\n営業時間: 水～土 昼/夜、火は夜のみ (月・日定休)\n住所: さいたま市浦和区仲町2-16-15 (浦和駅西口より徒歩10分)",
        lat: 35.858,
        lng: 139.656,
        qrHash: "komorebi-urawa",
        mapX: 66,
        mapY: 68,
        stampImageUrl: "/ralleies/saitama/stamp-2.png"
      },
      {
        id: "spot-8",
        name: "食事処 たらふく",
        description: "予約TEL：048-711-8064\n営業時間: [月火木-土]11:30~14:00/17:45~21:30 [日祝水]夜のみ\n住所: さいたま市中央区桜丘2-3-6 (与野本町駅より徒歩19分)",
        lat: 35.882,
        lng: 139.626,
        qrHash: "tarafuku-yono",
        mapX: 38,
        mapY: 68,
        stampImageUrl: "/ralleies/saitama/stamp-3.png"
      }
    ]
  },
  {
    id: "rally-tokyo-01",
    title: "東京下町レトロ散歩",
    region: "東京都 台東区・墨田区",
    description: "浅草からスカイツリーまで、昔ながらの風景と新しい東京が交差するエリアを巡るスタンプラリー。各チェックポイントで下町の味を堪能しよう。",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    illustrationMapUrl: "https://images.unsplash.com/photo-1578305828882-9659b8cb831b?auto=format&fit=crop&w=1200", 
    spots: [
      {
        id: "spot-1",
        name: "浅草寺 雷門",
        description: "東京のシンボル。巨大な提灯の前で写真を撮ろう。周辺の人形焼もおすすめ。",
        lat: 35.7111,
        lng: 139.7963,
        qrHash: "asakusa-kaminarimon",
        mapX: 30,
        mapY: 60
      },
      {
        id: "spot-2",
        name: "仲見世商店街",
        description: "日本最古の商店街の一つ。お土産や食べ歩きを楽しめる。",
        lat: 35.7126,
        lng: 139.7963,
        qrHash: "nakamise",
        mapX: 35,
        mapY: 45
      },
      {
        id: "spot-3",
        name: "東京スカイツリー",
        description: "高さ634mの電波塔。展望台からの景色は圧巻。",
        lat: 35.7100,
        lng: 139.8107,
        qrHash: "skytree",
        mapX: 80,
        mapY: 30
      }
    ]
  },
  {
    id: "rally-kyoto-01",
    title: "京都 幕末歴史探訪",
    region: "京都府 中京区・東山区",
    description: "新選組や坂本龍馬など、幕末の志士たちが駆け抜けた京都の街を巡る。歴史の息吹を感じられるスポットを集めました。",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    illustrationMapUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200",
    spots: [
      {
        id: "spot-4",
        name: "池田屋跡",
        description: "新選組が尊皇攘夷派を襲撃した「池田屋事件」の舞台。現在は居酒屋になっています。",
        lat: 35.0084,
        lng: 135.7690,
        qrHash: "ikedaya",
        mapX: 45,
        mapY: 30
      },
      {
        id: "spot-5",
        name: "寺田屋跡",
        description: "坂本龍馬が伏見奉行所の役人に襲撃された「寺田屋事件」の舞台。",
        lat: 34.9295,
        lng: 135.7612,
        qrHash: "teradaya",
        mapX: 60,
        mapY: 70
      }
    ]
  }
];
