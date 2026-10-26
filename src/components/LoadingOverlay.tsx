"use client";

import styles from "./LoadingOverlay.module.css";

interface LoadingOverlayProps {
  message?: string;
  fullScreen?: boolean;
}

export default function LoadingOverlay({
  message = "しるしを辿っています…",
  fullScreen = true,
}: LoadingOverlayProps) {
  return (
    <div
      className={fullScreen ? styles.shuinLoadingOverlay : styles.shuinLoadingInline}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className={styles.shuinLoading}>
        <div className={styles.shuinLoadingArt} aria-hidden="true">
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <circle className={styles.shuinLoadingHalo} cx="60" cy="60" r="42" />
            <circle
              className={`${styles.shuinLoadingHalo} ${styles.shuinLoadingHaloLate}`}
              cx="60"
              cy="60"
              r="42"
            />
            <path
              className={styles.shuinLoadingRoute}
              d="M25 70 C19 49 32 24 56 20 C82 15 103 35 101 59 C99 82 83 100 60 100 C46 100 34 94 27 83"
            />
            <circle className={styles.shuinLoadingSeal} cx="60" cy="60" r="23" />
            <path
              className={styles.shuinLoadingInner}
              d="M49 61 Q60 48 71 61 M52 67 Q60 59 68 67"
            />
            <circle className={styles.shuinLoadingSpark} cx="96" cy="33" r="2" />
          </svg>
        </div>
        <p className={styles.shuinLoadingCaption}>{message}</p>
      </div>
    </div>
  );
}
