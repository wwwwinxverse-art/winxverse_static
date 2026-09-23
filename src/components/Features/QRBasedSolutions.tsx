// QRBasedSolutions.tsx
import { QrCode, Smartphone, Lock, ShoppingCart, Globe2 } from "lucide-react";

const features = [
  { icon: Smartphone, title: "Instant Access", desc: "Scan once to unlock apps, websites, or services without typing." },
  { icon: Lock, title: "Secure Authentication", desc: "Use QR codes for two‑factor login and identity verification." },
  { icon: ShoppingCart, title: "Seamless Payments", desc: "Enable fast, contactless transactions with QR‑based checkout." },
  { icon: Globe2, title: "Global Compatibility", desc: "Works across devices, regions, and platforms with universal standards." },
];

export default function QRBasedSolutions() {
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
            Power Your Apps with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              QR‑Based Solutions
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
            From authentication to payments, QR codes bridge the physical and digital worlds with speed, security, and simplicity.
          </p>
        </div>

        {/* BODY — LEFT QR MOCKUP + RIGHT CONTENT */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT — QR MOCKUP */}
          <div style={{ flex: "1 1 400px", minWidth: "320px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                background: "#0f172a",
                borderRadius: "20px",
                width: "340px",
                height: "340px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(139,92,246,0.25)",
              }}
            >
              {/* Central QR icon */}
              <QrCode size={120} color="#8b5cf6" strokeWidth={1.8} />

              {/* Decorative scanning lines */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  right: "0",
                  height: "2px",
                  background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                  animation: "scanline 3s linear infinite",
                }}
              />
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
                          "linear-gradient(135deg, rgba(6,182,212,0.18), rgba(139,92,246,0.1))",
                        border: "1px solid rgba(139,92,246,0.3)",
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
        @keyframes scanline {
          0% { transform: translateY(-160px); }
          100% { transform: translateY(160px); }
        }
        .feature-item:hover {
          transform: translateX(4px);
          border-color: rgba(139,92,246,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 8px 20px rgba(139,92,246,0.2);
        }
      `}</style>
    </section>
  );
}
