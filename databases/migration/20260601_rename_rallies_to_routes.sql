-- 1. rallies テーブルを routes にリネーム
ALTER TABLE rallies RENAME TO routes;

-- 2. user_rallies テーブルを user_routes にリネーム (存在する場合)
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'user_rallies') THEN
        ALTER TABLE user_rallies RENAME TO user_routes;
    END IF;
END $$;

-- 3. user_bookmarks テーブルなどの関連カラムや FK 修正 (存在する場合)
-- 通常、FK名は自動的に引き継がれますが、テーブル名内の参照やカラム名の移行を行います。
DO $$
BEGIN
    -- spots テーブルの FK カラム修正 (rally_id -> route_id)
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='spots' AND column_name='rally_id') THEN
        ALTER TABLE spots RENAME COLUMN rally_id TO route_id;
    END IF;
    
    -- user_routes (旧 user_rallies) の FK カラム修正 (rally_id -> route_id)
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='user_routes' AND column_name='rally_id') THEN
        ALTER TABLE user_routes RENAME COLUMN rally_id TO route_id;
    END IF;

    -- user_bookmarks の FK カラム修正 (rally_id -> route_id)
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='user_bookmarks' AND column_name='rally_id') THEN
        ALTER TABLE user_bookmarks RENAME COLUMN rally_id TO route_id;
    END IF;
END $$;
