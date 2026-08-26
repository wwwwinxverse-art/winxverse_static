import {
  Layers,
  Component,
  Atom,
  Flame,
  Database,
  Cloud,
  Bot,
  Tablet,
  Triangle,
  Network,
  Github,
  Rocket,
  Smartphone,
  Braces,
  Code,
  Hexagon,
  Boxes,
  Container,
  Server,
  Globe,
  Zap,
  GitBranch,
} from "lucide-react";

const technologies = [
  { icon: Layers, name: ".NET MAUI", category: "Cross-Platform" },
  { icon: Component, name: "Angular", category: "Frontend" },
  { icon: Atom, name: "React", category: "Frontend" },
  { icon: Boxes, name: "Vue.js", category: "Frontend" },
  { icon: Triangle, name: "Next.js", category: "Frontend" },
  { icon: Braces, name: "TypeScript", category: "Language" },
  { icon: Code, name: "JavaScript", category: "Language" },
  { icon: Hexagon, name: "Node.js", category: "Backend" },
  { icon: Flame, name: "Laravel", category: "Backend" },
  { icon: Network, name: ".NET Core API", category: "Backend" },
  { icon: Database, name: "MySQL", category: "Database" },
  { icon: Database, name: "PostgreSQL", category: "Database" },
  { icon: Database, name: "MongoDB", category: "Database" },
  { icon: Zap, name: "Redis", category: "Database" },
  { icon: Cloud, name: "Cloud", category: "Infrastructure" },
  { icon: Server, name: "AWS", category: "Infrastructure" },
  { icon: Globe, name: "Azure", category: "Infrastructure" },
  { icon: Container, name: "Docker", category: "DevOps" },
  { icon: GitBranch, name: "CI/CD", category: "DevOps" },
  { icon: Rocket, name: "Deployment", category: "DevOps" },
  { icon: Github, name: "GitHub", category: "Version Control" },
  { icon: Bot, name: "AI", category: "Intelligence" },
  { icon: Tablet, name: "React Native", category: "Mobile" },
  { icon: Smartphone, name: "Mobile Development", category: "Mobile" },
];

export default function TechnologyExpertise() {
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
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
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
              color: "#38bdf8",
              marginBottom: "14px",
            }}
          >
            Technology & Expertise
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
            Built With The{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Right Tools
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            A stack chosen for reliability and reach — from mobile apps to
            cloud infrastructure to AI-powered features.
          </p>
        </div>

        {/* TECH GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
            gap: "20px",
          }}
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="te-card"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "20px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    flex: "0 0 44px",
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(129,140,248,0.1))",
                    border: "1px solid rgba(56,189,248,0.3)",
                  }}
                >
                  <Icon size={21} color="#38bdf8" strokeWidth={1.8} />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "3px",
                    }}
                  >
                    {tech.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                    }}
                  >
                    {tech.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .te-card:hover {
          transform: translateY(-4px);
          border-color: rgba(56,189,248,0.4);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 10px 26px rgba(56,189,248,0.12);
        }
      `}</style>
    </section>
  );
}