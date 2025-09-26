
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(index) {
  slideIndex = index;
  document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 4000);
