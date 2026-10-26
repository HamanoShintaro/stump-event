"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import HeaderNav from "@/components/HeaderNav";
import {
  useContactForm,
  INQUIRY_CATEGORIES,
  InquiryCategory,
} from "@/hooks/useContactForm";
import { CheckCircle2, Send, HelpCircle } from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const {
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
  } = useContactForm(initialCategory);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.14)",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    fontSize: "var(--font-size-body)",
    fontFamily: "var(--font-family)",
    outline: "none",
  };

  return (
    <div
      style={{
        background: "var(--card-bg)",
        padding: "28px 24px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        border: "1px solid rgba(201, 168, 76, 0.35)",
      }}
    >
      {submitted ? (
        <div
          style={{
            textAlign: "center",
            padding: "28px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "rgba(199, 68, 46, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircle2 size={30} color="var(--primary-color)" />
          </div>

          <h2
            style={{
              fontSize: "var(--font-size-h2)",
              fontWeight: 800,
              color: "var(--text-color)",
              margin: 0,
            }}
          >
            お問い合わせを受け付けました
          </h2>

          <p
            style={{
              fontSize: "var(--font-size-body)",
              color: "var(--text-color)",
              opacity: 0.85,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "460px",
            }}
          >
            ご連絡いただきありがとうございます。内容を確認のうえ、ご入力いただいたメールアドレス宛に運営事務局より順次ご返信いたします。
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "12px",
            }}
          >
            <button
              type="button"
              onClick={resetForm}
              className="btn-secondary"
              style={{ padding: "10px 18px", fontSize: "0.88rem" }}
            >
              別のお問い合わせを送る
            </button>
            <Link
              href="/"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "0.88rem",
                textDecoration: "none",
              }}
            >
              トップページへ戻る
            </Link>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "var(--font-size-body)",
              lineHeight: 1.7,
              color: "var(--text-color)",
              opacity: 0.88,
            }}
          >
            SHUIN まちのしるし に関するご質問、ご要望、SHUIN プレミアムのご契約や退会手続きに関するお問い合わせは、下記フォームよりお送りください。
          </p>

          <div
            style={{
              padding: "12px 14px",
              borderRadius: "10px",
              backgroundColor: "rgba(201, 168, 76, 0.1)",
              border: "1px dashed var(--accent-color)",
              fontSize: "var(--font-size-small)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 700 }}>
              <HelpCircle size={15} color="var(--primary-color)" />
              <span>現地での押印や使い方のよくある質問は「街歩きの手引き」でもご確認いただけます</span>
            </span>
            <Link
              href="/guide"
              style={{
                color: "var(--primary-color)",
                fontWeight: 800,
                textDecoration: "underline",
              }}
            >
              手引きを見る →
            </Link>
          </div>

          <div>
            <label
              htmlFor="contact-category"
              style={{
                display: "block",
                fontWeight: 800,
                fontSize: "0.88rem",
                marginBottom: "6px",
                color: "var(--text-color)",
              }}
            >
              お問い合わせ種別 <span style={{ color: "var(--primary-color)" }}>*</span>
            </label>
            <select
              id="contact-category"
              value={category}
              onChange={(e) => setCategory(e.target.value as InquiryCategory)}
              disabled={submitting}
              style={inputStyle}
            >
              {INQUIRY_CATEGORIES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-name"
              style={{
                display: "block",
                fontWeight: 800,
                fontSize: "0.88rem",
                marginBottom: "6px",
                color: "var(--text-color)",
              }}
            >
              お名前（または表示名） <span style={{ color: "var(--primary-color)" }}>*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              maxLength={80}
              placeholder="例：山田 太郎"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
              style={inputStyle}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              style={{
                display: "block",
                fontWeight: 800,
                fontSize: "0.88rem",
                marginBottom: "6px",
                color: "var(--text-color)",
              }}
            >
              返信用メールアドレス <span style={{ color: "var(--primary-color)" }}>*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              maxLength={200}
              placeholder="例：your-email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              style={inputStyle}
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              style={{
                display: "block",
                fontWeight: 800,
                fontSize: "0.88rem",
                marginBottom: "6px",
                color: "var(--text-color)",
              }}
            >
              お問い合わせ内容 <span style={{ color: "var(--primary-color)" }}>*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={6}
              maxLength={3000}
              placeholder="ご質問やお困りの内容を詳しくご記入ください（特定のルートやスポットに関する場合は、名称もあわせてご記入いただくとスムーズです）。"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={submitting}
              style={{
                ...inputStyle,
                resize: "vertical",
                lineHeight: 1.65,
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary"
            style={{
              width: "100%",
              padding: "14px 20px",
              fontSize: "1rem",
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: submitting ? "wait" : "pointer",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            <Send size={17} />
            <span>{submitting ? "送信中..." : "お問い合わせを送信する"}</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="container">
      <header
        style={{
          padding: "20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" className="nav-logo">
          <img
            src="/shuin-logo-horizontal.png"
            alt="SHUIN まちのしるし"
            style={{ height: "32px", display: "block", objectFit: "contain" }}
          />
        </Link>
        <HeaderNav />
      </header>

      <main
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "16px 0 60px",
          color: "var(--text-color)",
        }}
      >
        <h1
          style={{
            fontSize: "var(--font-size-h1)",
            fontWeight: 800,
            marginBottom: "20px",
            color: "var(--primary-color)",
          }}
        >
          お問い合わせ
        </h1>

        <Suspense
          fallback={
            <div
              style={{
                background: "var(--card-bg)",
                padding: "28px 24px",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              読み込み中...
            </div>
          }
        >
          <ContactFormContent />
        </Suspense>
      </main>
    </div>
  );
}
