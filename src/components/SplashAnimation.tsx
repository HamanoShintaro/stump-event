"use client";

import React, { useEffect, useState } from "react";
import styles from "./SplashAnimation.module.css";

export default function SplashAnimation() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // セッションストレージで初回訪問を判定
    const hasVisited = sessionStorage.getItem("has_visited_splash");
    if (!hasVisited) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowSplash(true);
      sessionStorage.setItem("has_visited_splash", "true");
      
      // CSSアニメーション (6.5s + 0.8s = 7.3s) でフェードアウト完了
      const timer = setTimeout(() => setShowSplash(false), 7300);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!showSplash) return null;

  return (
    <div className={styles.opening}>
      <div className={`${styles.scene1}`}></div>
      <div className={`${styles.scene2}`}></div>
      <div className={styles.route}></div>
      <div className={styles.particles}></div>

      <div className={styles.copy}>
        <h1>街を歩いて、<br/>しるしを刻む。</h1>
        <p>訪れた場所が、あなたのしるしになる。</p>
      </div>
    </div>
  );
}
