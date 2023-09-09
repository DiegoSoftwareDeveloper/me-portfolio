/**
 * Action responsive navbar menu toggle
 */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/**
 * Action navbar sticky on scroll / add class active in section view / remove responsive navbar menu (hamburguer)
 */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY + 100);

  /**
   * Remove class hamburguer menu
   */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/**
 * Actions Scroll Reveal
 */
// Changing the defaults
window.sr = ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// Customizing a reveal set
sr.reveal(".home-content, .heading", { origin: "top" });
sr.reveal(".home-img, .services-container, .portfolio-box, .contact form", {
  origin: "bottom",
});
sr.reveal(".home-content h1, .about-img", { origin: "left" });
sr.reveal(".home-content p, .about-content", { origin: "right" });

/**
 * Actions Typed.js
 */
let typed = new Typed(".multiple-text", {
  strings: [
    ".Net Developer",
    "SQL Server Developer",
    "Add-ons Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
