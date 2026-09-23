import { MousePointer2, MessageSquare, History, Smartphone, Lock } from "lucide-react";

const features = [
  {
    icon: MousePointer2,
    title: "Live Cursors & Presence",
    desc: "See exactly who's working where, in real time. Named cursors and highlighted selections make co-editing feel like being in the same room.",
  },
  {
    icon: MessageSquare,
    title: "Inline Comments & Mentions",
    desc: "Leave feedback directly on the content, tag teammates with @mentions, and resolve threads without ever leaving the page.",
  },
  {
    icon: History,
    title: "Version History & Rollback",
    desc: "Every change is tracked automatically. Compare versions side by side and restore any previous state in a single click.",
  },
  {
    icon: Smartphone,
    title: "Sync Across Every Device",
    desc: "Start on desktop, continue on mobile — changes sync instantly so your team is always working from the latest version.",
  },
  {
    icon: Lock,
    title: "Granular Permissions",
    desc: "Control exactly who can view, comment, or edit — down to the individual document or section — without slowing collaboration down.",
  },
];

const cursors = [
  { name: "Aisha", color: "#c084fc", top: "22%", left: "28%" },
  { name: "Marco", color: "#f472b6", top: "58%", left: "62%" },
];

export default function RealTimeCollaboration() {
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

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 30px" }}>
         <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#f472b6",
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
            Work Together,{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              In Real Time
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
            No more version conflicts or waiting for someone else to finish.
            See changes as they happen, comment in context, and keep every
            teammate perfectly in sync — wherever they're working from.
          </p>
      </div>
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          gap: "70px",
          flexWrap: "wrap-reverse",
        }}
      >

        
        {/* LEFT — COLLABORATION VISUAL */}
        <div style={{ flex: "1 1 460px", minWidth: "320px" }}>
          <div
            className="collab-glow"
            style={{
              position: "relative",
              borderRadius: "20px",
              padding: "1px",
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(236,72,153,0.5))",
            }}
          >
            <div
              style={{
                background: "#100a1a",
                borderRadius: "19px",
                padding: "0",
                position: "relative",
                overflow: "hidden",
                minHeight: "380px",
              }}
            >
              {/* window bar with avatar stack */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f87171" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fbbf24" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80" }} />
                </div>

                <div style={{ display: "flex" }}>
                  {["A", "M", "S", "+3"].map((initial, i) => (
                    <div
                      key={i}
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        background:
                          i === 3
                            ? "rgba(255,255,255,0.12)"
                            : ["#c084fc", "#f472b6", "#818cf8"][i],
                        border: "2px solid #100a1a",
                        marginLeft: i === 0 ? 0 : "-8px",
                      }}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
              </div>

              {/* document body with fake text lines */}
              <div style={{ padding: "26px", position: "relative" }}>
                {[92, 78, 85, 60, 88, 70].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      height: "9px",
                      width: `${w}%`,
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "5px",
                      marginBottom: "14px",
                    }}
                  />
                ))}

                {/* highlighted selection block */}
                <div
                  style={{
                    position: "absolute",
                    top: "58px",
                    left: "26px",
                    width: "48%",
                    height: "9px",
                    background: "rgba(192,132,252,0.35)",
                    borderRadius: "5px",
                  }}
                />

                {/* live cursors */}
                {cursors.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: c.top,
                      left: c.left,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      zIndex: 3,
                    }}
                  >
                    <MousePointer2 size={16} color={c.color} fill={c.color} />
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        background: c.color,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.name}
                    </span>
                  </div>
                ))}

                {/* comment bubble */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "18px",
                    right: "22px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "12px 14px",
                    maxWidth: "220px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#f472b6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      M
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff" }}>
                      Marco
                    </span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", margin: 0, lineHeight: 1.5 }}>
                    "Can we tighten this section? Great otherwise 👍"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div style={{ flex: "1 1 460px", minWidth: "320px" }}>
         

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
                        "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.1))",
                      border: "1px solid rgba(244,114,182,0.3)",
                    }}
                  >
                    <Icon size={19} color="#f472b6" strokeWidth={1.8} />
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
      </div>

      <style>{`
        .collab-glow {
          animation: glow-pulse-2 4s ease-in-out infinite;
        }
        @keyframes glow-pulse-2 {
          0%, 100% { filter: drop-shadow(0 0 18px rgba(139,92,246,0.25)); }
          50% { filter: drop-shadow(0 0 28px rgba(236,72,153,0.3)); }
        }
      `}</style>
    </section>
  );
}
