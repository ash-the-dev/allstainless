"use client";

import { wipTrack } from "../lib/wipTrack";

export default function TrackableAnchor({
  trackEvent,
  trackSource,
  category = "engagement",
  isConversion = false,
  onClick,
  children,
  ...props
}) {
  return (
    <a
      onClick={(e) => {
        if (trackEvent && trackSource) {
          wipTrack(trackEvent, { category, isConversion, properties: { source: trackSource } });
        }
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
