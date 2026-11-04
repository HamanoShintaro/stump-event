"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import { trackMicroFeedback, trackRouteShare } from "@/utils/analytics";

export type FeedbackSentiment =
  | "walk_soon"
  | "interesting"
  | "want_other_area"
  | "hard_to_walk";

interface UseRouteMicroFeedbackProps {
  routeId: string;
  routeTitle: string;
  areaName: string;
}

export function useRouteMicroFeedback({
  routeId,
  routeTitle,
  areaName,
}: UseRouteMicroFeedbackProps) {
  const { user } = useAuth();
  const [selectedSentiment, setSelectedSentiment] =
    useState<FeedbackSentiment | null>(null);
  const [requestedArea, setRequestedArea] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedShareUrl, setCopiedShareUrl] = useState(false);

  const storageKey = `shuin_micro_feedback_${routeId}`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.sentiment) {
          setSelectedSentiment(parsed.sentiment);
          setIsSubmitted(true);
        }
      }
    } catch {
      // ignore localStorage read errors
    }
  }, [storageKey]);

  const sendFeedbackPayload = useCallback(
    async (
      sentiment: FeedbackSentiment,
      reqAreaText: string,
      commentText: string
    ) => {
      setIsSubmitting(true);
      try {
        await fetch("/api/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user?.id || null,
            routeId,
            routeTitle,
            areaName,
            sentiment,
            requestedArea: reqAreaText.trim(),
            comment: commentText.trim(),
          }),
        });

        trackMicroFeedback(
          routeId,
          sentiment,
          Boolean(reqAreaText.trim() || commentText.trim())
        );

        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            storageKey,
            JSON.stringify({
              sentiment,
              submittedAt: new Date().toISOString(),
            })
          );
        }
        setIsSubmitted(true);
      } catch {
        // non-blocking
      } finally {
        setIsSubmitting(false);
      }
    },
    [user?.id, routeId, routeTitle, areaName, storageKey]
  );

  const handleSelectSentiment = useCallback(
    async (sentiment: FeedbackSentiment) => {
      setSelectedSentiment(sentiment);
      // 1タップで即送信（後から駅名リクエストや一言を追記することも可能）
      if (sentiment === "walk_soon" || sentiment === "interesting") {
        await sendFeedbackPayload(sentiment, requestedArea, comment);
      }
    },
    [sendFeedbackPayload, requestedArea, comment]
  );

  const handleSubmitDetails = useCallback(
    async (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (!selectedSentiment) return;
      await sendFeedbackPayload(selectedSentiment, requestedArea, comment);
    },
    [selectedSentiment, requestedArea, comment, sendFeedbackPayload]
  );

  const handleShare = useCallback(
    async (platform: "x" | "line" | "copy") => {
      if (typeof window === "undefined") return;
      const shareUrl = `${window.location.origin}/routes/${routeId}`;
      const shareText = `${areaName}の街を歩いて、しるしを刻む。\n物語「${routeTitle}」｜SHUIN まちのしるし`;

      trackRouteShare(routeId, platform);

      if (platform === "x") {
        const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(shareUrl)}&hashtags=${encodeURIComponent(
          `${areaName},街歩き,SHUIN`
        )}`;
        window.open(xUrl, "_blank", "noopener,noreferrer");
        return;
      }

      if (platform === "line") {
        const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
          shareUrl
        )}`;
        window.open(lineUrl, "_blank", "noopener,noreferrer");
        return;
      }

      if (platform === "copy") {
        try {
          await navigator.clipboard.writeText(shareUrl);
          setCopiedShareUrl(true);
          setTimeout(() => setCopiedShareUrl(false), 2500);
        } catch {
          // ignore clipboard error
        }
      }
    },
    [routeId, routeTitle, areaName]
  );

  return {
    selectedSentiment,
    requestedArea,
    setRequestedArea,
    comment,
    setComment,
    isSubmitting,
    isSubmitted,
    copiedShareUrl,
    handleSelectSentiment,
    handleSubmitDetails,
    handleShare,
  };
}
