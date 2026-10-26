"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useCommunityEchoes } from "@/hooks/useCommunityEchoes";
import {
  IconLeaf,
  IconFootprints,
  IconClock,
  IconMapPin,
  IconUsers,
  IconStampSeal,
} from "@/components/icons/ShuinIcons";

interface CommunityEchoesSectionProps {
  routeId: string;
  spotId?: string;
  spots?: Array<{ id: string; name: string }>;
  refreshKey?: number | string;
}

export default function CommunityEchoesSection({
  routeId,
  spotId,
  spots = [],
  refreshKey,
}: CommunityEchoesSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { totalFootprints, popularTimeBand, echoItems, loading } =
    useCommunityEchoes({
      routeId,
      spotId,
      spots,
      refreshKey,
    });

  const [lightboxPhoto, setLightboxPhoto] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  if (loading) {
    return null;
  }

  const isSpotLevel = Boolean(spotId);
  const sectionTitle = isSpotLevel
    ? "街角の余韻（この場所を訪れた旅人のしるし）"
    : "街角の余韻（このルートを歩いた旅人の足跡）";

  const sectionSubtitle = isSpotLevel
    ? "これまでにこの場所を訪れ、しるしを刻んだ旅人たちの気配と季節の言葉。"
    : "この街歩きの物語をめぐり、各地で刻まれた旅人たちの足跡とひとこと。";

  const lightboxNode =
    mounted && lightboxPhoto
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setLightboxPhoto(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(25, 20, 18, 0.75)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "520px",
                width: "100%",
                background: "var(--bg-color)",
                borderRadius: "18px",
                border: "2px solid var(--accent-color)",
                padding: "16px",
                position: "relative",
                boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
              }}
            >
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                aria-label="閉じる"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  background: "var(--bg-color)",
                  border: "1px solid var(--accent-color)",
                  borderRadius: "999px",
                  padding: "4px",
                  cursor: "pointer",
                  color: "var(--text-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={18} />
              </button>
              <img
                src={lightboxPhoto.url}
                alt={lightboxPhoto.caption}
                style={{
                  width: "100%",
                  maxHeight: "65vh",
                  objectFit: "contain",
                  borderRadius: "12px",
                  display: "block",
                  marginBottom: "10px",
                }}
              />
              <div
                style={{
                  fontSize: "var(--font-size-small)",
                  fontWeight: 700,
                  color: "var(--text-color)",
                  textAlign: "center",
                }}
              >
                {lightboxPhoto.caption}
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section
      style={{
        marginTop: isSpotLevel ? "20px" : "36px",
        marginBottom: isSpotLevel ? "12px" : "24px",
      }}
    >
      <div
        className="glass-card"
        style={{
          padding: "24px 20px",
          borderRadius: "18px",
          border: "1.5px solid var(--accent-color)",
          background:
            "linear-gradient(145deg, rgba(255,253,248,0.96) 0%, rgba(246,239,224,0.92) 100%)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        }}
      >
        {/* ヘッダー */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "12px",
            marginBottom: "16px",
            paddingBottom: "12px",
            borderBottom: "1px dashed rgba(201, 168, 76, 0.45)",
          }}
        >
          <div style={{ flex: "1 1 240px" }}>
            <h3
              style={{
                fontSize: "var(--font-size-h2)",
                fontWeight: 800,
                color: "var(--text-color)",
                margin: "0 0 4px 0",
                lineHeight: 1.4,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <IconLeaf size={20} color="var(--primary-color)" />
              <span>{sectionTitle}</span>
            </h3>
            <p
              style={{
                fontSize: "var(--font-size-small)",
                color: "var(--text-color)",
                opacity: 0.76,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {sectionSubtitle}
            </p>
          </div>

          {/* 累計足跡・人気時間帯バッジ */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span
              className="shuin-badge"
              style={{
                background: "rgba(199, 68, 46, 0.08)",
                borderColor: "rgba(199, 68, 46, 0.25)",
                color: "var(--primary-color)",
              }}
            >
              <IconFootprints size={13} color="var(--primary-color)" />
              <span>刻まれた足跡 累計 {totalFootprints} 回</span>
            </span>

            {popularTimeBand && (
              <span className="shuin-badge">
                <IconClock size={13} color="var(--text-color)" />
                <span>よく巡られる時間帯: {popularTimeBand}</span>
              </span>
            )}
          </div>
        </div>

        {/* 足跡・余韻カード一覧 */}
        {echoItems.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "12px",
            }}
          >
            {echoItems.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: "14px",
                  borderRadius: "14px",
                  background: "var(--bg-color)",
                  border: "1px solid rgba(201, 168, 76, 0.4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "6px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(201, 168, 76, 0.18)",
                        color: "var(--text-color)",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        padding: "2px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {item.seasonTimeLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: "var(--text-color)",
                      }}
                    >
                      {item.travelerLabel}
                    </span>
                    {item.isTsuredachi && (
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "var(--primary-color)",
                          background: "rgba(199, 68, 46, 0.08)",
                          padding: "2px 7px",
                          borderRadius: "6px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        <IconUsers size={11} color="var(--primary-color)" />
                        <span>連れ立ち</span>
                      </span>
                    )}
                  </div>

                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-color)",
                      opacity: 0.65,
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <IconClock size={11} color="var(--text-color)" />
                    <span>
                      {item.formattedDate} {item.formattedTime}
                    </span>
                  </span>
                </div>

                {/* ルートページ表示時はスポット名を表示 */}
                {!isSpotLevel && item.spotName && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: "var(--primary-color)",
                    }}
                  >
                    <IconMapPin size={12} color="var(--primary-color)" />
                    <span>{item.spotName}</span>
                    {item.visitorNumber && (
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: "0.7rem",
                          color: "var(--text-color)",
                          opacity: 0.65,
                        }}
                      >
                        #{item.visitorNumber}人目の来訪
                      </span>
                    )}
                  </div>
                )}

                {isSpotLevel && item.visitorNumber && (
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--primary-color)",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <IconStampSeal size={13} color="var(--primary-color)" />
                    <span>#{item.visitorNumber}番目の来訪者として押印</span>
                  </div>
                )}

                {item.photoUrl && (
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxPhoto({
                        url: item.photoUrl!,
                        caption: `${item.spotName}（${item.formattedDate} ${item.formattedTime}・${item.seasonTimeLabel}・${item.travelerLabel}）`,
                      })
                    }
                    style={{
                      padding: 0,
                      border: "1px solid rgba(201, 168, 76, 0.35)",
                      borderRadius: "10px",
                      overflow: "hidden",
                      cursor: "pointer",
                      background: "transparent",
                      width: "100%",
                      height: "130px",
                    }}
                  >
                    <img
                      src={item.photoUrl}
                      alt={item.spotName}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </button>
                )}

                {item.memo ? (
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-color)",
                      lineHeight: 1.55,
                      padding: "8px 10px",
                      borderRadius: "8px",
                      background: "rgba(201, 168, 76, 0.1)",
                      borderLeft: "3px solid var(--accent-color)",
                    }}
                  >
                    「{item.memo}」
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: "0.76rem",
                      color: "var(--text-color)",
                      opacity: 0.72,
                    }}
                  >
                    街を歩き、この場所で静かにしるしを刻みました。
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "20px 16px",
              borderRadius: "12px",
              background: "var(--bg-color)",
              border: "1px dashed rgba(201, 168, 76, 0.45)",
              color: "var(--text-color)",
              fontSize: "var(--font-size-body)",
            }}
          >
            まだ旅人の余韻は記録されていません。ぜひ最初の旅人として訪れ、しるしと感想を刻んでみませんか。
          </div>
        )}
      </div>

      {lightboxNode}
    </section>
  );
}
