import type { Metadata } from "next";
import { getSiteUrl } from "@/utils/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "街歩きの手引き・使い方｜物語をめぐりSHUINを刻む4つのステップ",
  description:
    "SHUIN（まちのしるし）のはじめ方・使い方案内。ルートの選び方、現地スポットでの押印方法、仲間と一緒に歩く「連れ立ち」機能、思い出を残すSHUIN帳の楽しみ方をわかりやすく紹介します。",
  alternates: {
    canonical: `${siteUrl}/guide`,
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
