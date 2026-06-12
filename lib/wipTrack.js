/**
 * Fire a WIP tracker custom event (loaded via wip.js as window.__wipTrack).
 */
export function wipTrack(eventName, { category, isConversion = false, properties = {} } = {}) {
  if (typeof window === "undefined") return;
  const track = window.__wipTrack;
  if (typeof track !== "function") return;
  track(eventName, { category, isConversion, properties });
}

export function wipTrackContactClick(source) {
  wipTrack("contact_click", {
    category: "conversion",
    isConversion: true,
    properties: { source },
  });
}
