"use client";

import Link from "next/link";
import { HiHome, HiRefresh } from "react-icons/hi";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-beige to-white">
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-7xl font-bold text-brand-navy font-sora mb-4">
            Oops!
          </h1>
          <div className="w-24 h-1 bg-brand-rust mx-auto mb-8" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-sora mb-4">
          Something went wrong
        </h2>

        <p className="text-lg text-brand-navy mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again or return to the
          homepage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-amber text-brand-charcoal font-medium rounded-lg hover:bg-brand-amber/90 transition-colors shadow-lg"
          >
            <HiRefresh size={20} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-navy text-brand-beige font-medium rounded-lg hover:bg-brand-navy/90 transition-colors shadow-lg"
          >
            <HiHome size={20} />
            Go to Homepage
          </Link>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-navy" />
          <div className="w-2 h-2 rounded-full bg-brand-steel" />
          <div className="w-2 h-2 rounded-full bg-brand-amber" />
          <div className="w-2 h-2 rounded-full bg-brand-rust" />
        </div>
      </div>
    </main>
  );
}
