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
- Static site with GitHub Pages
- HTML5 with semantic markup
- CSS3 with custom properties
- Responsive Design with Mobile-First approach

### Development Tools
- Git for version control
- VS Code with Markdown support
- GitHub Actions for deployment
- Cloudflare for DNS and SSL

## 📁 Project Structure

```
CinemarchMedia/
├── index.html          # Main landing page
├── core-values.html    # Core values and methodology
├── brand-summary.html  # Brand information
├── privacy.html        # Privacy policy
├── styles.css         # Global styles
├── script.js          # Main JavaScript
├── assets/
│   ├── CinemarchLogo.png
│   ├── CinemarchLogoWhite.png
│   ├── MarxistsattheMoviesLogo.jpg
│   └── TheMarchingRevolutionLogo.png
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

### GitHub Pages & Cloudflare Setup

1. Configure GitHub Pages:
   ```bash
   # Ensure your repository is public
   git checkout main
   ```
   - Go to repository Settings > Pages
   - Set source branch to `main`
   - Set folder to `/ (root)`
   - Save changes

2. Configure Custom Domain:
   - Create a file named `CNAME` in your repository root
   - Add your domain: `cinemarchmedia.com`

3. Cloudflare Integration:
   - Create a Cloudflare account
   - Add your site to Cloudflare
   - Update nameservers at your domain registrar
   - In Cloudflare DNS settings, add:
     ```
     Type    Name               Content
     A       @                  185.199.108.153
     A       @                  185.199.109.153
     A       @                  185.199.110.153
     A       @                  185.199.111.153
     CNAME   www               cinemarchmedia.github.io
     ```
   - Enable SSL/TLS encryption (Full)
   - Enable Always Use HTTPS

### Managing Content

1. Main Page (index.html):
   - Update show information and featured content
   - Modify hero section content
   - Update social media links
   - Edit call-to-action sections

2. Core Values (core-values.html):
   - Update mission statement
   - Modify methodology section
   - Edit team information
   - Update brand principles

3. Brand Summary (brand-summary.html):
   - Update brand guidelines
   - Modify color schemes
   - Edit typography information
   - Update logo usage guidelines

4. Privacy Policy (privacy.html):
   - Update policy content
   - Modify terms of service
   - Edit contact information
   - Update last modified date

### Content Guidelines

- Use brand logos in their original resolution
- Maintain consistent styling using styles.css
- Follow HTML structure in existing pages
- Keep JavaScript functionality intact in script.js
- Test all pages locally before pushing changes

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
