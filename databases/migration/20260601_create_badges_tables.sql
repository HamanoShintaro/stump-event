-- 1. badges（称号マスタテーブル）作成
CREATE TABLE IF NOT EXISTS badges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    name_ja TEXT NOT NULL,
    subtitle_en TEXT NOT NULL,
    rarity INT NOT NULL,
    description TEXT,
    condition_type TEXT NOT NULL,
    condition_params JSONB NOT NULL DEFAULT '{}'::jsonb,
    spot_id UUID REFERENCES spots(id) ON DELETE SET NULL,
    route_id UUID REFERENCES routes(id) ON DELETE SET NULL,
    area_name TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. badge_assignments（称号付与履歴テーブル）作成
CREATE TABLE IF NOT EXISTS badge_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    badge_id UUID REFERENCES badges(id) ON DELETE CASCADE,
    triggered_by_stamp_event_id UUID REFERENCES stamp_events(id) ON DELETE SET NULL,
    acquired_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, badge_id)
);

-- 3. trigger_qrs（B② 入口専用設置場所マスタテーブル）作成
CREATE TABLE IF NOT EXISTS trigger_qrs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    qr_token TEXT UNIQUE NOT NULL,
    location_type TEXT NOT NULL, -- 'cafe' | 'shop' | 'tourism_info' | 'hotel' | 'station' | 'cultural' | 'mall'
    partner_name TEXT,
    address TEXT,
    linked_route_ids UUID[] DEFAULT '{}'::uuid[],
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. 検索効率化のためのインデックス作成
CREATE INDEX IF NOT EXISTS idx_badges_code ON badges(code);
CREATE INDEX IF NOT EXISTS idx_badges_conditions ON badges(condition_type) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_badge_assignments_user ON badge_assignments(user_id, acquired_at DESC);
CREATE INDEX IF NOT EXISTS idx_trigger_qrs_token ON trigger_qrs(qr_token) WHERE is_active = true;
