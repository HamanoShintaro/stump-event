import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');
const resolvedPath = path.join(process.cwd(), 'scripts', 'areas', 'resolved_addresses.json');

function applyPatches() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft file not found at ${draftPath}`);
    process.exit(1);
  }

  if (!fs.existsSync(resolvedPath)) {
    console.error(`Resolved addresses file not found at ${resolvedPath}. Please wait for the subagent to finish.`);
    process.exit(1);
  }

  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  const resolved = JSON.parse(fs.readFileSync(resolvedPath, 'utf-8'));

  let patchedCount = 0;

  for (const stationData of dataset) {
    for (const spot of stationData.spots) {
      // Find clean spot name
      const cleanName = spot.name.trim();
      
      // Match by exact name or name with suffix removed
      if (resolved[cleanName]) {
        spot.address = resolved[cleanName];
        patchedCount++;
      }
    }
  }

  fs.writeFileSync(draftPath, JSON.stringify(dataset, null, 2), 'utf-8');
  console.log(`Successfully patched ${patchedCount} vague addresses with precise block-level street addresses!`);

  // Run the database seeding script to push changes to Supabase
  console.log("Re-seeding database with precise addresses...");
  try {
    const output = execSync('node scripts/seed-massive-station-routes.mjs', { encoding: 'utf-8' });
    console.log(output);
    console.log("Database successfully seeded!");
  } catch (err) {
    console.error("Failed to seed database:", err.message);
  }
}

applyPatches();
