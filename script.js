// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            bar.style.width = bar.getAttribute('data-progress') + '%';
            bar.style.opacity = '1';
        }
    });
};

window.addEventListener('scroll', animateSkills);

// Toggle functionality for sections
const toggleTitles = document.querySelectorAll('.toggle-title');
toggleTitles.forEach(title => {
    title.addEventListener('click', () => {
        title.classList.toggle('active');
        const content = title.nextElementSibling;
        content.classList.toggle('open');
    });
});

// Typing animation for name
const nameElement = document.querySelector('.name');
const text = nameElement.textContent;
nameElement.textContent = '';
let i = 0;

const typeWriter = () => {
    if (i < text.length) {
        nameElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start animations when page loads
window.addEventListener('load', () => {
    typeWriter();
    animateSkills();
});