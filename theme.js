const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function applyTheme(theme) {
  const isLight = theme === 'light';
  body.classList.toggle('light-mode', isLight);
  if (themeToggle) {
    themeToggle.textContent = isLight ? '☾' : '☼';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    themeToggle.title = isLight ? 'Switch to dark theme' : 'Switch to light theme';
  }
}

try {
  applyTheme(localStorage.getItem('theme') || 'dark');
  themeToggle?.addEventListener('click', () => {
    const next = body.classList.contains('light-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
} catch (error) {
  applyTheme('dark');
}
