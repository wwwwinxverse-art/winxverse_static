import { Flag, Rocket, Building2, Globe2, Award, TrendingUp } from "lucide-react";

const milestones = [
  {
    icon: Flag,
    year: "2019",
    title: "The Beginning",
    desc: "WinXverse Technologies was founded with a small team and a big vision — to build digital solutions that matter.",
  },
  {
    icon: Rocket,
    year: "2020",
    title: "First Major Launch",
    desc: "Delivered our first enterprise-grade platform, marking our entry into large-scale digital transformation projects.",
  },
  {
    icon: Building2,
    year: "2021",
    title: "Team Expansion",
    desc: "Grew into a dedicated team of developers, designers, and strategists working across multiple domains.",
  },
  {
    icon: Globe2,
    year: "2022",
    title: "Global Clients",
    desc: "Started serving clients beyond borders, bringing our solutions to businesses across new markets.",
  },
  {
    icon: Award,
    year: "2023",
    title: "Recognized Excellence",
    desc: "Earned recognition for quality and innovation, strengthening trust with clients and partners alike.",
  },
  {
    icon: TrendingUp,
    year: "2025",
    title: "Scaling New Heights",
    desc: "Continuing to innovate and grow, powering more businesses with future-ready technology.",
  },
];

export default function OurJourney() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "80px 0",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER — centered */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 80px auto",
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
            Milestones
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
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a855f7, #e879f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            From a small idea to a growing technology partner — here's how
            far we've come, year by year.
          </p>
        </div>

        {/* TIMELINE — alternating vertical */}
        <div style={{ position: "relative" }}>
          {/* center line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              background:
                "linear-gradient(180deg, transparent, rgba(168,85,247,0.5) 8%, rgba(168,85,247,0.5) 92%, transparent)",
            }}
          />

          {milestones.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="tl-row"
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  position: "relative",
                  marginBottom: "56px",
                }}
              >
                {/* center node */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "6px",
                    transform: "translateX(-50%)",
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "#140a24",
                    border: "2px solid #a855f7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    boxShadow: "0 0 18px rgba(168,85,247,0.45)",
                  }}
                >
                  <Icon size={20} color="#e879f9" strokeWidth={1.8} />
                </div>

                {/* card */}
                <div
                  className="tl-card"
                  style={{
                    width: "44%",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "26px 28px",
                    backdropFilter: "blur(6px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#e879f9",
                      letterSpacing: "0.5px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.year}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tl-card:hover {
          border-color: rgba(168,85,247,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 10px 26px rgba(168,85,247,0.15);
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 24px !important;
          }
          .tl-row {
            justify-content: flex-start !important;
            padding-left: 60px;
          }
          .tl-row > div[style*="position: absolute"] {
            left: 24px !important;
          }
          .tl-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
