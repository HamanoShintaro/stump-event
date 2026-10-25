import fs from 'fs';
import path from 'path';

const files = [
  'toyoko_north.mjs',
  'toyoko_middle.mjs',
  'toyoko_south.mjs',
  'noda_west.mjs',
  'noda_east.mjs'
];

async function validate() {
  console.log("Validating route config files...");
  let errCount = 0;

  for (const filename of files) {
    const filepath = path.join(process.cwd(), 'scripts', 'areas', filename);
    if (!fs.existsSync(filepath)) {
      console.error(`[Error] File not found: ${filepath}`);
      errCount++;
      continue;
    }

    // Dynamic import of mjs file
    const moduleUrl = `file://${filepath}`;
    try {
      const { default: area } = await import(moduleUrl);
      console.log(`\nValidating ${filename} (Slug: ${area.slug})...`);

      // 1. Required Top-level Fields
      const requiredFields = [
        'slug', 'line', 'station', 'area_name', 'title', 'description',
        'category', 'prefecture', 'budget_tier', 'tags',
        'completion_badge', 'question', 'choices', 'spots'
      ];
      for (const field of requiredFields) {
        if (area[field] === undefined) {
          console.error(`  [Error] Missing top-level field: ${field}`);
          errCount++;
        }
      }

      // 2. Validate completion_badge
      if (area.completion_badge) {
        if (!area.completion_badge.name_ja || !area.completion_badge.subtitle_en || !area.completion_badge.description) {
          console.error(`  [Error] Invalid completion_badge structure`);
          errCount++;
        }
      }

      // 3. Validate Choices (Must be 4 choices A, B, C, D)
      if (area.choices) {
        if (area.choices.length !== 4) {
          console.error(`  [Error] choices count must be exactly 4, found: ${area.choices.length}`);
          errCount++;
        }
        const keys = ['A', 'B', 'C', 'D'];
        area.choices.forEach((choice, idx) => {
          const expectedKey = keys[idx];
          if (choice.key !== expectedKey) {
            console.error(`  [Error] choice at index ${idx} has key '${choice.key}', expected '${expectedKey}'`);
            errCount++;
          }
          if (!choice.text || !choice.description || !choice.badge) {
            console.error(`  [Error] Choice ${choice.key} is missing text, description, or badge`);
            errCount++;
          } else {
            const b = choice.badge;
            if (!b.code || !b.name_ja || !b.subtitle_en || !b.description) {
              console.error(`  [Error] Choice ${choice.key} badge is missing fields`);
              errCount++;
            }
          }
        });
      }

      // 4. Validate Spots (Must have at least 3 spots)
      if (area.spots) {
        if (area.spots.length < 3) {
          console.error(`  [Error] spots count must be at least 3, found: ${area.spots.length}`);
          errCount++;
        }
        area.spots.forEach((spot, idx) => {
          if (!spot.name || !spot.description || !spot.address || !spot.prefecture || !spot.city || spot.lat === undefined || spot.lng === undefined) {
            console.error(`  [Error] Spot at index ${idx} (${spot.name || 'unnamed'}) is missing name, description, address, prefecture, city, lat, or lng`);
            errCount++;
          }
          if (typeof spot.lat !== 'number' || typeof spot.lng !== 'number') {
            console.error(`  [Error] Spot ${spot.name} coordinates must be numbers`);
            errCount++;
          }
          // Coordinates bounding check for Japan
          if (spot.lat < 30 || spot.lat > 46 || spot.lng < 120 || spot.lng > 150) {
            console.error(`  [Error] Spot ${spot.name} coordinates seem out of bounds for Japan: lat=${spot.lat}, lng=${spot.lng}`);
            errCount++;
          }
          const validTypes = ["見どころ", "買い物", "休憩"];
          if (spot.spot_type && !validTypes.includes(spot.spot_type)) {
            console.error(`  [Error] Spot ${spot.name} has invalid spot_type: ${spot.spot_type}`);
            errCount++;
          }
        });
      }

      console.log(`  Passed basic checks for ${filename}`);

    } catch (e) {
      console.error(`[Error] Failed to load/import file ${filename}:`, e);
      errCount++;
    }
  }

  if (errCount > 0) {
    console.error(`\nValidation FAILED with ${errCount} errors.`);
    process.exit(1);
  } else {
    console.log(`\nAll files validated successfully!`);
  }
}

validate();
