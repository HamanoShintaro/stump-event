"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "stump_event_acquired_stamps";

export function useAcquiredStamps() {
  const [acquiredStamps, setAcquiredStamps] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setAcquiredStamps(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load stamps", e);
    }
    setIsLoaded(true);
  }, []);

  const addStamp = useCallback((spotId: string) => {
    setAcquiredStamps((prev) => {
      if (prev.includes(spotId)) return prev;
      const next = [...prev, spotId];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.error("Failed to save stamp", e);
      }
      return next;
    });
  }, []);

  const hasStamp = useCallback((spotId: string) => {
    return acquiredStamps.includes(spotId);
  }, [acquiredStamps]);

  return { acquiredStamps, addStamp, hasStamp, isLoaded };
}
