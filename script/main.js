function changeNavbarOnScroll() {
	// On scroll change the navbar background color and logo
	var NavElement = document.querySelector("nav");
	var image = document.querySelector(".navbar-brand img");
	window.addEventListener("scroll", () => {
		NavElement.classList.toggle("active", window.scrollY > 0);
		if (window.scrollY > 0) image.src = "./static/img/logo_01.svg";
		else image.src = "./static/img/logo_02.png";
	});
}
class HEADER extends HTMLElement {
	connectedCallback() {
		this.innerHTML =
			`<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="./static/img/logo_02.png" width="50%" height="50%" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="about_ursi.html">URSI</a></li>
              <li><a class="dropdown-item" href="about_inrass.html">InRaSS</a></li>
              <li><a class="dropdown-item" href="about_aries.html">ARIES</a></li>
              <li><a class="dropdown-item" href="about_gehu.html">GEHU</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Committees</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="committes.html">Advisory Committee</a></li>
              <li><a class="dropdown-item" href="Organizing_Committee.html">Organizing Committee</a></li>
              <li><a class="dropdown-item" href="Scientific_Organizing_Committee.html">Scientific Organizing Committee</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link active" aria-current="page" href="workshops.html">Workshops</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Awards</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="award2.html">Student Paper Competition (SPC)</a></li>
              <li><a class="dropdown-item" href="awards.html">Young Scientist Award (YSA)</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link active" aria-current="page" href="program.html">Program</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link active" aria-current="page" href="registration.html">Registration</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Logistics</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="logistic_venue.html">Venue</a></li>
              <li><a class="dropdown-item" href="logistic_accommodations.html">Accommodation</a></li>
              <li><a class="dropdown-item" href="#">Travel</a></li>
              <li><a class="dropdown-item" href="logistics_tour.html">Tour</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="sponsorship.html">Sponsorship</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="membership.html">Membership</a></li>
        </ul>
      </div>
    </div>
  </nav>`
	}
}
class FOOTER extends HTMLElement {
	connectedCallback() {
		this.innerHTML =
			`<footer class="site-footer">
    <div class="footer-bottom">
        <p>Powered By <br> Graphic Era Hill University (GEHU) and Aryabhatta Research Institute of Observational Sciences (ARIES)</p>
    </div>
</footer>`
	}
}
class SLIDER extends HTMLElement {
	connectedCallback() {
		this.innerHTML =
			`<div class="hero-section">
			<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active"><img src="./static/img/slide_show/frame_01.png" class="d-block w-100" alt="" /></div>
					<div class="carousel-item"><img src="./static/img/slide_show/frame_02.png" class="d-block w-100" alt="" /></div>
					<div class="carousel-item"><img src="./static/img/slide_show/frame_03.png" class="d-block w-100" alt="" /></div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span></button>
				</div>
			</div>
		</div>`
	}
}
customElements.define('header-component', HEADER);
customElements.define('footer-component', FOOTER);
customElements.define('slider-component', SLIDER);
changeNavbarOnScroll();
