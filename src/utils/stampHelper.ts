/**
 * ナラティブ（ルート）のカテゴリー文字列から、対応するスタンプ画像のURLを取得します。
 * 表記ゆれや文字コードの違い（NFD/NFCなど）を考慮してマッピングします。
 */
export function getCategoryStampUrl(category: string | undefined): string {
  if (!category) return "/stamps/xxx_stamp.png";

  const normalized = category.trim().normalize("NFC");

  if (normalized === "食べたい" || normalized === "eat") return "/stamps/eat.png";
  if (normalized === "見たい" || normalized === "see") return "/stamps/see.png";
  if (normalized === "体験したい" || normalized === "experience") return "/stamps/experience.png";
  if (normalized === "集めたい" || normalized === "collect") return "/stamps/collect.png";
  if (normalized === "推しに触れたい" || normalized === "fave") return "/stamps/fave.png";
  if (normalized === "学びたい" || normalized === "learn") return "/stamps/learn.png";
  if (normalized === "癒されたい" || normalized === "癒やされたい" || normalized === "heal") return "/stamps/heal.png";
  if (normalized === "達成したい" || normalized === "achieve") return "/stamps/achieve.png";
  if (normalized === "人と過ごしたい" || normalized === "social") return "/stamps/social.png";
  if (normalized === "地域を感じたい" || normalized === "地域を感じたい" || normalized === "local") return "/stamps/local.png";

  return "/stamps/xxx_stamp.png";
}

/**
 * カテゴリー文字列から、対応する紙面（背景）画像のURLを取得します。
 */
export function getCategoryBgUrl(category: string | undefined): string {
  if (!category) return "/stamps/bg_eat.png";

  const normalized = category.trim().normalize("NFC");

  if (normalized === "食べたい" || normalized === "eat") return "/stamps/bg_eat.png";
  if (normalized === "見たい" || normalized === "see") return "/stamps/bg_see.png";
  if (normalized === "体験したい" || normalized === "experience") return "/stamps/bg_experience.png";
  if (normalized === "集めたい" || normalized === "collect") return "/stamps/bg_collect.png";
  if (normalized === "推しに触れたい" || normalized === "fave") return "/stamps/bg_fave.png";
  if (normalized === "学びたい" || normalized === "learn") return "/stamps/bg_learn.png";
  if (normalized === "癒されたい" || normalized === "癒やされたい" || normalized === "heal") return "/stamps/bg_heal.png";
  if (normalized === "達成したい" || normalized === "achieve") return "/stamps/bg_achieve.png";
  if (normalized === "人と過ごしたい" || normalized === "social") return "/stamps/bg_social.png";
  if (normalized === "地域を感じたい" || normalized === "地域を感じたい" || normalized === "local") return "/stamps/bg_local.png";

  return "/stamps/bg_eat.png";
}
