"use client";

import { Search } from "lucide-react";
import styles from "@/app/page.module.css";

export default function ClientSearchButton() {
  return (
    <button 
      onClick={() => window.dispatchEvent(new Event('openSearchModal'))}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", border: "none", background: "none", cursor: "pointer", padding: 0, outline: "none" }}
    >
      <div className={styles.actionBtn} style={{ color: "var(--primary-color)" }}>
        <Search size={36} />
      </div>
      <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--text-color)", fontFamily: "inherit" }}>検索して探す</span>
    </button>
  );
}
