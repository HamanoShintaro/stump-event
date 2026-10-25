import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = path.join(process.cwd(), 'public');
const stationsDir = path.join(publicDir, 'images', 'stations');
const templatesDir = path.join(publicDir, 'images', 'templates');
const draftPath = path.join(process.cwd(), 'scripts', 'areas', 'spots_massive_draft.json');

const existingDirs = ['jiyugaoka', 'yono', 'iwatsuki', 'kitaurawa', 'shintoshin'];

function runSips(src, dest, width = 480, quality = 65) {
  try {
    execSync(`sips -s format jpeg -s formatOptions ${quality} --resampleWidth ${width} "${src}" --out "${dest}"`, { stdio: 'ignore' });
    return true;
  } catch (e) {
    console.error(`sips compression failed for ${src}: ${e.message}`);
    return false;
  }
}

async function run() {
  console.log("Starting image optimization & distribution...");

  // 1. Ensure output folders exist
  if (!fs.existsSync(stationsDir)) {
    fs.mkdirSync(stationsDir, { recursive: true });
  }
  if (!fs.existsSync(templatesDir)) {
    fs.mkdirSync(templatesDir, { recursive: true });
  }

  // 2. Locate generated templates in artifacts and copy them to templates/
  const artifactDir = '/Users/shintaro/.gemini/antigravity/brain/8acf3522-fd3e-41d0-877a-6e7900309670';
  const artifactFiles = fs.readdirSync(artifactDir);

  const templateMap = {
    'route_history': 'route_history.png',
    'route_shopping': 'route_shopping.png',
    'spot_shrine': 'spot_shrine.png',
    'spot_temple': 'spot_temple.png',
    'spot_landmark': 'spot_landmark.png',
    'spot_park': 'spot_park.png',
    'spot_cafe': 'spot_cafe.png',
    'spot_bakery': 'spot_bakery.png',
    'spot_store': 'spot_store.png',
    'spot_ramen': 'spot_ramen.png'
  };

  for (const [key, targetName] of Object.entries(templateMap)) {
    // Find the latest matching file in artifacts
    const matches = artifactFiles.filter(f => f.startsWith(key) && f.endsWith('.png'));
    const destPath = path.join(templatesDir, targetName);
    
    if (matches.length > 0) {
      matches.sort();
      const latestFile = matches[matches.length - 1];
      const srcPath = path.join(artifactDir, latestFile);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied template from artifact: ${latestFile} -> templates/${targetName}`);
    } else {
      // Fallback mappings if artifact is not generated due to server capacity limits
      const fallbackMap = {
        'spot_temple': 'kitaurawa/spot4.png',
        'spot_landmark': 'jiyugaoka/spot2.png',
        'spot_park': 'jiyugaoka/spot5.png',
        'spot_cafe': 'kitaurawa/spot5.png',
        'spot_bakery': 'yono/spot4.png',
        'spot_store': 'jiyugaoka/spot3.png',
        'spot_ramen': 'yono/spot2.png'
      };

      if (fallbackMap[key]) {
        const fallbackSrc = path.join(publicDir, 'images', fallbackMap[key]);
        if (fs.existsSync(fallbackSrc)) {
          fs.copyFileSync(fallbackSrc, destPath);
          console.log(`Copied fallback template for ${key}: ${fallbackMap[key]} -> templates/${targetName}`);
        } else {
          console.warn(`Fallback source not found: ${fallbackSrc}`);
        }
      } else {
        console.warn(`Template file for ${key} not found in artifacts and no fallback defined.`);
      }
    }
  }

  // 3. Optimize existing large PNGs to JPEGs
  console.log("\nOptimizing existing 1MB+ PNGs...");
  for (const dir of existingDirs) {
    const dirPath = path.join(publicDir, 'images', dir);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      if (file.endsWith('.png')) {
        const pngPath = path.join(dirPath, file);
        const jpgName = file.replace('.png', '.jpg');
        const jpgPath = path.join(dirPath, jpgName);

        console.log(`  Compressing public/images/${dir}/${file} -> ${jpgName}...`);
        const width = file.includes('eyecatch') ? 800 : 480;
        const success = runSips(pngPath, jpgPath, width, 65);
        if (success) {
          fs.unlinkSync(pngPath);
        }
      }
    }
  }

  // 4. Distribute templates to stationsDir as optimized JPEGs
  console.log("\nDistributing optimized images for all 30 stations...");
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft file not found at ${draftPath}`);
    return;
  }
  const dataset = JSON.parse(fs.readFileSync(draftPath, 'utf-8'));

  const getTemplateForSpot = (spot) => {
    const text = (spot.name + " " + (spot.description || "")).toLowerCase();
    
    if (text.includes("神社") || text.includes("鳥居") || text.includes("worship") || text.includes("八幡")) {
      return 'spot_shrine.png';
    }
    if (text.includes("寺") || text.includes("寺院") || text.includes("院") || text.includes("教団") || text.includes("教会")) {
      return 'spot_temple.png';
    }
    if (text.includes("カフェ") || text.includes("珈琲") || text.includes("茶") || text.includes("cafe") || text.includes("喫茶") || text.includes("ドトール") || text.includes("スターバックス") || text.includes("上島")) {
      return 'spot_cafe.png';
    }
    if (text.includes("パン") || text.includes("ベーカリー") || text.includes("ブレッド") || text.includes("サンジェルマン") || text.includes("工房")) {
      return 'spot_bakery.png';
    }
    if (text.includes("書店") || text.includes("本") || text.includes("本屋") || text.includes("ブック") || text.includes("お土産") || text.includes("ギフト") || text.includes("まちおか") || text.includes("有隣堂") || text.includes("シャトレーゼ")) {
      return 'spot_store.png';
    }
    if (text.includes("ラーメン") || text.includes("中華") || text.includes("餃子") || text.includes("麺") || text.includes("道とん堀") || text.includes("くらづくり") || text.includes("ガスト") || text.includes("ジョナサン") || text.includes("ロイヤルホスト") || text.includes("しゃぶ葉") || text.includes("馬車道") || text.includes("吉草") || text.includes("拉人") || text.includes("木こり") || text.includes("清水港") || text.includes("デニーズ") || text.includes("じゅうじゅう") || text.includes("るる") || text.includes("三吉野") || text.includes("食堂")) {
      return 'spot_ramen.png';
    }
    if (text.includes("公園") || text.includes("川") || text.includes("緑道") || text.includes("歩道") || text.includes("跡") || text.includes("池") || text.includes("庭園") || text.includes("小径")) {
      return 'spot_park.png';
    }
    return 'spot_landmark.png';
  };

  dataset.forEach((stationObj, sIdx) => {
    const stationName = stationObj.station;
    const spots = stationObj.spots;

    const r1EyecatchSrc = path.join(templatesDir, 'route_history.png');
    const r1EyecatchDest = path.join(stationsDir, `${sIdx}_r1-eyecatch.jpg`);
    if (fs.existsSync(r1EyecatchSrc)) {
      runSips(r1EyecatchSrc, r1EyecatchDest, 800, 65);
    }

    const r2EyecatchSrc = path.join(templatesDir, 'route_shopping.png');
    const r2EyecatchDest = path.join(stationsDir, `${sIdx}_r2-eyecatch.jpg`);
    if (fs.existsSync(r2EyecatchSrc)) {
      runSips(r2EyecatchSrc, r2EyecatchDest, 800, 65);
    }

    const r1Spots = [spots[0], spots[2], spots[4], spots[6], spots[8]].filter(Boolean);
    const r2Spots = [spots[1], spots[3], spots[5], spots[7], spots[9]].filter(Boolean);

    r1Spots.forEach((spot, idx) => {
      const templateName = getTemplateForSpot(spot);
      const templateSrc = path.join(templatesDir, templateName);
      const dest = path.join(stationsDir, `${sIdx}_r1_spot${idx + 1}.jpg`);
      if (fs.existsSync(templateSrc)) {
        runSips(templateSrc, dest, 480, 65);
      } else {
        const fallbackSrc = path.join(templatesDir, 'route_history.png');
        if (fs.existsSync(fallbackSrc)) runSips(fallbackSrc, dest, 480, 65);
      }
    });

    r2Spots.forEach((spot, idx) => {
      const templateName = getTemplateForSpot(spot);
      const templateSrc = path.join(templatesDir, templateName);
      const dest = path.join(stationsDir, `${sIdx}_r2_spot${idx + 1}.jpg`);
      if (fs.existsSync(templateSrc)) {
        runSips(templateSrc, dest, 480, 65);
      } else {
        const fallbackSrc = path.join(templatesDir, 'route_shopping.png');
        if (fs.existsSync(fallbackSrc)) runSips(fallbackSrc, dest, 480, 65);
      }
    });
  });

  console.log("\nImage distribution complete!");
}

run();
