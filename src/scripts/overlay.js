const openButton = document.querySelectorAll("#send__reviews");
const overlayElement = document.querySelector(".overlay");
const closeElement = overlayElement.querySelector(".overlay__close");


openButton.forEach(function(button) {
    button.addEventListener("click", function() {
         overlayElement.style.display = "flex";
});
})

closeElement.addEventListener("click", function(e) {
  e.preventDefault();
  overlayElement.style.display = "none";
});

overlayElement.addEventListener("click", function(e) {
  if (e.target === overlayElement) {
    closeElement.click();
  }
});
