import { Sparkles, Wrench, Bug, Zap } from "lucide-react";

const typeStyles = {
  New: { icon: Sparkles, color: "#e879f9", bg: "rgba(232,121,249,0.12)" },
  Improved: { icon: Zap, color: "#c084fc", bg: "rgba(192,132,252,0.12)" },
  Fixed: { icon: Bug, color: "#f0abfc", bg: "rgba(240,171,252,0.12)" },
};

const releases = [
  {
    version: "v3.4.0",
    date: "September 2026",
    changes: [
      { type: "New", text: "Introduced real-time collaboration for dashboard editing." },
      { type: "New", text: "Added dark mode support across all client portals." },
      { type: "Improved", text: "Reduced page load times by 35% on the analytics view." },
    ],
  },
  {
    version: "v3.3.0",
    date: "July 2026",
    changes: [
      { type: "New", text: "Launched mobile app support for iOS and Android." },
      { type: "Fixed", text: "Resolved sync delay issue in the notifications panel." },
      { type: "Improved", text: "Upgraded search to support fuzzy matching." },
    ],
  },
  {
    version: "v3.2.1",
    date: "May 2026",
    changes: [
      { type: "Fixed", text: "Patched a rare crash when exporting large reports." },
      { type: "Improved", text: "Better error messages across the API layer." },
    ],
  },
  {
    version: "v3.2.0",
    date: "March 2026",
    changes: [
      { type: "New", text: "Rolled out role-based access control for teams." },
      { type: "New", text: "Added integrations with Slack and Google Workspace." },
      { type: "Improved", text: "Redesigned onboarding flow for new users." },
    ],
  },
];

export default function Changelog() {
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
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER — centered */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto 64px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#e879f9",
              marginBottom: "14px",
            }}
          >
            Product Updates
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
            What's{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c026d3, #e879f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              New
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            A running log of features, improvements, and fixes we ship to make
            your experience better.
          </p>
        </div>

        {/* TIMELINE */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "8px",
              bottom: "8px",
              left: "9px",
              width: "2px",
              background:
                "linear-gradient(180deg, rgba(192,132,252,0.5), rgba(192,132,252,0.05))",
            }}
          />

          {releases.map((release, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                paddingLeft: "40px",
                marginBottom: index !== releases.length - 1 ? "44px" : 0,
              }}
            >
              {/* node dot */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "6px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#1a0d24",
                  border: "2px solid #c084fc",
                  boxShadow: "0 0 12px rgba(192,132,252,0.5)",
                }}
              />

              {/* version header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  marginBottom: "16px",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  {release.version}
                </h3>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {release.date}
                </span>
              </div>

              {/* changes card */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "20px 22px",
                  backdropFilter: "blur(6px)",
                }}
              >
                {release.changes.map((change, i) => {
                  const style = typeStyles[change.type];
                  const Icon = style.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 0",
                        borderBottom:
                          i !== release.changes.length - 1
                            ? "1px solid rgba(255,255,255,0.06)"
                            : "none",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: style.color,
                          background: style.bg,
                          padding: "4px 10px",
                          borderRadius: "999px",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        <Icon size={11} />
                        {change.type}
                      </span>
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {change.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
