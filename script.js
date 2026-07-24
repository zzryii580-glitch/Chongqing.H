// Animasi Efek Klik (Cyber Ripple Effect + Partikel Cahaya)
document.querySelectorAll('.click-fx').forEach(element => {
    element.addEventListener('click', function(e) {
        let ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        document.body.appendChild(ripple);

        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';

        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
});

// CSS untuk Efek Ripple Dinamis via JS
const styleElem = document.createElement('style');
styleElem.innerHTML = `
    .click-ripple {
        position: fixed;
        width: 15px;
        height: 15px;
        background: radial-gradient(circle, var(--neon-cyan) 0%, rgba(255,0,85,0.8) 50%, transparent 80%);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(1);
        animation: cyberRipple 0.7s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
        z-index: 99999;
        pointer-events: none;
    }
    @keyframes cyberRipple {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; box-shadow: 0 0 10px var(--neon-cyan); }
        100% { transform: translate(-50%, -50%) scale(25); opacity: 0; box-shadow: 0 0 50px var(--neon-pink); }
    }
`;
document.head.appendChild(styleElem);

// Efek Scroll Reveal untuk Section (Muncul lembut saat di-scroll)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});
