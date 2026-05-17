import HeaderNav from "@/components/HeaderNav";
import MapWrapper from "@/components/MapWrapper";
import Link from "next/link";

export const metadata = {
  title: "地図から探す - みんなのスタンプラリー"
};

export default function MapPage() {
  return (
    <main className="container" style={{ paddingBottom: "40px" }}>
      <header style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" className="nav-logo">
          <img src="/logo-square.png" alt="みんなのスタンプラリー" style={{ height: "44px", width: "44px", display: "block", objectFit: "contain" }} />
        </Link>
        <HeaderNav />
      </header>
      
      <div>
        <h1 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-color)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span>🗺️</span> 地図から探す
        </h1>
        <p style={{ fontSize: "0.85rem", color: "var(--secondary-color)", marginBottom: "20px", fontWeight: "600" }}>
          現在地周辺のスタンプスポットを表示しています。<br />ピンをタップすると詳細が見れます。
        </p>
        
        <MapWrapper />
      </div>
    </main>
  );
}
