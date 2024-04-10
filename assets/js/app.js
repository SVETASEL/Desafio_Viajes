var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#enviarCorreo").click(function () {
  alert("Correo enviado exitosamente!");
});

$("p, #ingredients").on("dblclick", function () {
  $(this).css({
    color: "red",
  });
});

$("p, #preparacion").on("dblclick", function () {
  $(this).css({
    color: "red",
  });
});

$(".card-title").on("click", function () {
  $(this).css({
    cursor: "pointer",
  });
  $(".card-text").toggle("slow", function () {});
});
