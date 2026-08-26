import { Rocket, ShieldCheck, Users, Clock, Sparkles, Headphones } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast & Scalable Delivery",
    desc: "We build with future growth in mind, so your product scales smoothly as your business expands.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    desc: "Every solution is engineered with security best practices, keeping your data and users protected.",
  },
  {
    icon: Users,
    title: "Dedicated Expert Team",
    desc: "A skilled team of developers and designers works closely with you at every stage of the project.",
  },
  {
    icon: Clock,
    title: "On-Time Execution",
    desc: "We respect deadlines and deliver projects on schedule, without compromising on quality.",
  },
  {
    icon: Sparkles,
    title: "Innovative Approach",
    desc: "We combine creativity with the latest technologies to craft solutions that stand out.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Our relationship doesn't end at launch — we provide continuous support and maintenance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "60px 0",
        marginBottom:"50px",
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
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 60px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#4ade80",
              marginBottom: "14px",
            }}
          >
            Our Advantage
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
            Why{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #22c55e, #4ade80)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Choose Us
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            We go beyond writing code — we build partnerships rooted in trust,
            innovation, and results that matter.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="wcu-card"
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "34px 28px",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.35s ease",
                  overflow: "hidden",
                }}
              >
                {/* Icon Badge */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "22px",
                    background:
                      "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(74,222,128,0.08))",
                    border: "1px solid rgba(74,222,128,0.3)",
                  }}
                >
                  <Icon size={26} color="#4ade80" strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.96rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.75,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .wcu-card:hover {
          transform: translateY(-6px);
          border-color: rgba(74,222,128,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(34,197,94,0.12);
        }
      `}</style>
    </section>
  );
}
