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
      className={"glass-card " + styles.wrapper}
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
                "btn-secondary " +
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
              className="btn-primary"
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
        <p className={styles.shareTitle}>
          <Share2 size={15} color="var(--primary-color)" />
          <span>{areaName}の街歩きルートを友人に共有する</span>
        </p>
        <div className={styles.shareButtonsRow}>
          <button
            type="button"
            onClick={() => handleShare("x")}
            className="btn-secondary"
          >
            <span>X (旧Twitter) で紹介</span>
          </button>
          <button
            type="button"
            onClick={() => handleShare("line")}
            className="btn-secondary"
          >
            <span>LINEで送る</span>
          </button>
          <button
            type="button"
            onClick={() => handleShare("copy")}
            className="btn-secondary"
          >
            <Copy size={14} />
            <span>{copiedShareUrl ? "URLをコピーしました" : "リンクをコピー"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
