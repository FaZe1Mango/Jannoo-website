const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const savedTheme = localStorage.getItem('jannoo-theme');
if (savedTheme === 'light') body.classList.add('light');
function updateThemeButton(){
  const isLight = body.classList.contains('light');
  themeIcon.textContent = isLight ? '☾' : '☼';
  themeLabel.textContent = isLight ? 'Dark Mode' : 'Light Mode';
  document.querySelector('meta[name="theme-color"]').content = isLight ? '#f3f3f3' : '#080808';
}
updateThemeButton();
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('jannoo-theme', body.classList.contains('light') ? 'light' : 'dark');
  updateThemeButton();
});
const nav = document.getElementById('nav');
document.getElementById('menuToggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
