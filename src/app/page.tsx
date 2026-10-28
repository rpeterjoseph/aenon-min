import Image from "next/image";
import Link from "next/link";

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
          className="object-cover opacity-50 animate-fade-in"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-navy-deep/10" />

        {/* Slide-indicator rail */}
        <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-[60px] flex-col items-center justify-center gap-5 bg-red/90 z-10">
          <span className="w-[7px] h-[7px] rounded-full bg-white" />
          <span className="w-[6px] h-[6px] rounded-full border border-white/50" />
          <span className="w-[6px] h-[6px] rounded-full border border-white/50" />
          <span className="w-[6px] h-[6px] rounded-full border border-white/50" />
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-70px)] px-6 md:px-16 md:pl-28 lg:pl-32">
          <h1
            className="font-garamond font-normal text-white leading-[1.02] animate-fade-up-delay-1"
            style={{ fontSize: "clamp(3.2rem, 7vw, 7rem)" }}
          >
            We Share the
            <br />
            <em>Love of Christ</em>
          </h1>
        </div>

        {/* Floating CTA, bottom right */}
        <Link
          href="/donate"
          className="absolute bottom-10 right-8 md:right-14 z-10 inline-block font-mono-dm text-[0.7rem] tracking-[0.15em] uppercase px-8 py-4 bg-red text-white hover:bg-red-light transition-colors no-underline animate-fade-up-delay-3"
        >
          Give Today
        </Link>

        {/* Scroll cue */}
        <span className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 md:left-[calc(50%+30px)] w-11 h-11 rounded-full border border-white/30 items-center justify-center text-white/60 animate-fade-up-delay-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
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
          <blockquote
            className="font-garamond italic text-white leading-[1.5] m-0"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)" }}
          >
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
      {/* 3. OUR STORY — photo collage, like a "heritage" page         */}
      {/* ============================================================ */}
      <section className="bg-off px-6 py-20 md:px-16 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="font-mono-dm text-[0.65rem] text-red mb-5 block">
              01
            </span>
            <h2
              className="font-garamond font-normal leading-[1.08] text-navy mb-8"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
            >
              Our <em>Story</em>
            </h2>
            <p className="font-garamond italic text-[1.15rem] text-navy/80 leading-relaxed mb-8">
              Rooted in Faith.
              <br />
              Devoted to Compassion.
              <br />
              Sent to Serve.
            </p>
            <p className="text-[0.95rem] font-light leading-[1.85] text-muted">
              Over 35 years ago, a small group of believers in Hyderabad felt
              called to carry Christ&rsquo;s love beyond the walls of a
              church. What began as one outreach to one village has grown
              into a ministry touching thousands of lives each year — not to
              build an institution, but to obey the command Jesus gave us:
              to love our neighbour as ourselves.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-navy text-white hover:bg-navy-mid transition-colors no-underline"
            >
              Read Our Full Story
            </Link>
          </div>

          <div className="relative w-full max-w-[480px] aspect-[4/5] mx-auto lg:mx-0 lg:ml-auto">
            <div className="absolute top-0 left-0 w-[64%] aspect-[4/5] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80&fit=crop&crop=faces"
                alt="Aenon Ministries volunteer"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[56%] aspect-square shadow-lg border-4 border-off">
              <Image
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80&fit=crop&crop=faces"
                alt="Children at a village school"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TESTIMONY — photo with overlapping dark quote card        */}
      {/* ============================================================ */}
      <section className="relative bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[340px] lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&fit=crop&crop=faces"
              alt="Community gathering in Hyderabad"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          <div className="relative flex items-center lg:-ml-24 z-10">
            <div className="bg-navy-deep text-white p-10 md:p-14 w-full lg:max-w-[560px] mx-6 lg:mx-0 -mt-14 lg:mt-0 shadow-xl">
              <span className="block w-10 h-[1px] bg-white/20 mb-8" />
              <p className="font-garamond italic leading-[1.5] mb-8" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>
                &ldquo;We don&rsquo;t go to villages to build our name. We go
                because Christ went first — to the sick, the poor, and the
                forgotten. That is the only reason Aenon exists.&rdquo;
              </p>
              <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.15em] text-white/50">
                Founder, Aenon Ministries and Trust
              </span>

              <div className="flex items-center gap-3 mt-10">
                <button
                  aria-label="Previous"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. OUR WORK — faculty-style dark teaser                      */}
      {/* ============================================================ */}
      <section className="bg-navy px-6 py-20 md:px-16 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono-dm text-[0.6rem] tracking-[0.2em] uppercase text-red/80 mb-5 block">
            Our Work
          </span>
          <h2
            className="font-garamond font-normal leading-[1.08] text-white mb-10"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Education. <em>Healthcare.</em>
            <br />
            Relief. <em>Hope.</em>
          </h2>

          <div className="relative w-full aspect-[16/7] min-h-[260px]">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80&fit=crop&crop=faces"
              alt="Aenon Ministries at work in the community"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="mt-10">
            <Link
              href="/work"
              className="inline-block font-mono-dm text-[0.65rem] tracking-[0.18em] uppercase px-9 py-3.5 bg-transparent text-white/80 border border-white/25 hover:border-white hover:text-white transition-colors no-underline"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. GIVE / SERVE — stacked blocks                             */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Link
          href="/donate"
          className="group bg-red text-white px-8 py-14 md:px-16 md:py-20 flex items-center justify-between no-underline hover:bg-red-light transition-colors"
        >
          <div>
            <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.15em] text-white/70 block mb-3">
              Give
            </span>
            <h3 className="font-garamond text-[1.6rem] md:text-[2rem] font-normal">
              Give Today
            </h3>
          </div>
          <span className="font-garamond text-[1.6rem] group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </Link>
        <Link
          href="/contact"
          className="group bg-navy-deep text-white px-8 py-14 md:px-16 md:py-20 flex items-center justify-between no-underline hover:bg-navy-mid transition-colors"
        >
          <div>
            <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.15em] text-white/50 block mb-3">
              Serve
            </span>
            <h3 className="font-garamond text-[1.6rem] md:text-[2rem] font-normal">
              Volunteer With Us
            </h3>
          </div>
          <span className="font-garamond text-[1.6rem] group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
