const logoFijo = document.getElementById('logoFijo');
const logoGrande = document.getElementById('logoGrande');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    logoFijo.style.visibility = 'visible';
    logoFijo.style.opacity = 1;
    logoGrande.style.opacity = 0;
  } else {
    logoFijo.style.opacity = 0;
    logoFijo.style.visibility = 'hidden';
    logoGrande.style.opacity = 1;
  }
});

// Clic en logo grande para volver al inicio
logoGrande.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
