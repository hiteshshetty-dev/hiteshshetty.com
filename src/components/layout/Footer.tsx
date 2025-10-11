import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profileData from "@/data/profile.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center text-center space-y-6 md:flex-row md:justify-between md:items-start md:text-left md:space-y-0">
          <div className="flex flex-col items-center md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
            <Image
              src="/logo-inverted.svg"
              alt="Hitesh Shetty Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="text-center md:text-left">
              <h3 className="font-sora font-bold text-lg sm:text-xl text-brand-beige">
                Hitesh Shetty
              </h3>
              <p className="text-brand-beige/70 text-sm max-w-xs">
                {profileData.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <h3 className="font-sora font-bold text-base sm:text-lg text-brand-beige">
              Get in Touch
            </h3>
            <div className="flex items-center space-x-4">
              <a
                href={`mailto:${profileData.email}`}
                className="text-brand-beige/70 hover:text-brand-amber transition-colors p-2 rounded-full hover:bg-brand-steel/20"
                aria-label="Email"
              >
                <HiMail size={20} />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/70 hover:text-brand-amber transition-colors p-2 rounded-full hover:bg-brand-steel/20"
                aria-label="GitHub"
              >
                <SiGithub size={20} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/70 hover:text-brand-amber transition-colors p-2 rounded-full hover:bg-brand-steel/20"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-steel/20 mt-6 pt-6 text-center">
          <p className="text-brand-beige/60 text-xs sm:text-sm">
            © {currentYear} Hitesh Shetty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
