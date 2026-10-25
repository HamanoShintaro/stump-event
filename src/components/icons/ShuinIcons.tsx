import React from "react";
import {
  Compass,
  MapPin,
  Footprints,
  Clock,
  Sparkles,
  Users,
  Camera,
  PenLine,
  BookOpen,
  Bookmark,
  RefreshCw,
  Award,
  Sun,
  Moon,
  Check,
  ChevronRight,
  ChevronDown,
  Info,
  Map,
  Search,
  Share2,
  Copy,
  QrCode,
} from "lucide-react";

export interface ShuinIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

const baseStyle: React.CSSProperties = {
  display: "inline-block",
  verticalAlign: "middle",
  flexShrink: 0,
};

/** 鳥居（社寺・歴史・聖地） */
export function IconTorii({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M3 5c3 1.2 15 1.2 18 0" />
      <path d="M4 9h16" />
      <path d="M7 5.5V20" />
      <path d="M17 5.5V20" />
      <path d="M12 5.8V9" />
      <path d="M5.5 20h3" />
      <path d="M15.5 20h3" />
    </svg>
  );
}

/** 湯呑み・茶碗（甘味・カフェ・一服・じっくり散策） */
export function IconTeacup({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M6 9h12v5a6 6 0 0 1-12 0V9Z" />
      <path d="M9 19h6" />
      <path d="M4 21h16" />
      <path d="M10 4c0 1.2-1 1.8-1 3" />
      <path d="M14 4c0 1.2-1 1.8-1 3" />
    </svg>
  );
}

/** 御札・街歩きみくじ（縁結び・おみくじ） */
export function IconOmikuji({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M8 3h8l3 3.5V21H5V6.5L8 3Z" />
      <circle cx="12" cy="7" r="1" />
      <path d="M12 10.5v6.5" />
      <path d="M9 13h6" />
    </svg>
  );
}

/** 巻物・旅路のしおり（物語・心得・絵巻） */
export function IconScroll({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M6 4h11a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z" />
      <path d="M9 9h6" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

/** 朱印・落款（押印・SHUIN・踏破のしるし） */
export function IconStampSeal({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M12 9.5v5" />
      <path d="M9.5 12h5" />
    </svg>
  );
}

/** 行灯・提灯（灯り・夕宵・風情） */
export function IconLantern({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M9 3h6" />
      <path d="M12 3v2" />
      <rect x="6" y="5" width="12" height="13" rx="5" />
      <path d="M6.5 9.5h11" />
      <path d="M6.5 13.5h11" />
      <path d="M9 18h6" />
      <path d="M12 18v3" />
    </svg>
  );
}

/** 桜・花紋（季節・風流・彩り） */
export function IconSakura({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 3c1.8 1.5 2.5 3.6 1.5 5.5M12 3c-1.8 1.5-2.5 3.6-1.5 5.5" />
      <path d="M20.5 9.2c-1 2.1-2.8 3.4-4.9 3.1M20.5 9.2c-2.1-.9-4.3-.4-5.6 1.2" />
      <path d="M17.3 19.2c-2.2-.3-4-1.6-4.4-3.7M17.3 19.2c.2-2.2-.9-4.2-2.8-5" />
      <path d="M6.7 19.2c-.2-2.2.9-4.2 2.8-5M6.7 19.2c2.2-.3 4-1.6 4.4-3.7" />
      <path d="M3.5 9.2c2.1-.9 4.3-.4 5.6 1.2M3.5 9.2c1 2.1 2.8 3.4 4.9 3.1" />
    </svg>
  );
}

/** 木の葉・草木（自然・公園・気軽な散歩・余韻） */
export function IconLeaf({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

/** 街並み・蔵・建築（文化・建築・街並み） */
export function IconTown({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M3 10l9-6 9 6" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M9 14h6v6H9v-6Z" />
      <path d="M3 20h18" />
    </svg>
  );
}

/** 朝日（朝の街歩き） */
export function IconSunrise({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M12 3v3" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  );
}

/** 夕暮れ（茜色の夕暮れ逍遥） */
export function IconSunset({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <path d="M12 10V3" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  );
}

/** 和銅開珎・硬貨（予算・費用目安） */
export function IconCoin({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
    </svg>
  );
}

export function IconCompass({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Compass
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconMapPin({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <MapPin
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconFootprints({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Footprints
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconClock({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Clock
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconSparkles({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Sparkles
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconUsers({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Users
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconCamera({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Camera
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconPen({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <PenLine
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconBook({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <BookOpen
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconBookmark({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Bookmark
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconRefresh({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <RefreshCw
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconAward({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Award
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconSun({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Sun
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconMoon({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Moon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconCheck({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Check
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconChevronRight({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <ChevronRight
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconChevronDown({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <ChevronDown
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconInfo({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Info
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconMap({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Map
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconSearch({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Search
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconShare({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Share2
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconCopy({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <Copy
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}

export function IconQrCode({
  size = 16,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
  style,
}: ShuinIconProps) {
  return (
    <QrCode
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      style={{ ...baseStyle, ...style }}
      aria-hidden="true"
    />
  );
}
