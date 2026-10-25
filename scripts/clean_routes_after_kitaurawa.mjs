import { createClient } from '@supabase/supabase-js';
import ws from 'ws';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

// 残すルートのIDリスト（北浦和以前の9ルート）
const KEEP_ROUTE_IDS = new Set([
  'a4b1c2d3-e4f5-5a6b-7c8d-9e0f1a2b3c4d', // 自由が丘
  'e2b1c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d', // 与野
  'd3b1c2d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d', // 岩槻
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c66', // 北浦和
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c61', // 埼玉ラーメン
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c62', // 埼玉自然満喫
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c63', // 埼玉歴史神社
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c64', // 埼玉B級グルメ
  'f1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c65', // 埼玉鉄道博物館
]);

async function main() {
  console.log("=== Step 1: Fetching all routes ===");
  const { data: allRoutes, error: rErr } = await supabase
    .from('routes')
    .select('*')
    .order('created_at', { ascending: true });

  if (rErr) {
    console.error("Failed to fetch routes:", rErr);
    process.exit(1);
  }

  const routesToDelete = allRoutes.filter(r => !KEEP_ROUTE_IDS.has(r.id));
  const routesToKeep = allRoutes.filter(r => KEEP_ROUTE_IDS.has(r.id));

  console.log(`Total routes: ${allRoutes.length}`);
  console.log(`Routes to keep (${routesToKeep.length}):`);
  routesToKeep.forEach(r => console.log(`  - [KEEP] ${r.title} (${r.id})`));

  console.log(`Routes to delete (${routesToDelete.length}):`);
  routesToDelete.slice(0, 5).forEach(r => console.log(`  - [DELETE sample] ${r.title} (${r.id})`));
  if (routesToDelete.length > 5) console.log(`  ... and ${routesToDelete.length - 5} more.`);

  const deleteRouteIds = routesToDelete.map(r => r.id);

  console.log("\n=== Step 2: Safety Check on user stamps ===");
  const { data: stamps, error: sErr } = await supabase
    .from('stamps')
    .select('id, route_id, spot_id');
  if (sErr) {
    console.error("Failed to fetch stamps:", sErr);
    process.exit(1);
  }

  const conflictStamps = stamps.filter(s => deleteRouteIds.includes(s.route_id));
  if (conflictStamps.length > 0) {
    console.error(`ABORTING: Found ${conflictStamps.length} stamps associated with routes to be deleted!`);
    process.exit(1);
  }
  console.log(`Verified: 0 user stamps linked to the ${deleteRouteIds.length} routes to be deleted.`);

  console.log("\n=== Step 3: Backup target data before deletion ===");
  const backupDir = path.join(process.cwd(), 'scripts', 'backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  // Backup spots to delete
  const { data: spotsToDelete } = await supabase
    .from('spots')
    .select('*')
    .in('route_id', deleteRouteIds);

  // Backup badges to delete
  const { data: badgesToDelete } = await supabase
    .from('badges')
    .select('*')
    .in('route_id', deleteRouteIds);

  const backupPayload = {
    deleted_at: new Date().toISOString(),
    routes: routesToDelete,
    spots: spotsToDelete || [],
    badges: badgesToDelete || []
  };

  const backupFilePath = path.join(backupDir, `deleted_routes_backup_${Date.now()}.json`);
  fs.writeFileSync(backupFilePath, JSON.stringify(backupPayload, null, 2));
  console.log(`Backup saved to: ${backupFilePath}`);
  console.log(`  - ${routesToDelete.length} routes`);
  console.log(`  - ${(spotsToDelete || []).length} spots`);
  console.log(`  - ${(badgesToDelete || []).length} badges`);

  console.log("\n=== Step 4: Deleting badges, spots, routes ===");
  // 1. Delete Badges in chunks
  const chunkSize = 20;
  for (let i = 0; i < deleteRouteIds.length; i += chunkSize) {
    const chunk = deleteRouteIds.slice(i, i + chunkSize);
    const { error: bErr } = await supabase.from('badges').delete().in('route_id', chunk);
    if (bErr) console.warn("Error deleting badges chunk:", bErr.message);
  }
  console.log("Deleted badges.");

  // 2. Delete Spots in chunks
  for (let i = 0; i < deleteRouteIds.length; i += chunkSize) {
    const chunk = deleteRouteIds.slice(i, i + chunkSize);
    const { error: spErr } = await supabase.from('spots').delete().in('route_id', chunk);
    if (spErr) console.warn("Error deleting spots chunk:", spErr.message);
  }
  console.log("Deleted spots.");

  // 3. Delete Routes in chunks
  for (let i = 0; i < deleteRouteIds.length; i += chunkSize) {
    const chunk = deleteRouteIds.slice(i, i + chunkSize);
    const { error: rDelErr } = await supabase.from('routes').delete().in('id', chunk);
    if (rDelErr) console.warn("Error deleting routes chunk:", rDelErr.message);
  }
  console.log("Deleted routes.");

  console.log("\n=== Step 5: Verification ===");
  const { data: remainingRoutes } = await supabase
    .from('routes')
    .select('id, title')
    .order('created_at', { ascending: true });

  console.log(`Remaining routes count: ${remainingRoutes.length}`);
  remainingRoutes.forEach((r, idx) => console.log(`  ${idx + 1}. ${r.title} (${r.id})`));

  const { count: finalStampCount } = await supabase.from('stamps').select('*', { count: 'exact', head: true });
  console.log(`User stamps count after cleanup: ${finalStampCount} (must be 36)`);

  console.log("\n=== Cleanup finished successfully! ===");
}

main().catch(err => {
  console.error("Execution failed:", err);
  process.exit(1);
});
