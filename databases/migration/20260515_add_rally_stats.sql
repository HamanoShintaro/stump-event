-- ラリーごとの参加者数とお気に入り数を管理するためのカラム追加

ALTER TABLE rallies
ADD COLUMN participants_count INT NOT NULL DEFAULT 0,
ADD COLUMN favorites_count INT NOT NULL DEFAULT 0;

-- 将来的には、参加履歴テーブル(rally_participants)やお気に入りテーブル(rally_favorites)
-- にデータが挿入/削除された際に、トリガー(Trigger)を使って上記のカウントを自動更新する設計が推奨されます。
