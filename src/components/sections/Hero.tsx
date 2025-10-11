import Image from "next/image";
import { HiDocumentDownload, HiMail } from "react-icons/hi";
import { SiCodepen, SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import profileData from "@/data/profile.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-beige py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <header className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-brand-navy font-sora animate-fade-in-up">
              {profileData.name}
            </h1>

            <h2 className="text-2xl md:text-3xl text-brand-steel mb-4 font-medium animate-fade-in-up [animation-delay:0.2s]">
              {profileData.title}
            </h2>

            <p className="text-lg md:text-xl text-brand-navy/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up [animation-delay:0.4s]">
              {profileData.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up [animation-delay:0.6s]">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-amber text-brand-charcoal font-medium rounded-lg hover:bg-brand-amber/90 transition-colors shadow-lg"
                data-umami-event="Let's Talk"
              >
                <SiLinkedin size={20} />
                Let's Talk
              </a>
              <a
                href="/documents/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-navy text-brand-beige font-medium rounded-lg hover:bg-brand-navy/90 transition-colors shadow-lg"
                data-umami-event="Download Resume"
              >
                <HiDocumentDownload size={20} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up [animation-delay:0.8s]">
              <a
                href={`mailto:${profileData.email}`}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-navy/10 hover:bg-brand-navy hover:text-brand-beige text-brand-navy transition-all"
                aria-label="Email"
              >
                <HiMail size={24} />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-navy/10 hover:bg-brand-navy hover:text-brand-beige text-brand-navy transition-all"
                aria-label="GitHub"
              >
                <SiGithub size={24} />
              </a>
              <a
                href={profileData.codepen}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-navy/10 hover:bg-brand-navy hover:text-brand-beige text-brand-navy transition-all"
                aria-label="Codepen"
              >
                <SiCodepen size={24} />
              </a>
              <a
                href={profileData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-navy/10 hover:bg-brand-navy hover:text-brand-beige text-brand-navy transition-all"
                aria-label="LeetCode"
              >
                <SiLeetcode size={24} />
              </a>
            </div>
          </header>

          <div className="flex justify-center lg:justify-end animate-fade-in-up [animation-delay:1s]">
            <div className="relative w-96 h-96 md:w-[480px] md:h-[480px] rounded-3xl overflow-hidden border-4 border-brand-amber/30">
              <Image
                src="/images/profile.jpg"
                alt={`Professional headshot of ${profileData.name}, ${profileData.title} based in ${profileData.location}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 384px, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
