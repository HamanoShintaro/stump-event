import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "80px 20px 40px",
      color: "var(--text-color)"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "32px", color: "var(--primary-color)" }}>プライバシーポリシー</h1>
      <div style={{
        background: "var(--card-bg)",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        lineHeight: "1.8"
      }}>
        <p style={{ marginBottom: "24px" }}>
          SHUIN まちのしるし（以下、「当サービス」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </p>
        
        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第1条（個人情報）</h2>
        <p style={{ marginBottom: "24px" }}>
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報（個人識別情報）を指します。
        </p>
        
        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第2条（個人情報の収集方法）</h2>
        <p style={{ marginBottom: "24px" }}>
          当サービスは、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や情報を、当サービスの提携先などから収集することがあります。
        </p>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第3条（個人情報を収集・利用する目的）</h2>
        <div style={{ marginBottom: "24px" }}>
          当サービスが個人情報を収集・利用する目的は、以下のとおりです。
          <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
            <li>当サービスの提供・運営のため</li>
            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当サービスが提供する他のサービスの案内のメールを送付するため</li>
            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
            <li>上記の利用目的に付随する目的</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第4条（利用目的の変更）</h2>
        <p style={{ marginBottom: "24px" }}>
          当サービスは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。<br/>
          利用目的の変更を行った場合には、変更後の目的について、当サービス所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
        </p>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第5条（個人情報の第三者提供）</h2>
        <p style={{ marginBottom: "24px" }}>
          当サービスは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </p>

        <h2 style={{ fontSize: "1.2rem", fontWeight: "700", marginTop: "32px", marginBottom: "16px", color: "var(--primary-color)" }}>第6条（プライバシーポリシーの変更）</h2>
        <p style={{ marginBottom: "24px" }}>
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。<br/>
          当サービスが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
        </p>
      </div>
    </div>
  );
}
