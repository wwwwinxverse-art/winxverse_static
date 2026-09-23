import {
  Database,
  Cloud,
  RotateCcw,
  CheckCircle2,
  Clock3,
  HardDrive,
  Server,
  RefreshCw,
  Zap,
  LockKeyhole,
  Activity,
  ArchiveRestore,
} from "lucide-react";

const recoveryPoints = [
  {
    time: "10:42 PM",
    label: "Latest Backup",
    size: "2.84 GB",
    status: "Protected",
  },
  {
    time: "08:30 PM",
    label: "System Snapshot",
    size: "2.79 GB",
    status: "Protected",
  },
  {
    time: "06:15 PM",
    label: "Database Backup",
    size: "2.65 GB",
    status: "Protected",
  },
];

export default function BackupRecovery() {
  return (
    <section className="backup-section">

      <div className="backup-container">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="backup-header">

          <div className="backup-label">
            <span className="backup-live-dot" />
            BUSINESS CONTINUITY SYSTEM
          </div>

          <h2>
            Your data.
            <br />
            <span>Always recoverable.</span>
          </h2>

          <p>
            Protect critical business information with automated backups,
            secure recovery points, and intelligent restoration designed
            to keep your systems running when the unexpected happens.
          </p>

        </div>


        {/* =====================================================
            MAIN RECOVERY EXPERIENCE
        ====================================================== */}

        <div className="backup-main">

          {/* =================================================
              LEFT — SYSTEM STATUS
          ================================================== */}

          <div className="backup-status-panel">

            <div className="panel-label">
              SYSTEM STATUS
            </div>

            <div className="status-heading">
              <div className="status-check">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <h3>Everything protected</h3>
                <p>Backup services are operational</p>
              </div>
            </div>


            {/* Status bars */}

            <div className="status-metrics">

              <div className="status-metric">

                <div>
                  <span>BACKUP HEALTH</span>
                  <strong>99.9%</strong>
                </div>

                <div className="metric-progress">
                  <span style={{ width: "99.9%" }} />
                </div>

              </div>


              <div className="status-metric">

                <div>
                  <span>DATA PROTECTED</span>
                  <strong>12.8 GB</strong>
                </div>

                <div className="metric-progress">
                  <span style={{ width: "82%" }} />
                </div>

              </div>


              <div className="status-metric">

                <div>
                  <span>RECOVERY READINESS</span>
                  <strong>100%</strong>
                </div>

                <div className="metric-progress">
                  <span style={{ width: "100%" }} />
                </div>

              </div>

            </div>


            {/* Last backup */}

            <div className="last-backup">

              <div className="last-backup-icon">
                <Clock3 size={17} />
              </div>

              <div>
                <span>LAST SUCCESSFUL BACKUP</span>
                <strong>Today, 10:42 PM</strong>
              </div>

              <CheckCircle2
                size={16}
                className="last-backup-check"
              />

            </div>

          </div>


          {/* =================================================
              CENTER — RECOVERY CORE
          ================================================== */}

          <div className="recovery-core-area">

            {/* Decorative orbital rings */}

            <div className="orbit orbit-one">
              <div className="orbit-dot" />
            </div>

            <div className="orbit orbit-two">
              <div className="orbit-dot" />
            </div>

            <div className="orbit orbit-three">
              <div className="orbit-dot" />
            </div>


            {/* Data connection lines */}

            <div className="data-line line-left">
              <span />
            </div>

            <div className="data-line line-right">
              <span />
            </div>


            {/* Recovery Core */}

            <div className="recovery-core">

              <div className="core-glow" />

              <div className="core-icon">
                <Database size={38} />
              </div>

              <strong>DATA CORE</strong>

              <span>Protected</span>

              <div className="core-pulse" />

            </div>


            {/* Top status */}

            <div className="core-status">
              <span />
              BACKUP ENGINE ACTIVE
            </div>


            {/* Floating data packets */}

            <div className="data-packet packet-one">
              <Database size={13} />
            </div>

            <div className="data-packet packet-two">
              <Cloud size={13} />
            </div>

            <div className="data-packet packet-three">
              <HardDrive size={13} />
            </div>

          </div>


          {/* =================================================
              RIGHT — RECOVERY POINTS
          ================================================== */}

          <div className="recovery-panel">

            <div className="panel-header">

              <div>
                <div className="panel-label">
                  RECOVERY POINTS
                </div>

                <h3>
                  Restore history
                </h3>
              </div>

              <ArchiveRestore
                size={19}
                color="#a78bfa"
              />

            </div>


            <div className="timeline">

              {recoveryPoints.map((point, index) => (

                <div
                  className="timeline-item"
                  key={index}
                >

                  <div className="timeline-marker">

                    <div />

                  </div>


                  <div className="timeline-content">

                    <div className="timeline-top">

                      <strong>
                        {point.label}
                      </strong>

                      <span>
                        {point.time}
                      </span>

                    </div>

                    <div className="timeline-bottom">

                      <span>
                        {point.size}
                      </span>

                      <small>
                        <CheckCircle2 size={10} />
                        {point.status}
                      </small>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            <button className="restore-button">
              <RotateCcw size={14} />
              View Recovery Center
            </button>

          </div>

        </div>


        {/* =====================================================
            RECOVERY FLOW
        ====================================================== */}

        <div className="recovery-flow">

          <div className="flow-heading">
            <span>CONTINUOUS DATA PROTECTION</span>
            <div />
          </div>


          <div className="flow-track">

            <BackupStep
              icon={<Server size={18} />}
              number="01"
              title="Live System"
              desc="Your active data"
            />

            <div className="flow-arrow">
              <span />
            </div>


            <BackupStep
              icon={<RefreshCw size={18} />}
              number="02"
              title="Automated Backup"
              desc="Scheduled protection"
            />

            <div className="flow-arrow">
              <span />
            </div>


            <BackupStep
              icon={<Cloud size={18} />}
              number="03"
              title="Secure Vault"
              desc="Encrypted storage"
            />

            <div className="flow-arrow">
              <span />
            </div>


            <BackupStep
              icon={<ArchiveRestore size={18} />}
              number="04"
              title="Recovery Point"
              desc="Ready to restore"
            />

          </div>

        </div>


        {/* =====================================================
            BOTTOM FEATURES
        ====================================================== */}

        <div className="backup-features">

          <BackupFeature
            icon={<Zap size={17} />}
            title="Automated"
            text="Backups run automatically without interrupting your workflow."
          />

          <BackupFeature
            icon={<LockKeyhole size={17} />}
            title="Encrypted"
            text="Critical data remains protected during storage and transfer."
          />

          <BackupFeature
            icon={<Activity size={17} />}
            title="Monitored"
            text="Backup health is continuously monitored for reliability."
          />

          <BackupFeature
            icon={<RotateCcw size={17} />}
            title="Recoverable"
            text="Restore your data from verified recovery points whenever needed."
          />

        </div>

      </div>


      <style>{`

        /* =====================================================
           SECTION
        ====================================================== */

        .backup-section {
          width: 100%;
          padding: 120px 0;
          background: transparent;
          color: #fff;
          font-family: "Segoe UI", sans-serif;
          overflow: hidden;
        }


        .backup-container {
          width: min(1400px, 92%);
          margin: auto;
        }


        /* =====================================================
           HEADER
        ====================================================== */

        .backup-header {
          max-width: 800px;
          margin: 0 auto 80px;
          text-align: center;
        }


        .backup-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 8px 14px;

          border-radius: 30px;

          border:
            1px solid rgba(34,211,238,0.22);

          background:
            rgba(34,211,238,0.035);

          color: #67e8f9;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 2px;
        }


        .backup-live-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 10px #22d3ee;

          animation:
            backupLive 1.5s ease-in-out infinite;
        }


        .backup-header h2 {
          margin: 25px 0 20px;

          font-size: clamp(2.8rem, 5vw, 5rem);

          line-height: 1.02;

          font-weight: 300;

          letter-spacing: -3px;
        }


        .backup-header h2 span {
          font-weight: 750;

          background:
            linear-gradient(
              90deg,
              #22d3ee,
              #818cf8,
              #a78bfa
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }


        .backup-header p {
          max-width: 700px;

          margin: auto;

          color: rgba(255,255,255,0.55);

          font-size: 15px;

          line-height: 1.85;
        }


        /* =====================================================
           MAIN
        ====================================================== */

        .backup-main {
          display: grid;

          grid-template-columns:
            minmax(260px, 0.8fr)
            minmax(400px, 1.2fr)
            minmax(270px, 0.8fr);

          gap: 35px;

          align-items: center;
        }


        /* =====================================================
           LEFT STATUS PANEL
        ====================================================== */

        .backup-status-panel {
          padding: 25px;

          border:
            1px solid rgba(255,255,255,0.08);

          border-radius: 18px;

          background:
            rgba(255,255,255,0.018);

          backdrop-filter:
            blur(15px);
        }


        .panel-label {
          color: rgba(255,255,255,0.3);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 1.7px;
        }


        .status-heading {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-top: 22px;

          padding-bottom: 22px;

          border-bottom:
            1px solid rgba(255,255,255,0.06);
        }


        .status-check {
          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 12px;

          color: #22d3ee;

          background:
            rgba(34,211,238,0.07);

          border:
            1px solid rgba(34,211,238,0.12);

          animation:
            statusPulse 2.5s ease-in-out infinite;
        }


        .status-heading h3 {
          margin: 0;

          font-size: 13px;
        }


        .status-heading p {
          margin: 4px 0 0;

          color: rgba(255,255,255,0.35);

          font-size: 9px;
        }


        /* =====================================================
           METRICS
        ====================================================== */

        .status-metrics {
          padding: 23px 0;
        }


        .status-metric {
          margin-bottom: 19px;
        }


        .status-metric > div:first-child {
          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 8px;
        }


        .status-metric span {
          color: rgba(255,255,255,0.35);

          font-size: 8px;

          letter-spacing: 1px;
        }


        .status-metric strong {
          font-size: 11px;
        }


        .metric-progress {
          height: 3px;

          border-radius: 10px;

          overflow: hidden;

          background:
            rgba(255,255,255,0.07);
        }


        .metric-progress span {
          display: block;

          height: 100%;

          border-radius: inherit;

          background:
            linear-gradient(
              90deg,
              #22d3ee,
              #8b5cf6
            );

          animation:
            progressReveal 2s ease forwards;
        }


        .last-backup {
          display: flex;

          align-items: center;

          gap: 10px;

          padding-top: 18px;

          border-top:
            1px solid rgba(255,255,255,0.06);
        }


        .last-backup-icon {
          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 9px;

          color: #a78bfa;

          background:
            rgba(139,92,246,0.08);
        }


        .last-backup span {
          display: block;

          color: rgba(255,255,255,0.28);

          font-size: 7px;

          letter-spacing: 1px;
        }


        .last-backup strong {
          display: block;

          margin-top: 3px;

          font-size: 10px;
        }


        .last-backup-check {
          margin-left: auto;

          color: #22d3ee;
        }


        /* =====================================================
           RECOVERY CORE
        ====================================================== */

        .recovery-core-area {
          position: relative;

          height: 430px;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        .recovery-core {
          position: relative;

          width: 180px;
          height: 180px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(34,211,238,0.1),
              rgba(139,92,246,0.06) 45%,
              rgba(5,10,25,0.85) 72%
            );

          border:
            1px solid rgba(34,211,238,0.25);

          box-shadow:
            0 0 70px rgba(34,211,238,0.08),
            inset 0 0 50px rgba(139,92,246,0.08);

          z-index: 5;

          animation:
            coreFloat 4s ease-in-out infinite;
        }


        .core-glow {
          position: absolute;

          inset: -15px;

          border-radius: 50%;

          border:
            1px solid rgba(34,211,238,0.1);

          animation:
            coreGlow 2.5s ease-in-out infinite;
        }


        .core-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 17px;

          color: #67e8f9;

          background:
            rgba(34,211,238,0.07);

          border:
            1px solid rgba(34,211,238,0.15);

          box-shadow:
            0 0 30px rgba(34,211,238,0.08);
        }


        .recovery-core strong {
          margin-top: 13px;

          font-size: 11px;

          letter-spacing: 1.5px;
        }


        .recovery-core > span {
          margin-top: 4px;

          color: #22d3ee;

          font-size: 8px;

          text-transform: uppercase;

          letter-spacing: 1px;
        }


        .core-pulse {
          position: absolute;

          width: 8px;
          height: 8px;

          right: 25px;
          top: 25px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 12px #22d3ee;

          animation:
            coreDot 1.5s ease-in-out infinite;
        }


        /* =====================================================
           ORBITS
        ====================================================== */

        .orbit {
          position: absolute;

          border-radius: 50%;

          border: 1px solid rgba(255,255,255,0.07);
        }


        .orbit-one {
          width: 310px;
          height: 310px;

          animation:
            orbitRotate 16s linear infinite;
        }


        .orbit-two {
          width: 390px;
          height: 390px;

          border-style: dashed;

          border-color:
            rgba(139,92,246,0.15);

          animation:
            orbitRotateReverse 22s linear infinite;
        }


        .orbit-three {
          width: 245px;
          height: 245px;

          border-color:
            rgba(34,211,238,0.13);

          animation:
            orbitPulse 3s ease-in-out infinite;
        }


        .orbit-dot {
          position: absolute;

          width: 7px;
          height: 7px;

          top: 50%;

          right: -3px;

          transform:
            translateY(-50%);

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 12px #22d3ee;
        }


        /* =====================================================
           DATA LINES
        ====================================================== */

        .data-line {
          position: absolute;

          width: 100px;
          height: 1px;

          top: 50%;

          background:
            rgba(34,211,238,0.1);

          overflow: hidden;
        }


        .line-left {
          left: -5px;
        }


        .line-right {
          right: -5px;
        }


        .data-line span {
          position: absolute;

          width: 35px;
          height: 2px;

          top: -1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #22d3ee,
              transparent
            );

          animation:
            dataFlow 2s linear infinite;
        }


        .line-right span {
          animation-delay: 1s;
        }


        /* =====================================================
           CORE STATUS
        ====================================================== */

        .core-status {
          position: absolute;

          top: 25px;

          display: flex;

          align-items: center;

          gap: 7px;

          padding: 7px 11px;

          border:
            1px solid rgba(34,211,238,0.15);

          border-radius: 20px;

          background:
            rgba(34,211,238,0.035);

          color: #67e8f9;

          font-size: 8px;

          letter-spacing: 1px;
        }


        .core-status span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 8px #22d3ee;

          animation:
            backupLive 1.5s infinite;
        }


        /* =====================================================
           DATA PACKETS
        ====================================================== */

        .data-packet {
          position: absolute;

          width: 30px;
          height: 30px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 8px;

          color: #a78bfa;

          background:
            rgba(139,92,246,0.07);

          border:
            1px solid rgba(139,92,246,0.15);

          animation:
            packetFloat 3s ease-in-out infinite;
        }


        .packet-one {
          top: 105px;
          left: 75px;
        }


        .packet-two {
          top: 270px;
          right: 60px;

          animation-delay: .8s;
        }


        .packet-three {
          bottom: 65px;
          left: 105px;

          animation-delay: 1.4s;
        }


        /* =====================================================
           RECOVERY PANEL
        ====================================================== */

        .recovery-panel {
          padding: 25px;

          border:
            1px solid rgba(255,255,255,0.08);

          border-radius: 18px;

          background:
            rgba(255,255,255,0.018);

          backdrop-filter:
            blur(15px);
        }


        .panel-header {
          display: flex;

          align-items: center;

          justify-content: space-between;

          padding-bottom: 20px;

          border-bottom:
            1px solid rgba(255,255,255,0.06);
        }


        .panel-header h3 {
          margin: 6px 0 0;

          font-size: 15px;
        }


        /* =====================================================
           TIMELINE
        ====================================================== */

        .timeline {
          padding: 22px 0 12px;
        }


        .timeline-item {
          position: relative;

          display: flex;

          gap: 12px;

          min-height: 65px;
        }


        .timeline-marker {
          position: relative;

          width: 13px;

          flex-shrink: 0;

          display: flex;

          justify-content: center;
        }


        .timeline-marker::after {
          content: "";

          position: absolute;

          top: 12px;
          bottom: -12px;

          width: 1px;

          background:
            rgba(139,92,246,0.2);
        }


        .timeline-item:last-child
        .timeline-marker::after {
          display: none;
        }


        .timeline-marker div {
          position: relative;

          width: 9px;
          height: 9px;

          margin-top: 4px;

          z-index: 2;

          border-radius: 50%;

          background: #8b5cf6;

          box-shadow:
            0 0 10px rgba(139,92,246,0.6);
        }


        .timeline-item:first-child
        .timeline-marker div {
          background: #22d3ee;

          box-shadow:
            0 0 10px rgba(34,211,238,0.7);
        }


        .timeline-content {
          flex: 1;

          padding-bottom: 17px;
        }


        .timeline-top {
          display: flex;

          justify-content: space-between;

          gap: 8px;
        }


        .timeline-top strong {
          font-size: 10px;
        }


        .timeline-top > span {
          color: rgba(255,255,255,0.3);

          font-size: 8px;
        }


        .timeline-bottom {
          display: flex;

          justify-content: space-between;

          margin-top: 6px;
        }


        .timeline-bottom > span {
          color: rgba(255,255,255,0.3);

          font-size: 8px;
        }


        .timeline-bottom small {
          display: flex;

          align-items: center;

          gap: 3px;

          color: #22d3ee;

          font-size: 7px;
        }


        .restore-button {
          width: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 10px;

          border:
            1px solid rgba(139,92,246,0.2);

          border-radius: 9px;

          color: #c4b5fd;

          background:
            rgba(139,92,246,0.06);

          font-size: 9px;

          cursor: pointer;

          transition: .3s ease;
        }


        .restore-button:hover {
          color: white;

          background:
            rgba(139,92,246,0.12);

          border-color:
            rgba(139,92,246,0.4);

          transform:
            translateY(-2px);
        }


        /* =====================================================
           RECOVERY FLOW
        ====================================================== */

        .recovery-flow {
          margin-top: 75px;
        }


        .flow-heading {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-bottom: 25px;
        }


        .flow-heading span {
          color: rgba(255,255,255,0.27);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 1.8px;

          white-space: nowrap;
        }


        .flow-heading div {
          flex: 1;

          height: 1px;

          background:
            rgba(255,255,255,0.06);
        }


        .flow-track {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 20px;
        }


        .backup-step {
          display: flex;

          align-items: center;

          gap: 10px;

          min-width: 160px;
        }


        .backup-step-icon {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #67e8f9;

          border:
            1px solid rgba(34,211,238,0.12);

          border-radius: 10px;

          background:
            rgba(34,211,238,0.045);

          transition: .3s ease;
        }


        .backup-step:hover
        .backup-step-icon {
          transform:
            rotate(-8deg) scale(1.08);

          background:
            rgba(34,211,238,0.09);

          box-shadow:
            0 0 20px rgba(34,211,238,0.1);
        }


        .backup-step-number {
          display: block;

          margin-bottom: 2px;

          color: rgba(255,255,255,0.2);

          font-size: 7px;
        }


        .backup-step strong {
          display: block;

          font-size: 10px;
        }


        .backup-step small {
          display: block;

          margin-top: 3px;

          color: rgba(255,255,255,0.3);

          font-size: 8px;
        }


        .flow-arrow {
          width: 55px;
          height: 1px;

          position: relative;

          overflow: hidden;

          background:
            rgba(255,255,255,0.08);
        }


        .flow-arrow span {
          position: absolute;

          width: 30px;
          height: 2px;

          top: -1px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #8b5cf6,
              transparent
            );

          animation:
            arrowFlow 2.2s linear infinite;
        }


        /* =====================================================
           BOTTOM FEATURES
        ====================================================== */

        .backup-features {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 1px;

          margin-top: 65px;

          border:
            1px solid rgba(255,255,255,0.07);

          border-radius: 14px;

          overflow: hidden;

          background:
            rgba(255,255,255,0.06);
        }


        .backup-feature {
          padding: 22px;

          background:
            rgba(5,10,25,0.5);

          transition:
            background .3s ease;
        }


        .backup-feature:hover {
          background:
            rgba(255,255,255,0.035);
        }


        .backup-feature-icon {
          width: 32px;
          height: 32px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 12px;

          color: #a78bfa;

          border-radius: 8px;

          background:
            rgba(139,92,246,0.07);
        }


        .backup-feature strong {
          display: block;

          font-size: 11px;

          margin-bottom: 6px;
        }


        .backup-feature p {
          margin: 0;

          color: rgba(255,255,255,0.35);

          font-size: 9px;

          line-height: 1.65;
        }


        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes backupLive {

          0%,
          100% {
            opacity: .4;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }

        }


        @keyframes statusPulse {

          0%,
          100% {
            box-shadow:
              0 0 0 rgba(34,211,238,0);
          }

          50% {
            box-shadow:
              0 0 25px rgba(34,211,238,0.12);
          }

        }


        @keyframes progressReveal {

          from {
            width: 0 !important;
          }

        }


        @keyframes coreFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }

        }


        @keyframes coreGlow {

          0%,
          100% {
            transform: scale(.95);
            opacity: .4;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }

        }


        @keyframes coreDot {

          0%,
          100% {
            opacity: .4;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }

        }


        @keyframes orbitRotate {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        @keyframes orbitRotateReverse {

          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }

        }


        @keyframes orbitPulse {

          0%,
          100% {
            transform: scale(1);
            opacity: .5;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }

        }


        @keyframes dataFlow {

          from {
            left: -35px;
          }

          to {
            left: 100%;
          }

        }


        @keyframes packetFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

        }


        @keyframes arrowFlow {

          from {
            left: -30px;
          }

          to {
            left: 100%;
          }

        }


        /* =====================================================
           RESPONSIVE
        ====================================================== */

        @media (max-width: 1100px) {

          .backup-main {
            grid-template-columns:
              1fr 1fr;
          }


          .recovery-core-area {
            grid-column: 1 / -1;

            grid-row: 1;

            height: 420px;
          }


          .backup-status-panel {
            grid-column: 1;
          }


          .recovery-panel {
            grid-column: 2;
          }


          .backup-features {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }


        @media (max-width: 750px) {

          .backup-section {
            padding: 80px 0;
          }


          .backup-header {
            margin-bottom: 50px;
          }


          .backup-header h2 {
            font-size: 2.8rem;

            letter-spacing: -1.5px;
          }


          .backup-main {
            display: flex;

            flex-direction: column;
          }


          .recovery-core-area {
            width: 100%;

            height: 390px;

            order: -1;
          }


          .backup-status-panel,
          .recovery-panel {
            width: 100%;

            box-sizing: border-box;
          }


          .flow-track {
            flex-direction: column;

            align-items: flex-start;

            margin-left: 10px;
          }


          .flow-arrow {
            width: 1px;

            height: 25px;

            margin-left: 19px;
          }


          .flow-arrow span {
            width: 2px;

            height: 12px;

            top: -12px;

            left: 0;

            animation:
              arrowFlowVertical 2s linear infinite;
          }


          .backup-features {
            grid-template-columns: 1fr;
          }

        }


        @media (max-width: 450px) {

          .backup-header h2 {
            font-size: 2.3rem;
          }


          .recovery-core-area {
            transform: scale(.78);

            margin-top: -35px;

            margin-bottom: -35px;
          }


          .data-card {
            display: none;
          }


          .orbit-two {
            width: 340px;
            height: 340px;
          }


          .orbit-one {
            width: 275px;
            height: 275px;
          }

        }


        @keyframes arrowFlowVertical {

          from {
            top: -12px;
          }

          to {
            top: 100%;
          }

        }

      `}</style>

    </section>
  );
}


/* =========================================================
   BACKUP STEP
========================================================= */

function BackupStep({
  icon,
  number,
  title,
  desc,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="backup-step">

      <div className="backup-step-icon">
        {icon}
      </div>

      <div>

        <span className="backup-step-number">
          {number}
        </span>

        <strong>
          {title}
        </strong>

        <small>
          {desc}
        </small>

      </div>

    </div>
  );
}


/* =========================================================
   BACKUP FEATURE
========================================================= */

function BackupFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="backup-feature">

      <div className="backup-feature-icon">
        {icon}
      </div>

      <strong>
        {title}
      </strong>

      <p>
        {text}
      </p>

    </div>
  );
}
