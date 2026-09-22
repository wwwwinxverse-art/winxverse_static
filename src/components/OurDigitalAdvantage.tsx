import { ArrowRight } from "lucide-react";

const translations = [
  {
    tech: "Cloud-native, API-first architecture",
    value:
      "Your platform scales through a traffic spike or a new market without a costly rebuild.",
  },
  {
    tech: "Component-driven front-end systems",
    value: "New features and campaigns ship in days, not sprints of rewrites.",
  },
  {
    tech: "Automated testing and CI/CD pipelines",
    value:
      "Releases go out with confidence, and fewer bugs ever reach your customers.",
  },
  {
    tech: "Analytics wired into every interaction",
    value: "Every roadmap decision is backed by real usage data, not guesswork.",
  },
  {
    tech: "Security and compliance built in from day one",
    value: "Customer trust is protected before it's ever tested.",
  },
];

export default function OurDigitalAdvantage() {
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
        {/* HEADER — left aligned, no eyebrow, no stat panel: the table itself is the visual */}
        <div style={{ maxWidth: "640px", marginBottom: "60px" }}>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "2.6rem",
              fontWeight: 500,
              color: "#ffffff",
              lineHeight: 1.22,
              margin: "0 0 20px 0",
            }}
          >
            Technology is only an advantage when it pays off.
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            We don't choose tools because they're trendy. Every architectural
            decision is made for a business reason — and we can point to
            exactly what it unlocks for you.
          </p>
        </div>

        {/* LEDGER — column headers */}
        <div
          className="advantage-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 40px 1fr",
            gap: "24px",
            paddingBottom: "18px",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#818cf8",
            }}
          >
            The technology
          </span>
          <span />
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#fbbf24",
            }}
          >
            What it means for your business
          </span>
        </div>

        {/* LEDGER — rows */}
        <div>
          {translations.map((row, index) => (
            <div
              key={row.tech}
              className="advantage-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 40px 1fr",
                gap: "24px",
                alignItems: "center",
                padding: "30px 0",
                borderBottom:
                  index < translations.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {row.tech}
              </p>

              <div
                className="advantage-arrow"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowRight size={18} color="rgba(255,255,255,0.35)" />
              </div>

              <p
                style={{
                  fontSize: "1.02rem",
                  color: "#ffffff",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {row.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "56px" }}>
          <a
            href="#contact"
            className="advantage-cta"
            style={{
              display: "inline-block",
              padding: "13px 30px",
              borderRadius: "999px",
              border: "1px solid rgba(251,191,36,0.45)",
              color: "#fbbf24",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
          >
            Talk to our engineering team
          </a>
        </div>
      </div>

      <style>{`
        .advantage-cta:hover {
          background: rgba(251,191,36,0.1);
          border-color: rgba(251,191,36,0.8);
        }

        @media (max-width: 720px) {
          .advantage-header {
            display: none !important;
          }
          .advantage-row {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            padding: 24px 0 !important;
          }
          .advantage-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
