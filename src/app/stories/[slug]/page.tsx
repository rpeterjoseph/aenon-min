import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoryBySlug, getAllStorySlugs } from "@/data/stories";
import { IconByName } from "@/components/icons";
import { PinIcon } from "@/components/icons";

export function generateStaticParams() {
  return getAllStorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story Not Found" };
  return {
    title: `${story.title} | Aenon Ministries and Trust`,
    description: story.excerpt,
  };
}

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  // Build interleaved body content: paragraphs with image placeholder and quotes
  const bodyElements: React.ReactNode[] = [];
  let quoteIndex = 0;

  story.body.forEach((paragraph, i) => {
    // First paragraph
    bodyElements.push(
      <p
        key={`p-${i}`}
        className="text-base font-light leading-[1.9] text-muted mb-5"
      >
        {paragraph}
      </p>
    );

    // After first paragraph: insert image placeholder + first quote
    if (i === 0) {
      bodyElements.push(
        <div
          key="img-placeholder"
          className="w-full h-[300px] bg-light flex flex-col items-center justify-center border-b-[3px] border-red mb-10 rounded-sm"
        >
          <IconByName
            name={story.icon}
            className="w-14 h-14 text-muted opacity-30 mb-3"
          />
          <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.1em] text-muted/60">
            Photo placeholder — Replace with your own image
          </span>
        </div>
      );

      if (story.quotes[quoteIndex]) {
        const quote = story.quotes[quoteIndex];
        bodyElements.push(
          <blockquote
            key={`q-${quoteIndex}`}
            className="font-garamond text-[1.65rem] italic text-navy leading-snug pl-5 border-l-[3px] border-red my-10"
          >
            <p className="m-0">{quote.text}</p>
            {quote.attribution && (
              <footer className="font-mono-dm text-[0.6rem] uppercase tracking-[0.1em] text-muted mt-3 not-italic">
                {quote.attribution}
              </footer>
            )}
          </blockquote>
        );
        quoteIndex++;
      }
    }

    // After second paragraph: insert second quote if it exists
    if (i === 1 && story.quotes[quoteIndex]) {
      const quote = story.quotes[quoteIndex];
      bodyElements.push(
        <blockquote
          key={`q-${quoteIndex}`}
          className="font-garamond text-[1.65rem] italic text-navy leading-snug pl-5 border-l-[3px] border-red my-10"
        >
          <p className="m-0">{quote.text}</p>
          {quote.attribution && (
            <footer className="font-mono-dm text-[0.6rem] uppercase tracking-[0.1em] text-muted mt-3 not-italic">
              {quote.attribution}
            </footer>
          )}
        </blockquote>
      );
      quoteIndex++;
    }
  });

  return (
    <div>
      {/* ── Story Detail Hero ── */}
      <section className="mt-[70px] bg-navy-deep relative">
        <div className="absolute inset-0 grid-pattern-subtle" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:pt-24 lg:pb-20">
          {/* Back link */}
          <Link
            href="/stories"
            className="font-mono-dm text-[0.6rem] uppercase tracking-[0.12em] text-white/60 no-underline transition-colors duration-200 hover:text-white inline-flex items-center gap-1 mb-8"
          >
            &larr; Back to Stories
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.08em] text-red bg-red-pale px-2 py-1 rounded-sm">
              {story.category}
            </span>
            <span className="flex items-center gap-1 text-white/45">
              <PinIcon className="w-3 h-3" />
              <span className="font-mono-dm text-[0.55rem] uppercase tracking-[0.05em]">
                {story.location}
              </span>
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-garamond text-white m-0 leading-[1.1]"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
            dangerouslySetInnerHTML={{ __html: story.titleHtml }}
          />

          {/* Subtitle */}
          <p className="text-white/60 text-[1.05rem] leading-relaxed mt-5 max-w-[660px] m-0 font-light">
            {story.subtitle}
          </p>
        </div>
      </section>

      {/* ── Story Body ── */}
      <section className="max-w-[72ch] mx-auto px-6 md:px-10 py-12 md:py-16 lg:py-20">
        {bodyElements}

        {/* ── Actions ── */}
        <div className="border-t border-border pt-8 mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/donate"
            className="inline-block font-mono-dm text-[0.65rem] uppercase tracking-[0.1em] text-white bg-red px-8 py-3 rounded-sm transition-colors duration-200 hover:bg-red-light no-underline"
          >
            {story.ctaLabel}
          </Link>
          <Link
            href="/stories"
            className="inline-block font-mono-dm text-[0.65rem] uppercase tracking-[0.1em] text-red border border-red px-8 py-3 rounded-sm transition-colors duration-200 hover:bg-red hover:text-white no-underline"
          >
            Read More Stories
          </Link>
        </div>
      </section>
    </div>
  );
}
