//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentActive = 0;

  updateButtons();

  nextButton.addEventListener("click", function () {
    currentActive++;
    updateProgress();
  });

  prevButton.addEventListener("click", function () {
    currentActive--;
    updateProgress();
  });

  function updateProgress() {
    circles.forEach((circle, index) => {
      if (index <= currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    updateButtons();
  }

  function updateButtons() {
    if (currentActive === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentActive === circles.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  }
});