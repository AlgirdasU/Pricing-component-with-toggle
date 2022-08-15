"use strict";

document.addEventListener("click", function (e) {
  const clickedSwitchButton = e.target.closest(".pricing__switch");
  console.log(clickedSwitchButton);

  if (!clickedSwitchButton) return;

  if (clickedSwitchButton) {
    document
      .querySelectorAll(".card__price-box")
      .forEach((price) => price.classList.toggle("card__active"));
  }
});
