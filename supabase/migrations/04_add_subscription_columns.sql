-- SHUIN プレミアム（サブスクリプション・Stripe決済連携）用カラム追加マイグレーション
-- 既存データの非破壊原則（AGENTS.md）に準拠し、IF NOT EXISTS で安全にカラムのみを追加します。

DO $$
BEGIN
  -- 1. users テーブルへのプレミアム会員ステータス・Stripe連携カラム追加
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'is_premium'
  ) THEN
    ALTER TABLE users ADD COLUMN is_premium BOOLEAN DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'subscription_status'
  ) THEN
    ALTER TABLE users ADD COLUMN subscription_status VARCHAR(32) DEFAULT 'free';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'stripe_customer_id'
  ) THEN
    ALTER TABLE users ADD COLUMN stripe_customer_id VARCHAR(128);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'stripe_subscription_id'
  ) THEN
    ALTER TABLE users ADD COLUMN stripe_subscription_id VARCHAR(128);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'premium_until'
  ) THEN
    ALTER TABLE users ADD COLUMN premium_until TIMESTAMPTZ;
  END IF;

  -- 2. groups テーブルへのホストプレミアム判定フラグ追加
  -- （有料ホストが作成した連れ立ちグループでは、招待された無料ゲストも写真記録枠を消費せず共有できるようにするため）
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'groups' AND column_name = 'is_host_premium'
  ) THEN
    ALTER TABLE groups ADD COLUMN is_host_premium BOOLEAN DEFAULT true;
  END IF;
END $$;
