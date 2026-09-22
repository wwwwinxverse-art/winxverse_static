import { Leaf, GraduationCap, HeartHandshake, Recycle } from "lucide-react";

const initiatives = [
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    desc: "We minimize our carbon footprint through green office practices, remote-first operations, and partnerships with eco-conscious vendors.",
  },
  {
    icon: GraduationCap,
    title: "Education & Skill Building",
    desc: "We run free coding workshops and mentorship programs for students and aspiring developers from underserved communities.",
  },
  {
    icon: HeartHandshake,
    title: "Community Support",
    desc: "We partner with local NGOs and volunteer regularly, contributing time and resources to causes that strengthen our community.",
  },
  {
    icon: Recycle,
    title: "Responsible Practices",
    desc: "From e-waste recycling to digital-first documentation, we build sustainability into how we operate every day.",
  },
];

const stats = [
  { value: "500+", label: "Students Mentored" },
  { value: "12", label: "NGO Partnerships" },
  { value: "3,000+", label: "Volunteer Hours" },
  { value: "100%", label: "Paperless Operations" },
];

export default function CSRInitiatives() {
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
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER — centered */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
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
              color: "#34d399",
              marginBottom: "14px",
            }}
          >
            Giving Back
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
            Our Commitment to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #059669, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              People & Planet
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Beyond building technology, we invest in the communities we serve
            and the world we all share.
          </p>
        </div>

        {/* INITIATIVE CARDS */}
        <div
          className="csr-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="csr-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "30px 24px",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    background:
                      "linear-gradient(135deg, rgba(5,150,105,0.18), rgba(52,211,153,0.08))",
                    border: "1px solid rgba(52,211,153,0.3)",
                  }}
                >
                  <Icon size={22} color="#34d399" strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* IMPACT STATS STRIP */}
        <div
          className="csr-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            background: "rgba(52,211,153,0.05)",
            border: "1px solid rgba(52,211,153,0.2)",
            borderRadius: "18px",
            padding: "36px 20px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="csr-stat"
              style={{
                textAlign: "center",
                borderRight:
                  index !== stats.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  background: "linear-gradient(90deg, #059669, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .csr-card:hover {
          transform: translateY(-6px);
          border-color: rgba(52,211,153,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(5,150,105,0.14);
        }

        @media (max-width: 900px) {
          .csr-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .csr-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .csr-stat:nth-child(2) {
            border-right: none !important;
          }
          .csr-stat:nth-child(3),
          .csr-stat:nth-child(4) {
            margin-top: 24px;
          }
        }

        @media (max-width: 540px) {
          .csr-grid {
            grid-template-columns: 1fr !important;
          }
          .csr-stats {
            grid-template-columns: 1fr !important;
          }
          .csr-stat {
            border-right: none !important;
            margin-top: 20px;
          }
          .csr-stat:first-child {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
