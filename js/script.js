// 共通html読込
document.addEventListener("DOMContentLoaded", async () => {
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

  await loadHTML("#header", "./common/header.html");
  loadHTML("#footer", "./common/footer.html");

  setTime();
  setInterval(setTime, 60000);
  hum();
});

// slideshow
const slides = document.querySelectorAll("#mainVisual .slide");
let current = 0;

setInterval(function () {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);

// nowtime
function setTime() {
  const hour = new Date().getHours();
  const time = document.getElementById("status");

  if (hour >= 10 && hour < 17) {
    time.textContent = "OPEN";
    time.style.color = "#4386dc";
  } else {
    time.textContent = "CLOSE";
    time.style.color = "#333";
  }
}

// hummenu
function hum() {
  const menu = document.getElementById("hummenu");
  const nav = document.getElementById("humnav");

  menu.addEventListener("click", function () {
    menu.classList.toggle("open");
    nav.classList.toggle("open");
  });
}
