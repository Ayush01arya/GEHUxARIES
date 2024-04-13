var NavElement = document.querySelector("nav");
var image = document.querySelector(".navbar-brand img");
window.addEventListener("scroll", () => {
    NavElement.classList.toggle("active", window.scrollY > 0);
    if (window.scrollY > 0) image.src = "img/alogo.svg";
    else image.src = "img/alogo2.svg";
});