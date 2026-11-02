import React from "react";
import Link from "next/link";
import {
  PREMIUM_MONTHLY_PRICE_JPY,
  FREE_PHOTO_LIMIT,
} from "@/hooks/useSubscription";

export default function TermsPage() {
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
        利用規約
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
          この利用規約（以下、「本規約」といいます。）は、「SHUIN まちのしるし」（以下、「当サービス」といいます。）が提供する街歩き記録ウェブサービスおよび関連機能（以下、「本サービス」といいます。）の利用条件を定めるものです。ご利用の皆さま（以下、「ユーザー」といいます。）には、本規約に同意のうえ本サービスをご利用いただきます。
        </p>

        <h2 style={sectionTitleStyle}>第1条（適用）</h2>
        <p style={paragraphStyle}>
          1. 本規約は、ユーザーと当サービス運営者との間の本サービスの利用に関わる一切の関係に適用されます。
          <br />
          2. 当サービスが本サービス上で掲載する「特定商取引法に基づく表記」「プライバシーポリシー」その他のガイドラインは、本規約の一部を構成するものとします。
        </p>

        <h2 style={sectionTitleStyle}>第2条（アカウント登録および管理）</h2>
        <p style={paragraphStyle}>
          1. ユーザーは、真実かつ正確な情報をもってアカウント登録を行うものとします。
          <br />
          2. ユーザーは、自己の責任においてログイン認証情報を適切に管理するものとし、第三者に利用させ、または譲渡・貸与してはなりません。
        </p>

        <h2 style={sectionTitleStyle}>
          第3条（有料プラン「SHUIN プレミアム」・決済・解約）
        </h2>
        <div style={paragraphStyle}>
          1. 本サービスの基本機能（ルートの閲覧、スポットでの押印・SHUINの収集、累計
          {FREE_PHOTO_LIMIT}
          枚までの思い出写真記録、招待コード入力による連れ立ちへの合流参加）は無料でご利用いただけます。
          <br />
          2. ユーザーは、有料サブスクリプションプラン「SHUIN プレミアム」（月額
          {PREMIUM_MONTHLY_PRICE_JPY.toLocaleString()}
          円・税込）に申し込むことで、決済完了後ただちに以下の特典機能をご利用いただけます。
          <ul style={{ paddingLeft: "22px", marginTop: "8px", marginBottom: "8px" }}>
            <li>思い出写真の枚数無制限記録およびSHUIN帳でのアルバム見返し機能</li>
            <li>
              友人や同行者と同じルートを巡る「連れ立ち」の招待コード発行（主催）機能
            </li>
          </ul>
          3. <strong>決済および自動更新</strong>：利用料金のお支払いは、決済代行会社（Stripe, Inc.）が提供するクレジットカード決済、Apple Pay、Google Pay等により行われます。初回申込時に即時決済され、以降は解約手続きが行われない限り、毎月のご契約更新日に自動更新・自動決済されます。
          <br />
          4. <strong>中途解約</strong>：ユーザーは、本サービス内の「設定」画面にあるプラン管理メニュー（Stripeカスタマーポータル）より、24時間いつでも解約手続きを行うことができます。次回更新日の前日までに解約手続きが完了した場合、次回以降の請求は発生しません。
          <br />
          5. <strong>返金・キャンセル</strong>：デジタルサービスおよびオンライン提供の性質上、決済完了後のキャンセル、返品、および月の途中での解約に伴う日割り計算での返金には応じられません。
          <br />
          6. <strong>解約後のデータ保持</strong>：有料プランを解約し無料プラン（旅人プラン）へ移行した場合でも、それまでに獲得した押印（SHUIN）や記録済みの思い出写真・ひとことデータが削除されることはありません。
        </div>

        <h2 style={sectionTitleStyle}>
          第4条（街歩きにおける安全配慮および現地マナー）
        </h2>
        <div style={paragraphStyle}>
          本サービスは、実際の街やルートを歩いて巡り、訪れた場所で押印（SHUIN）を刻む体験を提供するものです。ユーザーは以下の事項を遵守のうえ、自己の責任と安全管理のもとで街歩きを行うものとします。
          <ul style={{ paddingLeft: "22px", marginTop: "8px" }}>
            <li>
              歩行中や自転車・車両等の運転中にスマートフォンの画面を注視・操作する行為（いわゆる「歩きスマホ」等）は大変危険ですので絶対に行わず、必ず安全な場所に立ち止まってから操作してください。
            </li>
            <li>
              現地の交通法規、信号、標識、ならびに寺社仏閣・公共施設・商業施設・私有地等の拝観規則や立入制限、撮影マナーを厳守してください。
            </li>
            <li>
              天候の急変、夜間の通行、足元の状況等に十分注意し、無理のない計画でルートを巡ってください。現地訪問中に発生した交通事故、怪我、盗難、第三者とのトラブル等について、当サービスは責任を負いかねます。
            </li>
          </ul>
        </div>

        <h2 style={sectionTitleStyle}>
          第5条（記録した写真・ひとこと等の取り扱い）
        </h2>
        <p style={paragraphStyle}>
          1. ユーザーが本サービス上に記録・アップロードした写真やひとことメモ（以下、「記録コンテンツ」といいます。）の著作権は、ユーザー本人に留保されます。
          <br />
          2. ユーザーは、記録コンテンツに第三者の肖像権、プライバシー権、著作権等を侵害する内容を含めないものとします。
          <br />
          3. ユーザーが「連れ立ち」機能を利用した場合、または公開・共有機能を利用した場合、同行メンバーや本サービス内の該当セクションにおいて当該記録コンテンツが表示されることに同意するものとします。
        </p>

        <h2 style={sectionTitleStyle}>第6条（禁止事項）</h2>
        <div style={paragraphStyle}>
          ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          <ul style={{ paddingLeft: "22px", marginTop: "8px" }}>
            <li>法令または公序良俗に違反する行為、犯罪行為に関連する行為</li>
            <li>
              位置情報（GPS）の偽装・改ざん、または不正な手段によって押印やSHUINを取得する行為
            </li>
            <li>
              立入禁止区域や私有地へ無断で侵入する行為、近隣住民や施設等の迷惑となる行為
            </li>
            <li>
              当サービス、他のユーザー、または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利・利益を侵害する行為
            </li>
            <li>
              本サービスのサーバーやネットワークに過度な負荷をかける行為、不正アクセスを試みる行為
            </li>
            <li>
              当サービスが許諾しない営利目的での宣伝、広告、勧誘、または営業行為
            </li>
            <li>反社会的勢力に対する直接または間接の利益供与行為</li>
            <li>その他、当サービスが不適切と判断する行為</li>
          </ul>
        </div>

        <h2 style={sectionTitleStyle}>
          第7条（本サービスの提供の停止・変更等）
        </h2>
        <p style={paragraphStyle}>
          1. 当サービスは、システムの保守点検、クラウド基盤や通信回線の障害、天災等の不可抗力、または現地の閉鎖・工事等の事情により、事前の通知なく本サービスの全部または一部の提供を停止・中断、またはルート・スポットの内容を変更することがあります。
          <br />
          2. 当サービスは、前項の措置によりユーザーに生じた不利益または損害について、当サービスに故意または重大な過失がある場合を除き、責任を負わないものとします。
        </p>

        <h2 style={sectionTitleStyle}>
          第8条（免責事項および損害賠償の制限）
        </h2>
        <p style={paragraphStyle}>
          1. 当サービスは、掲載するルートや物語、スポット情報（営業時間・通行可否・歴史的解釈等を含みます）の正確性・最新性・有用性について最善を尽くしますが、完全性を保証するものではありません。
          <br />
          2. 当サービスがユーザーに対して法令上または契約上の損害賠償責任を負う場合であっても、当サービスに故意または重大な過失がある場合を除き、賠償責任の範囲はユーザーに直接かつ現実に生じた通常の損害に限定され、かつ有料プラン契約者においては当該損害が発生した月に当サービスが当該ユーザーから受領した利用料金1ヶ月分相当額を上限とします。
        </p>

        <h2 style={sectionTitleStyle}>第9条（利用規約の変更）</h2>
        <p style={paragraphStyle}>
          当サービスは、法令の改正やサービス内容の変更等に応じて本規約を改定することがあります。重要な変更を行う場合は本サービス上で周知するものとし、変更後にユーザーが本サービスを継続して利用した場合には、改定後の規約に同意したものとみなします。
        </p>

        <h2 style={sectionTitleStyle}>第10条（準拠法および管轄裁判所）</h2>
        <p style={paragraphStyle}>
          本規約の解釈にあたっては日本法を準拠法とし、本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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
            href="/tokushoho"
            className="btn-secondary"
            style={{
              padding: "10px 20px",
              fontSize: "0.88rem",
              textDecoration: "none",
            }}
          >
            特定商取引法に基づく表記
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
