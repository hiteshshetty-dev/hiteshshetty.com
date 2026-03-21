"use client";

import { useEffect, useRef } from "react";

const ARTICLE_SELECTOR = "[data-reading-content]";

function getProgress(): number {
  const article = document.querySelector(ARTICLE_SELECTOR);
  if (!article) return 0;

  const rect = article.getBoundingClientRect();
  const articleTop = rect.top + window.scrollY;
  const articleBottom = articleTop + rect.height;
  const viewportHeight = window.innerHeight;

  if (rect.height <= viewportHeight) return 1;

  const scrolledIntoView = window.scrollY + viewportHeight - articleTop;
  const totalScrollable = articleBottom - articleTop;
  const progress = scrolledIntoView / totalScrollable;
  return Math.max(0, Math.min(1, progress));
}

export default function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const node = barRef.current;
      if (node) {
        node.style.transform = `scaleX(${getProgress()})`;
      }
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-brand-navy/10"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full bg-brand-amber transition-[transform] duration-100 ease-out"
        style={{
          transform: "scaleX(0)",
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
