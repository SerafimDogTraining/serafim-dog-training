declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires an event to both Meta Pixel and GA4. Safe if either is missing. */
export function trackEvent(
  name: string,
  params: Record<string, string | number> = {},
  metaKind: "track" | "trackCustom" = "trackCustom"
) {
  try {
    window.fbq?.(metaKind, name, params);
  } catch {
    /* pixel blocked — ignore */
  }
  try {
    window.gtag?.("event", name, params);
  } catch {
    /* GA blocked — ignore */
  }
}

export {};
