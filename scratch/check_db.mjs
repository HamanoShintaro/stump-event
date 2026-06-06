import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

async function main() {
  const { data: spots, error } = await supabase
    .from('spots')
    .select('*')
    .limit(1);
  
  if (error) {
    console.error('Fetch error:', error);
  } else if (spots && spots.length > 0) {
    console.log('--- Spots Columns ---');
    console.log(Object.keys(spots[0]));
  } else {
    console.log('No spots found');
  }

  const { data: routes, error: rError } = await supabase
    .from('routes')
    .select('*')
    .limit(1);
  
  if (rError) {
    console.error('Fetch error:', rError);
  } else if (routes && routes.length > 0) {
    console.log('--- Routes Columns ---');
    console.log(Object.keys(routes[0]));
  }
}

main();
