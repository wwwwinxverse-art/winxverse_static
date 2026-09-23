import { Zap, Filter, Settings2, CheckCircle2, MousePointerClick, Clock, Shield, Workflow } from "lucide-react";

const flow = [
  { icon: Zap, label: "Trigger", desc: "New order received" },
  { icon: Filter, label: "Condition", desc: "Order value > $50" },
  { icon: Settings2, label: "Action", desc: "Apply discount & tag" },
  { icon: CheckCircle2, label: "Done", desc: "Customer notified" },
];

const benefits = [
  {
    icon: MousePointerClick,
    title: "No-Code Workflow Builder",
    desc: "Build powerful automations by connecting triggers and actions visually — no scripting or developer time required.",
  },
  {
    icon: Clock,
    title: "Save Hours Every Week",
    desc: "Automate repetitive tasks like data entry, notifications, and approvals so your team can focus on higher-value work.",
  },
  {
    icon: Workflow,
    title: "Multi-Step Sequences",
    desc: "Chain together conditions and actions across tools to handle even your most complex workflows automatically.",
  },
  {
    icon: Shield,
    title: "Reliable, Monitored Execution",
    desc: "Every automation runs with built-in error handling and logs, so you always know exactly what happened and when.",
  },
];

export default function OneClickAutomation() {
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
              color: "#fb7185",
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
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            One-Click{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fb7185)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Automation
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Turn multi-step busywork into a single automated flow — set it up
            once, and let it run itself from there.
          </p>
        </div>

        {/* FLOW DIAGRAM — full width */}
        <div
          className="flow-panel"
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "22px",
            padding: "44px 40px",
            marginBottom: "60px",
          }}
        >
          {/* activate button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "44px",
            }}
          >
            <div
              className="run-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(90deg, #ea580c, #fb7185)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "12px 26px",
                borderRadius: "999px",
                boxShadow: "0 8px 24px rgba(251,113,133,0.3)",
              }}
            >
              <Zap size={16} fill="#ffffff" />
              Automation Active
            </div>
          </div>

          {/* connecting line */}
          <div
            className="flow-line"
            style={{
              position: "absolute",
              top: "128px",
              left: "12%",
              right: "12%",
              height: "2px",
              background:
                "repeating-linear-gradient(90deg, rgba(251,113,133,0.5) 0, rgba(251,113,133,0.5) 8px, transparent 8px, transparent 16px)",
            }}
          />

          <div
            className="flow-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              position: "relative",
            }}
          >
            {flow.map((step, index) => {
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
                  <div
                    className="flow-node"
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "50%",
                      background: "#1a0f0a",
                      border: "2px solid #fb7185",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      boxShadow: "0 0 16px rgba(251,113,133,0.4)",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Icon size={24} color="#fdba74" strokeWidth={1.8} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "6px",
                    }}
                  >
                    {step.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    {step.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* BENEFIT GRID */}
        <div
          className="benefit-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "22px",
          }}
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="benefit-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "26px 22px",
                  transition: "all 0.3s ease",
                }}
              >
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
                      "linear-gradient(135deg, rgba(234,88,12,0.18), rgba(251,113,133,0.1))",
                    border: "1px solid rgba(251,113,133,0.3)",
                  }}
                >
                  <Icon size={20} color="#fdba74" strokeWidth={1.8} />
                </div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  {b.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .run-badge {
          animation: pulse-badge 2.4s ease-in-out infinite;
        }
        @keyframes pulse-badge {
          0%, 100% { box-shadow: 0 8px 24px rgba(251,113,133,0.3); }
          50% { box-shadow: 0 8px 32px rgba(251,113,133,0.55); }
        }

        .flow-node {
          animation: node-glow 3s ease-in-out infinite;
        }
        .flow-grid > div:nth-child(2) .flow-node { animation-delay: 0.4s; }
        .flow-grid > div:nth-child(3) .flow-node { animation-delay: 0.8s; }
        .flow-grid > div:nth-child(4) .flow-node { animation-delay: 1.2s; }
        @keyframes node-glow {
          0%, 100% { box-shadow: 0 0 16px rgba(251,113,133,0.4); }
          50% { box-shadow: 0 0 24px rgba(251,113,133,0.75); }
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          border-color: rgba(251,113,133,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(234,88,12,0.14);
        }

        @media (max-width: 900px) {
          .flow-line { display: none; }
          .flow-grid, .benefit-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 540px) {
          .flow-grid, .benefit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
