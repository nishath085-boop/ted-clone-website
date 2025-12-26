// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Mobile Dropdown Toggle
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    const navLink = item.querySelector('.nav-link');
    
    navLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});

// Search Overlay
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 300);
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
});

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
    }
});

// Close search on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
    }
});

// Featured Talks Data
const talksData = [
    {
        title: "Do schools kill creativity?",
        speaker: "Sir Ken Robinson",
        duration: "19:22",
        views: "74M views",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
    },
    {
        title: "The power of vulnerability",
        speaker: "Brené Brown",
        duration: "20:19",
        views: "58M views",
        thumbnail: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop"
    },
    {
        title: "How great leaders inspire action",
        speaker: "Simon Sinek",
        duration: "18:04",
        views: "62M views",
        thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
    },
    {
        title: "Your body language shapes who you are",
        speaker: "Amy Cuddy",
        duration: "21:03",
        views: "65M views",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
    },
    {
        title: "The happy secret to better work",
        speaker: "Shawn Achor",
        duration: "12:20",
        views: "25M views",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
        title: "How to speak so that people want to listen",
        speaker: "Julian Treasure",
        duration: "9:58",
        views: "45M views",
        thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop"
    }
];

// Topics Data
const topicsData = [
    { name: "Technology", icon: "💻" },
    { name: "Science", icon: "🔬" },
    { name: "Business", icon: "💼" },
    { name: "Health", icon: "🏥" },
    { name: "Education", icon: "📚" },
    { name: "Art", icon: "🎨" },
    { name: "Entertainment", icon: "🎭" },
    { name: "Design", icon: "✏️" },
    { name: "Global Issues", icon: "🌍" },
    { name: "Psychology", icon: "🧠" },
    { name: "Culture", icon: "🎪" },
    { name: "Innovation", icon: "💡" }
];

// Render Featured Talks
function renderTalks() {
    const talksGrid = document.getElementById('talksGrid');
    
    talksData.forEach(talk => {
        const talkCard = document.createElement('div');
        talkCard.className = 'talk-card';
        talkCard.innerHTML = `
            <div class="talk-thumbnail">
                <img src="${talk.thumbnail}" alt="${talk.title}">
                <span class="talk-duration">${talk.duration}</span>
            </div>
            <div class="talk-info">
                <h3 class="talk-title">${talk.title}</h3>
                <p class="talk-speaker">${talk.speaker}</p>
                <p class="talk-views">${talk.views}</p>
            </div>
        `;
        
        talkCard.addEventListener('click', () => {
            animateClick(talkCard);
        });
        
        talksGrid.appendChild(talkCard);
    });
}

// Render Topics
function renderTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    
    topicsData.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-icon">${topic.icon}</div>
            <div class="topic-name">${topic.name}</div>
        `;
        
        topicCard.addEventListener('click', () => {
            animateClick(topicCard);
        });
        
        topicsGrid.appendChild(topicCard);
    });
}

// Animate Click Effect
function animateClick(element) {
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = '';
    }, 150);
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset();
    }
});

// Load More Button
const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.addEventListener('click', () => {
    animateClick(loadMoreBtn);
    setTimeout(() => {
        alert('Loading more talks...');
    }, 200);
});

// Smooth Scroll for Internal Links
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

// Hero Video Click
const videoPlaceholder = document.querySelector('.video-placeholder');

videoPlaceholder.addEventListener('click', () => {
    animateClick(videoPlaceholder);
    setTimeout(() => {
        alert('Playing video...');
    }, 200);
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.talk-card, .topic-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        const isClickInside = navMenu.contains(e.target) || menuToggle.contains(e.target);
        
        if (!isClickInside && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Close mobile dropdowns on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navItems.forEach(item => item.classList.remove('active'));
    }
});

// Scroll to top button functionality
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add transition to header
header.style.transition = 'transform 0.3s ease';

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderTalks();
    renderTopics();
    
    // Delay scroll animations to ensure content is loaded
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});