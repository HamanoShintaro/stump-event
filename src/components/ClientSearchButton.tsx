"use client";

import { Search } from "lucide-react";
import styles from "@/app/page.module.css";

export default function ClientSearchButton() {
  return (
    <button 
      onClick={() => window.dispatchEvent(new Event('openSearchModal'))}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", border: "none", background: "none", cursor: "pointer", padding: 0, outline: "none" }}
    >
      <div className={styles.heroActionBtn}>
        <Search size={56} strokeWidth={1.5} />
      </div>
      <span className={styles.heroActionText}>検索して探す</span>
    </button>
  );
}
