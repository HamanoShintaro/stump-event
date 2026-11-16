"use client";

import { Search } from "lucide-react";
import styles from "@/app/page.module.css";

export default function ClientSearchButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("openSearchModal"))}
      aria-label="ルートを検索して探す"
      className={styles.heroActionBtnWrapper}
      style={{ border: "none", background: "none", cursor: "pointer", padding: 0, outline: "none" }}
    >
      <div className={styles.heroActionBtn}>
        <Search size={36} strokeWidth={1.5} />
      </div>
      <span className={styles.heroActionText}>検索</span>
    </button>
  );
}
