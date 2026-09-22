const items = [
  { title: "Bug fixing", desc: "We track down and fix issues as they surface, before they affect your users.", status: "Priority response" },
  { title: "Updates", desc: "Dependencies, libraries, and platforms stay current so nothing quietly breaks.", status: "Scheduled" },
  { title: "Performance monitoring", desc: "We watch load times, uptime, and error rates around the clock.", status: "24/7" },
  { title: "Security updates", desc: "Patches and vulnerabilities are handled as soon as they're known.", status: "Continuous" },
  { title: "Feature enhancements", desc: "Small improvements ship regularly based on how the product's actually used.", status: "Ongoing" },
];

export default function MaintenanceAndSupport() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "90px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#22c55e",
              marginBottom: "14px",
            }}
          >
            Always-On Care
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
            Maintenance & Support
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Launching is the beginning, not the end. Here's what we keep
            watching after your product goes live.
          </p>
        </div>

        {/* STATUS PANEL */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* summary bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 24px",
              background: "rgba(34,197,94,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="status-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#86efac" }}>
              All systems actively monitored
            </span>
          </div>

          {/* rows */}
          <div style={{ padding: "6px 24px" }}>
            {items.map((item, index) => (
              <div
                key={item.title}
                className="status-panel-row"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "22px 0",
                  borderBottom:
                    index < items.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <span
                    className="status-dot"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#22c55e",
                      marginTop: "7px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontSize: "1.02rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "0 0 6px 0",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.65,
                        margin: 0,
                        maxWidth: "420px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>

                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgba(134,239,172,0.85)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: "999px",
                    padding: "5px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .status-dot {
          animation: pulseDot 2.2s ease-in-out infinite;
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        @media (max-width: 560px) {
          .status-panel-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
