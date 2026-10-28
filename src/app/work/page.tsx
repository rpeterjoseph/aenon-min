import {
  EduIcon,
  HealthIcon,
  UsersIcon,
  GlobeIcon,
  AlertIcon,
  HomeIcon,
} from "@/components/icons";

const programs = [
  {
    number: "01",
    icon: <EduIcon className="w-[14px] h-[14px]" />,
    title: "Education & Schools",
    location: "Tamil Nadu · Karnataka",
    description:
      "Scholarships, tuition centres, and adult literacy programs that open doors for children and adults across India.",
  },
  {
    number: "02",
    icon: <HealthIcon className="w-[14px] h-[14px]" />,
    title: "Healthcare & Clinics",
    location: "Andhra Pradesh · Tamil Nadu",
    description:
      "Mobile medical camps, maternal health services, and community clinics reaching underserved populations.",
  },
  {
    number: "03",
    icon: <UsersIcon className="w-[14px] h-[14px]" />,
    title: "Women & Children",
    location: "Multi-state",
    description:
      "Vocational training, self-help groups, and child nutrition programs that strengthen families from the inside out.",
  },
  {
    number: "04",
    icon: <GlobeIcon className="w-[14px] h-[14px]" />,
    title: "Rural Village Outreach",
    location: "120+ Villages",
    description:
      "Clean water infrastructure, sustainable agriculture training, and holistic village development.",
  },
  {
    number: "05",
    icon: <AlertIcon className="w-[14px] h-[14px]" />,
    title: "Disaster & Crisis Relief",
    location: "Emergency Response",
    description:
      "Rapid emergency response, food and supply distribution, and long-term recovery support for affected communities.",
  },
  {
    number: "06",
    icon: <HomeIcon className="w-[14px] h-[14px]" />,
    title: "Church & Pastor Support",
    location: "Faith Communities",
    description:
      "Training seminars, resource provision, and fellowship networks that equip ministers serving under-resourced congregations.",
  },
];

export default function WorkPage() {
  return (
    <div>
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            Programs &amp; Projects
          </p>
          <h1
            className="font-garamond text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            Faith, <em>put to work.</em>
          </h1>
          <p className="text-white/55 text-[1.05rem] leading-relaxed max-w-[640px] font-light">
            For over 35 years we have carried Christ&rsquo;s compassion into
            the hardest-to-reach places — through focused, sustainable
            programs that meet physical and spiritual need together.
          </p>
        </div>
      </section>

      <section className="bg-white py-22 px-6 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.number}
                className="border border-border block transition-colors duration-200 hover:bg-off"
              >
                <div className="grid grid-cols-[48px_1fr] p-6 md:p-8">
                  <span className="font-mono-dm text-[0.72rem] text-red pt-1">
                    {program.number}
                  </span>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-red-pale shrink-0">
                        {program.icon}
                      </span>
                      <h3 className="font-garamond text-[1.35rem] text-navy m-0 leading-tight">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-[0.9rem] font-light leading-[1.7] text-muted m-0">
                      {program.description}
                    </p>
                    <span className="font-mono-dm text-[0.6rem] uppercase tracking-[0.1em] text-muted/70 border border-border rounded-sm px-3 py-1 self-start">
                      {program.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
