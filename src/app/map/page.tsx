import HeaderNav from "@/components/HeaderNav";
import MapWrapper from "@/components/MapWrapper";
import Link from "next/link";

export const metadata = {
  title: "街歩き発見マップ - SHUIN",
};

export default function MapPage() {
  return (
    <main className="container" style={{ paddingBottom: "32px" }}>
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

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "14px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "1.4rem",
                fontWeight: "800",
                color: "var(--text-color)",
                marginBottom: "4px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>🗺️</span> 地図から巡る・足跡を振り返る
            </h1>
            <p
              style={{
                fontSize: "0.84rem",
                color: "var(--text-color)",
                opacity: 0.78,
                margin: 0,
                fontWeight: "600",
              }}
            >
              周辺の街歩きルートを探したり、「自分の足跡」に切り替えて訪れた場所のしるしを地図上で振り返れます。
            </p>
          </div>
          <Link
            href="/routes"
            style={{
              fontSize: "0.8rem",
              fontWeight: 800,
              color: "var(--primary-color)",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "999px",
              border: "1px solid var(--primary-color)",
              background: "rgba(199, 68, 46, 0.05)",
              whiteSpace: "nowrap",
            }}
          >
            📋 一覧でルートを探す ▸
          </Link>
        </div>

        <MapWrapper />
      </div>
    </main>
  );
}
