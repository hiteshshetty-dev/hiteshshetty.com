import type { Metadata } from "next";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. It might have been moved or deleted.",
  alternates: {
    canonical: "https://hiteshshetty.com/404",
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-beige to-white">
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-brand-navy font-sora mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-brand-amber mx-auto mb-8"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-sora mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-brand-navy/70 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-amber text-brand-charcoal font-medium rounded-lg hover:bg-brand-amber/90 transition-colors shadow-lg"
          >
            <HiHome size={20} />
            Go to Homepage
          </Link>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-navy"></div>
          <div className="w-2 h-2 rounded-full bg-brand-steel"></div>
          <div className="w-2 h-2 rounded-full bg-brand-amber"></div>
          <div className="w-2 h-2 rounded-full bg-brand-rust"></div>
        </div>
      </div>
    </main>
  );
}
