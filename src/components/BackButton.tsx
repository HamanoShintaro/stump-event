"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  /** 指定された場合、router.back() ではなくこのパスへ固定遷移します */
  href?: string;
}

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  background: "transparent",
  border: "none",
  color: "var(--text-color)",
  fontWeight: "700",
  cursor: "pointer",
  padding: "8px 0",
  textDecoration: "none",
} as const;

export default function BackButton({ href }: BackButtonProps) {
  const router = useRouter();

  if (href) {
    return (
      <Link href={href} style={buttonStyle}>
        <ChevronLeft size={20} />
        <span>戻る</span>
      </Link>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      style={buttonStyle}
    >
      <ChevronLeft size={20} />
      <span>戻る</span>
    </button>
  );
}
