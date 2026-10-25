import fs from 'fs';
import path from 'path';

const vaguePath = path.join(process.cwd(), 'scripts', 'areas', 'vague_spots.json');
const resolvedPath = path.join(process.cwd(), 'scripts', 'areas', 'resolved_addresses.json');

function getUnresolved() {
  if (!fs.existsSync(vaguePath)) {
    console.error("vague_spots.json not found");
    return;
  }

  const vagueSpots = JSON.parse(fs.readFileSync(vaguePath, 'utf-8'));
  const resolved = fs.existsSync(resolvedPath) ? JSON.parse(fs.readFileSync(resolvedPath, 'utf-8')) : {};

  const unresolved = [];
  const uniqueNames = new Set();

  for (const s of vagueSpots) {
    const name = s.name.trim();
    if (uniqueNames.has(name)) continue;
    uniqueNames.add(name);

    const addr = resolved[name];
    if (!addr || addr.includes('(Unresolved)')) {
      unresolved.push({
        name,
        station: s.station,
        address: s.address
      });
    }
  }

  console.log(`Total unresolved spots: ${unresolved.length}`);
  
  // Group into batches of 4
  const batches = [];
  for (let i = 0; i < unresolved.length; i += 4) {
    const batch = unresolved.slice(i, i + 4);
    const query = batch.map(b => `"${b.name} (${b.station} or ${b.address.substring(0, 10)})"`).join(' ') + ' 住所';
    batches.push({
      query,
      spots: batch.map(b => b.name)
    });
  }

  fs.writeFileSync(path.join(process.cwd(), 'scripts', 'areas', 'unresolved_batches.json'), JSON.stringify(batches, null, 2), 'utf-8');
  console.log(`Saved ${batches.length} query batches to unresolved_batches.json`);
}

getUnresolved();
