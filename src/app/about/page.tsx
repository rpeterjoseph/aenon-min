import { HeartIcon, UsersIcon, SunIcon, CrossIcon } from "@/components/icons";

const values = [
  {
    icon: HeartIcon,
    title: "Compassion",
    description:
      "We serve as neighbours walking alongside those in need — not from a distance, but with presence, patience, and the love Christ first showed us.",
  },
  {
    icon: UsersIcon,
    title: "Dignity",
    description:
      "Every person we serve bears the image of God and is treated with full respect and worth, regardless of caste, creed, or circumstance.",
  },
  {
    icon: SunIcon,
    title: "Truth",
    description:
      "We address root causes with honesty — advocating for access to education, healthcare, and opportunity so that communities can stand on their own.",
  },
  {
    icon: CrossIcon,
    title: "Hope",
    description:
      "Our hope is not in programs but in Christ. Every effort we make is rooted in the conviction that He is making all things new.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Who We Are
          </p>
          <h1
            className="font-garamond font-normal leading-tight text-white max-w-3xl mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            Showing the <em>love of Jesus</em> to the world.
          </h1>
          <p className="font-mulish text-[1rem] font-light leading-relaxed text-white/50 max-w-xl">
            Aenon Ministries and Trust is a Christian organization serving
            the most vulnerable communities from Hyderabad, India since
            1989. Through education, healthcare, and community development,
            we carry Christ&rsquo;s compassion to those in need.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-6 py-20 md:px-20">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red mb-6 inline-block">
            Our Mission
          </span>
          <p
            className="font-garamond italic text-navy leading-[1.5]"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
          >
            To serve the vulnerable and marginalised of India with holistic
            care — addressing physical, social, and spiritual needs
            together, in the name of Jesus Christ.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-off px-6 py-20 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h2
            className="font-garamond font-normal leading-tight text-navy mb-14 text-center"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            What we <em className="text-red">believe</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-red-pale flex items-center justify-center mx-auto mb-5 text-red">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-garamond text-[1.25rem] text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-[0.88rem] font-light leading-[1.75] text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-navy px-6 py-20 md:px-20">
        <div className="max-w-[800px] mx-auto">
          <span className="font-mono-dm text-[0.6rem] tracking-[0.3em] uppercase text-red flex items-center gap-3 mb-6 before:content-[''] before:w-[22px] before:h-[2px] before:bg-red">
            Our Story
          </span>
          <h2
            className="font-garamond font-normal leading-tight text-white mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            From one village to <em>thousands</em>
          </h2>
          <p className="text-[0.98rem] font-light leading-[1.9] text-white/55 mb-5">
            Aenon Ministries was founded in 1989 in Hyderabad, India, by a
            small group of believers who felt called to carry the love of
            Christ beyond the walls of a church building. What began as a
            single outreach to one village has grown into a ministry
            touching thousands of lives each year.
          </p>
          <p className="text-[0.98rem] font-light leading-[1.9] text-white/55">
            We are not interested in building an institution for its own
            sake. We are interested in obedience — to the command Jesus gave
            us, to love our neighbour as ourselves, and to make that love
            visible in classrooms, clinics, villages, and homes across
            India.
          </p>
        </div>
      </section>
    </>
  );
}
