

const AboutFounder = () => {

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "60px 0",
      }}
    >
      {/* STATS BAR */}
      <div
        style={{
          width: "100%",
          background:
            "linear-gradient(90deg, #0f0c29 0%, #1a1545 50%, #0f0c29 100%)",
          borderTop: "1px solid rgba(34,197,94,0.15)",
          borderBottom: "1px solid rgba(34,197,94,0.15)",
          padding: "32px 0",
          display: "flex",
          justifyContent: "center",
          marginBottom: "90px",
          flexWrap: "wrap",
        }}
      >
        {[
          { number: "500+", label: "Projects Completed" },
          { number: "600+", label: "Happy Clients" },
          { number: "7+", label: "Industry Awards" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 200px",
              textAlign: "center",
              padding: "10px 40px",
              borderRight:
                i < 2 ? "1px solid rgba(34,197,94,0.2)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "2.6rem",
                fontWeight: "800",
                color: "#ffffff",
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.5)",
                marginTop: "6px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

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
  src="/images/mahesh.png"
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
    alignItems: "center",
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
    Our Mission –{" "}
    <span
      style={{
        background: "linear-gradient(90deg, #22c55e, #4ade80)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Commitment
    </span>
    <br />
    To Excellence
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
      At <strong style={{ color: "#ffffff" }}>WinXverse Technologies</strong>, our mission is to deliver high-quality, scalable, and innovative digital solutions that empower businesses to grow and succeed in a competitive digital world.
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
      We are committed to understanding our clients’ needs and transforming their ideas into reliable, efficient, and user-focused technologies that create real value.
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
      Through continuous innovation, strong teamwork, and a focus on excellence, we aim to deliver solutions that not only meet expectations but exceed them.
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
};

export default AboutFounder;