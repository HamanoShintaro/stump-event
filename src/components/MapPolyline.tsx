"use client";

import { useEffect, useState } from "react";
import { useMap } from "@vis.gl/react-google-maps";

interface MapPolylineProps {
  path: google.maps.LatLngLiteral[];
  strokeColor?: string;
  strokeWeight?: number;
}

export function MapPolyline({ path, strokeColor = "#f72585", strokeWeight = 4 }: MapPolylineProps) {
  const map = useMap();
  const [polyline, setPolyline] = useState<google.maps.Polyline | null>(null);

  useEffect(() => {
    if (!map) return;
    
    // Polyline using dotted line for unvisited vs solid for visited could be customized here
    const lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4
    };

    const newPolyline = new google.maps.Polyline({
      path,
      strokeColor,
      strokeOpacity: 0.8,
      strokeWeight,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px'
      }],
      map
    });

    setPolyline(newPolyline);

    return () => {
      newPolyline.setMap(null);
    };
  }, [map, path, strokeColor, strokeWeight]);

  // Update path if changed
  useEffect(() => {
    if (polyline) {
      polyline.setPath(path);
    }
  }, [polyline, path]);

  return null;
}
