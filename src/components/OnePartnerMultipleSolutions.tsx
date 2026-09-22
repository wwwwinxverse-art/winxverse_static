import { Code2, PenTool, Search, Palette, Repeat, Sparkles } from "lucide-react";

const services = [
  { icon: Code2, label: "Web & App Development" },
  { icon: PenTool, label: "UI/UX Design" },
  { icon: Search, label: "SEO & Growth" },
  { icon: Palette, label: "Branding & Strategy" },
  { icon: Repeat, label: "Automation & Integrations" },
  { icon: Sparkles, label: "AI Solutions" },
];

// place each service evenly around a circle, as percentages of the container
function polar(index, total, radius = 40) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
}

export default function OnePartnerMultipleSolutions() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "90px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto 60px auto",
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
            One Ecosystem
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
            One Partner. Multiple Solutions.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Every service works from the same playbook, the same data, and
            the same team — so nothing falls through the cracks between
            vendors.
          </p>
        </div>

        {/* RADIAL DIAGRAM — desktop / tablet */}
        <div
          className="hub-diagram"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "560px",
            aspectRatio: "1",
            margin: "0 auto",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          >
            {services.map((s, i) => {
              const { x, y } = polar(i, services.length);
              return (
                <line
                  key={s.label}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="rgba(56,189,248,0.25)"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>

          {/* center hub */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              background: "linear-gradient(150deg, #0ea5e9, #38bdf8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "0 0 40px rgba(56,189,248,0.35)",
              zIndex: 2,
            }}
          >
            <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.3 }}>
              One
              <br />
              Partner
            </span>
          </div>

          {/* service nodes */}
          {services.map((s, i) => {
            const { x, y } = polar(i, services.length);
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="hub-node"
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  width: "108px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#0b1420",
                    border: "1px solid rgba(56,189,248,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={19} color="#7dd3fc" strokeWidth={1.8} />
                </div>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.75)",
                    textAlign: "center",
                    lineHeight: 1.35,
                  }}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* FALLBACK LIST — small screens, same content, no diagram math */}
        <div className="hub-mobile-list">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#0b1420",
                    border: "1px solid rgba(56,189,248,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} color="#7dd3fc" strokeWidth={1.8} />
                </div>
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#ffffff" }}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .hub-mobile-list {
          display: none;
        }

        .hub-node span {
          transition: color 0.2s ease;
        }
        .hub-node:hover span {
          color: #ffffff;
        }

        @media (max-width: 640px) {
          .hub-diagram {
            display: none;
          }
          .hub-mobile-list {
            display: block;
            max-width: 420px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
