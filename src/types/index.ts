export interface Spot {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  qrHash: string; // Used for QR code matching
  mapX?: number; // Relative X coordinate (0-100%) on the illustration map
  mapY?: number; // Relative Y coordinate (0-100%) on the illustration map
  stampImageUrl?: string; // Image of the acquired stamp
}

export interface StampRally {
  id: string;
  title: string;
  region: string;
  description: string;
  imageUrl: string;
  illustrationMapUrl?: string; // The fun interactive background map
  hidePinsOnMap?: boolean;
  spots: Spot[];
}

export interface Participation {
  id: string;
  userId: string;
  rallyId: string;
  startDate: string;
  completedDate?: string;
  durationsMs?: number;
}

export interface AcquiredStamp {
  id: string;
  userId: string;
  rallyId: string;
  spotId: string;
  acquiredAt: string;
}
