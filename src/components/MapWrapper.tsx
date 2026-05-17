"use client";

import dynamic from "next/dynamic";

const MapUI = dynamic(() => import("./MapUI"), { ssr: false });

export default function MapWrapper() {
  return <MapUI />;
}
