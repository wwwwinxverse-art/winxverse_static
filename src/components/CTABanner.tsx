import { ArrowRight, Sparkle } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "60px 0",
        marginBottom: "50px",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        <div
          className="cta-banner"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            padding: "72px 40px",
            textAlign: "center",
            background:
              "radial-gradient(120% 140% at 15% 15%, #2f2af0 0%, #1a1470 42%, #0c0a2e 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Decorative glow orbs */}
          <div className="cta-orb cta-orb-cyan" />
          <div className="cta-orb cta-orb-pink" />

          {/* Grid overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              maskImage:
                "radial-gradient(circle at 50% 40%, #000 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 40%, #000 0%, transparent 75%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#7dd3fc",
                marginBottom: "22px",
                padding: "8px 18px",
                borderRadius: "999px",
                background: "rgba(125,211,252,0.1)",
                border: "1px solid rgba(125,211,252,0.3)",
              }}
            >
              <Sparkle size={14} color="#7dd3fc" strokeWidth={2} />
              Ready When You Are
            </div>

            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "20px",
                maxWidth: "680px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Let's Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #7dd3fc, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Together
              </span>
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                maxWidth: "540px",
                margin: "0 auto 40px auto",
              }}
            >
              Tell us about your idea and we'll help you turn it into a
              product people actually want to use — no lengthy pitches
              required.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="cta-primary-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 32px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#0c0a2e",
                  background: "linear-gradient(90deg, #7dd3fc, #ffffff)",
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Start a Project
                <ArrowRight size={18} strokeWidth={2.4} />
              </button>

              <button
                className="cta-secondary-btn"
                style={{
                  padding: "16px 32px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "999px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          opacity: 0.55;
        }
        .cta-orb-cyan {
          width: 320px;
          height: 320px;
          top: -120px;
          right: -60px;
          background: #22d3ee;
          animation: cta-float-a 9s ease-in-out infinite;
        }
        .cta-orb-pink {
          width: 260px;
          height: 260px;
          bottom: -100px;
          left: -40px;
          background: #f472b6;
          animation: cta-float-b 11s ease-in-out infinite;
        }
        @keyframes cta-float-a {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-24px, 20px); }
        }
        @keyframes cta-float-b {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -16px); }
        }
        .cta-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(125,211,252,0.35);
        }
        .cta-secondary-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.45);
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-orb-cyan, .cta-orb-pink {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
