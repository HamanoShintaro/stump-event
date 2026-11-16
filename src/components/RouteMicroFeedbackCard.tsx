"use client";

import {
  useRouteMicroFeedback,
  type FeedbackSentiment,
} from "@/hooks/useRouteMicroFeedback";
import {
  Footprints,
  Sparkles,
  Compass,
  MessageSquarePlus,
  Share2,
  CheckCircle2,
  Copy,
} from "lucide-react";
import styles from "./RouteMicroFeedbackCard.module.css";

interface RouteMicroFeedbackCardProps {
  routeId: string;
  routeTitle: string;
  areaName: string;
}

const FEEDBACK_OPTIONS: {
  id: FeedbackSentiment;
  label: string;
  icon: "walk" | "story" | "area" | "note";
}[] = [
  {
    id: "walk_soon",
    label: "このルートを歩いてみたい",
    icon: "walk",
  },
  {
    id: "interesting",
    label: "街の物語・切り口が魅力的",
    icon: "story",
  },
  {
    id: "want_other_area",
    label: "別の街・駅のルートも巡りたい",
    icon: "area",
  },
  {
    id: "hard_to_walk",
    label: "距離や順路に改善してほしい点がある",
    icon: "note",
  },
];

export default function RouteMicroFeedbackCard({
  routeId,
  routeTitle,
  areaName,
}: RouteMicroFeedbackCardProps) {
  const {
    selectedSentiment,
    requestedArea,
    setRequestedArea,
    comment,
    setComment,
    isSubmitting,
    isSubmitted,
    copiedShareUrl,
    handleSelectSentiment,
    handleSubmitDetails,
    handleShare,
  } = useRouteMicroFeedback({
    routeId,
    routeTitle,
    areaName,
  });

  const renderIcon = (type: "walk" | "story" | "area" | "note") => {
    switch (type) {
      case "walk":
        return <Footprints size={15} color="var(--primary-color)" />;
      case "story":
        return <Sparkles size={15} color="var(--primary-color)" />;
      case "area":
        return <Compass size={15} color="var(--primary-color)" />;
      case "note":
        return <MessageSquarePlus size={15} color="var(--primary-color)" />;
    }
  };

  return (
    <section
      className={styles.wrapper}
      aria-labelledby="micro-feedback-heading"
    >
      <div className={styles.sectionHeader}>
        <h2 id="micro-feedback-heading" className={styles.title}>
          <Compass size={18} color="var(--primary-color)" />
          <span>この街の物語はいかがでしたか？</span>
        </h2>
        <p className={styles.subtitle}>
          1タップでお聞かせください。いただいた声をもとに、次の街のルート作成や物語の改善を行います。
        </p>
      </div>

      <div className={styles.optionsGrid}>
        {FEEDBACK_OPTIONS.map((opt) => {
          const isActive = selectedSentiment === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              disabled={isSubmitting}
              onClick={() => handleSelectSentiment(opt.id)}
              className={
                styles.optionBtn +
                (isActive ? " " + styles.optionBtnActive : "")
              }
            >
              {renderIcon(opt.icon)}
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {selectedSentiment && (
        <form onSubmit={handleSubmitDetails} className={styles.detailForm}>
          {isSubmitted && (
            <div className={styles.thanksBox}>
              <CheckCircle2 size={16} color="var(--primary-color)" />
              <span>
                ご感想ありがとうございます！「作ってほしい駅・街」があればぜひ下から教えてください。
              </span>
            </div>
          )}

          <label className={styles.formLabel}>
            <span>
              今後SHUINで巡ってみたい「駅名・街名」があれば教えてください（任意）
            </span>
            <input
              type="text"
              value={requestedArea}
              onChange={(e) => setRequestedArea(e.target.value)}
              placeholder="例：鎌倉駅、谷根千、尾道、松本駅 など"
              className={styles.textInput}
              maxLength={100}
            />
          </label>

          <label className={styles.formLabel}>
            <span>
              このルートへのご感想・改善点・立ち寄りスポットの提案（任意）
            </span>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="例：〇〇の路地も素敵でした／もう少し短い距離だと嬉しい など"
              className={styles.textInput}
              maxLength={300}
            />
          </label>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting
                ? "送信中..."
                : isSubmitted
                  ? "リクエスト・ひとことを追記送信する"
                  : "この内容で送信する"}
            </button>
          </div>
        </form>
      )}

      <div className={styles.shareDivider}>
        <div className={styles.shareRow}>
          <span className={styles.shareTitle}>共有する：</span>
          <div className={styles.shareButtonsRow}>
            <button
              type="button"
              onClick={() => handleShare("x")}
              className={styles.shareIconBtn}
              aria-label="Xで紹介"
              title="Xで紹介"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleShare("line")}
              className={styles.shareIconBtn}
              aria-label="LINEで送る"
              title="LINEで送る"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleShare("copy")}
              className={styles.shareIconBtn}
              aria-label="リンクをコピー"
              title="リンクをコピー"
            >
              {copiedShareUrl ? (
                <CheckCircle2 size={15} strokeWidth={1.8} color="var(--primary-color)" />
              ) : (
                <Copy size={15} strokeWidth={1.8} />
              )}
            </button>
            {copiedShareUrl && (
              <span className={styles.copiedLabel}>コピーしました</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
