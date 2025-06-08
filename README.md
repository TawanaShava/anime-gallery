# Anime Video Gallery 🎥

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/TawanaShava/anime-gallery)](https://github.com/TawanaShava/anime-gallery/stargazers)

A responsive web application showcasing iconic anime moments through video clips, featuring a sleek dark theme and interactive lightbox.

## Description

Anime Video Gallery displays a collection of video clips from popular anime like Hunter x Hunter, Jujutsu Kaisen, and Bleach. Built with HTML, CSS, and JavaScript, it offers a responsive grid layout, smooth animations, and a lightbox for immersive video playback.

## Features

- **Responsive Grid Layout**: Adapts to any screen size using CSS Grid.
- **Interactive Lightbox**: Full-screen video player with captions and controls.
- **Hover Effects**: Thumbnails scale up with shadows on hover.
- **Dark Theme**: Modern, eye-friendly design.
- **Smooth Animations**: Fade-in lightbox and hover transitions.

## Demo

![Gallery Screenshot](./screenshots/gallery-grid.png)

*Live demo coming soon!*

## Setup

To run locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TawanaShava/anime-gallery.git
2. **Navigate to the Directory:
   ```bash
   cd anime-gallery
3. **Serve the Project**:
   -Use a local server (e.g., VS Code Live Server or Python’s HTTP server).
   -Example with Python
   ```bash
   python -m http.server 8000
  -Open http://localhost:8000 in your browser.
4. **Add Video Files**:
 - Place MP4 video files (e.g., hunter_x_hunter.mp4, jjk.mp4) in the videos/ directory.
 - Ensure videos are in a browser-compatible format (e.g., MP4 with H.264 codec).

## File Structure

anime-gallery/
├── videos/                 # Directory for video files
│   ├── hunter_x_hunter.mp4
│   ├── jjk.mp4
│   ├── kagurabachi.mp4
│   ├── choujin.mp4
│   ├── fire_force.mp4
│   ├── bankai.mp4
├── index.html             # Main HTML file for the gallery
├── style.css              # CSS styles for layout and design
├── script.js              # JavaScript for lightbox and interactivity
└── README.md              # Project documentation

## Usage

- Browse the Gallery: Open index.html in a browser to view a grid of anime video thumbnails.
- Play Videos: Click a thumbnail to open the lightbox, which displays the video with playback controls and a caption.
- Close Lightbox: Click the "×" button or anywhere outside the video player to close and pause the video.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit (git commit -m "Add feature").
4. Push to the branch (git push origin feature-branch).
5.Open a pull request.

Please open an [issue](https://github.com/TawanaShava/anime-gallery/issues) to discuss major changes or report bugs.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or suggestions, open an [issue](https://github.com/TawanaShava/anime-gallery/issues) on GitHub or contact [Tawana Shava](https://github.com/TawanaShava).
