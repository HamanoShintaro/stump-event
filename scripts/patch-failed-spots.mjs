import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');
const tempQueryPath = path.join(process.cwd(), 'scripts', 'areas', 'temp_patch_query.txt');

const stationCoords = {
  "中目黒": { lat: 35.644167, lng: 139.699167, line: "東急東横線" },
  "都立大学": { lat: 35.617778, lng: 139.676389, line: "東急東横線" },
  "自由が丘": { lat: 35.607222, lng: 139.668611, line: "東急東横線" },
  "新丸子": { lat: 35.580556, lng: 139.662222, line: "東急東横線" },
  "日吉": { lat: 35.556667, lng: 139.646944, line: "東急東横線" },
  "菊名": { lat: 35.509444, lng: 139.631111, line: "東急東横線" },
  "白楽": { lat: 35.487738, lng: 139.626197, line: "東急東横線" },
  "大宮": { lat: 35.908056, lng: 139.627222, line: "東武野田線" },
  "大和田": { lat: 35.918611, lng: 139.654167, line: "東武野田線" },
  "豊春": { lat: 35.966944, lng: 139.725833, line: "東武野田線" }
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getPrefecture(line, station) {
  if (line === "東武野田線") return "埼玉県";
  const tokyoStations = ["渋谷", "代官山", "中目黒", "祐天寺", "学芸大学", "都立大学", "自由が丘", "田園調布", "多摩川"];
  if (tokyoStations.includes(station)) return "東京都";
  return "神奈川県";
}

const endpoints = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://lz4.overpass-api.de/api/interpreter',
  'https://z.overpass-api.de/api/interpreter'
];

function queryOverpassWithCurl(query, endpointIdx = 0) {
  fs.writeFileSync(tempQueryPath, query, 'utf-8');
  const endpoint = endpoints[endpointIdx % endpoints.length];
  console.log(`  Querying Overpass via ${endpoint}...`);

  const ua = 'SHUIN-Fieldwork-Healer/1.0 (contact: info@shuinapp.example.com)';
  const cmd = `curl -s -X POST --data-urlencode "data@${tempQueryPath}" -H "User-Agent: ${ua}" "${endpoint}"`;
  
  try {
    const output = execSync(cmd, { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 10 });
    if (!output || output.trim() === '') {
      throw new Error("Empty response");
    }
    const data = JSON.parse(output);
    if (data.remark && data.remark.includes("error")) {
      throw new Error(`Overpass error: ${data.remark}`);
    }
    return data.elements || [];
  } catch (e) {
    console.warn(`  Endpoint ${endpoint} failed: ${e.message}`);
    return null;
  }
}

async function patch() {
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft file not found at ${draftPath}`);
    process.exit(1);
  }

  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));
  
  for (let stationIdx = 0; stationIdx < dataset.length; stationIdx++) {
    const stationData = dataset[stationIdx];
    if (stationData.spots.length >= 10) {
      continue; // Skip already complete stations
    }

    const stationName = stationData.station;
    const coords = stationCoords[stationName];
    if (!coords) {
      console.warn(`No coordinate info for ${stationName}. Skipping.`);
      continue;
    }

    console.log(`\nPatching failed station: ${stationName} (Currently has only ${stationData.spots.length} spots)`);

    const query = `[out:json][timeout:25];
(
  nwr["amenity"~"cafe|restaurant|tea_room"](around:1000, ${coords.lat}, ${coords.lng});
  nwr["shop"~"bakery|books|gift|confectionery|pastry|cake"](around:1000, ${coords.lat}, ${coords.lng});
  nwr["historic"~"monument|memorial|ruins|tomb|castle|shrine|temple"](around:1000, ${coords.lat}, ${coords.lng});
  nwr["tourism"~"attraction|museum|viewpoint|gallery|artwork"](around:1000, ${coords.lat}, ${coords.lng});
  nwr["amenity"="place_of_worship"](around:1000, ${coords.lat}, ${coords.lng});
  nwr["leisure"="park"](around:1000, ${coords.lat}, ${coords.lng});
);
out center;`;

    let elements = null;
    for (let epIdx = 0; epIdx < endpoints.length; epIdx++) {
      elements = queryOverpassWithCurl(query, epIdx);
      if (elements && elements.length > 0) {
        break;
      }
      await sleep(3000); // Wait before trying next mirror
    }

    if (!elements || elements.length === 0) {
      console.error(`Failed to patch ${stationName} using all mirrors!`);
      continue;
    }

    console.log(`  Found ${elements.length} raw elements from OSM.`);
    const existingSpots = stationData.spots;
    const seenNames = new Set(existingSpots.map(s => s.name.replace(/（.*）$/, "").trim()));
    const gatheredSpots = [];
    const pref = getPrefecture(coords.line, stationName);

    for (const el of elements) {
      const tags = el.tags || {};
      const name = tags['name:ja'] || tags['name'] || tags['operator'] || tags['brand'];
      if (!name) continue;

      const cleanName = name.replace(/[a-zA-Z0-9]/g, '').trim();
      if (cleanName.length < 2) continue;
      if (name.includes("駅") && (tags['railway'] === 'station' || tags['highway'] === 'bus_stop')) continue;
      
      const nameKey = name.replace(/（.*）$/, "").trim();
      if (seenNames.has(nameKey)) continue;

      const lat = el.lat || (el.center && el.center.lat);
      const lng = el.lon || (el.center && el.center.lon);
      if (!lat || !lng) continue;

      // Determine type
      let type = "見どころ";
      let descPrefix = "歴史と情緒を感じるスポット";
      
      if (tags['amenity'] && ['cafe', 'restaurant', 'tea_room'].includes(tags['amenity'])) {
        type = "休憩";
        descPrefix = "散策の合間に心地よい休息を提供する名店";
      } else if (tags['shop'] || tags['amenity'] === 'marketplace') {
        type = "買い物";
        descPrefix = "地元の魅力的な品々やこだわりのお土産が見つかる店";
      } else if (tags['historic'] || tags['tourism'] || tags['amenity'] === 'place_of_worship' || tags['leisure'] === 'park') {
        type = "見どころ";
        descPrefix = "街の記憶と四季の移ろいを静かに語る見どころ";
      }

      const categoryText = tags['religion'] === 'shinto' ? "神社" : tags['religion'] === 'buddhist' ? "寺院" : tags['historic'] ? "史跡" : type;
      const description = `${stationName}駅周辺の${categoryText}。${descPrefix}として、訪れる人々に親しまれています。`;

      let address = tags['addr:full'] || tags['addr:street'];
      if (!address) {
        address = `${pref} ${stationName}周辺`;
      } else if (!address.startsWith(pref)) {
        address = `${pref}${address}`;
      }

      gatheredSpots.push({
        name: `${name}（${stationName}）`,
        spot_type: type,
        description,
        address,
        lat: Number(lat.toFixed(6)),
        lng: Number(lng.toFixed(6))
      });

      seenNames.add(nameKey);
    }

    const sights = gatheredSpots.filter(s => s.spot_type === "見どころ");
    const rests = gatheredSpots.filter(s => s.spot_type === "休憩");
    const shops = gatheredSpots.filter(s => s.spot_type === "買い物");

    const extraSpots = [];
    const maxLen = Math.max(sights.length, rests.length, shops.length);
    for (let i = 0; i < maxLen; i++) {
      if (sights[i]) extraSpots.push(sights[i]);
      if (rests[i]) extraSpots.push(rests[i]);
      if (shops[i]) extraSpots.push(shops[i]);
    }

    const needed = 10 - existingSpots.length;
    const selectedExtras = extraSpots.slice(0, needed);
    stationData.spots = [...existingSpots, ...selectedExtras];

    console.log(`  Successfully patched ${stationName}! Now has ${stationData.spots.length} spots.`);

    // Sleep 8 seconds between stations to be very polite
    await sleep(8000);
  }

  // Cleanup temp file
  if (fs.existsSync(tempQueryPath)) {
    fs.unlinkSync(tempQueryPath);
  }

  fs.writeFileSync(draftPath, JSON.stringify(dataset, null, 2), 'utf-8');
  console.log(`\nPatching complete! Saved to: ${draftPath}`);
}

patch();
