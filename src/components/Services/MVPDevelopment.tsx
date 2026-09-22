const stages = [
  { num: "1", title: "Idea", desc: "A rough concept, sketched out and stress-tested before anything's built.", color: "#64748b", height: 64 },
  { num: "2", title: "Prototype", desc: "A clickable mockup to see if the idea holds up with real users.", color: "#38bdf8", height: 106 },
  { num: "3", title: "MVP", desc: "The smallest real version of your product — enough to use, not just imagine.", color: "#a78bfa", height: 148 },
  { num: "4", title: "Launch", desc: "Your MVP goes live to real customers, not just a test group.", color: "#fb923c", height: 190 },
  { num: "5", title: "Scale", desc: "We build on what's working and expand the product as demand grows.", color: "#ef4444", height: 232 },
];

export default function MVPDevelopment() {
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
              color: "#fb923c",
              marginBottom: "14px",
            }}
          >
            Built For Speed
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
            MVP Development
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Startups don't have time to overbuild. We help you validate an
            idea, ship a real product, and start scaling — without wasting
            months on the wrong things.
          </p>
        </div>

        {/* ASCENDING BAR CHART */}
        <div style={{ overflowX: "auto", paddingBottom: "8px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: "28px",
              minWidth: "560px",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              paddingBottom: "0px",
            }}
          >
            {stages.map((stage) => (
              <div
                key={stage.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "120px",
                  flexShrink: 0,
                }}
              >
                {/* value badge above the bar */}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: `1.5px solid ${stage.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "0.82rem",
                    color: stage.color,
                    background: "#0a0f1a",
                  }}
                >
                  {stage.num}
                </div>

                {/* bar */}
                <div
                  style={{
                    width: "56px",
                    height: `${stage.height}px`,
                    borderRadius: "8px 8px 0 0",
                    background: `linear-gradient(180deg, ${stage.color}, ${stage.color}55)`,
                    boxShadow: `0 0 18px ${stage.color}33`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* labels row, aligned under the chart */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "28px",
              minWidth: "560px",
              marginTop: "18px",
            }}
          >
            {stages.map((stage) => (
              <div
                key={stage.title}
                style={{
                  width: "120px",
                  flexShrink: 0,
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: "0 0 6px 0",
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
