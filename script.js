window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#333';
      document.body.style.fontFamily = 'Helvetica, Arial, sans-serif';
  } else {
      navbar.style.backgroundColor = 'transparent';
      document.body.style.fontFamily = 'Georgia, serif';
  }
});

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  section.addEventListener('mouseover', () => {
      section.style.backgroundColor = '#ccc';
  });

  section.addEventListener('mouseout', () => {
      section.style.backgroundColor = '';
  });
});
