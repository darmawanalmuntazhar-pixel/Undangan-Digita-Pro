document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Audio Player Toggle
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    // Fix for Audio context starting only upon user interaction
    const initAudio = () => {
        if(!isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicBtn.classList.add('playing');
                musicBtn.innerHTML = '<i class="ph ph-speaker-high"></i>';
            }).catch(e => {
                console.log("Autoplay prevented", e);
            });
            document.removeEventListener('click', initAudio);
        }
    };

    document.addEventListener('click', initAudio, { once: true });

    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent document click trigger
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="ph ph-speaker-slash"></i>';
            musicBtn.classList.remove('playing');
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="ph ph-speaker-high"></i>';
            musicBtn.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
});
