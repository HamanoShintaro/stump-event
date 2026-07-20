import { createClient } from '@supabase/supabase-js';
import ws from 'ws';

const supabaseUrl = 'https://fbfarkfvzrfzwdhxvahi.supabase.co';
const supabaseKey = 'sb_publishable_5hIQc6O45OyXANpsNcG0oA_b4AsNSav';
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
  realtime: { transport: ws },
});

const updates = [
  {
    id: 'c2222222-2222-2222-2222-222222222222',
    name: "昭和レトロな洋食と珈琲（レストラン ヒロ）",
    description: "与野駅東口から歩いてすぐの場所にある、昭和レトロな雰囲気を色濃く残す洋食と喫茶のお店。懐かしい佇まいの店内で、名物の洋食メニューや香り高い珈琲を味わいながら、散策の途中にほっと一息つきましょう。",
    address: "埼玉県さいたま市浦和区上木崎2-2-16",
    location: "POINT(139.640348 35.885797)",
    order_index: 2
  },
  {
    id: 'c4444444-4444-4444-4444-444444444444',
    name: "老舗和菓子店で甘味選び（大こくや）",
    description: "明治創業の歴史を持つ、与野駅西口からほど近い老舗和菓子店。名物の大福や季節の団子など、伝統の製法で丁寧に作られる甘味をお土産に買い求めましょう。",
    address: "埼玉県さいたま市中央区下落合1010",
    location: "POINT(139.637500 35.878800)",
    order_index: 3
  },
  {
    id: 'c3333333-3333-3333-3333-333333333333',
    name: "下落合の総鎮守・アニメの聖地（下落合氷川神社）",
    description: "与野駅西口から西へ進んだ下落合の住宅街に佇む神社。古くから下落合の鎮守として地域の人々に親しまれているほか、アニメ『弱キャラ友崎くん』の舞台としてもファンに知られています。境内を静かに巡り、旅の安全とともに次のしるしを獲得しましょう。",
    address: "埼玉県さいたま市中央区下落合5丁目4",
    location: "POINT(139.628610 35.884389)",
    order_index: 4
  }
];

async function run() {
  console.log("Updating Yono spots in Supabase (v2)...");
  for (const item of updates) {
    const { data, error } = await supabase
      .from('spots')
      .update({
        name: item.name,
        description: item.description,
        address: item.address,
        location: item.location,
        order_index: item.order_index
      })
      .eq('id', item.id);
    
    if (error) {
      console.error(`Error updating spot ${item.id}:`, error);
    } else {
      console.log(`Successfully updated spot ${item.id} (${item.name}, order_index: ${item.order_index})`);
    }
  }
  console.log("Update completed!");
}

run();
