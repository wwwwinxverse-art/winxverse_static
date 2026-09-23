import {
  ArrowUpRight,
  Clock3,
  Compass,
  MapPin,
  Navigation,
  Route,
} from "lucide-react";

export default function ContactMap() {
  return (
    <section className="location-section">
      <div className="location-container">

        {/* HEADER */}
        <div className="location-header">
          <div className="location-label">
            <span className="location-dot" />
            FIND US
          </div>

          <h2>
            Come find us
            <span> wherever you are.</span>
          </h2>

          <p>
            Our location is easy to find. Explore the map, check the address,
            and get directions to connect with us in person.
          </p>
        </div>

        {/* LOCATION EXPERIENCE */}
        <div className="location-wrapper">

          {/* MAP AREA */}
          <div className="map-area">

            <iframe
              src="https://www.google.com/maps?q=Anna%20Nagar,Watrap,Srivilliputhur,Virudhunagar,Tamil%20Nadu,626132&output=embed"
              className="location-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />

            {/* MAP OVERLAY */}
            <div className="map-overlay" />

            {/* MAP BADGE */}
            <div className="map-status">
              <span className="status-pulse" />
              Location Available
            </div>

            {/* FLOATING PIN */}
            <div className="floating-pin">
              <div className="pin-ring" />
              <div className="pin-icon">
                <MapPin size={22} />
              </div>
            </div>

            {/* MAP COORDINATE STYLE LABEL */}
            <div className="map-corner-label">
              <span>LOCATION</span>
              <strong>TAMIL NADU · INDIA</strong>
            </div>
          </div>

          {/* INFORMATION PANEL */}
          <div className="location-info">

            <div className="info-top">
              <div className="compass-icon">
                <Compass size={21} />
              </div>

              <span>OUR OFFICE</span>
            </div>

            <h3>
              Anna Nagar,
              <br />
              <span>Watrap</span>
            </h3>

            <p className="location-description">
              Visit us at our location in Virudhunagar district. Whether
              you&apos;re planning a project, discussing an idea, or simply
              want to connect with our team, we&apos;re always happy to meet.
            </p>

            {/* ADDRESS */}
            <div className="address-box">
              <MapPin size={18} />

              <div>
                <span>ADDRESS</span>

                <p>
                  Anna Nagar,<br />
                  Watrap, Srivilliputhur,<br />
                  Virudhunagar, Tamil Nadu<br />
                  626132, India
                </p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="location-details">

              <div className="detail-item">
                <div className="detail-icon">
                  <Clock3 size={17} />
                </div>

                <div>
                  <span>VISIT US</span>
                  <strong>By appointment</strong>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <Route size={17} />
                </div>

                <div>
                  <span>AREA</span>
                  <strong>Virudhunagar District</strong>
                </div>
              </div>

            </div>

            {/* DIRECTIONS BUTTON */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Anna%20Nagar%2CWatrap%2CSrivilliputhur%2CVirudhunagar%2CTamil%20Nadu%2C626132"
              target="_blank"
              rel="noopener noreferrer"
              className="direction-button"
            >
              <div className="direction-icon">
                <Navigation size={17} />
              </div>

              <div className="direction-text">
                <strong>Get Directions</strong>
                <span>Open location in Google Maps</span>
              </div>

              <ArrowUpRight size={18} className="direction-arrow" />
            </a>

          </div>
        </div>

        {/* BOTTOM LOCATION STRIP */}
        <div className="location-strip">

          <div className="strip-item">
            <span className="strip-number">01</span>

            <div>
              <strong>Easy to Find</strong>
              <p>Navigate directly using the map above.</p>
            </div>
          </div>

          <div className="strip-line" />

          <div className="strip-item">
            <span className="strip-number">02</span>

            <div>
              <strong>In-Person Meetings</strong>
              <p>Meet with our team by scheduling ahead.</p>
            </div>
          </div>

          <div className="strip-line" />

          <div className="strip-item">
            <span className="strip-number">03</span>

            <div>
              <strong>Local Presence</strong>
              <p>Proudly serving clients from Tamil Nadu.</p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .location-section {
          position: relative;
          width: 100%;
          padding: 90px 20px;
          color: #fff;
          background: transparent;
          overflow: hidden;
        }

        .location-container {
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* =========================================
           HEADER
        ========================================= */

        .location-header {
          max-width: 720px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .location-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #60a5fa;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .location-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.7);
          animation: locationPulse 2s ease-in-out infinite;
        }

        .location-header h2 {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.05;
          letter-spacing: -2px;
          font-weight: 700;
        }

        .location-header h2 span {
          display: block;
          background: linear-gradient(
            90deg,
            #60a5fa,
            #818cf8,
            #67e8f9
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .location-header p {
          max-width: 620px;
          margin: 20px auto 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================================
           MAIN LOCATION WRAPPER
        ========================================= */

        .location-wrapper {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr;
          min-height: 510px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 26px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(16px);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.25),
            inset 0 1px rgba(255, 255, 255, 0.035);
          animation: locationReveal 0.9s ease both;
        }

        /* =========================================
           MAP
        ========================================= */

        .map-area {
          position: relative;
          min-height: 510px;
          overflow: hidden;
          background: #0f172a;
        }

        .location-map {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(0.65) contrast(1.05);
        }

        .map-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.04),
              rgba(2, 6, 23, 0.15)
            ),
            linear-gradient(
              180deg,
              rgba(2, 6, 23, 0.12),
              transparent 35%,
              rgba(2, 6, 23, 0.18)
            );
        }

        /* =========================================
           MAP STATUS
        ========================================= */

        .map-status {
          position: absolute;
          top: 22px;
          left: 22px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          color: #e2e8f0;
          font-size: 10px;
          font-weight: 600;
          background: rgba(2, 6, 23, 0.72);
          backdrop-filter: blur(10px);
        }

        .status-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.8);
          animation: statusBlink 1.8s ease-in-out infinite;
        }

        /* =========================================
           FLOATING MAP PIN
        ========================================= */

        .floating-pin {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 90px;
          height: 90px;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .pin-ring {
          position: absolute;
          width: 85px;
          height: 85px;
          border: 1px solid rgba(96, 165, 250, 0.65);
          border-radius: 50%;
          animation: pinRipple 2.5s ease-out infinite;
        }

        .pin-icon {
          position: relative;
          z-index: 2;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          background: #2563eb;
          border: 4px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            0 0 0 8px rgba(37, 99, 235, 0.16),
            0 12px 30px rgba(37, 99, 235, 0.45);
          animation: pinFloat 3s ease-in-out infinite;
        }

        /* =========================================
           MAP CORNER
        ========================================= */

        .map-corner-label {
          position: absolute;
          right: 22px;
          bottom: 22px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 12px 14px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          border-radius: 10px;
          background: rgba(2, 6, 23, 0.75);
          backdrop-filter: blur(10px);
        }

        .map-corner-label span {
          color: #64748b;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .map-corner-label strong {
          color: #cbd5e1;
          font-size: 10px;
          letter-spacing: 0.8px;
        }

        /* =========================================
           INFORMATION
        ========================================= */

        .location-info {
          padding: 42px 38px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(59, 130, 246, 0.09),
              transparent 38%
            ),
            rgba(2, 6, 23, 0.35);
        }

        .info-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
        }

        .compass-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #93c5fd;
          background: rgba(59, 130, 246, 0.10);
          border: 1px solid rgba(96, 165, 250, 0.15);
          animation: compassSpin 8s linear infinite;
        }

        .info-top span {
          color: #64748b;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .location-info h3 {
          margin: 0;
          color: #f8fafc;
          font-size: 31px;
          line-height: 1.15;
          letter-spacing: -1px;
        }

        .location-info h3 span {
          color: #60a5fa;
        }

        .location-description {
          margin: 18px 0 27px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.75;
        }

        /* =========================================
           ADDRESS
        ========================================= */

        .address-box {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 17px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.025);
        }

        .address-box > svg {
          flex-shrink: 0;
          color: #60a5fa;
          margin-top: 2px;
        }

        .address-box span,
        .detail-item span {
          display: block;
          color: #475569;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 5px;
        }

        .address-box p {
          margin: 0;
          color: #cbd5e1;
          font-size: 11px;
          line-height: 1.65;
        }

        /* =========================================
           DETAILS
        ========================================= */

        .location-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px;
          border-radius: 13px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.018);
        }

        .detail-icon {
          width: 31px;
          height: 31px;
          min-width: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.09);
        }

        .detail-item strong {
          display: block;
          color: #94a3b8;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;
        }

        /* =========================================
           DIRECTIONS
        ========================================= */

        .direction-button {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 22px;
          padding: 13px;
          border-radius: 14px;
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(96, 165, 250, 0.16);
          background: rgba(59, 130, 246, 0.07);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .direction-button:hover {
          transform: translateY(-2px);
          border-color: rgba(96, 165, 250, 0.38);
          background: rgba(59, 130, 246, 0.12);
        }

        .direction-icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          color: #bfdbfe;
          background: rgba(59, 130, 246, 0.15);
        }

        .direction-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .direction-text strong {
          color: #dbeafe;
          font-size: 11px;
        }

        .direction-text span {
          color: #64748b;
          font-size: 9px;
        }

        .direction-arrow {
          margin-left: auto;
          color: #60a5fa;
          transition: transform 0.3s ease;
        }

        .direction-button:hover .direction-arrow {
          transform: translate(3px, -3px);
        }

        /* =========================================
           BOTTOM STRIP
        ========================================= */

        .location-strip {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 28px;
          margin-top: 18px;
          padding: 25px 28px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.018);
        }

        .strip-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .strip-number {
          color: #60a5fa;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          padding-top: 2px;
        }

        .strip-item strong {
          display: block;
          color: #cbd5e1;
          font-size: 11px;
          margin-bottom: 4px;
        }

        .strip-item p {
          margin: 0;
          color: #475569;
          font-size: 9px;
          line-height: 1.5;
        }

        .strip-line {
          width: 1px;
          height: 35px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        @keyframes locationPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.4);
            opacity: 1;
          }
        }

        @keyframes locationReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes statusBlink {
          0%,
          100% {
            opacity: 0.5;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes pinRipple {
          0% {
            transform: scale(0.45);
            opacity: 0.9;
          }

          70% {
            transform: scale(1.15);
            opacity: 0;
          }

          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        @keyframes pinFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes compassSpin {
          0%,
          80%,
          100% {
            transform: rotate(0deg);
          }

          90% {
            transform: rotate(15deg);
          }
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 900px) {
          .location-wrapper {
            grid-template-columns: 1fr;
          }

          .map-area {
            min-height: 420px;
          }

          .location-info {
            padding: 35px;
          }

          .location-strip {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .strip-line {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .location-section {
            padding: 65px 15px;
          }

          .location-header {
            margin-bottom: 38px;
          }

          .location-header h2 {
            font-size: 39px;
            letter-spacing: -1.5px;
          }

          .location-header p {
            font-size: 13px;
          }

          .location-wrapper {
            border-radius: 20px;
          }

          .map-area {
            min-height: 330px;
          }

          .map-status {
            top: 14px;
            left: 14px;
          }

          .map-corner-label {
            right: 14px;
            bottom: 14px;
          }

          .location-info {
            padding: 28px 20px;
          }

          .location-info h3 {
            font-size: 27px;
          }

          .location-details {
            grid-template-columns: 1fr;
          }

          .location-strip {
            padding: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .location-section *,
          .location-section *::before,
          .location-section *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
