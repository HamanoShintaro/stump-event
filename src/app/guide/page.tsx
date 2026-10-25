"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeaderNav from "@/components/HeaderNav";
import {
  IconScroll,
  IconCompass,
  IconStampSeal,
  IconUsers,
  IconBook,
  IconMapPin,
  IconFootprints,
  IconCamera,
  IconPen,
  IconBookmark,
  IconOmikuji,
  IconAward,
  IconQrCode,
  IconSparkles,
  IconChevronDown,
  IconChevronRight,
  IconCheck,
  IconMap,
} from "@/components/icons/ShuinIcons";

interface GuideStep {
  stepNumber: string;
  badgeText: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  highlights: Array<{
    icon: React.ComponentType<{ size?: number; color?: string }>;
    label: string;
    detail: string;
  }>;
  actionHref: string;
  actionLabel: string;
  MainIcon: React.ComponentType<{ size?: number; color?: string }>;
}

const GUIDE_STEPS: GuideStep[] = [
  {
    stepNumber: "一",
    badgeText: "STEP 01 — 物語との出会い",
    title: "街の物語を探す",
    shortTitle: "街の物語を探す",
    subtitle: "今の気分・歩きたい時間・現在地から、今日めぐるルートを選ぶ",
    description:
      "遠くの観光地へ出かけなくても、いつもの街角や隣の駅にはまだ知らない歴史や風景が眠っています。「気軽な散歩 (~45分)」や「じっくり散策」、あるいは一日一回引ける「街歩きみくじ」から、今日のあなたにぴったりの物語を見つけましょう。",
    highlights: [
      {
        icon: IconCompass,
        label: "ご近所の再発見コンパス",
        detail: "現在地から近いルートや、最初のスポットまでの徒歩分数をすぐに確認できます。",
      },
      {
        icon: IconOmikuji,
        label: "今日の街歩きみくじ",
        detail: "迷ったときは縁結びのおみくじを引いて、思いがけない街角との出会いを楽しめます。",
      },
      {
        icon: IconBookmark,
        label: "栞（ブックマーク）でお散歩プランナー",
        detail: "気になるルートを保存しておけば、休日の予定や気分に合わせていつでも引き出せます。",
      },
    ],
    actionHref: "/routes",
    actionLabel: "公開中のルート一覧を見る",
    MainIcon: IconCompass,
  },
  {
    stepNumber: "二",
    badgeText: "STEP 02 — 現地を訪れる",
    title: "街を歩き、しるし（SHUIN）を刻む",
    shortTitle: "現地でしるしを刻む",
    subtitle: "スポットを訪れ、GPSまたはQRで押印し、土地の物語をひらく",
    description:
      "ルートを選んだら街へ歩き出しましょう。マップ画面を開くと、各スポットまでのリアルタイム距離（「押印圏内（50m以内）」など）がひと目でわかります。現地に到着してしるし（SHUIN）を押印すると、その場所に秘められた物語の断片がアンロックされます。",
    highlights: [
      {
        icon: IconMapPin,
        label: "リアルタイム距離インジケーター",
        detail: "スポットから半径50m以内に入ると「押印圏内」バッジが点灯し、現在地認証で押印できます。",
      },
      {
        icon: IconQrCode,
        label: "QRコード読み取りにも対応",
        detail: "屋内の施設や店舗などでは、現地に掲示されたQRコードを読み取ってしるしを刻めます。",
      },
      {
        icon: IconScroll,
        label: "スポットに宿る物語の解放",
        detail: "押印した人だけが読める地域の逸話や歴史、店主の想いが紐解かれます。",
      },
    ],
    actionHref: "/map",
    actionLabel: "現在地マップを開いてみる",
    MainIcon: IconStampSeal,
  },
  {
    stepNumber: "三",
    badgeText: "STEP 03 — 記憶と縁を重ねる",
    title: "写真と言葉、仲間との『連れ立ち』を残す",
    shortTitle: "写真・連れ立ちを残す",
    subtitle: "その場の風景やひとことメモ、同行者との共有アルバムを紡ぐ",
    description:
      "しるしを刻んだ瞬間、目に映った季節の景色（写真）や心に残ったひとこと（メモ）を添えて記録できます。さらに友人や家族と合言葉を共有して「連れ立ち（グループ巡礼）」を始めれば、誰がどこまで歩いたか、どんな写真を撮ったかが『旅路のしおり』にリアルタイムで重なります。",
    highlights: [
      {
        icon: IconCamera,
        label: "一枚の風景写真とひとことあとがき",
        detail: "押印直後のモーダルから、その場の空気感を写真と短い言葉で手軽に残せます。",
      },
      {
        icon: IconUsers,
        label: "連れ立ち（グループ巡礼）と旅路のしおり",
        detail: "合言葉または招待リンクで仲間とつながり、スポットごとの共有アルバムを作れます。",
      },
      {
        icon: IconFootprints,
        label: "街角の余韻（旅人たちの気配）",
        detail: "同じ場所を訪れた他の旅人が残した言葉や季節の気配を静かに味わえます。",
      },
    ],
    actionHref: "/mypage",
    actionLabel: "しるしマイページを見る",
    MainIcon: IconUsers,
  },
  {
    stepNumber: "四",
    badgeText: "STEP 04 — 歩みを振り返る",
    title: "SHUIN帳や絵巻で人生の歩みを振り返る",
    shortTitle: "SHUIN帳で振り返る",
    subtitle: "御朱印紙面カード・旅のアルバム・称号で日常の散歩が宝物に",
    description:
      "集めたしるしは、あなただけの「SHUIN帳」に一冊の記録として綴られていきます。「朱印帳グリッド」で一覧したり、「旅のアルバム」で写真と文章をじっくり読み返したり、ルートを踏破した記念に『旅路の絵巻』を仕立ててSNSや家族に披露することもできます。",
    highlights: [
      {
        icon: IconBook,
        label: "御朱印紙面カード＆詳細振り返り",
        detail: "どの画面からでもしるしをタップすると、和紙に朱印が刻まれた紙面カードが開き、その場で写真やメモを編集できます。",
      },
      {
        icon: IconSparkles,
        label: "踏破記念『旅路の絵巻』",
        detail: "ルートの全スポットをめぐり終えると、歩いた距離や思い出をまとめた美しい縦長絵巻が生成されます。",
      },
      {
        icon: IconAward,
        label: "歩みと貢献に応じた『称号』",
        detail: "めぐった場所の数や旅のスタイルに合わせて、風流な称号が授与されます。",
      },
    ],
    actionHref: "/mypage/diary",
    actionLabel: "SHUIN帳をひらいてみる",
    MainIcon: IconBook,
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "しるし（SHUIN）はどうやって刻む（押印する）のですか？",
    answer:
      "各ルートの「マップ画面」を開き、スポットの近く（半径50m以内）に到着すると「押印圏内」と表示されます。そのまま「現在地（GPS）でしるしを刻む」ボタンを押すか、現地に設置されたQRコードを読み取ることで押印できます。",
  },
  {
    question: "「連れ立ち（グループ巡礼）」はどうやって始めますか？",
    answer:
      "ルートのマップ画面上部にある「連れ立ち」ボタンから新しいグループを作成すると、専用の合言葉（招待コード）と共有リンクが発行されます。同行するご家族やご友人に共有すると、全員の押印状況や写真・メモが『連れ立ち旅路のしおり（/groups/[groupId]）』にリアルタイムで集まります。",
  },
  {
    question: "押印したあとに、写真やひとことメモを追加・変更できますか？",
    answer:
      "はい、いつでも可能です。マイページやSHUIN帳、ルート詳細ページにある獲得済みのしるしをタップすると「しるしの記憶（御朱印紙面カード）」モーダルが開きます。そこから新しい写真の追加やひとことメモの書き直しが行えます。",
  },
  {
    question: "「保存したルート（栞）」はどのように活用できますか？",
    answer:
      "ルート詳細ページの「栞（ブックマーク）」ボタンを押すと、マイページの『保存したルート（お散歩プランナー）』に保存されます。「気軽な散歩（〜45分）」「じっくり散策」「未踏」「巡礼中」などの条件で絞り込み、次の休日に歩くルートを計画できます。",
  },
  {
    question: "現地でGPSの距離がずれて「押印圏内」にならない場合は？",
    answer:
      "スマートフォンの位置情報設定（ブラウザの位置情報許可）がオンになっているかをご確認のうえ、少し開けた場所で数秒お待ちいただくと正確な現在地に更新されます。現地のQRコードがあるスポットでは、QR読み取りでも押印いただけます。",
  },
];

export default function GuidePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="container" style={{ paddingBottom: "72px" }}>
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

      <main style={{ maxWidth: "820px", margin: "0 auto" }}>
        {/* ヒーロー・導入セクション */}
        <section
          className="glass-card"
          style={{
            padding: "36px 24px",
            marginBottom: "32px",
            borderRadius: "22px",
            border: "1.5px solid var(--accent-color)",
            background:
              "linear-gradient(145deg, rgba(255,253,248,0.97) 0%, rgba(246,239,224,0.93) 100%)",
            textAlign: "center",
          }}
        >
          <div
            className="shuin-badge"
            style={{
              color: "var(--primary-color)",
              background: "rgba(199, 68, 46, 0.08)",
              borderColor: "rgba(199, 68, 46, 0.25)",
              marginBottom: "14px",
              letterSpacing: "0.1em",
            }}
          >
            <IconScroll size={14} color="var(--primary-color)" />
            <span>SHUIN — 街歩きの手引き</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.32rem, 5.2vw, 1.85rem)",
              fontWeight: 900,
              color: "var(--text-color)",
              letterSpacing: "0.04em",
              marginBottom: "8px",
              lineHeight: 1.35,
              whiteSpace: "nowrap",
            }}
          >
            街を歩いて、しるしを刻む。
          </h1>

          <p
            style={{
              fontSize: "0.88rem",
              fontWeight: 800,
              color: "var(--primary-color)",
              marginBottom: "14px",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            訪れた場所が、あなたのしるしになる。
          </p>

          <p
            style={{
              fontSize: "0.86rem",
              color: "#5C4E43",
              maxWidth: "600px",
              margin: "0 auto 20px",
              lineHeight: 1.7,
            }}
          >
            「SHUIN（まちのしるし）」は、街に息づく小さな物語をたどりながら実際に足を運び、訪れた証として「しるし（SHUIN）」を刻んでいく街歩きの案内帖です。
            <br />
            はじめての方でもすぐに楽しめる、4つのステップをご紹介します。
          </p>

          {/* 4ステップ早見インジケーター（2×2グリッド） */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "8px",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            {GUIDE_STEPS.map((s, idx) => {
              const IconComp = s.MainIcon;
              return (
                <a
                  key={s.stepNumber}
                  href={`#step-${idx + 1}`}
                  style={{
                    padding: "10px 8px",
                    borderRadius: "12px",
                    background: "var(--bg-color)",
                    border: "1px solid rgba(201, 168, 76, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    textDecoration: "none",
                    color: "var(--text-color)",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: "rgba(199, 68, 46, 0.08)",
                      border: "1px solid rgba(199, 68, 46, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconComp size={15} color="var(--primary-color)" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.66rem",
                      fontWeight: 800,
                      color: "var(--primary-color)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    第{s.stepNumber}の歩み
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--text-color)",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.shortTitle}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* 4つのステップ詳細セクション */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {GUIDE_STEPS.map((step, index) => {
            const StepIcon = step.MainIcon;
            return (
              <div
                key={step.stepNumber}
                id={`step-${index + 1}`}
                className="glass-card"
                style={{
                  padding: "26px 22px",
                  borderRadius: "20px",
                  border: "1px solid rgba(201, 168, 76, 0.5)",
                  background: "rgba(255, 253, 249, 0.94)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* 和風落款番号 */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      border: "2px solid var(--primary-color)",
                      background: "rgba(199, 68, 46, 0.08)",
                      color: "var(--primary-color)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {step.stepNumber}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "var(--primary-color)",
                        letterSpacing: "0.08em",
                        marginBottom: "2px",
                      }}
                    >
                      {step.badgeText}
                    </div>
                    <h2
                      style={{
                        fontSize: "var(--font-size-h2)",
                        fontWeight: 900,
                        color: "var(--text-color)",
                        margin: 0,
                        lineHeight: 1.35,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <StepIcon size={20} color="var(--primary-color)" />
                      <span>{step.title}</span>
                    </h2>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    color: "#5C4E43",
                    marginBottom: "10px",
                  }}
                >
                  {step.subtitle}
                </div>

                <p
                  style={{
                    fontSize: "var(--font-size-body)",
                    color: "var(--text-color)",
                    opacity: 0.85,
                    lineHeight: 1.7,
                    marginBottom: "18px",
                  }}
                >
                  {step.description}
                </p>

                {/* ポイント一覧 */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "12px",
                    marginBottom: "18px",
                  }}
                >
                  {step.highlights.map((hl) => {
                    const HlIcon = hl.icon;
                    return (
                      <div
                        key={hl.label}
                        style={{
                          padding: "14px",
                          borderRadius: "12px",
                          background: "var(--bg-color)",
                          border: "1px solid rgba(201, 168, 76, 0.38)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.84rem",
                            fontWeight: 800,
                            color: "var(--text-color)",
                          }}
                        >
                          <HlIcon size={16} color="var(--primary-color)" />
                          <span>{hl.label}</span>
                        </div>
                        <p
                          style={{
                            fontSize: "var(--font-size-small)",
                            color: "#5C4E43",
                            margin: 0,
                            lineHeight: 1.55,
                          }}
                        >
                          {hl.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Link
                    href={step.actionHref}
                    className="btn-secondary"
                    style={{
                      padding: "9px 18px",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    <span>{step.actionLabel}</span>
                    <IconChevronRight size={15} color="var(--primary-color)" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* よくある質問（FAQアコーディオン） */}
        <section
          className="glass-card"
          style={{
            padding: "28px 22px",
            borderRadius: "20px",
            border: "1px solid rgba(201, 168, 76, 0.5)",
            background: "rgba(255, 253, 249, 0.95)",
            marginBottom: "32px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <div className="shuin-badge" style={{ marginBottom: "8px" }}>
              <IconCheck size={13} color="var(--primary-color)" />
              <span>FAQ — よくあるご質問</span>
            </div>
            <h2
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 900,
                color: "var(--text-color)",
                margin: 0,
              }}
            >
              街歩きの疑問にお答えします
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  style={{
                    borderRadius: "12px",
                    background: "var(--bg-color)",
                    border: isOpen
                      ? "1.5px solid var(--accent-color)"
                      : "1px solid #E5DEC9",
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      background: "transparent",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "inherit",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 800,
                        color: "var(--text-color)",
                        lineHeight: 1.45,
                      }}
                    >
                      Q. {faq.question}
                    </span>
                    <span
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        color: "var(--primary-color)",
                        flexShrink: 0,
                      }}
                    >
                      <IconChevronDown size={18} color="var(--primary-color)" />
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 16px 16px",
                        fontSize: "0.85rem",
                        color: "#5C4E43",
                        lineHeight: 1.7,
                        borderTop: "1px dashed rgba(201, 168, 76, 0.35)",
                        paddingTop: "12px",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 下部アクションCTA */}
        <section
          style={{
            padding: "28px 20px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(199, 68, 46, 0.08) 0%, rgba(201, 168, 76, 0.14) 100%)",
            border: "1.5px solid var(--accent-color)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "var(--font-size-h2)",
              fontWeight: 900,
              color: "var(--text-color)",
              marginBottom: "8px",
            }}
          >
            さあ、最初のしるしを刻みに出かけましょう
          </h2>
          <p
            style={{
              fontSize: "var(--font-size-small)",
              color: "#5C4E43",
              marginBottom: "20px",
            }}
          >
            近くの街角からでも、気になっていたあの街からでも。あなたのペースで物語を巡ってみてください。
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Link
              href="/routes"
              className="btn-primary"
              style={{
                padding: "13px 26px",
                fontSize: "0.92rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <IconCompass size={17} color="currentColor" />
              <span>物語（ルート一覧）から探す</span>
            </Link>
            <Link
              href="/map"
              className="btn-secondary"
              style={{
                padding: "13px 24px",
                fontSize: "0.92rem",
                textDecoration: "none",
              }}
            >
              <IconMap size={17} color="var(--primary-color)" />
              <span>現在地マップから探す</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
