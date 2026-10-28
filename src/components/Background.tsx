/* Background: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Background() {
  return (
    <>
<div id="bgGrid" aria-hidden="true"></div><div id="bgSpot" aria-hidden="true"></div>
<div id="prog" aria-hidden="true"></div>
<canvas id="cyberCanvas"></canvas>
<div className="ambient-glow amber"></div>
<div className="ambient-glow purple"></div>
<div className="ambient-glow cyan"></div>
<div id="goldOrb" aria-hidden="true"></div>
    </>
  );
}

export default memo(Background);
