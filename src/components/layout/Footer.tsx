import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profileData from "@/data/profile.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo-inverted.svg"
              alt="Hitesh Shetty Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-sora font-bold text-xl text-brand-beige">
                Hitesh Shetty
              </h3>
              <p className="text-brand-beige/70 text-sm">
                {profileData.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-sora font-bold text-lg text-brand-beige">
              Get in Touch
            </h3>
            <div className="flex items-center space-x-6">
              <a
                href={`mailto:${profileData.email}`}
                className="text-brand-beige/70 hover:text-brand-amber transition-colors"
                aria-label="Email"
              >
                <HiMail size={24} />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/70 hover:text-brand-amber transition-colors"
                aria-label="GitHub"
              >
                <SiGithub size={24} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-beige/70 hover:text-brand-amber transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-steel/20 mt-8 pt-8 text-center">
          <p className="text-brand-beige/60 text-sm">
            © {currentYear} Hitesh Shetty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
