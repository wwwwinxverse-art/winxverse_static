import { ArrowRight, Check } from "lucide-react";

const stages = [
  {
    num: "1",
    title: "Idea & Discovery",
    desc: "We capture your vision — the problem, the market, the people you're building for.",
  },
  {
    num: "2",
    title: "Validation",
    desc: "We test the riskiest assumptions with real users before committing budget.",
  },
  {
    num: "3",
    title: "Design",
    desc: "Wireframes become clickable prototypes, refined against real feedback.",
  },
  {
    num: "4",
    title: "Build",
    desc: "Engineers turn validated designs into a working, scalable product.",
  },
  {
    num: "5",
    title: "Launch & Grow",
    desc: "We ship to real users, then let real usage guide what comes next.",
  },
];

// visual "polish" increases left to right — rough note → shipped product
const styleByStage = [
  {
    border: "1.5px dashed rgba(167,139,250,0.55)",
    background: "transparent",
    radius: "6px",
    rotate: "-2.5deg",
    shadow: "none",
    font: "'Courier New', monospace",
    titleColor: "#c4b5fd",
    textColor: "rgba(255,255,255,0.55)",
    numBg: "transparent",
    numColor: "#a78bfa",
  },
  {
    border: "1.5px dashed rgba(139,139,240,0.5)",
    background: "rgba(139,139,240,0.03)",
    radius: "8px",
    rotate: "-1deg",
    shadow: "none",
    font: "'Courier New', monospace",
    titleColor: "#b7b3f7",
    textColor: "rgba(255,255,255,0.55)",
    numBg: "transparent",
    numColor: "#8b8bf0",
  },
  {
    border: "1px solid rgba(115,145,240,0.35)",
    background: "rgba(255,255,255,0.03)",
    radius: "12px",
    rotate: "0deg",
    shadow: "0 6px 16px rgba(0,0,0,0.15)",
    font: "'Segoe UI', sans-serif",
    titleColor: "#ffffff",
    textColor: "rgba(255,255,255,0.58)",
    numBg: "rgba(115,145,240,0.12)",
    numColor: "#7391f0",
  },
  {
    border: "1px solid rgba(96,165,250,0.4)",
    background: "rgba(96,165,250,0.07)",
    radius: "16px",
    rotate: "0deg",
    shadow: "0 10px 24px rgba(0,0,0,0.22)",
    font: "'Segoe UI', sans-serif",
    titleColor: "#ffffff",
    textColor: "rgba(255,255,255,0.6)",
    numBg: "rgba(96,165,250,0.15)",
    numColor: "#60a5fa",
  },
  {
    border: "1px solid rgba(56,189,248,0.5)",
    background: "linear-gradient(160deg, rgba(96,165,250,0.16), rgba(56,189,248,0.1))",
    radius: "20px",
    rotate: "0deg",
    shadow: "0 16px 34px rgba(56,189,248,0.16)",
    font: "'Segoe UI', sans-serif",
    titleColor: "#ffffff",
    textColor: "rgba(255,255,255,0.68)",
    numBg: "rgba(56,189,248,0.2)",
    numColor: "#38bdf8",
  },
];

export default function IdeasIntoProducts() {
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
        {/* HEADER — same pattern as OurProcess: eyebrow, gradient headline, centered subhead */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 76px auto",
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
            From Concept To Launch
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
            Ideas Into{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Products
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Every product we ship starts as a rough idea. Watch how it takes
            shape, step by step, into something real, tested, and used.
          </p>
        </div>

        {/* PROGRESSION ROW — rough note fades into a polished, shipped product card */}
        <div
          className="progress-row"
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "6px",
          }}
        >
          {stages.map((stage, index) => {
            const s = styleByStage[index];
            const isLast = index === stages.length - 1;
            return (
              <div key={stage.title} className="progress-item" style={{ display: "flex", alignItems: "stretch", flex: 1, minWidth: 0 }}>
                <div
                  className="progress-card"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    border: s.border,
                    background: s.background,
                    borderRadius: s.radius,
                    boxShadow: s.shadow,
                    transform: `rotate(${s.rotate})`,
                    fontFamily: s.font,
                    padding: index < 2 ? "20px 18px" : "24px 20px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: s.numBg,
                      color: s.numColor,
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      marginBottom: "14px",
                    }}
                  >
                    {isLast ? <Check size={13} strokeWidth={3} /> : stage.num}
                  </div>

                  <h3
                    style={{
                      fontSize: index < 2 ? "1rem" : "1.08rem",
                      fontWeight: index < 2 ? 600 : 700,
                      color: s.titleColor,
                      margin: "0 0 8px 0",
                      textTransform: index < 2 ? "uppercase" : "none",
                      letterSpacing: index < 2 ? "0.5px" : "normal",
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: s.textColor,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {stage.desc}
                  </p>
                </div>

                {!isLast && (
                  <div className="progress-arrow" style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
                    <ArrowRight size={16} color="rgba(255,255,255,0.25)" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .progress-row {
            flex-direction: column !important;
          }
          .progress-item {
            flex-direction: column !important;
          }
          .progress-card {
            transform: none !important;
          }
          .progress-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}