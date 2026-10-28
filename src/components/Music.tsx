/* Music: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Music() {
  return (
    <>
<section className="music-section" id="music">
<div className="container">
<header className="sheet-head" data-reveal><h2 className="h2"><span className="in-w">On repeat</span></h2><p className="sub">The songs I code to. Click play or select a track to spin the turntable.</p></header>
<div className="deck" id="musicDeck">
        <div className="turn" id="turnTable">
          <div className="vinyl" id="vinyl" role="button" tabIndex={0} aria-label="Vinyl record: click to play or pause" title="Click to play / pause">
            <div className="vlabel" id="vLabel"></div>
          </div>
          <div className="arm" id="arm"></div>
          <div className="turn-base">
            <span className="turn-needle-label">33⅓ RPM • JOEL'S PICKS</span>
            <button type="button" className="turn-power-btn" id="turnPower" aria-label="Toggle turntable power" title="Toggle audio playback">POWER</button>
          </div>
        </div>
        <div className="np">
          <div className="np-top"><span>Now playing</span><span><span id="npIdx">01</span> / <span id="npTot">04</span></span></div>
          <h3 id="npTitle">Yellow</h3>
          <p className="np-artist" id="npArtist">Coldplay</p>
          <p className="np-why" id="npWhy">A timeless anthem for late-night inspiration and starry moods.</p>
          <div className="eq" id="eq" aria-hidden="true" title="Audio equalizer"></div>
          <div className="np-progress" id="npProgress" role="progressbar" aria-label="Audio progress seek bar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} tabIndex={0} title="Click to seek">
            <div className="np-bar" id="npBar"></div>
          </div>
          <div className="np-time">
            <span id="npCurTime">0:00</span>
            <span className="np-badge" id="npBadge">AUDIO PREVIEW</span>
            <span id="npDurTime">0:30</span>
          </div>
          <div className="np-nav">
            <button type="button" id="prev" aria-label="Previous track" title="Previous track">⏮</button>
            <button type="button" id="playBtn" className="np-play-btn" aria-label="Play or pause track" title="Play / Pause">
              <span className="play-ico" id="playIco">&#9654;</span>
              <span className="play-txt" id="playTxt">PLAY</span>
            </button>
            <button type="button" id="next" aria-label="Next track" title="Next track">⏭</button>
          </div>
          <div className="np-links">
            <span id="npLinks">
              <a className="btn primary" id="npSpot" target="_blank" rel="noopener" href="https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=8e5bf03934f3409a">Open in Spotify ↗</a>
              <a className="btn" id="npYt" target="_blank" rel="noopener" href="#">YouTube ↗</a>
            </span>
          </div>
          <div className="spotify-embed-box" id="spotifyBox">
            <iframe id="spotifyEmbed" style={{ borderRadius: "12px", border: "1px solid var(--line)", display: "block" }} src="https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify Web Player"></iframe>
          </div>
          <ol className="playlist" id="playlist" aria-label="Playlist"></ol>
          <p className="fine">High-fidelity audio stream plays instantly when you click Play. Full track streams via Spotify.</p>
        </div>
      </div>
</div>
</section>
    </>
  );
}

export default memo(Music);
