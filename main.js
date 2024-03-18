var nav = document.querySelector("nav")
var image = document.querySelector(".navbar-brand img");
window.addEventListener("scroll", () => {
    nav.classList.toggle("active", window.scrollY > 0)
    if (window.scrollY > 0) {
        image.src = "img/alogo.svg";
    }
    else {
        image.src = "img/alogo2.png";
    }

})
$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


//
var swiper = new Swiper(".swiper-wrapper", {
    slidesPerView: 3,
})
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