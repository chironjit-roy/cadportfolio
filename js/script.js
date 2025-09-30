// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.chart-progress');

const animateSkillBars = () => {
    skillBars.forEach(skillBar => {
        const skillPosition = skillBar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(skillPosition < screenPosition) {
            const width = skillBar.getAttribute('data-width');
            skillBar.style.width = width + '%';
        }
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.97)';
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    // Animate skill bars
    animateSkillBars();
});

// Initialize skill bars on page load
window.addEventListener('load', animateSkillBars);

// Resume download functionality
document.getElementById('resume-download').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Resume download would start now. In a real implementation, this would link to your actual resume file.');
});

document.getElementById('resume-download-bottom').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Resume download would start now. In a real implementation, this would link to your actual resume file.');
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Add active class to current navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Engineering-themed interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add rotating animation to engineering gears on hover
    const gears = document.querySelectorAll('.engineering-element');
    
    gears.forEach(gear => {
        gear.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        gear.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
    
    // Add click effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});