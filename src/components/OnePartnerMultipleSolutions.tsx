import {
  Code2,
  PenTool,
  Search,
  Palette,
  Repeat,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  label: string;
}

const services: Service[] = [
  {
    icon: Code2,
    label: "Web & App Development",
  },
  {
    icon: PenTool,
    label: "UI/UX Design",
  },
  {
    icon: Search,
    label: "SEO & Growth",
  },
  {
    icon: Palette,
    label: "Branding & Strategy",
  },
  {
    icon: Repeat,
    label: "Automation & Integrations",
  },
  {
    icon: Sparkles,
    label: "AI Solutions",
  },
];

// Place each service evenly around a circle
function polar(
  index: number,
  total: number,
  radius: number = 40
): { x: number; y: number } {
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
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
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
              margin: "0 0 16px",
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
              margin: 0,
            }}
          >
            Every service works from the same playbook, the same data, and
            the same team — so nothing falls through the cracks between
            vendors.
          </p>
        </div>

        {/* RADIAL DIAGRAM */}
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
          {/* Connecting Lines */}
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {services.map((service, index) => {
              const { x, y } = polar(index, services.length);

              return (
                <line
                  key={service.label}
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

          {/* CENTER HUB */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              background:
                "linear-gradient(150deg, #0ea5e9, #38bdf8)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow:
                "0 0 40px rgba(56,189,248,0.35)",
              zIndex: 2,
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.95rem",
                lineHeight: 1.3,
              }}
            >
              One
              <br />
              Partner
            </span>
          </div>

          {/* SERVICE NODES */}
          {services.map((service, index) => {
            const { x, y } = polar(index, services.length);
            const Icon = service.icon;

            return (
              <div
                key={service.label}
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
                  cursor: "default",
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#0b1420",
                    border:
                      "1px solid rgba(56,189,248,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition:
                      "all 0.2s ease",
                  }}
                >
                  <Icon
                    size={19}
                    color="#7dd3fc"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Service Label */}
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.75)",
                    textAlign: "center",
                    lineHeight: 1.35,
                    transition:
                      "color 0.2s ease",
                  }}
                >
                  {service.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* MOBILE LIST */}
        <div className="hub-mobile-list">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#0b1420",
                    border:
                      "1px solid rgba(56,189,248,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    size={17}
                    color="#7dd3fc"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Label */}
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  {service.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
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

        .hub-node:hover > div {
          border-color: rgba(56,189,248,0.8);
          box-shadow: 0 0 18px rgba(56,189,248,0.2);
        }

        @media (max-width: 640px) {
          .hub-diagram {
            display: none !important;
          }

          .hub-mobile-list {
            display: block;
            max-width: 420px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          section {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </section>
  );
}