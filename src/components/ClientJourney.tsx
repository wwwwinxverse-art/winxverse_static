const stops = [
  { num: "1", title: "First Call", desc: "A quick, no-pressure conversation about what you need.", color: "#3b82f6" },
  { num: "2", title: "Requirement", desc: "We document the details — no design or code yet.", color: "#0ea5e9" },
  { num: "3", title: "Proposal", desc: "A clear scope, timeline, and price, in writing.", color: "#06b6d4" },
  { num: "4", title: "Development", desc: "Your product gets built, with regular check-ins.", color: "#10b981" },
  { num: "5", title: "Delivery", desc: "You get a fully tested, working product.", color: "#65a30d" },
  { num: "6", title: "Support", desc: "We stay on to fix, improve, and grow it with you.", color: "#84cc16" },
];

// evenly spaced x, alternating y — a simple zigzag "road" across a 1000x260 canvas
const xs = [60, 236, 412, 588, 764, 940];
const ys = [90, 190, 90, 190, 90, 190];

export default function ClientJourney() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "90px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER */}
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
              color: "#3b82f6",
              marginBottom: "14px",
            }}
          >
            What Happens Next
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
            Client Journey
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            From the moment you reach out to the day we're supporting your
            product in production — here's exactly what happens, in order.
          </p>
        </div>

        {/* ROAD DIAGRAM — desktop / tablet */}
        <div
          className="journey-road"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1000 / 260",
          }}
        >
          <svg
            viewBox="0 0 1000 260"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="journeyGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#84cc16" />
              </linearGradient>
            </defs>
            <polyline
              points={xs.map((x, i) => `${x},${ys[i]}`).join(" ")}
              fill="none"
              stroke="url(#journeyGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.55"
            />
          </svg>

          {stops.map((stop, i) => (
            <div
              key={stop.title}
              className="journey-stop"
              style={{
                position: "absolute",
                left: `${(xs[i] / 1000) * 100}%`,
                top: `${(ys[i] / 260) * 100}%`,
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "150px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#0b1420",
                  border: `2px solid ${stop.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 14px ${stop.color}55`,
                  marginBottom: "12px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1rem",
                    color: stop.color,
                  }}
                >
                  {stop.num}
                </span>
              </div>
              <h3
                style={{
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 6px 0",
                  textAlign: "center",
                }}
              >
                {stop.title}
              </h3>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {stop.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FALLBACK LIST — small screens */}
        <div className="journey-mobile-list">
          {stops.map((stop) => (
            <div
              key={stop.title}
              style={{
                display: "flex",
                gap: "16px",
                padding: "18px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#0b1420",
                  border: `2px solid ${stop.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: stop.color }}>
                  {stop.num}
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: "0 0 4px 0" }}>
                  {stop.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>
                  {stop.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .journey-mobile-list {
          display: none;
        }

        @media (max-width: 760px) {
          .journey-road {
            display: none;
          }
          .journey-mobile-list {
            display: block;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
