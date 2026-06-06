/**
 * Parse a PostGIS Well-Known Binary (WKB) hex string representing a Point.
 * Assumes Little Endian and SRID included (EWKB).
 * @param hex WKB hex string
 * @returns { lat: number, lng: number } | null
 */
export function parseWKBPoint(hex: string): { lat: number; lng: number } | null {
  if (!hex || typeof hex !== 'string' || hex.length < 50) return null;

  try {
    const xHex = hex.substring(18, 34);
    const yHex = hex.substring(34, 50);

    const buf = new ArrayBuffer(8);
    const view = new DataView(buf);

    // Parse X (lng)
    for (let i = 0; i < 8; i++) {
      view.setUint8(i, parseInt(xHex.substring(i * 2, i * 2 + 2), 16));
    }
    const lng = view.getFloat64(0, true);

    // Parse Y (lat)
    for (let i = 0; i < 8; i++) {
      view.setUint8(i, parseInt(yHex.substring(i * 2, i * 2 + 2), 16));
    }
    const lat = view.getFloat64(0, true);

    return { lat, lng };
  } catch (e) {
    console.error('Failed to parse WKB Point', e);
    return null;
  }
}
