import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getPrefecture(line, station) {
  if (line === "東武野田線") return "埼玉県";
  const tokyoStations = ["渋谷", "代官山", "中目黒", "祐天寺", "学芸大学", "都立大学", "自由が丘", "田園調布", "多摩川"];
  if (tokyoStations.includes(station)) return "東京都";
  return "神奈川県";
}

function buildAddress(addr) {
  if (!addr) return '';
  const pref = addr.province || addr.state || "";
  const city = addr.city || addr.town || addr.village || "";
  const ward = addr.suburb || "";
  const quarter = addr.quarter || "";
  const neighbourhood = addr.neighbourhood || "";
  const local = neighbourhood.includes(quarter) ? neighbourhood : (quarter + neighbourhood);
  const houseNumber = addr.house_number || "";
  return `${pref}${city}${ward}${local}${houseNumber}`;
}

function queryNominatim(lat, lng) {
  const ua = 'SHUIN-Address-Sanitizer/1.0 (contact: info@shuinapp.example.com)';
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ja`;
  const cmd = `curl -s -H "User-Agent: ${ua}" "${url}"`;
  
  try {
    const output = execSync(cmd, { encoding: 'utf-8' });
    if (!output || output.trim() === '') return null;
    const data = JSON.parse(output);
    return data.address || null;
  } catch (e) {
    console.error(`  Nominatim query failed for ${lat}, ${lng}: ${e.message}`);
    return null;
  }
}

async function cleanAndGeocode() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft file not found at ${draftPath}`);
    process.exit(1);
  }

  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  let totalQueries = 0;

  for (let sIdx = 0; sIdx < dataset.length; sIdx++) {
    const stationData = dataset[sIdx];
    const stationName = stationData.station;
    const lineName = stationData.line;
    const pref = getPrefecture(lineName, stationName);

    console.log(`Processing station [${sIdx + 1}/30]: ${stationName} (${pref})`);

    for (let s = 0; s < stationData.spots.length; s++) {
      const spot = stationData.spots[s];
      
      // 1. Remove the (Station Name) suffix from the spot name
      const suffixPattern = new RegExp(`（${stationName}）$`);
      if (suffixPattern.test(spot.name)) {
        spot.name = spot.name.replace(suffixPattern, "").trim();
      }

      // 2. Fetch real address if it's currently a fallback address ending in "周辺"
      if (spot.address && spot.address.endsWith("周辺")) {
        console.log(`  Geocoding address for spot: "${spot.name}"...`);
        const addressObj = queryNominatim(spot.lat, spot.lng);
        
        if (addressObj) {
          let realAddress = buildAddress(addressObj);
          if (realAddress && realAddress.trim().length > 2) {
            // Prepend prefecture if it's missing (common in Tokyo response from Nominatim)
            if (!realAddress.startsWith(pref)) {
              realAddress = pref + realAddress;
            }
            console.log(`    -> Resolved: "${realAddress}"`);
            spot.address = realAddress;
          }
        }
        
        totalQueries++;
        // Respect Nominatim rate limit: 1.25 seconds sleep
        await sleep(1250);
      }
    }
  }

  fs.writeFileSync(draftPath, JSON.stringify(dataset, null, 2), 'utf-8');
  console.log(`\nAddress resolution complete! Performed ${totalQueries} queries. Saved to: ${draftPath}`);
}

cleanAndGeocode();
