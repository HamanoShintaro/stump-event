"use client";

import React from "react";
import Link from "next/link";
import HeaderNav from "@/components/HeaderNav";
import styles from "./guide.module.css";
import {
  useGuideExperience,
  GuideMoodKey,
  GuideDurationKey,
} from "@/hooks/useGuideExperience";
import {
  IconScroll,
  IconCompass,
  IconStampSeal,
  IconUsers,
  IconBook,
  IconMapPin,
  IconFootprints,
  IconCamera,
  IconOmikuji,
  IconAward,
  IconSparkles,
  IconChevronDown,
  IconChevronRight,
  IconCheck,
  IconMap,
  IconLeaf,
  IconTeacup,
  IconTorii,
  IconClock,
} from "@/components/icons/ShuinIcons";

const MOOD_CHOICES: Array<{
  key: GuideMoodKey;
  label: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
}> = [
  { key: "scenery", label: "風景と木陰", Icon: IconLeaf },
  { key: "cafe", label: "喫茶と雑貨", Icon: IconTeacup },
  { key: "history", label: "社寺と歴史", Icon: IconTorii },
];

const DURATION_CHOICES: Array<{
  key: GuideDurationKey;
  label: string;
}> = [
  { key: "30m", label: "30分ほど（気軽な散歩）" },
  { key: "60m", label: "60分ほど（じっくり散策）" },
];

const QUICK_RIBBON_STEPS = [
  { num: "一", label: "探す", href: "#step-1" },
  { num: "二", label: "刻む", href: "#step-2" },
  { num: "三", label: "残す", href: "#step-3" },
  { num: "四", label: "振り返る", href: "#step-4" },
];

export default function GuidePage() {
  const {
    // Step 1
    selectedMood,
    selectedDuration,
    currentSampleRoute,
    oracleFlipTick,
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
    memoryPhotos,
    selectedPhotoId,
    selectedMemoryPhoto,
    handleSelectMemoryPhoto,
    customNote,
    setCustomNote,
    companionTimeline,
    isEchoExpanded,
    setIsEchoExpanded,

    // Step 4
    reviewTab,
    setReviewTab,
    shuinPages,
    selectedPageId,
    setSelectedPageId,
    activeShuinPage,
    titleExamples,
    selectedTitleId,
    setSelectedTitleId,
    activeTitleExample,

    // FAQ
    faqItems,
    openFaqIndex,
    toggleFaq,
  } = useGuideExperience();

  return (
    <div className={styles.guidePageWrapper}>
      <header className={styles.guideHeader}>
        <Link href="/" className="nav-logo">
          <img
            src="/shuin-logo-horizontal.png"
            alt="SHUIN まちのしるし"
            style={{ height: "30px", display: "block", objectFit: "contain" }}
          />
        </Link>
        <HeaderNav />
      </header>

      <main>
        {/* ================================================================
            Hero Section: 街の写真 × 和紙 × 朱印コラージュ & 4歩みリボン
           ================================================================ */}
        <section className={styles.heroSection}>
          <div className={styles.heroTopBadge}>
            <IconScroll size={13} color="var(--primary-color)" />
            <span>SHUIN — まちのしるし・体験手引き</span>
          </div>

          <h1 className={styles.heroTitle}>
            街を歩いて、
            <br />
            しるしを刻む。
          </h1>

          <p className={styles.heroSubcopy}>
            訪れた場所が、あなたのしるしになる。
          </p>

          {/* 街の実写真と朱印紙面のコラージュ */}
          <div className={styles.heroCollage} aria-label="街歩きと朱印のイメージ">
            <div className={styles.heroPhotoFrame}>
              <img
                src="/images/jiyugaoka/spot1.jpg"
                alt="木漏れ日の差す朱色の鳥居と参道"
                className={styles.heroPhotoImg}
              />
              <div className={styles.heroPhotoCaptionPill}>
                <IconMapPin size={12} color="var(--primary-color)" />
                <span>鎮守の森・朝の参道</span>
              </div>
            </div>

            <div className={styles.heroFloatingShuinCard}>
              <img
                src="/stamps/local.png"
                alt="朱印のしるし"
                className={styles.heroFloatingStampImg}
              />
              <span className={styles.heroFloatingLabel}>今日の寄り道</span>
              <span className={styles.heroFloatingSub}>一頁目のしるし</span>
            </div>
          </div>

          {/* 四つの歩み（SP 1列4分割リボン） */}
          <nav
            className={styles.stepRibbon}
            aria-label="街歩き4つのステップへ移動"
          >
            {QUICK_RIBBON_STEPS.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className={styles.stepRibbonItem}
              >
                <span className={styles.stepRibbonNum}>{item.num}</span>
                <span className={styles.stepRibbonLabel}>{item.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="#step-1"
            className="btn-primary"
            style={{
              width: "100%",
              maxWidth: "320px",
              padding: "13px 20px",
              fontSize: "0.9rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <IconCompass size={17} color="currentColor" />
            <span>街歩きを、少し体験する</span>
          </a>

          <p className={styles.heroActionNote}>
            登録・位置情報なしで、このまま画面を触って試せます
          </p>
        </section>

        {/* ================================================================
            4つのステップ体験セクション
           ================================================================ */}
        <div className={styles.stepsList}>
          {/* --------------------------------------------------------------
              STEP 01 (#step-1): 今日の気分で、物語を選ぶ
             -------------------------------------------------------------- */}
          <section id="step-1" className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrowRow}>
                <div className={styles.stepStampBadge}>
                  <span className={styles.stepSealSquare}>一</span>
                  <span className={styles.stepCodeText}>
                    STEP 01 — 物語との出会い
                  </span>
                </div>
                <span className={styles.demoNoticeTag}>触って試せる例</span>
              </div>
              <h2 className={styles.stepTitle}>今日の気分で、物語を選ぶ。</h2>
              <p className={styles.stepLead}>
                ひと駅先にも、まだ知らない風景が眠っています。気分や時間をタップしてみてください。
              </p>
            </div>

            <div className={styles.stageCard}>
              <div className={styles.pickerLabel}>
                <span>今日は、どんな寄り道？</span>
                <span style={{ color: "var(--primary-color)" }}>
                  タップで切り替え
                </span>
              </div>

              {/* 気分3択 */}
              <div
                className={styles.moodGrid}
                role="group"
                aria-label="気分の選択"
              >
                {MOOD_CHOICES.map((m) => {
                  const active = selectedMood === m.key;
                  const MoodIcon = m.Icon;
                  return (
                    <button
                      key={m.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => handleSelectMood(m.key)}
                      className={`${styles.choiceBtn} ${
                        active ? styles.choiceBtnActive : ""
                      }`}
                    >
                      <MoodIcon
                        size={14}
                        color={
                          active ? "var(--primary-color)" : "currentColor"
                        }
                      />
                      <span>{m.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* 時間2択 */}
              <div
                className={styles.durationGrid}
                role="group"
                aria-label="歩きたい時間の選択"
              >
                {DURATION_CHOICES.map((d) => {
                  const active = selectedDuration === d.key;
                  return (
                    <button
                      key={d.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => handleSelectDuration(d.key)}
                      className={`${styles.choiceBtn} ${
                        active ? styles.choiceBtnActive : ""
                      }`}
                    >
                      <IconClock
                        size={13}
                        color={
                          active ? "var(--primary-color)" : "currentColor"
                        }
                      />
                      <span>{d.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* 連動して切り替わるルートプレビューカード */}
              <div
                key={`${currentSampleRoute.id}-${oracleFlipTick}`}
                className={styles.routePreviewCard}
              >
                <div className={styles.routePreviewImageWrap}>
                  <img
                    src={currentSampleRoute.imageUrl}
                    alt={currentSampleRoute.title}
                    className={styles.routePreviewImg}
                    loading="lazy"
                  />
                  <div className={styles.routePreviewTopBadges}>
                    <span className={styles.routeAreaPill}>
                      {currentSampleRoute.areaLabel}
                    </span>
                    <span className={styles.routeFortunePill}>
                      {currentSampleRoute.fortuneBadge}
                    </span>
                  </div>
                </div>

                <div className={styles.routePreviewBody}>
                  <h3 className={styles.routePreviewTitle}>
                    {currentSampleRoute.title}
                  </h3>
                  <p className={styles.routePreviewCopy}>
                    {currentSampleRoute.catchcopy}
                  </p>

                  <div className={styles.routeMetaBar}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <IconFootprints size={13} color="var(--primary-color)" />
                      約{currentSampleRoute.walkMinutes}分の散策（
                      {currentSampleRoute.distanceKm}）
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <IconMapPin size={13} color="var(--primary-color)" />全
                      {currentSampleRoute.spotCount}か所
                    </span>
                  </div>

                  <div className={styles.routeSpotsFlow}>
                    {currentSampleRoute.spotsPreview.map((spot, idx) => (
                      <React.Fragment key={spot}>
                        <span>{spot}</span>
                        {idx < currentSampleRoute.spotsPreview.length - 1 && (
                          <span style={{ color: "var(--accent-color)" }}>
                            ―
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* 街歩きみくじボタン */}
              <div className={styles.oracleActionRow}>
                <button
                  type="button"
                  onClick={handleDrawSampleOracle}
                  className={styles.oracleDrawBtn}
                >
                  <IconOmikuji size={16} color="var(--primary-color)" />
                  <span>街歩きみくじを引く（別の物語へ）</span>
                </button>
              </div>

              <div className={styles.stageFooterRow}>
                <span className={styles.stageHelperText}>
                  ※体験用のルート表示例です
                </span>
                <Link href="/routes" className="shuin-link-btn">
                  <span>公開中のルートを見る</span>
                  <IconChevronRight size={14} color="var(--primary-color)" />
                </Link>
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------
              STEP 02 (#step-2): 訪れた場所に、しるしを（試し押し体験）
             -------------------------------------------------------------- */}
          <section id="step-2" className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrowRow}>
                <div className={styles.stepStampBadge}>
                  <span className={styles.stepSealSquare}>二</span>
                  <span className={styles.stepCodeText}>
                    STEP 02 — 現地を訪れる
                  </span>
                </div>
                <span className={styles.demoNoticeTag}>
                  押印の体験・記録には残りません
                </span>
              </div>
              <h2 className={styles.stepTitle}>訪れた場所に、しるしを。</h2>
              <p className={styles.stepLead}>
                スポットの50m以内に入ると押印できます。下の紙面で実際に押印を試してみましょう。
              </p>
            </div>

            <div className={styles.stageCard}>
              {/* ミニ距離インジケーター＆歩みトラック */}
              <div className={styles.radarMapBox}>
                <div className={styles.radarTopRow}>
                  <div className={styles.radarSpotTitle}>
                    <IconMapPin size={15} color="var(--primary-color)" />
                    <span>九品仏川・木漏れ日の角</span>
                  </div>
                  <span
                    className={`${styles.distanceStatusPill} ${
                      stampStage === "walking"
                        ? styles.distanceStatusWalking
                        : styles.distanceStatusRange
                    }`}
                  >
                    {stampStage === "walking" && "あと 120m（散策中）"}
                    {stampStage === "in_range" && "35m（押印圏内・50m以内）"}
                    {stampStage === "stamping" && "押印中..."}
                    {stampStage === "stamped" && "押印完了・物語解放"}
                  </span>
                </div>

                {/* 道路と現在地のミニ線画 */}
                <div className={styles.walkTrackSvgWrap} aria-hidden="true">
                  <svg
                    width="100%"
                    height="50"
                    viewBox="0 0 320 50"
                    fill="none"
                  >
                    {/* 背景の道筋 */}
                    <path
                      d="M 16 28 Q 95 10, 165 26 T 276 24"
                      stroke="var(--accent-color)"
                      strokeWidth="2.5"
                      strokeDasharray="5 5"
                      opacity="0.65"
                    />
                    {/* 50m圏内サークル */}
                    <circle
                      cx="276"
                      cy="24"
                      r="20"
                      fill="var(--primary-color)"
                      fillOpacity={stampStage === "walking" ? "0.08" : "0.18"}
                      stroke="var(--primary-color)"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    {/* 目的地ピン */}
                    <circle
                      cx="276"
                      cy="24"
                      r="6"
                      fill="var(--primary-color)"
                    />
                    {/* 旅人（現在地）ドット */}
                    <g
                      style={{
                        transform:
                          stampStage === "walking"
                            ? "translate(74px, 20px)"
                            : "translate(254px, 24px)",
                        transition: "transform 0.45s ease",
                      }}
                    >
                      <circle
                        cx="0"
                        cy="0"
                        r="7"
                        fill="var(--text-color)"
                        stroke="var(--bg-color)"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              {/* 和紙の朱印ステージ */}
              <div className={styles.washiStampSheet} aria-live="polite">
                <div className={styles.washiStampSheetOverlay} />
                <div className={styles.stampStageContent}>
                  {stampStage === "walking" && (
                    <>
                      <div className={styles.stampTargetCircle}>
                        <IconFootprints
                          size={24}
                          color="var(--primary-color)"
                        />
                        <span
                          style={{
                            fontSize: "var(--font-size-small)",
                            fontWeight: 800,
                            color: "var(--text-color)",
                          }}
                        >
                          あと 120m
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleApproachSpot}
                        className="btn-primary"
                        style={{
                          padding: "11px 22px",
                          fontSize: "0.86rem",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <IconFootprints size={16} color="currentColor" />
                        <span>スポットに近づく（50m圏内へ）</span>
                      </button>
                    </>
                  )}

                  {(stampStage === "in_range" ||
                    stampStage === "stamping") && (
                    <>
                      <div className={styles.stampTargetCircle}>
                        <div className={styles.stampTargetPulse} />
                        <IconStampSeal size={26} color="var(--primary-color)" />
                        <span
                          style={{
                            fontSize: "var(--font-size-small)",
                            fontWeight: 800,
                            color: "var(--primary-color)",
                          }}
                        >
                          押印圏内
                        </span>
                      </div>
                      <button
                        type="button"
                        disabled={stampStage === "stamping"}
                        onClick={handleTriggerStamp}
                        className="btn-primary"
                        style={{
                          padding: "12px 24px",
                          fontSize: "0.9rem",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <IconStampSeal size={17} color="currentColor" />
                        <span>
                          {stampStage === "stamping"
                            ? "しるしを刻んでいます..."
                            : "押印してみる（SHUINを刻む）"}
                        </span>
                      </button>
                    </>
                  )}

                  {stampStage === "stamped" && (
                    <>
                      <div className={styles.stampedVisualWrap}>
                        <img
                          src="/stamps/ink-splash.png"
                          alt=""
                          aria-hidden="true"
                          className={styles.inkSplashLayer}
                        />
                        <img
                          src="/stamps/destination_stump.png"
                          alt="刻まれた目的地の朱印"
                          className={styles.stampedSealImg}
                        />
                      </div>

                      <div className={styles.unlockedStoryCard}>
                        <div className={styles.unlockedStoryBadge}>
                          <IconSparkles
                            size={13}
                            color="var(--primary-color)"
                          />
                          <span>この場所の物語がひらきました（創作例）</span>
                        </div>
                        <h3 className={styles.unlockedStoryTitle}>
                          水路の記憶と、木漏れ日の石橋
                        </h3>
                        <p className={styles.unlockedStoryBody}>
                          かつて川沿いに植えられた桜並木は、今も季節ごとに街の歩調をゆるめる緑道として愛されています。
                        </p>
                      </div>

                      <div
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          gap: "8px",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          type="button"
                          onClick={handleResetStampDemo}
                          className="btn-secondary"
                          style={{
                            padding: "7px 14px",
                            fontSize: "0.76rem",
                          }}
                        >
                          もう一度押してみる
                        </button>
                        <a href="#step-4" className="shuin-link-btn">
                          <span>Step 4のSHUIN帳にも反映されました →</span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className={styles.stageFooterRow}>
                <span className={styles.stageHelperText}>
                  現地ではGPSまたは設置されたQRコードで押印します
                </span>
                <Link href="/map" className="shuin-link-btn">
                  <span>現在地マップを開く</span>
                  <IconChevronRight size={14} color="var(--primary-color)" />
                </Link>
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------
              STEP 03 (#step-3): 風景も、誰かとの時間も（写真＆連れ立ち）
             -------------------------------------------------------------- */}
          <section id="step-3" className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrowRow}>
                <div className={styles.stepStampBadge}>
                  <span className={styles.stepSealSquare}>三</span>
                  <span className={styles.stepCodeText}>
                    STEP 03 — 記憶と縁を重ねる
                  </span>
                </div>
                <span className={styles.demoNoticeTag}>
                  このページだけのお試し
                </span>
              </div>
              <h2 className={styles.stepTitle}>風景も、誰かとの時間も。</h2>
              <p className={styles.stepLead}>
                一枚の写真とひとことで余韻を記録。仲間との「連れ立ち」では旅路のしおりが重なります。
              </p>
            </div>

            <div className={styles.stageCard}>
              {/* 自分の記憶 / 連れ立ち 2択切り替え */}
              <div
                className={styles.modeSwitchTabs}
                role="group"
                aria-label="記憶の残し方プレビュー切り替え"
              >
                <button
                  type="button"
                  aria-pressed={memoryMode === "personal"}
                  onClick={() => setMemoryMode("personal")}
                  className={`${styles.choiceBtn} ${
                    memoryMode === "personal" ? styles.choiceBtnActive : ""
                  }`}
                >
                  <IconCamera
                    size={15}
                    color={
                      memoryMode === "personal"
                        ? "var(--primary-color)"
                        : "currentColor"
                    }
                  />
                  <span>自分の記憶カード</span>
                </button>
                <button
                  type="button"
                  aria-pressed={memoryMode === "companion"}
                  onClick={() => setMemoryMode("companion")}
                  className={`${styles.choiceBtn} ${
                    memoryMode === "companion" ? styles.choiceBtnActive : ""
                  }`}
                >
                  <IconUsers
                    size={15}
                    color={
                      memoryMode === "companion"
                        ? "var(--primary-color)"
                        : "currentColor"
                    }
                  />
                  <span>仲間との「連れ立ち」</span>
                </button>
              </div>

              {memoryMode === "personal" ? (
                <div>
                  {/* ポラロイド風・和紙の記憶カード */}
                  <div className={styles.memoryPolaroidCard}>
                    <div className={styles.memoryPhotoBox}>
                      <img
                        src={selectedMemoryPhoto.imageUrl}
                        alt={selectedMemoryPhoto.spotName}
                        className={styles.memoryPhotoImg}
                        loading="lazy"
                      />
                      <img
                        src="/stamps/see.png"
                        alt="刻まれたしるし"
                        className={styles.memoryCornerSeal}
                      />
                    </div>

                    <div className={styles.memoryMetaRow}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "var(--text-color)",
                          fontWeight: 800,
                        }}
                      >
                        <IconMapPin size={13} color="var(--primary-color)" />
                        {selectedMemoryPhoto.spotName}
                      </span>
                      <span>{selectedMemoryPhoto.dateLabel}（表示例）</span>
                    </div>

                    <p
                      style={{
                        fontSize: "var(--font-size-body)",
                        fontWeight: 700,
                        color: "var(--text-color)",
                        lineHeight: 1.55,
                        margin: 0,
                        overflowWrap: "anywhere",
                        wordBreak: "break-word",
                      }}
                    >
                      「{customNote || "今日の街角の風景を、ここにひとこと。"}」
                    </p>
                  </div>

                  {/* 写真候補3枚の切り替え */}
                  <div className={styles.pickerLabel}>
                    <span>写真を切り替えてみる</span>
                  </div>
                  <div className={styles.photoThumbRow}>
                    {memoryPhotos.map((p) => {
                      const active = p.id === selectedPhotoId;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => handleSelectMemoryPhoto(p.id)}
                          aria-pressed={active}
                          aria-label={`${p.spotName}の写真を選ぶ`}
                          className={`${styles.photoThumbBtn} ${
                            active ? styles.photoThumbBtnActive : ""
                          }`}
                        >
                          <img
                            src={p.imageUrl}
                            alt={p.spotName}
                            className={styles.photoThumbImg}
                            loading="lazy"
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* ひとことメモ入力体験 */}
                  <label
                    htmlFor="guide-memory-note-input"
                    className={styles.noteInputLabel}
                  >
                    <span>ひとことあとがき（40文字までお試し入力）</span>
                    <span>{customNote.length}/40</span>
                  </label>
                  <input
                    id="guide-memory-note-input"
                    type="text"
                    maxLength={40}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="心に残った風景をひとこと..."
                    className={styles.noteInputField}
                  />
                </div>
              ) : (
                <div>
                  {/* 連れ立ちタイムライン表示例 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                      fontSize: "var(--font-size-small)",
                      fontWeight: 800,
                      color: "var(--primary-color)",
                    }}
                  >
                    <span>連れ立ち旅路のしおり（共有アルバム表示例）</span>
                    <span>合言葉で参加</span>
                  </div>

                  <div className={styles.companionTimeline}>
                    {companionTimeline.map((item) => (
                      <div key={item.id} className={styles.timelineCard}>
                        <span className={styles.timelineDot} />
                        <img
                          src={item.imageUrl}
                          alt={item.spotName}
                          className={styles.timelineThumb}
                          loading="lazy"
                        />
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "6px",
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "var(--primary-color)",
                              marginBottom: "2px",
                            }}
                          >
                            <span>
                              {item.timeLabel} ・ {item.authorName}
                            </span>
                            <span>{item.spotName}</span>
                          </div>
                          <p
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--text-color)",
                              lineHeight: 1.45,
                              margin: 0,
                            }}
                          >
                            「{item.note}」
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 街角の余韻（他旅人の気配）折りたたみ */}
              <div style={{ marginTop: "10px" }}>
                <button
                  type="button"
                  aria-expanded={isEchoExpanded}
                  onClick={() => setIsEchoExpanded(!isEchoExpanded)}
                  className={styles.echoAccordionBtn}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <IconFootprints size={14} color="var(--primary-color)" />
                    <span>街角の余韻（訪れた他の旅人のひとこと例）</span>
                  </span>
                  <IconChevronDown size={15} color="var(--primary-color)" />
                </button>
                {isEchoExpanded && (
                  <div
                    style={{
                      marginTop: "6px",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      background: "var(--bg-color)",
                      border:
                        "1px solid color-mix(in srgb, var(--accent-color) 45%, transparent)",
                      fontSize: "0.8rem",
                      color: "var(--text-color)",
                      lineHeight: 1.55,
                    }}
                  >
                    「夕方の光が石畳に反射して、とても静かな時間が流れていました。」（先月の旅人より・表示例）
                  </div>
                )}
              </div>

              <div className={styles.stageFooterRow}>
                <span className={styles.stageHelperText}>
                  ※入力内容は体験用で外部に送信されません
                </span>
                <Link href="/mypage" className="shuin-link-btn">
                  <span>マイページを見る</span>
                  <IconChevronRight size={14} color="var(--primary-color)" />
                </Link>
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------
              STEP 04 (#step-4): 歩いた日々が、一冊になる（SHUIN帳・絵巻・称号）
             -------------------------------------------------------------- */}
          <section id="step-4" className={styles.stepSection}>
            <div className={styles.stepHeader}>
              <div className={styles.stepEyebrowRow}>
                <div className={styles.stepStampBadge}>
                  <span className={styles.stepSealSquare}>四</span>
                  <span className={styles.stepCodeText}>
                    STEP 04 — 歩みを振り返る
                  </span>
                </div>
                <span className={styles.demoNoticeTag}>
                  {hasExperiencedStamp
                    ? "Step 2の体験印を反映中"
                    : "タップで紙面をひらく"}
                </span>
              </div>
              <h2 className={styles.stepTitle}>歩いた日々が、一冊になる。</h2>
              <p className={styles.stepLead}>
                集めたしるしは「SHUIN帳」や踏破記念の「旅路の絵巻」、風流な「称号」として積み重なります。
              </p>
            </div>

            <div className={styles.stageCard}>
              {/* 3つの振り返り切り替えボタン */}
              <div
                className={styles.reviewTabsGrid}
                role="group"
                aria-label="振り返りビューの切り替え"
              >
                <button
                  type="button"
                  aria-pressed={reviewTab === "book"}
                  onClick={() => setReviewTab("book")}
                  className={`${styles.choiceBtn} ${
                    reviewTab === "book" ? styles.choiceBtnActive : ""
                  }`}
                >
                  <IconBook
                    size={14}
                    color={
                      reviewTab === "book"
                        ? "var(--primary-color)"
                        : "currentColor"
                    }
                  />
                  <span>SHUIN帳</span>
                </button>
                <button
                  type="button"
                  aria-pressed={reviewTab === "emaki"}
                  onClick={() => setReviewTab("emaki")}
                  className={`${styles.choiceBtn} ${
                    reviewTab === "emaki" ? styles.choiceBtnActive : ""
                  }`}
                >
                  <IconScroll
                    size={14}
                    color={
                      reviewTab === "emaki"
                        ? "var(--primary-color)"
                        : "currentColor"
                    }
                  />
                  <span>旅路の絵巻</span>
                </button>
                <button
                  type="button"
                  aria-pressed={reviewTab === "title"}
                  onClick={() => setReviewTab("title")}
                  className={`${styles.choiceBtn} ${
                    reviewTab === "title" ? styles.choiceBtnActive : ""
                  }`}
                >
                  <IconAward
                    size={14}
                    color={
                      reviewTab === "title"
                        ? "var(--primary-color)"
                        : "currentColor"
                    }
                  />
                  <span>称号</span>
                </button>
              </div>

              {/* タブ1: SHUIN帳（3×2紙面グリッド + 選択中の紙面詳細） */}
              {reviewTab === "book" && (
                <div>
                  <div className={styles.shuinGrid3x2}>
                    {shuinPages.map((page) => {
                      const active = page.id === selectedPageId;
                      return (
                        <button
                          key={page.id}
                          type="button"
                          onClick={() => setSelectedPageId(page.id)}
                          aria-pressed={active}
                          className={`${styles.shuinCellBtn} ${
                            active ? styles.shuinCellBtnActive : ""
                          }`}
                          style={{
                            backgroundImage: `url(${page.bgUrl})`,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "10px",
                              fontWeight: 800,
                              color: page.isLiveStamped
                                ? "var(--primary-color)"
                                : "var(--text-color)",
                              background:
                                "color-mix(in srgb, var(--bg-color) 88%, white 12%)",
                              padding: "1px 6px",
                              borderRadius: "999px",
                            }}
                          >
                            {page.dateLabel}
                          </span>

                          {page.isUnlocked ? (
                            <img
                              src={page.stampUrl}
                              alt={page.spotName}
                              className={styles.shuinCellStampImg}
                              loading="lazy"
                            />
                          ) : (
                            <div className={styles.shuinCellEmptyCircle}>
                              未踏
                            </div>
                          )}

                          <span className={styles.shuinCellSpotName}>
                            {page.spotName}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* 選択中の御朱印紙面詳細 */}
                  <div className={styles.selectedPageDetailCard}>
                    <img
                      src={activeShuinPage.photoUrl}
                      alt={activeShuinPage.spotName}
                      className={styles.selectedPageThumb}
                      loading="lazy"
                    />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 800,
                          color: "var(--primary-color)",
                          marginBottom: "2px",
                        }}
                      >
                        {activeShuinPage.routeTitle} ・{" "}
                        {activeShuinPage.dateLabel}
                      </div>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 800,
                          color: "var(--text-color)",
                          marginBottom: "4px",
                        }}
                      >
                        {activeShuinPage.spotName}
                      </div>
                      <p
                        style={{
                          fontSize: "var(--font-size-body)",
                          color: "var(--text-color)",
                          margin: 0,
                          lineHeight: 1.55,
                          overflowWrap: "anywhere",
                          wordBreak: "break-word",
                        }}
                      >
                        {activeShuinPage.memo}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* タブ2: 旅路の絵巻（踏破記念の縦長絵巻プレビュー） */}
              {reviewTab === "emaki" && (
                <div className={styles.emakiScrollPaper}>
                  <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "var(--primary-color)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      踏破記念・旅路の絵巻（表示例）
                    </span>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 800,
                        color: "var(--text-color)",
                        margin: "4px 0 2px",
                      }}
                    >
                      桜並木のせせらぎと、石畳の小さな寄り道
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--font-size-small)",
                        color: "var(--text-color)",
                        opacity: 0.75,
                      }}
                    >
                      全3か所踏破 ・ 歩いた距離 約1.2km
                    </span>
                  </div>

                  <div className={styles.emakiNodeList}>
                    {shuinPages.slice(0, 3).map((node, i) => (
                      <div key={node.id} className={styles.emakiNodeItem}>
                        <img
                          src={node.photoUrl}
                          alt={node.spotName}
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "8px",
                            objectFit: "cover",
                            flexShrink: 0,
                          }}
                          loading="lazy"
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: "11px",
                              fontWeight: 800,
                              color: "var(--primary-color)",
                            }}
                          >
                            第{i + 1}のしるし
                          </div>
                          <div
                            style={{
                              fontSize: "0.84rem",
                              fontWeight: 800,
                              color: "var(--text-color)",
                            }}
                          >
                            {node.spotName}
                          </div>
                          <div
                            style={{
                              fontSize: "0.75rem",
                              color: "var(--text-color)",
                              opacity: 0.8,
                            }}
                          >
                            {node.memo}
                          </div>
                        </div>
                        <img
                          src={node.stampUrl}
                          alt="朱印"
                          style={{
                            width: "38px",
                            height: "38px",
                            objectFit: "contain",
                            flexShrink: 0,
                          }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "var(--font-size-small)",
                      fontWeight: 800,
                      color: "var(--primary-color)",
                      paddingTop: "6px",
                      borderTop:
                        "1px dashed color-mix(in srgb, var(--accent-color) 50%, transparent)",
                    }}
                  >
                    また、次の街角へ。
                  </div>
                </div>
              )}

              {/* タブ3: 称号（歩みに応じて授与される風流な称号例） */}
              {reviewTab === "title" && (
                <div>
                  <div className={styles.titleMedallionCard}>
                    <div className={styles.titleMedallionSeal}>
                      <img
                        src={activeTitleExample.stampUrl}
                        alt={activeTitleExample.titleName}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        color: "var(--primary-color)",
                        letterSpacing: "0.08em",
                        marginBottom: "2px",
                      }}
                    >
                      {activeTitleExample.rankLabel}（称号の表示例）
                    </div>
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "var(--text-color)",
                        margin: "0 0 6px",
                      }}
                    >
                      【 {activeTitleExample.titleName} 】
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-color)",
                        lineHeight: 1.55,
                        margin: "0 0 6px",
                      }}
                    >
                      {activeTitleExample.poeticCopy}
                    </p>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--primary-color)",
                      }}
                    >
                      {activeTitleExample.conditionHint}
                    </span>
                  </div>

                  <div className={styles.moodGrid}>
                    {titleExamples.map((t) => {
                      const active = t.id === selectedTitleId;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setSelectedTitleId(t.id)}
                          className={`${styles.choiceBtn} ${
                            active ? styles.choiceBtnActive : ""
                          }`}
                        >
                          <span>{t.titleName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className={styles.stageFooterRow}>
                <span className={styles.stageHelperText}>
                  ※紙面や称号は体験用の表示例です
                </span>
                <Link href="/mypage/diary" className="shuin-link-btn">
                  <span>SHUIN帳をひらく</span>
                  <IconChevronRight size={14} color="var(--primary-color)" />
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* ================================================================
            FAQ Section: 出かける前に、少しだけ。
           ================================================================ */}
        <section className={styles.faqSection}>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <div className="shuin-badge" style={{ marginBottom: "6px" }}>
              <IconCheck size={13} color="var(--primary-color)" />
              <span>FAQ — よくあるご質問</span>
            </div>
            <h2
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: 0,
              }}
            >
              出かける前に、少しだけ。
            </h2>
          </div>

          <div className={styles.faqList}>
            {faqItems.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const answerId = `guide-faq-answer-${idx}`;
              return (
                <div
                  key={faq.question}
                  className={`${styles.faqItem} ${
                    isOpen ? styles.faqItemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqTriggerBtn}
                  >
                    <span>Q. {faq.question}</span>
                    <span
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        color: "var(--primary-color)",
                        flexShrink: 0,
                      }}
                    >
                      <IconChevronDown size={18} color="var(--primary-color)" />
                    </span>
                  </button>
                  <div
                    id={answerId}
                    hidden={!isOpen}
                    className={styles.faqAnswerBox}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================================================================
            Bottom Action CTA: 次の寄り道を、見つけに。
           ================================================================ */}
        <section className={styles.bottomCtaCard}>
          <h2
            style={{
              fontSize: "var(--font-size-h2)",
              fontWeight: 800,
              color: "var(--text-color)",
              marginBottom: "6px",
            }}
          >
            次の寄り道を、見つけに。
          </h2>
          <p
            style={{
              fontSize: "var(--font-size-body)",
              color: "var(--text-color)",
              opacity: 0.82,
              marginBottom: "18px",
              lineHeight: 1.6,
            }}
          >
            近くの街角からでも、気になっていたあの街からでも。
            <br />
            あなたの歩幅で、最初のしるしを刻みに出かけましょう。
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            <Link
              href="/routes"
              className="btn-primary"
              style={{
                width: "100%",
                padding: "13px 24px",
                fontSize: "0.92rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <IconCompass size={17} color="currentColor" />
              <span>物語（ルート一覧）から探す</span>
            </Link>
            <Link
              href="/map"
              className="btn-secondary"
              style={{
                width: "100%",
                padding: "12px 22px",
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              <IconMap size={17} color="var(--primary-color)" />
              <span>現在地マップから探す</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
