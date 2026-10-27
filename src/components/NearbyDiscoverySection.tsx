"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Star, X } from "lucide-react";
import styles from "./NearbyDiscoverySection.module.css";
import {
  useNearbyDiscovery,
  DiscoveryTabMode,
} from "@/hooks/useNearbyDiscovery";
import {
  useDailyWalkOracle,
  MOOD_FILTER_OPTIONS,
  MoodFilterKey,
  TimeSceneKey,
} from "@/hooks/useDailyWalkOracle";
import type { RouteStat } from "@/utils/routeStats";
import {
  IconCompass,
  IconMapPin,
  IconFootprints,
  IconClock,
  IconSparkles,
  IconOmikuji,
  IconScroll,
  IconRefresh,
  IconLeaf,
  IconTeacup,
  IconTorii,
  IconTown,
  IconSunrise,
  IconSun,
  IconSunset,
  IconMoon,
  IconChevronRight,
} from "@/components/icons/ShuinIcons";

interface NearbyDiscoverySectionProps {
  routes: any[];
  statsMap?: Record<string, RouteStat>;
}

function renderTimeSceneIcon(key: TimeSceneKey) {
  switch (key) {
    case "morning":
      return <IconSunrise size={15} color="var(--primary-color)" />;
    case "afternoon":
      return <IconSun size={15} color="var(--primary-color)" />;
    case "evening":
      return <IconSunset size={15} color="var(--primary-color)" />;
    case "night":
    default:
      return <IconMoon size={15} color="var(--primary-color)" />;
  }
}

function renderMoodIcon(mood: MoodFilterKey) {
  switch (mood) {
    case "shrine_history":
      return <IconTorii size={14} />;
    case "cafe_gourmet":
      return <IconTeacup size={14} />;
    case "nature_park":
      return <IconLeaf size={14} />;
    case "culture_art":
      return <IconTown size={14} />;
    case "all":
    default:
      return null;
  }
}

export default function NearbyDiscoverySection({
  routes,
  statsMap = {},
}: NearbyDiscoverySectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    timeScene,
    moodFilter,
    setMoodFilter,
    moodFilteredRoutes,
    oracleResult,
    isOracleOpen,
    oraclePhase,
    drawWalkOracle,
    openSavedWalkOracle,
    redrawWalkOracle,
    closeOracleModal,
  } = useDailyWalkOracle(routes);

  const {
    userLocation,
    locating,
    locationError,
    requestNearbyLocation,
    activeTab,
    setActiveTab,
    displayedRoutes,
  } = useNearbyDiscovery(moodFilteredRoutes);

  if (!routes || routes.length === 0) return null;

  const handleTabClick = (tab: DiscoveryTabMode) => {
    if (tab === "nearby" && !userLocation) {
      requestNearbyLocation();
    } else {
      setActiveTab(tab);
    }
  };

  const oracleModalNode =
    mounted && isOracleOpen && oracleResult
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="walk-oracle-title"
            onClick={closeOracleModal}
            className={styles.oracleBackdrop}
          >
            {oraclePhase === "drawing" ? (
              /* Phase 1: みくじ筒を振り、御札を手繰り寄せる所作（約1秒の溜め） */
              <div
                onClick={(e) => e.stopPropagation()}
                className={styles.ritualDrawingCard}
                 aria-live="polite"
              >
                <div className={styles.cornerOrnamentTL} />
                <div className={styles.cornerOrnamentTR} />
                <div className={styles.cornerOrnamentBL} />
                <div className={styles.cornerOrnamentBR} />

                <div className={styles.ritualStageHalo}>
                  <div className={styles.ritualPulseRing} />
                  <div className={styles.ritualCylinderUnit}>
                    <div className={styles.ritualStickSlip}>
                      <span className={styles.ritualStickText}>御籤</span>
                    </div>
                    <div className={styles.ritualCylinderBox}>
                      <span className={styles.ritualCylinderPlaque}>
                        街歩縁結
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  id="walk-oracle-title"
                  className={styles.ritualStatusTitle}
                >
                  街の縁を手繰り寄せています…
                </div>
                <p className={styles.ritualStatusSub}>
                  今日あなたと響き合う物語を占っています
                </p>
              </div>
            ) : (
              /* Phase 2 & 3: 和紙（御札）が縦に開帳し、朱印が刻まれる結果表示 */
              <div
                onClick={(e) => e.stopPropagation()}
                className={styles.oraclePaperModal}
              >
                <button
                  type="button"
                  onClick={closeOracleModal}
                  aria-label="閉じる"
                  className={styles.closeModalBtn}
                >
                  <X size={18} />
                </button>

                <div className={styles.oraclePaperInnerFrame}>
                  <div className={styles.cornerOrnamentTL} />
                  <div className={styles.cornerOrnamentTR} />
                  <div className={styles.cornerOrnamentBL} />
                  <div className={styles.cornerOrnamentBR} />

                  {/* おみくじ朱印ヘッダー（落款印アニメーション＋縁結び運勢） */}
                  <div className={styles.oracleHeaderSection}>
                    <div className={styles.oracleEyebrowPill}>
                      <IconOmikuji size={13} color="var(--primary-color)" />
                      <span>本日の街歩き縁結び</span>
                    </div>

                    <div className={styles.fortuneStampRow}>
                      <div
                        className={styles.vermilionSealStamp}
                        aria-hidden="true"
                      >
                        <span className={styles.vermilionSealTop}>SHUIN</span>
                        <span className={styles.vermilionSealMainChar}>
                          {oracleResult.sealChar}
                        </span>
                      </div>

                      <div className={styles.fortuneTitleBlock}>
                        <div className={styles.fortuneReadingText}>
                          {oracleResult.fortuneReading}
                        </div>
                        <div
                          id="walk-oracle-title"
                          className={styles.fortuneMainTitle}
                        >
                          【 {oracleResult.fortuneLabel} 】
                        </div>
                      </div>
                    </div>

                    <p className={styles.fortuneSubtitleText}>
                      {oracleResult.fortuneSubtitle}
                    </p>
                  </div>

                  {/* Stagger 1: 選ばれたルートカード */}
                  <div
                    className={styles.staggerBlock1}
                    style={{
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "1.5px solid var(--accent-color)",
                      background: "rgba(255,255,255,0.78)",
                      marginBottom: "14px",
                    }}
                  >
                    <div style={{ position: "relative", height: "144px" }}>
                      <img
                        src={
                          oracleResult.route.thumbnail_url ||
                          "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                        }
                        alt={oracleResult.route.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "8px",
                          left: "8px",
                          display: "flex",
                          gap: "6px",
                        }}
                      >
                        {oracleResult.route.prefecture && (
                          <span
                            style={{
                              background: "var(--bg-color)",
                              color: "var(--text-color)",
                              fontSize: "0.7rem",
                              fontWeight: 800,
                              padding: "3px 8px",
                              borderRadius: "6px",
                            }}
                          >
                            {oracleResult.route.prefecture}
                          </span>
                        )}
                        {oracleResult.route.category && (
                          <span
                            style={{
                              background: "var(--accent-color)",
                              color: "var(--text-color)",
                              fontSize: "0.7rem",
                              fontWeight: 800,
                              padding: "3px 8px",
                              borderRadius: "6px",
                            }}
                          >
                            {oracleResult.route.category}
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ padding: "12px 14px" }}>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: 800,
                          color: "var(--text-color)",
                          margin: "0 0 6px 0",
                          lineHeight: 1.4,
                        }}
                      >
                        {oracleResult.route.title}
                      </h3>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          fontWeight: 700,
                          color: "var(--primary-color)",
                          marginBottom: "6px",
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <IconMapPin size={13} color="var(--primary-color)" />
                          全{oracleResult.route.walkMetrics.spotCount}箇所
                        </span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <IconFootprints
                            size={13}
                            color="var(--primary-color)"
                          />
                          約{oracleResult.route.walkMetrics.distanceKm}km
                        </span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <IconClock size={13} color="var(--primary-color)" />
                          約{oracleResult.route.walkMetrics.estimatedMinutes}分
                        </span>
                      </div>
                      {oracleResult.route.description && (
                        <p
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-color)",
                            opacity: 0.8,
                            margin: 0,
                            lineHeight: 1.5,
                          }}
                        >
                          {oracleResult.route.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Stagger 2: 今日の注目スポット ＆ 散策の心得 */}
                  <div
                    className={styles.staggerBlock2}
                    style={{
                      borderRadius: "14px",
                      padding: "12px 14px",
                      background: "rgba(201, 168, 76, 0.12)",
                      border: "1px solid rgba(201, 168, 76, 0.38)",
                      marginBottom: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "var(--font-size-small)",
                          fontWeight: 800,
                          color: "var(--primary-color)",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          marginBottom: "2px",
                        }}
                      >
                        <IconSparkles size={13} color="var(--primary-color)" />
                        <span>今日の注目スポット</span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.86rem",
                          fontWeight: 800,
                          color: "var(--text-color)",
                        }}
                      >
                        {oracleResult.luckySpot.name}
                      </div>
                      {oracleResult.luckySpot.address && (
                        <div
                          style={{
                            fontSize: "var(--font-size-small)",
                            color: "var(--text-color)",
                            opacity: 0.72,
                          }}
                        >
                          {oracleResult.luckySpot.address}
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        borderTop: "1px dashed rgba(201, 168, 76, 0.45)",
                        paddingTop: "8px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "var(--font-size-small)",
                          fontWeight: 800,
                          color: "var(--text-color)",
                          marginBottom: "3px",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <IconScroll size={13} color="var(--primary-color)" />
                        <span>本日の散策の心得</span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-color)",
                          lineHeight: 1.55,
                        }}
                      >
                        {oracleResult.walkTip}
                      </div>
                    </div>
                  </div>

                  {/* Stagger 3: アクションボタン */}
                  <div
                    className={styles.staggerBlock3}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Link
                      href={`/routes/${oracleResult.route.id}`}
                      onClick={closeOracleModal}
                      className="btn-primary"
                      style={{
                        textDecoration: "none",
                        textAlign: "center",
                        padding: "12px 16px",
                        borderRadius: "999px",
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <span>このルートを見る</span>
                      <IconChevronRight size={16} color="currentColor" />
                    </Link>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        type="button"
                        onClick={redrawWalkOracle}
                        className="btn-secondary"
                        style={{
                          flex: 1,
                          padding: "9px 12px",
                          borderRadius: "999px",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                        }}
                      >
                        <IconRefresh size={14} color="var(--primary-color)" />
                        <span>もういちど縁を結ぶ（引き直す）</span>
                      </button>
                      <button
                        type="button"
                        onClick={closeOracleModal}
                        className="btn-secondary"
                        style={{
                          padding: "9px 16px",
                          borderRadius: "999px",
                          fontSize: "0.78rem",
                          fontWeight: 700,
                        }}
                      >
                        閉じる
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>,
          document.body
        )
      : null;

  return (
    <section
      className="container"
      style={{
        padding: "8px 20px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        className="glass-card"
        style={{
          padding: "22px 20px",
          border: "1.5px solid var(--accent-color)",
          borderRadius: "20px",
          background:
            "linear-gradient(145deg, rgba(255,253,248,0.96) 0%, rgba(246,239,224,0.92) 100%)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        {/* ============================================================
            街歩きみくじ・縁結びの御札匣（トップページ専用意匠）
           ============================================================ */}
        <div className={styles.omikujiSanctuaryCard}>
          <div className={styles.omikujiSanctuaryInner}>
            {/* 四隅の組子・角飾り罫 */}
            <div className={styles.cornerOrnamentTL} />
            <div className={styles.cornerOrnamentTR} />
            <div className={styles.cornerOrnamentBL} />
            <div className={styles.cornerOrnamentBR} />

            {/* 左端の縦書き添え札「街歩きみくじ」 */}
            <div className={styles.verticalTitleStrip} aria-hidden="true">
              <span className={styles.verticalTitleSeal}>縁</span>
              <span className={styles.verticalTitleText}>街歩きみくじ</span>
            </div>

            {/* 背景の透かし落款 */}
            <div className={styles.watermarkSeal} aria-hidden="true">
              結
            </div>

            {/* メイン情報＋みくじ筒アクション */}
            <div className={styles.sanctuaryBody}>
              <div className={styles.sceneIntroColumn}>
                <div className={styles.sceneEyebrowRow}>
                  <span className={styles.sceneTimePill}>
                    {renderTimeSceneIcon(timeScene.key)}
                    <span>{timeScene.title}</span>
                  </span>
                  <span className={styles.sceneSubtitleTag}>
                    一振りで出会う、今日の物語
                  </span>
                </div>
                <h3 className={styles.sceneHeadline}>
                  どこを歩こうか迷ったら、今日のご縁を占ってみませんか
                </h3>
                <p className={styles.sceneLead}>{timeScene.subtitle}</p>
              </div>

              {/* みくじ筒モチーフ ＆ 街歩きみくじを引くボタン */}
              <div className={styles.drawActionColumn}>
                <div
                  className={styles.miniCylinderWrap}
                  onClick={
                    oracleResult ? redrawWalkOracle : drawWalkOracle
                  }
                  role="presentation"
                  title="みくじ筒を振って今日の縁を結ぶ"
                >
                  <div className={styles.miniStickPeek} />
                  <div className={styles.miniCylinderBody}>
                    <span className={styles.miniCylinderLabel}>御籤</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={drawWalkOracle}
                  className={`btn-primary ${styles.drawPrimaryBtn}`}
                >
                  <IconOmikuji size={16} color="currentColor" />
                  <span>
                    {oracleResult
                      ? "みくじ筒を振って占う"
                      : "今日の街歩きみくじを引く"}
                  </span>
                </button>
              </div>
            </div>

            {/* 今日すでにおみくじを引いている場合：トップページ上に「本日の結び（控え札）」を表示 */}
            {oracleResult && (
              <div className={styles.savedSlipWrapper}>
                <div className={styles.savedSlipCard}>
                  <div className={styles.savedSlipStamp} aria-hidden="true">
                    <span className={styles.savedSlipStampChar}>
                      {oracleResult.sealChar}
                    </span>
                  </div>
                  <div className={styles.savedSlipInfo}>
                    <div className={styles.savedSlipMetaRow}>
                      <span className={styles.savedSlipBadge}>
                        本日の結び：【{oracleResult.fortuneLabel}】
                      </span>
                      <span className={styles.savedSlipSpotHint}>
                        ・ 注目：{oracleResult.luckySpot.name}
                      </span>
                    </div>
                    <div className={styles.savedSlipRouteTitle}>
                      {oracleResult.route.title}
                    </div>
                  </div>
                </div>

                <div className={styles.savedSlipActions}>
                  <button
                    type="button"
                    onClick={openSavedWalkOracle}
                    className={`btn-secondary ${styles.savedSlipOpenBtn}`}
                  >
                    <IconScroll size={14} color="var(--primary-color)" />
                    <span>本日の御札をひらく</span>
                  </button>
                  <button
                    type="button"
                    onClick={redrawWalkOracle}
                    className={`btn-secondary ${styles.savedSlipRedrawBtn}`}
                  >
                    <IconRefresh size={13} color="var(--primary-color)" />
                    <span>引き直す</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ヘッダー部分 ＆ 補助アクション（現在地測位リンクボタン） */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "12px",
            marginBottom: "14px",
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <div
              className="shuin-badge"
              style={{
                color: "var(--primary-color)",
                background: "rgba(199, 68, 46, 0.08)",
                borderColor: "rgba(199, 68, 46, 0.22)",
                marginBottom: "8px",
                letterSpacing: "0.06em",
              }}
            >
              <IconCompass size={13} color="var(--primary-color)" />
              <span>ご近所の再発見コンパス</span>
            </div>
            <h2
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: "0 0 4px 0",
                lineHeight: 1.4,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>少し外へ出て、街を再発見する</span>
            </h2>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--text-color)",
                opacity: 0.76,
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              遠くの観光地へ出かけなくても、いつもの街角や隣の駅に、まだ知らない物語が眠っています。
            </p>
          </div>

          <button
            type="button"
            onClick={requestNearbyLocation}
            disabled={locating}
            className="shuin-link-btn"
          >
            <IconMapPin size={14} color="var(--primary-color)" />
            <span>
              {locating
                ? "現在地を測位中..."
                : userLocation
                  ? "現在地から再検索"
                  : "現在地から近いルートを探す"}
            </span>
          </button>
        </div>

        {locationError && (
          <div
            style={{
              padding: "10px 14px",
              marginBottom: "14px",
              borderRadius: "10px",
              background: "rgba(199, 68, 46, 0.08)",
              border: "1px solid rgba(199, 68, 46, 0.25)",
              color: "var(--primary-color)",
              fontSize: "var(--font-size-small)",
              fontWeight: 700,
            }}
          >
            {locationError}
          </div>
        )}

        {/* シーン切り替えタブ（アンダーラインタブ） */}
        <div
          className="shuin-tabs"
          role="tablist"
          aria-label="街歩きシーン切り替え"
          style={{ marginBottom: "12px" }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "quick"}
            onClick={() => handleTabClick("quick")}
            className={`shuin-tab ${activeTab === "quick" ? "shuin-tab-active" : ""}`}
          >
            <IconLeaf size={13} />
            <span>気軽な散歩</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "immersive"}
            onClick={() => handleTabClick("immersive")}
            className={`shuin-tab ${activeTab === "immersive" ? "shuin-tab-active" : ""}`}
          >
            <IconTeacup size={13} />
            <span>じっくり散策</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "nearby"}
            onClick={() => handleTabClick("nearby")}
            className={`shuin-tab ${activeTab === "nearby" ? "shuin-tab-active" : ""}`}
          >
            <IconMapPin size={13} />
            <span>現在地から近い</span>
          </button>
        </div>

        {/* 気分・テーマ別コンパクトフィルタータグ */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "6px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontSize: "0.73rem",
              fontWeight: 800,
              color: "var(--text-color)",
              opacity: 0.72,
              marginRight: "2px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            気分:
          </span>
          {MOOD_FILTER_OPTIONS.map((opt) => {
            const isSelected = moodFilter === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setMoodFilter(opt.value)}
                className={`shuin-chip ${isSelected ? "shuin-chip-active" : ""}`}
              >
                {renderMoodIcon(opt.value)}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* 提案ルート一覧 */}
        {displayedRoutes.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {displayedRoutes.map((route) => {
              const stats = statsMap[route.id];
              return (
                <Link
                  key={route.id}
                  href={`/routes/${route.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    background: "var(--bg-color)",
                    border: "1px solid rgba(201, 168, 76, 0.45)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "136px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={
                        route.thumbnail_url ||
                        "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                      }
                      alt={route.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {route.prefecture && (
                        <span
                          style={{
                            background: "rgba(255,255,255,0.92)",
                            color: "var(--text-color)",
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            padding: "3px 8px",
                            borderRadius: "6px",
                          }}
                        >
                          {route.prefecture}
                        </span>
                      )}
                      {route.distanceFromUserKm !== null && (
                        <span
                          style={{
                            background: "var(--primary-color)",
                            color: "var(--bg-color)",
                            fontSize: "0.7rem",
                            fontWeight: 800,
                            padding: "3px 10px",
                            borderRadius: "6px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <IconCompass size={11} color="currentColor" />
                          <span>現在地から約 {route.distanceFromUserKm} km</span>
                        </span>
                      )}
                    </div>

                    {/* 下部オーバーレイ */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "20px 10px 6px",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0) 100%)",
                        color: "var(--bg-color)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <IconFootprints size={12} color="currentColor" />
                        <span>
                          全{route.walkMetrics.spotCount}箇所 ・ 約
                          {route.walkMetrics.distanceKm}km（約
                          {route.walkMetrics.estimatedMinutes}分）
                        </span>
                      </span>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                        }}
                      >
                        {stats && stats.participants > 0 && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "2px",
                            }}
                          >
                            <IconFootprints size={11} color="currentColor" />
                            {stats.participants}
                          </span>
                        )}
                        {stats && stats.favorites > 0 && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "2px",
                              color: "var(--accent-color)",
                            }}
                          >
                            <Star size={11} fill="currentColor" />
                            {stats.favorites}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "12px 14px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        color: "var(--text-color)",
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      {route.title}
                    </h3>

                    {route.nearestSpotName && (
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--primary-color)",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <IconMapPin size={12} color="var(--primary-color)" />
                        <span>
                          {route.walkMinutesToStart !== null
                            ? `最初のスポット「${route.nearestSpotName}」まで徒歩約 ${route.walkMinutesToStart} 分`
                            : `起点スポット：${route.nearestSpotName}`}
                        </span>
                      </div>
                    )}

                    {route.description && (
                      <p
                        style={{
                          fontSize: "0.76rem",
                          color: "var(--text-color)",
                          opacity: 0.72,
                          margin: 0,
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {route.description}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "24px 16px",
              background: "var(--bg-color)",
              borderRadius: "14px",
              border: "1px dashed rgba(201, 168, 76, 0.5)",
            }}
          >
            <p
              style={{
                fontSize: "var(--font-size-body)",
                color: "var(--text-color)",
                opacity: 0.8,
                marginBottom: "10px",
              }}
            >
              選択中の気分に合うルートが見つかりませんでした。
            </p>
            <button
              type="button"
              onClick={() => setMoodFilter("all")}
              className="shuin-link-btn"
            >
              すべての気分を表示する
            </button>
          </div>
        )}
      </div>

      {oracleModalNode}
    </section>
  );
}
