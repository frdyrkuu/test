var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// Prevent default action on image click
document.querySelectorAll(".swiper-slide img").forEach((img) => {
  img.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
