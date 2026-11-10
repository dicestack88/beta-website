// A simple persistent theme switch shared by the site's content pages.
const toggle = document.getElementById('themeToggle');
const body = document.body;

function applyTheme(theme) {
  const light = theme === 'light';
  body.classList.toggle('light-mode', light);
  if (toggle) {
    toggle.textContent = light ? '☾' : '☼';
    toggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    toggle.title = light ? 'Switch to dark theme' : 'Switch to light theme';
  }
}

applyTheme(localStorage.getItem('theme') || 'dark');

toggle?.addEventListener('click', () => {
  const next = body.classList.contains('light-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', next);
  applyTheme(next);
});
