import { DonateForm } from "./donate-form";

export default function DonatePage() {
  return (
    <div>
      <section className="mt-[70px] bg-navy-deep py-20 px-6 md:px-20 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Give
          </p>
          <h1
            className="font-garamond text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
          >
            &ldquo;Freely ye have received, <em>freely give.&rdquo;</em>
          </h1>
          <p className="text-white/55 text-[1.05rem] leading-relaxed max-w-[640px] font-light">
            Your gift carries the love of Christ directly to families across
            India — funding education, healthcare, and relief given freely,
            in His name.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-20">
        <div className="max-w-[680px] mx-auto">
          <DonateForm />
        </div>
      </section>
    </div>
  );
}
