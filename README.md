Anime Video Gallery
A responsive web application showcasing a collection of memorable moments from various anime series through video clips. The gallery features a sleek, dark-themed interface with a lightbox for an enhanced viewing experience.
Features

Responsive Grid Layout: Displays video thumbnails in a grid that adapts to different screen sizes using CSS Grid.
Interactive Lightbox: Clicking a video thumbnail opens a lightbox with a larger video player and caption, supporting playback controls.
Hover Effects: Videos scale up and display a shadow on hover for a dynamic user experience.
Smooth Animations: Includes a fade-in effect for the lightbox and smooth transitions for hover interactions.
Dark Theme: A modern, dark-themed design for better visual appeal and reduced eye strain.

Technologies Used

HTML5: Structures the gallery and lightbox components.
CSS3: Styles the layout, grid, and lightbox with animations and responsive design.
JavaScript: Handles lightbox functionality, video playback, and event listeners for user interactions.

Setup
To run this project locally, follow these steps:

Clone the Repository:
git clone https://github.com/TawanaShava/anime-gallery.git


Navigate to the Project Directory:
cd anime-gallery


Serve the Project:

Use a local server (e.g., Live Server in VS Code, or any HTTP server like http-server or Python's http.server).
Example using Python:python -m http.server 8000


Open your browser and navigate to http://localhost:8000.


Ensure Video Files:

Place your video files (e.g., hunter_x_hunter.mp4, jjk.mp4, etc.) in the videos/ directory as referenced in the HTML.
Supported video formats: MP4 (ensure compatibility with your browser).



File Structure
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

Usage

Browsing the Gallery: Open index.html in a browser to view the grid of anime video thumbnails.
Viewing Videos: Click on any video thumbnail to open the lightbox, which displays the full video with controls and a caption.
Closing the Lightbox: Click the "×" button or anywhere outside the video player to close the lightbox and pause the video.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m "Add feature").
Push to the branch (git push origin feature-branch).
Open a pull request.


Contact
For questions or suggestions, reach out via GitHub Issues or contact the repository owner, Tawana Shava.
