import { ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    category: "E-Commerce · Web Platform",
    title: "Scaling Nova Retail to 2M+ Monthly Visitors",
    challenge:
      "Nova Retail's legacy storefront couldn't handle peak traffic, leading to slow load times and cart abandonment during sales events.",
    solution:
      "We rebuilt their platform on a modern headless architecture with edge caching, optimized checkout flow, and real-time inventory sync.",
    metrics: [
      { icon: TrendingUp, value: "+180%", label: "Conversion Rate" },
      { icon: Clock, value: "0.9s", label: "Avg Load Time" },
      { icon: Users, value: "2.4M", label: "Monthly Visitors" },
    ],
    tags: ["Next.js", "Headless CMS", "Stripe", "AWS"],
  },
  {
    category: "FinTech · SaaS Dashboard",
    title: "Building Fintrack's Real-Time Analytics Suite",
    challenge:
      "Fintrack needed a way to give clients live visibility into transactions and risk metrics without overwhelming their existing infrastructure.",
    solution:
      "We designed and built a real-time dashboard with role-based access, streaming data pipelines, and exportable compliance reports.",
    metrics: [
      { icon: TrendingUp, value: "65%", label: "Faster Reporting" },
      { icon: Clock, value: "99.9%", label: "Uptime" },
      { icon: Users, value: "40+", label: "Enterprise Clients" },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets"],
  },
  {
    category: "EdTech · Mobile App",
    title: "Launching BrightPath's Learning App Nationwide",
    challenge:
      "BrightPath wanted to bring their tutoring platform to mobile with offline access for students in low-connectivity regions.",
    solution:
      "We built a cross-platform app with offline-first architecture, progress syncing, and gamified learning modules.",
    metrics: [
      { icon: TrendingUp, value: "50K+", label: "Downloads" },
      { icon: Clock, value: "4.8★", label: "App Store Rating" },
      { icon: Users, value: "120+", label: "Schools Onboarded" },
    ],
    tags: ["React Native", "Firebase", "Offline Sync"],
  },
];

export default function CaseStudies() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "80px 0",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER — centered */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 70px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#fbbf24",
              marginBottom: "14px",
            }}
          >
            Our Work
          </span>

          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #d97706, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Case Studies
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Real projects, real challenges, and the measurable results we
            delivered for our clients.
          </p>
        </div>

        {/* CASE STUDY LIST — alternating showcase */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {caseStudies.map((study, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={index}
                className="cs-card"
                style={{
                  display: "flex",
                  flexDirection: isReversed ? "row-reverse" : "row",
                  flexWrap: "wrap",
                  gap: "0",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "22px",
                  overflow: "hidden",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Visual side */}
                <div
                  style={{
                    flex: "1 1 320px",
                    minHeight: "280px",
                    background:
                      "linear-gradient(145deg, rgba(217,119,6,0.25), rgba(251,191,36,0.08))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    padding: "40px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "6rem",
                      fontWeight: 800,
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(251,191,36,0.35)",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content side */}
                <div
                  style={{
                    flex: "1.4 1 420px",
                    padding: "40px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#fbbf24",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {study.category}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "12px 0 20px 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {study.title}
                  </h3>

                  <div style={{ marginBottom: "16px" }}>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      Challenge
                    </p>
                    <p
                      style={{
                        fontSize: "0.94rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {study.challenge}
                    </p>
                  </div>

                  <div style={{ marginBottom: "26px" }}>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      Solution
                    </p>
                    <p
                      style={{
                        fontSize: "0.94rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {study.solution}
                    </p>
                  </div>

                  {/* Metrics row */}
                  <div
                    style={{
                      display: "flex",
                      gap: "24px",
                      flexWrap: "wrap",
                      marginBottom: "24px",
                      paddingTop: "22px",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {study.metrics.map((m, i) => {
                      const MIcon = m.icon;
                      return (
                        <div
                          key={i}
                          style={{ display: "flex", alignItems: "center", gap: "10px" }}
                        >
                          <div
                            style={{
                              width: "34px",
                              height: "34px",
                              borderRadius: "10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "rgba(251,191,36,0.1)",
                              border: "1px solid rgba(251,191,36,0.3)",
                              flexShrink: 0,
                            }}
                          >
                            <MIcon size={16} color="#fbbf24" strokeWidth={1.8} />
                          </div>
                          <div>
                            <div
                              style={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "#ffffff",
                                lineHeight: 1.1,
                              }}
                            >
                              {m.value}
                            </div>
                            <div
                              style={{
                                fontSize: "0.75rem",
                                color: "rgba(255,255,255,0.5)",
                              }}
                            >
                              {m.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tags + CTA */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.76rem",
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.6)",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            padding: "4px 12px",
                            borderRadius: "999px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="cs-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#fbbf24",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      View Case Study
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cs-card:hover {
          border-color: rgba(251,191,36,0.35);
          box-shadow: 0 16px 36px rgba(217,119,6,0.14);
        }
        .cs-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
