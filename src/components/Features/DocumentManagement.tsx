import {
  FileText,
  FolderOpen,
  ShieldCheck,
  Search,
  CloudUpload,
  LockKeyhole,
  FileCheck2,
  Files,
  MoreHorizontal,
  CheckCircle2,
  Clock3,
  Archive,
  Sparkles,
} from "lucide-react";

const documentTypes = [
  {
    name: "Contracts",
    count: "128",
    icon: FileText,
  },
  {
    name: "Reports",
    count: "84",
    icon: FileCheck2,
  },
  {
    name: "Invoices",
    count: "246",
    icon: Files,
  },
  {
    name: "Archives",
    count: "92",
    icon: Archive,
  },
];

export default function DocumentManagement() {
  return (
    <section className="document-section">

      <div className="document-container">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="document-header">

          <div className="document-eyebrow">
            <span className="eyebrow-icon">
              <Sparkles size={13} />
            </span>

            SMART DOCUMENT WORKSPACE
          </div>

          <h2>
            Every document.
            <br />

            <span>Organized & protected.</span>
          </h2>

          <p>
            Store, organize, search, secure, and manage your business
            documents from one intelligent workspace designed for
            effortless document control.
          </p>

        </div>


        {/* =====================================================
            MAIN DOCUMENT WORKSPACE
        ====================================================== */}

        <div className="document-workspace">

          {/* =================================================
              LEFT SIDEBAR
          ================================================== */}

          <aside className="document-sidebar">

            <div className="sidebar-title">
              WORKSPACE
            </div>

            <div className="sidebar-item active">
              <FolderOpen size={17} />
              <span>My Documents</span>
              <strong>550</strong>
            </div>

            <div className="sidebar-item">
              <Clock3 size={17} />
              <span>Recent Files</span>
            </div>

            <div className="sidebar-item">
              <FileCheck2 size={17} />
              <span>Shared With Me</span>
            </div>

            <div className="sidebar-item">
              <Archive size={17} />
              <span>Archives</span>
            </div>


            <div className="sidebar-divider" />


            <div className="storage-title">
              STORAGE
            </div>

            <div className="storage-value">
              <strong>68%</strong>
              <span>Used</span>
            </div>

            <div className="storage-bar">
              <span />
            </div>

            <small>
              6.8 GB of 10 GB
            </small>

          </aside>


          {/* =================================================
              CENTER DOCUMENT AREA
          ================================================== */}

          <main className="document-center">

            {/* Top bar */}

            <div className="document-toolbar">

              <div className="toolbar-title">
                <FolderOpen size={18} />
                <span>My Documents</span>
              </div>

              <div className="toolbar-actions">

                <button>
                  <Search size={15} />
                  Search
                </button>

                <button className="upload-button">
                  <CloudUpload size={15} />
                  Upload
                </button>

              </div>

            </div>


            {/* Search */}

            <div className="document-search">

              <Search size={17} />

              <span>
                Search documents, folders or keywords...
              </span>

              <kbd>
                ⌘ K
              </kbd>

            </div>


            {/* Folder row */}

            <div className="folder-section">

              <div className="section-label">
                FOLDERS
              </div>

              <div className="folder-grid">

                {documentTypes.map((folder, index) => {
                  const Icon = folder.icon;

                  return (
                    <div
                      className="folder-card"
                      key={index}
                    >

                      <div className="folder-icon">
                        <Icon size={19} />
                      </div>

                      <div className="folder-info">
                        <strong>{folder.name}</strong>
                        <span>{folder.count} files</span>
                      </div>

                      <MoreHorizontal size={15} />

                    </div>
                  );
                })}

              </div>

            </div>


            {/* Recent documents */}

            <div className="recent-section">

              <div className="recent-heading">

                <div>
                  <div className="section-label">
                    RECENT DOCUMENTS
                  </div>

                  <h3>
                    Your latest files
                  </h3>
                </div>

                <span>
                  View all
                </span>

              </div>


              <div className="file-list">

                <DocumentRow
                  icon={<FileText size={19} />}
                  name="Business Agreement.pdf"
                  meta="PDF • 2.4 MB"
                  status="Secure"
                />

                <DocumentRow
                  icon={<FileCheck2 size={19} />}
                  name="Annual Report.docx"
                  meta="DOCX • 1.8 MB"
                  status="Verified"
                />

                <DocumentRow
                  icon={<Files size={19} />}
                  name="Financial Statement.xlsx"
                  meta="XLSX • 860 KB"
                  status="Secure"
                />

              </div>

            </div>

          </main>


          {/* =================================================
              RIGHT SECURITY PANEL
          ================================================== */}

          <aside className="document-security">

            <div className="security-top">

              <div className="security-icon">
                <LockKeyhole size={19} />
              </div>

              <div>
                <span>DOCUMENT SECURITY</span>
                <strong>Protected</strong>
              </div>

            </div>


            {/* Security circle */}

            <div className="security-circle">

              <div className="security-circle-inner">

                <ShieldCheck size={28} />

                <strong>100%</strong>

                <span>Secure</span>

              </div>

            </div>


            {/* Security details */}

            <div className="security-list">

              <SecurityItem
                title="Encrypted Storage"
                desc="Files protected at rest"
              />

              <SecurityItem
                title="Access Control"
                desc="Permission-based access"
              />

              <SecurityItem
                title="Version History"
                desc="Track every change"
              />

            </div>


            <div className="secure-note">

              <CheckCircle2 size={15} />

              <span>
                All documents are continuously protected.
              </span>

            </div>

          </aside>

        </div>


        {/* =====================================================
            BOTTOM FLOW
        ====================================================== */}

        <div className="document-flow">

          <div className="flow-title">
            DOCUMENT LIFECYCLE
          </div>


          <div className="flow-line">

            <FlowStep
              number="01"
              title="Upload"
              icon={<CloudUpload size={17} />}
            />

            <div className="flow-connector" />

            <FlowStep
              number="02"
              title="Organize"
              icon={<FolderOpen size={17} />}
            />

            <div className="flow-connector" />

            <FlowStep
              number="03"
              title="Collaborate"
              icon={<Files size={17} />}
            />

            <div className="flow-connector" />

            <FlowStep
              number="04"
              title="Secure"
              icon={<ShieldCheck size={17} />}
            />

            <div className="flow-connector" />

            <FlowStep
              number="05"
              title="Archive"
              icon={<Archive size={17} />}
            />

          </div>

        </div>

      </div>


      <style>{`

        /* =====================================================
           SECTION
        ====================================================== */

        .document-section {
          width: 100%;
          padding: 120px 0;
          background: transparent;
          color: #fff;
          font-family: "Segoe UI", sans-serif;
          overflow: hidden;
        }


        .document-container {
          width: min(1400px, 92%);
          margin: auto;
        }


        /* =====================================================
           HEADER
        ====================================================== */

        .document-header {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 70px;
        }


        .document-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 14px;

          border: 1px solid rgba(139, 92, 246, 0.25);

          border-radius: 30px;

          color: #c4b5fd;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 2px;

          background:
            rgba(139, 92, 246, 0.04);
        }


        .eyebrow-icon {
          display: flex;

          color: #a78bfa;

          animation: sparkleRotate 3s linear infinite;
        }


        .document-header h2 {
          margin: 25px 0 20px;

          font-size: clamp(2.8rem, 5vw, 5rem);

          line-height: 1.02;

          font-weight: 300;

          letter-spacing: -3px;
        }


        .document-header h2 span {
          font-weight: 750;

          background:
            linear-gradient(
              90deg,
              #a78bfa,
              #22d3ee
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }


        .document-header p {
          max-width: 680px;

          margin: auto;

          color: rgba(255,255,255,0.55);

          font-size: 15px;

          line-height: 1.8;
        }


        /* =====================================================
           WORKSPACE
        ====================================================== */

        .document-workspace {
          display: grid;

          grid-template-columns:
            205px
            minmax(450px, 1fr)
            245px;

          min-height: 590px;

          border:
            1px solid rgba(255,255,255,0.09);

          border-radius: 24px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.035),
              rgba(255,255,255,0.012)
            );

          backdrop-filter: blur(20px);

          overflow: hidden;

          box-shadow:
            0 30px 100px rgba(0,0,0,0.2);
        }


        /* =====================================================
           SIDEBAR
        ====================================================== */

        .document-sidebar {
          padding: 28px 17px;

          border-right:
            1px solid rgba(255,255,255,0.07);

          background:
            rgba(255,255,255,0.015);
        }


        .sidebar-title,
        .storage-title {
          margin: 0 10px 15px;

          color: rgba(255,255,255,0.28);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 1.5px;
        }


        .sidebar-item {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 11px 10px;

          margin-bottom: 4px;

          border-radius: 9px;

          color: rgba(255,255,255,0.48);

          font-size: 11px;

          transition:
            .25s ease;
        }


        .sidebar-item svg {
          flex-shrink: 0;
        }


        .sidebar-item strong {
          margin-left: auto;

          color: rgba(255,255,255,0.25);

          font-size: 9px;
        }


        .sidebar-item:hover {
          color: white;

          background:
            rgba(255,255,255,0.04);

          transform:
            translateX(3px);
        }


        .sidebar-item.active {
          color: #c4b5fd;

          background:
            rgba(139,92,246,0.09);

          border:
            1px solid rgba(139,92,246,0.14);
        }


        .sidebar-divider {
          height: 1px;

          margin: 25px 10px;

          background:
            rgba(255,255,255,0.06);
        }


        .storage-title {
          margin-bottom: 10px;
        }


        .storage-value {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin: 0 10px 8px;
        }


        .storage-value strong {
          font-size: 18px;
        }


        .storage-value span {
          color: rgba(255,255,255,0.35);

          font-size: 9px;
        }


        .storage-bar {
          height: 4px;

          margin: 0 10px 8px;

          overflow: hidden;

          border-radius: 10px;

          background:
            rgba(255,255,255,0.08);
        }


        .storage-bar span {
          display: block;

          width: 68%;

          height: 100%;

          border-radius: inherit;

          background:
            linear-gradient(
              90deg,
              #8b5cf6,
              #22d3ee
            );

          animation:
            storageGrow 2s ease forwards;
        }


        .document-sidebar small {
          display: block;

          margin: 0 10px;

          color: rgba(255,255,255,0.28);

          font-size: 9px;
        }


        /* =====================================================
           CENTER
        ====================================================== */

        .document-center {
          padding: 25px 30px;

          min-width: 0;
        }


        .document-toolbar {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 20px;
        }


        .toolbar-title {
          display: flex;

          align-items: center;

          gap: 9px;

          font-size: 14px;

          font-weight: 600;
        }


        .toolbar-title svg {
          color: #a78bfa;
        }


        .toolbar-actions {
          display: flex;

          gap: 7px;
        }


        .toolbar-actions button {
          display: flex;

          align-items: center;

          gap: 6px;

          border:
            1px solid rgba(255,255,255,0.08);

          background:
            rgba(255,255,255,0.025);

          color: rgba(255,255,255,0.55);

          border-radius: 8px;

          padding: 8px 10px;

          font-size: 10px;

          cursor: pointer;

          transition: .25s ease;
        }


        .toolbar-actions button:hover {
          color: white;

          border-color:
            rgba(255,255,255,0.18);
        }


        .toolbar-actions .upload-button {
          color: #fff;

          border-color:
            rgba(139,92,246,0.3);

          background:
            rgba(139,92,246,0.12);
        }


        /* =====================================================
           SEARCH
        ====================================================== */

        .document-search {
          display: flex;

          align-items: center;

          gap: 10px;

          height: 44px;

          padding: 0 13px;

          border:
            1px solid rgba(255,255,255,0.08);

          border-radius: 10px;

          color: rgba(255,255,255,0.3);

          font-size: 11px;

          background:
            rgba(255,255,255,0.02);

          transition: .3s ease;
        }


        .document-search:focus-within {
          border-color:
            rgba(139,92,246,0.45);

          box-shadow:
            0 0 25px rgba(139,92,246,0.08);
        }


        .document-search kbd {
          margin-left: auto;

          padding: 4px 7px;

          border:
            1px solid rgba(255,255,255,0.08);

          border-radius: 5px;

          color: rgba(255,255,255,0.3);

          font-size: 9px;
        }


        /* =====================================================
           FOLDERS
        ====================================================== */

        .folder-section {
          margin-top: 27px;
        }


        .section-label {
          color: rgba(255,255,255,0.28);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 1.5px;
        }


        .folder-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 8px;

          margin-top: 12px;
        }


        .folder-card {
          display: flex;

          align-items: center;

          gap: 10px;

          padding: 13px;

          border:
            1px solid rgba(255,255,255,0.06);

          border-radius: 11px;

          background:
            rgba(255,255,255,0.02);

          transition:
            transform .25s ease,
            background .25s ease,
            border-color .25s ease;
        }


        .folder-card:hover {
          transform:
            translateY(-3px);

          background:
            rgba(139,92,246,0.07);

          border-color:
            rgba(139,92,246,0.2);
        }


        .folder-icon {
          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #a78bfa;

          border-radius: 8px;

          background:
            rgba(139,92,246,0.08);
        }


        .folder-info {
          min-width: 0;

          flex: 1;
        }


        .folder-info strong {
          display: block;

          font-size: 11px;
        }


        .folder-info span {
          display: block;

          margin-top: 3px;

          color: rgba(255,255,255,0.3);

          font-size: 9px;
        }


        .folder-card > svg {
          color: rgba(255,255,255,0.2);
        }


        /* =====================================================
           RECENT FILES
        ====================================================== */

        .recent-section {
          margin-top: 28px;
        }


        .recent-heading {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          margin-bottom: 12px;
        }


        .recent-heading h3 {
          margin: 6px 0 0;

          font-size: 16px;
        }


        .recent-heading > span {
          color: #a78bfa;

          font-size: 9px;

          cursor: pointer;
        }


        .file-list {
          border-top:
            1px solid rgba(255,255,255,0.05);
        }


        .file-row {
          display: flex;

          align-items: center;

          gap: 11px;

          padding: 12px 5px;

          border-bottom:
            1px solid rgba(255,255,255,0.05);

          transition: .25s ease;
        }


        .file-row:hover {
          padding-left: 10px;

          background:
            rgba(255,255,255,0.02);
        }


        .file-icon {
          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #67e8f9;

          border-radius: 8px;

          background:
            rgba(34,211,238,0.06);
        }


        .file-details {
          flex: 1;
        }


        .file-details strong {
          display: block;

          font-size: 11px;
        }


        .file-details span {
          display: block;

          margin-top: 3px;

          color: rgba(255,255,255,0.3);

          font-size: 9px;
        }


        .file-status {
          display: flex;

          align-items: center;

          gap: 4px;

          color: #67e8f9;

          font-size: 8px;
        }


        /* =====================================================
           SECURITY
        ====================================================== */

        .document-security {
          padding: 30px 22px;

          border-left:
            1px solid rgba(255,255,255,0.07);

          background:
            rgba(255,255,255,0.012);
        }


        .security-top {
          display: flex;

          align-items: center;

          gap: 10px;
        }


        .security-icon {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #67e8f9;

          border-radius: 10px;

          background:
            rgba(34,211,238,0.07);
        }


        .security-top span {
          display: block;

          color: rgba(255,255,255,0.3);

          font-size: 8px;

          letter-spacing: 1px;
        }


        .security-top strong {
          display: block;

          margin-top: 3px;

          font-size: 12px;
        }


        /* =====================================================
           SECURITY CIRCLE
        ====================================================== */

        .security-circle {
          width: 150px;
          height: 150px;

          margin: 40px auto 35px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          border:
            1px solid rgba(34,211,238,0.25);

          background:
            conic-gradient(
              #22d3ee 0deg,
              #8b5cf6 290deg,
              rgba(255,255,255,0.05) 290deg
            );

          animation:
            securityRotate 6s linear infinite;
        }


        .security-circle-inner {
          width: 132px;
          height: 132px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            rgba(8,12,25,0.94);
        }


        .security-circle-inner svg {
          color: #22d3ee;

          margin-bottom: 6px;
        }


        .security-circle-inner strong {
          font-size: 22px;
        }


        .security-circle-inner span {
          margin-top: 2px;

          color: rgba(255,255,255,0.35);

          font-size: 9px;
        }


        /* =====================================================
           SECURITY LIST
        ====================================================== */

        .security-list {
          border-top:
            1px solid rgba(255,255,255,0.06);
        }


        .security-item {
          display: flex;

          gap: 9px;

          padding: 14px 0;

          border-bottom:
            1px solid rgba(255,255,255,0.05);
        }


        .security-item-dot {
          width: 5px;
          height: 5px;

          margin-top: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #22d3ee;

          box-shadow:
            0 0 8px rgba(34,211,238,0.7);
        }


        .security-item strong {
          display: block;

          font-size: 10px;
        }


        .security-item span {
          display: block;

          margin-top: 3px;

          color: rgba(255,255,255,0.3);

          font-size: 8px;
        }


        .secure-note {
          display: flex;

          align-items: flex-start;

          gap: 7px;

          margin-top: 20px;

          padding: 10px;

          border-radius: 8px;

          color: rgba(255,255,255,0.4);

          background:
            rgba(34,211,238,0.04);

          font-size: 8px;

          line-height: 1.5;
        }


        .secure-note svg {
          flex-shrink: 0;

          color: #22d3ee;
        }


        /* =====================================================
           FLOW
        ====================================================== */

        .document-flow {
          margin-top: 65px;
        }


        .flow-title {
          margin-bottom: 22px;

          text-align: center;

          color: rgba(255,255,255,0.25);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 2px;
        }


        .flow-line {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 14px;
        }


        .flow-step {
          display: flex;

          align-items: center;

          gap: 8px;

          color: rgba(255,255,255,0.55);

          font-size: 10px;

          white-space: nowrap;
        }


        .flow-step-icon {
          width: 32px;
          height: 32px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid rgba(255,255,255,0.08);

          border-radius: 9px;

          color: #a78bfa;

          background:
            rgba(139,92,246,0.05);
        }


        .flow-step-number {
          color: rgba(255,255,255,0.2);

          font-size: 8px;
        }


        .flow-connector {
          width: 45px;

          height: 1px;

          position: relative;

          overflow: hidden;

          background:
            rgba(255,255,255,0.08);
        }


        .flow-connector::after {
          content: "";

          position: absolute;

          left: -100%;

          width: 100%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              #22d3ee,
              transparent
            );

          animation:
            flowMove 2.5s linear infinite;
        }


        /* =====================================================
           ANIMATIONS
        ====================================================== */

        @keyframes storageGrow {

          from {
            width: 0;
          }

          to {
            width: 68%;
          }

        }


        @keyframes sparkleRotate {

          0% {
            transform: rotate(0deg) scale(1);
          }

          50% {
            transform: rotate(15deg) scale(1.15);
          }

          100% {
            transform: rotate(0deg) scale(1);
          }

        }


        @keyframes securityRotate {

          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }

        }


        @keyframes flowMove {

          0% {
            left: -100%;
          }

          100% {
            left: 100%;
          }

        }


        /* =====================================================
           RESPONSIVE
        ====================================================== */

        @media (max-width: 1100px) {

          .document-workspace {
            grid-template-columns:
              180px
              1fr;
          }


          .document-security {
            display: none;
          }

        }


        @media (max-width: 750px) {

          .document-section {
            padding: 80px 0;
          }


          .document-header h2 {
            font-size: 2.7rem;

            letter-spacing: -1.5px;
          }


          .document-workspace {
            display: block;

            min-height: auto;
          }


          .document-sidebar {
            display: none;
          }


          .document-center {
            padding: 20px 16px;
          }


          .document-toolbar {
            flex-wrap: wrap;

            gap: 15px;
          }


          .folder-grid {
            grid-template-columns: 1fr;
          }


          .flow-line {
            flex-wrap: wrap;

            gap: 15px;
          }


          .flow-connector {
            display: none;
          }

        }


        @media (max-width: 450px) {

          .document-header h2 {
            font-size: 2.25rem;
          }


          .document-header p {
            font-size: 13px;
          }


          .toolbar-actions button:first-child {
            display: none;
          }


          .document-search {
            font-size: 10px;
          }


          .file-status {
            display: none;
          }

        }

      `}</style>

    </section>
  );
}


/* =========================================================
   DOCUMENT ROW
========================================================= */

function DocumentRow({
  icon,
  name,
  meta,
  status,
}: {
  icon: React.ReactNode;
  name: string;
  meta: string;
  status: string;
}) {
  return (
    <div className="file-row">

      <div className="file-icon">
        {icon}
      </div>

      <div className="file-details">

        <strong>
          {name}
        </strong>

        <span>
          {meta}
        </span>

      </div>

      <div className="file-status">
        <CheckCircle2 size={11} />
        {status}
      </div>

      <MoreHorizontal
        size={15}
        color="rgba(255,255,255,0.2)"
      />

    </div>
  );
}


/* =========================================================
   SECURITY ITEM
========================================================= */

function SecurityItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="security-item">

      <span className="security-item-dot" />

      <div>
        <strong>{title}</strong>
        <span>{desc}</span>
      </div>

    </div>
  );
}


/* =========================================================
   FLOW STEP
========================================================= */

function FlowStep({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flow-step">

      <div className="flow-step-icon">
        {icon}
      </div>

      <div>
        <span className="flow-step-number">
          {number}
        </span>

        <strong>
          {title}
        </strong>
      </div>

    </div>
  );
}
