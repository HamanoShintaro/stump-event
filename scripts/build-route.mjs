#!/usr/bin/env node
// SHUIN 再現性エンジン: 記入済みエリア定義 → アプリのデータ形(route/spots/badges/自答)へ変換
// 使い方: node scripts/build-route.mjs scripts/areas/<slug>.mjs
import { randomUUID } from "crypto";
import { pathToFileURL } from "url";
import path from "path";

const fragment = (clue) => {
  if (!clue) return "";
  const first = String(clue).split("。")[0];
  return first ? first + "。" : String(clue).slice(0, 40);
};
const full = (clue, surprise, hook) => [clue, surprise, hook].filter(Boolean).join("\n\n");

function build(area) {
  const errors = [];
  if (!area.slug) errors.push("slug が未設定");
  if (!area.title) errors.push("title が未設定");
  if (!Array.isArray(area.spots) || area.spots.length === 0) errors.push("spots が空");
  if (area.choices && area.choices.length !== 4) errors.push("choices は4択にしてください");
  (area.spots || []).forEach((s, i) => {
    if (!s.name) errors.push(`spot${i + 1}: name 未設定`);
    if (typeof s.lat !== "number" || typeof s.lng !== "number") errors.push(`spot${i + 1}: lat/lng 未設定(GPS実測)`);
  });
  // 岩槻FB: 回遊の質のため 買い物/休憩/食事 を最低1つ
  if (!(area.spots || []).some((s) => ["買い物", "休憩", "食事"].includes(s.spot_type))) {
    errors.push("回遊ルール: 買い物/休憩/食事のスポットを最低1つ入れてください（岩槻FB）");
  }

  const routeId = randomUUID();
  const spots = (area.spots || []).map((s, i, arr) => {
    const id = randomUUID();
    return {
      _id: id,
      db: { id, route_id: routeId, name: s.name, description: s.description || "", image_url: s.image_url || `/images/${area.slug}/spot${i + 1}.png`, address: s.address || "", location: `POINT(${s.lng} ${s.lat})`, radius_meters: s.radius_meters || 50, order_index: i + 1 },
      overlay: { id, name: s.name, address: s.address || "", lat: s.lat, lng: s.lng, qr_token: s.qr_token || `shuin-${area.slug}-${i + 1}`, cover_image_url: s.image_url || `/images/${area.slug}/spot${i + 1}.png`, f7_fragment: s.f7_fragment || fragment(s.clue), f7_full: s.f7_full || full(s.clue, s.surprise, s.hook), spot_type: s.spot_type || "見どころ", is_final: i === arr.length - 1 }
    };
  });
  spots.forEach((s, i) => {
    if (i < spots.length - 1) { s.overlay.next_spot_id = spots[i + 1]._id; s.overlay.next_spot_name = spots[i + 1].db.name; }
  });

  const quiz = area.choices ? { question: area.question, choices: area.choices.map((c) => ({ key: c.key, text: c.text, description: c.description, badge_code: c.badge && c.badge.code })) } : null;

  const route = { id: routeId, title: area.title, name: area.title, description: area.description || "", area_name: area.area_name, category: area.category || "地域を感じたい", prefecture: area.prefecture || "", budget_tier: area.budget_tier || 1, is_published: true, thumbnail_url: `/images/${area.slug}/route-eyecatch.png`, completion_ceremony_type: quiz ? "quiz_4choice" : "simple", completion_quiz_data: quiz };

  const badges = [];
  if (area.completion_badge) badges.push({ code: `trailblazer_of_${routeId}`, category: "route", name_ja: area.completion_badge.name_ja, subtitle_en: area.completion_badge.subtitle_en, rarity: 2, description: area.completion_badge.description || "", condition_type: "route_complete", condition_params: { route_id: routeId }, route_id: routeId, is_active: true });
  (area.choices || []).forEach((c) => { if (c.badge) badges.push({ code: c.badge.code, category: "quiz", name_ja: c.badge.name_ja, subtitle_en: c.badge.subtitle_en, rarity: c.badge.rarity || 3, description: c.badge.description || "", condition_type: "quiz_choice", condition_params: { route_id: routeId, choice: c.key }, route_id: routeId, is_active: true }); });

  return { errors, route, db_spots: spots.map((s) => s.db), overlay_spots: spots.map((s) => s.overlay), badges };
}

async function main() {
  const arg = process.argv[2];
  if (!arg) { console.error("使い方: node scripts/build-route.mjs scripts/areas/<slug>.mjs"); process.exit(1); }
  const mod = await import(pathToFileURL(path.resolve(arg)).href);
  const area = mod.default || mod.area;
  const out = build(area);
  if (out.errors.length) console.error("⚠ 検証:\n - " + out.errors.join("\n - ") + "\n");
  console.log("// ===== routes (1行) ====="); console.log(JSON.stringify(out.route, null, 2));
  console.log("// ===== spots (DB投入) ====="); console.log(JSON.stringify(out.db_spots, null, 2));
  console.log("// ===== mock.ts overlay spots ====="); console.log(JSON.stringify(out.overlay_spots, null, 2));
  console.log("// ===== badges ====="); console.log(JSON.stringify(out.badges, null, 2));
  console.log(`\n✅ ${out.db_spots.length} spots / ${out.badges.length} badges 生成 (routeId=${out.route.id})`);
}
main();
