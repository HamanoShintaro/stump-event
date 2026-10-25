"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";
import HeaderNav from "@/components/HeaderNav";
import { getCategoryStampUrl, getCategoryBgUrl } from "@/utils/stampHelper";
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
} from "lucide-react";

const LIFE_FILTERS: { value: ShuinLifeFilter; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "tsuredachi", label: "👥 連れ立ちの記憶" },
  { value: "with_memory", label: "📷 写真・言葉あり" },
  { value: "revisit", label: "🔄 再訪した場所" },
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
                background: "#FAF6EE",
                border: "1px solid #EBE5D9",
                borderRadius: "24px",
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
                  borderRadius: "20px",
                  border: "none",
                  background: viewMode === "grid" ? "var(--primary-color)" : "transparent",
                  color: viewMode === "grid" ? "#fff" : "#5C4E43",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Grid size={14} />
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
                  borderRadius: "20px",
                  border: "none",
                  background: viewMode === "album" ? "var(--primary-color)" : "transparent",
                  color: viewMode === "album" ? "#fff" : "#5C4E43",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <BookOpen size={14} />
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
                borderRadius: "16px",
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
                  gap: "8px",
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
                {months.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelectedMonth(m)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "18px",
                      border: "1px solid",
                      borderColor: selectedMonth === m ? "var(--primary-color)" : "#EBE5D9",
                      background: selectedMonth === m ? "var(--primary-color)" : "#FAF6EE",
                      color: selectedMonth === m ? "#fff" : "#5C4E43",
                      fontSize: "0.78rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "all 0.2s",
                    }}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* 思い出フィルター（連れ立ち・写真と言葉・再訪） */}
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
                        padding: "5px 12px",
                        borderRadius: "16px",
                        border: "1px solid",
                        borderColor: active ? "var(--accent-color)" : "#EBE5D9",
                        background: active ? "rgba(201, 168, 76, 0.16)" : "#FAF6EE",
                        color: active ? "#6E5314" : "#5C4E43",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        transition: "all 0.2s",
                      }}
                    >
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
                    gap: "8px",
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
                          padding: "4px 11px",
                          borderRadius: "14px",
                          border: "1px solid",
                          borderColor: active ? "var(--primary-color)" : "#EBE5D9",
                          background: active ? "rgba(199, 68, 46, 0.1)" : "#FAF6EE",
                          color: active ? "var(--primary-color)" : "#5C4E43",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {city === "すべて" ? "すべて" : `📍 ${city}`}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 1. ルートの踏破印（メイン＋サブ） */}
            {filteredCompletedRoutes.length > 0 && lifeFilter === "all" && selectedCity === "すべて" && (
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
                  <span style={{ color: "var(--primary-color)" }}>💮</span> ルートの踏破印
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
                <span style={{ color: "var(--primary-color)" }}>
                  {viewMode === "album" ? "📖" : "🔖"}
                </span>{" "}
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
                            }}
                          >
                            📍 {d.spotAreaLabel}
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
                zIndex: 1000,
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
                          display: "inline-block",
                          background: "rgba(201, 168, 76, 0.15)",
                          border: "1px solid var(--accent-color)",
                          borderRadius: "6px",
                          padding: "4px 10px",
                          fontSize: "0.74rem",
                          color: "#6E5314",
                          fontWeight: 800,
                        }}
                      >
                        🔄 {selectedEvent.visitOrder}回目の来訪
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
                      }}
                    >
                      📍 {selectedEvent.spotAreaLabel}
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
                      <span style={{ fontSize: "1rem" }}>👥</span>
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
                          <span>📷</span> 旅の思い出
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
                      <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#5C4E43", marginBottom: "8px" }}>
                        👥 連れ立ちメンバーの共有された印 ({groupInfo.companionMemories.length}名)
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
                              <div style={{ fontSize: "0.82rem", color: "#5C4E43" }}>💬 {cm.memo}</div>
                            ) : !cm.photoUrl ? (
                              <div style={{ fontSize: "0.74rem", color: "#8A7E72" }}>💮 一緒にこのスポットで押印しました</div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ✍️ 思い出の写真・あとがき（一言メモ）編集セクション */}
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

                  <button
                    onClick={() => {
                      setSelectedEvent(null);
                      setIsEditingMemo(false);
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
        })()}

      {/* 参加したルート一覧モーダル */}
      {showParticipatedModal && (
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
            zIndex: 1100,
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
                            borderRadius: "20px",
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

                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2px" }}>
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
        </div>
      )}

      {/* 写真拡大ライトボックス */}
      {zoomPhotoUrl && (
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
            zIndex: 2000,
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
        </div>
      )}
    </div>
  );
}
