import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import ws from 'ws';

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

async function check() {
  // PostgreSQLのシステムカタログからusersテーブルのカラム名を取得
  const { data, error } = await supabase.rpc('get_table_columns', { table_name: 'users' });
  if (error) {
    // RPCがない場合は、適当なSELECTクエリでエラーを発生させてカラム名を確認するか、直接 catalog から取得を試みる
    console.log("RPC failed, trying raw query on information_schema...");
    const { data: cols, error: err2 } = await supabase
      .from('stamps') // RLS回避のため別のテーブルからか、直接 SQL を実行したいが、REST API経由なので
      .select('*')
      .limit(0); // 空のクエリ
      
    // information_schemaへのクエリは通常REST経由では直接テーブルとして公開されていないと叩けません。
    // 代わりに、ダミーのINSERTを行ってみて、どのようなカラムが存在するかエラーから推測するか、
    // あるいは単純に upsert({ id: 'dummy', active_spot_id: 'dummy' }) を投げてみて、エラーが出るか確認します。
    console.log("Testing upsert on users table...");
    const { error: upsertErr } = await supabase
      .from('users')
      .upsert({ id: '00000000-0000-0000-0000-000000000000', active_spot_id: null })
      .select();
    
    if (upsertErr) {
      console.error("Upsert failed:", upsertErr);
    } else {
      console.log("Upsert succeeded! 'active_spot_id' and 'id' columns definitely exist in 'users' table.");
      // クリーンアップ
      await supabase.from('users').delete().eq('id', '00000000-0000-0000-0000-000000000000');
    }
  } else {
    console.log("Columns:", data);
  }
}
check();
