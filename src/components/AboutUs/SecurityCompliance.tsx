import { ShieldCheck, Lock, FileCheck2, Globe2, KeyRound, Server } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO 27001",
    desc: "Certified information security management system, ensuring rigorous controls over data confidentiality, integrity, and availability.",
  },
  {
    icon: Globe2,
    title: "GDPR Compliant",
    desc: "Full compliance with EU data protection regulations, giving your users control and transparency over their personal data.",
  },
  {
    icon: FileCheck2,
    title: "SOC 2 Type II",
    desc: "Independently audited controls for security, availability, and confidentiality across all client-facing systems.",
  },
  {
    icon: Lock,
    title: "PCI DSS",
    desc: "Payment card industry standards followed for any system that stores, processes, or transmits cardholder data.",
  },
  {
    icon: KeyRound,
    title: "Data Encryption",
    desc: "End-to-end encryption at rest and in transit, using industry-standard AES-256 and TLS 1.3 protocols.",
  },
  {
    icon: Server,
    title: "99.9% Uptime SLA",
    desc: "Redundant infrastructure and proactive monitoring to guarantee reliable, always-available service.",
  },
];

export default function SecurityCompliance() {
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
              color: "#38bdf8",
              marginBottom: "14px",
            }}
          >
            Built on Trust
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
            Security &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0284c7, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Compliance
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            We hold ourselves to strict security and regulatory standards, so
            you can trust us with what matters most — your data.
          </p>
        </div>

        {/* CERTIFICATION GRID */}
        <div
          className="sec-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="sec-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "30px 26px",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  gap: "18px",
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
                    background:
                      "linear-gradient(135deg, rgba(2,132,199,0.18), rgba(56,189,248,0.08))",
                    border: "1px solid rgba(56,189,248,0.3)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color="#38bdf8" strokeWidth={1.8} />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "8px",
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {cert.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* TRUST STATEMENT BAR */}
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            padding: "28px",
            borderRadius: "16px",
            background: "rgba(56,189,248,0.05)",
            border: "1px solid rgba(56,189,248,0.2)",
          }}
        >
          <p
            style={{
              fontSize: "0.98rem",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Have a security questionnaire or need our compliance
            documentation?{" "}
            <a
              href="#"
              style={{
                color: "#38bdf8",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Get in touch with our team →
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .sec-card:hover {
          transform: translateY(-6px);
          border-color: rgba(56,189,248,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(2,132,199,0.14);
        }

        @media (max-width: 900px) {
          .sec-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 560px) {
          .sec-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
