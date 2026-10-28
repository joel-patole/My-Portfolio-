/* FloatingButtons: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function FloatingButtons() {
  return (
    <>
<a href="#contact" className="floating-say-hi" id="floatingSayHi">
  <span>👋</span> Say Hi
</a>
<button className="floating-back-top" id="floatingBackTop" type="button" aria-label="Back to top">
  ▲
</button>
    </>
  );
}

export default memo(FloatingButtons);
