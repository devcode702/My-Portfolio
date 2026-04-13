// ── Typing Effect ──
const phrases = [
    'Python Developer',
    'Data Analyst',
    'Streamlit Builder',
    'Problem Solver',
    'Backend Developer'
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typingText');

function type() {
    const current = phrases[phraseIndex];
    typingEl.textContent = isDeleting
        ? current.substring(0, charIndex--)
        : current.substring(0, charIndex++);

    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1800; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }
    setTimeout(type, speed);
}
setTimeout(type, 1200);

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile Menu ──
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Skill Tags Stagger ──
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-tag').forEach((tag, i) => {
                setTimeout(() => tag.style.animationDelay = `${i * 0.05}s`, 0);
                setTimeout(() => tag.classList.add('visible'), i * 50);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-list').forEach(el => skillObserver.observe(el));

// ── Stat Counter ──
function animateCount(el, target, suffix = '') {
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const step = target / 50;
    const timer = setInterval(() => {
        start += step;
        if (start >= target) { start = target; clearInterval(timer); }
        el.textContent = isDecimal ? start.toFixed(2) : Math.floor(start) + suffix;
    }, 30);
}
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-box').forEach(box => {
                const numEl = box.querySelector('.num');
                const raw = numEl.textContent.trim();
                const suffix = raw.replace(/[\d.]/g, '');
                const value = parseFloat(raw);
                animateCount(numEl, value, suffix);
            });
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.about-stats').forEach(el => statObserver.observe(el));

// ── Active Nav Highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// ── Contact Form ──
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.className = 'form-message error';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = 'Please enter a valid email.';
            formMessage.className = 'form-message error';
            return;
        }
        formMessage.textContent = '✓ Message sent! I\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        contactForm.reset();
        setTimeout(() => { formMessage.textContent = ''; formMessage.className = ''; }, 5000);
    });
}
