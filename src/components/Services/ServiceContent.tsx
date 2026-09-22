export default function ServiceContent() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "We design and build fast, scalable websites that don't just look good — they're engineered to convert visitors into customers and hold up as your business grows. From marketing sites to complex web platforms, every line of code is written with performance and long-term maintainability in mind.",
      points: [
        "Custom business websites",
        "E-commerce platforms",
        "Responsive UI/UX design",
        "SEO optimized architecture",
        "Performance-first development",
        "CMS integration",
      ],
      img: "/serviceimage/web.jpg",
      color: "#38bdf8",
    },
    {
      id: 2,
      title: "Mobile App Development",
      desc: "We create native and cross-platform apps that feel fast, intuitive, and genuinely useful — not just a shrunk-down website. From the first wireframe to the App Store listing, we handle the full lifecycle so your app is ready for real users, not just a demo.",
      points: [
        "Android & iOS apps",
        "Cross-platform solutions",
        "UI/UX focused apps",
        "API integrations",
        "Push notifications & offline support",
        "App Store & Play Store deployment",
      ],
      img: "/serviceimage/app.jpg",
      color: "#a78bfa",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      desc: "Your infrastructure shouldn't be the reason your product goes down. We design cloud architectures that scale automatically, recover from failure on their own, and keep your costs predictable instead of surprising you at the end of the month.",
      points: [
        "AWS & Azure deployment",
        "Cloud migration",
        "Server management",
        "Scalable architecture",
        "Auto-scaling & load balancing",
        "Cost optimization",
      ],
      img: "/serviceimage/cloud.jpg",
      color: "#22d3ee",
    },
    {
      id: 4,
      title: "Digital Marketing",
      desc: "Traffic without strategy is just noise. We build marketing programs rooted in real data — the keywords your customers search, the ads that actually convert, and the content that keeps them coming back — so growth is measurable, not a guess.",
      points: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Google Ads campaigns",
        "Brand growth strategies",
        "Content strategy & copywriting",
        "Analytics & reporting",
      ],
      img: "/serviceimage/digi.avif",
      color: "#f472b6",
    },
    {
      id: 5,
      title: "Software Development",
      desc: "Beyond websites and apps, we build the custom software that runs the operational side of your business — internal tools, dashboards, and systems built around your exact workflow instead of forcing you to adapt to someone else's.",
      points: [
        "Web application development",
        "Mobile app development",
        "Custom software solutions",
        "API & backend development",
        "Database design",
        "Third-party integrations",
      ],
      img: "/serviceimage/softwaredevelop.jpg",
      color: "#fbbf24",
    },
    {
      id: 6,
      title: "Graphic Designing",
      desc: "Good design does more than look nice — it builds trust the moment someone sees it. We create a consistent visual identity across everything your business puts out, so your brand looks like one company everywhere it shows up.",
      points: [
        "Logo & brand identity design",
        "Social media creatives",
        "UI/UX design",
        "Marketing & promotional materials",
        "Brand guidelines",
        "Print & packaging design",
      ],
      img: "/serviceimage/graphic.jpg",
      color: "#fb7185",
    },
    {
      id: 7,
      title: "AI & Automation Solutions",
      desc: "The most valuable hours on your team are the ones spent on work only a human can do. We build AI tools and automated workflows that take the repetitive tasks off their plate — quietly and reliably, in the background.",
      points: [
        "AI chatbots",
        "Process automation",
        "Data analytics",
        "Smart integrations",
        "Custom AI model integration",
        "Workflow orchestration",
      ],
      img: "/serviceimage/ai.jpg",
      color: "#10b981",
    },
  ];

  return (
    <section className="bg-transparent py-20 px-6 md:px-16">
      {/* Title */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-3">
          What We Offer
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Professional Software Services
        </h2>

        <p className="text-gray-400 text-base leading-relaxed">
          We deliver complete digital solutions for modern businesses — from
          the first line of code to the systems that keep it running.
        </p>
      </div>

      {/* Alternating editorial rows — no cards */}
      <div className="max-w-6xl mx-auto">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={service.id}
              className={`flex flex-col md:items-center gap-10 md:gap-16 py-14 md:py-16 border-b border-white/10 last:border-0 ${
                reversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* image */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl border border-white/10"
                />
              </div>

              {/* content */}
              <div className="w-full md:w-1/2">
                <span
                  className="block font-serif leading-none text-6xl md:text-7xl mb-2"
                  style={{ color: `${service.color}22` }}
                >
                  {String(service.id).padStart(2, "0")}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-[0.95rem] leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.points.map((point, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium rounded-full px-3 py-1.5 border"
                      style={{
                        color: service.color,
                        borderColor: `${service.color}4D`,
                        backgroundColor: `${service.color}14`,
                      }}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}