/* eslint-disable @next/next/no-img-element */
/* Hero: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Hero() {
  return (
    <>
<section className="hero-section" id="home">
    <div className="container hero-grid">
      <div className="hero-left">
        <div className="profile-spotlight">
          <div className="profile-avatar-wrap">
            <div className="profile-avatar-inner">
              <img id="profileImg" src="/profile.jpg" alt="Joel Patole in a grey blazer" />
            </div>
          </div>
          <div className="profile-meta">
            <div className="status-pill">
              <span className="status-dot-pulse"></span>
              Available for Hire & Roles
            </div>
            <div className="profile-title-tag">Mumbai, India • IT Engineer</div>
          </div>
        </div>
        <p className="hero-tag">
          <span className="tag-accent">Hi,</span> I am
        </p>
        <div className="hero-name-wrap">
          <h1 className="hero-name">Joel Patole<span className="dot">.</span></h1>
          <span className="hero-signature">I build things</span>
        </div>
        <p className="hero-bio">
          I'm Joel, a <strong className="hl-gold">full-stack</strong> and <strong className="hl-cyan">AI & IoT engineer</strong> building production systems, from <strong className="hl-gold">event-driven backends</strong> and <strong className="hl-cyan">RFID hardware platforms</strong> to geospatial accident prediction maps. Studied IT in Mumbai with deep hands-on expertise across <strong>Python, Flask, FastAPI, MongoDB,</strong> and <strong>ESP8266</strong>.
        </p>
        <div className="hero-cta-group">
          <button className="btn-resume" id="openResumeBtn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Resume
          </button>
          <button className="btn-ask-anything" id="openAskBtn" type="button">
            <span>Ask me <span className="ask-hl">anything</span></span>
            <span className="arrow-icon">➔</span>
          </button>
          <div className="pixel-dog-wrapper" id="pixelDog" title="Meet Sparky! Click for a bark">
            <div className="dog-tooltip">Woof! Ready to build 🚀</div>
            <svg className="pixel-dog" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="8" width="12" height="10" fill="#E68A2E" />
              <rect x="8" y="10" width="4" height="6" fill="#F7B267" />
              <rect x="20" y="10" width="4" height="6" fill="#F7B267" />
              <rect x="7" y="5" width="4" height="5" fill="#E68A2E" />
              <rect x="21" y="5" width="4" height="5" fill="#E68A2E" />
              <rect x="11" y="11" width="2" height="2" fill="#1A1A1A" />
              <rect x="19" y="11" width="2" height="2" fill="#1A1A1A" />
              <rect x="14" y="14" width="4" height="3" fill="#1A1A1A" />
              <rect x="13" y="17" width="6" height="3" fill="#FFF" />
              <rect x="15" y="18" width="2" height="3" fill="#FF5E7E" />
              <rect x="11" y="18" width="10" height="9" fill="#E68A2E" />
              <rect x="13" y="19" width="6" height="8" fill="#FFF" />
              <rect x="10" y="27" width="3" height="3" fill="#FFF" />
              <rect x="19" y="27" width="3" height="3" fill="#FFF" />
              <rect x="22" y="20" width="4" height="4" fill="#E68A2E" />
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <article className="building-card">
          <div className="building-card-top"><span className="building-pill-tag">CURRENTLY BUILDING</span><a href="#dwg-0" className="btn-card-action" aria-label="View UrbanLens AI details">↗</a></div>
          <h2 className="building-title">UrbanLens AI</h2>
          <p className="building-desc">An agentic AI platform that tells students, travellers and professionals if a city suits them before they move, with a personalized report and suitability score.</p>
          <div className="building-tags"><span className="tech-pill">Agentic AI</span><span className="tech-pill">RAG</span><span className="tech-pill">Live APIs</span><span className="tech-pill">Orchestrator</span></div>
        </article>
        <article className="orch" id="orch">
          <div className="orch-head"><b>Try the orchestrator</b><span>demo with illustrative scores</span></div>
          <div className="orch-form">
            <label>City<select id="oCity"><option>Mumbai</option><option>Pune</option><option>Bengaluru</option><option>Berlin</option><option>Toronto</option></select></label>
            <label>Purpose<select id="oPurpose"><option>Study</option><option>Work</option><option>Travel</option></select></label>
            <label className="wide">Monthly budget<output id="oBudgetV">₹80k</output><input type="range" id="oBudget" min="20" max="200" step="5" defaultValue="80" /></label>
          </div>
          <ul className="agents" id="agents"></ul>
          <div className="orch-out"><button className="btn primary" id="oRun" type="button">Run the agents</button><div className="ring" id="oRing" role="status" aria-live="polite"><b>--</b><small>suitability</small></div></div>
          <p className="orch-note" id="oNote">Pick a city, purpose and budget, then run.</p>
        </article>
      </div>
    </div>
  </section>
  <div className="mq" aria-hidden="true"><div><span>Flask</span><span>FastAPI</span><span>MongoDB</span><span>Agentic AI</span><span>RAG</span><span>ESP8266</span><span>Python</span><span>Leaflet</span><span>Flask</span><span>FastAPI</span><span>MongoDB</span><span>Agentic AI</span><span>RAG</span><span>ESP8266</span><span>Python</span><span>Leaflet</span><span>Flask</span><span>FastAPI</span><span>MongoDB</span><span>Agentic AI</span><span>RAG</span><span>ESP8266</span><span>Python</span><span>Leaflet</span><span>Flask</span><span>FastAPI</span><span>MongoDB</span><span>Agentic AI</span><span>RAG</span><span>ESP8266</span><span>Python</span><span>Leaflet</span></div></div>
    </>
  );
}

export default memo(Hero);
