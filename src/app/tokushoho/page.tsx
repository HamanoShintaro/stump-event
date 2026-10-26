import React from "react";
import Link from "next/link";
import { PREMIUM_MONTHLY_PRICE_JPY, FREE_PHOTO_LIMIT } from "@/hooks/useSubscription";

interface LegalItem {
  label: string;
  value: React.ReactNode;
}

export default function TokushohoPage() {
  const sellerName =
    process.env.NEXT_PUBLIC_LEGAL_SELLER_NAME || "SHUIN まちのしるし 運営事務局";
  const representative =
    process.env.NEXT_PUBLIC_LEGAL_REPRESENTATIVE ||
    "請求があった場合には遅滞なく開示いたします";
  const address =
    process.env.NEXT_PUBLIC_LEGAL_ADDRESS ||
    "請求があった場合には遅滞なく開示いたします";
  const phone =
    process.env.NEXT_PUBLIC_LEGAL_PHONE ||
    "請求があった場合には遅滞なく開示いたします（※お問い合わせは専用フォームにて承っております）";

  const items: LegalItem[] = [
    {
      label: "販売事業者名（屋号）",
      value: sellerName,
    },
    {
      label: "運営統括責任者",
      value: representative,
    },
    {
      label: "所在地",
      value: address,
    },
    {
      label: "電話番号",
      value: phone,
    },
    {
      label: "連絡先（お問い合わせ窓口）",
      value: (
        <div>
          <div>
            当サービスの{" "}
            <Link
              href="/contact?category=legal"
              style={{
                color: "var(--primary-color)",
                fontWeight: 800,
                textDecoration: "underline",
              }}
            >
              お問い合わせフォーム
            </Link>{" "}
            よりご連絡ください。
          </div>
          <div
            style={{
              fontSize: "var(--font-size-small)",
              opacity: 0.8,
              marginTop: "4px",
            }}
          >
            ※ 請求があった場合には遅滞なく電子メールアドレスを開示いたします。
          </div>
        </div>
      ),
    },
    {
      label: "販売価格",
      value: (
        <div>
          <div>
            <strong>SHUIN プレミアム（月額プラン）</strong>：月額{" "}
            {PREMIUM_MONTHLY_PRICE_JPY.toLocaleString()}円（税込）
          </div>
          <div style={{ fontSize: "var(--font-size-small)", opacity: 0.8, marginTop: "4px" }}>
            ※ 基本機能（ルートの閲覧・参加、現地での押印・SHUIN収集、累計{FREE_PHOTO_LIMIT}枚までの思い出写真記録、招待コード入力による連れ立ちへの合流）は無料でご利用いただけます。
          </div>
        </div>
      ),
    },
    {
      label: "商品代金以外の必要料金",
      value:
        "サイトの閲覧、コンテンツのダウンロード、現地での位置情報（GPS）通信および写真のアップロード等に必要となるインターネット接続料金・通信料金は、お客様のご負担となります。",
    },
    {
      label: "お支払方法",
      value:
        "クレジットカード決済（Visa / Mastercard / American Express / JCB / Diners Club / Discover）、Apple Pay、Google Pay（決済代行会社：Stripe, Inc.）",
    },
    {
      label: "お支払時期",
      value:
        "初回お申し込み時に即時決済されます。以降はご契約更新日（毎月同日）に自動的に決済されます。",
    },
    {
      label: "役務（サービス）の提供時期",
      value:
        "決済完了後、ただちに「SHUIN プレミアム」の全機能（思い出写真の無制限記録・見返し、連れ立ち招待コードの発行・主催機能）をご利用いただけます。",
    },
    {
      label: "返品・交換・キャンセルについて",
      value:
        "デジタルコンテンツおよびオンラインサービスの性質上、決済完了後の返品・返金・日割り計算による返金には応じられません。あらかじめご了承ください。",
    },
    {
      label: "中途解約（サブスクリプションの停止）について",
      value:
        "マイページの「設定」画面内のプラン管理メニューより、24時間いつでも解約手続きが可能です。次回更新日の前日までに解約手続きを完了された場合、次回以降の請求は発生いたしません。なお、解約後もそれまでに獲得された押印（SHUIN）や記録済みの思い出データが削除されることはありません。",
    },
    {
      label: "動作環境",
      value:
        "位置情報（GPS）機能およびカメラ機能を備えたスマートフォン・タブレット端末の最新ブラウザ（iOS Safari / Android Chrome 等）を推奨いたします。",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "80px 20px 40px",
        color: "var(--text-color)",
      }}
    >
      <h1
        style={{
          fontSize: "var(--font-size-h1)",
          fontWeight: 800,
          marginBottom: "24px",
          color: "var(--primary-color)",
        }}
      >
        特定商取引法に基づく表記
      </h1>

      <div
        style={{
          background: "var(--card-bg)",
          padding: "28px 24px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          lineHeight: 1.75,
        }}
      >
        <p style={{ marginBottom: "24px", fontSize: "var(--font-size-body)" }}>
          「SHUIN まちのしるし」（以下、「当サービス」といいます。）における有料プラン（SHUIN プレミアム）のご提供にあたり、特定商取引法第11条に基づき以下のとおり表記いたします。
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          }}
        >
          {items.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                padding: "16px 0",
                borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  color: "var(--primary-color)",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "var(--font-size-body)",
                  color: "var(--text-color)",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/settings"
            className="btn-secondary"
            style={{
              padding: "10px 20px",
              fontSize: "0.88rem",
              textDecoration: "none",
            }}
          >
            設定画面へ戻る
          </Link>
          <Link
            href="/"
            className="btn-primary"
            style={{
              padding: "10px 20px",
              fontSize: "0.88rem",
              textDecoration: "none",
            }}
          >
            トップページへ
          </Link>
        </div>
      </div>
    </div>
  );
}
