// FaceRecognition.tsx

import {
  ScanFace,
  ShieldCheck,
  UserCheck,
  Cpu,
  Eye,
  Fingerprint,
  Activity,
  LockKeyhole,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    icon: ScanFace,
    title: "Instant Detection",
    desc: "Detect and locate human faces from live camera streams in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Verification",
    desc: "Compare facial patterns and verify identity with biometric-level security.",
  },
  {
    icon: UserCheck,
    title: "Identity Matching",
    desc: "Match detected faces against registered profiles quickly and accurately.",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    desc: "Intelligent recognition models continuously analyze facial characteristics.",
  },
  {
    icon: Eye,
    title: "Live Tracking",
    desc: "Track facial movement and maintain recognition while the user moves.",
  },
];

export default function FaceRecognition() {
  return (
    <section className="face-section">
      <div className="face-container">

        {/* =========================
            TOP INTRO
        ========================== */}
        <div className="face-intro">

          <div className="face-label">
            <span className="label-dot" />
            AI BIOMETRIC INTELLIGENCE
          </div>

          <h2>
            Recognize.
            <span> Verify.</span>
            <br />
            <strong>Protect Every Identity.</strong>
          </h2>

          <p>
            Transform your applications with intelligent face recognition
            technology designed to identify, verify, and securely authenticate
            users in real time.
          </p>

        </div>


        {/* =========================
            MAIN AI SCANNER
        ========================== */}
        <div className="face-main">

          {/* LEFT INFORMATION */}
          <div className="face-description">

            <div className="description-badge">
              <Sparkles size={15} />
              Intelligent Recognition Engine
            </div>

            <h3>
              Identity detection
              <br />
              <span>at a glance.</span>
            </h3>

            <p>
              Our facial recognition system analyzes unique facial
              characteristics and transforms them into a secure digital
              identity. From real-time detection to identity verification,
              every stage is designed to work seamlessly with your
              application.
            </p>

            <p>
              The system continuously monitors facial positioning, feature
              patterns, and recognition confidence while adapting to movement
              and changing environments.
            </p>


            {/* STATUS */}
            <div className="security-status">

              <div className="status-icon">
                <CheckCircle2 size={20} />
              </div>

              <div>
                <span>Recognition Engine</span>
                <strong>Operational & Secure</strong>
              </div>

              <div className="status-live">
                <span />
                LIVE
              </div>

            </div>

          </div>


          {/* CENTER SCANNER */}
          <div className="face-scanner-wrapper">

            {/* Outer rotating ring */}
            <div className="scanner-ring ring-one" />

            <div className="scanner-ring ring-two" />

            <div className="scanner-ring ring-three" />


            {/* Corner brackets */}
            <div className="scan-corner corner-top-left" />
            <div className="scan-corner corner-top-right" />
            <div className="scan-corner corner-bottom-left" />
            <div className="scan-corner corner-bottom-right" />


            {/* Scanner */}
            <div className="face-scanner">

              {/* Grid */}
              <div className="scanner-grid" />

              {/* Face */}
              <ScanFace
                className="face-icon"
                size={145}
                strokeWidth={1.2}
              />

              {/* Scanning Beam */}
              <div className="scanner-beam">
                <span />
              </div>


              {/* Face detection points */}
              <div className="face-point point-one" />
              <div className="face-point point-two" />
              <div className="face-point point-three" />
              <div className="face-point point-four" />


              {/* Center target */}
              <div className="scanner-target">
                <div />
              </div>

            </div>


            {/* Floating data cards */}

            <div className="data-card data-card-left">

              <Fingerprint size={17} />

              <div>
                <span>BIOMETRIC ID</span>
                <strong>8F-A29-X1</strong>
              </div>

            </div>


            <div className="data-card data-card-right">

              <Activity size={17} />

              <div>
                <span>CONFIDENCE</span>
                <strong>98.7%</strong>
              </div>

            </div>


            <div className="data-card data-card-bottom">

              <LockKeyhole size={16} />

              <span>ENCRYPTED IDENTITY</span>

            </div>

          </div>


          {/* RIGHT FEATURES */}
          <div className="face-features">

            <div className="features-heading">
              <span>CORE CAPABILITIES</span>
              <div />
            </div>

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="capability"
                  key={index}
                >

                  <div className="capability-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="capability-content">

                    <h4>{item.title}</h4>

                    <p>{item.desc}</p>

                  </div>

                  <span className="capability-number">
                    0{index + 1}
                  </span>

                </div>
              );
            })}

          </div>

        </div>


        {/* =========================
            BOTTOM METRICS
        ========================== */}
        <div className="face-metrics">

          <div className="metric">
            <span>01</span>

            <div>
              <strong>Real-Time</strong>
              <small>Detection</small>
            </div>
          </div>


          <div className="metric-line" />


          <div className="metric">
            <span>02</span>

            <div>
              <strong>Secure</strong>
              <small>Authentication</small>
            </div>
          </div>


          <div className="metric-line" />


          <div className="metric">
            <span>03</span>

            <div>
              <strong>AI Powered</strong>
              <small>Recognition</small>
            </div>
          </div>


          <div className="metric-line" />


          <div className="metric">
            <span>04</span>

            <div>
              <strong>Continuous</strong>
              <small>Monitoring</small>
            </div>
          </div>

        </div>

      </div>


      <style>{`

        /* =====================================================
           SECTION
        ====================================================== */

        .face-section {
          width: 100%;
          padding: 120px 0;
          background: transparent;
          color: white;
          font-family: "Segoe UI", sans-serif;
          overflow: hidden;
        }


        .face-container {
          width: min(1400px, 92%);
          margin: auto;
        }


        /* =====================================================
           INTRO
        ====================================================== */

        .face-intro {
          max-width: 850px;
          margin: 0 auto 85px;
          text-align: center;
        }


        .face-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 8px 14px;

          border: 1px solid rgba(6, 182, 212, 0.25);

          border-radius: 30px;

          color: #67e8f9;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 2px;

          background: rgba(6, 182, 212, 0.04);
        }


        .label-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 8px #22d3ee;

          animation: liveDot 1.5s ease-in-out infinite;
        }


        .face-intro h2 {
          margin: 25px 0 20px;

          font-size: clamp(2.7rem, 5vw, 5rem);

          line-height: 1.02;

          font-weight: 300;

          letter-spacing: -3px;
        }


        .face-intro h2 span {
          background:
            linear-gradient(
              90deg,
              #22d3ee,
              #8b5cf6
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          font-weight: 700;
        }


        .face-intro h2 strong {
          font-weight: 700;
        }


        .face-intro p {
          max-width: 700px;

          margin: auto;

          color: rgba(255,255,255,0.58);

          font-size: 16px;

          line-height: 1.8;
        }


        /* =====================================================
           MAIN
        ====================================================== */

        .face-main {
          display: grid;

          grid-template-columns:
            minmax(250px, 0.85fr)
            minmax(400px, 1.2fr)
            minmax(270px, 0.9fr);

          gap: 55px;

          align-items: center;
        }


        /* =====================================================
           LEFT DESCRIPTION
        ====================================================== */

        .description-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          color: #a5b4fc;

          font-size: 12px;
          font-weight: 600;

          margin-bottom: 20px;
        }


        .face-description h3 {
          font-size: 34px;

          line-height: 1.15;

          margin: 0 0 22px;

          letter-spacing: -1px;
        }


        .face-description h3 span {
          color: #22d3ee;
        }


        .face-description p {
          color: rgba(255,255,255,0.58);

          font-size: 14px;

          line-height: 1.85;

          margin-bottom: 17px;
        }


        /* =====================================================
           SECURITY STATUS
        ====================================================== */

        .security-status {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-top: 30px;

          padding: 14px;

          border: 1px solid rgba(255,255,255,0.08);

          background:
            rgba(255,255,255,0.025);

          border-radius: 14px;
        }


        .status-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          color: #22d3ee;

          background:
            rgba(34,211,238,0.08);
        }


        .security-status span {
          display: block;

          color: rgba(255,255,255,0.42);

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 1px;
        }


        .security-status strong {
          display: block;

          margin-top: 3px;

          font-size: 12px;
        }


        .status-live {
          margin-left: auto;

          display: flex !important;

          align-items: center;

          gap: 5px;

          color: #22d3ee !important;

          font-size: 9px !important;

          letter-spacing: 1px;
        }


        .status-live span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow: 0 0 7px #22d3ee;
        }


        /* =====================================================
           SCANNER AREA
        ====================================================== */

        .face-scanner-wrapper {
          position: relative;

          width: 410px;
          height: 410px;

          margin: auto;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        .scanner-ring {
          position: absolute;

          border-radius: 50%;

          border: 1px solid rgba(34,211,238,0.18);
        }


        .ring-one {
          width: 400px;
          height: 400px;

          animation:
            rotateRing 18s linear infinite;
        }


        .ring-two {
          width: 350px;
          height: 350px;

          border-style: dashed;

          border-color: rgba(139,92,246,0.25);

          animation:
            rotateRingReverse 14s linear infinite;
        }


        .ring-three {
          width: 290px;
          height: 290px;

          border-color: rgba(34,211,238,0.15);

          animation:
            ringPulse 3s ease-in-out infinite;
        }


        .face-scanner {
          position: relative;

          width: 250px;
          height: 250px;

          border-radius: 50%;

          overflow: hidden;

          background:
            radial-gradient(
              circle,
              rgba(34,211,238,0.07),
              rgba(139,92,246,0.03) 55%,
              transparent 75%
            );

          border:
            1px solid rgba(34,211,238,0.25);

          box-shadow:
            inset 0 0 50px rgba(34,211,238,0.05),
            0 0 70px rgba(34,211,238,0.08);
        }


        /* =====================================================
           GRID
        ====================================================== */

        .scanner-grid {
          position: absolute;

          inset: 0;

          opacity: 0.18;

          background-image:
            linear-gradient(
              rgba(34,211,238,0.18) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.18) 1px,
              transparent 1px
            );

          background-size: 25px 25px;

          animation: gridMove 8s linear infinite;
        }


        /* =====================================================
           FACE
        ====================================================== */

        .face-icon {
          position: absolute;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          color: #67e8f9;

          filter:
            drop-shadow(
              0 0 15px rgba(34,211,238,0.6)
            );

          animation:
            faceFloat 3s ease-in-out infinite;
        }


        /* =====================================================
           SCANNER BEAM
        ====================================================== */

        .scanner-beam {
          position: absolute;

          left: 20px;
          right: 20px;

          height: 2px;

          top: 20px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #22d3ee,
              #8b5cf6,
              #22d3ee,
              transparent
            );

          box-shadow:
            0 0 12px #22d3ee,
            0 0 25px rgba(139,92,246,0.8);

          animation:
            scanBeam 2.8s ease-in-out infinite;
        }


        .scanner-beam span {
          position: absolute;

          left: 15%;

          right: 15%;

          height: 20px;

          top: -9px;

          background:
            linear-gradient(
              rgba(34,211,238,0.18),
              transparent
            );

          filter: blur(4px);
        }


        /* =====================================================
           FACE POINTS
        ====================================================== */

        .face-point {
          position: absolute;

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 12px #22d3ee;

          animation:
            pointPulse 1.5s ease-in-out infinite;
        }


        .point-one {
          top: 83px;
          left: 91px;
        }


        .point-two {
          top: 83px;
          right: 91px;

          animation-delay: .3s;
        }


        .point-three {
          top: 132px;
          left: 122px;

          animation-delay: .6s;
        }


        .point-four {
          bottom: 82px;
          left: 122px;

          animation-delay: .9s;
        }


        /* =====================================================
           TARGET
        ====================================================== */

        .scanner-target {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 30px;
          height: 30px;

          transform:
            translate(-50%, -50%);

          border:
            1px solid rgba(34,211,238,0.6);

          border-radius: 50%;
        }


        .scanner-target div {
          position: absolute;

          width: 5px;
          height: 5px;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          background: #22d3ee;

          border-radius: 50%;
        }


        /* =====================================================
           CORNERS
        ====================================================== */

        .scan-corner {
          position: absolute;

          width: 32px;
          height: 32px;

          border-color: #22d3ee;

          border-style: solid;

          z-index: 5;
        }


        .corner-top-left {
          top: 72px;
          left: 72px;

          border-width: 2px 0 0 2px;
        }


        .corner-top-right {
          top: 72px;
          right: 72px;

          border-width: 2px 2px 0 0;
        }


        .corner-bottom-left {
          bottom: 72px;
          left: 72px;

          border-width: 0 0 2px 2px;
        }


        .corner-bottom-right {
          bottom: 72px;
          right: 72px;

          border-width: 0 2px 2px 0;
        }


        /* =====================================================
           DATA CARDS
        ====================================================== */

        .data-card {
          position: absolute;

          display: flex;

          align-items: center;

          gap: 9px;

          padding: 10px 13px;

          background:
            rgba(10,15,30,0.72);

          backdrop-filter:
            blur(12px);

          border:
            1px solid rgba(255,255,255,0.1);

          border-radius: 10px;

          box-shadow:
            0 12px 35px rgba(0,0,0,0.25);

          z-index: 10;

          animation:
            floatingCard 4s ease-in-out infinite;
        }


        .data-card svg {
          color: #22d3ee;
        }


        .data-card span {
          display: block;

          color: rgba(255,255,255,0.4);

          font-size: 8px;

          letter-spacing: 1px;
        }


        .data-card strong {
          display: block;

          margin-top: 2px;

          color: white;

          font-size: 10px;
        }


        .data-card-left {
          top: 95px;
          left: -10px;
        }


        .data-card-right {
          right: -15px;
          bottom: 100px;

          animation-delay: 1s;
        }


        .data-card-bottom {
          bottom: 27px;
          left: 50%;

          transform:
            translateX(-50%);

          color: #a5b4fc;

          animation-delay: 2s;
        }


        /* =====================================================
           RIGHT CAPABILITIES
        ====================================================== */

        .features-heading {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 22px;
        }


        .features-heading span {
          color: rgba(255,255,255,0.4);

          font-size: 10px;

          letter-spacing: 2px;

          font-weight: 700;
        }


        .features-heading div {
          flex: 1;

          height: 1px;

          background:
            rgba(255,255,255,0.08);
        }


        .capability {
          position: relative;

          display: flex;

          gap: 23px;

          padding: 15px 0;

        

          transition:
            transform .3s ease,
            border-color .3s ease;
        }


        .capability:hover {
          transform: translateX(7px);

          border-color:
            rgba(34,211,238,0.3);
        }


        .capability-icon {
          width: 39px;
          height: 39px;

          flex-shrink: 0;

          display: flex;

          margin-left: 10px;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          color: #67e8f9;

          background:
            rgba(34,211,238,0.06);

          border:
            1px solid rgba(34,211,238,0.12);
        }


        .capability-content h4 {
          margin: 0 0 5px;

          font-size: 13px;
        }


        .capability-content p {
          margin: 0;

          color: rgba(255,255,255,0.45);

          font-size: 11px;

          line-height: 1.6;
        }


        .capability-number {
          margin-right: 10px;

          color: rgba(255,255,255,0.2);

          font-size: 9px;

          font-weight: 700;
        }


        /* =====================================================
           BOTTOM METRICS
        ====================================================== */

        .face-metrics {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 35px;

          margin-top: 95px;

          padding-top: 28px;

          border-top:
            1px solid rgba(255,255,255,0.07);
        }


        .metric {
          display: flex;

          align-items: center;

          gap: 12px;
        }


        .metric > span {
          color: #22d3ee;

          font-size: 10px;

          font-weight: 700;
        }


        .metric strong {
          display: block;

          font-size: 12px;
        }


        .metric small {
          display: block;

          margin-top: 3px;

          color: rgba(255,255,255,0.38);

          font-size: 10px;
        }


        .metric-line {
          width: 1px;

          height: 30px;

          background:
            rgba(255,255,255,0.08);
        }


        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes scanBeam {

          0% {
            top: 20px;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          100% {
            top: 228px;
            opacity: 0;
          }

        }


        @keyframes rotateRing {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        @keyframes rotateRingReverse {

          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }

        }


        @keyframes ringPulse {

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


        @keyframes faceFloat {

          0%,
          100% {
            transform:
              translate(-50%, -50%)
              translateY(0);
          }

          50% {
            transform:
              translate(-50%, -50%)
              translateY(-7px);
          }

        }


        @keyframes pointPulse {

          0%,
          100% {
            opacity: .35;
            transform: scale(.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }

        }


        @keyframes floatingCard {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }

        }


        @keyframes gridMove {

          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(25px);
          }

        }


        @keyframes liveDot {

          0%,
          100% {
            opacity: .5;
            transform: scale(.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }

        }


        /* =====================================================
           RESPONSIVE
        ====================================================== */

        @media (max-width: 1100px) {

          .face-main {
            grid-template-columns:
              1fr 1fr;
          }

          .face-scanner-wrapper {
            grid-column: 1 / -1;
            grid-row: 1;
          }

          .face-description {
            grid-column: 1;
          }

          .face-features {
            grid-column: 2;
          }

        }


        @media (max-width: 700px) {

          .face-section {
            padding: 80px 0;
          }


          .face-intro {
            margin-bottom: 55px;
          }


          .face-intro h2 {
            font-size: 2.6rem;
            letter-spacing: -1.5px;
          }


          .face-main {
            display: flex;

            flex-direction: column;
          }


          .face-scanner-wrapper {
            order: -1;

            transform:
              scale(.78);

            margin-top: -30px;

            margin-bottom: -30px;
          }


          .face-description,
          .face-features {
            width: 100%;
          }


          .face-metrics {
            flex-wrap: wrap;

            gap: 20px;

            margin-top: 60px;
          }


          .metric-line {
            display: none;
          }

        }


        @media (max-width: 430px) {

          .face-scanner-wrapper {
            transform:
              scale(.65);

            margin-top: -65px;
            margin-bottom: -65px;
          }


          .face-intro h2 {
            font-size: 2.2rem;
          }

        }

      `}</style>
    </section>
  );
}
