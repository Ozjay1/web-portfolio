// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.fancyBtn').addEventListener('click', () => {
    const btnCover = document.querySelector('.cover');
    btnCover.style.transform = 'translateX(0)';
} )

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