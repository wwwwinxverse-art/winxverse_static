// CustomWorkflows.tsx
import { PlayCircle, GitBranch, Settings, CheckCircle2, Repeat } from "lucide-react";

const steps = [
  { icon: PlayCircle, title: "Start Trigger", desc: "Define the event that kicks off your workflow." },
  { icon: GitBranch, title: "Branch Logic", desc: "Add conditional paths to handle different scenarios." },
  { icon: Settings, title: "Actions", desc: "Connect tools and automate tasks across platforms." },
  { icon: Repeat, title: "Loops", desc: "Repeat steps until conditions are met for advanced flows." },
  { icon: CheckCircle2, title: "Completion", desc: "Finalize with notifications, approvals, or data updates." },
];

export default function CustomWorkflows() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "90vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "80px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#f97316",
              marginBottom: "14px",
            }}
          >
            Feature Spotlight
          </span>
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "18px",
              lineHeight: 1.2,
            }}
          >
            Build Your Own{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #06b6d4, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Custom Workflows
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Design automation flows exactly the way your team works — drag, drop, and connect steps into powerful sequences.
          </p>
        </div>

        {/* VERTICAL BUILDER */}
        <div style={{ position: "relative", paddingLeft: "50px" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "24px",
              bottom: 0,
              width: "3px",
              background: "linear-gradient(to bottom, #06b6d4, #f97316)",
            }}
          />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  marginBottom: "50px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "18px",
                }}
              >
                {/* Node */}
                <div
                  style={{
                    position: "absolute",
                    left: "-32px",
                    top: "8px",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    background: i % 2 === 0 ? "#06b6d4" : "#f97316",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 12px rgba(255,255,255,0.3)",
                  }}
                />
                {/* Card */}
                <div
                  style={{
                    flex: "1",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "22px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          i % 2 === 0
                            ? "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(249,115,22,0.1))"
                            : "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(6,182,212,0.1))",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <Icon size={20} color={i % 2 === 0 ? "#06b6d4" : "#f97316"} strokeWidth={1.8} />
                    </div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff" }}>{s.title}</h4>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .workflow-card:hover {
          transform: translateY(-4px);
          border-color: rgba(6,182,212,0.4);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 8px 20px rgba(249,115,22,0.2);
        }
      `}</style>
    </section>
  );
}
