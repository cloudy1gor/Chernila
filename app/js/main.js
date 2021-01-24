var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
});

//фильтрация
function app() {
  const buttons = document.querySelectorAll(".portfolio__btn");
  const cards = document.querySelectorAll(".portfolio__item");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("anime");
      } else {
        item.classList.remove("hide");
        item.classList.remove("anime");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });

  cards.forEach((card) => {
    card.ontransitionend = function () {
      if (card.classList.contains("anime")) {
        card.classList.add("hide");
      }
    };
  });
}
app();
