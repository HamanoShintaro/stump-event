import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');
const resolvedPath = path.join(process.cwd(), 'scripts', 'areas', 'resolved_addresses.json');
const vaguePath = path.join(process.cwd(), 'scripts', 'areas', 'vague_spots.json');

// Reconstruct specific branch-level addresses for duplicates
const duplicatePatches = {
  // 氷川神社
  "七里:氷川神社": "埼玉県さいたま市見沼区大谷1472",
  "都立大学:氷川神社": "東京都目黒区八雲2-4-16",
  
  // 亀屋万年堂
  "都立大学:亀屋万年堂": "東京都目黒区中根1-2-17",
  "新丸子:亀屋万年堂": "神奈川県川崎市中原区小杉町3-430",
  "武蔵小杉:亀屋万年堂": "神奈川県川崎市中原区小杉町3-430",

  // スターバックス
  "学芸大学:スターバックス": "東京都目黒区碑文谷4-1-1",
  "多摩川:スターバックス": "東京都大田区田園調布1-53-8",
  "大倉山:スターバックス": "神奈川県横浜市港北区大倉山1-2-10",
  "新丸子:スターバックス": "神奈川県川崎市中原区新丸子東3-1302",
  "武蔵小杉:スターバックス": "神奈川県川崎市中原区新丸子東3-1302",

  // おかしのまちおか
  "元住吉:おかしのまちおか": "神奈川県川崎市中原区木月1-33-33",
  "大倉山:おかしのまちおか": "神奈川県横浜市港北区大倉山1-13-14",
  "新丸子:おかしのまちおか": "神奈川県川崎市中原区小杉町3-430",
  "武蔵小杉:おかしのまちおか": "神奈川県川崎市中原区小杉町3-430",

  // 快活CLUB
  "綱島:快活CLUB": "神奈川県横浜市港北区綱島西2-2-1",
  "八木崎:快活CLUB": "埼玉県春日部市増富豊町4-1-1",
  "春日部:快活CLUB": "埼玉県春日部市増富豊町4-1-1",

  // ジョナサン
  "白楽:ジョナサン": "神奈川県横浜市神奈川区反町2-13-8",
  "八木崎:ジョナサン": "埼玉県春日部市粕壁中央1-10-1",
  "春日部:ジョナサン": "埼玉県春日部市粕壁中央1-10-1",
};

async function applySafePatches() {
  if (!fs.existsSync(draftPath)) {
    console.error("spots_massive_draft.json not found");
    return;
  }
  if (!fs.existsSync(vaguePath)) {
    console.error("vague_spots.json not found");
    return;
  }
  if (!fs.existsSync(resolvedPath)) {
    console.error("resolved_addresses.json not found");
    return;
  }

  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  const vagueSpots = JSON.parse(fs.readFileSync(vaguePath, 'utf-8'));
  const resolved = JSON.parse(fs.readFileSync(resolvedPath, 'utf-8'));

  // 1. Revert vague spots first to ensure a clean starting point
  const originalMap = new Map();
  for (const s of vagueSpots) {
    const key = `${s.station.trim()}:${s.name.trim()}`;
    originalMap.set(key, s.address);
  }

  for (const stationData of dataset) {
    const stationName = stationData.station;
    for (const spot of stationData.spots) {
      const key = `${stationName.trim()}:${spot.name.trim()}`;
      if (originalMap.has(key)) {
        spot.address = originalMap.get(key);
      }
    }
  }
  console.log("Successfully reverted all vague spots to clean unpatched state.");

  // 2. Apply safe geocoded patches
  let patchedCount = 0;

  for (const stationData of dataset) {
    const stationName = stationData.station;
    for (const spot of stationData.spots) {
      const stationKey = `${stationName.trim()}:${spot.name.trim()}`;
      const cleanName = spot.name.trim();

      // Priority 1: Check duplicate branch patches
      if (duplicatePatches[stationKey]) {
        spot.address = duplicatePatches[stationKey];
        patchedCount++;
      }
      // Priority 2: General geocoded addresses (only if it matches and isn't a duplicate branch mismatch)
      else if (resolved[cleanName]) {
        // Skip applying generic addresses to duplicate branches to keep them from overwriting each other
        const hasDuplicatePatch = Object.keys(duplicatePatches).some(k => k.endsWith(`:${cleanName}`));
        if (!hasDuplicatePatch) {
          spot.address = resolved[cleanName];
          patchedCount++;
        }
      }
    }
  }

  fs.writeFileSync(draftPath, JSON.stringify(dataset, null, 2), 'utf-8');
  console.log(`Successfully applied ${patchedCount} precise geocoded addresses safely!`);

  // 3. Re-seed Supabase
  console.log("Re-seeding database...");
  try {
    const output = execSync('node scripts/seed-massive-station-routes.mjs', { encoding: 'utf-8' });
    console.log(output);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Failed to seed database:", err.message);
  }
}

applySafePatches();
