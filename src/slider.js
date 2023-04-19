let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll(".movie");

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll(".movie");
    images.style.transform = `translateX(0px)`;
    return;
  }

  let images = document.querySelector(".moviewatch_slider");
  images.style.transform = `translateX(-${currentSlide * 690}px)`;

  if (currentSlide === imageCount.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}

setInterval(() => {
  startSlider();
}, 5000);
