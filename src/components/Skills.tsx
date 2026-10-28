/* Skills: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Skills() {
  return (
    <>
<section className="skills-section" id="skills">
    <div className="container">
      <div className="skills-grid">
        <div className="skills-left-col">
          <div className="section-category-header">
            <span className="section-badge">SKILLS</span>
            <h2 className="category-title">Tech Stack</h2>
          </div>
          <div className="tech-group">
            <div className="tech-group-label">LANGUAGES</div>
            <div className="tech-badges-wrap">
              <span className="tech-badge-pill">🐍 Python</span>
              <span className="tech-badge-pill">⚡ JavaScript</span>
              <span className="tech-badge-pill">⚡ TypeScript</span>
              <span className="tech-badge-pill">💾 SQL (basic)</span>
              <span className="tech-badge-pill">🐚 Shell scripting</span>
              <span className="tech-badge-pill">🌐 HTML / CSS</span>
            </div>
          </div>
          <div className="tech-group">
            <div className="tech-group-label">FRONTEND</div>
            <div className="tech-badges-wrap">
              <span className="tech-badge-pill">⚛️ React.js</span>
              <span className="tech-badge-pill">🎨 Tailwind CSS</span>
              <span className="tech-badge-pill">🗺️ Leaflet.js</span>
              <span className="tech-badge-pill">📱 Responsive UI</span>
            </div>
          </div>
          <div className="tech-group">
            <div className="tech-group-label">BACKEND</div>
            <div className="tech-badges-wrap">
              <span className="tech-badge-pill">🚀 FastAPI</span>
              <span className="tech-badge-pill">🌶️ Flask</span>
              <span className="tech-badge-pill">🔌 REST API design</span>
              <span className="tech-badge-pill">🔐 Auth &amp; authorization (Clerk)</span>
              <span className="tech-badge-pill">🗂️ CRUD systems</span>
            </div>
          </div>
          <div className="tech-group">
            <div className="tech-group-label">DATABASES</div>
            <div className="tech-badges-wrap">
              <span className="tech-badge-pill">🍃 MongoDB</span>
              <span className="tech-badge-pill">💾 SQL (basic)</span>
            </div>
          </div>
          <div className="tech-group">
            <div className="tech-group-label">AI / ML</div>
            <div className="tech-badges-wrap">
              <span className="tech-badge-pill">🧠 ML for risk prediction</span>
              <span className="tech-badge-pill">🤖 LLMs</span>
              <span className="tech-badge-pill">📚 RAG</span>
              <span className="tech-badge-pill">🕸️ Agentic AI</span>
              <span className="tech-badge-pill">🎛️ Orchestration</span>
            </div>
          </div>
          <div className="tech-group">
            <div className="tech-group-label">IOT</div>
            <div className="tech-badges-wrap">
              <span className="tech-badge-pill">📡 ESP8266</span>
              <span className="tech-badge-pill">🏷️ MFRC522 RFID</span>
              <span className="tech-badge-pill">🎛️ Arduino IDE</span>
              <span className="tech-badge-pill">📶 Wi-Fi communication</span>
            </div>
          </div>
        </div>
        <div className="skills-right-col">
          <div className="section-category-header">
            <span className="section-badge">DATA & IOT LAB</span>
            <h2 className="category-title">Visualizations</h2>
          </div>
          <div className="rfid-lab-card">
            <div className="rfid-lab-header">
              <span>LIVE DEMO: RFID ATTENDANCE GATEWAY</span>
              <span>FIG. 01</span>
            </div>
            <div className="rfid-svg-wrap">
              <svg id="pipeSvg" viewBox="0 0 520 230" role="img" aria-label="RFID hardware pipeline">
                <defs>
                  <marker id="pm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M0 0L10 5L0 10z" fill="var(--accent)" />
                  </marker>
                </defs>
                <path className="link" id="p1" d="M136 58H200" markerEnd="url(#pm)" />
                <path className="link" id="p2" d="M320 58H384" markerEnd="url(#pm)" />
                <path className="link" id="p3" d="M444 86V145" markerEnd="url(#pm)" />
                <text className="lb" x="168" y="46" textAnchor="middle">scan</text>
                <text className="lb" x="352" y="46" textAnchor="middle">Wi-Fi</text>
                <text className="lb" x="454" y="120">stream</text>
                <g className="node" id="n-card"><rect x="16" y="30" width="120" height="54" rx="8" /><text x="28" y="55">RFID Card</text><text className="sub" x="28" y="72">tap to scan</text></g>
                <g className="node" id="n-esp"><rect x="200" y="30" width="120" height="54" rx="8" /><text x="212" y="55">ESP8266</text><text className="sub" x="212" y="72">+ MFRC522</text></g>
                <g className="node" id="n-flask"><rect x="384" y="30" width="120" height="54" rx="8" /><text x="396" y="55">Flask API</text><text className="sub" x="396" y="72">socket server</text></g>
                <g className="node" id="n-dash"><rect x="384" y="145" width="120" height="54" rx="8" /><text x="396" y="170">Dashboard</text><text className="sub" id="dashSub" x="396" y="187">0 records</text></g>
                <rect x="16" y="125" width="340" height="80" rx="8" fill="#111726" stroke="rgba(255,255,255,0.08)" />
                <text className="sub" x="30" y="150">LAST RFID HARDWARE SCAN</text>
                <text id="uidTxt" x="30" y="178" fontFamily="var(--font-mono)" fontSize="18px" fill="var(--accent-light)">-- -- -- --</text>
                <text id="stTxt" x="30" y="196" fontFamily="var(--font-mono)" fontSize="11px" fill="#8492a6">waiting for card tap</text>
                <circle id="pkt" r="6" cx="136" cy="58" fill="var(--accent)" style={{ opacity: "0" }} />
              </svg>
            </div>
            <div className="rfid-controls-row">
              <button className="btn-tap-card" id="tapCardBtn" type="button">Tap RFID Card</button>
              <ul className="rfid-log-list" id="rfidLog">
                <li>System ready. ESP8266 listening on 2.4GHz Wi-Fi</li>
              </ul>
            </div>
          </div>
          <div className="vis-card-grid">
            <div className="vis-card" onClick={() => document.getElementById('dwg-3')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="vis-bg" style={{ background: "linear-gradient(135deg, #0e7490, #1e1b4b)" }}></div>
              <div className="vis-gradient-overlay"></div>
              <div className="vis-card-content">
                <span className="vis-card-title">SafeNav Mumbai Map</span>
                <span className="vis-card-arrow">↗</span>
              </div>
            </div>
            <div className="vis-card" onClick={() => document.getElementById('dwg-1')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="vis-bg" style={{ background: "linear-gradient(135deg, #b45309, #312e81)" }}></div>
              <div className="vis-gradient-overlay"></div>
              <div className="vis-card-content">
                <span className="vis-card-title">DocuVault Storage</span>
                <span className="vis-card-arrow">↗</span>
              </div>
            </div>
            <div className="vis-card wide" onClick={() => document.getElementById('dwg-4')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="vis-bg" style={{ background: "linear-gradient(135deg, #4c1d95, #0f172a)" }}></div>
              <div className="vis-gradient-overlay"></div>
              <div className="vis-card-content">
                <span className="vis-card-title">Nukelear Developer System & Secret Cleaner</span>
                <span className="vis-card-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="education-section" id="about">
        <div className="section-badge-header">
          <span className="section-badge">EDUCATION & ACADEMICS</span>
          <h2 className="section-h2">Academic Journey</h2>
        </div>
        <div className="edu-cards-grid">
          <div className="edu-photo-card">
            <div className="edu-photo-bg" style={{ backgroundImage: "url('/sfit_campus.jpg')" }}></div>
            <div className="edu-photo-overlay"></div>
            <div className="edu-content">
              <span className="edu-date-badge">2023 – 2027 • MUMBAI, INDIA</span>
              <h3 className="edu-degree">Bachelor of Technology (B.Tech)</h3>
              <p className="edu-school">Information Technology • St. Francis Institute of Technology</p>
              <div className="edu-detail" id="eduDetail1"><div className="edu-detail-inner">
                <div className="edu-stat"><b>6.10</b><small>Current CGPA</small></div>
                <div className="edu-stat"><b>2027</b><small>Expected graduation</small></div>
              </div></div>
            </div>
            <button className="edu-expand-btn" type="button" aria-label="Show CGPA" aria-expanded="false" aria-controls="eduDetail1">+</button>
          </div>
          <div className="edu-photo-card">
            <div className="edu-photo-bg" style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)" }}></div>
            <div className="edu-photo-overlay"></div>
            <div className="edu-content">
              <span className="edu-date-badge">2021 – 2023 • MUMBAI, INDIA</span>
              <h3 className="edu-degree">Higher Secondary Certificate (HSC)</h3>
              <p className="edu-school">Class XII • Maharashtra Board</p>
              <div className="edu-detail" id="eduDetail2"><div className="edu-detail-inner">
                <div className="edu-stat"><b>75.4%</b><small>Class XII (2023)</small></div>
                <div className="edu-stat"><b>74.8%</b><small>Class X (2021)</small></div>
              </div></div>
            </div>
            <button className="edu-expand-btn" type="button" aria-label="Show percentages" aria-expanded="false" aria-controls="eduDetail2">+</button>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default memo(Skills);
