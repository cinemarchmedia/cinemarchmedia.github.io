// YouTube Channel IDs
const CHANNELS = {
    marchingRevolution: '@themarchingrevolution',
    marxistsMovies: '@marxistsatthemovies'
};

// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Function to create episode card
function createEpisodeCard(video) {
    return `
        <div class="episode-card">
            <div class="episode-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
            </div>
            <div class="episode-content">
                <h4 class="episode-title">${video.title}</h4>
                <p class="episode-date">${formatDate(video.publishedAt)}</p>
                <p class="episode-description">${video.description}</p>
                <a href="https://youtube.com/watch?v=${video.videoId}" class="episode-link" target="_blank">Watch Episode →</a>
            </div>
        </div>
    `;
}

// Function to fetch latest videos from a channel
async function fetchLatestVideos(channelId, containerId) {
    const container = document.getElementById(containerId);
    
    try {
        // In a real implementation, you would make an API call to YouTube Data API
        // For now, we'll use placeholder data
        const videos = [
            {
                title: "Loading latest episodes...",
                description: "Please check our YouTube channel for the latest content.",
                thumbnail: "placeholder.jpg",
                publishedAt: new Date().toISOString(),
                videoId: ""
            }
        ];

        container.innerHTML = videos.map(createEpisodeCard).join('');
    } catch (error) {
        container.innerHTML = `<div class="error">Error loading episodes. Please try again later.</div>`;
        console.error('Error fetching videos:', error);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchLatestVideos(CHANNELS.marchingRevolution, 'marching-revolution-episodes');
    fetchLatestVideos(CHANNELS.marxistsMovies, 'marxists-movies-episodes');
}); 