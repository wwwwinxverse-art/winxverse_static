import { ArrowRight } from "lucide-react";

const beforeTags = ["Cluttered", "Cramped", "Dated"];
const afterTags = ["Clean", "Spacious", "Intuitive"];
const outcomes = ["Higher engagement", "Lower bounce rate", "Faster task completion"];

export default function UIUXTransformation() {
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
            maxWidth: "640px",
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
              color: "#c084fc",
              marginBottom: "14px",
            }}
          >
            Old Interface, New Experience
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
            UI/UX Transformation
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            We redesign outdated websites and apps that have grown cluttered
            over time, and rebuild them around how people actually use them.
          </p>
        </div>

        {/* BEFORE / AFTER MOCKUPS */}
        <div
          className="uiux-compare"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {/* BEFORE mockup */}
          <div>
            <div
              style={{
                background: "#14161a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                padding: "12px",
              }}
            >
              {/* cramped nav */}
              <div style={{ display: "flex", gap: "5px", marginBottom: "14px" }}>
                <div style={{ width: "24px", height: "9px", background: "rgba(255,255,255,0.18)", borderRadius: "2px" }} />
                <div style={{ flex: 1 }} />
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} style={{ width: "16px", height: "9px", background: "rgba(255,255,255,0.14)", borderRadius: "2px" }} />
                ))}
              </div>

              {/* dense content block */}
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", flexShrink: 0 }} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
                  {[95, 100, 88, 92, 70].map((w, i) => (
                    <div key={i} style={{ width: `${w}%`, height: "5px", background: "rgba(255,255,255,0.13)", borderRadius: "2px" }} />
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: "6px", marginTop: "14px" }}>
                <div style={{ width: "50px", height: "18px", background: "rgba(255,255,255,0.16)", borderRadius: "2px" }} />
                <div style={{ width: "50px", height: "18px", background: "rgba(255,255,255,0.1)", borderRadius: "2px" }} />
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "18px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>Before</span>
              <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                {beforeTags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.4)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "999px",
                      padding: "4px 10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* arrow */}
          <div className="uiux-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c084fc, #f472b6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(192,132,252,0.35)",
              }}
            >
              <ArrowRight size={18} color="#ffffff" strokeWidth={2} />
            </div>
          </div>

          {/* AFTER mockup */}
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(192,132,252,0.3)",
                borderRadius: "16px",
                padding: "22px",
                boxShadow: "0 12px 30px rgba(192,132,252,0.1)",
              }}
            >
              {/* clean nav */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "26px", height: "12px", background: "linear-gradient(90deg, #c084fc, #f472b6)", borderRadius: "4px" }} />
                <div style={{ flex: 1 }} />
                <div style={{ width: "34px", height: "10px", background: "rgba(255,255,255,0.14)", borderRadius: "4px" }} />
                <div
                  style={{
                    width: "48px",
                    height: "18px",
                    background: "linear-gradient(90deg, #c084fc, #f472b6)",
                    borderRadius: "999px",
                  }}
                />
              </div>

              {/* hero block */}
              <div
                style={{
                  height: "56px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, rgba(192,132,252,0.25), rgba(244,114,182,0.18))",
                  marginBottom: "18px",
                }}
              />

              {/* headline + subtext */}
              <div style={{ width: "70%", height: "11px", background: "rgba(255,255,255,0.22)", borderRadius: "4px", marginBottom: "10px" }} />
              <div style={{ width: "55%", height: "6px", background: "rgba(255,255,255,0.12)", borderRadius: "4px", marginBottom: "20px" }} />

              <div
                style={{
                  width: "84px",
                  height: "26px",
                  background: "linear-gradient(90deg, #c084fc, #f472b6)",
                  borderRadius: "999px",
                }}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "18px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#e9d5ff" }}>After</span>
              <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                {afterTags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.72rem",
                      color: "#e9d5ff",
                      border: "1px solid rgba(192,132,252,0.35)",
                      background: "rgba(192,132,252,0.08)",
                      borderRadius: "999px",
                      padding: "4px 10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OUTCOMES */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "56px",
          }}
        >
          {outcomes.map((o) => (
            <span
              key={o}
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                padding: "8px 18px",
              }}
            >
              {o}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .uiux-compare {
            grid-template-columns: 1fr !important;
          }
          .uiux-arrow {
            transform: rotate(90deg);
            margin: 8px 0;
          }
        }
      `}</style>
    </section>
  );
}
