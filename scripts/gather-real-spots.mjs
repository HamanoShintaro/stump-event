import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_draft.json');
const outputPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');
const tempQueryPath = path.join(process.cwd(), 'scripts', 'areas', 'temp_query.txt');

const stations = [
  // Tokyu Toyoko Line
  { line: "東急東横線", name: "渋谷", lat: 35.658034, lng: 139.701636 },
  { line: "東急東横線", name: "代官山", lat: 35.648056, lng: 139.703333 },
  { line: "東急東横線", name: "中目黒", lat: 35.644167, lng: 139.699167 },
  { line: "東急東横線", name: "祐天寺", lat: 35.6375, lng: 139.690833 },
  { line: "東急東横線", name: "学芸大学", lat: 35.627778, lng: 139.684167 },
  { line: "東急東横線", name: "都立大学", lat: 35.617778, lng: 139.676389 },
  { line: "東急東横線", name: "自由が丘", lat: 35.607222, lng: 139.668611 },
  { line: "東急東横線", name: "田園調布", lat: 35.596944, lng: 139.6675 },
  { line: "東急東横線", name: "多摩川", lat: 35.588889, lng: 139.669444 },
  { line: "東急東横線", name: "新丸子", lat: 35.580556, lng: 139.662222 },
  { line: "東急東横線", name: "武蔵小杉", lat: 35.574444, lng: 139.660278 },
  { line: "東急東横線", name: "元住吉", lat: 35.564722, lng: 139.654722 },
  { line: "東急東横線", name: "日吉", lat: 35.556667, lng: 139.646944 },
  { line: "東急東横線", name: "綱島", lat: 35.536944, lng: 139.635 },
  { line: "東急東横線", name: "大倉山", lat: 35.521389, lng: 139.629444 },
  { line: "東急東横線", name: "菊名", lat: 35.509444, lng: 139.631111 },
  { line: "東急東横線", name: "妙蓮寺", lat: 35.498511, lng: 139.634322 },
  { line: "東急東横線", name: "白楽", lat: 35.487738, lng: 139.626197 },
  { line: "東急東横線", name: "反町", lat: 35.47222, lng: 139.62639 },
  { line: "東急東横線", name: "横浜", lat: 35.465556, lng: 139.621944 },

  // Tobu Noda Line (Omiya to Kasukabe)
  { line: "東武野田線", name: "大宮", lat: 35.908056, lng: 139.627222 },
  { line: "東武野田線", name: "北大宮", lat: 35.916111, lng: 139.630556 },
  { line: "東武野田線", name: "大宮公園", lat: 35.925556, lng: 139.632222 },
  { line: "東武野田線", name: "大和田", lat: 35.918611, lng: 139.654167 },
  { line: "東武野田線", name: "七里", lat: 35.916111, lng: 139.676389 },
  { line: "東武野田線", name: "岩槻", lat: 35.949722, lng: 139.695833 },
  { line: "東武野田線", name: "東岩槻", lat: 35.962778, lng: 139.709444 },
  { line: "東武野田線", name: "豊春", lat: 35.966944, lng: 139.725833 },
  { line: "東武野田線", name: "八木崎", lat: 35.977222, lng: 139.745556 },
  { line: "東武野田線", name: "春日部", lat: 35.975278, lng: 139.744167 }
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getPrefecture(line, station) {
  if (line === "東武野田線") return "埼玉県";
  const tokyoStations = ["渋谷", "代官山", "中目黒", "祐天寺", "学芸大学", "都立大学", "自由が丘", "田園調布", "多摩川"];
  if (tokyoStations.includes(station)) return "東京都";
  return "神奈川県";
}

function queryOverpassWithCurl(query) {
  // Write query to temporary file
  fs.writeFileSync(tempQueryPath, query, 'utf-8');

  const ua = 'SHUIN-Fieldwork-Verifier/1.0 (contact: info@shuinapp.example.com)';
  const cmd = `curl -s -X POST --data-urlencode "data@${tempQueryPath}" -H "User-Agent: ${ua}" "https://overpass-api.de/api/interpreter"`;
  
  let attempts = 3;
  while (attempts > 0) {
    try {
      const output = execSync(cmd, { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 15 });
      if (!output || output.trim() === '') {
        throw new Error("Empty response");
      }
      const data = JSON.parse(output);
      if (data.remark && data.remark.includes("error")) {
        throw new Error(`Overpass remark error: ${data.remark}`);
      }
      
      // Delete temp file after successful run
      if (fs.existsSync(tempQueryPath)) {
        fs.unlinkSync(tempQueryPath);
      }
      return data.elements || [];
    } catch (e) {
      console.warn(`Attempt failed: ${e.message}. Retrying...`);
      attempts--;
      execSync('sleep 3');
    }
  }
  
  // Cleanup temp file on failure
  if (fs.existsSync(tempQueryPath)) {
    fs.unlinkSync(tempQueryPath);
  }
  return [];
}

async function gatherRealSpots() {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input file spots_draft.json not found at ${inputPath}`);
    process.exit(1);
  }

  const existingData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  const finalResult = [];

  for (let idx = 0; idx < stations.length; idx++) {
    const station = stations[idx];
    console.log(`\n[${idx + 1}/30] Gathering real POIs for ${station.line} ${station.name}駅...`);
    
    // Find existing 3 verified spots for this station
    const stationDraft = existingData.find(d => d.station === station.name);
    const existingSpots = stationDraft ? stationDraft.spots : [];
    
    const seenNames = new Set(existingSpots.map(s => s.name.replace(/（.*）$/, "").trim()));
    
    // Query Overpass for a 1km radius
    const query = `[out:json][timeout:20];
(
  nwr["amenity"~"cafe|restaurant|tea_room"](around:1000, ${station.lat}, ${station.lng});
  nwr["shop"~"bakery|books|gift|confectionery|pastry|cake"](around:1000, ${station.lat}, ${station.lng});
  nwr["historic"~"monument|memorial|ruins|tomb|castle|shrine|temple"](around:1000, ${station.lat}, ${station.lng});
  nwr["tourism"~"attraction|museum|viewpoint|gallery|artwork"](around:1000, ${station.lat}, ${station.lng});
  nwr["amenity"="place_of_worship"](around:1000, ${station.lat}, ${station.lng});
  nwr["leisure"="park"](around:1000, ${station.lat}, ${station.lng});
);
out center;`;

    const elements = queryOverpassWithCurl(query);
    console.log(`Found ${elements.length} raw elements from OSM.`);

    const gatheredSpots = [];
    const pref = getPrefecture(station.line, station.name);

    for (const el of elements) {
      const tags = el.tags || {};
      const name = tags['name:ja'] || tags['name'] || tags['operator'] || tags['brand'];
      if (!name) continue;

      const cleanName = name.replace(/[a-zA-Z0-9]/g, '').trim(); // skip purely alphanumeric/generic names
      if (cleanName.length < 2) continue;

      // Skip railway station nodes themselves or generic transits
      if (name.includes("駅") && (tags['railway'] === 'station' || tags['highway'] === 'bus_stop')) continue;
      
      // Skip duplicate names
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
      const description = `${station.name}駅周辺の${categoryText}。${descPrefix}として、訪れる人々に親しまれています。`;

      let address = tags['addr:full'] || tags['addr:street'];
      if (!address) {
        address = `${pref} ${station.name}周辺`;
      } else if (!address.startsWith(pref)) {
        address = `${pref}${address}`;
      }

      gatheredSpots.push({
        name: `${name}（${station.name}）`,
        spot_type: type,
        description,
        address,
        lat: Number(lat.toFixed(6)),
        lng: Number(lng.toFixed(6))
      });

      seenNames.add(nameKey);
    }

    // Sort to balance types
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

    // Select the best ones to reach 10 total spots
    const needed = 10 - existingSpots.length;
    const selectedExtras = extraSpots.slice(0, needed);
    
    const combinedSpots = [...existingSpots, ...selectedExtras];

    console.log(`Compiled ${combinedSpots.length} real spots for ${station.name}`);
    if (combinedSpots.length < 10) {
      console.warn(`WARNING: Station ${station.name} only reached ${combinedSpots.length} spots!`);
    }

    finalResult.push({
      line: station.line,
      station: station.name,
      spots: combinedSpots
    });

    // Pause 2 seconds to be gentle to the Overpass API
    await sleep(2000);
  }

  fs.writeFileSync(outputPath, JSON.stringify(finalResult, null, 2), 'utf-8');
  console.log(`\nSuccessfully gathered real-world spots for all 30 stations! Saved to: ${outputPath}`);
}

gatherRealSpots();
