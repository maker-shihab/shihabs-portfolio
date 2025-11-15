/**
 * Analytics service utilities
 * This file can be used for server-side analytics tracking or shared analytics logic
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
}

export function trackEvent(event: AnalyticsEvent) {
  // Server-side or shared analytics tracking logic
  if (typeof window !== "undefined") {
    console.log("Analytics event:", event);
  }
}

export function trackPageView(path: string) {
  trackEvent({
    name: "page_view",
    properties: { path },
  });
}
