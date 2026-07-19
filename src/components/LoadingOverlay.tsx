"use client";

import { Loader2 } from "lucide-react";

export default function LoadingOverlay({ message = "読み込み中..." }: { message?: string }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(247, 243, 234, 0.75)", // 和紙カラーベースの半透明背景
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99999,
      pointerEvents: "all" // タップ等の操作を完全にブロック
    }}>
      <style>{`
        @keyframes loading-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "32px 48px",
        borderRadius: "24px",
        background: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
      }}>
        <Loader2 
          size={36} 
          color="var(--primary-color)" 
          style={{
            animation: "loading-spin 1s linear infinite"
          }} 
        />
        <span style={{
          color: "var(--text-color)",
          fontSize: "1rem",
          fontWeight: 600,
          letterSpacing: "0.05em"
        }}>
          {message}
        </span>
      </div>
    </div>
  );
}
