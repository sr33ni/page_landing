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
    root: null,
  rootMargin: "0px 0px 20px 0px",
  threshold: 0
});

observer.observe(box);