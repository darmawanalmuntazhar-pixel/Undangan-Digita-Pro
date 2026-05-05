// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.add('scrolled');
        navbar.classList.remove('scrolled'); // Force layout
        if (window.scrollY <= 50) {
            navbar.classList.remove('scrolled');
        }
    }
});

// Intersection Observer for Scroll Animations (Fade-in-up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements with the animation class
const animatedElements = document.querySelectorAll('.fade-in-up');
animatedElements.forEach(el => observer.observe(el));

// WhatsApp Order Integration
const orderButtons = document.querySelectorAll('.btn-order');
const waNumber = "6287884209769"; // Ganti dengan nomor WhatsApp sebenarnya (format internasional tanpa +)

orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.getAttribute('data-plan');
        const planPrice = this.getAttribute('data-price');
        
        // Teks pesan yang akan dikirim ke WhatsApp
        const message = `Halo Admin Undangan Pro,%0A%0ASaya tertarik untuk memesan *Jasa Undangan Digital*.%0A%0A*Paket:* ${planName}%0A*Harga:* Rp ${planPrice}%0A%0AMohon informasi lebih lanjut mengenai cara pemesanan dan metode pembayarannya. Terima kasih!`;
        
        // Buat link WhatsApp
        const waLink = `https://wa.me/${waNumber}?text=${message}`;
        
        // Buka di tab baru
        window.open(waLink, '_blank');
    });
});

// Smooth Scrolling untuk Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Adjust offset for fixed navbar
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    // Basic alert for now, can be expanded to proper mobile menu
    alert('Fitur menu mobile akan membuka dropdown. Untuk sekarang, silakan scroll secara vertikal.');
});
