/* Navbar: markup converted 1:1 from the original index.html.
   Behaviour (scroll, games, music, diagrams...) lives in src/lib/portfolio.ts and attaches to these ids/classes. */
import { memo } from "react";

function Navbar() {
  return (
    <>
<header className="top-nav">
  <div className="nav-bar-container">
    <a href="#home" className="nav-brand" aria-label="Joel Patole home">
      <div className="hex-logo">
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
    <nav className="nav-pill-wrapper" aria-label="Main Navigation">
      <a href="#home" className="nav-item active">Home</a>
      <a href="#about" className="nav-item">About</a>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#skills" className="nav-item">Skills</a>
      <a href="#music" className="nav-item">Music</a>
      <a href="#arcade" className="nav-item">Play</a>
    </nav>
    <div className="nav-actions">
      <button className="theme-toggle-btn" id="themeToggleBtn" type="button" aria-label="Toggle theme">
        <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" /></svg>
        <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      </button>
      <a href="#contact" className="btn-get-in-touch">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        Get in touch
      </a>
      <button className="mobile-menu-btn" id="mobileMenuBtn" type="button" aria-label="Open mobile menu">
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>
    </div>
  </div>
</header>
<div className="mobile-drawer" id="mobileDrawer">
  <button className="close-btn" id="closeDrawerBtn" type="button">&times;</button>
  <a href="#home" className="mobile-nav-link">Home</a>
  <a href="#about" className="mobile-nav-link">About</a>
  <a href="#projects" className="mobile-nav-link">Projects</a>
  <a href="#skills" className="mobile-nav-link">Skills</a>
  <a href="#music" className="mobile-nav-link">Music</a>
  <a href="#arcade" className="mobile-nav-link">Play</a>
  <a href="#contact" className="mobile-nav-link">Contact</a>
</div>
    </>
  );
}

export default memo(Navbar);
