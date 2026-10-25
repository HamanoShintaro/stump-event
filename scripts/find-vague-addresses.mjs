import fs from 'fs';
import path from 'path';

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');

function findVagueAddresses() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft file not found at ${draftPath}`);
    process.exit(1);
  }

  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  const vagueSpots = [];

  for (const stationData of dataset) {
    for (const spot of stationData.spots) {
      const addr = spot.address || '';
      // Check if address ends with 丁目 or a kanji/non-number character, indicating it lacks a block/house number
      // (Addresses with house numbers usually end with numbers like 1-5-1 or 24 or 二丁目1271)
      const hasNumberAtEnd = /[0-9０-９]$/.test(addr);
      
      if (!hasNumberAtEnd) {
        vagueSpots.push({
          station: stationData.station,
          name: spot.name,
          address: addr,
          lat: spot.lat,
          lng: spot.lng
        });
      }
    }
  }

  console.log(`Found ${vagueSpots.length} potentially vague addresses out of 300:`);
  console.log(JSON.stringify(vagueSpots, null, 2));
}

findVagueAddresses();
