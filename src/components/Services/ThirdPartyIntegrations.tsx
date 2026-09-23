import { CreditCard, MapPin, MessageCircle, Mail, Share2, Cloud, Plug } from "lucide-react";

const integrations = [
  { icon: CreditCard, label: "Payment gateways", color: "#fbbf24" },
  { icon: MapPin, label: "Maps", color: "#38bdf8" },
  { icon: MessageCircle, label: "WhatsApp", color: "#22c55e" },
  { icon: Mail, label: "Email / SMS", color: "#a78bfa" },
  { icon: Share2, label: "Social platforms", color: "#f472b6" },
  { icon: Cloud, label: "Cloud services", color: "#22d3ee" },
  { icon: Plug, label: "External APIs", color: "#f87171" },
];

export default function ThirdPartyIntegrations() {
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
              color: "rgba(255,255,255,0.5)",
              marginBottom: "14px",
            }}
          >
            Connected By Design
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
            Third-Party Integrations
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Your product rarely works alone. We connect it cleanly to the
            tools it actually needs to talk to.
          </p>
        </div>

        {/* PLATFORM NODE */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 26px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <Plug size={17} color="#ffffff" strokeWidth={1.8} />
            <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
              Your Platform
            </span>
          </div>
        </div>

        {/* connector stem */}
        <div
          style={{
            width: "1px",
            height: "36px",
            background: "rgba(255,255,255,0.15)",
            margin: "0 auto",
          }}
        />

        {/* distribution line */}
        <div
          className="integration-line"
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.15)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        />

        {/* INTEGRATION GRID */}
        <div
          className="integration-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 8px",
                }}
              >
                <div
                  className="integration-tick"
                  style={{
                    width: "1px",
                    height: "20px",
                    background: "rgba(255,255,255,0.15)",
                  }}
                />
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: `1.5px solid ${item.color}66`,
                    background: `${item.color}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <Icon size={20} color={item.color} strokeWidth={1.8} />
                </div>
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.75)",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .integration-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            row-gap: 32px;
          }
          .integration-line,
          .integration-tick {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .integration-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
