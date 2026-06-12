"use client";

import Link from "next/link";
import { wipTrack } from "../lib/wipTrack";

export default function TrackableLink({
  href,
  trackEvent,
  trackSource,
  category = "engagement",
  isConversion = false,
  onClick,
  children,
  ...props
}) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (trackEvent && trackSource) {
          wipTrack(trackEvent, { category, isConversion, properties: { source: trackSource } });
        }
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
