-- 1. storage.buckets に 'stamps' バケットをパブリック設定で作成
INSERT INTO storage.buckets (id, name, public)
VALUES ('stamps', 'stamps', true)
ON CONFLICT (id) DO NOTHING;

-- 2. 既存の同一名のポリシーがあれば削除して競合を防止
DROP POLICY IF EXISTS "Allow public select access to stamps" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated insert access to stamps" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated update access to stamps" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated delete access to stamps" ON storage.objects;

-- 誰でも画像を閲覧できるようにするポリシー (SELECT)
CREATE POLICY "Allow public select access to stamps"
ON storage.objects FOR SELECT
USING (bucket_id = 'stamps');

-- ログイン済みのユーザーであればアップロードできるようにするポリシー (INSERT)
CREATE POLICY "Allow authenticated insert access to stamps"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'stamps');

-- ログイン済みのユーザーであれば更新できるようにするポリシー (UPDATE)
CREATE POLICY "Allow authenticated update access to stamps"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'stamps')
WITH CHECK (bucket_id = 'stamps');

-- ログイン済みのユーザーであれば削除できるようにするポリシー (DELETE)
CREATE POLICY "Allow authenticated delete access to stamps"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'stamps');
