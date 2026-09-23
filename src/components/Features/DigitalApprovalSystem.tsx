// DigitalApprovalSystem.tsx
import { FileText, UserCheck, ShieldCheck, Send, CheckCircle2 } from "lucide-react";

const stages = [
  { icon: FileText, title: "Request Submitted", desc: "A new approval request is created and logged." },
  { icon: UserCheck, title: "Reviewer Assigned", desc: "The request is routed to the appropriate reviewer." },
  { icon: ShieldCheck, title: "Validation", desc: "Checks for compliance, policy, and data integrity." },
  { icon: Send, title: "Decision", desc: "Reviewer approves, rejects, or requests changes." },
  { icon: CheckCircle2, title: "Completion", desc: "Final status recorded and notifications sent." },
];

export default function DigitalApprovalSystem() {
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#6366f1",
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
            Streamline with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Approval System
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
            Replace paper trails and email chains with a transparent, trackable approval pipeline that keeps everyone aligned.
          </p>
        </div>

        {/* APPROVAL PIPELINE */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "relative",
            marginBottom: "70px",
          }}
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "5%",
              right: "5%",
              height: "3px",
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              zIndex: 1,
            }}
          />
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{
                  flex: "1",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#111827",
                    border: "3px solid #6366f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                    boxShadow: "0 0 20px rgba(99,102,241,0.4)",
                  }}
                >
                  <Icon size={28} color="#3b82f6" strokeWidth={1.8} />
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* BENEFITS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { title: "Transparency", desc: "Every step is visible, reducing bottlenecks and confusion." },
            { title: "Speed", desc: "Automated routing ensures faster decisions and fewer delays." },
            { title: "Compliance", desc: "Built-in checks keep approvals aligned with policies." },
            { title: "Audit Ready", desc: "Logs and records make audits simple and stress-free." },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "24px",
                transition: "all 0.3s ease",
              }}
            >
              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>
                {b.title}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pipeline-node:hover {
          transform: scale(1.05);
          border-color: rgba(99,102,241,0.6);
          box-shadow: 0 0 28px rgba(99,102,241,0.5);
        }
        .benefit-card:hover {
          transform: translateY(-6px);
          border-color: rgba(99,102,241,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 28px rgba(99,102,241,0.2);
        }
      `}</style>
    </section>
  );
}
