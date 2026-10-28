"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons";

const primaryLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { label: "Give", href: "/donate" },
  { label: "Volunteer", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-navy-deep border-b-[3px] border-red"
        style={{ height: 70 }}
      >
        <div className="flex items-center justify-between h-full px-6 md:px-10 max-w-[1400px] mx-auto">
          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer -ml-2 shrink-0"
            aria-label="Open menu"
          >
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
          </button>

          {/* Brand */}
          <Link
            href="/"
            className="flex-1 min-w-0 flex flex-col items-center gap-0 no-underline px-2 nav-desktop:flex-none nav-desktop:items-start"
          >
            <span className="font-garamond text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] font-semibold text-white leading-tight truncate max-w-full">
              Aenon Ministries and Trust
            </span>
            <span className="hidden sm:block font-mono-dm text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.12em] text-white/35 leading-tight">
              Hyderabad, India &middot; Est. 1989
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Link
              href="/about"
              className="hidden sm:inline-block font-mono-dm text-[0.6rem] md:text-[0.65rem] tracking-[0.15em] uppercase text-white/80 border border-white/25 px-4 md:px-5 py-2.5 hover:border-white hover:text-white transition-colors no-underline"
            >
              Our Faith
            </Link>
            <Link
              href="/donate"
              className="font-mono-dm text-[0.6rem] md:text-[0.65rem] tracking-[0.15em] uppercase text-white px-4 md:px-5 py-2.5 bg-red hover:bg-red-light transition-colors no-underline"
            >
              Donate
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-screen mega menu */}
      <div
        className={`fixed inset-0 z-[60] grid grid-cols-1 nav-desktop:grid-cols-2 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Left panel: links */}
        <div className="relative bg-navy-mid flex flex-col justify-between px-8 py-10 md:px-16 md:py-14 overflow-y-auto">
          <div className="absolute inset-0 grid-pattern pointer-events-none" />

          <div className="relative flex items-center justify-between mb-10 md:mb-16">
            <span className="font-garamond text-[1.1rem] font-semibold text-white">
              Aenon Ministries and Trust
            </span>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-11 h-11 bg-navy-deep hover:bg-red transition-colors"
              aria-label="Close menu"
            >
              <span className="relative block w-[18px] h-[18px]">
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45" />
                <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white -rotate-45" />
              </span>
            </button>
          </div>

          <div className="relative flex flex-col gap-2 md:gap-3">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-garamond text-[2.1rem] md:text-[3rem] italic text-white hover:text-red-light transition-colors no-underline leading-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative mt-12 md:mt-16 flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono-dm text-[0.68rem] uppercase tracking-[0.12em] text-white/55 hover:text-white transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
                <YoutubeIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Right panel: photo */}
        <div className="hidden nav-desktop:block relative bg-navy-deep">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1000&q=80&fit=crop&crop=faces"
            alt="Community gathering in Hyderabad, India"
            fill
            className="object-cover opacity-80"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
        </div>
      </div>
    </>
  );
}
