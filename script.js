function updateChoiceBg() {
  const container = document.querySelector('.choice-buttons');
  const bg = container.querySelector('.choice-bg');
  const buttons = container.querySelectorAll('button');
  const active = container.querySelector('button.active');
  const idx = Array.from(buttons).indexOf(active);

  // Pour 2 boutons, largeur = 50%
  bg.style.left = `calc(${idx * 50}% + 5px)`;
}

function toggleSelection(type) {
  const btns = document.querySelectorAll('.choice-buttons button');
  btns.forEach(btn => btn.classList.remove('active'));
  if (type === 'particulier') {
    document.getElementById('particulierBtn').classList.add('active');
  } else {
    document.getElementById('institutionBtn').classList.add('active');
  }
  updateChoiceBg();
}

// Initialisation au chargement
window.addEventListener('DOMContentLoaded', updateChoiceBg);
window.addEventListener('resize', updateChoiceBg);
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const mainContent = document.querySelector('.main-content');
  if(window.scrollY > 10) {
    header.classList.add('fixed');
    mainContent.style.paddingTop = header.offsetHeight + 'px';
  } else {
    header.classList.remove('fixed');
    mainContent.style.paddingTop = '';
  }
});