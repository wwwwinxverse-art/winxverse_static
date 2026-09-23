import {
  Calendar,
  UserCheck,
  FileSearch,
  Tag,
  Layers,
  ChevronDown,
  Search,
  SlidersHorizontal,
  Check,
  X,
} from "lucide-react";

const filters = [
  {
    icon: Calendar,
    title: "Date Range",
    value: "Last 30 days",
  },
  {
    icon: UserCheck,
    title: "Owner",
    value: "All teammates",
  },
  {
    icon: FileSearch,
    title: "Type",
    value: "All types",
  },
  {
    icon: Tag,
    title: "Tags",
    value: "All tags",
  },
  {
    icon: Layers,
    title: "Status",
    value: "In Progress",
  },
];

export default function AdvancedFiltersDashboard() {
  return (
    <section className="advanced-filter-section">
      <div className="filter-container">

        {/* LEFT CONTENT */}
        <div className="filter-intro">

          <div className="eyebrow">
            <SlidersHorizontal size={16} />
            Smart Filtering
          </div>

          <h2>
            Find exactly what
            <span> you're looking for.</span>
          </h2>

          <p>
            Powerful filtering tools help you organize, discover and manage
            everything in your workspace without getting lost in unnecessary
            information.
          </p>

          <div className="intro-points">
            <div>
              <div className="point-icon">
                <Check size={16} />
              </div>
              <span>Multiple filters at once</span>
            </div>

            <div>
              <div className="point-icon">
                <Check size={16} />
              </div>
              <span>Instant results</span>
            </div>

            <div>
              <div className="point-icon">
                <Check size={16} />
              </div>
              <span>Save your filter preferences</span>
            </div>
          </div>

          <button className="explore-button">
            Explore Filters
            <span>→</span>
          </button>
        </div>

        {/* RIGHT FILTER PANEL */}
        <div className="filter-panel">

          {/* PANEL HEADER */}
          <div className="panel-header">

            <div>
              <span className="panel-label">
                WORKSPACE
              </span>

              <h3>
                Advanced Filters
              </h3>
            </div>

            <button className="close-button">
              <X size={17} />
            </button>

          </div>

          {/* SEARCH */}
          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search your workspace..."
            />

            <span className="shortcut">
              ⌘ K
            </span>
          </div>

          {/* FILTER LIST */}
          <div className="filter-list">

            {filters.map((filter, index) => {
              const Icon = filter.icon;

              return (
                <div
                  className="filter-row"
                  key={index}
                >

                  <div className="filter-icon">
                    <Icon size={19} />
                  </div>

                  <div className="filter-info">

                    <span className="filter-title">
                      {filter.title}
                    </span>

                    <span className="filter-value">
                      {filter.value}
                    </span>

                  </div>

                  <ChevronDown
                    size={17}
                    className="filter-arrow"
                  />

                </div>
              );
            })}

          </div>

          {/* ACTIVE FILTERS */}
          <div className="active-section">

            <div className="active-header">
              <span>Active filters</span>
              <span className="active-count">3</span>
            </div>

            <div className="filter-tags">

              <div className="filter-tag">
                In Progress
                <X size={13} />
              </div>

              <div className="filter-tag">
                Last 30 days
                <X size={13} />
              </div>

              <div className="filter-tag">
                Documents
                <X size={13} />
              </div>

            </div>

          </div>

          {/* FOOTER */}
          <div className="panel-footer">

            <button className="clear-button">
              Clear all
            </button>

            <button className="apply-button">
              Apply Filters
            </button>

          </div>

        </div>
      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        .advanced-filter-section {
          width: 100%;
          min-height: 90vh;
          padding: 100px 30px;
          font-family: "Segoe UI", sans-serif;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(20,184,166,0.10),
              transparent 35%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(6,182,212,0.10),
              transparent 35%
            );

          color: #ffffff;
        }

        .filter-container {
          max-width: 1200px;
          margin: auto;

          display: grid;
          grid-template-columns:
            minmax(300px, 0.9fr)
            minmax(450px, 1.1fr);

          gap: 90px;

          align-items: center;
        }

        /* --------------------------------
           LEFT CONTENT
        -------------------------------- */

        .filter-intro {
          padding: 20px 0;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 13px;

          border-radius: 50px;

          background: rgba(20,184,166,0.10);

          border: 1px solid rgba(20,184,166,0.25);

          color: #2dd4bf;

          font-size: 0.78rem;
          font-weight: 700;

          letter-spacing: 1px;
          text-transform: uppercase;

          margin-bottom: 25px;
        }

        .filter-intro h2 {
          font-size: clamp(2.4rem, 5vw, 4.2rem);

          line-height: 1.08;

          letter-spacing: -2px;

          margin: 0 0 25px;

          font-weight: 800;
        }

        .filter-intro h2 span {
          display: block;

          background:
            linear-gradient(
              90deg,
              #2dd4bf,
              #22d3ee
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .filter-intro > p {
          max-width: 520px;

          color: rgba(255,255,255,0.60);

          font-size: 1.05rem;

          line-height: 1.8;

          margin-bottom: 35px;
        }

        /* --------------------------------
           POINTS
        -------------------------------- */

        .intro-points {
          display: flex;
          flex-direction: column;

          gap: 15px;

          margin-bottom: 35px;
        }

        .intro-points > div {
          display: flex;
          align-items: center;

          gap: 12px;

          color: rgba(255,255,255,0.82);

          font-size: 0.92rem;
        }

        .point-icon {
          width: 23px;
          height: 23px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(20,184,166,0.15);

          color: #2dd4bf;

          border: 1px solid rgba(20,184,166,0.25);
        }

        /* --------------------------------
           BUTTON
        -------------------------------- */

        .explore-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;

          padding: 14px 21px;

          border: none;

          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #14b8a6,
              #06b6d4
            );

          color: #ffffff;

          font-size: 0.9rem;

          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .explore-button span {
          font-size: 1.2rem;

          transition: transform 0.3s ease;
        }

        .explore-button:hover {
          transform: translateY(-3px);

          box-shadow:
            0 12px 30px
            rgba(6,182,212,0.25);
        }

        .explore-button:hover span {
          transform: translateX(5px);
        }

        /* --------------------------------
           FILTER PANEL
        -------------------------------- */

        .filter-panel {
          width: 100%;

          border-radius: 24px;

          background:
            rgba(15,23,42,0.88);

          border:
            1px solid
            rgba(255,255,255,0.09);

          box-shadow:
            0 30px 80px
            rgba(0,0,0,0.35);

          backdrop-filter: blur(20px);

          overflow: hidden;
        }

        /* --------------------------------
           HEADER
        -------------------------------- */

        .panel-header {
          display: flex;

          align-items: center;
          justify-content: space-between;

          padding: 25px 28px;

          border-bottom:
            1px solid
            rgba(255,255,255,0.07);
        }

        .panel-label {
          display: block;

          font-size: 0.65rem;

          font-weight: 700;

          letter-spacing: 1.5px;

          color: #2dd4bf;

          margin-bottom: 5px;
        }

        .panel-header h3 {
          margin: 0;

          font-size: 1.15rem;
        }

        .close-button {
          width: 34px;
          height: 34px;

          border-radius: 8px;

          border:
            1px solid
            rgba(255,255,255,0.08);

          background:
            rgba(255,255,255,0.04);

          color:
            rgba(255,255,255,0.55);

          display: flex;

          align-items: center;
          justify-content: center;

          cursor: pointer;
        }

        /* --------------------------------
           SEARCH
        -------------------------------- */

        .search-box {
          margin: 22px 25px;

          height: 48px;

          display: flex;

          align-items: center;

          gap: 12px;

          padding: 0 15px;

          border-radius: 10px;

          background:
            rgba(255,255,255,0.045);

          border:
            1px solid
            rgba(255,255,255,0.08);

          color:
            rgba(255,255,255,0.45);
        }

        .search-box input {
          flex: 1;

          border: none;
          outline: none;

          background: transparent;

          color: #ffffff;

          font-size: 0.88rem;
        }

        .search-box input::placeholder {
          color:
            rgba(255,255,255,0.35);
        }

        .shortcut {
          font-size: 0.7rem;

          padding: 4px 7px;

          border-radius: 5px;

          background:
            rgba(255,255,255,0.07);

          color:
            rgba(255,255,255,0.4);
        }

        /* --------------------------------
           FILTER ROWS
        -------------------------------- */

        .filter-list {
          padding: 0 14px;
        }

        .filter-row {
          display: flex;

          align-items: center;

          gap: 15px;

          padding: 15px 12px;

          border-radius: 12px;

          cursor: pointer;

          transition: all 0.2s ease;
        }

        .filter-row:hover {
          background:
            rgba(255,255,255,0.05);
        }

        .filter-icon {
          width: 40px;
          height: 40px;

          border-radius: 10px;

          display: flex;

          align-items: center;
          justify-content: center;

          background:
            rgba(20,184,166,0.09);

          color: #22d3ee;

          border:
            1px solid
            rgba(34,211,238,0.12);
        }

        .filter-info {
          flex: 1;

          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .filter-title {
          font-size: 0.88rem;

          font-weight: 600;

          color: rgba(255,255,255,0.9);
        }

        .filter-value {
          font-size: 0.76rem;

          color:
            rgba(255,255,255,0.4);
        }

        .filter-arrow {
          color:
            rgba(255,255,255,0.3);
        }

        /* --------------------------------
           ACTIVE FILTERS
        -------------------------------- */

        .active-section {
          margin:
            15px 25px 0;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(255,255,255,0.07);
        }

        .active-header {
          display: flex;

          align-items: center;

          gap: 8px;

          font-size: 0.75rem;

          color:
            rgba(255,255,255,0.45);

          margin-bottom: 12px;
        }

        .active-count {
          width: 20px;
          height: 20px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(20,184,166,0.15);

          color: #2dd4bf;

          font-size: 0.65rem;
        }

        .filter-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;
        }

        .filter-tag {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          padding: 7px 10px;

          border-radius: 7px;

          background:
            rgba(20,184,166,0.09);

          border:
            1px solid
            rgba(20,184,166,0.18);

          color:
            #5eead4;

          font-size: 0.72rem;
        }

        /* --------------------------------
           FOOTER
        -------------------------------- */

        .panel-footer {
          display: flex;

          justify-content: flex-end;

          gap: 10px;

          padding: 22px 25px;

          margin-top: 20px;

          border-top:
            1px solid
            rgba(255,255,255,0.07);
        }

        .clear-button,
        .apply-button {
          padding: 10px 16px;

          border-radius: 8px;

          font-size: 0.78rem;

          font-weight: 600;

          cursor: pointer;
        }

        .clear-button {
          background: transparent;

          border:
            1px solid
            rgba(255,255,255,0.1);

          color:
            rgba(255,255,255,0.55);
        }

        .apply-button {
          border: none;

          background:
            linear-gradient(
              135deg,
              #14b8a6,
              #06b6d4
            );

          color: white;
        }

        /* --------------------------------
           RESPONSIVE
        -------------------------------- */

        @media (max-width: 900px) {

          .filter-container {
            grid-template-columns: 1fr;

            gap: 50px;

            max-width: 700px;
          }

          .filter-intro {
            text-align: center;
          }

          .filter-intro > p {
            margin-left: auto;
            margin-right: auto;
          }

          .intro-points {
            align-items: center;
          }

        }

        @media (max-width: 600px) {

          .advanced-filter-section {
            padding: 60px 18px;
          }

          .filter-intro h2 {
            font-size: 2.5rem;
          }

          .filter-panel {
            border-radius: 18px;
          }

          .panel-header {
            padding: 20px;
          }

          .search-box {
            margin: 18px;
          }

          .active-section {
            margin-left: 18px;
            margin-right: 18px;
          }

          .panel-footer {
            padding: 18px;
          }

        }

      `}</style>
    </section>
  );
}
