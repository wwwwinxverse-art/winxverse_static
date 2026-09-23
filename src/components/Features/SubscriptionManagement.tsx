import {
  CreditCard,
  Users,
  ShieldCheck,
  BarChart3,
  Zap,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  TrendingUp,
  Receipt,
  BellRing,
} from "lucide-react";

const metrics = [
  {
    label: "Active Subscribers",
    value: "12,480",
    change: "+12.8%",
    icon: Users,
  },
  {
    label: "Monthly Revenue",
    value: "$48.6K",
    change: "+8.4%",
    icon: TrendingUp,
  },
  {
    label: "Renewals",
    value: "94.2%",
    change: "+4.1%",
    icon: RefreshCw,
  },
];

const capabilities = [
  {
    icon: CreditCard,
    title: "Flexible Billing",
    text: "Monthly, yearly or custom billing cycles.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Protected payment processing and transactions.",
  },
  {
    icon: BellRing,
    title: "Smart Renewals",
    text: "Automated reminders and renewal workflows.",
  },
];

export default function SubscriptionManagement() {
  return (
    <section className="subscription-section">
      <div className="subscription-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="subscription-header">

          <div className="subscription-label">
            <CreditCard size={15} />
            BILLING & SUBSCRIPTIONS
          </div>

          <h2>
            Everything your
            <span>subscriptions need.</span>
          </h2>

          <p>
            Manage customers, billing, payments and renewals from one
            centralized subscription system designed to scale with your
            business.
          </p>

        </div>

        {/* =====================================================
            MAIN DASHBOARD
        ===================================================== */}

        <div className="subscription-dashboard">

          {/* LEFT SIDEBAR */}

          <aside className="dashboard-sidebar">

            <div className="sidebar-brand">
              <div className="brand-mark">
                S
              </div>

              <div>
                <strong>
                  Subscript
                </strong>

                <span>
                  Management
                </span>
              </div>
            </div>

            <div className="sidebar-menu">

              <div className="menu-item active">
                <BarChart3 size={17} />
                Overview
              </div>

              <div className="menu-item">
                <Users size={17} />
                Customers
              </div>

              <div className="menu-item">
                <Receipt size={17} />
                Billing
              </div>

              <div className="menu-item">
                <RefreshCw size={17} />
                Renewals
              </div>

            </div>

            <div className="sidebar-security">
              <ShieldCheck size={18} />

              <div>
                <strong>
                  Secure Billing
                </strong>

                <span>
                  Protected payments
                </span>
              </div>
            </div>

          </aside>

          {/* MAIN DASHBOARD */}

          <div className="dashboard-content">

            {/* DASHBOARD TOP */}

            <div className="dashboard-top">

              <div>
                <span>
                  OVERVIEW
                </span>

                <h3>
                  Subscription Overview
                </h3>
              </div>

              <button className="period-button">
                Last 30 days
                <CalendarDays size={15} />
              </button>

            </div>

            {/* METRICS */}

            <div className="metrics">

              {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <div
                    className="metric"
                    key={metric.label}
                  >

                    <div className="metric-top">

                      <div className="metric-icon">
                        <Icon size={17} />
                      </div>

                      <span className="metric-change">
                        {metric.change}
                      </span>

                    </div>

                    <strong>
                      {metric.value}
                    </strong>

                    <span>
                      {metric.label}
                    </span>

                  </div>
                );
              })}

            </div>

            {/* SUBSCRIPTION LIFECYCLE */}

            <div className="lifecycle">

              <div className="lifecycle-heading">

                <div>
                  <span>
                    SUBSCRIPTION LIFECYCLE
                  </span>

                  <h4>
                    From signup to renewal
                  </h4>
                </div>

                <Zap
                  size={18}
                  className="lifecycle-zap"
                />

              </div>

              <div className="lifecycle-flow">

                {/* STEP 1 */}

                <div className="lifecycle-step">

                  <div className="step-number">
                    01
                  </div>

                  <div className="step-icon">
                    <Users size={19} />
                  </div>

                  <strong>
                    Customer
                  </strong>

                  <span>
                    Sign up
                  </span>

                </div>

                <div className="lifecycle-arrow">
                  <ArrowRight size={17} />
                </div>

                {/* STEP 2 */}

                <div className="lifecycle-step">

                  <div className="step-number">
                    02
                  </div>

                  <div className="step-icon">
                    <CreditCard size={19} />
                  </div>

                  <strong>
                    Plan
                  </strong>

                  <span>
                    Select plan
                  </span>

                </div>

                <div className="lifecycle-arrow">
                  <ArrowRight size={17} />
                </div>

                {/* STEP 3 */}

                <div className="lifecycle-step">

                  <div className="step-number">
                    03
                  </div>

                  <div className="step-icon">
                    <Receipt size={19} />
                  </div>

                  <strong>
                    Billing
                  </strong>

                  <span>
                    Process payment
                  </span>

                </div>

                <div className="lifecycle-arrow">
                  <ArrowRight size={17} />
                </div>

                {/* STEP 4 */}

                <div className="lifecycle-step highlight">

                  <div className="step-number">
                    04
                  </div>

                  <div className="step-icon">
                    <RefreshCw size={19} />
                  </div>

                  <strong>
                    Renewal
                  </strong>

                  <span>
                    Auto-renew
                  </span>

                </div>

              </div>

            </div>

            {/* LOWER DASHBOARD */}

            <div className="dashboard-lower">

              {/* ACTIVE PLAN */}

              <div className="current-plan">

                <div className="lower-heading">
                  <span>
                    CURRENT PLAN
                  </span>

                  <CheckCircle2 size={17} />
                </div>

                <div className="plan-name">
                  Professional
                </div>

                <div className="plan-price">
                  <strong>
                    $29
                  </strong>

                  <span>
                    / month
                  </span>
                </div>

                <div className="plan-progress">

                  <div className="progress-label">
                    <span>
                      Users
                    </span>

                    <span>
                      74 / 100
                    </span>
                  </div>

                  <div className="progress-track">
                    <div />
                  </div>

                </div>

                <button className="manage-plan">
                  Manage Plan
                  <ArrowRight size={15} />
                </button>

              </div>

              {/* PAYMENT STATUS */}

              <div className="payment-status">

                <div className="lower-heading">
                  <span>
                    RECENT ACTIVITY
                  </span>

                  <span className="live">
                    LIVE
                  </span>
                </div>

                <div className="activity">

                  <div className="activity-icon success">
                    <CheckCircle2 size={15} />
                  </div>

                  <div>
                    <strong>
                      Payment received
                    </strong>

                    <span>
                      Acme Corporation · $299
                    </span>
                  </div>

                  <small>
                    2m
                  </small>

                </div>

                <div className="activity">

                  <div className="activity-icon renewal">
                    <RefreshCw size={15} />
                  </div>

                  <div>
                    <strong>
                      Subscription renewed
                    </strong>

                    <span>
                      Nova Technologies · Pro
                    </span>
                  </div>

                  <small>
                    18m
                  </small>

                </div>

                <div className="activity">

                  <div className="activity-icon reminder">
                    <BellRing size={15} />
                  </div>

                  <div>
                    <strong>
                      Renewal reminder
                    </strong>

                    <span>
                      Vertex Labs · Tomorrow
                    </span>
                  </div>

                  <small>
                    42m
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <div className="capabilities">

          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="capability"
                key={item.title}
              >

                <div className="capability-icon">
                  <Icon size={19} />
                </div>

                <div>
                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.text}
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

        /* =====================================================
           SECTION
        ===================================================== */

        .subscription-section {
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
              circle at 15% 20%,
              rgba(139,92,246,0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(6,182,212,0.07),
              transparent 30%
            );
        }

        .subscription-container {
          max-width: 1220px;
          margin: auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .subscription-header {
          max-width: 750px;
          margin: 0 auto 65px;

          text-align: center;
        }

        .subscription-label {
          display: inline-flex;

          align-items: center;
          gap: 8px;

          padding: 8px 14px;

          border-radius: 30px;

          background:
            rgba(139,92,246,0.08);

          border:
            1px solid
            rgba(139,92,246,0.2);

          color: #a78bfa;

          font-size: 0.68rem;

          font-weight: 700;

          letter-spacing: 1.5px;

          margin-bottom: 23px;
        }

        .subscription-header h2 {
          margin: 0 0 22px;

          font-size:
            clamp(2.5rem, 5vw, 4rem);

          line-height: 1.08;

          letter-spacing: -2px;

          font-weight: 800;
        }

        .subscription-header h2 span {
          display: block;

          background:
            linear-gradient(
              90deg,
              #22d3ee,
              #8b5cf6
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subscription-header p {
          max-width: 650px;

          margin: auto;

          color:
            rgba(255,255,255,0.55);

          font-size: 1rem;

          line-height: 1.8;
        }

        /* =====================================================
           DASHBOARD
        ===================================================== */

        .subscription-dashboard {
          display: grid;

          grid-template-columns: 205px 1fr;

          min-height: 610px;

          overflow: hidden;

          border-radius: 24px;

          background:
            rgba(15,23,42,0.9);

          border:
            1px solid
            rgba(255,255,255,0.08);

          box-shadow:
            0 35px 100px
            rgba(0,0,0,0.3);

          backdrop-filter: blur(20px);
        }

        /* =====================================================
           SIDEBAR
        ===================================================== */

        .dashboard-sidebar {
          display: flex;

          flex-direction: column;

          padding: 25px 16px;

          background:
            rgba(2,6,23,0.35);

          border-right:
            1px solid
            rgba(255,255,255,0.06);
        }

        .sidebar-brand {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 0 8px;

          margin-bottom: 40px;
        }

        .brand-mark {
          width: 35px;
          height: 35px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background:
            linear-gradient(
              135deg,
              #06b6d4,
              #8b5cf6
            );

          font-weight: 800;

          font-size: 0.9rem;

          box-shadow:
            0 8px 20px
            rgba(139,92,246,0.2);
        }

        .sidebar-brand div:last-child {
          display: flex;

          flex-direction: column;

          gap: 2px;
        }

        .sidebar-brand strong {
          font-size: 0.75rem;
        }

        .sidebar-brand span {
          font-size: 0.57rem;

          color:
            rgba(255,255,255,0.35);
        }

        .sidebar-menu {
          display: flex;

          flex-direction: column;

          gap: 6px;
        }

        .menu-item {
          display: flex;

          align-items: center;

          gap: 11px;

          padding: 11px 12px;

          border-radius: 9px;

          color:
            rgba(255,255,255,0.4);

          font-size: 0.72rem;

          cursor: pointer;

          transition:
            all 0.2s ease;
        }

        .menu-item.active {
          background:
            rgba(139,92,246,0.12);

          color: #c4b5fd;
        }

        .menu-item:hover {
          background:
            rgba(255,255,255,0.04);

          color: #ffffff;
        }

        .sidebar-security {
          display: flex;

          align-items: center;

          gap: 9px;

          margin-top: auto;

          padding: 12px;

          border-radius: 10px;

          background:
            rgba(52,211,153,0.05);

          border:
            1px solid
            rgba(52,211,153,0.1);

          color: #6ee7b7;
        }

        .sidebar-security div {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .sidebar-security strong {
          font-size: 0.63rem;
        }

        .sidebar-security span {
          font-size: 0.53rem;

          color:
            rgba(255,255,255,0.3);
        }

        /* =====================================================
           DASHBOARD CONTENT
        ===================================================== */

        .dashboard-content {
          padding: 30px;
        }

        .dashboard-top {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-bottom: 25px;
        }

        .dashboard-top > div span {
          font-size: 0.58rem;

          letter-spacing: 1.5px;

          color:
            rgba(255,255,255,0.3);

          font-weight: 700;
        }

        .dashboard-top h3 {
          margin: 6px 0 0;

          font-size: 1.2rem;
        }

        .period-button {
          display: flex;

          align-items: center;

          gap: 8px;

          padding: 9px 12px;

          border-radius: 8px;

          border:
            1px solid
            rgba(255,255,255,0.08);

          background:
            rgba(255,255,255,0.035);

          color:
            rgba(255,255,255,0.55);

          font-size: 0.65rem;
        }

        /* =====================================================
           METRICS
        ===================================================== */

        .metrics {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 12px;

          margin-bottom: 18px;
        }

        .metric {
          padding: 18px;

          border-radius: 13px;

          background:
            rgba(255,255,255,0.035);

          border:
            1px solid
            rgba(255,255,255,0.06);
        }

        .metric-top {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-bottom: 12px;
        }

        .metric-icon {
          width: 32px;
          height: 32px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 8px;

          color: #22d3ee;

          background:
            rgba(34,211,238,0.08);
        }

        .metric-change {
          font-size: 0.58rem;

          color: #34d399;

          padding: 4px 6px;

          border-radius: 5px;

          background:
            rgba(52,211,153,0.08);
        }

        .metric > strong {
          display: block;

          font-size: 1.25rem;

          margin-bottom: 4px;
        }

        .metric > span {
          font-size: 0.62rem;

          color:
            rgba(255,255,255,0.35);
        }

        /* =====================================================
           LIFECYCLE
        ===================================================== */

        .lifecycle {
          padding: 20px;

          border-radius: 14px;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.06);

          margin-bottom: 18px;
        }

        .lifecycle-heading {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-bottom: 20px;
        }

        .lifecycle-heading span {
          font-size: 0.56rem;

          letter-spacing: 1.4px;

          color:
            rgba(255,255,255,0.3);

          font-weight: 700;
        }

        .lifecycle-heading h4 {
          margin: 5px 0 0;

          font-size: 0.85rem;
        }

        .lifecycle-zap {
          color: #a78bfa;
        }

        .lifecycle-flow {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 10px;
        }

        .lifecycle-step {
          position: relative;

          flex: 1;

          min-width: 100px;

          padding: 12px;

          border-radius: 10px;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.06);
        }

        .lifecycle-step.highlight {
          border-color:
            rgba(52,211,153,0.2);

          background:
            rgba(52,211,153,0.05);
        }

        .step-number {
          position: absolute;

          top: 8px;
          right: 10px;

          font-size: 0.5rem;

          color:
            rgba(255,255,255,0.2);
        }

        .step-icon {
          width: 32px;
          height: 32px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 8px;

          color: #22d3ee;

          background:
            rgba(34,211,238,0.08);

          margin-bottom: 10px;
        }

        .lifecycle-step.highlight .step-icon {
          color: #34d399;

          background:
            rgba(52,211,153,0.08);
        }

        .lifecycle-step strong {
          display: block;

          font-size: 0.68rem;

          margin-bottom: 3px;
        }

        .lifecycle-step span:last-child {
          font-size: 0.55rem;

          color:
            rgba(255,255,255,0.3);
        }

        .lifecycle-arrow {
          flex-shrink: 0;

          color:
            rgba(255,255,255,0.2);
        }

        /* =====================================================
           LOWER DASHBOARD
        ===================================================== */

        .dashboard-lower {
          display: grid;

          grid-template-columns: 0.85fr 1.15fr;

          gap: 12px;
        }

        .current-plan,
        .payment-status {
          padding: 18px;

          border-radius: 13px;

          background:
            rgba(255,255,255,0.025);

          border:
            1px solid
            rgba(255,255,255,0.06);
        }

        .lower-heading {
          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-bottom: 15px;
        }

        .lower-heading > span:first-child {
          font-size: 0.56rem;

          letter-spacing: 1.3px;

          color:
            rgba(255,255,255,0.3);

          font-weight: 700;
        }

        .lower-heading > svg {
          color: #34d399;
        }

        .live {
          padding: 3px 6px;

          border-radius: 5px;

          font-size: 0.48rem !important;

          color: #34d399 !important;

          background:
            rgba(52,211,153,0.08);
        }

        .plan-name {
          font-size: 0.8rem;

          color: #a78bfa;

          margin-bottom: 4px;
        }

        .plan-price {
          display: flex;

          align-items: baseline;

          gap: 5px;

          margin-bottom: 18px;
        }

        .plan-price strong {
          font-size: 1.35rem;
        }

        .plan-price span {
          font-size: 0.6rem;

          color:
            rgba(255,255,255,0.35);
        }

        .progress-label {
          display: flex;

          justify-content: space-between;

          margin-bottom: 7px;

          font-size: 0.56rem;

          color:
            rgba(255,255,255,0.35);
        }

        .progress-track {
          height: 5px;

          border-radius: 10px;

          background:
            rgba(255,255,255,0.06);

          overflow: hidden;

          margin-bottom: 16px;
        }

        .progress-track div {
          width: 74%;

          height: 100%;

          border-radius: inherit;

          background:
            linear-gradient(
              90deg,
              #06b6d4,
              #8b5cf6
            );
        }

        .manage-plan {
          display: flex;

          align-items: center;

          gap: 7px;

          padding: 7px 10px;

          border-radius: 7px;

          border:
            1px solid
            rgba(255,255,255,0.08);

          background:
            rgba(255,255,255,0.035);

          color:
            rgba(255,255,255,0.65);

          font-size: 0.58rem;
        }

        /* =====================================================
           ACTIVITY
        ===================================================== */

        .activity {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 9px 0;

          border-bottom:
            1px solid
            rgba(255,255,255,0.05);
        }

        .activity:last-child {
          border-bottom: none;
        }

        .activity-icon {
          width: 28px;
          height: 28px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 7px;
        }

        .activity-icon.success {
          color: #34d399;

          background:
            rgba(52,211,153,0.08);
        }

        .activity-icon.renewal {
          color: #a78bfa;

          background:
            rgba(167,139,250,0.08);
        }

        .activity-icon.reminder {
          color: #fbbf24;

          background:
            rgba(251,191,36,0.08);
        }

        .activity > div:nth-child(2) {
          flex: 1;

          display: flex;

          flex-direction: column;

          gap: 2px;
        }

        .activity strong {
          font-size: 0.6rem;
        }

        .activity span {
          font-size: 0.52rem;

          color:
            rgba(255,255,255,0.3);
        }

        .activity small {
          font-size: 0.5rem;

          color:
            rgba(255,255,255,0.25);
        }

        /* =====================================================
           CAPABILITIES
        ===================================================== */

        .capabilities {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 15px;

          margin-top: 25px;
        }

        .capability {
          display: flex;

          align-items: center;

          gap: 13px;

          padding: 20px;

          border-radius: 14px;

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
          transform:
            translateY(-3px);

          border-color:
            rgba(139,92,246,0.25);
        }

        .capability-icon {
          width: 40px;
          height: 40px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          color: #a78bfa;

          background:
            rgba(139,92,246,0.08);
        }

        .capability h4 {
          margin: 0 0 4px;

          font-size: 0.76rem;
        }

        .capability p {
          margin: 0;

          font-size: 0.62rem;

          line-height: 1.5;

          color:
            rgba(255,255,255,0.35);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 900px) {

          .subscription-dashboard {
            grid-template-columns: 1fr;
          }

          .dashboard-sidebar {
            display: none;
          }

          .lifecycle-flow {
            flex-wrap: wrap;
          }

          .lifecycle-step {
            min-width: 42%;
          }

          .lifecycle-arrow {
            display: none;
          }

        }

        @media (max-width: 650px) {

          .subscription-section {
            padding:
              70px 18px;
          }

          .subscription-header h2 {
            font-size: 2.4rem;

            letter-spacing: -1.4px;
          }

          .dashboard-content {
            padding: 20px;
          }

          .metrics {
            grid-template-columns: 1fr;
          }

          .dashboard-lower {
            grid-template-columns: 1fr;
          }

          .capabilities {
            grid-template-columns: 1fr;
          }

          .dashboard-top {
            align-items: flex-start;

            gap: 15px;

            flex-direction: column;
          }

          .period-button {
            width: 100%;

            justify-content: space-between;
          }

        }

        @media (max-width: 450px) {

          .lifecycle-step {
            min-width: 100%;
          }

          .subscription-dashboard {
            border-radius: 18px;
          }

        }

      `}</style>
    </section>
  );
}
