import React from 'react';

export default function TermsPage() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "80px 20px 40px",
      color: "var(--text-color)"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "32px", color: "var(--primary-color)" }}>利用規約</h1>
      <div style={{
        background: "var(--card-bg)",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        lineHeight: "1.8"
      }}>
        <p style={{ marginBottom: "24px" }}>
          この利用規約（以下、「本規約」といいます。）は、SHUIN まちのしるし（以下、「当サービス」といいます。）が提供するサービスの利用条件を定めるものです。ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
        </p>
        
        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第1条（適用）</h2>
        <p style={{ marginBottom: "24px" }}>
          本規約は、ユーザーと当サービスとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
        </p>
        
        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第2条（禁止事項）</h2>
        <div style={{ marginBottom: "24px" }}>
          ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</li>
            <li>当サービス、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>当サービスのサービスの運営を妨害するおそれのある行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正な目的を持って本サービスを利用する行為</li>
            <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当サービスが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
            <li>当サービスのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            <li>その他、当サービスが不適切と判断する行為</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第3条（本サービスの提供の停止等）</h2>
        <div style={{ marginBottom: "24px" }}>
          当サービスは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当サービスが本サービスの提供が困難と判断した場合</li>
          </ul>
          当サービスは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
        </div>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第4条（免責事項）</h2>
        <p style={{ marginBottom: "24px" }}>
          当サービスは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。<br/>
          当サービスは、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
        </p>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第5条（サービス内容の変更等）</h2>
        <p style={{ marginBottom: "24px" }}>
          当サービスは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
        </p>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第6条（利用規約の変更）</h2>
        <p style={{ marginBottom: "24px" }}>
          当サービスは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
        </p>
      </div>
    </div>
  );
}
