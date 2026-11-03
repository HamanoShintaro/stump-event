-- お問い合わせ（inquiries）テーブル作成マイグレーション
-- 既存データの非破壊原則（.agents/AGENTS.md）に準拠し、IF NOT EXISTS で安全に作成します。

CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(255) NOT NULL,
  category VARCHAR(64) NOT NULL DEFAULT 'general',
  message TEXT NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'OPEN',
  reply_subject TEXT,
  reply_body TEXT,
  review_reason TEXT,
  replied_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'inquiries' AND policyname = 'Anyone can insert inquiries'
  ) THEN
    CREATE POLICY "Anyone can insert inquiries"
      ON inquiries
      FOR INSERT
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'inquiries' AND policyname = 'Support agent can select inquiries'
  ) THEN
    CREATE POLICY "Support agent can select inquiries"
      ON inquiries
      FOR SELECT
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'inquiries' AND policyname = 'Support agent can update inquiries'
  ) THEN
    CREATE POLICY "Support agent can update inquiries"
      ON inquiries
      FOR UPDATE
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;
