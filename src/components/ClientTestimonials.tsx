import { Quote, Star } from "lucide-react";


const testimonials = [
  {
    quote:
      "The team understood our requirements clearly and turned our ideas into a solution that was simple, reliable, and easy for our team to use.",
    name: "Arun Kumar",
    role: "Founder, Sri Lakshmi Enterprises",
    initials: "AK",
    rating: 5,
  },
  {
    quote:
      "What impressed us most was their communication. We received regular updates throughout the project and always knew what was happening.",
    name: "Kavitha Raj",
    role: "Managing Director, Greenfield Solutions",
    initials: "KR",
    rating: 5,
  },
  {
    quote:
      "They helped us move our manual business processes into a digital platform. Our team can now manage daily operations much more efficiently.",
    name: "Suresh Babu",
    role: "Director, Shree Traders",
    initials: "SB",
    rating: 5,
  },
  {
    quote:
      "From the initial discussion to the final launch, the entire development process was smooth. The application is fast, modern, and easy to manage.",
    name: "Priya Suresh",
    role: "Founder, Varnam Creations",
    initials: "PS",
    rating: 5,
  },
  {
    quote:
      "We needed a solution that could grow with our business, and the team delivered exactly that. Their support after launch has also been excellent.",
    name: "Dinesh Kumar",
    role: "CEO, TamilTech Industries",
    initials: "DK",
    rating: 5,
  },
  {
    quote:
      "They took our initial idea, understood the business requirements, and transformed it into a practical digital product that our customers could use easily.",
    name: "Meena Rajendran",
    role: "Director, Kovai Business Solutions",
    initials: "MR",
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
