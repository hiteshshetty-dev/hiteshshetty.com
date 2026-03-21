"use client";

import dynamic from "next/dynamic";

const ImageErrorTracker = dynamic(
  () => import("@/components/Analytics/ImageErrorTracker"),
  { ssr: false },
);

export default function ImageErrorTrackerClient() {
  return <ImageErrorTracker />;
}
