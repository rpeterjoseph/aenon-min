import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div>
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Get In Touch
          </p>
          <h1
            className="font-garamond text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            We&rsquo;d love to <em>hear from you.</em>
          </h1>
          <p className="text-white/55 text-[1.05rem] leading-relaxed max-w-[640px] font-light">
            Whether you want to give, serve, partner, or simply learn more
            about our work, reach out — we&rsquo;d be glad to talk.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-pale text-red shrink-0">
                <PinIcon className="w-[18px] h-[18px]" />
              </span>
              <div>
                <h4 className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-navy mb-1">
                  Address
                </h4>
                <p className="text-[0.9rem] font-light text-muted leading-relaxed m-0">
                  Hyderabad, India, 500017
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-pale text-red shrink-0">
                <MailIcon className="w-[18px] h-[18px]" />
              </span>
              <div>
                <h4 className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-navy mb-1">
                  Email
                </h4>
                <a
                  href="mailto:info@aenonministries.org"
                  className="text-[0.9rem] font-light text-muted leading-relaxed no-underline hover:text-navy transition-colors"
                >
                  info@aenonministries.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-pale text-red shrink-0">
                <PhoneIcon className="w-[18px] h-[18px]" />
              </span>
              <div>
                <h4 className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-navy mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+914000000000"
                  className="text-[0.9rem] font-light text-muted leading-relaxed no-underline hover:text-navy transition-colors"
                >
                  +91 40 0000 0000
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
