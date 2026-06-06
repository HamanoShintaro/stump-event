export interface Spot {
  id: string;
  name: string;
  description?: string;
  address?: string;
  lat: number;
  lng: number;
  qr_token?: string; // Used for QR check-in
  radius_m?: number; // Check-in boundary radius (default 50m)
  cover_image_url?: string;
  mapX?: number; // Relative X coordinate (0-100%) on the illustration map
  mapY?: number; // Relative Y coordinate (0-100%) on the illustration map
  f7_fragment?: string; // Short story snippet for ceremony (30-40 chars)
  f7_full?: string; // Full story snippet for post-scan card (120 chars)
  is_final?: boolean; // Is this the last spot of the route?
  next_spot_id?: string; // ID of the next spot
  next_spot_name?: string; // Name of the next spot
}

export interface Route {
  id: string;
  name?: string;
  title?: string; // Legacy / Mock compatibility
  description?: string;
  area_name?: string; // e.g. "中目黒"
  region?: string; // Legacy / Mock compatibility
  category?: "discover" | "see" | "achieve" | "experience" | "collect" | "eat" | string;
  scene_tags?: string[];
  route_type?: "platform" | "facility" | "event" | "sponsored";
  display_terminology?: "shuin" | "stamp";
  rarity_estimated_min?: number; // estimated duration in minutes
  cover_image_url?: string;
  imageUrl?: string; // Legacy / Mock compatibility
  illustrationMapUrl?: string; // Legacy / Mock compatibility
  hidePinsOnMap?: boolean; // Legacy / Mock compatibility
  is_published?: boolean;
  published_at?: string;
  spots?: Spot[];
  completion_ceremony_type?: "simple" | "quiz_4choice" | string;
  completion_quiz_data?: {
    question: string;
    choices: Array<{
      key: string;
      text: string;
      description: string;
      badge_code: string;
    }>;
  };
}

export interface UserRouteProgress {
  id: string;
  user_id: string;
  route_id: string;
  status: "not_started" | "in_progress" | "completed";
  started_at?: string;
  completed_at?: string;
  stamps_collected: number;
  total_spots: number;
}

export interface Stamp {
  id: string;
  stamp_event_id: string;
  user_id: string;
  spot_id: string;
  route_id?: string;
  visitor_number: number;
  acquired_at: string;
}

export interface StampEvent {
  id: string;
  user_id: string;
  spot_id: string;
  route_id?: string;
  method: "gps" | "qr";
  lat?: number;
  lng?: number;
  accuracy_m?: number;
  distance_to_spot_m?: number;
  qr_token_used?: string;
  visitor_number: number;
  is_first_visit: boolean;
  created_at: string;
}

export interface Badge {
  id: string;
  code: string;
  category: string;
  name_ja: string;
  subtitle_en: string;
  rarity: number;
  description?: string;
  condition_type: string;
  condition_params: any;
  spot_id?: string;
  route_id?: string;
  area_name?: string;
  is_active: boolean;
}

export interface BadgeAssignment {
  id: string;
  user_id: string;
  badge_id: string;
  triggered_by_stamp_event_id?: string;
  acquired_at: string;
}
