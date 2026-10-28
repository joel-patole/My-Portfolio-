/* Intro: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Intro() {
  return (
    <>
<div id="intro" role="presentation" aria-hidden="true">
  <div className="lg-wrap"><div className="lg-glow"></div><div className="lg-shine"></div>
    <svg viewBox="0 0 100 100"><defs><linearGradient id="lgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8B9BFF" /><stop offset=".55" stopColor="#B7A4FF" /><stop offset="1" stopColor="#6ED3C5" /></linearGradient></defs>
      <circle className="lg-ring" pathLength="1" cx="50" cy="50" r="47" />
      <g className="lg-orbit"><circle cx="50" cy="3" r="2.4" /><circle cx="97" cy="50" r="1.6" opacity=".6" /></g>
      <path className="lg-j" pathLength="1" d="M40 28V60A14 14 0 0 1 26 74H18" />
      <path className="lg-p" pathLength="1" d="M56 76V28H70A13 13 0 0 1 70 54H56" />
      <circle className="lg-sun" cx="82" cy="76" r="5" /></svg></div>
  <div className="lg-name" aria-hidden="true"><span style={{ animationDelay: "1.70s" }}>J</span><span style={{ animationDelay: "1.77s" }}>O</span><span style={{ animationDelay: "1.84s" }}>E</span><span style={{ animationDelay: "1.91s" }}>L</span><span style={{ animationDelay: "1.98s" }}>&nbsp;</span><span style={{ animationDelay: "2.05s" }}>P</span><span style={{ animationDelay: "2.12s" }}>A</span><span style={{ animationDelay: "2.19s" }}>T</span><span style={{ animationDelay: "2.26s" }}>O</span><span style={{ animationDelay: "2.33s" }}>L</span><span style={{ animationDelay: "2.40s" }}>E</span></div>
  <p className="lg-tag">Backend &middot; IoT &middot; AI</p>
  <div className="lg-bar"><i></i></div>
  <span className="lg-skip">click to skip</span>
</div>
    </>
  );
}

export default memo(Intro);
