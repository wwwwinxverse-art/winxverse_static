import { Lightbulb, ShieldCheck, Trophy, Handshake } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Innovation",
    desc: "We embrace new ideas and technologies, constantly exploring smarter ways to solve real problems.",
  },
  {
    icon: ShieldCheck,
    num: "02",
    title: "Integrity",
    desc: "We operate with honesty and transparency, building trust through every interaction and decision.",
  },
  {
    icon: Trophy,
    num: "03",
    title: "Excellence",
    desc: "We hold ourselves to the highest standards, delivering quality that exceeds expectations every time.",
  },
  {
    icon: Handshake,
    num: "04",
    title: "Collaboration",
    desc: "We work closely with our clients and each other, believing great results come from true partnership.",
  },
];

export default function CoreValues() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "80vh",
        marginTop:"60px",
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
        {/* HEADER — left aligned, editorial */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "70px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: "36px",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#d4a24e",
                marginBottom: "14px",
              }}
            >
              What Drives Us
            </span>

            <h2
              style={{
                fontSize: "2.6rem",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Our Core Values
            </h2>
          </div>

          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              maxWidth: "380px",
              margin: 0,
            }}
          >
            The four principles that guide every decision we make and every
            solution we build — for our clients and for each other.
          </p>
        </div>

        {/* VALUES — editorial row list, no boxes */}
        <div>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="value-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                  padding: "38px 12px",
                  borderTop:
                    index === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                  transition: "background 0.3s ease",
                  flexWrap: "wrap",
                }}
              >
                {/* Ghost number */}
                <div
                  style={{
                    fontSize: "3.2rem",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(212,162,78,0.4)",
                    minWidth: "90px",
                    lineHeight: 1,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {value.num}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(212,162,78,0.08)",
                    border: "1px solid rgba(212,162,78,0.35)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color="#d4a24e" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    minWidth: "200px",
                    margin: 0,
                  }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.8,
                    flex: "1 1 320px",
                    margin: 0,
                  }}
                >
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .value-row:hover {
          background: rgba(212,162,78,0.04);
        }
      `}</style>
    </section>
  );
}
