"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "transparent",
        border: "none",
        color: "var(--text-color)",
        fontWeight: "700",
        cursor: "pointer",
        padding: "8px 0"
      }}
    >
      <ChevronLeft size={20} />
      <span>戻る</span>
    </button>
  );
}
