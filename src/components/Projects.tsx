/* Projects: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Projects() {
  return (
    <>
<section className="projects-section" id="projects">
<div className="container">
<header className="sheet-head" data-reveal><h2 className="h2"><span className="in-w">Projects</span></h2><p className="sub">What I am building now, then everything before it. Each one comes with the system diagram of how it works.</p></header>
<article className="proj" id="dwg-0" data-i="4" data-reveal>
        <div className="proj-diagram" data-dwg="BUILDING NOW"><svg className="diag" role="img" aria-label="Diagram of UrbanLens AI"></svg><p className="hint">Swipe sideways to see the full diagram.</p></div>
        <div>
          <p className="dwg">In progress</p>
          <h3>UrbanLens AI<span className="live-tag">building now</span></h3>
          <p className="sum">Enter a destination, purpose, budget, duration and preferences. UrbanLens AI checks weather, transport, cost of living, housing, education, safety and healthcare, then returns a personalized city report and suitability score.</p>
          <dl className="spec"><div><dt>Type</dt><dd>Agentic AI city intelligence and relocation platform</dd></div><div><dt>Stack</dt><dd>AI Orchestrator, specialist agents, RAG, live APIs, structured datasets</dd></div></dl>
          <button className="toggle" type="button" aria-expanded="false" aria-controls="n0">Build notes</button>
          <div className="notes" id="n0"><div><ol>
            <li>A central AI Orchestrator coordinates seven specialist agents.</li>
            <li>Agents cover climate, transport, cost of living, accommodation, education and culture, safety and healthcare, and location intelligence.</li>
            <li>Live APIs, structured datasets and RAG keep answers grounded in sources.</li>
            <li>One platform replaces searching many websites before a move.</li>
          </ol></div></div>
        </div>
      </article>
<article className="proj" id="dwg-1" data-i="0" data-reveal>
        <div className="proj-diagram" data-dwg="DWG-01"><svg className="diag" role="img" aria-label="Diagram of DocuVault"></svg><p className="hint">Swipe sideways to see the full diagram.</p></div>
        <div>
          <p className="dwg">Aug 2025 to Nov 2025</p>
          <h3>DocuVault</h3>
          <p className="sum">A place to keep documents online where every person sees only their own files. Users sign in with Clerk, then upload, view, update and delete documents.</p>
          <dl className="spec"><div><dt>Type</dt><dd>Secure document management system</dd></div><div><dt>Stack</dt><dd>Python Flask, Clerk, MongoDB, HTML, CSS, JavaScript</dd></div></dl>
          <button className="toggle" type="button" aria-expanded="false" aria-controls="n1">Build notes</button>
          <div className="notes" id="n1"><div><ol>
            <li>Built the backend in Python Flask.</li>
            <li>Added registration and login with the Clerk Authentication API.</li>
            <li>Stored user information and document details in MongoDB.</li>
            <li>Implemented authentication and authorization so users reach only their own documents.</li>
            <li>Wrote the create, read, update and delete flows for uploading, retrieving, editing and removing documents.</li>
            <li>Built responsive interfaces with HTML, CSS and JavaScript.</li>
          </ol></div></div>
        </div>
      </article>
<article className="proj" id="dwg-2" data-i="1" data-reveal>
        <div className="proj-diagram" data-dwg="DWG-02"><svg className="diag" role="img" aria-label="Diagram of RFID Attendance"></svg><p className="hint">Swipe sideways to see the full diagram.</p></div>
        <div>
          <p className="dwg">Jan 2026 to Apr 2026</p>
          <h3>RFID Attendance</h3>
          <p className="sum">Tap a card and the attendance record appears. An ESP8266 with an MFRC522 reader sends each scan over Wi-Fi to a Flask server, and a live dashboard shows entries and exits.</p>
          <dl className="spec"><div><dt>Type</dt><dd>IoT attendance management system</dd></div><div><dt>Stack</dt><dd>ESP8266, MFRC522, Arduino IDE, Flask, Socket.IO, HTML</dd></div></dl>
          <button className="toggle" type="button" aria-expanded="false" aria-controls="n2">Build notes</button>
          <div className="notes" id="n2"><div><ol>
            <li>Designed and built the whole system, hardware and software.</li>
            <li>Programmed the ESP8266 in Arduino IDE to handle RFID communication.</li>
            <li>Connected the MFRC522 reader to the ESP8266 for real-time card scanning.</li>
            <li>Set up Wi-Fi communication between the hardware module and the Flask server.</li>
            <li>Built the Flask backend that processes attendance records.</li>
            <li>Built a web interface that shows live entry and exit records with accurate date and timestamp.</li>
          </ol></div></div>
          <a className="repo" href="https://github.com/joel-patole/RFID-based-attendance-server" target="_blank" rel="noopener">View source on GitHub</a>
        </div>
      </article>
<article className="proj" id="dwg-3" data-i="2" data-reveal>
        <div className="proj-diagram" data-dwg="DWG-03"><svg className="diag" role="img" aria-label="Diagram of SafeNav Mumbai"></svg><p className="hint">Swipe sideways to see the full diagram.</p></div>
        <div>
          <p className="dwg">Jan 2026 to Apr 2026</p>
          <h3>SafeNav Mumbai</h3>
          <p className="sum">An interactive map of accident-prone areas across Mumbai, with a machine learning model that predicts risk and suggests safer routes.</p>
          <dl className="spec"><div><dt>Type</dt><dd>Accident hotspot map and route safety</dd></div><div><dt>Stack</dt><dd>FastAPI, MongoDB, Leaflet.js, machine learning, REST APIs</dd></div></dl>
          <button className="toggle" type="button" aria-expanded="false" aria-controls="n3">Build notes</button>
          <div className="notes" id="n3"><div><ol>
            <li>Built the FastAPI backend for accident reporting, hotspot management, analytics and user interactions.</li>
            <li>Stored accident reports, hotspot information, analytics and user data in MongoDB.</li>
            <li>Applied machine learning for accident hotspot prediction and risk analysis.</li>
            <li>Designed the interactive Leaflet.js map that shows accident-prone areas.</li>
            <li>Built analytical dashboards with accident statistics and hotspot insights.</li>
            <li>Developed REST APIs for route safety recommendations and accident reporting.</li>
            <li>Suggested safer travel routes based on accident density and risk analysis.</li>
          </ol></div></div>
          <a className="repo" href="https://github.com/joel-patole/SafeNav_Mumbai" target="_blank" rel="noopener">View source on GitHub</a>
        </div>
      </article>
<article className="proj" id="dwg-4" data-i="3" data-reveal>
        <div className="proj-diagram" data-dwg="DWG-04"><svg className="diag" role="img" aria-label="Diagram of Nukelear"></svg><p className="hint">Swipe sideways to see the full diagram.</p></div>
        <div>
          <p className="dwg">Jul 2026 to Nov 2026</p>
          <h3>Nukelear</h3>
          <p className="sum">Two tools in one. It finds and deletes heavy dependency folders to free up gigabytes of disk space, and it uploads clean project files to GitHub from your browser while hiding secrets.</p>
          <dl className="spec"><div><dt>Type</dt><dd>Developer toolkit</dd></div><div><dt>Focus</dt><dd>Disk cleanup, GitHub upload, secret detection</dd></div></dl>
          <button className="toggle" type="button" aria-expanded="false" aria-controls="n4">Build notes</button>
          <div className="notes" id="n4"><div><ol>
            <li>Scans nested workspaces recursively for heavy folders such as node_modules, venv and build artifacts.</li>
            <li>Deletes them to reclaim gigabytes of disk storage.</li>
            <li>Uploads clean project files directly to GitHub from the browser.</li>
            <li>Detects secrets automatically and redacts credentials on the fly before anything is uploaded.</li>
          </ol></div></div>
          <a className="repo" href="https://github.com/joel-patole/Nukelear" target="_blank" rel="noopener">View source on GitHub</a>
        </div>
      </article>
</div>
</section>
    </>
  );
}

export default memo(Projects);
