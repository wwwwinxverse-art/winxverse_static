import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, CalendarClock, Award } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 240,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Clients Served",
  },
  {
    icon: CalendarClock,
    value: 9,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [start, target, duration]);

  return value;
}

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  start,
  isLast,
}: {
  icon: typeof Briefcase;
  value: number;
  suffix: string;
  label: string;
  start: boolean;
  isLast: boolean;
}) {
  const count = useCountUp(value, start);

  return (
    <div
      style={{
        flex: "1 1 220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "8px 32px",
        borderRight: isLast ? "none" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
          background: "rgba(191,138,74,0.1)",
          border: "1px solid rgba(191,138,74,0.35)",
        }}
      >
        <Icon size={22} color="#bf8a4a" strokeWidth={1.8} />
      </div>

      <div
        style={{
          fontSize: "2.6rem",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.1,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "-0.5px",
        }}
      >
        {count}
        <span style={{ color: "#bf8a4a" }}>{suffix}</span>
      </div>

      <div
        style={{
          marginTop: "10px",
          fontSize: "0.92rem",
          fontWeight: 500,
          color: "rgba(255,255,255,0.55)",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsCounters() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
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
              color: "#bf8a4a",
              marginBottom: "14px",
            }}
          >
            By The Numbers
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
            A Track Record{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #bf8a4a, #e8c791)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built On Results
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
            }}
          >
            Every number here reflects a client relationship, a shipped
            product, and a problem solved.
          </p>
        </div>

        {/* STAT BAR */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "44px 20px",
            backdropFilter: "blur(6px)",
          }}
        >
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={visible}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
