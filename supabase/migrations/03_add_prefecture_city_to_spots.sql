-- スポット（spots）テーブルに都道府県（prefecture）と市区郡（city）カラムを追加（非破壊）
-- city の粒度: 東京23区は「〇〇区」、それ以外は政令市も含めて「〇〇市」「〇〇郡」

ALTER TABLE public.spots
  ADD COLUMN IF NOT EXISTS prefecture TEXT,
  ADD COLUMN IF NOT EXISTS city TEXT;

-- 既存スポットの address から prefecture を補完
UPDATE public.spots
SET prefecture = (regexp_match(address, '^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)'))[1]
WHERE prefecture IS NULL AND address IS NOT NULL;

-- 既存スポットの address から city（東京23区は「〇〇区」、それ以外は「〇〇市」「〇〇郡」）を補完
UPDATE public.spots
SET city = COALESCE(
  (regexp_match(
    regexp_replace(address, '^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)', ''),
    '^(?:(千代田区|中央区|港区|新宿区|文京区|台東区|墨田区|江東区|品川区|目黒区|大田区|世田谷区|渋谷区|中野区|杉並区|豊島区|北区|荒川区|板橋区|練馬区|足立区|葛飾区|江戸川区)|(市川市|市原市|四日市市|廿日市市|野々市市|大和郡山市|郡山市|蒲郡市|小郡市|[^市郡区]+?市)|([^市]+?郡))'
  ))[1],
  (regexp_match(
    regexp_replace(address, '^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)', ''),
    '^(?:(千代田区|中央区|港区|新宿区|文京区|台東区|墨田区|江東区|品川区|目黒区|大田区|世田谷区|渋谷区|中野区|杉並区|豊島区|北区|荒川区|板橋区|練馬区|足立区|葛飾区|江戸川区)|(市川市|市原市|四日市市|廿日市市|野々市市|大和郡山市|郡山市|蒲郡市|小郡市|[^市郡区]+?市)|([^市]+?郡))'
  ))[2],
  (regexp_match(
    regexp_replace(address, '^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)', ''),
    '^(?:(千代田区|中央区|港区|新宿区|文京区|台東区|墨田区|江東区|品川区|目黒区|大田区|世田谷区|渋谷区|中野区|杉並区|豊島区|北区|荒川区|板橋区|練馬区|足立区|葛飾区|江戸川区)|(市川市|市原市|四日市市|廿日市市|野々市市|大和郡山市|郡山市|蒲郡市|小郡市|[^市郡区]+?市)|([^市]+?郡))'
  ))[3]
)
WHERE city IS NULL AND address IS NOT NULL;
