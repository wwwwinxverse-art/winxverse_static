import { Gauge, FileText, Link2, MapPin, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Gauge,
    title: "Technical SEO",
    desc: "We fix what's slowing you down: site speed, crawlability, structured data, and mobile performance — the foundation search engines actually reward.",
    metric: "90+",
    metricLabel: "Core Web Vitals",
  },
  {
    icon: FileText,
    title: "Content & Keywords",
    desc: "We research what your customers are actually typing into Google, then build pages and articles that answer those questions better than anyone else.",
    metric: "3.2×",
    metricLabel: "organic traffic",
  },
  {
    icon: Link2,
    title: "Link Building & Authority",
    desc: "We earn backlinks from sites your industry already trusts, building the domain authority that pushes you past competitors in the results.",
    metric: "+140",
    metricLabel: "referring domains",
  },
  {
    icon: MapPin,
    title: "Local & On-Page SEO",
    desc: "We optimize your Google Business Profile, local citations, and on-page signals so you show up when nearby customers are ready to buy.",
    metric: "Top 3",
    metricLabel: "local pack rank",
  },
];

const strip = [
  { value: "68%", label: "avg. lift in organic sessions, 6 months" },
  { value: "#1–3", label: "average position for target keywords" },
  { value: "4.2 mo", label: "average time to a page-one ranking" },
];

export default function OurSEOApproach() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "90px 0",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 30px" }}>
        {/* HERO ROW — headline vs. stat panel */}
        <div
          className="seo-hero"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "56px",
            alignItems: "center",
            paddingBottom: "72px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "64px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "2.9rem",
                fontWeight: 500,
                color: "#ffffff",
                lineHeight: 1.18,
                margin: "0 0 22px 0",
                maxWidth: "540px",
              }}
            >
              Search is where trust begins.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                maxWidth: "460px",
                margin: 0,
              }}
            >
              We build SEO strategy around real search behavior — not
              guesswork — so your business shows up exactly when people are
              ready to buy, not just when they're browsing.
            </p>
          </div>

          {/* stat panel with sparkline */}
          <div
            style={{
              border: "1px solid rgba(94,234,212,0.25)",
              borderRadius: "18px",
              padding: "30px 28px",
              background: "rgba(94,234,212,0.05)",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "3.4rem",
                fontWeight: 500,
                color: "#5eead4",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              3.2×
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(255,255,255,0.55)",
                margin: "0 0 20px 0",
                lineHeight: 1.6,
              }}
            >
              average organic traffic growth within six months of launch
            </p>
            <svg
              viewBox="0 0 220 56"
              width="100%"
              height="56"
              style={{ display: "block" }}
            >
              <polyline
                points="0,48 30,44 60,46 90,34 120,36 150,20 180,22 220,6"
                fill="none"
                stroke="#5eead4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="220" cy="6" r="4" fill="#5eead4" />
            </svg>
          </div>
        </div>

        {/* PILLARS — alternating rows, not a card grid */}
        <div>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const reversed = index % 2 === 1;
            return (
              <div
                key={pillar.title}
                className="seo-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: reversed
                    ? "auto 1fr auto"
                    : "auto 1fr auto",
                  alignItems: "center",
                  gap: "28px",
                  padding: "34px 0",
                  borderBottom:
                    index < pillars.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: "1px solid rgba(94,234,212,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="#5eead4" strokeWidth={1.8} />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                      margin: 0,
                      maxWidth: "620px",
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>

                <div
                  className="seo-metric"
                  style={{
                    textAlign: "right",
                    flexShrink: 0,
                    minWidth: "120px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "1.6rem",
                      color: "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    {pillar.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.45)",
                      marginTop: "6px",
                    }}
                  >
                    {pillar.metricLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RESULTS STRIP */}
        <div
          className="seo-strip"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            marginTop: "64px",
          }}
        >
          {strip.map((item, i) => (
            <div
              key={item.label}
              style={{
                textAlign: "center",
                padding: "0 24px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "1.9rem",
                  color: "#5eead4",
                  marginBottom: "8px",
                }}
              >
                {item.value}
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "56px",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.98rem",
              fontWeight: 600,
              color: "#5eead4",
              textDecoration: "none",
              borderBottom: "1px solid rgba(94,234,212,0.4)",
              paddingBottom: "3px",
            }}
          >
            Get a free SEO audit
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .seo-row:hover .seo-metric {
          color: #5eead4;
        }

        @media (max-width: 860px) {
          .seo-hero {
            grid-template-columns: 1fr !important;
          }
          .seo-row {
            grid-template-columns: auto 1fr !important;
          }
          .seo-metric {
            display: none;
          }
          .seo-strip {
            grid-template-columns: 1fr !important;
            gap: 28px;
          }
          .seo-strip > div {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 24px !important;
          }
          .seo-strip > div:first-child {
            border-top: none;
          }
        }
      `}</style>
    </section>
  );
}
