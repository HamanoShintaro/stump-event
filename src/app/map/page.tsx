import HeaderNav from "@/components/HeaderNav";
import MapWrapper from "@/components/MapWrapper";
import Link from "next/link";
import { Search, Map as MapIcon, MapPin } from "lucide-react";

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
        {/* 探索モード切り替え（検索・地図・エリアの固定3軸） */}
        <nav
          aria-label="ルートの探し方"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "6px",
            marginBottom: "18px",
          }}
        >
          <Link
            href="/routes"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              padding: "10px 6px",
              borderRadius: "2px",
              border: "1px solid rgba(17, 17, 17, 0.16)",
              background: "#FAF8F3",
              color: "var(--text-color)",
              textDecoration: "none",
              fontSize: "0.75rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            <Search size={14} color="var(--primary-color)" />
            <span>検索して探す</span>
          </Link>
          <span
            aria-current="page"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              padding: "10px 6px",
              borderRadius: "2px",
              border: "1px solid var(--primary-color)",
              background: "var(--primary-color)",
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            <MapIcon size={14} color="#fff" />
            <span>地図から探す</span>
          </span>
          <Link
            href="/areas"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              padding: "10px 6px",
              borderRadius: "2px",
              border: "1px solid rgba(17, 17, 17, 0.16)",
              background: "#FAF8F3",
              color: "var(--text-color)",
              textDecoration: "none",
              fontSize: "0.75rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            <MapPin size={14} color="var(--primary-color)" />
            <span>エリアから探す</span>
          </Link>
        </nav>

        <div style={{ marginBottom: "14px" }}>
          <h1
            style={{
              fontSize: "1.35rem",
              fontWeight: "800",
              color: "var(--text-color)",
              margin: "0 0 6px 0",
              lineHeight: 1.4,
            }}
          >
            地図から巡る・足跡を振り返る
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(43, 43, 43, 0.78)",
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            周辺の街歩きルートを探したり、訪れた場所のしるしを地図上で振り返れます。
          </p>
        </div>

        <MapWrapper />
      </div>
    </main>
  );
}
