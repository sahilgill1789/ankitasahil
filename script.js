// Wedding Website Interactive Features
// Ankita & Sahil - February 2026

// ===================================
// Countdown Timer
// ===================================
function updateCountdown() {
    const weddingDate = new Date('2026-02-20T18:00:00'); // Feb 20, 2026 at 6 PM (Pheras time)
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        // Update the countdown display
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    } else {
        // Wedding has happened!
        document.getElementById('countdown').innerHTML = '<p style="font-size: 2rem; color: var(--terracotta); font-family: \'Cormorant Garamond\', serif;">We\'re Married! 🎉</p>';
    }
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60000);

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const storySection = document.querySelector('.story-section');
        if (storySection) {
            storySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ===================================
// Fade-in Animation on Scroll
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// ===================================
// Google Form Integration Helper
// ===================================
// When you get your Google Form embed URL, you can use this function
function embedGoogleForm(formUrl) {
    const placeholder = document.getElementById('google-form-placeholder');
    const formContainer = document.querySelector('.form-container');
    
    if (placeholder && formContainer) {
        // Hide placeholder
        placeholder.style.display = 'none';
        
        // Create iframe for Google Form
        const iframe = document.createElement('iframe');
        iframe.src = formUrl;
        iframe.width = '100%';
        iframe.height = '1200';
        iframe.frameBorder = '0';
        iframe.marginHeight = '0';
        iframe.marginWidth = '0';
        iframe.id = 'google-form';
        iframe.innerHTML = 'Loading…';
        
        formContainer.appendChild(iframe);
    }
}

// Example usage (uncomment and add your form URL when ready):
// embedGoogleForm('https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true');

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled <= window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===================================
// Image Loading Animation
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-item img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'fadeInScale 0.6s ease-out';
        });
        
        // If image is already cached and loaded
        if (img.complete) {
            img.style.animation = 'fadeInScale 0.6s ease-out';
        }
    });
});

// ===================================
// Mobile Menu Toggle (if needed in future)
// ===================================
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// ===================================
// Add sparkle effect on hover (decorative)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const coupleNames = document.querySelector('.couple-names');
    
    if (coupleNames) {
        coupleNames.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(201, 169, 97, 0.8), 2px 2px 4px rgba(139, 26, 26, 0.3)';
        });
        
        coupleNames.addEventListener('mouseleave', function() {
            this.style.textShadow = '2px 2px 4px rgba(139, 26, 26, 0.2)';
        });
    }
});

// ===================================
// Console Message (Easter Egg)
// ===================================
console.log('%c💐 Welcome to Ankita & Sahil\'s Wedding! 💐', 'font-size: 20px; color: #C9A961; font-weight: bold;');
console.log('%cFebruary 18-20, 2026 | Rohtak & Delhi', 'font-size: 14px; color: #8B1A1A;');
console.log('%cThree days of celebration and joy 🎉', 'font-size: 16px; color: #C9A961; font-weight: bold;');

// ===================================
// Prevent right-click on images (optional protection)
// ===================================
// Uncomment if you want to prevent image downloads
/*
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    });
});
*/

// ===================================
// Analytics Helper (for future use)
// ===================================
function trackEvent(eventName, eventData) {
    // You can integrate Google Analytics or other tracking here
    console.log('Event tracked:', eventName, eventData);
}

// Track RSVP form submission (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#google-form');
    if (form) {
        form.addEventListener('load', function() {
            // Form loaded successfully
            trackEvent('rsvp_form_loaded', { timestamp: new Date() });
        });
    }
});
