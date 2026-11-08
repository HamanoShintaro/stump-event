import type { Metadata } from "next";
import { getSiteUrl } from "@/utils/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "SHUIN（まちのしるし）に関するご質問・不具合のご報告・プレミアムプランや退会に関するお問い合わせ窓口です。",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
