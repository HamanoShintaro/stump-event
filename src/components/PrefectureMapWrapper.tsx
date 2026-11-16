"use client";

import dynamic from "next/dynamic";
import type { PrefectureMapRoute } from "./PrefectureMap";

const PrefectureMap = dynamic(() => import("./PrefectureMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "clamp(340px, 48dvh, 460px)",
        borderRadius: "4px",
        border: "1px solid rgba(17, 17, 17, 0.16)",
        background: "#F2ECE0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(43, 43, 43, 0.55)",
        fontSize: "0.8125rem",
        fontWeight: 600,
        marginTop: "16px",
        marginBottom: "28px",
      }}
    >
      地図を読み込んでいます...
    </div>
  ),
});

export default function PrefectureMapWrapper({
  prefecture,
  routes,
}: {
  prefecture: string;
  routes: PrefectureMapRoute[];
}) {
  return <PrefectureMap prefecture={prefecture} routes={routes} />;
}
