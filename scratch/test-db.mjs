import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import ws from 'ws';

// Parse .env.local
const envContent = fs.readFileSync('.env.local', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const parts = line.split('=');
  if (parts.length === 2) {
    env[parts[0].trim()] = parts[1].trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

async function runTest() {
  console.log("Checking DB status and testing constraints...");
  
  // 1. Fetch an existing user and spot
  const { data: users, error: userError } = await supabase.from('users').select('id').limit(1);
  const { data: spots, error: spotError } = await supabase.from('spots').select('id, route_id').limit(1);

  if (userError || spotError || !users?.[0] || !spots?.[0]) {
    console.error("Failed to fetch initial data for test:", { userError, spotError });
    return;
  }

  const userId = users[0].id;
  const spotId = spots[0].id;
  const routeId = spots[0].route_id;

  console.log(`Using Test User ID: ${userId}, Spot ID: ${spotId}, Route ID: ${routeId}`);

  // Clean up any existing test stamps for this specific user/spot pair to start fresh
  // Note: RLS might block delete/insert from anon client if not authenticated, let's see.
  
  // 2. Try inserting a stamp for "yesterday"
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  console.log("Inserting yesterday's stamp...");
  const { data: stamp1, error: error1 } = await supabase
    .from('stamps')
    .insert({
      user_id: userId,
      spot_id: spotId,
      route_id: routeId,
      visitor_number: 9999,
      acquired_at: yesterday.toISOString()
    })
    .select();

  if (error1) {
    console.log("Failed to insert first stamp (maybe RLS?):", error1.message);
    return;
  }
  console.log("Successfully inserted yesterday's stamp!", stamp1);

  // 3. Try inserting another stamp for "today" (different day)
  console.log("Inserting today's stamp (different day)...");
  const { data: stamp2, error: error2 } = await supabase
    .from('stamps')
    .insert({
      user_id: userId,
      spot_id: spotId,
      route_id: routeId,
      visitor_number: 9999,
      acquired_at: new Date().toISOString()
    })
    .select();

  if (error2) {
    console.error("Error: Failed to insert different day stamp under new constraints:", error2.message);
  } else {
    console.log("Success! Successfully inserted a second stamp for a different day:", stamp2);
  }

  // 4. Try inserting another stamp for "today" (same day - duplicate)
  console.log("Attempting to insert a duplicate stamp for today (should fail)...");
  const { data: stamp3, error: error3 } = await supabase
    .from('stamps')
    .insert({
      user_id: userId,
      spot_id: spotId,
      route_id: routeId,
      visitor_number: 9999,
      acquired_at: new Date().toISOString()
    })
    .select();

  if (error3) {
    console.log("Correct! Same-day duplicate insertion failed with error:", error3.message);
  } else {
    console.error("Warning: Same-day duplicate insertion succeeded! Constraints are not working as expected.", stamp3);
  }

  // Cleanup test data
  if (stamp1?.[0]) await supabase.from('stamps').delete().eq('id', stamp1[0].id);
  if (stamp2?.[0]) await supabase.from('stamps').delete().eq('id', stamp2[0].id);
  if (stamp3?.[0]) await supabase.from('stamps').delete().eq('id', stamp3[0].id);
  console.log("Test finished & cleaned up.");
}

runTest();
