import { Compass, PenTool, Code2, ShieldCheck, ClipboardList } from "lucide-react";

const roles = [
  { icon: Compass, title: "Strategist", desc: "Defines the direction before a single pixel is drawn." },
  { icon: PenTool, title: "Designer", desc: "Shapes an experience people actually enjoy using." },
  { icon: Code2, title: "Engineer", desc: "Builds it to work — and to keep working." },
  { icon: ShieldCheck, title: "QA Specialist", desc: "Finds the problems before your customers do." },
  { icon: ClipboardList, title: "Project Manager", desc: "Keeps everyone moving toward the same deadline." },
];

export default function BehindEverySolution() {
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
            maxWidth: "920px",
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
              color: "#93c5fd",
              marginBottom: "14px",
            }}
          >
            The Story Behind The Work
          </span>

          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Behind Every Solution
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            What you see is a finished product. Here's the team and process
            working underneath it, the whole way through.
          </p>
        </div>

        {/* ICEBERG PANEL */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* above the line — what the client sees */}
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(147,197,253,0.12), rgba(147,197,253,0.02))",
              padding: "44px 20px 40px 20px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "10px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(147,197,253,0.4)",
                background: "rgba(147,197,253,0.08)",
                color: "#bfdbfe",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              The product you see
            </span>
          </div>

          {/* waterline */}
          <div
            style={{
              position: "relative",
              height: "1px",
              background: "rgba(147,197,253,0.35)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#0a0f1a",
                padding: "0 16px",
                fontSize: "0.78rem",
                letterSpacing: "0.5px",
                color: "rgba(255,255,255,0.4)",
                whiteSpace: "nowrap",
              }}
            >
              behind every solution
            </span>
          </div>

          {/* below the line — the people and process */}
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(10,15,26,0.5), rgba(10,15,26,0.85))",
              padding: "50px 30px 56px 30px",
            }}
          >
            <div
              className="iceberg-roles"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "40px",
              }}
            >
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.title}
                    style={{
                      width: "180px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        border: "1px solid rgba(147,197,253,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px auto",
                      }}
                    >
                      <Icon size={20} color="#93c5fd" strokeWidth={1.8} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: "0 0 8px 0",
                      }}
                    >
                      {role.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.86rem",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {role.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
