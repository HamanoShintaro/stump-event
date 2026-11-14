"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { triggerNavigationLoading } from "@/hooks/useNavigationLoading";

interface BackButtonProps {
  /** 指定された場合、router.back() ではなくこのパスへ固定遷移します */
  href?: string;
}

const buttonStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "3px",
  background: "transparent",
  border: "none",
  color: "var(--text-color)",
  fontWeight: "700",
  fontSize: "0.9rem",
  cursor: "pointer",
  padding: "8px 4px 8px 0",
  textDecoration: "none",
  whiteSpace: "nowrap",
  flexShrink: 0,
} as const;

export default function BackButton({ href }: BackButtonProps) {
  const router = useRouter();

  if (href) {
    return (
      <Link
        href={href}
        onClick={() => triggerNavigationLoading(href)}
        style={buttonStyle}
      >
        <ChevronLeft size={20} />
        <span>戻る</span>
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        triggerNavigationLoading();
        router.back();
      }}
      style={buttonStyle}
    >
      <ChevronLeft size={20} />
      <span>戻る</span>
    </button>
  );
}
