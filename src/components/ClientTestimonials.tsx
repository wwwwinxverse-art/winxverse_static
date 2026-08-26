import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They didn't just build what we asked for — they questioned our assumptions and delivered something better than the brief.",
    name: "Priya Nair",
    role: "Founder, Studio Loom",
    initials: "PN",
    rating: 5,
  },
  {
    quote:
      "Communication was constant and honest. We always knew exactly where the project stood, even when timelines shifted.",
    name: "Daniel Cho",
    role: "Head of Product, Fennel",
    initials: "DC",
    rating: 5,
  },
  {
    quote:
      "Our platform now handles 4x the traffic without breaking a sweat. The architecture decisions made early on are still paying off.",
    name: "Amara Obi",
    role: "CTO, Northwind Retail",
    initials: "AO",
    rating: 5,
  },
  {
    quote:
      "Launch day was the calmest day of the whole project — which tells you everything about how well it was engineered.",
    name: "Marcus Reyes",
    role: "COO, Harbor & Co.",
    initials: "MR",
    rating: 5,
  },
  {
    quote:
      "Six months post-launch and they're still the first call we make when something needs fixing or building. That kind of trust isn't common.",
    name: "Elena Vasquez",
    role: "Founder, Pale Fire",
    initials: "EV",
    rating: 5,
  },
  {
    quote:
      "They translated a messy, half-formed idea into a product our users actually understand on the first try.",
    name: "Tomasz Wik",
    role: "VP Engineering, Cursive",
    initials: "TW",
    rating: 5,
  },
];

const loopTestimonials = [...testimonials, ...testimonials];

export default function ClientTestimonials() {
  return (
    <section
      style={{
        width: "100%",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "70px 0",
        marginBottom: "50px",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 56px auto",
          padding: "0 30px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.85rem",
            fontWeight: 600,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#c9a94d",
            marginBottom: "14px",
          }}
        >
          Client Testimonials
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
          Words From{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #8b5cf6, #c9a94d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Clients
          </span>
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8,
          }}
        >
          Real feedback from the founders and teams we've partnered with to
          design, build, and ship products that last.
        </p>
      </div>

      {/* AUTOSCROLL TRACK */}
      <div
        className="ct-viewport"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="ct-track">
          {loopTestimonials.map((t, index) => (
            <div
              key={index}
              className="ct-card"
              style={{
                position: "relative",
                flex: "0 0 auto",
                width: "360px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                padding: "32px 28px",
                backdropFilter: "blur(6px)",
                transition: "all 0.35s ease",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(201,169,77,0.12))",
                  border: "1px solid rgba(139,92,246,0.35)",
                }}
              >
                <Quote size={22} color="#c9a94d" strokeWidth={1.8} />
              </div>

              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    color="#c9a94d"
                    fill="#c9a94d"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.75,
                  marginBottom: "26px",
                  minHeight: "115px",
                }}
              >
                “{t.quote}”
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#0f0a1a",
                    background: "linear-gradient(135deg, #c9a94d, #8b5cf6)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ct-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: ct-scroll 38s linear infinite;
        }
        .ct-viewport:hover .ct-track {
          animation-play-state: paused;
        }
        .ct-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,169,77,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 12px 30px rgba(139,92,246,0.15);
        }
        @keyframes ct-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ct-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
