// LocationBasedFeatures.tsx
import { MapPin, Navigation, Globe2, Compass, Smartphone } from "lucide-react";

const features = [
  { icon: MapPin, title: "Geo‑Targeted Content", desc: "Deliver personalized experiences based on user location." },
  { icon: Navigation, title: "Route Optimization", desc: "Suggest the fastest paths and nearby alternatives." },
  { icon: Globe2, title: "Global Reach", desc: "Support multi‑region deployments with localized data." },
  { icon: Compass, title: "Proximity Alerts", desc: "Notify users when they’re near relevant places or events." },
  { icon: Smartphone, title: "Mobile Integration", desc: "Leverage GPS and sensors for seamless mobile experiences." },
];

export default function LocationBasedFeatures() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "90vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "80px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 30px" }}>
        {/* HEADER — CENTERED */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#06b6d4",
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
            Unlock{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Location‑Based Features
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Integrate maps, GPS, and proximity awareness to deliver smarter,
            context‑aware experiences that adapt to where your users are.
          </p>
        </div>

        {/* BODY — LEFT ROUND DESIGN + RIGHT CONTENT */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT — ROUND RADIAL MAP */}
          <div style={{ flex: "1 1 400px", minWidth: "320px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                background: "#0f172a",
                borderRadius: "50%",
                width: "380px",
                height: "380px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(6,182,212,0.25)",
              }}
            >
              <Globe2 size={80} color="#06b6d4" strokeWidth={1.8} />
              {features.map((f, i) => {
                const Icon = f.icon;
                const angle = (i / features.length) * 2 * Math.PI;
                const radius = 160;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: `calc(50% + ${x}px - 28px)`,
                      top: `calc(50% + ${y}px - 28px)`,
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.1))",
                      border: "1px solid rgba(6,182,212,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 16px rgba(6,182,212,0.3)",
                    }}
                  >
                    <Icon size={22} color="#3b82f6" strokeWidth={1.8} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — FEATURE LIST */}
          <div style={{ flex: "1 1 500px", minWidth: "320px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(135deg, rgba(6,182,212,0.18), rgba(59,130,246,0.1))",
                        border: "1px solid rgba(59,130,246,0.3)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color="#06b6d4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                        {f.title}
                      </h4>
                      <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .radial-node:hover {
          transform: scale(1.1);
          border-color: rgba(6,182,212,0.5);
          box-shadow: 0 0 24px rgba(59,130,246,0.4);
        }
      `}</style>
    </section>
  );
}
