import { FlaskConical, Layers, Sparkles, Zap, Lightbulb } from "lucide-react";

const notes = [
  {
    icon: FlaskConical,
    title: "Experimental projects",
    desc: "Half-finished builds and weird ideas that never made it to a client site — but taught us something anyway.",
    color: "#f472b6",
    rotate: "-3deg",
  },
  {
    icon: Layers,
    title: "Prototypes",
    desc: "Interactive proofs-of-concept we spin up in days, to test an idea before anyone commits real budget.",
    color: "#5eead4",
    rotate: "2deg",
  },
  {
    icon: Sparkles,
    title: "AI experiments",
    desc: "Small tools built on the latest models, just to see what's actually possible right now.",
    color: "#a78bfa",
    rotate: "-1.5deg",
  },
  {
    icon: Zap,
    title: "New technologies",
    desc: "We break new frameworks and APIs on our own time, before they ever touch production work.",
    color: "#fbbf24",
    rotate: "3.5deg",
  },
  {
    icon: Lightbulb,
    title: "Internal innovations",
    desc: "Tools we built for ourselves first, because we felt the pain before our clients ever did.",
    color: "#10b981",
    rotate: "-2.5deg",
  },
];

export default function OurPlayground() {
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
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto 56px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "14px",
            }}
          >
            Not Every Project Ships
          </span>

          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              marginBottom: "16px",
              lineHeight: 1.2,
              background:
                "linear-gradient(90deg, #f472b6, #a78bfa, #5eead4, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Playground
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Some things we build purely because we wanted to see if we could.
            This is where those ideas live.
          </p>
        </div>

        {/* CORKBOARD */}
        <div
          className="playground-board"
          style={{
            position: "relative",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            padding: "56px 40px",
          }}
        >
          <div
            className="playground-notes"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "26px",
            }}
          >
            {notes.map((note) => {
              const Icon = note.icon;
              return (
                <div
                  key={note.title}
                  className="playground-note"
                  style={{
                    position: "relative",
                    width: "220px",
                    background: `${note.color}14`,
                    border: `1px solid ${note.color}4D`,
                    borderRadius: "4px 4px 14px 14px",
                    padding: "26px 20px 22px 20px",
                    transform: `rotate(${note.rotate})`,
                    transition: "transform 0.25s ease",
                  }}
                >
                  {/* pin */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-7px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      background: note.color,
                      boxShadow: `0 2px 6px ${note.color}88`,
                    }}
                  />

                  <Icon size={22} color={note.color} strokeWidth={1.8} />

                  <h3
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "14px 0 8px 0",
                    }}
                  >
                    {note.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {note.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .playground-note:hover {
          transform: rotate(0deg) translateY(-4px) !important;
        }

        @media (max-width: 640px) {
          .playground-board {
            padding: 40px 20px !important;
          }
          .playground-note {
            width: 100% !important;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}
