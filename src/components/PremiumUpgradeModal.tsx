"use client";

import React from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Camera, Users, Sparkles, Check, X } from "lucide-react";
import {
  FREE_PHOTO_LIMIT,
  PREMIUM_MONTHLY_PRICE_JPY,
} from "@/hooks/useSubscription";

export type UpgradeTriggerReason =
  | "photo_limit"
  | "companion_host"
  | "general";

interface PremiumUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => Promise<boolean | void>;
  isProcessing?: boolean;
  reason?: UpgradeTriggerReason;
  usedPhotoCount?: number;
}

export default function PremiumUpgradeModal({
  isOpen,
  onClose,
  onUpgrade,
  isProcessing = false,
  reason = "general",
  usedPhotoCount = 0,
}: PremiumUpgradeModalProps) {
  if (!isOpen || typeof document === "undefined") return null;

  const headerBadge =
    reason === "photo_limit"
      ? `無料の写真記録枠（${FREE_PHOTO_LIMIT}枚）に達しました`
      : reason === "companion_host"
        ? "「連れ立ち」の主催（招待コード発行）はプレミアム機能です"
        : "SHUIN プレミアムのご案内";

  const leadCopy =
    reason === "photo_limit"
      ? `これまでに${usedPhotoCount}枚の素敵な風景をSHUIN帳に刻まれました。11枚目以降も制限なく写真を残し、いつでも見返すには「SHUIN プレミアム」へお進みください。`
      : reason === "companion_host"
        ? "友人や大切な人と一緒に同じルートを巡る「連れ立ち」は、誘う人（ホスト1名）がプレミアム会員であれば、招待される同行者は無料で合流・写真共有をお楽しみいただけます。"
        : "街を歩いて刻んだしるしと風景を、枚数制限なく記録し、大切な人との「連れ立ち」をいつでも主催できる特別なプランです。";

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.62)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100000,
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          border: "2px solid var(--accent-color)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "440px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            height: "6px",
            backgroundColor: "var(--accent-color)",
          }}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--text-color)",
            opacity: 0.65,
            padding: "4px",
          }}
        >
          <X size={20} />
        </button>

        <div style={{ padding: "24px 22px 26px" }}>
          <div style={{ textAlign: "center", marginBottom: "18px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "4px 12px",
                borderRadius: "999px",
                backgroundColor: "rgba(201, 168, 76, 0.16)",
                border: "1px solid var(--accent-color)",
                color: "var(--primary-color)",
                fontSize: "var(--font-size-small)",
                fontWeight: 800,
                marginBottom: "10px",
              }}
            >
              <Sparkles size={13} />
              <span>{headerBadge}</span>
            </span>

            <h2
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: "0 0 8px 0",
              }}
            >
              SHUIN プレミアム
            </h2>

            <p
              style={{
                fontSize: "var(--font-size-body)",
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.88,
                textAlign: "left",
              }}
            >
              {leadCopy}
            </p>
          </div>

          {/* 特典一覧 */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.78)",
              border: "1px solid rgba(201, 168, 76, 0.45)",
              borderRadius: "14px",
              padding: "16px",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(199, 68, 46, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Camera size={17} color="var(--primary-color)" />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    color: "var(--text-color)",
                    marginBottom: "2px",
                  }}
                >
                  1. 思い出の写真記録・見返しが無制限に
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    lineHeight: 1.5,
                    opacity: 0.8,
                  }}
                >
                  無料プランの累計{FREE_PHOTO_LIMIT}枚（約2ルート分）の上限を解放。すべてのスポットで記憶のトリガーとなる1枚を刻み、SHUIN帳でいつでも振り返れます。
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(199, 68, 46, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Users size={17} color="var(--primary-color)" />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    color: "var(--text-color)",
                    marginBottom: "2px",
                  }}
                >
                  2. 「連れ立ち」の招待コード発行（幹事・ホスト枠）
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    lineHeight: 1.5,
                    opacity: 0.8,
                  }}
                >
                  あなたが招待コードを発行すれば、招待された友人・パートナーは無料プランのまま合流でき、同行中の写真記録も一緒に楽しめます。
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(201, 168, 76, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Check size={17} color="var(--primary-color)" />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    color: "var(--text-color)",
                    marginBottom: "2px",
                  }}
                >
                  3. いつでも解約可能・刻んだ記録は消えません
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    lineHeight: 1.5,
                    opacity: 0.8,
                  }}
                >
                  設定画面からワンタップでいつでも解約でき、解約後もそれまでに記録したSHUINや写真が消えることはありません。
                </div>
              </div>
            </div>
          </div>

          {/* 料金表示 */}
          <div
            style={{
              textAlign: "center",
              padding: "12px",
              borderRadius: "12px",
              backgroundColor: "rgba(201, 168, 76, 0.1)",
              border: "1px dashed var(--accent-color)",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                fontSize: "var(--font-size-small)",
                fontWeight: 700,
                opacity: 0.8,
              }}
            >
              月額プラン（自動更新・いつでも解約可）
            </div>
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: 900,
                color: "var(--primary-color)",
                marginTop: "2px",
              }}
            >
              ¥{PREMIUM_MONTHLY_PRICE_JPY.toLocaleString()}
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--text-color)",
                }}
              >
                {" "}
                / 月（税込）
              </span>
            </div>
          </div>

          {/* アクションボタン */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              type="button"
              disabled={isProcessing}
              onClick={async () => {
                const ok = await onUpgrade();
                if (ok) onClose();
              }}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "14px 18px",
                fontSize: "1rem",
                fontWeight: 800,
                cursor: isProcessing ? "wait" : "pointer",
                opacity: isProcessing ? 0.7 : 1,
              }}
            >
              {isProcessing
                ? "決済画面を準備中..."
                : "SHUIN プレミアムをはじめる"}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              style={{
                width: "100%",
                padding: "11px 16px",
                fontSize: "0.88rem",
                fontWeight: 700,
              }}
            >
              今は無料プランのまま続ける
            </button>
          </div>

          {/* 規約・特商法リンク */}
          <div
            style={{
              marginTop: "14px",
              textAlign: "center",
              fontSize: "var(--font-size-small)",
              opacity: 0.75,
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/tokushoho"
              onClick={onClose}
              style={{ color: "var(--text-color)", textDecoration: "underline" }}
            >
              特定商取引法に基づく表記
            </Link>
            <Link
              href="/terms"
              onClick={onClose}
              style={{ color: "var(--text-color)", textDecoration: "underline" }}
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              onClick={onClose}
              style={{ color: "var(--text-color)", textDecoration: "underline" }}
            >
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
