/* ResumeModal: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function ResumeModal() {
  return (
    <>
<div className="modal-backdrop" id="resumeModalBackdrop">
  <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="modalName">
    <div className="resume-header">
      <div>
        <h2 className="resume-name" id="modalName">Joel Patole</h2>
        <p className="resume-title">Full-Stack Developer</p>
      </div>
      <div className="resume-actions">
        <button className="btn-download-pdf" id="printPdfBtn" type="button">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          Download PDF
        </button>
        <button className="btn-close-modal" id="closeResumeBtn" type="button" aria-label="Close modal">&times;</button>
      </div>
    </div>
    <div className="resume-contact-pills">
      <span className="contact-chip">📞 +91-9518355177</span>
      <a className="contact-chip" href="mailto:joelpatole1@gmail.com">✉️ joelpatole1@gmail.com</a>
      <a className="contact-chip" href="https://linkedin.com/in/joel-patole-68a738358" target="_blank" rel="noopener">💼 in/joel-patole</a>
      <a className="contact-chip" href="https://github.com/joel-patole" target="_blank" rel="noopener">🌐 github.com/joel-patole</a>
    </div>
    <p className="resume-summary">
      Full-stack developer and B.Tech IT student who builds complete products end to end: REST APIs and databases, responsive React/TypeScript interfaces, and even IoT hardware integration. Hands-on with Python (Flask, FastAPI), JavaScript/TypeScript, React, Tailwind CSS and MongoDB. Built and shipped 4 projects, including an ML-powered accident hotspot predictor, a secure authenticated document vault and a real-time RFID attendance system. Also exploring agentic AI and Retrieval Augmented Generation (RAG). Seeking a full-stack / backend developer role or internship.
    </p>
    <div className="resume-section-title">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
      TECHNICAL SKILLS
    </div>
    <p className="resume-summary"><strong>Languages:</strong> Python, JavaScript, TypeScript, SQL (basic), Shell scripting, HTML, CSS<br /><strong>Frontend:</strong> React.js, Tailwind CSS, Leaflet.js, responsive UI development<br /><strong>Backend:</strong> Flask, FastAPI, REST API design, authentication and authorization (Clerk), CRUD systems<br /><strong>Databases:</strong> MongoDB, SQL (basic)<br /><strong>AI / ML:</strong> Machine learning for risk prediction, LLMs, RAG, agentic AI, orchestration<br /><strong>IoT:</strong> ESP8266, Arduino IDE, MFRC522 RFID, WiFi communication</p>
    <div className="resume-section-title">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
      PROJECTS
    </div>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-node"></div>
        <div className="timeline-header">
          <span className="timeline-role">Nukelear – Developer Productivity Toolkit</span>
          <span className="timeline-date">Jul 2026 – Present</span>
        </div>
        <div className="timeline-sub">HTML, TypeScript, JavaScript, Shell scripting</div>
        <ul className="timeline-bullets">
          <li>Built a dual-purpose toolkit that recursively scans nested workspaces and deletes heavy dependency folders (node_modules, venv, build artifacts), reclaiming gigabytes of disk space.</li>
          <li>Added browser-based upload of clean project files to GitHub with automated secret detection and on-the-fly credential redaction to prevent leaked keys.</li>
        </ul>
      </div>
      <div className="timeline-item">
        <div className="timeline-node"></div>
        <div className="timeline-header">
          <span className="timeline-role">SafeNav-Mumbai – Accident Hotspot Prediction &amp; Safe Routing</span>
          <span className="timeline-date">Jan 2026 – Apr 2026</span>
        </div>
        <div className="timeline-sub">Python, FastAPI, MongoDB, Machine Learning, Leaflet.js, REST APIs</div>
        <ul className="timeline-bullets">
          <li>Developed a FastAPI backend with REST APIs for accident reporting, hotspot management, analytics and route safety recommendations, backed by MongoDB.</li>
          <li>Applied machine learning for accident hotspot prediction and risk analysis; suggested safer routes based on accident density.</li>
          <li>Designed an interactive Leaflet.js map and analytical dashboards showing accident statistics and hotspot insights.</li>
        </ul>
      </div>
      <div className="timeline-item">
        <div className="timeline-node"></div>
        <div className="timeline-header">
          <span className="timeline-role">DocuVault – Secure Document Management System</span>
          <span className="timeline-date">Aug 2025 – Nov 2025</span>
        </div>
        <div className="timeline-sub">Python, Flask, MongoDB, Clerk Auth API, HTML, CSS, JavaScript</div>
        <ul className="timeline-bullets">
          <li>Developed a Flask application with full CRUD for uploading, retrieving, updating and deleting documents, stored in MongoDB.</li>
          <li>Integrated Clerk Authentication API for secure registration and login, with user-based authorization so users access only their own documents.</li>
          <li>Built responsive user interfaces with HTML, CSS and JavaScript.</li>
        </ul>
      </div>
      <div className="timeline-item">
        <div className="timeline-node"></div>
        <div className="timeline-header">
          <span className="timeline-role">RFID Attendance Management System (IoT)</span>
          <span className="timeline-date">Jan 2026 – Apr 2026</span>
        </div>
        <div className="timeline-sub">ESP8266, Arduino IDE, MFRC522, Python, Flask, HTML, WiFi</div>
        <ul className="timeline-bullets">
          <li>Designed an IoT system using an ESP8266 and MFRC522 RFID reader (programmed in Arduino IDE) for real-time card scanning.</li>
          <li>Sent scans over WiFi to a Flask backend that processes attendance records; built a web interface showing live entry/exit logs with accurate date and timestamp.</li>
          <li>Integrated hardware and software end to end for real-time attendance tracking.</li>
        </ul>
      </div>
    </div>
    <div className="resume-section-title">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
      EDUCATION
    </div>
    <p className="resume-summary"><strong>B.Tech, Information Technology</strong> – St Francis Institute of Technology, Mumbai (Expected 2027) · CGPA: 6.10<br />Class XII (Maharashtra Board), 2023: 75.4% · Class X (Maharashtra Board), 2021: 74.8%</p>
    <div className="resume-section-title">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
      LANGUAGES
    </div>
    <p className="resume-summary">English, Hindi, Marathi (read, write, speak)</p>
  </div>
</div>
    </>
  );
}

export default memo(ResumeModal);
