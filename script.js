document.addEventListener('DOMContentLoaded', () => {

    // Get all the gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Get the lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');
    const caption = document.getElementById('caption');
    const closeButton = document.querySelector('.close-button');

    // Loop through each gallery item and add a click event listener
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Get the video source and caption from the clicked item
            // Note: we are looking for a <video> tag now, not <img>
            const videoSrc = item.querySelector('video').src;
            const videoCaption = item.dataset.caption;

            // Set the video source and caption in the lightbox
            lightboxVideo.src = videoSrc;
            caption.textContent = videoCaption;

            // Show the lightbox with a flex display
            lightbox.style.display = 'flex';

            // Play the video when the lightbox is opened
            lightboxVideo.play();
        });
    });

    // Function to close the lightbox
    const closeLightbox = () => {
        lightbox.style.display = 'none';

        // IMPORTANT: Pause the video and reset the source when closing
        // This stops the video from playing in the background
        lightboxVideo.pause();
        lightboxVideo.src = ""; // Resetting the src is a good practice
    };

    // Adding click event to the close button
    closeButton.addEventListener('click', closeLightbox);

    // Adding click event to the lightbox background to close it
    lightbox.addEventListener('click', (e) => {
        // Only close if the click is on the background itself, not the video player
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});