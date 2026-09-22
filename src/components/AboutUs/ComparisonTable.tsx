import { Check, X, Minus } from "lucide-react";

type CellValue = boolean | "partial";

interface ComparisonRow {
  feature: string;
  values: CellValue[];
}

const columns = ["Feature", "WinXverse", "Agency A", "Agency B"];

const rows: ComparisonRow[] = [
  {
    feature: "Dedicated project manager",
    values: [true, false, true],
  },
  {
    feature: "Fixed timelines & milestones",
    values: [true, "partial", false],
  },
  {
    feature: "Transparent pricing",
    values: [true, false, "partial"],
  },
  {
    feature: "Post-launch support included",
    values: [true, false, false],
  },
  {
    feature: "Custom-built solutions",
    values: [true, true, "partial"],
  },
  {
    feature: "24/7 client communication",
    values: [true, false, false],
  },
  {
    feature: "Source code ownership",
    values: [true, "partial", true],
  },
  {
    feature: "Scalable team on demand",
    values: [true, false, "partial"],
  },
];

interface CellProps {
  value: CellValue;
}

function Cell({ value }: CellProps) {
  if (value === true) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Check size={18} color="#a3e635" strokeWidth={2.5} />
      </div>
    );
  }

  if (value === "partial") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Minus
          size={18}
          color="rgba(255,255,255,0.35)"
          strokeWidth={2.5}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <X
        size={18}
        color="rgba(255,255,255,0.25)"
        strokeWidth={2.5}
      />
    </div>
  );
}

export default function ComparisonTable() {
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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 60px auto",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#a3e635",
              marginBottom: "14px",
            }}
          >
            Why We're Different
          </span>

          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}
          >
            How We{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #65a30d, #a3e635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Compare
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            See how WinXverse stacks up against typical agencies on the
            things that actually matter.
          </p>
        </div>

        {/* TABLE */}
        <div
          className="comp-wrapper"
          style={{
            overflowX: "auto",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "600px",
            }}
          >
            <thead>
              <tr>
                {columns.map((col, i) => {
                  const isUs = i === 1;

                  return (
                    <th
                      key={col}
                      style={{
                        textAlign: i === 0 ? "left" : "center",
                        padding: "20px 18px",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: isUs
                          ? "#0f1a08"
                          : "rgba(255,255,255,0.75)",
                        background: isUs
                          ? "linear-gradient(90deg, #84cc16, #a3e635)"
                          : "rgba(255,255,255,0.03)",
                        borderBottom:
                          "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rIndex) => (
                <tr key={row.feature}>
                  {/* Feature */}
                  <td
                    style={{
                      padding: "18px",
                      fontSize: "0.92rem",
                      color: "rgba(255,255,255,0.7)",
                      background: "rgba(255,255,255,0.015)",
                      borderBottom:
                        rIndex !== rows.length - 1
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "none",
                    }}
                  >
                    {row.feature}
                  </td>

                  {/* Values */}
                  {row.values.map((val, cIndex) => {
                    const isUs = cIndex === 0;

                    return (
                      <td
                        key={`${row.feature}-${cIndex}`}
                        style={{
                          padding: "18px",
                          background: isUs
                            ? "rgba(163,230,53,0.08)"
                            : "rgba(255,255,255,0.015)",
                          borderBottom:
                            rIndex !== rows.length - 1
                              ? "1px solid rgba(255,255,255,0.06)"
                              : "none",
                          borderLeft: isUs
                            ? "1px solid rgba(163,230,53,0.2)"
                            : "none",
                          borderRight: isUs
                            ? "1px solid rgba(163,230,53,0.2)"
                            : "none",
                        }}
                      >
                        <Cell value={val} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LEGEND */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            marginTop: "24px",
            flexWrap: "wrap",
          }}
        >
          {/* Fully included */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Check size={16} color="#a3e635" strokeWidth={2.5} />

            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Fully included
            </span>
          </div>

          {/* Partial */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Minus
              size={16}
              color="rgba(255,255,255,0.35)"
              strokeWidth={2.5}
            />

            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Partial / limited
            </span>
          </div>

          {/* Not offered */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <X
              size={16}
              color="rgba(255,255,255,0.25)"
              strokeWidth={2.5}
            />

            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Not offered
            </span>
          </div>
        </div>
      </div>

      {/* Scrollbar */}
      <style>{`
        .comp-wrapper {
          scrollbar-width: thin;
          scrollbar-color: rgba(163,230,53,0.4) transparent;
        }

        .comp-wrapper::-webkit-scrollbar {
          height: 6px;
        }

        .comp-wrapper::-webkit-scrollbar-thumb {
          background: rgba(163,230,53,0.4);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}