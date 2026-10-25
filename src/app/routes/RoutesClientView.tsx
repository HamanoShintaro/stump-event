"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouteDiscovery, DurationFilter, RouteSortBy } from "@/hooks/useRouteDiscovery";
import { RouteStat } from "@/utils/routeStats";
import {
  Footprints,
  Star,
  Search,
  Clock,
  MapPin,
  Navigation,
  X,
} from "lucide-react";

interface RoutesClientViewProps {
  initialRoutes: any[];
  statsMap: Record<string, RouteStat>;
  initialKeyword?: string;
  activePrefecture?: string;
  activeCategory?: string;
  activeBudgetTier?: string;
}

const DURATION_OPTIONS: { value: DurationFilter; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "short", label: "⏱️ 気軽にお散歩（〜45分）" },
  { value: "medium", label: "🍵 じっくり散策（45〜90分）" },
  { value: "long", label: "🥾 たっぷり巡る（90分〜）" },
];

export default function RoutesClientView({
  initialRoutes,
  statsMap,
  initialKeyword = "",
  activePrefecture,
  activeCategory,
  activeBudgetTier,
}: RoutesClientViewProps) {
  const {
    keyword,
    setKeyword,
    durationFilter,
    setDurationFilter,
    selectedArea,
    setSelectedArea,
    areaList,
    sortBy,
    handleSortChange,
    locating,
    filteredRoutes,
  } = useRouteDiscovery(initialRoutes, statsMap, initialKeyword);

  const hasServerFilters = Boolean(
    activePrefecture || activeCategory || activeBudgetTier
  );

  const budgetFilterLabel =
    activeBudgetTier === "1"
      ? "〜1,000円"
      : activeBudgetTier === "2"
        ? "〜5,000円"
        : activeBudgetTier === "3"
          ? "5,000円〜"
          : null;

  return (
    <div>
      {/* 街歩き探索バー（キーワード・所要時間・街エリア図鑑・並び替え） */}
      <div className={"glass-card " + styles.discoveryBar}>
        <div className={styles.searchRow}>
          <div className={styles.searchInputWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="駅名・街名・スポット名・テーマで探す..."
              className={styles.searchInput}
              aria-label="ルートをキーワード検索"
            />
            {keyword && (
              <button
                type="button"
                onClick={() => setKeyword("")}
                className={styles.clearKeywordBtn}
                aria-label="検索ワードをクリア"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className={styles.sortWrapper}>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as RouteSortBy)}
              className={styles.sortSelect}
              aria-label="並び替え"
            >
              <option value="newest">✨ 新着順</option>
              <option value="nearby">
                🧭 現在地から近い順{locating ? "（測位中...）" : ""}
              </option>
              <option value="walkable">👣 気軽に歩ける順（短時間）</option>
              <option value="popular">🔥 人気・保存数順</option>
            </select>
          </div>
        </div>

        {/* 所要時間クイックフィルター */}
        <div className={styles.filterPillsRow}>
          {DURATION_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setDurationFilter(opt.value)}
              className={
                durationFilter === opt.value
                  ? styles.filterPillActive
                  : styles.filterPill
              }
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* 🏘️ 街・エリア図鑑から探す */}
        {areaList.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              paddingTop: "8px",
              borderTop: "1px dashed rgba(201, 168, 76, 0.35)",
            }}
          >
            <div
              style={{
                fontSize: "var(--font-size-small)",
                fontWeight: 800,
                color: "var(--text-color)",
                opacity: 0.8,
              }}
            >
              🏘️ 街・エリア図鑑から探す
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                overflowX: "auto",
                paddingBottom: "4px",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedArea("すべて")}
                className={
                  selectedArea === "すべて"
                    ? "btn-primary"
                    : "btn-secondary"
                }
                style={{
                  padding: "5px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                すべて
              </button>
              {areaList.map((area) => {
                const isActive = selectedArea === area.areaName;
                return (
                  <button
                    key={area.areaName}
                    type="button"
                    onClick={() => setSelectedArea(area.areaName)}
                    className={isActive ? "btn-primary" : "btn-secondary"}
                    style={{
                      padding: "5px 12px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {area.areaName} ({area.count})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* URL検索条件バッジ */}
        {hasServerFilters && (
          <div className={styles.activeServerFilters}>
            <span className={styles.filterLabel}>絞り込み条件:</span>
            {activePrefecture && (
              <span className={styles.activeFilterTag}>📍 {activePrefecture}</span>
            )}
            {activeCategory && (
              <span className={styles.activeFilterTag}>🏷️ {activeCategory}</span>
            )}
            {budgetFilterLabel && (
              <span className={styles.activeFilterTag}>💰 {budgetFilterLabel}</span>
            )}
            <Link href="/routes" className={styles.resetFiltersLink}>
              条件を解除
            </Link>
          </div>
        )}
      </div>

      {/* 件数表示 */}
      <div className={styles.resultMetaRow}>
        <span>
          全 <strong>{filteredRoutes.length}</strong> ルート
          {selectedArea !== "すべて" ? `（${selectedArea}）` : ""}
        </span>
      </div>

      {/* ルートカード一覧 */}
      <div className={styles.grid}>
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((routeItem) => {
            const { walkMetrics, distanceFromUserKm, stats } = routeItem;
            return (
              <Link
                href={`/routes/${routeItem.id}`}
                key={routeItem.id}
                className={styles.cardWrapper}
              >
                <div className={"glass-card " + styles.card}>
                  <div
                    className={styles.imageBox}
                    style={{
                      backgroundImage: `url(${
                        routeItem.thumbnail_url ||
                        "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=600&q=80"
                      })`,
                    }}
                  >
                    <div className={styles.overlayTopTags}>
                      <div className={styles.categoryBadge}>{routeItem.category}</div>
                      <div className={styles.areaBadge}>{routeItem.prefecture}</div>
                      {routeItem.routeAreas?.[0] && (
                        <div className={styles.areaBadge}>
                          📍 {routeItem.routeAreas[0]}
                        </div>
                      )}
                      {distanceFromUserKm !== null && (
                        <div className={styles.distanceBadge}>
                          <Navigation size={10} />
                          現在地から約{distanceFromUserKm}km
                        </div>
                      )}
                    </div>
                    <div className={styles.cardOverlay}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: "bold",
                            textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                          }}
                        >
                          💰{" "}
                          {routeItem.budget_tier === 1
                            ? "~1,000円"
                            : routeItem.budget_tier === 2
                              ? "~5,000円"
                              : "5,000円~"}
                        </span>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            fontSize: "0.72rem",
                            fontWeight: "bold",
                            textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                          }}
                        >
                          {stats?.participants > 0 && (
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2px",
                              }}
                            >
                              <Footprints size={12} strokeWidth={2} />
                              {stats.participants}
                            </span>
                          )}
                          {stats?.favorites > 0 && (
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2px",
                                color: "var(--accent-color)",
                              }}
                            >
                              <Star
                                size={12}
                                fill="currentColor"
                                strokeWidth={2}
                              />
                              {stats.favorites}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h2 className={styles.rallyTitle}>{routeItem.title}</h2>
                    <p className={styles.rallyDesc}>{routeItem.description}</p>
                    <div className={styles.walkMetaStrip}>
                      <span className={styles.walkMetaItem}>
                        <MapPin size={12} color="var(--primary-color)" />
                        全{walkMetrics.spotCount}箇所
                      </span>
                      <span className={styles.walkMetaDivider}>•</span>
                      <span className={styles.walkMetaItem}>
                        <Footprints size={12} color="var(--primary-color)" />
                        約{walkMetrics.distanceKm.toFixed(1)}km
                      </span>
                      <span className={styles.walkMetaDivider}>•</span>
                      <span className={styles.walkMetaItem}>
                        <Clock size={12} color="var(--primary-color)" />
                        約{walkMetrics.estimatedMinutes}分
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className={styles.emptyStateBox}>
            <p className={styles.emptyStateText}>
              条件に一致するルートが見つかりませんでした。
            </p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setKeyword("");
                setDurationFilter("all");
                setSelectedArea("すべて");
              }}
              style={{ padding: "8px 20px", fontSize: "0.85rem" }}
            >
              検索条件をリセットする
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
