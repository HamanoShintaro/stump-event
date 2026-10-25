import { createClient } from '@supabase/supabase-js';
import ws from 'ws';
import higashiIwatsukiArea from './areas/higashi_iwatsuki.mjs';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

const HIGASHI_IWATSUKI_ROUTE_ID = 'e3b1c2d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d';

const higashiIwatsukiRoute = {
  id: HIGASHI_IWATSUKI_ROUTE_ID,
  title: higashiIwatsukiArea.title,
  description: higashiIwatsukiArea.description,
  category: higashiIwatsukiArea.category,
  prefecture: higashiIwatsukiArea.prefecture,
  budget_tier: higashiIwatsukiArea.budget_tier,
  is_published: true,
  thumbnail_url: '/images/higashi-iwatsuki/route-eyecatch.png',
  completion_ceremony_type: 'quiz_4choice',
  completion_quiz_data: {
    question: higashiIwatsukiArea.question,
    choices: higashiIwatsukiArea.choices.map((c) => ({
      key: c.key,
      text: c.text,
      description: c.description,
      badge_code: c.badge.code,
    })),
  },
};

const higashiIwatsukiSpots = higashiIwatsukiArea.spots.map((s, i) => ({
  id: `e3111111-1111-1111-1111-11111111111${i}`,
  route_id: HIGASHI_IWATSUKI_ROUTE_ID,
  name: s.name,
  description: s.description,
  image_url: `/images/higashi-iwatsuki/spot${i + 1}.png`,
  address: s.address,
  location: `POINT(${s.lng} ${s.lat})`,
  radius_meters: s.radius_meters || 50,
  order_index: i + 1,
  qr_token: `shuin-higashi-iwatsuki-${i + 1}`,
}));

const higashiIwatsukiBadges = [
  {
    code: `trailblazer_of_${HIGASHI_IWATSUKI_ROUTE_ID}`,
    category: 'route',
    name_ja: higashiIwatsukiArea.completion_badge.name_ja,
    subtitle_en: higashiIwatsukiArea.completion_badge.subtitle_en,
    rarity: 2,
    description: higashiIwatsukiArea.completion_badge.description,
    condition_type: 'route_complete',
    condition_params: { route_id: HIGASHI_IWATSUKI_ROUTE_ID },
    route_id: HIGASHI_IWATSUKI_ROUTE_ID,
    is_active: true,
  },
  ...higashiIwatsukiArea.choices.map((c) => ({
    code: c.badge.code,
    category: 'quiz',
    name_ja: c.badge.name_ja,
    subtitle_en: c.badge.subtitle_en,
    rarity: c.badge.rarity || 3,
    description: c.badge.description,
    condition_type: 'quiz_choice',
    condition_params: { route_id: HIGASHI_IWATSUKI_ROUTE_ID, choice: c.key },
    route_id: HIGASHI_IWATSUKI_ROUTE_ID,
    is_active: true,
  })),
];

async function main() {
  console.log('Upserting Higashi-Iwatsuki route...');
  const { error: rErr } = await supabase
    .from('routes')
    .upsert([higashiIwatsukiRoute], { onConflict: 'id' });
  if (rErr) {
    console.error('Failed to upsert route:', rErr);
    process.exit(1);
  }

  console.log('Upserting Higashi-Iwatsuki spots...');
  const { error: sErr } = await supabase
    .from('spots')
    .upsert(higashiIwatsukiSpots, { onConflict: 'id' });
  if (sErr) {
    console.error('Failed to upsert spots:', sErr);
    process.exit(1);
  }

  console.log('Upserting Higashi-Iwatsuki badges...');
  const { error: bErr } = await supabase
    .from('badges')
    .upsert(higashiIwatsukiBadges, { onConflict: 'code' });
  if (bErr) {
    console.error('Failed to upsert badges:', bErr);
    process.exit(1);
  }

  console.log('✅ Higashi-Iwatsuki route, spots, and badges upserted successfully!');
}

main();
