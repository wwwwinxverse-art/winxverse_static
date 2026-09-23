import {
  Building2,
  Database,
  ShieldCheck,
  Users,
  Settings2,
  CheckCircle2,
  ArrowRight,
  LockKeyhole,
} from "lucide-react";

const tenants = [
  {
    name: "Tenant Alpha",
    users: "248 Users",
    color: "#3b82f6",
  },
  {
    name: "Tenant Beta",
    users: "164 Users",
    color: "#8b5cf6",
  },
  {
    name: "Tenant Gamma",
    users: "392 Users",
    color: "#10b981",
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Isolated & Secure",
    description: "Tenant data remains logically separated.",
  },
  {
    icon: Database,
    title: "Shared Infrastructure",
    description: "One platform serves multiple organizations.",
  },
  {
    icon: Settings2,
    title: "Custom Configuration",
    description: "Each tenant can have its own settings.",
  },
  {
    icon: Users,
    title: "Built to Scale",
    description: "Add organizations without duplicating systems.",
  },
];

export default function MultiTenantArchitecture() {
  return (
    <section className="multi-tenant-section">
      <div className="multi-tenant-container">

        {/* ================= HEADER ================= */}

        <div className="architecture-header">

          <div className="architecture-badge">
            <Building2 size={15} />
            SaaS Architecture
          </div>

          <h2>
            One Platform.
            <span>Multiple Organizations.</span>
          </h2>

          <p>
            A secure multi-tenant architecture allows multiple organizations
            to operate independently while sharing the same application
            infrastructure.
          </p>

        </div>

        {/* ================= ARCHITECTURE ================= */}

        <div className="architecture">

          {/* LEFT SIDE */}

          <div className="architecture-side">

            <div className="side-label">
              TENANT ACCESS
            </div>

            <div className="side-title">
              Independent
              <strong>Workspaces</strong>
            </div>

            <p>
              Every organization gets its own secure environment,
              users, permissions and configuration.
            </p>

            <div className="side-checks">

              <div>
                <CheckCircle2 size={17} />
                <span>Separate tenant context</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Role-based access</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Custom configuration</span>
              </div>

            </div>

          </div>

          {/* CENTER PLATFORM */}

          <div className="platform-area">

            <div className="connection-line line-top" />
            <div className="connection-line line-middle" />
            <div className="connection-line line-bottom" />

            <div className="platform-card">

              <div className="platform-glow" />

              <div className="platform-icon">
                <Building2 size={30} />
              </div>

              <div className="platform-content">

                <span>
                  SHARED PLATFORM
                </span>

                <h3>
                  Multi-Tenant
                  <br />
                  Application
                </h3>

                <p>
                  One application layer,
                  many isolated tenants.
                </p>

              </div>

              <div className="platform-status">
                <span />
                Infrastructure Online
              </div>

            </div>

          </div>

          {/* RIGHT TENANTS */}

          <div className="tenant-area">

            <div className="tenant-heading">
              <span>ORGANIZATIONS</span>
              <small>3 active tenants</small>
            </div>

            <div className="tenant-list">

              {tenants.map((tenant, index) => (
                <div
                  className="tenant-item"
                  key={tenant.name}
                  style={
                    {
                      "--tenant-color": tenant.color,
                    } as React.CSSProperties
                  }
                >

                  <div className="tenant-number">
                    0{index + 1}
                  </div>

                  <div className="tenant-icon">
                    <Building2 size={18} />
                  </div>

                  <div className="tenant-info">

                    <strong>
                      {tenant.name}
                    </strong>

                    <span>
                      {tenant.users}
                    </span>

                  </div>

                  <div className="tenant-lock">
                    <LockKeyhole size={15} />
                  </div>

                  <ArrowRight
                    size={16}
                    className="tenant-arrow"
                  />

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* ================= DATA LAYER ================= */}

        <div className="data-layer">

          <div className="data-layer-header">

            <div>
              <span>
                DATA & SECURITY LAYER
              </span>

              <h3>
                Shared infrastructure,
                <strong> isolated data.</strong>
              </h3>
            </div>

            <div className="data-badge">
              <ShieldCheck size={16} />
              Tenant Isolation Enabled
            </div>

          </div>

          <div className="data-flow">

            <div className="data-node">
              <div className="data-node-icon">
                <Database size={20} />
              </div>

              <div>
                <strong>Database Layer</strong>
                <span>Tenant-aware data access</span>
              </div>
            </div>

            <div className="flow-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="data-node">
              <div className="data-node-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Security Layer</strong>
                <span>Context & access isolation</span>
              </div>
            </div>

            <div className="flow-arrow">
              <ArrowRight size={18} />
            </div>

            <div className="data-node">
              <div className="data-node-icon">
                <Settings2 size={20} />
              </div>

              <div>
                <strong>Configuration</strong>
                <span>Tenant-specific settings</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= CAPABILITIES ================= */}

        <div className="capabilities">

          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="capability"
                key={item.title}
              >

                <div className="capability-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================================
           SECTION
        ========================================= */

        .multi-tenant-section {
          width: 100%;
          min-height: 90vh;

          padding: 100px 30px;

          font-family:
            "Segoe UI",
            Inter,
            sans-serif;

          color: #ffffff;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(59,130,246,0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 70%,
              rgba(16,185,129,0.07),
              transparent 30%
            );
        }

        .multi-tenant-container {
          max-width: 1250px;
          margin: auto;
        }

        /* =========================================
           HEADER
        ========================================= */

        .architecture-header {
          max-width: 760px;
          margin: 0 auto 75px;
          text-align: center;
        }

        .architecture-badge {
          display: inline-flex;

          align-items: center;
          gap: 8px;

          padding: 8px 14px;

          border-radius: 30px;

          border:
            1px solid
            rgba(59,130,246,0.22);

          background:
            rgba(59,130,246,0.08);

          color: #60a5fa;

          font-size: 0.72rem;
          font-weight: 700;

          letter-spacing: 1.3px;

          text-transform: uppercase;

          margin-bottom: 24px;
        }

        .architecture-header h2 {
          margin: 0 0 22px;

          font-size:
            clamp(2.5rem, 5vw, 4rem);

          line-height: 1.08;

          letter-spacing: -2px;

          font-weight: 800;
        }

        .architecture-header h2 span {
          display: block;

          background:
            linear-gradient(
              90deg,
              #60a5fa,
              #34d399
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .architecture-header p {
          max-width: 680px;
          margin: auto;

          color:
            rgba(255,255,255,0.56);

          font-size: 1rem;

          line-height: 1.8;
        }

        /* =========================================
           MAIN ARCHITECTURE
        ========================================= */

        .architecture {

          display: grid;

          grid-template-columns:
            1fr
            1.15fr
            1.25fr;

          gap: 45px;

          align-items: center;

          min-height: 390px;

          padding:
            45px 40px;

          border-radius: 28px;

          background:
            rgba(15,23,42,0.72);

          border:
            1px solid
            rgba(255,255,255,0.08);

          box-shadow:
            0 25px 80px
            rgba(0,0,0,0.22);

          backdrop-filter: blur(20px);
        }

        /* =========================================
           LEFT
        ========================================= */

        .architecture-side {
          padding: 10px;
        }

        .side-label {
          font-size: 0.65rem;

          letter-spacing: 1.7px;

          font-weight: 700;

          color: #60a5fa;

          margin-bottom: 15px;
        }

        .side-title {
          font-size: 2rem;

          line-height: 1.15;

          font-weight: 700;

          margin-bottom: 18px;
        }

        .side-title strong {
          display: block;

          color: #34d399;
        }

        .architecture-side > p {
          color:
            rgba(255,255,255,0.5);

          font-size: 0.88rem;

          line-height: 1.7;

          margin-bottom: 25px;
        }

        .side-checks {
          display: flex;

          flex-direction: column;

          gap: 13px;
        }

        .side-checks div {
          display: flex;

          align-items: center;

          gap: 9px;

          color:
            rgba(255,255,255,0.7);

          font-size: 0.8rem;
        }

        .side-checks svg {
          color: #34d399;
        }

        /* =========================================
           PLATFORM
        ========================================= */

        .platform-area {
          position: relative;

          display: flex;

          justify-content: center;

          align-items: center;

          min-height: 300px;
        }

        .platform-card {
          position: relative;

          width: 245px;
          min-height: 245px;

          padding: 30px;

          display: flex;

          flex-direction: column;

          justify-content: space-between;

          border-radius: 26px;

          background:
            linear-gradient(
              145deg,
              rgba(30,41,59,0.98),
              rgba(15,23,42,0.98)
            );

          border:
            1px solid
            rgba(96,165,250,0.3);

          box-shadow:
            0 0 0 1px
            rgba(16,185,129,0.04),

            0 20px 60px
            rgba(0,0,0,0.4);
        }

        .platform-glow {
          position: absolute;

          width: 130px;
          height: 130px;

          top: -35px;
          left: 50%;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background:
            rgba(59,130,246,0.18);

          filter: blur(45px);

          pointer-events: none;
        }

        .platform-icon {
          position: relative;

          width: 55px;
          height: 55px;

          border-radius: 15px;

          display: flex;

          align-items: center;
          justify-content: center;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #10b981
            );

          box-shadow:
            0 10px 30px
            rgba(59,130,246,0.3);
        }

        .platform-content {
          position: relative;
        }

        .platform-content span {
          font-size: 0.58rem;

          letter-spacing: 1.5px;

          color:
            rgba(255,255,255,0.38);

          font-weight: 700;
        }

        .platform-content h3 {
          margin:
            7px 0 8px;

          font-size: 1.35rem;

          line-height: 1.15;
        }

        .platform-content p {
          margin: 0;

          font-size: 0.72rem;

          line-height: 1.5;

          color:
            rgba(255,255,255,0.45);
        }

        .platform-status {
          display: flex;

          align-items: center;

          gap: 7px;

          font-size: 0.65rem;

          color:
            rgba(255,255,255,0.48);
        }

        .platform-status span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #34d399;

          box-shadow:
            0 0 10px
            rgba(52,211,153,0.7);
        }

        /* =========================================
           CONNECTION LINES
        ========================================= */

        .connection-line {
          position: absolute;

          height: 1px;

          width: 90px;

          left: -25px;

          border-top:
            1px dashed
            rgba(96,165,250,0.35);
        }

        .line-top {
          top: 28%;
        }

        .line-middle {
          top: 50%;
        }

        .line-bottom {
          top: 72%;
        }

        /* =========================================
           TENANTS
        ========================================= */

        .tenant-area {
          padding-left: 15px;
        }

        .tenant-heading {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-bottom: 17px;
        }

        .tenant-heading span {
          font-size: 0.65rem;

          letter-spacing: 1.5px;

          font-weight: 700;

          color:
            rgba(255,255,255,0.42);
        }

        .tenant-heading small {
          font-size: 0.65rem;

          color:
            rgba(52,211,153,0.8);
        }

        .tenant-list {
          display: flex;

          flex-direction: column;

          gap: 10px;
        }

        .tenant-item {
          position: relative;

          display: flex;

          align-items: center;

          gap: 12px;

          padding: 13px 14px;

          border-radius: 13px;

          background:
            rgba(255,255,255,0.035);

          border:
            1px solid
            rgba(255,255,255,0.07);

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .tenant-item:hover {
          transform: translateX(5px);

          background:
            rgba(255,255,255,0.06);

          border-color:
            var(--tenant-color);
        }

        .tenant-number {
          width: 22px;

          color:
            rgba(255,255,255,0.25);

          font-size: 0.62rem;

          font-weight: 700;
        }

        .tenant-icon {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          color:
            var(--tenant-color);

          background:
            color-mix(
              in srgb,
              var(--tenant-color) 10%,
              transparent
            );
        }

        .tenant-info {
          flex: 1;

          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .tenant-info strong {
          font-size: 0.82rem;
        }

        .tenant-info span {
          font-size: 0.65rem;

          color:
            rgba(255,255,255,0.38);
        }

        .tenant-lock {
          color:
            rgba(52,211,153,0.65);
        }

        .tenant-arrow {
          color:
            rgba(255,255,255,0.25);
        }

        /* =========================================
           DATA LAYER
        ========================================= */

        .data-layer {
          margin-top: 25px;

          padding: 30px 35px;

          border-radius: 22px;

          background:
            rgba(15,23,42,0.55);

          border:
            1px solid
            rgba(255,255,255,0.07);
        }

        .data-layer-header {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 30px;

          margin-bottom: 25px;
        }

        .data-layer-header > div:first-child span {
          font-size: 0.62rem;

          letter-spacing: 1.5px;

          color:
            rgba(255,255,255,0.35);

          font-weight: 700;
        }

        .data-layer-header h3 {
          margin: 7px 0 0;

          font-size: 1.1rem;

          font-weight: 600;
        }

        .data-layer-header h3 strong {
          color: #34d399;
        }

        .data-badge {
          display: flex;

          align-items: center;

          gap: 8px;

          padding: 8px 12px;

          border-radius: 8px;

          background:
            rgba(52,211,153,0.08);

          border:
            1px solid
            rgba(52,211,153,0.16);

          color: #6ee7b7;

          font-size: 0.67rem;

          white-space: nowrap;
        }

        .data-flow {
          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr
            auto
            1fr;

          align-items: center;

          gap: 18px;
        }

        .data-node {
          display: flex;

          align-items: center;

          gap: 13px;

          padding: 15px;

          border-radius: 12px;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.06);
        }

        .data-node-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 9px;

          color: #60a5fa;

          background:
            rgba(59,130,246,0.08);
        }

        .data-node div:last-child {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .data-node strong {
          font-size: 0.78rem;
        }

        .data-node span {
          font-size: 0.62rem;

          color:
            rgba(255,255,255,0.35);
        }

        .flow-arrow {
          color:
            rgba(255,255,255,0.2);
        }

        /* =========================================
           CAPABILITIES
        ========================================= */

        .capabilities {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 15px;

          margin-top: 25px;
        }

        .capability {
          display: flex;

          gap: 13px;

          padding: 20px;

          border-radius: 15px;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.06);

          transition:
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .capability:hover {
          transform: translateY(-3px);

          border-color:
            rgba(52,211,153,0.25);
        }

        .capability-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          color: #34d399;

          background:
            rgba(52,211,153,0.08);
        }

        .capability h4 {
          margin: 0 0 5px;

          font-size: 0.78rem;
        }

        .capability p {
          margin: 0;

          font-size: 0.66rem;

          line-height: 1.5;

          color:
            rgba(255,255,255,0.38);
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 1050px) {

          .architecture {
            grid-template-columns:
              1fr 1fr;

            gap: 35px;
          }

          .architecture-side {
            grid-column: 1 / -1;

            text-align: center;
          }

          .architecture-side > p {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .side-checks {
            align-items: center;
          }

          .platform-area {
            grid-column: 1;
          }

          .tenant-area {
            grid-column: 2;
          }

          .capabilities {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }

        @media (max-width: 700px) {

          .multi-tenant-section {
            padding:
              70px 18px;
          }

          .architecture {
            grid-template-columns: 1fr;

            padding: 30px 20px;

            border-radius: 20px;
          }

          .platform-area {
            grid-column: auto;

            min-height: 280px;
          }

          .tenant-area {
            grid-column: auto;

            padding-left: 0;
          }

          .connection-line {
            display: none;
          }

          .data-layer {
            padding: 25px 20px;
          }

          .data-layer-header {
            flex-direction: column;

            align-items: flex-start;
          }

          .data-flow {
            grid-template-columns: 1fr;
          }

          .flow-arrow {
            display: flex;

            justify-content: center;

            transform:
              rotate(90deg);
          }

          .capabilities {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 450px) {

          .architecture-header h2 {
            font-size: 2.35rem;

            letter-spacing: -1.3px;
          }

          .platform-card {
            width: 220px;
          }

          .data-badge {
            white-space: normal;
          }

        }

      `}</style>
    </section>
  );
}
