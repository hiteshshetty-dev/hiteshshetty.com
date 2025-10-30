interface Umami {
  track: (
    eventName: string,
    eventData?: Record<string, string | number>,
  ) => void;
}

declare global {
  interface Window {
    umami?: Umami;
  }
}

export {};
