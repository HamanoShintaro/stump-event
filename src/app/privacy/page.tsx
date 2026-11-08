import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { getSiteUrl } from "@/utils/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "SHUIN（まちのしるし）における個人情報・位置情報・写真データ等の取得、利用目的、安全管理措置に関するプライバシーポリシーです。",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "var(--font-size-h2)",
    fontWeight: 800,
    marginTop: "32px",
    marginBottom: "12px",
    color: "var(--primary-color)",
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: "18px",
    fontSize: "var(--font-size-body)",
  };

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
        プライバシーポリシー
      </h1>

      <div
        style={{
          background: "var(--card-bg)",
          padding: "28px 24px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          lineHeight: 1.8,
        }}
      >
        <p style={paragraphStyle}>
          「SHUIN まちのしるし」（以下、「当サービス」といいます。）は、本ウェブサイト上で提供する街歩き記録サービス（以下、「本サービス」といいます。）における、ユーザーの個人情報およびプライバシー情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </p>

        <h2 style={sectionTitleStyle}>第1条（取得する情報および取得方法）</h2>
        <div style={paragraphStyle}>
          当サービスは、本サービスの提供にあたり、以下の情報を適法かつ公正な手段により取得します。
          <ul style={{ paddingLeft: "22px", marginTop: "8px" }}>
            <li>
              <strong>アカウント情報</strong>：メールアドレス、表示名（ニックネーム）、プロフィール画像、外部認証（Googleログイン等）における識別子
            </li>
            <li>
              <strong>街歩き・押印の記録情報</strong>：訪れたスポットでの押印（SHUIN）日時、選択した回答、ユーザーがアップロードした思い出写真、ひとことメモ、連れ立ちグループへの参加履歴
            </li>
            <li>
              <strong>位置情報（GPS）</strong>：ユーザーが現地スポットで押印を行う際、または現在地周辺のルート・スポットをマップ上で確認する際にのみ、ブラウザの許可を得て現在地座標を取得します。アプリを閉じている間やバックグラウンドでの常時位置追跡は一切行いません。
            </li>
            <li>
              <strong>決済に関する情報（SHUIN プレミアムご利用時）</strong>：有料プランの決済は決済代行会社である{" "}
              <strong>Stripe, Inc.</strong>{" "}
              の暗号化システムを通じて直接処理されます。
              <strong>
                当サービスのサーバーがユーザーのクレジットカード番号やセキュリティコードを保持・保存することは一切ありません。
              </strong>{" "}
              当サービスはStripe社から顧客識別IDおよび契約ステータス（有効・解約等）のみを受け取ります。
            </li>
          </ul>
        </div>

        <h2 style={sectionTitleStyle}>第2条（情報を利用する目的）</h2>
        <div style={paragraphStyle}>
          当サービスが取得した情報を利用する目的は以下のとおりです。
          <ul style={{ paddingLeft: "22px", marginTop: "8px" }}>
            <li>
              本サービス（ルートの案内、現地での押印判定、SHUIN帳や思い出アルバムの表示、連れ立ち機能）の提供・運営のため
            </li>
            <li>
              有料プラン（SHUIN プレミアム）の契約状態の確認、請求管理、および特典機能の提供のため
            </li>
            <li>
              ユーザーからのお問い合わせへの対応および本人確認を行うため
            </li>
            <li>
              メンテナンス、規約変更、重要なお知らせ等のご連絡のため
            </li>
            <li>
              不正利用（位置情報の偽装や不正アクセス等）の防止および安全性の確保のため
            </li>
            <li>
              個人を特定できない統計データを作成し、新規ルートの企画やサービス改善に役立てるため
            </li>
          </ul>
        </div>

        <h2 style={sectionTitleStyle}>
          第3条（第三者提供および外部サービスの利用）
        </h2>
        <div style={paragraphStyle}>
          1. 当サービスは、個人情報保護法その他の法令で認められる場合を除き、あらかじめユーザーの同意を得ることなく第三者に個人情報を提供することはありません。
          <br />
          2. 本サービスの安全な提供のため、以下の信頼できる外部クラウド・決済サービスを利用しています。
          <ul style={{ paddingLeft: "22px", marginTop: "8px" }}>
            <li>
              <strong>Supabase, Inc.</strong>：ユーザー認証、押印履歴データベース、および写真ストレージの安全な保管
            </li>
            <li>
              <strong>Stripe, Inc.</strong>：有料プラン（SHUIN プレミアム）の決済処理およびサブスクリプション管理（PCI DSS準拠）
            </li>
            <li>
              <strong>Google Maps / OpenStreetMap</strong>：街歩きマップおよびスポット位置の描画
            </li>
          </ul>
        </div>

        <h2 style={sectionTitleStyle}>第4条（安全管理措置）</h2>
        <p style={paragraphStyle}>
          当サービスは、取り扱う情報の漏えい、滅失または毀損の防止その他の安全管理のために、SSL/TLSによる通信の暗号化、データベースのアクセス制御（Row Level Security）、および決済情報の非保持化等の適切なセキュリティ対策を講じています。
        </p>

        <h2 style={sectionTitleStyle}>
          第5条（個人情報の開示・訂正・利用停止・削除）
        </h2>
        <p style={paragraphStyle}>
          ユーザーは、ご自身の登録情報や記録した写真・ひとことメモをマイページおよび設定画面からいつでも確認・編集できるほか、当サービスのお問い合わせ窓口より個人情報の開示・訂正・削除・退会を請求することができます。ご本人確認のうえ、法令に従い速やかに対応いたします。
        </p>

        <h2 style={sectionTitleStyle}>第6条（お問い合わせ窓口）</h2>
        <p style={paragraphStyle}>
          本ポリシーに関するご質問、および個人情報の取扱いに関するお問い合わせは、当サービスの{" "}
          <Link
            href="/contact"
            style={{
              color: "var(--primary-color)",
              fontWeight: 800,
              textDecoration: "underline",
            }}
          >
            お問い合わせフォーム
          </Link>{" "}
          よりご連絡ください。
        </p>

        <h2 style={sectionTitleStyle}>第7条（プライバシーポリシーの変更）</h2>
        <p style={paragraphStyle}>
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、必要に応じて変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
        </p>

        <div
          style={{
            marginTop: "28px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            fontSize: "var(--font-size-small)",
            opacity: 0.78,
            textAlign: "right",
          }}
        >
          制定・改定日：2026年11月2日
        </div>

        <div
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/terms"
            className="btn-secondary"
            style={{
              padding: "10px 20px",
              fontSize: "0.88rem",
              textDecoration: "none",
            }}
          >
            利用規約を見る
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
