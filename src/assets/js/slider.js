let currentItem;

function initializeSlider() {
  const sliderItems = document.querySelectorAll(".slider-item");
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  sliderItems.forEach((item) => {
    const expand = () => {
      if (item === currentItem) return;

      currentItem?.classList.remove("slider-item-hover");
      item.classList.add("slider-item-hover");
      currentItem = item;
    };

    const reset = () => {
      item.classList.remove("slider-item-hover");
      if (currentItem === item) {
        currentItem = null;
      }
    };

    // Desktop hover
    item.addEventListener("mouseenter", expand);
    item.addEventListener("mouseleave", () => {
      if (!isTouchDevice) reset();
    });

    // Touch tap
    if (isTouchDevice) {
      item.addEventListener("touchstart", expand);
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeSlider);
