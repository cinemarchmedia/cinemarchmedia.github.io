# CineMarch Media Website

A modern, responsive website for CineMarch Media, LLC - a multimedia company producing revolutionary cinema analysis content across multiple platforms.

## 🎯 Overview

CineMarch Media's website serves as a central hub for:
- Show information and latest episodes
- Brand values and mission
- Contact information
- Social media integration
- Privacy policy and terms of use

## 🎬 Shows

### The Marching Revolution
A podcast exploring activism, artistry, and storytelling in the marching arts.
- [YouTube](https://youtube.com/@themarchingrevolution) - Weekly episodes and analysis
- [TikTok](https://www.tiktok.com/@themarchingrevolution) - Short-form content and highlights
- [Spotify](https://open.spotify.com/show/4dJgCV0q6q3X5SnopDD3e2) - Full podcast episodes

### Marxists at the Movies
A media analysis podcast exploring how art reveals deeper truths about our world.
- [YouTube](https://youtube.com/@marxistsatthemovies) - In-depth film analysis
- [TikTok](https://www.tiktok.com/@marxistsatthemovies) - Movie clips and quick takes
- [Spotify](https://open.spotify.com/show/5iIunbKc0EmSTgMbSvqbVD) - Full episodes and discussions

## 🛠 Technical Stack

### Frontend
- HTML5 with semantic markup
- CSS3 with custom properties and Flexbox/Grid
- Vanilla JavaScript (ES2022+)
- Responsive Design with Mobile-First approach

### APIs & Integration
- YouTube Data API v3
- TikTok Embed API
- Spotify Web Playback SDK

### Development Tools
- Git for version control
- VS Code with ESLint and Prettier
- Chrome DevTools for debugging
- PageSpeed Insights for performance

## 📁 Project Structure

```
CinemarchMedia/
├── assets/
│   ├── images/         # Optimized images and graphics
│   ├── icons/          # SVG icons and favicons
│   └── fonts/          # Web fonts and typography
├── css/
│   ├── styles.css      # Global styles
│   ├── components/     # Component-specific styles
│   └── variables.css   # CSS custom properties
├── js/
│   ├── main.js         # Main JavaScript entry
│   ├── api/            # API integration modules
│   ├── components/     # UI components
│   └── utils/          # Helper functions
├── pages/
│   ├── core-values.html
│   └── privacy.html
├── index.html          # Main landing page
└── README.md          # Project documentation
```

## 🚀 Features

- Responsive navigation with smooth dropdowns
- Dynamic latest episodes section with lazy loading
- Floating animation elements with IntersectionObserver
- Social media integration with native embeds
- Contact form with validation and spam protection
- Back-to-top functionality with smooth scroll
- Cross-platform content distribution
- SEO optimized with meta tags and structured data
- Performance optimized with lazy loading and minification

## 🎨 Design Elements

- Modern, clean aesthetic with consistent branding
- Responsive breakpoints for all devices
- Animated elements using CSS transitions
- WCAG 2.1 compliant accessible navigation
- Dark mode support
- Mobile-friendly layout with touch optimization

## 📱 Responsive Design

The website implements a mobile-first approach with strategic breakpoints:
- Mobile: < 768px (Base styles)
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: ≥ 1440px

## 🔧 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/cinemarchmedia/website.git
   cd website
   ```

2. Configure API Keys:
   - Create a `.env` file in the root directory
   - Add your YouTube Data API key:
     ```
     YOUTUBE_API_KEY=your_api_key_here
     ```

3. Local Development:
   - Use a local server (e.g., Live Server VS Code extension)
   - Open `index.html` in your browser
   - Enable DevTools for debugging

4. API Integration:
   - Update `js/api/youtube.js` with your API key
   - Test API endpoints using the browser console
   - Monitor API quota usage in Google Cloud Console

## 🔄 Future Updates

- Enhanced YouTube Data API integration with caching
- Advanced animation effects using GSAP
- Dynamic show content management system
- Blog/article section with Markdown support
- Newsletter integration with subscriber management
- Performance optimization with service workers
- Analytics dashboard for content metrics

## 📧 Contact

For inquiries and collaboration:
- CineMarch Media: cinemarchmedia@gmail.com
- The Marching Revolution: themarchingrevolution@gmail.com
- Marxists at the Movies: marxistsatthemovies@gmail.com

## 📝 License

Copyright © 2025 CineMarch Media. All rights reserved. 
