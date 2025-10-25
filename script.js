const box = document.querySelector('.box-to-observe');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    }
  });
}, {
  threshold: 0.2
});

observer.observe(box);