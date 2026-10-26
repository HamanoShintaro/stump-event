"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCustomAlert } from "@/hooks/useCustomAlert";

export type InquiryCategory =
  | "general"
  | "premium"
  | "bug"
  | "withdraw"
  | "legal";

export const INQUIRY_CATEGORIES: { value: InquiryCategory; label: string }[] = [
  { value: "general", label: "サービス・ルートのご利用について" },
  { value: "premium", label: "SHUIN プレミアム・決済・解約について" },
  { value: "bug", label: "不具合・現地での押印に関するご報告" },
  { value: "withdraw", label: "退会（アカウント削除）のご依頼" },
  { value: "legal", label: "特定商取引法に基づく開示請求・その他" },
];

export function useContactForm(initialCategory?: string | null) {
  const { user } = useAuth();
  const { showAlert } = useCustomAlert();

  const resolvedInitCategory: InquiryCategory = INQUIRY_CATEGORIES.some(
    (c) => c.value === initialCategory
  )
    ? (initialCategory as InquiryCategory)
    : "general";

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [category, setCategory] = useState<InquiryCategory>(resolvedInitCategory);
  const [message, setMessage] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // ログイン済みの場合はユーザー名とメールアドレスを初期補完
  useEffect(() => {
    if (!user) return;
    const defaultName =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      (user.email ? user.email.split("@")[0] : "");
    if (defaultName) {
      setName((prev) => (prev ? prev : String(defaultName)));
    }
    if (user.email) {
      setEmail((prev) => (prev ? prev : String(user.email)));
    }
  }, [user]);

  useEffect(() => {
    if (
      initialCategory &&
      INQUIRY_CATEGORIES.some((c) => c.value === initialCategory)
    ) {
      setCategory(initialCategory as InquiryCategory);
    }
  }, [initialCategory]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (submitting) return;

      if (!name.trim()) {
        await showAlert({
          text: "お名前（または表示名）を入力してください。",
          okText: "確認",
        });
        return;
      }

      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        await showAlert({
          text: "返信先となる正しいメールアドレスを入力してください。",
          okText: "確認",
        });
        return;
      }

      if (!message.trim() || message.trim().length < 5) {
        await showAlert({
          text: "お問い合わせ内容を5文字以上で入力してください。",
          okText: "確認",
        });
        return;
      }

      setSubmitting(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user?.id || null,
            name: name.trim(),
            email: email.trim(),
            category,
            message: message.trim(),
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.ok) {
          await showAlert({
            text: data.error || "送信に失敗しました。時間をおいて再度お試しください。",
            okText: "確認",
          });
          return;
        }

        setSubmitted(true);
        setMessage("");
      } catch (err: any) {
        await showAlert({
          text: `送信中にエラーが発生しました: ${err?.message || ""}`,
          okText: "確認",
        });
      } finally {
        setSubmitting(false);
      }
    },
    [submitting, name, email, category, message, user?.id, showAlert]
  );

  const resetForm = useCallback(() => {
    setSubmitted(false);
    setMessage("");
  }, []);

  return {
    name,
    setName,
    email,
    setEmail,
    category,
    setCategory,
    message,
    setMessage,
    submitting,
    submitted,
    handleSubmit,
    resetForm,
  };
}
