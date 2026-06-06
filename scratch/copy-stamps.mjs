import fs from 'fs';
import path from 'path';

const srcDir = './submit/image/stump-image';
const destDir = './public/stamps';

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Map folder prefixes or names to target filenames
const mapping = {
  '01_': 'eat.png',
  '02_': 'see.png',
  '03_': 'experience.png',
  '04_': 'collect.png',
  '05_': 'fave.png',
  '06_': 'learn.png',
  '07_': 'heal.png',
  '08_': 'achieve.png',
  '09_': 'social.png',
  '10_': 'local.png'
};

try {
  const folders = fs.readdirSync(srcDir);
  for (const folder of folders) {
    const fullPath = path.join(srcDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
      const matchKey = Object.keys(mapping).find(key => folder.startsWith(key));
      if (matchKey) {
        const targetName = mapping[matchKey];
        const srcFile = path.join(fullPath, 'stump.png');
        const destFile = path.join(destDir, targetName);
        
        if (fs.existsSync(srcFile)) {
          fs.copyFileSync(srcFile, destFile);
          console.log(`Copied ${folder}/stump.png -> ${targetName}`);
        } else {
          console.warn(`Warning: ${srcFile} not found`);
        }
      }
    }
  }
  console.log("All stamp images successfully copied!");
} catch (error) {
  console.error("Error copying stamps:", error);
}
