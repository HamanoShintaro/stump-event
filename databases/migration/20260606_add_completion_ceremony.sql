-- routes テーブルに完走セレモニータイプとクイズデータカラムを追加
ALTER TABLE routes ADD COLUMN IF NOT EXISTS completion_ceremony_type TEXT DEFAULT 'simple';
ALTER TABLE routes ADD COLUMN IF NOT EXISTS completion_quiz_data JSONB DEFAULT NULL;
