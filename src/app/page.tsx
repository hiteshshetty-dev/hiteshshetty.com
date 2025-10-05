import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-48 h-48 mb-8 ">
          <Image
            src="/logo-navy.svg"
            alt="Hitesh Shetty Logo"
            width={192}
            height={192}
            priority
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-brand-navy">
          Coming Soon
        </h1>

        <p className="text-xl md:text-3xl text-brand-navy/70 mb-8 max-w-2xl mx-auto font-light">
          Crafting a beautiful portfolio experience
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-amber/20 border border-brand-amber/30">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-rust animate-pulse shadow-lg shadow-brand-rust/50" />
          <span className="text-sm font-medium text-brand-charcoal">
            Under Construction
          </span>
        </div>

        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-navy/20" />
          <div className="w-2 h-2 rounded-full bg-brand-steel/40" />
          <div className="w-2 h-2 rounded-full bg-brand-amber/60" />
          <div className="w-2 h-2 rounded-full bg-brand-rust/40" />
          <div className="w-2 h-2 rounded-full bg-brand-navy/20" />
        </div>
      </div>
    </div>
  );
}
