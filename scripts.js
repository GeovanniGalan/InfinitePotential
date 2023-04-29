// get the buttons and causes wrapper
const subscribeButton = document.querySelector(".subscribe-button");
const likeButton = document.querySelector(".like-button");
const causesWrapper = document.querySelector(".causes-wrapper");

// disable scrolling function
function disableScroll() {
  // set the overflow property to hidden to disable scrolling
  document.body.style.overflow = "hidden";
}

// enable scrolling function
function enableScroll() {
  // set the overflow property to auto to enable scrolling
  document.body.style.overflow = "auto";
}

// show causes function
function showCauses() {
  causesWrapper.classList.remove("hide");
}

// listen for the click event on the buttons
subscribeButton.addEventListener("click", () => {
  enableScroll();
  showCauses();
});

likeButton.addEventListener("click", () => {
  enableScroll();
  showCauses();
});
