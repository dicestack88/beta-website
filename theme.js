:root {
  color-scheme: dark;
  --bg: #101510;
  --surface: #181e18;
  --surface-strong: #1f261f;
  --text: #f0f2ec;
  --muted: #a6afa3;
  --line: #2e352e;
  --accent: #b5d981;
  --accent-ink: #17200f;
  --wrap: 1080px;
}

body.light-mode {
  color-scheme: light;
  --bg: #f5f7f2;
  --surface: #ffffff;
  --surface-strong: #f2f5ef;
  --text: #1c231d;
  --muted: #586458;
  --line: #dfe5db;
  --accent: #4d7b33;
  --accent-ink: #ffffff;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "DM Sans", Arial, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible, button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.site-wrap {
  width: min(var(--wrap), calc(100% - 48px));
  margin: 0 auto;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 76px;
  border-bottom: 1px solid var(--line);
}

.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.04em;
  white-space: nowrap;
}

.wordmark span { color: var(--muted); }

.site-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.site-nav a,
.site-footer > a:last-child {
  color: var(--muted);
  font-size: 0.9rem;
  transition: color 0.18s ease;
}

.site-nav a:hover,
.site-nav a.current,
.site-footer > a:last-child:hover {
  color: var(--text);
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  font-size: 1.1rem;
}

.home-hero {
  max-width: 720px;
  padding: 100px 0 72px;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--accent);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h1, h2, h3, p {
  margin-top: 0;
}

h1, h2, h3 {
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.05em;
  line-height: 1.08;
}

.home-hero h1 {
  margin-bottom: 18px;
  font-size: clamp(3.3rem, 8vw, 6rem);
}

.home-hero h1 span {
  color: var(--accent);
}

.intro-copy {
  max-width: 580px;
  color: var(--muted);
  font-size: 1.08rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 11px 16px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: transparent;
  font-size: 0.92rem;
  font-weight: 600;
  transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
}

.button:hover {
  background: var(--surface-strong);
  border-color: var(--muted);
  transform: translateY(-1px);
}

.button.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}

.content-section {
  padding: 26px 0 60px;
  border-top: 1px solid var(--line);
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.9rem, 4vw, 2.6rem);
}

.link-grid,
.project-grid,
.social-grid,
.info-grid {
  display: grid;
  gap: 14px;
}

.link-grid,
.project-grid,
.info-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.social-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.link-card,
.project-card,
.social-card,
.info-card,
.listing-card,
.callout {
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--surface);
}

.link-card,
.project-card,
.social-card,
.info-card,
.listing-card {
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
}

.link-card:hover,
.project-card:hover,
.social-card:hover,
.listing-card:hover {
  background: var(--surface-strong);
  border-color: var(--accent);
  transform: translateY(-2px);
}

.link-card {
  position: relative;
  display: block;
  min-height: 180px;
  padding: 20px;
}

.card-label {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.link-card h3,
.project-card h2,
.social-card h2,
.info-card h2,
.listing-card h2 {
  margin: 24px 0 8px;
  font-size: 1.4rem;
  letter-spacing: -0.04em;
}

.link-card p,
.project-card p,
.social-card p,
.info-card p,
.listing-card p,
.callout p:not(.eyebrow) {
  margin: 0;
  color: var(--muted);
}

.card-arrow,
.launch {
  position: absolute;
  right: 18px;
  bottom: 18px;
  color: var(--accent);
  font-weight: 700;
}

.listing-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
}

.listing-card h2 {
  margin: 0 0 6px;
}

.listing-card .launch {
  position: static;
}

.callout {
  margin: 0 0 80px;
  padding: 24px 22px;
}

.callout h2 {
  margin-bottom: 8px;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.text-link {
  display: inline-block;
  margin-top: 18px;
  color: var(--accent);
  font-weight: 600;
}

.page-main {
  padding: 62px 0 30px;
  min-height: 65vh;
}

.page-intro {
  max-width: 720px;
  margin-bottom: 30px;
}

.page-intro h1 {
  margin-bottom: 12px;
  font-size: clamp(2.5rem, 6vw, 4rem);
}

.page-intro p:last-child {
  color: var(--muted);
  font-size: 1.04rem;
}

.page-panel {
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

.social-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 20px;
}

.social-card h2 {
  margin: 0 0 6px;
}

.social-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 9px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  font-size: 0.72rem;
}

.info-card {
  padding: 20px;
}

.project-card {
  padding: 18px 20px;
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 0 28px;
  border-top: 1px solid var(--line);
}

.site-footer p {
  margin: 0;
  color: var(--muted);
  font-size: 0.85rem;
}

@media (max-width: 760px) {
  .site-wrap {
    width: min(var(--wrap), calc(100% - 28px));
  }

  .site-header {
    flex-wrap: wrap;
    padding: 14px 0;
    min-height: auto;
    gap: 12px;
  }

  .site-nav {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 8px 12px;
  }

  .link-grid,
  .project-grid,
  .social-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .site-footer {
    flex-wrap: wrap;
  }

  .site-footer p {
    order: 3;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    transition: none !important;
  }
}
