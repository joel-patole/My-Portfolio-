/* AskModal: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function AskModal() {
  return (
    <>
<div className="modal-backdrop" id="askModalBackdrop">
  <div className="chat-modal-box" role="dialog" aria-modal="true">
    <div className="resume-header">
      <h3 className="chat-modal-title">Ask Joel Anything 🤖</h3>
      <button className="btn-close-modal" id="closeAskBtn" type="button">&times;</button>
    </div>
    <p className="chat-modal-sub">Explore Joel's technical background, projects, or interests:</p>
    <div className="quick-questions-row">
      <span className="q-chip" data-q="What is your primary tech stack?">Tech Stack?</span>
      <span className="q-chip" data-q="Tell me about the RFID attendance system">RFID Project?</span>
      <span className="q-chip" data-q="How does SafeNav Mumbai work?">SafeNav ML?</span>
      <span className="q-chip" data-q="Are you available for internships or full-time roles?">Available for hire?</span>
    </div>
    <div className="chat-response-box" id="chatResponseBox">
      Click a question above or type anything below to get an instant answer!
    </div>
    <div className="chat-input-row">
      <input type="text" className="chat-input" id="chatInput" placeholder="Ask about Joel's experience, stack, or projects..." />
      <button className="chat-send-btn" id="chatSendBtn" type="button">Ask</button>
    </div>
  </div>
</div>
    </>
  );
}

export default memo(AskModal);
