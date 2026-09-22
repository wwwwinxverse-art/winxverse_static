import { Crosshair } from "lucide-react";

const items = [
  {
    code: "SPEC-01",
    tag: "TECH",
    title: "Technology selection",
    desc: "We evaluate frameworks, platforms, and vendors against your actual constraints — budget, timeline, team skills — not what's trending this year.",
  },
  {
    code: "SPEC-02",
    tag: "ARCH",
    title: "Architecture planning",
    desc: "Before a single feature is built, we map out how the system will hold together, scale, and stay maintainable years from now.",
  },
  {
    code: "SPEC-03",
    tag: "PROD",
    title: "Product strategy",
    desc: "We help you decide what to build next — and just as importantly, what not to build yet.",
  },
  {
    code: "SPEC-04",
    tag: "ADVISE",
    title: "Technical consultation",
    desc: "An outside, unbiased read on a technical decision, a stuck project, or a team that needs direction.",
  },
  {
    code: "SPEC-05",
    tag: "SCOPE",
    title: "Project estimation",
    desc: "Realistic timelines and budgets, grounded in what similar work has actually taken — not optimistic guesswork.",
  },
];

export default function SoftwareConsulting() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "90px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto 56px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#38bdf8",
              marginBottom: "14px",
            }}
          >
            Expert Guidance, Not Guesswork
          </span>

          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Software Consulting
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Before we write a line of code, we help you make the decisions
            that determine whether the project succeeds.
          </p>
        </div>

        {/* BLUEPRINT PANEL */}
        <div
          style={{
            border: "1px solid rgba(56,189,248,0.18)",
            borderRadius: "20px",
            padding: "56px 44px",
            backgroundImage:"transparent",
            backgroundSize: "32px 32px",
          }}
        >
          <div
            className="blueprint-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0px",
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.code}
                className="blueprint-item"
                style={{
                  padding: "26px 28px",
                  borderRight:
                    index % 2 === 0
                      ? "1px dashed rgba(56,189,248,0.2)"
                      : "none",
                  borderBottom:
                    index < items.length - (items.length % 2 === 0 ? 2 : 1)
                      ? "1px dashed rgba(56,189,248,0.2)"
                      : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "14px",
                  }}
                >
                  <Crosshair size={14} color="#38bdf8" strokeWidth={1.8} />
                  <span
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "1px",
                      color: "#38bdf8",
                    }}
                  >
                    {item.code} / {item.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: "0 0 10px 0",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: "380px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .blueprint-grid {
            grid-template-columns: 1fr !important;
          }
          .blueprint-item {
            border-right: none !important;
            border-bottom: 1px dashed rgba(56,189,248,0.2) !important;
          }
          .blueprint-item:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
