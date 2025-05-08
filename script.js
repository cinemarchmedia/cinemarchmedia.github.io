// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Handle the case when href is just "#"
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        // Handle other anchor links
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to your backend
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Production description toggles
function closeAllDescriptions() {
    document.querySelectorAll('.show-description').forEach(desc => {
        desc.classList.remove('active');
    });
    document.querySelectorAll('.toggle-description').forEach(btn => {
        btn.classList.remove('active');
    });
}

document.querySelectorAll('.toggle-description').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the current card and its description
        const card = this.closest('.show-card');
        const description = card.querySelector('.show-description');
        const isCurrentlyActive = description.classList.contains('active');
        
        // Close all descriptions first
        closeAllDescriptions();
        
        // If the clicked description wasn't active, open it
        if (!isCurrentlyActive) {
            this.classList.add('active');
            description.classList.add('active');
            
            // Smooth scroll if needed
            setTimeout(() => {
                const cardRect = card.getBoundingClientRect();
                const cardBottom = cardRect.bottom;
                const windowHeight = window.innerHeight;
                
                if (cardBottom > windowHeight) {
                    const scrollTo = window.pageYOffset + cardRect.top - 100;
                    window.scrollTo({
                        top: scrollTo,
                        behavior: 'smooth'
                    });
                }
            }, 400); // Match this with the CSS transition time
        }
    });
});

// Close descriptions when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.show-card')) {
        closeAllDescriptions();
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Dynamic content loading for analysis section
const analysisGrid = document.querySelector('.analysis-grid');

// Sample analysis articles data
const analysisArticles = [
    {
        title: 'The Political Economy of Modern Cinema',
        excerpt: 'Exploring how economic systems shape contemporary film production and distribution.',
        date: '2024-03-15',
        image: 'path/to/image1.jpg'
    },
    {
        title: 'Revolutionary Themes in World Cinema',
        excerpt: 'A deep dive into how global filmmakers address social change and revolution.',
        date: '2024-03-10',
        image: 'path/to/image2.jpg'
    }
];

// Function to create analysis article cards
function createAnalysisCard(article) {
    return `
        <article class="analysis-card">
            <div class="analysis-content">
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <span class="date">${new Date(article.date).toLocaleDateString()}</span>
                <a href="#" class="read-more">Read More</a>
            </div>
        </article>
    `;
}

// Load analysis articles
function loadAnalysisArticles() {
    if (analysisGrid) {
        analysisGrid.innerHTML = analysisArticles
            .map(article => createAnalysisCard(article))
            .join('');
    }
}

// Load articles when the page loads
document.addEventListener('DOMContentLoaded', loadAnalysisArticles);

// YouTube API Configuration
const YOUTUBE_API_KEY = 'AIzaSyDcTdbVWmDtETNhnZ1rpyuWj1xEnrLszS8'; // YouTube Data API key
const CHANNEL_ID = 'UCmVkWDYVJxgxHWCzFUH5wXg'; // The Marching Revolution channel ID

// Function to format date
function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Function to truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Function to create video card HTML
function createVideoCard(video) {
    const { title, description, publishedAt, thumbnails, videoId } = video;
    return `
        <article class="video-card">
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="video-thumbnail">
                <img src="${thumbnails.medium.url}" alt="${title}">
            </a>
            <div class="video-content">
                <h3 class="video-title">${title}</h3>
                <p class="video-date">${formatDate(publishedAt)}</p>
                <p class="video-description">${truncateText(description, 150)}</p>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="video-link">
                    Watch Video
                </a>
            </div>
        </article>
    `;
}

// Function to fetch videos from YouTube API
async function fetchYouTubeVideos() {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return; // Exit if videoGrid doesn't exist

    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`);
        const data = await response.json();

        if (!response.ok) throw new Error(data.error.message);

        videoGrid.innerHTML = ''; // Clear loading message

        const videos = data.items.map(item => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails
        }));

        videos.forEach(video => {
            videoGrid.innerHTML += createVideoCard(video);
        });
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        if (videoGrid) {
            videoGrid.innerHTML = `
                <div class="error-message">
                    Unable to load videos. Please try again later.
                </div>
            `;
        }
    }
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('videoGrid');
    if (videoGrid) {
        fetchYouTubeVideos();
    }
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}); 