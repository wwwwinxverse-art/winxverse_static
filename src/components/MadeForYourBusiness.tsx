const customTags = [
  { label: "Your workflow", rotate: "-4deg" },
  { label: "Your data", rotate: "3deg" },
  { label: "Your customers", rotate: "-2deg" },
  { label: "Your goals", rotate: "5deg" },
];

export default function MadeForYourBusiness() {
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
            maxWidth: "660px",
            margin: "0 auto 70px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#10b981",
              marginBottom: "14px",
            }}
          >
            Not Off-The-Shelf
          </span>

          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Made For{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #10b981, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Business
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Generic platforms force your business to adapt to them. We build
            the other way around — technology shaped by how you actually
            work.
          </p>
        </div>

        {/* VISUAL CONTRAST — rigid sameness vs. one tailored shape */}
        <div
          className="contrast-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT — generic, identical, rigid */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                maxWidth: "220px",
                margin: "0 auto 28px auto",
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: "1",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.09)",
                  }}
                />
              ))}
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Off-the-shelf software: every business forced into the same
              template.
            </p>
          </div>

          {/* RIGHT — one tailored shape, custom-fit */}
          <div
            style={{
              borderRadius: "58% 42% 55% 45% / 48% 58% 42% 52%",
              background: "linear-gradient(150deg, #10b981, #22d3ee)",
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 20px 50px rgba(16,185,129,0.2)",
              minHeight: "280px",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 22px 0",
                textAlign: "center",
              }}
            >
              Built around exactly how you work
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
                maxWidth: "280px",
              }}
            >
              {customTags.map((tag) => (
                <span
                  key={tag.label}
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.16)",
                    color: "#ffffff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    transform: `rotate(${tag.rotate})`,
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .contrast-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
