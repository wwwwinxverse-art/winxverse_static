

export default function Founder() {
  return (
     <section
      style={{
        width: "100%",
        minHeight: "80vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "60px 0",
      }}
    >
    

      {/* MAIN CONTENT */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          gap: "80px",
          flexWrap: "wrap", // responsive
        }}
      >
        {/* LEFT IMAGE (1/3) */}
        <div
          style={{
            flex: "1 1 320px",
            maxWidth: "350px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Glow Ring */}
          <div
            style={{
              position: "absolute",
              inset: "-7px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #22c55e, #4ade80, #15803d, #86efac)",
              zIndex: 0,
              animation: "spin 5s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-3px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0d0b1e, #1e0a3c)",
              zIndex: 1,
            }}
          />

          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              zIndex: 2,
              border: "4px solid rgba(34,197,94,0.5)",
            }}
          >
         <img
  src="/images/mahesh.jpeg"
  alt="Founder"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",   // 👈 shows full image (zoomed out)
    objectPosition: "center",
    backgroundColor: "white", // 👈 fills empty space nicely
  }}
/>
          </div>
        </div>

        {/* RIGHT CONTENT (2/3) */}
        <div
          style={{
            flex: "2 1 600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // center everything
            textAlign: "center",
          }}
        >
          {/* TITLE */}
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: "800",
              color: "#ffffff",
              marginBottom: "22px",
            }}
          >
            Our Vision –{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #22c55e, #4ade80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Message
            </span>
            <br />
            From Founder
          </h2>

          {/* TEXT BLOCK */}
          <div style={{ maxWidth: "750px" }}>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: "1.85",
                marginBottom: "18px",
                textAlign: "justify",
              }}
            >
              At <strong style={{ color: "#ffffff" }}>PIXEL</strong>, we aim to drive
              innovation by blending technology with user insights, creating impactful
              solutions that foster growth and elevate brands.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: "1.85",
                marginBottom: "18px",
                textAlign: "justify",
              }}
            >
              We believe that great design is the intersection of art and engineering.
              Every pixel we craft is intentional and meaningful.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.48)",
                lineHeight: "1.85",
                marginBottom: "30px",
                textAlign: "justify",
              }}
            >
              We are committed to continuous growth, innovation, and delivering
              excellence in every project.
            </p>
          </div>

         
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}