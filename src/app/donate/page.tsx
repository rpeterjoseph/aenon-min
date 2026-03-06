import { CheckIcon } from "@/components/icons";
import { DonateForm } from "./donate-form";

const trustPoints = [
  "100% of donations reach the field",
  "Registered NGO \u2014 full financial transparency",
  "80G tax exemption for Indian donors",
  "FCRA approved for international giving",
  "Annual reports published publicly",
];

export default function DonatePage() {
  return (
    <>
      {/* ───── Page Hero ───── */}
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-subtle" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Support Our Work
          </p>
          <h1 className="font-garamond text-[clamp(2.4rem,5vw,4rem)] font-normal leading-tight text-white max-w-3xl mb-6">
            Your gift changes <em>everything.</em>
          </h1>
          <p className="font-mulish text-[1rem] font-light leading-relaxed text-white/50 max-w-xl">
            Every rupee goes directly to programmes that transform lives &mdash;
            from classrooms to clinics, from disaster relief to daily meals. Your
            generosity makes it all possible.
          </p>
        </div>
      </section>

      {/* ───── Donate Section ───── */}
      <section className="py-22 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-20">
          {/* Left: Donation form */}
          <DonateForm />

          {/* Right: Trust info */}
          <div className="flex flex-col gap-8">
            {/* Trust box */}
            <div className="bg-off border-l-[3px] border-red p-8">
              <p className="font-mono-dm text-[0.6rem] tracking-[0.18em] uppercase text-red mb-6">
                Why Give to Aenon Ministries
              </p>
              <div className="flex flex-col gap-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckIcon className="w-4 h-4 text-red shrink-0 mt-0.5" />
                    <p className="font-mulish text-[0.88rem] font-light leading-relaxed text-navy">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact quote box */}
            <div className="bg-navy-deep border-l-[3px] border-red p-8">
              <p className="font-garamond text-[1.15rem] italic text-white leading-relaxed mb-4">
                &#8377;500 a month provides school supplies for an entire year
                for one child in rural Tamil Nadu.
              </p>
              <p className="font-mono-dm text-[0.55rem] tracking-[0.18em] uppercase text-white/30">
                Program Impact Guide
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
