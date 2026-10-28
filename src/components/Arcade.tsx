/* Arcade: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Arcade() {
  return (
    <>
<section className="playground-section" id="arcade">
    <div className="container">
<a className="btn back-home" href="#home">← Back to portfolio</a>
      <div className="section-badge-header">
        <span className="section-badge">INTERACTIVE ARCADE</span>
        <h2 className="section-h2">Take a Code Break</h2>
      </div>
      <div className="arcade-box">
        <div className="arcade-tabs" role="tablist">
          <button className="arcade-tab-btn active" id="tabSnake" role="tab" type="button">Snake 🐍</button>
          <button className="arcade-tab-btn" id="tabTtt" role="tab" type="button">Tic-Tac-Toe ❌⭕</button>
          <button className="arcade-tab-btn" id="tabMem" role="tab" type="button">Memory Match 🧠</button>
        </div>
        <div className="arcade-panel" id="panelSnake">
          <div className="game-board-frame">
            <canvas id="snakeCanvas" width="400" height="400"></canvas>
            <div className="game-overlay" id="snakeOverlay">
              <p id="snakeOverlayText">SNAKE</p>
              <button className="btn-tap-card" id="snakeStartBtn" type="button">Start Game</button>
            </div>
          </div>
          <div className="game-side-meta">
            <h3 className="game-title">Cyber Snake</h3>
            <p className="game-desc">Use arrow keys or WASD to guide the snake. Eat food tokens without colliding into walls or yourself.</p>
            <div className="game-stats-row">
              <div className="game-stat-card">
                <span>Score</span>
                <b id="snakeScore">0</b>
              </div>
              <div className="game-stat-card">
                <span>Best</span>
                <b id="snakeBest">0</b>
              </div>
            </div>
            <button className="btn-resume" id="snakePauseBtn" type="button">Start</button>
          </div>
        </div>
        <div className="arcade-panel" id="panelTtt" style={{ display: "none" }}>
          <div className="ttt-grid" id="tttGrid">
          </div>
          <div className="game-side-meta">
            <h3 className="game-title">Tic-Tac-Toe AI</h3>
            <p className="game-desc" id="tttStatus">Your turn (Playing as X)</p>
            <div className="game-stats-row">
              <div className="game-stat-card">
                <span>You (X)</span>
                <b id="tttScoreX">0</b>
              </div>
              <div className="game-stat-card">
                <span>AI (O)</span>
                <b id="tttScoreO">0</b>
              </div>
            </div>
            <button className="btn-resume" id="tttResetBtn" type="button">New Round</button>
          </div>
        </div>
        <div className="arcade-panel" id="panelMem" style={{ display: "none" }}>
          <div className="mem-grid" id="memGrid">
          </div>
          <div className="game-side-meta">
            <h3 className="game-title">Tech Pair Match</h3>
            <p className="game-desc" id="memStatus">Flip cards to match tech stack pairs.</p>
            <div className="game-stats-row">
              <div className="game-stat-card">
                <span>Moves</span>
                <b id="memMoves">0</b>
              </div>
              <div className="game-stat-card">
                <span>Time</span>
                <b id="memTime">0s</b>
              </div>
            </div>
            <button className="btn-resume" id="memShuffleBtn" type="button">Shuffle Cards</button>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default memo(Arcade);
