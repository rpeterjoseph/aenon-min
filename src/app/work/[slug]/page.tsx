import Link from "next/link";
import { notFound } from "next/navigation";
import { programs, getProgramBySlug, getAllProgramSlugs } from "@/data/programs";
import { IconByName } from "@/components/icons";

export function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <div>
      {/* ── Program Detail Hero ── */}
      <section className="mt-[70px] bg-navy-deep py-22 px-6 md:px-20 relative">
        <div className="absolute inset-0 grid-pattern-subtle pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side */}
          <div className="flex flex-col gap-5">
            {/* Back link */}
            <Link
              href="/work"
              className="font-mono-dm text-[0.65rem] uppercase tracking-[0.12em] text-white/60 hover:text-white transition-colors duration-200 no-underline self-start"
            >
              &larr; Back to Our Work
            </Link>

            {/* Program number label */}
            <p className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-red flex items-center gap-3 m-0">
              <span className="block w-8 h-[2px] bg-red" />
              Program {program.number}
            </p>

            {/* Title */}
            <h1
              className="font-garamond text-white leading-[1.1] m-0"
              style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.5rem)" }}
              dangerouslySetInnerHTML={{ __html: program.titleHtml }}
            />

            {/* Tagline */}
            <p className="text-white/60 text-[1.05rem] leading-relaxed m-0 font-light max-w-[520px]">
              {program.tagline}
            </p>

            {/* Location tag */}
            <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.12em] text-white/45 border border-white/15 rounded-sm px-4 py-1.5 self-start">
              {program.location}
            </span>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center justify-center bg-white/[0.04] border border-white/[0.08] rounded-sm min-h-[240px]">
            <IconByName
              name={program.icon}
              className="w-[72px] h-[72px] text-white/[0.14]"
            />
          </div>
        </div>
      </section>

      {/* ── Program Body ── */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
          {/* Main content */}
          <div>
            {/* Body paragraphs */}
            {program.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-[0.98rem] font-light leading-[1.85] text-muted mb-5"
              >
                {paragraph}
              </p>
            ))}

            {/* Sections */}
            {program.sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-garamond text-[1.75rem] text-navy mt-8 mb-3">
                  {section.title}
                </h3>
                <p className="text-[0.98rem] font-light leading-[1.85] text-muted mb-5">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Support button */}
            <Link
              href="/donate"
              className="inline-block mt-8 bg-red text-white font-mono-dm text-[0.7rem] uppercase tracking-[0.12em] px-8 py-3.5 rounded-sm hover:bg-red-light transition-colors duration-200 no-underline"
            >
              Support This Program
            </Link>
          </div>

          {/* Sidebar */}
          <div className="self-start">
            <div className="bg-off border-l-[3px] border-red p-8 rounded-sm">
              <h4 className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-navy mb-6 m-0">
                Program Impact
              </h4>
              <div className="flex flex-col">
                {program.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`py-4 ${i < program.stats.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <span className="block font-mono-dm text-[1.7rem] text-red leading-tight">
                      {stat.value}
                    </span>
                    <span className="block font-mono-dm text-[0.6rem] uppercase tracking-[0.12em] text-muted mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
