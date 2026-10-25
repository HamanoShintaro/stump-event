"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import HeaderNav from "@/components/HeaderNav";
import { getCategoryStampUrl, getCategoryBgUrl } from "@/utils/stampHelper";
import { generateShuinCardDataUrl } from "@/utils/shuinCardGenerator";
import {
  useShuinBook,
  ShuinDiaryEvent,
  ShuinLifeFilter,
} from "@/hooks/useShuinBook";
import {
  ChevronLeft,
  Calendar,
  MapPin,
  Camera,
  Users,
  X,
  ArrowRight,
  BookOpen,
  Grid,
  Edit3,
  Check,
  RotateCcw,
  Download,
  Share2,
  ScrollText,
  CheckCircle2,
  Bookmark,
  MessageCircle,
} from "lucide-react";

const LIFE_FILTERS: { value: ShuinLifeFilter; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "tsuredachi", label: "連れ立ちの記憶" },
  { value: "with_memory", label: "写真・言葉あり" },
  { value: "revisit", label: "再訪した場所" },
];

export default function DiaryPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { showAlert } = useCustomAlert();

  const {
    diary,
    diaryLoading,
    months,
    selectedMonth,
    setSelectedMonth,
    visitedCities,
    selectedCity,
    setSelectedCity,
    companions,
    selectedCompanion,
    setSelectedCompanion,
    selectedRouteId,
    setSelectedRouteId,
    diaryRoutes,
    currentFilterSummary,
    lifeFilter,
    setLifeFilter,
    viewMode,
    setViewMode,
    filteredDiary,
    filteredCompletedRoutes,
    filteredCompletedRoutesCount,
    participatedRoutes,
    showParticipatedModal,
    setShowParticipatedModal,
    selectedEvent,
    setSelectedEvent,
    zoomPhotoUrl,
    setZoomPhotoUrl,
    groupInfo,
    updateEventMemo,
    updateEventPhoto,
    visitedCitiesCount,
    tsuredachiCount,
    withMemoryCount,
    revisitCount,
  } = useShuinBook(user);

  const [isEditingMemo, setIsEditingMemo] = useState(false);
  const [memoDraft, setMemoDraft] = useState("");
  const [savingMemo, setSavingMemo] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [cardDataUrl, setCardDataUrl] = useState<string | null>(null);
  const [generatingCard, setGeneratingCard] = useState(false);
  const [storyScrollRouteId, setStoryScrollRouteId] = useState<string | null>(null);

  const handlePhotoUploadChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedEvent || uploadingPhoto) return;
    setUploadingPhoto(true);
    try {
      await updateEventPhoto(selectedEvent.id, selectedEvent.spot_id, file);
      await showAlert({
        text: "この印に思い出の写真を刻みました。",
        okText: "閉じる",
      });
    } catch (err: any) {
      await showAlert({
        text: `写真の登録に失敗しました: ${err.message}`,
        okText: "確認",
      });
    } finally {
      setUploadingPhoto(false);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const openEventDetail = (ev: ShuinDiaryEvent, startEditing = false) => {
    setSelectedEvent(ev);
    setMemoDraft(ev.memo || "");
    setIsEditingMemo(startEditing);
    setCardDataUrl(null);
  };

  const handleGenerateCard = async () => {
    if (!selectedEvent || generatingCard) return;
    setGeneratingCard(true);
    try {
      const dataUrl = await generateShuinCardDataUrl(selectedEvent, {
        photoUrl:
          selectedEvent.photo_url ||
          groupInfo?.sharedPhoto ||
          selectedEvent.sharedPhotoUrl ||
          null,
        memo:
          selectedEvent.memo ||
          groupInfo?.sharedMemo ||
          selectedEvent.sharedMemoText ||
          null,
        companions:
          groupInfo && groupInfo.members.length > 0
            ? groupInfo.members
            : selectedEvent.companionNames,
      });
      setCardDataUrl(dataUrl);
    } catch (err: any) {
      await showAlert({
        text: `御朱印紙面画像の生成に失敗しました: ${err.message || ""}`,
        okText: "確認",
      });
    } finally {
      setGeneratingCard(false);
    }
  };

  const handleDownloadCard = () => {
    if (!cardDataUrl || !selectedEvent) return;
    const link = document.createElement("a");
    const safeSpot = (selectedEvent.spotName || "shuin").replace(/[\\/:*?"<>|]/g, "_");
    const datePart = new Date(selectedEvent.created_at).toISOString().slice(0, 10);
    link.href = cardDataUrl;
    link.download = `SHUIN_${safeSpot}_${datePart}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShareCard = async () => {
    if (!cardDataUrl || !selectedEvent) return;
    try {
      const res = await fetch(cardDataUrl);
      const blob = await res.blob();
      const safeSpot = (selectedEvent.spotName || "shuin").replace(/[\\/:*?"<>|]/g, "_");
      const file = new File([blob], `SHUIN_${safeSpot}.png`, { type: "image/png" });
      if (
        typeof navigator !== "undefined" &&
        navigator.share &&
        (!navigator.canShare || navigator.canShare({ files: [file] }))
      ) {
        await navigator.share({
          title: `${selectedEvent.spotName} — SHUIN まちのしるし`,
          text: `「${selectedEvent.spotName}」を訪れ、しるしを刻みました。 #SHUIN #まちのしるし`,
          files: [file],
        });
      } else {
        handleDownloadCard();
        await showAlert({
          text: "お使いの環境では直接共有に対応していないため、御朱印紙面画像をダウンロードしました。",
          okText: "閉じる",
        });
      }
    } catch (err: any) {
      if (err?.name !== "AbortError") {
        handleDownloadCard();
      }
    }
  };

  const handleSaveMemo = async () => {
    if (!selectedEvent || savingMemo) return;
    setSavingMemo(true);
    try {
      const ok = await updateEventMemo(selectedEvent.id, memoDraft);
      if (ok) {
        setIsEditingMemo(false);
        await showAlert({
          text: "思い出のあとがきをSHUIN帳に刻みました。",
          okText: "閉じる",
        });
      }
    } finally {
      setSavingMemo(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="container" style={{ padding: "80px 20px", textAlign: "center" }}>
        読み込み中...
      </div>
    );
  }

  return (
    <div className="container">
      <header
        style={{
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="nav-logo">
          <img
            src="/shuin-logo-horizontal.png"
            alt="SHUIN まちのしるし"
            style={{ height: "32px", display: "block", objectFit: "contain" }}
          />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "680px", margin: "0 auto", paddingBottom: "80px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/mypage"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#A39687",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            <ChevronLeft size={16} /> マイページへ戻る
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "var(--font-size-h1)",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: "0 0 6px 0",
              }}
            >
              SHUIN帳
            </h1>
            <p style={{ fontSize: "0.85rem", color: "#8A7E72", margin: 0 }}>
              訪れた街の記憶と、刻まれた押印の軌跡です。
            </p>
          </div>

          {/* ビュー切り替え（グリッド / 旅のアルバム） */}
          {(diary.length > 0 || participatedRoutes.length > 0) && (
            <div
              style={{
                display: "inline-flex",
                background: "#EFE9DC",
                border: "1px solid #E5DEC9",
                borderRadius: "10px",
                padding: "4px",
                gap: "4px",
              }}
            >
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 14px",
                  borderRadius: "7px",
                  border: "none",
                  background: viewMode === "grid" ? "#FFFDF9" : "transparent",
                  color: viewMode === "grid" ? "var(--primary-color)" : "#5C4E43",
                  boxShadow:
                    viewMode === "grid" ? "0 1px 4px rgba(44, 37, 32, 0.1)" : "none",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Grid size={14} strokeWidth={1.75} />
                朱印帳グリッド
              </button>
              <button
                type="button"
                onClick={() => setViewMode("album")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 14px",
                  borderRadius: "7px",
                  border: "none",
                  background: viewMode === "album" ? "#FFFDF9" : "transparent",
                  color: viewMode === "album" ? "var(--primary-color)" : "#5C4E43",
                  boxShadow:
                    viewMode === "album" ? "0 1px 4px rgba(44, 37, 32, 0.1)" : "none",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <BookOpen size={14} strokeWidth={1.75} />
                旅のアルバム（日記帳）
              </button>
            </div>
          )}
        </div>

        {diaryLoading ? (
          <p style={{ color: "#A39687" }}>読み込み中...</p>
        ) : diary.length > 0 || participatedRoutes.length > 0 ? (
          <>
            {/* 統計集計カード（押印数・訪れた街の数・巡ったルートの数） */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(175px, 1fr))",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: "16px 12px",
                  textAlign: "center",
                  background: "#FFFDF9",
                  border: "1px solid #EBE5D9",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px rgba(92, 78, 67, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#A39687",
                    fontWeight: "bold",
                    marginBottom: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {selectedMonth === "すべて" ? "押印（SHUIN）数" : "この月の押印数"}
                </div>
                <div
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: "900",
                    color: "var(--primary-color)",
                    fontFamily: "'Noto Serif JP', serif",
                    lineHeight: "1.2",
                  }}
                >
                  {filteredDiary.length}{" "}
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: "800",
                      color: "#5C4E43",
                      fontFamily: "var(--font-family)",
                    }}
                  >
                    個
                  </span>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: "16px 12px",
                  textAlign: "center",
                  background: "#FFFDF9",
                  border: "1px solid #EBE5D9",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px rgba(92, 78, 67, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#A39687",
                    fontWeight: "bold",
                    marginBottom: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  訪れた街（市区郡）の数
                </div>
                <div
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: "900",
                    color: "var(--accent-color)",
                    fontFamily: "'Noto Serif JP', serif",
                    lineHeight: "1.2",
                  }}
                >
                  {visitedCitiesCount}{" "}
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: "800",
                      color: "#5C4E43",
                      fontFamily: "var(--font-family)",
                    }}
                  >
                    エリア
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowParticipatedModal(true)}
                className="glass-card"
                style={{
                  padding: "16px 12px",
                  textAlign: "center",
                  background: "#FFFDF9",
                  border: "1.5px solid var(--primary-color)",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px rgba(199, 68, 46, 0.08)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#A39687",
                    fontWeight: "bold",
                    marginBottom: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {selectedMonth === "すべて" ? "巡ったルートの数" : "今月完走したルート"}
                </div>
                <div
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: "900",
                    color: "var(--primary-color)",
                    fontFamily: "'Noto Serif JP', serif",
                    lineHeight: "1.2",
                  }}
                >
                  {filteredCompletedRoutesCount}{" "}
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: "800",
                      color: "#5C4E43",
                      fontFamily: "var(--font-family)",
                    }}
                  >
                    本
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--primary-color)",
                    fontWeight: 700,
                    marginTop: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  参加したルート一覧 ({participatedRoutes.length}) ▸
                </div>
              </button>
            </div>

            {/* 絞り込みバー（年月・ライフログフィルター・訪れた街） */}
            <div
              className="glass-card"
              style={{
                background: "#FFFDF9",
                border: "1px solid #EBE5D9",
                borderRadius: "14px",
                padding: "14px 16px",
                marginBottom: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* 年月クイックフィルター */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: "#A39687",
                    whiteSpace: "nowrap",
                    marginRight: "2px",
                  }}
                >
                  時期:
                </span>
                {months.map((m) => {
                  const active = selectedMonth === m;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setSelectedMonth(m)}
                      style={{
                        padding: "5px 11px",
                        borderRadius: "6px",
                        border: "1px solid",
                        borderColor: active ? "#2C2520" : "#E5DEC9",
                        background: active ? "#2C2520" : "#F2ECE1",
                        color: active ? "#FFFDF9" : "#5C4E43",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        transition: "all 0.2s",
                      }}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>

              {/* 思い出フィルター（連れ立ち・写真と言葉・再訪） */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: "#A39687",
                    whiteSpace: "nowrap",
                    marginRight: "2px",
                  }}
                >
                  記憶:
                </span>
                {LIFE_FILTERS.map((lf) => {
                  const countBadge =
                    lf.value === "tsuredachi"
                      ? tsuredachiCount
                      : lf.value === "with_memory"
                        ? withMemoryCount
                        : lf.value === "revisit"
                          ? revisitCount
                          : null;
                  const active = lifeFilter === lf.value;
                  return (
                    <button
                      key={lf.value}
                      type="button"
                      onClick={() => setLifeFilter(lf.value)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        padding: "5px 11px",
                        borderRadius: "6px",
                        border: "1px solid",
                        borderColor: active ? "#2C2520" : "#E5DEC9",
                        background: active ? "#2C2520" : "#F2ECE1",
                        color: active ? "#FFFDF9" : "#5C4E43",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        transition: "all 0.2s",
                      }}
                    >
                      {lf.value === "tsuredachi" && <Users size={12} strokeWidth={1.75} />}
                      {lf.value === "with_memory" && <Camera size={12} strokeWidth={1.75} />}
                      {lf.value === "revisit" && <RotateCcw size={12} strokeWidth={1.75} />}
                      {lf.label}
                      {countBadge !== null && countBadge > 0 ? ` (${countBadge})` : ""}
                    </button>
                  );
                })}
              </div>

              {/* 訪れた街フィルター（2エリア以上ある場合のみ表示） */}
              {visitedCities.length > 2 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#A39687",
                      whiteSpace: "nowrap",
                      marginRight: "2px",
                    }}
                  >
                    訪れた街:
                  </span>
                  {visitedCities.map((city) => {
                    const active = selectedCity === city;
                    return (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setSelectedCity(city)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          border: "1px solid",
                          borderColor: active ? "#2C2520" : "#E5DEC9",
                          background: active ? "#2C2520" : "#F2ECE1",
                          color: active ? "#FFFDF9" : "#5C4E43",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {city !== "すべて" && <MapPin size={11} strokeWidth={1.75} />}
                        {city}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 一緒に歩いた人（同行者フィルター） */}
              {companions.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#A39687",
                      whiteSpace: "nowrap",
                      marginRight: "2px",
                    }}
                  >
                    <Users size={12} strokeWidth={1.75} /> 一緒に歩いた人:
                  </span>
                  {["すべて", ...companions].map((comp) => {
                    const active = selectedCompanion === comp;
                    return (
                      <button
                        key={comp}
                        type="button"
                        onClick={() => setSelectedCompanion(comp)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          border: "1px solid",
                          borderColor: active ? "#2C2520" : "#E5DEC9",
                          background: active ? "#2C2520" : "#F2ECE1",
                          color: active ? "#FFFDF9" : "#5C4E43",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          transition: "all 0.2s",
                        }}
                      >
                        {comp === "すべて" ? "すべて" : `${comp} さん`}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* 巡ったルート別フィルター ＆ ルート絵巻ボタン */}
              {diaryRoutes.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    overflowX: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#A39687",
                      whiteSpace: "nowrap",
                      marginRight: "2px",
                    }}
                  >
                    <ScrollText size={12} strokeWidth={1.75} /> 物語ルート:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedRouteId("すべて")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      border: "1px solid",
                      borderColor: selectedRouteId === "すべて" ? "#2C2520" : "#E5DEC9",
                      background:
                        selectedRouteId === "すべて" ? "#2C2520" : "#F2ECE1",
                      color: selectedRouteId === "すべて" ? "#FFFDF9" : "#5C4E43",
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    すべて
                  </button>
                  {diaryRoutes.map((rt) => {
                    const active = selectedRouteId === rt.id;
                    return (
                      <div
                        key={rt.id}
                        style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedRouteId(rt.id)}
                          style={{
                            padding: "4px 10px",
                            borderRadius: "6px",
                            border: "1px solid",
                            borderColor: active ? "#2C2520" : "#E5DEC9",
                            background: active ? "#2C2520" : "#F2ECE1",
                            color: active ? "#FFFDF9" : "#5C4E43",
                            fontSize: "0.74rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {rt.title} ({rt.count})
                        </button>
                        {rt.count > 0 && (
                          <button
                            type="button"
                            onClick={() => setStoryScrollRouteId(rt.id)}
                            title="このルートの物語と歩みを絵巻で振り返る"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "4px 10px",
                              borderRadius: "6px",
                              border: "1px solid var(--accent-color)",
                              background: "#FFFDF9",
                              color: "#6E5314",
                              fontSize: "0.7rem",
                              fontWeight: 800,
                              cursor: "pointer",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <ScrollText size={11} strokeWidth={1.75} />
                            物語と歩みを振り返る（絵巻）
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 📜 月間・旅路の紀行サマリーバナー */}
            {(selectedMonth !== "すべて" ||
              selectedCompanion !== "すべて" ||
              selectedCity !== "すべて" ||
              selectedRouteId !== "すべて") &&
              currentFilterSummary.totalStamps > 0 && (
                <section
                  className="glass-card"
                  style={{
                    background: "linear-gradient(135deg, #FFFDF9 0%, #FAF4E6 100%)",
                    border: "1.5px solid var(--accent-color)",
                    borderRadius: "16px",
                    padding: "16px 20px",
                    marginBottom: "24px",
                    boxShadow: "0 4px 14px rgba(201, 168, 76, 0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "12px",
                    }}
                  >
                    <div style={{ flex: "1 1 260px" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "var(--font-size-small)",
                          color: "var(--accent-color)",
                          fontWeight: 800,
                          letterSpacing: "0.05em",
                          marginBottom: "2px",
                        }}
                      >
                        <ScrollText size={13} strokeWidth={1.75} />
                        月間・旅路の紀行サマリー
                      </div>
                      <h2
                        style={{
                          fontSize: "1.02rem",
                          fontWeight: 800,
                          color: "var(--text-color)",
                          margin: "0 0 6px 0",
                          lineHeight: 1.4,
                        }}
                      >
                        {selectedCompanion !== "すべて"
                          ? `${selectedCompanion}さんとの旅路 — ともにめぐった記憶`
                          : selectedMonth !== "すべて"
                            ? `${selectedMonth}の紀行録 — ${Math.max(1, currentFilterSummary.uniqueCities.length)}つの街をめぐり、${currentFilterSummary.totalStamps}個のしるし${currentFilterSummary.photosCount > 0 ? `と${currentFilterSummary.photosCount}枚の写真` : ""}を刻みました`
                            : selectedRouteId !== "すべて"
                              ? `「${currentFilterSummary.uniqueRoutes[0]?.title || "ルート"}」の紀行録`
                              : `${selectedCity}の紀行録 — ${currentFilterSummary.totalStamps}個のしるしを刻みました`}
                      </h2>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "#5C4E43",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        訪れた街 {Math.max(1, currentFilterSummary.uniqueCities.length)}エリア ・ 巡ったルート{" "}
                        {Math.max(1, currentFilterSummary.uniqueRoutes.length)}本 ・ 押印{" "}
                        {currentFilterSummary.totalStamps}個
                        {currentFilterSummary.photosCount > 0
                          ? ` ・ 思い出写真 ${currentFilterSummary.photosCount}枚`
                          : ""}
                        {currentFilterSummary.memosCount > 0
                          ? ` ・ あとがき ${currentFilterSummary.memosCount}件`
                          : ""}
                      </p>

                      {currentFilterSummary.uniqueRoutes.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            marginTop: "10px",
                          }}
                        >
                          {currentFilterSummary.uniqueRoutes.map((ur) => (
                            <button
                              key={ur.id}
                              type="button"
                              onClick={() => setStoryScrollRouteId(ur.id)}
                              style={{
                                fontSize: "0.74rem",
                                fontWeight: 800,
                                padding: "4px 10px",
                                borderRadius: "6px",
                                border: "1px solid var(--accent-color)",
                                background: "#FFFDF9",
                                color: "#5C4E43",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <ScrollText size={12} strokeWidth={1.75} color="var(--primary-color)" />
                              {ur.title}（絵巻を開く ▸）
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMonth("すべて");
                        setSelectedCity("すべて");
                        setSelectedCompanion("すべて");
                        setSelectedRouteId("すべて");
                      }}
                      className="btn-secondary"
                      style={{
                        padding: "6px 12px",
                        fontSize: "0.74rem",
                        borderRadius: "10px",
                        background: "#FFFDF9",
                      }}
                    >
                      全期間に戻す
                    </button>
                  </div>
                </section>
              )}

            {/* 1. ルートの踏破印（メイン＋サブ） */}
            {filteredCompletedRoutes.length > 0 &&
              lifeFilter === "all" &&
              selectedCity === "すべて" &&
              selectedCompanion === "すべて" &&
              selectedRouteId === "すべて" && (
              <section style={{ marginBottom: "28px" }}>
                <h2
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "var(--text-color)",
                    margin: "0 0 12px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <CheckCircle2 size={18} strokeWidth={1.75} color="var(--primary-color)" />
                  ルートの踏破印
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "14px",
                  }}
                >
                  {filteredCompletedRoutes.map((cr) => (
                    <Link
                      href={`/routes/${cr.route_id}`}
                      key={cr.id}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="glass-card"
                        style={{
                          background: "#FFFDF9",
                          border: "1.5px solid var(--accent-color)",
                          borderRadius: "14px",
                          padding: "16px 18px",
                          boxShadow: "0 4px 12px rgba(92, 78, 67, 0.06)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "6px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 800,
                              color: "var(--primary-color)",
                              letterSpacing: "1px",
                            }}
                          >
                            ルートの踏破印
                          </span>
                          <span style={{ fontSize: "0.7rem", color: "#A39687" }}>
                            {new Date(cr.completed_at).toLocaleDateString("ja-JP")}
                          </span>
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "#8A7E72", marginBottom: "2px" }}>
                          メイン
                        </div>
                        <div
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 900,
                            color: "#5C4E43",
                            fontFamily: "serif",
                            marginBottom: "8px",
                          }}
                        >
                          {cr.mainName}
                        </div>
                        {cr.subName && (
                          <div
                            style={{
                              borderTop: "1px dashed #EBE5D9",
                              paddingTop: "8px",
                              marginTop: "6px",
                            }}
                          >
                            <div
                              style={{ fontSize: "0.7rem", color: "#A39687", marginBottom: "2px" }}
                            >
                              サブ（自答の儀）
                            </div>
                            <div
                              style={{
                                fontSize: "0.92rem",
                                fontWeight: 800,
                                color: "var(--primary-color)",
                              }}
                            >
                              {cr.subName}
                            </div>
                            {cr.subDescription && (
                              <div
                                style={{
                                  fontSize: "0.74rem",
                                  color: "#8A7E72",
                                  marginTop: "2px",
                                  lineHeight: 1.4,
                                }}
                              >
                                {cr.subDescription}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 2. スポットの来訪印（グリッド表示 or 旅のアルバム表示） */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "14px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "var(--text-color)",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {viewMode === "album" ? (
                  <BookOpen size={18} strokeWidth={1.75} color="var(--primary-color)" />
                ) : (
                  <Bookmark size={18} strokeWidth={1.75} color="var(--primary-color)" />
                )}
                {viewMode === "album" ? "旅のアルバム（来訪日記）" : "スポットの来訪印"}
              </h2>
              <span style={{ fontSize: "0.76rem", color: "#8A7E72", fontWeight: 700 }}>
                {filteredDiary.length} 件のしるし
              </span>
            </div>

            {filteredDiary.length === 0 ? (
              <div
                className="glass-card"
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  background: "#FFFDF9",
                  border: "1px solid #EBE5D9",
                  borderRadius: "14px",
                  color: "#8A7E72",
                }}
              >
                <p style={{ margin: "0 0 12px 0", fontSize: "0.9rem" }}>
                  選択した条件に一致する押印の記録がありません。
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMonth("すべて");
                    setSelectedCity("すべて");
                    setSelectedCompanion("すべて");
                    setSelectedRouteId("すべて");
                    setLifeFilter("all");
                  }}
                  className="btn-secondary"
                  style={{ padding: "8px 18px", fontSize: "0.8rem" }}
                >
                  絞り込みを解除する
                </button>
              </div>
            ) : viewMode === "grid" ? (
              /* 朱印帳グリッドビュー */
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(125px, 1fr))",
                  gap: "16px",
                }}
              >
                {filteredDiary.map((d) => {
                  const stampImg = getCategoryStampUrl(d.category);
                  return (
                    <div
                      key={d.id}
                      className="glass-card"
                      onClick={() => openEventDetail(d, false)}
                      style={{
                        background: "#FFFDF9",
                        border: "1px solid #EBE5D9",
                        borderRadius: "14px",
                        padding: "16px 8px 12px 8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "relative",
                        minHeight: "142px",
                        justifyContent: "space-between",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.03)";
                        e.currentTarget.style.boxShadow = "0 6px 12px rgba(92, 78, 67, 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* 連れ立ち（友達と巡った）インジケーター */}
                      {d.group_id && (
                        <div
                          style={{
                            position: "absolute",
                            top: "8px",
                            left: "8px",
                            background: "rgba(92, 78, 67, 0.1)",
                            border: "1.5px solid #8A7E72",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#5C4E43",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                            zIndex: 5,
                          }}
                          title="連れ立ちで巡った思い出"
                        >
                          <Users size={10} />
                        </div>
                      )}

                      {/* 写真ありのインジケーター */}
                      {d.hasPhoto && (
                        <div
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "8px",
                            background: "rgba(217, 101, 91, 0.1)",
                            border: "1.5px solid var(--primary-color)",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--primary-color)",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                            zIndex: 5,
                          }}
                          title="思い出写真あり"
                        >
                          <Camera size={10} />
                        </div>
                      )}

                      {/* 朱印スタンプ画像 */}
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          background: "#fff",
                          border: "1px solid #EBE5D9",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          marginBottom: "6px",
                          boxShadow: "inset 0 0 5px rgba(0,0,0,0.03)",
                        }}
                      >
                        <img
                          src={stampImg}
                          alt="印"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "6px",
                          }}
                        />
                      </div>

                      <div style={{ width: "100%" }}>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: "800",
                            color: "#5C4E43",
                            margin: "0 auto 2px auto",
                            maxWidth: "108px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {d.spotName || "スポット"}
                        </div>

                        {d.spotAreaLabel && (
                          <div
                            style={{
                              fontSize: "0.62rem",
                              color: "#8A7E72",
                              marginBottom: "2px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "2px",
                            }}
                          >
                            <MapPin size={10} strokeWidth={1.75} />
                            {d.spotAreaLabel}
                          </div>
                        )}

                        <div
                          style={{
                            fontSize: "0.64rem",
                            color: "#A39687",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "4px",
                          }}
                        >
                          <span>{new Date(d.created_at).toLocaleDateString("ja-JP")}</span>
                          {d.visitOrder >= 2 && (
                            <span
                              style={{
                                fontSize: "0.58rem",
                                color: "var(--primary-color)",
                                fontWeight: 800,
                              }}
                            >
                              ({d.visitOrder}回目)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* 旅のアルバム（日記帳）ビュー */
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {filteredDiary.map((d) => {
                  const visitDate = new Date(d.created_at);
                  const dateStr = visitDate.toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  });
                  const timeStr = visitDate.toLocaleTimeString("ja-JP", {
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  const stampImg = getCategoryStampUrl(d.category);
                  const displayPhoto = d.photo_url || d.sharedPhotoUrl;
                  const displayMemo = d.memo || d.sharedMemoText;
                  const isTooLargeBase64 = false;

                  return (
                    <article
                      key={d.id}
                      className="glass-card"
                      style={{
                        background: "#FFFDF9",
                        border: "1px solid #EBE5D9",
                        borderRadius: "16px",
                        padding: "20px",
                        boxShadow: "0 4px 14px rgba(92, 78, 67, 0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                      }}
                    >
                      {/* 上段：訪問日時・街バッジ・再訪バッジ・来訪番号 */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                          borderBottom: "1px dashed #EBE5D9",
                          paddingBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "0.78rem",
                              fontWeight: 800,
                              color: "#5C4E43",
                            }}
                          >
                            <Calendar size={13} color="var(--primary-color)" />
                            {dateStr} {timeStr}
                          </span>

                          {d.spotAreaLabel && (
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "3px",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "#6E5314",
                                background: "rgba(201, 168, 76, 0.15)",
                                padding: "2px 8px",
                                borderRadius: "12px",
                              }}
                            >
                              <MapPin size={11} />
                              {d.spotAreaLabel}
                            </span>
                          )}

                          {d.visitOrder >= 2 && (
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "3px",
                                fontSize: "0.68rem",
                                fontWeight: 800,
                                color: "var(--primary-color)",
                                background: "rgba(199, 68, 46, 0.1)",
                                padding: "2px 8px",
                                borderRadius: "12px",
                              }}
                            >
                              <RotateCcw size={10} />
                              {d.visitOrder}回目の来訪
                            </span>
                          )}
                        </div>

                        {d.visitor_number && (
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 800,
                              color: "var(--primary-color)",
                              fontFamily: "'Noto Serif JP', serif",
                            }}
                          >
                            第 {d.visitor_number} 番のしるし
                          </span>
                        )}
                      </div>

                      {/* 中段：朱印シール・スポット名・ルート名・連れ立ち情報 */}
                      <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                        <div
                          onClick={() => openEventDetail(d, false)}
                          style={{
                            width: "64px",
                            height: "64px",
                            borderRadius: "50%",
                            background: "#fff",
                            border: "1.5px dashed var(--primary-color)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexShrink: 0,
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(199, 68, 46, 0.08)",
                          }}
                        >
                          <img
                            src={stampImg}
                            alt="朱印"
                            style={{
                              width: "86%",
                              height: "86%",
                              objectFit: "contain",
                            }}
                          />
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <h3
                            onClick={() => openEventDetail(d, false)}
                            style={{
                              fontSize: "1.1rem",
                              fontWeight: 900,
                              color: "#5C4E43",
                              margin: "0 0 4px 0",
                              fontFamily: "'Noto Serif JP', serif",
                              cursor: "pointer",
                            }}
                          >
                            {d.spotName}
                          </h3>
                          {d.routeName && (
                            <div style={{ fontSize: "0.78rem", color: "#8A7E72" }}>
                              巡ったルート:{" "}
                              {d.route_id ? (
                                <Link
                                  href={`/routes/${d.route_id}`}
                                  style={{
                                    color: "var(--primary-color)",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                  }}
                                >
                                  {d.routeName}
                                </Link>
                              ) : (
                                <span style={{ fontWeight: 700 }}>{d.routeName}</span>
                              )}
                            </div>
                          )}

                          {d.group_id && (
                            <div
                              style={{
                                marginTop: "6px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "5px",
                                fontSize: "0.74rem",
                                color: "#5C4E43",
                                background: "#FAF6EE",
                                border: "1px solid #EBE5D9",
                                padding: "3px 10px",
                                borderRadius: "10px",
                              }}
                            >
                              <Users size={12} color="var(--primary-color)" />
                              <span>
                                {d.companionNames.length > 0
                                  ? `${d.companionNames.join(" さん、")} さんと一緒に巡りました`
                                  : "連れ立ちで巡った記憶"}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* スポットの物語断片（f7_fragment） */}
                      {d.spotFragment && (
                        <div
                          style={{
                            background: "#FAF6EE",
                            borderLeft: "3px solid var(--accent-color)",
                            borderRadius: "6px",
                            padding: "8px 12px",
                            fontSize: "0.78rem",
                            color: "#6E6256",
                            lineHeight: 1.5,
                          }}
                        >
                          {d.spotFragment}
                        </div>
                      )}

                      {/* 思い出写真とあとがき（メモ） */}
                      {(displayPhoto || displayMemo) && (
                        <div
                          style={{
                            background: "#FFFDF9",
                            border: "1px dashed var(--accent-color)",
                            borderRadius: "12px",
                            padding: "12px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          {displayPhoto && !isTooLargeBase64 && (
                            <div
                              onClick={() => setZoomPhotoUrl(displayPhoto)}
                              style={{
                                width: "100%",
                                maxHeight: "220px",
                                borderRadius: "8px",
                                overflow: "hidden",
                                border: "1px solid #EBE5D9",
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={displayPhoto}
                                alt="旅の思い出写真"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: "220px",
                                  objectFit: "cover",
                                  display: "block",
                                }}
                              />
                            </div>
                          )}
                          {displayMemo && (
                            <div
                              style={{
                                fontSize: "0.86rem",
                                color: "#5C4E43",
                                fontStyle: "italic",
                                lineHeight: 1.55,
                              }}
                            >
                              「 {displayMemo} 」
                            </div>
                          )}
                        </div>
                      )}

                      {/* 下段アクションバー */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingTop: "4px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => openEventDetail(d, true)}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "transparent",
                            border: "1px solid #EBE5D9",
                            borderRadius: "16px",
                            padding: "5px 12px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: "#5C4E43",
                            cursor: "pointer",
                          }}
                        >
                          <Edit3 size={12} color="var(--primary-color)" />
                          {d.memo ? "あとがきを編集する" : "あとがき（感想メモ）を綴る"}
                        </button>

                        <button
                          type="button"
                          onClick={() => openEventDetail(d, false)}
                          style={{
                            background: "transparent",
                            border: "none",
                            fontSize: "0.76rem",
                            fontWeight: 800,
                            color: "var(--primary-color)",
                            cursor: "pointer",
                          }}
                        >
                          御朱印紙面を見る ▸
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#B3A598" }}>
            <p style={{ margin: "0 0 16px 0", fontSize: "0.95rem" }}>
              まだ押印（来訪）の記録がありません。
            </p>
            <Link
              href="/routes"
              className="btn-primary"
              style={{ padding: "10px 20px", textDecoration: "none" }}
            >
              最初のルートを巡る
            </Link>
          </div>
        )}
      </main>

      {/* 押印（SHUIN）詳細モーダル */}
      {selectedEvent &&
        typeof document !== "undefined" &&
        createPortal(
          (() => {
            const visitDate = new Date(selectedEvent.created_at);
            const timeStr = visitDate.toLocaleTimeString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit",
            });
            const dateStr = visitDate.toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const stampImg = getCategoryStampUrl(selectedEvent.category);
            const bgImg = getCategoryBgUrl(selectedEvent.category);

            return (
              <div
                onClick={() => {
                  setSelectedEvent(null);
                  setIsEditingMemo(false);
                }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(0, 0, 0, 0.75)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                  padding: "20px",
                }}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    background: "#FFFDF9",
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: "2px solid var(--primary-color)",
                    borderRadius: "20px",
                    padding: "32px 24px",
                    maxWidth: "400px",
                    maxHeight: "88vh",
                    overflowY: "auto",
                    width: "100%",
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(92, 78, 67, 0.15)",
                    color: "#5C4E43",
                    position: "relative",
                  }}
                >
                  {/* 装飾用の和風オーバーレイ */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(255, 253, 249, 0.88)",
                      borderRadius: "18px",
                      zIndex: 1,
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 2 }}>
                    {/* 訪問番号 & 再訪バッジ */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginBottom: "18px",
                      }}
                    >
                      {selectedEvent.visitor_number && (
                        <div
                          style={{
                            display: "inline-block",
                            background: "rgba(217, 101, 91, 0.06)",
                            border: "1px solid rgba(217, 101, 91, 0.25)",
                            borderRadius: "6px",
                            padding: "4px 12px",
                            fontSize: "0.78rem",
                            color: "var(--primary-color)",
                            fontWeight: "bold",
                            fontFamily: "'Noto Serif JP', serif",
                          }}
                        >
                          第 {selectedEvent.visitor_number} 番のしるし
                        </div>
                      )}
                      {selectedEvent.visitOrder >= 2 && (
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            background: "rgba(201, 168, 76, 0.15)",
                            border: "1px solid var(--accent-color)",
                            borderRadius: "6px",
                            padding: "4px 10px",
                            fontSize: "0.74rem",
                            color: "#6E5314",
                            fontWeight: 800,
                          }}
                        >
                          <RotateCcw size={12} strokeWidth={1.75} />
                          {selectedEvent.visitOrder}回目の来訪
                        </div>
                      )}
                    </div>

                    {/* 大きな朱印スタンプ画像 */}
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        background: "#fff",
                        border: "2px dashed var(--primary-color)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto 18px auto",
                        boxShadow: "0 4px 12px rgba(217,101,91,0.08)",
                      }}
                    >
                      <img
                        src={stampImg}
                        alt="御朱印"
                        style={{ width: "90%", height: "90%", objectFit: "contain" }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: "900",
                        color: "#5C4E43",
                        fontFamily: "'Noto Serif JP', serif",
                        margin: "0 0 6px 0",
                      }}
                    >
                      {selectedEvent.spotName || "スポット名"}
                    </h3>

                    {selectedEvent.spotAreaLabel && (
                      <div
                        style={{
                          fontSize: "0.76rem",
                          color: "#8A7E72",
                          marginBottom: "6px",
                          fontWeight: 700,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <MapPin size={12} strokeWidth={1.75} />
                        {selectedEvent.spotAreaLabel}
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "6px",
                        color: "#8A7E72",
                        fontSize: "0.82rem",
                        marginBottom: "18px",
                      }}
                    >
                      <Calendar size={14} />
                      <span>
                        {dateStr} {timeStr}
                      </span>
                    </div>

                    {selectedEvent.routeName && (
                      <div
                        style={{
                          background: "rgba(92, 78, 67, 0.04)",
                          border: "1px solid #EBE5D9",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          fontSize: "0.85rem",
                          margin: "0 0 16px 0",
                          textAlign: "left",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "#A39687",
                            fontWeight: "bold",
                            marginBottom: "2px",
                          }}
                        >
                          巡ったルート
                        </div>
                        {selectedEvent.route_id ? (
                          <Link
                            href={`/routes/${selectedEvent.route_id}`}
                            style={{
                              color: "var(--primary-color)",
                              textDecoration: "none",
                              fontWeight: "bold",
                            }}
                          >
                            {selectedEvent.routeName}
                          </Link>
                        ) : (
                          <span style={{ fontWeight: "bold" }}>{selectedEvent.routeName}</span>
                        )}
                      </div>
                    )}

                    {/* 連れ立ち（同行者）情報 */}
                    {groupInfo && groupInfo.members.length > 0 && (
                      <div
                        style={{
                          background: "rgba(92, 78, 67, 0.03)",
                          border: "1px solid #EBE5D9",
                          borderRadius: "8px",
                          padding: "8px 12px",
                          fontSize: "0.8rem",
                          margin: "0 0 16px 0",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Users size={14} strokeWidth={1.75} color="var(--primary-color)" />
                        <span>
                          <strong>{groupInfo.members.join(" さん、")} さん</strong>と一緒に巡りました
                        </span>
                      </div>
                    )}

                    {/* 撮影された思い出写真 ＆ 感想メモ */}
                    {((selectedEvent.photo_url || selectedEvent.memo) ||
                      (groupInfo && (groupInfo.sharedPhoto || groupInfo.sharedMemo))) && (
                      <div
                        style={{
                          background: "#FFFDF9",
                          border: "1.5px dashed var(--accent-color)",
                          borderRadius: "10px",
                          padding: "12px",
                          margin: "0 0 16px 0",
                          textAlign: "left",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--accent-color)",
                            fontWeight: "bold",
                            marginBottom: "6px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <Camera size={13} strokeWidth={1.75} /> 旅の思い出
                          </div>
                          {groupInfo && groupInfo.photoUploaderName && (
                            <span
                              style={{ fontSize: "0.65rem", color: "#8A7E72", fontWeight: "normal" }}
                            >
                              ({groupInfo.photoUploaderName} さんが共有)
                            </span>
                          )}
                        </div>

                         {/* 写真の表示 */}
                        {(() => {
                          const photoUrl = selectedEvent.photo_url || groupInfo?.sharedPhoto;
                          if (!photoUrl) return null;

                          return (
                            <div
                              onClick={() => setZoomPhotoUrl(photoUrl)}
                              style={{
                                width: "100%",
                                borderRadius: "6px",
                                overflow: "hidden",
                                border: "1px solid #EBE5D9",
                                marginBottom:
                                  groupInfo?.sharedMemo || selectedEvent.memo ? "8px" : "0",
                                cursor: "pointer",
                                transition: "opacity 0.2s",
                                background: "#F5F0E6",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              title="タップで拡大表示"
                            >
                              <img
                                src={photoUrl}
                                alt="思い出の写真"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: "180px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          );
                        })()}

                        {/* メモの表示 */}
                        {!isEditingMemo && (selectedEvent.memo || groupInfo?.sharedMemo) && (
                          <p
                            style={{
                              fontSize: "0.82rem",
                              color: "#5C4E43",
                              margin: 0,
                              fontStyle: "italic",
                              lineHeight: "1.45",
                            }}
                          >
                            「 {selectedEvent.memo || groupInfo?.sharedMemo} 」
                          </p>
                        )}
                      </div>
                    )}

                    {/* 同行メンバーの共有された印・写真・コメント一覧 */}
                    {groupInfo && groupInfo.companionMemories && groupInfo.companionMemories.length > 0 && (
                      <div
                        style={{
                          background: "rgba(201, 168, 76, 0.08)",
                          border: "1px dashed var(--accent-color)",
                          borderRadius: "10px",
                          padding: "12px",
                          margin: "0 0 16px 0",
                          textAlign: "left",
                        }}
                      >
                        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#5C4E43", marginBottom: "8px", display: "flex", alignItems: "center", gap: "5px" }}>
                          <Users size={13} strokeWidth={1.75} color="var(--primary-color)" />
                          連れ立ちメンバーの共有された印 ({groupInfo.companionMemories.length}名)
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {groupInfo.companionMemories.map((cm) => (
                            <div
                              key={cm.userId}
                              style={{
                                background: "#FFFDF9",
                                border: "1px solid #EBE5D9",
                                borderRadius: "8px",
                                padding: "8px 10px",
                              }}
                            >
                              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary-color)", marginBottom: "4px" }}>
                                {cm.displayName} さん
                              </div>
                              {cm.photoUrl && (
                                <img
                                  src={cm.photoUrl}
                                  alt={`${cm.displayName}さんの写真`}
                                  onClick={() => setZoomPhotoUrl(cm.photoUrl)}
                                  style={{
                                    width: "100%",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                    marginBottom: cm.memo ? "6px" : 0,
                                    cursor: "pointer",
                                  }}
                                />
                              )}
                              {cm.memo ? (
                                <div style={{ fontSize: "0.82rem", color: "#5C4E43", display: "flex", alignItems: "center", gap: "4px" }}>
                                  <MessageCircle size={12} strokeWidth={1.75} />
                                  {cm.memo}
                                </div>
                              ) : !cm.photoUrl ? (
                                <div style={{ fontSize: "0.74rem", color: "#8A7E72", display: "flex", alignItems: "center", gap: "4px" }}>
                                  <CheckCircle2 size={12} strokeWidth={1.75} color="var(--primary-color)" />
                                  一緒にこのスポットで押印しました
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 思い出の写真・あとがき（一言メモ）編集セクション */}
                    <div
                      style={{
                        background: "#FAF6EE",
                        border: "1px solid #EBE5D9",
                        borderRadius: "10px",
                        padding: "12px",
                        marginBottom: "20px",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "6px",
                          marginBottom: isEditingMemo ? "8px" : "0",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "#5C4E43",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Edit3 size={13} color="var(--primary-color)" />
                          写真・あとがき（一言メモ）
                        </span>
                        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                          <label
                            style={{
                              background: "#FFFDF9",
                              border: "1px solid var(--primary-color)",
                              borderRadius: "14px",
                              padding: "3px 10px",
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              color: "var(--primary-color)",
                              cursor: uploadingPhoto ? "wait" : "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <Camera size={12} />
                            {uploadingPhoto
                              ? "保存中..."
                              : selectedEvent.photo_url
                                ? "写真を変更"
                                : "写真を追加"}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handlePhotoUploadChange}
                              disabled={uploadingPhoto}
                              style={{ display: "none" }}
                            />
                          </label>
                          {!isEditingMemo && (
                            <button
                              type="button"
                              onClick={() => {
                                setMemoDraft(selectedEvent.memo || "");
                                setIsEditingMemo(true);
                              }}
                              style={{
                                background: "transparent",
                                border: "1px solid var(--primary-color)",
                                borderRadius: "14px",
                                padding: "3px 10px",
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                color: "var(--primary-color)",
                                cursor: "pointer",
                              }}
                            >
                              {selectedEvent.memo ? "あとがきを編集" : "あとがきを綴る"}
                            </button>
                          )}
                        </div>
                      </div>

                      {isEditingMemo && (
                        <div>
                          <textarea
                            value={memoDraft}
                            onChange={(e) => setMemoDraft(e.target.value.slice(0, 140))}
                            placeholder="この場所で感じた風や景色、心に残ったことを自由に書き留められます（140文字まで）"
                            rows={3}
                            style={{
                              width: "100%",
                              padding: "8px 10px",
                              borderRadius: "8px",
                              border: "1px solid #D5CBB8",
                              background: "#FFFDF9",
                              color: "#5C4E43",
                              fontSize: "0.82rem",
                              fontFamily: "var(--font-family)",
                              resize: "vertical",
                              outline: "none",
                              marginBottom: "8px",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <span style={{ fontSize: "0.68rem", color: "#A39687" }}>
                              {memoDraft.length} / 140文字
                            </span>
                            <div style={{ display: "flex", gap: "6px" }}>
                              <button
                                type="button"
                                onClick={() => setIsEditingMemo(false)}
                                className="btn-secondary"
                                style={{
                                  padding: "5px 12px",
                                  fontSize: "0.74rem",
                                  borderRadius: "8px",
                                }}
                              >
                                キャンセル
                              </button>
                              <button
                                type="button"
                                disabled={savingMemo}
                                onClick={handleSaveMemo}
                                className="btn-primary"
                                style={{
                                  padding: "5px 14px",
                                  fontSize: "0.74rem",
                                  borderRadius: "8px",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px",
                                }}
                              >
                                <Check size={13} />
                                {savingMemo ? "保存中..." : "保存する"}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* この日のしるしを御朱印紙面（画像）にする */}
                    <div
                      style={{
                        background: "rgba(201, 168, 76, 0.1)",
                        border: "1.5px solid var(--accent-color)",
                        borderRadius: "12px",
                        padding: "14px 12px",
                        marginBottom: "18px",
                        textAlign: "center",
                      }}
                    >
                      {!cardDataUrl ? (
                        <>
                          <div
                            style={{
                              fontSize: "0.74rem",
                              color: "#6E5314",
                              fontWeight: 700,
                              marginBottom: "8px",
                            }}
                          >
                            日付・場所・写真・あとがきを和紙の記念紙面に仕立てます
                          </div>
                          <button
                            type="button"
                            disabled={generatingCard}
                            onClick={handleGenerateCard}
                            className="btn-secondary"
                            style={{
                              width: "100%",
                              padding: "10px 14px",
                              fontSize: "0.82rem",
                              borderRadius: "10px",
                              borderColor: "var(--accent-color)",
                              background: "#FFFDF9",
                              color: "#5C4E43",
                              fontWeight: 800,
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "6px",
                            }}
                          >
                            <ScrollText size={14} strokeWidth={1.75} color="var(--primary-color)" />
                            {generatingCard
                              ? "御朱印紙面を仕立てています..."
                              : "この日のしるしを御朱印紙面（画像）にする"}
                          </button>
                        </>
                      ) : (
                        <div>
                          <div
                            style={{
                              fontSize: "0.76rem",
                              fontWeight: 800,
                              color: "#6E5314",
                              marginBottom: "8px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <ScrollText size={13} strokeWidth={1.75} />
                            特製・御朱印紙面カードができあがりました
                          </div>
                          <div
                            style={{
                              borderRadius: "10px",
                              overflow: "hidden",
                              border: "1px solid #EBE5D9",
                              marginBottom: "10px",
                              background: "#F7F3EA",
                            }}
                          >
                            <img
                              src={cardDataUrl}
                              alt="特製御朱印紙面カード"
                              style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "8px",
                              justifyContent: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <button
                              type="button"
                              onClick={handleDownloadCard}
                              className="btn-secondary"
                              style={{
                                flex: 1,
                                minWidth: "140px",
                                padding: "9px 10px",
                                fontSize: "0.76rem",
                                borderRadius: "8px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                                background: "#FFFDF9",
                              }}
                            >
                              <Download size={14} />
                              画像を保存する
                            </button>
                            <button
                              type="button"
                              onClick={handleShareCard}
                              className="btn-primary"
                              style={{
                                flex: 1,
                                minWidth: "130px",
                                padding: "9px 10px",
                                fontSize: "0.76rem",
                                borderRadius: "8px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                              }}
                            >
                              <Share2 size={14} />
                              シェアする
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedEvent(null);
                        setIsEditingMemo(false);
                        setCardDataUrl(null);
                      }}
                      className="btn-primary"
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "10px",
                        fontSize: "0.9rem",
                        cursor: "pointer",
                      }}
                    >
                      閉じる
                    </button>
                  </div>
                </div>
              </div>
            );
          })(),
          document.body
        )}

      {/* 参加したルート一覧モーダル */}
      {showParticipatedModal &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setShowParticipatedModal(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.72)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#FFFDF9",
                border: "1.5px solid var(--accent-color)",
                borderRadius: "20px",
                padding: "24px 20px",
                maxWidth: "460px",
                maxHeight: "85vh",
                overflowY: "auto",
                width: "100%",
                boxShadow: "0 12px 35px rgba(92, 78, 67, 0.2)",
                color: "#5C4E43",
                position: "relative",
              }}
            >
              <button
                type="button"
                onClick={() => setShowParticipatedModal(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#8A7E72",
                  padding: "4px",
                }}
                aria-label="閉じる"
              >
                <X size={20} />
              </button>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  color: "#5C4E43",
                  margin: "0 0 4px 0",
                  fontFamily: "'Noto Serif JP', serif",
                }}
              >
                参加したルート一覧
              </h3>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#8A7E72",
                  margin: "0 0 18px 0",
                  lineHeight: 1.5,
                }}
              >
                最近参加・押印した順に表示しています。ルートの詳細画面からいつでも再参加できます。
              </p>

              {participatedRoutes.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {participatedRoutes.map((pr) => {
                    const pct =
                      pr.totalSpots > 0
                        ? Math.min(100, Math.round((pr.stampedSpotsCount / pr.totalSpots) * 100))
                        : 0;
                    const stampImg = getCategoryStampUrl(pr.category);
                    return (
                      <div
                        key={pr.route_id}
                        style={{
                          background: "#FAF6EE",
                          border: "1px solid #EBE5D9",
                          borderRadius: "14px",
                          padding: "16px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: 800,
                              padding: "2px 8px",
                              borderRadius: "6px",
                              background: pr.isActive
                                ? "rgba(199, 68, 46, 0.12)"
                                : pr.isCompleted
                                  ? "rgba(201, 168, 76, 0.18)"
                                  : "rgba(92, 78, 67, 0.08)",
                              color: pr.isActive
                                ? "var(--primary-color)"
                                : pr.isCompleted
                                  ? "#8C6D1F"
                                  : "#5C4E43",
                              border: pr.isCompleted ? "1px solid var(--accent-color)" : "none",
                            }}
                          >
                            {pr.isActive ? "進行中" : pr.isCompleted ? "完走" : "参加履歴"}
                          </span>
                          <span style={{ fontSize: "0.72rem", color: "#A39687" }}>
                            最終記録: {new Date(pr.latestActivityAt).toLocaleDateString("ja-JP")}
                          </span>
                        </div>

                        <div
                          style={{
                            fontSize: "1rem",
                            fontWeight: 800,
                            color: "#5C4E43",
                            lineHeight: 1.4,
                          }}
                        >
                          {pr.routeTitle}
                        </div>

                        <div
                          style={{
                            background: "#FFFDF9",
                            border: "1px solid #EBE5D9",
                            borderRadius: "10px",
                            padding: "10px 12px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              fontSize: "0.82rem",
                              fontWeight: 700,
                              color: "#5C4E43",
                              marginBottom: pr.totalSpots > 0 ? "6px" : "0",
                            }}
                          >
                            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                              <img
                                src={stampImg}
                                alt="印"
                                style={{ width: "18px", height: "18px", objectFit: "contain" }}
                              />
                              獲得したしるし（印）の数
                            </span>
                            <span
                              style={{
                                color: "var(--primary-color)",
                                fontWeight: 900,
                                fontSize: "0.95rem",
                              }}
                            >
                              {pr.totalSpots > 0
                                ? `${pr.stampedSpotsCount} / ${pr.totalSpots} 個`
                                : `${pr.stampedSpotsCount} 個`}
                            </span>
                          </div>
                          {pr.totalSpots > 0 && (
                            <div
                              style={{
                                width: "100%",
                                height: "6px",
                                background: "#EBE5D9",
                                borderRadius: "3px",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  width: `${pct}%`,
                                  height: "100%",
                                  background: pr.isCompleted
                                    ? "var(--accent-color)"
                                    : "var(--primary-color)",
                                }}
                              />
                            </div>
                          )}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "8px",
                            flexWrap: "wrap",
                            marginTop: "2px",
                          }}
                        >
                          {pr.stampedSpotsCount > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                setShowParticipatedModal(false);
                                setStoryScrollRouteId(pr.route_id);
                              }}
                              className="btn-secondary"
                              style={{
                                padding: "8px 12px",
                                fontSize: "0.78rem",
                                borderRadius: "8px",
                                border: "1px solid var(--accent-color)",
                                background: "#FFFDF9",
                                color: "#5C4E43",
                                fontWeight: 800,
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <ScrollText size={13} strokeWidth={1.75} color="var(--primary-color)" />
                              物語と歩みを振り返る（絵巻）
                            </button>
                          )}
                          <Link
                            href={`/routes/${pr.route_id}`}
                            onClick={() => setShowParticipatedModal(false)}
                            className="btn-primary"
                            style={{
                              padding: "8px 14px",
                              fontSize: "0.82rem",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              borderRadius: "8px",
                            }}
                          >
                            {pr.isActive ? "ルートの詳細へ" : "ルートの詳細へ（再参加）"}
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "32px 0",
                    color: "#8A7E72",
                    fontSize: "0.9rem",
                  }}
                >
                  まだ参加したルートの履歴がありません。
                </div>
              )}

              <button
                type="button"
                onClick={() => setShowParticipatedModal(false)}
                className="btn-secondary"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "0.88rem",
                  marginTop: "18px",
                  cursor: "pointer",
                }}
              >
                閉じる
              </button>
            </div>
          </div>,
          document.body
        )}

      {/* 物語の回顧録（ルート別ストーリー絵巻）モーダル */}
      {storyScrollRouteId &&
        typeof document !== "undefined" &&
        createPortal(
          (() => {
            const prMeta = participatedRoutes.find((p) => p.route_id === storyScrollRouteId);
            const drMeta = diaryRoutes.find((r) => r.id === storyScrollRouteId);
            const routeEvents = [...diary]
              .filter((d) => d.route_id === storyScrollRouteId)
              .sort(
                (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
              );

            const routeTitle =
              prMeta?.routeTitle ||
              drMeta?.title ||
              routeEvents[0]?.routeName ||
              "物語のルート";
            const routeCategory =
              prMeta?.category || drMeta?.category || routeEvents[0]?.category;
            const routePrefecture =
              prMeta?.prefecture || drMeta?.prefecture || routeEvents[0]?.spotPrefecture || "";
            const routeStoryIntro = prMeta?.storyIntro || drMeta?.storyIntro || "";
            const stampImg = getCategoryStampUrl(routeCategory);
            const completedInfo = filteredCompletedRoutes.find(
              (cr) => cr.route_id === storyScrollRouteId
            );

            return (
              <div
                onClick={() => setStoryScrollRouteId(null)}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(38, 30, 24, 0.78)",
                  backdropFilter: "blur(5px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                  padding: "20px",
                }}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    background: "linear-gradient(180deg, #FFFDF9 0%, #FAF5E8 100%)",
                    border: "2px solid var(--accent-color)",
                    borderRadius: "20px",
                    padding: "26px 22px",
                    maxWidth: "540px",
                    maxHeight: "88vh",
                    overflowY: "auto",
                    width: "100%",
                    boxShadow: "0 16px 40px rgba(38, 30, 24, 0.3)",
                    color: "var(--text-color)",
                    position: "relative",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setStoryScrollRouteId(null)}
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "#8A7E72",
                      padding: "4px",
                    }}
                    aria-label="閉じる"
                  >
                    <X size={20} />
                  </button>

                  {/* 絵巻ヘッダー */}
                  <div
                    style={{
                      textAlign: "center",
                      borderBottom: "1px dashed var(--accent-color)",
                      paddingBottom: "16px",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "var(--accent-color)",
                        letterSpacing: "0.12em",
                        marginBottom: "4px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <ScrollText size={13} strokeWidth={1.75} />
                      物語の回顧録（ストーリー絵巻）
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 900,
                        color: "var(--text-color)",
                        margin: "0 0 8px 0",
                        fontFamily: "'Noto Serif JP', serif",
                        lineHeight: 1.4,
                      }}
                    >
                      {routeTitle}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                        fontSize: "0.74rem",
                      }}
                    >
                      {routePrefecture && (
                        <span
                          style={{
                            padding: "2px 9px",
                            borderRadius: "6px",
                            background: "#FAF6EE",
                            border: "1px solid #EBE5D9",
                            color: "#5C4E43",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <MapPin size={11} strokeWidth={1.75} />
                          {routePrefecture}
                        </span>
                      )}
                      {routeCategory && (
                        <span
                          style={{
                            padding: "2px 9px",
                            borderRadius: "6px",
                            background: "rgba(199, 68, 46, 0.1)",
                            color: "var(--primary-color)",
                            fontWeight: 800,
                          }}
                        >
                          {routeCategory}
                        </span>
                      )}
                      <span
                        style={{
                          padding: "2px 9px",
                          borderRadius: "6px",
                          background: "rgba(201, 168, 76, 0.18)",
                          color: "#6E5314",
                          fontWeight: 800,
                        }}
                      >
                        刻んだ足跡 {routeEvents.length} 幕
                      </span>
                    </div>

                    {routeStoryIntro && (
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "#6E6256",
                          margin: "12px 0 0 0",
                          lineHeight: 1.6,
                          textAlign: "left",
                          background: "#FFFDF9",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          border: "1px solid #EBE5D9",
                        }}
                      >
                        {routeStoryIntro}
                      </p>
                    )}
                  </div>

                  {/* 時系列の歩み（第1幕〜最終幕） */}
                  {routeEvents.length > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        position: "relative",
                      }}
                    >
                      {routeEvents.map((ev, idx) => {
                        const vDate = new Date(ev.created_at);
                        const dStr = vDate.toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        });
                        const tStr = vDate.toLocaleTimeString("ja-JP", {
                          hour: "2-digit",
                          minute: "2-digit",
                        });
                        const storyText = ev.spotFullStory || ev.spotFragment || "";
                        const displayPhoto = ev.photo_url || ev.sharedPhotoUrl;
                        const displayMemo = ev.memo || ev.sharedMemoText;

                        return (
                          <div
                            key={ev.id}
                            style={{
                              background: "#FFFDF9",
                              border: "1px solid #EBE5D9",
                              borderRadius: "14px",
                              padding: "14px 16px",
                              boxShadow: "0 2px 8px rgba(92, 78, 67, 0.04)",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "6px",
                                marginBottom: "8px",
                                borderBottom: "1px dashed #EBE5D9",
                                paddingBottom: "6px",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "0.72rem",
                                  fontWeight: 800,
                                  color: "var(--primary-color)",
                                  background: "rgba(199, 68, 46, 0.1)",
                                  padding: "2px 8px",
                                  borderRadius: "6px",
                                }}
                              >
                                第 {idx + 1} 幕
                              </span>
                              <span style={{ fontSize: "0.74rem", color: "#8A7E72", fontWeight: 700 }}>
                                {dStr} {tStr}
                              </span>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: storyText || displayPhoto || displayMemo ? "10px" : 0,
                              }}
                            >
                              <div
                                style={{
                                  width: "46px",
                                  height: "46px",
                                  borderRadius: "50%",
                                  background: "#fff",
                                  border: "1.5px dashed var(--primary-color)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <img
                                  src={stampImg}
                                  alt="SHUIN印影"
                                  style={{ width: "84%", height: "84%", objectFit: "contain" }}
                                />
                              </div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div
                                  style={{
                                    fontSize: "0.98rem",
                                    fontWeight: 900,
                                    color: "var(--text-color)",
                                    fontFamily: "'Noto Serif JP', serif",
                                  }}
                                >
                                  {ev.spotName}
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    flexWrap: "wrap",
                                    marginTop: "2px",
                                    fontSize: "0.7rem",
                                    color: "#8A7E72",
                                  }}
                                >
                                  {ev.spotAreaLabel && (
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
                                      <MapPin size={10} strokeWidth={1.75} />
                                      {ev.spotAreaLabel}
                                    </span>
                                  )}
                                  {ev.visitor_number && (
                                    <span style={{ color: "var(--primary-color)", fontWeight: 700 }}>
                                      第 {ev.visitor_number} 番のしるし
                                    </span>
                                  )}
                                  {ev.companionNames && ev.companionNames.length > 0 && (
                                    <span style={{ color: "#6E5314", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                      <Users size={11} strokeWidth={1.75} />
                                      {ev.companionNames.join("、")} さんと同行
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {storyText && (
                              <div
                                style={{
                                  background: "#FAF6EE",
                                  borderLeft: "3px solid var(--accent-color)",
                                  borderRadius: "6px",
                                  padding: "8px 12px",
                                  fontSize: "0.78rem",
                                  color: "#5C4E43",
                                  lineHeight: 1.6,
                                  marginBottom: displayPhoto || displayMemo ? "10px" : 0,
                                  whiteSpace: "pre-line",
                                }}
                              >
                                {storyText}
                              </div>
                            )}

                            {(displayPhoto || displayMemo) && (
                              <div
                                style={{
                                  background: "#FFFDF9",
                                  border: "1px dashed var(--accent-color)",
                                  borderRadius: "10px",
                                  padding: "10px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "8px",
                                }}
                              >
                                {displayPhoto && (
                                  <img
                                    src={displayPhoto}
                                    alt={ev.spotName}
                                    onClick={() => setZoomPhotoUrl(displayPhoto)}
                                    style={{
                                      width: "100%",
                                      maxHeight: "190px",
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                      border: "1px solid #EBE5D9",
                                      cursor: "pointer",
                                    }}
                                  />
                                )}
                                {displayMemo && (
                                  <div
                                    style={{
                                      fontSize: "0.82rem",
                                      color: "var(--text-color)",
                                      fontStyle: "italic",
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    「 {displayMemo} 」
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p style={{ textAlign: "center", color: "#8A7E72", fontSize: "0.85rem" }}>
                      このルートの押印記録はまだありません。
                    </p>
                  )}

                  {/* 完走の踏破印がある場合は巻末に表示 */}
                  {completedInfo && (
                    <div
                      style={{
                        marginTop: "18px",
                        padding: "14px 16px",
                        borderRadius: "14px",
                        background: "rgba(201, 168, 76, 0.14)",
                        border: "1.5px solid var(--accent-color)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          color: "var(--primary-color)",
                          letterSpacing: "0.08em",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <CheckCircle2 size={13} strokeWidth={1.75} />
                        物語の結び — 授かった踏破印
                      </div>
                      <div
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 900,
                          color: "var(--text-color)",
                          fontFamily: "'Noto Serif JP', serif",
                          marginTop: "4px",
                        }}
                      >
                        {completedInfo.mainName}
                      </div>
                      {completedInfo.subName && (
                        <div
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: 800,
                            color: "var(--primary-color)",
                            marginTop: "4px",
                          }}
                        >
                          副印（自答の儀）: {completedInfo.subName}
                        </div>
                      )}
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setStoryScrollRouteId(null)}
                      className="btn-secondary"
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "0.85rem",
                        cursor: "pointer",
                      }}
                    >
                      閉じる
                    </button>
                    <Link
                      href={`/routes/${storyScrollRouteId}`}
                      onClick={() => setStoryScrollRouteId(null)}
                      className="btn-primary"
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "10px",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        textAlign: "center",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      このルートのページへ <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })(),
          document.body
        )}

      {/* 写真拡大ライトボックス */}
      {zoomPhotoUrl &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setZoomPhotoUrl(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(6px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
              padding: "20px",
              cursor: "zoom-out",
            }}
          >
            <img
              src={zoomPhotoUrl}
              alt="拡大写真"
              style={{
                maxWidth: "95%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            />
            <span
              style={{ color: "#FFF", marginTop: "16px", fontSize: "0.85rem", opacity: 0.7 }}
            >
              タップして閉じる
            </span>
          </div>,
          document.body
        )}
    </div>
  );
}
