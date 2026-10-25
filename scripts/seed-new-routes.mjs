import { createClient } from '@supabase/supabase-js';
import ws from 'ws';
import toyokoNorth from './areas/toyoko_north.mjs';
import toyokoMiddle from './areas/toyoko_middle.mjs';
import toyokoSouth from './areas/toyoko_south.mjs';
import nodaWest from './areas/noda_west.mjs';
import nodaEast from './areas/noda_east.mjs';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

const areaConfigs = [
  { area: toyokoNorth, id: '3b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d51', prefix: 'a0' },
  { area: toyokoMiddle, id: '3b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d52', prefix: 'a1' },
  { area: toyokoSouth, id: '3b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d53', prefix: 'a2' },
  { area: nodaWest, id: '3b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d54', prefix: 'a3' },
  { area: nodaEast, id: '3b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d55', prefix: 'a4' },
];

async function seed() {
  console.log("Preparing data for upserting 5 new routes...");

  const routesToUpsert = [];
  const spotsToUpsert = [];
  const badgesToUpsert = [];

  areaConfigs.forEach(({ area, id: routeId, prefix }, routeIdx) => {
    // 1. Route Object
    routesToUpsert.push({
      id: routeId,
      title: area.title,
      description: area.description,
      category: area.category,
      prefecture: area.prefecture,
      budget_tier: area.budget_tier,
      is_published: true,
      thumbnail_url: `/images/${area.slug}/route-eyecatch.png`,
      completion_ceremony_type: "quiz_4choice",
      completion_quiz_data: {
        question: area.question,
        choices: area.choices.map(c => ({
          key: c.key,
          text: c.text,
          description: c.description,
          badge_code: c.badge.code
        }))
      }
    });

    // 2. Spot Objects
    area.spots.forEach((s, i) => {
      spotsToUpsert.push({
        id: `${prefix}111111-1111-1111-1111-11111111111${i + 1}`,
        route_id: routeId,
        name: s.name,
        description: s.description,
        image_url: `/images/${area.slug}/spot${i + 1}.png`,
        address: s.address,
        location: `POINT(${s.lng} ${s.lat})`,
        radius_meters: s.radius_meters || 50,
        order_index: i + 1
      });
    });

    // 3. Badge Objects
    // Completion badge
    badgesToUpsert.push({
      id: `ab${routeIdx}00000-0000-0000-0000-000000000000`,
      code: `trailblazer_of_${routeId}`,
      category: "route",
      name_ja: area.completion_badge.name_ja,
      subtitle_en: area.completion_badge.subtitle_en,
      rarity: 2,
      description: area.completion_badge.description,
      condition_type: "route_complete",
      condition_params: { route_id: routeId },
      route_id: routeId,
      is_active: true
    });

    // Choice badges
    area.choices.forEach((c, i) => {
      badgesToUpsert.push({
        id: `ab${routeIdx}00000-0000-0000-0000-00000000000${i + 1}`,
        code: c.badge.code,
        category: "quiz",
        name_ja: c.badge.name_ja,
        subtitle_en: c.badge.subtitle_en,
        rarity: c.badge.rarity || 3,
        description: c.badge.description,
        condition_type: "quiz_choice",
        condition_params: { route_id: routeId, choice: c.key },
        route_id: routeId,
        is_active: true
      });
    });
  });

  // Perform Upserts in dependency order: routes -> spots -> badges
  try {
    console.log("Upserting routes...");
    const { error: routeError } = await supabase.from('routes').upsert(routesToUpsert);
    if (routeError) throw routeError;
    console.log(`Successfully upserted ${routesToUpsert.length} routes.`);

    console.log("Upserting spots...");
    const { error: spotError } = await supabase.from('spots').upsert(spotsToUpsert);
    if (spotError) throw spotError;
    console.log(`Successfully upserted ${spotsToUpsert.length} spots.`);

    console.log("Upserting badges...");
    const { error: badgeError } = await supabase.from('badges').upsert(badgesToUpsert);
    if (badgeError) throw badgeError;
    console.log(`Successfully upserted ${badgesToUpsert.length} badges.`);

    console.log("Database seeding completed successfully and non-destructively!");
  } catch (err) {
    console.error("Failed to seed database:", err);
    process.exit(1);
  }
}

seed();
