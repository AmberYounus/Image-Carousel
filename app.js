const images = document.getElementById("images");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#images img");

let idx = 0;
var interval = setInterval(run, 3000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  images.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval)
  interval = setInterval(run, 2000)
}


rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
