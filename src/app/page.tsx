import Image from "next/image";
import Link from "next/link";
import {
  EduIcon,
  HealthIcon,
  UsersIcon,
  GlobeIcon,
  AlertIcon,
  HomeIcon,
  DonateIcon,
  VolunteerIcon,
  PartnerIcon,
} from "@/components/icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const marqueeItems = [
  "Rural Village Outreach",
  "Education & Schools",
  "Healthcare & Clinics",
  "Women & Children",
  "Disaster Relief",
  "COVID-19 Relief",
  "Community Leadership",
  "Pastor Support",
  "Clean Water Projects",
  "Vocational Training",
  "Mobile Medical Camps",
  "Scholarship Programs",
];

const programCards = [
  {
    number: "01",
    icon: <EduIcon className="w-7 h-7" />,
    name: (
      <>
        Education &amp; <em>Schools</em>
      </>
    ),
    description:
      "Scholarships, tuition centres, and adult literacy programs that open doors for children and adults across India.",
    slug: "education",
  },
  {
    number: "02",
    icon: <HealthIcon className="w-7 h-7" />,
    name: (
      <>
        Healthcare &amp; <em>Clinics</em>
      </>
    ),
    description:
      "Mobile medical camps, maternal health services, and community clinics reaching underserved populations.",
    slug: "healthcare",
  },
  {
    number: "03",
    icon: <UsersIcon className="w-7 h-7" />,
    name: (
      <>
        Women &amp; <em>Children</em>
      </>
    ),
    description:
      "Vocational training, self-help groups, and child nutrition programs that strengthen families from the inside out.",
    slug: "women",
  },
  {
    number: "04",
    icon: <GlobeIcon className="w-7 h-7" />,
    name: (
      <>
        Rural Village <em>Outreach</em>
      </>
    ),
    description:
      "Clean water infrastructure, sustainable agriculture training, and holistic village development across 120+ communities.",
    slug: "outreach",
  },
  {
    number: "05",
    icon: <AlertIcon className="w-7 h-7" />,
    name: (
      <>
        Disaster &amp; <em>Crisis Relief</em>
      </>
    ),
    description:
      "Rapid emergency response, food and supply distribution, and long-term recovery support for affected communities.",
    slug: "relief",
  },
  {
    number: "06",
    icon: <HomeIcon className="w-7 h-7" />,
    name: (
      <>
        Community &amp; <em>Leadership</em>
      </>
    ),
    description:
      "Leadership development workshops and community-building initiatives that equip local leaders to serve their people.",
    slug: "leadership",
  },
];

const storyCards = [
  {
    icon: <EduIcon className="w-10 h-10 text-muted" />,
    category: "Education",
    title: "First in Her Family to Complete Secondary School",
    excerpt:
      "Meena, 16, became the first in her family to finish Class 10 with support from our scholarship program.",
    slug: "meena",
    placeholder: "Education story image",
  },
  {
    icon: <HomeIcon className="w-10 h-10 text-muted" />,
    category: "Disaster Relief",
    title: "200 Families Rebuild After the 2023 Floods",
    excerpt:
      "After the 2023 floods, our team delivered food, clean water, and reconstruction support within 48 hours.",
    slug: "floods",
    placeholder: "Disaster relief story image",
  },
  {
    icon: <HealthIcon className="w-10 h-10 text-muted" />,
    category: "Healthcare",
    title: "Mobile Clinic Reaches a Village for the First Time",
    excerpt:
      "A village 40 km from the nearest town received its first medical camp, serving 180 patients in one day.",
    slug: "clinic",
    placeholder: "Healthcare story image",
  },
];

const involveCards = [
  {
    icon: <DonateIcon className="w-8 h-8" />,
    title: "Donate",
    description:
      "Your financial gift directly funds education, healthcare, and relief for families across India. Every contribution makes a measurable difference.",
    buttonLabel: "Give Today",
    buttonClass:
      "inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-red text-white hover:bg-red-light hover:-translate-y-0.5 transition-all",
    href: "/donate",
  },
  {
    icon: <VolunteerIcon className="w-8 h-8" />,
    title: "Volunteer",
    description:
      "Join our teams on the ground or contribute your professional skills remotely. We welcome volunteers in medical, education, and administrative roles.",
    buttonLabel: "Get Started",
    buttonClass:
      "inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-navy text-white hover:bg-navy-mid hover:-translate-y-0.5 transition-all",
    href: "/contact",
  },
  {
    icon: <PartnerIcon className="w-8 h-8" />,
    title: "Partner",
    description:
      "Churches, organisations, and businesses can partner with us for sustained community impact. We build long-term relationships rooted in shared purpose.",
    buttonLabel: "Learn More",
    buttonClass:
      "inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-transparent text-red border border-red hover:bg-red hover:text-white hover:-translate-y-0.5 transition-all",
    href: "/contact",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="pt-[70px]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative bg-navy-deep min-h-[calc(100vh-70px)]">
        {/* Grid overlay */}
        <div className="grid-pattern absolute inset-0 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-70px)]">
          {/* Left column */}
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:py-24 lg:pl-20 lg:pr-16">
            {/* Eyebrow */}
            <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-8 animate-fade-up before:content-[''] before:w-[22px] before:h-[2px] before:bg-red">
              Hyderabad, India &middot; Community Development
            </span>

            {/* H1 */}
            <h1
              className="font-garamond font-normal text-white leading-[1.08] mb-8 animate-fade-up-delay-1"
              style={{ fontSize: "clamp(3rem, 5.5vw, 6rem)" }}
            >
              Serving with
              <br />
              <em>&nbsp;compassion,</em>
              <br />
              <strong>&nbsp;building</strong> hope.
            </h1>

            {/* Description */}
            <p className="text-[0.98rem] font-light leading-[1.85] text-white/60 max-w-[52ch] mb-10 animate-fade-up-delay-2">
              Aenon Ministries and Trust works alongside communities from
              Hyderabad, India — providing education, healthcare, disaster
              relief, and holistic support to those who need it most.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link
                href="/donate"
                className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-red text-white hover:bg-red-light hover:-translate-y-0.5 transition-all no-underline"
              >
                Support Our Work
              </Link>
              <Link
                href="/work"
                className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-transparent text-white/80 border border-white/25 hover:border-white hover:text-white hover:-translate-y-0.5 transition-all no-underline"
              >
                Our Programs
              </Link>
            </div>
          </div>

          {/* Right column - image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80&fit=crop&crop=center"
              alt="Community outreach in Hyderabad, India"
              fill
              className="object-cover animate-fade-in"
              priority
              sizes="50vw"
            />
            {/* Photo label */}
            <span className="absolute bottom-4 right-4 font-mono-dm text-[0.55rem] uppercase tracking-[0.1em] text-white/40 bg-black/30 px-3 py-1.5 rounded-sm backdrop-blur-sm">
              Replace with your own photo
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MARQUEE BAR                                               */}
      {/* ============================================================ */}
      <div className="hidden md:block bg-red overflow-hidden" style={{ height: 44 }}>
        <div className="flex items-center h-full animate-marquee whitespace-nowrap">
          {/* Duplicate items for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 mx-4">
              <span className="font-mono-dm text-[0.6rem] tracking-[0.2em] uppercase text-white/90">
                {item}
              </span>
              <span className="w-[4px] h-[4px] rounded-full bg-white/40" />
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. PROGRAMS SECTION - "What We Do"                           */}
      {/* ============================================================ */}
      <section className="bg-white px-6 py-16 md:px-12 lg:px-20 lg:py-22">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14 max-w-[1400px] mx-auto">
          <div>
            <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-red">
              What We Do
            </span>
            <h2
              className="font-garamond font-normal leading-tight text-navy"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Holistic care for{" "}
              <em className="text-red">whole communities</em>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[0.98rem] font-light leading-[1.85] text-muted max-w-[58ch] mb-6">
              Our programs are designed to work together — because real
              transformation touches every part of life. From classrooms to
              clinics, from farms to families, we serve the whole person and the
              whole community.
            </p>
            <div>
              <Link
                href="/work"
                className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-navy text-white hover:bg-navy-mid hover:-translate-y-0.5 transition-all no-underline"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Program cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-[1400px] mx-auto">
          {programCards.map((card) => (
            <Link
              key={card.slug}
              href={`/work/${card.slug}`}
              className="group relative block border border-border p-8 transition-all duration-300 hover:bg-navy-deep hover:border-navy-deep no-underline -mt-px -ml-px"
            >
              {/* Number */}
              <span className="font-mono-dm text-[0.6rem] tracking-[0.2em] text-muted/50 group-hover:text-white/30 transition-colors">
                {card.number}
              </span>

              {/* Icon */}
              <div className="mt-5 mb-4 text-red group-hover:text-red-light transition-colors">
                {card.icon}
              </div>

              {/* Name */}
              <h3 className="font-garamond text-[1.35rem] font-normal text-navy group-hover:text-white mb-3 transition-colors leading-tight">
                {card.name}
              </h3>

              {/* Description */}
              <p className="text-[0.88rem] font-light leading-[1.75] text-muted group-hover:text-white/55 transition-colors">
                {card.description}
              </p>

              {/* Bottom red line on hover */}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. STORY STRIP                                               */}
      {/* ============================================================ */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - decorative text */}
        <div className="relative bg-navy-mid py-20 px-8 md:px-16 lg:px-20 overflow-hidden min-h-[300px] lg:min-h-[500px] flex items-center">
          <span
            className="font-garamond italic text-white/[0.06] leading-[0.95] select-none pointer-events-none"
            style={{ fontSize: "clamp(5rem, 10vw, 10rem)" }}
          >
            Rooted
            <br />
            in Faith,
            <br />
            Serving All
          </span>
          {/* Badge */}
          <span className="absolute bottom-6 left-6 md:left-16 lg:left-20 font-mono-dm text-[0.6rem] tracking-[0.2em] uppercase text-white bg-red px-5 py-2.5 rounded-sm">
            Our Story Since 1989
          </span>
        </div>

        {/* Right - blockquote & story */}
        <div className="bg-navy-deep px-8 py-16 md:px-16 lg:px-20 lg:py-20 flex flex-col justify-center">
          <blockquote className="font-garamond italic text-white text-[1.4rem] md:text-[1.65rem] leading-[1.55] border-l-[3px] border-red pl-7 mb-10 max-w-[48ch]">
            &ldquo;We believe every human life carries immeasurable worth — and
            that belief drives everything we do.&rdquo;
          </blockquote>

          <p className="text-[0.95rem] font-light leading-[1.85] text-white/55 max-w-[52ch] mb-5">
            Founded in 1989, Aenon Ministries and Trust began with a simple
            conviction: that every community, no matter how remote, deserves
            access to education, healthcare, and the opportunity to thrive. What
            started as a small outreach in Hyderabad has grown into an effort
            touching thousands of lives each year.
          </p>
          <p className="text-[0.95rem] font-light leading-[1.85] text-white/55 max-w-[52ch] mb-10">
            For more than three decades, we have walked alongside the
            communities we serve — listening, learning, and working together
            toward lasting change. Our story is their story.
          </p>

          <div>
            <Link
              href="/about"
              className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-transparent text-white/80 border border-white/25 hover:border-white hover:text-white hover:-translate-y-0.5 transition-all no-underline"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. NEWS / STORIES SECTION - "From the Field"                 */}
      {/* ============================================================ */}
      <section className="bg-off px-6 py-16 md:px-12 lg:px-20 lg:py-22">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 max-w-[1400px] mx-auto">
          <div>
            <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-red">
              From the Field
            </span>
            <h2
              className="font-garamond font-normal leading-tight text-navy"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Stories of <em>transformation</em>
            </h2>
          </div>
          <div>
            <Link
              href="/stories"
              className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-transparent text-red border border-red hover:bg-red hover:text-white hover:-translate-y-0.5 transition-all no-underline"
            >
              View All Stories
            </Link>
          </div>
        </div>

        {/* Story cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {storyCards.map((card) => (
            <Link
              key={card.slug}
              href={`/stories/${card.slug}`}
              className="group block bg-white rounded-sm overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 no-underline"
            >
              {/* Image placeholder */}
              <div className="bg-light h-52 flex flex-col items-center justify-center gap-3">
                {card.icon}
                <span className="font-mono-dm text-[0.55rem] tracking-[0.15em] uppercase text-muted/60">
                  {card.placeholder}
                </span>
              </div>

              {/* Body */}
              <div className="p-7">
                <span className="font-mono-dm text-[0.6rem] tracking-[0.2em] uppercase text-red mb-2 block">
                  {card.category}
                </span>
                <h3 className="font-garamond text-[1.25rem] font-normal text-navy leading-tight mb-3 group-hover:text-red transition-colors">
                  {card.title}
                </h3>
                <p className="text-[0.88rem] font-light leading-[1.75] text-muted mb-4">
                  {card.excerpt}
                </p>
                <span className="font-mono-dm text-[0.6rem] tracking-[0.18em] uppercase text-red group-hover:tracking-[0.25em] transition-all">
                  Read Story &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. GET INVOLVED SECTION                                      */}
      {/* ============================================================ */}
      <section className="bg-white px-6 py-16 md:px-12 lg:px-20 lg:py-22">
        {/* Header - centered */}
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center justify-center gap-3 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-red after:content-[''] after:w-[22px] after:h-[2px] after:bg-red">
            Get Involved
          </span>
          <h2
            className="font-garamond font-normal leading-tight text-navy mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Join the work of <em>restoration</em>
          </h2>
          <p className="text-[0.98rem] font-light leading-[1.85] text-muted">
            There are many ways to be part of what God is doing through Aenon
            Ministries. Whether you give, go, or partner — your involvement
            changes lives.
          </p>
        </div>

        {/* Involve cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {involveCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-border rounded-sm text-center p-10 relative border-t-[3px] border-t-red"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-red-pale flex items-center justify-center mx-auto mb-6 text-red">
                {card.icon}
              </div>

              <h3 className="font-garamond text-[1.4rem] font-normal text-navy mb-4">
                {card.title}
              </h3>

              <p className="text-[0.88rem] font-light leading-[1.75] text-muted mb-8">
                {card.description}
              </p>

              <Link href={card.href} className={`${card.buttonClass} no-underline`}>
                {card.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
