import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* TOP INTRO */}
        <div className="contact-intro">
          <div className="intro-badge">
            <span className="badge-dot" />
            Let&apos;s Connect
          </div>

          <h1>
            Have an idea?
            <span> Let&apos;s build it together.</span>
          </h1>

          <p>
            Whether you are planning a new digital product, improving an
            existing platform, or simply exploring an idea, we would love to
            hear from you. Share your requirements with us and let&apos;s
            start a meaningful conversation.
          </p>
        </div>

        {/* MAIN CONTACT HUB */}
        <div className="contact-hub">

          {/* LEFT INFORMATION AREA */}
          <div className="contact-info">

            <div className="info-heading">
              <div className="heading-icon">
                <MessageCircle size={21} />
              </div>

              <div>
                <span>CONTACT HUB</span>
                <h2>We&apos;re here to help.</h2>
              </div>
            </div>

            <p className="info-description">
              Tell us what you&apos;re working on, what challenge you&apos;re
              facing, or what you want to build. Our team will review your
              message and get back to you with the right next steps.
            </p>

            {/* CONTACT CHANNELS */}
            <div className="contact-channels">

              {/* EMAIL */}
              <a
                href="mailto:www.winxverse@gmail.com"
                className="contact-channel"
              >
                <div className="channel-icon email-icon">
                  <Mail size={20} />
                </div>

                <div className="channel-content">
                  <span>Email us</span>
                  <strong>www.winxverse@gmail.com</strong>
                  <small>For project enquiries &amp; general questions</small>
                </div>

                <ArrowRight className="channel-arrow" size={18} />
              </a>

              {/* PHONE */}
              <a
                href="tel:+916380623206"
                className="contact-channel"
              >
                <div className="channel-icon phone-icon">
                  <Phone size={20} />
                </div>

                <div className="channel-content">
                  <span>Call us</span>
                  <strong>+91 63806 23206</strong>
                  <small>Discuss your requirements directly</small>
                </div>

                <ArrowRight className="channel-arrow" size={18} />
              </a>

              {/* LOCATION */}
              <div className="contact-channel">
                <div className="channel-icon location-icon">
                  <MapPin size={20} />
                </div>

                <div className="channel-content">
                  <span>Our location</span>
                  <strong>Tamil Nadu, India</strong>
                  <small>
                    1/98/95, Maharajapuram, Virudhunagar
                  </small>
                </div>
              </div>

            </div>

            {/* RESPONSE CARD */}
            <div className="response-card">
              <div className="response-glow" />

              <div className="response-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <strong>Let&apos;s start a conversation</strong>
                <p>
                  Send us your requirements and we&apos;ll get back to you
                  as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-area">

            <div className="form-top">
              <div>
                <span>START A PROJECT</span>
                <h2>Send us a message</h2>
              </div>

              <div className="form-sparkle">
                <Sparkles size={18} />
              </div>
            </div>

            <p className="form-description">
              Fill in the details below and tell us a little about what you
              need. The more details you provide, the better we can understand
              your requirements.
            </p>

            <form className="contact-form">

              {/* NAME + EMAIL */}
              <div className="form-row">

                <div className="field-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="field-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

              </div>

              {/* PHONE + PROJECT */}
              <div className="form-row">

                <div className="field-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <div className="field-group">
                  <label>Project Type</label>

                  <select defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Web Application</option>
                    <option>Mobile Application</option>
                    <option>Software Development</option>
                    <option>UI / UX Development</option>
                    <option>Custom Solution</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div className="field-group">
                <label>Tell us about your project</label>

                <textarea
                  rows={5}
                  placeholder="Describe your idea, requirements, timeline, or any specific challenge you want us to solve..."
                />
              </div>

              {/* FORM FOOTER */}
              <div className="form-footer">

                <div className="privacy-note">
                  <span className="privacy-dot" />
                  <span>
                    Your information will only be used to respond to your
                    enquiry.
                  </span>
                </div>

                <button type="submit" className="send-button">
                  <span>Send Message</span>
                  <Send size={17} />
                </button>

              </div>

            </form>
          </div>
        </div>

        {/* BOTTOM PROCESS */}
        <div className="contact-process">

          <div className="process-heading">
            <span>WHAT HAPPENS NEXT</span>
            <h2>A simple path from idea to conversation.</h2>
          </div>

          <div className="process-line">

            <div className="process-item">
              <div className="process-number">01</div>

              <div>
                <h3>Tell us your idea</h3>
                <p>
                  Share your goals, requirements, and the problem you want
                  to solve.
                </p>
              </div>
            </div>

            <div className="process-connector" />

            <div className="process-item">
              <div className="process-number">02</div>

              <div>
                <h3>We understand</h3>
                <p>
                  We review your requirements and identify the right
                  technical approach.
                </p>
              </div>
            </div>

            <div className="process-connector" />

            <div className="process-item">
              <div className="process-number">03</div>

              <div>
                <h3>Let&apos;s discuss</h3>
                <p>
                  We connect with you to discuss scope, expectations, and
                  possible next steps.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .contact-section {
          position: relative;
          width: 100%;
          padding: 100px 20px;
          color: #fff;
          overflow: hidden;
          background: transparent;
        }

        .contact-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* =========================================
           INTRO
        ========================================= */

        .contact-intro {
          max-width: 850px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .intro-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 15px;
          border: 1px solid rgba(96, 165, 250, 0.25);
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.07);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.8);
          animation: contactPulse 2s ease-in-out infinite;
        }

        .contact-intro h1 {
          margin: 0;
          font-size: clamp(38px, 5vw, 66px);
          line-height: 1.04;
          letter-spacing: -2.5px;
          font-weight: 700;
        }

        .contact-intro h1 span {
          display: block;
          background: linear-gradient(
            90deg,
            #60a5fa,
            #a78bfa,
            #67e8f9
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-intro p {
          max-width: 720px;
          margin: 25px auto 0;
          color: #94a3b8;
          font-size: 16px;
          line-height: 1.8;
        }

        /* =========================================
           MAIN HUB
        ========================================= */

        .contact-hub {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(18px);
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.28),
            inset 0 1px rgba(255, 255, 255, 0.04);
          animation: hubReveal 0.9s ease both;
        }

        /* =========================================
           INFO AREA
        ========================================= */

        .contact-info {
          position: relative;
          padding: 48px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(59, 130, 246, 0.10),
              transparent 32%
            ),
            rgba(255, 255, 255, 0.015);
        }

        .info-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 22px;
        }

        .heading-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #93c5fd;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(96, 165, 250, 0.18);
        }

        .info-heading span,
        .form-top span,
        .process-heading > span {
          display: block;
          color: #64748b;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 5px;
        }

        .info-heading h2,
        .form-top h2 {
          margin: 0;
          font-size: 25px;
          font-weight: 650;
          letter-spacing: -0.5px;
        }

        .info-description {
          color: #94a3b8;
          line-height: 1.75;
          font-size: 14px;
          margin: 0 0 32px;
        }

        /* =========================================
           CONTACT CHANNELS
        ========================================= */

        .contact-channels {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-channel {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.025);
          text-decoration: none;
          color: inherit;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .contact-channel:hover {
          transform: translateX(5px);
          border-color: rgba(96, 165, 250, 0.30);
          background: rgba(59, 130, 246, 0.06);
        }

        .channel-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }

        .email-icon {
          color: #93c5fd;
          background: rgba(59, 130, 246, 0.12);
        }

        .phone-icon {
          color: #86efac;
          background: rgba(34, 197, 94, 0.10);
        }

        .location-icon {
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.11);
        }

        .channel-content {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .channel-content span {
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .channel-content strong {
          color: #e2e8f0;
          font-size: 13px;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        .channel-content small {
          color: #64748b;
          font-size: 10px;
          line-height: 1.4;
        }

        .channel-arrow {
          margin-left: auto;
          color: #475569;
          transition: transform 0.3s ease;
        }

        .contact-channel:hover .channel-arrow {
          transform: translateX(4px);
          color: #60a5fa;
        }

        /* =========================================
           RESPONSE CARD
        ========================================= */

        .response-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 13px;
          overflow: hidden;
          margin-top: 28px;
          padding: 17px;
          border-radius: 16px;
          border: 1px solid rgba(96, 165, 250, 0.12);
          background: rgba(59, 130, 246, 0.045);
        }

        .response-glow {
          position: absolute;
          width: 100px;
          height: 100px;
          right: -50px;
          top: -50px;
          border-radius: 50%;
          background: rgba(96, 165, 250, 0.12);
          filter: blur(20px);
        }

        .response-icon {
          position: relative;
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #93c5fd;
          background: rgba(59, 130, 246, 0.12);
        }

        .response-card strong {
          display: block;
          color: #e2e8f0;
          font-size: 13px;
          margin-bottom: 5px;
        }

        .response-card p {
          position: relative;
          color: #64748b;
          font-size: 11px;
          line-height: 1.6;
          margin: 0;
        }

        /* =========================================
           FORM
        ========================================= */

        .contact-form-area {
          padding: 48px;
        }

        .form-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 12px;
        }

        .form-sparkle {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.10);
          border: 1px solid rgba(139, 92, 246, 0.16);
          animation: sparkleFloat 3s ease-in-out infinite;
        }

        .form-description {
          max-width: 620px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          margin: 0 0 32px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-group label {
          color: #cbd5e1;
          font-size: 11px;
          font-weight: 600;
        }

        .field-group input,
        .field-group textarea,
        .field-group select {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.08);
          outline: none;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
          color: #e2e8f0;
          padding: 13px 14px;
          font-size: 13px;
          font-family: inherit;
          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .field-group input,
        .field-group select {
          height: 46px;
        }

        .field-group textarea {
          resize: vertical;
          min-height: 125px;
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: #475569;
        }

        .field-group select {
          appearance: none;
          cursor: pointer;
        }

        .field-group select option {
          background: #111827;
          color: #fff;
        }

        .field-group input:focus,
        .field-group textarea:focus,
        .field-group select:focus {
          border-color: rgba(96, 165, 250, 0.55);
          background: rgba(59, 130, 246, 0.035);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.06);
        }

        /* =========================================
           FORM FOOTER
        ========================================= */

        .form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 4px;
        }

        .privacy-note {
          display: flex;
          align-items: center;
          gap: 8px;
          max-width: 270px;
          color: #475569;
          font-size: 10px;
          line-height: 1.5;
        }

        .privacy-dot {
          width: 6px;
          height: 6px;
          min-width: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px rgba(52, 211, 153, 0.6);
        }

        .send-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 165px;
          height: 47px;
          border: 0;
          border-radius: 12px;
          cursor: pointer;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          background: linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
          );
          box-shadow:
            0 10px 25px rgba(37, 99, 235, 0.22);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
          overflow: hidden;
        }

        .send-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.18),
            transparent
          );
          transform: skewX(-20deg);
          transition: left 0.6s ease;
        }

        .send-button:hover {
          transform: translateY(-2px);
          box-shadow:
            0 14px 32px rgba(37, 99, 235, 0.32);
        }

        .send-button:hover::before {
          left: 130%;
        }

        /* =========================================
           PROCESS SECTION
        ========================================= */

        .contact-process {
          margin-top: 75px;
          padding: 38px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .process-heading {
          margin-bottom: 38px;
        }

        .process-heading h2 {
          margin: 0;
          color: #e2e8f0;
          font-size: 25px;
          font-weight: 600;
          letter-spacing: -0.5px;
        }

        .process-line {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 22px;
        }

        .process-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .process-number {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 39px;
          height: 39px;
          border-radius: 12px;
          border: 1px solid rgba(96, 165, 250, 0.18);
          background: rgba(59, 130, 246, 0.07);
          color: #60a5fa;
          font-size: 11px;
          font-weight: 700;
        }

        .process-item h3 {
          margin: 1px 0 6px;
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 600;
        }

        .process-item p {
          margin: 0;
          color: #64748b;
          font-size: 11px;
          line-height: 1.6;
        }

        .process-connector {
          width: 50px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(96, 165, 250, 0.30),
            rgba(139, 92, 246, 0.05)
          );
          position: relative;
        }

        .process-connector::after {
          content: "";
          position: absolute;
          left: 0;
          top: -1px;
          width: 8px;
          height: 3px;
          border-radius: 999px;
          background: #60a5fa;
          animation: connectorMove 2.5s linear infinite;
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        @keyframes contactPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        @keyframes hubReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkleFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-4px) rotate(5deg);
          }
        }

        @keyframes connectorMove {
          0% {
            transform: translateX(0);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateX(42px);
            opacity: 0;
          }
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 950px) {
          .contact-hub {
            grid-template-columns: 1fr;
          }

          .contact-info {
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .process-line {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .process-connector {
            display: none;
          }
        }

        @media (max-width: 650px) {
          .contact-section {
            padding: 70px 16px;
          }

          .contact-intro {
            margin-bottom: 45px;
          }

          .contact-intro h1 {
            font-size: 40px;
            letter-spacing: -1.5px;
          }

          .contact-intro p {
            font-size: 14px;
          }

          .contact-info,
          .contact-form-area {
            padding: 28px 22px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .form-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .privacy-note {
            max-width: 100%;
          }

          .send-button {
            width: 100%;
          }

          .contact-process {
            margin-top: 50px;
            padding: 28px 5px;
          }

          .process-heading h2 {
            font-size: 21px;
          }

          .channel-content strong {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-section *,
          .contact-section *::before,
          .contact-section *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
