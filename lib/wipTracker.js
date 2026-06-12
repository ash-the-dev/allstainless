/**
 * WIP tracker script URL and site key for All Stainless.
 * Override script URL with NEXT_PUBLIC_WIP_TRACKER_SCRIPT_URL if needed.
 */
export const WIP_TRACKER_SRC =
  process.env.NEXT_PUBLIC_WIP_TRACKER_SCRIPT_URL?.trim() ||
  "https://www.commithappens.com/tracker/wip.js";

export const WIP_SITE_KEY = "1f1171bc-568b-4cd6-a836-464436001cb6";

export function getWipTrackerScriptSrc() {
  return WIP_TRACKER_SRC;
}
