const biographyHeaders = document.getElementsByClassName("biography-header");
const biographyContents = document.getElementsByClassName("biography-content");

/* Collapsable paragraph */
for (let i = 0; i < biographyHeaders.length; i++) {
  biographyHeaders[i].addEventListener("click", () => {
    biographyContents[i].style.display =
      biographyContents[i].style.display == "block" ? "none" : "block";
  });
}
