document.addEventListener("DOMContentLoaded", () => {
  console.log('Portfolio Loaded');

  // Smooth scroll with additional logging
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animate section headers on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated-visible');
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('h2').forEach(h => observer.observe(h));

  const themeSwitcher = document.getElementById('themeSwitcher');
if (themeSwitcher) {
  // Sync with default
  if (themeSwitcher.checked) {
    document.body.classList.add('dark-mode');
  }

  themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    console.log('Theme switched to:', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}


  // Fade-in animation for sections
  const faders = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  faders.forEach(fader => fadeObserver.observe(fader));
});
