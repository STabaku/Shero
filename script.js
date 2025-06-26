lucide.createIcons();

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

const indicators = document.querySelectorAll('.indicator');

indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    indicators.forEach(ind => ind.classList.remove('active'));
    indicator.classList.add('active');
  });
});