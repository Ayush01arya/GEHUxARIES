// Get the slideshow container element
const slideshowContainer = document.getElementById('slide-slow-box');

// Array of image URLs
const imageUrls = [
  'img/imagenani.png',
  'img/Frame 3.png',
  'img/Frame 4.png',
  'img/Frame 5.png',
];

let currentIndex = 0;

// Function to change the image
function changeImage() {
  // Set the background image of the slideshow container
  slideshowContainer.src = imageUrls[currentIndex];

  // Increment the current index
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Initial call to change the image
changeImage();

// Set interval to change the image every 3 seconds
setInterval(changeImage, 3000);