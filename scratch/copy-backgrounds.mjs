import fs from 'fs';
import path from 'path';

const srcDir = './submit/image/stump-image';
const destDir = './public/stamps';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = {
  '01_': 'bg_eat.png',
  '02_': 'bg_see.png',
  '03_': 'bg_experience.png',
  '04_': 'bg_collect.png',
  '05_': 'bg_fave.png',
  '06_': 'bg_learn.png',
  '07_': 'bg_heal.png',
  '08_': 'bg_achieve.png',
  '09_': 'bg_social.png',
  '10_': 'bg_local.png'
};

try {
  const folders = fs.readdirSync(srcDir);
  for (const folder of folders) {
    const fullPath = path.join(srcDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
      const matchKey = Object.keys(mapping).find(key => folder.startsWith(key));
      if (matchKey) {
        const targetName = mapping[matchKey];
        const srcFile = path.join(fullPath, 'background.png');
        const destFile = path.join(destDir, targetName);
        
        if (fs.existsSync(srcFile)) {
          fs.copyFileSync(srcFile, destFile);
          console.log(`Copied ${folder}/background.png -> ${targetName}`);
        } else {
          console.warn(`Warning: ${srcFile} not found`);
        }
      }
    }
  }
  console.log("All background images successfully copied!");
} catch (error) {
  console.error("Error copying backgrounds:", error);
}
