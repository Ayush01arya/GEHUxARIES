var nav = document.querySelector("nav")
var image = document.querySelector(".navbar-brand img");
window.addEventListener("scroll", () => {
    nav.classList.toggle("active", window.scrollY > 0)
    if (window.scrollY > 0) {
        image.src = "/img/alogo.svg";
    }
    else {
        image.src = "/img/alogo2.svg";
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