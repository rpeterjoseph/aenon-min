import { HeartIcon, UsersIcon, SunIcon, LeafIcon } from "@/components/icons";

const values = [
  {
    icon: HeartIcon,
    title: "Compassion",
    description:
      "We serve as neighbours walking alongside those in need \u2014 not from a distance, but with presence, patience, and genuine care for each person\u2019s story.",
  },
  {
    icon: UsersIcon,
    title: "Dignity",
    description:
      "Every individual we serve is treated with full respect and worth \u2014 regardless of caste, creed, or circumstance. Dignity is non-negotiable.",
  },
  {
    icon: SunIcon,
    title: "Justice",
    description:
      "We address root causes \u2014 advocating for access to education, healthcare, and opportunity so that communities can stand on their own.",
  },
  {
    icon: LeafIcon,
    title: "Hope",
    description:
      "We believe transformation is possible \u2014 in individuals, families, and entire villages. Every programme we run is rooted in this conviction.",
  },
];

const team = [
  { name: "Rev. Rajan Kumar", role: "Founder & Director", initials: "RK" },
  { name: "Priya Selvam", role: "Programme Director", initials: "PS" },
  { name: "Anand Joseph", role: "Field Operations Head", initials: "AJ" },
  { name: "Deepa Moses", role: "Community Relations", initials: "DM" },
];

export default function AboutPage() {
  return (
    <>
      {/* ───── Page Hero ───── */}
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-subtle" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Who We Are
          </p>
          <h1 className="font-garamond text-[clamp(2.4rem,5vw,4rem)] font-normal leading-tight text-white max-w-3xl mb-6">
            Rooted in <em>faith,</em> committed to all.
          </h1>
          <p className="font-mulish text-[1rem] font-light leading-relaxed text-white/50 max-w-xl">
            Aenon Ministries and Trust is a registered non-profit organisation
            serving the most vulnerable communities from Hyderabad, India since
            1989. Through education, healthcare, and community development, we
            walk alongside those in need.
          </p>
        </div>
      </section>

      {/* ───── Our Story ───── */}
      <section className="py-22 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
              <span className="block w-8 h-[2px] bg-red" />
              Our Story
            </p>
            <h2 className="font-garamond text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight mb-8">
              From one village to <em>thousands</em>
            </h2>
            <p className="font-mulish text-[0.95rem] font-light leading-relaxed text-muted mb-6">
              Aenon Ministries was founded in 1989 in Hyderabad, India. What
              began as a single community health clinic and a handful of
              volunteers quickly grew into a movement of compassion, dignity,
              and service that now reaches thousands of families across India.
            </p>
            <p className="font-mulish text-[0.95rem] font-light leading-relaxed text-muted">
              Over three decades, we have expanded into education, women and
              children&apos;s welfare, disaster relief, and village outreach
              programmes. Our approach has always been holistic &mdash; believing
              that true transformation happens when physical, social, and
              spiritual needs are addressed together.
            </p>
          </div>

          {/* Right column: Mission & Vision box */}
          <div className="bg-navy-deep border-l-[3px] border-red p-12">
            <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red/60 mb-4">
              Our Mission
            </p>
            <p className="font-garamond text-[1.2rem] italic text-white leading-relaxed mb-8">
              To serve the vulnerable and marginalised of India with
              holistic care &mdash; addressing physical, social, and spiritual
              needs together.
            </p>
            <div className="border-t border-white/10 my-8" />
            <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red/60 mb-4">
              Our Vision
            </p>
            <p className="font-garamond text-[1.2rem] italic text-white leading-relaxed">
              Communities thriving in dignity, health, and wholeness.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Values ───── */}
      <section className="py-22 px-6 md:px-20 bg-off">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Our Values
          </p>
          <h2 className="font-garamond text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight mb-14">
            What we <em>believe</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-border bg-white p-[2.8rem]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-red-pale flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-red" />
                  </div>
                  <h3 className="font-garamond text-[1.45rem] font-normal">
                    {value.title}
                  </h3>
                </div>
                <p className="font-mulish text-[0.9rem] font-light leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Leadership ───── */}
      <section className="py-22 px-6 md:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Leadership
          </p>
          <h2 className="font-garamond text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight mb-14">
            The team behind the <em>work</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.initials} className="border border-border">
                {/* Avatar area */}
                <div className="bg-navy-mid h-[150px] flex items-center justify-center border-b-[3px] border-red">
                  <span className="font-garamond text-[2.5rem] italic text-white/30">
                    {member.initials}
                  </span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-garamond text-[1.15rem] font-normal mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono-dm text-[0.6rem] tracking-[0.15em] uppercase text-red">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
