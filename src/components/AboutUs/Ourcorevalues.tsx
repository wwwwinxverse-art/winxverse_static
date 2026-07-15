import { HeartPulse, ShieldCheck, Globe2, BookOpen } from "lucide-react";

const values = [
  {
    icon: HeartPulse,
    title: "Patient-First Care",
    description:
      "Every decision starts with what's best for the person in front of us.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity in Practice",
    description:
      "Honest guidance and transparent care, with no shortcuts taken.",
  },
  {
    icon: Globe2,
    title: "Accessible to All",
    description:
      "Quality care shouldn't depend on where you live or what you can afford.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We stay current with medical advances so our care never stands still.",
  },
];

export default function OurCoreValues() {
  return (
    <section className="bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 mb-10 px-6 md:px-16">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20">

        {/* Ambient background accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full blur-3xl"></div>

        {/* Top Heading */}
        <div className="relative text-center mb-16">
          <p className="text-sm text-blue-100 font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Our Core Values
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white leading-snug">
            What Guides <br /> Every Decision We Make
          </h2>
        </div>

        {/* Value grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-6 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Icon className="text-white w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-lg text-white mt-5">
                {title}
              </h3>
              <p className="text-sm text-blue-100/80 mt-2 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
