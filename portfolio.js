// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.projectDisplay');
  if (!container) return;


  const originalWidth = container.scrollWidth / 2; //container.getBoundingClientRect();
  
let scrollLeft = 0;
  const speed = 1; // Pixels per frame; adjust for desired speed (e.g., 1-3)
  let isPaused = false;
  let pauseTimeout;

  // Animation loop using requestAnimationFrame for efficiency
  function animate() {
    if (!isPaused) {
      scrollLeft += 1;
      if (scrollLeft >= originalWidth) {
        scrollLeft -= 1; 
      }
      container.scrollLeft = scrollLeft;
    }
    requestAnimationFrame(animate);
  }

  animate(); // Start animation

  // Pause on user interaction (wheel or touch) for 3 seconds to allow manual scroll
  const pauseDuration = 3000; // ms
  function pauseAnimation() {
    isPaused = true;
    clearTimeout(pauseTimeout)
    pauseTimeout = setTimeout(() => {
      isPaused = false;
    }, pauseDuration);
  }

  container.addEventListener('wheel', pauseAnimation);
  container.addEventListener('touchstart', pauseAnimation);
  container.addEventListener('touchmove', pauseAnimation);
});

// Basic form handler (logs to console; replace with real backend if needed)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Message sent! (Logged to console)');
    form.reset();
});