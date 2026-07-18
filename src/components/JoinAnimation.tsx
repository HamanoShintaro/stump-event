"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./JoinAnimation.module.css";

interface JoinAnimationProps {
  onComplete: () => void;
  routeTitle: string;
  routeDescription: string;
  routePrologue?: string;
}

const getRoutePrologue = (title: string, description: string, prologue?: string) => {
  if (prologue && prologue.trim() !== "") {
    return prologue;
  }
  
  // フォールバックマッピング
  if (title.includes("自由が丘")) {
    return `自由が丘の "自由" は、\n何から生まれたのか？\n\n5つの場所に、答えではなく\n食い違う "手がかり" がある。\n\n歩き終えたら、あなたの答えを\n選ぶ。答えで称号が変わる。`;
  }
  if (title.includes("ラーメン") || title.includes("グルメ") || title.includes("食べ歩き")) {
    return `暖簾の向こうに隠された、\n極上の一杯をめぐる旅。\n\nこだわりの名店に、それぞれ違った\n受け継がれてきた "しるし" がある。\n\n訪れた証を、あなたのしるし帳へ。`;
  }
  if (title.includes("自然") || title.includes("癒")) {
    return `豊かな自然が紡ぐ、\n水と緑と生き物の記憶。\n\n瑞々しい場所に、答えではなく\n風のささやきと "手がかり" がある。\n\n歩き終えれば、心にしるしが刻まれる。`;
  }
  if (title.includes("歴史") || title.includes("神社") || title.includes("寺")) {
    return `時を越えて受け継がれる、\nいにしえの祈りとしるし。\n\n古社や史跡をめぐり、\n街の歴史の "断片" を集める旅。\n\nしるしを刻み、記憶を紐解こう。`;
  }
  
  // デフォルト
  return `「${title}」へようこそ。\n\n${description}\n\n街を歩いて、しるしを刻む旅が始まります。`;
};

export default function JoinAnimation({ onComplete, routeTitle, routeDescription, routePrologue }: JoinAnimationProps) {
  const [step, setStep] = useState<'intro' | 'prologue'>('intro');
  const [isLeaving, setIsLeaving] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startLeave = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    // 画面遷移アニメーション(0.65s)完了後に遷移する
    setTimeout(() => {
      onComplete();
    }, 650);
  };

  const handleTap = () => {
    if (isLeaving) return;
    
    if (step === 'intro') {
      // イントロ中のタップなら、プロローグへ移行
      setStep('prologue');
      // 自動遷移タイマーを再設定（プロローグをゆっくり読めるようにタップ後さらに6.0秒待つ）
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        startLeave();
      }, 6000);
    } else {
      // プロローグ中のタップなら即座に遷移
      if (timerRef.current) clearTimeout(timerRef.current);
      startLeave();
    }
  };

  useEffect(() => {
    // 1. 4.0秒後に自動的にプロローグへ切り替え（イントロ時間を延長しプレミアム感を向上）
    const introTimer = setTimeout(() => {
      setStep('prologue');
    }, 4000);

    // 2. 10.0秒後に自動的に次の画面へ遷移する
    timerRef.current = setTimeout(() => {
      startLeave();
    }, 10000);

    return () => {
      clearTimeout(introTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const prologueText = getRoutePrologue(routeTitle, routeDescription, routePrologue);
  const paragraphs = prologueText.split('\n\n');

  return (
    <div 
      className={`${styles.shuinJoinAnimation} ${isLeaving ? styles.isLeaving : ""}`}
      onClick={handleTap}
    >
      <div className={styles.washiBg}></div>

      {step === 'intro' ? (
        <>
          <div className={`${styles.route} ${styles.route1}`}></div>
          <div className={`${styles.route} ${styles.route2}`}></div>
          <div className={`${styles.route} ${styles.route3}`}></div>

          <div className={styles.petals}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.stampWrap}>
            <div className={styles.stampMark}>
              <div className={styles.stampDot}></div>
            </div>
            <div className={styles.stampShadow}></div>
          </div>

          <div className={styles.copy}>
            <p className={styles.sub}>ルートに参加しました</p>
            <h1>さあ、めぐりに行こう</h1>
          </div>
        </>
      ) : (
        <div className={styles.prologueContainer}>
          {paragraphs.map((p, idx) => (
            <p 
              key={idx} 
              className={styles.prologueParagraph}
              style={{ animationDelay: `${idx * 0.9}s` }}
            >
              {p.split('\n').map((line, lIdx) => (
                <span key={lIdx} style={{ display: "block", marginBottom: "4px" }}>{line}</span>
              ))}
            </p>
          ))}
        </div>
      )}

      {/* 「行き先を選ぶ」ナビは常に全画面の最下部に表示。プロローグ時は文字被り防止のため遅延フェードインさせます */}
      <div className={`${styles.nextHint} ${step === 'prologue' ? styles.prologueHint : ""}`}>
        <span></span>
        行き先を選ぶ
      </div>
    </div>
  );
}
