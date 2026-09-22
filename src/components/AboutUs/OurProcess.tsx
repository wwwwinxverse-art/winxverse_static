import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discover",
    desc: "We start by understanding your business, goals, and challenges — researching your market and defining what success looks like.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design",
    desc: "Our team turns ideas into wireframes and prototypes, crafting intuitive interfaces that align with your brand and users' needs.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Develop",
    desc: "We build your product using clean, scalable code — with regular check-ins so you always know where things stand.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Deliver",
    desc: "After thorough testing product, we launch your product and stay on to support, monitor, and improve it as you grow.",
  },
];

export default function OurProcess() {
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
            margin: "0 auto 80px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#f472b6",
              marginBottom: "14px",
            }}
          >
            How We Work
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
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #ec4899, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Process
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            A clear, collaborative approach that takes your idea from concept
            to a fully launched product.
          </p>
        </div>

        {/* STEPPER */}
        <div className="process-track" style={{ position: "relative" }}>
          {/* connecting line */}
          <div
            className="process-line"
            style={{
              position: "absolute",
              top: "26px",
              left: "6%",
              right: "6%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, rgba(236,72,153,0.5) 8%, rgba(236,72,153,0.5) 92%, transparent)",
            }}
          />

          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "28px",
              position: "relative",
            }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* node */}
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "50%",
                      background: "#1a0d16",
                      border: "2px solid #ec4899",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "26px",
                      boxShadow: "0 0 18px rgba(236,72,153,0.45)",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Icon size={22} color="#f9a8d4" strokeWidth={1.8} />
                  </div>

                  {/* card */}
                  <div
                    className="process-card"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      padding: "26px 22px",
                      backdropFilter: "blur(6px)",
                      transition: "all 0.3s ease",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#f472b6",
                        letterSpacing: "0.5px",
                      }}
                    >
                      STEP {step.num}
                    </span>

                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "10px 0 12px 0",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .process-card:hover {
          transform: translateY(-6px);
          border-color: rgba(236,72,153,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(236,72,153,0.14);
        }

        @media (max-width: 900px) {
          .process-line {
            display: none;
          }
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 540px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
