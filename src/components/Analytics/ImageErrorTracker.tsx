"use client";

import { useEffect } from "react";

export default function ImageErrorTracker() {
  useEffect(() => {
    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement;

      if (
        target.tagName === "IMG" &&
        typeof window !== "undefined" &&
        window.umami
      ) {
        let projectTitle = "Unknown";

        const imageProjectAttr =
          target.getAttribute("data-project-title") ||
          target.getAttribute("data-project");
        if (imageProjectAttr) {
          projectTitle = imageProjectAttr;
        } else if (target.alt) {
          const altMatch = target.alt.match(
            /(?:Preview|Screenshot).*?of\s+([^project]+?)(?:\s+project|$)/i,
          );
          if (altMatch) {
            projectTitle = altMatch[1].trim();
          }
        }

        const imageIndex = target.getAttribute("data-image-index");
        const trackData: Record<string, string | number> = {
          project: projectTitle,
          src: target.src.substring(0, 100),
        };

        if (imageIndex !== null) {
          trackData.imageIndex = imageIndex;
        }

        window.umami.track("Image Load Failed", trackData);
      }
    };

    document.addEventListener("error", handleImageError, true);

    return () => {
      document.removeEventListener("error", handleImageError, true);
    };
  }, []);

  return null;
}
