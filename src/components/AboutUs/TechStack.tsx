import { Layers, Cloud, Database, Smartphone, Palette } from "lucide-react";

const stack = [
  {
    icon: Layers,
    title: "Full-Stack Engineering",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    size: "large",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tags: ["AWS", "Docker", "Kubernetes"],
    size: "small",
  },
  {
    icon: Database,
    title: "Databases",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
    size: "small",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    tags: ["React Native", "Flutter"],
    size: "small",
  },
  {
    icon: Palette,
    title: "Design & QA",
    tags: ["Figma", "Jest", "Cypress"],
    size: "small",
  },
];

export default function TechStack() {
  return (
    <section className="bg-transparent-50 mb-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Top Heading */}
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            Our Tech Stack
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white-900 leading-snug">
            Tools We Trust to <br /> Ship Reliable Software
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">

          {/* Featured large card */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-2xl bg-blue-600 p-8 flex flex-col justify-between min-h-[280px]">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15">
              <Layers className="text-white w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-white mt-6">
                Full-Stack Engineering
              </h3>
              <p className="text-sm text-blue-100 mt-2 max-w-xs">
                The core of every product we build, front to back.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {stack[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-white bg-white/15 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Smaller cards */}
          {stack.slice(1).map(({ icon: Icon, title, tags }) => (
            <div
              key={title}
              className="rounded-2xl bg-white shadow-sm p-6 flex flex-col justify-between"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                <Icon className="text-blue-600 w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-base text-gray-900 mt-4">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
