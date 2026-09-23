import { Search, FileText, User, FolderKanban, Settings, Sparkles, Filter, Globe2, Type } from "lucide-react";

const suggestions = [
  { icon: FileText, title: "Q3 Marketing Report", category: "Document", match: true },
  { icon: User, title: "Aisha Khan — Product Design", category: "Person" },
  { icon: FolderKanban, title: "Website Redesign Project", category: "Project" },
  { icon: Settings, title: "Notification Preferences", category: "Setting" },
];

const capabilities = [
  {
    icon: Type,
    num: "01",
    title: "Natural Language Queries",
    desc: "Search the way you'd ask a colleague — no need for exact keywords or special syntax to find what you need.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Instant Fuzzy Matching",
    desc: "Typos and partial words still return the right results, powered by intelligent relevance ranking under the hood.",
  },
  {
    icon: Filter,
    num: "03",
    title: "Smart Filters & Facets",
    desc: "Narrow results instantly by type, owner, date, or status — filters adapt automatically to what you're searching for.",
  },
  {
    icon: Globe2,
    num: "04",
    title: "Unified Cross-Platform Index",
    desc: "One search bar reaches across documents, projects, people, and settings — no more jumping between separate tools.",
  },
];

export default function IntelligentSearch() {
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
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER — centered */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 50px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#a78bfa",
              marginBottom: "14px",
            }}
          >
            Feature Spotlight
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
            Find Anything with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Intelligent Search
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            One search bar that understands what you mean, not just what you
            type — across every document, person, and project.
          </p>
        </div>

        {/* SEARCH MOCKUP */}
        <div
          className="search-glow"
          style={{
            borderRadius: "20px",
            padding: "1px",
            background: "linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.5))",
            marginBottom: "70px",
          }}
        >
          <div
            style={{
              background: "#0c0d16",
              borderRadius: "19px",
              padding: "22px",
            }}
          >
            {/* search input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                padding: "16px 20px",
                marginBottom: "16px",
              }}
            >
              <Search size={20} color="#a78bfa" strokeWidth={2} />
              <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)" }}>
                marketing repor
                <span className="type-cursor" style={{ color: "#8b5cf6" }}>|</span>
              </span>
            </div>

            {/* suggestions dropdown */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {suggestions.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: s.match ? "rgba(139,92,246,0.12)" : "transparent",
                      border: s.match
                        ? "1px solid rgba(139,92,246,0.35)"
                        : "1px solid transparent",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "34px",
                          height: "34px",
                          borderRadius: "9px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={16} color="#a78bfa" strokeWidth={1.8} />
                      </div>
                      <span style={{ fontSize: "0.92rem", color: "#ffffff", fontWeight: 500 }}>
                        {s.title}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {s.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CAPABILITIES — editorial row list */}
        <div>
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="cap-row"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                  padding: "26px 8px",
                  borderTop: index === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                  transition: "background 0.3s ease",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "transparent",
                    WebkitTextStroke: "1.2px rgba(139,92,246,0.4)",
                    minWidth: "50px",
                    fontFamily: "Georgia, serif",
                    lineHeight: 1.2,
                  }}
                >
                  {cap.num}
                </span>

                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.1))",
                    border: "1px solid rgba(167,139,250,0.3)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={19} color="#a78bfa" strokeWidth={1.8} />
                </div>

                <div style={{ flex: "1 1 280px" }}>
                  <h4
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      margin: "2px 0 8px 0",
                    }}
                  >
                    {cap.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .search-glow {
          animation: search-pulse 4s ease-in-out infinite;
        }
        @keyframes search-pulse {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(59,130,246,0.2)); }
          50% { filter: drop-shadow(0 0 26px rgba(139,92,246,0.32)); }
        }
        .type-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .cap-row:hover {
          background: rgba(139,92,246,0.04);
        }
      `}</style>
    </section>
  );
}
