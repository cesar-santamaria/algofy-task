const biographyHeaders = document.getElementsByClassName("biography-header");
const biographyContents = document.getElementsByClassName("biography-content");

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
