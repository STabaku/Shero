lucide.createIcons();

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});





const indicators = document.querySelectorAll('.carousel-nav');
indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    indicators.forEach(ind => ind.classList.remove('active'));
    indicator.classList.add('active');
  });
});




const swiper = new Swiper('.testimonials-swiper', {
  navigation: {
    prevEl: '.custom-prev',
    nextEl: '.custom-next',
  },
  loop: true,
});




document.addEventListener('DOMContentLoaded', () => {
  const myCarusel = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 2,
    rewind: false,
  });

  const carusInd = document.querySelectorAll('.carus-ind');

  carusInd.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      myCarusel.go(`=${idx}`);
    });
  });

  myCarusel.on('run', () => {
    const currentIndex = myCarusel.index;
    carusInd.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  });

  myCarusel.mount();
});



const healingSwiper = new Swiper('.healing-swiper', {
  navigation: {
    prevEl: '.healing-prev',
    nextEl: '.healing-next',
  },
  loop: true,
});
