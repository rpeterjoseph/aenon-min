import { EduIcon, HomeIcon, HealthIcon } from "@/components/icons";

const stories = [
  {
    icon: <EduIcon className="w-10 h-10 text-muted" />,
    category: "Education",
    title: "First in Her Family to Complete Secondary School",
    excerpt:
      "Meena, 16, became the first in her family to finish Class 10 with support from our scholarship program.",
  },
  {
    icon: <HomeIcon className="w-10 h-10 text-muted" />,
    category: "Disaster Relief",
    title: "200 Families Rebuild After the 2023 Floods",
    excerpt:
      "After the 2023 floods, our team delivered food, clean water, and reconstruction support within 48 hours.",
  },
  {
    icon: <HealthIcon className="w-10 h-10 text-muted" />,
    category: "Healthcare",
    title: "Mobile Clinic Reaches a Village for the First Time",
    excerpt:
      "A village 40 km from the nearest town received its first medical camp, serving 180 patients in one day.",
  },
];

export default function StoriesPage() {
  return (
    <div>
      <section className="mt-[70px] bg-navy-deep py-24 px-6 md:px-20 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto">
          <p className="font-mono-dm text-[0.65rem] uppercase tracking-[0.15em] text-red flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-red" />
            From The Field
          </p>
          <h1
            className="font-garamond text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            Stories of <em>transformation.</em>
          </h1>
          <p className="text-white/55 text-[1.05rem] leading-relaxed max-w-[640px] font-light">
            Every statistic is a person. These are a few of the lives
            Christ&rsquo;s love has touched through the work of Aenon
            Ministries.
          </p>
        </div>
      </section>

      <section className="bg-off px-6 py-20 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {stories.map((story) => (
            <div
              key={story.title}
              className="bg-white rounded-sm overflow-hidden border border-border"
            >
              <div className="bg-light h-52 flex flex-col items-center justify-center gap-3">
                {story.icon}
                <span className="font-mono-dm text-[0.55rem] tracking-[0.15em] uppercase text-muted/60">
                  Story image
                </span>
              </div>

              <div className="p-7">
                <span className="font-mono-dm text-[0.6rem] tracking-[0.2em] uppercase text-red mb-2 block">
                  {story.category}
                </span>
                <h3 className="font-garamond text-[1.25rem] font-normal text-navy leading-tight mb-3">
                  {story.title}
                </h3>
                <p className="text-[0.88rem] font-light leading-[1.75] text-muted">
                  {story.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
