import Link from "next/link";
import { programs } from "@/data/programs";
import { IconByName } from "@/components/icons";

export default function WorkPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative">
        <div className="absolute inset-0 grid-pattern-subtle pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Programs &amp; Projects
          </p>
          <h1
            className="font-garamond text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            Our work, <em>on the ground.</em>
          </h1>
          <p className="text-white/55 text-[1.05rem] leading-relaxed max-w-[640px] font-light">
            For over 35 years we have been present in the hardest-to-reach
            places &mdash; bringing holistic support through focused,
            sustainable programs.
          </p>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="bg-white py-22 px-6 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/work/${program.slug}`}
                className="border border-border block no-underline transition-colors duration-200 hover:bg-off group"
              >
                <div className="grid grid-cols-[48px_1fr] p-6 md:p-8">
                  {/* Number column */}
                  <span className="font-mono-dm text-[0.72rem] text-red pt-1">
                    {program.number}
                  </span>

                  {/* Content column */}
                  <div className="flex flex-col gap-3">
                    {/* Header row: icon + title */}
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-red-pale shrink-0">
                        <IconByName
                          name={program.icon}
                          className="w-[14px] h-[14px] text-red"
                        />
                      </span>
                      <h3 className="font-garamond text-[1.35rem] text-navy m-0 leading-tight">
                        {program.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted text-[0.88rem] leading-relaxed m-0">
                      {program.description}
                    </p>

                    {/* Location tag */}
                    <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.12em] text-red border border-red/20 rounded-sm px-3 py-1 self-start">
                      {program.location}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
