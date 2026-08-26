import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Understand",
    desc: "We start by listening — your goals, your users, and the constraints that matter, before a single decision gets made.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Plan",
    desc: "We turn that understanding into a clear roadmap: scope, milestones, and priorities everyone agrees on upfront.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design",
    desc: "Wireframes become real interfaces. We iterate on look, feel, and flow until it's something worth building.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Develop",
    desc: "Clean, scalable code goes in — built to match the design and hold up as the product grows.",
  },
  {
    icon: Bug,
    number: "05",
    title: "Test",
    desc: "Every flow gets stress-tested across devices and edge cases, so nothing ships that isn't ready.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Deliver",
    desc: "We launch with a clear rollout plan, keeping you informed every step from staging to production.",
  },
  {
    icon: LifeBuoy,
    number: "07",
    title: "Support",
    desc: "The relationship continues after launch — monitoring, fixes, and improvements as your needs evolve.",
  },
];

export default function OurApproach() {
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
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER */}
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
              color: "#fb923c",
              marginBottom: "14px",
            }}
          >
            Our Approach
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
            How We{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fb923c, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work With You
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Seven stages, one continuous thread — from the first
            conversation to long after launch.
          </p>
        </div>

        {/* TIMELINE */}
        <div style={{ position: "relative" }}>
          <div
            className="oa-line"
            style={{
              position: "absolute",
              left: "27px",
              top: "8px",
              bottom: "8px",
              width: "2px",
              background:
                "linear-gradient(180deg, #fb923c 0%, rgba(251,146,60,0.15) 100%)",
            }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.title}
                style={{
                  position: "relative",
                  display: "flex",
                  gap: "26px",
                  paddingBottom: isLast ? 0 : "40px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    flex: "0 0 56px",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, rgba(251,146,60,0.18), rgba(251,191,36,0.08))",
                    border: "1px solid rgba(251,146,60,0.4)",
                  }}
                >
                  <Icon size={24} color="#fb923c" strokeWidth={1.8} />
                </div>

                <div
                  className="oa-card"
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "24px 28px",
                    backdropFilter: "blur(6px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "rgba(251,146,60,0.55)",
                        letterSpacing: "1px",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#ffffff",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "0.96rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .oa-card:hover {
          border-color: rgba(251,146,60,0.4);
          background: rgba(255,255,255,0.05);
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
