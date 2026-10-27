"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import HeaderNav from "@/components/HeaderNav";
import LoadingOverlay from "@/components/LoadingOverlay";
import PremiumUpgradeModal, { UpgradeTriggerReason } from "@/components/PremiumUpgradeModal";
import { getCategoryStampUrl, getCategoryBgUrl } from "@/utils/stampHelper";
import { generateShuinCardDataUrl } from "@/utils/shuinCardGenerator";
import {
  useShuinBook,
  ShuinDiaryEvent,
  ShuinLifeFilter,
} from "@/hooks/useShuinBook";
import { useSubscription } from "@/hooks/useSubscription";
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
  Search,
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
    searchQuery,
    setSearchQuery,
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
    isFilterSheetOpen,
    setIsFilterSheetOpen,
    activeFilterCount,
    resetAllFilters,
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
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [upgradeReason, setUpgradeReason] = useState<UpgradeTriggerReason>("photo_limit");

  const {
    isPremium,
    usedPhotoCount,
    freePhotoLimit,
    remainingFreePhotos,
    canUploadPhotoForSpot,
    processingCheckout,
    startCheckout,
    refreshSubscription,
  } = useSubscription({ activeGroupId: selectedEvent?.group_id || null });

  const handlePhotoUploadChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedEvent || uploadingPhoto) return;
    if (!canUploadPhotoForSpot(selectedEvent.spot_id)) {
      e.target.value = "";
      setUpgradeReason("photo_limit");
      setShowUpgradeModal(true);
      return;
    }
    setUploadingPhoto(true);
    try {
      await updateEventPhoto(selectedEvent.id, selectedEvent.spot_id, file);
      await refreshSubscription();
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
    return <LoadingOverlay />;
  }

  return (
    <div className="container">
      <header
        style={{
          padding: "12px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="nav-logo">
          <img
            src="/shuin-logo-horizontal.png"
            alt="SHUIN まちのしるし"
            style={{ height: "30px", display: "block", objectFit: "contain" }}
          />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "680px", margin: "0 auto", paddingBottom: "100px" }}>
        {/* 1段目：戻るボタン統合タイトル ＆ 軽いビュー切替タブ */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "8px",
            minHeight: "44px",
            marginBottom: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Link
              href="/mypage"
              aria-label="マイページへ戻る"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                marginLeft: "-6px",
                borderRadius: "8px",
                color: "var(--text-color)",
                textDecoration: "none",
              }}
            >
              <ChevronLeft size={22} strokeWidth={2.2} />
            </Link>
            <h1
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              SHUIN帳
            </h1>
          </div>

          {/* 軽いビュー切替タブ（押印 / 旅のアルバム） */}
          {(diary.length > 0 || participatedRoutes.length > 0) && (
            <div
              role="tablist"
              aria-label="表示切り替え"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                borderBottom: "1px solid #E5DEC9",
              }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === "grid"}
                onClick={() => setViewMode("grid")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "8px 4px",
                  border: "none",
                  borderBottom:
                    viewMode === "grid"
                      ? "2px solid var(--primary-color)"
                      : "2px solid transparent",
                  marginBottom: "-1px",
                  background: "transparent",
                  color: viewMode === "grid" ? "var(--primary-color)" : "#8A7E72",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <Grid size={14} strokeWidth={1.9} />
                押印
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === "album"}
                onClick={() => setViewMode("album")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "8px 4px",
                  border: "none",
                  borderBottom:
                    viewMode === "album"
                      ? "2px solid var(--primary-color)"
                      : "2px solid transparent",
                  marginBottom: "-1px",
                  background: "transparent",
                  color: viewMode === "album" ? "var(--primary-color)" : "#8A7E72",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <BookOpen size={14} strokeWidth={1.9} />
                旅のアルバム
              </button>
            </div>
          )}
        </div>

        {diaryLoading ? (
          <p style={{ color: "#A39687", padding: "24px 0" }}>読み込み中...</p>
        ) : diary.length > 0 || participatedRoutes.length > 0 ? (
          <>
            {/* 2段目：1行・3列のスリム実績バー（高さ約44px・墨色ベース） */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                alignItems: "center",
                background: "rgba(255, 253, 249, 0.78)",
                borderTop: "1px solid #E5DEC9",
                borderBottom: "1px solid #E5DEC9",
                padding: "8px 4px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "5px",
                  borderRight: "1px solid #E5DEC9",
                  padding: "2px 4px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: "var(--text-color)",
                    fontFamily: "'Noto Serif JP', serif",
                    lineHeight: 1,
                  }}
                >
                  {filteredDiary.length}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#8A7E72",
                  }}
                >
                  押印
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "5px",
                  borderRight: "1px solid #E5DEC9",
                  padding: "2px 4px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: "var(--text-color)",
                    fontFamily: "'Noto Serif JP', serif",
                    lineHeight: 1,
                  }}
                >
                  {visitedCitiesCount}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#8A7E72",
                  }}
                >
                  訪れた街
                </span>
              </div>

              <button
                type="button"
                onClick={() => setShowParticipatedModal(true)}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "4px",
                  padding: "2px 4px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                title="参加・踏破したルートと踏破印を見る"
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    color: "var(--text-color)",
                    fontFamily: "'Noto Serif JP', serif",
                    lineHeight: 1,
                  }}
                >
                  {participatedRoutes.length || filteredCompletedRoutesCount}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: "var(--primary-color)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1px",
                  }}
                >
                  ルート ›
                </span>
              </button>
            </div>

            {/* 旅のアルバムタブ選択時のみ：控えめな1行の写真記録枠案内 */}
            {viewMode === "album" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                  padding: "7px 12px",
                  marginBottom: "12px",
                  borderRadius: "10px",
                  background: "rgba(255, 253, 249, 0.9)",
                  border: isPremium ? "1px solid var(--accent-color)" : "1px solid #EBE5D9",
                  fontSize: "0.74rem",
                  color: "var(--text-color)",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 700 }}>
                  <Camera size={13} color="var(--primary-color)" />
                  {isPremium
                    ? `写真記録：無制限（現在 ${usedPhotoCount}枚）`
                    : `写真記録枠：${usedPhotoCount} / ${freePhotoLimit} 枚（残り ${remainingFreePhotos}枚）`}
                </span>
                {!isPremium && (
                  <button
                    type="button"
                    onClick={() => {
                      setUpgradeReason("general");
                      setShowUpgradeModal(true);
                    }}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--primary-color)",
                      padding: 0,
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    無制限にする ›
                  </button>
                )}
              </div>
            )}

            {/* 条件適用中のみ表示する1行ステータスバー */}
            {activeFilterCount > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 12px",
                  marginBottom: "12px",
                  borderRadius: "10px",
                  background: "#FAF4E6",
                  border: "1px solid var(--accent-color)",
                  fontSize: "0.76rem",
                  color: "var(--text-color)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsFilterSheetOpen(true)}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    color: "var(--text-color)",
                    fontSize: "0.76rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textAlign: "left",
                  }}
                >
                  <Search size={13} color="var(--primary-color)" />
                  <span>
                    {filteredDiary.length}件のSHUIN · 条件{activeFilterCount}件
                  </span>
                </button>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "2px 6px",
                    color: "var(--primary-color)",
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  解除
                </button>
              </div>
            )}

            {/* 📜 月間・旅路の紀行サマリーバナー（条件選択時のみ） */}
            {(selectedMonth !== "すべて" ||
              selectedCompanion !== "すべて" ||
              selectedCity !== "すべて" ||
              selectedRouteId !== "すべて") &&
              currentFilterSummary.totalStamps > 0 && (
                <section
                  className="glass-card"
                  style={{
                    background: "linear-gradient(135deg, #FFFDF9 0%, #FAF4E6 100%)",
                    border: "1px solid var(--accent-color)",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <div style={{ flex: "1 1 220px" }}>
                      <div
                        style={{
                          fontSize: "0.84rem",
                          fontWeight: 800,
                          color: "var(--text-color)",
                          lineHeight: 1.4,
                        }}
                      >
                        {selectedCompanion !== "すべて"
                          ? `${selectedCompanion}さんとの旅路（${currentFilterSummary.totalStamps}個のしるし）`
                          : selectedMonth !== "すべて"
                            ? `${selectedMonth}の紀行録（${Math.max(1, currentFilterSummary.uniqueCities.length)}街・${currentFilterSummary.totalStamps}個のしるし）`
                            : selectedRouteId !== "すべて"
                              ? `「${currentFilterSummary.uniqueRoutes[0]?.title || "ルート"}」の紀行録`
                              : `${selectedCity}の紀行録（${currentFilterSummary.totalStamps}個のしるし）`}
                      </div>
                      {currentFilterSummary.uniqueRoutes.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                            marginTop: "6px",
                          }}
                        >
                          {currentFilterSummary.uniqueRoutes.map((ur) => (
                            <button
                              key={ur.id}
                              type="button"
                              onClick={() => setStoryScrollRouteId(ur.id)}
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 800,
                                padding: "3px 8px",
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
                              <ScrollText size={11} strokeWidth={1.75} color="var(--primary-color)" />
                              {ur.title}（絵巻 ▸）
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )}

            {/* メイン：来訪印（SHUIN）一覧（最新順） */}
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
                  条件に合うSHUINがありません。
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                  <button
                    type="button"
                    onClick={() => setIsFilterSheetOpen(true)}
                    className="btn-secondary"
                    style={{ padding: "8px 16px", fontSize: "0.8rem" }}
                  >
                    条件を見直す
                  </button>
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="btn-primary"
                    style={{ padding: "8px 16px", fontSize: "0.8rem" }}
                  >
                    すべて解除
                  </button>
                </div>
              </div>
            ) : viewMode === "grid" ? (
              /* 3列・帳面グリッドビュー（最新順） */
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "10px",
                }}
              >
                {filteredDiary.map((d) => {
                  const stampImg = getCategoryStampUrl(d.category);
                  const dt = new Date(d.created_at);
                  const dateFormatted = `${dt.getFullYear()}.${String(dt.getMonth() + 1).padStart(2, "0")}.${String(dt.getDate()).padStart(2, "0")}`;
                  return (
                    <button
                      type="button"
                      key={d.id}
                      onClick={() => openEventDetail(d, false)}
                      style={{
                        background: "#FFFDF9",
                        border: "1px solid #EBE5D9",
                        borderRadius: "12px",
                        padding: "12px 6px 10px 6px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "transform 0.15s ease",
                        position: "relative",
                        width: "100%",
                        minWidth: 0,
                      }}
                    >
                      {/* 連れ立ち（同行）インジケーター */}
                      {d.group_id && (
                        <div
                          style={{
                            position: "absolute",
                            top: "6px",
                            left: "6px",
                            background: "rgba(92, 78, 67, 0.08)",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#5C4E43",
                            zIndex: 5,
                          }}
                          title="連れ立ちで巡った記憶"
                        >
                          <Users size={10} />
                        </div>
                      )}

                      {/* 写真ありのインジケーター */}
                      {d.hasPhoto && (
                        <div
                          style={{
                            position: "absolute",
                            top: "6px",
                            right: "6px",
                            background: "rgba(199, 68, 46, 0.08)",
                            borderRadius: "50%",
                            width: "18px",
                            height: "18px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--primary-color)",
                            zIndex: 5,
                          }}
                          title="思い出写真あり"
                        >
                          <Camera size={10} />
                        </div>
                      )}

                      {/* 来訪印（余白込みで美しく収める） */}
                      <div
                        style={{
                          width: "68px",
                          height: "68px",
                          borderRadius: "50%",
                          background: "#FFFDF9",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          overflow: "hidden",
                          marginBottom: "6px",
                        }}
                      >
                        <img
                          src={stampImg}
                          alt="押印"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "4px",
                          }}
                        />
                      </div>

                      <div style={{ width: "100%", minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "var(--text-color)",
                            margin: "0 auto 2px auto",
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            lineHeight: 1.3,
                          }}
                        >
                          {d.spotName || "スポット"}
                        </div>

                        <div
                          style={{
                            fontSize: "0.64rem",
                            color: "#8A7E72",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "3px",
                            lineHeight: 1.2,
                          }}
                        >
                          <span>{dateFormatted}</span>
                          {d.visitOrder >= 2 && (
                            <span
                              style={{
                                fontSize: "0.58rem",
                                color: "var(--primary-color)",
                                fontWeight: 800,
                              }}
                            >
                              · {d.visitOrder}回目
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
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

            {/* 巻末：ルートの踏破印（来訪印一覧の下部に静かに配置） */}
            {filteredCompletedRoutes.length > 0 && (
              <section style={{ marginTop: "32px" }}>
                <h2
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 800,
                    color: "#5C4E43",
                    margin: "0 0 10px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <CheckCircle2 size={16} strokeWidth={1.75} color="var(--accent-color)" />
                  授かったルートの踏破印
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: "12px",
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
                          padding: "14px 16px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "4px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.68rem",
                              fontWeight: 800,
                              color: "var(--primary-color)",
                              letterSpacing: "0.5px",
                            }}
                          >
                            ルートの踏破印
                          </span>
                          <span style={{ fontSize: "0.68rem", color: "#A39687" }}>
                            {new Date(cr.completed_at).toLocaleDateString("ja-JP")}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: "1.02rem",
                            fontWeight: 900,
                            color: "#5C4E43",
                            fontFamily: "'Noto Serif JP', serif",
                            marginBottom: cr.subName ? "6px" : 0,
                          }}
                        >
                          {cr.mainName}
                        </div>
                        {cr.subName && (
                          <div
                            style={{
                              borderTop: "1px dashed #EBE5D9",
                              paddingTop: "6px",
                              marginTop: "4px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "0.84rem",
                                fontWeight: 800,
                                color: "var(--primary-color)",
                              }}
                            >
                              {cr.subName}
                            </div>
                            {cr.subDescription && (
                              <div
                                style={{
                                  fontSize: "0.72rem",
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

      {/* 右下フローティング虫眼鏡ボタン（SHUINを検索・絞り込み） */}
      {(diary.length > 0 || participatedRoutes.length > 0) && (
        <button
          type="button"
          onClick={() => setIsFilterSheetOpen(true)}
          aria-label="SHUINを検索・絞り込み"
          style={{
            position: "fixed",
            right: "18px",
            bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "var(--primary-color)",
            color: "#FFFDF9",
            border: "2px solid #FFFDF9",
            boxShadow: "0 6px 18px rgba(44, 37, 32, 0.24)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 900,
            transition: "transform 0.15s ease",
          }}
        >
          <Search size={23} strokeWidth={2.2} />
          {activeFilterCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-3px",
                right: "-3px",
                minWidth: "22px",
                height: "22px",
                padding: "0 5px",
                borderRadius: "999px",
                background: "#2C2520",
                color: "#FFFDF9",
                border: "2px solid #FFFDF9",
                fontSize: "0.7rem",
                fontWeight: 900,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              {activeFilterCount}
            </span>
          )}
        </button>
      )}

      {/* 検索・絞り込みボトムシートモーダル */}
      {isFilterSheetOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            onClick={() => setIsFilterSheetOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(38, 30, 24, 0.65)",
              backdropFilter: "blur(3px)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#FFFDF9",
                borderTop: "2px solid var(--accent-color)",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                width: "100%",
                maxWidth: "680px",
                maxHeight: "88vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 -10px 30px rgba(38, 30, 24, 0.2)",
                color: "var(--text-color)",
              }}
            >
              {/* シート上部ハンドル＆ヘッダー */}
              <div
                style={{
                  padding: "12px 20px 10px 20px",
                  borderBottom: "1px solid #EBE5D9",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "#D5CBB8",
                    margin: "0 auto 10px auto",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 900,
                      margin: 0,
                      color: "var(--text-color)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Search size={17} color="var(--primary-color)" />
                    検索・絞り込み
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsFilterSheetOpen(false)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#8A7E72",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      cursor: "pointer",
                      padding: "6px 8px",
                    }}
                  >
                    閉じる
                  </button>
                </div>
              </div>

              {/* シート内スクロール領域 */}
              <div
                style={{
                  padding: "16px 20px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  flex: 1,
                }}
              >
                {/* キーワード検索 */}
                <div>
                  <label
                    htmlFor="shuin-search-input"
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "#8A7E72",
                      marginBottom: "6px",
                    }}
                  >
                    キーワード
                  </label>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Search
                      size={15}
                      color="#8A7E72"
                      style={{ position: "absolute", left: "12px", pointerEvents: "none" }}
                    />
                    <input
                      id="shuin-search-input"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="スポット名・街・あとがきの言葉で検索"
                      style={{
                        width: "100%",
                        padding: "10px 34px 10px 34px",
                        borderRadius: "10px",
                        border: "1px solid #D5CBB8",
                        background: "#FAF6EE",
                        color: "var(--text-color)",
                        fontSize: "0.85rem",
                        outline: "none",
                      }}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        aria-label="検索語をクリア"
                        style={{
                          position: "absolute",
                          right: "8px",
                          background: "transparent",
                          border: "none",
                          color: "#8A7E72",
                          cursor: "pointer",
                          padding: "4px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>
                </div>

                {/* 時期 */}
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "#8A7E72",
                      marginBottom: "6px",
                    }}
                  >
                    時期
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {months.map((m) => {
                      const active = selectedMonth === m;
                      return (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setSelectedMonth(m)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "8px",
                            border: "1px solid",
                            borderColor: active ? "#2C2520" : "#E5DEC9",
                            background: active ? "#2C2520" : "#F2ECE1",
                            color: active ? "#FFFDF9" : "#5C4E43",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {m}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 記憶 */}
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "#8A7E72",
                      marginBottom: "6px",
                    }}
                  >
                    記憶
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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
                            padding: "6px 12px",
                            borderRadius: "8px",
                            border: "1px solid",
                            borderColor: active ? "#2C2520" : "#E5DEC9",
                            background: active ? "#2C2520" : "#F2ECE1",
                            color: active ? "#FFFDF9" : "#5C4E43",
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            cursor: "pointer",
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
                </div>

                {/* 訪れた街 */}
                {visitedCities.length > 2 && (
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "#8A7E72",
                        marginBottom: "6px",
                      }}
                    >
                      訪れた街
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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
                              padding: "6px 12px",
                              borderRadius: "8px",
                              border: "1px solid",
                              borderColor: active ? "#2C2520" : "#E5DEC9",
                              background: active ? "#2C2520" : "#F2ECE1",
                              color: active ? "#FFFDF9" : "#5C4E43",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            {city !== "すべて" && <MapPin size={12} strokeWidth={1.75} />}
                            {city}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 一緒に歩いた人 */}
                {companions.length > 0 && (
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "#8A7E72",
                        marginBottom: "6px",
                      }}
                    >
                      一緒に歩いた人
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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
                              padding: "6px 12px",
                              borderRadius: "8px",
                              border: "1px solid",
                              borderColor: active ? "#2C2520" : "#E5DEC9",
                              background: active ? "#2C2520" : "#F2ECE1",
                              color: active ? "#FFFDF9" : "#5C4E43",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            {comp === "すべて" ? "すべて" : `${comp} さん`}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 物語ルート */}
                {diaryRoutes.length > 0 && (
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "#8A7E72",
                        marginBottom: "6px",
                      }}
                    >
                      物語ルート
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      <button
                        type="button"
                        onClick={() => setSelectedRouteId("すべて")}
                        style={{
                          padding: "6px 12px",
                          borderRadius: "8px",
                          border: "1px solid",
                          borderColor: selectedRouteId === "すべて" ? "#2C2520" : "#E5DEC9",
                          background: selectedRouteId === "すべて" ? "#2C2520" : "#F2ECE1",
                          color: selectedRouteId === "すべて" ? "#FFFDF9" : "#5C4E43",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        すべて
                      </button>
                      {diaryRoutes.map((rt) => {
                        const active = selectedRouteId === rt.id;
                        return (
                          <div
                            key={rt.id}
                            style={{ display: "inline-flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}
                          >
                            <button
                              type="button"
                              onClick={() => setSelectedRouteId(rt.id)}
                              style={{
                                padding: "6px 12px",
                                borderRadius: "8px",
                                border: "1px solid",
                                borderColor: active ? "#2C2520" : "#E5DEC9",
                                background: active ? "#2C2520" : "#F2ECE1",
                                color: active ? "#FFFDF9" : "#5C4E43",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                cursor: "pointer",
                              }}
                            >
                              {rt.title} ({rt.count})
                            </button>
                            {rt.count > 0 && (
                              <button
                                type="button"
                                onClick={() => {
                                  setIsFilterSheetOpen(false);
                                  setStoryScrollRouteId(rt.id);
                                }}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px",
                                  padding: "6px 10px",
                                  borderRadius: "8px",
                                  border: "1px solid var(--accent-color)",
                                  background: "#FFFDF9",
                                  color: "#6E5314",
                                  fontSize: "0.72rem",
                                  fontWeight: 800,
                                  cursor: "pointer",
                                }}
                              >
                                <ScrollText size={11} strokeWidth={1.75} />
                                絵巻
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* シート下部固定アクションバー */}
              <div
                style={{
                  padding: "12px 20px calc(14px + env(safe-area-inset-bottom, 0px)) 20px",
                  borderTop: "1px solid #EBE5D9",
                  background: "#FFFDF9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="btn-secondary"
                  style={{
                    padding: "10px 16px",
                    fontSize: "0.82rem",
                    borderRadius: "10px",
                  }}
                >
                  リセット
                </button>
                <button
                  type="button"
                  onClick={() => setIsFilterSheetOpen(false)}
                  className="btn-primary"
                  style={{
                    flex: 1,
                    padding: "11px 18px",
                    fontSize: "0.88rem",
                    borderRadius: "10px",
                  }}
                >
                  {filteredDiary.length}件のSHUINを表示
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

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
                巡ったルートと踏破印
              </h3>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#8A7E72",
                  margin: "0 0 16px 0",
                  lineHeight: 1.5,
                }}
              >
                授かった踏破印と、参加・押印したルートの記録です。
              </p>

              {filteredCompletedRoutes.length > 0 && (
                <div style={{ marginBottom: "18px" }}>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "#5C4E43",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <CheckCircle2 size={15} color="var(--accent-color)" />
                    ルートの踏破印 ({filteredCompletedRoutes.length})
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {filteredCompletedRoutes.map((cr) => (
                      <Link
                        href={`/routes/${cr.route_id}`}
                        key={cr.id}
                        onClick={() => setShowParticipatedModal(false)}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <div
                          style={{
                            background: "#FFFDF9",
                            border: "1.5px solid var(--accent-color)",
                            borderRadius: "12px",
                            padding: "12px 14px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "2px",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.66rem",
                                fontWeight: 800,
                                color: "var(--primary-color)",
                              }}
                            >
                              踏破印
                            </span>
                            <span style={{ fontSize: "0.68rem", color: "#A39687" }}>
                              {new Date(cr.completed_at).toLocaleDateString("ja-JP")}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: "0.98rem",
                              fontWeight: 900,
                              color: "#5C4E43",
                              fontFamily: "'Noto Serif JP', serif",
                            }}
                          >
                            {cr.mainName}
                          </div>
                          {cr.subName && (
                            <div
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: 800,
                                color: "var(--primary-color)",
                                marginTop: "4px",
                              }}
                            >
                              {cr.subName}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#5C4E43",
                  marginBottom: "8px",
                }}
              >
                参加したルート一覧 ({participatedRoutes.length})
              </div>

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

      <PremiumUpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={() => startCheckout("/mypage/diary")}
        isProcessing={processingCheckout}
        reason={upgradeReason}
        usedPhotoCount={usedPhotoCount}
      />
    </div>
  );
}
