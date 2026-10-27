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
      "Mobile medical camps, maternal health services, and community clinics reaching the forgotten and underserved.",
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
  },
  {
    number: "06",
    icon: <HomeIcon className="w-7 h-7" />,
    name: (
      <>
        Church &amp; <em>Pastor Support</em>
      </>
    ),
    description:
      "Training, resources, and fellowship for local pastors and ministers shepherding under-resourced congregations.",
  },
];

const involveCards = [
  {
    icon: <DonateIcon className="w-8 h-8" />,
    title: "Give",
    description:
      "Your financial gift directly funds education, healthcare, and relief carried out in Christ's name for families across India.",
    buttonLabel: "Give Today",
    buttonClass:
      "inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-red text-white hover:bg-red-light hover:-translate-y-0.5 transition-all",
    href: "/donate",
  },
  {
    icon: <VolunteerIcon className="w-8 h-8" />,
    title: "Serve",
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
      "Churches, organisations, and businesses can partner with us for sustained community impact, rooted in shared faith and purpose.",
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
      {/* 1. HERO                                                      */}
      {/* ============================================================ */}
      <section className="relative bg-navy-deep min-h-[calc(100vh-70px)] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80&fit=crop&crop=center"
          alt="Community outreach in Hyderabad, India"
          fill
          priority
          className="object-cover opacity-45 animate-fade-in"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        {/* Slide-indicator rail */}
        <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-[60px] flex-col items-center justify-center gap-5 bg-red/90 z-10">
          <span className="w-[7px] h-[7px] rounded-full bg-white" />
          <span className="w-[6px] h-[6px] rounded-full border border-white/50" />
          <span className="w-[6px] h-[6px] rounded-full border border-white/50" />
          <span className="w-[6px] h-[6px] rounded-full border border-white/50" />
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-70px)] px-6 md:px-16 md:pl-28 lg:pl-32 max-w-[900px]">
          <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-8 animate-fade-up before:content-[''] before:w-[22px] before:h-[2px] before:bg-red">
            Hyderabad, India &middot; Est. 1989
          </span>

          <h1
            className="font-garamond font-normal text-white leading-[1.05] mb-8 animate-fade-up-delay-1"
            style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}
          >
            We share the
            <br />
            <em>Love of Christ.</em>
          </h1>

          <p className="text-[0.98rem] font-light leading-[1.85] text-white/60 max-w-[52ch] mb-10 animate-fade-up-delay-2">
            Aenon Ministries and Trust is a Christian organization carrying
            the compassion of Jesus to the people of India — through
            education, healthcare, and relief, freely given in His name.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Link
              href="/donate"
              className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-red text-white hover:bg-red-light hover:-translate-y-0.5 transition-all no-underline"
            >
              Give Today
            </Link>
            <Link
              href="/work"
              className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-transparent text-white/80 border border-white/25 hover:border-white hover:text-white hover:-translate-y-0.5 transition-all no-underline"
            >
              Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. OUR PURPOSE — full-bleed scripture quote                 */}
      {/* ============================================================ */}
      <section className="relative bg-navy-deep py-28 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80&fit=crop&crop=faces"
          alt="Children at a village school"
          fill
          className="object-cover opacity-20 grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep" />

        <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
          <span className="block w-8 h-[1px] bg-red/50 mb-6" />
          <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red mb-8">
            Our Purpose
          </span>
          <blockquote className="font-garamond italic text-white leading-[1.5] m-0" style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)" }}>
            &ldquo;For God so loved the world, that he gave his only begotten
            Son, that whosoever believeth in him should not perish, but have
            everlasting life.&rdquo;
          </blockquote>
          <span className="font-mono-dm text-[0.65rem] tracking-[0.2em] uppercase text-red-light mt-8">
            John 3:16
          </span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR STORY                                                 */}
      {/* ============================================================ */}
      <section className="bg-navy px-6 py-20 md:px-16 lg:px-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-red">
                Our Story
              </span>
              <h2
                className="font-garamond font-normal leading-[1.1] text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
              >
                Serving in the <em>name of Jesus</em> since 1989.
              </h2>
            </div>
            <p className="text-[0.95rem] font-light leading-[1.85] text-white/55 max-w-[48ch]">
              What began as one small outreach in Hyderabad has grown into a
              ministry touching thousands of lives each year — not to build
              an institution, but to carry forward the command Christ gave
              us: to love our neighbour as ourselves.
            </p>
          </div>

          <div className="relative w-full aspect-[16/7] min-h-[260px]">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80&fit=crop&crop=faces"
              alt="Aenon Ministries team serving the community"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute bottom-4 right-4 font-mono-dm text-[0.55rem] uppercase tracking-[0.1em] text-white/50 bg-navy-deep/60 px-3 py-1.5 rounded-sm backdrop-blur-sm">
              Replace with your own photo
            </span>
          </div>

          <div className="mt-10">
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
      {/* 4. WHAT WE DO                                                */}
      {/* ============================================================ */}
      <section className="bg-white px-6 py-20 md:px-12 lg:px-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14 max-w-[1400px] mx-auto">
          <div>
            <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-red">
              What We Do
            </span>
            <h2
              className="font-garamond font-normal leading-tight text-navy"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Christ&rsquo;s compassion, <em className="text-red">in action</em>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[0.98rem] font-light leading-[1.85] text-muted max-w-[58ch] mb-6">
              Faith without works is dead. Our programs put the love of
              Christ into practice — from classrooms to clinics, from farms
              to families — serving the whole person and the whole
              community.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 max-w-[1400px] mx-auto">
          {programCards.map((card) => (
            <Link
              key={card.number}
              href="/work"
              className="group relative block border border-border p-8 transition-all duration-300 hover:bg-navy-deep hover:border-navy-deep no-underline -mt-px -ml-px"
            >
              <span className="font-mono-dm text-[0.6rem] tracking-[0.2em] text-muted/50 group-hover:text-white/30 transition-colors">
                {card.number}
              </span>

              <div className="mt-5 mb-4 text-red group-hover:text-red-light transition-colors">
                {card.icon}
              </div>

              <h3 className="font-garamond text-[1.35rem] font-normal text-navy group-hover:text-white mb-3 transition-colors leading-tight">
                {card.name}
              </h3>

              <p className="text-[0.88rem] font-light leading-[1.75] text-muted group-hover:text-white/55 transition-colors">
                {card.description}
              </p>

              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. GET INVOLVED                                              */}
      {/* ============================================================ */}
      <section className="bg-off px-6 py-20 md:px-12 lg:px-20 lg:py-24">
        <div className="text-center max-w-[600px] mx-auto mb-14">
          <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center justify-center gap-3 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-red after:content-[''] after:w-[22px] after:h-[2px] after:bg-red">
            Get Involved
          </span>
          <h2
            className="font-garamond font-normal leading-tight text-navy mb-4"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Join us in <em>loving</em> our neighbour
          </h2>
          <p className="text-[0.98rem] font-light leading-[1.85] text-muted">
            There are many ways to be part of what God is doing through Aenon
            Ministries. Whether you give, go, or partner — your involvement
            changes lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {involveCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-border rounded-sm text-center p-10 relative border-t-[3px] border-t-red"
            >
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
