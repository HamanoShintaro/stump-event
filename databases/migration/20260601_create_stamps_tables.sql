-- 1. stamp_events（押印イベント・正本）テーブル作成
CREATE TABLE IF NOT EXISTS stamp_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    spot_id UUID REFERENCES spots(id) ON DELETE CASCADE,
    route_id UUID REFERENCES routes(id) ON DELETE SET NULL,
    method TEXT NOT NULL,
    lat DOUBLE PRECISION,
    lng DOUBLE PRECISION,
    accuracy_m DOUBLE PRECISION,
    distance_to_spot_m DOUBLE PRECISION,
    qr_token_used TEXT,
    visitor_number INT NOT NULL,
    is_first_visit BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. stamps（個別SHUIN）テーブル作成
CREATE TABLE IF NOT EXISTS stamps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stamp_event_id UUID REFERENCES stamp_events(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    spot_id UUID REFERENCES spots(id) ON DELETE CASCADE,
    route_id UUID REFERENCES routes(id) ON DELETE SET NULL,
    visitor_number INT NOT NULL,
    acquired_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, spot_id)
);

-- 3. 重複防止のための部分ユニークインデックス（同日中の重複押印防止）
CREATE UNIQUE INDEX IF NOT EXISTS uq_stamp_events_user_spot_date
ON stamp_events (user_id, spot_id, DATE(created_at AT TIME ZONE 'Asia/Tokyo'));

-- 4. 検索効率化のためのインデックス作成
CREATE INDEX IF NOT EXISTS idx_stamp_events_user_spot_created ON stamp_events(user_id, spot_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_stamp_events_spot_created ON stamp_events(spot_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_stamps_user ON stamps(user_id);
