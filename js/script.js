// 共通html読込
document.addEventListener("DOMContentLoaded", () => {
  // @ts-ignore
  const loadHTML = async (selector, file) => {
    const target = document.querySelector(selector);
    if (!target) return;
    try {
      const response = await fetch(file);
      if (response.ok) {
        const data = await response.text();
        target.innerHTML = data;
      }
    } catch (error) {
      console.error("HTMLの読み込みに失敗しました", error);
    }
  };

  loadHTML("#header", "./common/header.html");
  loadHTML("#footer", "./common/footer.html");
});

// slideshow
const slides = document.querySelectorAll("#mainVisual .slide");
let current = 0;

setInterval(function () {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);
