"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Camera, Users, Sparkles, Check, X, ShieldCheck, ArrowLeft } from "lucide-react";
import {
  FREE_PHOTO_LIMIT,
  PREMIUM_MONTHLY_PRICE_JPY,
} from "@/hooks/useSubscription";
import { useEmbeddedCheckout } from "@/hooks/useEmbeddedCheckout";

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
  const {
    isEmbeddedCheckoutActive,
    mountingCheckout,
    checkoutError,
    containerRef,
    cancelEmbeddedCheckout,
  } = useEmbeddedCheckout(isOpen, onClose);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  const contextNotice =
    reason === "photo_limit"
      ? `無料プランの写真記録枠（${FREE_PHOTO_LIMIT}枚）に達しました（現在 ${usedPhotoCount}枚 記録済み）`
      : reason === "companion_host"
        ? "「連れ立ち」の招待コード発行（主催）はプレミアム特典です"
        : null;

  const leadCopy =
    reason === "photo_limit"
      ? `これまでに${usedPhotoCount}枚の素敵な風景をSHUIN帳に刻まれました。11枚目以降も枚数を気にせず写真を残し、いつでも見返すには「SHUIN プレミアム」へお進みください。`
      : reason === "companion_host"
        ? "友人や大切な人と一緒に同じルートを巡る「連れ立ち」は、誘う人（ホスト1名）がプレミアム会員であれば、招待される同行者は無料プランのまま合流・写真共有をお楽しみいただけます。"
        : "街を歩いて刻んだ押印と風景写真を枚数制限なく綴じ込み、大切な人との「連れ立ち」をいつでも主催できる特別な一冊です。";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="shuin-premium-modal-title"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(20, 18, 15, 0.72)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100000,
        padding: "14px",
        overscrollBehavior: "contain",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          border: "1.5px solid var(--accent-color)",
          borderRadius: "22px",
          width: "100%",
          maxWidth: isEmbeddedCheckoutActive ? "540px" : "500px",
          maxHeight: "92dvh",
          overflowY: "auto",
          boxShadow:
            "0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(201, 168, 76, 0.25) inset",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ① ヒーローアートワークヘッダー（OpenAI生成の特製SHUIN帳＆四季の街歩き写真） */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: isEmbeddedCheckoutActive ? "124px" : "224px",
            overflow: "hidden",
            backgroundColor: "var(--text-color)",
            transition: "height 0.25s ease",
          }}
        >
          <img
            src="/images/premium-hero.png"
            alt="箔押しの特製SHUIN帳と四季の街歩き写真"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "62% center",
              display: "block",
            }}
          />

          {/* 視認性を高める墨色＆和紙グラデーションオーバーレイ */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(28, 25, 21, 0.18) 0%, rgba(28, 25, 21, 0.55) 55%, rgba(28, 25, 21, 0.88) 100%), linear-gradient(90deg, rgba(28, 25, 21, 0.72) 0%, rgba(28, 25, 21, 0.25) 60%, rgba(28, 25, 21, 0.1) 100%)",
            }}
          />

          {/* 黄金のトップ飾りライン */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background:
                "linear-gradient(90deg, var(--accent-color), var(--primary-color), var(--accent-color))",
            }}
          />

          {/* 閉じるボタン（写真の明暗に左右されない40px円形ボタン） */}
          <button
            type="button"
            onClick={onClose}
            aria-label="閉じる"
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "rgba(28, 25, 21, 0.65)",
              border: "1px solid rgba(201, 168, 76, 0.45)",
              cursor: "pointer",
              color: "var(--bg-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <X size={18} />
          </button>

          {/* ヒーロー左下の箔押し風バッジ＆メインコピー */}
          <div
            style={{
              position: "absolute",
              left: "22px",
              right: "22px",
              bottom: "18px",
              color: "var(--bg-color)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "999px",
                backgroundColor: "rgba(28, 25, 21, 0.72)",
                border: "1px solid var(--accent-color)",
                color: "var(--accent-color)",
                fontSize: "var(--font-size-small)",
                fontWeight: 800,
                letterSpacing: "0.08em",
                marginBottom: "10px",
              }}
            >
              <Sparkles size={12} />
              <span>SHUIN PREMIUM</span>
            </div>

            <h2
              id="shuin-premium-modal-title"
              style={{
                fontSize: "1.45rem",
                fontWeight: 900,
                lineHeight: 1.35,
                margin: "0 0 4px 0",
                letterSpacing: "0.03em",
                color: "var(--bg-color)",
                textShadow: "0 2px 12px rgba(0, 0, 0, 0.5)",
              }}
            >
              歩いた日々を、一冊の宝物に。
            </h2>
            <div
              style={{
                fontSize: "var(--font-size-small)",
                opacity: 0.9,
                letterSpacing: "0.04em",
              }}
            >
              記憶の写真と、大切な人との街歩きを綴じる特別仕立て
            </div>
          </div>
        </div>

        {/* 本文エリア */}
        <div style={{ padding: "20px 20px 24px" }}>
          {isEmbeddedCheckoutActive ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <button
                  type="button"
                  onClick={cancelEmbeddedCheckout}
                  className="btn-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 12px",
                    fontSize: "var(--font-size-small)",
                    fontWeight: 800,
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>プラン詳細へ戻る</span>
                </button>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "var(--font-size-small)",
                    fontWeight: 700,
                    opacity: 0.8,
                  }}
                >
                  <ShieldCheck size={14} color="var(--primary-color)" />
                  <span>Stripe 暗号化決済</span>
                </div>
              </div>

              {checkoutError && (
                <div
                  style={{
                    padding: "12px 14px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(199, 68, 46, 0.08)",
                    border: "1px solid rgba(199, 68, 46, 0.3)",
                    color: "var(--primary-color)",
                    fontSize: "var(--font-size-small)",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  {checkoutError}
                </div>
              )}

              {mountingCheckout && (
                <div
                  style={{
                    padding: "28px 16px",
                    textAlign: "center",
                    fontSize: "var(--font-size-small)",
                    fontWeight: 700,
                    opacity: 0.75,
                  }}
                >
                  決済フォームを読み込んでいます...
                </div>
              )}

              <div
                ref={containerRef}
                style={{
                  minHeight: "360px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  backgroundColor: "var(--bg-color)",
                  border: "1px solid rgba(201, 168, 76, 0.4)",
                }}
              />
            </div>
          ) : (
            <>
              {/* トリガー理由に応じたコンテキスト通知（写真上限到達時・連れ立ち主催時） */}
              {contextNotice && (
            <div
              style={{
                padding: "10px 14px",
                borderRadius: "10px",
                backgroundColor: "rgba(199, 68, 46, 0.08)",
                border: "1px solid rgba(199, 68, 46, 0.3)",
                color: "var(--primary-color)",
                fontSize: "var(--font-size-small)",
                fontWeight: 800,
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Sparkles size={15} style={{ flexShrink: 0 }} />
              <span>{contextNotice}</span>
            </div>
          )}

          {/* リード文 */}
          <p
            style={{
              fontSize: "var(--font-size-body)",
              lineHeight: 1.7,
              margin: "0 0 18px 0",
              opacity: 0.9,
            }}
          >
            {leadCopy}
          </p>

          {/* ② 2つの主要特典ビジュアルカード */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "18px",
            }}
          >
            {/* 特典1: 写真記録無制限 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                border: "1px solid rgba(201, 168, 76, 0.45)",
                borderRadius: "14px",
                padding: "15px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "var(--font-size-small)",
                    fontWeight: 800,
                    color: "var(--primary-color)",
                    marginBottom: "4px",
                  }}
                >
                  <Camera size={14} />
                  <span>特典 壱｜記憶のアルバム</span>
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: "0.98rem",
                    color: "var(--text-color)",
                    marginBottom: "5px",
                  }}
                >
                  思い出を、枚数を気にせず。
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    lineHeight: 1.55,
                    opacity: 0.84,
                  }}
                >
                  無料プランの累計{FREE_PHOTO_LIMIT}枚（約2ルート分）の上限を解放。訪れたすべてのスポットで心動いた風景を刻み、SHUIN帳でいつでも見返せます。
                </div>
              </div>

              {/* 右側のミニポラロイド重なりモチーフ */}
              <div
                aria-hidden="true"
                style={{
                  width: "66px",
                  height: "66px",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "6px",
                    left: "4px",
                    width: "46px",
                    height: "52px",
                    borderRadius: "6px",
                    backgroundColor: "var(--bg-color)",
                    border: "1px solid rgba(201, 168, 76, 0.55)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    transform: "rotate(-8deg)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "14px",
                    width: "48px",
                    height: "54px",
                    borderRadius: "6px",
                    backgroundColor: "var(--bg-color)",
                    border: "1.5px solid var(--accent-color)",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                    transform: "rotate(6deg)",
                    padding: "4px 4px 10px 4px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      borderRadius: "3px",
                      background:
                        "linear-gradient(135deg, rgba(201, 168, 76, 0.35), rgba(199, 68, 46, 0.28))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Camera size={16} color="var(--primary-color)" />
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      right: "5px",
                      fontSize: "9px",
                      fontWeight: 900,
                      color: "var(--primary-color)",
                    }}
                  >
                    ∞
                  </span>
                </div>
              </div>
            </div>

            {/* 特典2: 連れ立ちの招待コード発行 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                border: "1px solid rgba(201, 168, 76, 0.45)",
                borderRadius: "14px",
                padding: "15px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "var(--font-size-small)",
                    fontWeight: 800,
                    color: "var(--primary-color)",
                    marginBottom: "4px",
                  }}
                >
                  <Users size={14} />
                  <span>特典 弐｜連れ立ちの主催</span>
                </div>
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: "0.98rem",
                    color: "var(--text-color)",
                    marginBottom: "5px",
                  }}
                >
                  次のルートは、大切な人と。
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-small)",
                    lineHeight: 1.55,
                    opacity: 0.84,
                  }}
                >
                  「連れ立ち」の招待コードをいつでも発行可能。あなたが主催すれば、招待された友人やパートナーは無料プランのまま合流・写真共有を楽しめます。
                </div>
              </div>

              {/* 右側の2つの朱印を金の糸で結ぶモチーフ */}
              <div
                aria-hidden="true"
                style={{
                  width: "66px",
                  height: "66px",
                  position: "relative",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "34px",
                    height: "2px",
                    backgroundColor: "var(--accent-color)",
                    transform: "rotate(-18deg)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "4px",
                    bottom: "12px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(199, 68, 46, 0.14)",
                    border: "1.5px solid var(--primary-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 900,
                    color: "var(--primary-color)",
                  }}
                >
                  印
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "4px",
                    top: "12px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(201, 168, 76, 0.22)",
                    border: "1.5px solid var(--accent-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Users size={13} color="var(--primary-color)" />
                </div>
              </div>
            </div>
          </div>

          {/* ③ 旅人プラン（無料）との比較表 */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              border: "1px solid rgba(201, 168, 76, 0.35)",
              borderRadius: "12px",
              padding: "12px 14px",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                fontSize: "var(--font-size-small)",
                fontWeight: 800,
                color: "var(--text-color)",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>プラン機能比較</span>
              <span style={{ opacity: 0.7, fontWeight: 700 }}>
                すべて税込・いつでも切替可
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 0.9fr 1.1fr",
                fontSize: "var(--font-size-small)",
                borderTop: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  padding: "7px 4px",
                  fontWeight: 700,
                  opacity: 0.7,
                }}
              >
                機能
              </div>
              <div
                style={{
                  padding: "7px 4px",
                  fontWeight: 700,
                  textAlign: "center",
                  opacity: 0.75,
                }}
              >
                旅人（無料）
              </div>
              <div
                style={{
                  padding: "7px 4px",
                  fontWeight: 900,
                  textAlign: "center",
                  color: "var(--primary-color)",
                  backgroundColor: "rgba(201, 168, 76, 0.12)",
                  borderRadius: "6px 6px 0 0",
                }}
              >
                プレミアム
              </div>

              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  fontWeight: 700,
                }}
              >
                ルート巡り・押印
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                無制限
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                  fontWeight: 800,
                  backgroundColor: "rgba(201, 168, 76, 0.12)",
                }}
              >
                無制限
              </div>

              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  fontWeight: 700,
                }}
              >
                思い出の写真記録
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                累計{FREE_PHOTO_LIMIT}枚まで
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                  fontWeight: 900,
                  color: "var(--primary-color)",
                  backgroundColor: "rgba(201, 168, 76, 0.12)",
                }}
              >
                枚数無制限
              </div>

              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  fontWeight: 700,
                }}
              >
                連れ立ち（合流参加）
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                参加可
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                  fontWeight: 800,
                  backgroundColor: "rgba(201, 168, 76, 0.12)",
                }}
              >
                参加可
              </div>

              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  fontWeight: 700,
                }}
              >
                連れ立ち主催（招待発行）
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                  opacity: 0.55,
                }}
              >
                ―
              </div>
              <div
                style={{
                  padding: "8px 4px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                  fontWeight: 900,
                  color: "var(--primary-color)",
                  backgroundColor: "rgba(201, 168, 76, 0.12)",
                  borderRadius: "0 0 6px 6px",
                }}
              >
                何度でも発行可
              </div>
            </div>
          </div>

          {/* ④ 特別会員証風の価格＆アクション枠 */}
          <div
            style={{
              position: "relative",
              padding: "18px 18px 16px",
              borderRadius: "16px",
              background:
                "linear-gradient(145deg, rgba(255, 253, 249, 0.96), rgba(201, 168, 76, 0.14))",
              border: "1.5px solid var(--accent-color)",
              boxShadow:
                "0 8px 24px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(201, 168, 76, 0.15) inset",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                  color: "var(--primary-color)",
                }}
              >
                SHUIN PREMIUM PASS
              </span>
              <span
                style={{
                  fontSize: "var(--font-size-small)",
                  fontWeight: 700,
                  opacity: 0.78,
                }}
              >
                月額プラン（自動更新）
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "8px",
                paddingBottom: "12px",
                marginBottom: "12px",
                borderBottom: "1px dashed rgba(201, 168, 76, 0.6)",
              }}
            >
              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 800,
                  color: "var(--text-color)",
                }}
              >
                いつもの街歩きに、特別な一冊を。
              </div>
              <div>
                <span
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    color: "var(--text-color)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ¥{PREMIUM_MONTHLY_PRICE_JPY.toLocaleString()}
                </span>
                <span
                  style={{
                    fontSize: "var(--font-size-small)",
                    fontWeight: 700,
                    opacity: 0.8,
                  }}
                >
                  {" "}
                  / 月（税込）
                </span>
              </div>
            </div>

            {/* 安心事項 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                marginBottom: "14px",
                fontSize: "var(--font-size-small)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  opacity: 0.88,
                }}
              >
                <ShieldCheck
                  size={14}
                  color="var(--primary-color)"
                  style={{ flexShrink: 0 }}
                />
                <span>設定画面からワンタップでいつでも解約できます</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  opacity: 0.88,
                }}
              >
                <Check
                  size={14}
                  color="var(--primary-color)"
                  style={{ flexShrink: 0 }}
                />
                <span>
                  解約後も、それまでに刻んだSHUINや写真が消えることはありません
                </span>
              </div>
            </div>

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
                boxShadow: "0 6px 18px rgba(199, 68, 46, 0.28)",
              }}
            >
              {isProcessing
                ? "決済画面を準備中..."
                : "SHUIN プレミアムをはじめる"}
            </button>
          </div>

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
            今は旅人プラン（無料）のまま続ける
          </button>
            </>
          )}

          {/* 規約・特商法リンク */}
          <div
            style={{
              marginTop: "14px",
              textAlign: "center",
              fontSize: "var(--font-size-small)",
              opacity: 0.72,
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
