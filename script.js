function leftScroll() {
  const left = document.querySelector(".card");
  left.scrollBy(300, 0);
}
function rightScroll() {
  const right = document.querySelector(".card");
  right.scrollBy(-300, 0);
}

("use strict");
const leftArrow = document.querySelector(".arrowleft"),
  rightArrow = document.querySelector(".arrowright"),
  slider = document.querySelector(".testi-slider");

/**
 * @brief Scroll to the right
 */
function scrollRight() {
  if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    slider.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  }
}

/**
 * @brief Scroll to the left
 */
function scrollLeft() {
  slider.scrollBy({
    left: -window.innerWidth,
    behavior: "smooth",
  });
}

// Auto slider
let timerId = setInterval(scrollRight, 7000);

/**
 * @brief Reset timer for scrolling right
 */
function resetTimer() {
  clearInterval(timerId);
  timerId = setInterval(scrollRight, 7000);
}

// Scroll Events
slider.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft();
    resetTimer();
  }
});

slider.addEventListener("click", function (ev) {
  if (ev.target === rightArrow) {
    scrollRight();
    resetTimer();
  }
});
