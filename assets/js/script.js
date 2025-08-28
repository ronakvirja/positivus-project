const accordionItems = document.querySelectorAll(".working-container");

accordionItems.forEach((item) => {
  const question = item.querySelector(".question-section");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all items
    accordionItems.forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".working-ans").classList.add("dis-none");
      i.querySelector("hr").classList.add("dis-none");
      const icons = i.querySelectorAll(".pluse-icon, .minus-icon");
      icons[0].classList.remove("dis-none"); // plus visible
      icons[1].classList.add("dis-none"); // minus hidden
    });

    // If clicked item was not already active, open it
    if (!isActive) {
      item.classList.add("active");
      item.querySelector(".working-ans").classList.remove("dis-none");
      item.querySelector("hr").classList.remove("dis-none");
      const icons = item.querySelectorAll(".pluse-icon, .minus-icon");
      icons[0].classList.add("dis-none"); // plus hidden
      icons[1].classList.remove("dis-none"); // minus visible
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".testimonials-slider", {
    perPage: 2,
    focus: "center",
    type: "loop",

    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.25,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });
  splide.mount();
});

const navbarToggle = document.querySelector(".nav-toggle");
const navbarMenu = document.querySelector(".nav-links");
navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
