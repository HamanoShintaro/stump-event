-- stampsテーブルの (user_id, spot_id) の一意制約（ユニークキー）を削除する
-- PostgreSQLの自動命名で `stamps_user_id_spot_id_key` になっているはずなので、それを削除
ALTER TABLE stamps DROP CONSTRAINT IF EXISTS stamps_user_id_spot_id_key;

-- 代わりに、同日中の重複押印を防ぐ部分ユニークインデックスをstampsテーブルにも作成
-- これにより、同日内の2回以上の押印は制限され、日を跨げば2回目、3回目の押印が可能になる
CREATE UNIQUE INDEX IF NOT EXISTS uq_stamps_user_spot_date
ON stamps (user_id, spot_id, DATE(acquired_at AT TIME ZONE 'Asia/Tokyo'));
