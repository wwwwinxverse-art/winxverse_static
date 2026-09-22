import {
  Rocket,
  BookOpen,
  Code,
  PlayCircle,
  HelpCircle,
  Users,
  ArrowUpRight,
} from "lucide-react";

const resources = [
  {
    icon: Rocket,
    title: "Getting Started",
    desc: "Everything you need to set up your account and launch your first project in minutes.",
    count: "12 articles",
  },
  {
    icon: Code,
    title: "API Reference",
    desc: "Complete technical documentation for every endpoint, request, and response format.",
    count: "48 endpoints",
  },
  {
    icon: BookOpen,
    title: "Guides & Tutorials",
    desc: "Step-by-step walkthroughs for common use cases, integrations, and best practices.",
    count: "26 guides",
  },
  {
    icon: PlayCircle,
    title: "Video Tutorials",
    desc: "Watch short, practical videos covering setup, features, and advanced workflows.",
    count: "18 videos",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    desc: "Quick answers to the questions we hear most often from our clients and users.",
    count: "35 questions",
  },
  {
    icon: Users,
    title: "Community Forum",
    desc: "Connect with other users, share solutions, and get help from our team directly.",
    count: "2,400+ members",
  },
];

export default function ResourceCenter() {
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
            margin: "0 auto 64px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#facc15",
              marginBottom: "14px",
            }}
          >
            Help Center
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
            Resource{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #eab308, #fde047)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Center
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Everything you need to get the most out of our platform — guides,
            docs, and support, all in one place.
          </p>
        </div>

        {/* RESOURCE GRID */}
        <div
          className="rc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {resources.map((res, index) => {
            const Icon = res.icon;
            return (
              <a
                key={index}
                href="#"
                className="rc-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "30px 26px",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "13px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, rgba(234,179,8,0.18), rgba(253,224,71,0.08))",
                      border: "1px solid rgba(250,204,21,0.3)",
                    }}
                  >
                    <Icon size={22} color="#facc15" strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    color="rgba(255,255,255,0.3)"
                    className="rc-arrow"
                  />
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  {res.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    marginBottom: "18px",
                    flexGrow: 1,
                  }}
                >
                  {res.desc}
                </p>

                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#facc15",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {res.count}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        .rc-card:hover {
          transform: translateY(-6px);
          border-color: rgba(250,204,21,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(234,179,8,0.14);
        }
        .rc-card:hover .rc-arrow {
          color: #facc15 !important;
        }

        @media (max-width: 900px) {
          .rc-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 560px) {
          .rc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
