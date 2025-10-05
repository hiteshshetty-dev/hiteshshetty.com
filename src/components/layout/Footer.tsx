import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profileData from "@/data/profile.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-steel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-sora font-bold text-xl mb-4 text-brand-beige">
              Hitesh Shetty
            </h3>
            <p className="text-brand-beige/70 text-sm leading-relaxed">
              {profileData.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-sora font-bold text-lg mb-4 text-brand-beige">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-brand-beige/70 hover:text-brand-amber transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-brand-beige/70 hover:text-brand-amber transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-brand-beige/70 hover:text-brand-amber transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="text-brand-beige/70 hover:text-brand-amber transition-colors text-sm"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sora font-bold text-lg mb-4 text-brand-beige">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-brand-beige/70 hover:text-brand-amber transition-colors"
                >
                  <HiMail size={20} />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-beige/70 hover:text-brand-amber transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub size={20} />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-beige/70 hover:text-brand-amber transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin size={20} />
                </a>
              </div>
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
