import Link from "next/link";
import { stories } from "@/data/stories";
import { IconByName } from "@/components/icons";
import { PinIcon } from "@/components/icons";

export const metadata = {
  title: "Stories | Aenon Ministries and Trust",
  description:
    "Real stories from the communities we serve — of resilience, courage, and the quiet, steady work of restoration.",
};

export default function StoriesPage() {
  const featured = stories[0];
  const allStories = stories;

  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="mt-[70px] bg-navy-deep relative">
        <div className="absolute inset-0 grid-pattern-subtle" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:pt-24 lg:pb-[4.5rem]">
          <span className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-white/35 block mb-4">
            From the Field
          </span>
          <h1
            className="font-garamond text-white m-0 leading-[1.1]"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            Stories of <em>transformation</em>
          </h1>
          <p className="text-white/60 text-[1.05rem] leading-relaxed mt-5 max-w-[620px] m-0 font-light">
            Real stories from the communities we serve — of resilience, courage,
            and the quiet, steady work of restoration.
          </p>
        </div>
      </section>

      {/* ── Featured Story ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <Link
          href={`/stories/${featured.slug}`}
          className="no-underline block group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border bg-white rounded-sm overflow-hidden transition-shadow duration-300 group-hover:shadow-lg">
            {/* Left icon area */}
            <div className="bg-navy-mid min-h-[250px] md:min-h-[300px] flex items-center justify-center">
              <IconByName
                name={featured.icon}
                className="w-28 h-28 text-white/[0.18]"
              />
            </div>

            {/* Right content */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="block w-5 h-[2px] bg-red" />
                <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.15em] text-red">
                  Featured Story
                </span>
              </div>
              <h2 className="font-garamond text-[1.6rem] md:text-[2rem] text-navy leading-snug m-0">
                {featured.title}
              </h2>
              <p className="text-muted text-[0.9rem] leading-relaxed mt-4 mb-6 font-light">
                {featured.excerpt}
              </p>
              <span className="font-mono-dm text-[0.65rem] uppercase tracking-[0.1em] text-navy border-b border-navy pb-[2px] self-start transition-colors duration-200 group-hover:text-red group-hover:border-red">
                Read Story &rarr;
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Stories Grid ── */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allStories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="no-underline block group"
            >
              <article className="bg-white border border-border rounded-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                {/* Icon area */}
                <div className="h-[200px] bg-light flex items-center justify-center border-b-[3px] border-red">
                  <IconByName
                    name={story.icon}
                    className="w-16 h-16 text-muted opacity-30"
                  />
                </div>

                {/* Card body */}
                <div className="p-6 lg:p-7">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.08em] text-red bg-red-pale px-2 py-1 rounded-sm">
                      {story.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted">
                      <PinIcon className="w-3 h-3" />
                      <span className="font-mono-dm text-[0.55rem] uppercase tracking-[0.05em]">
                        {story.location}
                      </span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-garamond text-[1.35rem] text-navy leading-snug m-0 mb-2">
                    {story.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[0.83rem] font-light text-muted leading-relaxed m-0 mb-5">
                    {story.excerpt}
                  </p>

                  {/* Read link */}
                  <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.1em] text-navy border-b border-navy pb-[2px] transition-colors duration-200 group-hover:text-red group-hover:border-red">
                    Read Story &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Share Your Story ── */}
      <section className="bg-off border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 text-center">
          <span className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-muted block mb-4">
            Your Story Matters
          </span>
          <h2
            className="font-garamond text-navy leading-[1.15] m-0"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Have a story to share?
          </h2>
          <p className="text-muted text-[0.95rem] leading-relaxed mt-4 mb-8 max-w-[520px] mx-auto font-light">
            If our programs have touched your life or the life of someone you
            know, we would love to hear from you. Every story inspires others and
            helps us grow.
          </p>
          <Link
            href="/contact"
            className="inline-block font-mono-dm text-[0.65rem] uppercase tracking-[0.1em] text-white bg-red px-8 py-3 rounded-sm transition-colors duration-200 hover:bg-red-light no-underline"
          >
            Contact Us to Share Your Story
          </Link>
        </div>
      </section>
    </div>
  );
}
