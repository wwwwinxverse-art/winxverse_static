import { Activity, LayoutGrid, Sparkles, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Analytics",
    desc: "Track key metrics as they happen — no refresh needed. Data updates live so decisions are always based on the current picture, not yesterday's numbers.",
  },
  {
    icon: LayoutGrid,
    title: "Fully Customizable Widgets",
    desc: "Drag, drop, resize, and rearrange widgets to build a dashboard that reflects exactly what matters to your team — no rigid templates.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    desc: "Built-in intelligence surfaces trends, anomalies, and recommendations automatically, so you catch what matters without digging through raw data.",
  },
  {
    icon: Users,
    title: "Role-Based Views",
    desc: "Give every team member a dashboard tailored to their role — execs see the big picture, teams see what they act on daily.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Synced Everywhere",
    desc: "Access your dashboard across devices with end-to-end encrypted sync, so your data stays consistent and protected wherever you work.",
  },
];

export default function SmartDashboard() {
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
          display: "flex",
          alignItems: "center",
          gap: "70px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT — CONTENT */}
        <div style={{ flex: "1 1 460px", minWidth: "320px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: "16px",
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
            Meet Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4f46e5, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Smart Dashboard
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.85,
              marginBottom: "36px",
            }}
          >
            One command center for every metric that matters. Our Smart
            Dashboard brings live data, intelligent insights, and full
            customization together — so your team spends less time hunting
            for information and more time acting on it.
          </p>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background:
                        "linear-gradient(135deg, rgba(79,70,229,0.2), rgba(6,182,212,0.1))",
                      border: "1px solid rgba(129,140,248,0.3)",
                    }}
                  >
                    <Icon size={19} color="#818cf8" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.02rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "5px",
                      }}
                    >
                      {f.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — DASHBOARD MOCKUP VISUAL */}
        <div style={{ flex: "1 1 460px", minWidth: "320px" }}>
          <div
            className="dash-glow"
            style={{
              position: "relative",
              borderRadius: "20px",
              padding: "1px",
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.5), rgba(6,182,212,0.5))",
            }}
          >
            <div
              style={{
                background: "#0b0f1a",
                borderRadius: "19px",
                padding: "22px",
              }}
            >
              {/* window bar */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "18px" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f87171" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fbbf24" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80" }} />
              </div>

              {/* top stat cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                {[
                  { label: "Revenue", value: "$48.2K", up: true },
                  { label: "Active Users", value: "12,904", up: true },
                  { label: "Churn", value: "1.2%", up: false },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "14px",
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", marginBottom: "6px" }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff" }}>
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        color: stat.up ? "#4ade80" : "#f87171",
                        marginTop: "4px",
                      }}
                    >
                      {stat.up ? "▲ 4.6%" : "▼ 0.3%"}
                    </div>
                  </div>
                ))}
              </div>

              {/* bar chart panel */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "18px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "14px",
                  }}
                >
                  Weekly Performance
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "8px",
                    height: "90px",
                  }}
                >
                  {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                    <div
                      key={i}
                      className="bar"
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: "5px 5px 0 0",
                        background:
                          "linear-gradient(180deg, #06b6d4, #4f46e5)",
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* bottom row: donut + list */}
              <div style={{ display: "flex", gap: "14px" }}>
                <div
                  style={{
                    flex: "0 0 100px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background:
                        "conic-gradient(#06b6d4 0% 45%, #4f46e5 45% 75%, rgba(255,255,255,0.1) 75% 100%)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: "10px",
                        borderRadius: "50%",
                        background: "#0b0f1a",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "14px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "9px",
                  }}
                >
                  {["Web Traffic", "Mobile App", "API Usage"].map((label, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: i === 0 ? "#06b6d4" : i === 1 ? "#4f46e5" : "rgba(255,255,255,0.3)",
                          }}
                        />
                        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>
                          {label}
                        </span>
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff" }}>
                        {i === 0 ? "45%" : i === 1 ? "30%" : "25%"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dash-glow {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(79,70,229,0.25)); }
          50% { filter: drop-shadow(0 0 28px rgba(6,182,212,0.35)); }
        }
        .bar {
          transition: opacity 0.3s ease;
        }
        .bar:hover {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
