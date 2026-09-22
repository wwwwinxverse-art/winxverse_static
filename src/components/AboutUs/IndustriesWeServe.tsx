import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Truck,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Secure, compliant digital solutions for providers, clinics, and health-tech platforms.",
    solutions: [
      "Patient portals & telehealth apps",
      "HIPAA-compliant data systems",
      "Appointment & records management",
    ],
  },
  {
    icon: Landmark,
    title: "FinTech",
    desc: "Robust platforms for banking, payments, and financial analytics at scale.",
    solutions: [
      "Real-time transaction dashboards",
      "Fraud detection & risk analytics",
      "Secure payment gateway integration",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "High-converting storefronts built to handle traffic spikes and scale with demand.",
    solutions: [
      "Headless commerce architecture",
      "Inventory & order management",
      "Personalized shopping experiences",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Engaging learning platforms that work everywhere, even with limited connectivity.",
    solutions: [
      "LMS & course delivery platforms",
      "Offline-first mobile learning apps",
      "Student progress analytics",
    ],
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Real-time visibility and automation across supply chains and delivery networks.",
    solutions: [
      "Fleet & route optimization tools",
      "Live shipment tracking systems",
      "Warehouse management dashboards",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Digital platforms that simplify property discovery, listing, and transactions.",
    solutions: [
      "Property listing & search platforms",
      "Virtual tour integrations",
      "CRM for agents & brokers",
    ],
  },
];

export default function IndustriesWeServe() {
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
              color: "#22d3ee",
              marginBottom: "14px",
            }}
          >
            Where We Deliver Value
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
            Industries We{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0891b2, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Serve
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            We bring deep, cross-industry expertise to every project — tailoring
            our approach to the unique demands of your sector.
          </p>
        </div>

        {/* INDUSTRY GRID */}
        <div
          className="ind-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "26px",
          }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="ind-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "22px",
                    background:
                      "linear-gradient(135deg, rgba(8,145,178,0.18), rgba(34,211,238,0.08))",
                    border: "1px solid rgba(34,211,238,0.3)",
                  }}
                >
                  <Icon size={24} color="#22d3ee" strokeWidth={1.8} />
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "10px",
                  }}
                >
                  {industry.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.94rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.75,
                    marginBottom: "22px",
                  }}
                >
                  {industry.desc}
                </p>

                {/* solutions list */}
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {industry.solutions.map((sol, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.86rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: "#22d3ee",
                          marginTop: "7px",
                          flexShrink: 0,
                        }}
                      />
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .ind-card:hover {
          transform: translateY(-6px);
          border-color: rgba(34,211,238,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(8,145,178,0.14);
        }

        @media (max-width: 900px) {
          .ind-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 560px) {
          .ind-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
