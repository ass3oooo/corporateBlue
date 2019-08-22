"use strict";

// slider
(function() {
  let slider = $("#slider");

  let sliderItems = slider.find("li.hero__item");
  let sliderLabels = slider.find("li > .hero__item-label");
  let sliderContents = slider.find("li > .hero__item-content");

  slider.on("click", (evt) => {
    let target = evt.target;

    if (document.body.clientWidth > 575.98 && target.classList.contains("hero__item-label")) {
      console.log("sliderLabel triggered");
      sliderItems.removeClass("active");
      $(target).parent("li.hero__item").addClass("active");
    }
  });
})();
