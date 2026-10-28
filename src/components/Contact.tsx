/* Contact: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Contact() {
  return (
    <>
<section className="contact-section" id="contact">
    <div className="container">
      <div className="contact-card">
        <div>
          <span className="section-badge">START A CONVERSATION</span>
          <h2 className="contact-h2">Let’s Build Something Meaningful</h2>
          <p className="contact-p">
            I’m actively looking for software engineering roles, backend contracts, and IoT systems collaborations. Drop an email anytime.
          </p>
          <a className="contact-email-link" href="mailto:joelpatole1@gmail.com">joelpatole1@gmail.com</a>
          <div className="hero-cta-group">
            <button className="btn-resume" id="copyEmailBtn" type="button">Copy Email</button>
            <a className="btn-ask-anything" href="https://github.com/joel-patole" target="_blank" rel="noopener">GitHub ↗</a>
            <a className="btn-ask-anything" href="https://www.linkedin.com/in/joel-patole-68a738358" target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
        </div>
        <div className="contact-info-list">
          <div className="info-row">
            <span className="info-label">LOCATION</span>
            <span className="info-val">Mumbai, India</span>
          </div>
          <div className="info-row">
            <span className="info-label">LOCAL TIME</span>
            <span className="info-val" id="localClock">--:-- IST</span>
          </div>
          <div className="info-row">
            <span className="info-label">DEGREE</span>
            <span className="info-val">B.Tech Information Technology</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default memo(Contact);
