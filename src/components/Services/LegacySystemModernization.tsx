import { HardDrive, Layers, Cloud, ChevronDown } from "lucide-react";

const bands = [
  {
    icon: HardDrive,
    title: "Legacy software",
    desc: "The system that's still running the business, just barely — outdated, fragile, and increasingly risky to touch.",
    color: "#94a3b8",
    border: "1.5px dashed rgba(148,163,184,0.4)",
    background: "rgba(148,163,184,0.03)",
    font: "'Courier New', monospace",
    radius: "8px",
    shadow: "none",
  },
  {
    icon: Layers,
    title: "Modern architecture",
    desc: "We re-platform the core: clean, documented, testable code built to be maintained for years, not just this quarter.",
    color: "#38bdf8",
    border: "1px solid rgba(56,189,248,0.35)",
    background: "rgba(56,189,248,0.05)",
    font: "'Segoe UI', sans-serif",
    radius: "14px",
    shadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  {
    icon: Cloud,
    title: "Cloud-ready system",
    desc: "Deployed on infrastructure that scales automatically, recovers from failure, and doesn't need a server closet.",
    color: "#a78bfa",
    border: "1px solid rgba(167,139,250,0.45)",
    background:
      "linear-gradient(120deg, rgba(56,189,248,0.12), rgba(167,139,250,0.14))",
    font: "'Segoe UI', sans-serif",
    radius: "20px",
    shadow: "0 16px 34px rgba(167,139,250,0.18)",
  },
];

export default function LegacySystemModernization() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "90px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            Rebuilt, Not Replaced
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
            Legacy System Modernization
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            We don't throw away everything that works. We rebuild the parts
            holding you back, one layer at a time.
          </p>
        </div>

        {/* STACKED BANDS — style shifts from dashed/mono to glowing gradient */}
        <div>
          {bands.map((band, index) => {
            const Icon = band.icon;
            const isLast = index === bands.length - 1;
            return (
              <div key={band.title}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                    border: band.border,
                    background: band.background,
                    borderRadius: band.radius,
                    boxShadow: band.shadow,
                    padding: "26px 26px",
                    fontFamily: band.font,
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: `1.5px solid ${band.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: "#0a0f1a",
                    }}
                  >
                    <Icon size={19} color={band.color} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "1.12rem",
                        fontWeight: 700,
                        color: index === 0 ? band.color : "#ffffff",
                        margin: "0 0 8px 0",
                        textTransform: index === 0 ? "uppercase" : "none",
                        letterSpacing: index === 0 ? "0.5px" : "normal",
                      }}
                    >
                      {band.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {band.desc}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    <ChevronDown size={18} color="rgba(255,255,255,0.25)" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
