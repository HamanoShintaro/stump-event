import fs from 'fs';
import path from 'path';

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');
const outputPath = path.join(process.cwd(), 'scripts', 'areas', 'vague_spots.json');

function exportVagueSpots() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft file not found at ${draftPath}`);
    process.exit(1);
  }

  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  const vagueList = [];

  for (const stationData of dataset) {
    for (const spot of stationData.spots) {
      const addr = spot.address || '';
      // If address does not end in a number, it lacks house/block numbers
      const hasNumberAtEnd = /[0-9０-９]$/.test(addr);
      
      if (!hasNumberAtEnd) {
        vagueList.push({
          station: stationData.station,
          name: spot.name,
          address: addr,
          lat: spot.lat,
          lng: spot.lng
        });
      }
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(vagueList, null, 2), 'utf-8');
  console.log(`Exported ${vagueList.length} vague spots to: ${outputPath}`);
}

exportVagueSpots();
