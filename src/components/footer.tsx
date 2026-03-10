import Link from "next/link";

const navigateLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
];

const programLinks = [
  { label: "Education", href: "/work#education" },
  { label: "Healthcare", href: "/work#healthcare" },
  { label: "Women & Children", href: "/work#women-children" },
  { label: "Disaster Relief", href: "/work#disaster-relief" },
  { label: "Village Outreach", href: "/work#village-outreach" },
  { label: "Leadership", href: "/work#leadership" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t-[3px] border-red">
      {/* Main grid */}
      <div className="grid grid-cols-1 footer-desktop:grid-cols-[2fr_1fr_1fr_1fr] gap-10 footer-desktop:gap-16 px-8 py-12 footer-desktop:px-20 footer-desktop:py-16 max-w-[1400px] mx-auto">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-garamond text-[1.4rem] font-bold text-white m-0 leading-tight">
              Aenon Ministries and Trust
            </h3>
            <p className="font-mono-dm text-[0.6rem] uppercase tracking-[0.12em] text-white/35 mt-1 mb-0">
              Registered NGO &middot; Hyderabad, India
            </p>
          </div>
          <p className="font-mulish text-[0.85rem] leading-relaxed text-white/50 max-w-[320px] m-0">
            Serving communities with compassion and dignity from Hyderabad,
            India since 1989. Bringing hope through education, healthcare, and
            community development.
          </p>
        </div>

        {/* Column 2: Navigate */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-white/35 m-0">
            Navigate
          </h4>
          <div className="flex flex-col gap-2">
            {navigateLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono-dm text-[0.7rem] uppercase tracking-[0.1em] text-white/50 transition-colors duration-200 hover:text-white no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Programs */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-white/35 m-0">
            Programs
          </h4>
          <div className="flex flex-col gap-2">
            {programLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono-dm text-[0.7rem] uppercase tracking-[0.1em] text-white/50 transition-colors duration-200 hover:text-white no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-white/35 m-0">
            Contact
          </h4>
          <div className="flex flex-col gap-2">
            <span className="font-mono-dm text-[0.7rem] text-white/50 leading-relaxed">
              Hyderabad
              <br />
              India, 500017
            </span>
            <a
              href="mailto:info@aenonministries.org"
              className="font-mono-dm text-[0.7rem] text-white/50 transition-colors duration-200 hover:text-white no-underline"
            >
              info@aenonministries.org
            </a>
            <a
              href="tel:+914000000000"
              className="font-mono-dm text-[0.7rem] text-white/50 transition-colors duration-200 hover:text-white no-underline"
            >
              +91 40 0000 0000
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 footer-desktop:px-20 py-6">
        <div className="flex flex-col footer-desktop:flex-row items-center justify-between gap-3 max-w-[1400px] mx-auto">
          <span className="font-mono-dm text-[0.6rem] text-white/30 tracking-[0.05em]">
            &copy; 2026 Aenon Ministries and Trust. All rights reserved.
          </span>
          <span className="font-mono-dm text-[0.6rem] text-white/20 tracking-[0.05em] text-center">
            Registered under the Societies Registration Act &middot; FCRA
            Approved &middot; 80G Tax Exemption
          </span>
        </div>
      </div>
    </footer>
  );
}
