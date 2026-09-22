import { ClipboardList, Map, UploadCloud, CheckCircle2, Cloud } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Assess",
    desc: "We audit what's running today, what depends on what, and what absolutely can't go down.",
  },
  {
    icon: Map,
    num: "02",
    title: "Plan",
    desc: "A migration sequence built to avoid downtime, with a clear rollback path at every stage.",
  },
  {
    icon: UploadCloud,
    num: "03",
    title: "Migrate",
    desc: "Applications and databases move in controlled phases, not a risky all-at-once cutover.",
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Validate",
    desc: "Every system is tested in its new environment before traffic fully shifts over.",
  },
  {
    icon: Cloud,
    num: "05",
    title: "Live",
    desc: "Fully running in the cloud, monitored, and optimized for cost and performance.",
  },
];

export default function CloudMigration() {
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
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "620px",
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
              color: "#38bdf8",
              marginBottom: "14px",
            }}
          >
            Zero-Downtime Migration
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
            Cloud Migration
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Moving your applications and databases to the cloud, without the
            risk of a rushed, all-at-once cutover.
          </p>
        </div>

        {/* STEPPER */}
        <div className="migration-track" style={{ position: "relative" }}>
          <div
            className="migration-line"
            style={{
              position: "absolute",
              top: "26px",
              left: "6%",
              right: "6%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(56,189,248,0.4) 8%, rgba(56,189,248,0.4) 92%, transparent)",
            }}
          />

          <div
            className="migration-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "24px",
              position: "relative",
            }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "50%",
                      background: "#0a0f1a",
                      border: "1.5px solid rgba(56,189,248,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Icon size={21} color="#7dd3fc" strokeWidth={1.8} />
                  </div>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#38bdf8",
                      letterSpacing: "0.5px",
                      marginBottom: "8px",
                    }}
                  >
                    STEP {step.num}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "0 0 10px 0",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .migration-line {
            display: none;
          }
          .migration-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 40px !important;
          }
        }

        @media (max-width: 540px) {
          .migration-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}