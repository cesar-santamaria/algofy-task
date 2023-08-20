const biographyHeaders = document.querySelectorAll(".biography-header");
const biographyContents = document.querySelectorAll(".biography-content");
const navMenu = document.querySelector(".primary-navigation");
const mobileIcon = document.querySelector(".mobile-icon");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

/* Header scrolling animation */
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* Mobile -menu */
mobileIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

/* Collapsable paragraph */
for (let i = 0; i < biographyHeaders.length; i++) {
  biographyHeaders[i].addEventListener("click", () => {
    biographyContents[i].style.display =
      biographyContents[i].style.display == "block" ? "none" : "block";
  });
}

/* Carousel */
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".splide", {
    type: "loop",
    perPage: 4,
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
    focus: "center",
  });

  splide.mount();
});
