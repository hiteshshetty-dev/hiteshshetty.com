import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profileData from "@/data/profile.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-row items-center justify-between md:items-start md:text-left">
          <div className="flex flex-row items-center space-x-3">
            <Image
              src="/icons/logo-inverted.svg"
              alt="Hitesh Shetty Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="md:text-left">
              <h3 className="font-bold text-sm sm:text-lg text-brand-beige">
                Hitesh Shetty
              </h3>
              <p className="hidden sm:block text-brand-beige/70 text-xs sm:text-sm max-w-xs">
                {profileData.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end md:items-start space-y-1.5">
            <h3 className="hidden md:block font-bold text-sm sm:text-base text-brand-beige">
              Get in Touch
            </h3>
            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${profileData.email}`}
                className="text-brand-beige/70 hover:text-brand-amber transition-colors p-1.5 rounded-full hover:bg-brand-steel/20"
                aria-label="Email"
              >
                <HiMail size={18} />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/70 hover:text-brand-amber transition-colors p-1.5 rounded-full hover:bg-brand-steel/20"
                aria-label="GitHub"
              >
                <SiGithub size={18} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/70 hover:text-brand-amber transition-colors p-1.5 rounded-full hover:bg-brand-steel/20"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-steel/20 mt-4 pt-4 text-center">
          <p className="text-brand-beige/60 text-xs sm:text-sm">
            © {currentYear} Hitesh Shetty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
