"use client";

import Link from "next/link";
import { useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import { Calendar, ChevronDown, ChevronUp, Compass, Award, Info } from "lucide-react";

interface NotificationItem {
  id: string;
  title: string;
  date: string;
  category: "route" | "system" | "event";
  categoryLabel: string;
  summary: string;
  content: string;
}

const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: "news-1",
    title: "【新ルート公開】「自由が丘で、\"自由\"の正体を探す」が登場しました",
    date: "2026/07/18",
    category: "route",
    categoryLabel: "新ルート",
    summary: "おしゃれな街・自由が丘の知られざる歴史や“自由”の由来を辿る散策ルートが公開されました。",
    content: "おしゃれな雑貨店や緑道、ヴェネツィアのような運河が点在する自由が丘。でも、この街はなぜ「自由」を名乗るのでしょうか？\n\n5つのスポットに隠された食い違う手がかりを集め、歩き終えたときに自分自身の答えを選び出す新しい散策体験をお楽しみください。\n\n所要時間: 60〜90分\nエリア: 東京都目黒区 自由が丘周辺"
  },
  {
    id: "news-2",
    title: "【機能更新】称号システムが新しくなりました！",
    date: "2026/07/18",
    category: "system",
    categoryLabel: "アップデート",
    summary: "スポットごとの称号を廃止し、地域・路線・都道府県・印目・一般をベースにした15段階のレベルアップ称号が導入されました。",
    content: "日頃よりSHUINをご利用いただきありがとうございます。\n\nより散策のやりがいを感じていただけるよう、称号システムを大幅に刷新しました。\n\n■ 変更点\n・スポット来訪毎の称号を整理し、重複表示を廃止しました。\n・「目録 ➔ 免許 ➔ 皆伝」（それぞれ壱〜伍段階）の合計15段階にわたるレベル称号を追加しました。\n・エリア、路線沿線、都道府県、印目（テーマ）、一般の5大カテゴリに分けて称号一覧を美しく表示するようになりました。\n\nマイページの「実績」またはヘッダーメニューの「称号」から現在の境地を確認してみましょう！"
  },
  {
    id: "news-3",
    title: "【イベント】季節限定の称号がもらえる「盛夏の探索イベント」が開催中",
    date: "2026/07/15",
    category: "event",
    categoryLabel: "イベント",
    summary: "7/20〜8/20の期間中、スポットに押印（来訪）すると特別な称号「盛夏の踏破者」を獲得できます。",
    content: "夏の強い日差しのなか、街に秘められたしるしを探しに出かけませんか？\n\n下記の期間中、いずれかのスポットを訪れて押印を刻むと、季節限定の称号『盛夏の踏破者』を授かることができます。\n\n■ 開催期間: 2026年7月20日 〜 8月20日\n暑さ対策を万全にして、無理のない範囲で風流な街歩きをお楽しみください。"
  }
];

export default function NotificationsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "route":
        return <Compass size={14} color="var(--primary-color)" />;
      case "system":
        return <Info size={14} color="#3AB7B7" />;
      case "event":
        return <Award size={14} color="var(--accent-color, #C9A84C)" />;
      default:
        return <Info size={14} color="#888" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "route":
        return "rgba(217, 101, 91, 0.1)";
      case "system":
        return "rgba(58, 183, 183, 0.1)";
      case "event":
        return "rgba(201, 168, 76, 0.1)";
      default:
        return "rgba(0, 0, 0, 0.05)";
    }
  };

  const getCategoryTextColor = (category: string) => {
    switch (category) {
      case "route":
        return "var(--primary-color)";
      case "system":
        return "#3AB7B7";
      case "event":
        return "var(--accent-color, #C9A84C)";
      default:
        return "#888";
    }
  };

  return (
    <div className="container">
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/shuin-logo-horizontal.png" alt="SHUIN まちのしるし" style={{ height: "32px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>

      <main style={{ maxWidth: "720px", margin: "0 auto", paddingBottom: "60px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-color)", margin: "12px 0 24px 0", letterSpacing: "1px" }}>
          街の便り
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {NOTIFICATIONS_DATA.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id}
                className="glass-card"
                onClick={() => toggleExpand(item.id)}
                style={{
                  border: isExpanded ? "1px solid var(--accent-color, #C9A84C)" : "1px solid #EBE5D9",
                  background: isExpanded ? "#121212" : "#FFFDF9",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  userSelect: "none"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px", flexWrap: "wrap" }}>
                      <span style={{ 
                        fontSize: "0.7rem", 
                        padding: "3px 8px", 
                        borderRadius: "6px", 
                        background: getCategoryColor(item.category),
                        color: getCategoryTextColor(item.category),
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}>
                        {getCategoryIcon(item.category)}
                        {item.categoryLabel}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "#A39687", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={12} /> {item.date}
                      </span>
                    </div>
                    
                    <h2 style={{ 
                      fontSize: "1.05rem", 
                      fontWeight: 800, 
                      color: isExpanded ? "var(--accent-color)" : "#5C4E43", 
                      margin: "0 0 6px 0",
                      lineHeight: "1.4"
                    }}>
                      {item.title}
                    </h2>
                    
                    {!isExpanded && (
                      <p style={{ fontSize: "0.85rem", color: "#8A7E72", margin: 0, lineHeight: "1.5" }}>
                        {item.summary}
                      </p>
                    )}
                  </div>
                  
                  <span style={{ color: "#B3A598", marginTop: "4px" }}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </div>

                {isExpanded && (
                  <div 
                    style={{ 
                      marginTop: "16px", 
                      paddingTop: "16px", 
                      borderTop: "1px dashed #EBE5D9",
                      fontSize: "0.88rem",
                      color: isExpanded ? "#E0D7CD" : "#5C4E43",
                      lineHeight: "1.7",
                      whiteSpace: "pre-line"
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
