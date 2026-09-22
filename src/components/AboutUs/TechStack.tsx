import { Layers, Cloud, Database, Smartphone, Palette } from "lucide-react";

const stack = [
  {
    icon: Layers,
    title: "Full-Stack Engineering",
    desc: "The core of every product we build, front to back.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Reliable infrastructure that scales with your traffic.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: Database,
    title: "Databases",
    desc: "Structured and flexible data layers built for speed.",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    desc: "Native-feeling apps across iOS and Android.",
    tags: ["React Native", "Flutter"],
  },
  {
    icon: Palette,
    title: "Design & QA",
    desc: "Pixel-perfect interfaces, tested before they ship.",
    tags: ["Figma", "Jest", "Cypress"],
  },
];

export default function TechStack() {
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
            maxWidth: "680px",
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
              color: "#a78bfa",
              marginBottom: "14px",
            }}
          >
            Our Tech Stack
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
            Tools We Trust to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ship Reliable Software
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            A modern, battle-tested stack across the full product lifecycle —
            from frontend to infrastructure.
          </p>
        </div>

        {/* UNIFORM CARD GRID */}
        <div
          className="ts-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "22px",
          }}
        >
          {stack.map(({ icon: Icon, title, desc, tags }, index) => (
            <div key={title} className="ts-card" style={{ position: "relative" }}>
              {/* top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "18px",
                  right: "18px",
                  height: "3px",
                  borderRadius: "0 0 4px 4px",
                  background: "linear-gradient(90deg, #6366f1, #a78bfa)",
                  opacity: 0.7,
                }}
              />

              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "30px 22px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.28)",
                    letterSpacing: "0.5px",
                    marginBottom: "18px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(167,139,250,0.1))",
                    border: "1px solid rgba(167,139,250,0.3)",
                  }}
                >
                  <Icon size={20} color="#a78bfa" strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "8px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.65,
                    marginBottom: "20px",
                    flexGrow: 1,
                  }}
                >
                  {desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "7px",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    paddingTop: "16px",
                  }}
                >
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.6)",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "4px 10px",
                        borderRadius: "999px",
                      }}
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

      <style>{`
        .ts-card > div:hover {
          transform: translateY(-6px);
          border-color: rgba(167,139,250,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(99,102,241,0.16);
        }

        @media (max-width: 1024px) {
          .ts-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .ts-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 420px) {
          .ts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}