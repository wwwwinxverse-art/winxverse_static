import {
  Sparkles,
  BarChart3,
  Gauge,
  Megaphone,
  Wrench,
  RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface GrowthItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const items: GrowthItem[] = [
  {
    icon: Sparkles,
    title: "New features",
    desc: "We keep shipping — not everything at once, but steady, meaningful additions based on what users are actually asking for.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: 'Every release is measured. We track how people actually use the product, not just whether it "looks done."',
  },
  {
    icon: Gauge,
    title: "Optimization",
    desc: "Slow pages, awkward flows, and friction points get found and fixed before they cost you customers.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    desc: "Growth isn't just building — it's making sure the right people actually find what you've built.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Bugs get fixed, dependencies stay current, and the product keeps running reliably in the background.",
  },
];

// Place each item evenly around a circle
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

export default function PostLaunchGrowth() {
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
              color: "#22c55e",
              marginBottom: "14px",
            }}
          >
            The Work Doesn't Stop At Launch
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
            Post-Launch Growth
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Launch is a milestone, not a finish line. This is the loop that
            keeps your product improving after it goes live — continuously,
            not just once.
          </p>
        </div>

        {/* GROWTH LOOP */}
        <div
          className="loop-diagram"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "560px",
            aspectRatio: "1",
            margin: "0 auto",
          }}
        >
          {/* Orbit */}
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
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(34,197,94,0.3)"
              strokeWidth="0.6"
              strokeDasharray="2 3"
            />
          </svg>

          {/* CENTER */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "116px",
              height: "116px",
              borderRadius: "50%",
              background:
                "linear-gradient(150deg, #16a34a, #22c55e)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow:
                "0 0 36px rgba(34,197,94,0.3)",
              zIndex: 2,
              padding: "8px",
              boxSizing: "border-box",
            }}
          >
            <RefreshCw
              size={18}
              color="#ffffff"
              strokeWidth={2}
              style={{ marginBottom: "6px" }}
            />

            <span
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.78rem",
                lineHeight: 1.3,
              }}
            >
              Continuous
              <br />
              Growth Loop
            </span>
          </div>

          {/* ORBITING ITEMS */}
          {items.map((item, index) => {
            const { x, y } = polar(index, items.length);
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="loop-item"
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  width: "118px",
                  zIndex: 2,
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "#0a140d",
                    border:
                      "1px solid rgba(34,197,94,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon
                    size={19}
                    color="#4ade80"
                    strokeWidth={1.8}
                  />
                </div>

                {/* TITLE */}
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    textAlign: "center",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* MOBILE LIST */}
        <div className="loop-mobile-list">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "18px 0",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#0a140d",
                    border:
                      "1px solid rgba(34,197,94,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    size={17}
                    color="#4ade80"
                    strokeWidth={1.8}
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "0 0 4px 0",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP DETAILS */}
        <div
          className="loop-desktop-details"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "24px",
            maxWidth: "1000px",
            margin: "56px auto 0 auto",
          }}
        >
          {items.map((item) => (
            <p
              key={item.title}
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
                textAlign: "center",
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          ))}
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style>{`
        .loop-mobile-list {
          display: none;
        }

        .loop-item > div {
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
        }

        .loop-item:hover > div {
          border-color: rgba(34,197,94,0.8);
          box-shadow: 0 0 18px rgba(34,197,94,0.2);
        }

        .loop-item span {
          transition: color 0.2s ease;
        }

        .loop-item:hover span {
          color: #4ade80;
        }

        @media (max-width: 760px) {
          .loop-diagram,
          .loop-desktop-details {
            display: none !important;
          }

          .loop-mobile-list {
            display: block;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        @media (max-width: 900px) and (min-width: 761px) {
          .loop-desktop-details {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .loop-mobile-list {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}