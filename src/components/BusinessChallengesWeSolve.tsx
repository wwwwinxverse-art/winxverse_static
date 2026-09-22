import { ArrowRight } from "lucide-react";

const challenges = [
  {
    num: "01",
    title: "Manual processes",
    desc: "Teams still move data between spreadsheets, emails, and tools by hand — burning hours that should go toward real work.",
  },
  {
    num: "02",
    title: "Outdated software",
    desc: "Legacy systems that were cutting-edge a decade ago are now the thing holding your team back.",
  },
  {
    num: "03",
    title: "Poor customer experience",
    desc: "Slow, inconsistent, or disconnected touchpoints send customers looking for alternatives.",
  },
  {
    num: "04",
    title: "Lack of automation",
    desc: "Repetitive tasks stay repetitive because no one's had the time to fix them — until now.",
  },
  {
    num: "05",
    title: "Data scattered across systems",
    desc: "The full picture of your business lives in five different tools that don't talk to each other.",
  },
];

export default function BusinessChallengesWeSolve() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "90px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 30px" }}>
        <div
          className="challenges-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.5fr",
            gap: "64px",
          }}
        >
          {/* LEFT — intro, no card, just type */}
          <div className="challenges-intro">
            <span
              style={{
                display: "inline-block",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#f87171",
                marginBottom: "14px",
              }}
            >
              The Problems We Fix
            </span>

            <h2
              style={{
                fontSize: "2.3rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "18px",
                lineHeight: 1.22,
              }}
            >
              Business Challenges We Solve
            </h2>

            <p
              style={{
                fontSize: "1.02rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              Before we build anything, we get honest about what's actually
              broken. These are the patterns we see most often.
            </p>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#f87171",
                textDecoration: "none",
                borderBottom: "1px solid rgba(248,113,113,0.4)",
                paddingBottom: "3px",
              }}
            >
              Recognize one of these?
              <ArrowRight size={16} />
            </a>
          </div>

          {/* RIGHT — plain list, ghost numerals, hairline dividers, no boxes */}
          <div>
            {challenges.map((item, index) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "28px",
                  padding: "30px 0",
                  borderBottom:
                    index < challenges.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "2.6rem",
                    fontWeight: 700,
                    color: "rgba(248,113,113,0.22)",
                    lineHeight: 1,
                    minWidth: "72px",
                    flexShrink: 0,
                  }}
                >
                  {item.num}
                </span>

                <div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.96rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                      margin: 0,
                      maxWidth: "540px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .challenges-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
