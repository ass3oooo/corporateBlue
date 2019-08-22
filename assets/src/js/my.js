"use strict";

// slider
(function() {
  const BREAK_POINT = 575.98;

  let slider = $("#slider");
  let sliderItems = slider.find("li.hero__item");

  slider.on("click", (evt) => {
    let target = evt.target;

    if (document.body.clientWidth > BREAK_POINT && target.classList.contains("hero__item-label")) {
      sliderItems.removeClass("active");
      $(target).parent("li.hero__item").addClass("active");
    }
  });
})();
