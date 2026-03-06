import { PinIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <>
      {/* ───── Page Hero ───── */}
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-subtle" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Get In Touch
          </p>
          <h1 className="font-garamond text-[clamp(2.4rem,5vw,4rem)] font-normal leading-tight text-white max-w-3xl mb-6">
            We would love to <em>hear from you.</em>
          </h1>
          <p className="font-mulish text-[1rem] font-light leading-relaxed text-white/50 max-w-xl">
            Whether you have a question about our programmes, want to partner
            with us, or simply want to learn more &mdash; we are here and happy
            to connect.
          </p>
        </div>
      </section>

      {/* ───── Contact Section ───── */}
      <section className="py-22 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left: Form */}
          <div>
            <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
              <span className="block w-8 h-[2px] bg-red" />
              Send a Message
            </p>
            <h2 className="font-garamond text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight mb-10">
              Let&apos;s <em>connect</em>
            </h2>
            <ContactForm />
          </div>

          {/* Right: Office info */}
          <div className="flex flex-col gap-0">
            {/* Address */}
            <div className="flex gap-5 py-7 border-b border-border">
              <div className="w-11 h-11 rounded-full bg-red-pale flex items-center justify-center shrink-0 mt-1">
                <PinIcon className="w-[18px] h-[18px] text-red" />
              </div>
              <div>
                <p className="font-mono-dm text-[0.6rem] tracking-[0.18em] uppercase text-red mb-2">
                  Office Address
                </p>
                <p className="font-mulish text-[0.9rem] font-light leading-relaxed text-navy">
                  123 Service Lane, Nungambakkam
                  <br />
                  Chennai, Tamil Nadu 600 034
                  <br />
                  India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 py-7 border-b border-border">
              <div className="w-11 h-11 rounded-full bg-red-pale flex items-center justify-center shrink-0 mt-1">
                <MailIcon className="w-[18px] h-[18px] text-red" />
              </div>
              <div>
                <p className="font-mono-dm text-[0.6rem] tracking-[0.18em] uppercase text-red mb-2">
                  Email
                </p>
                <p className="font-mulish text-[0.9rem] font-light leading-relaxed text-navy">
                  info@aenonministries.org
                  <br />
                  donations@aenonministries.org
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 py-7 border-b border-border">
              <div className="w-11 h-11 rounded-full bg-red-pale flex items-center justify-center shrink-0 mt-1">
                <PhoneIcon className="w-[18px] h-[18px] text-red" />
              </div>
              <div>
                <p className="font-mono-dm text-[0.6rem] tracking-[0.18em] uppercase text-red mb-2">
                  Phone
                </p>
                <p className="font-mulish text-[0.9rem] font-light leading-relaxed text-navy">
                  +91 44 0000 0000
                  <br />
                  <span className="text-muted text-[0.82rem]">
                    Mon&ndash;Sat, 9am&ndash;5pm IST
                  </span>
                </p>
              </div>
            </div>

            {/* Registration details box */}
            <div className="mt-8 bg-off border-l-[3px] border-red p-8">
              <p className="font-mono-dm text-[0.6rem] tracking-[0.18em] uppercase text-red mb-3">
                Registration Details
              </p>
              <p className="font-mulish text-[0.85rem] font-light leading-relaxed text-muted">
                Registered under the Societies Registration Act
                <br />
                FCRA: 076050123
                <br />
                80G tax exemption available for Indian donors
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
