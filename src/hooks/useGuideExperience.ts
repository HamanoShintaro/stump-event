"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

export type GuideMoodKey = "scenery" | "cafe" | "history";
export type GuideDurationKey = "30m" | "60m";
export type GuideStampStage = "walking" | "in_range" | "stamping" | "stamped";
export type GuideMemoryMode = "personal" | "companion";
export type GuideReviewTab = "book" | "emaki" | "title";

export interface GuideSampleRoute {
  id: string;
  mood: GuideMoodKey;
  duration: GuideDurationKey;
  moodLabel: string;
  durationLabel: string;
  areaLabel: string;
  title: string;
  catchcopy: string;
  walkMinutes: number;
  spotCount: number;
  distanceKm: string;
  imageUrl: string;
  stampUrl: string;
  fortuneBadge: string;
  spotsPreview: string[];
}

export interface GuideMemoryPhotoChoice {
  id: string;
  spotName: string;
  areaLabel: string;
  dateLabel: string;
  imageUrl: string;
  defaultNote: string;
}

export interface GuideCompanionTimelineItem {
  id: string;
  timeLabel: string;
  authorName: string;
  spotName: string;
  note: string;
  imageUrl: string;
  stampUrl: string;
  isSelf?: boolean;
}

export interface GuideShuinPageItem {
  id: string;
  spotName: string;
  routeTitle: string;
  dateLabel: string;
  stampUrl: string;
  bgUrl: string;
  photoUrl: string;
  memo: string;
  isUnlocked: boolean;
  isLiveStamped?: boolean;
}

export interface GuideTitleExample {
  id: string;
  titleName: string;
  rankLabel: string;
  poeticCopy: string;
  conditionHint: string;
  stampUrl: string;
}

export interface GuideFaqItem {
  question: string;
  answer: string;
}

export const GUIDE_SAMPLE_ROUTES: GuideSampleRoute[] = [
  {
    id: "scenery-30m",
    mood: "scenery",
    duration: "30m",
    moodLabel: "風景と木陰",
    durationLabel: "30分ほど",
    areaLabel: "自由が丘・緑道",
    title: "桜並木のせせらぎと、石畳の小さな寄り道",
    catchcopy: "水辺の風を感じながら、緑道をゆったり3か所めぐる散歩道。",
    walkMinutes: 30,
    spotCount: 3,
    distanceKm: "1.2km",
    imageUrl: "/images/jiyugaoka/spot5.jpg",
    stampUrl: "/stamps/see.png",
    fortuneBadge: "【 街角吉 — 水辺の風 】",
    spotsPreview: ["九品仏川緑道", "水辺の石橋", "木漏れ日のベンチ"],
  },
  {
    id: "scenery-60m",
    mood: "scenery",
    duration: "60m",
    moodLabel: "風景と木陰",
    durationLabel: "60分ほど",
    areaLabel: "自由が丘・奥沢",
    title: "夕暮れの石畳と、水路が映す街角めぐり",
    catchcopy: "路地裏の橋から女神像の広場まで、光の移ろいをたどる物語。",
    walkMinutes: 55,
    spotCount: 5,
    distanceKm: "2.4km",
    imageUrl: "/images/jiyugaoka/spot2.jpg",
    stampUrl: "/stamps/heal.png",
    fortuneBadge: "【 逍遥大吉 — 茜色の路地 】",
    spotsPreview: ["駅前女神広場", "石畳の水路橋", "緑道の桜並木"],
  },
  {
    id: "cafe-30m",
    mood: "cafe",
    duration: "30m",
    moodLabel: "喫茶と雑貨",
    durationLabel: "30分ほど",
    areaLabel: "自由が丘・学園通り",
    title: "鉢植えの並ぶ軒先と、午後の珈琲の香り",
    catchcopy: "こだわりの日用品店や焙煎所を、気の向くままに覗くひととき。",
    walkMinutes: 35,
    spotCount: 3,
    distanceKm: "1.1km",
    imageUrl: "/images/jiyugaoka/spot3.jpg",
    stampUrl: "/stamps/eat.png",
    fortuneBadge: "【 一服吉 — 琥珀の香り 】",
    spotsPreview: ["緑の軒先マルシェ", "路地裏の焙煎所", "焼きたて菓子の店"],
  },
  {
    id: "cafe-60m",
    mood: "cafe",
    duration: "60m",
    moodLabel: "喫茶と雑貨",
    durationLabel: "60分ほど",
    areaLabel: "自由が丘・すずかけ通り",
    title: "昭和の純喫茶ネオンと、手仕事の器を訪ねて",
    catchcopy: "時代を超えて愛される看板建築と、路地の名店をめぐる午後。",
    walkMinutes: 60,
    spotCount: 4,
    distanceKm: "2.1km",
    imageUrl: "/images/jiyugaoka/spot4.jpg",
    stampUrl: "/stamps/fave.png",
    fortuneBadge: "【 燈火大吉 — 琥珀の時間 】",
    spotsPreview: ["駅前デパート通り", "純喫茶の窓辺", "器のギャラリー"],
  },
  {
    id: "history-30m",
    mood: "history",
    duration: "30m",
    moodLabel: "社寺と歴史",
    durationLabel: "30分ほど",
    areaLabel: "熊野神社・参道",
    title: "木漏れ日の朱鳥居と、静寂の鎮守の森へ",
    catchcopy: "賑わう街角から一歩入り、深い緑と古社の歴史にふれる道。",
    walkMinutes: 30,
    spotCount: 3,
    distanceKm: "1.0km",
    imageUrl: "/images/jiyugaoka/spot1.jpg",
    stampUrl: "/stamps/local.png",
    fortuneBadge: "【 縁結大吉 — 鎮守の杜 】",
    spotsPreview: ["一の鳥居", "杉並木の石段", "拝殿前の手水舎"],
  },
  {
    id: "history-60m",
    mood: "history",
    duration: "60m",
    moodLabel: "社寺と歴史",
    durationLabel: "60分ほど",
    areaLabel: "城下町・街道筋",
    title: "いにしえの面影と、旅人が歩いた石畳の記憶",
    catchcopy: "時を刻む鐘の音や古い商家跡をたどり、土地の記憶を紐解く。",
    walkMinutes: 65,
    spotCount: 5,
    distanceKm: "2.6km",
    imageUrl: "/images/higashi-iwatsuki/route-eyecatch.jpg",
    stampUrl: "/stamps/learn.png",
    fortuneBadge: "【 歴史大吉 — 街道の余韻 】",
    spotsPreview: ["宿場の入口", "古社の大欅", "石畳の茶屋跡"],
  },
];

export const GUIDE_MEMORY_PHOTOS: GuideMemoryPhotoChoice[] = [
  {
    id: "photo-shrine",
    spotName: "熊野神社・朱の鳥居",
    areaLabel: "自由が丘",
    dateLabel: "10.26 10:15",
    imageUrl: "/images/jiyugaoka/spot1.jpg",
    defaultNote: "朝の光が鳥居の朱色に差し込んで、空気が澄んでいた。",
  },
  {
    id: "photo-green",
    spotName: "緑の軒先マルシェ",
    areaLabel: "学園通り",
    dateLabel: "10.26 11:05",
    imageUrl: "/images/jiyugaoka/spot3.jpg",
    defaultNote: "鉢植えのオリーブが風に揺れていて、思わず足を止めた。",
  },
  {
    id: "photo-canal",
    spotName: "水辺の石橋と並木道",
    areaLabel: "九品仏川緑道",
    dateLabel: "10.26 11:40",
    imageUrl: "/images/jiyugaoka/spot5.jpg",
    defaultNote: "水面がきらきら光って、歩く速さも自然とゆっくりに。",
  },
];

export const GUIDE_COMPANION_TIMELINE: GuideCompanionTimelineItem[] = [
  {
    id: "tl-1",
    timeLabel: "10:15",
    authorName: "あなた",
    spotName: "熊野神社・朱の鳥居",
    note: "朝の光が鳥居に差し込んで、空気が澄んでいた。",
    imageUrl: "/images/jiyugaoka/spot1.jpg",
    stampUrl: "/stamps/local.png",
    isSelf: true,
  },
  {
    id: "tl-2",
    timeLabel: "10:42",
    authorName: "小春（連れ立ち）",
    spotName: "緑の軒先マルシェ",
    note: "このお店の器とグリーンの並び、また季節を変えて見に来たい！",
    imageUrl: "/images/jiyugaoka/spot3.jpg",
    stampUrl: "/stamps/eat.png",
    isSelf: false,
  },
];

export const GUIDE_TITLE_EXAMPLES: GuideTitleExample[] = [
  {
    id: "title-alley",
    titleName: "路地裏の逍遥者",
    rankLabel: "風流称号・壱",
    poeticCopy: "大通りから一歩外れ、街の静かな息遣いを見つけた旅人へ。",
    conditionHint: "街歩きのしるしを重ねると授与",
    stampUrl: "/stamps/see.png",
  },
  {
    id: "title-teacup",
    titleName: "琥珀のひと休み",
    rankLabel: "風流称号・弐",
    poeticCopy: "香り高い珈琲や甘味とともに、午後の余白を味わう人へ。",
    conditionHint: "喫茶・寄り道スポットの巡礼で授与",
    stampUrl: "/stamps/eat.png",
  },
  {
    id: "title-shrine",
    titleName: "鎮守の森の語り部",
    rankLabel: "風流称号・参",
    poeticCopy: "時代を超えて受け継がれる土地の祈りと物語を紐解いた証。",
    conditionHint: "歴史・社寺ルートの踏破で授与",
    stampUrl: "/stamps/local.png",
  },
];

export const GUIDE_FAQ_ITEMS: GuideFaqItem[] = [
  {
    question: "しるし（SHUIN）は、どこで押印できますか？",
    answer:
      "ルートのマップ画面を開き、スポットから半径50m以内に入ると「押印圏内」になり、現在地（GPS）で押印できます。屋内の店舗などでは現地のQRコード読み取りにも対応しています。",
  },
  {
    question: "現地で位置情報がうまく合わないときは？",
    answer:
      "スマートフォンのブラウザ位置情報許可がオンになっているかご確認のうえ、少し開けた場所で数秒お待ちいただくと正確な距離に更新されます。",
  },
  {
    question: "写真やひとことは、あとから追加・編集できますか？",
    answer:
      "はい、いつでも可能です。SHUIN帳やマイページにある獲得済みのしるしをタップすると紙面カードが開き、写真の追加や言葉の書き直しができます。",
  },
  {
    question: "家族や友人と一緒に歩く「連れ立ち」はどう始めますか？",
    answer:
      "マップ画面上部の「連れ立ち」ボタンから合言葉や招待リンクを発行して共有するだけです。お互いの押印や写真が『旅路のしおり』にリアルタイムで重なります。",
  },
  {
    question: "気になるルートを次の休日用に残しておけますか？",
    answer:
      "各ルートの「栞（ブックマーク）」ボタンを押すとマイページに保存され、歩きたい時間や気分に合わせていつでも引き出せます。",
  },
];

export function useGuideExperience() {
  // Step 1: 気分・時間・街歩きみくじ
  const [selectedMood, setSelectedMood] = useState<GuideMoodKey>("scenery");
  const [selectedDuration, setSelectedDuration] = useState<GuideDurationKey>("30m");
  const [oracleFlipTick, setOracleFlipTick] = useState<number>(0);
  const [isDrawingOracle, setIsDrawingOracle] = useState<boolean>(false);

  // Step 2: 押印シミュレーター
  const [stampStage, setStampStage] = useState<GuideStampStage>("in_range");
  const [hasExperiencedStamp, setHasExperiencedStamp] = useState<boolean>(false);
  const stampTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Step 3: 記憶カード・連れ立ち（写真ごとにひとことメモを保持）
  const [memoryMode, setMemoryMode] = useState<GuideMemoryMode>("personal");
  const [selectedPhotoId, setSelectedPhotoId] = useState<string>(GUIDE_MEMORY_PHOTOS[0].id);
  const [notesByPhotoId, setNotesByPhotoId] = useState<Record<string, string>>(() =>
    Object.fromEntries(GUIDE_MEMORY_PHOTOS.map((p) => [p.id, p.defaultNote]))
  );
  const [isEchoExpanded, setIsEchoExpanded] = useState<boolean>(false);

  // Step 4: SHUIN帳・旅路の絵巻・称号
  const [reviewTab, setReviewTab] = useState<GuideReviewTab>("book");
  const [selectedPageId, setSelectedPageId] = useState<string>("page-1");
  const [selectedTitleId, setSelectedTitleId] = useState<string>(GUIDE_TITLE_EXAMPLES[0].id);

  // FAQ: 初期状態はすべて閉じて縦スクロールを軽やかに
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (stampTimerRef.current) {
        clearTimeout(stampTimerRef.current);
      }
    };
  }, []);

  const currentSampleRoute = useMemo(() => {
    return (
      GUIDE_SAMPLE_ROUTES.find(
        (r) => r.mood === selectedMood && r.duration === selectedDuration
      ) || GUIDE_SAMPLE_ROUTES[0]
    );
  }, [selectedMood, selectedDuration]);

  const handleSelectMood = useCallback((mood: GuideMoodKey) => {
    setSelectedMood(mood);
  }, []);

  const handleSelectDuration = useCallback((duration: GuideDurationKey) => {
    setSelectedDuration(duration);
  }, []);

  const handleDrawSampleOracle = useCallback(() => {
    if (isDrawingOracle) return;
    setIsDrawingOracle(true);

    // 現在の組み合わせ以外のルートへ軽やかに巡らせる
    const currentIndex = GUIDE_SAMPLE_ROUTES.findIndex(
      (r) => r.mood === selectedMood && r.duration === selectedDuration
    );
    const nextRoute =
      GUIDE_SAMPLE_ROUTES[(currentIndex + 1) % GUIDE_SAMPLE_ROUTES.length];

    setSelectedMood(nextRoute.mood);
    setSelectedDuration(nextRoute.duration);
    setOracleFlipTick((prev) => prev + 1);

    setTimeout(() => {
      setIsDrawingOracle(false);
    }, 240);
  }, [isDrawingOracle, selectedMood, selectedDuration]);

  const handleApproachSpot = useCallback(() => {
    if (stampStage === "stamping") return;
    setStampStage("in_range");
  }, [stampStage]);

  const handleTriggerStamp = useCallback(() => {
    if (stampStage === "stamping" || stampStage === "stamped") return;
    setStampStage("stamping");

    if (stampTimerRef.current) {
      clearTimeout(stampTimerRef.current);
    }
    stampTimerRef.current = setTimeout(() => {
      setStampStage("stamped");
      setHasExperiencedStamp(true);
      setSelectedPageId("page-live");
    }, 620);
  }, [stampStage]);

  const handleResetStampDemo = useCallback(() => {
    if (stampTimerRef.current) {
      clearTimeout(stampTimerRef.current);
    }
    setStampStage("walking");
  }, []);

  const selectedMemoryPhoto = useMemo(() => {
    return (
      GUIDE_MEMORY_PHOTOS.find((p) => p.id === selectedPhotoId) ||
      GUIDE_MEMORY_PHOTOS[0]
    );
  }, [selectedPhotoId]);

  const customNote = useMemo(() => {
    return notesByPhotoId[selectedPhotoId] ?? selectedMemoryPhoto.defaultNote;
  }, [notesByPhotoId, selectedPhotoId, selectedMemoryPhoto.defaultNote]);

  const setCustomNote = useCallback(
    (nextNote: string) => {
      setNotesByPhotoId((prev) => ({
        ...prev,
        [selectedPhotoId]: nextNote,
      }));
    },
    [selectedPhotoId]
  );

  const handleSelectMemoryPhoto = useCallback((photoId: string) => {
    setSelectedPhotoId((prev) => (prev === photoId ? prev : photoId));
  }, []);

  const shuinPages: GuideShuinPageItem[] = useMemo(() => {
    const liveNote =
      customNote.trim() || selectedMemoryPhoto.defaultNote;
    return [
      {
        id: "page-1",
        spotName: "熊野神社・朱の鳥居",
        routeTitle: "鎮守の森と木漏れ日の参道",
        dateLabel: "2026.10.26",
        stampUrl: "/stamps/local.png",
        bgUrl: "/stamps/bg_local.png",
        photoUrl: "/images/jiyugaoka/spot1.jpg",
        memo: "杉並木を抜けた先の静けさが心地よかった。",
        isUnlocked: true,
      },
      {
        id: "page-2",
        spotName: "緑の軒先マルシェ",
        routeTitle: "学園通りの喫茶と日用品",
        dateLabel: "2026.10.26",
        stampUrl: "/stamps/eat.png",
        bgUrl: "/stamps/bg_eat.png",
        photoUrl: "/images/jiyugaoka/spot3.jpg",
        memo: "季節の草花と木の器を眺めてひと休み。",
        isUnlocked: true,
      },
      {
        id: "page-3",
        spotName: "水辺の石橋と並木道",
        routeTitle: "桜並木のせせらぎ散歩",
        dateLabel: "2026.10.26",
        stampUrl: "/stamps/see.png",
        bgUrl: "/stamps/bg_see.png",
        photoUrl: "/images/jiyugaoka/spot5.jpg",
        memo: "水面に映る並木道を眺めながらゆっくり歩いた。",
        isUnlocked: true,
      },
      {
        id: "page-live",
        spotName: selectedMemoryPhoto.spotName,
        routeTitle: "このページで試した押印",
        dateLabel: "本日・体験印",
        stampUrl: "/stamps/destination_stump.png",
        bgUrl: "/stamps/bg_achieve.png",
        photoUrl: selectedMemoryPhoto.imageUrl,
        memo: liveNote,
        isUnlocked: hasExperiencedStamp,
        isLiveStamped: true,
      },
      {
        id: "page-5",
        spotName: "これからの一頁",
        routeTitle: "次に訪れる街角",
        dateLabel: "未踏のしるし",
        stampUrl: "/stamps/achieve.png",
        bgUrl: "/stamps/bg_see.png",
        photoUrl: "/images/jiyugaoka/spot2.jpg",
        memo: "あなたが次の街角を訪れると、ここに新しいしるしが刻まれます。",
        isUnlocked: false,
      },
      {
        id: "page-6",
        spotName: "これからの一頁",
        routeTitle: "まだ見ぬ路地の物語",
        dateLabel: "未踏のしるし",
        stampUrl: "/stamps/heal.png",
        bgUrl: "/stamps/bg_local.png",
        photoUrl: "/images/jiyugaoka/spot4.jpg",
        memo: "休日のお散歩で、あなただけのSHUIN帳を一頁ずつ満たしていきましょう。",
        isUnlocked: false,
      },
    ];
  }, [
    customNote,
    hasExperiencedStamp,
    selectedMemoryPhoto.defaultNote,
    selectedMemoryPhoto.imageUrl,
    selectedMemoryPhoto.spotName,
  ]);

  const activeShuinPage = useMemo(() => {
    return (
      shuinPages.find((p) => p.id === selectedPageId) || shuinPages[0]
    );
  }, [shuinPages, selectedPageId]);

  const activeTitleExample = useMemo(() => {
    return (
      GUIDE_TITLE_EXAMPLES.find((t) => t.id === selectedTitleId) ||
      GUIDE_TITLE_EXAMPLES[0]
    );
  }, [selectedTitleId]);

  const toggleFaq = useCallback((idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  }, []);

  return {
    // Step 1
    selectedMood,
    selectedDuration,
    currentSampleRoute,
    oracleFlipTick,
    isDrawingOracle,
    handleSelectMood,
    handleSelectDuration,
    handleDrawSampleOracle,

    // Step 2
    stampStage,
    hasExperiencedStamp,
    handleApproachSpot,
    handleTriggerStamp,
    handleResetStampDemo,

    // Step 3
    memoryMode,
    setMemoryMode,
    memoryPhotos: GUIDE_MEMORY_PHOTOS,
    selectedPhotoId,
    selectedMemoryPhoto,
    handleSelectMemoryPhoto,
    customNote,
    setCustomNote,
    companionTimeline: GUIDE_COMPANION_TIMELINE,
    isEchoExpanded,
    setIsEchoExpanded,

    // Step 4
    reviewTab,
    setReviewTab,
    shuinPages,
    selectedPageId,
    setSelectedPageId,
    activeShuinPage,
    titleExamples: GUIDE_TITLE_EXAMPLES,
    selectedTitleId,
    setSelectedTitleId,
    activeTitleExample,

    // FAQ
    faqItems: GUIDE_FAQ_ITEMS,
    openFaqIndex,
    toggleFaq,
  };
}
