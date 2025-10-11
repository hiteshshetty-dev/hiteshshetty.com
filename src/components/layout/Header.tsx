"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";
import profileData from "@/data/profile.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b border-brand-steel/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/logo-inverted.svg"
                alt="Hitesh Shetty Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
                fetchPriority="high"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-brand-amber border-b-2 border-brand-amber"
                      : "text-brand-beige/80 hover:text-brand-amber"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg hover:bg-brand-amber/90 transition-colors"
              data-umami-event="Let's Talk"
            >
              <SiLinkedin size={20} />
              Let's Talk
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-brand-beige p-2 rounded-lg hover:bg-brand-steel/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-steel/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 px-2 py-1 ${
                    isActive(link.href)
                      ? "text-brand-amber border-l-2 border-brand-amber pl-3"
                      : "text-brand-beige/80 hover:text-brand-amber"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg hover:bg-brand-amber/90 transition-colors mt-2"
                data-umami-event="Let's Talk"
              >
                <SiLinkedin size={20} />
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
