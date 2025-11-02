import Image from "next/image";

const OpenGraphImage = () => {
  return (
    <div
      className="fixed top-0 left-0 w-[1200px] h-[630px] bg-brand-beige z-50 border-4 border-brand-amber/30"
      id="og-image-preview"
    >
      <div className="flex h-full">
        <div className="flex-1 flex items-center justify-center p-12">
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-brand-amber/30">
            <Image
              src="/images/profile.webp"
              alt="Hitesh Shetty"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center p-12 text-brand-navy">
          <h1 className="text-6xl font-bold mb-4 font-sora text-brand-navy">
            Hitesh Shetty
          </h1>
          <h2 className="text-3xl text-brand-steel mb-6 font-medium">
            Senior Software Engineer
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              React
            </span>
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              Next.js
            </span>
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              Nest.js
            </span>
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              MongoDB
            </span>
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              Full-Stack
            </span>
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              Open Source
            </span>
            <span className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg">
              AI Integration
            </span>
          </div>

          <p className="text-2xl text-brand-navy/70 font-medium">
            hiteshshetty.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenGraphImage;
