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

// ── Hero Particles ──
(function spawnParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    const colors = ['#00d4ff', '#7b2ff7', '#34d399', '#a78bfa'];
    for (let i = 0; i < 22; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = Math.random() * 10 + 8;
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.cssText = `
            width:${size}px; height:${size}px;
            left:${left}%; bottom:${Math.random() * 30}%;
            background:${color};
            box-shadow: 0 0 ${size * 3}px ${color};
            animation-duration:${duration}s;
            animation-delay:${delay}s;
        `;
        container.appendChild(p);
    }
})();

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

// ── Network Node Background Animation ──
(function initNetwork() {
    const canvas = document.getElementById('networkCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const COLORS = ['#00d4ff', '#7b2ff7', '#34d399', '#a78bfa'];
    const NODE_COUNT = 70;
    const MAX_DIST = 160;
    const NODE_SPEED = 0.4;

    let W, H, nodes = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function randomColor() {
        return COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    function createNode() {
        return {
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * NODE_SPEED,
            vy: (Math.random() - 0.5) * NODE_SPEED,
            r: Math.random() * 2 + 1.5,
            color: randomColor(),
            pulse: Math.random() * Math.PI * 2   // phase offset for pulsing
        };
    }

    function init() {
        resize();
        nodes = Array.from({ length: NODE_COUNT }, createNode);
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        const t = performance.now() * 0.001;

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const a = nodes[i], b = nodes[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_DIST) {
                    const alpha = (1 - dist / MAX_DIST) * 0.35;
                    // Gradient line between two node colors
                    const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
                    grad.addColorStop(0, hexToRgba(a.color, alpha));
                    grad.addColorStop(1, hexToRgba(b.color, alpha));
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        // Draw nodes
        nodes.forEach(n => {
            const pulse = n.r + Math.sin(t * 1.5 + n.pulse) * 0.6;

            // Outer glow ring
            const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulse * 5);
            glow.addColorStop(0, hexToRgba(n.color, 0.25));
            glow.addColorStop(1, hexToRgba(n.color, 0));
            ctx.beginPath();
            ctx.arc(n.x, n.y, pulse * 5, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();

            // Core dot
            ctx.beginPath();
            ctx.arc(n.x, n.y, pulse, 0, Math.PI * 2);
            ctx.fillStyle = hexToRgba(n.color, 0.9);
            ctx.fill();
        });

        // Move nodes
        nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;
            // Bounce off edges
            if (n.x < 0 || n.x > W) n.vx *= -1;
            if (n.y < 0 || n.y > H) n.vy *= -1;
        });

        requestAnimationFrame(draw);
    }

    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r},${g},${b},${alpha})`;
    }

    window.addEventListener('resize', () => {
        resize();
        // Reposition nodes within new bounds
        nodes.forEach(n => {
            n.x = Math.min(n.x, W);
            n.y = Math.min(n.y, H);
        });
    });

    init();
    draw();
})();
