// Dark mode only
function initTheme() {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (window.localStorage) {
    localStorage.setItem('bw-theme', 'dark');
  }
}

// Mobile menu
document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  const ham = document.getElementById('hamburger-icon');
  const close = document.getElementById('close-icon');
  const isHidden = menu.classList.contains('hidden');
  
  menu.classList.toggle('hidden');
  ham.classList.toggle('hidden', !isHidden);
  close.classList.toggle('hidden', isHidden);
});

document.addEventListener('DOMContentLoaded', initTheme);