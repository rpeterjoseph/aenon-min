"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-navy-deep border-b-[3px] border-red"
      style={{ height: 70 }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Brand */}
        <Link href="/" className="flex flex-col gap-0 no-underline">
          <span className="font-garamond text-[1.3rem] font-bold text-white leading-tight">
            Aenon Ministries and Trust
          </span>
          <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.12em] text-white/35 leading-tight">
            Serving South India &middot; Est. 1989
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden nav-desktop:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono-dm text-[0.65rem] uppercase tracking-[0.1em] text-white/60 px-5 py-2 border-l border-white/10 transition-colors duration-200 hover:text-white no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="font-mono-dm text-[0.65rem] uppercase tracking-[0.1em] text-white px-5 py-2 ml-2 bg-red rounded-sm transition-colors duration-200 hover:bg-red-light no-underline"
          >
            Donate
          </Link>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex nav-desktop:hidden flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center"
            style={
              mobileOpen
                ? { transform: "translateY(7px) rotate(45deg)" }
                : {}
            }
          />
          <span
            className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300"
            style={mobileOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center"
            style={
              mobileOpen
                ? { transform: "translateY(-7px) rotate(-45deg)" }
                : {}
            }
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="nav-desktop:hidden fixed left-0 right-0 bottom-0 bg-navy-deep flex flex-col items-center justify-center gap-6"
          style={{ top: 70 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono-dm text-[0.8rem] uppercase tracking-[0.15em] text-white/60 transition-colors duration-200 hover:text-white no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setMobileOpen(false)}
            className="font-mono-dm text-[0.8rem] uppercase tracking-[0.15em] text-white bg-red px-8 py-3 rounded-sm transition-colors duration-200 hover:bg-red-light no-underline"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}
