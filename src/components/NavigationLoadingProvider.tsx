"use client";

import { Suspense } from "react";
import LoadingOverlay from "./LoadingOverlay";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";

function NavigationLoadingDetector() {
  const { isNavigating, loadingMessage } = useNavigationLoading();

  if (!isNavigating) return null;

  return <LoadingOverlay message={loadingMessage} />;
}

export default function NavigationLoadingProvider() {
  return (
    <Suspense fallback={null}>
      <NavigationLoadingDetector />
    </Suspense>
  );
}
